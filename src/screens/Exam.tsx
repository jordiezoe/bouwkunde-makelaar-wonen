import { topics } from '../content'
import type { Screen } from '../App'
import type { Bloom, ExamSection, Question, Topic } from '../types/content'
import { clearStickyState, useStickyState } from '../lib/useStickyState'
import { shuffleQuestionOptions } from '../lib/shuffleOptions'
import { ExamQuestionView } from '../components/ExamQuestionView'
import { gradeItem, type Answer, type ExamQuestion } from '../lib/btexamen'

interface Props {
  onNavigate: (s: Screen) => void
}

interface SimQuestion {
  question: ExamQuestion
  topic: Topic
  bloom: Bloom
}

const PASS = 0.8

const SECTION_LABELS: Record<ExamSection, string> = {
  A: 'Algemeen',
  B: 'Constructieve opbouw',
  C: 'Afwerking en installatie',
  D: 'Kwaliteit en duurzaamheid',
}

// Streefaantal per sectie (~60 vragen, zoals een volledig examen).
const SECTION_WEIGHTS: Record<ExamSection, number> = { A: 12, B: 22, C: 18, D: 8 }
const SECTIONS: ExamSection[] = ['A', 'B', 'C', 'D']

// Hogere Bloom-niveaus = toepassings-/analysevragen. De simulatie kiest deze
// bij voorkeur, zodat je maximaal wordt uitgedaagd (NLQF6).
const HOOG: Bloom[] = ['Toepassen', 'Analyseren', 'Evalueren', 'Synthese']
const HOOG_FRACTIE = 0.7

function isExamQ(q: Question): q is ExamQuestion {
  return q.type === 'mc' || q.type === 'multi'
}

function pickRandom<T>(arr: T[], n: number): T[] {
  const copy = [...arr]
  const out: T[] = []
  while (out.length < n && copy.length > 0) {
    out.push(copy.splice(Math.floor(Math.random() * copy.length), 1)[0])
  }
  return out
}

function shuffle<T>(arr: T[]): T[] {
  return arr.map((v) => ({ v, s: Math.random() })).sort((a, b) => a.s - b.s).map((x) => x.v)
}

function buildExam(): SimQuestion[] {
  const out: SimQuestion[] = []
  for (const sec of SECTIONS) {
    const secTopics = topics.filter((t) => t.section === sec)
    const pool: SimQuestion[] = []
    secTopics.forEach((t) =>
      t.questions.forEach((q) => {
        if (!isExamQ(q)) return
        const bloom = t.toetstermen.find((tt) => tt.code === q.toetstermCode)?.bloom ?? 'Kennis'
        pool.push({ question: shuffleQuestionOptions(q) as ExamQuestion, topic: t, bloom })
      }),
    )
    const target = Math.min(SECTION_WEIGHTS[sec], pool.length)
    const hoog = pool.filter((p) => HOOG.includes(p.bloom))
    const basis = pool.filter((p) => !HOOG.includes(p.bloom))
    const nHoog = Math.min(hoog.length, Math.round(target * HOOG_FRACTIE))
    const picked = [...pickRandom(hoog, nHoog), ...pickRandom(basis, target - nHoog)]
    if (picked.length < target) {
      const chosen = new Set(picked.map((p) => p.question.id))
      const rest = pool.filter((p) => !chosen.has(p.question.id))
      picked.push(...pickRandom(rest, target - picked.length))
    }
    out.push(...picked)
  }
  return shuffle(out)
}

