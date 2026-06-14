/**
 * Zwakke punten
 *
 * Verzamelt over ALLE onderwerpen heen de vragen waar je de laatste keer de
 * fout in ging en laat je die gericht wegwerken. Beantwoord je zo'n vraag
 * goed, dan verdwijnt hij uit de lijst — ga je ergens opnieuw de fout in,
 * dan komt de vraag vanzelf terug.
 */
import { useMemo } from 'react'
import { dossierOrder, topics } from '../content'
import type { Screen } from '../App'
import type { Question, Topic } from '../types/content'
import { isWeakQuestionStat, recordAnswer, type Progress } from '../lib/storage'
import { clearStickyState, useStickyState } from '../lib/useStickyState'
import { QuestionCard } from '../components/QuestionCard'

interface Props {
  progress: Progress
  setProgress: (p: Progress) => void
  onNavigate: (s: Screen) => void
}

interface WeakQuestion {
  question: Question
  topic: Topic
  wrong: number
  correct: number
}

const ROUND_SIZE = 15

function collectWeakQuestions(progress: Progress): WeakQuestion[] {
  const out: WeakQuestion[] = []
  for (const topic of topics) {
    for (const q of topic.questions) {
      const stat = progress.questions[q.id]
      if (stat && isWeakQuestionStat(stat)) {
        out.push({ question: q, topic, wrong: stat.wrong, correct: stat.correct })
      }
    }
  }
  // Meest fout beantwoorde eerst, daarna dossier-volgorde
  return out.sort(
    (a, b) =>
      b.wrong - b.correct - (a.wrong - a.correct) ||
      dossierOrder.indexOf(a.topic.code) - dossierOrder.indexOf(b.topic.code),
  )
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function ZwakkePunten({ progress, setProgress, onNavigate }: Props) {
  const weakAll = useMemo(() => collectWeakQuestions(progress), [progress])

  const k = 'bouwkunde-zwakkepunten'
  // We bewaren alleen de vraag-IDs van de ronde — de vragen zelf halen we
  // uit de topics zodat er geen grote objecten in localStorage staan.
  const [roundIds, setRoundIds] = useStickyState<string[] | null>(`${k}-ids`, null)
  const [index, setIndex] = useStickyState<number>(`${k}-index`, 0)
  const [results, setResults] = useStickyState<boolean[]>(`${k}-results`, [])
  const [finished, setFinished] = useStickyState<boolean>(`${k}-finished`, false)

  // Reconstrueer de rondevragen uit de IDs
  const roundQuestions = useMemo(() => {
    if (!roundIds) return null
    const byId = new Map<string, WeakQuestion>()
    for (const topic of topics) {
      for (const q of topic.questions) {
        byId.set(q.id, {
          question: q,
          topic,
          wrong: progress.questions[q.id]?.wrong ?? 0,
          correct: progress.questions[q.id]?.correct ?? 0,
        })
      }
    }
    return roundIds
      .map((id) => byId.get(id))
      .filter((w): w is WeakQuestion => w !== undefined)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roundIds])

  function start() {
    const round = shuffle(weakAll.slice(0, ROUND_SIZE * 2)).slice(0, ROUND_SIZE)
    setRoundIds(round.map((w) => w.question.id))
    setIndex(0)
    setResults([])
    setFinished(false)
  }

  function clearState() {
    clearStickyState(`${k}-ids`)
    clearStickyState(`${k}-index`)
    clearStickyState(`${k}-results`)
    clearStickyState(`${k}-finished`)
  }

  // Per-onderwerp samenvatting voor het intro-scherm
  const perTopic = useMemo(() => {
    const map = new Map<string, { topic: Topic; count: number }>()
    for (const w of weakAll) {
      const cur = map.get(w.topic.code)
      if (cur) cur.count += 1
      else map.set(w.topic.code, { topic: w.topic, count: 1 })
    }
    return [...map.values()].sort(
      (a, b) =>
        dossierOrder.indexOf(a.topic.code) - dossierOrder.indexOf(b.topic.code),
    )
  }, [weakAll])

  // ── Intro ──────────────────────────────────────────────────────────────────
  if (!roundIds || !roundQuestions) {
    return (
      <div className="space-y-6 max-w-2xl">
        <button
          onClick={() => onNavigate({ name: 'dashboard' })}
          className="text-sm text-primary-600 hover:underline"
        >
          ← Terug naar overzicht
        </button>

        <header>
          <h1 className="text-2xl font-bold text-primary-800">🎯 Zwakke punten</h1>
          <p className="text-slate-600 mt-1">
            Alle vragen waar je <strong>de laatste keer de fout in ging</strong>,
            uit alle onderwerpen. Beantwoord je zo'n vraag goed, dan verdwijnt
            hij uit de lijst — ga je opnieuw de fout in, dan komt hij terug.
          </p>
        </header>

        {weakAll.length === 0 ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
            <div className="text-4xl">🏆</div>
            <h2 className="font-semibold text-emerald-800 mt-2">
              Geen zwakke punten!
            </h2>
            <p className="text-sm text-emerald-700 mt-1">
              Er zijn op dit moment geen vragen waar je de laatste keer de fout
              in ging. Maak quizzen en examens om nieuwe oefenstof te
              verzamelen.
            </p>
            <button
              onClick={() => onNavigate({ name: 'dashboard' })}
              className="mt-4 px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md font-medium"
            >
              Naar overzicht
            </button>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-rose-600">
                  {weakAll.length}
                </span>
                <span className="text-slate-600">
                  {weakAll.length === 1 ? 'vraag' : 'vragen'} om weg te werken
                </span>
              </div>

              <ul className="mt-4 space-y-1.5">
                {perTopic.map(({ topic, count }) => (
                  <li
                    key={topic.code}
                    className="flex items-center gap-3 text-sm px-3 py-1.5 rounded-md bg-slate-50 border border-slate-200"
                  >
                    <span className="font-mono text-xs text-slate-500 w-12 shrink-0">
                      {topic.code}
                    </span>
                    <span className="flex-1 text-slate-800 truncate">
                      {topic.title}
                    </span>
                    <span className="font-semibold text-rose-700 shrink-0">
                      {count}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={start}
                className="mt-5 w-full sm:w-auto px-6 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-md font-semibold"
              >
                Start ronde ({Math.min(ROUND_SIZE, weakAll.length)} vragen)
              </button>
            </div>

            <p className="text-xs text-slate-500">
              De vragen met de meeste fouten komen het eerst aan bod. Je
              antwoorden tellen mee in je totale voortgang.
            </p>
          </>
        )}
      </div>
    )
  }

  const total = roundQuestions.length

  // ── Resultaat ──────────────────────────────────────────────────────────────
  if (finished || total === 0) {
    const correctCount = results.filter(Boolean).length
    const remaining = collectWeakQuestions(progress).length

    return (
      <div className="space-y-6 max-w-2xl">
        <h1 className="text-2xl font-bold text-primary-800">
          🎯 Ronde afgerond
        </h1>

        <div className="rounded-xl p-5 bg-slate-50 border border-slate-200">
          <div className="text-3xl font-bold text-primary-800">
            {correctCount} / {total}
          </div>
          <p className="text-sm text-slate-600 mt-2">
            {remaining === 0
              ? '🏆 Alle zwakke punten zijn weggewerkt!'
              : `Nog ${remaining} ${remaining === 1 ? 'vraag' : 'vragen'} te gaan — vragen die je nu goed had, zijn uit de lijst verdwenen.`}
          </p>
        </div>

        <div className="flex gap-3 flex-wrap">
          {remaining > 0 && (
            <button
              onClick={start}
              className="px-5 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-md font-medium"
            >
              🔄 Volgende ronde
            </button>
          )}
          <button
            onClick={() => {
              clearState()
              onNavigate({ name: 'dashboard' })
            }}
            className="px-5 py-2 bg-slate-200 hover:bg-slate-300 rounded-md"
          >
            Naar overzicht
          </button>
        </div>
      </div>
    )
  }

  // ── Actieve vraag ──────────────────────────────────────────────────────────
  const w = roundQuestions[Math.min(index, total - 1)]

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="flex items-center justify-between text-sm">
        <button
          onClick={() => {
            clearState()
            onNavigate({ name: 'dashboard' })
          }}
          className="text-primary-600 hover:underline"
        >
          ← Stoppen
        </button>
        <div className="flex items-center gap-2">
          <span className="text-[11px] bg-rose-100 text-rose-800 px-2 py-0.5 rounded font-medium">
            {w.topic.code} · {w.wrong}× fout
          </span>
          <span className="text-slate-500">
            {index + 1} / {total}
          </span>
        </div>
      </div>

      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-rose-500 transition-all"
          style={{ width: `${(index / total) * 100}%` }}
        />
      </div>

      <QuestionCard
        key={`${w.question.id}-${index}`}
        question={w.question}
        onAnswered={(correct) => {
          setResults((prev) => [...prev, correct])
          setProgress(
            recordAnswer(progress, w.question.id, w.question.toetstermCode, correct),
          )
        }}
        onNext={() => {
          if (index + 1 >= total) {
            setFinished(true)
          } else {
            setIndex(index + 1)
          }
        }}
      />
    </div>
  )
}
