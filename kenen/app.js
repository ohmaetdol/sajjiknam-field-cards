'use strict';
const KEY='sajjiknam-kenen-v1';
let state={};
try{state=JSON.parse(localStorage.getItem(KEY)||'{}')}catch{}
if(!state||typeof state!=='object'||Array.isArray(state))state={};
const fields=[...document.querySelectorAll('[data-key]')],checks=fields.filter(e=>e.type==='checkbox');
const links=[...document.querySelectorAll('nav a')],parts=links.map(a=>document.querySelector(a.getAttribute('href')));
function progress(){
 const qs=checks.filter(e=>e.dataset.kind==='question'),cs=checks.filter(e=>e.dataset.kind==='cut');
 document.getElementById('progressText').textContent=`답 ${qs.filter(e=>e.checked).length}/${qs.length} · 컷·확인 ${cs.filter(e=>e.checked).length}/${cs.length}`;
 document.getElementById('progress').value=checks.filter(e=>e.checked).length/checks.length*100;
 const current=parts.find(p=>!p.hidden),local=[...current.querySelectorAll('input[type=checkbox]')];
 document.getElementById('partProgress').textContent=local.length?`이 장소 ${local.filter(e=>e.checked).length}/${local.length} · 선택 질문은 모두 체크할 필요 없어요`:'장소를 선택하면 질문과 현장컷이 함께 나옵니다';
}
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));document.getElementById('saveState').textContent='이 기기·브라우저에 저장됨'}catch{document.getElementById('saveState').textContent='저장할 수 없습니다. 촬영 기록 내려받기를 이용하세요.'}}
fields.forEach(e=>{if(e.type==='checkbox')e.checked=state[e.dataset.key]===true;else e.value=typeof state[e.dataset.key]==='string'?state[e.dataset.key]:'';e.addEventListener('input',()=>{state[e.dataset.key]=e.type==='checkbox'?e.checked:e.value;save();progress()})});
function showPart(){let idx=links.findIndex(a=>a.getAttribute('href')===location.hash);if(idx<0)idx=0;parts.forEach((p,i)=>p.hidden=i!==idx);links.forEach((a,i)=>{a.classList.toggle('active',i===idx);if(i===idx)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});document.getElementById('partPosition').textContent=`${idx+1} / ${parts.length}`;for(const [id,d]of[['previousPart',-1],['nextPart',1]]){const a=document.getElementById(id),target=links[idx+d];a.hidden=!target;if(target)a.href=target.getAttribute('href')}links[idx].scrollIntoView({block:'nearest',inline:'center'});progress()}
window.addEventListener('hashchange',()=>{showPart();document.querySelector('.sticky').scrollIntoView({block:'start'})});showPart();
document.getElementById('export').onclick=()=>{const rows=fields.map(e=>({장소:e.closest('.part').querySelector('h2').textContent,종류:e.dataset.kind||'메모',항목:e.type==='checkbox'?e.parentElement.innerText:'현장 메모',기록:e.type==='checkbox'?e.checked:e.value}));const url=URL.createObjectURL(new Blob([JSON.stringify({회차:'케넨',버전:1,저장시각:new Date().toISOString(),기록:rows},null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='케넨_촬영기록.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)};
document.getElementById('reset').onclick=()=>{if(!confirm('이 브라우저의 케넨 촬영 체크와 메모를 비울까요? 먼저 촬영 기록을 내려받아 보관할 수 있습니다.'))return;state={};fields.forEach(e=>{if(e.type==='checkbox')e.checked=false;else e.value=''});save();progress()};
