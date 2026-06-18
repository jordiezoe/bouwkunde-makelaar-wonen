import type { Topic } from '../types/content'

export const C_2_waterleiding: Topic = {
  code: 'C.2',
  section: 'C',
  title: 'Waterleiding',
  chapterRef: 'Lesboek hoofdstukken 22 en 23',
  blurb:
    'De wateraansluiting op de hoofdleiding (hoofdkraan, watermeter, keerklep, aftapkraan), warmwatertoestellen (combiketel met CW-waarde, (zonne)boiler, close-in boiler, warmte-unit voor warmtenet, Quooker), tappunten met binnen- en buitenkranen, het lezen van warm- en koudwater op installatietekeningen, wateronthardingsinstallaties + hydrofoor, herkennen van loden leidingen en het risico op legionella.',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · Wateraansluiting en watermeter',
      toetstermCodes: ['C.2.1'],
      body: `
### Het verloop van koud water naar de woning
1. **Drinkwaterproductie**: rivieren, meren en grondwater → infiltratie in duinen voor zuivering → opslag → distributienet
2. **Hoofdleiding**: in straat/trottoir, vorstvrij op ~1 m diepte (geasfalteerd staal of PVC)
3. **Dienstleiding**: vanaf hoofdleiding naar de woning, vorstvrij ≥ 1.000 mm (geasfalteerd staal, koper of PVC)
4. **Meterkast** in de woning — daarin komt de **watermeter** met daarvoor en daarna:
   - **Dienstkraan** / **hoofdkraan** (van de drinkwatermaatschappij) **vóór** de watermeter
   - **Watermeter** zelf — registreert verbruik
   - **Stop- en aftapkraan** **na** de watermeter — om de hele binnenleiding af te sluiten en te legen
   - **Keerklep** — voorkomt terugstroming naar het distributienet

### Volgorde in de meterkast (van beneden naar boven)
- Onderaan: **watermeter** (zwaarste apparaat, met aansluiting op leiding in vloer)
- Middelste: **gasmeter** (sinds energietransitie minder vaak; in nieuwbouw vaak afwezig)
- Bovenaan: **elektriciteitsmeter** + groepenkast

### Normen
- **NEN 1006** — algemene voorschriften waterleidinginstallaties
- **VEWIN** — Vereniging van waterbedrijven Nederland
- **KIWA** — keurt waterleidingmaterialen (KIWA-keurmerk verplicht op leidingen, kranen, ketels)
- **Drinkwaterwet** — wet die kwaliteit en levering regelt

### Watermeter
- **Mechanische schijfmeter** of **moderne digitale meter** (slimme meter)
- Registreert verbruik in **m³**
- Sinds 2020 worden veel meters vervangen door **slimme watermeters** met afstandsuitlezing
- Eigendom van het drinkwaterbedrijf — verzegeld; doorbreken van zegel = fraude

### Plaatselijke installatie
Boven de meter begint de **particuliere binnenleiding**:
- **Stijgleiding** naar bovenverdiepingen
- **Verzamelleiding(en)** per verdieping naar **tappunten**
- Voor elk tappunt een **stopkraan** of **hoekstopkraan**
- Op het laagste punt een **aftapkraan** (voor onderhoud)

### Drie systemen
- **Aftaksysteem** — één stijgleiding met aftakkingen (woningbouw)
- **Batterijsysteem** — toevoer splitst zich in meerdere stijgleidingen (groot gebouw)
- **Drukverhogingsinstallatie** (hydrofoor) — vanaf de 3e verdieping om bovenste tappunten te bereiken

### Vorstpreventie
- Leidingen **nooit tegen buitenmuren** of voor ventilatieopeningen
- Bij vorst: ontdooien met transformator/elektrische stroom (verboden: open vuur)
- Aanleg op afschot met aftapkraantje op laagste punt
      `.trim(),
    },

    {
      heading: '2 · Warmwatertoestellen: combiketel, boiler, Quooker en warmtenet',
      toetstermCodes: ['C.2.2'],
      body: `
B.2.2 vraagt om de vijf hoofd-warmwatertoestellen te kunnen toelichten — leer per toestel **werking** en **toepassing**.

### Combiketel
- **Hr-ketel** (Hoog Rendement) op gas die **zowel cv-water als warm tapwater** levert
- Bij tap-aftap krijgt tapwater **voorrang** boven cv (lager waterniveau in cv tijdelijk acceptabel)
- **CW-waarde** (Comfort Warmwater) geeft het tapwater-comfort aan:
  - **CW-1** — minimaal, bv. wastafel
  - **CW-3** — keuken-wastafel + kleine douche
  - **CW-4** — douche met goede capaciteit
  - **CW-5** — bad vullen + douche tegelijk (luxe-uitvoering)
  - **CW-6** — meerdere tappunten tegelijk (utiliteit, grote woning)
- **Gaskeurlabels**: HR (rendement ≥ 90%), SV (Schonere Verbranding), NZ (Naverwarming Zonneboiler), CW (Comfort Warmwater)
- Standaard tot ~2020; in moderne nieuwbouw vervangen door warmtepomp + boiler

### Boiler (voorraadvat)
**Boilers** verwarmen een hoeveelheid water in een geïsoleerd vat. Verwarmd door:
- **Cv-water** (dubbelwandig of via spiraal — laatste = doorstroomboiler)
- **Elektriciteit** (elektrische boiler)
- **Gas** (gasboiler — drukreservoir met gasvlam en waakvlam)
- **Zonne-energie** (zonneboiler — zie volgende punt)

#### Elektrische boilervarianten
- **Drukreservoir** — water onder waterleidingdruk → meerdere tappunten mogelijk
- **Lagedruk / close-in boiler** — 5–10 liter onder het aanrecht; open overloop op riool → heet water direct bij tappunt; nadeel: rioolaansluiting nodig
- **Aftap-/leegloopreservoir** — 's nachts opwarmen met goedkope nachtstroom, overdag verbruiken

### Close-in boiler
- **5–10 liter elektrische boiler onder het aanrecht** (in keuken of toilet)
- Levert direct **warm tapwater bij het tappunt** — geen lange wachttijd op warm water uit verre combiketel
- Werkt op **standaard 230 V**, geen aparte elektragroep nodig
- Veel **renovatie-toepassing** in oudere woningen zonder centrale warmwater
- Modern alternatief in nieuwbouw: **Quooker** (zie hieronder)

### Zonneboiler
- **Zonnecollector** met zwarte absorber op het dak (zuid, ~36° helling)
- Vloeistof in **gesloten circuit** geeft warmte af aan leidingwater in geïsoleerd **opslagvat** (200–300 liter)
- Bij voldoende zon: ~60 °C water
- **Naverwarmer** vult aan bij zwakke dagen (alleen warmwatertoestellen met **NZ-keurmerk**)
- Variant: **combi-/duoboiler** met cv-spiraal of elektrisch element
- Bespaart gemiddeld **50 %** van de energie voor warm water

> **Let op**: een **zonnepaneel (pv)** levert *elektriciteit*; een **zonnecollector** levert *warmte* — geen synoniemen!

### Warmte-unit (stadsverwarming / warmtenet)
- In gebieden aangesloten op een **warmtenet** (stadswarmte) komt het warme water van een centrale **bron** (RWZI, afvalverbranding, geothermie, datacenter, biomassa)
- In de woning staat een **afleverset / warmte-unit** in plaats van een combiketel
- De warmte-unit bevat:
  - **Warmtewisselaar** voor cv en/of tapwater
  - **Regelklep + pomp** voor de verdeling
  - **Energiemeter** (warmtemeter) die de afname registreert in **GJ** (gigajoule)
- **Geen gas** in de woning meer nodig — modern alternatief in warmtenet-wijken
- **Voor- en nadelen**:
  - Voordeel: geen ketel, geen onderhoud, geen schoorsteen
  - Nadeel: gebonden aan één leverancier; vastrechtkosten kunnen hoog zijn; energieprijs onderhevig aan tarief van het warmtenet

### Quooker
- **Voorraadvaatje (3–7 liter) onder het aanrecht** dat water op **~110 °C** (overdruk) houdt
- Bij kraan opendraaien stroomt het water onmiddellijk **kokend** uit
- Bespaart **waterkoker / pannen op fornuis** voor koken, thee, blanchet, ontkalken
- Werkt op standaard 230 V — verbruik ~10 W stand-by, hoog tijdens opwarmen
- Modern alternatief: bredere keukenkraan-systemen (Grohe Red, Franke Mondial) met kokend water + filterwater + koud water
- **CW-keurmerk** niet direct van toepassing (geen sanitaire warmwatervoorziening)
      `.trim(),
    },

    {
      heading: '3 · Tappunten en kranen',
      toetstermCodes: ['C.2.3'],
      body: `
### Soorten tappunten in een woning
**Binnen**:
- **Keukenkraan** (vaak mengkraan, soms uitneembare douchekop)
- **Wastafelkraan**
- **Doucheraan / badkraan** (thermostatische mengkraan voor temperatuurstabiliteit)
- **Toilet-spoelkraan** (op stortbak of direct via spoelautomaat)
- **Wasmachine-aansluiting**
- **Vaatwasser-aansluiting**

**Buiten**:
- **Buitenkraan / gevelkom** — ingemetseld in de gevel, met **keerklep** verplicht
- **Tuinkraan met aftap-eenheid** — afsluitbaar in de woning, kraan zelf in tuin (vorstvrij)
- **Industriële kranen** (campings, bouwplaatsen) — drukveerkraan zelfsluitend

### Kraantypen
- **Tapkraan (eenhandel)** — los warm en koud, klassiek; nu vervangen door mengkraan
- **Mengkraan** — één hendel of twee draaiknoppen; mengt warm en koud
- **Eenhandsmengkraan** — modern standaard: één hendel regelt mengverhouding en volume
- **Thermostatische mengkraan** — instelbare gewenste temperatuur, blijft constant ondanks druk- of stroomschommelingen — standaard voor **douche en bad**
- **Stopkraan** — zelden bediend, vaak met aftapkraan (voor onderhoud)
- **Hoekstopkraan** — voor **stortbak wc** of wasmachine — afsluitbaar onder het tappunt
- **Aftapkraan** — laagste punt, voor het leegmaken van de leiding
- **Keerklepkraan** — verplicht bij buitenkraan, cv-aansluiting, wasmachine — **voorkomt terugstroming van vervuild water** in het drinkwaternet
- **Plug- of kogelkraan** — snelle volledige afsluiting met kwartdraai
- **Drukveerkraan** — zelfsluitend (campings, openbare gebouwen)
- **Elektronische kraan** — infraroodsensor (openbare gebouwen, ziekenhuizen)

### Onderdelen van een kraan
- **Leertje (keramische schijf)** — moderne kranen hebben **keramische schijven** in plaats van rubberen leertjes — slijtvast, geen "druppen"
- **Zitting** — tegenstuk van het leertje, vaak van messing of brons
- **Perlator** (mousseur) — luchtmenger aan de tuit; spaart water (~40 % minder) zonder gevoel van minder stroom
- **Spuitstuk** — uitstromingsdeel
- **Klemring / schroefdraad** — bevestiging aan kraan-aansluitstuk

### Aansluitingen
- **Hoekstopkraan** met **mannelijk schroefdraad ½"** (warmwater rood, koud water blauw)
- **Flexibele aansluitslangen** — bestand tegen druk en warmte (verschillende lengtes 30/40/50/60 cm)
- **Knelfittings** of **soldeerverbindingen** in de leiding zelf

### Veiligheid en hygiëne
- **Keerklep** verplicht bij elke aansluiting op het drinkwaternet waar terugstroming mogelijk is
- **Beluchter** in mousseur voorkomt onderdruk-zuig
- **Brandkranen en sprinklers** apart van drinkwater (grotere doorsnede, vergt eigen leidingnet)
      `.trim(),
    },

    {
      heading: '4 · Warm- en koudwater op installatietekening',
      toetstermCodes: ['C.2.4'],
      body: `
B.2.4 vraagt om aan de hand van een **installatietekening** de warm- en koudwaterinstallaties te kunnen herkennen.

### Standaardconventies op installatietekeningen

**Lijntypes en kleuren**:
- **Koud water** — meestal **blauwe** lijn of doorgetrokken zwarte lijn met code "KW" / "K"
- **Warm water** — meestal **rode** lijn of streep-stippellijn met code "WW" / "W"
- **Cv-water (verwarming)** — vaak een aparte kleur of dubbele lijn (aanvoer + retour)
- **Riolering** — donkere lijn of streep-stippellijn met code "VWA" of "HWA"

**Schaal en niveau**:
- Plattegrond per verdieping
- Isometrisch (3D-perspectief) — toont stijgleidingen door verdiepingen
- Schema (één-lijn-tekening) — vereenvoudigd zonder schaal, toont de logische verbindingen

### Belangrijke symbolen
| Symbool | Betekenis |
|---|---|
| ⊗ | Tappunt (kraan) |
| ◯ | Stopkraan |
| Δ | Aftapkraan |
| Driehoek met streep | Keerklep |
| Vierkant | Watermeter |
| Cirkel met M | Boiler / cv-ketel |
| Lijn met pijl | Stromingsrichting |
| Driehoekje voor lijn | Aansluiting (T-stuk) |
| WW / KW labels | Warm-/koudwaterleiding |

### Hoe lees je een tekening?

1. **Begin bij de meterkast** — daar staan watermeter, hoofdkraan, eventueel cv-ketel/boiler
2. **Volg de stijgleiding** verticaal naar boven (op de isometrische tekening — op plattegrond niet zichtbaar)
3. **Verzamelleidingen** lopen horizontaal per verdieping naar tappunten
4. **Warm- en koudwater lopen parallel** — let op de kleur of code; mengen pas bij de mengkraan
5. **Cv-aanvoer en cv-retour** lopen ook parallel maar tussen ketel en radiatoren
6. **Keerkleppen** zoeken bij wasmachine, buitenkranen, cv-vulkraan
7. **Aftapkranen** op laagste punten of na elke etage

### Wat zoek je voor een woninginspectie?
- **Plaats van hoofdkraan** — waar moet je 'in nood' afsluiten?
- **Boiler/ketel** — type en aansluitingen
- **Loden leidingen** — vraag aan de installateur (zie sectie 6)
- **Doodlopende leidingen** — risico op legionella (zie sectie 7)
- **Onbeschermde buitenleidingen** — vorstgevaar
- **Ontbrekende keerkleppen** — risico op terugstroming

### Verschil installatietekening vs principetekening
- **Installatietekening** — feitelijk geplaatste leidingen op schaal
- **Principetekening** — abstracte schematische voorstelling, zonder exacte positie
- **As-built tekening** — definitieve weergave na voltooiing (kan afwijken van het oorspronkelijke ontwerp)
      `.trim(),
    },

    {
      heading: '5 · Wateronthardingsinstallatie en hydrofoor',
      toetstermCodes: ['C.2.5'],
      body: `
### Wateronthardingsinstallatie (waterontharder)
#### Wat is hard water?
Drinkwater bevat opgelost **calcium en magnesium** (kalk-mineralen). Hoeveelheid in **Duitse hardheidsgraden (°DH)**:
- **0–4 °DH**: zeer zacht
- **4–9 °DH**: zacht
- **9–14 °DH**: matig hard
- **> 14 °DH**: hard

Boven ~9 °DH ontstaat **kalkaanslag** (ketelsteen) op verwarmingselementen, in leidingen, in de combiketel, op kranen en op tegels.

#### Hoe werkt een ontharder?
Een **wateronthardingsinstallatie** (zoutloze of zout-gebaseerde) werkt meestal volgens **ionenuitwisseling**:
1. Het harde water stroomt door een tank met **harskorrels** beladen met **natrium-ionen**
2. Calcium- en magnesium-ionen wisselen plaats met natrium → hard water wordt zacht
3. **Regeneratie** met **pekel** (zout-oplossing) — na een aantal liters geleverd water wordt de hars met zoutwater gespoeld om de natriumlading te herstellen

#### Functie en doel
- **Verlengt de levensduur** van combiketel, boiler, wasmachine, vaatwasser
- **Bespaart energie** — kalkaanslag op verwarmingselement verlaagt het rendement
- **Bespaart wasmiddelen** — zacht water schuimt sneller
- **Beter voor huid en haar** — minder kalk-irritatie
- **Beschermt kranen en tegels** tegen kalkafzetting

#### Nadelen
- **Extra zoutverbruik** (10–20 kg/maand)
- **Periodieke pekelregeneratie** met spoelwater naar riolering (~50 l per regeneratie)
- **Aanschaf en onderhoud** ~€ 700–1.500
- **Verhoogt natriumgehalte** in drinkwater (voor zoutarme dieet kan dit punt-van-overweging zijn)
- **Vervangt drinkwater-mineraal-balans** — minder gunstig dan onbehandeld water voor consumptie (sommige onthardingen daarom alleen op warmwater-zijde)

#### Plaats
- **Na de watermeter** in de meterkast, of in de bijkeuken
- Vóór de combiketel/boiler
- **Niet voor de aansluiting van een afzonderlijke drinkkraan** — beter zacht water op de cv en warmwater, gewoon hard water op drinkpunten

### Hydrofoor (drukverhogings-installatie)
#### Wat is een hydrofoor?
Een **hydrofoor** (drukverhogingsinstallatie) is een **pomp + drukvat** dat het waterdrukniveau in een woning of gebouw verhoogt. Toegepast wanneer:
- Hoger gelegen tappunten onvoldoende druk hebben (vanaf de 3e–4e verdieping)
- Het waterleidingnet zelf te weinig druk levert
- Sprinkler- of brandbluswateraansluiting hoge druk nodig heeft
- Sproeisysteem in een tuin krachtige stroom nodig heeft

#### Hoe werkt het?
1. **Drukvat** met luchtkussen aan de bovenkant (lucht boven, water onder)
2. **Pomp** vult het vat met water — luchtdruk neemt toe
3. Bij een tappunt opening stroomt water uit (luchtdruk perst water uit)
4. Drukvat is leeg → drukschakelaar activeert de pomp om aan te vullen
5. Pomp stopt bij maximum-druk

#### Functie en doel
- **Drukverhoging** van het beschikbare leidingwater
- **Buffer**: bij plotselinge piekverbruik (douche start) blijft druk constant
- **Bescherming pomp** — pomp draait niet continu, alleen bij gevuldspeling van het drukvat

#### Typen
- **Vroeger**: groot ijzeren drukvat in kelder (luchtcompressor + waterpomp)
- **Modern**: compacte **frequentieregelaar-pomp** (constant-druk-systeem zonder groot drukvat) — automatisch geregeld op afnamehoeveelheid
- **Booster-pomp** — kleine pomp direct na de watermeter voor één woning

#### Onderhoud
- **Lucht bijvullen** in oude drukvaten (jaarlijks)
- **Filter spoelen** voor de pomp
- **Inspectie** op lekkage
      `.trim(),
    },

    {
      heading: '6 · Loden waterleidingen herkennen',
      toetstermCodes: ['C.2.6'],
      body: `
### Waarom is lood schadelijk in drinkwater?
- **Lood is een zwaar metaal** dat zich opstapelt in het lichaam
- **Bijzonder schadelijk voor**:
  - **Ongeboren kinderen** (placenta-overgang → hersenbeschadiging)
  - **Zuigelingen en kinderen tot 7 jaar** (hersenschade, verminderde IQ-ontwikkeling)
  - **Zwangere vrouwen**
- **Veiligheidsnorm** drinkwater: **< 5 μg/l** (sinds 2022 aangescherpt; vroeger 10 μg/l)
- Bij twijfel: **loodtest** via erkend laboratorium of de drinkwatermaatschappij (gratis door VEWIN aangeboden in risicogebieden)

### Periode waarin lood gebruikt werd
- **Vóór 1960** — standaard voor binnenwaterleidingen in NL
- **1960–1976** — lood verboden bij nieuwbouw maar nog toegepast in renovatie
- **Vanaf 1976** — lood verboden voor nieuwe drinkwaterleidingen
- **In de praktijk** komt lood nog voor in:
  - Vooroorlogse panden (vóór 1945)
  - Sommige na-oorlogse woningen (1945–1960)
  - **Gemeentelijke aansluitingen** (sommige steden zoals Amsterdam vervingen nog tot 2000)

### Visuele herkenning van loden leidingen

| Kenmerk | Lood | Verzinkt staal | Koper | PVC |
|---|---|---|---|---|
| **Kleur** | doffe matgrijs, paarsachtig | helder zilvergrijs, glanzend | rood-bruin | wit of grijs |
| **Oppervlak** | krast met nagel | hard | hard, kan oxideren tot groen patina | kunststof |
| **Vorm** | uit één stuk gebogen, geen rechte sneden | rechte secties met fittingen | gesoldeerde of geklemde verbindingen | meestal recht met gelijmde verbindingen |
| **Verbindingen** | gesoldeerde knopen | schroefdraad of klem | soldering of knelfitting | lijm of klem |
| **Geluid** bij kloppen | dof | helder, metalig | helder | gedempt |
| **Gewicht** | zeer zwaar | gemiddeld | licht | zeer licht |
| **Lasnaden** | geen | rechte verbindingen | knelringen | manchetten |

### Drie zekere herkenningskenmerken voor lood
1. **Doffe matgrijze kleur** — niet glanzend
2. **Een nagel maakt een krasje** — lood is zacht (Mohs-hardheid ~1,5)
3. **Uit één stuk gebogen** — vaak gebogen bochten, geen aparte fittingen of lasnaden

### Test bij twijfel
- **Loodtest**: een **erkend laboratorium** of de drinkwatermaatschappij voert een wateranalyse uit
- Indicatieve test: **water 's ochtends als eerste laten lopen tijdens 30 sec**, dan vullen in glas — als smaak afwijkend of glas troebel bij staan, verdere analyse
- Kosten loodtest: ~€ 30–80

### Vervanging
- **Plicht**: gemeentelijke aansluiting wordt door drinkwatermaatschappij vervangen
- **Eigen verantwoordelijkheid**: alle leidingen vanaf de meterkast tot tappunten in eigen woning
- **Kosten** vervanging hele woninginstallatie: € 4.000–8.000 (in een rijwoning)
- **Hak- en breekwerk** vereist; verstandig te combineren met renovatie

### Beleid VEWIN en gemeente
- VEWIN (drinkwatermaatschappijen) biedt **gratis loodtest** aan in panden gebouwd vóór 1960
- Bij verkoop van een woning moet **vermoedelijke aanwezigheid** worden gemeld (mededelingsplicht)
- Gemeente kan **subsidies** verstrekken voor vervanging (varieert per gemeente)

### Voor de makelaar (zeer relevant!)
Bij verkoop van een woning vóór 1960:
- **Vraag de eigenaar** of loden leidingen vervangen zijn en of er documentatie is
- **Vermeld** vermoedelijke aanwezigheid in de transparantie-eisen
- **Wijs koper** op gratis loodtest door drinkwatermaatschappij
- **Bij baby/kindergezin in koop**: extra dringend advies om voor aankoop testen
      `.trim(),
    },

    {
      heading: '7 · Legionella-risico in warmwaterinstallaties',
      toetstermCodes: ['C.2.7'],
      body: `
### Wat is legionella?
**Legionella pneumophila** is een **bacterie** die natuurlijk voorkomt in zoet water in lage concentraties. Wanneer het water op gunstige temperatuur (20–50 °C) en in stilstaande condities komt, kan de bacterie zich snel vermenigvuldigen.

### Hoe ontstaat besmetting?
- Bacterie wordt **niet door drinken** schadelijk
- **Inademing van besmette aerosoldroplets** (douche, fontein, koeltoren, jacuzzi) → bacterie bereikt de longen
- Veroorzaakt:
  - **Legionairsziekte** — ernstige longontsteking, kan **dodelijk** zijn (~10 % mortaliteit), vooral bij ouderen en verzwakte mensen
  - **Pontiacgriep** — mildere variant (zonder longontsteking)

### Risicofactoren

**Temperatuur — de cruciale factor**:
- **< 20 °C** — bacterie blijft slapend (geen vermenigvuldiging)
- **20–25 °C** — langzame groei
- **25–45 °C** — **snelle groei** (gevarenzone!)
- **45–50 °C** — afnemende groei
- **55 °C** — sterke afname; bij **60 °C wordt 90 % van de bacteriën gedood in 2 minuten**
- **70 °C** — onmiddellijke dood

**Stilstand**: water dat lang niet stroomt (vakantieperiode, dodevoeleidingen, slecht gebruikte tappunten) → bacterie heeft tijd om te groeien

### Hoge-risico-situaties
- **Doodlopende leidingen** zonder watercirculatie
- **Warmwaterleidingen die niet warm genoeg worden** (< 55 °C)
- **Aansluiting koudwater dicht bij cv-leiding** — koud water wordt opgewarmd tot risico-zone
- **Lange wachttijd** op warm water (water in leiding 30 °C in plaats van koud)
- **Douches** die zelden gebruikt worden (logeer-/gastenkamers)
- **Lage temperatuurverwarming (LTV)** combinaties met onvoldoende isolatie
- **Boilers en voorraadvaten** die niet boven 60 °C komen

### Bouwfysisch en installatie­technisch voorkomen
1. **Warmwater min. 60 °C** in de boiler (NEN 1006)
2. **Tappunten min. 55 °C** binnen 1 minuut warm water laten lopen
3. **Geen doodlopende leidingen** — alle leidingen ringvormig of dagelijks gebruikt
4. **Koudwater < 25 °C** — niet dicht bij verwarmde leidingen, geïsoleerd indien nodig
5. **Aftakkingen kort** — afstand tot hoofdleiding minimaliseren
6. **Doorspoelroutine** in gebouwen met onregelmatig gebruik

### Wettelijke regelgeving
- **Drinkwaterbesluit** en **Drinkwaterwet**
- **Risicoanalyse + beheersplan** verplicht voor:
  - Ziekenhuizen, zorginstellingen
  - Hotels en logiesverblijven > 5 verblijfseenheden
  - Sauna's, sportcomplexen met douches
  - Asielzoekerscentra
- **Particuliere woningen**: geen wettelijke verplichting, wel sterke aanbeveling

### Voor een woning na lange afwezigheid
1. **Spoel alle warmwatertappunten** 1–2 minuten op de hoogste stand
2. **Ventileer** de badkamer tijdens het spoelen (aerosolen)
3. **Verhoog tijdelijk** de boilertemperatuur naar 65 °C voor 30 minuten — "thermische desinfectie"
4. **Vermijd** de douche te gebruiken tijdens deze spoelactie

### Behandeling bij verdenking besmetting
- **Thermische desinfectie**: boiler kort op 70 °C; tappunten spoelen op die temperatuur
- **Chemische desinfectie**: chloorbehandeling door specialist
- **UV-behandeling**: UV-lamp op het waterleidingnet
- Bij blijvend probleem: **installatie aanpassen** (kortere leidingen, betere isolatie, hogere watertemperatuur)

### Voor de makelaar
- **In nieuwbouw** is legionella-risico klein (moderne installaties, goede temperaturen)
- **Bij oude installaties** met lange leidingen, doodlopende stukken, lage temperaturen: vermeld het risico in inspectierapporten
- **Bij verkoop van bedrijfspand**: vraag naar **beheersplan legionella** — is wettelijk verplicht
      `.trim(),
    },
  ],

  toetstermen: [
    {
      code: 'C.2.1',
      text: 'Herkent de wateraansluiting, plaats en watermeter.',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'C.2.2',
      text: 'Licht de warmwatertoestellen combiketel (met CW-waarde), (zonne)boiler en close-in boiler, warmte-unit bij stadsverwarming/warmtenet en Quooker toe.',
      niveau: 'BT1',
      bloom: 'Begrip',
    },
    {
      code: 'C.2.3',
      text: 'Licht de diverse tappunten met binnen- en buitenkranen toe, inclusief aansluitingen.',
      niveau: 'BT1',
      bloom: 'Begrip',
    },
    {
      code: 'C.2.4',
      text: 'Herkent aan de hand van een installatietekening de warm- en koudwaterinstallaties.',
      niveau: 'BT2',
      bloom: 'Kennis',
      metDrawing: true,
    },
    {
      code: 'C.2.5',
      text: 'Herkent een wateronthardingsinstallatie en een hydrofoorinstallatie en beschrijft de werking, het doel en de functie ervan.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
    {
      code: 'C.2.6',
      text: 'Herkent of er (mogelijk) sprake is van loden waterleidingen.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
    {
      code: 'C.2.7',
      text: "Legt de risico's van een warmwaterinstallatie m.b.t. legionella (oorzaak en gevolg) uit.",
      niveau: 'BT2',
      bloom: 'Begrip',
    },
  ],

  questions: [
    // C.2.1 (3)
    {
      id: 'C2-1-a',
      toetstermCode: 'C.2.1',
      type: 'mc',
      prompt: 'Wat is de volgorde van de meters in een meterkast (van beneden naar boven)?',
      options: [
        'Elektriciteit → gas → water',
        'Water → gas → elektriciteit',
        'Gas → water → elektriciteit',
        'Elektriciteit → water → gas',
      ],
      correctIndex: 1,
      explanation:
        'Standaard volgorde in de meterkast: watermeter onderaan (zwaarste apparaat, aansluiting op leiding in vloer), gasmeter in het midden, elektriciteitsmeter + groepenkast bovenaan. Boven de meterkast begint de particuliere binnenleiding.',
    },
    {
      id: 'C2-1-b',
      toetstermCode: 'C.2.1',
      type: 'mc',
      prompt: 'Wat is de functie van een **keerklep** na de watermeter?',
      options: [
        'Geluidsdemping voorkomen',
        'Vermindering van waterdruk',
        'Voorkomt terugstroming van water naar het net',
        'Sluit het water af bij vorst',
      ],
      correctIndex: 2,
      explanation:
        'De keerklep (na de watermeter) laat water alleen vanaf het hoofdnet naar de woning stromen, niet terug. Voorkomt dat bij plotselinge drukval (bv. brand in straat) vuilwater uit de woning naar het drinkwaternet terugzuigt en het algemene waterleidingnet besmet.',
    },
    {
      id: 'C2-1-c',
      toetstermCode: 'C.2.1',
      type: 'mc',
      prompt: 'Waar staat **KIWA** voor in waterleidingcontext?',
      options: [
        'Kwaliteitsinstituut Waterleidingen Algemeen',
        'Een keuringsinstantie voor waterleidingmateriaal',
        'Een drinkwaterbedrijf zoals Vitens',
        'Een norm voor watercirculatie',
      ],
      correctIndex: 1,
      explanation:
        'KIWA is een onafhankelijk keuringsinstituut dat materialen en producten voor drinkwaterinstallaties test op veiligheid, hygiëne en duurzaamheid. KIWA-keurmerk is verplicht op leidingen, kranen, boilers en cv-ketels voor toepassing in drinkwaterinstallaties.',
    },

    // C.2.2 (5)
    {
      id: 'C2-2-a',
      toetstermCode: 'C.2.2',
      type: 'mc',
      prompt: 'Wat geeft de **CW-waarde** van een combiketel aan?',
      options: [
        'De energie-efficiëntie',
        'De maximale verwarmingscapaciteit in kW',
        'Het tapwater-comfortniveau',
        'De temperatuur van het tapwater',
      ],
      correctIndex: 2,
      explanation:
        'CW = Comfort Warmwater, een KIWA-classificatie voor tapwatercomfort: CW-1 (minimaal), CW-2/3 (keuken + kleine douche), CW-4/5 (douche/bad met goede capaciteit), CW-6 (meerdere tappunten tegelijk). Bij grotere gezinnen of luxe-woningen is CW-5 of CW-6 wenselijk.',
    },
    {
      id: 'C2-2-b',
      toetstermCode: 'C.2.2',
      type: 'mc',
      prompt: 'Een **close-in boiler** is:',
      options: [
        'Een grote warmwaterboiler in de garage',
        'Een kleine elektrische boiler bij het tappunt',
        'Een gasboiler met dichte rookgasafvoer',
        'Een combiketel zonder cv-functie',
      ],
      correctIndex: 1,
      explanation:
        'Close-in boiler = 5–10 liter elektrische voorraad onder de wastafel of bij de keuken, met open overloop op het riool. Levert direct warm water bij het tappunt — geen lange wachttijd op water uit de centrale combiketel. Vooral in renovaties van oudere woningen of bij verre tappunten.',
    },
    {
      id: 'C2-2-c',
      toetstermCode: 'C.2.2',
      type: 'mc',
      prompt: 'Wat is het verschil tussen een **zonnepaneel** en een **zonnecollector**?',
      options: [
        'Zonnepaneel is op het dak, zonnecollector binnenshuis',
        'PV levert stroom; een collector levert warmte',
        'Een zonnecollector is voor in de winter, een zonnepaneel voor in de zomer',
        'Het zijn synoniemen',
      ],
      correctIndex: 1,
      explanation:
        'Belangrijk onderscheid! **Zonnepaneel (PV = photovoltaic)**: zonnecellen leveren **elektriciteit** via het fotovoltaïsche effect. **Zonnecollector**: zwarte absorber met vloeistofcircuit levert **warmte** voor de zonneboiler. Beide kunnen op hetzelfde dak; ze zijn complementair maar niet hetzelfde.',
    },
    {
      id: 'C2-2-d',
      toetstermCode: 'C.2.2',
      type: 'mc',
      prompt:
        'Bij aansluiting op een **warmtenet (stadsverwarming)** wordt in plaats van een combiketel een ander apparaat geplaatst:',
      options: [
        'Een grotere boiler',
        'Een afleverset met warmtewisselaar en -meter',
        'Een zonneboiler',
        'Een extra cv-pomp',
      ],
      correctIndex: 1,
      explanation:
        'In warmtenet-wijken levert een centrale bron (RWZI, afvalverbranding, geothermie) de warmte. In de woning komt een **warmte-unit / afleverset** met warmtewisselaar (voor cv en/of tapwater), regelklep + pomp, en een **energiemeter (in GJ)**. Geen ketel, geen gas in de woning. Vastrechtkosten kunnen wel een nadeel zijn.',
    },
    {
      id: 'C2-2-e',
      toetstermCode: 'C.2.2',
      type: 'mc',
      prompt:
        'Een **Quooker** levert:',
      options: [
        'Gefilterd, gekoeld water',
        'Kokend water direct uit de kraan',
        'Warm tapwater voor de douche',
        'Bruisend mineraalwater',
      ],
      correctIndex: 1,
      explanation:
        'Een Quooker is een keukenapparaat met klein vacuüm-geïsoleerd voorraadvat (3–7 l) onder het aanrecht, waarin water op ~110 °C onder druk wordt gehouden. Bij kraan-open spuit het direct kokend uit. Bespaart waterkoker en kookpot. Werkt op 230 V; stand-by verbruik ~10 W. Moderne kraankops bieden ook gefilterd, bruisend en koud water.',
    },

    // C.2.3 (3)
    {
      id: 'C2-3-a',
      toetstermCode: 'C.2.3',
      type: 'mc',
      prompt:
        'Welke kraan is **standaard voor de douche of het bad** vanwege constante temperatuur ondanks druk- of stroomschommelingen?',
      options: [
        'Eenhandsmengkraan',
        'Thermostatische mengkraan',
        'Hoekstopkraan',
        'Drukveerkraan',
      ],
      correctIndex: 1,
      explanation:
        'Een thermostatische mengkraan houdt de ingestelde temperatuur constant — ook als iemand elders in het huis een kraan opent of de waterdruk wisselt. Standaard voor douche en bad waar plotselinge temperatuurpieken (vlot warm of koud) gevaarlijk zijn (brandwond risico).',
    },
    {
      id: 'C2-3-b',
      toetstermCode: 'C.2.3',
      type: 'mc',
      prompt:
        'Bij elke **buitenkraan** is een **keerklep** verplicht. Waarom?',
      options: [
        'Om vorstgevaar te voorkomen',
        'Om terugstroming van vervuild water te voorkomen',
        'Om de waterdruk te verhogen',
        'Om de kraan eenvoudig af te sluiten in de winter',
      ],
      correctIndex: 1,
      explanation:
        'Bij plotselinge drukval (bv. brand of breuk elders in het leidingnet) zou water uit een tuinslang in vervuilde recipiënten naar het drinkwaternet kunnen terugzuigen. De keerklep voorkomt dit. Verplicht bij elke buitenkraan en bij aansluitingen op wasmachine, vaatwasser, sproeisystemen.',
    },
    {
      id: 'C2-3-c',
      toetstermCode: 'C.2.3',
      type: 'mc',
      prompt:
        'Wat is een **perlator (mousseur)** op een kraan?',
      options: [
        'Een filter voor zwevende deeltjes',
        'Een luchtmenger op de tuit die ~40% water bespaart',
        'Een chemisch element voor ontkalken',
        'Een geluiddemper',
      ],
      correctIndex: 1,
      explanation:
        'Een perlator (mousseur) is het zeefje aan het einde van een kraan dat lucht mengt met het water. Resultaat: het uitstromende water voelt "vol" aan maar gebruikt ~40% minder volume. Standaard op moderne kranen, eenvoudig vervangbaar (in verschillende debietsklasse: 5, 8 of 10 l/min).',
    },

    // C.2.4 (2)
    {
      id: 'C2-4-a',
      toetstermCode: 'C.2.4',
      type: 'mc',
      prompt:
        'Op een installatietekening worden **warm- en koudwaterleidingen** vaak weergegeven met:',
      options: [
        'Dezelfde kleur (rood)',
        'Aan kleur/lijntype: koud blauw, warm rood (KW/WW)',
        'Pijl-symbolen alleen',
        'Tekstaanduiding zonder kleur',
      ],
      correctIndex: 1,
      explanation:
        'Standaard tekenconventie: koud water = blauwe lijn of zwart doorgetrokken (KW-code); warm water = rode lijn of streep-stippellijn (WW-code). Cv-aanvoer en -retour krijgen ook hun eigen kleurcode. Symbolen voor watermeter (vierkant), keerklep (driehoek), aftapkraan (Δ) zijn genormaliseerd.',
    },
    {
      id: 'C2-4-b',
      toetstermCode: 'C.2.4',
      type: 'mc',
      prompt:
        'Voor een woninginspectie: wat zoek je primair op een installatietekening?',
      options: [
        'De exacte capaciteit van elke kraan',
        'Hoofdkraan, keteltype, loden/doodlopende/onbeschermde leidingen',
        'De kleur van de kranen',
        'De afmetingen van de meterkast',
      ],
      correctIndex: 1,
      explanation:
        'Voor een woninginspectie zijn de belangrijke punten: plaats van hoofdkraan (afsluiten in nood), type ketel/boiler, mogelijke loden leidingen (bouwjaar < 1960), doodlopende leidingen (legionella-risico), onbeschermde buitenleidingen (vorstgevaar), ontbrekende keerkleppen. Capaciteit en kleur zijn secundair.',
    },

    // C.2.5 (3)
    {
      id: 'C2-5-a',
      toetstermCode: 'C.2.5',
      type: 'mc',
      prompt:
        'Hoe werkt een **wateronthardingsinstallatie** (ionenuitwisseling)?',
      options: [
        'Door verhitting van het water tot kalk neerslaat',
        'Calcium/magnesium wisselen op hars met natrium → zacht water',
        'Door een magneetveld dat kalkkristallen breekt',
        'Door chemische dosering met zoutzuur',
      ],
      correctIndex: 1,
      explanation:
        'Ionenuitwisselings­principe: harskorrels in een tank zijn vooraf "geladen" met natriumionen. Wanneer hard water doorstroomt, vervangen de calcium- en magnesiumionen het natrium op de hars (calcium hecht beter). Na een bepaalde hoeveelheid water raken de korrels uitgeput → regeneratie door spoelen met geconcentreerde pekel (zoutoplossing) die het natrium weer terugzet.',
    },
    {
      id: 'C2-5-b',
      toetstermCode: 'C.2.5',
      type: 'mc',
      prompt:
        'Wat is een **hydrofoor (drukverhogings­installatie)**?',
      options: [
        'Een filter voor harde water',
        'Een pomp met drukvat die de waterdruk verhoogt',
        'Een onderdeel van de combiketel',
        'Een wateropvang voor regenwater',
      ],
      correctIndex: 1,
      explanation:
        'Hydrofoor = drukverhogings­installatie: een pomp + drukvat (luchtkussen) verhoogt de druk in het waterleidingnet. Standaard vanaf de 3e-4e verdieping waar de druk uit het hoofdnet onvoldoende is, of bij sprinkler­systemen die hoge druk nodig hebben. Moderne uitvoering: frequentieregelaar-pomp met constant-druk-systeem.',
    },
    {
      id: 'C2-5-c',
      toetstermCode: 'C.2.5',
      type: 'mc',
      prompt:
        'Een waterontharder regenereert periodiek met **pekel (zoutoplossing)**. Wat is het nadeel daarvan?',
      options: [
        'Het verbruikt veel elektriciteit',
        'Verhoogt het natriumgehalte en loost spoelwater',
        'Het maakt het water zuur',
        'Het regenereert te langzaam',
      ],
      correctIndex: 1,
      explanation:
        'Bij regeneratie wordt natrium uit pekel uitgewisseld tegen calcium/magnesium. Een deel van het natrium komt in het drinkwater terecht — meestal binnen veilige limieten, maar voor mensen op zoutarme diëten een aandachtspunt. Bovendien wordt spoelwater (~50 l per regeneratie) op het riool geloosd. Sommige installaties onthardingen daarom alleen warmwater-zijde.',
    },

    // C.2.6 (3)
    {
      id: 'C2-6-a',
      toetstermCode: 'C.2.6',
      type: 'mc',
      prompt:
        'In welke periode werden **loden waterleidingen** standaard in NL gebruikt?',
      options: [
        'Tot 1960 (na 1976 helemaal verboden voor nieuwe leidingen)',
        'Pas na 1980',
        'Tot 2000',
        'Alleen in monumentale panden vóór 1900',
      ],
      correctIndex: 0,
      explanation:
        'Lood was standaard voor binnenwaterleidingen **tot ~1960**, vanaf 1976 verboden voor nieuwbouw. In de praktijk komen loden leidingen nog voor in vooroorlogse panden en oudere woningen (1945–1960). Sommige gemeentelijke aansluitingen werden tot ~2000 nog vervangen.',
    },
    {
      id: 'C2-6-b',
      toetstermCode: 'C.2.6',
      type: 'mc',
      prompt:
        'Hoe herken je **loden waterleidingen visueel**?',
      options: [
        'Helder zilvergrijs glanzend',
        'Dof matgrijs, geen lasnaden, zacht',
        'Rood-bruin met groen patina',
        'Wit kunststof',
      ],
      correctIndex: 1,
      explanation:
        'Drie zekere herkenningskenmerken: (1) doffe matgrijze kleur — niet glanzend; (2) een nagel maakt een krasje — lood is zacht (Mohs ~1,5); (3) uit één stuk gebogen, geen rechte fittingen of lasnaden — lood was bewerkbaar tot grote bogen. Verzinkt staal is helder zilvergrijs met fittingen; koper rood-bruin met soldering of klemfittingen.',
    },
    {
      id: 'C2-6-c',
      toetstermCode: 'C.2.6',
      type: 'mc',
      prompt:
        'Voor wie is lood in drinkwater **bijzonder schadelijk**?',
      options: [
        'Alleen voor ouderen boven de 65',
        'Voor (ongeboren) kinderen en zwangeren',
        'Alleen bij grote hoeveelheden',
        'Nauwelijks schadelijk',
      ],
      correctIndex: 1,
      explanation:
        'Lood is bijzonder schadelijk voor ongeboren en jonge kinderen (placentaovergang, hersenschade, verminderde IQ-ontwikkeling), zuigelingen tot 7 jaar, en zwangere vrouwen. Veiligheidsnorm sinds 2022: < 5 μg/l. VEWIN biedt gratis loodtest aan in panden gebouwd vóór 1960. Vermelding bij verkoop is mededelingsplicht.',
    },

    // C.2.7 (3)
    {
      id: 'C2-7-a',
      toetstermCode: 'C.2.7',
      type: 'mc',
      prompt:
        'In welke temperatuurzone groeit **legionella** het snelst?',
      options: [
        '< 10 °C — koud water',
        '25–45 °C — gunstige groeitemperatuur',
        '60–70 °C — heet water',
        'Boven 90 °C',
      ],
      correctIndex: 1,
      explanation:
        'Legionella groeit het snelst tussen 25 en 45 °C. Onder 20 °C is de bacterie slapend; bij 55 °C neemt de groei sterk af; bij 60 °C wordt 90% gedood in 2 minuten; bij 70 °C onmiddellijk. Vandaar de Bbl/NEN 1006-eis: boiler op min. 60 °C, tappunten op min. 55 °C.',
    },
    {
      id: 'C2-7-b',
      toetstermCode: 'C.2.7',
      type: 'mc',
      prompt:
        'Hoe besmet een mens zich met **legionella**?',
      options: [
        'Door drinken van besmet water',
        'Door inademing van besmette aerosolen',
        'Door huidcontact',
        'Door consumptie van besmette voeding',
      ],
      correctIndex: 1,
      explanation:
        'Drinken van besmet water is niet schadelijk — de maagzuur doodt de bacterie. Besmetting via **inademing van aerosolen**: kleine waterdruppeltjes die zwaar worden geademen (douche, jacuzzi, openbare koeltorens, fontein). De bacterie nestelt in de longen en veroorzaakt de "legionairsziekte" (longontsteking, ~10% mortaliteit) of pontiacgriep.',
    },
    {
      id: 'C2-7-c',
      toetstermCode: 'C.2.7',
      type: 'mc',
      prompt:
        'Welke maatregel **voorkomt legionella in een woning** het beste?',
      options: [
        'Wekelijks chloor in de boiler',
        'Geen dode leidingen; warm ≥60 °C, koud <25 °C',
        'Het uitschakelen van de combiketel buiten gebruik',
        'Alleen mineraalwater drinken',
      ],
      correctIndex: 1,
      explanation:
        'NEN 1006 + Bbl: warmwater minstens 60 °C in de boiler (legionella sterft), tappunten min. 55 °C binnen 1 minuut. Koudwaterleiding < 25 °C (niet dicht bij verwarmde leidingen). Geen doodlopende leidingen (ringleiding of dagelijks gebruik). Voor langdurige afwezigheid: tappunten 1-2 minuten doorspoelen na terugkomst.',
    },
  ],

  terms: [
    {
      term: 'Drinkwater',
      definition:
        'Water dat voldoet aan Drinkwater­besluit; geleverd door waterleiding­bedrijf onder ~3 bar druk.',
    },
    {
      term: 'Hoofdkraan',
      definition:
        'Centrale afsluiter direct achter de watermeter — bij calamiteit eerste handeling.',
    },
    {
      term: 'Watermeter',
      definition:
        'Telt verbruikt drinkwater in m³ — eigendom van waterleidingbedrijf, ijking elke 10 jaar.',
    },
    {
      term: 'Warm tap­water',
      definition:
        'Verwarmd drinkwater (~60 °C) voor douche, keuken; opgewarmd door boiler, geiser of warmtepomp.',
    },
    {
      term: 'Boiler / voorraadvat',
      definition:
        'Geïsoleerd vat (80-200 L) dat warmtapwater bewaart op ~60 °C; gebruikt elektriciteit, gas of warmtepomp.',
    },
    {
      term: 'Doorstroom­toestel',
      definition:
        'Verwarmt water alleen tijdens gebruik (combi-cv, geiser); compacter dan een voorraad­vat.',
    },
    {
      term: 'Legionella',
      definition:
        'Bacterie die zich vermenigvuldigt bij 25-50 °C; bestrijden door tap­water minimaal 60 °C te bewaren.',
    },
    {
      term: 'Koperen leiding',
      definition:
        'Klassieke materiaal voor binnenleidingen; soldeer- of knelverbindingen, lange levensduur.',
    },
    {
      term: 'PE-X-leiding',
      definition:
        'Kunststof drinkwaterleiding (kruisverbonden polyetheen) — flexibel, vorstbestendig, knelverbindingen.',
    },
    {
      term: 'MeerlaagsbuiS (Alupex)',
      definition:
        'Buis met PE-binnenkant, alu-tussenlaag, PE-buitenkant — combineert flexibiliteit met vormvastheid.',
    },
    {
      term: 'Drukverlies',
      definition:
        'Drukverlaging door wrijving in leidingen; vergt voldoende inwendige diameter (min. 12 mm voor tappunt).',
    },
    {
      term: 'Terugslagklep',
      definition:
        'Klep die water alleen één kant op laat — voorkomt terugstroming van drink- naar bedrijfswater.',
    },
    {
      term: 'Beluchter',
      definition:
        'Klep op leidingstijg­leiding die lucht laat toe om de leeg­zuiging te voorkomen.',
    },
    {
      term: 'Bedrijfswater / grijswater',
      definition:
        'Niet-drinkbaar water uit regen of douche, voor doorspoelen toilet of tuin — apart leidingnet vereist.',
    },
  ],

  games: [
    {
      id: 'C2-gapfill-1', type: 'gapfill',
      title: 'Waterleiding — vul aan',
      text:
        'De {{watermeter}} staat onderaan in de meterkast (volgorde water-gas-elektra van onder naar boven). ' +
        'Een {{keerklep}} voorkomt terugstroming naar het distributienet — verplicht bij buitenkraan + wasmachine. ' +
        'Voor warm tapwater zorgt een {{combiketel}} (CW-waarde 1–6) of een {{warmtepompboiler}}. ' +
        'De norm voor drinkwaterinstallaties is {{NEN 1006}}.',
      distractors: ['watermerk', 'overstortventiel', 'cv-ketel', 'NEN 3215'],
    },
    {
      id: 'C2-sort-1', type: 'sort',
      title: 'Warmwater­toestellen',
      categories: ['Gas-gebaseerd', 'Elektrisch / warmtepomp', 'Zonne-energie / warmtenet'],
      items: [
        { label: 'HR-combiketel', category: 'Gas-gebaseerd' },
        { label: 'Gasboiler', category: 'Gas-gebaseerd' },
        { label: 'Close-in boiler', category: 'Elektrisch / warmtepomp' },
        { label: 'Quooker', category: 'Elektrisch / warmtepomp' },
        { label: 'Warmtepompboiler', category: 'Elektrisch / warmtepomp' },
        { label: 'Zonneboiler', category: 'Zonne-energie / warmtenet' },
        { label: 'Warmte-unit warmtenet', category: 'Zonne-energie / warmtenet' },
      ],
    },
    {
      id: 'C2-matching-1', type: 'matching',
      title: 'Risico\'s in waterinstallatie',
      pairs: [
        { left: 'Loden leiding', right: 'Doffe matgrijze kleur, krast met nagel — gezondheidsrisico' },
        { left: 'Legionella', right: 'Bacterie die groeit bij 25–45 °C in stilstaand water' },
        { left: 'Hard water > 9 °DH', right: 'Geeft kalkaanslag — ontharder overwegen' },
        { left: 'Hydrofoor', right: 'Drukverhogings­installatie boven 3e verdieping' },
        { left: 'Doodlopende leiding', right: 'Legionella-risico — vermijden of dagelijks spoelen' },
      ],
    },
  ],
}
