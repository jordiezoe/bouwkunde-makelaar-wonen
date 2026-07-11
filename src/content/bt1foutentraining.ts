/**
 * BT1 — Fouten trainen.
 *
 * Leerset + afsluitend examen over precies de 12 onderwerpen waar in het
 * BT1-oefenexamen fouten op zijn gemaakt. Inhoud gebaseerd op de lesstof
 * (samenvattingen 02, 04/05, 09, 16, 17-19, 21, 22, 25, 27, 31) en op de
 * dossieronderwerpen A/B/C/D.
 *
 * Vier vraagvormen, exact zoals SVMNIVO overhoort:
 *  - 'mc'    : (beeld/scenario) meerkeuze, één juist antwoord
 *  - 'multi' : aankruisvraag, meerdere juist
 *  - 'invul' : zin met keuze-dropdowns ("Blauw is een [▼] en zorgt voor [▼]")
 *  - 'sleep' : items in de juiste categorie plaatsen
 */

export type Blok = 'B' | 'A' | 'D' | 'C'

export const BLOK_LABEL: Record<Blok, string> = {
  B: 'Constructieve opbouw',
  A: 'Algemeen',
  D: 'Kwaliteitsbeoordeling',
  C: 'Afwerking en installaties',
}

export interface McVraag {
  type: 'mc'
  /** Optionele scenario-/beeldbeschrijving boven de vraag (i.p.v. een foto). */
  scenario?: string
  vraag: string
  opties: string[]
  juist: number
  uitleg: string
}
export interface MultiVraag {
  type: 'multi'
  scenario?: string
  vraag: string
  opties: string[]
  juist: number[]
  uitleg: string
}
/** Deel van een invulzin: vaste tekst (string) of een keuze-dropdown. */
export type InvulDeel = string | { opties: string[]; juist: number }
export interface InvulVraag {
  type: 'invul'
  vraag: string
  delen: InvulDeel[]
  uitleg: string
}
export interface SleepVraag {
  type: 'sleep'
  vraag: string
  categorieen: string[]
  /** cat = index in `categorieen` waar dit item thuishoort. */
  items: { label: string; cat: number }[]
  uitleg: string
}
export type Vraag = McVraag | MultiVraag | InvulVraag | SleepVraag

export interface Onderwerp {
  id: string
  titel: string
  blok: Blok
  bron: string
  /** Kernpunten uit de lesstof (leren). */
  kernpunten: string[]
  /** Oefenvragen bij dit onderwerp. */
  vragen: Vraag[]
}

// ─────────────────────────────────────────────────────────────────────────────
// LEERSET — 12 onderwerpen
// ─────────────────────────────────────────────────────────────────────────────

