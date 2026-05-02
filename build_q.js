const fs=require('fs');
const out='c:/xampp/htdocs/Kids Quiz Web Application/questions.js';
function q(Q,O,A,D,UQ,UO){return JSON.stringify({question:Q,options:O,answer:A,difficulty:D,urduQuestion:UQ||'',urduOptions:UO||[]});}
function r(a,b){return Math.floor(Math.random()*(b-a+1))+a;}
function s(a){let x=a.slice();for(let i=x.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[x[i],x[j]]=[x[j],x[i]];}return x;}

let lines=[];
lines.push('const quizData={math:[],science:[],gk:[],english:[],urdu:[],islamiat:[],computer:[]};');
lines.push('function q(Q,O,A,D,UQ,UO){return{question:Q,options:O,answer:A,diculty:D,urduQuestion:UQ||\'\',urduOptions:UO||[]};}');
lines.push('function r(a,b){return Math.floor(Math.random()*(b-a+1))+a;}');
lines.push('function s(a){let x=a.slice();for(let i=x.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[x[i],x[j]]=[x[j],x[i]];}return x;}');
lines.push('');

// Math
lines.push('for(let i=0;i<220;i++){let d=i<88?\'easy\':i<176?\'medium\':\'hard\';');
lines.push('if(i<55){let a=r(1,20),b=r(1,20),ans=(a+b)+\'\';quizData.math.push(q(`${a} + ${b} = ?`,s([ans,(a+b+1)+\'\',(a+b-1)+\'\',(a+b+2)+\'\']),ans,d,`${a} aur ${b} ko jama karne par kya ata hai?`,[]));}');
lines.push('else if(i<110){let a=r(10,30),b=r(1,10),ans=(a-b)+\'\';quizData.math.push(q(`${a} - ${b} = ?`,s([ans,(a-b+1)+\'\',(a-b-1)+\'\',(a-b+2)+\'\']),ans,d,`${a} mein se ${b} ghatao to kya bachega?`,[]));}');
lines.push('else if(i<165){let a=r(2,12),b=r(2,12),ans=(a*b)+\'\';quizData.math.push(q(`${a} x ${b} = ?`,s([ans,(a*b+1)+\'\',(a*b-1)+\'\',(a*b+a)+\'\']),ans,d,`${a} zarab ${b} barabar?`,[]));}');
lines.push('else{let b=r(2,10),ans=r(2,10),a=b*ans;quizData.math.push(q(`${a} / ${b} = ?`,s([ans+\'\',(ans+1)+\'\',(ans-1)+\'\',(ans+2)+\'\']),ans+\'\',d,`${a} taqseem ${b} barabar?`,[]));}');
lines.push('}');
lines.push('');

