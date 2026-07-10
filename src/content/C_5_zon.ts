import type { Topic } from '../types/content'

export const C_5_zon: Topic = {
  code: 'C.5',
  section: 'C',
  title: 'Zonnepanelen en -collectoren',
  chapterRef: 'Lesboek hoofdstukken 23 en 24',
  blurb:
    'PV-panelen (mono- en multikristallijn silicium), omvormer en batterij/accu, aansluiting op de groepenkast en het begrip Wattpiek (Wp) als vermogensindicatie. Plus het verschil tussen een zonnepaneel (elektriciteit) en een zonnecollector (warmte) en de werking van een zonneboilersysteem.',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · PV-panelen (zonnepanelen): types, omvormer en aansluiting',
      toetstermCodes: ['C.5.1'],
      body: `
### Wat is een PV-paneel?
**PV** = **Photovoltaic** (fotovoltaïsch). Een PV-paneel zet zonlicht direct om in **elektriciteit (gelijkstroom)** via het **fotovoltaïsche effect**:
1. Licht (fotonen) raakt het silicium-oppervlak van een zonnecel
2. Energie van de fotonen maakt elektronen los uit het silicium­rooster
3. De **p-n-junctie** (twee siliciumlagen met verschillende doteringen) zorgt voor een elektrisch veld dat de elektronen in één richting doet bewegen → stroom

### Mono- of multikristallijn silicium?
**Monokristallijn (mono-Si)**
- Gemaakt van **één enkel siliciumkristal** (Czochralski-proces — langzaam uit gesmolten silicium getrokken)
- **Donkerblauwe of zwarte** kleur, gelijkmatig
- **Rendement: 18–22 %** (hoogste van de twee)
- **Duurder** te produceren
- **Beter bij weinig licht** (winterdagen, schaduw aan de rand)
- Modern dé standaardkeuze voor woningen

**Multikristallijn (poly-Si)**
- Gemaakt van **vele kleine siliciumkristallen** samen gegoten in een blok
- **Donkerblauwe** kleur met zichtbare **kristalstructuur** (gelijkt op ijsbloemen)
- **Rendement: 14–18 %** (iets lager dan mono)
- **Goedkoper** te produceren
- Iets minder presterend bij weinig licht
- Vroeger standaard, nu meer in budget-installaties

### Andere PV-technologieën (geen primair examen)
- **Dunne-film PV** (CIGS, CdTe) — flexibel, geschikt voor curved oppervlakken, lager rendement
- **PERC-cellen** — moderne monokristallijn met extra reflecterende laag aan achterkant → hogere efficiëntie
- **Bifaciaal** — zowel voor- als achterkant kan licht omzetten (voor op een lichtreflecterend dak)

### Onderdelen van een PV-installatie

#### 1. Zonnepanelen op het dak
- Modern paneel: 60–72 cellen per paneel; **400–450 Wp** per stuk; afmeting ~1,7 × 1,1 m
- **Optimale plaatsing**: zuid, ~36° helling — geeft 100% van piekopbrengst
- **Reductiefactoren** bij andere oriëntaties:
  - Oost/West: ~86%
  - Zuidoost/Zuidwest: ~96%
  - Noord: ~50%
- **Schaduw** vermijden — zelfs een kleine schaduw op één cel kan de hele paneel-output halveren
- Bevestiging op pannen of plat dak met **dragerframe** (aluminium) en **panhaken** of **dakbouten**

#### 2. Bekabeling
- **DC-kabels** (gelijkstroom) — van panelen naar omvormer
- **DC-isolatorenschakelaar** voor onderhoud
- **Bliksembeveiliging** als panelen op het dak van een hoog gebouw zitten

#### 3. Omvormer (inverter)
- **DC → AC** omzetting: 230 V wisselstroom voor het huis-elektranet
- **Drie types**:
  - **String-omvormer** — alle panelen in serie aan één omvormer (klassiek, goedkoop, maar gevoelig voor schaduw op één paneel)
  - **Micro-omvormers** — elke paneel heeft eigen kleine omvormer (geen probleem met schaduw, duurder)
  - **Optimizers + string** — optimizer per paneel (DC-DC converter) bewerkt het signaal voor optimaal rendement, gecentraliseerde string-omvormer doet de DC → AC (compromis)
- Plaats: zolder, kelder of meterkast — moet **goed geventileerd** zijn (omvormer wordt warm)
- **Levensduur**: 10–15 jaar (de zwakste schakel in een installatie; vervanging vergt budget)

#### 4. Aansluiting op groepenkast
- **Aparte groep** in de groepenkast met **eigen aardlekautomaat**
- Aansluiting via **stop-/schakelpunt** vlak bij de omvormer
- **Slimme meter (kWh-meter)** registreert apart **afname** en **teruglevering** aan het net

#### 5. Batterij / thuisaccu (optioneel)
- **Lithium-ionen-accu** (5–15 kWh) — slaat overdag opgewekte overschot op
- **Laadregelaar + omvormer** bestuurt het laad/ontlaad-proces
- Activeert bij donker of avondpiek
- **Levensduur** 10–15 jaar (~5.000 laadcycli)
- **Investering** € 5.000–15.000 voor 10 kWh
- Rendabel **vanaf 2027** door afbouw saldering — eigen verbruik wordt belangrijker dan teruglevering

### Saldering en netregistratie
- **Saldering**: teruggeleverde stroom wordt verrekend met afgenomen — voordeel financieel ~€ 0,25/kWh
- **Vanaf 2027**: stapsgewijze afbouw tot 0 % in 2031 — daarna alleen terugleververgoeding (~€ 0,05/kWh)
- **Belastingdienst** stelde sinds 2023 BTW-vrijstelling op zonnepanelen — geen aangifte meer nodig
- **Bbl**: bij plaatsing binnen het dakvlak meestal **vergunningsvrij**; bij monument of beschermd gezicht wel vergunning vereist

### Voor de makelaar
- **Aantal panelen + Wp totaal** in transparantie-documentatie
- **Jaaropbrengst** (kWh) — eventueel met monitoring-uitdraai
- **Eigendom of huur?** (sommige systemen worden geleased — overdracht aan koper niet altijd vanzelfsprekend)
- **Garantiebewijzen** panelen (vaak 25 jaar lineaire opbrengstgarantie) en omvormer (~10 jaar)
- **Onderhoudsstatus**: panelen gereinigd, omvormer gecheckt
      `.trim(),
      images: [
        {
          src: '/figs/fotos/zonnepanelen-dak.jpg',
          caption:
            'PV-panelen op een hellend woningdak. Op een zuid-georiënteerd dak met optimale hellingshoek (~35°) leveren ze de hoogste jaaropbrengst.',
          source: 'Foto: Gray Watson · Wikimedia Commons (CC BY-SA 3.0)',
          width: 'lg',
        },
      ],
    },

    {
      heading: '2 · Wattpiek (Wp) — wat zegt het?',
      toetstermCodes: ['C.5.2'],
      body: `
### Definitie
**Wattpiek (Wp)** = het **maximaal vermogen** dat een zonnepaneel kan leveren onder **gestandaardiseerde testcondities**:
- **Lichtintensiteit**: 1.000 W/m² (volle zon, midzomer 's middags in Spanje of Italië)
- **Cel-temperatuur**: 25 °C
- **Lucht-massa**: AM 1,5 (gemiddeld pad door atmosfeer)

Dit is dus een **theoretische maximum-piek** — in de praktijk wordt zelden de volle Wp gehaald.

### Wp ≠ jaaropbrengst
**Belangrijk onderscheid**:
- **Wp** is een momentane piek bij ideale condities
- **kWh/jaar** is de jaaropbrengst onder realistische omstandigheden

In Nederland levert **1 Wp gemiddeld 0,85–0,95 kWh/jaar** bij optimale plaatsing (zuid, 36°).
- Een paneel van 400 Wp → ~340 kWh per jaar
- Een installatie van 4.000 Wp (10 panelen) → ~3.400 kWh per jaar = ~85 % van het verbruik van een gemiddeld huishouden

### Berekening voor een woning
1. **Bepaal het jaarverbruik**: gemiddeld 2.500–4.000 kWh per jaar (incl. all-electric: 6.000–10.000 kWh)
2. **Reken aantal panelen**:
   - Voor verbruik 3.500 kWh + saldering → 3.500 / 340 = ~10 panelen × 400 Wp
   - Voor all-electric 8.000 kWh → ~24 panelen × 400 Wp = ~10 kWp totaal
3. **Beschikbaar dakoppervlak**: ~1,9 m² per paneel → 10 panelen = 19 m²
4. **Gewenste dak­oriëntatie**: zuid optimaal, oost+west levert iets minder maar spreidt de opbrengst over de dag

### Wat beïnvloedt de jaaropbrengst?
- **Helling** dak (optimum ~36°; vlak dak ~85% van optimaal)
- **Oriëntatie** (zuid = 100%, west of oost = 86%, noord = 50%)
- **Schaduw** (kritisch — vermijden of optimizer gebruiken)
- **Temperatuur** (PV werkt minder efficiënt bij hoge temperaturen; rendement daalt met ~0,4 % per °C boven 25 °C — paradoxaal: een warme zomerdag levert minder dan een koele lentedag bij gelijke zon!)
- **Stof en vuil** op de panelen — jaarlijkse reiniging verhoogt opbrengst met ~5 %
- **Leeftijd**: panelen verliezen ~0,5 % rendement per jaar (na 25 jaar nog ~88 % van oorspronkelijk)

### Aantal Wp's typisch in Nederland
| Configuratie | Totaal Wp | Jaaropbrengst | Toepassing |
|---|---|---|---|
| 6 panelen (small) | ~2,4 kWp | ~2.000 kWh | Gas-woning, verbruik dekken |
| 10 panelen (standard) | ~4 kWp | ~3.400 kWh | Volledige saldering bij gas-woning |
| 16 panelen (groot) | ~6,5 kWp | ~5.500 kWh | All-electric, deel-zelfvoorzienend |
| 24 panelen (max-dak) | ~10 kWp | ~8.500 kWh | All-electric + EV-laden, NOM |

### Historische ontwikkeling
- **2010**: paneel ~160 Wp
- **2015**: paneel ~250 Wp
- **2020**: paneel ~350 Wp
- **2024**: paneel ~400–450 Wp

→ Door technische verbetering halveert het aantal panelen voor dezelfde opbrengst elke ~10 jaar.

### Bij overbelasting van de omvormer
**Vuistregel**: omvormer-capaciteit ~80–90 % van totale Wp. Bv. 10 panelen × 400 Wp = 4.000 Wp totaal → omvormer 3.500 W is voldoende (op piekmomenten knipt de omvormer alleen het overschot af; jaaropbrengst nauwelijks beïnvloed).
      `.trim(),
    },

    {
      heading: '3 · Zonneboiler en zonnecollector',
      toetstermCodes: ['C.5.3'],
      body: `
### Belangrijk: PV vs. collector
| | **Zonnepaneel (PV)** | **Zonnecollector** |
|---|---|---|
| Levert | Elektriciteit | Warmte |
| Materiaal | Silicium-cellen | Zwarte absorber + glas |
| Vloeistof in panelen | Nee | Ja (water + glycol of luchtcirculatie) |
| Aansluiting | Omvormer → groepenkast | Pomp → opslagvat |
| Plaats | Op het dak | Op het dak |
| Toepassing | Stroom voor woning | Warm tapwater + eventueel cv |

**Een zonnepaneel is iets anders dan een zonnecollector!** Geen synoniemen.

### Werking van een zonnecollector
1. **Zwarte absorber** op het dak (vaak metaalplaat met selectieve coating) — zuigt zonnewarmte op
2. **Glasplaat** ervoor — voorkomt warmteverlies (broeikaseffect)
3. **Koperen pijpen** in de absorber waar **vloeistof** (water-glycol-mengsel) doorheen stroomt
4. **Pomp + leiding** transporteert de hete vloeistof naar het **opslagvat** (boiler)
5. Vloeistof staat de warmte af aan het leidingwater in het opslagvat via een **warmtewisselaar**

### Twee hoofdtypes collector
**Vlakke-plaatcollector**
- Simpele constructie: absorber + glasplaat + isolatie
- **Goedkoper** in aanschaf
- Werkt minder bij lage zonintensiteit (winterdagen)

**Vacuümbuiscollector**
- Buizen met vacuüm-isolatie (zoals thermosfles) rond elke absorber-staaf
- **Beter bij weinig licht en koud weer**
- **Duurder** maar efficiënter in NL-klimaat
- Standaard moderne keuze

### Zonneboiler-systeem
**Volledige systeem-onderdelen**:
1. **Zonnecollector** op het dak (~2–4 m² oppervlak voor woning)
2. **Pompeenheid** (klein, energie-zuinig)
3. **Warmtewisselaar / spiraal** in het opslagvat
4. **Geïsoleerd opslagvat** (200–300 liter) — bewaart warm water
5. **Naverwarmer** (combiketel of elektrische element) voor zwakke dagen
6. **Regelunit** met temperatuursensoren — pomp draait alleen als collector warmer is dan opslagvat
7. **Expansievat** voor het collectorcircuit
8. **Veiligheidsklep** tegen oververhitting (bij stilstand kan de collector zelf > 200 °C worden!)

### Tweede leidingen-circuit
- **Collectorcircuit** (gesloten): water-glycol mengsel — beschermt tegen vorst, mag niet bevriezen
- **Tapwatercircuit**: gewoon drinkwater dat verwarmd wordt door de warmtewisselaar
- **De twee mengen niet** (anders zou je glycol in het drinkwater krijgen)

### Naverwarmer
- Bij **voldoende zon** verwarmt de collector het opslagvat tot ~60 °C
- Bij **zwakke dagen** (winter, mist, regen) vult de naverwarmer aan:
  - **Combiketel met NZ-keurmerk** (Naverwarming Zonneboiler) — gas-naverwarming
  - **Elektrisch element** in het opslagvat
  - **Cv-spiraal** (warmtenet-aanvoer)
- Bij **voldoende zon** doet de naverwarmer niets — gratis warm water

### Varianten
- **Solo zonneboiler** — alleen voor warm tapwater
- **Combi-/duoboiler** — voor tapwater **én** cv-water (extra spiraal)
- **CV-ondersteuning** — voorkomt opwarming voor cv-water alleen, niet voor tapwater
- **Drainback-systeem** — zonder glycol; bij koud weer loopt het systeem leeg (water terug naar binnen) — eenvoudiger maar pomp moet altijd werken

### Voor- en nadelen

**Voordelen**:
- Bespaart **~50 % van de gas-/elektra-verbruik** voor warm water in een doorsnee-huishouden
- **NZ-keurmerk** combiketels werken energiezuinig samen
- Subsidie via **ISDE** (~€ 600 voor zonneboiler)
- Vermindert CO₂-uitstoot
- Levensduur 20+ jaar

**Nadelen**:
- **Hoge investering**: € 3.500–6.000 voor gemiddelde installatie
- **Terugverdientijd** 10–15 jaar (afhankelijk van gasprijs)
- **Onderhoud**: jaarlijkse controle van pomp, glycol-niveau, warmtewisselaar
- **Plaats op het dak** vereist — concurreert met PV-panelen om dakruimte
- Werkt minder in winter — geen 100 % zelfvoorzienend

### Trend
In NL wordt **PV + warmtepompboiler** vaak verkozen boven een zonneboiler:
- PV is sneller terug te verdienen
- Stroom uit PV kan de warmtepomp aandrijven (die hete water levert)
- Geen apart dak-systeem nodig

Toch blijft de zonneboiler relevant bij hoog tapwater­verbruik en in combinatie met **gas (NZ-keurmerk)**.

### Geothermie (zeer diepte­warmte)
**Niet hetzelfde** als zonneboiler — maar wordt soms verward:
- **Geothermie** = winning van warmte uit watervoerende lagen op 1,8+ km diepte (~70 °C)
- Gebruikt voor stadsverwarming, kassen — niet voor individuele woning
- **Bodemwarmtepomp / WKO** (warmte-koudeopslag) op geringere diepte (~150 m) is wel gangbaar voor woningen — werkt anders dan een zonneboiler
      `.trim(),
    },
  ],

  toetstermen: [
    {
      code: 'C.5.1',
      text: 'Beschrijft de installatie van de typen zonnepaneel/PV-paneel (mono- of multikristallijn), omvormer, batterij en aansluiting op de groepenkast.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
    {
      code: 'C.5.2',
      text: 'Legt het begrip Wattpiek (Wp) uit als indicatie voor het vermogen van een zonnepaneel.',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
    {
      code: 'C.5.3',
      text: 'Licht de werking van een zonneboiler en zonnecollector toe.',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
  ],

  questions: [
    // C.5.1 (4)
    {
      id: 'C5-1-a',
      toetstermCode: 'C.5.1',
      type: 'mc',
      prompt: 'Wat is het hoofdverschil tussen **monokristallijn** en **multikristallijn** PV-panelen?',
      options: [
        'Mono is dunner, multi is dikker',
        'Mono = één kristal; multi = vele kristallen',
        'Mono is voor zomer, multi voor winter',
        'Mono werkt zonder zonlicht',
      ],
      correctIndex: 1,
      explanation:
        'Monokristallijn (mono-Si): één enkel siliciumkristal — gelijkmatig donkerblauw of zwart. Hoger rendement (18–22 %), beter bij weinig licht, duurder. Multikristallijn (poly-Si): vele kleine kristallen samen gegoten — zichtbare kristalstructuur, "ijsbloemen"-uiterlijk. Lager rendement (14–18 %), goedkoper. Mono is moderne standaard voor woningen.',
    },
    {
      id: 'C5-1-b',
      toetstermCode: 'C.5.1',
      type: 'mc',
      prompt: 'Wat is de functie van een **omvormer (inverter)** in een PV-installatie?',
      options: [
        'Verhoogt de spanning naar 1.000 V',
        'Zet gelijkstroom om naar wisselstroom',
        'Filtert het zonlicht',
        'Beschermt panelen tegen bliksem',
      ],
      correctIndex: 1,
      explanation:
        'Panelen leveren gelijkstroom (DC) — onbruikbaar voor woninggebruik dat wisselstroom (AC) vergt. De omvormer zet DC om naar 230 V wisselstroom (50 Hz) en sluit aan op een aparte groep in de groepenkast. Drie types: string-omvormer (klassiek, goedkoop), micro-omvormers (één per paneel, beter bij schaduw), optimizers + string (compromis).',
    },
    {
      id: 'C5-1-c',
      toetstermCode: 'C.5.1',
      type: 'mc',
      prompt: 'Bij een dak met **gedeeltelijke schaduw** (bv. door schoorsteen) is welke omvormer-configuratie het beste?',
      options: [
        'String-omvormer — eenvoudig en goedkoop',
        'Micro-omvormers of optimizers per paneel',
        'Helemaal geen omvormer',
        'Twee string-omvormers in serie',
      ],
      correctIndex: 1,
      explanation:
        'Klassieke string-omvormer heeft alle panelen in serie — bij schaduw op één paneel valt de hele string terug naar de prestaties van het zwakste paneel. Micro-omvormers (eigen kleine omvormer per paneel) of optimizers (DC-DC converter per paneel) lossen dit op: elk paneel werkt onafhankelijk. Belangrijke verbetering bij stedelijke daken met schoorstenen of bomen.',
    },
    {
      id: 'C5-1-d',
      toetstermCode: 'C.5.1',
      type: 'mc',
      prompt: 'Een PV-systeem wordt aangesloten op de **groepenkast** via:',
      options: [
        'De hoofdaansluiting van de woning, parallel aan kWh-meter',
        'Een aparte groep met aardlekautomaat en slimme meter',
        'Direct op een wandcontactdoos',
        'Een speciale UPS-installatie',
      ],
      correctIndex: 1,
      explanation:
        'PV-installatie krijgt een **eigen groep** in de groepenkast met aardlekautomaat. De omvormer levert AC aan deze groep, die parallel aan de andere groepen op het hoofdnet zit. Een slimme (digitale) kWh-meter registreert apart afname én teruglevering aan het net — basis voor saldering of terugleververgoeding.',
    },

    // C.5.2 (3)
    {
      id: 'C5-2-a',
      toetstermCode: 'C.5.2',
      type: 'mc',
      prompt: 'Wat is **Wattpiek (Wp)** van een zonnepaneel?',
      options: [
        'De gemiddelde dagopbrengst van het paneel',
        'Het piekvermogen onder standaard testcondities',
        'De prijs per Watt',
        'De levensduur van het paneel',
      ],
      correctIndex: 1,
      explanation:
        'Wattpiek (Wp) = vermogen onder ideale testcondities: 1.000 W/m² zonintensiteit (volle zon midzomer Spanje), 25 °C celtemperatuur, AM 1,5 spectrum. Theoretisch piek-vermogen. In NL praktijk wordt deze maximumwaarde alleen kort gehaald op heldere lentedagen met koele temperatuur (boven 25 °C verliest PV efficiëntie).',
    },
    {
      id: 'C5-2-b',
      toetstermCode: 'C.5.2',
      type: 'mc',
      prompt: 'Een paneel van **400 Wp** levert in Nederland gemiddeld hoeveel kWh per jaar?',
      options: ['100 kWh', '~340 kWh', '500 kWh', '1.000 kWh'],
      correctIndex: 1,
      explanation:
        'Vuistregel NL: 1 Wp levert gemiddeld 0,85–0,95 kWh per jaar bij optimale plaatsing (zuid, 36° helling, geen schaduw). 400 Wp paneel × 0,85 = ~340 kWh/jaar. Bij oost/west: ~85 % daarvan; bij noord: ~50 %. Een 10-panelen-installatie (4.000 Wp) levert dus ~3.400 kWh — bijna 100 % van een doorsnee-huishouden (zonder all-electric).',
    },
    {
      id: 'C5-2-c',
      toetstermCode: 'C.5.2',
      type: 'mc',
      prompt: 'PV-panelen leveren bij **hoge temperaturen** minder vermogen. Waarom?',
      options: [
        'Het silicium smelt',
        'Rendement daalt ~0,4% per °C boven 25 °C',
        'De omvormer schakelt uit',
        'Er is geen verband — PV werkt altijd gelijk',
      ],
      correctIndex: 1,
      explanation:
        'PV-rendement daalt ~0,4 % per °C boven 25 °C celtemperatuur. Bij volle zon worden panelen 50–70 °C — dat scheelt 10–18 % rendement! Vandaar dat moderne installaties soms méér opleveren in koele lente (10 °C buitenlucht + felle zon) dan in warme zomer (30 °C + zon). Een goed geventileerde plaatsing en bifaciaal panelen helpen.',
    },

    // C.5.3 (4)
    {
      id: 'C5-3-a',
      toetstermCode: 'C.5.3',
      type: 'mc',
      prompt: 'Wat is het wezenlijke verschil tussen een **zonnepaneel (PV)** en een **zonnecollector**?',
      options: [
        'Synoniemen',
        'Een paneel levert stroom; een collector levert warmte',
        'Zonnepaneel is voor zomer, zonnecollector voor winter',
        'Beide leveren stroom — een zonnepaneel direct, een collector via warmte-omzetting',
      ],
      correctIndex: 1,
      explanation:
        'Belangrijke termen-onderscheiding! Zonnepaneel (PV) = silicium-cellen → elektriciteit. Zonnecollector = zwarte absorber + glasplaat + leidingen met vloeistof → warmte. Een collector verwarmt water in een opslagvat (zonneboiler) voor warm tapwater. Geen synoniemen — beide op het dak mogelijk, maar concurreren wel om dakruimte.',
    },
    {
      id: 'C5-3-b',
      toetstermCode: 'C.5.3',
      type: 'mc',
      prompt: 'Hoe werkt een **zonneboiler-systeem**?',
      options: [
        'Direct zonlicht verwarmt het opslagvat door het glasplafond',
        'Een collector verwarmt vloeistof die warmte afgeeft aan een opslagvat',
        'Een PV-paneel laadt een elektrische boiler op',
        'Een pomp zuigt warm water uit de aarde',
      ],
      correctIndex: 1,
      explanation:
        'Zonneboiler-systeem: (1) collector op dak vangt warmte; (2) pomp circuleert water-glycol mengsel (gesloten circuit); (3) warmtewisselaar in opslagvat geeft warmte af aan leidingwater; (4) bij zwakke dagen vult naverwarmer (combiketel NZ-keurmerk of elektrisch element) aan. Bespaart ~50 % van energie voor warm water. Levensduur 20+ jaar.',
    },
    {
      id: 'C5-3-c',
      toetstermCode: 'C.5.3',
      type: 'mc',
      prompt: 'Waarom bevat het **collectorcircuit van een zonneboiler** een mengsel van water en glycol?',
      options: [
        'Voor de smaak van het drinkwater',
        'Glycol verlaagt het vriespunt tegen bevriezing',
        'Glycol verhoogt het rendement',
        'Het is een desinfectiemiddel',
      ],
      correctIndex: 1,
      explanation:
        'Glycol-water mengsel in het collectorcircuit voorkomt bevriezing bij vorst (de collector op het dak kan ’s nachts ver onder 0 °C komen). Het collectorcircuit is **gescheiden** van het drinkwatercircuit door een warmtewisselaar in het opslagvat — de twee mengen dus niet, glycol komt niet in het tapwater. Alternatief: **drainback-systeem** zonder glycol waar het water bij vorst leegloopt.',
    },
    {
      id: 'C5-3-d',
      toetstermCode: 'C.5.3',
      type: 'mc',
      prompt: 'Hoeveel **energiebesparing** levert een zonneboiler gemiddeld voor warm water?',
      options: [
        '~50 %',
        '~10 %',
        '~90 %',
        '100 % (volledig zelfvoorzienend)',
      ],
      correctIndex: 0,
      explanation:
        'Een doorsnee zonneboiler bespaart **~50 %** van de energie nodig voor warm water in een huishouden. Op zonnige dagen zelfs 100 %, maar in winter en bij zwakke dagen vult de naverwarmer aan. Subsidie via ISDE ~€ 600. Terugverdientijd 10–15 jaar (afhankelijk van energieprijs). Levensduur 20+ jaar. In NL wordt vaker gekozen voor PV + warmtepompboiler.',
    },
  ],

  terms: [
    {
      term: 'PV-paneel',
      definition:
        'Photovoltaïsch zonnepaneel — zet zonlicht direct om in gelijkstroom; gangbaar vermogen 350-440 Wp.',
    },
    {
      term: 'Wattpiek (Wp)',
      definition:
        'Piekvermogen van een paneel onder standaard­meet­condities (1000 W/m² instraling, 25 °C).',
    },
    {
      term: 'Omvormer',
      definition:
        'Apparaat dat gelijkstroom van panelen omzet naar 230 V wisselstroom voor het huisnet en het openbare net.',
    },
    {
      term: 'Saldering',
      definition:
        'Regeling dat door PV opgewekte stroom 1-op-1 verrekend wordt met afname; wordt vanaf 2027 afgebouwd.',
    },
    {
      term: 'Terugleverkost',
      definition:
        'Sinds 2024 brengen netbeheerders/leveranciers kosten in rekening voor PV-teruglevering bij overaanbod.',
    },
    {
      term: 'Zonneboiler / -collector',
      definition:
        'Thermisch systeem dat zonlicht omzet in warmte voor tap­water; verschilt fundamenteel van PV.',
    },
    {
      term: 'Vlakke plaat­collector',
      definition:
        'Standaard zonnecollector — geïsoleerde plaat met absorptievlak en koperen buizen erin.',
    },
    {
      term: 'Vacuümbuis­collector',
      definition:
        'Glas­buizen met vacuüm­isolatie — hoger rendement bij koud weer, duurder dan vlakke plaat.',
    },
    {
      term: 'Bypass-diode',
      definition:
        'Schakeling per paneel die bij schaduw op één cel het hele paneel niet laat uitvallen.',
    },
    {
      term: 'Optimizer / micro­omvormer',
      definition:
        'Per paneel een omvormer of optimizer — beperkt verlies bij schaduw of vervuiling op één paneel.',
    },
    {
      term: 'Oriëntatie / hellingshoek',
      definition:
        'Optimaal in NL: zuid + ~35° helling; oost/west levert ~85% van max.',
    },
    {
      term: 'Energielabel',
      definition:
        'Verplicht label bij verkoop/verhuur; PV verbetert het label significant en wordt meegewogen in NTA 8800.',
    },
    {
      term: 'BENG-eisen',
      definition:
        'Sinds 2021: een deel van energiebehoefte moet door hernieuwbaar zijn — PV is meest gangbare oplossing.',
    },
    {
      term: 'Salderings­afbouw',
      definition:
        'Vanaf 2027 wordt saldering geleidelijk teruggebracht; PV moet steeds meer eigen verbruik dekken.',
    },
  ],

  games: [
    {
      id: 'C5-gapfill-1', type: 'gapfill',
      title: 'Zonne-energie',
      text:
        'Een {{PV}}-paneel (photovoltaic) levert elektriciteit; een {{zonnecollector}} levert warmte. ' +
        'Het piekvermogen wordt uitgedrukt in {{Wattpiek}} (Wp). ' +
        'Een {{omvormer}} zet gelijkstroom van panelen om naar 230 V wisselstroom. ' +
        'Het beste rendement wordt behaald bij oriëntatie {{zuid}} en helling ~36°.',
      distractors: ['kWh', 'transformator', 'oost', 'collector'],
    },
    {
      id: 'C5-sort-1', type: 'sort',
      title: 'PV of zonneboiler?',
      categories: ['PV (zonnepaneel)', 'Zonneboiler (collector)'],
      items: [
        { label: 'Levert elektriciteit', category: 'PV (zonnepaneel)' },
        { label: 'Mono- of multikristallijn silicium', category: 'PV (zonnepaneel)' },
        { label: 'Omvormer naar 230 V', category: 'PV (zonnepaneel)' },
        { label: 'Levert warmte', category: 'Zonneboiler (collector)' },
        { label: 'Zwarte absorber + vloeistofcircuit', category: 'Zonneboiler (collector)' },
        { label: 'Naverwarmer voor zwakke dagen', category: 'Zonneboiler (collector)' },
      ],
    },
    {
      id: 'C5-matching-1', type: 'matching',
      title: 'PV-installatie',
      pairs: [
        { left: 'Wattpiek', right: 'Maximaal vermogen onder ideale testcondities' },
        { left: 'Monokristallijn', right: 'Eén siliciumkristal — hoger rendement (~22%)' },
        { left: 'Multikristallijn', right: 'Vele kleine kristallen — goedkoper, ~16% rendement' },
        { left: 'Optimizers / micro-omvormers', right: 'Bij gedeeltelijke schaduw — paneel-onafhankelijk' },
        { left: 'Thuisaccu', right: 'Opslaat overdag opgewekt voor avondgebruik' },
      ],
    },
  ],
}
