# Remotion 最小模板 · 代码确定性渲染视频

> 文档类型：Template（可复用模板）｜ 读者：AI+人类
> 用 React 代码确定性渲染视频，含两个成片：数据可视化（无声）与虚拟主播（配音 + BGM + 数字人）。
> 配套文稿见上级目录 `768646740207072019_remotion代码生成视频_文稿提炼.md`。

## 两个成片（按需选）

| 合成 | 内容 | 渲染命令 |
|---|---|---|
| **DataVideo** | 纯数据可视化，无声、无数字人，开箱即渲染 | `bash render.sh DataVideo` |
| **AnchorVideo** | 虚拟主播：TTS 配音 + BGM（自动闪避）+ 程序化 SVG 数字人（口型/眨眼） | `bash render.sh AnchorVideo`（需先生成音频） |

## 三步出片

```bash
# 1. 装依赖（国内必须走 npmmirror 镜像）
npm install --registry=https://registry.npmmirror.com

# 2. 渲染（默认 DataVideo，自动用本机 Chrome）
bash render.sh

# 3. 成片在 out/data-video.mp4
```

## 声音选项（AnchorVideo，渲染前生成音频）

Remotion 的 `<Audio>` 支持多轨、按帧音量、裁剪、变调。音频必须在渲染前生成、放 `public/`：

| 文件 | 是什么 | 怎么生成 |
|---|---|---|
| `public/voiceover.wav` | 配音 | `text_to_audio_plus`（体系内，免费）/ Edge TTS / ElevenLabs，按文案生成 |
| `public/bgm.wav` | 背景音乐 | `text_to_audio_plus` 生成纯音乐，或免版税音乐 |

- BGM 由 `getFrameRMS()` 按配音实时能量做**自动闪避**（说话压低、停顿回升）；配音做了淡入/淡出；
- 生成方法见 video-studio《音频选择与生成SOP》。

## 数字人选项（三路径，本模板内置免费版）

| 路径 | 效果 | 成本 | 本模板 |
|---|---|---|---|
| **B. 程序化 SVG 数字人**（`src/Avatar.tsx`） | 卡通虚拟主播，音频 RMS 驱动口型 + 眨眼 + 头部点动 | 免费、本地、可批量 | ✅ 内置 |
| A. 外部照片级数字人（OmniHuman / HeyGen / D-ID）→ `<Video>` 合成 | 写实真人 | 外部工具，多为付费 | 需另生成视频 |
| C. Ready Player Me + React Three Fiber，音素级口型 | 3D 化身 | 本地但配置复杂 | 见工具选型参考 |

## 文件与改什么

| 文件 | 作用 |
|---|---|
| `src/DataVideo.tsx` | 纯数据可视化成片 |
| `src/AnchorVideo.tsx` | 虚拟主播成片（配音 + BGM 闪避 + 数据面板） |
| `src/Avatar.tsx` | 程序化 SVG 数字人（口型 / 眨眼） |
| `src/audioEnergy.ts` | 每帧 RMS 音量计算（驱动口型与闪避） |
| `src/Root.tsx` | 注册两个合成（时长 / 尺寸 / 帧率） |

| 需求 | 改哪里 |
|---|---|
| 换数据 / 标签 | 各成片顶部 `data` 数组 |
| 换配音文案 / 声音 | 重新生成 `public/voiceover.wav`，按时长改 `durationInFrames` |
| 改数字人长相 / 性别 | `src/Avatar.tsx` 的 SVG |
| 改闪避阈值 / BGM 音量 | `src/AnchorVideo.tsx` 的 `bgmVolume` |
| 改时长 / 尺寸 / 帧率 | `src/Root.tsx` |

## 国内环境两个坑（已在本模板解决）

1. npm 包慢 → `--registry=https://registry.npmmirror.com`；
2. 首次渲染要下海外 Headless Shell → 用本机 Chrome（已写进 `render.sh`）。

## 关键坑（本次踩过，已规避）

- 音频数据在组件内用 `useAudioData()` 加载，**不要**经 `calculateMetadata`→props 传递（TypedArray 会被序列化、丢失 `subarray`）；
- `visualizeAudio` 参数是 `numberOfSamples`（旧名 numberOfBins / numberOfBars）；做口型改用波形 RMS 更明显；
- 合成帧数超过音频时，取音频数据要 clamp 帧范围。

## 适用 / 不适用

- ✅ 数据图表、数字增长、虚拟主播播报、概念介绍、栏目包装、同版式批量；
- ❌ 实拍质感、电影感写实画面（改用 Seedance / 可灵 / 写实数字人）。
