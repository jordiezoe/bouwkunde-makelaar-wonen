import type { Topic } from '../types/content'

export const C_9_ventilatie: Topic = {
  code: 'C.9',
  section: 'C',
  title: 'Ventilatie',
  chapterRef: 'Lesboek hoofdstukken 24 en 27',
  blurb:
    'Vier ventilatiesystemen (natuurlijk, natuurlijke aanvoer + mechanische afvoer, mechanisch volledig, gebalanceerd met WTW + LBK), het lezen van installatietekeningen, individueel vs collectief (shuntkanalen), Bbl-eisen aan ventilatie van woningen en de bijzondere oplossingen voor kookafzuiging.',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · Ventilatiesystemen — de vier hoofdtypen',
      toetstermCodes: ['C.9.1'],
      body: `
### Waarom ventileren?
- **Vocht­afvoer** (mensen, koken, douchen → ~10 liter water per dag in een gezin)
- **CO₂-afvoer** (we ademen CO₂ uit; te hoog niveau → hoofdpijn, slaapproblemen)
- **Geuren** en luchtverontreiniging afvoeren
- **Buitenlucht** met zuurstof binnenbrengen
- **Tegen schimmel** in badkamer en koudere wanden
- **Bbl-eis**: minimum 0,7 liter/sec per m² verblijfsruimte (~25–35 m³/h voor een typische slaapkamer)

### Systeem A — Natuurlijke ventilatie (aan- en afvoer)
**Werking**:
- **Aanvoer**: roosters in kozijnen, suskasten, ventilatie­schuiven of klepramen
- **Afvoer**: passieve kanalen door het dak; **trek-effect** (warmere lucht binnen stijgt op door schoorsteen-werking) + **wind-druk** op buitenopening
- **Geen mechanisch toestel** — werkt op natuurkundige principes

**Voor- en nadelen**:
- **Voordelen**: geen stroomverbruik, geen onderhoud, geen geluid van ventilator
- **Nadelen**: afhankelijk van weer (wind, temperatuur­verschil); werkt slecht op windstille dagen of in zomer (geen temperatuur­verschil); geen warmte­terugwinning
- **Toepassing**: oudere woningen vóór 1970; in moderne woningen niet meer voldoende (te luchtdicht)

### Systeem B — Natuurlijke aanvoer + mechanische afvoer
**Werking**:
- **Aanvoer**: ventilatie­roosters in kozijnen of bovenraampjes (natuurlijk)
- **Afvoer**: **mechanische ventilator** in keuken, badkamer, toilet — zuigt vervuilde lucht actief naar buiten
- Trek door: roosters open → lucht stroomt door de woning → afgezogen in keuken/badkamer/toilet
- Vaak met **standen-schakelaar**: stand 1 basis, stand 2 douche, stand 3 koken

**Voor- en nadelen**:
- **Voordelen**: betrouwbaar, eenvoudig, energiezuinig (alleen ventilator stroom), goedkoop
- **Nadelen**: koude lucht binnen via roosters → energieverlies; geen filtering van inkomende lucht; geluid van ventilator
- **Toepassing**: standaard in NL-nieuwbouw 1980–2010, nog veel aanwezig

### Systeem C — Mechanische ventilatie (aan- en afvoer)
**Werking**:
- **Centrale unit** met twee ventilatoren: één blaast verse lucht in, de ander zuigt vervuilde lucht af
- **Aanvoer** via kanalen naar slaapkamers, woonkamer
- **Afvoer** via kanalen uit keuken, badkamer, toilet
- Aan- en afvoer­hoeveelheden zijn **gebalanceerd** (~gelijk)

**Voor- en nadelen**:
- **Voordelen**: betere controle, geen koudvallen meer door roosters
- **Nadelen**: geen warmte­terugwinning (verse koude lucht wordt direct ingeblazen); meer stroomverbruik dan B; geluid van ventilatoren
- **Toepassing**: utiliteit, oudere appartementen, scholen — minder gebruikelijk in moderne nieuwbouw

### Systeem D — Gebalanceerde ventilatie met WTW
**Werking**:
- **Centrale unit met warmtewisselaar (WTW)**:
  1. **Vervuilde, warme lucht** wordt afgezogen uit keuken, badkamer, toilet
  2. **Door warmtewisselaar**: deze warme lucht geeft warmte af aan **inkomende koude buitenlucht**
  3. **Voorverwarmde verse lucht** wordt ingeblazen in woonkamer en slaapkamers
  4. Geen menging tussen afgevoerd en aangevoerd luchtdebiet (door cross-flow- of tegenstroom-warmtewisselaar)
- **Filters** voor stof, pollen, soms HEPA
- **Bypass** in zomer (warmtewisselaar uitschakelen) voor koeling van nachtlucht
- Hoog rendement WTW: **75–95 % warmteterugwinning**

**Voor- en nadelen**:
- **Voordelen**: zeer energiezuinig, schone gefilterde lucht, geen koudvallen, geluidsisolatie van buiten (geen open roosters)
- **Nadelen**: hoge investering (€ 3.000–6.000), onderhoud filters (~elke 6 mnd), geluid van toestel, bij defect grote impact
- **Toepassing**: standaard in moderne energiezuinige nieuwbouw (Bbl 2020+), BENG- en passief­huizen, NOM-woningen

### Luchtbehandelings­kast (LBK)
Voor grote gebouwen (utiliteit, kantoren, scholen, ziekenhuizen):
- **Veel grotere centrale unit** met meerdere functies: ventilatie + verwarmen + koelen + bevochtigen + filteren
- Werkt volgens systeem D-principe maar op grotere schaal
- Verbonden met netwerk van luchtkanalen naar **anemostaten** in elke ruimte
- Zie ook C.7 Klimaatbeheersing voor uitgebreid overzicht

### Vergelijking
| Systeem | Aanvoer | Afvoer | WTW? | Stroomverbruik | Modern in nieuwbouw? |
|---|---|---|---|---|---|
| **A** Natuurlijk | Roosters | Passieve kanalen | Nee | Geen | Nee |
| **B** Hybride | Roosters | Mechanisch | Nee | Laag | Beperkt |
| **C** Mechanisch volledig | Mechanisch | Mechanisch | Nee | Hoog | Beperkt |
| **D** Gebalanceerd + WTW | Mechanisch + filter | Mechanisch | Ja (75–95 %) | Gemiddeld | **Standaard** |
| **LBK** | Mechanisch + alle functies | Mechanisch | Ja | Hoog (utility) | Utility |
      `.trim(),
    },

    {
      heading: '2 · Ventilatie op installatietekening',
      toetstermCodes: ['C.9.2'],
      body: `
### Wat staat op een ventilatie-tekening?

**Tekenconventies**:
- **Toevoer­leidingen** — vaak met **blauwe** kleur of "T"-aanduiding ("Toevoer")
- **Afvoer­leidingen** — vaak met **rode** kleur of "A"-aanduiding ("Afvoer")
- **Pijlen** geven stromingsrichting aan
- **Capaciteit** in m³/h naast elke rooster of ventiel

### Symbolen
| Symbool | Betekenis |
|---|---|
| Cirkel met pijl naar boven | Toevoer­ventiel (inblaas) |
| Cirkel met pijl naar beneden | Afvoer­ventiel (afzuig) |
| Rechthoek met streep | Ventilatie­rooster in kozijn |
| Vierkant met kruis | Centrale ventilatie-unit / WTW-toestel |
| Rond met M | Mechanische afzuig­ventilator |
| Hokje met TK / TKK | Trekschakelaar / Trekkoord ventilatie |
| Lijn met capaciteit "30 m³/h" | Aangegeven luchtdebiet per ruimte |

### Verschillende ventielen
- **Toevoer­rooster** (in kozijn of bovenraampje) — voor natuurlijke aanvoer
- **Inblaas­ventiel** (in plafond of wand) — voor mechanische aanvoer, vaak met regelbare opening
- **Afzuig­ventiel** (in plafond keuken/badkamer/toilet) — voor mechanische afvoer
- **Anemostaat** (uitblaaspunt LBK) — verspreidt lucht in een ruimte

### Hoe lees je een ventilatie-tekening?

1. **Identificeer het systeem**:
   - Alleen roosters + geen kanalen → Systeem A (natuurlijk)
   - Roosters + afvoer­kanalen vanuit keuken/badkamer naar dak → Systeem B
   - Kanalen voor zowel aanvoer als afvoer, geen WTW-unit → Systeem C
   - Centrale unit met WTW-symbool + warmtewisselaar + filters → Systeem D

2. **Volg de luchtstromen**:
   - Verse lucht: vanaf buiten → unit → toevoer­kanalen → inblaas­ventielen in slaap-/woonkamer
   - Vuile lucht: van keuken/badkamer/toilet → afzuig­ventielen → afvoer­kanalen → unit (WTW) → naar buiten

3. **Capaciteit/balans controleren**:
   - **Totale aanvoer** = totale afvoer (gebalanceerd; max. 10 % verschil toegestaan)
   - **Per ruimte**:
     - Slaapkamer: 25–35 m³/h toevoer
     - Woonkamer: 75–100 m³/h toevoer
     - Keuken: 75–150 m³/h afvoer (extra bij koken)
     - Badkamer: 50–75 m³/h afvoer
     - Toilet: 25–35 m³/h afvoer

4. **Standen**:
   - **Stand 1** (basis, continu): voldoende voor normale verblijfsruimte (minimum Bbl)
   - **Stand 2** (douche/badkamer): verhoogde afzuiging in natte ruimten
   - **Stand 3** (koken/intensief): maximale capaciteit; tijdelijk
   - Modern: **CO₂-gestuurd** of **vochtgestuurd** (automatisch)

### Inbalans-problemen
- **Te veel aanvoer / te weinig afvoer** → overdruk in woning → koude tocht door deuren, eventueel condens­problemen
- **Te veel afvoer / te weinig aanvoer** → onderdruk → trek­problemen bij open haarden (rookgassen naar binnen!), tochtige roosters
- Voor de WTW belangrijk: gelijke debiet anders verlies van warmteterug­winnings­efficiëntie
      `.trim(),
    },

    {
      heading: '3 · Individueel vs collectief — shuntkanalen',
      toetstermCodes: ['C.9.3'],
      body: `
### Individueel ventilatiesysteem
**Wat is het?**
Elke woning heeft een **eigen ventilatie­unit en eigen kanalen** — geen verbinding met buurwoningen.

**Eigenschappen**:
- Volledige controle door bewoner
- Geen geluidsoverdracht via kanalen tussen woningen
- Geen lucht-vermenging (en daarmee geen virusverspreiding) tussen woningen
- Eigen onderhoud, eigen kosten
- Volledige WTW-mogelijkheid (D-systeem)

**Toepassing**:
- Eengezinswoningen, vrijstaande appartementen
- Moderne nieuwbouw appartementen
- Verbouwde rijwoningen

### Collectief ventilatiesysteem (CMV)
**Wat is het?**
**Eén centrale ventilatie-installatie** voor meerdere woningen, vaak in een **appartementen­complex**. Twee varianten:

**Centrale mechanische ventilatie (CMV)**:
- **Centrale afzuig­ventilator** op het dak van het gebouw
- **Eén kanaal per appartement** dat naar de centrale afzuiging gaat
- Bewoner heeft alleen een **regelaar** in eigen woning (stand 1-3)
- Vaak gecombineerd met natuurlijke aanvoer (Systeem B)

**Shuntkanalen** (oudere appartementen)
- **Verticale gemeenschappelijke afvoerkanalen** door alle verdiepingen
- **Aansluiting per woning** in eigen schacht
- **Natuurlijke ventilatie** (Systeem A): trek door verschil in temperatuur en wind
- **Geen mechanische ventilator** — werkt op zuig-effect van warme rijzende lucht in kanaal
- Probleem: bij stilstaande lucht (zomer, geen wind) kan er **terugstroming** zijn → lucht uit buurman in eigen woning ('Kookgeur problemen')

### Verschillen voor de bewoner
| Aspect | Individueel | Collectief (CMV) | Shuntkanaal |
|---|---|---|---|
| Controle | Volledig | Beperkt (stand) | Geen |
| Onderhoud | Eigen | Vereniging van eigenaren (VvE) | VvE |
| Energie­efficiëntie | Hoog (eigen WTW) | Gemiddeld | Laag (geen WTW) |
| Lucht­mening met buren | Nooit | Bij defect | Mogelijk (terug-stroming) |
| Renovatie naar WTW | Eenvoudig | Complex (VvE-besluit) | Onmogelijk zonder ingrijpende renovatie |

### Wat betekent dit voor de inspecteur/makelaar?
- **Appartementen tot ~1980**: vaak shuntkanalen — vraag VvE om documentatie
- **Appartementen 1980–2010**: vaak centrale mechanische afzuiging (Systeem B collectief)
- **Moderne nieuwbouw**: vrijwel altijd individueel WTW-systeem
- **Bij verbouwing in appartement**: kanaal niet zomaar afdichten of verleggen (gaat door buurwoningen!)
- **Geur- of geluidsklachten** via ventilatie­kanaal: probleem van VvE, niet individuele bewoner

### Renovatie van shuntkanalen
- Bestaande shunt-kanalen kunnen worden voorzien van **mechanische afzuig­ventilator op het dak** (omzetting naar systeem B collectief)
- Of: **individueel ventilatie­systeem** in elk appartement aanleggen (vergt grote renovatie, mogelijk in combinatie met dakvernieuwing)
- Subsidies via gemeente of provincie voor energiezuinige renovatie

### Vochtproblemen in oudere appartementen
- **Slechte ventilatie + vochtige badkamer + slechte isolatie** → schimmel, condens, gezondheidsproblemen
- Onderzoek door bouwfysisch adviseur kan oorzaak vaststellen
- Soms volstaat **vervanging van mechanische afzuig­ventilator** door nieuwer model met grotere capaciteit
      `.trim(),
    },

    {
      heading: '4 · Wettelijke eisen aan ventilatie (Bbl)',
      toetstermCodes: ['C.9.4'],
      body: `
### Bbl-eisen ventilatie woningen
Volgens **Besluit bouwwerken leefomgeving (Bbl)** moet elke woning voldoen aan minimum-luchtverversing per ruimte.

### Minimum-debieten
| Ruimte | Minimum aanvoer | Minimum afvoer |
|---|---|---|
| **Verblijfsgebied** (woonkamer, slaapkamer) | 0,7 l/s per m² (oftewel 25–100 m³/h afhankelijk grootte) | — |
| **Verblijfsruimte met keuken** (in woonkamer) | 0,7 l/s per m² | 21 l/s = 75 m³/h |
| **Toilet** | — | 7 l/s = 25 m³/h |
| **Badkamer** | — | 14 l/s = 50 m³/h |
| **Aparte keuken** | — | 21 l/s = 75 m³/h (kort 100 m³/h bij koken) |
| **Berging, garage** | Beperkt | Beperkt |

### Waar wordt aangevoerd, waar afgevoerd?
**Aanvoer** (verse lucht) → in:
- **Woonkamer**
- **Slaapkamer**
- **Hobby-/werkruimte**
- Algemeen: **verblijfsruimten waar mensen langer verblijven**

**Afvoer** (vervuilde/vochtige/geur-lucht) → uit:
- **Keuken** (kookrook, geuren, vocht)
- **Badkamer** (vocht)
- **Toilet** (geuren)
- **Eventueel: berging met wasapparatuur** (vocht)
- Algemeen: **natte ruimten en geur-veroorzakende ruimten**

**Doorvoer** (luchtstroming binnen woning):
- Verse lucht stroomt vanuit slaap-/woonkamer **door de hele woning** naar de natte ruimten
- Onder de deuren: **luchtspleet ~10 mm** voor doorstroming
- Geen tussen­deuren afsluiten — anders te lokale ophoping van vocht/CO₂

### Bbl-eisen aanvullend
**Capaciteit**:
- Continu beschikbaar minimum-debiet (geen knop om uit te zetten in verblijfsruimten)
- **Tijdelijk verhoogd** debiet mogelijk (stand 2 of 3) — voor douche, koken
- **CO₂-gestuurde regeling** sterk aanbevolen in moderne nieuwbouw

**Luchtkwaliteit**:
- **CO₂ < 1.200 ppm** richtlijn binnenklimaat
- **PM 2,5 fijnstof** moet beperkt worden (bij rookmelders, drukke straten — filter aanbevolen)
- **Radon-meting** in nieuwbouw vanaf 2020 verplicht in risicogebieden

**Geluidsisolatie**:
- Roosters mogen geen geluidshinder van straat doorgeven (Bbl: < 33 dB(A) op slaapkamer)
- Voor drukke straten: **akoestische roosters** of mechanische ventilatie zonder roosters

**Brandveiligheid**:
- Ventilatie­kanalen mogen brand niet verspreiden tussen brandcompartimenten
- **Brandkleppen** verplicht in kanalen die compartimenten doorkruisen (sluiten bij hitte)

### Specifieke ruimten

**Garage / parkeergarage**:
- **Mechanische afzuiging** verplicht — uitlaatgassen
- Bij garage onder de woning: extra strenge eisen voor afsluiting van woon-kant

**Werkruimten met chemische processen**:
- **Lokale afzuiging** boven werkblad (zuurkast)
- Veel hogere debieten dan woning

**Logiesruimten (hotel, B&B)**:
- Bbl-eisen voor utiliteit van toepassing
- Vaak gecombineerd met centrale LBK

### Aan- en afvoer­openingen — plaats
- **Aanvoer**: zo dichtbij verblijfsruimten, vér van afvoer-uitlaten
- **Afvoer-uitlaat boven het dak**: ≥ 0,5 m boven dakrand; ≥ 6 m van ventilatie­aanvoer-opening; ≥ 4 m van vluchtroute-uitgang
- **Niet aanvoer-en-afvoer op dezelfde hoogte** aan dezelfde gevel (recirculatie)

### Wat voor de woning-koper / huurder?
- **Bbl-conform-verklaring** bij oplevering — controle door bouw­toezicht / kwaliteits­borger
- **Onderhoud­plicht** ventilatiefilter — verklikt door verminderde capaciteit
- **Storingen melden** — wettelijk geldt geen "ventilatie-werkende" garantie zonder onderhoud
      `.trim(),
    },

    {
      heading: '5 · Ventilatie boven het kookvuur',
      toetstermCodes: ['C.9.5'],
      body: `
### Waarom apart aandacht voor kookafzuiging?
- **Kookdamp** bevat veel **vet** (uit gebakken eten) + **vocht** + **geur** + **fijne aerosolen**
- Standaard mechanische afvoer in keuken (75 m³/h) is **onvoldoende** voor intensief koken
- **Tijdelijk** veel hogere capaciteit nodig (200–600 m³/h tijdens koken)

### Drie hoofdsystemen voor kookafzuiging

#### 1. Recirculatie-afzuig­kap (motorkap)
**Werking**:
- Damp wordt **aangezogen + door filter (vet + actieve kool)** + **terug in de keuken geblazen**
- Geen aansluiting op afvoer­kanaal — eenvoudige installatie
- **Filter** vangt vet en geuren

**Voor- en nadelen**:
- **Voordelen**: makkelijke installatie (geen ventilatie­doorbreking nodig), goedkoop, geschikt voor appartementen waar geen afvoer mogelijk is
- **Nadelen**: vocht blijft in keuken (vraagt extra ontvochtiging via separate afzuig­ventilator); filters moeten regelmatig vervangen worden; minder effectief dan afvoer-systeem

**Toepassing**:
- Appartementen waar geen doorbreking gevel mogelijk is (huurwoning, monumentaal pand)
- Tijdelijke oplossing

#### 2. Afzuig-naar-buiten (klassieke afzuig­kap)
**Werking**:
- Damp wordt **aangezogen + door vetfilter** + **via kanaal naar buiten** geleid
- Aansluiting op **dakventilatie-doorbreking** of gevelopening
- **Vetfilter** vangt het vet (te reinigen of vervangen)

**Voor- en nadelen**:
- **Voordelen**: zeer effectief — voert vocht, vet, geur volledig af; kookdamp niet meer in de woning
- **Nadelen**: vergt doorbreking gevel/dak; geen warmteterugwinning (warme keukenlucht gaat naar buiten); bij gebalanceerde ventilatie problemen (zie hieronder)

**Toepassing**:
- Standaard in vrijstaande woningen, eengezinswoningen
- Modern: combinatie met balans­ventilatie (zie volgend punt)

#### 3. Afzuiging via balansventilatie (Systeem D)
**Probleem**:
Bij Systeem D (gebalanceerde ventilatie met WTW) zou een afzuig­kap-naar-buiten de luchtbalans verstoren — de WTW kan geen warmte­terugwinning meer doen omdat de afvoer niet meer door de WTW gaat.

**Oplossing 1: WTW-bypass tijdens koken**
- Afzuig­kap geleid naar **eigen aparte afvoer naar buiten** (niet door WTW)
- Aanvullende **stand-3-ventilatie** in WTW-systeem activeren — verhoogde aanvoer compenseert het verlies
- Vereist intelligent regelsysteem

**Oplossing 2: Recirculatie-kap met externe WTW-koppeling**
- **Recirculatie-kap** met betere filters (HEPA + actieve kool + grootser)
- Vocht wordt afgevoerd via de **reguliere keuken-afzuig­ventiel** van de balans­ventilatie (achter de keukenkast)
- Effectiever dan eenvoudige recirculatie

**Oplossing 3: Inductie + downdraft**
- **Downdraft-afzuiging** geïntegreerd in inductie­kookplaat — damp wordt direct bij de bron afgezogen
- Geleid naar buiten of via filter en terug in de keuken
- Modern, compact, effectief

### Specifieke aandachtspunten
**Vetfilter**:
- **Metaalvelten** of **fijn aluminium-mesh** dat vet vangt
- **Reinigen** in vaatwasser om de 1–2 maanden (afhankelijk gebruik)
- **Vervangen** bij beschadiging

**Geurfilter (actieve kool)**:
- Bij recirculatie-kap: vangt geuren
- **Niet wasbaar** — vervangen om de 6–12 maanden

**Capaciteit kiezen**:
- Vuistregel: **kookplaat-oppervlak × 10–15** = afzuig-capaciteit in m³/h
- Kleine keuken (60 cm kookplaat): 300–500 m³/h
- Groot fornuis (90 cm, 5–6 pitten): 600–800 m³/h
- Restaurant: 1.000+ m³/h

### Wettelijke eisen
- **Geen verplichte capaciteit voor afzuig­kap** in Bbl, alleen voor algemene keuken-ventilatie (75 m³/h)
- **Brandveiligheid**: afzuig­kanaal moet brandwerend zijn, vetfilter regelmatig schoonmaken (anders kans op vlamoverslag bij brand op de kookplaat)
- **Gasfornuis + recirculatie­kap**: extra ventilatie nodig in keuken voor verbrandingslucht en CO-afvoer
- **Inductie­plaat + recirculatie­kap**: minder kritisch (geen verbranding, alleen vocht)

### Voor de makelaar
- **Bij verkoop**: vraag of afzuig-kap een doorbreking gevel/dak heeft (eigendom van eigenaar)
- **Bij appartement**: collectief afvoer­kanaal — niet zomaar wijzigen (VvE!)
- **Energie-label**: een recirculatie-kap met WTW-systeem werkt meestal als hetzelfde label-niveau (geen extra impact)
      `.trim(),
    },
  ],

  toetstermen: [
    {
      code: 'C.9.1',
      text: 'Benoemt en herkent de ventilatiesystemen natuurlijke ventilatie (aan- en afvoer), natuurlijke aanvoer + mechanische afvoer, mechanische ventilatie (aan- en afvoer), gebalanceerde ventilatie met WTW en luchtbehandeling (LBK).',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'C.9.2',
      text: 'Geeft aan de hand van installatietekeningen het type ventilatiesysteem, de inblaas­ventielen of toevoer­roosters, afzuig­ventielen en ventilatie­capaciteit/balans weer.',
      niveau: 'BT2',
      bloom: 'Toepassen',
      metDrawing: true,
    },
    {
      code: 'C.9.3',
      text: 'Herkent of er in een woning sprake is van een individueel of collectief ventilatie­systeem, zoals shuntkanalen.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
    {
      code: 'C.9.4',
      text: 'Legt uit aan welke wettelijke eisen de aan- en afvoer van een ventilatie­systeem in een woning moet voldoen, en welke ruimten worden voorzien van ventilatie (aan- of afvoer).',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
    {
      code: 'C.9.5',
      text: 'Legt uit welke ventilatie­systemen in een woning ten behoeve van koken toegepast worden.',
      niveau: 'BT2',
      bloom: 'Begrip',
      metDrawing: true,
    },
  ],

  questions: [
    // C.9.2 — Installatietekening lezen: beeldvragen (systeem herkennen)
    {
      id: 'C9-2-beeld-systeemC',
      toetstermCode: 'C.9.2',
      type: 'mc',
      prompt: 'Welk ventilatiesysteem zie je op deze installatietekening?',
      image: {
        src: '/figs/vragen/ventilatie-c-vraag.svg',
        caption:
          'Doorsnede: blauwe pijlen = luchttoevoer via gevelroosters, rode pijl = mechanische afvoer via dakventilator.',
        width: 'lg',
      },
      options: [
        'Systeem A — natuurlijke toe- en afvoer',
        'Systeem B — mechanische toevoer, natuurlijke afvoer',
        'Systeem C — natuurlijke toevoer, mechanische afvoer',
        'Systeem D — gebalanceerde ventilatie met WTW',
      ],
      correctIndex: 2,
      explanation:
        'Natuurlijke toevoer via gevelroosters (blauw) + mechanische afvoer via een ventilatorbox op het dak (rood) = systeem C. Het meest toegepaste systeem in Nederlandse woningen.',
    },
    {
      id: 'C9-2-beeld-systeemD',
      toetstermCode: 'C.9.2',
      type: 'mc',
      prompt: 'Welk ventilatiesysteem zie je op deze installatietekening?',
      image: {
        src: '/figs/vragen/ventilatie-d-vraag.svg',
        caption:
          'Doorsnede met een centrale unit met warmtewisselaar; blauwe lijnen = toevoer, rode lijnen = afvoer, beide mechanisch.',
        width: 'lg',
      },
      options: [
        'Systeem C — natuurlijke toevoer, mechanische afvoer',
        'Systeem D — gebalanceerde ventilatie met WTW',
        'Systeem A — natuurlijke toe- en afvoer',
        'Een shuntkanaal',
      ],
      correctIndex: 1,
      explanation:
        'Zowel toevoer als afvoer zijn mechanisch (kanalen + ventilatoren) en lopen via een centrale unit met warmtewisselaar die warmte terugwint — dat is systeem D, gebalanceerde ventilatie met WTW.',
    },

    // C.9.1 (4)
    {
      id: 'C9-1-a',
      toetstermCode: 'C.9.1',
      type: 'mc',
      prompt: 'Welk ventilatiesysteem is de **standaard moderne keuze** voor energiezuinige nieuwbouw?',
      options: [
        'Systeem A — natuurlijke ventilatie (geen mechaniek)',
        'Systeem B — roosters + mechanische afzuiging',
        'Systeem C — mechanische aanvoer + mechanische afvoer (zonder WTW)',
        'Systeem D — gebalanceerde ventilatie met WTW (warmteterug­winning 75–95 %)',
      ],
      correctIndex: 3,
      explanation:
        'Systeem D is standaard in moderne energiezuinige nieuwbouw (Bbl 2020+, BENG, NOM, passief­huizen). De warmtewisselaar (WTW) wint 75–95 % van de warmte terug uit afvoerlucht en verwarmt daarmee de inkomende verse lucht voor — zeer energiezuinig. Bonus: gefilterde lucht, geen koudvallen, geluidsisolatie van straat (geen open roosters).',
    },
    {
      id: 'C9-1-b',
      toetstermCode: 'C.9.1',
      type: 'mc',
      prompt: 'Wat is het werkings­principe van **Systeem A — natuurlijke ventilatie**?',
      options: [
        'Centrale ventilator zuigt lucht aan',
        'Aanvoer via roosters in kozijnen + afvoer via passieve kanalen (trek door warmte­verschil binnen-buiten + winddruk); geen mechaniek',
        'Filtraties van straatlucht',
        'WTW-warmtewisselaar verwarmt aankomende lucht',
      ],
      correctIndex: 1,
      explanation:
        'Systeem A werkt zonder mechaniek: roosters in kozijnen of suskasten leveren verse lucht, passieve kanalen door het dak voeren vervuilde lucht af. Werkt door **trek-effect** (warmere lucht binnen stijgt op door schoorsteen-werking) + **winddruk** op buitenopening. Voordeel: geen stroom, geen onderhoud. Nadeel: afhankelijk van weer; werkt slecht op windstille zomerdagen. In moderne luchtdichte woningen niet voldoende.',
    },
    {
      id: 'C9-1-c',
      toetstermCode: 'C.9.1',
      type: 'mc',
      prompt: '**Systeem B (natuurlijke aanvoer + mechanische afvoer)** wordt veel toegepast in NL. Hoe werkt het?',
      options: [
        'Twee mechanische ventilatoren in keuken en badkamer',
        'Aanvoer via roosters in kozijnen (natuurlijk); centrale mechanische ventilator zuigt vervuilde lucht af in keuken/badkamer/toilet (mechanisch); standen-schakelaar 1-2-3 voor stand basis/douche/koken',
        'Centrale WTW met dubbele ventilator',
        'Open ramen alleen',
      ],
      correctIndex: 1,
      explanation:
        'Systeem B is decennialang dé standaard in NL (1980–2010). Roosters in kozijnen leveren passief verse lucht; centrale mechanische ventilator zuigt vervuilde lucht af in keuken, badkamer en toilet. Standen-schakelaar: 1=basis (~25 m³/h), 2=douche (~50 m³/h), 3=koken (~100 m³/h). Voordeel: eenvoudig, betrouwbaar. Nadeel: koude lucht binnen via roosters (energieverlies), geen WTW.',
    },
    {
      id: 'C9-1-d',
      toetstermCode: 'C.9.1',
      type: 'mc',
      prompt: 'Wat is een **LBK (Luchtbehandelings­kast)**?',
      options: [
        'Een rookmelder',
        'Een grote centrale unit met meerdere functies: ventilatie + verwarmen + koelen + bevochtigen + filteren',
        'Een type kachel',
        'Een dak­ventilator',
      ],
      correctIndex: 1,
      explanation:
        'LBK = Luchtbehandelings­kast — grote centrale eenheid voor utiliteits­gebouwen die volledige klimaatbeheersing levert: ventilatie + verwarming + koeling + bevochtiging + filtratie. Werkt volgens systeem-D-principe maar op grotere schaal, met netwerk van luchtkanalen naar anemostaten in elke ruimte. Vaak met WTW + bypass voor zomer­koeling. Standaard in kantoorgebouwen, scholen, ziekenhuizen, theater, museum.',
    },

    // C.9.2 (2)
    {
      id: 'C9-2-a',
      toetstermCode: 'C.9.2',
      type: 'mc',
      prompt: 'Op een ventilatie-tekening: hoe herken je dat het om Systeem D (gebalanceerd + WTW) gaat?',
      options: [
        'Aanwezigheid van roosters in alle kozijnen',
        'Centrale unit met warmtewisselaar-symbool + filter + twee kanalen (toevoer + afvoer) + capaciteiten per ruimte ongeveer in balans',
        'Alleen afzuig­ventielen in keuken',
        'Open kanalen op het dak',
      ],
      correctIndex: 1,
      explanation:
        'Kenmerken Systeem D op tekening: (1) centrale unit met warmtewisselaar-symbool (zigzag-lijn of cross-flow-icon); (2) filter-symbool aan inkomende kant; (3) twee kanalenstelsels — toevoer naar woon-/slaapkamers + afvoer uit keuken/badkamer/toilet; (4) capaciteiten in balans (aanvoer ≈ afvoer per stand); (5) geen ventilatie­roosters in kozijnen. Vaak ook bypass-klep voor zomer­modus.',
    },
    {
      id: 'C9-2-b',
      toetstermCode: 'C.9.2',
      type: 'mc',
      prompt: 'Wat gebeurt er bij **inbalans** (te veel toevoer, te weinig afvoer) in een ventilatie­systeem?',
      options: [
        'Geen merkbare effecten',
        'Overdruk in woning → koude tocht door deuren naar buiten, eventueel condensatie­problemen; bij WTW verlies van warmteterug­winnings­efficiëntie',
        'Hogere luchttemperatuur',
        'Filters verstoppen sneller',
      ],
      correctIndex: 1,
      explanation:
        'Bij inbalans (toevoer ≠ afvoer) ontstaat over- of onderdruk in de woning. Te veel toevoer/te weinig afvoer → **overdruk**: koude tocht door deuren en kieren naar buiten, condensatie­problemen, mogelijk geluid van fluitend stromen. Te veel afvoer/te weinig toevoer → **onderdruk**: trekproblemen bij open haarden (rookgassen naar binnen!), tochtige roosters. Voor WTW essentieel: gelijke debieten (max. 10% verschil) anders verlies van efficiëntie.',
    },

    // C.9.3 (2)
    {
      id: 'C9-3-a',
      toetstermCode: 'C.9.3',
      type: 'mc',
      prompt: 'Wat zijn **shuntkanalen**?',
      options: [
        'Moderne WTW-kanalen',
        'Verticale gemeenschappelijke afvoerkanalen door alle verdiepingen van een (oud) appartementen­complex',
        'Brandweerleidingen',
        'Lucht­toevoer­kanalen voor schone lucht',
      ],
      correctIndex: 1,
      explanation:
        'Shuntkanalen zijn verticale gemeenschappelijke afvoerkanalen die door alle verdiepingen van een appartementen­complex lopen — elke woning sluit aan op het kanaal in eigen schacht. Werkt op natuurlijke ventilatie (warme rijzende lucht trekt vervuilde lucht omhoog). Vooral in oudere appartementen (tot ~1980). Probleem: bij stilstaande lucht (windstille zomerdag) kan **terugstroming** optreden — kookgeur van buurman in eigen woning.',
    },
    {
      id: 'C9-3-b',
      toetstermCode: 'C.9.3',
      type: 'mc',
      prompt: 'Wat is een **belangrijk voordeel** van een **individueel** ventilatie­systeem boven een collectief systeem?',
      options: [
        'Lagere installatie­kosten',
        'Geen lucht­vermenging tussen woningen (geen geur- of virusverspreiding), volledige controle door bewoner, eigen WTW-mogelijkheid voor maximale efficiëntie',
        'Geen onderhoud nodig',
        'Werkt zonder elektriciteit',
      ],
      correctIndex: 1,
      explanation:
        'Individueel systeem (eigen unit en kanalen per woning) biedt: (1) **geen luchtvermenging** met buren → geen geuren, geen virussen; (2) **volledige controle** door bewoner; (3) **eigen WTW** voor maximale efficiëntie; (4) onafhankelijke beslissingen bij renovatie. Nadeel: hogere installatie­kosten per woning (geen schaalvoordeel). Collectief (CMV) is goedkoper per woning maar minder controle, beperkter (geen volledige WTW).',
    },

    // C.9.4 (3)
    {
      id: 'C9-4-a',
      toetstermCode: 'C.9.4',
      type: 'mc',
      prompt: 'In welke ruimten van een woning wordt **lucht aangevoerd** (verse lucht ingebracht)?',
      options: [
        'Alleen in de badkamer',
        'Verblijfsruimten waar mensen langer verblijven: woonkamer, slaapkamer, hobby-/werkruimte',
        'Alleen in keuken',
        'In de garage',
      ],
      correctIndex: 1,
      explanation:
        'Bbl-eis: verse lucht wordt aangevoerd in verblijfsruimten — woonkamer, slaapkamer, hobby-/werkruimte. Minimum 0,7 l/s per m² (typisch 25–100 m³/h afhankelijk grootte). Afzuiging gebeurt juist in keuken, badkamer en toilet (waar vocht/geur/CO ontstaat). Verse lucht stroomt vervolgens **door de woning** naar de natte ruimten via deurspleten (~10 mm onder deur).',
    },
    {
      id: 'C9-4-b',
      toetstermCode: 'C.9.4',
      type: 'mc',
      prompt: 'Wat is het **minimum-afzuigdebiet** voor een keuken volgens Bbl?',
      options: [
        '5 m³/h',
        '21 l/s = 75 m³/h continu; tijdelijk verhoogd naar ~100 m³/h bij koken',
        '500 m³/h',
        'Niet voorgeschreven',
      ],
      correctIndex: 1,
      explanation:
        'Bbl: minimum afzuig­debiet keuken = 21 l/s = 75 m³/h (continu). Tijdelijk verhoogd debiet bij koken (~100 m³/h) via stand 3 of automatisch geregeld. Voor de afzuig-kap boven het fornuis gelden geen Bbl-minimum maar wel praktische richtlijnen (300–800 m³/h afhankelijk van kookoppervlak). Aparte kanalen voor algemene keuken-ventilatie versus afzuig-kap mogelijk.',
    },
    {
      id: 'C9-4-c',
      toetstermCode: 'C.9.4',
      type: 'mc',
      prompt: 'Volgens **richtlijn binnenklimaat** moet het CO₂-gehalte in een verblijfsruimte blijven onder:',
      options: [
        '400 ppm — buitenlucht-niveau',
        '1.200 ppm — boven dit niveau dalen concentratie­vermogen, geur en hoofdpijn ontstaan',
        '10.000 ppm — wettelijke grens',
        '50.000 ppm — gezondheidsgrens',
      ],
      correctIndex: 1,
      explanation:
        'Richtlijn binnenklimaat: CO₂ < 1.200 ppm in verblijfsruimten. Onder 1.000 ppm = comfortzone. Boven 1.200 ppm dalen concentratie­vermogen, ontstaan geur (mens­lucht), en hoofdpijn. Buitenlucht is ~420 ppm. Slaapkamers met dichte deur na een nacht kunnen 2.000+ ppm bereiken — vandaar belang van mechanische ventilatie + WTW in luchtdichte moderne woningen.',
    },

    // C.9.5 (3)
    {
      id: 'C9-5-a',
      toetstermCode: 'C.9.5',
      type: 'mc',
      prompt: 'Wat is het verschil tussen een **recirculatie-afzuigkap** en een **afzuigkap naar buiten**?',
      options: [
        'Recirculatie is moderner',
        'Recirculatie: damp wordt door filter (vet + actieve kool) en terug in keuken geblazen',
        'Recirculatie heeft geen filter',
        'Afzuig-naar-buiten werkt op elektriciteit, recirculatie niet',
      ],
      correctIndex: 1,
      explanation:
        'Recirculatie-kap: damp wordt aangezogen + door vetfilter + actief-kool-filter + terug in de keuken geblazen. Geen doorbreking gevel/dak nodig. Voordeel: eenvoudig, geschikt voor appartementen. Nadeel: vocht blijft in keuken; filters vervangen. Afzuig-naar-buiten: damp via kanaal naar buiten — veel effectiever (vocht + geur + vet weg), maar vereist doorbreking. Bij Systeem D-balansventilatie wordt afzuig-naar-buiten lastiger (verstoort balans/WTW).',
    },
    {
      id: 'C9-5-b',
      toetstermCode: 'C.9.5',
      type: 'mc',
      prompt: 'In een moderne woning met **Systeem D balansventilatie** is de afzuig­kap-keuze:',
      options: [
        'Altijd afzuig-naar-buiten',
        'Vaak een recirculatie-kap (vocht via reguliere keuken-afzuig­ventiel van WTW-systeem), of afzuig-naar-buiten met aparte doorbreking + intelligent regelsysteem dat balans handhaaft; downdraft­afzuiging in inductie­plaat is moderne optie',
        'Geen afzuig­kap nodig',
        'Open raam tijdens koken',
      ],
      correctIndex: 1,
      explanation:
        'Bij Systeem D is een gewone afzuig-naar-buiten problematisch — die zou de WTW-balans verstoren en de warmteterug­winning verlagen. Drie oplossingen: (1) recirculatie-kap (vocht via reguliere keuken-afzuig­ventiel); (2) afzuig-naar-buiten met aparte doorbreking + intelligent systeem dat WTW-balans compenseert; (3) **downdraft­afzuiging** geïntegreerd in inductie­plaat — modern, compact, direct bij de bron.',
    },
    {
      id: 'C9-5-c',
      toetstermCode: 'C.9.5',
      type: 'mc',
      prompt: 'Hoe vaak moet een **vetfilter** in een afzuig­kap worden gereinigd?',
      options: [
        'Nooit — vet verdampt vanzelf',
        'Om de 1–2 maanden (afhankelijk gebruik); reinigen in vaatwasser; bij intensief gebruik vaker — vet in filter is brandgevaar bij vlamoverslag op het fornuis',
        'Eenmaal per 10 jaar',
        'Alleen bij visuele vervuiling',
      ],
      correctIndex: 1,
      explanation:
        'Vetfilters (aluminium-mesh) moeten elke 1–2 maanden worden gereinigd, bij intensief gebruik (dagelijks koken) maandelijks. Reinigen in vaatwasser (klop eerst los stof eruit). Niet-reinigen is brandgevaar: vetvellen op filter kunnen bij brand op de kookplaat ontvlammen ("flashover") en zo het ventilatie-kanaal in vuur zetten. Actieve-kool geurfilter (alleen bij recirculatie): niet wasbaar, vervangen om de 6–12 maanden.',
    },
  ],

  terms: [
    {
      term: 'Systeem A',
      definition:
        'Natuurlijke ventilatie — toe- en afvoer via roosters; goedkoop, geluid- en tochtgevoelig.',
    },
    {
      term: 'Systeem B',
      definition:
        'Mechanische toevoer, natuurlijke afvoer — zelden toegepast, weinig comfort­voordeel.',
    },
    {
      term: 'Systeem C',
      definition:
        'Natuurlijke toevoer (roosters), mechanische afvoer via dakventilator — standaard in NL nieuwbouw lange tijd.',
    },
    {
      term: 'Systeem D',
      definition:
        'Mechanische balansventilatie — gestuurde toe- en afvoer met WTW-unit; gangbaar in BENG-nieuwbouw.',
    },
    {
      term: 'WTW',
      definition:
        'Warmte­terug­winning — warmtewisselaar haalt warmte uit afvoerlucht en geeft die aan koude toevoerlucht (rendement 75-90%).',
    },
    {
      term: 'Bypass (WTW)',
      definition:
        'Klep die WTW omzeilt bij koele zomernacht — voorkomt opwarming van binnenlucht.',
    },
    {
      term: 'Ventilatie­capaciteit',
      definition:
        'Bbl-eis: woonkamer min. 21 m³/h per persoon, keuken 21 m³/h, badkamer 14 m³/h, toilet 7 m³/h.',
    },
    {
      term: 'CO₂-sensor',
      definition:
        'Meet kooldioxide en stuurt vraaggestuurde ventilatie; bij > 1200 ppm wordt sterker geventileerd.',
    },
    {
      term: 'Kanaalwerk',
      definition:
        'Gegalvaniseerd staal of kunststof buizen waarin lucht wordt getransporteerd; ronde versus rechthoekige profielen.',
    },
    {
      term: 'Toevoer­rooster',
      definition:
        'Inlaat in gevel of kozijn — zelfregelend (bij voldoende drukverschil sluit deels af) of vast.',
    },
    {
      term: 'Afzuig­rooster',
      definition:
        'Punt waar lucht uit ruimte wordt afgevoerd, vooral in keuken/bad/toilet.',
    },
    {
      term: 'Spuiventilatie',
      definition:
        'Korte krachtige ventilatie via openzetten van ramen (te draaikiep); verplicht via Bbl boven minimumdebiet.',
    },
    {
      term: 'Vraaggestuurd',
      definition:
        'Sturing op basis van CO₂, vocht of aanwezigheid (PIR-sensor); energiezuinig.',
    },
    {
      term: 'Kookafzuig',
      definition:
        'Verplicht boven kookplaat; mag op gevel of dak uitkomen, niet op centraal afzuigsysteem in gas­opstelling.',
    },
    {
      term: 'Luchtdichtheid (qv;10)',
      definition:
        'Maat voor onbedoelde luchtlekkage van de schil; lager = beter (BENG ≤ 0,4 dm³/s/m²).',
    },
  ],

  games: [
    {
      id: 'C9-gapfill-1', type: 'gapfill',
      title: 'Ventilatie­systemen',
      text:
        'Systeem A is volledig {{natuurlijk}}. Systeem B heeft natuurlijke aanvoer + {{mechanische}} afvoer (klassiek NL). ' +
        'Systeem D is moderne nieuwbouw-standaard: {{balansventilatie}} met {{WTW}} (warmteterug­winning). ' +
        'Voor grote utiliteit gebruikt men een {{LBK}} (luchtbehandelings­kast).',
      distractors: ['CMV', 'shunt', 'centrifugaal', 'topkoeling'],
    },
    {
      id: 'C9-sort-1', type: 'sort',
      title: 'Aanvoer of afvoer?',
      categories: ['Lucht aanvoer in', 'Lucht afvoer uit'],
      items: [
        { label: 'Woonkamer', category: 'Lucht aanvoer in' },
        { label: 'Slaapkamer', category: 'Lucht aanvoer in' },
        { label: 'Werkkamer', category: 'Lucht aanvoer in' },
        { label: 'Keuken', category: 'Lucht afvoer uit' },
        { label: 'Badkamer', category: 'Lucht afvoer uit' },
        { label: 'Toilet', category: 'Lucht afvoer uit' },
      ],
    },
    {
      id: 'C9-matching-1', type: 'matching',
      title: 'Ventilatie­begrippen',
      pairs: [
        { left: 'WTW', right: 'Warmtewisselaar wint 75–95 % van afvoerlucht-warmte terug' },
        { left: 'Shuntkanaal', right: 'Verticaal collectief afvoer­kanaal in oudere flats' },
        { left: 'CMV', right: 'Centrale Mechanische Ventilatie (collectief afzuig)' },
        { left: 'Suskast', right: 'Akoestisch ventilatie­rooster (drukke straat)' },
        { left: 'Recirculatie-kap', right: 'Afzuig­kap met filter — geen doorvoer naar buiten' },
      ],
    },
  ],
}
