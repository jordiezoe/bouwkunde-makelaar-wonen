import { useState } from 'react'
import type { Screen } from '../App'
import {
  ezelsbruggetje,
  houtFoto,
  houtsoorten,
  type Groep,
} from '../content/houtsoorten'

interface Props {
  onNavigate: (s: Screen) => void
}

type Tab = 'leren' | 'oefenen'

function shuffle<T>(arr: T[]): T[] {
  return arr.map((x) => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map((y) => y.x)
}

const BEST_KEY = 'bouwkunde-houtsoorten-best-v1'
function loadBest(): number {
  try { const r = localStorage.getItem(BEST_KEY); if (r) return Math.max(0, Math.min(100, Number(JSON.parse(r)))) } catch { /* */ }
  return 0
}
function saveBest(p: number) { try { localStorage.setItem(BEST_KEY, JSON.stringify(p)) } catch { /* */ } }

function md(s: string) {
  const parts = s.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((p, i) =>
    p.startsWith('**') && p.endsWith('**') ? <strong key={i}>{p.slice(2, -2)}</strong> : <span key={i}>{p}</span>)
}

export function Houtsoorten({ onNavigate }: Props) {
  const [tab, setTab] = useState<Tab>('leren')
  return (
    <div className="space-y-6 max-w-3xl">
      <button onClick={() => onNavigate({ name: 'dashboard' })} className="text-sm text-primary-600 hover:underline">
        ← Terug naar dashboard
      </button>
      <header>
        <div className="text-xs font-mono text-primary-500">Houtsoorten · B.9</div>
        <h1 className="text-2xl font-bold text-primary-800">Houtsoorten</h1>
        <p className="text-slate-600 mt-1 text-sm">
          Leer de houtsoorten herkennen: loof- vs naaldhout, kenmerken, toepassing en herkennen op foto.
        </p>
      </header>
      <div className="flex gap-2">
        <TabBtn active={tab === 'leren'} onClick={() => setTab('leren')}>📚 Leren</TabBtn>
        <TabBtn active={tab === 'oefenen'} onClick={() => setTab('oefenen')}>✏️ Oefenen</TabBtn>
      </div>
      {tab === 'leren' ? <Leren /> : <Oefenen />}
    </div>
  )
}

function TabBtn({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition ${active ? 'bg-primary-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
      {children}
    </button>
  )
}

// ─── Leren ───────────────────────────────────────────────────────────────────

function Leren() {
  const groepen: Groep[] = ['Naaldhout', 'Loofhout']
  return (
    <div className="space-y-6">
      {/* Ezelsbruggetje */}
      <section className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-5">
        <h2 className="font-semibold text-amber-900 mb-2">🫏 {ezelsbruggetje.titel}</h2>
        <ul className="space-y-1.5">
          {ezelsbruggetje.regels.map((r, i) => (
            <li key={i} className="flex gap-2 text-sm text-amber-900 leading-relaxed">
              <span className="text-amber-500 mt-0.5">•</span><span>{md(r)}</span>
            </li>
          ))}
        </ul>
      </section>

      {groepen.map((g) => {
        const items = houtsoorten.filter((h) => h.groep === g)
        return (
          <section key={g}>
            <h2 className="font-semibold text-primary-800 mb-3">
              {g} <span className="text-slate-400 font-normal text-sm">· {g === 'Naaldhout' ? 'zachthout' : 'hardhout'} · {items.length}</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {items.map((h) => (
                <div key={h.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                  {h.foto
                    ? <img src={houtFoto(h.foto)} alt={h.naam} loading="lazy" className="w-full h-28 object-cover bg-slate-100" />
                    : <div className="w-full h-28 bg-slate-100 flex items-center justify-center text-slate-400 text-xs">geen foto</div>}
                  <div className="p-3 space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-slate-800 text-sm">{h.naam}</span>
                      {h.herkomst && <span className="text-[10px] text-slate-400">{h.herkomst}</span>}
                    </div>
                    <p className="text-xs text-slate-600 leading-snug">{h.kenmerk}</p>
                    <p className="text-xs text-slate-500 leading-snug"><span className="text-slate-400">Toepassing:</span> {h.toepassing}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}

// ─── Oefenen ─────────────────────────────────────────────────────────────────

interface Vraag {
  soort: 'foto' | 'groep' | 'toepassing' | 'kenmerk'
  foto?: string
  vraag: string
  opties: string[]
  juist: number
  uitleg: string
}

function opts4(correct: string, pool: string[]): { opties: string[]; juist: number } {
  const distractors = shuffle(pool.filter((p) => p !== correct)).slice(0, 3)
  const opties = shuffle([correct, ...distractors])
  return { opties, juist: opties.indexOf(correct) }
}

function bouwVragen(): Vraag[] {
  const namen = houtsoorten.map((h) => h.naam)
  const vragen: Vraag[] = []

  // 1. Foto-herkenning (voor soorten met foto) — afleiders liefst zelfde groep
  for (const h of houtsoorten.filter((x) => x.foto)) {
    const zelfdeGroep = houtsoorten.filter((x) => x.groep === h.groep).map((x) => x.naam)
    const { opties, juist } = opts4(h.naam, zelfdeGroep.length >= 4 ? zelfdeGroep : namen)
    vragen.push({ soort: 'foto', foto: h.foto, vraag: 'Welke houtsoort zie je hier?', opties, juist,
      uitleg: `${h.naam} — ${h.kenmerk} (${h.groep.toLowerCase()})` })
  }

  // 2. Loof of naald
  for (const h of shuffle(houtsoorten).slice(0, 6)) {
    const opties = ['Naaldhout (zachthout)', 'Loofhout (hardhout)']
    const juist = h.groep === 'Naaldhout' ? 0 : 1
    vragen.push({ soort: 'groep', vraag: `Is ${h.naam} loof- of naaldhout?`, opties, juist,
      uitleg: `${h.naam} is ${h.groep.toLowerCase()} (${h.hardheid}hout).` })
  }

  // 3. Toepassing
  for (const h of shuffle(houtsoorten).slice(0, 5)) {
    const { opties, juist } = opts4(h.toepassing, houtsoorten.map((x) => x.toepassing))
    vragen.push({ soort: 'toepassing', vraag: `Waarvoor wordt ${h.naam} vooral gebruikt?`, opties, juist,
      uitleg: `${h.naam}: ${h.toepassing}` })
  }

  // 4. Kenmerk → welke soort
  for (const h of shuffle(houtsoorten).slice(0, 5)) {
    const { opties, juist } = opts4(h.naam, namen)
    vragen.push({ soort: 'kenmerk', vraag: `Welke houtsoort past bij: “${h.kenmerk}”`, opties, juist,
      uitleg: `${h.naam} — ${h.toepassing}` })
  }

  return shuffle(vragen)
}

function Oefenen() {
  const [order, setOrder] = useState<Vraag[]>(() => bouwVragen())
  const [idx, setIdx] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [correct, setCorrect] = useState(0)
  const [finished, setFinished] = useState(false)
  const [best, setBest] = useState<number>(() => loadBest())

  const total = order.length
  const q = order[idx]

  function pick(i: number) {
    if (picked !== null) return
    setPicked(i)
    if (i === q.juist) setCorrect((n) => n + 1)
  }
  function next() {
    setPicked(null)
    if (idx < total - 1) { setIdx(idx + 1); return }
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0
    if (pct > best) { setBest(pct); saveBest(pct) }
    setFinished(true)
  }
  function restart() {
    setOrder(bouwVragen()); setIdx(0); setPicked(null); setCorrect(0); setFinished(false)
    window.scrollTo({ top: 0 })
  }

  if (finished) {
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0
    const ok = pct >= 80
    return (
      <div className={`rounded-xl p-6 shadow-sm border ${ok ? 'bg-emerald-50 border-emerald-300' : 'bg-amber-50 border-amber-300'}`}>
        <div className="text-4xl">{ok ? '🌳' : '🪵'}</div>
        <h2 className={`text-2xl font-bold mt-2 ${ok ? 'text-emerald-800' : 'text-amber-800'}`}>{correct} van {total} goed — {pct}%</h2>
        <p className={`text-sm mt-2 ${ok ? 'text-emerald-700' : 'text-amber-700'}`}>
          {ok ? 'Sterk! Je herkent de houtsoorten goed.' : 'Bekijk het overzicht nog eens — let op kleur, kwasten (naald) en nerf/spiegels (loof).'}
        </p>
        <p className="text-xs text-slate-500 mt-3">Beste resultaat tot nu toe: {best}%</p>
        <button onClick={restart} className="mt-4 px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-semibold">Opnieuw oefenen →</button>
      </div>
    )
  }
  if (!q) return <div className="text-slate-500">Geen vragen.</div>

  return (
    <div className="space-y-4">
      <div className="bg-slate-100 border border-slate-200 rounded-lg p-3">
        <div className="flex items-center justify-between text-sm mb-1.5">
          <span className="text-slate-700 font-medium">Vraag {idx + 1} van {total}</span>
          <span className="text-slate-700">{correct} goed</span>
        </div>
        <div className="w-full bg-slate-300 rounded-full h-2 overflow-hidden">
          <div className="bg-primary-500 h-2 transition-all" style={{ width: `${(idx / total) * 100}%` }} />
        </div>
      </div>

      <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200 space-y-4">
        {q.foto && (
          <div className="rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
            <img src={houtFoto(q.foto)} alt="houtsoort" className="w-full h-56 sm:h-64 object-cover" />
          </div>
        )}
        <div className="text-base text-slate-800 font-medium leading-relaxed">{q.vraag}</div>
        <div className="grid sm:grid-cols-2 gap-2">
          {q.opties.map((opt, i) => {
            const juist = i === q.juist, isP = picked === i
            let style = 'bg-white border-slate-300 hover:bg-slate-50'
            if (picked !== null) {
              if (juist) style = 'bg-emerald-100 border-emerald-400 text-emerald-900'
              else if (isP) style = 'bg-rose-100 border-rose-400 text-rose-900'
              else style = 'bg-slate-100 border-slate-200 text-slate-400'
            }
            return (
              <button key={i} onClick={() => pick(i)} disabled={picked !== null}
                className={`w-full text-left px-4 py-2.5 rounded-md border text-sm transition ${style}`}>
                {opt}
              </button>
            )
          })}
        </div>
        {picked !== null && (
          <div className="pt-3 border-t space-y-2">
            <div className="text-sm">
              {picked === q.juist
                ? <span className="text-emerald-700 font-medium">✓ Correct</span>
                : <span className="text-rose-700 font-medium">✗ Juist: <strong>{q.opties[q.juist]}</strong></span>}
            </div>
            <div className="text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-md px-3 py-2 leading-relaxed">{q.uitleg}</div>
            <button onClick={next} className="px-4 py-1.5 text-sm rounded-md bg-primary-600 hover:bg-primary-700 text-white font-medium">
              {idx < total - 1 ? 'Volgende →' : 'Bekijk resultaat →'}
            </button>
          </div>
        )}
      </section>
    </div>
  )
}
