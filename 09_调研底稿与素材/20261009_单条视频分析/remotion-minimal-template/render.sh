#!/usr/bin/env bash
# 用本机 Chrome 渲染，跳过 Remotion 从海外下载 Headless Shell（国内易失败）。
set -euo pipefail

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

if [ ! -f "$CHROME" ]; then
  echo "未找到本机 Chrome：$CHROME" >&2
  echo "可改为 npx remotion browser ensure 自动下载（需能访问海外源）。" >&2
  exit 1
fi

npx remotion render DataVideo out/data-video.mp4 --browser-executable="$CHROME"
