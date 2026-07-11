import { useMemo, useState } from 'react'
import type { Screen } from '../App'
import {
  BLOK_LABEL,
  examenVragen,
  onderwerpen,
  type Blok,
  type Onderwerp,
  type Vraag,
} from '../content/bt1foutentraining'

interface Props {
  onNavigate: (s: Screen) => void
}

type Tab = 'leren' | 'examen'

function shuffle<T>(arr: T[]): T[] {
  return arr.map((x) => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map((y) => y.x)
}

const BEST_KEY = 'bouwkunde-bt1fouten-best-v1'
function loadBest(): number {
  try { const r = localStorage.getItem(BEST_KEY); if (r) return Math.max(0, Math.min(100, Number(JSON.parse(r)))) } catch { /* */ }
  return 0
}
function saveBest(p: number) { try { localStorage.setItem(BEST_KEY, JSON.stringify(p)) } catch { /* */ } }

const BLOK_STYLE: Record<Blok, string> = {
  B: 'bg-blue-100 text-blue-800',
  A: 'bg-slate-200 text-slate-700',
  D: 'bg-violet-100 text-violet-800',
  C: 'bg-emerald-100 text-emerald-800',
}

// mdlite: **vet** → <strong>
function mdlite(s: string) {
  const parts = s.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((p, i) =>
    p.startsWith('**') && p.endsWith('**')
      ? <strong key={i}>{p.slice(2, -2)}</strong>
      : <span key={i}>{p}</span>,
  )
}

export function Bt1FoutenTraining({ onNavigate }: Props) {
  const [tab, setTab] = useState<Tab>('leren')

  return (
    <div className="space-y-6 max-w-3xl">
      <button onClick={() => onNavigate({ name: 'dashboard' })} className="text-sm text-primary-600 hover:underline">
        ← Terug naar dashboard
      </button>

      <header>
        <div className="text-xs font-mono text-primary-500">BT1 · Fouten trainen</div>
        <h1 className="text-2xl font-bold text-primary-800">BT1 — Fouten trainen</h1>
        <p className="text-slate-600 mt-1 text-sm">
          Leer de 12 onderwerpen waar het in je oefenexamen misging — en sluit af met een examen in dezelfde stijl.
        </p>
      </header>

      <div className="flex gap-2">
        <TabBtn active={tab === 'leren'} onClick={() => setTab('leren')}>📚 Leren</TabBtn>
        <TabBtn active={tab === 'examen'} onClick={() => setTab('examen')}>🎓 Afsluitend examen</TabBtn>
      </div>

      {tab === 'leren' ? <Leren /> : <Examen />}
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

// ─── Leren ───────────────────────────────────────────────────────────────────

function Leren() {
  const [openId, setOpenId] = useState<string | null>(null)
  const actief = onderwerpen.find((o) => o.id === openId) || null

  if (actief) {
    return <OnderwerpView onderwerp={actief} onBack={() => setOpenId(null)} />
  }

  return (
    <div className="space-y-3">
      <p className="text-sm text-slate-500">Kies een onderwerp om de lesstof te lezen en te oefenen:</p>
      <div className="grid sm:grid-cols-2 gap-3">
        {onderwerpen.map((o) => (
          <button
            key={o.id}
            onClick={() => setOpenId(o.id)}
            className="text-left bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-primary-300 transition p-4"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${BLOK_STYLE[o.blok]}`}>{o.blok}</span>
              <span className="text-[11px] text-slate-400">{BLOK_LABEL[o.blok]}</span>
            </div>
            <div className="font-semibold text-primary-800 text-sm leading-tight">{o.titel}</div>
            <div className="text-xs text-slate-500 mt-1">{o.vragen.length} oefenvragen</div>
          </button>
        ))}
      </div>
    </div>
  )
}

function OnderwerpView({ onderwerp, onBack }: { onderwerp: Onderwerp; onBack: () => void }) {
  const [oefenen, setOefenen] = useState(false)

  return (
    <div className="space-y-5">
      <button onClick={onBack} className="text-sm text-primary-600 hover:underline">← Alle onderwerpen</button>

      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${BLOK_STYLE[onderwerp.blok]}`}>{onderwerp.blok}</span>
          <span className="text-[11px] text-slate-400">{onderwerp.bron}</span>
        </div>
        <h2 className="text-xl font-bold text-primary-800">{onderwerp.titel}</h2>
      </div>

      {/* Lesstof */}
      <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200">
        <h3 className="text-xs uppercase tracking-wide text-slate-500 font-semibold mb-3">Lesstof — kernpunten</h3>
        <ul className="space-y-2.5">
          {onderwerp.kernpunten.map((k, i) => (
            <li key={i} className="flex gap-2 text-sm text-slate-700 leading-relaxed">
              <span className="text-primary-400 mt-0.5">•</span>
              <span>{mdlite(k)}</span>
            </li>
          ))}
        </ul>
      </section>

      {!oefenen ? (
        <button
          onClick={() => setOefenen(true)}
          className="px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-semibold"
        >
          Oefenen ({onderwerp.vragen.length} vragen) →
        </button>
      ) : (
        <VraagReeks vragen={onderwerp.vragen} titel="Oefenvragen" />
      )}
    </div>
  )
}

// ─── Examen ──────────────────────────────────────────────────────────────────

function Examen() {
  const [gestart, setGestart] = useState(false)
  const [best, setBest] = useState<number>(() => loadBest())
  // Vragen in examenvolgorde (B, A, D, C blijft behouden; binnen blok geschud).
  const vragen = useMemo(() => {
    const perBlok: Record<Blok, Vraag[]> = { B: [], A: [], D: [], C: [] }
    for (const ev of examenVragen) perBlok[ev.blok].push(ev.vraag)
    return (['B', 'A', 'D', 'C'] as Blok[]).flatMap((b) => shuffle(perBlok[b]))
  }, [gestart])

  if (!gestart) {
    const perBlok = (['B', 'A', 'D', 'C'] as Blok[]).map((b) => ({
      b, n: examenVragen.filter((e) => e.blok === b).length,
    }))
    return (
      <div className="space-y-4">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 space-y-3">
          <h2 className="font-semibold text-primary-800">Afsluitend examen</h2>
          <p className="text-sm text-slate-600">
            {examenVragen.length} vragen in de examenstijl (meerkeuze, aankruisen, invul-dropdowns en sleepvragen),
            in de volgorde van de blokken zoals bij SVMNIVO:
          </p>
          <ul className="text-sm text-slate-700 space-y-1">
            {perBlok.map(({ b, n }) => (
              <li key={b} className="flex items-center gap-2">
                <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${BLOK_STYLE[b]}`}>{b}</span>
                {BLOK_LABEL[b]} — {n} vragen
              </li>
            ))}
          </ul>
          <p className="text-xs text-slate-500">Beste resultaat tot nu toe: {best}%</p>
        </div>
        <button onClick={() => setGestart(true)} className="px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-semibold">
          Start examen →
        </button>
      </div>
    )
  }

  return (
    <VraagReeks
      vragen={vragen}
      titel="Examen"
      examen
      onKlaar={(pct) => { if (pct > best) { setBest(pct); saveBest(pct) } }}
      onOpnieuw={() => setGestart(false)}
    />
  )
}

// ─── Vraagreeks (oefen + examen) ─────────────────────────────────────────────

function VraagReeks({
  vragen, titel, examen, onKlaar, onOpnieuw,
}: {
  vragen: Vraag[]
  titel: string
  examen?: boolean
  onKlaar?: (pct: number) => void
  onOpnieuw?: () => void
}) {
  const [idx, setIdx] = useState(0)
  const [goed, setGoed] = useState(0)
  const [beantwoord, setBeantwoord] = useState(false)
  const [klaar, setKlaar] = useState(false)

  const total = vragen.length
  const vraag = vragen[idx]

  function handleResult(correct: boolean) {
    setBeantwoord(true)
    if (correct) setGoed((n) => n + 1)
  }
  function next() {
    setBeantwoord(false)
    if (idx < total - 1) {
      setIdx(idx + 1)
    } else {
      const pct = total > 0 ? Math.round((goed / total) * 100) : 0
      onKlaar?.(pct)
      setKlaar(true)
    }
  }

  if (klaar) {
    const pct = total > 0 ? Math.round((goed / total) * 100) : 0
    const geslaagd = pct >= 80
    return (
      <div className={`rounded-xl p-6 shadow-sm border ${geslaagd ? 'bg-emerald-50 border-emerald-300' : 'bg-amber-50 border-amber-300'}`}>
        <div className="text-4xl">{geslaagd ? '🎉' : '💪'}</div>
        <h2 className={`text-2xl font-bold mt-2 ${geslaagd ? 'text-emerald-800' : 'text-amber-800'}`}>
          {goed} van {total} goed — {pct}%
        </h2>
        <p className={`text-sm mt-2 ${geslaagd ? 'text-emerald-700' : 'text-amber-700'}`}>
          {geslaagd ? 'Ruim boven de 80%-grens — sterk!' : 'Onder de 80%. Bekijk de lesstof van de gemiste onderwerpen nog eens en probeer opnieuw.'}
        </p>
        {onOpnieuw && (
          <button onClick={onOpnieuw} className="mt-4 px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-semibold">
            Opnieuw →
          </button>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="bg-slate-100 border border-slate-200 rounded-lg p-3">
        <div className="flex items-center justify-between text-sm mb-1.5">
          <span className="text-slate-700 font-medium">{titel} — vraag {idx + 1} van {total}</span>
          <span className="text-slate-700">{goed} goed</span>
        </div>
        <div className="w-full bg-slate-300 rounded-full h-2 overflow-hidden">
          <div className="bg-primary-500 h-2 transition-all" style={{ width: `${(idx / total) * 100}%` }} />
        </div>
      </div>

      <VraagView key={idx} vraag={vraag} onResult={handleResult} examen={examen} />

      {beantwoord && (
        <button onClick={next} className="px-4 py-2 text-sm rounded-md bg-primary-600 hover:bg-primary-700 text-white font-medium">
          {idx < total - 1 ? 'Volgende →' : 'Bekijk resultaat →'}
        </button>
      )}
    </div>
  )
}

// ─── VraagView — rendert één vraag van elk type ──────────────────────────────

function VraagView({ vraag, onResult, examen }: { vraag: Vraag; onResult: (c: boolean) => void; examen?: boolean }) {
  const [submitted, setSubmitted] = useState(false)
  // state per type
  const [mcSel, setMcSel] = useState<number | null>(null)
  const [multiSel, setMultiSel] = useState<number[]>([])
  const [invulSel, setInvulSel] = useState<Record<number, number>>({})
  const [sleepSel, setSleepSel] = useState<Record<number, number>>({})

  const invulSlots = vraag.type === 'invul'
    ? vraag.delen.map((d, i) => (typeof d === 'string' ? null : i)).filter((i) => i !== null) as number[]
    : []

  const canCheck = (() => {
    if (submitted) return false
    switch (vraag.type) {
      case 'mc': return mcSel !== null
      case 'multi': return multiSel.length > 0
      case 'invul': return invulSlots.every((i) => invulSel[i] !== undefined)
      case 'sleep': return vraag.items.every((_, i) => sleepSel[i] !== undefined)
    }
  })()

  function check() {
    let correct = false
    switch (vraag.type) {
      case 'mc': correct = mcSel === vraag.juist; break
      case 'multi': {
        const a = [...multiSel].sort().join(',')
        const b = [...vraag.juist].sort().join(',')
        correct = a === b; break
      }
      case 'invul':
        correct = invulSlots.every((i) => {
          const deel = vraag.delen[i]
          return typeof deel !== 'string' && invulSel[i] === deel.juist
        }); break
      case 'sleep':
        correct = vraag.items.every((it, i) => sleepSel[i] === it.cat); break
    }
    setSubmitted(true)
    onResult(correct)
  }

  return (
    <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200 space-y-4">
      {'scenario' in vraag && vraag.scenario && (
        <div className="text-sm text-slate-700 bg-slate-50 border-l-4 border-primary-300 rounded-r-md px-3 py-2 italic">
          {vraag.scenario}
        </div>
      )}

      {vraag.type === 'invul'
        ? <InvulBody vraag={vraag} sel={invulSel} setSel={setInvulSel} submitted={submitted} />
        : <div className="text-base text-slate-800 font-medium leading-relaxed">{vraag.vraag}</div>}

      {vraag.type === 'mc' && (
        <McBody vraag={vraag} sel={mcSel} setSel={setMcSel} submitted={submitted} />
      )}
      {vraag.type === 'multi' && (
        <MultiBody vraag={vraag} sel={multiSel} setSel={setMultiSel} submitted={submitted} />
      )}
      {vraag.type === 'sleep' && (
        <SleepBody vraag={vraag} sel={sleepSel} setSel={setSleepSel} submitted={submitted} />
      )}

      {!submitted ? (
        <button
          onClick={check}
          disabled={!canCheck}
          className={`px-4 py-2 text-sm rounded-md font-medium ${canCheck ? 'bg-primary-600 hover:bg-primary-700 text-white' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
        >
          Controleer
        </button>
      ) : (
        !examen && <Uitleg vraag={vraag} />
      )}
      {submitted && examen && <Uitleg vraag={vraag} />}
    </section>
  )
}

function Uitleg({ vraag }: { vraag: Vraag }) {
  return (
    <div className="text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-md px-3 py-2 leading-relaxed">
      {vraag.uitleg}
    </div>
  )
}

// mc
function McBody({ vraag, sel, setSel, submitted }: { vraag: Extract<Vraag, { type: 'mc' }>; sel: number | null; setSel: (n: number) => void; submitted: boolean }) {
  return (
    <div className="space-y-2">
      {vraag.opties.map((opt, i) => {
        let style = 'bg-white border-slate-300 hover:bg-slate-50'
        if (submitted) {
          if (i === vraag.juist) style = 'bg-emerald-100 border-emerald-400 text-emerald-900'
          else if (i === sel) style = 'bg-rose-100 border-rose-400 text-rose-900'
          else style = 'bg-slate-50 border-slate-200 text-slate-400'
        } else if (i === sel) style = 'bg-primary-50 border-primary-400'
        return (
          <button key={i} onClick={() => !submitted && setSel(i)} disabled={submitted}
            className={`w-full text-left px-4 py-2.5 rounded-md border text-sm transition ${style}`}>
            {opt}
          </button>
        )
      })}
    </div>
  )
}

// multi (aankruisen)
function MultiBody({ vraag, sel, setSel, submitted }: { vraag: Extract<Vraag, { type: 'multi' }>; sel: number[]; setSel: (n: number[]) => void; submitted: boolean }) {
  function toggle(i: number) {
    if (submitted) return
    setSel(sel.includes(i) ? sel.filter((x) => x !== i) : [...sel, i])
  }
  return (
    <div className="space-y-2">
      <div className="text-xs text-slate-400">Meerdere antwoorden mogelijk</div>
      {vraag.opties.map((opt, i) => {
        const checked = sel.includes(i)
        const juist = vraag.juist.includes(i)
        let style = 'bg-white border-slate-300 hover:bg-slate-50'
        if (submitted) {
          if (juist) style = 'bg-emerald-100 border-emerald-400 text-emerald-900'
          else if (checked) style = 'bg-rose-100 border-rose-400 text-rose-900'
          else style = 'bg-slate-50 border-slate-200 text-slate-400'
        } else if (checked) style = 'bg-primary-50 border-primary-400'
        return (
          <button key={i} onClick={() => toggle(i)} disabled={submitted}
            className={`w-full flex items-center gap-3 text-left px-4 py-2.5 rounded-md border text-sm transition ${style}`}>
            <span className={`w-4 h-4 rounded border flex items-center justify-center text-[11px] ${checked ? 'bg-primary-600 border-primary-600 text-white' : 'border-slate-400'}`}>
              {checked ? '✓' : ''}
            </span>
            {opt}
          </button>
        )
      })}
    </div>
  )
}

// invul (dropdowns in een zin)
function InvulBody({ vraag, sel, setSel, submitted }: { vraag: Extract<Vraag, { type: 'invul' }>; sel: Record<number, number>; setSel: (r: Record<number, number>) => void; submitted: boolean }) {
  return (
    <div className="text-base text-slate-800 leading-loose font-medium">
      {vraag.delen.map((deel, i) => {
        if (typeof deel === 'string') return <span key={i}>{deel}</span>
        const chosen = sel[i]
        const goed = submitted && chosen === deel.juist
        const fout = submitted && chosen !== undefined && chosen !== deel.juist
        const cls = goed ? 'border-emerald-400 bg-emerald-50 text-emerald-900'
          : fout ? 'border-rose-400 bg-rose-50 text-rose-900'
          : 'border-slate-400 bg-white'
        return (
          <span key={i} className="inline-flex items-center align-middle mx-1">
            <select
              disabled={submitted}
              value={chosen ?? ''}
              onChange={(e) => setSel({ ...sel, [i]: Number(e.target.value) })}
              className={`border rounded px-2 py-1 text-sm ${cls}`}
            >
              <option value="" disabled>— kies —</option>
              {deel.opties.map((o, j) => <option key={j} value={j}>{o}</option>)}
            </select>
            {submitted && fout && (
              <span className="ml-1 text-xs text-emerald-700">→ {deel.opties[deel.juist]}</span>
            )}
          </span>
        )
      })}
    </div>
  )
}

// sleep (item → categorie, via tikken)
function SleepBody({ vraag, sel, setSel, submitted }: { vraag: Extract<Vraag, { type: 'sleep' }>; sel: Record<number, number>; setSel: (r: Record<number, number>) => void; submitted: boolean }) {
  return (
    <div className="space-y-2.5">
      {vraag.items.map((it, i) => {
        const chosen = sel[i]
        const goed = submitted && chosen === it.cat
        const fout = submitted && chosen !== undefined && chosen !== it.cat
        return (
          <div key={i} className={`rounded-md border p-3 ${goed ? 'border-emerald-400 bg-emerald-50' : fout ? 'border-rose-400 bg-rose-50' : 'border-slate-200 bg-slate-50'}`}>
            <div className="text-sm font-medium text-slate-800 mb-2">{it.label}</div>
            <div className="flex flex-wrap gap-2">
              {vraag.categorieen.map((cat, c) => {
                const active = chosen === c
                let style = 'bg-white border-slate-300 text-slate-600 hover:bg-slate-100'
                if (active) style = 'bg-primary-600 border-primary-600 text-white'
                if (submitted && c === it.cat) style = 'bg-emerald-600 border-emerald-600 text-white'
                else if (submitted && active && c !== it.cat) style = 'bg-rose-500 border-rose-500 text-white'
                return (
                  <button key={c} onClick={() => !submitted && setSel({ ...sel, [i]: c })} disabled={submitted}
                    className={`px-2.5 py-1 rounded-full border text-xs font-medium transition ${style}`}>
                    {cat}
                  </button>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
