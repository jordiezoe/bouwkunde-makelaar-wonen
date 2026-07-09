import { useCallback, useEffect, useRef, useState } from 'react'
import { getTopic } from '../content'
import { asset } from '../lib/asset'
import type { Screen } from '../App'
import {
  isTopicPassed,
  isTrainerCompleted,
  isTussenExamPassed,
  type Progress,
} from '../lib/storage'
import type { Bloom, DiagramRef, LessonImage, LessonSection, Niveau } from '../types/content'
import {
  ArceringenDiagram,
  BestekSymbolenDiagram,
  InstallatieSymbolenDiagram,
  ArchitectuurTijdlijn,
  Boog,
  BouwfasenDiagram,
  GevolgklasseDiagram,
  GrondsoortenDiagram,
  HoofdopbouwDiagram,
  PerceelDiagram,
  PlattegrondDragendDiagram,
  SterkteleerDiagram,
  Verband,
  VitruviusDiagram,
  WkbKnipDiagram,
  WoningtypenDiagram,
} from '../components/Diagrams'

// ─── Audiospeler (vooraf ingesproken MP3, stem Xander Verbeterd) ─────────────

const RATE_KEY = 'bouwkunde-audio-rate-v1'

type AudioState = 'idle' | 'speaking' | 'paused'

interface UseAudioResult {
  state: AudioState
  sectionIdx: number
  rate: number
  setRate: (r: number) => void
  play: () => void
  pause: () => void
  stop: () => void
}

/**
 * Speelt de vooraf ingesproken lesfragmenten (MP3, stem Xander Verbeterd) af.
 * Per onderwerp: /audio/{code}-0.mp3 (intro) t/m /audio/{code}-N.mp3 (secties).
 * De fragmenten spelen achter elkaar; afspeelsnelheid wordt onthouden.
 *
 * In tegenstelling tot de oude speechSynthesis-aanpak werkt dit identiek op
 * iPhone/iPad — de Verbeterde Xander-stem is in de opname vastgelegd.
 */
function useAudioBook(topicCode: string, chunkCount: number): UseAudioResult {
  const [state, setState] = useState<AudioState>('idle')
  const [sectionIdx, setSectionIdx] = useState(0)
  const [rate, setRateState] = useState<number>(() => {
    try { return parseFloat(localStorage.getItem(RATE_KEY) ?? '1') || 1 } catch { return 1 }
  })

  const audioRef = useRef<HTMLAudioElement | null>(null)
  const idxRef = useRef(0)
  const rateRef = useRef(rate)
  const topicRef = useRef(topicCode)
  const countRef = useRef(chunkCount)
  useEffect(() => { rateRef.current = rate }, [rate])
  useEffect(() => { topicRef.current = topicCode }, [topicCode])
  useEffect(() => { countRef.current = chunkCount }, [chunkCount])

  // Speel fragment `idx`; stopt netjes voorbij het laatste fragment.
  const playIdx = useCallback((idx: number) => {
    const a = audioRef.current
    if (!a) return
    if (idx >= countRef.current) {
      setState('idle'); setSectionIdx(0); idxRef.current = 0
      return
    }
    idxRef.current = idx
    setSectionIdx(idx)
    a.src = asset(`/audio/${topicRef.current}-${idx}.mp3`)
    a.playbackRate = rateRef.current
    a.play().then(() => setState('speaking')).catch(() => setState('idle'))
  }, [])

  // Eén audio-element + handlers
  useEffect(() => {
    const a = new Audio()
    a.preload = 'none'
    audioRef.current = a
    const onEnded = () => playIdx(idxRef.current + 1)               // volgende sectie
    const onError = () => { if (a.getAttribute('src')) playIdx(idxRef.current + 1) }
    a.addEventListener('ended', onEnded)
    a.addEventListener('error', onError)
    return () => {
      a.pause()
      a.removeEventListener('ended', onEnded)
      a.removeEventListener('error', onError)
      audioRef.current = null
    }
  }, [playIdx])

  // Bij wisselen van onderwerp: stop en reset
  useEffect(() => {
    audioRef.current?.pause()
    setState('idle'); setSectionIdx(0); idxRef.current = 0
  }, [topicCode])

  const play = useCallback(() => {
    const a = audioRef.current
    if (!a) return
    if (state === 'paused') {
      a.play().then(() => setState('speaking')).catch(() => setState('idle'))
    } else {
      playIdx(state === 'idle' ? 0 : idxRef.current)
    }
  }, [state, playIdx])

  const pause = useCallback(() => {
    audioRef.current?.pause()
    setState('paused')
  }, [])

  const stop = useCallback(() => {
    const a = audioRef.current
    if (a) { a.pause(); a.removeAttribute('src'); a.load() }
    setState('idle'); setSectionIdx(0); idxRef.current = 0
  }, [])

  const setRate = useCallback((r: number) => {
    setRateState(r)
    if (audioRef.current) audioRef.current.playbackRate = r
    try { localStorage.setItem(RATE_KEY, String(r)) } catch { /* ignore */ }
  }, [])

  return { state, sectionIdx, rate, setRate, play, pause, stop }
}

