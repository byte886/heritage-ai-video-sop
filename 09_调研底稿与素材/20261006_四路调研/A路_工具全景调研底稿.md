# A 路调研底稿 · 国内外全景工具 + ComfyUI 选型

> 文档类型：Research Draft（调研底稿）｜ 创建：2026-10-06 ｜ 路线：A（四路并行之工具全景）
> 证据四档：✅ 已查证（官方一手原文可回源）｜ 🔶 经搜索补充（≥2 独立来源互证）｜ 🟡 博主/第三方一方说法 ｜ ⚪ 未经核实
> 范围：只补缺口，不重复库内已深调 12 工具（即梦/Seedream/Seedance、可灵、苞米AI、美图设计室、LibTV、剪映/CapCut、Pavo、星璨、周大生 Muse Play、火山方舟）。
> 约束：线下珠宝门店、手机端为主、保真优先（真实产品图做图生图/图生视频）、国内支付。

---

## 0. 基线复核（任务给定基线，本路只做活链复核，不重新推导）

| 基线项 | 复核结果 | 证据 |
|---|---|---|
| Veo 3.1 于 2025-11-17 GA、输出自带音频 | ✅ 成立。Vertex AI release notes 明载 "november 17, 2025: veo 3.1 is generally available"；模型页 `veo-3.1-generate-001` Launch stage: GA, Release date: November 17, 2025 | ✅ https://docs.cloud.google.com/vertex-ai/generative-ai/docs/release-notes ｜ https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/veo/3-1-generate |
| Veo 3.1 Lite 于 2026-04-02 开放 preview | ✅ 成立。blog.google 2026-03-31 官宣；Google Cloud blog 2026-04-04 Vertex AI 上线；DeepMind model card 2026-04-08 发布；api 价格页 2026-10-01 仍列 Lite | ✅ https://blog.google/innovation-and-ai/technology/ai/veo-3-1-lite/ ｜ https://cloud.google.com/blog/products/ai-machine-learning/veo-3-1-lite-and-a-new-veo-upscaling-capability-on-vertex-ai ｜ https://deepmind.google/models/model-cards/veo-3-1-lite/ |
| Imagen 已下线，统一入 Nano Banana 家族 | ✅ 成立。官方模型列表页已无 Imagen，图像生成分支全部归入 Gemini Image / Nano Banana 家族 | ✅ https://ai.google.dev/gemini-api/docs/models?hl=zh-cn ｜ https://deepmind.google/models/gemini-image/ |
| Nano Banana 家族 = Gemini 3.1 Flash Image / Gemini 3 Pro Image / Lite；入口 = Gemini App/AI Studio/Gemini API/Vertex AI | ✅ 成立，且官方命名已精确化（见 §1.2，ISSUE-011 关闭依据） | ✅ 见下 |

---

## 1. 谷歌系

### 1.1 Veo 3.1（视频 + 原生音频）

- **核心能力**：文/图生视频，输出自带同步对白/音效/环境音；720p/1080p 原生，4K 为放大；单次约 8s，支持场景延展（最多 20 段链式拼接 ≈140s 叙事）；多参考图锁人物/物体/风格。
- **价格（API）**【✅ 已查证：Google Cloud 官方定价页 + Gemini API 官方价格页两源一致】：
  - Veo 3.1 Standard：$0.40/秒（720p/1080p）、$0.60/秒（4K）
  - Veo 3.1 Fast：$0.10/秒（720p）、$0.12/秒（1080p）、$0.30/秒（4K）
  - 免费层级：不可用（无免费额度）
  - 来源：https://cloud.google.com/gemini-enterprise-agent-platform/generative-ai/pricing ｜ https://ai.google.dev/gemini-api/docs/pricing?hl=zh-cn
- **入口**：Gemini App、Google AI Studio、Gemini API、Vertex AI、Google Vids（每月 10 次免费生成）、Google Flow。
- **API 门槛**：Google Cloud 账号 + 绑卡（国际信用卡）+ 区域选择；无中国区直连。
- **中文可用性**：❌ 国内不可直连（Google 服务整体被墙）；无人民币支付；界面英文。
- **珠宝适配度**：音画同步与电影感强，适合品牌大片；但**国内门店链路不可用**（网络+支付+手机端均不通），仅作"能力参照/海外品牌案例参考"，不进生产链路。

