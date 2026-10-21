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
      "아침을 챙기면: 아침은 늘 챙겨 드세요?",
      "시간이 빠듯하다면: 평소에도 이 정도로 바쁘세요? 오늘 먼저 챙겨야 하는 게 뭐예요?",
      "밤까지 일했다고 하면: 퇴근하고는 어떤 일을 하시는 거예요?",
      "수업했다고 하면: 어떤 분들을 가르치세요? 오늘 저녁에도 수업이 있어요?"
    ],
    "shot": "옷·가방·아침 식사 여부, 전날 작업 흔적, 집을 나서는 모습. 답변 없는 준비 장면도 충분히 확보한다.",
    "note": "상황을 먼저 보고, 궁금해질 때 묻기. 이미 들은 답은 다시 묻지 않기.",
    "flow": [
      {
        "title": "출근 준비를 따라가며",
        "scene": "합의한 시간에 만나 실제 준비를 따라간다. 바쁜 손을 멈추게 하지 않고 여유가 생길 때 짧게 묻는다.",
        "questions": [
          "오늘 몇 시까지 나가셔야 해요?",
          "아침에는 보통 몇 시에 일어나세요?"
        ],
        "branches": [
          {
            "when": "아침을 챙기면",
            "ask": "아침은 늘 챙겨 드세요?"
          },
          {
            "when": "시간이 빠듯하다면",
            "ask": "평소에도 이 정도로 바쁘세요? 오늘 먼저 챙겨야 하는 게 뭐예요?"
          }
        ]
      },
      {
        "title": "어젯밤에서 오늘 아침으로",
        "scene": "전날 작업 흔적이나 피곤한 모습이 실제로 보이면 그 상황에서 시작한다.",
        "questions": [
          "어제는 몇 시쯤 주무셨어요?",
          "회사에서는 어떤 일을 하세요?"
        ],
        "branches": [
          {
            "when": "밤까지 일했다고 하면",
            "ask": "퇴근하고는 어떤 일을 하시는 거예요?"
          },
          {
            "when": "수업했다고 하면",
            "ask": "어떤 분들을 가르치세요? 오늘 저녁에도 수업이 있어요?"
          }
        ]
      }
    ],
    "main": [
      "아침에는 보통 몇 시에 일어나세요?",
      "어제는 몇 시쯤 주무셨어요?",
      "회사에서는 어떤 일을 하세요?"
    ]
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
      "공부나 일을 한다면: 지금 보시는 건 어떤 거예요? 실제로 어디에 쓰세요?",
      "그냥 쉰다면: 하루 중 이렇게 혼자 쉬는 시간이 또 있어요?",
      "아직 회사 밖 일을 듣지 못했다면: 퇴근하시면 보통 어떻게 보내세요?",
      "저녁 수업이 있다고 하면: 오늘은 몇 수업 있으세요? 퇴근하고 준비할 시간은 충분해요?",
      "이전 직업을 이야기하면: 그 일을 하다가 지금 일로 옮기신 계기가 있었어요?"
    ],
    "shot": "실제 이동 수단과 동선. 버스라면 기다리기·승차·교통카드 찍기·차창을 담는다. 회사 입구에서 인사하고 헤어진다. 출근하는 사람들의 흐름은 넓은 컷으로 담되 타인의 얼굴·사원증이 불필요하게 드러나지 않게 한다.",
    "note": "상황을 먼저 보고, 궁금해질 때 묻기. 이미 들은 답은 다시 묻지 않기.",
    "flow": [
      {
        "title": "평소 다니는 길",
        "scene": "실제 출근 동선. 이동 중 말하기 어려우면 내려서 묻는다.",
        "questions": [
          "출근하는 데 보통 얼마나 걸려요?",
          "이동할 때는 주로 뭐 하세요?"
        ],
        "branches": [
          {
            "when": "공부나 일을 한다면",
            "ask": "지금 보시는 건 어떤 거예요? 실제로 어디에 쓰세요?"
          },
          {
            "when": "그냥 쉰다면",
            "ask": "하루 중 이렇게 혼자 쉬는 시간이 또 있어요?"
          }
        ]
      },
      {
        "title": "회사 밖의 하루가 궁금해질 때",
        "scene": "아침에 들은 내용은 반복하지 않는다. 회사 입구에서 오늘 저녁으로 연결한다.",
        "questions": [
          "지금 하시는 일은 얼마나 되셨어요?",
          "오늘은 몇 시쯤 퇴근하세요?"
        ],
        "branches": [
          {
            "when": "아직 회사 밖 일을 듣지 못했다면",
            "ask": "퇴근하시면 보통 어떻게 보내세요?"
          },
          {
            "when": "저녁 수업이 있다고 하면",
            "ask": "오늘은 몇 수업 있으세요? 퇴근하고 준비할 시간은 충분해요?"
          },
          {
            "when": "이전 직업을 이야기하면",
            "ask": "그 일을 하다가 지금 일로 옮기신 계기가 있었어요?"
          }
        ]
      }
    ],
    "main": [
      "이동할 때는 주로 뭐 하세요?",
      "지금 하시는 일은 얼마나 되셨어요?",
      "오늘은 몇 시쯤 퇴근하세요?"
    ]
  },
  {
    "tab": "점심 식사·산책",
    "title": "점심 식사·산책 — 생활비와 쉬는 시간",
    "q": "점심은 보통 이렇게 드세요?",
    "goal": "점심시간에 사람들이 나오는 거리, 실제 메뉴 고르기·도시락 꺼내기·식사·짧은 산책. 김밥이나 도시락은 평소 준비하는 경우에 담는다. 절약하는 인물을 만들기 위해 메뉴를 지정하지 않는다.",
    "answers": [
      "실제 식비·소비 습관과 돈을 나누는 방식",
      "점심에 쉬거나 시간을 쓰는 실제 모습"
    ],
    "back": "점심시간은 보통 뭘 하다가 들어가세요?",
    "follow": [
      "도시락을 가져왔다면: 언제 준비하셨어요? 직접 싸오는 이유가 있어요?",
      "가격을 신경 쓴다고 하면: 한 달 식비는 대략 어느 정도예요? 다른 데서는 어떤 돈을 아끼세요?",
      "공부한다면: 최근에 배운 것 중 실제로 써본 게 있어요?",
      "저축이나 투자 이야기가 나오면: 돈이 들어오면 생활비와 모아둘 돈을 어떻게 나누세요? 그 방식을 택한 이유가 있어요?",
      "늘 바쁘다고 하면: 하루 중 아무것도 안 하고 쉬는 시간도 있어요?"
    ],
    "shot": "음식·가격·식사·거리·산책. 말없이 쉬는 시간도 남긴다. AI 공부는 기존 미팅 당시 시작하지 않았으므로 현재 여부를 확인한다.",
    "note": "상황을 먼저 보고, 궁금해질 때 묻기. 이미 들은 답은 다시 묻지 않기.",
    "flow": [
      {
        "title": "같이 밥을 먹으며",
        "scene": "실제 메뉴나 도시락을 보고 묻는다. 절약 장면을 만들려고 메뉴를 정하지 않는다.",
        "questions": [
          "점심은 보통 이렇게 드세요?",
          "점심시간은 얼마나 쓸 수 있어요?"
        ],
        "branches": [
          {
            "when": "도시락을 가져왔다면",
            "ask": "언제 준비하셨어요? 직접 싸오는 이유가 있어요?"
          },
          {
            "when": "가격을 신경 쓴다고 하면",
            "ask": "한 달 식비는 대략 어느 정도예요? 다른 데서는 어떤 돈을 아끼세요?"
          }
        ]
      },
      {
        "title": "잠깐 쉬는 시간의 취향",
        "scene": "식사 후 평소대로 쉬거나 걷는 모습을 따라간다.",
        "questions": [
          "밥 먹고 남은 시간에는 주로 뭐 하세요?",
          "요즘 쉬는 시간에 즐겨 하시는 게 있어요?"
        ],
        "branches": [
          {
            "when": "공부한다면",
            "ask": "최근에 배운 것 중 실제로 써본 게 있어요?"
          },
          {
            "when": "저축이나 투자 이야기가 나오면",
            "ask": "돈이 들어오면 생활비와 모아둘 돈을 어떻게 나누세요? 그 방식을 택한 이유가 있어요?"
          },
          {
            "when": "늘 바쁘다고 하면",
            "ask": "하루 중 아무것도 안 하고 쉬는 시간도 있어요?"
          }
        ]
      }
    ],
    "main": [
      "점심시간은 얼마나 쓸 수 있어요?",
      "밥 먹고 남은 시간에는 주로 뭐 하세요?",
      "요즘 쉬는 시간에 즐겨 하시는 게 있어요?"
    ]
  },
  {
    "tab": "퇴근길·집 도착",
    "title": "퇴근길·집 도착 — 이제 회사 밖의 일로",
    "q": "오늘 하루 어떠셨어요?",
    "goal": "저녁빛, 회사 밖에서 다시 만나는 순간, 이동과 오늘 수업 일정 확인. 귀가 중 장보기가 실제로 필요하고 시간이 되면 따라간다. 배달을 막거나 일부러 장보게 하지 않는다.",
    "answers": [
      "부업을 찾게 된 실제 계기와 처음 한 행동",
      "오늘 수업 일정, 식사·준비·이동에 쓰는 시간"
    ],
    "back": "오늘 첫 수업까지 얼마나 남았어요? 그전에 뭘 해야 해요?",
    "follow": [
      "바로 수업 준비를 한다면: 첫 수업까지 얼마나 남았어요? 그전에 뭘 해야 해요?",
      "장보기가 필요하다면: 오늘은 뭘 해 드실 거예요? 보통 이 시간에 준비하세요?",
      "월급만으로 부족했다고 하면: 어떤 순간에 그렇게 느끼셨어요? 당시 가장 부담됐던 게 뭐였어요?",
      "계약이나 고용을 걱정했다면: 그 이후를 위해 어떤 준비를 하고 싶으셨어요?",
      "여러 일을 알아봤다면: 그중 지금 하는 일을 고른 이유가 뭐예요?"
    ],
    "shot": "실제 시각, 귀가 동선, 필요한 장보기·가격 비교·계산, 식사와 준비. 쉬고 싶은 날에는 어떻게 조절했는지도 답변에 따라 묻는다.",
    "note": "상황을 먼저 보고, 궁금해질 때 묻기. 이미 들은 답은 다시 묻지 않기.",
    "flow": [
      {
        "title": "퇴근하고 다시 만난 순간",
        "scene": "회사 밖에서 다시 만나 저녁빛과 실제 시각을 남긴다.",
        "questions": [
          "오늘 하루 어떠셨어요?",
          "지금은 바로 집으로 가세요?"
        ],
        "branches": [
          {
            "when": "바로 수업 준비를 한다면",
            "ask": "첫 수업까지 얼마나 남았어요? 그전에 뭘 해야 해요?"
          },
          {
            "when": "장보기가 필요하다면",
            "ask": "오늘은 뭘 해 드실 거예요? 보통 이 시간에 준비하세요?"
          }
        ]
      },
      {
        "title": "퇴근 후 일을 시작한 이유",
        "scene": "귀가 중 여유가 있을 때. 자세한 방법은 수업 자리에서 듣는다.",
        "questions": [
          "회사 다니면서 다른 일도 해봐야겠다고 생각한 계기가 있었어요?",
          "그때 제일 먼저 뭘 해보셨어요?"
        ],
        "branches": [
          {
            "when": "월급만으로 부족했다고 하면",
            "ask": "어떤 순간에 그렇게 느끼셨어요? 당시 가장 부담됐던 게 뭐였어요?"
          },
          {
            "when": "계약이나 고용을 걱정했다면",
            "ask": "그 이후를 위해 어떤 준비를 하고 싶으셨어요?"
          },
          {
            "when": "여러 일을 알아봤다면",
            "ask": "그중 지금 하는 일을 고른 이유가 뭐예요?"
          }
        ]
      }
    ],
    "main": [
      "지금은 바로 집으로 가세요?",
      "회사 다니면서 다른 일도 해봐야겠다고 생각한 계기가 있었어요?",
      "그때 제일 먼저 뭘 해보셨어요?"
    ]
  },
  {
    "tab": "집·수업 자리",
    "title": "집·수업 자리 — 첫 학생부터 지금의 수입까지",
    "q": "지금 어떤 수업을 준비하고 계세요?",
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
      "학생마다 다르게 준비한다면: 오늘은 어떤 부분을 바꾸셨어요? 준비에는 얼마나 걸려요?",
      "언어 소통이 나오면: 학생이 한국어를 전혀 모를 때는 어떻게 설명하세요?",
      "학생 공개가 어렵다면: 학생 정보는 가리고 오늘 준비하신 자료와 수업 전후 과정만 볼 수 있을까요?",
      "검색해서 찾았다면: 어떤 말로 검색하셨어요? 찾고 나서는 뭘 등록하거나 준비했어요?",
      "프로필을 올렸다면: 처음에는 어떤 소개를 쓰셨어요? 첫 문의가 오기까지 얼마나 걸렸어요?",
      "처음 수업이 어려웠다면: 어떤 순간에 막혔어요? 다음 수업에서는 뭘 바꾸셨어요?",
      "영어나 과거 경험을 말하면: 그걸 배우게 된 계기가 있었어요? 지금 수업에 실제로 도움이 된 부분은 뭐예요?",
      "재신청이 많다면: 학생이 왜 다시 배우고 싶다고 하던가요? 실제 피드백 하나 볼 수 있어요?",
      "시간이 겹친 적이 있다면: 그날은 어떻게 해결하셨어요? 지금은 일정을 어떻게 잡아요?",
      "취소가 생긴다면: 취소된 수업료나 빈 시간은 어떻게 되는 거예요?",
      "주말에도 일한다면: 일주일에 온전히 쉬는 날은 있어요?",
      "수입을 말하면: 수수료나 비용을 빼기 전인가요? 실제로 남은 돈은 얼마예요?",
      "월급과 비교하면: 같은 달 회사 월급과 비교하면 어느 정도예요? 매달 비슷하게 들어오나요?",
      "컨설팅도 한다고 하면: 어떤 일을 도와드리는 거예요? 첫 의뢰는 어떻게 받으셨어요? 수업 수입과 별도로 보면 그달에는 얼마였어요?",
      "추가 수입의 쓰임을 말하지 않았다면: 이렇게 번 돈은 주로 어디에 쓰세요?"
    ],
    "shot": "공개 가능한 프로필·첫 거래 기록·예약표·수업자료·정산. 학생 화면과 음성은 공개 동의 범위에서 촬영한다. 어려우면 준비와 수업 전후를 찍고 시연은 시연으로 표시한다. 별도 MC 체험 미션은 넣지 않는다.",
    "note": "상황을 먼저 보고, 궁금해질 때 묻기. 이미 들은 답은 다시 묻지 않기.",
    "flow": [
      {
        "title": "오늘 가르칠 학생부터",
        "scene": "예약표와 실제 수업자료 준비를 본다. 수업 중에는 질문으로 끊지 않는다.",
        "questions": [
          "지금 어떤 수업을 준비하고 계세요?",
          "오늘 학생은 뭘 배우고 싶어 하는 분이에요?",
          "이 자료는 직접 만드시는 거예요?"
        ],
        "branches": [
          {
            "when": "학생마다 다르게 준비한다면",
            "ask": "오늘은 어떤 부분을 바꾸셨어요? 준비에는 얼마나 걸려요?"
          },
          {
            "when": "언어 소통이 나오면",
            "ask": "학생이 한국어를 전혀 모를 때는 어떻게 설명하세요?"
          },
          {
            "when": "학생 공개가 어렵다면",
            "ask": "학생 정보는 가리고 오늘 준비하신 자료와 수업 전후 과정만 볼 수 있을까요?"
          }
        ]
      },
      {
        "title": "첫 학생이 돈을 내기까지",
        "scene": "수업이 끝나 잠깐 쉬는 때. 공개 가능한 프로필이나 첫 거래 기록을 함께 본다.",
        "questions": [
          "처음 이 일은 어디서 알게 되셨어요?",
          "첫 학생은 어떻게 만나셨어요?",
          "첫 수업은 어땠어요?"
        ],
        "branches": [
          {
            "when": "검색해서 찾았다면",
            "ask": "어떤 말로 검색하셨어요? 찾고 나서는 뭘 등록하거나 준비했어요?"
          },
          {
            "when": "프로필을 올렸다면",
            "ask": "처음에는 어떤 소개를 쓰셨어요? 첫 문의가 오기까지 얼마나 걸렸어요?"
          },
          {
            "when": "처음 수업이 어려웠다면",
            "ask": "어떤 순간에 막혔어요? 다음 수업에서는 뭘 바꾸셨어요?"
          },
          {
            "when": "영어나 과거 경험을 말하면",
            "ask": "그걸 배우게 된 계기가 있었어요? 지금 수업에 실제로 도움이 된 부분은 뭐예요?"
          }
        ]
      },
      {
        "title": "수업이 끝난 뒤에도 남는 일",
        "scene": "피드백·메시지·다음 예약을 처리하는 실제 모습을 본다.",
        "questions": [
          "수업이 끝나면 이제 일도 끝난 거예요?",
          "다시 신청하는 학생도 있어요?",
          "준비하고 메시지 답하는 시간까지 하루에 얼마나 걸려요?"
        ],
        "branches": [
          {
            "when": "재신청이 많다면",
            "ask": "학생이 왜 다시 배우고 싶다고 하던가요? 실제 피드백 하나 볼 수 있어요?"
          },
          {
            "when": "시간이 겹친 적이 있다면",
            "ask": "그날은 어떻게 해결하셨어요? 지금은 일정을 어떻게 잡아요?"
          },
          {
            "when": "취소가 생긴다면",
            "ask": "취소된 수업료나 빈 시간은 어떻게 되는 거예요?"
          },
          {
            "when": "주말에도 일한다면",
            "ask": "일주일에 온전히 쉬는 날은 있어요?"
          }
        ]
      },
      {
        "title": "한 달의 일과 수입",
        "scene": "공개 가능한 최근 한 달 예약표·정산 내역을 보며 같은 기간으로 비교한다.",
        "questions": [
          "처음 받은 수업료는 얼마였어요?",
          "최근 한 달은 수업을 몇 번 하셨어요?",
          "그달 수업으로 들어온 돈은 얼마예요?"
        ],
        "branches": [
          {
            "when": "수입을 말하면",
            "ask": "수수료나 비용을 빼기 전인가요? 실제로 남은 돈은 얼마예요?"
          },
          {
            "when": "월급과 비교하면",
            "ask": "같은 달 회사 월급과 비교하면 어느 정도예요? 매달 비슷하게 들어오나요?"
          },
          {
            "when": "컨설팅도 한다고 하면",
            "ask": "어떤 일을 도와드리는 거예요? 첫 의뢰는 어떻게 받으셨어요? 수업 수입과 별도로 보면 그달에는 얼마였어요?"
          },
          {
            "when": "추가 수입의 쓰임을 말하지 않았다면",
            "ask": "이렇게 번 돈은 주로 어디에 쓰세요?"
          }
        ]
      }
    ],
    "main": [
      "오늘 학생은 뭘 배우고 싶어 하는 분이에요?",
      "이 자료는 직접 만드시는 거예요?",
      "처음 이 일은 어디서 알게 되셨어요?",
      "첫 학생은 어떻게 만나셨어요?",
      "첫 수업은 어땠어요?",
      "수업이 끝나면 이제 일도 끝난 거예요?",
      "다시 신청하는 학생도 있어요?",
      "준비하고 메시지 답하는 시간까지 하루에 얼마나 걸려요?",
      "처음 받은 수업료는 얼마였어요?",
      "최근 한 달은 수업을 몇 번 하셨어요?",
      "그달 수업으로 들어온 돈은 얼마예요?"
    ]
  },
  {
    "tab": "수업 후 집 / 밤 산책",
    "title": "수업 후 집 / 밤 산책 — 그 돈으로 달라진 삶",
    "q": "오늘 일은 다 끝난 거예요?",
    "goal": "마지막 수업 종료, 긴장이 풀리는 모습, 물 마시고 앉는 순간. 밖에 나갈 여력이 있으면 산책하고, 피곤하면 집에서 대화한다.",
    "answers": [
      "추가 수입으로 달라진 실제 경험",
      "이 생활을 선택한 계기와 얻은 것·놓친 것",
      "앞으로 원하는 변화와 다음 선택의 조건"
    ],
    "back": "최근에 그걸 느낀 일이 하나 있었어요?",
    "follow": [
      "뿌듯하다고 하면: 오늘 특히 잘했다고 느낀 순간이 있었어요?",
      "지치거나 허무하다고 하면: 그런 날에는 어떻게 쉬세요? 일정을 줄여본 적도 있어요?",
      "걱정이 줄었다면: 최근에 그걸 느낀 일이 하나 있었어요?",
      "아직 크게 달라진 게 없다면: 그럼 지금은 어떤 이유로 계속하고 계세요?",
      "포기한 시간이 있다면: 그중 제일 아쉬운 건 뭐예요? 오래 하려면 어떤 부분을 바꿔야 할까요?",
      "퇴사를 생각한다면: 어떤 조건이 갖춰지면 결정할 수 있을까요? 수입이 얼마 동안 이어져야 안심될 것 같아요?",
      "병행하고 싶다면: 두 일을 오래 같이 하려면 지금 가장 필요한 게 뭐예요?",
      "아직 모르겠다면: 당장 이번 달에는 지키고 싶은 게 하나 있어요?"
    ],
    "shot": "하루가 끝난 공간과 표정, 실제 사용하는 목표 메모가 있으면 함께 보기. 본인이 원하면 앞으로 하고 싶은 일을 적는 모습을 담는다. 꿈이 아직 불분명하다는 답도 그대로 둔다. 감정을 끌어내려고 사연이나 눈물을 요구하지 않는다.",
    "note": "상황을 먼저 보고, 궁금해질 때 묻기. 이미 들은 답은 다시 묻지 않기.",
    "flow": [
      {
        "title": "긴 하루를 끝내고",
        "scene": "마지막 수업 후 쉬는 순간. 산책은 여력이 있을 때만 한다.",
        "questions": [
          "오늘 일은 다 끝난 거예요?",
          "이렇게 하루를 보내고 나면 어떤 생각이 들어요?"
        ],
        "branches": [
          {
            "when": "뿌듯하다고 하면",
            "ask": "오늘 특히 잘했다고 느낀 순간이 있었어요?"
          },
          {
            "when": "지치거나 허무하다고 하면",
            "ask": "그런 날에는 어떻게 쉬세요? 일정을 줄여본 적도 있어요?"
          }
        ]
      },
      {
        "title": "돈이 생긴 뒤 달라진 것",
        "scene": "수입을 다시 캐묻기보다 생활에서 바뀐 경험을 듣는다.",
        "questions": [
          "처음 수업료가 들어왔을 때 그 돈으로 뭐 하셨어요?",
          "추가 수입이 생기고 생활에서 달라진 게 있어요?"
        ],
        "branches": [
          {
            "when": "걱정이 줄었다면",
            "ask": "최근에 그걸 느낀 일이 하나 있었어요?"
          },
          {
            "when": "아직 크게 달라진 게 없다면",
            "ask": "그럼 지금은 어떤 이유로 계속하고 계세요?"
          },
          {
            "when": "포기한 시간이 있다면",
            "ask": "그중 제일 아쉬운 건 뭐예요? 오래 하려면 어떤 부분을 바꿔야 할까요?"
          }
        ]
      },
      {
        "title": "다음 선택은 아직 열어두고",
        "scene": "이미 꿈이나 퇴사 결정을 정했다고 가정하지 않는다.",
        "questions": [
          "앞으로는 하루를 어떻게 보내고 싶으세요?",
          "그렇게 살려면 지금 무엇부터 바꾸면 좋을 것 같아요?"
        ],
        "branches": [
          {
            "when": "퇴사를 생각한다면",
            "ask": "어떤 조건이 갖춰지면 결정할 수 있을까요? 수입이 얼마 동안 이어져야 안심될 것 같아요?"
          },
          {
            "when": "병행하고 싶다면",
            "ask": "두 일을 오래 같이 하려면 지금 가장 필요한 게 뭐예요?"
          },
          {
            "when": "아직 모르겠다면",
            "ask": "당장 이번 달에는 지키고 싶은 게 하나 있어요?"
          }
        ]
      }
    ],
    "main": [
      "이렇게 하루를 보내고 나면 어떤 생각이 들어요?",
      "처음 수업료가 들어왔을 때 그 돈으로 뭐 하셨어요?",
      "추가 수입이 생기고 생활에서 달라진 게 있어요?",
      "앞으로는 하루를 어떻게 보내고 싶으세요?",
      "그렇게 살려면 지금 무엇부터 바꾸면 좋을 것 같아요?"
    ]
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
    "follow": [
      "자연스럽게 말이 이어지면: 오늘 잘했다고 생각하는 일 하나만 꼽으면요?"
    ],
    "shot": "컴퓨터 종료, 내일 일정·알람 확인, 취침 준비. 작업 공간 불을 끄고 현관에서 제작진과 인사하며 마무리한다. 실제 잠드는 장면을 요구하지 않는다.",
    "note": "상황을 먼저 보고, 궁금해질 때 묻기. 이미 들은 답은 다시 묻지 않기.",
    "flow": [
      {
        "title": "내일도 이어지는 하루",
        "scene": "컴퓨터를 끄고 알람을 확인한 뒤 현관에서 인사한다. 긴 마무리 답변을 요구하지 않는다.",
        "questions": [
          "내일은 몇 시에 일어나세요?"
        ],
        "branches": [
          {
            "when": "자연스럽게 말이 이어지면",
            "ask": "오늘 잘했다고 생각하는 일 하나만 꼽으면요?"
          }
        ]
      }
    ],
    "main": []
  }
];
const locations=[{"name": "아침 집", "items": [0]}, {"name": "출근길·회사 입구", "items": [1]}, {"name": "점심 식사·산책", "items": [2]}, {"name": "퇴근길·집 도착", "items": [3]}, {"name": "집·수업 자리", "items": [4]}, {"name": "수업 후 집 / 밤 산책", "items": [5]}, {"name": "취침 준비", "items": [6]}];
const route=locations.flatMap(l=>l.items);
const key='sajjiknam-songhee-field-v1';let state={checks:{},notes:{},shots:{},questions:{},index:0};let storageOK=true;
try{const x=JSON.parse(localStorage.getItem(key)||'null');if(x&&typeof x==='object'){state.questions=x.questions||{};state.checks=x.checks||{};state.notes=x.notes||{};state.shots=x.shots||{};state.index=Number.isInteger(x.index)&&x.index>=0&&x.index<cards.length?x.index:0;}}catch(e){storageOK=false;}
const $=id=>document.getElementById(id);const count=cards.reduce((n,c)=>n+c.answers.length,0);
function save(){try{localStorage.setItem(key,JSON.stringify(state));storageOK=true;}catch(e){storageOK=false;}$('save').textContent=storageOK?'이 브라우저에 자동 저장':'저장 불가 · 기록을 내려받아 주세요';}
function progress(){let n=0;cards.forEach((c,i)=>c.answers.forEach((_,j)=>{if(state.checks[i+'-'+j])n++;}));$('total').textContent=`들은 내용 ${n} / ${count}`;$('progress').max=count;$('progress').value=n;const c=cards[state.index];const missing=c.answers.filter((_,j)=>!state.checks[state.index+'-'+j]);$('missing').textContent=missing.length?'더 물어볼 것: '+missing.join(' / '):'이 부분은 다 들었어요.';}

