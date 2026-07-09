import type { ReactNode } from 'react'
import { asset } from '../lib/asset'
import { AttachmentBar } from './AttachmentBar'
import type { Answer, ExamQuestion } from '../lib/btexamen'

/** Rendert **vet** in een prompt/optie als echte <strong>, i.p.v. letterlijke sterretjes. */
function renderInline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={i}>{part.slice(2, -2)}</strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  )
}

/**
 * Examen-getrouwe weergave van één vraag (mc of multi), zónder directe feedback —
 * gedeeld door de Examensimulatie en het BT1-2 examen. Toont casustekst, een
 * eventuele SVG-afbeelding, bijlagen en de "Let op!"-melding bij meervoudige keuze.
 */
export function ExamQuestionView({
  question,
  headerLabel,
  answer,
  onMc,
  onToggleMulti,
}: {
  question: ExamQuestion
  headerLabel: string
  answer: Answer | undefined
  onMc: (qId: string, i: number) => void
  onToggleMulti: (qId: string, i: number) => void
}) {
  const q = question
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200 space-y-3">
      <div className="text-xs text-slate-500 font-mono">{headerLabel}</div>
      <div className="text-base text-slate-800">{renderInline(q.prompt)}</div>

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
                {renderInline(opt)}
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
                <span className="flex-1">{renderInline(opt)}</span>
              </button>
            )
          })}
      </div>
    </div>
  )
}
