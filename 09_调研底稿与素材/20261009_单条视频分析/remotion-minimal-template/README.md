# Remotion 最小模板 · 数据可视化成片

> 文档类型：Template（可复用模板）｜ 读者：AI+人类
> 用途：不真人出镜，用 React 代码确定性渲染数据可视化 / 信息图视频。配套文稿见上级目录 `7686467402007072019_remotion代码生成视频_文稿提炼.md`。

## 三步出片

```bash
# 1. 装依赖（国内必须走 npmmirror 镜像，官方源慢）
npm install --registry=https://registry.npmmirror.com

# 2. 渲染（自动用本机 Chrome，跳过海外 Headless Shell 下载）
bash render.sh

# 3. 成片在 out/data-video.mp4
```

## 改什么

| 需求 | 改哪里 |
|---|---|
| 换数据 / 标签 | `src/DataVideo.tsx` 顶部的 `data` 数组（`label` + `value`） |
| 改时长 / 尺寸 / 帧率 | `src/Root.tsx` 的 `durationInFrames` / `width` / `height` / `fps` |
| 改配色 | `src/DataVideo.tsx` 的 `COLOR` 与渐变、背景色 |
| 改动画节奏 | `spring({frame: frame - N})` 的起始帧 `N`、`config`（damping/stiffness） |

## 国内环境两个坑（已在本模板解决）

1. **npm 包慢** → 用 `--registry=https://registry.npmmirror.com`；
2. **首次渲染要下 Chrome Headless Shell（源在海外，易失败）** → 不传浏览器让它自动下载，改用本机 Chrome：`--browser-executable="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"`（已写进 `render.sh`）。

## 适用 / 不适用

- ✅ 数据图表动画、数字增长、概念介绍短片、栏目包装、同版式批量更新；
- ❌ 真人出镜、实拍质感、电影感写实画面（改用 Seedance / 可灵 / 数字人）。