function questionKey(i,q){return i+':'+q;}
function addQuestionCheck(el,i,q){
 const k=questionKey(i,q);if(el.querySelector('.question-check'))return;
 const label=document.createElement('label');label.className='question-check';
 const input=document.createElement('input');input.type='checkbox';input.dataset.questionKey=k;input.checked=!!state.questions[k];input.setAttribute('aria-label','질문 완료: '+q);
 const span=document.createElement('span');while(el.firstChild)span.append(el.firstChild);
 label.append(input,span);el.append(label);
 input.onchange=()=>{state.questions[k]=input.checked;document.querySelectorAll('[data-question-key]').forEach(x=>{if(x.dataset.questionKey===k)x.checked=input.checked;});save();};
}
function decorateQuestions(){
 document.querySelectorAll('#question-review > section').forEach((section,i)=>{
 const c=cards[i];if(!c)return;
 section.querySelectorAll('ol li').forEach((el,j)=>addQuestionCheck(el,i,c.flow.flatMap(f=>f.questions)[j]));
 section.querySelectorAll('.branch').forEach((el,j)=>addQuestionCheck(el,i,c.flow.flatMap(f=>f.branches)[j].ask));
 });
 const i=state.index,c=cards[i];
 document.querySelectorAll('#card .flow-block').forEach((block,n)=>{
 block.querySelectorAll('ol li').forEach((el,j)=>addQuestionCheck(el,i,c.flow[n].questions[j]));
 block.querySelectorAll('.branch').forEach((el,j)=>addQuestionCheck(el,i,c.flow[n].branches[j].ask));
 });
 addQuestionCheck(document.querySelector('#card .question p'),i,c.q);
 addQuestionCheck(document.querySelector('#card .rescue p'),i,c.back);
 document.querySelectorAll('[data-question-key]').forEach(x=>{x.checked=!!state.questions[x.dataset.questionKey];});
}

