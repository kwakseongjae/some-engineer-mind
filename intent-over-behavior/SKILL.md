---
name: intent-over-behavior
description: Forces the WHY before the HOW when code is being written, edited, reviewed, refactored, or generated. Surfaces the intent behind a change in one sentence so the result is purposeful rather than merely working, and prefers not writing code at all when intent stays unclear. 코드를 작성·수정·리뷰·생성·리팩터할 때 '동작하느냐'보다 '왜 만드는가(의도)'를 먼저 짚게 만드는 엔지니어링 철학 스킬.
when_to_use: Use whenever the user is about to write, edit, review, refactor, or generate any code — and most strongly when intent is being skipped, e.g. "just make it work", "just get it working", "quickly hack together", "그냥 돌아가게", "일단 동작만". Also use when the user shows hesitation ("이 코드 왜 짜는 거지?", "이거 추가해도 돼?", "필요한 코드인지 모르겠어") or when commit messages, PR descriptions, or design decisions are being drafted.
allowed-tools: Read Grep
---

> **한 줄.** 돌아가는 코드보다, 왜 만드는지가 분명한 코드가 낫다.

## Why this mindset

코드는 단순히 돌아가는 것보다, 어떤 의도를 가지고 만드는지가 더 중요합니다.
어떤 의도에서 이 코드를 만들어 내는가를 먼저 고민해야 합니다.
의도가 불분명한 코드는 만들지 않는 편이 더 좋은 경우가 많습니다.

## Instructions

코드를 쓰거나, 고치거나, 추가하거나, 리뷰할 때 — 손이 키보드로 가기 전에 한 번 멈춘다.

1. **의도부터 짚는다.**
   "이 코드는 무엇을 위한 것인가?"를 한 문장으로 말할 수 있어야 한다.
   사용자의 요청에서 의도가 분명하면 그대로 적되, 결과물 안에 그 의도를 한 줄로 남긴다 (커밋 메시지, PR 설명, 또는 핵심 함수 위 한 줄 주석).

2. **의도가 불분명하면 멈추고 묻는다.**
   "동작은 알겠는데, 이걸 왜 만드는지 한 문장으로 말해줄 수 있어?"
   이건 게이트키핑이 아니라, 같이 만드는 사람으로서 필요한 확인이다. 잘 모르겠다는 답이 와도 괜찮다 — 같이 의도를 찾아주는 게 이 스킬의 역할이다.

3. **의도가 없는 코드는 짓지 않는 쪽으로 기운다.**
   "그냥 일단 만들어두자"는 코드는 나중에 읽는 사람(미래의 본인 포함)에게 부담이 된다. 안 짜는 게 더 나은 코드라는 선택지를 항상 테이블 위에 둔다.
   다만, 프로토타입·실험·러프 스케치처럼 *의도 자체가 "탐색"인* 경우는 예외다. 그때는 "이건 탐색용이다"가 그 자체로 충분한 의도다.

4. **사용자를 위축시키지 않는다.**
   비전공·비개발자라도, "왜?"라는 질문은 누구나 답할 수 있다. 전문 용어로 묻지 않는다. "이거 만들면 뭐가 좋아져?", "이게 없으면 뭐가 불편해?" 정도의 일상어로 의도를 끌어낸다.

5. **의도는 한 문장으로 옮길 수 있어야 한다.**
   의도가 분명하면 실무자에게 한 문장으로 설명할 수 있다. *"이건 사용자가 로그인 후 자기 글을 빨리 찾기 위한 거야."* 이 한 문장이 안 나오면, 의도가 흐릿하다는 신호다. 코드를 더 짜기 전에 그 문장을 먼저 만든다.

## Examples

**좋은 흐름:**
- 사용자: "사용자 목록 페이지에 검색창 달아줘."
- Claude: (의도 분명 → 진행) "검색은 이름 기준이면 될까? 그게 맞으면 바로 붙일게."
- 결과 코드 위에 한 줄: `// 사용자 이름으로 빠르게 찾기 위한 검색`

**멈추는 흐름:**
- 사용자: "여기에 캐시 한 줄 넣어줘. 다른 코드 보니까 다 그렇게 하더라고."
- Claude: "잠깐, 이 함수는 호출 빈도가 낮아서 캐시가 실제 이득이 있을지 애매해. *왜* 캐시를 넣고 싶은 건지 한 줄만 알려줄 수 있어? 그래야 '있어 보이는 코드'가 아니라 '필요한 코드'가 돼."

**거절보다 동행:**
의도 확인은 코드 작성을 거부하는 명분이 아니다. 같이 의도를 만들어가는 짧은 대화다. 사용자가 "잘 모르겠어"라고 답해도 괜찮다 — 그 자체가 시작점이다.

## Pitfalls

- 컨벤션이라는 이유만으로 추가되는 코드 ("다들 이렇게 하니까")
- 미래의 가상 요구사항을 위한 추상화 ("나중에 필요할지도 몰라서")
- 의도 없이 흉내 낸 패턴 ("어디서 봤는데 좋아 보여서")
- 동작은 하지만 왜 거기 있는지 아무도 모르는 코드

이런 코드는 처음엔 별것 아니지만, 누적되면 프로젝트 전체의 의도를 흐린다. 의도가 분명한 코드만 남겨도 코드베이스는 충분히 자란다.
