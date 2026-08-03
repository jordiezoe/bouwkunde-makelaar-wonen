import { useEffect, useState } from 'react'
import type { Screen } from '../App'
import { studieplan, totaalTaken, type TaakType } from '../content/studieplan'

interface Props {
  onNavigate: (s: Screen) => void
}

const DONE_KEY = 'bouwkunde-studieplan-done-v1'
const START_KEY = 'bouwkunde-studieplan-start-v1'

function loadDone(): Set<string> {
  try { const r = localStorage.getItem(DONE_KEY); if (r) return new Set(JSON.parse(r) as string[]) } catch { /* */ }
  return new Set()
}
function saveDone(s: Set<string>) { try { localStorage.setItem(DONE_KEY, JSON.stringify([...s])) } catch { /* */ } }

function loadStart(): string | null {
  try { return localStorage.getItem(START_KEY) } catch { return null }
}

/** ISO-datum (yyyy-mm-dd) van vandaag, lokale tijd. */
function todayISO(): string {
  const d = new Date()
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  return d.toISOString().slice(0, 10)
}
function addDays(iso: string, n: number): Date {
  const d = new Date(iso + 'T00:00:00')
  d.setDate(d.getDate() + n)
  return d
}
function fmt(d: Date): string {
  return d.toLocaleDateString('nl-NL', { weekday: 'short', day: 'numeric', month: 'short' })
}

const TYPE_STYLE: Record<TaakType, { chip: string; label: string }> = {
  lezen: { chip: 'bg-sky-100 text-sky-800', label: '📖 lezen' },
  oefenen: { chip: 'bg-violet-100 text-violet-800', label: '✏️ oefenen' },
  examen: { chip: 'bg-amber-100 text-amber-800', label: '🎓 toets' },
}

