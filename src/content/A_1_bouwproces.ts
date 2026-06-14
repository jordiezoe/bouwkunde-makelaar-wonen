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
      options: [
        'De aannemer',
        'Bouw- en woningtoezicht van de gemeente',
        'De architect',
        'Het Kadaster',
      ],
      correctIndex: 1,
      explanation:
        'De gemeente (Bouw- en woningtoezicht) verleent vergunningen en handhaaft het Bbl. Het Kadaster registreert alleen eigendomsgegevens en kadastrale grenzen.',
    },
    {
      id: 'A.1.q3',
      toetstermCode: 'A.1.1',
      type: 'mc',
      prompt: 'Wat is het verschil tussen een hoofdaannemer en een onderaannemer?',
      options: [
        'De hoofdaannemer doet alleen het ontwerp; de onderaannemer voert uit.',
        'De hoofdaannemer is verantwoordelijk voor het hele project en coördineert de onderaannemers die deelwerken uitvoeren.',
        'De hoofdaannemer wordt ingehuurd door de gemeente; de onderaannemer door de opdrachtgever.',
        'Er is geen verschil — beide termen zijn synoniem.',
      ],
      correctIndex: 1,
      explanation:
        'De hoofdaannemer heeft het contract met de opdrachtgever en is eindverantwoordelijk. Onderaannemers (installateur, dakdekker, etc.) werken in zijn opdracht.',
    },
    {
      id: 'A.1.q4',
      toetstermCode: 'A.1.1',
      type: 'mc',
      prompt: 'Welke partij stelt het programma van eisen (PvE) op aan het begin van een project?',
      options: [
        'De aannemer',
        'De architect',
        'De opdrachtgever (eventueel samen met een adviseur of architect)',
        'De gemeente',
      ],
      correctIndex: 2,
      explanation:
        'Het PvE komt van de opdrachtgever en beschrijft wensen, budget en functies. De architect vertaalt het PvE naar een ontwerp.',
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
        'De aannemer rondt de laatste afwerking af.',
        'Het ontwerp wordt aangepast op basis van inspraak.',
        'De gebruiker neemt het gebouw in gebruik; er volgt onderhoud en eventueel later renovatie of sloop.',
        'De omgevingsvergunning wordt aangevraagd.',
      ],
      correctIndex: 2,
      explanation:
        'Exploitatiefase = gebruiks-/beheersfase. Loopt typisch decennia. De makelaar is hier weer in beeld voor verkoop/verhuur/beheer.',
    },
    {
      id: 'A.1.q8',
      toetstermCode: 'A.1.2',
      type: 'mc',
      prompt:
        'Bij de oplevering blijken er nog wat kleine gebreken te zijn (krasjes, een klemmende deur). Wat gebeurt daar standaard mee?',
      options: [
        'Ze worden genegeerd; de opdrachtgever moet ze zelf laten herstellen.',
        'Ze komen op de opleveringslijst en de aannemer herstelt ze binnen een afgesproken termijn.',
        'De oplevering wordt afgewezen tot alles 100% goed is.',
        'Ze worden pas na de garantieperiode behandeld.',
      ],
      correctIndex: 1,
      explanation:
        'Standaardprocedure: opleveringsgebreken op een lijst, aannemer herstelt binnen een termijn (vaak enkele weken). De koper mag het 5%-depot inhouden tot herstel.',
    },

    // A.1.3 — Bouwgrond, bouwvlak, rooilijn (BT1, Begrip)
    {
      id: 'A.1.q9',
      toetstermCode: 'A.1.3',
      type: 'mc',
      prompt: 'Wat is een gevelrooilijn?',
      options: [
        'De grens van het kadastrale perceel.',
        'De denkbeeldige lijn waar de voorgevel op of achter moet staan.',
        'De buitenste lijn van het bouwvlak aan de achterzijde.',
        'De lijn waarop nutsleidingen worden aangelegd.',
      ],
      correctIndex: 1,
      explanation:
        'De gevelrooilijn (of voorgevelrooilijn) bepaalt waar de voorgevel mag staan. Vaak gelijk aan de straatkant van het bouwvlak.',
    },
    {
      id: 'A.1.q10',
      toetstermCode: 'A.1.3',
      type: 'mc',
      prompt: 'Wat betekent het wanneer een terrein "bouwrijp" wordt gemaakt?',
      options: [
        'Er wordt een omgevingsvergunning aangevraagd.',
        'Het terrein wordt verkocht aan de opdrachtgever.',
        'Het terrein wordt klaargemaakt voor bouw: ophogen, drainage, riolering en nutsaansluitingen voorbereid.',
        'Er wordt een definitief ontwerp opgesteld.',
      ],
      correctIndex: 2,
      explanation:
        '"Bouwrijp" = fysiek gereedmaken van het terrein. Niet te verwarren met "bouwgrond" (juridisch toegestaan om te bouwen).',
    },
    {
      id: 'A.1.q11',
      toetstermCode: 'A.1.3',
      type: 'mc',
      prompt: 'Wat is een bouwvlak?',
      options: [
        'Het gebied binnen het perceel waar volgens het omgevingsplan het hoofdgebouw mag staan.',
        'De totale oppervlakte van het kadastrale perceel.',
        'De ruimte tussen de gevelrooilijn en de openbare weg.',
        'Het gebied waar uitsluitend bijgebouwen toegestaan zijn.',
      ],
      correctIndex: 0,
      explanation:
        'Het bouwvlak is de zone op het perceel waar het hoofdgebouw mag verrijzen. Aanbouwen en bijgebouwen kunnen onder voorwaarden ook in het achtererfgebied buiten het bouwvlak.',
    },
    {
      id: 'A.1.q12',
      toetstermCode: 'A.1.3',
      type: 'mc',
      prompt:
        'Een klant kijkt naar een hoekkavel met een bouwvlak dat 2 meter van de straatkant ligt. Wat betekent dit voor de positie van het hoofdgebouw?',
      options: [
        'Het hoofdgebouw moet exact op de erfgrens komen.',
        'De voorgevel moet 2 meter van de erfgrens (de gevelrooilijn) afliggen.',
        'Het hele perceel mag bebouwd worden, ook de tuin.',
        'Het hoofdgebouw mag enkel aan de achterzijde van het perceel.',
      ],
      correctIndex: 1,
      explanation:
        'Het bouwvlak geeft de maximale positie aan. Hier bepaalt dat de voorgevel niet dichter dan 2 meter bij de straatkant mag staan.',
    },

    // A.1.4 — Bouwkostenbegroting (BT2, Begrip)
    {
      id: 'A.1.q13',
      toetstermCode: 'A.1.4',
      type: 'mc',
      prompt: 'Wat zijn staartkosten in een bouwkostenbegroting?',
      options: [
        'Het laatste deel van de aanneemsom dat bij oplevering wordt betaald.',
        'Alle indirecte kosten van de aannemer: algemene kosten, projectleiding, winst en risico — vaak 10–20% van de directe kosten.',
        'De kosten voor sloop en afvoer van bouwafval.',
        'Onvoorziene kosten die pas op de afsluitende factuur verschijnen.',
      ],
      correctIndex: 1,
      explanation:
        'Staartkosten = aannemers algemene kosten + winst + risico. Komt aan het "einde van de staart" van de begroting, na materiaal/arbeid/materieel/onderaanneming.',
    },
    {
      id: 'A.1.q14',
      toetstermCode: 'A.1.4',
      type: 'mc',
      prompt: 'Wat is een stelpost in een bouwkostenbegroting?',
      options: [
        'Een vast bedrag voor de fundering.',
        'Een geschat bedrag voor een onderdeel dat nog niet definitief is uitgewerkt of gekozen — verschil wordt later verrekend.',
        'De kosten van het bouwbord en het bouwhek.',
        'Een korting op de aanneemsom bij snelle oplevering.',
      ],
      correctIndex: 1,
      explanation:
        'Stelposten worden ingezet voor onderdelen zoals keuken, sanitair, tegelwerk. Bij definitieve keuze wordt het verschil tussen stelpostbedrag en werkelijke kosten verrekend met de opdrachtgever.',
    },
    {
      id: 'A.1.q15',
      toetstermCode: 'A.1.4',
      type: 'mc',
      prompt: 'Wat is meer- en minderwerk?',
      options: [
        'De winst- en risico-opslag van de aannemer.',
        'Wijzigingen ten opzichte van het bestek tijdens de uitvoering — extra opdrachten zijn meerwerk, geschrapte onderdelen zijn minderwerk.',
        'Het verschil tussen bouwsom en aanneemsom.',
        'De aanvullende werkzaamheden in de garantieperiode.',
      ],
      correctIndex: 1,
      explanation:
        'Meerwerk = extra opdracht van de opdrachtgever tijdens de bouw (extra dakkapel, duurder kozijn). Minderwerk = juist iets schrappen. Beide leiden tot een verrekening van de aanneemsom.',
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
        'Een opdrachtgever krijgt een offerte met opvallend veel stelposten. Wat is hier de belangrijkste praktische consequentie?',
      options: [
        'De aanneemsom is gegarandeerd lager dan een offerte zonder stelposten.',
        'De aannemer mag het werk niet starten zonder vergunning.',
        'De uiteindelijke prijs kan tijdens de bouw nog flink afwijken, afhankelijk van de definitieve keuzes.',
        'Stelposten zijn altijd inclusief winst en risico.',
      ],
      correctIndex: 2,
      explanation:
        'Veel stelposten = veel ruimte voor verrekening achteraf. Kan zowel duurder als goedkoper uitvallen, maar geeft minder zekerheid over de uiteindelijke prijs.',
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
        'In termijnen per voltooide bouwfase (heistart, bg-vloer, kapconstructie, dakdicht, oplevering).',
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
      prompt:
        'Wat houdt de 5%-regeling bij oplevering van nieuwbouw in?',
      options: [
        'De aannemer mag 5% extra rekenen voor onvoorziene kosten.',
        'De opdrachtgever mag 5% van de aanneemsom inhouden en bij de notaris in depot zetten als zekerheid voor verborgen gebreken; pas na drie maanden vrijgegeven.',
        'De gemeente krijgt 5% van de aanneemsom als leges.',
        'De makelaar ontvangt 5% courtage op de aanneemsom.',
      ],
      correctIndex: 1,
      explanation:
        'Artikel 7:768 BW: 5% van de aanneemsom mag in depot bij de notaris. Na drie maanden, als er geen verborgen gebreken zijn opgedoken, vrijgegeven aan de aannemer.',
    },
    {
      id: 'A.1.q20',
      toetstermCode: 'A.1.5',
      type: 'mc',
      prompt:
        'Een aannemer vraagt voor de start van de bouw een groot voorschot van 25% van de aanneemsom. Wat is de standaardadvisering hierop?',
      options: [
        'Akkoord gaan; dit is in Nederland gebruikelijk.',
        'Voorschotten vooraf zijn ongebruikelijk en juridisch onverstandig — beter pas betalen na geleverd werk.',
        'Wel akkoord, maar alleen als de aannemer een bankgarantie afgeeft.',
        'Akkoord, mits het voorschot wordt afgetrokken van de gemeentelijke leges.',
      ],
      correctIndex: 1,
      explanation:
        'In Nederland is voorschotbetaling vóór er gewerkt is ongebruikelijk en risicovol — zonder geleverd werk staat er niets tegenover je betaling. Beter: termijnen na voltooide fases.',
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
      type: 'mc',
      prompt: 'In welke fase van het bouwproces is de makelaar het meest actief?',
      options: [
        'Uitvoeringsfase (de bouw zelf).',
        'Opleveringsfase (eindinspectie).',
        'Initiatief- en exploitatiefase (vóór de bouw + bij verkoop/verhuur na oplevering).',
        'Voorbereidingsfase (aanbesteding).',
      ],
      correctIndex: 2,
      explanation:
        'De makelaar adviseert in de initiatieffase (marktanalyse, haalbaarheid) en is daarna vooral actief in de exploitatiefase voor verkoop/verhuur/beheer.',
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
      prompt: 'Wat is een V&G-plan en wanneer wordt het opgesteld?',
      options: [
        'Een vergelijking van offertes; opgesteld in de voorbereidingsfase.',
        'Een veiligheids- en gezondheidsplan voor de bouwplaats; vereist tijdens de uitvoeringsfase.',
        'Een verkoop- en garantieplan voor de koper.',
        'Een verwerkings- en gebruiksplan voor onderhoud.',
      ],
      correctIndex: 1,
      explanation:
        'V&G = Veiligheid en Gezondheid. Verplicht voor projecten boven een bepaalde omvang, geldt tijdens de uitvoeringsfase op de bouwplaats.',
    },

    // A.1.3 — Bouwgrond (extra)
    {
      id: 'A.1.q25',
      toetstermCode: 'A.1.3',
      type: 'mc',
      prompt:
        'Wat is het verschil tussen voorerfgebied en achtererfgebied op een perceel?',
      options: [
        'Het voorerfgebied is alleen voor parkeren, het achtererfgebied voor tuin.',
        'Het voorerfgebied ligt tussen de voorgevelrooilijn en de straat; het achtererfgebied ligt aan de achterzijde van het hoofdgebouw, met soepelere regels voor vergunningsvrije aanbouwen.',
        'Het voorerfgebied behoort aan de gemeente, het achtererfgebied aan de eigenaar.',
        'Voor- en achtererfgebied zijn synoniemen voor twee gelijke helften van een tuin.',
      ],
      correctIndex: 1,
      explanation:
        'In het achtererfgebied (achter het hoofdgebouw, buiten het bouwvlak) gelden soepelere regels voor bijgebouwen en aanbouwen — vaak vergunningsvrij binnen bepaalde maten.',
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
      type: 'mc',
      prompt: 'Wat is het verschil tussen "arbeid" en "materieel" in een bouwbegroting?',
      options: [
        'Arbeid = de uren van de eigen ploeg; materieel = gereedschap, machines en tijdelijke voorzieningen zoals kraan en steiger.',
        'Arbeid en materieel zijn synoniemen voor de kosten van de aannemer.',
        'Arbeid = de uren van onderaannemers; materieel = bouwmaterialen.',
        'Arbeid = inkoopkosten van materialen; materieel = bouwafval.',
      ],
      correctIndex: 0,
      explanation:
        'Arbeid = manuren × loonkosten van de eigen werknemers. Materieel = gereedschap en machines (kraan, steiger, bouwkeet), vaak gehuurd.',
    },
    {
      id: 'A.1.q28',
      toetstermCode: 'A.1.4',
      type: 'mc',
      prompt:
        'Hoe verschilt onderaanneming van "arbeid" in een bouwkostenbegroting?',
      options: [
        'Onderaanneming is duurder per uur dan eigen arbeid.',
        'Bij onderaanneming wordt een complete dienst inclusief materiaal en arbeid ingekocht bij een gespecialiseerde partij; bij "arbeid" gaat het puur om manuren van de eigen ploeg.',
        'Onderaanneming valt onder materieel, arbeid niet.',
        'Onderaanneming geldt alleen voor de heistart, arbeid voor de hele bouw.',
      ],
      correctIndex: 1,
      explanation:
        'Een onderaannemer (bv. dakdekker, installateur) levert een complete deelopdracht inclusief materiaal en eigen mensen. "Arbeid" in de begroting verwijst naar de manuren van de eigen ploeg van de hoofdaannemer.',
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
        'Bij het waterdicht worden van het dak (dakdicht).',
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
      prompt:
        'Wat is een GIW- of SWK-garantie?',
      options: [
        'Een verzekering die de aannemer afsluit voor zijn eigen risico tijdens de bouw.',
        'Een garantie- en waarborgregeling voor nieuwbouwwoningen die de koper extra zekerheid biedt — vergelijkbaar met de 5%-regeling, maar door een onafhankelijk instituut beheerd.',
        'Een korting op de aanneemsom bij snelle oplevering.',
        'Een verplichte gemeentelijke heffing op nieuwbouw.',
      ],
      correctIndex: 1,
      explanation:
        'GIW (oud) en SWK (huidig) bieden de koper extra zekerheid: bij faillissement van de aannemer of verborgen gebreken springt de regeling bij. Veel projectontwikkelaars werken hiermee.',
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
