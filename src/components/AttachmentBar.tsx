import type { ExamAttachment } from '../types/content'
import { asset } from '../lib/asset'

/**
 * Toont de bestek-/tekening-bijlagen bij een vraag als aanklikbare links —
 * net als in de echte proeftoets, waar naar "Tekeningen A1 2016-I / BLAD 1"
 * wordt verwezen. Opent de PDF in een nieuw tabblad.
 */
export function AttachmentBar({ attachments }: { attachments?: ExamAttachment[] }) {
  if (!attachments || attachments.length === 0) return null
  return (
    <div className="flex flex-wrap gap-2 rounded-lg border border-amber-200 bg-amber-50 p-2">
      <span className="text-xs font-medium text-amber-800 self-center">📎 Bijlage:</span>
      {attachments.map((a, i) => (
        <a
          key={i}
          href={asset(a.href)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-amber-900 underline decoration-amber-400 hover:decoration-amber-700"
        >
          {a.label}
          {a.blad ? ` · ${a.blad}` : ''}
        </a>
      ))}
    </div>
  )
}