### 1.2 Nano Banana 家族（生图）—— ISSUE-011 关闭依据

**官方命名（逐条官方原文，2026-10-06 回源）**【✅ 已查证】：

| 官方昵称 | 官方底层模型 ID | 官方正式称呼 | 官方来源 |
|---|---|---|---|
| **Nano Banana Pro** | `gemini-3-pro-image` | Gemini 3 Pro Image | https://ai.google.dev/gemini-api/docs/models?hl=zh-cn ｜ https://deepmind.google/models/gemini-image/ ｜ https://firebase.google.com/docs/ai-logic/generate-images-gemini |
| **Nano Banana 2** | `gemini-3.1-flash-image` | Gemini 3.1 Flash Image | 同上三源一致；Google Cloud 模型页 https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-1-flash-image 标题即 "Gemini 3.1 Flash Image (Nano Banana 2)" |
| **Nano Banana 2 Lite** | `gemini-3.1-flash-lite-image` | Gemini 3.1 Flash Lite Image | https://ai.google.dev/gemini-api/docs/models?hl=zh-cn ｜ https://console.cloud.google.com/agent-platform/publishers/google/model-garden/gemini-3.1-flash-lite-image |

> **ISSUE-011 结论**：库内旧写"Nano Banana Pro（博主亦称 Nano Banana 2）"是**混淆**。官方实际为三兄弟：Pro（=Gemini 3 Pro Image，旗舰，2025-11 发布）、Nano Banana 2（=Gemini 3.1 Flash Image，2026-02-26 发布，Pro 能力+Flash 速度）、Nano Banana 2 Lite（=Gemini 3.1 Flash Lite Image，最轻量）。"Nano Banana 2"是官方正式昵称，不是博主私称；"Nano Banana Pro"也是官方正式昵称。**建议库内统一写法：Nano Banana Pro（Gemini 3 Pro Image）/ Nano Banana 2（Gemini 3.1 Flash Image）/ Nano Banana 2 Lite（Gemini 3.1 Flash Lite Image）**。
> 来源：blog.google 2026-02-26《Nano Banana 2: Combining Pro capabilities with lightning-fast speed》https://blog.google/innovation-and-ai/technology/ai/nano-banana-2/
> **V 路独立复核（2026-10-06）**：三官方昵称在官方模型列表页独立并存，各有官方定位描述；同页标注"Imagen 4（已关闭）"。API 端点 ID（`gemini-3-pro-image` / `gemini-3.1-flash-image` / `gemini-3.1-flash-lite-image`）如上表，与官方模型页一致。ISSUE-011 关闭依据完整。

- **价格**【✅ 已查证：Google Cloud 定价页】：
  - Nano Banana Pro：输入 $1.00/百万 token（图片输入 $0.0006/张），输出 $15.00/百万 token；按张折算 1K/2K 图 ≈$0.134、4K 图 ≈$0.24
  - Nano Banana 2：约 Pro 一半，1K 图 ≈$0.067【🔶 felloai + Google 论坛折算一致】
  - 来源：https://cloud.google.com/gemini-enterprise-agent-platform/generative-ai/pricing?hl=en ｜ https://ai.google.dev/gemini-api/docs/pricing?hl=zh-cn
- **API 门槛**：Gemini API 密钥 + 国际信用卡；Vertex AI 需企业/云账号。
- **中文可用性**：❌ 国内不可直连；无人民币支付。
- **珠宝适配度**：文字渲染与多图合成强（适合海报/KV），但国内门店不可用；且**不读真实产品图做保真图生图**的链路被网络+支付卡死，不进生产。

### 1.3 Veo 3.1 Lite

- **核心能力**：Veo 3.1 家族入门款，文/图生视频，原生音频；720p/1080p，**不支持 4K**；速度与 Fast 相同。
- **价格**【✅ 已查证：ai.google.dev 价格页 2026-10-01】：$0.05/秒（720p）、$0.08/秒（1080p），为 Fast 的 <50% 成本。
- **状态**：public preview（2026-04）；模型 ID `veo-3.1-lite-generate-001`。
- **中文可用性 / 珠宝适配度**：同 Veo 3.1，国内不可用，仅作参照。

