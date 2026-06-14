import type { Topic } from '../types/content'

export const C_3_gas: Topic = {
  code: 'C.3',
  section: 'C',
  title: 'Gasinstallaties',
  chapterRef: 'Lesboek hoofdstuk 22',
  blurb:
    'Aardgasvoorziening (hoofdleiding, dienstleiding, gasmeter, binnenleiding), gasleidingmaterialen en hulpstukken, verbrandingstoestellen met open vs gesloten afvoer, en de consequenties van vervanging van een gasinstallatie door elektra in het kader van de energietransitie.',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · Gasaansluiting, leidingen en hulpstukken',
      toetstermCodes: ['C.3.1'],
      body: `
### Aardgas in Nederland
- **Sinds 1959** (vondst Slochteren) is aardgas de standaard energiebron geweest voor verwarming en koken in NL
- **Geodoreerd**: aardgas zelf is reukloos — voor distributie wordt **THT (tetrahydrothiofeen)** toegevoegd dat het de typische "rotte eieren" geur geeft → gaslek wordt direct ruikbaar
- **Niet giftig**, wel **verstikkend** (verdringt zuurstof) en **explosief** (5–15 % gas in lucht)
- **Verbrandingsproducten**: CO₂, NOₓ, waterdamp + klein percentage CO
  - **Blauwe vlam** = goede verbranding
  - **Gele roetende vlam** = slechte verbranding (onvoldoende lucht → koolmonoxide!)

### Energietransitie
- **Sinds 2018**: gas-aansluitplicht voor nieuwbouw afgeschaft
- **Nieuwbouw 2024+**: vrijwel altijd "all-electric" (warmtepomp) of warmtenet — geen gas meer
- **Bestaande bouw**: nog ~85 % aansluitingen op gas (2023)
- **Toekomst**: APK-keuring voor oude gasinstallaties; uitfasering richting 2050

### Vorm en opbouw

**Hoofdleiding** (in trottoir/wegberm)
- Diepte ~800 mm (vorstvrij)
- Materiaal: PE-buis (Polyetheen) of stalen leiding (oudere wijken)
- Druk: lage druk 30 mbar in woonwijken, middendruk 100 mbar–8 bar in industrieaansluitingen
- Beheerd door **netbeheerder** (Stedin, Liander, Enexis)

**Dienstleiding** (van hoofdleiding naar gasmeter)
- Per woning eigen dienstleiding
- Inclusief de **gasmeter** en de **hoofdkraan** (vóór de meter)
- Eigendom en onderhoud netbeheerder tot aan de gasmeter

**Gasmeter**
- Volume-meter in **m³** (slim of mechanisch)
- Eigendom netbeheerder
- Plaats: in de meterkast tussen watermeter en elektriciteitsmeter
- **Hoofdkraan** vóór de meter — gele markering, kwartdraai-bediening

**Binnenleiding** (vanaf gasmeter tot toestellen)
- Verantwoordelijkheid van de **bewoner / eigenaar**
- **NEN 1078** schrijft de eisen voor

### Leidingmaterialen voor binnenleiding
| Materiaal | Toepassing | Verbinding |
|---|---|---|
| **Stalen draadpijp / gladde stalen pijp** | Ø 15–50 mm — standaard binnen | Schroefdraad (witdraad + hennep of vlas) |
| **Koper (halfhard of zacht)** | Modern, gemakkelijk te buigen | Solderen (zilversoldeer) of klem­fittingen |
| **Kunststof (PE/PB)** | Alleen in grond tussen gebouwen, met toestemming netbeheerder | Spiegellas of elektro-steekmof |
| **Meerlaagse buizen** (koper/alu binnen + kunststof) | Modern multifunctioneel | Pers- of klemfittingen |

**Mantelbuis** verplicht bij elke doorvoer (vloer, wand): binnenmiddellijn ≥ 1,5× de leidingmiddellijn — gaslek kan via mantelbuis naar buiten in plaats van naar binnen.

### Hulpstukken
- **Knie 90°** of T-stuk voor richtingverandering of aftakking
- **Reductiekoppeling** voor diameteroverlap
- **Sok** (binnendraadkoppeling) en **nippel** (buitendraadkoppeling)
- **Drie-knoopstuk** voor demontabele verbindingen
- **Afsluitkraan** vóór elk verbruikstoestel — kwartdraai-kogel
- **Gasstop / gasstop-stekker** voor verwijderbare apparaten (gasfornuis)

### Toebehoren
- **CE-keurmerk + Gaskeur (KIWA)** verplicht op alle verbruikstoestellen
- **Aansluitmethoden** voor toestellen:
  - **Vaste aansluiting** (combiketel, geiser) — directe leiding
  - **Rubberen gasslang** max. 60 cm (kookplaat, gasfornuis — losse apparaten)
  - **Buigbare metalen flexibel** (modern alternatief voor slang)
  - **Klemverbinding** (los apparaat)
- **Lekzoeker**: **zeepsop** op de verbindingen (nooit aansteker!) — bellen = lekkage

### Keuring en installatie
- **Gecertificeerde installateurs** (BEI/KIWA) alleen mogen aanleggen
- **Drukproef**: hoofdkraan dicht, druk aanbrengen, gedurende 30 min meten — geen drukdaling acceptabel
- **Niet-gecertificeerden** mogen alleen onder toezicht werken
- Bij iedere reparatie of uitbreiding: nieuwe drukproef

### Verbrandingslucht en rookgasafvoer
- **1 m³ aardgas** vereist **~15 m³ lucht** voor volledige verbranding
- Per m³ aardgas ontstaat **1,4 liter water** (waarvan 1,3 liter waterdamp)

**Twee categorieën toestellen**:
- **Open toestel**: verbrandingslucht uit de opstelplaats (kookplaat, gasgeiser, sommige oude haarden) — vraagt voldoende ventilatie van de ruimte
- **Gesloten toestel**: lucht én rookgas via een gesloten afvoer (concentrische pijp door dak/gevel) — moderne combiketel
  - Veiliger (geen CO-vorming in de woonruimte)
  - **GAVO-aansluiting**: Gesloten Afvoer- en Verbrandingsluchttoevoer

**Afvoerkanaal vs afvoerleiding**:
- **Afvoerkanaal** — deel van bouwkundige constructie, één toestel per kanaal, **nisbus** (aluminium aansluitstuk) + kap op uitmonding
- **Afvoerleiding** — losse pijp uit fabrieksuitvoering (in diverse maten verkrijgbaar)
      `.trim(),
    },

    {
      heading: '2 · Gasleidingverloop op installatietekening',
      toetstermCodes: ['C.3.2'],
      body: `
B.3.2 vraagt om aan de hand van een **installatietekening** het gasleidingverloop te kunnen weergeven en interpreteren.

### Tekenconventie voor gas
- **Kleur**: meestal **geel** op uitvoerings­tekeningen (of zwarte streep met code "G")
- **Lijntype**: doorgetrokken zwart met **G**-aanduiding, of geel doorgetrokken
- **Symbolen** volgens NEN-norm

### Standaardsymbolen
| Symbool | Betekenis |
|---|---|
| Driehoek met G | Gasmeter |
| Kogelkraan-symbool | Hoofdkraan |
| Kraan-symbool met streep | Afsluitkraan (vóór toestel) |
| Trapezium of cirkel | Verbruikstoestel (afhankelijk van type) |
| Concentrische cirkels | Concentrische rookgasafvoer/luchttoevoer (gesloten toestel) |
| Streep met letter T | T-stuk (aftakking) |
| Bocht-symbool | Richtingverandering |
| Pijl | Stromingsrichting |

### Verloop op tekening — typisch in woning
1. **Hoofdleiding** in straat → naar perceelgrens
2. **Dienstleiding** door spouwmuur of kelder → **gasmeter** in meterkast
3. **Stijgleiding** verticaal naar bovenverdiepingen (in vide of leidingschacht)
4. **Verzamelleidingen** horizontaal per verdieping
5. **Aftakkingen** naar afzonderlijke toestellen via T-stukken
6. **Afsluitkraan** vóór elk toestel
7. **Aansluiting** op toestel (vast of via slang)

### Wat moet zichtbaar zijn op de tekening?
- **Hoofdkraan** locatie (in nood afsluiten)
- **Gasmeter** plaats
- **Doorvoer met mantelbuis** door elke wand of vloer
- **Toestellen** met type en aanduiding (HR-ketel, kookplaat, fornuis)
- **Lengtes en diameters** van elke leiding
- **Materiaal**-aanduiding per segment
- **Vereiste ventilatie-openingen** rond open toestellen
- **Rookgasafvoer-verloop** voor gesloten toestellen

### Veel voorkomende fouten op tekeningen
- Doorvoer zonder mantelbuis ingetekend
- Te lange flexibele aansluitslang (max. 60 cm)
- Open verbrandingstoestel zonder ventilatieopening
- Te smalle leidingdiameter voor toestelvermogen (drukval)
- Geen afsluitkraan vóór toestel

### Bij verbouwing/installatiewijziging
- **Drukproef** verplicht na elke wijziging
- **Gecertificeerde installateur** alleen mag aanpassen
- **Gemeente / netbeheerder** informeren bij grote wijzigingen
      `.trim(),
    },

    {
      heading: '3 · Consequenties bij vervanging gas door elektra',
      toetstermCodes: ['C.3.3'],
      body: `
In het kader van de **energietransitie** wil Nederland van het gas af richting 2050. Bij vervanging van een bestaande gasinstallatie door elektra zijn er veel consequenties — technisch, financieel en bouwfysisch.

### Wat wordt vervangen?
**Gas-toestellen**:
- **Cv-ketel (HR-combiketel)** — verwarming + warm tapwater
- **Gaskookplaat / gasfornuis**
- **Eventueel: geiser, gashaard, gasoven**

**Vervangers**:
- **Warmtepomp** (lucht-water, bodem-water, hybride) — voor cv én tapwater
- **Inductiekookplaat** (vervangt gaskookplaat)
- **Elektrische boiler** of **warmtepompboiler** voor warm tapwater
- **Eventueel: elektrische haard, oven (210 V)**
- **Vloerverwarming / LTV-systeem** om warmtepomp efficiënt te laten werken

### 1. Bouwfysische consequenties

#### Isolatie noodzakelijk
Een warmtepomp werkt **alleen efficiënt bij goed geïsoleerde woning**:
- **Buitenwand Rc ≥ 4,7 m²K/W**
- **Dak Rc ≥ 6,3**
- **Vloer Rc ≥ 3,7**
- **Kozijnen U ≤ 1,65 W/m²K** (minimaal HR++-glas)
- **Luchtdicht maken** kierdichting

Zonder goede isolatie: warmtepomp wordt te zwaar belast, energierekening hoger dan met gas was. Bij oude woning vergt dit vaak **na-isolatie van de hele gevel** (vergt veel investeringen).

#### Lagere temperatuur-verwarming (LTV)
Een warmtepomp levert efficiënt water op **35–55 °C** (in plaats van de 70–80 °C van een cv-ketel). Bestaande **radiatoren** zijn vaak te klein voor deze lage temperatuur — vervangen door:
- **Grotere radiatoren** (~1,5–2× oppervlak)
- **Vloerverwarming** (geschikt voor 35 °C — ideaal voor warmtepomp)
- **Wand- of plafondverwarming**

### 2. Installatie­technische consequenties

#### Elektrische capaciteit
- **Inductiekookplaat** ~7,5 kW → **eigen 16 A driefasen-groep**
- **Warmtepomp** binnenunit ~3–8 kW
- **Warmwaterboiler** ~2,5 kW
- **Aansluit­capaciteit** vaak van 1×35 A naar **3×25 A driefasen** of zelfs **3×35 A** vergen — gemeente/netbeheerder schakelt om

#### Verzwaring meterkast
- **Hoofdaansluiting** vergroten (kosten ~€ 600–1.500)
- **Nieuwe groepenkast** met meer groepen + zwaardere aardlek­schakelaars
- Soms **eigen perilexaansluiting** (5-polig) voor warmtepomp/kookplaat

#### Bouwkundige aanpassingen
- **Buitenunit warmtepomp** plaatsen — geluid! buurman, vergunning?
- **Boiler­ruimte** voor warmwater (200–300 l) — vaak in bijkeuken, zolder, kelder
- **Binnenunit warmtepomp** — kleed­kast of cv-ruimte
- **Vloerverwarming**: vloer openhakken of -slopen, opnieuw aanleggen
- **Gas dichtleggen**: gasmeter laten verwijderen door netbeheerder (~€ 75) en gas­aansluiting opzeggen

### 3. Financiële consequenties

#### Investeringskosten (gangbare rijwoning)
- Warmtepomp (lucht-water): € 8.000–18.000 inclusief installatie
- Inductiekookplaat: € 600–2.500 incl. plaatsing
- Verzwaring aansluiting: € 600–1.500
- Vloerverwarming aanleggen: € 3.000–8.000
- Na-isolatie woning (gevel, dak, vloer): € 8.000–25.000
- **Totaal € 20.000–50.000** voor volledige all-electric

#### Subsidies (2024–2026)
- **ISDE** (Investeringssubsidie duurzame energie): tot € 3.500 voor warmtepomp
- **Gemeente­subsidies** voor isolatie
- **BTW-vrijstelling** op zonnepanelen (sinds 2023)

#### Operationele kosten
- **Stroomkosten warmtepomp** vs gas: bij goede isolatie ~30–40 % lager
- Bij slechte isolatie: vergelijkbaar of hoger
- Geen onderhoud van gasketel; wel jaarlijkse controle warmtepomp (~€ 150)
- Gemiddelde terugverdientijd: 12–20 jaar (sterk afhankelijk van isolatie)

### 4. Praktische consequenties

#### Verlies aan capaciteit
- **Bij koud weer**: lucht-water-warmtepomp verliest rendement (COP daalt van 4 bij 7 °C naar 2 bij –10 °C). Bij echte vorst soms onvoldoende warmte
- **Oplossing**: hybride systeem (warmtepomp + cv-ketel voor vorstdagen) — vaker gekozen in stap-voor-stap-transitie

#### Geluid van buitenunit
- 40–55 dB(A) op 1 m — bij oudere units soms problematisch
- **Wettelijke grens** 's nachts: 40 dB(A) op perceelgrens
- Locatie zorgvuldig kiezen: niet aan slaapkamerzijde van buurman

#### Tapwater-comfort
- **Warmtepompboiler** vergt grotere opslag (200–300 l)
- **Doorstroom warm water** is minder krachtig dan combiketel CW-5/6
- Korte 'piek' van douche moet binnen de boilercapaciteit blijven

### 5. Voor de makelaar

- **Energielabel**: woning met warmtepomp + isolatie krijgt vaak label **A++** of beter
- **Vraagprijs**: woningen "off-gas" zijn aantrekkelijk voor kopers die niet meer zelf willen investeren
- **Documentatie**: vraag overdracht­papieren warmtepomp, garantiebewijzen, BTW-rekeningen
- **Onderhouds­contract**: vaak doorlopend met de installateur — informeren bij verkoop
- **Geluidsklachten** buren: check bij oudere units of er klachten zijn

### Toekomst — warmtenet en waterstof
- **Warmtenet**: in sommige wijken (Heerlen, Almere, Rotterdam, Amsterdam-Houthavens) als alternatief
- **Waterstof in bestaande gasleidingen**: experimenteel (Stad aan't Haringvliet, Hoogeveen) — toekomstige optie voor moeilijk te isoleren panden
      `.trim(),
    },
  ],

  toetstermen: [
    {
      code: 'C.3.1',
      text: 'Herkent de gasaansluiting inclusief gasleidingen, hulpstukken en toebehoren.',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'C.3.2',
      text: 'Geeft aan de hand van installatietekeningen het gasleidingverloop weer.',
      niveau: 'BT2',
      bloom: 'Kennis',
      metDrawing: true,
    },
    {
      code: 'C.3.3',
      text: 'Verklaart de consequenties indien een bestaande gasinstallatie vervangen wordt door elektra.',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
  ],

  questions: [
    // C.3.1 (5)
    {
      id: 'C3-1-a',
      toetstermCode: 'C.3.1',
      type: 'mc',
      prompt: 'Waarom wordt aardgas **geodoreerd**?',
      options: [
        'Voor de smaak van de toestellen',
        'Aardgas is van nature reukloos; THT (tetrahydrothiofeen) wordt toegevoegd zodat een gaslek direct ruikbaar is — veiligheidsmaatregel',
        'Om verbranding te verbeteren',
        'Om de gele vlamkleur te krijgen',
      ],
      correctIndex: 1,
      explanation:
        'Aardgas is van nature reukloos. Vóór distributie wordt THT (tetrahydrothiofeen) toegevoegd dat een sterke "rotte eieren" geur geeft. Daardoor kan een gaslek vrijwel altijd worden waargenomen vóór dat een explosief mengsel ontstaat. Een levensreddende veiligheidsmaatregel.',
    },
    {
      id: 'C3-1-b',
      toetstermCode: 'C.3.1',
      type: 'mc',
      prompt: 'Wat duidt een **gele roetende vlam** op bij een gasvuur aan?',
      options: [
        'Een goed afgestelde brander',
        'Slechte verbranding door onvoldoende lucht → koolmonoxide (CO) kan ontstaan, levensgevaarlijk',
        'Te veel verwarmingsvermogen',
        'Normaal verschijnsel bij koud opstarten',
      ],
      correctIndex: 1,
      explanation:
        'Een blauwe vlam = volledige verbranding (overmaat lucht). Een gele, roetende vlam = onvoldoende lucht of vuile brander → onvolledige verbranding → **koolmonoxide (CO)** als bijproduct. CO is reukloos en levensgevaarlijk (verstikkend). Bij gele vlam: meteen brander laten inspecteren door installateur, ventileren!',
    },
    {
      id: 'C3-1-c',
      toetstermCode: 'C.3.1',
      type: 'mc',
      prompt: 'Welke leidingmaterialen zijn toegestaan voor de **binnen­leiding** in een woning?',
      options: [
        'Alleen koper',
        'Stalen draadpijp, gladde stalen pijp, koper (halfhard/zacht), of meerlaagse buizen (koper/alu + kunststof). Kunststof alleen in grond tussen gebouwen met toestemming netbeheerder',
        'PVC en HDPE',
        'Alleen verzinkt staal',
      ],
      correctIndex: 1,
      explanation:
        'Volgens NEN 1078: binnenleiding mag uit stalen draadpijp/gladde stalen pijp zijn (schroefdraadverbindingen), koper (solderen of klemfittingen), of meerlaagse buizen. **Geen kunststof binnen** vanwege brand- en thermische gevoeligheid. Kunststof (PE/PB) alleen in grond tussen gebouwen, met toestemming van de netbeheerder.',
    },
    {
      id: 'C3-1-d',
      toetstermCode: 'C.3.1',
      type: 'mc',
      prompt: 'Bij een **doorvoer van de gasleiding door een wand of vloer** moet er een ... om de leiding:',
      options: [
        'Isolatieschil',
        'Mantelbuis met binnenmiddellijn ≥ 1,5× de leidingmiddellijn — eventueel gaslek kan via mantelbuis naar buiten in plaats van naar binnen',
        'Brandwerende coating',
        'Geluidsdempingslaag',
      ],
      correctIndex: 1,
      explanation:
        'Verplicht: bij elke doorvoer een mantelbuis met binnenmiddellijn ≥ 1,5× de leidingdiameter. Bij een gaslek kan het gas via de mantelbuis naar buiten (niet in de woning). Voorkomt CO-vergiftiging en explosiegevaar bij ondichte aansluiting in de wand. Belangrijke veiligheids­regel in NEN 1078.',
    },
    {
      id: 'C3-1-e',
      toetstermCode: 'C.3.1',
      type: 'mc',
      prompt: 'Hoe spoor je een **gaslek in een leiding** op?',
      options: [
        'Met een aansteker — vlammetje signaleert het lek',
        'Met zeepsop op de verbindingen — bellen ontstaan op de lekkende plaats',
        'Met een rookkachel',
        'Met blauwe vlam-tester',
      ],
      correctIndex: 1,
      explanation:
        '**Zeepsop** (water + afwasmiddel) op de verbindingen aanbrengen. Bij een lek vormen zich bellen door de uitstromende gas. Dit is een eeuwenoude maar uiterst effectieve methode. **Nooit met aansteker** — explosie­gevaar. Voor grote installaties: drukproef (gedurende 30 minuten geen drukval).',
    },

    // C.3.2 (3)
    {
      id: 'C3-2-a',
      toetstermCode: 'C.3.2',
      type: 'mc',
      prompt: 'Op een installatietekening wordt een **gasleiding** meestal weergegeven met:',
      options: [
        'Een rode lijn',
        'Een gele lijn of zwarte lijn met G-aanduiding — onderscheidende kleurconventie',
        'Een streep-stippellijn',
        'Een groene lijn',
      ],
      correctIndex: 1,
      explanation:
        'Standaard: gasleiding op tekening = **geel** (continue lijn) of zwarte lijn met code "G". Onderscheid van andere installaties: blauw = koudwater, rood = warmwater, groen = riolering (HWA/VWA), zwart = elektra. Eenduidige kleurconventie volgens NEN voor monteurs en inspecteurs.',
    },
    {
      id: 'C3-2-b',
      toetstermCode: 'C.3.2',
      type: 'mc',
      prompt: 'Wat is het verloop van het gas in een woning op tekening?',
      options: [
        'Toestel → meter → hoofdleiding → straat',
        'Hoofdleiding → dienstleiding (met gasmeter) → binnenleiding → stijgleiding → verzamelleidingen per verdieping → afsluitkraan → verbruikstoestel',
        'Direct van de meter naar elk toestel zonder vertakking',
        'Via een centrale verdeler in de cv-ruimte',
      ],
      correctIndex: 1,
      explanation:
        'Verloop op tekening: hoofdleiding in straat → dienstleiding met hoofdkraan + gasmeter in meterkast → binnenleiding (stijgleiding + verzamelleiding per verdieping) → T-stukken voor aftakkingen → afsluitkraan vóór elk verbruikstoestel → toestel zelf. Het verloop verticaal door de woning loopt vaak via een vide of leidingschacht.',
    },
    {
      id: 'C3-2-c',
      toetstermCode: 'C.3.2',
      type: 'mc',
      prompt: 'Op een installatietekening voor gas moet bij elk **verbruikstoestel** zichtbaar zijn:',
      options: [
        'Alleen het toestel-symbool',
        'Een afsluitkraan vóór het toestel + de aansluitmethode (vast, slang, of klem) + voor gesloten toestellen de rookgasafvoer',
        'De prijs van het toestel',
        'De stroomverbruik in watt',
      ],
      correctIndex: 1,
      explanation:
        'Per toestel moet zichtbaar zijn: (1) afsluitkraan vóór het toestel (verplicht voor bediening en service); (2) aansluitmethode (vaste leiding, rubberen slang max. 60 cm, klemverbinding); (3) voor gesloten toestellen het verloop van de gesloten rookgasafvoer (concentrische pijp door dak/gevel); (4) voor open toestellen de vereiste ventilatieopeningen in de ruimte.',
    },

    // C.3.3 (4)
    {
      id: 'C3-3-a',
      toetstermCode: 'C.3.3',
      type: 'mc',
      prompt: 'Een woning wordt overgeschakeld van gas naar warmtepomp. Welke **vooronderzoek** is essentieel?',
      options: [
        'De keuken renoveren',
        'Isolatie van de woning beoordelen — een warmtepomp werkt alleen efficiënt bij goed geïsoleerde gevel, dak, vloer en kozijnen (HR++); slechte isolatie maakt warmtepomp duur of onvoldoende',
        'Het meubilair beoordelen',
        'De cv-ketel grondig schoonmaken',
      ],
      correctIndex: 1,
      explanation:
        'Een warmtepomp levert efficiënt water op lage temperatuur (~35–55 °C in plaats van 70–80 °C bij cv). Bij slechte isolatie verliest de warmtepomp zoveel warmte dat hij continu vol moet draaien — hoge energierekening, mogelijk koude woning bij vorst. Eerst grondig na-isoleren (gevel, dak, vloer, kozijnen HR++) of kiezen voor hybride warmtepomp (gascv als backup).',
    },
    {
      id: 'C3-3-b',
      toetstermCode: 'C.3.3',
      type: 'mc',
      prompt: 'Bij overschakeling naar warmtepomp zijn **bestaande radiatoren** vaak:',
      options: [
        'Te klein — warmtepomp levert lage temperatuur (35–55 °C) en bestaande radiatoren waren ontworpen voor 70–80 °C. Vervangen door grotere radiatoren of vloerverwarming nodig',
        'Te groot — vervangen door kleinere',
        'Niet bruikbaar — moeten vervangen door luchtgordijnen',
        'Onveranderd geschikt',
      ],
      correctIndex: 0,
      explanation:
        'Cv-radiatoren waren ontworpen voor 70–80 °C aanvoertemperatuur. Een warmtepomp levert 35–55 °C → de radiator straalt veel minder warmte uit per m². Oplossingen: (1) grotere radiatoren (1,5–2×), (2) vloerverwarming (ideale combinatie met warmtepomp), (3) wand-/plafondverwarming. Anders blijft de woning koud, zelfs bij goed isolatie.',
    },
    {
      id: 'C3-3-c',
      toetstermCode: 'C.3.3',
      type: 'mc',
      prompt: 'Welke **electrische aansluiting** is meestal nodig voor een all-electric woning?',
      options: [
        'De bestaande 1×25 A blijft voldoende',
        'Verzwaring naar 3×25 A of zelfs 3×35 A driefasen — inductiekookplaat, warmtepomp, warmwaterboiler en eventueel laadpaal hebben gezamenlijk meer vermogen dan een gasinstallatie',
        '1×40 A',
        'Lichtkracht (12 V)',
      ],
      correctIndex: 1,
      explanation:
        'Een gasinstallatie laadt het elektriciteitsnet minimaal (alleen koelkast, verlichting, kleine apparaten). All-electric vergt veel meer: inductiekookplaat ~7,5 kW + warmtepomp 3–8 kW + warmwaterboiler 2,5 kW + eventueel laadpaal 11 kW. Gezamenlijk dwingt dit naar **3×25 A** of **3×35 A** (driefasen). Verzwaring kost € 600–1.500 en duurt 4–12 weken.',
    },
    {
      id: 'C3-3-d',
      toetstermCode: 'C.3.3',
      type: 'mc',
      prompt: 'Een **lucht-water-warmtepomp** verliest rendement bij:',
      options: [
        'Hoog vermogen-gebruik',
        'Lage buitentemperaturen — bij echte vorst (–10 °C) daalt de COP van 4 naar ~2; soms onvoldoende warmte. Oplossing: hybride met cv-ketel als backup voor vorstdagen',
        'Hoge waterdruk',
        'Direct zonlicht',
      ],
      correctIndex: 1,
      explanation:
        'Een lucht-water-warmtepomp haalt warmte uit buitenlucht. Bij +7 °C is de COP (rendement) ~4 (4 kWh warmte per 1 kWh elektriciteit). Bij –10 °C zakt de COP naar ~2 en kan de warmtepomp soms onvoldoende warmte leveren. Oplossing: (1) bodemwarmtepomp (constante 8–12 °C grond­temperatuur), (2) hybride systeem (warmtepomp + gascv voor vorst), (3) extra elektrische bijverwarming.',
    },
  ],

  terms: [
    {
      term: 'Aardgas',
      definition:
        'Methaan-rijk gas uit Slochteren/Noordzee; warmtewaarde ≈ 31,7 MJ/m³ Groningen-G-gas.',
    },
    {
      term: 'Gasmeter',
      definition:
        'Telt verbruikt gas in m³ — eigendom van netbeheerder, ijking standaard.',
    },
    {
      term: 'Hoofdkraan gas',
      definition:
        'Direct na de meter — afsluiten bij lekkage of langdurige afwezigheid.',
    },
    {
      term: 'Hoofdleiding',
      definition:
        'Stalen of PE-leiding van de straat naar meterkast; eigendom netbeheerder tot meter.',
    },
    {
      term: 'Binnenleiding',
      definition:
        'Gasleiding tussen meter en toestellen; standaard koper of staal, kunststof verboden binnen­shuis.',
    },
    {
      term: 'Geur (mercaptaan)',
      definition:
        'Aan aardgas toegevoegde stankstof — maakt lekkage met de neus waarneembaar.',
    },
    {
      term: 'Gevarenklasse',
      definition:
        'Risico-indeling van het gas: aardgas (laag), butaan/propaan (zwaarder dan lucht — zwaarder risico bij lek).',
    },
    {
      term: 'Combiketel',
      definition:
        'CV-ketel die zowel verwarming als warmtapwater levert via één gasaansluiting.',
    },
    {
      term: 'HR-ketel',
      definition:
        'Hoog Rendement ketel met rookgaswisselaar; condenseert waterdamp en haalt extra warmte (rendement > 95%).',
    },
    {
      term: 'Rookgasafvoer',
      definition:
        'Buis (concentrisch bij HR) die verbrandings­gassen naar buiten voert; geometrische eisen via Bbl/NEN 1078.',
    },
    {
      term: 'Aanzetkraantje',
      definition:
        'Kleine kraan vlak voor een gastoestel om gericht af te sluiten zonder hele woning af te sluiten.',
    },
    {
      term: 'Gasloos bouwen',
      definition:
        'Sinds 1-7-2018 verplicht voor nieuwbouw: geen aardgasaansluiting; alternatieven: warmtepomp, stadsverwarming, all-electric.',
    },
    {
      term: 'Propaan / butaan',
      definition:
        'LPG-gassen, zwaarder dan lucht; opgeslagen in tanks, gebruikt waar geen aardgasnet is.',
    },
    {
      term: 'CV (centrale verwarming)',
      definition:
        'Verwarming­systeem waarbij één toestel water verwarmt en via leidingen distribueert naar radiatoren of vloerverwarming.',
    },
  ],

  games: [
    {
      id: 'C3-gapfill-1', type: 'gapfill',
      title: 'Gas — basis',
      text:
        'Aardgas is zelf reukloos, daarom wordt het {{geodoreerd}} met THT. ' +
        'De norm voor gasinstallaties heet {{NEN 1078}}. ' +
        'Bij elke doorvoer van een gasleiding door wand of vloer komt een {{mantelbuis}} omheen. ' +
        'Lekken zoek je met {{zeepsop}} op de verbindingen — nooit met aansteker!',
      distractors: ['NEN 1006', 'mof', 'isolatie', 'water'],
    },
    {
      id: 'C3-matching-1', type: 'matching',
      title: 'Gas naar elektra — consequenties',
      pairs: [
        { left: 'Inductiekookplaat vervangt gas', right: 'Eigen 16 A driefasen-groep nodig' },
        { left: 'Warmtepomp vervangt cv-ketel', right: 'Isolatie + LTV (vloerverwarming) vereist' },
        { left: 'Hybride warmtepomp', right: 'Warmtepomp + cv-ketel — minder strikte isolatie-eis' },
        { left: 'Verzwaring aansluiting', right: '1×25 A → 3×25 A driefasen (~17 kW)' },
      ],
    },
  ],
}
