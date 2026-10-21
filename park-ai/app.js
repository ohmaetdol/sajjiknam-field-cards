const cards=[
  {
    "tab": "첫 만남",
    "title": "헬스장 · 하루와 오늘 맡긴 일",
    "q": "운동은 보통 이 시간에 하세요?",
    "goal": "운동을 마치거나 쉬는 모습을 보고 묻는다. 사무실에서 결과를 같이 볼 실제 업무 하나를 고른다.",
    "answers": [
      "무슨 업무인지, 언제 요청했는지",
      "어떤 결과가 나오면 끝난 일인지",
      "자동으로 시작하는지, 대표가 요청하는지"
    ],
    "back": "오늘 맡긴 일 하나만 골라서, 어떻게 끝나는지 같이 봐도 될까요?",
    "follow": [
      "업무 화면을 보며: 이건 언제 맡기신 거예요? 어떤 결과가 나오면 되는 거예요?",
      "운동 중 업무가 진행된다고 하면: 대표님이 따로 눌러줘야 하는 건 없어요?",
      "AI를 쓰기 시작한 계기를 들은 뒤: 그때 처음 맡겨본 일은 뭐였어요?",
      "이동 전: 아까 그 일은 사무실 가서 결과를 같이 볼 수 있을까요?"
    ],
    "shot": "운동 모습, 휴대폰의 요청 내용·시각·진행 상태. 사무실에서도 같은 작업을 이어 찍기.",
    "note": "평소 운동 중 일을 하지 않으면 운동 후에 찍기. 새로 요청한 작업은 이전부터 돌아가던 것처럼 연결하지 않기.",
    "main": [
      "운동 끝나면 오늘은 어떤 일부터 하세요?",
      "지금 휴대폰으로 확인하시는 건 무슨 일이에요?",
      "닭꼬치 사업을 하시다가 AI를 일에 쓰기 시작한 건 언제였어요?"
    ]
  },
  {
    "tab": "업무 결과",
    "title": "사무실 · 결과를 같이 보며",
    "q": "아까 헬스장에서 봤던 일, 결과 한번 볼 수 있을까요?",
    "goal": "같은 작업의 결과를 열고 대표가 읽고 고치는 모습을 본다. 아직 안 끝났으면 현재 상태부터 본다.",
    "answers": [
      "요청한 작업과 나온 결과가 같은 것인지",
      "그대로 쓸 부분과 사람이 고친 부분",
      "예전에 걸린 시간과 지금 검수까지 걸린 시간"
    ],
    "back": "이 화면에서 대표님이 고친 곳을 하나 보여주실 수 있어요?",
    "follow": [
      "시간을 비교할 때: 예전에는 한 건에 얼마나 걸렸어요? 지금은 확인하고 고치는 데 얼마나 걸려요?",
      "잘된 결과만 나올 때: 최근에 엉뚱하게 나온 적은 없었어요? 그때 어떻게 고쳤어요?",
      "완료되지 않았으면: 지금 어느 단계예요? 보통 얼마나 더 기다려야 해요?",
      "실제로 쓰는지 확인: 이 결과는 어디에 쓰실 거예요? 실제 사용한 사례도 볼 수 있을까요?",
      "담당 직원에게: 이 일이 바뀌고 나서 하루에 하는 일이 어떻게 달라졌어요? 아직 직접 확인하는 건 뭐예요?"
    ],
    "shot": "요청 → 결과 → 검수·수정 → 실제 사용 화면. 완료 시각과 사람의 작업도 남기기.",
    "note": "당일 끝나지 않으면 그대로 기록. 과거 완료 사례는 별도 사례라고 밝히기. 직원 인터뷰는 동의한 실제 담당자에게.",
    "main": [
      "이 결과에서 그대로 쓰실 부분은 어디예요?",
      "지금 대표님이 고쳐야 하는 부분도 있어요?",
      "이 일을 예전에는 누가 어떻게 했어요?"
    ]
  },
  {
    "tab": "인원과 돈",
    "title": "사무실 · 사람과 비용은 어떻게 바뀌었나",
    "q": "회사가 가장 컸을 때는 몇 명이 함께 일했어요?",
    "goal": "업무를 본 뒤 인력과 비용을 묻는다. 인원을 줄인 과정과 AI 도입의 효과를 나눠 듣는다.",
    "answers": [
      "최대 직원 수의 시점과 본사·공장·매장 포함 범위",
      "AI 역할 개수와 “40명 업무”라고 말하는 근거",
      "전후 같은 기간의 매출·영업이익·인건비·AI 비용",
      "사업 정리·인원 변동·AI 도입이 각각 미친 영향",
      "현재 인력의 역할과 대표가 직접 결정하는 일"
    ],
    "back": "아까 본 업무 하나만 놓고 보면, 예전 비용과 지금 비용이 각각 얼마예요?",
    "follow": [
      "인원 답변 뒤: 그 숫자에 공장이나 매장 직원도 포함돼요? 지금은 몇 분이 무슨 일을 맡고 계세요?",
      "변화의 계기가 나오면: 그때 실제로 무슨 일이 있었어요? 다른 방법도 생각해보셨어요?",
      "AI 역할을 보며: 지금 실제로 쓰는 역할은 몇 개예요? “40명 업무”라는 건 어떤 일을 기준으로 하신 말씀이에요?",
      "결제 내역을 보며: 구독료 말고 사용량이나 서버 비용도 들어요? 전부 합치면 얼마예요?",
      "수익을 물을 때: 같은 기간으로 보면 매출은 얼마였고 영업이익은 얼마였어요? 비교할 자료를 볼 수 있을까요?",
      "이익이 늘었다면: 사업을 줄이거나 다른 비용을 줄인 영향도 있었어요? AI로 줄인 비용은 따로 알 수 있을까요?",
      "인원이 줄었다면: 사업을 정리한 시기와 AI를 도입한 시기는 어떻게 돼요? 인력이 바뀐 과정도 설명해주실 수 있어요?"
    ],
    "shot": "실제 업무 목록, 월 결제 내역, 같은 기간의 손익 자료. 공개 가능한 범위만.",
    "note": "나이·영업이익·월비용은 아직 확인할 값. AI가 이익 증가의 유일한 원인이라고 단정하지 않기.",
    "main": [
      "일하는 방식을 바꿔야겠다고 느낀 일이 있었어요?",
      "그때 제일 먼저 바꾼 건 뭐였어요?",
      "바꾸기 전과 지금, 한 달에 드는 비용은 어떻게 달라졌어요?"
    ]
  },
  {
    "tab": "현장 적용",
    "title": "교육 현장 · 배우는 사람의 일",
    "q": "오늘은 어떤 분들이 배우러 오셨어요?",
    "goal": "참여자 한 명의 문제와 직접 적용하는 과정을 따라간다. 기능 소개를 반복하기보다 막히는 지점을 본다.",
    "answers": [
      "참여자의 실제 업무 문제 하나",
      "현장에서 직접 해본 결과와 안 된 부분",
      "기대하는 효과와 이미 확인한 성과의 구분"
    ],
    "back": "오늘 해본 것 중 회사에 돌아가서 바로 써볼 수 있는 건 뭐예요?",
    "follow": [
      "참여자에게: 원래 그 일은 어떻게 하셨어요? 한 번에 얼마나 걸려요?",
      "잘 안 되면: 지금 어느 부분에서 막히신 거예요?",
      "결과를 보며: 회사에서 바로 쓸 수 있겠어요? 더 고쳐야 할 게 있어요?",
      "대표에게: 처음 배우는 분들은 주로 어디에서 어려워하세요?",
      "대표에게: 배운 뒤 회사에서 실제로 쓰려면 무엇을 더 준비해야 해요?",
      "이미 쓰던 참여자에게만: 얼마나 써보셨어요? 쓰기 전과 달라진 사례가 있어요?"
    ],
    "shot": "참여자의 입력 → 결과 → 질문 → 피드백. 강의 전경과 실제 반응.",
    "note": "촬영·인터뷰 동의 확인. 자료 제공 안내는 완성된 자료와 링크가 있을 때만. 도입 희망을 실제 성과로 말하지 않기.",
    "main": [
      "대표에게: 오늘 이분들이 직접 해보실 일은 뭐예요?",
      "참여자에게: 회사에서 어떤 일을 하시는데 이걸 배우러 오셨어요?",
      "참여자에게: 방금 직접 해보니까 어디까지 됐어요?"
    ]
  },
  {
    "tab": "사업 이야기",
    "title": "매장 · 처음 장사하던 때부터",
    "q": "처음 닭꼬치를 팔았던 날 기억나세요?",
    "goal": "현재 매장이나 실제 옛 장소에서 당시 사진을 본다. 고생했다는 요약보다 어떤 일이 있었고 무슨 선택을 했는지 듣는다.",
    "answers": [
      "당시의 구체적인 사건과 그때 한 행동",
      "회사를 키우면서 놓쳤던 것",
      "그때로 돌아가면 바꾸고 싶은 선택"
    ],
    "back": "그때 어떤 일이 생겼고, 대표님은 바로 다음에 뭘 하셨어요?",
    "follow": [
      "첫 장사 이야기: 어디서 시작하셨어요? 준비할 돈은 어떻게 마련하셨어요?",
      "첫 손님 이야기: 처음 돈을 받고 팔았을 때 무슨 생각이 드셨어요?",
      "성장의 계기: 그 기회는 어떻게 잡으셨어요? 대표님이 직접 한 일은 뭐였어요?",
      "힘들었다고 하면: 그때 하루가 어땠어요? 기억나는 날 하나만 말씀해주실래요?",
      "문제가 있었다면: 처음에는 어떻게 해결하려고 했어요? 그 방법은 됐어요?",
      "바빠졌다는 답 뒤: 사업 때문에 미루거나 포기했던 일도 있었어요?"
    ],
    "shot": "매장과 닭꼬치, 당시 사진을 보는 모습, 말을 듣고 반응하는 여유 컷.",
    "note": "현재 공간을 과거 매장인 것처럼 소개하지 않기. 앞에서 들은 연혁은 반복하지 않고 선택과 경험을 듣기.",
    "main": [
      "왜 다른 장사가 아니라 닭꼬치였어요?",
      "처음 시작한 장사가 회사로 커지는 계기가 뭐였어요?",
      "커질 때는 몰랐다가 나중에 문제가 됐던 일도 있었어요?"
    ]
  },
  {
    "tab": "마무리",
    "title": "매장 · 앞으로 어떤 대표로 일할까",
    "q": "예전과 비교하면 요즘 하루에서 가장 달라진 건 뭐예요?",
    "goal": "사업의 다음 선택과 대표가 계속 책임질 일을 듣고 마친다.",
    "answers": [
      "앞으로 하고 싶은 일과 이미 실행한 일의 구분",
      "다시 반복하지 않을 방식",
      "AI를 써도 대표가 책임질 일"
    ],
    "back": "요즘에도 대표님이 직접 판단해야 해서 가장 오래 고민하는 일은 뭐예요?",
    "follow": [
      "시간이 생겼다면: 그 시간에 실제로 뭘 하세요? 최근에는요?",
      "앞으로의 계획: 그중 이미 시작한 건 뭐예요?",
      "아직 고민 중이면: 지금 결정 못 하고 있는 건 뭐예요?",
      "마지막으로: 지금 대표님처럼 혼자 여러 일을 맡고 있는 분이라면, 어떤 일부터 바꿔보면 좋을까요?"
    ],
    "shot": "대화가 끝난 표정과 매장 풍경, 자연스러운 인사.",
    "note": "AI 변환 시연은 가능하면 짧게만. 생성·변환임을 표시하고 업무와 인물 이야기를 끊지 않기.",
    "main": [
      "앞으로는 어떤 사업을 더 해보고 싶으세요?",
      "다시 회사를 키운다면 예전과 다르게 할 게 있어요?",
      "AI를 더 쓰게 돼도 대표님이 직접 해야 한다고 생각하는 일은 뭐예요?"
    ]
  }
];
const locations=[{"name": "헬스장", "items": [0]}, {"name": "사무실", "items": [1, 2]}, {"name": "교육 현장", "items": [3]}, {"name": "매장", "items": [4, 5]}];
const route=locations.flatMap(l=>l.items);
const key='sajjiknam-park-ai-field-v1';let state={checks:{},notes:{},shots:{},index:0};let storageOK=true;
try{const x=JSON.parse(localStorage.getItem(key)||'null');if(x&&typeof x==='object'){state.checks=x.checks||{};state.notes=x.notes||{};state.shots=x.shots||{};state.index=Number.isInteger(x.index)&&x.index>=0&&x.index<cards.length?x.index:0;}}catch(e){storageOK=false;}
const $=id=>document.getElementById(id);const count=cards.reduce((n,c)=>n+c.answers.length,0);
function save(){try{localStorage.setItem(key,JSON.stringify(state));storageOK=true;}catch(e){storageOK=false;}$('save').textContent=storageOK?'이 브라우저에 자동 저장':'저장 불가 · 기록을 내려받아 주세요';}
function progress(){let n=0;cards.forEach((c,i)=>c.answers.forEach((_,j)=>{if(state.checks[i+'-'+j])n++;}));$('total').textContent=`들은 내용 ${n} / ${count}`;$('progress').max=count;$('progress').value=n;const c=cards[state.index];const missing=c.answers.filter((_,j)=>!state.checks[state.index+'-'+j]);$('missing').textContent=missing.length?'더 물어볼 것: '+missing.join(' / '):'이 부분은 다 들었어요.';}
function render(){const i=state.index,c=cards[i];const location=locations.find(l=>l.items.includes(i));$('nav').replaceChildren(...locations.map(l=>{const b=document.createElement('button');b.textContent=l.name;b.setAttribute('aria-current',l===location?'true':'false');b.onclick=()=>{state.index=l.items[0];save();render();$('nav').scrollIntoView({block:'start'});};return b;}));$('topics').replaceChildren(...(location.items.length>1?location.items.map(n=>{const b=document.createElement('button');b.textContent=cards[n].tab;b.setAttribute('aria-current',n===i?'true':'false');b.onclick=()=>{state.index=n;save();render();};return b;}):[]));$('card').innerHTML=`<div class="number">장소 ${locations.indexOf(location)+1} / ${locations.length} · ${location.name}</div><h2>${c.title}</h2><div class="goal"><div class="eyebrow">먼저 볼 상황</div><p>${c.goal}</p></div><div class="question"><div class="eyebrow">상황이 보인 뒤 첫 질문</div><p>“${c.q}”</p></div><section class="main-questions"><div class="eyebrow">이어서 물어볼 질문</div><ol>${c.main.map(x=>'<li>'+x+'</li>').join('')}</ol></section><div class="check-title">들었으면 체크</div><div id="answers"></div><div class="rescue"><div class="eyebrow">다시 돌아올 질문</div><p>“${c.back}”</p></div><details><summary>답변에 따라 더 물어보기</summary><ul>${c.follow.map(x=>'<li>'+x+'</li>').join('')}</ul></details>${c.note?'<div class="field-note">'+c.note+'</div>':''}`;
c.answers.forEach((a,j)=>{const label=document.createElement('label');label.className='answer';const input=document.createElement('input');input.type='checkbox';input.checked=!!state.checks[i+'-'+j];input.onchange=()=>{state.checks[i+'-'+j]=input.checked;save();progress();};const span=document.createElement('span');span.textContent=a;label.append(input,span);$('answers').append(label);});$('shot').textContent='찍을 것: '+c.shot;$('shotDone').checked=!!state.shots[i];$('memo').value=state.notes[i]||'';$('prev').disabled=i===0;$('next').disabled=i===cards.length-1;$('next').textContent=i===cards.length-1?'마지막 질문':location.items.includes(route[route.indexOf(i)+1])?'다음 이야기 →':'다음 장소 →';progress();const active=$('nav').querySelector('[aria-current=true]'); $('nav').scrollLeft=Math.max(0,active.offsetLeft-60);}
$('memo').oninput=()=>{state.notes[state.index]=$('memo').value;save();};$('shotDone').onchange=()=>{state.shots[state.index]=$('shotDone').checked;save();};
for(const [id,d] of [['prev',-1],['next',1]])$(id).onclick=()=>{state.index=route[Math.max(0,Math.min(route.length-1,route.indexOf(state.index)+d))];save();render();$('nav').scrollIntoView({block:'start'});};
$('export').onclick=()=>{let text='# 박대표님 편 현장 기록\n\n'+new Date().toLocaleString('ko-KR')+'\n';route.forEach(i=>{const c=cards[i];text+='\n## '+locations.find(l=>l.items.includes(i)).name+' · '+c.title+'\n먼저 볼 상황: '+c.goal+'\n'+c.answers.map((a,j)=>'- ['+(state.checks[i+'-'+j]?'x':' ')+'] '+a).join('\n')+'\n- ['+(state.shots[i]?'x':' ')+'] 화면 확보\n\n메모: '+(state.notes[i]||'없음')+'\n';});const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='박대표님_촬영기록.md';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
$('reset').onclick=()=>$('resetDialog').showModal();$('cancelReset').onclick=()=>$('resetDialog').close();$('confirmReset').onclick=()=>{state={checks:{},notes:{},shots:{},index:0};save();render();$('resetDialog').close();};render();save();