---

## 2. OpenAI 系

### 2.1 Sora 2 —— ⚠️ 状态专项检查发现：产品已关停

- **当前状态**【✅ 已查证：OpenAI 官方帮助中心《Sora 停止服务须知》，更新于上月】：
  - Sora 网页版和应用端：**2026-04-26 已停止服务**
  - Sora API：**2026-09-24 已停止服务**（今天是 2026-10-06，**API 已关停约 12 天**）
  - 停服后永久删除用户数据；已购 ChatGPT/Sora 额度可转用于 Codex
  - 导出入口：sora.chatgpt.com/sunset
  - 来源：https://help.openai.com/zh-hans-cn/articles/20001152-what-to-know-about-the-sora-discontinuation
- **历史能力/价格（仅存档，现已不可用）**：Sora 2 于 2025-09-30 发布；API 原价 sora-2 $0.10/秒（720p）、sora-2-pro $0.30/秒（720p）/$0.50/秒（1024p）【🟡 第三方 API 价格页，产品已死，价格无现实意义】。
- **API 门槛**：现已无 API 可开。
- **中文可用性**：原就被墙；现已产品死亡，**不进任何选型**。
- **珠宝适配度**：无。结论：**Sora 路线作废，勿再投入**。
- **未核实点**：Sora 2 是否仍以"ChatGPT 内部功能"残留——官方停服页未提及 ChatGPT 内继续生成，结合"额度转 Codex"措辞，判断 Sora 视频生成已整体下线；但 ChatGPT 内是否还有隐藏入口，本路未实测，列为未核实。

### 2.2 GPT-Image（gpt-image-1 及其后续版本）

- **版本现状**【✅ 已查证：openai.com/api/pricing】：gpt-image-1 之后已迭代至 gpt-image-1.5、gpt-image-2（2026-04 前后）。
- **价格（API，按 token）**【✅ 已查证】：
  - gpt-image-1：输入 $10/百万、输出 $40/百万 token
  - gpt-image-1.5：输入 $8/百万、输出 $32/百万（图像）
  - gpt-image-2：输入 $8/百万、输出 $30/百万（图像，最新）
  - 按张折算（gpt-image-1，1024×1024）：Low ≈$0.011、Medium ≈$0.042、High ≈$0.166【🔶 第三方 PDF + OpenAI 开发者论坛一致】
  - 来源：https://openai.com/zh-Hans-CN/api/pricing/
- **API 门槛**：OpenAI Platform 账号 + 国际信用卡；与 ChatGPT 订阅分开计费。
- **中文可用性**：❌ 国内不可直连；无人民币支付。
- **珠宝适配度**：编辑能力强（局部重绘），但网络+支付不通，国内门店不可用；不进生产。

---

## 3. 海外主流工具

### 3.1 Runway（Gen-4.5 / Gen-4 Turbo）

- **核心能力**【✅ 已查证：dev.runwayml.com】：Gen-4.5 文/图生视频，720p，最长 10s，支持 16:9/9:16/4:3/1:1/3:4/21:9；另有 Gen-4 图片。
- **价格**：
  - API：Gen-4.5 $0.12/秒；图片 from $0.01/张【✅ https://dev.runwayml.com/】
  - 订阅：Standard $12/月（年付，月付 $15，625 积分）、Pro $28/月（年付，2250 积分）、Max $76/月（年付，9500 积分）；1 积分≈$0.01，Gen-4.5≈12 积分/秒、Turbo≈5 积分/秒【🔶 runway.com/pricing 官方页 + unifically/aitestguide 多源一致】
- **API 门槛**：Runway Dev 账号；国际卡。
- **中文可用性**：❌ 国内不可直连；英文界面。
- **珠宝适配度**：电影感强但国内链路不通；保真图生视频可用但网络卡死，不进国内生产。

### 3.2 Pika（官方 pika.art）

