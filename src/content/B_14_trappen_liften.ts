import type { Topic } from '../types/content'

const FIG = '/figs/B_14'
const SRC_16 = 'Lesboek hfd. 16'

export const B_14_trappen_liften: Topic = {
  code: 'B.14',
  section: 'B',
  title: 'Trappen en liften',
  chapterRef: 'Lesboek hoofdstukken 16 en 24',
  blurb:
    'Trapvormen (steektrap, slagtrap, kwarttrap, scheluwtrap, wenteltrap, spiltrap, bordestrap, Engelse/wrongtrap, vlizotrap), onderdelen van een trap (optrede, aantrede, stootbord, baluster, trapboom, leuning, looplijn), de regel A + 2O = 600 ± 30, gevolgen van wijzigingen aan aantrede/optrede of extra trede, lifttypen (tractie, hydraulisch, traplift, paternosterlift) plus de schacht/kooi/machine/put, en roltrappen, rolpaden en hellingbanen.',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · Trapvormen',
      toetstermCodes: ['B.14.1'],
      body: `
B.14.1 vraagt je om de tien standaardtrapvormen op tekening of foto te kunnen herkennen.

### Rechte trappen
- **Rechte steektrap** — één recht stuk van onder naar boven; eenvoudigste en compactste vorm. Standaard in modernere woningen. Vereist een goed te overspannen trapgat in lengte.

### Trappen met draaiing
- **Trap met onderkwart** — bij de start onderaan een kwartdraai (90°)
- **Trap met bovenkwart** — bij het eind bovenaan een kwartdraai
- **Trap met onder- en bovenkwart** — een kwart onder + een kwart boven (typisch voor smalle ruimten)
- **Halve slagtrap** — een halve draai (180°) over één deel, vaak om een spil heen of via een bordes
- **Scheluwtrap** (enkel of dubbel) — een schuine draai, niet in 90°-stappen; gedraaide treden 'glooien' geleidelijk

### Rond draaiende trappen
- **Wenteltrap** — continue spiraal, treden draaien om een centrale as. Compact maar minder comfortabel (steile beklimming, smalle binnenzijde)
- **Spiltrap** — variant van de wenteltrap met een **massieve centrale spil** (kolom) waar alle treden in vastzitten. De spil is constructief én esthetisch het hart van de trap
- **Engelse / wrongtrap** — een sierlijke trap met **een gebogen leuning en gedraaide trapbomen** (wrongstukken); kuipstukken en wrongstukken zorgen voor vloeiende overgangen

### Trappen met bordes
- **Bordestrap** — onderbroken door een **bordes** (vlak platform) in de draai. Bij meer dan 4 m hoogteverschil is een bordes halverwege verplicht voor rustpunt + valbeveiliging

### Speciale trappen
- **Vlizotrap** — inklapbare zolder-/vliering-trap (treden vouwen op tegen het luik). Voor niet-verblijfsruimten (vliering, kelder); valt buiten de Bbl-eisen voor reguliere trappen

> **Bbl-eis**: hoogteverschillen > 0,21 m moeten met een trap of hellingbaan worden overbrugd.
      `.trim(),
      images: [
        {
          src: `${FIG}/trapvormen.jpg`,
          caption: 'Trapvormen: rechte steektrap, enkel- en dubbel-scheluwe trap, met onderkwart, met bovenkwart, met onder- en bovenkwart, bordestrap, spiltrap en wenteltrap.',
          source: SRC_16,
          width: 'full',
        },
        {
          src: `${FIG}/trappen-plattegrond.jpg`,
          caption: 'Tekenen van trappen op verschillende plattegronden — een pijl geeft de loopsrichting omhoog aan, een streepje het einde van het zichtvlak (afsnijhoogte).',
          source: SRC_16,
          width: 'md',
        },
      ],
    },

    {
      heading: '2 · Onderdelen van een trap',
      toetstermCodes: ['B.14.2'],
      body: `
Een houten of betonnen trap heeft de volgende onderdelen die je moet kunnen benoemen:

### Het tredevlak
- **Trede** — de plank waar je op staat. Standaard ~35 mm dik in hout
- **Aantrede (A)** — de **horizontale** afmeting van een trede — wat je op de klimlijn meet als 'steplengte'. **Minimum in woningen: 220 mm**
- **Optrede (O)** — de **verticale** afmeting tussen twee treden — de stap-hoogte. **Maximum in woningen: 188 mm**
- **Stootbord** — de **verticale plank** tussen twee treden (sluit het 'gat' onder de bovenliggende trede af). ~18 mm multiplex
- **Wel / trapneus** — het kleine overstek (~50 mm) van de trede over het stootbord — geeft afdaalcomfort en visuele markering van de tredekant

### Dragend hout
- **Trapboom** — de **schuine balk** aan de zijkant van de trap waarin de treden zijn opgehangen. Een trap heeft meestal twee bomen: een **muurboom** (tegen de muur) en een **binnenboom / vrije boom** (aan de andere zijde, met balusters en leuning erboven)
- **Krozen / nesten** — uitsparingen in de boom waar de treden ingelaten worden (~10 mm)

### Leuning en balustrade
- **Leuning** — handgreep op leuninghoogte (850–900 mm) langs de open zijde van de trap. Voor stabiliteit tijdens beklimming
- **Baluster** — verticale spijl of stijl die de leuning draagt; tussen de balusters geldt **max. 100 mm vrije ruimte** (doorvalbeveiliging voor kinderen)
- **Hoofdbaluster (spil)** — de zware verticale baluster onderaan de trap die de leuning begint; bij vrijstaande binnenboom rust de eerste **bloktrede** op de hoofdbaluster
- **Smetplank** — de plank waarop muurleuningen worden bevestigd

### Bordes en aansluitingen
- **Trapbordes** — vlak platform bovenaan of in de trap (min. 0,8 × 0,8 m)
- **Kuipstuk** / **wrongstuk** — bochtige overgangs-elementen in een Engelse/wrongtrap die de leuning vloeiend mee laat lopen

### Looplijn / klimlijn
- De **looplijn** (ook **klimlijn**) is de **denkbeeldige lijn** waarlangs je de trap beloopt
- Volgens Bbl wordt deze gemeten op **0,30 m van de muurzijde**
- **Alle aantredes worden op de looplijn gemeten** — bij gedraaide treden waar de trede aan de buitenzijde breder is dan aan de binnenzijde, telt alleen de breedte op de looplijn
- Looplijn bepaalt comfort en veiligheid: een te krappe loop op de klimlijn is reden voor afkeuring

### De formule **A + 2O = 600 ± 30** (de gulden trapregel)
Voor een comfortabel beloopbare trap geldt:
> **aantrede + 2 × optrede ≈ 600 mm** (tolerantie ± 30 mm)

Dat komt voort uit de natuurlijke staplengte op een helling. Bijvoorbeeld:
- Optrede 180 mm + aantrede 240 mm → 240 + 360 = **600 mm** ✔
- Optrede 200 mm + aantrede 220 mm → 220 + 400 = 620 mm — *steil maar net acceptabel*
- Optrede 170 mm + aantrede 280 mm → 280 + 340 = 620 mm — *flauw maar acceptabel*
      `.trim(),
      images: [
        {
          src: `${FIG}/bloktrede.jpg`,
          caption: 'Bloktrede met hoofdbaluster (spil) bij een vrijstaande binnenboom — de zware onderste trede draagt de leuning-spil.',
          source: SRC_16,
          width: 'md',
        },
        {
          src: `${FIG}/leuning.jpg`,
          caption: 'Houten leuning op smetplank — bevestigd met leuninghouders, minimaal 50 mm vrij tussen muur en leuning voor handpassage.',
          source: SRC_16,
          width: 'md',
        },
        {
          src: `${FIG}/balusters.jpg`,
          caption: 'Tussenbalusters of spijlen met gemenageerde pennen — onderling max. 100 mm vrij (kinderveiligheid).',
          source: SRC_16,
          width: 'md',
        },
      ],
    },

    {
      heading: '3 · Ruimtebeslag: wat gebeurt er als je optrede of aantrede wijzigt?',
      toetstermCodes: ['B.14.3'],
      body: `
B.14.3 vraagt je om de **consequenties** van wijziging aan optrede of aantrede te begrijpen. Werkt door op:
1. **Totale trap-lengte (ruimtebeslag op de vloer)**
2. **Aantal treden** (bij vaste verdiepingshoogte)
3. **Comfort** (volgt de A + 2O = 600-regel)
4. **Vrije hoogte boven de trap** (Bbl-eis 2,30 m, in woningvloer 2,60 m)
5. **Plaats van trapgat in de bovenliggende vloer**

### Voorbeeld 1: optrede kleiner maken (flauwere trap)
- **Vaste verdiepingshoogte 2.700 mm**, oude optrede 180 mm → **15 treden**
- Nieuwe optrede 150 mm → **2.700 / 150 = 18 treden**
- Aantrede 240 mm → totale trap-lengte: 15 × 240 = 3.600 mm → 18 × 240 = **4.320 mm** = **720 mm langer**
- **Consequentie**: trap neemt **veel meer vloeroppervlak** in; trapgat in bovenliggende vloer moet ook langer of de loop moet anders worden geleid (kwart, bordes)

### Voorbeeld 2: aantrede groter maken
- Oude aantrede 220 mm, nieuwe 280 mm bij gelijk aantal treden: trap wordt **langer** (60 mm × aantal treden = 60 × 15 = 900 mm langer)
- Vrije hoogte boven de trap moet getoetst: 2,30 m blijft, maar het **bordes** of de vloeropening verschuift

### Voorbeeld 3: optrede groter maken (steiler)
- **Optrede van 188 (max!) naar 200**: in een nieuwbouwsituatie **niet toegestaan** (Bbl-eis max. 188 mm in woningen). In bestaande situaties (renovatie) soms gedoogd
- Aantal treden bij 2.700 mm: van 15 naar 14 (afhankelijk van precieze maten)
- Trap wordt **korter** maar **steiler** — A + 2O = 600 regel wijst uit of nog comfortabel

### Wijziging in een verbouwing
- **Trap niet plaatselijk wijzigen** zonder de hele trap te herzien
- Bij vervanging: maatvoeren op basis van **A + 2O = 600** en Bbl-eisen
- **Vrije hoogte 2,30 m** boven elke trede — meet recht boven de aantrede
- Bovenbordes minimaal **800 × 800 mm**

### Wat als de verdiepingshoogte vast staat?
- Verdiepingshoogte / optrede = aantal treden (rond af naar boven)
- Aantal treden × aantrede = totale trap-lengte op de vloer
- Totale trap-lengte + onderbordes + bovenbordes = totale trap-ruimte
- Bij een rechte steektrap is dit het **ruimtebeslag** in lengte
- Bij kwart- of bordestrappen wordt het ruimtebeslag in 2 richtingen verdeeld — soms compacter voor de plattegrond, maar **looplijn op buitenzijde van de draai wordt langer**

### Voorbeeld: trap in een smal grondplan
- Bij 2.700 mm verdiepingshoogte en breedte 0,8 m: rechte steektrap vergt ~4 m lengte
- Een **trap met onder- en bovenkwart** vergt slechts ~2 m lengte maar 2 m × ~1,6 m vierkant
- Een **wenteltrap** of **spiltrap** vergt slechts een diameter van ~1,4–2,0 m — handig in monumentale of zeer compacte ontwerpen, maar minder comfortabel
      `.trim(),
    },

    {
      heading: '4 · Looplijn en de extra trede',
      toetstermCodes: ['B.14.4'],
      body: `
B.14.4 vraagt je het gevolg van het **toevoegen van een extra trede** in een bestaande trap te begrijpen. Sleutel: de **looplijn** (klimlijn) en de **A + 2O = 600** regel.

### Wat gebeurt er bij een extra trede in een bestaande trap?

Stel een rechte steektrap heeft 14 treden met optrede 195 mm en aantrede 230 mm:
- 14 × 195 = 2.730 mm verdiepingshoogte
- A + 2O = 230 + 390 = 620 mm — net acceptabel

Voeg je **1 extra trede** toe terwijl de **verdiepingshoogte gelijk blijft** (2.730 mm):
- Nieuwe optrede = 2.730 / 15 = **182 mm** (flauwer)
- Maar de aantrede blijft 230 mm (de bomen en het ruimtebeslag zijn niet gewijzigd in dit voorbeeld)
- Of: de aantrede kleiner maken om dezelfde trap-lengte te houden: 15 × A = oude (14 × 230) = 3.220 → **A = 215 mm**, juist onder minimum

### Consequenties:
1. **Comfort verandert**: A + 2O wijzigt → trap voelt anders
   - 230 + 2×182 = 594 → ietsje aan de korte kant (loop), maar comfortabel
2. **Trap wordt iets langer** (15 × 230 = 3.450 i.p.v. 3.220 mm — 230 mm extra) als de aantrede gelijk blijft
3. **Looplijn loopt over één trede meer** — visueel en functioneel anders
4. **Of de trap-lengte blijft gelijk** maar de aantrede wordt 215 mm → onder de Bbl-minimum van 220 mm! → **Niet toegestaan in nieuwbouw**

### Belangrijk:
- **Looplijn is de denkbeeldige lijn** waarlangs je de trap beloopt (op 0,30 m van de muurzijde)
- **Bij rechte trappen** ligt elke aantrede gelijk → looplijn loopt recht
- **Bij gedraaide treden** (kwart, scheluw, wentel) lopen de treden waaier-vormig: aantrede binnenzijde is veel smaller dan buitenzijde
- De **aantrede wordt op de looplijn gemeten** — niet aan de buiten- of binnenzijde
- **'Verdrijven'** = de overgang van rechte naar gedraaide aantredes geleidelijk verdelen, zodat alle aantredes op de klimlijn **gelijk** zijn

### Praktische gevolgen van een extra trede in een verbouwing
1. Aantal treden ↑ → optrede ↓ → comfortabeler maar lagere klimsnelheid
2. Bij gelijke aantrede: trap-lengte ↑ → meer ruimtebeslag op vloer → vloeropening moet meer naar achteren
3. Vrije hoogte boven elke trede blijft 2,30 m — controle nodig (lopen mensen niet tegen plafond aan?)
4. Bovenbordes positie verschuift
5. Bij **kwart- of bordestrap**: extra trede dwingt vaak de draai te verschuiven → looplijn loopt anders → balusterlay-out moet aangepast

> **Geheugensteun**: extra trede toevoegen = comfortabeler, maar méér vloeroppervlak nodig. Eén trede verwijderen = compactere trap, maar steiler — vaak ongewenst en in nieuwbouw verboden (Bbl).
      `.trim(),
    },

    {
      heading: '5 · Liften: types en onderdelen',
      toetstermCodes: ['B.14.5'],
      body: `
B.14.5 vraagt om verschillende lifttypen toe te kunnen lichten — plus de onderdelen liftschacht, liftkooi, liftmachine en liftput.

### Tractielift (de standaard moderne lift)
- Werkt met **kabels rondom een trommel** die door een **motor** (de **liftmachine**) wordt aangedreven
- Aan de andere kant van de kabel hangt een **tegenwicht** (~50% van het maximale gewicht van de kooi)
- **Voordelen**: groot **bereik in hoogte** (geen praktische limiet), energiezuinig (het tegenwicht draagt de halve last), snel (1–10 m/s)
- **Nadelen**: vraagt een machinekamer (vaak op het dak), kabels moeten elke 5 j gecontroleerd
- **Toepassing**: flats, kantoorgebouwen, ziekenhuizen, hoogbouw — dé standaardlift voor woningen en kantoren

### Hydraulische lift
- Werkt met een **vloeistofdruk-cilinder** (olie) die de kooi van onderaf omhoogduwt
- **Geen tegenwicht** nodig
- **Voordelen**: vrijwel **trillingsvrij**, **machinekamer flexibel** (vaak onderaan of naast de schacht), goedkoper voor lage gebouwen
- **Nadelen**: **langzaam** (~0,5–1 m/s), **beperkt in hoogte** (max. ~20 m); energieverbruik hoog tijdens omhoog (omlaag is gravity-feed)
- **Variant**: **kolomlift** — een telescopische plunjer; voor zware lasten en goederenliften
- **Toepassing**: lage flats, supermarkten, parkeergarages, woningen met monolift

### Schaarlift / hefplateau
- Werkt via een **schaarmechanisme** (X-vormig)
- Geringe inbouwdiepte
- **Toepassing**: goederenlift, hefplateau voor gehandicapten, hoogwerkers

### Traplift
- **Stoel of platform** dat langs een **rail op de leuning** beweegt
- Voor mensen met **medische indicatie** (NEN 3583), elektrisch aangedreven met remsysteem, snelheidsbegrenzer
- Subsidie via Wmo 2015 (gemeente)
- Twee typen: **stoeltjeslift** (zit met armleuningen) of **platformlift** (voor rolstoelen)

### Paternosterlift
- Continu draaiend systeem met **open kooien** die boven elkaar circuleren
- Reiziger stapt in een bewegende kooi en stapt eruit op de gewenste verdieping
- **Wettelijk niet meer geïnstalleerd** in Nederland (gevaarlijk); bestaande exemplaren mogen blijven (monumentale waarde)
- Vroeger in oudere kantoorgebouwen en universiteiten

### Goederenlift
- **Geen of beperkte personentransport** — vaak zonder kooideuren
- Hydraulisch of tractie, vaak met grotere kooi en lagere snelheid
- **Toepassing**: warenhuizen, fabrieken, parkeergarages

### Brandweerlift
- **Verplicht** bij verblijfsgebied > 20 m boven terrein
- Bij brand stoppen **alle andere liften** beneden; alleen de brandweer bedient deze met speciale sleutel
- Eigen noodstroomvoorziening en brandwerende schacht

### Onderdelen van een lift
- **Liftschacht** — verticale koker van drie wanden, **doorloopt tot boven het dak** (machinekamer); op elke verdieping een **schachtdeur**
- **Liftkooi** — de cabine waar passagiers in staan; vrije vloer ≥ **1.050 × 2.050 mm** (Bbl-rolstoeltoegankelijk), deurbreedte 850 mm, hoogte 2.100 mm
- **Kooigeleiders** — verticale rails in de schacht waarlangs de kooi loopt
- **Liftmachine** — motor + remsysteem + tegenwicht; bij tractie meestal in de machinekamer op het dak, bij modernere 'machine-room-less' (MRL) liften in de bovenkant van de schacht zelf
- **Liftput** — onderste deel van de schacht onder de laagste verdieping, met **buffers** voor kooi en tegenwicht en eventueel **noodstop-schakelaar**

### Veiligheidsvoorzieningen (verplicht door Warenwetbesluit liften)
- **Vanginrichting** + snelheidsbegrenzer (bij kabelbreuk grijpt de vanginrichting de geleiders)
- **Doorschietbeveiliging** + overbelasting
- Deuren openen **alleen bij gelijke vloer** (niveauverschil ≤ 0,02 m)
- **Torninrichting** (handbediening om met motorhandwiel naar de dichtstbijzijnde verdieping te draaien bij stroomuitval)
- Alarmbel + telefoon/intercom + ontsnappingsluik
- Noodverlichting in kooi en schacht
- Lijst met hulpverlenersnummers in de kooi

### Keuring
- **Warenwetbesluit liften**: na 12 maanden eerste periodieke keuring, daarna elke 18 maanden door een aangewezen instelling (Arbeidsinspectie handhaaft)
      `.trim(),
    },

    {
      heading: '6 · Roltrappen, rolpaden en hellingbanen',
      toetstermCodes: ['B.14.6'],
      body: `
B.14.6 vraagt om de principes van roltrap, rolpad en hellingbaan toe te lichten — inclusief stijgingspercentage en ruimtegebruik.

### Roltrap
- **Hellingshoek ~36°** (Bbl-eis voor personen-roltrappen)
- Treden zijn aan elkaar gekoppeld in een **continue kettingband** die over twee tandwielen loopt — bovenaan worden de treden vlak (rolpad-effect aan de uiteinden), in het midden vormen ze de feitelijke trap
- Snelheid ~0,5–0,75 m/s
- **Alleen voor personen** — geen winkelwagens of grote bagage
- **Toepassing**: warenhuizen, metro, stations, vliegvelden
- **Voordeel**: continue capaciteit (~4.000–8.000 personen/uur)
- **Nadelen**: vraagt veel ruimte (verloop ~10 m bij 3,5 m verdiepingshoogte); duur in aanschaf en onderhoud

### Rolbaan (op helling)
- **Vlakke kettingband** onder een lichte helling (max. ~12°) — niet getrapt
- Geschikt voor **personen mét winkelwagens of bagagekarren** (anti-slip groeven; winkelwagenwielen klemmen vast)
- **Toepassing**: supermarkten met verdiepingen (parkeergarage onder), luchthavens

### Rolpad (horizontaal)
- **Volledig horizontaal** lopende kettingband
- Voor **lange afstanden** (luchthaven-pieren, metro-passages)
- Snelheid ~0,75 m/s
- Geen helling — bedoeld om looptijd te verkorten zonder hoogteverschil

### Hellingbaan
- **Stationaire helling** (geen mechanische beweging)
- **Bbl-eis**: max. **30°** (niet meer, anders wordt het te steil); in praktijk:
  - **1:12 (~5°)** voor **rolstoelen** (gangbaar in openbare gebouwen, woningingangen)
  - **1:20** voor lange hellingbanen (parkeergarages, stadions)
  - **30°** = uiterst maximaal — alleen voor goederen (steekwagen)
- **Stroef oppervlak** verplicht (kies anti-slip beton, rubber, of profiel)
- **Toepassing**: rolstoel-toegankelijkheid (Bbl-eis bij openbare gebouwen), kinderwagens, winkelwagens, parkeergarages

### Stijgingspercentage en ruimtegebruik

| Helping | Stijging | Ruimte per m hoogte |
|---|---|---|
| Roltrap (~36°) | 73 % | ~1,4 m horizontaal |
| Rolbaan (~12°) | 21 % | ~4,7 m horizontaal |
| Hellingbaan 1:12 (5°) | 8,3 % | **12 m horizontaal** |
| Hellingbaan 1:20 (3°) | 5 % | 20 m horizontaal |
| Trap (~30°) | 58 % | ~1,7 m horizontaal |

**Belangrijk**: voor **rolstoeltoegankelijkheid** moet de hellingbaan **1:12 of flauwer** zijn. Bij 1 m hoogteverschil betekent dat **12 m horizontaal** — vaak een issue in dichte stedelijke ontwerpen. Daarom wordt vaak gekozen voor een **lift** in plaats van een lange hellingbaan.

### Bbl-eisen voor openbare gebouwen
- Bij gebouwen toegankelijk voor het publiek geldt **toegankelijkheidssector**: rolstoel-bereikbaarheid van entree en alle openbare ruimten
- Een **hellingbaan 1:12** of een **lift** (met kooi ≥ 1.050 × 2.050 mm) voldoet
- **Trap zonder alternatieve route** = geen toegankelijkheid
      `.trim(),
    },
  ],

  toetstermen: [
    {
      code: 'B.14.1',
      text: 'Herkent de trapvormen rechte steektrap, halve slagtrap, trap met onder-, boven- en onder- en bovenkwart, scheluwtrap, wenteltrap, Engelse of wrongtrap, bordestrap, spiltrap en vlizotrap.',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'B.14.2',
      text: 'Benoemt de delen van een trap: traptrede met optrede en aantrede, stootbord, baluster, trapboom, leuning en looplijn (beloopbaarheid verhouding A en O).',
      niveau: 'BT2',
      bloom: 'Kennis',
      metDrawing: true,
    },
    {
      code: 'B.14.3',
      text: 'Legt de consequenties van het ruimtebeslag (inclusief vrije hoogte) van een trap uit indien de aantrede of optrede gewijzigd wordt.',
      niveau: 'BT2',
      bloom: 'Begrip',
      metDrawing: true,
    },
    {
      code: 'B.14.4',
      text: 'Legt de gevolgen van de looplijn uit indien een extra trede bij een trap toegevoegd wordt.',
      niveau: 'BT2',
      bloom: 'Begrip',
      metDrawing: true,
    },
    {
      code: 'B.14.5',
      text: 'Licht de verschillende hydraulische of tractieliften toe: personenlift, goederenlift, traplift, paternosterlift, inclusief de onderdelen liftschacht, liftkooi, liftmachine en liftput.',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
    {
      code: 'B.14.6',
      text: 'Beschrijft de principes van een roltrap, rolpad en hellingbaan (stijgingspercentage en ruimtegebruik).',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
  ],

  questions: [
    // === B.14.2 — Traponderdelen: beeldvragen (maatvoering aanwijzen) ===
    {
      id: 'B14-2-beeld-aantrede',
      toetstermCode: 'B.14.2',
      type: 'mc',
      prompt: 'Welke maat geeft de **aantrede** aan (de blauwe maat B)?',
      image: {
        src: '/figs/vragen/trap-vraag.svg',
        caption: 'Doorsnede van een trap met twee maten A (rood) en B (blauw).',
        width: 'md',
      },
      options: [
        'De horizontale maat B — de diepte van een trede',
        'De verticale maat A — de hoogte van een trede',
        'Beide maten samen',
        'Geen van beide — dat is de trapboom',
      ],
      correctIndex: 0,
      explanation:
        'De aantrede is de horizontale diepte van een trede (maat B). De verticale maat A is de optrede (de hoogte). Onthoud: aantrede + 2 × optrede ≈ 600 mm.',
    },
    {
      id: 'B14-2-beeld-optrede',
      toetstermCode: 'B.14.2',
      type: 'mc',
      prompt: 'De rode maat A op deze tekening is de **optrede**. Wat is die?',
      image: {
        src: '/figs/vragen/trap-vraag.svg',
        caption: 'Doorsnede van een trap met maten A (rood, verticaal) en B (blauw, horizontaal).',
        width: 'md',
      },
      options: [
        'De horizontale diepte waarop je je voet zet',
        'De verticale hoogte tussen twee opeenvolgende treden',
        'De totale hoogte van de trap',
        'De breedte van de trap',
      ],
      correctIndex: 1,
      explanation:
        'De optrede (maat A) is de verticale hoogte tussen twee treden. De aantrede (maat B) is de horizontale diepte. Bij een woningtrap is de optrede meestal max. ~188 mm.',
    },

    // === B.14.1 — Trapvormen (5) ===
    {
      id: 'B14-1-a',
      toetstermCode: 'B.14.1',
      type: 'mc',
      prompt: 'Wat is een **spiltrap**?',
      options: [
        'Een trap met onderbordes',
        'Een spiraaltrap met treden om een centrale spil',
        'Een trap zonder leuning',
        'Een trap met spitsboogvormige treden',
      ],
      correctIndex: 1,
      explanation:
        'Een spiltrap heeft een **massieve centrale spil** als constructief én esthetisch hart. De treden zijn aan de spil bevestigd en draaien er als een spiraal omheen. Compact in oppervlak, maar de binnenzijde is smal (verdrijven nodig).',
    },
    {
      id: 'B14-1-b',
      toetstermCode: 'B.14.1',
      type: 'mc',
      prompt: 'Een **vlizotrap** is:',
      options: [
        'Een rechte trap met een verlaagde leuning',
        'Een prefab betontrap voor industriële toepassing',
        'Een inklapbare zoldertrap',
        'Een trap met een hoofdbaluster en bloktrede',
      ],
      correctIndex: 2,
      explanation:
        'Vlizotrap is een merknaam geworden voor het algemene begrip "inklapbare zoldertrap". De treden vouwen tegen het luik in het plafond op. Bedoeld voor toegang tot vliering of kelder (niet-verblijfsruimten); valt buiten Bbl-eisen voor reguliere trappen.',
    },
    {
      id: 'B14-1-c',
      toetstermCode: 'B.14.1',
      type: 'mc',
      prompt: 'Wanneer is een **bordes** verplicht halverwege een trap?',
      options: [
        'Altijd bij rechte trappen',
        'Bij meer dan 4 m hoogteverschil',
        'Alleen bij wenteltrappen',
        'Bij trappen tussen verdiepingen in een woning',
      ],
      correctIndex: 1,
      explanation:
        'Bij hoogteverschillen > 4 m moet er een bordes komen — als rustpunt voor de gebruiker én als valbeveiliging (kortere val bij ongeval). Een bovenbordes (min. 0,8 × 0,8 m) op de overloop is altijd verplicht.',
    },
    {
      id: 'B14-1-d',
      toetstermCode: 'B.14.1',
      type: 'mc',
      prompt:
        'Een **trap met onder- en bovenkwart** wordt vaak toegepast wanneer:',
      options: [
        'De woning monumentaal is',
        'De trap compacter in lengte moet',
        'Er een hoogteverschil van slechts één meter is',
        'De trap zwaar belast wordt door vrachtwagens',
      ],
      correctIndex: 1,
      explanation:
        'Een rechte steektrap vergt veel lengte op de plattegrond (~4 m bij gangbare verdiepingshoogte). Door bij begin en eind een kwart (90°) draai te maken, wordt de trap compacter in lengte maar gebruikt hij ruimte in breedte. Standaard in compacte rijwoningen.',
    },
    {
      id: 'B14-1-e',
      toetstermCode: 'B.14.1',
      type: 'mc',
      prompt:
        'Een **Engelse of wrongtrap** kenmerkt zich door:',
      options: [
        'Stalen treden zonder stootborden',
        'Een sierlijke trap met gebogen leuning en gedraaide bomen',
        'Een rechte trap met grote aantrede',
        'Een vlizo-systeem met inklapbare treden',
      ],
      correctIndex: 1,
      explanation:
        'De Engelse/wrongtrap is een esthetisch hoogwaardige trap met sierlijke gebogen leuning. De wrongstukken en kuipstukken — gedraaide leuningovergangen — maken vloeiende bochten mogelijk. Klassiek in monumentale woonhuizen en kastelen.',
    },

    // === B.14.2 — Onderdelen (5) ===
    {
      id: 'B14-2-a',
      toetstermCode: 'B.14.2',
      type: 'mc',
      prompt: 'Wat is de **aantrede** van een trap?',
      options: [
        'De verticale hoogte tussen twee treden',
        'De horizontale diepte van een trede',
        'De plaats waar de leuning begint',
        'De stootplank tussen twee treden',
      ],
      correctIndex: 1,
      explanation:
        'Aantrede = de horizontale lengte van een trede, gemeten op de looplijn (0,30 m van de muurzijde). Bbl-minimum in woningen: 220 mm. Bij gedraaide treden geldt dit op de looplijn — aan de binnenzijde mag de trede smaller zijn.',
    },
    {
      id: 'B14-2-b',
      toetstermCode: 'B.14.2',
      type: 'mc',
      prompt: 'De **optrede** is de:',
      options: [
        'Horizontale lengte van een trede',
        'Verticale hoogte tussen twee treden',
        'Verticale plank tussen twee treden (stootbord)',
        'Hoogte van de leuning boven de trede',
      ],
      correctIndex: 1,
      explanation:
        'Optrede = de hoogte van de stap. Bbl-maximum in woningen: 188 mm. Een te hoge optrede maakt de trap steil en oncomfortabel. Bij vaste verdiepingshoogte bepaalt de optrede het aantal treden: verdiepingshoogte / optrede.',
    },
    {
      id: 'B14-2-c',
      toetstermCode: 'B.14.2',
      type: 'mc',
      prompt: 'Wat is een **stootbord**?',
      options: [
        'Het schuine deel langs de zijkant van een trap dat de treden draagt',
        'De verticale plank tussen twee treden',
        'De plaats waar de hoofdbaluster staat',
        'De afwerklat op de leuning',
      ],
      correctIndex: 1,
      explanation:
        'Het stootbord is de verticale plank tussen twee treden. ~18 mm multiplex. Bij open trap (zonder stootborden) zie je door de trap heen — esthetische keuze maar geeft warmteverlies, geluidsoverlast en bij gladde bekleding extra trapneus-bescherming nodig.',
    },
    {
      id: 'B14-2-d',
      toetstermCode: 'B.14.2',
      type: 'mc',
      prompt: 'Wat is de **trapboom**?',
      options: [
        'De plaats waar de hoofdbaluster staat',
        'De schuine zijbalk waarin de treden hangen',
        'De verticale spijl onder de leuning',
        'Het bovenste deel van de leuning',
      ],
      correctIndex: 1,
      explanation:
        'De trapboom is de schuine balk aan de zijkant van de trap; de treden zijn er in krozen (uitsparingen) ingelaten. Een trap heeft meestal twee bomen: de **muurboom** (tegen de muur) en de **binnenboom/vrije boom** (aan de zijde van de leuning).',
    },
    {
      id: 'B14-2-e',
      toetstermCode: 'B.14.2',
      type: 'mc',
      prompt:
        'De **A + 2O = 600** regel (± 30 mm) geeft aan:',
      options: [
        'De minimale dikte van een trede en stootbord samen',
        'De regel aantrede + 2× optrede voor comfort',
        'De maximale verdiepingshoogte',
        'De wettelijk verplichte hoogte van de leuning',
      ],
      correctIndex: 1,
      explanation:
        'A + 2O = 600 (± 30) is de **gulden trapregel**: aantrede + 2× optrede tussen 570 en 630 mm voor comfortabel beloopbaarheid. Onder 570 wordt het te dansend, boven 630 te uitgestrekt. Volgt uit de natuurlijke staplengte op een helling. Voorbeeld: optrede 188 + aantrede 224 → 600 mm ✔.',
    },

    // === B.14.3 — Ruimtebeslag (3) ===
    {
      id: 'B14-3-a',
      toetstermCode: 'B.14.3',
      type: 'mc',
      prompt:
        'Bij een **vaste verdiepingshoogte** wordt de optrede **kleiner** gemaakt (flauwere trap). Wat gebeurt er?',
      options: [
        'Het aantal treden neemt af',
        'Meer treden, dus meer ruimtebeslag in de lengte',
        'De aantrede neemt automatisch toe',
        'De vrije hoogte boven de trap wordt groter',
      ],
      correctIndex: 1,
      explanation:
        'Verdiepingshoogte = aantal treden × optrede. Bij kleinere optrede ⇒ méér treden ⇒ bij gelijke aantrede ⇒ lángere trap. Voorbeeld: 2.700 mm / 180 mm = 15 treden; bij 150 mm wordt het 18 treden — ~25% méér lengte.',
    },
    {
      id: 'B14-3-b',
      toetstermCode: 'B.14.3',
      type: 'mc',
      prompt:
        'In nieuwbouw mag de optrede in woningen **maximaal** zijn:',
      options: ['170 mm', '188 mm', '220 mm', '250 mm'],
      correctIndex: 1,
      explanation:
        'Bbl-maximum optrede in nieuwbouwwoningen: 188 mm. Daarboven wordt de trap te steil en onveilig. Minimum aantrede 220 mm (gemeten op de looplijn). In bestaande woningen worden hogere optreden soms gedoogd, maar bij verbouwing geldt de nieuwbouw-eis.',
    },
    {
      id: 'B14-3-c',
      toetstermCode: 'B.14.3',
      type: 'mc',
      prompt:
        'Boven elke trede in een woning moet een vrije hoogte zijn van minimaal:',
      options: [
        '1,90 m (zoals onder lateien)',
        '2,30 m (Bbl-eis boven trappen)',
        '2,60 m (zoals woningvloer)',
        '3,00 m',
      ],
      correctIndex: 1,
      explanation:
        'Bbl-eis: vrije hoogte boven een trap minimaal 2,30 m, gemeten recht boven de aantrede. Boven een woningvloer geldt 2,60 m. Een te lage trap-vrije hoogte (bv. door uitkraging boven de trap) is een bouwfout en reden tot afkeuring.',
    },

    // === B.14.4 — Extra trede en looplijn (3) ===
    {
      id: 'B14-4-a',
      toetstermCode: 'B.14.4',
      type: 'mc',
      prompt: 'Op welk punt wordt de **aantrede** van een gedraaide trede gemeten?',
      options: [
        'Aan de binnenzijde (smalste deel)',
        'Aan de buitenzijde (breedste deel)',
        'Op de looplijn',
        'Gemiddeld over binnen- en buitenzijde',
      ],
      correctIndex: 2,
      explanation:
        'De aantrede wordt op de **looplijn** gemeten — de denkbeeldige loopkant op 0,30 m van de muur. Daar moet voldoende treden-breedte zijn. Aan de binnenzijde van een kwarttrede mag de trede smaller zijn (bij spiltrap zelfs naar een punt), maar op de looplijn telt het.',
    },
    {
      id: 'B14-4-b',
      toetstermCode: 'B.14.4',
      type: 'mc',
      prompt:
        'Een rechte steektrap heeft 14 treden met optrede 195 mm. De verbouwer voegt 1 extra trede toe terwijl de verdiepingshoogte gelijk blijft. Wat is een logisch gevolg?',
      options: [
        'De optrede wordt groter (steiler)',
        'De optrede wordt kleiner: 2.730/15 = 182 mm',
        'De aantrede wordt automatisch breder',
        'De vrije hoogte boven de trap neemt toe',
      ],
      correctIndex: 1,
      explanation:
        '14 × 195 = 2.730 mm verdiepingshoogte. Bij 15 treden wordt de optrede 2.730/15 = 182 mm — kleiner, dus flauwer en comfortabeler. De aantrede blijft gelijk tenzij apart aangepast. Trap wordt iets langer (extra trede × aantrede meer in vloeroppervlak).',
    },
    {
      id: 'B14-4-c',
      toetstermCode: 'B.14.4',
      type: 'mc',
      prompt:
        'Wat betekent **"verdrijven"** in de trapleer?',
      options: [
        'Het gladmaken van de trapleuning',
        'De gedraaide treden geleidelijk verdelen',
        'Het verwijderen van een trede uit een bestaande trap',
        'Het anti-slip maken van treden',
      ],
      correctIndex: 1,
      explanation:
        '"Verdrijven" is het ontwerpdetail van overgang tussen recht en gedraaid. De aantrede op de klimlijn moet over de hele trap zoveel mogelijk gelijk zijn. Door de overgang geleidelijk te verdelen over meer treden ("over de hele lengte"), voorkom je dat één trede plotseling veel smaller of breder is dan zijn buren — anders ongelijke looppassen en valgevaar.',
    },

    // === B.14.5 — Liften (5) ===
    {
      id: 'B14-5-a',
      toetstermCode: 'B.14.5',
      type: 'mc',
      prompt:
        'Wat is het hoofdverschil tussen een **tractielift** en een **hydraulische lift**?',
      options: [
        'Tractie is voor goederen, hydraulisch voor personen',
        'Tractie: kabels en tegenwicht; hydraulisch: vloeistofcilinder',
        'Tractie is duurder in onderhoud, hydraulisch goedkoper',
        'Hydraulisch is alleen voor brandweerliften',
      ],
      correctIndex: 1,
      explanation:
        'Tractielift: kabels + tegenwicht + motor op trommel = groot bereik (geen hoogtelimiet), snel. Hydraulische lift: olie-cilinder duwt kooi omhoog = trillingvrij maar langzaam, max. ~20 m. Tractie standaard voor hoogbouw, hydraulisch voor lage gebouwen en zware goederen.',
    },
    {
      id: 'B14-5-b',
      toetstermCode: 'B.14.5',
      type: 'mc',
      prompt: 'Wat is de **liftput**?',
      options: [
        'De ruimte boven het hoogste niveau in de schacht',
        'Het deel van de schacht onder het laagste niveau',
        'De ruimte waar de liftmachine staat',
        'De aansluiting van de lift op het elektriciteitsnet',
      ],
      correctIndex: 1,
      explanation:
        'De liftput is het onderste deel van de schacht, **onder de laagste verdieping**. Bevat de **buffers** die de kooi en het tegenwicht opvangen bij stilstand of doorschietbeweging, en eventueel de **noodstop-schakelaar**. Vereist voor veiligheid bij kabel- of vangmechanisme-falen.',
    },
    {
      id: 'B14-5-c',
      toetstermCode: 'B.14.5',
      type: 'mc',
      prompt: 'Een **paternosterlift** is:',
      options: [
        'Een goederenlift zonder kooideuren',
        'Een lift met continu circulerende open kooien',
        'Een traplift met platform',
        'Een hydraulische lift voor lage gebouwen',
      ],
      correctIndex: 1,
      explanation:
        'Paternosterlift = continu draaiend systeem met open kooien — reizigers stappen in een bewegende kooi en uit op de juiste verdieping. Door valgevaar (geen deuren, voortdurende beweging) wettelijk niet meer geïnstalleerd in Nederland. Bestaande exemplaren mogen blijven (vaak monumentale waarde in oudere kantoorgebouwen of universiteiten).',
    },
    {
      id: 'B14-5-d',
      toetstermCode: 'B.14.5',
      type: 'mc',
      prompt:
        'Wat is een **brandweerlift**?',
      options: [
        'Een lift die alleen door bewoners gebruikt mag worden',
        'Een brandweerlift in een brandwerende schacht met noodstroom',
        'Een hydraulische lift met versnelde snelheid',
        'Een lift met grotere kooi voor brancards',
      ],
      correctIndex: 1,
      explanation:
        'Bij verblijfsgebieden boven 20 m hoogte is een brandweerlift verplicht. Bij brand worden alle andere liften terug naar beneden gestuurd; alleen de brandweer kan met sleutel deze lift bedienen. Brandwerende schacht, noodstroom, brandwerende deuren. Standaard in hoogbouw en utiliteit.',
    },
    {
      id: 'B14-5-e',
      toetstermCode: 'B.14.5',
      type: 'mc',
      prompt:
        'De **Warenwetbesluit liften** schrijft voor dat een lift periodiek wordt gekeurd. Hoe vaak na de eerste keuring?',
      options: [
        'Elke 6 maanden',
        'Elke 12 maanden',
        'Elke 18 maanden door een aangewezen instelling',
        'Elke 5 jaar',
      ],
      correctIndex: 2,
      explanation:
        'Het Warenwetbesluit liften: eerste periodieke keuring na 12 maanden, daarna elke **18 maanden** door een aangewezen instelling. De Arbeidsinspectie handhaaft. De keuring controleert remmen, vanginrichting, deurvergrendelingen, noodstop en algehele staat.',
    },

    // === B.14.6 — Roltrap, rolpad, hellingbaan (3) ===
    {
      id: 'B14-6-a',
      toetstermCode: 'B.14.6',
      type: 'mc',
      prompt:
        'Wat is de standaard hellingshoek van een **roltrap**?',
      options: ['~12°', '~22°', '~36°', '~45°'],
      correctIndex: 2,
      explanation:
        'Roltrappen hebben een hellingshoek van ~36° (Bbl-eis voor personen-roltrappen). Steiler is te oncomfortabel; flauwer is geen roltrap meer maar rolbaan. Capaciteit ~4.000–8.000 personen per uur; snelheid ~0,5–0,75 m/s.',
    },
    {
      id: 'B14-6-b',
      toetstermCode: 'B.14.6',
      type: 'mc',
      prompt:
        'Wat is een **rolbaan** (in tegenstelling tot een rolpad)?',
      options: [
        'Een horizontaal lopende kettingband op luchthavens',
        'Een hellend rolpad voor karren',
        'Een verticale lift in winkelcentra',
        'Een roltrap met dichtere treden',
      ],
      correctIndex: 1,
      explanation:
        'Rolbaan = hellend (max. ~12°), vlak (niet getrapt), met anti-slip groeven waarop winkelwagenwielen klemmen. Voor personen mét winkelwagens of bagagekarren. Rolpad daarentegen is volledig horizontaal en alleen voor versneld lopen over lange afstanden (luchthavens).',
    },
    {
      id: 'B14-6-c',
      toetstermCode: 'B.14.6',
      type: 'mc',
      prompt:
        'Voor **rolstoeltoegankelijkheid** moet een hellingbaan maximaal welke hellingsverhouding hebben?',
      options: [
        '1:6 (steile helling)',
        '1:8',
        '1:12',
        '1:24 (zeer flauw)',
      ],
      correctIndex: 2,
      explanation:
        'Voor rolstoeltoegankelijkheid is **1:12 of flauwer** vereist (Bbl, NEN). Bij 1 m hoogteverschil is dat 12 m horizontaal — vaak het ruimtebeslag dat een lift aantrekkelijker maakt voor compacte ontwerpen. Voor goederen (steekwagen) mag tot 30°. Hellingbaan altijd stroef oppervlak.',
    },
  ],

  terms: [
    {
      term: 'Trapboom',
      definition:
        'Schuine balk waarin treden zijn gemonteerd; soms volledig dichte gesloten zijwand.',
    },
    {
      term: 'Trede',
      definition:
        'Horizontaal deel van een trap waar je op staat; bestaat uit aantrede (diep­te) en optrede (hoogte).',
    },
    {
      term: 'Aantrede',
      definition:
        'Horizontale (loop)maat van een trede; voor woning ≥ 220 mm volgens Bbl.',
    },
    {
      term: 'Optrede',
      definition:
        'Verticale hoogte tussen twee opeenvolgende treden; voor woning ≤ 188 mm volgens Bbl.',
    },
    {
      term: 'Welstandsregel (trap)',
      definition:
        'Vuistregel: 2× optrede + aantrede ≈ 600 mm — geeft prettig loopritme.',
    },
    {
      term: 'Bordes',
      definition:
        'Horizontaal platform tussen twee trapdelen; verplicht bij hoogteverschil > 4 m volgens Bbl.',
    },
    {
      term: 'Leuning',
      definition:
        'Greepbare rand langs een trap; verplicht aan minimaal één zijde voor trappen ≥ 1,5 m hoogte.',
    },
    {
      term: 'Trapgat',
      definition:
        'Opening in de vloer waar de trap doorheen gaat; afmeting bepaald door trapsoort en helling.',
    },
    {
      term: 'Vluchttrap',
      definition:
        'Trap die als vluchtroute fungeert bij brand; eisen aan breedte, brandwerendheid en doorgangshoogte.',
    },
    {
      term: 'Hellingbaan',
      definition:
        'Schuin loopvlak voor mindervaliden — max. 1:25 voor lange afstanden, 1:12 voor korte (Bbl).',
    },
    {
      term: 'Lift',
      definition:
        'Verticaal verkeersmiddel in koker; verplicht in woongebouwen vanaf 12,5 m vloer­hoogte bovenste verblijfsverdieping.',
    },
    {
      term: 'Liftkooi',
      definition:
        'Het verplaatsbare deel van de lift waarin personen of goederen worden vervoerd.',
    },
    {
      term: 'Liftschacht',
      definition:
        'Verticale koker waarin de liftkooi beweegt; brand­scheidend uitgevoerd.',
    },
    {
      term: 'Hijsmechaniek',
      definition:
        'Aandrijving van de lift — tractie (kabel + motor) of hydraulisch (cilinder met olie).',
    },
    {
      term: 'Brandlift',
      definition:
        'Lift speciaal uitgevoerd voor de brandweer; reservevoeding, brand­bestendige bediening, sleutel­schakelaar.',
    },
  ],

  games: [
    {
      id: 'B14-gapfill-1', type: 'gapfill',
      title: 'Trapmaten en regel',
      text:
        'De horizontale maat van een trede heet de {{aantrede}} (min. 220 mm), de verticale hoogte heet de {{optrede}} (max. 188 mm). ' +
        'De gulden trapregel: A + 2O ≈ {{600}} mm. ' +
        'De looplijn ligt op {{0,30}} m van de muurzijde. ' +
        'Bij hoogteverschil > 4 m is een {{bordes}} halverwege verplicht.',
      distractors: ['750', '0,15', 'spil', 'wenteltrap'],
    },
    {
      id: 'B14-sort-1', type: 'sort',
      title: 'Trapvormen — sorteer',
      categories: ['Rechte / kwart-trap', 'Spiraal / wentel', 'Bordes / overig'],
      items: [
        { label: 'Rechte steektrap', category: 'Rechte / kwart-trap' },
        { label: 'Trap met onderkwart', category: 'Rechte / kwart-trap' },
        { label: 'Trap met onder- en bovenkwart', category: 'Rechte / kwart-trap' },
        { label: 'Wenteltrap', category: 'Spiraal / wentel' },
        { label: 'Spiltrap', category: 'Spiraal / wentel' },
        { label: 'Bordestrap', category: 'Bordes / overig' },
        { label: 'Vlizotrap', category: 'Bordes / overig' },
      ],
    },
    {
      id: 'B14-matching-1', type: 'matching',
      title: 'Lift- en traponderdelen',
      pairs: [
        { left: 'Tractielift', right: 'Kabels + tegenwicht — groot bereik, snel' },
        { left: 'Hydraulische lift', right: 'Olie-cilinder duwt kooi op — max. ~20 m' },
        { left: 'Hybride warmtepomp', right: 'Bestond niet bij liften — verwarming!' },
        { left: 'Trapboom', right: 'Schuine balk waarin treden zijn opgehangen' },
        { left: 'Baluster', right: 'Verticale spijl onder leuning' },
        { left: 'Liftput', right: 'Onderste schachtdeel met buffers' },
      ],
    },
  ],
}
