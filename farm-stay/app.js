const cards=[
  {
    "tab": "집·출발",
    "title": "집 — 오늘 어디로 가는 사람인가",
    "goal": "집에서 실제 일하러 나가는 준비를 따라간다. 서울 생활을 미리 아는 듯 묻지 않고, 이전에 어디서 무엇을 했는지부터 듣는다.",
    "answers": [
      "지금 사는 곳과 오늘 할 일",
      "이전 생활·직업과 서울에서 내려온 당시 나이",
      "내려온 계기와 첫 행동",
      "가족의 기반과 본인이 새로 시작한 부분"
    ],
    "shot": "준비하는 손, 챙긴 도구, 문을 나서 농장으로 이동하는 모습. 서울 시절 자료는 보유·공개 가능한 경우만.",
    "note": "처음부터 이력을 전부 묻지 않기. 준비가 끝나면 이동을 따라가며 이어 듣는다.",
    "flow": [
      {
        "title": "나갈 준비부터 보기",
        "scene": "이미 들은 답은 반복하지 않고, 실제 상황에 맞는 꼬리 질문만 이어간다.",
        "questions": [
          "오늘은 어디부터 가세요?",
          "거기 가시면 제일 먼저 뭘 하세요?"
        ],
        "branches": [
          {
            "when": "도구를 챙기면",
            "ask": "그건 오늘 어디에 쓰시는 거예요? 매일 가지고 다니세요?"
          },
          {
            "when": "시간을 맞춰 나간다면",
            "ask": "그 시간에 꼭 해야 하는 일이 있어요? 늦어지면 어떻게 돼요?"
          },
          {
            "when": "일찍 시작한다고 하면",
            "ask": "하루 일은 보통 언제 끝나요? 오늘도 비슷해요?"
          }
        ],
        "shotRefs": [
          {
            "id": "farm-0-0",
            "cuts": [
              0,
              1
            ]
          }
        ]
      },
      {
        "title": "이곳에 살기 전의 하루",
        "scene": "이미 들은 답은 반복하지 않고, 실제 상황에 맞는 꼬리 질문만 이어간다.",
        "questions": [
          "여기서는 얼마나 사셨어요?",
          "그전에는 어디서 어떤 일을 하셨어요?"
        ],
        "branches": [
          {
            "when": "서울에서 살았다고 하면",
            "ask": "서울에서는 하루를 어떻게 보내셨어요? 지금과 가장 다른 게 뭐예요?"
          },
          {
            "when": "내려온 시점을 말하면",
            "ask": "그때 몇 살이셨어요? 처음부터 여기서 계속 살 생각이었어요?"
          },
          {
            "when": "과거 사진을 가지고 있다면",
            "ask": "그때 사진을 보니 지금과 다르네요. 이때는 어떤 생활이셨어요?"
          },
          {
            "when": "내려온 지역 이야기가 나오면",
            "ask": "이곳은 원래 연고가 있던 곳이에요, 처음 와본 곳이에요? 여기로 정한 이유가 있어요?"
          }
        ],
        "shotRefs": [
          {
            "id": "farm-0-1",
            "cuts": [
              0
            ]
          }
        ]
      },
      {
        "title": "내려오기로 한 선택",
        "scene": "이미 들은 답은 반복하지 않고, 실제 상황에 맞는 꼬리 질문만 이어간다.",
        "questions": [
          "여기로 내려오기로 마음먹은 계기가 있었어요?",
          "내려오고 나서 실제로 제일 먼저 한 일은 뭐였어요?"
        ],
        "branches": [
          {
            "when": "가족이 농사를 했다고 하면",
            "ask": "그때 가족이 하던 일은 어디까지였어요? 본인이 처음 맡거나 새로 시작한 건 뭐예요?"
          },
          {
            "when": "돈을 마련했다고 하면",
            "ask": "처음 필요한 돈은 어디에 쓸 돈이었어요? 어떻게 마련하셨어요?"
          },
          {
            "when": "소를 팔거나 키운 이야기를 먼저 꺼내면",
            "ask": "그 소는 어떻게 마련한 거예요? 팔고 남은 돈을 어디에 쓰셨어요?"
          },
          {
            "when": "주변에서 반대했다면",
            "ask": "어떤 점을 걱정하셨어요? 그 말을 듣고도 해보기로 한 이유가 있어요?"
          }
        ],
        "shotRefs": [
          {
            "id": "farm-0-2",
            "cuts": [
              0
            ]
          }
        ]
      }
    ],
    "fieldGuide": [
      {
        "id": "farm-0-0",
        "title": "나갈 준비부터 보기",
        "heard": "이 구간에서 실제로 하는 일을 먼저 본다.",
        "action": "준비물을 챙기는 손과 실제 첫 행동을 담는다. 집 소개를 위해 일을 멈추거나 기상 장면을 재연하지 않는다.",
        "cuts": [
          "실제 준비물을 챙기는 손과 인물",
          "집을 나서는 동작의 시작과 끝"
        ],
        "when": "장면을 본 뒤 아래 질문으로",
        "ask": "오늘은 어디부터 가세요?"
      },
      {
        "id": "farm-0-1",
        "title": "이곳에 살기 전의 하루",
        "heard": "이 구간에서 실제로 하는 일을 먼저 본다.",
        "action": "실제 이동을 따라간다. 운전 중 복잡한 답을 요구하지 않고 안전한 곳에 멈추거나 동승 대화가 가능한 때 듣는다.",
        "cuts": [
          "집에서 농장으로 이어지는 길과 이동 모습"
        ],
        "when": "장면을 본 뒤 아래 질문으로",
        "ask": "여기서는 얼마나 사셨어요?"
      },
      {
        "id": "farm-0-2",
        "title": "내려오기로 한 선택",
        "heard": "이 구간에서 실제로 하는 일을 먼저 본다.",
        "action": "대화가 편한 이동 구간에서 계기를 듣는다. 표정과 말끝을 담고, 실패·도피로 몰아가지 않는다.",
        "cuts": [
          "내려온 계기를 말하는 모습과 반응"
        ],
        "when": "장면을 본 뒤 아래 질문으로",
        "ask": "여기로 내려오기로 마음먹은 계기가 있었어요?"
      }
    ],
    "q": "오늘은 어디부터 가세요?",
    "main": [
      "거기 가시면 제일 먼저 뭘 하세요?",
      "여기서는 얼마나 사셨어요?",
      "그전에는 어디서 어떤 일을 하셨어요?",
      "여기로 내려오기로 마음먹은 계기가 있었어요?",
      "내려오고 나서 실제로 제일 먼저 한 일은 뭐였어요?"
    ],
    "back": "여기로 내려오기로 마음먹은 계기가 있었어요?",
    "follow": [
      "도구를 챙기면: 그건 오늘 어디에 쓰시는 거예요? 매일 가지고 다니세요?",
      "시간을 맞춰 나간다면: 그 시간에 꼭 해야 하는 일이 있어요? 늦어지면 어떻게 돼요?",
      "일찍 시작한다고 하면: 하루 일은 보통 언제 끝나요? 오늘도 비슷해요?",
      "서울에서 살았다고 하면: 서울에서는 하루를 어떻게 보내셨어요? 지금과 가장 다른 게 뭐예요?",
      "내려온 시점을 말하면: 그때 몇 살이셨어요? 처음부터 여기서 계속 살 생각이었어요?",
      "과거 사진을 가지고 있다면: 그때 사진을 보니 지금과 다르네요. 이때는 어떤 생활이셨어요?",
      "가족이 농사를 했다고 하면: 그때 가족이 하던 일은 어디까지였어요? 본인이 처음 맡거나 새로 시작한 건 뭐예요?",
      "돈을 마련했다고 하면: 처음 필요한 돈은 어디에 쓸 돈이었어요? 어떻게 마련하셨어요?",
      "소를 팔거나 키운 이야기를 먼저 꺼내면: 그 소는 어떻게 마련한 거예요? 팔고 남은 돈을 어디에 쓰셨어요?",
      "주변에서 반대했다면: 어떤 점을 걱정하셨어요? 그 말을 듣고도 해보기로 한 이유가 있어요?"
    ]
  },
  {
    "tab": "농장",
    "title": "농장 — 넓이보다 먼저 실제 하는 일",
    "goal": "하우스를 이동하며 당일 작업 한 가지를 끝까지 본다. 열매가 없으면 육묘·정식·관리 등 실제 일을 담는다.",
    "answers": [
      "현재 재배·육묘 면적과 소유·임대 구분",
      "함께 관리하는 사람과 역할",
      "당일 작업의 판단 기준과 결과",
      "초기 규모·가족 기반과 본인 확장",
      "같은 시즌 재배·육묘 매출과 비용의 구분"
    ],
    "shot": "농장 경계와 인물이 함께 보이는 전경, 작업 손·상태 차이·결과, 썸네일 가로 사진.",
    "note": "500평은 원문에서 초창기 설명이다. 현재 면적으로 넣지 않는다. 규모와 수입은 출연자 설명과 자료 확인을 구분한다.",
    "flow": [
      {
        "title": "어디까지 관리하는지",
        "scene": "이미 들은 답은 반복하지 않고, 실제 상황에 맞는 꼬리 질문만 이어간다.",
        "questions": [
          "여기는 어떤 걸 키우는 곳이에요?",
          "저쪽도 같이 관리하시는 곳이에요?"
        ],
        "branches": [
          {
            "when": "여러 구역을 설명하면",
            "ask": "재배하는 곳과 모종 키우는 곳은 각각 얼마나 돼요?"
          },
          {
            "when": "면적을 말하면",
            "ask": "그건 현재 운영하는 전체 면적이에요? 빌려 쓰는 땅도 포함돼요?"
          },
          {
            "when": "혼자 한다고 하면",
            "ask": "이 넓이를 하루에 어떻게 돌아보세요? 바쁠 때는 누가 도와주세요?"
          },
          {
            "when": "직원이 있다고 하면",
            "ask": "각자 어떤 일을 맡으세요? 대표님이 꼭 직접 봐야 하는 일은요?"
          },
          {
            "when": "관리하는 범위를 가리키면",
            "ask": "어디서 어디까지인지 같이 걸어봐도 돼요? 이 안에서 직접 관리하는 곳과 다른 분이 맡는 곳은 어떻게 나뉘어요?"
          }
        ],
        "shotRefs": [
          {
            "id": "farm-1-0",
            "cuts": [
              0,
              1,
              2
            ]
          }
        ]
      },
      {
        "title": "손이 멈추는 곳에서 질문하기",
        "scene": "이미 들은 답은 반복하지 않고, 실제 상황에 맞는 꼬리 질문만 이어간다.",
        "questions": [
          "지금 뭘 보고 계신 거예요?",
          "그걸 보면 상태가 괜찮은지 알 수 있어요?"
        ],
        "branches": [
          {
            "when": "선별하며 하나를 빼면",
            "ask": "이건 왜 빼시는 거예요? 남긴 것과 어디가 달라요?"
          },
          {
            "when": "모종을 살핀다고 하면",
            "ask": "좋은 모종은 뭘 보고 구분하세요? 처음 하는 사람도 알아볼 수 있어요?"
          },
          {
            "when": "이상 징후를 발견하면",
            "ask": "지금 발견해서 다행인 거예요? 늦게 알면 어떻게 돼요?"
          },
          {
            "when": "일손이 많이 든다고 하면",
            "ask": "방금 한 일은 하루에 얼마나 반복하세요? 가장 손이 많이 가는 때는 언제예요?"
          },
          {
            "when": "매일 하는 관리 작업을 보면",
            "ask": "이 일을 하루만 못 하면 어떻게 돼요? 자리를 비워야 할 때는 누가 해주세요?"
          }
        ],
        "shotRefs": [
          {
            "id": "farm-1-1",
            "cuts": [
              0,
              1,
              2,
              3
            ]
          }
        ]
      },
      {
        "title": "처음 규모에서 지금까지",
        "scene": "이미 들은 답은 반복하지 않고, 실제 상황에 맞는 꼬리 질문만 이어간다.",
        "questions": [
          "처음 시작했을 때도 이 정도 규모였어요?",
          "처음보다 일을 늘리기로 결정한 계기가 뭐였어요?"
        ],
        "branches": [
          {
            "when": "가족 기반을 설명하면",
            "ask": "기존에 있던 시설과 직접 새로 만든 부분을 나눠서 알려주실 수 있어요?"
          },
          {
            "when": "육묘 판매를 한다고 하면",
            "ask": "처음부터 팔려고 키운 거예요, 본인 농장에 쓰다가 판매하게 된 거예요?"
          },
          {
            "when": "수요가 생겼다고 하면",
            "ask": "처음 사겠다는 분은 어떻게 알게 됐어요? 그때 얼마나 준비할 수 있었어요?"
          },
          {
            "when": "실패나 손실이 있었다면",
            "ask": "어떤 일이었어요? 다음 시즌에는 무엇부터 바꾸셨어요?"
          }
        ],
        "shotRefs": [
          {
            "id": "farm-1-2",
            "cuts": [
              0,
              1
            ]
          }
        ]
      },
      {
        "title": "작업을 본 뒤 한 시즌의 돈",
        "scene": "이미 들은 답은 반복하지 않고, 실제 상황에 맞는 꼬리 질문만 이어간다.",
        "questions": [
          "지난 한 시즌 기준으로 딸기와 모종 판매가 각각 어느 정도였어요?",
          "그중 비용을 빼고 남은 돈은 어느 정도예요?"
        ],
        "branches": [
          {
            "when": "합계만 말하면",
            "ask": "숙소나 다른 사업도 들어간 금액이에요? 농장만 따로 보면요?"
          },
          {
            "when": "남는 돈을 말하면",
            "ask": "인건비와 임대료도 뺀 금액이에요? 시설에 다시 넣은 돈은 어떻게 계산하셨어요?"
          },
          {
            "when": "잘된 시즌을 말하면",
            "ask": "평소와 비교하면 많이 나온 시즌이에요? 수확이 안 좋을 때는 얼마나 달라져요?"
          }
        ],
        "shotRefs": [
          {
            "id": "farm-1-3",
            "cuts": [
              0
            ]
          }
        ]
      }
    ],
    "fieldGuide": [
      {
        "id": "farm-1-0",
        "title": "어디까지 관리하는지",
        "heard": "이 구간에서 실제로 하는 일을 먼저 본다.",
        "action": "실제 공간을 가리키며 범위를 확인한다. 넓은 화면 안에 걸어가는 인물을 담아 크기를 이해시키고 서로 다른 부지를 한 부지처럼 붙이지 않는다.",
        "cuts": [
          "입구에서 하우스 깊이와 인물이 보이는 화면",
          "관리 구역을 따라 이동하는 모습",
          "출연자가 가리키는 경계와 이동 경로를 넓게 담기. 항공 촬영이 없으면 높은 시점이나 이어지는 보행 컷으로 범위 보여주기"
        ],
        "when": "장면을 본 뒤 아래 질문으로",
        "ask": "여기는 어떤 걸 키우는 곳이에요?"
      },
      {
        "id": "farm-1-1",
        "title": "손이 멈추는 곳에서 질문하기",
        "heard": "이 구간에서 실제로 하는 일을 먼저 본다.",
        "action": "오늘 작업의 시작·판단·결과를 담는다. 선별하면 남기는 것과 빼는 것을 함께 찍고, 작업을 보여주기 위한 별도 MC 체험은 만들지 않는다.",
        "cuts": [
          "실제 작업을 시작하고 끝내는 흐름",
          "상태를 살피는 손과 비교할 수 있는 대상",
          "작업이 끝난 뒤 달라진 모습",
          "실제로 하는 관리 작업 한 가지를 시작부터 마무리까지. 손의 움직임과 처리 전후 상태를 함께 찍기"
        ],
        "when": "장면을 본 뒤 아래 질문으로",
        "ask": "지금 뭘 보고 계신 거예요?"
      },
      {
        "id": "farm-1-2",
        "title": "처음 규모에서 지금까지",
        "heard": "이 구간에서 실제로 하는 일을 먼저 본다.",
        "action": "지금 본 작업과 공간에서 출발 당시로 돌아간다. 과거 사진·장부는 있을 때만 보고, 없으면 설명으로 듣는다.",
        "cuts": [
          "초기와 현재를 비교할 공개 자료가 있으면 해당 부분",
          "확장한 곳을 짚는 모습"
        ],
        "when": "장면을 본 뒤 아래 질문으로",
        "ask": "처음 시작했을 때도 이 정도 규모였어요?"
      },
      {
        "id": "farm-1-3",
        "title": "작업을 본 뒤 한 시즌의 돈",
        "heard": "이 구간에서 실제로 하는 일을 먼저 본다.",
        "action": "일의 양을 본 다음 같은 시즌 기준으로 묻는다. 자료가 있으면 재배·모종 판매·비용 항목을 나눠 보여준다.",
        "cuts": [
          "공개 가능한 같은 시즌의 매출·비용 자료"
        ],
        "when": "장면을 본 뒤 아래 질문으로",
        "ask": "지난 한 시즌 기준으로 딸기와 모종 판매가 각각 어느 정도였어요?"
      }
    ],
    "q": "여기는 어떤 걸 키우는 곳이에요?",
    "main": [
      "저쪽도 같이 관리하시는 곳이에요?",
      "지금 뭘 보고 계신 거예요?",
      "그걸 보면 상태가 괜찮은지 알 수 있어요?",
      "처음 시작했을 때도 이 정도 규모였어요?",
      "처음보다 일을 늘리기로 결정한 계기가 뭐였어요?",
      "지난 한 시즌 기준으로 딸기와 모종 판매가 각각 어느 정도였어요?",
      "그중 비용을 빼고 남은 돈은 어느 정도예요?"
    ],
    "back": "지난 한 시즌 기준으로 딸기와 모종 판매가 각각 어느 정도였어요?",
    "follow": [
      "여러 구역을 설명하면: 재배하는 곳과 모종 키우는 곳은 각각 얼마나 돼요?",
      "면적을 말하면: 그건 현재 운영하는 전체 면적이에요? 빌려 쓰는 땅도 포함돼요?",
      "혼자 한다고 하면: 이 넓이를 하루에 어떻게 돌아보세요? 바쁠 때는 누가 도와주세요?",
      "직원이 있다고 하면: 각자 어떤 일을 맡으세요? 대표님이 꼭 직접 봐야 하는 일은요?",
      "선별하며 하나를 빼면: 이건 왜 빼시는 거예요? 남긴 것과 어디가 달라요?",
      "모종을 살핀다고 하면: 좋은 모종은 뭘 보고 구분하세요? 처음 하는 사람도 알아볼 수 있어요?",
      "이상 징후를 발견하면: 지금 발견해서 다행인 거예요? 늦게 알면 어떻게 돼요?",
      "일손이 많이 든다고 하면: 방금 한 일은 하루에 얼마나 반복하세요? 가장 손이 많이 가는 때는 언제예요?",
      "가족 기반을 설명하면: 기존에 있던 시설과 직접 새로 만든 부분을 나눠서 알려주실 수 있어요?",
      "육묘 판매를 한다고 하면: 처음부터 팔려고 키운 거예요, 본인 농장에 쓰다가 판매하게 된 거예요?",
      "수요가 생겼다고 하면: 처음 사겠다는 분은 어떻게 알게 됐어요? 그때 얼마나 준비할 수 있었어요?",
      "실패나 손실이 있었다면: 어떤 일이었어요? 다음 시즌에는 무엇부터 바꾸셨어요?",
      "합계만 말하면: 숙소나 다른 사업도 들어간 금액이에요? 농장만 따로 보면요?",
      "남는 돈을 말하면: 인건비와 임대료도 뺀 금액이에요? 시설에 다시 넣은 돈은 어떻게 계산하셨어요?",
      "잘된 시즌을 말하면: 평소와 비교하면 많이 나온 시즌이에요? 수확이 안 좋을 때는 얼마나 달라져요?"
    ]
  },
  {
    "tab": "스테이 둘러보기",
    "title": "스테이 — 농장 옆에 만든 또 다른 일",
    "goal": "문을 열고 실제 공간을 안내하는 모습을 따른다. 직접 만든 범위는 답을 듣고 구분한다.",
    "answers": [
      "공간의 용도와 직접 만든 범위",
      "이전 모습·공사 기간·어려움",
      "숙소를 시작한 이유",
      "청소·예약·관리 역할과 농장 병행"
    ],
    "shot": "문 열기, 공간 전체와 선택한 디테일, 공개 가능한 공사 전후 자료, 실제 관리 업무.",
    "note": "인테리어 나열보다 이 사람이 왜 이 공간을 만들었는지 듣는다.",
    "flow": [
      {
        "title": "문을 열고 공간을 보기",
        "scene": "이미 들은 답은 반복하지 않고, 실제 상황에 맞는 꼬리 질문만 이어간다.",
        "questions": [
          "여기는 어떤 공간으로 쓰시는 곳이에요?",
          "여기서 직접 손보신 부분도 있어요?"
        ],
        "branches": [
          {
            "when": "직접 만들었다고 하면",
            "ask": "어디부터 어디까지 직접 하신 거예요? 전문가에게 맡긴 부분도 있어요?"
          },
          {
            "when": "특이한 선택을 설명하면",
            "ask": "그렇게 만들고 싶었던 이유가 있어요? 쓰는 분들의 반응은 어때요?"
          }
        ],
        "shotRefs": [
          {
            "id": "farm-2-0",
            "cuts": [
              0,
              1
            ]
          }
        ]
      },
      {
        "title": "처음 모습과 만든 과정",
        "scene": "이미 들은 답은 반복하지 않고, 실제 상황에 맞는 꼬리 질문만 이어간다.",
        "questions": [
          "처음에는 여기가 어떤 모습이었어요?",
          "농장 하시다가 이 공간까지 만들게 된 계기가 뭐예요?"
        ],
        "branches": [
          {
            "when": "공사 과정이 길었다면",
            "ask": "가장 오래 걸린 부분은 어디예요? 그때 어떻게 해결하셨어요?"
          },
          {
            "when": "체험이나 카페를 먼저 했다고 하면",
            "ask": "그때 해보니 생각과 뭐가 달랐어요? 숙소로 바꾸면서 달라진 건 뭐예요?"
          },
          {
            "when": "비용을 이야기하면",
            "ask": "처음 예상한 돈과 실제 들어간 돈이 얼마나 달랐어요?"
          }
        ],
        "shotRefs": [
          {
            "id": "farm-2-1",
            "cuts": [
              0,
              1
            ]
          }
        ]
      },
      {
        "title": "예쁜 공간을 유지하는 일",
        "scene": "이미 들은 답은 반복하지 않고, 실제 상황에 맞는 꼬리 질문만 이어간다.",
        "questions": [
          "여기 청소랑 예약 관리는 누가 하세요?",
          "농장 일이 바쁜 날에는 여기는 어떻게 챙기세요?"
        ],
        "branches": [
          {
            "when": "함께 하는 사람이 있다면",
            "ask": "역할을 어떻게 나누셨어요? 아직 직접 해야 하는 건 뭐예요?"
          },
          {
            "when": "농장과 고객이 연결된다고 하면",
            "ask": "실제로 어떤 식으로 연결돼요? 최근 사례가 하나 있어요?"
          },
          {
            "when": "예약률이나 수입을 말하면",
            "ask": "어느 기간 기준이에요? 운영비를 빼기 전인지도 알려주실 수 있어요?"
          },
          {
            "when": "방이나 시설을 정리하는 모습을 보면",
            "ask": "손님 나가시면 다음 손님 받기까지 어떤 일을 하세요? 그중 시간이 제일 오래 걸리는 건 뭐예요?"
          },
          {
            "when": "손님 반응을 이야기하면",
            "ask": "손님이 불편하다고 해서 바꾼 것도 있어요? 어떤 얘기를 듣고, 실제로 뭘 바꾸셨어요?"
          },
          {
            "when": "현재 예약을 받고 있다면",
            "ask": "처음 오려는 분은 어디서 예약과 요금을 확인하면 돼요? 오기 전에 알아두면 좋은 게 있어요?"
          }
        ],
        "shotRefs": [
          {
            "id": "farm-2-2",
            "cuts": [
              0,
              1,
              2
            ]
          }
        ]
      }
    ],
    "fieldGuide": [
      {
        "id": "farm-2-0",
        "title": "문을 열고 공간을 보기",
        "heard": "이 구간에서 실제로 하는 일을 먼저 본다.",
        "action": "문을 열고 들어가는 동작을 담은 다음 인물과 공간을 함께 본다. 눈에 띄는 부분은 무엇인지 확인하고 직접 만들었다고 단정하지 않는다.",
        "cuts": [
          "문을 열고 안내하는 모습",
          "공간 전체와 실제 설명하는 부분"
        ],
        "when": "장면을 본 뒤 아래 질문으로",
        "ask": "여기는 어떤 공간으로 쓰시는 곳이에요?"
      },
      {
        "id": "farm-2-1",
        "title": "처음 모습과 만든 과정",
        "heard": "이 구간에서 실제로 하는 일을 먼저 본다.",
        "action": "공사 전 사진이 있으면 현재 같은 위치와 비교한다. 손으로 만든 흔적을 담은 뒤 어떤 일이 있었는지 묻는다.",
        "cuts": [
          "직접 손본 부분의 상세 모습",
          "공사 전후 자료가 있으면 같은 위치 비교"
        ],
        "when": "장면을 본 뒤 아래 질문으로",
        "ask": "처음에는 여기가 어떤 모습이었어요?"
      },
      {
        "id": "farm-2-2",
        "title": "예쁜 공간을 유지하는 일",
        "heard": "이 구간에서 실제로 하는 일을 먼저 본다.",
        "action": "당일 청소·정리·예약 관리가 있으면 실제 업무를 담는다. 손님이나 예약자 정보는 공개하지 않는다.",
        "cuts": [
          "당일 실제 정리·관리 작업",
          "공개 가능한 운영 자료 또는 관리 도구",
          "오늘 실제로 하는 객실·시설 준비 과정. 손님 의견으로 바꾼 곳이 있다면 설명한 부분의 현재 모습"
        ],
        "when": "장면을 본 뒤 아래 질문으로",
        "ask": "여기 청소랑 예약 관리는 누가 하세요?"
      }
    ],
    "q": "여기는 어떤 공간으로 쓰시는 곳이에요?",
    "main": [
      "여기서 직접 손보신 부분도 있어요?",
      "처음에는 여기가 어떤 모습이었어요?",
      "농장 하시다가 이 공간까지 만들게 된 계기가 뭐예요?",
      "여기 청소랑 예약 관리는 누가 하세요?",
      "농장 일이 바쁜 날에는 여기는 어떻게 챙기세요?"
    ],
    "back": "여기 청소랑 예약 관리는 누가 하세요?",
    "follow": [
      "직접 만들었다고 하면: 어디부터 어디까지 직접 하신 거예요? 전문가에게 맡긴 부분도 있어요?",
      "특이한 선택을 설명하면: 그렇게 만들고 싶었던 이유가 있어요? 쓰는 분들의 반응은 어때요?",
      "공사 과정이 길었다면: 가장 오래 걸린 부분은 어디예요? 그때 어떻게 해결하셨어요?",
      "체험이나 카페를 먼저 했다고 하면: 그때 해보니 생각과 뭐가 달랐어요? 숙소로 바꾸면서 달라진 건 뭐예요?",
      "비용을 이야기하면: 처음 예상한 돈과 실제 들어간 돈이 얼마나 달랐어요?",
      "함께 하는 사람이 있다면: 역할을 어떻게 나누셨어요? 아직 직접 해야 하는 건 뭐예요?",
      "농장과 고객이 연결된다고 하면: 실제로 어떤 식으로 연결돼요? 최근 사례가 하나 있어요?",
      "예약률이나 수입을 말하면: 어느 기간 기준이에요? 운영비를 빼기 전인지도 알려주실 수 있어요?"
    ]
  },
  {
    "tab": "거래처·유통",
    "title": "거래처와 유통 — 키운 딸기가 돈이 되기까지",
    "goal": "실제 납품이 있으면 그 과정을 따른다. 없으면 스테이에서 과거 주문·포장·거래 자료를 보며 듣는다.",
    "answers": [
      "첫 고객을 찾은 경로와 실제 제안",
      "첫 주문의 가격·수량·결제 조건",
      "선별·포장·배송과 손실 처리",
      "재주문 이유와 지금 바뀐 유통 방식"
    ],
    "shot": "당일 상품·포장·주문 자료 또는 당시 기록. 거래처 방문·내부 촬영은 가능한 경우에만.",
    "note": "현재 납품과 과거 영업 경험을 구분한다. 없던 거래를 재연하지 않는다.",
    "flow": [
      {
        "title": "오늘 상품 또는 당시 자료에서 시작",
        "scene": "이미 들은 답은 반복하지 않고, 실제 상황에 맞는 꼬리 질문만 이어간다.",
        "questions": [
          "키운 딸기는 보통 어떤 경로로 판매하세요?"
        ],
        "branches": [
          {
            "when": "현재 상품을 보여주면",
            "ask": "이건 어디로 나가요? 여기서부터 받는 분에게 갈 때까지 어떻게 움직여요?"
          },
          {
            "when": "과거 자료를 보여주면",
            "ask": "이때는 어디에 납품하신 거예요? 언제 자료예요?"
          },
          {
            "when": "첫 판매를 말하면",
            "ask": "처음에는 그분을 어떻게 만나셨어요?"
          },
          {
            "when": "체험이나 방문 고객 이야기가 나오면",
            "ask": "지금도 직접 체험을 운영하세요? 예전과 달라졌다면 지금은 어디로 연결하고, 본인은 어떤 일에 집중하세요?"
          }
        ],
        "shotRefs": [
          {
            "id": "farm-3-0",
            "cuts": [
              0,
              1
            ]
          }
        ]
      },
      {
        "title": "첫 거래처에 한 말",
        "scene": "이미 들은 답은 반복하지 않고, 실제 상황에 맞는 꼬리 질문만 이어간다.",
        "questions": [
          "처음 돈을 내고 사간 분은 어떻게 만나셨어요?",
          "그분에게 처음 어떤 말을 하셨어요?",
          "그 뒤 바로 주문이 들어왔어요?"
        ],
        "branches": [
          {
            "when": "가게를 직접 돌았다고 하면",
            "ask": "어떤 가게부터 가볼지 어떻게 정했어요? 샘플은 얼마나 들고 가셨어요?"
          },
          {
            "when": "거절당했다고 하면",
            "ask": "어떤 이유로 거절했어요? 그다음 가게에서는 제안을 바꾸셨어요?"
          },
          {
            "when": "첫 주문이 왔다면",
            "ask": "처음 가격과 수량은 어떻게 정했어요? 돈은 언제 받기로 했어요?"
          },
          {
            "when": "다른 딸기와 비교했다고 하면",
            "ask": "그분이 기존 거래처 대신 사볼 만한 이유를 어떻게 보여주셨어요?"
          }
        ],
        "shotRefs": [
          {
            "id": "farm-3-1",
            "cuts": [
              0,
              1
            ]
          }
        ]
      },
      {
        "title": "한 번 주문에서 재주문까지",
        "scene": "이미 들은 답은 반복하지 않고, 실제 상황에 맞는 꼬리 질문만 이어간다.",
        "questions": [
          "첫 주문을 받았을 때 포장하고 배송하는 건 어떻게 하셨어요?",
          "그곳에서 다시 주문이 왔어요?"
        ],
        "branches": [
          {
            "when": "재주문을 받았다면",
            "ask": "어떤 점이 좋아서 다시 주문한다고 하던가요? 그 뒤에도 지키는 기준이 있어요?"
          },
          {
            "when": "남거나 반품됐다고 하면",
            "ask": "그 딸기는 어떻게 처리했어요? 손해는 누가 부담했어요?"
          },
          {
            "when": "가격을 설명하면",
            "ask": "포장비와 배송비까지 빼도 남는 거래였어요? 처음 계산과 달랐던 비용은요?"
          },
          {
            "when": "직접 팔던 방식을 바꿨다면",
            "ask": "지금은 누가 어떤 일을 맡아요? 직접 할 때와 무엇이 달라졌어요?"
          }
        ],
        "shotRefs": [
          {
            "id": "farm-3-2",
            "cuts": [
              0,
              1
            ]
          }
        ]
      }
    ],
    "fieldGuide": [
      {
        "id": "farm-3-0",
        "title": "오늘 상품 또는 당시 자료에서 시작",
        "heard": "이 구간에서 실제로 하는 일을 먼저 본다.",
        "action": "상품이 있으면 출하 준비를 먼저 찍는다. 없으면 당시 자료를 보여주는 손과 내용으로 시작한다. 연락처·거래 정보는 공개 범위를 확인한다.",
        "cuts": [
          "실제 출하 상품 또는 당시 거래 자료",
          "공개 가능한 주문에서 상품으로 이어지는 근거"
        ],
        "when": "장면을 본 뒤 아래 질문으로",
        "ask": "키운 딸기는 보통 어떤 경로로 판매하세요?"
      },
      {
        "id": "farm-3-1",
        "title": "첫 거래처에 한 말",
        "heard": "이 구간에서 실제로 하는 일을 먼저 본다.",
        "action": "첫 고객 한 곳을 중심으로 만남부터 주문까지 시간순으로 듣는다. 당시 기록이 있으면 함께 확인하되 영업 장면을 재연하지 않는다.",
        "cuts": [
          "첫 거래의 실제 기록이 있으면 해당 부분",
          "그때 상황을 설명하는 표정과 반응"
        ],
        "when": "장면을 본 뒤 아래 질문으로",
        "ask": "처음 돈을 내고 사간 분은 어떻게 만나셨어요?"
      },
      {
        "id": "farm-3-2",
        "title": "한 번 주문에서 재주문까지",
        "heard": "이 구간에서 실제로 하는 일을 먼저 본다.",
        "action": "실제 포장과 운송이 있으면 시작부터 마무리를 담는다. 없으면 과거 사진과 주문 기록으로 과정을 듣는다.",
        "cuts": [
          "선별·포장·출발의 실제 과정 또는 과거 자료",
          "재주문을 보여줄 공개 자료가 있으면 해당 부분"
        ],
        "when": "장면을 본 뒤 아래 질문으로",
        "ask": "첫 주문을 받았을 때 포장하고 배송하는 건 어떻게 하셨어요?"
      }
    ],
    "q": "키운 딸기는 보통 어떤 경로로 판매하세요?",
    "main": [
      "처음 돈을 내고 사간 분은 어떻게 만나셨어요?",
      "그분에게 처음 어떤 말을 하셨어요?",
      "그 뒤 바로 주문이 들어왔어요?",
      "첫 주문을 받았을 때 포장하고 배송하는 건 어떻게 하셨어요?",
      "그곳에서 다시 주문이 왔어요?"
    ],
    "back": "첫 주문을 받았을 때 포장하고 배송하는 건 어떻게 하셨어요?",
    "follow": [
      "현재 상품을 보여주면: 이건 어디로 나가요? 여기서부터 받는 분에게 갈 때까지 어떻게 움직여요?",
      "과거 자료를 보여주면: 이때는 어디에 납품하신 거예요? 언제 자료예요?",
      "첫 판매를 말하면: 처음에는 그분을 어떻게 만나셨어요?",
      "가게를 직접 돌았다고 하면: 어떤 가게부터 가볼지 어떻게 정했어요? 샘플은 얼마나 들고 가셨어요?",
      "거절당했다고 하면: 어떤 이유로 거절했어요? 그다음 가게에서는 제안을 바꾸셨어요?",
      "첫 주문이 왔다면: 처음 가격과 수량은 어떻게 정했어요? 돈은 언제 받기로 했어요?",
      "다른 딸기와 비교했다고 하면: 그분이 기존 거래처 대신 사볼 만한 이유를 어떻게 보여주셨어요?",
      "재주문을 받았다면: 어떤 점이 좋아서 다시 주문한다고 하던가요? 그 뒤에도 지키는 기준이 있어요?",
      "남거나 반품됐다고 하면: 그 딸기는 어떻게 처리했어요? 손해는 누가 부담했어요?",
      "가격을 설명하면: 포장비와 배송비까지 빼도 남는 거래였어요? 처음 계산과 달랐던 비용은요?",
      "직접 팔던 방식을 바꿨다면: 지금은 누가 어떤 일을 맡아요? 직접 할 때와 무엇이 달라졌어요?"
    ]
  },
  {
    "tab": "스테이 대화",
    "title": "스테이 — 다음에 어떤 삶과 사업을 만들지",
    "goal": "오늘 본 일을 짚으며 편하게 앉는다. 진행 중인 사업과 앞으로의 구상을 구분한다.",
    "answers": [
      "서울 시절과 달라진 실제 생활",
      "가장 키우고 싶은 사업과 이유",
      "확장의 장애물·맡길 일·진행 단계",
      "다음 행동과 귀농 전 알아야 할 조건"
    ],
    "shot": "앉아 쉬는 모습, 중요한 답변의 표정, 실제 진행 자료, 대화 후 일상을 이어가는 모습.",
    "note": "성공담이나 퇴사·확장을 정답으로 요구하지 않는다. 합의 없는 모집·강의 CTA는 넣지 않는다.",
    "flow": [
      {
        "title": "오늘 하루를 함께 본 뒤",
        "scene": "이미 들은 답은 반복하지 않고, 실제 상황에 맞는 꼬리 질문만 이어간다.",
        "questions": [
          "서울에 계실 때 지금처럼 살게 될 거라고 생각하셨어요?",
          "막상 여기서 살아보니 제일 좋았던 점과 어려웠던 점은 뭐예요?"
        ],
        "branches": [
          {
            "when": "시간이 자유로워졌다면",
            "ask": "오늘 같은 하루에서 그걸 느끼는 순간은 언제예요? 반대로 못 쉬는 때도 있어요?"
          },
          {
            "when": "생각보다 힘들었다면",
            "ask": "최근에 특히 힘들었던 하루가 있어요? 그날은 어떻게 넘기셨어요?"
          },
          {
            "when": "관리하는 일이 힘들다고 하면",
            "ask": "그런데도 여기서 계속 해보고 싶게 만드는 건 뭐예요? 최근에 그 마음이 들었던 일이 있었어요?"
          }
        ],
        "shotRefs": [
          {
            "id": "farm-4-0",
            "cuts": [
              0,
              1
            ]
          }
        ]
      },
      {
        "title": "다음 사업을 고르는 이유",
        "scene": "이미 들은 답은 반복하지 않고, 실제 상황에 맞는 꼬리 질문만 이어간다.",
        "questions": [
          "지금 하는 일 중 앞으로 가장 키우고 싶은 건 뭐예요?",
          "왜 그 일을 더 키우고 싶으세요?",
          "그걸 하는 데 지금 제일 부족한 건 뭐예요?"
        ],
        "branches": [
          {
            "when": "유통을 키우고 싶다면",
            "ask": "농장을 더 넓히는 것보다 그쪽을 택한 이유가 있어요? 지금 실제로 맡고 있는 거래는 어디까지예요?"
          },
          {
            "when": "가공이나 착즙주스를 꺼내면",
            "ask": "지금은 아이디어 단계예요, 실제로 만들어보셨어요? 판매까지 가려면 다음에 뭘 해야 해요?"
          },
          {
            "when": "사람이 필요하다면",
            "ask": "직접 하던 일 중 어떤 걸 맡기고 싶어요? 맡기기 전에 정리해야 할 것은요?"
          },
          {
            "when": "고객 확보가 문제라면",
            "ask": "처음 살 만한 사람은 누구라고 보세요? 그분들한테 이미 물어보신 게 있어요?"
          }
        ],
        "shotRefs": [
          {
            "id": "farm-4-1",
            "cuts": [
              0
            ]
          }
        ]
      },
      {
        "title": "다시 선택한다면, 그리고 내일 할 일",
        "scene": "이미 들은 답은 반복하지 않고, 실제 상황에 맞는 꼬리 질문만 이어간다.",
        "questions": [
          "내려오던 때로 돌아간다면 어떤 선택을 다르게 하겠어요?",
          "지금 가장 먼저 해결하려는 일은 뭐예요?"
        ],
        "branches": [
          {
            "when": "귀농을 권하고 싶다고 하면",
            "ask": "내려오기 전에 꼭 해보고 왔으면 하는 일이 있어요?"
          },
          {
            "when": "준비가 중요하다고 하면",
            "ask": "어느 정도 준비돼 있어야 한다고 보세요? 처음 시작할 때 이미 갖춰져 있던 것과 직접 준비한 건 뭐였어요?"
          },
          {
            "when": "다음 행동을 말하면",
            "ask": "그건 언제, 무엇부터 해보실 거예요?"
          }
        ],
        "shotRefs": [
          {
            "id": "farm-4-2",
            "cuts": [
              0,
              1
            ]
          }
        ]
      }
    ],
    "fieldGuide": [
      {
        "id": "farm-4-0",
        "title": "오늘 하루를 함께 본 뒤",
        "heard": "이 구간에서 실제로 하는 일을 먼저 본다.",
        "action": "자리에 앉고 쉬는 모습을 담는다. 감정 이야기를 하는 동안 표정과 말끝을 담고 억지로 풍경 컷을 끼우려고 카메라를 돌리지 않는다.",
        "cuts": [
          "쉬는 자리로 이동하고 앉는 모습",
          "오늘 생활을 돌아보는 표정과 반응"
        ],
        "when": "장면을 본 뒤 아래 질문으로",
        "ask": "서울에 계실 때 지금처럼 살게 될 거라고 생각하셨어요?"
      },
      {
        "id": "farm-4-1",
        "title": "다음 사업을 고르는 이유",
        "heard": "이 구간에서 실제로 하는 일을 먼저 본다.",
        "action": "현재 진행 중인 준비가 있으면 자료를 보고 묻는다. 구상만 있다면 구상으로 듣고 이미 성과가 난 것처럼 보여주지 않는다.",
        "cuts": [
          "실제로 진행 중인 준비 자료가 있으면 해당 부분"
        ],
        "when": "장면을 본 뒤 아래 질문으로",
        "ask": "지금 하는 일 중 앞으로 가장 키우고 싶은 건 뭐예요?"
      },
      {
        "id": "farm-4-2",
        "title": "다시 선택한다면, 그리고 내일 할 일",
        "heard": "이 구간에서 실제로 하는 일을 먼저 본다.",
        "action": "마지막 답변 뒤 실제로 정리하거나 다음 일을 하러 가는 모습을 담는다. 긴 소감이나 성공을 선언하는 말을 요구하지 않는다.",
        "cuts": [
          "다음 일을 위해 실제 준비하거나 자리를 정리하는 모습",
          "인사 후 일상을 이어가는 모습"
        ],
        "when": "장면을 본 뒤 아래 질문으로",
        "ask": "내려오던 때로 돌아간다면 어떤 선택을 다르게 하겠어요?"
      }
    ],
    "q": "서울에 계실 때 지금처럼 살게 될 거라고 생각하셨어요?",
    "main": [
      "막상 여기서 살아보니 제일 좋았던 점과 어려웠던 점은 뭐예요?",
      "지금 하는 일 중 앞으로 가장 키우고 싶은 건 뭐예요?",
      "왜 그 일을 더 키우고 싶으세요?",
      "그걸 하는 데 지금 제일 부족한 건 뭐예요?",
      "내려오던 때로 돌아간다면 어떤 선택을 다르게 하겠어요?",
      "지금 가장 먼저 해결하려는 일은 뭐예요?"
    ],
    "back": "내려오던 때로 돌아간다면 어떤 선택을 다르게 하겠어요?",
    "follow": [
      "시간이 자유로워졌다면: 오늘 같은 하루에서 그걸 느끼는 순간은 언제예요? 반대로 못 쉬는 때도 있어요?",
      "생각보다 힘들었다면: 최근에 특히 힘들었던 하루가 있어요? 그날은 어떻게 넘기셨어요?",
      "유통을 키우고 싶다면: 농장을 더 넓히는 것보다 그쪽을 택한 이유가 있어요? 지금 실제로 맡고 있는 거래는 어디까지예요?",
      "가공이나 착즙주스를 꺼내면: 지금은 아이디어 단계예요, 실제로 만들어보셨어요? 판매까지 가려면 다음에 뭘 해야 해요?",
      "사람이 필요하다면: 직접 하던 일 중 어떤 걸 맡기고 싶어요? 맡기기 전에 정리해야 할 것은요?",
      "고객 확보가 문제라면: 처음 살 만한 사람은 누구라고 보세요? 그분들한테 이미 물어보신 게 있어요?",
      "귀농을 권하고 싶다고 하면: 내려오기 전에 꼭 해보고 왔으면 하는 일이 있어요?",
      "준비가 중요하다고 하면: 어느 정도 준비돼 있어야 한다고 보세요? 본인에게 이미 있었던 기반도 있었잖아요?",
      "다음 행동을 말하면: 그건 언제, 무엇부터 해보실 거예요?"
    ]
  }
];
const locations=[{"name": "집·출발", "items": [0]}, {"name": "농장", "items": [1]}, {"name": "스테이 둘러보기", "items": [2]}, {"name": "거래처·유통", "items": [3]}, {"name": "스테이 대화", "items": [4]}];
const route=locations.flatMap(l=>l.items);
const key='sajjiknam-farm-stay-field-v1';let state={checks:{},notes:{},shots:{},questions:{},fieldCuts:{},index:route[0]};let storageOK=true;
try{const x=JSON.parse(localStorage.getItem(key)||'null');if(x&&typeof x==='object'){state.questions=x.questions||{};state.fieldCuts=x.fieldCuts||{};state.checks=x.checks||{};state.notes=x.notes||{};state.shots=x.shots||{};state.index=route.includes(x.index)?x.index:route[0];}}catch(e){storageOK=false;}
const $=id=>document.getElementById(id);const count=route.reduce((n,i)=>n+cards[i].answers.length,0);
function save(){try{localStorage.setItem(key,JSON.stringify(state));storageOK=true;}catch(e){storageOK=false;}$('save').textContent=storageOK?'이 브라우저에 자동 저장':'저장 불가 · 기록을 내려받아 주세요';}
function progress(){let n=0;route.forEach(i=>cards[i].answers.forEach((_,j)=>{if(state.checks[i+'-'+j])n++;}));$('total').textContent=`들은 내용 ${n} / ${count}`;$('progress').max=count;$('progress').value=n;const c=cards[state.index];const missing=c.answers.filter((_,j)=>!state.checks[state.index+'-'+j]);$('missing').textContent=missing.length?'더 물어볼 것: '+missing.join(' / '):'이 부분은 다 들었어요.';}

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
 document.querySelectorAll('#question-review > section').forEach((section)=>{
 const i=Number(section.dataset.cardIndex),c=cards[i];if(!c)return;
 section.querySelectorAll('ol li').forEach((el,j)=>addQuestionCheck(el,i,c.flow.flatMap(f=>f.questions)[j]));
 section.querySelectorAll('.branch').forEach((el,j)=>addQuestionCheck(el,i,c.flow.flatMap(f=>f.branches)[j].ask));
 });
 const i=state.index,c=cards[i];
 document.querySelectorAll('#card .flow-block').forEach((block,n)=>{
 block.querySelectorAll('ol li').forEach((el,j)=>addQuestionCheck(el,i,c.flow[n].questions[j]));
 block.querySelectorAll('.branch').forEach((el,j)=>addQuestionCheck(el,i,c.flow[n].branches[j].ask));
 });
 
 addQuestionCheck(document.querySelector('#card .rescue p'),i,c.back);
 document.querySelectorAll('[data-question-key]').forEach(x=>{x.checked=!!state.questions[x.dataset.questionKey];});
}


