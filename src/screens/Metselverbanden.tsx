import { useState } from 'react'
import type { Screen } from '../App'
import { Verband } from '../components/Diagrams'
import {
  steenstukken,
  verbanden,
  verbandVragen,
  voegen,
  wildVerband,
  type VerbandVraag,
  type VerbandVraagCat,
} from '../content/metselverbanden'

interface Props {
  onNavigate: (s: Screen) => void
}

type Tab = 'lesstof' | 'oefenen'

function shuffle<T>(arr: T[]): T[] {
  return arr.map((x) => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map((y) => y.x)
}

const BEST_KEY = 'bouwkunde-metselverbanden-best-v1'
function loadBest(): number {
  try {
    const raw = localStorage.getItem(BEST_KEY)
    if (raw) return Math.max(0, Math.min(100, Number(JSON.parse(raw))))
  } catch { /* ignore */ }
  return 0
}
function saveBest(pct: number) {
  try { localStorage.setItem(BEST_KEY, JSON.stringify(pct)) } catch { /* ignore */ }
}

const CAT_STYLE: Record<VerbandVraagCat, string> = {
  Herkennen: 'bg-orange-100 text-orange-800',
  Periode: 'bg-amber-100 text-amber-800',
  Kenmerk: 'bg-sky-100 text-sky-800',
  Steenstuk: 'bg-emerald-100 text-emerald-800',
  Voeg: 'bg-violet-100 text-violet-800',
}

export function Metselverbanden({ onNavigate }: Props) {
  const [tab, setTab] = useState<Tab>('lesstof')

  return (
    <div className="space-y-6 max-w-3xl">
      <button onClick={() => onNavigate({ name: 'dashboard' })} className="text-sm text-primary-600 hover:underline">
        ← Terug naar dashboard
      </button>

      <header>
        <div className="text-xs font-mono text-primary-500">Metselverbanden · B.5</div>
        <h1 className="text-2xl font-bold text-primary-800">Metselverbanden</h1>
        <p className="text-slate-600 mt-1 text-sm">
          Leer de metselverbanden herkennen en weet welk verband bij welke periode hoort.
        </p>
      </header>

      {/* Tabs */}
      <div className="flex gap-2">
        <TabButton active={tab === 'lesstof'} onClick={() => setTab('lesstof')}>📖 Lesstof</TabButton>
        <TabButton active={tab === 'oefenen'} onClick={() => setTab('oefenen')}>✏️ Oefenen</TabButton>
      </div>

      {tab === 'lesstof' ? <Lesstof /> : <Oefenen />}
    </div>
  )
}

function TabButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
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

// ─── Lesstof ─────────────────────────────────────────────────────────────────

function Lesstof() {
  return (
    <div className="space-y-6">
      <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200 space-y-3">
        <h2 className="font-semibold text-primary-800">Wat is een metselverband?</h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          Een <strong>metselverband</strong> is het patroon waarin de stenen liggen, zó dat de
          verticale <em>stootvoegen</em> niet doorlopen. Zouden ze wél doorlopen, dan werkt de muur
          als losse kolommen in plaats van als één geheel. Het verband dat is gekozen, verraadt vaak
          de <strong>bouwperiode</strong>: van eeuwenoud kruisverband tot het naoorlogse wilde verband.
        </p>
        {/* Steenstukken */}
        <div className="pt-1">
          <h3 className="text-xs uppercase tracking-wide text-slate-500 font-semibold mb-2">Steenstukken (de bouwstenen van een verband)</h3>
          <div className="grid sm:grid-cols-2 gap-2">
            {steenstukken.map((s) => (
              <div key={s.naam} className="border-l-4 border-emerald-300 bg-slate-50 rounded-r-md px-3 py-1.5">
                <span className="text-sm font-semibold text-slate-800">{s.naam}</span>
                <span className="text-sm text-slate-600"> — {s.uitleg}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* De zes verbanden met tekening */}
      <section className="space-y-4">
        <h2 className="font-semibold text-primary-800">De verbanden</h2>
        {verbanden.map((v) => (
          <div key={v.key} className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-slate-200 grid sm:grid-cols-2 gap-4 items-start">
            <div className="max-w-xs">
              <Verband name={v.key} />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-semibold text-primary-700">
                {v.naam}
                {v.ookWel && <span className="text-slate-400 font-normal text-sm"> (ook wel {v.ookWel})</span>}
              </h3>
              <p className="text-sm text-slate-700"><span className="text-slate-500">Patroon:</span> {v.patroon}</p>
              <p className="text-sm text-slate-700"><span className="text-slate-500">Herkennen:</span> {v.herkenning}</p>
              <p className="text-sm text-amber-800 bg-amber-50 border border-amber-200 rounded px-2 py-1">
                <span className="font-medium">Periode:</span> {v.periode}
              </p>
            </div>
          </div>
        ))}

        {/* Wild verband (geen tekening) */}
        <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-dashed border-slate-300 space-y-1.5">
          <h3 className="font-semibold text-primary-700">{wildVerband.naam}</h3>
          <p className="text-sm text-slate-700"><span className="text-slate-500">Patroon:</span> {wildVerband.patroon}</p>
          <p className="text-sm text-slate-700"><span className="text-slate-500">Herkennen:</span> {wildVerband.herkenning}</p>
          <p className="text-sm text-amber-800 bg-amber-50 border border-amber-200 rounded px-2 py-1">
            <span className="font-medium">Periode:</span> {wildVerband.periode}
          </p>
        </div>
      </section>

      {/* Periode-tabel */}
      <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200">
        <h2 className="font-semibold text-primary-800 mb-3">Verband → periode in één oogopslag</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-left text-slate-500 border-b border-slate-200">
                <th className="py-2 pr-4 font-medium">Verband</th>
                <th className="py-2 font-medium">Typische periode / gebruik</th>
              </tr>
            </thead>
            <tbody>
              {verbanden.map((v) => (
                <tr key={v.key} className="border-b border-slate-100 align-top">
                  <td className="py-2 pr-4 font-medium text-slate-800 whitespace-nowrap">{v.naam}</td>
                  <td className="py-2 text-slate-600">{v.periode}</td>
                </tr>
              ))}
              <tr className="align-top">
                <td className="py-2 pr-4 font-medium text-slate-800 whitespace-nowrap">{wildVerband.naam}</td>
                <td className="py-2 text-slate-600">{wildVerband.periode}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Voegen */}
      <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200">
        <h2 className="font-semibold text-primary-800 mb-1">Voegtypen — extra dateringshulp</h2>
        <p className="text-sm text-slate-600 mb-3">Het voegtype helpt, samen met het verband, om een gevel te dateren.</p>
        <div className="grid sm:grid-cols-2 gap-2">
          {voegen.map((vg) => (
            <div key={vg.naam} className="border-l-4 border-violet-300 bg-slate-50 rounded-r-md px-3 py-1.5">
              <span className="text-sm font-semibold text-slate-800">{vg.naam}</span>
              <span className="text-sm text-slate-600"> — {vg.kenmerk}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

// ─── Oefenen ─────────────────────────────────────────────────────────────────

function Oefenen() {
  const [order, setOrder] = useState<VerbandVraag[]>(() => shuffle(verbandVragen))
  const [idx, setIdx] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [correct, setCorrect] = useState(0)
  const [finished, setFinished] = useState(false)
  const [best, setBest] = useState<number>(() => loadBest())

  const total = order.length
  const q: VerbandVraag = order[idx]

  function handlePick(i: number) {
    if (picked !== null) return
    setPicked(i)
    if (i === q.juist) setCorrect((n) => n + 1)
  }

  function handleNext() {
    setPicked(null)
    if (idx < total - 1) {
      setIdx(idx + 1)
    } else {
      const pct = total > 0 ? Math.round((correct / total) * 100) : 0
      if (pct > best) { setBest(pct); saveBest(pct) }
      setFinished(true)
    }
  }

  function handleRestart() {
    setOrder(shuffle(verbandVragen))
    setIdx(0); setPicked(null); setCorrect(0); setFinished(false)
    window.scrollTo({ top: 0 })
  }

  if (finished) {
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0
    const geslaagd = pct >= 80
    return (
      <div className={`rounded-xl p-6 shadow-sm border ${geslaagd ? 'bg-emerald-50 border-emerald-300' : 'bg-amber-50 border-amber-300'}`}>
        <div className="text-4xl">{geslaagd ? '🧱' : '🔍'}</div>
        <h2 className={`text-2xl font-bold mt-2 ${geslaagd ? 'text-emerald-800' : 'text-amber-800'}`}>
          {correct} van {total} goed — {pct}%
        </h2>
        <p className={`text-sm mt-2 ${geslaagd ? 'text-emerald-700' : 'text-amber-700'}`}>
          {geslaagd
            ? 'Sterk! Je herkent de verbanden en weet bij welke periode ze horen.'
            : 'Bekijk de lesstof nog eens en let op de "staande tand" (klezoren) en of de strekken verspringen (kruis) of recht boven elkaar liggen (staand).'}
        </p>
        <p className="text-xs text-slate-500 mt-3">Beste resultaat tot nu toe: {best}%</p>
        <button onClick={handleRestart} className="mt-4 px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-semibold">
          Opnieuw oefenen →
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-5">
      {/* Voortgang */}
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
        <span className={`inline-block text-[11px] font-semibold px-2 py-0.5 rounded-full ${CAT_STYLE[q.categorie]}`}>
          {q.categorie}
        </span>

        {q.toonVerband && (
          <div className="max-w-xs mx-auto sm:mx-0">
            <Verband name={q.toonVerband} />
          </div>
        )}

        <div className="text-base text-slate-800 font-medium leading-relaxed">{q.vraag}</div>

        <div className="space-y-2">
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
              <button
                key={i}
                onClick={() => handlePick(i)}
                disabled={picked !== null}
                className={`w-full text-left px-4 py-2.5 rounded-md border text-sm transition ${style}`}
              >
                {opt}
              </button>
            )
          })}
        </div>

        {picked !== null && (
          <div className="pt-3 border-t space-y-3">
            <div className="text-sm">
              {picked === q.juist ? (
                <span className="text-emerald-700 font-medium">✓ Correct!</span>
              ) : (
                <span className="text-rose-700 font-medium">✗ Juiste antwoord: <strong>{q.opties[q.juist]}</strong></span>
              )}
            </div>
            <div className="text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-md px-3 py-2 leading-relaxed">
              {q.uitleg}
            </div>
            <button onClick={handleNext} className="px-4 py-1.5 text-sm rounded-md bg-primary-600 hover:bg-primary-700 text-white font-medium">
              {idx < total - 1 ? 'Volgende →' : 'Bekijk resultaat →'}
            </button>
          </div>
        )}
      </section>
    </div>
  )
}
