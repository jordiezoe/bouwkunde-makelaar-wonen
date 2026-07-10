import type { TermEntry } from '../types/content'

/**
 * Kies afleiders voor de begrippentrainer die inhoudelijk verband houden met de
 * vraag: zelfde categorie als het juiste begrip (een afwerking krijgt andere
 * afwerkingen als afleider, geen kozijn). Zo kun je niet wegstrepen op thema.
 *
 * Werkwijze: (1) bepaal de categorie van elk begrip via trefwoorden in naam +
 * omschrijving; (2) kies afleiders uit dezelfde categorie, gerangschikt op
 * woord-overlap met de omschrijving (en met voorrang voor hetzelfde onderwerp);
 * (3) vul aan met de meest gelijkende begrippen als een categorie te klein is.
 */

// Categorie-regels, in volgorde van specifiek → algemeen. Eerste match wint.
const RULES: [RegExp, string][] = [
  [/energielabel|beng|circulair|duurzaam|hernieuwb|\bmpg\b|\besg\b|warmtenet|nul ?op ?de ?meter|\bnom\b|passiefhuis|passief huis|levenscyclus|madaster|trias energetica|dubo|bio-?based|energietransitie|klimaatadaptatie/, 'duurzaam'],
  [/mjop|nen ?2767|conditiemet|achterstallig|planmatig|mutatie­?onderhoud|amoveren|instandhoud|renovatie|restauratie|herontwikkel|transformatie|verborgen gebrek|onderhoudsterm/, 'onderhoud'],
  [/\bbrand|blus|rook­?melder|sprinkler|vlucht|compartiment|wbdbo|noodverlicht|slow.?whoop|brandmeld|brandweer/, 'brand'],
  [/ventilat|\bwtw\b|luchtbehandel|afzuig|toevoerroost|balansventilat|shuntkanaal|suskast|\blbk\b|co₂|co2|recirculatie|luchtkwaliteit/, 'ventilatie'],
  [/verwarming|\bcv\b|cv-?ketel|radiator|convector|warmtepomp|vloerverwarm|expansievat|buffervat|\bwko\b|hr-?ketel|hre|ledenradiator|stralingswarmte|ltv|htv|stadsverwarm|topkoeling/, 'verwarming'],
  [/riool|riolering|afvalwater|hemelwater|sifon|closet|\bwc\b|sanitair|waterslot|standleiding|ontstopping|septic|beerput|\bwadi\b|\biba\b|drukriolering/, 'riolering'],
  [/waterleiding|drinkwater|\bkraan\b|mengkraan|watermeter|keerklep|boiler|legionella|tappunt|perlator|quooker|hydrofoor|combiketel/, 'water'],
  [/\bgas\b|gasleiding|gasmeter|aardgas|gasaansluiting|tht|geodoreerd/, 'gas'],
  [/elektr|groepenkast|aardlek|stopcontact|wandcontact|schakelaar|\bkabel|aarding|perilex|\bals\b|krachtstroom|netspanning|loze leiding|utp|domotica|glasvezel|\bcai\b/, 'elektra'],
  [/zonnepaneel|\bpv\b|omvormer|zonnecollector|zonneboiler|wattpiek|\bwp\b|saldering|thuisaccu|micro-?omvormer|optimizer/, 'zon'],
  [/\bglas\b|beglazing|hr\+\+|triple ?glas|isolatieglas|veiligheidsglas|gelaagd glas|gehard glas|monumentenglas|dubbel glas|\blta\b|\bzta\b|g-?waarde|spider|klimaatgevel|vliesgevel/, 'glas'],
  [/kozijn|\braam\b|\bdeur\b|sponning|dagmaat|glaslat|draai-?kiep|valraam|tuimelraam|inmetsel|montagekozijn|neut(?!raal)|dorpel/, 'kozijn'],
  [/scharnier|paumelle|geheng|espagnolet|raamboom|\bslot\b|cilinder|deurkruk|\bkruk\b|hang- ?en ?sluit|inbraakwer|\bskg\b|kerntrek|pkvw|meerpuntsluiting|vrijloop/, 'hangsluit'],
  [/natuursteen|graniet|marmer|hardsteen|arduin|travertin|leisteen|kwartsiet|basalt|stollings|afzettings|metamorf|boucharderen|frijnen|zoeten|gepolijst|kalksteen/, 'natuursteen'],
  [/tegel|stukadoor|pleister|\bstuc|witpleister|raaplaag|spachtel|schilderwerk|\bverf\b|alkyd|acrylaat|latex|\bsaus|beits|\blak\b|behang|laminaat|parket|linoleum|gietvloer|vloerbedekk|plavuis|afwerking|coating|impregn|dhg-?tegel|cementtegel/, 'afwerking'],
  [/\bdak\b|kapvorm|\bkap\b|spant|dakpan|\bnok\b|\bgoot|dakkapel|\bepdm\b|bitumen|dakbedekking|mansarde|zadeldak|schilddak|lessenaar|dakvoet|boeiboord|leipan|groendak|omgekeerd dak/, 'dak'],
  [/fundering|\bpaal|\bhei|grondsoort|\bklei\b|\bveen\b|\bzand\b|drainage|bemaling|damwand|\bkelder|sonder|grondwater|paalrot|kruipruimte/, 'fundering'],
  [/\bbeton\b|wapening|betonrot|prefab|kanaalplaat|breedplaat|betondekking|stort|grindnest|craquelé|paddenstoelvloer|dekvloer/, 'beton'],
  [/\bstaal\b|constructiestaal|walsprofiel|\bhe-?a|\bhe-?b|\bipe\b|\bunp\b|gietijzer|\brvs\b|kniklengte|windverband|raatligger|klinknagel/, 'staal'],
  [/aluminium|\bzink\b|\bkoper\b|\blood\b|messing|nikkel|\bbrons\b|non-?ferro|patina|verzink|solderen|corros/, 'nonferro'],
  [/baksteen|metselwerk|metselverband|halfsteen|\bvoeg|kloostermop|waalformaat|kalkzandsteen|\blatei|spouwmuur|verblend|klezoor|strek\b|\bkop\b|siersteen/, 'metselwerk'],
  [/\bhout\b|hardhout|zachthout|vuren|grenen|meranti|\beiken|beuken|redwood|azobe|\bteak\b|douglas|fineer|triplex|multiplex|spaanplaat|mdf-?plaat|osb|houtwol|gelamineerd|\bclt\b|houtrot|houtworm|boktor|knaagkever|huiszwam|\bzwam|houtverbinding|zwaluwstaart/, 'hout'],
  [/kunststof|\bpvc\b|\bpe\b|polyetheen|polypropeen|polycarbonaat|perspex|thermoplast|thermohard/, 'kunststof'],
  [/isolatie|steenwol|glaswol|\beps\b|\bxps\b|\bpur\b|\bpir\b|foamglas|\bvlas\b|damprem|dampopen|\bsd-?waarde|spouwisolatie/, 'isolatie'],
  [/bouwfysic|koudebrug|\bu-?waarde|\br-?waarde|rc-?waarde|condens|thermische schil|luchtdicht|relatieve vocht|dauwpunt|nagalm|\bdb\(a\)|luchtgeluid|contactgeluid|omloopgeluid|daglicht|\blux\b|\blumen\b|schimmel|optrekkend vocht|doorslaand vocht/, 'bouwfysica'],
  [/kracht|spanning|buiging|\bdruk\b|\btrek\b|belasting|stijfheid|stabiliteit|overspanning|momenten|oplegging|afschuiv|vitruvius|draagconstructie|constructieve/, 'sterkteleer'],
  [/trap|traptrede|aantrede|optrede|bordes|\blift\b|roltrap|hellingbaan|leuning|spiltrap/, 'trap'],
  [/architectuur|bouwstijl|jugendstil|art nouveau|amsterdamse school|de stijl|bauhaus|woningtype|vinex|wederopbouw|stedenbouw|nieuwe bouwen/, 'architectuur'],
  [/bestek|\baannemer|oplevering|\bvergunning|\buav\b|stabu|opdrachtgever|\bwkb\b|kwaliteitsborg|omgevingswet|\bbbl\b|bouwbesluit|bouwvergunning|gevolgklasse|aanbested|bouwproces|initiatieffase/, 'proces'],
  [/tekening|plattegrond|\bschaal\b|doorsnede|situatietekening|arcering|renvooi|stramien|maatlijn|noordpijl|\bpeil\b|kozijnstaat|blad ?\d|bouwtekening|detailtekening/, 'tekening'],
]

