/**
 * Sectie-afsluitexamen (A / B / C / D)
 *
 * Bloom-gewogen multiple-choice examen over alle onderwerpen in een sectie,
 * gebaseerd op het SVMNIVO kwalificatiedossier Makelaar Wonen — Bouwkunde.
 *
 * Passing threshold: 70% (SVMNIVO-standaard MBO niveau 4).
 * Bij slagen wordt de volgende sectie vrijgespeeld.
 */
import { useMemo } from 'react'
import { dossierOrder, isSectionUnlocked, sections, topics } from '../content'
import type { Screen } from '../App'
import type { Bloom, Question, Section, Topic } from '../types/content'
import {
  isSectionExamPassed,
  recordSectionExam,
  type Progress,
} from '../lib/storage'
import { clearStickyState, useStickyState } from '../lib/useStickyState'
import { shuffleQuestionOptions } from '../lib/shuffleOptions'

interface Props {
  section: Section
  progress: Progress
  setProgress: (p: Progress) => void
  onNavigate: (s: Screen) => void
}

interface SectieExamenQuestion {
  question: Question & { type: 'mc' }
  topic: Topic
  bloom: Bloom
}

interface Result {
  eq: SectieExamenQuestion
  picked: number | null
  correct: boolean
}

// ─── Configuratie ──────────────────────────────────────────────────────────────

const PASS_THRESHOLD = 0.70   // 70% — SVMNIVO MBO-cesuur

/** Doelomvang per sectie. Wordt naar beneden bijgesteld als er minder vragen zijn. */
const SECTION_TOTAL: Record<Section, number> = {
  A: 20,
  B: 40,
  C: 35,
  D: 20,
  BL: 20,
}

/**
 * Bloom-verdeling conform SVMNIVO kwalificatiedossier:
 * accent op Begrip + Toepassen (samen ~60%), aangevuld met hogere niveaus.
 */
const BLOOM_FRACTIONS: Record<Bloom, number> = {
  Kennis:     0.15,
  Begrip:     0.25,
  Toepassen:  0.35,
  Analyseren: 0.15,
  Evalueren:  0.05,
  Synthese:   0.05,
}

const BLOOM_ORDER: Bloom[] = [
  'Kennis', 'Begrip', 'Toepassen', 'Analyseren', 'Evalueren', 'Synthese',
]

const BLOOM_COLORS: Record<Bloom, string> = {
  Kennis:     'bg-blue-100 text-blue-800',
  Begrip:     'bg-sky-100 text-sky-800',
  Toepassen:  'bg-teal-100 text-teal-800',
  Analyseren: 'bg-violet-100 text-violet-800',
  Evalueren:  'bg-orange-100 text-orange-800',
  Synthese:   'bg-rose-100 text-rose-800',
}

const NEXT_SECTION: Record<Section, Section | null> = {
  A: 'B', B: 'C', C: 'D', D: null, BL: null,
}

// ─── Helpers ───────────────────────────────────────────────────────────────────

