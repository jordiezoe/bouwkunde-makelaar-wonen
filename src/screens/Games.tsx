import { useMemo, useState } from 'react'
import { getTopic } from '../content'
import { GapFill } from '../components/games/GapFill'
import { Sort } from '../components/games/Sort'
import { Sequence } from '../components/games/Sequence'
import { Matching } from '../components/games/Matching'
import type { Screen } from '../App'

interface Props {
  topicCode: string
  onNavigate: (s: Screen) => void
}

export function Games({ topicCode, onNavigate }: Props) {
  const topic = getTopic(topicCode)
  const games = useMemo(() => topic?.games ?? [], [topic])
  const [completedMap, setCompletedMap] = useState<Record<string, boolean>>({})

  if (!topic) {
    return <div className="text-rose-700">Onderwerp niet gevonden.</div>
  }

  if (games.length === 0) {
    return (
      <div className="space-y-4">
        <button onClick={() => onNavigate({ name: 'lesson', topicCode })} className="text-sm text-primary-600 hover:underline">
          ← Terug naar lesstof
        </button>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-6">
          <h2 className="font-semibold text-amber-800">Geen oefenspellen beschikbaar</h2>
          <p className="text-sm text-amber-700 mt-1">
            Voor dit onderwerp zijn nog geen spelvormen gemaakt. Ga direct door naar de quiz.
          </p>
          <button
            onClick={() => onNavigate({ name: 'quiz', topicCode })}
            className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
          >
            Naar de quiz →
          </button>
        </div>
      </div>
    )
  }

  const completedCount = Object.values(completedMap).filter(Boolean).length

  return (
    <div className="space-y-6">
      <button onClick={() => onNavigate({ name: 'lesson', topicCode })} className="text-sm text-primary-600 hover:underline">
        ← Terug naar lesstof
      </button>

      <header>
        <div className="text-xs font-mono text-primary-500">{topic.code}</div>
        <h1 className="text-2xl font-bold text-primary-800">{topic.title} — Speelend leren</h1>
        <p className="text-slate-600 mt-1">
          Verstevig de stof met {games.length} oefenspel{games.length === 1 ? '' : 'len'} voordat je de quiz maakt.
        </p>
      </header>

      <div className="bg-slate-100 border border-slate-200 rounded-lg p-3 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-slate-700">
            Voortgang: <strong>{completedCount}</strong> van {games.length} oefenspel{games.length === 1 ? '' : 'len'} succesvol afgerond
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => onNavigate({ name: 'lesson', topicCode })}
              className="px-3 py-1 text-sm rounded-md bg-white border border-slate-300 hover:bg-slate-50"
            >
              Lesstof terug­lezen
            </button>
            <button
              onClick={() => onNavigate({ name: 'quiz', topicCode })}
              className="px-3 py-1 text-sm rounded-md bg-primary-600 hover:bg-primary-700 text-white"
            >
              Naar de quiz →
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {games.map((game) => (
          <div key={game.id}>
            {game.type === 'gapfill' && (
              <GapFill
                game={game}
                onComplete={(c) => setCompletedMap((m) => ({ ...m, [game.id]: c }))}
              />
            )}
            {game.type === 'sort' && (
              <Sort
                game={game}
                onComplete={(c) => setCompletedMap((m) => ({ ...m, [game.id]: c }))}
              />
            )}
            {game.type === 'sequence' && (
              <Sequence
                game={game}
                onComplete={(c) => setCompletedMap((m) => ({ ...m, [game.id]: c }))}
              />
            )}
            {game.type === 'matching' && (
              <Matching
                game={game}
                onComplete={(c) => setCompletedMap((m) => ({ ...m, [game.id]: c }))}
              />
            )}
          </div>
        ))}
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
        <p className="text-slate-700 mb-3">
          Klaar met de spellen? Maak nu de quiz om dit onderwerp af te ronden.
        </p>
        <button
          onClick={() => onNavigate({ name: 'quiz', topicCode })}
          className="px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium"
        >
          Naar de quiz →
        </button>
      </div>
    </div>
  )
}
