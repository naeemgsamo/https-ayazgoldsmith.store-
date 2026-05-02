let user=null,soundOn=true,darkMode=false,quiz={qs:[],i:0,score:0,streak:0,timer:null,timeLeft:20,totalQ:20};
const subjects={math:{e:'🔢',t:'Math'},science:{e:'🔬',t:'Science'},gk:{e:'🌍',t:'General Knowledge'},english:{e:'📖',t:'English'},urdu:{e:'📜',t:'Urdu'},islamiat:{e:'🕌',t:'Islamiat'},computer:{e:'💻',t:'Computer'}};
const badges=[{t:'Beginner',e:'🥉',min:0},{t:'Intermediate',e:'🥈',min:50},{t:'Master',e:'🥇',min:75},{t:'Quiz Champion',e:'🏆',min:90}];

function $(id){return document.getElementById(id);}
function show(id){document.querySelectorAll('.screen').forEach(s=>{s.classList.remove('active');s.style.display='';});let el=$(id);el.classList.add('active');}
function save(k,v){localStorage.setItem(k,JSON.stringify(v));}
function load(k){try{return JSON.parse(localStorage.getItem(k));}catch(e){return null;}}
const audioCtx=new (window.AudioContext||window.webkitAudioContext)();
function beep(freq,dur,type='sine',vol=.15){
  if(!soundOn||!audioCtx)return;
  try{
    let o=audioCtx.createOscillator(),g=audioCtx.createGain();
    o.type=type;o.frequency.value=freq;
    g.gain.setValueAtTime(vol,audioCtx.currentTime);
    g.gain.exponentialRampToValueAtTime(.001,audioCtx.currentTime+dur);
    o.connect(g);g.connect(audioCtx.destination);
    o.start();o.stop(audioCtx.currentTime+dur);
  }catch(e){}
}
function playSound(type){
  if(!soundOn)return;
  if(type==='click')beep(800,.08,'sine',.12);
  else if(type==='correct'){beep(523,.12,'sine',.18);setTimeout(()=>beep(659,.12,'sine',.18),100);setTimeout(()=>beep(784,.18,'sine',.18),200);setTimeout(()=>beep(1047,.25,'sine',.15),350);}
  else if(type==='wrong'){beep(200,.35,'sawtooth',.12);setTimeout(()=>beep(180,.25,'sawtooth',.1),200);}
  else if(type==='streak'){beep(880,.1,'sine',.15);setTimeout(()=>beep(1100,.1,'sine',.15),100);setTimeout(()=>beep(1320,.2,'sine',.15),200);}
}
function setMascot(emoji){let m=$('mascot');if(m)m.textContent=emoji;}
function starBurst(el){
  let stars=['⭐','✨','🌟','💫'];let rect=el.getBoundingClientRect();
  for(let i=0;i<5;i++){let s=document.createElement('div');s.className='star-burst';s.textContent=stars[i%stars.length];s.style.left=(rect.left+rect.width/2+(-30+Math.random()*60))+'px';s.style.top=(rect.top+rect.height/2+(-30+Math.random()*60))+'px';document.body.appendChild(s);setTimeout(()=>s.remove(),900);}
}
function confetti(){
  const c=$('confetti');c.innerHTML='';
  for(let i=0;i<40;i++){
    let d=document.createElement('div');d.className='confetti-piece';
    d.style.left=Math.random()*100+'%';d.style.background=`hsl(${Math.random()*360},80%,60%)`;
    d.style.animationDuration=(2+Math.random()*2)+'s';d.style.animationDelay=Math.random()*2+'s';
    c.appendChild(d);
  }
  setTimeout(()=>c.innerHTML='',4000);
}

