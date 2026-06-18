import type { Topic } from '../types/content'

const FIG = '/figs/B_11'
const SRC = 'Lesboek hfd. 12'

export const B_11_niet_houten_kozijnen: Topic = {
  code: 'B.11',
  section: 'B',
  title: 'Niet-houten kozijnen, ramen en deuren',
  chapterRef: 'Lesboek hoofdstuk 12',
  blurb:
    'Kunststof- en metalen (staal en aluminium) kozijnen — opbouw, profielen, koudebrug-onderbreking, montage in een houten of kunststof stelkozijn, plus de voor- en nadelen ten opzichte van houten kozijnen.',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · Stalen ramen en kozijnen',
      toetstermCodes: ['B.11.1'],
      body: `
Stalen kozijnen + ramen hebben een **gewalst, kenmerkend slank profiel** — kozijn + raam samen slechts ~50 mm. Dat geeft **meer daglicht** dan bij houten kozijnen.

**Voordelen**:
- Lange levensduur (mits goed beschermd)
- Beter te belasten met hang- en sluitwerk
- Slank profiel → meer glasoppervlak
- Geschikt voor speciale toepassingen (industrieel, monumentaal stalen ramen in oude scholen en fabrieken)

**Nadelen**:
- **Corrosie**: zonder zinklaag roest staal snel — vraagt thermisch verzinken of zinkspuiten (Schoop-methode), daarna gronden en lakken
- **Smalle sponningen** — bij renovatie is dubbelglas vaak niet inpasbaar
- **Aangepast hang- en sluitwerk** nodig (anders maatvoering dan voor hout)
- **Koudebrug**: staal geleidt warmte uitstekend → condensvorming aan de binnenzijde, die op zijn beurt roest aanjaagt
- **De bovendorpel mag niet worden belast** — altijd een latei boven het kozijn

**Plaatsing**:
- Beglazen pas **na het inmetselen**
- Bij **bestaande bouw** wordt het stalen kozijn in een **houten stelkozijn** geplaatst om constante aanraking met natte buitenmuur te voorkomen

### Stalen binnendeurkozijnen
- Veelgebruikt: koudvervormd plaatstaal ~1 mm dik
- Bovendorpel + stijlen geschroefd of in elkaar gehaakt
- Roestbehandeling en grondverf gebeuren in de fabriek
- **Alle in- en uitwendige hoeken zijn rond** → verf hecht beter, springt niet af
- Twee uitvoeringen — zie ook B.10.6:
  - voor **stompe deur** (met rubber aanslag) — dagmaat = deurbreedte − 30 mm
  - voor **opdekdeur** (zonder aanslag) — dagmaat = deurbreedte − 20 mm
      `.trim(),
      images: [
        {
          src: `${FIG}/staal-spouwmuur.jpg`,
          caption: 'Aansluiting van een stalen raamprofiel op een spouwmuur — slank profiel, vraagt goede roestbescherming en koudebrugmaatregelen.',
          source: SRC,
          width: 'md',
        },
      ],
    },

    {
      heading: '2 · Aluminium ramen en kozijnen',
      toetstermCodes: ['B.11.1'],
      body: `
Aluminium heeft een **lagere treksterkte** en **grotere elasticiteit** dan staal — daarom worden bij ramen en kozijnen **kokerprofielen** gebruikt (twee- of meerwandig), vaak met een houten verstijvingsbalk of een stalen kokerprofiel binnenin voor extra stijfheid.

### Antikoudebrug-profiel
Aluminium geleidt warmte uitstekend → een doorgaand aluminium profiel zou een grote **koudebrug** vormen (vocht condenseert aan de binnenkant).

**Oplossing**: het profiel wordt **in de lengte doorgesneden** en de buitenste helft wordt met een **kunststofprofiel** (vaak PA polyamide) weer aan de binnenste helft verbonden. De kunststof onderbreekt de warmtegeleiding → 'thermisch gescheiden' profiel.

### Plaatsing en montage
- **Aluminium reageert agressief met verse beton, metselspecie, gips en teer** → blijvende vlekken en putcorrosie
- Daarom **nooit ingemetseld**, altijd **in een houten stelkozijn na het metselen** geplaatst (montagekozijn-principe — zie B.10.3)
- Verbindingen kozijn-raam met **neopreenprofielen** voor waterdichtheid

### Oppervlaktebehandeling
- **Anodiseren / eloxeren** (verdikte oxidelaag, kan gekleurd)
- **Moffelen** (verf in oven inbranden)
- **Poedercoaten** (elektrostatisch + smelten)
- Voor zware omgevingen: **PVDF-lak** (fluorhoudend, extreme weersbestendigheid)
- Weinig onderhoud nodig

### Vormen en typen
- Vaste of beweegbare ramen: schuif, draaikiep, klep
- Stolp-ramen vaak met aluminium tongnaaldprofiel
- **Schuiframen** zijn populair in aluminium vanwege de geringe wrijving en het slanke profiel
- Aluminium kan in willekeurige kleur (RAL) geleverd worden — vrijheid in ontwerp
      `.trim(),
      images: [
        {
          src: `${FIG}/alu-schuif.jpg`,
          caption: 'Horizontaal aluminium schuifraam (zonder koudebrugonderbreking) geplaatst in een houten stelkozijn.',
          source: SRC,
          width: 'md',
        },
        {
          src: `${FIG}/alu-koudebrugonderbreking.jpg`,
          caption: 'Aluminium profiel met koudebrug-onderbreking — het profiel is in de lengte doorgesneden en met een kunststofprofiel weer verbonden. Geplaatst in een houten stelkozijn.',
          source: SRC,
          width: 'md',
        },
      ],
    },

    {
      heading: '3 · Kunststofkozijnen',
      toetstermCodes: ['B.11.1'],
      body: `
Kunststofkozijnen zijn meestal van **slagvast PVC**, **geëxtrudeerd** in **koker- of meerwandige profielen**. Dat ontstaat door PVC-granulaat verhit door een matrijs te persen — een doorlopend profiel met meerdere holle kamers voor stijfheid en isolatie.

### Versterking
- PVC alleen is te slap → profielen worden **versterkt met houten of stalen profielen** in de binnenste kamer. Hang- en sluitwerk wordt op het versterkings­profiel geschroefd, niet in het PVC zelf.

### Verbindingen
- Hoeken worden door **smeltlassen** verbonden (de profielen worden in de hoek tegen een verhit mes gehouden, daarna in elkaar gedrukt → één geheel zonder zichtbare naden)
- Afdichting glas/raam tegen kozijn met **neopreen tocht- en afsluitstrips**

### Voordelen
- **Hoge warmte-isolatie** door luchtgevulde kamers
- **Weersbestendig** — ook agressieve industriële en kust-omgevingen (PVC roest niet, oxideert niet)
- **In elke kleur en vorm** verkrijgbaar (folie of co-extrusie)
- **Alle raamtypen** mogelijk (draaikiep, schuif, tuimel)
- **Geluidsdicht** door dichte rubber-afdichting
- **Onderhoudsarm** — geen schilderbeurten

### Nadelen
- **Hoge lineaire uitzettings­coëfficiënt** (~70 × 10⁻⁶ /K — bijna 6× staal) → niet geschikt voor **grote afmetingen**
- **Kromtrekken** door ongelijke opwarming (zon op één kant) — versterking-profiel noodzakelijk
- **Weinig sterk** — versterkingen nodig op alle hang-/sluitwerk-punten
- **Schilderen in andere kleur** is lastig — folies kunnen wel maar zijn duurder
- Profiel is **dikker** dan dat van aluminium of staal → minder daglicht
- **Brandgedrag**: PVC is moeilijk brandbaar maar geeft bij brand **chloorgas** vrij

### Plaatsing
- In **afbouwfase** in een **houten stelkozijn** gemonteerd
- In renovaties: een **renovatiekozijn** wordt in een bestaand houten kozijn geplaatst — geen sloop nodig
      `.trim(),
      images: [
        {
          src: `${FIG}/kunststof-stijl.jpg`,
          caption: 'Doorsnede stijl van een kunststofkozijn in een spouwmuur zonder isolatie. Let op de meerwandige opbouw (luchtkamers voor isolatie + versterkingsprofiel binnenin).',
          source: SRC,
          width: 'md',
        },
        {
          src: `${FIG}/kunststof-renovatie.jpg`,
          caption: 'Doorsnede onderdorpel kunststofkozijn als renovatiekozijn in een bestaand houten kozijn — geen sloop van het oude kozijn nodig.',
          source: SRC,
          width: 'md',
        },
      ],
    },

    {
      heading: '4 · Houten vs niet-houten kozijnen — vergelijking',
      toetstermCodes: ['B.11.2'],
      body: `
Vier materialen, alle met eigen sterke en zwakke punten. Onder elkaar:

| Aspect | Hout | Aluminium | Kunststof (PVC) | Staal |
|---|---|---|---|---|
| **Onderhoud** | hoog (~elke 5–7 j schilderen) | laag (alleen schoonmaken) | laag (alleen schoonmaken) | hoog (roest) |
| **Levensduur** | 30–50 j (mits onderhoud) | 40–60 j | 30–40 j | 50+ j (mits geconserveerd) |
| **Warmte-isolatie van profiel** | goed | slecht zonder onderbreking | zeer goed (luchtkamers) | slecht |
| **Vormvrijheid** | hoog | zeer hoog | hoog | beperkt |
| **Kleur veranderen** | makkelijk (overschilderen) | moeilijk (re-coaten) | moeilijk (folie) | makkelijk (overschilderen) |
| **Initiële prijs** | gemiddeld | hoog | laag–gemiddeld | hoog |
| **Maximale afmeting** | groot | zeer groot | beperkt (uitzetting) | groot |
| **Brandgedrag** | brandbaar | onbrandbaar | moeilijk brandbaar maar geeft chloorgas | onbrandbaar |
| **Milieu** | hernieuwbaar, opslag CO₂ | recyclebaar (5% van prod-energie) | aardolie-product | recyclebaar |
| **Esthetiek** | warm, natuurlijk | modern, slank | gladde, kunstmatige uitstraling | industrieel, slank |
| **Bouwfysische detaillering** | flexibel ter plekke (zagen, schaven) | precisiematwerk fabriek | precisiematwerk fabriek | gewalst maatwerk |

### Wanneer welke keuze?

**Houten kozijn — kies wanneer**:
- Esthetiek van natuurlijk materiaal gewenst
- Monumentaal/historisch werk
- Modulair maatwerk
- Aangrenzend traditioneel hout, deur of pui

**Aluminium kozijn — kies wanneer**:
- Zeer slank profiel en groot glasoppervlak nodig (winkelpuien, kantoren)
- Grote afmetingen of schuif-elementen
- Modern strak ontwerp
- Onderhoudsarme oplossing in agressieve omgeving (kust)

**Kunststof kozijn (PVC) — kies wanneer**:
- Budget is beperkt
- Onderhoudsarme woning
- Modale afmetingen (woningbouw, standaardramen)
- Renovatie van een bestaande gevel met houten kozijnen die er slecht aan toe zijn

**Staal kozijn — kies wanneer**:
- Industriële/loft-uitstraling gewenst
- Monumentaal werk (oude scholen, fabrieken — die hadden vaak originele stalen ramen)
- Branddeuren (vluchtdeuren in trapportalen)
- Slanke verdeel-elementen in pui

### Detaillering — verschillen om te kennen
- **Hout**: kalksponning, kozijnankers, schilderwerk
- **Aluminium**: koudebrugonderbreking (thermisch gescheiden), neopreen-profielen, stelkozijn altijd
- **Kunststof**: smeltlassen in de hoeken, neopreen-strippen, versterkingsprofiel in koker
- **Staal**: thermische zinklaag + grondverf + aflak; rond geschuurde hoeken, geen sponning voor dubbelglas zonder ombouw

### Voorbeelden van combinaties
- **Hout-aluminium** (FSC-hout buiten, alu binnen): combineert duurzaam buitenhout met onderhoudsarm aluminium binnen — populair in passiefhuizen
- **Aluminium op hout** (klimaat-gevoelig hout binnen + alu-omhulsel buiten): bestaand binnen-hout behouden, buiten dichtgemaakt met alu — beperkt monumentaal werk
      `.trim(),
    },
  ],

  toetstermen: [
    {
      code: 'B.11.1',
      text: 'Herkent de details van de volgende niet-houten kozijnen: kunststof kozijnen en metalen kozijnen (staal en aluminium).',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'B.11.2',
      text: 'Legt de verschillen en voor- en nadelen uit van houten kozijnen en van niet-houten kozijnen (kunststof, staal en aluminium).',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
  ],

  questions: [
    // === B.11.1 — Herkennen details (8) ===
    {
      id: 'B11-1-a',
      toetstermCode: 'B.11.1',
      type: 'mc',
      prompt: 'Waarom worden in aluminium ramen vaak **kokerprofielen** gebruikt, soms met een houten of stalen verstijvings­balk erin?',
      options: [
        'Voor esthetische redenen — kokers zijn mooier',
        'Aluminium is elastischer; kokers en verstijving geven stijfheid',
        'Kokerprofielen zijn goedkoper te produceren dan massieve profielen',
        'Het verbetert de geluidsisolatie',
      ],
      correctIndex: 1,
      explanation:
        'Aluminium heeft een ~3× lagere E-modulus dan staal — een aluminium profiel zou bij dezelfde afmeting te slap zijn. Kokerprofielen plus een houten of stalen verstijvings­balk binnenin geven de benodigde stijfheid bij dezelfde slankheid.',
    },
    {
      id: 'B11-1-b',
      toetstermCode: 'B.11.1',
      type: 'mc',
      prompt: 'Wat is een **antikoudebrug-profiel** in een aluminium kozijn?',
      options: [
        'Een isolatieschuim dat in het profiel wordt gespoten',
        'Een aluminium profiel met kunststof als koudebrugonderbreking',
        'Een dubbele rubber strip langs de aanslag',
        'Een houten balk die aan de binnenkant tegen het aluminium ligt',
      ],
      correctIndex: 1,
      explanation:
        'Aluminium geleidt warmte uitstekend — een doorgaand profiel zou een grote koudebrug vormen. Door het profiel in de lengte door te snijden en de twee helften met een kunststofstrip (polyamide) te koppelen, wordt de warmtegeleiding onderbroken (thermisch gescheiden profiel).',
    },
    {
      id: 'B11-1-c',
      toetstermCode: 'B.11.1',
      type: 'mc',
      prompt:
        'Hoe worden de hoeken van een **kunststof (PVC) kozijn** verbonden?',
      options: [
        'Met schroeven en metalen hoeken',
        'Met lijm (epoxyhars)',
        'Door smeltlassen tegen een verhit mes',
        'Met houten deuvels',
      ],
      correctIndex: 2,
      explanation:
        'Hoeken van kunststof kozijnen worden **smeltgelast**: de eindvlakken worden tegen een verhit mes verwarmd tot ze smelten, dan onder druk tegen elkaar gehouden tot het PVC weer hard wordt. Resultaat: een naadloze, sterke hoek zonder zichtbare verbinding.',
    },
    {
      id: 'B11-1-d',
      toetstermCode: 'B.11.1',
      type: 'mc',
      prompt: 'Waarom worden aluminium kozijnen **altijd in een houten stelkozijn** (montagekozijn-principe) geplaatst en nooit direct ingemetseld?',
      options: [
        'Aluminium is te zwaar om in te metselen',
        'Aluminium reageert agressief met mortel, cement en gips',
        'Inmetselen is alleen toegestaan bij houten kozijnen volgens het Bbl',
        'Een aluminium kozijn past niet in een standaard kalksponning',
      ],
      correctIndex: 1,
      explanation:
        'Aluminium wordt aangetast door alkalische verse mortel/cement/gips. Daarom altijd in afbouwfase plaatsen in een houten stelkozijn dat al is ingemetseld — direct contact tussen aluminium en metselwerk wordt zo voorkomen.',
    },
    {
      id: 'B11-1-e',
      toetstermCode: 'B.11.1',
      type: 'mc',
      prompt:
        'Op welke wijze wordt een **stalen binnendeurkozijn** ondersteund boven een kozijnopening breder dan 1 m?',
      options: [
        'De bovendorpel van het kozijn draagt zelf de bovenliggende belasting',
        'Het stalen kozijn heeft een ingebouwde latei',
        'Er moet altijd een latei boven',
        'De ondersteuning komt automatisch via de kozijnankers',
      ],
      correctIndex: 2,
      explanation:
        'De bovendorpel van een stalen binnendeurkozijn is een dun plaatstaal-element dat niet ontworpen is om belasting te dragen. Boven elke opening breder dan 1 m moet daarom een aparte latei (staltonlatei, betonlatei of stalen hoekstaal) komen.',
    },
    {
      id: 'B11-1-f',
      toetstermCode: 'B.11.1',
      type: 'mc',
      prompt:
        'Een stalen binnendeurkozijn heeft **alle in- en uitwendige hoeken rond afgewerkt**. Waarom?',
      options: [
        'Voor de veiligheid van gebruikers',
        'Voor strakkere maatvoering',
        'Verf hecht beter op afgeronde hoeken',
        'Het is een Bbl-eis voor brandwerendheid',
      ],
      correctIndex: 2,
      explanation:
        'Op een scherpe hoek is de verflaag dunner en kwetsbaarder; trekt makkelijker los of barst. Afgeronde hoeken houden de verflaag stabieler — fabriekgrondverf + aflak gaan dan veel langer mee.',
    },
    {
      id: 'B11-1-g',
      toetstermCode: 'B.11.1',
      type: 'mc',
      prompt: 'Welke versterking zit binnen een geëxtrudeerd kunststof (PVC) kozijnprofiel?',
      options: [
        'Een loodkern voor extra gewicht',
        'Een versterkingsprofiel in de PVC-kamer',
        'Een isolatieschuim',
        'Een betonkern voor stevigheid',
      ],
      correctIndex: 1,
      explanation:
        'PVC alleen is te slap om hang- en sluitwerk te dragen en blijft niet recht onder belasting. In de centrale kamer van het meerwandige profiel zit daarom een houten lat of (vaker) een verzinkt stalen U- of kokerprofiel — daar wordt het beslag in geschroefd.',
    },
    {
      id: 'B11-1-h',
      toetstermCode: 'B.11.1',
      type: 'mc',
      prompt:
        'Wat is een **renovatiekozijn** in kunststof?',
      options: [
        'Een nieuw kozijn dat in plaats van een gesloopt oud kozijn komt',
        'Een kunststof kozijn in een bestaand kozijn',
        'Een kozijn met verlaagde isolatie-eisen voor monumentaal werk',
        'Een tijdelijk kozijn tijdens de bouw',
      ],
      correctIndex: 1,
      explanation:
        'Een renovatiekozijn wordt binnen het bestaande (vaak houten) kozijn geplaatst — het oude kozijn blijft zitten als omlijsting en aansluiting op het metselwerk. Snelle, minder ingrijpende manier om aluminium of kunststof in een oudere woning te krijgen, zonder pleisterwerk en metselwerk te beschadigen.',
    },

    // === B.11.2 — Voor- en nadelen (8) ===
    {
      id: 'B11-2-a',
      toetstermCode: 'B.11.2',
      type: 'mc',
      prompt:
        'Wat is een **belangrijk voordeel van een houten kozijn** ten opzichte van aluminium en kunststof?',
      options: [
        'Houten kozijnen hebben lagere initiële prijs dan kunststof',
        'Hout is hernieuwbaar, CO₂-opslaand en overschilderbaar',
        'Hout heeft de beste warmte-isolatie van alle profielen',
        'Hout vraagt geen onderhoud',
      ],
      correctIndex: 1,
      explanation:
        'Hout is een hernieuwbare grondstof die CO₂ opslaat. Daarnaast kun je hout in een willekeurige kleur schilderen (bij aluminium en kunststof veel lastiger — duurdere folies of poedercoating). Onderhoud is wél een nadeel: schilderen elke 5–7 j.',
    },
    {
      id: 'B11-2-b',
      toetstermCode: 'B.11.2',
      type: 'mc',
      prompt:
        'Het grootste **nadeel van een aluminium kozijn zonder koudebrug-onderbreking** is:',
      options: [
        'Hoge prijs van het materiaal',
        'Slechte isolatie en condens door warmtegeleiding',
        'Korte levensduur',
        'Slechte bestendigheid tegen UV',
      ],
      correctIndex: 1,
      explanation:
        'Aluminium geleidt warmte ~5.000× beter dan PVC. Zonder thermische onderbreking is een aluminium kozijn een grote koudebrug — vochtcondensatie aan de binnenkant, slechte energiezuinigheid, mogelijke vorstvorming bij strenge winters.',
    },
    {
      id: 'B11-2-c',
      toetstermCode: 'B.11.2',
      type: 'mc',
      prompt: 'Een **groot nadeel van kunststof (PVC) kozijnen** is:',
      options: [
        'Slechte warmte-isolatie',
        'Hoge initiële prijs',
        'Hoge uitzetting en kromtrekken bij grote afmetingen',
        'Korte levensduur (5–10 jaar)',
      ],
      correctIndex: 2,
      explanation:
        'PVC heeft een uitzettingscoëfficiënt van ~70 × 10⁻⁶ /K — bijna 6× die van staal. Bij grote gevelelementen treedt zichtbare maatwerking op; bij ongelijke opwarming (zon op één kant) trekt het profiel krom. Daarom is kunststof minder geschikt voor zeer brede ramen.',
    },
    {
      id: 'B11-2-d',
      toetstermCode: 'B.11.2',
      type: 'mc',
      prompt: 'Waarvoor is een **aluminium kozijn** typisch superieur aan een houten of kunststof kozijn?',
      options: [
        'Voor binnendeuren in een woonkamer',
        'Voor grote schuif-elementen en winkelpuien',
        'Voor monumentaal werk',
        'Voor budget-nieuwbouw',
      ],
      correctIndex: 1,
      explanation:
        'Aluminium is sterk genoeg voor zeer grote afmetingen (PVC haakt af) en heeft slanke profielen (meer daglicht dan PVC of hout). Vandaar dé standaard voor moderne pui-elementen, winkelpuien, lift-schuifdeuren en grote terras-schuifdeuren in kantoorgebouwen.',
    },
    {
      id: 'B11-2-e',
      toetstermCode: 'B.11.2',
      type: 'mc',
      prompt:
        'Bij welk kozijnmateriaal komt **bij brand giftig chloorgas** vrij?',
      options: [
        'Hout',
        'Aluminium',
        'Kunststof (PVC)',
        'Staal',
      ],
      correctIndex: 2,
      explanation:
        'PVC bevat chloor; bij verbranding ontstaat chloorgas (en bij blussen wordt het zoutzuur in bluswater). Dat is een gezondheidsrisico voor brandweer en bewoners — alhoewel PVC zelf moeilijk brandbaar en zelfdovend is.',
    },
    {
      id: 'B11-2-f',
      toetstermCode: 'B.11.2',
      type: 'mc',
      prompt:
        'Welk materiaal is bouwfysisch het **best te detailleren ter plekke** op de bouwplaats (zagen, schaven, aanpassen)?',
      options: [
        'Aluminium',
        'Kunststof',
        'Hout',
        'Staal',
      ],
      correctIndex: 2,
      explanation:
        'Hout kan op de bouwplaats worden bewerkt: zagen, schaven, schroefgaten boren — onmisbaar voor maatwerk en aanpassingen ter plekke. Aluminium, kunststof en staal zijn alleen in de fabriek nauwkeurig te bewerken — wijzigingen op de bouw zijn lastig of onmogelijk.',
    },
    {
      id: 'B11-2-g',
      toetstermCode: 'B.11.2',
      type: 'mc',
      prompt:
        'Welke materialen vergen **periodiek schilderwerk** als onderhoud?',
      options: [
        'Aluminium en kunststof',
        'Hout en staal',
        'Alleen hout',
        'Geen — alle moderne kozijnen zijn onderhoudsvrij',
      ],
      correctIndex: 1,
      explanation:
        'Hout vraagt elke 5–7 jaar onderhoudsschilderwerk (verf is dé bescherming tegen vocht en rot). Stalen kozijnen vragen herschildering om roest te voorkomen — extra werk als de verflaag is beschadigd. Aluminium (anodiseren/coating) en kunststof zijn onderhoudsarm: alleen schoonmaken.',
    },
    {
      id: 'B11-2-h',
      toetstermCode: 'B.11.2',
      type: 'mc',
      prompt:
        'Voor de **gevel van een monumentaal pand** uit ca. 1900 met originele stalen ramen — welk materiaal kies je bij vervanging?',
      options: [
        'Kunststof — goedkoop en weinig onderhoud',
        'Aluminium — modern en strak',
        'Staal — om de slanke profielen te behouden',
        'Hout — universeel passend bij elk monument',
      ],
      correctIndex: 2,
      explanation:
        'Monumenten met stalen ramen behouden hun architectonische identiteit alleen met stalen vervangers (de slanke profielen zijn niet te imiteren in kunststof of hout). Moderne stalen kozijnen met thermische onderbreking verhogen de energie­zuinigheid zonder afbreuk aan de uitstraling.',
    },
  ],

  terms: [
    {
      term: 'Kunststof kozijn',
      definition:
        'Kozijn uit PVC-profielen met stalen versterking; onderhoudsarm, goedkoop, goed isolerend — minder duurzaam bij brand.',
    },
    {
      term: 'Aluminium kozijn',
      definition:
        'Slanke, sterke profielen — vaak voor pui- en wandvullingen; vergt thermische onderbreking om koudebrug te voorkomen.',
    },
    {
      term: 'Stalen kozijn',
      definition:
        'Smalle stalen profielen, vaak voor industriële look (Crittall-stijl); zwaar maar zeer slank.',
    },
    {
      term: 'Composiet kozijn',
      definition:
        'Mix van kunststof en glasvezels — duurzamer en sterker dan puur PVC, slankere profielen mogelijk.',
    },
    {
      term: 'Thermische onderbreking',
      definition:
        'Isolerend kunststof inzetstuk in aluminium- of stalen kozijn; voorkomt koudebrug tussen binnen- en buitenkant.',
    },
    {
      term: 'PVC',
      definition:
        'Polyvinylchloride — kunststof basis voor kozijnen, regenpijpen, rioolbuis; weinig duurzaam bij brand (rookontwikkeling).',
    },
    {
      term: 'Stalen versterking',
      definition:
        'Profielinzet in PVC-kozijnen om vormstabiliteit te garanderen, vooral bij grotere openingen.',
    },
    {
      term: 'Anodiseren / coaten',
      definition:
        'Aluminium oppervlaktebehandeling om corrosie te voorkomen en kleur aan te brengen.',
    },
    {
      term: 'Poedercoaten',
      definition:
        'Aluminium of staal bedekken met poedervorm­lak die in oven verhardt; zeer duurzaam en kleurvast.',
    },
    {
      term: 'U-waarde kozijn (Uf)',
      definition:
        'Warmtedoorgangscoëfficiënt van alleen het kozijnprofiel; ≤ 1,7 voor BENG-conform.',
    },
    {
      term: 'Levensduur',
      definition:
        'Verwacht onderhoudsvrij gebruik: PVC ≈ 40 jaar, alu ≈ 50 jaar, hardhout ≈ 60 jaar (met onderhoud).',
    },
    {
      term: 'Recyclebaarheid',
      definition:
        'Aluminium is uitstekend recyclebaar (95% energie­besparing bij hergebruik); PVC slechts beperkt.',
    },
    {
      term: 'Vormvastheid',
      definition:
        'Mate waarin een kozijn zijn vorm behoudt bij temperatuur­wisselingen; PVC zet sterk uit, aluminium en hout veel minder.',
    },
  ],

  games: [
    {
      id: 'B11-gapfill-1', type: 'gapfill',
      title: 'Niet-houten kozijnen',
      text:
        'Aluminium kozijnen krijgen een {{koudebrugonderbreking}} (kunststofprofiel tussen binnen- en buitenhelft) om condens te voorkomen. ' +
        'Kunststof kozijnen worden gemaakt van slagvast {{PVC}} en hoeken worden {{smeltgelast}}. ' +
        'Stalen kozijnen hebben een slank profiel en geven {{meer}} daglicht dan houten — maar zijn gevoelig voor {{roest}}.',
      distractors: ['HSB', 'lasdraad', 'minder', 'corrosie'],
    },
    {
      id: 'B11-sort-1', type: 'sort',
      title: 'Voor- en nadelen per materiaal',
      categories: ['Hout', 'Aluminium', 'Kunststof (PVC)', 'Staal'],
      items: [
        { label: 'Eenvoudig te schilderen in elke kleur', category: 'Hout' },
        { label: 'Hernieuwbaar materiaal', category: 'Hout' },
        { label: 'Zeer slank profiel — veel daglicht', category: 'Aluminium' },
        { label: 'Goedkoop in aanschaf, onderhoudsarm', category: 'Kunststof (PVC)' },
        { label: 'Geeft chloorgas bij brand', category: 'Kunststof (PVC)' },
        { label: 'Slank profiel, vooral monumenten', category: 'Staal' },
      ],
    },
    {
      id: 'B11-matching-1', type: 'matching',
      title: 'Kozijn-vraagstukken',
      pairs: [
        { left: 'Smeltlas-hoek', right: 'Verbinding in kunststof kozijn' },
        { left: 'Koudebrug­onderbreking', right: 'Kunststofprofiel in aluminium kozijn' },
        { left: 'Renovatie-kozijn', right: 'Kunststof in bestaand houten kozijn — geen sloop' },
        { left: 'Stalen kozijn op gevel', right: 'Slank profiel, in monumenten populair' },
        { left: 'Hoge uitzetting', right: 'Probleem bij PVC — niet voor zeer grote afmetingen' },
      ],
    },
  ],
}
