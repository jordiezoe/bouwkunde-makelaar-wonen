import type { Screen } from '../App'
import type { Section } from '../types/content'
import { asset } from '../lib/asset'
import { AttachmentBar } from '../components/AttachmentBar'
import { clearStickyState, useStickyState } from '../lib/useStickyState'
import {
  buildBTExam,
  gradeItem,
  MODE_LABELS,
  SECTION_LABELS,
  type Answer,
  type ExamBlock,
  type ExamItem,
  type ExamMode,
} from '../lib/btexamen'

interface Props {
  onNavigate: (s: Screen) => void
}

const PASS = 0.8
const SECTION_ORDER: Section[] = ['A', 'B', 'C', 'D']

/** Eén "slide": ofwel een blokintroductie, ofwel een vraag. */
type Slide =
  | { kind: 'intro'; block: ExamBlock; blockIdx: number }
  | { kind: 'q'; item: ExamItem; blockIdx: number; qNum: number; qTotal: number }

function toSlides(blocks: ExamBlock[]): Slide[] {
  const slides: Slide[] = []
  blocks.forEach((block, blockIdx) => {
    if (block.items.length === 0) return
    slides.push({ kind: 'intro', block, blockIdx })
    block.items.forEach((item, i) =>
      slides.push({ kind: 'q', item, blockIdx, qNum: i + 1, qTotal: block.items.length }),
    )
  })
  return slides
}

