import type { Topic } from '../types/content'

const FIG = '/figs/B_6'
const SRC = 'Lesboek hfd. 14'
const SRC_V = 'Lesboek hfd. 15'

export const B_6_beton: Topic = {
  code: 'B.6',
  section: 'B',
  title: 'Beton',
  chapterRef: 'Lesboek hoofdstukken 14 en 15',
  blurb:
    'Samenstelling en eigenschappen van beton, wapening en betonstaal, betondekking en betonkwaliteit (sterkteklassen, milieuklassen), betonschade (betonrot, craquelé, grindnesten), in-werk gestorte vloervormen en de belangrijkste prefab beton-elementen (kanaalplaat, breedplaat, combinatievloer, ribben, TT, kolommen, wanden).',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · Samenstelling en eigenschappen van beton',
      toetstermCodes: ['B.6.2', 'B.6.4'],
      body: `
**Beton** is een mengsel van **cement** (bindmiddel) + **zand en grind** (toeslagstoffen) + **water**. Vers heet het *betonspecie* of *betonmortel*; na uitharden is het beton. Voor *gewapend* beton komt daar nog **wapeningsstaal** bij.

De korrelpakking is zo gekozen dat zand de ruimten tussen het grind vult; het cement omhult elke korrel en verbindt ze chemisch. Vers beton mag niet uitdrogen — afdekken met folie, bouwzeil, of bevochtigen.

**Cement + water = chemische reactie (verstening)**, niet *drogen*. Daarom hardt beton ook onder water uit en wordt het sterker naarmate het langer in een vochtig milieu blijft.

**Eigenschappen**:
- *Druksterkte* zeer hoog → beton kan grote drukkrachten dragen
- *Treksterkte* circa **10× lager** → trekzones moeten worden gewapend
- Bros (geen rek voor breuk)
- Brandveilig — vrijwel geen vormverandering bij brand
- Stijf en schokbestendig
- Zwaar: ~2.400 kg/m³ (normaal grindbeton) — zware fundering nodig
- Slecht warmte-isolerend, goed luchtgeluid-isolerend
- Gevoelig voor zuren, zwavel; tast koper/lood/aluminium/zink aan bij direct contact

**Soorten beton**:
- *Zwaar beton* ~2.800 kg/m³ (basalt/erts) — stralingsafscherming
- *Normaal/grindbeton* ~2.400 kg/m³ — standaard constructiebeton
- *Lichtbeton* < 2.000 kg/m³ (bims, kleikorrels, perliet) — isolerend

Naar verwerking: *stampbeton, gietbeton, trilbeton, schokbeton (fabriek), pompbeton (truckmixer met pomp)*.

Naar wapening: *ongewapend, gewapend, voorgespannen, nagespannen, vezelbeton* (staal- of polypropyleenvezels).

**Toepassingen van (gewapend) beton** (B.6.4):
- Funderingen (poeren, balken, plaat, paalkoppen)
- Kelders en kelderwanden
- Vloeren (begane grond én verdieping; zowel in-het-werk als prefab)
- Kolommen en wanden (woningbouw, utiliteit, parkeergarages)
- Lateien, balken en draagconstructies
- Trappen (in-het-werk of prefab)
- Gevelelementen, balkons, galerijen
- Civiel: bruggen, viaducten, tunnels, geluidswallen, rioolbuizen
      `.trim(),
      images: [
        {
          src: `${FIG}/kegel-abrahams.jpg`,
          caption: 'Kegel van Abrahams (afgeknotte kegel 300×100×200 mm) — bepaalt de zetmaat (slump) en daarmee de consistentieklasse van de verse specie.',
          source: SRC,
          width: 'md',
        },
        {
          src: `${FIG}/trilnaald.jpg`,
          caption: 'Verdichten van betonspecie met een trilnaald — voorkomt holten en grindnesten. Te lang trillen → ontmenging.',
          source: SRC,
          width: 'md',
        },
      ],
    },

    {
      heading: '2 · Wapening: krachtsverloop en plaats van het staal',
      toetstermCodes: ['B.6.3'],
      body: `
Beton is sterk in **druk** maar zwak in **trek** (treksterkte ~10× lager). Bij een belasting buigt een balk door: aan de **bovenkant** ontstaat **drukspanning**, aan de **onderkant** ontstaat **trekspanning**. In een ongewapende betonbalk zou de onderkant scheuren.

Daarom wordt **wapeningsstaal in de trekzone** ingestort. De vuistregel: *staal volgt de trekkracht*.

**Praktijkvoorbeelden — waar zit de wapening?**

- **Vrij opgelegde balk / vloerveld** (alleen aan de uiteinden ondersteund): trek aan de **onderkant** in het midden van het veld → **hoofdwapening onderin**.
- **Doorgaande balk over meerdere steunpunten**: in het veld trek aan de onderkant, bóven de tussensteunpunten juist trek aan de **bovenkant** ('moment wisselt van teken') → wapening loopt door, deels naar boven omhoog.
- **Console / uitkragende vloer** (balkon, galerij): trek aan de **bovenkant** bij de inklemming → **hoofdwapening bovenin**, dicht onder het oppervlak.
- **Kolom** (drukbelasting): wapening voor knik-stabiliteit en voor onbedoelde momenten → verticale staven met **beugels** om de hele omtrek.
- **Schuifkracht bij oplegging**: bij elke balk zijn er **beugels** of *opgebogen staven* nodig om de schuine trekspanning (de 'schuiflijnen') op te vangen.

**Waarom werkt staal in beton zo goed?**
1. Vrijwel **gelijke lineaire uitzettingscoëfficiënt** van staal en beton → bij temperatuurschommelingen komen er geen extra spanningen tussen beide.
2. **Goede hechting** (geribbeld FeB 500 grijpt mechanisch vast).
3. Beton is **basisch** (pH > 12): staat passiveert het staal → roest niet, mits er **voldoende betondekking** is.

**Betonstaal — aanduidingen**:
- **FeB 220** — glad, alleen voor lichtere wapening (steeds zeldzamer)
- **FeB 500** — geribbeld/geprofileerd, standaard
- Lettercodes: *HW* (warm gewalst), *HK* (koud vervormd), *L* (lasbaar), *N* (gepuntlast net)
- Diameters: 6, 8, 12, 16, 20, 25, 32, 40 mm

**Voor- en nagespannen beton** (toepassing van trekstaal onder hoge spanning):
- *Voorgespannen*: staaldraden eerst onder trekspanning, daarna beton eromheen gestort; bij ontspannen drukt het krimpende staal het beton voor → **permanente drukvoorspanning** in het beton. Bij belasting blijft de constructie langer in druk → minder doorbuiging, slankere balken.
- *Nagespannen*: beton storten met ingestorte holle kokers, na uitharden de strengen erdoor trekken, aanspannen en injecteren met fijne mortel.
- **Voorspanstaal heet FeP**, treksterkten tot ~2.000 N/mm².
      `.trim(),
      images: [
        {
          src: `${FIG}/scheurvorming.jpg`,
          caption: 'Scheurvorming in een ongewapende betonconstructie: druk boven, trek onder. De wapening hoort in de trekzone.',
          source: SRC,
          width: 'md',
        },
        {
          src: `${FIG}/betonstaal-feb500.jpg`,
          caption: 'Geribbeld betonstaal FeB 500 — de ribben zorgen voor mechanische hechting met het beton.',
          source: SRC,
          width: 'md',
        },
        {
          src: '/figs/fotos/betonwapening.jpg',
          caption:
            'Geribbeld wapeningsstaal in de praktijk. De ribben grijpen in het beton; het staal vangt de trekkrachten op (beton kan vrijwel geen trek opnemen).',
          source: 'Foto: W.carter · Wikimedia Commons (CC BY-SA 4.0)',
          width: 'md',
        },
      ],
    },

    {
      heading: '3 · Betondekking en betonkwaliteit',
      toetstermCodes: ['B.6.5'],
      body: `
Twee termen die op het examen vaak in één vraag voorkomen:

### Betondekking
**Betondekking** = de **dikte van de betonlaag tussen het buitenoppervlak en de wapening**. Water dringt circa 10 mm per jaar in normaal beton. Te weinig dekking → vocht en zuurstof bereiken het staal → **roest** → het beton springt af (= **betonrot**, §4).

Richtwaarden:
- Binnenwanden: **min. 15 mm**
- Buitenbeton: **20–35 mm** afhankelijk van milieuklasse
- Kolommen in agressief milieu (industrie, zout): **tot 40 mm**

Hoe wordt de dekking gegarandeerd? Met **afstandhouders** ('toffees') van mortel of kunststof tussen de wapening en de bekisting; deze blijven in het werk zitten.

### Betonkwaliteit
**Betonkwaliteit** = de **sterkteklasse** + de **milieuklasse** waarin het beton mag worden toegepast. Vastgelegd in **NEN-EN 206-1**.

**Sterkteklassen** — aangeduid als **C** (Concrete) + cilinderdruksterkte / kubusdruksterkte in N/mm²:
- *C 20/25* — licht constructiewerk
- *C 25/30* — standaard woningbouw, vloeren
- *C 30/37* — utiliteit, kolommen
- *C 35/45* en hoger — voorgespannen beton, civiel

De **kubusdruksterkte** wordt bepaald op een proefkubus van 150 mm³ die 28 dagen onder water bij 20 °C heeft uitgehard en daarna kapot wordt gedrukt. Niet-destructief: *schiethamer van Schmidt* of *ultrasone meting*.

**Milieuklassen** (X-codes) — geven aan tegen welke aantasting het beton bestand moet zijn:
- **X0** — geen risico (binnen, droog)
- **XC1–XC4** — carbonatatie (binnen vochtig tot buiten)
- **XD/XS** — chloriden (strooizout, zeewater)
- **XF** — vorst/dooi
- **XA1–XA3** — chemische aantasting, oplopend van licht tot sterk

In totaal **18 milieuklassen** in zes hoofdgroepen. De combinatie bepaalt mede de **minimaal voorgeschreven betondekking** en de **watercementfactor**.

### Watercementfactor (w.c.f.)
Verhouding **gewicht water : gewicht cement**. Voor uitsluitend de chemische reactie is 0,2–0,25 voldoende; in de praktijk 0,5–0,6 voor verwerkbaarheid. **Lagere w.c.f. → sterker, dichter, duurzamer beton**. Verhoging van 0,3 naar 0,7 halveert de druksterkte.

### Mengverhoudingen (volume-delen)
- **1 : 2 : 3** (cement : zand : grind) — standaard constructiebeton
- **1 : 3 : 5** — werkvloer, ondergeschikt werk
- **1 : 1½ : 2½** — waterdichte kelderwanden
      `.trim(),
    },

    {
      heading: '4 · Betonschade: betonrot, craquelé en grindnesten',
      toetstermCodes: ['B.6.6'],
      body: `
Drie schadebeelden komen op het examen terug — leer **oorzaak én voorkoming** per type.

### Betonrot
**Wat zie je?** Roestbruine vlekken op het oppervlak, later het **afspringen** van betonlagen waarbij geroeste wapening zichtbaar wordt ('koek-erop' afgeslagen). Vooral in balkons, galerijen, betonnen luifels en oude vloersystemen.

**Oorzaak**: te **geringe betondekking** → vocht/zuurstof bereiken de wapening → staal roest → roest neemt 6–8× zoveel volume in → drukt het beton kapot van binnenuit. Versnelt door:
- Chloriden (strooizout, zeelucht, fout toeslagmiddel — beruchte **Kwaaitaalvloeren** uit jaren '60–'80 met te veel calciumchloride)
- Carbonatatie (CO₂ verlaagt de pH; passivering valt weg)
- Vorst-dooi-cycli

**Voorkomen**:
- Voldoende **betondekking** (gebruik afstandhouders, controleer vóór storten)
- Juiste **betonkwaliteit** (sterkte + milieuklasse) voor de toepassing
- Lage **watercementfactor** → dichter beton
- Goede afwatering, geen plassen op horizontale vlakken
- Voor balkons: koudebrugonderbreking met *isokorf* — minder condens aan de onderkant
- Bestaande constructie: **hydrofoberen** (water-afstotend impregneren); inspectie bij verdachte series

**Herstellen**: aangetast beton **ruim uithakken**, roest van wapening verwijderen of vervangen, **spuitmortel** (met polypropyleenvezels) aanbrengen, daarna afwerken/schilderen.

### Craquelé
**Wat zie je?** Een fijn **netwerk van haarscheurtjes** aan het betonoppervlak (lijkt op gebarsten lakwerk of een uitgedroogde modderpoel).

**Oorzaak**: **te snelle uitdroging** van de bovenste mm van vers beton — de buitenste laag krimpt sneller dan de massa eronder. Komt vooral voor bij:
- Storten in zon, wind of warm weer zonder afdekking
- Te natte specie (hoge w.c.f.)
- Geen nabehandeling (geen folie, geen curing compound, geen besproeien)

**Voorkomen**:
- Vers beton **afdekken** met plastic, bouwzeil of isolatiedekens
- Regelmatig **natmaken** of **curing compound** (verdampingsremmer)
- Niet storten in extreme hitte/wind
- Lagere w.c.f., goed gecomponeerd mengsel

Craquelé is meestal **esthetisch**, geen direct constructief gevaar — maar het is wel een toegangsweg voor vocht naar dieper liggende wapening.

### Grindnesten
**Wat zie je?** Lokale plekken in het beton waar je grind ziet zonder bindmortel ertussen — het lijkt op samengedrukte grindkorrels.

**Oorzaak**: **ontmenging** of **slechte verdichting** tijdens het storten:
- Te **lang trillen** met de trilnaald → grind zakt naar onderen, fijne specie blijft boven
- Te dichte wapening waar de specie niet doorheen kan
- Te droge specie die niet goed vloeit
- Storten van grote hoogte (vrije val splitst grind en specie)

**Voorkomen**:
- Storten in **lagen** van 30–50 cm, niet vanaf grote hoogte (gebruik een **stortkoker**)
- **Gelijkmatig** trillen — niet op één plek blijven
- Juiste consistentie (kegel van Abrahams)
- Voldoende ruimte tussen wapeningsstaven
- Goede mengverhouding (1:2:3 of equivalent)

**Herstellen**: uithakken, grondig schoonmaken, opvullen met fijne reparatiemortel.
      `.trim(),
      images: [
        {
          src: `${FIG}/betonrot.jpg`,
          caption: 'Betonrot — geringe dekking, wapening roest, beton springt af. Herstel met uithakken + spuitmortel + vezels.',
          source: SRC,
          width: 'md',
        },
      ],
    },

    {
      heading: '5 · In-het-werk gestorte beton: bijzondere vloervormen',
      toetstermCodes: ['B.6.7'],
      body: `
Beton kan op de bouwplaats in een **bekisting** worden gestort. Bekistingmateriaal: vurenhout of **betonplex** (multiplex met fenolharsdeklaag, glad oppervlak); voor herhaalbouw vaak stalen mallen (**tunnelbekisting**). Voor delen die niet ontkist kunnen worden (funderingsbalken in de grond) wordt **verloren bekisting** van polystyreen gebruikt.

Vier **vloervormen die in-het-werk worden gestort of gegoten** (B.6.7 — leer ze met naam herkennen):

### Paddenstoelvloer
Een **plaatvloer zonder balken**, waarbij de **kolommen aan de bovenkant verbreed** zijn tot een paddenstoel-/champignonkop. Die brede kop verspreidt de geconcentreerde puntlast in de kolom over een grote vloeroppervlakte → schuifsterkte en stuiklast worden opgevangen zonder onderslagbalken.

**Voordelen**: vlak plafond, vrije indeling, geen verlaagde balken in de weg. **Toepassing**: parkeergarages, magazijnen, fabriekshallen, grote kantoorvloeren.

### Breedplaatvloer (bekistingsplaatvloer)
Een **prefab** dunne betonplaat (50 mm) met de onderwapening al ingestort dient als **bekisting + onderwapening**. Op de bouwplaats wordt daar in-het-werk een **druklaag met netwapening** overheen gestort → vormt één samenwerkend geheel. Strikt genomen *hybride*: prefab bekisting + in-werk druklaag.

**Voordelen**: glad plafond (de onderzijde van de prefab plaat), korte montagetijd. **Nadelen**: tijdens uitharding zwak — veel **supporten** nodig; V-naden van ~2,4 m blijven zichtbaar in het plafond. Niet als beganegrondvloer (lastig te ondersteunen vanuit lage kruipruimte).

### Zwaluwstaartplaatvloer
**Geprofileerde verzinkte staalplaat** met **zwaluwstaart-uitsparingen** wordt op een (houten of stalen) balklaag of als bekisting gelegd; de uitsparingen geven de in-werk gestorte druklaag mechanisch grip op de plaat. Voorkomt doorbuiging en samenwerken staal-beton.

**Toepassing**: renovaties, kleine overspanningen, lichte tussenvloeren — minder constructief, vaak met houtskelet of staalskelet.

### Dekvloer
Een **niet-dragende afwerklaag** boven op een dragende ondervloer (kanaalplaat, beton, breedplaat). Vlakt oneffenheden uit en geeft een hechtende of zwevende basis voor de afwerking (tegels, parket, gietvloer).

Typen dekvloer:
- *Cementdekvloer* — meest gebruikt, 40–60 mm
- *Anhydrietvloer* — gips-gebonden, zelfnivellerend, alleen binnen droog
- *Zwevende dekvloer* — op een isolatiedeken voor **contactgeluidisolatie**

In nieuwbouw is een zwevende cement- of anhydrietdekvloer op PS- of glaswol-isolatie standaard voor de geluidsisolatie tussen verdiepingen.
      `.trim(),
      images: [
        {
          src: `${FIG}/ankerrail.jpg`,
          caption: 'Ankerrail met hamerkopbout — meegestort in beton voor latere bevestigingen. Wordt vaak bij in-werk gestorte kolommen en wanden toegepast.',
          source: SRC,
          width: 'md',
        },
      ],
    },

    {
      heading: '6 · Prefab beton: elementen, montage, voor- en nadelen',
      toetstermCodes: ['B.6.1', 'B.6.8', 'B.6.9'],
      body: `
**Prefab beton** = onder fabriekscondities geproduceerde elementen die kant-en-klaar op de bouwplaats worden gemonteerd. Wapening, vorm en sterkte zijn fabrieksmatig geborgd; meestal **voorgespannen**.

### Prefab vloer-elementen (leer ze herkennen — B.6.1)

- **Balkenvloer** — naast elkaar gelegde **voorgespannen holle betonbalken**; tussenruimten met beton volgegoten; afgewerkt met **druklaag** van min. 40 mm voor lastverdeling. Opleg ≥ 100 mm.
- **Kanaalplaatvloer** — *de* standaard verdiepingsvloer in NL: breed 1,2 m, lengte tot 16 m, dik 120–400 mm, **kanalen in lengterichting** voor gewichtsbesparing. Kelknaden met beton volgegoten. Bij trapgaten een **raveelconstructie** met hoekstalen raveelbalk.
- **Kwaaitaalvloer** — schaaldelen uit jaren '60–'80, vooral als beganegrondvloer in eengezinswoningen. Een berucht deel van de productie bevat te veel **calciumchloride** in de wapening → **betonrot**. Bij aankoop van een woning uit die periode is funderings-/vloerinspectie standaard.
- **Breedplaatvloer (bekistingsplaatvloer)** — zie §5: prefab dunne plaat + in-werk druklaag. Hybride: prefab onderzijde, in-werk afwerking.
- **Ribbenvloer / ribcassettevloer** — omgekeerde U- of W-vorm; hoge stijfheid voor relatief weinig materiaal. Vooral als beganegrondvloer met isolatie aan de onderzijde.
- **PS combinatievloer** — *voorgespannen T-liggers* met daartussen **polystyreenschuim vulelementen** (de PS draagt niet, maar isoleert). Op de bouwplaats afgegoten met druklaag + kruisnetwapening. **Standaard beganegrondvloer in woningbouw** door uitstekende isolatiewaarde.
- **Balken- en broodjesvloer** — variant van de combinatievloer: betonbalken met holle betonnen of keramische 'broodjes' ertussen, daarna afgegoten. Klassieker, minder isolerend dan PS-combi.
- **Baksteenmontagevloer** — voorgespannen **staltonlatei**-liggers met daartussen **gebakken vulstukken** van keramiek (lijken op holle baksteen); afgegoten met een dunne druklaag. Goed te stukadoren — ribbels in de stenen bevorderen de hechting. Wordt nog gebruikt in renovatie en bij eisen aan akoestiek.
- **TT-vloer** — voorgespannen element met **twee neergaande T-balkjes** onder een dunne plaat; lijkt op twee 'T' naast elkaar (vandaar TT). Voor grote overspanningen en hoge belastingen — **parkeergarages, kantoren, industrie**, niet voor woningbouw.

### Prefab andere elementen (B.6.1)
**Kolommen** — vierkant, rond of veelhoekig, vol of hol; met ingestorte hijsogen en aansluitwapening (instekers/uitstekers) voor verbinding met liggers en vloeren.
**Wanden** — voor- of nagespannen wandelementen, vaak met sandwich-isolatie (binnenblad + isolatie + buitenblad in één element).
**Gevelelementen** — vaak met sierbeton-afwerking, plus kozijnen.
**Funderingsbalken, lateien, trappen, balkons**.

### Montage van prefab beton-elementen (B.6.8)
Twee hoofdmethoden voor de verbinding:

1. **Opleggen + aanstorten** — typisch voor **vloeren**: elementen worden opgelegd op een oplegrubber (CR/neopreen) of in een laag mortel; de wapening of strippen steken uit en worden ter plekke aan elkaar gelast of via **koppelankers** verbonden; de naden worden met fijne specie aangestort tot één geheel.
2. **Tand- en nokkenoplegging** — typisch voor **gevel- en wandelementen**: in het element zit een uitstekende **nok** of **tand** die in een corresponderende uitsparing van het draagstructuur valt; vergrendelt en draagt. Naden worden gewapend aangestort of met purschuim + voegafdichting (kit) gevuld.

Op de bouwplaats: kraan tilt het element aan ingestorte hijsogen, de monteurs geleiden het via afstandshouders/leiboutjes op zijn plek. Een prefab-stelplan en montageschema (uitvoeringstekeningen) leiden de logistiek.

### Voor- en nadelen van prefab-bouw (B.6.9)

**Voordelen**:
- **Hogere kwaliteit** — fabriekscondities, betere maatvastheid, betere oppervlakte-afwerking
- **Snellere bouwtijd** — vrijwel direct stapelbaar, weinig uithardingstijd op de bouwplaats
- **Minder vochtinbreng** — element komt droog aan, geen 'bouwvocht' (i.t.t. in-werk gestort)
- **Minder bouwplaats-overlast** — weinig hak-, zaag- en stortwerk; minder bouwafval ter plekke
- **Onafhankelijk van weer** — fabricage in hal, montage kan ook bij lage temperatuur (verharding speelt op de plaats geen rol)
- **Voorspanning** geeft slankere, lichtere constructies
- **Industrieel herhaalbaar** → kostenvoordeel bij seriebouw

**Nadelen**:
- **Minder vormvrijheid** — werkt het best bij modulaire/repeterende ontwerpen
- **Transport en kraancapaciteit** bepalen de maximale afmetingen — lange/zware elementen vergen speciale combinaties en kraanopstelplaatsen
- **Naden en aansluitingen** zijn kwetsbaar — koudebruggen, lekkages, geluidslekken als ze niet zorgvuldig worden afgewerkt
- **Aanpasbaarheid laag** — wijzigen of doorbreken na oplevering is moeilijk (vooral bij wandelementen)
- **Tolerantie krapper** — fouten in maatvoering bij fundering of staalskelet zijn op de bouwplaats moeilijk te corrigeren
- **Initiële investering in mallen** — pas rendabel bij voldoende seriegrootte
      `.trim(),
      images: [
        {
          src: `${FIG}/balkenvloer.jpg`,
          caption: 'Balkenvloer met druklaag — voorgespannen holle betonbalken, tussenruimten en druklaag in-werk afgegoten.',
          source: SRC_V,
          width: 'md',
        },
        {
          src: `${FIG}/kanaalplaatvloer.jpg`,
          caption: 'Kanaalplaatvloer (bovenaanzicht) — standaardbreedte 1,2 m, lengte tot 16 m. Bij trapgaten een raveelconstructie met hoekstalen raveelbalk.',
          source: SRC_V,
          width: 'md',
        },
        {
          src: `${FIG}/kanaalplaat-doorsnede.jpg`,
          caption: 'Doorsnede kanaalplaatvloer — de lengtekanalen besparen gewicht; kelkvoegen worden met beton afgegoten.',
          source: SRC_V,
          width: 'md',
        },
        {
          src: `${FIG}/combinatievloer.jpg`,
          caption: 'PS combinatievloer (broodjesvloer) — voorgespannen T-liggers met PS-vulelementen + kruisnetwapening in de druklaag. Standaard beganegrondvloer in woningbouw.',
          source: SRC_V,
          width: 'md',
        },
        {
          src: `${FIG}/breedplaatvloer.jpg`,
          caption: 'Breedplaatvloer met supporten tijdens uitharding — prefab onderzijde + in-werk druklaag.',
          source: SRC_V,
          width: 'md',
        },
        {
          src: `${FIG}/ribbenvloer.jpg`,
          caption: 'Ribbenvloer met isolatie aan de onderzijde — hoge stijfheid door de omgekeerde U/W-vorm.',
          source: SRC_V,
          width: 'md',
        },
        {
          src: `${FIG}/prefab-aansluiting.jpg`,
          caption: 'Aansluiting van prefab-elementen — opleggen + aanstorten of nok/tand-oplegging. Wapening of koppelankers verbinden het tot één geheel.',
          source: SRC,
          width: 'md',
        },
      ],
    },
  ],

  toetstermen: [
    {
      code: 'B.6.1',
      text: 'Benoemt de geprefabriceerde elementen van (gewapend) beton: prefab balken, vloeren (kanaalplaat, kwaaitaal, breedplaat, ribben, PS combinatie, balken-/broodjes, baksteenmontage, TT), kolommen en wanden.',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'B.6.2',
      text: 'Verwoordt de samenstelling van gewapend beton: zand, cement, grind, water, wapeningsstaal.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
    {
      code: 'B.6.3',
      text: 'Legt de relatie tussen optredende kracht en de plaats van wapeningsstaal uit.',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
    {
      code: 'B.6.4',
      text: 'Licht een aantal toepassingsmogelijkheden van (gewapend) beton toe.',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
    {
      code: 'B.6.5',
      text: 'Licht de termen betondekking en betonkwaliteit toe.',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
    {
      code: 'B.6.6',
      text: 'Verklaart de oorzaak van de betonschades betonrot, craquelé en grindnesten en legt uit hoe deze voorkomen kunnen worden.',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
    {
      code: 'B.6.7',
      text: 'Benoemt de bijzondere in-het-werk gestorte en gegoten vloervormen: paddenstoelvloer, breedplaatvloer, zwaluwstaartplaatvloer en dekvloer.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
    {
      code: 'B.6.8',
      text: 'Licht toe op welke wijze prefab beton (vloer/gevel) elementen gemonteerd worden.',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
    {
      code: 'B.6.9',
      text: 'Legt uit wat de voor- en nadelen zijn van een gebouw met (vloer/gevel) prefab-elementen.',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
  ],

  questions: [
    // === B.6.1 — Prefab elementen herkennen (5) ===
    {
      id: 'B6-1-a',
      toetstermCode: 'B.6.1',
      type: 'mc',
      prompt:
        'Welke prefab vloer is standaard de beganegrondvloer in moderne woningbouw vanwege de uitstekende isolatiewaarde?',
      options: [
        'Kanaalplaatvloer',
        'PS-combinatievloer',
        'Balkenvloer',
        'TT-vloer',
      ],
      correctIndex: 1,
      explanation:
        'De PS combinatievloer heeft voorgespannen T-liggers met polystyreenschuim vulelementen daartussen. Het PS-schuim draagt niet, maar isoleert uitstekend — daardoor is dit de standaard beganegrondvloer.',
    },
    {
      id: 'B6-1-b',
      toetstermCode: 'B.6.1',
      type: 'mc',
      prompt:
        'Wat is een TT-vloer?',
      options: [
        'Een dunne breedplaatvloer met netwapening',
        'Een voorgespannen vloer met twee T-balkjes onder een plaat',
        'Een PS-combinatievloer met geprofileerde toplaag',
        'Een keramische vulvloer op staltonlateien',
      ],
      correctIndex: 1,
      explanation:
        'TT staat voor de vorm: twee T-balkjes onder een dunne plaat. Wordt toegepast in parkeergarages, kantoren en industrie waar grote overspanningen en zware belasting nodig zijn.',
    },
    {
      id: 'B6-1-c',
      toetstermCode: 'B.6.1',
      type: 'mc',
      prompt:
        'Een woning uit de jaren ’70 heeft een prefab schaalvloer. Welk vloertype kan je verwachten, met bekende risico op betonrot?',
      options: [
        'Kanaalplaatvloer',
        'Ribbenvloer',
        'Kwaaitaalvloer',
        'Breedplaatvloer',
      ],
      correctIndex: 2,
      explanation:
        'Kwaaitaalvloeren (schaaldelen) uit de jaren ’60–’80 zijn berucht vanwege te veel calciumchloride in de wapening — leidt vaak tot betonrot. Bij verkoop wordt vrijwel altijd een inspectie geadviseerd.',
    },
    {
      id: 'B6-1-d',
      toetstermCode: 'B.6.1',
      type: 'mc',
      prompt:
        'Welke prefab vloer wordt gekenmerkt door lengtekanalen in het element die het gewicht reduceren?',
      options: [
        'Combinatievloer',
        'Kanaalplaatvloer',
        'Ribbenvloer',
        'Breedplaatvloer',
      ],
      correctIndex: 1,
      explanation:
        'De kanaalplaatvloer heeft holle kanalen in lengterichting voor gewichtsbesparing zonder dat de constructieve sterkte sterk afneemt. Standaard breedte 1,2 m, lengte tot 16 m.',
    },
    {
      id: 'B6-1-e',
      toetstermCode: 'B.6.1',
      type: 'mc',
      prompt:
        'Bij een baksteenmontagevloer worden tussen de prefab liggers welke vulstukken gebruikt?',
      options: [
        'Polystyreenschuim',
        'Gebakken keramische vulstukken',
        'Cellenbeton',
        'Houten balkjes met triplex',
      ],
      correctIndex: 1,
      explanation:
        'Bij een baksteenmontagevloer worden gebakken (keramische) vulstukken tussen voorgespannen staltonlatei-liggers gelegd; daarna wordt het geheel afgegoten met een dunne druklaag.',
    },

    // === B.6.2 — Samenstelling gewapend beton (3) ===
    {
      id: 'B6-2-a',
      toetstermCode: 'B.6.2',
      type: 'mc',
      prompt:
        'Uit welke vijf hoofdbestanddelen bestaat gewapend beton?',
      options: [
        'Cement, zand, water, kalk, wapeningsstaal',
        'Cement, zand, grind, water, wapeningsstaal',
        'Cement, kiezel, kalkpoeder, water, wapeningsstaal',
        'Cement, grind, lava, water, wapeningsstaal',
      ],
      correctIndex: 1,
      explanation:
        'Gewapend beton = cement (bindmiddel) + zand en grind (toeslagstoffen) + water + wapeningsstaal in de trekzone.',
    },
    {
      id: 'B6-2-b',
      toetstermCode: 'B.6.2',
      type: 'mc',
      prompt:
        'Wat is in betonspecie de rol van het cement?',
      options: [
        'Toeslagstof — vult de holle ruimten tussen grindkorrels',
        'Bindmiddel — bindt de toeslagstoffen',
        'Wapening — vangt trekkrachten op',
        'Hulpstof — verlengt de uithardingstijd',
      ],
      correctIndex: 1,
      explanation:
        'Cement is het bindmiddel: het reageert chemisch met water (verstening, geen droging) en bindt zand en grind tot een steenachtig geheel.',
    },
    {
      id: 'B6-2-c',
      toetstermCode: 'B.6.2',
      type: 'mc',
      prompt:
        'Wat is de **watercementfactor (w.c.f.)** in beton?',
      options: [
        'De verhouding cement : zand in volumedelen',
        'Het percentage water dat verdampt tijdens uitharding',
        'De gewichtsverhouding water : cement',
        'De druksterkte na 28 dagen, gedeeld door de cilindersterkte',
      ],
      correctIndex: 2,
      explanation:
        'De w.c.f. is de gewichtsverhouding water : cement. Hoe lager (binnen redelijke grenzen), hoe dichter en sterker het beton. Voor verwerking ligt deze typisch op 0,5–0,6.',
    },

    // === B.6.3 — Plaats van wapening (4) ===
    {
      id: 'B6-3-a',
      toetstermCode: 'B.6.3',
      type: 'mc',
      prompt:
        'Een vrij opgelegde betonbalk wordt in het midden belast. Waar zit de hoofdwapening?',
      options: [
        'In de bovenste helft van de balk, in het midden van de overspanning',
        'In de onderste helft van de balk, in het midden van de overspanning',
        'Recht boven beide opleggingen, in de bovenkant',
        'Diagonaal door de balk heen',
      ],
      correctIndex: 1,
      explanation:
        'Bij een vrij opgelegde balk ontstaat in het midden trek aan de onderkant — daar hoort de hoofdwapening. Beton neemt de drukspanning bovenin zelf goed op.',
    },
    {
      id: 'B6-3-b',
      toetstermCode: 'B.6.3',
      type: 'mc',
      prompt:
        'Bij een uitkragend balkon zit de hoofdwapening:',
      options: [
        'Onderaan, langs de hele lengte van het balkon',
        'In het midden van de dikte, gelijkmatig verdeeld',
        'Bovenaan, dicht bij de inklemming aan de gevel',
        'Verticaal, loodrecht op de gevel',
      ],
      correctIndex: 2,
      explanation:
        'Een uitkragend balkon buigt naar beneden — de trekspanning zit aan de bovenkant, vlak bij de inklemming. Daar moet de hoofdwapening liggen.',
    },
    {
      id: 'B6-3-c',
      toetstermCode: 'B.6.3',
      type: 'mc',
      prompt:
        'Waarom is staal een goed materiaal als wapening in beton?',
      options: [
        'Staal en beton hebben sterk verschillende uitzettingscoëfficiënten — dat geeft extra grip',
        'Staal en beton zetten gelijk uit en staal roest niet in beton',
        'Staal smelt sneller dan beton — handig bij brand',
        'Staal heeft een hogere druksterkte dan beton — vandaar de drukzone',
      ],
      correctIndex: 1,
      explanation:
        'Staal en beton zetten ongeveer even snel uit — er ontstaan geen onderlinge spanningen. Beton is bovendien basisch (pH > 12), wat het staal passiveert tegen roest, zolang er voldoende dekking is.',
    },
    {
      id: 'B6-3-d',
      toetstermCode: 'B.6.3',
      type: 'mc',
      prompt:
        'Wat is het principe van **voorgespannen beton**?',
      options: [
        'Het beton wordt onder hoge druk verdicht voordat de wapening wordt aangebracht',
        'De wapening staat onder trek vóór het storten en drukt het beton voor',
        'Het beton wordt na uitharding mechanisch samengeperst met spanstaven aan de buitenkant',
        'Er wordt extra cement toegevoegd om voorspanning op te wekken',
      ],
      correctIndex: 1,
      explanation:
        'Bij voorgespannen beton wordt de wapening eerst op trek gezet, daarna omsloten door beton. Na uitharden ontspant het staal en drukt het beton in een permanente drukvoorspanning — dat geeft slankere, lichtere constructies.',
    },

    // === B.6.4 — Toepassingen (3) ===
    {
      id: 'B6-4-a',
      toetstermCode: 'B.6.4',
      type: 'mc',
      prompt:
        'Waarom wordt voor de funderingsbalken van een woning gewapend beton (en geen onverstevigd beton) gebruikt?',
      options: [
        'Onverstevigd beton hardt niet onder de grond',
        'In funderingsbalken treden trekspanningen op die wapening opneemt',
        'Wapening is verplicht onder de grondwaterspiegel',
        'Wapening maakt het beton beter waterdicht',
      ],
      correctIndex: 1,
      explanation:
        'Een funderingsbalk overspant tussen palen of poeren — net als een balk in de bovenbouw ontstaan daar trekspanningen. Die kunnen alleen door wapening worden opgenomen.',
    },
    {
      id: 'B6-4-b',
      toetstermCode: 'B.6.4',
      type: 'mc',
      prompt:
        'Voor welke toepassing is gewapend beton **minder geschikt**?',
      options: [
        'Verdiepingsvloer in een appartementencomplex',
        'Kelderwand onder grondwaterstand',
        'Lichte tussenwand in een eengezinswoning',
        'Kolommen in een parkeergarage',
      ],
      correctIndex: 2,
      explanation:
        'Voor lichte, niet-dragende tussenwanden is gewapend beton veel te zwaar en omslachtig. Daarvoor zijn gipsblokken, cellenbeton, metal-stud of lichte kalkzandsteen veel praktischer.',
    },
    {
      id: 'B6-4-c',
      toetstermCode: 'B.6.4',
      type: 'mc',
      prompt:
        'Welk eigenschap van beton maakt het bij uitstek geschikt voor luchtgeluidsisolerende woningscheidende wanden?',
      options: [
        'De porositeit',
        'De hoge volumieke massa',
        'De lage druksterkte',
        'De warmte-isolerende werking',
      ],
      correctIndex: 1,
      explanation:
        'Luchtgeluidsisolatie volgt voor een groot deel de **massawet**: hoe zwaarder de wand, hoe beter de isolatie. Beton (~2.400 kg/m³) is dus uitstekend voor woningscheidende wanden.',
    },

    // === B.6.5 — Betondekking & kwaliteit (4) ===
    {
      id: 'B6-5-a',
      toetstermCode: 'B.6.5',
      type: 'mc',
      prompt:
        'Wat wordt bedoeld met **betondekking**?',
      options: [
        'Het waterafstotende coating op het oppervlak van uitgehard beton',
        'De dikte van de betonlaag tussen het oppervlak en de wapening',
        'De afwerklaag (dekvloer) bovenop een dragende ondervloer',
        'De totale dikte van de constructie',
      ],
      correctIndex: 1,
      explanation:
        'Betondekking = de afstand tussen het buitenoppervlak en de dichtsbijzijnde wapeningsstaaf. Voldoende dekking is essentieel om de wapening tegen vocht en roest te beschermen.',
    },
    {
      id: 'B6-5-b',
      toetstermCode: 'B.6.5',
      type: 'mc',
      prompt:
        'Hoe wordt de betondekking tijdens het storten gegarandeerd?',
      options: [
        'Door de wapening na het storten met een trilnaald naar binnen te duwen',
        'Door afstandhouders tussen wapening en bekisting',
        'Door extra cement op het oppervlak aan te brengen',
        'Door de bekisting met ontkistingsolie te behandelen',
      ],
      correctIndex: 1,
      explanation:
        'Afstandhouders houden de wapening op exact de juiste afstand van de bekisting. Ze blijven na ontkisten in het werk zitten en zijn van een materiaal dat geen schade veroorzaakt.',
    },
    {
      id: 'B6-5-c',
      toetstermCode: 'B.6.5',
      type: 'mc',
      prompt:
        'Een beton met de aanduiding **C 25/30** betekent dat:',
      options: [
        '25% cement en 30% zand in volumedelen',
        'Cilinderdruksterkte 25 en kubusdruksterkte 30 N/mm²',
        'Een w.c.f. tussen 0,25 en 0,30',
        '25 mm betondekking, 30 mm wapeningsdiameter',
      ],
      correctIndex: 1,
      explanation:
        'De C-codering uit NEN-EN 206-1: C + cilinderdruksterkte / kubusdruksterkte in N/mm² na 28 dagen verharding. C 25/30 is typisch voor woningbouw.',
    },
    {
      id: 'B6-5-d',
      toetstermCode: 'B.6.5',
      type: 'mc',
      prompt:
        'Wat geeft een **milieuklasse** (bijv. XF3, XS2) bij beton aan?',
      options: [
        'De minimale w.c.f. die toegestaan is',
        'De agressiviteit van de omgeving',
        'De druksterkte na 28 dagen',
        'De plaats waar de wapening moet zitten',
      ],
      correctIndex: 1,
      explanation:
        'De milieuklasse beschrijft de aard van de aantasting (X0 = geen risico, XC = carbonatatie, XF = vorst, XS = zeewater, XD = strooizout, XA = chemisch). Dit bepaalt mede de minimale betondekking en w.c.f.',
    },

    // === B.6.6 — Betonschade (5) ===
    {
      id: 'B6-6-a',
      toetstermCode: 'B.6.6',
      type: 'mc',
      prompt:
        'Wat is de primaire oorzaak van **betonrot**?',
      options: [
        'Te lange uithardingstijd',
        'Te geringe betondekking: wapening roest en beton springt af',
        'Een te lage w.c.f., waardoor het beton bros wordt',
        'Te veel grind in de mengverhouding',
      ],
      correctIndex: 1,
      explanation:
        'Betonrot ontstaat doordat te weinig betondekking vocht en zuurstof bij het staal laat. Het staal roest, het volume zet uit (6–8×) en drukt het beton van binnenuit kapot.',
    },
    {
      id: 'B6-6-b',
      toetstermCode: 'B.6.6',
      type: 'mc',
      prompt:
        'Hoe wordt **craquelé** in beton herkend?',
      options: [
        'Roestbruine vlekken die in lijnen langs de wapening lopen',
        'Lokale gebieden met los grind zonder bindmortel ertussen',
        'Een fijn netwerk van haarscheurtjes aan het oppervlak',
        'Diepe scheuren dwars door het beton, vaak verticaal',
      ],
      correctIndex: 2,
      explanation:
        'Craquelé toont zich als een netwerk van haarscheurtjes — meestal door te snelle uitdroging van de bovenste laag vers beton (zon, wind, te natte specie, geen afdekken).',
    },
    {
      id: 'B6-6-c',
      toetstermCode: 'B.6.6',
      type: 'mc',
      prompt:
        'Wat veroorzaakt een **grindnest** in een betonconstructie?',
      options: [
        'Roest van de wapening',
        'Slechte verdichting of ontmenging tijdens het storten',
        'Een te lage cementkwaliteit',
        'Te veel water in de specie',
      ],
      correctIndex: 1,
      explanation:
        'Een grindnest is een plek waar bindmortel ontbreekt tussen het grind. Oorzaak: te lang of plaatselijk verdichten (ontmenging), te dichte wapening, of storten van grote hoogte.',
    },
    {
      id: 'B6-6-d',
      toetstermCode: 'B.6.6',
      type: 'mc',
      prompt:
        'Welke maatregel **voorkomt** craquelé in een verse betonvloer?',
      options: [
        'Onmiddellijk na storten dekvloer aanbrengen',
        'Het beton afdekken en nathouden',
        'Extra cement toevoegen aan de toplaag',
        'De wapening dichter onder het oppervlak leggen',
      ],
      correctIndex: 1,
      explanation:
        'Craquelé is bovenste-laag-uitdrogingsschade. Voorkomen door curing: afdekken, natmaken of een curing compound aanbrengen — zodat de buitenste laag niet sneller krimpt dan de massa eronder.',
    },
    {
      id: 'B6-6-e',
      toetstermCode: 'B.6.6',
      type: 'mc',
      prompt:
        'Een balkon vertoont roestplekken en losgekomen betonschollen. Wat is een **adequate herstelmethode**?',
      options: [
        'Het balkon overschilderen met een dichte verflaag',
        'Een nieuwe afwerkvloer aanbrengen over het beschadigde beton',
        'Aangetast beton uithakken, wapening ontroesten, spuitmortel aanbrengen',
        'Een isokorf inbouwen op de bestaande wapening',
      ],
      correctIndex: 2,
      explanation:
        'Bij betonrot moet je het aangetaste beton ruim uithakken zodat al het roestproces wordt gestopt, het staal behandelen of vervangen, en met spuitmortel (vaak met polypropyleenvezels) herstellen.',
    },

    // === B.6.7 — Bijzondere in-werk vloervormen (3) ===
    {
      id: 'B6-7-a',
      toetstermCode: 'B.6.7',
      type: 'mc',
      prompt:
        'Wat is karakteristiek voor een **paddenstoelvloer**?',
      options: [
        'Een prefab plaat met polystyreen vulelementen',
        'Een vlakke plaatvloer met verbrede kolomkoppen',
        'Een vloer met diagonale ribben in een gridpatroon',
        'Een geprofileerde staalplaat met afgegoten beton',
      ],
      correctIndex: 1,
      explanation:
        'Bij een paddenstoelvloer zijn de kolommen bovenaan verbreed (paddenstoel-vorm) zodat de puntlast uit de kolom over een groot vloeroppervlak wordt verspreid. Geen onderslagbalken nodig — vlak plafond, vrije indeling.',
    },
    {
      id: 'B6-7-b',
      toetstermCode: 'B.6.7',
      type: 'mc',
      prompt:
        'Wat is een **dekvloer**?',
      options: [
        'De onderzijde van een prefab vloer, zichtbaar als plafond',
        'Een dragende vloerconstructie van prefab balken',
        'Een niet-dragende afwerklaag op de ondervloer',
        'Een betonnen vloer met druklaag tussen prefab elementen',
      ],
      correctIndex: 2,
      explanation:
        'Een dekvloer is geen dragend element — het is een afwerklaag (cement, anhydriet) boven op de dragende vloer, die oneffenheden uitvlakt en als ondergrond voor de eindafwerking dient.',
    },
    {
      id: 'B6-7-c',
      toetstermCode: 'B.6.7',
      type: 'mc',
      prompt:
        'Hoe werkt een **zwaluwstaartplaatvloer**?',
      options: [
        'Polystyreen vulelementen worden in zwaluwstaartvorm afgegoten',
        'Een staalplaat met zwaluwstaart-profiel als blijvende bekisting',
        'Twee houten platen in een zwaluwstaartverbinding vormen de bekisting',
        'Prefab kanaalplaten worden in een zwaluwstaartpatroon naast elkaar gelegd',
      ],
      correctIndex: 1,
      explanation:
        'De geprofileerde staalplaat heeft zwaluwstaart-uitsparingen die de in-werk gestorte druklaag mechanisch vastklemmen. De staalplaat doet dienst als bekisting en deels als wapening; toegepast bij renovaties en lichte tussenvloeren.',
    },

    // === B.6.8 — Montage prefab (2) ===
    {
      id: 'B6-8-a',
      toetstermCode: 'B.6.8',
      type: 'mc',
      prompt:
        'Een kanaalplaatvloer wordt op een dragende muur gelegd. Hoe worden de elementen tot één vloer verbonden?',
      options: [
        'Met spijkers door de kanaalplaten in de balklaag eronder',
        'De kelknaden tussen de platen worden met specie volgegoten',
        'De platen worden onderling gelast',
        'Met bouten door de oplegging in de muur vastgezet',
      ],
      correctIndex: 1,
      explanation:
        'Tussen kanaalplaten zitten kelkvoegen die met fijne mortel worden afgegoten. Bij bijzondere belastingen (raveling, zware vloer) komt er wapening in de kelkvoeg of worden de elementen via koppelankers aan elkaar geknoopt.',
    },
    {
      id: 'B6-8-b',
      toetstermCode: 'B.6.8',
      type: 'mc',
      prompt:
        'Prefab gevel-elementen worden vaak gemonteerd met **tand/nokken-oplegging**. Wat houdt dat in?',
      options: [
        'De gevelelementen worden onderling vastgelijmd met epoxyhars',
        'Een uitstekende nok valt in een uitsparing en vergrendelt het element',
        'De gevelelementen worden door middel van bouten aan de buitenkant vastgemaakt',
        'De elementen worden tijdelijk geschoord en pas later definitief afgewerkt',
      ],
      correctIndex: 1,
      explanation:
        'Bij nok-/tandoplegging valt een uitsteeksel van het element in een nis van de drager. Dit geeft een vorm-gesloten verbinding die belasting kan dragen; naden worden vervolgens met purschuim en voegafdichting (kit) gevuld, of constructief aangestort.',
    },

    // === B.6.9 — Voor- en nadelen prefab (3) ===
    {
      id: 'B6-9-a',
      toetstermCode: 'B.6.9',
      type: 'mc',
      prompt:
        'Wat is een **voordeel** van bouwen met prefab beton-elementen ten opzichte van in-het-werk storten?',
      options: [
        'Veel grotere ontwerpvrijheid voor unieke vormen',
        'Hogere maatvastheid, snellere bouwtijd en minder vochtinbreng',
        'Lagere transportkosten op de bouwplaats',
        'Minder afhankelijkheid van kraancapaciteit',
      ],
      correctIndex: 1,
      explanation:
        'Prefab levert fabriekskwaliteit (maatvastheid, afwerking), snelle montage, geen droogtijd op de bouw en minder bouwvocht. Transport en kraancapaciteit zijn juist nadelen (zware/lange elementen vergen logistiek).',
    },
    {
      id: 'B6-9-b',
      toetstermCode: 'B.6.9',
      type: 'mc',
      prompt:
        'Welke factor is een **nadeel** van prefab-bouw?',
      options: [
        'Lange uithardingstijd op de bouwplaats',
        'Grote afhankelijkheid van het weer voor de fabricage',
        'Naden zijn kwetsbaar voor koudebruggen, lekkage en geluid',
        'Hogere vochtinbreng bij oplevering',
      ],
      correctIndex: 2,
      explanation:
        'De naden tussen prefab-elementen zijn de zwakke schakel: zonder zorgvuldige afdichting en isolatie ontstaan koudebruggen, lekkages of geluidslekken. Dit is een typisch nadeel ten opzichte van een monolithisch in-werk gestorte constructie.',
    },
    {
      id: 'B6-9-c',
      toetstermCode: 'B.6.9',
      type: 'mc',
      prompt:
        'Wanneer is prefab beton **commercieel het meest aantrekkelijk**?',
      options: [
        'Bij maatwerk-villa’s met unieke vormen',
        'Bij sterk repeterende seriebouw',
        'Bij kleine renovaties en aanbouwen',
        'Bij oplossingen met veel sparingen en doorvoeren',
      ],
      correctIndex: 1,
      explanation:
        'Prefab vergt investering in mallen en machinaal werk; pas bij seriebouw met veel identieke elementen wordt dat ruim terugverdiend. Bij maatwerk of veel sparingen wint in-werk storten het op flexibiliteit.',
    },
  ],

  terms: [
    {
      term: 'Cement',
      definition:
        'Bindmiddel in beton — fijne poeder dat met water reageert (hydratatie) en zo de mortel verhardt.',
    },
    {
      term: 'Beton',
      definition:
        'Mengsel van cement, zand, grind en water; sterk op druk maar zwak op trek.',
    },
    {
      term: 'Wapening',
      definition:
        'Stalen staven in het beton die de trekkrachten opnemen; gewapend beton combineert druksterkte van beton met treksterkte van staal.',
    },
    {
      term: 'Gewapend beton',
      definition:
        'Beton met staal­wapening — standaard voor vloeren, balken en kolommen waar buiging en trek optreedt.',
    },
    {
      term: 'Voorgespannen beton',
      definition:
        'Beton waarin de wapening vóór het storten op trek is gezet; verhoogt overspanning en vermindert scheurvorming (bv. kanaalplaten).',
    },
    {
      term: 'Sterkteklasse',
      definition:
        'Drukvastheidaanduiding C30/37 = karakteristieke drukspanning 30 N/mm² (cilinder) of 37 (kubus); standaard nieuwbouw C20/25 of C30/37.',
    },
    {
      term: 'Milieuklasse',
      definition:
        'Code (XC1-XS3 etc.) die de blootstellings­omstandigheden aangeeft; bepaalt dekking en cementgehalte.',
    },
    {
      term: 'Dekking',
      definition:
        'Afstand tussen wapening en betonoppervlak; voorkomt corrosie en geeft brand­werendheid (gem. 25-50 mm).',
    },
    {
      term: 'Stortvloer',
      definition:
        'Vloer die in zijn geheel op de bouwplaats wordt gestort met bekisting — flexibel maar arbeidsintensief.',
    },
    {
      term: 'Kanaalplaat­vloer',
      definition:
        'Geprefabriceerd voorgespannen betonelement met holle kanalen — licht, grote overspanning, snelle montage.',
    },
    {
      term: 'Breedplaatvloer',
      definition:
        'Dunne prefab onderplaat + bovenop ter plaatse gestort beton; combineert prefab-snelheid met aanpasbaarheid.',
    },
    {
      term: 'Ribcas­vloer',
      definition:
        'Geïsoleerde begane-grondvloer met prefab ribben en isolatie­blokken; standaard voor woningbouw.',
    },
    {
      term: 'Krimp',
      definition:
        'Volumevermindering van beton tijdens uitharden door verdamping; de bijbehorende scheurtjes voorkom je met dilataties of vezels.',
    },
    {
      term: 'Carbonatatie',
      definition:
        'Reactie van CO₂ uit de lucht met cement; verlaagt de pH waardoor de wapening kan corroderen — vandaar dekking-eisen.',
    },
  ],

  games: [
    {
      id: 'B6-gapfill-1', type: 'gapfill',
      title: 'Beton — vul aan',
      text:
        'Beton bestaat uit {{cement}}, zand, {{grind}} en water. Voor gewapend beton komt daar {{wapeningsstaal}} bij. ' +
        'De {{watercement­factor}} (w.c.f.) bepaalt grotendeels de sterkte; lager = sterker. ' +
        'Een betonkwaliteit als C 25/30 staat voor {{cilinderdruksterkte}} 25 en kubusdruksterkte 30 N/mm² na 28 dagen.',
      distractors: ['kalk', 'gips', 'voorspanstaal', 'porseleinverhouding'],
    },
    {
      id: 'B6-sort-1', type: 'sort',
      title: 'Prefab vs in-werk gestort',
      categories: ['Prefab vloeren', 'In-werk gestort'],
      items: [
        { label: 'Kanaalplaatvloer', category: 'Prefab vloeren' },
        { label: 'Combinatievloer (PS / broodjes)', category: 'Prefab vloeren' },
        { label: 'Ribbenvloer', category: 'Prefab vloeren' },
        { label: 'TT-vloer (zware utiliteit)', category: 'Prefab vloeren' },
        { label: 'Paddenstoelvloer', category: 'In-werk gestort' },
        { label: 'Dekvloer (cement/anhydriet)', category: 'In-werk gestort' },
      ],
    },
    {
      id: 'B6-matching-1', type: 'matching',
      title: 'Beton begrippen',
      pairs: [
        { left: 'Betondekking', right: 'Afstand wapening tot oppervlak — voorkomt roest' },
        { left: 'Betonrot', right: 'Roestende wapening duwt beton af bij te weinig dekking' },
        { left: 'Craquelé', right: 'Haarscheurtjes door te snelle uitdroging vers beton' },
        { left: 'Grindnesten', right: 'Lokaal geen mortel — door ontmenging of te lang trillen' },
        { left: 'Voorgespannen beton', right: 'Wapening onder trekspanning vóór beton stort' },
        { left: 'Kwaaitaalvloer', right: 'Schaalvloer jaren ’60–’80 — beruchte betonrot' },
      ],
    },
  ],
}
