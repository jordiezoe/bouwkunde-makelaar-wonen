import type { VerbandKey } from '../components/Diagrams'

/**
 * "Woning daten" — herken aan de details (metselverband, dakvorm + dakpannen,
 * kozijnen en glas) het TYPE WONING, het DAKTYPE en de BOUWPERIODE.
 *
 * Volledig gebaseerd op de lesstof A.2.2 (Architectuur en stedenbouw):
 *  - §1 Woningtypen volgens de NVM-Fotowijzer
 *  - §3 Bouwjaar en typische materialen
 *  - §9 Bouwperiode bepalen aan metselverband, dakpannen, kozijn en glas
 * aangevuld met de dakvormen uit B.13 (Kappen en daken).
 *
 * Iedere case toont een set aanwijzingen (clues) en stelt daarna 2–3
 * meerkeuzevragen. De afleiders liggen dicht bij het juiste antwoord
 * (aangrenzende periode, verwant woningtype) zodat je écht moet combineren.
 */

export type VraagCategorie = 'Woningtype' | 'Daktype' | 'Bouwperiode' | 'Bouwstijl'

export interface WoningClue {
  /** Categorie van de aanwijzing, bv. 'Metselwerk', 'Dak', 'Kozijn & glas'. */
  label: string
  value: string
}

export interface WoningVraag {
  categorie: VraagCategorie
  vraag: string
  opties: string[]
  juist: number
  uitleg: string
}

export interface WoningCase {
  id: string
  titel: string
  /** Eén zin situatieschets ("Je taxeert een …"). */
  context: string
  clues: WoningClue[]
  /** Optioneel metselverband-diagram dat naast de clues wordt getekend. */
  verband?: VerbandKey
  vragen: WoningVraag[]
}

