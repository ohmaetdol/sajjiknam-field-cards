const cards=[
  {
    "tab": "첫 만남",
    "title": "헬스장 · 지금 무슨 일 하세요?",
    "q": "지금 휴대폰으로 무슨 일 하고 계세요?",
    "goal": "운동을 마치거나 쉬는 모습을 보고 묻는다. 사무실에서 결과를 같이 볼 실제 업무 하나를 고른다.",
    "answers": [
      "무슨 업무인지, 언제 요청했는지",
      "어떤 결과가 나오면 끝난 일인지",
      "자동으로 시작하는지, 대표가 요청하는지"
    ],
    "back": "그럼 이 일은 사무실 가서 결과를 같이 볼 수 있을까요?",
    "follow": [
      "원래는 누가 하던 일이에요?",
      "닭꼬치 사업하시던 분이 이런 방식으로 일하게 된 계기가 있었어요?"
    ],
    "shot": "운동 모습, 휴대폰의 요청 내용·시각·진행 상태. 사무실에서도 같은 작업을 이어 찍기.",
    "note": "평소 운동 중 일을 하지 않으면 운동 후에 찍기. 새로 요청한 작업은 이전부터 돌아가던 것처럼 연결하지 않기."
  },
  {
    "tab": "업무 결과",
    "title": "사무실 · 아까 맡긴 일부터",
    "q": "아까 헬스장에서 봤던 일, 지금 어디까지 됐어요?",
    "goal": "같은 작업의 결과를 열고 대표가 읽고 고치는 모습을 본다. 아직 안 끝났으면 현재 상태부터 본다.",
    "answers": [
      "요청한 작업과 나온 결과가 같은 것인지",
      "그대로 쓸 부분과 사람이 고친 부분",
      "예전에 걸린 시간과 지금 검수까지 걸린 시간"
    ],
    "back": "대표님이 직접 손댄 부분은 정확히 어디예요?",
    "follow": [
      "이 결과를 바로 써도 돼요? 어떤 걸 먼저 확인하세요?",
      "잘못 나왔던 적도 있어요? 그때 누가 발견했어요?",
      "담당 직원에게: 이 일을 전에는 어떻게 하셨어요? 지금도 직접 확인하는 건 뭐예요?"
    ],
    "shot": "요청 → 결과 → 검수·수정 → 실제 사용 화면. 완료 시각과 사람의 작업도 남기기.",
    "note": "당일 끝나지 않으면 그대로 기록. 과거 완료 사례는 별도 사례라고 밝히기. 직원 인터뷰는 동의한 실제 담당자에게."
  },
  {
    "tab": "인원과 돈",
    "title": "사무실 · 그래서 얼마나 달라졌나요?",
    "q": "직원이 가장 많았을 때 몇 명이었고, 어떤 일을 나눠 했어요?",
    "goal": "업무를 본 뒤 인력과 비용을 묻는다. 인원을 줄인 과정과 AI 도입의 효과를 나눠 듣는다.",
    "answers": [
      "최대 직원 수의 시점과 본사·공장·매장 포함 범위",
      "AI 역할 개수와 “40명 업무”라고 말하는 근거",
      "전후 같은 기간의 매출·영업이익·인건비·AI 비용",
      "사업 정리·인원 변동·AI 도입이 각각 미친 영향",
      "현재 인력의 역할과 대표가 직접 결정하는 일"
    ],
    "back": "그래서 이 업무 하나는 시간과 돈이 얼마나 달라졌나요?",
    "follow": [
      "매출이 줄었을 때 제일 먼저 바꾼 건 뭐였어요? 왜 그걸 선택했어요?",
      "AI 비용과 영업이익을 같은 기간 자료로 볼 수 있을까요?",
      "AI 역할 30개와 사람이 하던 40명분 업무는 어떻게 다른 거예요?",
      "지금 함께 일하는 분들은 어떤 일을 맡고 계세요?"
    ],
    "shot": "실제 업무 목록, 월 결제 내역, 같은 기간의 손익 자료. 공개 가능한 범위만.",
    "note": "나이·영업이익·월비용은 아직 확인할 값. AI가 이익 증가의 유일한 원인이라고 단정하지 않기."
  },
  {
    "tab": "현장 적용",
    "title": "교육 현장 · 다른 사람도 해보면",
    "q": "오늘 오신 분들은 어떤 일을 해결하고 싶어 하세요?",
    "goal": "참여자 한 명의 문제와 직접 적용하는 과정을 따라간다. 기능 소개를 반복하기보다 막히는 지점을 본다.",
    "answers": [
      "참여자의 실제 업무 문제 하나",
      "현장에서 직접 해본 결과와 안 된 부분",
      "기대하는 효과와 이미 확인한 성과의 구분"
    ],
    "back": "직접 해보니까 어디까지 됐고, 어디서 막혔어요?",
    "follow": [
      "대표에게: 처음에는 어떤 업무 하나부터 해보라고 하세요?",
      "대표에게: 배워도 회사에서 적용이 안 되는 이유는 뭐예요?",
      "참여자에게: 가장 손이 많이 가는 일이 뭐예요? 돌아가면 뭘 먼저 해보실 거예요?"
    ],
    "shot": "참여자의 입력 → 결과 → 질문 → 피드백. 강의 전경과 실제 반응.",
    "note": "촬영·인터뷰 동의 확인. 자료 제공 안내는 완성된 자료와 링크가 있을 때만. 도입 희망을 실제 성과로 말하지 않기."
  },
  {
    "tab": "사업 이야기",
    "title": "매장 · 키우면서 놓쳤던 것",
    "q": "처음 닭꼬치 팔던 때 사진을 보니까 어떤 일이 먼저 생각나세요?",
    "goal": "현재 매장이나 실제 옛 장소에서 당시 사진을 본다. 고생했다는 요약보다 어떤 일이 있었고 무슨 선택을 했는지 듣는다.",
    "answers": [
      "당시의 구체적인 사건과 그때 한 행동",
      "회사를 키우면서 놓쳤던 것",
      "그때로 돌아가면 바꾸고 싶은 선택"
    ],
    "back": "그날 어떤 일이 있었는지 하나만 들려주실래요?",
    "follow": [
      "그때 가장 먼저 뭘 하셨어요?",
      "대표님이 자리를 비우면 어떤 일이 멈췄어요?",
      "직접 다 하던 때와 지금, 하루에서 가장 달라진 건 뭐예요?"
    ],
    "shot": "매장과 닭꼬치, 당시 사진을 보는 모습, 말을 듣고 반응하는 여유 컷.",
    "note": "현재 공간을 과거 매장인 것처럼 소개하지 않기. 앞에서 들은 연혁은 반복하지 않고 선택과 경험을 듣기."
  },
  {
    "tab": "마무리",
    "title": "매장 · 다시 키운다면",
    "q": "앞으로 더 키우고 싶은 방향과, 다시는 반복하고 싶지 않은 방식은 뭐예요?",
    "goal": "사업의 다음 선택과 대표가 계속 책임질 일을 듣고 마친다.",
    "answers": [
      "앞으로 하고 싶은 일과 이미 실행한 일의 구분",
      "다시 반복하지 않을 방식",
      "AI를 써도 대표가 책임질 일"
    ],
    "back": "그럼 앞으로도 대표님이 직접 해야 하는 일은 뭘까요?",
    "follow": [
      "예전과 같은 선택을 하지 않으려면 뭘 바꿔야 해요?",
      "지금 방식으로 일하면서도 아직 해결하지 못한 게 있어요?"
    ],
    "shot": "대화가 끝난 표정과 매장 풍경, 자연스러운 인사.",
    "note": "AI 변환 시연은 가능하면 짧게만. 생성·변환임을 표시하고 업무와 인물 이야기를 끊지 않기."
  }
];
const locations=[{"name": "헬스장", "items": [0]}, {"name": "사무실", "items": [1, 2]}, {"name": "교육 현장", "items": [3]}, {"name": "매장", "items": [4, 5]}];
const route=locations.flatMap(l=>l.items);
const key='sajjiknam-park-ai-field-v1';let state={checks:{},notes:{},shots:{},index:0};let storageOK=true;
try{const x=JSON.parse(localStorage.getItem(key)||'null');if(x&&typeof x==='object'){state.checks=x.checks||{};state.notes=x.notes||{};state.shots=x.shots||{};state.index=Number.isInteger(x.index)&&x.index>=0&&x.index<cards.length?x.index:0;}}catch(e){storageOK=false;}
const $=id=>document.getElementById(id);const count=cards.reduce((n,c)=>n+c.answers.length,0);
function save(){try{localStorage.setItem(key,JSON.stringify(state));storageOK=true;}catch(e){storageOK=false;}$('save').textContent=storageOK?'이 브라우저에 자동 저장':'저장 불가 · 기록을 내려받아 주세요';}
function progress(){let n=0;cards.forEach((c,i)=>c.answers.forEach((_,j)=>{if(state.checks[i+'-'+j])n++;}));$('total').textContent=`들은 내용 ${n} / ${count}`;$('progress').max=count;$('progress').value=n;const c=cards[state.index];const missing=c.answers.filter((_,j)=>!state.checks[state.index+'-'+j]);$('missing').textContent=missing.length?'더 물어볼 것: '+missing.join(' / '):'이 부분은 다 들었어요.';}
function render(){const i=state.index,c=cards[i];const location=locations.find(l=>l.items.includes(i));$('nav').replaceChildren(...locations.map(l=>{const b=document.createElement('button');b.textContent=l.name;b.setAttribute('aria-current',l===location?'true':'false');b.onclick=()=>{state.index=l.items[0];save();render();$('nav').scrollIntoView({block:'start'});};return b;}));$('topics').replaceChildren(...(location.items.length>1?location.items.map(n=>{const b=document.createElement('button');b.textContent=cards[n].tab;b.setAttribute('aria-current',n===i?'true':'false');b.onclick=()=>{state.index=n;save();render();};return b;}):[]));$('card').innerHTML=`<div class="number">장소 ${locations.indexOf(location)+1} / ${locations.length} · ${location.name}</div><h2>${c.title}</h2><div class="goal"><div class="eyebrow">먼저 볼 상황</div><p>${c.goal}</p></div><div class="question"><div class="eyebrow">상황이 보인 뒤 첫 질문</div><p>“${c.q}”</p></div><div class="check-title">들었으면 체크</div><div id="answers"></div><div class="rescue"><div class="eyebrow">다시 돌아올 질문</div><p>“${c.back}”</p></div><details><summary>이어갈 질문</summary><ul>${c.follow.map(x=>'<li>'+x+'</li>').join('')}</ul></details>${c.note?'<div class="field-note">'+c.note+'</div>':''}`;
c.answers.forEach((a,j)=>{const label=document.createElement('label');label.className='answer';const input=document.createElement('input');input.type='checkbox';input.checked=!!state.checks[i+'-'+j];input.onchange=()=>{state.checks[i+'-'+j]=input.checked;save();progress();};const span=document.createElement('span');span.textContent=a;label.append(input,span);$('answers').append(label);});$('shot').textContent='찍을 것: '+c.shot;$('shotDone').checked=!!state.shots[i];$('memo').value=state.notes[i]||'';$('prev').disabled=i===0;$('next').disabled=i===cards.length-1;$('next').textContent=i===cards.length-1?'마지막 질문':location.items.includes(route[route.indexOf(i)+1])?'다음 이야기 →':'다음 장소 →';progress();const active=$('nav').querySelector('[aria-current=true]'); $('nav').scrollLeft=Math.max(0,active.offsetLeft-60);}
$('memo').oninput=()=>{state.notes[state.index]=$('memo').value;save();};$('shotDone').onchange=()=>{state.shots[state.index]=$('shotDone').checked;save();};
for(const [id,d] of [['prev',-1],['next',1]])$(id).onclick=()=>{state.index=route[Math.max(0,Math.min(route.length-1,route.indexOf(state.index)+d))];save();render();$('nav').scrollIntoView({block:'start'});};
$('export').onclick=()=>{let text='# 박대표님 편 현장 기록\n\n'+new Date().toLocaleString('ko-KR')+'\n';route.forEach(i=>{const c=cards[i];text+='\n## '+locations.find(l=>l.items.includes(i)).name+' · '+c.title+'\n먼저 볼 상황: '+c.goal+'\n'+c.answers.map((a,j)=>'- ['+(state.checks[i+'-'+j]?'x':' ')+'] '+a).join('\n')+'\n- ['+(state.shots[i]?'x':' ')+'] 화면 확보\n\n메모: '+(state.notes[i]||'없음')+'\n';});const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='박대표님_촬영기록.md';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
$('reset').onclick=()=>$('resetDialog').showModal();$('cancelReset').onclick=()=>$('resetDialog').close();$('confirmReset').onclick=()=>{state={checks:{},notes:{},shots:{},index:0};save();render();$('resetDialog').close();};render();save();
