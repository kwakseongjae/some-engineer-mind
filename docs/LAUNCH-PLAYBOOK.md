# 48시간 런칭 플레이북

목표: 출시 48시간 안에 50~200 stars로 GitHub Trending 진입.
전략: **한국 시드 → 영어권 확산** (clauw-code 경로 모방, leak news cycle 제외).

## D-day 전 체크리스트

- [ ] GitHub repo public, description + topics 설정 (`claude-code`, `skills`, `mindset`, `korean`)
- [ ] social preview 이미지 업로드 (Settings → Social preview, 1200×630)
- [ ] `npm publish` — `npx some-engineer-mind` 작동 확인
- [ ] `assets/demo.gif` README에 보임 (hyperframes로 생성)
- [ ] star-history.com URL 발급 후 README 하단에 임베드 (런칭 직후엔 0이라 일단 보류)
- [ ] 트위터 스레드 11트윗 한/영 2벌 초안
- [ ] GeekNews `Show GN:` 본문 한국어 2문단 초안
- [ ] OKKY 사는얘기 게시판 비전공 회고 글 초안

## Day 1 (Mon, KST)

| 시각 | 채널 | 액션 |
|---|---|---|
| 09:00 | Disquiet | Makerlog + 제품 등록. 비전공 메이커 스토리 강조 |
| 09:30 | claudecode.co.kr Discord | `#쇼케이스` 채널에 짧은 데모 + GIF |
| 10:00 | Kakao 오픈챗 | 핀 메시지 요청 (가능하면) |
| 14:00 | **GeekNews** | `Show GN: 비전공자가 만든 Claude Code 마인드셋 스킬 11종` |
| 16:00 | velog | 시리즈 1편 — "비전공자가 11개 스킬을 만든 이유" |
| 20:00 | Threads | 본인 계정에 한국어 스레드 11편 (스킬당 1편, before/after 스크린샷). 핵심 한국 dev 인플루언서 멘션 자제 — 자연 노출 우선 |

## Day 2 (Tue)

| 시각 (KST/ET) | 채널 | 액션 |
|---|---|---|
| 10:00 KST | X | Sigrid Jin(@realsigridjin)에게 KR/EN 바이링구얼 DM |
| 22:00 KST / 08:00 ET | X | 영어 스레드 11트윗. 첫 트윗에 `@AnthropicAI` `@simonw` `@alexalbert__` 멘션. 11번째 트윗에 `npx` 명령 + 레포 링크 |
| 23:00 KST | Threads | 영어권 RT/응답 시작되면 한국어 계정에서 인용 — KR-EN 피드백 루프 |

## Day 3 (Wed)

| 시각 (ET) | 채널 | 액션 |
|---|---|---|
| 08:00 | **Show HN** | `Show HN: 11 mindset skills for Claude Code, written for non-CS-major engineers` |
| 09:00 | dev.to | 영문 크로스포스트 (스레드 본문 살짝 다듬어서) |
| 11:00 KST | OKKY | 사는얘기 게시판 — 비전공 회고 + 도구 공개 |

## Day 4 (Thu)

- F-Lab 블로그 게스트 포스트 제안 DM
- 브라이언 Substack(briandwjang) 인터뷰 제안
- GitHub Trending 진입 시 star-history 그래프 README 하단에 추가
- 첫 24h fastest stars로 X 자가 인용 (social proof 루프)

## 핵심 메시지 (모든 채널 일관)

> 비전공 개발자가 시니어처럼 코딩하게 만드는 11가지 Claude 마인드셋.
> 7분 안에 다 읽고 가실 수 있고, `npx` 한 줄로 설치돼요.

## 영어 메시지

> 11 mindset skills that make Claude Code think like a senior engineer — written for self-taught devs. Read in 7 minutes. `npx some-engineer-mind` to install.

## Twitter/X 스레드 템플릿 (영문, 11트윗)

1. (Hook) "I gave Claude Code 11 mindset skills. The output changed more than any prompt tweak I've tried. Here's what each one does ↓"
2. **ask-before-guess** — Claude used to stack guesses on unknowns. Now it says "let me check" instead. [before/after image]
3. **intent-over-behavior** — Forces the WHY before the code. [image]
4. ... (8개 스킬 추가, 각 1트윗)
11. (Close) "All 11 are MIT, installable in one command. Built for self-taught engineers — but every dev I've shown it to wanted it. github.com/.../some-engineer-mind `npx some-engineer-mind`"

## GeekNews 본문 템플릿

```
제목: Show GN: 비전공자가 만든 Claude Code 마인드셋 스킬 11종

본문:
비전공 개발자입니다. Claude Code로 일하면서 *돌아가는 코드*와
*남길 만한 코드*가 다른 일이라는 걸 매일 체감했습니다.
시니어가 옆에 있을 때 자연스럽게 끼어드는 "잠깐, 그거 왜?",
"이미 있는 거 아냐?", "되돌아올 길은?" — 그 11가지 멈춤을
Claude Code에 심어둔 컬렉션입니다.

`npx some-engineer-mind` 한 줄 설치.
설치 안 해도 README 7분 동안 읽고 가시면 한 가지는 다르게 보일 거예요.

피드백·PR 환영합니다.
```

## 측정 지표

- 48시간 내 누적 stars (목표 50-200)
- GitHub Trending(언어=`Markdown` 또는 daily) 진입 여부
- npm weekly downloads (런칭 후 1주)
- Twitter/X 스레드 첫 트윗 노출/리트윗 수
- GeekNews upvote 수 (10+ 권장)
- Show HN 첫 페이지 진입 시간

## 안 하는 것

- 인플루언서에게 RT 강요 (3문장 룰 — 부탁 1회로 끝)
- 가짜 계정으로 스타 부풀리기 (GitHub trust-score 손상)
- "leak news cycle" 모방 (재현 불가, 윤리 문제)
- 한 채널에 본인 글 도배
