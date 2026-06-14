import type { Topic } from '../types/content'

export const B_16_isolatie: Topic = {
  code: 'B.16',
  section: 'B',
  title: 'Isolatiematerialen',
  chapterRef: 'Lesboek hoofdstuk 26',
  blurb:
    'De acht examen-relevante isolatiematerialen: steenwol, glaswol, EPS, XPS, PUR, PIR, vlas en foamglas. Welk materiaal, welke λ-waarde, en welke toepassing — plus de fysische principes (stilstaande lucht, gesloten vs open cellen, dampdoorlatendheid).',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · Het principe van isoleren',
      toetstermCodes: ['B.16.1'],
      body: `
Alle goede isolatiematerialen werken volgens hetzelfde principe: **kleine, met stilstaande droge lucht gevulde cellen of holtes**. Stilstaande droge lucht heeft een **lambda-waarde (λ)** van slechts **0,024 W/m·K** — beter dan welk vast materiaal ook.

### λ, R en U
- **λ (lambda)** — warmtegeleiding van het materiaal, in **W/m·K**. **Laag = goed isolerend**
- **R** — warmteweerstand van een laag, in **m²·K/W**. R = dikte / λ. **Hoog = goed**
- **Rc** — totale warmteweerstand van een constructie (alle lagen samen + grenslagen). Bbl-eis nieuwbouw: buitenmuur Rc ≥ 4,7, dak Rc ≥ 6,3, vloer ≥ 3,7
- **U** — warmtedoorgangscoëfficiënt (omgekeerde van Rc), in **W/m²·K**. **Laag = energiezuinig**

### Twee fysische principes voor lage λ
1. **Vezelig materiaal met luchtruimten ertussen** — glaswol, steenwol, vlas, schapenwol, cellulose
2. **Schuim met luchtcellen** — EPS, XPS, PUR, PIR, foamglas, kurk

### Open vs gesloten cellen
- **Open cellen** — gassen en damp kunnen erdoor (samendrukbaar, dampdoorlatend). Voorbeelden: vezelige isolatie, EPS (deels), PUR-schuim niet-dicht
- **Gesloten cellen** — dampdicht én drukvast. Voorbeelden: XPS, PIR met dichte huid, foamglas — daarom geschikt voor **vochtige plekken**, **omgekeerd dak**, **belaste vloeren**

### Praktijkregel
**Vocht verdrijft de lucht uit de cellen en verlaagt de isolatiewaarde dramatisch**. Daarom:
- Bouwplaats: **droog opslaan**
- Spouw: beschermen tegen regen tijdens metselen
- Aan **warme zijde** van isolatie een **dampremmende folie** (PE) om vocht uit binnenlucht te keren
- Aan **buitenzijde** een **waterdichte, dampdoorlatende laag** zodat eventueel ingedrongen damp kan ontsnappen
      `.trim(),
    },

    {
      heading: '2 · Minerale isolatie: glaswol, steenwol, foamglas',
      toetstermCodes: ['B.16.1'],
      body: `
### Glaswol
- **Materiaal**: gesmolten **glas** (gerecycled glas + zand) tot **fijne vezels gesponnen**
- **Vorm**: dekens, platen, rollen — soms met **aluminiumkraftpapier** aan één zijde
- **Kleur**: geelachtig wit
- **λ ≈ 0,032–0,040 W/m·K** (vrij goed)
- **Brandgedrag**: **onbrandbaar** (klasse A1) — smelt pas boven 700 °C
- **Toepassing**: spouwmuren, dakdekens onder gordingen, plafonds, geluid-isolatie in metal-stud-wanden
- **Aandachtspunten**: vezelig — **draag handschoenen en stofmasker** bij verwerking (jeuk, ademlucht)

### Steenwol
- **Materiaal**: gesmolten **diabaas of basalt** (vulkanisch gesteente) — vezelig gesponnen of gepoederd
- **Kleur**: grauwgroen of bruinachtig
- **λ ≈ 0,033–0,040 W/m·K** (vergelijkbaar met glaswol)
- **Brandgedrag**: **onbrandbaar** (klasse A1), smelt pas boven 1000 °C — beter dan glaswol bij brand
- **Geluid**: **uitstekend geluid-isolerend** (door vezelmassa)
- **Toepassing**:
  - Spouwmuren (platen of dekens)
  - Plafonds en wanden (geluiddempend)
  - **Brandwerende bekleding** van stalen kolommen en balken
  - **Akoestiek** in werkruimten (decoratieve plafondtegels — Rockfon, Heraklith)
- **Vergelijking met glaswol**: zwaarder, beter geluid- en brandbestendig, iets duurder

### Foamglas (schuimglas, cellulair glas)
- **Materiaal**: glasafval + kwartszand + koolstof, op ~1000 °C tot **gesloten celstructuur** geschuimd
- **Kleur**: zwart-glanzend, blokvormig
- **λ ≈ 0,045–0,055 W/m·K** (matig)
- **Eigenschappen**:
  - **Gesloten cellen** → volledig **dampdicht en waterdicht**
  - **Zeer drukvast** — kan onder fundering of belaste vloer
  - **Onbrandbaar**
  - **Hoge prijs**
  - **Niet vezelig** — geen jeuk
- **Toepassing**:
  - **Koudebrugonderbreking onder funderingen**
  - **Onder belaste vloeren** (warme keuken, koelhuis)
  - **Industriële toepassingen** waar vocht en chemicaliën spelen
  - Renovatie van plafond-isolatie onder kruipruimtes (waar vocht een issue is)

### Andere minerale isolatie (kennen, geen primair examen)
- **Perliet** — geëxpandeerd mineraalgesteente, korrelig (λ = 0,050) — losse vulling voor spouw-na-isolatie
- **Vermiculiet** — geëxpandeerde glimmer (λ = 0,058) — spuitpleister, brandwerende toepassingen
- **Klinkerisoliet** — geëxpandeerde kleibolletjes — vervanger van grind in lichtbeton
- **Calsitherm** — calciumsilicaat + zand, drukvast (λ = 0,079) — voor industriële belasting
      `.trim(),
      images: [
        {
          src: '/figs/fotos/steenwol-isolatie.jpg',
          caption:
            'Steenwol-isolatieplaten. De vezelstructuur sluit stilstaande lucht in — dat geeft de lage λ-waarde. Steenwol is niet-brandbaar en wordt veel gebruikt in spouw, dak en als brandwerende laag.',
          source: 'Foto: Marek Ślusarczyk (Tupungato) · Wikimedia Commons (CC BY 3.0)',
          width: 'lg',
        },
      ],
    },

    {
      heading: '3 · Kunststofschuimen: EPS, XPS, PUR, PIR',
      toetstermCodes: ['B.16.1'],
      body: `
Kunststofschuimen hebben **lage λ-waarden** (zeer goed isolerend), **rotten niet**, zijn **vochtbestendig** maar zijn **brandbaar** met rookontwikkeling. De vier hoofdvarianten:

### EPS (Expanded Polystyreen) — 'piepschuim'
- **Materiaal**: polystyreen-korrels die door stoom worden geëxpandeerd in een vorm (popcorn-systeem)
- **Vorm**: platen (witte 'piepschuim', merknaam Tempex), korrels, vormstukken
- **λ ≈ 0,032–0,038 W/m·K**
- **Cellen**: deels open structuur, niet volledig drukvast onder zware belasting
- **Brandgedrag**: brandbaar, smelt en druipt (vlamvertragend additief vereist voor sommige toepassingen)
- **Niet bestand boven 75 °C**
- **Toepassing**:
  - **PS-combinatievloeren** (broodjesvloer — zie B.6)
  - **Verloren bekisting** voor funderingsbalken in de grond
  - **Geluid-/contactdempingsisolatie** onder zwevende dekvloer
  - Voorkennisstuk in gevelisolatie (bij hechtmortel + sierpleister)
  - Spouw-na-isolatie als gebonden korrels
- **Bijzonderheid**: vers EPS kent **geboortekrimp** in de eerste maand

### XPS (Extruded Polystyreen)
- **Materiaal**: gesmolten polystyreen door extrusie tot platen
- **Vorm**: platen met **gesloten oppervlak en cellen** — vaak in pastelkleuren per fabrikant (groen Floormate, roze Roofmate)
- **λ ≈ 0,032–0,036 W/m·K**
- **Cellen**: **volledig gesloten** → **drukvast, dampdicht, vochtbestendig**
- **Brandgedrag**: brandbaar, smelt; vlamvertragend additief vereist
- **Toepassing**:
  - **Omgekeerd dak** — isolatie bovenop bestaande dakbedekking, met grind of tegels als ballast
  - **Onder de fundering** of in funderingsstroken
  - **Kruipruimte-isolatie** waar vocht een rol kan spelen
  - **Kelderwanden buitenkant** (perimeter-isolatie tegen grondvocht)

### Verschil EPS vs XPS
| Kenmerk | EPS | XPS |
|---|---|---|
| Productie | expansie met stoom | extrusie |
| Cellen | deels open | volledig gesloten |
| Vochtbestendig | matig | uitstekend |
| Drukvast | matig | hoog |
| Kleur | wit | pastel (groen, roze, blauw) |
| Toepassing | combinatievloer, bekisting, voordelig | omgekeerd dak, fundering, vochtige plek |

### PUR (Polyurethaan-schuim)
- **Materiaal**: **twee-componenten** kunsthars (polyol + isocyanaat); reageert chemisch tot hardschuim
- **Vorm**: platen (gesloten, vaak met aluminium-folie of bitumen-cachering), spuitschuim in spuitbus, in-situ gespoten
- **Kleur**: lichtblauw, groen of crème
- **λ ≈ 0,025–0,030 W/m·K** (zeer goed)
- **Cellen**: dichte cellenstructuur in plaat-vorm, expandeert tot 50× volume bij spuiten
- **Brandgedrag**: brandbaar; bij brand veel zwarte rook met cyanide
- **Toepassing**:
  - **Sandwichpanelen** (PUR-platen tussen twee dunne plaatlagen)
  - **Dakisolatie** (hellend en plat dak — gecacheerd op multiplex)
  - **Spuitbus** voor **kierdichting** van naden en aansluitingen (compriband-vervanger)
  - **Spouw-na-isolatie** via boorgaten — vloeibare 2-K-massa die zelfs zelf-uitzettend de spouw vult en aan beide bladen hecht
  - **Compriband** (gebitumineerd PUR voor naden)

### PIR (Polyisocyanuraat-schuim)
- **Materiaal**: variant van PUR met **verhoogd isocyanuraat-gehalte** — hittebestendiger
- **Vorm**: platen, vaak met aluminiumfolie of glasvliesbitumen aan beide zijden
- **λ ≈ 0,022–0,025 W/m·K** (de **beste isolatiewaarde** van de gangbare materialen)
- **Cellen**: gesloten, dichte structuur
- **Brandgedrag**: **moeilijker brandbaar dan PUR** — vandaar steeds vaker gebruikt
- **Hittebestendig tot ~150 °C**
- **Toepassing**:
  - **Dakisolatie** (warmdak — gecacheerde platen op steenachtig dak of houten dakbeschot)
  - **Hellend dak** — verhoogde tengels, isolatie ertussen
  - **Sandwichpanelen** in industriële bouw
  - **Spouwmuur-isolatie** waar hoge Rc bij beperkte dikte nodig is

### Andere kunststofschuimen (kennen, geen primair examen)
- **PF-schuim** (fenolformaldehyde) — nauwelijks brandbaar maar neemt water op
- **UF-schuim** (ureumformaldehyde) — **verboden** voor in-situ spouwisolatie vanwege formaldehyde-emissie
- **Resolschuim** (resorcinol-formaldehyde) — λ = 0,022, zeer goede isolatie, gesloten cellen
      `.trim(),
    },

    {
      heading: '4 · Plantaardige isolatie: vlas en alternatieven',
      toetstermCodes: ['B.16.1'],
      body: `
**Plantaardige isolatiematerialen** zijn populair in **duurzame bouw (DUBO)** — hernieuwbaar, biologisch afbreekbaar, vaak CO₂-opslaand.

### Vlas
- **Materiaal**: **gehakkelde vlasvezels** (rest na vlasverwerking voor textiel) gemengd met een **kunsthars-bindmiddel** of natuurlijk bindmiddel (zetmeel)
- **Vorm**: platen of dekens
- **Kleur**: lichtgrijs-bruin
- **λ ≈ 0,038–0,042 W/m·K** (vergelijkbaar met glaswol)
- **Eigenschappen**:
  - **Hygroscopisch** — neemt en geeft vocht af, regulerend voor binnenklimaat
  - **Vochtgevoelig** — niet voor toepassingen waar vocht structureel speelt
  - **Brandbaar** maar smolt niet (verkoolt)
  - **Recyclebaar / composteerbaar**
- **Toepassing**:
  - **Houtskeletbouw** (HSB) — tussen stijl- en regelwerk
  - **Dakisolatie** binnen verwarmde ruimte
  - **Vloer-isolatie** binnen verwarmde ruimte

### Andere plantaardige isolatie (kennen, geen primair examen)
- **Geëxpandeerde kurk** — schors van kurkeik, plaat of korrels, donkerbruin. λ = 0,045
- **Houtwolcementplaat (Heraklith)** — houtkrullen gebonden met cement of magnesiet — ook brand- en geluid-isolerend
- **Cellulose-isolatie** (papier-vlokken — Isofloc, Climacell) — los inblaasbaar
- **Schapenwol** — duurder maar zeer vocht- en brand-regulerend
- **Kokosvezel, riet, stroplaten**

### Vergelijkende tabel (de 8 examen-relevante materialen)

| Materiaal | λ (W/m·K) | Type cel | Brand | Voornaamste toepassing |
|---|---|---|---|---|
| **Glaswol** | 0,032–0,040 | vezelig | onbrandbaar (A1) | spouw, dak (deken), plafond |
| **Steenwol** | 0,033–0,040 | vezelig | onbrandbaar (A1), beter dan glas | spouw, brandwerend, geluid |
| **Foamglas** | 0,045–0,055 | gesloten cellen | onbrandbaar | onder fundering, vochtige plek |
| **EPS** | 0,032–0,038 | deels open | brandbaar (smelt) | combinatievloer, bekisting |
| **XPS** | 0,032–0,036 | gesloten cellen | brandbaar (smelt) | omgekeerd dak, fundering |
| **PUR** | 0,025–0,030 | dicht schuim | brandbaar (rook) | sandwich, spuit-kierdichting, dak |
| **PIR** | 0,022–0,025 | dicht schuim | moeilijker brandbaar | dak, sandwich, hoge Rc bij dunne laag |
| **Vlas** | 0,038–0,042 | vezelig | brandbaar (verkoolt) | HSB, duurzame nieuwbouw |

### Geheugensteun
- **PIR < PUR < EPS ≈ XPS < glaswol ≈ steenwol < vlas < foamglas** (λ-waarde, oplopend = slechter)
- **PIR is de huidige standaard** voor energiezuinige nieuwbouw — dunste laag voor hoogste Rc
- **Steenwol** is de standaard waar **brand of geluid** belangrijk is
- **XPS** is de standaard waar **vocht** een rol speelt
- **Foamglas** is de standaard waar **én vocht én druk** spelen (onder fundering)
      `.trim(),
    },
  ],

  toetstermen: [
    {
      code: 'B.16.1',
      text: 'Benoemt en herkent de isolatiematerialen steenwol, glaswol, geëxpandeerde polystyreen (EPS), geëxtrudeerde polystyreen (XPS), polyurethaan (PUR), polyisocyanuraat (PIR), vlas en foamglas.',
      niveau: 'BT1',
      bloom: 'Begrip',
    },
  ],

  questions: [
    {
      id: 'B16-1-a',
      toetstermCode: 'B.16.1',
      type: 'mc',
      prompt: 'Wat is het hoofdverschil tussen **EPS** en **XPS**?',
      options: [
        'EPS is wit, XPS is altijd zwart',
        'EPS wordt geëxpandeerd met stoom in een vorm (deels open cellen); XPS wordt geëxtrudeerd tot platen met volledig gesloten cellen — XPS is daardoor drukvaster en vochtbestendiger',
        'EPS is alleen voor binnen, XPS alleen voor buiten',
        'EPS bevat geen polystyreen, XPS wel',
      ],
      correctIndex: 1,
      explanation:
        'EPS = expansie van polystyreen-korrels (stoom, popcorn-effect): luchtige witte platen, deels open cellen, niet bijzonder drukvast. XPS = extrusie van gesmolten polystyreen tot dichte platen met gesloten cellen — drukvaster, dampdicht. Daarom XPS voor omgekeerd dak en perimeterisolatie, EPS voor PS-combinatievloer en verloren bekisting.',
    },
    {
      id: 'B16-1-b',
      toetstermCode: 'B.16.1',
      type: 'mc',
      prompt:
        'Welk isolatiemateriaal is **de standaard voor brandwerende bekleding van stalen kolommen**?',
      options: ['EPS', 'Steenwol — onbrandbaar (smelt pas boven 1000 °C) en hoge dichtheid', 'PUR', 'Glaswol'],
      correctIndex: 1,
      explanation:
        'Steenwol is onbrandbaar (klasse A1) en smelt pas boven 1000 °C — daarmee superieur aan glaswol (smelt boven 700 °C) en alle kunststofschuimen. Standaard voor brandwerende bekleding van stalen kolommen, doorvoeren, technische ruimtes en woningscheidende muren.',
    },
    {
      id: 'B16-1-c',
      toetstermCode: 'B.16.1',
      type: 'mc',
      prompt:
        '**PIR** heeft een lambda-waarde van ongeveer:',
      options: ['0,032 W/m·K', '0,045 W/m·K', '0,022 W/m·K — de beste isolatie van de gangbare materialen', '0,058 W/m·K'],
      correctIndex: 2,
      explanation:
        'PIR (polyisocyanuraat) heeft λ ≈ 0,022 W/m·K — de laagste van de gangbare bouwmaterialen, beter dan PUR (~0,028), XPS/EPS (~0,034) en glaswol/steenwol (~0,036). Daarom dé keuze voor energiezuinige nieuwbouw waar bij beperkte dikte een hoge Rc gehaald moet worden.',
    },
    {
      id: 'B16-1-d',
      toetstermCode: 'B.16.1',
      type: 'mc',
      prompt:
        'Welk isolatiemateriaal is geschikt **onder een fundering** waar zowel druk als vocht een rol spelen?',
      options: [
        'Glaswol — flexibel en goedkoop',
        'EPS — lichtgewicht',
        'Foamglas (schuimglas / cellulair glas) — gesloten cellen, drukvast, dampdicht en waterdicht',
        'Vlas — duurzaam en hernieuwbaar',
      ],
      correctIndex: 2,
      explanation:
        'Foamglas is een gesloten-cellen-structuur in puur glas: volledig dampdicht, waterdicht en drukvast, onbrandbaar. Standaard onder funderingen voor koudebrug-onderbreking, en onder belaste vloeren met vocht- of chemisch milieu (koelhuizen, fabrieken). Duur maar onverwoestbaar.',
    },
    {
      id: 'B16-1-e',
      toetstermCode: 'B.16.1',
      type: 'mc',
      prompt: 'Wat is **PUR-spuitschuim** in een spuitbus typisch voor?',
      options: [
        'Vulling van leidingen',
        'Kierdichting van naden en aansluitingen — expandeert na het spuiten en hecht aan beide oppervlakken',
        'Spouw-na-isolatie',
        'Geluid-isolatie',
      ],
      correctIndex: 1,
      explanation:
        'PUR-spuitschuim in spuitbus expandeert na contact met vocht (50× volume) en hardt uit tot een dichte cellenstructuur. Standaard voor het dichten van kieren, naden rond kozijnen en aansluitingen — werkt als kierafdichting (niet voor structureel werk). In-situ professioneel gespoten PUR wordt wel voor spouw-na-isolatie en dakisolatie gebruikt — met 2-K-systemen.',
    },
    {
      id: 'B16-1-f',
      toetstermCode: 'B.16.1',
      type: 'mc',
      prompt:
        'Welk isolatiemateriaal is **niet meer toegestaan** voor in-situ spouwisolatie in NL?',
      options: [
        'PUR — wegens brandgevoeligheid',
        'UF (ureumformaldehyde) — wegens afgifte van formaldehyde (gezondheidsrisico voor luchtwegen)',
        'EPS-korrels',
        'Steenwol-vlokken',
      ],
      correctIndex: 1,
      explanation:
        'UF-schuim werd in de jaren 70 veel toegepast als spouw-na-isolatie, maar gaf "spaanplaatgas" (formaldehyde) af — slecht voor de luchtwegen. Sinds eind 20e eeuw verboden voor in-situ spouwisolatie in woningen in Nederland. PUR, EPS-korrels en steen-/glaswolvlokken zijn allemaal nog wel toegestaan.',
    },
    {
      id: 'B16-1-g',
      toetstermCode: 'B.16.1',
      type: 'mc',
      prompt:
        'Een **dampremmende folie** wordt geplaatst:',
      options: [
        'Aan de buitenkant van de isolatie, tussen isolatie en gevelsteen',
        'Aan de warme zijde van de isolatie — keert vocht uit binnenlucht zodat het niet in de constructie condenseert',
        'In het midden van de isolatielaag',
        'Aan de buitenkant van het glas',
      ],
      correctIndex: 1,
      explanation:
        'De dampremmende folie (meestal PE, koudgelaste naden) hoort aan de **warme zijde** van de isolatie — meestal binnenkant van de woning. Hij voorkomt dat warme, vochtige binnenlucht door de constructie naar buiten gaat en daar condenseert tegen koude lagen. Aan de buitenzijde komt juist een **waterdichte maar dampdoorlatende** laag.',
    },
    {
      id: 'B16-1-h',
      toetstermCode: 'B.16.1',
      type: 'mc',
      prompt:
        'Wat is **vlas** als isolatiemateriaal?',
      options: [
        'Een tropisch graan, vergelijkbaar met stro',
        'Vezels uit de vlasplant (rest van textielproductie) gemengd met een bindmiddel — vergelijkbare λ als glaswol, hygroscopisch (vochtregulerend), hernieuwbaar',
        'Een synthetische kunststofvezel',
        'Een mineraalproduct uit geëxpandeerd kleigesteente',
      ],
      correctIndex: 1,
      explanation:
        'Vlas-isolatie maakt gebruik van de gehakkelde vlasvezels die overblijven na textielproductie. Mengsel met kunsthars of natuurlijk bindmiddel tot platen of dekens. Hygroscopisch (regulerend voor binnenklimaat), recyclebaar, brandbaar maar verkoolt. λ ≈ 0,040 W/m·K — vergelijkbaar met glaswol. Populair in HSB en duurzame bouw.',
    },
    {
      id: 'B16-1-i',
      toetstermCode: 'B.16.1',
      type: 'mc',
      prompt:
        'Glaswol en steenwol hebben **vergelijkbare λ-waarden** (~0,036). Wanneer is steenwol beter dan glaswol?',
      options: [
        'Bij toepassing in een woonhuis',
        'Wanneer brandwerendheid of geluid-isolatie kritisch is — steenwol smelt pas boven 1000 °C en heeft meer massa per m³ → beter voor brand- en geluiddemping',
        'Wanneer kosten het belangrijkst zijn',
        'Bij toepassing in een spouwmuur — glaswol kan daar niet',
      ],
      correctIndex: 1,
      explanation:
        'Steenwol is zwaarder dan glaswol (~hogere dichtheid) — beter geluid-isolerend door massa. Steenwol smelt pas boven 1000 °C tegen glaswol ~700 °C — daarom standaard voor brandwerende toepassingen (kolombekleding, woningscheidende wanden, doorvoeren). Voor gewone dak-/wand-isolatie zonder bijzondere brand/geluid-eisen is glaswol vaak voldoende en goedkoper.',
    },
    {
      id: 'B16-1-j',
      toetstermCode: 'B.16.1',
      type: 'mc',
      prompt:
        'Een aannemer wil **omgekeerd dak isolatie** toepassen (boven op een bestaande bitumen-dakbedekking, met ballasttegels erop). Welk materiaal is het meest geschikt?',
      options: [
        'EPS — goedkoop en lichtgewicht',
        'XPS — gesloten cellen, drukvast, vochtbestendig — perfect voor omgekeerd dak',
        'Glaswol — vezelig en flexibel',
        'Vlas — duurzaam',
      ],
      correctIndex: 1,
      explanation:
        'XPS heeft gesloten cellen die geen water opnemen, ook al ligt het materiaal letterlijk in de regen (boven de waterkering!). Daarnaast is XPS drukvast genoeg voor de ballasttegels of beloopbaarheid bovenop. EPS zou water opzuigen en zijn isolatiewaarde verliezen — daarom standaard XPS voor omgekeerd dak.',
    },
    {
      id: 'B16-1-k',
      toetstermCode: 'B.16.1',
      type: 'mc',
      prompt:
        'Bij verwerking van **glaswol** is welke maatregel verplicht?',
      options: [
        'Brandwerende kleding',
        'Handschoenen en stofmasker — vezels zijn jeukerig en de fijne deeltjes irriteren de luchtwegen',
        'Spatbril omdat het materiaal vloeibaar is bij verwerking',
        'Geen enkele bijzondere maatregel',
      ],
      correctIndex: 1,
      explanation:
        'Glaswol- en steenwolvezels zijn fijn en stuiven; bij verwerking ontstaat jeuk op de huid en irritatie van luchtwegen. Standaard PBM: handschoenen, stofmasker (FFP2 of P3) en bedekkende kleding. Goed ventileren tijdens verwerking. Bij grote oppervlakken vaak een wegwerp-overall.',
    },
    {
      id: 'B16-1-l',
      toetstermCode: 'B.16.1',
      type: 'mc',
      prompt:
        'Welk isolatiemateriaal heeft als **kenmerkende kleur** lichtblauw, groen of crème (PIR-platen vaak met aluminiumfolie)?',
      options: ['Glaswol', 'Steenwol', 'PUR-/PIR-platen', 'XPS'],
      correctIndex: 2,
      explanation:
        'PUR- en PIR-hardschuim-platen zijn vaak lichtblauw, groen of crèmekleurig, met aan één of beide zijden een **aluminiumfolie**, papier of bitumen-cachering. Dat onderscheidt ze van de witte EPS en de pastelkleurige XPS (vaak groen of roze).',
    },
  ],

  terms: [
    {
      term: 'Rc-waarde',
      definition:
        'Warmteweerstand van een complete constructie (m²·K/W); hoger = beter isolerend. Bbl: dak ≥ 6,3, gevel ≥ 4,7, vloer ≥ 3,7.',
    },
    {
      term: 'Lambda (λ)',
      definition:
        'Warmtegeleiding van een materiaal (W/m·K); lager = beter isolerend. PIR ≈ 0,022, glaswol ≈ 0,035, EPS ≈ 0,036.',
    },
    {
      term: 'U-waarde',
      definition:
        'Warmtedoorgangs­coëfficiënt (W/m²·K) — lager = beter isolerend; vooral voor glas en kozijnen (BENG-eisen).',
    },
    {
      term: 'Glaswol',
      definition:
        'Minerale wol van gesmolten glasvezels; flexibele dekens of platen — goed isolerend (λ ≈ 0,035), brand­veilig.',
    },
    {
      term: 'Steenwol',
      definition:
        'Minerale wol van basalt­vezels — net iets dichter dan glaswol, beter brand­werend (smelt > 1000 °C).',
    },
    {
      term: 'EPS',
      definition:
        'Expanded polystyreen (piepschuim) — lichte plaat, goed isolerend (λ ≈ 0,036), vooral voor vloer en gevel.',
    },
    {
      term: 'PIR',
      definition:
        'Polyisocyanuraat­schuim met aluminium­folie — hoogste isolatie­waarde per cm (λ ≈ 0,022), wel duurder.',
    },
    {
      term: 'Cellulose',
      definition:
        'Geblazen of geperste recycle­papier­vezel — biologische isolatie voor zoldervloeren en HSB-wanden.',
    },
    {
      term: 'Houtvezel­plaat',
      definition:
        'Natuurlijke isolatie van houtvezels; goede vochtregulering, biologisch — wat zwaarder dan minerale wol.',
    },
    {
      term: 'Vlas / hennep',
      definition:
        'Plantaardige isolatie­matten — duurzaam, biologisch afbreekbaar, vergelijkbaar met glaswol qua λ.',
    },
    {
      term: 'Dampopen',
      definition:
        'Eigenschap van een materiaal om waterdamp door te laten zonder vocht­ophoping (sd-waarde laag).',
    },
    {
      term: 'Dampscherm',
      definition:
        'Folie of plaat aan de warme zijde van isolatie die diffusie van vocht naar de koude zijde tegenhoudt.',
    },
    {
      term: 'Koudebrug',
      definition:
        'Lokale onderbreking van de isolatie waardoor de warmtestroom plaatselijk hoog is — risico op condens en schimmel.',
    },
    {
      term: 'Lucht­dichtheid (qv;10)',
      definition:
        'Lekstroom door de gebouwschil bij 10 Pa; lager = beter (BENG: ≤ 0,4 dm³/s/m²).',
    },
    {
      term: 'Spouw­isolatie',
      definition:
        'Isolatie­materiaal in de spouw tussen binnen- en buitenspouwblad — kan ook achteraf ingeblazen worden.',
    },
  ],

  games: [
    {
      id: 'B16-gapfill-1', type: 'gapfill',
      title: 'Isolatie­begrippen',
      text:
        'De warmteweerstand van een materiaal heet de {{R}}-waarde — hoger = beter isolerend. ' +
        'De warmtegeleiding zelf heet {{lambda}} (λ) — lager = beter. ' +
        'Isolatie werkt door {{stilstaande lucht}} in kleine cellen of vezels te vangen. ' +
        '{{PIR}} heeft de beste λ-waarde (~0,022) en is moeilijker brandbaar dan PUR.',
      distractors: ['U', 'rho', 'water', 'EPS'],
    },
    {
      id: 'B16-sort-1', type: 'sort',
      title: 'Sorteer isolatie­materialen',
      categories: ['Minerale (vezel/glas)', 'Kunststof­schuim', 'Plantaardig'],
      items: [
        { label: 'Glaswol', category: 'Minerale (vezel/glas)' },
        { label: 'Steenwol', category: 'Minerale (vezel/glas)' },
        { label: 'Foamglas / cellulair glas', category: 'Minerale (vezel/glas)' },
        { label: 'EPS', category: 'Kunststof­schuim' },
        { label: 'XPS', category: 'Kunststof­schuim' },
        { label: 'PUR', category: 'Kunststof­schuim' },
        { label: 'PIR', category: 'Kunststof­schuim' },
        { label: 'Vlas', category: 'Plantaardig' },
      ],
    },
    {
      id: 'B16-matching-1', type: 'matching',
      title: 'Welk materiaal voor welke plek?',
      pairs: [
        { left: 'Steenwol', right: 'Brandwerend + geluid — woningscheidende wand' },
        { left: 'PIR', right: 'Hoogste isolatie per cm — modern dak' },
        { left: 'XPS', right: 'Vochtbestendig — onder vloer, omgekeerd dak' },
        { left: 'EPS', right: 'PS-combivloer, verloren bekisting' },
        { left: 'Foamglas', right: 'Drukvast + dampdicht — onder fundering' },
        { left: 'Vlas', right: 'Hernieuwbaar / bio-based — HSB' },
      ],
    },
  ],
}
