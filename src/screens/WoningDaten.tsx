import { useMemo, useState } from 'react'
import type { Screen } from '../App'
import { Verband } from '../components/Diagrams'
import { woningCases, type VraagCategorie, type WoningCase } from '../content/woningdaten'

interface Props {
  onNavigate: (s: Screen) => void
}

/** Husselt een array (kopie). */
function shuffle<T>(arr: T[]): T[] {
  return arr
    .map((x) => ({ x, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map((y) => y.x)
}

/** Aantal cases per ronde — willekeurig getrokken uit de volledige set. */
const ROUND_SIZE = 8

/** Trek een frisse ronde: ROUND_SIZE willekeurige case-indexen (of alle als er minder zijn). */
function drawRound(): number[] {
  return shuffle(woningCases.map((_, i) => i)).slice(0, Math.min(ROUND_SIZE, woningCases.length))
}

const BEST_KEY = 'bouwkunde-woningdaten-best-v1'

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

// Kleur per vraagcategorie (zelfde palet als de rest van de app).
const CAT_STYLE: Record<VraagCategorie, string> = {
  Woningtype: 'bg-blue-100 text-blue-800',
  Daktype: 'bg-emerald-100 text-emerald-800',
  Bouwperiode: 'bg-amber-100 text-amber-800',
  Bouwstijl: 'bg-violet-100 text-violet-800',
}

// Kleur per clue-label (aanwijzingscategorie).
function clueAccent(label: string): string {
  const l = label.toLowerCase()
  if (l.includes('metselwerk') || l.includes('verband') || l.includes('voeg')) return 'border-orange-300'
  if (l.includes('dak')) return 'border-emerald-300'
  if (l.includes('kozijn') || l.includes('glas')) return 'border-sky-300'
  return 'border-slate-300'
}

export function WoningDaten({ onNavigate }: Props) {
  const [order, setOrder] = useState<number[]>(() => drawRound())
  const [casePos, setCasePos] = useState(0)
  const [qIdx, setQIdx] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [correct, setCorrect] = useState(0)
  const [answered, setAnswered] = useState(0)
  const [finished, setFinished] = useState(false)
  const [best, setBest] = useState<number>(() => loadBest())

  const totalQuestions = useMemo(
    () => order.reduce((sum, idx) => sum + woningCases[idx].vragen.length, 0),
    [order],
  )

  const currentCase: WoningCase = woningCases[order[casePos]]
  const currentVraag = currentCase?.vragen[qIdx]

  function handlePick(i: number) {
    if (picked !== null) return
    setPicked(i)
    setAnswered((n) => n + 1)
    if (i === currentVraag.juist) setCorrect((n) => n + 1)
  }

  function handleNext() {
    setPicked(null)
    // Volgende vraag binnen de case?
    if (qIdx < currentCase.vragen.length - 1) {
      setQIdx(qIdx + 1)
      return
    }
    // Volgende case?
    if (casePos < order.length - 1) {
      setCasePos(casePos + 1)
      setQIdx(0)
      return
    }
    // Klaar
    const pct = totalQuestions > 0 ? Math.round((correct / totalQuestions) * 100) : 0
    if (pct > best) { setBest(pct); saveBest(pct) }
    setFinished(true)
  }

  function handleRestart() {
    setOrder(drawRound()) // frisse selectie cases per ronde
    setCasePos(0)
    setQIdx(0)
    setPicked(null)
    setCorrect(0)
    setAnswered(0)
    setFinished(false)
    window.scrollTo({ top: 0 })
  }

  // ── Eindscherm ──
  if (finished) {
    const pct = totalQuestions > 0 ? Math.round((correct / totalQuestions) * 100) : 0
    const geslaagd = pct >= 80
    return (
      <div className="space-y-6 max-w-2xl">
        <BackButton onNavigate={onNavigate} />
        <div className={`rounded-xl p-6 shadow-sm border ${geslaagd ? 'bg-emerald-50 border-emerald-300' : 'bg-amber-50 border-amber-300'}`}>
          <div className="text-4xl">{geslaagd ? '🏡' : '🔍'}</div>
          <h1 className={`text-2xl font-bold mt-2 ${geslaagd ? 'text-emerald-800' : 'text-amber-800'}`}>
            {correct} van {totalQuestions} goed — {pct}%
          </h1>
          <p className={`text-sm mt-2 ${geslaagd ? 'text-emerald-700' : 'text-amber-700'}`}>
            {geslaagd
              ? 'Sterk! Je leest de details van een woning al goed af naar type, dak en bouwperiode.'
              : 'Blijf combineren: metselverband + dakpan + kozijn/glas samen verraden de periode. Nog een ronde?'}
          </p>
          <p className="text-xs text-slate-500 mt-3">Beste resultaat tot nu toe: {best}%</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleRestart}
            className="px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-semibold"
          >
            Nog een ronde →
          </button>
          <button
            onClick={() => onNavigate({ name: 'dashboard' })}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 rounded-md"
          >
            Naar dashboard
          </button>
        </div>
      </div>
    )
  }

  if (!currentCase || !currentVraag) return null

  // Positie-teller over alle vragen heen (voor de voortgangsbalk).
  const doneBeforeCase = order
    .slice(0, casePos)
    .reduce((sum, idx) => sum + woningCases[idx].vragen.length, 0)
  const globalQPos = doneBeforeCase + qIdx

  return (
    <div className="space-y-6 max-w-2xl">
      <BackButton onNavigate={onNavigate} />

      <header>
        <div className="text-xs font-mono text-primary-500">Woning daten · A.2.2</div>
        <h1 className="text-2xl font-bold text-primary-800">Herken de woning aan de details</h1>
        <p className="text-slate-600 mt-1 text-sm">
          Bepaal aan de hand van metselverband, dakvorm, dakpannen, kozijnen en glas het
          <strong> type woning</strong>, het <strong>daktype</strong> en de <strong>bouwperiode</strong>.
        </p>
      </header>

      {/* Voortgang */}
      <div className="bg-slate-100 border border-slate-200 rounded-lg p-3">
        <div className="flex items-center justify-between text-sm mb-1.5">
          <span className="text-slate-700 font-medium">Vraag {globalQPos + 1} van {totalQuestions}</span>
          <span className="text-slate-700">{correct} goed{answered > 0 ? ` / ${answered}` : ''}</span>
        </div>
        <div className="w-full bg-slate-300 rounded-full h-2 overflow-hidden">
          <div
            className="bg-primary-500 h-2 transition-all"
            style={{ width: `${(globalQPos / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Case-kaart met aanwijzingen */}
      <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200 space-y-4">
        <div>
          <div className="text-xs uppercase tracking-wide text-slate-500">De woning</div>
          <h2 className="text-lg font-semibold text-primary-800 mt-0.5">{currentCase.titel}</h2>
          <p className="text-sm text-slate-600 mt-1 italic">{currentCase.context}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-2.5">
          {currentCase.clues.map((clue, i) => (
            <div
              key={i}
              className={`border-l-4 ${clueAccent(clue.label)} bg-slate-50 rounded-r-md px-3 py-2`}
            >
              <div className="text-[11px] uppercase tracking-wide text-slate-500 font-medium">{clue.label}</div>
              <div className="text-sm text-slate-800 leading-snug">{clue.value}</div>
            </div>
          ))}
        </div>

        {currentCase.verband && (
          <div className="pt-1">
            <div className="text-[11px] uppercase tracking-wide text-slate-500 font-medium mb-1">
              Metselverband (tekening)
            </div>
            <div className="max-w-xs">
              <Verband name={currentCase.verband} />
            </div>
          </div>
        )}
      </section>

      {/* Vraag */}
      <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200 space-y-4">
        <div className="flex items-center gap-2">
          <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${CAT_STYLE[currentVraag.categorie]}`}>
            {currentVraag.categorie}
          </span>
          <span className="text-xs text-slate-400">Vraag {qIdx + 1} van {currentCase.vragen.length} bij deze woning</span>
        </div>
        <div className="text-base text-slate-800 font-medium leading-relaxed">{currentVraag.vraag}</div>

        <div className="space-y-2">
          {currentVraag.opties.map((opt, i) => {
            const isJuist = i === currentVraag.juist
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
              {picked === currentVraag.juist ? (
                <span className="text-emerald-700 font-medium">✓ Correct!</span>
              ) : (
                <span className="text-rose-700 font-medium">
                  ✗ Juiste antwoord: <strong>{currentVraag.opties[currentVraag.juist]}</strong>
                </span>
              )}
            </div>
            <div className="text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-md px-3 py-2 leading-relaxed">
              {currentVraag.uitleg}
            </div>
            <button
              onClick={handleNext}
              className="px-4 py-1.5 text-sm rounded-md bg-primary-600 hover:bg-primary-700 text-white font-medium"
            >
              {globalQPos < totalQuestions - 1 ? 'Volgende →' : 'Bekijk resultaat →'}
            </button>
          </div>
        )}
      </section>
    </div>
  )
}

function BackButton({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  return (
    <button
      onClick={() => onNavigate({ name: 'dashboard' })}
      className="text-sm text-primary-600 hover:underline"
    >
      ← Terug naar dashboard
    </button>
  )
}
