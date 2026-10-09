#!/usr/bin/env bash
# 用本机 Chrome 渲染，跳过 Remotion 从海外下载 Headless Shell（国内易失败）。
# 用法：bash render.sh [DataVideo|AnchorVideo]，默认 DataVideo。
set -euo pipefail

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
COMP="${1:-DataVideo}"

if [ ! -f "$CHROME" ]; then
  echo "未找到本机 Chrome：$CHROME" >&2
  echo "可改为 npx remotion browser ensure 自动下载（需能访问海外源）。" >&2
  exit 1
fi

case "$COMP" in
  DataVideo)
    OUT="out/data-video.mp4"
    ;;
  AnchorVideo)
    OUT="out/anchor-video.mp4"
    for f in voiceover.wav bgm.wav; do
      if [ ! -f "public/$f" ]; then
        echo "缺少 public/$f —— 渲染 AnchorVideo 前请先按 README 生成配音/BGM。" >&2
        exit 1
      fi
    done
    ;;
  *)
    echo "未知合成：$COMP（可选 DataVideo / AnchorVideo）" >&2
    exit 1
    ;;
esac

npx remotion render "$COMP" "$OUT" --browser-executable="$CHROME"
