import { topics } from '../content'
import type { Niveau, Question, Section } from '../types/content'
import { shuffleQuestionOptions } from './shuffleOptions'

/**
 * Examen-engine voor de sectie "BT1 en BT2 examen".
 *
 * Nagebouwd op de echte SVMNIVO/VastgoedCert "Bouwkunde BT1-2 Proeftoets":
 *  - vragen zijn gegroepeerd in vier BLOKKEN op dossiercategorie (A/B/C/D),
 *    elk met een korte blokintroductie en een eigen deelscore;
 *  - per sessie wordt maximaal één vraag per toetsterm getrokken uit een
 *    gerandomiseerde pool, zodat elke sessie anders is;
 *  - BT1 toetst kennen/herkennen, BT2 toepassen/uitleggen/analyseren; de
 *    eindsimulatie ('BT1-2') combineert beide, net als de echte proeftoets;
 *  - meerkeuze (mc) én meervoudige keuze (multi, met partiële punten).
 */

export type ExamMode = 'BT1' | 'BT2' | 'BT1-2'

export type ExamQuestion = MultipleChoiceQ | MultiSelectQ
type MultipleChoiceQ = Extract<Question, { type: 'mc' }>
type MultiSelectQ = Extract<Question, { type: 'multi' }>

export interface ExamItem {
  question: ExamQuestion
  topicCode: string
  topicTitle: string
  section: Section
}

export interface ExamBlock {
  section: Section
  label: string
  intro: string
  items: ExamItem[]
}

export const SECTION_LABELS: Record<Section, string> = {
  A: 'Algemeen',
  B: 'Constructieve opbouw',
  C: 'Afwerking en installaties',
  D: 'Kwaliteitsbeoordeling, onderhoud en beheer',
}

/** Korte blokintroductie zoals in de echte proeftoets vóór elk blok verschijnt. */
export const SECTION_INTROS: Record<Section, string> = {
  A: 'Dit blok gaat over het bouwproces, bouwkundige tekeningen en bestekken, woningtypen, architectuurstromingen en de regelgeving (Bbl en Omgevingswet).',
  B: 'Dit blok gaat over de constructieve opbouw: sterkteleer, funderingen, steen, beton, staal, hout, kozijnen, vloeren, daken, trappen, kunststoffen en isolatie.',
  C: 'Dit blok gaat over afwerking en installaties: riolering, water, gas, elektra, verwarming, ventilatie, brand, glas, afwerkingen en natuursteen.',
  D: 'Dit blok gaat over kwaliteitsbeoordeling, onderhoud, bouwfysica en duurzaamheid — vaak in de vorm van een casus.',
}

/**
 * Aantal vragen per blok, afgeleid uit de geobserveerde proeftoets
 * (A≈5, B≈18, C≈14, D≈13 → ~50). Voor de losse niveau-oefenmodi houden we
 * dezelfde verhouding aan, geput uit alleen dat niveau.
 */
const BLOCK_TARGETS: Record<Section, number> = { A: 5, B: 18, C: 14, D: 13 }
const SECTION_ORDER: Section[] = ['A', 'B', 'C', 'D']

/** code → niveau, opgebouwd uit de toetstermen van alle geladen onderwerpen. */
function buildNiveauMap(): Map<string, Niveau> {
  const m = new Map<string, Niveau>()
  for (const t of topics) for (const tt of t.toetstermen ?? []) m.set(tt.code, tt.niveau)
  return m
}

/** Zoek het niveau van een vraag via haar toetstermcode (met prefix-fallback). */
function niveauOf(code: string, map: Map<string, Niveau>): Niveau | undefined {
  if (map.has(code)) return map.get(code)
  // prefix-match: langste toetstermcode die een prefix is van de vraagcode
  let best: { code: string; niveau: Niveau } | undefined
  for (const [c, n] of map) {
    if (code.startsWith(c) && (!best || c.length > best.code.length)) best = { code: c, niveau: n }
  }
  return best?.niveau
}

