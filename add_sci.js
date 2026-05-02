const fs=require('fs');
let f='c:/xampp/htdocs/Kids Quiz Web Application/questions.js';
let s=fs.readFileSync(f,'utf8');
const n=[
"['Study of plants?',['Botany','Zoology','Geology','Ecology'],'Botany','easy','Paudon ki science?',['Botany','Zoology','Geology','Ecology']]",
"['Study of animals?',['Zoology','Botany','Geology','Physics'],'Zoology','easy','Janwaron ki science?',['Zoology','Botany','Geology','Physics']]",
"['Study of stars?',['Astronomy','Astrology','Geology','Biology'],'Astronomy','easy','Sitaron ki science?',['Astronomy','Astrology','Geology','Biology']]",
"['Instrument to see stars?',['Telescope','Microscope','Periscope','Kaleidoscope'],'Telescope','easy','Sitaray dekhne ka aala?',['Telescope','Microscope','Periscope','Kaleidoscope']]",
"['Largest planet?',['Jupiter','Saturn','Neptune','Uranus'],'Jupiter','easy','Sab se bara sayyara?',['Jupiter','Saturn','Neptune','Uranus']]",
"['Closest planet to Sun?',['Mercury','Venus','Earth','Mars'],'Mercury','easy','Sooraj ke sab se qareeb sayyara?',['Mercury','Venus','Earth','Mars']]",
"['Which gas do plants release?',['Oxygen','Carbon dioxide','Nitrogen','Hydrogen'],'Oxygen','easy','Pauday konsi gas chhorte hain?',['Oxygen','Carbon dioxide','Nitrogen','Hydrogen']]",
"['What pulls objects toward Earth?',['Gravity','Magnetism','Friction','Electricity'],'Gravity','easy','Cheezon ko Zameen ki taraf khainchta hai?',['Gravity','Magnetism','Friction','Electricity']]",
"['Largest human organ?',['Skin','Liver','Heart','Brain'],'Skin','easy','Insaan ka sab se bara azaa?',['Skin','Liver','Heart','Brain']]",
"['Chemical formula of salt?',['NaCl','H2O','CO2','KCl'],'NaCl','easy','Namak ka chemical formula?',['NaCl','H2O','CO2','KCl']]",
"['Solar system center?',['Sun','Earth','Jupiter','Mars'],'Sun','easy','Nizam shamsi ka markaz?',['Sun','Earth','Jupiter','Mars']]",
"['Heart beats per minute?',['72','50','90','100'],'72','medium','Dil ki dharakan har minute?',['72','50','90','100']]",
"['Unit of electric current?',['Ampere','Volt','Watt','Ohm'],'Ampere','medium','Barqee current ki unit?',['Ampere','Volt','Watt','Ohm']]",
"['Rainbow colors count?',['7','5','6','8'],'7','easy','Qous-o-qazah ke rang?',['7','5','6','8']]",
"['Freezing point of water?',['0 C','10 C','-5 C','5 C'],'0 C','easy','Pani ka jamna?',['0 C','10 C','-5 C','5 C']]",
"['Boiling point of water?',['100 C','90 C','110 C','80 C'],'100 C','easy','Pani ka ubalna?',['100 C','90 C','110 C','80 C']]",
"['Unit of force?',['Newton','Joule','Watt','Pascal'],'Newton','medium','Quwwat ki unit?',['Newton','Joule','Watt','Pascal']]",
"['Smallest unit of life?',['Cell','Atom','Molecule','Tissue'],'Cell','medium','Zindagi ka chhota tukra?',['Cell','Atom','Molecule','Tissue']]",
"['Photosynthesis needs?',['Sunlight','Darkness','Cold','Rain'],'Sunlight','easy','Photosynthesis ke liye zaroori?',['Sunlight','Darkness','Cold','Rain']]",
"['Earth spins around?',['Sun','Moon','Mars','Venus'],'Sun','easy','Zameen kis ke gird ghoomti hai?',['Sun','Moon','Mars','Venus']]"
];
let t="sci.forEach(x=>quizData.science.push(q(x[0],s(x[1]),x[2],x[3],x[4],s(x[5]))));";
s=s.replace(t,n.join(',\n')+',\n'+t);
fs.writeFileSync(f,s);
console.log('Added '+n.length+' science questions');
