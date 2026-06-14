import type { Topic } from '../types/content'

export const D_1_beoordeling: Topic = {
  code: 'D.1',
  section: 'D',
  title: 'Beoordelings­methodieken',
  chapterRef: 'Lesboek hoofdstuk 31',
  blurb:
    'Meerjaren­onderhoudsplan (MJOP) met conditiemetingen volgens NEN 2767, reserveringen onderhoud, VvE-bijdrage; vormen van verbouwing (renovatie, restauratie, groot onderhoud, herontwikkeling, transformatie); vormen van onderhoud (planmatig, curatief, achterstallig, preventief, klachten, mutatie, amoveren); analyse van een bouwkundig rapport; instandhoudings­termijn en technische/economische levensduur; en consequenties van keuken-/badkamer-/wand-/uitbouw-verbouwingen.',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · MJOP en NEN 2767',
      toetstermCodes: ['D.1.1'],
      body: `
### Wat is een MJOP?
**MJOP** = **Meerjaren­OnderhoudsPlan** — een document dat per gebouw aangeeft:
- **Welk onderhoud** uitgevoerd moet worden
- **Wanneer** (vaak voor 10–25 jaar vooruit)
- **Wat het gaat kosten**
- **Welke reserveringen** daarvoor nodig zijn

### Doel van een MJOP
1. **Plan­matig onderhoud** in plaats van crisismanagement
2. **Financieel inzicht** — wat moet jaarlijks gereserveerd worden?
3. **Verzekerings­conform** beheer
4. **Wettelijk verplicht** voor VvE's (sinds 2018) en zorginstellingen
5. **Voorkomen van achterstallig onderhoud** en plot­selinge grote uitgaven

### NEN 2767 — Conditiemetingen
**NEN 2767** is de norm voor het uitvoeren van **conditiemetingen** aan gebouwen. Een onafhankelijke inspecteur beoordeelt elk onderdeel op een **6-puntsschaal**:

| Conditie | Beschrijving | Actie |
|---|---|---|
| **1 — Uitstekend** | Geen gebreken, als nieuw | Geen actie |
| **2 — Goed** | Beginnende veroudering, geen gebreken | Toezicht |
| **3 — Redelijk** | Lokale gebreken, normale veroudering | Plan­matig onderhoud |
| **4 — Matig** | Functioneren niet meer optimaal | Onderhoud uitvoeren |
| **5 — Slecht** | Niet langer fungerend | Direct vervangen of repareren |
| **6 — Zeer slecht** | Levensgevaarlijk of onbruikbaar | Onmiddellijk handelen |

**Uitkomst conditiemeting**:
- Elk **bouwdeel** (gevel, dak, kozijnen, installaties, etc.) krijgt een score
- Per onderdeel wordt **type gebrek** beschreven (cosmetisch, mechanisch, constructief)
- **Risico-inschatting** voor de komende jaren
- **Kosten­raming** voor herstel

### Reserveringen onderhoud
**Hoeveelheid jaarlijkse reservering** = totale kosten onderhoud over MJOP-periode ÷ aantal jaren.

**Algemene vuistregel**:
- Particuliere woning: ~1 % van de **vervangings­waarde** per jaar
- Appartementen­complex (VvE): vaak iets minder per appartement, maar verplicht
- Utiliteit (kantoor, school): 1,5–2 % per jaar (intensiever gebruik)

**Reservefonds**:
- **Speciale rekening** waarop reserveringen worden gestort
- Bij VvE wettelijk **0,5 % van de herbouwwaarde** per jaar (sinds 2018)
- Of: bedrag volgens **actueel MJOP**, indien dit hoger uitkomt

### VvE-bijdrage
**Vereniging van Eigenaren (VvE)** is wettelijk verplicht bij gesplitste appartementen­rechten (eigenaars wonen in eenzelfde gebouw).

**Verantwoordelijkheden VvE**:
- **Onderhoud van het gemeenschappelijke deel** (dak, gevel, trappenhuis, lift, kelder, installaties­technische ruimten)
- **MJOP opstellen en uitvoeren**
- **Reservefonds aanleggen**
- **Verzekeringen** (opstal)
- **Vergader­plicht** minimaal jaarlijks (ALV — Algemene Ledenvergadering)

**VvE-bijdrage per appartement** (maandelijks):
- Berekend op basis van **breukdelen** (apparte­ments­index) in de splitsings­akte
- Dekt: reservefonds (verplicht), lopende onderhouds­kosten, verzekeringen, beheer­kosten
- Typisch: € 50–250 per maand per appartement (afhankelijk gebouw)

### Voor de makelaar
- **MJOP opvragen** bij bezichtiging appartement
- **Reservefonds VvE** vermelden in informatie-mededeling (Bbl)
- **Achterstand in onderhoud** = mogelijke korting op verkoopprijs
- **Geen VvE-MJOP** = waarschuwing: koper moet rekening houden met spec onderhoud
      `.trim(),
    },

    {
      heading: '2 · Opbouw van een MJOP',
      toetstermCodes: ['D.1.2'],
      body: `
### Opbouw — wat staat er in een MJOP?

#### 1. Inleiding
- **Adres en eigenaar** van het gebouw
- **Bouwjaar** en eventuele bekende renovaties
- **Type gebouw** (woning, appartementen­complex, utiliteit)
- **Datum opname + naam inspecteur** (vaak BORG-erkend of gecertificeerd)
- **Periode van het plan** (meestal 10–25 jaar)

#### 2. Algemene beschrijving
- **Constructie­opbouw** (gemetseld, beton, hout, staal)
- **Gevels**: materialen, isolatie
- **Daken**: type (plat, hellend), bedekking, isolatie
- **Installaties**: cv, elektra, sanitair, ventilatie
- **Toegang en hekwerken**
- **Bestaande staat van onderhoud** (algemeen oordeel)

#### 3. Conditie-inspectie (NEN 2767)
Per **bouw­deel** een rapportage:
- Beschrijving (locatie, materialen)
- **Conditie­score** (1–6 volgens NEN 2767)
- **Type gebreken** (foto's)
- **Risico-inschatting**
- **Aanbevolen actie**

#### 4. Onderhouds­overzicht
**Lijst van alle onderhouds­activiteiten** over de MJOP-periode (bv. 10 of 25 jaar):
- **Jaar** waarin uit te voeren
- **Onderdeel** + **omschrijving werk** (bv. "schilderwerk voordeuren", "vervangen cv-ketel")
- **Geschatte kosten** (excl. en incl. BTW)
- **Aanbesteding/levering**: door wie?

#### 5. Financieel overzicht
- **Cumulatieve kosten per jaar**
- **Jaarlijkse reservering** die nodig is om alle uitgaven op te vangen
- **Saldo-prognose** van reservefonds
- **Indexering** (kosten stijgen met de inflatie)

#### 6. Bijlagen
- **Foto­bijlagen** van gebreken
- **Tekeningen** en plattegronden
- **Inspectie­logboek** van eerdere keuringen
- **VvE-vergader­notulen** (indien van toepassing)

### Voorbeeld-tabel uit MJOP

| Onderdeel | Conditie | Jaar | Actie | Kosten |
|---|---|---|---|---|
| Voordeuren (4 stuks) | 3 | 2026 | Schilderwerk | € 1.200 |
| Cv-ketel | 4 | 2028 | Vervangen | € 3.500 |
| Bitumineuze dakbedekking | 3 | 2032 | Vervangen (25 j) | € 18.000 |
| Hemelwater­afvoeren | 5 | 2027 | Vervangen direct | € 600 |
| Schilderwerk gevel | 3 | 2030 | Onderhoud­schilderwerk | € 2.500 |

### Uitvoering door professional
- **BORG-erkend bedrijf** of gecertificeerd inspecteur stelt MJOP op
- Kosten MJOP-opname:
  - Particuliere woning: € 250–500
  - Appartementen­complex (VvE): € 1.500–5.000 afhankelijk grootte
- **Actualisatie** elke 5 jaar standaard

### Software en tools
- **MJOP-software** voor VvE-beheerders (VvE-Beheer, Atriensis, etc.)
- **Export naar Excel** voor begroting
- **Onlinetools** voor particuliere woningen (eenvoudige MJOP)

### MJOP bij verbouwing / verkoop
- Bij **renovatie**: bestaande MJOP herbeoordelen, mogelijk maakt nieuwbouw veel reserveringen overbodig
- Bij **verkoop**: MJOP overhandigen aan nieuwe eigenaar (zeker bij VvE-appartement); particuliere woning vaak vrijwillig
- **Energie­label** kan in MJOP worden opgenomen — als basis voor isolatie­verbeteringen
      `.trim(),
    },

    {
      heading: '3 · Vormen van verbouwing',
      toetstermCodes: ['D.1.3'],
      body: `
### Vijf hoofdvormen van verbouwing

#### Renovatie
**Definitie**: het **moderniseren en verbeteren** van een bestaand gebouw zonder de hoofd­functie te veranderen.

**Kenmerken**:
- **Verbetering** van isolatie, installaties, afwerking
- **Behoud** van hoofd­opbouw en functie (woning blijft woning)
- **Verbeterd comfort en energie­zuinigheid** voor bewoners
- Bestaande **constructie­onderdelen** vaak hergebruikt

**Voorbeelden**:
- Cv-ketel vervangen door warmtepomp + isolatie aanbrengen
- Houten kozijnen vervangen door HR++-kunststof
- Badkamer + keuken volledig renoveren
- Nieuwe vloer­afwerking, behangwerk

**Investerings­niveau**: € 30.000–200.000 voor een rijwoning

#### Restauratie
**Definitie**: het **terugbrengen** van een gebouw naar zijn **oorspronkelijke staat** — met respect voor monumentale waarde.

**Kenmerken**:
- **Behoud van uitstraling, materialen en details** zoals oorspronkelijk
- Vaak met **gespecialiseerde technieken** (klassieke metselwerk-bindingen, traditionele pleister, glas-in-lood)
- **Monumenten­status** = vergunning­plichtig + subsidies mogelijk
- Soms ook **technische verbetering** (isolatie achter cultuur­historische gevel)

**Voorbeelden**:
- Monument 17e-eeuwse woning aan grachten — kozijnen vernieuwen in originele detaillering
- Kerktoren — oude metselwerk-restauratie
- Industrieel monument — gevel restaureren

**Investerings­niveau**: aanzienlijk hoger dan reguliere renovatie (€ 100.000+)

#### Groot onderhoud
**Definitie**: **planmatige onderhouds­ronde** met grotere ingrepen — vaak elke 25–40 jaar.

**Kenmerken**:
- **Vervangen** van **uitgewerkte** onderdelen (dak, kozijnen, cv-systeem)
- **Verbeterd installaties** naar moderne standaard
- **Geen functie­wijziging**
- Volgens MJOP gepland

**Voorbeelden**:
- Volledige dakvervanging (na 30–50 jaar)
- Cv-ketel + radiatoren + leidingen vernieuwen
- Gevel schilderwerk + kozijn-vervanging
- Riolering herzien (na 50+ jaar)

**Investerings­niveau**: € 50.000–150.000 voor een appartementen­complex; per woning € 10.000–30.000

#### Herontwikkeling
**Definitie**: **functie­wijziging** van een bestaand pand — gebouw blijft, maar wordt anders gebruikt.

**Kenmerken**:
- **Andere functie** (kantoor → woningen, kerk → appartementen, fabriek → loft)
- **Behoud van constructie**, soms van gevel
- **Volledig nieuw interieur** en installaties
- **Vergunning­plichtig** — bestemmingsplan­wijziging vaak nodig

**Voorbeelden**:
- Oud postkantoor wordt appartementen­complex
- Fabriekshal wordt creatieve werkruimte
- Kerk wordt event­locatie of woningen
- School wordt zorg­centrum

**Investerings­niveau**: meestal € 1.000–3.000/m² (~ nieuwbouw-niveau)

#### Transformatie
**Definitie**: **bredere term** voor functie­wijziging, vaak in stedebouwkundig verband.

**Kenmerken**:
- Vergelijkbaar met herontwikkeling
- Vaak grootschaliger — meerdere gebouwen of hele wijk
- **Stedenbouwkundige aanpak** met collectieve voorzieningen
- Soms gecombineerd met sloop + nieuwbouw

**Voorbeelden**:
- Industriegebied wordt woon­wijk (bv. Hoog Catharijne, Wijnhaven Den Haag)
- Verlaten haven­gebied wordt residentieel kwartier (KNSM-eiland Amsterdam, Lloydkwartier Rotterdam)

**Verschil met herontwikkeling**: transformatie is breder en stedebouwkundig georiënteerd; herontwikkeling is per gebouw.

### Vergelijkende tabel
| Vorm | Functie­wijziging? | Constructie­ingreep | Vergunning | Typische kosten |
|---|---|---|---|---|
| **Renovatie** | Nee | Beperkt | Soms | € 30k–200k |
| **Restauratie** | Nee | Conservatief, traditioneel | Ja (monument) | € 100k+ |
| **Groot onderhoud** | Nee | Gepland, periodiek | Soms | € 10k–150k |
| **Herontwikkeling** | Ja | Vaak ingrijpend | Ja (bestemmingsplan) | € 1.000–3.000/m² |
| **Transformatie** | Ja, vaak gebieds­dekkend | Stedenbouwkundig | Ja, complex | Zeer hoog |
      `.trim(),
    },

    {
      heading: '4 · Vormen van onderhoud',
      toetstermCodes: ['D.1.4'],
      body: `
### Zeven hoofdvormen van onderhoud

#### Planmatig onderhoud
**Definitie**: **vooraf gepland onderhoud** volgens MJOP — onderhoud uitgevoerd in een **gepland tempo** om gebreken te voorkomen.

**Kenmerken**:
- Volgens vooraf gemaakte planning (MJOP)
- **Preventief** — voor problemen ontstaan
- **Kosten­bekend** vooraf, planbaar
- **Gemiddelde** onderhoudskosten over de tijd
- Voorbeelden: 5-jaarlijks schilderwerk, cv-ketel vervangen na 15 jaar

**Voordeel**: voorspelbaar, gemiddelde kosten lager dan crisismanagement.

#### Curatief onderhoud
**Definitie**: **herstel van een gebrek** dat reeds is opgetreden — reactief in plaats van preventief.

**Kenmerken**:
- Reageren op een **klacht** of zichtbaar gebrek
- **Niet vooraf gepland**
- Vaak duurder dan preventief (problemen kunnen escaleren)

**Voorbeelden**:
- Lekkage aan dak repareren na klacht
- Kapot raamglas vervangen
- Storing in cv-installatie verhelpen

#### Achterstallig onderhoud
**Definitie**: onderhoud dat **had moeten worden uitgevoerd maar niet is gedaan** — leidt tot grotere problemen en hogere kosten.

**Kenmerken**:
- Cumulatie van gebreken over de tijd
- Vaak gevolg van financiële beperkingen of nalatige eigenaar
- Bij verkoop: korting op aankoopprijs (zie ook D.1.5)
- Bij appartementen-VvE: vaak juridisch traceerbaar

**Voorbeelden**:
- Schilderwerk dat al 15 jaar niet meer is gedaan
- Funderings­herstel uitgesteld
- Installaties verouderd en onveilig

**Risico voor de eigenaar**:
- **Wettelijk** kan een gemeente verplichten tot herstel
- **Verzekering** kan dekking weigeren als gevolg van achterstallig onderhoud
- **Verkoop**: verplichte mededeling, prijsverlaging

#### Preventief onderhoud
**Definitie**: handelingen om **voorkomen** dat gebreken ontstaan — een specifieke vorm van planmatig onderhoud.

**Kenmerken**:
- **Inspecties**, **schoonmaak**, **smering**, **bijregeling**
- Geen reparatie maar bescherming
- Verlengt levensduur van onderdelen

**Voorbeelden**:
- Jaarlijkse keuring cv-ketel
- Schoonmaken hemelwater­afvoeren
- Smering scharnieren deuren
- Visuele inspectie dak na elke storm

#### Klachten­onderhoud
**Definitie**: **reactief onderhoud** dat wordt uitgevoerd na een **specifieke klacht** van bewoner of gebruiker.

**Kenmerken**:
- Synoniem met curatief in veel gevallen
- Vaak in **huur­situaties** (huurder meldt klacht aan verhuurder)
- **Servicebureau** of **meldpunt** noteert klachten

**Voorbeelden**:
- "De waterkraan lekt"
- "De deur sluit niet meer"
- "Er is condens in mijn slaapkamer"

#### Mutatie­onderhoud
**Definitie**: onderhoud bij **wisseling van huurder** (mutatie) — terug brengen van de woning naar **acceptabele staat** voor nieuwe huurder.

**Kenmerken**:
- Tussen vertrek oude huurder en intrek nieuwe
- **Schoonmaken**, kleine reparaties, **herschilderen**, eventueel **vloerbedekking** vervangen
- Bij sociale verhuur vaak deze gelegenheid om grotere onderhouds­ingrepen uit te voeren
- Goede inspectie­standaard bij verhuur

**Toepassing**: vooral in **huurwoningen** (sociaal of vrije sector); minder bij eigen woningen.

#### Amoveren (sloop)
**Definitie**: **slopen** van een gebouw of onderdelen — laatste stap in de levenscyclus.

**Kenmerken**:
- **Niet meer rendabel** om te onderhouden of renoveren
- Vaak voorafgaand aan **nieuwbouw** op dezelfde plek
- Vergunning­plichtig (omgevings­vergunning)
- **Asbest­inventarisatie** verplicht voor 1994-gebouwen
- **Sloop­afval scheiding** verplicht (bouw- en sloopafval BSA)

**Voorbeelden**:
- Verouderd huis dat gesloopt wordt voor nieuwbouw
- Verlaten industriële gebouwen
- Onveilige constructies (instortings­gevaar)

**Kosten**: € 50–200/m² afhankelijk van constructie en eventueel asbest

### Vergelijkende tabel
| Vorm | Reactie­tijd | Planning | Voorbeeld |
|---|---|---|---|
| **Planmatig** | Vooraf gepland | MJOP | 5-jaarlijks schilderwerk |
| **Curatief** | Reactief | Niet gepland | Lekkage repareren |
| **Achterstallig** | Te laat reactief | Vergeten | Cv-ketel werkt amper |
| **Preventief** | Vooraf | Periodiek | Cv-ketel keuren |
| **Klachten** | Reactief | Klacht-gedreven | Druppelende kraan herstellen |
| **Mutatie** | Periodiek bij verhuur | Bij wisseling | Herschilderen woning |
| **Amoveren** | Eindpunt | Gepland of nood | Sloop oud gebouw |
      `.trim(),
    },

    {
      heading: '5 · Bouwkundig rapport analyseren',
      toetstermCodes: ['D.1.5'],
      body: `
### Wat is een bouwkundig rapport?
Een **bouwkundig rapport** is een professionele inspectie van een gebouw, vaak uitgevoerd bij:
- **Aankoop** van een woning (aankoop­keuring)
- **Verkoop** van een woning (verkoop­opname)
- **VvE-jaarrapport** voor appartementen­complex
- **Verzekeringskeuring** voor opstalverzekering
- **MJOP-opstelling** (zie D.1.1)

### Opbouw van een bouwkundig rapport

#### 1. Algemene gegevens
- Adres, bouwjaar, type, oppervlak
- Datum inspectie + inspecteur (kwalificatie?)
- Eigenaar/opdrachtgever

#### 2. Visuele beoordeling per onderdeel
- **Fundering**
- **Gevels**: metsel­werk, voegwerk, gevelafwerking
- **Kozijnen, ramen, deuren**: hout/aluminium/kunststof, beglazing
- **Dak**: bedekking, hemelwater­afvoer, schoorsteen, dakdoorvoeren
- **Binnen**: muren, vloeren, plafonds, trappen
- **Installaties**: cv, gas, water, elektra, ventilatie
- **Bijzondere onderdelen**: kelder, kruipruimte, garage

#### 3. Per onderdeel rapportage
- **Beschrijving** wat aanwezig is
- **Conditie** (vaak NEN 2767-classificatie)
- **Gebreken** met foto's
- **Termijn** voor onderhoud (acuut, korte termijn, lange termijn)
- **Kosten­raming** (indicatief)

#### 4. Samenvatting / conclusie
- **Algemene staat**: goed / redelijk / matig / slecht
- **Direct herstel nodig**: lijst van urgente reparaties
- **Korte-termijn­onderhoud** (binnen 5 jaar)
- **Lange-termijn­onderhoud** (5–15 jaar)
- **Totale geschatte onderhouds­kosten** komende 10 jaar

#### 5. Bijlagen
- Foto's per gebrek
- Eventueel: rapport asbestinventarisatie, energie­label

### Hoe interpreteer je een bouwkundig rapport?

#### Stap 1: Lees de samenvatting
**Algemene staat**:
- **Goed** = geen ingrepen op korte termijn nodig
- **Redelijk** = enkele onderdelen vragen aandacht binnen 5 j
- **Matig** = veel onderhoud nodig binnen 5 j
- **Slecht** = direct ingrijpen, soms onbewoonbaar

#### Stap 2: Identificeer urgente punten
**Direct herstel nodig** — kosten + impact noteren:
- **Constructieve veiligheid** (fundering, dragende muren) — niet onderhandelbaar
- **Vocht­problemen** (dak­lekkage, opstijgend grondvocht) — leidt tot grote schade
- **Brandveiligheid** (gebreken aan brandwerende constructies)
- **Installatie­veiligheid** (gas, elektriciteit)

#### Stap 3: Schat de totale onderhouds­kosten
- **Korte termijn** (0–5 j): tellen meteen mee in aankoopprijs
- **Middellange termijn** (5–15 j): rekening houden met als toekomstige investering
- **Lange termijn** (> 15 j): minder dringend, vaak weet je nog niet wat je over 20 jaar wilt

#### Stap 4: Analyseer onderhouds­invloeden
**Welke factoren** beïnvloeden de onderhouds­situatie?
- **Bouwjaar**: ouder = vaker meer onderhoud
- **Materiaalkeuze**: hardsteen vs. zandsteen, HR-glas vs. enkel glas
- **Omgeving**: kustklimaat (zout) versus binnenland; stedelijk versus rustig
- **Eerder uitgevoerde renovaties**: kwaliteit + leeftijd ervan
- **Mate van eerder onderhoud**: was de eigenaar zorgvuldig?

### Voorbeeld-analyse

**Casus**: Rijwoning, bouwjaar 1965, opgenomen voor koop

**Conclusies bouwkundig rapport**:
- Algemene staat: redelijk (conditie 3 NEN 2767)
- Cv-ketel uit 1998 (conditie 4) → vervanging binnen 2 j (~€ 5.000)
- Schilderwerk kozijnen verouderd (conditie 4) → onderhoud binnen 1 j (~€ 3.000)
- Geen vocht­problemen in kelder
- Geen asbest geconstateerd (post-1985 woning)
- Lekkage achter dakgoot — direct herstel (~€ 500)

**Analyse voor koper**:
1. **Direct herstel**: lekkage dakgoot — eis dat verkoper dit doet of korting
2. **Korte termijn** (0–2 j): cv-ketel + schilderwerk = ~€ 8.000 — rekening mee houden in budget
3. **Onderhoud­strategie**: ketel-vervanging combineren met overstap naar hybride warmtepomp (subsidies!)
4. **Lange termijn**: standaard renovatie­cyclus (~10 j) is bouwjaar 2030–2035 → MJOP opstellen

**Onderhandeling**: korting van ~€ 8.000 op vraagprijs voor cv + schilderwerk, of laten uitvoeren door verkoper voor levering.
      `.trim(),
    },

    {
      heading: '6 · Instandhoudings­termijn en levensduur',
      toetstermCodes: ['D.1.6', 'D.1.8'],
      body: `
### Wat is instandhoudings­termijn?
**Instandhoudings­termijn** = de **periode** waarin een bouw­element zijn functie kan vervullen, **mits voorzien van regulier onderhoud**.

Niet te verwarren met:
- **Garantietermijn** (juridisch, vaak 6 mnd–10 jaar)
- **Technische levensduur** (zonder onderhoud, totdat het stuk gaat)
- **Economische levensduur** (totdat vervanging financieel/technisch nuttiger is dan onderhoud)

### Drie levens­duur-begrippen

#### Technische levensduur
**Hoe lang het materiaal/onderdeel functioneel kan zijn** voordat het door slijtage, veroudering of mechanische schade het einde bereikt.

**Voorbeelden**:
- HR-isolatieglas: 25–30 jaar
- Bitumineuze dakbedekking: 25–40 jaar
- Cv-ketel HR: 15–25 jaar
- Houten kozijn (geverfd): 25–40 jaar
- Beton-fundering: 100+ jaar
- Bakstenen gevel (goed onderhouden): 100+ jaar

#### Economische levensduur
**Wanneer is vervanging financieel/technisch zinvoller dan blijven onderhouden?**

Factor: bij **veroudering** worden:
- Onderhouds­kosten hoger
- Energie­verbruik hoger (oude installaties zijn inefficiënt)
- Comfort lager
- Vervanging brengt **betere techniek** + subsidies

**Voorbeelden**:
- Cv-ketel: 12–18 jaar — daarna economisch zinvol vervangen door HR of warmtepomp
- Dak: 30–40 j — daarna combineren met isolatie­verbetering
- Kozijnen: 30–40 j — daarna naar HR++ glas

#### Instandhoudings­termijn
**Met goed onderhoud verlengbare termijn** voor de specifieke locatie en gebruik.

**Voorbeelden**:
- Kozijn dat **5-jaarlijks** geschilderd wordt: 50+ jaar
- Houten kozijn **slecht onderhouden**: 20–30 jaar
- Hetzelfde kozijn in **kustklimaat**: 20–25 jaar
- In **binnenland** met goede ventilatie: 60+ jaar

### Invloeden op de instandhoudings­termijn

**1. Materiaal­eigenschappen**:
- Soort hout (hardhout langer dan zachthout)
- Glaskwaliteit (HR++ langer dan enkel glas)
- Isolatie­type (XPS langer dan vezelig in vochtige plek)

**2. Mate van onderhoud**:
- **Regelmatig schilderwerk** verlengt levensduur kozijn met factor 2–3
- **Jaarlijkse keuring cv** voorkomt vroege defecten
- **Schoonhouden hemelwater­afvoer** voorkomt grote vochtschade

**3. Situatie- en weersinvloeden**:
- **Kustklimaat**: zoutmist → meer corrosie van metaal → kortere levensduur
- **Stedelijk klimaat**: fijnstof + zure regen → snellere verwering van zandsteen
- **Industriële omgeving**: zwavel + chemicaliën → versnelde aantasting
- **Schaduw vs zon**: schaduw = vocht­vasthoudend, zon = UV-belasting
- **Hoogte­ligging**: bovenste verdieping meer weerbelasting

**4. Gebruik**:
- **Intensieve woon­situatie** (gezin met kinderen) = meer slijtage
- **Vakantie­woning** = minder slijtage maar wel veroudering
- **Verhuurd appartement** = mutatie-cycli geven specifieke slijtage

**5. Bouw­kwaliteit oorspronkelijk**:
- Zorgvuldig gedetailleerd bouwwerk gaat langer mee
- Goedkope materialen of installatie­fouten verkorten levensduur

### Voorbeeld­tabel typische instandhoudings­termijnen

| Onderdeel | Goed onderhouden | Slecht onderhouden | Kustklimaat |
|---|---|---|---|
| **Bakstenen gevel** | 100+ j | 60–80 j | 80–100 j |
| **Houten kozijn (geverfd)** | 50–60 j | 20–25 j | 25–30 j |
| **Aluminium kozijn** | 40–60 j | 30–40 j | 30–40 j |
| **Bitumineuze dakbedekking** | 25–35 j | 15–20 j | 20–25 j |
| **Cv-ketel HR** | 15–18 j | 8–12 j | n.v.t. |
| **HR++ isolatieglas** | 25–30 j | 20–25 j | 25–30 j |

### Onderhouds­strategie­beslissing
**Vraag**: vervangen of nog blijven onderhouden?

**Criteria voor vervangen**:
- Onderhouds­kosten **stijgen sneller** dan vervangings­kosten over de tijd
- **Energie­verbruik** veel hoger dan moderne alternatieven
- **Veiligheids­risico** (gas­leiding, brand­wering)
- Subsidies maken vervanging **financieel aantrekkelijk**
- **Comfort** of **gebruik** wezenlijk verbeterd

**Criteria voor onderhouden**:
- Onderdeel in **goede staat** (conditie 1–3)
- **Esthetische of monumentale waarde** (geen vervanging mogelijk)
- **Renovatie elders** in pand al hoge kosten — niet alles tegelijk
- **Subsidies pas later** beschikbaar (planning aanpassen)
      `.trim(),
    },

    {
      heading: '7 · Onderhoud per bouwonderdeel',
      toetstermCodes: ['D.1.7'],
      body: `
B.1.7 vraagt om per bouw­onderdeel **wanneer en waarom** onderhoud nodig is.

### Dakbedekking
**Wanneer onderhoud?**
- **Jaarlijkse visuele inspectie** (na elke storm, in herfst voor blad-tijd)
- **Schoonmaken hemelwater­afvoeren** (jaarlijks of bij vol blad)
- **Reparaties** bij eerste teken van lekkage
- **Volledige vervanging** na 25–40 jaar bitumen, 50+ jaar pannen, 100+ jaar leisteen

**Waarom?**
- Voorkomt lekkage → schade aan onderliggende constructie + plafond
- **Algen, mos** beschadigen pannen-coating → versnelde veroudering
- **Verstopte afvoer** = overlopen op gevel → vochtproblemen
- Veiligheid (loslatende pannen na storm)

### Schilderwerk
**Wanneer onderhoud?**
- **Volledig overschilderen** elke 5–7 jaar (buitenwerk)
- **Onderhouds­schilderwerk** elke 2–3 jaar (alleen versleten plekken)
- **Direct herstel** bij blader of houtrot

**Waarom?**
- **Beschermt hout** tegen vocht en UV
- Voorkomt **houtrot** (kostbaar herstel)
- **Esthetisch** — schoon en verzorgd gebouw
- **Behoud van waarde** woning

### Gemetselde gevels
**Wanneer onderhoud?**
- **5-jaarlijkse visuele inspectie**: scheurvorming, voegen, afwerking
- **Voegherstel** elke 25–50 jaar (afhankelijk van klimaat)
- **Hydrofoberen** (waterafstotend maken) elke 10–15 jaar — beperkt waterabsorptie
- **Gevel-reiniging** met biocide elke 5–10 jaar tegen algen en mos
- **Stevigheid metsel­werk** controleren

**Waarom?**
- **Voegen** zijn de zwakste schakel — vocht dringt door slechte voegen
- **Vorstschade** aan poreuze stenen → afsplitsen
- **Algen, mos, vuil** vervuilen het uiterlijk en houden vocht vast
- Behoud structurele integriteit

### Gevelafwerking
**Wanneer onderhoud?**
- **Stuc/pleister­werk**: na 15–25 jaar herzien; reparaties bij scheuren
- **Hout** beklediging: schilderwerk + houtrot-herstel
- **Trespa/HPL of vezelcement**: vrijwel onderhoudsvrij (40+ jaar)
- **Spachtelputz**: 15–30 jaar; opnieuw aanbrengen of in pomp-vorm

**Waarom?**
- Beschermt onderliggend metsel­werk of isolatie
- Cosmetische uitstraling van gebouw
- Veroudering door UV en weer

### Fundering
**Wanneer onderhoud?**
- **Visuele inspectie** elke 5–10 jaar (vooral bij verzakkings­signalen)
- **Funderingsherstel** alleen bij verzakking of houten paalrot
- **Drainage check** in kruipruimte
- **Houten pal­fundering** ouder dan 1970 in Amsterdam/Haarlem/Zaanstreek: speciale inspectie wegens grondwaterpeil­problematiek

**Waarom?**
- Verzakking → scheuren in muren, klemmende deuren, schade aan installaties
- **Houtrot** in palen (boven grondwaterpeil) → onveilige fundering
- **Beton-rot** in betonpalen mogelijk maar zeer zeldzaam

### Installaties
**Wanneer onderhoud?**
- **Cv-ketel**: jaarlijkse keuring, vervangen na 15–25 j
- **Warmtepomp**: jaarlijkse keuring
- **Elektrische installatie**: 5-jaarlijkse inspectie (NEN 1010), uitbreiden bij groot­onderhoud
- **Riolering**: 25–50 jaar levensduur; reinigen bij verstopping, vervangen bij scheuren
- **Waterleidingen**: 30–50 j; vervangen bij lood (sinds 1976 verboden), kalk, lekkage
- **Ventilatie­systeem**: filters elke 6 mnd, hele systeem 15–20 j

**Waarom?**
- **Veiligheid** (gas, elektriciteit, brand)
- **Energie­efficiëntie** (oude installaties verbruiken veel meer)
- **Comfort** en gezondheid (ventilatie, water­kwaliteit)
- Wettelijke eisen (gas­keuring, elektra-keuring)

### Bijzondere aandachts­punten

**Bij verkoop**:
- **Energie­label** is verplicht (sinds 2008)
- **Asbestinventarisatie** voor 1994-panden bij verbouwing
- **Loodgieter­certificaat** voor gas-installatie (jaarlijks)

**Bij verhuur**:
- **Energie­zuiniger maken** is wettelijk gestimuleerd (Wet betaalbare huur 2024)
- **Onderhouds­plicht verhuurder** is groot — anders huurverlaging mogelijk

**Bij appartementen­complex (VvE)**:
- Onderhoud van **gemeenschappelijke delen** is VvE-verant­woording
- **Privé-deel** is eigen verantwoording (binnenkant woning, eigen installaties)
- Geschil over scheiding → splitsing­akte raadplegen
      `.trim(),
    },

    {
      heading: '8 · Consequenties van verbouwingen',
      toetstermCodes: ['D.1.9'],
      body: `
B.1.9 vraagt naar consequenties van **vier specifieke verbouwings­ingrepen** — vaak gevraagd door (toekomstige) bewoners en relevant voor makelaars.

### Keuken­renovatie

**Bouwkundige consequenties**:
- **Sloop** bestaande keuken (vaak ~1 week werk)
- **Leiding­wijzigingen**: waterleidingen, afvoer, gas (indien aanwezig), elektra → vergt vakman
- **Vergaande elektra-uitbreiding**: inductie­kookplaat (~7,5 kW) vergt eigen 16 A groep + perilex; modern: oven + magnetron eigen groep
- **Ventilatie**: afzuig­kap (recirculatie of naar buiten); bij Systeem D-balansventilatie moet WTW-balans hersteld
- **Vloer**: aanpassen voor vloer­afwerking, ondergrond vlak maken
- **Wand**: tegelwerk bij spatzones, eventueel doorbraak naar woonkamer

**Wat te verwachten**:
- Kosten: € 8.000–40.000 voor compleet middenklasse, luxe € 50.000+
- Duur: 3–8 weken
- Tijdelijke voorzieningen (mobiele keuken) nodig
- Mogelijke vergunning bij doorbraak naar woonkamer (in monumenten)

**Bij verkoop**:
- Moderne keuken = grote pluspunt voor potentiele kopers
- Documenten over installatie + garanties overdragen
- Energie­label kan verhogen door inductie + warmtepompboiler

### Badkamer­renovatie

**Bouwkundige consequenties**:
- **Sloop** oude badkamer (compleet leeg, ook tegels en vloer)
- **Leidingen**: waterleidingen + afvoer + ontspanningsleiding mogelijk vernieuwen
- **Ventilatie**: mechanische afzuig­ventiel of WTW-aansluiting verbeteren (Bbl 50 m³/h afzuiging)
- **Elektra**: aparte groep voor wasmachine, droger; verwarming (handdoek­radiator); LED-spots
- **Vloer**: nieuwe waterdichte ondervloer + cement-dekvloer; helling naar afvoer (1–2 % naar douche)
- **Wand**: gips-of cement-pleister + tegels; eventueel inloopdouche zonder drempel
- **Geluidsisolatie**: aandacht voor naburige slaapkamer (sanitair geluid)

**Wat te verwachten**:
- Kosten: € 10.000–35.000 voor middenklasse, luxe € 50.000+
- Duur: 4–10 weken
- Tijdelijke douche- of vluchtoplossing nodig

**Bbl-eisen badkamer renovatie**:
- **Ventilatie**: min. 14 l/s = 50 m³/h afzuig­capaciteit
- **Waterslot** sifons min. 30 mm (50 mm bij toilet)
- **Antislip** vloer: R 10 + B (DIN 51097 voor blote voeten op natte vloer)
- **Bij doucheruimte**: water­dichte detaillering verplicht

### Verwijderen van een wand

**Eerste vraag**: is het een **dragende** of **niet-dragende** wand?

**Niet-dragende wand verwijderen** (binnenwand zonder draag­functie):
- **Eenvoudig**: meestal gipsblokken, cellenbeton, of metal-stud met gipsplaat
- **Kosten**: € 500–2.500 (afhankelijk grootte + afwerking)
- **Vergunning­vrij** als woning niet monumentaal is
- **Aandachts­punten**:
  - Leidingen door de wand (elektra, waterleiding, ventilatie­kanaal)
  - Wand­afwerking aansluitend op aanliggende muren
  - Eventueel **geluidsoverdracht** verandert (open ruimte)

**Dragende wand verwijderen**:
- **Constructeur verplicht** consulteren — kan instorting veroorzaken!
- **Vervangings­oplossing nodig**: stalen H-balk of IPE-profiel boven de doorgang, of houten balken (afhankelijk overspanning)
- **Vergunning­plicht**: omgevings­vergunning bij elke aanpassing aan dragende constructie
- **Kosten**: € 5.000–25.000 (afhankelijk overspanning, etage, hoeveelheid versterking)
- **Aandachts­punten**:
  - **Berekening door constructeur** verplicht
  - **Werk door erkend bedrijf**
  - **Belasting boven** (verdieping, dak) overdragen naar fundering
  - Mogelijke fundering­versterking nodig (incidenteel)

**Hoe weet je of een wand dragend is?**
- **Buitenmuren** zijn vrijwel altijd dragend
- **Woningscheidende wanden** in rijwoningen (de wand tussen jouw en buren) altijd dragend + woningscheidend
- **Binnenwanden recht boven en onder** elkaar door meerdere verdiepingen: dragend
- **Op tekeningen**: vaak dikker dan niet-dragende wanden
- **Bij twijfel**: bouwkundige raadplegen

### Uitbouw op de begane grond

**Wat is het?**
**Aanbouwen** van extra ruimte aan de woning, vaak aan de tuinzijde — een extra kamer, vergrote keuken, of serre.

**Bouwkundige consequenties**:
- **Fundering**: nieuwe fundering verbonden met bestaande (poeren of strookfundering)
- **Aansluiting** op bestaande woning: gevel openen, leidingen doortrekken
- **Dak**: extra dak (plat of hellend) aansluit op bestaande
- **Vloer**: beganegrondvloer (beton met isolatie + vloerverwarming)
- **Wanden**: vaak veel glas (lichtinval naar achterzijde verbeteren)
- **Elektra, water, ventilatie**: doortrekken
- **Ventilatie­openingen** voor kruipruimte indien aanwezig

**Vergunning**:
- **Vergunning­plichtig** bij meeste situaties (omgevings­vergunning)
- **Vergunningsvrij** mogelijk binnen specifieke regels (kleine uitbouw, bepaalde afstanden tot perceel­grens)
- **Bestemmingsplan** check: mag op deze locatie uitgebreid worden?
- **Welstand**: vooral in beschermde gezichten of historische wijken

**Wat te verwachten**:
- Kosten: € 30.000–150.000 voor 15–30 m² (uitbouw woonkamer)
- Duur: 3–6 maanden
- **Tuin** vermindert (perceelruimte)
- **Energie­label** kan veranderen (uitbouw heeft eigen isolatie)

**Aanvullende overwegingen**:
- **Lichtinval** voor aangrenzende kamer kan verminderen (uitbouw blokkeert daglicht)
- **Verkoopbaarheid** verbeterd door extra ruimte
- **WOZ-waarde** stijgt → hogere belasting

### Voor de makelaar
- Bij verkoop met recent gerealiseerde verbouwing: **kennis hebben** van wat er is gebeurd en welke vergunningen
- **Tekeningen en oplevering­papieren** opvragen
- **Eventuele welstand­problemen** vermelden
- Bij **doorbraak** van dragende wand: vraag naar **berekening van constructeur** — anders mogelijke onveilige situatie
- Bij koper die wil verbouwen: aandacht voor **bestemmingsplan** en **welstand­eisen** in de wijk
      `.trim(),
    },
  ],

  toetstermen: [
    {
      code: 'D.1.1',
      text: 'Benoemt de begrippen van een meerjaren­onderhoudsplan (MJOP): NEN 2767 (conditiemetingen), reserveringen onderhoud en bijdrage VvE.',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'D.1.2',
      text: 'Legt de opbouw van een MJOP uit.',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
    {
      code: 'D.1.3',
      text: 'Legt de verschillen uit van de vormen van verbouwing: renovatie, restauratie, groot onderhoud, herontwikkeling en transformatie.',
      niveau: 'BT1',
      bloom: 'Begrip',
    },
    {
      code: 'D.1.4',
      text: 'Legt de verschillende vormen van onderhoud uit: planmatig, curatief, achterstallig, preventief, klachten­onderhoud, mutatie­onderhoud en amoveren.',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
    {
      code: 'D.1.5',
      text: 'Legt de conclusies van een bouwkundig rapport uit en kan dit analyseren naar onderhoud en invloeden van onderhoud.',
      niveau: 'BT2',
      bloom: 'Analyseren',
    },
    {
      code: 'D.1.6',
      text: 'Verklaart de instandhoudings­termijnen en/of de technische en economische levensduur van constructies en installaties.',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
    {
      code: 'D.1.7',
      text: 'Licht toe wanneer en waarom onderhoud gepleegd dient te worden aan dakbedekking, schilderwerk, gemetselde gevels, gevelafwerking, fundering en installaties.',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
    {
      code: 'D.1.8',
      text: 'Legt het begrip instandhoudings­termijn en de daarop van toepassing zijnde invloeden uit (materiaal­eigenschappen, mate van onderhoud, situatie- en weersinvloeden, gebruik e.d.).',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
    {
      code: 'D.1.9',
      text: 'Legt de consequenties uit van een keuken- en/of badkamer­verbouwing, het verwijderen van dragende of niet-dragende wanden en het aanbrengen van een uitbouw op de begane grond.',
      niveau: 'BT2',
      bloom: 'Begrip',
      metDrawing: true,
    },
  ],

  questions: [
    // D.1.1 (3)
    {
      id: 'D1-1-a',
      toetstermCode: 'D.1.1',
      type: 'mc',
      prompt: 'Wat is een **MJOP**?',
      options: [
        'Een verzekerings­polis',
        'Meerjaren­OnderhoudsPlan — document per gebouw met welk onderhoud uitgevoerd moet worden, wanneer, wat het kost en welke reserveringen nodig zijn (vaak 10–25 jaar vooruit); wettelijk verplicht voor VvE\'s sinds 2018',
        'Een gemeentelijke vergunning',
        'Een type bouw­tekening',
      ],
      correctIndex: 1,
      explanation:
        'MJOP = Meerjaren­OnderhoudsPlan: document dat per gebouw aangeeft welk onderhoud uitgevoerd moet worden (welk onderdeel, wanneer, wat kost het), gebaseerd op conditiemetingen (NEN 2767). Doel: planmatig onderhoud, financieel inzicht, reserveringen, voorkomen achterstallig onderhoud. Wettelijk verplicht voor VvE\'s sinds 2018. Wordt opgesteld door BORG-erkend bedrijf of gecertificeerd inspecteur.',
    },
    {
      id: 'D1-1-b',
      toetstermCode: 'D.1.1',
      type: 'mc',
      prompt: 'Wat is **NEN 2767**?',
      options: [
        'Een type wapeningstaal',
        'Norm voor conditiemetingen aan gebouwen — onafhankelijke inspecteur beoordeelt bouw­delen op 6-puntsschaal (1 uitstekend tot 6 zeer slecht); basis voor planmatig onderhoud',
        'Een dak­bedekkings­standaard',
        'Een waterkwaliteitsnorm',
      ],
      correctIndex: 1,
      explanation:
        'NEN 2767 is de Nederlandse norm voor conditiemetingen aan gebouwen. Een gecertificeerd inspecteur beoordeelt elk bouw­deel op een 6-puntsschaal: 1=uitstekend (als nieuw), 2=goed, 3=redelijk, 4=matig, 5=slecht (niet langer fungerend), 6=zeer slecht (levensgevaarlijk). Per onderdeel wordt type gebrek, risico en kosten­raming beschreven. Basis voor MJOP en onderhouds­planning.',
    },
    {
      id: 'D1-1-c',
      toetstermCode: 'D.1.1',
      type: 'mc',
      prompt: 'Hoeveel moet een **VvE wettelijk** jaarlijks reserveren in het reservefonds (sinds 2018)?',
      options: [
        '0,1 % van de herbouwwaarde',
        '0,5 % van de herbouwwaarde of bedrag volgens actuele MJOP, indien hoger',
        '5 % van de herbouwwaarde',
        '10 % van de huurinkomsten',
      ],
      correctIndex: 1,
      explanation:
        'Sinds 2018 (Wet verbetering functioneren VvE) is voor elke VvE verplicht: jaarlijkse reservering van minimaal **0,5 % van de herbouwwaarde** in het reservefonds, **óf het bedrag dat volgens een actueel MJOP nodig is** (indien dit hoger is). Dit voorkomt achterstallig onderhoud en plotselinge grote uitgaven. VvE-bijdrage wordt berekend op basis van breukdelen (apparte­ments­index) in de splitsings­akte.',
    },

    // D.1.2 (2)
    {
      id: 'D1-2-a',
      toetstermCode: 'D.1.2',
      type: 'mc',
      prompt: 'Wat zit er **per bouw­deel** in een MJOP?',
      options: [
        'Alleen een algemene staat-aanduiding',
        'Beschrijving van locatie en materialen, conditie­score (NEN 2767), type gebreken met foto\'s, risico-inschatting, aanbevolen actie, jaar van uitvoering en geschatte kosten',
        'Alleen de leeftijd',
        'Alleen de aankoopprijs',
      ],
      correctIndex: 1,
      explanation:
        'Per bouw­deel in MJOP: (1) beschrijving + locatie + materialen; (2) conditie­score volgens NEN 2767 (1–6); (3) type gebreken met foto\'s als bewijs; (4) risico-inschatting voor de komende jaren; (5) aanbevolen actie (reparatie, vervanging, niets doen); (6) jaar van uitvoering binnen MJOP-periode; (7) geschatte kosten (excl. en incl. BTW). Voorbeeld: "Voordeuren conditie 3 — schilderwerk in 2026, kosten € 1.200".',
    },
    {
      id: 'D1-2-b',
      toetstermCode: 'D.1.2',
      type: 'mc',
      prompt: 'Hoe vaak wordt een MJOP **geactualiseerd**?',
      options: [
        'Eens per 20 jaar',
        'Standaard elke 5 jaar — om actuele conditie en kosten­indexering bij te houden',
        'Alleen bij verkoop',
        'Maandelijks',
      ],
      correctIndex: 1,
      explanation:
        'Standaard actualisatie elke 5 jaar — om de actuele conditie van bouw­delen te beoordelen, gebrekkige werk uit te voeren, kostprijzen te indexeren (inflatie), en nieuwe ontwikkelingen mee te nemen (bv. subsidies, energietransitie). Tussentijds wordt bij grote ingrepen vaak ook een tussenactualisatie gemaakt. Belangrijk voor VvE\'s om jaarlijks te bespreken op de ALV.',
    },

    // D.1.3 (3)
    {
      id: 'D1-3-a',
      toetstermCode: 'D.1.3',
      type: 'mc',
      prompt: 'Wat is het verschil tussen **renovatie** en **restauratie**?',
      options: [
        'Synoniemen',
        'Renovatie = moderniseren en verbeteren zonder functie­wijziging (nieuwe installaties, isolatie, afwerking). Restauratie = terugbrengen naar oorspronkelijke staat — met respect voor monumentale waarde + gespecialiseerde technieken',
        'Renovatie alleen voor woningen, restauratie voor utiliteit',
        'Restauratie is goedkoper dan renovatie',
      ],
      correctIndex: 1,
      explanation:
        'Belangrijk onderscheid! **Renovatie**: moderniseren en verbeteren zonder functie­wijziging — nieuwe installaties, isolatie aanbrengen, afwerking opnieuw. Modern, gericht op comfort. **Restauratie**: terugbrengen naar oorspronkelijke staat met behoud van uitstraling, materialen en details — vooral voor monumenten. Gespecialiseerde technieken (klassiek metsel­werk, traditionele pleister, glas-in-lood). Vaak vergunningsplichtig + monumenten­subsidies mogelijk. Restauratie is veel duurder dan reguliere renovatie.',
    },
    {
      id: 'D1-3-b',
      toetstermCode: 'D.1.3',
      type: 'mc',
      prompt: 'Wat is **herontwikkeling** in vergelijking met renovatie?',
      options: [
        'Renovatie maar dan groter',
        'Functie­wijziging van een bestaand pand — gebouw blijft, maar wordt anders gebruikt (kantoor → woningen, kerk → appartementen, fabriek → loft); vergunning­plichtig met bestemmings­plan-wijziging',
        'Sloop en nieuwbouw',
        'Renovatie van een wijk',
      ],
      correctIndex: 1,
      explanation:
        'Herontwikkeling = functie­wijziging van een bestaand pand. Gebouw blijft (vaak met behoud van constructie en gevel), maar krijgt andere bestemming. Voorbeelden: oud postkantoor wordt appartementen­complex; fabriekshal wordt creatieve werkruimte; kerk wordt event­locatie; school wordt zorg­centrum. Vergt vergunning + meestal bestemmingsplan-wijziging. Renovatie behoudt functie; herontwikkeling verandert deze.',
    },
    {
      id: 'D1-3-c',
      toetstermCode: 'D.1.3',
      type: 'mc',
      prompt: 'Wat is het verschil tussen **herontwikkeling** en **transformatie**?',
      options: [
        'Synoniemen',
        'Herontwikkeling = per gebouw functie­wijziging. Transformatie = bredere term, vaak in stedebouwkundig verband — meerdere gebouwen of hele wijk, met collectieve voorzieningen (bv. industriegebied wordt woon­wijk)',
        'Transformatie is alleen voor woningen',
        'Herontwikkeling is goedkoper',
      ],
      correctIndex: 1,
      explanation:
        'Herontwikkeling = per gebouw functie­wijziging — kantoor naar woningen, fabriek naar loft. Transformatie = bredere stedenbouwkundige aanpak — meerdere gebouwen of hele wijk wordt heringericht (industriegebied wordt woon­wijk, verlaten haven­gebied wordt residentieel kwartier). Voorbeelden van transformatie in NL: Hoog Catharijne Utrecht, KNSM-eiland Amsterdam, Lloyd­kwartier Rotterdam. Vaak gecombineerd met sloop + nieuwbouw.',
    },

    // D.1.4 (4)
    {
      id: 'D1-4-a',
      toetstermCode: 'D.1.4',
      type: 'mc',
      prompt: 'Wat is **planmatig onderhoud**?',
      options: [
        'Onderhoud op verzoek',
        'Vooraf gepland onderhoud volgens MJOP — uitgevoerd in een gepland tempo om gebreken te voorkomen; preventief, kosten­bekend, planbaar',
        'Reparatie na klacht',
        'Onderhoud bij verhuiswisseling',
      ],
      correctIndex: 1,
      explanation:
        'Planmatig onderhoud = vooraf gepland onderhoud volgens MJOP — uitgevoerd op vaste momenten in vooraf bepaalde tempo om gebreken te voorkomen. Preventief karakter, kosten zijn bekend en planbaar. Voordeel: gemiddelde onderhouds­kosten lager dan crisismanagement. Voorbeelden: 5-jaarlijks schilderwerk, cv-ketel vervangen na 15 jaar. Tegenstelling: curatief onderhoud (reactief).',
    },
    {
      id: 'D1-4-b',
      toetstermCode: 'D.1.4',
      type: 'mc',
      prompt: 'Wat is **achterstallig onderhoud**?',
      options: [
        'Onderhoud dat te vroeg is uitgevoerd',
        'Onderhoud dat had moeten worden uitgevoerd maar niet is gedaan — leidt tot cumulatie van gebreken, hogere kosten op termijn, verzekerings­problemen en korting bij verkoop',
        'Toekomstig onderhoud',
        'Onderhoud waar geen reservering voor is',
      ],
      correctIndex: 1,
      explanation:
        'Achterstallig onderhoud = onderhoud dat had moeten worden gedaan maar uitgesteld is — gebreken cumuleren, leiden tot grotere problemen en hogere kosten op termijn. Oorzaken: financiële beperkingen, nalatige eigenaar. Gevolgen: gemeente kan handhaven, verzekering kan dekking weigeren, bij verkoop verplichte mededeling + prijs­korting. Bij appartementen-VvE\'s vaak juridisch traceerbaar.',
    },
    {
      id: 'D1-4-c',
      toetstermCode: 'D.1.4',
      type: 'mc',
      prompt: 'Wat is **mutatie­onderhoud**?',
      options: [
        'Onderhoud aan veranderlijke onderdelen',
        'Onderhoud bij wisseling van huurder — terug brengen van de woning naar acceptabele staat voor nieuwe huurder; schoonmaken, kleine reparaties, herschilderen, mogelijk vloer­bedekking vervangen',
        'Onderhoud aan mutaties in installaties',
        'Genetisch onderhoud',
      ],
      correctIndex: 1,
      explanation:
        'Mutatie­onderhoud = onderhoud uitgevoerd bij wisseling van huurder (mutatie). Tussen vertrek oude huurder en intrek nieuwe wordt de woning teruggebracht naar acceptabele staat. Activiteiten: schoonmaken, kleine reparaties, herschilderen, eventueel vloer­bedekking vervangen. Bij sociale verhuur vaak goede gelegenheid voor grotere onderhouds­ingrepen. Vooral in huurwoningen — bij eigen woningen niet relevant.',
    },
    {
      id: 'D1-4-d',
      toetstermCode: 'D.1.4',
      type: 'mc',
      prompt: 'Wat is **amoveren**?',
      options: [
        'Een esthetische verbouwing',
        'Slopen van een gebouw of onderdelen — laatste stap in de levenscyclus; vergunning­plichtig (omgevings­vergunning), asbest­inventarisatie verplicht bij pre-1994 gebouwen, sloop-afval scheiden',
        'Een type renovatie',
        'Verkoop van een gebouw',
      ],
      correctIndex: 1,
      explanation:
        'Amoveren = slopen van een gebouw of onderdelen — laatste stap in de levenscyclus van een bouwwerk. Vergunning­plichtig (omgevings­vergunning). Voor gebouwen vóór 1994 verplicht asbest­inventarisatie. Sloop-afval moet gescheiden afgevoerd worden (bouw- en sloopafval BSA). Kosten € 50–200/m² afhankelijk van constructie en eventueel asbest. Vaak voorafgaand aan nieuwbouw op dezelfde plek.',
    },

    // D.1.5 (3)
    {
      id: 'D1-5-a',
      toetstermCode: 'D.1.5',
      type: 'mc',
      prompt: 'Welk onderdeel van een bouwkundig rapport heeft de **hoogste prioriteit** voor de koper?',
      options: [
        'Cosmetische gebreken',
        'Direct herstel nodig: constructieve veiligheid, vocht­problemen (lekkages), brandveiligheid, installatie­veiligheid (gas/elektra) — niet-onderhandelbare urgente reparaties',
        'Toekomstig schilderwerk',
        'Het bouwjaar',
      ],
      correctIndex: 1,
      explanation:
        'Hoogste prioriteit: **direct herstel nodig** — vooral constructieve veiligheid (fundering, dragende muren), vocht­problemen (dak­lekkage, opstijgend grondvocht — leidt tot grote schade), brandveiligheid (defecte brand­werende constructies), installatie­veiligheid (gas, elektriciteit). Deze zijn niet-onderhandelbaar — moet hersteld worden door verkoper of korting krijgen. Daarna korte-termijn­onderhoud (0–5 j), dan lange-termijn (5–15 j).',
    },
    {
      id: 'D1-5-b',
      toetstermCode: 'D.1.5',
      type: 'mc',
      prompt: 'Welke **invloeden op onderhoud** beoordeel je bij analyse van een bouwkundig rapport?',
      options: [
        'Alleen de leeftijd van het pand',
        'Bouwjaar, materiaalkeuze, omgeving (kust vs binnen­land), eerder uitgevoerde renovaties, mate van eerder onderhoud (was de eigenaar zorgvuldig?), klimaat en gebruik',
        'Alleen de oppervlakte',
        'De koopprijs',
      ],
      correctIndex: 1,
      explanation:
        'Bij analyse let je op meerdere onderhouds­invloeden: (1) bouwjaar — ouder vergt vaker meer onderhoud; (2) materiaal­keuze (hardsteen vs zandsteen, HR-glas vs enkel); (3) omgeving (kustklimaat is zwaarder dan binnenland, stedelijk gemiddeld); (4) eerdere renovaties — kwaliteit + leeftijd ervan; (5) mate van eerder onderhoud — zorgvuldige vs nalatige eigenaar; (6) huidig gebruik — gezin vs alleenstaande, eigenaar vs huurder.',
    },
    {
      id: 'D1-5-c',
      toetstermCode: 'D.1.5',
      type: 'mc',
      prompt: 'Bij **conditie 5** volgens NEN 2767 (in een bouwkundig rapport) is de juiste actie:',
      options: [
        'Niets doen, conditie 5 is goed',
        'Direct vervangen of repareren — onderdeel functioneert niet langer naar behoren, gevaar of grote schade dreigt',
        'Plannen voor over 10 jaar',
        'Conditie 5 bestaat niet',
      ],
      correctIndex: 1,
      explanation:
        'NEN 2767 6-puntsschaal: 1=uitstekend, 2=goed, 3=redelijk (planmatig onderhoud), 4=matig (onderhoud uitvoeren), 5=slecht (niet langer fungerend → **direct vervangen of repareren**), 6=zeer slecht (levensgevaarlijk → onmiddellijk handelen). Conditie 5 of 6 zijn rode vlaggen bij aankoop — moeten onmiddellijk worden hersteld of grote korting op aankoopprijs. Conditie 1-2 zijn ideaal, 3 normaal, 4 oppassen.',
    },

    // D.1.6 (3)
    {
      id: 'D1-6-a',
      toetstermCode: 'D.1.6',
      type: 'mc',
      prompt: 'Wat is het verschil tussen **technische** en **economische levensduur**?',
      options: [
        'Synoniemen',
        'Technische levensduur = hoe lang onderdeel functioneel kan zijn voor het door slijtage faalt. Economische levensduur = wanneer vervanging financieel/technisch zinvoller is dan blijven onderhouden (vaak korter dan technisch)',
        'Economische levensduur is altijd langer',
        'Technische is voor gebouwen, economische voor mensen',
      ],
      correctIndex: 1,
      explanation:
        'Belangrijk onderscheid! Technische levensduur = de periode waarin het onderdeel functioneel kan blijven voordat het door slijtage of veroudering faalt (bv. cv-ketel HR: 15–25 jaar). Economische levensduur = wanneer het financieel/technisch zinvoller is om te vervangen dan blijven onderhouden (vaak korter — bv. cv-ketel 12–18 jaar door stijgende onderhouds­kosten, hoger energie­verbruik, beschikbare subsidies voor warmtepomp).',
    },
    {
      id: 'D1-6-b',
      toetstermCode: 'D.1.6',
      type: 'mc',
      prompt: 'Wat is **instandhoudings­termijn**?',
      options: [
        'De wettelijke garantieperiode',
        'De periode waarin een bouw­element zijn functie kan vervullen, mits voorzien van regulier onderhoud — verlengbaar door goed onderhoud, korter door slecht onderhoud of slechte omstandigheden',
        'De levensduur zonder onderhoud',
        'Een synoniem voor garantie',
      ],
      correctIndex: 1,
      explanation:
        'Instandhoudings­termijn = de periode waarin een bouw­element zijn functie kan vervullen, **mits voorzien van regulier onderhoud**. Verlengbaar door zorgvuldig onderhoud (bv. een geschilderd kozijn elke 5 jaar kan 50+ jaar mee); korter bij slecht onderhoud (kan binnen 20 jaar verloren gaan). Niet te verwarren met garantietermijn (juridisch, vaak 6 mnd–10 j) of technische levensduur (zonder onderhoud).',
    },
    {
      id: 'D1-6-c',
      toetstermCode: 'D.1.6',
      type: 'mc',
      prompt: 'Een houten kozijn in een **kustklimaat** heeft een kortere instandhoudings­termijn dan in het binnen­land. Waarom?',
      options: [
        'Kust heeft minder zon',
        'Zoutmist + hogere vochtigheid in kustklimaat versnelt aantasting van het hout en verfwerk; bovendien meer wind en regen → vaker schade aan kit en afdichtingen; verkort levensduur met ~30–50 %',
        'In kustgebieden wordt minder onderhouden',
        'Kust is goedkoper bouwgrond',
      ],
      correctIndex: 1,
      explanation:
        'Kustklimaat verkort onderhoud­termijnen door: (1) zoutmist die kit, verfwerk en metalen onderdelen aantast; (2) hogere relatieve luchtvochtigheid → meer vochtbelasting hout; (3) sterker en frequenter wind + regen → grotere belasting op kit en afdichtingen; (4) UV-belasting niet hoger maar gecombineerd met zoutmist destructiever. Hetzelfde kozijn dat 50+ jaar mee gaat in binnenland kan in kustklimaat 25–30 jaar. Aanbevolen: vaker onderhoud + duurzamere materialen (aluminium, RVS-bevestiging, hardhout).',
    },

    // D.1.7 (3)
    {
      id: 'D1-7-a',
      toetstermCode: 'D.1.7',
      type: 'mc',
      prompt: 'Hoe vaak moet **buiten-schilderwerk** worden vernieuwd voor optimale houtbescherming?',
      options: [
        'Eenmalig bij oplevering — verf gaat eeuwig mee',
        'Volledig overschilderen elke 5–7 jaar; onderhoud­schilderwerk op versleten plekken elke 2–3 jaar; direct herstel bij bladdering — voorkomt vocht­inwerking en houtrot',
        'Pas na 30 jaar',
        'Elk jaar volledig',
      ],
      correctIndex: 1,
      explanation:
        'Buiten-schilderwerk vergt onderhoud elke 5–7 jaar (volledig overschilderen) + tussentijds onderhoud­schilderwerk op versleten plekken elke 2–3 jaar. Direct herstel bij bladdering — verfschilfers laten vocht het hout in. Doel: bescherming tegen vocht en UV → voorkomen van houtrot (kostbaar herstel volgens Vakgroep Restauratie). Bij verwaarlozing kan houtrot ontstaan binnen 2–5 jaar. Goed onderhouden kozijn gaat 50+ jaar mee.',
    },
    {
      id: 'D1-7-b',
      toetstermCode: 'D.1.7',
      type: 'mc',
      prompt: 'Wat is de **belangrijkste onderhouds­taak** voor een dakbedekking?',
      options: [
        'Het schilderen',
        'Jaarlijkse visuele inspectie + schoonmaken hemelwater­afvoeren — voorkomt lekkage, schade aan onderliggende constructie en plafond; mossen/algen verwijderen voor pannen-coating bescherming',
        'Aluminiumfolie aanbrengen',
        'Wassen met zeep',
      ],
      correctIndex: 1,
      explanation:
        'Voor dakbedekking is de belangrijkste taak: jaarlijkse visuele inspectie (na elke storm en in herfst voor blad-tijd) + schoonmaken hemelwater­afvoeren. Dit voorkomt lekkage (escaleert snel naar plafond­schade), mos/algen­opbouw die de coating van pannen beschadigen, verstopte afvoeren die overlopen op gevel (vochtproblemen). Volledige vervanging: 25–40 jaar bitumen, 50+ jaar pannen, 100+ jaar leisteen.',
    },
    {
      id: 'D1-7-c',
      toetstermCode: 'D.1.7',
      type: 'mc',
      prompt: 'Voor een **gemetselde gevel** zijn de voegen de belangrijkste onderhoudpunt. Hoe vaak moeten ze worden vernieuwd?',
      options: [
        'Maandelijks',
        'Voegherstel elke 25–50 jaar (afhankelijk klimaat), eventueel hydrofoberen elke 10–15 jaar; voegen zijn de zwakste schakel — vocht dringt door slechte voegen → afsplitsen stenen bij vorst',
        'Nooit nodig',
        'Eens per jaar',
      ],
      correctIndex: 1,
      explanation:
        'Voegen in gemetselde gevel: vernieuwen elke 25–50 jaar (afhankelijk van klimaat). Hydrofoberen (waterafstotend maken) elke 10–15 jaar verlengt levensduur voegen. Voegen zijn de zwakste schakel — vocht dringt door slechte voegen → versnelde verwering. Bij vorst kan water in voegen vriezen en stenen afsplitsen. Visuele 5-jaarlijkse inspectie: voegherstel waar lokaal nodig + gevel reinigen elke 5–10 jaar tegen algen en mos.',
    },

    // D.1.8 (2)
    {
      id: 'D1-8-a',
      toetstermCode: 'D.1.8',
      type: 'mc',
      prompt: 'Welke factor heeft de **grootste invloed** op de instandhoudings­termijn van bouw­elementen?',
      options: [
        'De prijs',
        'Mate van onderhoud — regelmatig onderhoud verlengt levensduur met factor 2–3; nalatigheid leidt tot vroege defecten en grote vervolgschade',
        'De kleur',
        'De architect',
      ],
      correctIndex: 1,
      explanation:
        'De mate van onderhoud heeft de grootste invloed op instandhoudings­termijn. Regelmatig onderhoud (volgens MJOP) verlengt de levensduur van bouw­elementen aanzienlijk — kozijnen 25 jaar of 50+ jaar afhankelijk van schilderwerk-frequentie. Nalatigheid leidt tot vroege defecten en grote vervolgschade (lekkage → schimmel + houtrot; verstopte goot → vochtproblemen gevel). Investering in onderhoud is altijd minder kostbaar dan curatieve ingrepen.',
    },
    {
      id: 'D1-8-b',
      toetstermCode: 'D.1.8',
      type: 'mc',
      prompt: 'Voor een appartement op de **bovenste verdieping** is welke factor extra van invloed?',
      options: [
        'Lagere isolatie-eisen',
        'Grotere weersbelasting — meer wind, regen, zon (UV); dakaansluitingen extra kwetsbaar; in moderne appartementen ook minder geluidsoverlast maar wel meer thermische schommelingen',
        'Goedkopere installatie',
        'Geen verschil met andere verdiepingen',
      ],
      correctIndex: 1,
      explanation:
        'Bovenste verdieping heeft **grotere weersbelasting**: meer wind, regen en UV-straling. Dakaansluitingen (rond schoorsteen, dakkapel, dakraam) zijn extra kwetsbaar voor lekkage. Thermisch: minder buurman boven = meer warmte­verlies in winter, meer opwarming in zomer. Acoustisch: minder loop­geluid van boven, maar wel meer wind-geluid. Bij MJOP: prioriteit voor dakaansluitingen en isolatie op deze verdieping. Voor bouwkundig rapport: extra aandacht voor vocht­doorslag van dak naar plafond.',
    },

    // D.1.9 (4)
    {
      id: 'D1-9-a',
      toetstermCode: 'D.1.9',
      type: 'mc',
      prompt: 'Bij **verwijderen van een wand**: hoe weet je of het een dragende wand is?',
      options: [
        'Aan de kleur',
        'Door een constructeur te raadplegen — buitenmuren zijn vrijwel altijd dragend; woningscheidende wanden in rijwoning altijd dragend; binnenwanden recht boven en onder elkaar door meerdere verdiepingen meestal dragend; op tekeningen vaak dikker',
        'Aan het materiaal — beton is dragend, gips niet',
        'Iedere wand is gelijk',
      ],
      correctIndex: 1,
      explanation:
        'Bij twijfel **altijd constructeur raadplegen** vóór wegslaan. Indicatoren: (1) buitenmuren = vrijwel altijd dragend; (2) woningscheidende muur in rijwoning = altijd dragend; (3) binnenwand recht boven en onder elkaar door meerdere verdiepingen = vaak dragend; (4) op bouwtekening vaak dikker dan niet-dragende; (5) baksteen, kalkzandsteen, beton meestal dragend, gipsblokken/metal-stud meestal niet-dragend. Verkeerd geslagen dragende wand kan instorting veroorzaken!',
    },
    {
      id: 'D1-9-b',
      toetstermCode: 'D.1.9',
      type: 'mc',
      prompt: 'Bij het **slopen van een dragende wand** is de juiste werkwijze:',
      options: [
        'Direct slopen met breekijzer',
        'Constructeur raadpleegt voor berekening + vervangings­oplossing (stalen H-balk of IPE), omgevings­vergunning aanvragen, erkend bedrijf voor uitvoering; kosten € 5.000–25.000',
        'Eerst de hele woning leegmaken',
        'Bij avond uitvoeren',
      ],
      correctIndex: 1,
      explanation:
        'Verwijderen dragende wand: (1) **constructeur** raadpleegt — berekening + ontwerp vervangings­oplossing (stalen H-balk, IPE-profiel of houten balken om bovenliggende last over te dragen); (2) **omgevings­vergunning** aanvragen; (3) **erkend bouwbedrijf** voert uit; (4) **belasting boven** (verdieping, dak) moet correct naar fundering; (5) eventueel fundering­versterking. Kosten € 5.000–25.000 afhankelijk overspanning, etage, versterking. Bij niet-dragende wand: € 500–2.500.',
    },
    {
      id: 'D1-9-c',
      toetstermCode: 'D.1.9',
      type: 'mc',
      prompt: 'Een **uitbouw op de begane grond** vergt:',
      options: [
        'Geen vergunning',
        'Vergunning­check (vaak omgevings­vergunning; bestemmingsplan, welstand); nieuwe fundering verbonden met bestaande; aansluiting gevel + leidingen; dak (plat of hellend); kosten € 30.000–150.000 voor 15–30 m²',
        'Alleen toestemming van buren',
        'Een aparte hypotheek',
      ],
      correctIndex: 1,
      explanation:
        'Uitbouw op begane grond vergt: (1) vergunning­check — vaak omgevings­vergunning; bestemmingsplan check (mag op deze locatie?); welstand (in beschermd gezicht); (2) nieuwe fundering verbonden met bestaande (poeren of strookfundering); (3) gevel openen + leidingen doortrekken; (4) extra dak (plat of hellend); (5) bouwregels Bbl voor isolatie, ventilatie, brandveiligheid. Kosten ~€ 30.000–150.000 voor 15–30 m². Bouwtijd 3–6 maanden. Beperkt vergunningsvrije mogelijkheden bestaan binnen specifieke regels.',
    },
    {
      id: 'D1-9-d',
      toetstermCode: 'D.1.9',
      type: 'mc',
      prompt: 'Bij **badkamer­renovatie** is een Bbl-eis voor ventilatie:',
      options: [
        'Geen eis',
        'Mechanische afzuig­capaciteit min. 14 l/s = 50 m³/h (continu) → voorkomt vocht­problemen en schimmel; bij balansventilatie (Systeem D) via WTW-systeem',
        'Alleen natuurlijke ventilatie',
        '500 m³/h verplicht',
      ],
      correctIndex: 1,
      explanation:
        'Bbl-eis ventilatie badkamer: minimaal 14 l/s = **50 m³/h afzuig­capaciteit** (continu, in stand 1). Tijdens douchen verhoogd debiet (stand 2 of 3 ~100 m³/h). Belangrijk om vocht uit te voeren — anders ontstaat schimmel op koudere wanden. Bij balansventilatie Systeem D loopt afzuiging via centrale WTW-unit. Andere Bbl-eisen badkamer: antislip vloer (R 10 + B voor blote voeten), waterslot sifons min. 30 mm (50 mm bij toilet), waterdichte detaillering.',
    },
  ],

  terms: [
    {
      term: 'Bouwkundige inspectie',
      definition:
        'Visuele beoordeling van een pand — gericht op gebreken, achterstallig onderhoud en risico’s; basis voor aankoop­advies.',
    },
    {
      term: 'Aankoop­keuring',
      definition:
        'Inspectie vóór koop, vaak met rapport waarin gebreken en kosten worden ingeschat — beschermt koper tegen tegenvallers.',
    },
    {
      term: 'NEN 2767',
      definition:
        'Norm voor conditiemeting van gebouwen — score 1 (uitstekend) t/m 6 (zeer slecht) per bouwdeel.',
    },
    {
      term: 'Conditiescore',
      definition:
        'Numerieke uitkomst van NEN 2767-meting; basis voor MJOP en investerings­beslissingen.',
    },
    {
      term: 'MJOP',
      definition:
        'Meerjaren­onderhouds­plan — overzicht van noodzakelijke onderhouds­werkzaamheden en kosten voor 10-25 jaar.',
    },
    {
      term: 'VvE',
      definition:
        'Vereniging van Eigenaars — beheert gemeenschappelijke delen van appartementen­complex; verplicht een onderhoudsplan.',
    },
    {
      term: 'Bouwkundig rapport',
      definition:
        'Schriftelijke uitwerking van inspectie met gebreken, oorzaken, gevolgen, herstel­advies en kostenraming.',
    },
    {
      term: 'Energielabel',
      definition:
        'Verplichte indicatie van energie­zuinigheid (A++++ t/m G); afhankelijk van isolatie, ketel, kierdichting.',
    },
    {
      term: 'NEN 2580',
      definition:
        'Norm voor het meten van vloeroppervlakte — BVO (bruto), VVO (verhuurbaar), GO (gebruiks­oppervlakte).',
    },
    {
      term: 'BVO / VVO / GO',
      definition:
        'Bruto vloer­oppervlak (incl. wanden), verhuurbaar vloer­oppervlak, gebruiks­oppervlakte (kantoren); 3 belangrijke maten.',
    },
    {
      term: 'Achterstallig onderhoud',
      definition:
        'Werk dat eerder uitgevoerd had moeten zijn — leidt tot snellere veroudering en hogere herstelkosten.',
    },
    {
      term: 'Verborgen gebrek',
      definition:
        'Mankement dat bij normale inspectie niet zichtbaar is; in NL valt onder verborgen­gebreken­regeling en koopovereenkomst.',
    },
    {
      term: 'Conserverende maatregel',
      definition:
        'Tijdelijke ingreep om verdere schade te voorkomen, zonder permanent herstel — bv. afdekking lekkage.',
    },
    {
      term: 'Levensduur (technisch)',
      definition:
        'Verwachte tijd dat een bouwdeel functioneel meegaat — dak 30-40 jr, kozijn 50 jr, fundering 100+ jr.',
    },
    {
      term: 'Levensduur (economisch)',
      definition:
        'Tijd tot vervanging economisch zinvol is — vaak korter door veranderende eisen of mode.',
    },
  ],

  games: [
    {
      id: 'D1-gapfill-1', type: 'gapfill',
      title: 'MJOP en NEN 2767',
      text:
        'Een {{MJOP}} (Meerjaren­OnderhoudsPlan) plant alle onderhoud voor 10–25 jaar vooruit. ' +
        'Conditiemetingen gebeuren volgens {{NEN 2767}} — 6-puntsschaal van 1 (uitstekend) tot 6 (zeer slecht). ' +
        'Sinds 2018 is een reservefonds wettelijk verplicht voor een {{VvE}} — minimaal 0,5 % van de herbouwwaarde per jaar.',
      distractors: ['BENG', 'NEN 1010', 'huurder', '0,1 %'],
    },
    {
      id: 'D1-sort-1', type: 'sort',
      title: 'Vormen van verbouwing',
      categories: ['Behoud functie', 'Wijziging functie'],
      items: [
        { label: 'Renovatie', category: 'Behoud functie' },
        { label: 'Restauratie', category: 'Behoud functie' },
        { label: 'Groot onderhoud', category: 'Behoud functie' },
        { label: 'Herontwikkeling (kantoor → woning)', category: 'Wijziging functie' },
        { label: 'Transformatie (industrieterrein → wijk)', category: 'Wijziging functie' },
      ],
    },
    {
      id: 'D1-matching-1', type: 'matching',
      title: 'Vormen van onderhoud',
      pairs: [
        { left: 'Planmatig onderhoud', right: 'Vooraf gepland volgens MJOP' },
        { left: 'Curatief onderhoud', right: 'Reactief — na klacht of zichtbaar gebrek' },
        { left: 'Preventief onderhoud', right: 'Inspectie, schoonmaak — voorkomen' },
        { left: 'Achterstallig onderhoud', right: 'Had moeten gebeuren, maar niet uitgevoerd' },
        { left: 'Mutatie­onderhoud', right: 'Tussen vertrek en intrek nieuwe huurder' },
        { left: 'Amoveren', right: 'Slopen — einde levenscyclus' },
      ],
    },
  ],
}
