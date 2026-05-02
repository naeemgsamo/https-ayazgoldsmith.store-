const fs=require('fs');
let f='c:/xampp/htdocs/Kids Quiz Web Application/questions.js';
let s=fs.readFileSync(f,'utf8');
function r(a,b){if(s.includes(a))s=s.replace(a,b);else console.log('SKIP '+a.slice(0,30));}
r("['Synonym of Happy?',['Joyful','Sad','Angry','Tired'],'Joyful','easy'],","['Synonym of Happy?',['Joyful','Sad','Angry','Tired'],'Joyful','easy','Khushi ka hum-mana lafz?',['Khush-numa','Udas','Gussa','Thaka']],");
r("['Opposite of Big?',['Small','Huge','Large','Giant'],'Small','easy'],","['Opposite of Big?',['Small','Huge','Large','Giant'],'Small','easy','Baray ka ulta?',['Chhota','Bara','Wasee','Dhema']],");
r("['Plural of Child?',['Children','Childs','Childes','Childrens'],'Children','easy'],","['Plural of Child?',['Children','Childs','Childes','Childrens'],'Children','easy','Bachay ka jama?',['Bachay','Bachon','Bache','Bachein']],");
r("['Correct spelling?',['Beautiful','Beutiful','Beautifull','Beutifull'],'Beautiful','easy'],","['Correct spelling?',['Beautiful','Beutiful','Beautifull','Beutifull'],'Beautiful','easy','Durust imla?','Beautiful'",["Khoobsurat","Khobsorat","Khubsurat","Khubsorat"]],");

fs.writeFileSync(f,s);
console.log('Done patch4');