export const woningCases: WoningCase[] = [
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'wd-grachtenpand',
    titel: 'Pand aan de gracht',
    context: 'Je taxeert een smal, hoog pand in een historische binnenstad.',
    clues: [
      { label: 'Metselwerk', value: 'Grote, ruwe bakstenen (kloostermop-formaat) in een steensdikke muur zonder spouw' },
      { label: 'Metselverband', value: 'Kruisverband' },
      { label: 'Dak', value: 'Steile kap met Oude Hollandse pannen; één nok evenwijdig aan de straat' },
      { label: 'Kozijn & glas', value: 'Schuiframen met roeden en enkele glas-in-loodbovenlichten' },
      { label: 'Gevel', value: 'Smalle, hoge lijstgevel direct aan de gracht' },
    ],
    verband: 'kruisverband',
    vragen: [
      {
        categorie: 'Woningtype',
        vraag: 'Welk subtype uit de Fotowijzer past het best bij dit pand?',
        opties: ['Grachtenpand', 'Herenhuis', 'Bovenwoning', 'Dijkwoning'],
        juist: 0,
        uitleg:
          'Een smal, hoog pand direct aan de gracht in de binnenstad is het typische grachtenpand. Een herenhuis is óók statig maar staat meestal aan een 19e-eeuwse laan, niet aan het water.',
      },
      {
        categorie: 'Daktype',
        vraag: 'Een kap met twee schuine vlakken en één horizontale nok heet:',
        opties: ['Schilddak', 'Zadeldak', 'Mansardekap', 'Tentdak'],
        juist: 1,
        uitleg:
          'Twee schuine dakvlakken die samenkomen in één nok = zadeldak. Een schilddak heeft óók schuine vlakken aan de kopse kanten; een tentdak loopt naar één punt.',
      },
      {
        categorie: 'Bouwperiode',
        vraag: 'Kloostermoppen + kruisverband in een steensmuur + Oude Hollandse pan wijzen op:',
        opties: [
          'Laat-middeleeuws / vroeg-modern casco (vóór ca. 1700)',
          'Jugendstil (1890–1910)',
          'Wederopbouw (1945–1965)',
          'VINEX (1995–2005)',
        ],
        juist: 0,
        uitleg:
          'Kloostermoppen (±285×135×85 mm) zijn een middeleeuws formaat; kruisverband in een massieve steensmuur en de Oude Hollandse pan horen bij een oud casco van vóór ca. 1700 (of een latere restauratie met behoud van de originele stenen).',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'wd-herenhuis',
    titel: 'Statig stadshuis aan een laan',
    context: 'Een deftig meergezins-ogend pand van drie bouwlagen aan een brede 19e-eeuwse laan.',
    clues: [
      { label: 'Metselwerk', value: 'Strakke, gladde strengperssteen met nette knipvoeg' },
      { label: 'Metselverband', value: 'Kruisverband in een massieve buitenmuur (geen spouw)' },
      { label: 'Dak', value: 'Schuine vlakken aan álle vier de zijden, met VH-pannen' },
      { label: 'Kozijn & glas', value: 'Hoge schuiframen in T-indeling, enkel glas, hardhouten kozijnen' },
    ],
    vragen: [
      {
        categorie: 'Woningtype',
        vraag: 'Welk subtype past hier het best?',
        opties: ['Herenhuis', 'Doorzonwoning', 'Portiekflat', 'Bungalow'],
        juist: 0,
        uitleg:
          'Een statig, hoog 19e-eeuws stadshuis van meerdere lagen aan een laan is het klassieke herenhuis. Doorzonwoning en portiekflat zijn juist naoorlogs; een bungalow is gelijkvloers.',
      },
      {
        categorie: 'Daktype',
        vraag: 'Een dak met schuine vlakken aan álle vier de zijden (ook de kopgevels) heet:',
        opties: ['Zadeldak', 'Lessenaarsdak', 'Schilddak', 'Plat dak'],
        juist: 2,
        uitleg:
          'Vier schuine vlakken rondom = schilddak. Bij een zadeldak zijn de kopgevels verticaal (puntgevels); een lessenaarsdak heeft maar één schuin vlak.',
      },
      {
        categorie: 'Bouwperiode',
        vraag: 'Gladde strengperssteen, T-schuiframen en enkel glas plaatsen dit pand rond:',
        opties: ['1650–1700', '1850–1900', '1955–1975', 'Na 2010'],
        juist: 1,
        uitleg:
          'Strak gladde strengperssteen komt op vanaf ~1880; het schuifraam in T-vorm hoort bij 1850–1925. Samen met de massieve muur (nog geen spouw, dat werd pas na 1920 standaard) wijst dit op de late 19e eeuw.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'wd-jugendstil',
    titel: 'Sierlijke gevel rond 1900',
    context: 'Een boven-benedenwoning met een opvallend versierde gevel in een vooroorlogse stadswijk.',
    clues: [
      { label: 'Gevel', value: 'Gestileerde plant- en stengelmotieven; geglazuurde baksteen en tegeltableaus' },
      { label: 'Metaal', value: 'Sierlijk smeed- en gietijzer in balkonhek en bovenlichten' },
      { label: 'Kozijn & glas', value: 'Veel glas-in-lood met organische krullen; enkel glas' },
      { label: 'Entree', value: 'Aparte voordeur op de begane grond naast de deur van de bovenwoning' },
    ],
    vragen: [
      {
        categorie: 'Bouwstijl',
        vraag: 'Welke architectuurstroming herken je aan deze details?',
        opties: ['Art nouveau / Jugendstil', 'De Stijl', 'Wederopbouw', 'Delftse School'],
        juist: 0,
        uitleg:
          'Gestileerde plant- en stengelmotieven, smeed- en gietijzer en veel glas-in-lood zijn hét handschrift van de jugendstil / art nouveau ("Nieuwe Kunst"). De Stijl is juist abstract en machinaal.',
      },
      {
        categorie: 'Woningtype',
        vraag: 'Twee gesplitste woningen met elk een eigen voordeur op straatniveau noem je:',
        opties: ['Maisonnette', 'Boven- / benedenwoning', 'Geschakelde woning', 'Penthouse'],
        juist: 1,
        uitleg:
          'Een pand dat verticaal is gesplitst in een benedenwoning en een bovenwoning, elk met een eigen entree, is de (vaak vooroorlogse) boven-/benedenwoning. Een maisonnette is juist één woning over twee lagen.',
      },
      {
        categorie: 'Bouwperiode',
        vraag: 'Glas-in-lood en jugendstil-motieven plaatsen deze woning rond:',
        opties: ['1770–1820', '1890–1910', '1950–1970', 'Na 2000'],
        juist: 1,
        uitleg:
          'De jugendstil bloeit ca. 1890–1910. Glas-in-lood verdwijnt grotendeels na ~1930, dus de combinatie wijst op de eeuwwisseling.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'wd-amsterdamse-school',
    titel: 'Expressief baksteenblok',
    context: 'Een blok arbeiderswoningen met een golvende, beeldhouwende bakstenen gevel.',
    clues: [
      { label: 'Metselwerk', value: 'Fantastisch, expressief metselwerk dat de constructie verhult; ronde hoeken' },
      { label: 'Voeg', value: 'Verdiepte voegen die sterke slagschaduw geven' },
      { label: 'Kozijn & glas', value: 'Kleine ruitjes met smeedijzeren raamroeden' },
      { label: 'Ontsluiting', value: 'Gemeenschappelijk trappenhuis, geen lift, ~4 woningen per opgang' },
    ],
    verband: 'staandVerband',
    vragen: [
      {
        categorie: 'Bouwstijl',
        vraag: 'Welke stroming herken je aan het expressieve metselwerk en de verdiepte voegen?',
        opties: ['Amsterdamse School', 'Functionalisme', 'Chaletstijl', 'Postmodernisme'],
        juist: 0,
        uitleg:
          'Beeldhouwend, expressief metselwerk met verdiepte voegen en kleine ruitjes is kenmerkend voor de Amsterdamse School (1910–1930). Het functionalisme is juist strak, wit en ornamentloos.',
      },
      {
        categorie: 'Woningtype',
        vraag: 'De ontsluiting via een trappenhuis zonder lift met enkele woningen per opgang wijst op een:',
        opties: ['Galerijflat', 'Portiekflat', 'Maisonnette', 'Drive-inwoning'],
        juist: 1,
        uitleg:
          'Een centraal trappenhuis (portiek) met een paar woningen per verdieping en geen lift = portiekflat. Bij een galerijflat loop je juist buitenom langs de gevel.',
      },
      {
        categorie: 'Bouwperiode',
        vraag: 'Deze woning dateert het meest waarschijnlijk uit:',
        opties: ['1870–1890', '1910–1930', '1960–1980', 'Na 2010'],
        juist: 1,
        uitleg:
          'De Amsterdamse School is actief tussen 1910 en 1930. De verdiepte voeg deed in deze periode zijn intrede.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'wd-nieuwe-zakelijkheid',
    titel: 'Strakke witte woning',
    context: 'Een opvallend strak, wit woonhuis dat sterk afwijkt van de bakstenen buren.',
    clues: [
      { label: 'Gevel', value: 'Glad wit gestuct, geen enkel ornament' },
      { label: 'Dak', value: 'Volledig plat afgedekt, geen pannen' },
      { label: 'Kozijn & glas', value: 'Slanke stalen kozijnen met doorlopende horizontale strookramen' },
      { label: 'Vorm', value: 'Kubische, asymmetrische opbouw; "vorm volgt functie"' },
    ],
    vragen: [
      {
        categorie: 'Bouwstijl',
        vraag: 'Welke stroming past bij deze woning?',
        opties: [
          'Het Nieuwe Bouwen / Functionalisme',
          'Amsterdamse School',
          'Chaletstijl',
          'Organische architectuur',
        ],
        juist: 0,
        uitleg:
          'Wit stucwerk, plat dak, stalen strookramen en "vorm volgt functie" zijn de kenmerken van Het Nieuwe Bouwen / functionalisme (Nieuwe Zakelijkheid).',
      },
      {
        categorie: 'Daktype',
        vraag: 'Een dakafdekking zonder zichtbare helling of nok noem je een:',
        opties: ['Mansardekap', 'Plat dak', 'Schilddak', 'Tentdak'],
        juist: 1,
        uitleg:
          'Geen helling en geen pannen, horizontaal afgedekt = plat dak. Het platte dak is een handtekening van het functionalisme.',
      },
      {
        categorie: 'Bouwperiode',
        vraag: 'Stalen kozijnen, plat dak en wit stucwerk in deze stijl plaatsen de woning rond:',
        opties: ['1890–1910', '1925–1940', '1970–1990', 'Na 2015'],
        juist: 1,
        uitleg:
          'Het Nieuwe Bouwen / de Nieuwe Zakelijkheid piekt in de jaren \'20 en \'30. Stalen kozijnen met enkel glas en platte daken zijn typerend voor die periode.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'wd-wederopbouw',
    titel: 'Naoorlogse rijwoning',
    context: 'Een sobere rijwoning in een uitbreidingswijk met veel identieke buren.',
    clues: [
      { label: 'Metselwerk', value: 'Machinale baksteen / kalkzandsteen in een spouwblad' },
      { label: 'Metselverband', value: 'Halfsteensverband' },
      { label: 'Boven de ramen', value: 'Zichtbare betonlateien' },
      { label: 'Dak', value: 'Flauw zadeldak met betonnen sneldekpannen' },
      { label: 'Kozijn & glas', value: 'Houten kozijnen met (oorspronkelijk) enkel glas; woonkamer met open zicht voor-naar-achter' },
    ],
    verband: 'halfsteensverband',
    vragen: [
      {
        categorie: 'Woningtype',
        vraag: 'Een naoorlogse rijwoning met open doorzicht van de voor- naar de achtergevel heet een:',
        opties: ['Doorzonwoning', 'Drive-inwoning', 'Patiowoning', 'Herenhuis'],
        juist: 0,
        uitleg:
          'De doorzonwoning dankt zijn naam aan de doorlopende woonkamer met ramen aan vóór- én achterzijde, zodat de zon "doorschijnt". Typisch voor de wederopbouw.',
      },
      {
        categorie: 'Bouwperiode',
        vraag: 'Halfsteensverband in een spouwblad + betonlateien + sneldekpannen wijzen op:',
        opties: ['Vóór 1900', '1900–1930', 'Wederopbouw (1945–1965)', 'Na 2010'],
        juist: 2,
        uitleg:
          'De sneldekpan bestaat pas vanaf 1956, het halfsteensverband in een spouwblad werd standaard ná 1920, en betonlateien met stalen/houten kozijnen zijn typisch wederopbouw.',
      },
      {
        categorie: 'Bouwperiode',
        vraag: 'Wat is bij deze woning de belangrijkste bouwfysische aandachtspunt voor de makelaar?',
        opties: [
          'Triple glas dat vervangen moet worden',
          'Koudebruggen en oorspronkelijk enkel glas / matige isolatie',
          'Een monumentale, onaantastbare gevel',
          'Loden waterleidingen als enige gebrek',
        ],
        juist: 1,
        uitleg:
          'Wederopbouwwoningen hebben vaak dunne, slecht geïsoleerde wanden met koudebruggen en oorspronkelijk enkel glas. Na-isolatie en HR-glas zijn hier de gebruikelijke verbeteringen.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'wd-galerijflat',
    titel: 'Naoorlogse flat',
    context: 'Een langgerekt woongebouw van vijf lagen aan de rand van een wederopbouwwijk.',
    clues: [
      { label: 'Constructie', value: 'Betonnen muren en vloeren, ter plaatse gestort (herhalende plattegrond)' },
      { label: 'Ontsluiting', value: 'Alle voordeuren aan een open buitengang langs de gevel' },
      { label: 'Gevel', value: 'Repeterende, identieke gevelvakken; strakke betonbanden' },
      { label: 'Dak', value: 'Plat afgedekt' },
    ],
    vragen: [
      {
        categorie: 'Woningtype',
        vraag: 'Appartementen die worden ontsloten via een open buitengang langs de gevel vormen een:',
        opties: ['Portiekflat', 'Galerijflat', 'Maisonnette', 'Penthouse'],
        juist: 1,
        uitleg:
          'Een doorlopende buitengalerij langs de gevel = galerijflat. Bij een portiekflat gebruik je juist een inpandig trappenhuis.',
      },
      {
        categorie: 'Bouwstijl',
        vraag: 'Beton ter plaatse in een bekisting storten voor hele muren en vloeren heet:',
        opties: ['Skeletbouw', 'Gietbouw', 'Traditionele stapelbouw', 'Houtskeletbouw'],
        juist: 1,
        uitleg:
          'Beton in een bekisting storten (muren en vloeren in één werkgang) is gietbouw — veel toegepast bij naoorlogse galerijflats met herhalende plattegronden.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'wd-drive-in',
    titel: 'Woning met garage onder',
    context: 'Een woning in een jaren-\'70-wijk waarbij je op de begane grond een inpandige garage ziet.',
    clues: [
      { label: 'Indeling', value: 'Inpandige garage op de begane grond, woonkamer op de eerste verdieping' },
      { label: 'Metselwerk', value: 'Geïsoleerde spouwmuur in halfsteensverband' },
      { label: 'Kozijn & glas', value: 'Houten kozijnen met dubbel glas (thermopane)' },
      { label: 'Dak', value: 'Flauw hellend dak met betonpannen' },
    ],
    verband: 'halfsteensverband',
    vragen: [
      {
        categorie: 'Woningtype',
        vraag: 'Een woning met inpandige garage beneden en de woonverdieping erboven heet een:',
        opties: ['Bungalow', 'Drive-inwoning', 'Doorzonwoning', 'Maisonnette'],
        juist: 1,
        uitleg:
          'De drive-inwoning heeft de garage inpandig op de begane grond, met de woonvertrekken op de verdieping erboven.',
      },
      {
        categorie: 'Bouwperiode',
        vraag: 'Geïsoleerde spouw + dubbel glas (nog geen HR) plaatsen deze woning het meest waarschijnlijk in:',
        opties: ['1900–1930', '1945–1960', '1970–1990', 'Na 2015'],
        juist: 2,
        uitleg:
          'Een geïsoleerde spouwmuur werd standaard in de jaren \'70; gewoon dubbel glas kwam op vanaf ~1980. HR- en triple glas (vanaf 1990/2010) ontbreken hier nog, dus 1970–1990 past het best.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'wd-bungalow',
    titel: 'Gelijkvloers woonhuis',
    context: 'Een ruime vrijstaande woning van slechts één woonlaag op een groot kavel.',
    clues: [
      { label: 'Opbouw', value: 'Alles gelijkvloers: één bouwlaag, geen verdieping' },
      { label: 'Dak', value: 'Flauw hellend, aan alle zijden aflopend naar de rand' },
      { label: 'Kozijn & glas', value: 'Brede houten puien met dubbel glas' },
    ],
    vragen: [
      {
        categorie: 'Woningtype',
        vraag: 'Een gelijkvloerse woning van één bouwlaag noem je een:',
        opties: ['Bungalow', 'Maisonnette', 'Patiowoning', 'Penthouse'],
        juist: 0,
        uitleg:
          'Eén woonlaag, volledig gelijkvloers = bungalow. Een patiowoning is óók laag, maar herken je juist aan de omsloten binnenplaats.',
      },
      {
        categorie: 'Daktype',
        vraag: 'Een flauw dak dat aan álle zijden naar de dakrand afloopt is een:',
        opties: ['Zadeldak', 'Schilddak', 'Lessenaarsdak', 'Mansardekap'],
        juist: 1,
        uitleg:
          'Aan alle kanten aflopende schuine vlakken = schilddak (bij een bungalow vaak flauw hellend). Een lessenaarsdak heeft maar één vlak; een zadeldak heeft verticale kopgevels.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'wd-vinex',
    titel: 'Rijwoning in een uitlegwijk',
    context: 'Een tussenwoning in een dicht bebouwde wijk aan de rand van de stad, met veel verschillende gevels vlak bij elkaar.',
    clues: [
      { label: 'Metselwerk', value: 'Schone, machinale baksteen in een vrij/wild verband' },
      { label: 'Dak', value: 'Zadeldak met betonpannen' },
      { label: 'Kozijn & glas', value: 'Kunststof kozijnen met HR++-glas' },
      { label: 'Stedenbouw', value: 'Hoge dichtheid, mix van architecten, fietsroutes — uitbreiding aan de stadsrand' },
    ],
    vragen: [
      {
        categorie: 'Woningtype',
        vraag: 'Een woning met aan beide zijden een buurmuur, midden in een rij, is een:',
        opties: ['Hoekwoning', 'Tussenwoning', 'Twee-onder-één-kapwoning', 'Geschakelde woning'],
        juist: 1,
        uitleg:
          'Twee buurmuren, midden in de rij = tussenwoning. Een hoekwoning heeft er maar één (plus een eigen zijgevel).',
      },
      {
        categorie: 'Bouwperiode',
        vraag: 'Wild verband + betonpan + kunststof kozijn met HR++-glas + stadsuitbreiding: welke periode?',
        opties: [
          'Wederopbouw (1945–1965)',
          'Jaren \'70–\'80',
          'VINEX (1995–2005)',
          'Vóór 1940',
        ],
        juist: 2,
        uitleg:
          'Wild/vrij verband komt na 1960; kunststof kozijnen na 1970; HR++-glas vanaf ~1995. Samen met de dichte uitlegwijk aan de stadsrand wijst dit op een VINEX-wijk (1995–2005).',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'wd-tweekap-nieuw',
    titel: 'Twee woningen, één kap',
    context: 'Twee spiegelsymmetrische woningen die samen onder één doorlopend dak staan, in een recente wijk.',
    clues: [
      { label: 'Opbouw', value: 'Twee woningen onder één doorlopend dak, met één gezamenlijke woningscheidende muur' },
      { label: 'Metselwerk', value: 'Strak schoon metselwerk, halfsteensverband in een goed geïsoleerde spouw' },
      { label: 'Kozijn & glas', value: 'Kunststof/aluminium kozijnen met triple glas' },
      { label: 'Installatie', value: 'Warmtepomp en mechanische ventilatie met wtw; geen gasaansluiting' },
    ],
    vragen: [
      {
        categorie: 'Woningtype',
        vraag: 'Twee woningen onder één dak met één gedeelde woningscheidende muur vormen een:',
        opties: [
          'Geschakelde woning',
          'Twee-onder-één-kapwoning',
          'Hoekwoning',
          'Vrijstaande woning',
        ],
        juist: 1,
        uitleg:
          'Eén doorlopend dak, twee woningen, één (akoestisch gescheiden) gezamenlijke muur = twee-onder-één-kapwoning. Bij een geschakelde woning zit er juist een garage/berging tussen zónder volledige woningscheidende muur.',
      },
      {
        categorie: 'Bouwperiode',
        vraag: 'Triple glas, warmtepomp en geen gasaansluiting plaatsen deze woning in:',
        opties: ['1970–1990', '1990–2005', 'Na ongeveer 2015', 'Wederopbouw'],
        juist: 2,
        uitleg:
          'Triple glas werd pas vanaf ~2010 algemeen (BENG); gasloze nieuwbouw met warmtepomp is na de aanscherping richting 2018–2020 de standaard. Dit is dus recente nieuwbouw.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'wd-renovatie-valkuil',
    titel: 'Oud casco, nieuwe jas',
    context: 'Een pand met een duidelijk oude bakstenen gevel, maar opvallend moderne details.',
    clues: [
      { label: 'Metselwerk', value: 'Grote, ruwe kloostermoppen in de gevel' },
      { label: 'Dak', value: 'Moderne betonpannen' },
      { label: 'Kozijn & glas', value: 'Kunststof kozijnen met HR++-glas' },
      { label: 'Detail', value: 'Metselwerk en dak/kozijnen lijken uit totaal verschillende tijden te komen' },
    ],
    vragen: [
      {
        categorie: 'Bouwperiode',
        vraag: 'Wat is bij deze combinatie de meest verdedigbare conclusie?',
        opties: [
          'Een volledig recent nieuwbouwpand in historische stijl',
          'Een oud (laat-middeleeuws) casco dat later ingrijpend is gerenoveerd',
          'Een onaangetast monument in volledig originele staat',
          'Een wederopbouwpand uit de jaren \'50',
        ],
        juist: 1,
        uitleg:
          'Kloostermoppen wijzen op een oud casco; betonpannen en kunststof HR++-kozijnen zijn juist recent. De botsende signalen wijzen op een oud casco met een latere, ingrijpende renovatie — niet op nieuwbouw of een gaaf monument.',
      },
      {
        categorie: 'Bouwperiode',
        vraag: 'Waarom mag je een woning niet op één enkel kenmerk dateren?',
        opties: [
          'Omdat alleen het bouwjaar in het Kadaster telt',
          'Omdat losse onderdelen later vervangen of gerestaureerd kunnen zijn — je combineert 2–3 signalen',
          'Omdat dakpannen nooit iets over de leeftijd zeggen',
          'Omdat metselverband bij elke woning identiek is',
        ],
        juist: 1,
        uitleg:
          'De lesstof zegt: combineer 2–3 signalen (metselverband, dakpan, kozijn/glas, gevel). Eén onderdeel kan later vervangen zijn, dus pas de combinatie geeft een betrouwbare datering.',
      },
    ],
  },
]