export function Studieplan({ onNavigate }: Props) {
  const [done, setDone] = useState<Set<string>>(() => loadDone())
  const [start, setStart] = useState<string | null>(() => loadStart())

  useEffect(() => { saveDone(done) }, [done])
  useEffect(() => {
    try { if (start) localStorage.setItem(START_KEY, start) } catch { /* */ }
  }, [start])

  function toggle(id: string) {
    setDone((prev) => {
      const n = new Set(prev)
      if (n.has(id)) n.delete(id); else n.add(id)
      return n
    })
  }

  // Welke dag is "vandaag" t.o.v. de startdatum?
  let huidigeDag = 0
  if (start) {
    const ms = new Date(todayISO() + 'T00:00:00').getTime() - new Date(start + 'T00:00:00').getTime()
    huidigeDag = Math.floor(ms / 86400000) + 1
  }

  const totaalDone = done.size
  const pct = Math.round((totaalDone / totaalTaken) * 100)
  const eindDatum = start ? addDays(start, 13) : null

  return (
    <div className="space-y-6 max-w-3xl">
      <button onClick={() => onNavigate({ name: 'dashboard' })} className="text-sm text-primary-600 hover:underline">
        ← Terug naar dashboard
      </button>

      <header>
        <div className="text-xs font-mono text-primary-500">Studieplan · 14 dagen</div>
        <h1 className="text-2xl font-bold text-primary-800">14-dagen studieplan</h1>
        <p className="text-slate-600 mt-1 text-sm">
          Module B en C eerst (samen ~64–80% van het examen). Lees élke dag en oefen meteen in de app.
          Vink af wat je af hebt — dat blijft in deze browser bewaard.
        </p>
      </header>

      {/* Start + voortgang */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 space-y-3">
        {!start ? (
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm text-slate-700">Wanneer begin je?</span>
            <button
              onClick={() => setStart(todayISO())}
              className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md text-sm font-semibold"
            >
              Ik begin vandaag
            </button>
            <label className="text-sm text-slate-500 flex items-center gap-2">
              of kies:
              <input
                type="date"
                onChange={(e) => e.target.value && setStart(e.target.value)}
                className="border border-slate-300 rounded px-2 py-1 text-sm"
              />
            </label>
          </div>
        ) : (
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-sm text-slate-700">
              Start: <strong>{fmt(new Date(start + 'T00:00:00'))}</strong>
              {eindDatum && <> · examen-klaar op <strong>{fmt(eindDatum)}</strong></>}
              {huidigeDag >= 1 && huidigeDag <= 14 && (
                <span className="ml-2 inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                  Vandaag: dag {huidigeDag}
                </span>
              )}
              {huidigeDag > 14 && (
                <span className="ml-2 inline-block bg-slate-200 text-slate-600 text-xs font-semibold px-2 py-0.5 rounded-full">
                  Plan afgerond
                </span>
              )}
            </div>
            <button onClick={() => setStart(null)} className="text-xs text-slate-400 hover:text-slate-600 hover:underline">
              Startdatum wijzigen
            </button>
          </div>
        )}

        <div>
          <div className="flex items-center justify-between text-sm mb-1.5">
            <span className="font-medium text-slate-700">Voortgang</span>
            <span className="text-slate-700"><strong>{totaalDone}</strong> / {totaalTaken} taken · {pct}%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
            <div className="bg-emerald-500 h-2.5 transition-all" style={{ width: `${pct}%` }} />
          </div>
        </div>
      </div>

      {/* Dagen */}
      {[1, 2].map((wk) => (
        <div key={wk} className="space-y-3">
          <h2 className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
            Week {wk} · {wk === 1 ? 'Module B (constructie)' : 'Module C, D, A + examens'}
          </h2>
          {studieplan.filter((d) => d.week === wk).map((d) => {
            const dagDone = d.taken.filter((t) => done.has(t.id)).length
            const klaar = dagDone === d.taken.length
            const isVandaag = huidigeDag === d.dag
            const datum = start ? fmt(addDays(start, d.dag - 1)) : null
            return (
              <section
                key={d.dag}
                className={`rounded-xl border shadow-sm overflow-hidden ${
                  isVandaag ? 'border-primary-400 ring-2 ring-primary-200' : 'border-slate-200'
                }`}
              >
                <div className={`flex items-center gap-3 px-4 py-2.5 ${klaar ? 'bg-emerald-50' : 'bg-slate-50'}`}>
                  <span className={`inline-flex items-center justify-center w-9 h-9 rounded-lg text-white font-bold text-sm ${klaar ? 'bg-emerald-500' : 'bg-primary-600'}`}>
                    {klaar ? '✓' : d.dag}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-primary-800 text-sm leading-tight">
                      Dag {d.dag} — {d.focus}
                    </div>
                    {datum && <div className="text-xs text-slate-500">{datum}</div>}
                  </div>
                  {isVandaag && (
                    <span className="text-[10px] font-semibold bg-primary-600 text-white px-2 py-0.5 rounded-full">vandaag</span>
                  )}
                  <span className={`text-xs font-medium whitespace-nowrap ${klaar ? 'text-emerald-600' : 'text-slate-500'}`}>
                    {dagDone}/{d.taken.length}
                  </span>
                </div>
                <div className="p-2 space-y-1">
                  {d.taken.map((t) => {
                    const c = done.has(t.id)
                    return (
                      <button
                        key={t.id}
                        onClick={() => toggle(t.id)}
                        className={`w-full flex items-start gap-3 text-left rounded-lg p-2.5 transition ${
                          c ? 'bg-emerald-50' : 'hover:bg-slate-50'
                        }`}
                      >
                        <span className={`mt-0.5 w-5 h-5 shrink-0 rounded border flex items-center justify-center text-xs ${
                          c ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-400 text-transparent'
                        }`}>✓</span>
                        <span className="flex-1 min-w-0">
                          <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${TYPE_STYLE[t.type].chip}`}>
                            {TYPE_STYLE[t.type].label}
                          </span>
                          <span className={`block text-sm mt-1 ${c ? 'text-emerald-900 line-through decoration-emerald-400' : 'text-slate-800'}`}>
                            {t.tekst}
                          </span>
                        </span>
                      </button>
                    )
                  })}
                </div>
              </section>
            )
          })}
        </div>
      ))}

      <p className="text-xs text-slate-400 pt-1">
        Tip: raak je een dag achter, sla dan geen dag over maar schuif op — module B en C (voorin) zijn het belangrijkst.
      </p>
    </div>
  )
}
