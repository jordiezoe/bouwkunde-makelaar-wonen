import type { Topic } from '../types/content'

export const A_2_1_tekeningen_bestek: Topic = {
  code: 'A.2.1',
  section: 'A',
  title: 'Bouwkundige tekeningen en bestekken',
  chapterRef: 'Lesboek hfd. 1–2 en bestekspraktijk',
  blurb:
    'Hoe lees je een bouwkundige tekening, welke arceringen horen bij welk materiaal, welke tekeningsoorten kom je tegen, hoe herken je dragende wanden, en wat staat er in een bouwkundig bestek en de UAV?',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · Functies en opbouw van een bouwkundige tekening',
      toetstermCodes: ['A.2.1.1', 'A.2.1.2'],
      body: `
Een bouwkundige tekening is een **2D-projectie** van het ontwerp. De belangrijkste tekentypes die op elke set terugkomen:

- **Situatietekening** — bovenaanzicht van het hele perceel inclusief omgeving. Toont rooilijnen, perceelgrenzen, oriëntatie, gebouwfootprint, parkeerplaatsen en aansluitingen op de openbare weg. Schaal vaak 1:500 of 1:1000.
- **Plattegrond** — horizontale doorsnede per bouwlaag op ongeveer 1 m hoogte. Toont wanden, kozijnen, doorgangen, vaste inrichting (keuken, sanitair). Standaardschaal 1:50 of 1:100.
- **Gevel** — verticaal vooraanzicht van een buitenmuur (voor-, zij-, achtergevel). Toont kozijnen, dakranden, gevelmateriaal. Schaal 1:50 of 1:100.
- **Doorsnede** — verticale snede door het gebouw, vaak overdwars en overlangs. Laat hoogten, vloeren, dakhelling, fundering zien. Schaal 1:50 of 1:100.
- **Detailtekening** — uitsnede van een specifieke aansluiting (kozijn, dakvoet, dakrand, fundering) op grote schaal: **1:5 of 1:10**. Hier worden materialen en aansluitingen exact gespecificeerd.

Op elke tekening hoort:

- Een **noordpijl** voor oriëntatie
- Een **renvooi** (legenda) waarin symbolen en arceringen verklaard worden
- Een **titelblok** rechtsonder met projectnaam, schaal, tekenaar, datum en versienummer
- **Maatvoering** in millimeters; bij gevels en doorsneden ook peilmaten (P = +0,00)
      `.trim(),
    },

    {
      heading: '2 · Arceringen — materialen herkennen',
      toetstermCodes: ['A.2.1.1'],
      body: `
Bouwkundige tekeningen gebruiken **standaardarceringen** zodat je in één oogopslag ziet uit welk materiaal een onderdeel is. De NEN-richtlijnen schrijven deze patronen voor. De belangrijkste:

- **Baksteen** — schuine evenwijdige strepen
- **Kalkzandsteen** — rechthoekig blokpatroon
- **Beton (ongewapend)** — stippels met kleine driehoekjes
- **Gewapend beton** — als beton + diagonale lijnen (de wapening)
- **Hout in lengterichting** — golvende nerflijnen
- **Hout in kops aanzicht** — jaarringen-cirkels
- **Isolatie** — golvende vulling (deken/plaat) of cirkeltjes (korrels)
- **Glas** — twee dunne parallelle lijnen
- **Staal** — massief zwart (of zeer donker grijs)
- **Grond / zand** — fijne stippeling, vaak met arcering
- **Tegelwerk** — rooster van kleine vierkantjes

Voor het examen geldt dat je deze in een tekening moet herkennen — vraag jezelf bij elke tekening af: *welk materiaal zie ik hier?* (Bbl-eisen verwijzen vaak naar materialen, dus dit is geen detail maar essentieel.)
      `.trim(),
      diagrams: [{ type: 'arceringen' }],
    },

    {
      heading: '3 · Tekeningsoorten door het bouwproces',
      toetstermCodes: ['A.2.1.3'],
      body: `
Tijdens het bouwproces ontstaat een groot aantal tekeningen in opeenvolgende verfijning:

- **Situatietekening** — bovenaanzicht perceel + omgeving (eerder besproken).
- **Schetsontwerp (SO)** — eerste vrije schetsen van de architect; ideeën en ruimtelijke opzet.
- **Voorlopig ontwerp (VO)** — uitgewerkte ontwerpversie met maten, indeling en materialen op hoofdlijnen.
- **Definitief ontwerp (DO)** — de definitieve uitwerking op basis waarvan de vergunning wordt aangevraagd.
- **Bouwaanvraagtekening** — versie van het DO speciaal voor de omgevingsvergunning: situatie, plattegronden, gevels, doorsneden — vaak met aanduiding van bouwvlak en rooilijnen.
- **Bestektekening** — technisch precieze tekening die hoort bij het bestek; nauwkeuriger dan DO, met details en materiaalspecificatie.
- **Werktekening** — uitvoeringstekening voor op de bouwplaats; alle maten en details die de uitvoerder nodig heeft.
- **Detailtekening** — grote schaal (1:5, 1:10) van kritische aansluitingen.
- **Constructietekening** — door de constructeur opgesteld; toont wapening, balken, kolommen, sterkteberekeningen.
- **Installatietekening** — door de installateur of -adviseur; toont leidingen, kanalen, schakelmateriaal van W- en E-installaties.
- **Verkooptekening** — vereenvoudigde tekening voor verkoopdoeleinden; vaak met meubels en aankleding voor sfeer.
- **Revisietekening (as-built)** — ná oplevering aangepast aan wat werkelijk gebouwd is; basis voor onderhoud en latere verbouwingen.

Voor jou als makelaar: bij een nieuwbouwwoning kun je vrijwel altijd de **verkooptekening** + **bouwaanvraagtekening** krijgen; bij bestaande bouw zijn **revisietekeningen** goud waard.
      `.trim(),
    },

    {
      heading: '4 · Dragende en niet-dragende wanden',
      toetstermCodes: ['A.2.1.4'],
      body: `
Op een plattegrond herken je een **dragende wand** aan drie dingen:

- De **dikkere lijn**: dragende muren zijn (door materiaalkeuze en dikte) duidelijk zwaarder getekend dan scheidingswanden.
- De **materiaalaanduiding**: dragend metselwerk, beton of kalkzandsteen — niet-dragend vaak gips/metalstud/cellenbeton 70 mm.
- **De plaats**: dragende wanden vormen meestal een doorlopend patroon door alle bouwlagen (vloeropleggingen) en sluiten aan op de fundering.

Op de **constructietekening** van de constructeur staat het expliciet: kolommen, balken, dragende muren met hun afmetingen en wapening. Bij twijfel raadpleeg je altijd die tekening.

**Belangrijk bij verbouwingen**: een niet-dragende scheidingswand mag zonder constructeur weg. Een dragende wand verwijderen of een doorbraak maken vereist **een constructieve berekening** en bijna altijd een **stalen latei** of HEA-profiel als vervanging. Vergeet niet dat dit ook **vergunningsplichtig** kan zijn als het de constructie aantast.
      `.trim(),
      diagrams: [{ type: 'plattegrondDragend' }],
    },

    {
      heading: '5 · Het bouwkundig bestek',
      toetstermCodes: ['A.2.1.5'],
      body: `
Een **bestek** is de schriftelijke contractomschrijving tussen opdrachtgever en aannemer; samen met de bestektekeningen vormt het de basis van het bouwcontract. Het bestek heeft twee hoofddelen:

- **Technisch deel** (per hoofdstuk de uit te voeren werkzaamheden):
  - Grondwerk en fundering
  - Beton- en metselwerk
  - Hout, kozijnen, ramen, deuren
  - Dakwerk, isolatie en dakbedekking
  - W-installaties (riolering, water, gas, cv)
  - E-installaties (elektra, communicatie)
  - Afwerking (stukadoor, tegel, schilder)
- **Administratief deel** (juridische en organisatorische bepalingen, zie sectie 6).

Het technisch deel is meestal opgesteld volgens de **STABU-systematiek**: een vast vocabulair en hoofdstuknummering die in de hele Nederlandse bouwsector wordt gebruikt. Voordeel: aannemers werken met hetzelfde referentiesysteem en kunnen daardoor sneller en eenduidiger calculeren.

Het bestek verwijst doorlopend naar **normen**:

- **NEN** — Nederlandse normen voor o.a. constructies, brandwerendheid, geluidsisolatie
- **NEN-EN** — Europese normen (CE-keurmerk)
- **KOMO-certificaat** — kwaliteitsmerk voor bouwproducten
- **Bbl** — Besluit bouwwerken leefomgeving (geldt boven alles)

Het bestek beschrijft ook **kwaliteitseisen** (bv. "metselwerk klasse A"), tolerantie-eisen, en **stelposten** (zie A.1.4).
      `.trim(),
    },

    {
      heading: '6 · Administratief deel en UAV',
      toetstermCodes: ['A.2.1.6'],
      body: `
Het **administratieve deel** van het bestek regelt alle juridische, financiële en organisatorische zaken tussen opdrachtgever en aannemer. De basis is meestal de **UAV** — *Uniforme Administratieve Voorwaarden voor de uitvoering van werken (versie 2012)*. De UAV is een standaardset voorwaarden die in heel veel bestekken van toepassing wordt verklaard, vergelijkbaar met algemene leveringsvoorwaarden.

Belangrijke onderwerpen die hier geregeld worden:

- **CAR-verzekering** (Construction All Risk) — een uitgebreide bouwverzekering die schade aan het werk én aan eigendommen van derden tijdens de bouw dekt (storm, brand, diefstal, vandalisme). De polis loopt vanaf de eerste bouwhandeling tot oplevering. Soms wordt verlengde nazorg (onderhoudstermijn) meegenomen.
- **Betalingstermijnen** — gerelateerd aan voltooide bouwfasen (zie A.1.5). Het bestek bepaalt na welke fasen een termijn wordt gefactureerd en welk percentage van de aanneemsom dat is.
- **5%-regeling / oplevering en garantie** — opdrachtgever mag bij oplevering 5% in depot houden (art. 7:768 BW); na 3 maanden vrijgegeven mits geen verborgen gebreken.
- **Onderhoudstermijn** — periode na oplevering waarin de aannemer kleine gebreken nog gratis verhelpt (standaard 6 maanden in de UAV).
- **Boete bij vertraging** — een dwangsom per dag dat de aannemer te laat oplevert.
- **Meer- en minderwerk** — procedurevoorschriften voor wijzigingen tijdens de bouw.
- **Geschillenregeling** — vaak via de **Raad van Arbitrage voor de Bouw** in plaats van de rechter.

Voor de makelaar relevant: bij **GIW- of SWK-garantie** woningen ontvangt de koper extra zekerheid bovenop de UAV — vraag altijd het garantiecertificaat op.
      `.trim(),
    },

    {
      heading: '7 · Bouwmethode kiezen — casuïstiek',
      toetstermCodes: ['A.2.1.7'],
      body: `
Vier hoofdcategorieën bouwmethoden:

- **Traditionele stapelbouw** — ter plaatse gemetseld baksteen of kalkzandsteen. Flexibel ontwerp, langzaam tempo, kleine bouwploegen. Goed voor unieke woningen, dakkapellen, kleine aanbouwen.
- **Systeembouw / montagebouw** — geprefabriceerde elementen (betonpanelen, prefab houtskeletbouw). Snel tempo, betere maatvoering, minder afhankelijk van het weer. Geschikt voor seriematige nieuwbouw, woningblokken.
- **Gietbouw** — beton ter plaatse gestort in bekisting. Hele wanden en vloeren in één keer. Geschikt voor snelle, robuuste nieuwbouw met repeterende plattegronden (galerijflat, hoogbouw).
- **Skeletbouw** — een dragend skelet van beton, staal of hout (CLT). Vrije plattegrondindeling. Veel toegepast in kantoren, bedrijfshallen en hoogbouw — bij woningen meer in moderne nieuwbouw.

Bij **verbouwingen** in een bestaande woning: zelden hele bouwmethoden — maar wel keuzes binnen onderdelen:

- **Aanbouw achter** (1-laags) → traditioneel metselwerk past meestal het beste bij de bestaande gevel.
- **Optopping** (extra verdieping) → houtskeletbouw of lichte staalconstructie, want lager gewicht ontziet de bestaande fundering.
- **Doorbraak woonkamer–keuken** → stalen latei (HEA/HEB-profiel) berekend door constructeur; meestal vergunningsplichtig.
- **Dakkapel** → prefab dakkapel-element of ter plaatse gebouwd in traditionele stijl; vergunningsvrij binnen voorwaarden (omgevingsplan).
- **Vrijstaande nieuwbouw met haast** → prefab houtskeletbouw of CLT — strakke planning, kort op de bouwplaats.

Beargumenteren = aangeven *waarom* een keuze past bij de casus (gewicht, snelheid, esthetiek, kosten, bestaande situatie).
      `.trim(),
    },
  ],

  toetstermen: [
    {
      code: 'A.2.1.1',
      text: 'Benoemt de opbouw van een bouwkundige tekening, situatietekening, plattegronden, gevels en doorsneden (oriëntatie en renvooi), inclusief het herkennen van materiaalgebruik aan de hand van arceringen.',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'A.2.1.2',
      text: 'Legt aan de hand van voorbeeldtekeningen de plattegronden, gevels, doorsneden, details en installaties uit.',
      niveau: 'BT2',
      bloom: 'Begrip',
      metDrawing: true,
    },
    {
      code: 'A.2.1.3',
      text: 'Herkent de tekeningen van onroerende zaken inhoudelijk: situatietekening, schetsontwerp, definitief ontwerp, bouwaanvraagtekening, bestektekening, werktekening, detailtekening, constructietekening, installatietekening, verkooptekening en revisietekening.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
    {
      code: 'A.2.1.4',
      text: 'Geeft vanaf de bouwkundige en constructietekening aan welke wanden dragend en constructief zijn.',
      niveau: 'BT2',
      bloom: 'Kennis',
      metDrawing: true,
    },
    {
      code: 'A.2.1.5',
      text: 'Legt een "bouwkundig bestek" met de gebruikelijke indeling en de daarin voorkomende bepalingen, voorschriften, normen, kwaliteitsomschrijvingen en terminologie naar vorm en functie uit.',
      niveau: 'BT2',
      bloom: 'Begrip',
      metDrawing: true,
    },
    {
      code: 'A.2.1.6',
      text: 'Benoemt de CAR-verzekering, betalingstermijnen en overige administratieve bepalingen uit het administratieve deel (UAV) van het (bouwkundig) bestek.',
      niveau: 'BT2',
      bloom: 'Kennis',
      metDrawing: true,
    },
    {
      code: 'A.2.1.7',
      text: 'Beargumenteert aan de hand van een casus (verbouwing bestaande indeling woning of uitbreiding van een woning) voor welke bouwmethode(n) kan worden gekozen.',
      niveau: 'BT2',
      bloom: 'Evalueren',
      metDrawing: true,
    },
  ],

  questions: [
    // A.2.1.1 — Plattegrond lezen: beeldvragen (symbolen herkennen)
    {
      id: 'A.2.1.beeld-deur',
      toetstermCode: 'A.2.1.1',
      type: 'mc',
      prompt: 'Wat stelt symbool **A** op deze plattegrond voor?',
      image: {
        src: '/figs/vragen/plattegrond-vraag.svg',
        caption: 'Deel van een plattegrond met drie symbolen A, B en C.',
        width: 'lg',
      },
      options: [
        'Een raam in de binnenwand',
        'Een deur',
        'Een doorgang zonder deur',
        'Een schuifpui',
      ],
      correctIndex: 1,
      explanation:
        'Symbool A is een deur: de rechte lijn is het deurblad, de kwartcirkel (boog) geeft aan hoe ver en welke kant het deurblad opendraait.',
    },
    {
      id: 'A.2.1.beeld-raam',
      toetstermCode: 'A.2.1.1',
      type: 'mc',
      prompt: 'Wat stelt symbool **B** in de buitenmuur voor?',
      image: {
        src: '/figs/vragen/plattegrond-vraag.svg',
        caption: 'Deel van een plattegrond met drie symbolen A, B en C.',
        width: 'lg',
      },
      options: [
        'Een deur naar buiten',
        'Een raam (kozijn)',
        'Een ventilatierooster',
        'Een nis in de gevel',
      ],
      correctIndex: 1,
      explanation:
        'Symbool B is een raam: een raamopening in de buitenmuur wordt getekend met meerdere evenwijdige lijnen (het glas/kozijn) binnen de muurdikte.',
    },
    {
      id: 'A.2.1.beeld-trap',
      toetstermCode: 'A.2.1.1',
      type: 'mc',
      prompt: 'Wat stelt symbool **C** voor?',
      image: {
        src: '/figs/vragen/plattegrond-vraag.svg',
        caption: 'Deel van een plattegrond met drie symbolen A, B en C.',
        width: 'lg',
      },
      options: [
        'Een tegelvloer',
        'Een trap',
        'Een keukenblok',
        'Een radiator onder het raam',
      ],
      correctIndex: 1,
      explanation:
        'Symbool C is een trap: de reeks evenwijdige lijnen zijn de treden en de pijl langs de looplijn wijst in de richting waarin je omhoog loopt.',
    },

    // A.2.1.1 — Opbouw + arceringen (BT1, Kennis)
    {
      id: 'A.2.1.q1',
      toetstermCode: 'A.2.1.1',
      type: 'mc',
      prompt: 'Welke schaal wordt typisch gebruikt voor een woningplattegrond?',
      options: ['1:5', '1:50', '1:500', '1:5000'],
      correctIndex: 1,
      explanation:
        'Plattegronden van woningen zijn standaard 1:50 of 1:100. 1:5 is voor detailtekeningen; 1:500 voor situatietekeningen; 1:5000 voor stedenbouwkundige plannen.',
    },
    {
      id: 'A.2.1.q2',
      toetstermCode: 'A.2.1.1',
      type: 'mc',
      prompt: 'Wat is het doel van een renvooi op een bouwkundige tekening?',
      options: [
        'Het aanduiden van de schaal',
        'Een legenda die de gebruikte symbolen, arceringen en afkortingen verklaart',
        'Het titelblok met projectgegevens',
        'De maatvoering van het bouwwerk',
      ],
      correctIndex: 1,
      explanation:
        'Het renvooi is de legenda van de tekening: voor elke arcering, elk symbool en elke afkorting staat hier wat het betekent. Zonder renvooi is een tekening voor een derde slecht te lezen.',
    },
    {
      id: 'A.2.1.q3',
      toetstermCode: 'A.2.1.1',
      type: 'mc',
      prompt:
        'Welke arcering komt overeen met gewapend beton op een doorsnede?',
      options: [
        'Een effen zwart vlak',
        'Stippels, driehoekjes én diagonale lijnen',
        'Schuine evenwijdige strepen',
        'Concentrische cirkels (jaarringen)',
      ],
      correctIndex: 1,
      explanation:
        'Beton zonder wapening: stippels en driehoekjes. Gewapend beton: dezelfde stippels + diagonale lijnen voor de wapening. Effen zwart = staal; schuine strepen = baksteen; cirkels = hout in kops aanzicht.',
    },
    {
      id: 'A.2.1.q4',
      toetstermCode: 'A.2.1.1',
      type: 'mc',
      prompt:
        'Op welke hoogte wordt een woningplattegrond standaard "afgesneden" om te tekenen?',
      options: [
        'Net boven de vloer (≈ 10 cm)',
        'Ongeveer 1 meter boven de vloer',
        'Op plafondhoogte (~2,60 m)',
        'Op de hoogte van het dakvlak',
      ],
      correctIndex: 1,
      explanation:
        'Een plattegrond is een horizontale doorsnede op ~1 m hoogte. Op die hoogte snijd je door ramen en deuren heen — vandaar dat kozijnopeningen op de plattegrond zichtbaar zijn.',
    },

    // A.2.1.2 — Tekening uitleggen (BT2, Begrip)
    {
      id: 'A.2.1.q5',
      toetstermCode: 'A.2.1.2',
      type: 'mc',
      prompt:
        'Waarvoor dient een doorsnede in een bouwkundige tekening?',
      options: [
        'Om de oppervlakte van het perceel te tonen',
        'Om een verticale snede door het gebouw te tonen',
        'Om de handtekening van de architect te plaatsen',
        'Om de positie op het perceel te bepalen',
      ],
      correctIndex: 1,
      explanation:
        'Een doorsnede toont een verticale snede door het gebouw. Op de plattegrond zie je de horizontale indeling; op de doorsnede de verticale opbouw.',
    },
    {
      id: 'A.2.1.q6',
      toetstermCode: 'A.2.1.2',
      type: 'mc',
      prompt:
        'Een klant vraagt waar op de tekening de positie van een wandcontactdoos staat. Op welke tekening kijk je?',
      options: [
        'De situatietekening.',
        'De bouwaanvraagtekening.',
        'De installatietekening (E-installatie).',
        'De verkooptekening.',
      ],
      correctIndex: 2,
      explanation:
        'Stopcontacten, schakelaars en kabels staan op de installatietekening (specifiek de E-installatietekening). De bouwaanvraagtekening toont alleen het bouwkundige.',
    },
    {
      id: 'A.2.1.q7',
      toetstermCode: 'A.2.1.2',
      type: 'mc',
      prompt:
        'Op welke schaal staat een detailtekening van een dakvoet typisch?',
      options: ['1:1 of 1:2', '1:5 of 1:10', '1:50', '1:200'],
      correctIndex: 1,
      explanation:
        'Details worden op 1:5 of 1:10 getekend zodat materiaalkeuze en aansluitingen exact te lezen zijn. Plattegronden gaan op 1:50/100.',
    },

    // A.2.1.3 — Tekeningsoorten (BT2, Kennis)
    {
      id: 'A.2.1.q8',
      toetstermCode: 'A.2.1.3',
      type: 'mc',
      prompt:
        'Wat is een revisietekening?',
      options: [
        'De eerste schets aan het begin van het project',
        'De vastlegging van de situatie ná oplevering',
        'De tekening voor de omgevingsvergunning',
        'De tekening met de wapeningsuitwerking',
      ],
      correctIndex: 1,
      explanation:
        'Revisietekeningen worden achteraf bijgewerkt zodat ze precies tonen wat er gebouwd is — basis voor onderhoud, latere verbouwingen en de woningmap.',
    },
    {
      id: 'A.2.1.q9',
      toetstermCode: 'A.2.1.3',
      type: 'mc',
      prompt:
        'In welke volgorde worden tekeningen tijdens een bouwproces uitgewerkt?',
      options: [
        'Werktekening → schetsontwerp → definitief ontwerp → bouwaanvraagtekening',
        'Schetsontwerp → voorlopig ontwerp → definitief ontwerp → bouwaanvraagtekening → bestek- en werktekening',
        'Bouwaanvraagtekening → schetsontwerp → werktekening → bestektekening',
        'Definitief ontwerp → schetsontwerp → voorlopig ontwerp → werktekening',
      ],
      correctIndex: 1,
      explanation:
        'Het verloop is altijd van grof naar fijn: eerst SO, dan VO, dan DO, dan bouwaanvraag, en pas in de voorbereidingsfase de bestek- en werktekeningen.',
    },
    {
      id: 'A.2.1.q10',
      toetstermCode: 'A.2.1.3',
      type: 'mc',
      prompt:
        'Welke tekening krijgt de koper van een nieuwbouwwoning meestal in de verkoopbrochure?',
      options: [
        'De constructietekening',
        'De revisietekening',
        'De verkooptekening',
        'De werktekening van de aannemer',
      ],
      correctIndex: 2,
      explanation:
        'Verkooptekeningen zijn marketing-georiënteerd: vereenvoudigd, met inrichtingen aangegeven om de schaal en sfeer te tonen. Niet bedoeld voor uitvoeringsdetails.',
    },
    {
      id: 'A.2.1.q11',
      toetstermCode: 'A.2.1.3',
      type: 'mc',
      prompt:
        'Welke tekening is essentieel om te beoordelen of een geplande doorbraak in een dragende muur constructief mogelijk is?',
      options: [
        'De situatietekening.',
        'De verkooptekening.',
        'De constructietekening.',
        'De installatietekening.',
      ],
      correctIndex: 2,
      explanation:
        'De constructietekening (door de constructeur opgesteld) toont welke muren dragen, welke balken er liggen en welke krachten er werken. Onmisbaar bij een doorbraakplan.',
    },
    {
      id: 'A.2.1.q12',
      toetstermCode: 'A.2.1.3',
      type: 'mc',
      prompt:
        'Wat is het verschil tussen een bestektekening en een werktekening?',
      options: [
        'Bestektekeningen alleen voor woningen, werktekeningen voor utiliteit',
        'Bestektekening hoort bij het contract, werktekening is voor de uitvoering',
        'Werktekeningen keurt de gemeente goed, bestektekeningen de aannemer',
        'Er is geen verschil — synoniemen',
      ],
      correctIndex: 1,
      explanation:
        'Bestektekeningen + bestek = contract. Werktekeningen = de praktische uitvoeringstekeningen die de bouwploeg op de bouwplaats gebruikt; vaak met aanvullende maten en details voor specifieke knopen.',
    },

    // A.2.1.4 — Dragend / niet-dragend (BT2, Kennis)
    {
      id: 'A.2.1.q13',
      toetstermCode: 'A.2.1.4',
      type: 'multi',
      prompt:
        'Welke kenmerken wijzen op een plattegrond op een dragende muur? Selecteer alle juiste.',
      options: [
        'De muur is dikker getekend',
        'Zwaar materiaal (metselwerk/beton/kalkzandsteen)',
        'De muur loopt door alle bouwlagen',
        'De muur is rood ingekleurd',
        'Er staat een radiator voor',
      ],
      correctIndices: [0, 1, 2],
      explanation:
        'Dragende muren staan dikker getekend, in zwaarder materiaal, en lopen meestal door alle bouwlagen tot de fundering. Kleur en een radiator zeggen niets over de draagfunctie; de constructietekening bevestigt het definitief.',
    },
    {
      id: 'A.2.1.q14',
      toetstermCode: 'A.2.1.4',
      type: 'mc',
      prompt:
        'Welke wand is doorgaans NIET dragend in een rijtjeswoning?',
      options: [
        'De woningscheidende muur tussen twee woningen.',
        'De voorgevel (buitenmuur).',
        'Een gipsplaten scheidingswand binnen één verdieping.',
        'De achterzijde van de woning (buitenmuur).',
      ],
      correctIndex: 2,
      explanation:
        'Gipsplaten/metalstud-scheidingswanden binnen één verdieping zijn lichte niet-dragende constructies. De buitenmuren en woningscheidende muren in rijtjeswoningen zijn juist dragend en akoestisch gescheiden.',
    },
    {
      id: 'A.2.1.q15',
      toetstermCode: 'A.2.1.4',
      type: 'mc',
      prompt:
        'Een klant wil de muur tussen de woonkamer en de keuken weghalen. Op de bouwkundige plattegrond is deze muur dikker getekend dan een binnenwand op de verdieping. Wat is de meest waarschijnlijke conclusie?',
      options: [
        'Een lichte scheidingswand — vrij weg te halen',
        'Waarschijnlijk dragend — constructeur en stalen ligger nodig',
        'Een installatieschacht — niet te verwijderen',
        'Niet relevant — de vloer draagt, niet de wand',
      ],
      correctIndex: 1,
      explanation:
        'Een opvallend dikkere wand op de begane grond duidt vrijwel altijd op dragend werk. Doorbraak = constructeur + stalen latei (HEA/HEB) + bouw- of meldingsplicht afhankelijk van impact.',
    },
    {
      id: 'A.2.1.q16',
      toetstermCode: 'A.2.1.4',
      type: 'mc',
      prompt:
        'Welke tekening leest een constructeur primair om de dragende structuur te beoordelen?',
      options: [
        'De verkooptekening',
        'De installatietekening',
        'De constructietekening',
        'De situatietekening',
      ],
      correctIndex: 2,
      explanation:
        'De constructietekening bevat balken, kolommen, dragende muren met materiaal en wapening — het feitelijke draagskelet van het gebouw.',
    },

    // A.2.1.5 — Bestek (BT2, Begrip)
    {
      id: 'A.2.1.q17',
      toetstermCode: 'A.2.1.5',
      type: 'mc',
      prompt:
        'Uit welke twee hoofddelen bestaat een bouwkundig bestek?',
      options: [
        'Een tekstdeel en een fotodeel.',
        'Een technisch deel en een administratief deel.',
        'Een ontwerpdeel en een uitvoeringsdeel.',
        'Een gemeentedeel en een aannemersdeel.',
      ],
      correctIndex: 1,
      explanation:
        'Het bestek = technische omschrijving (per onderdeel/STABU-hoofdstuk) + administratieve bepalingen (UAV, betaling, CAR, garantie). Beide samen vormen het contract.',
    },
    {
      id: 'A.2.1.q18',
      toetstermCode: 'A.2.1.5',
      type: 'mc',
      prompt:
        'Wat is de STABU-systematiek?',
      options: [
        'Een Europese norm voor staalconstructies',
        'Een vaste structuur en vocabulaire voor bestekken',
        'Een verzekering tegen bouwvertraging',
        'Software waarmee de gemeente vergunningen afgeeft',
      ],
      correctIndex: 1,
      explanation:
        'STABU is dé standaardstructuur voor bestekken: vaste hoofdstukken (fundering, casco, kozijnen, ...) en termen. Daardoor zijn bestekken onderling vergelijkbaar.',
    },
    {
      id: 'A.2.1.q19',
      toetstermCode: 'A.2.1.5',
      type: 'mc',
      prompt:
        'Naar welke norm verwijst een bestek meestal voor brandveiligheidseisen van constructies?',
      options: [
        'Het bouwteamboek',
        'Het Bbl en bijbehorende NEN-normen',
        'De UAV 2012',
        'Het KOMO-certificaat van de aannemer',
      ],
      correctIndex: 1,
      explanation:
        'Brandveiligheidseisen staan in het Bbl en bijbehorende NEN-normen (bv. NEN 6068, 6075). Het bestek verwijst ernaar om de kwaliteitseisen sluitend te maken.',
    },
    {
      id: 'A.2.1.q20',
      toetstermCode: 'A.2.1.5',
      type: 'mc',
      prompt:
        'Wat is een typische functie van een stelpost in het bestek?',
      options: [
        'Een gegarandeerde winst voor de aannemer',
        'Een geschat bedrag, later verrekend',
        'Een boetebedrag bij vertraging',
        'Een vast bedrag voor de leges',
      ],
      correctIndex: 1,
      explanation:
        'Stelposten zijn voor onderdelen die nog niet definitief zijn (keuken, sanitair). Bij definitieve keuze wordt het verschil verrekend met de opdrachtgever.',
    },

    // A.2.1.6 — UAV / CAR (BT2, Kennis)
    {
      id: 'A.2.1.q21',
      toetstermCode: 'A.2.1.6',
      type: 'mc',
      prompt:
        'Wat is een CAR-verzekering in de bouwpraktijk?',
      options: [
        'Een autoverzekering voor de bouwbusjes',
        'Een Construction All Risk-verzekering tijdens de bouw',
        'Een korting bij contante betaling',
        'Een verzekering op verzoek van de gemeente',
      ],
      correctIndex: 1,
      explanation:
        'De CAR-verzekering loopt van de eerste bouwhandeling tot oplevering en dekt storm-, brand-, diefstal- en vandalismeschade. Vaak inclusief schade aan eigendommen van derden (buurman, openbare weg).',
    },
    {
      id: 'A.2.1.q22',
      toetstermCode: 'A.2.1.6',
      type: 'mc',
      prompt:
        'Wat is de UAV 2012?',
      options: [
        'Een vergunningsregeling voor aanbouwen',
        'Uniforme Administratieve Voorwaarden voor bouwwerken',
        'Een verplichte cursus voor aannemers',
        'Een keurmerk voor gevelelementen',
      ],
      correctIndex: 1,
      explanation:
        'UAV 2012 = standaardvoorwaarden voor traditionele bouwcontracten (geschillenregeling, betalingstermijnen, oplevering, boete, garantie). Vergelijkbaar met algemene leveringsvoorwaarden.',
    },
    {
      id: 'A.2.1.q23',
      toetstermCode: 'A.2.1.6',
      type: 'mc',
      prompt:
        'Wat is volgens de UAV de gangbare onderhoudstermijn na oplevering?',
      options: ['1 maand', '6 maanden', '12 maanden', '3 jaar'],
      correctIndex: 1,
      explanation:
        'De standaard UAV-onderhoudstermijn is 6 maanden na oplevering. In die periode verhelpt de aannemer gebreken die niet bij oplevering bekend waren. Daarna geldt de wettelijke garantietermijn.',
    },

    // A.2.1.7 — Bouwmethodekeuze (BT2, Evalueren — casus)
    {
      id: 'A.2.1.q24',
      toetstermCode: 'A.2.1.7',
      type: 'mc',
      prompt:
        'Een klant wil op zijn jaren-30-woning een extra verdieping (optopping) plaatsen. Welke bouwmethode is meestal het meest passend en waarom?',
      options: [
        'Traditionele stapelbouw',
        'Houtskeletbouw of lichte staalconstructie',
        'Gietbouw met beton ter plaatse',
        'Prefab betonelementen',
      ],
      correctIndex: 1,
      explanation:
        'Bij optopping is gewicht doorslaggevend. Een jaren-30-fundering kan vaak geen extra metselwerk- of betonverdieping dragen. HSB of staal weegt veel minder en is daardoor de logische keuze.',
    },
    {
      id: 'A.2.1.q25',
      toetstermCode: 'A.2.1.7',
      type: 'mc',
      prompt:
        'Voor een groot project met 80 identieke rijwoningen kiest de ontwikkelaar voor maximale snelheid en uniformiteit. Welke bouwmethode past hier het best?',
      options: [
        'Traditionele stapelbouw',
        'Systeembouw/montagebouw met prefab elementen',
        'Skeletbouw met staal',
        'Houtskeletbouw met handgemaakte details',
      ],
      correctIndex: 1,
      explanation:
        'Bij grote series identieke woningen is prefab/montagebouw veruit het snelst en goedkoopst: elementen worden in de fabriek gemaakt en op de bouwplaats samengevoegd. Korte bouwtijd, weersonafhankelijk.',
    },
    {
      id: 'A.2.1.q26',
      toetstermCode: 'A.2.1.7',
      type: 'mc',
      prompt:
        'Een klant wil een dakkapel plaatsen op een bestaande rijtjeswoning. Wat is doorgaans de praktischste aanpak?',
      options: [
        'Ter plaatse traditioneel bouwen',
        'Een prefab dakkapel-element plaatsen',
        'Een gietbouwoplossing toepassen',
        'Skeletbouw met stalen kolommen',
      ],
      correctIndex: 1,
      explanation:
        'Voor één dakkapel is een prefab-element bijna altijd het snelst en goedkoopst, en geeft het minste overlast. Onder bepaalde voorwaarden (omgevingsplan, hoogte, afstand tot dakvoet) zelfs vergunningsvrij.',
    },
    {
      id: 'A.2.1.q27',
      toetstermCode: 'A.2.1.7',
      type: 'mc',
      prompt:
        'Een klant wil een aanbouw van 1 verdieping achter zijn bestaande gemetselde woning. Welke bouwmethode sluit visueel én constructief het best aan?',
      options: [
        'Houtskeletbouw met houten gevelbekleding.',
        'Traditionele stapelbouw in dezelfde baksteen als de bestaande gevel.',
        'Prefab betonbouw met zichtbeton.',
        'Gietbouw met aluminium afwerking.',
      ],
      correctIndex: 1,
      explanation:
        'Een aanbouw die naadloos bij de bestaande gevel aansluit, vraagt om dezelfde baksteen en metselverband. Traditionele stapelbouw is daarvoor de logische keuze; alleen bij budgetkrapte of snelheid wordt soms voor HSB of prefab gekozen.',
    },
  ],

  terms: [
    {
      term: 'Plattegrond',
      definition:
        'Horizontale doorsnede op ongeveer 1 m hoogte; toont indeling, wanden, kozijnen en maatvoering per verdieping.',
    },
    {
      term: 'Gevelaanzicht',
      definition:
        'Recht aanzicht van een gevel met kozijnen, materialen en hoogtematen — geen perspectief.',
    },
    {
      term: 'Doorsnede',
      definition:
        'Verticale snede door het gebouw; toont vloer­hoogten, vloer- en dakopbouw, fundering en verdiepings­scheidingen.',
    },
    {
      term: 'Situatietekening',
      definition:
        'Tekening (meestal schaal 1:500 of 1:1000) die de positie van het bouwwerk op het kavel met aangrenzende straten en buren weergeeft.',
    },
    {
      term: 'Detailtekening',
      definition:
        'Sterk uitvergrote tekening (1:5 of 1:10) van aansluit­punten zoals kozijnaansluiting, dakrand of fundering.',
    },
    {
      term: 'Schaal 1:100',
      definition:
        'Standaard­schaal voor plattegronden en gevels: 1 cm op papier = 1 m in werkelijkheid.',
    },
    {
      term: 'Bestek',
      definition:
        'Geschreven document met technische beschrijving, materiaaleisen en administratieve voorwaarden van het werk — contractbasis met de aannemer.',
    },
    {
      term: 'STABU',
      definition:
        'Standaardsystematiek voor bestekken in de B&U-bouw — gestandaardiseerde indeling en formuleringen.',
    },
    {
      term: 'UAV 2012',
      definition:
        'Uniforme Administratieve Voorwaarden — algemene contractvoorwaarden tussen opdrachtgever en aannemer (traditionele bouw).',
    },
    {
      term: 'Stapelbouw',
      definition:
        'Traditionele bouwwijze met dragende metselwerk- of betonwanden, ter plekke opgemetseld of gestort.',
    },
    {
      term: 'Skeletbouw',
      definition:
        'Constructie met dragende kolommen en balken; wanden zijn niet-dragend en kunnen flexibel ingedeeld worden.',
    },
    {
      term: 'HSB',
      definition:
        'Houtskeletbouw — prefab houten elementen met isolatie tussen de stijlen; lichte, snelle bouwwijze.',
    },
    {
      term: 'Prefab',
      definition:
        'In de fabriek vervaardigde bouwelementen (beton, hout, staal) die op de bouwplaats alleen nog gemonteerd hoeven te worden.',
    },
  ],

  games: [
    {
      id: 'A21-gapfill-1', type: 'gapfill',
      title: 'Tekeningen en schaal',
      text:
        'Een plattegrond wordt meestal op schaal {{1:100}} getekend; details op schaal {{1:5}} of 1:10. ' +
        'Een {{situatietekening}} toont het pand in de context van perceel en straat. ' +
        'Een {{doorsnede}} laat zien hoe het gebouw verticaal is opgebouwd. ' +
        'Het {{bestek}} bevat technische beschrijving + materialen, vaak gestructureerd volgens {{STABU}}.',
      distractors: ['1:50', 'aanzicht', 'NEN', 'BIM'],
    },
    {
      id: 'A21-sort-1', type: 'sort',
      title: 'Bouwmethoden — sorteer',
      categories: ['Traditionele bouw', 'Industrieel / prefab'],
      items: [
        { label: 'Stapelbouw (metselen ter plaatse)', category: 'Traditionele bouw' },
        { label: 'In-werk gestort beton', category: 'Traditionele bouw' },
        { label: 'Tunnelbekisting', category: 'Industrieel / prefab' },
        { label: 'Prefab kanaalplaatvloer', category: 'Industrieel / prefab' },
        { label: 'Houtskeletbouw (HSB)', category: 'Industrieel / prefab' },
        { label: 'CLT (Cross-Laminated Timber)', category: 'Industrieel / prefab' },
      ],
    },
    {
      id: 'A21-sequence-1', type: 'sequence',
      title: 'Tekenfases bij architect',
      items: [
        'Schetsontwerp (SO)',
        'Voorlopig Ontwerp (VO)',
        'Definitief Ontwerp (DO)',
        'Technisch Ontwerp / Uitvoerings­tekeningen',
        'As-built tekeningen na oplevering',
      ],
    },
    {
      id: 'A21-matching-1', type: 'matching',
      title: 'Koppel tekeningtypen',
      pairs: [
        { left: 'Plattegrond', right: 'Horizontale snede ~1 m boven de vloer' },
        { left: 'Doorsnede', right: 'Verticale snede door het gebouw' },
        { left: 'Aanzicht', right: 'Buitenkant gevel — vooraanzicht, zijaanzicht' },
        { left: 'Situatietekening', right: 'Pand in context van perceel en omgeving' },
        { left: 'Bestek', right: 'Tekstuele beschrijving van materialen en werk' },
        { left: 'BIM', right: '3D digitaal model van het gebouw' },
      ],
    },
  ],
}
