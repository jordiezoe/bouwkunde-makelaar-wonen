import { useEffect, useMemo, useRef, useState } from 'react'
import { getNextTopicCode, getStub, getTopic } from '../content'
import { QuestionCard } from '../components/QuestionCard'
import type { Screen } from '../App'
import {
  recordAnswer,
  recordTopicAttempt,
  type Progress,
} from '../lib/storage'
import { clearStickyState, useStickyState } from '../lib/useStickyState'
import { shuffleQuestionOptions } from '../lib/shuffleOptions'
import type { Question, Toetsterm } from '../types/content'

interface Props {
  topicCode: string
  progress: Progress
  setProgress: (p: Progress) => void
  onNavigate: (s: Screen) => void
}

export function Quiz({ topicCode, progress, setProgress, onNavigate }: Props) {
  const topic = getTopic(topicCode)
  // Volledige vragenpool, gehusseld
  const fullPool = useMemo(
    () => (topic ? shuffle(topic.questions).map(shuffleQuestionOptions) : []),
    [topic],
  )
  // Sticky-keys per onderwerp — iPad/iPhone Safari mag de tab op de
  // achtergrond opruimen; bij terugkomst herstellen we de stand precies.
  const k = `bouwkunde-quiz-${topicCode}`
  const [questions, setQuestions] = useStickyState<Question[]>(
    `${k}-questions`,
    () => fullPool,
  )
  const [index, setIndex] = useStickyState<number>(`${k}-index`, 0)
  const [stats, setStats] = useStickyState<{ correct: number; wrong: number }>(
    `${k}-stats`,
    { correct: 0, wrong: 0 },
  )
  const [wrongQuestionIds, setWrongQuestionIds] = useStickyState<string[]>(
    `${k}-wrong`,
    [],
  )
  const [finished, setFinished] = useStickyState<boolean>(`${k}-finished`, false)
  /** Modus bepaalt of dit een echte slagings-quiz is of een herhalingsronde van fouten. */
  const [mode, setMode] = useStickyState<'full' | 'review'>(`${k}-mode`, 'full')
  /**
   * Bewaar of de huidige vraag al bevestigd is (onAnswered aangeroepen) maar
   * de index nog niet doorgeschoven is (onNext nog niet). Bij een iOS-herstart
   * zou dit anders dubbel geteld worden.
   */
  const [currentAnswered, setCurrentAnswered] = useStickyState<boolean>(
    `${k}-current-answered`, false,
  )
  // "Hervat" banner: laat één keer zien als we midden in een quiz herstarten.
  const [showResume, setShowResume] = useState(() => index > 0 && !finished)
  const isRestoringRef = useRef(true)

  if (!topic) return <div>Onderwerp niet gevonden.</div>

  const passingScore = topic.passingScore ?? 0.8

  function restart(newQuestions: Question[], newMode: 'full' | 'review') {
    setQuestions(newQuestions)
    setIndex(0)
    setStats({ correct: 0, wrong: 0 })
    setWrongQuestionIds([])
    setFinished(false)
    setMode(newMode)
    setCurrentAnswered(false)
  }

  function clearQuizState() {
    clearStickyState(`${k}-questions`)
    clearStickyState(`${k}-index`)
    clearStickyState(`${k}-stats`)
    clearStickyState(`${k}-wrong`)
    clearStickyState(`${k}-finished`)
    clearStickyState(`${k}-mode`)
    clearStickyState(`${k}-current-answered`)
  }

  // Als de app herstartte terwijl een antwoord al bevestigd was maar de index
  // nog niet vooruit was: sla die vraag over zodat hij niet dubbel telt.
  useEffect(() => {
    if (!isRestoringRef.current) return
    isRestoringRef.current = false
    if (currentAnswered && !finished) {
      setCurrentAnswered(false)
      if (index + 1 >= questions.length) {
        setFinished(true)
      } else {
        setIndex(index + 1)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (finished) {
    const total = questions.length
    const score = total > 0 ? stats.correct / total : 0
    const passed = score >= passingScore
    const nextCode = getNextTopicCode(topic.code)
    const nextTopic = nextCode ? getTopic(nextCode) : undefined
    const nextStub = nextCode ? getStub(nextCode) : undefined

    // Groepeer foute vragen per toetsterm
    const wrongQuestions = topic!.questions.filter((q) =>
      wrongQuestionIds.includes(q.id),
    )
    const wrongByToetsterm = groupByToetsterm(
      wrongQuestions,
      topic!.toetstermen,
      topic!.questions,
    )

    return (
      <div className="space-y-6 max-w-2xl">
        <h1 className="text-2xl font-bold text-primary-800">
          {mode === 'review' ? 'Herhalingsronde' : 'Overhoring'} afgerond — {topic.title}
        </h1>

        <div
          className={`rounded-xl p-4 sm:p-6 shadow-sm border ${
            passed
              ? 'bg-green-50 border-green-200'
              : 'bg-amber-50 border-amber-200'
          }`}
        >
          <div className="text-4xl font-bold text-primary-800">
            {stats.correct} / {total}{' '}
            <span className="text-2xl text-slate-600">({Math.round(score * 100)}%)</span>
          </div>
          <p className={`mt-2 font-medium ${passed ? 'text-green-800' : 'text-amber-800'}`}>
            {mode === 'review'
              ? passed
                ? '✓ Je herhalingsronde is gelukt.'
                : 'Nog niet alle herhaalvragen goed — train ze nog een keer.'
              : passed
              ? `✓ Behaald — je hebt de slagingsgrens van ${Math.round(passingScore * 100)}% gehaald.`
              : `Nog niet behaald — je hebt minstens ${Math.round(passingScore * 100)}% nodig. Bekijk de lesstof en probeer het opnieuw.`}
          </p>
        </div>

        {wrongByToetsterm.length > 0 && (
          <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200">
            <h2 className="font-semibold text-primary-700">
              Onderdelen om te herhalen
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Deze toetstermen heb je geheel of gedeeltelijk fout. Lees ze terug
              of train alleen de foute vragen.
            </p>
            <ul className="mt-4 space-y-3">
              {wrongByToetsterm.map(({ toetsterm, count, total }) => (
                <li key={toetsterm.code}>
                  <button
                    onClick={() =>
                      onNavigate({
                        name: 'lesson',
                        topicCode: topic!.code,
                        scrollToToetsterm: toetsterm.code,
                      })
                    }
                    className="w-full text-left flex items-start gap-3 p-3 rounded-lg border border-amber-200 bg-amber-50 hover:bg-amber-100 hover:border-amber-300 transition group"
                  >
                    <span className="font-mono text-xs text-amber-900 bg-amber-100 group-hover:bg-amber-200 px-2 py-1 rounded whitespace-nowrap">
                      {toetsterm.code}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-slate-800">{toetsterm.text}</div>
                      <div className="text-xs text-slate-500 mt-1">
                        {count} van de {total} vragen op deze toetsterm fout · niveau{' '}
                        {toetsterm.niveau} · {toetsterm.bloom}
                      </div>
                    </div>
                    <span className="text-xs text-amber-700 self-center whitespace-nowrap">
                      naar les →
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <button
              onClick={() => restart(shuffle(wrongQuestions), 'review')}
              className="mt-4 px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 font-medium"
            >
              Train alleen deze foute vragen ({wrongQuestions.length})
            </button>
          </section>
        )}

        {passed && mode === 'full' && (
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200">
            <h2 className="font-semibold text-primary-700">Volgende onderwerp</h2>
            {nextTopic ? (
              <div className="mt-2">
                <div className="font-medium">
                  {nextTopic.code} · {nextTopic.title}
                </div>
                <p className="text-sm text-slate-600 mt-1">{nextTopic.blurb}</p>
                <button
                  onClick={() =>
                    onNavigate({ name: 'lesson', topicCode: nextTopic.code })
                  }
                  className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 font-medium"
                >
                  Start volgend onderwerp →
                </button>
              </div>
            ) : nextStub ? (
              <div className="mt-2">
                <div className="font-medium text-slate-700">
                  {nextStub.code} · {nextStub.title}
                </div>
                <p className="text-sm text-slate-500 mt-1">
                  Dit onderwerp is nog niet uitgewerkt. Zodra het klaarstaat,
                  kun je hier verder.
                </p>
              </div>
            ) : (
              <p className="text-sm text-slate-600 mt-2">
                Je bent door alle onderwerpen heen — gefeliciteerd!
              </p>
            )}
          </div>
        )}

        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => {
              clearQuizState()
              onNavigate({ name: 'lesson', topicCode: topic.code })
            }}
            className="px-4 py-2 bg-slate-200 text-slate-800 rounded-md hover:bg-slate-300"
          >
            Terug naar de les
          </button>
          <button
            onClick={() => restart(shuffle(topic!.questions), 'full')}
            className="px-4 py-2 bg-slate-200 text-slate-800 rounded-md hover:bg-slate-300"
          >
            Hele quiz opnieuw
          </button>
          <button
            onClick={() => {
              clearQuizState()
              onNavigate({ name: 'dashboard' })
            }}
            className="px-4 py-2 bg-slate-200 text-slate-800 rounded-md hover:bg-slate-300"
          >
            Naar overzicht
          </button>
        </div>
      </div>
    )
  }

  const q = questions[index]

  return (
    <div className="space-y-6 max-w-2xl">
      {/* Hervat-banner: alleen tonen als we midden in een quiz herstarten */}
      {showResume && (
        <div className="bg-sky-50 border border-sky-200 rounded-xl px-4 py-3 flex items-center gap-3">
          <span className="text-sky-600 text-lg shrink-0">📍</span>
          <div className="flex-1 text-sm text-sky-800">
            <strong>Hervat</strong> bij vraag {index + 1} van {questions.length} —{' '}
            tot nu toe <strong>{stats.correct}</strong> goed
          </div>
          <button
            onClick={() => setShowResume(false)}
            className="text-sky-400 hover:text-sky-600 text-lg leading-none shrink-0"
          >
            ×
          </button>
        </div>
      )}

      <div className="flex items-center justify-between text-sm">
        <button
          onClick={() => onNavigate({ name: 'lesson', topicCode: topic.code })}
          className="text-primary-600 hover:underline"
        >
          ← Stoppen
        </button>
        <div className="text-slate-500">
          {mode === 'review' && (
            <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded mr-2">
              herhalingsronde
            </span>
          )}
          Vraag {index + 1} van {questions.length}
        </div>
      </div>

      <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary-500 transition-all"
          style={{ width: `${(index / questions.length) * 100}%` }}
        />
      </div>

      <QuestionCard
        key={q.id}
        question={q}
        onAnswered={(correct) => {
          const newStats = {
            correct: stats.correct + (correct ? 1 : 0),
            wrong: stats.wrong + (correct ? 0 : 1),
          }
          setStats(newStats)
          const newWrong = correct ? wrongQuestionIds : [...wrongQuestionIds, q.id]
          setWrongQuestionIds(newWrong)

          let p = recordAnswer(progress, q.id, q.toetstermCode, correct)

          // Alleen bij een volledige run (niet review-modus) is dit een echte poging
          if (index + 1 >= questions.length && mode === 'full') {
            p = recordTopicAttempt(
              p,
              topic.code,
              newStats.correct,
              questions.length,
              passingScore,
            )
          }
          setCurrentAnswered(true)   // markeer: antwoord bevestigd, index nog niet vooruit
          setProgress(p)
        }}
        onNext={() => {
          setCurrentAnswered(false)  // reset voor volgende vraag
          setShowResume(false)
          if (index + 1 >= questions.length) {
            setFinished(true)
          } else {
            setIndex(index + 1)
          }
        }}
      />
    </div>
  )
}

interface GroupedToetsterm {
  toetsterm: Toetsterm
  count: number   // aantal fouten
  total: number   // totaal aantal vragen op die toetsterm in deze quiz
}

function groupByToetsterm(
  wrongQuestions: Question[],
  toetstermen: Toetsterm[],
  allQuestions: Question[],
): GroupedToetsterm[] {
  const wrongByCode: Record<string, number> = {}
  for (const q of wrongQuestions) {
    wrongByCode[q.toetstermCode] = (wrongByCode[q.toetstermCode] ?? 0) + 1
  }
  const totalByCode: Record<string, number> = {}
  for (const q of allQuestions) {
    totalByCode[q.toetstermCode] = (totalByCode[q.toetstermCode] ?? 0) + 1
  }
  return Object.entries(wrongByCode)
    .map(([code, count]) => {
      const tt = toetstermen.find((t) => t.code === code)
      if (!tt) return null
      return {
        toetsterm: tt,
        count,
        total: totalByCode[code] ?? count,
      }
    })
    .filter((g): g is GroupedToetsterm => g !== null)
    .sort((a, b) => b.count - a.count)
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