- **官方站核验**【✅ 已查证】：官方为 **pika.art**（实测在线，"Try Pika Free"，并有开发者 API 会员俱乐部）。搜索中大量出现的 pikaslabs.com / pika-labs-ai.com 系 **SEO 内容农场**（其页面自己也写"visit pika.art"），其价格数字不作权威。
- **核心能力**：最新 Pika 2.5；文/图生视频、Pikaframes、Pikaswaps（v2v 物体替换）、Pikaformance（音频驱动对口型）；有官方 API（OpenAPI 3.1 + SDK）。
- **价格**【🟡 一方说法：内容农场口径，未登录 pika.art 实测】：Starter ~$8–10/月、Creator ~$28–35/月（含商用授权）、Fancy ~$76–95/月。免费档有少量积分。
- **API 门槛**：pika.art 开发者门户；国际卡。
- **中文可用性**：❌ 国内不可直连。
- **珠宝适配度**：国内不可用，不进生产。**确切价格待登录 pika.art 核实。**

### 3.3 Luma（Ray 3.2）

- **核心能力**【🔶 经搜索补充】：Ray3.2 原生 1080p；文/图生视频、视频转视频；HDR 可选；旧 Dream Machine API 已标 legacy。
- **价格**【🔶 toolcolumn + twinailabs 两源一致】：API 5s T2V/I2V 1080p=$1.20、10s=$3.60；V2V 5s=$2.16；HDR 翻倍。订阅 Plus $30/月（年付 $25，1 万积分）、Pro $90/月（年付 $75，4 万积分）、Ultra $300/月（年付 $250，15 万积分）；免费档 8 次草稿/月。
- **API 门槛**：Luma API；国际卡。
- **中文可用性**：❌ 国内不可直连。
- **备注**：Ray3 已作为合作模型接入 Adobe Firefly（按秒扣 Firefly 积分：1080p SDR 125 积分/秒）。
- **珠宝适配度**：国内不可用，不进生产。

### 3.4 Midjourney

- **核心能力**：最新 V8.1【🟡 techunfolded 标题，官方版本号未逐字核】；文生图为主，Pro/Mega 档有 SD 视频（Relax 无限）；**无 API**【✅ docs.midjourney.com + 多源一致】。
- **价格**【✅ 已查证：docs.midjourney.com/docs/plans】：Basic $10/月、Standard $30/月、Pro $60/月、Mega $120/月（年付约 8 折）；无免费档。
- **商用条款**：付费档可用；公司年收入 >$100 万美元须 Pro 档 Stealth 才持资产权。
- **中文可用性**：❌ 国内不可直连（Discord/网页）；国际卡。
- **珠宝适配度**：库内既有结论维持——"美>准"，不读真实产品图，**产品保真环节别用 MJ**；仅高端品牌 KV 参考。

### 3.5 Flux 生态（Black Forest Labs）

- **核心能力/价格**【✅ 已查证：docs.bfl.ai / docs.bfl.ml 官方定价页】：
  - FLUX1.1 [pro]：$0.04/张（文生图，生产级）
  - FLUX1.1 [pro] Ultra：$0.06/张（2K/4MP）
  - FLUX.1 Kontext [max]：$0.08/张（图像编辑/图生图）
  - FLUX.1 [dev] / [schnell]：开放权重（本地免费跑，第三方托管 fal/deepinfra 上 dev≈$0.009/张、schnell≈$0.0005/张）
- **新信号**：Runware 目录显示 **FLUX 3 Image** 于 2026-10 上架【🟡 第三方目录，未读 BFL 官方公告，列为未核实】；bfl.ai/pricing 出现视频计费器（$0.17/秒）【🟡 官方页计算器，但未核模型名/时长】。
- **API 门槛**：BFL 官方 API key（国际卡）；开放权重可本地跑。
- **中文可用性**：官方 API 国内不可直连；**但开放权重可在国内 ComfyUI / 哩布哩布 / 吐司 在线跑**（见 §4）。
- **珠宝适配度**：开放权重 + ControlNet = 本地/国内平台可控形，是"品牌调性图 + 局部重绘"的可选底座；保真仍需真实产品图作参考。

### 3.6 Stability AI（SD 3.5 / SDXL）—— ⚠️ 公司状态专项检查

