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
      "예전보다 여유가 생겼다고 하면: 예전에는 이 시간에 뭘 하고 계셨어요? 언제부터 이렇게 운동할 수 있게 됐어요?",
      "지금도 바쁘다고 하면: 그 와중에 운동 시간은 어떻게 내세요?",
      "AI에게 맡겼다고 하면: 어떤 말로 시키셨어요? 방금 보신 요청 내용을 보여주실 수 있어요?",
      "자동으로 돌아간다고 하면: 처음에 어떤 조건을 정해두신 거예요? 대표님이 확인하지 않아도 다음 단계로 넘어가요?",
      "닭꼬치 사업 이야기가 나오면: 장사하시다가 AI를 처음 쓰신 건 어떤 일을 해결하려고였어요?"
    ],
    "shot": "운동 모습, 휴대폰의 요청 내용·시각·진행 상태. 사무실에서도 같은 작업을 이어 찍기.",
    "note": "평소 운동 중 일을 하지 않으면 운동 후에 찍기. 새로 요청한 작업은 이전부터 돌아가던 것처럼 연결하지 않기.",
    "main": [
      "운동 끝나고 나면 오늘은 어디로 가세요?",
      "지금 확인하시는 건 무슨 일이에요?",
      "이건 대표님이 언제 맡기신 거예요?",
      "이 일이 끝나면 어떤 결과가 나와야 해요?",
      "사무실 가서 그 결과를 같이 봐도 될까요?"
    ],
    "flow": [
      {
        "title": "운동하는 하루에서 시작",
        "questions": [
          "운동은 보통 이 시간에 하세요?",
          "운동 끝나고 나면 오늘은 어디로 가세요?"
        ],
        "branches": [
          {
            "when": "예전보다 여유가 생겼다고 하면",
            "ask": "예전에는 이 시간에 뭘 하고 계셨어요? 언제부터 이렇게 운동할 수 있게 됐어요?"
          },
          {
            "when": "지금도 바쁘다고 하면",
            "ask": "그 와중에 운동 시간은 어떻게 내세요?"
          }
        ]
      },
      {
        "title": "휴대폰에서 실제 업무로",
        "questions": [
          "지금 확인하시는 건 무슨 일이에요?",
          "이건 대표님이 언제 맡기신 거예요?"
        ],
        "branches": [
          {
            "when": "AI에게 맡겼다고 하면",
            "ask": "어떤 말로 시키셨어요? 방금 보신 요청 내용을 보여주실 수 있어요?"
          },
          {
            "when": "자동으로 돌아간다고 하면",
            "ask": "처음에 어떤 조건을 정해두신 거예요? 대표님이 확인하지 않아도 다음 단계로 넘어가요?"
          }
        ]
      },
      {
        "title": "사무실로 이어갈 약속",
        "questions": [
          "이 일이 끝나면 어떤 결과가 나와야 해요?",
          "사무실 가서 그 결과를 같이 봐도 될까요?"
        ],
        "branches": [
          {
            "when": "닭꼬치 사업 이야기가 나오면",
            "ask": "장사하시다가 AI를 처음 쓰신 건 어떤 일을 해결하려고였어요?"
          }
        ]
      }
    ]
  },
  {
    "tab": "업무 결과",
    "title": "사무실 · 결과를 같이 보며",
    "q": "아까 헬스장에서 보던 일, 지금 어디까지 됐어요?",
    "goal": "같은 작업의 결과를 열고 대표가 읽고 고치는 모습을 본다. 아직 안 끝났으면 현재 상태부터 본다.",
    "answers": [
      "요청한 작업과 나온 결과가 같은 것인지",
      "그대로 쓸 부분과 사람이 고친 부분",
      "예전에 걸린 시간과 지금 검수까지 걸린 시간"
    ],
    "back": "이 화면에서 대표님이 고친 곳을 하나 보여주실 수 있어요?",
    "follow": [
      "끝났다고 하면: 요청한 내용과 결과를 같이 보여주실 수 있어요?",
      "아직 안 끝났다면: 어느 단계에서 기다리는 중이에요? 평소에도 이 정도 걸려요?",
      "거의 고치지 않는다고 하면: 최근에 다시 시켜야 했던 일은 없었어요? 그때는 뭐가 달랐어요?",
      "계속 수정한다고 하면: 수정까지 하면 한 건에 총 얼마나 걸려요?",
      "시간이 줄었다고 하면: 이런 일이 하루나 한 달에 몇 번쯤 있어요?",
      "담당 직원이 있다면: 이 일이 바뀌고 나서 지금은 어떤 일에 시간을 더 쓰세요?"
    ],
    "shot": "요청 → 결과 → 검수·수정 → 실제 사용 화면. 완료 시각과 사람의 작업도 남기기.",
    "note": "당일 끝나지 않으면 그대로 기록. 과거 완료 사례는 별도 사례라고 밝히기. 직원 인터뷰는 동의한 실제 담당자에게.",
    "main": [
      "이 결과는 실제로 어디에 쓰시는 거예요?",
      "이걸 그대로 써도 되는지 대표님은 뭘 보고 판단하세요?",
      "지금 고칠 부분이 있으면 평소 하시는 대로 한번 해주실 수 있어요?",
      "예전에는 이 한 건을 누가, 어떤 순서로 했어요?",
      "그때 걸린 시간과 지금 확인까지 끝내는 시간은 얼마나 차이 나요?"
    ],
    "flow": [
      {
        "title": "아까 맡긴 일의 결과",
        "questions": [
          "아까 헬스장에서 보던 일, 지금 어디까지 됐어요?",
          "이 결과는 실제로 어디에 쓰시는 거예요?"
        ],
        "branches": [
          {
            "when": "끝났다고 하면",
            "ask": "요청한 내용과 결과를 같이 보여주실 수 있어요?"
          },
          {
            "when": "아직 안 끝났다면",
            "ask": "어느 단계에서 기다리는 중이에요? 평소에도 이 정도 걸려요?"
          }
        ]
      },
      {
        "title": "사람이 하는 일을 구체적으로",
        "questions": [
          "이걸 그대로 써도 되는지 대표님은 뭘 보고 판단하세요?",
          "지금 고칠 부분이 있으면 평소 하시는 대로 한번 해주실 수 있어요?"
        ],
        "branches": [
          {
            "when": "거의 고치지 않는다고 하면",
            "ask": "최근에 다시 시켜야 했던 일은 없었어요? 그때는 뭐가 달랐어요?"
          },
          {
            "when": "계속 수정한다고 하면",
            "ask": "수정까지 하면 한 건에 총 얼마나 걸려요?"
          }
        ]
      },
      {
        "title": "예전 작업과 비교",
        "questions": [
          "예전에는 이 한 건을 누가, 어떤 순서로 했어요?",
          "그때 걸린 시간과 지금 확인까지 끝내는 시간은 얼마나 차이 나요?"
        ],
        "branches": [
          {
            "when": "시간이 줄었다고 하면",
            "ask": "이런 일이 하루나 한 달에 몇 번쯤 있어요?"
          },
          {
            "when": "담당 직원이 있다면",
            "ask": "이 일이 바뀌고 나서 지금은 어떤 일에 시간을 더 쓰세요?"
          }
        ]
      }
    ]
  },
  {
    "tab": "인원과 돈",
    "title": "사무실 · 사람과 비용은 어떻게 바뀌었나",
    "q": "직원이 가장 많았을 때는 몇 명이 어떤 일을 하고 있었어요?",
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
      "구체적인 문제가 나오면: 그 일이 생겼던 날에는 어떻게 해결하셨어요?",
      "사람을 더 뽑아봤다고 하면: 더 뽑은 뒤에는 해결됐어요? 그래도 남았던 문제는요?",
      "처음부터 괜찮았다면: 그다음에는 어떤 일을 더 맡기셨어요? 그걸 고른 이유는요?",
      "처음엔 잘 안 됐다면: 어디가 문제였어요? 뭘 바꾼 다음부터 쓸 수 있었어요?",
      "지금 역할 수가 나오면: 지금 실제 쓰는 역할은 몇 개예요? “40명 업무”라는 건 어떤 업무량을 기준으로 하신 말씀이에요?",
      "AI 비용을 말하면: 구독료 말고 사용량·서버·외부 도구 비용도 포함된 거예요?",
      "이익이 늘었다면: 그 사이 사업을 정리하거나 다른 비용을 줄인 것도 있어요? AI로 줄어든 부분은 따로 볼 수 있어요?",
      "인원이 줄었다면: 사업 정리와 AI 도입 중 어떤 일이 먼저였어요? 지금 남은 분들은 어떤 일을 하세요?"
    ],
    "shot": "실제 업무 목록, 월 결제 내역, 같은 기간의 손익 자료. 공개 가능한 범위만.",
    "note": "나이·영업이익·월비용은 아직 확인할 값. AI가 이익 증가의 유일한 원인이라고 단정하지 않기.",
    "main": [
      "그 방식으로 운영하면서 제일 자주 막혔던 일은 뭐였어요?",
      "그래서 맨 처음 AI에 맡겨본 일은 뭐였어요?",
      "첫 결과를 받았을 때 실제 업무에 쓸 만했어요?",
      "비교할 수 있는 한 달을 정하면, 그때 매출과 영업이익은 각각 얼마였어요?",
      "같은 기준으로 지금은 얼마예요?",
      "인건비와 AI 비용은 각각 어떻게 바뀌었어요?"
    ],
    "flow": [
      {
        "title": "처음 바꾸게 된 이유",
        "questions": [
          "직원이 가장 많았을 때는 몇 명이 어떤 일을 하고 있었어요?",
          "그 방식으로 운영하면서 제일 자주 막혔던 일은 뭐였어요?"
        ],
        "branches": [
          {
            "when": "구체적인 문제가 나오면",
            "ask": "그 일이 생겼던 날에는 어떻게 해결하셨어요?"
          },
          {
            "when": "사람을 더 뽑아봤다고 하면",
            "ask": "더 뽑은 뒤에는 해결됐어요? 그래도 남았던 문제는요?"
          }
        ]
      },
      {
        "title": "첫 시도부터 지금까지",
        "questions": [
          "그래서 맨 처음 AI에 맡겨본 일은 뭐였어요?",
          "첫 결과를 받았을 때 실제 업무에 쓸 만했어요?"
        ],
        "branches": [
          {
            "when": "처음부터 괜찮았다면",
            "ask": "그다음에는 어떤 일을 더 맡기셨어요? 그걸 고른 이유는요?"
          },
          {
            "when": "처음엔 잘 안 됐다면",
            "ask": "어디가 문제였어요? 뭘 바꾼 다음부터 쓸 수 있었어요?"
          },
          {
            "when": "지금 역할 수가 나오면",
            "ask": "지금 실제 쓰는 역할은 몇 개예요? “40명 업무”라는 건 어떤 업무량을 기준으로 하신 말씀이에요?"
          }
        ]
      },
      {
        "title": "매출에서 실제 남는 돈까지",
        "questions": [
          "비교할 수 있는 한 달을 정하면, 그때 매출과 영업이익은 각각 얼마였어요?",
          "같은 기준으로 지금은 얼마예요?",
          "인건비와 AI 비용은 각각 어떻게 바뀌었어요?"
        ],
        "branches": [
          {
            "when": "AI 비용을 말하면",
            "ask": "구독료 말고 사용량·서버·외부 도구 비용도 포함된 거예요?"
          },
          {
            "when": "이익이 늘었다면",
            "ask": "그 사이 사업을 정리하거나 다른 비용을 줄인 것도 있어요? AI로 줄어든 부분은 따로 볼 수 있어요?"
          },
          {
            "when": "인원이 줄었다면",
            "ask": "사업 정리와 AI 도입 중 어떤 일이 먼저였어요? 지금 남은 분들은 어떤 일을 하세요?"
          }
        ]
      }
    ]
  },
  {
    "tab": "현장 적용",
    "title": "교육 현장 · 배우는 사람의 일",
    "q": "오늘은 어떤 일을 하시는 분들이 오세요?",
    "goal": "참여자 한 명의 문제와 직접 적용하는 과정을 따라간다. 기능 소개를 반복하기보다 막히는 지점을 본다.",
    "answers": [
      "참여자의 실제 업무 문제 하나",
      "현장에서 직접 해본 결과와 안 된 부분",
      "기대하는 효과와 이미 확인한 성과의 구분"
    ],
    "back": "오늘 해본 것 중 회사에 돌아가서 바로 써볼 수 있는 건 뭐예요?",
    "follow": [
      "특정 업무가 나오면: 오늘 그걸 직접 해보는 분도 계세요? 과정을 같이 볼 수 있을까요?",
      "쓸 수 있다고 하면: 어디에 쓰실 거예요? 그전에 직접 확인할 건 없어요?",
      "안 된다고 하면: 어느 부분이 필요한 결과와 달라요?",
      "이미 사용 중인 분이면: 얼마나 써보셨어요? 실제로 바뀐 일 하나를 말씀해주실 수 있어요?",
      "준비가 더 필요하다면: 자료나 권한 중 무엇이 먼저 있어야 해요?"
    ],
    "shot": "참여자의 입력 → 결과 → 질문 → 피드백. 강의 전경과 실제 반응.",
    "note": "촬영·인터뷰 동의 확인. 자료 제공 안내는 완성된 자료와 링크가 있을 때만. 도입 희망을 실제 성과로 말하지 않기.",
    "main": [
      "그분들이 가장 많이 해결하고 싶어 하는 일은 뭐예요?",
      "참여자에게: 원래 이 일은 어떻게 하고 계셨어요?",
      "참여자에게: 방금 해본 결과를 보니까 바로 쓰실 수 있겠어요?",
      "대표에게: 수업에서는 됐는데 회사에 가서 못 쓰는 경우는 왜 생겨요?",
      "참여자에게: 돌아가면 어떤 일 하나부터 해보실 거예요?"
    ],
    "flow": [
      {
        "title": "오늘 오는 사람의 문제",
        "questions": [
          "오늘은 어떤 일을 하시는 분들이 오세요?",
          "그분들이 가장 많이 해결하고 싶어 하는 일은 뭐예요?"
        ],
        "branches": [
          {
            "when": "특정 업무가 나오면",
            "ask": "오늘 그걸 직접 해보는 분도 계세요? 과정을 같이 볼 수 있을까요?"
          }
        ]
      },
      {
        "title": "참여자 한 명을 따라가기",
        "questions": [
          "참여자에게: 원래 이 일은 어떻게 하고 계셨어요?",
          "참여자에게: 방금 해본 결과를 보니까 바로 쓰실 수 있겠어요?"
        ],
        "branches": [
          {
            "when": "쓸 수 있다고 하면",
            "ask": "어디에 쓰실 거예요? 그전에 직접 확인할 건 없어요?"
          },
          {
            "when": "안 된다고 하면",
            "ask": "어느 부분이 필요한 결과와 달라요?"
          },
          {
            "when": "이미 사용 중인 분이면",
            "ask": "얼마나 써보셨어요? 실제로 바뀐 일 하나를 말씀해주실 수 있어요?"
          }
        ]
      },
      {
        "title": "돌아가서도 쓸 수 있는지",
        "questions": [
          "대표에게: 수업에서는 됐는데 회사에 가서 못 쓰는 경우는 왜 생겨요?",
          "참여자에게: 돌아가면 어떤 일 하나부터 해보실 거예요?"
        ],
        "branches": [
          {
            "when": "준비가 더 필요하다면",
            "ask": "자료나 권한 중 무엇이 먼저 있어야 해요?"
          }
        ]
      }
    ]
  },
  {
    "tab": "사업 이야기",
    "title": "매장 · 처음 장사하던 때부터",
    "q": "처음 닭꼬치 팔던 곳은 어디였어요?",
    "goal": "현재 매장이나 실제 옛 장소에서 당시 사진을 본다. 고생했다는 요약보다 어떤 일이 있었고 무슨 선택을 했는지 듣는다.",
    "answers": [
      "당시의 구체적인 사건과 그때 한 행동",
      "회사를 키우면서 놓쳤던 것",
      "그때로 돌아가면 바꾸고 싶은 선택"
    ],
    "back": "그때 어떤 일이 생겼고, 대표님은 바로 다음에 뭘 하셨어요?",
    "follow": [
      "첫날 이야기가 나오면: 첫 손님은 어떻게 오셨어요? 첫날 팔고 나서는 계속할 만하다고 느끼셨어요?",
      "처음부터 잘됐다고 하면: 그중에서도 안 팔리거나 예상과 달랐던 때는 없었어요?",
      "거래처가 생겼다고 하면: 그 첫 거래처는 어떻게 만나셨어요? 처음 어떤 제안을 하셨어요?",
      "규모를 늘렸다고 하면: 늘리기 전에 어떤 주문이나 반응을 보고 결정하셨어요? 실제 결과도 예상대로였어요?",
      "힘들었다고 요약하면: 특히 기억나는 날 하나만 말씀해주실래요? 무슨 일이 생겼고 그날 어떻게 마무리했어요?",
      "앞서 사무실에서 같은 이야기를 했다면: 아까 말씀하신 운영 문제는 그때부터 시작된 거예요, 나중에 생긴 거예요?"
    ],
    "shot": "매장과 닭꼬치, 당시 사진을 보는 모습, 말을 듣고 반응하는 여유 컷.",
    "note": "현재 공간을 과거 매장인 것처럼 소개하지 않기. 앞에서 들은 연혁은 반복하지 않고 선택과 경험을 듣기.",
    "main": [
      "왜 닭꼬치 장사를 선택하셨어요?",
      "시작할 때 필요한 돈은 어떻게 마련하셨어요?",
      "직접 파는 장사에서 회사를 키워야겠다고 생각한 계기는 뭐였어요?",
      "그때 처음 늘린 게 사람이었어요, 시설이었어요?",
      "커지고 나서 오히려 더 어려워진 일도 있었어요?",
      "그때 대표님 하루는 어땠어요?"
    ],
    "flow": [
      {
        "title": "닭꼬치 하나에서 첫 장사로",
        "questions": [
          "처음 닭꼬치 팔던 곳은 어디였어요?",
          "왜 닭꼬치 장사를 선택하셨어요?",
          "시작할 때 필요한 돈은 어떻게 마련하셨어요?"
        ],
        "branches": [
          {
            "when": "첫날 이야기가 나오면",
            "ask": "첫 손님은 어떻게 오셨어요? 첫날 팔고 나서는 계속할 만하다고 느끼셨어요?"
          },
          {
            "when": "처음부터 잘됐다고 하면",
            "ask": "그중에서도 안 팔리거나 예상과 달랐던 때는 없었어요?"
          }
        ]
      },
      {
        "title": "장사에서 회사로 커진 순간",
        "questions": [
          "직접 파는 장사에서 회사를 키워야겠다고 생각한 계기는 뭐였어요?",
          "그때 처음 늘린 게 사람이었어요, 시설이었어요?"
        ],
        "branches": [
          {
            "when": "거래처가 생겼다고 하면",
            "ask": "그 첫 거래처는 어떻게 만나셨어요? 처음 어떤 제안을 하셨어요?"
          },
          {
            "when": "규모를 늘렸다고 하면",
            "ask": "늘리기 전에 어떤 주문이나 반응을 보고 결정하셨어요? 실제 결과도 예상대로였어요?"
          }
        ]
      },
      {
        "title": "성장 뒤에 남은 부담",
        "questions": [
          "커지고 나서 오히려 더 어려워진 일도 있었어요?",
          "그때 대표님 하루는 어땠어요?"
        ],
        "branches": [
          {
            "when": "힘들었다고 요약하면",
            "ask": "특히 기억나는 날 하나만 말씀해주실래요? 무슨 일이 생겼고 그날 어떻게 마무리했어요?"
          },
          {
            "when": "앞서 사무실에서 같은 이야기를 했다면",
            "ask": "아까 말씀하신 운영 문제는 그때부터 시작된 거예요, 나중에 생긴 거예요?"
          }
        ]
      }
    ]
  },
  {
    "tab": "마무리",
    "title": "매장 · 앞으로 어떤 대표로 일할까",
    "q": "예전 하루와 지금 하루를 비교하면 가장 달라진 건 뭐예요?",
    "goal": "사업의 다음 선택과 대표가 계속 책임질 일을 듣고 마친다.",
    "answers": [
      "앞으로 하고 싶은 일과 이미 실행한 일의 구분",
      "다시 반복하지 않을 방식",
      "AI를 써도 대표가 책임질 일"
    ],
    "back": "요즘에도 대표님이 직접 판단해야 해서 가장 오래 고민하는 일은 뭐예요?",
    "follow": [
      "시간이 생겼다고 하면: 최근에 그 시간으로 실제로 하신 일이 있어요?",
      "여전히 바쁘다고 하면: 그럼 지금은 어떤 일 때문에 바쁘세요? 예전과 고민도 달라졌어요?",
      "목표 숫자를 말하면: 그 규모가 되려면 지금 무엇부터 해야 해요?",
      "아직 고민 중이면: 어떤 조건이 갖춰지면 결정하실 수 있을까요?",
      "추상적인 책임 이야기가 나오면: 최근에 대표님이 직접 결정하신 일로 하나만 예를 들어주실 수 있어요?"
    ],
    "shot": "대화가 끝난 표정과 매장 풍경, 자연스러운 인사.",
    "note": "AI 변환 시연은 가능하면 짧게만. 생성·변환임을 표시하고 업무와 인물 이야기를 끊지 않기.",
    "main": [
      "다시 회사를 키운다면 이번에는 어떤 일을 다르게 하실 것 같아요?",
      "그중 이미 바꾸거나 시작한 게 있어요?",
      "AI에 일을 맡겨도 대표님이 끝까지 직접 판단해야 하는 건 뭐예요?"
    ],
    "flow": [
      {
        "title": "앞에서 들은 하루를 다시 묻기",
        "questions": [
          "예전 하루와 지금 하루를 비교하면 가장 달라진 건 뭐예요?"
        ],
        "branches": [
          {
            "when": "시간이 생겼다고 하면",
            "ask": "최근에 그 시간으로 실제로 하신 일이 있어요?"
          },
          {
            "when": "여전히 바쁘다고 하면",
            "ask": "그럼 지금은 어떤 일 때문에 바쁘세요? 예전과 고민도 달라졌어요?"
          }
        ]
      },
      {
        "title": "앞으로의 선택",
        "questions": [
          "다시 회사를 키운다면 이번에는 어떤 일을 다르게 하실 것 같아요?",
          "그중 이미 바꾸거나 시작한 게 있어요?"
        ],
        "branches": [
          {
            "when": "목표 숫자를 말하면",
            "ask": "그 규모가 되려면 지금 무엇부터 해야 해요?"
          },
          {
            "when": "아직 고민 중이면",
            "ask": "어떤 조건이 갖춰지면 결정하실 수 있을까요?"
          }
        ]
      },
      {
        "title": "대표에게 남는 일",
        "questions": [
          "AI에 일을 맡겨도 대표님이 끝까지 직접 판단해야 하는 건 뭐예요?"
        ],
        "branches": [
          {
            "when": "추상적인 책임 이야기가 나오면",
            "ask": "최근에 대표님이 직접 결정하신 일로 하나만 예를 들어주실 수 있어요?"
          }
        ]
      }
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
function render(){const i=state.index,c=cards[i];const location=locations.find(l=>l.items.includes(i));$('nav').replaceChildren(...locations.map(l=>{const b=document.createElement('button');b.textContent=l.name;b.setAttribute('aria-current',l===location?'true':'false');b.onclick=()=>{state.index=l.items[0];save();render();$('nav').scrollIntoView({block:'start'});};return b;}));$('topics').replaceChildren(...(location.items.length>1?location.items.map(n=>{const b=document.createElement('button');b.textContent=cards[n].tab;b.setAttribute('aria-current',n===i?'true':'false');b.onclick=()=>{state.index=n;save();render();};return b;}):[]));$('card').innerHTML=`<div class="number">장소 ${locations.indexOf(location)+1} / ${locations.length} · ${location.name}</div><h2>${c.title}</h2><div class="goal"><div class="eyebrow">먼저 볼 상황</div><p>${c.goal}</p></div><div class="question"><div class="eyebrow">상황이 보인 뒤 첫 질문</div><p>“${c.q}”</p></div><section class="main-questions">${c.flow.map((f,n)=>`<section class="flow-block"><h3>${n+1}. ${f.title}</h3><ol>${f.questions.map(q=>'<li>'+q+'</li>').join('')}</ol><details><summary>이 답이 나오면 이렇게 이어 묻기</summary>${f.branches.map(b=>'<p class="branch"><strong>'+b.when+'</strong><br>'+b.ask+'</p>').join('')}</details></section>`).join('')}</section><div class="check-title">들었으면 체크</div><div id="answers"></div><div class="rescue"><div class="eyebrow">다시 돌아올 질문</div><p>“${c.back}”</p></div>${c.note?'<div class="field-note">'+c.note+'</div>':''}`;
c.answers.forEach((a,j)=>{const label=document.createElement('label');label.className='answer';const input=document.createElement('input');input.type='checkbox';input.checked=!!state.checks[i+'-'+j];input.onchange=()=>{state.checks[i+'-'+j]=input.checked;save();progress();};const span=document.createElement('span');span.textContent=a;label.append(input,span);$('answers').append(label);});$('shot').textContent='찍을 것: '+c.shot;$('shotDone').checked=!!state.shots[i];$('memo').value=state.notes[i]||'';$('prev').disabled=i===0;$('next').disabled=i===cards.length-1;$('next').textContent=i===cards.length-1?'마지막 질문':location.items.includes(route[route.indexOf(i)+1])?'다음 이야기 →':'다음 장소 →';progress();const active=$('nav').querySelector('[aria-current=true]'); $('nav').scrollLeft=Math.max(0,active.offsetLeft-60);}
$('memo').oninput=()=>{state.notes[state.index]=$('memo').value;save();};$('shotDone').onchange=()=>{state.shots[state.index]=$('shotDone').checked;save();};
for(const [id,d] of [['prev',-1],['next',1]])$(id).onclick=()=>{state.index=route[Math.max(0,Math.min(route.length-1,route.indexOf(state.index)+d))];save();render();$('nav').scrollIntoView({block:'start'});};
$('export').onclick=()=>{let text='# 박대표님 편 현장 기록\n\n'+new Date().toLocaleString('ko-KR')+'\n';route.forEach(i=>{const c=cards[i];text+='\n## '+locations.find(l=>l.items.includes(i)).name+' · '+c.title+'\n먼저 볼 상황: '+c.goal+'\n'+c.answers.map((a,j)=>'- ['+(state.checks[i+'-'+j]?'x':' ')+'] '+a).join('\n')+'\n- ['+(state.shots[i]?'x':' ')+'] 화면 확보\n\n메모: '+(state.notes[i]||'없음')+'\n';});const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='박대표님_촬영기록.md';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
$('reset').onclick=()=>$('resetDialog').showModal();$('cancelReset').onclick=()=>$('resetDialog').close();$('confirmReset').onclick=()=>{state={checks:{},notes:{},shots:{},index:0};save();render();$('resetDialog').close();};render();save();