// Science
const sci=[
['What is H2O?',['Water','Carbon dioxide','Oxygen','Salt'],'Water','easy','H2O kya hai?',['Pani','Carbon dioxide','Oxygen','Namak']],
['Which planet is red?',['Mars','Venus','Jupiter','Saturn'],'Mars','easy','Kaunsa sayyara surkh hai?',['Mars','Venus','Jupiter','Saturn']],
['Plants absorb?',['Carbon dioxide','Oxygen','Nitrogen','Hydrogen'],'Carbon dioxide','easy','Pauday soondhte hain?',['Carbon dioxide','Oxygen','Nitrogen','Hydrogen']],
['Hardest natural substance?',['Diamond','Gold','Iron','Quartz'],'Diamond','easy','Sab se sakht fitri cheez?',['Heera','Sona','Loha','Quartz']],
['Adult human bones?',['206','208','210','200'],'206','medium','Baligh insaan ki haddiyan?',['206','208','210','200']],
['Speed of light?',['300,000 km/s','150,000 km/s','400,000 km/s','250,000 km/s'],'300,000 km/s','hard','Roshni ki raftar?',['300,000 km/s','150,000 km/s','400,000 km/s','250,000 km/s']],
['Blood pumping organ?',['Heart','Brain','Liver','Lungs'],'Heart','easy','Khoon pump karne wala azaa?',['Dil','Dimagh','Jigar','Phephre']],
['Bees collect?',['Nectar','Pollen','Water','Seeds'],'Nectar','easy','Shehad ki makkhiyan jama karti hain?',['Nectar','Pollen','Pani','Beej']],
['Most abundant gas in air?',['Nitrogen','Oxygen','CO2','Hydrogen'],'Nitrogen','medium','Hawa mein sab se zyada gas?',['Nitrogen','Oxygen','CO2','Hydrogen']],
['Photosynthesis happens in?',['Leaves','Roots','Stem','Flowers'],'Leaves','easy','Photosynthesis kahan hoti hai?',['Pattay','Jarren','Dantha','Phool']],
['Center of atom?',['Nucleus','Electron','Proton','Neutron'],'Nucleus','medium','Atom ka markaz?',['Nucleus','Electron','Proton','Neutron']],
['Largest planet?',['Jupiter','Saturn','Neptune','Uranus'],'Jupiter','easy','Sab se bara sayyara?',['Jupiter','Saturn','Neptune','Uranus']],
['Sun provides?',['Solar energy','Wind','Hydro','Geothermal'],'Solar energy','easy','Sooraj faraham karta hai?',['Solar energy','Hawa','Pani','Geothermal']],
['Red blood cells carry?',['Oxygen','Germs','Food','Waste'],'Oxygen','medium','Surokh khoon ke khalye le jate hain?',['Oxygen','Jaraseem','Khana','Fuzla']],
['Ship of the Desert?',['Camel','Horse','Elephant','Donkey'],'Camel','easy','Sehra ki kashti?',['Oont','Ghora','Hathi','Gadha']],
['Plant-eating animals?',['Herbivores','Carnivores','Omnivores','Scavengers'],'Herbivores','easy','Pauday khane wale janwar?',['Herbivores','Carnivores','Omnivores','Scavengers']],
['Liquid metal at room temp?',['Mercury','Iron','Gold','Silver'],'Mercury','medium','Kamre ke darja hararat par maeey dhaat?',['Para','Loha','Sona','Chandi']],
['Main gas in Sun?',['Hydrogen','Helium','Oxygen','Nitrogen'],'Hydrogen','hard','Sooraj mein mukhiya gas?',['Hydrogen','Helium','Oxygen','Nitrogen']],
['Keeps us on ground?',['Gravity','Magnetism','Friction','Tension'],'Gravity','easy','Hamein zameen par rakhta hai?',['Gravitational force','Magnetism','Friction','Tension']],
['Caterpillar to butterfly?',['Metamorphosis','Photosynthesis','Evolution','Germination'],'Metamorphosis','medium','Caterpillar se titli?',['Tabdeeli','Photosynthesis','Evolution','Ankuran']],
['Universal blood donor?',['O negative','AB positive','A positive','B negative'],'O negative','hard','Universal khoon denay wala?',['O negative','AB positive','A positive','B negative']],
['Cell part with DNA?',['Nucleus','Cytoplasm','Membrane','Mitochondria'],'Nucleus','medium','DNA wala khalye ka hissa?',['Nucleus','Cytoplasm','Jhilli','Mitochondria']],
['Vitamin from sunlight?',['Vitamin D','A','C','B'],'Vitamin D','medium','Dhoop se milne wala vitamin?',['Vitamin D','A','C','B']],
['Study of living things?',['Biology','Chemistry','Physics','Geology'],'Biology','easy','Zinda cheezon ki tadrees?',['Biology','Chemistry','Physics','Geology']],
['Planet with most moons?',['Saturn','Jupiter','Uranus','Neptune'],'Saturn','hard','Sab se zyada chaand wala sayyara?',['Saturn','Jupiter','Uranus','Neptune']],
['Main component of natural gas?',['Methane','Propane','Butane','Ethane'],'Methane','hard','Qudrati gas ka mukhiya juz?',['Methane','Propane','Butane','Ethane']],
['Blood filtering organ?',['Kidneys','Heart','Liver','Lungs'],'Kidneys','medium','Khoon saaf karne wala azaa?',['Gurday','Dil','Jigar','Phephre']],
['Ocean tides caused by?',['Moon gravity','Sun heat','Wind','Earth rotation'],'Moon gravity','medium','Samandar ki madd-jaz kis se ati hain?',['Chaand ki kashish','Sooraj ki garmi','Hawa','Zameen ka chakkar']],
['Flightless bird?',['Penguin','Eagle','Sparrow','Crow'],'Penguin','easy','Be-parwaz parinda?',['Penguin','Eagle','Chirya','Kauwa']],
['Chemical symbol for gold?',['Au','Ag','Fe','Cu'],'Au','medium','Sona ka chemical nishaan?',['Au','Ag','Fe','Cu']],
['Adult human teeth?',['32','28','30','34'],'32','easy','Baligh insaan ke daant?',['32','28','30','34']],
['Largest human organ?',['Skin','Liver','Heart','Brain'],'Skin','medium','Insaan ka sab se bara azaa?',['Jild','Jigar','Dil','Dimagh']],
['Flying dinosaur?',['Pterodactyl','T-Rex','Stegosaurus','Triceratops'],'Pterodactyl','easy','Parwaz karne wala dinosaur?',['Pterodactyl','T-Rex','Stegosaurus','Triceratops']],
['Top layer of Earth?',['Crust','Mantle','Core','Surface'],'Crust','easy','Zameen ki sab se upar wali teh?',['Crust','Mantle','Markaz','Satah']],
['Gas in floating balloons?',['Helium','Hydrogen','Oxygen','Nitrogen'],'Helium','easy','Urtay huay gubbaron mein gas?',['Helium','Hydrogen','Oxygen','Nitrogen']],
['Water to vapor?',['Evaporation','Condensation','Precipitation','Collection'],'Evaporation','easy','Pani se bhaap?',['Bukhari','Tasfiya','Barasna','Jama karna']],
['Largest animal brain?',['Sperm whale','Elephant','Human','Dolphin'],'Sperm whale','hard','Sab se bara janwari dimagh?',['Sperm whale','Hathi','Insaan','Dolphin']],
['Smallest unit of life?',['Cell','Atom','Molecule','Tissue'],'Cell','easy','Zindagi ka sab se chota unit?',['Khalya','Atom','Molecule','Tissue']],
['Closest planet to Sun?',['Mercury','Venus','Earth','Mars'],'Mercury','easy','Sooraj ke sab se qareeb sayyara?',['Mercury','Venus','Zameen','Mars']],
['Magnets attract?',['Iron','Plastic','Wood','Glass'],'Iron','easy','Maqsat kishe karte hain?',['Loha','Plastic','Lakdi','Sheesha']],
['Water vapor to liquid?',['Condensation','Evaporation','Precipitation','Transpiration'],'Condensation','medium','Bhaap se maeey?',['Tasfiya','Bukhari','Barasna','Transpiration']],
['Gas we breathe in?',['Oxygen','Carbon dioxide','Nitrogen','Helium'],'Oxygen','easy','Gas jo hum soondhte hain?',['Oxygen','Carbon dioxide','Nitrogen','Helium']],
['Brain of computer?',['CPU','Monitor','Keyboard','Mouse'],'CPU','easy','Computer ka dimagh?',['CPU','Monitor','Keyboard','Mouse']]
];
lines.push('const sci='+JSON.stringify(sci)+';');
lines.push('for(let i=0;i<220;i++){let x=sci[i%sci.length];quizData.science.push(q(x[0],s(x[1]),x[2],x[3],x[4],x[5]));}');
lines.push('');

fs.writeFileSync(out, lines.join('\n'));
console.log('Written header + math + science');
