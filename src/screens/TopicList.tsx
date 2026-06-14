import {
  dossierOrder,
  getStub,
  getTopic,
  isNextInOrder,
  isSectionUnlocked,
  isUnlocked,
  sections,
  topicMetas,
} from '../content'
import {
  isSectionExamPassed,
  toggleTopicPassedManual,
  type Progress,
} from '../lib/storage'
import type { Screen } from '../App'
import type { Section } from '../types/content'

interface Props {
  section: Section
  progress: Progress
  setProgress: (p: Progress) => void
  onNavigate: (s: Screen) => void
}

/** Grote groene check-cirkel voor behaalde onderwerpen. */
function CheckCircle() {
  return (
    <svg
      className="shrink-0 w-8 h-8 text-emerald-500"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="15" fill="currentColor" opacity="0.15" />
      <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2" />
      <path
        d="M9 16.5l5 5 9-9"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Lege cirkel voor nog-niet-gestarte onderwerpen. */
function EmptyCircle({ isNext }: { isNext: boolean }) {
  return (
    <svg
      className={`shrink-0 w-8 h-8 ${isNext ? 'text-primary-500' : 'text-slate-300'}`}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="16"
        cy="16"
        r="15"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray={isNext ? undefined : '4 3'}
      />
      {isNext && (
        <circle cx="16" cy="16" r="6" fill="currentColor" opacity="0.35" />
      )}
    </svg>
  )
}

const NEXT_SECTION: Record<Section, Section | null> = {
  A: 'B', B: 'C', C: 'D', D: null,
}
const PREV_SECTION: Record<Section, Section | null> = {
  A: null, B: 'A', C: 'B', D: 'C',
}

export function TopicList({ section, progress, setProgress, onNavigate }: Props) {
  const info = sections.find((s) => s.id === section)!
  const passedSet = new Set(
    Object.entries(progress.topics)
      .filter(([, a]) => a.passedAt !== undefined)
      .map(([code]) => code),
  )

  // Onderwerpen uit deze sectie in dossier-volgorde
  const orderedCodes = dossierOrder.filter((code) =>
    topicMetas.some((m) => m.code === code && m.section === section),
  )

  const passedCount = orderedCodes.filter((c) => passedSet.has(c)).length

  const nextSection = NEXT_SECTION[section]
  const prevSection = PREV_SECTION[section]

  // Sectie-examen status
  const sectionExamPassed = isSectionExamPassed(progress, section)
  const sectionExamAttempt = progress.sectionExams?.[section]
  const availableTopicCount = topicMetas.filter((m) => m.section === section).length
  const passedTopicCount = topicMetas.filter(
    (m) => m.section === section && passedSet.has(m.code),
  ).length

  // Is deze sectie zelf vergrendeld (voor de gate-banner bovenaan)?
  const thisSectionLocked = !isSectionUnlocked(section, progress)

  return (
    <div className="space-y-6">
      <button
        onClick={() => onNavigate({ name: 'dashboard' })}
        className="text-sm text-primary-600 hover:underline"
      >
        ← Terug naar overzicht
      </button>

      {/* Gate-banner: sectie vergrendeld */}
      {thisSectionLocked && prevSection && (
        <div className="bg-orange-50 border border-orange-300 rounded-xl p-4 flex items-start gap-3">
          <span className="text-2xl shrink-0">🔒</span>
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-orange-800">
              Sectie {section} is vergrendeld
            </div>
            <p className="text-sm text-orange-700 mt-0.5">
              Leg eerst het sectie-examen van sectie {prevSection} af (≥70%) om
              deze sectie vrij te spelen.
            </p>
            <button
              onClick={() => onNavigate({ name: 'sectieexamen', section: prevSection })}
              className="mt-2 px-4 py-1.5 bg-orange-600 hover:bg-orange-700 text-white text-sm rounded-md font-medium"
            >
              🏛️ Naar sectie-examen {prevSection} →
            </button>
          </div>
        </div>
      )}

      <header className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-primary-800">{info.title}</h1>
          <p className="text-slate-600 mt-1">{info.description}</p>
        </div>
        <div className="shrink-0 text-right">
          <div className="text-2xl font-bold text-emerald-600">{passedCount}/{orderedCodes.length}</div>
          <div className="text-xs text-slate-500">behaald</div>
        </div>
      </header>

      <p className="text-xs text-slate-500 -mt-2 flex items-center gap-1.5">
        <span className="text-emerald-500">✓</span>
        Tik op het rondje links van een onderwerp om het zelf als <strong>behaald</strong> te markeren (of terug te zetten).
      </p>

      <ol className="space-y-2">
        {orderedCodes.map((code) => {
          const topic = getTopic(code)
          const stub = !topic ? getStub(code) : undefined
          const unlocked = isUnlocked(code, passedSet)
          const passed = passedSet.has(code)
          const isNext = isNextInOrder(code, passedSet)
          const attempt = progress.topics[code]
          const isReady = topic !== undefined

          if (isReady && unlocked) {
            return (
              <li key={code}>
                <div
                  className={`w-full rounded-lg shadow-sm hover:shadow-md transition border flex items-center gap-3 ${
                    passed
                      ? 'bg-emerald-50 border-emerald-200'
                      : isNext
                        ? 'bg-primary-50 border-primary-300 ring-2 ring-primary-200'
                        : 'bg-white border-slate-200'
                  }`}
                >
                  {/* Aantikbare status-cirkel: tik om behaald aan/uit te zetten */}
                  <button
                    onClick={() => setProgress(toggleTopicPassedManual(progress, code))}
                    className="pl-4 py-4 shrink-0 group"
                    title={passed ? 'Tik om terug te zetten naar niet-behaald' : 'Tik om als behaald te markeren'}
                    aria-label={passed ? `${code} terugzetten` : `${code} als behaald markeren`}
                  >
                    <span className="block group-hover:scale-110 transition-transform">
                      {passed ? <CheckCircle /> : <EmptyCircle isNext={isNext} />}
                    </span>
                  </button>

                  {/* Rest van de rij: tik om naar de les te gaan */}
                  <button
                    onClick={() =>
                      onNavigate({ name: 'lesson', topicCode: topic.code })
                    }
                    className="flex-1 min-w-0 text-left py-4 pr-4"
                  >
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-mono text-primary-600 bg-primary-50 border border-primary-100 px-1.5 py-0.5 rounded">
                        {code}
                      </span>
                      {isNext && !passed && (
                        <span className="text-[10px] font-semibold uppercase tracking-wide bg-primary-600 text-white px-2 py-0.5 rounded-full">
                          Volgende →
                        </span>
                      )}
                    </div>
                    <div className={`font-semibold mt-1 ${passed ? 'text-emerald-800' : 'text-slate-800'}`}>
                      {topic.title}
                    </div>
                    <div className="text-sm text-slate-600 mt-0.5 leading-snug">
                      {topic.blurb}
                    </div>
                    {attempt && (
                      <div className="text-xs text-slate-500 mt-1">
                        Laatste poging: {attempt.correct}/{attempt.total} (
                        {Math.round(attempt.score * 100)}%)
                      </div>
                    )}
                  </button>
                </div>
              </li>
            )
          }

          if (isReady && !unlocked) {
            return (
              <li
                key={code}
                className="flex items-center gap-4 p-4 rounded-lg border border-slate-200 bg-slate-50 text-slate-500"
              >
                <EmptyCircle isNext={false} />
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-mono text-slate-400 mb-0.5">{code}</div>
                  <div className="font-medium flex items-center gap-2">
                    🔒 {topic.title}
                  </div>
                  <div className="text-xs mt-1">
                    Wordt vrijgespeeld zodra het vorige onderwerp is behaald.
                  </div>
                </div>
              </li>
            )
          }

          // Stub: nog niet uitgewerkt
          return (
            <li
              key={code}
              className="flex items-center gap-4 p-4 rounded-lg border border-dashed border-slate-300 text-slate-400"
            >
              <svg className="shrink-0 w-8 h-8" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
              </svg>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-mono text-slate-400 mb-0.5">{code}</div>
                <div className="font-medium text-slate-500">{stub?.title}</div>
                <div className="text-xs mt-0.5">
                  Wordt nog uitgewerkt
                  {stub?.chapterRef ? ` · ${stub.chapterRef}` : ''}.
                </div>
              </div>
            </li>
          )
        })}
      </ol>

      {/* ── Sectie-examen paneel ─────────────────────────────────────────── */}
      <section className={`rounded-xl p-5 border ${
        sectionExamPassed
          ? 'bg-emerald-50 border-emerald-300'
          : 'bg-orange-50 border-orange-300'
      }`}>
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-slate-800">
                🏛️ Sectie-examen {section}
              </span>
              {sectionExamPassed && (
                <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-medium">
                  ✓ Geslaagd
                </span>
              )}
              {!sectionExamPassed && nextSection && (
                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded font-medium">
                  Vereist voor sectie {nextSection}
                </span>
              )}
            </div>

            <p className="text-sm text-slate-600 mt-1">
              {sectionExamPassed
                ? nextSection
                  ? `Sectie ${nextSection} is vrijgespeeld. Je kunt het examen opnieuw doen om je score te verbeteren.`
                  : 'Je hebt alle secties afgerond. Je kunt het examen opnieuw doen.'
                : nextSection
                  ? `Leg dit Bloom-gewogen examen af (≥70%) om sectie ${nextSection} vrij te spelen.`
                  : 'Sluit het kwalificatiedossier volledig af met dit examen.'}
            </p>

            <div className="mt-2 flex items-center gap-4 text-xs text-slate-500 flex-wrap">
              <span>
                {passedTopicCount}/{availableTopicCount} onderwerpen afgerond
              </span>
              {sectionExamAttempt && (
                <span>
                  Laatste poging:{' '}
                  <strong className={sectionExamPassed ? 'text-emerald-700' : 'text-rose-700'}>
                    {sectionExamAttempt.correct}/{sectionExamAttempt.total} ({Math.round(sectionExamAttempt.score * 100)}%)
                  </strong>
                </span>
              )}
            </div>
          </div>

          <button
            onClick={() => onNavigate({ name: 'sectieexamen', section })}
            className={`shrink-0 px-5 py-2.5 rounded-md font-semibold text-white ${
              sectionExamPassed
                ? 'bg-emerald-600 hover:bg-emerald-700'
                : 'bg-orange-600 hover:bg-orange-700'
            }`}
          >
            {sectionExamPassed ? 'Opnieuw doen →' : 'Naar sectie-examen →'}
          </button>
        </div>

        {/* Voortgangsbalkje */}
        <div className="mt-3 h-1.5 bg-white/60 rounded-full overflow-hidden border border-white">
          <div
            className={`h-full rounded-full transition-all ${sectionExamPassed ? 'bg-emerald-500' : 'bg-orange-400'}`}
            style={{ width: `${availableTopicCount > 0 ? (passedTopicCount / availableTopicCount) * 100 : 0}%` }}
          />
        </div>
      </section>
    </div>
  )
}
