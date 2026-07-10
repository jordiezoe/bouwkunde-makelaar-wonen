import type { Topic } from '../types/content'

export const B_1_bouwkundige_kwaliteiten: Topic = {
  code: 'B.1',
  section: 'B',
  title: 'Bouwkundige kwaliteiten (Vitruvius)',
  chapterRef: 'Lesboek hoofdstuk 1',
  blurb:
    'De drie eeuwenoude kwaliteitseisen voor een gebouw volgens de Romein Vitruvius: bruikbaarheid, duurzaamheid en schoonheid. Nog steeds het kader waaraan elk bouwwerk beoordeeld wordt.',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · De Vitruvius-triade',
      toetstermCodes: ['B.1.1'],
      body: `
Ruim 2000 jaar geleden schreef de Romeinse architect en militair ingenieur **Marcus Vitruvius Pollio** zijn werk *De architectura* (~25 v.Chr.). Hij formuleerde drie eisen waaraan elk goed gebouw moet voldoen — eisen die tot vandaag de basis vormen voor de bouwkundige kwaliteit:

- **Bruikbaarheid** (*utilitas*) — een gebouw moet praktisch zijn voor de functie waarvoor het is bedoeld. Een woning moet bewoonbaar zijn, een kantoor werkbaar, een ziekenhuis verzorging mogelijk maken. Concreet betekent dit: logische plattegrond, voldoende daglicht, ventilatie, doorgangen, ruimte voor installaties, comfort.
- **Duurzaamheid** (*firmitas*) — een gebouw moet stevig en duurzaam zijn. Constructief veilig, weerbestendig, met materialen die lang meegaan zonder excessief onderhoud. De fundering moet draaglast aankunnen, het dak moet waterdicht zijn, de constructie moet wind en sneeuw kunnen weerstaan.
- **Schoonheid** (*venustas*) — een gebouw moet esthetisch zijn. Harmonieuze proporties, mooie materialen, passend in de omgeving. Wat "mooi" precies is verandert per tijdperk, maar schoonheid blijft een eis: een lelijk gebouw verandert de plek waar het staat negatief.

Voor de makelaar is dit drietal een **beoordelingskader**: bij elke woning kun je vragen of ze op alle drie de aspecten voldoende scoort. Een groot mooi pand met slechte indeling (geen bruikbaarheid) verkoopt moeilijk; een goed ingedeeld huis met lekkende fundering (geen duurzaamheid) is een dure aankoop; een functioneel huis dat lelijk in de straat past (geen schoonheid) heeft een lagere waarde.
      `.trim(),
      diagrams: [{ type: 'vitruvius' }],
    },

    {
      heading: '2 · De drie kwaliteiten in de praktijk',
      toetstermCodes: ['B.1.1'],
      body: `
Hoe vertaal je Vitruvius naar concrete onderdelen die je in een bouwwerk beoordeelt?

**Bruikbaarheid in de praktijk**:
- Plattegrondkwaliteit en doorloop
- Plafondhoogte en vrije doorgangshoogte
- Toegankelijkheid (drempels, deurbreedten, rolstoeltoegankelijk?)
- Daglichttoetreding en bezonning
- Ventilatie en luchtkwaliteit
- Aansluitingen voor installaties (elektra, water, gas, internet)
- Indeling die past bij de levensfase van de bewoner

**Duurzaamheid in de praktijk**:
- Constructieve veiligheid (Bbl + NEN-normen)
- Fundering passend bij de grondsoort
- Brandveiligheid (compartimentering, vluchtwegen)
- Waterdichtheid: dak, gevel, vloeren
- Materialen die lang meegaan zonder onderhoudsslag
- Energiezuinigheid en milieuvriendelijke materialen (modern: BENG, circulariteit)

**Schoonheid in de praktijk**:
- Goede proporties van gevel en raamopeningen
- Materiaalkeuze passend bij stijl en context
- Detaillering (voegwerk, kozijnen, dakranden)
- Inpassing in de straat en omgeving
- Welstandseisen vanuit de gemeente

Een gebouw "tussen hangen en wurgen" — bouwkundig zwak maar mooi, of mooi maar onbruikbaar, of bruikbaar maar lelijk — voldoet niet aan de Vitruvius-triade. Pas met alle drie samen kun je spreken van architectonische kwaliteit.
      `.trim(),
    },
  ],

  toetstermen: [
    {
      code: 'B.1.1',
      text: 'Legt de bouwkundige kwaliteiten van gebouwen (bruikbaarheid, duurzaamheid en schoonheid (Vitruvius)) uit.',
      niveau: 'BT1',
      bloom: 'Begrip',
    },
  ],

  questions: [
    {
      id: 'B.1.q1',
      toetstermCode: 'B.1.1',
      type: 'mc',
      prompt: 'Welke drie kwaliteitseisen formuleerde de Romein Vitruvius voor een goed gebouw?',
      options: [
        'Veiligheid, gezondheid, comfort',
        'Bruikbaarheid, duurzaamheid en schoonheid',
        'Functie, vorm, kleur',
        'Constructie, installatie, afwerking',
      ],
      correctIndex: 1,
      explanation:
        'Vitruvius beschreef in *De architectura* (~25 v.Chr.) de triade utilitas (bruikbaarheid), firmitas (duurzaamheid) en venustas (schoonheid).',
    },
    {
      id: 'B.1.q2',
      toetstermCode: 'B.1.1',
      type: 'mc',
      prompt: 'Wat verstaan we onder "bruikbaarheid" volgens Vitruvius?',
      options: [
        'De esthetische verschijning van het gebouw',
        'De constructieve veiligheid van het gebouw',
        'De geschiktheid voor de functie waarvoor het bedoeld is',
        'De financiële winstgevendheid van het gebouw',
      ],
      correctIndex: 2,
      explanation:
        'Bruikbaarheid (utilitas) gaat over functionaliteit: praktisch indeelbaar, voldoende daglicht en ventilatie, comfortabel voor het beoogde gebruik.',
    },
    {
      id: 'B.1.q3',
      toetstermCode: 'B.1.1',
      type: 'mc',
      prompt: 'Welke Vitruvius-kwaliteit komt overeen met de eis dat de fundering, dak en gevel constructief sterk en weerbestendig zijn?',
      options: ['Bruikbaarheid', 'Duurzaamheid', 'Schoonheid', 'Toegankelijkheid'],
      correctIndex: 1,
      explanation:
        'Duurzaamheid (firmitas) gaat over stevigheid, weerbestendigheid en lange levensduur — constructief veilig en met materialen die niet snel verloren gaan.',
    },
    {
      id: 'B.1.q4',
      toetstermCode: 'B.1.1',
      type: 'mc',
      prompt:
        'Een woning is constructief gezond en mooi vormgegeven, maar de plattegrond werkt slecht: de keuken zit niet bij de eetkamer en de slaapkamers zijn te klein. Op welke Vitruvius-kwaliteit scoort dit gebouw onvoldoende?',
      options: ['Duurzaamheid', 'Schoonheid', 'Bruikbaarheid', 'Op alle drie de kwaliteiten gelijk'],
      correctIndex: 2,
      explanation:
        'Een onpraktische indeling raakt vooral de utilitas (bruikbaarheid). Constructie (firmitas) en uiterlijk (venustas) kunnen prima zijn — maar zonder bruikbaarheid mist het gebouw één essentiële kwaliteit.',
    },
    {
      id: 'B.1.q5',
      toetstermCode: 'B.1.1',
      type: 'mc',
      prompt:
        'Welk Latijns begrip uit de Vitruvius-triade staat voor "schoonheid"?',
      options: ['Firmitas', 'Utilitas', 'Venustas', 'Concordia'],
      correctIndex: 2,
      explanation:
        'Venustas (van Venus, godin van schoonheid) = schoonheid. Firmitas = duurzaamheid, utilitas = bruikbaarheid. Concordia (harmonie) hoort niet bij de triade.',
    },
    {
      id: 'B.1.q6',
      toetstermCode: 'B.1.1',
      type: 'mc',
      prompt:
        'Op welke manier helpt de Vitruvius-triade een makelaar bij het beoordelen van een woning?',
      options: [
        'Het bepaalt de exacte WOZ-waarde van het pand',
        'Het is een breed kwaliteitskader',
        'Het geeft de korting op de aanneemsom aan',
        'Het bepaalt de exacte energiezuinigheid',
      ],
      correctIndex: 1,
      explanation:
        'De triade is een denkraam: bij een verkoop, taxatie of advies loop je de drie aspecten langs. Sterk op alle drie = topwoning; zwakte op één = onderhandelingsruimte of risico.',
    },
    {
      id: 'B.1.q7',
      toetstermCode: 'B.1.1',
      type: 'mc',
      prompt:
        'Welk modern bouwfysisch onderwerp valt het meest natuurlijk onder de Vitruvius-kwaliteit "duurzaamheid" (firmitas)?',
      options: [
        'De welstandsbeoordeling van de gevel',
        'De plattegrondindeling van de woning',
        'De BENG-eisen en de Rc-waarden voor isolatie',
        'Het meubilair in de verkooptekening',
      ],
      correctIndex: 2,
      explanation:
        'BENG en Rc-waarden bepalen mede de constructieve+materiële houdbaarheid op de lange termijn (energiezuinig = duurzaam). De plattegrondindeling valt onder utilitas; welstand onder venustas.',
    },
  ],

  terms: [
    {
      term: 'Sterkte',
      definition:
        'Het vermogen van een constructie om belasting op te nemen zonder te bezwijken; gemeten in N/mm² (spanning).',
    },
    {
      term: 'Stijfheid',
      definition:
        'Het vermogen om vervorming onder belasting beperkt te houden; weinig ervan = veel doorbuiging, zelfs zonder breuk.',
    },
    {
      term: 'Stabiliteit',
      definition:
        'Het vermogen om de oorspronkelijke positie/vorm te behouden onder horizontale belastingen (wind, aardbeving) — anders kantelt of knikt het bouwwerk.',
    },
    {
      term: 'Eurocode',
      definition:
        'Europese reeks normen (NEN-EN 1990 e.v.) voor het constructief ontwerpen van bouwwerken; in NL juridisch dwingend via het Bbl.',
    },
    {
      term: 'BENG',
      definition:
        'Bijna Energieneutrale Gebouwen — wettelijke eisen voor nieuwbouw sinds 2021 voor energiebehoefte, primair fossiel verbruik en aandeel hernieuwbaar.',
    },
    {
      term: 'Rc-waarde',
      definition:
        'Warmteweerstand van een constructiedeel (m²·K/W); hoger = beter isolerend. Bbl stelt minima per onderdeel (bv. Rc ≥ 6,3 voor dak nieuwbouw).',
    },
    {
      term: 'U-waarde',
      definition:
        'Warmtedoorgangscoëfficiënt (W/m²·K), vooral voor glas en kozijnen; lager = beter isolerend.',
    },
    {
      term: 'Geluidwering',
      definition:
        'Mate waarin een constructie geluid tegenhoudt; uitgedrukt in dB (Bbl: ten minste 20 dB voor woningscheidende wand).',
    },
    {
      term: 'Brandwerendheid (WBDBO)',
      definition:
        'Weerstand tegen branddoorslag en brand­overslag — hoofdcriterium in het Bbl voor scheidingen tussen brandcompartimenten (minuten).',
    },
    {
      term: 'Vluchtroute',
      definition:
        'Verkeers­route in een gebouw die naar een veilige plek leidt; lengte, breedte en aantal worden geëist door het Bbl.',
    },
    {
      term: 'Daglicht­oppervlak',
      definition:
        'Bbl-eis: percentage glas­oppervlak ten opzichte van de vloer­oppervlakte van verblijfsruimten (minimaal ±10%).',
    },
    {
      term: 'Toegankelijkheid',
      definition:
        'Bouwkundige geschiktheid voor mensen met beperking (drempel­vrij, hellingbanen, lift); deels verplicht via Bbl en NEN 1814.',
    },
    {
      term: 'Levensloop­bestendig',
      definition:
        'Woning die zonder ingrijpende verbouwing geschikt blijft bij ouderdom of beperking — slaap- en badkamer op de begane grond, geen drempels.',
    },
  ],

  games: [
    {
      id: 'B1-gapfill-1', type: 'gapfill',
      title: 'Vitruvius en bouwkundige kwaliteiten',
      text:
        'De drie Vitruviaanse eisen zijn: {{firmitas}} (stevigheid), {{utilitas}} (nuttigheid) en {{venustas}} (schoonheid). ' +
        'Een gebouw moet voldoen aan zowel {{Bbl}}-eisen (technische voorschriften) als aan {{welstand}} (esthetische beoordeling).',
      distractors: ['Bouwbesluit', 'duurzaamheid', 'comfort'],
    },
    {
      id: 'B1-matching-1', type: 'matching',
      title: 'Koppel kwaliteits­aspect aan voorbeeld',
      pairs: [
        { left: 'Firmitas (stevigheid)', right: 'Fundering, dragende constructie, stabiliteit' },
        { left: 'Utilitas (nuttigheid)', right: 'Functionele indeling, toegankelijkheid' },
        { left: 'Venustas (schoonheid)', right: 'Esthetiek, welstand, gevel-uitstraling' },
        { left: 'Bouwfysische kwaliteit', right: 'Isolatie, ventilatie, geluid, vocht' },
        { left: 'Duurzaamheids­kwaliteit', right: 'Hernieuwbare materialen, BENG, MPG' },
      ],
    },
  ],
}
