// AUTOGEGENEREERD via /tmp/gen-materialen.mjs — niet handmatig bijwerken.
//
// Materiaalfoto's voor de herken-sectie. Bron: Wikimedia Commons (openbaar
// gelicentieerd; per foto de licentie + bronlink bewaard voor naamsvermelding).
// Verdeling: Hout 5 · Plaatmateriaal 5 · Metaal 10 · Isolatie 10 · Natuursteen 8 (totaal 38).

export type MateriaalCategorie = 'Hout' | 'Plaatmateriaal' | 'Metaal' | 'Isolatie' | 'Natuursteen'

export interface Materiaal {
  id: string
  name: string
  category: MateriaalCategorie
  /** Waaraan je het materiaal herkent (uit de lesstof). */
  hint: string
  /** Korte licentie-aanduiding (Wikimedia Commons). */
  license: string
  /** Bron-URL op Wikimedia Commons. */
  source: string
}

/** Pad naar de foto in /public. */
export const materiaalFoto = (id: string) => `/figs/materialen/${id}.jpg`

export const materialen: Materiaal[] = [
  { id: 'azobe', name: 'Azobé', category: 'Hout', hint: 'Zeer zwaar, donker paarsbruin hardhout; waterbouw/damwanden.', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Azobe-piece.jpg' },
  { id: 'beuken', name: 'Beuken', category: 'Hout', hint: 'Egaal roze-bruin, fijne dichte nerf met kleine spikkels.', license: 'Public domain', source: 'https://commons.wikimedia.org/wiki/File:Fagus%20wood.jpg' },
  { id: 'douglas', name: 'Douglas', category: 'Hout', hint: 'Roodbruin naaldhout met sterk contrast tussen zomer- en voorjaarshout.', license: 'Wikimedia Commons', source: 'https://commons.wikimedia.org/wiki/File:Douglasie%20Holz.JPG' },
  { id: 'eiken', name: 'Eiken', category: 'Hout', hint: 'Taai loofhout met grove nerf en typische spiegels (mergstralen).', license: 'CC0', source: 'https://commons.wikimedia.org/wiki/File:Parquet_floor_wood_texture.jpg' },
  { id: 'merbau', name: 'Merbau', category: 'Hout', hint: 'Donker roodbruin hardhout met gele aders; vloeren en terras.', license: 'CC BY-SA 3.0', source: 'https://commons.wikimedia.org/wiki/File:MerbauFloor2.jpg' },
  { id: 'hardboard', name: 'Hardboard', category: 'Plaatmateriaal', hint: 'Dun, hard, glad aan één kant en ruw geweven aan de andere.', license: 'Public domain', source: 'https://commons.wikimedia.org/wiki/File:Isorel,_masonite,_hardboard..jpg' },
  { id: 'mdf', name: 'MDF', category: 'Plaatmateriaal', hint: 'Egaal bruin, zeer fijne vezels; gladde, dichte snijkant.', license: 'CC BY-SA 3.0', source: 'https://commons.wikimedia.org/wiki/File:MDF_Sample.jpg' },
  { id: 'multiplex', name: 'Multiplex', category: 'Plaatmateriaal', hint: 'Verlijmde fineerlagen; aan de rand zie je de gestapelde lagen.', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Birch-plywood_kitchen_by_Barber_Osgerby_Associates,_London_1999.jpg' },
  { id: 'osb', name: 'OSB', category: 'Plaatmateriaal', hint: 'Grote, platte houtstrengen kriskras verlijmd.', license: 'CC BY-SA 3.0', source: 'https://commons.wikimedia.org/wiki/File:Oriented_strand_board_at_Courtab%C5%93uf_2011.jpg' },
  { id: 'spaanplaat', name: 'Spaanplaat', category: 'Plaatmateriaal', hint: 'Geperste houtspaanders/snippers, grof en onregelmatig.', license: 'CC BY-SA 3.0 at', source: 'https://commons.wikimedia.org/wiki/File:Particle_board_close_up-horizontal-f22_PNr%C2%B00101.jpg' },
  { id: 'aluminium', name: 'Aluminium', category: 'Metaal', hint: 'Licht, mat zilvergrijs; vormt een dun beschermend oxidelaagje.', license: 'FAL', source: 'https://commons.wikimedia.org/wiki/File:Aluminium_bar_surface_etched.jpg' },
  { id: 'brons', name: 'Brons', category: 'Metaal', hint: 'Bruin-goud koperlegering (koper + tin); klokken, beslag.', license: 'Public domain', source: 'https://commons.wikimedia.org/wiki/File:Sculpture_bronze_texture.jpg' },
  { id: 'staal', name: 'Constructiestaal', category: 'Metaal', hint: 'Grijs, hoge sterkte; onbehandeld roest het (bruine aanslag).', license: 'CC BY 2.0', source: 'https://commons.wikimedia.org/wiki/File:Texture_-_Galvanized_metal.jpg' },
  { id: 'cortenstaal', name: 'Cortenstaal', category: 'Metaal', hint: 'Bewust roestbruine, stabiele oxidehuid als afwerking.', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Weathering_steel_door.jpg' },
  { id: 'gietijzer', name: 'Gietijzer', category: 'Metaal', hint: 'Donkergrijs, korrelig gegoten ijzer; broos maar drukvast.', license: 'CC BY 2.0', source: 'https://commons.wikimedia.org/wiki/File:Gusseisen.jpg' },
  { id: 'koper', name: 'Koper', category: 'Metaal', hint: 'Rood-oranje metaal; verkleurt buiten naar bruin en later groen (patina).', license: 'CC BY 2.0', source: 'https://commons.wikimedia.org/wiki/File:Rainbow_Copper_Texture_Wallpaper_(7001560157).jpg' },
  { id: 'lood', name: 'Lood', category: 'Metaal', hint: 'Zwaar, zacht, dofgrijs; makkelijk te plooien voor loketten/slabben.', license: 'CC BY-SA 2.0', source: 'https://commons.wikimedia.org/wiki/File:Rolled_Lead_Window_Came_from_Winteringham_(FindID_394210).jpg' },
  { id: 'messing', name: 'Messing', category: 'Metaal', hint: 'Goudgeel koperlegering (koper + zink); hang- en sluitwerk.', license: 'CC BY-SA 3.0', source: 'https://commons.wikimedia.org/wiki/File:Brass_223_Win.jpg' },
  { id: 'rvs', name: 'RVS (roestvast staal)', category: 'Metaal', hint: 'Glanzend zilvergrijs, roest niet; vaak geborsteld oppervlak.', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:201703_Stainless_steel_containers_of_BPTD.jpg' },
  { id: 'zink', name: 'Zink', category: 'Metaal', hint: 'Blauwgrijs dakmetaal; mat met lichte glans, voor goten en dakbedekking.', license: 'CC BY 2.0', source: 'https://commons.wikimedia.org/wiki/File:Installation_of_zink_cladding_on_Kiasma_east_fa%C3%A7ade,_1997_(14117140288).jpg' },
  { id: 'cellulose', name: 'Cellulose', category: 'Isolatie', hint: 'Grijs, vlokkig ingeblazen isolatie van gerecycled papier.', license: 'CC BY-SA 3.0', source: 'https://commons.wikimedia.org/wiki/File:Bulk_recycled_cellulose_scan.jpg' },
  { id: 'eps', name: 'EPS (piepschuim)', category: 'Isolatie', hint: 'Wit, opgeschuimde bolletjes ("piepschuim"); licht en stug.', license: 'CC BY-SA 3.0', source: 'https://commons.wikimedia.org/wiki/File:Polistirolo.JPG' },
  { id: 'foamglas', name: 'Foamglas (cellulair glas)', category: 'Isolatie', hint: 'Zwarte, harde plaat van opgeschuimd glas; volledig water-/dampdicht.', license: 'CC BY-SA 3.0', source: 'https://commons.wikimedia.org/wiki/File:Foamed_glass_block.jpg' },
  { id: 'glaswol', name: 'Glaswol', category: 'Isolatie', hint: 'Geel, zachte vezelwol van gesmolten glas; rollen/dekens.', license: 'CC BY-SA 3.0', source: 'https://commons.wikimedia.org/wiki/File:Glass_wool_insulation.jpg' },
  { id: 'houtvezel', name: 'Houtvezel', category: 'Isolatie', hint: 'Bruine, stevige plaat van geperste houtvezels; natuurlijke isolatie.', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Fassadend%C3%A4mmung_mit_Pavatex-Holzfaserd%C3%A4mmplatten,_Sockelplatten_zur_Befestigung_von_Balkonen,_Am_Bach_23,_Lotschen,_99444_Blankenhain,_Th%C3%BCringen.jpg' },
  { id: 'kurk', name: 'Kurk', category: 'Isolatie', hint: 'Bruine geperste kurkkorrels; natuurlijk, vocht- en schimmelbestendig.', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Cork.jpg' },
  { id: 'pur', name: 'PUR / PIR', category: 'Isolatie', hint: 'Geel-bruine harde schuimplaat/schuim; hoge isolatiewaarde.', license: 'CC BY-SA 3.0', source: 'https://commons.wikimedia.org/wiki/File:Spray_Polyurethane_Foam_Application.jpg' },
  { id: 'steenwol', name: 'Steenwol', category: 'Isolatie', hint: 'Geelbruine/grijze minerale wol van gesmolten steen; brandwerend.', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Illegal_mineral_wool_dumping_in_Parco_del_Roccolo_-_Canegrate,_Lombardy,_Italy_-_2021-05-02.jpg' },
  { id: 'vlas', name: 'Vlas', category: 'Isolatie', hint: 'Natuurlijke, blonde vezelplaat/-deken van vlas.', license: 'CC BY-SA 3.0', source: 'https://commons.wikimedia.org/wiki/File:Termolen.jpg' },
  { id: 'xps', name: 'XPS', category: 'Isolatie', hint: 'Gladde, gesloten schuimplaat, vaak roze/blauw/groen; vochtbestendig.', license: 'CC BY-SA 3.0', source: 'https://commons.wikimedia.org/wiki/File:Styrodur.jpg' },
  { id: 'basalt', name: 'Basalt', category: 'Natuursteen', hint: 'Donker, fijnkorrelig vulkanisch gesteente; zeer hard.', license: 'CC BY-SA 3.0', source: 'https://commons.wikimedia.org/wiki/File:Basalt_breccia.jpg' },
  { id: 'graniet', name: 'Graniet', category: 'Natuursteen', hint: 'Hard stollingsgesteente met zichtbare korrels (kwarts, veldspaat, mica).', license: 'CC BY-SA 2.0', source: 'https://commons.wikimedia.org/wiki/File:Granite_slabs_-_geograph.org.uk_-_506683.jpg' },
  { id: 'hardsteen', name: 'Hardsteen (arduin)', category: 'Natuursteen', hint: 'Blauwgrijze kalksteen, vaak met fossielresten; dorpels en treden.', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Arduin.jpg' },
  { id: 'kalksteen', name: 'Kalksteen', category: 'Natuursteen', hint: 'Lichtgrijs/beige afzettingsgesteente, vaak met fossielen.', license: 'CC0', source: 'https://commons.wikimedia.org/wiki/File:Wall_facing-slab_with_a_lotus-flower_pressing_scene,_limestone_-_Museo_Egizio,_Turin_C_1673_p01.jpg' },
  { id: 'leisteen', name: 'Leisteen', category: 'Natuursteen', hint: 'Donkergrijs/zwart, splijt in dunne platen; daken en vloeren.', license: 'CC BY-SA 2.0', source: 'https://commons.wikimedia.org/wiki/File:Stone_wall_with_slate_toppers_-_geograph.org.uk_-_1379083.jpg' },
  { id: 'marmer', name: 'Marmer', category: 'Natuursteen', hint: 'Metamorf gesteente met kenmerkende aders; polijstbaar.', license: 'CC BY-SA 3.0 de', source: 'https://commons.wikimedia.org/wiki/File:Jura-Gelb.jpg' },
  { id: 'travertin', name: 'Travertin', category: 'Natuursteen', hint: 'Lichtbeige kalksteen met typische gaatjes/holten.', license: 'CC0', source: 'https://commons.wikimedia.org/wiki/File:White_ivory_rippled_wavy_travertine_square_ground_floor_tile_texture.jpg' },
  { id: 'zandsteen', name: 'Zandsteen', category: 'Natuursteen', hint: 'Zacht afzettingsgesteente van samengekitte zandkorrels.', license: 'Wikimedia Commons', source: 'https://commons.wikimedia.org/wiki/File:Sandstone.jpg' },
]

export const materiaalCategorieen: MateriaalCategorie[] = ["Hout","Plaatmateriaal","Metaal","Isolatie","Natuursteen"]
