import type { Section } from '../types/content'

export interface TopicMeta {
  code: string
  section: Section
  title: string
  blurb: string
}

/** Lichtgewicht metadata voor alle 38 onderwerpen — geladen bij app-start. */
export const topicMetas: TopicMeta[] = [
  // A
  { code: 'A.1',   section: 'A', title: 'Bouwproces en kostenbegroting',             blurb: 'Wie zijn de bouwdeelnemers, hoe verloopt een bouwproject en hoe wordt de bouwkostenraming opgesteld.' },
  { code: 'A.2.1', section: 'A', title: 'Bouwkundige tekeningen en bestekken',        blurb: 'Hoe lees je een bouwkundige tekening, welke schalen worden gebruikt en wat staat er in een bestek.' },
  { code: 'A.2.2', section: 'A', title: 'Architectuur en stedenbouw',                 blurb: 'Woningtypen, architectuurstromingen door de eeuwen heen en stedenbouwkundige begrippen.' },
  { code: 'A.3',   section: 'A', title: 'Regelgeving: Bbl en Omgevingswet',           blurb: 'Het Besluit bouwwerken leefomgeving en de Omgevingswet: vergunningsplicht, gevolgklassen en toetsing.' },
  // B
  { code: 'B.1',   section: 'B', title: 'Bouwkundige kwaliteiten (Vitruvius)',        blurb: 'De drie eeuwenoude kwaliteitseisen: stevigheid, bruikbaarheid en schoonheid, en hoe ze nog steeds gelden.' },
  { code: 'B.2',   section: 'B', title: 'Hoofdopbouw van een gebouw',                 blurb: 'De zes elementengroepen waaruit elk gebouw is opgebouwd: kelder, fundering, draagconstructie, dak, gevel en installaties.' },
  { code: 'B.3',   section: 'B', title: 'Sterkteleer',                                blurb: 'Hoe krachten op een gebouw werken: permanente en variabele belastingen, druk, trek, buiging en afschuiving.' },
  { code: 'B.4',   section: 'B', title: 'Grondwerken, funderingen en kelders',        blurb: 'De ondergrond in Nederland (klei, zand, veen), funderingssoorten en kelderconstructies.' },
  { code: 'B.5',   section: 'B', title: 'Steenconstructies',                          blurb: 'Soorten metselwerk, verbanden, mortelsoorten en constructieve toepassing van baksteen en kalkzandsteen.' },
  { code: 'B.6',   section: 'B', title: 'Beton',                                      blurb: 'Samenstelling en eigenschappen van beton, wapening, prefab en in-situ toepassingen.' },
  { code: 'B.7',   section: 'B', title: 'Staal',                                      blurb: 'Soorten constructiestaal, profielen, verbindingen en het brandgedrag van staal.' },
  { code: 'B.8',   section: 'B', title: 'Non-ferro metalen',                          blurb: 'Aluminium, koper, zink en lood in de bouw: eigenschappen, corrosie en typische toepassingen.' },
  { code: 'B.9',   section: 'B', title: 'Hout',                                       blurb: 'Loof- en naaldhout, houtsoorten, bewerkingen, verbindingen en zwakheden zoals zwam en houtrot.' },
  { code: 'B.10',  section: 'B', title: 'Houten kozijnen, ramen en deuren',           blurb: 'Maatvoering, onderdelen, beglazing, kitten en onderhoudsgevoeligheid van houten kozijnen.' },
  { code: 'B.11',  section: 'B', title: 'Niet-houten kozijnen, ramen en deuren',      blurb: 'Kunststof en metalen kozijnen: opbouw, voordelen en thermische eigenschappen.' },
  { code: 'B.12',  section: 'B', title: 'Kruipruimtes, vloeren, wanden en plafonds',  blurb: 'Houten balklaag, betonvloeren, wand- en plafondafwerking en kruipruimte-ventilatie.' },
  { code: 'B.13',  section: 'B', title: 'Kappen en daken',                            blurb: 'Kapvormen, dakbedekking (pannen, bitumen, EPDM), dakisolatie en goten.' },
  { code: 'B.14',  section: 'B', title: 'Trappen en liften',                          blurb: 'Trapvormen, trapberekening (aantrede en optrede), leuningen en liftsoorten.' },
  { code: 'B.15',  section: 'B', title: 'Kunststoffen',                               blurb: 'Eigenschappen van thermoplasten en thermoharders, toepassingen in dakbedekking en leidingwerk.' },
  { code: 'B.16',  section: 'B', title: 'Isolatiematerialen',                         blurb: 'De acht examen-relevante isolatiematerialen: steenwol, glaswol, PUR, EPS, XPS en overige.' },
  // C
  { code: 'C.1',   section: 'C', title: 'Riolering en sanitair',                      blurb: 'Buitenriolering, binnenriolering, sanitaire toestellen en het scheiden van vuil- en regenwater.' },
  { code: 'C.2',   section: 'C', title: 'Waterleiding',                               blurb: 'De wateraansluiting, leidingsoorten, legionellapreventie en warmwaterbereiding.' },
  { code: 'C.3',   section: 'C', title: 'Gasinstallaties',                            blurb: 'Aardgasvoorziening, binneninstallatie, veiligheidsaspecten en de transitie naar aardgasvrij.' },
  { code: 'C.4',   section: 'C', title: 'Elektrische installatie',                    blurb: 'De aansluiting op het elektriciteitsnet, de groepenkast, aarding en NEN 1010.' },
  { code: 'C.5',   section: 'C', title: 'Zonnepanelen en -collectoren',               blurb: 'PV-panelen (mono/multikristallijn), thermische collectoren, saldering en terugverdientijd.' },
  { code: 'C.6',   section: 'C', title: 'Verwarming',                                 blurb: 'Lokale en centrale verwarming, ketels, warmtepompen en stooklijnen.' },
  { code: 'C.7',   section: 'C', title: 'Klimaatbeheersing',                          blurb: 'Airconditioning, warmteterugwinning en gebalanceerde ventilatie met koeling.' },
  { code: 'C.8',   section: 'C', title: 'Brandveiligheid',                            blurb: 'Brandklassen, brandmeldinstallaties, vluchtwegen en de eisen uit het Bbl.' },
  { code: 'C.9',   section: 'C', title: 'Ventilatie',                                 blurb: 'Vier ventilatiesystemen (natuurlijk, mechanisch, gebalanceerd), eisen en energielabels.' },
  { code: 'C.10',  section: 'C', title: 'Andere installaties',                        blurb: 'Inbraakbeveiliging (PKVW), domotica, laadpalen en data-installaties.' },
  { code: 'C.11',  section: 'C', title: 'Glaswerk',                                   blurb: 'Glassoorten (enkel, dubbel, HR++, triple), veiligheidsglas, zonwerend glas en Ug-waarden.' },
  { code: 'C.12',  section: 'C', title: 'Hang- en sluitwerk',                         blurb: 'Scharnieren, sloten, cilindersloten, politiesloten en inbraakwerendheidsklassen.' },
  { code: 'C.13',  section: 'C', title: 'Afwerkingen',                                blurb: 'Wandafwerkingen (stuc, tegelwerk, behang, schilderwerk) en vloerbedekkingen.' },
  { code: 'C.14',  section: 'C', title: 'Natuursteen­constructies',                   blurb: 'Stollingsgesteente, sedimentgesteente en metamorf gesteente: eigenschappen en toepassing in de bouw.' },
  // D
  { code: 'D.1',   section: 'D', title: 'Beoordelings­methodieken',                   blurb: 'MJOP met NEN 2767-conditiemeting, inspectiemethoden en rapportageformats.' },
  { code: 'D.2',   section: 'D', title: 'Bouwkundige kwaliteit van gebouwen',         blurb: 'Beoordelen van kozijnen, gevels, daken en funderingen op gebreken en herstelnoodzaak.' },
  { code: 'D.3',   section: 'D', title: 'Bouwfysische toepassingen',                  blurb: 'Thermische schil, Rc-waarde, vochtproblemen (condensatie, optrekkend vocht) en geluidsisolatie.' },
  { code: 'D.4',   section: 'D', title: 'Duurzaamheid en milieu',                     blurb: 'Energielabels, BENG-eisen, circulair bouwen en de materiaallevenscyclus.' },
]