- **公司状态**【✅ 已查证：stability.ai 官网新闻 + PitchBook】：
  - 经历 2024 年初濒临崩盘（季度烧钱 $30M+）后，2024-06 由新 CEO Prem Akkaraju（前 Weta Digital CEO）接管，$80M 救助融资 + 债务免除；
  - **2026-08-25 完成 B 轮 $76M 融资，累计融资 $232M**，投资方含 Electronic Arts、Sony Music、Universal Music、Warner Music；
  - 战略转向**企业级娱乐/音乐**（Stable Audio 3.0，2026-05）。
- **模型现状**【✅ 官网 + 多源】：SD 3.5（Large/Large Turbo/Medium，2024-10）仍为当前主力图模；社区许可证（Community License）**限制商用 + 禁止训练竞品**，非完全开源。第三方称"SD4"已发布【🟡 未读官方公告，未核实】。
- **中文可用性**：API 海外；SD 权重可国内本地/平台跑。
- **珠宝适配度**：开源生态老牌，但商用许可证有约束，且 Flux 已在开源圈取而代之；珠宝生产不优先选 SD。

### 3.7 Meta Movie Gen

- **核心能力/状态**【✅ 已查证：arXiv 论文 + 多源一致】：1080p 视频 + 同步音频，1:1/9:16/16:9；**从未开放公开/开发者 API**，仅研究访问，能力折叠进 Meta 自家消费产品（Meta AI App/Instagram/WhatsApp）。
- **新信号**：Meta 超级智能实验室 2026-07 推出 **Muse Image**（图）与 **Muse Video**（预览，原生音频），并开 **Meta Model API** 公开预览（Muse Spark 1.1 起）；闭源、仅 API【✅ about.fb.com + codersera】。
- **中文可用性**：❌ 国内不可直连（Meta 系整体被墙）。
- **珠宝适配度**：无公开可用入口，不进选型。

### 3.8 Adobe Firefly（图像/视频 + 商用条款）—— 珠宝商用关键约束

- **商用安全**【✅ 已查证：adobe.com 生成式 AI 方针页 + helpx.adobe.com 现行页（2026-10-06 V 路回源复核，替换原失效 FAQ 链接）】：
  - Firefly **自训模型**用授权内容（Adobe Stock）+ 公有领域内容训练，输出可安全商用；企业客户享 **Firefly IP 赔偿**（版权/商标/肖像/隐私全覆盖）。
  - **非 Adobe 自训的合作模型（Google Gemini/Nano Banana、OpenAI GPT Image、Luma Ray3 等）默认被排除在标准 Firefly IP 赔偿之外**（"non-Adobe trained models are excluded from the Firefly IP indemnification"）。
  - **但**：企业版对"符合条件的正式发布 Google/OpenAI 媒体生成模型"另给一份**补充赔偿（Creative Partner Model Supplemental Coverage）**——官方原文逐字："Adobe provides indemnification for **certain copyright infringement claims**…This coverage differs from Firefly indemnification. It **does not cover trademark, publicity rights, or privacy rights claims**."（中文版："为某些版权侵权声明提供赔偿保护…它不涵盖商标、肖像权或隐私权主张"）。
  - 现行官方页：https://helpx.adobe.com/firefly/web/work-with-enterprise-features/creative-production/partner-models-in-firefly-creative-production-for-enterprise.html ｜ 中文：https://helpx.adobe.com/cn/firefly/web/work-with-enterprise-features/creative-production/partner-models-in-firefly-creative-production-for-enterprise.html ｜ 赔偿边界 PSLT：https://helpx.adobe.com/id_en/legal/product-descriptions/partner-model.html
- **视频计费**【✅ helpx.adobe.com 积分 FAQ】：Generative Video 1080p 24fps = 100 积分/秒；Premiere 内 Generative Extend 720p = 50 积分/秒。
- **中文可用性**：Adobe 在中国有业务主体，但 Firefly 生成式 AI 功能在中国大陆账号的开放范围**未核实**【⚪ 未核实：需 Adobe 中国账号实测】。
- **珠宝适配度**：**商用赔偿是对线下门店"给客户出图/投广告"最关键的合规背书**；但须注意——**只有用 Firefly 自训模型才享完整赔偿；一旦切到合作模型（出珠宝带模特佩戴图常需更强人像模型），企业版补充赔偿只保版权、明确不保肖像权与商标权**。珠宝场景恰恰同时踩肖像（模特）与商标（品牌/Logo）两条红线，因此"合作模型出珠宝佩戴图仍由门店自担肖像/商标风险"，此点比原先"合作模型不赔"的笼统说法更强，须在 SOP 合规提示中显式标注。若国内账号可用，Firefly 自训模型仍是 KV/广告图的合规首选。

