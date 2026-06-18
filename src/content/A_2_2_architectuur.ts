import type { Topic } from '../types/content'

const FIG = '/figs/A_2_2'
const SRC = 'Lesboek hfd. 32'

export const A_2_2_architectuur: Topic = {
  code: 'A.2.2',
  section: 'A',
  title: 'Architectuur en stedenbouw',
  chapterRef: 'Lesboek hoofdstuk 32',
  blurb:
    'Woningtypen volgens de Fotowijzer, bouwmethoden, Nederlandse architectuurstromingen van chaletstijl tot supermodernisme, stedenbouw (wederopbouw, VINEX, NOVI, NOVEX) en het bepalen van de bouwperiode aan materialen.',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · Woningtypen volgens de Fotowijzer',
      toetstermCodes: ['A.2.2.1'],
      body: `
De **NVM Fotowijzer Woningen** is dé standaard voor het classificeren van woningen in advertenties, taxaties en het Kadaster. De hoofdtypen:

- **Vrijstaande woning** — de woning staat helemaal vrij van buren; aan alle zijden een eigen muur. Vaak met tuin rondom.
- **Twee-onder-één-kapwoning** — twee woningen onder één doorlopend dak, met één gemeenschappelijke woningscheidende muur (akoestisch gescheiden).
- **Geschakelde woning** — verbonden met buren via een tussenelement zoals een garage, berging of carport (geen volledige woningscheidende muur).
- **Hoekwoning** — buitenste woning in een rij, met één buurmuur en één buitenmuur.
- **Tussenwoning** — woning binnen een rij met aan beide zijden een buurmuur.
- **Eengezinswoning** — verzamelnaam voor alle bovenstaande grondgebonden woningen.

**Gestapelde woonvormen**:

- **Galerijflat** — appartementen ontsloten via een buitengalerij langs de gevel.
- **Portiekflat** — appartementen ontsloten via een gemeenschappelijk trappenhuis (geen lift, of beperkt aantal verdiepingen).
- **Maisonnette** — appartement over twee verdiepingen.
- **Boven- / benedenwoning** — gesplitste woningen met afzonderlijke entree (vaak vooroorlogs).
- **Penthouse** — bovenste appartement, vaak ruim en met dakterras.

**Subtypen** voor specifieke woningen:

- **Herenhuis** — statig 19e-eeuws stadshuis, vaak meerdere verdiepingen
- **Grachtenpand** — typisch Amsterdams grachtenhuis
- **Doorzonwoning** — naoorlogse rijwoning met open zicht voor-naar-achter
- **Drive-inwoning** — woning met inpandige garage op de begane grond, woonkamer boven
- **Dijkwoning** — woning aan/op een dijk
- **Bungalow** — gelijkvloerse woning (één bouwlaag)
- **Patiowoning** — woning rondom een binnenplaats
      `.trim(),
      diagrams: [{ type: 'woningtypen' }],
    },

    {
      heading: '2 · Bouwmethoden',
      toetstermCodes: ['A.2.2.2'],
      body: `
Het kwalificatiedossier onderscheidt zes bouwmethoden:

- **Traditionele bouw** — ter plaatse gemetseld baksteen/kalkzandsteen, met houten of stalen kozijnen en houten of betonnen vloeren. Flexibel ontwerp; langzaam tempo; ambachtelijk werk. Geschikt voor kleine series of unieke gebouwen.
- **Stapelbouw** — verzamelnaam voor bouw met dragende muren waarop vloeren worden opgelegd. Traditionele baksteen- en kalkzandsteenbouw vallen hieronder. Onderscheidend: muren dragen, geen apart skelet.
- **Systeembouw** — geprefabriceerde, gestandaardiseerde elementen die op de bouwplaats worden samengevoegd. Snelheid en kostenefficiëntie staan voorop. Veel toegepast in seriebouw na 1945.
- **Gietbouw** — beton wordt ter plaatse in een bekisting gestort. Hele muren en vloeren in één werkgang. Geschikt voor repeterende constructies (woningblokken, garages, kelders).
- **Montagebouw** — variant van systeembouw waarbij grote prefab-elementen (gevels, vloeren) op de bouwplaats worden gemonteerd. Vooral bij beton, soms HSB (houtskeletbouw) of CLT (cross-laminated timber).
- **Skeletbouw** — een dragend skelet van beton, staal of hout. De buitengevel hoeft niet meer te dragen — vandaar de vrije plattegrondindeling en grote glasoppervlakken. Veel toegepast in kantoren en hoogbouw.

**Bouwmethode aflezen** doe je vooral aan de hand van de **constructietekening**, niet altijd direct op de gevel. Maar tekenen: een naoorlogse galerijflat = vrijwel altijd gietbouw of systeembouw; een vrijstaande villa = traditioneel stapelbouw; een kantoorgebouw = skeletbouw.
      `.trim(),
    },

    {
      heading: '3 · Bouwjaar en typische materialen',
      toetstermCodes: ['A.2.2.3'],
      body: `
Het bouwjaar verraadt veel over de gebruikte materialen — en die hebben weer voor- en nadelen die de makelaar moet kennen.

**Vóór 1900**:
- *Materialen*: kloostermoppen of grote ambachtelijke baksteen, kalkmortel, natuursteen, dakpannen (oude Hollandse pan), hardhout
- *Voordelen*: robuust, dikke muren, esthetisch karakter, vaak monumentaal
- *Nadelen*: meestal massieve buitenmuren zonder spouw → regendoorslag, geen isolatie; enkel glas; soms loden waterleidingen

**1900–1940** (Jugendstil, Amsterdamse School, vroege functionalisme):
- *Materialen*: machinaal gevormde baksteen, hardhouten kozijnen, vurenhouten balklagen, glas-in-lood, asbestcement vanaf ~1920
- *Voordelen*: betere maatvastheid baksteen, kwaliteitsmaterialen, vakwerk
- *Nadelen*: asbestrisico (gevels, daken, leidingen), enkelglas, fundering op houten palen kwetsbaar bij grondwaterdaling

**1945–1970** (Wederopbouw):
- *Materialen*: kalkzandsteen, beton (gietbouw en systeembouw), staal, asbestcement, eerste kunststoffen, betonpannen sinds 1956
- *Voordelen*: snelle, betaalbare nieuwbouw; sterke betonconstructies
- *Nadelen*: dunne ongeïsoleerde wanden, asbest, slechte detaillering, vaak doorgaande koudebruggen, kortgevels van slechte kwaliteit

**1970–1990**:
- *Materialen*: spouwmuur standaard met isolatie, dubbelglas (vanaf ~1980), kunststof kozijnen, polyurethaanschuim, PVC-leidingen
- *Voordelen*: thermische isolatie verbetert, lagere stookkosten
- *Nadelen*: spouwankerproblemen (corrosie), formaldehyde uit UF-spouwisolatie, soms slechte detaillering bij geveldoorbrekingen

**1990–nu**:
- *Materialen*: HR-glas en triple glas, hoge Rc-isolatie, gelamineerd hout (CLT), composieten, prefab betonelementen, gevelisolatiesystemen
- *Voordelen*: zeer energiezuinig, BENG-eisen, lange levensduur
- *Nadelen*: complexe installaties (warmtepomp, WTW), kwetsbaarheid voor verkeerd onderhoud, soms minder ambachtelijk aanzicht
      `.trim(),
    },

    {
      heading: '4 · Architectuurstromingen — overzicht op de tijdas',
      toetstermCodes: ['A.2.2.4'],
      body: `
Nederlandse architectuur kent een rijke serie stromingen die elkaar opvolgen én overlappen. De tijdlijn maakt zichtbaar dat bijvoorbeeld de Amsterdamse School (expressief, ambachtelijk) en De Stijl (abstract, machinaal) **gelijktijdig** ontstonden — als reactie op elkaar.
      `.trim(),
      diagrams: [{ type: 'architectuurTijdlijn' }],
    },

    {
      heading: '5 · Vroege moderne stromingen (1870–1930)',
      toetstermCodes: ['A.2.2.4', 'A.2.2.5'],
      body: `
**Chaletstijl (1870–1900)** — geïnspireerd op Zwitserse berghutten. Kenmerken: **overstekende kappen**, **houtsnijwerk**, **houten veranda's, balkons en erkers**, combinaties met neorenaissance- en art nouveau-motieven, soms vakwerkgevels.

**Art nouveau / Jugendstil / Nieuwe Kunst (1890–1910)** — internationale beweging die brak met historische stijlen. Kenmerken: **gestileerde plant- en stengelmotieven**, **smeed- en gietijzer** in balkons en hekken, **glas-in-lood**, geglazuurde baksteen en tegels. In Nederland spottend "slaoliestijl" genoemd. Voorbeeld: Laan van Meerdervoort Den Haag.

**Amsterdamse School (1910–1930)** — verwant aan het expressionisme. Kenmerken: **fantastisch metselwerk** dat de constructie verhult, **verdiepte voegen** voor slagschaduw, **expressieve baksteendecoratie**, smeedijzeren raamroeden, kleine ruitjes. Beroemd: Spaarndammerbuurt Amsterdam (Michel de Klerk).

**Haagse School** — strakker en zakelijker variant op de Amsterdamse School. Vaak in Den Haag (W.M. Dudok was hier nauw verwant aan).

**Art deco (1915–1935)** — strakke, eenvoudige vormgeving met **felle kleuren**. Geïntegreerd interieur–exterieur. Beroemd: Tuschinski Amsterdam (1921).
      `.trim(),
      images: [
        {
          src: `${FIG}/chaletstijl.jpg`,
          caption: 'Chaletstijl-woning met overstekende kap en houten erker.',
          source: SRC,
          width: 'md',
        },
        {
          src: `${FIG}/jugendstil.jpg`,
          caption: 'Jugendstil aan de Laan van Meerdervoort Den Haag — gestileerde motieven in smeedijzer en glas.',
          source: SRC,
          width: 'md',
        },
        {
          src: `${FIG}/amsterdamse-school.jpg`,
          caption: 'Spaarndammerbuurt Amsterdam (Michel de Klerk, 1917–1921) — Amsterdamse School: expressief metselwerk en verdiepte voegen.',
          source: SRC,
          width: 'md',
        },
        {
          src: `${FIG}/art-deco.jpg`,
          caption: 'Watertoren Westeinderplassen (1927) — art deco met felle kleuren en strakke vormen.',
          source: SRC,
          width: 'md',
        },
      ],
    },

    {
      heading: '6 · Modernisme (1917–1970)',
      toetstermCodes: ['A.2.2.4', 'A.2.2.5'],
      body: `
**De Stijl (1917–1931)** — tijdschrift én beweging. Kenmerken: **primaire kleuren (rood, geel, blauw + zwart/wit)**, abstracte composities, doelmatigheid en eenvoud. Schilders Mondriaan en Van Doesburg, architect Rietveld. Het **Schröderhuis Utrecht (1924)** is hét manifest.

**Nieuwe Bouwen / Functionalisme / Nieuwe Zakelijkheid (1920–1960)** — internationaal modernisme via de **CIAM-congressen**. Principes: *form follows function*, lichte open skeletbouw, **geprefabriceerde materialen**, geen ornamenten, **transparante vlakken**. Beroemd: Van Nelle-fabriek Rotterdam (Brinkman & Van der Vlugt, 1926), Sanatorium Zonnestraal Hilversum (Duiker, 1928).

**Bauhaus (1919–1933)** — Duitse parallel van Het Nieuwe Bouwen. School in Weimar/Dessau onder Gropius. In Nederland beïnvloedde het architecten als Oud en Duiker.

**Delftse School (1925–1955)** — traditioneel-conservatieve tegenstroom van het functionalisme. Granpré Molière formuleerde regels voor verhouding en ritme. Kenmerken: **baksteen, natuursteen, hout**; staal en beton verborgen achter "eerlijke" materialen; bescheiden, niet-opvallende architectuur. Voorbeeld: Raadhuis Leidschendam (Kropholler, 1940).

**Bossche School (1945–1970)** — soberder variant, gebaseerd op getalsmatige verhoudingen. Dom Hans van der Laan (priester én architect). Ruwe materialen: hout, baksteen, beton.
      `.trim(),
      images: [
        {
          src: `${FIG}/de-stijl-schroderhuis.jpg`,
          caption: 'Schröderhuis Utrecht (Rietveld, 1924) — De Stijl in zijn zuiverste vorm: primaire kleuren en abstracte vlakken.',
          source: SRC,
          width: 'md',
        },
        {
          src: `${FIG}/functionalisme-vannelle.jpg`,
          caption: 'Van Nelle-fabriek Rotterdam (Brinkman & Van der Vlugt, 1926) — Het Nieuwe Bouwen: transparant, functioneel, prefab.',
          source: SRC,
          width: 'md',
        },
        {
          src: `${FIG}/functionalisme-zonnestraal.jpg`,
          caption: 'Sanatorium Zonnestraal Hilversum (Duiker, 1928) — functionalisme met maximale daglichttoetreding.',
          source: SRC,
          width: 'md',
        },
        {
          src: `${FIG}/delftse-school.jpg`,
          caption: 'Raadhuis Leidschendam (Kropholler, 1940) — Delftse School: baksteen, traditioneel, bescheiden.',
          source: SRC,
          width: 'md',
        },
      ],
    },

    {
      heading: '7 · Late modern en hedendaagse stromingen (1955–heden)',
      toetstermCodes: ['A.2.2.4', 'A.2.2.5'],
      body: `
**Structuralisme (1959–1990)** — geordende, herbergzame bouwblokken die uitbreidbaar zijn. Filosofie: het gebouw als "stad in het klein", met ontmoetingsplaatsen en meervoudig gebruik. Aldo van Eyck (Burgerweeshuis Amsterdam, 1960), Herman Hertzberger (Centraal Beheer Apeldoorn, 1972), Piet Blom (paalwoningen Rotterdam, 1982).

**Postmodernisme (1970–1995)** — hoogbouw met **verwijzingen naar oudere classicistische bouwstijlen**. Speels, soms gedurfd. Voorbeeld: bibliotheek Heerlen (Coenen & Mertens, 1986).

**Neorationalisme (1970–1990)** — geometrische vormen, objectief programma. Voorbeeld: De Zwarte Madonna Den Haag (Carl Weeber, 1985, inmiddels gesloopt).

**Organische / Antroposofische architectuur (1980–2000)** — vanuit de antroposofie van Rudolf Steiner. **Natuurlijke vormen** (geen rechte hoeken), natuurlijke materialen, menselijke maat. Voorbeeld: Gasuniegebouw Groningen (Alberts en Van Huut, 1994).

**Hightech (1980–2000)** — moderne technieken in beeld brengen. **Zichtbare leidingen en constructie**, lichte materialen, ruime overspanningen. Internationaal: Centre Pompidou Parijs. In Nederland: hoofdkantoor Oculenti Hoofddorp, Erasmusbrug Rotterdam.

**Deconstructivisme (1988–2010)** — verwarring en spanning tot uiting brengen; functie bepaalt sfeer. Voorbeeld: Groninger Museum (Mendini, 1994).

**Supermodernisme / Neomodernisme (1995–heden)** — diversiteit, soms uitdagend, soms futuristisch. Hoogbouw met gestapelde functies (Amsterdam, Rotterdam, Den Haag). **Rem Koolhaas / OMA** — confrontatie boven rust (De Rotterdam, 2013). Erasmusbrug (Ben van Berkel, 1996) hoort hier ook bij.
      `.trim(),
      images: [
        {
          src: `${FIG}/structuralisme-burgerweeshuis.jpg`,
          caption: 'Burgerweeshuis Amsterdam (Aldo van Eyck, 1955–1960) — structuralisme: herbergzame schaal en herhalende eenheden.',
          source: SRC,
          width: 'md',
        },
        {
          src: `${FIG}/structuralisme-paalwoningen.jpg`,
          caption: 'Paalwoningen Rotterdam (Piet Blom, 1982–1984) — speelse variant van structuralisme.',
          source: SRC,
          width: 'md',
        },
        {
          src: `${FIG}/postmodernisme-bibliotheek-heerlen.jpg`,
          caption: 'Bibliotheek Heerlen (Coenen & Mertens, 1986) — postmodernisme met classicistische verwijzingen.',
          source: SRC,
          width: 'md',
        },
        {
          src: `${FIG}/hightech-oculenti.jpg`,
          caption: 'Hoofdkantoor Oculenti Hoofddorp (Thijs Asselbergs, 1985) — hightech architectuur.',
          source: SRC,
          width: 'md',
        },
        {
          src: `${FIG}/organisch-gasunie.jpg`,
          caption: 'Gasuniegebouw Groningen (Alberts en Van Huut, 1994) — organische / antroposofische architectuur.',
          source: SRC,
          width: 'md',
        },
        {
          src: `${FIG}/erasmusbrug.jpg`,
          caption: 'Erasmusbrug Rotterdam (Ben van Berkel, 1996) — supermodernisme als iconisch infrastructuurwerk.',
          source: SRC,
          width: 'md',
        },
      ],
    },

    {
      heading: '8 · Stedenbouwkundige ontwikkelingen',
      toetstermCodes: ['A.2.2.6'],
      body: `
**Wederopbouw (1945–1965)** — na de Tweede Wereldoorlog was er een enorme woningnood. Reactie: snelle systeembouw met repeterende blokken, **stempelplannen** (een 'stempel' herhaalde plattegrond per buurt), uniforme galerijflats. Veel kritiek op de schaal en eenvormigheid. Voorbeeld: Betondorp Amsterdam, Bomenwijk Delft, vele groeikernen rond grote steden.

**VINEX-wijken (1995–2005)** — *Vierde Nota Ruimtelijke Ordening Extra*. Beleid: stadsuitbreiding aan de rand van bestaande steden om de woningvraag op te vangen. Kenmerken: relatief hoge dichtheid voor suburbaan gebied, mix van rijwoningen en gestapelde bouw, fietsroutes, gemengde architectuur (vaak meerdere architecten per buurt). Voorbeelden: Leidsche Rijn (Utrecht), Ypenburg (Den Haag), IJburg (Amsterdam).

**NOVI — Nationale Omgevingsvisie (2020)** — overkoepelende visie van de Rijksoverheid op de leefomgeving tot 2050. Vier prioriteiten:
- Ruimte voor klimaatadaptatie en energietransitie
- Duurzaam economisch groeipotentieel
- Sterke en gezonde steden en regio's
- Toekomstbestendige ontwikkeling van het landelijk gebied

**NOVEX (2022)** — opvolger/uitvoeringsdocument van de NOVI met focus op **16 NOVEX-gebieden** waar Rijksoverheid, provincie en gemeenten samen aan complexe ruimtelijke opgaven werken (woningbouw, energietransitie, klimaatadaptatie, landbouwtransitie). Voorbeelden: Regio Utrecht, Groningen, MRA, Eindhoven.

Voor de makelaar: deze plannen bepalen wáár en hoeveel er gebouwd wordt — direct van invloed op marktdynamiek in de regio.
      `.trim(),
      images: [
        {
          src: `${FIG}/tuindorp-vreewijk.jpg`,
          caption: 'Tuindorp Vreewijk Rotterdam — vroeg voorbeeld van sociale woningbouw met "menselijke schaal", contrast met de latere wederopbouw-blokken.',
          source: SRC,
          width: 'md',
        },
        {
          src: `${FIG}/wederopbouw-betondorp.jpg`,
          caption: 'Betondorp Amsterdam — wederopbouw-systeembouw met betonnen muren en vloeren.',
          source: SRC,
          width: 'md',
        },
      ],
    },

    {
      heading: '9 · Bouwperiode bepalen aan materialen en bouwwijzen',
      toetstermCodes: ['A.2.2.7'],
      body: `
Een makelaar moet aan de gevel kunnen aflezen uit welke periode een woning ongeveer komt. Combineer de volgende signalen:

**Aan de baksteen**:
- Grote stenen (≈ 285 × 135 × 85 mm = kloostermop) → vóór ~1700
- Klein, grof: IJsselformaat → oude binnenstad (17e–18e eeuw)
- Strakke, gladde strengperssteen → 1880–1930, vaak in jugendstil/art deco
- Handvormsteen met levendig oppervlak → kan oud of bewust nieuw zijn
- Wild verband → na 1960

**Aan het metselverband**:
- Kruisverband in een steensmuur → 15e eeuw t/m vroege 20e eeuw
- Halfsteensverband in een spouwblad → ná 1920 (toen spouwmuur standaard werd)
- Klezorenverband → typische 20e-eeuwse spouwmuur, vooral 1920–1960
- Wild/vrij verband → ná 1960

**Aan de dakpannen**:
- Oude Hollandse / verbeterde Hollandse pan → vóór 1850 of restauratie
- Tuile du Nord → vanaf 1882 in Nederland
- VH-pan → vanaf 1885; OVH-pan → vanaf 1927
- Romaanse pan → vanaf 1915; gotische pan → vanaf 1930
- Sneldekpan (beton) → vanaf 1956
- Stonewold-leipan → vanaf 1968
- Neromapan → vanaf 1974

**Aan de gevel als geheel**:
- Bouwstijl (zie tijdlijn): chaletstijl 1870–1900, Amsterdamse School 1910–1930, Het Nieuwe Bouwen 1920–1960, structuralisme 1960–1990
- Spouwmuur of niet (vóór 1920 vrijwel altijd massieve buitenmuur)
- Type kozijn: glas-in-lood → vóór 1930, schuifraam in T-vorm → 1850–1925, kunststof → na 1970
- Voegtype: knipvoeg → vanaf 19e eeuw, verdiepte voeg → Amsterdamse School en later

Door 2–3 van deze signalen te combineren, kun je een woning vaak op 10–20 jaar nauwkeurig dateren.
      `.trim(),
    },
  ],

  toetstermen: [
    {
      code: 'A.2.2.1',
      text: 'Benoemt de woningtypen en subtypen conform de Fotowijzer.',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'A.2.2.2',
      text: 'Benoemt de bouwmethoden traditionele bouw, stapelbouw, systeembouw, gietbouw, montagebouw en skeletbouw.',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'A.2.2.3',
      text: 'Herkent de verschillende bouwstijlen aan de hand van het bouwjaar en benoemt voor- en nadelen van de in deze periode toegepaste bouwmaterialen.',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
    {
      code: 'A.2.2.4',
      text: 'Benoemt en herkent de Nederlandse architectuurstromingen chaletstijl, art nouveau, Jugendstil, expressionisme (Amsterdamse en Haagse School, De Stijl, Het Nieuwe Bouwen (functionalisme en Nieuwe Zakelijkheid), Bauhaus, Delftse School, Structuralistische bouwstijl, organische en antroposofische en hightech architectuur.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
    {
      code: 'A.2.2.5',
      text: 'Benoemt de onderdelen en kenmerken (details) van de in A.2.2.4 genoemde architectuurstromingen.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
    {
      code: 'A.2.2.6',
      text: 'Legt de stedenbouwkundige ontwikkelingen wederopbouw, VINEX-wijken, NOVI en NOVEX uit.',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
    {
      code: 'A.2.2.7',
      text: 'Beargumenteert de bouwperiode aan de hand van het combineren van bouwmaterialen en bouwwijzen (dakpannen en metselverbanden).',
      niveau: 'BT2',
      bloom: 'Evalueren',
    },
  ],

  questions: [
    // A.2.2.1 — Woningtypen (BT1, Kennis)
    {
      id: 'A.2.2.q1',
      toetstermCode: 'A.2.2.1',
      type: 'mc',
      prompt: 'Wat is een twee-onder-één-kapwoning?',
      options: [
        'Een woning met twee dakkapellen',
        'Twee woningen onder één dak met een gedeelde muur',
        'Een vrijstaande woning met dubbele carport',
        'Een woning opgeleverd in twee fasen',
      ],
      correctIndex: 1,
      explanation:
        'Twee woningen, één dak, één gezamenlijke (akoestisch gescheiden) muur. Niet te verwarren met geschakelde woningen, die alleen verbonden zijn via een garage/berging zonder volledige woningscheidende muur.',
    },
    {
      id: 'A.2.2.q2',
      toetstermCode: 'A.2.2.1',
      type: 'mc',
      prompt:
        'Wat is het verschil tussen een hoekwoning en een tussenwoning?',
      options: [
        'De hoekwoning ligt op de verdieping, de tussenwoning beneden',
        'De hoekwoning heeft één zijgevel, de tussenwoning twee buurmuren',
        'De hoekwoning is altijd vrijstaand, de tussenwoning geschakeld',
        'Er is geen verschil — synoniemen',
      ],
      correctIndex: 1,
      explanation:
        'De hoekwoning is de buitenste van een rij en heeft één eigen zijgevel. De tussenwoning zit tussen twee buurwoningen in.',
    },
    {
      id: 'A.2.2.q3',
      toetstermCode: 'A.2.2.1',
      type: 'mc',
      prompt: 'Wat is een maisonnette?',
      options: [
        'Een vrijstaande villa op het platteland.',
        'Een appartement op één verdieping in een hoogbouwflat.',
        'Een appartement dat zich over twee verdiepingen uitstrekt — vaak met een eigen trap binnen het appartement.',
        'Een vakantiewoning in een park.',
      ],
      correctIndex: 2,
      explanation:
        'Maisonnette = "klein huis" in het Frans, in de woningmarkt gebruikt voor een tweelaags appartement. Geeft het wonen-op-niveau-gevoel binnen een gestapelde context.',
    },
    {
      id: 'A.2.2.q4',
      toetstermCode: 'A.2.2.1',
      type: 'mc',
      prompt:
        'Een woning die ontsloten wordt via een gemeenschappelijk trappenhuis zonder lift, met meestal 4 woningen per trappenhuis, heet:',
      options: ['Galerijflat', 'Maisonnette', 'Portiekflat', 'Bungalow'],
      correctIndex: 2,
      explanation:
        'Een portiekflat heeft een centraal trappenhuis (portiek) waaraan op elke verdieping enkele woningen liggen. Galerijflat: buitengaan langs de gevel; bungalow: gelijkvloers.',
    },

    // A.2.2.2 — Bouwmethoden (BT1, Kennis)
    {
      id: 'A.2.2.q5',
      toetstermCode: 'A.2.2.2',
      type: 'mc',
      prompt: 'Wat is het kenmerkende verschil tussen stapelbouw en skeletbouw?',
      options: [
        'Stapelbouw is altijd beton, skeletbouw altijd hout',
        'Bij stapelbouw dragen de muren, bij skeletbouw een apart skelet',
        'Stapelbouw alleen voor woningen, skeletbouw voor kantoren',
        'Skeletbouw heeft geen fundering nodig, stapelbouw wel',
      ],
      correctIndex: 1,
      explanation:
        'Bij stapelbouw zijn de muren constructief; bij skeletbouw nemen kolommen en balken de krachten op, waardoor de gevel "vrij" wordt — vandaar de typische glasvliesgevels in moderne kantoren.',
    },
    {
      id: 'A.2.2.q6',
      toetstermCode: 'A.2.2.2',
      type: 'mc',
      prompt: 'Wat is gietbouw?',
      options: [
        'Stenen die gegoten worden in plaats van geperst',
        'Beton ter plaatse in een bekisting storten',
        'Isolatie gieten tussen dragende muren',
        'Een synoniem voor systeembouw',
      ],
      correctIndex: 1,
      explanation:
        'Gietbouw: beton ter plaatse storten in een bekisting. Hele muren of vloeren komen zo in één werkgang tot stand. Veel toegepast in herhalende plattegronden (galerijflats, garages).',
    },
    {
      id: 'A.2.2.q7',
      toetstermCode: 'A.2.2.2',
      type: 'mc',
      prompt: 'Wat is een belangrijk voordeel van montagebouw met prefab-elementen?',
      options: [
        'Iedere woning kan volledig op maat',
        'Snelheid en planningszekerheid, weersongevoelig',
        'Lagere materiaalkosten dan traditioneel',
        'Het resultaat is altijd onderhoudsvrij',
      ],
      correctIndex: 1,
      explanation:
        'Montagebouw is snel en weersongevoelig — voordelig bij grote series gelijke woningen. Maatwerk is juist beperkt door de standaard-elementen.',
    },
    {
      id: 'A.2.2.q8',
      toetstermCode: 'A.2.2.2',
      type: 'mc',
      prompt:
        'Welke bouwmethode wordt vooral toegepast bij grote kantoren en hoogbouw met grote, open vloervlakken?',
      options: ['Traditionele stapelbouw', 'Gietbouw', 'Skeletbouw', 'Houtskeletbouw met dragende gevel'],
      correctIndex: 2,
      explanation:
        'Skeletbouw: dragend frame van staal of beton, vrije plattegrondindeling, grote vloervlakken zonder dragende binnenmuren — ideaal voor kantoor- en hoogbouw.',
    },

    // A.2.2.3 — Bouwjaar en materialen (BT2, Begrip)
    {
      id: 'A.2.2.q9',
      toetstermCode: 'A.2.2.3',
      type: 'mc',
      prompt:
        'Wat is een typisch nadeel van een buitenmuur van een woning gebouwd vóór 1920?',
      options: [
        'Er zit altijd asbest in de spouwisolatie',
        'Massieve muur zonder spouw: regendoorslag, geen isolatie',
        'De kozijnen zijn altijd van kunststof',
        'De fundering is altijd te ondiep',
      ],
      correctIndex: 1,
      explanation:
        'Vóór 1920 was de spouwmuur niet standaard. Buitenmuren waren massief — met als gevolg dat regendoorslag kon optreden bij zachte stenen en geen ruimte was voor isolatie. Pas later wordt buiten- of binnenisolatie achteraf toegevoegd.',
    },
    {
      id: 'A.2.2.q10',
      toetstermCode: 'A.2.2.3',
      type: 'mc',
      prompt:
        'Welke risico-stof komt vaak voor in woningen uit ongeveer 1945–1990 en moet bij verbouwing zorgvuldig worden geïnventariseerd?',
      options: ['Cellenbeton', 'Asbest', 'PVC', 'Gelijmd hout'],
      correctIndex: 1,
      explanation:
        'Asbestcementproducten (vlakke platen, golfplaten, leidingen, vensterbanken) zijn veel gebruikt tussen circa 1945 en 1993. Sinds 1994 verboden. Voor sloop/verbouwing is een asbestinventarisatie verplicht.',
    },
    {
      id: 'A.2.2.q11',
      toetstermCode: 'A.2.2.3',
      type: 'mc',
      prompt:
        'Wat is een typisch nadeel van een doorzonwoning uit de jaren \'60–\'70 op het gebied van isolatie?',
      options: [
        'De woning bevat altijd HR-glas',
        'Koudebruggen en vaak nog enkelglas',
        'Er is geen riolering aangelegd',
        'De fundering is niet berekend',
      ],
      correctIndex: 1,
      explanation:
        'Woningen uit die periode hebben vaak slechte detaillering (koudebruggen) en oorspronkelijk enkelglas. Spouwisolatie ontbrak meestal of werd later toegevoegd. Vandaar dat veel jaren-\'60-woningen nu na-isolatie en HR-glas krijgen.',
    },
    {
      id: 'A.2.2.q12',
      toetstermCode: 'A.2.2.3',
      type: 'multi',
      prompt:
        'Welke kenmerken verwacht je bij een nieuwbouwwoning uit 2010? Selecteer alle juiste.',
      options: [
        'HR++-glas',
        'Geïsoleerde spouwmuur (Rc ≥ 3,5)',
        'Hoogrendementsketel of warmtepomp',
        'Enkel glas',
        'Loden waterleidingen',
      ],
      correctIndices: [0, 1, 2],
      explanation:
        'Nieuwbouw vanaf 2006 voldoet aan EPC-eisen die HR++-glas, goede spouwisolatie en HR-ketels (of warmtepompen) afdwingen. Enkel glas en loden waterleidingen horen bij vooroorlogse bouw.',
    },

    // A.2.2.4 — Architectuurstromingen herkennen (BT2, Kennis)
    {
      id: 'A.2.2.q13',
      toetstermCode: 'A.2.2.4',
      type: 'mc',
      prompt:
        'Welke architectuurstroming kenmerkt zich door fantastisch en expressief metselwerk met verdiepte voegen, kleine ruitjes en smeedijzeren raamroeden — beroemd door de Spaarndammerbuurt?',
      options: ['De Stijl', 'Amsterdamse School', 'Delftse School', 'Functionalisme'],
      correctIndex: 1,
      explanation:
        'Amsterdamse School (1910–1930) staat synoniem voor expressief metselwerk en handambachtelijk detail. De Spaarndammerbuurt (Michel de Klerk) is het paradepaardje.',
      image: {
        src: `${FIG}/amsterdamse-school.jpg`,
        caption: 'Welke stroming herken je hier?',
        source: SRC,
        width: 'md',
      },
    },
    {
      id: 'A.2.2.q14',
      toetstermCode: 'A.2.2.4',
      type: 'mc',
      prompt:
        'Welke stroming verbindt primaire kleuren (rood, geel, blauw) met abstracte vlakcomposities en heeft het Schröderhuis in Utrecht (Rietveld, 1924) als bekendste voorbeeld?',
      options: ['Bauhaus', 'Amsterdamse School', 'De Stijl', 'Jugendstil'],
      correctIndex: 2,
      explanation:
        'De Stijl (1917–1931) — Mondriaan, Van Doesburg, Rietveld. Abstracte composities in primaire kleuren + zwart/wit/grijs. Het Schröderhuis is het manifest.',
      image: {
        src: `${FIG}/de-stijl-schroderhuis.jpg`,
        caption: 'Welke stroming herken je hier?',
        source: SRC,
        width: 'md',
      },
    },
    {
      id: 'A.2.2.q15',
      toetstermCode: 'A.2.2.4',
      type: 'mc',
      prompt:
        'Welke internationale stroming staat bekend om het principe "form follows function", lichte open skeletbouw en grote glasvliesgevels — met de Van Nelle-fabriek (1926) als Nederlands icoon?',
      options: ['Het Nieuwe Bouwen / Functionalisme', 'Postmodernisme', 'Delftse School', 'Chaletstijl'],
      correctIndex: 0,
      explanation:
        'Het Nieuwe Bouwen / Functionalisme is de Nederlandse tak van het modernisme via de CIAM-congressen. Van Nelle, Zonnestraal en de Kiefhoek zijn beroemde voorbeelden.',
    },
    {
      id: 'A.2.2.q16',
      toetstermCode: 'A.2.2.4',
      type: 'mc',
      prompt:
        'Welke stroming verzet zich juist tegen het Nieuwe Bouwen en kiest voor traditionele baksteen, hout en natuursteen, met regels van Granpré Molière?',
      options: ['Amsterdamse School', 'De Stijl', 'Delftse School', 'Structuralisme'],
      correctIndex: 2,
      explanation:
        'De Delftse School (1925–1955) was bewust conservatief: traditionele materialen, "eerlijke" baksteen, bescheiden monumentaliteit. Tegenpool van het functionalisme.',
    },
    {
      id: 'A.2.2.q17',
      toetstermCode: 'A.2.2.4',
      type: 'mc',
      prompt:
        'Welke stroming, geïnspireerd op antroposofie, zet bewust geen rechte hoeken in en gebruikt natuurlijke vormen en materialen — beroemd is het Gasuniegebouw in Groningen (Alberts en Van Huut, 1994)?',
      options: ['Hightech', 'Organische / antroposofische architectuur', 'Neorationalisme', 'Postmodernisme'],
      correctIndex: 1,
      explanation:
        'De organische / antroposofische architectuur (1980–2000) gaat uit van de leer van Rudolf Steiner. Vermijd rechte hoeken, integreer natuurlijke vormen en materialen.',
    },

    // A.2.2.5 — Onderdelen en kenmerken (BT2, Kennis)
    {
      id: 'A.2.2.q18',
      toetstermCode: 'A.2.2.5',
      type: 'mc',
      prompt:
        'Welk detail is typerend voor een chaletstijl-woning?',
      options: [
        'Verdiepte voegen en kleine raampjes met smeedijzeren roeden.',
        'Overstekende kappen met houtsnijwerk, houten balkons en veranda\'s.',
        'Asymmetrische compositie van primaire kleuren.',
        'Een vlies-/glasgevel zonder dragende functie.',
      ],
      correctIndex: 1,
      explanation:
        'Chaletstijl: overstekende kappen, houtsnijwerk, houten veranda\'s en balkons — geïnspireerd op Zwitserse berghutten. De andere antwoorden horen bij respectievelijk Amsterdamse School, De Stijl en functionalisme.',
    },
    {
      id: 'A.2.2.q19',
      toetstermCode: 'A.2.2.5',
      type: 'mc',
      prompt:
        'Welke gevelelementen zijn typerend voor de jugendstil / art nouveau?',
      options: [
        'Strakke wit gestucte muren zonder ornament.',
        'Gestileerde plant-, blad- en stengelmotieven in smeed- en gietijzer, glas-in-lood en geglazuurde baksteen.',
        'Doorlopende horizontale strookramen zonder roeden.',
        'Kale betonpilaren met zichtbare wapening.',
      ],
      correctIndex: 1,
      explanation:
        'Jugendstil heet niet voor niets "Nieuwe Kunst" — alles draait om gestileerde natuurmotieven, vooral in metaal en glas-in-lood. De andere antwoorden zijn modernistisch.',
    },
    {
      id: 'A.2.2.q20',
      toetstermCode: 'A.2.2.5',
      type: 'mc',
      prompt:
        'Welk detail kenmerkt de Amsterdamse School?',
      options: [
        'Symmetrische voorgevels in natuursteen.',
        'Verdiepte voegen die slagschaduw geven en expressief gevormde baksteen rond ramen en deuren.',
        'Een doorlopend lint van klassieke pilasters.',
        'Egale wit gestucte muren met grote glasvlakken.',
      ],
      correctIndex: 1,
      explanation:
        'De verdiepte voeg deed bij de Amsterdamse School zijn intrede en is dé manier om de baksteen zelf als kunstwerk te laten spreken — slagschaduwen geven de gevel diepte.',
    },
    {
      id: 'A.2.2.q21',
      toetstermCode: 'A.2.2.5',
      type: 'mc',
      prompt:
        'Welke kenmerken horen bij hightech architectuur?',
      options: [
        'Klassieke pilasters en frontons.',
        'Zichtbare leidingen en constructie, lichte materialen en grote overspanningen.',
        'Natuurlijke materialen en geen rechte hoeken.',
        'Schimmen van middeleeuwse motieven.',
      ],
      correctIndex: 1,
      explanation:
        'Hightech draait om het laten zien wat een gebouw "doet": leidingen, kanalen en constructie staan letterlijk buitenom of zijn binnen prominent zichtbaar. Centre Pompidou is het bekendste voorbeeld.',
    },
    {
      id: 'A.2.2.q22',
      toetstermCode: 'A.2.2.5',
      type: 'mc',
      prompt:
        'Wat is karakteristiek voor structuralistische gebouwen zoals Hertzbergers Centraal Beheer of Van Eycks Burgerweeshuis?',
      options: [
        'Eén grote symmetrische zaal, weinig onderverdeling.',
        'Geordende, herhalende bouweenheden met ontmoetingsruimten en mogelijkheid tot uitbreiding.',
        'Spiegelend glas in een doorlopende vliesgevel.',
        'Een dak in de vorm van een omgekeerde piramide.',
      ],
      correctIndex: 1,
      explanation:
        'Structuralisme: het gebouw als "stad in het klein", met repeterende eenheden, ontmoetingsplekken (rondom een atrium) en de mogelijkheid om uit te breiden.',
    },

    // A.2.2.6 — Stedenbouw (BT2, Begrip)
    {
      id: 'A.2.2.q23',
      toetstermCode: 'A.2.2.6',
      type: 'mc',
      prompt:
        'Wat is een kenmerk van de wederopbouwperiode (1945–1965) in de Nederlandse stedenbouw?',
      options: [
        'Kleinschalige boerderijen rond een dorpsplein',
        'Systeembouw met stempelplannen en serieflats',
        'Hoogbouw met futuristische vliesgevels',
        'Historiserende binnensteden in jugendstil',
      ],
      correctIndex: 1,
      explanation:
        'Wederopbouw = snelheid en aantallen boven kleinschaligheid. Stempelplannen (een herhalend stedenbouwkundig plan) en serieflats waren de standaardoplossing voor de naoorlogse woningnood.',
    },
    {
      id: 'A.2.2.q24',
      toetstermCode: 'A.2.2.6',
      type: 'mc',
      prompt: 'Wat zijn VINEX-wijken?',
      options: [
        'Sociale woningbouwblokken uit de jaren \'30',
        'Uitbreidingswijken aan de stadsrand vanaf ~1995',
        'Verkavelingsplannen voor agrarische grond',
        'Renovatieprojecten in vooroorlogse buurten',
      ],
      correctIndex: 1,
      explanation:
        'VINEX (Vierde Nota Ruimtelijke Ordening Extra) gaf in 1991 de aanzet tot grootschalige stadsuitbreidingen. Voorbeelden: Leidsche Rijn, Ypenburg, IJburg. Mix van architecten, hogere dichtheid dan klassieke suburbs.',
    },
    {
      id: 'A.2.2.q25',
      toetstermCode: 'A.2.2.6',
      type: 'mc',
      prompt: 'Waar staat NOVI voor?',
      options: [
        'Nationale Omgevingsverordening Implementatie',
        'Nationale Omgevingsvisie',
        'Nieuwe Onroerende Vastgoed-index',
        'Nederlandse Organisatie voor Verkoop en Investering',
      ],
      correctIndex: 1,
      explanation:
        'NOVI = Nationale Omgevingsvisie. Sinds 2020 het overkoepelende visiedocument van de Rijksoverheid voor klimaat, energie, ruimtelijke ordening en landelijk gebied tot 2050.',
    },
    {
      id: 'A.2.2.q26',
      toetstermCode: 'A.2.2.6',
      type: 'mc',
      prompt:
        'Wat is het belangrijkste verschil tussen NOVI en NOVEX?',
      options: [
        'NOVI is voor de stad, NOVEX voor het platteland',
        'NOVI is de visie, NOVEX de uitvoering met 16 gebieden',
        'NOVI ging in 2010 in, NOVEX in 2020',
        'NOVI gaat over woningbouw, NOVEX over energie',
      ],
      correctIndex: 1,
      explanation:
        'NOVI = visie op hoofdlijnen; NOVEX (2022) = de uitwerking met 16 prioriteitsgebieden waar Rijk, provincies en gemeenten samen aan complexe vraagstukken werken.',
    },

    // A.2.2.7 — Bouwperiode beargumenteren (BT2, Evalueren)
    {
      id: 'A.2.2.q27',
      toetstermCode: 'A.2.2.7',
      type: 'mc',
      prompt:
        'Je ziet een gevel met kruisverband in een steensmuur, Oude Hollandse pannen op een steile zadelkap en glas-in-loodramen. Welke bouwperiode is het meest waarschijnlijk?',
      options: [
        'Wederopbouw (1945–1965)',
        'Pre-1900 of vroege 20e eeuw',
        'VINEX-wijk (1995–2005)',
        'Nieuwbouw na 2010',
      ],
      correctIndex: 1,
      explanation:
        'Kruisverband + steensmuur + Oude Hollandse pan + glas-in-lood = vooroorlogs. Glas-in-lood verdween rond 1930; de combinatie wijst op grofweg 1880–1920.',
    },
    {
      id: 'A.2.2.q28',
      toetstermCode: 'A.2.2.7',
      type: 'mc',
      prompt:
        'Een gevel toont halfsteensverband, betonnen sneldekpannen op een zadeldak en houten kozijnen met dubbelglas zonder roeden. Welke bouwperiode past hier het beste?',
      options: [
        'Vóór 1900',
        'Tussen 1900 en 1940',
        'Tussen 1960 en 1985',
        'Na 2010',
      ],
      correctIndex: 2,
      explanation:
        'Sneldekpan (vanaf 1956) + halfsteensverband (vanaf ~1920 standaard in spouwbladen) + dubbelglas (vanaf jaren \'70/\'80) → meest waarschijnlijk een naoorlogse uitbreidingswijk uit de jaren \'60-\'80.',
    },
    {
      id: 'A.2.2.q29',
      toetstermCode: 'A.2.2.7',
      type: 'mc',
      prompt:
        'Een rijwoning heeft een wild verband in de buitenmuur, neromapannen op het dak en triple glas met kunststof kozijnen. Wat is de meest waarschijnlijke bouwperiode?',
      options: [
        '1900–1920',
        '1940–1960',
        '1975–1990',
        'Na 2010',
      ],
      correctIndex: 3,
      explanation:
        'Triple glas is pas vanaf ~2010 algemeen toegepast (BENG-eisen). Wild verband en neromapan zijn op zich ouder, maar de combinatie met triple glas plaatst het pand in de moderne tijd.',
    },
    {
      id: 'A.2.2.q30',
      toetstermCode: 'A.2.2.7',
      type: 'mc',
      prompt:
        'Bij de taxatie van een grachtenpand in Amsterdam zie je opvallend grote, ruwe bakstenen (kloostermoppen) in de gevel. Wat zegt dit over de bouwperiode?',
      options: [
        'Wederopbouw (1945–1965)',
        'Laat-middeleeuws/vroeg-modern, of gerestaureerd met oude stenen',
        'Na 2000 met historiserend metselwerk',
        'Jaren \'30 — kloostermoppen waren toen standaard',
      ],
      correctIndex: 1,
      explanation:
        'Kloostermoppen (~285 × 135 × 85 mm) waren middeleeuws standaardformaat. Een gevel met die stenen is óf laat-middeleeuws / vroeg-modern, óf later gerestaureerd met behoud van de originelen. Niet wederopbouw of recente nieuwbouw.',
    },
  ],

  terms: [
    {
      term: 'Vitruvius',
      definition:
        'Romeinse architect (1e eeuw v.Chr.) die de drie eisen aan goede architectuur formuleerde: firmitas, utilitas, venustas.',
    },
    {
      term: 'Firmitas',
      definition:
        'Vitruvius-eis: stevigheid — het gebouw moet constructief stabiel en duurzaam zijn.',
    },
    {
      term: 'Utilitas',
      definition:
        'Vitruvius-eis: nuttigheid — het gebouw moet bruikbaar en functioneel zijn voor het doel.',
    },
    {
      term: 'Venustas',
      definition:
        'Vitruvius-eis: schoonheid — het gebouw moet esthetisch verzorgd zijn.',
    },
    {
      term: 'Romaans',
      definition:
        'Vroeg-middeleeuwse stijl (±1000–1200) met dikke muren, kleine rondboog­vensters en zware proporties.',
    },
    {
      term: 'Gotiek',
      definition:
        'Late middeleeuwen (±1200–1500) met spitsbogen, kruisribgewelven en luchtbogen; hoge, lichte kerken.',
    },
    {
      term: 'Renaissance',
      definition:
        'Stijl van ±1500–1650 met symmetrie, klassieke ordes en zandsteen banden; in Nederland o.a. Amsterdamse School-trapgevels.',
    },
    {
      term: 'Jugendstil / Art Nouveau',
      definition:
        'Stijl rond 1900 met sierlijke organische ornamenten, krullen en plantmotieven.',
    },
    {
      term: 'Amsterdamse School',
      definition:
        'Nederlandse expressionistische stroming (1910–1930) met beeldhouwend metselwerk, ronde vormen en ambachtelijke baksteendetails.',
    },
    {
      term: 'De Stijl',
      definition:
        'Nederlandse modernistische beweging (Mondriaan, Rietveld) met primaire kleuren, rechte lijnen en abstracte composities.',
    },
    {
      term: 'Nieuwe Bouwen / Functionalisme',
      definition:
        'Strakke jaren-\'30-stijl met witte gevels, platte daken en stalen kozijnen — "vorm volgt functie".',
    },
    {
      term: 'Wederopbouw',
      definition:
        'Bouwperiode 1945–±1965 na de oorlog; sober, doelmatig, veel woningnood; standaardisatie en systeembouw.',
    },
    {
      term: 'Stedenbouwkundig plan',
      definition:
        'Ontwerp op wijkniveau dat verkaveling, wegen, groen en functies vastlegt — basis voor het omgevingsplan.',
    },
    {
      term: 'Verkaveling',
      definition:
        'De indeling van een gebied in afzonderlijke bouwkavels met rooilijnen, oriëntatie en kavelmaten.',
    },
    {
      term: 'Rooilijn',
      definition:
        'Denkbeeldige lijn waarachter een gebouw moet staan; bepaalt de voorgevelgrens ten opzichte van de weg.',
    },
    {
      term: 'Kloostermop',
      definition:
        'Middeleeuws baksteenformaat (±285 × 135 × 85 mm); herkenbaar aan zijn grote afmetingen in oude kerken en stadsmuren.',
    },
  ],

  games: [
    {
      id: 'A22-gapfill-1', type: 'gapfill',
      title: 'Architectuur­stromingen',
      text:
        'De Romeinse architect {{Vitruvius}} formuleerde de drie eisen: stevigheid (firmitas), nuttigheid (utilitas) en {{schoonheid}} (venustas). ' +
        'Een lange jaren-30 nieuwe-zakelijkheid woning herken je aan vlakke daken en {{stalen kozijnen}}. ' +
        'De {{Amsterdamse School}} (1910–1930) gebruikt expressieve baksteen-versieringen. ' +
        'Naoorlogse {{wederopbouw}} (1945–1965) kenmerkt zich door rechte gevels en standaardisatie.',
      distractors: ['Bauhaus', 'gotiek', 'classicisme', 'art deco'],
    },
    {
      id: 'A22-sort-1', type: 'sort',
      title: 'Plaats stromingen op tijdlijn',
      categories: ['Tot 1800', '1800–1900', '1900–1945', 'Na 1945'],
      items: [
        { label: 'Gotiek', category: 'Tot 1800' },
        { label: 'Renaissance', category: 'Tot 1800' },
        { label: 'Neogotiek', category: '1800–1900' },
        { label: 'Jugendstil / Art Nouveau', category: '1800–1900' },
        { label: 'Amsterdamse School', category: '1900–1945' },
        { label: 'Nieuwe Zakelijkheid', category: '1900–1945' },
        { label: 'Wederopbouw / Brutalisme', category: 'Na 1945' },
        { label: 'Postmodernisme', category: 'Na 1945' },
      ],
    },
    {
      id: 'A22-sequence-1', type: 'sequence',
      title: 'Architectuur­tijdlijn',
      items: [
        'Gotiek (1150–1500)',
        'Renaissance (1500–1650)',
        'Barok (1650–1750)',
        'Classicisme (1750–1850)',
        'Neostijlen (1850–1900)',
        'Amsterdamse School (1910–1930)',
        'Nieuwe Zakelijkheid (1925–1940)',
        'Wederopbouw (1945–1965)',
      ],
    },
    {
      id: 'A22-matching-1', type: 'matching',
      title: 'Koppel kenmerken aan stromingen',
      pairs: [
        { left: 'Spitsbogen + steunberen', right: 'Gotiek' },
        { left: 'Symmetrie + zuilen + halfronde bogen', right: 'Renaissance' },
        { left: 'Expressieve baksteen, krullen, smeed­ijzer', right: 'Amsterdamse School' },
        { left: 'Vlakke daken, stalen kozijnen, geen ornament', right: 'Nieuwe Zakelijkheid' },
        { left: 'Vitruvius', right: 'Firmitas, utilitas, venustas' },
        { left: 'Stedenbouw uitleg­wijken', right: 'Naoorlogse uitbreiding stad in groen' },
      ],
    },
  ],
}
