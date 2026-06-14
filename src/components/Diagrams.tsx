/**
 * Zelfgetekende SVG-diagrammen voor de Bouwkunde-app.
 * Geen externe afbeeldingen, geen copyright — volledig schaalbaar in elke browser.
 */

// Maten in SVG-eenheden
const STREK = 60
const KOP = 30
const DRIE_KLEZOOR = 45
const HALVE = 30
const KLEZOOR = 15
const VOEG = 2
const BRICK_H = 18

const BRICK_FILL = '#e8c79b'
const BRICK_STROKE = '#7a5236'
const HIGHLIGHT_FILL = '#c98e54'
const HIGHLIGHT_STROKE = '#5b3a23'

type Brick =
  | number                              // gewone steen, opgegeven breedte
  | { w: number; highlight?: boolean }  // met optionele kleur-highlight

interface VerbandSpec {
  title: string
  description: string
  rows: Brick[][]
}

// ============================================================
// METSELVERBANDEN
// ============================================================

const halfsteensverband: VerbandSpec = {
  title: 'Halfsteensverband',
  description:
    'Alleen strekken; opvolgende rijen verspringen ½ strek. Standaard in spouwbladen.',
  rows: [
    [STREK, STREK, STREK, STREK, STREK],
    [HALVE, STREK, STREK, STREK, STREK, HALVE],
    [STREK, STREK, STREK, STREK, STREK],
    [HALVE, STREK, STREK, STREK, STREK, HALVE],
  ],
}

const klezorenverband: VerbandSpec = {
  title: 'Klezorenverband',
  description:
    'Strekken plus een klezoor (¼ steen) aan het begin; verspringing ¼ steen — "staande tand".',
  rows: [
    [STREK, STREK, STREK, STREK, STREK],
    [{ w: KLEZOOR, highlight: true }, STREK, STREK, STREK, STREK, DRIE_KLEZOOR],
    [STREK, STREK, STREK, STREK, STREK],
    [{ w: KLEZOOR, highlight: true }, STREK, STREK, STREK, STREK, DRIE_KLEZOOR],
  ],
}

const staandVerband: VerbandSpec = {
  title: 'Staand verband',
  description:
    'Strekkenlaag en koppenlaag wisselen elkaar af. Strekken in opvolgende strekkenlagen liggen RECHT boven elkaar.',
  rows: [
    // strekkenlaag
    [STREK, STREK, STREK, STREK, STREK],
    // koppenlaag, koppen rechtgecentreerd onder de strekken
    [
      { w: KOP, highlight: true },
      KOP, KOP, KOP, KOP, KOP, KOP, KOP, KOP, KOP,
    ],
    [STREK, STREK, STREK, STREK, STREK],
    [
      { w: KOP, highlight: true },
      KOP, KOP, KOP, KOP, KOP, KOP, KOP, KOP, KOP,
    ],
  ],
}

const kruisverband: VerbandSpec = {
  title: 'Kruisverband',
  description:
    'Strekkenlaag en koppenlaag wisselen elkaar af, maar strekken in opvolgende strekkenlagen VERSPRINGEN ½ steen. Nederlandse standaard sinds 15e eeuw.',
  rows: [
    [STREK, STREK, STREK, STREK, STREK],
    // koppenlaag
    [{ w: KLEZOOR, highlight: true }, KOP, KOP, KOP, KOP, KOP, KOP, KOP, KOP, KOP, { w: KLEZOOR, highlight: true }],
    // strekkenlaag verschoven ½ strek
    [HALVE, STREK, STREK, STREK, STREK, HALVE],
    // koppenlaag
    [{ w: KLEZOOR, highlight: true }, KOP, KOP, KOP, KOP, KOP, KOP, KOP, KOP, KOP, { w: KLEZOOR, highlight: true }],
  ],
}

const vlaamsVerband: VerbandSpec = {
  title: 'Vlaams verband',
  description:
    'BINNEN één rij wisselen kop en strek elkaar af; in opvolgende rijen ligt een kop steeds boven een strek.',
  rows: [
    // rij 1: K S K S K S K S K
    [KOP, STREK, KOP, STREK, KOP, STREK, KOP],
    // rij 2: verschoven, zodat kop boven midden strek ligt
    [{ w: KLEZOOR, highlight: true }, STREK, KOP, STREK, KOP, STREK, KOP, STREK, { w: KLEZOOR, highlight: true }],
    [KOP, STREK, KOP, STREK, KOP, STREK, KOP],
    [{ w: KLEZOOR, highlight: true }, STREK, KOP, STREK, KOP, STREK, KOP, STREK, { w: KLEZOOR, highlight: true }],
  ],
}

const koppenverband: VerbandSpec = {
  title: 'Koppen- of patijtsverband',
  description:
    'Alleen koppen, verspringing ¼ steen. Veel toegepast bij gebogen muurdelen omdat de korte koppen zich makkelijk in een kromming voegen.',
  rows: [
    [KOP, KOP, KOP, KOP, KOP, KOP, KOP, KOP, KOP, KOP, KOP, KOP],
    [{ w: KLEZOOR, highlight: true }, KOP, KOP, KOP, KOP, KOP, KOP, KOP, KOP, KOP, KOP, KOP, { w: KLEZOOR, highlight: true }],
    [KOP, KOP, KOP, KOP, KOP, KOP, KOP, KOP, KOP, KOP, KOP, KOP],
    [{ w: KLEZOOR, highlight: true }, KOP, KOP, KOP, KOP, KOP, KOP, KOP, KOP, KOP, KOP, KOP, { w: KLEZOOR, highlight: true }],
  ],
}

// ============================================================
// SVG renderer
// ============================================================

function VerbandSVG({ spec }: { spec: VerbandSpec }) {
  const rowWidths = spec.rows.map((row) =>
    row.reduce<number>((sum, b, i) => {
      const w = typeof b === 'number' ? b : b.w
      return sum + w + (i < row.length - 1 ? VOEG : 0)
    }, 0),
  )
  const width = Math.max(...rowWidths)
  const height = spec.rows.length * BRICK_H + (spec.rows.length - 1) * VOEG

  return (
    <svg
      viewBox={`-1 -1 ${width + 2} ${height + 2}`}
      preserveAspectRatio="xMidYMid meet"
      className="w-full h-auto bg-white"
    >
      {spec.rows.map((row, rowIdx) => {
        const y = rowIdx * (BRICK_H + VOEG)
        // Centreer rijen die smaller zijn dan de breedste rij
        const rowWidth = rowWidths[rowIdx]
        let x = (width - rowWidth) / 2
        return row.map((b, brickIdx) => {
          const w = typeof b === 'number' ? b : b.w
          const hi = typeof b !== 'number' && b.highlight
          const rect = (
            <rect
              key={`${rowIdx}-${brickIdx}`}
              x={x}
              y={y}
              width={w}
              height={BRICK_H}
              rx={1}
              fill={hi ? HIGHLIGHT_FILL : BRICK_FILL}
              stroke={hi ? HIGHLIGHT_STROKE : BRICK_STROKE}
              strokeWidth={1}
            />
          )
          x += w + VOEG
          return rect
        })
      })}
    </svg>
  )
}

// ============================================================
// Bogen
// ============================================================

interface BoogSpec {
  title: string
  description: string
  draw: () => JSX.Element
}

const segmentboog: BoogSpec = {
  title: 'Segmentboog',
  description:
    'Vlakke boog: deel van een grote cirkel. Lichte kromming, geschikt voor brede openingen.',
  draw: () => (
    <g stroke="#7a5236" fill="#e8c79b" strokeWidth={1}>
      <path d="M 20 95 L 20 70 A 240 240 0 0 1 220 70 L 220 95 L 200 95 L 200 75 A 200 200 0 0 0 40 75 L 40 95 Z" />
      <line x1="20" y1="95" x2="220" y2="95" stroke="#5b3a23" strokeWidth={1.5} />
    </g>
  ),
}

