import { useEffect, useRef, useState } from 'react'
import { Dashboard } from './screens/Dashboard'
import { TopicList } from './screens/TopicList'
import { Lesson } from './screens/Lesson'
import { Quiz } from './screens/Quiz'
import { Games } from './screens/Games'
import { Trainer } from './screens/Trainer'
import { TussenExam } from './screens/TussenExam'
import { HerhalingMix } from './screens/HerhalingMix'
import { SectieExamen } from './screens/SectieExamen'
import { BegrippenGlobaal } from './screens/BegrippenGlobaal'
import { ZwakkePunten } from './screens/ZwakkePunten'
import { Exam } from './screens/Exam'
import { BTExamen } from './screens/BTExamen'
import { WoningDaten } from './screens/WoningDaten'
import { Metselverbanden } from './screens/Metselverbanden'
import { MateriaalHerkennen } from './screens/MateriaalHerkennen'
import {
  loadSection,
  loadAllSections,
  isSectionLoaded,
  topicMetas,
  type SectionKey,
} from './content'
import { loadProgress, saveProgress, type Progress } from './lib/storage'
import type { Section } from './types/content'

export type Screen =
  | { name: 'dashboard' }
  | { name: 'section'; section: Section }
  | { name: 'lesson'; topicCode: string; scrollToToetsterm?: string }
  | { name: 'games'; topicCode: string }
  | { name: 'trainer'; topicCode: string }
  | { name: 'quiz'; topicCode: string }
  | { name: 'tussenexam'; topicCode: string }
  | { name: 'herhalingmix'; topicCode: string }
  | { name: 'sectieexamen'; section: Section }
  | { name: 'begrippenglobaal' }
  | { name: 'zwakkepunten' }
  | { name: 'exam' }
  | { name: 'btexamen' }
  | { name: 'woningdaten' }
  | { name: 'metselverbanden' }
  | { name: 'materiaalherkennen' }

const SCREEN_KEY = 'bouwkunde-screen-v1'
const ALL_SECTIONS: SectionKey[] = ['A', 'B', 'C', 'D']

function loadScreen(): Screen {
  try {
    const raw = localStorage.getItem(SCREEN_KEY)
    if (!raw) return { name: 'dashboard' }
    const parsed = JSON.parse(raw)
    if (parsed && typeof parsed === 'object' && typeof parsed.name === 'string') {
      const valid = [
        'dashboard',
        'section',
        'lesson',
        'games',
        'trainer',
        'quiz',
        'tussenexam',
        'herhalingmix',
        'sectieexamen',
        'begrippenglobaal',
        'zwakkepunten',
        'exam',
        'btexamen',
        'woningdaten',
        'metselverbanden',
        'materiaalherkennen',
      ]
      if (valid.includes(parsed.name)) return parsed as Screen
    }
  } catch {
    /* fall through */
  }
  return { name: 'dashboard' }
}

/** Which sections must be loaded before showing this screen. */
function requiredSections(screen: Screen): SectionKey[] {
  switch (screen.name) {
    case 'lesson':
    case 'quiz':
    case 'trainer':
    case 'games': {
      const meta = topicMetas.find((m) => m.code === screen.topicCode)
      return meta ? [meta.section as SectionKey] : []
    }
    case 'section':
      return [screen.section as SectionKey]
    case 'sectieexamen':
      return [screen.section as SectionKey]
    case 'tussenexam':
    case 'herhalingmix':
    case 'exam':
    case 'btexamen':
    case 'begrippenglobaal':
    case 'zwakkepunten':
      return ALL_SECTIONS
    default:
      return []
  }
}

