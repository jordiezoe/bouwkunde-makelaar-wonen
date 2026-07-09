import type { SectionInfo, Topic } from '../types/content'
import type { Progress } from '../lib/storage'
import { isSectionExamPassed } from '../lib/storage'
import { topicMetas } from './topicMetas'

export { topicMetas } from './topicMetas'
export type { TopicMeta } from './topicMetas'

export const sections: SectionInfo[] = [
  {
    id: 'A',
    title: 'A · Algemeen',
    description:
      'Bouwproces, bouwkundige tekeningen en bestekken, architectuurstromingen, Bbl en Omgevingswet.',
  },
  {
    id: 'B',
    title: 'B · Constructieve opbouw',
    description:
      'Sterkteleer, fundering, steen, beton, staal, hout, kozijnen, vloeren, kappen, trappen, kunststoffen en isolatie.',
  },
  {
    id: 'C',
    title: 'C · Afwerking en installatie',
    description:
      'Riolering, water, gas, elektra, zon, verwarming, klimaat, brand, ventilatie, glas, afwerkingen, natuursteen.',
  },
  {
    id: 'D',
    title: 'D · Kwaliteit, onderhoud, duurzaamheid',
    description:
      'Onderhoudsplanning, MJOP, bouwkundige kwaliteit, bouwfysica, duurzaamheid en milieu.',
  },
  {
    id: 'BL',
    title: 'Besteklezen',
    description:
      'Leer een bestek en bouwtekeningen lezen: opbouw, tekeningsoorten, arceringen, symbolen, maatvoering, kozijnstaat en installatietekeningen — met de echte examenbijlagen.',
  },
]

export interface TopicStub {
  code: string
  section: 'A' | 'B' | 'C' | 'D'
  title: string
  chapterRef?: string
}

export const topicStubs: TopicStub[] = []

export const dossierOrder: string[] = [
  'A.1', 'A.2.1', 'A.2.2', 'A.3',
  'B.1', 'B.2', 'B.3', 'B.4', 'B.5',
  'B.6', 'B.7', 'B.8', 'B.9', 'B.10', 'B.11', 'B.12', 'B.13', 'B.14', 'B.15', 'B.16',
  'C.1', 'C.2', 'C.3', 'C.4', 'C.5', 'C.6', 'C.7', 'C.8', 'C.9', 'C.10', 'C.11', 'C.12', 'C.13', 'C.14',
  'D.1', 'D.2', 'D.3', 'D.4',
  // Besteklezen — los leertraject
  'BL.1', 'BL.2', 'BL.3', 'BL.4', 'BL.5', 'BL.6', 'BL.7', 'BL.8',
]

/**
 * Mutable topic store — populated on demand by loadSection().
 * Screens should only access this after the relevant section(s) are loaded.
 */
export const topics: Topic[] = []
const topicByCode = new Map<string, Topic>()
const loadedSections = new Set<string>()

export type SectionKey = 'A' | 'B' | 'C' | 'D' | 'BL'

const sectionLoaders: Record<SectionKey, () => Promise<{ sectionTopics: Topic[] }>> = {
  A: () => import('./section_A'),
  B: () => import('./section_B'),
  C: () => import('./section_C'),
  D: () => import('./section_D'),
  BL: () => import('./besteklezen'),
}

export function isSectionLoaded(section: string): boolean {
  return loadedSections.has(section)
}

export async function loadSection(section: SectionKey): Promise<void> {
  if (loadedSections.has(section)) return
  const mod = await sectionLoaders[section]()
  for (const t of mod.sectionTopics) {
    topicByCode.set(t.code, t)
    topics.push(t)
  }
  loadedSections.add(section)
}

export async function loadAllSections(): Promise<void> {
  await Promise.all((['A', 'B', 'C', 'D', 'BL'] as SectionKey[]).map(loadSection))
}

export function getTopic(code: string): Topic | undefined {
  return topicByCode.get(code)
}

export function getStub(code: string): TopicStub | undefined {
  return topicStubs.find((t) => t.code === code)
}

export function getNextTopicCode(currentCode: string): string | undefined {
  const idx = dossierOrder.indexOf(currentCode)
  if (idx < 0 || idx + 1 >= dossierOrder.length) return undefined
  return dossierOrder[idx + 1]
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function isUnlocked(_code: string, _passedTopics: Set<string>): boolean {
  return true
}

const SECTION_ORDER = ['A', 'B', 'C', 'D'] as const

export function isSectionUnlocked(
  section: import('../types/content').Section,
  progress: Progress,
): boolean {
  // Besteklezen is een los leertraject en staat altijd open.
  if (section === 'BL') return true
  const idx = SECTION_ORDER.indexOf(section as 'A' | 'B' | 'C' | 'D')
  if (idx <= 0) return true

  const prevSection = SECTION_ORDER[idx - 1]
  if (isSectionExamPassed(progress, prevSection)) return true

  // Use topicMetas — works even before sections are loaded in memory
  return topicMetas.some(
    (t) => t.section === section && progress.topics[t.code] !== undefined,
  )
}

export function isNextInOrder(code: string, passedTopics: Set<string>): boolean {
  const nextUnfinished = dossierOrder.find((c) => !passedTopics.has(c))
  return nextUnfinished === code
}
