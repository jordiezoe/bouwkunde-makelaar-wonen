import { useMemo } from 'react'
import { dossierOrder, getTopic, topics } from '../content'
import type { Screen } from '../App'
import type { Question, Topic } from '../types/content'
import {
  isTopicPassed,
  recordTussenExam,
  type Progress,
} from '../lib/storage'
import { clearStickyState, useStickyState } from '../lib/useStickyState'
import { shuffleQuestionOptions } from '../lib/shuffleOptions'

interface Props {
  topicCode: string
  progress: Progress
  setProgress: (p: Progress) => void
  onNavigate: (s: Screen) => void
}

interface ExamQuestion {
  question: Question & { type: 'mc' }
  topic: Topic
  /** true = uit het huidige (anchor) onderdeel, false = uit eerder behaald onderdeel */
  isAnchor: boolean
}

interface Result {
  examQuestion: ExamQuestion
  picked: number | null
  correct: boolean
}

const TARGET_TOTAL = 30
const PASS_THRESHOLD = 0.9
const ANCHOR_SHARE = 0.35 // ~35% uit huidig onderdeel, rest uit eerder behaalde

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

function shuffle<T>(arr: T[]): T[] {
  return [...arr]
    .map((x) => ({ x, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((y) => y.x)
}

function mcQuestions(topic: Topic): (Question & { type: 'mc' })[] {
  return topic.questions.filter(
    (q): q is Question & { type: 'mc' } => q.type === 'mc',
  )
}

/** Bouw cumulatieve vragenpool: huidig onderdeel + alle eerder behaalde, in dossier-volgorde. */
function buildPool(
  anchorTopic: Topic,
  progress: Progress,
): { anchor: ExamQuestion[]; prior: ExamQuestion[] } {
  const anchor: ExamQuestion[] = mcQuestions(anchorTopic).map((q) => ({
    question: shuffleQuestionOptions(q),
    topic: anchorTopic,
    isAnchor: true,
  }))

  const anchorIdx = dossierOrder.indexOf(anchorTopic.code)
  const priorCodes = dossierOrder
    .slice(0, anchorIdx < 0 ? 0 : anchorIdx)
    .filter((code) => isTopicPassed(progress, code))

  const prior: ExamQuestion[] = []
  priorCodes.forEach((code) => {
    const t = topics.find((x) => x.code === code)
    if (!t) return
    mcQuestions(t).forEach((q) =>
      prior.push({ question: shuffleQuestionOptions(q), topic: t, isAnchor: false }),
    )
  })

  return { anchor, prior }
}

function buildExam(anchorTopic: Topic, progress: Progress): ExamQuestion[] {
  const { anchor, prior } = buildPool(anchorTopic, progress)

  // Standaard: ~35% uit anchor, rest uit eerder behaald
  let anchorCount = Math.min(
    Math.round(TARGET_TOTAL * ANCHOR_SHARE),
    anchor.length,
  )
  let priorCount = Math.min(TARGET_TOTAL - anchorCount, prior.length)

  // Als prior te klein is (begin van leertraject), vul aan met meer anchor-vragen
  if (priorCount < TARGET_TOTAL - anchorCount) {
    const extraAnchor = Math.min(
      TARGET_TOTAL - anchorCount - priorCount,
      anchor.length - anchorCount,
    )
    anchorCount += extraAnchor
  }
  // Andersom: als anchor weinig vragen heeft, vul met meer prior
  if (anchorCount + priorCount < TARGET_TOTAL) {
    const extraPrior = Math.min(
      TARGET_TOTAL - anchorCount - priorCount,
      prior.length - priorCount,
    )
    priorCount += extraPrior
  }

  const pickedAnchor = pickRandom(anchor, anchorCount)
  const pickedPrior = pickRandom(prior, priorCount)
  return shuffle([...pickedAnchor, ...pickedPrior])
}

export function TussenExam({
  topicCode,
  progress,
  setProgress,
  onNavigate,
}: Props) {
  const topic = getTopic(topicCode)
  // Sticky state per onderwerp — overleeft iPad-tab-evictie en pull-to-refresh.
  const k = `bouwkunde-tussenexam-${topicCode}`
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

  function clearTussenExamState() {
    clearStickyState(`${k}-questions`)
    clearStickyState(`${k}-answers`)
    clearStickyState(`${k}-idx`)
    clearStickyState(`${k}-submitted`)
    clearStickyState(`${k}-startedAt`)
  }

  const { anchorPool, priorPool, priorTopicCount } = useMemo(() => {
    if (!topic) return { anchorPool: 0, priorPool: 0, priorTopicCount: 0 }
    const { anchor, prior } = buildPool(topic, progress)
    const priorTopics = new Set(prior.map((p) => p.topic.code))
    return {
      anchorPool: anchor.length,
      priorPool: prior.length,
      priorTopicCount: priorTopics.size,
    }
  }, [topic, progress])

  if (!topic) {
    return <div className="text-rose-700">Onderwerp niet gevonden.</div>
  }

  const start = () => {
    const exam = buildExam(topic, progress)
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

  const handleSubmit = () => {
    setSubmitted(true)
    if (!examQuestions) return
    const correctCount = examQuestions.filter(
      (eq) => answers[eq.question.id] === eq.question.correctIndex,
    ).length
    setProgress(
      recordTussenExam(
        progress,
        topic.code,
        correctCount,
        examQuestions.length,
        PASS_THRESHOLD,
      ),
    )
  }

  // ---------- Intro ----------
  if (!examQuestions) {
    const totalPool = anchorPool + priorPool
    const canStart = totalPool >= 5 // minimaal 5 vragen nodig

    return (
      <div className="space-y-6 max-w-3xl">
        <button
          onClick={() => onNavigate({ name: 'lesson', topicCode })}
          className="text-sm text-primary-600 hover:underline"
        >
          ← Terug naar lesstof
        </button>

        <header>
          <div className="text-xs font-mono text-primary-500">{topic.code}</div>
          <h1 className="text-2xl font-bold text-primary-800">
            Cumulatieve overhoring — t/m {topic.title}
          </h1>
          <p className="text-slate-600 mt-1">
            Examen-stijl overhoring met vragen uit dit onderdeel én alle eerder
            behaalde onderdelen. Zo blijft de stof van eerder behaalde
            onderwerpen actief in je geheugen.
          </p>
        </header>

        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200 space-y-4">
          <h2 className="font-semibold text-primary-700">Wat krijg je?</h2>
          <ul className="text-sm text-slate-700 space-y-1">
            <li>
              <strong>{TARGET_TOTAL} vragen</strong> in mix-volgorde, allemaal
              multiple choice.
            </li>
            <li>
              ~{Math.round(TARGET_TOTAL * ANCHOR_SHARE)} uit dit onderdeel (
              <strong>{topic.code}</strong>), de rest uit{' '}
              <strong>{priorTopicCount}</strong> eerder behaalde onderdelen.
            </li>
            <li>
              Vragenpool: {anchorPool} uit dit onderdeel + {priorPool} uit
              eerdere = <strong>{totalPool}</strong> beschikbare vragen.
            </li>
            <li>
              Slagingsgrens:{' '}
              <strong>{Math.round(PASS_THRESHOLD * 100)}%</strong> (strenger dan
              het echte examen).
            </li>
          </ul>

          {!canStart && (
            <div className="bg-amber-50 border border-amber-200 rounded-md p-3 text-sm text-amber-800">
              ⚠️ Te weinig vragen beschikbaar voor een zinvolle overhoring (
              {totalPool} gevonden, minimaal 5 nodig). Rond eerst de quiz van
              dit onderdeel af, of behaal eerdere onderdelen.
            </div>
          )}

          <button
            onClick={start}
            disabled={!canStart}
            className="mt-2 px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-semibold disabled:bg-slate-300 disabled:cursor-not-allowed"
          >
            Start cumulatieve overhoring
          </button>
        </div>
      </div>
    )
  }

  const total = examQuestions.length

  // ---------- Resultaat ----------
  if (submitted) {
    const results: Result[] = examQuestions.map((eq) => {
      const picked = answers[eq.question.id]
      return {
        examQuestion: eq,
        picked: picked ?? null,
        correct: picked !== undefined && picked === eq.question.correctIndex,
      }
    })
    const correctCount = results.filter((r) => r.correct).length
    const scorePct = correctCount / total
    const passed = scorePct >= PASS_THRESHOLD
    const elapsedMin = startedAt
      ? Math.round((Date.now() - startedAt) / 60000)
      : 0

    // Score per onderdeel
    const perTopic: Record<
      string,
      { topic: Topic; c: number; t: number; isAnchor: boolean }
    > = {}
    results.forEach((r) => {
      const code = r.examQuestion.topic.code
      if (!perTopic[code]) {
        perTopic[code] = {
          topic: r.examQuestion.topic,
          c: 0,
          t: 0,
          isAnchor: r.examQuestion.isAnchor,
        }
      }
      perTopic[code].t += 1
      if (r.correct) perTopic[code].c += 1
    })
    const perTopicArr = Object.values(perTopic).sort((a, b) =>
      dossierOrder.indexOf(a.topic.code) - dossierOrder.indexOf(b.topic.code),
    )

    return (
      <div className="space-y-6">
        <button
          onClick={() => onNavigate({ name: 'lesson', topicCode })}
          className="text-sm text-primary-600 hover:underline"
        >
          ← Terug naar lesstof
        </button>

        <header>
          <h1 className="text-2xl font-bold text-primary-800">
            Uitslag — cumulatieve overhoring t/m {topic.code}
          </h1>
        </header>

        <div
          className={`rounded-xl p-4 sm:p-6 shadow-sm border ${
            passed
              ? 'bg-emerald-50 border-emerald-300'
              : 'bg-rose-50 border-rose-300'
          }`}
        >
          <div className="flex items-baseline justify-between flex-wrap gap-3">
            <div>
              <div className="text-3xl font-bold text-primary-800">
                {correctCount} / {total}
              </div>
              <div className="text-lg font-semibold mt-1">
                {Math.round(scorePct * 100)}% ·{' '}
                {passed ? '✓ Geslaagd' : '✗ Niet gehaald'}
              </div>
            </div>
            <div className="text-sm text-slate-600">Tijd: {elapsedMin} min</div>
          </div>
          <p className="text-sm mt-2 text-slate-700">
            Slagingsgrens {Math.round(PASS_THRESHOLD * 100)}% — strenger dan de
            officiële cesuur, zodat je echt zekerheid opbouwt.{' '}
            {passed
              ? 'Goed gedaan — je hebt de oude stof nog actief paraat.'
              : 'Bekijk welke onderdelen zwak waren en frist die op via de lesstof of quiz.'}
          </p>
        </div>

        <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200">
          <h2 className="font-semibold text-primary-700 mb-3">
            Score per onderdeel
          </h2>
          <ul className="space-y-2">
            {perTopicArr.map((pt) => {
              const pct = pt.t === 0 ? 0 : Math.round((pt.c / pt.t) * 100)
              const isWeak = pct < 80
              return (
                <li
                  key={pt.topic.code}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md border ${
                    isWeak
                      ? 'bg-rose-50 border-rose-200'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <span className="text-xs font-mono text-slate-500 w-12">
                    {pt.topic.code}
                  </span>
                  <span className="text-sm font-medium text-slate-800 flex-1">
                    {pt.topic.title}
                  </span>
                  {pt.isAnchor && (
                    <span className="text-[10px] bg-primary-100 text-primary-700 px-1.5 py-0.5 rounded font-medium">
                      huidig
                    </span>
                  )}
                  <span className="text-sm font-bold text-slate-800">
                    {pt.c}/{pt.t}
                  </span>
                  <span
                    className={`text-sm font-semibold w-12 text-right ${
                      isWeak ? 'text-rose-700' : 'text-emerald-700'
                    }`}
                  >
                    {pct}%
                  </span>
                  {isWeak && (
                    <button
                      onClick={() =>
                        onNavigate({
                          name: 'lesson',
                          topicCode: pt.topic.code,
                        })
                      }
                      className="text-xs text-primary-600 hover:underline ml-1"
                    >
                      opfrissen →
                    </button>
                  )}
                </li>
              )
            })}
          </ul>
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
                  const q = r.examQuestion.question
                  return (
                    <li key={i} className="border-l-4 border-rose-400 pl-3">
                      <div className="text-xs text-slate-500 font-mono">
                        {r.examQuestion.topic.code} · {q.toetstermCode}
                      </div>
                      <div className="text-sm text-slate-800 mt-1">
                        {q.prompt}
                      </div>
                      <div className="text-xs text-slate-600 mt-1">
                        Goed antwoord:{' '}
                        <span className="font-medium text-emerald-700">
                          {q.options[q.correctIndex]}
                        </span>
                      </div>
                      {q.explanation && (
                        <div className="text-xs text-slate-700 mt-1 italic">
                          {q.explanation}
                        </div>
                      )}
                    </li>
                  )
                })}
            </ul>
          )}
        </section>

        <div className="flex gap-3 flex-wrap">
          <button
            onClick={start}
            className="px-5 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md"
          >
            Opnieuw doen
          </button>
          <button
            onClick={() => {
              clearTussenExamState()
              onNavigate({ name: 'lesson', topicCode })
            }}
            className="px-5 py-2 bg-slate-200 hover:bg-slate-300 rounded-md"
          >
            Terug naar lesstof
          </button>
          <button
            onClick={() => {
              clearTussenExamState()
              onNavigate({ name: 'dashboard' })
            }}
            className="px-5 py-2 bg-slate-200 hover:bg-slate-300 rounded-md"
          >
            Naar dashboard
          </button>
        </div>
      </div>
    )
  }

  // ---------- Actief stadium ----------
  const eq = examQuestions[currentIdx]
  const q = eq.question
  const picked = answers[q.id]
  const answeredCount = Object.keys(answers).length

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex justify-between items-center sticky top-0 bg-white border border-slate-200 rounded-lg p-3 z-10">
        <div>
          <div className="text-xs uppercase tracking-wide text-slate-500">
            Vraag
          </div>
          <div className="text-sm font-medium text-slate-800">
            {currentIdx + 1} van {total}
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wide text-slate-500">
            Beantwoord
          </div>
          <div className="text-sm font-medium text-slate-800">
            {answeredCount} / {total}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200 space-y-3">
        <div className="text-xs text-slate-500 font-mono flex items-center gap-2">
          <span>
            {eq.topic.code} {eq.topic.title} · {q.toetstermCode}
          </span>
          {eq.isAnchor && (
            <span className="text-[10px] bg-primary-100 text-primary-700 px-1.5 py-0.5 rounded font-medium">
              huidig
            </span>
          )}
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
            {answeredCount < total
              ? `Beantwoord ${total - answeredCount} vraag/vragen`
              : 'Overhoring inleveren'}
          </button>
        )}
      </div>
    </div>
  )
}
