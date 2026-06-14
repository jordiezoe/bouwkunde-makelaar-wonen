import type { Topic } from '../types/content'

const FIG = '/figs/B_12'
const SRC_15 = 'Lesboek hfd. 15'
const SRC_16 = 'Lesboek hfd. 16'

export const B_12_vloeren_wanden: Topic = {
  code: 'B.12',
  section: 'B',
  title: 'Kruipruimtes, vloeren, wanden en plafonds',
  chapterRef: 'Lesboek hoofdstukken 15 en 16',
  blurb:
    'Houten vloeronderdelen (balklaag, strijkbalk, raveelbalk, onderslagbalk), dragende versus woningscheidende constructies, functie en eisen van een kruipruimte (ventilatie, vocht, toegankelijkheid), plus bouwfysische eisen aan wanden en vloeren: lucht- en contactgeluid, thermische isolatie en brandveiligheid.',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · Houten vloeren: balklaag, strijkbalk en raveelbalk',
      toetstermCodes: ['B.12.1'],
      body: `
Een **houten vloer** rust op een **balklaag** — een serie evenwijdige houten balken die van muur tot muur lopen en de vloer + belasting dragen.

### Onderdelen van een balklaag

**Balklaag (vloerbalken)**
- De evenwijdig liggende vloerbalken zelf, standaard h.o.h. **600 mm** (hart-op-hart-afstand)
- Standaard afmetingen: 63×150, 75×175 of 75×200 mm
- **Vuistregel balkhoogte = 1/20 van de overspanning** → bij 4 m overspanning is balkhoogte 200 mm

**Strijkbalk**
- De **buitenste balk** van de balklaag, evenwijdig aan de buitenmuur en daar tegenaan liggend
- Ligt **100 mm uit de binnenmuur** (vrije ruimte voor leidingen en om vocht uit het metselwerk te vermijden)
- Aan de strijkbalk zijn vaak de **strijkbalkankers** bevestigd (zie B.5 / B.12.2) die voorkomen dat de evenwijdige muur uitknikt
- Eén strijkbalk aan elke kant van het vertrek

**Raveelbalk**
- Een **balk haaks op de overige balken**, die wordt geplaatst rond een sparing in de vloer (typisch een **trapgat**, schoorsteen, leidingschacht)
- Beide einden rusten op de doorgaande **hoofdraveelbalken** (dat zijn de twee balken die de raveling 'klemmen' van beide zijden)
- De korte balken die op de raveelbalk eindigen heten **staartbalken**
- Verbinding via traditionele *raveelverbindingen* of moderne **gripankers** / **raveelschoenen**

**Onderslagbalk (moerbalk / moerbint)**
- Bij overspanningen **groter dan ~4,5 m**: een **zwaardere balk haaks op de hoofdrichting** van de balklaag, die de overige balken in tweeën opdeelt
- Rust op een **poer** (gemetselde of betonnen kolom) of een **onderslagmuurtje** in de kruipruimte
- De vloerbalken op de onderslagbalk heten dan **kinderbalken**

**Kinderbalken**
- De vloerbalken die rusten **op de onderslagbalk**, niet direct op de gevelmuren — de 'helft' van een verdeelde overspanning

**Poer**
- Korte verticale **kolom** (gemetseld of beton) in de kruipruimte, die de onderslagbalk ondersteunt
- Moet zelf op een betonnen funderingsblokje staan om geen wegzakken te krijgen

### Verankering

- **Strijkbalkanker** — stripstaal met spanklossen, voorkomt uitknikken van de evenwijdige muur (de buitenmuur). Onderlinge afstand 1,5–2 m, over 2 of 3 balken.
- **Haakanker / schootanker / wervelanker** — verankert de balklaag aan de muur dwars op de balken
- **Koppelanker** — voor balken die op een muur eindigen en gekoppeld moeten worden aan de balklaag aan de andere zijde

### Belangrijke regel
**Balken mogen NOOIT doorlopen over een woningscheidende muur** — vanwege:
- **Brandoverslag** (vuur kan via de balk doorlopen)
- **Geluidsoverdracht** (contactgeluid loopt via balk door)
Aan beide zijden van de scheidingsmuur wordt de balklaag gestopt en eventueel met **koppelankers** doorverbonden.
      `.trim(),
      images: [
        {
          src: `${FIG}/balkkop-spouw.jpg`,
          caption: 'Balkkop gelijk met de binnenzijde van het spouwblad in een spouwmuur — voorkomt vochttransport van buitenmuur naar de balk.',
          source: SRC_15,
          width: 'md',
        },
        {
          src: `${FIG}/onderslag-kinder.jpg`,
          caption: 'Onderslagbalk (moerbalk) haaks op de balklaag, met de kortere kinderbalken eroverheen — voor overspanningen groter dan 4,5 m.',
          source: SRC_16,
          width: 'md',
        },
        {
          src: `${FIG}/onderslag-poer.jpg`,
          caption: 'Onderslagbalk rustend op een poer (gemetselde kolom) in de kruipruimte — verdeelt de overspanning.',
          source: SRC_15,
          width: 'md',
        },
        {
          src: `${FIG}/onderslagmuurtje.jpg`,
          caption: 'Onderslagmuurtje als alternatief voor poeren — draagt alleen de beganegrondvloer, lichter te funderen dan de buitenmuren.',
          source: SRC_15,
          width: 'md',
        },
        {
          src: `${FIG}/raveelconstructie.jpg`,
          caption: 'Raveelconstructie rond een trapgat: hoofdraveelbalken (doorgaand), raveelbalk (haaks) en staartbalken (korte balken op de raveelbalk).',
          source: SRC_16,
          width: 'md',
        },
        {
          src: `${FIG}/uitknikken-muren.jpg`,
          caption: 'Zonder verankering aan de balklaag kunnen muren naar buiten uitknikken — strijkbalkankers en strekkende ankers voorkomen dit.',
          source: SRC_16,
          width: 'md',
        },
      ],
    },

    {
      heading: '2 · Dragende vs woningscheidende constructies',
      toetstermCodes: ['B.12.2'],
      body: `
B.12.2 is een **analyse-toetsterm** (BT2, Bloom: Analyseren) — je moet op tekening kunnen vaststellen of een wand of vloer **dragend**, **woningscheidend**, of beide tegelijk is. Belangrijk voor o.a. verbouwingen ('mag deze muur weg?').

### Dragende constructie (constructief)
Heeft als hoofdtaak **belasting overdragen** naar de fundering:
- **Verticale belasting**: eigen gewicht + permanente belasting (vloeren, daken, sneeuw) + veranderlijke belasting (mensen, meubels)
- **Horizontale belasting**: wind, aardbeving

**Herkenning**:
- Wanden onder een vloer of dak waar **balken op rusten**
- Wanden recht boven elkaar door meerdere verdiepingen
- **Buitenmuren** zijn vrijwel altijd dragend (gevel + windbelasting)
- Op tekening: vaak **dikker** dan niet-dragende wanden, met aansluiting op fundering
- In de plattegrond aangegeven met **dikkere lijn / arcering** (zie B.2 hoofdopbouw)

### Woningscheidende constructie
Heeft als hoofdtaak **scheiden van twee verschillende eigendommen** (twee aangrenzende woningen, of woning en utiliteit). Vraagt zwaardere eisen ten aanzien van:
- **Geluidsisolatie** (lucht- én contactgeluid)
- **Brandveiligheid** (60 of 120 minuten brandwerendheid, afhankelijk van categorie)
- **Privacy** en luchtdichtheid

**Herkenning**:
- Loopt **doorlopend van fundering tot dak** zonder onderbreking
- Komt voor in **rijwoningen** tussen elke woning, in **galerij-/portiekflats** tussen aangrenzende appartementen
- Op tekening vaak **dikker dan binnenwanden** (250–350 mm voor goede geluidsisolatie)
- Bij **HSB** en gemetselde varianten is het vaak een **'twee gescheiden bladen'**-constructie (massa-veer-massa) om contactgeluid te onderbreken — twee 100 mm bladen met spouw van ~50 mm + isolatie

### Combinaties
Een wand kan **zowel dragend als woningscheidend** zijn — dan moet hij voldoen aan beide eisen:
- Voldoende **dikte/massa** voor draagvermogen (constructieberekening)
- Voldoende **massa + ontkoppeling** voor geluidsisolatie (gescheiden bladen)
- Voldoende **brandwerendheid** (steenachtig of beklede HSB)

### Niet-dragende, niet-scheidende wand (binnenwand)
- Gips-, cellenbeton-, metal-stud- of kalkzandsteenwand
- Kan **wegvallen** bij verbouwing zonder bouwkundig risico
- Levert alleen ruimte-indeling, geluiddemping en optionele brandwerendheid

### Vloeren — dragend vs vrijdragend
- **Dragend vloer** — ligt direct op de ondergrond (alleen begane grond, in beton)
- **Vrijdragende vloer** — opgelegd op de muren, met kruipruimte of verdiepingsruimte eronder

### Vuistregels voor de praktijk
- Twijfel je? **Constructeur raadplegen** vóór doorbraak — een verkeerd geslagen tussenmuur kan instorten veroorzaken
- **Buitenmuur is altijd dragend** — nooit weghalen, alleen openingen erin maken met latei
- **Woningscheidende muur is altijd dragend** in een rijwoning (loopt door tot fundering)
- Op tekening: kijk naar de **arcering** in plattegrond en doorsnede (zie B.2 Hoofdopbouw — arceringen)
      `.trim(),
      images: [
        {
          src: `${FIG}/woningscheidend.jpg`,
          caption: 'Stalen onderslagbalk tussen vloerbalken bij een woningscheidende muur — de balken stoppen aan weerszijden van de scheidingsmuur (geen doorgaande balken vanwege brand- en geluidsoverdracht).',
          source: SRC_16,
          width: 'md',
        },
        {
          src: `${FIG}/moer-kinder.jpg`,
          caption: 'Moer- en kinderbalken in traditionele bouw — voorbeeld van een dragende constructie waar de onderslag (moer) puntbelasting overdraagt op poer of muur.',
          source: SRC_16,
          width: 'md',
        },
      ],
    },

    {
      heading: '3 · Functie en eisen aan kruipruimtes',
      toetstermCodes: ['B.12.4'],
      body: `
Een **kruipruimte** is de ruimte **tussen de beganegrondvloer en de ondergrond** — typisch 50–80 cm hoog. Komt voor onder vrijwel alle Nederlandse woningen die op staal of palen zijn gefundeerd (m.u.v. woningen met kelder of vloer-op-grond).

### Functies van een kruipruimte
1. **Toegang tot leidingen** — riolering, water, gas, elektra lopen door de kruipruimte; bereikbaar voor reparatie
2. **Bouwfysische scheiding** — voorkomt direct contact tussen vloerconstructie en vochtige grond
3. **Ventilatie van de onderkant van de vloer** — voorkomt schimmel- en houtaantasting bij houten vloeren
4. **Drukverdeling** — bij sterke regen kan opkomend grondwater door de kruipruimte weglopen
5. **Inspectiemogelijkheid** voor fundering en grondwaterstand

### Bouwkundige eisen aan een kruipruimte

#### Toegankelijkheid
- **Minimale hoogte 0,5 m** voor onderhoud
- Bereikbaar via **kruipluiken** (in de begane grondvloer, luchtdicht afsluitbaar met rubberprofiel — geïsoleerd) of via **kruipgaten** in de keldermuur (vanuit een kelder of berging)

#### Ventilatie
- **Kniekokers** (kunststof, knie-vormig profiel) in de buitenmuur — diagonaalsgewijs geplaatst voor doorgaande luchtstroming
- **Buitenopening boven het maaiveld** (voorkomt dichtstuiven met regenwater en aarde)
- **Openingen niet breder dan 1 cm** (anders kruipen ratten en muizen erin)
- Onderlinge afstand ventilatieroosters: ca. 4–6 m, minimaal twee per ruimte voor goede doorstroming
- **Belangrijk: in de winter NIET afsluiten** — een geventileerde maar luchtdichte vloer is altijd beter dan een afgesloten kruipruimte (geen condens op onderkant vloer)

#### Vochtbeperking
- **Bodem van de kruipruimte**: zandlaag, vaak met **dampscherm** (PE-folie) erover om opkomend grondvocht te beperken
- **Minimaal 50 cm afstand** tussen vloer en grondwater (uit Bouwbesluit / Bbl)
- **Geen lekkages** uit leidingen — controle is standaard onderdeel van funderings-/woninginspecties
- Bij hoge grondwaterstand en frequente wateroverlast: extra **bodemafdichting** met betontegels of PE-folie + ballast

#### Bouwhygiëne
- Geen organisch materiaal achterlaten in de kruipruimte (hout, papier — voeding voor schimmel en knaagdieren)
- Vrij van bouwafval

### Praktijkproblemen
- **Stilstaand water** door verstopte ventilatie → schimmel, geur, vochtdoorslag naar vloer
- **Houten vloer rotten** door blijvend hoog vochtgehalte (>80% RV) — vaak gecombineerd met afgesloten ventilatie in de winter
- **Radonbelasting**: kruipruimte kan radongas concentreren — onderdeel van Bbl-eisen voor nieuwe woningen (radonbestendige bouw)
- **Wateroverlast** bij hoge grondwaterstand — soms drainagepomp nodig

### Moderne alternatieven
- **Vloer-op-grond** (geïsoleerde betonvloer direct op zand, zonder kruipruimte) — energiezuiniger, maar leidingen moeilijker bereikbaar
- **Lage kruipruimte** (~30 cm) met inspectieluiken — compromisvariant
      `.trim(),
      images: [
        {
          src: `${FIG}/ventilatiekoker.jpg`,
          caption: 'Ventilatiekoker in een spouwmuur zonder isolatie — knievormige doorgang die de kruipruimte verbindt met buiten.',
          source: SRC_15,
          width: 'md',
        },
        {
          src: `${FIG}/kniekoker.jpg`,
          caption: 'Kunststof kniekoker (ventilatiekoker) — diagonaalsgewijs geplaatst zodat regen niet naar binnen waait en luchtstroming doorgaat.',
          source: SRC_15,
          width: 'sm',
        },
      ],
    },

    {
      heading: '4 · Bouwfysische eisen aan wanden en vloeren',
      toetstermCodes: ['B.12.3'],
      body: `
Wanden en vloeren moeten voldoen aan drie hoofd-bouwfysische eisen. De **Bbl** legt de minimumeisen vast; voor woningscheidende constructies gelden zwaardere eisen dan voor binnenwanden.

### Geluidsisolatie

#### Luchtgeluid
Geluid dat door de lucht reist (stem, muziek, tv). Wordt door een wand of vloer gedempt via de **massawet**: hoe **zwaarder** de constructie (kg/m²), hoe beter de luchtgeluidsisolatie.

- **Eenheid**: Rw (in dB)
- Eis Bbl voor **woningscheidende wand**: **Rw ≥ 52 dB** (klasse 'standaard'), meer voor zorgwoningen
- Eis voor **binnenwanden tussen verblijfsruimten**: lager
- **Beton** (~2.400 kg/m³, dik 200 mm): inherent hoog door massa
- **Lichte wand** (gipsplaten, metal-stud, HSB): moet **dubbel uitgevoerd** met spouw + isolatie ertussen — werkt als **massa-veer-massa**-systeem

#### Contactgeluid
Geluid dat via vaste constructies wordt doorgegeven (voetstappen, vallend voorwerp, slaande deur). Veel lastiger te dempen dan luchtgeluid omdat het in het materiaal zelf reist.

- **Eenheid**: Lnt (in dB; lager = beter)
- Eis Bbl tussen verschillende woningen: **Lnt ≤ 54 dB**
- **Standaard oplossing in beton**: **zwevende dekvloer** — een cement- of anhydriet-dekvloer **drijvend op een isolatiedeken** (steenwol, PS-platen, kurk). De isolatiedeken ontkoppelt mechanisch van de dragende vloer
- In HSB: **plafondhangers** — smalle balkjes los van de balklaag, of gipsplafond op veerregelranden

> **Geheugensteun**: lucht­geluid = **massa**, contact­geluid = **ontkoppeling**

### Thermische isolatie

#### Functie
- **Comfort** binnenshuis (warm in winter, koel in zomer)
- **Energiezuinigheid** — Bbl stelt strikte eisen aan U-waarde (energieverlies door m² constructie per °C verschil)
- **Voorkomen van koudebruggen** en condensatie aan binnenzijde

#### Eisen volgens Bbl (nieuwbouw)
- **Buitenmuur**: Rc ≥ 4,7 m²K/W
- **Beganegrondvloer**: Rc ≥ 3,7 m²K/W
- **Dak**: Rc ≥ 6,3 m²K/W
- Bij woningscheidende wand: geen thermische eis (binnen, beide zijden verwarmd), wél geluidseisen

#### Isolatiemateriaal
- **Steenwol** — brandwerend + geluid + warmte; standaard in spouwmuren en daken
- **Glaswol** — vergelijkbaar; goedkoper
- **Steenwoldeken** voor onderzijde houten vloeren
- **EPS / XPS** voor vloeren en kruipruimte-isolatie
- **PIR / PUR** — beste isolatiewaarde per dikte, gebruikt bij hellende daken en sandwich-elementen

### Brandveiligheid

#### Eisen
- **Brandwerendheid** van een wand of vloer = de tijd waarin hij de brand tegenhoudt, in **minuten**
- Eisen Bbl, afhankelijk van het gebruik:
  - **Binnenwand in eigen woning**: meestal geen specifieke eis
  - **Woningscheidende wand/vloer**: **60 minuten** (klasse: weerstand tegen branduitbreiding **WBDBO**)
  - **Naar trappenhuis / vluchtroute**: **30–60 minuten**
  - **Naar berging in garage**: 30 of 60 min afhankelijk van categorie

#### Brandwerende oplossingen
- **Beton + steenwol** zijn vrijwel altijd voldoende
- **Houten vloeren** in eengezinswoningen vragen vaak **gipskartonplafond** of plafond op steengaas + stucwerk
- **Stalen onderslagbalken die zichtbaar zijn moeten brandwerend bekleed** met steengaas + stucwerk, brandwerende verf, of gipsvezelplaten tussen flenzen
- **Staaldeur in vluchtroute** met certificaat (Rf 30/60 min)

### Samenhang in één wand of vloer
Een woningscheidende wand moet alle drie tegelijk:
- Voldoende **massa** voor luchtgeluid (Rw ≥ 52 dB)
- Voldoende **ontkoppeling** voor contactgeluid (bij houten vloeren via zwevende dekvloer)
- Voldoende **brandwerendheid** (60 min)
- Eventueel **thermische isolatie** bij scheidingsvloer naar een onverwarmde berging
      `.trim(),
    },
  ],

  toetstermen: [
    {
      code: 'B.12.1',
      text: 'Benoemt houten vloeren en onderdelen van houten vloeren: raveelbalken, strijkbalken en balklaag.',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'B.12.2',
      text: 'Inventariseert vloeren en wanden op grond van het onderscheid dragend of woningscheidend.',
      niveau: 'BT2',
      bloom: 'Analyseren',
      metDrawing: true,
    },
    {
      code: 'B.12.3',
      text: 'Legt de functie van een kruipruimte en de bouwkundige eisen aan wanden en vloeren uit m.b.t. geluidsisolatie (lucht- en contactgeluid), thermische isolatie en brandveiligheid.',
      niveau: 'BT2',
      bloom: 'Begrip',
      metDrawing: true,
    },
    {
      code: 'B.12.4',
      text: 'Licht de eisen toe die aan een kruipruimte gesteld worden m.b.t. ventilatie, beperken van vocht en toegankelijkheid.',
      niveau: 'BT2',
      bloom: 'Begrip',
      metDrawing: true,
    },
  ],

  questions: [
    // === B.12.1 — Vloeronderdelen (5) ===
    {
      id: 'B12-1-a',
      toetstermCode: 'B.12.1',
      type: 'mc',
      prompt: 'Wat is een **strijkbalk** in een houten balklaag?',
      options: [
        'Een korte balk die rond een trapgat wordt geplaatst',
        'De buitenste balk van de balklaag, evenwijdig aan de buitenmuur en daar dicht tegenaan',
        'Een dikke balk haaks op de balklaag, die de overige balken in tweeën deelt',
        'Een balk waar verfwerk op aangebracht wordt voor afwerking',
      ],
      correctIndex: 1,
      explanation:
        'De strijkbalk is de buitenste balk van de balklaag — evenwijdig aan de buitenmuur, op ~100 mm afstand. Vaak voorzien van strijkbalkankers die voorkomen dat de evenwijdige muur uitknikt.',
    },
    {
      id: 'B12-1-b',
      toetstermCode: 'B.12.1',
      type: 'mc',
      prompt:
        'Bij een **trapgat** in een houten verdiepingsvloer worden balken doorbroken. De balk haaks op de overige, die het gat begrenst, heet de:',
      options: [
        'Strijkbalk',
        'Onderslagbalk',
        'Raveelbalk',
        'Moerbalk',
      ],
      correctIndex: 2,
      explanation:
        'De raveelbalk is de balk haaks op de hoofdrichting van de balklaag die het trapgat begrenst. Hij rust op de twee doorgaande hoofdraveelbalken aan weerszijden. De kortere balken die op de raveelbalk eindigen heten staartbalken.',
    },
    {
      id: 'B12-1-c',
      toetstermCode: 'B.12.1',
      type: 'mc',
      prompt:
        'Wat is de vuistregel voor de **balkhoogte** in een houten balklaag?',
      options: [
        'Altijd 200 mm, ongeacht de overspanning',
        'Balkhoogte ≈ 1/10 van de overspanning',
        'Balkhoogte ≈ 1/20 van de overspanning — bv. bij 4 m overspanning is balkhoogte ~200 mm',
        'Balkhoogte ≈ overspanning gedeeld door balkbreedte',
      ],
      correctIndex: 2,
      explanation:
        'Vuistregel houtbouw: balkhoogte ≈ 1/20 van de overspanning. Bij 4 m overspanning → 200 mm. Vanaf overspanning ~4,5 m wordt een onderslagbalk geplaatst om de overspanning te halveren.',
    },
    {
      id: 'B12-1-d',
      toetstermCode: 'B.12.1',
      type: 'mc',
      prompt:
        'Wat is een **kinderbalk** in een samengestelde balklaag?',
      options: [
        'De extra dunne balk die als lichtgewicht ondersteuning dient',
        'Een vloerbalk die op de onderslagbalk rust in plaats van direct op de buitenmuur',
        'De allereerste balk van de balklaag in elk vertrek',
        'Een tijdelijke balk tijdens de bouw',
      ],
      correctIndex: 1,
      explanation:
        'Kinderbalken zijn de vloerbalken die op de **onderslagbalk (moerbalk)** rusten in plaats van direct op de gevels. Door de onderslagbalk wordt de overspanning gehalveerd, waardoor de kinderbalken kleiner kunnen blijven.',
    },
    {
      id: 'B12-1-e',
      toetstermCode: 'B.12.1',
      type: 'mc',
      prompt:
        'Waarom mogen vloerbalken **nooit doorlopen** over een woningscheidende muur?',
      options: [
        'Het hout zou krimpen en de muur scheuren',
        'Brandoverslag (vuur loopt via de balk door) en geluidsoverdracht (contactgeluid loopt door)',
        'De Bbl-eis voor stedenbouwkundige planologie',
        'Het is constructief niet mogelijk',
      ],
      correctIndex: 1,
      explanation:
        'Een doorlopende balk vormt een brandbrug (brand wordt naar de buurwoning overgedragen) en een geluidsbrug (voetstappen en geluiden lopen door). Daarom worden balken aan weerszijden van de scheidingsmuur gestopt en eventueel met koppelankers verbonden.',
    },

    // === B.12.2 — Dragend vs woningscheidend (4) ===
    {
      id: 'B12-2-a',
      toetstermCode: 'B.12.2',
      type: 'mc',
      prompt:
        'Wat is het belangrijkste verschil tussen een **dragende** en een **woningscheidende** wand?',
      options: [
        'Een dragende wand is altijd dikker',
        'Een dragende wand draagt belasting naar de fundering; een woningscheidende wand scheidt twee verschillende eigendommen en heeft zware geluid- en brandeisen',
        'Een woningscheidende wand is altijd van beton, dragende altijd van metselwerk',
        'Het zijn synoniemen',
      ],
      correctIndex: 1,
      explanation:
        'Dragend = primair functie is **belasting overdragen**. Woningscheidend = primair functie is **scheiden van twee eigendommen** met bijbehorende eisen voor geluid en brand. Een wand kan beide tegelijk zijn (vrijwel altijd in een rijwoning).',
    },
    {
      id: 'B12-2-b',
      toetstermCode: 'B.12.2',
      type: 'mc',
      prompt:
        'Bij een verbouwing wil de klant een binnenwand verwijderen. Wat is de **belangrijkste check** voordat dit kan?',
      options: [
        'Of er leidingen door de wand lopen',
        'Of de wand dragend is — een verkeerd geslagen tussenmuur kan instorten veroorzaken; een constructeur moet dit controleren',
        'Of de wand niet recent geverfd is',
        'Of de buren toestemming geven',
      ],
      correctIndex: 1,
      explanation:
        'Eerste check is altijd: is deze wand dragend? Een verkeerde sloop kan instorting veroorzaken. Een constructeur beoordeelt op tekening en ter plaatse; vaak is een balk of latei nodig om de bovenliggende belasting over te nemen.',
    },
    {
      id: 'B12-2-c',
      toetstermCode: 'B.12.2',
      type: 'mc',
      prompt:
        'Welke wand is in een rijwoning **vrijwel altijd zowel dragend als woningscheidend**?',
      options: [
        'De binnenmuur tussen woonkamer en keuken',
        'De buitenmuur aan de achtergevel',
        'De wand tussen de eigen woning en de buurwoning',
        'De wand tussen badkamer en slaapkamer',
      ],
      correctIndex: 2,
      explanation:
        'De wand tussen aangrenzende rijwoningen loopt door van fundering tot dak (dragend) **én** scheidt twee eigendommen (woningscheidend). Hij moet voldoen aan eisen voor draagkracht, geluidsisolatie (Rw ≥ 52 dB) én brand (60 min).',
    },
    {
      id: 'B12-2-d',
      toetstermCode: 'B.12.2',
      type: 'mc',
      prompt:
        'Een **vrijdragende vloer** is:',
      options: [
        'Een vloer die direct op de ondergrond ligt (vloer-op-grond)',
        'Een vloer die opgelegd is op de muren en een kruipruimte of verdiepingsruimte eronder heeft',
        'Een vloer zonder dragende functie',
        'Een vloer van houten balken zonder beton',
      ],
      correctIndex: 1,
      explanation:
        'Een vrijdragende vloer wordt op de muren opgelegd; eronder is "loze ruimte" zoals een kruipruimte (begane grond) of verdiepingsruimte. Een dragende vloer (alleen begane grond) ligt direct op de ondergrond.',
    },

    // === B.12.3 — Bouwfysische eisen (6) ===
    {
      id: 'B12-3-a',
      toetstermCode: 'B.12.3',
      type: 'mc',
      prompt:
        'Wat is het verschil tussen **luchtgeluid** en **contactgeluid**?',
      options: [
        'Luchtgeluid is buitengeluid, contactgeluid binnengeluid',
        'Luchtgeluid reist door de lucht (stem, muziek); contactgeluid reist via vaste constructies (voetstappen, vallend voorwerp)',
        'Luchtgeluid alleen overdag, contactgeluid alleen ’s nachts',
        'Contactgeluid is alleen relevant in flats',
      ],
      correctIndex: 1,
      explanation:
        'Luchtgeluid plant zich voort door de lucht; gedempt door massa (massawet). Contactgeluid ontstaat door directe trilling van een vaste constructie (voetstap → vloer → muur naar de buren) en is veel moeilijker te dempen — vereist mechanische ontkoppeling.',
    },
    {
      id: 'B12-3-b',
      toetstermCode: 'B.12.3',
      type: 'mc',
      prompt:
        'Welke maatregel verbetert vooral de **contactgeluidisolatie** tussen verdiepingen in beton?',
      options: [
        'Een dikkere betonvloer',
        'Een zwevende dekvloer — cement- of anhydriet-dekvloer op een isolatiedeken die mechanisch ontkoppelt van de dragende betonvloer',
        'Extra wapening in de betonvloer',
        'Een tweede laag beton bovenop',
      ],
      correctIndex: 1,
      explanation:
        'Een zwevende dekvloer ontkoppelt de afwerklaag mechanisch van de dragende vloer via een isolatiedeken (steenwol, EPS, kurk). Voetstappen op de dekvloer worden door de deken gedempt en bereiken de dragende vloer veel minder. Dikker maken werkt vooral voor luchtgeluid, niet contactgeluid.',
    },
    {
      id: 'B12-3-c',
      toetstermCode: 'B.12.3',
      type: 'mc',
      prompt:
        'Wat is de **massawet** in geluidsisolatie?',
      options: [
        'Hoe groter de oppervlakte van een wand, hoe minder geluid hij doorgeeft',
        'Hoe zwaarder de wand (kg/m²), hoe beter de luchtgeluidsisolatie',
        'Hoe dikker de luchtspouw, hoe slechter de isolatie',
        'Hoe meer poreus, hoe beter de demping',
      ],
      correctIndex: 1,
      explanation:
        'De massawet: luchtgeluidsisolatie volgt de **massa per m²** van de wand. Vandaar dat een dunne maar zware betonwand veel beter dempt dan een dikke lichte gipswand. Voor lichte wanden wordt dit gecompenseerd met dubbele bladen + spouw + isolatie (massa-veer-massa).',
    },
    {
      id: 'B12-3-d',
      toetstermCode: 'B.12.3',
      type: 'mc',
      prompt:
        'De Rc-waarde van een buitenmuur in nieuwbouw volgens het Bbl moet minimaal zijn:',
      options: [
        'Rc ≥ 2,5 m²K/W',
        'Rc ≥ 4,7 m²K/W',
        'Rc ≥ 6,3 m²K/W',
        'Rc ≥ 10 m²K/W',
      ],
      correctIndex: 1,
      explanation:
        'Voor nieuwbouw geldt volgens Bbl: buitenmuur Rc ≥ 4,7, beganegrondvloer Rc ≥ 3,7, dak Rc ≥ 6,3 m²K/W. Voor utiliteits- of energiezuinige bouw kunnen hogere eisen gelden (BENG-normen).',
    },
    {
      id: 'B12-3-e',
      toetstermCode: 'B.12.3',
      type: 'mc',
      prompt:
        'Een **woningscheidende wand of vloer** moet voldoen aan minimaal hoeveel minuten brandwerendheid?',
      options: [
        '15 min',
        '30 min',
        '60 min',
        '120 min',
      ],
      correctIndex: 2,
      explanation:
        'WBDBO (Weerstand tegen Brand-Doorslag en Brand-Overslag) tussen verschillende woningen of brandcompartimenten is volgens Bbl normaliter **60 minuten**. Voor specifieke gebouwen (hoogbouw, zorg, utiliteit) gelden zwaardere eisen (90 of 120 min).',
    },
    {
      id: 'B12-3-f',
      toetstermCode: 'B.12.3',
      type: 'mc',
      prompt:
        'Wat is het wezenlijke principe achter een **massa-veer-massa-constructie** voor lichte woningscheidende wanden?',
      options: [
        'Twee zware lagen met daartussen een luchtspouw met isolatie — de twee bladen werken als afzonderlijke massa’s, de spouw als veer, samen veel betere luchtgeluidsisolatie dan één enkele blad',
        'Een lichte wand met een springveer ertussen',
        'Een betonwand met een geïsoleerde voegen',
        'Een wand met twee dunne lagen verf op gips',
      ],
      correctIndex: 0,
      explanation:
        'Massa-veer-massa: twee gescheiden bladen (massa1 + massa2) met daartussen een spouw met isolatie (veer). Trillingen worden bij elke overgang gedempt, geluid bereikt de tweede massa veel minder. Het is de basis van moderne lichte woningscheidende wanden (twee 100 mm bladen + 50–100 mm spouw met steenwol).',
    },

    // === B.12.4 — Kruipruimte eisen (4) ===
    {
      id: 'B12-4-a',
      toetstermCode: 'B.12.4',
      type: 'mc',
      prompt:
        'Wat is de **minimale hoogte** van een kruipruimte volgens praktijk en Bbl?',
      options: ['20 cm', '50 cm', '80 cm', '120 cm'],
      correctIndex: 1,
      explanation:
        'Minimaal 0,5 m (50 cm) voor onderhoud aan leidingen en inspectie van fundering en grondwaterstand. Lager wordt onbereikbaar; hoger is geen nadeel maar kost meer fundering/metselwerk.',
    },
    {
      id: 'B12-4-b',
      toetstermCode: 'B.12.4',
      type: 'mc',
      prompt:
        'Hoe wordt een kruipruimte standaard geventileerd?',
      options: [
        'Met een ventilator in elke hoek',
        'Door open spleten onder de begane-grondvloer',
        'Via kniekokers (kunststof, knievormig) in de buitenmuur, diagonaalsgewijs geplaatst voor doorstroming',
        'Pas in moderne nieuwbouw geventileerd, anders gesloten',
      ],
      correctIndex: 2,
      explanation:
        'Standaard: kniekokers in de buitenmuur boven het maaiveld. De knie-vorm voorkomt dat regen naar binnen waait. Diagonaalsgewijze plaatsing (niet recht tegenover elkaar) zorgt dat de luchtstroom door de hele kruipruimte loopt en geen "dode hoek" overlaat.',
    },
    {
      id: 'B12-4-c',
      toetstermCode: 'B.12.4',
      type: 'mc',
      prompt:
        'Mag je in de winter de ventilatie-roosters van een kruipruimte afsluiten om warmteverlies te beperken?',
      options: [
        'Ja, in de winter is dat juist gewenst',
        'Ja, mits de woning verder goed geïsoleerd is',
        'Nee — een afgesloten kruipruimte krijgt condensatie en schimmel; beter is de naden bij plinten dichten en de vloer goed isoleren',
        'Ja, maar alleen in januari en februari',
      ],
      correctIndex: 2,
      explanation:
        'Afsluiten in de winter is fout: vochtige lucht uit de bodem condenseert tegen de koudere onderkant van de vloer → schimmel, houtaantasting, geur. Voldoende ventilatie + goede vloerisolatie + luchtdichte vloerafwerking is de juiste combinatie.',
    },
    {
      id: 'B12-4-d',
      toetstermCode: 'B.12.4',
      type: 'mc',
      prompt:
        'Welke afmeting van de ventilatieopeningen voorkomt **knaagdieren in de kruipruimte**?',
      options: [
        'Niet breder dan 1 cm',
        'Minimaal 5 cm voor goede ventilatie',
        'Tussen 2 en 3 cm',
        'Afmeting maakt niet uit, alleen aantal telt',
      ],
      correctIndex: 0,
      explanation:
        'Openingen breder dan 1 cm geven ratten en muizen toegang. Goede kniekokers hebben fijn rooster met gaten kleiner dan 1 cm, of zijn geconstrueerd zodat de doorsnede dat ook bij wisselende standen is. Voldoende totale opening krijg je door meerdere kokers te plaatsen, niet door grotere openingen.',
    },
  ],

  terms: [
    {
      term: 'Kruipruimte',
      definition:
        'Ruimte tussen begane-grondvloer en grond, hoogte 0,5-0,8 m; vereist ventilatie en wordt bij voorkeur bodemafgesloten.',
    },
    {
      term: 'Begane-grond­vloer',
      definition:
        'Eerste vloer boven kruipruimte/fundering — meestal Ribcas, kanaalplaat of breedplaat, geïsoleerd Rc ≥ 3,7.',
    },
    {
      term: 'Verdiepingsvloer',
      definition:
        'Tussenvloer; kanaalplaat (woningbouw), breedplaat of houten balklaag met spaanplaat als plaat­vloer.',
    },
    {
      term: 'Zwevende dekvloer',
      definition:
        'Cement- of anhydriet­vloer op een laag isolatie/contactgeluid­demping; voorkomt geluidtransmissie naar onderbuur.',
    },
    {
      term: 'Anhydriet­vloer',
      definition:
        'Vloeibare gietvloer op calciumsulfaat­basis — vlak en snel, ongeschikt voor permanent natte ruimtes.',
    },
    {
      term: 'Vloerverwarming',
      definition:
        'Watergedragen warmtenet in dekvloer — werkt op lage temperatuur (35 °C), past goed bij warmtepomp.',
    },
    {
      term: 'Woningscheidende wand',
      definition:
        'Dragende wand tussen twee aparte woningen; vereist hoge geluid­wering (≥ 52 dB) en branddoorslag ≥ 60 minuten.',
    },
    {
      term: 'Gipsplaat (gipskarton)',
      definition:
        'Plaat van gipskern met kartonbekleding; standaard voor binnenwanden in metalstud-constructie.',
    },
    {
      term: 'Metalstud-wand',
      definition:
        'Niet-dragende wand met staal­profielen (stijlen, regels) beplaat met gipsplaten; flexibel, snel te bouwen.',
    },
    {
      term: 'Gipsvezelplaat',
      definition:
        'Plaat van gips versterkt met cellulose­vezels (Fermacell, Gyproc Rigidur) — sterker en vocht­bestendiger dan gewoon gipskarton.',
    },
    {
      term: 'Cementgebonden plaat',
      definition:
        'Plaat met cement en houtvezel (Aquapanel, Cemboard); waterbestendig — voor natte ruimtes.',
    },
    {
      term: 'Geluidsisolatie',
      definition:
        'Voorzieningen om luchtgeluid en contactgeluid te beperken: dubbele beplating, isolatievulling, ontkoppelde profielen.',
    },
    {
      term: 'Contactgeluid',
      definition:
        'Geluid dat ontstaat door directe trilling (lopen, stoel verschuiven); beperkt door zwevende dekvloer of zachte ondervloer.',
    },
    {
      term: 'Vloerbelasting',
      definition:
        'Maximale belasting per m²; woonkamers 1,75 kN/m², kantoren 2,5 kN/m², trapportalen 4,0 kN/m².',
    },
  ],

  games: [
    {
      id: 'B12-gapfill-1', type: 'gapfill',
      title: 'Vloeren en wanden',
      text:
        'De buitenste balk van een houten balklaag, evenwijdig aan de buitenmuur, heet de {{strijkbalk}}. ' +
        'Bij grote overspanningen wordt een {{onderslagbalk}} (moerbalk) haaks geplaatst — kleinere balken erop heten {{kinderbalken}}. ' +
        'Bij een trapgat worden de doorbroken balken opgevangen door een {{raveelbalk}}. ' +
        'Voor goede contactgeluid­isolatie tussen verdiepingen wordt een {{zwevende dekvloer}} toegepast.',
      distractors: ['poer', 'staartbalk', 'moerbint', 'dragend'],
    },
    {
      id: 'B12-sort-1', type: 'sort',
      title: 'Dragend of niet-dragend?',
      categories: ['Dragend', 'Niet-dragend'],
      items: [
        { label: 'Buitenmuur', category: 'Dragend' },
        { label: 'Woningscheidende muur (rijwoning)', category: 'Dragend' },
        { label: 'Doorlopende binnenmuur tussen verdiepingen', category: 'Dragend' },
        { label: 'Gipsblokken-tussenwand', category: 'Niet-dragend' },
        { label: 'Metal-stud-wand', category: 'Niet-dragend' },
      ],
    },
    {
      id: 'B12-matching-1', type: 'matching',
      title: 'Begrippen bij kruipruimte/vloer',
      pairs: [
        { left: 'Kruipruimte', right: 'Ruimte tussen begane­grondvloer en grond, ~50–80 cm' },
        { left: 'Kniekoker', right: 'Knievormige ventilatieopening in spouwmuur' },
        { left: 'Strijkbalk', right: 'Balk evenwijdig aan buitenmuur in balklaag' },
        { left: 'Raveelbalk', right: 'Haakse balk rond trapgat' },
        { left: 'Zwevende dekvloer', right: 'Cement-/anhydriet­vloer op isolatiedeken (contactgeluid)' },
        { left: 'WBDBO', right: 'Weerstand tegen brand-doorslag en -overslag, in minuten' },
      ],
    },
  ],
}