### 3.9 Ideogram

- **核心能力**：V4 最新；强项**文字渲染/排版**（海报、logo、产品字）。
- **价格**【🔶 fal.ai + kie.ai + developer.puter 多源一致】：API Turbo $0.03、Default $0.06、Quality $0.10/张；订阅约 $7–42/月。
- **API 门槛**：官方 API / fal 托管；国际卡。
- **中文可用性**：❌ 国内不可直连。
- **珠宝适配度**：适合带文字的珠宝海报；网络不通，不进国内生产。

### 3.10 Leonardo.Ai

- **核心能力**：Phoenix 2.0 系列；自定义 LoRA 训练、批量；2026-02 推 Creative Engine API。
- **价格**【🔶 comparedge/toolcolumn/eesel 多源一致】：免费 150 token/天；Essential $12/月（8500 token）、Premium $30/月（2.5 万）、Ultimate $60/月（6 万）；API $9–299/月档。
- **归属**：已被 Canva 收购【🟡 aiinsiders 一方说法】。
- **中文可用性**：❌ 国内不可直连。
- **珠宝适配度**：国内不可用；不进生产。

### 3.11 xAI Grok（Grok Imagine / Aurora）

- **核心能力**：Grok Imagine 生图（Aurora 系）+ 生视频（v1.5，原生音频）。
- **价格**【🔶 clpo.ai + atlascloud + aiwiki 多源，口径有出入】：图 API ≈$0.02–0.04/张；视频 $0.05–0.08/秒（480p $0.05、720p $0.07、1080p $0.14–0.25）。
- **消费端**：X Premium $8/月、SuperGrok $30/月、Heavy $300/月；**2026-03 起免费生图取消，全部转付费**【🟡 morphed + oreate】。
- **中文可用性**：❌ X/Grok 国内不可直连。
- **珠宝适配度**：无。

---

## 4. ComfyUI 专节

### 4.1 本地部署

- **性质**：免费开源节点式生图/生视频工作流（GitHub：comfyanonymous/ComfyUI），可控性最强（ControlNet 控形、局部重绘、批量流水线）。
- **硬件门槛（VRAM）**【🔶 NVIDIA 官方 playbook + localaimaster + radiancesystems 多源一致】：
  | 场景 | 最低显存 | 舒适显存 | 典型 GPU |
  |---|---|---|---|
  | SD 1.5 入门 | 4–6 GB | 8 GB | RTX 3060 |
  | SDXL + ControlNet | 8–10 GB | 12–16 GB | RTX 4070/5060 Ti |
  | Flux Dev FP8 + ControlNet（2026 默认工作流） | 16 GB | 24 GB | RTX 4080/5070 Ti 16G / 4090 24G |
  | 视频（AnimateDiff） | 12 GB | 16 GB | RTX 3060 12G+ |
  | 视频（SVD/MovieGen 级） | 16 GB | 24 GB+ | RTX 4090/A6000 |
- **本机判断**【⚪ 推断】：用户机器为 Mac（Apple Silicon）。ComfyUI 官方支持 Mac MPS 后端，但**大量自定义节点/视频模型依赖 CUDA**，Mac 上视频工作流很慢甚至跑不动；本地跑 ComfyUI 视频不现实。
- **优势场景**：ControlNet 锁项链形状/吊坠居中、局部重绘改蓝宝石颜色、批量抽卡流水线——**与"保真优先"最契合**，但需要 NVIDIA GPU 工作站。

### 4.2 云平台（海外托管）

- **官方 Comfy Cloud**【✅ 已查证：comfy.org/pricing】：Standard $20/月（年付 $16，4200 积分/月 ≈380 条 5s 视频，30 分钟/工作流，1 并发 API）；Pro $100/月（年付 $80，21100 积分，可导入自有模型，1 小时/工作流）。
- **RunComfy（第三方）**【✅ runcomfy.com/pricing】：按 GPU 秒计费，16GB 显存机（T4/A4000）$0.99/时（Pro $0.79/时）。
- **Replicate / fal.ai / Lightning AI**：托管 Flux/SD 模型，按张/按秒计费；Lightning AI 送 80 免费 GPU 小时。
- **中文可用性**：全部海外，国际卡，国内直连不稳。

