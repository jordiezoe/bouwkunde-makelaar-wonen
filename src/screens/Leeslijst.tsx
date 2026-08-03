import { useEffect, useState } from 'react'
import type { Screen } from '../App'
import {
  leesModules,
  totaalHoofdstukken,
  type ModuleKey,
  type Niveau,
} from '../content/leeslijst'

interface Props {
  onNavigate: (s: Screen) => void
}

const KEY = 'bouwkunde-leeslijst-v1'
function load(): Set<string> {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) return new Set(JSON.parse(raw) as string[])
  } catch { /* ignore */ }
  return new Set()
}
function save(s: Set<string>) {
  try { localStorage.setItem(KEY, JSON.stringify([...s])) } catch { /* ignore */ }
}

const MODULE_COL: Record<ModuleKey, string> = {
  B: 'bg-blue-600',
  C: 'bg-emerald-600',
  D: 'bg-violet-600',
  A: 'bg-slate-600',
}
const NIVEAU_STYLE: Record<Niveau, string> = {
  BT1: 'bg-sky-100 text-sky-800',
  BT2: 'bg-amber-100 text-amber-800',
  'BT1+BT2': 'bg-slate-200 text-slate-700',
}

export function Leeslijst({ onNavigate }: Props) {
  const [gelezen, setGelezen] = useState<Set<string>>(() => load())

  useEffect(() => { save(gelezen) }, [gelezen])

  function toggle(nr: string) {
    setGelezen((prev) => {
      const next = new Set(prev)
      if (next.has(nr)) next.delete(nr)
      else next.add(nr)
      return next
    })
  }

  const totaalGelezen = gelezen.size
  const pct = Math.round((totaalGelezen / totaalHoofdstukken) * 100)

  return (
    <div className="space-y-6 max-w-3xl">
      <button onClick={() => onNavigate({ name: 'dashboard' })} className="text-sm text-primary-600 hover:underline">
        ← Terug naar dashboard
      </button>

      <header>
        <div className="text-xs font-mono text-primary-500">Leeslijst · samenvattingen</div>
        <h1 className="text-2xl font-bold text-primary-800">Leeslijst voor het examen</h1>
        <p className="text-slate-600 mt-1 text-sm">
          De samenvatting-hoofdstukken die je moet lezen voor Bouwkunde BT1+BT2, geordend per module op examengewicht.
          Vink af wat je gelezen hebt — dat blijft in deze browser bewaard.
        </p>
      </header>

      {/* Totale voortgang */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="font-medium text-slate-700">Totale voortgang</span>
          <span className="text-slate-700"><strong>{totaalGelezen}</strong> / {totaalHoofdstukken} gelezen · {pct}%</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
          <div className="bg-emerald-500 h-2.5 transition-all" style={{ width: `${pct}%` }} />
        </div>
        {totaalGelezen > 0 && (
          <button
            onClick={() => setGelezen(new Set())}
            className="mt-3 text-xs text-slate-400 hover:text-slate-600 hover:underline"
          >
            Alles opnieuw (vinkjes wissen)
          </button>
        )}
      </div>

      {leesModules.map((mod) => {
        const modGelezen = mod.hoofdstukken.filter((h) => gelezen.has(h.nr)).length
        const modKlaar = modGelezen === mod.hoofdstukken.length
        return (
          <section key={mod.key} className="space-y-2">
            <div className="flex items-center gap-2">
              <span className={`inline-flex items-center justify-center w-7 h-7 rounded-lg text-white font-bold text-sm ${MODULE_COL[mod.key]}`}>
                {mod.key}
              </span>
              <div className="flex-1 min-w-0">
                <h2 className="font-semibold text-primary-800 leading-tight">{mod.titel}</h2>
                <div className="text-xs text-slate-500">{mod.weging}</div>
              </div>
              <span className={`text-sm font-medium whitespace-nowrap ${modKlaar ? 'text-emerald-600' : 'text-slate-500'}`}>
                {modGelezen}/{mod.hoofdstukken.length}
              </span>
            </div>

            <div className="space-y-1.5">
              {mod.hoofdstukken.map((h) => {
                const done = gelezen.has(h.nr)
                return (
                  <button
                    key={h.nr}
                    onClick={() => toggle(h.nr)}
                    className={`w-full flex items-start gap-3 text-left rounded-lg border p-3 transition ${
                      done ? 'bg-emerald-50 border-emerald-300' : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <span className={`mt-0.5 w-5 h-5 shrink-0 rounded border flex items-center justify-center text-xs ${
                      done ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-400 text-transparent'
                    }`}>
                      ✓
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="flex items-center gap-2 flex-wrap">
                        <span className="font-mono text-xs text-slate-400">{h.nr}</span>
                        <span className={`font-medium text-sm ${done ? 'text-emerald-900 line-through decoration-emerald-400' : 'text-slate-800'}`}>
                          {h.titel}
                        </span>
                        <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${NIVEAU_STYLE[h.niveau]}`}>
                          {h.niveau}
                        </span>
                      </span>
                      <span className="block text-xs text-slate-500 mt-0.5">{h.dekt}</span>
                    </span>
                  </button>
                )
              })}
            </div>
          </section>
        )
      })}

      <p className="text-xs text-slate-400 pt-2">
        Weging afgeleid uit de twee officiële SVMNIVO-oefenexamens. BT1 = kennen/herkennen, BT2 = uitleggen/toepassen/analyseren.
      </p>
    </div>
  )
}