// ─────────────────────────────────────────────────────────────────────────────

interface Props {
  topicCode: string
  scrollToToetsterm?: string
  progress: Progress
  onNavigate: (s: Screen) => void
}

export function Lesson({ topicCode, scrollToToetsterm, progress, onNavigate }: Props) {
  const topic = getTopic(topicCode)

  // Bewaar en herstel scrollpositie per onderwerp zodat iOS-herstart terugkeert
  // naar de plek waar de gebruiker was.
  const scrollKey = `bouwkunde-lesson-scroll-${topicCode}`
  useEffect(() => {
    // Herstel scrollpositie na render
    const saved = localStorage.getItem(scrollKey)
    if (saved && !scrollToToetsterm) {
      const y = parseInt(saved, 10)
      if (!isNaN(y) && y > 0) {
        const t = setTimeout(() => window.scrollTo({ top: y, behavior: 'instant' }), 80)
        return () => clearTimeout(t)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollKey])

  // Lees-voortgangspercentage (0–1) voor de zijbalk
  const [readPct, setReadPct] = useState(0)

  useEffect(() => {
    let rafId = 0
    const onScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight
        if (scrollable > 0) setReadPct(Math.min(1, window.scrollY / scrollable))
        try { localStorage.setItem(scrollKey, String(Math.round(window.scrollY))) } catch { /* ignore */ }
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(rafId) }
  }, [scrollKey])

  // Aantal audiofragmenten: intro (titel+blurb) + één per lessectie.
  const chunkCount = topic ? topic.lessonSections.length + 1 : 0
  const tts = useAudioBook(topic?.code ?? '', chunkCount)

  // Toon de audiospeler alleen als de ingesproken MP3's daadwerkelijk bestaan.
  // Zo verdwijnt de knop netjes wanneer de audio (nog) niet gepubliceerd is,
  // en verschijnt hij vanzelf zodra die er wél staat.
  const [audioAvailable, setAudioAvailable] = useState(false)
  useEffect(() => {
    if (!topic) { setAudioAvailable(false); return }
    let alive = true
    setAudioAvailable(false)
    fetch(asset(`/audio/${topic.code}-0.mp3`), { method: 'HEAD' })
      // Alleen tonen als er écht een audiobestand is. Een SPA-fallback (dev-server)
      // geeft 200 met text/html terug; die mag de knop niet activeren.
      .then((r) => {
        const ct = r.headers.get('content-type') || ''
        if (alive) setAudioAvailable(r.ok && ct.includes('audio'))
      })
      .catch(() => { if (alive) setAudioAvailable(false) })
    return () => { alive = false }
  }, [topic?.code])

  // Scroll naar de relevante sectie zodra deze prop binnenkomt
  useEffect(() => {
    if (!topic || !scrollToToetsterm) return
    const sectionIdx = topic.lessonSections.findIndex((s) =>
      s.toetstermCodes?.includes(scrollToToetsterm),
    )
    if (sectionIdx < 0) return
    // Kleine vertraging om DOM-render af te wachten
    const id = `sec-${topic.code}-${sectionIdx}`
    requestAnimationFrame(() => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        // Hooglicht-flash
        el.classList.add('ring-2', 'ring-amber-400', 'ring-offset-2')
        setTimeout(() => {
          el.classList.remove('ring-2', 'ring-amber-400', 'ring-offset-2')
        }, 2000)
      }
    })
  }, [topic, scrollToToetsterm])

  if (!topic) {
    return <div>Onderwerp niet gevonden.</div>
  }

  const passed = isTopicPassed(progress, topic.code)
  const attempt = progress.topics[topic.code]
  const hasTerms = (topic.terms?.length ?? 0) > 0
  const trainerDone = isTrainerCompleted(progress, topic.code)
  const quizLocked = hasTerms && !trainerDone
  const tussenExamPassed = isTussenExamPassed(progress, topic.code)
  const tussenExamAttempt = progress.tussenExams?.[topic.code]

  return (
    <div className="space-y-6">
      {/* Subtiele verticale leesbalk — rechts in de viewport, alleen zichtbaar na eerste scroll */}
      {readPct > 0 && (
        <div
          aria-hidden="true"
          className="fixed right-0 top-0 bottom-0 w-1 z-30 pointer-events-none"
          style={{ background: 'rgba(148,163,184,0.15)' }}
        >
          <div
            className="w-full bg-primary-400 transition-all duration-150 rounded-b"
            style={{
              height: `${readPct * 100}%`,
              opacity: readPct >= 1 ? 0 : 0.55,
            }}
          />
          {/* Percentage-label bij de duim */}
          <div
            className="absolute right-2.5 text-[10px] text-slate-400 font-medium select-none"
            style={{ top: `calc(${readPct * 100}% - 8px)` }}
          >
            {readPct >= 0.99 ? '' : `${Math.round(readPct * 100)}%`}
          </div>
        </div>
      )}

      <button
        onClick={() => onNavigate({ name: 'section', section: topic.section })}
        className="text-sm text-primary-600 hover:underline"
      >
        ← Terug naar {topic.section}-overzicht
      </button>

      <header className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200">
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <span className="text-sm font-mono text-primary-600 bg-primary-50 px-2 py-1 rounded">
            {topic.code}
          </span>
          {topic.chapterRef && (
            <span className="text-xs text-slate-500">{topic.chapterRef}</span>
          )}
          {passed && (
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded font-medium">
              ✓ Behaald
            </span>
          )}
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-primary-800 mt-2">{topic.title}</h1>
        <p className="text-slate-600 mt-1 text-sm sm:text-base">{topic.blurb}</p>

        {attempt && (
          <div className="mt-3 text-sm text-slate-600">
            Laatste poging: <strong>{attempt.correct}/{attempt.total}</strong> ({Math.round(attempt.score * 100)}%)
          </div>
        )}

        <div className="mt-4 flex gap-2 sm:gap-3 flex-wrap">
          {topic.games && topic.games.length > 0 && (
            <button
              onClick={() => onNavigate({ name: 'games', topicCode: topic.code })}
              className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 font-medium text-sm sm:text-base w-full sm:w-auto"
            >
              🎮 Oefenspellen ({topic.games.length})
            </button>
          )}
          {hasTerms && (
            <button
              onClick={() => onNavigate({ name: 'trainer', topicCode: topic.code })}
              className={`px-4 py-2 rounded-md font-medium text-white text-sm sm:text-base w-full sm:w-auto ${
                trainerDone
                  ? 'bg-violet-400 hover:bg-violet-500'
                  : 'bg-violet-600 hover:bg-violet-700'
              }`}
            >
              🧠 Begrippentrainer ({topic.terms!.length}) {trainerDone ? '✓' : ''}
            </button>
          )}
          <button
            onClick={() => onNavigate({ name: 'herhalingmix', topicCode: topic.code })}
            className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md font-medium text-sm sm:text-base w-full sm:w-auto"
          >
            🔄 Gemengde herhaling
          </button>
          <button
            onClick={() => onNavigate({ name: 'quiz', topicCode: topic.code })}
            disabled={quizLocked}
            title={quizLocked ? 'Eerst de begrippentrainer 100% afronden' : undefined}
            className={`px-4 py-2 rounded-md font-medium text-white text-sm sm:text-base w-full sm:w-auto ${
              quizLocked
                ? 'bg-slate-400 cursor-not-allowed'
                : 'bg-primary-600 hover:bg-primary-700'
            }`}
          >
            {quizLocked
              ? '🔒 Quiz vergrendeld'
              : passed
                ? 'Quiz herhalen'
                : `Start overhoring (${topic.questions.length} vragen)`}
          </button>
          <div className="text-xs text-slate-500 self-center w-full sm:w-auto">
            Slagingsgrens: {Math.round((topic.passingScore ?? 0.8) * 100)}%
          </div>
        </div>
        {quizLocked && (
          <div className="mt-2 text-xs text-violet-700 bg-violet-50 border border-violet-200 rounded px-3 py-1.5">
            ℹ️ Rond eerst de begrippentrainer (100%) af om de quiz vrij te spelen.
          </div>
        )}
      </header>

      <article className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200">
        <h2 className="text-lg font-semibold text-primary-700 mb-4">Lesstof</h2>

        {/* Audiospeler — speelt de vooraf ingesproken MP3's (Xander Verbeterd) af */}
        {chunkCount > 0 && audioAvailable && (
          <div className="mb-4 bg-sky-50 border border-sky-200 rounded-xl px-4 py-3 space-y-2">
            {/* Rij 1: play/stop + sectienaam + snelheid */}
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => tts.state === 'speaking' ? tts.pause() : tts.play()}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition shrink-0 ${
                  tts.state === 'idle'
                    ? 'bg-sky-600 text-white hover:bg-sky-700'
                    : tts.state === 'speaking'
                      ? 'bg-amber-500 text-white hover:bg-amber-600'
                      : 'bg-sky-600 text-white hover:bg-sky-700'
                }`}
              >
                {tts.state === 'speaking' ? '⏸ Pauze' : tts.state === 'paused' ? '▶ Doorgaan' : '🔊 Beluister hoofdstuk'}
              </button>

              {tts.state !== 'idle' && (
                <>
                  <span className="text-xs text-sky-600 flex-1 min-w-0 truncate">
                    {tts.sectionIdx === 0
                      ? 'Inleiding'
                      : topic.lessonSections[tts.sectionIdx - 1]?.heading ?? ''}
                    <span className="text-sky-400 ml-1">({tts.sectionIdx + 1}/{chunkCount})</span>
                  </span>
                  {/* Snelheid */}
                  <div className="flex items-center gap-1 shrink-0">
                    {[0.8, 1, 1.25, 1.5].map((r) => (
                      <button
                        key={r}
                        onClick={() => tts.setRate(r)}
                        className={`px-2 py-0.5 rounded text-xs font-mono transition ${
                          tts.rate === r ? 'bg-sky-600 text-white' : 'bg-sky-100 text-sky-700'
                        }`}
                      >
                        {r}×
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={tts.stop}
                    className="px-2 py-1 rounded-lg bg-sky-100 text-sky-700 text-xs font-medium shrink-0"
                  >
                    ■ Stop
                  </button>
                </>
              )}

              {tts.state === 'idle' && (
                <span className="text-[11px] text-sky-600/80 shrink-0">
                  ingesproken stem · {chunkCount} fragmenten
                </span>
              )}
            </div>
          </div>
        )}

        <div className="space-y-8">
          {topic.lessonSections.map((sec, i) => (
            <LessonSectionView
              key={i}
              section={sec}
              id={`sec-${topic.code}-${i}`}
              highlighted={tts.state !== 'idle' && tts.sectionIdx === i + 1}
            />
          ))}
        </div>
      </article>

      <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200">
        <h2 className="text-lg font-semibold text-primary-700 mb-3">
          Toetstermen die in de overhoring aan bod komen ({topic.toetstermen.length})
        </h2>
        <ul className="space-y-2">
          {topic.toetstermen.map((tt) => (
            <li key={tt.code} className="flex gap-3 text-sm">
              <span className="font-mono text-xs text-slate-500 mt-0.5 whitespace-nowrap">
                {tt.code}
              </span>
              <div className="flex-1">
                <div className="text-slate-700">{tt.text}</div>
                <div className="flex gap-1 mt-1 flex-wrap">
                  <NiveauBadge niveau={tt.niveau} />
                  <BloomBadge bloom={tt.bloom} />
                  {tt.metDrawing && (
                    <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded">
                      met tekening
                    </span>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <div className="flex justify-center gap-3 pt-2 flex-wrap flex-col sm:flex-row">
        {topic.games && topic.games.length > 0 && (
          <button
            onClick={() => onNavigate({ name: 'games', topicCode: topic.code })}
            className="px-6 py-3 bg-amber-500 text-white rounded-md hover:bg-amber-600 font-semibold text-base sm:text-lg w-full sm:w-auto"
          >
            🎮 Eerst speelend leren →
          </button>
        )}
        {hasTerms && (
          <button
            onClick={() => onNavigate({ name: 'trainer', topicCode: topic.code })}
            className={`px-6 py-3 rounded-md font-semibold text-base sm:text-lg text-white w-full sm:w-auto ${
              trainerDone
                ? 'bg-violet-400 hover:bg-violet-500'
                : 'bg-violet-600 hover:bg-violet-700'
            }`}
          >
            🧠 Begrippentrainer {trainerDone ? '✓' : '→'}
          </button>
        )}
        <button
          onClick={() => onNavigate({ name: 'herhalingmix', topicCode: topic.code })}
          className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-md font-semibold text-base sm:text-lg w-full sm:w-auto"
        >
          🔄 Gemengde herhaling →
        </button>
        <button
          onClick={() => onNavigate({ name: 'quiz', topicCode: topic.code })}
          disabled={quizLocked}
          title={quizLocked ? 'Eerst de begrippentrainer 100% afronden' : undefined}
          className={`px-6 py-3 rounded-md font-semibold text-base sm:text-lg text-white w-full sm:w-auto ${
            quizLocked
              ? 'bg-slate-400 cursor-not-allowed'
              : 'bg-primary-600 hover:bg-primary-700'
          }`}
        >
          {quizLocked
            ? '🔒 Quiz vergrendeld'
            : passed
              ? 'Quiz herhalen →'
              : 'Naar de overhoring →'}
        </button>
        {passed && (
          <button
            onClick={() => onNavigate({ name: 'tussenexam', topicCode: topic.code })}
            className={`px-6 py-3 rounded-md font-semibold text-base sm:text-lg text-white w-full sm:w-auto ${
              tussenExamPassed
                ? 'bg-emerald-500 hover:bg-emerald-600'
                : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
            title="Cumulatieve overhoring met vragen uit dit én alle eerder behaalde onderdelen"
          >
            🎓 Cumulatieve overhoring {tussenExamPassed ? '✓' : '→'}
          </button>
        )}
      </div>
      {passed && tussenExamAttempt && (
        <div className="text-center text-xs text-slate-600">
          Laatste cumulatieve overhoring t/m {topic.code}:{' '}
          <strong>
            {tussenExamAttempt.correct}/{tussenExamAttempt.total}
          </strong>{' '}
          ({Math.round(tussenExamAttempt.score * 100)}%) ·{' '}
          {tussenExamPassed ? '✓ geslaagd (90%)' : 'nog niet gehaald'}
        </div>
      )}
    </div>
  )
}