const ellipsboog: BoogSpec = {
  title: 'Ellipsboog',
  description: 'Halve ellips: vlakker dan een rondboog, hoger dan een segmentboog.',
  draw: () => (
    <g stroke="#7a5236" fill="#e8c79b" strokeWidth={1}>
      <path d="M 20 95 L 20 60 A 100 50 0 0 1 220 60 L 220 95 L 200 95 L 200 65 A 80 40 0 0 0 40 65 L 40 95 Z" />
    </g>
  ),
}

const rondboog: BoogSpec = {
  title: 'Rondboog',
  description: 'Halve cirkel — Romeinse stijl. Klassieke vorm, voorkomt in kerken, kelders en oudere woonhuizen.',
  draw: () => (
    <g stroke="#7a5236" fill="#e8c79b" strokeWidth={1}>
      <path d="M 20 95 L 20 60 A 100 100 0 0 1 220 60 L 220 95 L 200 95 L 200 60 A 80 80 0 0 0 40 60 L 40 95 Z" />
    </g>
  ),
}

const spitsboog: BoogSpec = {
  title: 'Spitsboog',
  description: 'Gotische puntboog: twee bogen die elkaar bovenin ontmoeten. Typisch voor middeleeuwse kerken.',
  draw: () => (
    <g stroke="#7a5236" fill="#e8c79b" strokeWidth={1}>
      <path d="M 20 95 L 20 60 A 200 200 0 0 1 120 10 A 200 200 0 0 1 220 60 L 220 95 L 200 95 L 200 60 A 160 160 0 0 0 120 30 A 160 160 0 0 0 40 60 L 40 95 Z" />
    </g>
  ),
}

function BoogSVG({ spec }: { spec: BoogSpec }) {
  return (
    <svg viewBox="0 0 240 100" className="w-full h-auto bg-white">
      {/* Achtergrond muurvlak — lichte arcering */}
      <rect x="0" y="0" width="240" height="100" fill="#f6f1e9" />
      {/* Opening */}
      <rect x="40" y="60" width="160" height="40" fill="#ffffff" stroke="none" />
      {spec.draw()}
    </svg>
  )
}

// ============================================================
// Public components
// ============================================================

// ============================================================
// Perceel: rooilijn, bouwvlak, eigendomsgrens, erfgebieden
// ============================================================

function PerceelSVG() {
  return (
    <svg viewBox="0 0 320 220" className="w-full h-auto bg-white">
      {/* Straat */}
      <rect x="0" y="0" width="320" height="40" fill="#cfd8dc" />
      <text x="160" y="25" textAnchor="middle" fontSize="11" fill="#37474f">
        openbare weg
      </text>

      {/* Trottoir */}
      <rect x="0" y="40" width="320" height="10" fill="#eceff1" />

      {/* Perceel */}
      <rect
        x="60"
        y="50"
        width="200"
        height="160"
        fill="#f1f5e8"
        stroke="#3a6da7"
        strokeWidth="2.5"
        strokeDasharray="1 0"
      />

      {/* Bouwvlak (waar je mag bouwen) */}
      <rect
        x="80"
        y="80"
        width="160"
        height="80"
        fill="#fde68a"
        stroke="#92400e"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <text x="160" y="125" textAnchor="middle" fontSize="11" fill="#78350f">
        bouwvlak
      </text>

      {/* Rooilijn (langs straatkant) */}
      <line x1="40" y1="80" x2="280" y2="80" stroke="#d32f2f" strokeWidth="2" />
      <text x="200" y="76" fontSize="10" fill="#b71c1c">
        gevelrooilijn
      </text>

      {/* Voorerfgebied label */}
      <text x="160" y="68" textAnchor="middle" fontSize="9" fill="#37474f" fontStyle="italic">
        voorerfgebied
      </text>

      {/* Achtererfgebied */}
      <text x="160" y="195" textAnchor="middle" fontSize="9" fill="#37474f" fontStyle="italic">
        achtererfgebied
      </text>

      {/* Eigendomsgrens labels */}
      <text x="52" y="135" fontSize="9" fill="#3a6da7" transform="rotate(-90 52 135)">
        eigendomsgrens
      </text>

      {/* Pijl naar rooilijn */}
      <line x1="295" y1="80" x2="285" y2="80" stroke="#d32f2f" strokeWidth="1" />
      <polygon points="285,77 280,80 285,83" fill="#d32f2f" />
    </svg>
  )
}

export function PerceelDiagram() {
  return (
    <figure className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200">
      <div className="p-3 bg-white">
        <PerceelSVG />
      </div>
      <figcaption className="px-3 py-2 text-xs text-slate-700">
        <strong>Perceel met rooilijn en bouwvlak</strong> — de <span className="text-red-700 font-medium">gevelrooilijn</span> bepaalt waar de voorgevel mag staan; het{' '}
        <span className="text-amber-700 font-medium">bouwvlak</span> geeft aan waar gebouwd mag worden binnen het perceel. De{' '}
        <span className="text-primary-700 font-medium">eigendomsgrens</span> is de buitenrand van het perceel.
        <div className="text-slate-400 mt-0.5">eigen tekening</div>
      </figcaption>
    </figure>
  )
}

// ============================================================
// Bouwprocesfases als tijdlijn
// ============================================================

interface PhaseSpec {
  name: string
  short: string
  color: string
}

const PHASES: PhaseSpec[] = [
  { name: 'Initiatief', short: 'Idee + haalbaarheid', color: '#bcd0e8' },
  { name: 'Ontwerp', short: 'Schets → bestek', color: '#8db0d6' },
  { name: 'Voorbereiding', short: 'Vergunning + aanbesteding', color: '#5b8bbf' },
  { name: 'Uitvoering', short: 'Bouwen', color: '#3a6da7' },
  { name: 'Oplevering', short: 'Inspectie + sleuteloverdracht', color: '#2e578a' },
  { name: 'Exploitatie', short: 'Gebruik + onderhoud', color: '#1f3a5f' },
]

