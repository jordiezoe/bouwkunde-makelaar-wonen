import type { VerbandKey } from '../components/Diagrams'

/**
 * Aparte sectie "Metselverbanden": lesstof + overhoring.
 *
 * Volledig gebaseerd op de lesstof B.5 (Steenconstructies) §4–§7 en de
 * dateringsregels uit A.2.2 §9. De zes verband-tekeningen komen uit
 * components/Diagrams.tsx (dezelfde die in de lesstof staan).
 */

export interface VerbandInfo {
  /** Sleutel voor de tekening in Diagrams.tsx. */
  key: VerbandKey
  naam: string
  ookWel?: string
  /** Hoe de stenen liggen (het patroon). */
  patroon: string
  /** Waaraan je het in de gevel herkent. */
  herkenning: string
  /** Typische periode en/of toepassing. */
  periode: string
}

/** De zes getekende verbanden (in ongeveer historische volgorde). */
export const verbanden: VerbandInfo[] = [
  {
    key: 'staandVerband',
    naam: 'Staand verband',
    patroon: 'Koppenlagen en strekkenlagen wisselen elkaar af; de strekken in opvolgende strekkenlagen liggen recht boven elkaar.',
    herkenning: 'Afwisselend een laag koppen en een laag strekken, waarbij de stootvoegen van de strekken netjes recht boven elkaar doorlopen.',
    periode: 'Oud steensmetselwerk (vóór de 20e eeuw). Iets zwakker dan kruisverband doordat de strekvoegen boven elkaar doorlopen.',
  },
  {
    key: 'kruisverband',
    naam: 'Kruisverband',
    patroon: 'Koppen- en strekkenlagen wisselen elkaar af, maar de strekken verspringen per strekkenlaag ½ steen.',
    herkenning: 'Net als staand verband koppen- en strekkenlagen, maar de strekken liggen NIET recht boven elkaar — ze kruisen (je ziet diagonale lijntjes door de koppen).',
    periode: 'De Nederlandse standaard voor massieve steensmuren, van de 15e eeuw tot in de vroege 20e eeuw (vóór de spouwmuur).',
  },
  {
    key: 'vlaamsVerband',
    naam: 'Vlaams verband',
    patroon: 'Binnen één en dezelfde laag wisselen kop en strek elkaar af; in de laag erboven ligt een kop steeds boven een strek.',
    herkenning: 'Kop–strek–kop–strek binnen dezelfde rij (niet hele lagen koppen of strekken apart).',
    periode: 'Sierverband; veel toegepast in 17e–18e-eeuwse en historiserende gevels.',
  },
  {
    key: 'koppenverband',
    naam: 'Koppenverband',
    ookWel: 'patijtsverband',
    patroon: 'Uitsluitend koppen, met een verspringing van ¼ steen.',
    herkenning: 'Je ziet in de hele muur alleen korte, kopse kanten — geen enkele strek.',
    periode: 'Vooral bij gebogen muurdelen en gewelven: de korte koppen voegen zich makkelijk in een kromming.',
  },
  {
    key: 'klezorenverband',
    naam: 'Klezorenverband',
    patroon: 'Strekkenlagen met aan het begin van elke laag een klezoor (¼ steen); de stootvoegen verspringen ¼ steen.',
    herkenning: 'De "staande tand": de klezoren vormen in de hoek een schuin oplopend trapje.',
    periode: 'Typische 20e-eeuwse spouwmuur, vooral tussen 1920 en 1960.',
  },
  {
    key: 'halfsteensverband',
    naam: 'Halfsteensverband',
    patroon: 'Uitsluitend strekken; elke volgende laag verspringt ½ steen.',
    herkenning: 'Je ziet alléén lange zijden (strekken), geen koppen — het simpelste, meest regelmatige patroon.',
    periode: 'Standaard in het halfsteens buitenspouwblad — dus vanaf ~1920, toen de spouwmuur de norm werd.',
  },
]

/**
 * Wild / vrij verband heeft geen vaste tekening (er ís geen patroon) maar
 * hoort wel bij het overzicht — vooral vanwege de datering.
 */
