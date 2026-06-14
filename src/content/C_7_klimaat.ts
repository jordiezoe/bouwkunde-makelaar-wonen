import type { Topic } from '../types/content'

export const C_7_klimaat: Topic = {
  code: 'C.7',
  section: 'C',
  title: 'Klimaatbeheersing',
  chapterRef: 'Lesboek hoofdstukken 23 en 27',
  blurb:
    'Volledige klimaatbeheersing in een gebouw: airconditioning (luchtkoeling + ontvochtigen + filtreren), topkoeling (alleen koeling toegevoegd aan bestaande verwarming), en gecombineerde systemen via luchtbehandeling en luchtverwarming.',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · Klimaatbeheersing — drie hoofdsystemen',
      toetstermCodes: ['C.7.1'],
      body: `
**Klimaatbeheersing** = het totaal regelen van het binnenklimaat: temperatuur, luchtvochtigheid, luchtkwaliteit, ventilatie en eventueel koeling.

Drie examen-relevante systemen:

### Airconditioning (volledige klimaatbeheersing)
**Wat doet het?**
- **Verwarming** (warm in winter)
- **Koeling** (koel in zomer)
- **Bevochtiging / ontvochtiging** (gewenste relatieve luchtvochtigheid 40–60 %)
- **Filtratie** (stof, pollen, fijnstof eruit)
- **Ventilatie** (verse lucht in)

**Hoe werkt het?**
- Centrale **luchtbehandelings­kast (LBK)** of decentrale **split-units**
- **Compressor­kringloop** (dampcompressie — vergelijkbaar met koelkast):
  1. **Verdamper** binnen onttrekt warmte aan de ruimtelucht → koudemiddel verdampt
  2. **Compressor** verhoogt druk en temperatuur van het koudemiddel
  3. **Condensor** buiten geeft warmte af aan buitenlucht
  4. **Expansieventiel** verlaagt druk → cyclus opnieuw
- **Werkt omgekeerd** voor verwarming (warmtepomp-principe)

**Vormen**:
- **Mono-split**: één binnenunit + één buitenunit — voor één ruimte
- **Multi-split**: meerdere binnen­units (verschillende ruimten) + één buitenunit
- **VRF / VRV** (Variable Refrigerant Flow/Volume): centrale buiten­unit + vele binnen­units in groot gebouw
- **Centrale LBK**: één grote luchtbehandeling­kast verzorgt alle ruimten via luchtkanalen

**Toepassing**:
- Kantoren, winkels, hotels, restaurants
- Datacenters (zwaartepunt op koeling)
- Ziekenhuizen, schone ruimten (filtratie kritisch)
- Luxe woningen, vakantiehuizen

**Voor- en nadelen**:
- **Voordelen**: comfort in zomer + winter, betere luchtkwaliteit, controleerbaar
- **Nadelen**: hoge energieverbruik (vooral bij koeling), onderhoud (filters, koudemiddel), geluid van binnen-/buitenunit, milieubelasting koudemiddelen (HFK-gassen)

### Topkoeling
**Wat is het?**
Een **aanvullend koelsysteem** dat **boven op een bestaand verwarmings­systeem** wordt aangebracht. Levert **alleen koeling** in warme zomerdagen — voor de "top" van de warmte.

**Hoe werkt het?**
- **Lucht-water-warmtepomp** of **bodem-warmtepomp** (WKO) levert **koud water** ('s zomers)
- Dit koude water gaat door **vloerverwarmings­slangen** of **convectoren** in de plaats van warm water in winter
- **Vloer wordt licht gekoeld** (~18–20 °C) — straling-koeling van onderaf
- Beperkte capaciteit: kan slechts 2–4 K verlagen ten opzichte van buiten­temperatuur

**Twee varianten**:
- **Actieve topkoeling**: warmtepomp omgekeerd gebruiken — verbruikt stroom, levert hogere koelcapaciteit
- **Passieve topkoeling**: bij bodem-warmtepomp (WKO) — water uit koele bodem (~10 °C) wordt direct door vloerverwarming gepompt zonder compressor; zeer energiezuinig (alleen circulatiepomp)

**Toepassing**:
- Moderne energiezuinige woningen met warmtepomp
- WKO-installaties in appartementen­complexen
- Combinatie met vloerverwarming staat dit toe zonder extra leidingen
- **Niet voor extreme hitte** — geen "ijskoude" lucht zoals airco

**Voor- en nadelen**:
- **Voordelen**: zeer energiezuinig (vooral passief), geen extra apparaat, geen buitenunit, geen geluid
- **Nadelen**: beperkte koelcapaciteit (2–4 K), geen luchtdroging (vraagt extra ventilatie tegen condens op koude vloer), niet alle warmtepompen kunnen koelen

### Gecombineerd systeem (luchtbehandeling + luchtverwarming)
**Wat is het?**
Een systeem dat **lucht** als drager gebruikt voor **én verwarming én koeling én ventilatie én filtratie**. Centraal toestel (LBK) of decentrale units.

**Componenten van een LBK**:
- **Toevoer­ventilator** + **afzuig­ventilator**
- **Voorfilter** (grof stof) + **fijnfilter** (HEPA voor schoon werk)
- **Voorverwarmer** (winter — gas of cv-water)
- **Naverwarmer** (precisie temperatuurregeling)
- **Koeler** (zomer — koud water of direct koudemiddel)
- **Bevochtiger** (winter — droge buitenlucht aanvullen)
- **WTW (warmtewisselaar)** — herwint warmte uit afvoerlucht
- **Luchtkanalen** (toe­voer en afvoer)
- **Anemostaten** (uitblaasmonden) in elke ruimte

**Werking**:
1. **Buitenlucht** wordt aangezogen
2. **Gefiltreerd** (grof + fijn)
3. Gaat door **WTW** waar afvoerlucht (warm) warmte afgeeft aan toevoerlucht (koud)
4. **Voorverwarmer** verwarmt verder indien nodig
5. **Koeler** koelt af in zomer
6. **Bevochtiger** voegt vocht toe in winter
7. **Geleverd** via luchtkanalen en anemostaten in elke ruimte
8. **Afvoerlucht** wordt afgezogen, geeft warmte af in WTW, gaat naar buiten

**Toepassing**:
- **Kantoorgebouwen, scholen, ziekenhuizen** — moderne utiliteit
- **Industriële schone ruimten** — strenge eisen luchtkwaliteit
- **Theater, museum** — temperatuur + vochtigheid kritisch voor materiaal
- **Datacenter** — zware koeling
- **Grote woningen, vakantiehuizen** — luxe-uitvoering

**Voor- en nadelen**:
- **Voordelen**: volledige klimaat­controle, energiezuinig met WTW (75–95 % terugwinning), gefilterde lucht
- **Nadelen**: hoge investering (€ 20.000–100.000+), grote luchtkanalen vragen ruimte, complex onderhoud, geluid van blowers

### Vergelijking
| Aspect | Airconditioning | Topkoeling | Gecombineerd (LBK) |
|---|---|---|---|
| Koeling | Volledig (10–20 K reductie) | Beperkt (2–4 K) | Volledig |
| Verwarming | Ja (warmtepomp-modus) | Nee (alleen koelen toegevoegd) | Ja (volledig) |
| Luchtfiltering | Beperkt (binnenunit) | Nee | Ja (HEPA mogelijk) |
| Ventilatie | Beperkt | Nee | Ja (volledig) |
| Bevochtiging | Soms | Nee | Ja |
| Energieverbruik | Hoog | Zeer laag (passief) tot laag | Gemiddeld (met WTW) |
| Investering | Gemiddeld | Laag (deel van warmtepomp) | Hoog |
| Toepassing | Kantoren, winkels, luxe woningen | Moderne energiezuinige woningen | Utiliteit, ziekenhuizen, grote gebouwen |

### Comfort-parameters
**Bbl-eisen** en wettelijk verplicht voor verblijfsgebouwen:
- **Temperatuur**: 20–24 °C (verblijfsgebied), 18–22 °C (slaapvertrek)
- **Relatieve luchtvochtigheid**: 40–60 % (binnen comfortzone)
- **CO₂-gehalte**: < 1.200 ppm (richtlijn binnenklimaat)
- **Luchtsnelheid**: < 0,15 m/s in verblijfsruimte (anders "tochtig")
- **Filtratie**: ISO ePM10 ≥ 50 % (basis) tot HEPA H13 (ziekenhuis)
      `.trim(),
    },
  ],

  toetstermen: [
    {
      code: 'C.7.1',
      text: 'Herkent klimaatbeheersings­systemen airconditioning­installatie, topkoeling en gecombineerd systeem door middel van luchtbehandeling en luchtverwarming.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
  ],

  questions: [
    {
      id: 'C7-1-a',
      toetstermCode: 'C.7.1',
      type: 'mc',
      prompt: 'Een **airconditioning­installatie** doet wat allemaal?',
      options: [
        'Alleen koelen',
        'Verwarmen + koelen + bevochtigen/ontvochtigen + filtreren + ventileren — volledige klimaatbeheersing via een dampcompressie­kringloop (verdamper, compressor, condensor, expansieventiel)',
        'Alleen ventileren',
        'Alleen filtreren',
      ],
      correctIndex: 1,
      explanation:
        'Airconditioning levert volledige klimaatbeheersing: temperatuur (verwarmen + koelen via dampcompressie), luchtvochtigheid (bevochtigen + ontvochtigen), luchtkwaliteit (filtreren), en ventilatie. Werkt volgens warmtepomp-principe: verdamper, compressor, condensor, expansieventiel. Mono-split (één ruimte), multi-split (meerdere binnenunits), VRF/VRV (groot gebouw), of centrale LBK.',
    },
    {
      id: 'C7-1-b',
      toetstermCode: 'C.7.1',
      type: 'mc',
      prompt: 'Wat is **topkoeling**?',
      options: [
        'Een dak­ventilator voor extra ventilatie',
        'Een aanvullend koelsysteem boven op bestaande verwarming — levert alleen koeling in warme dagen (~2–4 K verlaging) via vloerverwarming-slangen die in zomer koud water krijgen in plaats van warm; vaak combinatie met warmtepomp of WKO',
        'De bovenste laag van een koelkast',
        'Een synoniem voor airconditioning',
      ],
      correctIndex: 1,
      explanation:
        'Topkoeling is een aanvullend koelsysteem dat alleen de "top" van de zomerwarmte wegneemt (~2–4 K reductie). Werkt door koud water (uit warmtepomp of WKO-bron) door vloerverwarmings­slangen te sturen — vloer wordt licht gekoeld, straling-koeling van onderaf. Twee varianten: actief (warmtepomp omgekeerd, stroom-verbruikend) en passief (water uit koude bodem direct via pomp — zeer energiezuinig).',
    },
    {
      id: 'C7-1-c',
      toetstermCode: 'C.7.1',
      type: 'mc',
      prompt: '**Passieve topkoeling** bij een bodem-warmtepomp (WKO):',
      options: [
        'Verbruikt veel stroom',
        'Werkt zonder compressor — koud water uit de bodem (~10 °C) wordt direct door vloerverwarmings­slangen gepompt; alleen de circulatiepomp verbruikt stroom → zeer energiezuinig',
        'Vraagt buitenunit',
        'Kan niet samen met vloerverwarming',
      ],
      correctIndex: 1,
      explanation:
        'Bij passieve topkoeling wordt het koude grondwater (10 °C) uit de WKO-bron direct door de vloerverwarmings­slangen gepompt — geen compressor, alleen circulatie­pomp. COP kan boven 10 zijn (1 kWh stroom voor pomp = 10+ kWh koude). Voorwaarde: warmtepomp moet de koeling-functie ondersteunen, en de vloer + ventilatie moeten geschikt zijn om condens te vermijden (vloer niet onder dauwpunt).',
    },
    {
      id: 'C7-1-d',
      toetstermCode: 'C.7.1',
      type: 'mc',
      prompt: 'Wat is een **luchtbehandelings­kast (LBK)**?',
      options: [
        'Een opslag voor zuurstof',
        'Een centrale unit met ventilatoren, filters, voor-/naverwarmer, koeler, bevochtiger en WTW-warmtewisselaar — verzorgt complete klimaatbeheersing voor een gebouw via luchtkanalen en anemostaten',
        'Een soort cv-ketel',
        'Een airco-buitenunit',
      ],
      correctIndex: 1,
      explanation:
        'Een LBK (luchtbehandelings­kast) is een grote centrale eenheid op de zolder/dak van utiliteits­gebouwen die volledige klimaatbeheersing levert: aanzuig + filters + WTW + voor-/naverwarmer + koeler + bevochtiger + ventilatoren. Verbonden met het gebouw via luchtkanalen en anemostaten (uitblaaspunten). Standaard in kantoorgebouwen, scholen, ziekenhuizen, theater, museum.',
    },
    {
      id: 'C7-1-e',
      toetstermCode: 'C.7.1',
      type: 'mc',
      prompt: 'Wat is een **belangrijk voordeel** van topkoeling **ten opzichte van airconditioning** voor een woning?',
      options: [
        'Hogere koelcapaciteit',
        'Veel energie­zuiniger — vooral passieve topkoeling (via WKO) verbruikt minimaal stroom; geen extra buitenunit; geen geluidsoverlast; gebruikt bestaande vloerverwarming-installatie',
        'Goedkoper in aanschaf',
        'Werkt zonder elektriciteit',
      ],
      correctIndex: 1,
      explanation:
        'Topkoeling is veel energie­zuiniger dan airconditioning. Passieve topkoeling via WKO verbruikt alleen pomp-stroom (COP > 10) — vergelijk dit met airconditioning (COP 3–4). Bovendien: geen extra buitenunit, geen geluid, geen extra installatie (gebruikt bestaande vloerverwarming-slangen). Nadeel: beperkte koelcapaciteit (2–4 K) — geen "ijskoude" lucht zoals airco.',
    },
    {
      id: 'C7-1-f',
      toetstermCode: 'C.7.1',
      type: 'mc',
      prompt: 'In een **kantoorgebouw** met balansventilatie + verwarming + koeling via één centraal systeem, gaat het meestal om:',
      options: [
        'Mono-split airconditioning per kamer',
        'Centrale luchtbehandelings­kast (LBK) met luchtkanalen naar alle ruimten — verwarmt, koelt, bevochtigt, filtreert en ventileert volledig met WTW-warmteterug­winning',
        'Topkoeling via vloerverwarming',
        'Houtkachel',
      ],
      correctIndex: 1,
      explanation:
        'Moderne kantoorgebouwen gebruiken een centrale LBK die alles tegelijk doet: verwarmen, koelen, filtreren, bevochtigen, ventileren. Een LBK met goede WTW haalt 75–95 % van de warmte uit afvoerlucht terug. Mono-split airco zou onpraktisch zijn voor elk kantoor afzonderlijk. Topkoeling met vloerverwarming is meer voor woningen.',
    },
    {
      id: 'C7-1-g',
      toetstermCode: 'C.7.1',
      type: 'mc',
      prompt: 'Het Bbl stelt voor **CO₂-gehalte in verblijfsruimten** als richtlijn:',
      options: [
        '500 ppm — strenge schone ruimte',
        '< 1.200 ppm — bij hogere CO₂ daalt concentratievermogen, geur en hoofdpijn ontstaan',
        '5.000 ppm — gevaarlijk',
        '50 ppm — onmogelijk binnen te halen',
      ],
      correctIndex: 1,
      explanation:
        'Richtlijn binnenklimaat: CO₂-gehalte < 1.200 ppm. Bij hoger niveau dalen concentratie­vermogen, ontstaat geur (mens-lucht) en hoofdpijn. Onder 1.000 ppm is comfort­zone. Buitenlucht is ~420 ppm. Ventilatie­systemen moeten voldoende buitenlucht toevoeren — vandaar het belang van mechanische ventilatie + WTW in moderne energie­zuinige woningen (te luchtdicht voor natuurlijke ventilatie).',
    },
    {
      id: 'C7-1-h',
      toetstermCode: 'C.7.1',
      type: 'mc',
      prompt: 'Voor **bevochtiging in een gecombineerd systeem (LBK)** in de winter — waarom is dat nodig?',
      options: [
        'Voor de luchtkwaliteit',
        'Buitenlucht in de winter is zeer droog (RV soms < 30 %); na verwarming binnen wordt RV nog lager. Bevochtiging tot 40–60 % voorkomt droge slijmvliezen, statische elektriciteit en uitdroging van materialen (parket, leer, kunstwerken)',
        'Om legionella te voorkomen',
        'Voor de afkoeling van apparatuur',
      ],
      correctIndex: 1,
      explanation:
        'In winter is buitenlucht koud en droog (absoluut weinig vocht). Na opwarming binnen daalt de relatieve vochtigheid dramatisch (vaak naar 20–30 %). Dat veroorzaakt droge slijmvliezen (luchtwegen, ogen), statische elektriciteit, uitdroging van houten meubels en parket. Comfort­zone voor RV is 40–60 % — daarom in LBK een bevochtiger (vaak stoom­bevochtiger of natte-luchtwasser). Belangrijk in musea, theaters en ziekenhuizen.',
    },
  ],

  terms: [
    {
      term: 'Airconditioning',
      definition:
        'Systeem dat lucht koelt en ontvochtigt — vaak split-unit met buitenunit + binnen­unit; werkt met koudemiddel.',
    },
    {
      term: 'Split-unit',
      definition:
        'Airco met binnen- en buitenunit verbonden door koudemiddel­leidingen; populair voor woningen.',
    },
    {
      term: 'VRV / VRF',
      definition:
        'Variable Refrigerant Flow — centrale buitenunit voor meerdere binnenunits; gebruikt in utiliteit.',
    },
    {
      term: 'Koudemiddel',
      definition:
        'Vloeistof die in compressorcyclus warmte transporteert (R32, R290); strengere F-gas­regels sinds 2024.',
    },
    {
      term: 'F-gas­wet',
      definition:
        'Europese regelgeving die HFK-koudemiddelen met hoge GWP uitfaseert; vervangers: R32, propaan, CO₂.',
    },
    {
      term: 'Koudemachine',
      definition:
        'Apparaat dat warmte onttrekt aan binnen­ruimte en buiten afgeeft — werkt op compressie­cyclus.',
    },
    {
      term: 'Topkoeling',
      definition:
        'Lichte koeling van inblaaslucht (max. 3-4 K verschil); standaard bij warmtepompen via vloerverwarming.',
    },
    {
      term: 'Top­warmtepomp (omkeerbaar)',
      definition:
        'Warmtepomp die zowel verwarmt als koelt door cyclusrichting om te draaien.',
    },
    {
      term: 'Klimaat­plafond',
      definition:
        'Strakke plafondplaten met koel- en verwarmingsleidingen — onzichtbare klimaat­regeling.',
    },
    {
      term: 'Convector / radiator',
      definition:
        'Afgifte­element dat warmte afgeeft door luchtcirculatie; convectoren werken op kortere reactietijd.',
    },
    {
      term: 'Hygrostaat',
      definition:
        'Regelt vochtgehalte in de lucht — schakelt ventilatie of bevochtiger in bij over-/onderschrijding.',
    },
    {
      term: 'Comfortklasse PMV/PPD',
      definition:
        'ISO 7730 — voorspeld gemiddeld gevoel en percentage ontevreden personen; bepaalt comfort­ontwerp.',
    },
    {
      term: 'Free cooling',
      definition:
        'Koelen door koude buitenlucht direct te benutten (nachtventilatie of warmtewisselaar) zonder compressor.',
    },
  ],

  games: [
    {
      id: 'C7-gapfill-1', type: 'gapfill',
      title: 'Klimaatbeheersing',
      text:
        '{{Airconditioning}} levert volledige klimaatbeheersing: verwarmen, koelen, filteren, ventileren. ' +
        '{{Topkoeling}} is een aanvullend koelsysteem via vloerverwarming­slangen — beperkt tot ~2–4 K verlaging. ' +
        'Een grote centrale unit met meerdere functies heet een {{LBK}} (luchtbehandelings­kast). ' +
        'Het CO₂-gehalte in een verblijfsruimte moet beneden {{1200}} ppm blijven.',
      distractors: ['split-unit', 'WKO', 'CMV', '5000'],
    },
    {
      id: 'C7-matching-1', type: 'matching',
      title: 'Klimaatbegrippen',
      pairs: [
        { left: 'Airconditioning', right: 'Volledige klimaat — koelen, verwarmen, filteren' },
        { left: 'Topkoeling (passief)', right: 'Koud grondwater door vloerverwarming­slangen' },
        { left: 'LBK', right: 'Luchtbehandelings­kast in utiliteit — totaal pakket' },
        { left: 'Anemostaat', right: 'Uitblaaspunt in plafond bij LBK-systeem' },
        { left: 'COP', right: 'Coefficient of Performance — rendement warmtepomp/airco' },
      ],
    },
  ],
}
