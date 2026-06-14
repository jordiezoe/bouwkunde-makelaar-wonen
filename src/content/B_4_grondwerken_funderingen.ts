import type { Topic } from '../types/content'

const FIG = '/figs/B_4'
const SRC_GW = 'Lesboek hfd. 4'
const SRC_F = 'Lesboek hfd. 5'

export const B_4_grondwerken_funderingen: Topic = {
  code: 'B.4',
  section: 'B',
  title: 'Grondwerken, funderingen en kelders',
  chapterRef: 'Lesboek hoofdstukken 4 en 5',
  blurb:
    'De ondergrond in Nederland (klei, veen, zand), grondonderzoek met sonderingen en boringen, fundering op staal en op palen, bemaling en damwanden, funderingsschade en bronnen als KCAF en Dinoloket, plus kruipruimten en kelders.',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · Grondsoorten in Nederland',
      toetstermCodes: ['B.4.1'],
      body: `
Nederland kent grofweg drie hoofdgrondsoorten, elk met andere bouwkundige eigenschappen:

- **Klei** — fijne deeltjes, slecht waterdoorlatend, krimpt bij droogte en zwelt bij vocht. Beperkt draagkrachtig, geeft zetting bij belasting. Komt vooral voor in West- en Noord-Nederland.
- **Veen** — organisch materiaal (vergaan plantenresten), zeer slap, samendrukbaar. Slechte draagkracht. Veel in het Groene Hart, delen van Friesland en Drenthe.
- **Zand** — losse korrels, goed waterdoorlatend, goed draagkrachtig (mits voldoende vastgedrukt). Komt aan het oppervlak voor in Oost-Nederland, op de hoge zandgronden, en in heel Nederland diep in de bodem als Pleistocene zandlaag.

In **West-Nederland** ligt boven het draagkrachtige zand een dik pakket slappe klei en veen. Daarom worden gebouwen daar vrijwel altijd op heipalen gefundeerd die tot ín de zandlaag reiken — typisch 12–20 m diep. In **Oost-Nederland** ligt de zandlaag vaak al direct aan het oppervlak: daar kan op staal gefundeerd worden.

**Grondwater** speelt overal mee:
- *Freatisch (boven)water* — de bovenste grondwaterstand
- *Spanningswater* — water onder druk, ingesloten onder een slechtdoorlatende laag (vaak klei)
- *Bovenwater* — water dat op een slechtdoorlatende laag staat, boven de freatische stand

Voor de bouw is de grondwaterstand essentieel: heipalen van *hout* moeten ondergedompeld blijven (anders rotten ze), kelders moeten waterdicht zijn, en bemaling tijdens de bouw is meestal nodig.
      `.trim(),
      diagrams: [{ type: 'grondsoorten' }],
      images: [
        {
          src: `${FIG}/bovenwater.jpg`,
          caption: 'Bovenwater — water dat op een slecht waterdoorlatende laag staat, boven de freatische grondwaterstand.',
          source: SRC_GW,
          width: 'md',
        },
        {
          src: `${FIG}/spanningswater.jpg`,
          caption: 'Spanningswater — onder een afsluitende kleilaag ingesloten en onder druk.',
          source: SRC_GW,
          width: 'md',
        },
      ],
    },

    {
      heading: '2 · Grondonderzoek: sondering en boorstaat',
      toetstermCodes: ['B.4.3', 'B.4.11', 'B.4.12'],
      body: `
Voordat er gebouwd wordt, moet bekend zijn hoe sterk en waaruit de bodem op die plek bestaat. Twee veelgebruikte methoden:

**Sondering** (CPT = Cone Penetration Test):
- Een stalen meetconus wordt met grote kracht in de grond geduwd
- Tijdens het wegzetten meet de apparatuur **conusweerstand** (Mpa) en **wrijvingsweerstand**
- Resultaat: een **sondeerdiagram** waarop de weerstand tegen de diepte wordt uitgezet
- Hieruit volgt op welke diepte de zandlaag begint en hoe stevig die is — bepaalt de **palenlengte**
- Een **mantelconus** is de standaard meetkop

**Boring**:
- Met een **puls** of een **boorkop** wordt grond uit de bodem omhoog gehaald
- De grondmonsters worden uitgespreid en visueel beoordeeld
- Resultaat: een **boorstaat** met arceringen voor de verschillende grondlagen op diepte
- Geeft een directer beeld van de samenstelling (klei/veen/zand) dan een sondering

Vaak worden ze **gecombineerd**: een paar sonderingen voor de stevigheidsmeting + één of twee boringen voor de lagenbeoordeling. Bij grote projecten wordt ook **grondmechanisch onderzoek** uitgevoerd: monsters in het lab beproeven op druksterkte, doorlatendheid en zetting.

Voor de makelaar: bij aankoop van bouwgrond of pand op slappe grond is een **funderingsonderzoek** verstandig — zie ook §6 verderop.
      `.trim(),
      images: [
        {
          src: `${FIG}/sondeergrafiek.jpg`,
          caption: 'Sondeerdiagram — conusweerstand tegen diepte; de scherpe stijging onderaan markeert de draagkrachtige zandlaag.',
          source: SRC_GW,
          width: 'md',
        },
        {
          src: `${FIG}/mantelconus.jpg`,
          caption: 'Mantelconus — de standaard meetkop voor sonderingen.',
          source: SRC_GW,
          width: 'md',
        },
        {
          src: `${FIG}/pulsboring.jpg`,
          caption: 'Pulsboring — een puls valt in de voerbuis en haalt grond omhoog.',
          source: SRC_GW,
          width: 'md',
        },
        {
          src: `${FIG}/boorstaat.jpg`,
          caption: 'Boorstaat met arceringen voor de verschillende grondlagen op diepte.',
          source: SRC_GW,
          width: 'md',
        },
      ],
    },

    {
      heading: '3 · Fundering op staal: stroken, poeren en plaat',
      toetstermCodes: ['B.4.2', 'B.4.4'],
      body: `
**Fundering op staal** = direct op de bodem funderen, zonder heipalen. "Op staal" verwijst hier níet naar het materiaal staal, maar is een oude uitdrukking voor "direct op de ondergrond". Geschikt bij draagkrachtige zandgrond.

Drie hoofdtypen:

- **Funderingsstroken** — doorlopende stroken van gewapend beton (of metselwerk) onder elke dragende muur. Standaard bij grondgebonden woningen op zandgrond.
- **Poeren** — losse punten van gewapend beton onder individuele kolommen. Geschikt voor skeletbouw.
- **Plaatfundering** — één doorlopende betonplaat onder het hele gebouw. Past bij zwaardere belasting of bij iets minder draagkrachtige grond; verdeelt de belasting gelijkmatig.

Bij **paalfundering (onderheide constructies)** worden heipalen tot in de draagkrachtige zandlaag geslagen. De palen zijn met elkaar verbonden door **kespen** (balken bovenop de paalkoppen) waarop het muurwerk rust. Standaard in West-Nederland.

Funderingsdetails:
- *Aanlegdiepte*: minimaal 80 cm onder het maaiveld (vorstvrij)
- *Verstijvingsrib* of *funderingsbalk*: extra wapening om uitspreiden te voorkomen
- *Spouwmuur op fundering*: spouwankers en isolatie sluiten al bij de begane grond op de fundering aan
      `.trim(),
      images: [
        {
          src: `${FIG}/fundering-spouwmuur.jpg`,
          caption: 'Gemetselde fundering met spouwmuur (zonder moderne isolatie). Oudere variant uit het lesboek.',
          source: SRC_F,
          width: 'md',
        },
        {
          src: `${FIG}/fundering-beton.jpg`,
          caption: 'Fundering van gewapend beton met verstijvingsrib op zandondergrond — moderne strokenfundering.',
          source: SRC_F,
          width: 'md',
        },
      ],
    },

    {
      heading: '4 · Paalfundering en heisystemen',
      toetstermCodes: ['B.4.2', 'B.4.6'],
      body: `
Op slappe ondergrond reiken **heipalen** door de slappe lagen tot in het draagkrachtige zand. Belangrijke heisystemen:

- **Prefab betonpalen** — standaard in moderne nieuwbouw. Vooraf gemaakte vierkante betonpalen (vaak 220 × 220 mm of 290 × 290 mm) met wapeningsstaal, in lengten tot ~18 m. Geslagen met heistelling.
- **Houten heipalen** — historische standaard in oude binnensteden. Belangrijk: de palen moeten *altijd* onder de laagste grondwaterstand blijven, anders rotten ze. Twee Nederlandse hei-tradities:
  - **Amsterdamse methode**: één rij palen per draagmuur, met daarop een **kesp** (houten balk dwars over de palen) waarop het metselwerk rust
  - **Rotterdamse methode**: twee rijen palen per draagmuur, met dwars-kespen en een lange langslegger erop
- **Houten paal met betonopzetter** — overgangsvariant: een houten paal onder grondwaterstand + een betonopzetstuk daarboven naar het metselwerk
- **Heipaal met verzwaarde punt** — moderne variant met verdikte voet voor extra draagkracht op de zandlaag
- **Boor-/avegaarpalen** — *in-situ* gemaakt: een schroefboor maakt een gat in de grond, dat met beton en wapening wordt gevuld. Trillingsvrij — geschikt voor binnenstedelijk werk waar heien overlast geeft.
- **Stalen grondverdringende buispalen** — een stalen buis wordt in de grond gedrukt of geheid; grond wordt opzij gedrukt (geen grond uit het gat)
- **Stalen niet-grondverdringende segmentpalen** — geboorde stalen palen waarbij de grond wel verwijderd wordt; bestaan uit gekoppelde segmenten zodat lange palen mogelijk zijn

Voor de makelaar: het type paalfundering bepaalt het risicoprofiel. **Houten heipalen** uit de 19e/vroege-20e eeuw zijn kwetsbaar voor paalrot (zie §6).
      `.trim(),
      images: [
        {
          src: `${FIG}/amsterdamse-methode.jpg`,
          caption: 'Amsterdamse heimethode — één rij houten palen + kesp per draagmuur.',
          source: SRC_F,
          width: 'md',
        },
        {
          src: `${FIG}/rotterdamse-methode.jpg`,
          caption: 'Rotterdamse heimethode — twee rijen palen + langslegger per draagmuur.',
          source: SRC_F,
          width: 'md',
        },
        {
          src: `${FIG}/houten-paal.jpg`,
          caption: 'Houten heipaal met betonopzetter — onder grondwater hout, daarboven beton.',
          source: SRC_F,
          width: 'md',
        },
        {
          src: `${FIG}/heipaal-verzwaard.jpg`,
          caption: 'Moderne heipaal met verzwaarde punt voor extra draagkracht op de zandlaag.',
          source: SRC_F,
          width: 'md',
        },
        {
          src: `${FIG}/schroefboorpaal.jpg`,
          caption: 'Schroefboorpaal (avegaarpaal) — trillingsvrij gemaakte palen voor binnenstedelijk werk.',
          source: SRC_F,
          width: 'md',
        },
        {
          src: '/figs/tekeningen/fundering-staal-vs-paal.svg',
          caption:
            'Fundering op staal vs. paalfundering. Ligt de draagkrachtige zandlaag hoog, dan volstaat een ondiepe verbrede voet (op staal). Ligt er een slappe laag bovenop, dan dragen heipalen de last door tot het diepe zand.',
          source: 'Eigen tekening',
          width: 'full',
        },
      ],
    },

    {
      heading: '5 · Grondwerken: drainage, bemaling en damwanden',
      toetstermCodes: ['B.4.5'],
      body: `
Voordat er gefundeerd kan worden, moet de bouwput **droog en stabiel** zijn. Vier hoofdtechnieken:

**Drainage** — permanente afvoer van overtollig grondwater via geperforeerde drainagebuizen onder of naast het gebouw. Vooral bij kelders en gebouwen met laaggelegen vloeren.

**Bemaling** — tijdelijk verlagen van de grondwaterstand tijdens de bouw:
- *Open bemaling* — water laten weglopen vanuit de bouwput naar pompputten of greppels; geschikt voor goed doorlatende grond
- *Gesloten bemaling* (bronbemaling) — via verticale zuigbuizen (filters) wordt water weggepompt uit de grond rondom; standaard voor woningbouw in slappe grond
- *Spanningsbemaling* — verlaagt de druk van het spanningswater onder een afsluitende kleilaag; voorkomt dat de bouwput van onderaf "opbarst"

**Grondkeringen / damwanden** — verticale wanden die de bouwput stabiel houden en wegzakken voorkomen:
- *Tijdelijke damwand* — wordt na de bouw weer verwijderd; bv. trekplaten of stalen damwand
- *Stalen damwand* — U- of Z-vormige profielen die in elkaar haken via *sloten*; geheid of geperst; meest gebruikt
- *Houten damwand* — bij kleine projecten of in historische context
- *Berliner damwand* — stalen H-balken op afstand geplaatst, met daartussen houten of stalen platen; vaak terug te zien bij stedelijke bouwputten

Damwanden worden vaak ondersteund door **stempels** (horizontale balken) of *groutankers* om bezwijken te voorkomen.
      `.trim(),
      images: [
        {
          src: `${FIG}/bronbemaling.jpg`,
          caption: 'Bronbemaling — zuigbuizen verlagen het grondwaterpeil tijdelijk rond een bouwput.',
          source: SRC_GW,
          width: 'md',
        },
        {
          src: `${FIG}/damwandprofielen.jpg`,
          caption: 'U- en Z-vormige stalen damwandprofielen, met sloten als verbinding tussen de planken.',
          source: SRC_GW,
          width: 'md',
        },
      ],
    },

    {
      heading: '6 · Funderingsschade: signalen en oorzaken',
      toetstermCodes: ['B.4.8', 'B.4.9'],
      body: `
**Signalen die wijzen op funderingsproblemen** zijn voor de makelaar essentieel om te kunnen herkennen bij inspectie of taxatie:

- **Scheuren in gevels** — vooral diagonale of trapsgewijze scheuren die door stootvoegen lopen (zie B.3.3)
- **Schevigheid** — deuren en kozijnen die niet meer goed sluiten; vloeren waar een bal vanzelf wegrolt
- **Klemmende ramen of deuren** — gevolg van vervorming
- **Loslopende plinten** — vloer zakt weg ten opzichte van wand
- **Scheve voorgevel** — zichtbaar wanneer je vanaf de overkant van de straat kijkt
- **Vochtproblemen in kruipruimte** — bij houten paalfundering kan dat duiden op grondwaterdaling

**Oorzaken** verschillen per funderingstype:

**Bij houten paalfundering** (vooral pre-1925):
- *Paalrot* door **grondwaterdaling** — palen die boven het laagste grondwaterpeil komen, rotten in de zone met afwisselend nat en droog
- *Bacteriële aantasting van grenenhout* — onafhankelijk van de waterstand; vooral in delen van West-Nederland
- *Onvoldoende lengte van de palen* — palen die nooit tot in de zandlaag zijn geslagen (op klei of veen "afgesneden" — bekend probleem in oudere stadsdelen)

**Bij fundering op staal**:
- *Ongelijkmatige zetting* door verschillen in ondergrond of belasting
- *Uitspoeling* van grond onder de fundering door lekkende leidingen of ondergrondse waterstromen
- *Krimp van klei* bij langdurige droogte — kleilaag onder het pand droogt uit en krimpt
- *Verkeerde aanlegdiepte* — onvoldoende vorstvrij gelegen

**Bij betonnen palen**:
- *Materialefouten* of beschadiging tijdens het slaan (zeldzaam bij goed werk)
- *Negatieve kleef* — als de grond rondom een paal naar beneden zakt, "trekt" hij de paal mee en belast hem extra
      `.trim(),
    },

    {
      heading: '7 · Voorkomen en informatiebronnen',
      toetstermCodes: ['B.4.7', 'B.4.10'],
      body: `
**Maatregelen om funderingsproblematiek te voorkomen of beperken**:

- Bij nieuwbouw: voldoende grondonderzoek, juiste palenlengte en -aantal volgens sondering, geschikte techniek voor de locatie
- Bij bestaande houten paalfundering: **grondwaterstand handhaven** door drainage, infiltratievoorzieningen en samenwerking met waterschap
- Bij gevoelige zones: **monitoring** van scheuren en zakkingen — bouwkundig periodiek terugkomen
- Bij dreigende schade: **funderingsherstel** — zware ingreep waarbij nieuwe palen onder bestaande gebouwen worden geplaatst (kostbaar, ~ €60.000–€100.000+ per woning)
- Bij aankoop bestaande woning op slappe grond: **funderingsonderzoek** laten uitvoeren (~€2.500 voor een woning) om risico's vooraf te kennen

**Belangrijke informatiebronnen voor de makelaar**:

- **KCAF — Stichting Kennis Centrum Aanpak Funderingsproblematiek** (kcaf.nl): kennisbank, risicokaart per gemeente, advies aan eigenaren en verkopers
- **Dinoloket** (dinoloket.nl): TNO Geologische Dienst — bevat alle officiële sonderingen, boringen en grondmechanische gegevens van Nederland. Gratis raadpleegbaar
- **Funderingsloket / gemeente** — sommige gemeenten (Rotterdam, Zaanstad, Haarlem) hebben een eigen funderingsloket met lokale risicoanalyses
- **Funderingsrapport** — als er onderzoek is gedaan, vraag de eigenaar daarom; KCAF/F30-rapport is de standaard
- **Kadaster / archief** — historische bouwtekeningen kunnen iets zeggen over funderingstype

Voor de makelaar: bij verkoop van een pand in een risicogebied (oude steden, droge zomers, dijkligging) is het verstandig om proactief naar funderingsstatus te vragen. Een ondergehouden funderingsrisico kan na verkoop leiden tot aansprakelijkheid wegens *verborgen gebrek*.
      `.trim(),
    },

    {
      heading: '8 · Kruipruimte',
      toetstermCodes: ['B.4.13'],
      body: `
De **kruipruimte** is de ruimte onder de begane-grondvloer, tussen de bodem en de vloer. Bij gebouwen zonder kelder is er bijna altijd een kruipruimte; bij gebouwen met kelder vervalt deze.

**Functie**:
- **Ventilatie** van de bodem onder de woning — voorkomt dat vocht uit de grond in de vloer en in de woning komt
- **Plaats voor leidingen** — water, riolering, elektra, gas, ventilatiekanalen
- **Toegankelijkheid** voor onderhoud en inspectie
- **Vorstvrije zone** — beschermt de leidingen tegen bevriezen
- **Stabiliteit** — de vloer rust op funderingsstroken/balken die in de kruipruimte zichtbaar zijn

**Eisen aan een kruipruimte** (volgens Bbl + goede praktijk):

- **Vrije hoogte**: minimaal 0,50 m volgens Bbl, maar 0,70 m of meer is wenselijk voor inspectie/onderhoud
- **Ventilatie**: minimaal **4 cm² ventilatieopening per m² vloeroppervlak** — via kniestukken in de buitenmuur of ventilatiekokers; aan minimaal twee zijden voor dwarsventilatie
- **Vochtwering**: bodem afgedekt met folie, zand of geëxpandeerde kleikorrels om verdamping te beperken
- **Toegankelijkheid**: kruipluik in de woning of in een berging (≥ 0,60 m × 0,80 m)
- **Geen stilstaand water** — bij hoge grondwaterstand drainage of pompput
- **Isolatie**: tegenwoordig vaak isolatieplaten of -dekens aan de onderzijde van de vloer voor thermische isolatie van de woning

Veelvoorkomende **problemen** in kruipruimten:
- Onvoldoende ventilatie → vocht, schimmel, houtrot van balklagen
- Stilstaand grondwater door verstopte drainage
- Asbest-leidingen (oude woningen vóór 1994)
- Slechte toegankelijkheid bij dichtgemetselde of bekledende vloeren
      `.trim(),
    },

    {
      heading: '9 · Kelders',
      toetstermCodes: ['B.4.14'],
      body: `
Een **kelder** is een bouwlaag die geheel of gedeeltelijk onder maaiveld ligt. Toepassingen: berging, technische ruimte (cv, was-/droogruimte), parkeren, fietsenstalling, soms woonruimte (souterrain).

**Belangrijke begrippen rondom kelders**:

- **Koekoek** — verticale lichtschacht in de gevel naar een kelderraam; staat boven het maaiveld open en is meestal afgedekt met een traliewerk of glasplaat. Geeft daglicht en ventilatie aan kelderramen. Komt veel voor bij vooroorlogse panden.
- **Kim** — de onderkant van de buitenmuur waar de overgang ligt tussen de waterdichte kelderwand en het bovengrondse metselwerk. Hier moet een **waterkering** (DPC, kimstrook) liggen om opstijgend vocht te stoppen.
- **Waterafdichting** — alle maatregelen die de kelder droog houden:
  - *Bitumen of EPDM-folie* tegen de buitenkant van de kelderwand
  - *Cementgebonden waterdichte mortels* (Pudlo, waterglas) in de wand zelf
  - *Drainage* langs de kelderwand om grondwaterdruk te beperken
  - *Pompput met dompelpomp* als noodvoorziening tegen lekkage
  - *Kelderbak* — een doorlopende waterdichte betonconstructie die als een "bak" rond de kelder ligt (gewapend beton + waterdichte voegen)

**Bouw**: een moderne kelder is meestal van **gewapend beton**, ter plaatse gegoten of in prefab-elementen. Belangrijk:
- *Voldoende wapening* tegen waterdruk van buitenaf (een kelder kan letterlijk omhoog geduwd worden door grondwater — *opdrijvingsgevaar*)
- *Dilatatievoegen* met waterstoppen tegen scheurvorming
- *Goede aansluiting* op de bovengrondse constructie (kim, waterkering)

Risico's bij kelders:
- **Vochtproblemen** — meest voorkomend bij oude kelders zonder moderne afdichting
- **Onvoldoende ventilatie** → schimmel, muffe lucht
- **Te lage vrije hoogte** voor woongebruik (≥ 2,10 m bestaande bouw, ≥ 2,60 m nieuwbouw)
- **Toegankelijkheid** bij brand — vluchtweg vereist als verblijfsruimte
      `.trim(),
      images: [
        {
          src: `${FIG}/kelder-beton.jpg`,
          caption: 'Kelder van gewapend beton — moderne uitvoering met waterdichte betonbak.',
          source: SRC_F,
          width: 'md',
        },
      ],
    },
  ],

  toetstermen: [
    {
      code: 'B.4.1',
      text: 'Benoemt de in Nederland verschillende grondsoorten klei, veen en zand en de relatie tot het bouwen.',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'B.4.2',
      text: 'Legt de verschillende funderingswijzen uit (op staal gefundeerd zonder heipalen en onderheide constructies).',
      niveau: 'BT1',
      bloom: 'Begrip',
    },
    {
      code: 'B.4.3',
      text: 'Legt uit op welke wijze grondonderzoek plaatsvindt om een goede ondergrond voor de fundering vast te stellen.',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
    {
      code: 'B.4.4',
      text: 'Benoemt de wijzen van op staal funderen: stroken, poeren en plaatfundering.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
    {
      code: 'B.4.5',
      text: 'Benoemt de grondwerken met hun hoofdkenmerken: drainage, gesloten bemaling, open bemaling, spanningsbemaling en grondkeringen (tijdelijke-, stalen-, houten- en berliner damwanden).',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'B.4.6',
      text: 'Benoemt de heisystemen: prefab betonpalen, houten heipalen (Amsterdamse en Rotterdamse heimethode), boor-/avegaarpalen, stalen grondverdringende buispalen en stalen niet-grondverdringende segmentpalen.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
    {
      code: 'B.4.7',
      text: 'Benoemt de bronnen, zoals KCAF en Dinoloket, die moeten of kunnen worden geraadpleegd om informatie te krijgen over eventuele funderingsproblematiek of -schade.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
    {
      code: 'B.4.8',
      text: 'Herkent signalen die kunnen duiden op funderingsschade.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
    {
      code: 'B.4.9',
      text: 'Verklaart verschillende oorzaken van funderingsproblematiek voor verschillende funderingstypen.',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
    {
      code: 'B.4.10',
      text: 'Beschrijft maatregelen om funderingsproblematiek (verder) te voorkomen.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
    {
      code: 'B.4.11',
      text: 'Verklaart grondonderzoek.',
      niveau: 'BT2',
      bloom: 'Begrip',
      metDrawing: true,
    },
    {
      code: 'B.4.12',
      text: 'Beschrijft hoe een sonderingdiagram en een grondboringstaat tot stand komen.',
      niveau: 'BT2',
      bloom: 'Kennis',
      metDrawing: true,
    },
    {
      code: 'B.4.13',
      text: 'Legt de functie van en eisen aan een kruipruimte uit.',
      niveau: 'BT1',
      bloom: 'Begrip',
    },
    {
      code: 'B.4.14',
      text: 'Herkent de aan kelders verwante zaken: koekoek, kim en waterafdichtingssystemen.',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
  ],

  questions: [
    // B.4.1 — Grondsoorten
    {
      id: 'B.4.q1',
      toetstermCode: 'B.4.1',
      type: 'mc',
      prompt: 'Welke grondsoort is het meest draagkrachtig en wordt in Nederland gebruikt om heipalen op af te slaan?',
      options: ['Klei', 'Veen', 'Zand (Pleistoceen)', 'Bovenste cultuurlaag'],
      correctIndex: 2,
      explanation:
        'De diepe Pleistocene zandlaag is in heel Nederland de draagkrachtige laag waarop heipalen worden afgeslagen. Klei en veen zijn te slap.',
    },
    {
      id: 'B.4.q2',
      toetstermCode: 'B.4.1',
      type: 'mc',
      prompt: 'Waarom kun je in Oost-Nederland (zandgrond aan het oppervlak) vaak op staal funderen, en in West-Nederland niet?',
      options: [
        'In Oost-Nederland is de luchtvochtigheid lager.',
        'In Oost-Nederland ligt de draagkrachtige zandlaag aan of dicht onder het oppervlak; in West-Nederland zit boven het zand een dik pakket slappe klei en veen.',
        'In West-Nederland zijn de bouwwerken lichter en hebben ze minder fundering nodig.',
        'In Oost-Nederland is geen grondwater aanwezig.',
      ],
      correctIndex: 1,
      explanation:
        'In het oosten zit het draagkrachtige zand bovenaan, daar volstaat fundering op staal. In het westen ligt dat zand 12–20 m diep onder slappe lagen — heipalen tot in de zandlaag zijn dan nodig.',
    },
    {
      id: 'B.4.q3',
      toetstermCode: 'B.4.1',
      type: 'mc',
      prompt: 'Wat is "spanningswater"?',
      options: [
        'Water onder hoge druk in de waterleiding.',
        'Grondwater dat onder een afsluitende kleilaag is ingesloten en onder druk staat.',
        'Het bovenste laagje grondwater in de kruipruimte.',
        'Water dat via spanningen in de constructie de gevel binnentrekt.',
      ],
      correctIndex: 1,
      explanation:
        'Spanningswater zit onder een afsluitende laag (vaak klei) en staat onder druk. Bij graafwerk kan dit naar boven komen en de bouwput "opbarsten" — daarom soms spanningsbemaling nodig.',
    },

    // B.4.2 — Funderingswijzen
    {
      id: 'B.4.q4',
      toetstermCode: 'B.4.2',
      type: 'mc',
      prompt: 'Wat betekent het wanneer iemand zegt dat een woning "op staal" is gefundeerd?',
      options: [
        'De fundering is gemaakt van staal.',
        'De woning staat op stalen heipalen.',
        'De fundering rust direct op de ondergrond, zonder heipalen.',
        'De fundering is in een speciale staalwapeningstechniek uitgevoerd.',
      ],
      correctIndex: 2,
      explanation:
        '"Op staal" funderen is een oude bouwkundige uitdrukking voor "direct op de bodem rustend", zonder heipalen. Geschikt op draagkrachtige zandgrond.',
    },
    {
      id: 'B.4.q5',
      toetstermCode: 'B.4.2',
      type: 'mc',
      prompt:
        'Welke fundering past het beste bij een grondgebonden woning in West-Nederland op een dik kleipakket?',
      options: [
        'Fundering op staal met strokenfundering.',
        'Plaatfundering direct op de klei.',
        'Paalfundering met heipalen tot in de Pleistocene zandlaag.',
        'Geen fundering nodig — direct metselwerk op de bodem.',
      ],
      correctIndex: 2,
      explanation:
        'Bij slappe klei en veen wordt altijd op heipalen gefundeerd. De palen reiken tot in het draagkrachtige zand op 12–20 m diepte.',
    },

    // B.4.3 + B.4.11 — Grondonderzoek
    {
      id: 'B.4.q6',
      toetstermCode: 'B.4.3',
      type: 'mc',
      prompt: 'Welke twee meetmethoden vormen samen het standaard grondonderzoek vóór de bouw?',
      options: [
        'Boring + sondering',
        'Sondering + bouwfysische test',
        'Visuele inspectie + bodemkartering',
        'Bouwboor + kadastrale meting',
      ],
      correctIndex: 0,
      explanation:
        'Een boring geeft grondmonsters (visueel) → boorstaat. Een sondering meet weerstand (CPT) → sondeerdiagram. Samen geven ze samenstelling én sterkte van de ondergrond.',
    },
    {
      id: 'B.4.q7',
      toetstermCode: 'B.4.11',
      type: 'mc',
      prompt:
        'Waar wordt het sondeerdiagram in de praktijk voor gebruikt?',
      options: [
        'Om de WOZ-waarde van de grond te bepalen.',
        'Om vast te stellen op welke diepte de draagkrachtige zandlaag begint en hoe stevig die is — bepaalt de palenlengte.',
        'Om de grondprijs vast te leggen.',
        'Om de gemeentegrens op de tekening te tonen.',
      ],
      correctIndex: 1,
      explanation:
        'Het sondeerdiagram laat de conusweerstand zien tegen de diepte. De scherpe stijging in weerstand markeert het draagkrachtige zand — en daarmee de minimum palenlengte.',
    },

    // B.4.4 — Op staal funderen typen
    {
      id: 'B.4.q8',
      toetstermCode: 'B.4.4',
      type: 'mc',
      prompt: 'Welke drie hoofdvormen van fundering op staal bestaan er?',
      options: [
        'Stroken, poeren en plaatfundering',
        'Beton, staal en hout',
        'Diep, ondiep en pijler',
        'Compact, plat en gebouwbreed',
      ],
      correctIndex: 0,
      explanation:
        'De drie typen: stroken (doorlopend onder dragende muren), poeren (losse punten onder kolommen), plaat (één doorlopende vloer onder het hele gebouw).',
    },
    {
      id: 'B.4.q9',
      toetstermCode: 'B.4.4',
      type: 'mc',
      prompt:
        'Wanneer is een plaatfundering vaak de keuze in plaats van strokenfundering?',
      options: [
        'Bij gebouwen die geen muren hebben.',
        'Bij zwaardere belastingen of bij iets minder draagkrachtige grond, omdat de belasting gelijkmatig over een groter oppervlak wordt verdeeld.',
        'Alleen bij gebouwen met een kelder.',
        'Bij vakantiewoningen op zandgrond.',
      ],
      correctIndex: 1,
      explanation:
        'Een plaatfundering verdeelt de belasting over het hele oppervlak — geschikt bij zwaardere gebouwen of minder ideale ondergrond. Stroken volstaan bij lichtere belastingen op stevige grond.',
    },

    // B.4.5 — Grondwerken
    {
      id: 'B.4.q10',
      toetstermCode: 'B.4.5',
      type: 'mc',
      prompt: 'Wat is bronbemaling?',
      options: [
        'Het permanent afvoeren van grondwater via een drainagesysteem.',
        'Het tijdelijk verlagen van de grondwaterstand rond een bouwput via verticale zuigbuizen (filters).',
        'Het oppompen van regenwater uit een dakgoot.',
        'Het meten van het grondwaterpeil voor een bouwplan.',
      ],
      correctIndex: 1,
      explanation:
        'Bronbemaling = gesloten bemaling met zuigbuizen / filters die het grondwater rond de bouwput tijdelijk verlagen. Standaard bij woningbouw in slappe grond.',
    },
    {
      id: 'B.4.q11',
      toetstermCode: 'B.4.5',
      type: 'mc',
      prompt: 'Wat is een berliner damwand?',
      options: [
        'Een houten damwand met diagonale verstijvingen.',
        'Een tijdelijke damwand alleen geschikt voor zandgrond.',
        'Stalen H-balken op afstand geplaatst, met houten of stalen platen daartussen — vaak gebruikt in stedelijke bouwputten.',
        'Een ondergrondse betonwand voor parkeergarages.',
      ],
      correctIndex: 2,
      explanation:
        'Berliner damwand = stalen H-profielen vertikaal geplaatst, met daartussen platen. Veel gebruikt in stedelijke bouwputten vanwege snelle plaatsing en minder trillingsoverlast dan een doorlopende stalen damwand.',
    },
    {
      id: 'B.4.q12',
      toetstermCode: 'B.4.5',
      type: 'mc',
      prompt:
        'Waarom is "spanningsbemaling" soms nodig?',
      options: [
        'Om de gewone bouwbemaling extra kracht te geven.',
        'Om de druk van het spanningswater onder een afsluitende kleilaag te verlagen, zodat de bouwput niet van onderaf opbarst.',
        'Om de hoogte van de damwanden te bepalen.',
        'Om grondwater te zuiveren voordat het terug wordt gepompt.',
      ],
      correctIndex: 1,
      explanation:
        'Onder een ondoorlatende kleilaag kan water onder druk staan. Bij graafwerk in die kleilaag kan de bouwput door die druk opbarsten — spanningsbemaling verlaagt die druk tijdelijk.',
    },

    // B.4.6 — Heisystemen
    {
      id: 'B.4.q13',
      toetstermCode: 'B.4.6',
      type: 'mc',
      prompt: 'Wat is het kenmerkende verschil tussen de Amsterdamse en de Rotterdamse heimethode?',
      options: [
        'Amsterdamse methode gebruikt stalen palen, Rotterdamse houten.',
        'Amsterdamse methode = één rij palen per draagmuur; Rotterdamse methode = twee rijen palen per draagmuur.',
        'Amsterdamse methode is sneller; Rotterdamse zuiniger.',
        'Er is geen verschil, beide termen zijn synoniem.',
      ],
      correctIndex: 1,
      explanation:
        'Amsterdamse heimethode: één rij houten palen per draagmuur met dwarskesp. Rotterdamse heimethode: twee rijen palen per draagmuur met langslegger. Beide bij oudere panden te zien.',
    },
    {
      id: 'B.4.q14',
      toetstermCode: 'B.4.6',
      type: 'mc',
      prompt:
        'Welke paaltype past het beste in een dicht bebouwd binnenstedelijk gebied vanwege trillingsoverlast bij heien?',
      options: [
        'Prefab betonpaal (heien)',
        'Houten heipaal (heien)',
        'Boor-/avegaarpaal (in-situ gemaakt, trillingsvrij)',
        'Stalen buispaal (geheid)',
      ],
      correctIndex: 2,
      explanation:
        'Boor-/avegaarpalen worden in-situ gemaakt: een schroefboor maakt een gat, dat met beton en wapening wordt gevuld. Geen heien dus geen trillingsoverlast — geschikt in dicht bebouwde gebieden.',
    },
    {
      id: 'B.4.q15',
      toetstermCode: 'B.4.6',
      type: 'mc',
      prompt:
        'Wat is een "houten paal met betonopzetter"?',
      options: [
        'Een paal met aan de bovenkant een betonnen schoenpunt voor extra grip.',
        'Een paal die uit een houten ondergedeelte (onder grondwater) en een betonnen bovendeel bestaat — overgangsoplossing tussen volledig houten en volledig betonnen palen.',
        'Een betonpaal in een houten mantel.',
        'Een tijdelijke paal die later vervangen wordt door beton.',
      ],
      correctIndex: 1,
      explanation:
        'Onder het grondwater hout (rot niet) + boven het grondwater beton (rot ook niet). Klassieke overgang die je nog steeds tegenkomt bij oudere paalfunderingen.',
    },

    // B.4.7 — Bronnen
    {
      id: 'B.4.q16',
      toetstermCode: 'B.4.7',
      type: 'mc',
      prompt: 'Wat is KCAF?',
      options: [
        'Kadastrale Code Asbest-Funderingen — een register voor asbesthoudende funderingen.',
        'Kenniscentrum Aanpak Funderingsproblematiek — landelijk loket voor advies en informatie over funderingsproblemen.',
        'Kosten Calculatie Aanneemsom Fundering — rekenformat van bouwbedrijven.',
        'Klimaatadaptatie Centrum Funderingen — onderdeel van het waterschap.',
      ],
      correctIndex: 1,
      explanation:
        'KCAF (kcaf.nl) is hét nationale kenniscentrum voor funderingsproblemen. Biedt risicokaarten, advies aan eigenaren/verkopers en publicatiemateriaal.',
    },
    {
      id: 'B.4.q17',
      toetstermCode: 'B.4.7',
      type: 'mc',
      prompt:
        'Waarvoor raadpleeg je het Dinoloket?',
      options: [
        'Voor informatie over fossielen en dinosauruslijnen onder Nederland.',
        'Voor TNO-geologische data: alle officiële sonderingen, boringen en grondmechanische gegevens van Nederland.',
        'Voor de jaarlijkse staat van het Nederlandse grondwater.',
        'Voor het kadastrale register van eigendomspercelen.',
      ],
      correctIndex: 1,
      explanation:
        'Het Dinoloket (TNO Geologische Dienst Nederland) is een gratis raadpleegbare database met geofysische data, sonderingen, boringen en grondmechanische gegevens. Onmisbaar voor bouwkundig vooronderzoek.',
    },

    // B.4.8 — Signalen funderingsschade
    {
      id: 'B.4.q18',
      toetstermCode: 'B.4.8',
      type: 'mc',
      prompt:
        'Welk signaal duidt het meest waarschijnlijk op een funderingsprobleem in een Amsterdamse woning?',
      options: [
        'Vocht in de spouwmuur na hevige regen.',
        'Een schimmellaag op de noordmuur.',
        'Klemmende deuren, scheve vloeren en diagonale scheuren in de gevel — vaak in combinatie.',
        'Een lage U-waarde van het glas.',
      ],
      correctIndex: 2,
      explanation:
        'De combinatie van klemmende ramen/deuren, scheve vloeren en diagonale gevelscheuren is een klassiek signaal van ongelijke zetting — typisch bij funderingsproblemen.',
    },
    {
      id: 'B.4.q19',
      toetstermCode: 'B.4.8',
      type: 'mc',
      prompt:
        'Welk signaal in een kruipruimte kan duiden op problemen met houten paalfundering?',
      options: [
        'Spinnenwebben op de leidingen.',
        'Verschillen tussen droge en natte zones (afwisselend nat-droog), zichtbare rotting aan houten elementen, en/of een ongewoon lage grondwaterstand.',
        'Een licht muffe geur die ontstaat door normale ventilatie.',
        'Een stoffige kruipluikrand.',
      ],
      correctIndex: 1,
      explanation:
        'Houten heipalen moeten constant onder grondwater staan. Schommelende grondwaterstand (afwisselend nat/droog) is fataal: hier ontstaat paalrot. Zichtbare rot of een ongewoon lage waterstand in de kruipruimte is een rood vlaggetje.',
    },

    // B.4.9 — Oorzaken
    {
      id: 'B.4.q20',
      toetstermCode: 'B.4.9',
      type: 'mc',
      prompt: 'Wat is de hoofdoorzaak van paalrot bij houten heipalen?',
      options: [
        'Onvoldoende impregnering van het hout.',
        'Grondwaterdaling waardoor palen periodiek boven water komen — afwisselend nat en droog veroorzaakt rotting.',
        'Vochtindringing van bovenaf vanuit de bovenste cultuurlaag.',
        'Trillingen van vrachtverkeer.',
      ],
      correctIndex: 1,
      explanation:
        'Houten palen onder water rotten nauwelijks. Komen ze in de zone met afwisselend nat en droog (door dalende grondwaterstand), dan begint paalrot. Dít is dé oorzaak van vroeg-20e-eeuwse funderingsproblemen.',
    },
    {
      id: 'B.4.q21',
      toetstermCode: 'B.4.9',
      type: 'mc',
      prompt:
        'Welke oorzaak van funderingsproblemen geldt specifiek voor grenenhouten palen?',
      options: [
        'Vorstschade.',
        'Bacteriële aantasting — die onafhankelijk van de grondwaterstand kan optreden.',
        'Aantasting door zoutwater uit zee.',
        'Verbranding door blikseminslag.',
      ],
      correctIndex: 1,
      explanation:
        'Grenenhouten palen kunnen worden aangetast door specifieke bacteriën, ook al staan ze onder grondwater. Dit was lang onverklaard en is een serieus probleem geworden in delen van West-Nederland (o.a. Zaanstad).',
    },

    // B.4.10 — Maatregelen
    {
      id: 'B.4.q22',
      toetstermCode: 'B.4.10',
      type: 'mc',
      prompt:
        'Wat is een effectieve maatregel om bestaande houten paalfundering te beschermen tegen verdere paalrot?',
      options: [
        'De houten palen vervangen door betonopzetters.',
        'De grondwaterstand stabiel hooghouden via drainage, infiltratie en samenwerking met waterschap.',
        'Het pand 5 meter optillen.',
        'De gevel laten herstrijken met waterglas.',
      ],
      correctIndex: 1,
      explanation:
        'Houten palen onder water rotten niet. Het is essentieel de grondwaterstand stabiel te houden — door drainage, regenwaterinfiltratie en goede afspraken met het waterschap. Vervanging van palen is veel duurder.',
    },
    {
      id: 'B.4.q23',
      toetstermCode: 'B.4.10',
      type: 'mc',
      prompt:
        'Een klant overweegt aankoop van een woning uit 1910 in West-Nederland. Welk advies geef je over de fundering?',
      options: [
        'Niet nodig om iets te onderzoeken — dat doet de hypotheekverstrekker.',
        'Vraag het funderingsrapport op (of laat een KCAF/F30-onderzoek doen) om paalrot- en bacterierisico vooraf te kennen.',
        'Wacht tot je het eerste teken van scheuren ziet.',
        'Vraag de verkoper de palen handmatig na te kijken in de kruipruimte.',
      ],
      correctIndex: 1,
      explanation:
        'Voor een pand uit pre-1925 in West-Nederland is funderingsonderzoek essentieel. Een KCAF/F30-rapport (~€2.500) kost een fractie van potentiële herstelschade (€60K–€100K+).',
    },

    // B.4.12 — Sondeerdiagram en boorstaat
    {
      id: 'B.4.q24',
      toetstermCode: 'B.4.12',
      type: 'mc',
      prompt: 'Hoe komt een sondeerdiagram tot stand?',
      options: [
        'Door een gat te boren en daar visueel naar grondsoorten te kijken.',
        'Door een stalen meetconus met grote kracht de grond in te drukken en daarbij de weerstand tegen de diepte te meten.',
        'Door radarpulsen vanaf het maaiveld in de grond te sturen.',
        'Door grondmonsters in een laboratorium te beproeven.',
      ],
      correctIndex: 1,
      explanation:
        'Een sondering (CPT) drukt een stalen conus met constante snelheid de grond in. De weerstand (conus + wrijving) wordt continu gemeten en uitgezet tegen de diepte — dat is het sondeerdiagram.',
    },
    {
      id: 'B.4.q25',
      toetstermCode: 'B.4.12',
      type: 'mc',
      prompt: 'Wat staat er op een boorstaat?',
      options: [
        'De financiële afspraken tussen aannemer en boorbedrijf.',
        'Een grafische weergave per diepte van de aangetroffen grondlagen (met arceringen voor klei, veen, zand) — gebaseerd op visuele beoordeling van de bovengehaalde grondmonsters.',
        'De volledige sondeerwaarden over diepte uitgezet.',
        'De gemeentelijke grondbestemming op een perceel.',
      ],
      correctIndex: 1,
      explanation:
        'Boorstaat = visueel beoordeelde grondlagen met arceringen voor elke grondsoort. Wordt gebruikt naast het sondeerdiagram om zowel samenstelling als sterkte te kennen.',
    },

    // B.4.13 — Kruipruimte
    {
      id: 'B.4.q26',
      toetstermCode: 'B.4.13',
      type: 'mc',
      prompt: 'Wat is de minimum vrije hoogte van een kruipruimte volgens het Bbl?',
      options: ['0,30 m', '0,50 m', '1,00 m', '1,80 m'],
      correctIndex: 1,
      explanation:
        'De Bbl-minimum is 0,50 m. In de praktijk is 0,70 m of meer prettiger voor onderhoud en inspectie. Bij een hoge kruipruimte kan zelfs op handen en knieën gewerkt worden.',
    },
    {
      id: 'B.4.q27',
      toetstermCode: 'B.4.13',
      type: 'mc',
      prompt:
        'Welk percentage of welke regel geldt voor de ventilatie van een kruipruimte?',
      options: [
        'Geen specifieke eis — een dichte kruipruimte mag ook.',
        'Minimaal 4 cm² ventilatieopening per m² vloeroppervlak, bij voorkeur aan twee zijden voor dwarsventilatie.',
        '10% van het vloeroppervlak moet open zijn.',
        'Minimaal één rooster per m² vloeroppervlak.',
      ],
      correctIndex: 1,
      explanation:
        'Vuistregel: ≥ 4 cm² per m² vloer, aan meerdere zijden voor dwarsventilatie. Zonder voldoende ventilatie ontstaan vocht- en schimmelproblemen, en kan houtrot in balklagen ontstaan.',
    },

    // B.4.14 — Kelders: koekoek, kim, waterafdichting
    {
      id: 'B.4.q28',
      toetstermCode: 'B.4.14',
      type: 'mc',
      prompt: 'Wat is een koekoek bij een kelder?',
      options: [
        'Een speciaal type kelderpomp.',
        'Een verticale lichtschacht in de gevel die daglicht en ventilatie aan een kelderraam geeft.',
        'Een vergrendelingsmechanisme van de kelderdeur.',
        'De waterafdichting tussen kelder en bovengrondse muur.',
      ],
      correctIndex: 1,
      explanation:
        'Een koekoek is de buitenmuur-uitsparing voor een kelderraam onder maaiveld: een lichtschacht, vaak met traliewerk afgedekt. Veel te zien bij vooroorlogse panden.',
    },
    {
      id: 'B.4.q29',
      toetstermCode: 'B.4.14',
      type: 'mc',
      prompt: 'Wat is de "kim" van een kelder?',
      options: [
        'De vloer van de kelder.',
        'De waterkering op de overgang tussen waterdichte kelderwand en bovengronds metselwerk.',
        'De pomp tegen lekkages.',
        'De bovenste rand van de koekoek.',
      ],
      correctIndex: 1,
      explanation:
        'De kim is de overgangszone tussen onder- en bovengronds metselwerk. Hier zit een waterkering (DPC / kimstrook / bitumenlaag) om opstijgend vocht uit de keldermuur tegen te houden.',
    },
    {
      id: 'B.4.q30',
      toetstermCode: 'B.4.14',
      type: 'mc',
      prompt:
        'Welk waterafdichtingssysteem maakt een moderne kelder waterdicht tegen grondwater?',
      options: [
        'Alleen een dikke laag stucwerk aan de binnenkant.',
        'Bijvoorbeeld: bitumen of EPDM-folie tegen de buitenkant van de kelderwand, gewapend beton als kelderbak, en drainage om de wand om grondwaterdruk te beperken.',
        'Niets — moderne kelders zijn waterdicht door hun gewicht.',
        'Een houten beschot aan de binnenkant met kit afgedicht.',
      ],
      correctIndex: 1,
      explanation:
        'Een moderne waterdichte kelder is een combinatie: gewapend beton ("kelderbak") + folie of waterdichte mortel aan de buitenkant + drainage. Soms aangevuld met een pompput als noodvoorziening.',
    },
  ],

  terms: [
    {
      term: 'Zandgrond',
      definition:
        'Korrelige grond met goede draagkracht en doorlatendheid; vaak op strookfundering te bouwen.',
    },
    {
      term: 'Klei',
      definition:
        'Fijne, samendrukbare grond met lage draagkracht; krimpt bij uitdroging — risico op verzakking.',
    },
    {
      term: 'Veen',
      definition:
        'Organische, zeer slappe grondsoort (vooral westen NL); bouwen vrijwel altijd op paalfundering.',
    },
    {
      term: 'Draagkrachtige laag',
      definition:
        'Diepere zand- of grindlaag (in NL: pleistoceen zand) waarop paalfunderingen worden afgesteund.',
    },
    {
      term: 'Sondering',
      definition:
        'Grondonderzoek met een conus die door de grond wordt gedrukt; toont per diepte de draagkracht (qc-waarde).',
    },
    {
      term: 'Strookfundering',
      definition:
        'Doorlopende betonstrook onder dragende wanden, geschikt voor draagkrachtige zandgrond bij kleine bouwwerken.',
    },
    {
      term: 'Paalfundering',
      definition:
        'Palen die de last via wrijving of stuit doorgeven aan een diepere draagkrachtige laag — standaard in West-NL.',
    },
    {
      term: 'Heipaal',
      definition:
        'Geprefabriceerde betonpaal die de grond in wordt geslagen; krachtoverdracht door wrijving én stuit.',
    },
    {
      term: 'Schroefpaal',
      definition:
        'Paal die de grond in wordt gedraaid; trillingsarm en geluidsarm — geschikt voor binnenstedelijk werk.',
    },
    {
      term: 'Boorpaal',
      definition:
        'Paal die ter plaatse wordt geboord en gestort; geen heitrilling, lange palen mogelijk.',
    },
    {
      term: 'Funderings­balk',
      definition:
        'Gewapend-betonbalk die de bovenkant van palen verbindt en de wand- of vloer­belasting verdeelt.',
    },
    {
      term: 'Bemaling',
      definition:
        'Tijdelijk weghalen van grondwater tijdens bouw­put-aanleg via bronnen of vacuüm­pompen — vergunning­plichtig.',
    },
    {
      term: 'Kelder',
      definition:
        'Onder maaiveld gelegen ruimte; vergt waterdichte betonconstructie en bescherming tegen opdrijven.',
    },
    {
      term: 'Kruipruimte',
      definition:
        'Lage holle ruimte tussen begane-grondvloer en grond; vergt ventilatie­openingen en bij voorkeur bodemafsluiting.',
    },
  ],

  games: [
    {
      id: 'B4-gapfill-1', type: 'gapfill',
      title: 'Grondsoorten en fundering',
      text:
        'De draag­krachtige laag onder West-Nederland is meestal het {{Pleistoceen zand}}, vaak op 10–20 m diepte. ' +
        'Daarboven liggen {{klei}} en veen — slap en samendrukbaar. ' +
        'Bij goede grond direct onder bouwwerk kan worden gefundeerd {{op staal}} (strookfundering of poeren). ' +
        'In slappe grond worden {{palen}} geheid tot in de draag­krachtige laag.',
      distractors: ['zandkiezel', 'grind', 'op palen', 'op grond'],
    },
    {
      id: 'B4-sort-1', type: 'sort',
      title: 'Fundering — op staal of op palen?',
      categories: ['Op staal (direct op grond)', 'Op palen (heipalen)'],
      items: [
        { label: 'Strookfundering onder buitenmuur', category: 'Op staal (direct op grond)' },
        { label: 'Poer onder kolom op zandgrond', category: 'Op staal (direct op grond)' },
        { label: 'Plaatfundering (= grondplaat)', category: 'Op staal (direct op grond)' },
        { label: 'Geheide betonpaal in slappe klei', category: 'Op palen (heipalen)' },
        { label: 'Schroef-/boorpaal', category: 'Op palen (heipalen)' },
        { label: 'Houten paalfundering Amsterdamse grachtenpand', category: 'Op palen (heipalen)' },
      ],
    },
    {
      id: 'B4-sequence-1', type: 'sequence',
      title: 'Grondonderzoek + fundering aanleggen',
      items: [
        'Sondering: conus in de grond drukken — diepte draagkrachtige laag bepalen',
        'Funderings­advies door constructeur (op staal of palen)',
        'Grondwerk: ontgraven + bemaling',
        'Heien of strookfundering aanleggen',
        'Funderingsbalken + beganegrondvloer storten',
        'Opbouw bovenliggende constructie',
      ],
    },
    {
      id: 'B4-matching-1', type: 'matching',
      title: 'Koppel begrippen',
      pairs: [
        { left: 'Sondering', right: 'Conus in grond drukken voor draagkracht­meting' },
        { left: 'Boring', right: 'Grond ophalen voor laboratorium-analyse' },
        { left: 'Heipaal', right: 'Paal die in de grond wordt geheid' },
        { left: 'Bronbemaling', right: 'Grondwater wegpompen tijdens bouw' },
        { left: 'Damwand', right: 'Stalen of houten plank-wand voor grondkering' },
        { left: 'Softrot', right: 'Aantasting houten paal boven verlaagd grondwater' },
      ],
    },
  ],
}
