export type Section = 'A' | 'B' | 'C' | 'D'

export type Niveau = 'BT1' | 'BT2'

export type Bloom =
  | 'Kennis'
  | 'Begrip'
  | 'Toepassen'
  | 'Analyseren'
  | 'Evalueren'
  | 'Synthese'

export interface Toetsterm {
  code: string
  text: string
  niveau: Niveau
  bloom: Bloom
  metDrawing?: boolean
}

export type Question =
  | MultipleChoiceQuestion
  | MultiSelectQuestion
  | OpenQuestion
  | TrueFalseQuestion

interface QuestionBase {
  id: string
  toetstermCode: string
  prompt: string
  explanation?: string
  /** Optionele illustratie bij de vraag. */
  image?: LessonImage
}

export interface MultipleChoiceQuestion extends QuestionBase {
  type: 'mc'
  options: string[]
  correctIndex: number
}

/** Meerkeuze waarbij meerdere antwoorden juist zijn (selecteer-alles-dat-klopt). */
export interface MultiSelectQuestion extends QuestionBase {
  type: 'multi'
  options: string[]
  /** Indices van álle juiste opties (minimaal 2). */
  correctIndices: number[]
}

export interface OpenQuestion extends QuestionBase {
  type: 'open'
  acceptableAnswers: string[]
}

export interface TrueFalseQuestion extends QuestionBase {
  type: 'tf'
  correct: boolean
}

export interface LessonImage {
  src: string                           // pad in /public, bv. /figs/B_5/kruisverband.png
  caption: string
  source?: string                       // 'Lesboek hfd. 8' of URL
  width?: 'sm' | 'md' | 'lg' | 'full'   // visuele grootte
}

export type DiagramRef =
  | { type: 'verband'; name: 'halfsteensverband' | 'klezorenverband' | 'staandVerband' | 'kruisverband' | 'vlaamsVerband' | 'koppenverband' }
  | { type: 'boog'; name: 'segmentboog' | 'ellipsboog' | 'rondboog' | 'spitsboog' }
  | { type: 'perceel' }
  | { type: 'bouwfasen' }
  | { type: 'arceringen' }
  | { type: 'plattegrondDragend' }
  | { type: 'woningtypen' }
  | { type: 'architectuurTijdlijn' }
  | { type: 'wkbKnip' }
  | { type: 'gevolgklasse' }
  | { type: 'vitruvius' }
  | { type: 'hoofdopbouw' }
  | { type: 'sterkteleer' }
  | { type: 'grondsoorten' }

export interface LessonSection {
  heading: string
  body: string                          // markdown-light: **, *, `, lijsten, lege regels
  images?: LessonImage[]
  /** Zelfgetekende diagrammen die naast de boekplaatjes worden getoond. */
  diagrams?: DiagramRef[]
  /** Toetstermcodes die deze sectie behandelt (voor klik-door uit foutenoverzicht). */
  toetstermCodes?: string[]
}

export interface Topic {
  code: string
  section: Section
  title: string
  blurb: string
  chapterRef?: string
  /** De eigenlijke lesinhoud, gestructureerd in secties. */
  lessonSections: LessonSection[]
  toetstermen: Toetsterm[]
  questions: Question[]
  /** Minimaal percentage goede antwoorden om het onderwerp af te ronden. */
  passingScore?: number                 // default 0.8
  /** Optionele spelvormen tussen lesstof en quiz. */
  games?: Game[]
  /** Optionele begrippentrainer — moet 100% behaald voor quiz beschikbaar. */
  terms?: TermEntry[]
}

/** Begripen voor de trainer: term + definitie (en eventuele aliassen). */
export interface TermEntry {
  term: string
  definition: string
  /** Synoniemen of varianten die ook correct zijn (alleen voor typ-modus). */
  aliases?: string[]
}

// ---------- Spelvormen ----------

export type Game =
  | GapFillGame
  | SortGame
  | SequenceGame
  | MatchingGame

interface GameBase {
  id: string
  title: string
  description?: string
}

/** Gap-fill: tekst met {{ }} placeholders en aanklikbare/sleepbare opties. */
export interface GapFillGame extends GameBase {
  type: 'gapfill'
  /** Tekst met {{antwoord}} placeholders — antwoord is het correcte woord. */
  text: string
  /** Extra afleider-woorden om het lastiger te maken. */
  distractors?: string[]
}

/** Sort: sleep items in de juiste categorie. */
export interface SortGame extends GameBase {
  type: 'sort'
  categories: string[]
  items: SortItem[]
}

export interface SortItem {
  label: string
  /** Naam van de categorie waarin dit item thuishoort. */
  category: string
}

/** Sequence: zet de items in de juiste volgorde. */
export interface SequenceGame extends GameBase {
  type: 'sequence'
  /** Items in de correcte volgorde — worden bij het spel gehusseld. */
  items: string[]
}

/** Matching: koppel linkerterm aan rechterterm (memorie-stijl). */
export interface MatchingGame extends GameBase {
  type: 'matching'
  pairs: MatchPair[]
}

export interface MatchPair {
  left: string
  right: string
}

export interface SectionInfo {
  id: Section
  title: string
  description: string
}