### 4.3 国内工作流市场（本路重点）

#### 哩布哩布 LiblibAI（liblib.art）

- **性质**：国内最大 SD/Flux 模型 + 工作流托管 + 在线运行平台；含 LibTV（视频画布，库内已深调）与星流 API（图像 REST）。
- **价格**【✅ 已查证：liblib.art/apis】：API 生图 100 积分=1 元（订阅价 100 积分=0.9 元）；API 基础计划 ¥10 起，QPS-1/并发-5，积分永久有效，**可商用**，可开发票。
  - VIP 档【🔶 ai-bio + recatools】：大师版 1299 元/年（5800 积分/月）、旗舰版 2999 元/年（15800 积分/月）；企业档 858 元/月（5–6.6 万积分/月，1 积分≈0.017 元）。
- **模型覆盖**：Wan 3 系列、可灵全系、Nano Banana Pro、Seedream、Flux——即一个平台跑遍国内外主流模型。
- **中文可用性**：✅ 国内直连、人民币支付、中文界面、可开票。
- **珠宝适配度**：⭐ 高——ControlNet 控形 + LoRA 定制（如"皇家蓝蓝宝石"专项 LoRA）+ 批量工作流，可直接在网页跑，无需本地 GPU。

#### 吐司 Tusiart（tusiart.com / tusi.cn）

> 注意：与腾讯 tusi.qq.com（vibe coding 应用生成器）是**两个不同产品**，勿混淆。

- **性质**：国内 SD/Flux 模型社区 + 在线生图 + 工作流模式（在线 ComfyUI）。
- **价格**【🔶 ai-kit + aigjdh】：免费 100 算力/天（≈20 张基础图，207 万像素）；付费 24.9 元/月起（300 算力/天、4K、历史永久）。
- **模型覆盖**：FLUX LoRA 社区活跃，模型作者可设商用权限。
- **中文可用性**：✅ 国内直连、人民币。
- **珠宝适配度**：中——适合找现成珠宝/饰品 LoRA 做实验，但工作流完整度与商用授权需逐模型核实。

### 4.4 ComfyUI 与现有珠宝链路的互补关系

现有链路：**即梦精修产品图 → LibTV 或即梦图生视频 → 剪映合成**。

- **ComfyUI（经哩布哩布/吐司在线）补的缺口**：
  1. **ControlNet 控形**：项链链条走向、吊坠居中、宝石位置——现有即梦/苞米是"一键出"，控形弱；ComfyUI + ControlNet（Canny/Depth/Lineart）可锁真实产品轮廓，保真度更高；
  2. **局部重绘（inpaint）**：只改蓝宝石颜色/金属拉丝，不动整图；
  3. **批量流水线**：一个工作流跑 100 张白底图/场景图，人工只做筛选（仍守"4 个人工点"）；
  4. **定制 LoRA**：把本店"皇家蓝蓝宝石 + 金链"训练成专属 LoRA，风格一致性。
- **不替代的环节**：视频生成主力仍是即梦/Seedance（国内手机端最便宜、音画同步）；剪映合成不变；ComfyUI 主要补**产品图侧的精修与批量**，不做视频主力。
- **选型建议**：
  - **不买本地 GPU 工作站**（用户是 Mac，且线下门店场景用不上重资产）；
  - **首选哩布哩布在线 ComfyUI**（国内直连、人民币、可商用、模型全、有 API），先跑通"真实产品图 → ControlNet 锁形 → 局部重绘改色"一条图侧工作流；
  - 吐司作为 LoRA 素材补充；
  - 海外 Comfy Cloud/RunComfy 仅在需要跑最新 FLUX 3 等国内未上架模型时才考虑，日常不碰。

---

## 5. 状态专项检查发现清单（机制 §3）

