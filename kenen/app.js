'use strict';
const legacyLabels={
  "home-0-679363d04b": "아이와 주변 공간을 넓게 → 실제 돌봄 손동작을 가깝게 → 돌봄이 끝나고 업무로 이동하는 모습. 질문 때문에 돌봄을 멈추지 않는다.",
  "home-0-1a11482a91": "“평소에는 하루를 어떻게 시작하세요?”",
  "home-0-af3e6c4dd2": "“오늘은 어떤 일도 하셔야 해요?”",
  "home-0-26c5af36c8": "“그중 오늘 꼭 끝내야 하는 건 뭐예요?”",
  "move-1-4103d54105": "실제 이동 모습과 주변 소리. 휴대폰 업무는 실제 할 때만 찍고, 과거 출퇴근을 재연하지 않는다.",
  "move-1-4bf8b6b5f8": "“이동하면서도 일 보고 계신 거예요?”",
  "move-1-3eaaef7449": "“회사 다닐 때도 이렇게 하셨어요?”",
  "move-1-fd1f83c811": "“그 시간에 어떤 글을 쓰셨어요?”",
  "work-1-c945c465f6": "“언제 돈이 되는 일이라고 느끼셨어요?”",
  "friends-0-8244508d71": "만나 인사하는 모습 → 함께 앉는 장면 → 실제 대화와 상대의 반응. 칭찬이나 웃음을 따로 요청하지 않는다.",
  "friends-0-13f8127a2b": "“두 분은 어떻게 알게 되셨어요?”",
  "friends-0-77ac9c6329": "“그때 케넨님은 어떤 일을 하고 계셨어요?”",
  "friends-0-0dbc4b6e59": "“직접 보신 모습 중에 기억나는 일이 있어요?”",
  "friends-2-f0f686160a": "말을 듣는 친구의 반응과 잠시 쉬는 모습. 답이 끝나자마자 다음 질문을 던지지 않는다.",
  "friends-2-96b7863151": "“아이 낳고 나서 친구 만나는 방식도 달라졌어요?”",
  "friends-2-b299409dbc": "“그 와중에도 계속하고 싶었던 건 뭐였어요?”",
  "friends-2-74c2b9b6da": "“일을 계속한다는 게 지금은 어떤 의미예요?”",
  "prep-8f37757610": "촬영일·집 시작 시간·주소·이동 시간과 실제 회사·친구 일정을 확인했다."
};
const KEY='sajjiknam-kenen-v1';
let state={};
try{state=JSON.parse(localStorage.getItem(KEY)||'{}')}catch{}
if(!state||typeof state!=='object'||Array.isArray(state))state={};
const fields=[...document.querySelectorAll('[data-key]')],checks=fields.filter(e=>e.type==='checkbox');
const links=[...document.querySelectorAll('nav a')],parts=links.map(a=>document.querySelector(a.getAttribute('href')));
function progress(){
 const qs=checks.filter(e=>e.dataset.kind==='core'),cs=checks.filter(e=>e.dataset.kind==='cut');
 document.getElementById('progressText').textContent=`핵심 취재 ${qs.filter(e=>e.checked).length}/${qs.length} · 선택 질문은 필요한 것만`;
 document.getElementById('progress').value=qs.filter(e=>e.checked).length/qs.length*100;
 const current=parts.find(p=>!p.hidden),local=[...current.querySelectorAll('input[type=checkbox]')];
 document.getElementById('partProgress').textContent=local.length?`이 장소 ${local.filter(e=>e.checked).length}/${local.length} · 선택 질문은 모두 체크할 필요 없어요`:'장소를 선택하면 질문과 현장컷이 함께 나옵니다';
}
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));document.getElementById('saveState').textContent='이 기기·브라우저에 저장됨'}catch{document.getElementById('saveState').textContent='저장할 수 없습니다. 촬영 기록 내려받기를 이용하세요.'}}
fields.forEach(e=>{if(e.type==='checkbox')e.checked=state[e.dataset.key]===true;else e.value=typeof state[e.dataset.key]==='string'?state[e.dataset.key]:'';e.addEventListener('input',()=>{state[e.dataset.key]=e.type==='checkbox'?e.checked:e.value;save();progress()})});
function showPart(){let idx=links.findIndex(a=>a.getAttribute('href')===location.hash);if(idx<0)idx=0;parts.forEach((p,i)=>p.hidden=i!==idx);links.forEach((a,i)=>{a.classList.toggle('active',i===idx);if(i===idx)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});document.getElementById('partPosition').textContent=`${idx+1} / ${parts.length}`;for(const [id,d]of[['previousPart',-1],['nextPart',1]]){const a=document.getElementById(id),target=links[idx+d];a.hidden=!target;if(target)a.href=target.getAttribute('href')}links[idx].scrollIntoView({block:'nearest',inline:'center'});progress()}
window.addEventListener('hashchange',()=>{showPart();document.querySelector('.sticky').scrollIntoView({block:'start'})});showPart();
document.getElementById('export').onclick=()=>{const rows=fields.map(e=>({장소:e.closest('.part').querySelector('h2').textContent,종류:e.dataset.kind||'메모',항목:e.type==='checkbox'?e.parentElement.innerText:'현장 메모',기록:e.type==='checkbox'?e.checked:e.value}));const url=URL.createObjectURL(new Blob([JSON.stringify({회차:'케넨',버전:3,저장시각:new Date().toISOString(),기록:rows,이전항목기록:Object.entries(state).filter(([k])=>!fields.some(e=>e.dataset.key===k)).map(([key,value])=>({키:key,항목:legacyLabels[key]||key,기록:value})),전체저장값:state},null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='케넨_촬영기록.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)};
document.getElementById('reset').onclick=()=>{if(!confirm('이 브라우저의 케넨 촬영 체크와 메모를 비울까요? 먼저 촬영 기록을 내려받아 보관할 수 있습니다.'))return;state={};fields.forEach(e=>{if(e.type==='checkbox')e.checked=false;else e.value=''});save();progress()};
