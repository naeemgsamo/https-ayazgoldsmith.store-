const fs=require('fs');
let f='c:/xampp/htdocs/Kids Quiz Web Application/questions.js';
let s=fs.readFileSync(f,'utf8');
let n="],['Capital of France?',['Paris','Lyon','Marseille','Nice'],'Paris','easy','France ka dar-ul-khilafa?',['Paris','Lyon','Marseille','Nice']],['Capital of Germany?',['Berlin','Munich','Hamburg','Frankfurt'],'Berlin','easy','Germany ka dar-ul-khilafa?',['Berlin','Munich','Hamburg','Frankfurt']],['Capital of Russia?',['Moscow','St. Petersburg','Novosibirsk','Yekaterinburg'],'Moscow','easy','Russia ka dar-ul-khilafa?',['Moscow','St. Petersburg','Novosibirsk','Yekaterinburg']],['Capital of Brazil?',['Brasilia','Rio de Janeiro','Sao Paulo','Salvador'],'Brasilia','easy','Brazil ka dar-ul-khilafa?',['Brasilia','Rio de Janeiro','Sao Paulo','Salvador']],['Capital of Australia?',['Canberra','Sydney','Melbourne','Brisbane'],'Canberra','easy','Australia ka dar-ul-khilafa?',['Canberra','Sydney','Melbourne','Brisbane']]";
s=s.replace("];\r\ngk.forEach",n+"];\r\ngk.forEach");
fs.writeFileSync(f,s);