function render(){const i=state.index,c=cards[i];const location=locations.find(l=>l.items.includes(i));$('nav').replaceChildren(...locations.map(l=>{const b=document.createElement('button');b.textContent=l.name;b.setAttribute('aria-current',l===location?'true':'false');b.onclick=()=>{state.index=l.items[0];save();render();$('nav').scrollIntoView({block:'start'});};return b;}));$('topics').replaceChildren(...(location.items.length>1?location.items.map(n=>{const b=document.createElement('button');b.textContent=cards[n].tab;b.setAttribute('aria-current',n===i?'true':'false');b.onclick=()=>{state.index=n;save();render();};return b;}):[]));$('card').innerHTML=`<div class="number">장소 ${locations.indexOf(location)+1} / ${locations.length} · ${location.name}</div><h2>${c.title}</h2><div class="goal"><div class="eyebrow">먼저 볼 상황</div><p>${c.goal}</p></div><div class="question"><div class="eyebrow">상황이 보인 뒤 첫 질문</div><p>“${c.q}”</p></div><section class="main-questions">${c.flow.map((f,n)=>`<section class="flow-block"><h3>${n+1}. ${f.title}</h3><p class="scene-note">${f.scene}</p><ol>${f.questions.map(q=>'<li>'+q+'</li>').join('')}</ol><details><summary>이 답이 나오면 이렇게 이어 묻기</summary>${f.branches.map(b=>'<p class="branch"><strong>'+b.when+'</strong><br>'+b.ask+'</p>').join('')}</details></section>`).join('')}</section><div class="check-title">들었으면 체크</div><div id="answers"></div><div class="rescue"><div class="eyebrow">다시 돌아올 질문</div><p>“${c.back}”</p></div>${c.note?'<div class="field-note">'+c.note+'</div>':''}`;
c.answers.forEach((a,j)=>{const label=document.createElement('label');label.className='answer';const input=document.createElement('input');input.type='checkbox';input.checked=!!state.checks[i+'-'+j];input.onchange=()=>{state.checks[i+'-'+j]=input.checked;save();progress();};const span=document.createElement('span');span.textContent=a;label.append(input,span);$('answers').append(label);});$('shot').textContent='찍을 것: '+c.shot;$('shotDone').checked=!!state.shots[i];$('memo').value=state.notes[i]||'';$('prev').disabled=i===0;$('next').disabled=i===cards.length-1;$('next').textContent=i===cards.length-1?'마지막 질문':location.items.includes(route[route.indexOf(i)+1])?'다음 이야기 →':'다음 장소 →';decorateQuestions();progress();const active=$('nav').querySelector('[aria-current=true]'); $('nav').scrollLeft=Math.max(0,active.offsetLeft-60);}
$('memo').oninput=()=>{state.notes[state.index]=$('memo').value;save();};$('shotDone').onchange=()=>{state.shots[state.index]=$('shotDone').checked;save();};
for(const [id,d] of [['prev',-1],['next',1]])$(id).onclick=()=>{state.index=route[Math.max(0,Math.min(route.length-1,route.indexOf(state.index)+d))];save();render();$('nav').scrollIntoView({block:'start'});};
$('export').onclick=()=>{let text='# 송희님 편 현장 기록\n\n'+new Date().toLocaleString('ko-KR')+'\n';route.forEach(i=>{const c=cards[i];text+='\n### 질문 체크 · '+c.title+'\n'+[...new Set(c.flow.flatMap(f=>[...f.questions,...f.branches.map(b=>b.ask)]).concat(c.back))].map(q=>'- ['+(state.questions[questionKey(i,q)]?'x':' ')+'] '+q).join('\n')+'\n';text+='\n## '+locations.find(l=>l.items.includes(i)).name+' · '+c.title+'\n먼저 볼 상황: '+c.goal+'\n'+c.answers.map((a,j)=>'- ['+(state.checks[i+'-'+j]?'x':' ')+'] '+a).join('\n')+'\n- ['+(state.shots[i]?'x':' ')+'] 화면 확보\n\n메모: '+(state.notes[i]||'없음')+'\n';});const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='송희님_촬영기록.md';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
$('reset').onclick=()=>$('resetDialog').showModal();$('cancelReset').onclick=()=>$('resetDialog').close();$('confirmReset').onclick=()=>{state={checks:{},notes:{},shots:{},questions:{},index:0};save();render();$('resetDialog').close();};render();save();