function init(){let fb=$('floatingBg');if(fb){for(let i=0;i<6;i++){let d=document.createElement('div');d.className='shape';let sz=60+Math.random()*140;d.style.cssText=`width:${sz}px;height:${sz}px;background:hsl(${Math.random()*360},80%,70%);left:${Math.random()*100}%;top:${Math.random()*100}%;animation-delay:${i*2}s;animation-duration:${15+Math.random()*10}s`;fb.appendChild(d);}}
  user=load('ksq_user');
  soundOn=load('ksq_sound')!==false;
  darkMode=load('ksq_dark')===true;
  if(darkMode)document.body.classList.add('dark');
  updateSoundBtn();
  if(user){showHome();}else{show('auth');}
  setTimeout(()=>{if($('loading').classList.contains('active'))show(user?'home':'auth');},800);
  $('btnLogin').onclick=()=>{
    let n=$('authName').value.trim(),c=$('authClass').value;
    if(!n||!c){alert('Please enter name and class');return;}
    playSound('click');user={name:n,cls:c,scores:[]};save('ksq_user',user);showHome();
  };
  $('btnSound').onclick=()=>{soundOn=!soundOn;save('ksq_sound',soundOn);updateSoundBtn();playSound('click');};
  $('btnTheme').onclick=()=>{darkMode=!darkMode;document.body.classList.toggle('dark');save('ksq_dark',darkMode);playSound('click');};
  $('btnLogout').onclick=()=>{playSound('click');localStorage.removeItem('ksq_user');location.reload();};
  $('btnLeaderboard').onclick=()=>{playSound('click');showLB();};
  $('btnHistory').onclick=()=>{playSound('click');showHistory();};
  $('btnHome3').onclick=$('btnHome4').onclick=()=>{playSound('click');showHome();};
  $('btnNext').onclick=nextQ;
  $('btnQuizBack').onclick=()=>{playSound('click');clearInterval(quiz.timer);showHome();};
  $('btnReplay').onclick=()=>{playSound('click');showSubject(quiz.subject,quiz.diff);};
  $('btnHome2').onclick=()=>{playSound('click');showHome();};
  renderSubjects();
}

function updateSoundBtn(){$('btnSound').textContent=soundOn?'🔊':'🔇';}
function showHome(){
  show('home');
  $('userInfo').textContent=(user&&user.name)?user.name+' (Class '+user.cls+')':'';
}
function renderSubjects(){
  let h='';
  for(let k in subjects){
    let s=subjects[k];
    let cnt=(quizData[k]||[]).length;h+=`<div class="subject-card" data-sub="${k}"><span class="emoji">${s.e}</span><h3>${s.t}</h3><span class="q-count">${cnt} Questions</span><div class="difficulty">
    <button class="diff-btn" data-sub="${k}" data-diff="easy">Easy</button>
    <button class="diff-btn" data-sub="${k}" data-diff="medium">Medium</button>
    <button class="diff-btn" data-sub="${k}" data-diff="hard">Hard</button>
    <button class="diff-btn" data-sub="${k}" data-diff="all">All</button></div></div>`;
  }
  $('subjects').innerHTML=h;
  document.querySelectorAll('.diff-btn').forEach(b=>b.onclick=(e)=>{e.stopPropagation();playSound('click');showSubject(b.dataset.sub,b.dataset.diff);});
}

function showSubject(sub,diff){
  let pool=quizData[sub]||[];
  if(diff!=='all')pool=pool.filter(q=>q.difficulty===diff);
  if(pool.length===0){alert('No questions for this difficulty');return;}
  let sel=[];let copy=pool.slice();
  for(let i=0;i<Math.min(20,copy.length);i++){let idx=Math.floor(Math.random()*copy.length);sel.push(copy.splice(idx,1)[0]);}
  quiz={qs:sel,i:0,score:0,streak:0,timer:null,timeLeft:20,totalQ:sel.length,subject:sub,diff:diff};
  show('quiz');renderQ();
}

