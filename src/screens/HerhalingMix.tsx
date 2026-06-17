/**
 * Gemengde herhaling
 *
 * Quiz-stijl (directe feedback per vraag) met vragen uit het huidige onderdeel
 * én eerder behandelde onderdelen. Recentere onderdelen krijgen een grotere kans
 * zodat verse stof het meest herhaald wordt. Alle vraagtypen (mc, tf, open).
 * Geen slagingsgrens — puur oefenen en overzicht krijgen.
 */
import { useMemo } from 'react'
import { dossierOrder, getTopic } from '../content'
import type { Screen } from '../App'
import type { Question, Topic } from '../types/content'
import { clearStickyState, useStickyState } from '../lib/useStickyState'
import { shuffleQuestionOptions } from '../lib/shuffleOptions'
import { QuestionCard } from '../components/QuestionCard'

interface Props {
  topicCode: string
  onNavigate: (s: Screen) => void
}

interface MixQuestion {
  question: Question
  topic: Topic
  isAnchor: boolean
}

interface QuestionResult {
  topicCode: string
  isAnchor: boolean
  correct: boolean
}

const ANCHOR_TARGET = 10   // vragen uit huidig onderdeel
const PRIOR_TARGET  = 10   // vragen uit vorige onderdelen

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
 * Bouw de gemengde vragenpool.
 * - Anchor: tot ANCHOR_TARGET vragen uit het huidige onderdeel (alle types).
 * - Prior:  tot PRIOR_TARGET vragen uit eerdere onderdelen, met recency-bias:
 *     de helft dichtstbijzijnde krijgt 3× gewicht, de rest 1× gewicht.
 *   Zo worden recent behandelde onderwerpen automatisch vaker herhaald.
 */
function buildMix(anchorCode: string): MixQuestion[] {
  const anchor = getTopic(anchorCode)
  if (!anchor) return []

  // ── Anchor-vragen ──────────────────────────────────────────────────────────
  const anchorAll: MixQuestion[] = shuffle(anchor.questions).map((q) => ({
    question: shuffleQuestionOptions(q),
    topic: anchor,
    isAnchor: true,
  }))
  const pickedAnchor = anchorAll.slice(0, ANCHOR_TARGET)

  // ── Prior-vragen (alle onderdelen vóór anchor in dossier-volgorde) ─────────
  const anchorIdx = dossierOrder.indexOf(anchorCode)
  const priorCodes = anchorIdx > 0 ? dossierOrder.slice(0, anchorIdx) : []
  const priorTopics = priorCodes
    .map((c) => getTopic(c))
    .filter((t): t is Topic => t !== undefined)

  if (priorTopics.length === 0) {
    // Eerste of enige onderwerp: vul aan met meer anchor-vragen
    const extra = anchorAll.slice(ANCHOR_TARGET, ANCHOR_TARGET + PRIOR_TARGET)
    return shuffle([...pickedAnchor, ...extra])
  }

  // Recency-bias: de 50% dichtstbij (recent) krijgt 3× gewicht
  const recentCutoff = Math.ceil(priorTopics.length / 2)
  const weightedPool: MixQuestion[] = []
  priorTopics.forEach((t, idx) => {
    const weight = idx >= priorTopics.length - recentCutoff ? 3 : 1
    const qs: MixQuestion[] = t.questions.map((q) => ({
      question: shuffleQuestionOptions(q),
      topic: t,
      isAnchor: false,
    }))
    for (let w = 0; w < weight; w++) weightedPool.push(...qs)
  })

  const pickedPrior = pickRandom(weightedPool, PRIOR_TARGET)
  return shuffle([...pickedAnchor, ...pickedPrior])
}

