const fs=require('fs');
let f='c:/xampp/htdocs/Kids Quiz Web Application/questions.js';
let s=fs.readFileSync(f,'utf8');
let n="],['Vitamin C source?',['Orange','Rice','Milk','Bread'],'Orange','easy','Vitamin C ka zariya?',['Orange','Rice','Milk','Bread']],['Human body temperature?',['37 C','30 C','40 C','35 C'],'37 C','easy','Insaan ka jism ka temperature?',['37 C','30 C','40 C','35 C']],['Which is a mammal?',['Whale','Shark','Crocodile','Eagle'],'Whale','medium','Kaunsa doodh pilane wala janwar hai?',['Whale','Shark','Crocodile','Eagle']],['What do bees make?',['Honey','Milk','Wax','Silk'],'Honey','easy','Makhi kya banati hai?',['Honey','Milk','Wax','Silk']],['Acid in lemon?',['Citric','Acetic','Lactic','Sulfuric'],'Citric','medium','Limoo mein kaunsa tezab?',['Citric','Acetic','Lactic','Sulfuric']]";
s=s.replace("];\r\nsci.forEach",n+"];\r\nsci.forEach");
fs.writeFileSync(f,s);
