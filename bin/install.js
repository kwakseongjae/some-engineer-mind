#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const os = require('os');

const SKILLS = [
  { name: 'intent-over-behavior',  line: '돌아가는 코드보다 *왜* 만드는지가 분명한 코드.' },
  { name: 'ask-before-guess',      line: '추측 위에 코드 쌓지 않기. 모르면 멈추고 묻기.' },
  { name: 'stand-on-shoulders',    line: '앞선 개발자들이 닦아둔 길 위에서 시작.' },
  { name: 'keep-it-small',         line: '1000줄로 할 일을 100줄로.' },
  { name: 'build-for-today',       line: '오늘 필요한 것만 짓기 (YAGNI).' },
  { name: 'reuse-not-rewrite',     line: '새로 짜기 전에 이미 있는 걸 살펴보기.' },
  { name: 'see-it-first',          line: '버그는 *고치기* 전에 *재현*.' },
  { name: 'plan-your-exit',        line: '실패를 염두에 두고, 되돌릴 길부터 그리기.' },
  { name: 'leave-the-why',         line: '코드 옆에 *왜*를 한 줄 남기기.' },
  { name: 'tidy-as-you-go',        line: '떠나기 전에 한 단계 더 깨끗하게.' },
  { name: 'speak-their-language',  line: '감각으로 들어온 말을 감각으로 돌려주기.' },
];

const args = process.argv.slice(2);
const flags = new Set(args.filter(a => a.startsWith('--') || a === '-h' || a === '-l'));
const isProject = flags.has('--project');
const force = flags.has('--force');
const dryRun = flags.has('--dry-run');
const listOnly = flags.has('--list') || flags.has('-l');
const showHelp = flags.has('--help') || flags.has('-h');

function printBanner() {
  console.log('');
  console.log('  \x1b[1msome-engineer-mind\x1b[0m');
  console.log('  비전공 바이브 코더를 위한 11개의 Claude 마인드셋');
  console.log('');
}

if (showHelp) {
  printBanner();
  console.log(`사용법:
  npx some-engineer-mind                전역(~/.claude/skills/)에 11개 스킬 설치
  npx some-engineer-mind --project      현재 프로젝트의 ./.claude/skills/ 에만 설치
  npx some-engineer-mind --force        같은 이름의 기존 스킬 폴더 덮어쓰기
  npx some-engineer-mind --dry-run      실제로 깔지 않고 어떤 게 깔릴지 미리 보기
  npx some-engineer-mind --list         11개 스킬 목록과 한 줄 설명 보기
  npx some-engineer-mind --help         이 안내

설치 후 Claude Code를 재시작하면 자동으로 인식됩니다.`);
  console.log('');
  process.exit(0);
}

if (listOnly) {
  printBanner();
  console.log('  11개 마인드셋 스킬:\n');
  SKILLS.forEach((s, i) => {
    const idx = String(i + 1).padStart(2, ' ');
    console.log(`  ${idx}. \x1b[36m${s.name}\x1b[0m`);
    console.log(`      ${s.line}`);
  });
  console.log('\n  설치: \x1b[1mnpx some-engineer-mind\x1b[0m');
  console.log('');
  process.exit(0);
}

const targetDir = isProject
  ? path.join(process.cwd(), '.claude', 'skills')
  : path.join(os.homedir(), '.claude', 'skills');

const packageRoot = path.resolve(__dirname, '..');

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else if (entry.isFile()) fs.copyFileSync(s, d);
  }
}

printBanner();
console.log(`  설치 위치: ${targetDir} ${isProject ? '(프로젝트)' : '(전역)'}`);
if (dryRun) console.log('  모드: dry-run (실제로 깔지 않음)');
console.log('');

if (!dryRun) fs.mkdirSync(targetDir, { recursive: true });

let installed = 0;
let skipped = 0;
let missing = 0;

for (const { name } of SKILLS) {
  const src = path.join(packageRoot, name);
  const dest = path.join(targetDir, name);

  if (!fs.existsSync(src) || !fs.existsSync(path.join(src, 'SKILL.md'))) {
    console.log(`  ✗ ${name} — 원본 누락 (패키지 손상 가능)`);
    missing++;
    continue;
  }

  if (fs.existsSync(dest) && !force) {
    console.log(`  - ${name} — 이미 있음 (--force 로 덮어쓰기)`);
    skipped++;
    continue;
  }

  if (dryRun) {
    console.log(`  → ${name} (설치 예정)`);
    installed++;
    continue;
  }

  if (fs.existsSync(dest)) fs.rmSync(dest, { recursive: true, force: true });
  copyDir(src, dest);
  console.log(`  ✓ ${name}`);
  installed++;
}

console.log('');
console.log(`  완료. 설치 ${installed}개, 건너뜀 ${skipped}개${missing ? `, 누락 ${missing}개` : ''}.`);

if (!dryRun && installed > 0) {
  console.log('');
  console.log('  \x1b[1m다음 단계\x1b[0m');
  console.log('  1) Claude Code를 재시작하면 11개 스킬이 자동 인식됩니다.');
  console.log('  2) 평소처럼 말하기만 하면 알맞은 마인드셋이 알아서 트리거됩니다 — 예:');
  console.log('     · "맞나 모르겠는데…"     → ask-before-guess');
  console.log('     · "혹시 모르니까 분리해줘" → build-for-today');
  console.log('     · "이거 다시 짜자"        → reuse-not-rewrite');
  console.log('     · "커밋할게"             → leave-the-why');
  console.log('  3) 도움이 되었다면 ★ 한 번이 큰 힘이 됩니다:');
  console.log('     https://github.com/kwakseongjae/some-engineer-mind');
  console.log('');
}
