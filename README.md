<div align="center">

# some-engineer-mind

**비전공 바이브 코더를 위한 11개의 사고방식 스킬.**

[![npm](https://img.shields.io/npm/v/some-engineer-mind?color=black&label=npm)](https://www.npmjs.com/package/some-engineer-mind)
[![license](https://img.shields.io/badge/license-MIT-black)](./LICENSE)
[![Claude Code](https://img.shields.io/badge/Claude%20Code-skills-FF6B35)](https://code.claude.com/docs/en/skills)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-blue)](./CONTRIBUTING.md)

<img src="./demo.gif" alt="some-engineer-mind demo" width="720" />

```bash
npx some-engineer-mind
```

</div>

## 왜 만들었나요

어느 날부터 *돌아가는 코드*를 만드는 일과 *남길 만한 코드*를 만드는 일이 다르다는 걸 매일 체감했어요. AI는 1만 줄도 하루에 짜주지만, 무거워진 코드와 사라진 *왜*는 결국 누군가가 다시 짊어집니다.

시니어가 옆에 있을 때 자연스럽게 끼어드는 한 마디들이 있어요 — *"잠깐, 그거 왜?"*, *"이미 있는 거 아니야?"*, *"되돌아올 길은?"*. 그 짧은 멈춤들이 코드베이스의 수명을 결정합니다.

`some-engineer-mind`는 그 11개의 멈춤을 Claude Code 안에 심어둔 컬렉션이에요. 평소처럼 *"맞나 모르겠는데 일단 짜볼게"* 같이 말하면, 그 자리에서 알맞은 마인드셋이 자동으로 끼어들어 흐름을 잡아줍니다.

> **설치 안 해도 괜찮아요.** 아래 11개 항목을 7분 정도 훑고 가셔도, 다음에 코드 짤 때 한 가지는 다르게 보일 거예요.

---

## 11개의 마인드셋

각 스킬은 *언제 발화되는지* + *어떤 철학을 담았는지*가 모두 정해져 있어요. 이름을 클릭하면 자세한 문서로 이동합니다.

<details open>
<summary><b>🧠 시작 전 — 마인드셋부터 잡기</b> (3개)</summary>

- **[intent-over-behavior](./intent-over-behavior/SKILL.md)** — 돌아가는 코드보다 *왜* 만드는지가 분명한 코드.  
  *동작은 코드가 말해주지만, 의도는 적어두지 않으면 사라져요.*

- **[ask-before-guess](./ask-before-guess/SKILL.md)** — 추측 위에 코드 쌓지 않기. 모르면 멈추고 묻기.  
  *모름은 죄가 아니에요. 모름 위에 쌓는 추측이 문제입니다.*

- **[stand-on-shoulders](./stand-on-shoulders/SKILL.md)** — 앞선 개발자들이 닦아둔 길에서 시작.  
  *같은 문제를 매번 백지에서 풀지 않아요.*

</details>

<details>
<summary><b>🛠 짜는 동안 — 가볍게, 신중하게</b> (4개)</summary>

- **[keep-it-small](./keep-it-small/SKILL.md)** — 1000줄로 할 일을 100줄로.  
  *AI가 1만 줄도 하루에 짜주지만, 무거운 건 결국 사람이 짊어집니다.*

- **[build-for-today](./build-for-today/SKILL.md)** — 오늘 필요한 것만 짓기 (YAGNI).  
  *미래의 가상 요구를 위해 미리 깔아둔 코드의 대부분은 안 쓰여요.*

- **[reuse-not-rewrite](./reuse-not-rewrite/SKILL.md)** — 새로 짜기 전에 이미 있는 걸 살펴보기.  
  *살아남은 코드엔 이유가 있어요. 모르는 코드는 함부로 치우지 않습니다.*

- **[see-it-first](./see-it-first/SKILL.md)** — 버그는 *고치기* 전에 *재현*.  
  *못 본 버그는 고친 게 아니에요.*

</details>

<details>
<summary><b>📦 마무리 — 잘 남기기</b> (4개)</summary>

- **[plan-your-exit](./plan-your-exit/SKILL.md)** — 실패를 염두에 두고, 되돌릴 길부터.  
  *잘못될 수 있다는 전제로 — dry-run, 백업, 작은 보폭으로 들어갑니다.*

- **[leave-the-why](./leave-the-why/SKILL.md)** — 코드 옆에 *왜*를 한 줄.  
  *무엇은 코드가 말해주지만, 왜는 그 자리에 없으면 영영 잃습니다.*

- **[tidy-as-you-go](./tidy-as-you-go/SKILL.md)** — 떠나기 전에 한 단계 더 깨끗하게.  
  *정돈은 큰 행사가 아니라 매번 곁들이는 작은 동작이에요.*

- **[speak-their-language](./speak-their-language/SKILL.md)** — 감각으로 들어온 말을 감각으로 돌려주기.  
  *코드 바깥과 잘 통하는 것이, 본업의 절반입니다.*

</details>

---

## 어떻게 쓰나요

1. 설치 — `npx some-engineer-mind`
2. Claude Code 재시작
3. 평소처럼 말하면 됩니다 — 알맞은 마인드셋이 알아서 끼어들어요.

| 이렇게 말하면… | 이런 스킬이 발화돼요 |
|---|---|
| *"맞나 모르겠는데…"* / *"I'm not sure"* | [`ask-before-guess`](./ask-before-guess/SKILL.md) |
| *"혹시 모르니까 분리해줘"* / *"future-proof"* | [`build-for-today`](./build-for-today/SKILL.md) |
| *"이거 다시 짜자"* / *"rewrite this"* | [`reuse-not-rewrite`](./reuse-not-rewrite/SKILL.md) |
| *"PM이 메인 깨졌대"* / *"it's broken"* | [`see-it-first`](./see-it-first/SKILL.md) |
| *"배포할게"* / *"DROP TABLE"* | [`plan-your-exit`](./plan-your-exit/SKILL.md) |
| *"커밋할게"* / *"commit message"* | [`leave-the-why`](./leave-the-why/SKILL.md) |

> 한국어 / 영어 트리거를 모두 인식하도록 짜여 있어요. 자세한 트리거 키워드는 각 `SKILL.md`의 frontmatter를 보세요.

---

## 설치 옵션

```bash
# 전역 (~/.claude/skills/) — 기본
npx some-engineer-mind

# 프로젝트별 — 현재 폴더의 .claude/skills/ 에만
npx some-engineer-mind --project

# 미리 보기 / 목록 / 덮어쓰기 / 도움말
npx some-engineer-mind --dry-run
npx some-engineer-mind --list
npx some-engineer-mind --force
npx some-engineer-mind --help
```

설치 후 Claude Code를 재시작하면 자동으로 인식돼요.

---

## 자주 묻는 것

**Q. Claude Code 말고 다른 LLM에서도 되나요?**  
각 `SKILL.md`의 본문은 Cursor `.cursorrules`, Windsurf, ChatGPT system prompt에 그대로 복붙해도 동작해요. 컬렉션 포맷만 Claude Code 스펙입니다.

**Q. 11개를 다 깔아야 하나요?**  
아니에요. 마음에 드는 폴더만 직접 `~/.claude/skills/` 로 복사해도 동일하게 작동합니다.

**Q. 비전공자가 읽고 이해할 수 있나요?**  
1순위 독자가 비전공자예요. *"이건 좀 기술적인 거라서"* 같은 표현을 막는 톤으로 쓰여 있습니다.

---

## 기여 · 라이선스

새 스킬·번역·표현 개선 PR 환영해요. [CONTRIBUTING.md](./CONTRIBUTING.md) 의 짧은 템플릿을 따라 PR 올려주시면 빠르게 검토해요.

[MIT](./LICENSE) — 자유롭게 쓰고 고치고 재배포하세요. 출처 표기는 따로 안 해도 됩니다.