export function App() {
  const [screen, setScreen] = useState<Screen>(() => loadScreen())
  const [progress, setProgress] = useState<Progress>(() => loadProgress())
  const [isLoadingSection, setIsLoadingSection] = useState(false)
  // Track whether the initial required sections for the startup screen are ready
  const [startupReady, setStartupReady] = useState(false)
  const startupDone = useRef(false)

  useEffect(() => {
    saveProgress(progress)
  }, [progress])

  useEffect(() => {
    try {
      localStorage.setItem(SCREEN_KEY, JSON.stringify(screen))
    } catch {
      /* private mode / vol */
    }
  }, [screen])

  // On mount: load sections needed for the current screen, then load rest in background.
  useEffect(() => {
    if (startupDone.current) return
    startupDone.current = true

    const needed = requiredSections(screen).filter((s) => !isSectionLoaded(s))

    if (needed.length === 0) {
      setStartupReady(true)
      loadAllSections().catch(() => {})
      return
    }

    Promise.all(needed.map((s) => loadSection(s)))
      .catch(() => {})
      .finally(() => {
        setStartupReady(true)
        // Load remaining sections in background after UI is visible
        loadAllSections().catch(() => {})
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /** Navigate to a screen, preloading any missing sections first. */
  function navigate(newScreen: Screen) {
    const missing = requiredSections(newScreen).filter((s) => !isSectionLoaded(s))
    if (missing.length === 0) {
      setScreen(newScreen)
      return
    }
    setIsLoadingSection(true)
    Promise.all(missing.map((s) => loadSection(s)))
      .catch(() => {})
      .finally(() => {
        setIsLoadingSection(false)
        setScreen(newScreen)
      })
  }

  const showLoadingOverlay = !startupReady || isLoadingSection

  return (
    <div className="min-h-screen">
      <header className="bg-primary-700 text-white shadow-md sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3">
          <button
            onClick={() => navigate({ name: 'dashboard' })}
            className="text-left min-w-0 flex-1"
          >
            <div className="text-[10px] sm:text-xs uppercase tracking-wider text-primary-200 truncate">
              Makelaar Wonen · Basistheorie
            </div>
            <div className="text-lg sm:text-xl font-semibold">Bouwkunde</div>
          </button>
          <button
            onClick={() => navigate({ name: 'exam' })}
            className="px-3 py-2 rounded-md bg-primary-600 hover:bg-primary-500 text-xs sm:text-sm font-medium whitespace-nowrap shrink-0"
            aria-label="Start examensimulatie"
          >
            <span className="hidden sm:inline">Examensimulatie</span>
            <span className="sm:hidden">🎓 Examen</span>
          </button>
        </div>
      </header>

      {showLoadingOverlay ? (
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center space-y-3">
            <div className="w-8 h-8 border-2 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto" />
            <p className="text-sm text-slate-500">Lesstof laden…</p>
          </div>
        </div>
      ) : (
        <main className="max-w-5xl mx-auto px-4 sm:px-6 py-5 sm:py-8">
          {screen.name === 'dashboard' && (
            <Dashboard progress={progress} onNavigate={navigate} />
          )}
          {screen.name === 'section' && (
            <TopicList
              section={screen.section}
              progress={progress}
              setProgress={setProgress}
              onNavigate={navigate}
            />
          )}
          {screen.name === 'lesson' && (
            <Lesson
              topicCode={screen.topicCode}
              scrollToToetsterm={screen.scrollToToetsterm}
              progress={progress}
              onNavigate={navigate}
            />
          )}
          {screen.name === 'games' && (
            <Games topicCode={screen.topicCode} onNavigate={navigate} />
          )}
          {screen.name === 'trainer' && (
            <Trainer
              topicCode={screen.topicCode}
              progress={progress}
              setProgress={setProgress}
              onNavigate={navigate}
            />
          )}
          {screen.name === 'quiz' && (
            <Quiz
              topicCode={screen.topicCode}
              progress={progress}
              setProgress={setProgress}
              onNavigate={navigate}
            />
          )}
          {screen.name === 'tussenexam' && (
            <TussenExam
              topicCode={screen.topicCode}
              progress={progress}
              setProgress={setProgress}
              onNavigate={navigate}
            />
          )}
          {screen.name === 'herhalingmix' && (
            <HerhalingMix
              topicCode={screen.topicCode}
              onNavigate={navigate}
            />
          )}
          {screen.name === 'sectieexamen' && (
            <SectieExamen
              section={screen.section}
              progress={progress}
              setProgress={setProgress}
              onNavigate={navigate}
            />
          )}
          {screen.name === 'begrippenglobaal' && (
            <BegrippenGlobaal onNavigate={navigate} />
          )}
          {screen.name === 'zwakkepunten' && (
            <ZwakkePunten
              progress={progress}
              setProgress={setProgress}
              onNavigate={navigate}
            />
          )}
          {screen.name === 'exam' && <Exam onNavigate={navigate} />}
          {screen.name === 'btexamen' && <BTExamen onNavigate={navigate} />}
          {screen.name === 'woningdaten' && <WoningDaten onNavigate={navigate} />}
          {screen.name === 'metselverbanden' && <Metselverbanden onNavigate={navigate} />}
          {screen.name === 'materiaalherkennen' && <MateriaalHerkennen onNavigate={navigate} />}
        </main>
      )}

      {!showLoadingOverlay && (
        <footer className="text-center text-xs text-slate-500 py-6">
          Lokale oefenapp · voortgang blijft in deze browser bewaard
        </footer>
      )}
    </div>
  )
}