function BouwfasenSVG() {
  const w = 480
  const h = 100
  const barH = 28
  const gap = 4
  const totalGap = gap * (PHASES.length - 1)
  const barW = (w - totalGap - 20) / PHASES.length
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto bg-white">
      <text x={w / 2} y={14} textAnchor="middle" fontSize="11" fill="#64748b">
        tijd →
      </text>
      {PHASES.map((p, i) => {
        const x = 10 + i * (barW + gap)
        const y = 24
        return (
          <g key={p.name}>
            <rect
              x={x}
              y={y}
              width={barW}
              height={barH}
              fill={p.color}
              rx="3"
            />
            <text
              x={x + barW / 2}
              y={y + barH / 2 + 4}
              textAnchor="middle"
              fontSize="11"
              fill="#ffffff"
              fontWeight="600"
            >
              {p.name}
            </text>
            <text
              x={x + barW / 2}
              y={y + barH + 14}
              textAnchor="middle"
              fontSize="9"
              fill="#475569"
            >
              {p.short}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

export function BouwfasenDiagram() {
  return (
    <figure className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200">
      <div className="p-3 bg-white">
        <BouwfasenSVG />
      </div>
      <figcaption className="px-3 py-2 text-xs text-slate-700">
        <strong>Fases van het bouwproces</strong> — van initiatief tot exploitatie. De makelaar speelt vooral een rol in de initiatief- en exploitatiefase.
        <div className="text-slate-400 mt-0.5">eigen tekening</div>
      </figcaption>
    </figure>
  )
}

// ============================================================
// Arceringen op bouwkundige tekeningen
// ============================================================

interface Arcering {
  name: string
  pattern: () => JSX.Element
}

const ARCERINGEN: Arcering[] = [
  {
    name: 'Baksteen',
    pattern: () => (
      <>
        <defs>
          <pattern id="p-baksteen" patternUnits="userSpaceOnUse" width="14" height="6" patternTransform="rotate(-30)">
            <line x1="0" y1="3" x2="14" y2="3" stroke="#7a5236" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#p-baksteen)" />
      </>
    ),
  },
  {
    name: 'Kalkzandsteen',
    pattern: () => (
      <>
        <defs>
          <pattern id="p-kalkzand" patternUnits="userSpaceOnUse" width="12" height="6">
            <rect width="12" height="6" fill="none" stroke="#475569" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#p-kalkzand)" />
      </>
    ),
  },
  {
    name: 'Beton (ongew.)',
    pattern: () => (
      <>
        <defs>
          <pattern id="p-beton" patternUnits="userSpaceOnUse" width="10" height="10">
            <circle cx="2" cy="2" r="0.8" fill="#334155" />
            <circle cx="7" cy="6" r="0.8" fill="#334155" />
            <polygon points="4,8 6,8 5,5.5" fill="#334155" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#p-beton)" />
      </>
    ),
  },
  {
    name: 'Gewapend beton',
    pattern: () => (
      <>
        <defs>
          <pattern id="p-gewbeton" patternUnits="userSpaceOnUse" width="10" height="10">
            <circle cx="2" cy="2" r="0.8" fill="#334155" />
            <circle cx="7" cy="6" r="0.8" fill="#334155" />
            <polygon points="4,8 6,8 5,5.5" fill="#334155" />
            <line x1="0" y1="10" x2="10" y2="0" stroke="#334155" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#p-gewbeton)" />
      </>
    ),
  },
  {
    name: 'Hout (lengte)',
    pattern: () => (
      <>
        <defs>
          <pattern id="p-houtl" patternUnits="userSpaceOnUse" width="40" height="8">
            <path
              d="M 0 4 Q 10 1, 20 4 T 40 4"
              fill="none"
              stroke="#92400e"
              strokeWidth="0.6"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#p-houtl)" />
      </>
    ),
  },
  {
    name: 'Hout (kops)',
    pattern: () => (
      <>
        <defs>
          <pattern id="p-houtk" patternUnits="userSpaceOnUse" width="20" height="20">
            <circle cx="10" cy="10" r="6" fill="none" stroke="#92400e" strokeWidth="0.6" />
            <circle cx="10" cy="10" r="3" fill="none" stroke="#92400e" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#p-houtk)" />
      </>
    ),
  },
  {
    name: 'Isolatie',
    pattern: () => (
      <>
        <defs>
          <pattern id="p-isolatie" patternUnits="userSpaceOnUse" width="14" height="6">
            <path
              d="M 0 3 Q 3.5 0, 7 3 T 14 3"
              fill="none"
              stroke="#0369a1"
              strokeWidth="0.7"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#p-isolatie)" />
      </>
    ),
  },
  {
    name: 'Glas',
    pattern: () => (
      <>
        <defs>
          <pattern id="p-glas" patternUnits="userSpaceOnUse" width="20" height="6">
            <line x1="0" y1="2" x2="20" y2="2" stroke="#0891b2" strokeWidth="0.5" />
            <line x1="0" y1="4" x2="20" y2="4" stroke="#0891b2" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#p-glas)" />
      </>
    ),
  },
  {
    name: 'Aluminium',
    pattern: () => <rect width="100%" height="100%" fill="#94a3b8" />,
  },
  {
    name: 'Staal',
    pattern: () => <rect width="100%" height="100%" fill="#1e293b" />,
  },
  {
    name: 'Grond / zand',
    pattern: () => (
      <>
        <defs>
          <pattern id="p-grond" patternUnits="userSpaceOnUse" width="8" height="8">
            <circle cx="2" cy="2" r="0.5" fill="#78350f" />
            <circle cx="5" cy="5" r="0.5" fill="#78350f" />
            <circle cx="7" cy="2" r="0.5" fill="#78350f" />
            <circle cx="3" cy="6" r="0.5" fill="#78350f" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#p-grond)" />
      </>
    ),
  },
  {
    name: 'Tegelwerk',
    pattern: () => (
      <>
        <defs>
          <pattern id="p-tegels" patternUnits="userSpaceOnUse" width="14" height="14">
            <rect x="0.5" y="0.5" width="13" height="13" fill="#e2e8f0" stroke="#475569" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#p-tegels)" />
      </>
    ),
  },
]

export function ArceringenDiagram() {
  return (
    <figure className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200">
      <div className="p-3 bg-white">
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
          {ARCERINGEN.map((a) => (
            <div key={a.name} className="flex flex-col items-center">
              <svg
                viewBox="0 0 80 50"
                className="w-full h-auto border border-slate-300"
              >
                {a.pattern()}
              </svg>
              <div className="text-xs text-slate-700 mt-1 text-center">{a.name}</div>
            </div>
          ))}
        </div>
      </div>
      <figcaption className="px-3 py-2 text-xs text-slate-700">
        <strong>Standaardarceringen</strong> op bouwkundige tekeningen volgens NEN. Per materiaal een herkenbare patroonweergave die op alle plattegronden en doorsneden terugkomt.
        <div className="text-slate-400 mt-0.5">eigen tekening</div>
      </figcaption>
    </figure>
  )
}

// ============================================================
// Plattegrond met dragende en niet-dragende wanden
// ============================================================

function PlattegrondSVG() {
  return (
    <svg viewBox="0 0 360 240" className="w-full h-auto bg-white">
      {/* Buitenmuren — dik gemarkeerd als dragend */}
      <g stroke="#1f2937" fill="none">
        {/* Buitenwanden 240 mm dik (dragend) */}
        <rect x="20" y="20" width="320" height="200" strokeWidth="6" />
      </g>

      {/* Interne dragende muur (door het hele huis, midden) */}
      <line x1="200" y1="20" x2="200" y2="220" stroke="#1f2937" strokeWidth="6" />

      {/* Niet-dragende scheidingswand (dun) */}
      <line x1="200" y1="120" x2="340" y2="120" stroke="#1f2937" strokeWidth="2" strokeDasharray="0" />
      <line x1="100" y1="120" x2="200" y2="120" stroke="#1f2937" strokeWidth="2" />
      <line x1="100" y1="20" x2="100" y2="120" stroke="#1f2937" strokeWidth="2" />

      {/* Deuropeningen (gaten in de wanden) */}
      <line x1="180" y1="120" x2="200" y2="120" stroke="#ffffff" strokeWidth="2.5" />
      <line x1="100" y1="80" x2="100" y2="105" stroke="#ffffff" strokeWidth="2.5" />

      {/* Kamerlabels */}
      <text x="60" y="170" fontSize="11" fill="#475569">woonkamer</text>
      <text x="240" y="170" fontSize="11" fill="#475569">keuken</text>
      <text x="45" y="65" fontSize="11" fill="#475569">hal</text>
      <text x="120" y="65" fontSize="11" fill="#475569">slaapk.</text>
      <text x="245" y="65" fontSize="11" fill="#475569">badk.</text>

      {/* Legenda */}
      <g transform="translate(20, 230)" fontSize="10" fill="#1f2937">
        <line x1="0" y1="-3" x2="20" y2="-3" stroke="#1f2937" strokeWidth="6" />
        <text x="25" y="0">dragende muur</text>
        <line x1="160" y1="-3" x2="180" y2="-3" stroke="#1f2937" strokeWidth="2" />
        <text x="185" y="0">scheidingswand (niet-dragend)</text>
      </g>
    </svg>
  )
}

export function PlattegrondDragendDiagram() {
  return (
    <figure className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200">
      <div className="p-3 bg-white">
        <PlattegrondSVG />
      </div>
      <figcaption className="px-3 py-2 text-xs text-slate-700">
        <strong>Dragende vs. niet-dragende wanden</strong> — op een bouwkundige tekening herken je dragende muren aan de <strong>dikkere lijn</strong>. Bij verbouwingen mag een niet-dragende scheidingswand zonder constructeur weggehaald worden; een dragende muur niet.
        <div className="text-slate-400 mt-0.5">eigen tekening</div>
      </figcaption>
    </figure>
  )
}

// ============================================================
// Woningtypen volgens NVM Fotowijzer
// ============================================================

interface WoningType {
  name: string
  description: string
  draw: () => JSX.Element
}

const FILL = '#dbeafe'
const STROKE = '#1e3a8a'
const HIGHLIGHT = '#fbbf24'

function huisje(x: number, hi = false) {
  return (
    <>
      {/* dak */}
      <polygon
        points={`${x},25 ${x + 30},10 ${x + 60},25`}
        fill={hi ? HIGHLIGHT : FILL}
        stroke={STROKE}
        strokeWidth="1.2"
      />
      {/* romp */}
      <rect
        x={x}
        y="25"
        width="60"
        height="35"
        fill={hi ? HIGHLIGHT : FILL}
        stroke={STROKE}
        strokeWidth="1.2"
      />
      {/* deur */}
      <rect x={x + 25} y="42" width="10" height="18" fill="#475569" />
      {/* raam */}
      <rect x={x + 8} y="33" width="10" height="8" fill="#0ea5e9" stroke={STROKE} strokeWidth="0.6" />
      <rect x={x + 42} y="33" width="10" height="8" fill="#0ea5e9" stroke={STROKE} strokeWidth="0.6" />
    </>
  )
}

const WONINGTYPES: WoningType[] = [
  {
    name: 'Vrijstaand',
    description: 'Hele woning vrij, geen aansluiting met buren.',
    draw: () => huisje(20),
  },
  {
    name: 'Twee-onder-één-kap',
    description: 'Twee woningen onder één doorlopend dak; gemeenschappelijke woningscheidende muur.',
    draw: () => (
      <>
        <polygon
          points="10,25 60,10 110,25"
          fill={FILL}
          stroke={STROKE}
          strokeWidth="1.2"
        />
        <rect x="10" y="25" width="100" height="35" fill={FILL} stroke={STROKE} strokeWidth="1.2" />
        {/* scheidingsmuur */}
        <line x1="60" y1="10" x2="60" y2="60" stroke={STROKE} strokeWidth="1.5" strokeDasharray="3 2" />
        <rect x="22" y="42" width="10" height="18" fill="#475569" />
        <rect x="78" y="42" width="10" height="18" fill="#475569" />
        <rect x="13" y="33" width="10" height="8" fill="#0ea5e9" stroke={STROKE} strokeWidth="0.6" />
        <rect x="40" y="33" width="10" height="8" fill="#0ea5e9" stroke={STROKE} strokeWidth="0.6" />
        <rect x="68" y="33" width="10" height="8" fill="#0ea5e9" stroke={STROKE} strokeWidth="0.6" />
        <rect x="95" y="33" width="10" height="8" fill="#0ea5e9" stroke={STROKE} strokeWidth="0.6" />
      </>
    ),
  },
  {
    name: 'Hoekwoning',
    description: 'Buitenste woning van een rij; één wand aan de buitenkant, andere aan buurwoning.',
    draw: () => (
      <>
        <polygon points="5,25 105,10 205,25" fill={FILL} stroke={STROKE} strokeWidth="1.2" />
        <rect x="5" y="25" width="200" height="35" fill={FILL} stroke={STROKE} strokeWidth="1.2" />
        {/* huiskap (eerste = highlight) */}
        <rect x="5" y="10" width="50" height="50" fill={HIGHLIGHT} stroke={STROKE} strokeWidth="1.2" />
        <polygon points="5,25 30,10 55,25" fill={HIGHLIGHT} stroke={STROKE} strokeWidth="1.2" />
        <line x1="55" y1="10" x2="55" y2="60" stroke={STROKE} strokeWidth="0.7" strokeDasharray="3 2" />
        <line x1="105" y1="10" x2="105" y2="60" stroke={STROKE} strokeWidth="0.7" strokeDasharray="3 2" />
        <line x1="155" y1="10" x2="155" y2="60" stroke={STROKE} strokeWidth="0.7" strokeDasharray="3 2" />
        {/* deuren */}
        <rect x="22" y="42" width="8" height="18" fill="#475569" />
        <rect x="73" y="42" width="8" height="18" fill="#475569" />
        <rect x="123" y="42" width="8" height="18" fill="#475569" />
        <rect x="173" y="42" width="8" height="18" fill="#475569" />
      </>
    ),
  },
  {
    name: 'Tussenwoning',
    description: 'Woning tussen twee buurwoningen; aan beide zijden gedeeld.',
    draw: () => (
      <>
        <polygon points="5,25 105,10 205,25" fill={FILL} stroke={STROKE} strokeWidth="1.2" />
        <rect x="5" y="25" width="200" height="35" fill={FILL} stroke={STROKE} strokeWidth="1.2" />
        {/* tussenwoning highlight */}
        <rect x="55" y="10" width="50" height="50" fill={HIGHLIGHT} stroke={STROKE} strokeWidth="1.2" />
        <polygon points="55,25 80,10 105,25" fill={HIGHLIGHT} stroke={STROKE} strokeWidth="1.2" />
        <line x1="55" y1="10" x2="55" y2="60" stroke={STROKE} strokeWidth="0.7" strokeDasharray="3 2" />
        <line x1="105" y1="10" x2="105" y2="60" stroke={STROKE} strokeWidth="0.7" strokeDasharray="3 2" />
        <line x1="155" y1="10" x2="155" y2="60" stroke={STROKE} strokeWidth="0.7" strokeDasharray="3 2" />
        {/* deuren */}
        <rect x="22" y="42" width="8" height="18" fill="#475569" />
        <rect x="73" y="42" width="8" height="18" fill="#475569" />
        <rect x="123" y="42" width="8" height="18" fill="#475569" />
        <rect x="173" y="42" width="8" height="18" fill="#475569" />
      </>
    ),
  },
  {
    name: 'Appartement / galerijflat',
    description: 'Gestapelde woningen in een verdiepingengebouw; toegang via galerij of portiek.',
    draw: () => (
      <>
        <rect x="20" y="5" width="100" height="55" fill={FILL} stroke={STROKE} strokeWidth="1.2" />
        {/* meerdere etages */}
        <line x1="20" y1="20" x2="120" y2="20" stroke={STROKE} strokeWidth="0.8" />
        <line x1="20" y1="35" x2="120" y2="35" stroke={STROKE} strokeWidth="0.8" />
        <line x1="20" y1="50" x2="120" y2="50" stroke={STROKE} strokeWidth="0.8" />
        {/* ramen — twee per verdieping */}
        {[10, 25, 40].map((y) => (
          <g key={y}>
            <rect x="30" y={y} width="8" height="7" fill="#0ea5e9" stroke={STROKE} strokeWidth="0.5" />
            <rect x="50" y={y} width="8" height="7" fill="#0ea5e9" stroke={STROKE} strokeWidth="0.5" />
            <rect x="70" y={y} width="8" height="7" fill="#0ea5e9" stroke={STROKE} strokeWidth="0.5" />
            <rect x="90" y={y} width="8" height="7" fill="#0ea5e9" stroke={STROKE} strokeWidth="0.5" />
          </g>
        ))}
        {/* ingang */}
        <rect x="60" y="50" width="14" height="10" fill="#475569" />
      </>
    ),
  },
]

export function WoningtypenDiagram() {
  return (
    <figure className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200">
      <div className="p-4 bg-white space-y-3">
        {WONINGTYPES.map((wt) => (
          <div key={wt.name} className="flex items-center gap-4">
            <svg viewBox="0 0 215 65" className="w-40 h-auto border border-slate-200 rounded">
              {wt.draw()}
            </svg>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-primary-700">{wt.name}</div>
              <div className="text-xs text-slate-600">{wt.description}</div>
            </div>
          </div>
        ))}
      </div>
      <figcaption className="px-3 py-2 text-xs text-slate-700">
        <strong>Woningtypen volgens de NVM Fotowijzer</strong> — schematisch. De gele woning toont waar het type zit in een rij.
        <div className="text-slate-400 mt-0.5">eigen tekening</div>
      </figcaption>
    </figure>
  )
}

// ============================================================
// Tijdlijn architectuurstromingen Nederland
// ============================================================

interface Stroming {
  name: string
  start: number   // jaartal
  end: number
  color: string
}

const STROMINGEN: Stroming[] = [
  { name: 'Chaletstijl', start: 1870, end: 1900, color: '#a3a3a3' },
  { name: 'Art nouveau / Jugendstil', start: 1890, end: 1910, color: '#facc15' },
  { name: 'Amsterdamse School', start: 1910, end: 1930, color: '#dc2626' },
  { name: 'Art deco', start: 1915, end: 1935, color: '#f97316' },
  { name: 'De Stijl', start: 1917, end: 1931, color: '#2563eb' },
  { name: 'Nieuwe Bouwen / Functionalisme', start: 1920, end: 1960, color: '#0891b2' },
  { name: 'Bauhaus', start: 1919, end: 1933, color: '#7c3aed' },
  { name: 'Delftse School', start: 1925, end: 1955, color: '#65a30d' },
  { name: 'Bossche School', start: 1945, end: 1970, color: '#84cc16' },
  { name: 'Structuralisme', start: 1959, end: 1990, color: '#10b981' },
  { name: 'Postmodernisme', start: 1970, end: 1995, color: '#ec4899' },
  { name: 'Organisch / Antroposofisch', start: 1980, end: 2000, color: '#a16207' },
  { name: 'Hightech', start: 1980, end: 2000, color: '#6b7280' },
  { name: 'Deconstructivisme', start: 1988, end: 2010, color: '#475569' },
  { name: 'Supermodernisme', start: 1995, end: 2025, color: '#1e293b' },
]

function TijdlijnSVG() {
  const startJaar = 1865
  const eindJaar = 2030
  const span = eindJaar - startJaar
  const w = 720
  const labelW = 200
  const barX0 = labelW
  const barW = w - labelW - 20
  const rowH = 18
  const h = STROMINGEN.length * rowH + 40

  const xFor = (j: number) => barX0 + ((j - startJaar) / span) * barW

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto bg-white">
      {/* Tijdas */}
      <line x1={barX0} y1="20" x2={barX0 + barW} y2="20" stroke="#cbd5e1" strokeWidth="1" />
      {[1880, 1900, 1920, 1940, 1960, 1980, 2000, 2020].map((j) => (
        <g key={j}>
          <line x1={xFor(j)} y1="18" x2={xFor(j)} y2={h - 8} stroke="#e2e8f0" strokeWidth="0.7" strokeDasharray="2 3" />
          <text x={xFor(j)} y="14" textAnchor="middle" fontSize="10" fill="#475569">{j}</text>
        </g>
      ))}

      {STROMINGEN.map((s, i) => {
        const y = 28 + i * rowH
        const x1 = xFor(s.start)
        const x2 = xFor(s.end)
        return (
          <g key={s.name}>
            <text x={labelW - 4} y={y + 11} textAnchor="end" fontSize="10" fill="#334155">
              {s.name}
            </text>
            <rect x={x1} y={y} width={x2 - x1} height={rowH - 4} fill={s.color} rx="2" opacity="0.85" />
          </g>
        )
      })}
    </svg>
  )
}

export function ArchitectuurTijdlijn() {
  return (
    <figure className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200">
      <div className="p-3 bg-white overflow-x-auto">
        <TijdlijnSVG />
      </div>
      <figcaption className="px-3 py-2 text-xs text-slate-700">
        <strong>Nederlandse architectuurstromingen op de tijdas</strong> — meerdere stromingen lopen tegelijkertijd; de Amsterdamse School en De Stijl ontstonden bijvoorbeeld parallel met diametraal tegenovergestelde ideeën.
        <div className="text-slate-400 mt-0.5">eigen tekening</div>
      </figcaption>
    </figure>
  )
}

// ============================================================
// De "knip" in de Wkb — voor en na 2024
// ============================================================

function WkbKnipSVG() {
  return (
    <svg viewBox="0 0 560 280" className="w-full h-auto bg-white">
      {/* Linker kolom: voor 2024 */}
      <g>
        <text x="130" y="20" textAnchor="middle" fontSize="12" fontWeight="600" fill="#1f3a5f">
          Vóór 1-1-2024
        </text>
        <text x="130" y="34" textAnchor="middle" fontSize="10" fill="#64748b">
          oude situatie
        </text>

        {/* stappen */}
        {[
          { y: 50, label: 'Bouwplan + tekeningen', sub: 'architect, constructeur' },
          { y: 105, label: 'Gemeente toetst ALLES', sub: 'omgeving + bouwtechniek (Bouwbesluit)' },
          { y: 160, label: 'Omgevingsvergunning', sub: 'door gemeente verleend' },
          { y: 215, label: 'Bouw + oplevering', sub: 'gemeente houdt toezicht' },
        ].map((step, i) => (
          <g key={i}>
            <rect x="20" y={step.y} width="220" height="42" rx="6" fill="#dbeafe" stroke="#3a6da7" strokeWidth="1.2" />
            <text x="130" y={step.y + 18} textAnchor="middle" fontSize="11" fontWeight="600" fill="#1f3a5f">
              {step.label}
            </text>
            <text x="130" y={step.y + 33} textAnchor="middle" fontSize="9" fill="#475569">
              {step.sub}
            </text>
            {i < 3 && (
              <polygon points={`130,${step.y + 45} 124,${step.y + 51} 136,${step.y + 51}`} fill="#3a6da7" />
            )}
          </g>
        ))}
      </g>

      {/* Rechter kolom: na 2024 */}
      <g>
        <text x="430" y="20" textAnchor="middle" fontSize="12" fontWeight="600" fill="#1f3a5f">
          Vanaf 1-1-2024
        </text>
        <text x="430" y="34" textAnchor="middle" fontSize="10" fill="#64748b">
          Wet kwaliteitsborging (Wkb) + Omgevingswet
        </text>

        {[
          { y: 50, label: 'Bouwplan + tekeningen', sub: 'architect, constructeur', color: 'blauw' },
          { y: 105, label: 'Gemeente toetst OMGEVING', sub: 'past het bij omgevingsplan?', color: 'blauw' },
          { y: 160, label: 'Onafhankelijke kwaliteitsborger', sub: 'toetst BOUWTECHNIEK (de "knip")', color: 'oranje' },
          { y: 215, label: 'Oplevering met dossier', sub: 'borger geeft verklaring; gemeente accordeert', color: 'oranje' },
        ].map((step, i) => (
          <g key={i}>
            <rect
              x="320"
              y={step.y}
              width="220"
              height="42"
              rx="6"
              fill={step.color === 'oranje' ? '#fed7aa' : '#dbeafe'}
              stroke={step.color === 'oranje' ? '#c2410c' : '#3a6da7'}
              strokeWidth="1.2"
            />
            <text x="430" y={step.y + 18} textAnchor="middle" fontSize="11" fontWeight="600" fill={step.color === 'oranje' ? '#7c2d12' : '#1f3a5f'}>
              {step.label}
            </text>
            <text x="430" y={step.y + 33} textAnchor="middle" fontSize="9" fill="#475569">
              {step.sub}
            </text>
            {i < 3 && (
              <polygon
                points={`430,${step.y + 45} 424,${step.y + 51} 436,${step.y + 51}`}
                fill={step.color === 'oranje' ? '#c2410c' : '#3a6da7'}
              />
            )}
          </g>
        ))}
      </g>

      {/* Centrale lijn */}
      <line x1="280" y1="40" x2="280" y2="260" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />
    </svg>
  )
}

export function WkbKnipDiagram() {
  return (
    <figure className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200">
      <div className="p-3 bg-white overflow-x-auto">
        <WkbKnipSVG />
      </div>
      <figcaption className="px-3 py-2 text-xs text-slate-700">
        <strong>De "knip" in het toezicht</strong> — sinds 1 januari 2024 toetst de gemeente alleen nog de omgevingsaspecten; de bouwtechnische toets is overgegaan naar een <span className="text-orange-700 font-medium">onafhankelijke kwaliteitsborger</span> die bij oplevering een verklaring afgeeft.
        <div className="text-slate-400 mt-0.5">eigen tekening</div>
      </figcaption>
    </figure>
  )
}

// ============================================================
// Gevolgklassen CC1, CC2, CC3
// ============================================================

function GevolgklasseSVG() {
  const cards = [
    {
      cc: 'Gevolgklasse 1',
      label: 'CC1',
      kleur: '#86efac',
      rand: '#16a34a',
      desc: 'Laag risico — bv. grondgebonden eengezinswoningen, kleine bedrijfsgebouwen',
      wkb: 'Wkb-toezicht via kwaliteitsborger (sinds 1-1-2024 verplicht)',
    },
    {
      cc: 'Gevolgklasse 2',
      label: 'CC2',
      kleur: '#fde68a',
      rand: '#ca8a04',
      desc: 'Middel risico — bv. appartementen, scholen, kantoren tot een bepaalde hoogte',
      wkb: 'Wkb invoering later in tranches (vanaf naar verwachting 2025–2028)',
    },
    {
      cc: 'Gevolgklasse 3',
      label: 'CC3',
      kleur: '#fecaca',
      rand: '#dc2626',
      desc: 'Hoog risico — bv. ziekenhuizen, hoogbouw, gebouwen voor grote groepen',
      wkb: 'Blijft (voorlopig) onder gemeentelijke toetsing — niet onder Wkb',
    },
  ]
  return (
    <svg viewBox="0 0 580 220" className="w-full h-auto bg-white">
      {cards.map((c, i) => {
        const x = 20 + i * 190
        return (
          <g key={c.label}>
            <rect x={x} y="20" width="170" height="180" rx="8" fill={c.kleur} stroke={c.rand} strokeWidth="1.5" />
            <text x={x + 85} y="48" textAnchor="middle" fontSize="14" fontWeight="700" fill="#1f2937">
              {c.cc}
            </text>
            <text x={x + 85} y="68" textAnchor="middle" fontSize="11" fill="#374151">
              ({c.label})
            </text>
            <foreignObject x={x + 10} y="80" width="150" height="120">
              <div
                style={{
                  fontSize: '10px',
                  color: '#1f2937',
                  fontFamily: 'sans-serif',
                  lineHeight: '1.3',
                }}
              >
                <div style={{ marginBottom: '6px' }}>{c.desc}</div>
                <div style={{ fontStyle: 'italic', color: '#475569' }}>{c.wkb}</div>
              </div>
            </foreignObject>
          </g>
        )
      })}
    </svg>
  )
}

export function GevolgklasseDiagram() {
  return (
    <figure className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200">
      <div className="p-3 bg-white overflow-x-auto">
        <GevolgklasseSVG />
      </div>
      <figcaption className="px-3 py-2 text-xs text-slate-700">
        <strong>Gevolgklassen onder de Wkb</strong> — risicocategorisering die bepaalt hoe streng het kwaliteitstoezicht is. De Wkb startte in 2024 met CC1 (grondgebonden woningen); CC2 en CC3 volgen later of blijven bij de gemeente.
        <div className="text-slate-400 mt-0.5">eigen tekening</div>
      </figcaption>
    </figure>
  )
}

// ============================================================
// Vitruvius-triade: bruikbaarheid, duurzaamheid, schoonheid
// ============================================================

function VitruviusSVG() {
  const pillars = [
    {
      name: 'Bruikbaarheid',
      latin: 'utilitas',
      desc: 'Het gebouw moet praktisch zijn voor de functie waarvoor het gebouwd is: indeling, doorgangen, installaties, comfort.',
      color: '#3a6da7',
    },
    {
      name: 'Duurzaamheid',
      latin: 'firmitas',
      desc: 'Het gebouw moet stevig en duurzaam zijn: constructief veilig, weerbestendig, lang houdbaar zonder grote ingrepen.',
      color: '#65a30d',
    },
    {
      name: 'Schoonheid',
      latin: 'venustas',
      desc: 'Het gebouw moet esthetisch zijn: harmonie van vorm, proportie, materiaal en context.',
      color: '#c2410c',
    },
  ]
  return (
    <svg viewBox="0 0 580 200" className="w-full h-auto bg-white">
      {pillars.map((p, i) => {
        const x = 20 + i * 190
        return (
          <g key={p.name}>
            <rect x={x} y="20" width="170" height="160" rx="8" fill={p.color} opacity="0.12" stroke={p.color} strokeWidth="1.5" />
            <text x={x + 85} y="48" textAnchor="middle" fontSize="14" fontWeight="700" fill={p.color}>
              {p.name}
            </text>
            <text x={x + 85} y="65" textAnchor="middle" fontSize="10" fontStyle="italic" fill="#64748b">
              ({p.latin})
            </text>
            <foreignObject x={x + 12} y="78" width="146" height="100">
              <div style={{ fontSize: '11px', color: '#1f2937', lineHeight: '1.4', fontFamily: 'sans-serif' }}>
                {p.desc}
              </div>
            </foreignObject>
          </g>
        )
      })}
    </svg>
  )
}

export function VitruviusDiagram() {
  return (
    <figure className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200">
      <div className="p-3 bg-white">
        <VitruviusSVG />
      </div>
      <figcaption className="px-3 py-2 text-xs text-slate-700">
        <strong>De Vitruvius-triade</strong> — drie eeuwenoude kwaliteitseisen die nog steeds gelden: een gebouw moet tegelijk bruikbaar, duurzaam én mooi zijn. Geformuleerd door de Romein Vitruvius in <em>De architectura</em> (~25 v.Chr.).
        <div className="text-slate-400 mt-0.5">eigen tekening</div>
      </figcaption>
    </figure>
  )
}

// ============================================================
// Schematische hoofdopbouw (doorsnede)
// ============================================================

function HoofdopbouwSVG() {
  return (
    <svg viewBox="0 0 460 320" className="w-full h-auto bg-white">
      {/* Maaiveld */}
      <line x1="20" y1="220" x2="440" y2="220" stroke="#475569" strokeWidth="1.5" strokeDasharray="4 2" />
      <text x="445" y="225" fontSize="9" fill="#475569">maaiveld</text>

      {/* Grond onder maaiveld */}
      <pattern id="grond-hoofdopbouw" patternUnits="userSpaceOnUse" width="6" height="6">
        <circle cx="1.5" cy="1.5" r="0.4" fill="#78350f" />
        <circle cx="4.5" cy="4.5" r="0.4" fill="#78350f" />
      </pattern>
      <rect x="20" y="220" width="420" height="85" fill="url(#grond-hoofdopbouw)" opacity="0.4" />

      {/* Kelder */}
      <rect x="80" y="220" width="200" height="60" fill="#e2e8f0" stroke="#475569" strokeWidth="1.5" />
      <text x="180" y="255" textAnchor="middle" fontSize="11" fontWeight="600" fill="#1f2937">Kelder</text>

      {/* Fundering — strepen onder kelder en onder muren */}
      <g stroke="#1f2937" strokeWidth="2" fill="#cbd5e1">
        <rect x="60" y="280" width="240" height="20" />
        <rect x="300" y="280" width="60" height="20" />
        <rect x="370" y="280" width="60" height="20" />
      </g>
      <text x="380" y="294" fontSize="9" fill="#1f2937" textAnchor="middle">fundering</text>

      {/* Opbouw — twee bouwlagen */}
      <g stroke="#1f2937" strokeWidth="1.5" fill="#fde68a">
        {/* Begane grond */}
        <rect x="60" y="160" width="340" height="60" />
        {/* Verdieping */}
        <rect x="60" y="100" width="340" height="60" />
      </g>

      {/* Ramen — bg */}
      <g fill="#0ea5e9" stroke="#1f2937" strokeWidth="0.8">
        <rect x="90" y="180" width="30" height="25" />
        <rect x="150" y="180" width="30" height="25" />
        <rect x="280" y="180" width="30" height="25" />
        <rect x="340" y="180" width="30" height="25" />
      </g>
      {/* Ramen verdieping */}
      <g fill="#0ea5e9" stroke="#1f2937" strokeWidth="0.8">
        <rect x="90" y="115" width="30" height="30" />
        <rect x="150" y="115" width="30" height="30" />
        <rect x="280" y="115" width="30" height="30" />
        <rect x="340" y="115" width="30" height="30" />
      </g>
      {/* Voordeur */}
      <rect x="215" y="180" width="22" height="38" fill="#475569" stroke="#1f2937" strokeWidth="0.8" />

      <text x="230" y="195" textAnchor="middle" fontSize="11" fontWeight="600" fill="#1f2937">Opbouw</text>
      <text x="230" y="135" textAnchor="middle" fontSize="11" fontWeight="600" fill="#1f2937">Opbouw</text>

      {/* Dak (zadeldak) */}
      <polygon points="60,100 230,30 400,100" fill="#dc2626" stroke="#1f2937" strokeWidth="1.5" opacity="0.7" />
      <text x="230" y="75" textAnchor="middle" fontSize="11" fontWeight="600" fill="#fff">Dak</text>

      {/* Installaties — pijp door het gebouw */}
      <g stroke="#0ea5e9" strokeWidth="2.5" fill="none">
        <line x1="40" y1="80" x2="40" y2="280" />
      </g>
      <text x="35" y="290" textAnchor="end" fontSize="9" fill="#0ea5e9">installaties</text>

      {/* Afwerking arrow */}
      <text x="405" y="170" fontSize="9" fill="#1f2937">afwerking</text>
      <line x1="403" y1="170" x2="395" y2="170" stroke="#1f2937" strokeWidth="1" />
    </svg>
  )
}

export function HoofdopbouwDiagram() {
  return (
    <figure className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200">
      <div className="p-3 bg-white">
        <HoofdopbouwSVG />
      </div>
      <figcaption className="px-3 py-2 text-xs text-slate-700">
        <strong>Hoofdopbouw van een gebouw</strong> in doorsnede — van onder naar boven: kelder + fundering, dragende opbouw (muren en verdiepingsvloeren), dak. Installaties lopen verticaal door alle lagen; de afwerking zit aan de binnenkant van elke laag.
        <div className="text-slate-400 mt-0.5">eigen tekening</div>
      </figcaption>
    </figure>
  )
}

// ============================================================
// Sterkteleer — krachtenpatronen
// ============================================================

function SterkteleerSVG() {
  return (
    <svg viewBox="0 0 580 380" className="w-full h-auto bg-white">
      {/* Frame 1: trek vs druk in een balk */}
      <g>
        <text x="20" y="20" fontSize="11" fontWeight="600" fill="#1f2937">a) Trek- en drukkrachten in een balk</text>

        {/* Trek */}
        <rect x="40" y="40" width="180" height="22" fill="#fef3c7" stroke="#92400e" strokeWidth="1" />
        <line x1="25" y1="51" x2="38" y2="51" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arrL)" />
        <line x1="235" y1="51" x2="222" y2="51" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arrL)" />
        <text x="130" y="56" textAnchor="middle" fontSize="9" fill="#1f2937">trek (uit elkaar trekken)</text>

        {/* Druk */}
        <rect x="40" y="78" width="180" height="22" fill="#fef3c7" stroke="#92400e" strokeWidth="1" />
        <line x1="20" y1="89" x2="38" y2="89" stroke="#0369a1" strokeWidth="2" markerEnd="url(#arrR)" />
        <line x1="240" y1="89" x2="222" y2="89" stroke="#0369a1" strokeWidth="2" markerEnd="url(#arrL)" />
        <text x="130" y="93" textAnchor="middle" fontSize="9" fill="#1f2937">druk (samenpersen)</text>
      </g>

      {/* Frame 2: balk op twee opleggingen */}
      <g>
        <text x="300" y="20" fontSize="11" fontWeight="600" fill="#1f2937">b) Overspanning op twee opleggingen</text>

        {/* belasting pijlen */}
        {[340, 380, 420, 460, 500].map((x) => (
          <line key={x} x1={x} y1="35" x2={x} y2="60" stroke="#0369a1" strokeWidth="1.5" markerEnd="url(#arrD)" />
        ))}
        <text x="420" y="32" textAnchor="middle" fontSize="9" fill="#0369a1">belasting</text>

        {/* balk */}
        <rect x="320" y="65" width="200" height="14" fill="#cbd5e1" stroke="#1f2937" strokeWidth="1.2" />

        {/* opleggingen */}
        <polygon points="325,79 335,99 315,99" fill="#475569" />
        <polygon points="515,79 525,99 505,99" fill="#475569" />

        {/* reactiekrachten */}
        <line x1="325" y1="110" x2="325" y2="100" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrU)" />
        <line x1="515" y1="110" x2="515" y2="100" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrU)" />
        <text x="325" y="120" textAnchor="middle" fontSize="9" fill="#16a34a">R₁</text>
        <text x="515" y="120" textAnchor="middle" fontSize="9" fill="#16a34a">R₂</text>

        {/* maatlijn overspanning */}
        <line x1="325" y1="135" x2="515" y2="135" stroke="#1f2937" strokeWidth="0.7" />
        <line x1="325" y1="132" x2="325" y2="138" stroke="#1f2937" strokeWidth="0.7" />
        <line x1="515" y1="132" x2="515" y2="138" stroke="#1f2937" strokeWidth="0.7" />
        <text x="420" y="148" textAnchor="middle" fontSize="9" fill="#1f2937">overspanning</text>
      </g>

      {/* Frame 3: uitkraging (balkon) */}
      <g>
        <text x="20" y="180" fontSize="11" fontWeight="600" fill="#1f2937">c) Uitkraging (cantilever, bv. balkon)</text>

        {/* muur */}
        <rect x="40" y="200" width="20" height="120" fill="#7a5236" />
        {/* uitkragende balk */}
        <rect x="60" y="240" width="140" height="14" fill="#cbd5e1" stroke="#1f2937" strokeWidth="1.2" />

        {/* belasting */}
        {[90, 130, 170].map((x) => (
          <line key={x} x1={x} y1="218" x2={x} y2="238" stroke="#0369a1" strokeWidth="1.5" markerEnd="url(#arrD)" />
        ))}
        <text x="130" y="215" textAnchor="middle" fontSize="9" fill="#0369a1">belasting</text>

        {/* doorbuiging (gestreepte gebogen lijn) */}
        <path d="M 60 247 Q 130 252 200 270" fill="none" stroke="#dc2626" strokeWidth="1" strokeDasharray="2 2" />
        <text x="200" y="280" fontSize="9" fill="#dc2626">doorbuiging</text>

        {/* moment bij inklemming */}
        <text x="40" y="335" fontSize="9" fill="#1f2937">grootste moment</text>
        <text x="40" y="346" fontSize="9" fill="#1f2937">bij inklemming →</text>
      </g>

      {/* Frame 4: scheurvorming */}
      <g>
        <text x="300" y="180" fontSize="11" fontWeight="600" fill="#1f2937">d) Constructieve schade — gevelscheuren</text>

        {/* gevel */}
        <rect x="320" y="200" width="200" height="140" fill="#fef3c7" stroke="#1f2937" strokeWidth="1.2" />

        {/* ramen */}
        <rect x="345" y="225" width="40" height="35" fill="#0ea5e9" stroke="#1f2937" strokeWidth="0.8" />
        <rect x="455" y="225" width="40" height="35" fill="#0ea5e9" stroke="#1f2937" strokeWidth="0.8" />
        <rect x="345" y="285" width="40" height="35" fill="#0ea5e9" stroke="#1f2937" strokeWidth="0.8" />
        <rect x="455" y="285" width="40" height="35" fill="#0ea5e9" stroke="#1f2937" strokeWidth="0.8" />

        {/* horizontale spatkrachtscheuren boven kozijnen */}
        <path d="M 345 225 L 385 222 L 385 225" fill="none" stroke="#dc2626" strokeWidth="1.5" />
        <path d="M 455 225 L 495 220 L 495 225" fill="none" stroke="#dc2626" strokeWidth="1.5" />

        {/* zettingsscheur diagonaal */}
        <path d="M 385 260 L 410 280 L 430 305 L 455 320" fill="none" stroke="#dc2626" strokeWidth="1.5" />

        <text x="400" y="358" textAnchor="middle" fontSize="9" fill="#dc2626">horizontale + diagonale scheuren</text>
      </g>

      {/* Pijl-definities */}
      <defs>
        <marker id="arrL" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
          <path d="M 0 0 L 10 3 L 0 6 z" fill="#dc2626" />
        </marker>
        <marker id="arrR" markerWidth="10" markerHeight="10" refX="10" refY="3" orient="auto">
          <path d="M 10 0 L 0 3 L 10 6 z" fill="#0369a1" />
        </marker>
        <marker id="arrD" markerWidth="8" markerHeight="8" refX="4" refY="8" orient="auto">
          <path d="M 0 0 L 4 8 L 8 0 z" fill="#0369a1" />
        </marker>
        <marker id="arrU" markerWidth="8" markerHeight="8" refX="4" refY="0" orient="auto">
          <path d="M 0 8 L 4 0 L 8 8 z" fill="#16a34a" />
        </marker>
      </defs>
    </svg>
  )
}

