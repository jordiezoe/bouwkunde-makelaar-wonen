import type { Topic } from '../types/content'

export const C_11_glas: Topic = {
  code: 'C.11',
  section: 'C',
  title: 'Glaswerk',
  chapterRef: 'Lesboek hoofdstuk 28',
  blurb:
    'Glassoorten in de bouw (enkel, isolatieglas HR/HR++/HR+++ triple, monumentenglas, glas-in-lood, draadglas, gelaagd veiligheidsglas, zonwerend, geluidwerend), eigenschappen LTA (lichtdoorlaat) en ZTA/g-waarde (zon­toetreding), beglazings­wijzen (binnen/buiten + droog/nat), gevel­glas­constructies (structurele beglazing, spider­beglazing, klimaat­gevel, vliesgevel) en het herkennen van lekkage in dubbel glas.',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · Glassoorten in de bouw',
      toetstermCodes: ['C.11.1'],
      body: `
### Wat is glas?
**Glas** = amorf (niet-kristallijn) materiaal, hoofdzakelijk **siliciumdioxide (SiO₂) uit kwartszand** + soda (Na₂CO₃) als smeltpunt-verlager + kalk (CaO) voor duurzaamheid. Float-glas wordt gemaakt door gesmolten glas op een tinbad te laten drijven → perfect vlakke ruiten.

### Enkel glas
- **Eén glasplaat**, 3–10 mm dik
- Vroeger standaard, nu vooral in monumenten of voor sierwerk
- **Geen isolatie**: U-waarde ~5,8 W/m²·K (zeer slecht)
- **Geen veiligheid**: breekt in scherpe scherven
- **Sterk koude­bron** in moderne woning — koudval, condens­vorming
- Verboden in nieuwbouw (Bbl-eis voor energie­zuinigheid)

### Isolatieglas — dubbel glas (HR, HR++)
**Opbouw**: twee glasplaten met daartussen een **luchtspouw of edelgas-spouw** (argon, krypton) van 6–20 mm, met **afdichtings­band en droogmiddel** in de afstand­houder.

**Varianten**:
- **Gewoon dubbel glas** — luchtspouw, U-waarde ~2,8 W/m²·K
- **HR** (Hoog Rendement) — coating op binnenkant + argon-gas, U ~1,4 W/m²·K
- **HR+** — verbeterde coating, U ~1,2 W/m²·K
- **HR++** — top-coating + argon, **U ~1,1 W/m²·K** — Bbl-minimum voor nieuwbouw

**Werking van HR-coating**:
- **Low-E coating** (Low Emissivity) — dunne metaal-laag op binnenkant van een glasplaat
- Laat zichtbaar licht door, maar **weerkaatst infraroodstraling terug** naar de binnenkant
- Houdt warmte binnen in winter
- Combinatie met **argon** (75–90 %) in spouw — argon geleidt minder warmte dan lucht

### Triple glas (HR+++)
- **Drie glasplaten** met **twee gasspouwen** ertussen
- U-waarde ~0,6–0,8 W/m²·K — beste isolatie
- Vereist voor passief­huizen en BENG-woningen
- **Dikker en zwaarder** dan HR++ (40–50 mm i.p.v. 25 mm) → kozijnen moeten dikker zijn

### Monumentenglas
- **Speciaal dun isolatieglas** (alle onderdelen dunner) → past in originele monumentale kozijnen die geen plek hebben voor standaard dubbel glas
- U-waarde 1,1–1,3 W/m²·K
- Voor erfgoed waar uitstraling van oude raam belangrijk is

### Glas-in-lood
- **Klassieke decoratieve techniek**: vele kleine stukjes (gekleurd) glas verbonden door **loden U-profielen**
- Esthetisch — kerken, historische gebouwen, jugendstil-woningen
- **Geen isolatie** — meestal binnen-glas-in-lood + buiten-isolatieglas (sandwich-systeem)
- Restauratie door specialist; geen DIY-werk

### Draadglas
- **Glas met staaldraad-net** ingewerkt
- **Brut draadglas**: ruw oppervlak (matglas)
- **Vlak draadglas**: glad oppervlak
- **Bij breken** houden de draden de scherven samen — beperkte inbraak­vertraging
- **Brandwerend** als variant (draadglas met speciaal opbouw, 30–60 min)
- Toepassing: trappenhuizen, brandwerende afscheidingen, oudere fabrieken

### Gelaagd glas (veiligheidsglas / VSG)
- **Twee of meer glasplaten** verbonden door een **kunststof tussenlaag (PVB = polyvinylbutyral)**
- Bij breken houden de scherven aan de PVB-laag — **veilig** (geen scherpe scherven) + **inbraak­vertraging** (klassen P2A–P5A volgens NEN-EN 356)
- **Verplicht** in:
  - Voordeur-glas + glasdeuren naast voordeur (PKVW)
  - Glasvloeren, glasbalustrades
  - Daklicht-koepels boven verkeer
- Combineerbaar met HR-coating en isolatieglas → **veilig én isolerend dubbel glas**

### Zonwerend glas
- **Reflecterende of absorberende coating** die zonnewarmte (infrarood) **buiten houdt**
- **G-waarde** (zontoetredings-factor) verlaagd van ~0,7 (gewoon HR++) naar 0,3–0,5
- Voor gebouwen met grote zuid-gevels: kantoren, winkelpuien, kassen
- **Kan ook getint** zijn (bronsglas, blauwglas) of vrijwel onzichtbaar (high-tech coating)
- Combinatie met **buitenzonwering** (markies, screens) is vaak effectiever

### Geluidwerend glas
- **Asymmetrisch dubbel glas** (verschillende glasdikten, bv. 6+8 mm) → vermijdt resonantie­frequentie
- **PVB-gelaagd glas** dempt geluid extra
- **Brede gasspouw** of vacuüm
- **Rw-waarde** tot 45 dB (gewoon HR++ ~32 dB)
- Voor woningen langs drukke straten, vliegvelden of spoorlijnen

### Veelgebruikte glasdiktes
- **Voorgevel woning**: HR++ (4-15-4 mm) of triple (4-12-4-12-4)
- **Grote ruit (> 2 m²)**: dikker glas voor stabiliteit (6-15-6 of 8-15-8)
- **Glasdeur**: 8 mm enkel of gelaagd 6.6 mm
- **Glasbalustrade**: gelaagd, vaak 8.8 of 10.10 mm
- **Glasvloer**: gelaagd triple, minstens 3× zo dik als bij wand
      `.trim(),
      images: [
        {
          src: '/figs/tekeningen/glas-opbouw.svg',
          caption:
            'Doorsnede van enkel, dubbel, HR++ en triple glas. Meer glasbladen, een metaalcoating en edelgas (argon) in de spouw verlagen de U-waarde — het glas isoleert dan beter.',
          source: 'Eigen tekening',
          width: 'full',
        },
      ],
    },

    {
      heading: '2 · LTA en ZTA: eigenschappen van isolerende beglazing',
      toetstermCodes: ['C.11.2'],
      body: `
B.11.2 vraagt twee specifieke kentallen: **LTA** (lichttoetredingsfactor) en **ZTA / g-waarde** (zontoetredings­factor).

### LTA — Lichttoetredings­factor
**Definitie**: het **percentage zichtbaar licht** (golflengtebereik 380–780 nm) dat door het glas heen komt.

- **LTA 1,0** = 100 % licht door (theoretisch, zonder glas)
- **LTA 0,9** = 90 % licht door (heel helder enkel glas)
- **LTA 0,75–0,80** = HR++ glas (lichte tint door coating)
- **LTA 0,30–0,50** = zonwerend glas (donkerder)
- **LTA 0,10** = sterk getint reflectieglas

**Belang voor de woning**:
- Hoge LTA = veel daglicht naar binnen — beter voor wonen, planten, energie­besparing op verlichting
- Lage LTA = minder licht maar ook minder warmtebelasting in zomer
- **Compromiis** is altijd nodig: alle daglicht ↔ minder oververhitting

### ZTA / g-waarde — Zontoetredings­factor (Solar Heat Gain Coefficient)
**Definitie**: het **percentage zonne-energie** (incl. ultraviolet + zichtbaar licht + infrarood) dat door het glas heen komt — als **warmte­winning** in het gebouw.

- **g 1,0** = 100 % zonne-energie door (theoretisch)
- **g 0,80** = enkel glas zonder coating
- **g 0,55–0,65** = HR++ glas (klassieke balans)
- **g 0,30–0,45** = zonwerend glas
- **g 0,10–0,25** = high-end zonwerend glas (kantoren met grote zuidgevel)

**Belang voor de woning**:
- Hoge g-waarde = veel **gratis passieve zonne­winst** in winter (voordeel voor energie­zuinigheid)
- Lage g-waarde = minder oververhitting in zomer (geen airco nodig)
- **Optimum** is **selectief glas**: hoge LTA (veel licht) + lage g (weinig warmte) → 'selectiviteits­index' = LTA / g

### Selectiviteits­index
**S = LTA / g**

- **S < 1,0**: glas absorbeert/reflecteert relatief meer licht dan warmte (oud zonwerend glas)
- **S = 1,0**: neutraal (gewoon glas)
- **S > 1,25**: **selectief glas** — laat verhoudingsgewijs meer licht dan warmte door (modern hoogtechnisch zonwerend glas)

**Beste keuze** voor moderne woning in NL klimaat:
- Hoge S (>1,5) voor zuidgevel — daglicht + zomers comfort
- Hoge g (>0,55) voor noord­gevel — gratis warmte­winning in winter

### Glas op verschillende gevels — strategie
**Zuid-gevel** (veel zon):
- HR++ met zonwering of selectief glas
- Of: gewone HR++ + buitenzonwering (effectiever)
- Doel: licht binnenlaten, warmte buiten houden in zomer

**Noord-gevel** (weinig zon):
- Gewone HR++ met **hoge g-waarde**
- Maximale warmte­winning uit het beetje noorderzon
- Geen zonwering nodig

**Oost-/west-gevel** (vroege/late zon):
- HR++ met zonwering (vooral west, zon staat laag)
- Buitenzonwering beste oplossing

### Aanvullende eigenschappen
**U-waarde** (warmtedoorgangs­coëfficiënt): zie sectie 1 — lage U is goede isolatie
**Rw-waarde** (geluidsdemping): in dB; gewoon HR++ ~32, geluidwerend tot 45
**Klassen volgens NEN-EN 410**: leveren info over LTA, ZTA, U, lichtreflectie

### Praktijkvoorbeeld
**Een tuinkamer met grote zuidgevel** (veel raam­oppervlak):
- Probleem: oververhitting in zomer (vooral juni-augustus)
- Oplossing: selectief glas (LTA 0,70, g 0,35, U 1,1) + buitenscreen
- Resultaat: voldoende daglicht, weinig warmte­winst in zomer, redelijke warmte­winst in winter

### Energielabel
- LTA en ZTA tellen mee in de **EPC/BENG-berekening** van een woning
- **A++++-label** behaalt vaak triple glas met selectief zonwerend pakket
      `.trim(),
    },

    {
      heading: '3 · Beglazings­wijzen: binnen vs buiten, droog vs nat',
      toetstermCodes: ['C.11.3'],
      body: `
B.11.3 onderscheidt twee dimensies:
- **Plaats van plaatsing**: binnen­beglazing of buiten­beglazing
- **Wijze van afdichting**: droge of natte beglazing

### Binnen­beglazing
**Wat is het?**
Glas wordt **vanaf de binnenzijde** van het kozijn geplaatst — de **glaslat zit aan de binnenzijde**. De buitenkant van het glas raakt het buitenkozijn (vaak in een sponning).

**Voor- en nadelen**:
- **Voordeel**: **inbraak­werend** — een dief kan de glaslat niet aan de buitenkant losmaken om het glas eruit te halen
- **Voordeel**: regen-/sneeuwbestendig (geen kit aan de buitenkant)
- **Nadeel**: glas-vervanging vraagt toegang vanaf binnen (kan lastig zijn bij grote kantoor­ruiten)

**Toepassing**:
- **Standaard in moderne nieuwbouw** voor inbraakwering
- Verplicht voor PKVW-certificering

### Buiten­beglazing
**Wat is het?**
Glas wordt **vanaf de buitenzijde** geplaatst — de **glaslat zit aan de buitenzijde**. Klassiek systeem in oudere woningen.

**Voor- en nadelen**:
- **Voordeel**: glas-vervanging eenvoudig vanaf buiten
- **Nadeel**: **inbraak­gevoelig** — buitenglaslat kan worden losgetrokken
- **Nadeel**: glaslat moet **goed afgedicht** (kit) tegen regen — onderhoud­gevoelig

**Toepassing**:
- Oudere woningen (vóór ~1990)
- Wanneer binnenkant lastig bereikbaar is (grote etalages)

### Droge beglazing
**Wat is het?**
Het glas wordt vastgezet **zonder vloeibare kit of stopverf** — afdichting via **gevormde rubber-/EPDM-strippen** die in de sponning worden geklemd.

**Onderdelen**:
- **EPDM-rubberprofiel** rondom het glas
- **Glaslat** klemt het profiel + glas vast
- **Sponning** met juiste maatvoering

**Voor- en nadelen**:
- **Voordeel**: snelle plaatsing, geen droogtijd
- **Voordeel**: **geen kit** dat veroudert en losbarst
- **Voordeel**: glas-vervanging eenvoudig (rubber opnieuw plaatsen)
- **Nadeel**: vereist nauwkeurige maatvoering kozijn-glas-rubber
- **Voordeel**: maakt sneller schoonmaken mogelijk

**Toepassing**:
- **Standaard in moderne kunststof- en aluminium-kozijnen**
- **Steeds vaker** in moderne houten kozijnen

### Natte beglazing
**Wat is het?**
Het glas wordt vastgezet met **vloeibare kit of stopverf** rondom — traditionele methode.

**Onderdelen**:
- **Glaskit** (siliconenkit, butylenkit) of **stopverf** (klassieke linolie + krijt-mengsel)
- **Glaslat** of vol-gestopt zonder lat (klassiek)
- **Verfwerk** afsluitend om kit/stopverf te beschermen tegen UV

**Voor- en nadelen**:
- **Voordeel**: gladde, geïntegreerde afwerking (geen zichtbaar rubber)
- **Voordeel**: geschikt voor onregelmatige maatvoering (klassieke handgemaakte kozijnen)
- **Nadeel**: **kit veroudert** in 10–20 jaar; periodieke vervanging nodig
- **Nadeel**: lange droogtijd (24+ uur voor siliconen)
- **Nadeel**: bij glas-vervanging hele kit-/stopverf-laag verwijderen (arbeids­intensief)

**Toepassing**:
- **Klassieke houten kozijnen** in oudere woningen
- **Monumenten** waar traditionele uitstraling vereist is
- **Restauratie** van oude kozijnen

### Combinaties in de praktijk
| Plaats | Wijze | Toepassing |
|---|---|---|
| Binnen­beglazing | Droog | Moderne nieuwbouw (kunststof, alu) |
| Binnen­beglazing | Nat | Moderne houten kozijnen |
| Buiten­beglazing | Droog | Aluminium-/kunststof renovatie­kozijn |
| Buiten­beglazing | Nat | Klassiek, oudere houten kozijnen |

### Bij verkoop
- **Inbraakveilig­heid** is voor de PKVW-kortingen relevant
- Vaak is **binnen­beglazing** modern vereist
- Bij **renovatie van kozijnen**: vraag installateur welke wijze gangbaar en geschikt is voor het bestaande pand
      `.trim(),
    },

    {
      heading: '4 · Gevelglas­constructies',
      toetstermCodes: ['C.11.4'],
      body: `
Voor grote gevels in utiliteit (kantoren, winkelpuien, ziekenhuizen) zijn vier gangbare gevelglas­constructies.

### Structurele beglazing (structural glazing)
**Wat is het?**
**Glas wordt direct op de constructie gelijmd** met **structurele siliconenkit** — geen zichtbare kozijnen aan de buitenkant. Resultaat: gladde glasgevel zonder zichtbare verbindingen.

**Werking**:
- Aluminium-/staal-frame achter het glas
- **Structurele kit** (twee-componenten silicone) tussen glas en frame
- **Druk** opgevangen door kit; **trek** door extra mechanische bevestiging (verborgen)
- Glas-naden afgedicht met **voegkit** (anders dan structurele kit)

**Voor- en nadelen**:
- **Voordeel**: zeer modern uiterlijk, gladde gevel zonder onderbreking
- **Nadeel**: zeer hoge investering, gespecialiseerde installatie, structurele kit veroudert in 15–25 jaar (vervanging is kostbaar)
- **Bouwfysisch**: structurele kit moet **vlamwerend** zijn en bestand tegen UV en thermische uitzetting

**Toepassing**:
- Premium kantoorgebouwen
- Internationale flagship-stores
- Cultureel iconische gebouwen

### Spider­beglazing (point-supported glazing)
**Wat is het?**
**Glas wordt aan punten bevestigd** met **roestvast­stalen "spider"-houders** (vier-armige bevestiging op elk hoekpunt). Achter de gevel een staal/cable-structure die de spiders draagt. Minimale visuele obstructie.

**Werking**:
- Glas heeft **boorgaten** in de hoeken
- **RVS-spider** klemt het glas op de boorpunten
- Spider is bevestigd aan **glasvezelversterkte boutverbindingen** of **staal cable-system**
- **Voegen tussen glas** met siliconen-kit afgedicht

**Voor- en nadelen**:
- **Voordeel**: ultieme transparantie, "frame-less" uitstraling
- **Voordeel**: openluchtige zichtbaarheid binnen — geen oppervlak­obstructie
- **Nadeel**: vereist gelaagd veiligheids­glas (boorgaten zwakke punt)
- **Nadeel**: zeer kostbaar; punctuele detail­bouw kritisch

**Toepassing**:
- **Atrium-daken**, lichtkappen
- **Winkel­puien** met grote glasoppervlak
- **Galerie**-gebouwen, musea

### Tweede huid / klimaat­gevel (double-skin façade)
**Wat is het?**
**Twee gevels op enige afstand** (50 cm–3 m), met een geventileerde **buffer-spouw** ertussen. Binnen­gevel = isolerend isolatieglas; buiten­gevel = enkel glas of geperforeerde plaat.

**Werking**:
- **Buitengevel** vangt zonbelasting op
- **Geventileerde spouw** (natuurlijk via openingen onder/boven, of mechanisch) — opgewarmde lucht stijgt op en wordt afgevoerd
- **Buffer-effect**: in winter behoudt warmte, in zomer dempt warmte­last
- **Zonwering** in de spouw (geen UV-belasting voor doeken) — beschermd tegen wind

**Voor- en nadelen**:
- **Voordeel**: zeer goede thermische + akoestische isolatie
- **Voordeel**: zonwering veilig in de spouw
- **Voordeel**: extra brandweer­ruimte (rookafvoer)
- **Nadeel**: zeer hoge investering (vaak 1.000+ €/m²)
- **Nadeel**: complex onderhoud; spouw-reiniging kostbaar
- **Nadeel**: brandveiligheid: spouw kan **branduitbreiding** vergemakkelijken — speciale brandwerende detailering

**Toepassing**:
- **Hoogbouw** in stedelijke omgevingen
- **Energie­zuinige kantoorgebouwen**
- **Geluidsbelaste** locaties (vlakbij snelweg, vliegveld)

### Vlies­gevel (curtain wall)
**Wat is het?**
**Niet-dragende gevel** opgebouwd uit een **frame van aluminium-profielen** met glas en panelen ertussen — hangt **voor de hoofdconstructie** (kolommen + vloeren) zonder belasting daarop over te dragen.

**Werking**:
- **Vertikale stijlen** (mullions) van aluminium op de gevel-as
- **Horizontale regels** (transoms) op verdieping­hoogte
- **Glas of paneel** wordt in deze raster geklemd
- **Dilatatie­voegen** voor uitzetting van groot gevel-oppervlak

**Voor- en nadelen**:
- **Voordeel**: snelle bouw — pre-fab elementen
- **Voordeel**: alle keuzes flexibel (glas-/paneel-combinaties, kleur, vorm)
- **Voordeel**: gevel onafhankelijk van constructie — minimum maatwerk
- **Nadeel**: alleen voor moderne nieuwbouw met geschikte hoofdconstructie
- **Nadeel**: vereist nauwkeurige aansluiting op vloeren en kolommen

**Toepassing**:
- **Kantoorgebouwen** (klassiek glasvliesgevel)
- **Winkelcentra**, ziekenhuizen
- Grote moderne complexen

### Vergelijking
| Type | Uitstraling | Investering | Onderhoud | Toepassing |
|---|---|---|---|---|
| Structurele beglazing | Gladde, kozijn­loze gevel | Zeer hoog | Hoog (kit vervangen) | Premium kantoor |
| Spider­beglazing | Frame-less, transparant | Zeer hoog | Gemiddeld | Atrium, winkelpui |
| Tweede huid / klimaat­gevel | Modern, dubbele laag | Zeer hoog | Hoog | Hoogbouw, energiezuinig |
| Vlies­gevel | Gestructureerd grid | Hoog | Gemiddeld | Standaard kantoor­bouw |

### Voor de inspecteur/makelaar
- Bij oudere structurele beglazing (15+ jaar) — check **structurele kit** op veroudering
- Bij klimaat­gevel: **spouw-reinheid** en **ventilatie­openingen** check
- Bij vliesgevel: **dilatatie­voegen** intact?
- **Brandweer­rapport** essentieel bij hoogbouw met glasvliesgevel
      `.trim(),
    },

    {
      heading: '5 · Lekkage van dubbel glas',
      toetstermCodes: ['C.11.5'],
      body: `
### Wat is "lekkage" van dubbel glas?
**Dubbel glas / isolatieglas** is een gesloten constructie: twee glas­platen met afstandhouder en **rubber/butyl-afdichting** rondom. Tussen de platen zit **droge lucht of edelgas (argon, krypton)** en een **droogmiddel** in de afstandhouder.

Bij **lekkage van het isolatieglas** raakt vocht (of buitenlucht) tussen de glasplaten in de spouw. Zichtbaar als:
- **Condens** tussen de ruiten (vooral in winter — koudste plek)
- **Vochtige aanslag** of zelfs druppels
- Soms **algen** of **schimmel** tussen de ruiten
- **Coating-aantasting** (vlekken op de coating-laag)

Lekkage is **onomkeerbaar** — het isolatieglas moet worden vervangen.

### Oorzaken van lekkage
**1. Veroudering van de afdichting** (meest voorkomend)
- **Butyl en silicone-afdichting** rondom de afstandhouder veroudert
- Levensduur dubbel glas: 25–30 jaar; HR-glas iets korter
- Na ~25 jaar verliest de afdichting elasticiteit → vocht dringt binnen

**2. Mechanische beschadiging**
- Glas dat in het kozijn klemt door werken van het hout
- Een steen tegen het glas (vooral op begane grond)
- Wijzigingen aan kozijn waarbij glas wordt belast

**3. Verkeerde montage**
- Glas zit niet vrij in de sponning (geen rubber-strippen of voegmateriaal)
- Glas raakt het kozijn-hout direct (geen ruimte voor uitzetting)
- Bovenstaande veroorzaakt vroegtijdige scheurvorming in de afdichting

**4. Thermische schok**
- **Buitenstraling** (zon) op een deel van het glas + **schaduw** op het andere deel → grote temperatuur­verschil
- Spanning in glas → microcrack → kit-loslating
- Vooral bij grote ruiten met deels-zon, deels-schaduw

**5. Schade aan UV-beschermings­laag van de afdichting**
- Bij **buiten­beglazing**: UV bereikt de kit
- Bij **binnen­beglazing** beter beschermd

### Hoe herken je lekkage?

**Visuele signalen**:
- **Condens tussen de ruiten** — onverwijderbaar door schoonmaken aan binnen- of buitenzijde
- **Witte aanslag/vlekken** op het binnenste glas — kalkachtig of vermolme uitziend
- **Algengroei** of **schimmel** in de spouw
- **Coating-vlekken** waar de Low-E afslijt door vocht
- **Doffe of melkachtige spouw**

**Onderscheid van gewone condens**:
- **Condens AAN de buitenkant of binnenkant** van het glas → niet lekkage; ventilatie-/vochtbalans-probleem
- **Condens TUSSEN de ruiten** = lekkage (onverwijderbaar)

### Gevolgen
1. **Energie­verlies**: argon ontsnapt → U-waarde verslechtert (van 1,1 naar 2,5+)
2. **Coating­aantasting**: vocht beschadigt Low-E laag → slechtere isolatie
3. **Esthetisch**: ruiten zien er melkachtig of vochtig uit
4. **Geen veiligheid­risico** — alleen functioneel/esthetisch probleem
5. **Energie­label** kan verminderen

### Reparatie?
- **Geen reparatie mogelijk** — een gelekt isolatieglas kan niet worden afgedicht
- Sommige bedrijven bieden **drogen** aan (vocht uit spouw zuigen via boorgat + droogmiddel) — beperkte effectiviteit, esthetisch oplossing voor 1–3 jaar
- **Echte oplossing**: glas vervangen door nieuw isolatieglas
- Bij vervanging: **kozijn controleren** op werken/scheurvorming — voorkomt herhaling

### Kosten vervanging
- Klein raam (100×80 cm) HR++ ~€ 200–400 incl. plaatsing
- Groot raam (200×150 cm) ~€ 500–800
- Bij heel groot/speciaal glas: hoger

### Voor de makelaar
**Belangrijk bij verkoop**:
- **Inspecteur** kijkt naar elke ruit voor lekkage-tekenen
- **Vraag de verkoper** wanneer dubbel glas is geplaatst — bij 25+ jaar oud risico op kortere levensduur
- **Vermelding** in verkoop-documentatie als er **bekende lekkage** is
- **HR-rendement­indicatie**: oude HR-glas levert minder isolatie dan moderne HR++

**Bij vervanging-advies**:
- Combineer met **kozijn-onderhoud** (schilderen, kitten vernieuwen) voor totale renovatie
- Mogelijk subsidie via ISDE voor HR++→Triple glas
- **Helpt energie­label** (1–2 stappen verhoging mogelijk)
      `.trim(),
    },
  ],

  toetstermen: [
    {
      code: 'C.11.1',
      text: 'Herkent de in de bouw voorkomende glassoorten: enkel glas, isolatieglas (HR, HR++), triple glas (HR+++), monumentenglas, glas-in-lood, draadglas (brut en vlak), gelaagd glas (veiligheidsglas), zonwerend glas en geluidwerend glas.',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'C.11.2',
      text: 'Benoemt eigenschappen van isolerende beglazing: lichttoetredingsfactor (LTA-waarde) en zontoetredingsfactor (ZTA- of g-waarde).',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
    {
      code: 'C.11.3',
      text: 'Legt de verschillende wijzen van beglazing (binnen- of buiten­beglazing, droge of natte beglazing) uit.',
      niveau: 'BT2',
      bloom: 'Begrip',
      metDrawing: true,
    },
    {
      code: 'C.11.4',
      text: 'Herkent de gevelglas­constructies structurele beglazing, spider­beglazing, tweede huid/klimaatgevel en vliesgevels.',
      niveau: 'BT2',
      bloom: 'Kennis',
      metDrawing: true,
    },
    {
      code: 'C.11.5',
      text: 'Herkent het gebrek lekkage van dubbel glas.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
  ],

  questions: [
    // C.11.1 (5)
    {
      id: 'C11-1-a',
      toetstermCode: 'C.11.1',
      type: 'mc',
      prompt: 'Wat is **HR++ glas**?',
      options: [
        'Hand-Reinigend glas',
        'Hoog Rendement-glas met top-coating + argon-gas in de spouw — U-waarde ~1,1 W/m²·K; Bbl-minimum voor nieuwbouw. De Low-E coating laat licht door maar weerkaatst infraroodstraling terug',
        'Hard-gehard glas',
        'Een soort plastic',
      ],
      correctIndex: 1,
      explanation:
        'HR = Hoog Rendement (van isolatie). HR++ is dubbelglas met optimale Low-E coating op binnenkant van het glas + argon-gas (75–90 %) in de spouw — U-waarde ~1,1 W/m²·K. Bbl-minimum voor nieuwbouw kozijnen. Low-E (Low Emissivity) coating laat zichtbaar licht door maar weerkaatst infraroodstraling terug → houdt warmte binnen in winter. Variants: HR (basis), HR+, HR++.',
    },
    {
      id: 'C11-1-b',
      toetstermCode: 'C.11.1',
      type: 'mc',
      prompt: 'Wat is **gelaagd glas (veiligheidsglas)**?',
      options: [
        'Twee glasplaten met luchtspouw',
        'Twee of meer glasplaten verbonden door een kunststoflaag (PVB) — bij breken houden de scherven aan de PVB-laag: veilig (geen scherpe scherven) + inbraak­vertraging; verplicht in voordeur-glas, glasvloeren en glasbalustrades',
        'Glas met staaldraad-net',
        'Glas met kleur-coating',
      ],
      correctIndex: 1,
      explanation:
        'Gelaagd glas (VSG = Veiligheids­glas of laminaat-glas) bestaat uit twee of meer glas­platen met een PVB-kunststoflaag (polyvinylbutyral) ertussen. Bij breken houden de scherven aan de PVB-laag → veilig (geen scherpe scherven), én inbraak­vertraging (klassen P2A–P5A). Verplicht in: voordeur-glas, glasvloeren, glasbalustrades, daklicht-koepels. Kan ook met HR-coating gecombineerd worden.',
    },
    {
      id: 'C11-1-c',
      toetstermCode: 'C.11.1',
      type: 'mc',
      prompt: 'Wat is **triple glas (HR+++)**?',
      options: [
        'Een drielaagse coating op enkel glas',
        'Drie glasplaten met twee gasspouwen ertussen — U-waarde ~0,6–0,8 W/m²·K (beste isolatie); vereist voor passief­huizen en BENG-woningen; dikker (40–50 mm) dan HR++',
        'Een combinatie van enkel, HR en HR++',
        'Drie glaslagen direct op elkaar gelijmd',
      ],
      correctIndex: 1,
      explanation:
        'Triple glas (HR+++) heeft drie glas­platen met twee gasspouwen (vaak argon of krypton) ertussen. U-waarde ~0,6–0,8 W/m²·K — de beste isolatie van standaard­beglazing. Vereist voor passief­huizen en BENG-woningen. Veel dikker (40–50 mm) en zwaarder dan HR++ (25 mm) → kozijnen moeten dikker en stevigere hangers hebben. Hogere investering, maar langere levensduur en lager energieverbruik.',
    },
    {
      id: 'C11-1-d',
      toetstermCode: 'C.11.1',
      type: 'mc',
      prompt: '**Monumentenglas** is:',
      options: [
        'Glas-in-lood',
        'Speciaal dun isolatieglas (alle onderdelen dunner) — past in originele monumentale kozijnen die geen plek hebben voor standaard dubbel glas; U-waarde 1,1–1,3 W/m²·K',
        'Een type museum-glas',
        'Glas dat in monumentale bouwwerken is geblazen',
      ],
      correctIndex: 1,
      explanation:
        'Monumentenglas is speciaal dun isolatieglas (afstand­houder, gas­spouw en glasplaten allemaal dunner) zodat het in de smalle sponning van een originele monumentale kozijn past — zonder dat de erfgoedmaatregelen worden geschonden. U-waarde 1,1–1,3 W/m²·K (slechter dan HR++ maar veel beter dan enkel glas). Voor monumentenbeschermings­panden waar uitstraling van het oude raam essentieel is.',
    },
    {
      id: 'C11-1-e',
      toetstermCode: 'C.11.1',
      type: 'mc',
      prompt: '**Geluidwerend glas** wordt vaak gemaakt door:',
      options: [
        'Drie glasplaten zonder spouw',
        'Asymmetrisch dubbel glas (verschillende glasdikten, bv. 6+8 mm) + PVB-gelaagd glas + brede gasspouw — vermijdt resonantie­frequentie; Rw tot 45 dB',
        'Een dikkere coating',
        'Een gehard glas',
      ],
      correctIndex: 1,
      explanation:
        'Geluidwerend glas combineert meerdere technieken: (1) **asymmetrisch dubbel glas** — verschillende glasdikten (bv. 6 mm + 8 mm) zodat geen gemeenschappelijke resonantie­frequentie; (2) **PVB-gelaagd glas** als demper; (3) **brede gasspouw** of zelfs vacuüm. Rw-waarde tot 45 dB (gewoon HR++ ~32 dB). Voor woningen langs drukke straten, vliegvelden, spoorlijnen.',
    },

    // C.11.2 (4)
    {
      id: 'C11-2-a',
      toetstermCode: 'C.11.2',
      type: 'mc',
      prompt: 'Wat geeft de **LTA-waarde** aan?',
      options: [
        'De UV-doorlaat',
        'De lichttoetredingsfactor — percentage zichtbaar licht (380–780 nm) dat door het glas heen komt. LTA 0,80 = 80 % licht door; HR++ heeft typisch LTA 0,75–0,80',
        'De warmte­doorlaat',
        'De inbraakwerendheid',
      ],
      correctIndex: 1,
      explanation:
        'LTA = lichttoetredingsfactor = percentage zichtbaar licht dat door het glas heen komt. LTA 1,0 = 100 % (geen glas); enkel helder glas ~0,90; HR++ glas 0,75–0,80 (lichte tint door coating); zonwerend glas 0,30–0,50. Hoge LTA = veel daglicht binnen, voordeel voor wonen en planten. Lage LTA = donkerder maar minder warmte­last.',
    },
    {
      id: 'C11-2-b',
      toetstermCode: 'C.11.2',
      type: 'mc',
      prompt: 'Wat geeft de **ZTA / g-waarde** aan?',
      options: [
        'De geluidsdemping',
        'De zontoetredingsfactor — percentage zonne-energie (UV + licht + IR) dat door het glas heen komt als warmte­winning in het gebouw; g 0,55–0,65 voor HR++; lager voor zonwerend glas',
        'De levensduur',
        'De doorzichtigheid',
      ],
      correctIndex: 1,
      explanation:
        'ZTA (zontoetredings­factor) = g-waarde = SHGC (Solar Heat Gain Coefficient). Percentage zonne-energie (UV + zichtbaar + infrarood) dat door het glas heen komt als warmtewinning binnen het gebouw. Enkel glas ~0,80; HR++ 0,55–0,65; zonwerend glas 0,30–0,45. Hoge g = veel gratis warmte­winst in winter (passieve zon); lage g = minder oververhitting in zomer.',
    },
    {
      id: 'C11-2-c',
      toetstermCode: 'C.11.2',
      type: 'mc',
      prompt: 'Wat is **selectief glas**?',
      options: [
        'Glas met verschillende kleuren',
        'Glas met hoge LTA (veel licht) + lage g-waarde (weinig warmte) — selectiviteits­index S = LTA/g > 1,25; ideaal voor zuid­gevel met grote ramen waar zomers oververhitting voorkomen moet worden',
        'Glas dat door de wind beweegt',
        'Glas dat alleen UV doorlaat',
      ],
      correctIndex: 1,
      explanation:
        'Selectief glas laat **verhoudingsgewijs meer zichtbaar licht door dan warmte** — door speciale spectraal-selectieve coatings. Selectiviteits­index S = LTA / g > 1,25 (gewoon glas S ≈ 1,0). Ideaal voor zuid­gevels met grote ramen: voldoende daglicht binnen, maar weinig zomer-warmte­last. Vermindert de noodzaak van airconditioning. Combineerbaar met HR++/triple-isolatie.',
    },
    {
      id: 'C11-2-d',
      toetstermCode: 'C.11.2',
      type: 'mc',
      prompt: 'Voor de **noord­gevel** van een woning is welke g-waarde wenselijk?',
      options: [
        'Zeer laag (g 0,2)',
        'Hoog (g 0,55–0,65) — maximale gratis warmte­winning uit het beetje noorderzon in winter; geen zonwering nodig (noord krijgt geen direct zonlicht)',
        'Onmogelijk te bepalen',
        'Maakt niet uit',
      ],
      correctIndex: 1,
      explanation:
        'Noord­gevel krijgt geen direct zonlicht maar wel diffuus daglicht en in winter een klein beetje zonne-warmte­straling. Hoge g-waarde (0,55–0,65) maximaliseert deze gratis warmte­winning, geen zonwering nodig. Gewone HR++ is hier prima. Voor zuid­gevel is een lage g of selectief glas beter (oververhitting voorkomen). Strategische keuze per gevel-oriëntatie is moderne energie­neutrale ontwerp­filosofie.',
    },

    // C.11.3 (3)
    {
      id: 'C11-3-a',
      toetstermCode: 'C.11.3',
      type: 'mc',
      prompt: 'Wat is **binnen­beglazing**?',
      options: [
        'Glas alleen voor binnenramen',
        'Glas wordt vanaf de binnenzijde van het kozijn geplaatst — glaslat zit aan binnenkant; voordeel: inbraak­werend (glaslat niet aan buitenkant los te maken); verplicht voor PKVW',
        'Glas binnenshuis schoonmaken',
        'Glas met binnenkant-coating',
      ],
      correctIndex: 1,
      explanation:
        'Binnen­beglazing: glas vanaf de binnenzijde van het kozijn geplaatst, glaslat zit aan binnenkant. Belangrijk voordeel: inbraak­werend (een dief kan de glaslat aan de buitenkant niet losmaken om glas eruit te halen). Bij **buiten­beglazing** zit de glaslat juist aan de buitenkant en kan inbreker die losmaken. Voor PKVW-certificering is binnen­beglazing verplicht. Standaard in moderne nieuwbouw.',
    },
    {
      id: 'C11-3-b',
      toetstermCode: 'C.11.3',
      type: 'mc',
      prompt: 'Wat is **droge beglazing**?',
      options: [
        'Glas zonder kit, alleen op een rubber-onderlegger',
        'Glas vastgezet zonder vloeibare kit of stopverf — afdichting via gevormde EPDM-rubber strippen die in de sponning worden geklemd; snelle plaatsing, geen droogtijd, glas-vervanging eenvoudig',
        'Glas dat snel droogt',
        'Glas zonder isolatiespouw',
      ],
      correctIndex: 1,
      explanation:
        'Droge beglazing = glas vastgezet zonder vloeibare kit. EPDM-rubberprofielen rondom het glas vangen het op in de sponning; glaslat klemt het geheel vast. Standaard in moderne kunststof- en aluminium-kozijnen. Voordelen: snelle plaatsing, geen droogtijd, geen kit-veroudering, eenvoudige glas-vervanging. Bij natte beglazing wordt vloeibare kit/stopverf gebruikt — klassieke methode in oudere houten kozijnen.',
    },
    {
      id: 'C11-3-c',
      toetstermCode: 'C.11.3',
      type: 'mc',
      prompt: '**Natte beglazing** wordt nog vaak gebruikt voor:',
      options: [
        'Moderne aluminium kozijnen',
        'Klassieke houten kozijnen in monumentale panden — vloeibare siliconenkit of klassieke stopverf; gladde afwerking, geschikt voor onregelmatige maatvoering; kit veroudert in 10–20 jaar (periodieke vervanging)',
        'Glas in douchecabines',
        'Boven 200 °C',
      ],
      correctIndex: 1,
      explanation:
        'Natte beglazing met vloeibare kit (siliconen, butyleen) of klassieke stopverf (linolie + krijt) wordt nog gebruikt voor klassieke houten kozijnen — vooral in monumentale panden waar de traditionele uitstraling vereist is. Voordeel: gladde afwerking, geschikt voor onregelmatige maatvoering. Nadelen: kit veroudert in 10–20 jaar (periodieke vervanging), lange droogtijd, arbeids­intensief bij glas-vervanging.',
    },

    // C.11.4 (3)
    {
      id: 'C11-4-a',
      toetstermCode: 'C.11.4',
      type: 'mc',
      prompt: 'Wat is **structurele beglazing**?',
      options: [
        'Een tweede beglazing voor extra isolatie',
        'Glas direct op de constructie gelijmd met structurele siliconenkit — geen zichtbare kozijnen aan de buitenkant; resultaat: gladde glasgevel zonder onderbreking',
        'Glas met staal­wapening erin',
        'Glasvezel-versterking',
      ],
      correctIndex: 1,
      explanation:
        'Structurele beglazing: glas wordt direct met **structurele siliconenkit** (twee-componenten) op een achterliggend aluminium-/staalframe gelijmd. Resultaat: gladde gevel zonder zichtbare kozijnen aan de buitenkant — zeer modern uitstraling. Druk wordt door kit opgevangen, trek door extra verborgen mechanische bevestiging. Voor premium kantoorgebouwen, flagship-stores. Hoge investering, complex onderhoud (kit-veroudering in 15–25 jaar).',
    },
    {
      id: 'C11-4-b',
      toetstermCode: 'C.11.4',
      type: 'mc',
      prompt: 'Wat is een **spider­beglazing**?',
      options: [
        'Glas met netten erin',
        'Glas aan punten bevestigd met RVS "spider"-houders (vier-armige bevestiging op elk hoekpunt); boorgaten in glas; achter de gevel staal/cable-structure die de spiders draagt — minimale visuele obstructie, "frame-less"',
        'Glas-in-lood',
        'Een spinnenweb in glas',
      ],
      correctIndex: 1,
      explanation:
        'Spider­beglazing (point-supported glazing): glas heeft boorgaten in de hoeken, bevestigd via vier-armige RVS-houders ("spiders") die het glas op de boorpunten klemmen. Achter de gevel staal/cable-structure draagt de spiders. Minimale visuele obstructie — frame-less uitstraling. Vereist gelaagd veiligheids­glas (boorgaten zwakke punt). Toepassing: atrium-daken, winkelpuien, galerie-gebouwen.',
    },
    {
      id: 'C11-4-c',
      toetstermCode: 'C.11.4',
      type: 'mc',
      prompt: 'Wat is een **klimaatgevel / tweede huid**?',
      options: [
        'Gevel met twee verschillende kleuren',
        'Twee gevels op enige afstand (50 cm–3 m), met geventileerde buffer-spouw; binnen­gevel = HR-isolatieglas, buiten­gevel = enkel glas of geperforeerde plaat; voor hoogbouw + energiezuinige kantoor­gebouwen',
        'Een gevel met klimaatregeling apparatuur',
        'Een airconditioning-gevel',
      ],
      correctIndex: 1,
      explanation:
        'Klimaatgevel / tweede huid (double-skin façade): twee gevels op enige afstand met geventileerde buffer-spouw ertussen (50 cm–3 m). Buitenste laag dempt zonbelasting; geventileerde spouw voert opgewarmde lucht af; zonwering staat veilig in de spouw. Voordelen: zeer goede thermische + akoestische isolatie. Nadelen: zeer hoge investering, complex onderhoud, brandweer-aandacht (spouw kan brand-uitbreiding versnellen).',
    },

    // C.11.5 (3)
    {
      id: 'C11-5-a',
      toetstermCode: 'C.11.5',
      type: 'mc',
      prompt: 'Hoe herken je **lekkage van dubbel glas**?',
      options: [
        'Condens aan de binnenkant van het glas (bij koud weer)',
        'Condens of vochtige aanslag TUSSEN de twee ruiten — onverwijderbaar door schoonmaken aan binnen- of buitenzijde; in winter het meest zichtbaar',
        'Bevriezing aan de buitenkant',
        'Bij geluid van knappen',
      ],
      correctIndex: 1,
      explanation:
        'Lekkage van dubbel glas = vocht is tussen de twee glasplaten gekomen. Zichtbaar als condens, vochtige aanslag of zelfs druppels TUSSEN de ruiten — niet aan de binnen- of buitenzijde. Onverwijderbaar door schoonmaken. Soms ook algen of schimmel in de spouw, of vlekken op de coating-laag. In winter het meest zichtbaar (koudste punt is binnenglas, condens slaat daar neer).',
    },
    {
      id: 'C11-5-b',
      toetstermCode: 'C.11.5',
      type: 'mc',
      prompt: 'Wat is de **belangrijkste oorzaak** van lekkage in dubbel glas?',
      options: [
        'Slechte ventilatie binnen',
        'Veroudering van de butyl- en siliconen-afdichting rondom de afstand­houder (na ~25 jaar); ook mechanische beschadiging, verkeerde montage of thermische schok kunnen oorzaak zijn',
        'Te hoge buitentemperatuur',
        'UV-licht door het glas',
      ],
      correctIndex: 1,
      explanation:
        'Hoofdoorzaak: veroudering van de butyl- en siliconen-afdichting rondom de afstand­houder van het isolatieglas. Levensduur ~25–30 jaar. Andere oorzaken: mechanische beschadiging (steen, klemmen in kozijn), verkeerde montage (geen rubber-strippen, glas raakt kozijn direct), thermische schok (zon + schaduw temperatuurverschil). Bij buiten­beglazing meer UV-belasting op kit → sneller veroudering.',
    },
    {
      id: 'C11-5-c',
      toetstermCode: 'C.11.5',
      type: 'mc',
      prompt: 'Kan **lekkage in dubbel glas** worden gerepareerd?',
      options: [
        'Ja, eenvoudig door nieuwe kit aan te brengen',
        'Nee, niet duurzaam — de afdichting is onomkeerbaar gefaald. Sommige bedrijven bieden tijdelijk drogen aan (1–3 jaar effect), maar echte oplossing is het glas vervangen',
        'Alleen door professionals met chemische middelen',
        'Ja, door het glas in de spouw te vullen met silicagel',
      ],
      correctIndex: 1,
      explanation:
        'Geen duurzame reparatie mogelijk — de afdichting rondom de afstand­houder is onomkeerbaar gefaald, argon is ontsnapt, coating mogelijk aangetast. Sommige bedrijven bieden "drogen" aan: vocht via boorgat uit spouw zuigen + droogmiddel — beperkte effectiviteit (1–3 jaar esthetisch). Echte oplossing: dubbel glas vervangen. Kosten klein raam HR++ € 200–400; groot raam € 500–800. Vaak combineren met kozijn-onderhoud voor totale renovatie.',
    },
  ],

  terms: [
    {
      term: 'Floatglas',
      definition:
        'Basis vlakglas geproduceerd op een tinbad — uitgangsmateriaal voor alle bewerkt glas.',
    },
    {
      term: 'Enkelglas',
      definition:
        'Eén glasplaat — geen isolerende waarde (U ≈ 5,8); alleen nog in monumenten en glas­wanden buiten Bbl-eisen.',
    },
    {
      term: 'Dubbelglas (HR)',
      definition:
        'Twee glasplaten met luchtspouw; U ≈ 2,8 — verouderd, vervangen door HR++ in nieuwbouw.',
    },
    {
      term: 'HR++ glas',
      definition:
        'Twee bladen met low-e coating en argon­vulling; U ≈ 1,1 — standaard voor renovatie en oudbouw.',
    },
    {
      term: 'HR+++ / triple glas',
      definition:
        'Drie bladen met dubbele coating + argon/krypton; U ≈ 0,6 — BENG-conform, dik en zwaar.',
    },
    {
      term: 'Low-E coating',
      definition:
        'Onzichtbare metaaloxidelaag op glas die infraroodstraling reflecteert — verlaagt U-waarde sterk.',
    },
    {
      term: 'Argonvulling',
      definition:
        'Zwaarder edelgas dan lucht in spouw tussen glasbladen — vermindert convectie, verlaagt U.',
    },
    {
      term: 'Zonwerend glas',
      definition:
        'Glas met coating dat zonnewarmte deels reflecteert (lage ZTA); voorkomt opwarming in zomer.',
    },
    {
      term: 'ZTA-waarde',
      definition:
        'Zon-toetredingsfactor — fractie van zonnestraling die door glas heen komt; lager = meer zonwering.',
    },
    {
      term: 'Lichttoetreding (LT)',
      definition:
        'Fractie van zichtbaar licht die doorlaat — visuele helderheid; meestal hoger dan ZTA.',
    },
    {
      term: 'Gehard glas (ESG)',
      definition:
        'Thermisch behandeld glas dat bij breuk in stompe stukjes uiteenvalt; gebruikt voor deuren en balustrades.',
    },
    {
      term: 'Gelaagd glas (VSG)',
      definition:
        'Twee glasbladen met PVB-folie ertussen; bij breuk blijft glas hangen — voor inbraak­werend en veiligheid.',
    },
    {
      term: 'Brandwerend glas',
      definition:
        'Glas met intumescent laag of gel; behoudt integriteit 30-120 minuten bij brand.',
    },
    {
      term: 'Inbraakwerend glas',
      definition:
        'Norm EN 356 P2A-P8B — gelaagd glas dat doorboring tegenhoudt, vereist bij PKVW.',
    },
    {
      term: 'Glas-in-lood',
      definition:
        'Sierglas met loden roeden; karakteristiek voor Art Nouveau en jaren-30 bouw.',
    },
  ],

  games: [
    {
      id: 'C11-gapfill-1', type: 'gapfill',
      title: 'Glassoorten en waardes',
      text:
        '{{HR++}} glas heeft Low-E coating + argon-gas, U-waarde ~1,1 W/m²·K — Bbl-minimum. ' +
        '{{Triple}} glas heeft 3 glasplaten — U ~0,7, voor passief­huis. ' +
        'De {{LTA}}-waarde geeft lichttoetreding aan (0–1); de {{ZTA}}-waarde (g-waarde) geeft zonne-energie­doorlaat. ' +
        '{{Gelaagd}} (veiligheids)glas heeft een PVB-laag tussen platen — blijft heel bij breken.',
      distractors: ['HR+', 'enkel', 'Rc', 'gehard'],
    },
    {
      id: 'C11-sort-1', type: 'sort',
      title: 'Sorteer glassoorten',
      categories: ['Standaard', 'Speciale eigenschap', 'Decoratief / monument'],
      items: [
        { label: 'Enkel glas', category: 'Standaard' },
        { label: 'HR++ isolatieglas', category: 'Standaard' },
        { label: 'Triple glas (HR+++)', category: 'Standaard' },
        { label: 'Gelaagd veiligheids­glas', category: 'Speciale eigenschap' },
        { label: 'Brandwerend glas', category: 'Speciale eigenschap' },
        { label: 'Geluidwerend glas', category: 'Speciale eigenschap' },
        { label: 'Glas-in-lood', category: 'Decoratief / monument' },
        { label: 'Monumentenglas', category: 'Decoratief / monument' },
      ],
    },
    {
      id: 'C11-matching-1', type: 'matching',
      title: 'Gevel-glas-constructies',
      pairs: [
        { left: 'Structurele beglazing', right: 'Glas direct op constructie gelijmd — geen zichtbaar kozijn' },
        { left: 'Spider­beglazing', right: 'Glas aan punten bevestigd met RVS-spiders' },
        { left: 'Klimaatgevel / tweede huid', right: 'Twee gevels met geventileerde spouw' },
        { left: 'Vliesgevel', right: 'Niet-dragend frame met glas/panelen — hangt voor constructie' },
        { left: 'Condens TUSSEN ruiten', right: 'Lekkage dubbel glas — niet repareerbaar' },
      ],
    },
  ],
}
