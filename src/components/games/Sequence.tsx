import { useState } from 'react'
import type { SequenceGame } from '../../types/content'

interface Props {
  game: SequenceGame
  onComplete?: (correct: boolean) => void
}

/**
 * Zet items in de juiste volgorde. Klik twee items om ze te wisselen,
 * of gebruik omhoog/omlaag pijltjes.
 */
export function Sequence({ game, onComplete }: Props) {
  const correctOrder = game.items
  const [order, setOrder] = useState<string[]>(() =>
    [...correctOrder].map((it) => ({ it, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map((x) => x.it),
  )
  const [submitted, setSubmitted] = useState(false)

  const isCorrect = (i: number) => order[i] === correctOrder[i]
  const allCorrect = order.every((_, i) => isCorrect(i))

  const move = (from: number, to: number) => {
    if (submitted) return
    if (to < 0 || to >= order.length) return
    setOrder((arr) => {
      const copy = [...arr]
      const [item] = copy.splice(from, 1)
      copy.splice(to, 0, item)
      return copy
    })
  }

  const handleSubmit = () => {
    setSubmitted(true)
    onComplete?.(allCorrect)
  }

  const handleReset = () => {
    setOrder([...correctOrder].map((it) => ({ it, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map((x) => x.it))
    setSubmitted(false)
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 space-y-4">
      <div>
        <h3 className="font-semibold text-primary-700">{game.title}</h3>
        {game.description && <p className="text-sm text-slate-600 mt-1">{game.description}</p>}
      </div>

      <ol className="space-y-2">
        {order.map((item, i) => {
          const correct = submitted && isCorrect(i)
          const wrong = submitted && !correct
          return (
            <li
              key={`${item}-${i}`}
              className={`flex items-center gap-3 p-3 rounded-md border ${
                correct
                  ? 'bg-emerald-50 border-emerald-300'
                  : wrong
                    ? 'bg-rose-50 border-rose-300'
                    : 'bg-slate-50 border-slate-300'
              }`}
            >
              <span className="text-xs font-semibold w-6 text-center text-slate-500">{i + 1}.</span>
              <span className="flex-1 text-slate-800">{item}</span>
              {wrong && (
                <span className="text-xs text-rose-600">
                  → positie {correctOrder.indexOf(item) + 1}
                </span>
              )}
              {!submitted && (
                <div className="flex gap-1">
                  <button
                    onClick={() => move(i, i - 1)}
                    disabled={i === 0}
                    className="px-2 py-0.5 text-sm rounded bg-slate-200 hover:bg-amber-200 disabled:opacity-30"
                    aria-label="Omhoog"
                  >
                    ↑
                  </button>
                  <button
                    onClick={() => move(i, i + 1)}
                    disabled={i === order.length - 1}
                    className="px-2 py-0.5 text-sm rounded bg-slate-200 hover:bg-amber-200 disabled:opacity-30"
                    aria-label="Omlaag"
                  >
                    ↓
                  </button>
                </div>
              )}
            </li>
          )
        })}
      </ol>

      <div className="flex items-center justify-between pt-4 border-t">
        <div className="text-sm">
          {submitted ? (
            allCorrect ? (
              <span className="text-emerald-700 font-medium">✓ Volgorde klopt!</span>
            ) : (
              <span className="text-rose-700 font-medium">
                {order.filter((_, i) => isCorrect(i)).length} van {order.length} op de juiste plaats
              </span>
            )
          ) : (
            <span className="text-slate-500">Gebruik de pijltjes om de volgorde aan te passen</span>
          )}
        </div>
        <div className="flex gap-2">
          {submitted ? (
            <button onClick={handleReset} className="px-4 py-1.5 text-sm rounded-md bg-slate-200 hover:bg-slate-300">
              Opnieuw
            </button>
          ) : (
            <button onClick={handleSubmit} className="px-4 py-1.5 text-sm rounded-md bg-primary-600 hover:bg-primary-700 text-white">
              Controleer
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
