import type { Topic } from '../types/content'

export const C_13_afwerking: Topic = {
  code: 'C.13',
  section: 'C',
  title: 'Afwerkingen',
  chapterRef: 'Lesboek hoofdstuk 29',
  blurb:
    'Soorten wandafwerkingen (stucadoorswerk, tegelwerk, hout, plaatmaterialen, sausen, schilderwerk, behang), verfsystemen (grondverf/voorlak/aflak), mortels en stucwerk-types (raaplaag, witpleister, schuurwerk, spachtelputz), wand- en vloertegels (keramisch, dhg, plavuizen, cement), antislip­waardes (Rutschwerte), bijzondere keramische vormen (vensterbanktegel, raamdorpelsteen, muurafdektegel), vloerafwerkingen (parket, pvc, laminaat, linoleum, gietvloer, betonvloer, vloerbedekking) en gebreken van tegelwerk.',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · Wandafwerkingen — overzicht',
      toetstermCodes: ['C.13.1'],
      body: `
### Zeven hoofdcategorieën wandafwerkingen

#### 1. Stucadoorswerk (pleisterwerk)
- **Pleister­laag** op metsel- of betonwand → gladde / gestructureerde afwerking
- **Soorten**: zie sectie 4
- **Voordeel**: vlakke, naadloze afwerking; geluiddemping
- **Nadeel**: arbeids­intensief, kwetsbaar voor stoten, niet eenvoudig te vervangen

#### 2. Tegelwerk
- **Keramische tegels** op wand (badkamer, keuken) — zie sectie 5
- **Voordeel**: waterdicht, hygiënisch, slijtvast, decoratief
- **Nadeel**: hoge installatie­kosten, voegen kunnen vervuilen

#### 3. Houtafwerking
- **Lambrisering** (verticale houten panelen onderaan wand, ~1 m hoog)
- **Schroten** (houten plankjes — sponning­schroten, V-schroten)
- **Hout­panelen** (multiplex, MDF, eikenfineer)
- **Voordeel**: warm, akoestisch goed, robuust
- **Nadeel**: brandgevoelig, gevoelig voor vocht, ouderwetse uitstraling

#### 4. Plaatmaterialen
- **Gipskartonplaat** met afwerking (verf, behang, tegels)
- **MDF, OSB, multiplex** voor specifieke toepassingen
- **Trespa / HPL** voor wandbekleding (toiletwanden, gevelpanelen)
- **Voordeel**: snelle plaatsing, vlak oppervlak
- **Nadeel**: voegen tussen platen zichtbaar tenzij weggewerkt

#### 5. Sauswerk
- **Sausen** zijn dunne afwerk­lagen, vergelijkbaar met verf maar matter en goedkoper
- **Latex** (op water-basis, modern standaard)
- **Krijtwit** (klassiek, ademend, ouderwets)
- **Voordeel**: goedkoop, eenvoudig opnieuw aan te brengen
- **Nadeel**: minder slijtvast dan verf, niet wasbaar

#### 6. Schilderwerk
- Zie sectie 2 voor verfsystemen
- Op gipskarton, stucwerk, hout, metaal

#### 7. Behangwerk
- **Papierbehang** (klassiek, dunne uitvoering)
- **Glas­vlies-behang** (overschilder­baar — modern populair)
- **Vinyl-behang** (afwasbaar — keuken/toilet)
- **Textiel- en grasdrong-behang** (decoratief, duurder)
- **Foto­behang** (afbeelding op groot oppervlak)
- **Voordeel**: snel decoratief, gemakkelijk uitwisselbaar
- **Nadeel**: voegen zichtbaar bij slechte plaatsing, sommige soorten niet wasbaar

### Keuze per ruimte
- **Woonkamer**: glasvliesbehang + verf (modern flexibel) of stucwerk
- **Slaapkamer**: gewoon behang of geverfd glasvliesbehang
- **Keuken**: glanzende verf (wasbaar) of tegels achter aanrecht
- **Badkamer**: keramische tegels (waterdicht) of speciale water­vaste verf
- **Toilet**: tegels of vochtbestendige verf
- **Hal**: slijtvaste verf in lichte kleur
- **Trappenhuis**: idem hal
      `.trim(),
    },

    {
      heading: '2 · Verfsystemen: grondverf, voorlak en aflak',
      toetstermCodes: ['C.13.2'],
      body: `
**Een professioneel schilderwerk** bestaat uit drie of meer lagen, elk met een eigen functie.

### Drie hoofd­lagen
**1. Grondverf (primer)**
- **Eerste laag** op de naakte ondergrond
- **Functies**: hechting verbeteren, kleur dekken, ondergrond afdichten, eventueel roestwering
- **Soorten**:
  - **Hechtende grondverf** voor moeilijke ondergrond (PVC, glad metaal)
  - **Hardene grondverf** (vult kleine onregelmatigheden)
  - **Roestwerende grondverf** (zinkpoeder of zinkchromaat) voor staal
  - **Vochtwerende grondverf** voor hout
- **Doel**: voorbereiding voor de volgende lagen

**2. Voorlak**
- **Tussenlaag** tussen grondverf en aflak
- **Functies**: extra dekkracht, smooth-out oppervlak, kleur-correctie
- Soms wordt deze stap **overgeslagen** bij kwalitatieve grondverf + aflak combinaties
- **Doel**: zorgen voor egale uitstraling van de eindlaag

**3. Aflak (eindlaag, eindlak)**
- **Bovenste, zichtbare laag**
- **Functies**: kleur geven, beschermen tegen weersinvloeden + UV + slijtage
- **Glans-keuzes**:
  - **Hoogglans** — strakste uitstraling, makkelijk schoon te maken
  - **Halfglans / zijdeglans** — modern populair
  - **Mat** — verbergt onregelmatigheden, minder reflectie
- **Functies aflak**:
  - **Alkydhars** (klassiek, oplosmiddel-basis — sneeuwwit, gele kleur over de jaren)
  - **Acrylaat** (water-basis, milieuvriendelijker, snel drogend — modern standaard)
  - **Polyurethaan** (UV-bestendig, slijtvast — voor parket, sportvloeren)

### Andere lagen die kunnen voorkomen
- **Schuurlaag** — tussen lagen om hechting van volgende laag te verbeteren
- **Tussenlak** — extra laag bij hoge eisen
- **Eindafwerking met wax** — voor parket

### Verf­chemie
**Watergedragen verf** (acrylaat, latex):
- Milieuvriendelijker (lage VOC = Volatile Organic Compounds)
- Snel drogend (~1–2 uur tussen lagen)
- Reukloos
- Modern standaard binnen + buiten

**Solvent-verf** (alkydhars, polyurethaan):
- Iets harder en glanzender
- Lange droogtijd (12–24 uur)
- Sterke geur, ventilatie nodig
- Vooral voor specifieke toepassingen (metalen hekken, klassieke binnen­deuren)

### Brandwerende en bijzondere verven
- **Brandwerende verf** (intumescent) — bij verhitting zwelt op tot isolerend schuim; voor stalen kolommen en balken (zie B.7)
- **Anti-graffiti verf** — laat zich gemakkelijk schoonmaken
- **Hygiëne­verf** — voor ziekenhuizen (anti-bacterieel)
- **Magneetverf** — magnetische deeltjes in verf, kan magneten vasthouden
- **Schoolbord­verf** — krijt kan op gebruikt worden

### Vóór schilderen — voorbereiding
1. **Reinigen**: stof, vet weghalen
2. **Plamuren** kieren en gaten met houtplamuur of cement (afhankelijk ondergrond)
3. **Schuren**: voor hechting van eerste laag
4. **Schilderen**: grondverf → (voorlak) → aflak; tussenliggend laten drogen + lichte schuurlaag

### Duurzaamheid en onderhoud
- **Buitenschilderwerk**: gemiddeld 5–7 jaar levensduur
- **Onderhoud**: jaarlijks visuele inspectie, om de 5 jaar overschilderen
- **Volledig schoonmaken + verf vernieuwen** bij hout om de 7–10 jaar voor vochtbescherming
      `.trim(),
    },

    {
      heading: '3 · Gebreken in schilderwerk',
      toetstermCodes: ['C.13.3'],
      body: `
**Gebreken in schilderwerk** zijn een belangrijke indicatie van onderhoudsstaat — een makelaar moet ze kunnen herkennen bij woninginspectie.

### Houten kozijnen
**Bladderen / afbladderen**:
- Verflagen komen van het hout los, vaak in vlokken
- **Oorzaak**: vocht onder de verflaag (slechte afdichting van naden, kit verouderd), of slechte hechting bij oorspronkelijke plaatsing
- **Aanpak**: losse delen verwijderen, hout drogen, schuren, grondverf + 2x aflak

**Houtrot** (in combinatie met verfgebreken):
- Hout is **zacht en bruin/zwart** geworden
- **Oorzaak**: vocht onder defecte verflaag bereikt het hout → schimmel
- **Aanpak**: zie B.10.5 — uithakken tot gezond hout, 2K-PUR-/epoxy-pasta, opnieuw schilderen

**Kit naar binnen / scheuren**:
- **Kit** tussen kozijn en metselwerk losgelaten of gescheurd
- **Aanpak**: oude kit verwijderen, hout drogen, nieuwe siliconen-kit + verfwerk

**Doorbloedende harsplekken** (vooral grenenhout):
- **Hars** uit kwasten in het hout doorbloed door verflaag op warme dag
- **Aanpak**: hars­plek behandelen met hars-stop voor nieuwe verflaag

### Aluminium kozijnen
**Coating-veroudering**:
- Poederlak verkleurd, schub-vorming, of plaatselijk afgesleten
- **Oorzaak**: UV-belasting (alleen gebeurt zonder PVDF-coating); chemicaliën­blootstelling
- **Aanpak**: oppervlak schoonmaken, geschikte primer + topcoat

**Putcorrosie / coating-perforatie**:
- Kleine putjes in het oppervlak
- **Oorzaak**: contact met cement/metselspecie tijdens bouwfase (aluminium reageert), of zoutwater-spray
- **Aanpak**: weinig te repareren — meestal vervanging van het profiel

**Vlekken bij naden**:
- Bij slechte afdichting kit-vervanging nodig

### Gevelbekleding
**Plank-veroudering** (houten gevelbekleding):
- Verf verbleekt, scheurt, bladdert af
- **Oorzaak**: UV, regen, vorst-dooi cyclus
- **Aanpak**: oppervlak schoonmaken (eventueel kärchering), houtschimmel behandelen, opnieuw schilderen of beitsen
- **Modern alternatief**: vervangen door HPL/Trespa, vezelcement, of cortenstaal — geen onderhoud meer

**Vinyl/PVC-bekleding verkleuring**:
- Verbleekt door UV (vooral zuid-zijde)
- **Aanpak**: kan niet geschilderd — vervangen indien nodig

### Stalen onderdelen (hekwerk, staal­constructie)
**Roest­vorming**:
- **Bruine, oranje vlekken**, soms al loslopend
- **Oorzaak**: defect in verflaag → vocht bij staal
- **Aanpak**:
  - Lichte roest: roestpoort/​drahtborstel + roestomvormer + roestwerende grondverf + 2x aflak
  - Zware roest: zandstralen of vlamspuiten, dan herschilderen of vervangen
  - Voorkomen: jaarlijkse inspectie, kleine defecten direct repareren

**Schub­vorming**:
- Verf rolt zich op in schubben, vooral op flensvlakken van I-profielen
- **Oorzaak**: roest onder de verflaag pushes de verf omhoog
- **Aanpak**: zoals zware roest

**Brandwerende verf-aantasting**:
- Bij brandwerend bekleding (intumescent) — bladderen of barsten van de schuimende laag
- **Aanpak**: gespecialiseerd herstel; brandwerendheid moet opnieuw gecertificeerd worden

### Beton
**Betonrot** (zie B.6.6):
- Roest­vlekken op het beton, of vrijgekomen wapeningsstaaf
- **Oorzaak**: te geringe betondekking → vocht bij staal → roest → beton springt af
- **Aanpak**: uithakken tot gezond beton, roest verwijderen, spuitmortel + (eventueel) verflaag

**Craquelé / fijne haarscheurtjes**:
- Netwerk van kleine scheurtjes
- **Oorzaak**: te snelle uitdroging tijdens verharding
- **Aanpak**: meestal alleen esthetisch; eventueel waterdichte verflaag

**Vervuilde / mosachtige beton-gevel**:
- Algen, mos, vuil
- **Aanpak**: gevel-reiniging (hogedruk + biocide); na schoonmaken eventueel waterdicht maken (hydrofoberen)

### Algemene patroon-herkenning
- **Bladderen** vaak door vocht/onderliggende beschadiging
- **Verbleken** door UV
- **Roest** door defect in oppervlakte­bescherming
- **Schub­vorming** vrijwel altijd ernstige onderliggende schade

### Aanpak prioriteit
1. **Stop de oorzaak** (vocht, contact met cement, etc.)
2. **Repareer ondergrond** (hout drogen, beton herstellen)
3. **Verfwerk opnieuw** — niet "overschilderen" zonder behandeling
      `.trim(),
    },

    {
      heading: '4 · Mortels en stucadoorswerk',
      toetstermCodes: ['C.13.4'],
      body: `
**Mortels** = mengsels van bindmiddel (cement of gips), zand, water en eventueel hulpstoffen — voor metsel­werk én pleisterwerk.

### Soorten pleisters voor stucadoorswerk

#### Raaplaag
- **Eerste, ruwe laag** op naakt metselwerk of beton
- Materiaal: cement-zand-mortel (1:3) of speciale raapmortel
- **Doel**: oneffenheden vlak maken voor latere lagen
- **Dikte**: 5–15 mm
- **Afwerking**: ruw, niet gladmaken
- **Voor**: binnen­wanden vóór de witpleister of voor tegelwerk

#### Witpleister (gipspleister)
- **Witte, smetbare pleister** op basis van gips
- **Dunne laag** (~3–8 mm)
- **Afwerking**: glad — direct geschikt voor verf of behang
- **Voor**: binnenwanden in droge ruimten (woonkamer, slaapkamer)
- Niet voor badkamer (gips lost op in vocht)

#### Blauwpleister (kalkpleister)
- **Klassieke pleister** op kalkbasis (lichtblauw/grijs van kleur)
- **Voor monumenten** en oudere woningen
- Ademend — geschikt voor vochtige ruimten
- Modern grotendeels vervangen door gips of cement-pleister

#### Schuurwerk
- **Cement-mortel** geschuurd met een spons of houten plank → gestructureerd oppervlak
- **Buitenstuc** voor gevels
- Voor: gevelafwerking, schuren, kelders

#### Stucwerk met ornamenten
- **Decoratieve elementen** in pleister: rozetten op plafond, profielen langs plafondrand
- Klassieke techniek: **gipsen ornamenten** ingewerkt in vers stucwerk
- Modern: prefab schuim-profielen geplakt
- Klassiek herstel­werk voor monumenten

#### Spachtelputz
- **Decoratieve afwerking** met cementmortel + kleurstof; uitgewreven met spachtel of spons → gestructureerd reliëf
- **Buitenpleister** in moderne uitstraling
- Bestand tegen weer, geschikt voor gevel-na-isolatie
- Verkrijgbaar in vele kleuren en structuren (fijn/grof/gegooid)

### Mortel-recepten (klassiek)
**Metselmortel**:
- **1:3:0,5** (cement : zand : kalk + water) — standaard
- **1:1:6** (cement : kalk : zand) — kalkrijker, ademender

**Stucpleister voor raaplaag**:
- **1:3** (cement : zand) + voldoende water

**Witpleister**:
- Vooraf gemengde gips uit zak — alleen water toevoegen

**Tegellijm**:
- Vooraf gemengd kant-en-klare poeder of pasta — alleen water of mengen volgens fabrikant

### Toepassing per ruimte
- **Woonkamer/slaapkamer**: raaplaag + witpleister
- **Badkamer/keuken-spatzone**: raaplaag + cement-pleister + tegels
- **Buiten­gevel**: schuurwerk of spachtelputz
- **Plafond**: witpleister of decoratie­ornamenten in klassiek pand

### Uitvoering
**Volgorde**:
1. **Ondergrond schoonmaken** en bevochtigen (anders zuigt de pleister te snel droog)
2. **Hechtmortel** of primer indien nodig (op moeilijke onder­grond)
3. **Raaplaag** aanbrengen met een troffel — uitvlakken met een rij
4. **Schuren / structureren** zoals gewenst
5. **Eindlaag** (witpleister of schuurwerk) aanbrengen
6. **Drogen** — afhankelijk van laag­dikte 2–14 dagen

**Klimaat**:
- Tijdens werk **min. 5 °C** binnenruimte
- **Hogere luchtvochtigheid** maakt drogen trager — geen vocht­problemen tijdens uitharding
      `.trim(),
    },

    {
      heading: '5 · Wand- en vloertegels',
      toetstermCodes: ['C.13.5'],
      body: `
### Soorten tegels

#### Keramische tegels
**Gebakken klei** + glazuurlaag — meest voorkomende tegel.

- **Wand­tegels**: glanzend wit standaard formaat 150×150 mm, 200×200 mm, 200×300 mm
- **Vloer­tegels**: gemiddelde dichtheid (~1.500 kg/m³), gewoonlijk groter formaat (300×300, 600×600 mm)
- **Glanzend / mat** — afhankelijk van glazuurkeuze
- **Decoratief** mogelijk met patronen, kleuren, randtegels

**Voor- en nadelen**:
- **Voordeel**: waterdicht (mits goed gevoegd), goed te reinigen, decoratief
- **Nadeel**: kwetsbaar voor stoten (kan splinteren), voegen vervuilen, koud onder voet zonder vloerverwarming

#### DHG-tegels (Dubbel Hard Gebakken)
- **Tweemaal gebakken** — buitenste glazuurlaag in tweede bakronde
- **Hardere oppervlak**, slijtvaster dan gewone keramische
- **Vloertegels in publieke ruimten** (winkels, kantoren)
- **Glazuur kan licht reliëf hebben** voor anti-slip

#### Plavuizen
- **Niet-geglazuurde tegels** (ruwe gebakken klei)
- **Klassiek terracotta-rood** of beige
- **Slijtvast**, warme uitstraling
- Voor: keukens (klassiek), tuinkamers, terrassen
- **Aandachtspunt**: moet worden geïmpregneerd om vlekken (olie, water) tegen te gaan

#### Cementtegels
- **Ongebakken** — cement + pigment in mal geperst en uitgehard
- **Klassieke uitstraling** met gekleurde patronen (Marokkaanse stijl, encaustic)
- **Patroon dwars door de tegel** — slijtvast tot in de kern
- Vereist na plaatsing **impregneren met wax of olie** — anders water­doorlatend

### Speciale tegelsoorten
- **Porcelanato (porseleinen)** — sterk gebakken keramiek, zeer dicht, weinig waterabsorptie (<0,5 %); ook in groot formaat (XXL-tegels 1.200×600 mm)
- **Mozaiek** — kleine tegeltjes op netjes voor decoratieve effecten
- **Natuurstenen tegels** (marmer, leisteen, graniet) — zie C.14
- **PVC-tegels** — kunststof imitatie tegen lage kosten

### Hulpstukken
- **Hoekprofielen** (binnenhoek, buitenhoek) — aluminium of kunststof
- **Voet- en eindstukken** voor net-geknipte tegels
- **Plinttegels** (eindstuk onderkant wand)
- **Antislip-profielen** voor douchevloer
- **Doucheglijbeschermers**

### Plaatsen van tegels
**Ondergrond**:
- **Vlakke, vaste ondergrond** verplicht (≤ 3 mm afwijking over 2 m)
- **Stoere wand­plaat** (Hardiebacker, Fermacell) voor natte ruimten
- **Cement-of anhydrietdek** voor vloer

**Lijm**:
- **Kant-en-klare tegellijm** in poederslagvorm — mengen met water
- **Kant-en-klare pasta** voor kleine renovaties
- **Flexibele lijm** voor vloerverwarming
- **Speciaal voor zwembad / natuursteen** afhankelijk van toepassing

**Voegmiddel**:
- **Cementvoeg** (cement + zand + pigment)
- **Epoxy­voeg** (chemisch resistent — voor industriële keukens, zwembad)
- **Flexibele voeg** voor uitzettingsruimte

### Voegen en afwerking
**Voegbreedte**:
- **2 mm** voor strakke uitstraling (rectified tiles)
- **3 mm** standaard
- **5+ mm** voor rustieke uitstraling

**Voegkleur**:
- **Zwarte voeg** verbergt vlekken beter dan witte
- **Tegelkleur-aanpassende voeg** voor naadloze uitstraling

### Tegellocatie en patroon
- **Standverband** — recht patroon
- **Diagonale legging** — onder 45°
- **Halfsteens­verband** — elke rij verschoven
- **Visgraat** (chevron, herringbone) — modern populair
      `.trim(),
    },

    {
      heading: '6 · Antislip en Rutschwerte',
      toetstermCodes: ['C.13.6'],
      body: `
### Wat is antislip?
**Antislip** = de mate waarin een vloer (of tegel) **stroef** is bij contact met de schoen of voet — bepaalt het risico op uitglijden.

### Rutschwerte (Duitse classificatie)
**Rutschwerte** = Duitse term voor anti-slip-classificatie (Nederland gebruikt dezelfde norm). Gemeten via een **gestandaardiseerde hellingsproef** (DIN 51130 en DIN 51097).

#### R-waardes (schoenen-test, DIN 51130)
Test met **schoenen op een hellende vloer** — de hellingshoek waarbij iemand begint te slippen bepaalt de R-klasse:

| R-klasse | Hellingshoek | Toepassing |
|---|---|---|
| **R 9** | 6–10° | **Binnenruimten droog** — woonkamer, slaapkamer, hal |
| **R 10** | 10–19° | **Keuken**, eetkamer, openbare ruimten |
| **R 11** | 19–27° | **Industriële ruimten**, parkeergarage, café-keuken |
| **R 12** | 27–35° | **Levensmiddelen­industrie**, lab, brouwerij |
| **R 13** | > 35° | **Zware industrie**, slachterij |

#### A/B/C-waardes (blote voeten, DIN 51097)
Test met **blote voeten op een natte hellende vloer** — voor douche, zwembad, sauna:

| Klasse | Hellingshoek | Toepassing |
|---|---|---|
| **A** | 12–18° | **Kleedruimte**, gang langs zwembad |
| **B** | 18–24° | **Douche**, badkamer, zwembad­strand |
| **C** | > 24° | **Hellende zwembad-bodems**, voetbaden |

### Waar zijn welke R-waardes vereist?

**Woning**:
- **Woon-/slaapkamer­vloer**: R 9 minimum (in praktijk is laminaat/parket R 9)
- **Keukenvloer**: R 10 aanbevolen (bij gebakken tegels)
- **Badkamervloer**: R 10 met B (natte voeten)
- **Doucheruimte**: B verplicht; soms C voor extra veiligheid
- **Terras**: R 11 buiten (regen, sneeuw)
- **Trap**: R 10 minimum

**Utiliteit**:
- **Kantoor**: R 9
- **Winkel**: R 10
- **Horeca­keuken**: R 12 (vetspatten + nat)
- **Sport­zaal**: R 9 of R 10 afhankelijk van sport
- **Zwembad**: A, B en C combinaties per zone
- **Industrie**: R 11–R 13 afhankelijk van risico

### Hoe wordt antislip bereikt?
**Tegels**:
- **Gestructureerd oppervlak** (relief, micro­strepen)
- **Geslepen / gepolijst graniet** → R 9–10
- **Geslagen / geboucharderde steen** → R 11–12
- **Speciale anti-slip-coating** achteraf aangebracht

**Vloerafwerkingen**:
- **PVC met fijn gestructureerd oppervlak** — R 9–10
- **Linoleum met anti-slip-profiel** — R 10
- **Gietvloer met kwartszand-toevoeging** — R 10–11
- **Hout met anti-slip-coating** — R 9

**Specifiek voor natte zones**:
- **Anti-slip-strookjes** op trap­treden
- **Veiligheids­matten** (rubber, met gaten)
- **Inwerk­profielen** op betontrappen

### Bbl-eisen
**Bbl/NEN 1814** stelt eisen aan vloer­antislip­heid in openbare ruimten:
- **Trappen**: minimaal R 10
- **Badkamers in zorgwoning**: minimaal R 10 + B
- **Vluchtwegen**: R 9 voldoende

### Bij verkoop / inspectie
- **Vraag naar R-waarde** bij koop van tegels voor renovatie
- Bij **zorgwoningen / ouderen**: extra strenge antislip eisen
- **Aftersales**: anti-slip-coating ~€ 30/m² achteraf aanbrengen — verbetert tot 1 R-klasse hoger
      `.trim(),
    },

    {
      heading: '7 · Bijzondere keramische vormen',
      toetstermCodes: ['C.13.7'],
      body: `
Naast standaard­tegels zijn er **specifieke keramische vormen** voor bouw-detaillering. Drie examen-relevante:

### Vensterbanktegel
- **Tegel die als vensterbank dient** — bovenkant van de wand onder een raam
- **Materiaal**: hard gebakken keramiek, vaak met druipprofiel aan de voorkant
- **Plaatsing**: op de **stroef-/raaplaag** boven de borstwering; ingelegd met cement of tegellijm
- **Maatvoering**: meestal 100–250 mm diep, lengte afgestemd op breedte raamopening
- **Variants**:
  - Met **druipneus** aan voorkant (voorkomt dat water langs gevel loopt)
  - Met **opstaande rand** aan achterkant (afdichting tegen kozijn)
  - Glanzend of gestructureerd oppervlak

**Voor- en nadelen**:
- **Voordeel**: hygiënisch (geen vocht in steen), gemakkelijk schoonmaken, integratie met tegelwerk
- **Nadeel**: harder dan natuursteen (klap­geluid bij iets neerleggen)

**Toepassing**:
- Klassieke woning­tegels in keuken / badkamer
- Vooral in zuid-Europa, Marokko, klassieke Nederlandse architectuur

### Raamdorpelsteen
**Raamdorpelsteen** = horizontale lijst onder een buitenraam — voor afwatering en bescherming van het metselwerk eronder.

- **Materiaal opties**:
  - **Gres** (klassiek gebakken klei) — donkerbruin/rood
  - **Beton** (Holonite) — modern, in vele kleuren
  - **Natuursteen** (hardsteen, kwartsiet)
  - **Aluminium** (modern, slank profiel)
- **Functie**:
  - **Hemelwater­afvoer**: water uit raam wordt buiten gevelvlak gebracht → voorkomt vervuiling en vochttrekken
  - **Bescherming** metselwerk onder het raam
  - **Esthetisch** detail
- **Vorm**:
  - **Druipneus** aan onderkant voorkant
  - **Helling** ~5–10° naar voren voor afwatering
  - **Opstaande rand** aan achterkant tegen kozijn

**Verschil raamdorpelsteen vs vensterbanktegel**:
- **Vensterbanktegel** = binnen, deel van de binnenkant van het raam
- **Raamdorpelsteen** = buiten, onder het kozijn, op de gevel

### Muurafdektegel (muurafdek­plaat)
- **Tegel die boven op een muur** ligt — voor afwatering en bescherming
- **Toepassing**:
  - **Tuinmuur** (vrijstaande lage gemetselde muur)
  - **Borstwering** boven een dakopstand
  - **Pilaster of penant**
  - **Schoorsteen­top**
- **Materiaal**: gres, beton, natuursteen, soms metaal
- **Vorm**:
  - **Dakvormig** (puntdak) — water naar twee zijden
  - **Hellend** — water naar één zijde
  - **Vlakke met druipneus** aan beide zijden
- **Maatvoering**: lengte 30–100 cm, dikte 30–60 mm

**Functie**:
- **Beschermt** de bovenkant van de muur tegen regen, vorst, en algen
- **Voorkomt** dat water in de muur dringt → vochttrekken en scheurvorming
- **Esthetisch** afwerking

### Voor de makelaar
- Bij oudere woningen: controleer of **raamdorpelstenen en muurafdektegels intact** zijn
- Bij defect: water dringt in metselwerk → schade onder het raam, schimmel binnen, gevel-verkleuring
- Vervanging: ~€ 50–200 per element afhankelijk van materiaal
      `.trim(),
    },

    {
      heading: '8 · Vloerafwerkingen — soorten',
      toetstermCodes: ['C.13.8'],
      body: `
Zeven examen-relevante vloerafwerkingen — leer eigenschappen en typische toepassingen.

### Parket­vloer
- **Massieve houten plankjes** of **gelaagd parket** (multiplex-onderkant + dunne houten toplaag)
- **Materiaal**: eiken (standaard), beuken, kers, exotisch hardhout
- **Plaatsing**:
  - **Verlijmd** op dekvloer
  - **Zwevend** met klikverbinding
  - **Verdekt­vernageld** (klassiek, alleen massief op balken)
- **Voor- en nadelen**:
  - **Voordeel**: warme uitstraling, kan vele malen geschuurd en opnieuw gelakt
  - **Nadeel**: gevoelig voor vocht (badkamer ongeschikt), kan krimpen/uitzetten, harder dan PVC
- **Levensduur**: 40+ jaar mits goed onderhouden
- **Onderhoud**: jaarlijks wax of olie, om de 15–25 jaar opnieuw schuren + lakken

### PVC-vloer
- **Kunststof vloer** in stroken, tegels of grote vellen
- **Met print** (houtimitatie, stenen­imitatie, abstract)
- **Plaatsing**:
  - **Plak**-pvc (verlijmd op vlakke dekvloer)
  - **Klik**-pvc (zwevend, snelle plaatsing)
  - **Losliggend** (op zwaardere onderlaag — verhuisbaar)
- **Voor- en nadelen**:
  - **Voordeel**: waterbestendig, soepel en warmer dan tegels, goedkoop, antislip-uitvoering
  - **Nadeel**: kan verkleuren door UV, niet schuurbaar, beperkte levensduur
- **Levensduur**: 15–25 jaar
- **Toepassing**: zorgwoningen, scholen, badkamer (kunststof natte ruimte versie), keuken

### Laminaat­vloer
- **HDF-paneel met decoratieve afdruk en slijtlaag**
- Houtimitatie het meest voorkomend
- **Plaatsing**: zwevend met klikverbinding
- **Voor- en nadelen**:
  - **Voordeel**: goedkoop, snelle plaatsing, kras­vast
  - **Nadeel**: niet waterbestendig (water tussen panelen zwelt op), niet schuurbaar
- **Levensduur**: 10–20 jaar
- **Toepassing**: woonkamer, slaapkamer, hal

### Linoleum­vloer
- **Natuurlijk product**: linolie + houtmeel + krijt + jute-onderlaag
- **Plaatsing**: verlijmd op dekvloer, in banen of tegels
- **Voor- en nadelen**:
  - **Voordeel**: duurzaam, antibacterieel, recyclebaar, anti-statisch
  - **Nadeel**: vocht­gevoelig (geen badkamer), gele gloed bij sommige verflagen, gevoelig voor vetten
- **Levensduur**: 20–40 jaar
- **Toepassing**: scholen, ziekenhuizen, kantoren, klassieke woning

### Giet­vloer
- **Vloeibare hars** uitgegoten op de dekvloer → naadloze vloer
- **Materialen**: epoxy, polyurethaan, of cement-gebaseerd
- **Plaatsing**: door professioneel installeur
- **Voor- en nadelen**:
  - **Voordeel**: naadloos (geen vuilvang in voegen), elegant, mogelijk in vele kleuren
  - **Nadeel**: zeer hoge kosten, technisch lastig, herstel bij beschadiging moeilijk
- **Levensduur**: 25+ jaar
- **Toepassing**: moderne woning­woonkamer, industriële ruimten, ziekenhuizen

### Beton­vloer
- **Geslepen of gepolijst beton** als zichtbare vloer­afwerking
- **Plaatsing**: bij nieuwbouw — beton vloer wordt direct als eindvloer behandeld
- **Voor- en nadelen**:
  - **Voordeel**: zeer duurzaam, modern industriële uitstraling, lage onderhouds­kosten
  - **Nadeel**: hard (oncomfortabel bij vallen), koud zonder vloerverwarming, scheuren mogelijk
- **Levensduur**: 50+ jaar
- **Toepassing**: lofts, moderne woningen, industriële conversies

### Vloerbedekking (tapijt)
- **Tapijt** in vele soorten: wol, polypropeen, polyester, naturel (sisal, jute)
- **Plaatsing**: losliggend, geplakt of met tapijtgrijpers
- **Voor- en nadelen**:
  - **Voordeel**: warm, zacht, akoestisch dempend
  - **Nadeel**: vlek-gevoelig, stof­vang (allergie!), beperkte levensduur, niet hygiënisch in natte zones
- **Levensduur**: 8–15 jaar
- **Toepassing**: slaapkamer (warm onder voet), kantoor (geluiddempend)

### Vergelijkende tabel
| Vloer | Waterbestendig | Slijtvast | Onderhoud | Levensduur | Prijs/m² |
|---|---|---|---|---|---|
| Parket | Nee | Hoog | Gemiddeld | 40+ j | € 50–120 |
| PVC | Ja | Gemiddeld | Laag | 15–25 j | € 25–60 |
| Laminaat | Nee | Gemiddeld | Laag | 10–20 j | € 15–40 |
| Linoleum | Beperkt | Gemiddeld | Laag | 20–40 j | € 30–60 |
| Gietvloer | Ja | Zeer hoog | Laag | 25+ j | € 80–200 |
| Beton | Ja | Zeer hoog | Laag | 50+ j | € 50–100 |
| Tapijt | Nee | Laag–gemiddeld | Hoog | 8–15 j | € 15–80 |

### Bij Nieuw­bouw
- **Vloerverwarming** vergt **warmtegeleidende vloer­afwerking**: tegels, gietvloer, dun parket (max. 15 mm), specifieke PVC-LVT
- **Dik tapijt** of dikke houten parket isoleren te veel → vloerverwarming ineffectief

### Bij verkoop / inspectie
- **Leeftijd** van vloer aanwijzen (parket ouder dan 30 jaar nadert einde levensduur)
- **Beschadigingen** documenteren
- **Vloerverwarming compatibel**?
- Bij **allergieën**: tapijt eerder verwijderen — geeft vinkje bij koper
      `.trim(),
    },

    {
      heading: '9 · Gebreken in wand- en vloertegelwerk',
      toetstermCodes: ['C.13.9'],
      body: `
### Typische gebreken in tegelwerk

#### Voegen verdwijnen / scheuren
- **Cementvoegen verbrokkelen** uit
- **Oorzaak**: veroudering, bewegingen in ondergrond, lekkages, verkeerde voegmortel
- **Aanpak**: oude voegen uitsteken (handmatig of met voegfrees) → opnieuw voegen + impregneren

#### Voeg-verkleuring
- Voegen worden **donker** (vooral wit) door vuil­opname
- **Oorzaak**: poreuse voeg, ontbrekende impregnering
- **Aanpak**: voegen reinigen (sterke voegreiniger), eventueel opnieuw voegen, **impregneren** met voegbeschermer

#### Schimmel in voegen
- **Zwarte vlekken** in voegen, vooral natte ruimten (badkamer, douche)
- **Oorzaak**: vocht + slechte ventilatie + organisch materiaal (zeepresten)
- **Aanpak**:
  - Voegen reinigen met **schimmeldoder** (bleek of speciale producten)
  - Verbeteren ventilatie (afzuig­ventilator hoger zetten)
  - **Impregneren** van voeg na schoonmaken
  - Bij hardnekkig: voegen uitsteken + opnieuw voegen met **schimmel­werende epoxy-voeg**

#### Lossende of holle tegels
- **Klop-test**: tegel klinkt **hol** bij erop tikken (i.p.v. solide)
- **Oorzaak**: tegellijm heeft geen voldoende hechting (vervuilde ondergrond, te dunne lijmlaag, vocht achter de tegel)
- **Aanpak**: tegel verwijderen → ondergrond schoonmaken → opnieuw plaatsen met goede lijm

#### Scheuren in tegels
- **Haarscheuren** of grote scheuren door de tegel
- **Oorzaken**:
  - **Werken van ondergrond** (krimp van de dekvloer)
  - **Stoot** (zwaar object op de vloer gevallen)
  - **Onvoldoende dilatatie** (geen uitzettingsvoegen bij grote oppervlakken)
- **Aanpak**: enkele tegel uitslijpen en vervangen; bij grote schade tegelwerk vernieuwen + dilatatie­voegen toevoegen

#### Hoogteverschil tussen tegels (zinken)
- Eén tegel ligt lager dan omliggende
- **Oorzaak**: ondergrond niet goed gevlakt; verzakking onder vloer (bv. kruipruimte­verzakking)
- **Aanpak**: enkele tegel uithakken en opnieuw plaatsen op nieuwe lijmlaag

### Belangrijke aandachtspunten

#### Dilatatie (uitzettings­voegen)
**Wat zijn dilataties?**
- **Speciale voegen** waar tegelwerk kan **bewegen** zonder te scheuren
- **Plaats**:
  - Aansluiting **wand-vloer** (overgang verschillende richtingen)
  - **Hoeken van wanden** (binnenhoek)
  - **Grote oppervlakken** (elke ~5 m een dilatatie)
  - **Doorvoer­leidingen** (rondom)
  - **Boven vloerverwarming** (uitzetting)

**Materiaal dilatatievoeg**:
- **Siliconenkit** of **acrylaatkit** (flexibel) in de juiste kleur
- **Dilatatieprofielen** (kunststof of metaal) tussen tegels

**Waarom belangrijk?**
- Zonder dilatatie → werkende tegels duwen tegen elkaar → **scheuren of pop-outs**
- Standaard bij elke installatie

#### Kitwerk
- **Siliconen-kit** aan rand van bad, douchebak, aanrechtblad
- **Verkleurt** in de loop van jaren (geel of zwart door schimmel)
- **Onderhoud**: om de 5–8 jaar vervangen
- **Aanpak vervanging**:
  - Oude kit verwijderen met **kit-mes**
  - Oppervlak ontvetten en drogen
  - Nieuwe **fungicide siliconenkit** aanbrengen + glad strijken met spatel of natte vinger
- **Type kit**: **sanitair siliconenkit** (schimmel­werend) — niet gewone keuken siliconenkit

#### Tegelprofielen
- **Aluminium of kunststof L-, T- of D-profielen** voor afwerking randen
- **Plaats**:
  - **Binnenhoek**: vermindert kans op stoot­schade
  - **Buitenhoek**: estetisch + bescherming tegen lossende tegels
  - **Plinten** onderkant wand
  - **Overgang tussen materialen** (tegel naar parket, tegel naar tapijt)
- **Voorbeelden**:
  - **L-profiel** voor 90° hoek
  - **T-profiel** voor overgang vloer-naar-vloer op gelijk niveau
  - **Trap­neusprofiel** voor traptredes
- **Kleur en materiaal** aanpassen aan tegel of kozijn

### Voor de inspecteur/makelaar
**Bij woninginspectie**:
- **Klop-test** op tegels in badkamer en keuken — hol klinkende tegels = probleem
- **Kitwerk** controleren op verkleuring, schimmel, beschadiging
- **Dilatatie­voegen** aanwezig?
- **Voegen** op verbrokkeling of zwart­kleuring
- **Vochtproblemen** rond bad en douche (water dringt door slechte kit naar onderliggende vloer/wand)

**Aanbeveling aan koper**:
- Bij **kit ouder dan 5 jaar**: vervanging plannen
- Bij **scheuren in tegels**: oorzaak onderzoeken (verzakking?)
- **Schimmel in voegen**: ventilatie verbeteren én voegen behandelen
      `.trim(),
    },
  ],

  toetstermen: [
    {
      code: 'C.13.1',
      text: 'Herkent de soorten wandafwerkingen, eigenschappen en toepassingen van stukadoorswerk, tegelwerk, hout, plaatmaterialen, sausen, schilderwerk en behangwerk.',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'C.13.2',
      text: 'Herkent de verschillende soorten schilder- en sauswerk verfsysteem (grondverf, voorlaksysteem en aflaksysteem).',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'C.13.3',
      text: 'Benoemt de meest voorkomende gebreken van schilderwerk bij kozijnen (hout en aluminium), gevelbekleding, stalen onderdelen (hekwerk en staalconstructie) en beton.',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'C.13.4',
      text: 'Benoemt de toepassing van mortels inclusief het afwerkingseffect van stukadoorswerken (raaplaag, witpleister, blauwpleister, schuurwerk, stucwerk met ornamenten en spachtelputz).',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'C.13.5',
      text: 'Benoemt de toepassing en materiaal­eigenschappen van wand- en vloertegels en hulpstukken (keramische tegels, DHG-tegels, plavuizen en cementtegels).',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'C.13.6',
      text: 'Kan het begrip antislip (Rutschwerte) uitleggen en benoemt welke waarden er zijn (R 9–R 13 voor schoenen, A/B/C voor blote voeten).',
      niveau: 'BT1',
      bloom: 'Begrip',
    },
    {
      code: 'C.13.7',
      text: 'Herkent de bijzondere keramische vormen vensterbanktegel, raamdorpelsteen en muurafdektegel.',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'C.13.8',
      text: 'Herkent de soorten vloer­afwerkingen parketvloer, pvc-vloer, laminaatvloer, linoleumvloer, gietvloer, betonvloer en vloerbedekking met hun eigenschappen.',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'C.13.9',
      text: 'Benoemt de voorkomende gebreken en eigenschappen van wand- en vloertegelwerk, zoals dilataties, kitwerk en tegelprofielen.',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
  ],

  questions: [
    // C.13.1 (3)
    {
      id: 'C13-1-a',
      toetstermCode: 'C.13.1',
      type: 'mc',
      prompt: 'Welke wandafwerking is **standaard voor een badkamer**?',
      options: [
        'Behang en glasvliesbehang',
        'Keramische tegels',
        'Stucwerk met gips­pleister',
        'Houten lambrisering',
      ],
      correctIndex: 1,
      explanation:
        'Keramische tegels zijn standaard voor badkamer en keuken-spatzone: waterdicht, hygiënisch (geen bacteriegroei), slijtvast en decoratief. Gips­pleister (witpleister) is niet geschikt voor natte ruimten — gips lost op in vocht. Behang en hout zijn voor droge ruimten.',
    },
    {
      id: 'C13-1-b',
      toetstermCode: 'C.13.1',
      type: 'mc',
      prompt: 'Wat is **glasvliesbehang**?',
      options: [
        'Glasvezelversterkt, overschilderbaar behang dat scheurtjes overbrugt',
        'Behang gemaakt van echt glas',
        'Behang met een fotoprint',
        'Plakfolie met glasimitatie',
      ],
      correctIndex: 0,
      explanation:
        'Glasvliesbehang is een textielachtig behang versterkt met glasvezels. Wordt op een geheel uitgesmeerde lijmlaag (vies behang-lijm) op de wand geplakt en daarna **overgeschilderd** met latex of muurverf. Voordelen: brugt kleine scheurtjes in de muur (anti-craquelé), eenvoudig kleurvervanging (gewoon opnieuw schilderen), milieu­vriendelijk. Standaard moderne wandafwerking.',
    },
    {
      id: 'C13-1-c',
      toetstermCode: 'C.13.1',
      type: 'mc',
      prompt: 'Het hoofdverschil tussen **sausen** en **schilderwerk** is:',
      options: [
        'Sausen zijn voor buiten, verf voor binnen',
        'Sausen zijn dunne, matte, goedkope afwerklagen',
        'Sausen bevatten geen pigment',
        'Synoniemen',
      ],
      correctIndex: 1,
      explanation:
        'Sausen (saus, latex-saus, krijtwit) zijn dunne afwerklagen — vergelijkbaar met verf maar matter, goedkoper en minder slijtvast. Niet wasbaar zoals verf. Voor budget-renovatie van binnenwanden in droge ruimten. Voordeel: makkelijk overschilderen, geen voorbereiding nodig zoals stevige verflagen. Nadeel: vlekken blijven zichtbaar tot opnieuw aangebracht.',
    },

    // C.13.2 (3)
    {
      id: 'C13-2-a',
      toetstermCode: 'C.13.2',
      type: 'mc',
      prompt: 'Een professioneel verfsysteem bestaat uit:',
      options: [
        'Alleen aflak',
        'Grondverf, voorlak en aflak',
        'Twee lagen aflak',
        'Grondverf + tegelijm',
      ],
      correctIndex: 1,
      explanation:
        'Verfsysteem: (1) **Grondverf** (primer) op naakte ondergrond — hechting, kleur dekken, ondergrond afdichten, eventueel roestwering; (2) **Voorlak** (tussen­laag) — extra dekkracht, smooth-out, soms overgeslagen; (3) **Aflak** (eindlaag) — kleur, bescherming tegen UV/regen/slijtage. Voor moeilijke ondergronden of zware omgevingen: extra tussen­lagen mogelijk.',
    },
    {
      id: 'C13-2-b',
      toetstermCode: 'C.13.2',
      type: 'mc',
      prompt: 'Wat is **alkydhars-verf**?',
      options: [
        'Een acrylaat-verf met houtdeeltjes',
        'Klassieke verf op oplosmiddel-basis',
        'Watergedragen verf',
        'Brandwerende verf',
      ],
      correctIndex: 1,
      explanation:
        'Alkydhars-verf is een klassieke synthetische verf op oplosmiddel-basis (white-spirit). Eigenschappen: lang droog (12–24 u), sterke geur (ventilatie vereist!), iets harder en glanzender dan watergedragen verf. Verkleurd over de jaren (geel-gloed). Toepassing: metalen hekken, klassieke binnen­deuren, monumentale werken. Voor binnen wordt nu vrijwel altijd watergedragen acrylaat-verf gebruikt (milieuvriendelijker, sneller drogend).',
    },
    {
      id: 'C13-2-c',
      toetstermCode: 'C.13.2',
      type: 'mc',
      prompt: 'Wat is het **belangrijkste voordeel** van watergedragen verf (acrylaat/latex) ten opzichte van solvent-verf?',
      options: [
        'Hardere uitstraling',
        'Lagere VOC-emissie, snel drogend, vrijwel reukloos',
        'Langere droogtijd',
        'Beter voor metalen onderdelen',
      ],
      correctIndex: 1,
      explanation:
        'Watergedragen verf (acrylaat, latex) heeft lage VOC-emissie (vluchtige organische verbindingen) — beter voor milieu en gezondheid (minder oplosmiddelen-damp). Snel drogend (~1–2 uur), vrijwel reukloos. Modern standaard voor zowel binnen als buiten. Solvent-verf (alkydhars) is harder en glanzender maar verkleurt over jaren en heeft sterke geur — vooral voor specifieke metaal- en monument-toepassingen.',
    },

    // C.13.3 (3)
    {
      id: 'C13-3-a',
      toetstermCode: 'C.13.3',
      type: 'mc',
      prompt: 'Bij een houten kozijn met **bladderende verf**, wat is de meest waarschijnlijke onderliggende oorzaak?',
      options: [
        'Te veel verflagen',
        'Vocht onder de verflaag',
        'Te weinig zonlicht',
        'Verkeerde verfkeur',
      ],
      correctIndex: 1,
      explanation:
        'Bladderen van verf op hout wijst vrijwel altijd op **vochtinwerking onder de verflaag** — meestal door verouderde kit of beschadigde afdichtings­bordjes. Het vocht maakt de hechting van verf op hout los → vlokken bladderen af. Onbehandeld leidt dit binnen 2–5 jaar tot houtrot. **Aanpak**: oorzaak van vocht stoppen (kit vervangen, vochtbron isoleren), losse verf verwijderen, hout drogen, schuren, grondverf + 2× aflak.',
    },
    {
      id: 'C13-3-b',
      toetstermCode: 'C.13.3',
      type: 'mc',
      prompt: 'Op een **stalen hekwerk** zijn schubvormige roestplekken zichtbaar. De diagnose:',
      options: [
        'Roest onder de verf duwt de laag omhoog: onderliggende corrosie',
        'Een esthetisch probleem zonder gevolgen',
        'Een normaal verouderingsverschijnsel',
        'Verkleuring door UV-straling',
      ],
      correctIndex: 0,
      explanation:
        'Schubvorming op staal wijst op ernstige onderliggende corrosie — roest onder de verflaag duwt deze omhoog. Onbehandeld leidt dit tot structurele verzwakking. Aanpak: (1) schuurwerk / zandstralen tot gezond staal; (2) **roestomvormer** (chemisch product dat roest omzet); (3) roestwerende grondverf (zink­poeder of zinkchromaat); (4) 2× aflak. Bij zware schade: vervangen door nieuw staal. Voorkomen: jaarlijkse inspectie + kleine defecten direct repareren.',
    },
    {
      id: 'C13-3-c',
      toetstermCode: 'C.13.3',
      type: 'mc',
      prompt: '**Beton met roestvlekken en losgekomen schollen** — wat is de juiste diagnose?',
      options: [
        'Verflaag is verouderd',
        'Betonrot',
        'Algen op de gevel',
        'Vocht in het beton zelf',
      ],
      correctIndex: 1,
      explanation:
        'Betonrot ontstaat doordat te geringe betondekking vocht en zuurstof bij het wapeningsstaal laat. Het staal roest, het volume neemt ~6–8× toe, en het beton wordt van binnenuit weggeduwd. Zichtbaar als roestvlekken op het oppervlak en later het afspringen van betonlagen. Herstel: zie B.6.6 — uithakken tot gezond beton, roest van wapening behandelen of vervangen, **spuitmortel met polypropyleenvezels** aanbrengen, daarna schilderen.',
    },

    // C.13.4 (3)
    {
      id: 'C13-4-a',
      toetstermCode: 'C.13.4',
      type: 'mc',
      prompt: 'Wat is een **raaplaag**?',
      options: [
        'De decoratieve eindlaag',
        'Eerste, ruwe laag op naakt metsel­werk of beton',
        'Een waterdichte laag onder tegels',
        'Een pleisterlaag op gips',
      ],
      correctIndex: 1,
      explanation:
        'Raaplaag = de eerste ruwe pleister­laag op naakt metsel­werk of beton, meestal cement-zand-mortel (1:3) of speciale raapmortel. Dikte 5–15 mm. Doel: oneffenheden vlak maken zodat de latere fijnere lagen (witpleister, tegelwerk) goed kunnen worden geplaatst. Afwerking blijft ruw — niet gladmaken. Dit is de basis-pleisterlaag.',
    },
    {
      id: 'C13-4-b',
      toetstermCode: 'C.13.4',
      type: 'mc',
      prompt: 'Wat is **spachtelputz**?',
      options: [
        'Decoratieve buitenpleister met een uitgewreven reliëf',
        'Een waterdichte coating',
        'Klassieke kalkpleister',
        'Een metaalpleister',
      ],
      correctIndex: 0,
      explanation:
        'Spachtelputz is een decoratieve buitenpleister: cementmortel met kleurstof aangebracht en uitgewreven met spachtel of spons voor gestructureerd reliëf-effect (fijn/grof/gegooid). Modern populair voor gevel-na-isolatie (over EPS- of steenwol-isolatie). Bestand tegen weer, lange levensduur. Verkrijgbaar in elke kleur. Vergeleken met klassieke kalkpleister: meer bestand tegen weer, gemakkelijker te onderhouden, en eenvoudig in moderne uitstraling.',
    },
    {
      id: 'C13-4-c',
      toetstermCode: 'C.13.4',
      type: 'mc',
      prompt: '**Witpleister (gipspleister)** is **niet geschikt** voor:',
      options: [
        'Slaapkamerwand',
        'Badkamer en natte ruimten',
        'Plafond van woonkamer',
        'Trappenhuis',
      ],
      correctIndex: 1,
      explanation:
        'Witpleister is gipsgebonden en **lost op in vocht** → niet voor badkamer, douche, sauna, kelders of andere natte ruimten. Voor badkamer wordt **cement-pleister** of een waterbestendige variant (siliconenhars-pleister) gebruikt. Witpleister is wel ideaal voor droge ruimten (woonkamer, slaapkamer, plafond) — glad oppervlak direct geschikt voor verf of behang.',
    },

    // C.13.5 (3)
    {
      id: 'C13-5-a',
      toetstermCode: 'C.13.5',
      type: 'mc',
      prompt: 'Wat is een **DHG-tegel**?',
      options: [
        'Decoratieve Hand­gemaakte tegel',
        'Dubbel Hard Gebakken tegel',
        'Een natuursteen-imitatie',
        'Donker-Heel-Gevormde tegel',
      ],
      correctIndex: 1,
      explanation:
        'DHG = Dubbel Hard Gebakken. De tegel wordt tweemaal gebakken: de scherf in de eerste bakronde, daarna glazuur in tweede ronde. Resultaat: harder oppervlak en slijtvaster dan gewone keramische (één keer gebakken) tegels. Vooral voor vloer­tegels in winkels, kantoren, ziekenhuizen waar veel verkeer is. Vaak in groot formaat (300×300, 600×600 mm).',
    },
    {
      id: 'C13-5-b',
      toetstermCode: 'C.13.5',
      type: 'mc',
      prompt: 'Wat is een **plavuis**?',
      options: [
        'Een glanzende vloertegel',
        'Niet-geglazuurde gebakken klei-tegel',
        'Een PVC-tegel met houtimitatie',
        'Een betontegel',
      ],
      correctIndex: 1,
      explanation:
        'Plavuizen zijn niet-geglazuurde gebakken klei-tegels — klassiek terracotta-rood of beige van kleur. Warme uitstraling, slijtvast. Voor keukens (klassieke uitvoering), tuinkamers, terrassen. **Aandachtspunt**: poreuze ongeglazuurde oppervlak neemt vlekken op (olie, water, wijn) — daarom moet plavuis worden geïmpregneerd met wax of olie na plaatsing. Periodiek onderhoud (jaarlijks waxen) nodig.',
    },
    {
      id: 'C13-5-c',
      toetstermCode: 'C.13.5',
      type: 'mc',
      prompt: '**Cementtegels** zijn herkenbaar aan:',
      options: [
        'Een patroon dat dwars door de tegel loopt (encaustic)',
        'Hun glanzende glazuurlaag',
        'Hun zachte oppervlak',
        'Hun vaste standaardformaat',
      ],
      correctIndex: 1,
      explanation:
        'Cementtegels zijn niet gebakken — cement + pigment in mal geperst en bij kamertemperatuur uitgehard. Resultaat: **patroon en kleur lopen dwars door de tegel** (door en door slijtvast — geen slijtage van decoratie). Klassieke marokkaanse stijl, encaustic, geometrische patronen. Modern populair voor authentieke uitstraling. Vereist impregneren na plaatsing — cement is poreus en neemt vlekken op.',
    },

    // C.13.6 (3)
    {
      id: 'C13-6-a',
      toetstermCode: 'C.13.6',
      type: 'mc',
      prompt: 'Wat geeft de **R-waarde** (Rutschwerte) van een tegel aan?',
      options: [
        'De warmteweerstand',
        'De antislip-classificatie volgens DIN 51130',
        'De krasvastheid',
        'De prijs per m²',
      ],
      correctIndex: 1,
      explanation:
        'R-waarde = Rutschwerte = antislip-classificatie volgens DIN 51130. Gemeten door een persoon met schoenen op een hellende vloer — hellingshoek waarbij gaat schuiven bepaalt R-klasse. R 9 = 6–10° (binnenruimten droog: woon-/slaapkamer, hal); R 10 = 10–19° (keuken, openbare ruimten, badkamer­vloer); R 11 = 19–27° (parkeergarage, café-keuken); R 12 = 27–35° (levens­middelen­industrie); R 13 = > 35° (slachterij, zware industrie).',
    },
    {
      id: 'C13-6-b',
      toetstermCode: 'C.13.6',
      type: 'mc',
      prompt: 'Wat is de **A/B/C-classificatie** in Rutschwerte?',
      options: [
        'Antislip op natte vloer met blote voeten (A/B/C)',
        'Een prijsklasse voor tegels',
        'Een kwaliteitsklasse van porselein',
        'Een hechtingsclassificatie',
      ],
      correctIndex: 0,
      explanation:
        'A/B/C-classificatie volgens DIN 51097: test met **blote voeten op natte hellende vloer** — voor douche, zwembad, sauna. A = 12–18° (kleedruimte, gang langs zwembad); B = 18–24° (douche, badkamer, zwembad-strand); C = > 24° (hellende zwembad-bodems, voet­baden). Voor doucheruimte is B verplicht volgens Bbl. Voor zorgwoningen badkamers vaak C voor extra veiligheid.',
    },
    {
      id: 'C13-6-c',
      toetstermCode: 'C.13.6',
      type: 'mc',
      prompt: 'Voor een **terras buiten** (regen, sneeuw) is welke R-klasse vereist?',
      options: [
        'R 11',
        'R 9',
        'R 13 (zware industrie)',
        'Er geldt geen vereiste',
      ],
      correctIndex: 0,
      explanation:
        'Voor buitenruimten (terras, oprit, paden) is R 11 aanbevolen vanwege regen, sneeuw, blad­tapijt → glad­heids­risico. R 9 is alleen voor binnen droog. R 12-R 13 zijn voor industrie. Tegels met groef-structuur, gestructureerd oppervlak, of geslepen graniet halen R 11. Voor zwembad-omgeving (zwembad-strand) gebruikt men de A/B/C-classificatie (B vereist).',
    },

    // C.13.7 (3)
    {
      id: 'C13-7-a',
      toetstermCode: 'C.13.7',
      type: 'mc',
      prompt: 'Wat is een **raamdorpelsteen**?',
      options: [
        'Een tegel in de raamopening',
        'Horizontale lijst onder een buitenraam',
        'De rand binnenin van het kozijn',
        'Een sluitsteen boven het raam',
      ],
      correctIndex: 1,
      explanation:
        'Raamdorpelsteen = horizontale lijst onder een buitenraam, **op het metselwerk onder het kozijn**. Functies: (1) hemelwater­afvoer (helling ~5–10° naar voren); (2) bescherming metselwerk onder raam tegen vocht; (3) esthetisch detail. Materialen: gres (klassiek), beton (Holonite, in vele kleuren), natuursteen (hardsteen, kwartsiet), aluminium (modern slank profiel). Met druipneus aan voorkant en opstaande rand aan achterkant tegen kozijn.',
    },
    {
      id: 'C13-7-b',
      toetstermCode: 'C.13.7',
      type: 'mc',
      prompt: 'Wat is het **verschil** tussen vensterbanktegel en raamdorpelsteen?',
      options: [
        'Vensterbanktegel = binnen; raamdorpelsteen = buiten, met druipneus',
        'Het zijn synoniemen',
        'Een vensterbanktegel is van glas',
        'De een is decoratief, de ander functioneel',
      ],
      correctIndex: 0,
      explanation:
        'Belangrijk onderscheid: **vensterbanktegel** = binnen, deel van de binnenkant van het raam, bovenop de borstwering. Gladde keramische tegel, hygiënisch, esthetisch. **Raamdorpelsteen** = buiten, onder het kozijn op het metselwerk. Met druipneus en helling voor afwatering — beschermt gevel tegen vocht. Beide zijn keramische vormen, maar verschillende functies en plaatsen.',
    },
    {
      id: 'C13-7-c',
      toetstermCode: 'C.13.7',
      type: 'mc',
      prompt: 'Wat is een **muurafdektegel**?',
      options: [
        'Een tegel naast de wand',
        'Tegel die boven op een muur ligt',
        'Een binnen-wandtegel',
        'Een speciaal type vloer­tegel',
      ],
      correctIndex: 1,
      explanation:
        'Muurafdektegel (muurafdek­plaat) ligt boven op een muur — beschermt de bovenkant tegen regen, vorst en algen. Toepassing: vrij­staande tuinmuur, borstwering boven dakopstand, pilaster of penant, schoorsteen­top. Materialen: gres, beton, natuursteen, soms metaal. Vorm: dakvormig (puntdak — water naar twee zijden), hellend (water naar één zijde), of vlakke met druipneus aan beide zijden. Voorkomt water in muur → vocht­doorslag.',
    },

    // C.13.8 (4)
    {
      id: 'C13-8-a',
      toetstermCode: 'C.13.8',
      type: 'mc',
      prompt: 'Wat is een belangrijk **nadeel van laminaat­vloer**?',
      options: [
        'Te duur',
        'Niet waterbestendig',
        'Te warm',
        'Onmogelijk te plaatsen',
      ],
      correctIndex: 1,
      explanation:
        'Laminaat heeft een HDF-paneel (kunststof-versterkt houtvezel) onder een decoratieve afdruk en slijtlaag. **Niet waterbestendig** — water tussen panelen veroorzaakt zwelling van de HDF-kern (panelen "wrijven" elkaar omhoog), onomkeerbare schade. **Niet schuurbaar** (slijtlaag is een dunne folie). Voor badkamer: PVC-vloer beter (waterbestendig). Voordeel laminaat: goedkoop, snelle plaatsing, kras-vast.',
    },
    {
      id: 'C13-8-b',
      toetstermCode: 'C.13.8',
      type: 'mc',
      prompt: 'Wat is **linoleum**?',
      options: [
        'Een synthetische kunststof­vloer',
        'Natuurlijk product: linolie + houtmeel + krijt + jute-onderlaag',
        'Een merknaam voor PVC',
        'Een gietvloer',
      ],
      correctIndex: 1,
      explanation:
        'Linoleum is een **natuurlijk product** (vaak verward met PVC, maar fundamenteel anders). Bestaat uit: linolie, houtmeel, krijt, gewoon vlas-vezel-onderlaag. Voor- en nadelen: zeer duurzaam (20–40 j), antibacterieel (linolie is bactericide), antistatisch, recyclebaar. Nadelen: vocht-gevoelig (niet voor badkamer), gele gloed onder sommige verflagen, gevoelig voor vetten. Toepassing: scholen, ziekenhuizen, kantoren.',
    },
    {
      id: 'C13-8-c',
      toetstermCode: 'C.13.8',
      type: 'mc',
      prompt: 'Voor een woning met **vloerverwarming** is welke vloer­afwerking het meest geschikt?',
      options: [
        'Tegels, gietvloer of dun parket — geleiden warmte goed',
        'Dik tapijt, voor het warmtebehoud',
        'Massief parket van 22 mm dik',
        'Onafgewerkt beton',
      ],
      correctIndex: 0,
      explanation:
        'Vloerverwarming vraagt **warmtegeleidende vloer­afwerking** voor efficiënte warmte­overdracht: keramische tegels (uitstekend geleidend), gietvloer (epoxy/PU), dun parket (max. 15 mm dik, klik-of verlijmd), specifieke PVC-LVT (gespecialiseerd). **Dik tapijt** of dikke parket­vloer (massief 22 mm) isoleren te veel — vloerverwarming moet harder werken, kost meer energie, comfort verlaagd. Bij keuze voor vloerverwarming is het belangrijk de juiste vloer­afwerking te plannen.',
    },
    {
      id: 'C13-8-d',
      toetstermCode: 'C.13.8',
      type: 'mc',
      prompt: 'Wat is een **giet­vloer**?',
      options: [
        'Vloeibare hars uitgegoten tot een naadloze vloer',
        'Een gestorte betonvloer',
        'Een PVC-vloer met klikverbinding',
        'Een laminaatvloer',
      ],
      correctIndex: 0,
      explanation:
        'Giet­vloer = vloeibare hars (epoxy, polyurethaan of cement-gebaseerd) uitgegoten en uitgehard tot één naadloze vloer. Hoge investering (€ 80–200/m² incl. plaatsing) maar zeer duurzaam (25+ jaar) en modern industrieel uitstraling. Voordelen: naadloos (geen vuilvang in voegen), elegant, mogelijk in vele kleuren. Nadelen: hoge kosten, technisch lastige installatie (door specialist), herstel bij beschadiging moeilijk. Toepassing: moderne woning­woonkamer, ziekenhuizen, industriële ruimten.',
    },

    // C.13.9 (3)
    {
      id: 'C13-9-a',
      toetstermCode: 'C.13.9',
      type: 'mc',
      prompt: 'Wat is een **dilatatie­voeg** in tegelwerk?',
      options: [
        'Een flexibele voeg waarin tegelwerk kan bewegen',
        'Een gewone cementvoeg',
        'Een decoratieve sierraadvoeg',
        'Een voeg met antibacteriële behandeling',
      ],
      correctIndex: 0,
      explanation:
        'Dilatatie­voeg = uitzettings­voeg waar tegelwerk kan bewegen zonder te scheuren. Materiaal: flexibele kit (silicone of acrylaat) of dilatatie­profielen. Plaats: (1) aansluiting wand-vloer (overgang verschillende richtingen); (2) binnenhoeken van wanden; (3) op grote oppervlakken elke ~5 m; (4) rondom doorvoer-leidingen; (5) boven vloerverwarming (uitzetting). Zonder dilatatie ontstaan **pop-outs** (tegels die los springen) of scheuren in tegels.',
    },
    {
      id: 'C13-9-b',
      toetstermCode: 'C.13.9',
      type: 'mc',
      prompt: 'Een tegel klinkt **hol** bij erop tikken. Wat is de diagnose?',
      options: [
        'Normaal',
        'Tegel heeft geen volledige hechting aan ondergrond',
        'Tegel is verkeerd geplakt op een houten ondergrond',
        'Tegel is gebroken',
      ],
      correctIndex: 1,
      explanation:
        'Hol klinkende tegel = tegellijm heeft geen volledige hechting → ruimte tussen tegel en ondergrond. Oorzaken: (1) ondergrond niet schoongemaakt voor plaatsing; (2) te dunne lijmlaag of niet vol gevuld; (3) vocht achter tegel heeft lijm aangetast. **Risico**: bij belasting kan tegel breken of loskomen. Aanpak: tegel verwijderen (kan met voegfrees + tegelhaak), ondergrond schoonmaken, opnieuw plaatsen met voldoende verse lijm.',
    },
    {
      id: 'C13-9-c',
      toetstermCode: 'C.13.9',
      type: 'mc',
      prompt: 'Wanneer moet **siliconenkit** in een badkamer worden vervangen?',
      options: [
        'Elke 5–8 jaar; de kit verkleurt en laat los',
        'Nooit — kit gaat eeuwig mee',
        'Pas als alle kit van de wand is gevallen',
        'Elke maand',
      ],
      correctIndex: 0,
      explanation:
        'Siliconenkit in natte ruimten heeft een levensduur van ~5–8 jaar. Daarna: verkleurt (geel oder zwart door schimmel), wordt bros, kan losbarsten door uitzetting (warmte/koude) en vocht. Tijdige vervanging voorkomt vochtdoorslag naar onderliggende constructie. Aanpak: oude kit verwijderen met kit-mes (volledig schoon!), oppervlak ontvetten + drogen, nieuwe **fungicide sanitair siliconenkit** (schimmel­werend) aanbrengen, gladstrijken met spatel of natte vinger. Niet gewone keukenkit gebruiken.',
    },
  ],

  terms: [
    {
      term: 'Stucwerk',
      definition:
        'Mortel­afwerking op metsel- of plaatwerk; verschilt in dikte en korrelgrootte (pleister, spack).',
    },
    {
      term: 'Saus / sausverf',
      definition:
        'Dunne kalk- of latexverf op stucwerk — basis voor verder behang of verf.',
    },
    {
      term: 'Behang',
      definition:
        'Wand­bekleding van papier of vlies; vlies behang is dimensie­stabiel en eenvoudiger te verwijderen.',
    },
    {
      term: 'Glasvezelbehang',
      definition:
        'Behang van glasvezel — versterkt, scheur-overbruggend, beschilderbaar.',
    },
    {
      term: 'Voorstrijk',
      definition:
        'Eerste laag op nieuwe ondergrond — bindt poeder, gelijkt zuiging en hecht aan latere verf.',
    },
    {
      term: 'Acryl­verf',
      definition:
        'Watergedragen verf op basis van acryl­hars — geurarm, snel droog, milieuvriendelijker dan alkydverf.',
    },
    {
      term: 'Alkyd­verf',
      definition:
        'Olie­gedragen verf — taaier, glanzender; trager droog en hogere VOS-uitstoot, terrugloop in gebruik.',
    },
    {
      term: 'Plafond­tegel',
      definition:
        'Geluid­absorberende plaat (Rockfon, Armstrong) in T-rail systeemplafond — utiliteit­standaard.',
    },
    {
      term: 'Systeemplafond',
      definition:
        'Verlaagd plafond met dragend rasterwerk en wisselbare tegels — toegang tot leidingen erboven.',
    },
    {
      term: 'Akoestisch plafond',
      definition:
        'Tegel met perforatie of speciale vezelopbouw — vermindert nagalmtijd in ruimten.',
    },
    {
      term: 'PVC-vloer / -strook',
      definition:
        'Soepele kunststof vloerafwerking; vochtbestendig, geluid­dempend, geschikt voor natte ruimtes en zorg.',
    },
    {
      term: 'Laminaat',
      definition:
        'Klikvloer met decor­toplaag op HDF-kern — goedkoop, niet waterdicht zonder behandeling.',
    },
    {
      term: 'PVC-klik (LVT)',
      definition:
        'Luxury Vinyl Tile — hoogwaardig PVC met klik­systeem, water­bestendig, populair.',
    },
    {
      term: 'Parket',
      definition:
        'Massief houten vloer of meerlaags hout­decoratie — duurzaam, krast en kan opnieuw geschuurd worden.',
    },
    {
      term: 'Egaliseren',
      definition:
        'Vlak maken van de ondergrond met egaline (zelfvloeiende mortel) vóór de definitieve vloerafwerking.',
    },
  ],

  games: [
    {
      id: 'C13-gapfill-1', type: 'gapfill',
      title: 'Afwerking + verf',
      text:
        'Een verfsysteem bestaat uit {{grondverf}}, voorlak en {{aflak}}. ' +
        'De eerste, ruwe pleisterlaag op metselwerk heet de {{raaplaag}}. Daarna komt {{witpleister}} (gips) voor droge ruimten. ' +
        'Antislip in tegels wordt aangeduid met R 9 tot R 13 — een badkamer­vloer eist minimaal {{R 10}}.',
      distractors: ['eindlaag', 'spachtelputz', 'cementpleister', 'R 12'],
    },
    {
      id: 'C13-sort-1', type: 'sort',
      title: 'Sorteer wand­afwerkingen',
      categories: ['Pleisterwerk', 'Tegelwerk', 'Decoratief / behangwerk'],
      items: [
        { label: 'Raaplaag', category: 'Pleisterwerk' },
        { label: 'Witpleister (gips)', category: 'Pleisterwerk' },
        { label: 'Spachtelputz', category: 'Pleisterwerk' },
        { label: 'Keramische tegel', category: 'Tegelwerk' },
        { label: 'DHG-tegel (dubbel hard gebakken)', category: 'Tegelwerk' },
        { label: 'Plavuis', category: 'Tegelwerk' },
        { label: 'Glasvliesbehang', category: 'Decoratief / behangwerk' },
        { label: 'Vinyl-behang', category: 'Decoratief / behangwerk' },
      ],
    },
    {
      id: 'C13-matching-1', type: 'matching',
      title: 'Vloer­afwerkingen',
      pairs: [
        { left: 'Parket', right: 'Massief hout, schuurbaar, gevoelig voor vocht' },
        { left: 'Laminaat', right: 'HDF + decoratieve folie — niet waterbestendig' },
        { left: 'PVC-vloer', right: 'Kunststof, waterbestendig, in stroken/tegels' },
        { left: 'Linoleum', right: 'Natuurproduct: linolie + houtmeel + jute' },
        { left: 'Gietvloer', right: 'Vloeibare hars uitgegoten — naadloze afwerking' },
        { left: 'Tegel', right: 'Keramisch, hard, koud zonder vloerverwarming' },
      ],
    },
  ],
}