function renderQ(){
  let q=quiz.qs[quiz.i];
  $('qCounter').textContent=(quiz.i+1)+'/'+quiz.totalQ;
  $('qScore').textContent='Score: '+quiz.score;
  $('streak').textContent='🔥 '+quiz.streak;
  let uq=q.urduQuestion?`<span class="urdu-q">${q.urduQuestion}</span>`:'';
  $('qText').innerHTML=q.question+uq;
  $('progressBar').style.width=((quiz.i/quiz.totalQ)*100)+'%';
  let h='';
  q.options.forEach((opt,idx)=>{
    let uo=(q.urduOptions&&q.urduOptions[idx])?`<span class="urdu-text">${q.urduOptions[idx]}</span>`:'';
    h+=`<button class="option-btn" data-idx="${idx}" onclick="pick(${idx})"><span class="opt-main">${String.fromCharCode(65+idx)}. ${opt}</span>${uo}</button>`;
  });
  $('options').innerHTML=h;
  $('btnNext').disabled=true;
  quiz.timeLeft=20;
  updateTimer();
  clearInterval(quiz.timer);
  quiz.timer=setInterval(()=>{quiz.timeLeft--;updateTimer();if(quiz.timeLeft<=0){clearInterval(quiz.timer);autoSkip();}},1000);
  setMascot('🤔');
}
function updateTimer(){$('qTimer').textContent=quiz.timeLeft+'s';$('qTimer').style.color=quiz.timeLeft<=5?'var(--red)':'inherit';}
function autoSkip(){showCorrect();$('btnNext').disabled=false;quiz.streak=0;}
function pick(idx){
  clearInterval(quiz.timer);
  let q=quiz.qs[quiz.i],btns=document.querySelectorAll('.option-btn'),sel=btns[idx];
  let correctIdx=q.options.indexOf(q.answer);
  btns.forEach(b=>b.disabled=true);
  if(q.options[idx]===q.answer){sel.classList.add('correct');playSound('correct');starBurst(sel);quiz.score+=10+quiz.streak;quiz.streak++;if(quiz.streak>=3)playSound('streak');setMascot('🎉');}
  else{sel.classList.add('wrong');btns[correctIdx].classList.add('reveal-correct');playSound('wrong');quiz.streak=0;setMascot('😢');}
  $('qScore').textContent='Score: '+quiz.score;
  $('streak').textContent='🔥 '+quiz.streak;
  $('btnNext').disabled=false;
}
function showCorrect(){let q=quiz.qs[quiz.i],btns=document.querySelectorAll('.option-btn'),ci=q.options.indexOf(q.answer);btns.forEach(b=>b.disabled=true);btns[ci].classList.add('reveal-correct');playSound('wrong');}
function nextQ(){playSound('click');quiz.i++;if(quiz.i>=quiz.totalQ){finish();}else{renderQ();}}

function finish(){
  show('result');
  let pct=Math.round((quiz.score/(quiz.totalQ*10))*100);
  let badge=badges.slice().reverse().find(b=>pct>=b.min)||badges[0];
  $('badge').textContent=badge.e;$('badge-text').textContent=badge.t;
  $('rScore').textContent='Score: '+quiz.score+' / '+(quiz.totalQ*10);
  $('rPercent').textContent=pct+'%';
  let emoji=pct>=90?'😍':pct>=70?'😎':pct>=50?'🙂':'😢';
  $('rEmoji').textContent=emoji;
  if(pct>=70)confetti();
  if(user){user.scores=user.scores||[];user.scores.unshift({date:new Date().toLocaleString(),score:quiz.score,total:quiz.totalQ*10,subject:quiz.subject,diff:quiz.diff});save('ksq_user',user);}
}

function showLB(){
  show('leaderboard');
  let all=[];for(let i=0;i<localStorage.length;i++){let k=localStorage.key(i);if(k.startsWith('ksq_')&&k!=='ksq_user'&&k!=='ksq_sound'&&k!=='ksq_dark'){let u=load(k);if(u&&u.scores&&u.scores.length)all.push({n:u.name,s:u.scores[0].score,t:u.scores[0].total});}}
  let main=load('ksq_user');if(main&&main.scores&&main.scores.length)all.push({n:main.name,s:main.scores[0].score,t:main.scores[0].total});
  all.sort((a,b)=>b.s-a.s);let h='';
  all.slice(0,10).forEach((e,i)=>{h+=`<div class="lb-row"><span><span class="lb-rank">${i+1}</span>${e.n}</span><span>${e.s}/${e.t}</span></div>`;});
  $('lbList').innerHTML=h||'<div class="empty-state">No scores yet 🎯<br>Play a quiz to appear here!</div>';
}
function showHistory(){
  show('history');
  let h='';
  if(user&&user.scores){user.scores.slice(0,20).forEach(e=>{h+=`<div class="hist-row"><span>${e.subject.toUpperCase()} ${e.diff}</span><span>${e.score}/${e.total} - ${e.date}</span></div>`;});}
  $('histList').innerHTML=h||'<div class="empty-state">No history yet 📜<br>Start playing to track your progress!</div>';
}

document.addEventListener('DOMContentLoaded',init);
