import type { Topic } from '../types/content'

export const D_4_duurzaamheid: Topic = {
  code: 'D.4',
  section: 'D',
  title: 'Duurzaamheid en milieu',
  chapterRef: 'Rijksoverheid, TNO Innovation for Life',
  blurb:
    'Wat duurzaam bouwen inhoudt, het energielabel + aanvraagprocedure, duurzame voorzieningen in bestaande bouw herkennen, consequenties van verduurzamen, ontwikkelingen in circulair en bio-based bouwen, criteria voor duurzame bouwmaterialen, het concept ESG voor vastgoed, energie-efficiëntie in ontwerp en uitvoering, de label C-verplichting voor kantoren en actuele ontwikkelingen rondom de energietransitie.',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · Wat is duurzaam bouwen?',
      toetstermCodes: ['D.4.1'],
      body: `
### Definitie
**Duurzaam bouwen (DUBO)** = bouwen met **minimale milieubelasting** over de **gehele levenscyclus** — productie, gebruik en sloop — terwijl **comfort en kwaliteit** voor gebruikers behouden blijven.

### Drie pijlers (Triple-P-principe)
1. **People** (mens) — gezond, comfortabel, sociaal aangenaam
2. **Planet** (milieu) — minimale impact op natuur en klimaat
3. **Profit/Prosperity** (welvaart) — economisch haalbaar over de tijd

### Vijf hoofdgebieden duurzaam bouwen

#### 1. Energie­zuinigheid
- Hoge isolatie­waarden (Rc ≥ 4,7 muren, ≥ 6,3 dak)
- HR++/triple glas + luchtdicht bouwen
- Warmtepomp + zonnepanelen
- BENG-eisen (zie D.3.10)
- Doel: zo min mogelijk fossiele energie

#### 2. Materiaal­gebruik
- **Hernieuwbare materialen** (hout uit FSC-bron, vlas-isolatie)
- **Circulair** (terugkomen in de kringloop — bio-based of recyclebaar)
- **Lokaal geproduceerd** (minder transport)
- **Geen schadelijke stoffen** (geen formaldehyde, geen weekmakers, geen asbest)
- **Lange levensduur** + onderhoudsarm

#### 3. Water­gebruik
- **Regenwater­opvang** voor toilet, tuin
- **Waterspaarkraan** + douchekop
- **Grijswater hergebruik** (douche-water voor toilet-spoeling)
- **Hemelwater­infiltratie** (wadi's, doorlatende bestrating)

#### 4. Comfort en gezondheid
- **Goede luchtkwaliteit** (CO₂ < 1.200 ppm, lage VOC)
- **Daglicht** voldoende
- **Akoestiek** — geluidsoverlast minimaliseren
- **Behaaglijkheid** (zie D.3.2)
- **Geen schimmel** of condens­problemen

#### 5. Levenscyclus­denken
- **Productie**: lage CO₂-uitstoot bij bouw
- **Gebruik**: lange levensduur, goed onderhoudbaar
- **Einde levensduur**: demonteerbaar, herbruikbaar of recyclebaar
- **MPG** (MilieuPrestatieGebouw) score — Bbl-eis vanaf 2018 voor nieuwbouw

### Basisprincipes duurzaam bouwen
1. **Trias Energetica** (drie stappen voor energie):
   - Beperk de vraag (isolatie, luchtdicht)
   - Gebruik hernieuwbare bronnen (zon, wind, warmtepomp)
   - Gebruik fossiele bronnen efficiënt (HR-ketel als nodig)
2. **Cradle-to-Cradle (C2C)**: alle materialen circuleren in biologische of technische kringloop
3. **BREEAM / GPR / WELL**: certificering­systemen voor duurzame gebouwen
4. **Energieneutraal**: gebouw wekt zelf op wat het verbruikt (NOM = Nul Op de Meter)
5. **CO₂-neutraal**: gebouw stoot netto 0 CO₂ uit (zelden bereikt)

### Bron: Rijksoverheid
Officiële informatie en standaarden via:
- **rijksoverheid.nl/onderwerpen/duurzaam-bouwen-en-verbouwen**
- **RVO** (Rijksdienst voor Ondernemend Nederland) — subsidies + advies
- **TNO Innovation for Life** — onderzoek + nieuwe materialen
- **NEN** — normen voor isolatie, lucht­dichtheid, MPG
      `.trim(),
    },

    {
      heading: '2 · Energielabel — wat is het en hoe aanvragen?',
      toetstermCodes: ['D.4.2', 'D.4.9'],
      body: `
### Wat is een energielabel?
**Energielabel** is een **wettelijk verplicht document** (sinds 2008 EU-richtlijn) dat de **energie­zuinigheid** van een woning of pand aangeeft.

### Schaal: A++++ tot G
- **A++++** = zeer energie­zuinig (BENG-nieuwbouw, NOM, passief­huis)
- **A++** = zeer goed (modern + energie­zuinige isolatie)
- **A** = goed
- **B** = redelijk
- **C** = matig (verplichte minimum voor kantoren sinds 2023)
- **D** = onder gemiddelde
- **E** = matig laag
- **F** = laag
- **G** = zeer laag (zeer slecht geïsoleerd, vooroorlogs zonder verbeteringen)

### Wat bevat een energielabel?
- **Letter (A++++ tot G)** — globale score
- **Energie­index** (kWh/m²/jr primair fossiel)
- **CO₂-uitstoot** indicator
- **Verbeter­advies** (specifiek voor het pand)
- **Geldig 10 jaar**

### Hoe wordt het label berekend?
**Methode**: berekening op basis van **bouwkundige opname** door een **gekwalificeerd energieadviseur** (RvA-erkend bedrijf).

**Wat wordt opgenomen**:
- Bouwjaar + type woning
- Oppervlak verwarmde ruimten
- Isolatie van muren, dak, vloer
- Glas­type (enkel, HR, HR++, triple)
- Verwarmings­systeem + tapwater
- Ventilatie­systeem
- Hernieuwbare bronnen (zonnepanelen, warmtepomp)

**Berekening volgens NTA 8800** (Nederlandse Technische Afspraak):
- Berekent **primair fossiel energie­gebruik** in kWh/m²/jr
- Schaal vertaalt dit naar A–G letter

### Hoe aanvragen?
**Stappenplan**:
1. **Energie­adviseur** zoeken (via energielabel.nl of EP-N register)
2. **Afspraak maken** voor bouwkundige opname (1–2 uur in de woning)
3. **Documenten** verzamelen: bouw­tekeningen, rekening laatste verbouwing, garantie­bewijzen isolatie/zonnepanelen
4. **Adviseur** voert opname uit + voert berekening
5. **Label registratie** bij **RVO** — definitief energielabel
6. **Geldig 10 jaar** vanaf registratie­datum

**Kosten**:
- Particuliere woning: € 200–400
- Klein appartement: € 150–250
- Kantoor: € 500–2.000+ afhankelijk grootte

### Wanneer is een energielabel verplicht?
**Bij verkoop** van woning of pand: verplicht — boete bij ontbreken (€ 170–400 voor particuliere woning, hoger voor utiliteit).

**Bij verhuur** van woning: verplicht — vermelding in huurcontract.

**Voor kantoren** > 100 m²: verplicht **minimum label C** sinds 1 januari 2023 (zie D.4.10).

### Vereenvoudigd label (verlopen sinds 2021)
Tussen 2015–2020 was er een **vereenvoudigd energielabel** dat woningeigenaar zelf kon aanvragen via een vragenlijst online. **Sinds 1 januari 2021** alleen meer **definitief label** door gekwalificeerd adviseur — dit was om bevroembare informatie tegen te gaan.

### Voorbeelden labels per type
| Bouwjaar/Type | Typisch label |
|---|---|
| Vooroorlogs zonder renovatie | F of G |
| Jaren 60–70 zonder isolatie | E of F |
| Jaren 80 standaard | D of C |
| Jaren 90 standaard | C |
| Jaren 00 standaard | B of C |
| 2010 en later | A of B |
| BENG/passief­huis | A++ of hoger |
      `.trim(),
    },

    {
      heading: '3 · Duurzame voorzieningen herkennen in bestaande bouw',
      toetstermCodes: ['D.4.3'],
      body: `
Bij een **bouwkundige opname** of woninginspectie moet je duurzame voorzieningen kunnen herkennen — deze beïnvloeden energielabel en waarde.

### Energie­opwekking
- **Zonnepanelen** (PV) op dak — let op aantal, leeftijd, omvormer­plaats, eigendom (eigen of geleased!)
- **Zonnecollectoren** voor warmwater (zonneboiler op dak) — minder vaak nu
- **Warmtepomp** — binnenunit (zolder, kelder) + buitenunit (lucht-water type) of bodemcollector (bodem-water type)
- **Houtkachel / pellet-kachel** — biomassa (deels hernieuwbaar)
- **Aansluiting op warmtenet** — afleverset in plaats van cv-ketel

### Isolatie en kozijnen
- **HR++/triple glas** — herkenbaar aan **dikkere ruit** (~25 mm dubbel, ~40 mm triple) en aanwezigheid van **coating** (zilveren glans bij belichten)
- **Geïsoleerde spouwmuren** — kun je niet zien zonder boring, vraag aan eigenaar
- **Dakisolatie** — zichtbaar tussen gordingen of onder dakbedekking
- **Vloerisolatie** — in kruipruimte zichtbaar onder vloer (EPS-platen, isokussens)
- **Buiten­isolatie** — herkenbaar aan dikkere gevel + sierpleister of HPL-bekleding

### Verwarming + warmwater
- **HR-ketel** (rendement 90 %+) — zwart kastje aan muur, met rookgas­ventilator en condens­afvoer naar riolering
- **Combiketel** = HR + warm tapwater in één
- **Warmtepompboiler** — apart van warmtepomp, voor warm tapwater
- **WTW-douche** (warmteterugwinning) — verticale spiraal in standleiding bij douche
- **Vloerverwarming** — afwezigheid radiator + verdeelunit zichtbaar in CV-ruimte

### Ventilatie
- **Balansventilatie + WTW** (Systeem D) — centrale unit op zolder of in technische ruimte met **twee luchtkanalen** (toevoer + afvoer) + filter
- **Inblaas-/afzuig­ventielen** in plafond van slaap-/woon-kamer (toevoer) of keuken-/badkamer (afvoer)
- **CO₂-gestuurde regeling** — slimme thermostaat of WTW-unit met sensor

### Water­besparing
- **Waterspaar­douchekop** (≤ 7 l/min)
- **Toilet met spaartoets** (3/6 l)
- **Waterspaarkraan** op wastafel
- **Regenwater­opvang­systeem** (vat in tuin met pomp voor toilet-spoeling)
- **Wadi** in tuin/wijk

### Materialen
- **FSC-gecertificeerd hout** (logo zichtbaar bij grote elementen)
- **Bio-based isolatie** (vlas, schapenwol, cellulose)
- **Houtskeletbouw** met natuurlijke materialen
- **Recyclebaar** verpakkingsmateriaal achtergelaten

### Hulp­technologieën
- **Slimme meter** (digitale kWh-meter)
- **Slimme thermostaat** (Nest, Tado, Honeywell)
- **Domotica­systeem** voor verlichting + verwarming + ventilatie

### Voor de makelaar
**Bij bezichtiging**:
- **Vraag documentatie** van duurzame voorzieningen — leveringsbon, garantie­bewijzen, opleverings­certificaten
- **Vraag of zonnepanelen eigen of geleased** zijn — bij lease kan koper geconfronteerd worden met overname­contract
- **Vraag jaaropbrengst** zonnepanelen (via monitoring of energierekening)
- **Energielabel** is verplicht document — bekijken vóór koop

### Indicatoren voor goede duurzame staat
- **Energielabel A** of hoger
- **Documentatie** van isolatie + zonnepanelen + warmtepomp
- **Recente bouwjaar** (2010+) of recente renovatie
- **Aansluiting op warmtenet** of all-electric

### Indicatoren voor potentieel verbeter­ruimte
- **Energielabel C–G** met enkel glas / oude cv-ketel
- **Geen zonnepanelen** terwijl dak ervoor geschikt is
- **Geen wand­isolatie** (vooral oudere woningen)
- **Oude installaties** (cv > 15 jaar, niet-condenserende ketel)
      `.trim(),
    },

    {
      heading: '4 · Consequenties van verduurzamen',
      toetstermCodes: ['D.4.4'],
      body: `
### Positieve consequenties

#### 1. Energie­besparing
- **Tot 70 %** minder fossiel energie­verbruik bij volledige verduurzaming
- **Lagere maandelijkse rekeningen**
- **Onafhankelijker** van gas-/stroom-prijs­schommelingen

#### 2. Hoger comfort
- **Constantere temperaturen** binnen
- **Warmere oppervlakken** (geen koudval bij ramen)
- **Betere luchtkwaliteit** (vooral met balansventilatie + WTW)
- **Minder geluids­overlast** (HR++/triple glas dempt verkeer)

#### 3. Hogere woning­waarde
- **Energielabel A** versus E: 5–10 % hogere markt­waarde
- **Betere verkoop­baarheid**
- **WOZ-waarde** kan stijgen door verbeteringen

#### 4. Subsidies en regelingen
- **ISDE** (Investeringssubsidie Duurzame Energie) voor warmtepomp, zonneboiler, isolatie
- **Gemeentelijke subsidies** voor specifieke maatregelen
- **BTW-vrijstelling** op zonnepanelen sinds 2023
- **Energie­toeslag** voor minima

#### 5. Lagere uitstoot
- **CO₂-reductie** voor klimaat
- **Lokale luchtkwaliteit** beter (geen verbrandings­gassen)
- **Bijdrage** aan klimaat­doelen Parijs / Nederland 2050

#### 6. Toekomstig wettelijk conform
- **Verbod op gas** mogelijk vanaf 2030+ (lokaal door gemeente)
- **Label C-eis** voor kantoren al van toepassing
- Eerder verduurzamen voorkomt latere haastige (duurdere) verbouwing

### Negatieve consequenties (risico's en aandachtspunten)

#### 1. Hoge investering vooraf
- **€ 20.000–80.000** voor complete verduurzaming gemiddelde rijwoning
- **Terug­verdientijd** 8–20 jaar
- **Financiering** — hypotheek-aanpassing of energiebespaarlening
- Niet altijd rendabel binnen resterende bewoning­periode

#### 2. Bouwfysische risico's
- **Vochtproblemen** bij verkeerde uitvoering (zie D.3.4)
- **Onvoldoende ventilatie** na luchtdicht maken → schimmel
- **Koudebruggen** versterkt bij incompleet isolatie­pakket
- **Zomerse oververhitting** in goed geïsoleerde woning zonder zonwering

#### 3. Esthetische en bouwkundige impact
- **Buiten­isolatie** verandert gevel-uitstraling — niet altijd toegestaan (monument, welstand)
- **Binnen­isolatie** vermindert vloeroppervlak (3–5 cm per wand)
- **Buitenunit warmtepomp** op gevel — geluids­overlast risico voor buurman
- **Zonnepanelen op dak** zichtbaar — bij sommige welstand­regimes niet toegestaan

#### 4. Onderhoudslast
- **Meer techniek** = meer onderdelen die kunnen falen
- **Warmtepomp** vergt jaarlijkse keuring (~€ 150)
- **Filters balansventilatie** vervangen om de 6 mnd
- **Zonnepanelen** ~jaarlijks visueel controleren

#### 5. Comfort­wijziging
- **Vloerverwarming** geeft trage opwarming — anders dan ketel + radiatoren (snelle opwarming)
- **Warmtepomp** levert lagere aanvoertemperatuur — moet wennen
- **Balansventilatie** geeft licht geluid van blower

#### 6. Asbest-saneringskosten
- Pre-1994 woningen: **asbestinventarisatie** verplicht vóór verbouwing
- Sanerings­kosten (€ 5.000–25.000) kunnen verduurzaming­plan vertragen

### Strategieën voor verduurzaming

#### Stapsgewijze aanpak
- Begin met **isolatie** (dak, gevel, vloer) — basis voor alles
- Dan **glas** (HR++/triple)
- Dan **ventilatie** (Systeem B → D)
- Dan **installaties** (warmtepomp, zonnepanelen)

#### Big-Bang aanpak
- **Alles tegelijk** bij grootschalige renovatie
- **Duurder vooraf** maar goed gecoördineerd
- **Maximale impact** op label + comfort

#### Verhuur-eigenaar versus eigen woning
- **Verhuurder** moet rekening houden met huurder, vaak gefaseerd
- **Eigenaar** kan eigen tempo bepalen

### Tools voor besluitvorming
- **Energie-bespaarcheck** via energiebesparing.nl
- **MJOP** als planning­instrument
- **Bouwkundig advies** + offerte vergelijk

### Voor de makelaar
**Bij koper­advies**:
- Geef inzicht in verduurzamings­potentieel (huidige label → mogelijke label)
- Verwijs naar onafhankelijk adviseur voor MJOP-verduurzaming
- Wijs op subsidies + BTW-vrijstellingen
- Pre-1994 woning: asbest­risico vermelden

**Bij verkoper­advies**:
- Verduurzaming vóór verkoop kan vraagprijs verhogen
- Goed gedocumenteerde renovaties tonen — bewijs van investering
      `.trim(),
    },

    {
      heading: '5 · Circulair en bio-based bouwen',
      toetstermCodes: ['D.4.5', 'D.4.6'],
      body: `
### Circulair bouwen
**Definitie**: bouwen volgens de principes van de **circulaire economie** — materialen blijven in de **kringloop**, weinig afval, hoge recyclebaarheid.

### Vijf principes circulair bouwen
1. **Refuse** — vraag of het echt moet (minder bouwen)
2. **Reduce** — minimaal materiaal­gebruik door slim ontwerp
3. **Reuse** — bestaande materialen hergebruiken (sloop materiaal terug in nieuwbouw)
4. **Recycle** — verwerken tot nieuw materiaal (beton-granulaat in nieuw beton)
5. **Recover** — energie terugwinnen uit niet-recyclebaar afval

### Voorbeelden circulair bouwen
- **Demontabele woning** — eenvoudig uit elkaar te halen, materialen weer bruikbaar
- **Beton met granulaat** — 20–30 % gerecycled beton in plaats van nieuw grind
- **Bouw­blokken van afval** (CO₂-arm beton, plastic-blokken)
- **Renovatie + behoud** in plaats van slopen + nieuwbouw
- **Materialen­paspoort**: registratie van alle materialen in een gebouw voor latere identificatie + terugwinning

### Bio-based bouwen
**Definitie**: bouwen met **materialen uit hernieuwbare biologische bronnen** — planten en organismen — die binnen menselijke tijdsschaal aangevuld kunnen worden.

### Bio-based materialen in de bouw

#### Hout
- **FSC- of PEFC-gecertificeerd hout** (verantwoorde herkomst)
- **CLT** (Cross-Laminated Timber) — moderne hout­bouw, ook voor hoogbouw
- **Glulam** — gelamineerde balken
- **Hennep­hout-platen** + andere alternatieven

#### Isolatie
- **Vlas** — vezels uit vlasplant
- **Hennep** — vezels uit hennep
- **Schapenwol** — natuurlijke vezel + lanoline (anti-vocht)
- **Cellulose** (papier-vlokken) — gerecycled papier
- **Kurk** — schors van kurk-eik
- **Riet** — klassiek
- **Houtwol** (Heraklith) — met cement of magnesiet gebonden

#### Andere bio-based materialen
- **Lehm** (leem) — kleimix voor pleisterwerk + bouwen
- **Stro** (strobaal-bouw)
- **Bamboe** — sterk en snel groeiend (vooral in Azië)
- **Linoleum** — lijnzaad-olie + houtmeel + krijt
- **Bio-plastic** voor specifieke onderdelen

### TNO Innovation for Life — nieuwe ontwikkelingen
**TNO** ontwikkelt en onderzoekt nieuwe bio-based materialen:
- **CO₂-negatieve materialen** (planten absorberen CO₂ in groei → vastgelegd in materiaal)
- **Mycelium** (paddenstoel-vezels) als isolatie en bouw­panelen
- **Algen-gebaseerde materialen** (vezel + bouwblokken)
- **3D-print met bio-based filament**

### Criteria voor duurzaam bouwmateriaal
Een **duurzaam bouwmateriaal** voldoet aan een combinatie van criteria:

#### 1. Hernieuwbaar
- Komt uit een bron die zich binnen menselijke tijdsschaal hersteld
- **Bio-based** scoort hier hoog

#### 2. Lage milieu-impact in productie
- **CO₂-footprint** laag (productie + transport)
- **Energie-intensiteit** laag
- **MPG-score** voldoet aan Bbl-eis

#### 3. Recyclebaar of biodegradeerbaar
- **Recyclebaar** in technische cyclus (terug in nieuw product)
- **Biodegradeerbaar** in biologische cyclus (terug in natuur)
- **Demontabel** — eenvoudig uit elkaar te halen

#### 4. Lange levensduur
- Goed onderhouden in bouwwerk
- Minder vervangings­behoefte → minder materiaal­gebruik totaal

#### 5. Gezond voor mens en dier
- **Geen schadelijke emissies** (geen formaldehyde, geen VOC, geen kunststof­weekmakers)
- **Geen allergenen**
- **Recyclebaarheid bewezen**

#### 6. Lokaal beschikbaar
- **Korte transport­afstand** (lagere CO₂-footprint)
- **Lokale economie** ondersteunen

### MPG (MilieuPrestatieGebouw)
**MPG** = wettelijke maat voor milieu-impact van een gebouw, in **€/m²/jr** schaduw­prijs (kosten van negatieve impact).
- Bbl-eis nieuwbouw woning: MPG ≤ **0,8 €/m²/jr** (sinds 2018; aangescherpt tot 0,5 in 2025)
- Bbl-eis kantoor: MPG ≤ **1,0**
- Berekening via **NMD** (Nationale Milieu Database) van bouwmaterialen

### Voor de bouwsector
**Trend**: massale verschuiving naar circulair + bio-based:
- **Houtbouw** in opkomst voor zowel woningen als kantoor (CLT)
- **Beton met granulaat** als standaard
- **Demontabele constructies** voor flexibiliteit
- **Renovatie** voor nieuwbouw — minder slopen
- **MPG-eis** aanscherping verwacht (Bbl 2025+)
      `.trim(),
    },

    {
      heading: '6 · ESG en vastgoed',
      toetstermCodes: ['D.4.7'],
      body: `
### Wat is ESG?
**ESG** = **Environmental, Social, Governance** — een raamwerk voor het beoordelen van **niet-financiële prestaties** van bedrijven en investeringen. Speelt steeds grotere rol in **vastgoed­investeringen**.

### Drie pijlers

#### E — Environmental (milieu)
- **CO₂-footprint** van het gebouw
- **Energie­efficiëntie** (label A++/A+++)
- **Watergebruik** + besparingen
- **Afvalmanagement**
- **Biodiversiteit** (groendaken, wadi's)
- **Circulair materiaal­gebruik**
- **Klimaat­adaptatie** (regenwater­buffering, koeling tegen hittestress)

#### S — Social (sociaal)
- **Toegankelijkheid** voor mensen met beperking (NEN 1814)
- **Gezondheid en welzijn** binnen (luchtkwaliteit, daglicht)
- **Veiligheid** (PKVW, brandveiligheid)
- **Buurtimpact** — wijkverbinding, sociale veiligheid
- **Diversiteit en inclusie** in ruimten
- **Eerlijke arbeids­voorwaarden** voor onderhouds­personeel

#### G — Governance (besturen)
- **Transparantie** in beheer
- **Onderhoud­planning** (MJOP)
- **Risk­management** (verzekering, klimaatrisico's)
- **Ethische beleggingen** (geen wapenfabrikant­huur)
- **Stakeholder-overleg** (huurders, eigenaren, omwonenden)
- **Reporting** (jaarverslagen met ESG-data)

### Waarom relevant voor vastgoed?
**Beleggers** willen weten:
- **Klimaatrisico**: stranded assets (waarde-verlies door klimaatregels)
- **Reputatie­risico**: ongezonde panden voor huurders
- **Toekomst­bestendigheid**: panden die over 20 jaar nog rendabel zijn

**Pensioenfondsen** en **institutionele beleggers** vragen om ESG-criteria bij **vastgoed­portefeuilles**.

### ESG-standaarden in vastgoed
- **GRESB** (Global Real Estate Sustainability Benchmark) — wereldwijde benchmark
- **BREEAM** (Building Research Establishment Environmental Assessment Method) — Britse oorsprong, in NL standaard
- **LEED** (Leadership in Energy and Environmental Design) — Amerikaanse standaard
- **WELL** — focus op gezondheid + welzijn binnen
- **EU-taxonomie** — regelgeving sustainable finance

### Praktische ESG-maatregelen vastgoed

#### Voor woningen
- **Verduurzaming** naar label A
- **Toegankelijkheid** verbeteren (drempels weg)
- **Sociale ruimten** in appartementen­complex (gezamenlijke tuin)
- **Communicatie** met huurders / VvE over duurzaamheids­plannen

#### Voor utiliteit
- **Label C voor kantoren** (Bbl-verplicht sinds 2023 — zie D.4.10)
- **Frisse Scholen-norm** voor school­gebouwen
- **WELL-certificering** voor moderne kantoren
- **Diversiteits­beleid** in beheer

### EU-taxonomie
**EU-taxonomie** (sinds 2022) classificeert investeringen als **duurzaam** op basis van strikte criteria:
- **DNSH** (Do No Significant Harm) — geen significante schade aan andere milieu­doelen
- **Minimum­standaarden** voor sociale aspecten
- **Specifieke technische screening criteria**

**Voor vastgoed**:
- Nieuwbouw moet aan strenge energie­eisen voldoen
- Bestaande bouw moet **top 15 %** van energie­zuiniger gebouwen zijn
- Anders niet als "groene investering" classificeerbaar

### Impact op makelaars en vastgoed­markt
- **Beleggers** vragen ESG-data bij aankoop
- **Energielabel** is basis-ESG-indicator
- **MPG-score** wordt belangrijker
- **Klimaatrisico** (overstromings­zone, hitte­eiland) in due diligence
- **Toegankelijkheid** als marktvoor­deel

### Voor de makelaar
- **Begrip van ESG** essentieel bij grotere transacties
- **Kunne uitleggen** wat duurzame voorzieningen bijdragen
- **Documentatie** van duurzaamheid (rapporten, certificeringen)
- **Toekomst­visie** — welke maatregelen rendabel binnen verwachte gebruik?
      `.trim(),
    },

    {
      heading: '7 · Energie-efficiëntie in ontwerp en uitvoering',
      toetstermCodes: ['D.4.8'],
      body: `
### Trias Energetica — drie basisstappen
**Trias Energetica** is het basis­principe voor energie­zuinig ontwerpen, in **drie stappen** (in deze volgorde):

#### Stap 1: Beperk de energie­vraag
- **Goede isolatie** (Rc-waarden hoog)
- **Luchtdicht bouwen**
- **HR++/triple glas**
- **Compact ontwerp** (kleine geveloppervlak tov volume)
- **Goede oriëntatie** (zuid-gericht voor passieve zon)
- **Zonwering** voor zomer
- **Goede ventilatie** met WTW

→ **Eerst minder energie nodig** maken voordat je opwekt!

#### Stap 2: Gebruik hernieuwbare energie­bronnen
- **Zonnepanelen** (PV)
- **Zonneboiler** of zonnecollector
- **Warmtepomp** (lucht-water of bodem-water)
- **Aansluiting op warmtenet** met hernieuwbare bron
- **Biomassa** (houtkachel met FSC-pellets)
- **Wind** (bij grote schaal)

→ **Vul de verlaagde vraag** zo veel mogelijk in met hernieuwbaar.

#### Stap 3: Gebruik fossiele energie efficiënt
- **HR-ketel** voor restant tijdens overgang
- **Slimme regeling** + thermostaten
- **Modulerend vermogen** (alleen wat nodig is)
- **Goede afregeling installaties**

→ **Pas als laatste** fossiele bronnen, en dan zo efficiënt mogelijk.

### Energie­efficiëntie in ontwerp

#### Architectonisch
- **Vorm**: compacter = minder geveloppervlak = minder warmteverlies
- **Oriëntatie**: hoofdgevel zuid voor passieve zon­energie
- **Raamopperlak**: groot zuid + klein noord
- **Zonwering**: buitenzonwering effectiever dan binnen
- **Overstekken**: dak­overhang die in zomer schaduw geeft

#### Bouwfysisch
- **Thermische schil**: continue isolatie zonder koudebrug
- **Lucht­dichtheid**: < 0,4 Qv,10 (BENG)
- **Damp­huishouding**: dampremmer aan warme zijde
- **Akoestische scheiding**: comfort bevordert efficiëntie

#### Installatie­technisch
- **Verwarmingscapaciteit** afgestemd op werkelijke vraag (niet overdimensioneren)
- **Lage-temperatuur­verwarming (LTV)** met vloerverwarming
- **WTW-ventilatie** voor 75–95 % warmteterug­winning
- **Slimme regeling** (CO₂-gestuurd, geo-fencing)
- **Zonnepanelen** + buffervat voor opslag

### Energie­efficiëntie in uitvoering

#### Bouwfase
- **Bouwfysische detaillering** zorgvuldig — geen lekken
- **Folie-naden** taping + kit
- **Doorvoeren** luchtdicht afwerken
- **Isolatie­continuïteit** geen onderbrekingen
- **Blower-door-test** na oplevering — controleert luchtdicht­heid

#### Materiaal­keuze
- **Hoge isolatie­waarde** per dikte (PIR voor compacte oplossingen)
- **Duurzame materialen** (zie D.4.6)
- **Lokale herkomst** (minder transport)
- **Demontabel** voor toekomstige aanpassing

#### Installatie­installatie
- **Door erkende installateur** (BEI, FME)
- **Inregel­rapport** bij oplevering
- **Documentatie** voor latere onderhoudspartij
- **Monitoring** (slimme meters, energie-management-systeem)

### Renovatie versus nieuwbouw

#### Nieuwbouw
- BENG-eisen verplicht
- Volledige integratie van duurzaamheids­principes
- Makkelijker maximale efficiëntie

#### Renovatie
- Bestaande constructie beperkt mogelijkheden
- Stap-voor-stap aanpak gebruikelijk
- **Trias Energetica** ook hier toepassen:
  1. Eerst schil verbeteren (isolatie, glas, luchtdicht)
  2. Dan hernieuwbare opwekking
  3. Dan installaties optimaliseren

### Specifieke ontwerptechnieken

#### Passief­huis-principe
- **Extreme isolatie** (Rc > 8)
- **Triple glas** standaard
- **Luchtdicht** (< 0,2 Qv,10)
- **Balansventilatie + WTW**
- **Geen actief verwarmings­systeem** of zeer klein

#### Nul-Op-de-Meter (NOM)
- **Energie­neutraal**: opwekking = verbruik over jaar
- **Werkelijke energierekening** € 0 (zonder vastrechtkosten)
- Veel zonnepanelen + warmtepomp + zeer goede isolatie

#### Energie­leverend gebouw
- **Levert meer energie dan het verbruikt**
- Beleggings­propositie voor klimaat-positief

### Voor de makelaar
- **Nieuwe woningen** in NL voldoen aan BENG → standaard energie­zuinig
- **Oudere woningen** met goede label hebben vaak een geschiedenis van renovatie — vraag documentatie
- **Renovatie­potentieel** kan een verkoop­voordeel zijn (kosten + subsidies + label-stijging)
      `.trim(),
    },

    {
      heading: '8 · Label C voor kantoren',
      toetstermCodes: ['D.4.10'],
      body: `
### De label C-verplichting
**Sinds 1 januari 2023** moeten alle **kantoorgebouwen > 100 m²** in Nederland een **energielabel C of beter** hebben. Vastgelegd in **Bouwbesluit / Bbl**.

### Wat is een kantoorgebouw?
**Definitie volgens regelgeving**:
- Een gebouw met **hoofd­functie kantoor**
- **> 100 m²** bruto vloeroppervlak voor kantoor­activiteit
- Aansluiten op kantoor­gebruik (geen tijdelijke kantoor­functie)

### Uitzonderingen
- **Monumenten** (Rijks- of gemeentelijk monument): vrijstelling
- **Kantoren binnen woon­functie** (max. 50 % van vloeroppervlak)
- **Tijdelijke gebouwen** (vergunning < 10 jaar)
- **Gebouwen die binnen 2 jaar gesloopt** worden

### Consequenties bij niet voldoen
**Sinds 1 januari 2023**:
- **Verbod op gebruik** voor kantoor­functie
- **Boete** door gemeente: tot € 25.000 (gevolg­hoogte afhankelijk)
- **Verzekering** kan dekking weigeren
- **Verhuur niet meer wettig** — huurder kan opzegging eisen

### Hoe wordt het label C bepaald?
**NTA 8800-berekening** (zoals woning­label, maar voor utiliteit):
- Bouwkundige opname door **gekwalificeerd energieadviseur** (EP-U register)
- **Beoordeling** isolatie, kozijnen, installaties, ventilatie
- **Schaal G–A** vergelijkbaar met woning, maar andere absolute grenzen

### Wat is nodig voor label C?
Globaal vereist (afhankelijk van bouwjaar):
- **Isolatie**: Rc ≥ 2,5 muren, Rc ≥ 3,5 dak, Rc ≥ 2,5 vloer
- **Glas**: HR (U ≤ 2,0) — niet noodzakelijk HR++
- **Verwarming**: HR-ketel (rendement ≥ 90 %)
- **Ventilatie**: minimaal mechanisch
- **Verlichting**: LED of TL5 — geen oude TL8

Voor **label A** zijn aanzienlijk strenger eisen + zonnepanelen + warmtepomp.

### Vanaf 2030
**EU-richtlijn EPBD III** verplicht alle kantoren naar **label A**:
- **Nieuwbouw**: BENG-eisen (al van toepassing)
- **Bestaand**: label A vanaf 2030 / 2033 (afhankelijk uitwerking)

### Voor de eigenaar / verhuurder
**Stappen om compliant te zijn**:
1. **Energielabel laten opnemen** (geldig 10 j)
2. **Bij C of beter**: niets verder nodig totdat label vervalt
3. **Bij D–G**: verbetering plan opstellen met adviseur
4. **Uitvoering** voor 2030 (anders label A vereist)

### Verbeter­maatregelen voor label C
- **Dakisolatie**: ~€ 50–100 per m²
- **Spouw-na-isolatie**: ~€ 20–30 per m²
- **HR-glas vervanging**: ~€ 300 per raam
- **LED-verlichting**: ~€ 100 per armatuur
- **HR-ketel**: ~€ 4.000–8.000

**Totaal voor middelgroot kantoor (500 m²)**: € 30.000–100.000.

### Subsidies
- **EIA** (Energie-Investerings­aftrek) — fiscale aftrek voor zakelijke investering
- **ISDE** voor warmtepomp / zonneboiler
- **MIA/Vamil** voor circulaire maatregelen

### Marktwerking
- Kantoren met label C of beter: **hogere huurprijzen** (toekomst­bestendig)
- Kantoren met D-G: **vermijden door grote bedrijven** (ESG-criteria)
- **Stranded assets**-risico: kantoren die niet bij te werken zijn → waarde-verlies
- **Sloop + nieuwbouw** of **transformatie naar wonen** zijn alternatieven

### Voor de makelaar
**Bij kantoor­transacties**:
- **Energielabel** vermelden in advertentie (verplicht)
- Bij label < C: kennen verbouwings­kosten + subsidies
- **Huur-overeenkomsten** met label-clausule (verhuurder verplicht zich label C of beter)
- **2030-perspectief** (label A) meenemen in advies aan koper
- Bij **monumenten**: weten van vrijstelling
      `.trim(),
    },

    {
      heading: '9 · Energietransitie en actuele ontwikkelingen',
      toetstermCodes: ['D.4.11'],
      body: `
### Wat is de energietransitie?
**Energietransitie** = de **wereldwijde overgang** van fossiele brandstoffen (kolen, gas, olie) naar **hernieuwbare energie­bronnen** (zon, wind, water, biomassa, geothermie) — om klimaat­opwarming te beperken.

### Nederlandse doelen (Klimaat­akkoord 2019 + EU 'Fit for 55')
- **2030**: 55 % CO₂-reductie t.o.v. 1990 (Europees doel)
- **2050**: Klimaat­neutraal (netto 0 CO₂-uitstoot)
- **Gebouwde omgeving**: 7 miljoen woningen + 1 miljoen utiliteits­gebouwen verduurzamen tot 2050
- **Stoppen met gas­winning Groningen** (2024)
- **Geleidelijk afscheid van aardgas** in woningen (lokaal door gemeenten)

### Sleutel­elementen energietransitie gebouwde omgeving

#### 1. Verduurzaming bestaande bouw
- **Verbouwings­tempo**: 50.000–200.000 woningen per jaar
- **Renovatie­bureau's** ondersteunen huiseigenaren
- **VvE-renovaties** voor appartementen­complexen
- **Energielabel-eisen** voor verhuur (toekomst)

#### 2. Nieuwbouw zonder gas
- **Gas­aansluitplicht afgeschaft** sinds 2018
- **All-electric** (warmtepomp + zonnepanelen)
- **Warmtenet** in steden waar beschikbaar
- **BENG-eisen** vanaf 2021

#### 3. Warmtenetten
- Doel: **50 % van Nederland** op een warmtenet in 2050
- Bronnen: restwarmte­industrie, **geothermie**, waterstof, afvalverbranding, datacenters
- Voordelen: efficiënter dan individuele warmtepompen, geen onderhoud per huishouden
- Nadelen: gebonden aan ene leverancier, vastrechtkosten

#### 4. Hybride warmtepompen
- **Standaard bij vervanging cv-ketel** vanaf 2026 (mits financieel haalbaar)
- **Combinatie warmtepomp + gascv**: pomp voor milde temperaturen, gas voor pieken
- **Subsidies** versterken adoptie

#### 5. Waterstof
- **Bestaand gasnet** kan waterstof transporteren (experimenteel)
- **Pilot­projecten**: Stad aan't Haringvliet, Hoogeveen, Lochem
- Lange termijn: voor moeilijk te verduurzamen panden
- Concurrentie: andere sectoren (industrie, transport) vragen ook waterstof

#### 6. Zonnepanelen op grote schaal
- **Subsidies + BTW-vrijstelling**
- **Saldering** wordt afgebouwd 2027–2031
- **Thuisaccu** wordt rendabel
- **Collectieve zonneparken** voor mensen zonder eigen dak

#### 7. Elektrische auto's + laadinfrastructuur
- **EV-laadpalen** vergen vaak verzwaring elektriciteits­aansluiting (3×25 A)
- **Smart-charging** voor netbalans
- **V2G** (Vehicle-to-Grid) — auto-accu levert tijdens piekvraag

### TNO Innovation for Life — onderzoeks­richtingen
**TNO** is het Nederlandse kennisinstituut voor toegepast onderzoek. Onderzoeks­gebieden energietransitie:

- **Energie­opwekking**:
  - Tweede generatie zonnepanelen (perovskiet, organisch PV)
  - Drijvende windmolens (offshore)
  - Geothermie tot 4 km diepte
- **Energie­opslag**:
  - Batterij­technologie (lithium-ijzer-fosfaat, vaste-stof, redox flow)
  - Waterstof-elektrolyse efficiëntie
  - Thermische opslag (warmtebuffer in gebouwen)
- **Energie-efficiëntie**:
  - Slimme regelaars + AI voor gebouw­beheer
  - Demand response — uitstel energiegebruik bij piekvraag
- **Grootschalige integratie**:
  - Power-to-gas (overschot stroom → waterstof of methaan)
  - Smart grids met decentrale opwekking
  - Sector-koppeling (warmte, transport, industrie)

### Praktische impact voor de makelaar / huurder / koper

#### Bij koop nieuwbouw (2021+)
- BENG-voldoende, label A+
- Geen gas, all-electric
- Vraag naar warmtenet-aansluiting (in sommige wijken)

#### Bij koop bestaande woning
- **Bouwjaar 1990–2010**: gewoonlijk label C–D, ruimte voor verbetering
- **Vóór 1990**: label E–G, significante verduurzaming nodig
- **Vraag warmtevisie van gemeente** — welke wijken op welke termijn van het gas

#### Bij koop kantoor / bedrijfspand
- **Label C verplicht** sinds 2023 (zie D.4.10)
- **Label A** voor 2030 (EU-richtlijn)
- **Stranded assets** risico bij oudere panden zonder verduurzaming

### Klimaatadaptatie (naast mitigatie)
Naast CO₂-reductie ook **aanpassing aan reeds optredende klimaat­verandering**:
- **Regenwater­buffering** (wadi's, groendaken)
- **Hittestress** beperken (witte daken, schaduw, ventilatie)
- **Zeespiegel­stijging** (laaggelegen woningen)
- **Waterveiligheid** (dijken, evacuatie­plannen)

### Voor de makelaar
- **Bouwjaar + locatie** = sleutel voor klimaat-risicotaxatie
- **Klimaat-adaptief** ontwerp wordt waardevoller (regenwater­buffer)
- **Energielabel A** = toekomst­bestendig
- **Lokale klimaat­visie** van gemeente raadplegen voor specifieke wijk-info
      `.trim(),
    },
  ],

  toetstermen: [
    {
      code: 'D.4.1',
      text: 'Legt uit wat duurzaam bouwen inhoudt (Triple-P: People-Planet-Profit; vijf hoofdgebieden: energie, materialen, water, comfort, levenscyclus).',
      niveau: 'BT1',
      bloom: 'Begrip',
    },
    {
      code: 'D.4.2',
      text: 'Legt uit wat een energielabel inhoudt (schaal A++++ tot G, NTA 8800-berekening, primair fossiel energieverbruik).',
      niveau: 'BT1',
      bloom: 'Begrip',
    },
    {
      code: 'D.4.3',
      text: 'Herkent duurzame voorzieningen in bestaande bouw (zonnepanelen, warmtepomp, HR++/triple glas, isolatie, balansventilatie + WTW, vloerverwarming).',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'D.4.4',
      text: 'Legt de consequenties van het verduurzamen van een bestaand gebouw uit (positief: energie­besparing, comfort, waarde, subsidies; negatief: investering, bouwfysische risico\'s, esthetiek).',
      niveau: 'BT1',
      bloom: 'Begrip',
    },
    {
      code: 'D.4.5',
      text: 'Benoemt actuele ontwikkelingen op het gebied van duurzaam, circulair en bio-based bouwen, conform TNO Innovation for Life.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
    {
      code: 'D.4.6',
      text: 'Benoemt huidige op duurzaamheid gerichte bouwmaterialen en licht toe aan welke criteria duurzaam bouwmateriaal dient te voldoen (hernieuwbaar, lage milieu-impact, recyclebaar, lange levensduur, gezond, lokaal).',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
    {
      code: 'D.4.7',
      text: 'Legt het concept ESG (Environmental, Social, Governance) in relatie tot vastgoed uit.',
      niveau: 'BT1',
      bloom: 'Begrip',
    },
    {
      code: 'D.4.8',
      text: 'Beschrijft de energie-efficiëntie in ontwerp en uitvoering van gebouwen (Trias Energetica, architectonisch + bouwfysisch + installatie­technisch).',
      niveau: 'BT2',
      bloom: 'Kennis',
      metDrawing: true,
    },
    {
      code: 'D.4.9',
      text: 'Legt uit wat een energielabel inhoudt en hoe deze aangevraagd kan worden (door gekwalificeerd energieadviseur, NTA 8800, geldig 10 jaar, registratie bij RVO).',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
    {
      code: 'D.4.10',
      text: 'Licht de verplichting van een energielabel C voor kantoren toe en benoemt de consequenties wanneer niet voldaan wordt aan deze eis.',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
    {
      code: 'D.4.11',
      text: 'Benoemt actuele ontwikkelingen op het gebied van energietransitie, conform TNO Innovation for Life.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
  ],

  questions: [
    // D.4.1 (2)
    {
      id: 'D4-1-a',
      toetstermCode: 'D.4.1',
      type: 'mc',
      prompt: 'Wat is **duurzaam bouwen (DUBO)**?',
      options: [
        'Snel en goedkoop bouwen',
        'Bouwen met minimale milieubelasting over de gehele levenscyclus',
        'Bouwen met alleen hout',
        'Een specifieke architectuur­stijl',
      ],
      correctIndex: 1,
      explanation:
        'DUBO = Duurzaam Bouwen: bouwen met minimale milieubelasting over de gehele levenscyclus (productie, gebruik, sloop) terwijl comfort en kwaliteit voor gebruikers behouden blijven. Volgens Triple-P-principe: People (mens — gezond, comfortabel), Planet (milieu — minimale impact), Profit/Prosperity (welvaart — economisch haalbaar). Vijf hoofdgebieden: energie-zuinigheid, materiaal­gebruik, water­gebruik, comfort/gezondheid, levenscyclus­denken.',
    },
    {
      id: 'D4-1-b',
      toetstermCode: 'D.4.1',
      type: 'mc',
      prompt: 'Wat is de **Trias Energetica**?',
      options: [
        'Een type warmtepomp',
        'Drie-stappenplan voor energie­zuinig ontwerpen: (1) beperk de energie­vraag door isolatie en luchtdicht bouwen; (2) gebruik hernieuwbare energie­bronnen; (3) gebruik fossiele bronnen efficiënt',
        'Een Bbl-eis',
        'Een soort isolatiemateriaal',
      ],
      correctIndex: 1,
      explanation:
        'Trias Energetica = basis­principe voor energie­zuinig ontwerpen, **in deze volgorde**: (1) **Beperk de vraag** — goede isolatie (Rc hoog), luchtdicht bouwen, HR++/triple glas, goede oriëntatie + zonwering; (2) **Hernieuwbare bronnen** — zonnepanelen, warmtepomp, zonneboiler, warmtenet; (3) **Fossiele bronnen efficiënt** — HR-ketel als overgang. Belangrijkste les: eerst minder energie nodig maken vóór je opwekt — anders bouw je een over-gedimensioneerd systeem.',
    },

    // D.4.2 (3)
    {
      id: 'D4-2-a',
      toetstermCode: 'D.4.2',
      type: 'mc',
      prompt: 'Het **energielabel** schaal loopt van:',
      options: [
        '1 tot 10',
        'A++++ (zeer energie­zuinig',
        'Rood tot groen',
        '0 tot 100',
      ],
      correctIndex: 1,
      explanation:
        'Energielabel: van A++++ (zeer energie­zuinig — passief­huis, BENG-nieuwbouw, NOM) tot G (zeer slecht — vooroorlogs zonder verbeteringen). Tussenstappen: A++, A+, A, B, C, D, E, F, G. Berekend volgens NTA 8800 (Nederlandse Technische Afspraak) op basis van primair fossiel energiegebruik in kWh/m²/jr. Verplicht bij verkoop en verhuur sinds 2008.',
    },
    {
      id: 'D4-2-b',
      toetstermCode: 'D.4.2',
      type: 'mc',
      prompt: 'Wat staat er **op een energielabel**?',
      options: [
        'Alleen de letter (A–G)',
        'Letter (A++++ tot G), energie­index (kWh/m²/jr primair fossiel), CO₂-uitstoot­indicator, verbeter­advies specifiek voor het pand, geldig 10 jaar',
        'De koopprijs',
        'Bouwvergunningen',
      ],
      correctIndex: 1,
      explanation:
        'Een energielabel bevat: (1) de letter (A++++ tot G) — globale score; (2) energie­index in kWh/m²/jr primair fossiel — kwantitatief; (3) CO₂-uitstoot­indicator — milieu­aspect; (4) verbeter­advies specifiek voor het pand — welke maatregelen kunnen worden genomen om naar hoger label te komen; (5) geldigheid 10 jaar vanaf registratie­datum. Wordt door RVO geregistreerd.',
    },
    {
      id: 'D4-2-c',
      toetstermCode: 'D.4.2',
      type: 'mc',
      prompt: 'Een woning uit **1965 zonder isolatie­verbeteringen** heeft typisch welk label?',
      options: [
        'A++',
        'C of D',
        'E of F',
        'A++++',
      ],
      correctIndex: 2,
      explanation:
        'Typische labels per bouwperiode (zonder renovaties): vooroorlogs zonder renovatie = F/G; jaren 60–70 = E/F; jaren 80 = D/C; jaren 90 = C; jaren 00 = B/C; 2010+ = A/B; BENG (2021+) = A++ of hoger. Een woning uit 1965 zonder isolatie­verbeteringen scoort meestal E of F. Verbeter­potentieel naar label A vergt typisch: spouwisolatie, dakisolatie, vloerisolatie, HR++ glas, warmtepomp, zonnepanelen (~€ 30.000–50.000 investering).',
    },

    // D.4.3 (3)
    {
      id: 'D4-3-a',
      toetstermCode: 'D.4.3',
      type: 'mc',
      prompt: 'Bij bezichtiging zie je een **buitenunit op de gevel** + binnenunit op zolder + grote boiler. Wat is dit?',
      options: [
        'Een airconditioning­systeem',
        'Een lucht-water-warmtepomp + warmwater­boiler',
        'Een ventilatie­installatie',
        'Een ouderwetse cv-ketel',
      ],
      correctIndex: 1,
      explanation:
        'Combinatie buitenunit + binnenunit + grote boiler wijst sterk op een **lucht-water-warmtepomp** met aparte warmwater­boiler (200–300 l). Modern verwarming­systeem voor all-electric woning. Aandachts­punten: leeftijd van warmtepomp (15–20 jaar levensduur), jaarlijkse keuring, onderhouds­contract, COP (rendement bij milde weer ~4, vorst ~2). Geluid buitenunit kan punt zijn voor buren. Documentatie + garantie­bewijzen overdragen bij verkoop.',
    },
    {
      id: 'D4-3-b',
      toetstermCode: 'D.4.3',
      type: 'mc',
      prompt: 'Hoe herken je **HR++ glas** in een woning?',
      options: [
        'Aan de kleur',
        'Dikker dan enkel glas (~25 mm vs 4 mm); coating zichtbaar bij belichten (zilveren glans aan binnenkant); soms label op afstandhouder; veel beter geluidsisolatie + minder condens',
        'Aan een sticker',
        'Niet zichtbaar',
      ],
      correctIndex: 1,
      explanation:
        'HR++ glas (dubbel) herkennen: (1) **dikker dan enkel glas** — ~25 mm totaal (4-15-4 mm) vs 4 mm bij enkel glas; (2) **coating zichtbaar bij belichten** — zilveren glans aan binnenkant van een glasplaat onder bepaalde hoek; (3) soms **stempel of label** op afstand­houder (binnenrand); (4) functioneel: veel beter geluidsisolatie + geen condens in winter op binnenruit; (5) U-waarde ~1,1 W/m²·K. Triple glas is nog dikker (~40 mm).',
    },
    {
      id: 'D4-3-c',
      toetstermCode: 'D.4.3',
      type: 'mc',
      prompt: 'Hoe herken je **balansventilatie + WTW** (Systeem D)?',
      options: [
        'Roosters in alle kozijnen',
        'Centrale unit op zolder of in technische ruimte met twee luchtkanalen (toevoer + afvoer) + filter; inblaas-ventielen in plafond slaap-/woonkamer; afzuig-ventielen in keuken/badkamer/toilet; geen open roosters in kozijnen',
        'Een grote ventilator buiten',
        'Alleen een afzuig­kap in keuken',
      ],
      correctIndex: 1,
      explanation:
        'Systeem D-balansventilatie + WTW kenmerken: (1) **centrale unit** op zolder of in technische ruimte — vaak grijze kast 50×50×80 cm met twee luchtkanalen erin (toevoer + afvoer) + filter; (2) **inblaas-ventielen** in plafond van slaap-/woonkamer (verse lucht); (3) **afzuig-ventielen** in keuken/badkamer/toilet (vervuilde lucht); (4) **geen open roosters** in kozijnen (woning is luchtdicht); (5) regelaar bij keuken met standen-schakelaar 1-2-3. Energie­zuinig (WTW herwint 75–95 % warmte) + gefilterde lucht.',
    },

    // D.4.4 (2)
    {
      id: 'D4-4-a',
      toetstermCode: 'D.4.4',
      type: 'mc',
      prompt: 'Wat is een **belangrijk bouwfysisch risico** bij na-isolatie zonder ventilatie­verbetering?',
      options: [
        'Geen risico',
        'Luchtdichte schil zonder mechanische ventilatie → hoge CO₂, hoge RV, condensatie + schimmel → essentieel om ventilatie (B/C/D) gelijktijdig te verbeteren',
        'Te warm wonen',
        'Hogere belasting fundering',
      ],
      correctIndex: 1,
      explanation:
        'Klassiek bouwfysisch risico bij na-isolatie: door HR++ glas + dampremmer + kit wordt de woning luchtdicht. Zonder mechanische ventilatie ontstaat: hoge CO₂ (concentratie­vermogen daalt, hoofdpijn), hoge RV (>70 % → schimmel­risico), condens op koude oppervlakken, schimmelvorming in hoeken. **Oplossing**: gelijktijdig ventilatie verbeteren — Systeem B (rooster + mechanische afzuig), C (mechanisch alles) of D (balansventilatie + WTW). Modern: Systeem D maximaliseert energie­zuinigheid + luchtkwaliteit.',
    },
    {
      id: 'D4-4-b',
      toetstermCode: 'D.4.4',
      type: 'mc',
      prompt: 'Wat is een **positieve consequentie** van verduurzaming voor de woning­waarde?',
      options: [
        'Geen impact',
        'Energie­label stijgt (E → A mogelijk); marktwaarde label A is 5–10 % hoger dan E; betere verkoopbaarheid; subsidies + BTW-vrijstelling verlagen netto-investering',
        'Lagere waarde door investering',
        'Alleen bij commercieel vastgoed',
      ],
      correctIndex: 1,
      explanation:
        'Positieve waarde-impact verduurzaming: (1) **energie­label** stijgt (E → A mogelijk met goed pakket); (2) **marktwaarde** woningen met label A statistisch 5–10 % hoger dan label E (onderzoek Brainbay, Kadaster); (3) **verkoopbaarheid** beter — kopers zoeken energie­zuinige woning, vaak tegen meer­prijs; (4) **subsidies** (ISDE, gemeente) + **BTW-vrijstelling** zonnepanelen verlagen netto-investering; (5) **operationele kosten lager** → aantrekkelijker voor koper. Terug­verdientijd 8–15 jaar bij goed plan.',
    },

    // D.4.5 (2)
    {
      id: 'D4-5-a',
      toetstermCode: 'D.4.5',
      type: 'mc',
      prompt: 'Wat is **circulair bouwen**?',
      options: [
        'Bouwen in een ronde vorm',
        'Bouwen volgens principes van circulaire economie: materialen blijven in de kringloop',
        'Bouwen rondom een centrale vrije ruimte',
        'Roulerend bouwbedrijf',
      ],
      correctIndex: 1,
      explanation:
        'Circulair bouwen volgt principes van circulaire economie — materialen blijven in de kringloop, weinig afval. **Vijf R-principes**: Refuse (minder bouwen), Reduce (zuiniger materiaal­gebruik), Reuse (hergebruik materialen), Recycle (verwerken tot nieuw materiaal), Recover (energie uit afval). Voorbeelden: **demontabele woning** (eenvoudig uit elkaar te halen), **beton met granulaat** (20–30 % gerecycled), **materialen­paspoort** (registratie alle materialen voor latere terugwinning), **renovatie** boven sloop + nieuwbouw.',
    },
    {
      id: 'D4-5-b',
      toetstermCode: 'D.4.5',
      type: 'mc',
      prompt: 'Wat zijn **bio-based bouw­materialen**?',
      options: [
        'Materialen uit biologische bronnen',
        'Synthetische materialen',
        'Alleen hout',
        'Materialen met biologische impact',
      ],
      correctIndex: 0,
      explanation:
        'Bio-based bouwmaterialen komen uit hernieuwbare biologische bronnen — planten en organismen die zich binnen menselijke tijdsschaal aanvullen. Voorbeelden: **FSC-gecertificeerd hout** (CLT, Glulam), **bio-based isolatie** (vlas, hennep, schapenwol, cellulose, kurk, riet, houtwol), **leem** (pleisterwerk), **strobaal-bouw**, **bamboe**, **linoleum** (lijnzaad-olie + houtmeel + krijt). TNO onderzoekt nieuwe bio-based materialen: mycelium (paddenstoel-vezels), algen-gebaseerd, CO₂-negatieve materialen.',
    },

    // D.4.6 (2)
    {
      id: 'D4-6-a',
      toetstermCode: 'D.4.6',
      type: 'mc',
      prompt: 'Aan welke **criteria** moet een duurzaam bouwmateriaal voldoen?',
      options: [
        'Alleen goedkoop',
        'Hernieuwbaar / lage milieu-impact in productie / recyclebaar of biodegradeerbaar / lange levensduur / gezond voor mens (geen schadelijke emissies) / lokaal beschikbaar',
        'Glanzend uiterlijk',
        'In China geproduceerd',
      ],
      correctIndex: 1,
      explanation:
        'Duurzaam bouwmateriaal-criteria: (1) **Hernieuwbaar** of recyclebaar (bron herstelt binnen menselijke tijdsschaal); (2) **Lage milieu-impact** in productie (CO₂-footprint, energie-intensiteit, MPG-score); (3) **Recyclebaar of biodegradeerbaar** (terug in technische of biologische cyclus); (4) **Lange levensduur** (minder vervangings­behoefte → minder materiaal totaal); (5) **Gezond voor mens en dier** (geen formaldehyde, geen VOC, geen weekmakers, geen allergenen); (6) **Lokaal beschikbaar** (korte transport-afstand, lagere CO₂-footprint, lokale economie ondersteunen).',
    },
    {
      id: 'D4-6-b',
      toetstermCode: 'D.4.6',
      type: 'mc',
      prompt: 'Wat is de **MPG-score** in Bbl?',
      options: [
        'Milieu Prestatie Gebouw',
        'Maximum Plaats Glas',
        'Massa Per Geluidsisolatie',
        'Een type label',
      ],
      correctIndex: 0,
      explanation:
        'MPG = MilieuPrestatieGebouw — wettelijke maat voor milieu-impact van een gebouw, in **€/m²/jr schaduwprijs** (theoretische kosten van negatieve milieu-impact). Bbl-eis nieuwbouw: woning MPG ≤ 0,8 (sinds 2018), aangescherpt naar 0,5 in 2025. Kantoor MPG ≤ 1,0. Berekening via **NMD** (Nationale Milieu Database) van bouwmaterialen — elk materiaal heeft eigen milieu-impact-score. Drijft naar gebruik van duurzame materialen.',
    },

    // D.4.7 (2)
    {
      id: 'D4-7-a',
      toetstermCode: 'D.4.7',
      type: 'mc',
      prompt: 'Wat staat **ESG** voor?',
      options: [
        'Energy, Solar, Gas',
        'Environmental, Social, Governance',
        'European Standard for Glass',
        'Energy Saving Group',
      ],
      correctIndex: 1,
      explanation:
        'ESG = **Environmental, Social, Governance** — raamwerk voor beoordeling van niet-financiële prestaties van bedrijven en investeringen. Drie pijlers: **E** (milieu) — CO₂-footprint, energie­efficiëntie, water, afval, biodiversiteit, klimaat­adaptatie; **S** (sociaal) — toegankelijkheid, gezondheid binnen, veiligheid, buurtimpact, inclusie; **G** (bestuur) — transparantie, MJOP, risk-management, stakeholder-overleg, ethische beleggingen. Vooral relevant voor institutionele beleggers (pensioenfondsen) en grote vastgoed-transacties.',
    },
    {
      id: 'D4-7-b',
      toetstermCode: 'D.4.7',
      type: 'mc',
      prompt: 'Waarom is **ESG belangrijk voor vastgoed**?',
      options: [
        'Alleen voor reclame',
        'Beleggers (pensioenfondsen, institutionele) vragen ESG-data bij aankoop; klimaatrisico (stranded assets); reputatie­risico bij ongezonde panden; toekomst­bestendigheid; EU-taxonomie vereist ESG-rapportage',
        'Het verandert de architectuur­stijl',
        'Het is alleen een filosofisch concept',
      ],
      correctIndex: 1,
      explanation:
        'ESG is relevant voor vastgoed door: (1) **Beleggers** (pensioenfondsen, institutionele) vragen ESG-data bij aankoop; (2) **Klimaat­risico** — stranded assets (waarde-verlies door klimaat­regels of fysieke schade); (3) **Reputatie­risico** — bedrijfshuurders willen geen ongezonde of vervuilende panden; (4) **Toekomst­bestendigheid** — panden die over 20 jaar nog rendabel zijn vergen ESG-aanpassingen; (5) **EU-taxonomie** (sinds 2022) classificeert "duurzame investeringen" op basis van strikte ESG-criteria → toegang tot groene financiering. ESG-standaarden: GRESB, BREEAM, LEED, WELL.',
    },

    // D.4.8 (2)
    {
      id: 'D4-8-a',
      toetstermCode: 'D.4.8',
      type: 'mc',
      prompt: 'Wat is **passief­huis-principe**?',
      options: [
        'Een huis zonder bewoners',
        'Extreme isolatie (Rc > 8), triple glas, zeer luchtdicht (< 0,2 Qv,10), balansventilatie + WTW; geen actief verwarmings­systeem of zeer klein',
        'Een traditioneel huis',
        'Een huis op zonne-energie alleen',
      ],
      correctIndex: 1,
      explanation:
        'Passief­huis = extreem energie­zuinig ontwerp dat **passief** opgewarmd wordt door zon, apparaten en bewoners — zonder of nauwelijks actief verwarmings­systeem. Kenmerken: (1) **Extreme isolatie** Rc > 8 voor alle delen; (2) **Triple glas** standaard, U < 0,8; (3) **Zeer luchtdicht** < 0,2 Qv,10 (vs Bbl 0,4); (4) **Balansventilatie + WTW** voor ventilatie + warmte­terugwinning; (5) **Compact ontwerp** + goede oriëntatie; (6) **Geen koudebruggen**. Resultaat: energie­behoefte < 15 kWh/m²/jr (vs Bbl 35–55). Net iets meer dan BENG vereist.',
    },
    {
      id: 'D4-8-b',
      toetstermCode: 'D.4.8',
      type: 'mc',
      prompt: 'Wat is een **NOM-woning**?',
      options: [
        'Nieuwe Onafhankelijke Modulaire woning',
        'Nul Op de Meter',
        'Nooit Onderhouden Maand',
        'Een type warmtepomp',
      ],
      correctIndex: 1,
      explanation:
        'NOM = Nul Op de Meter — woning die over een jaar **netto evenveel energie opwekt als verbruikt**. Resultaat: netto **€ 0 energie­rekening** (excl. vastrechtkosten voor netaansluiting). Vereist: (1) zeer goede isolatie (BENG-plus niveau); (2) warmtepomp (lucht-water of bodem-water); (3) veel zonnepanelen (8–14 kWp); (4) eventueel thuisaccu; (5) balansventilatie + WTW. Bewoner kan **EPV-vergoeding** (Energieprestatie­vergoeding) aan huurder vragen i.p.v. energierekening (vastgelegd in EPV-contract).',
    },

    // D.4.9 (2)
    {
      id: 'D4-9-a',
      toetstermCode: 'D.4.9',
      type: 'mc',
      prompt: 'Hoe wordt een **energielabel** in NL aangevraagd?',
      options: [
        'Door de gemeente toegekend',
        'Via een gekwalificeerd energieadviseur (RvA-erkend bedrijf, EP-N register) die bouwkundige opname uitvoert, berekening volgens NTA 8800 maakt en label bij RVO registreert; geldig 10 jaar; kosten woning € 200–400',
        'Online zelf via vragenlijst (sinds 2021)',
        'Bij de bank',
      ],
      correctIndex: 1,
      explanation:
        'Sinds 1 januari 2021 alleen **definitief energielabel** door **gekwalificeerd energieadviseur** (RvA-erkend bedrijf, EP-N register voor woning, EP-U voor utiliteit). Proces: (1) adviseur zoeken via energielabel.nl; (2) afspraak voor bouwkundige opname (1–2 uur in woning); (3) documenten verzamelen (tekeningen, garantie­bewijzen isolatie); (4) berekening volgens NTA 8800 (primair fossiel energie­gebruik); (5) registratie bij RVO. Geldig 10 jaar. Kosten woning € 200–400. Het oudere "vereenvoudigd energielabel" (online vragenlijst zelf) is sinds 2021 afgeschaft.',
    },
    {
      id: 'D4-9-b',
      toetstermCode: 'D.4.9',
      type: 'mc',
      prompt: 'Wat zijn de **consequenties** van geen energielabel bij verkoop?',
      options: [
        'Geen consequenties',
        'Verplicht bij verkoop of verhuur',
        'Alleen verbod op verkoop',
        'Verplichte verbouwing',
      ],
      correctIndex: 1,
      explanation:
        'Energielabel is **wettelijk verplicht** bij verkoop, verhuur of nieuwe oplevering van woning of pand. Sinds 2008 (EU-richtlijn EPBD). **Sancties** bij ontbreken: particuliere woning € 170–400; utiliteits­pand € 1.500–6.000+; transactie kan juridisch ongeldig worden. Voor **kantoren > 100 m²** geldt sinds 2023 niet alleen vermelding maar ook **label C-eis** (zie D.4.10). Voor verhuur: vermelding in huurcontract verplicht; ontbreken kan leiden tot huurverlaging bij geschil.',
    },

    // D.4.10 (2)
    {
      id: 'D4-10-a',
      toetstermCode: 'D.4.10',
      type: 'mc',
      prompt: 'Sinds wanneer moeten **kantoorgebouwen > 100 m²** een energielabel **C of beter** hebben?',
      options: [
        'Sinds 2010',
        '1 januari 2023',
        '2030',
        'Pas vanaf 2050',
      ],
      correctIndex: 1,
      explanation:
        'Sinds **1 januari 2023** moeten alle **kantoorgebouwen > 100 m²** in NL een **energielabel C of beter** hebben. Vastgelegd in Bbl. Uitzonderingen: (1) monumenten (Rijks- of gemeentelijk monument); (2) kantoor binnen woon­functie (kantoor < 50 % vloeroppervlak); (3) tijdelijke gebouwen (vergunning < 10 jaar); (4) gebouwen die binnen 2 jaar gesloopt worden. Vanaf 2030 (EU EPBD III) eis aangescherpt naar **label A**.',
    },
    {
      id: 'D4-10-b',
      toetstermCode: 'D.4.10',
      type: 'mc',
      prompt: 'Wat zijn de **consequenties** als een kantoor geen label C heeft sinds 2023?',
      options: [
        'Geen gevolgen',
        'Verbod op gebruik als kantoor; boete tot € 25.000; verzekering kan dekking weigeren; verhuur niet meer wettig',
        'Alleen extra belasting',
        'Verplichte gratis renovatie',
      ],
      correctIndex: 1,
      explanation:
        'Consequenties bij niet voldoen aan label C-eis sinds 1 januari 2023: (1) **Verbod op gebruik** voor kantoor­functie — gemeente kan handhaven; (2) **Boete** door gemeente tot € 25.000 (hoogte afhankelijk); (3) **Verzekering** kan dekking weigeren; (4) **Verhuur niet meer wettig** — huurder kan opzegging eisen en korting op huur; (5) **Verbeter­plan + uitvoering** vereist binnen redelijke termijn. Bij **stranded assets** (panden onmogelijk te renoveren naar label C tegen redelijke kosten): sloop + nieuwbouw of transformatie naar wonen als alternatief.',
    },

    // D.4.11 (3)
    {
      id: 'D4-11-a',
      toetstermCode: 'D.4.11',
      type: 'mc',
      prompt: 'Wat zijn de **NL klimaat­doelen** uit het Klimaatakkoord 2019?',
      options: [
        '20 % CO₂-reductie tegen 2050',
        '2030: 55 % CO₂-reductie t.o.v. 1990 (EU "Fit for 55"); 2050: klimaat­neutraal (netto 0 CO₂); 7 miljoen woningen + 1 miljoen utiliteits­gebouwen verduurzamen tot 2050',
        '100 % zonnepanelen op elk dak',
        'Geen specifieke doelen',
      ],
      correctIndex: 1,
      explanation:
        'NL klimaat­doelen (Klimaatakkoord 2019 + EU "Fit for 55"): **2030**: 55 % CO₂-reductie t.o.v. 1990 (Europese eis); **2050**: klimaat­neutraal — netto 0 CO₂-uitstoot. **Gebouwde omgeving**: 7 miljoen woningen + 1 miljoen utiliteits­gebouwen verduurzamen tot 2050. Maatregelen: **gas­winning Groningen** stoppen (2024 grotendeels), **geleidelijk afscheid aardgas** in woningen (lokaal door gemeenten via warmtevisie), **alle nieuwbouw** all-electric of warmtenet, **alle bestaande bouw** verduurzaamd.',
    },
    {
      id: 'D4-11-b',
      toetstermCode: 'D.4.11',
      type: 'mc',
      prompt: 'Wat is een **belangrijke ontwikkeling** voor de **bestaande gebouwde omgeving**?',
      options: [
        'Alle gebouwen slopen',
        'Hybride warmtepompen als overgangs­technologie (standaard bij vervanging cv-ketel vanaf 2026 mits financieel haalbaar); warmtenetten in steden; verduurzaming naar label A; ESG-investeringen sturen renovatie',
        'Alleen nieuwbouw verduurzamen',
        'Terugkeer naar steenkool',
      ],
      correctIndex: 1,
      explanation:
        'Voor bestaande gebouwde omgeving: (1) **Hybride warmtepompen** worden standaard bij vervanging cv-ketel vanaf 2026 — overgangs­technologie tussen gas + warmtepomp; (2) **Warmtenetten** in 50 % van NL in 2050 — gemeentelijke warmtevisie bepaalt welke wijken; (3) **Verduurzaming naar label A** wordt norm voor verhuur en kantoren; (4) **ESG-investeringen** drijven institutionele beleggers richting verduurzaming; (5) **Subsidies** + BTW-vrijstellingen stimuleren huishoudens; (6) **Lokale gemeente­regelingen** kunnen aanvullende eisen stellen.',
    },
    {
      id: 'D4-11-c',
      toetstermCode: 'D.4.11',
      type: 'mc',
      prompt: 'Wat is **klimaatadaptatie**, naast klimaat­mitigatie?',
      options: [
        'Synoniemen',
        'Aanpassing aan klimaatverandering (waterbuffering, hittestress, waterveiligheid)',
        'Een type warmtepomp',
        'Internationale ontwikkelings­hulp',
      ],
      correctIndex: 1,
      explanation:
        'Twee complementaire strategieën tegen klimaatverandering: (1) **Mitigatie** = oorzaken aanpakken — CO₂-reductie via energietransitie, hernieuwbare bronnen, isolatie, etc.; (2) **Adaptatie** = aanpassing aan reeds optredende klimaat­verandering — voorkomen of beperken van schade. Voor gebouwde omgeving: **regenwater­buffering** (wadi\'s, groendaken voor regenpiek-opvang), **hittestress beperken** (witte daken, schaduw door bomen, goede ventilatie, koeling), **zeespiegel­stijging** (laaggelegen woningen vraagt aandacht), **waterveiligheid** (dijken, evacuatie­plannen). Beide strategieën zijn essentieel voor toekomst­bestendige gebouwen.',
    },
  ],

  terms: [
    {
      term: 'Duurzaamheid',
      definition:
        'Mate waarin een gebouw rekening houdt met energie­verbruik, materialen, gezondheid en levenscyclus.',
    },
    {
      term: 'LCA',
      definition:
        'Life Cycle Assessment — analyse van milieu­impact van gebouw of materiaal over volledige levenscyclus.',
    },
    {
      term: 'MPG',
      definition:
        'Milieuprestatie Gebouw — wettelijke score (€/m²·jaar) van milieubelasting van gebruikte materialen; nieuwbouw max. 0,8 (2025).',
    },
    {
      term: 'BREEAM',
      definition:
        'Internationale duurzaamheids­beoordeling voor gebouwen (Pass-Excellent-Outstanding) — naast Bbl-eisen.',
    },
    {
      term: 'GPR Gebouw',
      definition:
        'Nederlandse duurzaamheidstool — scoort op 5 thema\'s: energie, milieu, gezondheid, gebruikskwaliteit, toekomstwaarde.',
    },
    {
      term: 'Cradle to Cradle (C2C)',
      definition:
        'Ontwerpprincipe waarbij materialen na gebruik volledig her­bruikbaar of biologisch afbreekbaar zijn.',
    },
    {
      term: 'Circulair bouwen',
      definition:
        'Bouwen waarbij materialen op het einde van levensduur in dezelfde of betere kwaliteit hergebruikt worden.',
    },
    {
      term: 'BENG',
      definition:
        'Bijna Energieneutrale Gebouwen — wettelijke eisen voor nieuwbouw: BENG 1 (behoefte), BENG 2 (primair), BENG 3 (% hernieuwbaar).',
    },
    {
      term: 'Energielabel',
      definition:
        'Verplichte indicatie A++++ t/m G; ook beoordeelt geschiktheid voor verkoop/verhuur en kantooreis label C.',
    },
    {
      term: 'NTA 8800',
      definition:
        'Norm voor berekening energieprestatie van gebouwen — basis voor energielabel en BENG.',
    },
    {
      term: 'Hernieuwbare energie',
      definition:
        'Energie uit zon, wind, bodem, biomassa — duurzaam, niet uitputbaar; vereiste voor BENG 3.',
    },
    {
      term: 'Warmtepomp',
      definition:
        'Verwarmt door warmte uit lucht/bodem te onttrekken; rendement (COP) 3-5 — sleutel voor gasloos bouwen.',
    },
    {
      term: 'PV-paneel',
      definition:
        'Photovoltaïsch zonnepaneel; opbrengst in NL ~850 kWh/kWp per jaar — vereiste voor BENG-eisen.',
    },
    {
      term: 'Gasloos bouwen',
      definition:
        'Verplichting voor nieuwbouw sinds 1-7-2018 — geen aardgasaansluiting, alternatieven via warmtepomp of warmtenet.',
    },
    {
      term: 'Materiaalpaspoort',
      definition:
        'Document met alle gebruikte materialen in een gebouw — basis voor toekomstige demontage en hergebruik.',
    },
    {
      term: 'Embodied carbon',
      definition:
        'CO₂-uitstoot opgesloten in productie en transport van materialen; complementair aan operationele CO₂.',
    },
  ],

  games: [
    {
      id: 'D4-gapfill-1', type: 'gapfill',
      title: 'Duurzaamheid + BENG',
      text:
        'Duurzaam bouwen volgt het Triple-P-principe: {{People}} (mens), Planet (milieu), {{Profit}} (welvaart). ' +
        'Sinds 2021 geldt voor nieuwbouw {{BENG}} (Bijna EnergieNeutraal Gebouw) — met 3 indicatoren. ' +
        'Het energielabel loopt van {{A++++}} (zeer zuinig) tot G (zeer slecht), berekend volgens NTA 8800. ' +
        'Kantoren > 100 m² moeten sinds 2023 minimaal label {{C}} hebben.',
      distractors: ['Property', 'EPC', 'A', 'B'],
    },
    {
      id: 'D4-sort-1', type: 'sort',
      title: 'Trias Energetica — volgorde',
      categories: ['Stap 1: Beperk vraag', 'Stap 2: Hernieuwbaar', 'Stap 3: Fossiel efficiënt'],
      items: [
        { label: 'Isolatie Rc verhogen', category: 'Stap 1: Beperk vraag' },
        { label: 'HR++/triple glas', category: 'Stap 1: Beperk vraag' },
        { label: 'Luchtdicht bouwen', category: 'Stap 1: Beperk vraag' },
        { label: 'Zonnepanelen (PV)', category: 'Stap 2: Hernieuwbaar' },
        { label: 'Warmtepomp', category: 'Stap 2: Hernieuwbaar' },
        { label: 'Zonneboiler', category: 'Stap 2: Hernieuwbaar' },
        { label: 'HR-cv-ketel (tijdelijk)', category: 'Stap 3: Fossiel efficiënt' },
      ],
    },
    {
      id: 'D4-matching-1', type: 'matching',
      title: 'BENG-indicatoren + ESG',
      pairs: [
        { left: 'BENG 1', right: 'Maximale energiebehoefte (schil-kwaliteit) in kWh/m²/jr' },
        { left: 'BENG 2', right: 'Maximaal primair fossiel energie­verbruik' },
        { left: 'BENG 3', right: 'Minimaal 40 % hernieuwbare energie' },
        { left: 'E in ESG', right: 'Environmental — milieu, CO₂, circulair' },
        { left: 'S in ESG', right: 'Social — gezondheid, toegankelijkheid' },
        { left: 'G in ESG', right: 'Governance — transparantie, MJOP, risk-management' },
      ],
    },
  ],
}
