import type { Topic } from '../types/content'

export const D_2_kwaliteit: Topic = {
  code: 'D.2',
  section: 'D',
  title: 'Bouwkundige kwaliteit van gebouwen',
  chapterRef: 'Lesboek hoofdstukken 30 en 31',
  blurb:
    'Beoordelen van de bouwkundige staat van kozijnen, gevels (metselwerk en gevelelementen) en dakbedekking — herkennen van gebreken en bepalen van urgentie; en breder de bouwkundige kwaliteit van een bouwwerk analyseren op aard en kwaliteit van de constructie, materiaal­gebruik, staat van onderhoud, bouwfysische eigenschappen, gebruiks­mogelijkheden, bestemmingen en situering.',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · Beoordelen van kozijnen, gevels en dakbedekking',
      toetstermCodes: ['D.2.1'],
      body: `
### Algemene aanpak: visuele beoordeling
Een makelaar of bouwkundig inspecteur beoordeelt **zichtbaar** + **toegankelijk** — geen destructief onderzoek. Drie hoofdvragen per onderdeel:

1. **Is het beschadigd?** (zichtbare gebreken)
2. **Hoe ernstig?** (cosmetisch / functioneel / constructief)
3. **Wat is de urgentie?** (direct / korte termijn / lange termijn)

### Kozijnen beoordelen

**Houten kozijnen** — wat te beoordelen?

#### Beoordeel het verfwerk
- **Conditie 1–2**: gladde, intacte verflaag — onderhouds­schilderwerk over 5+ jaar
- **Conditie 3**: matte verf, kleine plek­wijze schade — schilderwerk binnen 2–3 jaar
- **Conditie 4**: bladdering, scheuren in verf — direct onderhoud nodig om houtrot te voorkomen
- **Conditie 5**: grote verfschade + ingedrukt hout, mogelijk houtrot — vervangen overwegen
- **Conditie 6**: kozijn vergaan, beweegt, sluit niet — vervangen verplicht

#### Houtrot test
- **Visueel**: bruin/zwarte verkleuring, zacht hout (kops uiteinden van stijl/dorpel)
- **Druk-test**: priem of pen in het hout drukken — gezond hout weerstaat, rot geeft mee
- **Aandachts­punten**: onderkant kozijn (vocht­belasting), kops uiteinden, naden tussen kozijn en metselwerk

#### Kit en voegen
- **Verkleuring** geel of zwart (door schimmel) → vervangen
- **Loslating** of scheuren → vervangen
- **Onderbreking** of gaten → herstel direct nodig

#### Beslag (hang- en sluitwerk)
- **Scharnieren** roest, kraken, dragen niet meer goed
- **Sloten en cilinders** SKG-niveau? Beveiligings­upgrades nodig?
- **Sluitings­controle** — sluit het kozijn goed? Geen tocht?

#### Glas
- **Lekkage dubbel glas** (condens tussen ruiten) — vervanging nodig
- **Krassen, vlekken** — meestal cosmetisch
- **HR-coating-aantasting** — vervanging nodig

**Aluminium kozijnen** — wat te beoordelen?
- **Coating-veroudering**: verkleurd, schub­vorming, plaatselijk afgesleten
- **Putcorrosie**: kleine putjes door cement/metsel­specie-contact tijdens bouwfase
- **Thermische onderbreking** aanwezig? Condens aan binnenkant?
- **Kit en afdichtingen** rondom het kozijn

**Kunststof kozijnen** — wat te beoordelen?
- **Verkleuring** door UV (vooral op zuid-gevel)
- **Kromtrekken** van profielen (te grote afmetingen?)
- **Hang- en sluitwerk** SKG?
- **Smeltlassen** in hoeken — visuele controle of intact

### Gevels beoordelen — metselwerk

#### Voegen
- **Beste indicator** van metselwerk-staat
- Beoordeel: **intacte, niet verbrokkelde voegen**?
- **Scheuren** in voegen — meten breedte (haarscheuren <1 mm normaal; > 2 mm aandacht)
- **Loslating** van voegmortel — herstel binnen 1–2 jaar
- Volledig voegherstel: elke 25–50 jaar (afhankelijk klimaat)

#### Stenen
- **Vorstschade** (afsplitsing van oppervlak, vooral bij poreuse stenen)
- **Verwering** (zandsteen verwaait langzaam, hardsteen blijft intact)
- **Algen en mos** — cosmetisch maar vasthoudend van vocht
- **Roestvlekken** — onderliggende roestige ankers of wapening

#### Constructieve scheuren
**Belangrijk om te herkennen!**
- **Verticale scheur door meerdere lagen** (>2 mm) → verzakkings­schade → constructeur raadplegen
- **Diagonale scheur** vanaf een hoek → spanning in metsel­werk → onderzoek nodig
- **Horizontale scheur** boven kozijn → mogelijk latei-probleem
- **Trapsgewijze scheur** in voegen → typisch verzakking van fundering

#### Vocht­problemen
- **Vochtkringen** op gevel → mogelijke lek in goot, opstijgend grondvocht, of slechte voegen
- **Uitslag** (witte kalk-afzetting) → vocht trekt zouten naar oppervlak
- **Schimmel** op gevel → continu vochtig, schaduw + slechte ventilatie

### Gevels beoordelen — gevelelementen

#### Gevelplaten (Trespa, vezelcement, vinylvinyl)
- **Verkleuring** door UV
- **Bevestigings­schroeven** los of zichtbare roest
- **Naden** open of afgedicht?
- **Schade** door stoten of windbelasting

#### Stuc/pleisterwerk
- **Scheuren** (haar­scheuren acceptabel; > 1 mm aandacht)
- **Loslating** — klop­test (hol klinkend = los)
- **Verkleuring** door algen, mos
- **Onderhoud** elke 15–25 jaar herzien

#### Houten gevelbekleding
- **Schilderwerk** zoals bij kozijnen
- **Houtrot** vooral aan onderkant + naden
- **Vochtinwerking** bij naden + aansluitingen
- **Loslating** door windbelasting

### Dakbedekking beoordelen

#### Pannen (keramisch of beton)
- **Loszittende pannen** — vooral aan randen en bij doorvoer
- **Gebroken pannen** — vervanging nodig
- **Verkleuring** beton (coating versleten)
- **Mos en algen** — beton sneller dan keramiek
- **Aansluitingen rond schoorsteen** — voetlood, zalinggoot intact?

#### Bitumineuze dakbedekking (platdak)
- **Blaasvorming** → ingesloten vocht (zie B.13.7)
- **Krimp** + scheuren langs randen → veroudering bitumen
- **Roestbruine verkleuring** van toplaag → veroudering, vervangen
- **Plassen** op dak na regen → onvoldoende afschot of verzakking

#### EPDM / kunststof dakbedekking
- **Krimp** rondom randen → randafdichting onderzoeken
- **UV-veroudering** PVC: vergeeld, krakend
- **Aansluitingen** bij doorvoeren, dakopstanden, schoorsteen

#### Lood en zink (slabben, vorsten, goten)
- **Scheuren in lood** — slabben langer dan 1,5 m: kruip-problemen (zie B.10.5)
- **Roest van zink** of zink-vorsten — vervangen
- **Aansluitingen op opgaand werk** intact?

#### Hemelwater­afvoer
- **Vol blad of vuil** → reinigen
- **Loszittend** of beschadigde dakgoot → herstel
- **Lekkages** bij overgangen of bochten

### Praktijk: prioritering bij beoordeling
**Bij koop-inspectie**:
1. **Constructie-veiligheid eerst** (scheuren, instabiliteit)
2. **Vocht­problemen** (lekkages, kelder, schimmel)
3. **Brandveiligheid** (vluchtroutes, brand­werende elementen)
4. **Installaties** (gas, elektra)
5. **Energie­zuiniger** (kozijnen, isolatie)
6. **Cosmetisch** (schilderwerk, vloer­afwerking)

**Voor onderhouds­strategie**:
- Direct: alles wat veiligheid of grote schade-risico is
- 0–5 jaar: groot onderhoud volgens MJOP
- 5–15 jaar: planning binnen MJOP
- > 15 jaar: monitoring + planning
      `.trim(),
    },

    {
      heading: '2 · Conclusies over bouwkundige kwaliteit',
      toetstermCodes: ['D.2.2'],
      body: `
B.2.2 vraagt om aan de hand van een **casus** conclusies te trekken over de **bouwkundige kwaliteit** van een bouwwerk. Zeven beoordelings­dimensies:

### Beoordelings­dimensie 1 — Aard van de constructie
**Welk type constructie?**
- **Traditionele draagstructuur**: gemetselde wanden + houten balklagen (oudere woningen)
- **Modern**: betonnen draagstructuur, prefab-elementen
- **HSB (houtskeletbouw)**: lichte constructie met houten stijlen + isolatie
- **Staalskeletbouw**: voor utiliteit, soms moderne woningen

**Bouwjaar relevant**:
- < 1950: vaak houten balklagen, eenvoudige isolatie
- 1950–1980: betonvloeren, lokale isolatie
- 1980–2010: standaard isolatie (Rc 2.5–3.5)
- > 2010: zware isolatie, energie­zuinig, BENG-vereisten

**Constructieve veiligheid**:
- Scheuren, verzakking, scheef hangende wanden
- Aanwezigheid van laterale stabiliteit (windbelasting)
- Fundering type (op staal, op palen) + leeftijd

### Beoordelings­dimensie 2 — Kwaliteit van de constructie
**Hoe is de constructie uitgevoerd?**
- **Maatvoering**: rechte muren, gelijke kozijnen, correct gestort beton
- **Detaillering**: aansluitingen tussen materialen, koudebrug-onderbreking, brandweerheid
- **Verbindingen**: bouwknopen tussen wand en vloer, ankers, voegen
- **Materiaal­kwaliteit**: keuze van geschikt materiaal voor de toepassing
- **Bouwfouten**: zichtbare gebreken die voortvloeien uit slechte uitvoering

**Voorbeeld**:
- Goed: Bbl-conform geïsoleerd dak met goede details + dampremmer
- Slecht: ongeïsoleerd dak met koudebruggen rondom gevel-dak aansluiting

### Beoordelings­dimensie 3 — Materiaal­gebruik
**Welke materialen zijn toegepast?**
- **Duurzaam** (FSC-hout, RVS, recyclebare materialen)
- **Niet meer toegestaan** (asbest, lood-leidingen)
- **Onderhouds­arm** (aluminium, beton) of **onderhouds­intensief** (hout, gepleisterd)
- **Aanpassing aan klimaat**: kustklimaat eist andere materialen dan binnenland
- **Brandwerend­heid** materialen

**Risico's**:
- **Asbest in panden < 1994**: verplichte inventarisatie bij verbouwing
- **Lood-leidingen** in panden < 1960: gezondheidsrisico, vervanging aanbevolen
- **Houten paalfundering** in Amsterdam-Haarlem: verlaagd grondwater­peil → softrot

### Beoordelings­dimensie 4 — Staat van onderhoud
**Hoe goed is het bijgehouden?** (zie D.1)
- **Goed**: regelmatig schilderwerk, intacte voegen, gemoderniseerde installaties
- **Redelijk**: enkele tekortkomingen, maar functioneel
- **Slecht**: achterstallig onderhoud, gebreken aan meerdere onderdelen
- **Zeer slecht**: onveilig of onbruikbaar zonder grote ingrepen

**Indicatoren**:
- **Schilderwerk** ouderdom + staat (zie D.1.7)
- **Installaties** (cv-ketel, elektra) leeftijd
- **Constructieve gebreken** wel of niet?
- **Documentatie** van MJOP, eerdere renovaties

### Beoordelings­dimensie 5 — Bouwfysische eigenschappen
**Hoe presteert het gebouw bouwfysisch?**

**Thermische isolatie** (zie D.3):
- **Rc-waardes** muren, dak, vloer
- **U-waarde** glas (HR++/triple)
- **Koudebrug**-vrij detail?

**Vocht­huishouding**:
- **Dampremmende laag** aan warme zijde aanwezig?
- **Ventilatie** (Systeem A–D)
- **Tocht** door kieren, slechte kitten

**Geluidsisolatie**:
- **Massa** van wanden (woningscheidend)
- **Contactgeluid** demping (zwevende dekvloer)
- **Geluid van buiten** (HR++ glas, dichte kit)

**Energie­label**:
- A++++ tot G — geeft samenvatting van bouwfysische prestaties
- Verplicht bij verkoop/verhuur

### Beoordelings­dimensie 6 — Gebruiks­mogelijkheden
**Hoe is het pand bruikbaar?**

- **Indeling**: aantal kamers, oppervlak, plattegrond-logica
- **Toegankelijkheid**: traploos, drempels, brede deuren? (NEN 1814, Bbl)
- **Flexibel indeelbaar**: dragende vs niet-dragende wanden
- **Aansluiting op leefstijl**: gezin met kinderen vs alleenstaande senior
- **Werkruimte**: kantoor aan huis mogelijk?
- **Buitenruimte**: tuin, balkon, dakterras?

### Beoordelings­dimensie 7 — Bestemmingen en situering
**Mag het pand voor het beoogde doel gebruikt worden?**

- **Bestemmingsplan**: woon, gemengd, kantoor, bedrijf? — bij gemeente checken
- **Beschermd gezicht of monument**: extra beperkingen
- **Welstand**: in beschermde wijken aanpassings­beperkingen aan gevel
- **Erfdienst­baarheden**: paden, leidingen door perceel
- **Bouwvergunningen** voor recente aanpassingen — aanwezig?

**Situering**:
- **Wijktype** (centrum, suburbaan, landelijk)
- **Bereikbaarheid** (OV, snelweg, fiets-routes)
- **Voorzieningen** (winkels, scholen, gezondheidszorg)
- **Geluids­belasting** (drukke weg, spoorlijn, vliegveld)
- **Wateroverlast­risico** (laaggelegen, zeespiegel­stijging)
- **Energie­leveringszekerheid** (gasaansluiting nog vervangbaar door warmtenet?)
- **Sociale veiligheid** (PKVW-wijk?)

### Samenvattend rapport opstellen
Voor een complete bouwkundige beoordeling rapporteert een inspecteur:

1. **Algemene staat** (goed/redelijk/matig/slecht)
2. **Per onderdeel** conditie­score (NEN 2767) + gebreken
3. **Constructieve veiligheid** als aparte vermelding
4. **Energie­zuinigheid** + label
5. **Vocht- en ventilatie­situatie**
6. **Brandveiligheid**
7. **Geconstateerde achterstallig onderhoud**
8. **Aanbevelingen voor onderhoud** komende 10 jaar
9. **Geschatte kosten** voor herstel
10. **Conclusie** voor de opdrachtgever (koper, verkoper, eigenaar)

### Voor de makelaar
**Bij verkoop**:
- **Bouwkundig rapport** van koper kan onderhandelings­basis vormen
- **Mededelings­plicht** voor bekende gebreken (verzwijging is wanprestatie)
- **Energie­label** verplicht
- **Asbestinventarisatie** voor pand < 1994 verplicht bij verbouwing

**Bij koop**:
- **Aanbevelen** van onafhankelijke bouwkundige keuring
- **Onderhandelings­ruimte** in conclusies
- **Toekomstige investeringen** in MJOP-vorm bij koper

**Algemeen advies**:
- Geen subjectieve uitspraken zonder bouwkundige onderbouwing
- Verwijzen naar specialist bij twijfel
- **Documentatie** is essentieel voor latere claims
      `.trim(),
    },
  ],

  toetstermen: [
    {
      code: 'D.2.1',
      text: 'Beoordeelt de bouwkundige kwaliteit en staat van onderhoud van kozijnen, gevels (metselwerk en gevelelementen) en dakbedekking.',
      niveau: 'BT2',
      bloom: 'Toepassen',
    },
    {
      code: 'D.2.2',
      text: 'Trekt aan de hand van een casus conclusies over de bouwkundige kwaliteit van een bouwwerk op het gebied van aard en kwaliteit van de constructie, materiaal­gebruik, staat van onderhoud, bouwfysische eigenschappen, gebruiks­mogelijkheden, bestemmingen en situering.',
      niveau: 'BT2',
      bloom: 'Analyseren',
      metDrawing: true,
    },
  ],

  questions: [
    // D.2.1 (5)
    {
      id: 'D2-1-a',
      toetstermCode: 'D.2.1',
      type: 'mc',
      prompt: 'Bij beoordeling van een **houten kozijn**, hoe test je op houtrot?',
      options: [
        'Door de kleur te bekijken',
        'Visueel (bruin/zwart) + druk-test met priem of pen in het hout — gezond hout weerstaat, rot geeft mee; vooral letten op onderkant kozijn, kops uiteinden en naden tussen kozijn en metselwerk',
        'Door de verf aan te raken',
        'Door het kozijn te wegen',
      ],
      correctIndex: 1,
      explanation:
        'Test houtrot in twee stappen: (1) visueel — bruin/zwart verkleurd hout, zacht uiterlijk, mogelijk zichtbare scheurtjes; (2) druk-test — duw een priem of pen in het hout; gezond hout biedt weerstand, rot geeft direct mee (priem zinkt in). Aandachtspunten: onderkant kozijn (vochtbelasting), kops uiteinden van stijl/dorpel, naden met metselwerk. Bij houtrot: vervolgens omvang en oorzaak (vaak slecht onderhouden kit/verfwerk) onderzoeken.',
    },
    {
      id: 'D2-1-b',
      toetstermCode: 'D.2.1',
      type: 'mc',
      prompt: 'Welke **scheur in metselwerk** is een direct alarmerend signaal?',
      options: [
        'Een fijne haarscheur < 1 mm',
        'Verticale scheur door meerdere metselwerk-lagen > 2 mm of trapsgewijze scheur in voegen — wijst op verzakking van fundering → constructeur raadplegen',
        'Een lichte verkleuring van voegen',
        'Een diagonale scheur in pleisterwerk',
      ],
      correctIndex: 1,
      explanation:
        'Alarmerend zijn vooral: (1) verticale scheur door meerdere metsel­werk-lagen, > 2 mm breed — wijst op spanning en mogelijke verzakking; (2) trapsgewijze scheur door voegen (volgt voeg-stappen) — typische signatuur van fundering­verzakking. Beide vergen constructeur. Haar­scheuren (<1 mm) zijn meestal harmloos (uitzettingsschommelingen). Diagonale scheur vanaf hoek kan ook structureel zijn → onderzoek. Horizontale scheur boven kozijn: mogelijk latei-probleem.',
    },
    {
      id: 'D2-1-c',
      toetstermCode: 'D.2.1',
      type: 'mc',
      prompt: 'Bij **bitumineuze dakbedekking** op een plat dak: wat is een direct teken van veroudering?',
      options: [
        'Een nieuwe goot',
        'Blaasvorming (ingesloten vocht expandeert), krimp + scheuren langs randen (veroudering bitumen), roestbruine verkleuring van toplaag — vervangen indien meerdere tekenen',
        'Een glanzende oppervlak',
        'Geen zichtbare schade',
      ],
      correctIndex: 1,
      explanation:
        'Tekens van veroudering bitumineuze dakbedekking: (1) **blaasvorming** — bullen in bitumen door ingesloten vocht dat expandeert bij zonwarmte; (2) **krimp** + scheuren langs randen — veroudering door UV en temperatuur­schommelingen; (3) **roestbruine** verkleuring toplaag — veroudering. Volledige vervanging gewenst na ~25–40 jaar levensduur. Plassen op dak na regen wijzen op onvoldoende afschot of verzakking. EPDM heeft andere veroudering: krimp langs randen + vergeling.',
    },
    {
      id: 'D2-1-d',
      toetstermCode: 'D.2.1',
      type: 'mc',
      prompt: 'Hoe controleer je of **stuc/pleisterwerk** op een gevel los zit?',
      options: [
        'Visueel inspecteren',
        'Klop-test: tikken met vinger of klein gereedschap; hol klinkend = los (te vervangen); solide klinkend = nog vast',
        'Lijm aan­brengen',
        'Het kan niet gecheckt worden',
      ],
      correctIndex: 1,
      explanation:
        'Klop-test (knock-test): tikken met vinger of klein gereedschap op het pleisterwerk. **Hol klinkend** geluid wijst op loszitten van het pleisterwerk → moet vervangen worden. **Solide** klinkend = nog vast aan onderliggend metselwerk. Bij grote loszittende gebieden: gehele pleister­laag vervangen + nieuwe raap­laag op metselwerk. Bij lokale plekken: uithakken + bijwerken met passende mortel. Pleisterwerk dat losloopt heeft vaak vocht-oorzaak (lekkage, opstijgend vocht).',
    },
    {
      id: 'D2-1-e',
      toetstermCode: 'D.2.1',
      type: 'mc',
      prompt: 'Wat is de **eerste prioriteit** bij beoordeling van onderhouds-urgentie?',
      options: [
        'Cosmetische uitstraling',
        'Constructie-veiligheid (scheuren, instabiliteit) en vocht­problemen (lekkages, schimmel) — deze geven snelle vervolgschade',
        'Energie­zuinigheid',
        'De kleur van de gevel',
      ],
      correctIndex: 1,
      explanation:
        'Prioritering: (1) **constructie-veiligheid eerst** — scheuren, instabiliteit, onveilige fundering. Verzakking laat zich niet vanzelf herstellen. (2) **Vocht­problemen** — lekkages en schimmel veroorzaken snel grote vervolgschade (houtrot, betonrot). (3) **Brandveiligheid** — vluchtroutes, brand­werende elementen. (4) **Installaties** — gas, elektra veiligheid. (5) **Energie­zuinigheid** — verbeteringen, isolatie. (6) **Cosmetisch** — laatste prioriteit. Bij koop-inspectie altijd in deze volgorde rapporteren.',
    },

    // D.2.2 (5)
    {
      id: 'D2-2-a',
      toetstermCode: 'D.2.2',
      type: 'mc',
      prompt: 'Een woning uit **1968** met houten balklagen + lokale isolatie, energie­label E. Voor de koper-conclusie over bouwfysische eigenschappen:',
      options: [
        'Geen actie nodig — staat in goede staat',
        'Energie­zuiniger maken biedt aanzienlijke verbetering: dak-isolatie (Rc 6.3), gevel-isolatie spouw of binnen, HR++/triple glas, warmtepomp + vloerverwarming → label kan naar A; rekening houden met investering ~€ 30.000–50.000',
        'Alleen isolatie van zolder',
        'Alleen ventilatie verbeteren',
      ],
      correctIndex: 1,
      explanation:
        'Voor een woning uit 1968 met label E geldt: aanzienlijke energie­zuiniger­making mogelijk, met grote impact op comfort en exploitatie­kosten. Aanpak: (1) dak-isolatie tot Rc ≥ 6,3; (2) spouw­muur na-isolatie of binnen-/buitenisolatie; (3) HR++ glas vervangen (mogelijk monumenten­glas); (4) cv-ketel vervangen door (hybride) warmtepomp + vloerverwarming. Resultaat: label A mogelijk, energie­besparing ~50–70 %, comfort verbetering. Investering ~€ 30.000–50.000 voor totaal pakket — terug te verdienen in 15–25 jaar.',
    },
    {
      id: 'D2-2-b',
      toetstermCode: 'D.2.2',
      type: 'mc',
      prompt: 'In een **monumentaal pand** zijn er beperkingen voor renovatie. Wat zijn de belangrijkste regulier-juridische punten?',
      options: [
        'Geen beperkingen',
        'Vergunning­plichtig (omgevings­vergunning); behoud van uitstraling en materialen; subsidies mogelijk voor restauratie; welstands-commissie beoordeelt; isolatie mogelijk via monumentenglas + dak/vloer binnenkant',
        'Mag niet meer worden bewoond',
        'Alleen interne werken zijn vrij',
      ],
      correctIndex: 1,
      explanation:
        'Monumentaal pand: (1) **vergunning­plichtig** — elke wijziging vergt omgevings­vergunning + monumenten­ontheffing; (2) **behoud van uitstraling** — externe materialen, kleuren, detaillering moeten overeen­stemmen met origineel; (3) **subsidies** beschikbaar voor restauratie (Rijksdienst Cultureel Erfgoed); (4) **welstands-commissie** beoordeelt esthetische aanpassingen; (5) **isolatie mogelijk** via monumentenglas (dunner dubbel glas), dak-isolatie aan binnenzijde, vloer-isolatie. Renovatie complexer en duurder dan reguliere woning.',
    },
    {
      id: 'D2-2-c',
      toetstermCode: 'D.2.2',
      type: 'mc',
      prompt: 'Bij beoordeling van een **kantoorpand uit 1985** voor herontwikkeling naar woningen: wat zijn de belangrijkste check-punten?',
      options: [
        'Alleen oppervlak',
        'Bestemmingsplan-wijziging mogelijk? Asbestinventarisatie verplicht (pand < 1994). Constructie geschikt voor woningen (vloerbelasting, geluidsisolatie). Installaties: nieuwe aansluitingen + waterleiding. Energie­zuinigheid herzien. Geluids­overlast omgeving? Daglicht­toetreding voldoende?',
        'Alleen kleur van de gevel',
        'Geen check nodig — gewoon verbouwen',
      ],
      correctIndex: 1,
      explanation:
        'Bij herontwikkeling kantoor → woningen check: (1) **Bestemmingsplan-wijziging** mogelijk bij gemeente; (2) **Asbestinventarisatie** verplicht (< 1994); (3) **Constructie**: vloeren ontworpen voor lagere belasting + geluidsisolatie tussen woningen (klassiek kantoor te licht); (4) **Installaties**: nieuwe individuele aansluitingen waterleiding, riolering, ventilatie, elektra per appartement; (5) **Energie­zuinigheid**: kantoor­schil vaak veel slechter dan woning­eisen; (6) **Daglicht** + ventilatie voor verblijfsruimten; (7) **Geluidsoverlast** omgeving (centrum, drukke straat).',
    },
    {
      id: 'D2-2-d',
      toetstermCode: 'D.2.2',
      type: 'mc',
      prompt: 'Bij een woning in **Amsterdam-Zuid** (pre-1940) is de **fundering** een zorgpunt. Waarom?',
      options: [
        'Te diepe palen',
        'Veel oudere palen zijn houten paalfundering; daling grondwater­peil door drainage/klimaat­verandering veroorzaakt softrot bij hout boven peil — leidt tot verzakking; gespecialiseerde inspectie + eventueel funderings­herstel (€ 50.000–150.000)',
        'Te jonge bouwjaar',
        'Geen probleem',
      ],
      correctIndex: 1,
      explanation:
        'In Amsterdam, Haarlem, Zaanstreek en andere historische steden in slappe grond is een groot deel van pre-1940 woningen gebouwd op **houten paalfundering**. Probleem: het grondwater­peil is gedaald (klimaat­verandering, drainage van bouwprojecten) → houten palen die ooit volledig onder water stonden, komen nu met top boven het grondwater. Hout dat afwisselend droog/nat is wordt aangetast door **softrot** (zie B.9.2) — kan 1 cm per jaar afnemen. Resultaat: verzakking woningen. Funderings­herstel (palen vervangen, betonbalken aanleggen): kosten € 50.000–150.000.',
    },
    {
      id: 'D2-2-e',
      toetstermCode: 'D.2.2',
      type: 'mc',
      prompt: 'Welke factor in beoordeling **situering** is belangrijk voor de toekomst-waarde van een woning?',
      options: [
        'Alleen de huidige populariteit',
        'Bereikbaarheid (OV, fiets), voorzieningen (school, winkels), geluidsoverlast (snelweg/spoor), wateroverlast­risico (laaggelegen + zeespiegel­stijging), energie­transitie (warmtenet beschikbaar?), sociale veiligheid (PKVW-wijk)',
        'De architect',
        'De kleur van de gevel',
      ],
      correctIndex: 1,
      explanation:
        'Situering-factoren voor toekomstwaarde: (1) **Bereikbaarheid** — OV-stations, fiets-routes, snelweg-toegang (toekomst-belangrijk); (2) **Voorzieningen** — scholen, winkels, gezondheid (gezin); (3) **Geluidsoverlast** — drukke weg/spoor/vliegveld verlagen waarde; (4) **Wateroverlast** — laaggelegen gebieden in NL kunnen problemen krijgen door zeespiegel­stijging en grotere regenval; (5) **Energie­leverings­zekerheid** — warmtenet, glasvezel beschikbaar?; (6) **Sociale veiligheid** — PKVW-wijk (inbraakreductie 80 %). Deze factoren beïnvloeden waarde over 20–30 jaar.',
    },
  ],

  terms: [
    {
      term: 'Optrekkend vocht',
      definition:
        'Vocht dat via capillaire werking vanuit fundering omhoog trekt in onbeschermde muren — herkenbaar aan zoutuitslag.',
    },
    {
      term: 'Doorslaand vocht',
      definition:
        'Vocht dat van buiten naar binnen door een muur slaat — meestal door beschadigd voegwerk of slecht spouwwerk.',
    },
    {
      term: 'Condensvocht',
      definition:
        'Vocht door waterdamp die op koud oppervlak condenseert — vaak bij koudebrug, slechte ventilatie.',
    },
    {
      term: 'Houtrot',
      definition:
        'Schimmel­aantasting van hout bij vocht > 20% — typisch in kozijn­onderdorpels en dakranden.',
    },
    {
      term: 'Bonte knaagkever / boktor',
      definition:
        'Houtinsecten die droog hout aantasten; bonte knaagkever in oudere balken, boktor in spinthout.',
    },
    {
      term: 'Betonrot',
      definition:
        'Aantasting waarbij wapening corrodeert door carbonatatie of chloride — beton breekt af, wapening zwelt.',
    },
    {
      term: 'Carbonatatie',
      definition:
        'Reactie waarbij CO₂ uit de lucht beton verzuurt; daalt pH zodat wapening niet meer beschermd is.',
    },
    {
      term: 'Krimpscheur',
      definition:
        'Haarscheur die ontstaat tijdens uitharden van beton/mortel — meestal cosmetisch, niet constructief.',
    },
    {
      term: 'Zettings­scheur',
      definition:
        'Scheur door ongelijke verzakking van fundering — vaak diagonaal, breder onderaan; constructief signaal.',
    },
    {
      term: 'Verzakking',
      definition:
        'Daling van fundering of bouwdeel door grondbelasting of bodem­erosie — gevolg: scheuren, scheve vloeren.',
    },
    {
      term: 'Schimmel',
      definition:
        'Zwart/groene plekken op koude oppervlakken bij vocht > 70% relatieve luchtvochtigheid — gezondheids­risico.',
    },
    {
      term: 'Zout­uitslag',
      definition:
        'Witte aanslag op metselwerk door zoutkristallen die uit de muur komen door verdampend optrekkend vocht.',
    },
    {
      term: 'Lekkage',
      definition:
        'Ongewenste waterintreding — dak, kozijn­aansluiting, riool of leiding; vroeg opsporen voorkomt vervolgschade.',
    },
    {
      term: 'Asbest',
      definition:
        'Vezelig mineraal verboden sinds 1993; gezondheids­risico — verplicht laten saneren bij renovatie of sloop.',
    },
    {
      term: 'Loodverf',
      definition:
        'Verf met loodpigmenten gebruikt tot ~1960 — gezondheidsrisico bij schuren of branden; vergt veilige sanering.',
    },
  ],

  games: [
    {
      id: 'D2-gapfill-1', type: 'gapfill',
      title: 'Bouwkundige kwaliteit beoordelen',
      text:
        'Een ernstige scheur in metselwerk is een {{verticale}} scheur > 2 mm door meerdere lagen, of een {{trapsgewijze}} scheur in voegen — wijst op verzakking. ' +
        'Een schub-vormige roest op stalen hekwerk wijst op corrosie {{onder}} de verflaag. ' +
        '{{Betonrot}} ontstaat door te geringe betondekking → wapeningsstaal roest → beton springt af.',
      distractors: ['horizontale', 'aaneengesloten', 'boven', 'craquelé'],
    },
    {
      id: 'D2-sort-1', type: 'sort',
      title: 'Prioriteit bij beoordeling',
      categories: ['Direct herstel', 'Korte termijn (0–5 j)', 'Lange termijn (5–15 j)'],
      items: [
        { label: 'Lekkage dakgoot', category: 'Direct herstel' },
        { label: 'Onveilige fundering / scheve wand', category: 'Direct herstel' },
        { label: 'Defect gasleiding', category: 'Direct herstel' },
        { label: 'Schilderwerk verouderd', category: 'Korte termijn (0–5 j)' },
        { label: 'Cv-ketel uit 1998 (conditie 4)', category: 'Korte termijn (0–5 j)' },
        { label: 'Verbeterd glas vervangen', category: 'Lange termijn (5–15 j)' },
        { label: 'Volledige dakbedekking vernieuwen', category: 'Lange termijn (5–15 j)' },
      ],
    },
    {
      id: 'D2-matching-1', type: 'matching',
      title: 'Beoordelings­dimensies',
      pairs: [
        { left: 'Aard constructie', right: 'Type: traditioneel, beton, HSB, CLT' },
        { left: 'Materiaal­gebruik', right: 'Asbest? Lood? FSC-hout? Duurzaam?' },
        { left: 'Staat onderhoud', right: 'Goed/redelijk/matig/slecht — zie NEN 2767' },
        { left: 'Bouwfysica', right: 'Rc-waarden, U-waarde, vocht, koudebrug' },
        { left: 'Situering', right: 'Locatie, bereikbaarheid, geluidsbelasting' },
      ],
    },
  ],
}
