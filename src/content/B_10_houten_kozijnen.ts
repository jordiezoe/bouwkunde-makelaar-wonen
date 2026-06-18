import type { Topic } from '../types/content'

const FIG = '/figs/B_10'
const SRC_11 = 'Lesboek hfd. 11'
const SRC_12 = 'Lesboek hfd. 12'

export const B_10_houten_kozijnen: Topic = {
  code: 'B.10',
  section: 'B',
  title: 'Houten kozijnen, ramen en deuren',
  chapterRef: 'Lesboek hoofdstukken 11 en 12',
  blurb:
    'Maatvoering (sponningmaat, dagmaat, buitenwerks), raam- en deurtypen (draairaam, draaikiep, tuimel, val, uitzet, schuif, taats), in-metsel- vs montagekozijn, kozijn- en pui-details, herstelmethode bij houtrot (Vakgroep Restauratie), en links/rechts-draaiende deuren plus stompe en opdekdeuren.',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · Maatvoering: dagmaat, sponningmaat en buitenwerks',
      toetstermCodes: ['B.10.1'],
      body: `
Bij een kozijn worden **drie maten** onderscheiden — verschil maakt veel uit op tekening en bij bestellen.

### Dagmaat (binnenwerks)
- De **vrije opening** binnenin het kozijn (zonder de stijlen en dorpels mee te tellen).
- Wat je daadwerkelijk doorlopen kunt nadat een deur open staat — exclusief de deur zelf.
- Wordt gebruikt voor toegankelijkheidseisen uit het Bbl: vrije doorgang ≥ **850 × 2.300 mm** bij verblijfsruimten.
- Niet gelijk aan de "dagmaat van het kozijn"! De deur versmalt de doorgang met de deurdikte aan de scharnierkant.

### Sponningmaat (deur/raammaat)
- De maat van de deur of het raam zelf, oftewel **dagmaat + sponning aan elke zijde**.
- Standaard binnendeur: sponning **15 mm aan elke kant** → deurbreedte = dagmaat + 30 mm.
- Hoogte deur = dagmaat + 15 mm (alleen onder de bovendorpel een sponning); onder de deur blijft ~25 mm vrij voor tapijt of vloerafwerking.

### Buitenwerkse maat (kozijnmaat)
- De maat **buitenkant tot buitenkant** van het kozijn — wat je in de muur uitspaart om het kozijn in te plaatsen.
- Voor inmetselkozijnen wordt nog een metselwerk-marge bijgeteld.

> **Vuistregel binnendeurkozijn**:
> - Dagmaat = vrije opening
> - Deurmaat = dagmaat + 30 mm (breedte) en + 15 mm (hoogte)
> - Kozijnmaat = dagmaat + 2× stijl + bovendorpel

### Bij buitenkozijnen
Het kozijn moet altijd een **veelvoud van de koppenmaat** zijn (waalformaat = 100 mm koppenmaat) **plus één stootvoegdikte**. Voor het meest gebruikte waalformaat geldt de **lagenmaat 62,5 mm** (steen + lintvoeg 12,5 mm). Het kozijn wordt bij voorkeur in het vlak van de **isolatielaag in de spouw** geplaatst — dan loopt de isolatie door tot tegen het kozijn (geen koudebrug).
      `.trim(),
      images: [
        {
          src: `${FIG}/kozijn-benamingen.jpg`,
          caption: 'Benamingen van een houten binnendeurkozijn: stijlen, bovendorpel, steldorpel, stofdorpel; en de drie maten dagmaat, deurmaat en kozijnmaat.',
          source: SRC_11,
          width: 'lg',
        },
      ],
    },

    {
      heading: '2 · Raamtypen: vaste en beweegbare delen',
      toetstermCodes: ['B.10.2'],
      body: `
Op een tekening van een kozijn zijn vaste en draaiende delen te onderscheiden via een **tekenconventie** (Nederlandse norm):

- **Naar binnen** draaiend = **streeplijn**
- **Naar buiten** draaiend = **doorgetrokken lijn**
- De driehoek of V wijst met de **basis** naar het **scharnier**, met de **punt** naar de **sluiting**
- Het aangezicht is **altijd van buitenaf** gezien.

### Beweegbare raamtypen (leer ze herkennen)

**Draairaam (naar buiten of naar binnen)**
- Verticale scharnieren aan één stijl; opent als een deur.
- *Naar buiten draaiend* is eenvoudiger waterdicht (de aanslag drukt het raam vast). *Naar binnen draaiend* vergt een **weldorpel** en **waterhol** om regenwater weg te krijgen.

**Draai-valraam (draaikiepraam)**
- Combineert draaien (zoals een deur) **en** vallen aan de onderkant (klep naar binnen) via één kruk in drie standen: dicht, draaien, kiepen. Modern standaard in kunststof- en aluminiumkozijnen.

**Valraam (klepraam)**
- Onderkant kantelt **naar binnen** voor ventilatie zonder dat het raam ver open staat. Tussen het valraam en het vaste deel zit een **kalf** (tussendorpel) met **waterhol**.

**Uitzetraam (steekraam)**
- Scharnier aan de **bovenkant**; raam valt **naar buiten**. Geen kans op inregenen. Vastgezet met een **uitzetijzer** of **combisluiting/sluitschaartje**.

**Tuimelraam**
- Scharnieren (**speunen**) iets boven het midden — combineert uitzet (boven) en val (onder). Het bovenste deel valt naar buiten en het onderste naar binnen. Goed voor schoonmaken aan de buitenkant.

**Schuiframen**
- Twee delen die langs elkaar **schuiven** (achter- of voorlangs). Geen ruimte nodig voor opendraaien. Klassiek 'guillotineraam' aan de gevel of horizontaal schuif als modern aluminium gevel-element.

**Taatsraam**
- Draaipunten in **boven- én onderdorpel** (geen scharnieren aan de stijl). Het raam **taatst om de verticale as** — eerste helft draait naar binnen, andere helft naar buiten. Duur en zeldzaam.

**Stolpramen**
- Twee ramen **zonder tussenstijl** die in elkaar grijpen via een **stolpnaald** (beide tegelijk te openen) of **tongnaald** (één kan open, de ander dicht). Sluiting via een **espagnolet** (sluitstang die in boven- en onderdorpel grijpt).

### Implicaties voor de praktijk
- **Naar buiten draaiend**: makkelijker waterdicht maar **vereist ruimte buiten** (kan voorbijgangers hinderen op begane grond).
- **Naar binnen draaiend**: vraagt weldorpel + waterhol; makkelijker schoon te maken aan de buitenkant.
- **Draaikiep**: ventilatie + volledige opening + makkelijk schoonmaken — vandaar dé standaard in moderne nieuwbouw.
- **Tuimel/taats**: complex, duur, alleen waar nodig (monumentaal werk).
      `.trim(),
      images: [
        {
          src: `${FIG}/raamtypes-12.jpg`,
          caption: 'Overzicht van twaalf raamtypen met de Nederlandse tekenconventies — leer ze herkennen aan de driehoek, lijntype en plaats van scharnier en sluiting.',
          source: SRC_12,
          width: 'full',
        },
        {
          src: `${FIG}/raam-benamingen.jpg`,
          caption: 'Onderdelen van een naar buiten draaiend raam: stijl, dorpel, sponning, glaslat.',
          source: SRC_12,
          width: 'md',
        },
        {
          src: `${FIG}/valraam.jpg`,
          caption: 'Valraam (klepraam) met hefboomsluiting — bovenkant valt naar binnen voor ventilatie.',
          source: SRC_12,
          width: 'md',
        },
        {
          src: `${FIG}/stolpraam.jpg`,
          caption: 'Stolpraam — twee ramen zonder tussenstijl, sluiting via stolp- of tongnaald.',
          source: SRC_12,
          width: 'md',
        },
        {
          src: `${FIG}/stolpnaald.jpg`,
          caption: 'Stolpnaald — twee ramen worden tegelijk geopend.',
          source: SRC_12,
          width: 'sm',
        },
        {
          src: `${FIG}/tongnaald.jpg`,
          caption: 'Tongnaald — één raam blijft dicht terwijl het andere wordt geopend.',
          source: SRC_12,
          width: 'sm',
        },
      ],
    },

    {
      heading: '3 · Inmetselkozijn vs montagekozijn',
      toetstermCodes: ['B.10.3'],
      body: `
Een ander, examen-belangrijk onderscheid is **hoe** en **wanneer** het kozijn in het werk komt.

### Inmetselkozijn (inbouwkozijn)
- **Tijdens de ruwbouw** geplaatst — eerst staan de kozijnen op hun plek, dan worden de muren ertegenaan opgemetseld.
- Wordt **mee-gesteld** op de ruwbouwmaten en houdt de openingen tijdens metselen op maat.
- Bevestigd met **kozijnankers** (verzinkt rondstaal Ø 6 mm, 150–250 mm lang, **3 stuks per stijl**) in de lintvoegen.
- Heeft een **kalksponning (speciesponning)** in de stijlen → stenen worden ertegenaan gemetseld en de sponning vol gezet met specie.
- Bij lichte scheidingswanden: **kloostersponning** in de stijl waarin de wand past (voorkomt scheuren door krimp).

**Voordelen**: maatvoerende functie, direct geïntegreerd in metselwerk, weinig naden.
**Nadelen**: kozijn staat lang op de bouwplaats (kans op beschadiging, vocht-werken); afwerking moet ter plaatse; aluminium en kunststof zijn ongeschikt (zijn niet bestand tegen verse mortel).

### Stelkozijn + montagekozijn (kortweg: montagekozijn)
Twee onderdelen:
- Een **stelkozijn** (hulpkozijn) wordt tijdens de ruwbouw gesteld en ingemetseld — heeft uitsluitend een maatvoerende functie. Vaak een eenvoudig houten kader.
- Het **montagekozijn** is het uiteindelijke, **fabrieksmatig afgewerkte** kozijn dat in de afbouwfase **in het stelkozijn** wordt geschroefd. Komt droog en gaaf op locatie.

**Voordelen**:
- **Minder schade** tijdens bouwfase — kozijn zit pas laat op zijn plek
- **Fabrieksmatige afwerking** (KVT + KOMO + SGT-garantie)
- Geschikt voor **aluminium- en kunststofkozijnen** (die kunnen niet ingemetseld worden vanwege alkalireactie)
- Beter te isoleren en luchtdicht af te kitten

**Nadelen**:
- **Extra werk** (twee kozijnen plaatsen i.p.v. één)
- **Aansluiting stelkozijn ↔ montagekozijn** moet zorgvuldig water- en luchtdicht (anders koudebrug)
- Iets duurder dan inmetselwerk

### Vuistregel praktijk
- **Houten kozijn** in nieuwbouw: kan beide, vaak nog inmetsel
- **Aluminium / kunststof**: altijd montagekozijn (in houten of kunststof stelkozijn)
- **Renovatie**: vaak een kunststof- of aluminium-renovatiekozijn binnen het bestaande houten kozijn
      `.trim(),
      images: [
        {
          src: `${FIG}/stel-montagekozijn.jpg`,
          caption: 'Stelkozijn (links, in ruwbouw ingemetseld) + montagekozijn (rechts, in afbouw gemonteerd). Aansluiting moet water- en luchtdicht zijn.',
          source: SRC_12,
          width: 'md',
        },
      ],
    },

    {
      heading: '4 · Pui-details: kozijn, ramen, deuren en aansluitingen',
      toetstermCodes: ['B.10.4'],
      body: `
Op een tekening van een **pui** (uitwendige scheidingsconstructie met meerdere kozijnen, ramen en deuren) komen je veel detailbenamingen tegen. Leer ze met name **herkennen**.

### Onderdelen van een kozijn
- **Stijl** — verticaal lijststuk aan de zijkant
- **Bovendorpel** — horizontaal lijststuk bovenaan
- **Onderdorpel** — horizontaal lijststuk onderaan (buitenkozijn)
- **Tussendorpel / kalf** — extra horizontaal lijststuk in het midden (bv. tussen vast en valraam)
- **Sponning** — uitsparing in de stijl/dorpel waarin het raam of de deur valt of waarin het glas wordt geplaatst
- **Glaslat** — dunne lat die het glas in de sponning klemt (vanaf binnen vastgezet voor inbraakwerendheid)
- **Stoflat / weldorpel** — extra horizontale lat onderaan om regenwater af te leiden
- **Onderdorpel + waterhol** — een groef die water buiten houdt en afdruipt
- **Stelhoek** — schuine bovenkant van de onderdorpel (9°) voor afwatering

### Aansluitingen op het metselwerk
- **Negge** = de inspringende hoek tussen kozijn en spouwmuur (de "neusje" van het buitenspouwblad voor het kozijn)
- **Spouwlat** — houten lat onder de onderdorpel, op de spouwmuur, draagt de DPC-slabbe
- **DPC-slabbe** — kunststoffolie (vroeger lood) die opgaand vocht tegenhoudt; valt over de spouw met afwatering buitenom
- **Latei** — boven kozijnen breder dan 1 m: staltonlatei (baksteen + voorgespannen wapening), prefab betonlatei, of stalen latei in de lintvoeg
- **Lekdorpel / raamdorpelsteen** — uitstekende dorpel onder het kozijn die water buiten het gevelvlak brengt (gres, Holonite-beton, natuursteen, aluminium)
- **Vinylslabbe** — kunststoffolie boven de latei, leidt vocht naar de spouw

### Toevoegingen bij ramen en deuren
- **Ventilatierooster** — in bovendorpel of pui-element voor basisventilatie
- **Stolpnaald / tongnaald** — sluitprofiel tussen twee aansluitende ramen zonder tussenstijl
- **Espagnolet** — verticale sluitstang die in boven- en onderdorpel grijpt (op een stolpraam of voor twee-puntsluiting)
- **Aluminium tochtweringsprofiel** — afdichting op de aanslag van het raam
- **Condenswaterprofiel** — alleen bij enkelglas (verouderd): aluminium goot in de onderdorpel voor afvoer van condens
- **Sluitschaartje / combisluiting** — vastzetstand op een uitzetraam

### Standaardsymbolen op plattegrond
- **Enkele deur** — rechte lijn + driekwart-cirkelboog
- **Dubbele deur** — twee bogen tegenover elkaar
- **Schuifdeur** — pijl langs het muurvlak
- **Vouwwand** — zigzag van lijnen
- **Brand-/zelfsluitende deur** — kleine cirkel of letter in de deurboog
      `.trim(),
      images: [
        {
          src: `${FIG}/samengesteld-kozijn.jpg`,
          caption: 'Aanzicht van een samengesteld kozijn — met meerdere ramen en deuren in één pui.',
          source: SRC_12,
          width: 'lg',
        },
        {
          src: `${FIG}/onderdorpel.jpg`,
          caption: 'Onderdorpel van een ingemetseld kozijn met raamdorpelsteen, spouwlat en DPC-slabbe.',
          source: SRC_12,
          width: 'md',
        },
        {
          src: `${FIG}/weldorpel.jpg`,
          caption: 'Weldorpel bij een naar binnen draaiende deur — houdt regenwater op afstand en laat het afdruipen via een waterhol.',
          source: SRC_12,
          width: 'md',
        },
        {
          src: `${FIG}/deur-symbolen.jpg`,
          caption: 'Standaardsymbolen voor binnendeuren op plattegronden: enkele/dubbele deur, schuifdeur, doordraaiende deur, vouwwand, tourniquet, brand-/zelfsluitende deur.',
          source: SRC_11,
          width: 'lg',
        },
      ],
    },

    {
      heading: '5 · Herstelmethode bij houtrot — Vakgroep Restauratie',
      toetstermCodes: ['B.10.5'],
      body: `
**Houtrot** in een kozijn is een gevolg van vocht + houtinwerkende schimmels. Vooral kops hout (uiteinden van stijlen en dorpels) en plekken waar verf is afgebladderd of de kit losgekomen. Bij hout met **dzhk IV-V** (vuren, grenen, beuken) is dat veelvoorkomend.

De **Vakgroep Restauratie** (onderdeel van de NBvT, Nederlandse Branchevereniging voor de Timmerindustrie) heeft een gestandaardiseerd protocol voor het **duurzaam herstellen van houten kozijnen**. Het werkt in vijf hoofdstappen:

### Stap 1 — Diagnose en uitnemen
- Schilderwerk en kit verwijderen rondom het verdachte gebied
- Het hout **prikken met een priem of beitel**: gezond hout blokkeert, zacht hout geeft mee
- Bij ernstige rot in een **doorlopende stijl of dorpel**: het complete kozijn-deel uitnemen
- Bij lokale rot in een klein vlak: doorgaan naar Stap 2

### Stap 2 — Uithakken tot gezond hout
- Het aangetaste hout wordt **ruim uitgehakt** of weggefreesd, **tot in de gezonde kern** — vergelijkbaar met betonrot herstel
- Randen worden **schuin** afgeschuind (geen rechte sneden) voor betere hechting van de reparatieharsen
- De holte wordt **schoongemaakt en goed gedroogd**

### Stap 3 — Aanbrengen primer en consolidatie
- Een **vloeibare houtverharder (consolidant)** wordt in de omliggende vezels gestreken — dringt diep door en versterkt het overgebleven hout
- Vaak op basis van **2-componenten epoxyhars** (verlengde droogtijd, hoge sterkte) of een speciaal product van het systeem (bv. **Repair Care**, **Konijnenburg**, **Renotec**)
- Laten doortrekken volgens fabrikantvoorschrift (meestal 4–24 uur)

### Stap 4 — Vullen met 2K-houtreparatiepasta
- Bij voorkeur een **2-componenten epoxy- of polyurethaanpasta** (geen polyester — krimpt te veel)
- In **lagen** opbouwen voor diepe holten — elke laag laten doorharden voordat de volgende komt
- De pasta wordt na uitharden **bewerkbaar** als hout: schuren, beitelen, schaven, gat boren voor schroef
- Krimpt niet, werkt mee met het hout, blijft sterk hechten

### Stap 5 — Afwerking
- **Schuren** tot vlak met omliggend hout
- **Gronden** en **schilderen** in 2–3 lagen
- Voegen rondom kozijn opnieuw **kitten** (elastische siliconen- of acrylkit, niet starre kit)

### Algemene principes
1. **Niet alleen plamuren** — gewone plamuur is niet bestand tegen werken van hout en houdt geen waterdamp tegen → rot komt snel terug
2. **Tot in de gezonde kern uithakken** — anders wordt de schimmel ingesloten en woekert verder
3. **2-K-systemen** — eenkomponent-vullingen krimpen te veel
4. **Goed gronden + schilderen** — de pasta zelf is UV-gevoelig
5. **Onderhoudsschilderwerk** elke 5–7 jaar voorkomt herhaalde rot

> Een goed uitgevoerde Vakgroep Restauratie-reparatie houdt 15–25 jaar mee — vergelijkbaar met een nieuwe houten kozijnafmonteren in dzhk II/III.
      `.trim(),
    },

    {
      heading: '6 · Links-/rechtsdraaiende deuren en stompe/opdekdeuren',
      toetstermCodes: ['B.10.6'],
      body: `
### Links- en rechtsdraaiend
De **draairichting** van een deur wordt altijd gezien vanuit de **scharnierkant** (de kant waarop de deur opent):

- **Rechtsdraaiend** — de deur sluit **met de klok mee**. Scharnieren aan de rechterzijde gezien van de scharnierkant.
- **Linksdraaiend** — de deur sluit **tegen de klok in**. Scharnieren aan de linkerzijde gezien van de scharnierkant.

**Praktische toepassingen**:
- **Vluchtroutes** (uitgangen van openbare gebouwen, kantoren, scholen, zorginstellingen): altijd **naar buiten** open (in de vluchtrichting)
- **Woningvoordeur**: draait juist **naar binnen** (anders staat hij in de weg op het trottoir, en is hij minder inbraakgevoelig)
- **Achter- en tuindeuren**: meestal naar buiten
- Een deur naar een verblijfsruimte draait zo dat **bij binnenkomst direct overzicht** ontstaat — meestal langs de muur naar de meeste vrije ruimte
- Deuren en ramen mogen elkaar bij het openen **niet raken**

### Stompe deur vs opdekdeur
Het verschil zit in de **plaats van de deur t.o.v. het kozijn**:

#### Stompe deur
- Deur valt **in het vlak van het kozijn** — de zichtkant van de deur ligt gelijk met de zichtkant van het kozijn aan de scharnierzijde
- Sponning rondom in het kozijn 15 mm; deurmaat = dagmaat **+ 30 mm** (15 mm sponning links + rechts)
- Aansluiting tussen deur en kozijn is een **rechte rand** — kan met een rubberprofiel of borstelprofiel afgedicht
- **Standaard in moderne nieuwbouw** — strak en modern uiterlijk
- **Beslag**: zichtbare scharnieren of inboorscharnieren

#### Opdekdeur
- Deur valt **deels op het kozijn** — er is een **opdeksponning** in de deur uitgehaald waardoor de deur een 'lipje' heeft dat over het kozijn ligt
- Deurmaat = dagmaat **+ 20 mm** (10 mm overlap aan elke kant)
- Geeft een **betere tochtkering** en **demping van geluid** dan een stompe deur (de overlap sluit de naad af)
- Vroeger standaard; modern alleen nog bij vochtige ruimten, geluidsdeuren of waar de oude maatvoering moet aansluiten
- **Beslag**: opdekscharnieren

### Stalen binnendeurkozijnen
Twee uitvoeringen om het verschil te accommoderen:
- Type voor **stompe deur**: heeft een **rubber aanslag** in het kozijn → dagmaat = deurbreedte − 30 mm
- Type voor **opdekdeur**: **zonder aanslag** (de deurlip neemt die functie over) → dagmaat = deurbreedte − 20 mm

### Vuistregel maten
| Deurtype | Dagmaat tot deurbreedte |
|---|---|
| Stomp | + 30 mm |
| Opdek | + 20 mm |
      `.trim(),
      images: [
        {
          src: `${FIG}/links-rechtsdraaiend.jpg`,
          caption: 'Links- en rechtsdraaiende deuren — gezien vanaf de scharnierkant. Rechts = met de klok mee, links = tegen de klok in.',
          source: SRC_11,
          width: 'md',
        },
        {
          src: `${FIG}/stalen-stomp.jpg`,
          caption: 'Stalen kozijnstijl met rubberaanslag voor een stompe deur — deur valt in het vlak van het kozijn.',
          source: SRC_11,
          width: 'sm',
        },
        {
          src: `${FIG}/stalen-opdek.jpg`,
          caption: 'Stalen kozijnstijl zonder aanslag voor een opdekdeur — deur valt deels op het kozijn.',
          source: SRC_11,
          width: 'sm',
        },
      ],
    },
  ],

  toetstermen: [
    {
      code: 'B.10.1',
      text: 'Benoemt de verschillen tussen sponningmaat, dagmaat en buitenwerkse maatvoering van kozijnen.',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'B.10.2',
      text: 'Herkent op een tekening de vaste en draaiende delen in een houten kozijn (draairamen, draaikiepramen, tuimelramen, valramen, uitzetramen, schuiframen en taatsramen) en de implicaties ervan.',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'B.10.3',
      text: 'Benoemt de verschillen tussen inmetselkozijnen en montagekozijnen.',
      niveau: 'BT2',
      bloom: 'Kennis',
      metDrawing: true,
    },
    {
      code: 'B.10.4',
      text: 'Benoemt op een tekening van een houten kozijn of pui de details met toevoegingen (ramen en deuren).',
      niveau: 'BT2',
      bloom: 'Kennis',
      metDrawing: true,
    },
    {
      code: 'B.10.5',
      text: 'Beschrijft de herstelmethode van houtrot van houten kozijnen, conform Vakgroep Restauratie.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
    {
      code: 'B.10.6',
      text: 'Benoemt de verschillen tussen een links- en rechtsdraaiende deur, stompe- of opdekdeur.',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
  ],

  questions: [
    // === B.10.1 — Maatvoering (4) ===
    {
      id: 'B10-1-a',
      toetstermCode: 'B.10.1',
      type: 'mc',
      prompt: 'Wat is de **dagmaat** van een kozijn?',
      options: [
        'De maat buitenkant tot buitenkant van het kozijn',
        'De vrije opening binnen het kozijn',
        'De som van de afmetingen van alle deuren en ramen',
        'De afstand van de bovendorpel tot de bovenkant van de muur',
      ],
      correctIndex: 1,
      explanation:
        'Dagmaat = de vrije opening (binnenwerkse maat) van het kozijn zelf. Niet te verwarren met de "vrije doorgang" als de deur open staat — die is kleiner.',
    },
    {
      id: 'B10-1-b',
      toetstermCode: 'B.10.1',
      type: 'mc',
      prompt: 'Een binnendeur heeft een dagmaat van 830 mm. Wat is de **sponningmaat (deurbreedte)**?',
      options: ['810 mm', '830 mm', '860 mm', '880 mm'],
      correctIndex: 2,
      explanation:
        'Bij een standaard binnendeur is de sponning aan elke kant 15 mm — dus deurbreedte = dagmaat + 30 mm = 830 + 30 = 860 mm.',
    },
    {
      id: 'B10-1-c',
      toetstermCode: 'B.10.1',
      type: 'mc',
      prompt: 'Wat is de **buitenwerkse maat (kozijnmaat)**?',
      options: [
        'De maat van de deur zelf (deurmaat)',
        'De vrije doorgang met geopende deur',
        'De maat buitenkant tot buitenkant van het kozijn',
        'Het verschil tussen dagmaat en sponningmaat',
      ],
      correctIndex: 2,
      explanation:
        'Buitenwerks = de afmeting van het kozijn buitenkant tot buitenkant. Dat is wat de metselaar of de bouwer in de muur uitspaart om het kozijn in te plaatsen.',
    },
    {
      id: 'B10-1-d',
      toetstermCode: 'B.10.1',
      type: 'mc',
      prompt:
        'Het Bbl eist bij een verblijfsruimte een **vrije doorgang** van minimaal:',
      options: [
        '750 × 2.100 mm',
        '850 × 2.300 mm',
        '900 × 2.100 mm',
        '1.000 × 2.500 mm',
      ],
      correctIndex: 1,
      explanation:
        'Minimaal 850 × 2.300 mm — dat is de vrije doorgang nadat de deur 90° open staat, niet de dagmaat van het kozijn. De deur versmalt de doorgang met de deurdikte aan de scharnierzijde.',
    },

    // === B.10.2 — Raamtypen (5) ===
    {
      id: 'B10-2-a',
      toetstermCode: 'B.10.2',
      type: 'mc',
      prompt: 'Wat is een **draaikiepraam**?',
      options: [
        'Een raam dat naar buiten draait én bovenaan scharnier heeft',
        'Een raam met scharnier in boven- en onderdorpel — draait om de verticale as',
        'Een raam dat dicht, draaien én kiepen kan met één kruk',
        'Een raam dat aan beide zijden kan worden geopend',
      ],
      correctIndex: 2,
      explanation:
        'Een draaikiepraam (ook draai-valraam) combineert draaien en vallen via één kruk in drie standen. Standaard in moderne kunststof- en aluminiumkozijnen — ventilatie via kiep + volledige opening via draai + makkelijk schoon te maken aan de buitenkant.',
    },
    {
      id: 'B10-2-b',
      toetstermCode: 'B.10.2',
      type: 'mc',
      prompt: 'Een **uitzetraam (steekraam)** heeft scharnieren waar?',
      options: [
        'Aan de zijkant (verticale stijl)',
        'Aan de bovendorpel — het raam valt naar buiten',
        'Aan de onderdorpel — het raam kantelt naar binnen',
        'In boven- en onderdorpel — taatsend',
      ],
      correctIndex: 1,
      explanation:
        'Een uitzetraam heeft scharnieren aan de bovendorpel en kantelt naar buiten — geen kans op inregenen. Wordt vastgezet met een uitzetijzer of combisluiting/sluitschaartje.',
    },
    {
      id: 'B10-2-c',
      toetstermCode: 'B.10.2',
      type: 'mc',
      prompt: 'Wat is een **taatsraam**?',
      options: [
        'Een raam dat horizontaal langs een rail schuift',
        'Een raam dat om de verticale as taatst',
        'Een raam dat alleen in bedrijfshallen voorkomt',
        'Een raam zonder hang- en sluitwerk',
      ],
      correctIndex: 1,
      explanation:
        'Bij een taatsraam zitten de draaipunten in de boven- en onderdorpel (niet aan de stijl). Het raam taatst om de verticale as: de ene helft draait naar binnen, de andere naar buiten. Duur en zeldzaam.',
    },
    {
      id: 'B10-2-d',
      toetstermCode: 'B.10.2',
      type: 'mc',
      prompt:
        'Op een tekening zie je een **streeplijn** met een driehoek wijzend naar één stijl. Wat betekent dit?',
      options: [
        'Een naar buiten draaiend raam — scharnier aan de aangewezen stijl',
        'Een naar binnen draaiend raam, scharnier aan de zijstijl',
        'Een vast raam zonder beweegbare delen',
        'Een ventilatieopening',
      ],
      correctIndex: 1,
      explanation:
        'Tekenconventie: streeplijn = naar binnen draaiend; doorgetrokken lijn = naar buiten draaiend. De driehoek wijst met de basis naar het scharnier en met de punt naar de sluiting.',
    },
    {
      id: 'B10-2-e',
      toetstermCode: 'B.10.2',
      type: 'mc',
      prompt: 'Het verschil tussen een **stolpnaald** en een **tongnaald** is:',
      options: [
        'Stolpnaald is van hardhout, tongnaald van zacht hout',
        'Stolpnaald: beide ramen samen; tongnaald: één apart',
        'Een tongnaald wordt alleen in monumentenwerk gebruikt',
        'Een stolpnaald gebruikt geen espagnolet',
      ],
      correctIndex: 1,
      explanation:
        'Stolpnaald koppelt twee ramen die altijd tegelijk worden geopend (één espagnolet). Tongnaald maakt het mogelijk om één raam te openen terwijl de ander gesloten blijft — handig voor selectieve ventilatie.',
    },

    // === B.10.3 — Inmetsel vs montage (3) ===
    {
      id: 'B10-3-a',
      toetstermCode: 'B.10.3',
      type: 'mc',
      prompt:
        'Wanneer wordt een **inmetselkozijn** in het werk geplaatst?',
      options: [
        'Tijdens de afbouwfase — als alle muren al af zijn',
        'Tijdens de ruwbouw: eerst kozijn stellen, dan metselen',
        'Pas na het schilderwerk',
        'In de fabriek, samen met de muurelementen',
      ],
      correctIndex: 1,
      explanation:
        'Een inmetselkozijn wordt vóór of tijdens het opmetselen ingebracht; het stuurt de maatvoering van de muuropening. Met kozijnankers (3 per stijl) wordt het vast gemetseld; in de kalksponning komt mortel.',
    },
    {
      id: 'B10-3-b',
      toetstermCode: 'B.10.3',
      type: 'mc',
      prompt:
        'Waarom worden **aluminium- en kunststofkozijnen** vrijwel altijd als montagekozijn (in een stelkozijn) toegepast?',
      options: [
        'Ze zijn te zwaar om in te metselen',
        'Verse mortel, cement en gips tasten ze aan',
        'Ze passen niet in een standaard kalksponning',
        'Inmetselen geeft te veel geluidsoverdracht',
      ],
      correctIndex: 1,
      explanation:
        'Aluminium reageert met de alkalische bestanddelen van mortel en wordt blijvend gevlekt; kunststof is gevoelig voor schuren tijdens metselwerk. Daarom worden ze pas in de afbouwfase in een houten/kunststof stelkozijn gemonteerd dat wel ingemetseld is.',
    },
    {
      id: 'B10-3-c',
      toetstermCode: 'B.10.3',
      type: 'mc',
      prompt: 'Een **voordeel** van een montagekozijn ten opzichte van een inmetselkozijn is:',
      options: [
        'Het is altijd goedkoper',
        'Minder bouwschade en fabrieksmatig afgewerkt',
        'Er zijn geen kozijnankers nodig',
        'De aansluiting op het metselwerk is automatisch waterdicht',
      ],
      correctIndex: 1,
      explanation:
        'Door pas in de afbouwfase te monteren staat het kozijn niet wekenlang op de bouwplaats in weer en wind. Fabrieksmatige afwerking (KVT, KOMO, SGT-garantie) blijft intact. Wel extra werk: twee kozijnen plaatsen.',
    },

    // === B.10.4 — Details op tekening (4) ===
    {
      id: 'B10-4-a',
      toetstermCode: 'B.10.4',
      type: 'mc',
      prompt: 'Wat is een **kalf** in een kozijn?',
      options: [
        'De verticale stijl aan de zijkant',
        'Een extra horizontale dorpel in het kozijn (tussendorpel)',
        'De binnenste laag van het glas',
        'De onderkant van een raamdorpelsteen',
      ],
      correctIndex: 1,
      explanation:
        'Een kalf is een tussendorpel: horizontale dwarsligger in het kozijn die boven- en onderdeel scheidt. Veel toegepast tussen een vast raam en een valraam, met een waterhol om vocht buiten te houden.',
    },
    {
      id: 'B10-4-b',
      toetstermCode: 'B.10.4',
      type: 'mc',
      prompt: 'Een **lekdorpel / raamdorpelsteen** heeft als hoofdtaak:',
      options: [
        'Het kozijn ondersteunen bij draagkracht',
        'Water uit het glas buiten de gevel afvoeren',
        'De isolatie in de spouw vasthouden',
        'Geluidsisolatie verbeteren',
      ],
      correctIndex: 1,
      explanation:
        'Lekdorpels (van gres, Holonite-beton, natuursteen of aluminium) brengen het regenwater buiten het vlak van de gevel — zonder een lekdorpel zou het water langs de baksteen lopen en strepen, schimmel en vocht in de muur veroorzaken.',
    },
    {
      id: 'B10-4-c',
      toetstermCode: 'B.10.4',
      type: 'mc',
      prompt: 'Wat is de functie van een **DPC-slabbe** onder een onderdorpel?',
      options: [
        'Geluidsdemping tussen kozijn en muur',
        'Een folie die opgaand vocht tegenhoudt en afvoert',
        'Een isolerende laag tussen kozijn en spouw',
        'Een drainagekanaal voor condenswater',
      ],
      correctIndex: 1,
      explanation:
        'DPC (Damp Proof Course) is een kunststofvochtkering. Onder de onderdorpel valt de slabbe over de spouw met afwatering buitenom — opgaand vocht uit het metselwerk wordt zo gestopt en kan niet naar het binnenspouwblad/isolatie.',
    },
    {
      id: 'B10-4-d',
      toetstermCode: 'B.10.4',
      type: 'mc',
      prompt:
        'Boven welke kozijnbreedte is een **latei** nodig?',
      options: ['Vanaf 0,5 m', 'Vanaf 1 m', 'Vanaf 1,5 m', 'Pas bij dubbele kozijnen'],
      correctIndex: 1,
      explanation:
        'Boven elke kozijnopening **breder dan 1 m** is een latei nodig om de bovenliggende belasting over de opening te dragen. Bij smaller dan 1 m volstaat Murforwapening in de lintvoeg om scheurvorming te voorkomen.',
    },

    // === B.10.5 — Houtrot herstel (4) ===
    {
      id: 'B10-5-a',
      toetstermCode: 'B.10.5',
      type: 'mc',
      prompt:
        'Volgens de Vakgroep Restauratie-aanpak: **wat is de eerste stap** bij houtrot in een kozijn?',
      options: [
        'Direct vol-plamuren met gewone houtplamuur',
        'De mate van rot vaststellen (prikken met priem)',
        'Het hele kozijn vervangen door een nieuw exemplaar',
        'Een laag verf overheen schilderen',
      ],
      correctIndex: 1,
      explanation:
        'Stap 1 is altijd diagnose: schilderwerk en kit weghalen, het hout aanprikken met priem of beitel om de mate van rot te beoordelen. Pas daarna beslis je: vervangen (bij ernstige rot in dragend deel), of plaatselijk repareren (bij beperkte rot).',
    },
    {
      id: 'B10-5-b',
      toetstermCode: 'B.10.5',
      type: 'mc',
      prompt:
        'Welk **type vulmateriaal** wordt geadviseerd voor reparatie van een uitgehakt rotgat?',
      options: [
        'Standaard houtplamuur in 1 component',
        'Acrylaatkit',
        '2-componenten epoxy-houtreparatiepasta',
        'Gewone gipspleister',
      ],
      correctIndex: 2,
      explanation:
        'Volgens Vakgroep Restauratie: een 2-componenten epoxy- of PUR-pasta. Krimpt niet (anders barst de reparatie), werkt mee met de bewegingen van het hout, kan na uitharden geschuurd, geschaafd en geschilderd worden. Standaard houtplamuur is veel te zwak.',
    },
    {
      id: 'B10-5-c',
      toetstermCode: 'B.10.5',
      type: 'mc',
      prompt:
        'Waarom moet bij houtrotherstel het aangetaste deel **tot in de gezonde kern** worden uitgehakt?',
      options: [
        'Voor een esthetische reden (rommel verbergen)',
        'Anders woekert de schimmel verder onder de reparatie',
        'Voor extra hechting van de verf',
        'Het is een willekeurige conventie zonder bouwfysische reden',
      ],
      correctIndex: 1,
      explanation:
        'Schimmel zit ook in zacht hout dat nog niet visueel rot oogt. Als je niet tot in de gezonde kern uithakt, blijft schimmel achter onder de reparatie. Bovendien hechten epoxy- en PUR-pasta’s alleen goed op stevig, droog hout. Daarom altijd ruim weghakken + consoliderend voorstrijken.',
    },
    {
      id: 'B10-5-d',
      toetstermCode: 'B.10.5',
      type: 'mc',
      prompt:
        'Welke maatregel **voorkomt** dat houtrot snel terugkomt na herstel?',
      options: [
        'De reparatie open laten zonder afwerking',
        'Een dunne laag siliconenkit over de reparatie aanbrengen',
        'Goed gronden, schilderen en periodiek onderhoud',
        'De reparatie onbehandeld laten zodat het hout kan ademen',
      ],
      correctIndex: 2,
      explanation:
        'Vocht is de oorzaak van houtrot. Een onbeschadigde, intacte verflaag + correct gekitte voegen houden vocht buiten. Onderhoudsschilderwerk elke 5–7 jaar is essentieel; verwaarlozing geeft binnen 2–3 jaar nieuwe rot.',
    },

    // === B.10.6 — Links/rechts + stomp/opdek (5) ===
    {
      id: 'B10-6-a',
      toetstermCode: 'B.10.6',
      type: 'mc',
      prompt:
        'Wat is een **rechtsdraaiende deur**?',
      options: [
        'Een deur met scharnieren rechts (vanaf de scharnierkant)',
        'Een deur die naar rechts open zwaait, ongeacht waar de scharnieren zitten',
        'Een deur die alleen in een rechterhand-gebouw past',
        'Een deur die wordt geopend door rechts in te draaien',
      ],
      correctIndex: 0,
      explanation:
        'De draairichting wordt gezien **vanaf de scharnierkant**: een deur met scharnier aan de rechterzijde gezien van die kant is rechtsdraaiend → sluit met de klok mee. Belangrijk bij het bestellen van scharnieren, sloten en deurkrukken — die zijn vaak links- of rechts-specifiek.',
    },
    {
      id: 'B10-6-b',
      toetstermCode: 'B.10.6',
      type: 'mc',
      prompt:
        'Bij een **stompe deur** valt de deur:',
      options: [
        'Volledig op het kozijn aan de zichtzijde',
        'De deur ligt gelijk met het vlak van het kozijn',
        'Een halve dikte op het kozijn',
        'Iets onder het vlak van het kozijn',
      ],
      correctIndex: 1,
      explanation:
        'Bij een stompe deur ligt de deur in het vlak van het kozijn — de aanslag is een rechte rand, vaak afgedicht met rubber- of borstelprofiel. Strak en modern uiterlijk; deurbreedte = dagmaat + 30 mm (15 mm sponning links + rechts).',
    },
    {
      id: 'B10-6-c',
      toetstermCode: 'B.10.6',
      type: 'mc',
      prompt:
        'Een **opdekdeur** is herkenbaar aan:',
      options: [
        'De afwezigheid van kruk en slot',
        'Een deur met een lipje dat over het kozijn valt',
        'Een afgeronde bovenhoek',
        'Een metalen rand rondom',
      ],
      correctIndex: 1,
      explanation:
        'In een opdekdeur is een opdeksponning gefreesd, waardoor de deur een "lipje" krijgt dat over het kozijn ligt aan de zichtzijde. Geeft betere tochtkering en geluidsdemping dan een stompe deur, maar minder modern uiterlijk. Deurbreedte = dagmaat + 20 mm.',
    },
    {
      id: 'B10-6-d',
      toetstermCode: 'B.10.6',
      type: 'mc',
      prompt:
        'In welke richting draaien deuren in **vluchtroutes van openbare gebouwen**?',
      options: [
        'Naar binnen, om de vluchtroute te scheiden',
        'Naar buiten, in de vluchtrichting',
        'Naar boven (klep)',
        'Maakt niet uit zolang ze open kunnen',
      ],
      correctIndex: 1,
      explanation:
        'Vluchtroutes-deuren openen altijd in de vluchtrichting (naar buiten of naar de vluchtweg). Bij paniek duwen mensen voorwaarts; een naar binnen draaiende deur zou onmogelijk te openen zijn. Vandaar ook **panieksluitingen** (drukbalken) op nooduitgangen.',
    },
    {
      id: 'B10-6-e',
      toetstermCode: 'B.10.6',
      type: 'mc',
      prompt:
        'Een stalen kozijn voor een **opdekdeur** heeft:',
      options: [
        'Geen rubber aanslag — de deur-lip vormt de aanslag zelf',
        'Een dubbele rubber aanslag voor extra tochtdichtheid',
        'Geen scharnieren',
        'Een veel diepere sponning dan voor een stompe deur',
      ],
      correctIndex: 0,
      explanation:
        'Bij een opdekdeur ligt de deur deels OP het kozijn — de overlappende deur-lip vormt de aanslag zelf. Daarom is een stalen kozijn voor opdek **zonder aanslag**. Voor een stompe deur heeft het stalen kozijn juist een rubber aanslag, omdat de deur in het vlak ligt en niet zelf afdicht.',
    },
  ],

  terms: [
    {
      term: 'Kozijn',
      definition:
        'Vast houten of metalen frame in een gevelopening waarin ramen, deuren of glasvlakken worden geplaatst.',
    },
    {
      term: 'Stijl (kozijn)',
      definition:
        'Verticaal deel van een kozijn — links en rechts; vormt samen met regels het frame.',
    },
    {
      term: 'Regel (kozijn)',
      definition:
        'Horizontaal deel van een kozijn — boven (bovenregel), onder (dorpel) of tussen (tussenregel).',
    },
    {
      term: 'Dorpel',
      definition:
        'Onderste horizontale kozijnregel; bij buitenkozijnen vaak van hardhout, kunststeen of aluminium voor waterafvoer.',
    },
    {
      term: 'Slag­lat / aanslag',
      definition:
        'Profielrand waar het draaiende raam of deur tegenaan slaat; bepaalt de afdichting.',
    },
    {
      term: 'Tochtprofiel',
      definition:
        'Rubber of borstel­strip langs slaglat die luchtdicht aansluit op het draaiende deel.',
    },
    {
      term: 'Houten kozijn (meranti/eiken)',
      definition:
        'Klassieke kozijnsoort van duurzaam hardhout; goed isolerend, esthetisch warm, vergt onderhoud (6-8 jaar lakken).',
    },
    {
      term: 'Beglazings­profiel',
      definition:
        'Profiel of kit waarmee glas waterdicht in het kozijn wordt vastgezet (rondom voorzien van glaslat).',
    },
    {
      term: 'Glaslat',
      definition:
        'Smal latje dat het glas in het kozijn klemt; aan binnen- of buitenzijde — bij voorkeur binnen voor inbraak­veiligheid.',
    },
    {
      term: 'Beits',
      definition:
        'Halftransparante houtafwerking die de nerf zichtbaar laat en het hout beschermt tegen UV en vocht.',
    },
    {
      term: 'Verflaag (dekkend)',
      definition:
        'Volledig dekkende afwerking voor langere bescherming; vergt onderhoud (8-10 jaar) maar verbergt nerf.',
    },
    {
      term: 'Stelblokje / glasblokje',
      definition:
        'Hard plastic blokje onder het glas dat de last op het juiste punt van het kozijn overbrengt — voorkomt rotsel.',
    },
    {
      term: 'Stelkozijn',
      definition:
        'Houten frame dat tijdens het metselen wordt geplaatst; later wordt het echte kozijn erin gemonteerd.',
    },
    {
      term: 'Onderhoudsinterval',
      definition:
        'Aanbevolen tijd tussen schilderbeurten: 6-8 jaar voor beits, 8-12 jaar voor dekkende verf.',
    },
  ],

  games: [
    {
      id: 'B10-gapfill-1', type: 'gapfill',
      title: 'Maten en raamtypen',
      text:
        'De vrije opening van een kozijn heet de {{dagmaat}}; de buitenkant­maat heet de {{kozijnmaat}}. ' +
        'Een raam met scharnier in zowel boven- als onderdorpel heet een {{taatsraam}}. ' +
        'Een {{draaikiepraam}} kan in drie standen: dicht, draaien en kiepen. ' +
        'Bij een naar binnen draaiende deur is een {{weldorpel}} nodig om regen weg te leiden.',
      distractors: ['sponningmaat', 'tuimelraam', 'uitzetraam', 'kalf'],
    },
    {
      id: 'B10-sort-1', type: 'sort',
      title: 'Inmetsel- of montagekozijn?',
      categories: ['Inmetsel­kozijn', 'Montage­kozijn (in stelkozijn)'],
      items: [
        { label: 'Hout in nieuwbouw met metselwerk', category: 'Inmetsel­kozijn' },
        { label: 'Klassiek gemetseld pand', category: 'Inmetsel­kozijn' },
        { label: 'Aluminium kozijn', category: 'Montage­kozijn (in stelkozijn)' },
        { label: 'Kunststof / PVC kozijn', category: 'Montage­kozijn (in stelkozijn)' },
        { label: 'Renovatie-kozijn in bestaand houten kozijn', category: 'Montage­kozijn (in stelkozijn)' },
      ],
    },
    {
      id: 'B10-matching-1', type: 'matching',
      title: 'Raamtypen herkennen',
      pairs: [
        { left: 'Draairaam', right: 'Verticale scharnier — opent als een deur' },
        { left: 'Valraam (klepraam)', right: 'Onderkant kantelt naar binnen — voor ventilatie' },
        { left: 'Uitzetraam', right: 'Scharnier bovenaan — valt naar buiten' },
        { left: 'Tuimelraam', right: 'Scharnier iets boven het midden — uitzet + val' },
        { left: 'Schuiframen', right: 'Schuiven langs elkaar — geen draairuimte' },
        { left: 'Taatsraam', right: 'Draaipunten in boven- en onderdorpel' },
      ],
    },
  ],
}
