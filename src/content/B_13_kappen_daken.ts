import type { Topic } from '../types/content'

const FIG = '/figs/B_13'
const SRC_18 = 'Lesboek hfd. 18'
const SRC_19 = 'Lesboek hfd. 19'
const SRC_20 = 'Lesboek hfd. 20'

export const B_13_kappen_daken: Topic = {
  code: 'B.13',
  section: 'B',
  title: 'Kappen en daken',
  chapterRef: 'Lesboek hoofdstukken 17 t/m 20',
  blurb:
    'Dak- en kapvormen (zadel, schild, mansarde, wolfseind, tent, shed, plat), draagconstructies van hellende daken (sporenkap, gordingenkap, spanten), gootvormen (mast/zak/bak/verholen/kil), keramische vs betondakpannen, dakbedekkingen (leien, riet, metaal, bitumen APP/SBS, EPDM, PVC), groendaken (extensief/intensief/sedum/retentie) en herkennen van dakgebreken.',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · Dakvormen en kapvormen',
      toetstermCodes: ['B.13.1'],
      body: `
B.13.1 vraagt **kap- en dakvormen te herkennen**. Onderscheid eerst tussen **plat dak** en **hellend dak**.

### Platte daken
Eén bijna-horizontaal vlak met minstens **1 % afschot** naar minimaal twee hemelwaterafvoeren. Vaak op moderne nieuwbouw, garages, aanbouwen, kantoorgebouwen.

### Hellende daken
| Naam | Vorm | Kenmerk |
|---|---|---|
| **Lessenaardak** | Eén hellend vlak | Steile hellingen, één gootlijn |
| **Zadeldak** | Twee dakschilden in de nok samenkomend | Meest voorkomende vorm in NL — driehoekige topgevel |
| **Schilddak** | Vier dakschilden, rondom op gelijke hoogte | Hoekkepers; nok evenwijdig aan langste gevel |
| **Dak met wolfseinden** | Schilddak waarbij topgevel niet doorloopt tot nok — klein dakvlak ('wolfseind') op de gevel | Veel bij boerderijen en rietdaken |
| **Mansardedak (gebroken dak)** | Zadeldak met **twee verschillende hellingen** — onderste steiler | Extra zolderruimte; Frans 17e eeuw |
| **Tentdak (piramidedak)** | Vier dakschilden samenkomend in één punt | Vierkante plattegrond — toren, paviljoen |
| **Torendak** | Tentdak met zeer steile hellingen | Veelhoekige plattegronden |
| **Zaag- of sheddak** | Aaneenschakeling van zadeldaken, één vlak (60–90°) als glaswand | Fabrieken — glaswand op noorden voor schaduwvrij licht |
| **Schaaldak** | Zelfdragend, dun gebogen vlak | Modern beton- of staalbouw, theaters |

### Kapvormen (per plattegrond-richting)
Met **kap** wordt de **structuur** van een hellend dak bedoeld; de richting van de nok ten opzichte van de plattegrond geeft de kapvorm aan:

- **Langskap** — nok loopt **evenwijdig** aan de langste gevel (standaard rijwoning)
- **Dwarskap** — nok **loodrecht** op de langste gevel (typisch boerderij, of een uitbouw met dwarsdak)
- **Kruiskap** — twee elkaar **kruisende dakvlakken** (T-vormig of L-vormig gebouw)

> **Geheugensteun**: het kruisvlak heeft **hoekkepers** (uitwendige snijhoek) en **kilkepers** (inwendige snijhoek). In een kilkeper komt een **kilgoot** die het hemelwater van twee dakvlakken samen afvoert — gevoelig voor verstopping.
      `.trim(),
      images: [
        {
          src: `${FIG}/dakvormen-overzicht.svg`,
          caption: 'De tien dakvormen op een rij: plat dak, lessenaarsdak, zadeldak, schilddak, dak met wolfseinden, mansardedak, tentdak, torendak, zaag-/sheddak en schaaldak.',
          source: 'Eigen tekening',
          width: 'full',
        },
        {
          src: `${FIG}/kapplan.jpg`,
          caption: 'Kapplan met heel spant, half spant, hoekkeperbalk, kilkeperbalk, nok, gording en kantgording — basis-opbouw van een hellend dak.',
          source: SRC_19,
          width: 'md',
        },
      ],
    },

    {
      heading: '2 · Draagconstructies: sporenkap, gordingenkap en spanten',
      toetstermCodes: ['B.13.2'],
      body: `
Bij een hellend dak onderscheiden we het **dakschild** (afsluitend, met dakbeschot + dakbedekking) en de **kapconstructie** (dragend).

### Sporenkap vs gordingenkap
- **Sporenkap**: **sporen** (kleine balken) staan **loodrecht op de nok**, h.o.h. 0,7–1 m, van muurplaat naar nokbalk. Dakbeschot evenwijdig aan de nok. Eenvoudig, traditioneel.
- **Gordingenkap**: **gordingen** lopen **evenwijdig aan de nok** (van bouwmuur naar bouwmuur). Dakbeschot loodrecht. Voor grotere overspanningen; standaard in oudere rijwoningen.

### Spanten — voor grotere overspanningen
**Spanten** zijn driehoekige draagconstructies die de gordingen op meerdere plaatsen ondersteunen — h.o.h. max. ~3,5 m. Belangrijke types:

- **Verbeterd Hollands spant** — tot ~8 m overspanning; met **borstwering**, dus zolder beloopbaar. Onderdelen: spantbenen, kreupele stijl, blokkeel, trekplaten
- **Hangspant** — grotere overspanningen, zolder niet beloopbaar. Met houtverbindingen en metalen beugels
- **Vakwerkspant / vakwerkligger** — opgebouwd uit **driehoeken** (vormvast). Verbindingen via **knoopplaat/schetsplaat**, gelast of geboutd
- **Gelamineerd driescharnierspant** — voor zeer grote overspanningen (sporthallen, kerken). Verlijmde lamellen met vingerlassen
- **Ruimtevakwerk** — zichtbare stalen 3D-vakwerk-constructie voor overkappingen, stations, snelwegbruggen

### Krachten in een spant
- **Bovenrand**: **drukkrachten** (dak drukt erop)
- **Onderrand**: **trekkrachten** (verhindert dat de spantbenen uit elkaar gaan)
- **Diagonalen**: meestal **drukkrachten** (houden knooppunten samen)

### Onderdelen die je moet kennen
- **Muurplaat** — horizontale balk op de bovenkant van de buitenmuur waarop sporen of spanten rusten
- **Verankering** — muurplaat-anker, opwaai-/stormanker (tegen onderdruk bij wind), strijkbalkanker
- **Nokconstructie** — bovenste lijn van het dak; nokvorsten dekken de pannenaansluiting af
- **Dakvoet** — onderste rand, aansluiting op goot
- **Boeibord / boeiboord** — verticale houten/multiplex of Trespa plaat aan de dakrand van een plat dak; **buitenboeideel 30–50 mm lager** dan binnen, zodat bij verstopping water aan de buitenkant overloopt
- **Mastiekschroot / mastiekrib** — schuine lat (45°) tegen scheurvorming in bitumendekking op platte daken
- **Gootklos** — houten klos op de muurplaat die de goot ondersteunt
- **Aansluiting op opgaand werk** — bij aansluiting van het dak op een hogere wand (schoorsteen, dakkapel-wang) komen **loketten** (lopen door buitenspouwblad omhoog) + **voetlood** (over de pannen tegen de wand)
- **Dakdoorvoeringen / dakdoorbrekingen** — voor schoorsteen, ontluchting; geprefabriceerde kunststof dakdoorvoeren; bij doorbreking van de nok een **bokspant**
- **Vogelschroot** — kunststofstrook aan de dakvoet die voorkomt dat vogels onder de pannen nestelen
- **Windveer** — schuine plank langs de zijgevel die aansluit op het dakvlak; beschermt dakbeschot tegen wind
- **Ventilatie + isolatie** — tussen isolatie en dakbedekking moet ventilatie blijven om condens te voorkomen; bij dampdichte dakbedekking (bitumen) hoort aan de warme zijde een dampdichte folie

### Moderne plaatverbindingen in spanten
- **Kramplaten** — ronde of vierkante stalen platen met scherpe punten + bout
- **Ringdeuvels** en **plaatdeuvels** — in uitgefreesde gleuven
- **Tandplaten / multi-nailplaten** — pennen hydraulisch in het hout gedreven (fabriekspanten)
- **Spijkerplaten / hechtplaten** — geperforeerd verzinkt staal met **slagschroefnagels** (op de bouwplaats te assembleren)
      `.trim(),
      images: [
        {
          src: `${FIG}/sporenkap.jpg`,
          caption: 'Sporenkap: sporen staan loodrecht op de nokbalk, h.o.h. 0,7–1 m. Dakbeschot evenwijdig aan de nok.',
          source: SRC_19,
          width: 'md',
        },
        {
          src: `${FIG}/gordingenkap.jpg`,
          caption: 'Gordingenkap (verbeterd Hollands spant) met spantbenen, kreupele stijl, blokkeel, borstwering en trekplaten.',
          source: SRC_19,
          width: 'md',
        },
        {
          src: `${FIG}/vakwerkspant.jpg`,
          caption: 'Vakwerkspant — driehoeken zorgen voor vormvastheid; voor moderne overspanningen.',
          source: SRC_19,
          width: 'md',
        },
        {
          src: `${FIG}/vakwerkligger.jpg`,
          caption: 'Vakwerkligger: druk in bovenrand, trek in onderrand, diagonalen + verticalen. Verbindingen via knoopplaten of multi-nailplaten.',
          source: SRC_19,
          width: 'md',
        },
        {
          src: `${FIG}/gelamineerd-spant.jpg`,
          caption: 'Gelamineerd houten driescharnier- of kniespant — gelijmde lamellen, ook in gebogen vormen, voor zeer grote overspanningen.',
          source: SRC_19,
          width: 'md',
        },
      ],
    },

    {
      heading: '3 · Gootvormen',
      toetstermCodes: ['B.13.3'],
      body: `
B.13.3 vraagt vijf gootvormen specifiek: **mastgoot, zakgoot, bakgoot, verholen goot, kilgoot**.

### Mastgoot
- **Halfrond** (cirkelsegment), uit één geheel gevormd
- Hangt **buiten de gevel** aan de muurplaat — met **gootbeugels** (h.o.h. max. 600 mm)
- Standaard bij eenvoudige woningen, vooral in zink of PVC
- *Geheugensteun*: 'mast' = de halfronde vorm lijkt op een afgesneden buis

### Zakgoot
- **Diepe goot tussen twee dakvlakken** — typisch bij een **kap met zakgoot** waarbij twee zadeldaken naast elkaar zijn geplaatst met de goot in het midden (grote gebouwen, fabriekshallen)
- Loopt over de hele lengte; vergt sterke draagconstructie
- Vaak gecombineerd met **noodoverstort** vanwege risico op verstopping

### Bakgoot
- **Rechthoekige doorsnede** (platte bodem + verticale wanden)
- Vaak **buiten of bovenop de muur**, soms ingewerkt in een betonbalk
- Standaard bij utiliteit en grotere panden — meer capaciteit dan een mastgoot
- Onderdelen: **muurplaatanker**, **gootbodem**, **gootklos**, **buitenboeideel** (30–50 mm lager dan binnen)

### Verholen goot
- **Onbedekt zichtbare goot** — verborgen onder de dakpannen
- Bij **dakkapellen** (verholen goot langs zijwang), bij dak-aansluitingen op opgaand werk, in monumentaal werk waar geen zichtbare goot gewenst is
- **Esthetisch beter** dan loodaansluiting, maar **gevoelig voor verstopping** door bladeren — onderhoud belangrijk

### Kilgoot
- **In een kilkeper** (inwendige snijhoek tussen twee dakvlakken bij een L- of T-vormig gebouw)
- Verzamelt het water van twee dakvlakken tegelijk — daarom **grote capaciteit nodig**
- Vaak een **pvc-kilgootprofiel** of een loden kilgoot
- **Kwetsbaar punt**: bladeren verzamelen zich in de kil → verstopping → lekkage; bij lage dakhellingen extra risico

### Andere goten (kennen, niet primair examen)
- **Sporengoot** — onderdeel van pannendak, in oude gebouwen
- **Blokgoot** — bakgoot met blokkerig profiel
- **Hanggoot** — varianten van mastgoot, hangend aan beugels
- **Keulse goot** — bovenop een spouwmuur (bij erfgrens of esthetiek)
- **Zalinggoot** — achter een schoorsteen langs, voert hemelwater opzij af

### Materialen
- **Titaanzink** — standaard moderne keuze; nooit met spijkers — werken met **zinken klangen**; om de **10 m broekstuk/expansiestuk**
- **PVC** — goedkoop, snelle montage; om de **12,5 m expansiestuk**
- **Koper, lood, aluminium** — bij specifieke esthetische of monumentale eisen
- **Bitumen (APP / SBS)** — bij grote platte daken; in goot opgenomen
      `.trim(),
      images: [
        {
          src: `${FIG}/bakgoot.jpg`,
          caption: 'Zinken bakgoot buiten de muur met muurplaat, muurplaatanker, gootbodem, gootklos en buitenboeiboord. Standaard goot voor rijwoningen en utiliteit.',
          source: SRC_19,
          width: 'md',
        },
        {
          src: `${FIG}/keulse-goot.jpg`,
          caption: 'Keulse goot — goot bovenop de spouwmuur. Toegepast bij erfgrens-situaties of als esthetische oplossing zonder uitstekend gootprofiel.',
          source: SRC_19,
          width: 'md',
        },
      ],
    },

    {
      heading: '4 · Dakpannen: keramisch vs beton',
      toetstermCodes: ['B.13.4'],
      body: `
In Nederland is de **dakpan** de meest voorkomende dakbedekking voor hellende daken. Twee hoofdgroepen — leer de verschillen qua **levensduur en onderhoud**.

### Keramische dakpannen
- **Materiaal**: gebakken **klei** (vette, taaie, roodbakkende klei uit de grote rivieren of Midden-Limburg)
- **Productie**: stempelpers / revolverpers (voor pannen met sluiting) of strengpers (OH-pan zonder sluiting), drogen, bakken bij ~950 °C
- **Levensduur**: 60–100 jaar; vorstbestendig bij KOMO-keurmerk
- **Onderhoud**: laag — geen verflaag die afslijt; oppervlak blijft kleurvast door **inherent gebakken kleur**
- **Kleurmethodes**:
  - **Oxideren** (overmaat zuurstof) → helderrood
  - **Smoren** (zuurstof afsluiten aan het einde) → blauwzwart
  - **Genuanceerd smoren** → rood-zwart gevlekt (herfsttint)
  - **Verglazen / glazuren** → glanzend, kleur naar keuze (loodglazuur geel-bruin, tinglazuur wit)
  - **Engoberen** → mat-glans dun kleilaagje
- **Prijs**: duurder dan beton
- **Esthetiek**: warmere, kleurrijkere uitstraling; minder uniform

### Betondakpannen
- **Materiaal**: cement + zand + kleurstof + soms vezels — geperst onder hoge druk in een mal
- **Levensduur**: 30–60 jaar; korter dan keramiek (cementgebonden, kan brokkelig worden)
- **Onderhoud**:
  - **Coating** aan het oppervlak verkleurt en kan afbladderen na 15–25 jaar
  - **Mos- en algengroei** komt sneller dan bij keramiek — vaker reinigen of preventief behandelen
  - Bij oudere betondakpannen kunnen **kleur en oppervlak verbleken**
- **Prijs**: goedkoper dan keramiek (~40–60% van de prijs)
- **Esthetiek**: uniformere uitstraling; vlakke en geprofileerde varianten; vaker grijs en zwart

### Onderdelen van een dakpan
- **Kopsluiting** — boven- en onderaansluiting tussen pannen in lengterichting
- **Zijsluiting** — links-rechts aansluiting (vaak een **wel** die over de buurpan valt)
- **Nok / neus** — waaraan de pan op de panlat hangt
- **Wel** — deel dat over de zijsluiting van de buurpan valt
- **Enkele vs dubbele sluiting** — dubbele is water- en winddichter

### Veel voorkomende pantypes
- **OH-pan (Oude Hollandse pan)** — vroeger meest gebruikt, geen kop-/zijsluiting; restauratie
- **VH-pan / OVH-pan / SOVH-pan** — moderne Hollandse pannen met sluiting
- **Tuile du Nord** — vlakke pan, enkele of dubbele sluiting
- **Romaanse pan** — sterk gekromd, verhoogde wel met dubbele zijsluiting
- **Modernere pannen** — sneldekkers, lichtgewicht, soms in PV-integratie

### Vereiste constructie onder pannen
- **Dakbeschot** (vurenhout, multiplex of dakplaat) + thermische isolatie
- Boven de isolatie een **winddichte, dampdoorlatende folie** (mandragende folie)
- **Tengels** (18 mm bij ≥ 25°, 22 mm bij < 25°): verticaal van goot naar nok
- **Panlatten** (min. 22 × 31 mm) evenwijdig aan goot/nok, op de tengels
- Tussen tengels en panlatten een **ventilatiespouw** voor doorgestoven water en kruisventilatie
- **Panhaken** (RVS) of verzinkte schroeven met rubber ring bij steile dakhellingen — tegen opwaaien
      `.trim(),
      images: [
        {
          src: `${FIG}/vlak-vs-hol.jpg`,
          caption: 'Verschil tussen een vlakke pan (links) en een holle pan (rechts) — bepaald door de vorm van de kopsluiting.',
          source: SRC_18,
          width: 'md',
        },
        {
          src: `${FIG}/tengels-panlatten.jpg`,
          caption: 'Tengels (verticaal, op het dakbeschot) en panlatten (horizontaal, op de tengels). Ventilatieruimte daartussen voorkomt vocht onder de pannen.',
          source: SRC_18,
          width: 'md',
        },
      ],
    },

    {
      heading: '5 · Dakbedekkingen: leien, riet, metaal, bitumen en kunststof',
      toetstermCodes: ['B.13.5'],
      body: `
Naast dakpannen bestaan er nog veel andere dakbedekkingen. B.13.5 vraagt je om de eigenschappen en toepassingen te kunnen toelichten.

### Leien (natuursteen)
- **Omvormingsgesteente uit klei** — gelaagd, hard, makkelijk te splijten
- **Dubbele dekking**: lagen overlappen elkaar — duurzaam, esthetisch in monumentale bouw
- **Vochtdichte, dampdoorlatende folie** onder de leien
- Levensduur: 80–150 jaar
- Hoge prijs; vaak in monumenten, kerken, klassieke bebouwing

### Leipannen (keramisch)
- **Keramische pan** in de vorm van een lei
- Met **ophangnok** — gemakkelijker te plaatsen dan natuurleien
- Lijkt visueel op leien, goedkoper

### Vezelcementleien
- Vervanger van de **verboden asbestcementleien**
- Portlandcement + kunststofvezels + harscoating
- Ook gebruikt als wandbekleding (Eternit, Cembrit)
- Brandwerender dan rietdak
- Levensduur 30–50 jaar

### Riet
- **Natuurproduct** — rietlagen vastgebonden op rietlatten en sporen
- **Bbl-eis**: alleen toegestaan onder voorwaarden (brandklasse-eis door brandweer)
- **Brandvertragend impregneren** mogelijk, maar vermindert levensduur
- Levensduur ongeprepareerd: 30–50 jaar; rietkant aan de zonzijde sneller versleten
- **Geen goot** — water zakt in de grond bij de regel; **knijpdeel** onder overstek
- **Geen zink** in de buurt — humuszuren tasten zink aan
- Voor de nok: **schaalvorsten of rietvorsten**

### Metalen dakbedekkingen
- **Koper** — rood, ontwikkelt groene patinalaag; zeer duurzaam (100+ j); duur; voor kerken en monumenten
- **Zink / titaanzink** — gewone keuze voor moderne platte en gebogen daken; aanduiding **NHL + getal** (kg/m²)
- **Lood** — sinds eind 20e eeuw veel vervangen door EPDM; nog wel voor dakdoorbrekingen (slabben max. 1,5 m, overlap ≥ 100 mm)
- **Staal** — gegalvaniseerd of gemoffeld; bij utiliteit en lichte daken (golfplaten, sandwichpanelen)
- **Aluminium** — moderne keuze voor stedelijk gebogen daken (Kalzip-systemen); lichter en onderhoudsarm dan zink

### Bitumineuze dakbedekking (APP / SBS)
- **Twee soorten gemodificeerd bitumen**:
  - **APP** (Atactisch Polypropyleen) → UV-bestendig, dichte structuur; ideaal voor zonbeschenen platte daken; geen ballast nodig
  - **SBS** (Styreen-Butadieen-Styreen) → flexibeler, beter koude- en bewegingsbestendig; vereist ballastlaag (grind) tegen UV
- **Toepassing**: platte daken in 2–3 lagen, mechanisch bevestigd of gebrand
- Levensduur: 25–40 jaar

### Kunststof dakbedekkingen
- **EPDM** (Ethyleen-Propyleen-Dieen Monomeer — synthetisch rubber)
  - Eén grote vellenbaan, weinig naden
  - Zeer duurzaam (40+ j), uv-bestendig, koude-bestendig
  - Standaard moderne keuze voor platte daken in particuliere bouw
- **PVC** (geplastificeerd polyvinylchloride)
  - Standaard in utiliteit; lassen met heteluchtblazer
  - Gevoeliger voor uv-veroudering dan EPDM; krimpt op den duur

### Vergelijking voor het examen
| Dakbedekking | Hellend | Plat | Levensduur | Bijzonderheid |
|---|---|---|---|---|
| Keramische dakpan | ✔ | – | 80+ j | duur, kleurvast |
| Betondakpan | ✔ | – | 40–60 j | goedkoper, coating verkleurt |
| Leien | ✔ | – | 80–150 j | monumenten |
| Riet | ✔ | – | 30–50 j | natuurlijk, brandgevoelig |
| Zink / titaanzink | ✔ | ✔ | 40–60 j | klangen, expansiestukken |
| Koper | ✔ | ✔ | 100+ j | groene patina |
| Bitumen APP | – | ✔ | 25–40 j | UV-bestendig, geen ballast |
| Bitumen SBS | – | ✔ | 25–40 j | flexibel, grindballast |
| EPDM | – | ✔ | 40+ j | naadloos rubber, standaard particulier |
| PVC | – | ✔ | 25–40 j | utiliteit, lassen |
      `.trim(),
      images: [
        {
          src: `${FIG}/warmdak-houten.jpg`,
          caption: 'Warmdak-principe op houten balklaag — isolatie aan buitenzijde, dakbedekking direct op isolatie. Geen geventileerde ruimte.',
          source: SRC_20,
          width: 'md',
        },
        {
          src: `${FIG}/kouddak.jpg`,
          caption: 'Kouddak op houten balklaag — isolatie tussen rachels + dampremmende laag aan warme zijde + geventileerde ruimte onder dakbeschot.',
          source: SRC_20,
          width: 'md',
        },
        {
          src: `${FIG}/omgekeerd-dak.jpg`,
          caption: 'Omgekeerd dak op steenachtige vloer — isolatie op de dakbedekking, ballast (drainage-tegels of grind) erop. Voor renovatie.',
          source: SRC_20,
          width: 'md',
        },
      ],
    },

    {
      heading: '6 · Groendaken',
      toetstermCodes: ['B.13.6'],
      body: `
Een **groendak** is een dak waarop een vegetatielaag is aangebracht. Wordt steeds populairder vanwege klimaat-, isolatie- en stadsvergroenings-doelen.

### Soorten groendaken

**Extensief groendak**
- **Dunne** laag (5–15 cm), licht gewicht (60–150 kg/m²)
- Vegetatie: mos, vetplanten (sedum), kruiden
- **Weinig onderhoud** (1–2× per jaar)
- Vaak passieve sedum-matten op een drainagelaag
- Geschikt voor zowel platte als licht hellende daken
- **Goedkoper** dan intensief

**Intensief groendak (daktuin)**
- **Dikke** laag (30+ cm), zwaar (300–1500 kg/m²)
- Vegetatie: gras, struiken, kleine bomen
- **Veel onderhoud** (maaien, snoeien, bemesten)
- Begaanbaar, ontworpen als tuin
- Vraagt **constructieve versterking** — niet elk dak geschikt
- **Duurder**

**Sedumdak** (specifieke variant van extensief)
- Met **droogtebestendige vetplantjes** (sedum)
- Vereist nauwelijks irrigatie
- Veel kleurvariatie (rood-groen tot bloeiwit)
- Standaard 'starter'-vorm van groendaken in moderne nieuwbouw

**Retentiedak**
- Ontworpen voor **buffering van regenwater** (tegen wateroverlast bij hevige buien) — speciaal substraat houdt water vast, geeft langzaam af
- Bovenkant kan kale ballast of sedum zijn
- Belangrijke maatregel in **klimaatadaptatie** (stedelijke afkoeling, regenpiekverwerking)

### Voordelen van een groendak
- **Bescherming van dakbedekking** tegen UV en mechanische schade → verlengt levensduur dakbedekking met 2–3×
- **Warmte-isolatie** + verkoeling 's zomers (verdamping)
- **Geluidsisolatie** (massa + demping)
- **Fijnstoffilter** + **CO₂-opname**
- **Biodiversiteit** — insecten, vogels, bloemen
- **Esthetiek**, met name in stedelijke gebieden
- **Subsidies** (gemeentelijke regelingen voor klimaatadaptatie)
- **Bufferfunctie** voor regenwater → ontlast riolering

### Nadelen
- **Extra belasting** op dakconstructie (60–1500 kg/m² afhankelijk van type)
- **Hogere aanlegkosten** — substraat, drainagelaag, wortelwerende laag, irrigatie
- **Onderhoud** — bij intensief intens; bij extensief minimaal
- **Risico op lekkage** als wortelwerende laag faalt — wortels van bomen kunnen waterdichte laag perforeren
- **Vraagt controle constructie** — vooral bij oudere daken
- Bij **opwaaipanden** (kustgebied, hoge wind): risico op uitwaaien van losse vegetatie → ballastopties

### Vereisten voor de opbouw
1. **Waterdichte dakbedekking** (EPDM, APP-bitumen)
2. **Wortelwerende laag** (vaak gecombineerd in moderne EPDM/bitumen)
3. **Beschermlaag** tegen mechanische schade
4. **Drainagelaag** (gepatenteerde drainprofielen of grind)
5. **Filtervlies** (geotextiel)
6. **Substraat** (lichte tuinmix)
7. **Vegetatie**
      `.trim(),
      images: [
        {
          src: `${FIG}/groendak.jpg`,
          caption: 'Voorbeeld van een plat dak met begroeiing — vegetatielaag op substraat, drainage en wortelwerende lagen onder.',
          source: SRC_20,
          width: 'md',
        },
      ],
    },

    {
      heading: '7 · Dakgebreken herkennen',
      toetstermCodes: ['B.13.7'],
      body: `
B.13.7 (Toepassen, BT2) vraagt om in een **casus een dakgebrek te identificeren**. Onderstaand de meest examen-relevante gebreken — leer oorzaak en typische plaats:

### Blaasvorming in dakbedekking
- **Wat zie je**: opbollende plekken in de bitumineuze dakbedekking, vaak na een warme dag
- **Oorzaak**: ingesloten **vocht of lucht** onder de bedekking expandeert door zonwarmte → blaas
- **Voorkomen / verhelpen**: bij aanleg goed verdichten, geen vocht insluiten; reparatie door openslijpen + nieuwe bitumenstrook

### Gekrompen kunststof dakbedekking (PVC/EPDM)
- **Wat zie je**: dakbedekking trekt los van de **randen** (boeibord, dakopstand); openingen langs aansluitingen
- **Oorzaak**: kunststof krimpt door **UV-veroudering** en herhaalde temperatuurwisselingen; PVC krimpt sterker dan EPDM
- **Voorkomen**: goede randafdekking + extra mechanische bevestiging in de randen; tijdige vervanging (~25 j PVC, ~40 j EPDM)

### Gescheurd lood bij dakaansluitingen of schoorsteen
- **Wat zie je**: scheuren in **slabben** rond schoorsteen, dakkapel of bij wandaansluiting
- **Oorzaak**:
  - **Kruip** van lood (lood rekt traag onder eigen gewicht) → bij **slabben langer dan 1,5 m** zonder overlap
  - Mechanische belasting (lopen op het lood)
  - Te kort vastgezet (geen ruimte voor uitzetting)
- **Voorkomen**: max. 1,5 m slabben, overlap ≥ 100 mm, NHL-gewicht passend bij situatie (NHL 18 bij opwaaikans)
- **Verhelpen**: lood vervangen, of overstappen op EPDM voor de aansluiting

### Krimp bitumineuze dakbedekking
- **Wat zie je**: opgetrokken plooien in de bedekking, scheuren langs randen, gescheurde aansluitingen
- **Oorzaak**: **veroudering** van bitumen (UV, temperatuurcycli) → bitumen wordt bros en krimpt; vooral SBS zonder grindballast
- **Voorkomen**: APP-bitumen voor zonbeschenen daken; SBS met voldoende grindballast

### Lekkage van een (zinken) goot
- **Oorzaak**:
  - Geen **broekstuk / expansiestuk** om de 10 m → zink scheurt onder uitzetting
  - **Spijkers door zink** in plaats van klangen → zink scheurt rondom de spijkers
  - **Verstopping** door bladeren → water staat in de goot en dringt door felsranden
  - **Aantasting door zwavel of humuszuren** (industrielucht, rieten daken)

### Lekkage in koud- of warm-dakconstructie
- **Koud dak**: condens in de geventileerde ruimte → vocht op **bovenzijde isolatie** → druppels op plafond. Oorzaak: dampremmende folie aan warme zijde **ontbreekt of is beschadigd**
- **Warm dak**: vocht in de isolatie als **dampremmende folie ontbreekt** → druppel-vorming bij koudebruggen; dakbedekking blijft droog maar plafond vocht

### Lekkage voetlood schoorsteen
- **Wat zie je**: vochtsporen langs de schoorsteen aan de binnenzijde
- **Oorzaak**: **scheuren in het voetlood** (zie hierboven), of **slechte aansluiting loket** (in buitenspouwblad)
- **Verhelpen**: voetlood vervangen, loket controleren, open stootvoegen vrijhouden

### Lekkage plat dak
- Veelvuldige oorzaken: verbinding bedekking met opstand, dakgoten, dakdoorvoeringen
- **Plassen** zijn een signaal: water blijft staan → indringt bij minste defect

### Lekkage rond dakopeningen
- Aansluiting bij **dakraam**, **dakkapel**, **lichtkoepel**
- Vaak slechte loodaansluiting of verholen goot verstopt
- Bij dakkapel: zijwang-aansluiting kritisch

### Scheuren in voetlood
- Zie 'gescheurd lood' — meestal te lange slabben + kruip

### Vochtproblemen in dakconstructie
- **Symptoom**: muffe lucht, schimmel onder dakbeschot
- **Oorzaak**: geen of slechte ventilatie tussen isolatie en dakbedekking + ontbrekende dampremmende folie aan warme zijde
- **Verhelpen**: ventilatie herstellen (kniekokers vrijmaken), dampremmer aanbrengen vanaf binnenzijde

### Vochtdoorslag dakaansluiting schoorsteen
- Zie 'lekkage voetlood' — combinatie van loket, voetlood en open stootvoegen moet werken

### Vochtdoorslag bij plafonds
- **Witte plekken / kringen** op plafond, vooral na regen
- Oorzaak boven het plafond: lekkage in dak, condens onder dakbeschot, lek in installatie
- Eerst dak controleren (na regen), daarna leidingen

### Generieke aanpak (Bouwkundige opname)
1. **Visuele inspectie** dakvlak, randen, aansluitingen, doorvoeren
2. **Vraag de bewoner**: 'wanneer is het probleem voor het eerst opgemerkt? Bij welke weersomstandigheden?'
3. **Beoordeel constructie** (warm/koud dak; ventilatie; staat van isolatie)
4. **Specialistisch onderzoek**: vochtmeting, lekzoeker, infraroodthermografie bij twijfel
      `.trim(),
    },
  ],

  toetstermen: [
    {
      code: 'B.13.1',
      text: 'Herkent de verschillende kapvormen langs-, dwars- en kruiskap, en dakvormen, zoals plat dak, zadeldak, schilddak, wolfseind, mansardekap, tentdak, lessenaarsdak, schaaldak, zaag- of sheddak.',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'B.13.2',
      text: 'Verwoordt de constructieve opbouw, detaillering en onderdelen van kappen en daken: draagconstructies (spanten, verankeringen, muurplaat, sporenkap, gordingenkap, afschotconstructies, stadsuitloop, scheggen, boeiboorden, mastiekschroten en gootklossen, aansluiting aan opgaand werk, dakdoorvoeringen, dakdoorbrekingen, dakvoet- en nokconstructies, vogelschroot, windveer, ventilatie en isolatie).',
      niveau: 'BT1',
      bloom: 'Begrip',
    },
    {
      code: 'B.13.3',
      text: 'Verwoordt de functionaliteit en de toepassingen van de gootvormen mastgoot, zakgoot, bakgoot, verholen goot en kilgoot.',
      niveau: 'BT1',
      bloom: 'Begrip',
    },
    {
      code: 'B.13.4',
      text: 'Herkent een keramische en een betonnen dakpan en beschrijft de verschillen qua levensduur en onderhoud.',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'B.13.5',
      text: 'Licht de volgende dakbedekkingen toe: leien, leipannen, riet, metaal (koper, zink, lood, staal, aluminium), bitumineuze (APP en SBS) en kunststof (EPDM en PVC).',
      niveau: 'BT1',
      bloom: 'Begrip',
    },
    {
      code: 'B.13.6',
      text: 'Beschrijft wat een groendak is en benoemt de voor- en nadelen van zo’n groen dak.',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'B.13.7',
      text: 'Stelt in een casus waarin sprake is van een bouwgebrek vast om welk gebrek het gaat: blaasvorming, gekrompen kunststof dakbedekking, gescheurd lood, krimp bitumen, lekkage goot, lekkage koud/warm dak, lekkage voetlood schoorsteen, lekkage plat dak, lekkage rond dakopeningen, scheuren voetlood, vochtproblemen dakconstructie, vochtdoorslag schoorsteenaansluiting, vochtdoorslag bij plafonds.',
      niveau: 'BT2',
      bloom: 'Toepassen',
    },
  ],

  questions: [
    // === B.13.1 — Dakvormen: beeldvragen (herkennen op tekening) ===
    {
      id: 'B13-1-beeld-zadel',
      toetstermCode: 'B.13.1',
      type: 'mc',
      prompt: 'Welke dakvorm zie je op deze tekening?',
      image: {
        src: '/figs/vragen/dak-zadel.svg',
        caption: 'Welke dakvorm?',
        width: 'md',
      },
      options: ['Schilddak', 'Zadeldak', 'Lessenaarsdak', 'Tentdak'],
      correctIndex: 1,
      explanation:
        'Twee dakschilden die in de nok samenkomen boven een driehoekige topgevel — dat is een zadeldak, de meest voorkomende dakvorm in Nederland.',
    },
    {
      id: 'B13-1-beeld-schild',
      toetstermCode: 'B.13.1',
      type: 'mc',
      prompt: 'Welke dakvorm zie je op deze tekening?',
      image: {
        src: '/figs/vragen/dak-schild.svg',
        caption: 'Welke dakvorm?',
        width: 'md',
      },
      options: ['Zadeldak', 'Mansardedak', 'Schilddak', 'Wolfseinddak'],
      correctIndex: 2,
      explanation:
        'Vier dakvlakken die rondom op gelijke hoogte aansluiten met hoekkepers, nok evenwijdig aan de langste gevel — een schilddak.',
    },
    {
      id: 'B13-1-beeld-mansarde',
      toetstermCode: 'B.13.1',
      type: 'mc',
      prompt: 'Welke dakvorm zie je op deze tekening?',
      image: {
        src: '/figs/vragen/dak-mansarde.svg',
        caption: 'Welke dakvorm? Let op de knik in het dakvlak.',
        width: 'md',
      },
      options: ['Mansardedak', 'Schilddak', 'Tentdak', 'Sheddak'],
      correctIndex: 0,
      explanation:
        'De knik in het dakvlak — onderste deel steiler dan het bovenste — is hét kenmerk van een mansardedak (gebroken dak). Geeft extra zolderruimte.',
    },
    {
      id: 'B13-1-beeld-tent',
      toetstermCode: 'B.13.1',
      type: 'mc',
      prompt: 'Welke dakvorm zie je op deze tekening?',
      image: {
        src: '/figs/vragen/dak-tent.svg',
        caption: 'Welke dakvorm?',
        width: 'md',
      },
      options: ['Schilddak', 'Tentdak', 'Wolfseinddak', 'Torendak'],
      correctIndex: 1,
      explanation:
        'Vier dakschilden die samenkomen in één nokpunt boven een vierkante plattegrond — een tentdak of piramidedak. Bij een schilddak is er een nok (lijn), hier een punt.',
    },
    {
      id: 'B13-1-beeld-shed',
      toetstermCode: 'B.13.1',
      type: 'mc',
      prompt: 'Welke dakvorm zie je op deze tekening?',
      image: {
        src: '/figs/vragen/dak-shed.svg',
        caption: 'Welke dakvorm? Let op de glasvlakken.',
        width: 'md',
      },
      options: ['Mansardedak', 'Sheddak', 'Lessenaarsdak', 'Schaaldak'],
      correctIndex: 1,
      explanation:
        'Aaneenschakeling van zadeldaken waarvan één vlak (60–90°) een glaswand is — een zaag- of sheddak. Typisch voor fabrieken, met de glaswand op het noorden.',
    },
    {
      id: 'B13-1-beeld-wolf',
      toetstermCode: 'B.13.1',
      type: 'mc',
      prompt: 'Welke dakvorm zie je op deze tekening?',
      image: {
        src: '/figs/vragen/dak-wolfseinden.svg',
        caption: 'Welke dakvorm? Let op het kleine schuine vlak bovenaan de gevel.',
        width: 'md',
      },
      options: ['Zadeldak', 'Dak met wolfseinden', 'Schilddak', 'Mansardedak'],
      correctIndex: 1,
      explanation:
        'Een zadeldak waarbij de topgevel niet doorloopt tot de nok, maar bovenaan een klein schuin dakvlak (het wolfseind) heeft. Veel bij boerderijen en rietdaken.',
    },

    // === B.13.1 — Dakvormen (4) ===
    {
      id: 'B13-1-a',
      toetstermCode: 'B.13.1',
      type: 'mc',
      prompt: 'Een **schilddak** kenmerkt zich door:',
      options: [
        'Eén hellend dakvlak',
        'Twee dakschilden die in een nok samenkomen',
        'Vier dakvlakken rondom, met hoekkepers',
        'Vier dakschilden die in één nokpunt samenkomen',
      ],
      correctIndex: 2,
      explanation:
        'Een schilddak heeft vier dakvlakken rondom, met de nok evenwijdig aan de langste gevel. De vier uitwendige snijhoeken vormen hoekkepers. Niet te verwarren met een tentdak (vier vlakken naar één punt).',
    },
    {
      id: 'B13-1-b',
      toetstermCode: 'B.13.1',
      type: 'mc',
      prompt: 'Een **mansardedak (gebroken dak)** is:',
      options: [
        'Een zadeldak met twee verschillende hellingen',
        'Een schilddak met afgesneden topgevel',
        'Een tentdak op vierkante plattegrond',
        'Een dak met meerdere gootlijnen',
      ],
      correctIndex: 0,
      explanation:
        'Een mansardedak heeft twee verschillende hellingen: het onderste deel is veel steiler, het bovenste vlakker. Geeft extra zolderruimte. Klassieke Franse 17e-eeuwse vorm.',
    },
    {
      id: 'B13-1-c',
      toetstermCode: 'B.13.1',
      type: 'mc',
      prompt: 'Bij een fabriekshal met **sheddak** zit de glaswand meestal:',
      options: [
        'Op het zuiden — voor maximale lichtinval',
        'Op het noorden, voor gelijkmatig schaduwvrij licht',
        'Op het oosten — voor ochtendlicht',
        'Op het westen — voor middaglicht',
      ],
      correctIndex: 1,
      explanation:
        'Een sheddak heeft afwisselende zadeldakjes met de ene zijde 60–90° (glaswand) en de andere ~30°. De glaswand komt op het noorden — daar geen direct zonlicht, dus gelijkmatige verlichting van de werkvloer zonder schaduwen of verblinding.',
    },
    {
      id: 'B13-1-d',
      toetstermCode: 'B.13.1',
      type: 'mc',
      prompt:
        'Wat is het verschil tussen een **langskap** en een **dwarskap**?',
      options: [
        'Langskap is een lange, smalle kap; dwarskap is een korte, brede kap',
        'Langskap: nok evenwijdig aan de gevel; dwarskap: loodrecht',
        'Langskap is voor woningen, dwarskap voor schuren',
        'Langskap heeft één goot, dwarskap altijd twee',
      ],
      correctIndex: 1,
      explanation:
        'Het onderscheid betreft de **richting van de nok**: langskap = nok evenwijdig aan langste gevel (standaard rijwoning), dwarskap = nok loodrecht op langste gevel (vaak boerderij of uitbouw). Bij een T- of L-vormig pand met beide spreekt men van **kruiskap**.',
    },

    // === B.13.2 — Constructieve opbouw (5) ===
    {
      id: 'B13-2-a',
      toetstermCode: 'B.13.2',
      type: 'mc',
      prompt: 'Wat is het verschil tussen een **sporenkap** en een **gordingenkap**?',
      options: [
        'Bij sporenkap zijn de sporen evenwijdig aan de nok, bij gordingenkap loodrecht',
        'Sporenkap: sporen loodrecht op de nok; gordingenkap: gordingen evenwijdig',
        'Een sporenkap is alleen voor platte daken',
        'Een gordingenkap heeft geen dakbeschot',
      ],
      correctIndex: 1,
      explanation:
        'Sporenkap = sporen loodrecht op de nok, dakbeschot evenwijdig aan nok — eenvoudige, traditionele kap. Gordingenkap = gordingen evenwijdig aan de nok (over de gehele lengte van het pand), met dakbeschot loodrecht erop — voor grotere overspanningen.',
    },
    {
      id: 'B13-2-b',
      toetstermCode: 'B.13.2',
      type: 'mc',
      prompt: 'Wat is een **muurplaat** in een dakconstructie?',
      options: [
        'Een metalen plaat in de muur die aardbevingen opvangt',
        'Een dampscherm tussen muur en dak',
        'Een horizontale balk op de muur waarop sporen rusten',
        'Een betonnen latei boven een gevelopening',
      ],
      correctIndex: 2,
      explanation:
        'De muurplaat is de horizontale houten balk bovenop de buitenmuur die de overgang vormt naar het dakvlak. Sporen of spanten rusten erop. Verankerd met muurplaatankers tegen opwaaien (wind kan onderdruk geven op het dak).',
    },
    {
      id: 'B13-2-c',
      toetstermCode: 'B.13.2',
      type: 'mc',
      prompt:
        'In een **vakwerkligger** zit:',
      options: [
        'Drukkracht in de onderrand en trekkracht in de bovenrand',
        'Druk in de bovenrand, trek in de onderrand',
        'Alleen trekkracht in alle staven',
        'Alleen drukkracht in alle staven',
      ],
      correctIndex: 1,
      explanation:
        'Bij een vakwerkligger op buigen: bovenrand drukt (dak duwt erop), onderrand trekt (zou zonder onderrand uit elkaar gaan), en de diagonalen geven vooral druk om de knooppunten samen te houden. Dit principe geldt ook voor een verbeterd Hollands spant.',
    },
    {
      id: 'B13-2-d',
      toetstermCode: 'B.13.2',
      type: 'mc',
      prompt:
        'Waarom is een **buitenboeideel 30–50 mm lager** dan een binnenboeideel bij een plat dak?',
      options: [
        'Voor de esthetiek',
        'Zodat water bij verstopping aan de buitenkant overloopt',
        'Om koudebrug te voorkomen',
        'Omdat zink niet hoger mag dan het houtwerk',
      ],
      correctIndex: 1,
      explanation:
        'De buitenrand is bewust lager: als de hemelwaterafvoer verstopt raakt en het water op het dak begint te stijgen, vloeit het bij ~30–50 mm overloop aan de buitenkant over (zichtbaar voor bewoners, geen plafondschade). Een hogere buitenrand zou bij verstopping juist binnen overlopen — ramp voor het pand.',
    },
    {
      id: 'B13-2-e',
      toetstermCode: 'B.13.2',
      type: 'mc',
      prompt:
        'Wat is de functie van een **vogelschroot** bij een pannendak?',
      options: [
        'Geluidsisolatie tussen pannen en dakbeschot',
        'Een strook aan de dakvoet tegen nestelende vogels',
        'Een kleurmodificatie van de dakpan',
        'Een stormbeschermer tegen opwaaien van pannen',
      ],
      correctIndex: 1,
      explanation:
        'Een vogelschroot is een kunststofkam met openingen tussen de panribbels, aan de onderkant van het pannendak. Houdt vogels (vooral mussen, spreeuwen) buiten de spouw onder de pannen zonder de ventilatie te belemmeren.',
    },

    // === B.13.3 — Gootvormen (4) ===
    {
      id: 'B13-3-a',
      toetstermCode: 'B.13.3',
      type: 'mc',
      prompt: 'Een **kilgoot** wordt geplaatst:',
      options: [
        'Aan de dakvoet langs de hele dakrand',
        'In een kilkeper',
        'Bovenop de spouwmuur als esthetische oplossing',
        'Halverwege het dak om extra capaciteit te bieden',
      ],
      correctIndex: 1,
      explanation:
        'Een kilkeper is de inwendige snijhoek tussen twee dakvlakken (bij L- of T-vormige gebouwen). In deze kilkeper komt een kilgoot — meestal een kunststof- of loden profiel — die het water van twee dakvlakken samen afvoert. Kwetsbaar voor verstopping door bladeren.',
    },
    {
      id: 'B13-3-b',
      toetstermCode: 'B.13.3',
      type: 'mc',
      prompt: 'Een **verholen goot** is:',
      options: [
        'Een hangende goot uit verzinkt staal',
        'Een goot verborgen onder de dakpannen',
        'Een goot binnenshuis voor regenwateropvang',
        'Een tijdelijke goot tijdens de bouw',
      ],
      correctIndex: 1,
      explanation:
        'Verholen = verborgen. De goot ligt onder de dakpannen, niet zichtbaar aan de buitenkant — fraai bij dakkapellen en monumentaal werk. Nadeel: bladeren en mos kunnen makkelijk verstoppen (onzichtbaar tot er lekkage komt). Vraagt regelmatig onderhoud.',
    },
    {
      id: 'B13-3-c',
      toetstermCode: 'B.13.3',
      type: 'mc',
      prompt: 'Waarom moet bij een **zinken goot** om de ~10 m een **broekstuk (expansiestuk)** worden geplaatst?',
      options: [
        'Voor verbetering van de waterafvoer',
        'Om uitzetting en krimp van zink op te vangen',
        'Om de gootbeugels te ondersteunen',
        'Voor geluidsdemping bij regen',
      ],
      correctIndex: 1,
      explanation:
        'Zink heeft een hoge uitzettingscoëfficiënt (~30 × 10⁻⁶ /K). Een lange goot zonder bewegingsvrijheid bouwt thermische spanning op en scheurt. Een broekstuk (expansiestuk) is een rubberen of glijdende verbinding die uitzetting van ~10 m zink kan opvangen — daarom om de 10 m geplaatst. Voor PVC is dat 12,5 m.',
    },
    {
      id: 'B13-3-d',
      toetstermCode: 'B.13.3',
      type: 'mc',
      prompt:
        'Een **mastgoot** herkenbaar aan zijn vorm is:',
      options: [
        'Een rechthoekige goot met platte bodem',
        'Een halfronde goot',
        'Een goot die binnen de gevel verborgen ligt',
        'Een goot met dubbele bodem voor wateropslag',
      ],
      correctIndex: 1,
      explanation:
        'De mastgoot is halfrond — vandaar de naam (lijkt op een afgesneden mast / buis). Hangt buiten de gevel aan de muurplaat met gootbeugels (h.o.h. max. 600 mm). Standaard bij eenvoudige woningen, vooral in zink en PVC.',
    },

    // === B.13.4 — Pannen (3) ===
    {
      id: 'B13-4-a',
      toetstermCode: 'B.13.4',
      type: 'mc',
      prompt:
        'Wat is een belangrijk verschil in **onderhoud en levensduur** tussen een keramische en een betondakpan?',
      options: [
        'Keramische pannen hebben een coating die verkleurt; betondakpannen blijven 100 jaar kleurvast',
        'Beide hebben dezelfde levensduur',
        'Keramisch is kleurvast en gaat langer mee; beton verkleurt sneller',
        'Betondakpannen zijn moeilijker te vervangen dan keramische',
      ],
      correctIndex: 2,
      explanation:
        'Keramische pannen hebben hun kleur in de gebakken klei (oxideren/smoren/glazuren) — die slijt niet. Betondakpannen hebben de kleur in een oppervlaktecoating; deze verkleurt en bladdert af in 15–25 jaar. Levensduur: keramiek 60–100 j vs beton 30–60 j.',
    },
    {
      id: 'B13-4-b',
      toetstermCode: 'B.13.4',
      type: 'mc',
      prompt: 'Het smoren-proces bij keramische pannen levert:',
      options: [
        'Helderrode pannen',
        'Blauwzwarte pannen',
        'Een glanzende coating',
        'Een transparante glazuurlaag',
      ],
      correctIndex: 1,
      explanation:
        'Smoren = de oven aan het eind van het bakken afsluiten. Door zuurstofgebrek wordt het rood-bruine ijzeroxide gereduceerd tot zwart ijzer(II)oxide → blauwzwarte pan. Genuanceerd smoren (oven niet helemaal dicht) geeft een rood-zwart gevlekt herfsteffect.',
    },
    {
      id: 'B13-4-c',
      toetstermCode: 'B.13.4',
      type: 'mc',
      prompt:
        'Onder dakpannen moet (volgens Bbl) op de isolatie een:',
      options: [
        'Dampdichte folie',
        'Winddichte, dampdoorlatende folie',
        'Bitumineuze afdichtingslaag',
        'Houten dakbeschot zonder folie',
      ],
      correctIndex: 1,
      explanation:
        'Onder de pannen, bovenop de isolatie, hoort een **mandragende folie** — winddicht (houdt waterdamp niet vast onder de pannen → koud waait niet door) maar dampdoorlatend (vochtige binnenlucht kan naar buiten). Dit voorkomt condens in de isolatie.',
    },

    // === B.13.5 — Dakbedekkingen (5) ===
    {
      id: 'B13-5-a',
      toetstermCode: 'B.13.5',
      type: 'mc',
      prompt: 'Het verschil tussen **APP**- en **SBS**-bitumen is:',
      options: [
        'APP is goedkoper, SBS duurder',
        'APP is uv-bestendig; SBS is flexibeler maar vereist ballast',
        'APP heeft asfalt, SBS niet',
        'APP wordt gebrand, SBS niet',
      ],
      correctIndex: 1,
      explanation:
        'APP (Atactisch Polypropyleen) heeft dichte structuur en is uv-bestendig — daarom geen ballast nodig, geschikt voor de zonzijde van platte daken. SBS (Styreen-Butadieen-Styreen) is flexibeler en kouder-bestendig maar uv-gevoelig → grindballast nodig. Voor renovaties van oude daken met veel beweging is SBS vaak beter.',
    },
    {
      id: 'B13-5-b',
      toetstermCode: 'B.13.5',
      type: 'mc',
      prompt:
        'De **standaard moderne keuze** voor een plat dak op een particuliere woning is:',
      options: [
        'Asfaltshingles',
        'Zink met klangen',
        'EPDM',
        'Aluminium felsplaten',
      ],
      correctIndex: 2,
      explanation:
        'EPDM is dé moderne particuliere standaard voor platte daken: één grote vellenbaan met minimaal aantal naden (lassen), zeer duurzaam (40+ j), uv-bestendig, blijft flexibel bij koude, makkelijk te repareren. PVC is goedkoper maar krimpt eerder; bitumen is goedkoper maar 25–40 j.',
    },
    {
      id: 'B13-5-c',
      toetstermCode: 'B.13.5',
      type: 'mc',
      prompt:
        'Wat is een **typische beperking** van een **rieten dak**?',
      options: [
        'Het is altijd duurder dan koperen dakbedekking',
        'Brandgevoeligheid',
        'Het is alleen geschikt voor zeer steile daken',
        'Riet hoeft nooit onderhouden te worden',
      ],
      correctIndex: 1,
      explanation:
        'Riet is brandgevoelig. Het Bbl staat het in principe alleen toe onder voorwaarden zoals voldoende afstand tot belendingen (rietkapdistantie). Brandvertragend impregneren is mogelijk maar verkort de levensduur. Daarnaast: geen zink in de buurt (humuszuren tasten zink aan).',
    },
    {
      id: 'B13-5-d',
      toetstermCode: 'B.13.5',
      type: 'mc',
      prompt:
        'Welk metaal voor dakbedekking ontwikkelt een **groene patinalaag** die het verder beschermt?',
      options: ['Zink', 'Lood', 'Koper', 'Aluminium'],
      correctIndex: 2,
      explanation:
        'Koper ontwikkelt onder invloed van vocht en CO₂ een groene patinalaag van kopercarbonaten. De laag is decoratief én beschermt het onderliggende koper. Koperen daken gaan daardoor 100+ jaar mee. Veel toegepast op kerken, monumenten en moderne high-end gebouwen.',
    },
    {
      id: 'B13-5-e',
      toetstermCode: 'B.13.5',
      type: 'mc',
      prompt:
        'Waarvoor wordt **lood** in moderne dakbedekkingen vooral nog gebruikt?',
      options: [
        'Als hoofd-dakbedekking op platte daken',
        'Voor dakdoorbrekingen en wandaansluitingen',
        'Voor goten met dubbele dikte',
        'Als vervanger van EPDM',
      ],
      correctIndex: 1,
      explanation:
        'Lood is grotendeels vervangen door EPDM voor vochtkering en goot. Wel nog gebruikt bij specifieke aansluitingen: voetlood en slabben rond schoorstenen, dakdoorbrekingen, dakkapellen — daar bewerkbaarheid en vormen aanpassen aan onregelmatige geometrie. Slabben max. 1,5 m, overlap ≥ 100 mm (kruip).',
    },

    // === B.13.6 — Groendak (3) ===
    {
      id: 'B13-6-a',
      toetstermCode: 'B.13.6',
      type: 'mc',
      prompt: 'Wat is het verschil tussen een **extensief** en een **intensief groendak**?',
      options: [
        'Extensief is groter, intensief kleiner',
        'Extensief = dun, licht, sedum; intensief = dik, zwaar, tuinachtig',
        'Extensief is voor hellende daken, intensief alleen voor platte daken',
        'Extensief vereist geen wortelwerende laag',
      ],
      correctIndex: 1,
      explanation:
        'Extensief = dun, licht, sedum/mos, weinig onderhoud. Intensief = dik substraat, zware constructie nodig, struiken en kleine bomen, veel onderhoud (daktuin). De keuze hangt af van constructie­capaciteit, budget en gewenste onderhouds­inspanning.',
    },
    {
      id: 'B13-6-b',
      toetstermCode: 'B.13.6',
      type: 'mc',
      prompt: 'Een **voordeel van een groendak** voor de bewoner is:',
      options: [
        'Het is goedkoper dan een gewoon plat dak',
        'Het beschermt de dakbedekking tegen UV en schade',
        'Het maakt onderhoud van het dak overbodig',
        'Het verbetert de inbraakbeveiliging',
      ],
      correctIndex: 1,
      explanation:
        'De vegetatielaag absorbeert UV en mechanische schade, waardoor de onderliggende dakbedekking 2–3× langer meegaat. Verder: warmte-isolatie + verkoeling in zomer, geluidsdemping, fijnstof opvangen, biodiversiteit, waterbuffer, esthetiek, eventuele gemeentesubsidie. Kosten zijn vaak hoger door extra opbouw.',
    },
    {
      id: 'B13-6-c',
      toetstermCode: 'B.13.6',
      type: 'mc',
      prompt: 'Wat is een **retentiedak**?',
      options: [
        'Een groendak met alleen sedum',
        'Een dak dat regenwater buffert',
        'Een type plat dak met grind als ballast',
        'Een dak met geïntegreerde zonnepanelen',
      ],
      correctIndex: 1,
      explanation:
        'Een retentiedak is specifiek ontworpen voor **regenwaterbuffering**. Het houdt bij hevige buien water vast (ontlast riolering) en laat het langzaam los — een klimaat-adaptieve maatregel. Vaak gecombineerd met sedum (bonus: vegetatie). Belangrijk in stedelijke gebieden.',
    },

    // === B.13.7 — Dakgebreken (4) ===
    {
      id: 'B13-7-a',
      toetstermCode: 'B.13.7',
      type: 'mc',
      prompt:
        'Een woning heeft een loden slabbe langs een schoorsteen van 3 m breed in één stuk. Tijdens een woninginspectie blijkt deze gescheurd. Wat is de meest waarschijnlijke oorzaak?',
      options: [
        'Aanraking met cement in de aansluitvoeg',
        'Te grote loodstukken: lood kruipt en scheurt boven 1,5 m',
        'Te dunne loodlaag in een lichte NHL-uitvoering',
        'Te zware regenval in het afgelopen jaar',
      ],
      correctIndex: 1,
      explanation:
        'Lood kruipt — het rekt traag onder eigen gewicht. Vanaf ~1,5 m wordt dit kritisch. De norm is: maximaal 1,5 m loden slabben met overlap ≥ 100 mm. Bij 3 m had dit moeten worden uitgevoerd als twee slabben van 1,5 m met overlap, of beter een EPDM-aansluiting.',
    },
    {
      id: 'B13-7-b',
      toetstermCode: 'B.13.7',
      type: 'mc',
      prompt:
        '**Blaasvorming** in een bitumineuze dakbedekking op een plat dak ontstaat doordat:',
      options: [
        'De bitumen door uv verkleurt',
        'Ingesloten vocht/lucht expandeert door zonwarmte → blaas',
        'De dakvloer onder de bitumen krimpt',
        'De vogels de bitumen open pikken',
      ],
      correctIndex: 1,
      explanation:
        'Blaasvorming is een klassiek bitumengebrek: tijdens aanleg ingesloten vocht of lucht expandeert bij verwarming door de zon en duwt de bitumen op. Voorkomen: bij aanleg goed verdichten en geen vocht insluiten. Reparatie: openslijpen + nieuwe bitumenstrook overgelapt aanbrengen.',
    },
    {
      id: 'B13-7-c',
      toetstermCode: 'B.13.7',
      type: 'mc',
      prompt:
        'Een eigenaar meldt na een hevige bui **vochtdoorslag op het plafond** bij een hellend dak met pannen. Het probleem treedt alleen op bij wind uit het noorden. Welke oorzaak ligt het meest voor de hand?',
      options: [
        'Verstopte hwa in de tuin',
        'Lekkage bij een aansluiting',
        'Een lekkende waterleiding',
        'Condensvorming in de cv-installatie',
      ],
      correctIndex: 1,
      explanation:
        'Vochtdoorslag specifiek bij wind uit één richting wijst sterk op een **windgedreven lekkage** aan die kant van het dak — niet op condens of een waterleiding. Inspectie focust op de aansluitingen aan de noordzijde: voetlood schoorsteen, slabben rond dakraam/dakkapel, verholen goten. Eventueel infraroodthermografie of lekzoeker.',
    },
    {
      id: 'B13-7-d',
      toetstermCode: 'B.13.7',
      type: 'mc',
      prompt:
        'Bij een renovatie van een dak met **EPDM-bedekking van 30 jaar oud** ziet de inspecteur dat het EPDM rondom de boeibord-rand is losgetrokken. Wat is de meest waarschijnlijke oorzaak?',
      options: [
        'Onvoldoende aanlijming bij eerste aanleg',
        'Krimp door uv-veroudering',
        'Vogelschade aan de randen',
        'Te zware ballast op het dak',
      ],
      correctIndex: 1,
      explanation:
        'EPDM krimpt met de jaren door uv en temperatuurcycli. Bij 30+ jaar is dit een normaal eindgebrek: rond de opstanden en boeibordrand trekt het kunststof los. Vervanging is dan aan de orde — bij kleine schade kan een randversteviging tijdelijk uitkomst bieden, maar bij grootschalig loslaten is een nieuwe daklaag de oplossing.',
    },
  ],

  terms: [
    {
      term: 'Hellend dak',
      definition:
        'Dak met dakvlak > 15° helling; afwatering door zwaartekracht, bedekking met pannen of leien.',
    },
    {
      term: 'Plat dak',
      definition:
        'Dak met helling < 5° — bedekking met bitumen, EPDM of kunststoffolie; vergt goede afwatering en isolatie.',
    },
    {
      term: 'Gordingen­kap',
      definition:
        'Kap­vorm met horizontale gordingen waarop sporen liggen — eenvoudig, veelvoorkomend bij oudere woningen.',
    },
    {
      term: 'Sporenkap',
      definition:
        'Kap met sporen die direct van nokbalk naar muurplaat lopen — zonder gordingen, robuust voor grote dakvlakken.',
    },
    {
      term: 'Spantenkap',
      definition:
        'Kap met prefab spanten op gelijke onderlinge afstanden; snel te monteren, standaard in moderne woningbouw.',
    },
    {
      term: 'Dakbeschot',
      definition:
        'Plaatlaag op de sporen/spanten die de basis vormt voor isolatie en dakbedekking; OSB, multiplex of dakelementen.',
    },
    {
      term: 'Dakpan',
      definition:
        'Geprofileerde keramische of betonnen plaat; in stroken op tengels en panlatten gehangen.',
    },
    {
      term: 'Leien',
      definition:
        'Dunne natuursteen platen voor dakbedekking — duurzaam (>100 jaar), karakteristiek voor monumentale panden.',
    },
    {
      term: 'Riet­bedekking',
      definition:
        'Traditionele bedekking van rietstengels; goed isolerend, brandgevoelig (vergt impregneren of riettrekstaal).',
    },
    {
      term: 'EPDM',
      definition:
        'Synthetisch rubber (ethyleen-propyleen-dieenmonomeer) in vellen voor platdak­bedekking; zeer UV-bestendig.',
    },
    {
      term: 'Bitumen',
      definition:
        'Geblazen aardolieproduct in rollen met polyester- of glasvezelmat; tweelaagse afwerking op platdak.',
    },
    {
      term: 'Nokvorst',
      definition:
        'Speciale gebogen pan die de nok afsluit en waterdicht maakt.',
    },
    {
      term: 'Daktrim',
      definition:
        'Aluminium of zink afdekprofiel langs de dakrand van een plat dak; voorkomt waterindringing en afwerking.',
    },
    {
      term: 'Hemelwater­afvoer',
      definition:
        'Goten, regenpijpen en stankafsluiters voor afvoer regenwater naar riool of infiltratie.',
    },
    {
      term: 'Dakkapel',
      definition:
        'Uitbouw op een hellend dak met eigen platte of hellende bovenkant; vergroot vloeroppervlak en daglicht.',
    },
  ],

  games: [
    {
      id: 'B13-gapfill-1',
      type: 'gapfill',
      title: 'Dakvormen en -onderdelen — vul aan',
      text:
        'Het meest voorkomende dak in NL is het {{zadeldak}}, met twee dakschilden die in de {{nok}} samenkomen. ' +
        'Een {{schilddak}} heeft vier dakvlakken die rondom op gelijke hoogte aansluiten. ' +
        'Een dak waarbij twee zadeldaken aaneenschakelen met de glaswand op het noorden heet een {{sheddak}}. ' +
        'De horizontale balk op de bovenkant van de buitenmuur waarop sporen rusten heet de {{muurplaat}}.',
      distractors: ['nokvorst', 'mansardedak', 'platdak', 'gording'],
    },
    {
      id: 'B13-sort-1',
      type: 'sort',
      title: 'Sorteer de dakbedekkingen',
      description: 'Welke bedekking past bij welk daktype?',
      categories: ['Hellend dak', 'Plat dak', 'Beide mogelijk'],
      items: [
        { label: 'Keramische dakpan', category: 'Hellend dak' },
        { label: 'Leisteen', category: 'Hellend dak' },
        { label: 'Riet', category: 'Hellend dak' },
        { label: 'Bitumen (APP/SBS)', category: 'Plat dak' },
        { label: 'EPDM-rubber', category: 'Plat dak' },
        { label: 'PVC-folie', category: 'Plat dak' },
        { label: 'Zink / titaanzink', category: 'Beide mogelijk' },
        { label: 'Koper', category: 'Beide mogelijk' },
      ],
    },
    {
      id: 'B13-sequence-1',
      type: 'sequence',
      title: 'Opbouw van een hellend dak (van binnen naar buiten)',
      description: 'Zet de lagen in de juiste volgorde.',
      items: [
        'Isolatie tussen sporen of gordingen',
        'Dakbeschot',
        'Winddichte, dampdoorlatende folie (mandragende folie)',
        'Tengels (verticaal)',
        'Panlatten (horizontaal)',
        'Dakpannen',
      ],
    },
    {
      id: 'B13-matching-1',
      type: 'matching',
      title: 'Koppel gootvormen en kapconstructies',
      pairs: [
        { left: 'Mastgoot', right: 'Halfronde goot, hangend buiten de gevel' },
        { left: 'Bakgoot', right: 'Rechthoekige goot, vaak op of in de muur' },
        { left: 'Verholen goot', right: 'Onder de pannen verborgen — esthetisch maar verstoppingsgevoelig' },
        { left: 'Kilgoot', right: 'In de inwendige snijhoek tussen twee dakvlakken' },
        { left: 'Sporenkap', right: 'Sporen loodrecht op de nok, dakbeschot evenwijdig' },
        { left: 'Gordingenkap', right: 'Gordingen evenwijdig aan de nok, voor grotere overspanningen' },
        { left: 'Raatligger', right: 'I-profiel zigzag doorgezaagd, helften verschoven en gelast' },
      ],
    },
  ],
}