function LessonSectionView({
  section,
  id,
  highlighted = false,
}: {
  section: LessonSection
  id: string
  highlighted?: boolean
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 transition-all rounded-lg p-2 -m-2 ${
        highlighted ? 'bg-sky-50 ring-2 ring-sky-300 ring-offset-2' : ''
      }`}
    >
      <h3 className="text-base font-semibold text-primary-700 mb-2">
        {section.heading}
      </h3>
      <Markdown text={section.body} />
      {section.diagrams && section.diagrams.length > 0 && (
        <DiagramGrid diagrams={section.diagrams} />
      )}
      {section.images && section.images.length > 0 && (
        <ImageGrid images={section.images} />
      )}
      {section.toetstermCodes && section.toetstermCodes.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {section.toetstermCodes.map((code) => (
            <span
              key={code}
              className="text-[10px] font-mono bg-primary-50 text-primary-700 px-1.5 py-0.5 rounded"
            >
              {code}
            </span>
          ))}
        </div>
      )}
    </section>
  )
}

function DiagramGrid({ diagrams }: { diagrams: DiagramRef[] }) {
  // Standalone (volle breedte) diagram-types
  const FULL_TYPES = new Set([
    'perceel',
    'bouwfasen',
    'arceringen',
    'plattegrondDragend',
    'woningtypen',
    'architectuurTijdlijn',
    'wkbKnip',
    'gevolgklasse',
    'vitruvius',
    'hoofdopbouw',
    'sterkteleer',
    'grondsoorten',
    'bestekSymbolen',
    'installatieSymbolen',
  ])
  const soloOnly =
    diagrams.length === 1 && FULL_TYPES.has(diagrams[0].type)
  const containerClass = soloOnly ? 'mt-4 space-y-4' : 'mt-4 grid sm:grid-cols-2 gap-4'
  return (
    <div className={containerClass}>
      {diagrams.map((d, i) => {
        switch (d.type) {
          case 'verband':
            return <Verband key={i} name={d.name} />
          case 'boog':
            return <Boog key={i} name={d.name} />
          case 'perceel':
            return <PerceelDiagram key={i} />
          case 'bouwfasen':
            return <BouwfasenDiagram key={i} />
          case 'arceringen':
            return <ArceringenDiagram key={i} />
          case 'plattegrondDragend':
            return <PlattegrondDragendDiagram key={i} />
          case 'woningtypen':
            return <WoningtypenDiagram key={i} />
          case 'architectuurTijdlijn':
            return <ArchitectuurTijdlijn key={i} />
          case 'wkbKnip':
            return <WkbKnipDiagram key={i} />
          case 'gevolgklasse':
            return <GevolgklasseDiagram key={i} />
          case 'vitruvius':
            return <VitruviusDiagram key={i} />
          case 'hoofdopbouw':
            return <HoofdopbouwDiagram key={i} />
          case 'sterkteleer':
            return <SterkteleerDiagram key={i} />
          case 'grondsoorten':
            return <GrondsoortenDiagram key={i} />
          case 'bestekSymbolen':
            return <BestekSymbolenDiagram key={i} />
          case 'installatieSymbolen':
            return <InstallatieSymbolenDiagram key={i} />
        }
      })}
    </div>
  )
}

function ImageGrid({ images }: { images: LessonImage[] }) {
  // Plaats sm-images in een grid; lg/full breed; md ook breed
  const small = images.filter((i) => i.width === 'sm')
  const medium = images.filter((i) => i.width === 'md' || !i.width)
  const large = images.filter((i) => i.width === 'lg' || i.width === 'full')

  return (
    <div className="mt-4 space-y-4">
      {large.length > 0 && (
        <div className="space-y-4">
          {large.map((img) => (
            <FigureLarge key={img.src} image={img} />
          ))}
        </div>
      )}
      {medium.length > 0 && (
        <div className="grid sm:grid-cols-2 gap-4">
          {medium.map((img) => (
            <Figure key={img.src} image={img} />
          ))}
        </div>
      )}
      {small.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {small.map((img) => (
            <Figure key={img.src} image={img} />
          ))}
        </div>
      )}
    </div>
  )
}

function FigureLarge({ image }: { image: LessonImage }) {
  return (
    <figure className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200">
      <img src={asset(image.src)} alt={image.caption} className="w-full h-auto object-contain bg-white" />
      <figcaption className="px-4 py-2 text-xs text-slate-600">
        {image.caption}
        {image.source && <span className="text-slate-400"> · {image.source}</span>}
      </figcaption>
    </figure>
  )
}

function Figure({ image }: { image: LessonImage }) {
  return (
    <figure className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200">
      <img src={asset(image.src)} alt={image.caption} className="w-full h-auto object-contain bg-white" />
      <figcaption className="px-3 py-2 text-xs text-slate-600">
        {image.caption}
        {image.source && <span className="text-slate-400"> · {image.source}</span>}
      </figcaption>
    </figure>
  )
}

function NiveauBadge({ niveau }: { niveau: Niveau }) {
  const colors = niveau === 'BT1' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
  return <span className={`text-[10px] px-1.5 py-0.5 rounded ${colors}`}>{niveau}</span>
}

function BloomBadge({ bloom }: { bloom: Bloom }) {
  return (
    <span className="text-[10px] bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded">
      {bloom}
    </span>
  )
}

/** Mini-markdown: lege regel = nieuwe paragraaf; '- ' = list; **vet**, *cursief*, `code`. */
function Markdown({ text }: { text: string }) {
  const blocks = text.split(/\n\n+/)
  return (
    <div className="space-y-3 leading-relaxed text-slate-700">
      {blocks.map((b, i) => {
        if (b.startsWith('## ')) {
          return (
            <h4 key={i} className="text-sm font-semibold text-primary-700 mt-3">
              {b.slice(3)}
            </h4>
          )
        }
        const lines = b.split('\n')
        if (lines.every((l) => l.trim().startsWith('- '))) {
          return (
            <ul key={i} className="list-disc pl-5 space-y-1">
              {lines.map((line, j) => (
                <li key={j}>{inline(line.replace(/^\s*-\s*/, ''))}</li>
              ))}
            </ul>
          )
        }
        return <p key={i}>{inline(b)}</p>
      })}
    </div>
  )
}

function inline(s: string): React.ReactNode {
  const parts: React.ReactNode[] = []
  let i = 0
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g
  let m: RegExpExecArray | null
  while ((m = re.exec(s)) !== null) {
    if (m.index > i) parts.push(s.slice(i, m.index))
    const tok = m[0]
    if (tok.startsWith('**')) {
      parts.push(<strong key={m.index}>{tok.slice(2, -2)}</strong>)
    } else if (tok.startsWith('`')) {
      parts.push(
        <code key={m.index} className="bg-slate-100 px-1 rounded text-sm">
          {tok.slice(1, -1)}
        </code>,
      )
    } else {
      parts.push(<em key={m.index}>{tok.slice(1, -1)}</em>)
    }
    i = m.index + tok.length
  }
  if (i < s.length) parts.push(s.slice(i))
  return parts
}
