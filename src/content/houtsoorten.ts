/**
 * Houtsoorten — leren & oefenen (dossier B.9 Hout).
 * Indeling naar loof-/naaldhout, kenmerken, toepassing en herkennen op foto.
 * Foto's: labelvrije uitsneden uit de lesstof (hfd. B.9) in /figs/houtsoorten.
 */

export type Groep = 'Naaldhout' | 'Loofhout'

export interface HoutSoort {
  id: string
  naam: string
  groep: Groep
  /** 'zacht' (meestal naaldhout) of 'hard' (meestal loofhout). */
  hardheid: 'zacht' | 'hard'
  /** Europees / Tropisch (alleen relevant voor loofhout). */
  herkomst?: string
  kenmerk: string
  toepassing: string
  /** Bestandsnaam in /figs/houtsoorten (zonder .jpg) — als er een foto is. */
  foto?: string
}

export const houtFoto = (id: string) => `/figs/houtsoorten/${id}.jpg`

export const ezelsbruggetje = {
  titel: 'Ezelsbruggetje: loof of naald?',
  regels: [
    '**Loof**hout komt van een **loof**boom → die heeft **loof** (blad) dat er ’s herfsts afvalt.',
    '**Naald**hout komt van een **naald**boom → die heeft **naalden** en blijft ’s winters groen (denk: kerstboom).',
    'Eigenschappen: **“Loof is loodzwaar en hard, naald is licht en zacht.”**',
    'Op de foto: **naaldhout** = licht/blond, veel **kwasten** en **harsstrepen**; **loofhout** = donkerder/warmer, rustiger nerf (eiken heeft **spiegels**).',
  ],
}

export const houtsoorten: HoutSoort[] = [
  // ── Naaldhout (zachthout) ──
  { id: 'vuren', naam: 'Vuren', groep: 'Naaldhout', hardheid: 'zacht',
    kenmerk: 'Witgeel met ovale bruine kwasten, harsrijk.',
    toepassing: 'Binnenwerk, bekisting en constructiehout.', foto: 'vuren' },
  { id: 'grenen', naam: 'Grenen', groep: 'Naaldhout', hardheid: 'zacht',
    kenmerk: 'Geelrood met opvallende kwasten en harsstrepen.',
    toepassing: 'Kozijnen (geïmpregneerd), vloeren en meubels.' },
  { id: 'douglas', naam: 'Douglas (Oregon pine)', groep: 'Naaldhout', hardheid: 'zacht',
    kenmerk: 'Bruinrood gestreept, harsrijk, in grote afmetingen leverbaar.',
    toepassing: 'Constructiehout, gevelbekleding en terras.', foto: 'douglas' },
  { id: 'lariks', naam: 'Lariks (lork)', groep: 'Naaldhout', hardheid: 'zacht',
    kenmerk: 'Geelbruin, harsrijk, van nature vrij duurzaam.',
    toepassing: 'Gevelbekleding en buitentoepassingen.' },
  { id: 'wrc', naam: 'Western red cedar (WRC)', groep: 'Naaldhout', hardheid: 'zacht',
    kenmerk: 'Zacht, licht, roodbruin en van nature duurzaam.',
    toepassing: 'Lichte gevelbekleding.', foto: 'wrc' },
  { id: 'redwood', naam: 'Redwood / Sequoia', groep: 'Naaldhout', hardheid: 'zacht',
    kenmerk: 'Roodbruin; bevat looizuur → gebruik rvs-bevestiging.',
    toepassing: 'Gevelbekleding.', foto: 'redwood' },

  // ── Loofhout (hardhout) — Europees ──
  { id: 'eiken', naam: 'Eiken', groep: 'Loofhout', hardheid: 'hard', herkomst: 'Europees',
    kenmerk: 'Hard en sterk, grove nerf met spiegels (mergstralen).',
    toepassing: 'Kozijnen, parket, meubels en constructief werk.', foto: 'eiken' },
  { id: 'beuken', naam: 'Beuken', groep: 'Loofhout', hardheid: 'hard', herkomst: 'Europees',
    kenmerk: 'Egaal roze-bruin, fijne dichte nerf; niet weerbestendig.',
    toepassing: 'Meubels, trappen en gereedschap (binnen).' },

  // ── Loofhout (hardhout) — Tropisch ──
  { id: 'meranti', naam: 'Meranti', groep: 'Loofhout', hardheid: 'hard', herkomst: 'Tropisch',
    kenmerk: 'Bruinrood, rechte nerf; donkerrood = duurzamer dan lichtrood.',
    toepassing: 'Kozijnen en ramen (vervangt eiken).' },
  { id: 'merbau', naam: 'Merbau', groep: 'Loofhout', hardheid: 'hard', herkomst: 'Tropisch',
    kenmerk: 'Roodbruin, zeer duurzaam; “bloedt” bruin in contact met water.',
    toepassing: 'Vloeren, terras en kozijnen.', foto: 'merbau' },
  { id: 'teak', naam: 'Teak', groep: 'Loofhout', hardheid: 'hard', herkomst: 'Tropisch',
    kenmerk: 'Vet goudbruin, van nature weerbestendig door eigen olie.',
    toepassing: '(Tuin)meubels, scheepsdek en buitenwerk.', foto: 'teak' },
  { id: 'azobe', naam: 'Azobé', groep: 'Loofhout', hardheid: 'hard', herkomst: 'Tropisch',
    kenmerk: 'Zeer zwaar, donker paarsbruin, extreem duurzaam.',
    toepassing: 'Waterbouw, damwanden en bruggen.', foto: 'azobe' },
]
