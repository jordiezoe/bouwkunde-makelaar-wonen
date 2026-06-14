import { useMemo, useState } from 'react'
import type { MatchingGame } from '../../types/content'

interface Props {
  game: MatchingGame
  onComplete?: (correct: boolean) => void
}

interface Pick {
  side: 'left' | 'right'
  index: number
}

/**
 * Matching pairs. Klik een term links, dan een rechts — als ze bij elkaar horen worden ze groen.
 * Anders flashen ze kort rood en gaan weer terug.
 */
export function Matching({ game, onComplete }: Props) {
  // Husselen — links blijft in originele volgorde, rechts wordt geschud
  const rights = useMemo(
    () =>
      game.pairs
        .map((p, originalIdx) => ({ text: p.right, originalIdx, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort),
    [game.pairs],
  )

  // Set van gematchte originele-indices
  const [matched, setMatched] = useState<Set<number>>(new Set())
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null)
  const [selectedRight, setSelectedRight] = useState<number | null>(null)
  const [wrongPair, setWrongPair] = useState<Pick[] | null>(null)

  const allMatched = matched.size === game.pairs.length

  const onSelect = (side: 'left' | 'right', index: number) => {
    if (matched.has(side === 'left' ? index : rights[index].originalIdx)) return
    if (wrongPair) return // wachten op flash-end

    if (side === 'left') {
      setSelectedLeft(index)
      if (selectedRight !== null) checkMatch(index, selectedRight)
    } else {
      setSelectedRight(index)
      if (selectedLeft !== null) checkMatch(selectedLeft, index)
    }
  }

  const checkMatch = (leftIdx: number, rightIdx: number) => {
    const correctOriginalIdx = leftIdx
    const pickedOriginalIdx = rights[rightIdx].originalIdx
    if (correctOriginalIdx === pickedOriginalIdx) {
      const newMatched = new Set(matched)
      newMatched.add(correctOriginalIdx)
      setMatched(newMatched)
      setSelectedLeft(null)
      setSelectedRight(null)
      if (newMatched.size === game.pairs.length) {
        onComplete?.(true)
      }
    } else {
      // Korte flash rood
      setWrongPair([
        { side: 'left', index: leftIdx },
        { side: 'right', index: rightIdx },
      ])
      setTimeout(() => {
        setWrongPair(null)
        setSelectedLeft(null)
        setSelectedRight(null)
      }, 700)
    }
  }

  const isWrong = (side: 'left' | 'right', index: number) =>
    wrongPair?.some((p) => p.side === side && p.index === index) ?? false

  const handleReset = () => {
    setMatched(new Set())
    setSelectedLeft(null)
    setSelectedRight(null)
    setWrongPair(null)
  }

  const getButtonClass = (
    side: 'left' | 'right',
    originalIdx: number,
    displayIdx: number,
  ) => {
    const isMatched = matched.has(originalIdx)
    const isSelected = side === 'left' ? selectedLeft === displayIdx : selectedRight === displayIdx
    const wrong = isWrong(side, displayIdx)

    if (isMatched) return 'bg-emerald-100 text-emerald-800 border-emerald-300'
    if (wrong) return 'bg-rose-200 text-rose-900 border-rose-400 animate-pulse'
    if (isSelected) return 'bg-amber-200 text-amber-900 border-amber-400 ring-2 ring-amber-300'
    return 'bg-slate-100 hover:bg-amber-100 border-slate-300'
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 space-y-4">
      <div>
        <h3 className="font-semibold text-primary-700">{game.title}</h3>
        {game.description && <p className="text-sm text-slate-600 mt-1">{game.description}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="text-xs uppercase tracking-wide text-slate-500 mb-1">Begrip</div>
          {game.pairs.map((pair, leftIdx) => (
            <button
              key={leftIdx}
              onClick={() => onSelect('left', leftIdx)}
              disabled={matched.has(leftIdx)}
              className={`w-full text-left px-3 py-2 rounded-md border text-sm transition ${getButtonClass(
                'left',
                leftIdx,
                leftIdx,
              )}`}
            >
              {pair.left}
            </button>
          ))}
        </div>

        <div className="space-y-2">
          <div className="text-xs uppercase tracking-wide text-slate-500 mb-1">Omschrijving</div>
          {rights.map((r, displayIdx) => (
            <button
              key={displayIdx}
              onClick={() => onSelect('right', displayIdx)}
              disabled={matched.has(r.originalIdx)}
              className={`w-full text-left px-3 py-2 rounded-md border text-sm transition ${getButtonClass(
                'right',
                r.originalIdx,
                displayIdx,
              )}`}
            >
              {r.text}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t">
        <div className="text-sm">
          {allMatched ? (
            <span className="text-emerald-700 font-medium">✓ Alle koppels gevonden!</span>
          ) : (
            <span className="text-slate-500">
              {matched.size} van {game.pairs.length} koppels gemaakt
            </span>
          )}
        </div>
        <button
          onClick={handleReset}
          className="px-4 py-1.5 text-sm rounded-md bg-slate-200 hover:bg-slate-300"
        >
          {allMatched ? 'Opnieuw' : 'Reset'}
        </button>
      </div>
    </div>
  )
}