export function Exam({ onNavigate }: Props) {
  const k = 'bouwkunde-exam'
  const [examQuestions, setExamQuestions] = useStickyState<SimQuestion[] | null>(`${k}-questions`, null)
  const [answers, setAnswers] = useStickyState<Record<string, Answer>>(`${k}-answers`, {})
  const [currentIdx, setCurrentIdx] = useStickyState<number>(`${k}-idx`, 0)
  const [submitted, setSubmitted] = useStickyState<boolean>(`${k}-submitted`, false)
  const [startedAt, setStartedAt] = useStickyState<number | null>(`${k}-startedAt`, null)

  function clearExamState() {
    ;['questions', 'answers', 'idx', 'submitted', 'startedAt'].forEach((s) => clearStickyState(`${k}-${s}`))
  }

  const totalAvailable = topics
    .filter((t) => t.section !== 'BL')
    .reduce((sum, t) => sum + t.questions.filter(isExamQ).length, 0)
  const targetTotal = SECTIONS.reduce((s, sec) => s + SECTION_WEIGHTS[sec], 0)

  const start = () => {
    setExamQuestions(buildExam())
    setAnswers({})
    setCurrentIdx(0)
    setSubmitted(false)
    setStartedAt(Date.now())
  }

  function setMc(qId: string, i: number) {
    if (submitted) return
    setAnswers((a) => ({ ...a, [qId]: { mc: i } }))
  }
  function toggleMulti(qId: string, i: number) {
    if (submitted) return
    setAnswers((a) => {
      const cur = a[qId]?.multi ?? []
      const next = cur.includes(i) ? cur.filter((x) => x !== i) : [...cur, i]
      return { ...a, [qId]: { multi: next } }
    })
  }

  // ---------- Intro ----------
  if (!examQuestions) {
    return (
      <div className="space-y-6 max-w-3xl">
        <button onClick={() => onNavigate({ name: 'dashboard' })} className="text-sm text-primary-600 hover:underline">
          ← Terug naar overzicht
        </button>
        <header>
          <h1 className="text-2xl font-bold text-primary-800">Examensimulatie</h1>
          <p className="text-slate-600 mt-1">
            Een volledige, examen-getrouwe toets over alle secties A/B/C/D — met casus-, beeld- en
            meerkeuzevragen op NLQF6-niveau. De simulatie kiest vooral toepassings- en analysevragen
            en trekt <strong>elke keer andere vragen</strong>, zodat je maximaal wordt uitgedaagd.
          </p>
        </header>

        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200 space-y-4">
          <h2 className="font-semibold text-primary-700">Wat krijg je?</h2>
          <ul className="text-sm text-slate-700 space-y-1">
            {SECTIONS.map((sec) => (
              <li key={sec}>
                <strong>Sectie {sec}</strong> · {SECTION_LABELS[sec]}: ~{SECTION_WEIGHTS[sec]} vragen
              </li>
            ))}
          </ul>
          <div className="text-sm text-slate-700 pt-2 border-t">
            Totaal: ~<strong>{targetTotal}</strong> vragen · uit {totalAvailable} beschikbare examenvragen ·
            slagingsgrens {Math.round(PASS * 100)}%. Meerkeuze én meervoudige keuze (met partiële punten).
          </div>
          <div className="text-xs text-slate-500">
            Tip: maak het in één keer af zonder pauzes — dat lijkt het meest op de echte examensituatie.
          </div>
          <button
            onClick={start}
            className="mt-2 px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-semibold"
          >
            Start examensimulatie
          </button>
        </div>
      </div>
    )
  }

  const total = examQuestions.length

  // ---------- Resultaat ----------
  if (submitted) {
    const elapsedMin = startedAt ? Math.round((Date.now() - startedAt) / 60000) : 0
    let totalFraction = 0
    const sectionScores: Record<ExamSection, { frac: number; t: number }> = {
      A: { frac: 0, t: 0 }, B: { frac: 0, t: 0 }, C: { frac: 0, t: 0 }, D: { frac: 0, t: 0 },
    }
    const review: { sq: SimQuestion; verdict: string }[] = []
    for (const sq of examQuestions) {
      const { fraction, verdict } = gradeItem(sq.question, answers[sq.question.id])
      totalFraction += fraction
      const sec = sq.topic.section as ExamSection
      sectionScores[sec].t += 1
      sectionScores[sec].frac += fraction
      if (verdict !== 'goed') review.push({ sq, verdict })
    }
    const scorePct = total > 0 ? totalFraction / total : 0
    const passed = scorePct >= PASS

    return (
      <div className="space-y-6">
        <button onClick={() => onNavigate({ name: 'dashboard' })} className="text-sm text-primary-600 hover:underline">
          ← Terug naar overzicht
        </button>
        <header>
          <h1 className="text-2xl font-bold text-primary-800">Examenuitslag</h1>
        </header>

        <div className={`rounded-xl p-4 sm:p-6 shadow-sm border ${passed ? 'bg-emerald-50 border-emerald-300' : 'bg-rose-50 border-rose-300'}`}>
          <div className="flex items-baseline justify-between flex-wrap gap-3">
            <div>
              <div className="text-3xl font-bold text-primary-800">{Math.round(scorePct * 100)}%</div>
              <div className="text-lg font-semibold mt-1">{passed ? '✓ Geslaagd' : '✗ Niet gehaald'}</div>
            </div>
            <div className="text-sm text-slate-600">Tijd: {elapsedMin} min · {total} vragen</div>
          </div>
          <p className="text-sm mt-2 text-slate-700">
            Slagingsgrens {Math.round(PASS * 100)}%.{' '}
            {passed ? 'Sterk — herhaal periodiek, elke sessie is anders.' : 'Bekijk per sectie waar je zwak staat en train die onderwerpen extra.'}
          </p>
        </div>

        <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200">
          <h2 className="font-semibold text-primary-700 mb-3">Score per sectie</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {SECTIONS.map((sec) => {
              const { frac, t } = sectionScores[sec]
              const pct = t === 0 ? 0 : Math.round((frac / t) * 100)
              return (
                <div key={sec} className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                  <div className="text-xs uppercase tracking-wide text-slate-500">Sectie {sec}</div>
                  <div className="text-sm font-medium text-slate-800">{SECTION_LABELS[sec]}</div>
                  <div className="text-lg font-bold text-primary-800 mt-1">
                    {pct}% <span className="text-sm font-normal text-slate-600">({t})</span>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200">
          <h2 className="font-semibold text-primary-700 mb-3">Om na te kijken</h2>
          {review.length === 0 ? (
            <p className="text-slate-600 text-sm">Alles goed — uitstekend!</p>
          ) : (
            <ul className="space-y-3">
              {review.map(({ sq, verdict }, i) => {
                const q = sq.question
                const goodAnswer =
                  q.type === 'mc' ? q.options[q.correctIndex] : q.correctIndices.map((ix) => q.options[ix]).join('; ')
                return (
                  <li key={i} className="border-l-4 border-rose-400 pl-3">
                    <div className="text-xs text-slate-500 font-mono">
                      {sq.topic.code} · {q.toetstermCode} · {sq.bloom} · {verdict === 'deels' ? 'gedeeltelijk' : 'fout'}
                    </div>
                    <div className="text-sm text-slate-800 mt-1">{q.prompt}</div>
                    <div className="text-xs text-slate-600 mt-1">
                      Goed antwoord: <span className="font-medium text-emerald-700">{goodAnswer}</span>
                    </div>
                    {q.explanation && <div className="text-xs text-slate-700 mt-1 italic">{q.explanation}</div>}
                  </li>
                )
              })}
            </ul>
          )}
        </section>

        <div className="flex gap-3 flex-wrap">
          <button onClick={start} className="px-5 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md">
            Opnieuw (nieuwe vragen)
          </button>
          <button
            onClick={() => { clearExamState(); onNavigate({ name: 'dashboard' }) }}
            className="px-5 py-2 bg-slate-200 hover:bg-slate-300 rounded-md"
          >
            Terug naar overzicht
          </button>
        </div>
      </div>
    )
  }

  // ---------- Examen in uitvoering ----------
  const sq = examQuestions[currentIdx]
  const answeredCount = examQuestions.filter((x) => {
    const a = answers[x.question.id]
    return a && (a.mc !== undefined || (a.multi && a.multi.length > 0))
  }).length

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex justify-between items-center sticky top-0 bg-white border border-slate-200 rounded-lg p-3 z-10">
        <div>
          <div className="text-xs uppercase tracking-wide text-slate-500">Vraag</div>
          <div className="text-sm font-medium text-slate-800">{currentIdx + 1} van {total}</div>
        </div>
        <div className="text-right">
          <div className="text-xs uppercase tracking-wide text-slate-500">Beantwoord</div>
          <div className="text-sm font-medium text-slate-800">{answeredCount} / {total}</div>
        </div>
      </div>

      <ExamQuestionView
        question={sq.question}
        headerLabel={`${sq.topic.code} ${sq.topic.title} · ${sq.question.toetstermCode}`}
        answer={answers[sq.question.id]}
        onMc={setMc}
        onToggleMulti={toggleMulti}
      />

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
            onClick={() => setSubmitted(true)}
            className="px-4 py-2 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            {answeredCount < total ? `Nog ${total - answeredCount} open — toch inleveren` : 'Examen inleveren'}
          </button>
        )}
      </div>
    </div>
  )
}
