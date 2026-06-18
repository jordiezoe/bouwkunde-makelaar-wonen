import type { Topic } from '../types/content'

export const B_15_kunststoffen: Topic = {
  code: 'B.15',
  section: 'B',
  title: 'Kunststoffen',
  chapterRef: 'Lesboek hoofdstuk 10',
  blurb:
    'Algemene eigenschappen van kunststoffen, thermoplasten vs thermoharders, de drie bouwrelevante thermoplasten PE, PVC en PP (toepassingen en herkenning), en de twee doorzichtige plaatmaterialen perspex (PMMA) en polycarbonaat. Voor isolatiematerialen (PUR, PIR, EPS, XPS, etc.) — zie B.16.',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · Wat zijn kunststoffen?',
      toetstermCodes: ['B.15.1'],
      body: `
**Kunststoffen** zijn **synthetische macromoleculen**, voornamelijk samengesteld uit koolwaterstoffen. Grondstof: vrijwel altijd **aardolie**, eventueel ook aardgas of plantaardige varianten (bio-kunststoffen).

### Voor- en nadelen van kunststoffen in de bouw
**Voordelen**:
- Geringe massa (lichtgewicht)
- Makkelijk be- en verwerkbaar (extruderen, persen, lijmen)
- Weersbestendig
- Vormvrij — elke kleur, profiel of geometrie mogelijk
- Lage productiekosten
- Weinig onderhoud
- Kunststofschuim heeft hoge **isolatiewaarde**
- Eigenschappen aanpasbaar door additieven

**Nadelen**:
- Niet bestand tegen **hoge temperaturen** — vervormen of smelten
- **Geringe stijfheid** vergeleken met staal of beton
- **Brandbaar** — bij brand vaak rook en giftige gassen (chloorgas bij PVC, sinaasappelgeur bij PMMA)
- **Hoge lineaire uitzetting** en **kruip** — beperkt grote afmetingen
- **Milieubelastend** (aardolie als grondstof, lange afbraaktijd)
- **Statisch oplaadbaar**

### Twee hoofdgroepen kunststoffen

**Thermoplasten** (~80 % van productie)
- **Lange ketens** zonder onderlinge bindingen
- Verweken bij verwarmen → **smeltbaar en herverwerkbaar**
- Oplosbaar in oplosmiddelen
- Hebben **'geheugen'**: krimpen na herverwarmen terug naar oorspronkelijke vorm (krimpfolie-principe)
- Voorbeelden in de bouw: **PE, PVC, PP**, PMMA (perspex), PC (polycarbonaat), polyamide

**Thermohardende kunststoffen (thermoharders)**
- **Ruimtelijke netwerken** van moleculen
- **Verharden tijdens of na vormen** — niet meer te smelten of vervormen
- Ontleden (chemisch kapot) bij te hoge temperatuur
- Vaak **hard en broos** — versterking met glasvezels gangbaar
- Voorbeelden: bakeliet (PF), epoxyhars (EP), polyurethaan-hardschuim (PUR), polyester
      `.trim(),
    },

    {
      heading: '2 · Polyetheen (PE)',
      toetstermCodes: ['B.15.1'],
      body: `
**Polyetheen (PE)** is de **meest geproduceerde kunststof ter wereld**. Wit-melkachtig tot transparant, soms zwart door **roet** als UV-stabilisator. Drie hoofdtypen:

### LDPE (Low Density Polyethylene)
- **Laag dichtheid** — zacht, flexibel
- Toepassing: plastic zakken, krimpfolie, isolatie

### LLDPE (Linear Low Density)
- Sterke variant van LDPE
- **Standaard DPC-folie** in spouwmuren (vervangt lood als vochtkering)
- Folie voor onder vloeren tegen opkomend grondvocht

### HDPE (High Density)
- **Hoge dichtheid** — harder, steviger dan LDPE
- Toepassing in de bouw:
  - **Afvoer-, gas- en rioolbuizen** (tot 95 °C)
  - **Vloerverwarmingsbuizen** (in opgerolde lengtes, voldoende elasticiteit)
  - Tanks, jerrycans, watertonnen

### Herkenning van PE
- **Vetachtig, glad oppervlak**
- **Wit-melkachtig** in onbehandelde vorm
- **Vlamtest** (alleen veilig met afzuiging!): ruikt bij verbranding naar **kaars** of paraffine
- Geen specifieke geur in koude toestand

### Voor de bouw
- DPC-folie LLDPE = standaard moderne vochtkering — lood en EPDM zijn alternatieven
- HDPE-rioleringsbuizen = standaard onder de vloer
- Vloerverwarming = HDPE-buizen in een PS-combinatievloer of in zwevende dekvloer
      `.trim(),
    },

    {
      heading: '3 · Polyvinylchloride (PVC)',
      toetstermCodes: ['B.15.1'],
      body: `
**PVC** is na PE de meest gebruikte kunststof in de bouw. Vier hoofdvarianten — elk met eigen toepassingen.

### Hard PVC (uPVC, niet-geplastificeerd)
- **Hardste variant** — stijf, sterk
- Toepassing: **gas-, water-, riool- en elektraleidingen**, kunststofkozijnen (zie B.11)
- **Verplicht keurmerk**: GASkeur (gas), KIWA-keur (water), KEMA-keur (elektra)
- Verbindingen met **smeltlassen** (warmgemaakt) of lijm

### Zacht PVC (geplastificeerd)
- Toegevoegde **weekmakers** maken het flexibel
- Toepassing: **folie**, regenkleding, **trapneuzen**, antislipprofielen, leuningprofielen, afdichtingsprofielen, kunstleer

### Slagvast PVC
- Versterkt met **rubberachtige additieven** — beter bestand tegen schokken
- Voor **kunststofkozijnen** (zie B.11), buispostbuizen, robuuste leidingen
- Vaak met **metaalprofiel binnenin** voor extra sterkte

### Nagechloreerd PVC (PVCC of CPVC)
- Extra chloor toegevoegd → **hogere temperatuurbestendigheid** (tot ~100 °C)
- Voor warmwater- en cv-leidingen

### Eigenschappen van PVC algemeen
- **Moeilijk brandbaar** en **zelfdovend**
- **Bij brand komt chloorgas vrij** — zoutzuur in bluswater (gezondheidsrisico)
- Goede **chemische bestendigheid**
- Niet bestand tegen UV zonder additieven (verbrokkelt)
- Recyclebaar maar in praktijk lastig vanwege weekmakers

### Herkenning van PVC
- Veel verschijningsvormen — onbehandeld grijs of wit, gekleurd verkrijgbaar in elke RAL-kleur
- Bij verbranding: scherpe **zoutzuurgeur** (chloorgas)
- Bij snijden of zagen: glad witachtig zaagsel
- Kunststofkozijnen vaak gekleurd of met foliedeklaag

### Voor de bouw
- **Afvoerleidingen** (riolering, onder vloeren): hard PVC of HDPE
- **Hemelwaterafvoer**: hard PVC
- **Kabelgoten en buizen**: hard PVC
- **Kozijnen**: slagvast PVC
- **Trapneuzen en antislipstrips**: zacht PVC
- **Folie voor luchtdichting**: PVC of PE
      `.trim(),
    },

    {
      heading: '4 · Polypropeen (PP)',
      toetstermCodes: ['B.15.1'],
      body: `
**Polypropeen (PP)** is **harder dan PE** maar minder stijf dan PVC. Milieuvriendelijker dan PVC (geen chloor) en goed **recyclebaar**.

### Eigenschappen
- Verkrijgbaar in elke kleur
- **Hogere smelttemperatuur** dan PE (~165 °C tegen ~115 °C bij HDPE)
- Goed bestand tegen chemicaliën
- Lichter dan water (drijft)
- **Niet zelfdovend** — brandt door
- Bij verbranding: ruikt naar **kaarsvet** (eindigend met onderscheidende sis-geluid)

### Toepassingen in de bouw
- **Sifons** onder wastafels en gootstenen
- **Dakgoten**
- **Dakdoorvoeren** en ontluchtingen
- **Tuinmeubilair** (recycle-product)
- Vloerbedekkings-basis
- Sportvelden (kunstgras-vezel)
- **Bekersifons** en zwanenhalzen (zie figuur in B.5 hoofdstuk)

### Onderscheid PE / PVC / PP

| Kenmerk | PE | PVC | PP |
|---|---|---|---|
| Hardheid | zacht-middel | hard | middel-hard |
| Smeltpunt | ~115 °C (HDPE) | ~80 °C (uPVC), tot 100 °C (CPVC) | ~165 °C |
| Brandgedrag | smelt, druipt | moeilijk brandbaar, zelfdovend, chloorgas | brandt door, kaarsgeur |
| Recycling | makkelijk | matig (weekmakers) | makkelijk |
| Standaardkleur | wit-melkachtig, transparant | grijs, wit (gekleurd verkrijgbaar) | wit-grijs (gekleurd verkrijgbaar) |
| Bouwtoepassing | DPC, vloerverwarming, riolering HDPE | kozijnen, leidingen, kabelgoten | sifons, goten, dakdoorvoeren |
      `.trim(),
    },

    {
      heading: '5 · Doorzichtige plaatmaterialen: perspex (PMMA) en polycarbonaat (PC)',
      toetstermCodes: ['B.15.2'],
      body: `
B.15.2 vraagt specifiek om herkenning van de twee **doorzichtige plaatmaterialen** in de bouw. Beide zijn **thermoplasten** maar met heel verschillende eigenschappen.

### Perspex / PMMA (polymethylmethacrylaat)
**Ook bekend als**: plexiglas (merknaam), acrylaat-glas, organisch glas

**Eigenschappen**:
- **Glashelder** (lichtdoorlaat ~92 %)
- **Vrij hard** maar **kwetsbaar voor kras**
- **Bros** — kan barsten of breken bij stoot
- Goed UV-bestendig
- Bewerking: zagen, frezen, lijmen (chloroform), polijsten
- Bij verbranding: **sinaasappelgeur** (typische herkenning op vlamtest!)

**Toepassingen in de bouw**:
- **Lichtkoepels** op platte daken
- **Lichtbakken** (reclame, signage)
- **Lichtdoorlatende dakplaten** (golfprofiel)
- Doorzichtige beschermplaten (museum, sportscherm)
- Schilderijbeschermers

### Polycarbonaat (PC)
**Eigenschappen**:
- **Krasvast en zeer slagvast** — veel sterker dan PMMA
- **Sterker dan glas** voor dezelfde dikte
- Doorzichtig, maar minder dan PMMA (vaak licht geel-tint, vergeelt verder met de tijd)
- Bewerking: zagen, frezen, koud te buigen (in dunne uitvoering)
- **Brandwerender** dan PMMA
- **UV-gevoeliger** — vergeelt na 10–20 j zonder UV-coating

**Toepassingen in de bouw**:
- **Serredaken** (slagvast, lichter dan glas, betere isolatie)
- **Lichtkoepels** waar slagvastheid kritisch is (hagel)
- **Gelaagd glas-substituut**
- **Buswachthuisjes** en vandalismebestendige beglazing
- Helmen (motor, bouw)
- **Politie-/oproerschilden**

### Onderscheid perspex vs polycarbonaat

| Kenmerk | Perspex (PMMA) | Polycarbonaat (PC) |
|---|---|---|
| Helderheid | hoog (~92 %) | iets minder (~88 %), vergeelt |
| Slagvastheid | bros, kan breken | zeer slagvast — onbreekbaar |
| Krasvastheid | gevoelig | beter krasvast |
| UV-bestendigheid | goed | matig (coating nodig) |
| Brandgedrag | brandt met sinaasappelgeur | brandwerender, zelfdovend |
| Prijs | lager | hoger |
| Typische toepassing | lichtkoepel, signage, vitrines | serredaken, slagvast glaswerk, beschermschermen |

### Andere transparante kunststoffen (bonus, geen toetsterm)
- **Polystyreen (PS)** glashelder voor cd-doosjes (broos)
- **Polyamide (PA, nylon)** voor sterke garens en koudebrugonderbrekers in aluminium kozijnen — niet voor doorzichtig
- **PETG** doorzichtige drankflessen — bij specifieke bouwtoepassingen als display-paneel
      `.trim(),
    },
  ],

  toetstermen: [
    {
      code: 'B.15.1',
      text: 'Herkent de bouwrelevante kunststoffen polyetheen (PE), polyvinylchloride (PVC) en polypropeen (PP), plus de isolatiematerialen-kunststoffen (zie B.16).',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'B.15.2',
      text: 'Herkent de in de bouw voorkomende doorzichtige plaatmaterialen polycarbonaat (PC) en perspex (PMMA).',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
  ],

  questions: [
    // === B.15.1 — PE, PVC, PP (8) ===
    {
      id: 'B15-1-a',
      toetstermCode: 'B.15.1',
      type: 'mc',
      prompt: 'Welke variant van polyetheen wordt veel gebruikt als **DPC-folie** (vochtkering in spouwmuren) ter vervanging van lood?',
      options: ['LDPE', 'LLDPE', 'HDPE', 'XPE'],
      correctIndex: 1,
      explanation:
        'LLDPE (Linear Low Density Polyethylene) is de sterke variant die als DPC-folie standaard wordt toegepast — vervangt lood als vochtkering in spouwmuren onder dorpels en boven lateien.',
    },
    {
      id: 'B15-1-b',
      toetstermCode: 'B.15.1',
      type: 'mc',
      prompt:
        'Voor moderne **rioleringsbuizen onder de vloer** wordt vaak welke kunststof toegepast?',
      options: [
        'LDPE — zacht en flexibel',
        'HDPE of hard PVC — bestand tegen druk en warmte',
        'PP — sifons en goten',
        'PMMA — doorzichtig en sterk',
      ],
      correctIndex: 1,
      explanation:
        'HDPE en hard PVC zijn de standaardmaterialen voor rioleringsbuizen onder de vloer. Beide zijn drukbestendig, chemicaliënbestendig en bestand tegen warm afvoerwater. Voor afvoersifons (waterzakje) wordt vaak PP gebruikt vanwege de hogere smelttemperatuur.',
    },
    {
      id: 'B15-1-c',
      toetstermCode: 'B.15.1',
      type: 'mc',
      prompt:
        'Het verschil tussen **hard PVC** en **slagvast PVC** is:',
      options: [
        'Hard PVC is goedkoper, slagvast PVC duurder — verder identiek',
        'Slagvast PVC heeft additieven tegen schokken',
        'Hard PVC is voor binnentoepassing, slagvast PVC voor buiten',
        'Slagvast PVC is een synoniem voor nagechloreerd PVC (CPVC)',
      ],
      correctIndex: 1,
      explanation:
        'Slagvast PVC bevat **rubberachtige additieven** (impact modifiers) die het bestand maken tegen schokken — daardoor geschikt voor toepassingen waar mechanische belasting kan voorkomen, zoals kunststofkozijnen. Hard (u)PVC is stijf en wordt voor leidingen, kabelgoten en HW-afvoer gebruikt.',
    },
    {
      id: 'B15-1-d',
      toetstermCode: 'B.15.1',
      type: 'mc',
      prompt:
        'Wat is een **belangrijk milieu/veiligheidsverschil** tussen PVC en PP?',
      options: [
        'PVC en PP zijn beide volledig biologisch afbreekbaar',
        'PVC geeft chloorgas; PP brandt met kaarsgeur, geen chloor',
        'PP is brandbaar, PVC niet',
        'PP wordt nooit gerecycled, PVC altijd',
      ],
      correctIndex: 1,
      explanation:
        'PVC bevat chloor; bij brand komt chloorgas vrij (zoutzuur in bluswater) — gezondheidsrisico. PP bevat geen chloor en is milieuvriendelijker; brandt door (niet zelfdovend) met kaarsgeur. PVC is wel **zelfdovend** — minder snel ontvlambaar maar geeft als het brandt giftige rook.',
    },
    {
      id: 'B15-1-e',
      toetstermCode: 'B.15.1',
      type: 'mc',
      prompt:
        'Welke kunststof wordt typisch toegepast voor **sifons en zwanenhalzen** onder een wastafel?',
      options: [
        'Hard PVC',
        'LDPE',
        'Polypropeen (PP) — hittebestendig, niet broos',
        'PMMA (perspex)',
      ],
      correctIndex: 2,
      explanation:
        'PP heeft een hoger smeltpunt (~165 °C) dan PE of PVC, is niet broos, goed bestand tegen schoonmaakmiddelen en heet water. Daarom dé standaard voor sifons, zwanenhalzen, dakgoten en kleine sanitaire toepassingen.',
    },
    {
      id: 'B15-1-f',
      toetstermCode: 'B.15.1',
      type: 'mc',
      prompt:
        'Wat is het verschil tussen **thermoplasten** en **thermohardende kunststoffen**?',
      options: [
        'Thermoplasten zijn voor binnen, thermoharders voor buiten',
        'Thermoplasten verweken/hersmelten; thermoharders niet',
        'Thermoplasten zijn brandbaar, thermoharders brandwerend',
        'Het zijn synoniemen',
      ],
      correctIndex: 1,
      explanation:
        'Thermoplasten = lange ketens zonder onderlinge bindingen — smeltbaar, herverwerkbaar, vormbaar onder warmte (PE, PVC, PP, PMMA, PC). Thermoharders = ruimtelijke moleculaire netwerken — verharden tijdens vormgeving en kunnen daarna niet meer worden gesmolten (PUR-hardschuim, epoxy, bakeliet).',
    },
    {
      id: 'B15-1-g',
      toetstermCode: 'B.15.1',
      type: 'mc',
      prompt:
        'Een **GASkeur, KIWA-keur of KEMA-keur** is verplicht voor:',
      options: [
        'Gele zachte PVC trapneuzen',
        'Hard PVC-leidingen met verplicht keurmerk',
        'Polycarbonaat lichtkoepels',
        'LDPE krimpfolie',
      ],
      correctIndex: 1,
      explanation:
        'Hard PVC voor leidingen heeft per toepassing zijn eigen keurmerk: GASkeur (gas), KIWA-keur (water), KEMA-keur (elektra). Deze keurmerken garanderen dat de leiding voldoet aan veiligheids-, druk- en levensduureisen.',
    },
    {
      id: 'B15-1-h',
      toetstermCode: 'B.15.1',
      type: 'mc',
      prompt:
        'Bij **vloerverwarming** worden meestal welke kunststof-buizen gebruikt?',
      options: [
        'Hard PVC',
        'HDPE — flexibel, bestand tegen warm water',
        'LDPE — te zacht',
        'PMMA — te bros',
      ],
      correctIndex: 1,
      explanation:
        'HDPE-buizen worden in rollen geleverd en in de zwevende dekvloer of PS-combinatievloer ingebed. Bestand tegen circa 95 °C, flexibel genoeg om in lussen te leggen en duurzaam (50+ jaar). Specifieke HDPE-varianten zijn PEX (peroxide-gemodificeerd) of PERT (warmte-bestendig) voor cv-toepassingen.',
    },

    // === B.15.2 — Doorzichtige plaatmaterialen (4) ===
    {
      id: 'B15-2-a',
      toetstermCode: 'B.15.2',
      type: 'mc',
      prompt:
        'Wat is de **andere bekende naam** voor PMMA (perspex)?',
      options: ['Polycarbonaat', 'Plexiglas', 'Polyester', 'Polypropeen'],
      correctIndex: 1,
      explanation:
        'PMMA (polymethylmethacrylaat) staat in de praktijk bekend als **plexiglas** (oorspronkelijk een merknaam) of **perspex**. Ook acrylaatglas of organisch glas worden gebruikt. Bekend voor lichtkoepels, lichtbakken en doorzichtige reclame.',
    },
    {
      id: 'B15-2-b',
      toetstermCode: 'B.15.2',
      type: 'mc',
      prompt:
        'Voor een **slagvaste, vandalisme-bestendige toepassing** (bv. buswachthuisjes, oproerschilden) is welk plaatmateriaal geschikter dan glas of perspex?',
      options: ['Hard PVC', 'Polycarbonaat (PC) — zeer slagvast, sterker dan glas', 'PMMA — kostenvoordeel', 'LDPE'],
      correctIndex: 1,
      explanation:
        'Polycarbonaat is veel slagvaster dan glas of perspex (lichaamskracht of stenen geven geen breuk). Daarom standaard voor buswachthuisjes, oproerschilden, bouwhelmen en vandalismebestendige beglazing. Wel UV-coating nodig — anders vergeelt het materiaal in 10–20 j.',
    },
    {
      id: 'B15-2-c',
      toetstermCode: 'B.15.2',
      type: 'mc',
      prompt:
        'Een **lichtkoepel** op een plat dak — welk plaatmateriaal komt het meest voor?',
      options: [
        'Glas — zwaar maar betaalbaar',
        'PMMA (plexiglas) — glashelder, UV-bestendig',
        'Polycarbonaat — duurder maar onbreekbaar',
        'Hard PVC — afdichtend',
      ],
      correctIndex: 1,
      explanation:
        'PMMA (perspex) is de **standaardkeuze voor lichtkoepels**: glashelder (~92 % lichtdoorlaat), lichtgewicht, UV-bestendig en betaalbaar. Polycarbonaat wordt gekozen als slagvastheid de prioriteit is (kans op vandalismen, hagelschade). Glas is te zwaar voor het meeste platte daken-werk.',
    },
    {
      id: 'B15-2-d',
      toetstermCode: 'B.15.2',
      type: 'mc',
      prompt:
        'Bij verbranding ruikt **PMMA (perspex)** naar:',
      options: [
        'Zoutzuur',
        'Sinaasappel — een herkenbare zoete fruitgeur',
        'Kaarsvet',
        'Rubber',
      ],
      correctIndex: 1,
      explanation:
        'PMMA bij verbranding heeft de typische geur van **sinaasappel** (door methylmethacrylaat als pyrolyse-product). Dit is een klassieke vlamtest-herkenning in materiaalkunde. Polypropeen ruikt naar kaarsvet, PVC naar zoutzuur (chloorgas), polyamide naar verbrand haar.',
    },
  ],

  terms: [
    {
      term: 'Thermoplast',
      definition:
        'Kunststof die bij verwarming zacht wordt en bij afkoelen weer hardt — kan opnieuw gesmolten worden (recyclebaar). PVC, PE, PP.',
    },
    {
      term: 'Thermoharder',
      definition:
        'Kunststof die na uitharden onomkeerbaar is — kan niet opnieuw gesmolten worden. Polyester, epoxy, fenolhars.',
    },
    {
      term: 'PVC',
      definition:
        'Polyvinylchloride — stijf voor riolering, regenwaterafvoer, kozijnen; flexibel voor vloer, kabels. Brandgevaarlijk (rook).',
    },
    {
      term: 'PE (polyetheen)',
      definition:
        'Soepele thermoplast — drinkwaterleidingen (PE-X voor cv), folie, dampscherm.',
    },
    {
      term: 'PP (polypropyleen)',
      definition:
        'Stijver dan PE, hittebestendig — afvoerleidingen, septische installatie.',
    },
    {
      term: 'PUR-schuim',
      definition:
        'Polyurethaan­schuim — voor luchtdichting, opvulling, isolatie­platen (hoge Rc-waarde).',
    },
    {
      term: 'PIR-schuim',
      definition:
        'Verbeterde versie van PUR met betere brandwering en lagere lambda (≈ 0,022 W/m·K).',
    },
    {
      term: 'EPS',
      definition:
        'Expanded polystyrene (piepschuim) — lichte isolatie­platen voor vloer en gevel; λ ≈ 0,036.',
    },
    {
      term: 'XPS',
      definition:
        'Geëxtrudeerd polystyreen — dichte isolatie­plaat, drukvast en vocht­bestendig (voor onder begane-grondvloer, kelder).',
    },
    {
      term: 'Polyester (UP)',
      definition:
        'Thermoharder voor lichtdoorlatende golfplaten, sanitair (badkuipen), gevelpanelen.',
    },
    {
      term: 'Epoxyhars',
      definition:
        'Thermoharder voor lijmen, vloer­coatings en composieten — sterk en chemisch resistent.',
    },
    {
      term: 'Composiet',
      definition:
        'Combinatie van kunststofmatrix + versterkende vezels (glas, koolstof); zeer sterk en licht — kozijnen, gevels.',
    },
    {
      term: 'HPL',
      definition:
        'High Pressure Laminate — geperst plaatmateriaal met decor­toplaag; gevel­bekleding (Trespa) of meubelblad.',
    },
    {
      term: 'PE-folie',
      definition:
        'Dampscherm­folie achter de binnenafwerking; voorkomt diffusie van vocht naar koudere lagen.',
    },
  ],

  games: [
    {
      id: 'B15-gapfill-1', type: 'gapfill',
      title: 'Kunststoffen herkennen',
      text:
        '{{Thermoplasten}} (zoals PE, PVC, PP) verweken bij verwarmen — herverwerkbaar. ' +
        '{{Thermoharders}} (epoxy, PUR-hardschuim) verharden permanent. ' +
        'Voor rioleringsbuizen wordt vooral {{HDPE}} of hard PVC gebruikt. ' +
        '{{Polycarbonaat}} is slagvast — voor buswachthuisjes; {{PMMA}} (perspex) is glashelder voor lichtkoepels.',
      distractors: ['LDPE', 'epoxy', 'PVC', 'gips'],
    },
    {
      id: 'B15-sort-1', type: 'sort',
      title: 'Welke kunststof voor welk gebruik?',
      categories: ['Leidingen', 'Kozijnen / panelen', 'Doorzichtige plaat'],
      items: [
        { label: 'HDPE (polyetheen)', category: 'Leidingen' },
        { label: 'Hard PVC', category: 'Leidingen' },
        { label: 'PP (polypropeen) sifons', category: 'Leidingen' },
        { label: 'Slagvast PVC kozijn', category: 'Kozijnen / panelen' },
        { label: 'HPL / volkern (Trespa)', category: 'Kozijnen / panelen' },
        { label: 'PMMA (perspex)', category: 'Doorzichtige plaat' },
        { label: 'Polycarbonaat', category: 'Doorzichtige plaat' },
      ],
    },
    {
      id: 'B15-matching-1', type: 'matching',
      title: 'Vlamtest-geuren + kenmerken',
      pairs: [
        { left: 'PVC', right: 'Geeft chloorgas + zoutzuur bij brand' },
        { left: 'PP (polypropeen)', right: 'Ruikt naar kaarsvet bij verbranding' },
        { left: 'PMMA / perspex', right: 'Ruikt naar sinaasappel — vlamtest' },
        { left: 'Polycarbonaat', right: 'Slagvast, vergeelt met de tijd zonder UV-coating' },
        { left: 'HDPE', right: 'Vloerverwarming-buizen, riolering — bestand tot 95 °C' },
      ],
    },
  ],
}
