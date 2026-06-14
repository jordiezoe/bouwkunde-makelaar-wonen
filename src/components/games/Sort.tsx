import { useMemo, useState } from 'react'
import type { SortGame } from '../../types/content'

interface Props {
  game: SortGame
  onComplete?: (correct: boolean) => void
}

/**
 * Sort-in-bakken. Klik een item, klik daarna een categorie om het te plaatsen.
 * Bij submitten wordt elk item gecontroleerd; juiste = groen, onjuiste = rood.
 */
export function Sort({ game, onComplete }: Props) {
  const shuffled = useMemo(
    () =>
      game.items
        .map((it) => ({ ...it, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort),
    [game.items],
  )

  // map item-index → category (of null als nog niet geplaatst)
  const [placement, setPlacement] = useState<Record<number, string | null>>(
    () => Object.fromEntries(shuffled.map((_, i) => [i, null])),
  )
  const [selectedItem, setSelectedItem] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const isCorrect = (i: number) => placement[i] === shuffled[i].category
  const allPlaced = Object.values(placement).every((c) => c !== null)
  const allCorrect = shuffled.every((_, i) => isCorrect(i))

  const handleItemClick = (i: number) => {
    if (submitted) return
    if (placement[i] !== null) {
      // weer terug naar de pool
      setPlacement((p) => ({ ...p, [i]: null }))
      setSelectedItem(null)
    } else {
      setSelectedItem(selectedItem === i ? null : i)
    }
  }

  const handleCategoryClick = (cat: string) => {
    if (submitted || selectedItem === null) return
    setPlacement((p) => ({ ...p, [selectedItem]: cat }))
    setSelectedItem(null)
  }

  const handleSubmit = () => {
    setSubmitted(true)
    onComplete?.(allCorrect)
  }

  const handleReset = () => {
    setPlacement(Object.fromEntries(shuffled.map((_, i) => [i, null])))
    setSubmitted(false)
    setSelectedItem(null)
  }

  const unplacedItems = shuffled
    .map((it, i) => ({ ...it, idx: i }))
    .filter((it) => placement[it.idx] === null)

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 space-y-4">
      <div>
        <h3 className="font-semibold text-primary-700">{game.title}</h3>
        {game.description && <p className="text-sm text-slate-600 mt-1">{game.description}</p>}
      </div>

      {/* Categorieën als drop-bakken */}
      <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${Math.min(game.categories.length, 4)}, minmax(0,1fr))` }}>
        {game.categories.map((cat) => {
          const itemsInCat = shuffled
            .map((it, i) => ({ ...it, idx: i }))
            .filter((it) => placement[it.idx] === cat)
          const clickable = selectedItem !== null && !submitted
          return (
            <div
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`border-2 border-dashed rounded-lg p-3 min-h-[100px] transition ${
                clickable
                  ? 'border-amber-400 bg-amber-50 cursor-pointer hover:bg-amber-100'
                  : 'border-slate-300 bg-slate-50'
              }`}
            >
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-600 mb-2">{cat}</div>
              <div className="space-y-1.5">
                {itemsInCat.map((it) => {
                  const correct = submitted && isCorrect(it.idx)
                  const wrong = submitted && !correct
                  return (
                    <div
                      key={it.idx}
                      onClick={(e) => {
                        e.stopPropagation()
                        handleItemClick(it.idx)
                      }}
                      className={`px-2 py-1 rounded text-sm cursor-pointer transition ${
                        correct
                          ? 'bg-emerald-100 text-emerald-800'
                          : wrong
                            ? 'bg-rose-100 text-rose-800'
                            : 'bg-white border border-slate-300 hover:bg-slate-100'
                      }`}
                    >
                      {it.label}
                      {wrong && (
                        <span className="ml-2 text-xs text-rose-600">→ {it.category}</span>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      {/* Pool van nog te plaatsen items */}
      {unplacedItems.length > 0 && (
        <div className="border-t pt-4">
          <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">
            {selectedItem !== null ? 'Klik op een categorie om te plaatsen' : 'Kies een item'}
          </div>
          <div className="flex flex-wrap gap-2">
            {unplacedItems.map((it) => {
              const isSelected = selectedItem === it.idx
              return (
                <button
                  key={it.idx}
                  onClick={() => handleItemClick(it.idx)}
                  disabled={submitted}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${
                    isSelected
                      ? 'bg-amber-500 text-white shadow ring-2 ring-amber-300'
                      : 'bg-slate-200 hover:bg-amber-200 text-slate-700'
                  }`}
                >
                  {it.label}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Acties */}
      <div className="flex items-center justify-between pt-4 border-t">
        <div className="text-sm">
          {submitted ? (
            allCorrect ? (
              <span className="text-emerald-700 font-medium">✓ Alles goed!</span>
            ) : (
              <span className="text-rose-700 font-medium">
                {shuffled.filter((_, i) => isCorrect(i)).length} van {shuffled.length} goed
              </span>
            )
          ) : (
            <span className="text-slate-500">
              {Object.values(placement).filter((c) => c !== null).length} van {shuffled.length} geplaatst
            </span>
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
              disabled={!allPlaced}
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
