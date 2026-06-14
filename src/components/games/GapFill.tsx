import { useMemo, useState } from 'react'
import type { GapFillGame } from '../../types/content'

interface Props {
  game: GapFillGame
  onComplete?: (correct: boolean) => void
}

interface Blank {
  index: number
  answer: string
}

/**
 * Gap-fill spel. De gebruiker klikt een woord uit de pool en plakt het in een gat.
 * Antwoord is correct als alle gaten exact (case-insensitive) overeenkomen.
 */
export function GapFill({ game, onComplete }: Props) {
  // Parse text — split op {{...}} placeholders
  const parts = useMemo(() => {
    const segments: Array<{ kind: 'text'; value: string } | { kind: 'blank'; index: number; answer: string }> = []
    const regex = /\{\{([^}]+)\}\}/g
    let lastIdx = 0
    let blankIdx = 0
    let m: RegExpExecArray | null
    while ((m = regex.exec(game.text)) !== null) {
      if (m.index > lastIdx) {
        segments.push({ kind: 'text', value: game.text.slice(lastIdx, m.index) })
      }
      segments.push({ kind: 'blank', index: blankIdx, answer: m[1].trim() })
      blankIdx++
      lastIdx = m.index + m[0].length
    }
    if (lastIdx < game.text.length) {
      segments.push({ kind: 'text', value: game.text.slice(lastIdx) })
    }
    return segments
  }, [game.text])

  const blanks: Blank[] = useMemo(
    () => parts.filter((p): p is { kind: 'blank'; index: number; answer: string } => p.kind === 'blank').map((p) => ({ index: p.index, answer: p.answer })),
    [parts],
  )

  // Pool van te slepen woorden — alle juiste antwoorden + distractors, in vaste random volgorde
  const pool = useMemo(() => {
    const all = [...blanks.map((b) => b.answer), ...(game.distractors ?? [])]
    return all
      .map((w) => ({ w, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map((x) => x.w)
  }, [blanks, game.distractors])

  const [filled, setFilled] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [selectedWord, setSelectedWord] = useState<string | null>(null)

  const isCorrectBlank = (index: number) => {
    const got = filled[index]
    if (!got) return false
    return got.trim().toLowerCase() === blanks[index].answer.trim().toLowerCase()
  }

  const allFilled = blanks.every((b) => filled[b.index] !== undefined)
  const allCorrect = blanks.every((b) => isCorrectBlank(b.index))

  const handleBlankClick = (index: number) => {
    if (submitted) return
    if (selectedWord) {
      setFilled((f) => ({ ...f, [index]: selectedWord }))
      setSelectedWord(null)
    } else if (filled[index]) {
      // klik op gevuld gat → wis
      setFilled((f) => {
        const c = { ...f }
        delete c[index]
        return c
      })
    }
  }

  const handleWordClick = (word: string) => {
    if (submitted) return
    setSelectedWord(selectedWord === word ? null : word)
  }

  const handleSubmit = () => {
    setSubmitted(true)
    onComplete?.(allCorrect)
  }

  const handleReset = () => {
    setFilled({})
    setSubmitted(false)
    setSelectedWord(null)
  }

  // Hoeveel keer een woord nog beschikbaar is in de pool — een woord mag maar één keer worden gebruikt
  const wordUsage: Record<string, number> = {}
  pool.forEach((w) => {
    wordUsage[w] = (wordUsage[w] || 0) + 1
  })
  Object.values(filled).forEach((w) => {
    wordUsage[w] = (wordUsage[w] || 0) - 1
  })

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 space-y-4">
      <div>
        <h3 className="font-semibold text-primary-700">{game.title}</h3>
        {game.description && <p className="text-sm text-slate-600 mt-1">{game.description}</p>}
      </div>

      {/* Tekst met klikbare gaten */}
      <div className="text-slate-800 leading-relaxed">
        {parts.map((p, i) => {
          if (p.kind === 'text') return <span key={i}>{p.value}</span>
          const filledWord = filled[p.index]
          const correct = submitted && isCorrectBlank(p.index)
          const wrong = submitted && filledWord && !correct
          const baseClass = 'inline-block min-w-[80px] px-2 mx-0.5 rounded border-b-2 cursor-pointer transition'
          let stateClass = 'border-slate-400 bg-slate-50 hover:bg-amber-100'
          if (selectedWord && !filledWord && !submitted) stateClass = 'border-amber-400 bg-amber-50 hover:bg-amber-100 ring-2 ring-amber-300'
          if (correct) stateClass = 'border-emerald-500 bg-emerald-50 text-emerald-800'
          if (wrong) stateClass = 'border-rose-500 bg-rose-50 text-rose-800 line-through'
          return (
            <span
              key={i}
              onClick={() => handleBlankClick(p.index)}
              className={`${baseClass} ${stateClass}`}
            >
              {filledWord ?? '        '}
            </span>
          )
        })}
      </div>

      {/* Pool van woorden */}
      <div className="border-t pt-4">
        <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">
          {submitted ? 'Antwoorden' : 'Kies een woord en klik vervolgens op een gat'}
        </div>
        <div className="flex flex-wrap gap-2">
          {pool.map((word, idx) => {
            const stillAvailable = (wordUsage[word] || 0) > 0
            const isSelected = selectedWord === word
            return (
              <button
                key={`${word}-${idx}`}
                onClick={() => handleWordClick(word)}
                disabled={submitted || !stillAvailable}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${
                  !stillAvailable
                    ? 'bg-slate-100 text-slate-400 line-through'
                    : isSelected
                      ? 'bg-amber-500 text-white shadow ring-2 ring-amber-300'
                      : 'bg-slate-200 hover:bg-amber-200 text-slate-700'
                }`}
              >
                {word}
              </button>
            )
          })}
        </div>
      </div>

      {/* Acties */}
      <div className="flex items-center justify-between pt-4 border-t">
        <div className="text-sm">
          {submitted ? (
            allCorrect ? (
              <span className="text-emerald-700 font-medium">✓ Alles goed!</span>
            ) : (
              <span className="text-rose-700 font-medium">
                {blanks.filter((b) => isCorrectBlank(b.index)).length} van {blanks.length} goed
              </span>
            )
          ) : (
            <span className="text-slate-500">{Object.keys(filled).length} van {blanks.length} ingevuld</span>
          )}
        </div>
        <div className="flex gap-2">
          {submitted ? (
            <button onClick={handleReset} className="px-4 py-1.5 text-sm rounded-md bg-slate-200 hover:bg-slate-300">
              Opnieuw
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!allFilled}
              className="px-4 py-1.5 text-sm rounded-md bg-primary-600 hover:bg-primary-700 text-white disabled:bg-slate-300 disabled:cursor-not-allowed"
            >
              Controleer
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
