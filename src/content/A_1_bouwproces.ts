import type { Topic } from '../types/content'

const FIG = '/figs/A_1'
const SRC = 'Lesboek hfd. 2'

export const A_1_bouwproces: Topic = {
  code: 'A.1',
  section: 'A',
  title: 'Bouwproces en kostenbegroting',
  chapterRef: 'Lesboek hoofdstuk 2',
  blurb:
    'Wie zijn de bouwdeelnemers, in welke fases verloopt een bouwproces, en welke begrippen horen bij de bouwgrond? Plus de opbouw van een bouwkostenbegroting en de betalingsregelingen van de aanneemsom.',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · Bouwdeelnemers',
      toetstermCodes: ['A.1.1'],
      body: `
Bij ieder bouwproject zijn meerdere partijen betrokken. Voor de makelaar is het belangrijk om te weten **wie wat doet**, want bij vragen over de bouw of nazorg verwijs je naar de juiste partij.

- **Opdrachtgever** — neemt het initiatief en betaalt. Kan een particulier zijn, een belegger, een projectontwikkelaar, een woningcorporatie of de overheid.
- **Architect** — maakt het ontwerp, vertaalt de wensen van de opdrachtgever in tekeningen en het bestek.
- **Constructeur** — verzorgt de constructieve berekeningen (sterkte, stabiliteit, fundering, krachten).
- **Adviseurs** — gespecialiseerde deskundigen voor bouwfysica, installaties (W- en E-installaties), akoestiek, brandveiligheid, kostencalculatie, bodemonderzoek.
- **Aannemer (hoofdaannemer)** — verantwoordelijk voor de uitvoering; coördineert mensen, materiaal en planning.
- **Onderaannemer** — gespecialiseerde uitvoerende partij die in opdracht van de hoofdaannemer een deelwerk uitvoert (bv. stukadoor, elektricien, dakdekker).
- **Makelaar** — verkoopt of verhuurt het object, adviseert opdrachtgever en kopers, en signaleert kansen in de markt.
- **Gemeente / Bouw- en woningtoezicht** — verleent de omgevingsvergunning, controleert tijdens de bouw en handhaaft de regels uit het Besluit bouwwerken leefomgeving (Bbl).
      `.trim(),
      images: [
        {
          src: `${FIG}/bouwbord.jpg`,
          caption:
            'Bouwbord op de bouwplaats: zichtbaar welke partijen bij het project betrokken zijn.',
          source: SRC,
          width: 'md',
        },
      ],
    },

    {
      heading: '2 · Fases van het bouwproces',
      toetstermCodes: ['A.1.2'],
      body: `
Een bouwproject doorloopt in grote lijnen zes fases. In elke fase staan andere partijen aan het roer:

- **Initiatieffase** — idee + haalbaarheidsstudie. De opdrachtgever onderzoekt of het project technisch, financieel en juridisch haalbaar is. **Programma van eisen** (PvE) wordt opgesteld: hoeveel m², welke functies, budget, ambitie.
- **Ontwerpfase** — de architect werkt het PvE uit in schetsontwerp (SO), voorlopig ontwerp (VO), definitief ontwerp (DO) en uiteindelijk het **bestek** (technische omschrijving voor de aannemer). De constructeur en adviseurs leveren aan.
- **Voorbereidingsfase** — aanvraag omgevingsvergunning, aanbesteding (offertes opvragen, aannemer kiezen), contracten tekenen, planning maken.
- **Uitvoeringsfase** — daadwerkelijk bouwen. Een **balkenschema** (Gantt-chart) toont per activiteit de looptijd. Op de bouwplaats geldt een V&G-plan (veiligheid en gezondheid).
- **Opleveringsfase** — eindinspectie door opdrachtgever en aannemer. Eventuele gebreken worden op een **opleveringslijst** gezet en binnen een afgesproken termijn hersteld.
- **Exploitatie- of gebruiksfase** — de bewoner of gebruiker neemt het pand in gebruik; onderhoud en eventueel later renovatie of sloop.

De makelaar speelt vooral in de **initiatieffase** (advies bij marktanalyse en haalbaarheid) en in de **exploitatiefase** (verkoop, verhuur, beheer) een rol.
      `.trim(),
      diagrams: [{ type: 'bouwfasen' }],
      images: [
        {
          src: `${FIG}/balkenschema.jpg`,
          caption:
            'Balkenschema (Gantt) van een dubbel woonhuis: per activiteit de looptijd en de afhankelijkheden.',
          source: SRC,
          width: 'lg',
        },
      ],
    },

    {
      heading: '3 · Bouwgrond, bouwvlak en rooilijn',
      toetstermCodes: ['A.1.3'],
      body: `
Vóór je überhaupt kunt bouwen, moet het terrein **bouwrijp** zijn en moet de gemeente via het omgevingsplan toestaan dat er gebouwd wordt. De volgende begrippen komen op het examen terug:

- **Bouwterrein / bouwgrond** — grond waarop volgens het omgevingsplan gebouwd mag worden.
- **Bouwrijp maken** — het terrein gereedmaken: ophogen met zand, drainage en riolering aanleggen, nutsaansluitingen (gas, water, elektra, glasvezel) voorbereiden, eventueel slopen of bodem saneren.
- **Eigendomsgrens (perceelgrens)** — de juridische grens van het perceel, te vinden bij het Kadaster.
- **Bouwvlak** — het deel van het perceel binnen het omgevingsplan waar het hoofdgebouw mag staan. Aanbouwen en bijgebouwen kunnen onder voorwaarden buiten het bouwvlak in het achtererfgebied gerealiseerd worden.
- **Gevelrooilijn (voorgevelrooilijn)** — de denkbeeldige lijn waar de voorgevel op of achter moet staan; vaak gelijk aan de straatkant van het bouwvlak.
- **Achtergevelrooilijn** — de maximale achterzijde waar nog gebouwd mag worden.
- **Voor- en achtererfgebied** — het perceel buiten het bouwvlak wordt onderverdeeld; voor het achtererfgebied gelden soepelere regels voor vergunningsvrije aanbouwen.

Deze begrippen vind je terug op de **situatietekening** die bij elke bouwaanvraag hoort.
      `.trim(),
      diagrams: [{ type: 'perceel' }],
      images: [
        {
          src: `${FIG}/situatietekening.jpg`,
          caption:
            'Situatietekening met perceelgrenzen, gevelrooilijnen en hoofdgebouw — onderdeel van iedere bouwaanvraag.',
          source: SRC,
          width: 'lg',
        },
      ],
    },

    {
      heading: '4 · Bouwkostenbegroting',
      toetstermCodes: ['A.1.4'],
      body: `
De **aannemer** maakt een bouwkostenbegroting die uiteindelijk de **aanneemsom** bepaalt. De begroting is opgebouwd uit een aantal vaste posten:

- **Materiaal** — alle bouwmaterialen (stenen, beton, hout, kozijnen, dakpannen, isolatie, leidingen, enz.) inclusief inkoop en transport naar de bouwplaats.
- **Arbeid** — manuren van de eigen ploeg. Berekend per uur × aantal uren × loonkosten (inclusief sociale lasten).
- **Onderaanneming** — werkzaamheden die uitbesteed worden aan gespecialiseerde onderaannemers (installateur, dakdekker, stukadoor). De onderaannemer levert zelf zijn complete dienst inclusief materiaal.
- **Materieel** — gereedschap, machines, kranen, steigers, bouwliften, bouwkeet. Vaak gehuurd voor de duur van het project.
- **Staartkosten** — alle <em>indirecte</em> kosten van de aannemer: algemene kosten (kantoor, projectleiding, calculatie, verzekering, CAR-verzekering), winst en risico. Typisch een opslag van ongeveer 10–20% op de directe kosten.
- **Stelposten** — een vooraf vastgesteld geldbedrag voor onderdelen die nog niet definitief zijn uitgewerkt of gekozen, bijvoorbeeld de keuken of de sanitair. Bij definitieve keuze wordt het verschil verrekend.
- **Meer- en minderwerk** — wijzigingen ten opzichte van het bestek tijdens de uitvoering. Een extra dakkapel of duurder kozijn = meerwerk (extra kosten); het schrappen van bv. een binnendeur = minderwerk (lagere prijs).

Voor de makelaar relevant: een woning met veel stelposten en weinig **gespecificeerde** uitwerking kan tijdens de bouw fors duurder uitvallen.
      `.trim(),
    },

    {
      heading: '5 · Betalingsregelingen aanneemsom',
      toetstermCodes: ['A.1.5'],
      body: `
De aanneemsom wordt zelden ineens betaald. Bij nieuwbouw en grote verbouwingen gelden meestal **termijnbetalingen**: de aannemer factureert na voltooiing van een bouwfase.

Gangbare termijnstructuur bij nieuwbouw:

- **Bij aankoop grond** — soms een eerste betaling voor de grondkosten via de notaris (vooral bij koop-aanneemovereenkomst van projectontwikkelaar).
- **Bij start bouw / heistart** — eerste deelbetaling zodra de heipalen geslagen zijn.
- **Bij begane-grondvloer** — tweede termijn als de bg-vloer is gestort.
- **Bij verdiepingsvloeren / kapconstructie** — volgende termijn als de hoofdconstructie staat.
- **Bij dakdicht** — termijn zodra het dak waterdicht is.
- **Bij oplevering** — slottermijn, vaak met **5% inhouding** als garantiebedrag.

De **5%-regeling** (volgens artikel 7:768 BW): de opdrachtgever mag bij oplevering 5% van de aanneemsom inhouden en in depot zetten bij de notaris. Pas na drie maanden, als er geen verborgen gebreken naar voren komen, wordt dit bedrag vrijgegeven aan de aannemer. Bij een woning met **GIW-garantie** of **SWK-garantie** gelden vergelijkbare zekerheden.

Een **voorschot** (vooruitbetaling vóór er gewerkt is) is in Nederland niet gebruikelijk en is vaak juridisch onverstandig — pas betalen ná geleverd werk.
      `.trim(),
    },
  ],

  toetstermen: [
    {
      code: 'A.1.1',
      text: 'Benoemt de bouwdeelnemers opdrachtgever, architect, constructeur, adviseurs, aannemers/onderaannemers, makelaar, gemeente in een bouwproces.',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'A.1.2',
      text: 'Licht de verschillende fases, van initiatieffase tot exploitatiefase, van een bouwproces toe.',
      niveau: 'BT1',
      bloom: 'Begrip',
    },
    {
      code: 'A.1.3',
      text: 'Licht de begrippen bouwterrein/bouwgrond, en bouwrijp, eigendomsgrens, bouwvlak, rooilijn toe.',
      niveau: 'BT1',
      bloom: 'Begrip',
    },
    {
      code: 'A.1.4',
      text: 'Licht de onderdelen materiaal, arbeid, onderaanneming, materieel, staartkosten, stelposten en meer- en minderwerk van een bouwkostenbegroting toe.',
      niveau: 'BT2',
      bloom: 'Begrip',
      metDrawing: true,
    },
    {
      code: 'A.1.5',
      text: 'Benoemt de gebruikelijke betalingsregelingen van de aanneemsom.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
  ],

  questions: [
    // A.1.1 — Bouwdeelnemers (BT1, Kennis)
    {
      id: 'A.1.q1',
      toetstermCode: 'A.1.1',
      type: 'mc',
      prompt: 'Welke partij in het bouwproces is verantwoordelijk voor de constructieve berekeningen?',
      options: ['De architect', 'De constructeur', 'De hoofdaannemer', 'De opdrachtgever'],
      correctIndex: 1,
      explanation:
        'De constructeur berekent sterkte, stabiliteit, fundering en krachten. De architect maakt het ontwerp; de aannemer voert uit; de opdrachtgever neemt het initiatief en betaalt.',
    },
    {
      id: 'A.1.q2',
      toetstermCode: 'A.1.1',
      type: 'mc',
      prompt: 'Wie verleent de omgevingsvergunning en houdt toezicht tijdens de bouw?',
      options: ['De aannemer', 'De gemeente', 'De architect', 'Het Kadaster'],
      correctIndex: 1,
      explanation:
        'De gemeente (Bouw- en woningtoezicht) verleent de vergunning en handhaaft het Bbl. Het Kadaster registreert alleen eigendom en kadastrale grenzen; de architect ontwerpt; de aannemer bouwt.',
    },
    {
      id: 'A.1.q3',
      toetstermCode: 'A.1.1',
      type: 'mc',
      prompt:
        'Wie heeft het contract met de opdrachtgever en is eindverantwoordelijk voor het hele project?',
      options: [
        'De onderaannemer',
        'De hoofdaannemer',
        'De architect',
        'De projectontwikkelaar',
      ],
      correctIndex: 1,
      explanation:
        'De hoofdaannemer sluit het contract met de opdrachtgever en coördineert de onderaannemers (installateur, dakdekker, enz.) die deelwerken uitvoeren. De architect ontwerpt; een projectontwikkelaar is doorgaans juist de opdrachtgever.',
    },
    {
      id: 'A.1.q4',
      toetstermCode: 'A.1.1',
      type: 'mc',
      prompt: 'Wie stelt aan het begin van een project het programma van eisen (PvE) op?',
      options: ['De aannemer', 'De architect', 'De opdrachtgever', 'De gemeente'],
      correctIndex: 2,
      explanation:
        'Het PvE komt van de opdrachtgever en beschrijft wensen, budget en functies — eventueel met hulp van een adviseur. De architect vertaalt het PvE vervolgens naar een ontwerp.',
    },

    // A.1.2 — Bouwfases (BT1, Begrip)
    {
      id: 'A.1.q5',
      toetstermCode: 'A.1.2',
      type: 'mc',
      prompt: 'Wat is de juiste volgorde van fases in het bouwproces?',
      options: [
        'Initiatief → Ontwerp → Uitvoering → Voorbereiding → Oplevering → Exploitatie',
        'Initiatief → Ontwerp → Voorbereiding → Uitvoering → Oplevering → Exploitatie',
        'Ontwerp → Initiatief → Voorbereiding → Uitvoering → Exploitatie → Oplevering',
        'Initiatief → Voorbereiding → Ontwerp → Uitvoering → Oplevering → Exploitatie',
      ],
      correctIndex: 1,
      explanation:
        'Eerst idee + haalbaarheid (initiatief), dan ontwerp en bestek, daarna vergunning en aanbesteding (voorbereiding), bouwen (uitvoering), opleveren, en daarna in gebruik nemen (exploitatie).',
    },
    {
      id: 'A.1.q6',
      toetstermCode: 'A.1.2',
      type: 'mc',
      prompt: 'In welke fase wordt het bestek opgesteld?',
      options: [
        'Initiatieffase',
        'Ontwerpfase',
        'Uitvoeringsfase',
        'Opleveringsfase',
      ],
      correctIndex: 1,
      explanation:
        'Het bestek (de technische omschrijving voor de aannemer) wordt in de ontwerpfase opgesteld, na schetsontwerp en voorlopig ontwerp.',
    },
    {
      id: 'A.1.q7',
      toetstermCode: 'A.1.2',
      type: 'mc',
      prompt:
        'Wat gebeurt er in de exploitatiefase?',
      options: [
        'De laatste afwerking wordt afgerond',
        'Het ontwerp wordt aangepast op inspraak',
        'Het gebouw wordt gebruikt en onderhouden',
        'De omgevingsvergunning wordt aangevraagd',
      ],
      correctIndex: 2,
      explanation:
        'De exploitatiefase is de gebruiks-/beheersfase en loopt typisch decennia: gebruik, onderhoud en later eventueel renovatie of sloop. De makelaar is hier weer in beeld voor verkoop, verhuur en beheer.',
    },
    {
      id: 'A.1.q8',
      toetstermCode: 'A.1.2',
      type: 'mc',
      prompt:
        'Bij de oplevering van een nieuwbouwwoning blijken er nog kleine gebreken: krasjes en een klemmende deur. Wat is de standaardprocedure?',
      options: [
        'De koper laat ze op eigen kosten herstellen',
        'Ze komen op de opleveringslijst voor herstel',
        'De oplevering wordt afgewezen tot alles perfect is',
        'Herstel volgt pas na de garantieperiode',
      ],
      correctIndex: 1,
      explanation:
        'Opleveringsgebreken komen op een lijst (proces-verbaal van oplevering); de aannemer herstelt ze binnen een afgesproken termijn, vaak enkele weken. De koper mag het 5%-depot inhouden tot het herstel klaar is.',
    },

    // A.1.3 — Bouwgrond, bouwvlak, rooilijn (BT1, Begrip)
    {
      id: 'A.1.q9',
      toetstermCode: 'A.1.3',
      type: 'mc',
      prompt: 'Wat geeft de gevelrooilijn aan?',
      options: [
        'De grens van het kadastrale perceel',
        'De lijn waarop de voorgevel moet staan',
        'De achterste lijn van het bouwvlak',
        'De lijn waarop nutsleidingen lopen',
      ],
      correctIndex: 1,
      explanation:
        'De (voorgevel)rooilijn bepaalt waar de voorgevel mag staan en valt vaak samen met de straatkant van het bouwvlak. De perceelgrens is iets anders (Kadaster).',
    },
    {
      id: 'A.1.q10',
      toetstermCode: 'A.1.3',
      type: 'mc',
      prompt: 'Wat gebeurt er als een terrein "bouwrijp" wordt gemaakt?',
      options: [
        'Er wordt een omgevingsvergunning aangevraagd',
        'Het terrein wordt verkocht aan de opdrachtgever',
        'Het terrein wordt fysiek klaargemaakt voor bouw',
        'Er wordt een definitief ontwerp opgesteld',
      ],
      correctIndex: 2,
      explanation:
        'Bouwrijp maken is het fysiek gereedmaken: ophogen, drainage, riolering en nutsaansluitingen voorbereiden. Verwar het niet met "bouwgrond" — dat is de juridische toestemming om te bouwen.',
    },
    {
      id: 'A.1.q11',
      toetstermCode: 'A.1.3',
      type: 'mc',
      prompt: 'Wat geeft het bouwvlak aan?',
      options: [
        'De zone waar het hoofdgebouw mag staan',
        'De totale oppervlakte van het perceel',
        'De ruimte tussen rooilijn en openbare weg',
        'De zone alleen voor bijgebouwen',
      ],
      correctIndex: 0,
      explanation:
        'Het bouwvlak is de zone op het perceel waar het hoofdgebouw mag verrijzen, vastgelegd in het omgevingsplan. Aanbouwen en bijgebouwen mogen onder voorwaarden ook in het achtererfgebied, buiten het bouwvlak.',
    },
    {
      id: 'A.1.q12',
      toetstermCode: 'A.1.3',
      type: 'mc',
      prompt:
        'Een klant bekijkt een kavel waarvan het bouwvlak 2 meter van de straatkant begint. Wat betekent dat voor het hoofdgebouw?',
      options: [
        'Het moet exact op de erfgrens komen',
        'De voorgevel moet minstens 2 m terugliggen',
        'Het hele perceel mag bebouwd worden',
        'Het mag alleen achter op het perceel',
      ],
      correctIndex: 1,
      explanation:
        'Het bouwvlak begrenst waar het hoofdgebouw mag staan. Ligt het 2 m van de straatkant, dan mag de voorgevel niet dichterbij komen dan die rooilijn — er ontstaat dus een voortuin van minstens 2 m.',
    },

    // A.1.4 — Bouwkostenbegroting (BT2, Begrip)
    {
      id: 'A.1.q13',
      toetstermCode: 'A.1.4',
      type: 'mc',
      prompt: 'Wat vallen er onder de staartkosten in een bouwbegroting?',
      options: [
        'Het laatste betaaldeel bij oplevering',
        'Algemene kosten, winst en risico',
        'Sloop en afvoer van bouwafval',
        'Onvoorziene kosten op de slotfactuur',
      ],
      correctIndex: 1,
      explanation:
        'Staartkosten zijn de indirecte kosten van de aannemer: algemene kosten, projectleiding, winst en risico — vaak 10–20% van de directe kosten. Ze staan onderaan ("de staart") van de begroting, na materiaal, arbeid, materieel en onderaanneming.',
    },
    {
      id: 'A.1.q14',
      toetstermCode: 'A.1.4',
      type: 'mc',
      prompt: 'Wat is een stelpost in een bouwbegroting?',
      options: [
        'Een vast bedrag voor de fundering',
        'Een geschat bedrag, later verrekend',
        'De kosten van bouwbord en bouwhek',
        'Een korting bij snelle oplevering',
      ],
      correctIndex: 1,
      explanation:
        'Een stelpost is een geschat bedrag voor een onderdeel dat nog niet definitief gekozen is (keuken, sanitair, tegelwerk). Bij de definitieve keuze wordt het verschil tussen stelpost en werkelijke kosten met de opdrachtgever verrekend.',
    },
    {
      id: 'A.1.q15',
      toetstermCode: 'A.1.4',
      type: 'mc',
      prompt: 'Wat houdt meer- en minderwerk in?',
      options: [
        'De winst- en risico-opslag van de aannemer',
        'Wijzigingen op het bestek tijdens de bouw',
        'Het verschil tussen bouwsom en aanneemsom',
        'Aanvullend werk in de garantieperiode',
      ],
      correctIndex: 1,
      explanation:
        'Meerwerk is een extra opdracht tijdens de bouw (extra dakkapel, duurder kozijn), minderwerk is juist iets schrappen. Beide wijken af van het bestek en worden met de aanneemsom verrekend.',
    },
    {
      id: 'A.1.q16',
      toetstermCode: 'A.1.4',
      type: 'mc',
      prompt: 'Onder welke kostencategorie valt de huur van een bouwkraan, steiger en bouwlift?',
      options: ['Materiaal', 'Arbeid', 'Materieel', 'Onderaanneming'],
      correctIndex: 2,
      explanation:
        'Materieel = gereedschap en machines (kraan, steiger, lift, bouwkeet). Materiaal = wat in het werk verdwijnt (stenen, beton); arbeid = manuren; onderaanneming = uitbestede deelwerken.',
    },
    {
      id: 'A.1.q17',
      toetstermCode: 'A.1.4',
      type: 'mc',
      prompt:
        'Een klant krijgt een offerte met opvallend veel stelposten. Wat is daarvan de belangrijkste consequentie?',
      options: [
        'De aanneemsom is gegarandeerd lager',
        'Het werk mag niet starten zonder vergunning',
        'De einduitkomst is minder zeker',
        'Winst en risico zijn al inbegrepen',
      ],
      correctIndex: 2,
      explanation:
        'Veel stelposten betekent veel ruimte voor verrekening achteraf: de uiteindelijke prijs kan tijdens de bouw nog flink afwijken (duurder of goedkoper). Dat geeft de koper minder prijszekerheid vooraf.',
    },

    // A.1.5 — Betalingsregelingen (BT2, Kennis)
    {
      id: 'A.1.q18',
      toetstermCode: 'A.1.5',
      type: 'mc',
      prompt: 'Wat is bij nieuwbouw een gebruikelijke betalingsregeling van de aanneemsom?',
      options: [
        'Het volledige bedrag ineens, voorafgaand aan de bouw.',
        'Het volledige bedrag ineens, na oplevering.',
        'In termijnen per voltooide bouwfase.',
        'Maandelijkse vaste bedragen, ongeacht de voortgang.',
      ],
      correctIndex: 2,
      explanation:
        'Termijnen gekoppeld aan bouwfases is standaard. De aannemer factureert na voltooien van een fase; zo betaal je voor wat al gebouwd is.',
    },
    {
      id: 'A.1.q19',
      toetstermCode: 'A.1.5',
      type: 'mc',
      prompt: 'Wat houdt de 5%-regeling bij oplevering van nieuwbouw in?',
      options: [
        'De aannemer mag 5% extra voor onvoorzien rekenen',
        'De koper mag 5% in depot houden bij de notaris',
        'De gemeente int 5% van de aanneemsom als leges',
        'De makelaar krijgt 5% courtage op de aanneemsom',
      ],
      correctIndex: 1,
      explanation:
        'Volgens art. 7:768 BW mag de koper 5% van de aanneemsom in depot zetten bij de notaris, als zekerheid voor (verborgen) gebreken. Het wordt na drie maanden vrijgegeven aan de aannemer als er niets is opgedoken.',
    },
    {
      id: 'A.1.q20',
      toetstermCode: 'A.1.5',
      type: 'mc',
      prompt:
        'Een aannemer vraagt voor de start van de bouw een groot voorschot van 25% van de aanneemsom. Wat is de standaardadvisering hierop?',
      options: [
        'Akkoord — dit is in Nederland gebruikelijk',
        'Afraden — pas betalen na geleverd werk',
        'Alleen akkoord met een bankgarantie',
        'Akkoord, te verrekenen met de leges',
      ],
      correctIndex: 1,
      explanation:
        'Vooruitbetalen vóór er gewerkt is, is in Nederland ongebruikelijk en risicovol: zonder geleverd werk staat er niets tegenover je betaling (denk aan faillissement). Gebruikelijk is betalen in termijnen na voltooide bouwfases.',
    },

    // === HERHAALVRAGEN ===

    // A.1.1 — Bouwdeelnemers (extra)
    {
      id: 'A.1.q21',
      toetstermCode: 'A.1.1',
      type: 'mc',
      prompt:
        'Welke partij is doorgaans géén "bouwdeelnemer" in het kwalificatiedossier?',
      options: [
        'Adviseur installaties',
        'Constructeur',
        'Hypotheekadviseur',
        'Onderaannemer',
      ],
      correctIndex: 2,
      explanation:
        'De hypotheekadviseur speelt een rol bij de financiering van de opdrachtgever, maar niet in het bouwproces zelf. De andere drie zijn directe bouwdeelnemers volgens het dossier.',
    },
    {
      id: 'A.1.q22',
      toetstermCode: 'A.1.1',
      type: 'multi',
      prompt: 'In welke twee fases is de makelaar doorgaans het meest actief? Selecteer beide.',
      options: [
        'Initiatieffase',
        'Uitvoeringsfase',
        'Opleveringsfase',
        'Exploitatiefase',
      ],
      correctIndices: [0, 3],
      explanation:
        'De makelaar adviseert in de initiatieffase (marktanalyse, haalbaarheid) en is daarna vooral actief in de exploitatiefase voor verkoop, verhuur en beheer. Tijdens de uitvoering en oplevering is hij nauwelijks betrokken.',
    },

    // A.1.2 — Bouwfases (extra)
    {
      id: 'A.1.q23',
      toetstermCode: 'A.1.2',
      type: 'mc',
      prompt: 'In welke fase wordt de aanbesteding gedaan?',
      options: ['Initiatieffase', 'Ontwerpfase', 'Voorbereidingsfase', 'Uitvoeringsfase'],
      correctIndex: 2,
      explanation:
        'Aanbesteding (offertes opvragen en aannemer kiezen) gebeurt in de voorbereidingsfase, ná het ontwerp en vóór de uitvoering.',
    },
    {
      id: 'A.1.q24',
      toetstermCode: 'A.1.2',
      type: 'mc',
      prompt: 'Waar dient een V&G-plan voor?',
      options: [
        'Het vergelijken van offertes',
        'Veiligheid en gezondheid op de bouwplaats',
        'Verkoop en garantie voor de koper',
        'Verwerking en gebruik bij onderhoud',
      ],
      correctIndex: 1,
      explanation:
        'V&G staat voor Veiligheid en Gezondheid. Het plan is verplicht voor grotere projecten en geldt tijdens de uitvoeringsfase op de bouwplaats.',
    },

    // A.1.3 — Bouwgrond (extra)
    {
      id: 'A.1.q25',
      toetstermCode: 'A.1.3',
      type: 'mc',
      prompt:
        'Waarin verschilt het achtererfgebied van het voorerfgebied, voor een makelaar het meest relevant?',
      options: [
        'Het voorerf is voor parkeren, het achtererf voor tuin',
        'In het achtererf mag vaak vergunningsvrij worden bijgebouwd',
        'Het voorerf is van de gemeente, het achtererf van de eigenaar',
        'Het zijn twee gelijke helften van de tuin',
      ],
      correctIndex: 1,
      explanation:
        'Het voorerfgebied ligt tussen de voorgevelrooilijn en de straat; het achtererfgebied ligt achter (de denkbeeldige lijn door) het hoofdgebouw. Juist dáár gelden soepelere regels: aanbouwen en bijgebouwen zijn er vaak vergunningsvrij binnen bepaalde maten — belangrijk bij het inschatten van uitbreidingsmogelijkheden.',
    },
    {
      id: 'A.1.q26',
      toetstermCode: 'A.1.3',
      type: 'mc',
      prompt:
        'Waar zijn de officiële eigendomsgrenzen van een perceel geregistreerd?',
      options: [
        'Bij het Bouw- en woningtoezicht van de gemeente.',
        'In het omgevingsplan.',
        'Bij het Kadaster.',
        'In het bestek van het oorspronkelijke bouwplan.',
      ],
      correctIndex: 2,
      explanation:
        'Het Kadaster registreert kadastrale grenzen en eigendomsgegevens. Het omgevingsplan bepaalt wat je op het perceel mag doen, niet waar de grenzen liggen.',
    },

    // A.1.4 — Bouwkostenbegroting (extra)
    {
      id: 'A.1.q27',
      toetstermCode: 'A.1.4',
      type: 'multi',
      prompt: "Welke posten vallen onder 'materieel' in een bouwbegroting? Selecteer alle juiste.",
      options: [
        'Bouwkraan',
        'Steiger',
        'Manuren van de eigen ploeg',
        'Bouwlift',
        'Metselspecie',
      ],
      correctIndices: [0, 1, 3],
      explanation:
        'Materieel = gereedschap, machines en tijdelijke voorzieningen (kraan, steiger, bouwlift, bouwkeet) — meestal gehuurd. Manuren vallen onder arbeid; metselspecie onder materiaal (wat in het werk verdwijnt).',
    },
    {
      id: 'A.1.q28',
      toetstermCode: 'A.1.4',
      type: 'mc',
      prompt:
        'Hoe verschilt de post "onderaanneming" van de post "arbeid" in een begroting?',
      options: [
        'Onderaanneming is duurder per uur',
        'Onderaanneming is een complete uitbestede deelopdracht',
        'Onderaanneming valt eigenlijk onder materieel',
        'Onderaanneming geldt alleen voor de heistart',
      ],
      correctIndex: 1,
      explanation:
        'Een onderaannemer (dakdekker, installateur) levert een complete deelopdracht inclusief eigen materiaal én mensen. "Arbeid" in de begroting verwijst juist naar de manuren van de eigen ploeg van de hoofdaannemer.',
    },

    // A.1.5 — Betalingsregelingen (extra)
    {
      id: 'A.1.q29',
      toetstermCode: 'A.1.5',
      type: 'mc',
      prompt:
        'Welk moment is bij nieuwbouw een gangbaar betalingstermijn-ijkpunt?',
      options: [
        'Bij het ontwerp van de kozijnen.',
        'Bij het waterdicht worden van het dak.',
        'Bij de keuze van de keuken.',
        'Bij het opmaken van de definitieve omgevingsvergunning.',
      ],
      correctIndex: 1,
      explanation:
        'Dakdicht is een klassiek ijkmoment, net als heistart, begane-grondvloer en kapconstructie. De aannemer factureert per voltooide bouwfase.',
    },
    {
      id: 'A.1.q30',
      toetstermCode: 'A.1.5',
      type: 'mc',
      prompt: 'Wat is een GIW- of SWK-garantie?',
      options: [
        'Een bouwrisicoverzekering van de aannemer',
        'Een waarborgregeling voor de koper van nieuwbouw',
        'Een korting op de aanneemsom bij snel opleveren',
        'Een gemeentelijke heffing op nieuwbouw',
      ],
      correctIndex: 1,
      explanation:
        'GIW (oud) en SWK (huidig) zijn garantie- en waarborgregelingen die de koper extra zekerheid bieden: bij faillissement van de aannemer of verborgen gebreken springt een onafhankelijk instituut bij. Veel projectontwikkelaars werken hiermee.',
    },
  ],

  terms: [
    {
      term: 'Opdrachtgever',
      definition:
        'De partij (particulier, projectontwikkelaar, woningcorporatie of overheid) die opdracht geeft tot bouwen en het project financiert.',
    },
    {
      term: 'Architect',
      definition:
        'Ontwerper van het gebouw; bewaakt esthetiek, ruimtelijke kwaliteit en de samenhang van het hele ontwerp.',
    },
    {
      term: 'Constructeur',
      definition:
        'Adviseur die de dragende constructie berekent — sterkte, stijfheid en stabiliteit (Eurocode-toets).',
    },
    {
      term: 'Aannemer',
      definition:
        'Uitvoerende bouwpartij die het werk feitelijk realiseert; coördineert onderaannemers en levering van materialen.',
    },
    {
      term: 'Bouwfysisch adviseur',
      definition:
        'Specialist voor isolatie, geluid, vocht, ventilatie en daglicht — zorgt dat het gebouw voldoet aan EPC/BENG.',
    },
    {
      term: 'Kwaliteitsborger',
      definition:
        'Onafhankelijke toezichthouder onder de Wet kwaliteitsborging (Wkb, 2024); controleert of het werk aan het Bbl voldoet.',
    },
    {
      term: 'Omgevingsvergunning',
      definition:
        'Vergunning onder de Omgevingswet die alle aspecten (bouw, milieu, monument) bundelt; wordt verleend door de gemeente.',
    },
    {
      term: 'Bbl',
      definition:
        'Besluit bouwwerken leefomgeving — de technische bouwregels onder de Omgevingswet (opvolger van het Bouwbesluit 2012).',
    },
    {
      term: 'Wkb',
      definition:
        'Wet kwaliteitsborging voor het bouwen; private kwaliteitsborgers nemen toets en toezicht over van de gemeente (gefaseerd ingevoerd vanaf 1-1-2024).',
    },
    {
      term: 'Voorlopig Ontwerp (VO)',
      definition:
        'Eerste uitgewerkte ontwerpfase met plattegronden, gevels en hoofdmaten — basis voor kosteninschatting en opdrachtgeverbeslissing.',
    },
    {
      term: 'Definitief Ontwerp (DO)',
      definition:
        'Verfijning van het VO met materialen, details en afmetingen; basis voor de aanvraag omgevingsvergunning.',
    },
    {
      term: 'Bestek',
      definition:
        'Document met technische beschrijving van het werk + bijbehorende voorwaarden; vormt samen met tekeningen de contractbasis met de aannemer.',
    },
    {
      term: 'Aanbesteding',
      definition:
        'Procedure waarbij meerdere aannemers een prijs uitbrengen op het bestek; de gunning bepaalt wie het werk mag uitvoeren.',
    },
    {
      term: 'Oplevering',
      definition:
        'Formeel moment waarop de aannemer het bouwwerk overdraagt aan de opdrachtgever; gebreken worden vastgelegd in het opleveringsrapport.',
    },
    {
      term: 'SWK',
      definition:
        'Stichting Waarborgfonds Koopwoningen — garantie- en waarborgregeling voor nieuwbouwwoningen (bescherming tegen faillissement aannemer en verborgen gebreken).',
    },
  ],

  games: [
    {
      id: 'A1-gapfill-1',
      type: 'gapfill',
      title: 'Sleutelbegrippen bouwproces',
      text:
        'Een bouwproject begint met de {{opdrachtgever}} die een {{architect}} inschakelt voor het ontwerp. ' +
        'De constructieve berekeningen worden gemaakt door de {{constructeur}}. ' +
        'Voor het bouwen is een {{omgevingsvergunning}} nodig, getoetst aan het {{Bbl}} (Besluit bouwwerken leefomgeving). ' +
        'Het bouwwerk wordt uitgevoerd door de {{aannemer}} en gecontroleerd door de {{toezichthouder}}.',
      distractors: ['gemeente', 'projectontwikkelaar', 'makelaar', 'WKB'],
    },
    {
      id: 'A1-sort-1',
      type: 'sort',
      title: 'Wie doet wat in het bouwteam?',
      categories: ['Ontwerpteam', 'Uitvoering', 'Toezicht & garantie'],
      items: [
        { label: 'Architect', category: 'Ontwerpteam' },
        { label: 'Constructeur', category: 'Ontwerpteam' },
        { label: 'Installatie-adviseur', category: 'Ontwerpteam' },
        { label: 'Hoofdaannemer', category: 'Uitvoering' },
        { label: 'Onderaannemer', category: 'Uitvoering' },
        { label: 'Gemeente bouwtoezicht', category: 'Toezicht & garantie' },
        { label: 'Kwaliteitsborger (WKB)', category: 'Toezicht & garantie' },
        { label: 'SWK-keurmerk', category: 'Toezicht & garantie' },
      ],
    },
    {
      id: 'A1-sequence-1',
      type: 'sequence',
      title: 'Fases van het bouwproces',
      description: 'Zet de fases in de juiste chronologische volgorde.',
      items: [
        'Initiatief en haalbaarheids­studie',
        'Voorlopig Ontwerp (VO)',
        'Definitief Ontwerp (DO)',
        'Aanbesteding en gunning',
        'Uitvoering / bouw',
        'Oplevering',
        'Onderhouds- en gebruiksfase',
      ],
    },
    {
      id: 'A1-matching-1',
      type: 'matching',
      title: 'Koppel rollen aan taken',
      pairs: [
        { left: 'Architect', right: 'Ontwerpt het gebouw en regelt esthetiek' },
        { left: 'Constructeur', right: 'Berekent dragende structuur (sterkte, stijfheid)' },
        { left: 'Aannemer', right: 'Voert het bouwwerk daadwerkelijk uit' },
        { left: 'Bouwfysisch adviseur', right: 'Berekent isolatie, geluid, ventilatie' },
        { left: 'Kwaliteitsborger', right: 'Onafhankelijke toezicht onder WKB (sinds 2024)' },
        { left: 'SWK', right: 'Garantieregeling voor nieuwbouw­woningen' },
      ],
    },
  ],
}