export function SterkteleerDiagram() {
  return (
    <figure className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200">
      <div className="p-3 bg-white overflow-x-auto">
        <SterkteleerSVG />
      </div>
      <figcaption className="px-3 py-2 text-xs text-slate-700">
        <strong>Krachtenpatronen in bouwkundige constructies</strong> — (a) trek vs. druk, (b) een balk op twee opleggingen met overspanning en reactiekrachten, (c) een uitkraging zoals een balkon met inklemmingsmoment, en (d) typische scheurpatronen in een gevel (horizontaal door spatkrachten, diagonaal door zetting).
        <div className="text-slate-400 mt-0.5">eigen tekening</div>
      </figcaption>
    </figure>
  )
}

// ============================================================
// Grondsoorten — typisch Nederlands bodemprofiel met heipaal
// ============================================================

function GrondsoortenSVG() {
  return (
    <svg viewBox="0 0 500 320" className="w-full h-auto bg-white">
      {/* Maaiveld */}
      <text x="250" y="14" textAnchor="middle" fontSize="11" fontWeight="600" fill="#1f2937">
        Typisch West-Nederlands bodemprofiel
      </text>

      {/* Humus / cultuurlaag */}
      <rect x="40" y="30" width="420" height="20" fill="#78350f" opacity="0.7" />
      <text x="48" y="44" fontSize="10" fill="#fff">humus / cultuurlaag (~0,3 m)</text>

      {/* Klei (boven) */}
      <pattern id="klei-pattern" patternUnits="userSpaceOnUse" width="8" height="8">
        <rect width="8" height="8" fill="#ca8a04" />
        <line x1="0" y1="0" x2="8" y2="8" stroke="#78350f" strokeWidth="0.5" />
        <line x1="8" y1="0" x2="0" y2="8" stroke="#78350f" strokeWidth="0.5" />
      </pattern>
      <rect x="40" y="50" width="420" height="50" fill="url(#klei-pattern)" />
      <text x="48" y="78" fontSize="10" fill="#fff" fontWeight="600">klei — slecht draagkrachtig, slecht waterdoorlatend</text>

      {/* Veen */}
      <pattern id="veen-pattern" patternUnits="userSpaceOnUse" width="10" height="10">
        <rect width="10" height="10" fill="#451a03" />
        <circle cx="3" cy="3" r="1" fill="#92400e" />
        <circle cx="7" cy="7" r="1" fill="#92400e" />
      </pattern>
      <rect x="40" y="100" width="420" height="50" fill="url(#veen-pattern)" />
      <text x="48" y="128" fontSize="10" fill="#fff" fontWeight="600">veen — zeer slap, vervormt bij belasting</text>

      {/* Klei (onder) */}
      <rect x="40" y="150" width="420" height="40" fill="url(#klei-pattern)" />
      <text x="48" y="173" fontSize="10" fill="#fff" fontWeight="600">klei (tweede laag)</text>

      {/* Zand — draagkrachtig */}
      <pattern id="zand-pattern" patternUnits="userSpaceOnUse" width="6" height="6">
        <rect width="6" height="6" fill="#fef08a" />
        <circle cx="1.5" cy="1.5" r="0.4" fill="#78350f" />
        <circle cx="4.5" cy="4.5" r="0.4" fill="#78350f" />
      </pattern>
      <rect x="40" y="190" width="420" height="100" fill="url(#zand-pattern)" />
      <text x="48" y="245" fontSize="11" fill="#1f2937" fontWeight="700">zand — draagkrachtige laag (Pleistoceen)</text>
      <text x="48" y="260" fontSize="9" fill="#1f2937">heipalen worden hierop afgeslagen</text>

      {/* Grondwaterstand */}
      <line x1="40" y1="75" x2="460" y2="75" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="6 3" />
      <text x="465" y="78" fontSize="9" fill="#2563eb">grondwaterstand</text>

      {/* Heipaal */}
      <g>
        <rect x="350" y="35" width="14" height="220" fill="#1f2937" stroke="#000" strokeWidth="0.8" />
        <polygon points="350,255 364,255 357,270" fill="#1f2937" />
        <text x="370" y="40" fontSize="9" fill="#1f2937">heipaal</text>
        <text x="370" y="51" fontSize="9" fontStyle="italic" fill="#475569">(beton of hout)</text>
      </g>

      {/* Pijl van paal naar zandlaag */}
      <line x1="357" y1="270" x2="357" y2="285" stroke="#16a34a" strokeWidth="1.5" markerEnd="url(#arrDgrond)" />
      <text x="370" y="285" fontSize="9" fill="#16a34a">op stuit</text>

      <defs>
        <marker id="arrDgrond" markerWidth="8" markerHeight="8" refX="4" refY="8" orient="auto">
          <path d="M 0 0 L 4 8 L 8 0 z" fill="#16a34a" />
        </marker>
      </defs>
    </svg>
  )
}