export const wildVerband = {
  naam: 'Wild of vrij verband',
  patroon: 'Geen regelmatig patroon; koppen en strekken liggen "wild" door elkaar, alleen de stootvoegen mogen niet doorlopen.',
  herkenning: 'Geen herkenbaar ritme in de gevel.',
  periode: 'Vanaf ~1960 — het op maat sorteren van stenen werd toen te duur.',
}

/** Steenstukken die je nodig hebt om een verband te lezen (B.5 §4). */
export const steenstukken: { naam: string; uitleg: string }[] = [
  { naam: 'Strek', uitleg: 'Hele steen met de lange zijde in het zicht.' },
  { naam: 'Kop', uitleg: 'Hele steen met de korte, kopse kant in het zicht.' },
  { naam: 'Klezoor', uitleg: 'Kwart steen (¼), op de hoek tegen doorlopende stootvoegen.' },
  { naam: 'Drieklezoor', uitleg: 'Drie kwart steen (¾).' },
  { naam: 'Halve steen', uitleg: 'Halve lengte (½), bijvoorbeeld om een verband te sluiten.' },
]

/** Voegtypen — helpen mede bij het dateren (B.5 §7 + A.2.2 §9). */
export const voegen: { naam: string; kenmerk: string }[] = [
  { naam: 'Verdiepte voeg', kenmerk: 'Uitgekrabd, geeft slagschaduw — vanaf de Amsterdamse School (~1920) en later.' },
  { naam: 'Knipvoeg', kenmerk: 'Siervoeg met een opstaande "knip" (rib) — vanaf de 19e eeuw.' },
  { naam: 'Platvolle voeg', kenmerk: 'Vlak afgewerkt, gelijk met de steen — neutraal, alle perioden.' },
  { naam: 'Doorgestreken voeg', kenmerk: 'Met de troffel gladgestreken; herkenbaar aan specievlekken naast de voeg.' },
]

// ─── Overhoring ──────────────────────────────────────────────────────────────

export type VerbandVraagCat = 'Herkennen' | 'Periode' | 'Kenmerk' | 'Steenstuk' | 'Voeg'

export interface VerbandVraag {
  categorie: VerbandVraagCat
  /** Toon deze verband-tekening boven de vraag (voor herken-vragen). */
  toonVerband?: VerbandKey
  vraag: string
  opties: string[]
  juist: number
  uitleg: string
}