const CACHE = new Map<string, string>()
function matchCat(s: string): string {
  const hay = s.toLowerCase()
  for (const [re, c] of RULES) if (re.test(hay)) return c
  return 'overig'
}
export function categoryOf(t: TermEntry): string {
  const key = t.term
  const cached = CACHE.get(key)
  if (cached) return cached
  // Categoriseer primair op de begripsnaam (het concept zelf); alleen als die
  // niets oplevert terugvallen op naam + omschrijving. Zo bepaalt niet een
  // toevallig genoemd woord uit de omschrijving de categorie.
  let cat = matchCat(t.term)
  if (cat === 'overig') cat = matchCat(`${t.term} ${t.definition}`)
  CACHE.set(key, cat)
  return cat
}

const STOP = new Set(['voor', 'door', 'naar', 'zonder', 'tussen', 'omdat', 'wordt', 'worden', 'welke', 'waarbij', 'meestal', 'vaak', 'zoals'])
function sigWords(s: string): string[] {
  return s
    .toLowerCase()
    .replace(/[^a-zà-ÿ0-9 ]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length >= 5 && !STOP.has(w))
}

/** Woord-overlap tussen twee omschrijvingen (met substring/stam-match). */
function defSim(aWords: string[], b: TermEntry): number {
  const bw = sigWords(b.definition)
  let s = 0
  for (const w of bw) {
    for (const t of aWords) {
      if (w === t || w.includes(t) || t.includes(w)) { s++; break }
    }
  }
  return s
}

