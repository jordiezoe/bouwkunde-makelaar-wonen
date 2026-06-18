import type { Topic } from '../types/content'

export const D_3_bouwfysica: Topic = {
  code: 'D.3',
  section: 'D',
  title: 'Bouwfysische toepassingen',
  chapterRef: 'Lesboek hoofdstukken 26 en 27',
  blurb:
    'Elementaire bouwfysische begrippen (thermische schil, R-waarde, U-waarde, koudebrug, oppervlakte- en inwendige condensatie, luchtspouw); behaaglijkheid (oppervlakte- en luchttemperatuur, relatieve vochtigheid, ventilatie); dampremmende/dampopen/dampdichte folies; vochtproblemen en schimmels; Bbl Rc-eisen; koud-/warm-/omgekeerd dak; isolatiemaatregelen per bouwperiode; isolatiematerialen; consequenties van na-isolatie; BENG-eisen + 3 indicatoren; geluidsbegrippen (frequenties, dB, dB(A), nagalm, suskasten); 4 typen geluid; en licht (lumen, lux, daglicht, lichthinder).',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · Elementaire bouwfysische begrippen',
      toetstermCodes: ['D.3.1'],
      body: `
### Thermische schil
**Thermische schil** = de **complete buitenste isolatie­laag** rond een verwarmde ruimte — bestaande uit dak, buitenmuren, vloer en kozijnen + ramen.

**Belang**:
- **Energie­zuinigheid** afhankelijk van kwaliteit van schil
- **Comfort** binnen wordt door kwaliteit schil bepaald
- **Naden en koudebruggen** zijn de zwakke schakels

### R-waarde (warmteweerstand)
**R-waarde** = de **weerstand tegen warmte­doorgang** van een laag materiaal.
- Eenheid: **m²·K/W**
- **Hogere R = beter isolerend**
- **Formule**: R = dikte (m) / λ (W/m·K)

**Voorbeelden**:
- 100 mm steenwol (λ = 0,036): R = 0,1 / 0,036 = **2,78 m²·K/W**
- 100 mm PIR (λ = 0,022): R = 0,1 / 0,022 = **4,55 m²·K/W** — beter isolerend bij gelijke dikte

### Rc-waarde
**Rc** = totale warmteweerstand van een complete constructie (alle lagen samen + grenslaag­overgangen). Standaard­eenheid voor Bbl-eisen.

**Bbl-eisen nieuwbouw**:
- **Buitenmuur**: Rc ≥ **4,7 m²·K/W**
- **Beganegrondvloer**: Rc ≥ **3,7 m²·K/W**
- **Dak**: Rc ≥ **6,3 m²·K/W**

### U-waarde (warmtedoorgangs­coëfficiënt)
**U-waarde** = **omgekeerde van Rc** — geeft aan hoeveel warmte er door de constructie heen gaat.
- Eenheid: **W/m²·K**
- **Lagere U = beter isolerend** (=hogere R)
- **Vooral gebruikt voor ramen en kozijnen**

**Bbl-eis kozijn + glas**:
- **U ≤ 1,65 W/m²·K** voor het gehele kozijn (Uw — Window)
- Triple glas haalt ~0,8; HR++ glas ~1,1; enkel glas ~5,8

### Koudebrug
**Koudebrug** = **plaats in de constructie waar warmte makkelijker doorheen lekt** dan in de omliggende isolatie.

**Oorzaken**:
- **Materiaalwisseling** (bv. doorgaande betonnen vloer naar buiten = balkon)
- **Onvoldoende isolatie­dikte** lokaal
- **Onderbreking** van isolatielaag (kozijn, doorvoer leiding)
- **Hoekverbindingen** (vloer-wand, wand-dak)

**Gevolgen**:
- **Lokaal koudere binnenoppervlak** → condensatie + schimmel
- **Energie­verlies** door verhoogde warmteverlies-stroom
- **Comfort­verlies** (koude vloer, koude wand-zone)

**Voorbeeld**: doorlopende betonnen balkonvloer van binnen naar buiten zonder koudebrug-onderbreking (**isokorf**). Modern wordt zo'n verbinding altijd met een **isokorf** uitgevoerd (RVS-staaf­wapening + thermisch isolerend kunststof tussenstuk).

### Oppervlakte­condensatie
**Wat is het?**
Wanneer **warme, vochtige binnenlucht** in contact komt met een **koud oppervlak** (bv. enkel glas, koude muur, koudebrug), wordt de lucht afgekoeld onder zijn **dauwpunt** → waterdamp condenseert op het oppervlak → **condens­druppels** zichtbaar.

**Voorbeelden**:
- Condens op een raamglas op een koude winterochtend
- Vochtkring op een wand achter een grote kast
- Druppels op een metalen warm­waterleiding in de wasruimte

**Oplossing**:
- **Verhoog oppervlakte­temperatuur** door betere isolatie / HR-glas
- **Verlaag relatieve vochtigheid** door betere ventilatie (afzuig)
- **Vermijd koudebruggen**

### Inwendige condensatie
**Wat is het?**
Wanneer waterdamp door een wand of dak naar buiten beweegt (door damp­druk-verschil) en **binnen in de constructie** condenseert tegen een koudere laag.

**Voorbeelden**:
- In een geïsoleerde houten dak: damp gaat door isolatie naar het dakbeschot dat in winter koud is — condensatie op binnenkant dakbeschot → houtrot of schimmel
- In een binnen-geïsoleerde gevel: damp condenseert achter de isolatie

**Oplossing**:
- **Dampremmende folie aan warme zijde** (zie D.3.3)
- **Dampopen folie aan koude zijde** (laat eventueel doorgedrongen damp ontsnappen)
- Bouwfysische berekening (Glaser-diagram) om constructie te ontwerpen

### Invloed van luchtspouw
**Spouw** = onderbroken luchtkamer tussen twee constructielagen — meest bekend tussen binnen- en buitenspouwblad van een muur (typisch 50–100 mm).

**Functies spouw**:
1. **Vochtkering**: regenwater dat door buitenspouwblad dringt loopt aan de binnenkant van het buitenblad omlaag, niet naar het binnenblad
2. **Thermische isolatie**: stilstaande lucht isoleert (λ = 0,024) — bij geventileerde spouw beperkt
3. **Druk-vereffening**: voorkomt opbouw drukverschil over de gevel
4. **Plaats voor isolatie** (spouw­vulling met steenwol of PUR-platen) — modern standaard

**Geventileerde vs ongeventileerde spouw**:
- **Geventileerd** (open stootvoegen onder en boven): vochtafvoer, minder isolatie
- **Ongeventileerd** (alleen open stootvoegen onder): vol gevuld met isolatie, geen circulatie
      `.trim(),
    },

    {
      heading: '2 · Behaaglijkheid en binnenklimaat',
      toetstermCodes: ['D.3.2'],
      body: `
**Behaaglijkheid** = de mate waarin een ruimte aangenaam aanvoelt voor mensen. Vier hoofd-invloeden:

### 1. Luchttemperatuur
**Wat is comfortabel?**
- **Wonen**: 19–21 °C (kort verblijf), 20–22 °C (langer)
- **Slapen**: 16–18 °C
- **Badkamer**: 22–24 °C tijdens douche
- **Variatie**: tot 4 °C verschil tussen ruimten acceptabel

**Bbl-eis**: minimum **18 °C** in verblijfsruimte bij –10 °C buiten

### 2. Oppervlakte­temperatuur
**Onderschat maar zeer belangrijk!**
- **Stralingstemperatuur** van oppervlakken (muren, vloer, ramen, plafond) beïnvloedt **comfort meer** dan luchttemperatuur
- **Operative temperatuur** = (luchttemperatuur + stralingstemperatuur) / 2

**Voorbeelden**:
- 20 °C lucht + 14 °C koude wand = **17 °C effectief** — voelt koud
- 20 °C lucht + 22 °C warme vloer (vloerverwarming) = **21 °C effectief** — voelt aangenaam

**Bouwfysische verbetering**:
- **Goede isolatie** → warmere binnenoppervlakken
- **HR++ glas** voorkomt koude valluchtkolommen + koude oppervlakte­straling
- **Vloerverwarming** verbetert straling van onderaf

### 3. Relatieve luchtvochtigheid (RV)
**Wat is comfortabel?**
- **Ideaal**: 40–60 % RV
- **Te droog** (< 30 %): geïrriteerde slijmvliezen, statisch elektriciteit
- **Te vochtig** (> 70 %): schimmel-risico, slecht gevoel

**Hoe wordt RV beïnvloed?**
- **Mensen** ademen vocht uit (~50 g per uur per persoon)
- **Koken, douchen, was drogen** voegen vocht toe
- **Ventilatie** voert vochtige lucht af
- **Verwarming** verlaagt RV (warme lucht houdt meer vocht vast bij gelijke absolute vochtigheid)

**Problemen bij verkeerde RV**:
- **Hoog**: condens op koude oppervlakken, schimmel, dust mite groei
- **Laag**: irritatie luchtwegen, droge ogen, statisch elektriciteit

### 4. Ventilatie en luchtkwaliteit
**Belang**:
- **CO₂ afvoeren** (mensen ademen uit)
- **Vocht afvoeren** (zie boven)
- **Geuren** en vluchtige stoffen verwijderen
- **Verse zuurstof** aanvoeren

**Bbl-eisen**:
- Verblijfs­ruimte: 0,7 l/s per m² verse lucht
- CO₂ < 1.200 ppm (richtlijn)
- Tochtgevoel < 0,15 m/s luchtsnelheid

**Ventilatie­systemen** (zie C.9):
- A natuurlijk
- B natuurlijke aanvoer + mechanische afvoer
- C volledig mechanisch
- D balansventilatie + WTW (modern standaard)

### Behaaglijkheids­onderzoek
**Werkelijke comfortstudie** combineert:
- **Tochtgevoel** (luchtsnelheid)
- **Luchtkwaliteit** (CO₂, fijnstof, VOC)
- **Stralings­assymetrie** (verschil tussen warm + koud oppervlak)
- **Verticaal temperatuur­verschil** vloer naar hoofd (max. 3 °C)
- **Akoestiek** (zie D.3.11)
- **Daglicht­toetreding** (zie D.3.13)

### Voor de woning­koper
Een **goed gerenoveerde of nieuwbouw-energiezuinige woning** scoort op alle aspecten:
- Hoge oppervlakte­temperaturen door goede isolatie
- HR++/triple glas zonder valluchtkolommen
- Balansventilatie + WTW voor luchtkwaliteit
- Vloerverwarming voor stralings­warmte van onderaf

Een **oude, slecht geïsoleerde woning**:
- Koudere wanden + tochtige roosters
- Condensvorming op enkel glas
- Te droge lucht in winter (door tocht-ventilatie)
- Vaak schimmel achter kasten en in hoeken
      `.trim(),
    },

    {
      heading: '3 · Dampremmende, dampopen en dampdichte folies',
      toetstermCodes: ['D.3.3'],
      body: `
**Folies** spelen een sleutelrol in moderne bouwfysica om vocht­problemen te voorkomen. Drie typen — leer ze met **toepassing** en **plaats**.

### Dampremmende folie
**Wat is het?**
**Kunststof folie** (vaak polyetheen, PE) die **waterdamp gedeeltelijk tegenhoudt** maar **niet volledig dampdicht** is — kleine hoeveelheid damp kan nog door.

**Eigenschap**:
- **Sd-waarde** (equivalent-luchtspouw): 2–30 m (gemiddeld dampremmend)
- **Niet volledig dampdicht** — vergeeft zich kleine fouten

**Plaats**: **aan de warme (binnen)zijde** van de isolatie
- Onder het dakbeschot van een hellend dak met geïsoleerde verdieping
- Achter gipskartonplaten in een houtskelet­bouw-wand
- Op de zoldervloer wanneer alleen vlieringvloer is geïsoleerd

**Functie**:
- Houdt het grootste deel van warme, vochtige binnenlucht **buiten de isolatie**
- Voorkomt **inwendige condensatie** in de constructie
- Daardoor: geen vocht in isolatie → blijvende thermische prestatie

### Dampopen folie
**Wat is het?**
**Kunststof of microvezel-folie** die **wel waterdamp doorlaat** (van binnen naar buiten) maar **regenwater tegenhoudt** (van buiten naar binnen).

**Eigenschap**:
- **Sd-waarde**: 0,02–0,3 m (zeer dampopen)
- **Waterdicht** voor regen
- Vaak met **microporiën** waar damp wel maar water niet doorheen kan

**Plaats**: **aan de koude (buiten)zijde** van de isolatie
- Onder de dakbedekking op een hellend dak
- Aan de buitenkant van een gevelisolatie (achter gevelbekleding)
- Mandragende folie onder dakpannen

**Functie**:
- Eventueel **doorgedrongen damp** kan ontsnappen → geen vochtophoping in isolatie
- **Wind- en regendicht** houden van de isolatie
- Beschermt isolatie tegen wind doorzetting (cold air infiltration)

### Dampdichte folie
**Wat is het?**
**Aluminium-folie** (vaak op een drager) of **bitumineuze folie** die **volledig dampdicht** is.

**Eigenschap**:
- **Sd-waarde**: > 1.500 m (volledig dampdicht)
- Geen damp kan doorheen — niet eens een beetje

**Plaats**:
- **Boven onverwarmde kruipruimte**: dampdichte folie boven het zand voorkomt dampen vanaf grond
- **Onder vloerverwarmings­leidingen** in dekvloer
- **Bij speciale toepassingen** (vrieskast, sauna)
- **Soms aan warme zijde** als alternatief voor dampremmende folie (specifiek nodig)

**Functie**:
- **Volledige dampbarrière**
- Voor speciale ruimten met extreem damp (sauna naar woongedeelte) of waar damp niet ontsnappen kan (volledig ingesloten ruimten)

### Vergelijking en plaatsing

**Standaard moderne constructie** (volgorde van binnen naar buiten):

> BINNEN (warm) → dampremmend → isolatie → dampopen → BUITEN (koud)

Dit principe is essentieel:
- **Aan warme zijde**: damp wordt afgeremd vóór de isolatie
- **Aan koude zijde**: eventueel doorgedrongen damp kan ontsnappen
- Geen damp blijft hangen in de isolatie

### Sd-waarde verklaring
**Sd-waarde** (Sicker­distanz) = equivalent luchtspouw — geeft aan hoeveel meter stilstaande lucht het folie equivalent is in damp­weerstand.

| Folie | Sd-waarde | Type |
|---|---|---|
| Open weefsel (jute) | < 0,01 m | Niets remmend |
| Dampopen folie (gewoon) | 0,02–0,3 m | Dampopen |
| Dampremmende folie | 2–30 m | Dampremmend |
| Aluminium-folie | > 1.500 m | Dampdicht |
| Beton 200 mm | ~150 m | Dampdicht-bijna |

### Praktijk-fouten
- **Beschadiging** door slordige plaatsing (nagels door folie) → lokale lekkage damp
- **Foutieve plaats** (dampremmend aan koude zijde) → vocht­opbouw in isolatie
- **Open naden** tussen folie-stroken → damp gaat eromheen
- **Doorvoeren** (kabels, leidingen) niet luchtdicht afgewerkt → grote damp-bronnen

**Bouwkundig detail van belang**: **luchtdicht bouwen** in moderne energiezuinige woning — alle naden en aansluitingen luchtdicht afgewerkt met tape of kit.
      `.trim(),
    },

    {
      heading: '4 · Vochtproblemen en schimmels',
      toetstermCodes: ['D.3.4'],
      body: `
**Vochtproblemen** in een woning zijn meestal terug te voeren op **bouwfysische gebreken**. Vier hoofd­bronnen van vocht:

### 1. Bouwvocht
- Vocht uit de bouwprocedure (vers beton, mortel, pleister, behangwerk)
- **Verdwijnt** binnen 1–3 jaar bij normaal gebruik en goede ventilatie
- **Probleem** als nieuwe woning niet goed wordt gedroogd vóór aansluiten op cv

### 2. Optrekkend grondvocht
- Vocht uit de grond stijgt door **capillaire werking** in metsel­werk en beton
- **Klassiek probleem** in oudere woningen (< 1950) zonder DPC-laag
- **Tekenen**: zout-uitslag op muur, vochtige sokkel, schimmel onderaan muur

**Oplossingen**:
- **DPC-injectie**: water­afstotende vloeistof in het metsel­werk injecteren (sokkel onder de eerste lagen)
- **Elektro-osmose**: elektrisch veld dat opwaartse waterstroom omkeert
- **Drainage** rondom het huis (lager grondwater­peil bij muur)
- **Bij ernstige gevallen**: muur vernieuwen vanaf onderzijde

### 3. Doorslag­vocht
- **Regenwater dringt door gevel** naar de binnenkant
- **Oorzaken**:
  - Slechte voegen of poreuze stenen
  - Open spouwblad zonder isolatie
  - Beschadigde gevelafwerking (pleister, verf)
  - Wind­gedreven horizontale regen
- **Tekenen**: vocht­plekken aan binnenwand, vooral na westenwind

**Oplossingen**:
- **Voegherstel** + hydrofoberen
- **Gevel-na-isolatie** met spouwvulling
- **Aanvullende gevel­afwerking** (pleister, beplating)
- **Regen­scherm** waar mogelijk

### 4. Condens­vocht (zie ook D.3.1)

#### Oppervlakte­condensatie
- Warme, vochtige binnenlucht raakt koud oppervlak (raam, koudebrug, slecht geïsoleerde wand)
- Waterdamp condenseert op het oppervlak → druppels of vochtkring
- **Schimmel** ontstaat snel op vochtige oppervlakken (zwart, groen, witgrijs)

**Tekenen**:
- Druppels op raamglas in winter (vooral enkel glas of slecht HR-glas)
- Vochtkring achter grote kast (geen luchtcirculatie + koude wand)
- Schimmel in **hoeken** (koudebrug-zone) of **achter gordijnen**

**Oplossingen**:
- **Betere isolatie** → warmer oppervlak
- **Beter ventileren** (mechanisch + open verwarming­bedrijf)
- **Vermijd koudebruggen** bij renovatie
- **Tijdelijk**: ontvochtiger + woning verwarmen, geen kasten te dicht tegen koude wanden

#### Inwendige condensatie
- Damp condenseert binnen de constructie (achter isolatie, in dakbeschot)
- Tekenen: **vochtige plekken** binnen na lange tijd zichtbaar; houtrot of schimmel binnen muur
- Vaak detectie pas bij ernstige schade

**Oplossingen**:
- **Constructie opnieuw beoordelen** + dampremmende folie aanbrengen
- Aan koude zijde dampopen folie controleren

### Schimmels — welke types?

#### Schimmel op binnenoppervlak
- **Aspergillus, Cladosporium, Penicillium** — luchtgedragen sporen
- **Verschijning**: zwarte, groene, witte of grijze vlekken op wanden, plafonds, badkamer-voegen
- **Gezondheidsrisico**: irritatie luchtwegen, allergieën, immuunsysteem-belasting
- **Aanpak**: reinigen met schimmel­doder + oorzaak (vocht) elimineren

#### Schimmels die hout aantasten (zie ook B.9.2)
- **Huiszwam (Serpula lacrymans)** — beruchtste, kan zich uitbreiden via metsel­werk en pleister
- **Kelderzwam (Coniophora puteana)** — natte ruimten
- **Witte rot** — breekt cellulose + lignine af
- **Bruine rot** — alleen cellulose, hout kubisch breekt

Deze vergen **specialistische behandeling** — alle aangetaste delen verwijderen + ventilatie verbeteren + droog houden.

### Verklaring van vocht- en schimmel­oorzaken (bouwfysische diagnose)

**Stap 1**: locatie + patroon herkennen
- **Sokkel onderaan**: optrekkend grondvocht
- **Hoek tussen wand + plafond**: koudebrug + condens
- **Aan koude wand achter kast**: oppervlakte­condensatie door geen luchtcirculatie
- **Plafond direct onder dak**: lekkage of inwendige condensatie
- **Achter zware meubels**: koude oppervlakken + onvoldoende ventilatie

**Stap 2**: bouwfysische oorzaak vaststellen
- **Onvoldoende isolatie** → warmer maken
- **Koudebrug** → onderbreken met isolatie
- **Slecht ventileren** → mechanisch verbeteren
- **Defecte vochtkering** → DPC-injectie of vervangen
- **Lekkage** → bron opsporen en herstellen

**Stap 3**: oplossing implementeren
- Vaak combinatie van maatregelen
- Bij ernstige schimmel: schimmel­doder + ventilatie verbeteren tegelijk
- **Niet alleen schimmel weg poetsen** — komt terug zonder oorzaak­bestrijding
      `.trim(),
      images: [
        {
          src: '/figs/tekeningen/koudebrug-condensatie.svg',
          caption:
            'Een koudebrug: waar een betonvloer de isolatie onderbreekt, ontstaat aan de binnenzijde een koude plek. Warme, vochtige binnenlucht condenseert daar — met vochtplekken en schimmel als gevolg.',
          source: 'Eigen tekening',
          width: 'full',
        },
      ],
    },

    {
      heading: '5 · Bbl Rc-eisen + koud/warm/omgekeerd dak',
      toetstermCodes: ['D.3.5', 'D.3.6'],
      body: `
### Bbl-eisen Rc-waarden (nieuwbouw 2023)
**Besluit bouwwerken leefomgeving (Bbl)** stelt minimale isolatie-eisen voor nieuwbouw:

| Bouwdeel | Minimum Rc |
|---|---|
| **Buitenmuur** (gevel) | **4,7 m²·K/W** |
| **Beganegrondvloer** | **3,7 m²·K/W** |
| **Dak** | **6,3 m²·K/W** |
| **Glas + kozijn** (U-waarde) | **U ≤ 1,65 W/m²·K** |

**Voor bestaande bouw**: lagere eisen, maar bij verbouwing geldt vaak nieuwbouw-norm voor het te wijzigen deel.

**Renovatie­doelen** vaak hoger dan minimum-eisen:
- Voor passief­huis: Rc = 8–10 voor alle delen
- Voor NOM (Nul Op de Meter): vergelijkbaar of hoger
- Voor reguliere BENG-woning: Bbl-eisen voldoende

### Verwijzing naar bron
**Bbl** is sinds 1 januari 2024 actief, ter vervanging van het Bouwbesluit 2012. De volledige tekst staat in de **wettenbank** van de overheid: rijksoverheid.nl + **iplo.nl** (Informatie­punt Leefomgeving). Een **EPB-coördinator** of bouwfysisch adviseur kan vertaling naar specifieke situatie geven.

### Drie principes van dakopbouw

#### Koud dak
**Wat is het?**
- **Isolatie aan de binnenzijde** van het dakbeschot
- **Geventileerde lucht­spouw** tussen isolatie en dakbedekking
- Dakbeschot blijft **koud** (klassiek bij hellend dak met geïsoleerde zolder)

**Opbouw (van binnen naar buiten)**:
1. Plafond­afwerking (gipsplaat)
2. Dampremmende folie (warme zijde)
3. **Isolatie** tussen sporen of gordingen
4. **Geventileerde luchtspouw** (~40–80 mm)
5. Dakbeschot
6. Mandragende folie (dampopen)
7. Tengels + panlatten
8. Dakpannen

**Voor- en nadelen**:
- **Voordeel**: eenvoudige renovatie bestaande hellende daken
- **Nadeel**: ventilatie­spouw bemoeilijkt bouw­fysische dichtheid; **luchtlekken** mogelijk via spouw
- **Vooral**: hellende daken met ongebruikte vliering

#### Warm dak
**Wat is het?**
- **Isolatie aan de buitenzijde** van het dakbeschot
- **Geen geventileerde spouw** — dakbedekking direct op isolatie
- Dakbeschot blijft **warm** (geen condensatie­risico in dakbeschot)

**Opbouw (van binnen naar buiten)**:
1. Plafond­afwerking
2. Dakbeschot (constructief)
3. Dampremmende folie
4. **Isolatie** (vaste platen — PUR, PIR, EPS)
5. Dakbedekking (bitumen, EPDM)

**Voor- en nadelen**:
- **Voordeel**: betere isolatie­continuïteit; geen koudebrug rond sporen; geen ventilatie­risico
- **Nadeel**: meer materiaal; dakbedekking op isolatie kan vervormen bij hitte
- **Vooral**: platte daken (modern standaard) en nieuwbouw hellende daken

#### Omgekeerd dak (inversed roof / IRMA)
**Wat is het?**
- **Isolatie BOVEN de dakbedekking** — water­bestendige isolatieplaten (XPS) liggen op de bitumen/EPDM dakbedekking
- **Ballast** (grind, drainage­tegels) bovenop tegen wind en UV
- Dakbedekking blijft **droog en warm**

**Opbouw (van binnen naar buiten)**:
1. Plafond
2. Dakbeschot
3. Dampremmer
4. **Dakbedekking** (bitumen / EPDM)
5. **XPS-isolatie** (vochtbestendig, drukvast)
6. **Ballast** — grind of drainage-tegels

**Voor- en nadelen**:
- **Voordeel**: dakbedekking beschermd tegen UV en mechanische schade (verlengt levensduur 2–3×); makkelijke renovatie­toepassing
- **Nadeel**: extra gewicht (ballast); zorgvuldige plaatsing isolatie
- **Vooral**: renovatie van platte daken zonder dakbedekking te vervangen

### Vergelijking

| Type | Plaats isolatie | Spouw | Dakbedekking-bescherming | Toepassing |
|---|---|---|---|---|
| **Koud dak** | Binnen | Geventileerd | Beperkt | Hellend dak renovatie |
| **Warm dak** | Buiten | Geen | Standaard | Modern plat + hellend dak |
| **Omgekeerd dak** | Boven dakbedekking | Geen | Maximaal | Renovatie plat dak |
      `.trim(),
      images: [
        {
          src: '/figs/tekeningen/dak-koud-warm-omgekeerd.svg',
          caption:
            'Laagopbouw van de drie platdak-typen. Warm dak: isolatie onder de dakbedekking (standaard). Koud dak: geventileerde spouw onder de dekking (afgeraden, condensrisico). Omgekeerd dak: isolatie bóven de dakbedekking, met grind of tegels als ballast.',
          source: 'Eigen tekening',
          width: 'full',
        },
      ],
    },

    {
      heading: '6 · Isolatie­maatregelen per bouwperiode',
      toetstermCodes: ['D.3.7', 'D.3.8'],
      body: `
### Isolatie naar bouwperiode

**Vooroorlogs (< 1940)**:
- **Geen isolatie** in originele constructie
- **Enkel-baksteen wanden** of dubbele baksteen zonder spouw
- **Houten balklagen** met houten beschot (vaak ongeïsoleerd)
- **Enkel glas**
- Spouw in moderne zin **bestaat nog niet** of zonder isolatie

**Aanpak na-isolatie**:
- **Binnen-isolatie** (vermindert oppervlak; verbergt aansluitingen) of **buiten-isolatie** (modernste oplossing, gevel verandert)
- **Spouw na-isolatie** indien spouw aanwezig (vaak niet)
- **HR++-glas of monumentenglas** (in monument)
- **Dak**: tussen of bovendaks isolatie
- **Vloer**: tussen balken (steenwol) of vloeronderzijde EPS

**1945–1970**:
- **Spouwmuur** (~50 mm) ingevoerd, vaak ongeïsoleerd
- **Enkel of dubbel glas zonder coating**
- **Beton beganegrondvloer** zonder isolatie
- **Dak**: hellend houten + dakbeschot, ongeïsoleerd

**Aanpak**:
- **Spouw na-isolatie** met **steen-/glaswol-vlokken** (gemakkelijk, ~€ 2.000 voor woning) of **PUR-schuim** (betere isolatie)
- **HR-/HR++ glas** vervanging
- **Dak na-isolatie** (zie ook D.3.6)
- **Vloer na-isolatie** met EPS-platen aan onderzijde (kruipruimte)

**1970–2000**:
- **Spouw** met (vaak beperkte) isolatie (40–80 mm steenwol)
- **HR-glas** standaard sinds ~1990
- **Beganegrondvloer** met PS-isolatie standaard sinds ~1985
- **Dak** met isolatie standaard sinds ~1990

**Aanpak**:
- **Verbetering spouw-isolatie** (vervangen of aanvullen)
- **HR++ glas** vervanging
- **Dak isolatie aanvullen** (vooral bij oudere ~70-80 woningen)

**2000–2010**:
- **Volledige isolatie** in alle bouwdelen
- **HR++ glas** standaard
- Maar **niet altijd op moderne BENG-niveau**

**Aanpak**:
- **Verbetering** waar mogelijk; volledige vervanging zelden rendabel
- Focus op kozijnen + glas + ventilatie­systeem

**2010+** (huidige nieuwbouw):
- **BENG-eisen** of vergelijkbaar
- **Triple glas** mogelijk
- **Warmtepomp** standaard
- **Balansventilatie + WTW** standaard

### Isolatiematerialen — eigenschappen + toepassingen

(Voor uitgebreide info zie B.16 — Isolatiematerialen)

| Materiaal | λ (W/m·K) | Toepassing | Voor/nadeel |
|---|---|---|---|
| **Glaswol** | 0,032–0,040 | Spouw, dak­dekens, plafond | Onbrandbaar, vezelig |
| **Steenwol** | 0,033–0,040 | Spouw, brandwerend, geluid | Hoger gewicht, smelt > 1000 °C |
| **Foamglas** | 0,045–0,055 | Onder fundering, vochtig | Duur, drukvast, dampdicht |
| **EPS** | 0,032–0,038 | PS-combivloer, bekisting | Goedkoop, niet drukvast |
| **XPS** | 0,032–0,036 | Omgekeerd dak, fundering | Gesloten cellen, vochtbestendig |
| **PUR** | 0,025–0,030 | Sandwich, spuit-kierdichting | Beste λ, dichte cellen |
| **PIR** | 0,022–0,025 | Dak, sandwich | Beste λ, moeilijk brandbaar |
| **Vlas** | 0,038–0,042 | HSB, duurzame nieuwbouw | Hernieuwbaar, hygroscopisch |

### Combinatie met dampremmende folie

**Vooral belangrijk bij**:
- **Houten constructies** (HSB, houten dak)
- **Binnen­isolatie** in vooroorlogs pand
- **Buiten­isolatie** met geventileerde gevel

**Niet altijd nodig bij**:
- **Spouw­vulling met dampopen materiaal** (steen-/glaswol-vlokken) — vocht kan ontsnappen
- **Buiten­isolatie zonder geventileerde gevel** (EPS + sierpleister)
      `.trim(),
    },

    {
      heading: '7 · Na-isolatie: voor- en nadelen',
      toetstermCodes: ['D.3.9'],
      body: `
### Positieve consequenties van na-isolatie

#### 1. Energie­besparing
- **20–60 % minder** energie­verbruik afhankelijk van uitgangsituatie
- **CO₂-uitstoot** vermindert
- **Energie­rekening** lager (terug­verdientijd 8–20 jaar)

#### 2. Comfort
- **Warmer in winter**: warmere binnenoppervlakken, minder koudval
- **Koeler in zomer**: minder oververhitting (vooral met goede zonwering)
- **Constantere temperatuur** in huis
- **Minder tocht** door dichte schil

#### 3. Vochthuishouding
- **Minder condensatie** op binnenoppervlakken (door warmer oppervlak)
- **Minder schimmel** in hoeken en achter kasten

#### 4. Geluidsisolatie
- Veel isolatiematerialen (steenwol, glaswol) dempen ook geluid
- Tegelijkertijd HR++/triple glas dempt verkeers­geluid

#### 5. Waardevermeerdering woning
- **Energie­label** stijgt (E → A is mogelijk)
- **Marktwaarde** woningen met label A 5–10 % hoger dan label E
- **Verkoopbaarheid** beter

#### 6. Subsidies
- **ISDE** (Investeringssubsidie Duurzame Energie)
- **Gemeentelijke regelingen**
- **BTW-vrijstelling** op zonnepanelen

### Negatieve consequenties (risico's)

#### 1. Vochtproblemen bij verkeerde uitvoering
- **Dampremmer ontbreekt** of beschadigd → condensatie in constructie
- **Inwendige condensatie** → houtrot, schimmel binnen
- **Onvoldoende ventilatie** na luchtdicht maken → te hoge RV binnen
- Klassieke fout: **alleen isoleren zonder ventilatie aan te passen**

#### 2. Comfortverlies door slechte ventilatie
- **Tochtige ramen vervangen** door luchtdichte HR++ glas → zonder mechanische ventilatie ontstaat slechte luchtkwaliteit (CO₂, vocht)
- **Oplossing**: ventilatie­systeem (B, C of D) **gelijktijdig** verbeteren

#### 3. Zomerse oververhitting
- Goed geïsoleerde woning **houdt warmte vast** (winter voordeel, zomer nadeel)
- **Geen passieve koeling**: warmte­opbouw → > 30 °C binnen mogelijk
- **Oplossingen**: zonwering, ventilatie 's nachts, nachtkoeling, eventueel topkoeling

#### 4. Bouwfysische schade door koudebruggen
- Na-isolatie van **alleen sommige delen** kan koudebruggen versterken
- Bijvoorbeeld: gevel goed geïsoleerd maar dak slecht → condensatie­plek aan dakaansluiting
- **Doe altijd integraal** of plan dit zorgvuldig

#### 5. Verkleinen interieur
- **Binnen-isolatie** vermindert vloeroppervlak (3–5 cm per wand × omtrek)
- Voor wandinrichting, deuren, plinten heeft dit consequenties

#### 6. Uitstraling gevel veranderd
- **Buiten-isolatie** verandert gevel-uitstraling — niet altijd toegestaan (monument, welstand)
- Klassieke gevelmotieven verdwijnen
- Aansluitingen op kozijnen + dak vergen herwerking

#### 7. Kosten
- **Investering** € 20.000–50.000 voor totale woning
- Niet altijd rendabel binnen verwachte resterende bewoning­periode
- **Subsidies + energie­besparing** maken het meestal alsnog aantrekkelijk

#### 8. Asbest in bestaande woning
- Pre-1994 woningen: **asbestinventarisatie** verplicht vóór verbouwing
- Aanvullende kosten voor sanering

### Goede aanpak voor na-isolatie

**Stap 1**: bouwfysische beoordeling (huidige isolatie­staat)
**Stap 2**: integraal plan opstellen (gevel + dak + vloer + glas + ventilatie + cv)
**Stap 3**: prioritering — eerst grootste warmtelekken
**Stap 4**: ventilatie­verbetering tegelijk met luchtdicht maken
**Stap 5**: koudebruggen onderbreken bij detailaansluitingen
**Stap 6**: monitoring na uitvoering (vocht/temperatuur metingen)
      `.trim(),
    },

    {
      heading: '8 · BENG-eisen en 3 indicatoren',
      toetstermCodes: ['D.3.10'],
      body: `
### Wat is BENG?
**BENG** = **Bijna EnergieNeutraal Gebouw**. Sinds **1 januari 2021** is BENG **verplicht** voor alle nieuwbouw (woningen + utiliteit) in Nederland. Vervangt EPC.

### BENG-indicator 1: Energiebehoefte (kWh/m²/jr)
**Maximale energiebehoefte** voor verwarming en koeling per m² bruto vloeroppervlak per jaar.

**Wat meet het?**
- **Hoeveel warmte/koeling de woning nodig heeft** om binnen 18–24 °C te blijven
- Onafhankelijk van energie­bron of -opwekking
- **Schil-kwaliteit** is bepalend (isolatie + kozijnen + glas + luchtdicht­heid)

**Eisen (woning)**:
- Vrijstaand: ≤ **55 kWh/m²/jr**
- Tussen­woning: ≤ **35 kWh/m²/jr**
- Galerij­woning: ≤ **30 kWh/m²/jr**

**Toepassing**: zorgt voor goed geïsoleerde schil.

### BENG-indicator 2: Primair fossiel energie­verbruik (kWh/m²/jr)
**Maximale gebruikte primaire fossiele energie** per m² per jaar.

**Wat meet het?**
- **Daadwerkelijk energie­verbruik** voor verwarming, koeling, warm tapwater, ventilatie, verlichting
- **Min** het eigen opgewekte (zonnepanelen) deel
- In **primaire fossiele energie** (CO₂-equivalent)

**Eisen (woning)**:
- Vrijstaand: ≤ **65 kWh/m²/jr**
- Tussen­woning: ≤ **30 kWh/m²/jr**
- Galerij­woning: ≤ **40 kWh/m²/jr**

**Toepassing**: stimuleert efficiënte installaties + zonnepanelen.

### BENG-indicator 3: Aandeel hernieuwbare energie (%)
**Minimaal percentage** van het totale energie­verbruik dat uit **hernieuwbare bronnen** komt.

**Wat telt mee?**
- Zonnepanelen (PV)
- Zonneboiler
- Warmtepomp (haalt warmte uit lucht/bodem/water)
- Houtkachel (biomassa, beperkt)
- Warmtenet met hernieuwbare bron

**Eis (alle woningen)**:
- **Minimaal 40 %** hernieuwbaar

**Toepassing**: dwingt af dat **hernieuwbare bronnen** worden geïntegreerd (zonnepanelen + warmtepomp combinatie is meestal de oplossing).

### Drie indicatoren samen
**BENG 1 + 2 + 3 moeten alle drie behaald worden** voor een vergunning.

**Typische BENG-woning** (rijwoning):
- BENG 1: 30 kWh/m²/jr → goede isolatie, HR++ glas, balansventilatie + WTW
- BENG 2: 25 kWh/m²/jr → warmtepomp + zonnepanelen voldoende
- BENG 3: 45 % → warmtepomp + 12 panelen (~4 kWp)

### Verschil met oude EPC
**EPC** (Energieprestatie­coëfficiënt) was **één getal**:
- EPC 0,4 was nieuwbouw-standaard (2015)
- EPC 0,0 = NOM-woning

**BENG verschilt**:
- **Drie aparte eisen** ipv één
- **Schilkwaliteit** apart beoordeeld (BENG 1)
- **Hernieuwbaar percentage** apart (BENG 3)
- **Strenger** in totaal dan EPC 0,4

### Bouwfysische impact
**Om BENG te halen**:
- **Rc-waarden** boven Bbl-minimum (Rc ≥ 5 voor wand, Rc ≥ 7 voor dak, Rc ≥ 4 voor vloer)
- **HR++ of triple glas** standaard
- **Luchtdicht­heid** zeer goed (Qv,10 < 0,4)
- **Balansventilatie + WTW** standaard
- **Warmtepomp** of warmtenet-aansluiting
- **PV-panelen** vrijwel altijd nodig

### Voor de makelaar
- **Nieuwbouw na 2021** voldoet aan BENG
- **Energielabel** voor BENG-woningen is meestal A++ tot A++++
- Bij verbouwing: nieuwbouw-deel moet aan BENG voldoen (renovatie van bestaande heeft eigen eisen)
- **Vraag naar BENG-berekening** bij koop nieuwbouw

### EPV (Energieprestatie­vergoeding)
Bij **NOM-woningen** (Nul Op de Meter): huurder mag jaarlijkse vergoeding betalen i.p.v. energierekening — vastgelegd in EPV-contract.
      `.trim(),
    },

    {
      heading: '9 · Geluid: begrippen en typen',
      toetstermCodes: ['D.3.11', 'D.3.12'],
      body: `
### Bouwfysische geluidsbegrippen

#### Frequentie (Hz)
- **Frequentie** = aantal trillingen per seconde, in **Hertz (Hz)**
- **Lage frequentie** (20–250 Hz): bas-tonen, verkeers­geluid, brommend
- **Middel** (250–2.000 Hz): spraak­frequentie
- **Hoog** (2.000–20.000 Hz): scherp, fluitend

**Voor isolatie**: lage frequenties zijn **moeilijker te isoleren** dan hoge — vergt zwaardere massa.

#### Decibel (dB)
- **dB** = logaritmische schaal voor geluidsniveau
- **Verdubbeling geluid­energie** = +3 dB
- **Tienvoudig** = +10 dB
- **Verschil voor menselijk oor merkbaar** = ~3 dB

**Voorbeelden**:
- 0 dB = stilte
- 30 dB = bibliotheek
- 40 dB = rustige slaapkamer
- 60 dB = normale spraak
- 80 dB = drukke straat
- 100 dB = boormachine
- 120 dB = pijngrens

#### dB(A) — A-gewogen decibel
- **A-filter** simuleert gevoeligheid van menselijk oor
- Lage en hoge frequenties krijgen lagere weging
- **Standaard­eenheid** voor menselijke geluidsperceptie en wetgeving

#### Nagalmtijd (T60)
- **Tijd waarin geluid in een ruimte met 60 dB afneemt** na uitschakelen van bron
- **Korte nagalm** (0,3–0,8 s): woonkamer, klaslokaal — goed verstaanbaar
- **Lange nagalm** (1–3 s): kathedraal — galmend
- **Korte nagalmtijd** bereik je met **geluidsabsorberende materialen** (tapijt, gordijnen, akoestische plafond­panelen)

#### Resonantie
- **Resonantie** = natuurlijke trillings­frequentie van een object/materiaal
- Bij gelijke geluids­frequentie → object resoneert mee → versterkt geluid
- **Probleem** in dubbel glas: bij specifieke frequentie kan dubbel glas resoneren → minder isolatie
- **Oplossing**: **asymmetrisch dubbel glas** (verschillende dikten — bv. 6 + 8 mm) — verschillende resonantie­frequenties

#### Suskasten
- **Suskast** = ventilatie­voorziening met **geluidsdemping** ingebouwd
- Voor moderne woningen in **drukke omgevingen** (snelweg, spoor, vliegveld)
- **Akoestisch rooster** dempt 30–40 dB terwijl ventilatie blijft functioneren
- Hangt boven slaapkamer of woonkamer

#### Ankerloze spouwmuur
- **Spouwmuur zonder doorlopende ankers** tussen binnen- en buitenspouwblad
- Voordeel: **geen geluidsoverdracht** tussen de twee bladen — verbetering ~5 dB
- **Toepassing**: woningscheidende wand in rijwoningen (klassiek gebruik)
- Modern: **slanke ankers met rubbermantel** voor verbetering zonder volledig ankerloos

#### Geluidsisolatie
**Rw-waarde** = gewogen geluidsisolatie, in **dB**
- **Rw 32** = enkel HR++ glas
- **Rw 45** = geluidwerend glas (asymmetrisch + PVB)
- **Rw 50–60** = woningscheidende wand goede uitvoering

**Bbl-eisen**:
- **Woningscheidende wand**: Rw ≥ 52 dB
- **Tussen verblijfsruimten in eigen woning**: ~40 dB
- **Glas in drukke straat**: vergt aparte berekening (gemeente)

### Vier typen geluid

#### 1. Luchtgeluid
**Wat is het?**
- Geluid dat door **lucht** wordt voortgeplant (stem, muziek, tv)
- **Isolatie via massa** (massawet): zwaardere wand = beter

**Voorbeelden**:
- Buurman die televisie kijkt
- Spraak in andere kamer
- Muziek door de muur

**Aanpak**:
- **Massa** verhogen (dik beton)
- **Massa-veer-massa-systeem** voor lichte wanden (twee bladen + spouw + isolatie)
- HR++ glas tegen verkeers­geluid

#### 2. Contactgeluid
**Wat is het?**
- Geluid dat via **vaste constructies** wordt voortgeplant (voetstappen, vallend object)
- **Reist via constructie** zelf — heel anders dan luchtgeluid
- Moeilijker te dempen — vergt **mechanische ontkoppeling**

**Voorbeelden**:
- Voetstappen van bovenburen door je plafond
- Vallend speelgoed
- Slaande deur

**Aanpak**:
- **Zwevende dekvloer**: dekvloer op isolatiedeken die mechanisch ontkoppelt
- **Hangplafond** los van constructie
- **Anti-trillingsrubbers** onder zware machines
- **Tapijt** dempt voetstappen op vloer (maar niet via constructie)

#### 3. Omloop­geluid (flank­geluid)
**Wat is het?**
- Geluid dat **omheen** een direct geluidsisolerende constructie loopt
- Niet door, maar **rond­heen** via flankerende constructie­delen

**Voorbeelden**:
- Geluid van bovenburen dat **via de buitengevel** naar je woning loopt (i.p.v. door de tussenvloer)
- Geluid via **gemeenschappelijke leiding­schacht**

**Aanpak**:
- **Doorlopende isolatie** voorkomen met **akoestische scheiding** in flankerende delen
- **Doosvormige constructie** waar elke woning gescheiden is (massa-veer-massa op ook flankeer-elementen)

#### 4. Flankerend geluid
**Wat is het?**
- Synoniem voor omloop­geluid
- Geluid dat indirect tussen ruimten reist via flank-constructies

**Bbl-eisen**:
- Houden rekening met **flank­geluid** in geluidsisolatie­berekening
- **Totale Rw' (apostrof)** = inclusief flank­geluid (echte praktijk-prestatie)

### Praktijk-tips
**Bij geluidsoverlast vanuit buren**:
- Identificeer **type geluid** (lucht / contact / omloop)
- Voor luchtgeluid: massa toevoegen
- Voor contactgeluid: ontkoppelen (vloer-/plafond­isolatie)
- Voor omloop­geluid: flankerende constructies bekijken (vaak structureel onmogelijk te verhelpen zonder grootschalige verbouwing)
      `.trim(),
    },

    {
      heading: '10 · Licht en daglicht­toetreding',
      toetstermCodes: ['D.3.13'],
      body: `
### Lichtbegrippen

#### Lumen (lm)
- **Lumen** = totaal uitgezonden **lichtstroom** van een bron
- **Per lamp** een specifieke lumen-waarde
- Voorbeelden:
  - 40 W gloeilamp = 450 lm
  - 9 W LED-lamp = 800 lm (equivalent 60 W gloeilamp)
  - Modern LED-spot = 200–500 lm

#### Lux (lx)
- **Lux** = lichtniveau **op een oppervlak**, in **lm/m²**
- **Voor mens­activiteiten** specifieke vereisten:
  - **Slaapkamer** (algemeen): 100 lux
  - **Woonkamer** (algemeen): 300 lux
  - **Bureau-/leesvlak**: 500 lux
  - **Werkplaats fijn werk**: 750–1.000 lux
  - **Operatietafel**: 10.000+ lux

#### Verlichtingssterkte
- **Synoniem voor lux**
- **Hoge verlichtingssterkte** = veel licht op oppervlak
- **Daglicht­factor**: % van buitenwaarde dat binnenkomt op specifiek punt

### Daglicht
**Daglicht** = natuurlijk licht van zon en hemel — gratis en gezond.

**Bbl-eisen daglicht (woningen)**:
- **Verblijfsruimte** (woonkamer, slaapkamer, hobby): minimaal **10 % daglichtvlak** t.o.v. vloeroppervlak
- **Verblijfsgebied** zonder daglicht­opening alleen onder voorwaarden

**Daglicht-kwaliteit**:
- **Diffuus daglicht** is comfortabel (gelijkmatig)
- **Direct zonlicht** geeft veel licht maar kan hinderen (verblinding, hitte)
- **Daglicht­factor** > 1 % is comfortabel; > 2 % zeer goed

**Maatregelen voor goede daglicht­toetreding**:
- **Grote ramen** in zuid- of zuid-oost-richting
- **Lichte muur- en plafondkleuren** (reflectie)
- **Dakramen** of dakkapellen op zolder
- **Glas­wanden** binnen
- **Lichtkoepel** of **lichtshaft** in donker midden van diep gebouw

### Kunstlicht
**Kunstlicht** = elektrisch licht — aanvulling op daglicht of voor avond/nacht.

**Soorten lampen**:
- **Gloeilamp** (uitgefaseerd 2012)
- **Halogeenlamp** (uitgefaseerd 2018)
- **CFL** spaarlamp (afgebouwd 2023, kwik bevat)
- **LED**: huidige standaard — laag verbruik, lange levensduur
- **TL-buis**: utiliteit, magazijnen

**Kleurtemperatuur** (Kelvin):
- **2.700 K** (warm-wit, oranje): woonkamer, slaapkamer
- **3.500–4.000 K** (neutraal-wit): keuken, badkamer
- **5.000–6.500 K** (koel-wit, daglicht): kantoor, werkplaats
- **CRI** (Color Rendering Index, 0–100): hoger = natuurlijker kleurweergave; > 80 acceptabel

**Verlichtingsplan voor woning**:
- **Algemeen licht** (basis verlichting)
- **Taak­licht** (boven bureau, aanrechtblad, leestafel)
- **Sfeer­licht** (decoratief, dimbar)
- **Buitenlicht** (entree, tuin, oprit)

### Lichthinder

#### Wat is lichthinder?
**Lichthinder** = ongewenst licht dat **buiten zijn beoogde gebied** komt en hinder veroorzaakt:
- **Voor bewoners** (slechte slaap, irritatie)
- **Voor natuur** (verstoring nachtdieren, lichtvervuiling)

**Soorten lichthinder**:
- **Verblinding** (direct in oog)
- **Lichtoverloop** (van buurpand op slaapkamer)
- **Hemel­glow** (stedelijk lichtkoepel boven steden)
- **Reflectie** van glanzende oppervlakken

**Bbl-eisen**:
- **Buitenverlichting** moet beperkt zijn in uitstraling (gericht naar beneden)
- **Tuinverlichting** met sensor + tijdklok
- **Reclame­borden** gerelateerd aan tijdstip en intensiteit

**Bij hinder van buurman**:
- Goede communicatie + sensor + afscherming
- Eventueel **klacht bij gemeente** (omgevings­wet)

### Voor de woning­koper
- **Oriëntatie ramen** vraagt aandacht: zuid = veel licht + warmte; noord = constant diffuus
- **Daglicht­factor** op werkvlak controleren (modern woonkamer minimaal 2 %)
- **Buitenlicht** in tuin: niet te fel + gericht
- **LED-verlichting** is energie­efficiënt + lange levensduur

### Voor renovatie
- **Dakraam** of **dakkapel** kan donker zolder verlichten
- **Glaspui** vergroot daglicht in woonkamer
- **Spiegels** op slimme plaats geven illusie van meer licht
- **Lichte kleuren** binnen verhogen daglicht-rendement
      `.trim(),
    },
  ],

  toetstermen: [
    {
      code: 'D.3.1',
      text: 'Legt elementaire bouwfysische begrippen uit: thermische schil, R-waarde, U-waarde, koudebrug, oppervlakte­condensatie, inwendige condensatie en invloed luchtspouw.',
      niveau: 'BT2',
      bloom: 'Begrip',
      metDrawing: true,
    },
    {
      code: 'D.3.2',
      text: 'Legt de invloeden van behaaglijkheid van een ruimte/gebouw uit: oppervlakte­temperatuur, luchttemperatuur, relatieve vochtigheid en ventilatie.',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
    {
      code: 'D.3.3',
      text: 'Benoemt de eigenschappen en toepassingen van dampremmende folie, dampopen folie en dampdichte folie.',
      niveau: 'BT2',
      bloom: 'Kennis',
      metDrawing: true,
    },
    {
      code: 'D.3.4',
      text: 'Verklaart de oorzaak van vochtproblemen en schimmels t.g.v. bouwfysische gebreken.',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
    {
      code: 'D.3.5',
      text: 'Benoemt dat er wettelijke eisen (Bbl) zijn voor minimale Rc-waardes en verwijst naar de juiste bron.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
    {
      code: 'D.3.6',
      text: 'Benoemt de verschillen tussen een koud-, warm- en omgekeerd dak.',
      niveau: 'BT2',
      bloom: 'Kennis',
      metDrawing: true,
    },
    {
      code: 'D.3.7',
      text: 'Benoemt thermische isolatie­maatregelen en relateert deze aan bepaalde bouwperioden: het plaatsen van isolatie i.s.m. vochtwerende-/dampremmende laag, spouwvulling, gevelbekleding en dubbele beglazing.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
    {
      code: 'D.3.8',
      text: 'Benoemt de eigenschappen en toepassingen van de in D.3.7 genoemde isolatie­materialen.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
    {
      code: 'D.3.9',
      text: 'Legt de positieve en negatieve consequenties van het energetisch verbeteren (na-isoleren) van bestaande gebouwen uit.',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
    {
      code: 'D.3.10',
      text: 'Benoemt naast de BENG-eisen ook de 3 indicatoren van BENG: energiebehoefte, primair fossiel energieverbruik en aandeel hernieuwbare energie.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
    {
      code: 'D.3.11',
      text: 'Verwoordt bouwfysische begrippen m.b.t. geluid: frequenties, dB, dB(A), nagalmtijd, resonantie, suskasten, ankerloze spouwmuur en geluidsisolatie.',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
    {
      code: 'D.3.12',
      text: 'Legt de verschillen van luchtgeluid, contactgeluid, omloop­geluid en flankerend geluid uit.',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
    {
      code: 'D.3.13',
      text: 'Benoemt elementaire begrippen m.b.t. licht en lichttoelating: lumen, lux, daglicht, kunstlicht, verlichtingssterkte en lichthinder.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
  ],

  questions: [
    // D.3.1 (4)
    {
      id: 'D3-1-a',
      toetstermCode: 'D.3.1',
      type: 'mc',
      prompt: 'Wat is de **thermische schil** van een gebouw?',
      options: [
        'De buitenste laag verf',
        'De complete buitenste isolatie­laag rond een verwarmde ruimte',
        'Een gespecialiseerd installatie­onderdeel',
        'De binnenwand',
      ],
      correctIndex: 1,
      explanation:
        'Thermische schil = de complete buitenste isolatie­laag rond de verwarmde ruimten — alle buitenwanden, dak, vloeren en kozijnen + ramen die de verwarmde binnen­ruimte scheiden van de koude buitenwereld. Bepaalt grotendeels: (1) energie­zuinigheid van het gebouw; (2) comfort binnen door warmere binnenoppervlakken; (3) kans op condens en schimmel. Zwakke plekken: koudebruggen + naden.',
    },
    {
      id: 'D3-1-b',
      toetstermCode: 'D.3.1',
      type: 'mc',
      prompt: 'Wat is een **koudebrug**?',
      options: [
        'Een onverwarmde brug over een rivier',
        'Plaats in de constructie waar warmte makkelijker doorheen lekt dan in de omliggende isolatie',
        'Een verbinding tussen koude wateren',
        'Een ondergrondse warmte­bron',
      ],
      correctIndex: 1,
      explanation:
        'Koudebrug = plaats in constructie waar warmte makkelijker door lekt dan in omliggende isolatie. Oorzaken: doorgaande betonnen vloer naar buiten (balkon), onvoldoende isolatie­dikte lokaal, onderbreking van isolatie­laag (kozijn, leiding­doorvoer), hoekverbindingen. Gevolgen: lokaal koudere binnenoppervlak → oppervlakte­condensatie + schimmel; energie­verlies; comfort­verlies. Voorbeeld: balkon met **isokorf** (RVS-staaf­wapening + thermisch isolerend kunststof tussenstuk) onderbreekt koudebrug.',
    },
    {
      id: 'D3-1-c',
      toetstermCode: 'D.3.1',
      type: 'mc',
      prompt: 'Wat is het verschil tussen **R-waarde** en **U-waarde**?',
      options: [
        'Synoniemen',
        'R-waarde = warmte­weerstand (m²·K/W, hoger = beter isolerend); U-waarde = warmte­doorgangs­coëfficiënt (W/m²·K, lager = beter isolerend)',
        'R is voor binnen, U voor buiten',
        'R is in Celsius, U in Kelvin',
      ],
      correctIndex: 1,
      explanation:
        'R en U zijn omgekeerd evenredig: U = 1/R. **R-waarde** (m²·K/W) = warmteweerstand — hoger getal = beter isolerend; standaard voor isolatie­lagen en complete constructies (Rc). **U-waarde** (W/m²·K) = warmte­doorgangs­coëfficiënt — lager getal = beter isolerend; standaard voor ramen + kozijnen (Uw). Bbl-minimum nieuwbouw: buitenmuur Rc ≥ 4,7 en kozijn+glas Uw ≤ 1,65. HR++ glas heeft U ≈ 1,1; triple glas ~0,8; enkel glas ~5,8.',
    },
    {
      id: 'D3-1-d',
      toetstermCode: 'D.3.1',
      type: 'mc',
      prompt: 'Wat is **oppervlakte­condensatie**?',
      options: [
        'Vocht in de spouw',
        'Wanneer warme, vochtige binnenlucht in contact komt met een koud binnenoppervlak (raam, koudebrug, slecht geïsoleerde muur), wordt afgekoeld onder dauwpunt → waterdamp condenseert op het oppervlak (zichtbaar als druppels of vochtkring)',
        'Vocht in het beton',
        'Het weer op de grond',
      ],
      correctIndex: 1,
      explanation:
        'Oppervlakte­condensatie ontstaat wanneer warme, vochtige binnenlucht (bv. 22 °C, 60 % RV → dauwpunt ~14 °C) in contact komt met een koud oppervlak onder dat dauwpunt — een enkel raamglas of slecht geïsoleerde wand kan in winter < 14 °C zijn → damp condenseert op het oppervlak. Zichtbaar als druppels (raam) of vochtkring (wand achter kast). Leidt vaak tot schimmel. Oplossing: warmer oppervlak (betere isolatie / HR-glas) of lagere RV (betere ventilatie). Niet te verwarren met inwendige condensatie (in de constructie).',
    },

    // D.3.2 (3)
    {
      id: 'D3-2-a',
      toetstermCode: 'D.3.2',
      type: 'mc',
      prompt: 'Wat is meer bepalend voor het **comfort­gevoel** in een ruimte: luchttemperatuur of oppervlakte­temperatuur?',
      options: [
        'Alleen luchttemperatuur',
        'Operative temperatuur = (luchttemperatuur + stralings­temperatuur) / 2',
        'Geen verschil',
        'Alleen oppervlakte­temperatuur',
      ],
      correctIndex: 1,
      explanation:
        'Voor comfort telt **operative temperatuur** = (luchttemperatuur + stralings­temperatuur van oppervlakken) / 2. Oppervlakte­temperatuur is onderschat maar minstens zo belangrijk als luchttemperatuur. Voorbeeld: 20 °C lucht + 14 °C koude wand = 17 °C operative — voelt koud. 20 °C lucht + 22 °C warme vloer (vloerverwarming) = 21 °C operative — aangenaam. Goede isolatie + HR++ glas + vloerverwarming verhogen oppervlakte­temperaturen → meer comfort bij dezelfde verwarming.',
    },
    {
      id: 'D3-2-b',
      toetstermCode: 'D.3.2',
      type: 'mc',
      prompt: 'Welke **relatieve luchtvochtigheid** is comfortabel in een woning?',
      options: [
        '10–20 %',
        '40–60 %',
        '80–95 %',
        'Hoger is altijd beter',
      ],
      correctIndex: 1,
      explanation:
        'Comfort­zone relatieve vochtigheid: 40–60 % RV. Te droog (< 30 %): irritatie slijmvliezen, statische elektriciteit, droge ogen. Te vochtig (> 70 %): condens op koude oppervlakken, schimmel­risico, slecht gevoel. RV wordt beïnvloed door mensen (~50 g/u per persoon), koken, douchen, was drogen — en uitgevoerd door ventilatie. Verwarming verlaagt RV (warme lucht bevat meer vocht bij gelijke absolute vochtigheid).',
    },
    {
      id: 'D3-2-c',
      toetstermCode: 'D.3.2',
      type: 'mc',
      prompt: 'Een **richtwaarde voor CO₂** in een verblijfsruimte is:',
      options: [
        'Maakt niet uit',
        '< 1.200 ppm',
        'Maximaal 50 ppm',
        '> 5.000 ppm acceptabel',
      ],
      correctIndex: 1,
      explanation:
        'Richtlijn binnenklimaat: CO₂ < 1.200 ppm. Buitenlucht ~420 ppm. Boven 1.200 ppm: concentratie­vermogen daalt, geur (mens-lucht), hoofdpijn, slaapkwaliteit verslechtert. Slaapkamer met dichte deur na een nacht kan 2.000+ ppm bereiken — vandaar belang van mechanische ventilatie + WTW in luchtdichte moderne woningen. Slimme thermostaten/ventilatoren met CO₂-sensor regelen automatisch.',
    },

    // D.3.3 (3)
    {
      id: 'D3-3-a',
      toetstermCode: 'D.3.3',
      type: 'mc',
      prompt: 'Aan welke zijde van de isolatie wordt de **dampremmende folie** geplaatst?',
      options: [
        'Aan de buitenzijde (koude zijde)',
        'Aan de warme (binnen)zijde',
        'Maakt niet uit',
        'In het midden',
      ],
      correctIndex: 1,
      explanation:
        'Dampremmende folie altijd aan de **warme (binnen)zijde** van de isolatie. Functie: houdt warme, vochtige binnenlucht tegen voordat deze de koudere isolatie en constructie kan binnendringen → voorkomt inwendige condensatie. Aan de koude (buiten)zijde komt juist een **dampopen folie** die regen tegenhoudt maar damp van binnenuit kan ontsnappen. Standaard moderne constructie-volgorde: binnen → dampremmer → isolatie → dampopen folie → buiten.',
    },
    {
      id: 'D3-3-b',
      toetstermCode: 'D.3.3',
      type: 'mc',
      prompt: 'Wat is de functie van een **dampopen folie** aan de buitenzijde van de isolatie?',
      options: [
        'Volledig dampdicht maken',
        'Doorlaten van waterdamp van binnen naar buiten (waterdamp kan ontsnappen) terwijl regenwater wordt tegengehouden',
        'Isolatie versterken',
        'Geluidsdemping',
      ],
      correctIndex: 1,
      explanation:
        'Dampopen folie aan koude zijde: laat waterdamp van binnen naar buiten ontsnappen (microporiën), maar houdt regenwater tegen. Sd-waarde 0,02–0,3 m (zeer dampopen). Functie: (1) eventueel doorgedrongen damp kan ontsnappen → geen vochtophoping in isolatie; (2) wind- en regendicht houden van isolatie; (3) bescherming tegen cold air infiltration. Toepassing: onder dakbedekking, buiten gevelisolatie achter gevelbekleding, mandragende folie onder dakpannen.',
    },
    {
      id: 'D3-3-c',
      toetstermCode: 'D.3.3',
      type: 'mc',
      prompt: 'Wat is **Sd-waarde** in damp-folies?',
      options: [
        'Slijtage-duur',
        'Equivalent luchtspouw',
        'Een type bouw­vergunning',
        'Snelheid van diffusie in mm/s',
      ],
      correctIndex: 1,
      explanation:
        'Sd-waarde (Sicker­distanz) = equivalente luchtspouw, hoeveel meter stilstaande lucht het folie equivalent is in damp­weerstand. Onderverdeling: open weefsel < 0,01 m; dampopen folie 0,02–0,3 m (sterk dampopen); dampremmend 2–30 m (gedeeltelijk dampdicht); aluminium­folie > 1.500 m (volledig dampdicht); beton 200 mm ~150 m. Hoge Sd = veel weerstand. Belangrijk voor bouwfysische berekening (Glaser-diagram).',
    },

    // D.3.4 (3)
    {
      id: 'D3-4-a',
      toetstermCode: 'D.3.4',
      type: 'mc',
      prompt: 'In een oudere woning verschijnt **vocht onderaan de muur** (sokkel). De meest waarschijnlijke oorzaak is:',
      options: [
        'Slecht schilderwerk',
        'Optrekkend grondvocht',
        'Te veel verwarming',
        'Lekkage in het dak',
      ],
      correctIndex: 1,
      explanation:
        'Vocht onderaan muur in oudere woning is klassieke aanduiding voor **optrekkend grondvocht**: vocht uit de grond stijgt door capillaire werking in metselwerk en beton. Vooral in woningen < 1950 zonder DPC-laag (Damp Proof Course). Tekenen: zout-uitslag (witte plekken op muur — vocht trekt zouten naar oppervlak), vochtige sokkel, schimmel onderaan muur. Oplossingen: DPC-injectie (waterafstotende vloeistof), elektro-osmose, drainage rond huis, in ernstige gevallen muur gedeeltelijk vernieuwen.',
    },
    {
      id: 'D3-4-b',
      toetstermCode: 'D.3.4',
      type: 'mc',
      prompt: 'Vocht­problemen achter een **grote kast** tegen koude wand: oorzaak en aanpak?',
      options: [
        'Een lekkage achter de kast — alleen lokaal probleem',
        'Oppervlakte­condensatie: koude wand + onvoldoende luchtcirculatie achter kast → temperatuur achter kast valt onder dauwpunt → condens + schimmel. Aanpak: kast iets weg van wand zetten (luchtcirculatie), wand beter isoleren, ventilatie verbeteren',
        'De kast veroorzaakt het vocht',
        'Geen probleem',
      ],
      correctIndex: 1,
      explanation:
        'Klassieke vocht­situatie: koude buitenmuur + grote kast ervoor → geen luchtcirculatie achter kast → oppervlakte­temperatuur achter kast valt onder dauwpunt → condens op de wand → schimmel (vaak zichtbaar als zwarte vlekken). Aanpak combinatie: (1) kast 5–10 cm van wand zetten voor luchtcirculatie; (2) wand beter isoleren (binnen- of buiten-isolatie); (3) ventilatie verbeteren (afzuig in vertrek); (4) bestaande schimmel reinigen met schimmel­doder. Niet alleen schimmel wegpoetsen — komt terug.',
    },
    {
      id: 'D3-4-c',
      toetstermCode: 'D.3.4',
      type: 'mc',
      prompt: 'Welke schimmel in een woning is **berucht en gevaarlijk** wegens snelle uitbreiding via metselwerk?',
      options: [
        'Aspergillus (zwarte schimmel)',
        'Huiszwam (Serpula lacrymans)',
        'Penicillium (de blauwe)',
        'Geen enkele schimmel is berucht',
      ],
      correctIndex: 1,
      explanation:
        'Huiszwam (Serpula lacrymans) is de meest beruchte houthapper-schimmel. Vormt witte wattenachtige strengen die later citroengeel/grijs verkleuren, en zich verspreidt via strengen door pleister, metselwerk en isolatie. Trekt zelf vocht aan uit aangrenzend materiaal. Bestrijding zeer kostbaar — alle aangetaste delen + omliggende materialen moeten weg. Voorkomen: goede ventilatie, geen vocht in slecht bereikbare ruimten. Komt voor in vochtige, slecht geventileerde ruimten (kelders, kruipruimten, slecht gerenoveerde houten balklagen).',
    },

    // D.3.5 (2)
    {
      id: 'D3-5-a',
      toetstermCode: 'D.3.5',
      type: 'mc',
      prompt: 'Volgens **Bbl** is de minimale Rc-waarde voor een **buitenmuur** bij nieuwbouw:',
      options: [
        'Rc ≥ 2,5 m²K/W',
        'Rc ≥ 4,7 m²K/W',
        'Rc ≥ 6,3 m²K/W',
        'Geen eis',
      ],
      correctIndex: 1,
      explanation:
        'Bbl-eis nieuwbouw 2023: buitenmuur Rc ≥ 4,7 m²·K/W. Vergelijk: beganegrond­vloer Rc ≥ 3,7; dak Rc ≥ 6,3 (zwaarste isolatie — bovenste oppervlak verliest meeste warmte); kozijn+glas Uw ≤ 1,65 W/m²·K. Voor BENG-woning vaak hoger (5+); voor passief­huis 8–10. Bestaande bouw heeft lagere eisen bij verbouwing — meestal Bbl-eisen voor het te wijzigen deel.',
    },
    {
      id: 'D3-5-b',
      toetstermCode: 'D.3.5',
      type: 'mc',
      prompt: 'Waar zijn de **Bbl-eisen** voor minimale Rc-waarden te vinden?',
      options: [
        'Op Wikipedia',
        'In het Besluit bouwwerken leefomgeving',
        'Op de gemeentewebsite',
        'In het kadaster',
      ],
      correctIndex: 1,
      explanation:
        'Bbl = Besluit bouwwerken leefomgeving, sinds 1 januari 2024 in werking (vervangt Bouwbesluit 2012). Officiële tekst op **wetten.overheid.nl** (officiële wettenbank van overheid) en **iplo.nl** (Informatiepunt Leefomgeving — uitleg en verwijzing). Voor specifieke berekeningen wordt vaak een EPB-coördinator of bouwfysisch adviseur ingeschakeld die de berekening voor de vergunning­procedure verzorgt. Indien Bbl tekortschiet, kunnen aanvullende eisen via gemeente of provincie gelden.',
    },

    // D.3.6 (2)
    {
      id: 'D3-6-a',
      toetstermCode: 'D.3.6',
      type: 'mc',
      prompt: 'Wat is een **omgekeerd dak**?',
      options: [
        'Een dak met de pannen omgekeerd',
        'Isolatie BOVEN de dakbedekking (XPS-platen op bitumen/EPDM) met ballast (grind of drainage­tegels) erbovenop',
        'Een dak met negatieve helling',
        'Een dak waar regen omhoog stroomt',
      ],
      correctIndex: 1,
      explanation:
        'Omgekeerd dak (inversed roof / IRMA): isolatie zit BOVEN de dakbedekking. Opbouw van binnen naar buiten: dakbeschot → dampremmer → bitumen/EPDM-dakbedekking → XPS-isolatie (water­bestendig + drukvast) → ballast (grind of drainage-tegels). Voordeel: dakbedekking beschermd tegen UV en mechanische schade → 2–3× langere levensduur. Voor renovatie van platte daken zonder vervanging van bestaande dakbedekking. Vergelijk: kouddak (isolatie binnen + geventileerd) en warmdak (isolatie buiten zonder spouw).',
    },
    {
      id: 'D3-6-b',
      toetstermCode: 'D.3.6',
      type: 'mc',
      prompt: 'Het belangrijkste verschil tussen **koud dak** en **warm dak** is:',
      options: [
        'Koud dak is in winter, warm dak in zomer',
        'Koud dak: isolatie binnen + geventileerde luchtspouw (dakbeschot blijft koud, klassiek hellend dak). Warm dak: isolatie aan buitenzijde + geen spouw (dakbeschot blijft warm, modern plat + hellend dak)',
        'Koud dak is goedkoper',
        'Synoniemen',
      ],
      correctIndex: 1,
      explanation:
        'Koud dak: isolatie aan binnenzijde van dakbeschot + geventileerde luchtspouw tussen isolatie en dakbedekking → dakbeschot blijft koud. Klassiek hellend dak met geïsoleerde zolder. Warm dak: isolatie aan buitenzijde van dakbeschot, geen geventileerde spouw, dakbedekking direct op isolatie → dakbeschot warm. Standaard moderne platte daken én moderne nieuwbouw hellende daken. Warm dak biedt betere isolatie­continuïteit en geen ventilatie­risico, maar vergt meer materiaal.',
    },

    // D.3.7 (2)
    {
      id: 'D3-7-a',
      toetstermCode: 'D.3.7',
      type: 'mc',
      prompt: 'Een woning uit **1965** met enkel glas + ongeïsoleerde spouw: welke isolatie­maatregelen zijn aan te bevelen?',
      options: [
        'Niets doen — woning is goed',
        'Spouw na-isolatie (steen-/glaswol-vlokken of PUR-schuim — kosten ~€ 2.000), HR++ glas vervanging, dak na-isolatie, vloer-isolatie (kruipruimte) — pakket waarmee de woning naar label A kan komen',
        'Alleen kleine renovaties',
        'Alleen verwarming verbeteren',
      ],
      correctIndex: 1,
      explanation:
        'Woning uit 1965 met enkel glas + ongeïsoleerde spouw heeft veel ruimte voor isolatie­verbetering. Aanbevolen pakket: (1) **spouw na-isolatie** met steen-/glaswol-vlokken (~€ 2.000) of PUR-schuim (beter isolatie, duurder); (2) **HR++ glas vervanging** (€ 200–400 per raam); (3) **dak na-isolatie** (bij ongebruikte vliering: vloer isoleren; bij verblijfsruimte: dakvlak isoleren); (4) **vloer-isolatie** in kruipruimte met EPS-platen. Resultaat: label E → A mogelijk, 40–60 % energie­besparing. Investering ~€ 25.000–40.000, terugverdientijd 8–15 jaar.',
    },
    {
      id: 'D3-7-b',
      toetstermCode: 'D.3.7',
      type: 'mc',
      prompt: 'Bij **binnen­isolatie van een vooroorlogs pand** is welke aandachts­punt cruciaal?',
      options: [
        'De kleur van de muur',
        'Dampremmende folie aan warme (binnen)zijde',
        'Geen verschil met andere isolatie',
        'Alleen de dikte telt',
      ],
      correctIndex: 1,
      explanation:
        'Bij binnen­isolatie van vooroorlogs pand: de oude buitenwand staat in koude lucht (winter) → bij verkeerde uitvoering kan damp uit binnenlucht door de nieuwe isolatie heen naar de koude oude wand reizen → daar condenseren → vocht, schimmel, hout/wandschade. **Cruciaal: dampremmende folie aan warme (binnen)zijde** van de isolatie. Zorgvuldige plaatsing zonder beschadiging (nagels, doorvoeren, naden) is essentieel. Alle naden goed afkitten/aftapen. Buiten­isolatie is bouwfysisch beter (geen vochtprobleem), maar bij monumenten of welstand­bezwaren niet altijd mogelijk.',
    },

    // D.3.9 (2)
    {
      id: 'D3-9-a',
      toetstermCode: 'D.3.9',
      type: 'mc',
      prompt: 'Een **belangrijk risico** bij na-isolatie zonder ventilatie­verbetering is:',
      options: [
        'De woning wordt te koud',
        'Door luchtdicht maken (HR++ glas, kit, dampfolie) zonder mechanische ventilatie ontstaat slechte luchtkwaliteit: hoge CO₂, hoge RV, condensatie­problemen, schimmel',
        'Geen risico\'s',
        'De gevel wordt te zwaar',
      ],
      correctIndex: 1,
      explanation:
        'Klassieke fout bij na-isolatie: alleen isoleren zonder ventilatie aan te passen. De oude woning was tochtig — natuurlijke ventilatie via kieren — wat slechte energie­zuinigheid gaf maar wel goede luchtkwaliteit. Bij vervangen van tochtige enkelglas-ramen door luchtdicht HR++ + dampremmer + kit: woning wordt luchtdicht → CO₂ stijgt boven 1.200 ppm, RV boven 70 %, condensatie­problemen, schimmel. Gelijktijdig ventilatie­systeem (B, C of D) installeren is essentieel. Modern: Systeem D met WTW voor maximale energie­zuinigheid + luchtkwaliteit.',
    },
    {
      id: 'D3-9-b',
      toetstermCode: 'D.3.9',
      type: 'mc',
      prompt: 'Een **positief effect** van goede na-isolatie voor de woning­waarde:',
      options: [
        'Geen waarde-impact',
        'Energie­label stijgt (E → A mogelijk); marktwaarde woningen met label A is 5–10 % hoger dan label E; betere verkoopbaarheid; soms subsidies + BTW-vrijstelling',
        'Lagere waarde door investering',
        'Alleen voor kantoren',
      ],
      correctIndex: 1,
      explanation:
        'Na-isolatie verhoogt woning­waarde via meerdere mechanismen: (1) **energie­label** stijgt (E → A mogelijk met goed pakket); (2) **marktwaarde** woningen met label A is statistisch 5–10 % hoger dan label E; (3) **verkoopbaarheid** beter (kopers willen energie­zuinige woning); (4) **subsidies** (ISDE, gemeente) verlagen netto-investering; (5) **BTW-vrijstelling** op zonnepanelen; (6) **operationele kosten** lager → hogere financiële aantrekkelijkheid. Totale terug­verdientijd 8–15 jaar bij goed plan.',
    },

    // D.3.10 (2)
    {
      id: 'D3-10-a',
      toetstermCode: 'D.3.10',
      type: 'mc',
      prompt: 'Wat zijn de **drie indicatoren van BENG**?',
      options: [
        'Glas, dak, muur',
        'BENG 1 = maximale energie­behoefte (kWh/m²/jr',
        'Verwarming, koeling, ventilatie',
        'Beton, hout, staal',
      ],
      correctIndex: 1,
      explanation:
        'BENG = Bijna Energie­Neutraal Gebouw, verplicht voor nieuwbouw sinds 1 januari 2021. Drie aparte indicatoren: **BENG 1** (energie­behoefte) — hoeveel kWh/m²/jr nodig voor verwarming/koeling, hangt af van schilkwaliteit (isolatie, glas, luchtdicht­heid); **BENG 2** (primair fossiel) — werkelijk verbruik minus eigen opwekking; **BENG 3** (hernieuwbaar %) — min. 40 % uit hernieuwbare bronnen (zonnepanelen, warmtepomp, zonneboiler, biomassa, warmtenet). Alle drie moeten behaald worden voor vergunning.',
    },
    {
      id: 'D3-10-b',
      toetstermCode: 'D.3.10',
      type: 'mc',
      prompt: 'BENG-indicator **1** (energie­behoefte) heeft als doel:',
      options: [
        'Zonnepanelen verplicht maken',
        'Schilkwaliteit garanderen',
        'Warmtepomp verplicht maken',
        'CO₂-uitstoot beperken',
      ],
      correctIndex: 1,
      explanation:
        'BENG 1 (energie­behoefte): onafhankelijk van energiebron — hoeveel kWh per m² bruto vloeroppervlak per jaar de woning nodig heeft om binnen 18–24 °C te blijven. Bepaald door schilkwaliteit (isolatie Rc-waarden + HR++/triple glas + luchtdicht­heid + thermische bruggen). Eisen vrijstaand ≤ 55 kWh/m²/jr, tussenwoning ≤ 35, galerij­woning ≤ 30. Doel: een goed geïsoleerd gebouw eerst, dan pas opwekking. BENG 2 + 3 voegen installaties + hernieuwbaar toe.',
    },

    // D.3.11 (3)
    {
      id: 'D3-11-a',
      toetstermCode: 'D.3.11',
      type: 'mc',
      prompt: 'Wat is **dB(A)**?',
      options: [
        'Een merknaam voor geluidsmeter',
        'A-gewogen decibel',
        'Een hogere kwaliteit dB',
        'Decibel voor automatische metingen',
      ],
      correctIndex: 1,
      explanation:
        'dB(A) = A-gewogen decibel. Het menselijk oor is niet even gevoelig voor alle frequenties — laag (< 200 Hz) en hoog (> 6 kHz) horen we minder goed dan midden (1–4 kHz waar spraak ligt). Het A-filter weegt frequenties zodat de meting overeenkomt met menselijke perceptie. **Standaard­eenheid voor geluids­norm en wetgeving** (Bbl, Wet geluidhinder). Verschil met dB: rauwe dB is fysisch geluidsniveau zonder weging; dB(A) is wat de mens ervaart.',
    },
    {
      id: 'D3-11-b',
      toetstermCode: 'D.3.11',
      type: 'mc',
      prompt: 'Wat is een **suskast**?',
      options: [
        'Een kledingkast',
        'Ventilatie­voorziening met geluidsdemping ingebouwd',
        'Een type isolatie',
        'Een verwarmings­toestel',
      ],
      correctIndex: 1,
      explanation:
        'Suskast (acoustic louvre / sound-attenuating ventilator) is een ventilatie­voorziening met geluidsdemping. Plaatsing: in gevel of boven raam in slaapkamer of woonkamer van woningen in drukke omgevingen. Bevat **akoestisch rooster** + dempers die 30–40 dB demping geven, terwijl ventilatie blijft functioneren. Toepassing: woningen langs drukke wegen, spoorlijnen, vliegvelden. Bij Bbl-eisen kunnen suskasten verplicht zijn voor woningen in zone met hoge geluidsbelasting. Modern alternatief: balansventilatie zonder roosters.',
    },
    {
      id: 'D3-11-c',
      toetstermCode: 'D.3.11',
      type: 'mc',
      prompt: 'Wat is een **ankerloze spouwmuur**?',
      options: [
        'Een muur zonder fundering',
        'Spouwmuur zonder doorlopende ankers tussen binnen- en buitenspouwblad',
        'Een dunne muur zonder versterking',
        'Een muur die niet aan het dak vastzit',
      ],
      correctIndex: 1,
      explanation:
        'Ankerloze spouwmuur: spouwmuur zonder doorlopende ankers tussen binnen- en buitenspouwblad. Doorlopende ankers zouden geluid via de constructie van de ene wand naar de andere overdragen. Door weglaten verbetert geluidsisolatie ~5 dB. Klassieke toepassing: woningscheidende wand in rijwoningen — twee gescheiden bakstenen wanden met spouw + isolatie. Modern alternatief: slanke ankers met rubbermantel voor geluid­demping. Massa-veer-massa-principe.',
    },

    // D.3.12 (2)
    {
      id: 'D3-12-a',
      toetstermCode: 'D.3.12',
      type: 'mc',
      prompt: 'Het verschil tussen **luchtgeluid** en **contactgeluid** is:',
      options: [
        'Luchtgeluid is altijd luider',
        'Luchtgeluid: door lucht voortgeplant (stem, muziek, tv), gedempt door massa (massawet). Contactgeluid: via vaste constructies voortgeplant (voetstappen, vallend voorwerp), reist in constructie zelf',
        'Synoniemen',
        'Contactgeluid is voor binnen, luchtgeluid voor buiten',
      ],
      correctIndex: 1,
      explanation:
        'Luchtgeluid plant zich voort door lucht (stem, muziek, tv). Volgt **massawet**: hoe zwaarder de wand (kg/m²), hoe beter de demping. Beton (~2.400 kg/m³) inherent goed. Contactgeluid plant zich voort via vaste constructies (voetstappen, vallend voorwerp, deur dichtslaan). Reist in materiaal zelf — zwaardere wand helpt nauwelijks. **Vergt mechanische ontkoppeling**: zwevende dekvloer (cement-/anhydriet op isolatiedeken), hangplafond los van constructie, anti-trillingsrubbers. Bbl onderscheidt beide met aparte normen.',
    },
    {
      id: 'D3-12-b',
      toetstermCode: 'D.3.12',
      type: 'mc',
      prompt: 'Wat is **omloop­geluid** (= flankerend geluid)?',
      options: [
        'Geluid van een verkeerd­rondrijdende auto',
        'Geluid dat omheen een geluidsisolerende constructie loopt via flankerende constructie­delen',
        'Geluid dat van buiten komt',
        'Een type ventilatie',
      ],
      correctIndex: 1,
      explanation:
        'Omloop­geluid (= flankerend geluid) is geluid dat NIET direct door een geluidsisolerende constructie reist, maar er OMHEEN via flankerende delen. Voorbeeld: geluid van bovenburen reist via tussenvloer (direct), maar ook via buitengevel (zijwaarts naar beneden, en dan in je woning aan de gevelzijde). Bbl-eisen houden rekening met flank­geluid via **Rw\' (apostrof)** — werkelijke prestatie incl. flank. Bij hoge geluidsoverlast vaak structureel onmogelijk te verhelpen zonder grootschalige verbouwing.',
    },

    // D.3.13 (2)
    {
      id: 'D3-13-a',
      toetstermCode: 'D.3.13',
      type: 'mc',
      prompt: 'Wat is het verschil tussen **lumen** en **lux**?',
      options: [
        'Synoniemen',
        'Lumen = totaal uitgezonden lichtstroom van een bron (per lamp); Lux = lichtniveau op een oppervlak (lm/m²); een lamp met 800 lm op 1 m² geeft 800 lux op het oppervlak, op 4 m² ~200 lux',
        'Lumen is voor LED, lux voor gloeilamp',
        'Lumen meet binnen, lux meet buiten',
      ],
      correctIndex: 1,
      explanation:
        'Lumen (lm) = totaal uitgezonden lichtstroom van een lamp (per lamp specificatie). 9 W LED ≈ 800 lm. Lux (lx) = lichtniveau op een oppervlak (lm/m²) — afhankelijk van afstand en oppervlak. Voor mens­activiteiten zijn vereisten in **lux**: slaapkamer ~100 lux, woonkamer ~300 lux, bureau-/leesvlak ~500 lux, werkplaats fijn werk 750–1.000 lux, operatietafel 10.000+ lux. Goede verlichtingsontwerp combineert algemeen licht + taak­licht + sfeer­licht.',
    },
    {
      id: 'D3-13-b',
      toetstermCode: 'D.3.13',
      type: 'mc',
      prompt: 'Welke **Bbl-eis** geldt voor daglicht in een woonkamer?',
      options: [
        'Geen eis',
        'Minimaal 10 % daglicht­vlak t.o.v. vloeroppervlak',
        '50 % glasoppervlak',
        '1 % daglicht­factor',
      ],
      correctIndex: 1,
      explanation:
        'Bbl-eis daglicht voor verblijfsruimte (woonkamer, slaapkamer, hobby-/werkruimte): minimaal **10 % daglicht­vlak ten opzichte van vloeroppervlak**. Dus een woonkamer van 30 m² vergt minimaal 3 m² daglicht­vlak (raam). Daglicht­factor: percentage van buitenwaarde dat binnenkomt op specifiek punt; > 1 % comfortabel, > 2 % zeer goed. Verblijfs­gebied zonder daglicht­opening is alleen onder voorwaarden toegestaan (bv. werkruimten in industrie met kunst­licht). Bij Bbl-conform­verklaring berekent een EPB-coördinator dit.',
    },
  ],

  terms: [
    {
      term: 'Bouwfysica',
      definition:
        'Vakgebied dat warmte, vocht, licht, geluid en luchtkwaliteit in gebouwen bestudeert.',
    },
    {
      term: 'Warmte­geleiding (λ)',
      definition:
        'Eigenschap van een materiaal om warmte te transporteren (W/m·K); lager = beter isolerend.',
    },
    {
      term: 'Warmte­capaciteit',
      definition:
        'Vermogen om warmte op te slaan (J/kg·K); steen/beton hoog, hout laag — bepaalt thermische massa.',
    },
    {
      term: 'Thermische massa',
      definition:
        'Vermogen van een gebouw om temperatuur­schommelingen te dempen; zware constructie = stabieler binnenklimaat.',
    },
    {
      term: 'Koudebrug',
      definition:
        'Lokaal slecht geïsoleerd punt waardoor warmte versneld wegstroomt — risico op condens en schimmel.',
    },
    {
      term: 'Diffusie',
      definition:
        'Doorgaande verplaatsing van waterdamp door een constructie van hoge naar lage damp­spanning.',
    },
    {
      term: 'Damp­dichtheid (sd-waarde)',
      definition:
        'Diffusie-weerstand uitgedrukt als equivalent laag lucht (m) — hoog = damp­dicht, laag = damp­open.',
    },
    {
      term: 'Condensatie',
      definition:
        'Vormen van waterdruppels wanneer lucht onder dauwpunt afkoelt — op koudebrug of in constructie­opbouw.',
    },
    {
      term: 'Dauwpunt',
      definition:
        'Temperatuur waaronder waterdamp in lucht gaat condenseren; afhankelijk van vochtgehalte en temperatuur.',
    },
    {
      term: 'Relatieve luchtvochtigheid',
      definition:
        'Percentage van verzadiging — comfortzone 40-60%; > 70% schimmel­risico.',
    },
    {
      term: 'Geluid (dB)',
      definition:
        'Druk­variatie in lucht uitgedrukt in decibel — logaritmisch; +10 dB = ervaren als 2× zo luid.',
    },
    {
      term: 'Geluid­wering (RA)',
      definition:
        'Vermogen van een wand om luchtgeluid te dempen — Bbl-eis woningscheiding ≥ 52 dB.',
    },
    {
      term: 'Nagalmtijd',
      definition:
        'Tijd waarin geluid in een ruimte uitsterft (T60); te lang = slechte spraakverstaanbaarheid.',
    },
    {
      term: 'Daglichtfactor',
      definition:
        'Fractie van buitenlicht dat een plek op werkblad binnen­bereikt; norm 2% voor woon-/werkruimten.',
    },
    {
      term: 'Tochtgevoel',
      definition:
        'Hinderlijke luchtbeweging bij comfortklimaat; ontstaat bij grote lokale temperatuur­verschillen of hoge luchtsnelheid (> 0,2 m/s).',
    },
  ],

  games: [
    {
      id: 'D3-gapfill-1',
      type: 'gapfill',
      title: 'Bouwfysische basis — vul aan',
      text:
        'De warmteweerstand van een constructie wordt aangegeven met de {{Rc}}-waarde — hoe hoger, hoe beter geïsoleerd. ' +
        'Voor ramen + kozijnen gebruikt men de {{U}}-waarde — hoe lager, hoe beter. ' +
        'Een plaats in de constructie waar warmte makkelijker doorheen lekt heet een {{koudebrug}}. ' +
        'Een dampremmende folie hoort aan de {{warme}} zijde van de isolatie; een dampopen folie aan de {{koude}} zijde.',
      distractors: ['λ', 'thermische schil', 'binnen', 'condens'],
    },
    {
      id: 'D3-sort-1',
      type: 'sort',
      title: 'Sorteer geluidstypen',
      description: 'Welk geluid hoort bij welk type?',
      categories: ['Luchtgeluid', 'Contactgeluid', 'Omloop-/flankerend geluid'],
      items: [
        { label: 'Buurman die tv kijkt', category: 'Luchtgeluid' },
        { label: 'Spraak in andere kamer', category: 'Luchtgeluid' },
        { label: 'Muziek door de muur', category: 'Luchtgeluid' },
        { label: 'Voetstappen bovenburen', category: 'Contactgeluid' },
        { label: 'Vallend speelgoed', category: 'Contactgeluid' },
        { label: 'Slaande deur', category: 'Contactgeluid' },
        { label: 'Geluid bovenburen via buitengevel', category: 'Omloop-/flankerend geluid' },
        { label: 'Geluid via gemeenschappelijke leiding­schacht', category: 'Omloop-/flankerend geluid' },
      ],
    },
    {
      id: 'D3-sequence-1',
      type: 'sequence',
      title: 'Trias Energetica — in de juiste volgorde',
      description: 'Het 3-stappenplan voor energiezuinig ontwerpen.',
      items: [
        'Beperk de energievraag (isolatie, luchtdicht bouwen, HR++ glas)',
        'Gebruik hernieuwbare bronnen (warmtepomp, zonnepanelen, warmtenet)',
        'Gebruik fossiele bronnen efficiënt (HR-ketel als laatste vangnet)',
      ],
    },
    {
      id: 'D3-matching-1',
      type: 'matching',
      title: 'Koppel BENG-indicatoren en damp-folies',
      pairs: [
        { left: 'BENG 1', right: 'Maximale energiebehoefte (schilkwaliteit) in kWh/m²/jr' },
        { left: 'BENG 2', right: 'Maximaal primair fossiel energie­verbruik in kWh/m²/jr' },
        { left: 'BENG 3', right: 'Minimaal 40 % hernieuwbare energie' },
        { left: 'Dampremmend folie', right: 'Aan warme zijde — voorkomt inwendige condens (Sd 2–30 m)' },
        { left: 'Dampopen folie', right: 'Aan koude zijde — laat doorgedrongen damp ontsnappen (Sd 0,02–0,3 m)' },
        { left: 'Dampdichte folie', right: 'Volledig dampdicht (Sd > 1.500 m) — aluminium-folie' },
      ],
    },
  ],
}