function fieldGuide(i,n){const refs=cards[i].flow[n].shotRefs||[];return `<section class="field-guide"><div class="eyebrow">먼저 찍고 → 아래 질문으로</div>${refs.map(ref=>{const g=cards[i].fieldGuide.find(g=>g.id===ref.id);return `<div class="cut-sequence"><p>${ref.action||g.action}</p>${ref.cuts.map(j=>`<label class="cut-check"><input type="checkbox" data-cut-key="${g.id}-${j}" aria-label="현장 컷 확보: ${g.cuts[j]}"><span>${g.cuts[j]}</span></label>`).join('')}</div>`;}).join('')}</section>`;}
function decorateCuts(){document.querySelectorAll('[data-cut-key]').forEach(input=>{const k=input.dataset.cutKey;input.checked=!!state.fieldCuts[k];input.onchange=()=>{state.fieldCuts[k]=input.checked;document.querySelectorAll('[data-cut-key]').forEach(x=>{if(x.dataset.cutKey===k)x.checked=input.checked;});save();};});document.querySelectorAll('.cut-question').forEach(el=>addQuestionCheck(el,Number(el.dataset.card),el.dataset.ask));}

function render(){const i=state.index,c=cards[i];const location=locations.find(l=>l.items.includes(i));$('nav').replaceChildren(...locations.map(l=>{const b=document.createElement('button');b.textContent=l.name;b.setAttribute('aria-current',l===location?'true':'false');b.onclick=()=>{state.index=l.items[0];save();render();$('nav').scrollIntoView({block:'start'});};return b;}));$('topics').replaceChildren(...(location.items.length>1?location.items.map(n=>{const b=document.createElement('button');b.textContent=cards[n].tab;b.setAttribute('aria-current',n===i?'true':'false');b.onclick=()=>{state.index=n;save();render();};return b;}):[]));$('card').innerHTML=`<div class="number">장소 ${locations.indexOf(location)+1} / ${locations.length} · ${location.name}</div><h2>${c.title}</h2><div class="goal"><div class="eyebrow">먼저 볼 상황</div><p>${c.goal}</p></div><section class="main-questions">${c.flow.map((f,n)=>`<section class="flow-block"><h3>${n+1}. ${f.title}</h3><p class="scene-note">${f.scene}</p>${fieldGuide(i,n)}<div class="eyebrow">장면을 본 뒤 물어보기</div><ol>${f.questions.map(q=>'<li>'+q+'</li>').join('')}</ol><details><summary>이 답이 나오면 이렇게 이어 묻기</summary>${f.branches.map(b=>'<p class="branch"><strong>'+b.when+'</strong><br>'+b.ask+'</p>').join('')}</details></section>`).join('')}</section><div class="check-title">들었으면 체크</div><div id="answers"></div><div class="rescue"><div class="eyebrow">다시 돌아올 질문</div><p>“${c.back}”</p></div>${c.note?'<div class="field-note">'+c.note+'</div>':''}`;
c.answers.forEach((a,j)=>{const label=document.createElement('label');label.className='answer';const input=document.createElement('input');input.type='checkbox';input.checked=!!state.checks[i+'-'+j];input.onchange=()=>{state.checks[i+'-'+j]=input.checked;save();progress();};const span=document.createElement('span');span.textContent=a;label.append(input,span);$('answers').append(label);});$('shot').textContent='찍을 것: '+c.shot;$('shotDone').checked=!!state.shots[i];$('memo').value=state.notes[i]||'';$('prev').disabled=i===route[0];$('next').disabled=i===cards.length-1;$('next').textContent=i===cards.length-1?'마지막 질문':location.items.includes(route[route.indexOf(i)+1])?'다음 이야기 →':'다음 장소 →';decorateQuestions();decorateCuts();progress();const active=$('nav').querySelector('[aria-current=true]'); $('nav').scrollLeft=Math.max(0,active.offsetLeft-60);}
$('memo').oninput=()=>{state.notes[state.index]=$('memo').value;save();};$('shotDone').onchange=()=>{state.shots[state.index]=$('shotDone').checked;save();};
for(const [id,d] of [['prev',-1],['next',1]])$(id).onclick=()=>{state.index=route[Math.max(0,Math.min(route.length-1,route.indexOf(state.index)+d))];save();render();$('nav').scrollIntoView({block:'start'});};
$('export').onclick=()=>{let text='# 농장과 스테이 편 현장 기록\n\n'+new Date().toLocaleString('ko-KR')+'\n';route.forEach(i=>{const c=cards[i];text+='\n### 현장 컷 · '+c.title+'\n'+(c.fieldGuide||[]).map(g=>g.title+'\n들은 말: '+g.heard+'\n찍을 행동: '+g.action+'\n'+g.cuts.map((cut,j)=>'- ['+(state.fieldCuts[g.id+'-'+j]?'x':' ')+'] '+cut).join('\n')+'\n다음 질문: ['+(state.questions[questionKey(i,g.ask)]?'x':' ')+'] '+g.ask).join('\n\n')+'\n';text+='\n### 질문 체크 · '+c.title+'\n'+[...new Set(c.flow.flatMap(f=>[...f.questions,...f.branches.map(b=>b.ask)]).concat(c.back))].map(q=>'- ['+(state.questions[questionKey(i,q)]?'x':' ')+'] '+q).join('\n')+'\n';text+='\n## '+locations.find(l=>l.items.includes(i)).name+' · '+c.title+'\n먼저 볼 상황: '+c.goal+'\n'+c.answers.map((a,j)=>'- ['+(state.checks[i+'-'+j]?'x':' ')+'] '+a).join('\n')+'\n- ['+(state.shots[i]?'x':' ')+'] 화면 확보\n\n메모: '+(state.notes[i]||'없음')+'\n';});route.forEach(i=>{const current=new Set([...cards[i].flow.flatMap(f=>[...f.questions,...f.branches.map(b=>b.ask)]),cards[i].q,cards[i].back]);const previous=Object.entries(state.questions).filter(([k,v])=>v&&k.startsWith(i+':')&&!current.has(k.slice(k.indexOf(':')+1)));if(previous.length)text+='\n## 이전 질문 체크 · '+cards[i].tab+'\n'+previous.map(([k])=>'- [x] '+k.slice(k.indexOf(':')+1)).join('\n')+'\n';});const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='농장과 스테이_촬영기록.md';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
$('reset').onclick=()=>$('resetDialog').showModal();$('cancelReset').onclick=()=>$('resetDialog').close();$('confirmReset').onclick=()=>{state={checks:{},notes:{},shots:{},questions:{},fieldCuts:{},index:route[0]};save();render();$('resetDialog').close();};render();save();
