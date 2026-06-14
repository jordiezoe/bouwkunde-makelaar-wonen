import type { Topic } from '../types/content'

const FIG = '/figs/B_5'
const SRC = 'Lesboek hfd. 8'
const SRC_KZ = 'Lesboek hfd. 7'

export const B_5_steenconstructies: Topic = {
  code: 'B.5',
  section: 'B',
  title: 'Steenconstructies',
  chapterRef: 'Lesboek hoofdstukken 6–8',
  blurb:
    'Functies en eisen van steenconstructies, gebakken vs. niet-gebakken stenen, steenformaten, metselverbanden, lateien en bogen, voegwerk en muurafdekkingen.',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · Functies en eisen van steenconstructies',
      toetstermCodes: ['B.5.1'],
      body: `
Een gemetselde wand kan een **dragende** of **niet-dragende** functie hebben en levert in beide gevallen een bijdrage aan de **stabiliteit** van het gebouw. De aan de wand gestelde eisen hangen daarmee samen:

- **Druksterkte** — een dragende muur moet het bovenliggende gewicht (vloeren, dak, sneeuw, mensen) opnemen
- **Stabiliteit** — niet kantelen of knikken; halfsteens binnenmuren worden vaak als penanten of met wapeningsstroken stabiel gemaakt
- **Brandwerendheid** — steen is van zichzelf onbrandbaar (eis volgens Bbl)
- **Geluidsisolatie** — vooral bij woningscheidende muren: massa = isolatie tegen luchtgeluid
- **Thermische isolatie** — sinds 1920 vrijwel altijd opgelost via de **spouwmuur** met isolatie
- **Vochtwering** — een buitenmuur moet regendoorslag tegenhouden

Het lesboek onderscheidt drie hoofdvormen op basis van dikte:

- **Halfsteensmuur** (~100 mm) — alleen bij binnenmuren of als spouwblad
- **Steensmuur** (~210 mm) — bouwmuren van eenvoudige woningen, scheidingsmuren
- **Spouwmuur** — twee bladen + spouw + spouwankers + isolatie; standaard buitenmuur sinds ~1920
      `.trim(),
      images: [
        {
          src: `${FIG}/muurdikten.jpg`,
          caption:
            'Muurdikten: van halfsteens (links) tot anderhalfsteens. Type d is een klampmuur — poreuze steen op de kant, vroeger voor akoestische ruimtes.',
          source: SRC,
          width: 'lg',
        },
      ],
    },

    {
      heading: '2 · De spouwmuur',
      toetstermCodes: ['B.5.1'],
      body: `
De **spouwmuur** bestaat uit een buiten- en binnenspouwblad, gescheiden door een **luchtspouw** met **isolatie** (meestal tegen het binnenspouwblad geplakt). Beide bladen worden met **spouwankers** aan elkaar gekoppeld zodat ze samenwerken bij windbelasting.

**Aandachtspunten bij de spouwmuur**:

- **Spouwankers** moeten een neerwaartse knik hebben (zodat valspecie er niet op blijft liggen en een vochtbrug vormt)
- **Open stootvoegen** onderin het buitenblad voeren spouwvocht af
- **Isolatie tegen binnenspouwblad** — niet tegen het buitenblad, want het buitenblad mag nat worden
- **Koudebruggen vermijden** bij latei-oplegging en bij de begane grond (cellulair-glasstrook)

Vóór 1920 werden buitenmuren meestal **massief** uitgevoerd (steensmuur of dikker). Bij oudere panden kan dus regendoorslag optreden als er te zacht baksteen of zwakke specie is toegepast.
      `.trim(),
      images: [
        {
          src: '/figs/tekeningen/spouwmuur.svg',
          caption:
            'Horizontale doorsnede van een spouwmuur: buitenblad (½ steen metselwerk), luchtspouw, isolatie tegen het binnenblad, en het dragende binnenblad. Spouwankers koppelen beide bladen.',
          source: 'Eigen tekening',
          width: 'lg',
        },
        {
          src: `${FIG}/spouwmuur.jpg`,
          caption:
            'Spouwmuur met isolatie tegen het binnenspouwblad. De luchtspouw zorgt voor afvoer van spouwvocht.',
          source: SRC,
          width: 'md',
        },
        {
          src: `${FIG}/spouwankers.jpg`,
          caption:
            'Spouwankers koppelen de bladen — gemiddeld 4 stuks per m². Schuine plaatsing voorkomt dat valspecie een vochtbrug vormt.',
          source: SRC,
          width: 'md',
        },
      ],
    },

    {
      heading: '3 · Gebakken vs. niet-gebakken stenen',
      toetstermCodes: ['B.5.2', 'B.5.9'],
      body: `
Twee fundamenteel verschillende fabricagewegen:

**Gebakken stenen** (kleiproducten):
- *Handvormsteen* — in de vorm geworpen, levendig oppervlak
- *Vormbaksteen* — machinaal in vormbakken geperst, regelmatig
- *Strengperssteen* — uit een doorlopend gevormde streng gesneden, scherp en glad — typisch voor jugendstil/art deco
- *Verblendsteen* — extra dichtgebakken, glad, voor representatieve gevels
- *Geglazuurde steen* — afgewerkt met glazuurlaag

**Niet-gebakken stenen**:
- **Kalkzandsteen** — kalk + zand + water onder stoomdruk; vanaf 1904 grootschalig, vanaf ~1960 ook voor buitenmuren
- **Betonsteen** — cement + zand + grind; sinds begin 20e eeuw

Kalkzandsteen en cellenbeton worden in moderne bouw vaak **verlijmd** met een dunne lijmlaag van ~2 mm — visueel **voegloos**. Dat versnelt het bouwen aanzienlijk en geeft een vlak binnenoppervlak dat met minder stucwerk afgewerkt kan worden.
      `.trim(),
      images: [
        {
          src: `${FIG}/kalkzandsteen.jpg`,
          caption:
            'Kalkzandsteen in verschillende structuren en kleuren (wit, geel, antraciet, muisgrijs).',
          source: SRC_KZ,
          width: 'md',
        },
        {
          src: `${FIG}/kalkzandsteen-lier.jpg`,
          caption:
            'Grote kalkzandsteenblokken worden met een lier verplaatst — typisch voor moderne lijmsteenbouw.',
          source: SRC_KZ,
          width: 'md',
        },
      ],
    },

    {
      heading: '4 · Steenformaten',
      toetstermCodes: ['B.5.3'],
      body: `
Belangrijkste formaten in Nederland (ongeveerlijk, lengte × breedte × hoogte):

- **Waalformaat (WF)** ≈ 210 × 100 × 50 mm — de huidige standaard
- **Vechtformaat (VF)** ≈ 210 × 100 × 65 mm — iets hoger
- **IJsselformaat** ≈ 165 × 80 × 40 mm — klein, oude binnensteden
- **Rijnformaat** ≈ 240 × 115 × 70 mm — iets groter
- **Kloostermop** ≈ 285 × 135 × 85 mm — middeleeuws

Als vuistregel geldt: **hoe ouder het pand, hoe groter de baksteen**. Een kloostermop in een gevel verraadt dus middeleeuwse oorsprong. De afname is in de loop der eeuwen geleidelijk gegaan; pas vanaf ~1700 ontstond een redelijk uniforme standaard.

**Steenstukken** bij het metselen om het verband sluitend te krijgen:

- **Strek** — steen met de lange zijde in het zicht
- **Kop** — steen met de korte zijde in het zicht
- **Klezoor** — kwart steen (¼) op de hoek tegen doorlopende stootvoegen
- **Drieklezoor** — drie kwart steen
- **Halve steen** — een halve lengte, bv. om een verband te sluiten
      `.trim(),
      images: [
        {
          src: `${FIG}/steenstukken.jpg`,
          caption:
            'Steenstukken: hele steen (strek), drieklezoor, halve steen, klezoor, kop.',
          source: SRC,
          width: 'lg',
        },
      ],
    },

    {
      heading: '5 · Lagenmaat en koppenmaat',
      toetstermCodes: ['B.5.4'],
      body: `
Voor maatvoering en het herkennen van een metselverband zijn twee begrippen essentieel:

- **Lagenmaat** = de totale hoogte van een vooraf vastgesteld aantal lagen, *inclusief* de tussenliggende lintvoegen. Bijvoorbeeld 5 lagen Waalformaat: 5 × 50 mm steen + 5 × 12 mm voeg = 310 mm.
- **Koppenmaat** = hetzelfde principe in de breedte: aantal koppen × steenbreedte + tussenvoegen.

**Lintvoeg** = horizontale voeg, **stootvoeg** = verticale voeg. Bij een correct metselverband **verspringen** de stootvoegen — anders zou een muur als losse kolommen werken en niet als geheel.
      `.trim(),
      images: [
        {
          src: `${FIG}/lintvoeg-stootvoeg.jpg`,
          caption:
            'Begrippen bij het metselen: lintvoeg (horizontaal), stootvoeg (verticaal), koppen-, strek- en lagenmaat.',
          source: SRC,
          width: 'lg',
        },
      ],
    },

    {
      heading: '6 · Metselverbanden',
      toetstermCodes: ['B.5.5'],
      body: `
Een **metselverband** is het patroon waarin de stenen liggen zodat stootvoegen niet doorlopen. Belangrijkste verbanden:

- **Halfsteensverband** — stootvoegen verspringen ½ steen; standaard voor spouwbladen vanaf ~1920
- **Klezorenverband** — variant met een klezoor in elke laag; stootvoegen verspringen ¼ steen; herkenbaar aan staande tand
- **Staand verband** — koppen- en strekkenlagen wisselen elkaar af
- **Kruisverband** — strekkenlagen verspringen ½ steen ten opzichte van elkaar; **Nederlandse standaard** voor steensmuren vanaf de 15e eeuw
- **Vlaams verband** — in elke laag afwisselend een kop en een strek
- **Koppen- of patijtsverband** — uitsluitend koppen, verspringing ¼ steen; vooral bij gebogen muren of gewelfde delen
- **Wild of vrij verband** — geen patroon; sinds ~1960 (sorteren is te duur geworden)
      `.trim(),
      diagrams: [
        { type: 'verband', name: 'halfsteensverband' },
        { type: 'verband', name: 'klezorenverband' },
        { type: 'verband', name: 'kruisverband' },
        { type: 'verband', name: 'staandVerband' },
        { type: 'verband', name: 'vlaamsVerband' },
        { type: 'verband', name: 'koppenverband' },
      ],
    },

    {
      heading: '7 · Lateien en overspanningen',
      toetstermCodes: ['B.5.6', 'B.5.7'],
      body: `
Een **latei** overspant een gevelopening (raam, deur) en draagt het bovenliggende metselwerk. Belangrijke typen:

- **Stalen latei** — L-, U- of T-profiel; bij een spouwmuur vaak een **kantelprofiel** dat zowel het binnenspouwblad als de voorgevelsteen draagt
- **Geveldrager** — stalen drager waaraan het voorgevelsteen wordt opgehangen via een afgehangen lip
- **Betonlatei** — prefab of in het werk gestort; soms **blind** (achter een gemetselde rollaag verstopt)
- **Staltonlatei** — gewapend metselwerkbalkje met een ingelegde wapeningskorf; typisch voor jaren ’60–’80

**Gemetselde lateien** (esthetisch en historisch) bestaan uit een patroon van stenen op kant of in een boog:

- **Rollaag** — stenen op kant in halfsteens dikte; eenvoudig en goedkoop
- **Strek of hanenkam** — taps gehakte stenen die elkaar wigvormig dragen
- **Segmentboog** — vlakke, ronde boog
- **Ellipsboog** — afgevlakte boog met twee krommingen
- **Rondboog** — half-cirkel, Romeinse stijl
- **Spitsboog** — gotische puntboog

**Belangrijk bij oplegging**: tussen een betonlatei en het bovenliggend metselwerk komt vaak een strook **lood of bouwfolie**, want de uitzettingscoëfficiënt van beton is ~2× die van baksteen. Bij de oplegging zelf een laag **bouwvilt** en een plastische kopvoeg, zodat de latei vrij kan werken.
      `.trim(),
      images: [
        {
          src: `${FIG}/stalen-latei.jpg`,
          caption: 'Stalen latei in een spouwmuur — kantelprofiel draagt beide bladen.',
          source: SRC,
          width: 'md',
        },
        {
          src: `${FIG}/staltonlatei.jpg`,
          caption: 'Staltonlatei in een spouwmuur (links) en halfsteensmuur (rechts).',
          source: SRC,
          width: 'md',
        },
        {
          src: `${FIG}/strek-hanenkam.jpg`,
          caption: 'Strek of hanenkam — taps gehakte stenen op kant, klassieke gemetselde latei.',
          source: SRC,
          width: 'md',
        },
      ],
      diagrams: [
        { type: 'boog', name: 'segmentboog' },
        { type: 'boog', name: 'ellipsboog' },
        { type: 'boog', name: 'rondboog' },
        { type: 'boog', name: 'spitsboog' },
      ],
    },

    {
      heading: '8 · Voegwerk',
      toetstermCodes: ['B.5.8', 'B.5.9'],
      body: `
Vanaf de 16e eeuw wordt apart **gevoegd**, dus de voeg wordt na het metselen uitgekrabd en met een speciale voegmortel ingevuld. De vorm van de voeg beïnvloedt het aanzicht en de waterwerendheid:

- **Platvolle voeg** — gladweg met de troffel afgewerkt, eenvoudig
- **Verdiepte voeg** — uitgekrabd; geeft slagschaduw — vanaf de Amsterdamse School (~1920)
- **Schaduwvoeg** — sterk verdiept aan onderzijde, plat aan boven — geprononceerd
- **Snijvoeg / gesneden voeg** — siervoeg met scherpe lijnvorming; vanaf de 17e eeuw
- **Knipvoeg / geknipte voeg** — siervoeg met een opstaande "knip" (rib) erin; vanaf de 19e eeuw
- **Doorgestreken voeg** — direct met de troffel gladgestreken; geen apart voegwerk — herkenbaar aan vlekken specie naast de voeg

**Voegloos werken** kom je tegen bij verlijmde cellenbeton- en kalkzandsteenblokken (dunne lijmlaag), en bij prefab betonelementen die met dunne kit- of foamband worden aangesloten.
      `.trim(),
      images: [
        {
          src: `${FIG}/voegtypen.jpg`,
          caption:
            'Voegtypen, van boven naar beneden: geknipt, platvol, verdiept. De keuze beïnvloedt schaduwwerking en waterwering.',
          source: SRC,
          width: 'lg',
        },
      ],
    },

    {
      heading: '9 · Muurafdekkingen en aansluitingen',
      toetstermCodes: ['B.5.6'],
      body: `
Boven op een muur die in de buitenlucht eindigt (bv. tuinmuur, dakopstand, balustrade) komt een **muurafdekking** om vocht uit het metselwerk te weren. Belangrijke vormen:

- **Rollaag** — eenvoudig, stenen op kant
- **Ezelsrug** — schuine afdekking met top in het midden; afwatert naar twee zijden
- **Ezelsrug met druiprand** — extra inkeping zodat water niet onder de afdek terugloopt
- **Natuursteen of prefab beton** op een borstwering — duurzaamst, met overstek

**Aansluitingen** waar metselwerk botst op andere materialen (dakgoot, schoorsteen, kozijn) krijgen vaak **loodslabben**: een strook lood die het water naar buiten leidt. Belangrijk bij oude pannendaken (schoorsteen) en bij balkonaansluitingen.

**Vlechtingen** zijn een sierpatroon op topgevels waar het metselwerk schuin de helling van het dak volgt; typisch voor 17e–19e-eeuwse panden.
      `.trim(),
      images: [
        {
          src: `${FIG}/muurafdekkingen.jpg`,
          caption:
            'Muurafdekkingen: (a) rollaag, (b) ezelsrug, (c) ezelsrug met druiprand, (d) natuursteen op borstwering.',
          source: SRC,
          width: 'lg',
        },
      ],
    },

    {
      heading: '10 · Veelvoorkomende gebreken bij steenconstructies',
      body: `
Als makelaar moet je gangbare gebreken bij gemetselde gevels herkennen. De meest voorkomende:

- **Regendoorslag** — te zachte stenen of zwakke voegmortel; vooral bij massieve oude buitenmuren
- **Vorstschade / afspringend metselwerk** — water in poreuze stenen bevriest en duwt schilfers af
- **Muuruitslag** — witte uitbloei door vrije kalk uit specie of steen; verdwijnt vaak vanzelf na enkele jaren
- **Scheurvorming** — door zetting, temperatuurwerking of ontbrekende dilataties
- **Koudebrug** — bij latei-oplegging of begane grond; lokaal condens, schimmel binnenshuis
- **Vochtbrug in de spouw** — valspecie op latei of spouwanker, of in de spouw gevallen stuk steen; geeft natte plek aan de binnenkant
- **Loslatend voegwerk** — schraal voegwerk (te veel zand, te weinig bindmiddel) krabbel je met een nagel uit; vraagt om opnieuw voegen
      `.trim(),
    },
  ],

  toetstermen: [
    {
      code: 'B.5.1',
      text: 'Legt de functies dragende en niet-dragende functie, stabiliteit, halfsteensmuur, steensmuur en spouwmuur van steenconstructies en de daaraan te stellen eisen uit.',
      niveau: 'BT1',
      bloom: 'Begrip',
    },
    {
      code: 'B.5.2',
      text: 'Onderscheidt gebakken en niet-gebakken bakstenen.',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'B.5.3',
      text: 'Benoemt de meest voorkomende verschijningsvormen (ijsselformaat, rijnformaat, waalformaat, vechtformaat en kloostermop).',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'B.5.4',
      text: 'Benoemt de maten lagenmaat en koppenmaat die voor metselwerk gebruikt worden.',
      niveau: 'BT2',
      bloom: 'Kennis',
      metDrawing: true,
    },
    {
      code: 'B.5.5',
      text: 'Herkent de metselverbanden die toegepast worden in éénsteensmuren en halfsteensmuren.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
    {
      code: 'B.5.6',
      text: 'Licht de uitvoering van aansluiting tussen metselwerk en andere bouwconstructies (loodslabben en oplegging lateien) toe.',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
    {
      code: 'B.5.7',
      text: 'Herkent de lateien: stalen latei, geveldrager, betonlatei en gemetselde latei (rollaag, strek, rondboog en spitsboog).',
      niveau: 'BT2',
      bloom: 'Kennis',
      metDrawing: true,
    },
    {
      code: 'B.5.8',
      text: 'Herkent de soorten voegwerk: platvolle voeg, verdiepte voeg, schaduwvoeg, gesneden voeg, geknipte voeg, doorgestreken voeg.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
    {
      code: 'B.5.9',
      text: 'Herkent bouwmethoden waarbij voegloos gewerkt wordt.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
  ],

  questions: [
    // B.5.1 — Functies en eisen (BT1, Begrip)
    {
      id: 'B.5.q1',
      toetstermCode: 'B.5.1',
      type: 'mc',
      prompt: 'Wat is het kenmerkende verschil tussen een halfsteensmuur en een steensmuur?',
      options: [
        'De halfsteensmuur is ~100 mm dik, de steensmuur ~210 mm.',
        'Een halfsteensmuur wordt altijd in kruisverband gemetseld, een steensmuur in halfsteensverband.',
        'Een halfsteensmuur heeft nooit een dragende functie, een steensmuur per definitie wél.',
        'Een halfsteensmuur bestaat alleen uit kalkzandsteen, een steensmuur uit baksteen.',
      ],
      correctIndex: 0,
      explanation:
        'De aanduiding verwijst naar de dikte (~½ steen ≈ 100 mm vs. een hele steen ≈ 210 mm). Of een muur draagt hangt af van de constructie, niet van de dikte alleen.',
    },
    {
      id: 'B.5.q2',
      toetstermCode: 'B.5.1',
      type: 'mc',
      prompt: 'Wat is de functie van spouwankers in een spouwmuur?',
      options: [
        'Ze voorkomen dat regenwater de spouw binnendringt.',
        'Ze koppelen het binnen- en buitenspouwblad zodat de muur als één geheel windbelasting opneemt.',
        'Ze ondersteunen de spouwisolatie tegen wegzakken.',
        'Ze vervangen lateien boven kozijnopeningen.',
      ],
      correctIndex: 1,
      explanation:
        'Spouwankers koppelen beide bladen zodat het buitenblad niet apart wordt belast door wind. Een neerwaartse knik in het anker voorkomt dat valspecie een vochtbrug vormt.',
    },
    {
      id: 'B.5.q3',
      toetstermCode: 'B.5.1',
      type: 'mc',
      prompt: 'Waarom wordt de isolatie in een spouwmuur tegen het binnenspouwblad geplaatst en niet tegen het buitenblad?',
      options: [
        'Omdat het binnenspouwblad gladder is en de isolatie beter hecht.',
        'Het buitenblad mag nat worden; de isolatie blijft droog tegen het binnenblad.',
        'Om gewichtsverdeling in de muur te verbeteren.',
        'Vanwege brandwerendheidseisen.',
      ],
      correctIndex: 1,
      explanation:
        'Het buitenspouwblad raakt door regen vochtig. De isolatie ertegenaan zou nat worden (en zijn isolerende werking verliezen). Tegen het binnenblad blijft hij droog; de luchtspouw voert vocht af via open stootvoegen.',
    },

    // B.5.2 — Gebakken / niet-gebakken (BT1, Kennis)
    {
      id: 'B.5.q4',
      toetstermCode: 'B.5.2',
      type: 'mc',
      prompt: 'Welke steen is géén gebakken steen?',
      options: ['Verblendsteen', 'Kloostermop', 'Kalkzandsteen', 'Strengperssteen'],
      correctIndex: 2,
      explanation:
        'Kalkzandsteen wordt onder stoomdruk gevormd uit kalk, zand en water — zonder oven. De andere drie komen wel uit een baksteenoven.',
    },
    {
      id: 'B.5.q5',
      toetstermCode: 'B.5.2',
      type: 'mc',
      prompt: 'Welke gebakken steen is herkenbaar aan een zeer glad, scherp oppervlak en wordt vaak toegepast in jugendstil- en art-decogevels?',
      options: ['Handvormsteen', 'Vormbaksteen', 'Strengperssteen', 'Klampsteen'],
      correctIndex: 2,
      explanation:
        'Strengperssteen wordt uit een doorlopende streng gesneden en heeft daardoor zeer scherpe, gladde vlakken — typisch voor jugendstil/art deco.',
    },
    {
      id: 'B.5.q6',
      toetstermCode: 'B.5.2',
      type: 'mc',
      prompt: 'Hoe verschilt betonsteen van baksteen in fabricage?',
      options: [
        'Beide worden in een oven gebakken, maar betonsteen op een lagere temperatuur.',
        'Baksteen wordt onder stoomdruk verhard, betonsteen in een oven.',
        'Baksteen wordt in een oven gebakken; betonsteen verhardt door de chemische reactie van cement met water (geen oven).',
        'Betonsteen wordt handmatig gevormd, baksteen alleen machinaal.',
      ],
      correctIndex: 2,
      explanation:
        'Betonsteen (cement + toeslagstoffen) verhardt chemisch zonder oven. Baksteen is een gebakken kleiproduct uit een baksteenoven.',
    },

    // B.5.3 — Steenformaten (BT1, Kennis)
    {
      id: 'B.5.q7',
      toetstermCode: 'B.5.3',
      type: 'mc',
      prompt: 'Welk steenformaat is de huidige standaard in Nederland?',
      options: ['Waalformaat', 'IJsselformaat', 'Rijnformaat', 'Kloostermop'],
      correctIndex: 0,
      explanation:
        'Waalformaat (~210 × 100 × 50 mm) is sinds de 20e eeuw de standaard. Kloostermoppen zijn middeleeuws; IJssel- en Rijnformaat zijn historisch.',
    },
    {
      id: 'B.5.q8',
      toetstermCode: 'B.5.3',
      type: 'mc',
      prompt: 'Hoe verhoudt een kloostermop zich qua afmetingen tot een Waalformaat?',
      options: [
        'Kleiner: kloostermoppen zijn handgevormd en vallen daardoor compacter uit.',
        'Vrijwel gelijk; het verschil zit alleen in de kleur.',
        'Aanzienlijk groter — ongeveer 285 × 135 × 85 mm tegenover 210 × 100 × 50 mm bij Waalformaat.',
        'Iets dunner maar exact even lang als een Waalformaat.',
      ],
      correctIndex: 2,
      explanation:
        'Kloostermoppen zijn fors groter (≈ 285 × 135 × 85 mm). Vuistregel: hoe ouder het pand, hoe groter de baksteen.',
    },
    {
      id: 'B.5.q9',
      toetstermCode: 'B.5.3',
      type: 'mc',
      prompt: 'Een klant koopt een gevelpand uit ~1500 en vraagt zich af waarom de stenen er “zo groot uitzien”. Welk steenformaat verwacht je hier?',
      options: ['Waalformaat', 'Vechtformaat', 'IJsselformaat', 'Kloostermop'],
      correctIndex: 3,
      explanation:
        'Als vuistregel: hoe ouder het pand, hoe groter de baksteen. Een laat-middeleeuws pand is vaak in kloostermoppen gemetseld.',
    },

    // B.5.4 — Lagenmaat / koppenmaat (BT2, Kennis, met tekening)
    {
      id: 'B.5.q10',
      toetstermCode: 'B.5.4',
      type: 'mc',
      prompt: 'Wat geeft de "lagenmaat" aan?',
      options: [
        'De breedte van het metselwerk in koppen gemeten',
        'De totale hoogte van een vooraf bepaald aantal lagen inclusief de voegen',
        'De afstand tussen twee dilatatievoegen',
        'De dikte van één enkele metselvoeg',
      ],
      correctIndex: 1,
      explanation:
        'Lagenmaat = som van de steenhoogtes + de tussenliggende lintvoegen voor een gestandaardiseerd aantal lagen. De koppenmaat is hetzelfde principe, maar dan in de breedte.',
    },
    {
      id: 'B.5.q11',
      toetstermCode: 'B.5.4',
      type: 'mc',
      prompt: 'Voor 5 lagen Waalformaat (steenhoogte 50 mm) met lintvoegen van 12 mm — wat is de lagenmaat?',
      options: ['250 mm', '300 mm', '310 mm', '320 mm'],
      correctIndex: 2,
      explanation:
        '5 × 50 mm steen + 5 × 12 mm voeg = 250 + 60 = 310 mm. Hier wordt 5 lintvoegen meegerekend omdat ook boven of onder de bovenste/onderste laag een lintvoeg zit.',
    },
    {
      id: 'B.5.q12',
      toetstermCode: 'B.5.4',
      type: 'mc',
      prompt: 'Welke voeg loopt verticaal tussen twee aangrenzende stenen in dezelfde laag?',
      options: ['Lintvoeg', 'Stootvoeg', 'Koppenvoeg', 'Lagenvoeg'],
      correctIndex: 1,
      explanation:
        '"Stoot" = verticale voeg tussen aangrenzende stenen; "lint" = horizontale voeg tussen lagen. Koppen- en lagenvoeg bestaan niet als termen.',
      image: {
        src: `${FIG}/lintvoeg-stootvoeg.jpg`,
        caption: 'Lintvoeg en stootvoeg in een gemetselde wand.',
        source: SRC,
        width: 'md',
      },
    },

    // B.5.5 — Metselverbanden: beeldvragen (verband herkennen)
    {
      id: 'B.5.beeld-halfsteens',
      toetstermCode: 'B.5.5',
      type: 'mc',
      prompt: 'Welk metselverband zie je op deze afbeelding?',
      image: {
        src: '/figs/vragen/verband-halfsteens.svg',
        caption: 'Welk verband?',
        width: 'md',
      },
      options: ['Kruisverband', 'Halfsteensverband', 'Vlaams verband', 'Staand verband'],
      correctIndex: 1,
      explanation:
        'Alleen strekken (lange zijden), waarbij elke laag een ½ steen verspringt. Dit is halfsteensverband — standaard voor het buitenblad van een spouwmuur.',
    },
    {
      id: 'B.5.beeld-kruis',
      toetstermCode: 'B.5.5',
      type: 'mc',
      prompt: 'Welk metselverband zie je op deze afbeelding?',
      image: {
        src: '/figs/vragen/verband-kruis.svg',
        caption: 'Welk verband? Let op de afwisseling van strekken- en koppenlagen.',
        width: 'md',
      },
      options: ['Halfsteensverband', 'Koppenverband', 'Kruisverband', 'Vlaams verband'],
      correctIndex: 2,
      explanation:
        'Strekkenlagen en koppenlagen wisselen elkaar af, waarbij de strekkenlagen onderling een ½ steen verspringen — een kruisverband. Sinds de late middeleeuwen de Nederlandse standaard voor steensmuren.',
    },
    {
      id: 'B.5.beeld-vlaams',
      toetstermCode: 'B.5.5',
      type: 'mc',
      prompt: 'Welk metselverband zie je op deze afbeelding?',
      image: {
        src: '/figs/vragen/verband-vlaams.svg',
        caption: 'Welk verband? Let op de afwisseling binnen één laag.',
        width: 'md',
      },
      options: ['Staand verband', 'Vlaams verband', 'Kruisverband', 'Koppenverband'],
      correctIndex: 1,
      explanation:
        'Binnen iedere laag wisselen kop en strek elkaar af — dat is Vlaams verband. Bij staand verband wisselen hele koppen- en strekkenlagen elkaar af.',
    },
    {
      id: 'B.5.beeld-koppen',
      toetstermCode: 'B.5.5',
      type: 'mc',
      prompt: 'Welk metselverband zie je op deze afbeelding?',
      image: {
        src: '/figs/vragen/verband-koppen.svg',
        caption: 'Welk verband? Alleen korte zijden zichtbaar.',
        width: 'md',
      },
      options: ['Halfsteensverband', 'Koppenverband', 'Vlaams verband', 'Staand verband'],
      correctIndex: 1,
      explanation:
        'Alleen koppen (korte zijden) zichtbaar — een koppenverband. Wordt gebruikt voor gebogen muurwerk (bogen, ronde muren) omdat koppen makkelijker de bocht volgen.',
    },

    // B.5.5 — Metselverbanden (BT2, Kennis)
    {
      id: 'B.5.q13',
      toetstermCode: 'B.5.5',
      type: 'mc',
      prompt: 'Welk verband wordt in moderne halfsteens spouwbladen het meest gebruikt?',
      options: ['Kruisverband', 'Halfsteensverband', 'Vlaams verband', 'Koppenverband'],
      correctIndex: 1,
      explanation:
        'Sinds de spouwmuur rond 1920 standaard werd, wordt het buitenblad doorgaans in halfsteensverband gemetseld. Kruisverband is typisch voor steensmuren.',
    },
    {
      id: 'B.5.q14',
      toetstermCode: 'B.5.5',
      type: 'mc',
      prompt: 'Welk verband is sinds de 15e eeuw de Nederlandse standaard voor steensmuren?',
      options: ['Staand verband', 'Vlaams verband', 'Kruisverband', 'Klezorenverband'],
      correctIndex: 2,
      explanation:
        'Kruisverband (strekkenlagen verspringen ½ steen) is sinds de late middeleeuwen het standaardverband voor steensmuren in Nederland.',
      image: {
        src: `${FIG}/kruisverband.jpg`,
        caption: 'Kruisverband.',
        source: SRC,
        width: 'md',
      },
    },
    {
      id: 'B.5.q15',
      toetstermCode: 'B.5.5',
      type: 'mc',
      prompt: 'Wat is een klezoor?',
      options: [
        'Een loden slabbe tussen latei en metselwerk',
        'Een kwart steen die op de hoek wordt gemetseld om doorlopende stootvoegen te voorkomen',
        'Een ander woord voor een gesneden voeg',
        'Een lichtgewicht binnenmuursteen',
      ],
      correctIndex: 1,
      explanation:
        'Een klezoor is een ¼ steen, gebruikt op de hoek of in koppenlagen. Hierdoor lopen stootvoegen niet door en blijft het verband stabiel.',
    },
    {
      id: 'B.5.q16',
      toetstermCode: 'B.5.5',
      type: 'mc',
      prompt: 'Bij welk verband bestaat iedere laag uit afwisselend een kop en een strek?',
      options: ['Kruisverband', 'Staand verband', 'Vlaams verband', 'Klezorenverband'],
      correctIndex: 2,
      explanation:
        'Bij Vlaams verband wisselen kop en strek elkaar binnen één laag af. Bij staand verband wisselen koppen- en strekkenlagen elkaar af.',
      image: {
        src: `${FIG}/vlaams-verband.jpg`,
        caption: 'Vlaams verband.',
        source: SRC,
        width: 'md',
      },
    },

    // B.5.6 — Aansluitingen, loodslab, latei-oplegging (BT2, Begrip)
    {
      id: 'B.5.q17',
      toetstermCode: 'B.5.6',
      type: 'mc',
      prompt: 'Waarom wordt boven een betonlatei vaak een strook lood of bouwfolie aangebracht?',
      options: [
        'Voor extra brandwerendheid van de latei',
        'Om vocht uit het bovenliggende metselwerk weg te leiden',
        'Om de verschillende uitzettingscoëfficiënten van beton en metselwerk op te vangen zonder scheurvorming',
        'Om het geluidsisolerend vermogen van de gevel te vergroten',
      ],
      correctIndex: 2,
      explanation:
        'Beton zet ongeveer twee keer zo veel uit als metselwerk. Een glijlaagje (lood/bouwfolie) laat de latei vrij werken zonder dat het metselwerk erboven scheurt.',
    },
    {
      id: 'B.5.q18',
      toetstermCode: 'B.5.6',
      type: 'mc',
      prompt: 'Wat is de primaire functie van een loodslab op de aansluiting tussen een schoorsteen en het pannendak?',
      options: [
        'Brandwerend afdichten',
        'Het thermisch isoleren van de aansluiting',
        'Regenwater dat langs de schoorsteen naar beneden loopt naar buiten leiden over de dakpannen',
        'De schoorsteen verankeren aan de kapconstructie',
      ],
      correctIndex: 2,
      explanation:
        'Een loodslab is een waterkering: het lood "stort" het langs de schoorsteen aflopende water terug op de dakpannen, zodat het niet in de woning komt.',
    },
    {
      id: 'B.5.q19',
      toetstermCode: 'B.5.6',
      type: 'mc',
      prompt:
        'Waarom wordt bij de oplegging van een stalen of betonlatei in een gemetselde muur vaak een laag bouwvilt aangebracht?',
      options: [
        'Om de latei thermisch te isoleren tegen koudebruggen.',
        'Om regenwater bij de oplegging af te voeren.',
        'Om de latei vrij te laten werken (uitzetten en krimpen) zonder het metselwerk eronder mee te nemen.',
        'Om geluidsoverdracht door de muur te verminderen.',
      ],
      correctIndex: 2,
      explanation:
        'Beton en metselwerk hebben verschillende uitzettingscoëfficiënten. Een vilt-/glijlaag bij de oplegging voorkomt dat de latei het metselwerk meetrekt en geeft dus geen scheurvorming.',
    },

    // B.5.7 — Lateien herkennen (BT2, Kennis, met tekening)
    {
      id: 'B.5.q20',
      toetstermCode: 'B.5.7',
      type: 'mc',
      prompt: 'Welke latei-uitvoering is een gemetselde variant?',
      options: ['Geveldrager', 'Rollaag', 'Kantelprofiel', 'Hoekstaal'],
      correctIndex: 1,
      explanation:
        'Rollaag, strek (hanenkam), rondboog en spitsboog zijn gemetselde lateien. Geveldrager en kantelprofiel zijn stalen oplossingen.',
      image: {
        src: `${FIG}/strek-hanenkam.jpg`,
        caption: 'Welk type latei zie je hier?',
        source: SRC,
        width: 'md',
      },
    },
    {
      id: 'B.5.q21',
      toetstermCode: 'B.5.7',
      type: 'mc',
      prompt: 'Wat is een geveldrager?',
      options: [
        'Een betonnen latei die zowel binnen- als buitenspouwblad ondersteunt.',
        'Een stalen profiel waaraan het voorgevelsteen via een afgehangen lip wordt opgehangen.',
        'Een houten draagbalk in de spouw boven een kozijn.',
        'Een gemetselde rollaag met ingelegde wapeningskorf.',
      ],
      correctIndex: 1,
      explanation:
        'Een geveldrager hangt alléén het buitenspouwblad op boven een sparing. Niet te verwarren met een stalen kantelprofiel dat beide bladen draagt.',
    },
    {
      id: 'B.5.q22',
      toetstermCode: 'B.5.7',
      type: 'mc',
      prompt: 'Bij welke gemetselde boog gaat het om een halve cirkel — typisch Romeinse stijl?',
      options: ['Segmentboog', 'Ellipsboog', 'Rondboog', 'Spitsboog'],
      correctIndex: 2,
      explanation:
        'De rondboog is een exacte halve cirkel — Romeins. De spitsboog is gotisch (puntig), segment- en ellipsbogen zijn vlakker.',
      image: {
        src: `${FIG}/rondboog.jpg`,
        caption: 'Welke boogvorm is dit?',
        source: SRC,
        width: 'sm',
      },
    },
    {
      id: 'B.5.q23',
      toetstermCode: 'B.5.7',
      type: 'mc',
      prompt: 'Een staltonlatei is...',
      options: [
        'Een prefab betonlatei met ingestort wapeningsstaal',
        'Een latei van geprefabriceerd gewapend metselwerk, met een ingelegde wapeningskorf',
        'Een speciale stalen latei voor brede openingen',
        'Een latei van cellenbeton',
      ],
      correctIndex: 1,
      explanation:
        'Een staltonlatei = gewapend metselwerkbalkje (een rij of meer stenen op kant) met een ingelegde wapeningskorf. Veel gebruikt in jaren ’60–’80.',
    },

    // B.5.8 — Voegen (BT2, Kennis)
    {
      id: 'B.5.q24',
      toetstermCode: 'B.5.8',
      type: 'mc',
      prompt: 'Welke voeg is herkenbaar aan de Amsterdamse School en geeft de gevel slagschaduw?',
      options: ['Platvolle voeg', 'Doorgestreken voeg', 'Verdiepte voeg', 'Snijvoeg'],
      correctIndex: 2,
      explanation:
        'De verdiepte voeg deed zijn intrede via de Amsterdamse School en geeft het metselwerk een uitgesproken plastiek door slagschaduw.',
    },
    {
      id: 'B.5.q25',
      toetstermCode: 'B.5.8',
      type: 'mc',
      prompt: 'Welke voeg is pas in de 19e eeuw geïntroduceerd?',
      options: ['Snijvoeg', 'Knipvoeg', 'Platvolle voeg', 'Doorgestreken voeg'],
      correctIndex: 1,
      explanation:
        'Knipvoegen ontstonden in de 19e eeuw. Snijvoegen kwamen al in de 17e eeuw voor; platvolle voeg is de oudste apart aangebrachte voeg uit de 16e eeuw.',
    },
    {
      id: 'B.5.q26',
      toetstermCode: 'B.5.8',
      type: 'mc',
      prompt: 'Hoe wordt een doorgestreken voeg gemaakt?',
      options: [
        'De voeg wordt na het metselen uitgekrabd en met een speciale voegmortel ingevuld.',
        'Direct na het metselen wordt het overtollige specie met de troffel gladgestreken — geen apart voegwerk.',
        'De voeg krijgt een opstaande rib (knip) tijdens het voegen.',
        'De voeg wordt na droging met een snijbeitel afgewerkt tot een scherpe lijn.',
      ],
      correctIndex: 1,
      explanation:
        'Bij een doorgestreken voeg gebeurt alles in één werkgang. Vaak te herkennen aan vlekjes specie naast de voeg. De andere antwoorden beschrijven respectievelijk: apart voegen, knipvoeg en snijvoeg.',
    },

    // B.5.9 — Voegloos werken (BT2, Kennis)
    {
      id: 'B.5.q27',
      toetstermCode: 'B.5.9',
      type: 'mc',
      prompt: 'Bij welke bouwmethode wordt vrijwel altijd voegloos gewerkt?',
      options: [
        'Traditionele baksteenbouw in halfsteensverband',
        'Verlijmde cellenbeton- of kalkzandsteenblokken',
        'Schoonmetselwerk in kruisverband',
        'Handvormsteen in wild verband',
      ],
      correctIndex: 1,
      explanation:
        'Verlijmde cellenbeton- of kalkzandsteenblokken worden met een dunne lijmlaag (~2 mm) gemetseld — visueel voegloos. Schoonmetselwerk vraagt juist om zorgvuldig voegwerk.',
    },
    {
      id: 'B.5.q28',
      toetstermCode: 'B.5.9',
      type: 'mc',
      prompt: 'Wat is een belangrijk voordeel van voegloos werken met lijmsteen?',
      options: [
        'Lagere bouwkosten omdat er geen wapening nodig is.',
        'Hogere brandwerendheid dan traditioneel metselwerk.',
        'Snellere bouw en een vlakker oppervlak dat met minder stukadoorswerk te af te werken is.',
        'Een betere geluidsisolatie dan traditioneel metselwerk.',
      ],
      correctIndex: 2,
      explanation:
        'Door de strakke maatvoering en dunne lijmlaag (~2 mm) ontstaat een vlakke wand die met alleen sausen of een dunne afwerklaag klaar is. De andere voordelen (wapening, brand, geluid) gelden niet specifiek voor voegloos werken.',
    },

    // === HERHAALVRAGEN ===

    // B.5.1 — Functies en eisen (extra)
    {
      id: 'B.5.q29',
      toetstermCode: 'B.5.1',
      type: 'mc',
      prompt: 'Wat is het doel van open stootvoegen onderin het buitenspouwblad van een spouwmuur?',
      options: [
        'Ventilatie van de woning verbeteren.',
        'Eventueel binnengedrongen spouwvocht naar buiten afvoeren.',
        'De brandwerendheid van de gevel vergroten.',
        'Verzakking van het buitenblad voorkomen.',
      ],
      correctIndex: 1,
      explanation:
        'Open stootvoegen zijn klein, maar functioneel cruciaal: spouwwater dat door de bovenkant of via condens in de spouw komt, moet er onderin uit kunnen. Niet dichten dus, ook al lijkt het soms slordig.',
    },
    {
      id: 'B.5.q30',
      toetstermCode: 'B.5.1',
      type: 'mc',
      prompt:
        'Een woning uit ~1900 heeft een massieve steensmuur van 210 mm zonder spouw. Wat is de belangrijkste bouwfysische uitdaging die je daarbij in de gaten houdt?',
      options: [
        'Geluidsisolatie is altijd onvoldoende.',
        'De muur is niet brandwerend genoeg volgens het Bbl.',
        'Vochtdoorslag van regen kan optreden, omdat er geen luchtspouw is die het vocht onderbreekt.',
        'De muur kan het gewicht van een verdiepingsvloer niet dragen.',
      ],
      correctIndex: 2,
      explanation:
        'Bij een massieve buitenmuur zonder spouw kan slagregen via te zachte stenen of zwakke specie doordringen tot binnen. Bij oudere panden is dat dé reden om gevelisolatie of waterwerende behandeling te overwegen.',
    },

    // B.5.2 — Gebakken/niet-gebakken (extra)
    {
      id: 'B.5.q31',
      toetstermCode: 'B.5.2',
      type: 'mc',
      prompt:
        'Wat is het kenmerkende verschil tussen een handvormsteen en een vormbaksteen?',
      options: [
        'Handvormstenen zijn altijd geglazuurd, vormbakstenen niet.',
        'Handvormstenen hebben een levendiger, onregelmatiger oppervlak; vormbakstenen worden machinaal in een vormbak geperst en zijn regelmatiger.',
        'Handvormstenen zijn dunner dan vormbakstenen.',
        'Vormbakstenen worden niet gebakken, handvormstenen wel.',
      ],
      correctIndex: 1,
      explanation:
        'Beide zijn gebakken kleiproducten. Handvormsteen wordt in de vorm geworpen (rustiek, levendig oppervlak); vormbaksteen wordt machinaal in een vormbak geperst (regelmatiger uiterlijk).',
    },
    {
      id: 'B.5.q32',
      toetstermCode: 'B.5.2',
      type: 'mc',
      prompt: 'Voor welke toepassing wordt verblendsteen vaak gekozen?',
      options: [
        'Als binnenspouwblad, omdat de steen extra licht is.',
        'Als gevelsteen voor representatieve gevels, omdat verblendsteen extra dichtgebakken en daardoor sterker en gladder is.',
        'Als funderingssteen onder het maaiveld.',
        'Als isolatiesteen vanwege de holle structuur.',
      ],
      correctIndex: 1,
      explanation:
        'Verblendsteen wordt op een hogere temperatuur gebakken en is daardoor dichter, sterker en glad — vandaar de toepassing bij gevels van representatieve gebouwen.',
    },

    // B.5.3 — Steenformaten (extra)
    {
      id: 'B.5.q33',
      toetstermCode: 'B.5.3',
      type: 'mc',
      prompt:
        'Hoe verschilt een Vechtformaat van een Waalformaat?',
      options: [
        'Vechtformaat is langer dan Waalformaat.',
        'Vechtformaat heeft dezelfde lengte en breedte als Waalformaat, maar is hoger (~65 mm i.p.v. ~50 mm).',
        'Vechtformaat is alleen in kalkzandsteen verkrijgbaar.',
        'Er is geen verschil; beide termen verwijzen naar dezelfde steen.',
      ],
      correctIndex: 1,
      explanation:
        'Vechtformaat ≈ 210 × 100 × 65 mm; Waalformaat ≈ 210 × 100 × 50 mm. Door het hogere formaat zijn er minder lagen nodig voor dezelfde gevelhoogte.',
    },
    {
      id: 'B.5.q34',
      toetstermCode: 'B.5.3',
      type: 'mc',
      prompt:
        'Een makelaar bezoekt een pand met opvallend kleine bakstenen in de gevel. Welke periode is dan het meest waarschijnlijk?',
      options: [
        'Oude binnenstad, mogelijk 17e–18e eeuw (IJsselformaat).',
        'Naoorlogse wederopbouw (1945–1970).',
        'Nieuwbouw na 2000.',
        'Jaren-30-woning.',
      ],
      correctIndex: 0,
      explanation:
        'IJsselformaat (~165 × 80 × 40 mm) is veel gebruikt in oude binnensteden. De vuistregel "hoe ouder, hoe groter" geldt vanaf ongeveer 1700; daarvoor varieerden formaten sterk per regio.',
    },

    // B.5.4 — Lagenmaat/koppenmaat (extra)
    {
      id: 'B.5.q35',
      toetstermCode: 'B.5.4',
      type: 'mc',
      prompt: 'Wat geeft de koppenmaat aan?',
      options: [
        'Het aantal koppen in een steensmuur.',
        'De gemiddelde dikte van één voeg.',
        'De totale breedte van een vooraf bepaald aantal koppen inclusief de tussenliggende stootvoegen.',
        'De diepte waarop een latei wordt opgelegd.',
      ],
      correctIndex: 2,
      explanation:
        'Koppenmaat is het breedteequivalent van de lagenmaat: aantal koppen × steenbreedte + tussenvoegen. Gebruikt om maatvoering rond muuropeningen sluitend te krijgen.',
    },
    {
      id: 'B.5.q36',
      toetstermCode: 'B.5.4',
      type: 'mc',
      prompt:
        'Voor een steensmuur in Waalformaat wordt de koppenmaat over 5 koppen berekend. Eén kop is 100 mm breed, de stootvoeg 10 mm. Wat is de koppenmaat?',
      options: ['500 mm', '540 mm', '550 mm', '600 mm'],
      correctIndex: 1,
      explanation:
        '5 × 100 mm steen + 4 × 10 mm stootvoeg = 500 + 40 = 540 mm. Tussen 5 koppen zitten 4 stootvoegen.',
    },

    // B.5.5 — Metselverbanden (extra)
    {
      id: 'B.5.q37',
      toetstermCode: 'B.5.5',
      type: 'mc',
      prompt: 'Waarvoor wordt het koppenverband (patijtsverband) typisch toegepast?',
      options: [
        'Voor brede dragende muren in fabrieken.',
        'Voor gebogen muurdelen, omdat korte koppen zich makkelijk in een kromming voegen.',
        'Voor halfsteens binnenmuren.',
        'Als versteviging boven een latei.',
      ],
      correctIndex: 1,
      explanation:
        'Koppenverband bestaat uit alleen koppen (korte stenen, ~100 mm). Hierdoor passen ze beter in een ronde of gebogen muur dan lange strekken.',
    },
    {
      id: 'B.5.q38',
      toetstermCode: 'B.5.5',
      type: 'mc',
      prompt:
        'Een klant wijst je op een gevel waar je in elke laag aan de hoek een ¼ steen (klezoor) ziet, en de stootvoegen verspringen ¼ steen tussen de lagen. Welk verband is dit?',
      options: ['Kruisverband', 'Klezorenverband', 'Vlaams verband', 'Halfsteensverband'],
      correctIndex: 1,
      explanation:
        'Klezorenverband heet zo omdat aan de hoek een klezoor (¼ steen) wordt ingelegd. Verspringing is ¼ steen — de "staande tand" is daarbij kenmerkend.',
    },

    // B.5.6 — Aansluitingen en lateien-oplegging (extra)
    {
      id: 'B.5.q39',
      toetstermCode: 'B.5.6',
      type: 'mc',
      prompt:
        'Bij de aansluiting van een houten kozijn op metselwerk wordt vaak een loodslab toegepast. Waar zit die loodslab meestal?',
      options: [
        'Onder de onderdorpel, om water dat naar binnen dreigt te komen naar buiten te leiden.',
        'Aan de binnenzijde van het kozijn, om geluidsoverdracht te voorkomen.',
        'Boven het glas, om de beglazing op zijn plaats te houden.',
        'Tussen kozijn en stelregel, voor brandwering.',
      ],
      correctIndex: 0,
      explanation:
        'De loodslab werkt als waterkering: hij vangt water dat eventueel door de gevel of langs het kozijn naar binnen sijpelt en stort het terug naar buiten op het buitenspouwblad.',
    },
    {
      id: 'B.5.q40',
      toetstermCode: 'B.5.6',
      type: 'mc',
      prompt:
        'Waarom zit er bij een correct uitgevoerde loodslab in de gevel meestal een open stootvoeg recht boven de slab?',
      options: [
        'Voor ventilatie van de spouw.',
        'Voor visuele markering door de metselaar.',
        'Om eventueel water op de loodslab via die open stootvoeg naar buiten af te voeren.',
        'Om de loodslab op zijn plaats te houden tegen wind.',
      ],
      correctIndex: 2,
      explanation:
        'De loodslab vangt water; via de open stootvoeg erboven kan dat water terug naar buiten. Zonder die opening blijft het water op de slab staan.',
    },

    // B.5.7 — Lateien (extra)
    {
      id: 'B.5.q41',
      toetstermCode: 'B.5.7',
      type: 'mc',
      prompt: 'Wat is hét kenmerkende verschil tussen een rondboog en een spitsboog?',
      options: [
        'De rondboog gebruikt geen wig-stenen, de spitsboog wel.',
        'De rondboog is een halve cirkel, de spitsboog is samengesteld uit twee bogen die elkaar bovenin in een punt ontmoeten.',
        'De rondboog is altijd breder dan een spitsboog.',
        'De spitsboog wordt alleen in kerken toegepast, de rondboog overal.',
      ],
      correctIndex: 1,
      explanation:
        'Rondboog = halve cirkel (Romaans). Spitsboog = puntboog van twee bogen die elkaar boven raken (gotiek). Beide kunnen wig-stenen gebruiken.',
      image: {
        src: `${FIG}/strek-hanenkam.jpg`,
        caption: 'Ter referentie: ander type latei (geen boog) — strek/hanenkam.',
        source: SRC,
        width: 'md',
      },
    },
    {
      id: 'B.5.q42',
      toetstermCode: 'B.5.7',
      type: 'mc',
      prompt:
        'Wanneer kies je een stalen kantelprofiel in plaats van een betonlatei boven een opening in een spouwmuur?',
      options: [
        'Altijd, omdat staal lichter is.',
        'Bij brede openingen waarbij je een slank profiel wilt dat zowel het binnen- als buitenspouwblad ondersteunt zonder dat een dikke betonlatei zichtbaar wordt.',
        'Alleen bij bestaande bouw.',
        'Nooit; betonlateien zijn in nieuwbouw altijd verplicht.',
      ],
      correctIndex: 1,
      explanation:
        'Een stalen kantelprofiel is slank en kan zowel binnen- als buitenspouwblad dragen, dus geen dikke zichtbare latei. Betonlateien zijn goedkoper bij smalle openingen of waar het zicht niet uitmaakt.',
    },

    // B.5.8 — Voegen (extra)
    {
      id: 'B.5.q43',
      toetstermCode: 'B.5.8',
      type: 'mc',
      prompt: 'Hoe herken je een snijvoeg op een gevel?',
      options: [
        'De voeg ligt iets verdiept ten opzichte van het steenvlak.',
        'De voeg heeft een scherp afgesneden, rechte lijnvorming — typisch siervoegwerk.',
        'De voeg is gladgestreken met de troffel direct na het metselen.',
        'De voeg heeft een opstaande rib (knip) in het midden.',
      ],
      correctIndex: 1,
      explanation:
        'Een snijvoeg wordt na het voegen met een snijbeitel of voegspijker bewerkt tot een scherpe, rechte lijn — typisch siervoegwerk in 17e–18e-eeuwse panden.',
    },
    {
      id: 'B.5.q44',
      toetstermCode: 'B.5.8',
      type: 'mc',
      prompt: 'Wat is karakteristiek voor een schaduwvoeg?',
      options: [
        'De voeg is overal gelijk verdiept ten opzichte van het steenvlak.',
        'De voeg is sterk verdiept aan de onderzijde en plat aan de bovenkant — dat geeft een uitgesproken slagschaduw onder de steen.',
        'De voeg is gladgestreken met de troffel.',
        'De voeg is afgewerkt met witte specie.',
      ],
      correctIndex: 1,
      explanation:
        'Een schaduwvoeg is asymmetrisch: van boven plat, naar beneden teruglopend. Het levert dramatische schaduwwerking op — typisch voor expressionistische bouwstijlen.',
    },

    // B.5.9 — Voegloos werken (extra)
    {
      id: 'B.5.q45',
      toetstermCode: 'B.5.9',
      type: 'mc',
      prompt:
        'Wat is de typische dikte van de lijmlaag bij verlijmde kalkzandsteen of cellenbeton?',
      options: ['10–12 mm zoals een normale voeg', '5–6 mm', '~2 mm', 'Geen lijm — droge stapeling'],
      correctIndex: 2,
      explanation:
        'Lijmsteen wordt met een dunne lijmlaag van circa 2 mm gestapeld — daarom oogt het visueel voegloos en gaat het bouwen aanzienlijk sneller.',
    },
    {
      id: 'B.5.q46',
      toetstermCode: 'B.5.9',
      type: 'mc',
      prompt: 'Welke combinatie van steensoort + werkwijze is voegloos?',
      options: [
        'Handvormsteen + halfsteensverband + platvolle voeg.',
        'Strengperssteen + kruisverband + verdiepte voeg.',
        'Cellenbetonblokken + lijmverband (verlijmd).',
        'Kloostermop + Vlaams verband + snijvoeg.',
      ],
      correctIndex: 2,
      explanation:
        'Cellenbeton- en kalkzandsteenblokken worden gelijmd met een dunne mortel-/lijmlaag — visueel voegloos. De andere combinaties zijn juist klassiek met zichtbare voeg.',
    },
    {
      id: 'B.5.q47',
      toetstermCode: 'B.5.9',
      type: 'mc',
      prompt:
        'Hoe worden geprefabriceerde betonelementen onderling aangesloten? Telt dat als voegloos?',
      options: [
        'Met traditionele specie van 10 mm — niet voegloos.',
        'Met dunne kit- of foambandverbindingen tussen de elementen — visueel vrijwel voegloos.',
        'Met loodslabben overal — niet voegloos.',
        'Met houten tussenstroken — niet voegloos.',
      ],
      correctIndex: 1,
      explanation:
        'Bij prefab betonelementen worden de naden vaak met blijvend elastische kit of foamband afgedicht; visueel een dunne, schone lijn — geen klassieke voeg meer.',
    },
  ],

  terms: [
    {
      term: 'Baksteen',
      definition:
        'Gebakken kleisteen — meest gebruikte gevelsteen in NL; afmeting waalformaat 210×100×50 mm.',
    },
    {
      term: 'Kalkzandsteen',
      definition:
        'Geperste steen van zand en kalk, hardingsproces in autoclaaf — gebruikt voor binnenspouwblad en woningscheidende muren.',
    },
    {
      term: 'Cellenbeton',
      definition:
        'Lichte porige steen (Ytong, Hebel) met goede isolatie­waarde; makkelijk te bewerken, lage draagkracht.',
    },
    {
      term: 'Waalformaat',
      definition:
        'Standaard baksteenmaat 210×100×50 mm — het meest gebruikte formaat in Nederland.',
    },
    {
      term: 'Vechtformaat',
      definition:
        'Iets kleiner baksteenformaat (210×50×40 mm) typisch voor Renaissance­gevels en de Vechtstreek.',
    },
    {
      term: 'Halfsteens­verband',
      definition:
        'Eenvoudig metselverband met enkel strekken, om de laag een halve steen verspringend — standaard voor binnenmuren.',
    },
    {
      term: 'Kruisverband',
      definition:
        'Klassiek verband met afwisselend strekkenlagen en koppen­lagen; herkenbaar aan kruispatroon, traditionele Nederlandse gevels.',
    },
    {
      term: 'Staand verband',
      definition:
        'Verband met afwisselend strek-kop op één laag; oude variant, vooral in monumentale gevels.',
    },
    {
      term: 'Vlaams verband',
      definition:
        'Mix met strek-kop afwisselend per laag; herkenbaar aan ruitvormig patroon op de gevel.',
    },
    {
      term: 'Strek',
      definition:
        'Lange zijde van een baksteen die naar de buitenzijde van de gevel staat (210 mm zichtbaar).',
    },
    {
      term: 'Kop',
      definition:
        'Korte zijde van een baksteen die naar de buitenzijde van de gevel staat (100 mm zichtbaar).',
    },
    {
      term: 'Klezoor',
      definition:
        'Halve steen — gebruikt om verband te starten of te eindigen tegen een hoek of dagkant.',
    },
    {
      term: 'Voeg',
      definition:
        'Mortelvulling tussen stenen; type bepaalt esthetiek (platvol, terugliggend, snijvoeg) en water­dichtheid.',
    },
    {
      term: 'Spouwanker',
      definition:
        'RVS draadanker dat buiten- en binnenspouwblad mechanisch verbindt; aantal volgens NEN-EN 845-1.',
    },
    {
      term: 'Lateï (steen­constructie)',
      definition:
        'Drager (gewapend beton, staal of gemetselde rollaag) boven een gevelopening; vangt het bovenliggende metselwerk op.',
    },
  ],

  games: [
    {
      id: 'B5-gapfill-1',
      type: 'gapfill',
      title: 'Sleutelbegrippen — vul aan',
      description: 'Vul de juiste termen in op de open plekken.',
      text:
        'Een baksteen heeft drie afmetingen: lengte, breedte en {{dikte}}. De grootste zijde noemen we de {{strek}}, het korte uiteinde de {{kop}}. ' +
        'Een halve steen heet een {{klezoor}}. De horizontale voeg tussen twee lagen heet de {{lintvoeg}}, de verticale voeg in dezelfde laag de {{stootvoeg}}. ' +
        'Steens­verbanden worden gekozen om {{doorlopende stootvoegen}} te vermijden — dat verzwakt de muur namelijk.',
      distractors: ['kantvoeg', 'drieklezoor', 'patijt', 'verband'],
    },
    {
      id: 'B5-sort-1',
      type: 'sort',
      title: 'Sorteer de metsel­verbanden',
      description: 'Klik een verband en plaats het bij het juiste kenmerk.',
      categories: ['Halfsteens-verband (één laag strek)', 'Kruisverband (afwisselend strek/kop)', 'Vlaams verband (strek + kop per laag)'],
      items: [
        { label: 'Halfsteensverband', category: 'Halfsteens-verband (één laag strek)' },
        { label: 'Klezorenverband', category: 'Halfsteens-verband (één laag strek)' },
        { label: 'Staand verband', category: 'Kruisverband (afwisselend strek/kop)' },
        { label: 'Kruisverband (Hollands)', category: 'Kruisverband (afwisselend strek/kop)' },
        { label: 'Vlaams verband', category: 'Vlaams verband (strek + kop per laag)' },
        { label: 'Koppenverband', category: 'Vlaams verband (strek + kop per laag)' },
      ],
    },
    {
      id: 'B5-sequence-1',
      type: 'sequence',
      title: 'Volgorde — opmetselen van een muur',
      description: 'Zet de stappen in de juiste volgorde.',
      items: [
        'Uitzetwerk: lijnen en hoogten op de fundering uitzetten',
        'Eerste laag (kim) leggen — strikt waterpas',
        'Hoekkozijnen of profiellatten plaatsen',
        'Lagen optrekken volgens gekozen verband',
        'Lateien plaatsen boven kozijnopeningen',
        'Voegen na uitharding van mortel afwerken',
      ],
    },
    {
      id: 'B5-matching-1',
      type: 'matching',
      title: 'Koppel termen aan omschrijvingen',
      description: 'Klik een begrip en daarna de juiste omschrijving.',
      pairs: [
        { left: 'Lintvoeg', right: 'Horizontale voeg tussen twee lagen stenen' },
        { left: 'Stootvoeg', right: 'Verticale voeg in dezelfde laag' },
        { left: 'Klezoor', right: 'Halve steen, gebruikt om verband te creëren' },
        { left: 'Latei', right: 'Dragend element boven een opening in een muur' },
        { left: 'Spouwmuur', right: 'Dubbele wand met luchtkamer + isolatie ertussen' },
        { left: 'Spouwanker', right: 'Verbindt binnen- en buitenspouwblad door de spouw' },
      ],
    },
  ],
}