export const verbandVragen: VerbandVraag[] = [
  // ── Herkennen (met tekening) ──
  {
    categorie: 'Herkennen',
    toonVerband: 'halfsteensverband',
    vraag: 'Welk metselverband zie je hier?',
    opties: ['Kruisverband', 'Halfsteensverband', 'Vlaams verband', 'Staand verband'],
    juist: 1,
    uitleg: 'Alléén strekken (lange zijden), elke laag ½ steen verschoven = halfsteensverband. Standaard in het buitenspouwblad vanaf ~1920.',
  },
  {
    categorie: 'Herkennen',
    toonVerband: 'klezorenverband',
    vraag: 'Welk metselverband zie je hier?',
    opties: ['Klezorenverband', 'Koppenverband', 'Kruisverband', 'Halfsteensverband'],
    juist: 0,
    uitleg: 'De klezoren (¼ steen) aan het begin van elke laag vormen de "staande tand" in de hoek — dat is het klezorenverband (20e-eeuwse spouwmuur).',
  },
  {
    categorie: 'Herkennen',
    toonVerband: 'kruisverband',
    vraag: 'Welk metselverband zie je hier?',
    opties: ['Staand verband', 'Kruisverband', 'Koppenverband', 'Halfsteensverband'],
    juist: 1,
    uitleg: 'Koppen- en strekkenlagen wisselen af én de strekken verspringen ½ steen per strekkenlaag: kruisverband — de Nederlandse standaard voor steensmuren vanaf de 15e eeuw.',
  },
  {
    categorie: 'Herkennen',
    toonVerband: 'staandVerband',
    vraag: 'Welk metselverband zie je hier?',
    opties: ['Kruisverband', 'Vlaams verband', 'Staand verband', 'Klezorenverband'],
    juist: 2,
    uitleg: 'Koppen- en strekkenlagen wisselen af en de strekken liggen recht boven elkaar (voegen lopen door) = staand verband. Bij kruisverband verspringen die strekken juist.',
  },
  {
    categorie: 'Herkennen',
    toonVerband: 'vlaamsVerband',
    vraag: 'Welk metselverband zie je hier?',
    opties: ['Vlaams verband', 'Koppenverband', 'Halfsteensverband', 'Kruisverband'],
    juist: 0,
    uitleg: 'Binnen dezelfde laag wisselen kop en strek elkaar af (kop–strek–kop–strek) = vlaams verband, een sierverband uit vooral de 17e–18e eeuw.',
  },
  {
    categorie: 'Herkennen',
    toonVerband: 'koppenverband',
    vraag: 'Welk metselverband zie je hier?',
    opties: ['Halfsteensverband', 'Staand verband', 'Koppenverband', 'Vlaams verband'],
    juist: 2,
    uitleg: 'Uitsluitend koppen (korte kanten), ¼ steen verspringend = koppen- of patijtsverband. Handig bij gebogen muren omdat koppen een kromming volgen.',
  },

  // ── Periode ──
  {
    categorie: 'Periode',
    vraag: 'Welk verband is de Nederlandse standaard voor massieve steensmuren vanaf de 15e eeuw?',
    opties: ['Halfsteensverband', 'Kruisverband', 'Klezorenverband', 'Wild verband'],
    juist: 1,
    uitleg: 'Kruisverband is eeuwenlang (15e eeuw tot vroege 20e eeuw) de standaard voor steensmuren geweest — sterker dan staand verband omdat de strekvoegen verspringen.',
  },
  {
    categorie: 'Periode',
    vraag: 'Je ziet halfsteensverband in het buitenblad van een gevel. Wat zegt dat over de bouwperiode?',
    opties: [
      'Zeker vóór 1700',
      'Ná ~1920 (spouwmuur werd toen standaard)',
      'Precies de 15e eeuw',
      'Het zegt niets over de periode',
    ],
    juist: 1,
    uitleg: 'Een halfsteens buitenblad hoort bij de spouwmuur, en die werd pas ná ~1920 de norm. Een massieve steensmuur van vóór 1920 is juist steensdik in kruis- of staand verband.',
  },
  {
    categorie: 'Periode',
    vraag: 'Klezorenverband kom je vooral tegen in welke periode?',
    opties: ['1500–1650', '1920–1960', 'Vóór 1400', 'Ná 2010'],
    juist: 1,
    uitleg: 'Het klezorenverband is de typische 20e-eeuwse spouwmuur, vooral tussen 1920 en 1960.',
  },
  {
    categorie: 'Periode',
    vraag: 'Een gevel zónder herkenbaar patroon (wild verband) dateer je op zijn vroegst rond:',
    opties: ['1600', '1850', '1960', '2015'],
    juist: 2,
    uitleg: 'Wild of vrij verband komt op vanaf ~1960, toen het op maat sorteren van stenen te duur werd. Vóór die tijd metselde men vrijwel altijd een net patroon.',
  },
  {
    categorie: 'Periode',
    vraag: 'In een massieve steensmuur van een pand uit 1880 verwacht je het meest waarschijnlijk:',
    opties: ['Halfsteensverband', 'Klezorenverband', 'Kruisverband', 'Wild verband'],
    juist: 2,
    uitleg: 'Vóór de spouwmuur (~1920) metselde men steensmuren; kruisverband was daarvoor de standaard. Half­steens- en klezorenverband horen juist bij de latere spouwmuur, wild verband bij ná 1960.',
  },

  // ── Kenmerk ──
  {
    categorie: 'Kenmerk',
    vraag: 'Waaraan herken je klezorenverband in de gevel?',
    opties: [
      'Aan de "staande tand": klezoren die trapsgewijs in de hoek oplopen',
      'Aan het volledig ontbreken van strekken',
      'Aan koppen en strekken binnen dezelfde laag',
      'Aan het volledig ontbreken van een patroon',
    ],
    juist: 0,
    uitleg: 'De klezoor (¼ steen) aan het begin van elke laag geeft de kenmerkende "staande tand" — een schuin oplopend trapje in de hoek.',
  },
  {
    categorie: 'Kenmerk',
    vraag: 'Wat is hét verschil tussen kruisverband en staand verband?',
    opties: [
      'Kruisverband heeft geen koppen',
      'Bij kruisverband verspringen de strekken ½ steen; bij staand verband liggen ze recht boven elkaar',
      'Staand verband bestaat alleen uit koppen',
      'Er is geen verschil',
    ],
    juist: 1,
    uitleg: 'Beide wisselen koppen- en strekkenlagen af. Het onderscheid zit in de strekken: bij staand verband liggen ze recht boven elkaar (doorlopende voegen), bij kruisverband verspringen ze ½ steen.',
  },
  {
    categorie: 'Kenmerk',
    vraag: 'Waarom wordt koppenverband vaak toegepast bij gebogen muurdelen?',
    opties: [
      'Omdat koppen goedkoper zijn dan strekken',
      'Omdat de korte koppen zich makkelijk in een kromming voegen',
      'Omdat koppen beter isoleren',
      'Omdat het verband dan onzichtbaar wordt',
    ],
    juist: 1,
    uitleg: 'Een kop is kort, dus een muur van uitsluitend koppen kan een kromming vloeiend volgen — daarom zie je koppenverband bij rondingen en gewelven.',
  },
  {
    categorie: 'Kenmerk',
    vraag: 'Wat is kenmerkend voor vlaams verband?',
    opties: [
      'Alleen strekken',
      'Alleen koppen',
      'Binnen dezelfde laag wisselen kop en strek elkaar af',
      'Er zit een klezoor in elke laag',
    ],
    juist: 2,
    uitleg: 'Bij vlaams verband wisselen kop en strek elkaar bínnen één laag af (kop–strek–kop–strek), met in de laag erboven een kop boven een strek. Een sierverband.',
  },
  {
    categorie: 'Kenmerk',
    vraag: 'Waaruit bestaat halfsteensverband uitsluitend?',
    opties: ['Alleen koppen', 'Alleen strekken', 'Afwisselend kop en strek', 'Alleen klezoren'],
    juist: 1,
    uitleg: 'Halfsteensverband bestaat volledig uit strekken die elke laag ½ steen verspringen — het simpelste patroon, standaard in het halfsteens spouwblad.',
  },

  // ── Steenstuk ──
  {
    categorie: 'Steenstuk',
    vraag: 'Hoe heet een kwart steen die op de hoek tegen doorlopende stootvoegen wordt gebruikt?',
    opties: ['Drieklezoor', 'Klezoor', 'Halve steen', 'Kop'],
    juist: 1,
    uitleg: 'Een klezoor is een kwart steen (¼). Een drieklezoor is ¾, een halve steen is ½.',
  },
  {
    categorie: 'Steenstuk',
    vraag: 'Een hele steen met de lange zijde in het zicht heet een:',
    opties: ['Kop', 'Strek', 'Klezoor', 'Drieklezoor'],
    juist: 1,
    uitleg: 'De lange zijde in het zicht = strek. De korte, kopse kant in het zicht = kop.',
  },
  {
    categorie: 'Steenstuk',
    vraag: 'Een hele steen met de korte, kopse kant in het zicht heet een:',
    opties: ['Strek', 'Kop', 'Halve steen', 'Klezoor'],
    juist: 1,
    uitleg: 'De korte kopse kant in het zicht = kop. Verbanden met veel koppen (koppen-, kruis-, staand verband) horen vaak bij ouder steensmetselwerk.',
  },

  // ── Voeg (dateringshulp) ──
  {
    categorie: 'Voeg',
    vraag: 'De verdiepte voeg, die de baksteen slagschaduw geeft, deed zijn intrede bij:',
    opties: [
      'De gotiek (vóór 1500)',
      'De Amsterdamse School (~1920) en later',
      'De VINEX-wijken (na 1995)',
      'De renaissance (1500–1650)',
    ],
    juist: 1,
    uitleg: 'De verdiepte (uitgekrabde) voeg hoort bij de Amsterdamse School en later — de slagschaduw laat het metselwerk zelf als versiering spreken.',
  },
  {
    categorie: 'Voeg',
    vraag: 'Vanaf welke periode komt de knipvoeg (siervoeg met opstaande rib) voor?',
    opties: ['Vanaf de 19e eeuw', 'Vanaf de middeleeuwen', 'Pas na 1980', 'Alleen vóór 1700'],
    juist: 0,
    uitleg: 'De knipvoeg is een siervoeg die vanaf de 19e eeuw voorkomt. Samen met het metselverband helpt het voegtype om een gevel te dateren.',
  },
]
