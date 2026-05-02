const fs=require('fs');
let f='c:/xampp/htdocs/Kids Quiz Web Application/questions.js';
let s=fs.readFileSync(f,'utf8');

function ins(arrName, newItems){
  let marker=arrName+".forEach(x=>quizData";
  let i=s.indexOf(marker);
  if(i===-1){console.log('Marker not found for '+arrName);return;}
  s=s.slice(0,i)+newItems.join(',\n')+',\n'+s.slice(i);
}

const gk=[
"['Capital of Japan?',['Tokyo','Kyoto','Osaka','Nagoya'],'Tokyo','easy','Japan ka dar-ul-khilafa?',['Tokyo','Kyoto','Osaka','Nagoya']]",
"['Capital of China?',['Beijing','Shanghai','Guangzhou','Shenzhen'],'Beijing','easy','China ka dar-ul-khilafa?',['Beijing','Shanghai','Guangzhou','Shenzhen']]",
"['Capital of India?',['New Delhi','Mumbai','Kolkata','Chennai'],'New Delhi','easy','India ka dar-ul-khilafa?',['New Delhi','Mumbai','Kolkata','Chennai']]",
"['Capital of USA?',['Washington D.C.','New York','Los Angeles','Chicago'],'Washington D.C.','easy','USA ka dar-ul-khilafa?',['Washington D.C.','New York','Los Angeles','Chicago']]",
"['Capital of UK?',['London','Manchester','Birmingham','Liverpool'],'London','easy','UK ka dar-ul-khilafa?',['London','Manchester','Birmingham','Liverpool']]"
];
ins('gk',gk);

fs.writeFileSync(f,s);
console.log('Done');
