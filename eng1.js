const fs=require('fs');
let f='c:/xampp/htdocs/Kids Quiz Web Application/questions.js';
let s=fs.readFileSync(f,'utf8');
function r(a,b){if(s.includes(a))s=s.replace(a,b);else console.log('SKIP '+a.slice(0,30));}
r("['Synonym of Happy?',['Joyful','Sad','Angry','Tired'],'Joyful','easy'],","['Synonym of Happy?',['Joyful','Sad','Angry','Tired'],'Joyful','easy','Khushi ka ham-mana lafz?',['Khush-numa','Udas','Gussa','Thaka']],");
r("['Opposite of Big?',['Small','Huge','Large','Giant'],'Small','easy'],","['Opposite of Big?',['Small','Huge','Large','Giant'],'Small','easy','Baray ka ulta?',['Chhota','Bara','Wasee','Dhema']],");
r("['Plural of Child?',['Children','Childs','Childes','Childrens'],'Children','easy'],","['Plural of Child?',['Children','Childs','Childes','Childrens'],'Children','easy','Bachay ka jama?',['Bachay','Bachon','Bache','Bachein']],");
r("['Correct spelling?',['Beautiful','Beutiful','Beautifull','Beutifull'],'Beautiful','easy'],","['Correct spelling?',['Beautiful','Beutiful','Beautifull','Beutifull'],'Beautiful','easy','Durust imla?',['Beautiful','Beutiful','Beautifull','Beutifull']],");
r("['Past tense of Go?',['Went','Gone','Going','Goes'],'Went','easy'],","['Past tense of Go?',['Went','Gone','Going','Goes'],'Went','easy','Jane ka maazi zamana?',['Gaya','Gaya tha','Ja raha hai','Jata hai']],");
r("['Person who writes books?',['Author','Painter','Singer','Actor'],'Author','easy'],","['Person who writes books?',['Author','Painter','Singer','Actor'],'Author','easy','Kitab likhne wala?',['Musannif','Painter','Singer','Actor']],");
r("['Synonym of Fast?',['Quick','Slow','Lazy','Late'],'Quick','easy'],","['Synonym of Fast?',['Quick','Slow','Lazy','Late'],'Quick','easy','Tez ka ham-mana lafz?',['Jald','Sust','Sust','Der']],");
r("['Opposite of Hot?',['Cold','Warm','Boiling','Sunny'],'Cold','easy'],","['Opposite of Hot?',['Cold','Warm','Boiling','Sunny'],'Cold','easy','Garam ka ulta?',['Thanda','Garam','Ubalta','Dhoop']],");
r("['Which is a noun?',['Dog','Run','Quickly','Beautiful'],'Dog','medium'],","['Which is a noun?',['Dog','Run','Quickly','Beautiful'],'Dog','medium','Konsa ism hai?',['Kutta','Daudna','Jaldi','Khoobsurat']],");
r("['Which is a verb?',['Jump','Happy','Blue','Table'],'Jump','medium'],","['Which is a verb?',['Jump','Happy','Blue','Table'],'Jump','medium','Konsa fail hai?',['Koodna','Khush','Neela','Mez']],");
r("['Plural of Mouse?',['Mice','Mouses','Mices','Mousees'],'Mice','medium'],","['Plural of Mouse?',['Mice','Mouses','Mices','Mousees'],'Mice','medium','Choohe ka jama?',['Choohay','Choohay','Choohay','Choohay']],");
r("['Correct spelling?',['Necessary','Neccessary','Necesary','Necessery'],'Necessary','medium'],","['Correct spelling?',['Necessary','Neccessary','Necesary','Necessery'],'Necessary','medium','Durust imla?',['Necessary','Neccessary','Necesary','Necessery']],");
r("['Feminine of Lion?',['Lioness','Lion','Leopard','Tiger'],'Lioness','easy'],","['Feminine of Lion?',['Lioness','Lion','Leopard','Tiger'],'Lioness','easy','Sher ki mada?',['Sherni','Sher','Tendua','Baagh']],");
r("['Place to keep books?',['Library','Kitchen','Garden','Hospital'],'Library','easy'],","['Place to keep books?',['Library','Kitchen','Garden','Hospital'],'Library','easy','Kitabon ki jagah?',['Library','Kitchen','Garden','Hospital']],");
r("['Opposite of Brave?',['Cowardly','Strong','Bold','Fearless'],'Cowardly','easy'],","['Opposite of Brave?',['Cowardly','Strong','Bold','Fearless'],'Cowardly','easy','Bahadur ka ulta?',['Buzdil','Mazboot','Diler','Be-khauf']],");

fs.writeFileSync(f,s);
console.log('Done eng1');
