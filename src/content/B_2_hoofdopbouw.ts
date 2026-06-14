import type { Topic } from '../types/content'

export const B_2_hoofdopbouw: Topic = {
  code: 'B.2',
  section: 'B',
  title: 'Hoofdopbouw van een gebouw',
  chapterRef: 'Lesboek hoofdstukken 2–3',
  blurb:
    'De zes elementengroepen waaruit elk gebouw is opgebouwd: kelder, fundering, opbouw (muren + vloeren), dak, afwerking en installaties — en hoe ze in een doorsnede over elkaar liggen.',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · Zes elementengroepen',
      toetstermCodes: ['B.2.1'],
      body: `
Een gebouw is opgebouwd uit zes onderling samenhangende elementengroepen. Voor de makelaar is het belangrijk om te weten waar ze zitten en wat ze doen — dat helpt bij het lezen van een tekening, het beoordelen van staat van onderhoud, en het inschatten van kosten bij verbouwingen.

- **Kelder** — bouwlaag (deels) onder maaiveld. Toepassingen: berging, technische ruimte, parkeren, soms woonruimte (souterrain). Vereist extra aandacht voor waterdichtheid (kelderbak) en ventilatie.
- **Fundering** — overbrugt de overgang tussen het gebouw en de draagkrachtige grond. Twee hoofdtypen: *op staal* (direct op de grond, bij draagkrachtige bodem) of *paalfundering* (heipalen tot een draagkrachtige laag, bij slappe ondergrond zoals veen of klei).
- **Opbouw** — alles tussen fundering en dak: dragende muren, niet-dragende scheidingswanden, verdiepingsvloeren, kolommen en eventuele balken. Vormt het draagskelet van het gebouw.
- **Dak** — sluit het gebouw aan de bovenzijde af tegen weersinvloeden. Vlakvorm (plat dak) of hellend (zadel-, schild-, lessenaar-, etc.). Bestaat uit kapconstructie + dakbeschot + isolatie + dakbedekking (pannen, leien, bitumen, EPDM).
- **Afwerking** — alles wat aan de binnenkant zichtbaar is en niet draagt: stukadoorwerk, schilderwerk, tegelwerk, behang, vloerbedekking, plafondafwerking, sanitair, keuken-/badkamerinrichting.
- **Installaties** — water, gas, elektra, verwarming, ventilatie, riolering, telecom. Lopen verticaal en horizontaal door het hele gebouw en zijn vaak deels weggewerkt achter de afwerking.

In een **doorsnede** lopen al deze groepen herkenbaar over elkaar: van onder naar boven kelder + fundering, dan de opbouw, dan het dak; afwerking aan de binnenkant van wanden, vloeren en plafonds; installaties als verticale tracés door het gebouw.
      `.trim(),
      diagrams: [{ type: 'hoofdopbouw' }],
    },

    {
      heading: '2 · Fundering en kelder',
      toetstermCodes: ['B.2.1'],
      body: `
**Fundering** is letterlijk de basis. De keuze hangt af van twee factoren: de **draagkracht van de bodem** (zand vs. klei vs. veen) en de **belasting** van het gebouw (woning, kantoor, hoogbouw).

- **Fundering op staal** — geen heipalen; het gebouw rust direct op de grond via funderingsstroken, poeren of een doorgaande betonplaat. Past bij draagkrachtige bodem (Oost-Nederland, zandgrond).
- **Paalfundering** — heipalen tot in de draagkrachtige zandlaag (in West-Nederland vaak 12–20 m diep). Belangrijke types: prefab betonpalen, geboorde palen, schroefpalen, en historisch houten heipalen.

**Funderingsproblemen** zijn een belangrijk onderwerp voor de makelaar:
- *Paalrot* — houten palen die boven de grondwaterstand zijn gekomen en gaan rotten
- *Bacteriële aantasting* van grenenhout — onafhankelijk van waterstand
- *Verzakking* door onvoldoende heipalen of ongelijke belasting bij later toegevoegde aanbouw
- Informatiebronnen: KCAF (Kenniscentrum Aanpak Funderingsproblematiek), Dinoloket, gemeentelijk funderingsloket

Een **kelder** is constructief een waterdichte bak; vraagt om bijzondere aandacht voor:
- Waterdichtheid (kimnaden, kelderbak, drainage)
- Ventilatie tegen vocht
- Veiligheid bij gebruik als verblijfsruimte (vluchtweg, daglicht)

Bij gebouwen zonder kelder is er een **kruipruimte** onder de begane-grondvloer voor leidingen en ventilatie. Voldoende ventilatie van de kruipruimte (≥ 4 cm² per m² vloeroppervlak) is essentieel om houtrot en vochtoverlast in de woning te voorkomen.
      `.trim(),
    },

    {
      heading: '3 · Opbouw — muren, vloeren en draagstructuur',
      toetstermCodes: ['B.2.1'],
      body: `
De **opbouw** is alles tussen de fundering en het dak. Belangrijke elementen:

**Muren**:
- *Dragende muren* — vormen het draagskelet samen met vloeren. Vaak van kalkzandsteen, beton of gemetseld baksteen-binnenblad. Dragen vloeren én het dak.
- *Buitenmuren / spouwmuren* — combinatie binnenblad (dragend) + spouw + isolatie + buitenblad (niet-dragend, decoratief).
- *Niet-dragende scheidingswanden* — gipsplaten op metalstud, cellenbeton, lichte kalkzandsteen. Vrij te verwijderen bij verbouwingen.

**Verdiepingsvloeren** — dragen mensen, meubels en geven horizontale stijfheid aan het gebouw. Types:
- *Houten balklaag* (oude woningen) — balken met vloerhout daarop
- *Betonvloer* (massief gestort) — bij gietbouw
- *Prefab systeemvloeren* (kanaalplaat, breedplaat, ribbenvloer, combinatievloer) — bij seriebouw

**Trappen** — verbinden de bouwlagen. Eisen volgens Bbl (aantrede ≥ 22 cm, optrede ≤ 18,8 cm, vrije breedte ≥ 80 cm, vrije hoogte ≥ 2,30 m).

**Kolommen en balken** — alleen in skeletbouw of waar grote overspanningen nodig zijn (winkels, kantoren). In een gewone woning zit het draagskelet meestal in de muren.

De opbouw is constructief het complexste deel: hier komen krachten samen uit dak, vloeren en eigen gewicht, en worden ze afgevoerd naar de fundering.
      `.trim(),
    },

    {
      heading: '4 · Dak',
      toetstermCodes: ['B.2.1'],
      body: `
Het **dak** sluit het gebouw bovenaan af. Twee hoofdvormen:

- **Plat dak** — vrijwel horizontaal (min. 1% afschot voor waterafvoer). Bedekking: bitumen (APP of SBS), EPDM-rubber, kunststof (PVC). Constructie: dakbeschot op balklaag of betonvloer, met isolatie volgens warmdak-, kouddak- of omgekeerd-dakprincipe.
- **Hellend dak** — schuin oppervlak om water/sneeuw snel af te voeren. Vormen: zadeldak (twee schuine vlakken), schilddak (vier vlakken), lessenaardak (één hellend vlak), mansardekap (gebroken dak), tentdak, wolfseind, sheddak. Bedekking: keramische of betonnen dakpannen, leien, riet, of metalen (zink, lood, koper).

De constructie van een hellend dak bestaat uit:
- *Spanten* of *gordingenkap* — het draagskelet
- *Dakbeschot* — houten of OSB-platen bovenop de spanten/gordingen
- *Isolatie* — tussen of op het dakbeschot
- *Tengels en panlatten* — kleine houten lijsten waarop de pannen rusten
- *Dakbedekking* — pannen, leien, of bitumen

**Aandachtspunten voor de makelaar**:
- *Type dakpan*: keramisch of beton. Keramische pannen kunnen vorstschade krijgen op oude varianten; betonpannen zijn zwaarder maar duurzamer.
- *Isolatie*: een dak zonder isolatie kost een woning veel warmte (sinds Bbl: Rc ≥ 6,3 voor woningnieuwbouw).
- *Lekkages*: rond schoorstenen, dakdoorvoeren, kilkepers en goten ontstaan vaak problemen.
- *Doorzakking* van een houten kapconstructie wijst op overbelasting of houtrot.
      `.trim(),
    },

    {
      heading: '5 · Afwerking en installaties',
      toetstermCodes: ['B.2.1'],
      body: `
**Afwerking** is de "huid" aan de binnenkant van het gebouw. Geen constructieve functie, maar wel grote invloed op de waarde en het comfort:

- *Stukadoorwerk* — raaplaag, blauwpleister, witpleister, sierpleister
- *Wandafwerking* — verf (latex, kalkverf), behang, tegelwerk, lambrisering
- *Vloerafwerking* — tegels, parket, laminaat, PVC, vloerbedekking, gietvloer
- *Plafondafwerking* — gips, systeemplafond, balklaag in het zicht (oude woningen)
- *Trap- en deurinrichting*, plinten, sierlijsten

**Installaties** zorgen voor leefbaarheid en comfort. De makelaar moet kunnen vaststellen welke installaties aanwezig zijn en in welke staat:

- *Riolering* — afvoer huishoudelijk afvalwater + hemelwater (gescheiden of gemengd stelsel)
- *Drinkwater* — hoofdkraan, waterleidingen, tappunten; let op loden leidingen in oude panden
- *Gas* — gasleiding en verbruikstoestellen (gasloos is sinds 2018 verplicht in nieuwbouw)
- *Elektra* — groepenkast, aardlekschakelaar, randaarde, voldoende groepen voor moderne apparatuur
- *Verwarming* — cv-ketel (gas/HR), warmtepomp, stadsverwarming, vloer-/wandverwarming
- *Ventilatie* — natuurlijke ventilatie, mechanische afzuiging, balansventilatie met WTW
- *Brand- en inbraakbeveiliging* — rookmelders, brandwerende deuren, hang- en sluitwerk

Installaties lopen vrijwel altijd door **schachten** (verticale tracés) en boven verlaagde plafonds (horizontale tracés). Bij verbouwing zit hier het meeste detailwerk: leidingen verleggen kost tijd én geld.
      `.trim(),
    },
  ],

  toetstermen: [
    {
      code: 'B.2.1',
      text: 'Legt de plaats van de elementengroepen fundering, opbouw, dak, kelder, afwerking en installaties van de hoofdopbouw uit.',
      niveau: 'BT1',
      bloom: 'Begrip',
    },
  ],

  questions: [
    {
      id: 'B.2.q1',
      toetstermCode: 'B.2.1',
      type: 'mc',
      prompt: 'Welke zes elementengroepen vormen samen de hoofdopbouw van een gebouw?',
      options: [
        'Gevel, voegwerk, schoorsteen, balkon, raam, deur',
        'Kelder, fundering, opbouw, dak, afwerking en installaties',
        'Beton, hout, staal, glas, isolatie, kunststof',
        'Begane grond, verdieping, zolder, kelder, dak, schuur',
      ],
      correctIndex: 1,
      explanation:
        'De hoofdopbouw bestaat uit zes elementengroepen: kelder, fundering, opbouw (muren+vloeren), dak, afwerking en installaties. Dit is de standaardindeling die in elke doorsnede terugkomt.',
    },
    {
      id: 'B.2.q2',
      toetstermCode: 'B.2.1',
      type: 'mc',
      prompt: 'Wat is de functie van de fundering?',
      options: [
        'De afwerking van de begane grond.',
        'Het overbrengen van de belasting van het gebouw naar de draagkrachtige grond.',
        'Het isoleren van de begane-grondvloer tegen kou.',
        'Het afvoeren van regenwater.',
      ],
      correctIndex: 1,
      explanation:
        'De fundering overbrugt de overgang van gebouw naar grond. Twee hoofdtypen: op staal (direct op de bodem, draagkrachtige grond) en paalfundering (heipalen, slappe ondergrond).',
    },
    {
      id: 'B.2.q3',
      toetstermCode: 'B.2.1',
      type: 'mc',
      prompt: 'Welke elementengroep zit tussen de fundering en het dak?',
      options: ['Kelder', 'Opbouw', 'Afwerking', 'Installaties'],
      correctIndex: 1,
      explanation:
        'De opbouw omvat alles tussen fundering en dak: dragende muren, niet-dragende scheidingswanden, verdiepingsvloeren, kolommen en eventuele balken.',
    },
    {
      id: 'B.2.q4',
      toetstermCode: 'B.2.1',
      type: 'mc',
      prompt:
        'Waar zitten in een gebouw doorgaans de schachten voor installaties?',
      options: [
        'In de spouwmuur van de buitengevel.',
        'Onder de begane-grondvloer in de kruipruimte.',
        'Vertikaal door de bouwlagen heen, vaak naast trappen of in een centrale kern.',
        'In de spanten van het dak.',
      ],
      correctIndex: 2,
      explanation:
        'Installaties lopen verticaal door schachten (centrale kern, vaak naast trappenhuis of toilet) en horizontaal vaak boven verlaagde plafonds.',
    },
    {
      id: 'B.2.q5',
      toetstermCode: 'B.2.1',
      type: 'mc',
      prompt: 'Waarvoor dient een kruipruimte onder een begane-grondvloer?',
      options: [
        'Als extra bergruimte voor de bewoner.',
        'Als ventilatie- en leidingruimte tussen de bodem en de begane-grondvloer.',
        'Om de woning verticaal te stabiliseren.',
        'Voor de fundering — kruipruimte = fundering.',
      ],
      correctIndex: 1,
      explanation:
        'De kruipruimte zorgt voor ventilatie (vocht weg) en biedt plaats aan leidingen. Vereist ≥ 4 cm² ventilatieopening per m² vloeroppervlak om houtrot en vochtoverlast te voorkomen.',
    },
    {
      id: 'B.2.q6',
      toetstermCode: 'B.2.1',
      type: 'mc',
      prompt:
        'Welke uitspraak over afwerking is juist?',
      options: [
        'Afwerking heeft een dragende functie en moet door een constructeur worden berekend.',
        'Afwerking is de zichtbare binnenlaag (stuc, verf, tegels, vloer) zonder constructieve rol; vrij te wijzigen bij verbouwingen.',
        'Afwerking is hetzelfde als gevelbekleding aan de buitenkant.',
        'Afwerking valt onder de fundering.',
      ],
      correctIndex: 1,
      explanation:
        'Afwerking = de niet-dragende binnenkant van een gebouw: stukadoor, verf, tegels, vloer, plafond, sanitair, keukens. Vrij te kiezen en aan te passen zonder constructeur.',
    },
    {
      id: 'B.2.q7',
      toetstermCode: 'B.2.1',
      type: 'mc',
      prompt:
        'Welk type vloer behoort tot de "opbouw" en is geen afwerking?',
      options: [
        'Laminaatvloer',
        'PVC-vloer',
        'Een prefab kanaalplaatvloer of houten balklaag',
        'Tapijt',
      ],
      correctIndex: 2,
      explanation:
        'Verdiepingsvloeren (kanaalplaat, breedplaat, balklaag) horen tot de opbouw — ze dragen lasten. Laminaat, PVC en tapijt zijn afwerklagen.',
    },
    {
      id: 'B.2.q8',
      toetstermCode: 'B.2.1',
      type: 'mc',
      prompt:
        'Een woning is gebouwd op slappe veengrond in West-Nederland. Welk type fundering is dan het meest voor de hand liggend?',
      options: [
        'Fundering op staal (direct op de grond).',
        'Een doorlopende betonplaat op de bodem zonder palen.',
        'Een paalfundering tot in de draagkrachtige zandlaag.',
        'Geen fundering nodig — de woning kan op het maaiveld staan.',
      ],
      correctIndex: 2,
      explanation:
        'In het westen ligt onder de slappe klei/veenlagen een diepe zandlaag waarop heipalen rusten. Op staal funderen kan daar niet — verzakkingen volgen direct. Paalfundering is standaard.',
    },
    {
      id: 'B.2.q9',
      toetstermCode: 'B.2.1',
      type: 'mc',
      prompt:
        'Waar lopen installaties (water, gas, elektra) in een gebouw doorgaans?',
      options: [
        'Alleen in de fundering.',
        'Verticaal door schachten, horizontaal achter afwerking of in vloeren — verspreid door alle elementengroepen.',
        'Alleen in het dak.',
        'Buiten het gebouw langs de gevel.',
      ],
      correctIndex: 1,
      explanation:
        'Installaties zijn niet één afgebakende laag maar lopen verticaal (schachten) en horizontaal door het hele gebouw — meestal weggewerkt achter afwerking of in verlaagde plafonds.',
    },
    {
      id: 'B.2.q10',
      toetstermCode: 'B.2.1',
      type: 'mc',
      prompt:
        'Bij welke bouwfase wordt typisch alles van de afwerking aangebracht?',
      options: [
        'Direct na de fundering, voordat de muren worden opgetrokken.',
        'Tegelijk met de fundering.',
        'In de laatste fase van de bouw, nadat het casco staat en de installaties zijn aangelegd.',
        'Voorafgaand aan de aanbesteding.',
      ],
      correctIndex: 2,
      explanation:
        'Volgorde in de praktijk: fundering → casco (opbouw + dak waterdicht) → installaties → afwerking. De afwerking gaat als laatste, want anders raakt ze beschadigd tijdens andere werkzaamheden.',
    },
  ],

  terms: [
    {
      term: 'Fundering',
      definition:
        'Constructiedeel dat de belasting van het gebouw overdraagt op de draagkrachtige grondlagen — strook-, paal-, plaat- of kelderfundering.',
    },
    {
      term: 'Begane grond­vloer',
      definition:
        'Vloer direct boven de kruipruimte of fundering; tegenwoordig vaak een geïsoleerde betonvloer (Ribcas, kanaalplaat).',
    },
    {
      term: 'Verdiepingsvloer',
      definition:
        'Tussenvloer tussen verdiepingen; meestal kanaalplaat, breedplaat of houten balklaag met plaat­vloer.',
    },
    {
      term: 'Dragende wand',
      definition:
        'Wand die naast eigen gewicht ook belasting van vloeren of dak naar fundering brengt — niet zomaar uit te breken.',
    },
    {
      term: 'Niet-dragende wand',
      definition:
        'Scheidings- of binnenwand zonder constructieve functie; mag gewijzigd worden zonder constructieve berekening.',
    },
    {
      term: 'Stabiliteits­wand',
      definition:
        'Wand die horizontale (wind)belasting opvangt en het gebouw stabiel houdt — vaak woningscheidende of trapwand.',
    },
    {
      term: 'Lateï',
      definition:
        'Korte balk boven een gevelopening die de belasting van het bovenliggende metselwerk overbrugt.',
    },
    {
      term: 'Spouwmuur',
      definition:
        'Buitenwand uit twee lagen met luchtspouw en isolatie ertussen — sinds 1975 standaard in NL voor warmte­isolatie.',
    },
    {
      term: 'Gevel­bekleding',
      definition:
        'Buitenste, niet-dragende laag (baksteen, hout, plaat) die regen weert en de uitstraling bepaalt.',
    },
    {
      term: 'Kap­constructie',
      definition:
        'Dak­draagstructuur — gordingenkap, sporenkap of spantenkap; vormt samen met dakbeschot het hellende dak.',
    },
    {
      term: 'Bouwmuur',
      definition:
        'Woningscheidende of brand­scheidende dragende wand tussen twee woningen of compartimenten.',
    },
    {
      term: 'Stramien',
      definition:
        'Grid van denkbeeldige assen waarop kolommen en dragende wanden zijn geplaatst — basis voor verdere maatvoering.',
    },
    {
      term: 'Bouwknoop',
      definition:
        'Aansluitpunt tussen twee bouwdelen (vloer-gevel, dak-gevel); kritiek punt voor lucht-, water- en warmte­dichting.',
    },
  ],

  games: [
    {
      id: 'B2-gapfill-1', type: 'gapfill',
      title: 'Hoofdopbouw begrippen',
      text:
        'Een gebouw bestaat van onder naar boven uit: {{fundering}}, {{begane grond}}, verdiepingen en {{dak}}. ' +
        'Het dragende geraamte heet de {{constructie}}; de niet-dragende invul-elementen heten {{afwerking}}. ' +
        'Wanden die belasting overdragen zijn {{dragend}}; andere wanden zijn niet-dragend.',
      distractors: ['poer', 'kruipruimte', 'casco', 'plafond'],
    },
    {
      id: 'B2-sort-1', type: 'sort',
      title: 'Dragend of niet-dragend?',
      categories: ['Dragend', 'Niet-dragend'],
      items: [
        { label: 'Buitenmuur', category: 'Dragend' },
        { label: 'Woningscheidende muur (rijwoning)', category: 'Dragend' },
        { label: 'Doorlopende binnenmuur door verdiepingen', category: 'Dragend' },
        { label: 'Gipsblokken-tussenwand', category: 'Niet-dragend' },
        { label: 'Metal-stud-scheidingswand', category: 'Niet-dragend' },
        { label: 'Cellenbeton-tussenwand', category: 'Niet-dragend' },
      ],
    },
    {
      id: 'B2-sequence-1', type: 'sequence',
      title: 'Bouwfases van onder naar boven',
      items: [
        'Grondwerk en fundering',
        'Beganegrondvloer',
        'Opmetsen / opbouw casco wanden',
        'Verdiepingsvloer + verdere wanden',
        'Dakconstructie + dakbedekking (waterdicht)',
        'Kozijnen, installaties en afwerking',
      ],
    },
  ],
}