export function GrondsoortenDiagram() {
  return (
    <figure className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200">
      <div className="p-3 bg-white overflow-x-auto">
        <GrondsoortenSVG />
      </div>
      <figcaption className="px-3 py-2 text-xs text-slate-700">
        <strong>Typisch West-Nederlands bodemprofiel</strong> — boven slappe lagen klei en veen, daaronder een draagkrachtige zandlaag (Pleistoceen) waarop heipalen worden afgeslagen ("op stuit"). De grondwaterstand bepaalt waar houten palen mogen liggen — boven die lijn rotten ze.
        <div className="text-slate-400 mt-0.5">eigen tekening</div>
      </figcaption>
    </figure>
  )
}

export const VERBANDEN_DIAGRAM = {
  halfsteensverband,
  klezorenverband,
  staandVerband,
  kruisverband,
  vlaamsVerband,
  koppenverband,
} as const

export const BOGEN_DIAGRAM = {
  segmentboog,
  ellipsboog,
  rondboog,
  spitsboog,
} as const

export type VerbandKey = keyof typeof VERBANDEN_DIAGRAM
export type BoogKey = keyof typeof BOGEN_DIAGRAM

export function Verband({ name }: { name: VerbandKey }) {
  const spec = VERBANDEN_DIAGRAM[name]
  return (
    <figure className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200">
      <div className="p-3 bg-white">
        <VerbandSVG spec={spec} />
      </div>
      <figcaption className="px-3 py-2 text-xs text-slate-700">
        <strong>{spec.title}</strong> — {spec.description}
        <div className="text-slate-400 mt-0.5">eigen tekening</div>
      </figcaption>
    </figure>
  )
}

export function Boog({ name }: { name: BoogKey }) {
  const spec = BOGEN_DIAGRAM[name]
  return (
    <figure className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200">
      <div className="p-3 bg-white">
        <BoogSVG spec={spec} />
      </div>
      <figcaption className="px-3 py-2 text-xs text-slate-700">
        <strong>{spec.title}</strong> — {spec.description}
        <div className="text-slate-400 mt-0.5">eigen tekening</div>
      </figcaption>
    </figure>
  )
}
