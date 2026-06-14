import type { Topic } from '../types/content'

export const C_8_brand: Topic = {
  code: 'C.8',
  section: 'C',
  title: 'Brandveiligheid',
  chapterRef: 'Lesboek hoofdstuk 24',
  blurb:
    'Brandbeveiligings­installaties (noodverlichting, noodaggregaat, vluchtwegaanduiding, brandmelder, slow-whoop, brandmeld­installatie, sleutelkluis, hydrant/brandkraan, droge blusleiding), blusvoorzieningen (sprinkler, brandslanghaspel, poeder-/schuim-/CO₂-blusser, blusdeken), rookmelders (optisch, ionisatie, thermisch) en bouwkundige brandbeveiliging (compartimentering, vluchtwegen, brandwerende materialen, WBDBO).',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · Brandbeveiligings­installaties en signalering',
      toetstermCodes: ['C.8.1'],
      body: `
### Doel
Brandbeveiligings­installaties moeten:
1. **Detecteren** dat er een brand is (rookmelders, brandmeldinstallatie)
2. **Waarschuwen** voor evacuatie (alarmsignaal, slow-whoop)
3. **Verlichten** vluchtroutes (noodverlichting)
4. **Aanduiden** waar de vluchtweg loopt
5. **Blussen of beperken** van uitbreiding (sprinklers, brandwerende compartimentering)
6. **Hulp bieden aan de brandweer** (sleutelkluis, hydrant, droge blusleiding)

### Noodverlichting (NEN-EN 1838)
**Wat is het?**
- Verlichting die **automatisch aangaat** bij stroomuitval of brand
- Voldoende licht voor veilige evacuatie

**Typen**:
- **Vluchtroute­verlichting** — duidt aan waar je heen moet
- **Anti-paniek­verlichting** — voorkomt paniek door verlicht houden van een grote ruimte (theater, concertzaal)
- **Werkplek­verlichting bij gevaarlijke processen** (chemische reacties die afgemaakt moeten worden bij stroomuitval)

**Werking**:
- **Eigen accu** in elk armatuur (kleine LED-units) — werkt nog ~1 uur na stroomuitval
- Of **centraal accusysteem** met noodverlichting­circuit
- **Test­knop** maandelijks; volledig leegtest jaarlijks

### Noodaggregaat
- **Eigen stroomopwekking** bij stroomuitval (dieselgenerator)
- Schakelt automatisch in binnen 15 seconden
- Voor: ziekenhuizen, datacenters, hoogbouw, ondergrondse parkeergarages
- Voorziet: liften (één moet kunnen), brandweerlift, sprinkler­pompen, evacuatie­alarm
- **Onderhoud**: maandelijks proefdraaien, jaarlijks volledige test

### Brandbeveiligings­installatie (componenten)

**Vluchtwegaanduiding**
- **Groene pictogrammen** (vluchtende man + pijl, of "EXIT"-bordjes)
- Verlicht in noodverlichting-systeem
- Aan elke deur in een vluchtroute en boven elke nooduitgang
- **Pictogrammen moeten herkenbaar zijn** ook in rookbelaste situatie

**Brandmelder (handmelder)**
- **Rode drukknop** ("breekglaasje") in vluchtroutes en bij uitgangen
- Mensen kunnen het systeem handmatig activeren
- Signaal naar **brandmeld­centrale** (BMC) die alarm + brandweer aanstuurt

**Slow-whoop**
- **Akoestisch alarm­signaal**: laag-snel oplopend toon (op-en-neer pulserend)
- Verschilt van andere geluiden (telefoon, brandmelder kort gebrul) — herkenbaar als evacuatie-signaal
- **Mannelijk stem-omroep** vaak ingebouwd ("Brand op de eerste verdieping, ontruim onmiddellijk via de dichtstbijzijnde nooduitgang")
- Voorgeschreven volume: 75 dB(A) in slaapvertrek, anders 65 dB(A)

**Brandmeld­installatie (BMI)**
- Centraal systeem dat **automatisch en handmatig** brandsignalen verzamelt
- Verbonden met **rookmelders, hittemelders, sprinklers, handmelders** door het hele gebouw
- Bij alarm: **Slow-whoop activeren + brandweer alarmeren + lift terugroepen + deuren ontgrendelen + sprinkler activeren**
- Verplicht voor gebouwen volgens **Bbl** afhankelijk van gebruiks­functie:
  - Hotels, ziekenhuizen, kinderopvang → verplicht
  - Kantoor > 500 m² of > 4 verdiepingen → verplicht
  - Woningen → één basisrookmelder per verdieping verplicht (zonder centraal systeem)

**Sleutelkluis**
- **Beveiligde sleutelopslag** buiten op de gevel — bevat sleutels voor alle ruimten
- **Brandweer** kan met universele sleutel/code toegang verkrijgen zonder deur in te trappen
- Vooral bij grotere panden, scholen, ziekenhuizen, sport­hallen

**Hydrant / brandkraan**
- **Ondergrondse aansluiting** op de openbare waterleiding voor de brandweer
- Markering: **rood-witte paaltje** of bordje met "B" op de stoep
- Brandweer sluit slangen aan voor bluswater
- Verplicht aanwezig bij wegen langs gebouwen (afstand max. ~80 m)

**Droge blusleiding**
- **Lege leiding** door een gebouw met **aansluitpunt op de begane grond** en **uitlaatpunten op elke verdieping**
- Brandweer **sluit slang aan op het aansluitpunt + bluswater wordt opgepompt**
- Voor hoogbouw — alternatief voor het slepen van slangen door trapgaten
- Verplicht bij **gebouwen > 20 m hoog**
      `.trim(),
    },

    {
      heading: '2 · Blusvoorzieningen',
      toetstermCodes: ['C.8.2'],
      body: `
### Sprinklerinstallatie
**Wat is het?**
- Automatisch **sproei­systeem** met waterleidingen onder het plafond
- Bij brand **smelt de sprinkler-fitting** boven de bron → water spuit gericht omlaag
- **Elk sprinkler­head** activeert apart (alleen waar brand is — niet hele systeem)

**Werking**:
- Permanent gevuld met **water op druk** (~5–7 bar)
- **Smelting­temperatuur fitting**: 68 °C (rood), 79 °C (geel), 93 °C (groen), 141 °C (blauw)
- **Bevestiging**: brandmeld­installatie wordt geactiveerd, brandweer gealarmeerd
- Sprinkler-pomp houdt waterdruk op peil; reservoir voor 30–90 min blussen

**Voor- en nadelen**:
- **Voordeel**: vroeg en gericht blussen, hoge betrouwbaarheid, gespecialiseerde detectie
- **Nadeel**: hoge investering (~€ 30–80/m²), waterschade bij valse activering (zeer zeldzaam), regelmatig onderhoud

**Toepassing**:
- Industrie, magazijnen, datacenter, parkeergarage
- Hoge hotels, ziekenhuizen
- Verplicht bij grote / hoge gebouwen volgens Bbl

### Brandslang­haspel
**Wat is het?**
- **Permanent gevulde** vaste slang op een haspel — meestal in een kast aan de muur
- Slang Ø 25 mm, lengte 20–30 m
- Aangesloten op het drinkwaterleidingnet (eigen kraan)

**Worplengte**
- **Worplengte** = afstand die de waterstraal kan overbruggen
- Standaard ~5 m bij Ø 25 mm slang en normale waterdruk
- Totale **bereik** = slanglengte (20–30 m) + worplengte (5 m) = ~25–35 m vanaf haspel

**Eisen** (NEN-EN 671-1):
- Elk punt van een verblijfsruimte moet binnen bereik liggen
- In trappenhuis op elke verdieping
- Bij elke nooduitgang
- Slang ontrolt zich automatisch bij gebruik

**Toepassing**:
- Kantoren, scholen, hotels, ziekenhuizen
- Industriële ruimten
- Eerste blus-actie door personeel vóór brandweer arrivert

### Blustoestellen (mobiele blussers)

**Poederblusser** (rode label "ABC")
- **Bluspoeder** op basis van mono-ammonium-fosfaat
- **Universeel**: klasse A (vast — papier, hout), B (vloeistof — benzine, olie), C (gas — propaan)
- **Krachtigste blusser**, weinig waterschade
- **Nadeel**: enorme bedek-poeder schade — vooral op elektronica
- **6 kg variant** standaard voor woningen/auto's

**Schuimblusser** (rode label "AB")
- **Schuim** (water + zeep) verspreidt zich over brandende vloeistof
- Klasse A + B; **niet voor elektrische branden** (water-gebaseerd)
- Veiliger voor mensen dan poeder
- Minder schade aan inventaris

**CO₂-blusser** (zwarte label "BCE")
- **Vloeibaar CO₂** onder druk; bij activering uitstoot van koud CO₂-gas
- **Stop zuurstoftoevoer** → blust door verstikking
- **Specifiek voor elektronica** (geen waterschade)
- Klasse B + C; **niet voor klasse A** (heropvlamming mogelijk)
- **Gevaarlijk in kleine ruimten** — zuurstofgehalte daalt → verstikkings­gevaar voor mensen
- **Koud uitlaatgas** (–78 °C) → bevriezings­gevaar voor handen

**Blusdeken**
- **Brandveilig laken** dat over een brand wordt gelegd
- **Verstikkings­principe**: stopt zuurstoftoevoer
- Voor **pan­branden** in keuken (klassiek) en kleine vlamhaarden
- **Goedkoop, eenvoudig** — geen onderhoud nodig

### Brandklassen
| Klasse | Inhoud | Voorbeeld | Geschikte blusser |
|---|---|---|---|
| **A** | Vaste stoffen | Hout, papier, textiel | Water, schuim, poeder ABC |
| **B** | Vloeistoffen | Benzine, olie, alcohol | Schuim, poeder, CO₂ |
| **C** | Gassen | Propaan, methaan | Poeder |
| **D** | Metalen | Magnesium, natrium | Speciale metaal­poeder |
| **F** | Frituurvet | Vegetabel olie hoog verhit | Speciale vet-blusser, blusdeken |
| **E** (oud) | Elektriciteit | Brand bij apparatuur onder spanning | CO₂, poeder (na uitschakelen!) |

### Plaatsing van blustoestellen
- **Per ruimte** of per zone — niet meer dan ~30 m loopafstand
- Aan **vluchtweg-zijde** (bij uitgang, niet binnenin de ruimte waar brand kan zijn)
- **Zichtbaar geplaatst** met pictogram en op gemarkeerde hoogte (1,5 m)
- **Periodieke keuring** verplicht (NEN 2559) — eens per jaar onderhoud, om de 5 jaar revisie
      `.trim(),
    },

    {
      heading: '3 · Rookmelders: optisch, ionisatie en thermisch',
      toetstermCodes: ['C.8.3'],
      body: `
### Optische rookmelder (foto-elektrische rookmelder)
**Werking**:
- **LED-lichtbron** in een meetkamer + **foto­sensor** loodrecht op de lichtbundel
- Bij **rookdeeltjes** wordt het licht **verstrooid** (Tyndall-effect) → een deel raakt de sensor
- Boven drempelwaarde → alarm

**Voordelen**:
- **Snel bij smeulbranden** (matras, elektrische kabel, sigaret) — veel rook, weinig vlam
- **Geen radioactief materiaal**
- **Standaard in woningen** sinds 2022 (Bbl-verplichting)

**Nadelen**:
- Reageert minder snel op snelle vlam­branden zonder veel rook
- **Vals alarm** bij stoom (douche, koken), stof, insecten in meetkamer

**Toepassing**:
- **Verplicht in alle woningen** (sinds juli 2022, één per verdieping en bij slaapvertrek)
- Vluchtroute, gangen
- Standaard in moderne brandmeld­installaties

### Ionisatie-rookmelder
**Werking**:
- **Radioactief americium-241** ioniseert lucht tussen twee elektroden → kleine stroom loopt
- **Rookdeeltjes** binden de ionen → stroom daalt → alarm

**Voordelen**:
- **Zeer snel bij snelle vlam­branden** met fijne rookdeeltjes
- Compact, betrouwbaar

**Nadelen**:
- **Bevat radioactief materiaal** (americium-241, halveringstijd 432 jaar) → speciale afval­verwerking nodig
- **Niet meer aanbevolen voor woningen** in NL — vervangen door optische
- **Minder gevoelig voor smeulbranden** dan optische

**Toepassing**:
- **Historisch** veel in oudere installaties
- **Wordt uitgefaseerd** — bij vervanging worden ze door optische vervangen

### Thermische melder (warmtemelder)
**Werking**:
- **Hittegevoelige sensor** (thermistor of bimetaal)
- Alarm bij:
  - **Vaste drempel**: boven 60–70 °C (statisch)
  - **Snelle temperatuur­stijging**: bv. > 10 °C per minuut (dynamisch)
  - Combinatie van beide

**Voordelen**:
- **Geen vals alarm** door rook, stof of damp
- **Geschikt voor stoffige of dampige ruimten** (keuken, garage, badkamer, fabrieks­hal)

**Nadelen**:
- **Langzamer reageren** dan rookmelders (vuur moet al groot zijn)
- Niet geschikt als enige melder in slaapruimten (te langzaam voor evacuatie tijdens slaap)

**Toepassing**:
- **Keukens** waar rook­alarm te vaak zou activeren
- **Garages, parkeergarages** met dieselrook
- **Industriële ruimten** met stof
- Aanvullend op rookmelders in een centrale BMI

### Multi-sensor (modern)
- **Combinatie optisch + thermisch + soms CO** in één melder
- **Slimme detectie** — bij rook + temperatuur­stijging actief, bij alleen stoom passief
- **Minder vals alarm**, snellere detectie van echte brand
- Modern standaard in nieuwbouw

### Plaatsing van rookmelders (Bbl 2022)
**In een woning verplicht**:
- **Eén op elke verdieping** in een vluchtroute (gang, overloop)
- **Eén bij elke slaap­vertrek** of in de gang vlakbij (binnen 7,5 m)
- Niet boven keuken (vals alarm), badkamer (stoom), of meer dan 30 cm van wand

**Eisen**:
- **Gekoppeld werken** aanbevolen (één melder afgaat = alle melders gaan af) — verplicht bij nieuwbouw 2022+
- **Stroom­voorziening**: 230 V met **back-up-batterij** OF 10-jarige batterij
- **Onderhoud**: maandelijks test­knop, jaarlijks reinigen, vervangen na 10 jaar

### Andere brandgerelateerde sensoren
- **CO-melder** (koolmonoxide) — verplicht bij verbrandings­toestellen (geiser, gashaard, houtkachel) sinds 2022
- **Brandbare-gas-detector** — voor LPG of methaan
- **Vlam-detector** — UV/IR sensoren voor open vlam (industrie)
      `.trim(),
    },

    {
      heading: '4 · Brandmeld­installatie (BMI)',
      toetstermCodes: ['C.8.4'],
      body: `
### Functie
Een **brandmeld­installatie (BMI)** is het centrale systeem dat alle brandsignalen in een gebouw verzamelt, beoordeelt en acties triggert. Functies:

1. **Detecteren**: rookmelders, hittemelders, sprinkler-vlowschakelaars, hand­melders
2. **Lokaliseren**: signaal van welke melder = welke ruimte
3. **Waarschuwen** binnen­personeel (slow-whoop + spraakomroep)
4. **Alarm doormelden** naar brandweer (via openbare alarm­telefoon­lijn of internet)
5. **Aansturen** brandveiligheids­acties:
   - **Liften** terug naar begane grond en uitschakelen
   - **Brandweerlift** wordt gereserveerd
   - **Branddeuren** sluiten automatisch (gevoed door deur­dranger met magneet die uitschakelt)
   - **Sprinkler** activeren
   - **Ventilatie** uitschakelen (geen rook­verspreiding)
   - **Rookluiken** openen in trappenhuizen
   - **Toegangsdeuren** ontgrendelen voor evacuatie

### Onderdelen
- **Brandmeld­centrale (BMC)** — hoofd­paneel in trappenhuis bij ingang
- **Detectoren** — rookmelders, hittemelders, vlam­detectoren door het hele gebouw
- **Handmelders** — rode knop in vluchtroutes
- **Akoestische signaalgevers** — slow-whoop sirenes
- **Optische signaalgevers** — knipperende rode lampen (voor doven en in lawaaiige ruimten)
- **Doormeld-eenheid** — verbinding met meldkamer brandweer
- **Voedings­eenheid** + **noodstroom** (accu of noodaggregaat)

### Klasses van BMI (Bbl)
- **Klasse A** — volledige detectie alle ruimten (maximaal niveau)
- **Klasse B** — beperkte detectie alleen vluchtroutes
- **Klasse C** — alleen handmelders en signalering (minimaal)
- **Klasse D** — gedeeltelijke detectie + handmelders

Welke klasse is verplicht hangt af van de **gebruiks­functie**:
- **Ziekenhuis, hotel, kinderopvang**: Klasse A
- **Kantoor groot**: Klasse B of A
- **Klein kantoor, winkel**: Klasse C
- **Woning**: één optische rookmelder per verdieping (geen klasse-BMI nodig)

### Werkwijze bij brand
1. **Detectie** door rook­melder → signaal naar BMC
2. **BMC** verwerkt het signaal, **lokaliseert** (welke ruimte/zone)
3. **Vertragings­tijd** (typisch 30 sec — 3 min) om vals alarm uit te sluiten — personeel kan checken
4. Bij bevestiging of geen actie: **algemeen alarm** — slow-whoop + spraakomroep
5. **Brandweer** wordt gealarmeerd via doormelding
6. **Lift naar begane grond** + brand­acties geactiveerd
7. **Evacuatie** via vluchtroutes; sleutelkluis-toegang voor brandweer

### Onderhoud
- **Maandelijkse functietest** door eigenaar
- **Jaarlijkse keuring** door BORG-erkend bedrijf
- **5-jaarlijkse certificering** (REOB voor onderhoud, BMI-certificaat)
- **Storing-melding** binnen vier uur opgelost (bij type A en B)

### Voor de makelaar
- Bij bedrijfspand: vraag **BMI-certificaat** (geldig 1–5 jaar) — wettelijk verplicht voor sommige functies
- **Onderhouds­contract** met BORG-erkend bedrijf — voorwaarde voor brandverzekering
- **Logboek brandveiligheid** — overhandigen bij verkoop
- **Aanwezigheid sprinklers + sleutelkluis + hydrant­plaats** kennen bij rondleiding
      `.trim(),
    },

    {
      heading: '5 · Bouwkundige brandbeveiliging: compartimentering, vluchtwegen, WBDBO',
      toetstermCodes: ['C.8.5'],
      body: `
**Bouwkundige brandbeveiliging** is de **passieve** bescherming — de bouw is zo gemaakt dat brand traag uitbreidt en dat mensen veilig kunnen vluchten. Verschillend van **actieve** brandbeveiliging (sprinkler, rookmelder, blusser).

### Compartimentering
**Wat is het?**
Een **brand­compartiment** = ruimte (of groep ruimten) die door brand-/rookwerende constructies wordt afgesloten van de rest van het gebouw. Doel: brand blijft beperkt tot één compartiment terwijl andere ruimten en personen veilig blijven.

**Bbl-eisen**:
- **Woningen**: elke woning is een eigen brand­compartiment
- **Utiliteit**: max. **1.000 m² per compartiment** (winkel, kantoor); kleiner bij verhoogd risico
- **Industrie**: max. 2.500 m² maar afhankelijk van type opslag

**WBDBO** = **Weerstand tegen Brand-Doorslag en Brand-Overslag**
- **Doorslag** = brand gaat door wand of vloer naar buurcompartiment
- **Overslag** = brand gaat via buitenkant (gevelvuur, dakvuur) naar ander deel
- Eenheid: **minuten brandwerendheid**

**Standaard­eisen voor WBDBO**:
- Woning naar woning: **60 min**
- Woning naar trappenhuis: **30 min** (max. 4 verdiepingen) of 60 min
- Brandcompartiment in utiliteit: **60 min** standaard, **120 min** bij hoge risico's
- Brandweerlift / vluchtroute­schacht: **60–120 min**

### Brandwerende materialen en constructies
**Brandwerende wanden**:
- **Beton** — inherent brandwerend (60–120 min afhankelijk dikte)
- **Kalkzandsteen + cellenbeton** — brandwerend, lange historie
- **Gipskartonplaten** — modern, één laag 12,5 mm = ~30 min, dubbel ~60 min
- **Steenwol-isolatie** — onbrandbaar, smelt pas boven 1.000 °C
- **Brandwerende deuren** — gecertificeerd 30/60/90 min, vaak met deurdranger + sluitsysteem

**Brandwerende vloeren**:
- **Betonvloer** — inherent brandwerend
- **Houten vloer + gipsplafond** kan 30 min halen
- **Stalen onderslagbalken** moeten **brandwerend bekleed** (steenwol, gipsplaten, spuitmortel, of brandwerende verf intumescent)

**Brandwerende leidingdoorvoeren**:
- Bij doorvoer van leidingen door brandwerende constructie → **doorvoer-afdichting** verplicht
- **Brandwerende kit** of **brandbalg** rond leiding
- Op tekening aangegeven met **rood vierkant** of "BW" symbol

### Vluchtwegen
**Definitie**: route van elke werkplek/verblijfsruimte naar **veilig buiten** (vrije lucht).

**Bbl-eisen**:
- **Maximale loopafstand** tot vluchtweg: 30 m (verblijfs­gebied) of 50 m (overig)
- **Maximale loopafstand** tot **twee onafhankelijke vluchtroutes**: 75 m
- **Bredere ruimten**: minimum twee uitgangen
- **Vluchtweg­breedte**: minimaal 0,85 m per 25 personen, met minimum **1,1 m** in trappenhuis
- **Geen draaideuren** of sluis-deuren in vluchtroute (alleen normale deuren die naar buiten openen)

**Vluchtdeur**:
- **Opent in vluchtrichting** (naar buiten of naar de vluchtweg)
- **Panieksluiting** (drukbalk) — geen sleutel nodig
- **Niet op slot** vanuit binnen ten tijde van gebruik
- **Vluchtweg­aanduiding** (groen pictogram) boven en bij de deur

**Trappenhuis als vluchtroute**:
- Brandwerend afgesloten van de rest (30–60 min)
- **Rookluik** bovenin (handmatig of automatisch) voor rookafvoer
- **Geen brandbaar materiaal** in trappenhuis (geen meubilair, geen vuilcontainer, geen opslag)
- **Verlichting** + **noodverlichting** verplicht

**Aanwijzingen langs vluchtweg**:
- **Vluchtwegaanduiding** elke 10 m
- **Anti-paniek­verlichting** in grote zalen
- **Vluchtplattegronden** bij elke uitgang

### Inhoud en regelgeving
**Bbl** (Besluit bouwwerken leefomgeving — sinds 2024 actief, vervangt Bouwbesluit):
- Hoofdstuk over **Brandveiligheid** met dwingende eisen per gebruiksfunctie
- **NEN 6090** voor uitgangsbreedte en aantal vluchtroutes
- **NEN 6068** voor weerstand brand­doorslag/-overslag

**Omgevingswet** + **APV** (Algemene Plaatselijke Verordening):
- Aanvullende eisen lokale gemeente
- **Brandweer­advies** verplicht bij vergunning vraagstuk

**NEN 2535** — brandmeldinstallatie­eisen
**NEN 6088** — vluchtwegaanduidingen
**NEN 4001** — keuring van brandwerende constructies
**NEN-EN 1838** — noodverlichting

### Brandweer-bereikbaarheid
- **Oprijbaar voor brandweerwagen** binnen 40 m van het pand
- **Opstelplaats** voor de hoogwerker (min. 8 × 4 m)
- **Hydrant binnen 80 m** van pand
- **Sleutelkluis** of brandweer­toegang
- **Droge blusleiding** bij gebouwen > 20 m

### Onderhoud bouwkundige brandbeveiliging
- **Branddeuren** maandelijks visueel checken (dichtgaan, dranger werkt)
- **Doorvoeren** in brandwerende wanden niet ongedaan maken (geen open leidingschacht!)
- **Vluchtroutes vrijhouden** — geen meubilair, geen opslag, geen geblokkeerde deuren
- **Pictogrammen** zichtbaar en geldig
- **Logboek bijhouden** — alle onderhoud, testen, incidenten

### Voor de makelaar (zeer relevant!)
- **Bedrijfspand bij overdracht**: vraag **brandweer­rapport** + **gebruiksvergunning**
- **Restaurant, hotel, zorg, school**: extra strenge eisen — controleer bij gemeente
- **Bbl** vs Bouwbesluit (oud): controleer welke regels gelden voor het bouwjaar van het pand
- **Brandverzekering** vereist correct onderhouden brandbeveiliging — anders dekking weg
- **Bestemmingsplan-wijziging** (kantoor naar woning): kan zwaardere eisen opleveren
      `.trim(),
    },
  ],

  toetstermen: [
    {
      code: 'C.8.1',
      text: 'Benoemt het doel en de functie van een noodverlichtings­installatie, noodaggregaat en brandbeveiligings­installatie (vluchtwegaanduiding, brandmelder, slow-whoop, brandmeld­installatie, sleutelkluis, hydrant/brandkraan en droge blusleiding).',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'C.8.2',
      text: 'Benoemt de blusvoorzieningen sprinkler­installatie, brandslang­haspel (worplengte), poederblusser, schuimblusser, CO₂-blusser en blusdeken.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
    {
      code: 'C.8.3',
      text: 'Benoemt de functie van de typen rookmelders: optische rookmelder, ionisatie-rookmelder en thermische rookmelder.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
    {
      code: 'C.8.4',
      text: 'Benoemt de functie van een brandmeld­installatie.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
    {
      code: 'C.8.5',
      text: 'Benoemt de voornaamste maatregelen in en toevoegingen aan de bouwkundige constructies in het kader van brandbeveiliging: compartimentering, vluchtwegen, brandwerende materialen en constructies, relatie met regelgeving en brandweer.',
      niveau: 'BT2',
      bloom: 'Kennis',
      metDrawing: true,
    },
  ],

  questions: [
    // C.8.1 (4)
    {
      id: 'C8-1-a',
      toetstermCode: 'C.8.1',
      type: 'mc',
      prompt: 'Wat is een **slow-whoop**?',
      options: [
        'Een type sprinkler',
        'Een akoestisch evacuatie­signaal: laag-snel oplopende toon (op-en-neer pulserend) — herkenbaar als ontruimings­signaal; vaak gecombineerd met spraak­omroep ("Brand op verdieping X, ontruim onmiddellijk")',
        'Een snelle rookmelder',
        'Een waterpomp voor brandweer',
      ],
      correctIndex: 1,
      explanation:
        'Slow-whoop = laag-snel oplopende sirene-toon (op-en-neer pulserend), zeer herkenbaar als evacuatie­signaal en onderscheidend van andere geluiden (telefoon, alarm­bel). Vaak gecombineerd met spraak­omroep voor specifieke instructies. Voorgeschreven volume: 75 dB(A) in slaapvertrek, anders 65 dB(A). Standaard in brandmeld­installaties van scholen, hotels, ziekenhuizen, kantoren.',
    },
    {
      id: 'C8-1-b',
      toetstermCode: 'C.8.1',
      type: 'mc',
      prompt: 'Wat is een **droge blusleiding** en wanneer is deze verplicht?',
      options: [
        'Een lege waterleiding voor reparatie',
        'Een lege leiding door een gebouw met aansluitpunt op begane grond en uitlaatpunten op elke verdieping — brandweer sluit slang aan en pompt bluswater op; verplicht bij gebouwen > 20 m hoog',
        'Een natte slang voor de brandweer',
        'Een sprinkler­leiding zonder water',
      ],
      correctIndex: 1,
      explanation:
        'Droge blusleiding = permanent geïnstalleerde lege buis door een hoogbouw, met aansluitpunt aan de gevel op begane grond (voor brandweer-slang) en uitlaatpunten op elke verdieping. Brandweer pompt vanaf de begane grond bluswater op naar de verdieping waar gebrand wordt — sneller dan slangen door trapgaten slepen. Verplicht bij gebouwen > 20 m.',
    },
    {
      id: 'C8-1-c',
      toetstermCode: 'C.8.1',
      type: 'mc',
      prompt: 'Wat is het doel van een **sleutelkluis** aan de buitenzijde van een gebouw?',
      options: [
        'Decoratie',
        'Beveiligde opslag van sleutels die de brandweer kan openen met universele sleutel/code — toegang verkrijgen zonder deur in te trappen; gangbaar bij grotere panden, scholen, ziekenhuizen, sporthallen',
        'Diefstal­beveiliging',
        'Voor de postbode',
      ],
      correctIndex: 1,
      explanation:
        'Een sleutelkluis (brandweer-sleutelbuis) bevat sleutels voor alle ruimten in een gebouw. Brandweer heeft een universele sleutel of kent de code → kan zonder schade aan deuren of muren toegang verkrijgen. Verplicht bij gebouwen waar brandweer toegang moet kunnen krijgen zonder de eigenaar (kantoren leeg ’s nachts, scholen, sport­hallen, gemeenschapsruimten).',
    },
    {
      id: 'C8-1-d',
      toetstermCode: 'C.8.1',
      type: 'mc',
      prompt: '**Noodverlichting** in een gebouw heeft welke functie?',
      options: [
        'Decoratieve verlichting bij feestjes',
        'Automatisch aangaan bij stroomuitval of brand — verlichting van vluchtroutes voor veilige evacuatie; ook anti-paniek­verlichting in grote zalen; werkt op eigen accu (~1 uur)',
        'Energie­besparing in nachtelijke uren',
        'Verwarming van koude gangen',
      ],
      correctIndex: 1,
      explanation:
        'Noodverlichting volgens NEN-EN 1838 schakelt automatisch in bij stroomuitval of brand. Functies: (1) **vluchtroute­verlichting** — toont waar je heen moet; (2) **anti-paniek­verlichting** in grote zalen (theater, concertzaal); (3) **werkplek­verlichting bij gevaarlijke processen**. Eigen accu per armatuur (~1 uur) of centraal systeem. Maandelijkse test­knop, jaarlijkse leegtest.',
    },

    // C.8.2 (4)
    {
      id: 'C8-2-a',
      toetstermCode: 'C.8.2',
      type: 'mc',
      prompt: 'Welke blusser is geschikt voor een **brand bij elektrische apparatuur onder spanning**?',
      options: [
        'Waterblusser',
        'Schuimblusser',
        'CO₂-blusser — blust door verstikking (geen waterschade aan elektronica) en is veilig bij apparatuur onder spanning',
        'Blusdeken',
      ],
      correctIndex: 2,
      explanation:
        'CO₂-blusser is specifiek voor elektronica/elektriciteit: blust door zuurstoftoevoer te stoppen (verstikking), geen waterschade, veilig bij apparatuur onder spanning. Klasse B + C. **Niet voor klasse A** (heropvlamming mogelijk). **Gevaarlijk in kleine ruimten** — zuurstofgehalte daalt, verstikkings­gevaar voor mensen. Koud uitlaatgas (-78 °C) → bevriezings­gevaar voor handen.',
    },
    {
      id: 'C8-2-b',
      toetstermCode: 'C.8.2',
      type: 'mc',
      prompt: 'Wat is **brandklasse F** en welke bluser is ervoor geschikt?',
      options: [
        'Vaste stoffen — waterblusser',
        'Brandend frituurvet (vegetabel olie hoog verhit) — speciale vet-blusser of blusdeken; geen water (waterstof­explosie!)',
        'Vlam­branden — sprinkler',
        'Synoniem voor klasse E',
      ],
      correctIndex: 1,
      explanation:
        'Brandklasse F is brandend frituurvet bij zeer hoge temperatuur (~300 °C). Water gieten op frituurbrand veroorzaakt een explosief stoom-vetnevel-wolk (water verdampt direct, vet vliegt rond). Geschikt: speciale F-blusser of blusdeken (afdekken → zuurstoftoevoer stoppen). In horecakeukens vaak een vast blussysteem boven het frituur (Ansul of soortgelijk).',
    },
    {
      id: 'C8-2-c',
      toetstermCode: 'C.8.2',
      type: 'mc',
      prompt: 'Wat is de **worplengte** van een brandslang­haspel met Ø 25 mm slang?',
      options: [
        '1 m',
        '~5 m bij normale waterdruk — totaal bereik (slang + worplengte) = ~25–35 m vanaf haspel',
        '20 m',
        '100 m',
      ],
      correctIndex: 1,
      explanation:
        'Worplengte = de afstand die de waterstraal kan overbruggen, ~5 m bij standaard Ø 25 mm slang en normale waterdruk. Het totale bereik = slanglengte (20–30 m) + worplengte (5 m) = ~25–35 m vanaf de haspel. NEN-EN 671-1 verplicht: elk punt in een verblijfsruimte binnen dit bereik. Plaatsing: in trappenhuis op elke verdieping en bij elke nooduitgang.',
    },
    {
      id: 'C8-2-d',
      toetstermCode: 'C.8.2',
      type: 'mc',
      prompt: 'Bij een **sprinkler­installatie** activeren bij brand:',
      options: [
        'Alle sprinklers tegelijk in het hele gebouw',
        'Alleen de sprinkler­heads boven de brand — door smelting van de fitting (68–141 °C drempel) opent elke sprinkler individueel waar de temperatuur stijgt',
        'Geen sprinkler — eerst moet de brandweer komen',
        'Eén sprinkler per ruimte',
      ],
      correctIndex: 1,
      explanation:
        'Sprinkler-systeem werkt zone-gewijs: **elke sprinkler-head heeft een eigen smelting­fitting** (rood = 68 °C, geel = 79 °C, groen = 93 °C, blauw = 141 °C). Boven de brand stijgt de temperatuur → fitting smelt → die individuele sprinkler activeert. Andere sprinklers blijven gesloten — water spuit alleen waar brand is. Dit voorkomt onnodige waterschade. Tegelijk wordt brandmeld­centrale geactiveerd en brandweer gealarmeerd.',
    },

    // C.8.3 (3)
    {
      id: 'C8-3-a',
      toetstermCode: 'C.8.3',
      type: 'mc',
      prompt: 'Wat is het werkings­principe van een **optische rookmelder**?',
      options: [
        'Radioactieve straling',
        'LED-licht + fotosensor in een meetkamer; rookdeeltjes verstrooien het licht (Tyndall-effect) → fotosensor detecteert lichtverstrooiing → alarm. Sinds 2022 verplicht in alle Nederlandse woningen',
        'Hittegevoelige thermistor',
        'CO-gevoelige chemische cel',
      ],
      correctIndex: 1,
      explanation:
        'Optische rookmelder werkt via lichtverstrooiing: een LED-bron stuurt licht in een meetkamer, een foto­sensor staat loodrecht. Bij heldere lucht raakt het licht de sensor niet. Bij rookdeeltjes wordt het licht verstrooid (Tyndall-effect) → een deel raakt de sensor → alarm. Zeer goed bij smeulbranden (matras, kabel, sigaret). Verplicht in alle NL-woningen sinds juli 2022.',
    },
    {
      id: 'C8-3-b',
      toetstermCode: 'C.8.3',
      type: 'mc',
      prompt: 'Voor een **keuken of garage** met veel stoom en dieselrook is welke type melder geschikt?',
      options: [
        'Optische rookmelder',
        'Ionisatie-rookmelder',
        'Thermische melder (warmtemelder) — reageert op temperatuur­stijging (boven 60–70 °C of > 10 °C/min); geen vals alarm door stoom of dampe',
        'CO-melder',
      ],
      correctIndex: 2,
      explanation:
        'Thermische melder (warmtemelder) is ongevoelig voor rook, stoom en damp — reageert alleen op temperatuur­stijging. Twee uitvoeringen: vaste drempel (60–70 °C) of dynamisch (>10 °C/min stijging). Voor keuken, garage, badkamer waar rookmelders te vaak vals zouden alarmeren. Nadeel: langzamer reageren dan rookmelders, dus niet als enige melder in slaapruimten. Vaak gekoppeld aan centrale BMI als aanvulling.',
    },
    {
      id: 'C8-3-c',
      toetstermCode: 'C.8.3',
      type: 'mc',
      prompt: 'Waarom worden **ionisatie-rookmelders niet meer aanbevolen** voor nieuwe NL-woningen?',
      options: [
        'Ze werken niet meer',
        'Ze bevatten radioactief americium-241 (halveringstijd 432 jaar) → speciale afvalverwerking nodig; minder gevoelig voor smeulbranden dan optische melders',
        'Ze zijn te duur',
        'Ze geven te veel vals alarm',
      ],
      correctIndex: 1,
      explanation:
        'Ionisatie-rookmelders gebruiken een radioactief Am-241 bronnetje. Hoewel zeer weinig (~µg per melder), is dit een **radioactieve bron** die speciale afvalverwerking vereist (niet bij gewoon huisvuil!). Bovendien zijn ze minder gevoelig voor smeulbranden (lange smeerlinie, weinig vlam — typisch in slaapkamers) dan optische melders. NL beleid sinds 2022: alleen optische rookmelders verplicht.',
    },

    // C.8.4 (3)
    {
      id: 'C8-4-a',
      toetstermCode: 'C.8.4',
      type: 'mc',
      prompt: 'Wat doet een **brandmeld­installatie (BMI)**?',
      options: [
        'Alleen rookmelders met luid signaal',
        'Centraal systeem dat signalen van rook-, hitte-, vlam-detectoren + handmelders verzamelt, lokaliseert, brandweer doormeldt, alarm activeert (slow-whoop), liften terugroept, branddeuren sluit, sprinkler activeert',
        'Een sprinklerpomp',
        'Een blusapparaat',
      ],
      correctIndex: 1,
      explanation:
        'BMI is het centrale brandbeveiligings-brein: alle detectoren (rook, hitte, vlam, hand­melders, sprinkler-flowmeters) leveren signalen aan de brandmeld­centrale (BMC). BMC verwerkt en activeert: alarm (slow-whoop), doormelding brandweer, liften terug naar begane grond, branddeuren sluiten (magneten worden uitgeschakeld), sprinklers, ventilatie uit (geen rookverspreiding), rookluiken open. Verplicht volgens Bbl bij hotels, ziekenhuizen, kantoren > 500 m², scholen.',
    },
    {
      id: 'C8-4-b',
      toetstermCode: 'C.8.4',
      type: 'mc',
      prompt: 'Een brandmeld­installatie heeft een **vertragings­tijd** van enkele minuten tussen detectie en algemeen alarm. Waarom?',
      options: [
        'Voor energie­besparing',
        'Om vals alarm uit te sluiten — personeel kan in deze tijd ter plekke controleren of er echt brand is; bij bevestiging of geen actie volgt het algemene alarm en doormelding brandweer',
        'Voor wettelijke verplichting',
        'Voor decoratieve reden',
      ],
      correctIndex: 1,
      explanation:
        'Vertragings­tijd (typisch 30 sec — 3 min) is essentieel om vals alarm uit te sluiten. Een lokale signalering gaat direct af op de afdeling (intern personeel kan checken). Pas na bevestiging of bij geen menselijke reactie wordt het **algemene alarm** geactiveerd (slow-whoop + brandweer-doormelding). Bij directe activatie zou een vals alarm de hele gebouw onnodig evacueren en brandweer onnodig laten uitrukken.',
    },
    {
      id: 'C8-4-c',
      toetstermCode: 'C.8.4',
      type: 'mc',
      prompt: 'Wat is verplicht voor een **woning** volgens Bbl 2022 m.b.t. brand­detectie?',
      options: [
        'Volledige Klasse A brandmeld­installatie',
        'Eén optische rookmelder per verdieping in vluchtroute + bij elk slaapvertrek (binnen 7,5 m); gekoppeld werken aanbevolen; CO-melder bij verbrandings­toestellen',
        'Sprinkler systeem',
        'Geen verplichting',
      ],
      correctIndex: 1,
      explanation:
        'Bbl-eis sinds juli 2022: één optische rookmelder per verdieping in vluchtroute (gang, overloop) + bij elke slaapvertrek (max. 7,5 m afstand). Bij verbrandings­toestellen (gashaard, geiser, houtkachel) ook CO-melder verplicht. Gekoppeld werken (één melder af = alle melders af) is aanbevolen en bij nieuwbouw verplicht. Geen centrale BMI nodig voor gewone woningen.',
    },

    // C.8.5 (4)
    {
      id: 'C8-5-a',
      toetstermCode: 'C.8.5',
      type: 'mc',
      prompt: 'Wat is **compartimentering** in brandveiligheid?',
      options: [
        'Het indelen van een gebouw in kantoor-zones',
        'Het indelen van een gebouw in brand­compartimenten — ruimten die door brand-/rookwerende constructies (60+ min) van elkaar zijn afgesloten zodat brand beperkt blijft tot één compartiment',
        'Het scheiden van warm en koud water',
        'Het reguleren van ventilatie',
      ],
      correctIndex: 1,
      explanation:
        'Compartimentering = het opdelen van een gebouw in brand­compartimenten. Elke compartiment wordt omsloten door brand-/rookwerende wanden en vloeren (typisch WBDBO ≥ 60 min). Brand in één compartiment blijft daar terwijl andere ruimten en personen beschermd blijven. Bbl-eisen: woningen elk eigen compartiment; utiliteit max. 1.000 m² per compartiment; industrie max. 2.500 m².',
    },
    {
      id: 'C8-5-b',
      toetstermCode: 'C.8.5',
      type: 'mc',
      prompt: 'Wat betekent **WBDBO**?',
      options: [
        'Werk Bij Direct Bouw­Overleg',
        'Weerstand tegen Brand-Doorslag en Brand-Overslag — in minuten brandwerendheid; doorslag = via wand/vloer naar buurcompartiment, overslag = via buitenkant (gevel/dak); woningscheidende constructie WBDBO 60 min standaard',
        'Wet Brandveiligheid Doorgang Bouw­Object',
        'Welbevinden Brand Door Branden Op',
      ],
      correctIndex: 1,
      explanation:
        'WBDBO = Weerstand tegen Brand-Doorslag en Brand-Overslag. Doorslag = brand gaat door wand of vloer naar buurcompartiment. Overslag = brand gaat via buitenkant (gevelvuur, dakvuur) naar ander deel van gebouw. Eenheid: minuten brandwerendheid. Bbl-eisen: woning-naar-woning 60 min; woning-naar-trappenhuis 30 min (lage bouw) of 60 min; utiliteit 60–120 min. Belangrijke bouwfysische maatregel.',
    },
    {
      id: 'C8-5-c',
      toetstermCode: 'C.8.5',
      type: 'mc',
      prompt: 'In welke richting opent een **vluchtdeur in een vluchtroute**?',
      options: [
        'Naar de vluchtruimte toe (naar binnen)',
        'In de vluchtrichting (naar buiten of naar de vluchtweg) — zodat bij paniek de menigte de deur openduwt; met panieksluiting (drukbalk) zonder sleutel',
        'Schuift zijwaarts',
        'Maakt niet uit',
      ],
      correctIndex: 1,
      explanation:
        'Vluchtdeuren moeten openen **in de vluchtrichting** (naar buiten of naar de vluchtweg toe). Bij paniek duwt een menigte voorwaarts — een naar binnen openende deur zou opzettelijk dicht worden geduwd, evacuatie onmogelijk. **Panieksluiting** = drukbalk over de hele breedte van de deur; duwen opent direct, geen sleutel nodig. Standaard bij nooduitgangen van openbare gebouwen.',
    },
    {
      id: 'C8-5-d',
      toetstermCode: 'C.8.5',
      type: 'mc',
      prompt: 'Wat is de **maximale loopafstand** in een verblijfsgebied tot een vluchtweg volgens Bbl?',
      options: [
        '5 m',
        '30 m (verblijfsgebied) of 50 m (overig); tot twee onafhankelijke vluchtroutes max. 75 m',
        '200 m',
        'Onbeperkt',
      ],
      correctIndex: 1,
      explanation:
        'Bbl-eisen vluchtwegen: maximale loopafstand tot een vluchtroute = **30 m** in verblijfsgebied (woon-, werkplek), **50 m** in overige ruimten (techniek, opslag). Tot twee onafhankelijke vluchtroutes max. **75 m**. Vluchtweg­breedte minimaal 0,85 m per 25 personen, minimum 1,1 m in trappenhuis. Brede ruimten met meer dan 25 personen vergen twee uitgangen. NEN 6090 specificeert de exacte eisen.',
    },
  ],

  terms: [
    {
      term: 'Brandcompartiment',
      definition:
        'Ruimte begrensd door brandwerende scheidingen; bij brand blijft het beperkt tot dit gedeelte (Bbl WBDBO-eis).',
    },
    {
      term: 'Sub-brandcompartiment',
      definition:
        'Onderdeel van een brandcompartiment met lichtere eisen — bijvoorbeeld woning binnen woon­gebouw.',
    },
    {
      term: 'WBDBO',
      definition:
        'Weerstand tegen branddoorslag en brand­overslag — uitgedrukt in minuten (30, 60, 90, 120).',
    },
    {
      term: 'Vluchtroute',
      definition:
        'Route van elk punt in een gebouw naar veilige plek; max. lengte en min. breedte volgens Bbl.',
    },
    {
      term: 'Brandklasse (Euroclass)',
      definition:
        'Materiaalclassificatie A1 (onbrandbaar) t/m F (zeer brandgevaarlijk) — afhankelijk van toepassing geldt minimumklasse.',
    },
    {
      term: 'Rookmelder',
      definition:
        'Verplicht in alle woningen sinds 1-7-2022; minstens één op elke woonlaag, bij voorkeur netgevoed.',
    },
    {
      term: 'Rookwerende deur',
      definition:
        'Deur met EN 16034-classificatie Sa of S200 — sluit zelfsluitend, rookdichte rondom­strip.',
    },
    {
      term: 'Brandwerende deur',
      definition:
        'Deur met EI-classificatie (bv. EI₂ 30) — houdt brand 30 minuten tegen.',
    },
    {
      term: 'Brand­doorvoer',
      definition:
        'Brandwerend afgewerkte doorvoer voor kabel/leiding door scheidings­wand — voorkomt branddoorslag via gaten.',
    },
    {
      term: 'Sprinkler',
      definition:
        'Automatisch blussysteem dat bij temperatuur­overschrijding water sproeit; verplicht in sommige hoog­bouw.',
    },
    {
      term: 'Brandblusser',
      definition:
        'Draagbaar blustoestel — schuim/poeder/CO₂; in publieksgebouwen aantal en plaatsing volgens Arbo­besluit.',
    },
    {
      term: 'Brandslang­haspel',
      definition:
        'Vaste waterleiding met haspel; verplicht in winkels en kantoren > 500 m².',
    },
    {
      term: 'BHV',
      definition:
        'Bedrijfshulpverlening — getrainde medewerkers die bij brand of letsel eerste hulp en ontruiming verzorgen.',
    },
    {
      term: 'Rookwerende coating',
      definition:
        'Verf of bekleding op staal/hout die brand­werendheid verhoogt zonder zware constructie­ingreep.',
    },
    {
      term: 'Brandweer­opstel­plaats',
      definition:
        'Verharde plek waar brandweer voertuigen kan opstellen; verplicht binnen ~40 m van toegang.',
    },
  ],

  games: [
    {
      id: 'C8-gapfill-1', type: 'gapfill',
      title: 'Brandveiligheid',
      text:
        'Een gebouw wordt opgedeeld in brand­{{compartiment}}en — gescheiden door brand-/rookwerende constructies. ' +
        'De minuten brandwerendheid heet {{WBDBO}} (Weerstand Brand-Doorslag/Overslag). Woningscheidend: 60 min. ' +
        'In woningen verplicht: een optische {{rookmelder}} per verdieping (sinds 2022). ' +
        'Vluchtdeuren openen {{naar buiten}} in de vluchtrichting, met paniek­sluiting (drukbalk).',
      distractors: ['vluchtgebied', 'Rc', 'thermische melder', 'naar binnen'],
    },
    {
      id: 'C8-sort-1', type: 'sort',
      title: 'Welke blusser voor welk soort brand?',
      categories: ['Klasse A (vast)', 'Klasse B (vloeistof)', 'Klasse C (gas)', 'Elektrisch / elektronica'],
      items: [
        { label: 'Brandende kaars', category: 'Klasse A (vast)' },
        { label: 'Houtbrand', category: 'Klasse A (vast)' },
        { label: 'Olielek', category: 'Klasse B (vloeistof)' },
        { label: 'Brandende benzine', category: 'Klasse B (vloeistof)' },
        { label: 'Gaslek brandend', category: 'Klasse C (gas)' },
        { label: 'PC die in brand staat', category: 'Elektrisch / elektronica' },
      ],
    },
    {
      id: 'C8-matching-1', type: 'matching',
      title: 'Rookmelders + signalering',
      pairs: [
        { left: 'Optische rookmelder', right: 'LED + fotosensor — modern standaard NL' },
        { left: 'Ionisatie-rookmelder', right: 'Radioactief Am-241 — uitgefaseerd' },
        { left: 'Thermische melder', right: 'Reageert op temperatuur — keuken / garage' },
        { left: 'Slow-whoop', right: 'Pulserend evacuatie-alarmsignaal' },
        { left: 'Sleutelkluis', right: 'Brandweer-sleutels buiten op gevel' },
        { left: 'Droge blusleiding', right: 'Lege leiding door hoogbouw, brandweer pompt' },
      ],
    },
  ],
}
