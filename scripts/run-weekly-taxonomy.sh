#!/bin/bash
# 每周归类的外壳，由本机 LaunchAgent 调用（plist 不进仓库）。
#
# 2026-10-11 修复：第一版把「对齐 origin/main」拆在 plist 和本脚本两处，plist 先 checkout 再由
# 本脚本 reset，上一轮只出报告模式留下的工作区改动让 checkout 直接中止，脚本没启动，也没有
# 失败报告。现在准备阶段全部收进本脚本：先 reset + clean，再 fetch + checkout；准备阶段
# 任何一步失败都写一份失败报告并弹通知，不再静默。
#
# 用法：bash scripts/run-weekly-taxonomy.sh [--push] [--limit N]
#   WEEKLY_REPO_DIR   指定要操作的专用 clone（默认为本脚本所在仓库）。验证修复时可以从别的
#                     checkout 执行本脚本而作用于专用 clone。
#   plist 推荐写法：git -C <clone> fetch -q origin && git -C <clone> show origin/main:scripts/run-weekly-taxonomy.sh | WEEKLY_REPO_DIR=<clone> bash -s -- --push
#   这样每次跑的都是 origin/main 上最新的脚本，和工作区状态无关。
set -uo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]:-$0}")" 2>/dev/null && pwd || pwd)"
REPO_DIR="${WEEKLY_REPO_DIR:-$(cd "$SCRIPT_DIR/.." && pwd)}"
STATE_DIR="$HOME/.awesome-seedance-weekly"
REPORT_DIR="$HOME/Downloads/awesome-seedance-weekly"
mkdir -p "$STATE_DIR" "$REPORT_DIR"
LOG="$STATE_DIR/weekly.log"
DATE="$(TZ=Asia/Shanghai date '+%F')"
log() { echo "[$(date '+%F %T')] $*" | tee -a "$LOG"; }

fail_report() {
  # 准备阶段失败：runner 没跑起来，这里自己写报告，保证「每次执行完都有一份报告」。
  local step="$1" detail="$2" file="$REPORT_DIR/$DATE.md"
  {
    echo "# awesome-seedance 每周归类报告 · $DATE"
    echo
    echo "**结论：准备阶段失败，本次没有标注、没有推送**"
    echo
    echo "失败步骤：$step"
    echo
    echo '```'
    echo "$detail" | tail -20
    echo '```'
    echo
    echo "专用 clone：$REPO_DIR。日志：$LOG。修好后可以手动重跑：bash scripts/run-weekly-taxonomy.sh"
  } > "$file"
  log "ABORT：$step 失败，已写失败报告 $file"
  osascript -e "display notification \"准备阶段失败：$step，见报告\" with title \"awesome-seedance 每周归类\"" >/dev/null 2>&1 || true
  exit 1
}

prep() {
  # 返回非 0 时把输出交给 fail_report
  local out
  out="$(cd "$REPO_DIR" 2>&1)" || { echo "$out"; return 1; }
  cd "$REPO_DIR"
  out="$(git rev-parse --is-inside-work-tree 2>&1)" || { echo "$out"; return 1; }
  # 上一轮（只出报告模式，或闸门没过）留下的改动一律丢弃；.env* 这类本地文件不删
  out="$(git reset -q --hard 2>&1)" || { echo "$out"; return 1; }
  out="$(git clean -fdq -e '.env*' 2>&1)" || { echo "$out"; return 1; }
  out="$(git fetch -q origin 2>&1)" || { echo "$out"; return 1; }
  out="$(git checkout -q --detach origin/main 2>&1)" || { echo "$out"; return 1; }
  return 0
}

log "weekly taxonomy 开始：args=[$*] repo=$REPO_DIR"
PREP_OUT="$(prep 2>&1)"
PREP_CODE=$?
if [ "$PREP_CODE" -ne 0 ]; then
  fail_report "对齐 origin/main（reset / clean / fetch / checkout）" "$PREP_OUT"
fi
cd "$REPO_DIR"
log "已对齐 origin/main：$(git log --oneline -1)，工作区 $(git status --porcelain | wc -l | tr -d ' ') 处改动"
node scripts/weekly-taxonomy.mjs "$@" 2>&1 | tee -a "$LOG"
CODE=${PIPESTATUS[0]}
log "weekly taxonomy 结束：exit $CODE（0 全过，2 有闸门未过，其他为运行错误）"
if [ "$CODE" -ne 0 ] && [ "$CODE" -ne 2 ] && [ ! -f "$REPORT_DIR/$DATE.md" ]; then
  fail_report "node scripts/weekly-taxonomy.mjs（exit $CODE）" "$(tail -30 "$LOG")"
fi
exit "$CODE"
