import type { Topic } from '../types/content'

export const C_4_elektra: Topic = {
  code: 'C.4',
  section: 'C',
  title: 'Elektrische installatie',
  chapterRef: 'Lesboek hoofdstuk 22',
  blurb:
    'De aansluiting op het elektriciteitsnet, groepenkast met stoppen of installatie­automaten en aardlek­schakelaars, aarding, capaciteit (1×25 A, 3×25 A, 3×35 A) en krachtstroom; onderdelen van een installatie (bedrading, buisleiding, lasdoos, schakel­materiaal, perilex, aarding); installatie­tekeningen; en alternatieve elektriciteits­opwekking en opslag (zon, wind, accu’s).',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · Aansluiting, groepenkast en aarding',
      toetstermCodes: ['C.4.1'],
      body: `
### Stroom, spanning en vermogen
- **Stroomsterkte** in **ampère (A)** — hoeveel elektriciteit per seconde door een draad stroomt
- **Spanning** in **volt (V)** — drijvende kracht; in NL standaard **230 V** wisselstroom, **400 V** krachtstroom
- **Vermogen** in **watt (W)** = V × A — wat een apparaat verbruikt
- **Arbeid** (verbruik) in **kilowattuur (kWh)** = vermogen × tijd
- **NEN 1010** is de norm voor laagspannings­installaties in NL

### Van centrale tot stopcontact
1. **Hoogspanningsnet** (10–380 kV) tussen centrale en wijktransformator
2. **Transformator** verlaagt spanning naar 230 V (1-fase) of 400 V (3-fase)
3. **Distributiekabel** in straat
4. **Aansluitleiding** naar woning → meterkast
5. **kWh-meter** (elektriciteitsmeter) — eigendom netbeheerder
6. **Hoofdschakelaar / hoofdzekering** voor de hele woning
7. **Groepenkast** met diverse groepen per ruimte/apparaat

### Aansluitcapaciteit
| Aansluiting | Vermogen | Toepassing |
|---|---|---|
| **1×25 A** | ~5,7 kW | Standaard rijwoning met gas voor cv en kookplaat |
| **1×35 A / 1×40 A** | ~8–9 kW | Woning met inductie of beperkte all-electric |
| **3×25 A (driefasen)** | ~17 kW | Woning met inductie + warmtepomp + laadpaal |
| **3×35 A** | ~24 kW | All-electric grotere woning + laadpaal |
| **3×50 A en hoger** | > 30 kW | Bedrijfspand, café, werkplaats |

**Verzwaring**: bij overstap naar warmtepomp + inductie + laadpaal vergt meestal een verzwaring (kosten ~€ 600–1.500, 4–12 weken doorlooptijd).

### Krachtstroom (400 V driefasen)
- Drie fasen + nul + aarde (5 draden)
- **Perilex-aansluiting** = 5-polige stekker voor zware apparaten (fornuis, sauna, lasapparaat, warmtepomp)
- Toepassing: bedrijfsmachines, grote koelinstallaties, modern: warmtepomp en laadpaal
- Zonnepanelen leveren gelijkstroom → omvormer naar 230 V (of 3-fase)

### Groepenkast (NEN 1010)
- **Hoofdschakelaar** voor alle groepen (verplicht)
- Per groep een **smeltveiligheid** (oudbouw) of **installatieautomaat** (moderne nieuwbouw)
- Per groep een **aardlekschakelaar (ALS, 30 mA)** — verplicht sinds 1977
- Max. **4 groepen per ALS** (volgens NEN 1010)
- **500 mA ALS** voor zware apparaten (wasmachine, fornuis, oven) als alternatief
- Apparaten **> 3.000 W** krijgen **eigen groep**
- Wasmachine, droger, vaatwasser, oven → **elk eigen groep**

### Smeltveiligheid vs installatieautomaat
- **Smeltveiligheid (stop)**: porselein + zilverdraad + zand. Bij overbelasting smelt de draad → verklikker werpt uit. **Niet herbruikbaar** — moet vervangen worden
  - Rood = 10 A, grijs = 16 A, blauw = 20 A, geel = 25 A
- **Installatieautomaat**: schakelt automatisch uit bij overbelasting; **herbruikbaar** (gewoon resetten)
- Modern: **aardlekautomaat** combineert ALS + automaat in één

### Aardlekschakelaar (ALS)
- Meet het verschil tussen fase- en nuldraad
- Bij **lekstroom > 30 mA** (= levensgevaarlijke stroom door menselijk lichaam) schakelt deze in een fractie van een seconde af
- **Test-knop** maandelijks ingedrukt → moet uitschakelen
- **500 mA-variant** voor zware apparaten waar 30 mA te gevoelig is

### Aarding
- **Doel**: uitwendige metalen delen die onder spanning kunnen komen verbinden met de aarde — bij storing vloeit lekstroom naar aarde (en wordt opgemerkt door ALS)
- **Oudere methodes**: aarding via waterleiding (alleen bij stalen waterleiding — niet meer mogelijk bij PVC of kunststof!)
- **Modern**:
  - **Koperen aardelektrode** in de grond (1,5 m diep)
  - **Doorgelaste wapening** van de betonfundering (in nieuwbouw standaard)
  - **Aardrail** in meterkast, met koperdraad 25 mm² naar alle groepen
- **Aardingsweerstand** moet < 100 Ω zijn

### Randaarde
- Alle **wandcontactdozen sinds 1977 met randaarde** verplicht
- Wandcontactdoos heeft twee gaten + twee metalen randstrips (links + rechts) — die randstrips zijn aangesloten op aarde
- Bij apparaat met metalen behuizing maakt randaarde-stekker via de derde pin contact met aarde
- Oude woningen kunnen nog niet-geaarde stopcontacten hebben — bij apparaten met aardpin (wasmachine, koelkast) **vervangen**
      `.trim(),
      images: [
        {
          src: '/figs/fotos/groepenkast.jpg',
          caption:
            'Een moderne groepenkast: bovenin de hoofdschakelaar en aardlekschakelaars, daaronder de installatie-automaten (groepen). Blauw = nul, bruin/zwart = fase, geel-groen = aarde.',
          source: 'Foto: Dmitry G · Wikimedia Commons (CC BY-SA 3.0)',
          width: 'lg',
        },
      ],
    },

    {
      heading: '2 · Bedrading, lasdozen en schakelmateriaal',
      toetstermCodes: ['C.4.2'],
      body: `
### Bedradingkleuren (NEN 1010)
| Kleur | Functie |
|---|---|
| **Bruin** | Fasedraad (L) — 230 V t.o.v. aarde — de "stroomvoerende" draad |
| **Blauw** | Nuldraad (N) — 0 V — retour naar de bron |
| **Groen/geel** | Aardedraad (PE = Protection Earth) — naar aarde |
| **Zwart** | Schakeldraad — naar/van schakelaars |

> Oude (vóór 1977) installaties hebben andere kleuren: zwart voor fase, rood voor nul, grijs voor aarde. **Bij vermenging niet improviseren** — laat dit checken door een installateur.

### Standaard kabeltypen
- **VD-draad** (Vinyl Aderdraad) — enkele geïsoleerde aders die door **PVC-buis** worden getrokken. Standaard voor inbouw in beton, lijstwerk
- **VMvK-kabel** (Vinyl Mantel - Vinyl Aders Kabel) — meerdere aders in één gemeenschappelijke mantel. Voor ondergrondse aanleg of waar geen buis nodig is
- **Gepantserde varianten** (met staaldraad) — voor zware mechanische belasting
- **OD/VOD/ROD** (Ornament Draad) — flexibel draad voor armatuur-aansluiting vanaf wandcontactdoos

### Draaddoorsnedes in woningen
| Doorsnede | Toepassing |
|---|---|
| **1,5 mm²** | Lichtgroepen, schakeldraad |
| **2,5 mm²** | Stopcontactgroepen, normale aarding |
| **4 mm²** | Zwaardere groepen (wasmachine, vaatwasser) |
| **6 mm² of hoger** | Krachtstroom, perilex (fornuis, sauna, laadpaal) |
| **25 mm²** | Hoofdaardingsleiding |

### Buisleidingen
- **PVC-buis** (oranje of grijs) — standaard voor inbouw — beschermt aders, eenvoudig vervangen
- **Mantelbuis** rond doorvoer door wand of vloer (bescherming en doorvoer)
- **Wandgoot / plint-kabelgoot** — voor opbouw in kantoren/scholen
- **Hangsysteem** (kabelgoten aan plafond) — voor utiliteit
- Bevestiging: **zadels / clipjes** op vaste afstanden — niet te ver uit elkaar (afhankelijk van draaddoorsnede)

### Aanleg-systemen
1. **Traditioneel systeem** — doorgaande leiding met **lasdozen** op aftakkingen. Oude woningen, voor zichtwerk
2. **Centraaldozensysteem** — ruime **centraaldoos boven elk lichtpunt**, met aftakkingen naar wandcontactdozen en schakelaars. **Standaard in betonbouw** (leidingen in beton ingestort)
3. **Gemodificeerd centraaldozensysteem** — combinatie: centraaldozen achter schakelaars en stopcontacten als verzamelpunt
4. **Wandkokersysteem** met plinten als kabelgoot — voor kantoren, scholen, bedrijfsgebouwen
5. **Spanningsrail** — armaturen in een railsysteem aan plafond (etalages, expositie)
6. **Draadloos** (RF) — moderne **domotica**: zelfklevende schakelaars met RF-zender, **actoren** (kleine ontvangers) in lasdozen, programmeerbaar

### Centraal- en inbouwlasdoos
- **Centraallasdoos** — diepe doos in/op plafond bij elk lichtpunt; alle verbindingen worden hier gemaakt; eenvoudig later uitbreiden
- **Inbouwlasdoos** — kleine doos in een wand bij schakelaar of wandcontactdoos
- **Wagolas** of **dozen-verbindingsklemmen** — voor draadverbindingen binnen de doos zonder solderen
- **Aftakdozen** bij T-aftakkingen in goten

### Schakelmateriaal
- **Eenpolige schakelaar** — onderbreekt de fasedraad: één lamp aan/uit. Standaard.
- **Tweepolige schakelaar** — onderbreekt fase **én** nul. Voor badkamer/kelder (extra veiligheid)
- **Serieschakelaar** — twee groepen lampen schakelt afzonderlijk
- **Wisselschakelaar / hotelschakelaar** — **twee plekken** kunnen één lamp bedienen (bv. boven- en onderkant trap)
- **Kruisschakelaar** — drie of meer plekken voor één lamp (lange gang met schakelaar bij elke deur)
- **Dimschakelaar** — variabele helderheid
- **Spatwaterdichte schakelaar (IP44+)** — badkamer, buiten — afgedicht tegen vocht
- **Pulsdrukker** — zelf-terugkerend, voor schakelklokken en draadloos
- Type-aanduiding: **wipschakelaar** (modern), **drukschakelaar**, **trekschakelaar** (in badkamer aan koord), **draaischakelaar** (oud)

### Wandcontactdozen
- **Geaarde wandcontactdoos** met randaarde (verplicht sinds 1977)
- **Scheercontactdoos** in badkamer — lagere stroom + betere afdichting (NEN-EN-IEC 60364)
- **Perilex-contactdoos** (5-polig) voor krachtstroom-apparaten
- **USB-stopcontact** — moderne extra-uitvoering met geïntegreerde USB-poorten

### Perilex-aansluiting
- **5-polige stekker**: 3 fasen (L1, L2, L3) + nul + aarde
- Voor **400 V krachtstroom** — fornuis, kookplaat, sauna, lasapparaat, oude warmwaterboiler
- Niet uitwisselbaar met gewone stekker — apart contactdoos
- Modern: vaste aansluiting in plaats van perilex-stekker voor warmtepomp en laadpaal

### Loze leiding
- **Lege PVC-buis** meegelegd in wand of vloer voor latere uitbreiding (bv. extra stopcontact, internet, alarminstallatie)
- Moet voldoen aan: diameter (voldoende voor de te trekken kabel), maximum lengte zonder lasdoos, maximaal aantal bochten, goed afgedicht aan beide kanten
      `.trim(),
    },

    {
      heading: '3 · Installatietekening voor elektra',
      toetstermCodes: ['C.4.3'],
      body: `
B.4.3 vraagt om aan de hand van een **installatietekening** het kabelverloop en de aansluitingen weer te geven.

### Twee soorten tekeningen
- **Installatieschema (één-lijn)** — abstract; toont logische verbindingen en groepenindeling (zonder schaal)
- **Werktekening op plattegrond** — toont feitelijke positie en kabelverloop in elke verdieping (op schaal)

### Symbolen volgens NEN
| Symbool | Betekenis |
|---|---|
| Kruis (×) of cirkel met X | Lichtpunt (plafond) |
| Driehoek | Wandcontactdoos (geaard) |
| Driehoek met streep | Wandcontactdoos zonder randaarde (oud) |
| Cirkel met streep | Schakelaar (eenpolig) |
| Cirkel met S2 | Wisselschakelaar |
| Cirkel met S3 | Kruisschakelaar |
| Cirkel met → | Dimschakelaar |
| Cirkel + R | Spatwaterdichte schakelaar |
| Pijl | Stromingsrichting / draaddoorvoer |
| Lijn met cijfers | Aantal aders in kabel |
| Vierkant met kWh | Elektriciteitsmeter |
| Vierkant met groep nrs | Groepenkast |
| Lijn met "3F" | Driefasen-aansluiting |

### Lijntype-conventies
- **Doorgetrokken lijn** — kabel in inbouw (in muur of vloer)
- **Streep-stippellijn** — kabel onder de afgewerkte vloer of in plafond
- **Streeplijn** — kabel voor opbouw (zichtbaar)
- **Pijl met getal** — aantal aders (bv. "3" = fase + nul + aarde)

### Hoe lees je een tekening?

1. **Begin in de meterkast**: hoofdaansluiting, kWh-meter, groepenkast met groepsindeling
2. **Per groep volg je de kabel**: van groepenkast → eerste centraaldoos → stopcontacten/lichtpunten in serie of parallel
3. **Schakelaars** zitten in de schakeldraad-route: van fasedraad → schakelaar → naar lichtpunt
4. **Wandcontactdozen** krijgen direct fase, nul, aarde (drie aders)
5. **Lichtpunten** krijgen schakeldraad, nul, aarde
6. **Aftakdozen** bevinden zich vaak boven plafond of in centraaldoos
7. **Groepenkast-overzicht** toont per groep: aantal stopcontacten/lichtpunten en (geschat) belast vermogen

### Belangrijke punten op installatie­tekening
- **Aardlekschakelaar(s)** en hun beschermingsbereik
- **Aparte groepen** voor zware apparaten (fornuis, oven, wasmachine, droger, warmtepomp)
- **Krachtstroom-aansluitingen** (perilex)
- **Loze leidingen** voor uitbreiding
- **Speciale ruimtes**: badkamer (IP44+, scheercontactdoos), buiten (IP44+, GFI-beschermd), garage/zolder (toegankelijkheid voor service)

### Voorbeeld groepenindeling moderne woning (8 groepen)
1. Lichtpunten woonkamer + slaapkamers
2. Wandcontactdozen woonkamer + hal
3. Wandcontactdozen slaapkamers
4. Keuken-wandcontactdozen (algemeen)
5. Vaatwasser (eigen groep)
6. Wasmachine + droger (eigen ALS 500 mA)
7. Oven + magnetron (eigen groep, vaak perilex)
8. Buitenstopcontact / tuin + reserve

Plus apart: warmtepomp (3-fasen), laadpaal (3-fasen), zonnepanelen (apart in groepenkast met omvormer).

### Bouwkundige werktekening checklist
- **Voldoende stopcontacten** per kamer (NEN-aanbeveling: 4 per slaapkamer, 6+ in woonkamer en keuken)
- **Lichtschakelaars** logisch geplaatst (~1,05 m hoog naast deur, kant van handvat)
- **Schakelaars in slaapkamer** bij hoofd en bij deur (wisselschakelaar)
- **Stopcontact bij elk bed** voor lampjes en oplader
- **Loze leidingen** voor internet, alarm, gordijnen-motoren
      `.trim(),
    },

    {
      heading: '4 · Alternatieve opwekking en opslag: zon, wind, accu’s',
      toetstermCodes: ['C.4.4'],
      body: `
### Zonnepanelen (PV — fotovoltaïsch)

#### Hoe werkt het?
- Een **zonnecel** is een siliciumplakje met een p-n-junctie (twee materialen met verschillende elektrische lading)
- Licht (fotonen) maakt elektronen los uit het silicium → **elektrische stroom (gelijkstroom)**
- Meerdere cellen vormen samen een **paneel**
- Een **omvormer (inverter)** zet gelijkstroom om naar 230 V wisselstroom → aansluiting op groepenkast

#### Kenmerken
- **Piekvermogen (Wp)** = vermogen onder volle zonintensiteit (1.000 W/m²) + optimale plaatsing (zuid, ~36°)
- Moderne panelen (2024): 400–450 Wp per paneel
- Mono- of multikristallijn silicium (mono is iets efficiënter, duurder)
- **Optimale plaatsing**: zuid, ~36° helling, geen schaduw — geeft 100% van piekopbrengst
- **Reductiefactoren** bij andere oriëntaties: oost/west 86 %, zuidoost/zuidwest 96 %

#### Voor- en nadelen
**Voordelen**:
- Gratis stroom uit zonlicht
- 25+ jaar levensduur, lage onderhoud
- BTW-vrijstelling (sinds 2023)
- Subsidies en saldering
- Bijdraagt aan BENG-norm + energielabel

**Nadelen**:
- Hoge investering (€ 1.000–2.000 per kWp)
- Saldering wordt afgebouwd (vanaf 2025–2031) → terugverdientijd verlengt
- Geen opwek bij donker; opslag of teruglevering aan net nodig
- Productie heeft milieu-impact (silicium-winning)

### Windenergie

#### Hoe werkt het?
- **Windturbine** met wieken (rotor) die op een mast staan
- Wind draait de wieken → as draait een **generator** in de gondel → stroom
- Variabele frequentie wordt via **omvormer** afgegeven aan net

#### Voor woningen?
- **Kleine windturbines** (urban) zijn nog beperkt rendabel
- Effectief vanaf 5+ m windsnelheid op de masthoogte
- In stedelijk gebied: te lage windsnelheid, turbulentie
- **Voornamelijk grote windparken** op zee of in open landschap
- Voor woningen: vooral als community-energiecoöperatie aandeel

#### Voor- en nadelen woningniveau
**Voordelen**: stroom bij donker/weinig zon; aanvullend op zonnepanelen
**Nadelen**: hoge investering, vergunningstraject, geluidshinder, visuele impact, te weinig wind in stadsomgeving

### Thuisaccu (energie-opslag)

#### Hoe werkt het?
- **Lithium-ionen-batterij** (vergelijkbaar met EV-accu) van 5–15 kWh capaciteit
- Slaat overdag opgewekte (overtollige) zonnestroom op
- Bij donker of avondpiek: ontlaadt naar woning
- **Omvormer + laadregelaar** stuurt het proces

#### Toepassing
- Vooral interessant bij **afbouw saldering** (vanaf 2027 betaalt teruglevering minder)
- **All-electric woning** met warmtepomp + EV-laden — eigen verbruik maximaliseren
- **Off-grid** (geen netaansluiting) — alleen in zeer afgelegen gebieden

#### Voor- en nadelen
**Voordelen**:
- Onafhankelijk van elektriciteitsnet (deels)
- Goed bij stroomuitval (back-up functie)
- Bespaart op tarief­verschil tussen normaal- en daltarief

**Nadelen**:
- Hoge investering (€ 5.000–15.000 voor 10 kWh)
- Beperkte levensduur (10–15 jaar; ~5.000 laadcycli)
- Energiedichtheid lager dan benzine: thuisaccu is groot/zwaar
- **Brandveiligheid**: lithium-batterijen kunnen bij beschadiging in brand vliegen — eisen aan plaats en ventilatie
- Productie van lithium-mijnen heeft eigen milieu-impact

### Aansluiting van zonnepanelen op groepenkast
1. Panelen op het dak → DC-bekabeling
2. Eventueel **optimizers** per paneel (voor gedeeltelijke schaduw) of **micro-omvormers**
3. **Hoofd-omvormer** (in zolder, kelder of meterkast) → omzetting DC → AC
4. **Aparte groep in groepenkast** met eigen aardlekautomaat
5. **kWh-meter (slimme meter)** registreert teruglevering aan net
6. **Eventueel: thuisaccu** ingelust voor opslag

### Energietransitie en woning
**Modern compleet pakket** voor energieneutrale (NOM) of energieleverende woning:
1. **Zeer goed geïsoleerd** (Rc > 6 in dak, > 5 in muur, vloer > 4)
2. **Driedubbel glas** (U < 0,8)
3. **Warmtepomp** (lucht-water of bodem-water)
4. **Zonnepanelen** (8–14 kWp)
5. **Thuisaccu** (10 kWh)
6. **Slimme meter + energie-monitor** (Home Energy Management)
7. **Laadpaal** voor EV
8. **Vloerverwarming** (compatibel met warmtepomp LTV)
9. **WTW-douche** en **balansventilatie met WTW**

Resultaat: **Energielabel A++++**, mogelijk **NOM** (Nul Op de Meter — netto € 0 energierekening per jaar) of zelfs **NEM** (Energieleverend).

### Voor de makelaar
- **Energielabel** is wettelijk verplicht bij verkoop/verhuur — duurzame upgrades verhogen waarde
- **Zonnepanelen** documenteren: aantal, Wp, jaaropbrengst, garantievoorwaarden, eigenaar (eigendom of huur?)
- **Warmtepomp + accu**: vraag onderhoudscontract en garantiebewijs over
- **NEN-conform­certificaat** van installateur: voor onverwijzigbaarheid van wijzigingen
- **BTW-vrijgesteld**: bij oplevering geen overdracht van BTW; bewijs van afsluiting BTW-vrijstelling kan informatie­plicht zijn
      `.trim(),
    },
  ],

  toetstermen: [
    {
      code: 'C.4.1',
      text: 'Herkent de aansluiting van de elektrische installatie: groepenkast, stoppen of automaten en aarding, capaciteit/vermogen en krachtstroom.',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'C.4.2',
      text: 'Licht de diverse onderdelen van een elektrische installatie toe: bedrading (nul-, fase-, schakel- en beschermingsdraad), buisleidingen + bevestiging, centraal- en inbouwlasdoos, schakelmateriaal, perilexaansluiting, aardingsinstallatie.',
      niveau: 'BT1',
      bloom: 'Begrip',
    },
    {
      code: 'C.4.3',
      text: 'Geeft aan de hand van een installatietekening de elektra-installaties (kabelverloop en aansluitingen) weer.',
      niveau: 'BT2',
      bloom: 'Toepassen',
      metDrawing: true,
    },
    {
      code: 'C.4.4',
      text: 'Licht de voor- en nadelen en de technische werking van alternatieve opwekking en opslag van elektra (zonnepanelen, windenergie en accu’s) toe.',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
  ],

  questions: [
    // C.4.1 (5)
    {
      id: 'C4-1-a',
      toetstermCode: 'C.4.1',
      type: 'mc',
      prompt: 'Wat is de standaard **netspanning** voor woningen in NL?',
      options: ['12 V', '120 V', '230 V wisselstroom (eenfase)', '400 V krachtstroom'],
      correctIndex: 2,
      explanation:
        'Nederland heeft een standaard netspanning van 230 V wisselstroom (eenfase) voor gewone wandcontactdozen en lichtpunten. Krachtstroom is 400 V (driefasen) voor zware apparaten als fornuis, sauna, lasapparaat, warmtepomp en laadpaal. Internationale frequentie 50 Hz.',
    },
    {
      id: 'C4-1-b',
      toetstermCode: 'C.4.1',
      type: 'mc',
      prompt: 'Wat is een **aardlekschakelaar (ALS)** en wanneer schakelt deze uit?',
      options: [
        'Bij hoge stroom (overbelasting)',
        'Bij verschil tussen fase- en nuldraad — bij lekstroom > 30 mA schakelt hij af in een fractie van een seconde; verplicht sinds 1977',
        'Bij overspanning op het net',
        'Bij kortsluiting',
      ],
      correctIndex: 1,
      explanation:
        'Een aardlekschakelaar meet het verschil tussen fase- (uitgaande) en nul- (terugkomende) stroom. Bij normale werking is dat verschil 0; bij lekstroom (stroom die naar de aarde lekt via een aanraking) ontstaat een verschil. Boven 30 mA schakelt de ALS af binnen 0,03 sec — voorkomt levensgevaarlijke schokken. Aparte 500 mA-uitvoering voor zware apparaten.',
    },
    {
      id: 'C4-1-c',
      toetstermCode: 'C.4.1',
      type: 'mc',
      prompt: 'Hoeveel groepen mogen maximaal op één **aardlekschakelaar** (30 mA) zijn aangesloten volgens NEN 1010?',
      options: ['2', '4', '8', 'Onbeperkt'],
      correctIndex: 1,
      explanation:
        'NEN 1010: maximaal 4 groepen per 30 mA-aardlekschakelaar. Anders is de kans op gelijktijdige uitschakeling te groot bij kleine storingen, en groep-isolatie wordt onmogelijk. Apparaten > 3.000 W en wasmachine/droger/vaatwasser/oven krijgen elk een eigen groep en eigen ALS (vaak 500 mA om "nuisance tripping" te voorkomen).',
    },
    {
      id: 'C4-1-d',
      toetstermCode: 'C.4.1',
      type: 'mc',
      prompt: 'Welke **aansluitcapaciteit** is meestal voldoende voor een all-electric woning met inductie + warmtepomp?',
      options: [
        '1×25 A',
        '1×35 A',
        '3×25 A driefasen (~17 kW vermogen)',
        '1×16 A',
      ],
      correctIndex: 2,
      explanation:
        'Een gas-aangesloten woning heeft meestal 1×25 A (~5,7 kW) — voldoende voor licht, koelkast, enkele apparaten. All-electric vergt veel meer: inductie ~7,5 kW + warmtepomp 3–8 kW + boiler 2,5 kW + eventueel laadpaal 11 kW. Dat vergt **3×25 A driefasen (~17 kW)** of voor luxere woningen 3×35 A. Verzwaring kost € 600–1.500.',
    },
    {
      id: 'C4-1-e',
      toetstermCode: 'C.4.1',
      type: 'mc',
      prompt: 'Hoe wordt in moderne nieuwbouw vaak **geaard**?',
      options: [
        'Via de waterleiding',
        'Via doorgelaste wapening van de betonfundering of via koperen aardelektroden in de grond — aardrail in meterkast met koperdraad 25 mm² naar alle groepen',
        'Via de gasaansluiting',
        'Aarding is in moderne woningen niet meer nodig',
      ],
      correctIndex: 1,
      explanation:
        'Sinds PVC-waterleidingen is aarding via waterleiding niet meer mogelijk. Moderne methodes: (1) doorgelaste wapening van betonfundering (standaard in nieuwbouw — alle wapeningstaven worden onderling gelast tot één geleidend net); (2) koperen aardelektroden in de grond (1,5 m diep). Aardrail in meterkast verbindt alles met koperdraad 25 mm² — aardingsweerstand moet < 100 Ω zijn.',
    },

    // C.4.2 (5)
    {
      id: 'C4-2-a',
      toetstermCode: 'C.4.2',
      type: 'mc',
      prompt: 'De **standaard bedradingkleuren** volgens NEN 1010 zijn:',
      options: [
        'Rood = fase, zwart = nul, blauw = aarde',
        'Bruin = fase, blauw = nul, groen/geel = aarde, zwart = schakeldraad',
        'Geel = fase, rood = aarde',
        'Allen zwart',
      ],
      correctIndex: 1,
      explanation:
        'NEN 1010 standaardkleuren: **bruin = fasedraad (L)**, **blauw = nuldraad (N)**, **groen/geel = aarde (PE)**, **zwart = schakeldraad** (van schakelaar naar lamp). Oudere installaties (vóór 1977) gebruikten andere kleuren — bij vermenging laat aan installateur zien om verwarring te voorkomen.',
    },
    {
      id: 'C4-2-b',
      toetstermCode: 'C.4.2',
      type: 'mc',
      prompt: 'Wat is een **centraaldozensysteem**?',
      options: [
        'Een lange doorgaande kabel zonder aftakkingen',
        'Ruime lasdoos boven elk lichtpunt; aftakkingen naar wandcontactdozen en schakelaars vanuit deze centraaldoos. Standaard in betonbouw',
        'Een grote groepenkast in elke woning',
        'Een synoniem voor meterkast',
      ],
      correctIndex: 1,
      explanation:
        'Het centraaldozensysteem heeft per lichtpunt een ruime centraaldoos in/op het plafond. Vanuit elke centraaldoos worden de wandcontactdozen en schakelaars in de omliggende ruimte gevoed. Voordeel: overzichtelijk, makkelijk uitbreidbaar, bij defect snel te lokaliseren. Standaard in moderne betonbouw waar leidingen in de constructie worden ingestort.',
    },
    {
      id: 'C4-2-c',
      toetstermCode: 'C.4.2',
      type: 'mc',
      prompt: 'Voor een lamp die vanaf **twee verschillende plekken** (onder- en bovenkant trap) bediend moet worden, gebruikt men:',
      options: [
        'Twee eenpolige schakelaars in serie',
        'Wisselschakelaars (hotelschakelaars) — twee plekken bedienen samen één lamp',
        'Pulsdrukker',
        'Dimschakelaar',
      ],
      correctIndex: 1,
      explanation:
        'Wisselschakelaar (ook hotelschakelaar) is een 3-aderige schakelaar die in paar gebruikt wordt — twee schakelaars sturen samen één lichtpunt. Klassieke toepassing: trap (boven en onder), lange gang, slaapkamer (bij deur en bij bed). Voor 3 of meer plekken is een **kruisschakelaar** nodig (in serie met wisselschakelaars).',
    },
    {
      id: 'C4-2-d',
      toetstermCode: 'C.4.2',
      type: 'mc',
      prompt: 'Wat is een **Perilex-aansluiting**?',
      options: [
        'Een speciale schakelaar voor badkamer',
        '5-polige stekker (3 fasen + nul + aarde) voor 400 V krachtstroom — gebruikt voor fornuis, sauna, lasapparaat, oudere boilers; niet uitwisselbaar met gewone stekker',
        'Een isolatieprodukt',
        'Een soort lasdoos',
      ],
      correctIndex: 1,
      explanation:
        'Perilex = 5-polige stekker met L1, L2, L3, N, PE — voor 400 V driefasenaansluiting van zware apparaten (fornuis, sauna, lasapparaat). Apart contactdoos-formaat, niet uitwisselbaar met gewone 230 V-stopcontact. Modern wordt voor warmtepomp en laadpaal vaak vaste bedrading gebruikt in plaats van perilex-stekker.',
    },
    {
      id: 'C4-2-e',
      toetstermCode: 'C.4.2',
      type: 'mc',
      prompt: 'Wat is een **loze leiding** in een elektra-installatie?',
      options: [
        'Een leiding zonder draad — verwijderen',
        'Een lege PVC-buis meegelegd in wand/vloer voor latere uitbreiding (bv. extra stopcontact, internet, alarm) — moet voldoen aan diameter, lengte, bochten en afdichting',
        'Een verbroken leiding',
        'Een leiding voor decoratie',
      ],
      correctIndex: 1,
      explanation:
        'Loze leiding = lege PVC-buis die bij bouw mee wordt aangelegd, zodat later eenvoudig een kabel doorgetrokken kan worden zonder hak/breekwerk. Veel toegepast: extra stopcontact, internet/UTP-kabel, alarmsensor, gordijnen-motor. Eisen: voldoende diameter (~Ø 16–25 mm), niet te veel bochten, goede afdichting aan beide kanten tegen vocht en ongedierte.',
    },

    // C.4.3 (3)
    {
      id: 'C4-3-a',
      toetstermCode: 'C.4.3',
      type: 'mc',
      prompt: 'Wat is het verschil tussen een **installatieschema** en een **werktekening op plattegrond**?',
      options: [
        'Installatieschema is van glas, werktekening van papier',
        'Installatieschema is abstract (logische verbindingen + groepenindeling, zonder schaal); werktekening toont feitelijke positie en kabelverloop in elke verdieping (op schaal)',
        'Werktekening alleen voor de installateur, installatieschema alleen voor de architect',
        'Het zijn synoniemen',
      ],
      correctIndex: 1,
      explanation:
        'Installatieschema (één-lijn-tekening) toont abstract de logische opbouw: groepenkast, ALS, groepen met aangesloten apparaten — geen positie op de plattegrond. Werktekening laat op de plattegrond per verdieping zien waar de kabels, lichtpunten en stopcontacten staan, in welke route, en welke kabeltypes. Beide nodig: schema voor begrip van logica, werktekening voor uitvoering.',
    },
    {
      id: 'C4-3-b',
      toetstermCode: 'C.4.3',
      type: 'mc',
      prompt: 'Op een installatietekening: hoe wordt een **wisselschakelaar** (twee plekken bedienen één lamp) aangeduid?',
      options: [
        'Cirkel met streep',
        'Cirkel met S2 of een gestileerd "two-way switch"-symbool',
        'Cirkel met R',
        'Driehoek',
      ],
      correctIndex: 1,
      explanation:
        'Schakelaar-symbolen: gewone eenpolige = cirkel met enkele streep (één-positie aan/uit); wisselschakelaar = cirkel met S2 of twee schakelpennetjes (signaalt: 2-weg); kruisschakelaar = cirkel met S3 (3-weg, voor 3+ plekken); dimschakelaar = cirkel met pijl. Cirkel met R staat voor regenwerend (spatwaterdicht IP44+).',
    },
    {
      id: 'C4-3-c',
      toetstermCode: 'C.4.3',
      type: 'mc',
      prompt: 'In de groepenkast op tekening zie je een groep gemarkeerd als **"vaatwasser 16 A eigen ALS"**. Wat betekent dit?',
      options: [
        'De vaatwasser werkt op 16 V',
        'De vaatwasser heeft een eigen groep met 16 A automaat én een aparte aardlekschakelaar — zware apparaten krijgen eigen groep om nuisance tripping van andere apparaten te voorkomen',
        'De vaatwasser is afgeschakeld',
        'Het apparaat heeft geen aarding nodig',
      ],
      correctIndex: 1,
      explanation:
        'Volgens NEN 1010 krijgen apparaten > 3.000 W én wasmachine/droger/vaatwasser/oven elk een eigen groep met aparte aardlekschakelaar (vaak 500 mA in plaats van 30 mA, om te voorkomen dat de natuurlijke aardlekstroom van het apparaat de ALS doet uitschakelen — "nuisance tripping"). 16 A automaat = de smeltveiligheid van de groep.',
    },

    // C.4.4 (5)
    {
      id: 'C4-4-a',
      toetstermCode: 'C.4.4',
      type: 'mc',
      prompt: 'Wat geeft het **Wattpiek (Wp)** van een zonnepaneel aan?',
      options: [
        'De gemiddelde jaaropbrengst',
        'Het maximale vermogen onder volle zonintensiteit (1.000 W/m²) en optimale plaatsing (zuid, ~36° helling)',
        'De prijs per paneel',
        'De levensduur in jaren',
      ],
      correctIndex: 1,
      explanation:
        'Wp = piekvermogen onder ideale testcondities: 1.000 W/m² zonintensiteit, 25 °C celtemperatuur, paneel zuid op ~36° helling, geen schaduw. In de praktijk wordt zelden de volledige Wp gehaald — gemiddelde jaaropbrengst is ~85–95% bij ideale plaatsing. Een paneel van 400 Wp levert ~340 kWh per jaar in NL.',
    },
    {
      id: 'C4-4-b',
      toetstermCode: 'C.4.4',
      type: 'mc',
      prompt: 'Wat doet een **omvormer (inverter)** bij zonnepanelen?',
      options: [
        'Filtert vuile lucht',
        'Zet gelijkstroom (DC) van de panelen om naar wisselstroom (AC, 230 V) voor aansluiting op groepenkast',
        'Verhoogt de spanning van 12 V naar 230 V',
        'Schakelt de panelen aan en uit',
      ],
      correctIndex: 1,
      explanation:
        'Zonnepanelen leveren gelijkstroom (DC) — onbruikbaar voor het elektriciteitsnet en huishoudelijke apparaten die wisselstroom (AC) gebruiken. De omvormer zet DC naar AC met de juiste spanning (230 V) en frequentie (50 Hz). Bij overschot wordt teruggeleverd aan net; bij tekort levert het net aan. Modern: micro-omvormers per paneel of optimizers voor gedeeltelijke schaduw.',
    },
    {
      id: 'C4-4-c',
      toetstermCode: 'C.4.4',
      type: 'mc',
      prompt: 'Bij **zonnepanelen op een dak met deels schaduw** (bijv. van een schoorsteen) helpen:',
      options: [
        'Grotere panelen',
        'Optimizers per paneel of micro-omvormers — bij schaduw op één paneel houden de andere panelen hun volle opbrengst (anders zou hele string in opbrengst terugvallen)',
        'Glasreiniger',
        'Hogere mast',
      ],
      correctIndex: 1,
      explanation:
        'Klassieke string-omvormer: panelen in serie aangesloten — bij schaduw op één paneel valt de hele string in opbrengst terug ("Christmas-light-effect"). Optimizers per paneel of micro-omvormers (eigen kleine omvormer per paneel) lossen dit op: elk paneel werkt onafhankelijk. Belangrijke verbetering bij stedelijke daken met schoorstenen of bomen.',
    },
    {
      id: 'C4-4-d',
      toetstermCode: 'C.4.4',
      type: 'mc',
      prompt: 'Waarom wordt een **thuisaccu** vooral interessant **vanaf 2027**?',
      options: [
        'Sinds 2027 zijn ze gratis',
        'Vanaf 2027 wordt salderingsregeling afgebouwd — teruglevering aan net wordt minder betaald; eigen verbruik via accu wordt rendabeler',
        'Pas vanaf 2027 zijn ze technisch beschikbaar',
        'Sinds 2027 verplicht in alle woningen',
      ],
      correctIndex: 1,
      explanation:
        'De salderingsregeling — waarbij teruggeleverde stroom wordt verrekend met afgenomen — wordt vanaf 2027 stapsgewijs afgebouwd tot 0% in 2031. Daarmee wordt teruglevering aan het net financieel veel minder aantrekkelijk en wordt opslaan en zelf verbruiken via een thuisaccu rendabel. Investering nu: € 5.000–15.000 voor 10 kWh capaciteit; levensduur 10–15 jaar (~5.000 laadcycli).',
    },
    {
      id: 'C4-4-e',
      toetstermCode: 'C.4.4',
      type: 'mc',
      prompt: 'Waarom is **windenergie op woningniveau** in stedelijk gebied meestal **niet rendabel**?',
      options: [
        'Te koud klimaat',
        'In stedelijk gebied is windsnelheid laag, met veel turbulentie door omliggende gebouwen → onvoldoende opbrengst; effectief vanaf 5+ m/s windsnelheid op de masthoogte (alleen op zee of open landschap)',
        'Te veel zonlicht',
        'Wettelijk niet toegestaan',
      ],
      correctIndex: 1,
      explanation:
        'Windturbine-opbrengst is sterk afhankelijk van **gemiddelde windsnelheid** op masthoogte (kubische functie!). In stedelijk gebied is wind verstoord door gebouwen → lage gemiddelde snelheid + turbulentie. Effectief pas vanaf ~5 m/s gemiddeld — meestal alleen op zee, in open landschap, of in coöperatief windparken. Voor woningniveau zijn zonnepanelen vrijwel altijd rendabeler.',
    },
  ],

  terms: [
    {
      term: 'NEN 1010',
      definition:
        'Norm voor elektrische installaties laagspanning in NL — juridisch dwingend via het Bbl.',
    },
    {
      term: 'Hoofdaansluiting',
      definition:
        'Verbinding tussen openbaar net en woning; standaard 3×25 A (17 kW) voor woningbouw.',
    },
    {
      term: 'Meterkast',
      definition:
        'Centrale ruimte met aardlek, groepen­kast en hoofdschakelaar; minimaal 1×3 m², ventilatie­eisen.',
    },
    {
      term: 'Hoofdschakelaar',
      definition:
        'Schakelaar waarmee de complete installatie spannings­vrij wordt gemaakt — verplicht bij metingen en onderhoud.',
    },
    {
      term: 'Aardlekschakelaar (ALS)',
      definition:
        'Beveiliging die bij lekstroom > 30 mA binnen 0,3 s uitschakelt; verplicht op alle wandcontact­doos­groepen.',
    },
    {
      term: 'Installatie-automaat',
      definition:
        'Smeltbeveiliging (16 A standaard) per groep tegen overbelasting en kortsluiting.',
    },
    {
      term: 'Groep',
      definition:
        'Eindgroep van wandcontact­dozen of vaste aansluitingen; max. 16 A per groep, min. 3 groepen per woning.',
    },
    {
      term: 'Aarding',
      definition:
        'Verbinding tussen metaal en aardelektrode — voert lekstromen veilig af; standaard via koperdraad of waterleiding.',
    },
    {
      term: 'Fase / nul',
      definition:
        'Bruine of zwarte fase (230 V) en blauwe nul (0 V); samen 1×230 V wisselspanning.',
    },
    {
      term: 'Krachtstroom',
      definition:
        '3-fasen aansluiting (3×400 V) voor zware verbruikers — kookplaat, sauna, laadpaal > 11 kW.',
    },
    {
      term: 'Wand­contact­doos (WCD)',
      definition:
        'Standaard stopcontact 230 V/16 A; randaarde verplicht voor metalen behuizingen en in natte ruimten.',
    },
    {
      term: 'Domotica / KNX',
      definition:
        'Geïntegreerd huis­besturings­systeem voor licht, gordijnen, verwarming — vaak met KNX- of Zigbee-protocol.',
    },
    {
      term: 'Spanning­srichting (V)',
      definition:
        'Eenheid van elektrische potentiaal­verschil — Nederland huishouden 230 V wisselspanning.',
    },
    {
      term: 'Vermogen (W)',
      definition:
        'Energie per tijdseenheid: P = U × I (spanning × stroom). Vaatwasser ≈ 2000 W, ledlamp 8 W.',
    },
  ],

  games: [
    {
      id: 'C4-gapfill-1', type: 'gapfill',
      title: 'Elektra — begrippen',
      text:
        'De norm voor elektrische installaties heet {{NEN 1010}}. ' +
        'Een {{aardlek­schakelaar}} (ALS) schakelt af bij lekstroom > 30 mA. ' +
        'De standaard­netspanning in NL is {{230}} V wisselstroom, krachtstroom is 400 V. ' +
        'Bij apparaten > 3 kW (oven, wasmachine, fornuis) is een {{eigen groep}} verplicht.',
      distractors: ['NEN 3215', '110', 'smeltveiligheid', 'thermostaat'],
    },
    {
      id: 'C4-sort-1', type: 'sort',
      title: 'Welke draad­kleur?',
      categories: ['Fase (L)', 'Nul (N)', 'Aarde (PE)', 'Schakeldraad'],
      items: [
        { label: 'Bruin', category: 'Fase (L)' },
        { label: 'Blauw', category: 'Nul (N)' },
        { label: 'Groen/geel', category: 'Aarde (PE)' },
        { label: 'Zwart', category: 'Schakeldraad' },
      ],
    },
    {
      id: 'C4-matching-1', type: 'matching',
      title: 'Componenten en functie',
      pairs: [
        { left: 'Smeltveiligheid', right: 'Oude porseleinen stop — eenmalig, niet herbruikbaar' },
        { left: 'Installatie­automaat', right: 'Moderne herbruikbare zekering' },
        { left: 'Aardlek­schakelaar', right: 'Beschermt mens tegen elektrocutie (30 mA)' },
        { left: 'Perilex-aansluiting', right: '5-polige 400 V stekker (fornuis, sauna)' },
        { left: 'Wattpiek (Wp)', right: 'Maximaal vermogen zonnepaneel onder ideale conditie' },
      ],
    },
  ],
}
