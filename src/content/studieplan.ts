/**
 * 14-daags studieplan voor het examen Bouwkunde BT1+BT2.
 * Module B en C staan voorin (samen ~64–80% van het examen); de laatste twee
 * dagen zijn alleen fouten wegwerken + een volledige simulatie.
 */

export type TaakType = 'lezen' | 'oefenen' | 'examen'

export interface Taak {
  id: string
  type: TaakType
  tekst: string
}

export interface Dag {
  dag: number
  week: 1 | 2
  focus: string
  taken: Taak[]
}

export const studieplan: Dag[] = [
  {
    dag: 1, week: 1, focus: 'Module B — grondwerk & funderingen',
    taken: [
      { id: 'd1-l1', type: 'lezen', tekst: '04 · Grondwerk & sterkteleer' },
      { id: 'd1-l2', type: 'lezen', tekst: '05 · Funderingen' },
      { id: 'd1-o1', type: 'oefenen', tekst: 'Sectie B: funderingen/bemaling — quiz + begrippentrainer' },
    ],
  },
  {
    dag: 2, week: 1, focus: 'Module B — steen & metselwerk',
    taken: [
      { id: 'd2-l1', type: 'lezen', tekst: '06 · Gebakken kunststeen, bindmiddelen, mortels' },
      { id: 'd2-l2', type: 'lezen', tekst: '07 · Niet-gebakken kunststeen' },
      { id: 'd2-l3', type: 'lezen', tekst: '08 · Metselwerken' },
      { id: 'd2-o1', type: 'oefenen', tekst: 'Metselverbanden-sectie — lesstof + oefenen' },
    ],
  },
  {
    dag: 3, week: 1, focus: 'Module B — hout & materialen',
    taken: [
      { id: 'd3-l1', type: 'lezen', tekst: '09 · Hout' },
      { id: 'd3-l2', type: 'lezen', tekst: '10 · Metalen en kunststoffen' },
      { id: 'd3-o1', type: 'oefenen', tekst: 'Sectie B: hout/metaal — quiz' },
    ],
  },
  {
    dag: 4, week: 1, focus: 'Module B — beton, staal & kozijnen',
    taken: [
      { id: 'd4-l1', type: 'lezen', tekst: '14 · Beton- en staalconstructies' },
      { id: 'd4-l2', type: 'lezen', tekst: '11 · Binnenkozijnen' },
      { id: 'd4-l3', type: 'lezen', tekst: '12 · Buitenkozijnen' },
      { id: 'd4-o1', type: 'oefenen', tekst: 'Quiz beton/staal/kozijnen' },
    ],
  },
  {
    dag: 5, week: 1, focus: 'Module B — vloeren & trappen',
    taken: [
      { id: 'd5-l1', type: 'lezen', tekst: '15 · Beganegrondvloeren' },
      { id: 'd5-l2', type: 'lezen', tekst: '16 · Verdiepingsvloeren en trappen' },
      { id: 'd5-o1', type: 'oefenen', tekst: 'Quiz vloeren/trappen + begrippen (let op: raveling/wisselbalk)' },
    ],
  },
  {
    dag: 6, week: 1, focus: 'Module B — kappen & daken',
    taken: [
      { id: 'd6-l1', type: 'lezen', tekst: '17 · Bedekking hellend dak 1' },
      { id: 'd6-l2', type: 'lezen', tekst: '18 · Dakbedekking hellend dak 2' },
      { id: 'd6-l3', type: 'lezen', tekst: '19 · Kappen, kapconstructies, hellende daken' },
      { id: 'd6-o1', type: 'oefenen', tekst: 'Quiz daken + Woning daten (dakvormen)' },
    ],
  },
  {
    dag: 7, week: 1, focus: 'Module B afronden + toets',
    taken: [
      { id: 'd7-l1', type: 'lezen', tekst: '20 · Het platte dak' },
      { id: 'd7-l2', type: 'lezen', tekst: 'Herhaal je aantekeningen van module B' },
      { id: 'd7-o1', type: 'examen', tekst: 'Sectie-examen B → bekijk het foutenoverzicht' },
    ],
  },
  {
    dag: 8, week: 2, focus: 'Module C — riolering & nutsvoorzieningen',
    taken: [
      { id: 'd8-l1', type: 'lezen', tekst: '21 · Riolering, sanitair' },
      { id: 'd8-l2', type: 'lezen', tekst: '22 · Gas, water, elektra' },
      { id: 'd8-o1', type: 'oefenen', tekst: 'Quiz installaties — LET OP: elektra-draadkleuren (blauw = nul!)' },
    ],
  },
  {
    dag: 9, week: 2, focus: 'Module C — warmte & installaties',
    taken: [
      { id: 'd9-l1', type: 'lezen', tekst: '23 · Warmte, cv' },
      { id: 'd9-l2', type: 'lezen', tekst: '24 · Overige installaties (zon, brand, beveiliging)' },
      { id: 'd9-o1', type: 'oefenen', tekst: 'Quiz verwarming/installaties (HR/hybride, LT/HT)' },
    ],
  },
  {
    dag: 10, week: 2, focus: 'Module C — afwerking & materialen',
    taken: [
      { id: 'd10-l1', type: 'lezen', tekst: '27 · Ventilatie (systeem A/C/D, WTW)' },
      { id: 'd10-l2', type: 'lezen', tekst: '28 · Glas & beglazing' },
      { id: 'd10-l3', type: 'lezen', tekst: '25 · Natuursteen' },
      { id: 'd10-l4', type: 'lezen', tekst: '29 · Afwerkingen' },
      { id: 'd10-l5', type: 'lezen', tekst: '13 · Hang- en sluitwerk, bouwbeslag' },
      { id: 'd10-o1', type: 'oefenen', tekst: 'Quiz + natuursteen/gesteente herkennen' },
    ],
  },
  {
    dag: 11, week: 2, focus: 'Module D — kwaliteit & bouwfysica',
    taken: [
      { id: 'd11-l1', type: 'lezen', tekst: '31 · Onderhoud, beheer — LET OP: VvE-taken & MJOP' },
      { id: 'd11-l2', type: 'lezen', tekst: '30 · Bouwfouten, gebreken' },
      { id: 'd11-l3', type: 'lezen', tekst: '26 · Bouwfysica: warmte, vocht (U-waarde, condens, BENG)' },
      { id: 'd11-o1', type: 'oefenen', tekst: 'Quiz bouwfysica & onderhoud (thermische schil, omkeerdak)' },
    ],
  },
  {
    dag: 12, week: 2, focus: 'Module A — algemeen',
    taken: [
      { id: 'd12-l1', type: 'lezen', tekst: '01 · Woningbouw en bouwwetgeving (Bbl, Omgevingswet)' },
      { id: 'd12-l2', type: 'lezen', tekst: '02 · Bouwproces' },
      { id: 'd12-l3', type: 'lezen', tekst: '03 · Bestek, tekeningen, begroten, aanbesteden' },
      { id: 'd12-l4', type: 'lezen', tekst: '32 · Bouwstijlen' },
      { id: 'd12-o1', type: 'oefenen', tekst: 'Quiz module A (bouwfasen, bouwmethoden, bouwstijlen)' },
    ],
  },
  {
    dag: 13, week: 2, focus: 'Fouten wegwerken',
    taken: [
      { id: 'd13-o1', type: 'oefenen', tekst: 'BT1 — Fouten trainen: hele sectie doorlopen' },
      { id: 'd13-o2', type: 'oefenen', tekst: 'Zwakke punten wegwerken (foute vragen herhalen)' },
    ],
  },
  {
    dag: 14, week: 2, focus: 'Eindsimulatie',
    taken: [
      { id: 'd14-e1', type: 'examen', tekst: 'Volledige examensimulatie (BT1+BT2)' },
      { id: 'd14-e2', type: 'examen', tekst: 'Foutenoverzicht bekijken → laatste gerichte herhaling' },
    ],
  },
]

export const alleTaken = studieplan.flatMap((d) => d.taken)
export const totaalTaken = alleTaken.length
