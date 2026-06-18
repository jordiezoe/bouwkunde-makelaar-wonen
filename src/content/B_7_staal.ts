import type { Topic } from '../types/content'

const FIG = '/figs/B_7'
const SRC_M = 'Lesboek hfd. 10'
const SRC_C = 'Lesboek hfd. 14'

export const B_7_staal: Topic = {
  code: 'B.7',
  section: 'B',
  title: 'Staal',
  chapterRef: 'Lesboek hoofdstukken 10 en 14',
  blurb:
    'Soorten staal (constructiestaal, gietstaal, RVS, cortenstaal), warm- en koudgewalste profielen (HEA/B/M, IPE, UNP, L, kokers, buizen), bijzondere liggers (QTH-ligger, raatligger), verbindingen (bouten, lassen, klinknagels) en bescherming tegen corrosie en brand (verven, poedercoaten, verzinken, sherardiseren, schooperen, brandwerend).',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · Soorten staal: constructiestaal, gietstaal, RVS en cortenstaal',
      toetstermCodes: ['B.7.1'],
      body: `
Staal is een **ijzer-koolstof-legering** waarvan het koolstofgehalte de eigenschappen bepaalt.

| Materiaal | Koolstof | Eigenschap |
|---|---|---|
| Ruwijzer | 4–5 % | broos, niet bruikbaar |
| Gietijzer | ~3 % | hard maar broos — putdeksels, rioolbuizen, hekwerken |
| **Constructiestaal** | 0,1–0,2 % | taai, smeed- en lasbaar — bouw |
| Gereedschapsstaal | ~1 % | zeer hard — boren, frezen |

### Constructiestaal
Het **standaardmateriaal** voor stalen bouwconstructies. Eigenschappen:
- Gelijkmatig van samenstelling, in **alle richtingen even sterk**
- Koud én warm vervormbaar
- Lineaire uitzettingscoëfficiënt **λ = 12 × 10⁻⁶ /K** — vrijwel gelijk aan beton (daarom werkt gewapend beton)
- Aanduiding volgens Europese norm: **Fe + getal + lettercode**, bv. *Fe 360* of *Fe 510 D* (minimumtreksterkte 510 N/mm², codeletter voor brossebreukweerstand)

### Gietstaal
Vloeibaar staal **in een mal gegoten** — geschikt voor onregelmatige, ingewikkelde vormen die niet gewalst of geperst kunnen worden. Toepassingen: knooppuntelementen in vakwerken, scheepsschroeven, machinedelen.

> Niet te verwarren met **gietijzer**: gietijzer heeft veel meer koolstof (~3%) en is broos; gietstaal is taai.

### Roestvast staal (RVS)
Legering van staal met **chroom en nikkel**; klassieke samenstelling **18-8** (18% Cr + 8% Ni). Het chroom vormt een **doorzichtig chroomoxidehuidje** dat zichzelf herstelt zodra het beschadigd raakt — daarom is RVS vrijwel onaantastbaar. Toepassingen: aanrechtbladen, sanitair, leidingen, **trapleuningen**, spouwankers, balustrades, gevelelementen.

### Cortenstaal (weervast staal)
Legering van staal met **koper, nikkel, silicium en mangaan**. Vormt een **roestbruine patinalaag** die verdere oxidatie afsluit — de roest is hier de bescherming. Decoratief én duurzaam; veel gebruikt voor **gevelbekleding en kunstwerken** (bijv. Infoversum in Groningen).

### Aantasting van staal
Onbeschermd staal roest sterk. Belangrijkste vorm: **elektrochemische corrosie**. Bij contact tussen twee verschillende metalen in een vochtige omgeving lost het minst edele metaal op ('batterijeffect'). De **edelheidsreeks** (edel → onedel): brons → koper/messing → lood → rvs → tin → nikkel → **ijzer/staal** → chroom → verzinkt staal → aluminium → zink.

**Vuistregel**: gebruik altijd bevestigingsmiddelen van **hetzelfde metaal** als de constructie, of plaats een **rubber-/kunststofscheidingsring** tussen verschillende metalen om contactcorrosie te voorkomen.
      `.trim(),
      images: [
        {
          src: `${FIG}/rvs-trapleuning.jpg`,
          caption: 'Trapleuning van roestvast staal — chroomoxidehuidje is zelfherstellend, dus geen onderhoud nodig.',
          source: SRC_M,
          width: 'md',
        },
        {
          src: `${FIG}/cortenstaal.jpg`,
          caption: 'Cortenstaal-constructie — de patinalaag (roestbruin) sluit verdere oxidatie af; toegepast voor gevelbekleding en kunst.',
          source: SRC_M,
          width: 'md',
        },
        {
          src: '/figs/fotos/stalen-spant.jpg',
          caption:
            'Een stalen draagconstructie in aanbouw: vakwerkspanten en gordingen vormen samen het skelet. Staal overspant grote afstanden bij een licht eigen gewicht.',
          source: 'Foto: Marius Rotar · Wikimedia Commons (CC BY-SA 4.0)',
          width: 'lg',
        },
      ],
    },

    {
      heading: '2 · Walsprofielen: HEA, HEB, HEM, IPE, UNP, L, kokers en buizen',
      toetstermCodes: ['B.7.2'],
      body: `
Bij **warmwalsen** wordt roodgloeiend staal door walsen op profiel geperst. Hoeken zijn scherp, profielen zwaar. Bij **koudwalsen** wordt staalplaat onder normale temperatuur tot vorm geperst — hoeken zijn afgerond, profielen lichter (C, koker, U, hoek, Z).

### Belangrijkste warmgewalste profielen

**Brede-flens (HE)-profielen — symmetrisch, vrijwel even hoog als breed**
- **HEA** — *lichte* uitvoering: dunner lijf en flens
- **HEB** — *standaard*: gemiddelde wanddikte
- **HEM** — *zware*: extra dikke flenzen en lijf

HE-profielen zijn **knikvast** omdat ze in twee richtingen vrijwel even stijf zijn. **Standaard voor kolommen** in staalconstructies. Aanduiding: profielcode + getal (= profielhoogte in mm), bv. *HEB 180*.

**IPE — I-profiel met parallelle flenzen, hoger dan breed**
Veel hoger dan breed → optimaal voor **liggers** (vooral op buiging belast in één richting). Vervangt het oude **INP-profiel** (taps lopende flenzen).

**UNP / UPE — U-profielen**
- *UNP*: taps lopende flenzen — vergt een **hellingplaatje** bij oplegging op een ander profiel
- *UPE*: parallelle flenzen — eenvoudig op te leggen zonder hellingplaatje
Toegepast als **randligger, latei, dragend element in samengestelde constructies**.

**L-staal (hoekstaal)**
Een gelijk- of ongelijkbenig hoekprofiel. Aanduiding *L 100 × 80 × 8* (benen 100 en 80 mm, dikte 8 mm). Voor lateien (verzinkt L 100 × 80 × 8 op bouwvilt in de lintvoeg), bevestigingsbeugels, schoren en windverbanden.

**Kokers (rechthoekig of vierkant)**
Gesloten profiel — goed bestand tegen torsie en knik in alle richtingen. Voor **kolommen**, esthetische zichtconstructies, frames. Wandvuller eenvoudig.

**Buizen (rond)**
Rond profiel — optimale knikweerstand in alle richtingen, esthetisch slank. Voor **kolommen en vakwerkconstructies**.

### Begrippen die je moet kennen

- **Kniklengte**: de effectieve lengte die een kolom 'voelt' bij knikbelasting. Hoe groter, hoe gevoeliger voor knik. Een momentvast verbonden kolom heeft een **kortere** kniklengte dan een scharnierend opgelegde kolom (de inklemming voorkomt zijwaartse uitwijking aan de top).
- **Windverband**: schuine staven of diagonalen in een staalskelet die **driehoekige veld**en creëren. Een rechthoek is vervormbaar, een driehoek niet → windverbanden stabiliseren de constructie tegen wind, scheve belasting en aardbeving.
- **Constructieve knoop**: het punt waar twee of meer staaf-elementen samenkomen (bv. kolom-ligger, ligger-windverband). De vormgeving van de knoop (scharnierend, momentvast) bepaalt het krachtsverloop.
- **Portaal**: twee staanders (kolommen) + een ligger erop — een 'omgekeerde U', soms met schuine ligger (gootportaal of zadelportaal). Klassieke vorm voor hallen en industrieel werk.
      `.trim(),
      images: [
        {
          src: `${FIG}/warmgewalste-profielen.jpg`,
          caption: 'Warmgewalste profielen: INP, IPE, UNP, UPE, HEA/HEB/HEM, L, Z, T. Het getal achter de code is de profielhoogte in mm.',
          source: SRC_M,
          width: 'lg',
        },
        {
          src: `${FIG}/koudgevormde-profielen.jpg`,
          caption: 'Koudgevormde profielen uit dunne staalplaat: C, koker, U, hoek, Z. Hoeken zijn afgerond.',
          source: SRC_M,
          width: 'md',
        },
        {
          src: `${FIG}/unp-upe-oplegging.jpg`,
          caption: 'Verschil oplegging UNP (links, met hellingplaatje door taps lopende flenzen) en UPE (rechts, parallelle flenzen — vlak oplegvlak).',
          source: SRC_M,
          width: 'md',
        },
        {
          src: `${FIG}/balk-aanduiding.jpg`,
          caption: 'Aanduiding van stalen balken op een tekening: profielcode + hoogte (bv. HEB 180). Voor staafstaal: Ø + getal (rond), □ + getal (vierkant), breedte × dikte (rechthoek).',
          source: SRC_M,
          width: 'md',
        },
        {
          src: `${FIG}/stalen-spant.jpg`,
          caption: 'Stalen spant in de woningbouw — voorbeeld van een portaal-constructie met momentvaste hoekverbindingen.',
          source: SRC_C,
          width: 'md',
        },
        {
          src: '/figs/tekeningen/staalprofielen.svg',
          caption:
            'De gangbare walsprofielen in doorsnede: IPE (smalle I), HEA/HEB (brede H), UNP (U), L (hoek), koker en buis. Bij liggers zit het materiaal vooral in de flenzen, ver van de neutrale lijn.',
          source: 'Eigen tekening',
          width: 'full',
        },
      ],
    },

    {
      heading: '3 · Raatligger en QTH-ligger',
      toetstermCodes: ['B.7.3'],
      body: `
Twee bijzondere liggers die uit standaard walsprofielen worden gemaakt; herkenbaar aan het oog.

### Raatligger
Een **raatligger** wordt gemaakt door een **I-profiel of HE-profiel zigzag door te zagen**, de twee helften over elkaar te schuiven en weer aan elkaar te lassen. Het resultaat: een ligger met **honingraat-/raatvormige gaten** in het lijf en een veel grotere profielhoogte dan het oorspronkelijke profiel.

**Voordelen**:
- Veel **meer profielhoogte → grotere weerstand tegen doorbuiging**
- **Gelijk staalvolume** als het oorspronkelijke profiel → economisch
- De gaten in het lijf geven ruimte voor **leidingdoorvoeren** (ventilatie, kabels) zonder dat de constructie hoeft te worden verzwakt
- Estetisch herkenbaar — wordt vaak zichtbaar in zichtconstructies toegepast

**Toepassingen**: dakliggers, vrije overspanningen bij hallen, parkeergarages, kantoorvloeren.

### QTH-ligger (gelaste I-ligger)
Een **QTH-ligger** (Quality Tailored Heavy) is een uit losse **plat gewalste platen** **gelaste I-ligger**. Twee horizontale flensplaten + één vertikale lijfplaat worden onderling met **hoeklassen** verbonden tot een I-profiel op maat.

**Voordelen**:
- **Op maat** vervaardigd — élke hoogte en flensafmeting mogelijk, ook groter dan standaard walsprofielen
- Voor **extreem grote overspanningen of zware belastingen** waarvoor geen geschikt walsprofiel bestaat (bv. industriële kraanbanen, grote hallen, bruggen)
- Combineert hoge buigingsstijfheid met geoptimaliseerde flens-/lijfverhouding

**Herkenning**: de lange hoeklassen langs flens-en-lijf zijn aan de uiteinden duidelijk zichtbaar; in het lijf zijn vaak **verstijvers** (verticale strippen) ingelast.

> Geheugensteun: **raatligger = honingraat-gaten** (lichter, leidingdoorvoer); **QTH = gelast op maat** (zwaarder, geen gaten).
      `.trim(),
      images: [
        {
          src: `${FIG}/raatligger.jpg`,
          caption: 'Raatligger — een I-profiel zigzag doorgezaagd en met de twee helften verschoven weer gelast. Veel meer hoogte zonder extra materiaal.',
          source: SRC_M,
          width: 'md',
        },
        {
          src: `${FIG}/raatligger-detail.jpg`,
          caption: 'Raatligger in toepassing — herkenbaar aan de honingraat-/zeshoekige gaten in het lijf. Praktisch voor leidingdoorvoer.',
          source: SRC_C,
          width: 'md',
        },
      ],
    },

    {
      heading: '4 · Verbindingen: bouten, lassen en klinknagels',
      toetstermCodes: ['B.7.4'],
      body: `
Verbindingen bepalen of een staalconstructie **scharnierend** of **momentvast** is en zijn daarmee bepalend voor het krachtsverloop.

### Bouten (modern standaard)
Bouten met metrische schroefdraad, bv. **M8 × 80** (Ø 8 mm, lengte 80 mm). Soorten:
- **Gewone bouten**: voor normale, niet hoog belaste verbindingen
- **Voorspanbouten** (HV-bouten): worden met een momentsleutel aangedraaid tot een **gecontroleerde spanning** → de plaatdelen klemmen extra. De krachtoverdracht gaat dan via **wrijving** in plaats van afschuiving van de bout — voor zware constructies en wisselbelasting (bruggen, kraanbanen).

Een **scharnierende verbinding** (typisch **2 bouten**) kan alleen trek- en drukkrachten opnemen — geen moment. Een **momentvaste verbinding** (typisch **4 of meer bouten**, of gelast) kan ook buigend moment overdragen.

Bouten kunnen vooraf worden **verzinkt** (geen probleem). **Niet lassen** aan verzinkt staal — zinkslakken verzwakken de las.

### Lassen (in werkplaats: standaard methode)
**Elektrisch lassen** is de moderne hoofdmethode. Twee lasvormen:

- **Stompe las** (*butt weld*) — twee plaatdelen liggen in **één vlak** tegenover elkaar; de las vult de spleet tussen de uiteinden. Voor lengten van eenzelfde profiel, kopplaten, plaat-aan-plaat.
- **Hoeklas** (*fillet weld*) — twee plaatdelen staan **haaks** of in een hoek op elkaar; de las legt zich in de inwendige hoek. Voor flens-lijf-verbindingen, knoopplaten, stijfheidsschotten.

Lassen gebeurt **bij voorkeur in de werkplaats** (gecontroleerde omstandigheden, posities, vochtigheid). **Niet op gegalvaniseerd staal** — zink in de las leidt tot brosse breuk. Lasconstructies worden ná het lassen tegen corrosie beschermd.

### Klinknagels
**Historisch** veel gebruikt (oude bruggen, Eiffeltoren) — een gloeiendhete stalen pen wordt door de gaten gestoken en aan beide kanten breedgeslagen, klemt door krimp het materiaal samen. Tegenwoordig vrijwel **verouderd** in dragend werk, vervangen door bouten en lassen.

Wel nog modern: **popnagels** (blind klinken voor dun plaatwerk) en **schietnagels** (snelle bevestiging in dun staal en in beton).

### Voetplaten en stekankers
Onder een kolom een **voetplaat** (stalen plaat), die op **stelmoeren** op ingestorte **ankerbouten** of **stekankers** in de fundering staat. De ruimte onder de voetplaat wordt met **krimpvrije specie** volgezet. Hiermee wordt de staalconstructie krachten-overdragend op de betonfundering aangesloten.

### Windverband — montage tijdens opbouw
Tijdens de montage van een staalskelet zijn de meeste kolom-ligger-knopen nog scharnierend. Zonder **schoren of windverbanden** zou het skelet onder eigen gewicht en wind in elkaar zakken. Vandaar: tijdens montage altijd diagonalen (tijdelijk of permanent) inbrengen om driehoekige, niet-vervormbare velden te maken.
      `.trim(),
      images: [
        {
          src: `${FIG}/scharnierend.jpg`,
          caption: 'Scharnierende kolomvoet-verbinding (2 bouten) — kan trek- en drukkrachten opnemen, maar geen moment.',
          source: SRC_C,
          width: 'md',
        },
        {
          src: `${FIG}/momentvast.jpg`,
          caption: 'Momentvaste kolomvoet-verbinding (4 bouten of meer) — kan ook een buigend moment in de voet opnemen.',
          source: SRC_C,
          width: 'md',
        },
      ],
    },

    {
      heading: '5 · Staalbescherming: corrosie en brand',
      toetstermCodes: ['B.7.5'],
      body: `
Onbeschermd staal **roest** in een vochtig milieu en **verliest sterkte boven 400 °C**. Daarom moet staal in de bouw bijna altijd worden beschermd tegen **corrosie** én tegen **brand**.

### Bescherming tegen corrosie

**Verven en lakken**
Een **primer** (roestwerend, vaak met zink- of aluminiumpoeder) als grondlaag, daarover een afwerklaag. Klassieke methode, redelijk goedkoop, regelmatig onderhoud nodig (overschilderen). De **walshuid** (blauwzwarte oxidelaag uit de fabriek) moet vooraf verwijderd worden — buitenopslag versnelt dat.

**Poedercoaten**
Het werkstuk wordt **elektrostatisch** met poederlak bestoven en daarna in een oven gesmolten — vormt een gesloten, glad en kleurvast laagje. Milieuvriendelijker dan natlakken (geen oplosmiddelen), veel toegepast op meubels, hekken, leuningen, lichte staalconstructies.

**Verzinken** — de standaard duurzame industriële methode. De zinklaag werkt **dubbel**:
- *passief*: vormt een fysieke afsluiting tegen vocht en zuurstof
- *actief* (kathodische bescherming): zink ligt onedeler dan staal in de edelheidsreeks → bij een krasje corrodeert het **zink eerst**, niet het onderliggende staal; verspreiding van roest wordt gestopt.

Methoden van verzinken:
- **Thermisch / vuurverzinken** (*hot-dip*) — het werkstuk wordt in een **bad van vloeibaar zink** (~450 °C) gedompeld. Resultaat: een **gladde, dikke laag** met karakteristieke **zinkbloemen**. Niet meer te buigen na verzinken. **De industriestandaard** voor staalconstructies, leuningen, hekwerken.
- **Elektrolytisch verzinken** (*galvaniseren*) — het werkstuk hangt als kathode in een **zinkoplossing**; door stroom slaat zink neer op het oppervlak. **Dunne, glanzende laag**. Voor kleine onderdelen die er strak uit moeten zien (schroeven, beslag). De enige echte *galvaniseermethode*.
- **Sherardiseren** — kleine voorwerpen worden in een **draaiende trommel met zinkdamp en kwartszand** verhit; de zinkdamp slaat dunne, gelijkmatig op. Voor **hang- en sluitwerk** (schroeven, scharnieren, kleine beslag).
- **Schooperen / zinkspuiten** — het werkstuk wordt met **gespoten gesmolten zink** bedekt. Resultaat: ruw oppervlak — moet meestal worden afgedekt met verf. Voor reparatie of grote, niet-dipbare delen.
- **Sendzimir-proces** — continu staalplaat door een zinkbad — voor **dakplaat, gevelplaat, panelen**.
- **Duplex-systeem** — *thermisch verzinkt + geschilderd* — voor extreem agressieve omgevingen (kustgebied, industrie).

### Bescherming tegen brand
Staal verliest sterkte snel boven 400 °C; een onbeklede stalen kolom bezwijkt **al na 20–30 minuten** in een gewone gebouwbrand. Bij verhitting **zet staal in alle richtingen uit** (~1,2 mm/m per 100 °C) — verbindingen kunnen scheuren.

Maatregelen voor dragende staalconstructies:
- **Brandwerende verf** (intumescent) — schuimt boven ~200 °C op tot een isolerend kussen. Werkt tot **30–90 min** afhankelijk van de dikte. Esthetisch (slank profiel zichtbaar).
- **Spuitmortel / spuitcement** — direct op het profiel gespoten; ruw maar zeer effectief.
- **Inkisten en aangieten met beton** — kolom in bekisting, vol met beton — geeft een **gewapend staal-beton-kolom**; zeer hoge brandwerendheid.
- **Omhullen met steengaas en stukadoren** — klassieke methode, voldoende voor 60–90 min.
- **Inpakken met isolatie + gipskartonplaat** — eenvoudige droogbouwmethode, 30–90 min.
- **Cellenbetonplaten** rondom het profiel.

Verbindingen, doorvoeren en de aansluiting kolom-ligger vereisen extra aandacht — dat zijn de zwakste punten in brand.

### Belangrijk bij combinaties
- **Boutverbinding** mag voorgalvaniseerd zijn → eerst verzinken, dan monteren
- **Lasverbinding** moet **na het lassen** worden beschermd — niet verzinkt voor lassen (zinkslakken in las verzwakken!)
- Voor gemengd werk: **Duplex-systeem** of bouten in een lasconstructie en pas daarna behandelen
      `.trim(),
      images: [
        {
          src: `${FIG}/brandwerend.jpg`,
          caption: 'Brandwerende bekleding van een stalen kolom: links cellenbeton-platen, rechts bespoten mortel — twee veelgebruikte methoden om het staal onder 400 °C te houden.',
          source: SRC_C,
          width: 'md',
        },
      ],
    },
  ],

  toetstermen: [
    {
      code: 'B.7.1',
      text: 'Herkent vormen en soorten van staal, zoals gietstaal, RVS en constructiestaal.',
      niveau: 'BT2',
      bloom: 'Kennis',
      metDrawing: true,
    },
    {
      code: 'B.7.2',
      text: 'Herkent en legt de toepassingen (kolommen, windverbanden, kniklengte, constructieve knopen) van de verschillende stalen walsprofielen HE-A, HE-B, HE-M, IPE, UNP, L-stalen, kokers en buizen uit.',
      niveau: 'BT2',
      bloom: 'Begrip',
      metDrawing: true,
    },
    {
      code: 'B.7.3',
      text: 'Herkent de verschillende staalconstructie-onderdelen QTH-ligger en raatliggers.',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
    {
      code: 'B.7.4',
      text: 'Herkent de volgende samenstellende delen en verbindingen van een staalconstructie en een staalskelet: bouten, lassen (hoek- en stompe las) en klinknagels.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
    {
      code: 'B.7.5',
      text: 'Benoemt en herkent de wijze van staalbescherming: verven/lakken, poedercoaten, verzinken (thermisch, elektrolytisch en sherardiseren), zinkspuiten/schooperen en brandwerend behandelen.',
      niveau: 'BT2',
      bloom: 'Kennis',
      metDrawing: true,
    },
  ],

  questions: [
    // === B.7.1 — Soorten staal (5) ===
    {
      id: 'B7-1-a',
      toetstermCode: 'B.7.1',
      type: 'mc',
      prompt:
        'Wat is het wezenlijke verschil tussen **constructiestaal** en **gietijzer**?',
      options: [
        'Gietijzer is sterker en wordt gebruikt voor dragende constructies',
        'Constructiestaal is taai (laag koolstof), gietijzer is broos',
        'Constructiestaal wordt gegoten, gietijzer gewalst',
        'Gietijzer is een legering met chroom en nikkel',
      ],
      correctIndex: 1,
      explanation:
        'Het koolstofgehalte bepaalt de eigenschappen: bij ~3% C is gietijzer hard maar broos (putdeksels, rioolbuizen). Bij 0,1–0,2% C is constructiestaal taai, las- en smeedbaar — geschikt voor dragende constructies.',
    },
    {
      id: 'B7-1-b',
      toetstermCode: 'B.7.1',
      type: 'mc',
      prompt:
        'Waarom is **roestvast staal (RVS)** vrijwel onaantastbaar?',
      options: [
        'Het is zo hard dat vocht er niet in dringt',
        'Door de toevoeging van koolstof aan het staal',
        'Een zelfherstellend chroomoxidehuidje door chroom-legering',
        'Door een buitenste laklaag die in de fabriek wordt aangebracht',
      ],
      correctIndex: 2,
      explanation:
        'RVS heeft ~18% chroom; het chroom reageert met zuurstof tot een doorzichtig oxide dat het verdere oppervlak afsluit. Krast je erin, dan vormt zich op de wond direct opnieuw zo’n laagje — zelfherstellend.',
    },
    {
      id: 'B7-1-c',
      toetstermCode: 'B.7.1',
      type: 'mc',
      prompt:
        'Welke toepassing is **typisch voor cortenstaal**?',
      options: [
        'Sanitair en aanrechtbladen',
        'Constructief kolommenwerk in een kantoor',
        'Decoratieve gevelbekleding en kunst',
        'Loodvervanger voor dakdoorvoeren',
      ],
      correctIndex: 2,
      explanation:
        'Cortenstaal vormt een roestbruine patinalaag die verdere oxidatie stopt. De roest is hier zowel bescherming als gewenst uiterlijk — vandaar gevelbekleding (zoals het Infoversum in Groningen) en kunstwerken.',
    },
    {
      id: 'B7-1-d',
      toetstermCode: 'B.7.1',
      type: 'mc',
      prompt:
        'Wat is **gietstaal**?',
      options: [
        'Een verouderde naam voor gietijzer',
        'Vloeibaar staal gegoten in een mal, voor vrije vormen',
        'Een legering van staal met aluminium en magnesium',
        'Staal dat door koudwalsen vorm krijgt',
      ],
      correctIndex: 1,
      explanation:
        'Gietstaal is vloeibaar staal dat in een mal gegoten wordt — geschikt voor ingewikkelde vormen die door walsen niet mogelijk zijn (knooppunten in vakwerken, machinedelen). Niet te verwarren met gietijzer (~3% C, broos).',
    },
    {
      id: 'B7-1-e',
      toetstermCode: 'B.7.1',
      type: 'mc',
      prompt:
        'Wat moet je doen als je een **roestvast stalen** spouwanker gebruikt in een **aluminium** kozijn in een vochtige omgeving?',
      options: [
        'Niets — RVS is universeel verenigbaar met alle metalen',
        'De twee metalen direct met staaldraad aan elkaar binden voor goede grond',
        'Een scheidingsring plaatsen tegen contactcorrosie',
        'Het RVS extra verven',
      ],
      correctIndex: 2,
      explanation:
        'Bij contact tussen twee verschillende metalen in een vochtig milieu treedt contactcorrosie op — het minst edele lost op. Aluminium ligt veel onedeler dan RVS. Plaats altijd een isolerende ring (rubber, kunststof) tussen om dit te voorkomen.',
    },

    // === B.7.2 — Walsprofielen + toepassingen (6) ===
    {
      id: 'B7-2-a',
      toetstermCode: 'B.7.2',
      type: 'mc',
      prompt:
        'Welk profiel wordt **standaard als kolom** in staalskeletbouw toegepast?',
      options: [
        'IPE — I-profiel met parallelle flenzen, hoger dan breed',
        'UNP — U-profiel met taps lopende flenzen',
        'HE-profiel (HEA/HEB/HEM), vrijwel even hoog als breed',
        'L-staal — gelijkbenig hoekprofiel',
      ],
      correctIndex: 2,
      explanation:
        'HE-profielen zijn symmetrisch en bijna even hoog als breed, dus in twee richtingen vrijwel even stijf → knikvast in alle richtingen. Daarom dé standaard voor kolommen. IPE is veel hoger dan breed — typisch voor liggers (eenrichtingsbelasting).',
    },
    {
      id: 'B7-2-b',
      toetstermCode: 'B.7.2',
      type: 'mc',
      prompt:
        'Wat betekent de **20** in de aanduiding **HEB 200**?',
      options: [
        'De flensdikte in mm',
        'De wanddikte van het lijf in mm',
        'De profielhoogte in cm',
        'De profielhoogte in mm: het profiel is 200 mm hoog',
      ],
      correctIndex: 3,
      explanation:
        'Het getal bij een HE/IPE/UNP-aanduiding is altijd de **profielhoogte in mm**. HEB 200 is dus 200 mm hoog (en bij HEB ongeveer net zo breed, ~200 mm).',
    },
    {
      id: 'B7-2-c',
      toetstermCode: 'B.7.2',
      type: 'mc',
      prompt:
        'Waarom zit er bij oplegging van een **UNP**-profiel doorgaans een **hellingplaatje** onder, en bij UPE niet?',
      options: [
        'UNP is zwaarder en heeft daarom extra steun nodig',
        'UNP heeft tapse flenzen, UPE parallelle flenzen',
        'UNP is voor binnentoepassing en UPE voor buiten',
        'UNP is alleen koudgewalst, UPE alleen warm',
      ],
      correctIndex: 1,
      explanation:
        'UNP heeft taps (schuin aflopende) flenzen — als je het op een vlakke oplegging zet, raakt het maar over één lijn aan. Het hellingplaatje (helling 8%) maakt het oplegvlak vlak. UPE heeft parallelle flenzen en legt vlak op.',
    },
    {
      id: 'B7-2-d',
      toetstermCode: 'B.7.2',
      type: 'mc',
      prompt:
        'Wat is een **windverband** in een staalskelet?',
      options: [
        'Een serie ankerbouten die de constructie aan de fundering verankert',
        'Schuine diagonalen die velden in driehoeken verdelen',
        'Een verticale verbinding tussen meerdere verdiepingen',
        'Een speciale las tussen kolom en ligger',
      ],
      correctIndex: 1,
      explanation:
        'Een rechthoek is vervormbaar (parallellogram), een driehoek niet. Windverbanden zijn diagonalen die rechthoekige velden in driehoeken splitsen en zo het skelet stabiel maken tegen wind en horizontale belasting.',
    },
    {
      id: 'B7-2-e',
      toetstermCode: 'B.7.2',
      type: 'mc',
      prompt:
        'Wat bedoelt men met **kniklengte** van een kolom?',
      options: [
        'De totale lengte van het profiel zoals geleverd door de fabrikant',
        'De effectieve lengte over de hoogte van een verdieping waarin de kolom niet ondersteund is',
        'De effectieve lengte van de kolom bij knik',
        'De lengte waarover de kolom een buigend moment kan opnemen',
      ],
      correctIndex: 2,
      explanation:
        'Kniklengte is een rekenkundige effectieve lengte: hoe stijver de uiteinden ingeklemd, hoe korter de kniklengte. Een momentvast bevestigde kolom heeft een veel kortere kniklengte (en is dus minder knikgevoelig) dan een scharnierend opgelegde.',
    },
    {
      id: 'B7-2-f',
      toetstermCode: 'B.7.2',
      type: 'mc',
      prompt:
        'Voor een **dakligger** in de woningbouw met overspanning ~6 m: welk profiel is doorgaans het **logischst**?',
      options: [
        'HEB 200 — symmetrisch, ideaal voor knik',
        'IPE 240 — hoger dan breed, optimaal voor buiging',
        'L 80 × 80 × 8 — gelijkbenig hoekstaal',
        'Vierkante koker 100 × 100 × 4',
      ],
      correctIndex: 1,
      explanation:
        'Een dakligger wordt vooral op buiging in één richting belast. IPE is hoger dan breed → groot weerstandsmoment in de belaste richting. Dat is veel efficiënter dan een symmetrisch HE-profiel (geschikt als kolom) of een hoek/koker.',
    },

    // === B.7.3 — QTH en raatligger (3) ===
    {
      id: 'B7-3-a',
      toetstermCode: 'B.7.3',
      type: 'mc',
      prompt:
        'Hoe wordt een **raatligger** vervaardigd?',
      options: [
        'Door drie losse platen — flenzen en lijf — aan elkaar te lassen',
        'Een I-profiel zigzag zagen, verschuiven en weer lassen',
        'Door een breedflensprofiel om de lengte-as in tweeën te zagen en met platen te verbinden',
        'Door een kokerprofiel in te zagen en open te buigen',
      ],
      correctIndex: 1,
      explanation:
        'Een raatligger ontstaat door een I- of HE-profiel zigzag door te zagen, de twee helften over elkaar te schuiven en weer aan elkaar te lassen — meer hoogte, hexagonale gaten in het lijf, gelijk staalvolume.',
    },
    {
      id: 'B7-3-b',
      toetstermCode: 'B.7.3',
      type: 'mc',
      prompt:
        'Wat is een **bijkomend praktisch voordeel** van de gaten in een raatligger?',
      options: [
        'De gaten verlagen het materiaalgebruik',
        'De gaten geven ruimte voor leidingdoorvoeren',
        'Door de gaten kan het profiel beter buigen',
        'De gaten verbeteren de brandwerendheid',
      ],
      correctIndex: 1,
      explanation:
        'De gaten ontstaan door de zigzag-zaagsnede, niet door materiaal weg te halen. Een handig nevenresultaat is dat installatieleidingen door de gaten kunnen lopen — geen extra sparingen, lagere plafondhoogte mogelijk.',
    },
    {
      id: 'B7-3-c',
      toetstermCode: 'B.7.3',
      type: 'mc',
      prompt:
        'Wat is een **QTH-ligger**?',
      options: [
        'Een raatligger met extra verstijvingen in de gaten',
        'Een op maat gelaste I-ligger uit losse platen',
        'Een geprefabriceerd betonelement op een stalen kern',
        'Een holronde staalbalk uit één gewalst stuk',
      ],
      correctIndex: 1,
      explanation:
        'QTH-liggers zijn op maat gelast uit platen: twee flensplaten + één lijfplaat. Toepassing waar standaard walsprofielen tekortschieten (industriële kraanbanen, grote hallen, bruggen). Te onderscheiden van een raatligger (zigzag-gezaagd I-profiel).',
    },

    // === B.7.4 — Verbindingen (5) ===
    {
      id: 'B7-4-a',
      toetstermCode: 'B.7.4',
      type: 'mc',
      prompt:
        'Een kolomvoet met **2 bouten** is constructief gezien:',
      options: [
        'Scharnierend — kan trek- en drukkrachten opnemen, maar geen buigend moment',
        'Momentvast — kan alle krachten en momenten overdragen',
        'Een tijdelijke montageoplossing, definitief altijd vervangen door lassen',
        'Onveilig en niet toegestaan in de bouw',
      ],
      correctIndex: 0,
      explanation:
        'Twee bouten op één lijn werken als scharnier: de kolom kan om de boutas roteren. Trek- en drukkrachten worden wel opgenomen, maar een buigend moment niet. Vier of meer bouten verspreiden de krachten zodanig dat een moment wél kan worden overgedragen.',
    },
    {
      id: 'B7-4-b',
      toetstermCode: 'B.7.4',
      type: 'mc',
      prompt:
        'Wat is een **hoeklas**?',
      options: [
        'Een las tussen twee plaatdelen die in hetzelfde vlak liggen (kop aan kop)',
        'Een las in de inwendige hoek tussen twee plaatdelen',
        'Een rondgaande las langs de hele omtrek van een profiel',
        'Een las die alleen wordt toegepast bij verzinkt staal',
      ],
      correctIndex: 1,
      explanation:
        'Hoeklas = las in de inwendige hoek tussen twee delen die haaks op elkaar staan, bv. een flens op een lijf. Stompe las = las tussen twee kop-aan-kop in één vlak liggende plaatdelen.',
    },
    {
      id: 'B7-4-c',
      toetstermCode: 'B.7.4',
      type: 'mc',
      prompt:
        'Waarom mag je **gegalvaniseerd (verzinkt) staal niet lassen**?',
      options: [
        'Het zink valt eraf en moet eerst worden afgekrabd',
        'Zinkslakken in de las verzwakken de verbinding',
        'De las hardt niet goed uit op verzinkt oppervlak',
        'Het is geen kwestie van techniek maar van esthetiek — de zinklaag wordt zwart',
      ],
      correctIndex: 1,
      explanation:
        'Bij het lassen verdampt zink en blijft in de las achter als zinkslakken; die verzwakken de las en geven kans op brosse breuk. Daarom: eerst alles lassen, daarna verzinken. Voorgalvaniseerd staal alleen met bouten of klinknagels verbinden.',
    },
    {
      id: 'B7-4-d',
      toetstermCode: 'B.7.4',
      type: 'mc',
      prompt:
        'Wat is een **voorspanbout** (HV-bout)?',
      options: [
        'Een bout die alleen op trek wordt belast',
        'Een voorgespannen bout: krachtoverdracht via wrijving',
        'Een bout die vooraf in de fabriek wordt voorgespannen voordat deze wordt geleverd',
        'Een bout met dubbele moer voor extra zekerheid',
      ],
      correctIndex: 1,
      explanation:
        'Bij een voorspanbout zorgt de hoge aandraaispanning ervoor dat de plaatdelen tegen elkaar klemmen. De krachten worden dan via wrijving tussen die platen overgedragen — robuust en geschikt voor wisselbelasting. Standaardbouten dragen via afschuiving van de boutsteel.',
    },
    {
      id: 'B7-4-e',
      toetstermCode: 'B.7.4',
      type: 'mc',
      prompt:
        'Klinknagels worden in moderne staalconstructies:',
      options: [
        'Nog dagelijks toegepast als standaardmethode',
        'Verboden vanwege milieuwetgeving',
        'Vervangen door bouten en lassen',
        'Alleen toegepast voor zichtwerk waar bouten te lelijk zijn',
      ],
      correctIndex: 2,
      explanation:
        'Klassieke klinknagels (gloeiend ingebracht, breedgeslagen) zijn verouderd in dragend werk en vervangen door bouten en lassen. Popnagels (blind klinken voor dun plaatwerk) en schietnagels worden nog wel toegepast in lichte constructies.',
    },

    // === B.7.5 — Staalbescherming (6) ===
    {
      id: 'B7-5-a',
      toetstermCode: 'B.7.5',
      type: 'mc',
      prompt:
        'Wat is het verschil tussen **thermisch verzinken** en **elektrolytisch verzinken**?',
      options: [
        'Thermisch is voor binnen, elektrolytisch voor buiten',
        'Thermisch = dompelen in vloeibaar zink; elektrolytisch = met stroom',
        'Thermisch is alleen voor groot werk, elektrolytisch alleen voor staaldraad',
        'Thermisch geeft een hoger zinkverbruik per m², elektrolytisch is in principe goedkoper bij grote stukken',
      ],
      correctIndex: 1,
      explanation:
        'Thermisch verzinken = onderdompelen in vloeibaar zink: dikke laag, niet meer te buigen, herkenbare zinkbloemen — standaard voor constructiestaal. Elektrolytisch verzinken (galvaniseren) = elektrochemisch: dunne, gelijkmatige glanzende laag — voor schroeven, beslag, klein materiaal.',
    },
    {
      id: 'B7-5-b',
      toetstermCode: 'B.7.5',
      type: 'mc',
      prompt:
        'Welke methode is **typisch voor hang- en sluitwerk** (schroeven, scharnieren, klein beslag)?',
      options: [
        'Thermisch verzinken — geeft de dikste laag',
        'Sherardiseren — in een trommel met zinkdamp',
        'Schooperen — opgespoten gesmolten zink',
        'Het Sendzimir-proces — continu door zinkbad',
      ],
      correctIndex: 1,
      explanation:
        'Bij sherardiseren worden kleine onderdelen in een draaiende trommel met zinkdamp en kwartszand verhit; de zinkdamp slaat in een dunne, regelmatige laag neer. Ideaal voor schroeven, scharnieren en hang- en sluitwerk omdat de schroefdraad bruikbaar blijft.',
    },
    {
      id: 'B7-5-c',
      toetstermCode: 'B.7.5',
      type: 'mc',
      prompt:
        'Wat is **schooperen / zinkspuiten**?',
      options: [
        'Gesmolten zink op het oppervlak spuiten',
        'Verf met zinkpoeder die als primer wordt aangebracht',
        'Onderdompelen in zinkoplossing zonder stroom',
        'Een kleurige toplaag voor cortenstaal',
      ],
      correctIndex: 0,
      explanation:
        'Bij schooperen (zinkspuiten) wordt gesmolten zink op het werkstuk gespoten — bruikbaar voor stukken die te groot zijn voor een dompelbad of voor lokale reparatie. De laag is ruw en wordt vaak met verf afgedekt (kleur + gladder).',
    },
    {
      id: 'B7-5-d',
      toetstermCode: 'B.7.5',
      type: 'mc',
      prompt:
        'Een onbeschermde stalen kolom bezwijkt bij brand al na hoeveel tijd?',
      options: [
        'Pas na 60–90 minuten',
        'Na 20–30 minuten',
        'Pas boven de 800 °C',
        'Vrijwel direct binnen 5 minuten',
      ],
      correctIndex: 1,
      explanation:
        'Staal verliest sterkte snel boven 400 °C; in een gewone gebouwbrand bezwijkt een onbeklede stalen kolom al na 20–30 minuten. Vandaar de verplichte brandwerende bekleding van dragende staalconstructies.',
    },
    {
      id: 'B7-5-e',
      toetstermCode: 'B.7.5',
      type: 'mc',
      prompt:
        'Welke methode is **typisch voor brandwerende bescherming** van een dragende staalkolom, met behoud van een **slank, zichtbaar uiterlijk**?',
      options: [
        'Inpakken met steengaas en stucwerk',
        'Brandwerende verf die opschuimt tot een isolerend kussen',
        'Inkisten en aangieten met beton',
        'Een dikke laag spuitmortel',
      ],
      correctIndex: 1,
      explanation:
        'Intumescent (brandwerende) verf is een dunne coating die bij verhitting opzwelt tot een isolerend schuim. Het profiel blijft slank en zichtbaar — esthetisch geschikt voor zichtconstructies. Andere methoden (mortel, beton, steengaas, gips) verbergen het profiel.',
    },
    {
      id: 'B7-5-f',
      toetstermCode: 'B.7.5',
      type: 'mc',
      prompt:
        'Het **duplex-systeem** in de staalbescherming is:',
      options: [
        'Eerst poedercoaten, daarna elektrolytisch verzinken',
        'Twee lagen verf: een primer met zinkpoeder + een afwerklaag',
        'Thermisch verzinken met een verflaag erover',
        'Het tegelijk lassen en verzinken in één proces',
      ],
      correctIndex: 2,
      explanation:
        'Het duplex-systeem combineert thermisch verzinken (kathodische bescherming) met een verflaag (extra fysieke afsluiting + kleur). Wordt toegepast in zware omgevingen zoals kustgebied en industrie waar verzinken alleen niet lang genoeg meegaat.',
    },
  ],

  terms: [
    {
      term: 'Constructiestaal',
      definition:
        'Walsbaar staal (S235, S275, S355) waarbij het getal de vloeispanning in N/mm² is — hoger = sterker.',
    },
    {
      term: 'HEA / HEB / IPE-profiel',
      definition:
        'Gewalste H- en I-profielen voor balken en kolommen; HEB is zwaarder en stijver dan HEA, IPE smaller voor liggers.',
    },
    {
      term: 'Koker­profiel',
      definition:
        'Vierkant of rechthoekig hol staalprofiel — esthetisch en goed op druk én buiging.',
    },
    {
      term: 'Hoek­profiel',
      definition:
        'L-vormig staal voor randen, vakwerken en kleinere verbindingen.',
    },
    {
      term: 'Vakwerk',
      definition:
        'Driehoekige constructie van staven die alleen op trek of druk worden belast — grote overspanningen met laag eigen gewicht.',
    },
    {
      term: 'Bout­verbinding',
      definition:
        'Lossneembare verbinding met hoogwaardige bouten (M16-M30); berekend op afschuiving of trek.',
    },
    {
      term: 'Lasverbinding',
      definition:
        'Permanente verbinding door staal op te smelten met toevoegmateriaal; vergt gecertificeerde lassers en controle.',
    },
    {
      term: 'Vloeispanning',
      definition:
        'Spanning waarbij het staal blijvend vervormt zonder breuk (zie S235 = 235 N/mm²); ontwerpgrens.',
    },
    {
      term: 'Brand­werende coating',
      definition:
        'Verflaag of plaatbekleding (gips, kalkzandsteen) die staal bij brand voldoende lang koel houdt; nodig omdat staal bij ~500 °C zijn sterkte verliest.',
    },
    {
      term: 'Galvaniseren',
      definition:
        'Stalen onderdeel onderdompelen in gesmolten zink; geeft duurzame corrosie­bescherming (50+ jaar).',
    },
    {
      term: 'Spatherzinken',
      definition:
        'Zink opspuiten of onderdompelen — minder dik dan thermisch verzinken maar wel mogelijk op grotere onderdelen.',
    },
    {
      term: 'Roestvorming',
      definition:
        'Oxidatie van ijzer in vochtige lucht; voorkomen door coating, verzinken of RVS (chroomhoudend staal).',
    },
    {
      term: 'Staal­skelet',
      definition:
        'Bouwwijze met dragende staalkolommen en -balken; flexibele indeling, snelle montage, vaak utiliteitsbouw.',
    },
  ],

  games: [
    {
      id: 'B7-gapfill-1', type: 'gapfill',
      title: 'Staalprofielen en -verbindingen',
      text:
        'HE-profielen (HEA/HEB/HEM) zijn symmetrisch en knikvast — standaard voor {{kolommen}}. ' +
        'IPE is hoger dan breed — optimaal voor {{liggers}}. ' +
        'Stalen onderdelen verliezen sterkte boven {{400}} °C — daarom brandwerend bekleed. ' +
        'Een {{raatligger}} ontstaat door een I-profiel zigzag door te zagen en de helften te verschuiven.',
      distractors: ['HEA', 'voorspanbouten', '200', 'QTH-ligger'],
    },
    {
      id: 'B7-sort-1', type: 'sort',
      title: 'Type profiel — kolom of ligger?',
      categories: ['Vooral kolom', 'Vooral ligger', 'Hoekstaal / verbinding'],
      items: [
        { label: 'HEA-/HEB-/HEM-profiel', category: 'Vooral kolom' },
        { label: 'Vierkante koker', category: 'Vooral kolom' },
        { label: 'Ronde buis', category: 'Vooral kolom' },
        { label: 'IPE-profiel', category: 'Vooral ligger' },
        { label: 'UNP/UPE', category: 'Vooral ligger' },
        { label: 'L-hoekstaal', category: 'Hoekstaal / verbinding' },
      ],
    },
    {
      id: 'B7-matching-1', type: 'matching',
      title: 'Verbindingen en bescherming',
      pairs: [
        { left: 'Stompe las', right: 'Twee plaatdelen kop aan kop in één vlak' },
        { left: 'Hoeklas', right: 'In een hoek tussen twee haaks staande delen' },
        { left: 'Bouten ≥ 4', right: 'Momentvaste verbinding' },
        { left: 'Thermisch verzinken', right: 'Dompelen in gesmolten zink (~450 °C) — dikke gladde laag' },
        { left: 'Sherardiseren', right: 'Zinkdamp in trommel — voor hang- en sluitwerk' },
        { left: 'Brandwerende verf', right: 'Intumescent — schuimt op boven ~200 °C' },
      ],
    },
  ],
}
