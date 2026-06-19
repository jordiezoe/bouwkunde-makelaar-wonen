import type { Topic } from '../types/content'

export const C_6_verwarming: Topic = {
  code: 'C.6',
  section: 'C',
  title: 'Verwarming',
  chapterRef: 'Lesboek hoofdstuk 23',
  blurb:
    'Lokale en decentrale verwarming, laag- versus hoogtemperatuurverwarming, onderdelen van een verwarmingsinstallatie (verdeler, expansievat, radiatoren, convector, vloer-/wandverwarming, warmtepomp, buffervat, WKO, zonnecollectoren), warmteoverdracht (geleiding, convectie, straling), cv-ketels (VR, HR, HRe, UHR) en warmtepompen (water-water, brine, lucht-water, hybride en WKO).',
  passingScore: 0.8,
  lessonSections: [
    {
      heading: '1 · Lokale, centrale en decentrale verwarming',
      toetstermCodes: ['C.6.1'],
      body: `
### Drie hoofdvormen
**Lokale verwarming**
- **Eén apparaat per ruimte**, dat zelf de warmte opwekt
- Voorbeelden: gashaard, gaskachel, elektrische kachel, infrarood-paneel, houtkachel, pellet-kachel
- Voordeel: alleen verwarmen waar nodig
- Nadeel: meer apparaten = meer onderhoud, vaak minder zuinig

**Centrale verwarming (CV)**
- **Eén centrale ketel** (of warmtepomp) verwarmt water dat via een leidingnet naar **radiatoren of vloerverwarming** wordt gepompt in alle ruimtes
- Standaard in NL voor woningen sinds de jaren '70
- Onderdelen: ketel, expansievat, pomp, leidingen, radiatoren, kamerthermostaat
- Voordeel: één onderhoudspunt, gelijkmatige verwarming
- Nadeel: alle ruimtes worden tegelijk warm (tenzij thermostaatkranen per ruimte)

**Decentrale verwarming**
- **Meerdere kleinere apparaten** in een gebouw, elk een eigen ruimte of zone
- Typisch voor utiliteit, appartementencomplexen, monumenten (waar centraal leidingnet lastig is)
- Voorbeelden: meerdere kleine cv-ketels, infrarood­panelen per ruimte, elektrische bijverwarming
- Modern: **lucht-water-warmtepomp per appartement**

### Verschillen lokaal vs decentraal
- **Lokaal** = één toestel per ruimte, kleinschalig en autonoom
- **Decentraal** = systeem met meerdere zones in één gebouw, elk autonoom maar binnen één gebouw

### Lokale verwarmingstoestellen — types
- **Gashaard** — kleine gaskachel met sierfront; afsluitbare deur, kan branden zien
- **Houtkachel / pellet-kachel** — biomassa, sfeer + verwarming
- **Infrarood-paneel** — elektrische straler aan wand of plafond
- **Elektrische convector / radiator** — losse, mobiele elektrische kachels
- **Warmtepomp split-unit (mono-split)** — voor één ruimte
      `.trim(),
    },

    {
      heading: '2 · Laag- en hoogtemperatuurverwarming (LTV/HTV)',
      toetstermCodes: ['C.6.2'],
      body: `
### Hoogtemperatuur­verwarming (HTV)
- **Aanvoertemperatuur 70–90 °C**, retour ~50–60 °C
- **Klassieke installatie** in oudere woningen
- Past bij een **cv-ketel** (gas) — die levert efficiënt warm water op deze temperatuur
- **Standaard radiatoren** zijn op deze temperatuur ontworpen
- **Snelle opwarming** van een koude ruimte
- **Nadelen**:
  - Lager rendement bij **moderne HR-ketels** (condensatie werkt het beste bij lager retourwater)
  - **Niet geschikt voor warmtepomp** (warmtepomp werkt efficiënt tot ~55 °C)

### Laagtemperatuur­verwarming (LTV)
- **Aanvoertemperatuur 35–55 °C**, retour ~25–40 °C
- Past bij **warmtepomp, zonneboiler, vloerverwarming**
- **HR-ketel** werkt ook beter bij LTV (condensatie effectiever)
- Moderne nieuwbouw vrijwel altijd LTV
- **Eisen aan installatie**:
  - **Grotere radiatoren** (1,5–2× oppervlak), of **vloer-/wandverwarming**
  - **Goede isolatie** van de woning (Rc ≥ 4,7)
- **Voordelen**:
  - Hoger rendement van warmtepomp (COP stijgt bij lagere aanvoertemperatuur)
  - **Comfort** door grote straal-oppervlakken (vloerverwarming is "warme voeten")
  - Energie-zuinig

### Vergelijking
| Aspect | HTV | LTV |
|---|---|---|
| Aanvoer °C | 70–90 | 35–55 |
| Bron | Klassieke cv-ketel | Warmtepomp / zonneboiler / HR-ketel modern |
| Radiatoren | Standaard formaat | Veel groter, vaak vloerverwarming |
| Opwarmtijd | Snel | Traag (maar continu warm) |
| Bouwfysica | Minder eisen aan isolatie | Goede isolatie noodzakelijk |
| Energie­zuinigheid | Lager | Hoger |
| Modern? | Bestaande oude bouw | Nieuwbouw + duurzame renovatie |

### Bij overschakeling HTV → LTV
- **Radiatoren** vervangen door 1,5–2× grotere modellen
- Of **vloerverwarming** aanleggen (alleen in begane­grondvloer, of bovenop bestaande vloer met aanpassing deuren)
- **Woning isoleren** (eis warmtepomp)
- **Combiketel** vervangen door warmtepomp of hybride systeem
      `.trim(),
    },

    {
      heading: '3 · Onderdelen van een verwarmingsinstallatie',
      toetstermCodes: ['C.6.3'],
      body: `
### Warmteopwekking
- **Cv-ketel (HR-combi)** — gasketel die water verwarmt + tapwater levert
- **Warmtepomp** (lucht-water, bodem-water, hybride) — moderne energiezuinige variant
- **Zonneboiler / zonnecollector** — voorverwarming van tapwater + soms cv-ondersteuning
- **Warmte-unit voor warmtenet** — bij aansluiting op stadsverwarming
- **WKO (warmte-koudeopslag)** — grote installaties in utiliteit, ook woningen mogelijk

### Distributie
- **Cv-pomp** — circuleert het verwarmingswater door de leidingen
- **Verdeler / verdeelunit** — verdeelt de aanvoer over **meerdere groepen** (bv. per kamer of per verdieping); vaak met **thermostatische bedieningskleppen** per groep
- **Aanvoerleiding** + **retourleiding** — gescheiden buizen voor heen- en terugloop
- **Buffervat** — geïsoleerd vat (200–1.000 liter) dat warmte opslaat:
  - Voor warmtepompen (zodat ze niet voortdurend hoeven aan-/uitschakelen)
  - Voor cv met zonnecollector (zon-overschot bewaren)
  - Voor cv-ondersteuning + warm tapwater

### Veiligheid en regeling
- **Expansievat** — vangt het uitzetten van verwarmingswater bij opwarmen op; vereist druk + lucht buffer (~1–1,5 bar werkdruk)
- **Overstortventiel** — opent bij overdruk, water naar afvoer
- **Manometer** — geeft cv-waterdruk aan
- **Ontluchting** — handmatig of automatisch — laat opgenomen lucht uit het systeem
- **Filter** in retourleiding — vangt slib en deeltjes
- **Kamerthermostaat** — stuurt de cv-ketel op basis van gewenste binnen­temperatuur
- **Klokthermostaat** — programmeerbaar (dag/nachtprogramma)
- **Slimme thermostaat** — leert gedrag, WiFi-aansturing (Nest, Tado, Honeywell)
- **Thermostatische radiatorafsluiters (TRV)** — per radiator een instelbare klep

### Warmteafgifte: radiatoren
**Type radiatoren**:
- **Ledenradiator** — opgebouwd uit individuele elementen ('leden') van gietijzer of staal, met holle ruimte tussen — oudere woningen, museaal
- **Paneelradiator** — moderne standaard: rechthoekige stalen plaat met inwendige kanaal; één-, twee- of drie-laags (type 11, 22, 33)
- **Convector** — radiator met **lamellen aan de achterkant** voor extra convectief oppervlak — geeft meer warmte per oppervlak (vaak in convector-putten in de vloer voor onder ramen)
- **Badkamerradiator (handdoekradiator)** — vorm van leden + horizontale staven om handdoeken op te hangen; vaak elektrisch of cv

**Hoe radiator-afmeting kiezen?**
- Gegeven: ruimte-grootte (m²), gewenste binnen­temperatuur, aanvoer­temperatuur cv-water, isolatie-niveau
- Vuistregel HTV: ~30–40 W/m² woonkamer-oppervlak
- Voor LTV: 1,5–2× groter dan HTV-versie (zelfde W-output, maar bij lagere aanvoertemperatuur)

### Wand- en vloerverwarming
**Vloerverwarming** (LTV-systeem)
- **Kunststof leidingen** (HDPE, PERT, PEX) in slang-patroon in de afwerkvloer of onder afdekplaten
- Geregeld via **verdeelunit** per ruimte
- **35–45 °C aanvoer** — ideaal voor warmtepomp
- **Comfort**: warme voeten, geen radiatoren in de weg
- **Nadeel**: lange opwarmtijd (massa van de vloer); bij retro-fit extra vloeropbouw (deuren aanpassen)

**Wandverwarming**
- Leidingen achter een speciaal sleuf­steensysteem (kalkzandsteen of baksteen met **sleufstenen**) of in een voorzetwand
- Stralingswarmte, vergelijkbaar met vloerverwarming
- Toepassing: monumentaal werk waar vloer niet open kan, of als aanvulling

### Bijzondere systemen
- **WKO (Warmte-Koudeopslag)** — bodem-warmtepomp met opslag van warmte/koude in aquifers (water­voerende lagen) — winter koud, zomer warm (en vice versa)
- **Zonnecollectoren** — als energiebron voor de cv (zie C.5)
- **Bivalent systeem** = combinatie van twee warmtebronnen (bv. hybride warmtepomp + cv-ketel)
      `.trim(),
    },

    {
      heading: '4 · Verwarming op installatietekening',
      toetstermCodes: ['C.6.4'],
      body: `
### Tekenconventies voor verwarming
- **Cv-aanvoer** — rood doorgetrokken lijn (met of zonder pijl)
- **Cv-retour** — blauw doorgetrokken lijn (met of zonder pijl)
- **Soms beide** met streep-stippellijn als ze samen lopen (in dezelfde leidingschacht)
- **Vloer­verwarmingsslangen** — vaak in lichter rood met aanduiding "VV" of "FH" (Floor Heating)

### Standaardsymbolen
| Symbool | Betekenis |
|---|---|
| Rechthoek met streep | Radiator (paneelradiator) |
| Rechthoek met streep + B | Badkamerradiator |
| Rechthoek met streep + C | Convector |
| Vierkant met kruis | Cv-ketel |
| Cirkel met M of P | Cv-pomp |
| Verticaal rechthoek met streep | Expansievat |
| Cilinder | Buffervat |
| Cirkel met T | Thermostaat |
| Klein vierkant op radiator | Thermostatische radiatorafsluiter (TRV) |
| Rechthoek met lijn | Verdeelunit (vloerverwarming) |
| Verticaal rechthoek + lamellen | Aanvoer/retour-verdeler |

### Hoe lees je een verwarmingstekening?
1. **Begin bij de cv-ketel** (of warmtepomp) — meterkast of bijkeuken
2. **Volg de aanvoer** (rode lijn) door het hele systeem
3. **Verbinding per radiator**: meestal twee aansluitingen (aanvoer + retour)
4. **Vloerverwarming-zones**: via verdeelunit met thermostatische kleppen per slang
5. **Buffervat** (indien aanwezig) zit tussen warmteopwekker en distributie
6. **Expansievat** vlakbij de cv-ketel of warmtepomp
7. **Retourleiding** (blauwe lijn) komt allemaal samen → terug naar cv-ketel

### Wat is het type verwarming?
- **Aanvoer 70–80 °C in tekening** → klassieke HTV met radiatoren
- **Aanvoer 35–45 °C** → LTV met vloer­verwarming of grote radiatoren (warmtepomp-systeem)
- **Aanwezigheid van WKO-bron op tekening** → bodem-warmtepomp met opslag
- **Zonnecollector op dak** → zonneboiler-systeem (cv-ondersteuning of tapwater)
- **Lucht-water-warmtepomp buitenunit** → moderne all-electric

### Belangrijk voor de inspecteur/makelaar
- **Type warmteopwekker** identificeren — bepaalt onderhouds­behoefte en levensduur
- **Aanvoertemperatuur** (HTV/LTV) — bepaalt energie­zuinigheid en compatibiliteit met warmtepomp
- **Aantal en grootte van radiatoren** — voldoende voor het oppervlak?
- **Aanwezigheid van vloerverwarming** — vaak verstopt in vloer; controleren met tekening
- **Buffervat en expansievat** — leeftijd en staat
- **Thermostatische kleppen per radiator** — voor energie­besparing
      `.trim(),
    },

    {
      heading: '5 · Warmteoverdracht: geleiding, convectie en straling',
      toetstermCodes: ['C.6.5'],
      body: `
Drie fysische mechanismen voor warmteoverdracht — relevant bij verwarming én isolatie. Elke radiator, kachel en oven werkt op één of meerdere van deze principes.

### Geleiding (conductie)
- **Direct contact**: warmte gaat door een **vast materiaal** van warm naar koud
- Voorbeelden:
  - Vloerverwarming → warme vloertegel → voet
  - Cv-water → metalen wand radiator → buitenzijde radiator
  - Door een muur of dak heen (warmtelek)
- **λ-waarde** (lambda) bepaalt hoe goed een materiaal warmte geleidt — voor isolatie kies je een **lage λ** (steenwol λ = 0,036; PIR λ = 0,022)
- Metalen (staal, koper) geleiden zeer goed (~50 W/m·K)
- Lucht is een slechte geleider (0,024 W/m·K) — vandaar dat isolatie vol kleine luchtcellen werkt

### Convectie (stroming)
- **Beweging van warme lucht of vloeistof** verspreidt warmte
- **Natuurlijke convectie** — warme lucht stijgt vanzelf op (lichter dan koude lucht); koude lucht zakt naar beneden
- **Gedwongen convectie** — pomp of ventilator drukt vloeistof of lucht rond
- Voorbeelden:
  - **Convector** met lamellen: warme lucht stijgt op tussen lamellen → koude lucht wordt aangezogen
  - **Centrale verwarming**: cv-pomp duwt warm water door radiatoren (gedwongen convectie)
  - **Luchtverwarming**: ventilator blaast verwarmde lucht door kanalen
  - **Warme luchtstromen** in een kamer van radiator naar plafond, langs koud raam, naar vloer

### Straling (radiatie)
- **Elektromagnetische straling** zonder dragermedium (gaat ook door vacuüm)
- **Infrarood-stralen** worden geabsorbeerd door oppervlakken (huid, muren, vloer)
- Voorbeelden:
  - **Infrarood-paneel** aan wand of plafond — verwarmt vooral oppervlakken in directe lijn van zicht
  - **Zon** verwarmt de aarde door straling (~150 miljoen km vacuüm tussen)
  - **Open haard** — straling van het vuur (geen contact, geen luchtbeweging nodig)
  - **Vloerverwarming**: lichte stralingscomponent van de warme vloer naar omhoog

### Praktische voorbeelden van combinaties
- **Radiator**: 70 % convectie (warme lucht stijgt op) + 30 % straling (warme oppervlak)
- **Vloerverwarming**: 60 % straling + 40 % convectie
- **Infrarood-paneel**: 90 % straling + 10 % natuurlijke convectie
- **Houtkachel met glas­deur**: stralingswarmte direct + convectie van warme lucht erboven
- **Convector in vloer**: ~100 % gedwongen convectie (geen zichtbare straling)
- **Luchtverwarming**: 100 % gedwongen convectie

### Comfort en perceptie
- **Stralingswarmte** voelt het meest **comfortabel** — verwarmt direct het lichaam zonder dat de hele luchttemperatuur hoog hoeft te zijn
- **Convectiewarmte** verwarmt de luchttemperatuur als geheel — koudere lucht-massa bij ramen geeft een "tochtig" gevoel
- **Geleidingswarmte** via vloer (vloerverwarming) is zeer comfortabel — "warme voeten"

### Energie-zuinigheid
- **Stralings­verwarming** kan effectief zijn in grote, slecht geïsoleerde ruimten (kerken, werkplaatsen) — verwarmt mensen direct
- **LTV-vloerverwarming** met warmtepomp is energiezuinigste combinatie voor woningen
      `.trim(),
    },

    {
      heading: '6 · Warmtetransport: water, lucht en elektriciteit',
      toetstermCodes: ['C.6.6'],
      body: `
Drie hoofd-transport­manieren voor warmte in een gebouw — elk met eigen voor- en nadelen.

### Warmtetransport via water (CV / hydronisch systeem)
- **Cv-ketel of warmtepomp** verwarmt water → pomp duwt water door leidingen naar radiatoren / vloerverwarming
- **Water** heeft **hoge soortelijke warmte** (4,2 kJ/kg·K) — kan veel warmte vasthouden in klein volume
- **Voordelen**:
  - Compact leidingnet (klein doorsnede)
  - Gelijkmatige verwarming per ruimte
  - Geschikt voor LTV én HTV
  - Compatibel met alle warmtebronnen (gas, warmtepomp, zonneboiler, warmtenet)
- **Nadelen**:
  - Lange opwarmtijd
  - Lek-risico bij oudere installaties (slecht onderhoud → bruin water uit kraan, drukdaling cv)
  - Onderhoud vereist (jaarlijks ontluchten, slibfilter spoelen)

### Warmtetransport via lucht (luchtverwarming)
- **Verwarmingstoestel** (gas, elektrisch, warmtepomp) blaast warme lucht door **luchtkanalen** naar **anemostaten** (uitblaaspunten) in de ruimten
- Lucht keert via afzuig­openingen terug naar het toestel — **recirculatie**
- **Voordelen**:
  - **Korte opwarmtijd** (lucht warmt snel op)
  - **Tegelijk ventilatie** mogelijk (combineerbaar met balansventilatie)
  - **Geen radiatoren** in de leefruimte
- **Nadelen**:
  - **Grote luchtkanalen** vereist (~150–250 mm doorsnede) — vergt veel installatie­ruimte
  - **Geluid** van blower / ventilator
  - **Droge lucht** mogelijk (extra bevochtiging soms nodig)
  - **Stof- en virusverspreiding** door de hele woning (i.t.t. waterverwarming, waar lucht statisch blijft)
- **Toepassing**: utiliteit (kantoren, scholen, fabrieken), grote ruimten; in woningen minder gebruikelijk

### Warmtetransport via elektriciteit (direct elektrische verwarming)
- **Elektrische weerstand** in een apparaat zet stroom direct om naar warmte
- Voorbeelden: elektrische kachel, infrarood-paneel, elektrische vloerverwarming, electric handdoekradiator
- **Voordelen**:
  - **Eenvoudige installatie** — geen leidingen, alleen stroomaansluiting
  - **Direct beschikbaar** zonder opwarmtijd
  - **Lokaal aanstuurbaar** — alleen verwarmen waar nodig
- **Nadelen**:
  - **Duurste verwarming**: 1 kWh stroom = 1 kWh warmte (COP = 1); een warmtepomp levert ~3–4 kWh warmte per 1 kWh stroom (COP 3–4)
  - **Belasting elektriciteit­snet** — vergt zware aansluiting bij volledige toepassing
  - Niet duurzaam in een woning, tenzij voor incidentele bijverwarming

### Vergelijking
| Aspect | Water (CV) | Lucht | Elektriciteit direct |
|---|---|---|---|
| Opwarmtijd | Traag | Snel | Direct |
| Energie­efficiëntie | Hoog (met HR/warmtepomp) | Gemiddeld | Laag (COP = 1) |
| Installatie­kosten | Hoog (leidingen) | Hoog (kanalen) | Laag |
| Energiekosten | Laag–gemiddeld | Gemiddeld | Zeer hoog |
| Comfort | Hoog | Gemiddeld (droge lucht, lawaai) | Hoog (lokaal) |
| Combineerbaar met | Alle warmtebronnen | Ventilatie | Stroom van PV |
| Toepassing | Woningen, utiliteit | Utiliteit, hallen | Bijverwarming, badkamer |

### Modern: hybride benadering
- **Water-CV met warmtepomp** voor hoofdverwarming
- **Elektrische badkamerradiator** voor snelle warmte na douche (~1 uur per dag)
- **Lucht­behandeling** voor ventilatie + warmteterug­winning (WTW)
- **PV-panelen** leveren stroom voor elektrische bijverwarming → COP-effect 1 wordt aanvaardbaar bij goedkope eigen stroom
      `.trim(),
    },

    {
      heading: '7 · CV-ketels: VR, HR, HRe en UHR',
      toetstermCodes: ['C.6.7'],
      body: `
### Historische ontwikkeling
Oude **conventionele ketels** uit jaren '70: rendement ~70 % — een derde van het gas ging als hete uitlaatgassen door de schoorsteen.

### VR-ketel (Verbeterd Rendement)
- **Rendement ~80 %**
- Betere warmtewisselaar, betere verbranding
- **Niet condenserend** — rookgassen blijven heet (~150 °C)
- **Klassieke schoorsteen** met natuurlijke trek
- **Verouderd** — sinds 2015 in Europa niet meer geproduceerd (EU-eis Ecodesign)

### HR-ketel (Hoog Rendement) — de huidige standaard
- **Rendement 90–107 %** (gemeten over bovenwaarde van het gas)
- **Condenserend**: rookgassen worden afgekoeld tot ~60 °C; **waterdamp condenseert** → condensatiewarmte verwarmt aangezogen verbrandingslucht voor
- **Rookgasventilator** nodig (rookgassen niet meer heet genoeg voor natuurlijke trek)
- **Condens­afvoer naar riolering** (zuur — jaarlijks controleren)
- **CE-keurmerk + Gaskeur-label**:
  - **HR** — rendement ≥ 90 %
  - **HR-107** — rendement 107 %
  - **HR-100** — 100 %
- **HR-combiketel** = HR + warm tapwater
- **CW-waarde** (CW-1 t/m CW-6) voor tapwater-comfort
- **Hybride met warmtepomp** mogelijk

### HRe-ketel (Hoog Rendement elektriciteit-leverend)
- **HR-ketel + Stirling-motor of micro-WKK** die naast warmte ook **elektriciteit** opwekt (~1 kW)
- **Co-generation** principe: warm water + stroom uit gas
- **Slimme meter** registreert teruglevering
- **Beperkt toegepast** — duurder; vooral relevant zolang er nog gas wordt gebruikt
- Voor de toekomst niet meer relevant (energietransitie weg van gas)

### UHR-ketel (Ultra Hoog Rendement) / Brennwerttechniek
- **Rendement boven 107 %** door extra warmte-terugwinning uit rookgassen
- **Modulerend vermogen** — past zich aan op warmtevraag (10–100 %)
- Meestal **wand-cv-ketel** met geïntegreerde **slimme regeling**
- **Compatibel met LTV** — werkt beter bij lage retour­temperatuur

### Aanvullende kenmerken (CV-ketel labels)
- **Gaskeur SV** (Schonere Verbranding) — lage CO₂/NOₓ-uitstoot
- **Gaskeur NZ** (Naverwarming Zonneboiler) — combineert efficiënt met zonneboiler
- **Gaskeur CW** — tapwater­comfort niveau

### Veiligheid en regeling
- **Maximaalthermostaat** — schakelt brander uit bij te hoog cv-watertemperatuur
- **Droogkookbeveiliging** — voorkomt aanslaan bij te weinig water
- **Overstortventiel** — opent bij overdruk (> 3 bar)
- **Waterdruk­meter (manometer)** — minimaal 1,0 bar (ideaal 1,5–2,0)
- **Kamerthermostaat / klokthermostaat** — regelt vraag

### Vervanging in de energietransitie
- **HR-ketel**: in 2024 nog vervangbaar; gemeente kan helpen met **subsidie** (ISDE) voor overstap naar warmtepomp
- **Hybride warmtepomp**: combinatie HR-ketel + warmtepomp — geleidelijke transitie
- **Volledig elektrische warmtepomp**: vervangt HR-ketel — vergt isolatie + LTV
      `.trim(),
      images: [
        {
          src: '/figs/fotos/hr-ketel.jpg',
          caption:
            'Een wand-cv-ketel (HR-ketel). Door de rookgassen af te koelen tot onder het condensatiepunt wint de HR-ketel extra warmte terug — rendement tot >100% op onderwaarde.',
          source: 'Foto: Chixoy · Wikimedia Commons (CC BY-SA 3.0)',
          width: 'md',
        },
      ],
    },

    {
      heading: '8 · Warmtepompen: types',
      toetstermCodes: ['C.6.8'],
      body: `
### Hoe werkt een warmtepomp?
**Principe**: een warmtepomp **verplaatst warmte van een lage temperatuurbron naar een hogere**. Het werkt volgens de **dampcompressiecyclus** (vergelijkbaar met een koelkast):
1. **Verdamper** — koudemiddel verdampt bij lage druk (~0 °C); neemt warmte op uit de bron
2. **Compressor** — comprimeert het gas, temperatuur stijgt naar 60–80 °C (elektrische aandrijving)
3. **Condensor** — gas geeft warmte af aan cv-water; condenseert weer
4. **Expansieventiel** — drukvermindering; cyclus opnieuw

### Coefficient of Performance (COP)
- **COP** = warmtegehalte (kWh) / elektrisch verbruik (kWh)
- Een COP van 4 betekent: 1 kWh stroom → 4 kWh warmte
- COP hangt af van **temperatuurverschil bron–afgifte** — hoe kleiner het verschil, hoe hoger de COP
- Standaard NL COP-bereik: 3–4,5

### Lucht-water-warmtepomp
- **Bron**: buitenlucht (buitenunit op het balkon of dak)
- **Afgifte**: cv-water (binnenunit) of tapwater (boiler)
- **COP**: ~4 bij +7 °C buitenlucht, ~2 bij –10 °C (lager bij vorst)
- **Voordelen**: eenvoudig te installeren, geen boring, geen vergunning
- **Nadelen**: geluid van buitenunit (40–55 dB(A)), lager rendement bij vorst, ijsvorming op verdamper (defrost-cyclus)
- **Toepassing**: standaard moderne all-electric woning

### Bodem-water-warmtepomp (gesloten bron)
- **Bron**: gesloten lussysteem in de grond (~150 m diepte) met **brine** (water + glycol)
- Vroeger ook **water-water** met directe grondwater-pomp, maar nu zeldzaam (kwaliteit grondwater)
- **COP**: ~4–5 constant het hele jaar (grond is altijd ~10 °C)
- **Voordelen**: stabiel rendement, geen geluid van buitenunit, geen ijsvorming
- **Nadelen**: hoge installatie­kosten (boring + lussysteem ~€ 8.000–15.000), vergunning voor boring nodig
- **Toepassing**: grotere woningen, kantoren, scholen — vooral nieuwbouw

### Water-water-warmtepomp (open bron)
- **Bron**: directe grondwater­pomp (twee putten — winning en infiltratie)
- **Afgifte**: cv-water
- **COP**: zeer hoog (constant grondwater­temperatuur)
- **Voordelen**: hoge efficiëntie
- **Nadelen**: vergunning, kwaliteits­eisen aan grondwater, zelden voor losse woningen
- **Toepassing**: grootschalig (utiliteit, kassen, WKO-installaties)

### Brine-warmtepomp
- **Niet een aparte soort** — verwijst naar bodem-water-warmtepomp met **brine (water + glycol) als drager­vloeistof** in het bronlus
- Brine = "anti-vries-water" — voorkomt bevriezing van de lus in de winter
- Alle moderne gesloten-bron-warmtepompen zijn feitelijk brine-warmtepompen

### Hybride warmtepomp
- **Combinatie lucht-water-warmtepomp + HR-ketel** (gas blijft als backup)
- Warmtepomp draait bij milde weer (~boven 0 °C), cv-ketel neemt over bij vorst of bij hoge piekvraag (douche)
- **Voordelen**: minder isolatie-eis dan all-electric warmtepomp, geleidelijke transitie, lagere investering
- **Nadelen**: gas-aansluiting blijft (gas-vrije woning niet bereikt)
- **Overheid stimuleert** hybride warmtepompen via subsidies (richting klimaat­neutraal 2050) — vanaf 2026 verplicht bij vervanging van cv-ketel (mits financieel haalbaar)

### Warmte-koudeopslag (WKO)
- **Grootste systeem**: bodemlussen in **twee aquifers** (water­voerende lagen, ~150 m diepte)
- Eén warme + één koude aquifer
- **Winter**: warmtepomp haalt warmte uit warme aquifer, infiltratie van kouder water in koude aquifer
- **Zomer**: rechtstreekse koeling uit koude aquifer ("passieve koeling"); warmer water terug in warme aquifer voor winter
- **Zeer hoge COP** mogelijk (10+ bij passieve koeling)
- **Toepassing**: appartementen­complexen, kantoorgebouwen, scholen, grote woningen
- **Vergunning** verplicht (provincie/waterschap)

### Vergelijking
| Type | COP | Investering | Geluid | Bron |
|---|---|---|---|---|
| Lucht-water | 3–4 | € 8.000–18.000 | Buitenunit 40–55 dB | Buitenlucht |
| Bodem-water (brine) | 4–5 | € 15.000–30.000 | Stil | Bodem 150 m |
| Water-water | 4–6 | € 20.000+ | Stil | Grondwater |
| Hybride | 3 (gemiddeld) | € 5.000–10.000 | Buitenunit + ketel | Lucht + gas |
| WKO | 5+ | € 30.000+ (collectief) | Stil | Aquifer |
      `.trim(),
      images: [
        {
          src: '/figs/tekeningen/warmtepomp-principe.svg',
          caption:
            'De dampcompressiecyclus van een warmtepomp: de verdamper neemt warmte op uit de bron, de compressor verhoogt de druk (en temperatuur), de condensor geeft de warmte af aan het cv-water, en het expansieventiel laat de druk weer zakken. Alleen de compressor kost stroom — daardoor een COP van 3–4.',
          source: 'Eigen tekening',
          width: 'full',
        },
        {
          src: '/figs/fotos/warmtepomp-buitenunit.jpg',
          caption:
            'De buitenunit van een lucht-water-warmtepomp. De ventilator zuigt buitenlucht aan; daar wordt warmte aan onttrokken — zelfs bij temperaturen onder nul.',
          source: 'Foto: PeterEastern · Wikimedia Commons (CC BY-SA 4.0)',
          width: 'md',
        },
      ],
    },

    {
      heading: '9 · Vloer- en wandverwarming',
      toetstermCodes: ['C.6.9'],
      body: `
### Vloerverwarming — watervoerend systeem
**Opbouw**:
1. **Dragende vloer** (beton, hout)
2. **Isolatielaag** (PUR, EPS) — voorkomt warmteverlies naar onderliggende ruimte
3. **Slangen** (kunststof — HDPE / PERT / PEX) in slang-patroon, h.o.h. 100–200 mm
4. **Afwerk­vloer** (dekvloer) van cement of anhydriet (4–8 cm dik)
5. **Vloerafwerking** (tegels, parket, linoleum, tapijt)

**Twee aanleg-systemen**:
- **Nat systeem**: slangen worden in de afwerkvloer ingestort — meest gebruikt; lange opwarmtijd door grote massa
- **Droogbouw / klikvloer-systeem**: slangen in voorgevormde **isolatieplaten met groeven**; afwerking direct erop — korte opwarmtijd, dunner, geschikt voor renovatie

**Eigenschappen**:
- **Aanvoer­temperatuur 35–45 °C** (LTV)
- **Verdeelunit** per ruimte/zone met **thermostatische kleppen**
- **Comfort**: stralings­warmte van onderaf, "warme voeten"
- **Geen radiatoren** in de leefruimte
- **Bbl-eis**: max. vloer­temperatuur 29 °C (klein gebied tot 35 °C — bv. badkamer)

### Vloerverwarming — elektrisch systeem
- **Verwarmingsmatten** met elektrische weerstandsdraden
- Direct onder vloerafwerking (tegels, parket)
- **Niet voor hoofdverwarming** — alleen voor **bijverwarming** (badkamer, koude tegels)
- **Energiekosten**: COP = 1 (1 kWh stroom = 1 kWh warmte) — duurder dan watergedreven systeem met warmtepomp (COP 3–4)
- **Toepassing**: renovatie van badkamer, hellingbaan op terras (anti-slip + sneeuwsmelt)

### Wandverwarming — watervoerend
**Opbouw**:
- **Slangen** in speciale **sleuf­stenen** (kalkzandsteen of baksteen met groeven) of in een voorzetwand met **gipskartonplaat**
- Achter de afwerklaag van pleister of stuc

**Eigenschappen**:
- **Stralingswarmte** vergelijkbaar met vloerverwarming
- Hoger plaatsings­vlak — sneller opwarmen dan vloer (minder massa boven de buis)
- **Bbl-eis**: max. wand­temperatuur 40–43 °C

**Toepassing**:
- Aanvulling op vloerverwarming bij grote ruimten
- **Monumentaal** werk waar vloeren niet open kunnen
- Badkamer als alternatief voor handdoekradiator

### Wandverwarming — elektrisch (infrarood-paneel)
- **Paneel** aan wand of plafond — geeft infrarood-straling
- Verwarmt vooral **oppervlakken** in de ruimte (huid, muren, vloer)
- **Energiekosten**: COP = 1 — duur
- **Voordeel**: snel beschikbaar, lokaal regelbaar
- **Nadeel**: alleen waar in directe lijn van zicht
- **Toepassing**: bijverwarming, garage, werkplaats, kerk

### Voor- en nadelen vloerverwarming algemeen
**Voordelen**:
- **LTV-compatibel** → ideaal voor warmtepomp en zonneboiler
- **Hoog comfort** (stralingswarmte, warme vloer)
- **Geen radiatoren** zichtbaar — vrije wand- en vloerruimte
- **Egalitaire warmteverdeling** in de ruimte
- **Lage stof­circulatie** (i.t.t. luchtverwarming) — beter voor allergieën

**Nadelen**:
- **Lange opwarmtijd** door massa van vloer (~3–6 uur tot stabiel)
- **Niet geschikt** voor ruimten met grote warmtevraag-pieken (snel + veel warmte)
- **Vloerafwerking-keuze**: parket en tapijt isoleren te veel; tegels/laminaat zijn beter
- **Renovatie­problematiek**: bestaande vloer openhakken kostbaar
- **Onderhoud­problematiek**: lek lastig te lokaliseren; reparatie via openhakken

### Vergelijkende tabel
| Aspect | Vloerverwarming (water) | Wandverwarming (water) | Elektrisch IR-paneel |
|---|---|---|---|
| Bron | LTV warmtepomp / cv | LTV warmtepomp / cv | Stroomnet |
| COP | 3–4 (met warmtepomp) | 3–4 | 1 |
| Comfort | Zeer hoog | Hoog | Lokaal hoog |
| Opwarmtijd | 3–6 uur | 1–3 uur | Direct |
| Installatie­kosten | € 3.000–8.000 | € 2.500–6.000 | € 200–800 per paneel |
| Onderhoud | Beperkt | Beperkt | Geen |
| Renovatie­vriendelijk | Beperkt (vloer open) | Goed (voorzetwand) | Zeer goed |

### Bbl-eisen en toepassings­regels
- **Geluidsisolatie**: vloerverwarming vergt aandacht voor luchtgeluid van pomp + contactgeluid
- **Brandwerendheid**: gewone vloerverwarmingsslangen smelten bij brand — risico in geval van calamiteit (geen direct gevaar, wel waterlek)
- **Niet over uitzettingsvoegen** leggen — slang scheurt bij beweging
      `.trim(),
    },
  ],

  toetstermen: [
    {
      code: 'C.6.1',
      text: 'Benoemt de verwarmingsvoorzieningen lokale verwarming en decentrale verwarming.',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'C.6.2',
      text: 'Legt het verschil tussen laag- en hoogtemperatuurverwarming uit.',
      niveau: 'BT1',
      bloom: 'Begrip',
    },
    {
      code: 'C.6.3',
      text: 'Benoemt de verschillende onderdelen van een verwarmingsinstallatie: verdeler, expansievat, radiatoren (leden-, paneel-, badkamerradiator), convector, vloer-/wandverwarming, warmtepomp, buffervat, WKO en zonnecollectoren.',
      niveau: 'BT1',
      bloom: 'Kennis',
    },
    {
      code: 'C.6.4',
      text: 'Geeft aan de hand van een installatietekening type verwarming en het leidingverloop weer.',
      niveau: 'BT2',
      bloom: 'Toepassen',
      metDrawing: true,
    },
    {
      code: 'C.6.5',
      text: 'Benoemt de begrippen m.b.t. warmteoverdracht: geleiding/conductie, stroming/convectie en straling/radiatie.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
    {
      code: 'C.6.6',
      text: 'Benoemt de verschillen tussen verwarming met warmtetransport (water, lucht) en elektrische verwarming.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
    {
      code: 'C.6.7',
      text: 'Licht de verschillende cv-ketels VR-ketel, HR-ketel, HRe-ketel en UHR-ketel en de kenmerken hiervan toe.',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
    {
      code: 'C.6.8',
      text: 'Licht de kenmerken van en de verschillen tussen de verschillende typen warmtepompen toe: water-water, brine-, lucht-water-, hybride warmtepomp en warmte-koudeopslag (WKO).',
      niveau: 'BT2',
      bloom: 'Begrip',
    },
    {
      code: 'C.6.9',
      text: 'Herkent de watervoerende en elektrische vloer- en wandverwarmingssystemen en hun eigenschappen, voor- en nadelen en onderdelen.',
      niveau: 'BT2',
      bloom: 'Kennis',
    },
  ],

  questions: [
    // C.6.1 (2)
    {
      id: 'C6-1-a',
      toetstermCode: 'C.6.1',
      type: 'mc',
      prompt: 'Wat is het verschil tussen **lokale** en **decentrale** verwarming?',
      options: [
        'Synoniemen',
        'Lokaal = één apparaat per ruimte. Decentraal = meerdere zones in één gebouw, elk autonoom',
        'Lokaal voor woningen, decentraal voor utiliteit',
        'Lokaal is altijd elektrisch',
      ],
      correctIndex: 1,
      explanation:
        'Lokaal = één toestel per ruimte (gashaard, houtkachel, infrarood-paneel) — kleinschalig en autonoom. Decentraal = systeem met meerdere zones in één gebouw, elk autonoom maar binnen één gebouw (bv. eigen cv-ketel of warmtepomp per appartement). Centraal = één centrale warmtebron voor het hele gebouw.',
    },
    {
      id: 'C6-1-b',
      toetstermCode: 'C.6.1',
      type: 'mc',
      prompt: 'Een **infrarood-paneel** aan de wand is een voorbeeld van:',
      options: [
        'Centrale verwarming',
        'Lokale verwarming',
        'Decentrale verwarming',
        'Hybride systeem',
      ],
      correctIndex: 1,
      explanation:
        'Een infrarood-paneel is een lokaal verwarmings­toestel: het verwarmt één ruimte (of een deel ervan) direct via stralings­warmte, zonder leidingnet of centraal toestel. Werkt elektrisch (COP = 1) en is energetisch duur — daarom typisch voor bijverwarming, kerken, of werkplaatsen, niet voor hoofdverwarming.',
    },

    // C.6.2 (3)
    {
      id: 'C6-2-a',
      toetstermCode: 'C.6.2',
      type: 'mc',
      prompt: 'Wat is het verschil tussen **HTV** en **LTV** verwarming?',
      options: [
        'HTV werkt op stroom, LTV op gas',
        'HTV = aanvoertemperatuur 70–90 °C; LTV = aanvoertemperatuur 35–55 °C',
        'HTV is voor de winter, LTV voor de zomer',
        'HTV gebruikt water, LTV gebruikt lucht',
      ],
      correctIndex: 1,
      explanation:
        'HTV (HoogTemperatuurVerwarming) = aanvoer 70–90 °C, retour 50–60 °C — klassieke installaties met cv-ketel en standaard radiatoren. LTV (LaagTemperatuurVerwarming) = aanvoer 35–55 °C, retour 25–40 °C — ideaal voor warmtepomp (hogere COP), zonneboiler en vloerverwarming. Moderne nieuwbouw is vrijwel altijd LTV.',
    },
    {
      id: 'C6-2-b',
      toetstermCode: 'C.6.2',
      type: 'mc',
      prompt: 'Waarom werkt een **warmtepomp** beter met **LTV** dan met HTV?',
      options: [
        'Warmtepomp werkt alleen met lucht',
        'COP van een warmtepomp daalt sterk bij hogere afgifte­temperatuur',
        'LTV geeft directere warmte',
        'HTV beschadigt de warmtepomp',
      ],
      correctIndex: 1,
      explanation:
        'De COP (Coefficient of Performance) van een warmtepomp is omgekeerd evenredig met het temperatuurverschil tussen bron en afgifte. Bij lucht-water-warmtepomp met +7 °C buitenlucht: aanvoer 35 °C → COP ~4 (1 kWh stroom → 4 kWh warmte); aanvoer 70 °C → COP ~2 (efficiëntie halveert). Daarom: vergt LTV-systeem (vloerverwarming of grote radiatoren) voor rendabele warmtepomp.',
    },
    {
      id: 'C6-2-c',
      toetstermCode: 'C.6.2',
      type: 'mc',
      prompt: 'Bij overstap van HTV naar LTV in een bestaande woning moet je vaak:',
      options: [
        'Niets aanpassen',
        'Radiatoren vervangen door 1,5–2× grotere modellen, of vloerverwarming aanleggen + woning goed isoleren',
        'Alleen de cv-ketel vervangen',
        'De woning ventileren',
      ],
      correctIndex: 1,
      explanation:
        'Bij LTV met dezelfde radiatoren als HTV zou de warmte­afgifte halveren — koude woning. Oplossingen: (1) bestaande radiatoren vervangen door 1,5–2× grotere modellen (zelfde W bij lagere aanvoer); (2) vloerverwarming aanleggen (ideale combinatie met warmtepomp). En: woning goed isoleren (Rc ≥ 4,7) zodat warmtevraag laag is.',
    },

    // C.6.3 (4)
    {
      id: 'C6-3-a',
      toetstermCode: 'C.6.3',
      type: 'mc',
      prompt: 'Wat is de functie van een **expansievat** in een cv-installatie?',
      options: [
        'Het opslaan van warm tapwater',
        'Het opvangen van het uitzettende cv-water bij opwarmen',
        'Het pompen van het cv-water',
        'Het scheiden van warm en koud water',
      ],
      correctIndex: 1,
      explanation:
        'Het expansievat vangt het volume-verschil op van opwarmend cv-water (water zet uit bij verwarming). Zonder expansievat zou de druk te hoog oplopen en het overstortventiel constant water laten ontsnappen. Bestaat uit een vat met een membraan + luchtkussen. Cv-werkdruk is normaal 1,0–1,5 bar.',
    },
    {
      id: 'C6-3-b',
      toetstermCode: 'C.6.3',
      type: 'mc',
      prompt: 'Wat is een **convector** ten opzichte van een **paneelradiator**?',
      options: [
        'Identiek',
        'Convector heeft lamellen aan de achterkant voor extra convectief oppervlak',
        'Convector is groter dan paneelradiator',
        'Convector werkt elektrisch, paneelradiator op water',
      ],
      correctIndex: 1,
      explanation:
        'Een paneelradiator is een rechthoekige stalen plaat met inwendig kanaal — geeft warmte af door zowel straling als convectie. Een convector heeft achter het paneel extra **lamellen** die de convectie versterken — meer warmte per zichtbaar oppervlak. Vaak in convector-putten in de vloer onder ramen, zodat de warme lucht direct opstijgt en de koude valluchtkolom van het raam tegengaat.',
    },
    {
      id: 'C6-3-c',
      toetstermCode: 'C.6.3',
      type: 'mc',
      prompt: 'Een **buffervat** in een verwarmings­installatie heeft welke functie?',
      options: [
        'Het scheiden van warm en koud tapwater',
        'Het opslaan van warmte',
        'Het reinigen van het cv-water',
        'Het meten van de druk',
      ],
      correctIndex: 1,
      explanation:
        'Een buffervat is een geïsoleerd vat (200–1.000 liter) dat warmte opslaat: voor warmtepompen voorkomt het frequent aan-/uitschakelen (verlengt levensduur compressor); voor zonneboilers slaat het zonnewarmte op voor latere afname; voor combisystemen kan het cv-water voorverwarmen of warm tapwater leveren via een spiraal.',
    },
    {
      id: 'C6-3-d',
      toetstermCode: 'C.6.3',
      type: 'mc',
      prompt: 'Wat is een **ledenradiator**?',
      options: [
        'Een modern paneel met platen',
        'Een radiator opgebouwd uit individuele gietijzeren of stalen elementen met holle ruimten tussen',
        'Een radiator met thermostaatkop',
        'Een elektrische handdoekradiator',
      ],
      correctIndex: 1,
      explanation:
        'Ledenradiatoren bestaan uit aparte elementen (leden) van gietijzer of staal, met een holle ruimte tussen waar cv-water doorheen stroomt. Klassiek in vooroorlogse en jaren-50/60 woningen. Modern vervangen door paneelradiatoren (rechthoekige stalen platen). Ledenradiatoren zijn vaak monumentaal en blijven om esthetische redenen.',
    },

    // C.6.4 (2)
    {
      id: 'C6-4-a',
      toetstermCode: 'C.6.4',
      type: 'mc',
      prompt: 'Op een installatietekening voor verwarming worden **cv-aanvoer en cv-retour** vaak weergegeven met:',
      options: [
        'Dezelfde kleur',
        'Verschillende kleuren: aanvoer rood doorgetrokken, retour blauw doorgetrokken',
        'Alleen tekstaanduiding zonder kleur',
        'Streep-stippellijn voor beide',
      ],
      correctIndex: 1,
      explanation:
        'Tekenconventie: cv-aanvoer (heet water naar radiatoren) = rode doorgetrokken lijn; cv-retour (afgekoeld water terug) = blauwe doorgetrokken lijn. Vaak met pijlen voor stroomrichting. Vloerverwarmingsslangen krijgen een eigen aanduiding ("VV" of "FH"). Verdeelunit + buffervat hebben eigen symbolen.',
    },
    {
      id: 'C6-4-b',
      toetstermCode: 'C.6.4',
      type: 'mc',
      prompt: 'Een installatietekening toont aanvoer­temperatuur van **38 °C** en grote vloerverwarmings­zones. Welk type verwarming is dit?',
      options: [
        'HTV met radiatoren',
        'LTV',
        'Lokale verwarming',
        'Elektrische verwarming',
      ],
      correctIndex: 1,
      explanation:
        'Aanvoer 38 °C valt binnen het LTV-bereik (35–55 °C). In combinatie met vloerverwarming is dit typisch een **warmtepomp-systeem** (lucht-water of bodem-water) of een zonneboiler met cv-ondersteuning. Bij HTV (70–80 °C) zouden gewone radiatoren zichtbaar zijn op de tekening en geen vloerverwarming als hoofdsysteem.',
    },

    // C.6.5 (3)
    {
      id: 'C6-5-a',
      toetstermCode: 'C.6.5',
      type: 'mc',
      prompt: 'Wat zijn de **drie hoofdvormen** van warmteoverdracht?',
      options: [
        'Vast, vloeibaar, gas',
        'Geleiding, convectie en straling',
        'Warm, koud, lauw',
        'Elektrisch, thermisch, magnetisch',
      ],
      correctIndex: 1,
      explanation:
        'Drie mechanismen: (1) **Geleiding**: warmte gaat door een vast materiaal van warm naar koud (vloer aan voet); (2) **Convectie**: warme lucht stijgt op of warm water wordt door pomp verplaatst; (3) **Straling**: elektromagnetische infrarood-straling, ook door vacuüm (zon, infrarood-paneel). Elke verwarming combineert vaak meerdere mechanismen.',
    },
    {
      id: 'C6-5-b',
      toetstermCode: 'C.6.5',
      type: 'mc',
      prompt: 'Een **paneelradiator** geeft warmte vooral af via:',
      options: [
        '100 % straling',
        '100 % convectie',
        'Ongeveer 70 % convectie + 30 % straling',
        'Pure geleiding',
      ],
      correctIndex: 2,
      explanation:
        'Een paneelradiator werkt voor ~70 % via convectie (warme lucht stijgt langs het paneel op, koude lucht wordt aangezogen langs de onderkant) en ~30 % via straling (warme oppervlak straalt naar omliggende oppervlakken). Vloerverwarming heeft een omgekeerde verhouding (~60 % straling + 40 % convectie). Infrarood-paneel = ~90 % straling.',
    },
    {
      id: 'C6-5-c',
      toetstermCode: 'C.6.5',
      type: 'mc',
      prompt: 'Waarom voelt **stralings­warmte** (zoals van een infrarood-paneel of open haard) **comfortabeler** dan convectiewarmte?',
      options: [
        'Stralings­warmte is altijd warmer',
        'Stralings­warmte verwarmt direct het lichaam zonder dat de hele luchttemperatuur hoog hoeft te zijn',
        'Convectiewarmte vraagt meer elektriciteit',
        'Stralings­warmte verwarmt de keuken sneller',
      ],
      correctIndex: 1,
      explanation:
        'Stralings­warmte verwarmt direct de oppervlakken in zichtlijn (huid, muren, vloer) — daardoor voelt het lichaam warm zonder dat de luchttemperatuur hoog hoeft te zijn. Bij convectie wordt de hele luchtmassa verwarmd, en koude lucht bij ramen valt naar beneden ("tochtig" gevoel). Vandaar dat in een oude tochtige woonkamer stralings­bron (open haard, infrarood) prettiger aanvoelt dan een radiator.',
    },

    // C.6.6 (2)
    {
      id: 'C6-6-a',
      toetstermCode: 'C.6.6',
      type: 'mc',
      prompt: 'Wat is een groot **voordeel** van **luchtverwarming** ten opzichte van waterverwarming?',
      options: [
        'Lagere energiekosten',
        'Korte opwarmtijd en mogelijkheid om tegelijk ventilatie te leveren',
        'Geen apparaten nodig',
        'Werkt zonder elektriciteit',
      ],
      correctIndex: 1,
      explanation:
        'Luchtverwarming heeft een veel kortere opwarmtijd dan waterverwarming (lucht heeft veel lagere soortelijke warmte dan water). Bovendien combineerbaar met ventilatie + WTW (balansventilatie). Nadelen: grote luchtkanalen nodig (~150–250 mm), geluid van blower, droge lucht. Toepassing vooral in utiliteit en grote ruimten, zelden in woningen.',
    },
    {
      id: 'C6-6-b',
      toetstermCode: 'C.6.6',
      type: 'mc',
      prompt: 'Waarom is **directe elektrische verwarming** in een woning meestal **niet rendabel** als hoofdverwarming?',
      options: [
        'Het werkt niet goed',
        'COP = 1, terwijl een warmtepomp 3–4 kWh warmte per 1 kWh stroom levert',
        'Het is gevaarlijk',
        'Stroom is niet beschikbaar in NL',
      ],
      correctIndex: 1,
      explanation:
        'Directe elektrische verwarming (kachel, infrarood-paneel, elektrische vloerverwarming) heeft een COP van 1: 1 kWh stroom = 1 kWh warmte. Een warmtepomp heeft COP 3–4 → 1 kWh stroom levert 3–4 kWh warmte. Elektrische direct-verwarming is dus 3–4× duurder per warmte-eenheid. Toepassing alleen voor bijverwarming (badkamer, garage) of waar PV-overschot beschikbaar is.',
    },

    // C.6.7 (3)
    {
      id: 'C6-7-a',
      toetstermCode: 'C.6.7',
      type: 'mc',
      prompt: 'Wat is een **HR-ketel**?',
      options: [
        'Een hete radiator',
        'Hoog Rendement cv-ketel',
        'Een ouderwetse open haard',
        'Hybride Radiator',
      ],
      correctIndex: 1,
      explanation:
        'HR = Hoog Rendement. Een HR-ketel condenseert de waterdamp uit de rookgassen — de vrijgekomen condensatiewarmte wordt teruggewonnen, waardoor het rendement boven 90 % kan komen (op bovenwaarde). Kenmerken: rookgasventilator (lagere temperatuur, geen natuurlijke trek), condensafvoer naar riolering (zuur), CW-waarde voor tapwater­comfort.',
    },
    {
      id: 'C6-7-b',
      toetstermCode: 'C.6.7',
      type: 'mc',
      prompt: 'Wat is het verschil tussen een **HR-ketel** en een **HRe-ketel**?',
      options: [
        'HRe is goedkoper',
        'HRe = HR-ketel + Stirling-motor of micro-WKK die naast warmte ook elektriciteit opwekt; werd beperkt toegepast, niet meer relevant in energietransitie weg van gas',
        'HRe staat voor "Hoog Rendement extra"',
        'Het zijn synoniemen',
      ],
      correctIndex: 1,
      explanation:
        'HRe = Hoog Rendement met elektriciteits­opwekking. Bevat een Stirling-motor of micro-WKK (warmte-krachtkoppeling) die naast warmte ~1 kW stroom levert. Co-generation-principe. Beperkt toegepast vanwege hoge kosten en complexiteit. Niet meer relevant nu de energietransitie weg van gas gaat — toekomst is warmtepomp.',
    },
    {
      id: 'C6-7-c',
      toetstermCode: 'C.6.7',
      type: 'mc',
      prompt: 'Een **VR-ketel** wordt vandaag de dag:',
      options: [
        'Standaard nieuw verkocht',
        'Sinds 2015 niet meer geproduceerd in de EU',
        'Niet meer toegestaan',
        'Alleen in oudbouw gerepareerd',
      ],
      correctIndex: 1,
      explanation:
        'VR (Verbeterd Rendement) ketels uit jaren 80–90 met ~80 % rendement. Niet condenserend, rookgassen blijven heet (~150 °C). Door EU-Ecodesign sinds 2015 niet meer geproduceerd. Bestaande VR-ketels mogen nog gebruikt worden, maar bij vervanging moet een HR-ketel of warmtepomp komen. Energiezuinig advies: direct overstappen naar (hybride) warmtepomp.',
    },

    // C.6.8 (4)
    {
      id: 'C6-8-a',
      toetstermCode: 'C.6.8',
      type: 'mc',
      prompt: 'Wat is een **brine-warmtepomp**?',
      options: [
        'Een warmtepomp met zout water',
        'Een bodem-water-warmtepomp met "brine" als dragervloeistof in de gesloten bronlus',
        'Een warmtepomp die op zeewater werkt',
        'Een warmtepomp met fosforzuur',
      ],
      correctIndex: 1,
      explanation:
        '"Brine" = water + glycol (anti-vries) mengsel dat in de gesloten bronlus van een bodem-water-warmtepomp circuleert. Voorkomt bevriezing bij vorst (~-5 °C in de bronvloeistof). Alle moderne gesloten-bron-warmtepompen zijn feitelijk brine-warmtepompen. Mengt zich niet met grondwater (gesloten systeem met warmtewisselaar).',
    },
    {
      id: 'C6-8-b',
      toetstermCode: 'C.6.8',
      type: 'mc',
      prompt: 'Wat is een **hybride warmtepomp**?',
      options: [
        'Een warmtepomp die zowel verwarmt als koelt',
        'Combinatie lucht-water-warmtepomp + HR-ketel als backup',
        'Een warmtepomp op zonne-energie',
        'Een warmtepomp met meerdere bronnen tegelijk',
      ],
      correctIndex: 1,
      explanation:
        'Hybride warmtepomp = lucht-water-warmtepomp + bestaande HR-ketel die samen werken: warmtepomp doet het werk bij milde weer (boven 0 °C), cv-ketel neemt over bij vorst of als de douche piekvraag heeft. Voordelen: geleidelijke transitie, minder strenge isolatie-eisen, lagere investering (€ 5.000–10.000). Nadeel: gasaansluiting blijft. Overheid stimuleert via subsidies — vanaf 2026 standaard bij vervanging cv-ketel.',
    },
    {
      id: 'C6-8-c',
      toetstermCode: 'C.6.8',
      type: 'mc',
      prompt: 'Wat is **WKO (Warmte-Koudeopslag)**?',
      options: [
        'Een opslagtank voor warm tapwater',
        'Bodem-warmtepomp met opslag van warmte/koude in aquifers',
        'Een batterij voor stroom',
        'Een collector voor zonnewarmte',
      ],
      correctIndex: 1,
      explanation:
        'WKO werkt met twee aquifers (water­voerende lagen op ~150 m diepte): één warme + één koude. In winter haalt de warmtepomp warmte uit warm aquifer en infiltreert koud water in koud aquifer. In zomer rechtstreekse koeling uit koud aquifer ("passieve koeling") en warm water terug in warm aquifer voor winter. Zeer hoge COP (10+ bij passieve koeling). Voor grote gebouwen (kantoren, appartementen, scholen). Vergunning provincie/waterschap.',
    },
    {
      id: 'C6-8-d',
      toetstermCode: 'C.6.8',
      type: 'mc',
      prompt: 'De **COP van een lucht-water-warmtepomp** is ~4 bij milde weer maar daalt bij vorst naar:',
      options: [
        'Blijft 4 het hele jaar',
        '~2 bij –10 °C buitenlucht',
        '~0,5',
        'Stijgt naar 8',
      ],
      correctIndex: 1,
      explanation:
        'COP van een lucht-water-warmtepomp is afhankelijk van het temperatuurverschil bron → afgifte. Bij +7 °C buitenlucht en 35 °C aanvoer: COP ~4. Bij –10 °C en 35 °C aanvoer: COP ~2 (efficiëntie halveert). Bij echt strenge vorst (–15 °C) kan de warmtepomp soms onvoldoende warmte leveren — vandaar **hybride systeem** met gas als backup, of **bodem-warmtepomp** met constante 10 °C grondtemperatuur (COP blijft 4+).',
    },

    // C.6.9 (3)
    {
      id: 'C6-9-a',
      toetstermCode: 'C.6.9',
      type: 'mc',
      prompt: 'Wat is de typische **aanvoertemperatuur** van watervoerende vloerverwarming?',
      options: [
        '15–25 °C',
        '35–45 °C',
        '70–90 °C',
        'Boven 100 °C',
      ],
      correctIndex: 1,
      explanation:
        'Vloerverwarming werkt op 35–45 °C aanvoer (LTV). De vloer­temperatuur blijft daardoor onder de Bbl-grens van 29 °C (max. 35 °C lokaal in badkamer). Hogere temperatuur zou een te warme vloer veroorzaken — onaangenaam voor blote voeten en risico op uitzetting van parket of laminaat. Vlakke straling-warmteafgifte van onderaf, ideaal voor warmtepomp (hoge COP).',
    },
    {
      id: 'C6-9-b',
      toetstermCode: 'C.6.9',
      type: 'mc',
      prompt: 'Wat is een typisch **nadeel** van vloerverwarming als hoofdverwarming?',
      options: [
        'Zeer hoge energie­kosten',
        'Lange opwarmtijd',
        'Werkt alleen op gas',
        'Vraagt veel onderhoud',
      ],
      correctIndex: 1,
      explanation:
        'Vloerverwarming heeft een grote thermische massa (cementdekvloer + vloerafwerking) → lange opwarmtijd van 3–6 uur tot stabiel. Goed voor continue verwarming, slecht voor ruimten met grote vraag-pieken (logeerkamer eens per maand). Vloerafwerking moet warmte goed doorlaten: tegels en dunne laminaat zijn ideaal; dik tapijt en zacht parket isoleren te veel.',
    },
    {
      id: 'C6-9-c',
      toetstermCode: 'C.6.9',
      type: 'mc',
      prompt: 'Wanneer is **elektrische vloerverwarming** een goede keuze?',
      options: [
        'Altijd — moderne standaard',
        'Voor bijverwarming in een badkamer of renovatie van een kleine ruimte — COP = 1, maar lage installatie­kosten en geen leidingen nodig; niet voor hoofdverwarming van een hele woning',
        'Voor de hele woning all-electric',
        'Alleen in combinatie met cv-ketel',
      ],
      correctIndex: 1,
      explanation:
        'Elektrische vloerverwarming (verwarmingsmatten) heeft COP = 1 — 3–4× duurder dan watervoerende vloerverwarming met warmtepomp. Toepassing alleen voor: (1) bijverwarming in badkamer (koude tegels); (2) renovatie van kleine ruimte zonder cv-aansluiting; (3) bij hellingbaan/terras voor sneeuwsmelt; (4) wanneer voldoende PV-overschot beschikbaar is. Niet voor hoofdverwarming van een woning.',
    },
  ],

  terms: [
    {
      term: 'CV-ketel',
      definition:
        'Centrale verwarmingsketel — verwarmt water dat via radiatoren of vloerverwarming circuleert.',
    },
    {
      term: 'HR-ketel',
      definition:
        'Hoog Rendement ketel met rookgaswisselaar; rendement > 95% op onderwaarde.',
    },
    {
      term: 'Warmtepomp',
      definition:
        'Verwarmt door warmte uit lucht, bodem of water te onttrekken; rendement (COP) 3-5× elektriciteit ingestopt.',
    },
    {
      term: 'COP',
      definition:
        'Coefficient of Performance — afgegeven warmte gedeeld door verbruikte elektriciteit; warmtepomp goed bij > 3,5.',
    },
    {
      term: 'Bodemwarmte­pomp',
      definition:
        'Warmtepomp die warmte haalt uit grondlussen of bodem­warmtewisselaar; constant rendement, hoge investering.',
    },
    {
      term: 'Lucht-water­warmtepomp',
      definition:
        'Trekt warmte uit buitenlucht via buitenunit, geeft af aan binnen­circulatie; goedkoper dan bodem, COP daalt bij vorst.',
    },
    {
      term: 'Hybride opstelling',
      definition:
        'Warmtepomp + cv-ketel — pomp doet basis­last, ketel piekvraag en tap­water; verplicht bij gas­vervanging vanaf 2026.',
    },
    {
      term: 'Radiator',
      definition:
        'Convector die warmte afgeeft via metaal aan lucht; standaard 70-80 °C aanvoer (geen warmtepomp­temperatuur).',
    },
    {
      term: 'LT-radiator',
      definition:
        'Lage-temperatuur radiator (35-45 °C); groter oppervlak nodig — passend bij warmtepomp.',
    },
    {
      term: 'Vloerverwarming',
      definition:
        'Watergedragen leidingen in dekvloer; werkt op lage temperatuur (35 °C) — ideaal met warmtepomp.',
    },
    {
      term: 'Stadsverwarming',
      definition:
        'Collectief warmtenet dat afval­warmte van energie­centrales gebruikt; aanvoer­temperatuur ~70-90 °C.',
    },
    {
      term: 'Aanvoer­temperatuur',
      definition:
        'Temperatuur van warmwater dat naar afgifte gaat; lager = energiezuiniger maar groter oppervlak nodig.',
    },
    {
      term: 'Inregeling',
      definition:
        'Afstemmen radiatorventielen op gewenste verdeling; voorkomt 1 kamer warm en andere koud.',
    },
    {
      term: 'Buffervat',
      definition:
        'Geïsoleerd watervat dat warmte­capaciteit vergroot; nodig bij warmtepomp om aan/uit-cycli te beperken.',
    },
  ],

  games: [
    {
      id: 'C6-gapfill-1',
      type: 'gapfill',
      title: 'LTV vs HTV — vul aan',
      text:
        'Klassieke cv-installaties werken op {{HTV}} (hoogtemperatuur­verwarming) met aanvoertemperatuur 70–90 °C. Een warmtepomp werkt efficiënt op {{LTV}} (laagtemperatuur­verwarming) met aanvoer 35–55 °C — geschikt voor {{vloerverwarming}}. ' +
        'Het rendement van een warmtepomp wordt uitgedrukt in {{COP}} — bij lucht-water-warmtepomp ongeveer {{4}} bij milde weer.',
      distractors: ['HR', 'cv', 'BENG', 'radiator'],
    },
    {
      id: 'C6-sort-1',
      type: 'sort',
      title: 'Sorteer warmtebronnen',
      description: 'Welk systeem hoort waarbij?',
      categories: ['Verbrandt brandstof', 'Verplaatst warmte', 'Vangt zonne-energie'],
      items: [
        { label: 'HR-cv-ketel (gas)', category: 'Verbrandt brandstof' },
        { label: 'Houtkachel / pellet', category: 'Verbrandt brandstof' },
        { label: 'Lucht-water-warmtepomp', category: 'Verplaatst warmte' },
        { label: 'Bodem-water-warmtepomp (WKO)', category: 'Verplaatst warmte' },
        { label: 'Hybride warmtepomp', category: 'Verplaatst warmte' },
        { label: 'Zonnecollector (zonneboiler)', category: 'Vangt zonne-energie' },
      ],
    },
    {
      id: 'C6-sequence-1',
      type: 'sequence',
      title: 'De dampcompressie-cyclus van een warmtepomp',
      description: 'Zet de vier stappen op volgorde.',
      items: [
        'Verdamper: koudemiddel neemt warmte op uit bron en verdampt',
        'Compressor: gas wordt onder druk gezet — temperatuur stijgt sterk',
        'Condensor: gas geeft warmte af aan cv-water, condenseert weer',
        'Expansieventiel: druk vermindert; cyclus begint opnieuw',
      ],
    },
    {
      id: 'C6-matching-1',
      type: 'matching',
      title: 'Koppel onderdelen',
      pairs: [
        { left: 'Expansievat', right: 'Vangt het uitzettende cv-water op (~1,5 bar)' },
        { left: 'Verdeler', right: 'Verdeelt cv-water over zones, vaak met thermostatische kleppen' },
        { left: 'Buffervat', right: 'Slaat warmte op zodat warmtepomp niet voortdurend hoeft te schakelen' },
        { left: 'Convector', right: 'Radiator met lamellen voor extra convectief oppervlak' },
        { left: 'WKO', right: 'Warmte-koude-opslag in aquifers op ~150 m diepte' },
        { left: 'Isokorf', right: 'Onderbreekt koudebrug bij doorlopende betonbalkon-vloer' },
      ],
    },
  ],
}
