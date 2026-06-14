import { useCallback, useEffect, useState } from 'react'

/**
 * useState dat zijn waarde in localStorage bewaart onder `key`.
 *
 * iOS Safari mag tabbladen op de achtergrond wegvegen om geheugen vrij
 * te maken. Normaal slaat useEffect state op na de render — maar als iOS
 * de tab wegveegt tussen een state-update en de effect-run, gaat de
 * laatste update verloren.
 *
 * Fix: de setter slaat de nieuwe waarde SYNCHROON op in localStorage op
 * het moment van aanroep, nog voor React herrendert. useEffect is een
 * extra vangnet voor de initiële waarde.
 */
export function useStickyState<T>(
  key: string,
  initial: T | (() => T),
): [T, (value: T | ((prev: T) => T)) => void] {
  const [value, setValueInternal] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(key)
      if (raw !== null) return JSON.parse(raw) as T
    } catch {
      /* fall through */
    }
    return typeof initial === 'function' ? (initial as () => T)() : initial
  })

  // Sla ook de initiële waarde op (als die nog niet in localStorage stond)
  useEffect(() => {
    try {
      if (localStorage.getItem(key) === null) {
        localStorage.setItem(key, JSON.stringify(value))
      }
    } catch { /* quota / private mode */ }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  const setValue = useCallback((newValue: T | ((prev: T) => T)) => {
    setValueInternal((prev) => {
      const next =
        typeof newValue === 'function'
          ? (newValue as (p: T) => T)(prev)
          : newValue
      // Synchrone opslag — overleeft iOS tab-evictie ook als effect nog niet heeft gedraaid
      try {
        localStorage.setItem(key, JSON.stringify(next))
      } catch { /* quota / private mode */ }
      return next
    })
  }, [key])

  return [value, setValue]
}

/** Wis een specifieke sticky-state sleutel. */
export function clearStickyState(key: string) {
  try {
    localStorage.removeItem(key)
  } catch {
    /* negeer */
  }
}
