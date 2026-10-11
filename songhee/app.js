const cards=[
  {
    "tab": "아침 집",
    "title": "아침 집 — 인사보다 출근 준비부터",
    "q": "오늘 몇 시까지 나가셔야 해요?",
    "goal": "사전에 합의한 시각과 방식으로 들어가 실제 아침 준비를 따라간다. 현관에서 시작할 수 있지만 비밀번호·입력 순서는 화면에 남기지 않는다. 기상이나 준비를 재연하지 않고, 카메라를 향한 인사부터 요구하지 않는다.",
    "answers": [
      "실제 출근 시각과 전날 업무 종료 시각",
      "현재 회사에서 맡는 일과 아침 준비 방식"
    ],
    "back": "회사에서는 어떤 일을 하세요?",
    "follow": [
      "어제는 몇 시에 일 끝내셨어요?",
      "회사에서는 어떤 일을 하세요?"
    ],
    "shot": "옷·가방·아침 식사 여부, 전날 작업 흔적, 집을 나서는 모습. 답변 없는 준비 장면도 충분히 확보한다.",
    "note": "상황을 먼저 보고, 궁금해질 때 묻기. 이미 들은 답은 다시 묻지 않기."
  },
  {
    "tab": "출근길·회사 입구",
    "title": "출근길·회사 입구 — 나와 비슷한 직장인의 아침",
    "q": "출근하는 데 보통 얼마나 걸려요?",
    "goal": "실제 이동 수단과 동선. 버스라면 기다리기·승차·교통카드 찍기·차창을 담는다. 회사 입구에서 인사하고 헤어진다. 출근하는 사람들의 흐름은 넓은 컷으로 담되 타인의 얼굴·사원증이 불필요하게 드러나지 않게 한다.",
    "answers": [
      "출퇴근 시간과 직장인으로서 공감할 실제 생활 한 가지",
      "회사와 회사 밖 일을 병행한다는 소개"
    ],
    "back": "오늘 퇴근하면 바로 쉬실 수 있는 날이에요?",
    "follow": [
      "출근길에는 주로 뭐 하세요?",
      "퇴근하고도 일하기 시작한 뒤로 아침에 달라진 게 있어요?",
      "“회사 밖에서는 어떤 일을 하세요?” 자기소개는 본인의 말로 짧게 받는다. 사용자 제안 ‘부업으로 월급 한 번 더 받는 직장인’은 수입과 나이를 확인한 뒤 쓸 수 있는 표현이며 확정 대사가 아니다."
    ],
    "shot": "실제 이동 수단과 동선. 버스라면 기다리기·승차·교통카드 찍기·차창을 담는다. 회사 입구에서 인사하고 헤어진다. 출근하는 사람들의 흐름은 넓은 컷으로 담되 타인의 얼굴·사원증이 불필요하게 드러나지 않게 한다.",
    "note": "상황을 먼저 보고, 궁금해질 때 묻기. 이미 들은 답은 다시 묻지 않기."
  },
  {
    "tab": "점심 식사·산책",
    "title": "점심 식사·산책 — 생활비와 쉬는 시간",
    "q": "점심은 보통 이렇게 드세요? 한 달 식비는 어느 정도예요?",
    "goal": "점심시간에 사람들이 나오는 거리, 실제 메뉴 고르기·도시락 꺼내기·식사·짧은 산책. 김밥이나 도시락은 평소 준비하는 경우에 담는다. 절약하는 인물을 만들기 위해 메뉴를 지정하지 않는다.",
    "answers": [
      "실제 식비·소비 습관과 돈을 나누는 방식",
      "점심에 쉬거나 시간을 쓰는 실제 모습"
    ],
    "back": "점심시간은 보통 뭘 하다가 들어가세요?",
    "follow": [
      "돈이 들어오면 생활비랑 모아둘 돈은 어떻게 나눠요?",
      "점심시간은 보통 뭘 하다가 들어가세요?",
      "실제 투자나 재테크 이야기가 나오면 “최근에 직접 해본 건 뭐예요? 왜 그걸 골랐어요?” 개인의 경험으로 듣고 종목 추천이나 수익 약속으로 만들지 않는다. 배우는 것이 있다면 최근 써본 일을 묻는다."
    ],
    "shot": "음식·가격·식사·거리·산책. 말없이 쉬는 시간도 남긴다. AI 공부는 기존 미팅 당시 시작하지 않았으므로 현재 여부를 확인한다.",
    "note": "상황을 먼저 보고, 궁금해질 때 묻기. 이미 들은 답은 다시 묻지 않기."
  },
  {
    "tab": "퇴근길·집 도착",
    "title": "퇴근길·집 도착 — 이제 회사 밖의 일로",
    "q": "퇴근하니까 지금 제일 먼저 무슨 생각 드세요?",
    "goal": "저녁빛, 회사 밖에서 다시 만나는 순간, 이동과 오늘 수업 일정 확인. 귀가 중 장보기가 실제로 필요하고 시간이 되면 따라간다. 배달을 막거나 일부러 장보게 하지 않는다.",
    "answers": [
      "부업을 찾게 된 실제 계기와 처음 한 행동",
      "오늘 수업 일정, 식사·준비·이동에 쓰는 시간"
    ],
    "back": "오늘 첫 수업까지 얼마나 남았어요? 그전에 뭘 해야 해요?",
    "follow": [
      "회사 다니면서 따로 돈을 벌어야겠다고 생각한 계기가 있었어요?",
      "오늘 첫 수업까지 얼마나 남았어요? 그전에 뭘 해야 해요?",
      "“그때 처음 뭘 찾아보셨어요?” 계약 이야기가 나오면 “계약이 끝나기 전까지 준비하고 싶은 게 있어요?” 꿈과 고민은 여기서 짧게 듣고, 수업 후 이어간다."
    ],
    "shot": "실제 시각, 귀가 동선, 필요한 장보기·가격 비교·계산, 식사와 준비. 쉬고 싶은 날에는 어떻게 조절했는지도 답변에 따라 묻는다.",
    "note": "상황을 먼저 보고, 궁금해질 때 묻기. 이미 들은 답은 다시 묻지 않기."
  },
  {
    "tab": "집·수업 자리",
    "title": "집·수업 자리 — 첫 학생부터 지금의 수입까지",
    "q": "이 일은 처음 어디서 알게 되셨어요? 첫 학생은 어떻게 만나셨어요?",
    "goal": "예약 확인 → 학생에 맞춘 자료 준비 → 실제 수업 → 피드백·메시지 → 정산. 준비와 수업을 질문으로 끊지 않는다. 물 마시거나 쉬는 틈에 묻는다.",
    "answers": [
      "부업을 알게 된 경로 → 검색·등록·제안 → 첫 유료 학생",
      "첫 수업의 어려움과 첫 수업료·첫 달 수입",
      "최근 한 달 수업 횟수·학생 수·수입·비용·기준 기간",
      "준비를 포함한 하루 업무시간과 회사와 병행하는 방식",
      "추가 수입을 실제로 쓰는 곳",
      "컨설팅의 시작·실제 맡는 일·수업과 구분한 수입"
    ],
    "back": "첫 학생이 돈을 내기까지 어떤 일이 있었는지부터 들려주실래요?",
    "follow": [
      "오늘 이분은 뭘 배우려고 신청하셨어요? 수업 하나에 준비까지 얼마나 걸려요?",
      "최근 한 달은 몇 번 수업했고, 비용을 빼면 얼마가 남았어요?",
      "발견·시작: “인터넷에서 어떤 말로 검색했어요?” “처음 등록하거나 제안한 화면이 남아 있어요?”",
      "첫 고객: “처음 어떤 말로 제안했어요?” “첫 수업 전에 제일 걱정한 건 뭐였어요?” “처음 받은 수업료는 얼마였어요? 첫 달에는요?”",
      "실제 업무: “처음부터 지금처럼 준비하셨어요?” “다시 신청하는 학생도 있어요?”",
      "시간·어려움: “하루 준비·상담·수업·마무리까지 합치면 얼마나 걸려요?” “시간이 겹치거나 학생이 취소하면 어떻게 해요?” “토요일은 요즘도 쉬고 계세요?”",
      "수입·쓰임: “같은 달 회사 월급과 비교하면 어느 정도예요?” “그 돈은 생활비·저축·투자 중 어디에 쓰세요?” 수업 횟수와 학생 수를 구분한다.",
      "경험 연결: 승무원 준비 때 배운 것 중 실제 수업에 도움이 된 경험을 묻는다. 연결된다고 미리 단정하지 않는다.",
      "컨설팅: “수업을 하다가 컨설팅은 어떻게 맡게 됐어요?” “먼저 어떤 일을 도와주겠다고 제안했어요?” 실제 업무와 해당 기간의 수입을 수업과 별도로 듣는다."
    ],
    "shot": "공개 가능한 프로필·첫 거래 기록·예약표·수업자료·정산. 학생 화면과 음성은 공개 동의 범위에서 촬영한다. 어려우면 준비와 수업 전후를 찍고 시연은 시연으로 표시한다. 별도 MC 체험 미션은 넣지 않는다.",
    "note": "상황을 먼저 보고, 궁금해질 때 묻기. 이미 들은 답은 다시 묻지 않기."
  },
  {
    "tab": "수업 후 집 / 밤 산책",
    "title": "수업 후 집 / 밤 산책 — 그 돈으로 달라진 삶",
    "q": "처음 수업료가 들어왔을 때 그 돈으로 뭐 하셨어요?",
    "goal": "마지막 수업 종료, 긴장이 풀리는 모습, 물 마시고 앉는 순간. 밖에 나갈 여력이 있으면 산책하고, 피곤하면 집에서 대화한다.",
    "answers": [
      "추가 수입으로 달라진 실제 경험",
      "이 생활을 선택한 계기와 얻은 것·놓친 것",
      "앞으로 원하는 변화와 다음 선택의 조건"
    ],
    "back": "최근에 그걸 느낀 일이 하나 있었어요?",
    "follow": [
      "이 돈이 생기고 예전보다 덜 걱정하게 된 게 있어요?",
      "이렇게 일해서 앞으로 바꾸고 싶은 건 뭐예요?",
      "“계속 이렇게 살아야겠다고 마음먹은 일이 있었어요?” “바쁜 대신 놓치고 있는 것도 있어요?” “회사를 나온다면 어느 정도 수입이 얼마 동안 이어져야 안심될까요?” “오래 하려면 줄이거나 바꿔야 할 건요?”"
    ],
    "shot": "하루가 끝난 공간과 표정, 실제 사용하는 목표 메모가 있으면 함께 보기. 본인이 원하면 앞으로 하고 싶은 일을 적는 모습을 담는다. 꿈이 아직 불분명하다는 답도 그대로 둔다. 감정을 끌어내려고 사연이나 눈물을 요구하지 않는다.",
    "note": "상황을 먼저 보고, 궁금해질 때 묻기. 이미 들은 답은 다시 묻지 않기."
  },
  {
    "tab": "취침 준비",
    "title": "취침 준비 — 불 끄고 현관에서 인사",
    "q": "내일은 몇 시에 일어나세요?",
    "goal": "컴퓨터 종료, 내일 일정·알람 확인, 취침 준비. 작업 공간 불을 끄고 현관에서 제작진과 인사하며 마무리한다. 실제 잠드는 장면을 요구하지 않는다.",
    "answers": [
      "실제 하루 종료 시각과 내일 기상 시각",
      "취침 준비와 현관 인사 장면"
    ],
    "back": "내일은 몇 시에 일어나세요?",
    "follow": [],
    "shot": "컴퓨터 종료, 내일 일정·알람 확인, 취침 준비. 작업 공간 불을 끄고 현관에서 제작진과 인사하며 마무리한다. 실제 잠드는 장면을 요구하지 않는다.",
    "note": "상황을 먼저 보고, 궁금해질 때 묻기. 이미 들은 답은 다시 묻지 않기."
  }
];
const locations=[{"name": "아침 집", "items": [0]}, {"name": "출근길·회사 입구", "items": [1]}, {"name": "점심 식사·산책", "items": [2]}, {"name": "퇴근길·집 도착", "items": [3]}, {"name": "집·수업 자리", "items": [4]}, {"name": "수업 후 집 / 밤 산책", "items": [5]}, {"name": "취침 준비", "items": [6]}];
const route=locations.flatMap(l=>l.items);
const key='sajjiknam-songhee-field-v1';let state={checks:{},notes:{},shots:{},index:0};let storageOK=true;
try{const x=JSON.parse(localStorage.getItem(key)||'null');if(x&&typeof x==='object'){state.checks=x.checks||{};state.notes=x.notes||{};state.shots=x.shots||{};state.index=Number.isInteger(x.index)&&x.index>=0&&x.index<cards.length?x.index:0;}}catch(e){storageOK=false;}
const $=id=>document.getElementById(id);const count=cards.reduce((n,c)=>n+c.answers.length,0);
function save(){try{localStorage.setItem(key,JSON.stringify(state));storageOK=true;}catch(e){storageOK=false;}$('save').textContent=storageOK?'이 브라우저에 자동 저장':'저장 불가 · 기록을 내려받아 주세요';}
function progress(){let n=0;cards.forEach((c,i)=>c.answers.forEach((_,j)=>{if(state.checks[i+'-'+j])n++;}));$('total').textContent=`들은 내용 ${n} / ${count}`;$('progress').max=count;$('progress').value=n;const c=cards[state.index];const missing=c.answers.filter((_,j)=>!state.checks[state.index+'-'+j]);$('missing').textContent=missing.length?'더 물어볼 것: '+missing.join(' / '):'이 부분은 다 들었어요.';}
function render(){const i=state.index,c=cards[i];const location=locations.find(l=>l.items.includes(i));$('nav').replaceChildren(...locations.map(l=>{const b=document.createElement('button');b.textContent=l.name;b.setAttribute('aria-current',l===location?'true':'false');b.onclick=()=>{state.index=l.items[0];save();render();$('nav').scrollIntoView({block:'start'});};return b;}));$('topics').replaceChildren(...(location.items.length>1?location.items.map(n=>{const b=document.createElement('button');b.textContent=cards[n].tab;b.setAttribute('aria-current',n===i?'true':'false');b.onclick=()=>{state.index=n;save();render();};return b;}):[]));$('card').innerHTML=`<div class="number">장소 ${locations.indexOf(location)+1} / ${locations.length} · ${location.name}</div><h2>${c.title}</h2><div class="goal"><div class="eyebrow">먼저 볼 상황</div><p>${c.goal}</p></div><div class="question"><div class="eyebrow">상황이 보인 뒤 첫 질문</div><p>“${c.q}”</p></div><div class="check-title">들었으면 체크</div><div id="answers"></div><div class="rescue"><div class="eyebrow">다시 돌아올 질문</div><p>“${c.back}”</p></div><details open><summary>이어갈 질문</summary><ul>${c.follow.map(x=>'<li>'+x+'</li>').join('')}</ul></details>${c.note?'<div class="field-note">'+c.note+'</div>':''}`;
c.answers.forEach((a,j)=>{const label=document.createElement('label');label.className='answer';const input=document.createElement('input');input.type='checkbox';input.checked=!!state.checks[i+'-'+j];input.onchange=()=>{state.checks[i+'-'+j]=input.checked;save();progress();};const span=document.createElement('span');span.textContent=a;label.append(input,span);$('answers').append(label);});$('shot').textContent='찍을 것: '+c.shot;$('shotDone').checked=!!state.shots[i];$('memo').value=state.notes[i]||'';$('prev').disabled=i===0;$('next').disabled=i===cards.length-1;$('next').textContent=i===cards.length-1?'마지막 질문':location.items.includes(route[route.indexOf(i)+1])?'다음 이야기 →':'다음 장소 →';progress();const active=$('nav').querySelector('[aria-current=true]'); $('nav').scrollLeft=Math.max(0,active.offsetLeft-60);}
$('memo').oninput=()=>{state.notes[state.index]=$('memo').value;save();};$('shotDone').onchange=()=>{state.shots[state.index]=$('shotDone').checked;save();};
for(const [id,d] of [['prev',-1],['next',1]])$(id).onclick=()=>{state.index=route[Math.max(0,Math.min(route.length-1,route.indexOf(state.index)+d))];save();render();$('nav').scrollIntoView({block:'start'});};
$('export').onclick=()=>{let text='# 송희님 편 현장 기록\n\n'+new Date().toLocaleString('ko-KR')+'\n';route.forEach(i=>{const c=cards[i];text+='\n## '+locations.find(l=>l.items.includes(i)).name+' · '+c.title+'\n먼저 볼 상황: '+c.goal+'\n'+c.answers.map((a,j)=>'- ['+(state.checks[i+'-'+j]?'x':' ')+'] '+a).join('\n')+'\n- ['+(state.shots[i]?'x':' ')+'] 화면 확보\n\n메모: '+(state.notes[i]||'없음')+'\n';});const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='송희님_촬영기록.md';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
$('reset').onclick=()=>$('resetDialog').showModal();$('cancelReset').onclick=()=>$('resetDialog').close();$('confirmReset').onclick=()=>{state={checks:{},notes:{},shots:{},index:0};save();render();$('resetDialog').close();};render();save();
