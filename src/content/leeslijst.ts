/**
 * Leeslijst — welke samenvatting-hoofdstukken je moet lezen voor het examen
 * Bouwkunde BT1+BT2, gekoppeld aan de modules A/B/C/D uit het kwalificatiedossier.
 *
 * De weging per module komt uit de twee officiële SVMNIVO-oefenexamens
 * (B ≈ 36–47%, C ≈ 28–33%, D ≈ 10–26%, A ≈ 10%).
 */

export type ModuleKey = 'A' | 'B' | 'C' | 'D'
export type Niveau = 'BT1' | 'BT2' | 'BT1+BT2'

export interface Hoofdstuk {
  /** Nummer van de samenvatting (bv. '08'). */
  nr: string
  titel: string
  /** Welke dossier-onderwerpen dit hoofdstuk dekt. */
  dekt: string
  niveau: Niveau
}

export interface LeesModule {
  key: ModuleKey
  titel: string
  /** Aandeel in het examen (uit de oefenexamens). */
  weging: string
  hoofdstukken: Hoofdstuk[]
}

export const leesModules: LeesModule[] = [
  {
    key: 'B',
    titel: 'Constructieve opbouw',
    weging: '≈ 36–47% · veruit het zwaarst',
    hoofdstukken: [
      { nr: '04', titel: 'Grondwerk & sterkteleer', dekt: 'B.3 sterkteleer, B.4 grondwerken', niveau: 'BT1+BT2' },
      { nr: '05', titel: 'Funderingen', dekt: 'B.4 funderingen, kruipruimte, kim', niveau: 'BT1+BT2' },
      { nr: '06', titel: 'Gebakken kunststeen, bindmiddelen, mortels', dekt: 'B.5 steenconstructies', niveau: 'BT1+BT2' },
      { nr: '07', titel: 'Niet-gebakken kunststeen', dekt: 'B.5 steenconstructies', niveau: 'BT1+BT2' },
      { nr: '08', titel: 'Metselwerken', dekt: 'B.5 metselverbanden, lateien, voegen', niveau: 'BT1+BT2' },
      { nr: '09', titel: 'Hout', dekt: 'B.9 houtsoorten en -gebreken', niveau: 'BT1+BT2' },
      { nr: '10', titel: 'Metalen en kunststoffen', dekt: 'B.8 non-ferro, B.15 kunststof, B.16 isolatie', niveau: 'BT1+BT2' },
      { nr: '14', titel: 'Beton- en staalconstructies', dekt: 'B.6 beton, B.7 staal', niveau: 'BT1+BT2' },
      { nr: '11', titel: 'Binnenkozijnen', dekt: 'B.10 kozijnen, ramen, deuren', niveau: 'BT1' },
      { nr: '12', titel: 'Buitenkozijnen', dekt: 'B.10 / B.11 kozijnen', niveau: 'BT1+BT2' },
      { nr: '15', titel: 'Beganegrondvloeren', dekt: 'B.12 vloeren, wanden, plafonds', niveau: 'BT1+BT2' },
      { nr: '16', titel: 'Verdiepingsvloeren en trappen', dekt: 'B.12 vloeren, B.14 trappen', niveau: 'BT1+BT2' },
      { nr: '17', titel: 'Bedekking hellend dak 1', dekt: 'B.13 kappen en daken', niveau: 'BT1' },
      { nr: '18', titel: 'Dakbedekking hellend dak 2', dekt: 'B.13 kappen en daken', niveau: 'BT1' },
      { nr: '19', titel: 'Kappen, kapconstructies, hellende daken', dekt: 'B.13 dakvormen, goten', niveau: 'BT1' },
      { nr: '20', titel: 'Het platte dak', dekt: 'B.13 platte daken, dakisolatie', niveau: 'BT1+BT2' },
    ],
  },
  {
    key: 'C',
    titel: 'Afwerking en installaties',
    weging: '≈ 28–33% · op één na zwaarst',
    hoofdstukken: [
      { nr: '21', titel: 'Riolering, sanitair', dekt: 'C.1 binnen-/buitenriolering, ontspanningsleiding', niveau: 'BT1+BT2' },
      { nr: '22', titel: 'Gas, water, elektra', dekt: 'C.2 water, C.3 gas, C.4 elektra (draadkleuren!)', niveau: 'BT1+BT2' },
      { nr: '23', titel: 'Warmte, cv', dekt: 'C.6 verwarming, C.7 koeling (HR/hybride, LT/HT)', niveau: 'BT1+BT2' },
      { nr: '24', titel: 'Overige installaties', dekt: 'C.5 zon, C.8 brand, C.10 beveiliging', niveau: 'BT2' },
      { nr: '27', titel: 'Bouwfysica: geluid, licht, ventilatie', dekt: 'C.9 ventilatie (systeem A/C/D, WTW)', niveau: 'BT1+BT2' },
      { nr: '28', titel: 'Glas, beglazing', dekt: 'C.11 glaswerk (HR++/triple, glas-in-lood)', niveau: 'BT1+BT2' },
      { nr: '25', titel: 'Natuursteen', dekt: 'C.14 gesteentesoorten, bewerkingen', niveau: 'BT1' },
      { nr: '29', titel: 'Afwerkingen', dekt: 'C.13 afwerkingen, antislip', niveau: 'BT1' },
      { nr: '13', titel: 'Hang- en sluitwerk, bouwbeslag', dekt: 'C.12 hang- en sluitwerk, smeedwerk', niveau: 'BT1' },
    ],
  },
  {
    key: 'D',
    titel: 'Kwaliteitsbeoordeling, onderhoud & beheer',
    weging: '≈ 10% (BT1) → 26% (BT2)',
    hoofdstukken: [
      { nr: '31', titel: 'Onderhoud, beheer', dekt: 'D.1 MJOP, onderhoudstypen, VvE-taken', niveau: 'BT1+BT2' },
      { nr: '30', titel: 'Bouwfouten, gebreken', dekt: 'D.2 kwaliteit beoordelen', niveau: 'BT2' },
      { nr: '26', titel: 'Bouwfysica: warmte, vocht', dekt: 'D.3 U-waarde, condens, koud/warm/omgekeerd dak, BENG', niveau: 'BT2' },
    ],
  },
  {
    key: 'A',
    titel: 'Algemeen',
    weging: '≈ 10% · kleinst, makkelijke punten',
    hoofdstukken: [
      { nr: '01', titel: 'Woningbouw en bouwwetgeving', dekt: 'A.3 Bbl, Omgevingswet, NEN2580', niveau: 'BT1+BT2' },
      { nr: '02', titel: 'Bouwproces', dekt: 'A.1 bouwdeelnemers, fasen', niveau: 'BT1+BT2' },
      { nr: '03', titel: 'Bestek, tekeningen, begroten, aanbesteden', dekt: 'A.2.1 tekeningen & bestekken', niveau: 'BT1+BT2' },
      { nr: '32', titel: 'Bouwstijlen', dekt: 'A.2.2 architectuur & stedenbouw', niveau: 'BT1+BT2' },
    ],
  },
]

/** Totaal aantal hoofdstukken in de leeslijst. */
export const totaalHoofdstukken = leesModules.reduce((n, m) => n + m.hoofdstukken.length, 0)
