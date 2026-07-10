import { useMemo, useState } from 'react'
import { getTopic, topics } from '../content'
import type { Screen } from '../App'
import type { TermEntry } from '../types/content'
import { markTrainerCompleted, type Progress } from '../lib/storage'
import { pickRelatedDistractors } from '../lib/termDistractors'

interface Props {
  topicCode: string
  progress: Progress
  setProgress: (p: Progress) => void
  onNavigate: (s: Screen) => void
}

interface CardState {
  term: TermEntry
  /** Aantal keer correct beantwoord in deze sessie. */
  correct: number
  /** Aantal keer fout beantwoord in deze sessie. */
  wrong: number
}

/** Hussel een array deterministisch genoeg voor onze use case. */
function shuffle<T>(arr: T[]): T[] {
  return [...arr]
    .map((x) => ({ x, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((y) => y.x)
}

export function Trainer({ topicCode, progress, setProgress, onNavigate }: Props) {
  const topic = getTopic(topicCode)
  const terms = useMemo(() => topic?.terms ?? [], [topic])

  // Alle begrippen uit het hele dossier — de afleiders komen uit dezelfde
  // categorie als het juiste begrip, ook als dat begrip bij een ander onderwerp
  // hoort. Zo passen de opties inhoudelijk bij de vraag.
  const allTerms = useMemo(() => topics.flatMap((t) => t.terms ?? []), [])
  const topicTermNames = useMemo(() => new Set(terms.map((t) => t.term)), [terms])

  // Per term: hoeveel keer goed/fout in deze sessie
  const [cards, setCards] = useState<CardState[]>(() =>
    terms.map((t) => ({ term: t, correct: 0, wrong: 0 })),
  )
  const [currentIdx, setCurrentIdx] = useState(0)
  const [picked, setPicked] = useState<string | null>(null)
  const [order, setOrder] = useState<number[]>(() => shuffle(terms.map((_, i) => i)))
  const [finished, setFinished] = useState(false)

  if (!topic) return <div className="text-rose-700">Onderwerp niet gevonden.</div>

  if (terms.length === 0) {
    return (
      <div className="space-y-4">
        <button onClick={() => onNavigate({ name: 'lesson', topicCode })} className="text-sm text-primary-600 hover:underline">
          ← Terug naar lesstof
        </button>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-6">
          <h2 className="font-semibold text-amber-800">Geen begrippentrainer beschikbaar</h2>
          <p className="text-sm text-amber-700 mt-1">
            Voor dit onderwerp zijn nog geen begrippen ingevoerd. Je kunt direct door naar de quiz.
          </p>
          <button
            onClick={() => onNavigate({ name: 'quiz', topicCode })}
            className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
          >
            Naar de quiz →
          </button>
        </div>
      </div>
    )
  }

  const currentCardIdx = order[currentIdx] ?? 0
  const currentCard = cards[currentCardIdx]

  // Aantal begrippen 'beheerst' (min. 1× goed in deze sessie)
  const masteredCount = cards.filter((c) => c.correct >= 1).length
  const totalCount = cards.length
  const allMastered = masteredCount === totalCount

  // Vier multiple-choice opties: 1 juist + 3 afleiders uit dezelfde categorie
  // (een afwerking krijgt andere afwerkingen als afleider, geen kozijn) — zodat
  // de opties inhoudelijk bij de vraag passen en je niet kunt wegstrepen.
  const options = useMemo(() => {
    if (!currentCard) return []
    const distractors = pickRelatedDistractors(currentCard.term, allTerms, 3, topicTermNames)
    return shuffle([currentCard.term.term, ...distractors])
  }, [currentCard, allTerms, topicTermNames])

  const handlePick = (option: string) => {
    if (picked !== null) return
    setPicked(option)
    const isCorrect = option === currentCard.term.term
    setCards((prev) => {
      const next = [...prev]
      next[currentCardIdx] = {
        ...next[currentCardIdx],
        correct: next[currentCardIdx].correct + (isCorrect ? 1 : 0),
        wrong: next[currentCardIdx].wrong + (isCorrect ? 0 : 1),
      }
      return next
    })
  }

  const handleNext = () => {
    setPicked(null)
    // Bereken volgende index — sla 'beheerste' cards over,
    // pak fouten en nieuwe achter elkaar
    const nextOrder = [...order]
    if (currentIdx >= nextOrder.length - 1) {
      // Begin opnieuw met alleen niet-beheerste kaarten
      const remaining = cards
        .map((c, i) => ({ c, i }))
        .filter((x) => x.c.correct < 1)
        .map((x) => x.i)
      if (remaining.length === 0) {
        setFinished(true)
        setProgress(markTrainerCompleted(progress, topicCode))
        return
      }
      setOrder(shuffle(remaining))
      setCurrentIdx(0)
    } else {
      setCurrentIdx(currentIdx + 1)
    }
  }

  const handleReset = () => {
    setCards(terms.map((t) => ({ term: t, correct: 0, wrong: 0 })))
    setOrder(shuffle(terms.map((_, i) => i)))
    setCurrentIdx(0)
    setPicked(null)
    setFinished(false)
  }

  // ----- Eindstaat -----
  if (finished || allMastered) {
    return (
      <div className="space-y-6 max-w-2xl">
        <button onClick={() => onNavigate({ name: 'lesson', topicCode })} className="text-sm text-primary-600 hover:underline">
          ← Terug naar lesstof
        </button>

        <header>
          <div className="text-xs font-mono text-primary-500">{topic.code}</div>
          <h1 className="text-2xl font-bold text-primary-800">{topic.title} — Begrippentrainer</h1>
        </header>

        <div className="rounded-xl p-4 sm:p-6 shadow-sm border bg-emerald-50 border-emerald-300">
          <div className="text-3xl">✓</div>
          <h2 className="text-xl font-bold text-emerald-800 mt-1">Alle begrippen beheerst!</h2>
          <p className="text-sm text-emerald-700 mt-2">
            Je hebt alle {totalCount} begrippen minstens 1× correct beantwoord. De quiz is nu beschikbaar.
          </p>
        </div>

        <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200">
          <h3 className="font-semibold text-primary-700 mb-3">Overzicht</h3>
          <ul className="space-y-2 text-sm">
            {cards.map((c, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="text-emerald-700">✓</span>
                <span className="font-medium">{c.term.term}</span>
                <span className="text-slate-500">— {c.term.definition.slice(0, 60)}{c.term.definition.length > 60 ? '…' : ''}</span>
                {c.wrong > 0 && (
                  <span className="text-xs text-amber-600 ml-auto">{c.wrong}× fout</span>
                )}
              </li>
            ))}
          </ul>
        </section>

        <div className="flex gap-3">
          <button
            onClick={() => onNavigate({ name: 'quiz', topicCode })}
            className="px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-semibold"
          >
            Naar de quiz →
          </button>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 rounded-md"
          >
            Trainer opnieuw
          </button>
        </div>
      </div>
    )
  }

  // ----- Actief stadium -----
  return (
    <div className="space-y-6 max-w-2xl">
      <button onClick={() => onNavigate({ name: 'lesson', topicCode })} className="text-sm text-primary-600 hover:underline">
        ← Terug naar lesstof
      </button>

      <header>
        <div className="text-xs font-mono text-primary-500">{topic.code}</div>
        <h1 className="text-2xl font-bold text-primary-800">{topic.title} — Begrippentrainer</h1>
        <p className="text-slate-600 mt-1 text-sm">
          Elk begrip moet 1× correct beantwoord — daarna wordt de quiz vrijgespeeld.
        </p>
      </header>

      {/* Voortgang */}
      <div className="bg-slate-100 border border-slate-200 rounded-lg p-3">
        <div className="flex items-center justify-between text-sm mb-1.5">
          <span className="text-slate-700 font-medium">Voortgang</span>
          <span className="text-slate-700">
            <strong>{masteredCount}</strong> van {totalCount} beheerst
          </span>
        </div>
        <div className="w-full bg-slate-300 rounded-full h-2 overflow-hidden">
          <div
            className="bg-emerald-500 h-2 transition-all"
            style={{ width: `${(masteredCount / totalCount) * 100}%` }}
          />
        </div>
      </div>

      {/* Vraag */}
      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200 space-y-4">
        <div className="text-xs uppercase tracking-wide text-slate-500">
          Welk begrip past bij deze omschrijving?
        </div>
        <div className="text-base text-slate-800 leading-relaxed border-l-4 border-primary-400 pl-4 italic">
          {currentCard.term.definition}
        </div>
        <div className="space-y-2 pt-2">
          {options.map((opt) => {
            const isCorrect = opt === currentCard.term.term
            const isPicked = picked === opt
            let style = 'bg-white border-slate-300 hover:bg-slate-50'
            if (picked !== null) {
              if (isCorrect) style = 'bg-emerald-100 border-emerald-400 text-emerald-900'
              else if (isPicked) style = 'bg-rose-100 border-rose-400 text-rose-900'
              else style = 'bg-slate-100 border-slate-200 text-slate-400'
            }
            return (
              <button
                key={opt}
                onClick={() => handlePick(opt)}
                disabled={picked !== null}
                className={`w-full text-left px-4 py-2.5 rounded-md border text-sm transition ${style}`}
              >
                {opt}
              </button>
            )
          })}
        </div>

        {picked !== null && (
          <div className="pt-3 border-t flex items-center justify-between">
            <div className="text-sm">
              {picked === currentCard.term.term ? (
                <span className="text-emerald-700 font-medium">
                  ✓ Correct! {currentCard.correct >= 1 && currentCard.correct === 1 ? 'Beheerst.' : ''}
                </span>
              ) : (
                <span className="text-rose-700 font-medium">
                  ✗ Het juiste antwoord was: <strong>{currentCard.term.term}</strong> — komt later terug
                </span>
              )}
            </div>
            <button
              onClick={handleNext}
              className="px-4 py-1.5 text-sm rounded-md bg-primary-600 hover:bg-primary-700 text-white"
            >
              Volgende →
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