function shuffle<T>(arr: T[]): T[] {
  return arr.map((x) => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map((y) => y.x)
}

/**
 * Kies `n` afleiders die verband houden met `target`.
 * @param topicTermNames namen van begrippen uit hetzelfde onderwerp (krijgen voorrang).
 */
export function pickRelatedDistractors(
  target: TermEntry,
  all: TermEntry[],
  n = 3,
  topicTermNames?: Set<string>,
): string[] {
  // Dedupe op naam, sluit het doelbegrip uit.
  const seen = new Set<string>([target.term])
  const others: TermEntry[] = []
  for (const t of all) {
    if (seen.has(t.term)) continue
    seen.add(t.term)
    others.push(t)
  }

  const cat = categoryOf(target)
  const tWords = sigWords(target.definition)

  // Rangschik op relevantie (omschrijving-overlap + voorrang zelfde onderwerp).
  const rank = (arr: TermEntry[]) =>
    arr
      .map((t) => ({ t, score: defSim(tWords, t) + (topicTermNames?.has(t.term) ? 2 : 0) }))
      .sort((a, b) => b.score - a.score)
      .map((x) => x.t)

  // Kies bij voorkeur strikt uit dezelfde categorie (afwerking → afwerkingen,
  // vocht → vochtsoorten). Alleen aanvullen met andere categorieën als er te
  // weinig begrippen in de categorie zijn.
  const sameCat = rank(others.filter((t) => categoryOf(t) === cat))
  let pool = sameCat
  if (pool.length < n) pool = [...pool, ...rank(others.filter((t) => categoryOf(t) !== cat))]

  const windowSize = Math.max(n + 3, 6)
  const top = pool.slice(0, windowSize)
  const chosen = shuffle(top).slice(0, n)

  // Zou het venster te klein zijn, vul met willekeurige overige begrippen.
  if (chosen.length < n) {
    const fill = shuffle(others.filter((t) => !chosen.includes(t))).slice(0, n - chosen.length)
    chosen.push(...fill)
  }
  return chosen.map((t) => t.term)
}
