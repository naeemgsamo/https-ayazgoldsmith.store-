const fs = require('fs');
const f = 'c:/xampp/htdocs/Kids Quiz Web Application/questions.js';
let s = fs.readFileSync(f, 'utf8');

// Science translations
const sciMap = {
"['What is H2O?": ["H2O kya hai?", ["Pani", "Carbon dioxide", "Oxygen", "Namak"]],
"['Which planet is red?": ["Kaunsa sayyara surkh hai?", ["Mars", "Venus", "Jupiter", "Saturn"]],
"['Plants absorb?": ["Pauday soondhte hain?", ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"]],
"['Hardest natural substance?": ["Sab se sakht fitri cheez?", ["Heera", "Sona", "Loha", "Quartz"]],
"['Adult human bones?": ["Baligh insaan ki haddiyan?", ["206", "208", "210", "200"]],
"['Speed of light?": ["Roshni ki raftar?", ["300,000 km/s", "150,000 km/s", "400,000 km/s", "250,000 km/s"]],
"['Blood pumping organ?": ["Khoon pump karne wala azaa?", ["Dil", "Dimagh", "Jigar", "Phephre"]],
"['Bees collect?": ["Shehad ki makkhiyan jama karti hain?", ["Shehad ka ras", "Pollen", "Pani", "Beej"]],
"['Most abundant gas in air?": ["Hawa mein sab se zyada gas?", ["Nitrogen", "Oxygen", "CO2", "Hydrogen"]],
"['Photosynthesis happens in?": ["Photosynthesis kahan hoti hai?", ["Pattay", "Jarren", "Dantha", "Phool"]],
"['Center of atom?": ["Atom ka markaz?", ["Nucleus", "Electron", "Proton", "Neutron"]],
"['Largest planet?": ["Sab se bara sayyara?", ["Jupiter", "Saturn", "Neptune", "Uranus"]],
"['Sun provides?": ["Sooraj faraham karta hai?", ["Solar energy", "Hawa", "Pani", "Geothermal"]],
"['Red blood cells carry?": ["Surokh khoon ke khalye le jate hain?", ["Oxygen", "Jaraseem", "Khana", "Fuzla"]],
"['Ship of the Desert?": ["Sehra ki kashti?", ["Oont", "Ghora", "Hathi", "Gadha"]],
"['Plant-eating animals?": ["Pauday khane wale janwar?", ["Herbivores", "Carnivores", "Omnivores", "Scavengers"]],
"['Liquid metal at room temp?": ["Kamre ke darja hararat par maeey dhaat?", ["Para", "Loha", "Sona", "Chandi"]],
"['Main gas in Sun?": ["Sooraj mein mukhiya gas?", ["Hydrogen", "Helium", "Oxygen", "Nitrogen"]],
"['Keeps us on ground?": ["Hamein zameen par rakhta hai?", ["Gravitational force", "Magnetism", "Friction", "Tension"]],
"['Caterpillar to butterfly?": ["Caterpillar se titli?", ["Tabdeeli", "Photosynthesis", "Evolution", "Ankuran"]],
"['Universal blood donor?": ["Universal khoon denay wala?", ["O negative", "AB positive", "A positive", "B negative"]],
"['Cell part with DNA?": ["DNA wala khalye ka hissa?", ["Nucleus", "Cytoplasm", "Jhilli", "Mitochondria"]],
"['Vitamin from sunlight?": ["Dhoop se milne wala vitamin?", ["Vitamin D", "A", "C", "B"]],
"['Study of living things?": ["Zinda cheezon ki tadrees?", ["Biology", "Chemistry", "Physics", "Geology"]],
"['Planet with most moons?": ["Sab se zyada chaand wala sayyara?", ["Saturn", "Jupiter", "Uranus", "Neptune"]],
"['Main component of natural gas?": ["Qudrati gas ka mukhiya juz?", ["Methane", "Propane", "Butane", "Ethane"]],
"['Blood filtering organ?": ["Khoon saaf karne wala azaa?", ["Gurday", "Dil", "Jigar", "Phephre"]],
"['Ocean tides caused by?": ["Samandar ki madd-jaz kis se ati hain?", ["Chaand ki kashish", "Sooraj ki garmi", "Hawa", "Zameen ka chakkar"]],
"['Flightless bird?": ["Be-parwaz parinda?", ["Penguin", "Eagle", "Chirya", "Kauwa"]],
"['Chemical symbol for gold?": ["Sona ka chemical nishaan?", ["Au", "Ag", "Fe", "Cu"]],
"['Adult human teeth?": ["Baligh insaan ke daant?", ["32", "28", "30", "34"]],
"['Largest human organ?": ["Insaan ka sab se bara azaa?", ["Jild", "Jigar", "Dil", "Dimagh"]],
"['Flying dinosaur?": ["Parwaz karne wala dinosaur?", ["Pterodactyl", "T-Rex", "Stegosaurus", "Triceratops"]],
"['Top layer of Earth?": ["Zameen ki sab se upar wali teh?", ["Crust", "Mantle", "Markaz", "Satah"]],
"['Gas in floating balloons?": ["Urtay huay gubbaron mein gas?", ["Helium", "Hydrogen", "Oxygen", "Nitrogen"]],
"['Water to vapor?": ["Pani se bhaap?", ["Bukhari", "Tasfiya", "Barasna", "Jama karna"]],
"['Largest animal brain?": ["Sab se bara janwari dimagh?", ["Sperm whale", "Hathi", "Insaan", "Dolphin"]],
"['Smallest unit of life?": ["Zindagi ka sab se chota unit?", ["Khalya", "Atom", "Molecule", "Tissue"]],
"['Closest planet to Sun?": ["Sooraj ke sab se qareeb sayyara?", ["Mercury", "Venus", "Zameen", "Mars"]],
"['Magnets attract?": ["Maqsat kishe karte hain?", ["Loha", "Plastic", "Lakdi", "Sheesha"]],
"['Water vapor to liquid?": ["Bhaap se maeey?", ["Tasfiya", "Bukhari", "Barasna", "Transpiration"]],
"['Gas we breathe in?": ["Gas jo hum soondhte hain?", ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"]],
"['Brain of computer?": ["Computer ka dimagh?", ["CPU", "Monitor", "Keyboard", "Mouse"]]
};

for (let k in sciMap) {
  let v = sciMap[k];
  let opts = JSON.stringify(v[1]);
  let rep = `['${v[0]}',${opts},'${v[1][v[1].indexOf(v[1].find(x=>x))]}','`;
  // This approach is too fragile. Let me use a simpler regex approach.
}

// Simpler approach: just replace each question line
for (let k in sciMap) {
  let enQ = k.slice(2);
  let v = sciMap[k];
  let urQ = v[0];
  let urOpts = JSON.stringify(v[1]);
  // Find the line starting with ['enQ
  let regex = new RegExp("\\['" + enQ.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + "',\\[");
  let idx = s.search(regex);
  if (idx >= 0) {
    let end = s.indexOf("']", idx);
    let line = s.slice(idx, end + 2);
    let newLine = line.slice(0, -2) + "'," + urOpts + "," + urQ + "']";
    s = s.slice(0, idx) + newLine + s.slice(end + 2);
  }
}

fs.writeFileSync(f, s);
console.log('Done science');
