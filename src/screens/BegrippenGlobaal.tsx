/**
 * BegrippenGlobaal — iPhone-first flash-card trainer voor ALLE begrippen
 * (~530 termen uit 38 onderwerpen, A t/m D).
 *
 * Modus: definitie zichtbaar → kies de juiste term (multiple-choice).
 * Filter: alles | sectie A/B/C/D | specifiek onderwerp.
 * Voortgang: per term 'beheerst' (≥1× goed) — bewaard in localStorage.
 */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { topics } from '../content'
import type { Screen } from '../App'
import type { ExamSection, Section, TermEntry } from '../types/content'
import { pickRelatedDistractors } from '../lib/termDistractors'

interface Props {
  onNavigate: (s: Screen) => void
}

// ─── helpers ────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  return [...arr]
    .map((x) => ({ x, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map((y) => y.x)
}

interface FlatTerm {
  term: TermEntry
  topicCode: string
  topicTitle: string
  section: Section
}

// ─── storage ────────────────────────────────────────────────────────────────

const MASTERED_KEY = 'bouwkunde-begrippen-mastered-v1'

function loadMastered(): Set<string> {
  try {
    const raw = localStorage.getItem(MASTERED_KEY)
    if (raw) return new Set(JSON.parse(raw) as string[])
  } catch { /* ignore */ }
  return new Set()
}

function saveMastered(set: Set<string>) {
  try {
    localStorage.setItem(MASTERED_KEY, JSON.stringify([...set]))
  } catch { /* ignore */ }
}

// ─── component ──────────────────────────────────────────────────────────────

// Besteklezen (BL) heeft geen begrippen; de trainer filtert op de dossier-secties.
type FilterSection = 'all' | ExamSection

export function BegrippenGlobaal({ onNavigate }: Props) {
  // ── filter state ──
  const [filterSection, setFilterSection] = useState<FilterSection>('all')
  const [filterTopic, setFilterTopic] = useState<string>('all')
  const [showTopicPicker, setShowTopicPicker] = useState(false)

  // ── mastered (persisted) ──
  const [mastered, setMastered] = useState<Set<string>>(() => loadMastered())

  // ── quiz state ──
  const [queue, setQueue] = useState<FlatTerm[]>([])
  const [cardIdx, setCardIdx] = useState(0)
  const [picked, setPicked] = useState<string | null>(null)
  const [options, setOptions] = useState<string[]>([])
  const [sessionCorrect, setSessionCorrect] = useState(0)
  const [sessionTotal, setSessionTotal] = useState(0)
  const [sessionFinished, setSessionFinished] = useState(false)

  // ── all flat terms (memo) ──
  const allTerms = useMemo<FlatTerm[]>(() =>
    topics.flatMap((t) =>
      (t.terms ?? []).map((term) => ({
        term,
        topicCode: t.code,
        topicTitle: t.title,
        section: t.section,
      })),
    ),
  [])

  // ── filtered list ──
  const filteredTerms = useMemo<FlatTerm[]>(() => {
    let list = allTerms
    if (filterSection !== 'all') list = list.filter((t) => t.section === filterSection)
    if (filterTopic !== 'all') list = list.filter((t) => t.topicCode === filterTopic)
    return list
  }, [allTerms, filterSection, filterTopic])

  // ── unique sections of filteredTerms ──
  const topicsForSection = useMemo(() => {
    const s = filterSection === 'all' ? null : filterSection
    return topics.filter((t) => !s || t.section === s).filter((t) => (t.terms?.length ?? 0) > 0)
  }, [filterSection])

  // ── Build quiz queue ──
  const buildQueue = useCallback(() => {
    // Prioritise non-mastered; add a few mastered at the end for review
    const notMastered = filteredTerms.filter((ft) => !mastered.has(ft.term.term))
    const masteredList = filteredTerms.filter((ft) => mastered.has(ft.term.term))
    const review = shuffle(masteredList).slice(0, Math.min(5, masteredList.length))
    const combined = shuffle([...notMastered, ...review])
    setQueue(combined)
    setCardIdx(0)
    setPicked(null)
    setSessionCorrect(0)
    setSessionTotal(0)
    setSessionFinished(false)
  }, [filteredTerms, mastered])

  // Rebuild when filter changes
  useEffect(() => {
    buildQueue()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterSection, filterTopic])

  // ── Current card ──
  const card = queue[cardIdx] ?? null

  // ── Build MC options for current card ──
  // Afleiders komen uit dezelfde categorie als het juiste begrip (vocht →
  // andere vochtsoorten, natuursteen → andere steensoorten), met voorrang voor
  // begrippen uit hetzelfde onderwerp — zo passen ze inhoudelijk bij de vraag.
  const buildOptions = useCallback((card: FlatTerm, allFlat: FlatTerm[]) => {
    const pool = allFlat.map((ft) => ft.term)
    const sameTopicNames = new Set(
      allFlat.filter((ft) => ft.topicCode === card.topicCode).map((ft) => ft.term.term),
    )
    const distractors = pickRelatedDistractors(card.term, pool, 3, sameTopicNames)
    return shuffle([card.term.term, ...distractors])
  }, [])

  const lastCardTerm = useRef<string | null>(null)
  useEffect(() => {
    if (card && card.term.term !== lastCardTerm.current) {
      lastCardTerm.current = card.term.term
      setOptions(buildOptions(card, allTerms))
      setPicked(null)
    }
  }, [card, allTerms, buildOptions])

  // ── Persist mastered ──
  useEffect(() => {
    saveMastered(mastered)
  }, [mastered])

  // ── handlers ──
  function handlePick(opt: string) {
    if (picked !== null || !card) return
    setPicked(opt)
    const correct = opt === card.term.term
    setSessionTotal((n) => n + 1)
    if (correct) {
      setSessionCorrect((n) => n + 1)
      setMastered((prev) => new Set([...prev, card.term.term]))
    }
  }

  function handleNext() {
    if (!card) return
    if (cardIdx + 1 >= queue.length) {
      setSessionFinished(true)
    } else {
      setCardIdx((i) => i + 1)
      setPicked(null)
    }
  }

  function handleResetMastered() {
    const newSet = new Set<string>()
    setMastered(newSet)
    saveMastered(newSet)
    buildQueue()
  }

  // ── section filter shorthand ──
  function setSection(s: FilterSection) {
    setFilterSection(s)
    setFilterTopic('all')
    setShowTopicPicker(false)
  }

  // ── stats ──
  const total = filteredTerms.length
  const masteredCount = filteredTerms.filter((ft) => mastered.has(ft.term.term)).length
  const progress = total > 0 ? masteredCount / total : 0

  // ─────────────────────────────────────────────────────────────────────────
  // RENDER
  // ─────────────────────────────────────────────────────────────────────────

  // Section pill colours
  const sectionColour: Record<FilterSection, string> = {
    all: 'bg-slate-700 text-white',
    A: 'bg-blue-600 text-white',
    B: 'bg-orange-500 text-white',
    C: 'bg-emerald-600 text-white',
    D: 'bg-violet-600 text-white',
  }

  const activePill = (s: FilterSection) =>
    filterSection === s
      ? sectionColour[s]
      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'

  // ── Session finished ──
  if (sessionFinished) {
    const pct = sessionTotal > 0 ? Math.round((sessionCorrect / sessionTotal) * 100) : 0
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <TopBar onNavigate={onNavigate} />
        <div className="flex-1 flex flex-col items-center justify-center px-5 py-8 gap-6">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 w-full max-w-sm text-center space-y-3">
            <div className="text-5xl">{pct >= 70 ? '🎉' : '💪'}</div>
            <h2 className="text-xl font-bold text-slate-800">Ronde klaar!</h2>
            <p className="text-slate-600">
              {sessionCorrect} van {sessionTotal} goed — <strong>{pct}%</strong>
            </p>
            <div className="text-sm text-slate-500">
              {masteredCount} van {total} begrippen totaal beheerst
            </div>
            <ProgressBar value={progress} />
          </div>
          <div className="flex flex-col gap-3 w-full max-w-sm">
            <button
              onClick={buildQueue}
              className="w-full py-3 rounded-xl bg-violet-600 text-white font-semibold text-base active:bg-violet-700"
            >
              Nog een ronde
            </button>
            <button
              onClick={() => onNavigate({ name: 'dashboard' })}
              className="w-full py-3 rounded-xl bg-slate-200 text-slate-800 font-medium text-base active:bg-slate-300"
            >
              Terug naar dashboard
            </button>
            {masteredCount > 0 && (
              <button
                onClick={handleResetMastered}
                className="w-full py-2 rounded-xl border border-slate-300 text-slate-500 text-sm"
              >
                Voortgang wissen en opnieuw beginnen
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <TopBar onNavigate={onNavigate} />

      {/* ── Filter bar ── */}
      <div className="bg-white border-b border-slate-200 px-4 py-3 sticky top-14 z-10">
        {/* Section pills */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {(['all', 'A', 'B', 'C', 'D'] as FilterSection[]).map((s) => (
            <button
              key={s}
              onClick={() => setSection(s)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition ${activePill(s)}`}
            >
              {s === 'all' ? 'Alles' : `Sectie ${s}`}
            </button>
          ))}
          <button
            onClick={() => setShowTopicPicker((v) => !v)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition ${
              filterTopic !== 'all'
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {filterTopic !== 'all'
              ? topics.find((t) => t.code === filterTopic)?.code ?? 'Onderwerp'
              : 'Onderwerp ▾'}
          </button>
        </div>

        {/* Topic picker dropdown */}
        {showTopicPicker && (
          <div className="mt-2 max-h-48 overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-lg">
            <button
              onClick={() => { setFilterTopic('all'); setShowTopicPicker(false) }}
              className={`w-full text-left px-4 py-2.5 text-sm border-b border-slate-100 ${
                filterTopic === 'all' ? 'bg-indigo-50 text-indigo-800 font-medium' : 'text-slate-700'
              }`}
            >
              Alle onderwerpen
            </button>
            {topicsForSection.map((t) => (
              <button
                key={t.code}
                onClick={() => { setFilterTopic(t.code); setShowTopicPicker(false) }}
                className={`w-full text-left px-4 py-2.5 text-sm border-b border-slate-100 ${
                  filterTopic === t.code ? 'bg-indigo-50 text-indigo-800 font-medium' : 'text-slate-700'
                }`}
              >
                <span className="font-mono text-xs text-slate-400 mr-2">{t.code}</span>
                {t.title}
              </button>
            ))}
          </div>
        )}

        {/* Progress bar + count */}
        <div className="mt-2 flex items-center gap-2">
          <ProgressBar value={progress} />
          <span className="text-xs text-slate-500 whitespace-nowrap">
            {masteredCount}/{total}
          </span>
        </div>
      </div>

      {/* ── Main card area ── */}
      <div className="flex-1 flex flex-col items-center justify-start px-4 pt-6 pb-8">
        {total === 0 ? (
          <div className="text-slate-500 text-center mt-10">
            Geen begrippen gevonden voor deze filter.
          </div>
        ) : queue.length === 0 ? (
          <AllMastered count={total} onReset={handleResetMastered} onNavigate={onNavigate} />
        ) : card === null ? null : (
          <div className="w-full max-w-md space-y-4">
            {/* Card counter */}
            <div className="flex items-center justify-between text-xs text-slate-500 px-1">
              <span>
                Kaart {cardIdx + 1} van {queue.length}
              </span>
              <span className="text-violet-600 font-medium">
                {card.topicCode} · {card.topicTitle}
              </span>
            </div>

            {/* Question card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 space-y-4">
              <div className="text-[11px] uppercase tracking-widest text-slate-400 font-medium">
                Welk begrip past bij deze definitie?
              </div>
              <div className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium border-l-4 border-violet-400 pl-4">
                {card.term.definition}
              </div>

              {/* Options */}
              <div className="space-y-2.5 pt-1">
                {options.map((opt) => {
                  const isCorrect = opt === card.term.term
                  const isPicked = picked === opt
                  let cls =
                    'w-full text-left px-4 py-3.5 rounded-xl border text-sm sm:text-base font-medium transition active:scale-[0.98]'
                  if (picked === null) {
                    cls += ' bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                  } else if (isCorrect) {
                    cls += ' bg-emerald-50 border-emerald-400 text-emerald-900'
                  } else if (isPicked) {
                    cls += ' bg-rose-50 border-rose-400 text-rose-900'
                  } else {
                    cls += ' bg-slate-50 border-slate-200 text-slate-400'
                  }
                  return (
                    <button
                      key={opt}
                      onClick={() => handlePick(opt)}
                      disabled={picked !== null}
                      className={cls}
                    >
                      {opt}
                    </button>
                  )
                })}
              </div>

              {/* Feedback + next */}
              {picked !== null && (
                <div className="pt-3 border-t border-slate-100 space-y-3">
                  {picked === card.term.term ? (
                    <p className="text-emerald-700 font-semibold text-sm">
                      ✓ Correct! Beheerst.
                    </p>
                  ) : (
                    <p className="text-rose-700 text-sm">
                      ✗ Juiste antwoord: <strong>{card.term.term}</strong>
                    </p>
                  )}
                  <button
                    onClick={handleNext}
                    className="w-full py-3 rounded-xl bg-violet-600 text-white font-semibold text-base active:bg-violet-700"
                  >
                    {cardIdx + 1 < queue.length ? 'Volgende →' : 'Bekijk resultaat →'}
                  </button>
                </div>
              )}
            </div>

            {/* Mastered indicator for this card */}
            {mastered.has(card.term.term) && picked === null && (
              <p className="text-center text-xs text-emerald-600">
                ★ Al eerder beheerst — ter herhaling
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function TopBar({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  return (
    <div className="bg-violet-700 text-white px-4 py-3 flex items-center gap-3 sticky top-0 z-20">
      <button
        onClick={() => onNavigate({ name: 'dashboard' })}
        className="text-violet-200 hover:text-white text-sm"
      >
        ←
      </button>
      <div className="flex-1 min-w-0">
        <div className="text-[10px] uppercase tracking-wider text-violet-300">Bouwkunde</div>
        <div className="font-semibold text-base leading-tight">🧠 Begrippen — alle onderwerpen</div>
      </div>
    </div>
  )
}

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="flex-1 bg-slate-200 rounded-full h-2 overflow-hidden">
      <div
        className="bg-emerald-500 h-2 transition-all duration-500"
        style={{ width: `${Math.round(value * 100)}%` }}
      />
    </div>
  )
}

function AllMastered({
  count,
  onReset,
  onNavigate,
}: {
  count: number
  onReset: () => void
  onNavigate: (s: Screen) => void
}) {
  return (
    <div className="w-full max-w-sm text-center space-y-5 mt-8">
      <div className="text-6xl">🏆</div>
      <div className="space-y-1">
        <h2 className="text-xl font-bold text-slate-800">Alle {count} begrippen beheerst!</h2>
        <p className="text-slate-500 text-sm">Je hebt elk begrip minstens 1× goed beantwoord.</p>
      </div>
      <div className="flex flex-col gap-3">
        <button
          onClick={onReset}
          className="w-full py-3 rounded-xl bg-violet-600 text-white font-semibold text-base"
        >
          Opnieuw beginnen
        </button>
        <button
          onClick={() => onNavigate({ name: 'dashboard' })}
          className="w-full py-3 rounded-xl bg-slate-200 text-slate-800 font-medium text-base"
        >
          Dashboard
        </button>
      </div>
    </div>
  )
}
