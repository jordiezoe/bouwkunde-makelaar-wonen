/**
 * Maakt een absoluut asset-pad base-bewust. Op GitHub Pages draait de app
 * onder een submap (bv. /bouwkunde-makelaar-wonen/); Vite zet die in
 * import.meta.env.BASE_URL. Lokaal is dat gewoon '/'.
 *
 * asset('/figs/x.svg')  →  '/figs/x.svg'                         (lokaal)
 *                       →  '/bouwkunde-makelaar-wonen/figs/x.svg' (Pages)
 */
export function asset(path: string): string {
  if (!path.startsWith('/')) return path
  const base = import.meta.env.BASE_URL || '/'
  return base.replace(/\/$/, '') + path
}
