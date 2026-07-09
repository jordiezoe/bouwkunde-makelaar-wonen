import type { Topic } from '../types/content'

/**
 * Besteklezen — los leertraject (sectie 'BL').
 *
 * Leert het lezen van een bouwkundig bestek en bijbehorende bouwtekeningen,
 * met dezelfde leerflow als de dossier-onderwerpen (les → quiz → sectie-examen).
 * De lesstof is gebaseerd op het echte examenbestek (STABU 2012 / UAV 2012) dat
 * als bijlage in de app zit, en op gangbare NEN-tekenconventies.
 *
 * Deze sectie doet NIET mee in de Examensimulatie of BT1-2 (zie ExamSection).
 */

const BESTEK = { label: 'Bestek Examen 2016-I', href: '/bijlagen/bestek-2016-I.pdf' }
const TEK_A1 = { label: 'Tekeningen A1 2016-I', href: '/bijlagen/tekening-A1-2016-I.pdf' }
const TEK_A3 = { label: 'Tekeningen A3 2016-I', href: '/bijlagen/tekening-A3-2016-I.pdf' }

// ─────────────────────────────────────────────────────────────────────────────
// BL.1 — Wat is een bestek?
// ─────────────────────────────────────────────────────────────────────────────
const BL_1: Topic = {
  code: 'BL.1',
  section: 'BL',
  title: 'Wat is een bestek?',
  blurb:
    'Doel van een bestek, de STABU-opbouw (administratief vs. technisch), de UAV 2012 en wat vóórgaat bij tegenstrijdigheid tussen bestek en tekening.',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · Wat is een bestek en waarom bestaat het?',
      toetstermCodes: ['BL.1.1'],
      body: `
Een **bestek** is de volledige, geschreven beschrijving van een bouwwerk: welke materialen, welke kwaliteit, welke werkzaamheden en onder welke voorwaarden. Waar de **tekening** laat zien *waar* iets komt en *hoe groot*, legt het bestek vast *wat* het precies is en *hoe* het moet worden uitgevoerd.

Het bestek en de tekeningen vormen samen de **contractstukken**: op basis daarvan maakt een aannemer zijn prijs (de aanneemsom) en wordt het werk aanbesteed. Voor een makelaar/taxateur is besteklezen belangrijk om de kwaliteit, materiaalkeuze en afwerking van een woning te kunnen beoordelen.

In Nederland wordt een bestek meestal opgesteld volgens de **STABU-systematiek** — een vaste hoofdstukindeling waardoor elk bestek herkenbaar is opgebouwd. (STABU is de standaard voor woning- en utiliteitsbouw; voor grond-, weg- en waterbouw geldt de **RAW**-systematiek.)
      `.trim(),
    },
    {
      heading: '2 · De opbouw: administratieve en technische bepalingen',
      toetstermCodes: ['BL.1.2'],
      body: `
Een STABU-bestek bestaat uit twee delen:

- **Administratieve bepalingen** (hoofdstuk 00) — de "spelregels": van toepassing zijnde voorwaarden (**UAV 2012**), verplichtingen van opdrachtgever en aannemer, aanvang en oplevering, de **onderhoudstermijn**, betalings- en verrekenregelingen, verzekeringen en boetes.
- **Technische bepalingen / werkbeschrijving** — genummerd per bouwdeel, bijvoorbeeld:
  - **21** Betonwerk · **22** Metselwerk · **30** Kozijnen, ramen en deuren
  - **46** Schilderwerk · **52** Waterinstallaties · **55** Gasinstallaties
  - **60** Verwarming · **61** Ventilatie · **70** Elektrotechnische installaties

Elk technisch hoofdstuk beschrijft materiaal, kwaliteitseisen, normen en de wijze van uitvoering.

**Onthoud uit het voorbeeldbestek:** de onderhoudstermijn is **3 maanden voor de bouwkundige werken** en **12 maanden voor de installatietechnische werken** — installaties krijgen langer omdat gebreken zich daar vaak pas na een compleet stookseizoen tonen.
      `.trim(),
    },
    {
      heading: '3 · UAV 2012 en de rangorde bestek ↔ tekening',
      toetstermCodes: ['BL.1.3'],
      body: `
De **UAV 2012** (Uniforme Administratieve Voorwaarden) zijn de standaard­spelregels die in het bestek van toepassing worden verklaard: ze regelen o.a. aansprakelijkheid, meer- en minderwerk, oplevering en geschillen. Het bestek kan hierop *aanvullen* of *afwijken*.

**Wat gaat vóór bij tegenstrijdigheid?** Bestek en tekening worden geacht samen het hele werk te omvatten en moeten in samenhang worden gelezen. Als op de tekening werk staat dat niet in het bestek is genoemd (of omgekeerd), moet de aannemer het tóch uitvoeren alsof het wél is voorgeschreven. Wijkt de **beschrijving in het bestek** af van wat op de **tekening** staat, dan moet de aannemer dit vóór de aanbesteding met de directie afstemmen. De vuistregel: **de tekst van het bestek prevaleert**, tenzij het bestek zelf anders bepaalt.
      `.trim(),
    },
  ],
  toetstermen: [
    { code: 'BL.1.1', text: 'Legt het doel en de functie van een bestek als contractstuk uit.', niveau: 'BT2', bloom: 'Begrip' },
    { code: 'BL.1.2', text: 'Benoemt de STABU-opbouw: administratieve (00) en technische bepalingen.', niveau: 'BT1', bloom: 'Kennis' },
    { code: 'BL.1.3', text: 'Licht de rol van de UAV 2012 en de rangorde bestek/tekening toe.', niveau: 'BT2', bloom: 'Toepassen' },
  ],
  questions: [
    {
      id: 'BL1-q1', toetstermCode: 'BL.1.1', type: 'mc',
      prompt: 'Wat is het beste onderscheid tussen een bestek en een bouwtekening?',
      options: [
        'De tekening toont waar en hoe groot; het bestek beschrijft wat en van welke kwaliteit',
        'Het bestek toont waar en hoe groot; de tekening beschrijft de kwaliteit',
        'Ze bevatten exact dezelfde informatie in een ander formaat',
        'Het bestek is alleen bedoeld voor de gemeente, de tekening voor de aannemer',
      ],
      correctIndex: 0,
      explanation: 'De tekening geeft plaats en maatvoering; het bestek beschrijft materialen, kwaliteit en uitvoering. Samen vormen ze de contractstukken.',
    },
    {
      id: 'BL1-q2', toetstermCode: 'BL.1.2', type: 'mc',
      prompt: 'Volgens welke systematiek is een bestek voor woningbouw in Nederland doorgaans opgebouwd?',
      options: ['STABU', 'RAW', 'NEN 2580', 'BREEAM'],
      correctIndex: 0,
      explanation: 'STABU is de standaardsystematiek voor woning- en utiliteitsbouw. RAW is voor grond-, weg- en waterbouw; NEN 2580 gaat over oppervlaktemeting; BREEAM is een duurzaamheidskeurmerk.',
    },
    {
      id: 'BL1-q3', toetstermCode: 'BL.1.2', type: 'multi',
      prompt: 'Welke onderwerpen horen thuis in de administratieve bepalingen (hoofdstuk 00) van een bestek?',
      options: [
        'De onderhoudstermijn',
        'Verplichtingen van opdrachtgever en aannemer',
        'De van toepassing zijnde UAV 2012',
        'De metselmortel en het steenformaat',
        'De dikte van de dakisolatie',
      ],
      correctIndices: [0, 1, 2],
      explanation: 'Onderhoudstermijn, verplichtingen van partijen en de UAV horen bij de administratieve bepalingen. Metselmortel en isolatiedikte staan in de technische bepalingen (22 Metselwerk, resp. isolatie).',
    },
    {
      id: 'BL1-q4', toetstermCode: 'BL.1.2', type: 'mc',
      prompt: 'Wat is volgens het voorbeeldbestek de onderhoudstermijn?',
      attachments: [BESTEK],
      options: [
        '3 maanden voor de bouwkundige werken, 12 maanden voor de installatietechnische werken',
        '12 maanden voor alle werken',
        '6 maanden voor bouwkundig, 6 maanden voor installaties',
        'Er geldt geen onderhoudstermijn',
      ],
      correctIndex: 0,
      explanation: 'Het bestek (00.02.11) noemt 3 maanden voor bouwkundige werken en 12 maanden voor installatietechnische werken.',
    },
    {
      id: 'BL1-q5', toetstermCode: 'BL.1.3', type: 'mc',
      prompt: 'Op een tekening staat een dakkapel getekend die niet in het bestek wordt genoemd. Wat moet de aannemer doen?',
      options: [
        'De dakkapel toch uitvoeren; bestek en tekening worden geacht samen het hele werk te omvatten',
        'De dakkapel weglaten omdat het bestek leidend is en die niet noemt',
        'Zelf beslissen of de dakkapel nuttig is',
        'De dakkapel pas plaatsen na oplevering, als meerwerk',
      ],
      correctIndex: 0,
      explanation: 'Bestek en tekening omvatten samen het hele werk. Werk dat wel op de tekening maar niet in het bestek staat, moet toch worden uitgevoerd. Bij een echte tegenstrijdigheid overlegt de aannemer vóór aanbesteding met de directie.',
    },
    {
      id: 'BL1-q6', toetstermCode: 'BL.1.3', type: 'mc',
      prompt: 'Wat zijn de UAV 2012?',
      options: [
        'Uniforme Administratieve Voorwaarden: de standaardspelregels die in het bestek van toepassing worden verklaard',
        'Een set bouwkundige tekensymbolen',
        'De energie-eisen voor nieuwbouw',
        'Een verzekering tegen bouwschade',
      ],
      correctIndex: 0,
      explanation: 'De UAV 2012 regelen aansprakelijkheid, meer-/minderwerk, oplevering en geschillen. Het bestek verklaart ze van toepassing en kan erop aanvullen of afwijken.',
    },
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// BL.2 — Soorten bouwtekeningen
// ─────────────────────────────────────────────────────────────────────────────
const BL_2: Topic = {
  code: 'BL.2',
  section: 'BL',
  title: 'Soorten bouwtekeningen',
  blurb:
    'Situatie-, plattegrond-, doorsnede-, aanzicht-, detail- en installatietekening, plus de betekenis van schaal.',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · De tekeningsoorten',
      toetstermCodes: ['BL.2.1'],
      body: `
Een tekeningset bestaat uit verschillende soorten, elk met een eigen functie:

- **Situatietekening** — bovenaanzicht van het hele perceel met omgeving: rooilijnen, perceelgrenzen, oriëntatie en aansluiting op de openbare weg. Schaal vaak **1:500 of 1:1000**.
- **Plattegrond** — horizontale doorsnede per bouwlaag op ca. 1 m hoogte. Toont wanden, kozijnen, doorgangen en vaste inrichting. Schaal **1:50 of 1:100**.
- **Gevel (aanzicht)** — verticaal vooraanzicht van een buitenmuur (voor-, zij-, achtergevel): kozijnen, dakranden, gevelmateriaal.
- **Doorsnede** — verticale snede door het gebouw (overdwars/overlangs): hoogten, vloeren, dakhelling en fundering.
- **Detailtekening** — uitsnede van één aansluiting (kozijn, dakvoet, fundering) op grote schaal **1:5 of 1:10**; hier staan materialen exact.
- **Installatietekening** — leidingverloop en toestellen van riolering, water, gas, elektra of ventilatie.
      `.trim(),
    },
    {
      heading: '2 · Schaal: wat betekent 1:50?',
      toetstermCodes: ['BL.2.2'],
      body: `
De **schaal** geeft de verhouding tussen tekening en werkelijkheid. Bij **1:50** is 1 cm op de tekening in werkelijkheid 50 cm; bij **1:100** is 1 cm gelijk aan 1 m.

- **Hoe kleiner het tweede getal, hoe groter (gedetailleerder) de tekening.** Een detail 1:5 toont dus veel meer dan een plattegrond 1:100.
- Vuistregel per soort: situatie **1:500/1:1000**, plattegrond/gevel/doorsnede **1:50/1:100**, detail **1:5/1:10**.
- Maten op de tekening staan in **millimeters**. Meet nooit met een liniaal op een verkleinde print — gebruik altijd de aangegeven maatvoering.
      `.trim(),
    },
  ],
  toetstermen: [
    { code: 'BL.2.1', text: 'Herkent de verschillende tekeningsoorten en hun functie.', niveau: 'BT1', bloom: 'Kennis' },
    { code: 'BL.2.2', text: 'Past het begrip schaal toe en kiest de passende schaal per tekeningsoort.', niveau: 'BT2', bloom: 'Toepassen' },
  ],
  questions: [
    {
      id: 'BL2-q1', toetstermCode: 'BL.2.1', type: 'mc',
      prompt: 'Welke tekening is een horizontale doorsnede van een bouwlaag op ongeveer 1 meter hoogte?',
      options: ['De plattegrond', 'De doorsnede', 'De gevel', 'De situatietekening'],
      correctIndex: 0,
      explanation: 'De plattegrond is een horizontale snede op ca. 1 m; de doorsnede is een verticale snede.',
    },
    {
      id: 'BL2-q2', toetstermCode: 'BL.2.1', type: 'mc',
      prompt: 'Waarvoor dient een detailtekening (1:5)?',
      options: [
        'Een aansluiting exact tonen: materialen en opbouw van bv. een kozijn- of dakvoetaansluiting',
        'Het hele perceel in de omgeving plaatsen',
        'De verkoopplattegrond voor de makelaar',
        'De ligging van het gebouw ten opzichte van het noorden',
      ],
      correctIndex: 0,
      explanation: 'Een detail op grote schaal (1:5/1:10) toont exact hoe materialen op elkaar aansluiten.',
    },
    {
      id: 'BL2-q3', toetstermCode: 'BL.2.2', type: 'mc',
      prompt: 'Op een plattegrond met schaal 1:100 is een muur 45 mm lang getekend. Hoe lang is die muur in werkelijkheid?',
      options: ['4,5 meter', '45 centimeter', '45 meter', '450 meter'],
      correctIndex: 0,
      explanation: 'Bij 1:100 is 1 mm op tekening = 100 mm echt. 45 mm × 100 = 4500 mm = 4,5 m.',
    },
    {
      id: 'BL2-q4', toetstermCode: 'BL.2.2', type: 'mc',
      prompt: 'Welke schaal is het meest gedetailleerd?',
      options: ['1:5', '1:50', '1:100', '1:500'],
      correctIndex: 0,
      explanation: 'Hoe kleiner het tweede getal, hoe gedetailleerder. 1:5 toont het meest.',
    },
    {
      id: 'BL2-q5', toetstermCode: 'BL.2.1', type: 'multi',
      prompt: 'Welke gegevens vind je typisch op een situatietekening?',
      options: [
        'Perceelgrenzen en rooilijnen',
        'Oriëntatie (noordpijl)',
        'Aansluiting op de openbare weg',
        'De exacte metselmortel per muur',
        'Het leidingschema van de cv-ketel',
      ],
      correctIndices: [0, 1, 2],
      explanation: 'De situatietekening plaatst het gebouw op het perceel in zijn omgeving. Mortelkeuze staat in het bestek; het cv-schema op de installatietekening.',
    },
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// BL.3 — Arceringen en materiaalherkenning
// ─────────────────────────────────────────────────────────────────────────────
const BL_3: Topic = {
  code: 'BL.3',
  section: 'BL',
  title: 'Arceringen en materiaalherkenning',
  blurb:
    'Herken materialen op tekening aan hun arcering: baksteen, beton, gewapend beton, isolatie, hout, zand en gietwerk.',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · Arceringen: materialen in doorsnede',
      toetstermCodes: ['BL.3.1'],
      body: `
Een **arcering** is het patroon waarmee een materiaal in doorsnede wordt weergegeven. In de **renvooi** (legenda) staan de gebruikte arceringen verklaard. De meest voorkomende:

- **Baksteen / metselwerk** — diagonale evenwijdige strepen (45°).
- **Beton (ongewapend)** — patroon van stippen en kleine driehoekjes.
- **Gewapend beton** — hetzelfde beton-patroon **met** getekende wapeningsstaven, of arcering + aanduiding.
- **Isolatie** — een golvend/gekruld patroon of ingekleurd vlak (vaak per soort verschillend).
- **Hout in de lengte** — parallelle nerflijnen; **hout in dwarsdoorsnede** — een kruisje of houtnerf-ringen.
- **Zand / ophoging** — losse stippen (puntraster).
- **Gietwerk / mortel / specie** — fijne dichte stippeling.

De arceringen volgen grotendeels **NEN-tekenconventies**, maar de renvooi op de tekening is altijd leidend. Bestudeer hieronder de standaardarceringen — je moet ze op het examen kunnen herkennen.
      `.trim(),
      diagrams: [{ type: 'arceringen' }],
    },
  ],
  toetstermen: [
    { code: 'BL.3.1', text: 'Herkent materialen aan de hand van hun arcering in doorsnede.', niveau: 'BT1', bloom: 'Kennis' },
  ],
  games: [
    {
      id: 'BL3-matching-arcering', type: 'matching',
      title: 'Koppel arcering aan materiaal',
      pairs: [
        { left: 'Diagonale evenwijdige strepen', right: 'Baksteen / metselwerk' },
        { left: 'Stippen met kleine driehoekjes', right: 'Beton' },
        { left: 'Beton-patroon met wapeningsstaven', right: 'Gewapend beton' },
        { left: 'Golvend / gekruld patroon', right: 'Isolatie' },
        { left: 'Twee dunne evenwijdige lijnen', right: 'Glas' },
        { left: 'Parallelle nerflijnen', right: 'Hout (lengterichting)' },
        { left: 'Concentrische ringen (jaarringen)', right: 'Hout (kops)' },
        { left: 'Los puntraster', right: 'Zand / ophoging' },
        { left: 'Horizontale golflijnen', right: 'Water' },
      ],
    },
    {
      id: 'BL3-sort-materiaal', type: 'sort',
      title: 'Draagt het of niet? Sorteer de materialen',
      description: 'Sleep elk materiaal naar de juiste groep.',
      categories: ['Constructief / dragend', 'Afwerking / isolatie'],
      items: [
        { label: 'Gewapend beton', category: 'Constructief / dragend' },
        { label: 'Baksteen (spouwblad binnen)', category: 'Constructief / dragend' },
        { label: 'Staalprofiel', category: 'Constructief / dragend' },
        { label: 'Constructief hout (balk)', category: 'Constructief / dragend' },
        { label: 'Isolatie', category: 'Afwerking / isolatie' },
        { label: 'Tegelwerk', category: 'Afwerking / isolatie' },
        { label: 'Gips / pleister', category: 'Afwerking / isolatie' },
        { label: 'Cementdekvloer', category: 'Afwerking / isolatie' },
      ],
    },
  ],
  questions: [
    {
      id: 'BL3-q1', toetstermCode: 'BL.3.1', type: 'mc',
      prompt: 'Waar vind je de verklaring van de gebruikte arceringen op een tekening?',
      options: ['In de renvooi (legenda)', 'In het titelblok', 'Op de situatietekening', 'In de noordpijl'],
      correctIndex: 0,
      explanation: 'De renvooi is de legenda waarin symbolen en arceringen worden verklaard.',
    },
    {
      id: 'BL3-q2', toetstermCode: 'BL.3.1', type: 'mc',
      prompt: 'Diagonale, evenwijdige strepen in een doorsnede duiden meestal op welk materiaal?',
      options: ['Baksteen / metselwerk', 'Isolatie', 'Zand', 'Beton'],
      correctIndex: 0,
      explanation: 'Diagonale strepen (45°) zijn de klassieke arcering voor metselwerk.',
    },
    {
      id: 'BL3-q3', toetstermCode: 'BL.3.1', type: 'mc',
      prompt: 'Hoe herken je gewapend beton ten opzichte van ongewapend beton op een doorsnede?',
      options: [
        'Aan de getekende wapeningsstaven binnen het beton-patroon',
        'Aan een golvend patroon',
        'Gewapend beton wordt nooit gearceerd',
        'Aan diagonale strepen',
      ],
      correctIndex: 0,
      explanation: 'Beton wordt met stippen/driehoekjes gearceerd; bij gewapend beton worden de wapeningsstaven meegetekend of aangeduid.',
    },
    {
      id: 'BL3-q4', toetstermCode: 'BL.3.1', type: 'mc',
      prompt: 'Een golvend of gekruld patroon in een wand- of dakdoorsnede staat doorgaans voor:',
      options: ['Isolatiemateriaal', 'Baksteen', 'Gietijzer', 'Zand'],
      correctIndex: 0,
      explanation: 'Isolatie wordt vaak met een golvend/gekruld patroon of ingekleurd vlak weergegeven.',
    },
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// BL.4 — Symbolen en maatvoering
// ─────────────────────────────────────────────────────────────────────────────
const BL_4: Topic = {
  code: 'BL.4',
  section: 'BL',
  title: 'Symbolen en maatvoering',
  blurb:
    'Noordpijl, peil (PP), stramienen, maatlijnen, dagmaat/sponningmaat en de draairichting van ramen en deuren.',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · Vaste elementen: noordpijl, peil en stramienen',
      toetstermCodes: ['BL.4.1'],
      body: `
Op vrijwel elke tekening staan deze oriëntatie-hulpmiddelen:

- **Noordpijl** — geeft de oriëntatie; belangrijk voor bezonning (zuidgevel = veel zon).
- **Peil (P = ± 0,00)** — het nulpunt van de hoogtemaatvoering, meestal de bovenkant van de afgewerkte begane­grondvloer. Alles eronder is negatief (−), erboven positief (+). "**PP**" = **peil**.
- **Stramienen** — het raster van hart-lijnen (letters × cijfers, bv. **A–B–C** en **1–2–3**) waarop de hoofddraagconstructie is geordend. Kolommen en dragende wanden staan op de stramiensnijpunten.
- **Titelblok** — rechtsonder: projectnaam, schaal, tekenaar, datum en **revisienummer**.

Hieronder de meest voorkomende **tekensymbolen**. Let bij ramen op de driehoek (de punt wijst naar het scharnier), bij deuren op de kwartcirkel (draairichting), en herken de noordpijl, het peil, de stramienen en de maatlijn.
      `.trim(),
      diagrams: [{ type: 'bestekSymbolen' }],
    },
    {
      heading: '2 · Maatvoering: dagmaat en sponningmaat',
      toetstermCodes: ['BL.4.2'],
      body: `
Maten staan in **millimeters** langs **maatlijnen** met begin- en eindstreepjes.

- **Dagmaat** — de vrije, "in het licht" gemeten opening (bv. de dagmaat van een deuropening: de doorloopbreedte die overblijft).
- **Sponningmaat** — de maat gemeten tot in de **sponning** van het kozijn (waar het raam/de deur tegenaan sluit); groter dan de dagmaat.
- **Buitenwerkse maat** — gemeten over de buitenkant van het bouwdeel; **stramienmaat** — gemeten tussen de hartlijnen.

Ramen en deuren krijgen een **draairichting-symbool**: de stippellijn met de punt (of het "V"-teken) wijst naar de scharnierzijde; zo lees je af of een deur naar links of rechts en naar binnen of buiten draait.
      `.trim(),
    },
  ],
  toetstermen: [
    { code: 'BL.4.1', text: 'Herkent noordpijl, peil (PP) en stramienen en hun functie.', niveau: 'BT1', bloom: 'Kennis' },
    { code: 'BL.4.2', text: 'Past maatvoeringsbegrippen toe: dagmaat, sponningmaat, stramienmaat, draairichting.', niveau: 'BT2', bloom: 'Toepassen' },
  ],
  games: [
    {
      id: 'BL4-matching-symbool', type: 'matching',
      title: 'Koppel symbool aan betekenis',
      pairs: [
        { left: 'Driehoek met punt naar de zijkant', right: 'Draairaam (zijhangend)' },
        { left: 'Driehoek met punt naar onder', right: 'Kiepraam' },
        { left: 'Kwartcirkel vanaf een stijl', right: 'Deur met draairichting' },
        { left: 'Pijl naar het noorden met N', right: 'Noordpijl (oriëntatie)' },
        { left: 'Halfgevulde driehoek met ± 0,00', right: 'Peil' },
        { left: 'Cirkel met letter/cijfer op stippellijn', right: 'Stramien' },
        { left: 'Lijn met eindstreepjes en een maat', right: 'Maatlijn' },
      ],
    },
  ],
  questions: [
    {
      id: 'BL4-q1', toetstermCode: 'BL.4.1', type: 'mc',
      prompt: 'Wat is het "peil" (P = ± 0,00) op een bouwtekening?',
      options: [
        'Het nulpunt van de hoogtemaatvoering, meestal bovenkant afgewerkte begane­grondvloer',
        'De hoogte van de nok van het dak',
        'Het laagste punt van de fundering',
        'De gemiddelde hoogte van het maaiveld in de straat',
      ],
      correctIndex: 0,
      explanation: 'Peil is het referentie-nulpunt; hoogten worden als + of − t.o.v. dit peil aangegeven.',
    },
    {
      id: 'BL4-q2', toetstermCode: 'BL.4.1', type: 'mc',
      prompt: 'Waarvoor dienen de stramienen (het letter/cijfer-raster) op een tekening?',
      options: [
        'Het ordenen van de hoofddraagconstructie: kolommen en dragende wanden staan op de stramienlijnen',
        'Het aangeven van de bezonning',
        'Het verklaren van de arceringen',
        'Het nummeren van de kozijnen',
      ],
      correctIndex: 0,
      explanation: 'Stramienen vormen het constructieraster; ze maken maatvoering en positionering van de draagconstructie eenduidig.',
    },
    {
      id: 'BL4-q3', toetstermCode: 'BL.4.2', type: 'mc',
      prompt: 'Wat is de dagmaat van een deuropening?',
      options: [
        'De vrije doorloopmaat "in het licht" van de opening',
        'De maat tot in de sponning van het kozijn',
        'De maat over de buitenkant van het metselwerk',
        'De afstand tussen twee stramienlijnen',
      ],
      correctIndex: 0,
      explanation: 'De dagmaat is de vrije opening; de sponningmaat wordt tot in de sponning gemeten en is groter.',
    },
    {
      id: 'BL4-q4', toetstermCode: 'BL.4.2', type: 'mc',
      prompt: 'In welke eenheid staat de maatvoering op een bouwkundige tekening standaard?',
      options: ['Millimeters', 'Centimeters', 'Meters', 'Wisselend, zonder vaste eenheid'],
      correctIndex: 0,
      explanation: 'Bouwkundige maten worden standaard in millimeters aangegeven.',
    },
    {
      id: 'BL4-q5', toetstermCode: 'BL.4.2', type: 'mc',
      prompt: 'Het draairichting-symbool bij een deur (stippellijn met punt) wijst naar:',
      options: ['De scharnierzijde', 'De slotzijde', 'De bovendorpel', 'De drempel'],
      correctIndex: 0,
      explanation: 'De punt/top van het driehoekje wijst naar de scharnierzijde; zo lees je links/rechts en naar binnen/buiten draaien af.',
    },
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// BL.5 — Kozijnstaat en kozijncodes
// ─────────────────────────────────────────────────────────────────────────────
const BL_5: Topic = {
  code: 'BL.5',
  section: 'BL',
  title: 'Kozijnstaat en kozijncodes',
  blurb:
    'De kozijnstaat lezen, kozijncodering (bv. A02), raam- en deursymbolen, draai-kiep en glasaanduiding.',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · De kozijnstaat',
      toetstermCodes: ['BL.5.1'],
      body: `
De **kozijnstaat** (kozijnenlijst) is een overzicht van alle kozijnen in het gebouw, elk met een **code**. Op de plattegrond staat bij elk kozijn dezelfde code, zodat tekening en staat aan elkaar gekoppeld zijn.

- Een code als **A02** verwijst naar één specifiek kozijn: vaak geeft de **letter** de gevel of het bouwdeel aan en het **nummer** het volgnummer.
- Bij elk kozijn staan in de staat: **materiaal** (hout/aluminium/kunststof), **afmetingen**, **type opening** (draai, kiep, vast, schuif), **glassoort** en soms hang- en sluitwerk.

Zo kun je met de code op de plattegrond direct in de kozijnstaat opzoeken wat een raam of deur precies is.
      `.trim(),
    },
    {
      heading: '2 · Raam- en deursymbolen',
      toetstermCodes: ['BL.5.2'],
      body: `
De **openingswijze** wordt met lijnen aangegeven:

- **Draairaam** — een driehoek/V waarvan de punt naar de scharnierzijde wijst.
- **Kiepraam** — een driehoek met de punt naar onder (kiept om de onderregel).
- **Draai-kiep** — combinatie van beide symbolen in één raam.
- **Vast glas** — geen draaisymbool; het raam gaat niet open.
- **Schuifraam/-deur** — een pijl die de schuifrichting aangeeft.

**Glasaanduiding** in de staat: bijvoorbeeld **HR++** of **triple** glas met de bijbehorende U-waarde. Zo lees je meteen de thermische kwaliteit af.

De belangrijkste raam- en deursymbolen op een rij:
      `.trim(),
      diagrams: [{ type: 'bestekSymbolen' }],
    },
  ],
  toetstermen: [
    { code: 'BL.5.1', text: 'Leest de kozijnstaat en koppelt kozijncodes aan de plattegrond.', niveau: 'BT2', bloom: 'Toepassen' },
    { code: 'BL.5.2', text: 'Herkent raam- en deursymbolen (draai, kiep, draai-kiep, vast, schuif).', niveau: 'BT1', bloom: 'Kennis' },
  ],
  games: [
    {
      id: 'BL5-matching-raam', type: 'matching',
      title: 'Koppel raamtype aan kenmerk',
      pairs: [
        { left: 'Draairaam', right: 'Zijhangend, draait om een verticale as' },
        { left: 'Kiepraam', right: 'Kiept om de onderregel open' },
        { left: 'Draai-kiepraam', right: 'Kan zowel draaien als kiepen' },
        { left: 'Vast glas', right: 'Gaat niet open' },
        { left: 'Schuifraam', right: 'Schuift horizontaal open' },
      ],
    },
  ],
  questions: [
    {
      id: 'BL5-q1', toetstermCode: 'BL.5.1', type: 'mc',
      prompt: 'Wat is een kozijnstaat?',
      options: [
        'Een overzichtslijst van alle kozijnen met per stuk code, materiaal, maat, opening en glas',
        'De verticale stijl van één kozijn',
        'De vergunning voor het plaatsen van kozijnen',
        'Het onderdeel van het bestek over schilderwerk',
      ],
      correctIndex: 0,
      explanation: 'De kozijnstaat koppelt via codes elk kozijn op de plattegrond aan de specificaties.',
    },
    {
      id: 'BL5-q2', toetstermCode: 'BL.5.1', type: 'mc',
      prompt: 'Je ziet op de plattegrond de code "A02" bij een raam. Wat doe je daarmee?',
      options: [
        'In de kozijnstaat opzoeken welk materiaal, maat, opening en glas bij A02 horen',
        'Het is de schaal van de tekening',
        'Het is de hoogte van het raam boven peil',
        'Het is het aantal ramen op de verdieping',
      ],
      correctIndex: 0,
      explanation: 'De code is de sleutel tussen plattegrond en kozijnstaat; daar staan de details van dat specifieke kozijn.',
    },
    {
      id: 'BL5-q3', toetstermCode: 'BL.5.2', type: 'mc',
      prompt: 'Een raamsymbool met twee driehoeken/lijnen — één met punt naar de scharnierzijde en één die om de onderregel kiept — is een:',
      options: ['Draai-kiepraam', 'Vast raam', 'Schuifraam', 'Tuimelraam'],
      correctIndex: 0,
      explanation: 'De combinatie van draai- en kiepsymbool geeft een draai-kiepraam aan.',
    },
    {
      id: 'BL5-q4', toetstermCode: 'BL.5.2', type: 'multi',
      prompt: 'Welke gegevens verwacht je per kozijn in een kozijnstaat?',
      options: [
        'Materiaal (hout/aluminium/kunststof)',
        'Afmetingen',
        'Type opening (draai, kiep, vast)',
        'Glassoort',
        'De naam van de bewoner',
      ],
      correctIndices: [0, 1, 2, 3],
      explanation: 'De staat bevat materiaal, maat, openingstype en glassoort (soms hang- en sluitwerk) — geen bewonergegevens.',
    },
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// BL.6 — Installatietekeningen lezen
// ─────────────────────────────────────────────────────────────────────────────
const BL_6: Topic = {
  code: 'BL.6',
  section: 'BL',
  title: 'Installatietekeningen lezen',
  blurb:
    'Symbolen en leidingverloop op riolering-, water-, gas-, elektra- en ventilatietekeningen herkennen.',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · Installatietekeningen en hun symbolen',
      toetstermCodes: ['BL.6.1'],
      body: `
Installaties worden op **aparte tekeningen** weergegeven, omdat het leidingverloop anders de bouwkundige plattegrond onleesbaar zou maken. Per discipline gelden eigen symbolen:

- **Riolering** — vuilwater (DWA) en hemelwater (HWA) met stroomrichting, standleiding, ontstoppingsstuk en aansluitpunten. Bij een **gescheiden stelsel** lopen regen- en afvalwater apart.
- **Water** — koud- en warmwaterleiding, watermeter, tappunten en toestellen (combiketel, boiler).
- **Gas** — gasaansluiting, gasmeter en het leidingverloop naar de toestellen.
- **Elektra** — de groepenkast, wandcontactdozen, schakelaars, lichtpunten en het kabelverloop. Symbolen volgen **NEN 1010**-conventies.
- **Ventilatie** — toevoer- en afvoerroosters, kanalen, ventilator/WTW-unit en de balans tussen aan- en afvoer.

Hieronder de meest voorkomende installatiesymbolen:
      `.trim(),
      diagrams: [{ type: 'installatieSymbolen' }],
    },
  ],
  toetstermen: [
    { code: 'BL.6.1', text: 'Herkent symbolen en leidingverloop op installatietekeningen.', niveau: 'BT2', bloom: 'Begrip' },
  ],
  games: [
    {
      id: 'BL6-matching-installatie', type: 'matching',
      title: 'Koppel installatiesymbool aan betekenis',
      pairs: [
        { left: 'Halve gevulde cirkel op een lijn', right: 'Wandcontactdoos' },
        { left: 'Cirkel met een kruis erdoor', right: 'Lichtpunt (plafond)' },
        { left: 'Cirkeltje met korte hendel op een lijn', right: 'Schakelaar' },
        { left: 'Rechthoek met verticale ribben', right: 'Radiator' },
        { left: 'Cirkel met de letter T', right: 'Thermostaat' },
        { left: 'Cirkel met RM', right: 'Rookmelder' },
      ],
    },
  ],
  questions: [
    {
      id: 'BL6-q1', toetstermCode: 'BL.6.1', type: 'mc',
      prompt: 'Waarom worden installaties meestal op aparte tekeningen weergegeven?',
      options: [
        'Anders maakt het leidingverloop de bouwkundige plattegrond onleesbaar',
        'Omdat de gemeente dat verplicht',
        'Omdat installaties op een andere schaal getekend moeten worden',
        'Omdat de installateur geen bouwkundige tekening mag zien',
      ],
      correctIndex: 0,
      explanation: 'Het leidingverloop van alle disciplines samen op één plattegrond zou onoverzichtelijk worden; daarom aparte installatietekeningen.',
    },
    {
      id: 'BL6-q2', toetstermCode: 'BL.6.1', type: 'mc',
      prompt: 'Op een rioleringstekening zie je dat regenwater en afvalwater apart worden afgevoerd. Dit heet een:',
      options: ['Gescheiden stelsel', 'Gemengd stelsel', 'Verbeterd gemengd stelsel', 'Drukriolering'],
      correctIndex: 0,
      explanation: 'Bij een gescheiden stelsel lopen hemelwater (HWA) en vuilwater (DWA) via aparte leidingen.',
    },
    {
      id: 'BL6-q3', toetstermCode: 'BL.6.1', type: 'mc',
      prompt: 'Symbolen voor wandcontactdozen, schakelaars en lichtpunten hoor je op welke tekening en volgens welke norm?',
      options: [
        'De elektratekening, volgens NEN 1010',
        'De rioleringstekening, volgens NEN 2580',
        'De situatietekening, volgens het Bbl',
        'De gevelaanzicht, volgens de UAV',
      ],
      correctIndex: 0,
      explanation: 'Elektrasymbolen staan op de elektra-installatietekening en volgen de NEN 1010-conventies.',
    },
    {
      id: 'BL6-q4', toetstermCode: 'BL.6.1', type: 'multi',
      prompt: 'Welke elementen verwacht je op een ventilatietekening?',
      options: [
        'Toevoer- en afvoerroosters',
        'Luchtkanalen',
        'De ventilator- of WTW-unit',
        'De metselverbanden van de gevel',
      ],
      correctIndices: [0, 1, 2],
      explanation: 'Een ventilatietekening toont roosters, kanalen en de unit met de aan-/afvoerbalans. Metselverbanden horen op de bouwkundige tekening.',
    },
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// BL.7 — Praktijk: het examenbestek en de tekeningen
// ─────────────────────────────────────────────────────────────────────────────
const BL_7: Topic = {
  code: 'BL.7',
  section: 'BL',
  title: 'Praktijk: het examenbestek en de tekeningen',
  blurb:
    'Casusvragen waarbij je het echte examenbestek en de bijbehorende tekeningen (BLAD-verwijzingen) raadpleegt.',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · Zo pak je een bestek-/tekeningvraag aan',
      toetstermCodes: ['BL.7.1'],
      body: `
In het examen krijg je vragen waarbij je de **bijlage** moet raadplegen — een bestek en/of een tekening, met verwijzing naar een specifiek **BLAD**. Aanpak:

1. **Lees eerst de vraag** en bepaal *wat* je zoekt (een maat, een materiaal, een bepaling).
2. **Open de juiste bijlage** en het genoemde BLAD.
3. Bij een **bestekvraag**: zoek het juiste hoofdstuk (00 administratief, of een technisch nummer zoals 30 Kozijnen).
4. Bij een **tekeningvraag**: gebruik de **renvooi** voor arceringen/symbolen, het **titelblok** voor de schaal, en de **kozijncode** om in de staat te zoeken.
5. Let op **eenheden** (mm) en op de rangorde: bij tegenstrijdigheid tussen bestek en tekening prevaleert doorgaans de bestektekst.

Open de bijlagen hieronder en oefen met de vragen.
      `.trim(),
    },
  ],
  toetstermen: [
    { code: 'BL.7.1', text: 'Raadpleegt bestek en tekening om een praktijkvraag te beantwoorden.', niveau: 'BT2', bloom: 'Toepassen' },
  ],
  questions: [
    {
      id: 'BL7-q1', toetstermCode: 'BL.7.1', type: 'mc',
      prompt: 'Raadpleeg het bestek. Welke standaard en administratieve voorwaarden liggen aan dit bestek ten grondslag?',
      attachments: [BESTEK],
      options: [
        'STABU-Standaard 2012 met de UAV 2012',
        'De DNR 2011',
        'De RAW-systematiek',
        'Er zijn geen voorwaarden van toepassing',
      ],
      correctIndex: 0,
      explanation: 'De administratieve bepalingen verwijzen naar de STABU-Standaard 2012 en verklaren de UAV 2012 van toepassing.',
    },
    {
      id: 'BL7-q2', toetstermCode: 'BL.7.1', type: 'mc',
      prompt: 'Raadpleeg het bestek. Welk materiaal is voorgeschreven voor de buitenkozijnen, -ramen en -deuren?',
      attachments: [BESTEK],
      options: ['Aluminium', 'Hardhout', 'Kunststof (PVC)', 'Staal'],
      correctIndex: 0,
      explanation: 'Onder de voorgeschreven bouwstoffen staan aluminium buitenkozijnen, -ramen en -deuren en een vliesgevel.',
    },
    {
      id: 'BL7-q3', toetstermCode: 'BL.7.1', type: 'mc',
      prompt: 'Raadpleeg het bestek. Wie moet vóór aanvang het rapport over de belendingen (de staat van naburige panden) opstellen?',
      attachments: [BESTEK],
      options: [
        'Een beëdigd makelaar, taxateur of expertisebureau',
        'De aannemer zelf',
        'De gemeente',
        'De toekomstige bewoner',
      ],
      correctIndex: 0,
      explanation: 'Het bestek (00.02.06.08) eist een belendingenrapport, opgesteld door een beëdigd makelaar, taxateur of expertisebureau.',
    },
    {
      id: 'BL7-q4', toetstermCode: 'BL.7.1', type: 'mc',
      prompt: 'Je moet op de bouwkundige tekening (BLAD 1) een detail van een kozijnaansluiting bekijken. Welke schaal hoort typisch bij zo\'n detailtekening?',
      attachments: [TEK_A1, TEK_A3],
      options: ['1:5 of 1:10', '1:50', '1:100', '1:500'],
      correctIndex: 0,
      explanation: 'Detailtekeningen worden op grote schaal (1:5/1:10) getekend zodat materialen en aansluitingen exact leesbaar zijn.',
    },
    {
      id: 'BL7-q5', toetstermCode: 'BL.7.1', type: 'mc',
      prompt: 'Op de tekening zie je bij een raam een code staan die ook in de kozijnstaat terugkomt. Waarvoor gebruik je die code?',
      attachments: [TEK_A3],
      options: [
        'Om in de kozijnstaat de specificaties (materiaal, maat, opening, glas) van dat kozijn op te zoeken',
        'Om de schaal van de tekening te bepalen',
        'Om de hoogte boven peil af te lezen',
        'Om het bestekhoofdstuk te vinden',
      ],
      correctIndex: 0,
      explanation: 'De kozijncode koppelt de plattegrond aan de kozijnstaat, waar de details van dat kozijn staan.',
    },
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// BL.8 — Een bestek gebruiken: opzoeken en toepassen
// ─────────────────────────────────────────────────────────────────────────────
const BL_8: Topic = {
  code: 'BL.8',
  section: 'BL',
  title: 'Een bestek gebruiken: opzoeken en toepassen',
  blurb:
    'Stap voor stap iets opzoeken in een bestek, de STABU-hoofdstukindeling gebruiken en bestek en tekening combineren tot een antwoord.',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · Stap voor stap iets opzoeken',
      toetstermCodes: ['BL.8.1'],
      body: `
Een bestek is een naslagwerk — je leest het niet van voor tot achter, je **zoekt gericht op**. Vaste werkwijze:

1. **Bepaal wat je zoekt.** Gaat het om een *spelregel* (garantie, betaling, oplevering, verzekering) of om een *bouwdeel* (kozijn, dakbedekking, cv-ketel)?
2. **Kies het deel.** Spelregels staan in de **administratieve bepalingen (hoofdstuk 00)**; bouwdelen in de **technische bepalingen** met hun STABU-nummer.
3. **Zoek het STABU-hoofdstuk.** Bijvoorbeeld **30** Kozijnen/ramen/deuren, **46** Schilderwerk, **60** Verwarming.
4. **Lees de bepaling** en let op eenheden (mm) en verwijzingen naar normen.
5. **Controleer de tekening** als de vraag om een plaats of maat gaat.

**Uitgewerkt voorbeeld.** Een koper vraagt: *"Hoe lang heb ik garantie op de cv-installatie?"* → dit is een spelregel → **hoofdstuk 00** (administratief) → onderdeel **Onderhoudstermijn (00.02.11)** → daar staat **12 maanden voor de installatietechnische werken**. Antwoord gevonden zonder het hele bestek te lezen.
      `.trim(),
    },
    {
      heading: '2 · Bestek en tekening samen gebruiken',
      toetstermCodes: ['BL.8.2'],
      body: `
Vaak heb je **allebei** nodig. Voorbeeld: *"Van welk materiaal is raam A02 en welk glas zit erin?"*

1. **Tekening** → zoek op de plattegrond het kozijn met code **A02**.
2. **Kozijnstaat** → zoek A02 op: daar staan maat, openingstype en glassoort.
3. **Bestek, hoofdstuk 30** (Kozijnen, ramen en deuren) → hier staan de algemene eisen aan materiaal, kwaliteit en uitvoering die voor álle kozijnen gelden.

**Rangorde bij tegenstrijdigheid.** Wijkt de tekening af van het bestek, dan prevaleert doorgaans de **bestektekst**; bij twijfel overlegt de aannemer vóór aanbesteding met de directie. Werk dat wél op de tekening maar niet in het bestek staat (of andersom), moet tóch worden uitgevoerd — samen omvatten ze het hele werk.
      `.trim(),
    },
  ],
  toetstermen: [
    { code: 'BL.8.1', text: 'Zoekt gericht een bepaling op via de STABU-hoofdstukindeling.', niveau: 'BT2', bloom: 'Toepassen' },
    { code: 'BL.8.2', text: 'Combineert bestek en tekening (incl. rangorde) tot een antwoord.', niveau: 'BT2', bloom: 'Toepassen' },
  ],
  questions: [
    {
      id: 'BL8-q1', toetstermCode: 'BL.8.1', type: 'mc',
      prompt: 'Een koper vraagt hoe lang de garantie op de cv-installatie is. In welk deel van het bestek zoek je?',
      options: [
        'De administratieve bepalingen (hoofdstuk 00), bij de onderhoudstermijn',
        'Het technische hoofdstuk 22 Metselwerk',
        'De situatietekening',
        'De kozijnstaat',
      ],
      correctIndex: 0,
      explanation: 'Garantie/onderhoud is een spelregel en staat in de administratieve bepalingen (00.02.11 Onderhoudstermijn) — voor installaties 12 maanden.',
    },
    {
      id: 'BL8-q2', toetstermCode: 'BL.8.1', type: 'mc',
      prompt: 'Je wilt weten welke eisen gelden voor de buitenkozijnen. In welk technisch STABU-hoofdstuk kijk je?',
      options: ['30 — Kozijnen, ramen en deuren', '21 — Betonwerk', '46 — Schilderwerk', '60 — Verwarmingsinstallaties'],
      correctIndex: 0,
      explanation: 'Kozijnen, ramen en deuren staan in STABU-hoofdstuk 30. Schilderwerk (46) gaat over de afwerklaag, niet over het kozijn zelf.',
    },
    {
      id: 'BL8-q3', toetstermCode: 'BL.8.2', type: 'mc',
      prompt: 'Je zoekt materiaal én glassoort van raam A02. Wat is de juiste volgorde?',
      options: [
        'Kozijncode A02 op de plattegrond → opzoeken in de kozijnstaat → algemene eisen in bestekhoofdstuk 30',
        'Direct in de administratieve bepalingen kijken',
        'Alleen de situatietekening raadplegen',
        'De onderhoudstermijn opzoeken',
      ],
      correctIndex: 0,
      explanation: 'De code koppelt plattegrond aan kozijnstaat (specificaties per kozijn); het bestek geeft de algemene eisen die voor alle kozijnen gelden.',
    },
    {
      id: 'BL8-q4', toetstermCode: 'BL.8.2', type: 'mc',
      prompt: 'De tekening en het bestek spreken elkaar tegen over een maat. Wat is de vuistregel?',
      options: [
        'Doorgaans prevaleert de bestektekst; bij twijfel overlegt de aannemer vóór aanbesteding met de directie',
        'De tekening gaat altijd vóór het bestek',
        'De aannemer kiest zelf de goedkoopste optie',
        'Het werk wordt niet uitgevoerd tot na oplevering',
      ],
      correctIndex: 0,
      explanation: 'Bij tegenstrijdigheid prevaleert doorgaans de bestektekst; de aannemer stemt af met de directie vóór de aanbesteding.',
    },
    {
      id: 'BL8-q5', toetstermCode: 'BL.8.1', type: 'multi',
      prompt: 'Welke onderwerpen zoek je op in de administratieve bepalingen (hoofdstuk 00)?',
      options: [
        'De onderhoudstermijn',
        'De verzekeringen (CAR)',
        'De opleveringsprocedure',
        'De metselmortel voor de gevel',
        'Het type dakbedekking',
      ],
      correctIndices: [0, 1, 2],
      explanation: 'Onderhoud, verzekering en oplevering zijn spelregels (hoofdstuk 00). Metselmortel (22) en dakbedekking (33) staan in de technische bepalingen.',
    },
    {
      id: 'BL8-q6', toetstermCode: 'BL.8.2', type: 'mc',
      prompt: 'Raadpleeg het bestek. Volgens welke systematiek en administratieve voorwaarden werk je bij het opzoeken?',
      attachments: [BESTEK],
      options: [
        'STABU-hoofdstukindeling met de UAV 2012 als voorwaarden',
        'De RAW-systematiek met de UAV-GC',
        'De NEN 2580 met het Bouwbesluit',
        'Er is geen vaste indeling',
      ],
      correctIndex: 0,
      explanation: 'Het bestek is opgebouwd volgens STABU met de UAV 2012 van toepassing; die indeling gebruik je om gericht op te zoeken.',
    },
  ],
}

export const sectionTopics: Topic[] = [BL_1, BL_2, BL_3, BL_4, BL_5, BL_6, BL_7, BL_8]
