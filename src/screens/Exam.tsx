import { topics } from '../content'
import type { Screen } from '../App'
import type { Question, Section, Topic } from '../types/content'
import { clearStickyState, useStickyState } from '../lib/useStickyState'
import { shuffleQuestionOptions } from '../lib/shuffleOptions'

interface Props {
  onNavigate: (s: Screen) => void
}

interface ExamQuestion {
  question: Question
  topic: Topic
}

interface Result {
  examQuestion: ExamQuestion
  picked: number | null
  correct: boolean
}

const SECTION_LABELS: Record<Section, string> = {
  A: 'Algemeen',
  B: 'Constructieve opbouw',
  C: 'Afwerking en installatie',
  D: 'Kwaliteit en duurzaamheid',
}

// Default richtlijnen — kunnen later worden aangepast aan officiële toetsmatrijs SVMNIVO
const SECTION_WEIGHTS: Record<Section, number> = {
  A: 12, // ~20%
  B: 22, // ~37%
  C: 18, // ~30%
  D: 8, // ~13%
}

function pickRandom<T>(arr: T[], n: number): T[] {
  const copy = [...arr]
  const out: T[] = []
  while (out.length < n && copy.length > 0) {
    const idx = Math.floor(Math.random() * copy.length)
    out.push(copy[idx])
    copy.splice(idx, 1)
  }
  return out
}

