import type { Topic } from '../types/content'

export const C_1_riolering: Topic = {
  code: 'C.1',
  section: 'C',
  title: 'Riolering en sanitair',
  chapterRef: 'Lesboek hoofdstuk 21',
  blurb:
    'Buitenriolering, hoofdriool en waterzuivering; gemengd vs gescheiden stelsel; alternatieven (beerput, septictank, wadi, IBA); onderdelen binnen- en buitenriolering (huisaansluiting, sifons, PVC-hulpstukken); gebreken (stank, afschot, verzakking, condens, verstopping); risico’s van oude gietijzeren/loden/asbest/gresbuizen; binnenleidingen (standleiding, verzamelleiding, ontspanningsleiding) en sanitaire toestellen.',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · Buitenriolering, hoofdriool en waterzuivering',
      toetstermCodes: ['C.1.1'],
      body: `
### Het verloop van afvalwater
Het afvalwater uit een woning doorloopt een keten:

1. **Lozingstoestel** (toilet, wastafel, douche, …) →
2. **Binnenriolering** (aansluit- en verzamelleidingen, standleiding) →
3. **Grondleiding** onder de woning →
4. **Huisaansluitleiding** (van gebouw tot perceelgrens) →
5. **Gemeentelijk hoofdriool** in de straat →
6. **Rioolwaterzuiveringsinstallatie (RWZI)** waar het water in stappen wordt gezuiverd:
   - **Mechanisch** (zandvang, harkrooster) — grove deeltjes
   - **Biologisch** (beluchtingsbassins met micro-organismen die organisch materiaal afbreken)
   - **Chemisch** (fosfaat- en stikstofverwijdering)
7. **Loosing** in oppervlaktewater (rivier, kanaal) volgens vergunning

### Wettelijk kader
Het **Bbl** vraagt voor elk bouwwerk een voorziening om huishoudelijk afvalwater of hemelwater af te voeren, gevolgens **NEN 3215**.

**Aansluitplicht**: wie binnen **40 m** een vuilwaterriool heeft, mag **niet zelf lozen** op bodem of oppervlaktewater — verplicht aansluiten op gemeenteriool. Bij geen riool: lozing op oppervlaktewater met aanvullende eisen Wet milieubeheer.

### Vorm en samenstelling van het buitenriool
- **Hoofdriool**: vaak grote betonbuizen Ø 300–2.000 mm; vroeger eivormig (voor snellere stroming bij lage afvoer), nu standaard rond
- **Huisaansluitleiding**: PVC of HDPE Ø 110–125 mm
- **Afschot** binnenriolering: 5–10 mm/m (vrij verval)
- **Gronddekking**: minimaal 600 mm (vorstvrij)
- **Polderstuk** (poldermof / polderhulpstuk): flexibele aansluiting op het hoofdriool bij kans op grondzetting — vangt zettingsverschillen op tussen woning en straat
      `.trim(),
    },

    {
      heading: '2 · Gemengd vs gescheiden rioleringssysteem',
      toetstermCodes: ['C.1.2'],
      body: `
### Gemengd stelsel
- **Huishoudelijk afvalwater + hemelwater in één leiding**
- Standaard tot ~jaren ’90 in NL
- Bij hevige bui kan capaciteit niet voldoen → **overstort** loost ongezuiverd water op oppervlaktewater (stinkende riooloverstorten)
- Veel oudere wijken hebben nog gemengde stelsels
- Goedkoper in aanleg (één leiding), maar slechter voor milieu

### Gescheiden stelsel
- **Hemelwater apart** (vaak rechtstreeks naar oppervlaktewater)
- **Huishoudelijk afvalwater** via gemeenteriool naar zuivering
- Standaard in nieuwe wijken
- Voordelen:
  - **Minder belasting RWZI** (zuivering werkt efficiënter zonder verdund water)
  - **Geen overstorten** met afvalwater
  - **Hemelwater kan in de grond infiltreren** (grondwater op peil)
- Nadelen: duurder in aanleg (twee leidingen), risico op verkeerde aansluiting (waterstof gaat in hemelwaterriool)

### Verbeterd gescheiden stelsel
Variant: de **eerste minuten regen** (vuilste deel met straatvuil) gaat naar het vuilwaterriool; het schonere vervolg naar oppervlaktewater.

### DUBO en infiltratie
In duurzame nieuwbouw (DUBO) wordt hemelwater zo veel mogelijk:
- Direct in de bodem geïnfiltreerd (greppels, **wadi’s**)
- Of in **regenwaterriolen** apart gehouden
- Of in **huishoudwater-systemen** hergebruikt (toiletspoeling, wasmachine, tuin)

### Begrippen voor het examen
- **VWA** — vuilwaterafvoer (huishoudelijk)
- **DWA** — droogweerafvoer (vuilwater zonder regen)
- **HWA** — hemelwaterafvoer (regenwater)
- **RWA** — regenwaterafvoer (synoniem hwa)
      `.trim(),
      images: [
        {
          src: '/figs/tekeningen/riool-gescheiden-gemengd.svg',
          caption:
            'Gemengd stelsel: vuil- en regenwater in één buis naar de zuivering — bij hoosbui een overstort. Gescheiden stelsel: vuilwater naar de RWZI, regenwater apart naar sloot of infiltratie.',
          source: 'Eigen tekening',
          width: 'full',
        },
      ],
    },

    {
      heading: '3 · Beerput, septictank, wadi en IBA',
      toetstermCodes: ['C.1.3'],
      body: `
Voor woningen **buiten het bereik van het gemeenteriool** (afgelegen woningen, agrarische bebouwing, monumenten) zijn alternatieve systemen nodig.

### Beerput
- **Historisch** systeem (tot ~jaren ’60 nog standaard)
- **Ondergrondse gesloten put** waarin afvalwater wordt verzameld
- Moet **periodiek geleegd** worden (vroeger 'beerschip', nu specialistische bedrijven)
- **Niet meer toegestaan** voor nieuwbouw — oude beerputten worden gevuld of opgegraven bij renovatie
- Komen vaak nog **onaangekondigd onder oude woningen** voor

### Septictank (septic tank / septische put)
- **Ondergrondse gesloten tank** met meerdere compartimenten
- Werkt via **biologische anaerobe afbraak**: bacteriën breken organisch materiaal af; vaste stoffen zinken naar de bodem als slib, vetten drijven boven
- Het gedeeltelijk gezuiverde water vloeit naar:
  - Een **zakput / stapelput** (gemetselde put met open stootvoegen en grof puin eromheen — gezuiverd water zakt in de grond), of
  - **Oppervlaktewater** (vaak via een overstort), of
  - Zeldzaam: het gemeenteriool
- **Belangrijk**: hemelwater en grijs water (douche, wastafel) moeten **buiten de septictank om** — chloor en zeep verstoren de biologische werking
- Vereist **periodieke leegzuiging** van het slib (1× per 2–5 jaar)
- Voor keukenwater apart een **vetvangputje** voor de septictank

### Wadi (Water Afvoer Drainage Infiltratie)
- **Verlaagde groene strook** in een wijk waarin **hemelwater** kan infiltreren
- Functie: regenwater **vasthouden, vertragen en in de grond laten zakken** in plaats van direct naar het riool of oppervlaktewater
- Voordelen:
  - Klimaat-adaptief (vermindert wateroverlast bij hevige buien)
  - Houdt grondwater op peil (anti-verdroging)
  - Verbetert biodiversiteit
  - Reduceert riool-belasting
- **Bovenlaag**: gras of natuurlijke vegetatie; onderlaag: zandig substraat + drainageleiding
- Steeds populairder in moderne nieuwbouwwijken

### IBA (Individuele Behandeling van Afvalwater)
- **Mini-zuiveringsinstallatie op eigen terrein** — alternatief voor septictank bij afgelegen woningen
- Drie klassen volgens **lozingseisen-vergunning**:
  - **IBA klasse 1** — basis (septictank-niveau)
  - **IBA klasse 2** — biologische zuivering (vergelijkbaar met RWZI)
  - **IBA klasse 3** — biologisch + N/P-verwijdering (voor kwetsbaar oppervlaktewater)
- **Werking**: voorbezinking + biologische zuivering (aëroob met blower of beluchtingstrommel) + nabezinking
- Effluent meestal naar oppervlaktewater of bodem
- **Onderhoud**: jaarlijkse controle, eens per ~5 jaar legen
- **Vergunning** verplicht (Waterschap)

### Vergelijking
| Systeem | Onderhoud | Modern toegestaan | Toepassing |
|---|---|---|---|
| Beerput | leeghalen | nee, alleen bestaand | historisch |
| Septictank | leeghalen 1× / 2–5 j | beperkt | afgelegen, geen riool |
| Wadi | maaien | ja | hemelwater in wijk |
| IBA klasse 1–3 | jaarlijks + 5-jaarlijks legen | ja | individuele woning zonder riool |
      `.trim(),
    },

    {
      heading: '4 · Onderdelen van binnen- en buitenriolering',
      toetstermCodes: ['C.1.4', 'C.1.6'],
      body: `
### Begrippen binnenriolering (NEN 3215)
- **Aansluitleiding** — leiding voor één lozingstoestel
- **Verzamelleiding** — liggende leiding (helling < 45°) die meerdere aansluitleidingen samenvoegt
- **Standleiding** — verticale leiding (helling > 45°) door meerdere verdiepingen
- **Grondleiding** — onder de beganegrondvloer in de kruipruimte
- **Huisaansluitleiding** — van gebouw tot perceelgrens (overgang naar gemeenteriool)
- **Ontspanningsleiding (beluchtingsleiding)** — de standleiding doorgetrokken tot **boven het dak**; voorkomt over-/onderdruk en het 'leeghevelen' van sifons. Min. 6 m van ventilatieopeningen
- **Vereveningsleiding** — brengt drukevenwicht tussen twee leidingen
- **Hemelwaterafvoerleiding** — alleen voor regen-/smeltwater van het dak

### Hulpstukken (PVC, gelijmd of met rubbermanchet)
- **Bocht 90° en 45°** — voor richtingverandering. **Regel**: liggende leiding nooit 90° bocht — altijd twee 45°-bochten (voorkomt verstopping)
- **Y-stuk en T-stuk** (enkel of dubbel rechtspruitstuk) — samenkomen van leidingen
- **Voetbocht** — onderaan een standleiding, leidt verticale stroming naar horizontaal
- **Enkel/dubbel schuin spruitstuk** — voor combinatie bij verzamelleidingen
- **Verloopstuk** — voor diameteroverlap (bv. 110 → 125 mm)
- **Ontstoppingsstuk (O.S.)** — afsluitbaar T-stuk met schroef- of klemdeksel, voor inspectie en ontstopping
- **Polderstuk (polderhulpstuk type A en B)** — flexibele aansluiting bij **kans op grondzetting** (huisaansluiting op hoofdriool in slappe grond)
- **Sifon / stankafsluiter / zwanenhals** — bocht met waterslot tegen stank
- **Vloersifon (doucheplug)** — voor afvoer in vloeren waar geen bocht past

### Plaats van het ontstoppingsstuk
Op de **perceelgrens** (of vlak ervoor) komt een **ontstoppingsstuk** of **controleputje**. Bij verstopping kan de loodgieter dan vaststellen of het probleem **op eigen terrein** (verstopping eigenaar) of in de **gemeentelijke leiding** (gemeente) zit.

### Ontspanningsleiding op het dak
- De **standleiding** wordt **boven het laatste lozingstoestel doorgetrokken tot boven het dak**
- Daar heet hij **ontspanningsleiding**
- Voorkomt onderdruk in het systeem (zuig-effect bij grote watervallen) en overdruk (borrelend geluid)
- Minimaal **6 m verwijderd van mechanische ventilatie-openingen** (anders zuigt de afzuiging stank naar binnen)
- Bij renovatie waar dit niet mogelijk is: **antivide / beluchter** (klein ventiel dat alleen lucht naar binnen laat bij drukverlaging) — vernikkeld koper of plastic, vaak in de sifon zelf ingebouwd

### Leidingmaterialen
**Buitenriolering**:
- **Betonbuizen** Ø 100–2.000 mm met rubberring tussen mof- en spie-eind
- **PVC** standaard voor moderne huisaansluitingen (glad of geribd, rubberverbindingen)
- **HDPE** voor persleidingen (lange afstanden of beperkte hoeveelheden)
- **Zink en Loro-pijp** (verzinkt staal) alleen voor hwa

**Binnenriolering**:
- **PVC** standaard — tot 70 °C; lijm- of rubberringverbinding
- **PE / HDPE** — bestand tegen hoger (90+ °C), zwart, slagvaster; verbinding via **spiegellas** of **elektrosteekmof**
- **PP-copolymeer** — moderne alternatief, recyclebaar
- **Verzinkt staal** — voor heet afvalwater > 100 °C in utiliteit
- **Niet meer toegestaan in nieuwbouw**: asbestcement, gres, zink, lood (zie sectie 6)
      `.trim(),
      images: [
        {
          src: '/figs/tekeningen/sifon-stankafsluiter.svg',
          caption:
            'De sifon (stankafsluiter / zwanenhals): in de bocht blijft een waterslot van ±50–60 mm staan. Dat houdt rioollucht en ongedierte tegen, terwijl afvalwater er wél doorheen kan.',
          source: 'Eigen tekening',
          width: 'lg',
        },
      ],
    },

    {
      heading: '5 · Gebreken in binnen- en buitenriolering',
      toetstermCodes: ['C.1.5'],
      body: `
B.12.5 / C.1.5 vraagt om typische gebreken te benoemen en te herkennen. Vijf hoofdgebreken:

### Stankoverlast
**Oorzaak**:
- **Sifon leeg gestaan** of leeg gehevel (door onderdruk in standleiding)
- **Defecte ontspanningsleiding** of beluchter
- **Lekkage** in afvoer (riool­gas ontsnapt)
- **Verstopping** met gisting (organische rotting in stilstaand water)

**Aanpak**:
- Sifon onder loopen bijvullen
- Ontspanningsleiding controleren / antivide bijplaatsen
- Lekkage opsporen (met rookproef)

### Geluidsoverlast
**Oorzaak**:
- **Buisbeugels te krap of metaal-op-metaal** (geen rubber-tussenstuk)
- **Te veel druk** in standleiding (onvoldoende beluchting)
- **Borrelende toilet** = onderdruk in systeem
- **Vrije val** zonder geluiddempende voorzieningen

**Aanpak**:
- Buisbeugels met rubber inlage (anti-vibratie)
- Standleiding inpakken met geluidisolerend materiaal
- PE in plaats van PVC (PE absorbeert geluid beter)

### Onvoldoende afschot
**Bbl-eis**: 5–10 mm/m (1:200 tot 1:100) voor binnenriolering. Te flauw → langzame stroming, sedimentatie van vaste stoffen → verstopping. Te steil → water loopt sneller dan vaste stoffen → ook risico op verstopping.

**Oorzaken**:
- **Verzakking** van de buis (zie volgend punt)
- Foutieve installatie
- Latere wijzigingen aan de constructie

### Verzakking
**Oorzaak**:
- Slappe grond zonder ondersteuning
- Lek waar grond onder de buis wegspoelt
- Belasting boven de buis (zwaar voertuig op de buisleiding)

**Gevolg**: lokaal afschot wijzigt → **tegenschot** (waterspiegel die andere kant op loopt) → blijvende verstopping in dat punt.

**Aanpak**:
- **Onderheien** van de buis met betonblokken bij aanleg in slappe grond
- **Polderhulpstuk** op aansluitingen om verschilzettingen op te vangen
- Vervangen van het verzakte segment

### Condens
**Oorzaak**: in een **slecht geïsoleerde buis** bij langs een koude gevel of in een kruipruimte vormt zich condens aan de buitenkant — vocht druppelt op vloer of plafond.

**Aanpak**:
- Buis isoleren met **wapeningsbuis-isolatie** (steenwol of PE-schuim met aluminium-folie)
- Vermijden van koude ruimten

### Verstopping
**Oorzaken**:
- Hygiënische producten in toilet (vochtdoekjes!), keukenvet, te grote stukken voedsel
- Wortelingroei door scheuren in oude leidingen (vooral gres, beton)
- Verzakking met tegenschot
- 90°-bocht in horizontale leiding (verboden — twee 45° gebruiken)
- Sedimentatie door te weinig afschot

**Aanpak**:
- **Ontstopping**: chemisch (gootsteenontstopper), mechanisch (veer, hogedrukspuit), of door uitgraven en vervangen
- **Inspectie**: cameraonderzoek door de afvoer (typisch ~€ 200–400)
- **Pijp-relining** als vervanging zonder graven: nieuwe kunststofbuis in oude geïnstalleerd
      `.trim(),
    },

    {
      heading: '6 · Risico’s van oude buismaterialen',
      toetstermCodes: ['C.1.7'],
      body: `
In oudere woningen (vóór ~1985) komen leidingmaterialen voor die **niet meer toegestaan** zijn maar nog steeds in gebruik kunnen zijn. Risico's:

### Gietijzer
- **Periode**: tot ~1960, klassieke afvoerbuizen
- **Aanwezig**: rond standleidingen, in oudere monumentale panden, in industrie en kantoren
- **Risico's**:
  - **Roest** van binnenuit — de buis wordt dunner, kan barsten
  - **Aansluitingen lekken** (oude loden verbindingen, asfaltmoffenkit)
  - **Vrij zwaar** — bij verzakking grote belasting op aansluitingen
  - Onderhoud: vervangen door PVC of PE bij renovatie

### Lood
- **Periode**: tot ~1960 standaard voor afvoerleidingen onder closet of wastafel
- **Aanwezig**: vooral in vooroorlogse woningen
- **Risico's**:
  - **Lood-vergiftiging** als de leiding ook drinkwater raakt (zie B.2 Waterleiding) — niet voor afvoer een hoofdprobleem, maar wel bij hergebruik van panden
  - **Kruip** — lood rekt traag onder eigen gewicht, dunne wanddikten kunnen scheuren (vergelijk B.10.5 / B.8.2)
  - **Aantasting door kalk** in mortels en zuur water
  - **Aansluitingen oplijmen onmogelijk** — alleen met loodverbinding
  - Verwerking: **specialist** vereist; lood is **gevaarlijk afval** (sloperij met certificaat)

### Asbestcement
- **Periode**: ~1945 tot 1983 voor rioleringsbuizen, dakgoten, golfplaten
- **Aanwezig**: in oudere schuren, dakgoten op vooroorlogse panden, soms ondergrondse riolering
- **Risico's**:
  - **Asbestvezels** kunnen vrijkomen bij beschadiging, boring, slijping → ernstig gezondheidsrisico (mesothelioom, asbestose, longkanker)
  - **Asbestinventarisatie verplicht** bij sloop/verbouwing van panden vóór 1994
  - **Sloop alleen door gespecialiseerd bedrijf** onder omgevingsvergunning
  - **Visueel herkenbaar** als grijs cementachtig materiaal met vezelige structuur in breukvlak
- Bij verkoop van een woning vóór 1994: vaak een asbest-rapportage in het taxatiedossier

### Gresbuizen (keramische rioolbuizen)
- **Periode**: van ca. 1850 tot eind 20e eeuw
- **Aanwezig**: in oudere stadsdelen voor gemeentelijk en huisriool
- **Risico's**:
  - **Bros** — kraakt onder belasting of bij verzakking
  - **Verbindingen met asfaltmoffenkit** kunnen scheuren door beweging
  - **Wortelingroei** door scheuren in voegen — typische verstopping in oudere wijken
  - **Niet zelf te lijmen** — bij reparatie meestal het hele segment vervangen
  - Onderhoud: cameraonderzoek + relining of vervangen door PVC

### Vuistregel voor de makelaar
Bij **woninginspecties** vraagt de aankoper aandacht voor:
- **Bouwjaar < 1960**: kans op lood en gietijzer
- **Bouwjaar 1945–1983**: kans op asbest
- **Bouwjaar < 1990**: kans op gres-rioolbuizen in straat (gemeente verantwoordelijk) en op eigen terrein (eigenaar)
- **Sondering kosten** vragen bij verdenking; meestal nuttig om dit in het taxatie-/inspectierapport te benoemen
      `.trim(),
    },

    {
      heading: '7 · Sanitaire toestellen',
      toetstermCodes: ['C.1.8'],
      body: `
B.1.8 vraagt om de **sanitaire toestellen (ontvangtoestellen)** te kennen die op het rioleringssysteem worden aangesloten, plus de hulp- en aansluitstukken.

### Toilet / closetpot
Drie hoofdtypen genormaliseerd:
- **PK (Pot-Klosset)** — schotelcloset/uitspoelcloset: fecaliën liggen op een schaal tot doorspoeling — verouderd
- **AO (Achter-Onder)** — neerspoelcloset met **achteruitlaat onder** — standaard wandtoilet
- **AS (Achter-Stand)** — variant met **horizontale achteruitlaat** — voor hangtoilet of muur-aansluiting
- **Hangtoilet** — pot tegen de achterwand met **reservoir achter een voorzetwand** — makkelijker schoonmaken, modern

**Waterslot**: 50 mm (groter dan andere toestellen), met **spoelrand** die water rondom verdeelt.
**Aansluiting**: Ø 110 mm afvoer in vloer of wand. **KIWA-keurmerk** verplicht.
**Geluidsniveau** doorspoelen ≤ **30 dBA** in aansluitende verblijfsruimte (Bbl).

**Sanibroyeur**: closetpot met motortje dat fecaliën fijnmaalt — afvoer via dunne (Ø 45 mm) leiding. Voor verbouwingen waar geen volle Ø 110 mm afvoer geplaatst kan worden.

### Douche
- **Douchebak** (gebakken klei, keramiek, kunststof) of **inloopdouche** (zonder bak, vloer afwaterend)
- Afvoer via **doucheplug / vloersifon** Ø 40 mm — waterslot 30 mm
- Combineerbaar met **wtw-douche** (zie volgende sectie)

### Ligbad
- Materiaal: gebakken klei, geëmailleerd plaatstaal of kunststof (acryl, polyester met glasvezelversterking)
- **Overloop** in de bak (boven het normale waterniveau) die in de afvoer mondt
- Afvoer Ø 40–50 mm — waterslot 30 mm

### Wastafel / fontein
- **Wastafel** (porselein, verglaasd) op consoles of een onderbouwmeubel
- **Overloop** boven in de bak
- Afvoer via **bekersifon** Ø 32–40 mm — waterslot 30 mm
- **Fontein** = kleine wastafel in toilet of gang
- Hulpstukken: **gummi-ring** in afvoer, **klemring** voor aansluiting op sifon

### Wasmachine en wasdroger (condens-type)
- **Wasmachine**: afvoer via een **standpijp** of een **dubbele tapaansluiting**; ø 32–40 mm
- **Condensdroger**: condensbakje wordt zelf geleegd, of via aparte afvoer
- **Warmtepompdroger**: condensafvoer naar dichtstbijzijnde afvoer of zelf-leegbak

### Vaatwasser
- Afvoer via **vaatwasser-T-stuk** op de afvoer van de gootsteen, **boven de sifon**
- Waterslot in eigen sifon van de gootsteen

### Cv-ketel
- **HR-ketel** condensaat naar afvoer (zuur — vereist neutralisator?)
- Modern: rechtstreeks op **standleiding** of dichtstbijzijnde afvoer
- Niet via gootsteen (chemisch agressief tegen het keukenblad)

### Hulp- en aansluitstukken
- **Sifon / waterslot** — verplicht onder elk toestel (minimaal 30 mm, 50 mm bij closet)
- **Vloersifon / doucheplug** — waterslot voor vloerafvoer
- **Aansluitslang / gummi-ring** — verbinding toestel met afvoer
- **Standpijp** (voor wasmachine) — verticale buis waarin de wasslang hangt; voldoende lengte voor het beluchten
- **Spoelreservoir / spoelknop** — voor closet

### Doublette (balkonafvoer)
Voor hemelwater door **balkonvloeren**: een doublette is een afvoerpunt met rondom rooster per verdieping — verzamelt regenwater van balkons in een gemeenschappelijke afvoer.
      `.trim(),
    },

    {
      heading: '8 · WTW-douche: warmteterugwinning uit douchewater',
      toetstermCodes: ['C.1.9'],
      body: `
### Wat is een WTW-douche?
Een **WTW-douche (Warmte-Terug-Winning douche)** is een **warmtewisselaar in de afvoer van de douche** die de warmte uit het wegvloeiende douchewater (~35–40 °C) gebruikt om het inkomende koude leidingwater (~10 °C) **voor te verwarmen** voordat het de combiketel of geiser bereikt.

### Functie
- **Energiebesparing**: tot **40 % minder energie** nodig voor warm douchewater
- **Comfort**: bij gelijktijdig douchen en andere warmwater-aftap minder dipsen in warmte
- **CO₂-reductie**: kernonderdeel van energie­zuinige nieuwbouw (BENG-3 score verhoogt)
- **Kosten**: terugverdientijd 3–7 jaar bij dagelijks doucheverbruik

### Hoe werkt het?
1. Warm douchewater **vloeit door een verticaal geplaatste afvoer** (een koperen of RVS pijp met spiraalvormige buitenwand)
2. Door **stratificatie** (zwaartekracht-laagvorming) loopt het warme water langs de **binnenwand** in een dunne film
3. Rond de afvoerbuis is een **tweede pijp gewikkeld** waar **koud leidingwater** doorheen stroomt
4. De **warmte gaat door de pijpwand** van het wegvloeiende douchewater naar het inkomende leidingwater
5. Het voorverwarmde leidingwater (~25 °C) gaat naar:
   - **Combiketel** (voor verdere opwarming) en **koudwaterzijde mengkraan** (een deel)

### Vormen van WTW-douche
- **Verticale buis** in de standleiding (vaak in een kasje of meterkast verwerkt): hoogste rendement (~60 %)
- **Liggende variant** onder de douchevloer: lagere rendement maar te installeren zonder verticale ruimte
- **Buisvormige spiraal** (Q-blue, Hei-Tech) — wisselbare modules

### Eigenschappen
- **Rendement**: 25–65 % warmteoverdracht
- **Werkt alleen tijdens gelijktijdig douchen en warmwater-aftap** (continue stroming aan beide zijden)
- **Geen elektriciteit** nodig — passief systeem
- **Geen onderhoud** behalve af en toe controle op verstopping
- **Geen ruimteverlies** wanneer in de standleiding geïntegreerd
- **Levensduur** > 30 jaar (passief)

### Aanvraag in nieuwbouw
- Een WTW-douche telt **mee in de BENG-berekening** (energieprestatie) en het **energielabel**
- In moderne energiezuinige woningen (NOM, BENG 0) is een WTW-douche vrijwel standaard
- **Bbl-eis** niet expliciet, maar wel onderdeel van de energieprestatie-berekening

### Niet te verwarren met
- **Balansventilatie met WTW** — warmteterugwinning uit afgevoerde ventilatie­lucht (luchtwisselaar in het ventilatiesysteem, **niet** in de douche-afvoer)
- **Bodemwarmtewisselaar** of **warmtepomp** — heel andere systemen voor woningverwarming
      `.trim(),
    },
  ],

  toetstermen: [
    {
      code: 'C.1.1',
      text: 'Beschrijft de functie, vorm en samenstelling van het verloop van buitenriolering, hoofdriool en waterzuivering.',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'C.1.2',
      text: 'Benoemt de verschillen tussen een gescheiden en een gemengd rioleringssysteem.',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'C.1.3',
      text: 'Benoemt de rioleringssystemen beerput, septictank, wadi en IBA.',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'C.1.4',
      text: 'Herkent de onderdelen van de binnen- en buitenriolering: huisaansluiting (polderstuk), ontstoppingsstuk, sifons, diverse PVC-hulpstukken (gelijmd of met rubbermanchet).',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'C.1.5',
      text: 'Benoemt de veel voorkomende gebreken van binnen- en buitenriolering: stank- en geluidsoverlast, afschot, verzakking, condens, verstopping.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
    {
      code: 'C.1.6',
      text: 'Benoemt de verschillende binnenleidingen in een gebouw: verzamelleiding, ontspanningsleiding, standleiding.',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'C.1.7',
      text: "Licht de risico's toe van oude gietijzeren, loden, asbest- of gresbuizen van een bestaand rioleringssysteem.",
      niveau: 'BT2',
      bloom: 'Begrip',
    },
    {
      code: 'C.1.8',
      text: 'Benoemt de diverse soorten sanitaire toestellen (ontvangtoestellen): toilet (PK, AO, AS en hangtoilet), douche, ligbad, wastafel, fontein, wasmachine, wasdroger, vaatwasser en cv-ketel — inclusief hulp- en aansluitstukken.',
      niveau: 'BT2',
      bloom: 'Kennis',
      metDrawing: true,
    },
    {
      code: 'C.1.9',
      text: 'Licht de functie en eigenschappen van een wtw-douche-installatie toe.',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
  ],

  questions: [
    // C.1.1 (3)
    {
      id: 'C1-1-a',
      toetstermCode: 'C.1.1',
      type: 'mc',
      prompt: 'Wat is het verloop van huishoudelijk afvalwater van toilet tot zuiveringsinstallatie?',
      options: [
        'Toilet → standleiding → grondleiding → huisaansluitleiding → gemeenteriool → RWZI',
        'Toilet → drainage → infiltratie → grondwater',
        'Toilet → septictank → oppervlaktewater (altijd)',
        'Toilet → kruipruimte → bodem',
      ],
      correctIndex: 0,
      explanation:
        'Standaard verloop: toilet → aansluitleiding → verzamelleiding → standleiding (verticaal) → grondleiding (onder de woning) → huisaansluitleiding (tot perceelgrens) → gemeenteriool → rioolwaterzuiveringsinstallatie (RWZI) → oppervlaktewater. Septictank en infiltratie zijn alternatieven voor woningen zonder gemeenteriool.',
    },
    {
      id: 'C1-1-b',
      toetstermCode: 'C.1.1',
      type: 'mc',
      prompt: 'Wat is de **aansluitplicht** op het gemeenteriool volgens het Bbl?',
      options: [
        'Iedereen moet aansluiten ongeacht afstand',
        'Wie binnen 40 m een vuilwaterriool heeft mag niet zelf lozen — verplicht aansluiten',
        'Aansluitplicht alleen in steden, niet op het platteland',
        'Alleen woningen na 1990 hebben aansluitplicht',
      ],
      correctIndex: 1,
      explanation:
        'Bbl/Wet milieubeheer: bij een vuilwaterriool binnen 40 m verplichte aansluiting. Wie verder af woont, mag onder voorwaarden lozen op oppervlaktewater of via IBA — daarbij gelden aanvullende milieueisen.',
    },
    {
      id: 'C1-1-c',
      toetstermCode: 'C.1.1',
      type: 'mc',
      prompt: 'Bij een **RWZI (rioolwaterzuiveringsinstallatie)** is de zuivering opgebouwd uit drie stappen. Welke?',
      options: [
        'Filtreren → chloreren → verdampen',
        'Mechanisch (rooster, zandvang) → biologisch (bacteriën in beluchtingsbassin) → chemisch (P/N-verwijdering)',
        'Centrifugeren → verbranden → opslaan',
        'Pompen → verwarmen → koelen',
      ],
      correctIndex: 1,
      explanation:
        'Standaard RWZI: (1) mechanisch — grove deeltjes via harkrooster en zandvang; (2) biologisch — micro-organismen breken organisch materiaal af in beluchtingsbassin; (3) chemisch — verwijdering van fosfaten en stikstoffen. Effluent gaat naar oppervlaktewater volgens vergunning.',
    },

    // C.1.2 (3)
    {
      id: 'C1-2-a',
      toetstermCode: 'C.1.2',
      type: 'mc',
      prompt: 'Wat is een **gescheiden rioleringssysteem**?',
      options: [
        'Hemelwater en huishoudelijk afvalwater in één leiding',
        'Hemelwater wordt apart afgevoerd (naar oppervlaktewater of infiltratie), huishoudelijk afvalwater apart naar zuivering',
        'Vuilwater en spoelwater apart',
        'Mannelijk en vrouwelijk afvalwater apart',
      ],
      correctIndex: 1,
      explanation:
        'Gescheiden stelsel: hwa en vwa in aparte leidingen. Voordeel: RWZI krijgt geen verdund afvalwater (efficiënter), geen overstorten bij hevige bui, hemelwater kan infiltreren. Standaard in moderne nieuwbouw. Gemengd stelsel is de oudere variant met één leiding.',
    },
    {
      id: 'C1-2-b',
      toetstermCode: 'C.1.2',
      type: 'mc',
      prompt: 'Wat is het belangrijkste **nadeel van een gemengd stelsel**?',
      options: [
        'Het is duurder in aanleg dan een gescheiden stelsel',
        'Bij hevige bui kan de capaciteit niet voldoen → ongezuiverd afvalwater stroomt via overstorten op oppervlaktewater',
        'Het werkt alleen in stedelijk gebied',
        'Het vereist extra pompinstallaties',
      ],
      correctIndex: 1,
      explanation:
        'Bij gemengd stelsel komt al het water (afval + regen) in dezelfde leiding. Bij hevige bui overschrijdt het volume de capaciteit van het riool en de RWZI; overtollig water (vermengd met afvalwater) stroomt dan via **riooloverstorten** op oppervlaktewater — milieubelastend en stinkend. Daarom hebben moderne wijken gescheiden stelsels.',
    },
    {
      id: 'C1-2-c',
      toetstermCode: 'C.1.2',
      type: 'mc',
      prompt: 'Waarvoor staat **VWA** in de rioleringsterminologie?',
      options: [
        'Vrije Wateropvang Afvalstoffen',
        'Vuilwaterafvoer — voor huishoudelijk afvalwater',
        'Voorlopige Water Aansluiting',
        'Vorstgevoelige Wateraanvoer',
      ],
      correctIndex: 1,
      explanation:
        'VWA = vuilwaterafvoer (huishoudelijk afvalwater). HWA = hemelwaterafvoer. DWA = droogweerafvoer (vwa als het niet regent). Begrippen die op rioleringstekeningen voorkomen.',
    },

    // C.1.3 (4)
    {
      id: 'C1-3-a',
      toetstermCode: 'C.1.3',
      type: 'mc',
      prompt: 'Wat is een **wadi**?',
      options: [
        'Een ondergrondse opslagtank voor afvalwater',
        'Een verlaagde groene strook waarin hemelwater kan infiltreren — vertraagt afvoer en houdt grondwater op peil',
        'Een chemische installatie voor zuivering',
        'Een speciaal type septictank met biologische zuivering',
      ],
      correctIndex: 1,
      explanation:
        'Een wadi (Water Afvoer Drainage Infiltratie) is een verlaagde groene strook waar hemelwater in vlot infiltreert. Houdt grondwater op peil, voorkomt wateroverlast bij hevige buien, biodiversiteit-bonus. Standaard in moderne klimaat-adaptieve wijken.',
    },
    {
      id: 'C1-3-b',
      toetstermCode: 'C.1.3',
      type: 'mc',
      prompt: 'Wat is een **IBA-installatie**?',
      options: [
        'Individuele Behandeling van Afvalwater — een mini-zuivering op eigen terrein voor woningen zonder gemeenteriool, drie klassen oplopend in zuiveringsgraad',
        'Industriële Bedrijfs-Afvoer voor fabrieken',
        'Inwendige Buitenstaande Afvalcontainer',
        'International Building Authority',
      ],
      correctIndex: 0,
      explanation:
        'IBA = Individuele Behandeling van Afvalwater: een mini-RWZI op eigen perceel voor woningen buiten het bereik van het gemeenteriool. Klasse 1 = basis (septictank-niveau), klasse 2 = biologische zuivering (RWZI-niveau), klasse 3 = + N/P-verwijdering voor kwetsbaar oppervlaktewater. Verplicht een vergunning van het waterschap.',
    },
    {
      id: 'C1-3-c',
      toetstermCode: 'C.1.3',
      type: 'mc',
      prompt: 'Bij een woning op een **septictank**: waar moeten hemelwater en grijs water (douche/wastafel) heen?',
      options: [
        'Door de septictank — zorgt voor verdunning',
        'Buiten de septictank om — chloor en zeep verstoren de biologische werking van de bacteriën',
        'In aparte beerput',
        'Naar de RWZI',
      ],
      correctIndex: 1,
      explanation:
        'In een septictank werken anaerobe bacteriën die organisch materiaal afbreken. Zeep en chloor uit douche-, was- en spoelwater verstoren of doden deze bacteriën. Daarom moeten grijs water en hemelwater **buiten de septictank om** worden afgevoerd (rechtstreeks naar infiltratie, oppervlaktewater of stapelput).',
    },
    {
      id: 'C1-3-d',
      toetstermCode: 'C.1.3',
      type: 'mc',
      prompt: 'Een **beerput** is:',
      options: [
        'Een moderne biologische zuiveringsinstallatie',
        'Een ondergrondse gesloten put waarin afvalwater werd verzameld — historisch systeem, niet meer toegestaan voor nieuwbouw',
        'Een type wadi voor industriële toepassing',
        'Een synoniem voor septictank',
      ],
      correctIndex: 1,
      explanation:
        'Een beerput is een gesloten ondergrondse put die periodiek geleegd moet worden — historisch tot ~jaren ’60. Niet meer toegestaan voor nieuwbouw. Bij verbouwing van oude woningen worden ze opgegraven of gevuld. Septictanks zijn modernere alternatieven met biologische zuivering.',
    },

    // C.1.4 (4)
    {
      id: 'C1-4-a',
      toetstermCode: 'C.1.4',
      type: 'mc',
      prompt: 'Wat is een **polderstuk** in een rioleringssysteem?',
      options: [
        'Een ontstoppingsstuk bij de perceelgrens',
        'Een flexibele aansluiting met rubberring tussen huisaansluiting en hoofdriool — vangt zettingsverschillen op tussen woning en straat',
        'Een T-stuk dat polderwater scheidt van rioolwater',
        'Het laatste hulpstuk vóór de gemeenteriolering',
      ],
      correctIndex: 1,
      explanation:
        'Een polderstuk (poldermof, polderhulpstuk) is een flexibele aansluiting van de huisaansluitleiding op het hoofdriool. Door de rubber afdichting kan het verschil-zetting tussen woning en straat opvangen — vermijdt scheuren in de aansluiting bij verzakking van de slappe NL-grond.',
    },
    {
      id: 'C1-4-b',
      toetstermCode: 'C.1.4',
      type: 'mc',
      prompt:
        'Waarom mag in een liggende rioleringsleiding **geen 90°-bocht** worden geplaatst?',
      options: [
        'Het kost te veel materiaal',
        'Een 90°-bocht remt vaste stoffen af en veroorzaakt verstopping; daarom altijd twee 45°-bochten voor een vloeiend beloop',
        'Het is alleen een esthetische regel',
        '90°-bochten lekken altijd na verloop van tijd',
      ],
      correctIndex: 1,
      explanation:
        'Een 90°-bocht in een liggende leiding remt vaste stoffen af; sediment hoopt op → verstopping. Standaard: twee 45°-bochten (eventueel met een tussenstuk) voor een vloeiend stroomprofiel. In verticale standleidingen mag wel een 90° voetbocht onderaan.',
    },
    {
      id: 'C1-4-c',
      toetstermCode: 'C.1.4',
      type: 'mc',
      prompt:
        'Wat is de functie van een **ontstoppingsstuk** op of nabij de perceelgrens?',
      options: [
        'Het verzamelt vetten uit keukenwater',
        'Bij verstopping kan vastgesteld worden of het probleem op eigen terrein of in de gemeenteleiding zit — schroef- of klemdeksel open en inspectie/ontstopping mogelijk',
        'Het scheidt regen- en huishoudelijk afvalwater',
        'Het meet het waterverbruik',
      ],
      correctIndex: 1,
      explanation:
        'Een ontstoppingsstuk (O.S.) is een afsluitbaar inspectiepunt op of vlak voor de perceelgrens. Bij verstopping kan de loodgieter het deksel openen en kijken/spoelen — zo wordt duidelijk of het probleem op eigen terrein zit (eigenaar) of in de gemeente­leiding (gemeente).',
    },
    {
      id: 'C1-4-d',
      toetstermCode: 'C.1.4',
      type: 'mc',
      prompt:
        'Welk minimale waterslot moet de **sifon onder een closetpot** hebben?',
      options: ['10 mm', '30 mm', '50 mm', '100 mm'],
      correctIndex: 2,
      explanation:
        'Een closetpot heeft minimaal **50 mm waterslot** — meer dan een normale sifon (30 mm), omdat de stankbelasting groter is en het waterslot bij doorspoelen extra wordt belast (turbulentie + hevelwerking). Bij andere toestellen (wastafel, douche) is 30 mm voldoende.',
    },

    // C.1.5 (3)
    {
      id: 'C1-5-a',
      toetstermCode: 'C.1.5',
      type: 'mc',
      prompt:
        'Stankoverlast in een woning ondanks een schijnbaar werkend riool — een veelvoorkomende oorzaak is:',
      options: [
        'Te koude leidingen',
        'Sifon leeg gehevel door onderdruk in de standleiding (defecte ontspanningsleiding); of een sifon die door verdamping leeg is gestaan',
        'Te warm afvalwater',
        'Verkeerde afschotrichting van de standleiding',
      ],
      correctIndex: 1,
      explanation:
        'Stank ontstaat doordat een sifon geen waterslot meer heeft. Oorzaken: (1) leeg gehevel door onderdruk in standleiding (defecte ontspanningsleiding of antivide); (2) verdamping bij lang niet-gebruikte toiletten; (3) lekkage in afvoersysteem. Aanpak: water bijgieten + ontspanningsleiding/antivide controleren.',
    },
    {
      id: 'C1-5-b',
      toetstermCode: 'C.1.5',
      type: 'mc',
      prompt:
        '**Verzakking** van een buitenriolerings­leiding in slappe grond geeft als gevolg:',
      options: [
        'Verhoogde druk in de standleiding',
        'Lokaal omgekeerd afschot (tegenschot) → blijvende verstopping in dat punt',
        'Stank door beluchtingsproblemen',
        'Buisbreuk binnen 1 maand',
      ],
      correctIndex: 1,
      explanation:
        'Bij verzakking ontstaat een **doorhang** in de buis. Het laagste punt vult zich met water en sediment — de stroming wordt geremd, verstopping wordt structureel. Voorkomen: buis onderheien bij aanleg in slappe grond + polderhulpstukken op aansluitingen.',
    },
    {
      id: 'C1-5-c',
      toetstermCode: 'C.1.5',
      type: 'mc',
      prompt:
        'Wat is een normaal **afschot** voor een binnenriolerings-verzamelleiding?',
      options: ['1 mm/m', '5–10 mm/m', '50 mm/m', '100 mm/m'],
      correctIndex: 1,
      explanation:
        'Norm: 5–10 mm/m (1:200 tot 1:100). Te flauw → sedimentatie en verstopping. Te steil → water loopt sneller dan vaste stoffen → ook verstopping. Optimum: voldoende snelheid om vaste stof mee te voeren maar genoeg watertijd om te draineren.',
    },

    // C.1.6 (2)
    {
      id: 'C1-6-a',
      toetstermCode: 'C.1.6',
      type: 'mc',
      prompt:
        'Wat is een **standleiding**?',
      options: [
        'Een liggende leiding onder de beganegrondvloer',
        'Een verticale leiding (helling > 45°) die door meerdere verdiepingen loopt',
        'De leiding van een lozingstoestel naar de verzamelleiding',
        'De leiding van perceelgrens naar gemeenteriool',
      ],
      correctIndex: 1,
      explanation:
        'Standleiding = verticale leiding (helling > 45°) die afvalwater van meerdere verdiepingen afvoert. Onderaan met voetbocht naar de grondleiding; bovenaan doorgetrokken tot boven het dak (= ontspanningsleiding) voor be- en ontluchting.',
    },
    {
      id: 'C1-6-b',
      toetstermCode: 'C.1.6',
      type: 'mc',
      prompt:
        'De **ontspanningsleiding** komt boven het dak uit. Wat is de minimumafstand tot ventilatieopeningen?',
      options: ['1 m', '3 m', '6 m', '12 m'],
      correctIndex: 2,
      explanation:
        'Bbl/NEN 3215: minimaal **6 m** tussen de uitmonding van de ontspanningsleiding en mechanische ventilatieopeningen. Anders zou de ventilatie de stank uit het rioolsysteem zuigen en in de woning blazen. Bij renovatie waar dit lastig is: antivide / beluchter als alternatief.',
    },

    // C.1.7 (3)
    {
      id: 'C1-7-a',
      toetstermCode: 'C.1.7',
      type: 'mc',
      prompt:
        'Bij inspectie van een huis uit **1955** is er een oude **gietijzeren standleiding** zichtbaar. Wat is het primaire risico?',
      options: [
        'Gietijzer is brandbaar',
        'Roest van binnenuit — de buis wordt dunner en kan barsten; ook lekken bij oude loden verbindingen',
        'Gietijzer geleidt elektriciteit en is daardoor gevaarlijk',
        'Gietijzer geeft radongas af',
      ],
      correctIndex: 1,
      explanation:
        'Gietijzeren afvoerbuizen roesten van binnenuit (afvalwater is corrosief). Wanddikte neemt af, buis kan op den duur scheuren of lekken. Oude loden verbindingen versterken het risico op lekkage. Bij renovatie standaard vervangen door PVC of PE.',
    },
    {
      id: 'C1-7-b',
      toetstermCode: 'C.1.7',
      type: 'mc',
      prompt:
        'Bij een woning uit **1970** worden in de buitenwand asbestcementen golfplaten en een asbest-cement-rioolbuis aangetroffen. Welke handeling is verplicht?',
      options: [
        'Eigenaar mag deze zelf demonteren',
        'Asbestinventarisatie en sloop door een gespecialiseerd bedrijf onder omgevingsvergunning — asbestvezels zijn ernstig schadelijk voor de longen',
        'Niets — asbestcement is veilig zolang niet gebroken',
        'Vervangen door een asbestcement-variant zonder vezels',
      ],
      correctIndex: 1,
      explanation:
        'Asbestcement bevat asbestvezels die bij beschadiging vrijkomen → ernstige longziekten (mesothelioom, asbestose). Voor panden vóór 1994 is asbestinventarisatie verplicht bij sloop/verbouwing; verwijdering alleen door gespecialiseerd bedrijf met omgevingsvergunning. Eigenaar mag zelf niets demonteren.',
    },
    {
      id: 'C1-7-c',
      toetstermCode: 'C.1.7',
      type: 'mc',
      prompt:
        'In een oudere wijk komen vaak **gresbuizen** voor in de rioleringsleidingen. Wat is het hoofdprobleem?',
      options: [
        'Gresbuizen geleiden elektriciteit',
        'Gresbuizen zijn bros — verbindingen met asfaltmoffenkit kunnen scheuren door beweging, en wortels groeien door scheuren naar binnen (verstopping)',
        'Gresbuizen geven asbestvezels af',
        'Gresbuizen veroorzaken roest in andere materialen',
      ],
      correctIndex: 1,
      explanation:
        'Gresbuizen (keramische rioleringsbuizen) zijn bros; door grondbeweging of belasting boven de leiding scheuren ze of breken hun verbindingen. Wortelingroei door deze scheuren is een klassiek probleem in oudere wijken. Reparatie via **pijp-relining** (nieuwe PE-buis binnenin) of door uitgraven en vervangen.',
    },

    // C.1.8 (3)
    {
      id: 'C1-8-a',
      toetstermCode: 'C.1.8',
      type: 'mc',
      prompt:
        'Bij een **AO-closet** (Achter-Onder) zit de afvoer:',
      options: [
        'Bovenop de pot, naar boven',
        'Achteruit horizontaal — voor montage tegen de wand',
        'Onder de pot, naar beneden — standaard wandtoilet',
        'Zijwaarts — voor schuine plaatsing',
      ],
      correctIndex: 2,
      explanation:
        'AO = Achter-Onder: afvoer steekt achter de pot naar beneden door de vloer. Dat is de meest voorkomende uitvoering voor wandtoiletten. AS (Achter-Stand) = horizontale achteruit-afvoer; PK = klassieke schotelcloset (verouderd).',
    },
    {
      id: 'C1-8-b',
      toetstermCode: 'C.1.8',
      type: 'mc',
      prompt:
        'Wat is een **Sanibroyeur**?',
      options: [
        'Een type closetpot met motortje dat fecaliën fijnmaalt — afvoer via dunne Ø 45 mm leiding (oplossing voor verbouwingen zonder grote afvoer)',
        'Een merknaam voor een hangcloset',
        'Een dispenser voor toiletpapier',
        'Een sifon met dubbele bocht',
      ],
      correctIndex: 0,
      explanation:
        'Een Sanibroyeur is een closetpot met geïntegreerde maalmachine. De fecaliën worden tot vloeistof gemalen en via een dunne afvoer (Ø ~ 45 mm) verpompt. Ideaal bij verbouwingen waar geen Ø 110 mm afvoer met afschot mogelijk is (toilet op zolder, kelder of in een ongeplande hoek).',
    },
    {
      id: 'C1-8-c',
      toetstermCode: 'C.1.8',
      type: 'mc',
      prompt:
        'Een **wasmachine** wordt aangesloten op de afvoer via:',
      options: [
        'Direct in de standleiding zonder waterslot',
        'Een standpijp (verticale buis waarin de wasslang hangt) of dubbele tapaansluiting, met eigen sifon — voldoende beluchting nodig',
        'De vaatwasser-aansluiting',
        'Een doucheplug in de vloer',
      ],
      correctIndex: 1,
      explanation:
        'Wasmachine-afvoer via een standpijp (Ø ~32–40 mm) of een dubbele tap aansluiting met eigen sifon. Belangrijk: voldoende beluchting (anders zuigt het uitpompen lucht in en spettert het water terug). De afvoer mag niet rechtstreeks in de standleiding zonder sifon — anders stank.',
    },

    // C.1.9 (2)
    {
      id: 'C1-9-a',
      toetstermCode: 'C.1.9',
      type: 'mc',
      prompt:
        'Hoe werkt een **WTW-douche** (warmteterugwinning douche)?',
      options: [
        'Een radiator boven de douche verwarmt de ruimte',
        'Een warmtewisselaar in de afvoer brengt warmte van het wegvloeiende douchewater over naar het inkomende koude leidingwater — het leidingwater wordt al voorverwarmd voordat het de combiketel bereikt',
        'Een elektrische verwarming bovenop het douchehoofd',
        'Een isolerende deken om de douchebak',
      ],
      correctIndex: 1,
      explanation:
        'Een WTW-douche is een passieve warmtewisselaar in de afvoer (koperen of RVS pijp met spiraalvormige buitenwand). Het wegvloeiende warme douchewater (~38 °C) verwarmt het koude leidingwater (~10 °C) tot ~25 °C voordat het naar combiketel en mengkraan gaat. Bespaart tot 40% energie voor warmwater.',
    },
    {
      id: 'C1-9-b',
      toetstermCode: 'C.1.9',
      type: 'mc',
      prompt:
        'Een WTW-douche werkt het **best wanneer**:',
      options: [
        'De douche koud water gebruikt',
        'De gebruiker langzaam doucht',
        'Warm douchewater wegvloeit en tegelijkertijd koud leidingwater aanstroomt (gelijktijdige stroming aan beide zijden van de wisselaar)',
        'De wisselaar elektrisch wordt voorverwarmd',
      ],
      correctIndex: 2,
      explanation:
        'WTW-douche werkt alleen tijdens **gelijktijdige stroming**: warm afvloeiend douchewater + koud inkomend leidingwater. Bij een bad of een korte stop in douchewater stopt de warmteoverdracht. Vandaar dat WTW vooral bij langdurig doucheverbruik energie bespaart. Geen elektriciteit nodig (passief).',
    },
  ],

  terms: [
    {
      term: 'Vuilwater (DWA)',
      definition:
        'Afvalwater uit toilet, douche, keuken — gaat via huisaansluitleiding naar gemeenteriool of zuivering.',
    },
    {
      term: 'Hemelwater (HWA)',
      definition:
        'Regenwater dat via dakgoten en regenpijpen wordt afgevoerd; bij voorkeur infiltreren of apart riool.',
    },
    {
      term: 'Gemengd stelsel',
      definition:
        'Riool waarin vuilwater en hemelwater samen worden afgevoerd — verouderd type, geeft overstort bij hevige regen.',
    },
    {
      term: 'Gescheiden stelsel',
      definition:
        'Aparte buizen voor vuilwater en hemelwater; standaard in moderne nieuwbouw.',
    },
    {
      term: 'Standleiding',
      definition:
        'Verticale riool­leiding die afvalwater van verdiepingen verzamelt richting horizontale grond­leiding.',
    },
    {
      term: 'Ontstoppings­stuk (ontstoppings­put)',
      definition:
        'Toegankelijk punt in het riool waar bij verstopping ontstopt kan worden — verplicht binnen 0,5 m van perceelgrens.',
    },
    {
      term: 'Stankafsluiter (sifon)',
      definition:
        'Waterslot in een afvoer dat rioollucht tegenhoudt — vrijwel altijd S- of P-vorm.',
    },
    {
      term: 'Ontluchting',
      definition:
        'Buis die boven het dak uitkomt om het riool te beluchten — voorkomt onderdruk en leegzuigen van sifons.',
    },
    {
      term: 'PVC-buis',
      definition:
        'Standaard rioolmateriaal — bruin/oranje, lichtgewicht, lijmverbindingen of mof met rubberring.',
    },
    {
      term: 'Gietijzeren afvoer',
      definition:
        'Klassiek materiaal — zwaar, geluidsarm; nog in oude panden of bij geluideisen voor standleidingen.',
    },
    {
      term: 'Drempel hoogteverschil',
      definition:
        'Min. 1 cm verval per meter horizontale buis (1:100) om vloeistof goed te laten stromen.',
    },
    {
      term: 'Rioolgemaal',
      definition:
        'Pompinstallatie die afvalwater optilt waar het niet onder vrij verval wegstroomt (laag gelegen wijken).',
    },
    {
      term: 'Septic tank',
      definition:
        'Bezinkput voor afvalwater op locaties zonder rioolaansluiting — vergt periodiek leegzuigen.',
    },
    {
      term: 'IBA',
      definition:
        'Individuele Behandeling van Afvalwater — kleinschalige zuivering bij geïsoleerde woningen.',
    },
  ],

  games: [
    {
      id: 'C1-gapfill-1', type: 'gapfill',
      title: 'Riolering — vul aan',
      text:
        'In een {{gemengd}} stelsel gaan vuilwater en hemelwater door één leiding; in een {{gescheiden}} stelsel apart. ' +
        'De verticale leiding door verdiepingen heet de {{standleiding}}; boven het dak heet hij {{ontspanningsleiding}}. ' +
        'Een {{sifon}} houdt rioollucht buiten via een waterslot — bij toilet min. 50 mm, anders 30 mm.',
      distractors: ['hemelwaterleiding', 'aansluitleiding', 'antivide', 'zwanenhals'],
    },
    {
      id: 'C1-sort-1', type: 'sort',
      title: 'Plaats begrippen bij hun categorie',
      categories: ['Stelsel', 'Alternatieve afvoer', 'Hulpstuk'],
      items: [
        { label: 'Gemengd stelsel', category: 'Stelsel' },
        { label: 'Gescheiden stelsel', category: 'Stelsel' },
        { label: 'Beerput', category: 'Alternatieve afvoer' },
        { label: 'Septictank', category: 'Alternatieve afvoer' },
        { label: 'Wadi', category: 'Alternatieve afvoer' },
        { label: 'IBA-installatie', category: 'Alternatieve afvoer' },
        { label: 'Sifon (stankafsluiter)', category: 'Hulpstuk' },
        { label: 'Ontstoppingsstuk', category: 'Hulpstuk' },
        { label: 'Polderstuk', category: 'Hulpstuk' },
      ],
    },
    {
      id: 'C1-sequence-1', type: 'sequence',
      title: 'Route van toilet tot RWZI',
      items: [
        'Toilet (lozingstoestel)',
        'Aansluit­leiding + sifon',
        'Standleiding (verticaal)',
        'Grondleiding (onder vloer)',
        'Huisaansluit­leiding (perceelgrens)',
        'Gemeentelijk hoofdriool',
        'Rioolwaterzuivering (RWZI)',
      ],
    },
    {
      id: 'C1-matching-1', type: 'matching',
      title: 'Risico van oude buismaterialen',
      pairs: [
        { left: 'Gietijzer', right: 'Roest van binnenuit — buiswand wordt dunner' },
        { left: 'Lood', right: 'Giftig zwaar metaal — bij contact drinkwater verboden' },
        { left: 'Asbestcement', right: 'Sloop alleen door specialist — gezondheids­risico' },
        { left: 'Gresbuis (keramiek)', right: 'Bros — wortels groeien door scheuren' },
        { left: 'WTW-douche', right: 'Warmtewisselaar in douche-afvoer — bespaart energie' },
      ],
    },
  ],
}