function pickRandom<T>(arr: T[], n: number): T[] {
  const copy = [...arr]
  const out: T[] = []
  while (out.length < n && copy.length > 0) {
    const idx = Math.floor(Math.random() * copy.length)
    out.push(copy.splice(idx, 1)[0])
  }
  return out
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr]
    .map((x) => ({ x, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map((y) => y.x)
}

/**
 * Bouw een Bloom-gewogen examen voor de sectie.
 * 1. Verzamel alle MC-vragen per Bloom-niveau.
 * 2. Wijs per niveau een doelquota toe op basis van BLOOM_FRACTIONS × totaal.
 * 3. Overschot van volle niveaus herverdelen naar niveaus met surplus-capaciteit.
 * 4. Husselen en retourneren.
 */
function buildExam(section: Section): SectieExamenQuestion[] {
  const sectionTopics = topics.filter((t) => t.section === section)

  // Groepeer MC-vragen per Bloom-niveau
  const byBloom: Record<Bloom, SectieExamenQuestion[]> = {
    Kennis: [], Begrip: [], Toepassen: [],
    Analyseren: [], Evalueren: [], Synthese: [],
  }
  sectionTopics.forEach((topic) => {
    topic.questions
      .filter((q): q is Question & { type: 'mc' } => q.type === 'mc')
      .forEach((q) => {
        const tt = topic.toetstermen.find((t) => t.code === q.toetstermCode)
        const bloom: Bloom = tt?.bloom ?? 'Kennis'
        byBloom[bloom].push({ question: shuffleQuestionOptions(q), topic, bloom })
      })
  })

  const target = SECTION_TOTAL[section]

  // Bereken quota per Bloom-niveau; clip op beschikbaar
  const quota: Record<Bloom, number> = {} as Record<Bloom, number>
  let allocated = 0
  BLOOM_ORDER.forEach((b) => {
    const want = Math.round(target * BLOOM_FRACTIONS[b])
    quota[b] = Math.min(want, byBloom[b].length)
    allocated += quota[b]
  })

  // Herverdeel resterende slots naar niveaus met surplus-capaciteit
  let remaining = target - allocated
  if (remaining > 0) {
    const withSurplus = BLOOM_ORDER
      .filter((b) => byBloom[b].length > quota[b])
      .sort((a, b) => (byBloom[b].length - quota[b]) - (byBloom[a].length - quota[a]))
    for (const b of withSurplus) {
      if (remaining <= 0) break
      const extra = Math.min(remaining, byBloom[b].length - quota[b])
      quota[b] += extra
      remaining -= extra
    }
  }

  // Selecteer en husselen
  const selected: SectieExamenQuestion[] = []
  BLOOM_ORDER.forEach((b) => {
    selected.push(...pickRandom(byBloom[b], quota[b]))
  })
  return shuffle(selected)
}

// ─── Component ─────────────────────────────────────────────────────────────────

export function SectieExamen({
  section,
  progress,
  setProgress,
  onNavigate,
}: Props) {
  const info = sections.find((s) => s.id === section)!
  const nextSection = NEXT_SECTION[section]
  const examAlreadyPassed = isSectionExamPassed(progress, section)
  const examAttempt = progress.sectionExams?.[section]

  const k = `bouwkunde-sectieexamen-${section}`
  const [examQuestions, setExamQuestions] = useStickyState<SectieExamenQuestion[] | null>(
    `${k}-questions`, null,
  )
  const [answers, setAnswers] = useStickyState<Record<string, number>>(
    `${k}-answers`, {},
  )
  const [currentIdx, setCurrentIdx] = useStickyState<number>(`${k}-idx`, 0)
  const [submitted, setSubmitted] = useStickyState<boolean>(`${k}-submitted`, false)
  const [startedAt, setStartedAt] = useStickyState<number | null>(`${k}-startedAt`, null)

  function clearExamState() {
    clearStickyState(`${k}-questions`)
    clearStickyState(`${k}-answers`)
    clearStickyState(`${k}-idx`)
    clearStickyState(`${k}-submitted`)
    clearStickyState(`${k}-startedAt`)
  }

  // Preview-statistieken voor intro
  const stats = useMemo(() => {
    const sectionTopics = topics.filter((t) => t.section === section)
    const passed = sectionTopics.filter(
      (t) => progress.topics[t.code]?.passedAt !== undefined,
    ).length
    const totalTopics = sectionTopics.length
    const mcTotal = sectionTopics.reduce(
      (s, t) => s + t.questions.filter((q) => q.type === 'mc').length, 0,
    )

    // Bloom-verdeling in beschikbare pool
    const bloomCounts: Record<Bloom, number> = {
      Kennis: 0, Begrip: 0, Toepassen: 0, Analyseren: 0, Evalueren: 0, Synthese: 0,
    }
    sectionTopics.forEach((topic) =>
      topic.questions
        .filter((q) => q.type === 'mc')
        .forEach((q) => {
          const tt = topic.toetstermen.find((t) => t.code === q.toetstermCode)
          const bloom: Bloom = tt?.bloom ?? 'Kennis'
          bloomCounts[bloom]++
        }),
    )
    return { passed, totalTopics, mcTotal, bloomCounts }
  }, [section, progress])

  function start() {
    setExamQuestions(buildExam(section))
    setAnswers({})
    setCurrentIdx(0)
    setSubmitted(false)
    setStartedAt(Date.now())
  }

  function handlePick(qId: string, optionIdx: number) {
    if (submitted) return
    setAnswers((a) => ({ ...a, [qId]: optionIdx }))
  }

  function handleSubmit() {
    if (!examQuestions) return
    setSubmitted(true)
    const correct = examQuestions.filter(
      (eq) => answers[eq.question.id] === eq.question.correctIndex,
    ).length
    setProgress(
      recordSectionExam(progress, section, correct, examQuestions.length, PASS_THRESHOLD),
    )
  }

  // ── Intro ────────────────────────────────────────────────────────────────────
  if (!examQuestions) {
    const target = Math.min(SECTION_TOTAL[section], stats.mcTotal)
    const notAllDone = stats.passed < stats.totalTopics

    return (
      <div className="space-y-6 max-w-3xl">
        <button
          onClick={() => onNavigate({ name: 'section', section })}
          className="text-sm text-primary-600 hover:underline"
        >
          ← Terug naar {info.title}
        </button>

        <header>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-mono text-orange-600 bg-orange-50 border border-orange-200 px-2 py-1 rounded">
              Sectie-examen {section}
            </span>
            {examAlreadyPassed && (
              <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded font-medium">
                ✓ Geslaagd
              </span>
            )}
          </div>
          <h1 className="text-2xl font-bold text-primary-800 mt-2">
            Sectie-examen — {info.title}
          </h1>
          <p className="text-slate-600 mt-1">
            Examen gebaseerd op het SVMNIVO kwalificatiedossier Makelaar Wonen.
            Vragen zijn verdeeld naar Bloom-niveau om brede beheersing te toetsen.
            {nextSection && (
              <> Bij een score van ≥{Math.round(PASS_THRESHOLD * 100)}% gaat sectie {nextSection} open.</>
            )}
          </p>
        </header>

        {examAlreadyPassed && examAttempt && (
          <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-4 text-sm text-emerald-800">
            Laatste poging: <strong>{examAttempt.correct}/{examAttempt.total}</strong> ({Math.round(examAttempt.score * 100)}%) ·{' '}
            {nextSection
              ? `Sectie ${nextSection} is vrijgespeeld.`
              : 'Je hebt alle secties afgerond!'}
          </div>
        )}

        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 space-y-4">
          {/* Statistieken */}
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="text-center p-3 bg-slate-50 rounded-lg border border-slate-200">
              <div className="text-2xl font-bold text-primary-800">{stats.passed}/{stats.totalTopics}</div>
              <div className="text-xs text-slate-500 mt-0.5">onderwerpen afgerond</div>
            </div>
            <div className="text-center p-3 bg-slate-50 rounded-lg border border-slate-200">
              <div className="text-2xl font-bold text-primary-800">{target}</div>
              <div className="text-xs text-slate-500 mt-0.5">examenvragen</div>
            </div>
            <div className="text-center p-3 bg-slate-50 rounded-lg border border-slate-200">
              <div className="text-2xl font-bold text-orange-700">
                {Math.round(PASS_THRESHOLD * 100)}%
              </div>
              <div className="text-xs text-slate-500 mt-0.5">slagingsgrens</div>
            </div>
          </div>

          {/* Bloom-verdeling tabel */}
          <div>
            <h2 className="text-sm font-semibold text-slate-700 mb-2">
              Vraagverdeling naar Bloom-niveau (kwalificatiedossier)
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-1.5 pr-3 text-slate-500 font-medium">Bloom-niveau</th>
                    <th className="text-right py-1.5 px-2 text-slate-500 font-medium">Aandeel</th>
                    <th className="text-right py-1.5 pl-2 text-slate-500 font-medium">~Vragen</th>
                    <th className="py-1.5 pl-3 text-slate-500 font-medium w-32">Beschikbaar</th>
                  </tr>
                </thead>
                <tbody>
                  {BLOOM_ORDER.map((bloom) => {
                    const frac = BLOOM_FRACTIONS[bloom]
                    const want = Math.round(target * frac)
                    const avail = stats.bloomCounts[bloom]
                    return (
                      <tr key={bloom} className="border-b border-slate-100">
                        <td className="py-1.5 pr-3">
                          <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${BLOOM_COLORS[bloom]}`}>
                            {bloom}
                          </span>
                        </td>
                        <td className="text-right py-1.5 px-2 text-slate-600">
                          {Math.round(frac * 100)}%
                        </td>
                        <td className="text-right py-1.5 pl-2 text-slate-700 font-medium">
                          {Math.min(want, avail)}
                        </td>
                        <td className="py-1.5 pl-3">
                          <div className="flex items-center gap-1.5">
                            <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-orange-400 rounded-full"
                                style={{ width: `${Math.min(100, (avail / Math.max(1, want)) * 100)}%` }}
                              />
                            </div>
                            <span className="text-slate-500 tabular-nums">{avail}</span>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {notAllDone && (
            <div className="bg-amber-50 border border-amber-200 rounded-md p-3 text-sm text-amber-800">
              ⚠️ Je hebt nog {stats.totalTopics - stats.passed} van de {stats.totalTopics} onderwerpen
              niet afgerond. Je kunt het examen al doen, maar we raden aan eerst alle onderwerpen te
              voltooien voor de beste voorbereiding.
            </div>
          )}

          <div className="flex gap-3 items-center flex-wrap">
            <button
              onClick={start}
              className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-md font-semibold"
            >
              🏛️ {examAlreadyPassed ? 'Opnieuw doen' : 'Start sectie-examen'}
            </button>
            <span className="text-xs text-slate-500">
              Tip: beantwoord alle vragen voordat je inlevert — je kunt terug bladeren.
            </span>
          </div>
        </div>
      </div>
    )
  }

  const total = examQuestions.length

  // ── Resultaat ─────────────────────────────────────────────────────────────────
  if (submitted) {
    const results: Result[] = examQuestions.map((eq) => {
      const picked = answers[eq.question.id]
      return {
        eq,
        picked: picked ?? null,
        correct: picked !== undefined && picked === eq.question.correctIndex,
      }
    })
    const correctCount = results.filter((r) => r.correct).length
    const scorePct = correctCount / total
    const passed = scorePct >= PASS_THRESHOLD
    const elapsedMin = startedAt ? Math.round((Date.now() - startedAt) / 60000) : 0

    // Score per Bloom-niveau
    const bloomScore: Record<Bloom, { c: number; t: number }> = {
      Kennis: { c: 0, t: 0 }, Begrip: { c: 0, t: 0 }, Toepassen: { c: 0, t: 0 },
      Analyseren: { c: 0, t: 0 }, Evalueren: { c: 0, t: 0 }, Synthese: { c: 0, t: 0 },
    }
    results.forEach((r) => {
      bloomScore[r.eq.bloom].t++
      if (r.correct) bloomScore[r.eq.bloom].c++
    })

    // Score per onderwerp
    const perTopic: Record<string, { topic: Topic; c: number; t: number }> = {}
    results.forEach((r) => {
      const code = r.eq.topic.code
      if (!perTopic[code]) perTopic[code] = { topic: r.eq.topic, c: 0, t: 0 }
      perTopic[code].t++
      if (r.correct) perTopic[code].c++
    })
    const perTopicArr = Object.values(perTopic).sort(
      (a, b) => dossierOrder.indexOf(a.topic.code) - dossierOrder.indexOf(b.topic.code),
    )

    const nextSec = NEXT_SECTION[section]
    const nextInfo = nextSec ? sections.find((s) => s.id === nextSec) : null
    const nextUnlocked = nextSec ? isSectionUnlocked(nextSec, progress) : false

    return (
      <div className="space-y-6">
        <button
          onClick={() => onNavigate({ name: 'section', section })}
          className="text-sm text-primary-600 hover:underline"
        >
          ← Terug naar {info.title}
        </button>

        <header>
          <h1 className="text-2xl font-bold text-primary-800">
            Uitslag — Sectie-examen {section}
          </h1>
        </header>

        {/* Totaalscore */}
        <div className={`rounded-xl p-5 sm:p-6 shadow-sm border ${
          passed ? 'bg-emerald-50 border-emerald-300' : 'bg-rose-50 border-rose-300'
        }`}>
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <div className="text-4xl font-bold text-primary-800">
                {correctCount} / {total}
              </div>
              <div className="text-xl font-semibold mt-1">
                {Math.round(scorePct * 100)}% ·{' '}
                {passed ? '✓ Geslaagd' : '✗ Niet gehaald'}
              </div>
              <div className="text-sm text-slate-600 mt-1">
                Slagingsgrens {Math.round(PASS_THRESHOLD * 100)}% · Tijd: {elapsedMin} min
              </div>
            </div>
            {passed && nextInfo && (
              <div className="bg-emerald-100 border border-emerald-300 rounded-lg px-4 py-3 text-sm">
                <div className="font-semibold text-emerald-800">🎉 Sectie {nextSec} vrijgespeeld!</div>
                <div className="text-emerald-700 mt-0.5">{nextInfo.title}</div>
              </div>
            )}
          </div>
          <p className="text-sm mt-3 text-slate-700">
            {passed
              ? `Uitstekend — je beheerst de stof van sectie ${section} op het vereiste niveau.${nextSec ? ` Je kunt nu beginnen aan sectie ${nextSec}.` : ' Je hebt alle secties afgerond!'}`
              : `Je hebt ${Math.round(PASS_THRESHOLD * 100) - Math.round(scorePct * 100)} procentpunt tekort. Bekijk per Bloom-niveau waar je zwak op staat en herhaal die onderwerpen.`}
          </p>
        </div>

        {/* Bloom-niveau breakdown — kern van dit examen */}
        <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200">
          <h2 className="font-semibold text-primary-700 mb-1">Score per Bloom-niveau</h2>
          <p className="text-xs text-slate-500 mb-4">
            Hogere niveaus (Toepassen, Analyseren) tonen je vermogen om kennis te gebruiken —
            niet alleen te onthouden.
          </p>
          <div className="space-y-3">
            {BLOOM_ORDER.filter((b) => bloomScore[b].t > 0).map((bloom) => {
              const { c, t } = bloomScore[bloom]
              const pct = Math.round((c / t) * 100)
              const isWeak = pct < 70
              return (
                <div key={bloom}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${BLOOM_COLORS[bloom]}`}>
                        {bloom}
                      </span>
                      <span className="text-xs text-slate-500">{c}/{t} vragen</span>
                    </div>
                    <span className={`text-sm font-bold ${isWeak ? 'text-rose-700' : 'text-emerald-700'}`}>
                      {pct}% {isWeak ? '⚠️' : '✓'}
                    </span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${isWeak ? 'bg-rose-400' : 'bg-emerald-500'}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Score per onderwerp */}
        <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200">
          <h2 className="font-semibold text-primary-700 mb-3">Score per onderwerp</h2>
          <ul className="space-y-1.5">
            {perTopicArr.map((pt) => {
              const pct = pt.t === 0 ? 0 : Math.round((pt.c / pt.t) * 100)
              const isWeak = pct < 70
              return (
                <li
                  key={pt.topic.code}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md border text-sm ${
                    isWeak ? 'bg-rose-50 border-rose-200' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <span className="font-mono text-xs text-slate-500 w-12 shrink-0">
                    {pt.topic.code}
                  </span>
                  <span className="text-slate-800 flex-1 truncate min-w-0">
                    {pt.topic.title}
                  </span>
                  <span className="font-bold text-slate-700 shrink-0">{pt.c}/{pt.t}</span>
                  <span className={`font-semibold w-10 text-right shrink-0 ${
                    isWeak ? 'text-rose-700' : 'text-emerald-700'
                  }`}>
                    {pct}%
                  </span>
                  {isWeak && (
                    <button
                      onClick={() => onNavigate({ name: 'lesson', topicCode: pt.topic.code })}
                      className="text-xs text-primary-600 hover:underline shrink-0"
                    >
                      opfrissen →
                    </button>
                  )}
                </li>
              )
            })}
          </ul>
        </section>

        {/* Foute vragen */}
        <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200">
          <h2 className="font-semibold text-primary-700 mb-3">
            Foute vragen ({results.filter((r) => !r.correct).length})
          </h2>
          {results.filter((r) => !r.correct).length === 0 ? (
            <p className="text-sm text-slate-600">Geen foute antwoorden — perfect!</p>
          ) : (
            <ul className="space-y-3 max-h-96 overflow-y-auto pr-1">
              {results
                .filter((r) => !r.correct)
                .map((r, i) => (
                  <li key={i} className="border-l-4 border-rose-400 pl-3 text-sm">
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-mono mb-1">
                      <span>{r.eq.topic.code}</span>
                      <span>·</span>
                      <span>{r.eq.question.toetstermCode}</span>
                      <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${BLOOM_COLORS[r.eq.bloom]}`}>
                        {r.eq.bloom}
                      </span>
                    </div>
                    <div className="text-slate-800">{r.eq.question.prompt}</div>
                    <div className="text-xs text-slate-600 mt-1">
                      Goed:{' '}
                      <span className="font-medium text-emerald-700">
                        {r.eq.question.options[r.eq.question.correctIndex]}
                      </span>
                    </div>
                    {r.eq.question.explanation && (
                      <div className="text-xs text-slate-600 italic mt-0.5">
                        {r.eq.question.explanation}
                      </div>
                    )}
                  </li>
                ))}
            </ul>
          )}
        </section>

        {/* Acties */}
        <div className="flex gap-3 flex-wrap">
          {passed && nextSec && !nextUnlocked && (
            <button
              onClick={() => onNavigate({ name: 'section', section: nextSec })}
              className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md font-semibold"
            >
              Naar sectie {nextSec} →
            </button>
          )}
          <button
            onClick={start}
            className="px-5 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md"
          >
            🏛️ Opnieuw doen
          </button>
          <button
            onClick={() => {
              clearExamState()
              onNavigate({ name: 'section', section })
            }}
            className="px-5 py-2 bg-slate-200 hover:bg-slate-300 rounded-md"
          >
            Terug naar {info.title}
          </button>
          <button
            onClick={() => {
              clearExamState()
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

  // ── Actief examen ─────────────────────────────────────────────────────────────
  const eq = examQuestions[currentIdx]
  const q = eq.question
  const picked = answers[q.id]
  const answeredCount = Object.keys(answers).length

  return (
    <div className="space-y-6 max-w-3xl">
      {/* Sticky header */}
      <div className="flex justify-between items-center sticky top-0 bg-white border border-slate-200 rounded-lg p-3 z-10 shadow-sm">
        <div>
          <div className="text-[10px] uppercase tracking-wide text-slate-500">Sectie-examen {section}</div>
          <div className="text-sm font-medium text-slate-800">
            Vraag {currentIdx + 1} van {total}
          </div>
        </div>
        <div className="text-center">
          <div className="text-[10px] uppercase tracking-wide text-slate-500">Beantwoord</div>
          <div className="text-sm font-medium text-slate-800">{answeredCount} / {total}</div>
        </div>
        <div className="text-right">
          <div className="text-[10px] uppercase tracking-wide text-slate-500">Nodig</div>
          <div className="text-sm font-medium text-orange-700">{Math.round(PASS_THRESHOLD * 100)}%</div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-orange-500 transition-all"
          style={{ width: `${(answeredCount / total) * 100}%` }}
        />
      </div>

      {/* Vraagkaart */}
      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200 space-y-3">
        <div className="text-xs text-slate-500 font-mono flex items-center gap-2 flex-wrap">
          <span>{eq.topic.code} · {eq.question.toetstermCode}</span>
        </div>
        <div className="text-base text-slate-800 font-medium">{q.prompt}</div>
        <div className="space-y-2 pt-1">
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handlePick(q.id, idx)}
              className={`w-full text-left px-4 py-3 rounded-md border text-sm transition ${
                picked === idx
                  ? 'bg-orange-50 border-orange-400 ring-2 ring-orange-200'
                  : 'bg-white border-slate-300 hover:bg-slate-50'
              }`}
            >
              <span className="font-semibold text-slate-600 mr-2">
                {String.fromCharCode(65 + idx)}.
              </span>
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Navigatie */}
      <div className="flex justify-between items-center">
        <button
          onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))}
          disabled={currentIdx === 0}
          className="px-4 py-2 rounded-md bg-slate-200 hover:bg-slate-300 disabled:opacity-40"
        >
          ← Vorige
        </button>

        {currentIdx < total - 1 ? (
          <button
            onClick={() => setCurrentIdx(currentIdx + 1)}
            className="px-4 py-2 rounded-md bg-orange-600 hover:bg-orange-700 text-white"
          >
            Volgende →
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={answeredCount < total}
            className="px-5 py-2 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-semibold disabled:bg-slate-300 disabled:cursor-not-allowed"
          >
            {answeredCount < total
              ? `Nog ${total - answeredCount} onbeantwoord`
              : '🏛️ Examen inleveren'}
          </button>
        )}
      </div>

      {/* Vraag-navigator (kleine blokjes) */}
      <div className="bg-white rounded-lg p-3 border border-slate-200">
        <div className="text-xs text-slate-500 mb-2">Vraag-navigator — klik om terug te bladeren</div>
        <div className="flex flex-wrap gap-1.5">
          {examQuestions.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIdx(i)}
              className={`w-7 h-7 rounded text-xs font-medium transition ${
                i === currentIdx
                  ? 'bg-orange-600 text-white'
                  : answers[examQuestions[i].question.id] !== undefined
                    ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
