import { useState } from 'react'
import type { Screen } from '../App'
import {
  materiaalCategorieen,
  materiaalFoto,
  materialen,
  type Materiaal,
  type MateriaalCategorie,
} from '../content/materialen'

interface Props {
  onNavigate: (s: Screen) => void
}

type Tab = 'lesstof' | 'oefenen'
type Filter = 'all' | MateriaalCategorie

function shuffle<T>(arr: T[]): T[] {
  return arr.map((x) => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map((y) => y.x)
}

const BEST_KEY = 'bouwkunde-materialen-best-v1'
function loadBest(): number {
  try { const r = localStorage.getItem(BEST_KEY); if (r) return Math.max(0, Math.min(100, Number(JSON.parse(r)))) } catch { /* */ }
  return 0
}
function saveBest(p: number) { try { localStorage.setItem(BEST_KEY, JSON.stringify(p)) } catch { /* */ } }

const CAT_STYLE: Record<MateriaalCategorie, string> = {
  Hout: 'bg-amber-100 text-amber-800',
  Plaatmateriaal: 'bg-orange-100 text-orange-800',
  Metaal: 'bg-slate-200 text-slate-700',
  Isolatie: 'bg-emerald-100 text-emerald-800',
  Natuursteen: 'bg-stone-200 text-stone-700',
}

export function MateriaalHerkennen({ onNavigate }: Props) {
  const [tab, setTab] = useState<Tab>('oefenen')

  return (
    <div className="space-y-6 max-w-3xl">
      <button onClick={() => onNavigate({ name: 'dashboard' })} className="text-sm text-primary-600 hover:underline">
        ← Terug naar dashboard
      </button>

      <header>
        <div className="text-xs font-mono text-primary-500">Materiaal herkennen</div>
        <h1 className="text-2xl font-bold text-primary-800">Materiaal herkennen</h1>
        <p className="text-slate-600 mt-1 text-sm">
          Leer bouwmaterialen herkennen op foto: houtsoorten, plaatmateriaal, metalen, isolatie en natuursteen.
        </p>
      </header>

      <div className="flex gap-2">
        <TabBtn active={tab === 'oefenen'} onClick={() => setTab('oefenen')}>✏️ Oefenen</TabBtn>
        <TabBtn active={tab === 'lesstof'} onClick={() => setTab('lesstof')}>🖼️ Overzicht</TabBtn>
      </div>

      {tab === 'oefenen' ? <Oefenen /> : <Overzicht />}
    </div>
  )
}

function TabBtn({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
        active ? 'bg-primary-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
      }`}
    >
      {children}
    </button>
  )
}

function Credit({ m }: { m: Materiaal }) {
  return (
    <a href={m.source} target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 hover:text-slate-600 hover:underline">
      Wikimedia Commons · {m.license}
    </a>
  )
}

// ─── Overzicht (gallery) ─────────────────────────────────────────────────────

function Overzicht() {
  return (
    <div className="space-y-8">
      {materiaalCategorieen.map((cat) => {
        const items = materialen.filter((m) => m.category === cat)
        if (items.length === 0) return null
        return (
          <section key={cat}>
            <h2 className="font-semibold text-primary-800 mb-3">
              {cat} <span className="text-slate-400 font-normal text-sm">· {items.length}</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {items.map((m) => (
                <figure key={m.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                  <img src={materiaalFoto(m.id)} alt={m.name} loading="lazy" className="w-full h-28 object-cover bg-slate-100" />
                  <figcaption className="p-2.5 space-y-1">
                    <div className="text-sm font-semibold text-slate-800 leading-tight">{m.name}</div>
                    <div className="text-xs text-slate-600 leading-snug">{m.hint}</div>
                    <Credit m={m} />
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}

// ─── Oefenen (quiz) ──────────────────────────────────────────────────────────

interface Vraag {
  m: Materiaal
  opties: string[]
  juist: number
}

/** Bouw quizvragen: per materiaal 3 afleiders uit dezelfde categorie (of anders aangevuld). */
function buildVragen(filter: Filter): Vraag[] {
  const pool = filter === 'all' ? materialen : materialen.filter((m) => m.category === filter)
  return shuffle(pool).map((m) => {
    const sameCat = materialen.filter((x) => x.category === m.category && x.id !== m.id)
    let distractors = shuffle(sameCat).slice(0, 3)
    if (distractors.length < 3) {
      const rest = shuffle(materialen.filter((x) => x.id !== m.id && !distractors.includes(x)))
      distractors = [...distractors, ...rest].slice(0, 3)
    }
    const opties = shuffle([m.name, ...distractors.map((d) => d.name)])
    return { m, opties, juist: opties.indexOf(m.name) }
  })
}

function Oefenen() {
  const [filter, setFilter] = useState<Filter>('all')
  const [order, setOrder] = useState<Vraag[]>(() => buildVragen('all'))
  const [idx, setIdx] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [correct, setCorrect] = useState(0)
  const [finished, setFinished] = useState(false)
  const [best, setBest] = useState<number>(() => loadBest())

  const total = order.length
  const q = order[idx]

  function applyFilter(f: Filter) {
    setFilter(f)
    setOrder(buildVragen(f))
    setIdx(0); setPicked(null); setCorrect(0); setFinished(false)
  }
  function handlePick(i: number) {
    if (picked !== null) return
    setPicked(i)
    if (i === q.juist) setCorrect((n) => n + 1)
  }
  function handleNext() {
    setPicked(null)
    if (idx < total - 1) { setIdx(idx + 1); return }
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0
    if (pct > best) { setBest(pct); saveBest(pct) }
    setFinished(true)
  }
  function handleRestart() {
    setOrder(buildVragen(filter))
    setIdx(0); setPicked(null); setCorrect(0); setFinished(false)
    window.scrollTo({ top: 0 })
  }

  const filters: Filter[] = ['all', ...materiaalCategorieen]

  const filterBar = (
    <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => applyFilter(f)}
          className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition ${
            filter === f ? 'bg-primary-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          {f === 'all' ? 'Alles' : f}
        </button>
      ))}
    </div>
  )

  if (finished) {
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0
    const geslaagd = pct >= 80
    return (
      <div className="space-y-4">
        {filterBar}
        <div className={`rounded-xl p-6 shadow-sm border ${geslaagd ? 'bg-emerald-50 border-emerald-300' : 'bg-amber-50 border-amber-300'}`}>
          <div className="text-4xl">{geslaagd ? '🎯' : '🔍'}</div>
          <h2 className={`text-2xl font-bold mt-2 ${geslaagd ? 'text-emerald-800' : 'text-amber-800'}`}>
            {correct} van {total} goed — {pct}%
          </h2>
          <p className={`text-sm mt-2 ${geslaagd ? 'text-emerald-700' : 'text-amber-700'}`}>
            {geslaagd ? 'Sterk! Je herkent de materialen goed.' : 'Bekijk het overzicht nog eens en let op kleur, korrel/nerf en structuur.'}
          </p>
          <p className="text-xs text-slate-500 mt-3">Beste resultaat tot nu toe: {best}%</p>
          <button onClick={handleRestart} className="mt-4 px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-semibold">
            Opnieuw oefenen →
          </button>
        </div>
      </div>
    )
  }

  if (!q) return <div className="text-slate-500">Geen materialen in deze filter.</div>

  return (
    <div className="space-y-5">
      {filterBar}

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
        <div className="flex items-center justify-between">
          <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${CAT_STYLE[q.m.category]}`}>{q.m.category}</span>
          <span className="text-xs uppercase tracking-wide text-slate-400">Welk materiaal is dit?</span>
        </div>

        <div className="rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
          <img src={materiaalFoto(q.m.id)} alt="materiaal" className="w-full h-56 sm:h-64 object-cover" />
        </div>

        <div className="grid sm:grid-cols-2 gap-2">
          {q.opties.map((opt, i) => {
            const isJuist = i === q.juist
            const isPicked = picked === i
            let style = 'bg-white border-slate-300 hover:bg-slate-50'
            if (picked !== null) {
              if (isJuist) style = 'bg-emerald-100 border-emerald-400 text-emerald-900'
              else if (isPicked) style = 'bg-rose-100 border-rose-400 text-rose-900'
              else style = 'bg-slate-100 border-slate-200 text-slate-400'
            }
            return (
              <button key={i} onClick={() => handlePick(i)} disabled={picked !== null}
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
                ? <span className="text-emerald-700 font-medium">✓ Correct — {q.m.name}</span>
                : <span className="text-rose-700 font-medium">✗ Juist: <strong>{q.m.name}</strong></span>}
            </div>
            <div className="text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-md px-3 py-2 leading-relaxed">
              {q.m.hint}
            </div>
            <div className="flex items-center justify-between">
              <Credit m={q.m} />
              <button onClick={handleNext} className="px-4 py-1.5 text-sm rounded-md bg-primary-600 hover:bg-primary-700 text-white font-medium">
                {idx < total - 1 ? 'Volgende →' : 'Bekijk resultaat →'}
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
