import {
  dossierOrder,
  isNextInOrder,
  isSectionUnlocked,
  sections,
  topicMetas,
} from '../content'
import {
  isSectionExamPassed,
  isWeakQuestionStat,
  type Progress,
} from '../lib/storage'
import type { Screen } from '../App'
import type { Section } from '../types/content'

const NEXT_SECTION: Record<Section, Section | null> = {
  A: 'B', B: 'C', C: 'D', D: null, BL: null,
}

interface Props {
  progress: Progress
  onNavigate: (s: Screen) => void
}

export function Dashboard({ progress, onNavigate }: Props) {
  const passedSet = new Set(
    Object.entries(progress.topics)
      .filter(([, a]) => a.passedAt !== undefined)
      .map(([code]) => code),
  )

  // Vragen waar de leerling het laatst de fout in ging — voor de zwakke-puntenkaart
  const weakCount = Object.values(progress.questions).filter(isWeakQuestionStat).length

  // Vind volgende onderwerp in dossier dat nog niet behaald is.
  const nextUnfinishedCode = dossierOrder.find(
    (code) => !passedSet.has(code) && topicMetas.some((m) => m.code === code),
  )
  const nextTopic = nextUnfinishedCode
    ? topicMetas.find((m) => m.code === nextUnfinishedCode)
    : undefined

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-2xl sm:text-3xl font-bold text-primary-800">Bouwkunde</h1>
        <p className="text-slate-600 mt-1 text-sm sm:text-base">
          Doorloop de onderwerpen één voor één volgens het kwalificatiedossier. Per
          onderwerp lees je de lesstof, doe je de overhoring, en bij ≥ 80% goed gaat het
          volgende onderwerp open.
        </p>
      </section>

      {/* ── Snelkoppelingen voor iPhone / onderweg ── */}
      <section>
        <h2 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-3">
          Onderweg oefenen
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => onNavigate({ name: 'begrippenglobaal' })}
            className="flex flex-col items-start gap-2 bg-violet-600 hover:bg-violet-700 active:bg-violet-800 text-white rounded-2xl p-4 shadow-sm text-left"
          >
            <span className="text-2xl">🧠</span>
            <div>
              <div className="font-semibold text-sm leading-tight">Begrippen</div>
              <div className="text-violet-200 text-xs mt-0.5">alle ~530 termen</div>
            </div>
          </button>
          <button
            onClick={() => onNavigate({ name: 'exam' })}
            className="flex flex-col items-start gap-2 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white rounded-2xl p-4 shadow-sm text-left"
          >
            <span className="text-2xl">🎓</span>
            <div>
              <div className="font-semibold text-sm leading-tight">Examensimulatie</div>
              <div className="text-amber-100 text-xs mt-0.5">snelle mix</div>
            </div>
          </button>
          <button
            onClick={() => onNavigate({ name: 'woningdaten' })}
            className="col-span-2 flex items-center gap-3 bg-cyan-700 hover:bg-cyan-800 active:bg-cyan-900 text-white rounded-2xl p-4 shadow-sm text-left"
          >
            <span className="text-2xl shrink-0">🏡</span>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm leading-tight">Woning daten</div>
              <div className="text-cyan-100 text-xs mt-0.5">
                herken type woning, daktype en bouwperiode aan de details
              </div>
            </div>
            <span className="text-cyan-100 shrink-0">→</span>
          </button>
          <button
            onClick={() => onNavigate({ name: 'metselverbanden' })}
            className="col-span-2 flex items-center gap-3 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white rounded-2xl p-4 shadow-sm text-left"
          >
            <span className="text-2xl shrink-0">🧱</span>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm leading-tight">Metselverbanden</div>
              <div className="text-orange-100 text-xs mt-0.5">
                lesstof + oefenen · herken het verband en de periode
              </div>
            </div>
            <span className="text-orange-100 shrink-0">→</span>
          </button>
          <button
            onClick={() => onNavigate({ name: 'btexamen' })}
            className="col-span-2 flex items-center gap-3 bg-primary-700 hover:bg-primary-800 active:bg-primary-900 text-white rounded-2xl p-4 shadow-sm text-left"
          >
            <span className="text-2xl shrink-0">🏛️</span>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm leading-tight">BT1 en BT2 examen</div>
              <div className="text-primary-200 text-xs mt-0.5">
                examen-getrouw · blokken A/B/C/D · BT1, BT2 of eindsimulatie
              </div>
            </div>
            <span className="text-primary-200 shrink-0">→</span>
          </button>
          <button
            onClick={() => onNavigate({ name: 'section', section: 'BL' })}
            className="col-span-2 flex items-center gap-3 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white rounded-2xl p-4 shadow-sm text-left"
          >
            <span className="text-2xl shrink-0">📐</span>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm leading-tight">Besteklezen</div>
              <div className="text-teal-100 text-xs mt-0.5">
                leer bestek + bouwtekeningen lezen · les → examen
              </div>
            </div>
            <span className="text-teal-100 shrink-0">→</span>
          </button>
          {weakCount > 0 && (
            <button
              onClick={() => onNavigate({ name: 'zwakkepunten' })}
              className="col-span-2 flex items-center gap-3 bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white rounded-2xl p-4 shadow-sm text-left"
            >
              <span className="text-2xl shrink-0">🎯</span>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm leading-tight">Zwakke punten wegwerken</div>
                <div className="text-rose-200 text-xs mt-0.5">
                  {weakCount} {weakCount === 1 ? 'vraag' : 'vragen'} waar je laatst de fout in ging
                </div>
              </div>
              <span className="text-rose-200 shrink-0">→</span>
            </button>
          )}
        </div>
      </section>

      {nextTopic && (
        <section className="bg-primary-700 text-white rounded-xl p-6 shadow-md">
          <div className="text-xs uppercase tracking-wider text-primary-200">
            Verder gaan
          </div>
          <h2 className="text-xl font-semibold mt-1">
            {nextTopic.code} · {nextTopic.title}
          </h2>
          <p className="text-primary-100 mt-2 text-sm leading-relaxed">
            {nextTopic.blurb}
          </p>
          <button
            onClick={() =>
              onNavigate({ name: 'lesson', topicCode: nextTopic.code })
            }
            className="mt-4 px-4 py-2 bg-white text-primary-700 rounded-md hover:bg-primary-50 font-medium"
          >
            Open lesstof →
          </button>
        </section>
      )}

      <section>
        <h2 className="text-sm font-semibold uppercase text-slate-500 tracking-wider mb-2">
          Voortgang per sectie
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {sections.filter((s) => s.id !== 'BL').map((s) => {
            const stats = sectionStats(s.id, progress, passedSet)
            const unlocked = isSectionUnlocked(s.id, progress)
            const examPassed = isSectionExamPassed(progress, s.id)
            const nextSec = NEXT_SECTION[s.id]

            if (!unlocked) {
              // Vergrendelde sectiekaart
              return (
                <div
                  key={s.id}
                  className="bg-slate-100 rounded-xl p-5 border border-slate-200 opacity-75"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-slate-500">{s.title}</h3>
                    <span className="text-xl shrink-0">🔒</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{s.description}</p>
                  <div className="mt-3 text-xs text-slate-500">
                    Leg het sectie-examen van de vorige sectie af om deze sectie vrij te spelen.
                  </div>
                </div>
              )
            }

            return (
              <div key={s.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition border border-slate-200 overflow-hidden">
                <button
                  onClick={() => onNavigate({ name: 'section', section: s.id })}
                  className="text-left w-full p-5"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-semibold text-primary-700">{s.title}</h3>
                    <span className={`text-sm font-semibold whitespace-nowrap ${stats.passed === stats.total && stats.total > 0 ? 'text-emerald-600' : 'text-slate-600'}`}>
                      {stats.passed}/{stats.total}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mt-1 leading-snug">{s.description}</p>
                  {/* Mini dot-rij */}
                  <div className="flex flex-wrap gap-1 mt-3">
                    {stats.codes.map((code) => {
                      const isPassed = passedSet.has(code)
                      const isNext = isNextInOrder(code, passedSet)
                      return (
                        <span
                          key={code}
                          title={code}
                          className={`inline-block w-3 h-3 rounded-full ${
                            isPassed
                              ? 'bg-emerald-500'
                              : isNext
                                ? 'bg-primary-500 ring-2 ring-primary-300'
                                : 'bg-slate-200'
                          }`}
                        />
                      )
                    })}
                  </div>
                  <ProgressBar value={stats.fraction} />
                </button>

                {/* Sectie-examen balk */}
                <button
                  onClick={() => onNavigate({ name: 'sectieexamen', section: s.id })}
                  className={`w-full flex items-center justify-between px-5 py-2 border-t text-xs font-medium transition ${
                    examPassed
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100'
                      : 'bg-orange-50 border-orange-200 text-orange-700 hover:bg-orange-100'
                  }`}
                >
                  <span>
                    {examPassed
                      ? `✓ Sectie-examen ${s.id} geslaagd`
                      : `🏛️ Sectie-examen ${s.id}${nextSec ? ` — vereist voor sectie ${nextSec}` : ''}`}
                  </span>
                  <span>→</span>
                </button>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
        <h2 className="font-semibold text-primary-700">Totaaloverzicht</h2>
        <div className="grid grid-cols-3 gap-4 mt-3 text-sm">
          <Stat label="Onderwerpen behaald" value={passedSet.size} />
          <Stat
            label="Onderwerpen uitgewerkt"
            value={topicMetas.length}
          />
          <Stat
            label="Vragen beantwoord"
            value={Object.keys(progress.questions).length}
          />
        </div>
      </section>
    </div>
  )
}

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="mt-4 h-1.5 bg-slate-100 rounded-full overflow-hidden">
      <div
        className="h-full bg-primary-500 transition-all"
        style={{ width: `${Math.round(value * 100)}%` }}
      />
    </div>
  )
}

function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <div>
      <div className="text-xl sm:text-2xl font-semibold text-primary-700">{value}</div>
      <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-tight">{label}</div>
    </div>
  )
}

function sectionStats(sectionId: Section, progress: Progress, passedSet: Set<string>) {
  const codes = dossierOrder.filter((code) =>
    topicMetas.some((m) => m.code === code && m.section === sectionId),
  )
  const total = codes.length
  const passed = codes.filter((c) => passedSet.has(c)).length
  const fraction = total > 0 ? passed / total : 0
  void progress // progress al verwerkt in passedSet
  return { total, passed, fraction, codes }
}
