const fs=require('fs');
let out='const quizData={math:[],science:[],gk:[],english:[],urdu:[],islamiat:[],computer:[]};
function q(Q,O,A,D,UQ,UO){return{question:Q,options:O,answer:A,difficulty:D,urduQuestion:UQ||\'\',urduOptions:UO||[]};
function r(a,b){return Math.floor(Math.random()*(b-a+1))+a;
function s(a){let x=a.slice();for(let i=x.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[x[i],x[j]]=[x[j],x[i]];}return x;

// MATH 500+
for(let i=0;i<500;i++){
  let d=i<200?'easy':i<350?'medium':'hard',t=i%12;
  if(t<3){let a=r(1,50),b=r(1,50),ans=a+b;out+=\quizData.math.push(q(' +  = ?',s([,,,].map(String)),'','',' aur  ko jama karein?',[]));\n\;}
  else if(t<5){let a=r(10,100),b=r(1,50),ans=a-b;out+=\quizData.math.push(q(' -  = ?',s([,,,].map(String)),'','',' mein se  ghataein?',[]));\n\;}
  else if(t<7){let a=r(2,20),b=r(2,20),ans=a*b;out+=\quizData.math.push(q(' x  = ?',s([,,,].map(String)),'','',' zarab  barabar?',[]));\n\;}
  else if(t<9){let b=r(2,15),ans=r(2,15),a=b*ans;out+=\quizData.math.push(q(' /  = ?',s([,,,].map(String)),'','',' taqseem  barabar?',[]));\n\;}
  else if(t<10){let a=r(1,100),pct=r(10,90),ans=Math.round(a*pct/100);out+=\quizData.math.push(q('% of  = ?',s([,,,].map(String)),'','',' ka  feesad?',[]));\n\;}
  else if(t<11){let a=r(2,20);out+=\quizData.math.push(q('Square of  = ?',s([,,,].map(String)),'','',' ka murabba?',[]));\n\;}
  else{let n=['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX'];let v=r(1,20);out+=\quizData.math.push(q('What is  in Roman numerals?',s(['','','','']),'','',' ko Roman numeral mein likhein?',[]));\n\;}
}

