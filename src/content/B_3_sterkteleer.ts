import type { Topic } from '../types/content'

export const B_3_sterkteleer: Topic = {
  code: 'B.3',
  section: 'B',
  title: 'Sterkteleer',
  chapterRef: 'Lesboek hoofdstuk 3',
  blurb:
    'Hoe krachten op een gebouw werken: permanente en variabele belastingen, trek- en drukkrachten, opleggingen, overspanningen, uitkragingen, stabiliteit — en hoe je constructieve schade (scheuren) in een gevel of draagconstructie herkent.',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · Belastingen op een gebouw',
      toetstermCodes: ['B.3.2'],
      body: `
Elk bouwwerk krijgt te maken met krachten — sommige altijd aanwezig, andere variabel.

**Permanente belastingen** zijn voortdurend aanwezig:
- *Eigen gewicht* van constructie + afwerking (muren, vloeren, dak, kozijnen, dakpannen, isolatie)
- *Permanent geplaatste apparatuur* zoals een vaste cv-ketel of liftmachine
- *Aanvullende grondbedekking* op een dak (groendak, grindlaag)

**Variabele belastingen** verschillen in tijd en intensiteit:
- *Personen + meubels* (gebruiksbelasting) — varieert per ruimte: een huiskamer telt op een lagere belasting dan een archiefruimte
- *Windbelasting* — vlaagkrachten op gevel en dak; afhankelijk van hoogte en locatie
- *Sneeuwlast* — op platte daken kan zich water + sneeuw verzamelen tot honderden kilo's per m²
- *Aardbevingen* (in Groningen relevant) — horizontale krachten op de constructie
- *Tijdelijke opslag* (bouwmateriaal, machine, voertuig op een vloer)

De **NEN-EN 1991** (Eurocode 1) bepaalt welke belastingen wáár worden meegenomen in de berekening. De som van permanent + variabel mag de **draagcapaciteit** van de constructie niet overschrijden.

Voor een woning is de standaard ontwerpgebruiksbelasting van een verdiepingsvloer doorgaans 1,75–2,0 kN/m² (ca. 175–200 kg/m²); een kantoor 2,5 kN/m²; een opslag-/archiefruimte 5 kN/m² of meer.
      `.trim(),
    },

    {
      heading: '2 · Trek- en drukkrachten',
      toetstermCodes: ['B.3.2'],
      body: `
Binnen een belast constructie-element ontstaan twee fundamentele krachten:

- **Drukkracht** — duwt op het materiaal alsof het wordt samengeperst. Materialen die *goed* tegen druk kunnen: **baksteen, beton, natuursteen**.
- **Trekkracht** — trekt het materiaal uit elkaar. Materialen die *goed* tegen trek kunnen: **staal, gewapend hout**. Beton kan slecht tegen trek — daarom **wapeningsstaal** in elke betonconstructie waar trek optreedt.

In een **balk op twee opleggingen** met belasting van boven:
- De *bovenzijde* wordt samengedrukt (drukkracht)
- De *onderzijde* wordt uitgerekt (trekkracht)
- Daarom zit het wapeningsstaal in een betonbalk **onderin** — waar de trek zit

In een **kolom** die alleen verticaal belast wordt: vrijwel alleen drukkracht over de hele doorsnede.

In een **muur**: druk van bovenaf, plus eventueel windbelasting horizontaal (trek/druk afhankelijk van windrichting).

In een **dakspant**: druk in de spantbenen en trek in de onderste verbinding (de trekstang of trekplaat) — anders zouden de spantbenen uit elkaar spatten.
      `.trim(),
    },

    {
      heading: '3 · Opleggingen, overspanning en uitkraging',
      toetstermCodes: ['B.3.1', 'B.3.2'],
      body: `
**Oplegging** = de plaats waar een element (balk, vloer, dak) op een andere constructie rust. Hier worden de krachten overgedragen.

**Overspanning** = de afstand tussen twee opleggingen. Hoe groter de overspanning, des te zwaarder of dieper de balk moet zijn om dezelfde belasting te kunnen dragen. Vuistregel: een houten balk doet ca. 4–5 m, een betonnen vloer 5–7 m, een stalen ligger of vakwerk kan 10–20+ m.

In een gewone constructie:
- Een vloer ligt op twee (of meer) dragende muren of balken
- Bij iedere oplegging ontstaat een **reactiekracht** R₁, R₂ — gelijk aan de helft van de belasting in symmetrische gevallen
- Tussen de opleggingen ontstaat **buigmoment** met maximum in het midden — daar moet de balk dik genoeg zijn

**Uitkraging** (cantilever) = een balk die maar aan één kant is ingeklemd en aan de andere kant vrij uitsteekt. Voorbeelden:
- Balkon
- Erker of luifel
- Vrij uitstekend dakvlak boven een entree

Bij een uitkraging zit het **grootste buigmoment** bij de inklemming (in de muur). Hier is dus de zwaarste constructie nodig — een betonnen balkon moet diep in de wand of vloer worden ingeklemd met flink wapeningsstaal *bovenin* (want bij een uitkraging zit de trek juist aan de bovenzijde).

**Stabiliteit** is de eigenschap van een constructie om niet te kantelen, knikken of vervormen onder belasting. Bereikt door:
- *Voldoende dwarskoppeling*: vloeren werken als horizontale schijven die de gevels onderling verbinden
- *Windverbanden* of stabiliteitswanden — vooral in skeletbouw
- *Driehoekige verbanden* (vakwerkliggers, dakspanten) — de meest stabiele basisvorm
      `.trim(),
      diagrams: [{ type: 'sterkteleer' }],
    },

    {
      heading: '4 · Krachtenpatronen op tekening herkennen',
      toetstermCodes: ['B.3.1'],
      body: `
Op een **constructietekening** kun je krachtenpatronen aflezen aan een aantal kenmerken:

- **Dikkere lijnen** = dragende elementen (muren, balken, kolommen)
- **Symbolen voor opleggingen** = driehoekjes of vorkvormen onder een balk
- **Pijlsymbolen** = belastingen (kg/m, kN/m², puntlasten in kN)
- **Maatvoering** van overspanningen → grotere overspanning vraagt zwaardere constructie
- **Wapening op betontekeningen** = de doorsnede toont waar het staal zit; meestal *onderin* bij vloeren (trek), *bovenin* bij uitkragingen, gelijkmatig in kolommen (druk)

**Lees-tips**:
- Een doorlopende dikke wand van fundering tot dak → bijna zeker dragend
- Een balk boven een grote opening (raam, deur) → latei; afmetingen moeten passen bij de overspanning
- Een stalen ligger (HEA/HEB-profiel) onder een verdiepingsvloer → grote overspanning, zware belasting
- Diagonale lijnen in een gevel of skelet → windverband / stabiliteitsverband

**Bij verbouwingen** met als doel een dragende muur weghalen:
1. Laat de constructeur de bestaande situatie analyseren (welke krachten lopen waar?)
2. Bereken een vervangende oplossing (stalen HEA-profiel met voldoende doorsnede)
3. Bereken de nieuwe oplegging (poer / verbreding wand bij de uiteinden van het profiel)
4. Brandwerendheid van staal niet vergeten — verf of bekleding kan vereist zijn
      `.trim(),
    },

    {
      heading: '5 · Constructieve schade herkennen',
      toetstermCodes: ['B.3.3'],
      body: `
Voor de makelaar is het belangrijk om bij een inspectie of taxatie te kunnen aanwijzen of een gevel- of draagconstructie tekenen van constructieve schade vertoont. Typische signalen:

**Scheuren in gevelmetselwerk**:
- **Horizontale scheuren boven kozijnen** — wijzen vaak op spatkrachten uit de kap (slecht opgevangen door trekstangen of zolderbalklaag), of op te grote belasting op een latei
- **Diagonale scheuren** vanuit een hoek van een kozijn naar boven of beneden — typische **zettingsscheuren**: de fundering zakt ongelijkmatig
- **Verticale scheuren** in een gevel boven elkaar — wijzen vaak op het ontbreken van een dilatatievoeg in een lange muur, of op temperatuurwerking van een betonlatei in metselwerk
- **Trapsgewijze scheuren** door de stootvoegen heen — een variant van zettingsscheuren

**Andere signalen**:
- *Wijkende voegen* — voegwerk dat losraakt of uitvalt
- *Vochtdoorslag of vochtuitslag* (zoutuitbloei) — kan op overbelasting of vochtproblemen wijzen
- *Doorzakkende vloer* — voelbaar of zichtbaar; vaak houtrot in balken of overbelasting
- *Kromtrekken van kozijnen* — gevolg van ongelijke zetting onder het kozijn
- *Scheef gezakt huis* — ongelijke fundering, vaak West-Nederlandse problematiek

**Wat doe je als makelaar?**
- Bij twijfel: bouwkundige keuring of constructeur erbij halen
- Bij vermoeden funderingsprobleem: KCAF/Dinoloket raadplegen, eventueel funderingsonderzoek aanbieden
- Bij scheuren ouder dan een paar jaar zonder verergering: vaak gestabiliseerd, niet acuut
- Bij verse scheuren: alert blijven en herhaaldelijk checken (markeer met datum)

**Belangrijk**: niet elke scheur is constructief gevaarlijk — krimpscheuren in stucwerk, kit of stootvoegen zijn vaak cosmetisch. Het verschil zit in de breedte (> 1–2 mm wordt zorgwekkend), de richting (diagonaal/door stenen heen = constructief), en de ontwikkeling over de tijd.
      `.trim(),
    },
  ],

  toetstermen: [
    {
      code: 'B.3.1',
      text: 'Herkent krachtenpatronen, zoals samenhang van belastingen, opleggingen, overspanningen en afmetingen, in bouwkundige constructies aan de hand van een tekening.',
      niveau: 'BT2',
      bloom: 'Kennis',
      metDrawing: true,
    },
    {
      code: 'B.3.2',
      text: 'Legt de in en op een gebouw optredende krachten uit: permanente en variabele belastingen, trek- en drukkrachten, stabiliteit, overspanning en uitkragingen.',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
    {
      code: 'B.3.3',
      text: 'Herkent constructieve schade in gevels en draagconstructie.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
  ],

  questions: [
    // B.3.1/B.3.2 — Krachten herkennen op tekening: beeldvragen
    {
      id: 'B.3.beeld-trek',
      toetstermCode: 'B.3.2',
      type: 'mc',
      prompt:
        'Deze balk wordt van bovenaf belast en buigt door. Welke kracht heerst er in de **onderste vezel (B, blauw)**?',
      image: {
        src: '/figs/vragen/balk-buiging-vraag.svg',
        caption: 'Een belaste, doorbuigende balk op twee opleggingen met punt A (boven) en B (onder).',
        width: 'md',
      },
      options: [
        'Drukkracht — de vezel wordt korter',
        'Trekkracht — de vezel wordt langer',
        'Geen kracht — de onderkant is spanningsloos',
        'Afschuiving',
      ],
      correctIndex: 1,
      explanation:
        'Bij een doorbuigende balk wordt de onderkant uitgerekt → trek (B). De bovenkant wordt samengedrukt → druk (A). Daarom zit de wapening in een betonbalk onderin, waar de trek zit.',
    },
    {
      id: 'B.3.beeld-druk',
      toetstermCode: 'B.3.2',
      type: 'mc',
      prompt:
        'In welke vezel van deze doorbuigende balk heerst een **drukkracht**?',
      image: {
        src: '/figs/vragen/balk-buiging-vraag.svg',
        caption: 'Een belaste, doorbuigende balk op twee opleggingen met punt A (boven) en B (onder).',
        width: 'md',
      },
      options: [
        'In de bovenste vezel (A) — die wordt samengedrukt',
        'In de onderste vezel (B) — die wordt samengedrukt',
        'In beide vezels evenveel',
        'Nergens — er is alleen trek',
      ],
      correctIndex: 0,
      explanation:
        'De bovenkant van een doorbuigende balk wordt korter → drukkracht (A). De onderkant wordt langer → trekkracht (B). Precies in het midden, de neutrale lijn, is de spanning nul.',
    },

    // B.3.2 — Belastingen en krachten (BT2, Begrip)
    {
      id: 'B.3.q1',
      toetstermCode: 'B.3.2',
      type: 'mc',
      prompt: 'Wat is het verschil tussen een permanente en een variabele belasting?',
      options: [
        'Permanente werkt op verticale, variabele op horizontale elementen',
        'Permanente belasting is altijd aanwezig, variabele wisselt',
        'Permanente belasting is altijd zwaarder dan variabele',
        'Permanente werkt op de fundering, variabele op het dak',
      ],
      correctIndex: 1,
      explanation:
        'Permanente belasting = altijd aanwezig (eigen gewicht, afwerking, vaste apparatuur). Variabele belasting = wisselt (personen, meubels, wind, sneeuw, tijdelijke opslag).',
    },
    {
      id: 'B.3.q2',
      toetstermCode: 'B.3.2',
      type: 'mc',
      prompt: 'In een gewone betonnen vloer op twee opleggingen — waar zit het wapeningsstaal en waarom?',
      options: [
        'Bovenin de vloer, want daar zit de drukkracht',
        'Onderin, want daar treedt trekkracht op',
        'Aan de zijkanten, voor stabiliteit',
        'In het midden, op halve hoogte',
      ],
      correctIndex: 1,
      explanation:
        'Bij een vloer op twee opleggingen ontstaat onderin trek (de vloer probeert door te buigen). Beton kan slecht tegen trek; daarom zit het wapeningsstaal *onderin*. In een uitkraging zit het juist bovenin.',
    },
    {
      id: 'B.3.q3',
      toetstermCode: 'B.3.2',
      type: 'mc',
      prompt: 'Welk materiaal kan slecht tegen trekkrachten zonder wapening?',
      options: ['Staal', 'Gewapend hout', 'Beton', 'Aluminium'],
      correctIndex: 2,
      explanation:
        'Beton heeft een uitstekende druksterkte maar slechte treksterkte (ongeveer 10% van de druksterkte). Daarom wordt staal toegevoegd op plaatsen waar trek optreedt — dat heet *gewapend beton*.',
    },
    {
      id: 'B.3.q4',
      toetstermCode: 'B.3.2',
      type: 'mc',
      prompt: 'Wat is een uitkraging (cantilever)?',
      options: [
        'Een balk op twee opleggingen',
        'Een element dat aan één zijde inklemt en vrij uitsteekt',
        'De diagonale verbinding in een windverband',
        'De afwerking aan de bovenkant van een gevel',
      ],
      correctIndex: 1,
      explanation:
        'Uitkraging = vrij uitstekend element zonder oplegging aan het uiteinde. Belangrijke voorbeelden: balkons, erkers, vrij uitstekende dakvlakken. Het grootste buigmoment zit bij de inklemming.',
    },
    {
      id: 'B.3.q5',
      toetstermCode: 'B.3.2',
      type: 'mc',
      prompt:
        'Waar zit bij een betonnen uitkragend balkon het wapeningsstaal?',
      options: [
        'Onderin, zoals bij een vloer op twee opleggingen',
        'Bovenin, want daar treedt de trekkracht op',
        'Verspreid over de hele doorsnede',
        'Alleen aan de uitstekende zijde',
      ],
      correctIndex: 1,
      explanation:
        'Bij een uitkraging probeert het uitstekende deel naar beneden te zakken; daarbij wordt de bovenzijde uit elkaar getrokken. Het wapeningsstaal moet *bovenin* zitten, anders breekt het balkon eraf.',
    },
    {
      id: 'B.3.q6',
      toetstermCode: 'B.3.2',
      type: 'mc',
      prompt:
        'Hoe wordt stabiliteit van een gebouw tegen wind- en horizontale krachten meestal bereikt?',
      options: [
        'Door alleen een zware fundering',
        'Door schijfwerking van vloeren met stabiliteitswanden en verbanden',
        'Door dunne, meebewegende wanden',
        'Door geen ramen in de gevel te plaatsen',
      ],
      correctIndex: 1,
      explanation:
        'Stabiliteit = vloeren als horizontale schijven + verticale stabiliteitselementen (kernen, wanden, schoren, vakwerken). Driehoekige verbanden zijn de meest stabiele vorm.',
    },
    {
      id: 'B.3.q7',
      toetstermCode: 'B.3.2',
      type: 'mc',
      prompt:
        'Wat hoort tot de variabele belasting op een woning?',
      options: [
        'Het eigen gewicht van de wanden',
        'Het gewicht van de fundering',
        'Bewoners, meubels, sneeuw en wind',
        'De afwerking van wanden en vloeren',
      ],
      correctIndex: 2,
      explanation:
        'Bewoners, meubels, sneeuw en wind variëren in de tijd → variabele belasting. Eigen gewicht van constructie en afwerking = permanent.',
    },

    // B.3.1 — Krachtenpatronen op tekening (BT2, Kennis, *)
    {
      id: 'B.3.q8',
      toetstermCode: 'B.3.1',
      type: 'mc',
      prompt: 'Wat is de "overspanning" van een vloer?',
      options: [
        'De totale lengte van alle wanden waarop de vloer rust.',
        'De afstand tussen twee opleggingen.',
        'De dikte van de vloer.',
        'Het oppervlak van de vloer in m².',
      ],
      correctIndex: 1,
      explanation:
        'Overspanning = de afstand tussen de twee opleggingen waarop een element rust. Bepaalt mede de benodigde constructiehoogte / wapening.',
    },
    {
      id: 'B.3.q9',
      toetstermCode: 'B.3.1',
      type: 'mc',
      prompt:
        'Hoe herken je dragende elementen op een constructietekening?',
      options: [
        'Aan de kleur — dragende elementen zijn altijd rood',
        'Aan dikkere lijnen, opleggingssymbolen en materiaal',
        'Aan een sterretje in elke hoek',
        'Ze staan alleen op de plattegrond, nooit op een doorsnede',
      ],
      correctIndex: 1,
      explanation:
        'Dragende elementen worden bewust dikker getekend, met materiaalarcering, en de aansluitingen worden gemarkeerd met opleggingssymbolen (driehoeken, "schuifoplegging", "ingeklemd").',
    },
    {
      id: 'B.3.q10',
      toetstermCode: 'B.3.1',
      type: 'mc',
      prompt:
        'Wat geeft het symbool "△" onder een balk in een constructietekening doorgaans aan?',
      options: [
        'Een waarschuwing voor brandgevaar',
        'Een oplegging waar de balk op de constructie rust',
        'Een dakkapel',
        'Een dilatatievoeg',
      ],
      correctIndex: 1,
      explanation:
        'Een driehoekje of vorkvorm onder een balk is het standaardsymbool voor een oplegging. Hier wordt de belasting van de balk overgedragen naar de onderliggende constructie.',
    },
    {
      id: 'B.3.q11',
      toetstermCode: 'B.3.1',
      type: 'mc',
      prompt:
        'Wat duidt op een grote overspanning in de bouwkundige tekening van een woonkamer?',
      options: [
        'Een dunne houten balklaag van 5 cm',
        'Een stalen HEA/HEB-profiel of dikke betonbalk in het plafond',
        'Een gemetselde rollaag boven het kozijn',
        'Een dilatatievoeg in de vloer',
      ],
      correctIndex: 1,
      explanation:
        'Bij grote overspanningen zijn zware constructie-elementen nodig — stalen ligger (HEA/HEB), brede betonbalk, of houten lijmligger. Een lichte houten balklaag is alleen voor korte overspanningen geschikt.',
    },
    {
      id: 'B.3.q12',
      toetstermCode: 'B.3.1',
      type: 'mc',
      prompt:
        'Een klant wil een 4 m brede doorbraak maken in een dragende muur. Op de constructietekening van de architect zie je daar een aanduiding "HEA 240". Wat betekent dat?',
      options: [
        'De maat van het nieuwe raam: 240 cm hoog',
        'Een stalen HEA-profiel van 240 mm hoog',
        'De verbouwkosten in euro per meter',
        'De aanduiding van een dilatatievoeg',
      ],
      correctIndex: 1,
      explanation:
        'HEA 240 = een stalen H-vormig walsprofiel met een buitenhoogte van 240 mm. Veel gebruikt als lateivervanger bij doorbraken. De constructeur bepaalt de juiste afmeting op basis van overspanning en belasting.',
    },

    // B.3.3 — Constructieve schade herkennen (BT2, Kennis)
    {
      id: 'B.3.q13',
      toetstermCode: 'B.3.3',
      type: 'mc',
      prompt:
        'Wat duiden diagonale scheuren vanuit een hoek van een kozijn in een gevel meestal aan?',
      options: [
        'Krimp van het stucwerk',
        'Zetting door ongelijkmatige zakking van de fundering',
        'Esthetisch metselverbandwerk',
        'Normale temperatuurkrimp, geen aandacht nodig',
      ],
      correctIndex: 1,
      explanation:
        'Diagonale scheuren vanuit kozijnhoeken zijn een klassiek signaal van zettingsproblemen: een deel van het gebouw zakt sneller dan de rest, en de scheur volgt de zwakste lijn — meestal vanuit een raamhoek.',
    },
    {
      id: 'B.3.q14',
      toetstermCode: 'B.3.3',
      type: 'mc',
      prompt:
        'Welke scheur in een gevel duidt typisch op spatkrachten uit een kapconstructie?',
      options: [
        'Een verticale scheur door één steen heen.',
        'Een horizontale scheur boven de kozijnen, soms over de hele gevelbreedte.',
        'Een trapsgewijze scheur die door stootvoegen loopt.',
        'Een fijne netvormige scheur in het stucwerk.',
      ],
      correctIndex: 1,
      explanation:
        'Spatkrachten uit het dak duwen de bovenkant van de gevel naar buiten → de gevel scheurt op een horizontale lijn (vaak boven kozijnen of net onder de muurplaat). Oplossing: trekstang of zolderbalklaag.',
    },
    {
      id: 'B.3.q15',
      toetstermCode: 'B.3.3',
      type: 'mc',
      prompt:
        'Een trapsgewijs scheurpatroon dat door de stootvoegen loopt en diagonaal door een gevel klimt — wat is meest waarschijnlijk de oorzaak?',
      options: [
        'Een esthetische keuze van de metselaar',
        'Krimp van de baksteen door uitdroging',
        'Zetting van de fundering',
        'Te hoge belasting op het dak',
      ],
      correctIndex: 2,
      explanation:
        'Een trapsgewijze scheur is de "weg van de minste weerstand" bij zetting — door stootvoegen, zelden door de stenen zelf. Klassiek funderingsprobleem; KCAF of bouwkundige inschakelen.',
    },
    {
      id: 'B.3.q16',
      toetstermCode: 'B.3.3',
      type: 'mc',
      prompt:
        'Welke scheur is doorgaans NIET constructief gevaarlijk?',
      options: [
        'Diagonale scheur dwars door bakstenen heen, breder dan 2 mm.',
        'Horizontale scheur boven kozijnen over de hele gevel.',
        'Fijne netvormigescheuren in een stuclaag, smaller dan 0,5 mm.',
        'Trapsgewijze scheur door stootvoegen vanaf een hoek van het pand.',
      ],
      correctIndex: 2,
      explanation:
        'Fijne haarscheurtjes in stucwerk zijn meestal cosmetisch (uitdrogen, lichte temperatuurwerking) en niet constructief. De andere drie wijzen op echte krachtenproblemen.',
    },
    {
      id: 'B.3.q17',
      toetstermCode: 'B.3.3',
      type: 'mc',
      prompt:
        'Een woning heeft op de begane grond een duidelijk merkbare doorzakkende houten vloer. Wat is het meest waarschijnlijke vervolg?',
      options: [
        'Geen actie — een houten vloer mag meeveren',
        'Onderzoek naar houtrot of overbelasting in de balken',
        'Direct de keukenvloer vervangen',
        'Vloerverwarming installeren tegen de doorbuiging',
      ],
      correctIndex: 1,
      explanation:
        'Een merkbaar doorzakkende houten vloer is alarmsignaal nr. 1 voor houtrot of overbelasting in de balklaag. Eerst de oorzaak vaststellen (vocht in kruipruimte, schimmel op balkkoppen) en dan herstellen.',
    },
    {
      id: 'B.3.q18',
      toetstermCode: 'B.3.3',
      type: 'mc',
      prompt:
        'Een klant maakt zich zorgen over horizontale scheuren in de voorgevel direct boven de bovenste kozijnen. Wat is een passend advies?',
      options: [
        'Negeren — deze scheuren zijn altijd cosmetisch',
        'De scheuren monitoren en een bouwkundige laten beoordelen',
        'De gevel schilderen om de scheuren te verbergen',
        'De kozijnen vervangen — daar zit het probleem',
      ],
      correctIndex: 1,
      explanation:
        'Horizontale scheuren boven kozijnen wijzen vaak op spatkrachten uit de kap. Eerst monitoren (datum + breedte noteren), dan een bouwkundige of constructeur erbij. Mogelijke oplossing: trekstangen in de kap.',
    },
  ],

  terms: [
    {
      term: 'Kracht (F)',
      definition:
        'Belasting in newton (N); 1 kg ≈ 10 N. Werkt op een constructie als duw, trek of eigen gewicht.',
    },
    {
      term: 'Moment (M)',
      definition:
        'Draaiende werking van een kracht rond een punt: M = F × arm (in Nm); veroorzaakt buiging in liggers.',
    },
    {
      term: 'Spanning (σ)',
      definition:
        'Inwendige kracht per oppervlakte­eenheid (N/mm²); wordt vergeleken met de toelaatbare spanning van het materiaal.',
    },
    {
      term: 'Drukspanning',
      definition:
        'Spanning die het materiaal samendrukt — beton en steen kunnen dit goed opnemen.',
    },
    {
      term: 'Trekspanning',
      definition:
        'Spanning die het materiaal uit elkaar trekt — staal is hier sterk in, beton zwak (vandaar wapening).',
    },
    {
      term: 'Buigspanning',
      definition:
        'Combinatie van druk en trek in een belaste balk: bovenkant op druk, onderkant op trek (of andersom).',
    },
    {
      term: 'Schuif­spanning',
      definition:
        'Spanning evenwijdig aan het oppervlak — treedt op bij dwarskracht op een balk, vooral nabij oplegging.',
    },
    {
      term: 'Eigen gewicht',
      definition:
        'Permanente belasting van het bouwmateriaal zelf (kN/m² of kN/m³); standaardwaarden in NEN-EN 1991-1-1.',
    },
    {
      term: 'Veranderlijke belasting',
      definition:
        'Belasting die wisselt: personen, meubilair, sneeuw, wind — gerekend met combinatie­factoren volgens Eurocode.',
    },
    {
      term: 'Windbelasting',
      definition:
        'Horizontale en zuigende kracht op gevels en dak; afhankelijk van locatie (kustzone zwaarder) en gebouwhoogte.',
    },
    {
      term: 'Doorbuiging',
      definition:
        'Verticale zakking van een balk onder belasting; Eurocode-eis: maximaal 1/250 van de overspanning.',
    },
    {
      term: 'Knik',
      definition:
        'Plotseling uitwijken van een drukbelaste slanke kolom of plaat; voorkomen door voldoende dikte of tussensteunpunten.',
    },
    {
      term: 'Oplegging',
      definition:
        'Plek waar een ligger of vloer rust op een wand of kolom — bepaalt de overdracht van krachten.',
    },
  ],

  games: [
    {
      id: 'B3-gapfill-1', type: 'gapfill',
      title: 'Krachten en spanningen',
      text:
        'Een balk die wordt belast in het midden buigt door. Aan de bovenkant ontstaan {{drukkrachten}}, aan de onderkant {{trekkrachten}}. ' +
        'Een kolom op druk kan {{knikken}} als hij te slank is. ' +
        'Schuifkracht zien we vooral bij de {{oplegging}} van een balk.',
      distractors: ['torsie', 'buigend moment', 'reactiekracht'],
    },
    {
      id: 'B3-sort-1', type: 'sort',
      title: 'Welk soort kracht?',
      categories: ['Druk', 'Trek', 'Schuif', 'Buiging'],
      items: [
        { label: 'Kolom belast door dak­last', category: 'Druk' },
        { label: 'Onderkant van vrij opgelegde balk', category: 'Trek' },
        { label: 'Wapenings­staaf in trekzone beton', category: 'Trek' },
        { label: 'Bij de oplegging van een vloerbalk', category: 'Schuif' },
        { label: 'Vrij opgelegde balk met puntlast in het midden', category: 'Buiging' },
        { label: 'Lintvoeg­wapening boven raamopening', category: 'Trek' },
      ],
    },
    {
      id: 'B3-matching-1', type: 'matching',
      title: 'Koppel begrip aan beschrijving',
      pairs: [
        { left: 'Drukkracht', right: 'Druk in materiaal — bovenkant balk, kolommen' },
        { left: 'Trekkracht', right: 'Rek in materiaal — onderkant balk, wapening' },
        { left: 'Knik', right: 'Plotseling uitwijken van slanke drukstaaf' },
        { left: 'Moment', right: 'Buigend effect door kracht op een afstand (Nm)' },
        { left: 'Spanning', right: 'Kracht per oppervlak (N/mm²)' },
        { left: 'Trekzone', right: 'Plaats in een balk waar wapening hoort' },
      ],
    },
  ],
}