function buildExam(): ExamQuestion[] {
  const all: ExamQuestion[] = []
  ;(['A', 'B', 'C', 'D'] as Section[]).forEach((sec) => {
    const sectionTopics = topics.filter((t) => t.section === sec)
    // verzamel ALLE mc-vragen van deze sectie
    const pool: ExamQuestion[] = []
    sectionTopics.forEach((t) =>
      t.questions
        .filter((q): q is Question & { type: 'mc' } => q.type === 'mc')
        .forEach((q) => pool.push({ question: shuffleQuestionOptions(q), topic: t })),
    )
    const targetCount = Math.min(SECTION_WEIGHTS[sec], pool.length)
    const picked = pickRandom(pool, targetCount)
    all.push(...picked)
  })
  // Door elkaar husselen voor examen-gevoel
  return all.map((q) => ({ q, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map((x) => x.q)
}

export function Exam({ onNavigate }: Props) {
  // Sticky state — overleeft iPad-tab-evictie tijdens lang examen.
  const k = 'bouwkunde-exam'
  const [examQuestions, setExamQuestions] = useStickyState<ExamQuestion[] | null>(
    `${k}-questions`,
    null,
  )
  const [answers, setAnswers] = useStickyState<Record<string, number>>(
    `${k}-answers`,
    {},
  )
  const [currentIdx, setCurrentIdx] = useStickyState<number>(`${k}-idx`, 0)
  const [submitted, setSubmitted] = useStickyState<boolean>(`${k}-submitted`, false)
  const [startedAt, setStartedAt] = useStickyState<number | null>(
    `${k}-startedAt`,
    null,
  )

  function clearExamState() {
    clearStickyState(`${k}-questions`)
    clearStickyState(`${k}-answers`)
    clearStickyState(`${k}-idx`)
    clearStickyState(`${k}-submitted`)
    clearStickyState(`${k}-startedAt`)
  }

  const totalAvailable = topics.reduce((sum, t) => sum + t.questions.length, 0)
  const targetTotal = (['A', 'B', 'C', 'D'] as Section[]).reduce((s, sec) => s + SECTION_WEIGHTS[sec], 0)

  const start = () => {
    const exam = buildExam()
    setExamQuestions(exam)
    setAnswers({})
    setCurrentIdx(0)
    setSubmitted(false)
    setStartedAt(Date.now())
  }

  const handlePick = (qId: string, optionIdx: number) => {
    if (submitted) return
    setAnswers((a) => ({ ...a, [qId]: optionIdx }))
  }

  const handleSubmit = () => setSubmitted(true)

  // ---------- Render: intro ----------
  if (!examQuestions) {
    return (
      <div className="space-y-6 max-w-3xl">
        <button onClick={() => onNavigate({ name: 'dashboard' })} className="text-sm text-primary-600 hover:underline">
          ← Terug naar overzicht
        </button>

        <header>
          <h1 className="text-2xl font-bold text-primary-800">Examensimulatie</h1>
          <p className="text-slate-600 mt-1">
            Mix van willekeurige vragen uit alle uitgewerkte onderwerpen, verdeeld over secties A/B/C/D —
            zoals het SVMNIVO-examen.
          </p>
        </header>

        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200 space-y-4">
          <h2 className="font-semibold text-primary-700">Wat krijg je?</h2>
          <ul className="text-sm text-slate-700 space-y-1">
            {(['A', 'B', 'C', 'D'] as Section[]).map((sec) => (
              <li key={sec}>
                <strong>Sectie {sec}</strong> · {SECTION_LABELS[sec]}: ~{SECTION_WEIGHTS[sec]} vragen
              </li>
            ))}
          </ul>
          <div className="text-sm text-slate-700 pt-2 border-t">
            Totaal: ~<strong>{targetTotal}</strong> vragen · uit {totalAvailable} beschikbare vragen ·
            slagingsgrens 80% (SVMNIVO-standaard).
          </div>
          <div className="text-xs text-slate-500">
            Tip: maak het examen in één keer af zonder pauzes — dat lijkt het meest op de echte
            examen­situatie.
          </div>
          <button
            onClick={start}
            className="mt-2 px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-semibold"
          >
            Start examen­simulatie
          </button>
        </div>
      </div>
    )
  }

  const total = examQuestions.length

  // ---------- Render: resultaat ----------
  if (submitted) {
    const results: Result[] = examQuestions.map((eq) => {
      const picked = answers[eq.question.id]
      const q = eq.question as Question & { type: 'mc' }
      return {
        examQuestion: eq,
        picked: picked ?? null,
        correct: picked !== undefined && picked === q.correctIndex,
      }
    })
    const correctCount = results.filter((r) => r.correct).length
    const scorePct = correctCount / total
    const passed = scorePct >= 0.8
    const elapsedMin = startedAt ? Math.round((Date.now() - startedAt) / 60000) : 0

    // Score per sectie
    const sectionScores: Record<Section, { c: number; t: number }> = { A: { c: 0, t: 0 }, B: { c: 0, t: 0 }, C: { c: 0, t: 0 }, D: { c: 0, t: 0 } }
    results.forEach((r) => {
      const sec = r.examQuestion.topic.section
      sectionScores[sec].t += 1
      if (r.correct) sectionScores[sec].c += 1
    })

    return (
      <div className="space-y-6">
        <button onClick={() => onNavigate({ name: 'dashboard' })} className="text-sm text-primary-600 hover:underline">
          ← Terug naar overzicht
        </button>

        <header>
          <h1 className="text-2xl font-bold text-primary-800">Examen­uitslag</h1>
        </header>

        <div
          className={`rounded-xl p-4 sm:p-6 shadow-sm border ${
            passed ? 'bg-emerald-50 border-emerald-300' : 'bg-rose-50 border-rose-300'
          }`}
        >
          <div className="flex items-baseline justify-between flex-wrap gap-3">
            <div>
              <div className="text-3xl font-bold text-primary-800">
                {correctCount} / {total}
              </div>
              <div className="text-lg font-semibold mt-1">
                {Math.round(scorePct * 100)}% · {passed ? '✓ Geslaagd' : '✗ Niet gehaald'}
              </div>
            </div>
            <div className="text-sm text-slate-600">Tijd: {elapsedMin} min</div>
          </div>
          <p className="text-sm mt-2 text-slate-700">
            Slagingsgrens 80% (SVMNIVO-standaard).{' '}
            {passed
              ? 'Ga zo door — herhaal periodiek om de stof goed te beheersen.'
              : 'Bekijk per sectie waar je nog zwak op staat en train die onderwerpen extra.'}
          </p>
        </div>

        <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200">
          <h2 className="font-semibold text-primary-700 mb-3">Score per sectie</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {(['A', 'B', 'C', 'D'] as Section[]).map((sec) => {
              const { c, t } = sectionScores[sec]
              const pct = t === 0 ? 0 : Math.round((c / t) * 100)
              return (
                <div key={sec} className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                  <div className="text-xs uppercase tracking-wide text-slate-500">Sectie {sec}</div>
                  <div className="text-sm font-medium text-slate-800">{SECTION_LABELS[sec]}</div>
                  <div className="text-lg font-bold text-primary-800 mt-1">
                    {c}/{t}{' '}
                    <span className="text-sm font-normal text-slate-600">({pct}%)</span>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200">
          <h2 className="font-semibold text-primary-700 mb-3">Foute vragen</h2>
          {results.filter((r) => !r.correct).length === 0 ? (
            <p className="text-slate-600 text-sm">Geen foute antwoorden — top!</p>
          ) : (
            <ul className="space-y-3">
              {results
                .filter((r) => !r.correct)
                .map((r, i) => {
                  const q = r.examQuestion.question as Question & { type: 'mc' }
                  return (
                    <li key={i} className="border-l-4 border-rose-400 pl-3">
                      <div className="text-xs text-slate-500 font-mono">
                        {r.examQuestion.topic.code} · {q.toetstermCode}
                      </div>
                      <div className="text-sm text-slate-800 mt-1">{q.prompt}</div>
                      <div className="text-xs text-slate-600 mt-1">
                        Goed antwoord:{' '}
                        <span className="font-medium text-emerald-700">
                          {q.options[q.correctIndex]}
                        </span>
                      </div>
                      {q.explanation && (
                        <div className="text-xs text-slate-700 mt-1 italic">{q.explanation}</div>
                      )}
                    </li>
                  )
                })}
            </ul>
          )}
        </section>

        <div className="flex gap-3">
          <button
            onClick={start}
            className="px-5 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md"
          >
            Opnieuw doen
          </button>
          <button
            onClick={() => {
              clearExamState()
              onNavigate({ name: 'dashboard' })
            }}
            className="px-5 py-2 bg-slate-200 hover:bg-slate-300 rounded-md"
          >
            Terug naar overzicht
          </button>
        </div>
      </div>
    )
  }

  // ---------- Render: examen in uitvoering ----------
  const eq = examQuestions[currentIdx]
  const q = eq.question as Question & { type: 'mc' }
  const picked = answers[q.id]
  const answeredCount = Object.keys(answers).length

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex justify-between items-center sticky top-0 bg-white border border-slate-200 rounded-lg p-3 z-10">
        <div>
          <div className="text-xs uppercase tracking-wide text-slate-500">Vraag</div>
          <div className="text-sm font-medium text-slate-800">
            {currentIdx + 1} van {total}
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wide text-slate-500">Beantwoord</div>
          <div className="text-sm font-medium text-slate-800">
            {answeredCount} / {total}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200 space-y-3">
        <div className="text-xs text-slate-500 font-mono">
          {eq.topic.code} {eq.topic.title} · {q.toetstermCode}
        </div>
        <div className="text-base text-slate-800">{q.prompt}</div>
        <div className="space-y-2">
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handlePick(q.id, idx)}
              className={`w-full text-left px-4 py-2.5 rounded-md border text-sm transition ${
                picked === idx
                  ? 'bg-primary-100 border-primary-400 ring-2 ring-primary-300'
                  : 'bg-white border-slate-300 hover:bg-slate-50'
              }`}
            >
              <span className="font-semibold text-slate-700 mr-2">
                {String.fromCharCode(65 + idx)}.
              </span>
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))}
          disabled={currentIdx === 0}
          className="px-4 py-2 rounded-md bg-slate-200 hover:bg-slate-300 disabled:opacity-50"
        >
          ← Vorige
        </button>
        {currentIdx < total - 1 ? (
          <button
            onClick={() => setCurrentIdx(currentIdx + 1)}
            className="px-4 py-2 rounded-md bg-primary-600 hover:bg-primary-700 text-white"
          >
            Volgende →
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={answeredCount < total}
            className="px-4 py-2 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white disabled:bg-slate-300"
          >
            {answeredCount < total ? `Beantwoord ${total - answeredCount} vraag/vragen` : 'Examen inleveren'}
          </button>
        )}
      </div>
    </div>
  )
}