function isExamQuestion(q: Question): q is ExamQuestion {
  return q.type === 'mc' || q.type === 'multi'
}

function pickRandom<T>(arr: T[], n: number): T[] {
  const copy = [...arr]
  const out: T[] = []
  while (out.length < n && copy.length > 0) {
    out.push(copy.splice(Math.floor(Math.random() * copy.length), 1)[0])
  }
  return out
}

function shuffle<T>(arr: T[]): T[] {
  return arr
    .map((v) => ({ v, s: Math.random() }))
    .sort((a, b) => a.s - b.s)
    .map((x) => x.v)
}

/**
 * Bouw een examen voor de gekozen modus.
 * Per blok: groepeer op toetstermcode, kies willekeurig één vraag per code,
 * trek daaruit het streefaantal en hussel.
 */
export function buildBTExam(mode: ExamMode): ExamBlock[] {
  const niveauMap = buildNiveauMap()

  const wantsNiveau = (q: Question): boolean => {
    if (mode === 'BT1-2') return true
    const n = niveauOf(q.toetstermCode, niveauMap)
    // Onbekend niveau meenemen in beide losse modi (liever iets extra dan verlies).
    return n === undefined || n === mode
  }

  const blocks: ExamBlock[] = []
  for (const section of SECTION_ORDER) {
    const sectionTopics = topics.filter((t) => t.section === section)

    // Groepeer geschikte vragen per toetstermcode.
    const byCode = new Map<string, ExamItem[]>()
    for (const t of sectionTopics) {
      for (const q of t.questions) {
        if (!isExamQuestion(q) || !wantsNiveau(q)) continue
        const item: ExamItem = {
          question: q,
          topicCode: t.code,
          topicTitle: t.title,
          section,
        }
        const arr = byCode.get(q.toetstermCode)
        if (arr) arr.push(item)
        else byCode.set(q.toetstermCode, [item])
      }
    }

    // Eén vraag per toetsterm, dan streefaantal trekken.
    const onePerCode = [...byCode.values()].map((items) => items[Math.floor(Math.random() * items.length)])
    const target = Math.min(BLOCK_TARGETS[section], onePerCode.length)
    const picked = pickRandom(onePerCode, target).map((it) => ({
      ...it,
      question: shuffleQuestionOptions(it.question) as ExamQuestion,
    }))

    blocks.push({
      section,
      label: SECTION_LABELS[section],
      intro: SECTION_INTROS[section],
      items: shuffle(picked),
    })
  }

  return blocks
}

// ---------- Nakijken ----------

export type Verdict = 'goed' | 'deels' | 'fout' | 'leeg'

export interface Answer {
  /** mc: gekozen index. multi: gekozen indices. */
  mc?: number
  multi?: number[]
}

/** Score-fractie (0..1) en oordeel voor één vraag. */
export function gradeItem(q: ExamQuestion, answer: Answer | undefined): { fraction: number; verdict: Verdict } {
  if (!answer || (answer.mc === undefined && (answer.multi === undefined || answer.multi.length === 0))) {
    return { fraction: 0, verdict: 'leeg' }
  }
  if (q.type === 'mc') {
    const ok = answer.mc === q.correctIndex
    return { fraction: ok ? 1 : 0, verdict: ok ? 'goed' : 'fout' }
  }
  // multi: (juist gekozen − onterecht gekozen) / aantal juiste, minimaal 0.
  const correct = new Set(q.correctIndices)
  const chosen = answer.multi ?? []
  let good = 0
  let bad = 0
  for (const i of chosen) (correct.has(i) ? good++ : bad++)
  const fraction = Math.max(0, (good - bad) / q.correctIndices.length)
  const verdict: Verdict = fraction >= 1 ? 'goed' : fraction <= 0 ? 'fout' : 'deels'
  return { fraction: Math.min(1, fraction), verdict }
}

export const MODE_LABELS: Record<ExamMode, string> = {
  BT1: 'BT1 — kennen en herkennen',
  BT2: 'BT2 — toepassen en analyseren',
  'BT1-2': 'BT1-2 eindsimulatie',
}
