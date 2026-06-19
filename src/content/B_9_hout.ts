import type { Topic } from '../types/content'

const FIG = '/figs/B_9'
const SRC = 'Lesboek hfd. 9'

export const B_9_hout: Topic = {
  code: 'B.9',
  section: 'B',
  title: 'Hout',
  chapterRef: 'Lesboek hoofdstuk 9',
  blurb:
    'Loof- en naaldhout, hard- en zachthout, het "werken" van hout (krimpen, zwellen, kromtrekken, scheluwtrekken), gebreken (kalkgang, harsgang, kwasten, windscheur, draadverloop), plantaardige en dierlijke aantasting, de belangrijkste houtsoorten (vuren, grenen, meranti, eiken, beuken, redwood, WRC, azobé, teak, douglas), plaatmaterialen (triplex, multiplex, OSB, MDF, HDF, spaan, underlayment, betonplex, volkern), houtverbindingen, gelamineerd hout + CLT, en verduurzaming.',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · Hardhout, zachthout en het "werken" van hout',
      toetstermCodes: ['B.9.1', 'B.9.2'],
      body: `
Hout wordt eerst ingedeeld op **bladtype**:

- **Loofhout** — bladeren, verliest in najaar zijn blad. Grovere houtstralen, **geen hars**, doorgaans donkerder tinten, aparte cellen voor voedseltransport en voor steun.
- **Naaldhout** — naalden, altijd groen (uitzondering: lariks). Duidelijke groeiringen, fijne houtstralen, **bevat hars**.

Daarnaast onderscheidt men in de praktijk:

- **Hardhout** — over het algemeen loofhout, hoge dichtheid (>650 kg/m³), hard en duurzaam. Voorbeelden: eiken, beuken, meranti, teak, azobé, merbau. Hardhout is langzamer gegroeid.
- **Zachthout** — over het algemeen naaldhout, lagere dichtheid (~400–500 kg/m³), zacht en makkelijker te bewerken. Voorbeelden: vuren, grenen, dennen, lariks, douglas, redwood, western red cedar. Zachthout heeft veel **lucht in de cellen** → isoleert beter dan hardhout.

> Let op: 'hard' en 'zacht' is geen synoniem voor duurzaam. Western red cedar is bv. zacht maar duurzamer (dzhk II) dan beuken (hardhout, dzhk V).

### Het "werken" van hout
Hout is een **anisotroop, hygroscopisch** materiaal: het neemt vocht op of geeft het af, en de afmetingen veranderen daardoor — sterk afhankelijk van de **richting** van de groeiringen. Vier verschijnselen:

- **Krimpen** — vochtverlies → afmetingen worden kleiner. Krimp is **grootst in tangentiale richting** (langs groeiringen), kleiner in radiale richting, en vrijwel **nul in lengterichting**.
- **Zwellen** — vochtopname → afmetingen worden groter. Spiegelbeeld van krimpen.
- **Kromtrekken** — een plank trekt aan één zijde meer dan aan de andere → hij wordt hol of bol. Vooral **dosse gezaagde** delen (waar tangentiale richting de breedte vult) zijn gevoelig.
- **Scheluwtrekken** (*twisten*) — de plank verdraait in zichzelf — de vier hoeken liggen niet meer in één vlak. Komt voor bij hout met **draadverloop** of **warrigheid** in de structuur.

**Zaagmethode bepaalt de mate van werken**:
- **Dosse / blokgezaagd** (evenwijdig aan het hart) — vlampatroon op het oppervlak, maar **krimpt en trekt krom**.
- **Kwartier / rift gezaagd** (loodrecht op groeiringen) — **krimpt alleen in dikte**, trekt nauwelijks krom, hogere slijtvastheid → standaard voor sportvloeren, eikenparket, hoogwaardig timmerwerk. Duurder (meer afval).

**Bouwhout** wordt gedroogd tot ~16–20% vochtgehalte (KVH 2000 / NEN 5461 droogteklassen 1–5). **Te droog of te nat** → het gaat alsnog werken als het op zijn plek anders evenwicht zoekt.
      `.trim(),
      images: [
        {
          src: `${FIG}/loof-vs-naald.jpg`,
          caption: 'Loofhout vs naaldhout — verschillen in groeiringen, houtstralen, hars en celfuncties.',
          source: SRC,
          width: 'md',
        },
        {
          src: `${FIG}/stam-doorsnede.jpg`,
          caption: 'Doorsnede van een boomstam: schors, bast, cambium (waar diktegroei plaatsvindt), spinthout, kernhout, hart en groeiringen.',
          source: SRC,
          width: 'md',
        },
        {
          src: `${FIG}/zaagmethoden.jpg`,
          caption: 'Zaagmethoden: dosse, zuiver kwartier, vals kwartier en moderne kwartiermethode. Kwartier (rift) geeft het minste werken.',
          source: SRC,
          width: 'md',
        },
        {
          src: `${FIG}/rift.jpg`,
          caption: 'Rift (kwartier) gezaagd hout — groeiringen staan loodrecht op het oppervlak; krimpt alleen in dikte.',
          source: SRC,
          width: 'sm',
        },
        {
          src: `${FIG}/dosse-krom.jpg`,
          caption: 'Dosse gezaagd hout — groeiringen lopen evenwijdig aan het oppervlak; trekt krom bij vochtverandering.',
          source: SRC,
          width: 'sm',
        },
      ],
    },

    {
      heading: '2 · Gebreken in hout (BT2)',
      toetstermCodes: ['B.9.2'],
      body: `
B.9.2 vraagt je om de volgende gebreken te kennen en te kunnen uitleggen:

### Vormgebreken
- **Krimpen / zwellen / kromtrekken / scheluwtrekken** — zie §1
- **Kops hout** — een dwars op de groeirichting gezaagd uiteinde van een balk of plank. Hier zuigen de open vaten als rietjes vocht naar binnen → **kops hout is altijd kwetsbaar** voor vocht; bij toepassing buiten altijd afdichten (boekel, lood, eindkit) of niet exposeren.

### Inhoud-gebreken
- **Kalkgang** — een ader van witte, kalkachtige neerslag in het hout, vooral in teak. Stoort het zaagblad of de schaaf, kan vlekken geven onder verf.
- **Harsgang** — een ader van hars die zich verzamelt in een spleet in naaldhout (vuren, grenen, douglas, lariks). Bij verhitting (zon op gevel) kan de hars **doorbloeden** door de verflaag.
- **Draadverloop** — de houtvezels lopen niet recht maar in een spiraal of schuin langs de stam. Een balk met draadverloop verliest **buigsterkte** en trekt makkelijker scheluw.
- **Warrigheid** (*kruisdradig hout*) — vezels lopen door elkaar, niet in één richting. Sterk hout, maar **moeilijk te bewerken** (schaaf scheurt, splijt slecht) — vaak bij iep en kastanje.

### Mechanische gebreken
- **Windscheur** — een scheur in de stam langs de groeiringen, ontstaan door **storm**: de stam buigt zwaar door en de jaarlagen scheuren los. Soms pas zichtbaar na zagen.
- **Valbreuk** — knik dwars op de vezels door het neervallen van de boom. Geeft een **gevaarlijke verzwakking** van de balk; visueel detectabel als zigzag-scheur.
- **Kwast / noest** — een ingegroeide tak. **Vaste kwast** (verbonden met omliggend hout) is constructief geen probleem, **losse kwast** kan eruitvallen → verzwakking + gat. Kwasten in trekzones zijn ongewenst.
- **Spleten en scheuren** — door drogen of belasting.

### Plantaardige aantasting
- **Schimmel** — verkleuring van het oppervlak; veelal alleen esthetisch. Onder vochtige omstandigheden gevaarlijker.
- **Huiszwam** — beruchte aantaster. Vormt witte wattenachtige strengen die later citroengeel, daarna grijs/groen worden. Trekt water uit ander materiaal naar zich toe en breidt zich uit via "strengen" die over metselwerk en pleister lopen. **Bestrijding kostbaar** — alle strengen moeten volledig verwijderd worden, ook in aangrenzend werk. Komt voor in vochtige, slecht geventileerde ruimten (kelders, kruipruimten, slecht gerenoveerde houten balklagen).
- **Kelderzwam** — minder agressief dan huiszwam, in natte ruimten. Alleen dzhk I-soorten zijn erbestand tegen.
- **Witte rot** — schimmel die zowel cellulose als lignine afbreekt → hout wordt licht (witachtig) en vezelig.
- **Bruine rot** — schimmel die alleen cellulose afbreekt → hout wordt donkerbruin, krimpt in 'kubusvormige' brokken (cubic rot).
- **Softrot** — actief bij waterverzadigd hout dat ook met zuurstof in contact komt: typisch voor **houten heipalen** waarvan de top boven het verlaagde grondwater is komen te liggen — wegrottingsnelheid tot 1 cm/jaar (ramp rond Amsterdam, Haarlem, Zaanstreek).

### Dierlijke aantasting
- **Houtworm** (kleine en grote — larve van knaagkever) — gangen + ronde uitvliegopeningen (1–2 mm klein, 2,5–4 mm grote houtworm).
- **Huisboktor** — ovale uitvliegopeningen 6–10 × 3 mm; leeft in naaldhout. Zeer schadelijk in oude woningen.
- **Houtwesp** — minder voorkomend. Larve graaft brede ovale gangen.
- **Spinthoutkever** — alleen in loofhout-spinthout.
- **Marineboorders** — paalworm en gribbel in zeewater (palen, beschoeiing).

> Examen-tip: leer per gebrek waar het voorkomt, hoe je het herkent, en wat de gevolgen zijn voor constructie of afwerking.
      `.trim(),
      images: [
        {
          src: `${FIG}/houtworm.jpg`,
          caption: 'Houtwormkever en larve — verraadt zich door ronde uitvlieggaten van 1–2 mm in het hout. Gespecialiseerd bedrijf voor bestrijding.',
          source: SRC,
          width: 'md',
        },
      ],
    },

    {
      heading: '3 · Houtsoorten herkennen (BT1)',
      toetstermCodes: ['B.9.3'],
      body: `
Het examen kan vragen om typische **kenmerken en toepassing** van tien houtsoorten. Geheugensteun: per soort onthouden of het **hardhout of zachthout** is, **dzhk** (duurzaamheidsklasse) en de **standaardtoepassing**.

### Europees naaldhout (zachthout)
- **Vuren** (fijnspar, dzhk IV) — witgele kleur, ovale bruine kwasten, **bevat hars**. Veel gebruikt voor binnenwerk (kasten, deuren, bekisting, dakbeschot). **Niet voor buiten** zonder impregnatie.
- **Grenen** (grove den, dzhk III/IV) — donkergeel tot bruinrood, harsrijk, geschikt voor buitenwerk: **kozijnen, gootlijsten, heipalen onder grondwater**.
- **Lariks** (dzhk III) — zacht, harsrijk, verliest in winter naalden. Voor kapconstructies en water-/scheepsbouw.

### Amerikaans naaldhout (zachthout)
- **Redwood / Sequoia** (dzhk II) — zacht, rechtdradig, weinig werkend, **looizuur** → vraagt **RVS-bevestiging** (gewoon staal verkleurt zwart). Gevelbekleding, tuinhuizen.
- **Douglas / Oregon pine** (dzhk III) — harsrijk, bruinrood gestreept, grote afmetingen leverbaar. Voor riftvloeren, gevelbekleding, triplex.
- **Western red cedar / WRC** (dzhk II) — zacht, roodbruin, **zeer licht** en duurzaam. Lichte gevelbekleding, dakbedekkingen (shingles), sauna's.

### Niet-tropisch loofhout (hardhout)
- **Eiken** (Europees, dzhk II/III) — hard, vast, sterk, looizuurrijk. Spinthout is onbruikbaar. **Standaard hardhout** voor kozijnen, deuren, parket, brugdekken.
- **Beuken** (dzhk V) — gelijkmatig, **goed buigbaar** (stoom), splintert niet. Voor meubelen, stelen en speelgoed. **Niet voor buiten** of in lucht-afgesloten plaats.

### Tropisch loofhout (hardhout)
- **Meranti** (donkerrood: dzhk II/III; lichtrood: III/IV) — bruinrood, **vervangt eiken** voor kozijnen en ramen. Donkerrode meranti is duurder maar geschikter voor buiten.
- **Teak** (dzhk I) — uitzonderlijk hoogwaardig, **kalkhoudend** en **vettig** (eigen olie). Winkelpuien, voordeuren, scheepsdekken. Zeer duur.
- **Azobé** (dzhk I) — zwart-bruin, **extreem zwaar en hard**, vrijwel onaantastbaar. Voor waterbouw: damwanden, brugdekken, meerpalen.

> **Geheugensteun-trio**: voor buitenkozijnen in moderne nieuwbouw zijn donkerrode meranti, grenen (geïmpregneerd) en duurzaam-gemaakt vuren (Accoya, Platowood) de meest gebruikte soorten.
      `.trim(),
      images: [
        {
          src: `${FIG}/vuren.jpg`,
          caption: 'Vuren — witgeel, ovale bruine kwasten, harsrijk. Binnenwerk en bekisting.',
          source: SRC,
          width: 'sm',
        },
        {
          src: `${FIG}/douglas.jpg`,
          caption: 'Douglas / Oregon pine — bruinrood gestreept, harsrijk, grote afmetingen.',
          source: SRC,
          width: 'sm',
        },
        {
          src: `${FIG}/western-red-cedar.jpg`,
          caption: 'Western red cedar (WRC) — zacht, licht, roodbruin, duurzaam (dzhk II). Lichte gevelbekleding.',
          source: SRC,
          width: 'sm',
        },
        {
          src: `${FIG}/redwood.jpg`,
          caption: 'Redwood / Sequoia — vraagt RVS-bevestiging (looizuur).',
          source: SRC,
          width: 'sm',
        },
        {
          src: `${FIG}/eiken.jpg`,
          caption: 'Eiken (dosse gezaagd) — hard, vast, sterk; standaard voor kozijnen en parket.',
          source: SRC,
          width: 'sm',
        },
        {
          src: `${FIG}/merbau.jpg`,
          caption: 'Merbau (tropisch hardhout, dzhk II) — duurzaam; "bloedt" in water (bruine vlekken).',
          source: SRC,
          width: 'sm',
        },
      ],
    },

    {
      heading: '4 · Plaatmaterialen op houtbasis',
      toetstermCodes: ['B.9.4'],
      body: `
De examen-relevante plaatmaterialen — leer ze met **opbouw**, **toepassing** en **bijzonderheid**.

### Fineer en lagenplaten
- **Fineer** — zeer dunne (≤ 2 mm) plaatjes hout, door **zagen**, **snijden** of **schillen**. *Edelfineer* is duur (teak, mahonie, eiken); **goedkoper fineer** voor triplex/multiplex.
- **Triplex** — 3 lagen fineer, onder rechte hoeken gekruist verlijmd. Voor licht plaatwerk, achterwanden.
- **Multiplex** — meer (altijd **oneven**) lagen, dus stabieler en sterker dan triplex. Voor zwaarder werk.
- **Hechthout** / **WBP-multiplex** (Water Boiled Proof) — multiplex dat 72 uur in **kokend water** mag liggen zonder ontlijmen. Voor buitenwerk, dakbeschot, boten.
- **Betonplex** — multiplex met **fenolhars-/kunsthars-filmlaag** aan beide zijden. Glad oppervlak, water- en cementbestendig. **Bekistingsmateriaal** voor zichtbeton.
- **Constructietriplex** — speciaal voor I- en kokerliggers in HSB.

### Persplaten (deeltjesplaten)
- **Spaanplaat** — houtdeeltjes onder druk met **formaldehydelijm** geperst. **Vochtgevoelig** — vochtbestendige variant is groenachtig. Onderkant van keukenkasten, achterwanden, vloerbeschot.
- **OSB / Chipwood** (Oriented Strand Board) — grote spaanderschijven (≥ 30 mm) onder druk met fenolformaldehydelijm. Voor **vloeren, wanden en dakbeschot** in HSB; veel sterker dan gewone spaanplaat.
- **Meubelplaat** — dikke binnenlaag van vurenhouten staafjes of latjes met fineer aan de zichtkanten. Voor kasten en blinde panelen.

### Vezelplaten
- **MDF** (Medium Density Fiberboard) — fijne houtvezels met kunsthars, gelijkmatig in alle richtingen te bewerken. Voor binnenwerk: deuren, plinten, latei-omkasting, meubels.
- **HDF** (High Density) — zwaardere variant van MDF. Voor laminaat-onderkant, deurplaten met hoge eisen.
- **Hardboard / Masonite** — geperste vezelplaten, hard en dun, één gladde zijde + één ruwere achterkant. Voor lichte achterwanden.
- **Zachtboard** — laaggeperst, isolerend, voor geluid- en thermische dempinglaag.

### Bijzondere platen
- **Underlayment** — vochtbestendige plaat voor dakbeschot van **platte daken**, vergelijkbaar met OSB maar fijner.
- **Houtwolcementplaat** / **Heraklith** — smalle krullen hout gebonden met cement of magnesiet. **Brandwerend** en goed **geluidsabsorberend**; voor plafondbekleding in fabriekshallen, sporthallen.
- **Glasvezelplaat** — onverzadigd polyester versterkt met glasvezels (zie ook B.15 Kunststoffen). Niet echt houtproduct, wel in dit rijtje.
- **Vlasvezelplaat** — vlas + kunsthars, milieuvriendelijk maar vochtgevoelig.
- **Volkern (kunststof)** — **HPL** (High Pressure Laminate, ook bekend als Trespa/Polyrey) — vele lagen papier of houtvezel met fenolhars onder hoge druk + temperatuur tot een **massieve plaat** geperst. Vrijwel onverwoestbaar, kleurvast, kras- en weersbestendig. Voor **wandbekleding** (binnen + buiten), toiletwanden, gevelpanelen, laboratoriumtafels.

> **Geheugensteun**: hoe **fijner** het houtdeeltje, hoe **gladder** en homogener de plaat. Spaan → OSB → MDF → HDF → fineer.
      `.trim(),
      images: [
        {
          src: `${FIG}/fineer-snij.jpg`,
          caption: 'Fabricage van fineer: door snijden of door schillen ontstaan zeer dunne (≤ 2 mm) plaatjes — basis voor triplex en multiplex.',
          source: SRC,
          width: 'md',
        },
      ],
    },

    {
      heading: '5 · Houtverbindingen',
      toetstermCodes: ['B.9.5'],
      body: `
B.9.5 vraagt je om de volgende verbindingen te kunnen **herkennen** (op tekening of foto). Ze worden gegroepeerd in twee richtingen:

### Verbindingen in de lengterichting
- **Geschroefd / gespijkerd** — eenvoudig, niet bijzonder sterk. Vooral als hulp bij andere verbindingen.
- **Messing en groef** (m-en-g, ook 'tand en groef') — één plank heeft een **messing** (uitstekend tongetje) langs de zijkant, de andere een **groef** (uitsparing). Klik elkaar dicht; geen lijm nodig. Standaard voor **vloerdelen, schroten, gipsblokken**.
- **Liplas** — twee plankuiteinden zijn elk halverwege uitgesneden (omgekeerde L) en overlappen elkaar over een lengte. Lijmen of schroeven.
- **Vingerlas** — twee uiteinden hebben passende driehoekige 'vingers' die in elkaar grijpen. Vooral voor **lange kozijnstijlen** uit korte stukken, en in gelamineerde balken. Even sterk of sterker dan het volle hout (lijm + vergroot lijmoppervlak).

### Verbindingen in de breedterichting (haakse kruising)
- **Halfhoutse verbinding** — beide stukken zijn halverwege uitgehakt en passen klemvast in elkaar — klassieke kruising in vakwerk, dakgordingen.
- **Open pen-en-gat / slisverbinding** — een **slis** (smalle inkeping) in het ene stuk, een passende pen in het andere. Open aan één zijde — vaak gezekerd met spijker/houtdeuvel.
- **Pen-en-gat** — de **pen** (uitstekend rechthoekje aan het uiteinde van een stijl) past in een **gat** (uitsparing in een regel). Het traditionele timmerwerk-detail voor stoelen, kozijnen, deurkasten. Vaak met **houten deuvel** doorboord en geborgd.
- **Zwaluwstaartverbinding** — pen in zwaluwstaart-vorm (trapezium-vormig); kan na inschuiven niet meer terug — **trekvast** in één richting. Klassiek in laden van kasten.
- **Deuvelverbinding** — twee stukken zijn voorgeboord en met **houten deuvels** (kleine houten ronde staafjes) verbonden. Gangbaar in industriële meubelbouw en kozijnverbindingen.

### Wanneer welke verbinding?
- **Massa-product, eenvoud**: geschroefd, gespijkerd of deuvelverbinding
- **Vloeren, paneelwerk**: messing en groef
- **Lange stukken uit korte**: vingerlas
- **Klassiek timmerwerk**: pen-en-gat met deuvel
- **Trekvaste verbinding**: zwaluwstaart
      `.trim(),
      images: [
        {
          src: `${FIG}/messing-groef.jpg`,
          caption: 'Messing-en-groef verbinding (g.g.-delen) — standaard voor vloerdelen en schroten; klikken in elkaar zonder lijm.',
          source: SRC,
          width: 'md',
        },
        {
          src: `${FIG}/vingerlas.jpg`,
          caption: 'Vingerlas — passende driehoekige vingers ineensluiten; even sterk of sterker dan het volle hout. Voor verlenging van kozijnstijlen en in gelamineerde balken.',
          source: SRC,
          width: 'md',
        },
      ],
    },

    {
      heading: '6 · Gelamineerd hout en Cross Laminated Timber (CLT)',
      toetstermCodes: ['B.9.6'],
      body: `
Twee moderne houtconstructies die in de examenstof apart genoemd worden — beide producten van **lijmtechnologie + ingenieurshout**.

### Gelamineerd hout (Glulam — *glued laminated timber*)
- Opbouw: **meerdere plankjes (lamellen)** van zachthout (vuren, grenen, douglas) worden **boven op elkaar verlijmd** met hoogwaardige (vaak melamine- of resorcinol-) lijm tot één balk.
- De **lamellen lopen in dezelfde lengte-richting** — net als de vezels van een normaal stuk hout.
- De groeiringen worden bewust **niet in dezelfde richting** gelegd → spanningen heffen elkaar op → de balk is **vormvast** en trekt niet krom of scheluw.
- Mogelijk in **zeer grote afmetingen** (lengte tot ~40 m, willekeurige kromme vormen) die in massief hout niet bestaan.

**Toepassingen**: grote dakspanten (kerken, sporthallen, zwembaden), kromme spanten (skipistehallen), kolommen en liggers in moderne houtbouw, bruggen.

### Cross Laminated Timber (CLT — *kruislaaghout*)
- Opbouw: **lagen plankjes worden kruislings (90° gedraaid) op elkaar verlijmd**, meestal 3, 5 of 7 lagen. Het lijkt op heel dik triplex/multiplex, alleen dan opgebouwd uit **massieve plankjes** in plaats van fineer.
- Resultaat: een **massieve plaat** (paneel) die in twee richtingen draagt — geschikt voor **wanden, vloeren én daken** als één element.
- Standaardafmetingen: dikten 60–400 mm, breedten tot 3 m, lengten tot 16 m. **In de fabriek met CNC** uitgesneden: alle sparingen voor leidingen, kozijnen en kabels worden vooraf gefreesd.

**Voordelen**:
- **Hernieuwbaar materiaal** — vastgelegde CO₂ blijft in de constructie
- **Lichte constructie** (~5× lichter dan een vergelijkbare betonwand) → lichtere fundering
- **Grote prefab-elementen** → korte bouwtijd
- **Goede brandwerendheid** door verkoolde buitenlaag (binnenhout blijft koel)

**Toepassingen**: meerlaagse woningbouw en kantoren — moderne 'houttoren'-projecten gebruiken CLT als hoofdconstructie. Bekendste Nederlandse voorbeeld: HAUT in Amsterdam (21 verdiepingen, deels CLT).

> **Verschil onthouden**: Glulam = lamellen **dezelfde richting** → voor **balken/kolommen** (lineair). CLT = lagen **kruislings** → voor **vloeren/wanden** (vlakelement).
      `.trim(),
      images: [
        {
          src: `${FIG}/gelamineerd.jpg`,
          caption: 'Gelamineerd hout — meerdere plankjes (lamellen) in dezelfde lengte-richting verlijmd. Mogelijk in zeer grote en gebogen afmetingen.',
          source: SRC,
          width: 'md',
        },
      ],
    },

    {
      heading: '7 · Verduurzaming van hout',
      toetstermCodes: ['B.9.7'],
      body: `
Onbehandeld zachthout heeft een korte levensduur buiten (vuren dzhk IV, grenen III/IV). Om het toch geschikt te maken voor buitentoepassing wordt het **verduurzaamd**.

### Klassieke verduurzaming (chemisch)
- **Vacuüm- en drukmethode met zoutoplossingen** — het hout wordt in een autoclaaf onder vacuüm gezet zodat de cellen worden leeggezogen, daarna onder druk gevuld met een **conserveringsmiddel** (vroeger CCA = chroom-koper-arseen, nu zoutvrije alternatieven). Het zout vormt onoplosbare verbindingen met het hout.
- **Creosootolie** — donkere teerolie, sinds 2003 verboden voor consumenten en sinds 2013 ook industrieel beperkt — **kankerverwekkend**.
- **Pillen/capsules** — droge conserveringsstoffen in capsulevorm worden in voorgeboorde gaten in palen of kozijnen geplaatst en breken open bij ~18% vochtgehalte. Goed voor inwendige verduurzaming.

### Moderne modificatie (zonder gif)
Hier verandert men de **celstructuur** zonder chemische impregnatie — beter voor milieu en arbeidsomstandigheden:

- **Stellacwood** — verhitting tot **~250 °C** in een zuurstof-arme omgeving. Hout wordt donkerder, krijgt dzhk I-II, krimpt en zwelt veel minder.
- **Platowood** — Nederlandse vinding: hout wordt eerst onder **stoom onder druk** gezet en daarna gedroogd. Verhoogt duurzaamheid + dimensionale stabiliteit.
- **Linn Wood** — stoombehandeling tussen 160–210 °C. Vergelijkbaar met Stellacwood.
- **Accoya hout** — reactie met **azijnzuuranhydride** (acetylering): de OH-groepen in cellulose worden vervangen door acetylgroepen → minder vochtopname → veel minder werken, **dzhk I** (>25 jaar), natuurlijke kleur behouden. Toegepast op vuren, grenen, radiata pine.

**Praktijkkeuze**:
- **Goedkoop binnen**: onbehandeld vuren of grenen
- **Standaard buitenkozijn**: geïmpregneerd grenen of donkerrood meranti
- **Premium-buiten / duurzaam**: Accoya, Platowood, hardhout met FSC-keurmerk
- **In water / grondcontact**: azobé, eiken, dzhk I-tropisch hardhout
      `.trim(),
    },
  ],

  toetstermen: [
    {
      code: 'B.9.1',
      text: 'Herkent de voor de bouw van belang zijnde eigenschappen, kwaliteitskenmerken, toepassingen en gebreken van hout, zoals hardhout, zachthout, werken, zwellen, krimpen, kromtrekken.',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'B.9.2',
      text: 'Legt de eigenschappen, kwaliteitskenmerken, toepassingen en gebreken van hout uit (incl. kops hout, scheluwtrekken, kalkgang, harsgang, draadverloop, warrigheid, windscheur, kwast, dierlijke aantasting (boktor, houtworm, houtwesp) en plantaardige aantasting (schimmel/huiszwam, zwam, witte rot, bruine rot)).',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
    {
      code: 'B.9.3',
      text: 'Herkent de houtsoorten vuren, grenen, meranti, eiken, beuken, redwood, western red cedar, azobé, teak en douglas.',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'B.9.4',
      text: 'Verwoordt de benamingen, eigenschappen en toepassingen van plaatmaterialen op houtbasis: fineer, triplex/multiplex, underlayment, meubelplaat, spaanplaat, glasvezelplaat, MDF, HDF, hardboard, zachtboard, houtwolcementplaat, betonplex, OSB/chipwood en volkern (kunststof).',
      niveau: 'BT1',
      bloom: 'Begrip',
    },
    {
      code: 'B.9.5',
      text: 'Herkent voorkomende houtverbindingen in lengte- en breedterichting: geschroefd/gespijkerd, messing en groef, liplassen, vingerlassen, halfhoutse verbinding, open pen-en-gat/slisverbinding, pen-en-gat, zwaluwstaartverbinding en deuvelverbinding.',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'B.9.6',
      text: 'Benoemt de toegepaste houtconstructies van gelamineerd hout en Cross Laminated Timber (CLT).',
      niveau: 'BT2',
      bloom: 'Kennis',
      metDrawing: true,
    },
    {
      code: 'B.9.7',
      text: 'Noemt de verduurzamingsmethoden van de in B.9.3 genoemde houtsoorten.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
  ],

  questions: [
    // === B.9.1 — Werken van hout (4) ===
    {
      id: 'B9-1-a',
      toetstermCode: 'B.9.1',
      type: 'mc',
      prompt: 'In welke richting is het krimpen/zwellen van hout het **grootst**?',
      options: [
        'In lengterichting (axiaal)',
        'In radiale richting (langs de stralen)',
        'In tangentiale richting (langs de groeiringen)',
        'Krimpen is in alle richtingen even sterk',
      ],
      correctIndex: 2,
      explanation:
        'Krimp/zwel is grootst in **tangentiale** richting (langs de jaarringen), kleiner in radiale richting, en vrijwel **nul in de lengterichting**. Daarom blijven balken in lengte stabiel maar werken planken in breedte sterk.',
    },
    {
      id: 'B9-1-b',
      toetstermCode: 'B.9.1',
      type: 'mc',
      prompt:
        'Een **rift (kwartier) gezaagde** plank verschilt van een **dosse gezaagde** plank doordat rift:',
      options: [
        'Sterker is bij buigen',
        'Een vlampatroon op het oppervlak vertoont',
        'Krimpt alleen in dikte en trekt nauwelijks krom',
        'Goedkoper is door minder zaagafval',
      ],
      correctIndex: 2,
      explanation:
        'Bij rift gezaagd staan de groeiringen loodrecht op het oppervlak; krimp ligt vooral in de dikte. Dosse-zaag heeft groeiringen evenwijdig aan het oppervlak → krimpt in de breedte en trekt krom. Daarom is rift duurder maar veel stabieler — standaard voor sport- en hoogwaardige eikenvloeren.',
    },
    {
      id: 'B9-1-c',
      toetstermCode: 'B.9.1',
      type: 'mc',
      prompt: 'Wat is het verschil tussen **hardhout** en **zachthout** in de praktijk?',
      options: [
        'Hardhout is altijd duurzamer dan zachthout',
        'Hardhout = loofhout, zachthout = naaldhout',
        'Hardhout heeft hars en zachthout niet',
        'Hardhout komt alleen uit de tropen',
      ],
      correctIndex: 1,
      explanation:
        'Hardhout = doorgaans loofhout, dichter en harder (>650 kg/m³). Zachthout = doorgaans naaldhout, lichter (~400–500 kg/m³). Maar "hard" is geen synoniem voor "duurzaam": western red cedar is zacht én duurzaam (dzhk II); beuken is hard maar niet duurzaam (dzhk V).',
    },
    {
      id: 'B9-1-d',
      toetstermCode: 'B.9.1',
      type: 'mc',
      prompt:
        'Wat gebeurt er als bouwhout wordt gemonteerd dat **te nat** is (boven de evenwichtsvochtigheid in de ruimte)?',
      options: [
        'Niets — hout vindt zelf zijn evenwicht zonder vormverandering',
        'Het hout krimpt, naden worden groter en planken trekken krom',
        'Het hout zet uit en krijgt extra sterkte',
        'Het verlost krimpt eenmalig en blijft daarna stabiel',
      ],
      correctIndex: 1,
      explanation:
        'Hout zoekt evenwicht met zijn omgeving (vochtgehalte ~16–20% bij standaard binnenklimaat). Te nat ingebouwd hout krimpt na verloop van weken/maanden uit — naden, gaten en kromtrekken zijn het gevolg. Daarom werken bouwers met droogteklassen volgens KVH 2000.',
    },

    // === B.9.2 — Gebreken (6) ===
    {
      id: 'B9-2-a',
      toetstermCode: 'B.9.2',
      type: 'mc',
      prompt: 'Wat is **scheluwtrekken** van een houten plank?',
      options: [
        'Holle of bolle vervorming over de breedte',
        'De plank verdraait',
        'Lengtekrimp in de stam',
        'Splijten langs de groeiringen',
      ],
      correctIndex: 1,
      explanation:
        'Scheluwtrekken (ook wel "twisten") = de plank verdraait — bij plat leggen ligt één hoek omhoog. Komt vooral voor bij hout met draadverloop of warrigheid in de structuur.',
    },
    {
      id: 'B9-2-b',
      toetstermCode: 'B.9.2',
      type: 'mc',
      prompt: 'Waarom is **kops hout** kwetsbaar?',
      options: [
        'Het is altijd hardhout en daardoor moeilijk te bewerken',
        'De open vaten zuigen vocht op',
        'Het bevat een te hoog gehalte aan kalk',
        'Het is door insecten extra aantrekkelijk',
      ],
      correctIndex: 1,
      explanation:
        'Bij kops hout is dwars op de groeirichting gezaagd; de open uiteinden van vaten en houtcellen werken als rietjes en zuigen vocht naar binnen. Daarom worden kopse uiteinden buiten altijd afgesloten (loodloodje, eindkit, beschermend boekel).',
    },
    {
      id: 'B9-2-c',
      toetstermCode: 'B.9.2',
      type: 'mc',
      prompt: 'Een geverfd grenenhouten kozijn heeft op een warme zomerdag **harsplekken** die door de verf doorbloeden. Wat is dit?',
      options: [
        'Kalkgang die met zonlicht reageert',
        'Schimmel die uit de verf groeit',
        'Harsgang',
        'Verfblaren door slechte hechting',
      ],
      correctIndex: 2,
      explanation:
        'Harsgang is een ader van hars die zich verzamelt in een spleet in naaldhout (vuren, grenen, douglas). Bij verhitting (zon op gevel) wordt de hars vloeibaar en kan door de verflaag heen lekken. Voorkomen: kwasten met hars/aanduiding "extra fijn" uitkiezen, harsplekken behandelen met hars-stop voor schilderen.',
    },
    {
      id: 'B9-2-d',
      toetstermCode: 'B.9.2',
      type: 'mc',
      prompt: 'Wat betekent **draadverloop** in een houten balk?',
      options: [
        'Een ingegroeide tak (kwast)',
        'Een spleet langs de groeiringen door storm',
        'De vezels lopen schuin/spiraal',
        'De plank is uit het hart van de boom gezaagd',
      ],
      correctIndex: 2,
      explanation:
        'Draadverloop = de vezels lopen schuin of in een spiraal door de stam. Een balk met draadverloop heeft minder buigsterkte (krachten dwars op de vezels worden minder goed opgenomen) en trekt makkelijker scheluw. KVH-keuringsregels stellen er limieten aan.',
    },
    {
      id: 'B9-2-e',
      toetstermCode: 'B.9.2',
      type: 'mc',
      prompt:
        'Wat is **huiszwam** en waarom is hij zo gevreesd in een woning?',
      options: [
        'Een gewone keldermuf die alleen esthetische schade geeft',
        'Een schimmel die met strengen over metselwerk uitbreidt',
        'Een soort houtworm met witte kop',
        'Een schimmel die alleen op buitenhout voorkomt',
      ],
      correctIndex: 1,
      explanation:
        'Huiszwam vormt witte wattenachtige strengen die later citroengeel/grijs/groen verkleuren. Hij verspreidt zich via strengen door pleister, metselwerk en isolatie en trekt zelf vocht aan. Bestrijding is duur — alle aangetaste delen incl. omliggende materialen moeten weg. Voorkomen: goede ventilatie en geen vocht in slecht bereikbare ruimten.',
    },
    {
      id: 'B9-2-f',
      toetstermCode: 'B.9.2',
      type: 'mc',
      prompt:
        'Wat is het verschil tussen **witte rot** en **bruine rot** in hout?',
      options: [
        'Witte rot is door insecten, bruine rot door schimmels',
        'Witte rot → wit vezelig hout; bruine rot → donkerbruine kubusbrokken',
        'Witte rot is droger, bruine rot natter',
        'Beide zijn synoniemen voor hetzelfde verschijnsel',
      ],
      correctIndex: 1,
      explanation:
        'Witte rot tast cellulose én lignine aan, geeft licht-, vezelig hout. Bruine rot tast alleen cellulose aan, lignine blijft over — geeft donkerbruin hout dat in kubusvormige stukken breekt (cubic rot). Beide treden op in vochtig, slecht geventileerd hout.',
    },

    // === B.9.3 — Houtsoorten (6) ===
    {
      id: 'B9-3-a',
      toetstermCode: 'B.9.3',
      type: 'mc',
      prompt:
        'Welke houtsoort is het meest geschikt voor een **damwand of brugdek** in water?',
      options: [
        'Vuren — goedkoop en sterk',
        'Beuken — vasthoudend en gelijkmatig',
        'Azobé — zeer hard, dzhk I, onaantastbaar in water',
        'Western red cedar — duurzaam en licht',
      ],
      correctIndex: 2,
      explanation:
        'Azobé is een tropisch hardhout (dzhk I) dat extreem zwaar, hard en vrijwel onaantastbaar is — standaard voor damwanden, brugdekken, meerpalen en andere waterbouw. Cedar is wel duurzaam maar veel te zacht.',
    },
    {
      id: 'B9-3-b',
      toetstermCode: 'B.9.3',
      type: 'mc',
      prompt: '**Vuren** wordt veel toegepast voor:',
      options: [
        'Buitenkozijnen in zware omgevingen',
        'Damwanden en brugdekken',
        'Binnenwerk; buiten alleen geïmpregneerd',
        'Voordeuren van representatieve panden',
      ],
      correctIndex: 2,
      explanation:
        'Vuren (dzhk IV) is een goedkoop naaldhout voor binnenwerk en bekisting. Buiten zonder impregnatie is het te slecht bestand tegen vocht en schimmels.',
    },
    {
      id: 'B9-3-c',
      toetstermCode: 'B.9.3',
      type: 'mc',
      prompt: 'Wat is **western red cedar (WRC)** typisch geschikt voor?',
      options: [
        'Zware draagconstructies',
        'Damwanden en brugdekken',
        'Lichte gevelbekleding, shingles en sauna’s',
        'Parketvloeren met hoge slijtvastheid',
      ],
      correctIndex: 2,
      explanation:
        'WRC is opvallend licht en heeft dzhk II — uitstekend voor lichte buitenbekleding (gevelplanken, shingles) en sauna’s (geen hars die problemen geeft). Voor zware draagconstructies of vloeren te zacht.',
    },
    {
      id: 'B9-3-d',
      toetstermCode: 'B.9.3',
      type: 'mc',
      prompt: 'Een bevestiging op **redwood** vraagt:',
      options: [
        'Gewone verzinkte staalschroeven',
        'Aluminium schroeven of nagels',
        'RVS-bevestigingsmiddelen',
        'Geen aparte voorzorg',
      ],
      correctIndex: 2,
      explanation:
        'Redwood bevat looizuur dat met ijzer reageert tot zwarte vlekken (ferro-tannaat). Daarom altijd RVS of messing gebruiken bij redwood (en ook bij eiken — vergelijkbaar probleem).',
    },
    {
      id: 'B9-3-e',
      toetstermCode: 'B.9.3',
      type: 'mc',
      prompt: 'Welk hout is dé klassieke keuze voor **scheepsdekken en voordeuren in representatieve panden**?',
      options: [
        'Lariks',
        'Teak',
        'Beuken',
        'Vuren',
      ],
      correctIndex: 1,
      explanation:
        'Teak is uitzonderlijk hoogwaardig: dzhk I, kalkhoudend en vettig (bevat natuurlijke olie). Zeer duur. Toepassing: scheepsdekken, voordeuren, winkelpuien — daar waar lange levensduur en uitstraling samen moeten.',
    },
    {
      id: 'B9-3-f',
      toetstermCode: 'B.9.3',
      type: 'mc',
      prompt: 'Wat is de **standaard tropische houtsoort** voor moderne buitenkozijnen, als vervanger van eiken?',
      options: [
        'Beuken',
        'Western red cedar',
        'Donkerrode meranti',
        'Azobé',
      ],
      correctIndex: 2,
      explanation:
        'Donkerrode meranti (dzhk II/III) is het werkpaard voor moderne kozijnen in Nederland: redelijk geprijsd, bestand tegen het Nederlandse klimaat, vergelijkbaar in uitstraling met mahonie. Lichtrode meranti is goedkoper maar moet altijd geconserveerd worden.',
    },

    // === B.9.4 — Plaatmaterialen (5) ===
    {
      id: 'B9-4-a',
      toetstermCode: 'B.9.4',
      type: 'mc',
      prompt: 'Wat is het kenmerkende verschil tussen **triplex** en **multiplex**?',
      options: [
        'Triplex is van naaldhout, multiplex van loofhout',
        'Triplex = 3 lagen; multiplex = meer lagen, sterker',
        'Multiplex is dikker dan 18 mm, triplex altijd dunner',
        'Triplex is watervast, multiplex niet',
      ],
      correctIndex: 1,
      explanation:
        'Triplex = drie lagen fineer kruislings verlijmd. Multiplex = meer (5, 7, 9 …) lagen, altijd oneven om kromtrekken te voorkomen. Voor zware constructie of grotere overspanning: multiplex.',
    },
    {
      id: 'B9-4-b',
      toetstermCode: 'B.9.4',
      type: 'mc',
      prompt: 'Wat betekent **WBP** in WBP-multiplex?',
      options: [
        'Wandbouwplaat',
        'Water Boiled Proof',
        'Witte Beuken Plaat',
        'Wapenings-Beton-Plex',
      ],
      correctIndex: 1,
      explanation:
        'WBP = Water Boiled Proof. Multiplex met fenolhars-lijm dat 72 uur in kokend water mag liggen zonder dat de lagen loslaten — standaard voor buitenwerk, dakbeschot en boten.',
    },
    {
      id: 'B9-4-c',
      toetstermCode: 'B.9.4',
      type: 'mc',
      prompt: 'Wat is **betonplex**?',
      options: [
        'Een prefab betonplaat met houten kern',
        'Multiplex met filmlaag',
        'Een MDF-plaat met cement-toplaag',
        'Een laminaat-vloer met betonprint',
      ],
      correctIndex: 1,
      explanation:
        'Betonplex is multiplex met een fenolhars-/kunststoflaagje aan beide zijden. Glad oppervlak en bestand tegen water en cement → standaard bekistingsmateriaal voor zichtbeton waar de afdruk van de bekisting deel van het ontwerp is.',
    },
    {
      id: 'B9-4-d',
      toetstermCode: 'B.9.4',
      type: 'mc',
      prompt: 'Welk plaatmateriaal is opgebouwd uit **grote spaanderschijven (≥ 30 mm)** met fenolformaldehydelijm en wordt veel toegepast voor vloer- en dakbeschot in HSB?',
      options: [
        'Spaanplaat',
        'OSB / Chipwood',
        'MDF',
        'Hardboard',
      ],
      correctIndex: 1,
      explanation:
        'OSB (Oriented Strand Board, ook bekend als Chipwood) heeft grote spaanderschijven die in gerichte oriëntatie verlijmd zijn. Veel sterker dan gewone spaanplaat en bestand tegen vocht (klasse 3). Standaard voor wand-, vloer- en dakbeschot in HSB.',
    },
    {
      id: 'B9-4-e',
      toetstermCode: 'B.9.4',
      type: 'mc',
      prompt: 'Wat is **volkern (HPL)** en waar wordt het toegepast?',
      options: [
        'Een laminaatvloer met houten kern',
        'Geperste lagen met fenolhars tot een massieve plaat',
        'Een spaanplaat met dikke fineerlaag',
        'Een houtwolcementplaat',
      ],
      correctIndex: 1,
      explanation:
        'Volkern (High Pressure Laminate, HPL) bestaat uit vele lagen kraftpapier of houtvezel met fenolhars, samen onder hoge druk en temperatuur tot een massieve plaat. Vrijwel onverwoestbaar, kras- en weerbestendig — bekend als Trespa-gevelpanelen, toiletwanden, laboratoriumbladen.',
    },

    // === B.9.5 — Verbindingen (4) ===
    {
      id: 'B9-5-a',
      toetstermCode: 'B.9.5',
      type: 'mc',
      prompt: 'Wat is een **messing-en-groef** verbinding?',
      options: [
        'Een verbinding met messing schroeven',
        'Eén zijde heeft een messing, de andere een groef',
        'Een metaalbeslag aan twee houten delen',
        'Een verbinding met houten deuvels',
      ],
      correctIndex: 1,
      explanation:
        'Messing-en-groef (ook tand-en-groef of g.g.-delen): één rand heeft een uitstekend tongetje, de andere een groef die er net overheen past. Bij elkaar klikken levert vlakke, kierloze vloeren en wanden zonder zichtbare bevestiging.',
    },
    {
      id: 'B9-5-b',
      toetstermCode: 'B.9.5',
      type: 'mc',
      prompt:
        'Een **vingerlas** wordt vooral toegepast om:',
      options: [
        'Twee plankuiteinden onder rechte hoek aan elkaar te verbinden',
        'Hout verlengen met in elkaar grijpende vingers',
        'Een verticale stijl in een horizontale regel te verankeren',
        'Twee planken in een hoek van 45° aan elkaar te lijmen',
      ],
      correctIndex: 1,
      explanation:
        'Vingerlas = driehoekige passende "vingers" in beide uiteinden van twee planken/balken. Verlengt hout in de lengterichting. Door het grote lijmoppervlak is een vingerlas even sterk of sterker dan het massieve hout. Ook standaard verbinding tussen lamellen in gelamineerd hout.',
    },
    {
      id: 'B9-5-c',
      toetstermCode: 'B.9.5',
      type: 'mc',
      prompt:
        'Een **zwaluwstaartverbinding** onderscheidt zich doordat:',
      options: [
        'Twee houten plankjes met messing en groef in elkaar grijpen',
        'De pen heeft een zwaluwstaartvorm',
        'Twee plankuiteinden onder een halve dikte overlappen',
        'Vier houten deuvels op één lijn worden gezet',
      ],
      correctIndex: 1,
      explanation:
        'De zwaluwstaartverbinding heeft een trapeziumvormige pen die in een passende uitsparing schuift. Wanneer ingeschoven, kan de verbinding alleen via de schuifrichting terug — in alle andere richtingen is hij trekvast. Klassiek voor laden in kasten en uitlopen van constructies.',
    },
    {
      id: 'B9-5-d',
      toetstermCode: 'B.9.5',
      type: 'mc',
      prompt:
        'Wat is een **deuvelverbinding**?',
      options: [
        'Twee balken zijn halverwege uitgekapt en kruisen elkaar',
        'Twee delen verbonden met houten deuvels',
        'Een metaalbeslag dat tussen twee planken wordt geklemd',
        'Een spijker met spiraalprofiel die zichzelf vastdraait',
      ],
      correctIndex: 1,
      explanation:
        'Bij een deuvelverbinding worden in beide te verbinden delen gaten geboord; daartussen worden korte ronde houten staafjes (deuvels) ingebracht, met of zonder lijm. Industrieel veel gebruikt voor kozijnen, meubels en mass-produced timmerwerk.',
    },

    // === B.9.6 — Gelamineerd hout + CLT (3) ===
    {
      id: 'B9-6-a',
      toetstermCode: 'B.9.6',
      type: 'mc',
      prompt: 'Wat is **gelamineerd hout (Glulam)**?',
      options: [
        'Massief hardhout uit één boom, gestoomd en geperst',
        'Lamellen in dezelfde richting verlijmd tot balk/kolom',
        'Dunne fineerlagen kruislings op elkaar verlijmd tot een plaat',
        'Een composiet van hout en staalstrippen',
      ],
      correctIndex: 1,
      explanation:
        'Gelamineerd hout (Glulam) bestaat uit lamellen die in dezelfde lengte-richting met hoogwaardige lijm op elkaar zijn verlijmd. Mogelijk in zeer grote lengtes (>40 m) en in gebogen vormen, die in massief hout niet bestaan. Toepassing: dakspanten in hallen, kerken, sportcomplexen.',
    },
    {
      id: 'B9-6-b',
      toetstermCode: 'B.9.6',
      type: 'mc',
      prompt: 'Wat onderscheidt **Cross Laminated Timber (CLT)** van Glulam?',
      options: [
        'CLT is van hardhout, Glulam van zachthout',
        'CLT verlijmt lagen kruislings → vlakelementen; Glulam → balken',
        'CLT is vingerlas-gebaseerd, Glulam is dubbel verlijmd',
        'CLT wordt onder druk gevormd, Glulam onder vacuüm',
      ],
      correctIndex: 1,
      explanation:
        'Bij CLT worden 3, 5 of 7 lagen plankjes om en om 90° gedraaid op elkaar verlijmd — net als heel dik triplex, maar dan van massief hout. Dat levert een tweezijdig dragende plaat → wand- en vloerelementen. Glulam heeft lamellen in één richting → balk-/kolomelementen.',
    },
    {
      id: 'B9-6-c',
      toetstermCode: 'B.9.6',
      type: 'mc',
      prompt: 'Een voordeel van CLT bij hoogbouw is:',
      options: [
        'Hogere druksterkte dan beton in alle richtingen',
        'Ongeveer 5× lichter dan een betonwand',
        'Goedkoper dan gewoon hout',
        'Geen brandwerende maatregelen nodig',
      ],
      correctIndex: 1,
      explanation:
        'CLT-elementen zijn massief maar veel lichter dan beton — dat geeft besparing op funderingskosten en snelle prefab-montage. CLT vraagt wel brandwerende detaillering, hoewel de "verkoolde buitenlaag bij brand" de binnenkern lang beschermt.',
    },

    // === B.9.7 — Verduurzaming (3) ===
    {
      id: 'B9-7-a',
      toetstermCode: 'B.9.7',
      type: 'mc',
      prompt: 'Wat is **Accoya hout**?',
      options: [
        'Hardhout uit Brazilië met natuurlijke FSC-certificering',
        'Geacetyleerd zachthout',
        'Met creosootolie geïmpregneerd grenen',
        'Een handelsmerk voor gelamineerd hout uit eikenlamellen',
      ],
      correctIndex: 1,
      explanation:
        'Accoya is zachthout (vuren, grenen, radiata pine) dat is "geacetyleerd" — de OH-groepen in cellulose zijn vervangen door acetylgroepen. Het hout neemt nauwelijks vocht op → dzhk I (>25 jaar) en zeer dimensionaal stabiel. Geen gif, natuurlijke kleur behouden — populair voor moderne kozijnen.',
    },
    {
      id: 'B9-7-b',
      toetstermCode: 'B.9.7',
      type: 'mc',
      prompt: 'Wat is de **klassieke verduurzamingsmethode** bij druk-/vacuumprocédé in een autoclaaf?',
      options: [
        'Onder vacuüm en druk conserveringsmiddel in de cellen persen',
        'Hout in een grote pers gedurende 24 uur platdrukken',
        'Hout enkele weken in stromend zoet water onderdompelen',
        'Hout met UV-licht bestralen tot de cellen kraken',
      ],
      correctIndex: 0,
      explanation:
        'De vacuüm-druk-methode: hout in autoclaaf, eerst vacuüm zodat lucht uit cellen wordt gezogen, daarna onder druk een conserveringsmiddel (vroeger CCA, nu zoutvrije alternatieven) in de cellen geperst. Het zout vormt onoplosbare verbindingen met het hout — meerdere dzhk-klassen verbetering.',
    },
    {
      id: 'B9-7-c',
      toetstermCode: 'B.9.7',
      type: 'mc',
      prompt:
        'Welke moderne **Nederlandse uitvinding** verduurzaamt hout door het onder stoom onder druk te zetten?',
      options: [
        'Stellacwood',
        'Accoya',
        'Platowood',
        'Linn Wood',
      ],
      correctIndex: 2,
      explanation:
        'Platowood is een Nederlandse vinding waarbij hout eerst onder stoom onder druk wordt gezet en daarna wordt gedroogd. Verhoogt duurzaamheid en dimensionale stabiliteit zonder chemische gifstoffen.',
    },
  ],

  terms: [
    {
      term: 'Naaldhout',
      definition:
        'Hout van naaldbomen (vuren, grenen, ceder) — snelgroeiend, lichte structuur, gangbaar voor constructie en HSB.',
    },
    {
      term: 'Loofhout',
      definition:
        'Hout van loofbomen (eik, beuk, meranti) — dichter en sterker; gebruikt voor kozijnen, vloeren en zwaar constructiewerk.',
    },
    {
      term: 'Vurenhout',
      definition:
        'Lichtkleurig naaldhout (Picea), zacht, gemakkelijk te bewerken; meest gebruikte constructiehout in NL.',
    },
    {
      term: 'Eikenhout',
      definition:
        'Hard, duurzaam loofhout met karakteristieke nerf; gebruikt voor monumentale kozijnen, vloeren en bindwerken.',
    },
    {
      term: 'Meranti',
      definition:
        'Roodbruin tropisch hardhout uit Zuidoost-Azië; populair voor kozijnen — let op FSC-keurmerk.',
    },
    {
      term: 'Spinthout',
      definition:
        'Buitenste, jongere houtdeel met levende cellen; zachter, minder duurzaam dan kernhout.',
    },
    {
      term: 'Kernhout',
      definition:
        'Binnenste, oudere houtdeel; rijker aan kernstoffen, duurzamer en harder dan spinthout.',
    },
    {
      term: 'Houtvocht',
      definition:
        'Vochtgehalte van hout in % van het droge gewicht; voor binnentoepassing 8-12%, voor buiten 15-18%.',
    },
    {
      term: 'Krimp en zwel',
      definition:
        'Houtmaat verandert met vocht: krimpt bij drogen, zwelt bij vocht — sterkst in tangentiale richting.',
    },
    {
      term: 'Duurzaamheids­klasse',
      definition:
        'EN 350-classificatie 1-5 voor weerstand tegen schimmel- en insectenaantasting (1 = zeer duurzaam, 5 = niet duurzaam).',
    },
    {
      term: 'Plaatmateriaal',
      definition:
        'Triplex, OSB, MDF, spaanplaat — uit hout vervaardigd in lagen of geperste vezels; verschillende toepassingen.',
    },
    {
      term: 'Multiplex / triplex',
      definition:
        'Plaatmateriaal van gelijmde dunne fineerlagen kruislings op elkaar; sterk en maatvast.',
    },
    {
      term: 'OSB',
      definition:
        'Oriented Strand Board — geperste houtsnippers in oriëntatie­lagen; veel gebruikt in HSB voor beplating.',
    },
    {
      term: 'Houtskeletbouw (HSB)',
      definition:
        'Bouwwijze met prefab houten elementen (stijl- en regelwerk) met isolatie ertussen — licht, snel, goed te isoleren.',
    },
    {
      term: 'FSC / PEFC',
      definition:
        'Keurmerken voor duurzaam bosbeheer; bij voorkeur gebruikt voor tropisch hardhout.',
    },
  ],

  games: [
    {
      id: 'B9-gapfill-1', type: 'gapfill',
      title: 'Hout: gebreken en werking',
      text:
        'Hout krimpt vooral in {{tangentiale}} richting (langs groeiringen), nauwelijks in lengterichting. ' +
        '{{Rift}} (kwartier) gezaagd hout krimpt minder en trekt niet krom. ' +
        'De berucht­ste schimmel die door metselwerk groeit is {{huiszwam}}. ' +
        'Voor moderne kozijnen wordt vaak gemodificeerd hout zoals {{Accoya}} gebruikt — dzhk I.',
      distractors: ['axiale', 'dosse', 'kelderzwam', 'merbau'],
    },
    {
      id: 'B9-sort-1', type: 'sort',
      title: 'Sorteer houtsoorten',
      categories: ['Naaldhout (zacht)', 'Loofhout (hard)'],
      items: [
        { label: 'Vuren', category: 'Naaldhout (zacht)' },
        { label: 'Grenen', category: 'Naaldhout (zacht)' },
        { label: 'Douglas', category: 'Naaldhout (zacht)' },
        { label: 'Western red cedar (WRC)', category: 'Naaldhout (zacht)' },
        { label: 'Eiken', category: 'Loofhout (hard)' },
        { label: 'Beuken', category: 'Loofhout (hard)' },
        { label: 'Meranti', category: 'Loofhout (hard)' },
        { label: 'Teak', category: 'Loofhout (hard)' },
        { label: 'Azobé', category: 'Loofhout (hard)' },
      ],
    },
    {
      id: 'B9-matching-1', type: 'matching',
      title: 'Plaatmateriaal aan kenmerk',
      pairs: [
        { left: 'Triplex', right: '3 lagen fineer onder rechte hoek verlijmd' },
        { left: 'Multiplex', right: 'Meer (oneven) fineerlagen — sterker dan triplex' },
        { left: 'OSB', right: 'Grote spaanderschijven — vloer-/dakbeschot HSB' },
        { left: 'MDF', right: 'Fijne vezels — meubels, plinten, deuren' },
        { left: 'Betonplex', right: 'Multiplex met fenolhars-film — voor bekisting zichtbeton' },
        { left: 'Glulam', right: 'Gelamineerd hout — balken in dezelfde richting' },
        { left: 'CLT', right: 'Cross-Laminated Timber — kruislaag, voor wanden/vloeren' },
      ],
    },
  ],
}
