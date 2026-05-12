---
name: build-for-today
description: Blocks speculative code, options, abstractions, and flags built for hypothetical future needs (YAGNI). When a request would add scaffolding for users, features, or load that don't exist yet, this skill redirects to the concrete present case. 오지 않은 미래 요구를 위해 미리 코드·옵션·추상화·플래그를 깔아두지 않게 막는 엔지니어링 철학 스킬.
when_to_use: Use when the user signals future-proofing intent — phrases like "future-proof", "extensible", "scalable", "in case we need it", "make it generic", "혹시 모르니까", "나중에 필요할지도", "확장성 있게", "이참에 일반화" — or whenever options/flags/arguments are being added that are only called with a single value today, when optimization starts without a measurement, or when a pattern is being abstracted before its third use. Strongest against AI "완성도 있게 만들어줘" reflexes that pile on hypothetical options.
allowed-tools: Read Edit
---

> **한 줄.** 오늘 필요한 것만 짓는다. 내일 필요할지 모르는 건, 내일 만든다.

## Why this mindset

YAGNI — You Aren't Gonna Need It.
미래의 가상 요구를 위해 미리 깔아둔 코드의 대부분은 결국 안 쓰입니다. 안 쓰일 뿐 아니라, 진짜 요구가 등장했을 때 *틀린 방향으로* 깔아둔 무게를 치우는 일이 새로 짓는 것보다 더 비쌉니다.
진짜 요구가 등장한 그 자리에서 추가하는 편이, 안 올지도 모르는 요구를 위해 미리 짊어지는 것보다 거의 항상 가볍습니다.

## Instructions

"혹시 모르니까"가 들리면 한 번 멈춘다. 가벼움을 지키는 건 *지금 안 짓는* 행동에서 시작된다.

1. **"혹시 모르니까"는 멈춤 신호.**
   요청·설계·코드 안에 *혹시 / 나중에 / 만약 / 가상*이 따라붙는 부분은 한 번 더 묻는다 — *"지금 이게 *왜* 필요한가? 누가, 어떤 입력으로, 어느 화면에서?"* 구체적인 *지금의 사용*이 안 나오면, 그건 미래의 환영이다. 짓지 않는다.

2. **일반화는 *세 번째 사용 사례가 나타날 때* (Rule of Three).**
   같은 패턴이 1~2번 등장하면 그대로 두고, 3번째에 묶는다. 1번째에서 일반화하면 미래의 모양을 *추측*하게 되고, 그 추측은 거의 항상 빗나간다.

3. **옵션·플래그·설정은 *지금 토글이 필요한 것만*.**
   함수에 인자를 추가하기 전에 — *호출처가 실제로 다른 값을 보내고 있는가?* 한 가지 값으로만 호출되는데 인자가 있는 것은, *읽는 사람을 헷갈리게 하면서 아무 일도 안 한다.* 다른 값이 진짜 필요해진 그 순간에 추가하면 한 줄이다.

4. **"확장성 있게"의 함정.**
   확장은 *방향을 알 때만* 가능하다. 모르는 방향으로 확장 가능하게 짠 코드는, *틀린 방향으로* 확장 가능하게 짠 코드다. 진짜 확장이 일어날 때 그 방향으로 짜는 게 더 빠르다.

5. **빠르게는 *실제로 느린 게 측정된 뒤*에.**
   *"이거 느릴 것 같으니까 미리 최적화"*는 Knuth가 "모든 악의 뿌리"라고 부른 자리다. 우선 가장 단순하게 짠다. 측정해서 느린 곳이 *실제로* 보이면, 그때 그 자리만 빠르게 한다. (premature optimization 경계)

## Examples

**"혹시 모르니까" 멈춤:**
- 사용자: "혹시 다국어 지원할지도 모르니까 텍스트 다 분리해서 짜줘."
- Claude: "지금 다국어 계획이 잡혀 있어? 잡혀 있으면 그 방향에 맞춰 짤게. 아직 *혹시* 단계면 한국어만 박는 게 가벼워. 진짜 다국어가 결정되면 그때 *어떤 방식으로* (i18n 라이브러리, 백엔드 분리 등) 정해서 옮기면 돼 — 그때가 오히려 더 빠르고 정확해."

**옵션이 한 가지 값으로만 호출 중:**
- Claude: "이 `fetchUsers(role: 'admin' | 'user' = 'admin')` 함수가 지금 *세 군데*에서 호출되는데 다 `'admin'`이야. `role` 인자 빼고, *나중에* 일반 사용자 조회가 진짜 필요해지면 그 자리에 인자를 추가하자. 지금은 그냥 `fetchAdmins()`로 두는 게 읽기 좋아."

**Rule of Three:**
- 사용자: "두 컴포넌트에 비슷한 로직이 있는데 헬퍼로 빼자."
- Claude: "두 번이면 아직 그대로 두는 게 가벼워. 세 번째 컴포넌트가 등장할 때 묶자. 지금 묶으면 그 헬퍼가 *두 케이스에만 맞는 모양*이 될 가능성이 높고, 세 번째가 등장했을 때 거의 항상 모양이 안 맞아서 다시 손대게 돼."

## Pitfalls

- "혹시 모르니까" 따라붙는 옵션·플래그·설정·인자
- "확장성 있게"를 *방향 모른 채* 박아두기
- *측정 없이* 시작하는 최적화
- 1~2번 등장한 패턴을 미리 일반화 → 세 번째가 와도 안 맞음
- "완성도 있어 보이게" 가상 옵션·기본값·에러 핸들링 추가
- 반대편 함정: YAGNI를 핑계로 *지금 분명히 필요한* 것도 미루기

미래는 우리가 짓지 않아도 온다. 우리가 할 일은 *오늘의 필요*에 정확히 답하는 것뿐이다. 그게 미래에도 가장 좋은 출발점을 남긴다.