| # | 工具 | 信号 | 等级 | 来源 |
|---|---|---|---|---|
| S1 | **Sora（OpenAI）** | 独立产品 2026-04-26 停服、API 2026-09-24 停服（今天已死），数据永久删除 | ✅ | https://help.openai.com/zh-hans-cn/articles/20001152-what-to-know-about-the-sora-discontinuation |
| S2 | Imagen | 已下线，图像分支统一入 Nano Banana 家族 | ✅ | https://ai.google.dev/gemini-api/docs/models?hl=zh-cn |
| S3 | Stability AI | 2026-08-25 完成 B 轮 $76M（累计 $232M），娱乐资本入股，转向音乐/娱乐；非破产 | ✅ | https://stability.ai/ ｜ https://pitchbook.com/profiles/company/503578-90 |
| S4 | Midjourney | 最新 V8.1（第三方口径），仍无 API | 🟡 | techunfoldedai.com/midjourney/ |
| S5 | Runway | 已从 Gen-4 升级到 Gen-4.5 / Gen-4 Turbo，统一积分定价 | ✅ | https://runway.com/pricing ｜ https://dev.runwayml.com/ |
| S6 | Luma | Ray3.2，旧 Dream Machine API 标 legacy；接入 Adobe Firefly | 🔶 | toolcolumn ｜ helpx.adobe.com |
| S7 | Nano Banana | 家族扩为 Pro / 2 / 2 Lite 三成员，官方昵称体系明确 | ✅ | https://deepmind.google/models/gemini-image/ |
| S8 | Meta Movie Gen | 未开放公开 API；2026-07 转 Muse Image/Video + Meta Model API 预览 | ✅ | https://about.fb.com/news/2026/07/introducing-muse-image-meta-ai/ |
| S9 | GPT-Image | gpt-image-1 → 1.5 → 2 连续迭代 | ✅ | https://openai.com/zh-Hans-CN/api/pricing/ |
| S10 | Grok | 2026-03 取消免费生图，全转付费 | 🟡 | morphed.app ｜ oreate.ai |
| S11 | Pika | 官方站 pika.art；pikaslabs.com 等为 SEO 农场，价格数字不可作权威 | ✅ | https://pika.art（实测在线） |
| S12 | Flux | FLUX 3 Image 传 2026-10 上架（第三方目录，未读官方公告） | ⚪ | runware.ai |

---

## 6. 未核实清单（不得混入结论正文）

1. **Pika 官方确切订阅价**：pika.art 需登录后查看，本路抓到的价格均来自 SEO 内容农场（pikaslabs.com 等），降为🟡。
2. **Sora 2 在 ChatGPT 内是否残留生成入口**：官方停服页未明说，未实测 ChatGPT。
3. **Adobe Firefly 中国大陆账号可用性**：Adobe 中国有业务，但 Firefly 生成式 AI 在大陆账号是否开放未实测。
4. **FLUX 3 Image**：仅 Runware 目录提及，未读 BFL 官方公告。
5. **BFL 视频模型**：bfl.ai/pricing 出现 $0.17/秒计费器，但未核模型名/时长/分辨率。
6. **Midjourney V8.1 版本号**：仅第三方标题，未读官方 changelog 逐字确认。
7. **Stability SD4**：第三方提及，未读官方公告。
8. **Leonardo.Ai 被 Canva 收购**：单一第三方（aiinsiders），未读 Canva/Leonardo 官方公告。
9. **哩布哩布 VIP 年档确切积分数**：来自 ai-bio/recatools 第三方，非 liblib.art 官网逐字。
10. **本机 Mac 跑 ComfyUI 实际速度**：推断，未实测。

---

## 7. 证据等级诚实度自查

- 标 ✅ 的均为官方一手 URL（Google Cloud / OpenAI Help / Runway Dev / comfy.org / bfl.ai / liblib.art API / midjourney docs / adobe.com / stability.ai），可直接回源。
- 标 🔶 的均 ≥2 独立来源互证（价格类数字已交叉）。
- 标 🟡 的均为单一第三方/内容农场，已明确标注身份，未当权威。
- 标 ⚪ 的全部进 §6 未核实清单，未混入正文结论。
- 关键价格数字（Veo / Nano Banana Pro / BFL / Comfy Cloud / Liblib API / Runway API / Midjourney 订阅）均有官方或双源。