export const onderwerpen: Onderwerp[] = [
  {
    id: 'bemaling',
    titel: 'Bemaling (grondwater verlagen)',
    blok: 'B',
    bron: 'Grondwerk & funderingen · samenvatting 04/05',
    kernpunten: [
      '**Open bemaling** — water dat de bouwput inloopt wordt opgevangen in slootjes/zinkputten en weggepompt. Alleen bij ondiepe putten en goed doorlatende grond.',
      '**Bronbemaling** — verticale **filterbuizen** (wellpoints) aan een **zuigleiding** met pomp verlagen tijdelijk de (freatische) grondwaterstand rond de bouwput.',
      '**Spanningsbemaling** — diepe bronnen verlagen de **waterspanning (stijghoogte)** in een diep, afgesloten (gespannen) zandpakket onder een kleilaag. Doel: **opbarsten** van de bouwputbodem voorkomen.',
      'Herkennen op tekening: filterbuizen + zuigleiding + pomp = bronbemaling; diepe bronnen door een kleilaag naar een gespannen pakket = spanningsbemaling.',
    ],
    vragen: [
      {
        type: 'mc',
        scenario: 'Op een tekening zie je meerdere verticale filterbuizen die via een zuigleiding op een pomp zijn aangesloten; de grondwaterstand rond de bouwput wordt tijdelijk verlaagd.',
        vraag: 'Welke bemalingsmethode is dit?',
        opties: ['open bemaling', 'bronbemaling', 'spanningsbemaling'],
        juist: 1,
        uitleg: 'Filterbuizen + zuigleiding + pomp die de freatische grondwaterstand verlagen = bronbemaling.',
      },
      {
        type: 'mc',
        vraag: 'Met welke methode voorkom je het opbarsten van de bouwputbodem bij een gespannen (diep, afgesloten) waterpakket?',
        opties: ['open bemaling', 'bronbemaling', 'spanningsbemaling'],
        juist: 2,
        uitleg: 'Spanningsbemaling verlaagt de waterspanning/stijghoogte in het diepe zandpakket, zodat de putbodem niet opbarst.',
      },
      {
        type: 'invul',
        vraag: 'Vul aan:',
        delen: [
          'Bij ',
          { opties: ['open bemaling', 'bronbemaling'], juist: 0 },
          ' wordt het water in de open ontgraving opgevangen en weggepompt; dit kan alleen bij ',
          { opties: ['ondiepe putten in goed doorlatende grond', 'diepe putten in klei'], juist: 0 },
          '.',
        ],
        uitleg: 'Open bemaling: water uit de open put wegpompen — alleen geschikt bij ondiepe ontgravingen in goed doorlatende grond.',
      },
    ],
  },

  {
    id: 'goten',
    titel: 'Goten',
    blok: 'B',
    bron: 'Hellend dak · samenvatting 17-19',
    kernpunten: [
      '**Bakgoot** — bak langs de dakvoet, gedragen door goot­klossen; vangt het hemelwater van het dakvlak.',
      '**Mastgoot** — houten, geprofileerde bakgoot; klassieke uitvoering langs de dakvoet.',
      '**Kilgoot** — goot in de **binnenhoek (kil)** waar twee hellende dakvlakken samenkomen; water loopt de kil af.',
      '**Verholen goot** — goot die **uit het zicht** is weggewerkt (achter de dakrand of tussen dakvlak en dakkapel), dus niet als uitstekende goot zichtbaar.',
    ],
    vragen: [
      {
        type: 'mc',
        scenario: 'Op een foto zie je een metalen goot die verscholen ligt tussen het dakvlak en een dakkapel; van onderaf zie je geen uitstekende goot.',
        vraag: 'Welke goot is dit?',
        opties: ['mastgoot', 'verholen goot', 'bakgoot'],
        juist: 1,
        uitleg: 'Een goot die uit het zicht is weggewerkt (hier tussen dakvlak en dakkapel) is een verholen goot.',
      },
      {
        type: 'sleep',
        vraag: 'Sleep elke goot naar de juiste omschrijving.',
        categorieen: ['In de binnenhoek van twee dakvlakken', 'Houten geprofileerde goot aan de dakvoet', 'Uit het zicht weggewerkt'],
        items: [
          { label: 'Kilgoot', cat: 0 },
          { label: 'Mastgoot', cat: 1 },
          { label: 'Verholen goot', cat: 2 },
        ],
        uitleg: 'Kilgoot = binnenhoek (kil); mastgoot = houten geprofileerde bakgoot; verholen goot = uit het zicht.',
      },
    ],
  },

  {
    id: 'houtsoorten',
    titel: 'Houtsoorten herkennen',
    blok: 'B',
    bron: 'Hout · samenvatting 09',
    kernpunten: [
      '**Naaldhout** (zachthout): **vuren** = licht geelwit met duidelijke jaarringen en kwasten; **grenen** = geelrood met opvallende kwasten en harsstrepen. Goedkoop, veel binnenwerk/constructie.',
      '**Loofhout** (hardhout): **eiken** = taai, bruin, grove nerf met **spiegels (mergstralen)**; **meranti** = rood-bruin, rechte nerf (kozijnen); **teak** = vet, goudbruin, van nature weerbestendig.',
      'Vuistregel: licht + kwasten + jaarringen → naaldhout (vuren/grenen). Grove nerf met spiegels, bruin en hard → eiken.',
    ],
    vragen: [
      {
        type: 'mc',
        scenario: 'Een plank is licht geelwit, heeft duidelijke jaarringen en een paar kwasten.',
        vraag: 'Welke houtsoort is dit het meest waarschijnlijk?',
        opties: ['eikenhout', 'teak', 'vuren'],
        juist: 2,
        uitleg: 'Licht geelwit naaldhout met kwasten = vuren. Eiken is bruiner met grove nerf/spiegels; teak is vet goudbruin.',
      },
      {
        type: 'mc',
        vraag: 'Welk kenmerk hoort bij eiken(hout)?',
        opties: ['Licht geelwit met veel kwasten', 'Grove nerf met spiegels (mergstralen)', 'Wit opgeschuimde bolletjes'],
        juist: 1,
        uitleg: 'Eiken is loofhout met een grove nerf en typische spiegels (mergstralen); geen kwasten zoals naaldhout.',
      },
    ],
  },

  {
    id: 'balklaag',
    titel: 'Balklaag met sparing (raveling)',
    blok: 'B',
    bron: 'Verdiepingsvloeren · samenvatting 16',
    kernpunten: [
      'Bij een **sparing** (opening voor bv. trap of schoorsteen) worden vloerbalken onderbroken.',
      '**Raveelbalk** — de **dwarsbalk** die de onderbroken balken opvangt en de sparing aan de kopse kant afsluit.',
      '**Wisselbalk** — de **verdubbelde/zwaardere** vloerbalk aan weerszijden van de sparing die de raveelbalk draagt.',
      '**Kinderbalk / raveelbalkje** — de onderbroken (korte) balken tussen raveelbalk en muur.',
    ],
    vragen: [
      {
        type: 'mc',
        scenario: 'In een balklaag met een sparing wijst een pijl naar de verdubbelde balk náást de sparing, die de dwarsbalk draagt.',
        vraag: 'Hoe heet die verdubbelde balk?',
        opties: ['raveelbalk', 'wisselbalk', 'kinderbalk'],
        juist: 1,
        uitleg: 'De zwaardere/dubbele balk naast de sparing die de raveelbalk draagt is de wisselbalk.',
      },
      {
        type: 'sleep',
        vraag: 'Plaats elke balk bij zijn functie.',
        categorieen: ['Dwarsbalk die de onderbroken balken opvangt', 'Verdubbelde balk naast de sparing', 'Onderbroken korte balk'],
        items: [
          { label: 'Raveelbalk', cat: 0 },
          { label: 'Wisselbalk', cat: 1 },
          { label: 'Kinderbalk', cat: 2 },
        ],
        uitleg: 'Raveelbalk vangt op (dwars), wisselbalk draagt de raveelbalk, kinderbalk is de onderbroken balk.',
      },
    ],
  },

  {
    id: 'bouwfasen',
    titel: 'Fasen in het bouwproces',
    blok: 'A',
    bron: 'Bouwproces · samenvatting 02',
    kernpunten: [
      'Volgorde: **Initiatief → Ontwerp → Voorbereiding → Uitvoering → Oplevering → Exploitatie/beheer**.',
      '**Initiatieffase**: idee + haalbaarheid; opstellen van het **projectplan / programma van eisen**.',
      '**Voorbereidingsfase**: vergunning aanvragen en **aanbesteding** (aannemer kiezen).',
      '**Exploitatie/beheerfase**: het gebouw wordt gebruikt, onderhouden en beheerd.',
    ],
    vragen: [
      {
        type: 'mc',
        vraag: 'Wat gebeurt er in de initiatieffase?',
        opties: ['Voorstellen van een projectplan', 'Starten van de aanbestedingsprocedure', 'In gebruik nemen van het gebouw'],
        juist: 0,
        uitleg: 'De initiatieffase is de eerste fase: idee, haalbaarheid en het projectplan. Aanbesteden hoort bij de voorbereiding; in gebruik nemen bij de exploitatie.',
      },
      {
        type: 'sleep',
        vraag: 'In welke fase hoort elke activiteit?',
        categorieen: ['Initiatief', 'Voorbereiding', 'Exploitatie'],
        items: [
          { label: 'Haalbaarheid en projectplan opstellen', cat: 0 },
          { label: 'Aanbesteding starten', cat: 1 },
          { label: 'Onderhoud en gebruik', cat: 2 },
        ],
        uitleg: 'Initiatief = idee/haalbaarheid/projectplan; voorbereiding = vergunning + aanbesteding; exploitatie = gebruik + onderhoud.',
      },
    ],
  },

  {
    id: 'bouwmethoden',
    titel: 'Bouwmethoden',
    blok: 'A',
    bron: 'Bouwproces · samenvatting 02',
    kernpunten: [
      '**Stapelbouw** — dragende muren waarop vloeren rusten (traditionele baksteen/kalkzandsteen).',
      '**Skeletbouw** — dragend frame van kolommen en balken; de gevel draagt niet → vrije plattegrond en grote glasvlakken (kantoren, hoogbouw).',
      '**Gietbouw** — beton ter plaatse in een bekisting storten; hele muren/vloeren in één werkgang. Bv. **koeltorens**, kelders, galerijflats.',
      '**Montagebouw / systeembouw** — geprefabriceerde elementen op de bouwplaats monteren; snel en weersongevoelig.',
    ],
    vragen: [
      {
        type: 'mc',
        scenario: 'Een betonnen koeltoren (hoge, holle schaal) wordt ter plaatse met een klimbekisting in beton uitgevoerd.',
        vraag: 'Welke bouwmethode is dit?',
        opties: ['elementenbouw', 'gietbouw', 'skeletbouw'],
        juist: 1,
        uitleg: 'Beton ter plaatse in een bekisting storten = gietbouw. Elementenbouw = prefab monteren.',
      },
      {
        type: 'mc',
        vraag: 'Wat is het kenmerkende verschil tussen stapelbouw en skeletbouw?',
        opties: [
          'Bij stapelbouw dragen de muren, bij skeletbouw een apart frame',
          'Stapelbouw is altijd beton, skeletbouw altijd hout',
          'Skeletbouw heeft geen fundering nodig',
        ],
        juist: 0,
        uitleg: 'Bij stapelbouw zijn de muren dragend; bij skeletbouw dragen kolommen/balken en is de gevel vrij.',
      },
    ],
  },

  {
    id: 'vve',
    titel: 'VvE — taken van het bestuur',
    blok: 'D',
    bron: 'Onderhoud & beheer · samenvatting 31',
    kernpunten: [
      '**Vergadering van eigenaars (ALV)** — hoogste orgaan; neemt de besluiten.',
      '**Bestuur** — voert besluiten uit, beheert de **financiën**, laat onderhoud uitvoeren en stelt het **meerjarenonderhoudsplan (MJOP)** en de begroting op.',
      '**Kascommissie** — **controleert de kas** / het financieel beheer van het bestuur (dat is dus géén bestuurstaak).',
    ],
    vragen: [
      {
        type: 'sleep',
        vraag: 'Is dit wel of geen taak van het VvE-bestuur?',
        categorieen: ['Wel een bestuurstaak', 'Geen bestuurstaak'],
        items: [
          { label: 'Het opstellen van het meerjarenonderhoudsplan (MJOP)', cat: 0 },
          { label: 'Het beheren van de financiën / innen van de bijdragen', cat: 0 },
          { label: 'Het controleren van de kas', cat: 1 },
        ],
        uitleg: 'MJOP opstellen en financieel beheer = bestuur. De kas controleren doet de kascommissie, niet het bestuur.',
      },
      {
        type: 'mc',
        vraag: 'Welk orgaan controleert de financiën van het bestuur?',
        opties: ['De kascommissie', 'De vergadering van eigenaars', 'De gemeente'],
        juist: 0,
        uitleg: 'De kascommissie controleert de kas/het financieel beheer van het bestuur.',
      },
    ],
  },

  {
    id: 'gesteenten',
    titel: 'Natuursteen — hoofdgroepen',
    blok: 'C',
    bron: 'Natuursteen · samenvatting 25',
    kernpunten: [
      '**Stollingsgesteente** (uit magma) — korrelig/kristallijn, geen lagen. Bv. **graniet, basalt**.',
      '**Afzettingsgesteente** (sediment) — vaak **gelaagd** en met **fossielen**. Bv. **zandsteen, kalksteen, hardsteen**.',
      '**Metamorf gesteente** (omgevormd door druk/hitte) — **aders** of **splijtlagen**. Bv. **marmer** (aders), **leisteen** (splijt in platen).',
    ],
    vragen: [
      {
        type: 'mc',
        scenario: 'Een lichtgrijze steen bevat verspreide fossielresten/schelpfragmenten en lijkt licht gelaagd.',
        vraag: 'Tot welke hoofdgroep behoort deze steen?',
        opties: ['stollingsgesteente', 'afzettingsgesteente', 'metamorf gesteente'],
        juist: 1,
        uitleg: 'Fossielen en gelaagdheid wijzen op afzettingsgesteente (kalksteen/hardsteen).',
      },
      {
        type: 'sleep',
        vraag: 'Plaats elke steensoort bij de juiste hoofdgroep.',
        categorieen: ['Stolling', 'Afzetting', 'Metamorf'],
        items: [
          { label: 'Graniet', cat: 0 },
          { label: 'Kalksteen', cat: 1 },
          { label: 'Marmer', cat: 2 },
          { label: 'Leisteen', cat: 2 },
        ],
        uitleg: 'Graniet = stolling; kalksteen = afzetting; marmer en leisteen = metamorf.',
      },
    ],
  },

  {
    id: 'natuursteenbewerking',
    titel: 'Natuursteen — oppervlaktebewerking',
    blok: 'C',
    bron: 'Natuursteen · samenvatting 25',
    kernpunten: [
      '**Frijnen** — met een frijnbeitel **parallelle groeven** hakken → fijne evenwijdige lijnen.',
      '**Boucharderen** — met een bouchardehamer (spijkerhamer) → **pokdalig/gestippeld** oppervlak.',
      '**Bruteren** — ruw hakken tot een **ruwe hakbreuk** (bossage).',
      '**Zoeten** = glad geschuurd/mat; **polijsten** = glanzend glad.',
    ],
    vragen: [
      {
        type: 'mc',
        scenario: 'Het steenoppervlak vertoont fijne, evenwijdige groeven (in blokken met wisselende richting).',
        vraag: 'Welke bewerking is toegepast?',
        opties: ['gebouchardeerd', 'gefrijnd', 'gebruteerd'],
        juist: 1,
        uitleg: 'Parallelle groeven = frijnen. Boucharderen geeft een pokdalig oppervlak; bruteren een ruwe hakbreuk.',
      },
      {
        type: 'sleep',
        vraag: 'Koppel de bewerking aan het uiterlijk.',
        categorieen: ['Parallelle groeven', 'Pokdalig/gestippeld', 'Glanzend glad'],
        items: [
          { label: 'Frijnen', cat: 0 },
          { label: 'Boucharderen', cat: 1 },
          { label: 'Polijsten', cat: 2 },
        ],
        uitleg: 'Frijnen = parallelle groeven; boucharderen = pokdalig; polijsten = glanzend.',
      },
    ],
  },

  {
    id: 'binnenriolering',
    titel: 'Binnenriolering',
    blok: 'C',
    bron: 'Riolering & sanitair · samenvatting 21',
    kernpunten: [
      'Binnenriolering = **aansluitleiding → verzamelleiding → standleiding → grondleiding**.',
      '**Ontspanningsleiding (beluchting)** — verlengt de standleiding boven het dak; voorkomt dat de sifons leeggezogen worden.',
      '**Hemelwaterafvoer (HWA)** is een **apart** systeem voor regenwater — hoort niet bij de (vuilwater)binnenriolering.',
    ],
    vragen: [
      {
        type: 'multi',
        vraag: 'Welke leidingen horen bij de binnenriolering? (meerdere juist)',
        opties: ['verzamelleiding', 'standleiding', 'hemelwaterafvoer', 'ontspanningsleiding', 'grondleiding'],
        juist: [0, 1, 3, 4],
        uitleg: 'Verzamel-, stand-, ontspannings- en grondleiding horen bij de binnenriolering. Hemelwaterafvoer is een apart regenwatersysteem.',
      },
      {
        type: 'mc',
        vraag: 'Wat is de functie van de ontspanningsleiding?',
        opties: [
          'Regenwater van het dak afvoeren',
          'De standleiding beluchten zodat sifons niet worden leeggezogen',
          'Drinkwater aanvoeren',
        ],
        juist: 1,
        uitleg: 'De ontspanningsleiding belucht het stelsel (boven dak), zodat er geen onderdruk ontstaat die de watersloten (sifons) leegzuigt.',
      },
    ],
  },

  {
    id: 'elektradraden',
    titel: 'Elektra — draadkleuren',
    blok: 'C',
    bron: 'Gas, water, elektra · samenvatting 22',
    kernpunten: [
      '**Fasedraad** — **bruin** (of zwart/grijs); voert de stroom **aan**.',
      '**Nuldraad** — **blauw**; voert de stroom **terug/af** (retourgeleider).',
      '**Aardedraad** — **geel-groen**; voor de **veiligheid** (afvoer bij een defect).',
    ],
    vragen: [
      {
        type: 'invul',
        vraag: 'Vul aan:',
        delen: [
          'Blauw is een ',
          { opties: ['fasedraad', 'nuldraad'], juist: 1 },
          ' en zorgt voor de ',
          { opties: ['aanvoer van stroom', 'afvoer/terugvoer van stroom'], juist: 1 },
          '.',
        ],
        uitleg: 'Blauw = nuldraad, de retourgeleider (afvoer). De fasedraad (bruin/zwart/grijs) voert de stroom aan.',
      },
      {
        type: 'mc',
        vraag: 'Welke kleur heeft de aardedraad?',
        opties: ['Blauw', 'Bruin', 'Geel-groen'],
        juist: 2,
        uitleg: 'De aardedraad is geel-groen en dient voor de veiligheid.',
      },
    ],
  },

  {
    id: 'ventilatie',
    titel: 'Ventilatiesystemen',
    blok: 'C',
    bron: 'Bouwfysica · samenvatting 27',
    kernpunten: [
      '**Systeem A** — natuurlijke toevoer én natuurlijke afvoer (roosters).',
      '**Systeem C** — natuurlijke toevoer + **mechanische afvoer** (afzuigbox).',
      '**Systeem D (gebalanceerd)** — **mechanische** toevoer én **mechanische** afvoer, in balans; vaak met **WTW** (warmteterugwinning). De aangevoerde lucht is **verse** buitenlucht.',
    ],
    vragen: [
      {
        type: 'invul',
        vraag: 'Vul de definitie aan:',
        delen: [
          'Gebalanceerde ventilatie is ',
          { opties: ['mechanische', 'natuurlijke'], juist: 0 },
          ' aanvoer van ',
          { opties: ['voorverwarmde', 'verse'], juist: 1 },
          ' lucht en ',
          { opties: ['mechanische', 'natuurlijke'], juist: 0 },
          ' afvoer van ventilatielucht.',
        ],
        uitleg: 'Gebalanceerd (systeem D) = mechanische aanvoer van verse lucht + mechanische afvoer. Voorverwarmen gebeurt pas met WTW en hoort niet in de basisdefinitie.',
      },
      {
        type: 'sleep',
        vraag: 'Koppel het ventilatiesysteem aan het kenmerk.',
        categorieen: ['Natuurlijke toe- en afvoer', 'Natuurlijke toevoer + mechanische afvoer', 'Mechanische toe- én afvoer'],
        items: [
          { label: 'Systeem A', cat: 0 },
          { label: 'Systeem C', cat: 1 },
          { label: 'Systeem D (gebalanceerd)', cat: 2 },
        ],
        uitleg: 'A = natuurlijk/natuurlijk; C = natuurlijk/mechanisch; D = mechanisch/mechanisch (gebalanceerd, vaak met WTW).',
      },
    ],
  },

  // ── Extra onderwerpen uit het BT1+BT2-oefenexamen ──
  {
    id: 'energieprestatie',
    titel: 'Duurzaamheid — energieprestatie verbeteren',
    blok: 'D',
    bron: 'Duurzaamheid · samenvatting 30/26',
    kernpunten: [
      'De energieprestatie verbeter je door de **buitenschil** te isoleren: **gevel, dak en (begane-grond)vloer**. **Binnenwanden** isoleren helpt niet — die zitten tussen verwarmde ruimtes.',
      'Betere installaties: **WTW** (warmteterugwinning), **warmtepomp**, HR-/hybride ketel en **energiezuinige apparaten**.',
      'Beter glas: **enkelglas → isolatie-/HR(+/++)-glas**.',
      'Een **groen dak** dient vooral voor waterberging/klimaatadaptatie; het verbetert de energieprestatie nauwelijks.',
    ],
    vragen: [
      {
        type: 'multi',
        vraag: 'Welke maatregelen verbeteren de energieprestatie van een woning? (meerdere juist)',
        opties: ['Isolatie in de binnenwanden', 'Een warmteterugwinsysteem (WTW)', 'Energiezuinige apparaten', 'Enkelglas vervangen door isolatieglas'],
        juist: [1, 2, 3],
        uitleg: 'WTW, energiezuinige apparaten en isolatieglas verbeteren de energieprestatie. Binnenwand-isolatie niet — alleen de buitenschil (gevel/dak/vloer) telt.',
      },
      {
        type: 'mc',
        vraag: 'Waarom verbetert het isoleren van binnenwanden de energieprestatie niet?',
        opties: [
          'Omdat binnenwanden tussen verwarmde ruimtes staan en niet in de buitenschil zitten',
          'Omdat binnenwanden altijd van beton zijn',
          'Omdat isolatie in wanden verboden is',
        ],
        juist: 0,
        uitleg: 'Alleen de buitenschil (gevel, dak, vloer) scheidt warm van koud. Binnenwanden staan binnen het verwarmde volume en tellen niet mee.',
      },
    ],
  },

  {
    id: 'thermische-schil',
    titel: 'De thermische schil',
    blok: 'D',
    bron: 'Bouwfysica · samenvatting 26',
    kernpunten: [
      'De **thermische schil** = alle constructies tussen het **verwarmde binnen** en **buiten/onverwarmd**: **begane-grondvloer** (naar de kruipruimte), **buitengevel** en **dak**.',
      'NIET tot de schil: **verdiepingsvloeren** en **binnenwanden** (die zitten bínnen het verwarmde volume).',
      'Ook de **dakoverhang** valt buiten de schil.',
    ],
    vragen: [
      {
        type: 'multi',
        vraag: 'Welke constructieve onderdelen vormen de thermische schil? (meerdere juist)',
        opties: ['Begane-grondvloerconstructie', 'Verdiepingsvloerconstructies', 'Buitengevelconstructie', 'Dakconstructie', 'Verdiepingshoge binnenwanden'],
        juist: [0, 2, 3],
        uitleg: 'De schil = begane-grondvloer + buitengevel + dak. Verdiepingsvloeren en binnenwanden zitten binnen het verwarmde volume en horen er niet bij.',
      },
      {
        type: 'mc',
        vraag: 'Hoort een verdiepingsvloer tot de thermische schil?',
        opties: ['Nee, die ligt binnen het verwarmde volume', 'Ja, altijd', 'Alleen bij een plat dak'],
        juist: 0,
        uitleg: 'Een verdiepingsvloer scheidt twee verwarmde lagen en zit dus binnen de schil, niet erin.',
      },
    ],
  },

  {
    id: 'metalen-corrosie',
    titel: 'Metalen en corrosie',
    blok: 'B',
    bron: 'Metalen · samenvatting 10',
    kernpunten: [
      'Van nature **roestbestendige (non-ferro) metalen**: **koper** (patina), **zink** (beschermlaag), **aluminium** (oxidelaagje) en **lood**.',
      '**Staal** (ijzer) **roest** wel en moet beschermd worden: **thermisch verzinken/galvaniseren**, coaten/schilderen, of **rvs** (roestvast staal) gebruiken.',
      '**Cortenstaal** vormt bewust een stabiele, beschermende roestlaag als afwerking.',
    ],
    vragen: [
      {
        type: 'multi',
        vraag: 'Welke metalen zijn van nature roestbestendig? (meerdere juist)',
        opties: ['koper', 'zink', 'staal', 'aluminium'],
        juist: [0, 1, 3],
        uitleg: 'Koper, zink en aluminium zijn roestbestendig (non-ferro). Staal roest wel, tenzij het verzinkt of rvs is.',
      },
      {
        type: 'mc',
        vraag: 'Hoe bescherm je gewoon staal tegen roest?',
        opties: ['Door het thermisch te verzinken (galvaniseren) of te coaten', 'Door het in de zon te leggen', 'Staal roest nooit'],
        juist: 0,
        uitleg: 'Staal beschermen kan door verzinken/galvaniseren, coaten/schilderen of door rvs te gebruiken.',
      },
    ],
  },

  {
    id: 'isolatie-toepassing',
    titel: 'Isolatiemateriaal kiezen (omkeerdak)',
    blok: 'B',
    bron: 'Isolatie / plat dak · samenvatting 20',
    kernpunten: [
      'Bij een **omkeerdak** ligt de isolatie **bóven de dakbedekking** — dus blootgesteld aan water en belasting. Het materiaal moet **drukvast** én **waterbestendig (gesloten cel)** zijn → **XPS (geëxtrudeerd polystyreen)**.',
      '**EPS** is licht en goedkoop maar **zuigt water op** (niet voor omkeerdak).',
      '**PUR/PIR** hebben een hoge isolatiewaarde maar zijn niet bedoeld voor blootgestelde, natte toepassingen.',
      '**Steen-/glaswol** isoleert en is brandwerend, maar is niet drukvast/waterbestendig genoeg voor een omkeerdak.',
    ],
    vragen: [
      {
        type: 'mc',
        scenario: 'De isolatie komt direct op de dakbedekking van een omkeerdak te liggen, moet drukvast zijn en tegen vocht kunnen.',
        vraag: 'Welk isolatiemateriaal is het meest geschikt?',
        opties: ['EPS', 'PIR', 'XPS (geëxtrudeerd polystyreen)'],
        juist: 2,
        uitleg: 'XPS is drukvast en waterbestendig (gesloten cel) → geschikt voor het omkeerdak. EPS zuigt water op; PUR/PIR zijn niet voor blootgestelde natte toepassingen.',
      },
      {
        type: 'sleep',
        vraag: 'Koppel het isolatiemateriaal aan zijn kenmerk.',
        categorieen: ['Drukvast + waterbestendig (omkeerdak)', 'Licht/goedkoop, zuigt water op', 'Onbrandbaar, minerale wol'],
        items: [
          { label: 'XPS', cat: 0 },
          { label: 'EPS', cat: 1 },
          { label: 'Steenwol', cat: 2 },
        ],
        uitleg: 'XPS = drukvast/waterbestendig; EPS = licht maar wateropnemend; steenwol = onbrandbare minerale wol.',
      },
    ],
  },

  {
    id: 'lateien-details',
    titel: 'Lateien en bouwdetails (kim)',
    blok: 'B',
    bron: 'Metsel-/staalconstructies · samenvatting 08/14',
    kernpunten: [
      'Een **latei** is de balk **boven een opening** (raam/deur) die de last opvangt. Types: **gewapend beton**, **stalen profiel** (L-, U-, HEB- of kokerprofiel), gemetselde **rollaag/strek**, of bij lichte (HSB-)constructies houten regelwerk.',
      'Bij een **zware belasting / grote overspanning** kies je een **stalen latei** (HEB of koker), niet houten regelwerk.',
      'De **kim** = de **aansluiting/hoek tussen vloer en muur** (de onderste aansluiting).',
    ],
    vragen: [
      {
        type: 'mc',
        vraag: 'Wat is een "kim"?',
        opties: ['De aansluiting tussen vloer en muur', 'Het waterdichte membraan aan de buitenzijde van de muur', 'Een ventilatieopening in het dak'],
        juist: 0,
        uitleg: 'De kim is de aansluiting/hoek tussen vloer en muur.',
      },
      {
        type: 'mc',
        vraag: 'Welke latei kies je boven een zwaarbelaste, brede opening?',
        opties: ['Een houten regel van 38×120 mm', 'Een stalen profiel (HEB of koker)', 'Een PVC-hoeklijn'],
        juist: 1,
        uitleg: 'Voor een zware/brede overspanning gebruik je een stalen latei (HEB of kokerprofiel); houten regelwerk is alleen voor lichte HSB-situaties.',
      },
    ],
  },

  {
    id: 'kruipruimte',
    titel: 'Kruipruimte — eisen, toegang & ventilatie',
    blok: 'B',
    bron: 'Funderingen / begane-grondvloer · samenvatting 05/15',
    kernpunten: [
      'De kruipruimte moet **toegankelijk** zijn voor inspectie en onderhoud → toegang via een **vloerluik (kruipluik)** in de begane-grondvloer (vaak in de hal/meterkast).',
      'De kruipruimte wordt **geventileerd** via muisdichte roosters/ventilatiekokers in de gevel — voorkomt vochtophoping, schimmel en houtrot.',
      'Zorg voor voldoende **kruiphoogte** (≈ 0,5 m) zodat leidingen bereikbaar zijn.',
    ],
    vragen: [
      {
        type: 'mc',
        vraag: 'Hoe wordt de toegang tot een kruipruimte meestal verschaft?',
        opties: ['Via een vloerluik (kruipluik) in de begane-grondvloer', 'Via een kastnis in de slaapkamer', 'Via een kruipgat in de buitenmuur'],
        juist: 0,
        uitleg: 'De kruipruimte is toegankelijk via een vloerluik/kruipluik in de begane-grondvloer. Een gat in de buitenmuur dient voor ventilatie, niet als toegang.',
      },
      {
        type: 'mc',
        vraag: 'Waarom moet een kruipruimte geventileerd worden?',
        opties: ['Om vochtophoping, schimmel en houtrot te voorkomen', 'Om de woning te verwarmen', 'Om geluid te dempen'],
        juist: 0,
        uitleg: 'Ventilatie voert vocht af, zodat er geen schimmel/houtrot ontstaat in de kruipruimte.',
      },
    ],
  },

  {
    id: 'verwarmingsketels',
    titel: 'Verwarmingsketels: HR, HRe en hybride',
    blok: 'C',
    bron: 'Warmte & cv · samenvatting 23',
    kernpunten: [
      '**HR-ketel** (Hoog Rendement): benut ook de **condensatiewarmte** van de rookgassen → zuinig.',
      '**HRe / hybride ketel**: een HR-ketel **gecombineerd met een warmtepomp** → **extra rendement** en **minder gas**.',
      'Vuistregel: **hoger rendement = minder gasverbruik**, niet meer.',
    ],
    vragen: [
      {
        type: 'mc',
        vraag: 'Waardoor behaalt een UHR-/hybride ketel extra rendement?',
        opties: ['Door een gecombineerde warmtepomp', 'Doordat hij veel meer gas gebruikt', 'Doordat hij zonder gasaansluiting werkt'],
        juist: 0,
        uitleg: 'Een hybride/UHR-ketel combineert de HR-ketel met een warmtepomp voor extra rendement — en gebruikt juist minder gas.',
      },
      {
        type: 'mc',
        vraag: 'Waaraan dankt een HR-ketel zijn hoge rendement?',
        opties: ['Aan het benutten van de condensatiewarmte uit de rookgassen', 'Aan een grotere vlam', 'Aan het loslaten van rookgassen zonder filter'],
        juist: 0,
        uitleg: 'De HR-ketel wint extra warmte terug door de waterdamp in de rookgassen te laten condenseren.',
      },
    ],
  },

  {
    id: 'buitenriolering',
    titel: 'Buitenriolering & beluchting',
    blok: 'C',
    bron: 'Riolering & sanitair · samenvatting 21',
    kernpunten: [
      '**Buitenriolering** (op eigen terrein): de **terreinleiding**, het **ontstoppingsstuk / de inspectieput** en de huisaansluiting op het gemeenteriool.',
      'Een **grondwaterpomp** hoort bij **drainage/bemaling**, niet bij de riolering.',
      'De **ontspanningsleiding** staat **verticaal** tot **boven het dakvlak**; ze zorgt voor **aanvoer van lucht** en voorkomt **onderdruk** die de sifons zou leegzuigen.',
    ],
    vragen: [
      {
        type: 'multi',
        vraag: 'Welke onderdelen horen bij de buitenriolering? (meerdere juist)',
        opties: ['terreinleiding', 'ontstoppingsstuk', 'sifon', 'grondwaterpomp'],
        juist: [0, 1],
        uitleg: 'Terreinleiding en ontstoppingsstuk horen bij de buitenriolering. De sifon zit in de binnenriolering; een grondwaterpomp hoort bij drainage/bemaling.',
      },
      {
        type: 'invul',
        vraag: 'Vul de functie van de ontspanningsleiding aan:',
        delen: [
          'De ontspanningsleiding staat ',
          { opties: ['verticaal', 'horizontaal'], juist: 0 },
          ' tot boven het dak en zorgt voor de ',
          { opties: ['aanvoer', 'afvoer'], juist: 0 },
          ' van lucht, om zo ',
          { opties: ['onderdruk', 'overdruk'], juist: 0 },
          ' in het rioolsysteem te voorkomen.',
        ],
        uitleg: 'De ontspanningsleiding (verticaal, tot boven het dak) laat lucht toe (aanvoer) en voorkomt onderdruk, zodat de watersloten (sifons) niet worden leeggezogen.',
      },
    ],
  },

  {
    id: 'bestek-tekening',
    titel: 'Bestek & bouwtekening lezen',
    blok: 'A',
    bron: 'Bestek & tekeningen · samenvatting 03',
    kernpunten: [
      'Op **plattegrond/doorsnede** (BLAD) lees je maten en **peilmaten** (b.k. vloer, PEIL = 0). De **renvooi** verklaart alle symbolen (mv, CV, rookmelder, wandtypes).',
      'De **overspanning** van een vloer = de **afstand tussen de opleggingen** (steunpunten) — niet de kamerbreedte inclusief muren.',
      '**Principe-/detailtekeningen (A3)** tonen aansluitingen (kozijn, ventilatierooster, latei) op grote schaal (1:5/1:10).',
      'In het **bestek** staan de **materiaal- en kwaliteitseisen** (bv. RAL-kleur, HR++-glas, inbraakwerendheidsklasse, isolatiewaarde).',
    ],
    vragen: [
      {
        type: 'mc',
        vraag: 'Wat is de overspanning van een vloer op een bouwtekening?',
        opties: ['De afstand tussen de opleggingen (steunpunten)', 'De totale kamerbreedte inclusief muren', 'De dikte van de vloer'],
        juist: 0,
        uitleg: 'De overspanning is de vrije afstand tussen de steunpunten waarop de vloer rust, niet de kamermaat.',
      },
      {
        type: 'mc',
        vraag: 'Waar vind je de materiaal- en kwaliteitseisen (bv. glastype en RAL-kleur)?',
        opties: ['In het bestek', 'Alleen op de situatietekening', 'In de renvooi'],
        juist: 0,
        uitleg: 'Materiaal- en kwaliteitseisen staan in het bestek; de tekening toont maten/vorm en de renvooi verklaart de symbolen.',
      },
    ],
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// AFSLUITEND EXAMEN — verse vragen, in examenvolgorde (B, A, D, C)
// ─────────────────────────────────────────────────────────────────────────────

export interface ExamenVraag {
  blok: Blok
  onderwerp: string
  vraag: Vraag
}

export const examenVragen: ExamenVraag[] = [
  // ── B. Constructieve opbouw ──
  {
    blok: 'B', onderwerp: 'Bemaling',
    vraag: {
      type: 'mc',
      scenario: 'Bij een bouwput staan rondom verticale filterbuizen; ze zijn met een zuigleiding op een pomp aangesloten en verlagen de grondwaterstand.',
      vraag: 'Welke bemaling wordt toegepast?',
      opties: ['open bemaling', 'spanningsbemaling', 'bronbemaling'],
      juist: 2,
      uitleg: 'Filterbuizen + zuigleiding + pomp = bronbemaling.',
    },
  },
  {
    blok: 'B', onderwerp: 'Bemaling',
    vraag: {
      type: 'invul', vraag: 'Vul aan:',
      delen: [
        { opties: ['Spanningsbemaling', 'Open bemaling'], juist: 0 },
        ' verlaagt de waterspanning in een diep, afgesloten zandpakket om ',
        { opties: ['opbarsten van de putbodem', 'inklinking van klei'], juist: 0 },
        ' te voorkomen.',
      ],
      uitleg: 'Spanningsbemaling verlaagt de stijghoogte in het gespannen pakket → voorkomt opbarsten.',
    },
  },
  {
    blok: 'B', onderwerp: 'Goten',
    vraag: {
      type: 'mc',
      scenario: 'Twee hellende dakvlakken komen samen in een binnenhoek; in die hoek ligt een metalen goot waar het water langs afloopt.',
      vraag: 'Welke goot is dit?',
      opties: ['verholen goot', 'kilgoot', 'mastgoot'],
      juist: 1,
      uitleg: 'De goot in de binnenhoek (kil) waar twee dakvlakken samenkomen is de kilgoot.',
    },
  },
  {
    blok: 'B', onderwerp: 'Houtsoorten',
    vraag: {
      type: 'mc',
      scenario: 'Een constructiebalk is licht geelwit, heeft duidelijke jaarringen en enkele kwasten.',
      vraag: 'Welke houtsoort is dit?',
      opties: ['eiken', 'vuren', 'meranti'],
      juist: 1,
      uitleg: 'Licht geelwit naaldhout met kwasten = vuren.',
    },
  },
  {
    blok: 'B', onderwerp: 'Balklaag',
    vraag: {
      type: 'sleep',
      vraag: 'Plaats elke balk bij zijn functie in een balklaag met sparing.',
      categorieen: ['Vangt de onderbroken balken op (dwars)', 'Verdubbeld, draagt de raveelbalk'],
      items: [
        { label: 'Raveelbalk', cat: 0 },
        { label: 'Wisselbalk', cat: 1 },
      ],
      uitleg: 'Raveelbalk vangt op; wisselbalk (verdubbeld) draagt de raveelbalk.',
    },
  },

  // ── A. Algemeen ──
  {
    blok: 'A', onderwerp: 'Bouwfasen',
    vraag: {
      type: 'mc',
      vraag: 'In welke fase wordt de aanbestedingsprocedure gestart?',
      opties: ['Initiatieffase', 'Voorbereidingsfase', 'Exploitatiefase'],
      juist: 1,
      uitleg: 'Aanbesteden hoort bij de voorbereidingsfase (vergunning + aannemer kiezen).',
    },
  },
  {
    blok: 'A', onderwerp: 'Bouwfasen',
    vraag: {
      type: 'mc',
      vraag: 'Wat hoort bij de initiatieffase?',
      opties: ['Voorstellen van een projectplan', 'Opleveren van het gebouw', 'Uitvoeren van het metselwerk'],
      juist: 0,
      uitleg: 'De initiatieffase draait om idee, haalbaarheid en het projectplan.',
    },
  },
  {
    blok: 'A', onderwerp: 'Bouwmethoden',
    vraag: {
      type: 'mc',
      scenario: 'Een betonnen koeltoren wordt ter plaatse met een klimbekisting gestort.',
      vraag: 'Welke bouwmethode is toegepast?',
      opties: ['skeletbouw', 'gietbouw', 'elementenbouw'],
      juist: 1,
      uitleg: 'Beton ter plaatse in een bekisting storten = gietbouw.',
    },
  },

  // ── D. Kwaliteitsbeoordeling ──
  {
    blok: 'D', onderwerp: 'VvE',
    vraag: {
      type: 'sleep',
      vraag: 'Wel of geen taak van het VvE-bestuur?',
      categorieen: ['Wel een bestuurstaak', 'Geen bestuurstaak'],
      items: [
        { label: 'Het meerjarenonderhoudsplan opstellen', cat: 0 },
        { label: 'Het controleren van de kas', cat: 1 },
      ],
      uitleg: 'MJOP opstellen = bestuur; de kas controleren doet de kascommissie.',
    },
  },
  {
    blok: 'D', onderwerp: 'VvE',
    vraag: {
      type: 'mc',
      vraag: 'Welk orgaan is het hoogste binnen een VvE en neemt de besluiten?',
      opties: ['Het bestuur', 'De vergadering van eigenaars (ALV)', 'De kascommissie'],
      juist: 1,
      uitleg: 'De vergadering van eigenaars (ALV) is het hoogste orgaan en neemt de besluiten; het bestuur voert ze uit.',
    },
  },

  // ── C. Afwerking en installaties ──
  {
    blok: 'C', onderwerp: 'Natuursteen',
    vraag: {
      type: 'mc',
      scenario: 'Een steen is korrelig-kristallijn met zichtbare mineraalkorrels, zonder lagen of fossielen.',
      vraag: 'Tot welke hoofdgroep behoort deze steen?',
      opties: ['afzettingsgesteente', 'stollingsgesteente', 'metamorf gesteente'],
      juist: 1,
      uitleg: 'Korrelig-kristallijn zonder lagen (bv. graniet) = stollingsgesteente.',
    },
  },
  {
    blok: 'C', onderwerp: 'Natuursteenbewerking',
    vraag: {
      type: 'mc',
      scenario: 'Het steenoppervlak is bewerkt met een spijkerhamer en heeft een pokdalig, gestippeld uiterlijk.',
      vraag: 'Welke bewerking is dit?',
      opties: ['gefrijnd', 'gebouchardeerd', 'gepolijst'],
      juist: 1,
      uitleg: 'Pokdalig/gestippeld met de bouchardehamer = boucharderen. Frijnen geeft juist parallelle groeven.',
    },
  },
  {
    blok: 'C', onderwerp: 'Binnenriolering',
    vraag: {
      type: 'multi',
      vraag: 'Welke leidingen horen bij de binnenriolering? (meerdere juist)',
      opties: ['standleiding', 'hemelwaterafvoer', 'verzamelleiding', 'ontspanningsleiding'],
      juist: [0, 2, 3],
      uitleg: 'Stand-, verzamel- en ontspanningsleiding horen bij de binnenriolering; hemelwaterafvoer is een apart regenwatersysteem.',
    },
  },
  {
    blok: 'C', onderwerp: 'Elektra',
    vraag: {
      type: 'invul', vraag: 'Vul aan:',
      delen: [
        'De ',
        { opties: ['nuldraad', 'fasedraad'], juist: 1 },
        ' is bruin (of zwart/grijs) en zorgt voor de ',
        { opties: ['aanvoer', 'afvoer'], juist: 0 },
        ' van de stroom.',
      ],
      uitleg: 'De fasedraad (bruin/zwart/grijs) voert de stroom aan; blauw = nul (retour), geel-groen = aarde.',
    },
  },
  {
    blok: 'C', onderwerp: 'Ventilatie',
    vraag: {
      type: 'mc',
      vraag: 'Welk ventilatiesysteem heeft natuurlijke toevoer en mechanische afvoer?',
      opties: ['Systeem A', 'Systeem C', 'Systeem D'],
      juist: 1,
      uitleg: 'Systeem C = natuurlijke toevoer (roosters) + mechanische afvoer (afzuigbox). D is mechanisch/mechanisch.',
    },
  },

  // ── Extra examenvragen bij de nieuwe onderwerpen ──
  {
    blok: 'D', onderwerp: 'Energieprestatie',
    vraag: {
      type: 'multi',
      vraag: 'Welke maatregelen verbeteren de energieprestatie van een woning? (meerdere juist)',
      opties: ['Isolatie in de binnenwanden', 'Warmteterugwinning (WTW)', 'Enkelglas vervangen door HR++-glas', 'Energiezuinige apparaten'],
      juist: [1, 2, 3],
      uitleg: 'WTW, beter glas en energiezuinige apparaten tellen mee; binnenwand-isolatie niet (alleen de buitenschil).',
    },
  },
  {
    blok: 'D', onderwerp: 'Thermische schil',
    vraag: {
      type: 'multi',
      vraag: 'Welke onderdelen vormen de thermische schil? (meerdere juist)',
      opties: ['Begane-grondvloer', 'Verdiepingsvloer', 'Buitengevel', 'Dak'],
      juist: [0, 2, 3],
      uitleg: 'Begane-grondvloer + buitengevel + dak. De verdiepingsvloer zit binnen het verwarmde volume.',
    },
  },
  {
    blok: 'B', onderwerp: 'Metalen en corrosie',
    vraag: {
      type: 'multi',
      vraag: 'Welke metalen zijn van nature roestbestendig? (meerdere juist)',
      opties: ['koper', 'zink', 'staal', 'aluminium'],
      juist: [0, 1, 3],
      uitleg: 'Koper, zink en aluminium; staal roest wel (tenzij verzinkt/rvs).',
    },
  },
  {
    blok: 'B', onderwerp: 'Isolatie',
    vraag: {
      type: 'mc',
      scenario: 'Bij een omkeerdak ligt de isolatie boven de dakbedekking, moet drukvast zijn en tegen water kunnen.',
      vraag: 'Welk isolatiemateriaal is het meest geschikt?',
      opties: ['EPS', 'XPS', 'PIR'],
      juist: 1,
      uitleg: 'XPS is drukvast en waterbestendig (gesloten cel) — geschikt voor het omkeerdak.',
    },
  },
  {
    blok: 'C', onderwerp: 'Verwarmingsketels',
    vraag: {
      type: 'mc',
      vraag: 'Waardoor behaalt een hybride/UHR-ketel extra rendement?',
      opties: ['Door meer gas te gebruiken', 'Door een gecombineerde warmtepomp', 'Door zonder gasaansluiting te werken'],
      juist: 1,
      uitleg: 'Een hybride ketel combineert de HR-ketel met een warmtepomp; hoger rendement betekent minder gas.',
    },
  },
  {
    blok: 'C', onderwerp: 'Buitenriolering',
    vraag: {
      type: 'multi',
      vraag: 'Welke onderdelen horen bij de buitenriolering? (meerdere juist)',
      opties: ['terreinleiding', 'ontstoppingsstuk', 'grondwaterpomp', 'sifon'],
      juist: [0, 1],
      uitleg: 'Terreinleiding en ontstoppingsstuk. Een grondwaterpomp hoort bij bemaling; de sifon bij de binnenriolering.',
    },
  },
]