export function BTExamen({ onNavigate }: Props) {
  const k = 'bouwkunde-btexamen'
  const [mode, setMode] = useStickyState<ExamMode | null>(`${k}-mode`, null)
  const [blocks, setBlocks] = useStickyState<ExamBlock[] | null>(`${k}-blocks`, null)
  const [answers, setAnswers] = useStickyState<Record<string, Answer>>(`${k}-answers`, {})
  const [idx, setIdx] = useStickyState<number>(`${k}-idx`, 0)
  const [submitted, setSubmitted] = useStickyState<boolean>(`${k}-submitted`, false)
  const [startedAt, setStartedAt] = useStickyState<number | null>(`${k}-startedAt`, null)

  function reset() {
    ;['mode', 'blocks', 'answers', 'idx', 'submitted', 'startedAt'].forEach((s) =>
      clearStickyState(`${k}-${s}`),
    )
  }

  function start(m: ExamMode) {
    const built = buildBTExam(m)
    setMode(m)
    setBlocks(built)
    setAnswers({})
    setIdx(0)
    setSubmitted(false)
    setStartedAt(Date.now())
  }

  // ---------- Intro: modus kiezen ----------
  if (!blocks || !mode) {
    return (
      <div className="space-y-6 max-w-3xl">
        <button onClick={() => onNavigate({ name: 'dashboard' })} className="text-sm text-primary-600 hover:underline">
          ← Terug naar overzicht
        </button>
        <header>
          <h1 className="text-2xl font-bold text-primary-800">BT1 en BT2 examen</h1>
          <p className="text-slate-600 mt-1">
            Examen-getrouwe oefening op NLQF6-niveau, opgebouwd volgens het kwalificatiedossier
            Bouwkunde. Vier blokken (A/B/C/D), elk met een eigen deelscore — net als de echte
            SVMNIVO-proeftoets. Elke sessie trekt andere vragen.
          </p>
        </header>

        <div className="grid gap-3">
          {(['BT1', 'BT2', 'BT1-2'] as ExamMode[]).map((m) => (
            <button
              key={m}
              onClick={() => start(m)}
              className="text-left bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-slate-200 hover:border-primary-400 hover:shadow-md transition"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="font-semibold text-primary-700">{MODE_LABELS[m]}</div>
                  <div className="text-sm text-slate-600 mt-0.5">
                    {m === 'BT1' && 'Alleen kennisvragen (kennen en herkennen).'}
                    {m === 'BT2' && 'Alleen toepassings- en analysevragen (casusgericht).'}
                    {m === 'BT1-2' && 'Volledige gecombineerde proeftoets — ~50 vragen over alle blokken.'}
                  </div>
                </div>
                <span className="text-2xl shrink-0">{m === 'BT1-2' ? '🎓' : '📝'}</span>
              </div>
            </button>
          ))}
        </div>
        <p className="text-xs text-slate-500">
          Slagingsgrens {Math.round(PASS * 100)}%. Tip: maak het in één keer af, zoals in de echte
          examensituatie. Je voortgang blijft bewaard als je onderbroken wordt.
        </p>
      </div>
    )
  }

  const slides = toSlides(blocks)
  const allItems: ExamItem[] = blocks.flatMap((b) => b.items)
  const total = allItems.length

  // ---------- Resultaat ----------
  if (submitted) {
    const elapsedMin = startedAt ? Math.round((Date.now() - startedAt) / 60000) : 0

    let totalFraction = 0
    const perBlock: Record<Section, { frac: number; count: number }> = {
      A: { frac: 0, count: 0 }, B: { frac: 0, count: 0 }, C: { frac: 0, count: 0 }, D: { frac: 0, count: 0 },
    }
    const review: { item: ExamItem; verdict: string }[] = []
    for (const b of blocks) {
      for (const item of b.items) {
        const { fraction, verdict } = gradeItem(item.question, answers[item.question.id])
        totalFraction += fraction
        perBlock[b.section].frac += fraction
        perBlock[b.section].count += 1
        if (verdict !== 'goed') review.push({ item, verdict })
      }
    }
    const scorePct = total > 0 ? totalFraction / total : 0
    const passed = scorePct >= PASS

    return (
      <div className="space-y-6">
        <button onClick={() => onNavigate({ name: 'dashboard' })} className="text-sm text-primary-600 hover:underline">
          ← Terug naar overzicht
        </button>
        <header>
          <h1 className="text-2xl font-bold text-primary-800">Examenuitslag</h1>
          <p className="text-slate-600 text-sm mt-1">{MODE_LABELS[mode]}</p>
        </header>

        <div className={`rounded-xl p-4 sm:p-6 shadow-sm border ${passed ? 'bg-emerald-50 border-emerald-300' : 'bg-rose-50 border-rose-300'}`}>
          <div className="flex items-baseline justify-between flex-wrap gap-3">
            <div>
              <div className="text-3xl font-bold text-primary-800">{Math.round(scorePct * 100)}%</div>
              <div className="text-lg font-semibold mt-1">{passed ? '✓ Geslaagd' : '✗ Niet gehaald'}</div>
            </div>
            <div className="text-sm text-slate-600">Tijd: {elapsedMin} min · {total} vragen</div>
          </div>
          <p className="text-sm mt-2 text-slate-700">Slagingsgrens {Math.round(PASS * 100)}%.</p>
        </div>

        <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200">
          <h2 className="font-semibold text-primary-700 mb-3">Deelscore per blok</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {SECTION_ORDER.map((sec) => {
              const { frac, count } = perBlock[sec]
              if (count === 0) return null
              const pct = Math.round((frac / count) * 100)
              return (
                <div key={sec} className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                  <div className="text-xs uppercase tracking-wide text-slate-500">Blok {sec}</div>
                  <div className="text-sm font-medium text-slate-800 leading-snug">{SECTION_LABELS[sec]}</div>
                  <div className="text-lg font-bold text-primary-800 mt-1">
                    {pct}% <span className="text-sm font-normal text-slate-600">({count} vr.)</span>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200">
          <h2 className="font-semibold text-primary-700 mb-3">Om na te kijken</h2>
          {review.length === 0 ? (
            <p className="text-slate-600 text-sm">Alles goed — uitstekend!</p>
          ) : (
            <ul className="space-y-3">
              {review.map(({ item, verdict }, i) => {
                const q = item.question
                const goodAnswer =
                  q.type === 'mc'
                    ? q.options[q.correctIndex]
                    : q.correctIndices.map((ix) => q.options[ix]).join('; ')
                return (
                  <li key={i} className="border-l-4 border-rose-400 pl-3">
                    <div className="text-xs text-slate-500 font-mono">
                      {item.topicCode} · {q.toetstermCode} · {verdict === 'deels' ? 'gedeeltelijk' : 'fout'}
                    </div>
                    <div className="text-sm text-slate-800 mt-1">{q.prompt}</div>
                    <div className="text-xs text-slate-600 mt-1">
                      Goed antwoord: <span className="font-medium text-emerald-700">{goodAnswer}</span>
                    </div>
                    {q.explanation && <div className="text-xs text-slate-700 mt-1 italic">{q.explanation}</div>}
                  </li>
                )
              })}
            </ul>
          )}
        </section>

        <div className="flex gap-3 flex-wrap">
          <button onClick={() => start(mode)} className="px-5 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md">
            Opnieuw ({MODE_LABELS[mode]})
          </button>
          <button onClick={reset} className="px-5 py-2 bg-slate-200 hover:bg-slate-300 rounded-md">
            Andere modus kiezen
          </button>
        </div>
      </div>
    )
  }

  // ---------- Examen in uitvoering ----------
  const slide = slides[Math.min(idx, slides.length - 1)]
  const answeredCount = allItems.filter((it) => {
    const a = answers[it.question.id]
    return a && (a.mc !== undefined || (a.multi && a.multi.length > 0))
  }).length
  const isLast = idx >= slides.length - 1

  function setMc(qId: string, i: number) {
    setAnswers((a) => ({ ...a, [qId]: { mc: i } }))
  }
  function toggleMulti(qId: string, i: number) {
    setAnswers((a) => {
      const cur = a[qId]?.multi ?? []
      const next = cur.includes(i) ? cur.filter((x) => x !== i) : [...cur, i]
      return { ...a, [qId]: { multi: next } }
    })
  }

  return (
    <div className="space-y-5 max-w-3xl">
      <div className="flex justify-between items-center sticky top-0 bg-white border border-slate-200 rounded-lg p-3 z-10">
        <div>
          <div className="text-xs uppercase tracking-wide text-slate-500">{MODE_LABELS[mode]}</div>
          <div className="text-sm font-medium text-slate-800">
            {slide.kind === 'q' ? `Blok ${slide.item.section} · vraag ${slide.qNum}/${slide.qTotal}` : `Blok ${slide.block.section}`}
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs uppercase tracking-wide text-slate-500">Beantwoord</div>
          <div className="text-sm font-medium text-slate-800">{answeredCount}/{total}</div>
        </div>
      </div>

      {slide.kind === 'intro' ? (
        <div className="bg-primary-50 rounded-xl p-5 sm:p-6 border border-primary-200">
          <div className="text-xs uppercase tracking-wider text-primary-500 font-semibold">Blokintroductie</div>
          <h2 className="text-xl font-bold text-primary-800 mt-1">
            Blok {slide.block.section} · {slide.block.label}
          </h2>
          <p className="text-sm text-slate-700 mt-2 leading-relaxed">{slide.block.intro}</p>
          <p className="text-xs text-slate-500 mt-3">{slide.block.items.length} vragen in dit blok.</p>
        </div>
      ) : (
        <ExamQuestionView
          item={slide.item}
          answer={answers[slide.item.question.id]}
          onMc={setMc}
          onToggleMulti={toggleMulti}
        />
      )}

      <div className="flex justify-between items-center gap-3">
        <button
          onClick={() => setIdx(Math.max(0, idx - 1))}
          disabled={idx === 0}
          className="px-4 py-2 rounded-md bg-slate-200 hover:bg-slate-300 disabled:opacity-50"
        >
          ← Vorige
        </button>
        {!isLast ? (
          <button onClick={() => setIdx(idx + 1)} className="px-4 py-2 rounded-md bg-primary-600 hover:bg-primary-700 text-white">
            {slide.kind === 'intro' ? 'Start blok →' : 'Volgende →'}
          </button>
        ) : (
          <button
            onClick={() => setSubmitted(true)}
            className="px-4 py-2 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white disabled:bg-slate-300"
          >
            {answeredCount < total ? `Nog ${total - answeredCount} open — toch inleveren` : 'Examen inleveren'}
          </button>
        )}
      </div>
    </div>
  )
}

function ExamQuestionView({
  item,
  answer,
  onMc,
  onToggleMulti,
}: {
  item: ExamItem
  answer: Answer | undefined
  onMc: (qId: string, i: number) => void
  onToggleMulti: (qId: string, i: number) => void
}) {
  const q = item.question
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200 space-y-3">
      <div className="text-xs text-slate-500 font-mono">
        {item.topicCode} {item.topicTitle} · {q.toetstermCode}
      </div>
      <div className="text-base text-slate-800">{q.prompt}</div>

      {q.type === 'multi' && (
        <p className="text-xs text-sky-700 bg-sky-50 border border-sky-200 rounded px-2 py-1 inline-block">
          Let op! Meerdere antwoorden kunnen juist zijn.
        </p>
      )}

      <AttachmentBar attachments={q.attachments} />

      {q.image && (
        <figure className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200">
          <img src={asset(q.image.src)} alt={q.image.caption} className="w-full h-auto object-contain bg-white max-h-72" />
          {q.image.caption && <figcaption className="px-3 py-2 text-xs text-slate-600">{q.image.caption}</figcaption>}
        </figure>
      )}

      <div className="space-y-2">
        {q.type === 'mc' &&
          q.options.map((opt, i) => {
            const chosen = answer?.mc === i
            return (
              <button
                key={i}
                onClick={() => onMc(q.id, i)}
                className={`w-full text-left px-4 py-2.5 rounded-md border text-sm transition ${
                  chosen ? 'bg-primary-100 border-primary-400 ring-2 ring-primary-300' : 'bg-white border-slate-300 hover:bg-slate-50'
                }`}
              >
                <span className="font-semibold text-slate-700 mr-2">{String.fromCharCode(65 + i)}.</span>
                {opt}
              </button>
            )
          })}

        {q.type === 'multi' &&
          q.options.map((opt, i) => {
            const chosen = (answer?.multi ?? []).includes(i)
            return (
              <button
                key={i}
                onClick={() => onToggleMulti(q.id, i)}
                className={`w-full text-left px-4 py-2.5 rounded-md border text-sm transition flex items-center gap-3 ${
                  chosen ? 'bg-primary-100 border-primary-400 ring-2 ring-primary-300' : 'bg-white border-slate-300 hover:bg-slate-50'
                }`}
              >
                <span className={`shrink-0 w-5 h-5 rounded border flex items-center justify-center text-xs ${chosen ? 'bg-primary-600 border-primary-600 text-white' : 'border-slate-300 text-transparent'}`}>
                  ✓
                </span>
                <span className="flex-1">{opt}</span>
              </button>
            )
          })}
      </div>
    </div>
  )
}
