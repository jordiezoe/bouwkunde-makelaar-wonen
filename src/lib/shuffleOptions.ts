import type { Question } from '../types/content'

/**
 * Deterministische husseling van meerkeuze-opties.
 *
 * Probleem: 78% van de vragen had het juiste antwoord op positie B. Dat laat
 * je onbewust op positie gokken i.p.v. op kennis. Oplossing: de opties krijgen
 * een vaste, vraag-afhankelijke volgorde (geseed op het vraag-id). Daardoor:
 *  - is de positie van het juiste antwoord gelijkmatig verdeeld → geen hint;
 *  - is de volgorde stabiel per vraag, zodat een opgeslagen antwoord-index
 *    geldig blijft na herladen (iOS tab-evictie) en in de resultaatweergave.
 *
 * "Geen van …" / "Alle van …" opties blijven onderaan (anders lezen ze raar).
 */

function seedFrom(id: string): number {
  let h = 2166136261
  for (let i = 0; i < id.length; i++) {
    h ^= id.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

function mulberry32(seed: number): () => number {
  let a = seed
  return function () {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const PIN_LAST = /^(geen van|alle van|alle bovenstaande|geen van bovenstaande|beide)/i

/** Geeft een mc-vraag terug met gehusselde opties + bijgewerkte correctIndex. */
export function shuffleQuestionOptions<Q extends Question>(q: Q): Q {
  if (q.type !== 'mc') return q

  const indices = q.options.map((_, i) => i)
  const movable = indices.filter((i) => !PIN_LAST.test(q.options[i].trim()))
  const pinned = indices.filter((i) => PIN_LAST.test(q.options[i].trim()))

  const rng = mulberry32(seedFrom(q.id))
  for (let i = movable.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[movable[i], movable[j]] = [movable[j], movable[i]]
  }

  const order = [...movable, ...pinned]
  const options = order.map((i) => q.options[i])
  const correctIndex = order.indexOf(q.correctIndex)
  return { ...q, options, correctIndex }
}