export function HerhalingMix({ topicCode, onNavigate }: Props) {
  const anchor = getTopic(topicCode)
  const k = `bouwkunde-herhalingmix-${topicCode}`

  const [questions, setQuestions] = useStickyState<MixQuestion[] | null>(
    `${k}-questions`,
    null,
  )
  const [index, setIndex] = useStickyState<number>(`${k}-index`, 0)
  const [results, setResults] = useStickyState<QuestionResult[]>(
    `${k}-results`,
    [],
  )
  const [finished, setFinished] = useStickyState<boolean>(`${k}-finished`, false)

  // Preview-informatie voor het intro-scherm
  const { priorTopicCount, totalPool } = useMemo(() => {
    if (!anchor) return { priorTopicCount: 0, totalPool: 0 }
    const anchorIdx = dossierOrder.indexOf(topicCode)
    const priorCodes = anchorIdx > 0 ? dossierOrder.slice(0, anchorIdx) : []
    const cnt = priorCodes.filter((c) => getTopic(c) !== undefined).length
    return {
      priorTopicCount: cnt,
      totalPool: anchor.questions.length + cnt * 5, // ruwe schatting
    }
  }, [anchor, topicCode])

  if (!anchor) return <div className="text-rose-700">Onderwerp niet gevonden.</div>

  function start() {
    setQuestions(buildMix(topicCode))
    setIndex(0)
    setResults([])
    setFinished(false)
  }

  function clearState() {
    clearStickyState(`${k}-questions`)
    clearStickyState(`${k}-index`)
    clearStickyState(`${k}-results`)
    clearStickyState(`${k}-finished`)
  }

  // ── Intro ──────────────────────────────────────────────────────────────────
  if (!questions) {
    return (
      <div className="space-y-6 max-w-2xl">
        <button
          onClick={() => onNavigate({ name: 'lesson', topicCode })}
          className="text-sm text-primary-600 hover:underline"
        >
          ← Terug naar lesstof
        </button>

        <header>
          <div className="text-xs font-mono text-primary-500">{anchor.code}</div>
          <h1 className="text-2xl font-bold text-primary-800">Gemengde herhaling</h1>
          <p className="text-slate-600 mt-1">
            Oefenvragen uit <strong>{anchor.code} {anchor.title}</strong> gemengd
            met vragen uit de {priorTopicCount} eerder behandelde onderdelen.
            Recentere stof komt vaker voorbij zodat je die actief herhaalt.
          </p>
        </header>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 space-y-4">
          <h2 className="font-semibold text-primary-700">Wat krijg je?</h2>
          <ul className="text-sm text-slate-700 space-y-1.5">
            <li>
              <span className="inline-block w-4 h-4 rounded-full bg-teal-500 mr-2 align-middle" />
              <strong>~{Math.min(ANCHOR_TARGET, anchor.questions.length)} vragen</strong> uit dit onderdeel
            </li>
            <li>
              <span className="inline-block w-4 h-4 rounded-full bg-slate-400 mr-2 align-middle" />
              <strong>~{Math.min(PRIOR_TARGET, totalPool)} vragen</strong> uit {priorTopicCount} eerdere
              onderdelen — recent behandeld = vaker herhaald
            </li>
            <li>Alle vraagtypen: meerkeuze, juist/onjuist en open vragen</li>
            <li>Directe feedback na elk antwoord — geen slagingsgrens, gewoon oefenen</li>
          </ul>

          {priorTopicCount === 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded-md p-3 text-sm text-amber-800">
              ℹ️ Dit is het eerste onderdeel — er zijn nog geen eerdere onderdelen om te
              herhalen. Je krijgt alleen vragen uit dit onderdeel.
            </div>
          )}

          <button
            onClick={start}
            className="mt-2 px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-md font-semibold"
          >
            Start gemengde herhaling
          </button>
        </div>
      </div>
    )
  }

  const total = questions.length

  // ── Resultaat ──────────────────────────────────────────────────────────────
  if (finished) {
    const correctCount = results.filter((r) => r.correct).length
    const score = total > 0 ? correctCount / total : 0

    // Score per onderdeel
    type TopicScore = { code: string; title: string; c: number; t: number; isAnchor: boolean }
    const perTopic: Record<string, TopicScore> = {}
    questions.forEach((mq, i) => {
      const code = mq.topic.code
      if (!perTopic[code]) {
        perTopic[code] = {
          code,
          title: mq.topic.title,
          c: 0,
          t: 0,
          isAnchor: mq.isAnchor,
        }
      }
      perTopic[code].t += 1
      if (results[i]?.correct) perTopic[code].c += 1
    })
    const perTopicArr = Object.values(perTopic).sort(
      (a, b) => dossierOrder.indexOf(a.code) - dossierOrder.indexOf(b.code),
    )

    const weakTopics = perTopicArr.filter(
      (pt) => pt.t > 0 && pt.c / pt.t < 0.7,
    )

    return (
      <div className="space-y-6 max-w-2xl">
        <button
          onClick={() => onNavigate({ name: 'lesson', topicCode })}
          className="text-sm text-primary-600 hover:underline"
        >
          ← Terug naar lesstof
        </button>

        <h1 className="text-2xl font-bold text-primary-800">
          Gemengde herhaling — resultaat
        </h1>

        {/* Totaalscore */}
        <div className="rounded-xl p-5 bg-slate-50 border border-slate-200 flex items-baseline gap-4">
          <div>
            <div className="text-3xl font-bold text-primary-800">
              {correctCount} / {total}
            </div>
            <div className="text-lg font-semibold text-slate-600 mt-0.5">
              {Math.round(score * 100)}%
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            {score >= 0.8
              ? 'Goed gedaan — je hebt de meeste vragen goed!'
              : score >= 0.6
              ? 'Aardig op weg. Kijk hieronder welke onderdelen je nog kunt opfrissen.'
              : 'Er is nog ruimte voor verbetering. Bekijk de zwakke onderdelen en herhaal de lesstof.'}
          </p>
        </div>

        {/* Zwakke onderdelen — prominent */}
        {weakTopics.length > 0 && (
          <section className="bg-amber-50 rounded-xl p-4 sm:p-5 border border-amber-200">
            <h2 className="font-semibold text-amber-800 mb-2">
              Onderdelen om extra te herhalen
            </h2>
            <ul className="space-y-2">
              {weakTopics.map((pt) => (
                <li key={pt.code}>
                  <button
                    onClick={() =>
                      onNavigate({ name: 'lesson', topicCode: pt.code })
                    }
                    className="w-full text-left flex items-center gap-3 px-3 py-2 rounded-md bg-white border border-amber-200 hover:border-amber-400 hover:bg-amber-50 transition"
                  >
                    <span className="text-xs font-mono text-slate-500 w-12">
                      {pt.code}
                    </span>
                    <span className="text-sm text-slate-800 flex-1">{pt.title}</span>
                    <span className="text-sm font-bold text-rose-700">
                      {pt.c}/{pt.t} ({Math.round((pt.c / pt.t) * 100)}%)
                    </span>
                    <span className="text-xs text-primary-600">lesstof →</span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Score per onderdeel */}
        <section className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-slate-200">
          <h2 className="font-semibold text-primary-700 mb-3">Score per onderdeel</h2>
          <ul className="space-y-1.5">
            {perTopicArr.map((pt) => {
              const pct = pt.t === 0 ? 0 : Math.round((pt.c / pt.t) * 100)
              const isWeak = pct < 70
              return (
                <li
                  key={pt.code}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md border text-sm ${
                    isWeak
                      ? 'bg-rose-50 border-rose-200'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <span className="font-mono text-xs text-slate-500 w-12 shrink-0">
                    {pt.code}
                  </span>
                  <span className="text-slate-800 flex-1 truncate">{pt.title}</span>
                  {pt.isAnchor && (
                    <span className="text-[10px] bg-teal-100 text-teal-700 px-1.5 py-0.5 rounded shrink-0">
                      huidig
                    </span>
                  )}
                  <span className="font-bold text-slate-700 shrink-0">
                    {pt.c}/{pt.t}
                  </span>
                  <span
                    className={`font-semibold w-10 text-right shrink-0 ${
                      isWeak ? 'text-rose-700' : 'text-emerald-700'
                    }`}
                  >
                    {pct}%
                  </span>
                </li>
              )
            })}
          </ul>
        </section>

        <div className="flex gap-3 flex-wrap">
          <button
            onClick={start}
            className="px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md font-medium"
          >
            🔄 Nieuwe mix
          </button>
          <button
            onClick={() => {
              clearState()
              onNavigate({ name: 'lesson', topicCode })
            }}
            className="px-5 py-2 bg-slate-200 hover:bg-slate-300 rounded-md"
          >
            Terug naar lesstof
          </button>
          <button
            onClick={() => {
              clearState()
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

  // ── Actieve vraag ──────────────────────────────────────────────────────────
  const mq = questions[index]

  return (
    <div className="space-y-6 max-w-2xl">
      {/* Voortgangsbalk + metadata */}
      <div className="flex items-center justify-between text-sm">
        <button
          onClick={() => {
            clearState()
            onNavigate({ name: 'lesson', topicCode })
          }}
          className="text-primary-600 hover:underline"
        >
          ← Stoppen
        </button>
        <div className="flex items-center gap-2">
          {mq.isAnchor ? (
            <span className="text-[11px] bg-teal-100 text-teal-800 px-2 py-0.5 rounded font-medium">
              {mq.topic.code} · huidig
            </span>
          ) : (
            <span className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">
              {mq.topic.code} herhaling
            </span>
          )}
          <span className="text-slate-500">
            {index + 1} / {total}
          </span>
        </div>
      </div>

      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-teal-500 transition-all"
          style={{ width: `${(index / total) * 100}%` }}
        />
      </div>

      <QuestionCard
        key={`${mq.question.id}-${index}`}
        question={mq.question}
        onAnswered={(correct) => {
          setResults((prev) => [
            ...prev,
            { topicCode: mq.topic.code, isAnchor: mq.isAnchor, correct },
          ])
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
