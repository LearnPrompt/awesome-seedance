#!/bin/bash
# 每周归类的外壳，由本机 LaunchAgent 调用（plist 不进仓库）。
# 在专用 clone 里跑：先丢掉上一轮的本地改动、对齐 origin/main，再跑 scripts/weekly-taxonomy.mjs。
# 用法：bash scripts/run-weekly-taxonomy.sh [--push] [--limit N]
set -euo pipefail
cd "$(dirname "$0")/.."
LOG_DIR="$HOME/.awesome-seedance-weekly"
mkdir -p "$LOG_DIR"
LOG="$LOG_DIR/weekly.log"
{
  echo "[$(date '+%F %T')] weekly taxonomy 开始：$*"
  git reset -q --hard
  git clean -fdq -- data docs agents README.md README_zh.md README_ja.md assets
  git fetch -q origin
  git checkout -q --detach origin/main
  set +e
  node scripts/weekly-taxonomy.mjs "$@"
  CODE=$?
  set -e
  echo "[$(date '+%F %T')] weekly taxonomy 结束：exit $CODE（0 全过，2 有闸门未过）"
} >> "$LOG" 2>&1
