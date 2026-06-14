import type { Topic } from '../types/content'

export const B_8_non_ferro: Topic = {
  code: 'B.8',
  section: 'B',
  title: 'Non-ferro metalen',
  chapterRef: 'Lesboek hoofdstuk 10',
  blurb:
    'Non-ferro = metalen zonder ijzer: aluminium, koper, zink, lood, nikkel en de legeringen messing en brons. Eigenschappen, toepassingen in de bouw en wat je moet weten over corrosie, kruip, edelheidsreeks en oppervlaktebeschermingen.',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · Wat zijn non-ferro metalen?',
      toetstermCodes: ['B.8.1'],
      body: `
**Non-ferro metalen** = metalen **zonder ijzer**. Daardoor zijn ze veel **minder oxidatiegevoelig** dan staal of gietijzer (ferrometalen). Ze vormen vaak een eigen oxide- of patinalaag die het onderliggende metaal beschermt — zonder dat er aanvullende roestbescherming nodig is.

In de bouw zijn zeven non-ferro materialen examen-relevant:

| Metaal | Type | Kleur | Belangrijkste toepassing |
|---|---|---|---|
| **Aluminium** | zuiver metaal (of legering) | dofgrijs | kozijnen, daktrim, gevelpanelen |
| **Koper** | zuiver metaal | rood | dakbedekking, hemelwaterafvoer, leidingen |
| **Zink** | zuiver metaal | blauwgrijs | dakgoten, gevelbekleding, beschermlaag op staal |
| **Lood** | zuiver metaal | grijs | vochtkering, dakdoorbrekingen (zwaar én duur) |
| **Nikkel** | zuiver metaal | wit-glanzend | legeringscomponent (RVS) + decoratieve coating |
| **Messing** | legering Cu + Zn | geel | hang- en sluitwerk, kranen, scharnieren |
| **Brons** | legering Cu + Sn | bruin-bronzen | ankers, doken, ventielen — vrijwel onaantastbaar |

### Edelheidsreeks (belangrijk!)
Bij contact tussen twee verschillende metalen in een **vochtige omgeving** corrodeert het **minst edele** metaal — dat verschijnsel heet **contactcorrosie** (batterijeffect).

De reeks loopt van **edel** (corrosiebestendig) naar **onedel** (lost makkelijk op):

> brons → koper → messing → lood → RVS → tin → nikkel → ijzer/staal → chroom → verzinkt staal → aluminium → zink

**Praktijkregels**:
- Gebruik **bevestigingsmiddelen van hetzelfde metaal** als de constructie
- Bij onvermijdbaar contact: **rubber- of kunststofscheidingsring** tussen
- Een koperen leiding boven een zinken goot is bv. ongewenst: regenwater spoelt koperionen op het zink → het zink lost versneld op
      `.trim(),
    },

    {
      heading: '2 · Aluminium en zink',
      toetstermCodes: ['B.8.2'],
      body: `
### Aluminium
- **Grondstof**: bauxiet (Al₂O₃) — wordt elektrolytisch tot zuiver aluminium herleid
- **Productie zeer energie-intensief** (~14 kWh per kg!) — maar **recycling kost slechts 5%** van de productie-energie
- Altijd **gelegeerd** voor toepassing:
  - met Mg/Mn → corrosievast (gevels, ramen)
  - met Cu → harder maar minder corrosievast (constructiewerk)
- Vormt **dofgrijze oxidelaag** die zichzelf beschermt
- Plastisch vanaf ~400 °C → geschikt voor **persprofielen** (kozijnen, ramen)
- Hoge lineaire uitzettingscoëfficiënt (~23 × 10⁻⁶ /K, **twee keer staal**) → lange profielen kunnen werken
- **Wordt aangetast door**: cement, verse mortel, gips, zuur vochtig hout — geeft blijvende vlekken. Aluminium en metselwerk dus altijd scheiden met folie of stelkozijn.

**Oppervlaktebehandelingen**:
- **Eloxeren / anodiseren** — elektrochemisch wordt de oxidelaag verdikt; kan gekleurd worden
- **PVDF-lak** (fluorhoudend) — extreme weersbestendigheid, voor gevelpanelen
- **Moffelen / poedercoaten** — voor binnen en lichtere buitentoepassing

**Toepassingen**: kozijn- en raamprofielen, daktrim, prefab dakgoten, hekwerken, condensatie-/tochtprofielen, ventilatiekanalen, gevelplaten, thermische isolatiefolie.

### Zink
- Standaard **bladzink** (dakgoten, gevelbekleding) en als beschermlaag op staal (zie B.7.5 — verzinken)
- Vrij **hard en broos** — kan splijten als het te koud (< 7 °C) wordt verwerkt
- Hoge lineaire uitzetting → **bewegingsvoegen** in lange goten nodig
- Wordt **aangetast door**: zwavelverbindingen (industrielucht), verse mortel/beton, zuur vochtig hout
- Vormt op het oppervlak een grauwe **zinkcarbonaat-laag** die verdere oxidatie afsluit

**Titaanzink (STZ-metaal)** is de moderne variant: zink + spoortjes titaan + koper + aluminium → beter bestand tegen weersinvloeden, **lagere uitzetting**, en kan in **alle richtingen worden gevouwen**. Voor dakgoten, gevelbekleding en gebogen daken.
      `.trim(),
    },

    {
      heading: '3 · Koper, lood en nikkel',
      toetstermCodes: ['B.8.2'],
      body: `
### Koper
- **Rode** kleur, zeer **goed elektrisch en thermisch geleidend**
- Taai, rekbaar, goed corrosiebestendig, **zeer duurzaam** (eeuwen)
- Vormt na verloop van tijd een groene **patinalaag** (kopercarbonaten) — beschermt en is een gewild esthetisch effect
- **Geel koper** is een verouderde benaming voor **messing** (legering Cu + Zn — zie §4)

**Toepassingen**:
- **Dakbedekking** (kerken, monumenten — uniek groen patina)
- **Hemelwaterafvoeren** en gootvoeringen
- **Leidingen** voor gas, water en cv (geknepen of gesoldeerd)
- **Bevestigingsmiddelen** in koperen dakbedekking
- Elektrische leidingen (kerntoepassing buiten de bouw)

### Lood
- **Zeer duurzaam** (honderden jaren onverwoestbaar), maar **zacht** en **kruipgevoelig**
- **Kruip** = traag rekken onder eigen gewicht → loden slabben/blad mag **max. 1,5 m** lang zijn en de overlap moet **≥ 100 mm** zijn
- Wordt aangetast door **kalk** uit mortels, **zuurstofhoudend zacht water** en **zuur reagerende stoffen**
- **Loden waterleidingen zijn verboden** sinds eind jaren '60 — lood is giftig (cumuleert in lichaam → loodvergiftiging)
- In moderne bouw grotendeels vervangen door **EPDM-folie**, **DPC-folie** (LLDPE) of andere kunststoffen
- Wel nog in gebruik voor: **vochtkering boven kozijnen**, **dakdoorbrekingen** (rookkanalen, ontluchtingen), **kleine daken** (erkers, dakkapellen)

**Aanduiding**: **NHL + getal** = gewicht in kg/m² + gekleurde streep op de rol. Bij opwaaikans: minimaal **NHL 18** (≈ 1,59 mm dik).

### Nikkel
- Hard, wit-glanzend, **niet magnetisch**
- Vooral **legeringscomponent**:
  - In **roestvast staal** (18-8: 18% Cr + 8% Ni)
  - In **legeringen met koper** (constantaan, monel)
- Als **decoratieve coating** op kranen, scharnieren, beslag — wordt vaak gecombineerd met chroom (**vernikkeld** en **verchroomd**)
- Op zichzelf zelden bouwmateriaal — herken het in samenstellingen
      `.trim(),
    },

    {
      heading: '4 · Legeringen: messing en brons',
      toetstermCodes: ['B.8.1', 'B.8.2'],
      body: `
Een **legering** is een mengsel van twee of meer metalen waarbij de eigenschappen van het hoofdmetaal worden aangepast — sterker, harder, beter weersbestendig of mooier. Twee bouwrelevante legeringen op koperbasis:

### Messing (Cu + Zn)
- **Geel-glanzend**, harder en steviger dan zuiver koper
- Naarmate er meer zink in zit, hoe geler en harder; minder koper → minder corrosievastheid
- Goed bewerkbaar (gieten, draaien, polijsten)

**Toepassingen**:
- **Hang- en sluitwerk** (deurkrukken, kruidenierhaken, scharnieren)
- **Kranen** in sanitair (vaak **verchroomd** voor uiterlijk en hygiëne)
- **Schroeven, ringen, klemmen** waar enige corrosiebestendigheid gewenst is

> Vraag op het examen: 'geel koper' = messing.

### Brons (Cu + Sn)
- **Brons-bruine** kleur, donkerder dan messing
- **Zeer duurzaam** en **vrijwel onaantastbaar** — beter dan messing onder zware omstandigheden
- Standaard tin-percentage 5–15%
- Soms met aanvullende elementen: aluminiumbrons (extra hard), siliciumbrons (zoutwaterbestendig)

**Toepassingen**:
- **Ankers** en **doken** in steenconstructies — moeten honderden jaren meegaan
- **Radiatorventielen, terugslagkleppen, lagers**
- **Decoratieve elementen** — deurklinken in monumenten, hekwerken
- Kunst en sculpturen (klassiek bronsgieten)

**Geheugensteun**:
- Messing = koper + **Z**ink → de letter Z, **z**acht**g**eel
- Brons = koper + **t**in → de letter t, **t**raditioneel **b**ruin

### Vergelijking eigenschappen
| Eigenschap | Messing (Cu+Zn) | Brons (Cu+Sn) |
|---|---|---|
| Kleur | geel | bronsbruin |
| Hardheid | gemiddeld | hoog |
| Corrosiebestendigheid | redelijk | uitstekend |
| Prijs | lager | hoger |
| Typische plek | binnen (hang-/sluitwerk, kranen) | buiten / kritisch (ankers, ventielen) |
      `.trim(),
    },

    {
      heading: '5 · Praktische bouwregels voor non-ferro metalen',
      toetstermCodes: ['B.8.2'],
      body: `
Een paar overstijgende regels die op het examen vaak in een toepassingsvraag terugkomen:

**1. Vermijd contactcorrosie**
Twee verschillende metalen + vocht = batterijeffect. Onedel metaal lost op.
- Koperen leiding **niet** afwateren op zink (regenwater spoelt koperionen → zink lost op)
- Aluminium niet in direct contact met staal in vochtige omgeving (Al = onedeler dan staal)
- Bevestigingsmiddelen: zelfde metaal of geïsoleerd

**2. Aluminium en alkali**
Aluminium reageert agressief met **cement, verse mortel, gips, en zuur vochtig hout**. Voorkomen:
- Aluminium kozijn altijd in een **PVC-stelkozijn** of met folie scheiden van metselwerk
- Geen aluminium goot direct op vers beton

**3. Lood kruipt**
Lood mag niet vrij hangen of overspannen — kruipt onder eigen gewicht. Slabben max. **1,5 m**, overlap ≥ 100 mm. Voor grote oppervlakken: meerdere slabben gestapeld met spuirubber-/loodbeugels.

**4. Zink en weersinvloeden**
- Niet verwerken onder ~7 °C (te bros)
- Voldoende **bewegingsvoegen** in lange goten (uitzettingscoëfficiënt is ~30 × 10⁻⁶ /K)
- Niet in contact met zwavel- of chloridenrijke omgevingen (industrielucht, zoutmist)

**5. Koper, lood, aluminium en zink worden allemaal aangetast door cement/mortel**
Dat is **dezelfde** oorzaak: de alkaliteit van vers beton + cementspecie is voor non-ferro metalen schadelijk. Bij doorvoeren door betonwand of metselwerk altijd een **kunststofmof** of folie tussen.

**6. Levenscyclus en recycling**
Alle non-ferro metalen zijn **eindeloos recyclebaar** zonder kwaliteitsverlies:
- Aluminium recyclen kost slechts 5% van productie-energie
- Loden onderdelen verzamelen voor recycling (giftig — niet in restafval)
- Zink en koper hebben een hoge restwaarde — vandaar diefstal van koperen kabel/zinken goten
      `.trim(),
    },
  ],

  toetstermen: [
    {
      code: 'B.8.1',
      text: 'Herkent de non-ferro metalen en legeringen aluminium, zink, lood, messing, nikkel, koper en brons.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
    {
      code: 'B.8.2',
      text: 'Legt de eigenschappen en toepassingen van de non-ferro metalen aluminium, zink, lood, messing, nikkel, koper en brons uit.',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
  ],

  questions: [
    // === B.8.1 — Herkenning (7) ===
    {
      id: 'B8-1-a',
      toetstermCode: 'B.8.1',
      type: 'mc',
      prompt: 'Wat is "geel koper" een andere benaming voor?',
      options: ['Brons', 'Messing', 'Cortenstaal', 'Titaanzink'],
      correctIndex: 1,
      explanation:
        'Geel koper is een verouderde naam voor messing — de legering van koper (Cu) en zink (Zn). Naarmate er meer zink in zit, wordt het geler en harder.',
    },
    {
      id: 'B8-1-b',
      toetstermCode: 'B.8.1',
      type: 'mc',
      prompt: 'Welke twee metalen vormen de legering **brons**?',
      options: ['Koper en zink', 'Koper en tin', 'Koper en aluminium', 'IJzer en koper'],
      correctIndex: 1,
      explanation:
        'Brons = koper + tin (Cu + Sn). Vrijwel onaantastbaar; klassieke standaardlegering. Messing daarentegen is koper + zink.',
    },
    {
      id: 'B8-1-c',
      toetstermCode: 'B.8.1',
      type: 'mc',
      prompt:
        'Bij een metaal dat na verloop van tijd een groene patinalaag vormt en zeer goed elektrisch geleidend is, herken je:',
      options: ['Aluminium', 'Lood', 'Koper', 'Nikkel'],
      correctIndex: 2,
      explanation:
        'Koper is rood-glanzend en vormt onder invloed van vocht en CO₂ een groene patinalaag van kopercarbonaten. Het is bovendien een uitstekende elektrische geleider.',
    },
    {
      id: 'B8-1-d',
      toetstermCode: 'B.8.1',
      type: 'mc',
      prompt:
        'Welk metaal vormt **op zichzelf** een dofgrijze oxidelaag, kan goed geanodiseerd worden en wordt veel toegepast voor kozijnen en gevelplaten?',
      options: ['Aluminium', 'Zink', 'Nikkel', 'Lood'],
      correctIndex: 0,
      explanation:
        'Aluminium vormt een zelfbeschermende dofgrijze oxidelaag. Via eloxeren (anodiseren) kan die verdikt en gekleurd worden. Aluminium is dé standaard voor kozijnen, gevelplaten en daktrim.',
    },
    {
      id: 'B8-1-e',
      toetstermCode: 'B.8.1',
      type: 'mc',
      prompt: 'Welk non-ferro metaal is het **belangrijkste legeringscomponent** in roestvast staal?',
      options: ['Aluminium', 'Zink', 'Nikkel', 'Lood'],
      correctIndex: 2,
      explanation:
        'RVS = staal + chroom + nikkel. De klassieke 18-8-RVS bestaat uit 18% chroom en 8% nikkel. Nikkel maakt het staal taai en stabiliseert de structuur.',
    },
    {
      id: 'B8-1-f',
      toetstermCode: 'B.8.1',
      type: 'mc',
      prompt:
        'In de **edelheidsreeks** (edel → onedel) komt zink:',
      options: [
        'Vóór RVS en koper, dus zeer edel',
        'Helemaal aan de onedele kant, ná aluminium',
        'Direct vóór ijzer/staal',
        'Bovenaan, samen met brons',
      ],
      correctIndex: 1,
      explanation:
        'De reeks loopt brons → koper → messing → lood → RVS → tin → nikkel → ijzer/staal → chroom → verzinkt staal → aluminium → zink. Zink is dus zeer onedel — daarom werkt het juist als opofferings­laag op staal (zink corrodeert, staal niet).',
    },
    {
      id: 'B8-1-g',
      toetstermCode: 'B.8.1',
      type: 'mc',
      prompt:
        'Een loden plaat naast een koperen leiding in een vochtige omgeving — welk metaal zal het eerst aangetast worden?',
      options: [
        'Beide even snel',
        'Het koper — koper is veel reactiever',
        'Het lood — lood ligt onedeler in de edelheidsreeks, dus dat lost op',
        'Geen van beide — non-ferro metalen tasten elkaar niet aan',
      ],
      correctIndex: 2,
      explanation:
        'Bij contact tussen twee verschillende metalen in vochtige omgeving lost het onedelere metaal op (batterijeffect). Lood ligt onedeler dan koper, dus het lood zal aangetast worden.',
    },

    // === B.8.2 — Eigenschappen + toepassingen (8) ===
    {
      id: 'B8-2-a',
      toetstermCode: 'B.8.2',
      type: 'mc',
      prompt:
        'Waarom mag een aluminium kozijn **niet** direct in contact komen met verse metselmortel?',
      options: [
        'De mortel hecht te sterk en kan niet meer worden gerepareerd',
        'De alkalische cement tast aluminium aan en geeft blijvende vlekken',
        'Mortel verkleurt door het aluminium',
        'Aluminium expandeert sterker dan metselwerk',
      ],
      correctIndex: 1,
      explanation:
        'Aluminium reageert agressief met de alkalische bestanddelen van cement, verse mortel, gips en zuur vochtig hout. Het oppervlak wordt blijvend gevlekt of beschadigd. Daarom altijd scheiden met PVC-stelkozijn of folie.',
    },
    {
      id: 'B8-2-b',
      toetstermCode: 'B.8.2',
      type: 'mc',
      prompt:
        'Wat is de reden dat een loden slab in een dakdoorbreking maximaal ~1,5 m lang mag zijn?',
      options: [
        'Boven 1,5 m wordt het te zwaar om te dragen',
        'Lood kruipt onder eigen gewicht (langzaam plastisch rekken) — bij langere stukken rekt het uit, scheurt en lekt',
        'Boven 1,5 m wordt lood door UV te broos',
        'Het is een esthetische conventie, geen technische reden',
      ],
      correctIndex: 1,
      explanation:
        'Lood kruipt: bij continue trekspanning rekt het langzaam uit, zelfs onder zijn eigen gewicht. Boven ~1,5 m gaat dat zichtbaar mis en kan een dakdoorvoer gaan lekken. Vandaar de maximale lengte + overlap ≥ 100 mm.',
    },
    {
      id: 'B8-2-c',
      toetstermCode: 'B.8.2',
      type: 'mc',
      prompt:
        'Welke variant van zink wordt vaak toegepast voor **gebogen dakvormen** door zijn lagere uitzetting en betere vouwbaarheid?',
      options: ['Gewoon bladzink', 'Cortenstaal', 'Titaanzink', 'Eloxaalzink'],
      correctIndex: 2,
      explanation:
        'Titaanzink (STZ-metaal) bevat naast zink ook titaan, koper en aluminium. Het heeft een lagere uitzettingscoëfficiënt dan gewoon zink en kan in alle richtingen worden gevouwen — ideaal voor gebogen daken en complexe gevelvormen.',
    },
    {
      id: 'B8-2-d',
      toetstermCode: 'B.8.2',
      type: 'mc',
      prompt:
        'Wat is dé **moderne vervanger** voor loden vochtkeringen in spouwmuren?',
      options: [
        'Koperen folie',
        'Aluminium plaat',
        'EPDM-rubber of DPC-folie (LLDPE-kunststof)',
        'Bitumen-bestraling',
      ],
      correctIndex: 2,
      explanation:
        'Lood is duur, zwaar en giftig. EPDM (synthetisch rubber) en DPC-folie (LLDPE-kunststof) hebben lood vrijwel volledig vervangen voor vochtkering, dakdoorbrekingen en spouwfolie.',
    },
    {
      id: 'B8-2-e',
      toetstermCode: 'B.8.2',
      type: 'mc',
      prompt:
        'Waarom worden voor **ankers en doken** in steenconstructies (waar honderden jaren duurzaamheid wordt verlangd) vooral brons of RVS gebruikt en niet messing?',
      options: [
        'Messing is veel duurder',
        'Brons en RVS zijn aanzienlijk corrosiebestendiger dan messing onder langdurige natte omstandigheden',
        'Messing is alleen voor binnen toepasbaar',
        'Brons is zachter en daardoor makkelijker te verwerken',
      ],
      correctIndex: 1,
      explanation:
        'Brons (Cu + Sn) en RVS zijn vrijwel onaantastbaar in een buitenomgeving. Messing (Cu + Zn) tast langzaam af doordat zink kan uitlogen ("ontzinken"). Voor ankers/doken die eeuwen moeten meegaan kies je dus brons of RVS.',
    },
    {
      id: 'B8-2-f',
      toetstermCode: 'B.8.2',
      type: 'mc',
      prompt:
        'Een aluminium gevelplaat moet in een **zware omgeving** (kustklimaat) extra weersbestendig zijn. Welke oppervlaktebehandeling is geschikt?',
      options: [
        'Schooperen',
        'Sherardiseren',
        'PVDF-lak — fluorhoudende afwerking met extreme weersbestendigheid',
        'Cortenpatina laten ontstaan',
      ],
      correctIndex: 2,
      explanation:
        'PVDF (polyvinylideenfluoride) lak is fluorhoudend en zeer kleur- en weersbestendig. Standaard voor aluminium gevelplaten in zware omgevingen (kust, industrie). Schooperen en sherardiseren zijn zink-bewerkingen op staal.',
    },
    {
      id: 'B8-2-g',
      toetstermCode: 'B.8.2',
      type: 'mc',
      prompt:
        'Wat is **eloxeren** (anodiseren) van aluminium?',
      options: [
        'Een verflaag in een oven inbranden',
        'Onderdompelen in vloeibaar zink ter bescherming',
        'Elektrochemisch de natuurlijke oxidelaag op het aluminium verdikken, eventueel met kleur',
        'Een fluorhoudende kunststoflak aanbrengen',
      ],
      correctIndex: 2,
      explanation:
        'Bij eloxeren wordt het aluminium als anode in een elektrolyt gehangen; door de stroom groeit de aluminiumoxide-laag dik aan. Deze verdikte laag is taai, krasvast en kan in het bad gekleurd worden — standaard voor aluminium ramen en gevels.',
    },
    {
      id: 'B8-2-h',
      toetstermCode: 'B.8.2',
      type: 'mc',
      prompt:
        'Waarom is recycling van **aluminium** energetisch zo gunstig?',
      options: [
        'Aluminium hoeft alleen schoongespoeld te worden, niet omgesmolten',
        'Bij recycling is slechts ~5 % van de oorspronkelijke productie-energie nodig — het electrolyseproces uit bauxiet is veel duurder dan omsmelten',
        'Aluminium kan kosteloos worden gerecycled door verbranding',
        'Aluminium recyclen levert meer kg materiaal op dan oorspronkelijk werd verwerkt',
      ],
      correctIndex: 1,
      explanation:
        'Primair aluminium maken uit bauxiet vergt ~14 kWh/kg via elektrolyse. Omsmelten van schroot kost slechts ~5% daarvan. Daardoor is recycling milieukundig en economisch zeer aantrekkelijk — en is aluminium één van de meest gerecyclede metalen.',
    },
  ],

  terms: [
    {
      term: 'Non-ferro metaal',
      definition:
        'Metaal zonder of met zeer weinig ijzer — bijvoorbeeld zink, koper, lood, aluminium; roesten niet.',
    },
    {
      term: 'Zink',
      definition:
        'Blauwgrijs metaal voor goten, hemelwaterafvoer en daken; vormt beschermende patinalaag, levensduur 40-60 jaar.',
    },
    {
      term: 'Patina',
      definition:
        'Natuurlijke beschermende oxidehuid op zink, koper en lood die het materiaal afsluit van verdere corrosie.',
    },
    {
      term: 'Koper',
      definition:
        'Roodbruin metaal voor dakbedekking, lood­slabben en sieronderdelen; vormt na jaren groene patina (kopercarbonaat).',
    },
    {
      term: 'Lood',
      definition:
        'Zwaar, week metaal voor loodslabben, kilgoten en aansluitingen rond schoorstenen; gevoelig bij hoge temperaturen.',
    },
    {
      term: 'Aluminium',
      definition:
        'Licht metaal, vormt zelf een oxidehuid; gebruikt voor kozijnen, gevelbekleding en dakranden — coating verbetert duurzaamheid.',
    },
    {
      term: 'Anodiseren',
      definition:
        'Elektrochemische behandeling van aluminium die de natuurlijke oxidehuid verdikt; geeft duurzame, kleurbare afwerking.',
    },
    {
      term: 'Galvanische corrosie',
      definition:
        'Elektrochemische aantasting wanneer twee verschillende metalen elkaar raken in aanwezigheid van vocht — bijv. koper op zink → zink wordt aangetast.',
    },
    {
      term: 'Zink-titaan',
      definition:
        'Legering met koper en titanium die zink sterker en bewerkbaarder maakt; standaard voor moderne zinkwerken.',
    },
    {
      term: 'Loodslab',
      definition:
        'Strip van lood die als waterkering en aansluitvlak fungeert (rond schoorsteen, dakdoorvoer) — flexibel te plooien.',
    },
    {
      term: 'Hemelwater­afvoer (HWA)',
      definition:
        'Buis (zink, koper, kunststof) die regenwater van dak­goten afvoert naar riool of infiltratie.',
    },
    {
      term: 'Felsverbinding',
      definition:
        'Plooiverbinding tussen twee zinken of koperen banen — waterdicht zonder soldeer of kit.',
    },
  ],

  games: [
    {
      id: 'B8-gapfill-1', type: 'gapfill',
      title: 'Non-ferro metalen',
      text:
        '{{Messing}} is een legering van koper en zink. {{Brons}} is een legering van koper en tin. ' +
        'Op het oude oxidelaag­principe vormt {{koper}} een groene patina, terwijl {{zink}} grauwgrijs aankleurt. ' +
        '{{Aluminium}} mag niet in contact komen met verse mortel — die tast het aan.',
      distractors: ['gietijzer', 'cortenstaal', 'roestvast staal', 'nikkel'],
    },
    {
      id: 'B8-sort-1', type: 'sort',
      title: 'Plaats elk metaal in de juiste groep',
      categories: ['Zuiver metaal', 'Legering'],
      items: [
        { label: 'Aluminium', category: 'Zuiver metaal' },
        { label: 'Koper', category: 'Zuiver metaal' },
        { label: 'Zink', category: 'Zuiver metaal' },
        { label: 'Lood', category: 'Zuiver metaal' },
        { label: 'Nikkel', category: 'Zuiver metaal' },
        { label: 'Messing (Cu + Zn)', category: 'Legering' },
        { label: 'Brons (Cu + Sn)', category: 'Legering' },
      ],
    },
    {
      id: 'B8-matching-1', type: 'matching',
      title: 'Koppel metaal aan toepassing',
      pairs: [
        { left: 'Koper', right: 'Dakbedekking kerken, hemelwaterafvoer, leidingen' },
        { left: 'Lood', right: 'Vochtkering, slabben rond schoorsteen (max. 1,5 m)' },
        { left: 'Zink / titaanzink', right: 'Dakgoten, gevelbekleding, gebogen daken' },
        { left: 'Aluminium', right: 'Kozijnen, daktrim, gevelpanelen' },
        { left: 'Brons', right: 'Ankers, doken, ventielen — vrijwel onaantastbaar' },
        { left: 'Messing', right: 'Hang- en sluitwerk, kranen, scharnieren' },
      ],
    },
  ],
}
