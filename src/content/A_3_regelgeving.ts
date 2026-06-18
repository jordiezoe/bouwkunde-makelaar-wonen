import type { Topic } from '../types/content'

export const A_3_regelgeving: Topic = {
  code: 'A.3',
  section: 'A',
  title: 'Regelgeving: Bbl en Omgevingswet',
  chapterRef: 'Besluit bouwwerken leefomgeving + Omgevingswet 2024',
  blurb:
    'Het Besluit bouwwerken leefomgeving (Bbl), de Omgevingswet, het omgevingsplan, de Wkb met de "knip" en gevolgklassen, milieurichtlijnen voor asbest en bodem, NEN 2580 / BBMI oppervlaktemeting, en welke bouwactiviteiten vergunnings-, meldings- of vergunningsvrij zijn.',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · Het Besluit bouwwerken leefomgeving (Bbl)',
      toetstermCodes: ['A.3.1'],
      body: `
Sinds 1 januari 2024 geldt het **Besluit bouwwerken leefomgeving (Bbl)** als opvolger van het Bouwbesluit 2012. Het Bbl is een Algemene Maatregel van Bestuur (AMvB) onder de **Omgevingswet** en bevat de bouwtechnische voorschriften waaraan elk bouwwerk in Nederland moet voldoen.

**Hoofdonderwerpen van het Bbl**:

- **Veiligheid** — constructieve veiligheid, brandveiligheid, gebruiksveiligheid, sociale veiligheid (sloten, inbraak)
- **Gezondheid** — daglichttoetreding, ventilatie, geluid, drinkwater, riolering
- **Bruikbaarheid** — afmetingen verblijfsruimten, doorgang- en plafondhoogte, toegankelijkheid
- **Energiezuinigheid en milieu** — Rc-waarden, BENG, materiaalprestatie (MPG)
- **Bouwbesluitfuncties** — eisen per gebruiksdoel

**Gebruiksfuncties** verdelen alle bouwwerken in categorieën met elk hun eigen eisen:

- **Woonfunctie** — woningen, woongebouwen
- **Bijeenkomstfunctie** — kerken, restaurants, theaters
- **Celfunctie** — gevangenissen
- **Gezondheidszorgfunctie** — ziekenhuizen, verzorgingshuizen
- **Industriefunctie** — fabrieken, werkplaatsen
- **Kantoorfunctie** — kantoorgebouwen
- **Logiesfunctie** — hotels, vakantiehuizen
- **Onderwijsfunctie** — scholen
- **Sportfunctie** — sporthallen
- **Winkelfunctie** — winkels
- **Overige gebruiksfunctie** — bv. garages, opslagloodsen

Voor elke gebruiksfunctie gelden specifieke eisen: een ziekenhuis heeft strengere brandeisen dan een woning, een sporthal strengere geluidseisen dan een kantoor.
      `.trim(),
    },

    {
      heading: '2 · Eisen verblijfsruimten, trap en toegankelijkheid',
      toetstermCodes: ['A.3.1'],
      body: `
**Verblijfsruimten** (woon-, slaap-, werkkamers) zijn de ruimten waar mensen langer dan een half uur per dag verblijven. Het Bbl stelt daar minimumeisen aan:

- **Plafondhoogte / vrije hoogte**: minimaal **2,60 m** in nieuwbouwwoningen; bij bestaande bouw 2,10 m. Onder schuine dakvlakken telt alleen het gebied met ≥ 1,50 m hoogte mee.
- **Vrije doorgangshoogte** (deuropeningen, gangen): minimaal **2,30 m** bij nieuwbouw.
- **Vrije doorgangsbreedte** binnendeur: minimaal **0,85 m** vrije breedte.
- **Daglichttoetreding**: minimaal 0,5 m² (woonkamer ≥ 10% van vloeroppervlak — globale richtlijn, exacte eis in Bbl-tabellen).
- **Ventilatie**: ≥ 0,9 dm³/s per m² voor verblijfsgebieden (afhankelijk van bestemming).

**Eisen aan een trap** in woningen (nieuwbouw):

- **Aantrede** (horizontale tred): minimaal **22 cm** gemeten over de looplijn
- **Optrede** (verticaal hoogteverschil): maximaal **18,8 cm**
- **Vrije trapbreedte**: minimaal **80 cm**
- **Vrije hoogte boven trap**: minimaal **2,30 m**
- **Leuning**: aan minstens één zijde, op een hoogte van 80–100 cm

**Toegankelijkheidseisen**:

- Bij openbare gebouwen en (delen van) woongebouwen: **drempelloos** (≤ 20 mm), rolstoeltoegankelijk
- Bij utiliteit ≥ bepaalde grootte: integraal toegankelijke route + sanitair
- Liftverplichting bij woongebouwen > 12,5 m vloer hoogste verblijfsgebied
- Brandweerlift bij gebouwen > 20 m
      `.trim(),
    },

    {
      heading: '3 · De Omgevingswet en het omgevingsplan',
      toetstermCodes: ['A.3.2', 'A.3.3'],
      body: `
De **Omgevingswet** is sinds 1 januari 2024 dé wet voor de fysieke leefomgeving en vervangt 26 oude wetten (Wet ruimtelijke ordening, Wabo, Wet milieubeheer, delen van de Waterwet, Crisis- en herstelwet, en meer). Het doel: één samenhangend stelsel voor alles wat de leefomgeving aangaat.

Onder de Omgevingswet vallen vier AMvB's:

- **Besluit bouwwerken leefomgeving (Bbl)** — bouwtechnische eisen
- **Besluit activiteiten leefomgeving (Bal)** — eisen aan milieu-belastende activiteiten
- **Besluit kwaliteit leefomgeving (Bkl)** — kwaliteitsdoelen voor lucht, geluid, water
- **Omgevingsbesluit** — procedures en bevoegdheden

**Het omgevingsplan** vervangt het **bestemmingsplan** plus tientallen gemeentelijke verordeningen. Elke gemeente heeft één omgevingsplan dat regelt:

- Wat waar mag (bestemming + functie)
- Bouw- en gebruiksregels
- Milieu, geluid, water, natuur, cultureel erfgoed
- Welstand en redelijke eisen

Gemeenten hebben tot **2032** om hun oude bestemmingsplannen om te zetten naar één samenhangend omgevingsplan. In de overgangsperiode geldt voor regels die nog niet zijn omgezet de zogenaamde **bruidsschat** (zie sectie 6) — rijksregels die tijdelijk in het omgevingsplan staan.

Voor de makelaar: altijd het **omgevingsplan** raadplegen (via [omgevingswet.overheid.nl](https://omgevingswet.overheid.nl)) voor de actuele bouw- en gebruiksregels op een perceel.
      `.trim(),
    },

    {
      heading: '4 · Milieurichtlijnen: asbest en bodem',
      toetstermCodes: ['A.3.2', 'A.3.3'],
      body: `
Twee onderwerpen die direct met de bouw te maken hebben en in de Omgevingswet/Bal zijn geregeld:

**Asbest**

- **Sinds 1994** is gebruik en productie van asbest verboden in Nederland; vóór die datum gebruikt in golfplaten, vlakke gevelplaten, riolering (gres + asbest), vensterbanken, vinyl-tegellijm, en talloze andere producten.
- Bij **sloop of verbouwing** van een bouwwerk gebouwd vóór 1994 is een **asbestinventarisatie** door een gecertificeerd bedrijf verplicht (SC-540).
- Bij asbest aanwezig → **sanering** uitsluitend door een SC-530-gecertificeerd asbestsaneringsbedrijf, met sloopmelding bij de gemeente.
- **Vrijgegeven categorieën**: hechtgebonden asbest in goede staat hoeft niet per se direct verwijderd te worden; bij beschadiging of bij ingrijpende verbouwing wel.

**Bodem**

- Vóór nieuwbouw of grondige verbouwing is een **bodemonderzoek** vaak verplicht — om vast te stellen of de grond geschikt is voor de geplande bestemming (wonen, kantoor, industrie kennen elk eigen normen).
- Bij **verontreinigde bodem**: saneringsverplichting volgens de **Wet bodembescherming** (overgenomen in de Omgevingswet).
- **Besluit bodemkwaliteit (Bbk)** regelt hergebruik van grond en bouwstoffen (klasse Achtergrond, Wonen, Industrie).
- Tankrisico's: **ondergrondse olietanks** vragen om certificaten (BOOT'98); niet meer in gebruik zijnde tanks verwijderen.
- Bij twijfel: bodemloket.nl en de gemeente raadplegen.

Voor de makelaar: bij oude panden en verdachte locaties (voormalige garages, fabrieken, stomerijen, benzinepompen) altijd nakijken of er een bodem- of asbestrisico is. Onverwachte sanering kan duur uitvallen.
      `.trim(),
    },

    {
      heading: '5 · NEN 2580 en BBMI — oppervlaktes meten',
      toetstermCodes: ['A.3.2', 'A.3.3'],
      body: `
Bij elke transactie moet je weten hoe groot een woning is. Daarvoor gelden in Nederland twee belangrijke normen:

**NEN 2580** — *Oppervlakten en inhouden van gebouwen — Termen, definities en bepalingsmethoden*. Wetenschappelijke meetnorm sinds 1990, vooral gebruikt in nieuwbouw en utiliteit. Onderscheidt o.a.:

- **GBO (gebruiksoppervlakte)** — de feitelijk te gebruiken oppervlakte per ruimte, gemeten op vloerhoogte tussen de wanden, minus schoorsteenkanalen, leidingschachten en wanden zelf. Dit is *de* maat die wordt vermeld in advertenties en bij makelaars.
- **BVO (bruto vloeroppervlakte)** — oppervlakte gemeten aan de buitenzijde van de scheidingsconstructies (dus inclusief de muren).
- **NVO (netto vloeroppervlakte)** — BVO minus constructieoppervlakte (binnenwerks).
- **VVO (verhuurbaar vloeroppervlak)** — voor commercieel vastgoed; oppervlakte exclusief technische ruimten en verticale verkeersruimten.

**BBMI** — *Branchebrede Brede Meetinstructie* (gemaakt door NVM, VBO, VastgoedPRO en Vereniging Eigen Huis, geactualiseerd 2024). Geeft praktische afspraken voor het meten van **bestaande woningen** door makelaars, met als doel onderlinge vergelijkbaarheid.

Belangrijkste punten BBMI:

- **Gebruiksoppervlakte wonen** wordt opgegeven (conform NEN 2580).
- **Plafondhoogte ≥ 1,50 m** telt mee als wonen — gebied onder schuine kappen waar het lager is, telt niet mee.
- **Onverwarmde ruimten** (garage, schuur) krijgen een aparte categorie *"overige inpandige ruimte"*.
- **Gebouwgebonden buitenruimten** (balkon, dakterras) worden apart opgegeven.
- **Externe bergingen** (vrijstaande schuur) worden apart vermeld.

Een woning met "112 m² woonoppervlak" volgens BBMI heeft die maat exclusief muren én exclusief de garage of vrijstaande schuur. Dat is hét getal waar kopers naar kijken.
      `.trim(),
    },

    {
      heading: '6 · Wkb, de "knip" en gevolgklassen',
      toetstermCodes: ['A.3.4'],
      body: `
Tegelijk met de Omgevingswet ging op 1 januari 2024 ook de **Wet kwaliteitsborging voor het bouwen (Wkb)** van start. Doel: betere bouwkwaliteit en duidelijker aansprakelijkheid van de aannemer.

**De "knip" in het bouwtoezicht** — het meest opvallende verschil met vroeger:

- **Vóór 2024**: de gemeente toetste zowel de **omgevingsaspecten** (past het bouwwerk in het bestemmingsplan?) als de **bouwtechnische aspecten** (voldoet het aan het Bouwbesluit?).
- **Vanaf 2024**: de gemeente toetst alléén de omgevingsaspecten. De bouwtechnische toets is overgegaan naar een **onafhankelijke kwaliteitsborger**, ingehuurd door de opdrachtgever, die bij oplevering een verklaring afgeeft.

**Risicoklasse** — een verzamelnaam voor de risicocategorisering die bepaalt hoe streng het toezicht is. In de Wkb gebruikt men daarvoor de **gevolgklasse** (CC = Consequence Class), afkomstig uit de Europese constructienormen:

- **Gevolgklasse 1 (CC1)** — laag risico bij falen. Grondgebonden woningen, kleine bedrijfsgebouwen. **De Wkb geldt sinds 1-1-2024 voor deze klasse.**
- **Gevolgklasse 2 (CC2)** — middelhoog risico. Appartementen, scholen, kantoren tot bepaalde grootte. Wkb wordt later ingevoerd (vermoedelijk gefaseerd 2025–2028).
- **Gevolgklasse 3 (CC3)** — hoog risico bij falen. Ziekenhuizen, grote hoogbouw, gebouwen voor grote groepen. Blijft (voorlopig) bij de gemeente.

**De kwaliteitsborger**: een onafhankelijke deskundige (geen werknemer van de aannemer) die toetst of het bouwwerk technisch voldoet. Werkt volgens een **toegelaten instrument** (KOMO Wkb, KiK Wkb, etc.). Geeft bij oplevering een **verklaring** af; zonder die verklaring mag het gebouw niet in gebruik genomen worden.

**Bruidsschat**: tijdelijke set rijksregels die per 1-1-2024 automatisch in elk gemeentelijk omgevingsplan zijn opgenomen. Reden: de gemeenten hebben tot 2032 om hun eigen omgevingsplan te maken; de bruidsschat overbrugt die periode met landelijke regels.

Aanvullend: **aannemer wordt aansprakelijk voor verborgen gebreken** — ook ná oplevering kan de koper de aannemer aanspreken voor gebreken die later aan het licht komen, mits niet bij oplevering bekend.
      `.trim(),
      diagrams: [{ type: 'wkbKnip' }, { type: 'gevolgklasse' }],
    },

    {
      heading: '7 · Vergunningsplicht, meldings- en vergunningsvrije bouwactiviteiten',
      toetstermCodes: ['A.3.5'],
      body: `
Niet voor elke bouwactiviteit heb je een omgevingsvergunning nodig. Er zijn drie categorieën:

**Vergunningsvrij** — mag je gewoon doen, zonder vergunning of melding, mits binnen voorwaarden:

- **Dakkapel** aan de achterkant, mits afmetingen passen (max. 1,75 m hoog, ≥ 0,5 m afstand tot dakvoet, etc.)
- **Aanbouw aan achterkant** binnen 4 m diep, 1 bouwlaag, mits achtererfgebied
- **Bijgebouw / schuur** in achtererfgebied tot bepaalde oppervlakte
- **Schutting** tot 1 m hoogte aan de voorkant, 2 m aan de achter- en zijkant
- **Zonnepanelen** op het dak, tenzij op monumenten/beschermd stadsgezicht
- **Erfafscheiding** binnen voorwaarden
- **Onderhoud en gewoon onderhoud** waarbij detaillering niet wijzigt

Voorwaarden staan in **Bbl Hoofdstuk 2** en het **gemeentelijke omgevingsplan**. Beide moet je checken — een vergunningsvrije bouwactiviteit kan alsnog niet passen binnen het lokale plan.

**Meldingsplichtig** (sinds Wkb, voor gevolgklasse 1):

- **Bouwmelding** vier weken vóór start bij de gemeente
- **Gereedmelding** met dossier én verklaring kwaliteitsborger bij oplevering
- Vooral voor bouwwerken die "kleine" wijzigingen zijn maar wel onder de Wkb vallen

**Vergunningsplichtig** — vereist een **omgevingsvergunning bouwactiviteit** plus eventueel omgevingsplanactiviteit:

- **Nieuwbouw** van een hoofdgebouw
- **Uitbreiding** of dakkapel die de vergunningsvrije voorwaarden overschrijdt
- **Aanpassing constructie** zoals draagmuur weghalen (boven bepaalde grens)
- Bouwwerk op of bij een **monument** of in beschermd stadsgezicht
- Wijziging gebruiksfunctie (winkel → woning, schuur → bedrijfsruimte)

**Splitsing van vergunningen** onder de Omgevingswet:

- **Omgevingsvergunning bouwactiviteit** — technische toets (vaak vervangen door Wkb-melding bij CC1)
- **Omgevingsvergunning omgevingsplanactiviteit** — past het bouwwerk in het lokale omgevingsplan?

Soms heb je beide nodig, soms één, soms geen.
      `.trim(),
    },

    {
      heading: '8 · Trends en ontwikkelingen',
      toetstermCodes: ['A.3.6'],
      body: `
De bouw verandert snel. Belangrijke trends die bouw- en regelgeving raken (zie ook TNO Innovation for Life voor onderzoek en innovaties):

**Circulair bouwen** — gebouwen ontworpen om later gedemonteerd en hergebruikt te kunnen worden. Belangrijke instrumenten:

- **Materialenpaspoort** — register van alle gebruikte materialen, hoeveelheden en plaats in het gebouw
- **Madaster** — Nederlandse online registratie voor materiaalpaspoorten
- Doel Rijksoverheid: **Nederland 100% circulair in 2050**

**Bio-based materialen** — bouwen met snel hernieuwbare grondstoffen:

- **CLT (Cross-Laminated Timber)** — gelamineerd hout voor dragende constructies
- **Hennep- en vlasvezels** — als isolatie en in composieten
- **Stro** — als isolatiemateriaal (strobalenbouw)
- **Mycelium** — schimmel-gebaseerde panelen (experimenteel)

**Energietransitie**:

- Verplichte **BENG-eisen** voor nieuwbouw sinds 2021 — bijna energieneutraal
- **Warmtepompen** vervangen gasketels; veel gemeenten kennen warmtenetten of all-electric wijken
- **Verbod op nieuwe gasaansluitingen** in nieuwbouw sinds 2018
- Bij grondige renovatie: streefcijfer Rc ≥ 4,7 (muren), 6,3 (dak)
- **Energielabel C** verplicht voor kantoren ≥ 100 m² sinds 1-1-2023

**Industrialisatie en prefab**:

- Conceptwoningen die op de bouwplaats in dagen worden gemonteerd
- Modulaire houtbouw — hele appartementen in fabriekshallen geproduceerd
- **3D-betonprinten** van funderingen en wanden

**Klimaatadaptatie**:

- Groendaken en waterbergende constructies tegen hittestress en regen
- Vergunningsvrije plaatsing van zonnepanelen vereenvoudigd
- Aandacht voor verkoeling: lichte gevelkleuren, zonwering, slimme ventilatie

Deze trends zijn relevant voor de markt: een woning met een laag energielabel, geen warmtepomp en geen circulaire materialen wordt sneller "minder courant" — terwijl een conceptueel duurzame nieuwbouw juist meer waard wordt.
      `.trim(),
    },
  ],

  toetstermen: [
    {
      code: 'A.3.1',
      text: 'Benoemt de hoofdonderwerpen van het Besluit bouwwerken leefomgeving (Bbl) (gebouwfuncties, gebruiksfunctie, eisen verblijfsruimten, plafond- en vrije doorgangshoogte, toegankelijkheid en eisen trap).',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'A.3.2',
      text: 'Benoemt de begrippen omgevingsplan, richtlijnen milieu (asbest en bodem) en NEN 2580 en BBMI (oppervlaktemeting).',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'A.3.3',
      text: 'Licht de begrippen omgevingsplan, richtlijnen milieu (asbest en bodem) en NEN 2580 en BBMI (oppervlaktemeting) toe.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
    {
      code: 'A.3.4',
      text: 'Licht de begrippen "knip", kwaliteitsborging, risicoklasse, gevolgklasse, kwaliteitsborger en bruidsschat die in de Omgevingswet worden omschreven toe.',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
    {
      code: 'A.3.5',
      text: 'Benoemt voor welke bouwactiviteiten een vergunnings- of bouwplicht geldt en welke activiteiten meldings- en vergunningsvrij uitgevoerd mogen worden.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
    {
      code: 'A.3.6',
      text: 'Benoemt algemene trends en ontwikkelingen op het gebied van constructies en materiaalgebruik, zoals onderzocht bij TNO Innovation for Life.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
  ],

  questions: [
    // A.3.1 — Bbl hoofdonderwerpen (BT1, Kennis)
    {
      id: 'A.3.q1',
      toetstermCode: 'A.3.1',
      type: 'mc',
      prompt: 'Wat is het Bbl?',
      options: [
        'Besluit bouwlandschap leefomgeving',
        'Besluit bouwwerken leefomgeving',
        'Beleidsbesluit bouwen langs lokale wegen',
        'Een verzekeringsregeling voor de bouw',
      ],
      correctIndex: 1,
      explanation:
        'Bbl = Besluit bouwwerken leefomgeving, sinds 1-1-2024 de opvolger van het Bouwbesluit 2012. Een AMvB onder de Omgevingswet die de bouwtechnische eisen bevat.',
    },
    {
      id: 'A.3.q2',
      toetstermCode: 'A.3.1',
      type: 'multi',
      prompt: 'Welke thema\'s regelt het Bbl? Selecteer alle juiste.',
      options: [
        'Veiligheid',
        'Gezondheid',
        'Bruikbaarheid',
        'Energiezuinigheid/milieu',
        'Welstand',
        'Parkeren',
      ],
      correctIndices: [0, 1, 2, 3],
      explanation:
        'Het Bbl is opgebouwd rond vier hoofdthema\'s: veiligheid (constructief, brand, gebruik), gezondheid (daglicht, ventilatie, geluid, water), bruikbaarheid (afmetingen, toegankelijkheid) en energiezuinigheid/milieu. Welstand en parkeren staan juist in het omgevingsplan, niet in het Bbl.',
    },
    {
      id: 'A.3.q3',
      toetstermCode: 'A.3.1',
      type: 'mc',
      prompt:
        'Wat is de minimum vrije plafondhoogte in een verblijfsruimte van een nieuwbouwwoning volgens het Bbl?',
      options: ['2,10 m', '2,30 m', '2,60 m', '2,80 m'],
      correctIndex: 2,
      explanation:
        '2,60 m is de minimum vrije hoogte in nieuwbouwwoningen. In bestaande bouw is 2,10 m de ondergrens; 2,30 m is de minimum vrije doorgangshoogte (deuropeningen, gangen).',
    },
    {
      id: 'A.3.q4',
      toetstermCode: 'A.3.1',
      type: 'mc',
      prompt:
        'Wat is volgens het Bbl de minimum aantrede en maximum optrede van een trap in een woning?',
      options: [
        'Aantrede ≥ 18 cm, optrede ≤ 22 cm',
        'Aantrede ≥ 22 cm, optrede ≤ 18,8 cm',
        'Aantrede ≥ 25 cm, optrede ≤ 16 cm',
        'Aantrede ≥ 20 cm, optrede ≤ 20 cm',
      ],
      correctIndex: 1,
      explanation:
        'Aantrede (horizontaal) minimaal 22 cm; optrede (verticaal) maximaal 18,8 cm. Vrije trapbreedte ≥ 80 cm en vrije hoogte boven de trap ≥ 2,30 m.',
    },
    {
      id: 'A.3.q5',
      toetstermCode: 'A.3.1',
      type: 'mc',
      prompt:
        'Vanaf welke vloerhoogte van het hoogste verblijfsgebied is een lift in een woongebouw verplicht volgens het Bbl?',
      options: ['Vanaf 7,5 m', 'Vanaf 12,5 m', 'Vanaf 20 m', 'Vanaf 70 m'],
      correctIndex: 1,
      explanation:
        'Liftverplichting bij woongebouwen geldt vanaf 12,5 m vloerhoogte van het hoogste verblijfsgebied. Bij 20 m is er ook een brandweerlift vereist.',
    },

    // A.3.2 + A.3.3 — Omgevingsplan, asbest/bodem, NEN 2580, BBMI (BT1+BT2, Kennis)
    {
      id: 'A.3.q6',
      toetstermCode: 'A.3.2',
      type: 'mc',
      prompt: 'Wat vervangt het omgevingsplan in de Omgevingswet?',
      options: [
        'De welstandsnota.',
        'Het bestemmingsplan plus tientallen gemeentelijke verordeningen.',
        'De Algemene Plaatselijke Verordening (APV).',
        'De provinciale verordening.',
      ],
      correctIndex: 1,
      explanation:
        'Het omgevingsplan vervangt het oude bestemmingsplan plus een hele reeks gemeentelijke regels (welstand, milieu, etc.) onder één samenhangend plan per gemeente.',
    },
    {
      id: 'A.3.q7',
      toetstermCode: 'A.3.3',
      type: 'mc',
      prompt:
        'Tot welk jaar hebben gemeenten de tijd om hun bestemmingsplannen om te zetten naar één samenhangend omgevingsplan?',
      options: ['2025', '2028', '2032', '2040'],
      correctIndex: 2,
      explanation:
        'De omzettingsperiode loopt tot 2032. Tot die tijd geldt voor onbehandelde regels de "bruidsschat" — rijksregels die tijdelijk in het omgevingsplan staan.',
    },
    {
      id: 'A.3.q8',
      toetstermCode: 'A.3.3',
      type: 'mc',
      prompt:
        'Een klant koopt een pand uit 1975 en wil verbouwen. Wat is qua asbest verplicht?',
      options: [
        'Niets — verbouwen kent geen asbestplicht',
        'Een asbestinventarisatie door een gecertificeerd bedrijf',
        'Een verklaring van de verkoper volstaat',
        'Een visuele inspectie door de aannemer volstaat',
      ],
      correctIndex: 1,
      explanation:
        'Voor panden gebouwd vóór 1994 is een SC-540-asbestinventarisatie verplicht vóór sloop of grondige verbouwing. Bij aantreffen volgt sanering door een SC-530-gecertificeerd bedrijf.',
    },
    {
      id: 'A.3.q9',
      toetstermCode: 'A.3.3',
      type: 'mc',
      prompt:
        'Wat is het verschil tussen GBO en BVO in de NEN 2580?',
      options: [
        'GBO is groter dan BVO, want de tuin telt mee',
        'GBO is exclusief muren, BVO inclusief',
        'GBO geldt voor woningen, BVO voor kantoren',
        'BVO is de inhoud in m³, GBO de oppervlakte',
      ],
      correctIndex: 1,
      explanation:
        'GBO = de feitelijk te gebruiken ruimte binnen de muren (wat je belangrijk vindt als bewoner/kantoorgebruiker). BVO is inclusief de muren — handig voor bouwkosten en verzekering.',
    },
    {
      id: 'A.3.q10',
      toetstermCode: 'A.3.3',
      type: 'mc',
      prompt: 'Wat is de BBMI en wie heeft hem opgesteld?',
      options: [
        'Bouwbesluit Brand- en Milieumelding Instrument',
        'Branchebrede Brede Meetinstructie van de makelaarsorganisaties',
        'Boven-Brabantse Meetinstructie, alleen in Brabant',
        'Bbl-Brand- en Materiaalindex voor isolatie',
      ],
      correctIndex: 1,
      explanation:
        'De BBMI is de Branchebrede Brede Meetinstructie van de gezamenlijke makelaarsorganisaties + VEH. Geeft praktische afspraken hoe je bestaande woningen meet (conform NEN 2580), zodat woningen onderling vergelijkbaar zijn.',
    },
    {
      id: 'A.3.q11',
      toetstermCode: 'A.3.3',
      type: 'mc',
      prompt:
        'Volgens de BBMI telt ruimte onder een schuin dak alleen mee als gebruiksoppervlakte als de plafondhoogte minimaal is:',
      options: ['1,00 m', '1,30 m', '1,50 m', '2,00 m'],
      correctIndex: 2,
      explanation:
        'Pas vanaf 1,50 m hoogte telt het oppervlak onder een schuin dak als woonoppervlak. Daaronder valt het bij "overige inpandige ruimte" of telt het helemaal niet mee.',
    },

    // A.3.4 — Knip, kwaliteitsborging, gevolgklassen, bruidsschat (BT2, Begrip)
    {
      id: 'A.3.q12',
      toetstermCode: 'A.3.4',
      type: 'mc',
      prompt: 'Wat houdt de "knip" in het bouwtoezicht in?',
      options: [
        'Een bouwvergunning opdelen in deelvergunningen',
        'Scheiding van omgevings- en bouwtechnische toetsing',
        'Het verbod op het slopen van monumenten',
        'Een bouwproject opknippen in twee fasen',
      ],
      correctIndex: 1,
      explanation:
        'De "knip" verwijst naar de splitsing tussen omgevingstoets (blijft bij gemeente) en bouwtechnische toets (gaat naar een onafhankelijke kwaliteitsborger). Ingevoerd met de Wkb per 1-1-2024.',
    },
    {
      id: 'A.3.q13',
      toetstermCode: 'A.3.4',
      type: 'mc',
      prompt:
        'Wie is sinds 1-1-2024 verantwoordelijk voor het bouwtechnische toezicht bij een nieuwbouw eengezinswoning (gevolgklasse 1)?',
      options: [
        'De aannemer zelf.',
        'De gemeente blijft het bouwtechnische toezicht doen.',
        'Een onafhankelijke kwaliteitsborger, ingehuurd door de opdrachtgever.',
        'De verzekeringsmaatschappij.',
      ],
      correctIndex: 2,
      explanation:
        'Bij gevolgklasse 1 (grondgebonden woningen, kleine bedrijfsgebouwen) toetst sinds 1-1-2024 een onafhankelijke kwaliteitsborger. De opdrachtgever moet die zelf inhuren.',
    },
    {
      id: 'A.3.q14',
      toetstermCode: 'A.3.4',
      type: 'mc',
      prompt:
        'In welke gevolgklasse valt een grondgebonden eengezinswoning?',
      options: [
        'Gevolgklasse 1 (CC1)',
        'Gevolgklasse 2 (CC2)',
        'Gevolgklasse 3 (CC3)',
        'Geen gevolgklasse — woningen vallen buiten de Wkb',
      ],
      correctIndex: 0,
      explanation:
        'CC1 omvat grondgebonden woningen en kleine bedrijfsgebouwen — laag risico bij falen. Daar is sinds 1-1-2024 de Wkb actief.',
    },
    {
      id: 'A.3.q15',
      toetstermCode: 'A.3.4',
      type: 'mc',
      prompt:
        'In welke gevolgklasse valt een ziekenhuis of hoogbouw met grote publieksfunctie?',
      options: ['CC1', 'CC2', 'CC3', 'Geen klasse — apart regime'],
      correctIndex: 2,
      explanation:
        'CC3 = hoog risico bij falen (gebouwen voor grote groepen, ziekenhuizen, hoogbouw). Daar geldt nog steeds de gemeentelijke toetsing — Wkb niet (voorlopig).',
    },
    {
      id: 'A.3.q16',
      toetstermCode: 'A.3.4',
      type: 'mc',
      prompt: 'Wat is de "bruidsschat" in de Omgevingswet?',
      options: [
        'Een subsidie voor gemeenten voor hun omgevingsplan',
        'Tijdelijke rijksregels in elk omgevingsplan tot 2032',
        'Een vergunningvrije zone rond een nieuwe woning',
        'Een gemeenteverzekering voor risicovolle bouw',
      ],
      correctIndex: 1,
      explanation:
        'De bruidsschat is een set rijksregels (uit oude wetten) die automatisch in het omgevingsplan staat tot de gemeente die "tot eigen plan maakt" of vervangt. Een overgangsoplossing voor 2024–2032.',
    },
    {
      id: 'A.3.q17',
      toetstermCode: 'A.3.4',
      type: 'mc',
      prompt:
        'Wat is een belangrijk gevolg van de Wkb voor de positie van de aannemer ten opzichte van de koper?',
      options: [
        'De aannemer levert alleen nog een prijs',
        'De aannemer is zwaarder aansprakelijk, ook ná oplevering',
        'De aannemer mag tot € 100.000 zonder vergunning bouwen',
        'De aannemer hoeft geen verzekering meer',
      ],
      correctIndex: 1,
      explanation:
        'De Wkb verschoof de aansprakelijkheidsverdeling: de aannemer is langer en breder aansprakelijk voor gebreken die later opduiken. Dat versterkt de positie van de koper.',
    },

    // A.3.5 — Vergunningsplicht (BT2, Kennis)
    {
      id: 'A.3.q18',
      toetstermCode: 'A.3.5',
      type: 'mc',
      prompt:
        'Is een dakkapel aan de achterkant van een rijwoning standaard vergunningsplichtig?',
      options: [
        'Altijd vergunningsplichtig',
        'Vergunningsvrij mits aan de voorwaarden voldaan',
        'Alleen meldingsplichtig, nooit vergunningsplichtig',
        'Alleen in beschermd stadsgezicht vergunningsplichtig',
      ],
      correctIndex: 1,
      explanation:
        'Een dakkapel aan de achterkant kan vergunningsvrij als aan de Bbl-voorwaarden wordt voldaan (max. 1,75 m hoog, ≥ 0,5 m van dakvoet, etc.). In beschermd stadsgezicht of bij monumenten gelden extra eisen.',
    },
    {
      id: 'A.3.q19',
      toetstermCode: 'A.3.5',
      type: 'mc',
      prompt:
        'Een klant wil de dragende muur tussen de woonkamer en de keuken weghalen. Wat is qua vergunning meest waarschijnlijk?',
      options: [
        'Vergunningsvrij — het is een interne wijziging',
        'Alleen een melding aan de gemeente',
        'Vergunningsplichtig, met constructeursberekening',
        'Alleen relevant als de gevel verandert',
      ],
      correctIndex: 2,
      explanation:
        'Een dragende muur weghalen tast de constructie aan: vergunningsplichtig, constructeursberekening verplicht, en bij CC1 ook een Wkb-bouwmelding 4 weken vooraf. Vergeet stalen latei (HEA/HEB) niet.',
    },
    {
      id: 'A.3.q20',
      toetstermCode: 'A.3.5',
      type: 'mc',
      prompt:
        'Wat is sinds de Wkb verplicht bij een gevolgklasse-1-bouwproject (bv. nieuwbouw rijwoning)?',
      options: [
        'Een omgevingsvergunning bouwactiviteit',
        'Een bouwmelding vooraf + gereedmelding bij oplevering',
        'Alleen een welstandsadvies',
        'Een grondonderzoek door het kadaster',
      ],
      correctIndex: 1,
      explanation:
        'Voor CC1 vervalt de bouwtechnische omgevingsvergunning; in plaats daarvan komt een bouwmelding + gereedmelding met verklaring kwaliteitsborger. De omgevingsplanactiviteit-vergunning kan los nog wel vereist zijn.',
    },
    {
      id: 'A.3.q21',
      toetstermCode: 'A.3.5',
      type: 'mc',
      prompt:
        'Een klant wil zonnepanelen op zijn rijwoning leggen. Wat is over het algemeen het juridische regime?',
      options: [
        'Altijd vergunningsplichtig vanwege gewicht en welstand.',
        'Doorgaans vergunningsvrij, behalve op monumenten of in beschermd stadsgezicht.',
        'Vergunningsvrij, behalve als de buurman bezwaar maakt.',
        'Alleen meldingsplichtig.',
      ],
      correctIndex: 1,
      explanation:
        'Zonnepanelen zijn op de meeste daken vergunningsvrij. Bij rijksmonumenten en beschermd stadsgezicht gelden extra eisen — daar is wél een omgevingsvergunning nodig.',
    },
    {
      id: 'A.3.q22',
      toetstermCode: 'A.3.5',
      type: 'mc',
      prompt:
        'Onder de Omgevingswet is de bouwvergunning gesplitst in twee delen. Welke twee?',
      options: [
        'Vergunning sloop en vergunning nieuwbouw',
        'Bouwactiviteit (technisch) en omgevingsplanactiviteit (ruimtelijk)',
        'Welstandsvergunning en milieuvergunning',
        'Vergunning binnenwerk en vergunning buitenwerk',
      ],
      correctIndex: 1,
      explanation:
        'Onder de Omgevingswet wordt onderscheid gemaakt tussen de bouwtechnische toets (bouwactiviteit) en de ruimtelijke/omgevingsplan-toets (omgevingsplanactiviteit). Soms heb je beide nodig, soms één van beide.',
    },
    {
      id: 'A.3.q23',
      toetstermCode: 'A.3.5',
      type: 'mc',
      prompt:
        'Een klant wil een vrijstaande schuur van 25 m² in zijn achtertuin (achtererfgebied) plaatsen. Wat is meestal het regime?',
      options: [
        'Altijd vergunningsplichtig',
        'Vergunningsvrij binnen de standaardvoorwaarden',
        'Vergunningsplichtig, alleen voor de welstand',
        'Alleen meldingsplichtig',
      ],
      correctIndex: 1,
      explanation:
        'Schuren in het achtererfgebied zijn binnen vrij ruime grenzen (totale oppervlakte aanbouwen+bijgebouwen, hoogte ≤ 3 m of ≤ 5 m bij kap) vergunningsvrij. Wél altijd het omgevingsplan controleren op aanvullende lokale regels.',
    },

    // A.3.6 — Trends en ontwikkelingen (BT2, Kennis)
    {
      id: 'A.3.q24',
      toetstermCode: 'A.3.6',
      type: 'mc',
      prompt: 'Wat is een "materialenpaspoort" in de context van circulair bouwen?',
      options: [
        'Een document voor de grensovergang van materialen',
        'Een register van materialen, hoeveelheden en plaats',
        'Een certificaat van de aannemer na oplevering',
        'Een keurmerk voor brandwerendheid',
      ],
      correctIndex: 1,
      explanation:
        'Een materialenpaspoort registreert alle materialen in een gebouw (hoeveelheid, plaats, eigenschappen) zodat ze bij sloop/renovatie hergebruikt kunnen worden. Madaster is het Nederlandse platform hiervoor.',
    },
    {
      id: 'A.3.q25',
      toetstermCode: 'A.3.6',
      type: 'mc',
      prompt: 'Wat is CLT in moderne houtbouw?',
      options: [
        'Composiet-Laminaat-Triplex (plaatmateriaal)',
        'Cross-Laminated Timber (kruislings verlijmd hout)',
        'Conventionele Lat-Tand-verbinding',
        'Climate-Limited Tape (isolatieproduct)',
      ],
      correctIndex: 1,
      explanation:
        'CLT (Cross-Laminated Timber) is massief geleverd dragend hout, bestaande uit haaks op elkaar verlijmde lagen. Wordt steeds vaker gebruikt in (modulaire) hoogbouw als alternatief voor beton en staal.',
    },
    {
      id: 'A.3.q26',
      toetstermCode: 'A.3.6',
      type: 'mc',
      prompt:
        'Welke energie-eis geldt sinds 1-1-2023 voor (grotere) kantoren?',
      options: [
        'Een woonquote van max. 30%',
        'Minimaal energielabel C voor kantoren ≥ 100 m²',
        'Een verplichte zonnepanelenvloer',
        'Minimaal label A++++',
      ],
      correctIndex: 1,
      explanation:
        'Sinds 1-1-2023 is energielabel C verplicht voor kantoren ≥ 100 m². Bij label D of slechter is gebruik als kantoor niet meer toegestaan; daarna moet eerst verduurzaamd worden of de gebruiksfunctie wijzigen.',
    },
  ],

  terms: [
    {
      term: 'Omgevingswet',
      definition:
        'Sinds 1-1-2024 actief; bundelt 26 wetten over de fysieke leefomgeving (ruimte, bouwen, milieu, water, natuur) in één integraal kader.',
    },
    {
      term: 'Bbl',
      definition:
        'Besluit bouwwerken leefomgeving — de technische bouwregels onder de Omgevingswet (opvolger van het Bouwbesluit 2012).',
    },
    {
      term: 'Omgevingsplan',
      definition:
        'Gemeentelijk plan onder de Omgevingswet (opvolger van het bestemmingsplan); bepaalt waar wat mag in de leefomgeving.',
    },
    {
      term: 'Omgevingsvergunning',
      definition:
        'Geïntegreerde vergunning voor alle activiteiten in de fysieke leefomgeving (bouwen, slopen, milieu, monument); aangevraagd via het Omgevingsloket.',
    },
    {
      term: 'Wkb',
      definition:
        'Wet kwaliteitsborging voor het bouwen — private kwaliteitsborgers controleren of het bouwwerk aan het Bbl voldoet; ingevoerd vanaf 1-1-2024 (gevolgklasse 1 eerst).',
    },
    {
      term: 'Bouwactiviteit (technisch)',
      definition:
        'Het bouwtechnische deel van een project: toets aan het Bbl, bij Wkb-projecten uitgevoerd door de kwaliteitsborger.',
    },
    {
      term: 'Omgevingsplanactiviteit',
      definition:
        'Het ruimtelijke deel: toets of de bouw past in het omgevingsplan (gebruik, hoogte, situering) — blijft bij de gemeente.',
    },
    {
      term: 'Gevolgklasse 1',
      definition:
        'Eenvoudige bouwwerken zoals grondgebonden woningen en kleine bedrijfshallen; valt als eerste onder de Wkb.',
    },
    {
      term: 'Gevolgklasse 2',
      definition:
        'Middelgrote bouw zoals appartementen, kantoren en scholen tot beperkte hoogte; later in de Wkb opgenomen.',
    },
    {
      term: 'Gevolgklasse 3',
      definition:
        'Complexe bouwwerken (hoogbouw, ziekenhuizen, voetbalstadions); blijft langdurig onder klassiek bouw­toezicht.',
    },
    {
      term: 'Energielabel',
      definition:
        'Verplichte indicatie van energiezuinigheid van een gebouw (A++++ tot G); voor verkoop/verhuur en voor kantoren ≥ 100 m² minimaal label C.',
    },
    {
      term: 'BENG',
      definition:
        'Bijna Energieneutrale Gebouwen — eisen voor nieuwbouw sinds 2021: lage energiebehoefte, laag primair fossiel verbruik, hoog aandeel hernieuwbaar.',
    },
    {
      term: 'NEN-norm',
      definition:
        'Nederlandse normen (bv. NEN 2580 voor oppervlakte­meting); juridisch dwingend zodra ze in het Bbl worden aangewezen.',
    },
    {
      term: 'NEN 2580',
      definition:
        'Norm voor het meten van vloeroppervlakte (GO/BVO/VVO) — basis voor objectvergelijking en huurcalculaties.',
    },
    {
      term: 'DURP / Omgevingsloket',
      definition:
        'Digitaal portaal waar bouwers en eigenaars hun omgevings­vergunning aanvragen en plannen kunnen inzien.',
    },
  ],

  games: [
    {
      id: 'A3-gapfill-1', type: 'gapfill',
      title: 'Bbl en Omgevingswet',
      text:
        'Sinds 1 januari 2024 is de {{Omgevingswet}} in werking — die bundelt 26 wetten in één integraal kader. ' +
        'Het oude Bouwbesluit 2012 heet nu het {{Bbl}} (Besluit bouwwerken leefomgeving). ' +
        'Voor bouwen heb je vaak een {{omgevingsvergunning}} nodig, getoetst door de gemeente. ' +
        'Sinds 2024 is daarnaast de {{WKB}} (Wet kwaliteitsborging) actief.',
      distractors: ['Bouwbesluit', 'NEN 1010', 'Bbk', 'energielabel'],
    },
    {
      id: 'A3-sort-1', type: 'sort',
      title: 'Welk onderwerp valt onder welke wet?',
      categories: ['Bbl', 'Omgevingswet', 'WKB'],
      items: [
        { label: 'Minimum Rc-waarde dak', category: 'Bbl' },
        { label: 'Brandwerendheid 60 min woningscheidend', category: 'Bbl' },
        { label: 'Vrije doorgang 850 × 2300 mm', category: 'Bbl' },
        { label: 'Bestemmings­plan / Omgevings­plan', category: 'Omgevingswet' },
        { label: 'Aanvraag omgevings­vergunning', category: 'Omgevingswet' },
        { label: 'Onafhankelijke borging bij oplevering', category: 'WKB' },
        { label: 'Risico-beoordeling tijdens bouw', category: 'WKB' },
      ],
    },
    {
      id: 'A3-sequence-1', type: 'sequence',
      title: 'Vergunning­procedure (gewoon)',
      items: [
        'Vooroverleg met gemeente (optioneel)',
        'Aanvraag omgevings­vergunning indienen',
        'Toets aan Bbl + omgevings­plan + welstand',
        'Beslissing gemeente (8 weken, ev. + 6)',
        'Bezwaar­termijn (6 weken)',
        'Start bouw onder WKB-borging',
      ],
    },
    {
      id: 'A3-matching-1', type: 'matching',
      title: 'Koppel begrippen',
      pairs: [
        { left: 'Bbl', right: 'Technische bouw­voorschriften (isolatie, brand, sterkte)' },
        { left: 'Omgevingswet', right: 'Integraal kader voor leefomgeving (sinds 2024)' },
        { left: 'WKB', right: 'Wet Kwaliteits­borging — onafhankelijke borger' },
        { left: 'Gevolgklasse 1', right: 'Lichte risico-klasse (eengezinswoning) — WKB van toepassing' },
        { left: 'Omgevings­plan', right: 'Opvolger bestemmings­plan onder Omgevingswet' },
        { left: 'Welstand', right: 'Beoordeling esthetiek nieuwe bouw in gemeente' },
      ],
    },
  ],
}
