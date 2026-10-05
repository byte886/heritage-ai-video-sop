# 工具 API 双路径调研：UI 操作 vs API 操作（自动化选路底稿）

> 文档类型：Research（调研底稿）｜ 调研日期：2026-10-06 ｜ 维护者：AI 自动维护 ｜ 读者：AI+人类
> 用途：为《工具选型参考.md》（01_结论与产出/工具选型参考.md）补充"UI vs API"双路径选路证据，供后期自动化/批量生产决策；主 Agent 后续整合进《工具选型参考.md》。
> 调研范围：工具栈全部 12 项——即梦（画布/App）、火山方舟 Seedream/Seedance、即梦官网自身 API 服务、BytePlus ModelArk（海外）、可灵 Kling（国内/海外）、苞米AI、美图设计室（OpenClaw）、Photoroom、LibTV（libtv-skills）、剪映/CapCut。
> 路径约定：文中仓库内文件一律用仓库相对路径（如 `09_调研底稿与素材/xxx.md`）；涉及技能安装位置一律用「技能实际安装目录」占位表述，不写死机器路径（用户原则）。

## 来源标注四档（与主SOP/工具选型参考一致）

| 档位 | 含义 |
|---|---|
| **已查证** | 官方文档/官网/官方博客/GitHub README 原文直接确认 |
| **经搜索补充** | 多源交叉或明确标注出处的公开信息 |
| **博主一方说法** | 单一博主/教程/社区单源转述 |
| **未经核实** | 查不到，或需登录/付费墙可见 |

---

## 一、调研背景与复用结论

### 1.1 需求

工具后期有两条操作途径：**UI 操作**（现状，人点）与 **API 操作**（程序化，可批量/可自动化）。本底稿为每个工具查证：API 是否可用、认证门槛、价格模式、自动化边界，最终给出本项目（线下珠宝门店、手机端为主、豆包系优先）的落地建议。

### 1.2 复用结论清单（已查证，本次不重复调研）

| 结论 | 出处 |
|---|---|
| 即梦智能画布不开放外部 API/Skill（画布内 Agent 仅限网页内对话） | 09_调研底稿与素材/libtv_seedance_research.md §1.5 |
| Seedance 2.0 系列暂不支持真人人脸正脸视频；Seedance 2.5 支持 5–30s（高级会员） | 工具选型参考 3.3 |
| 即梦画布"整组/单节点/部分运行"三种执行模式（BytePlus 官方文档） | 09_调研底稿与素材/automation_mobile_research.md |
| 行业最少人工干预 4 点：上传→筛图→筛视频→终检；出图后筛 3–5 张无全自动方案 | automation_mobile_research.md §1.5/§1.6 |
| 手机端链路 = 豆包APP→视频生成（或即梦APP）+ 剪映APP→微信直发客户；画布/整组运行仅网页端 | automation_mobile_research.md §2 |
| 即梦 2.0 Fast 10s≈140 积分（VIP 截图口径）、2.5 30s=780 积分 | 工具选型参考 3.3 |
| LibTV = LiblibAI 出品、Creator+Agent 双入口、纯 Web 无 App | libtv_seedance_research.md |
| 苞米AI 价格/积分未经核实；美图设计室积分制 | 工具选型参考 3.1/3.2 |

---

## 二、总览速查表（一页选路）

> 自动化程度口径：**高**=官方异步回调/批量并发全支持；**中**=部分程序化；**低/无**=仅 UI 或需第三方/RPA。落地优先级按本项目约束（线下门店、手机端、豆包系优先、价格敏感）评估。

| 工具 | API 可用性（官方） | 认证门槛 | 计费模式 | 自动化程度 | 门店落地优先级 |
|---|---|---|---|---|---|
| 即梦画布 / 即梦App（UI 现状） | 画布不开放外部 API/Skill【已查证：底稿】 | — | — | 半自动（整组运行+人工筛图） | 现状主力，维持 UI |
| **火山方舟 Seedream**（生图 API） | ✅ 是：REST + Python/Java/Go SDK【已查证】 | 个人实名（扫脸/银行卡）即可，无企业/白名单门槛【已查证】 | 按张：5.0-pro 0.30 元起/张、5.0-lite 0.22 元/张；新户免费 50–200 张【已查证】 | 高（同步返回，可并发批量） | ★★★ 第一批 API 化首选 |
| **火山方舟 Seedance**（视频 API） | ✅ 是：异步任务 + callback 回调 + 轮询 + 尾帧串联【已查证】 | 同左（个人实名） | 按 token：2.5 无视频输入 70 元/M；2.0-fast 37 元/M；折算 10s≈14 元/条、30s≈78 元/条（推算）【已查证+推算】 | 高 | ★★★ 批量视频提交可选（与即梦 App 积分价同量级） |
| 即梦官网自身 API 服务 | ⚠️ 部分：仅特定类别会员（超级会员档）准入 + 另行购买 API 服务【已查证：付费协议 §3.10】 | 高门槛（会员+另购） | 未核实（协议未披露单价） | 中 | ✗ 不建议 |
| BytePlus ModelArk（海外） | ✅ 是：同构 API，新加坡/欧洲区域【已查证】 | 个人 + 境外 Visa/MC 信用卡（不验证商业身份）【已查证】 | 美元计价（Seedance 2.5 带视频输入 6.4 USD/M）【已查证+未核实单价】 | 高 | ✗ 国内门店不需要 |
| **可灵 Kling（国内）** | ✅ 是：官方开发者平台（API Key 或 AK/SK+JWT）【已查证】 | 个人实名（身份证+人脸）【经搜索补充：隐私政策】 | 积分/灵感值扣费（V3 4K 3 积分/秒等）；"1 积分=多少元"资源包零售价未核实 | 高（Webhook 签名回调+批量并发） | ★★ 备选（跨模型/多平台投放时） |
| 可灵 Kling（海外） | ✅ 是：kling.ai/document-api【已查证】 | 个人邮箱注册 + Stripe（Visa/MC/Amex）【已查证】 | Credits（$1=66，会员档 $6.99 起/月）【已查证】 | 高 | ✗ 国内场景不需要 |
| 苞米AI | ❌ 否：未见官方 API/开放平台【经搜索补充：官网无入口+多关键词零命中+无第三方封装三重交叉】 | — | 未核实（原口径） | 无（仅 UI，自动化只能 RPA） | UI 即可，佩戴图主力 |
| **美图设计室 OpenClaw** | ⚠️ 部分：Agent/MCP 技能框架（非裸 REST），明示开放商品套图/智能抠图/变清晰【已查证】 | 个人可（个人版/团队版）【已查证】 | 美豆，与 UI 共用余额池；单图约 0.61–0.8 元、电商套图 7 张约 4.3–5.6 元【已查证】 | 中 | ★★ 半自动（套图/抠图脚本化） |
| Photoroom | ✅ 是：标准 REST + x-api-key + 官方 SDK【已查证】 | 个人可注册，但需美元订阅 + 跨境支付；国内连通性未核实【经搜索补充】 | Basic $0.02/张、$20/月起（1000 张）；Plus $0.10/张、$100/月起【已查证】 | 中（限流 60 张/分，同步为主；webhook 未核实） | ✗ 国内门店不现实 |
| **LibTV（libtv-skills）** | ⚠️ 部分：开源对话式桥接（4 端点 5 脚本），非细粒度节点 API【已查证：GitHub README】 | 个人注册即可在用户中心生成 Access Key（Bearer 鉴权）；具体模型分 VIP 档【经搜索补充】 | Skill 调用不单独计费，消耗平台积分（基础 VIP 39 元/月沿用底稿口径） | 中高（建会话/上传/发指令/轮询/批量下载全自动；上传/检查/导出人工） | ★★ 批量流水线可选 |
| 剪映 / CapCut | ❌ 基本无官方 API：仅 ChatGPT 插件窄接口（3 端点，文本→视频草稿链接+模板搜索）【已查证：官方 openapi.yaml】 | — | — | 第三方路径：cutsdk（MIT 开源）、capcut-mate（自部署）、vectcut/流光剪辑（商业按量）【已查证+经搜索补充】 | 剪映保持 UI（手机端）；进阶批量可 cutsdk 本地写草稿 |

---

## 三、分工具详表（A. API 可用性 ｜ B. 认证与地域 ｜ C. 价格模式）

### 3.1 火山方舟（Seedream / Seedance）—— 字节系程序化主通道

- **A. API 可用性**：是。
  - 图片生成：`POST https://ark.cn-beijing.volces.com/api/v3/images/generations`（OpenAI 兼容 SDK）；模型 ID：`doubao-seedream-5-0-pro-260628`、`doubao-seedream-5-0-lite-260128`、`doubao-seedream-4-5-251128`、`doubao-seedream-4-0`。分辨率：5.0 Pro 支持 1K/2K，5.0 Lite/4.5 支持 2K/3K/4K；参考图上限 5.0 Pro=10 张、其余 14 张。【已查证：https://www.volcengine.com/docs/82379/1541523 】
  - 视频生成：`POST /api/v3/contents/generations/tasks`（异步任务制）；模型 ID：`doubao-seedance-2-5-260628`、`doubao-seedance-2-0-260128`、`doubao-seedance-2-0-fast`、`doubao-seedance-2-0-mini`、`doubao-seedance-1-0-pro`。时长档位：2.5=[4,30]s，2.0 系列=[4,15]s；分辨率：2.5=480p/720p/1080p，2.0=480p/720p/1080p/4k，2.0 fast/mini=仅 480p/720p；支持首尾帧、视频编辑/延长、尾帧串联、原生音画同出。【已查证：https://docs.volcengine.com/docs/ark/create-video-generation-task-api?lang=zh 】
- **B. 认证与地域**：个人实名认证（扫脸/银行卡）即可开通并获取 API Key，**无需企业认证、无白名单/邀测门槛**；企业认证为可选升级（协作奖励、TPM 保障包等权益）。【已查证：https://www.volcengine.com/docs/6359/1279663 ｜ https://www.volcengine.com/docs/82379/1108216 】
- **C. 价格模式**（按量后付费）：
  - Seedream：5.0-pro **0.30 元起/张**、5.0-lite **0.22 元/张**；免费额度 5.0-lite 50 张、4.5/4.0 各 200 张。【已查证：https://www.volcengine.com/product/ark 】
  - Seedance（按百万 token）：2.5 无视频输入 **70 元/M**（含视频输入 42 元/M）；2.0 无视频输入 **46 元起/M**（含 28 元起）；2.0-fast **37 元/M**（含 22 元）；2.0-mini **23 元/M**（含 14 元）。【已查证：官方产品页，本次复核确认】
  - **token 换算（推算）**：官方样例一条 11s/720p 视频消耗约 41 万 token（≈3.7 万 token/秒）→ 2.0-fast 一条 10s ≈ 13.7 元、2.0 一条 10s ≈ 17 元、2.5 一条 30s ≈ 78 元。【经搜索补充：基于官方样例 usage 字段推算，以账单为准】
  - **与即梦 App 积分价对比**：2.0 VIP 10s=140 积分 ≈ 15.1 元/条（即梦标准会员 239 元/2210 积分口径）；2.5 30s=780 积分 ≈ 84 元/条。**API 按量价与 App 会员积分折算价基本同量级（略便宜），但 API 无会员订阅折扣、需自行写代码调度。**【已查证：底稿积分价 + 官方 API 价格页】

### 3.2 即梦（画布/App 自身）—— 画布无 API，底层模型走火山方舟

- **A. API 可用性**：部分。
  - 既有结论沿用：即梦智能画布**不开放外部 API/Skill**【已查证：底稿 §1.5 + 教程站第九章】。
  - 2025–2026 新增两条腿：① 底层模型经**火山方舟 ModelArk** 开放（见 3.1，即梦模型的程序化主通道）【已查证】；② **即梦 AI 独立产品线**（火山引擎智能视觉，volcengine.com/product/jimeng，req_key 形如 `jimeng_image2image_dream_inpaint` 等，走 HTTP/SDK/API_KEY 三种接入）【已查证：https://www.volcengine.com/product/jimeng ｜ https://docs.volcengine.com/docs/JimengAI/ImageGeneration40-InterfaceDocumentation 】；③ **即梦 App 自身 API 服务**：付费协议 §3.10/§5.1.2 明确存在，但"仅面向已开通特定类别会员（超级会员档）的用户开放，需另行购买 API 服务，独立按 token 计量，不属于会员通用权益"【已查证：https://lf3-cdn-tos.draftstatic.com/obj/ies-hotsoon-draft/dreamina/b966ce40-d931-4397-8def-38fe5d03c729.html 】；抖音博主称"54600 超级会员可调用"【博主一方说法：https://www.iesdouyin.com/share/video/7671216916802899227 】。
  - 未发现独立"开放平台/开发者门户"子站（open.jimeng.* / developer.jimeng.*）【未经核实：需登录会员中心确认】。
- **B. 认证**：火山方舟通道=个人实名；即梦自身 API=超级会员准入+另购，门槛高。
- **C. 价格**：即梦自身 API 按 token 计量但**单价未披露**【未经核实】；火山方舟通道价格见 3.1。

### 3.3 BytePlus ModelArk（海外版）

- **A. API 可用性**：是，文档与国内火山方舟同构；Base URL 分区域：新加坡 `ark.ap-southeast.bytepluses.com/api/v3`、欧洲 `ark.eu-west.bytepluses.com/api/v3`；海外称 **Dreamina**（即梦海外品牌），Seedance 2.0/2.5 均已上线。【已查证：https://docs.byteplus.com/zh-TW/docs/ModelArk/1520757 ｜ https://www.byteplus.com/id/blog/dreamina-seedance2-0 ｜ https://getbrut.app/docs/providers/seedance.html 】
- **B. 认证与地域**：Personal / Business 两种注册均可；需完成 profile + 手机 OTP + 绑定支付方式；支持 Visa/MC/Amex/Maestro，部分产品 PayPal；**不验证持卡人商业身份**（个人卡可用）；国内账号体系与火山方舟**互不互通**。【已查证：https://docs.byteplus.com/id/docs/Account/sign-up-and-verify-byteplus-account ｜ https://ai.byteplus.com/en/help/article/what-payment-methods-does-byteplus-support 】
- **C. 价格**：美元计价；Seedance 2.5 带视频输入 6.4 USD/M tokens（首页可见），无视频输入单价与逐模型价未完整抓取【未核实】。

### 3.4 可灵 Kling（国内）

- **A. API 可用性**：是。入口 https://app.klingai.com/cn/dev/document-api/ ，请求域名 `https://api-beijing.klingai.com`。接口覆盖：文生视频/图生视频/首尾帧/运镜控制/运动笔刷（V1.5）/动作控制（V3.0）/多图参考/对口型/视频延长；已开放模型 v1.6 / v2.0 / v2.1 / v2.5-turbo(+PRO) / v2.6 / v3 / v3-omni / kling-video-o1。【已查证：官方 API Reference 系列页】
- **B. 认证**：两种认证——新版 API Key（控制台一键创建，`Authorization: Bearer`）或老版 AK/SK+JWT；**个人可开**：隐私政策写明 API 服务购买时要求"个人实名认证（身份证照片+人脸识别）"；未在公开文档见"企业白名单/邀请制"硬门槛，商务通道是否存在未核实。【已查证：官方 authentication.md ｜ 经搜索补充：可灵隐私政策摘要】
- **C. 价格模式**：按"积分/灵感值"扣（生成失败返还）：V2.5-Turbo 5s=1.5 积分、10s=3 积分；V2.5-Turbo PRO 5s=2.5/10s=5；V2.6 指定音色 5s=6/10s=12；V3 原生 4K 按 3 积分/秒；多图参考生图 0.4 元/张+16 积分。【已查证：官方 updateNotice 累计】。**"1 积分=多少元"资源包零售价未核实**（需登录控制台）。第三方云聚合价可作横向参照：阿里云百炼 kling-v3 视频 720P 0.9 元/秒、1080P 1.2 元/秒、4K 3 元/秒、720P 无声 0.6 元/秒【已查证：https://help.aliyun.com/zh/model-studio/kling-v3-video-generation 】；京东云 1080p 无参考 0.8 元/秒、有参考 1.2 元/秒【已查证：https://docs.jdcloud.com/cn/lingjing/kling 】；金山云 768p 2 元/6s、1080p 3.5 元/6s【已查证：https://docs.ksyun.com/documents/44741?type=3 】。
- **自动化**：异步回调（`callback_url` + Webhook 签名三 Header）+ 主动拉取（任务列表 pageSize 最大 500）+ 批量并发；**生成结果 30 天后自动清理，必须回调落地转存**【已查证：官方 callbacks.md / updateNotice 2024-10-30】。

### 3.5 可灵 Kling（海外）

- **A/B**：入口 https://kling.ai/document-api/ ，域名 `https://api-singapore.klingai.com`（旧域名已迁移）；海外邮箱/国际社媒登录，不接受 +86 手机号，账号/积分/会员与国内**完全不互通**；文档未见强制企业资质。【已查证：官方 authentication.md ｜ 经搜索补充：Oreate AI / ReSub 对比文】
- **C**：Credits 计价，$1=66 Credits，有效期 2 年；会员档月付 Standard $6.99 / Pro $25.99 / Premier $64.99 / Ultra $127.99（对应 660/3000/8000/26000 Credits）；支付走 Stripe（无支付宝/微信）。【已查证：https://kling.ai/docs/point-policy ｜ https://kling.ai/app/membership/membership-plan ｜ https://kling.ai/docs/payment-policy 】逐条积分单价表未公开抓到【博主一方说法：cometapi/eesel.ai 转述 5s≈10 Credits 量级，未核实】。

### 3.6 苞米AI（珠宝垂直）

- **A. API 可用性**：**否**。官网 https://bomi-ai.com/zh/ 为产品介绍落地页，全文无 API/开放平台/开发者/接口/Webhook 字样，仅"立即体验"按钮【已查证：官网原文】；以"苞米AI API/开放平台/批量"等多关键词检索零命中（返回均为同名近似产品，无一条指向苞米官方）【经搜索补充】；无第三方封装 SDK 记录【经搜索补充】。**结论：一键佩戴/智能抠图/背景图/视频生成四模块只能网页 UI 手动操作，程序化自动化只能靠 RPA 模拟点击。**
- **B**：不适用。
- **C**：价格/积分原口径**未经核实**（沿用工具选型参考 3.1 注记）。

### 3.7 美图设计室（OpenClaw）

- **A. API 可用性**：部分。**OpenClaw 开发者服务**（https://www.designkit.cn/openclaw ，需登录生成 AK Token）：Agent/MCP 技能调用框架（Meitu CLI），**非裸 REST**；页面明示可调用**商品套图、智能抠图、变清晰**三项【已查证：页面原文】；美图官方新闻稿称 Meitu CLI/OpenClaw Skills 共开放八大能力模块（视频动作迁移/图片编辑/图片生成设计/图片超清/**AI换装**/图生视频/智能改尺寸/智能抠图）【经搜索补充：https://www.meitu.com/zh/media/436 ｜ 中新网 ｜ 光明网】——AI换装是否在 designkit 侧实际可调**需登录实测**【未经核实】。母平台美图 AI 开放平台（ai.meitu.com / open.mtlab.meitu.com）另有传统 Web API（文生图、百变滤镜等），面向底层算法、需逐项"申请接入"，与设计室 UI 的模特穿戴不是同一套接口【已查证：https://ai.meitu.com/doc/?id=303&type=api&lang=zh&domain=OUT ｜ http://open.mtlab.meitu.com/doc/?id=82 】。
- **B. 认证**：OpenClaw 登录美图设计室账号即可生成 AK，帮助中心区分个人版（个人商用）/团队版（公司商用），**个人可注册**；母平台邮箱注册+申请接入。【已查证：https://www.designkit.cn/help/61 】
- **C. 价格**：OpenClaw 按**美豆**计费、失败自动退款，**与 UI 积分共用同一余额池**（API 不是独立计费体系）；美豆单独购买约 0.06–0.11 元/个、高级/团队会员约 0.041–0.053 元/个；一张图约 0.61–0.8 元、电商套图（7 张）约 4.3–5.6 元、30s 视频约 18.5 元起；会员档免费版 ¥0 / 标准 ¥30/月（赠 330 美豆）/ 高级 ¥88/月（赠 1000 美豆）。【已查证：https://www.designkit.cn/help/125 ｜ https://www.designkit.cn/pricing ｜ https://www.designkit.cn/help/104 】

### 3.8 Photoroom

- **A. API 可用性**：是（三者中最标准）。两个端点：**Remove Background API**（Basic 套餐）与 **Image Editing API**（Plus 套餐，含 AI Shadows/Backgrounds/Relight/Virtual Model/Virtual Try-On/Upscale 等）；文档 https://docs.photoroom.com/ ，Base URL `https://image-api.photoroom.com`；官方提供 JS/Python/Node/iOS SDK 及 Google Sheets/Excel/Zapier/Make 集成。【已查证：官方文档】
- **B. 认证与地域**：邮箱注册→账号设置激活 API→`x-api-key` Header 鉴权，未要求企业资质、支持多 Key；**支付为美元订阅，需国际信用卡/PayPal，无人民币/支付宝/微信通道**；国内直接访问 photoroom.com / API endpoint 的连通性**未核实**。【已查证：docs.photoroom.com ｜ 经搜索补充：定价页仅美元口径】
- **C. 价格**：按月预付图片包：Sandbox 每月 1000 张免费+10 张生产免费（测试用）【经搜索补充：metronome 索引】；Basic $0.02/张、**$20/月起（1000 张）**【已查证：https://www.photoroom.com/zh/api/startup-plan ，本次复核 $0.02 单价】；Plus $0.10/张、$100/月起；Partner $0.01/张、最低 $1000/月；1 次 Image Editing=5 次 Remove BG；企业版 10 万张/年起（SOC 2 Type 2/GDPR）。【已查证：docs.photoroom.com ｜ 经搜索补充：官方论坛/第三方索引】
- **自动化**：同步请求-响应为主，Remove BG 中位延迟约 350ms【经搜索补充：官方论坛】；无原生批量端点但支持并发，官方社区口径限流 **60 张/分钟**（CSV 批量 400 张约 50% 失败率撞限流）【经搜索补充：photoroom.discourse.group/t/319】；异步 webhook 配置未在公开文档说明【未经核实】。

### 3.9 LibTV（libtv-skills / 外部 Agent 通道）

- **A. API 可用性**：部分——**开源 Skill 包 + 对话式 OpenAPI**，不是细粒度节点 API。仓库 https://github.com/libtv-labs/libtv-skills （MIT）内含 1 个 skill（`libtv-skill`）+ 5 个脚本（create_session / query_session / change_project / upload_file / download_results），桥接 `im.liblib.tv/openapi` 4 端点（POST /openapi/session、GET /openapi/session/:id（afterSeq 增量轮询）、POST /openapi/session/change-project、POST /openapi/file/upload，仅图片/视频）。机制本质：把自然语言指令发进 LibTV Agent 会话，由服务端 Agent 在画布上自动跑，再轮询+批量下载。【已查证：GitHub README 原文，本次复核确认：仓库 7 commits、仅 1 skill】
- **⚠️ 口径更正（相对 2026-06 底稿）**：开源仓库里**没有** 100+ Skill；"100+ Skill"是 **2026-07-14 上线的画布内 Skill 商店**（专业影视/商业广告/短剧漫剧/动漫游戏/MV/自媒体六类），跑在 LibTV 服务端、由会话消息触发，不进开源包。【已查证：GitHub README ｜ 经搜索补充：toolin.ai / 量子位 / 钛媒体 2026-07-16】
- **B. 认证**：注册/登录 liblib.tv → 用户中心·API/开发者 生成 `LIBTV_ACCESS_KEY`，`Authorization: Bearer <KEY>`；多源教程均未提"先买会员才能开 KEY"【已查证：README；经搜索补充：腾讯新闻/UIED/掘金/ClawHub】；但**具体模型分 VIP 档**（非 VIP 实测可用约 8 个视频模型，以 Wan/Hailuo 为主；MiniMax H3、Seedance VIP 通道需会员）【博主一方说法：掘金实测】；KEY 对免费账号的完全开放程度需以账户页为准【未经核实】。
- **C. 价格**：Skill/API 调用本身不单独计费（"一个 Access 授权调全部能力"），消耗走平台积分与画布端同价；会员沿用底稿口径：基础 VIP 连续包月 39 元/月、视频创作年包 569–8499 元档。【已查证：liblib.art 官方页 ｜ 经搜索补充：toolin.ai FAQ】
- **自动化边界**（READM 实际端点口径，修正底稿表）：

| 环节 | 自动化状态 |
|---|---|
| 建会话 / 绑定项目 | ✅ POST /openapi/session、/change-project |
| 上传素材（产品参考图） | ✅ POST /openapi/file/upload（仅图/视频） |
| 剧本拆解/分镜/镜头生成 | ⚠️ 无独立端点——会话内发自然语言，服务端 Agent 调 Skill 商店工作流自动跑 |
| 查询进展 / 增量拉取 | ✅ GET /openapi/session/:id?afterSeq=N |
| 结果批量下载 | ✅ download_results.py（--prefix 命名 / --urls 直链） |
| 批量工作流 | ⚠️ 无内建批量编排 API，靠多会话+change_project 隔离+轮询实现 |
| 仍必须人工 | 注册登录、首次结果检查与不满意反馈、最终成片把关与导出 |

### 3.10 剪映 / CapCut

- **A. API 可用性**：基本"否"（官方）。唯一可抓到的官方程序化描述是 **CapCut ChatGPT Plugin**（OpenAPI 3.0，https://www.capcut.com/openapi.yaml ，仅 3 端点：英文文本→视频草稿链接、插件自介绍、模板搜索），**不是通用剪辑开放 API**，不能做素材拼剪/字幕/时间线批量生产【已查证：官方 yaml 精读】。国内剪映（capcut.cn/专业版）未见官方开放平台/开发者控制台；"剪映开放平台申请企业资质拿 client_id/secret、开通 AI 数字人 API"仅见单一 CSDN 博客、无官方门户佐证，**按"未见官方 API"处理**【博主一方说法：CSDN 2026-07-20；经搜索补充：SamAutomation 亦明确 CapCut 无公开服务端 API】。
- **B**：官方插件端点未见公开鉴权文档【未经核实】；第三方各有自建鉴权。
- **C**：官方插件无公开计费页。第三方：cutsdk（MIT 开源，本地建草稿免费、云渲染走自有 token）、capcut-mate（Apache-2.0 自部署免费）、vectcut / JianYingAPI（流光剪辑，商业按量、价格需注册看）。【已查证：npm cutsdk README ｜ 经搜索补充：腾讯云/掘金/文档站】
- **自动化能力（第三方现实路径）**：① **cutsdk**（Node.js SDK+CLI，npm，可代码化生成剪映标准草稿：字幕/图片/视频/音频/特效/贴纸/关键帧/遮罩/转场，草稿可被剪映桌面端直接打开二次编辑）——珠宝门店最省钱路径；② **capcut-mate**（FastAPI 自部署，约 31 个剪辑能力 REST 化，支持 Docker/扣子插件）；③ **vectcut/流光剪辑**（商业云端 API，REST+MCP，国际 CapCut 与国内剪映双兼容）——纯云端无人值守渲染再评估。【已查证：npm ｜ 经搜索补充：SegmentFault/腾讯云/docs.vectcut.com/apifox/mcp.directory】

---

## 四、自动化边界（D. 哪些环节可全自动）

> 口径沿用 automation_mobile_research.md：全自动=设定后无人干预跑完；半自动=需人工点一次；必须人工=质量/决策只能人。

| 生产环节 | UI 现状 | 官方 API 化后 | 仍必须人工 |
|---|---|---|---|
| 白底图/抠图 | 即梦画布节点、人工上传+筛 | ✅ 火山方舟 Seedream API（个人实名、0.22 元/张起）批量生成；Photoroom API 抠图（跨境门槛）；美图 OpenClaw 智能抠图 | 上传原图（每款一次）+ **筛图**（高反光/镶口保真，行业无全自动方案） |
| 佩戴图（模特上身） | 苞米AI UI（主力）、美图设计室 UI | ⚠️ 美图 OpenClaw 新闻稿含"AI换装"但 designkit 侧是否可调未核实；苞米AI 无 API（只能 RPA） | 筛选佩戴比例/链条变形（人体 4 项自检） |
| 图生视频（无模特/有模特） | 即梦 App/画布逐条点 | ✅ 火山方舟 Seedance 异步任务+回调+批量并发（10s≈14 元）；✅ 可灵 Webhook（V3 4K 3 积分/秒）；✅ LibTV 会话式批量 | 筛视频（运镜/时长）——抽卡仍人工 |
| 剧本→分镜→镜头编排 | LibTV 画布 Skill 商店 / 即梦画布 | ⚠️ LibTV 会话式半自动（发大白话，服务端 Agent 跑）；无细粒度节点 API | 首次结果检查、不满意反馈 |
| 剪辑成片（字幕/卡点/BGM） | 剪映 App/桌面 UI | ❌ 官方无 API；第三方 cutsdk 本地写草稿→剪映桌面端微调（开源免费）或 vectcut 云端渲染 | 节奏/对齐/终检导出 |
| 分发客户 | 微信/企业微信直发 | ❌ 无自动分发链路【未核实：所有工具均未查到自动导出后自动推送】 | 发送/终检 |

**行业级结论（维持）**：没有任何工具能做"一句话→无人值守→可发客户成片"；最少人工干预仍约 4 点（上传→筛图→筛视频→终检），API 化的价值是把"每个节点点一下"变成"批量提交+回调回收"，**筛图/筛视频这两个质量点无法被 API 替代**。

---

## 五、落地建议（E. 按本项目：线下珠宝门店、手机端为主、豆包系优先）

### 5.1 结论先行

- **字节系程序化主通道 = 火山方舟（ModelArk），不是即梦官网**：Seedream/Seedance 全部模型有官方 API，个人实名即开，价格与即梦 App 积分价同量级（10s 视频 API≈14 元 vs App≈15 元）。门店想自动化，**第一笔投入应该花在火山方舟**。
- **即梦官网自身 API（超级会员+另购）门槛过高，不碰**；BytePlus 海外版、可灵海外版、Photoroom 均有跨境支付/网络问题，**国内门店场景一律不需要**。
- **苞米AI 保持 UI**（佩戴图主力，无 API）；**剪映保持 UI**（手机端链路不变），进阶批量再上 cutsdk。
- **可灵 API 作备选**：当需要跨模型（LibTV 聚合）或多平台投放时，国内站个人实名（身份证+人脸）即可、Webhook 自动化程度与火山方舟同级。
- **LibTV 作流水线进阶**：Access Key 个人可取，会话式全自动"剧本→分镜→镜头"+批量下载，与即梦画布互补（即梦精修产品图→LibTV 跑镜头→剪映合成）。

### 5.2 分阶段路线

| 阶段 | 动作 | 说明 |
|---|---|---|
| 阶段 0（现状） | 苞米AI 佩戴图 + 即梦画布/App + 剪映，全 UI | 不引入开发，先把模特版/客户验收跑通 |
| 阶段 1（第一批 API 化，成本最低收益最大） | ① 火山方舟 Seedream 批量白底图/抠图（免费额度 50–200 张试手，0.22–0.30 元/张）；② 视频批量提交用火山方舟 Seedance 或可灵（Webhook 回调），脚本收结果 | 个人实名即可；脚本量很小；**筛图/筛视频仍人工** |
| 阶段 2（进阶流水线） | ① LibTV libtv-skills 把"剧本→分镜→镜头"会话式全自动；② 美图 OpenClaw 商品套图/抠图脚本化（美豆与 UI 共用余额池）；③ 剪映批量用 cutsdk 本地写草稿→桌面端微调 | 需一点开发能力；LibTV 模型分档注意 VIP 约束 |
| 不推荐 | 即梦官网自身 API、Photoroom、BytePlus、可灵海外 | 门槛/支付/网络不合国内门店场景 |

### 5.3 接入成本与门槛排序（低 → 高）

| 排序 | 工具 | 门槛 | 备注 |
|---|---|---|---|
| 1 | 火山方舟 Seedream/Seedance | 个人实名（扫脸/银行卡） | 免费额度试手，SDK 现成 |
| 2 | 美图设计室 OpenClaw | 个人账号登录生成 AK | 但为 Agent/MCP 框架非裸 REST |
| 3 | LibTV libtv-skills | 个人注册取 Access Key；模型分 VIP 档 | 对话式桥接，非细粒度 API |
| 4 | 可灵 Kling（国内） | 个人实名（身份证+人脸） | 资源包"积分兑人民币"价需登录控制台 |
| 5 | 剪映第三方（cutsdk/vectcut） | 需开发能力（cutsdk 免费开源；vectcut 商业） | 官方无 API |
| 6 | Photoroom | 个人可注册但需美元+国际卡，国内连通性未验证 | 仅跨境团队考虑 |
| 7 | 即梦官网自身 API | 超级会员档+另行购买 | 不建议 |

### 5.4 未核实清单（写入后续核实路径）

1. 可灵官方"1 积分=多少元"资源包零售价（需登录 app.klingai.com 控制台）【未经核实】
2. 即梦官网自身 API 服务单价（付费协议未披露，需会员中心）【未经核实】
3. 美图 OpenClaw 的"AI换装"是否在 designkit 侧实际可调（页面明示三项，新闻稿八大项，需登录实测）【未经核实】
4. 剪映"开放平台企业 API"传闻（单一 CSDN 博客，未见官方门户）【博主一方说法】
5. Photoroom 异步 webhook 配置（企业版暗示存在，公开文档无说明）【未经核实】
6. 国内直连 Photoroom API 的连通性【未经核实】
7. LibTV Access Key 对免费账号的完全开放程度（多源教程称可，官方页未逐字确认）【未经核实】
8. 苞米AI 价格/积分（沿用原口径，未核实）

---

## 六、来源汇总（完整 URL 清单）

### 火山方舟 / 即梦 / BytePlus
- 【已查证】图片生成 API：https://www.volcengine.com/docs/82379/1541523
- 【已查证】视频生成任务 API：https://docs.volcengine.com/docs/ark/create-video-generation-task-api?lang=zh
- 【已查证】模型定价表：https://www.volcengine.com/product/ark （本次复核：Seedance 2.5=70 元/M、2.0=46 元起/M、2.0-fast=37 元/M、2.0-mini=23 元/M 无视频输入档）
- 【已查证】个人开发者开通：https://www.volcengine.com/docs/6359/1279663
- 【已查证】个人/企业实名区别：https://www.volcengine.com/docs/6261/64934
- 【已查证】平台能力速览：https://www.volcengine.com/docs/82379/1108216
- 【已查证】Seedream 5.0 pro 教程：https://docs.volcengine.com/docs/82379/2582774
- 【已查证】Seedance 2.0 快速入门：https://docs.volcengine.com/docs/ark/seedance-2-0
- 【经搜索补充】Seedance 2.0 全面开放 API（企业+个人，财联社/九派新闻口径）：https://www.iesdouyin.com/share/video/7628512421606378752
- 【已查证】即梦付费服务协议（§3.10 API 服务准入）：https://lf3-cdn-tos.draftstatic.com/obj/ies-hotsoon-draft/dreamina/b966ce40-d931-4397-8def-38fe5d03c729.html
- 【已查证】即梦 AI 火山引擎产品线：https://www.volcengine.com/product/jimeng
- 【已查证】即梦 AI 图片生成 4.0 接口：https://docs.volcengine.com/docs/JimengAI/ImageGeneration40-InterfaceDocumentation
- 【已查证】即梦 AI inpainting 接口：https://docs.volcengine.com/docs/JimengAI/JimengAI-interactiveeditinginpainting-interfacedocumentation
- 【博主一方说法】即梦 API 短剧/营销 Agent 双接口、超级会员准入：https://www.iesdouyin.com/share/video/7671216916802899227
- 【已查证】BytePlus 图片生成 API：https://docs.byteplus.com/ko/docs/ModelArk/1541523
- 【已查证】BytePlus 视频生成任务：https://docs.byteplus.com/zh-TW/docs/ModelArk/1520757
- 【已查证】BytePlus 模型列表/区域：https://docs.byteplus.com/vi/docs/ModelArk/1330310
- 【已查证】BytePlus 注册与实名：https://docs.byteplus.com/id/docs/Account/sign-up-and-verify-byteplus-account
- 【已查证】BytePlus 支付方式：https://ai.byteplus.com/en/help/article/what-payment-methods-does-byteplus-support ；https://docs.byteplus.com/ko/docs/byteplus-platform/docs-managing-payment-methods
- 【已查证】BytePlus 博客 Dreamina Seedance 2.0：https://www.byteplus.com/id/blog/dreamina-seedance2-0
- 【经搜索补充】Brut 接入 Seedance 2.5：https://getbrut.app/docs/providers/seedance.html

### 可灵 Kling
- 【已查证】国内开放平台文档：https://app.klingai.com/cn/dev/document-api/apiReference/
- 【已查证】视频模型列表：https://app.klingai.com/cn/dev/document-api/apiReference/model/videoModels
- 【已查证】图生视频：https://app.klingai.com/cn/dev/document-api/apiReference/model/imageToVideo
- 【已查证】更新公告（计费/30 天清理）：https://app.klingai.com/cn/dev/document-api/apiReference/updateNotice
- 【已查证】海外文档：https://kling.ai/document-api/guides/get-started/overview ；认证 https://kling.ai/document-api/api/get-started/authentication.md ；回调 https://kling.ai/document-api/api/get-started/callbacks.md
- 【已查证】Credits 政策：https://kling.ai/docs/point-policy ；会员档 https://kling.ai/app/membership/membership-plan ；支付 https://kling.ai/docs/payment-policy
- 【经搜索补充】ReSub 对比：https://resub.xyz/archives/kling-ai-subscription-pricing-comparison/ ；Oreate AI：https://discover.oreateai.com/discover/accessing-the-kling-ai-official-login-page-and-dashboard
- 【已查证】阿里云百炼 kling-v3：https://help.aliyun.com/zh/model-studio/kling-v3-video-generation ；https://help.aliyun.com/zh/model-studio/kling-v3-image-generation
- 【已查证】京东云灵境：https://docs.jdcloud.com/cn/lingjing/kling
- 【已查证】金山云：https://docs.ksyun.com/documents/44741?type=3
- 【经搜索补充】七牛云 AI 广场：https://www.qiniu.com/ai/models

### 苞米AI / 美图设计室 / Photoroom
- 【已查证】苞米AI 官网：https://bomi-ai.com/zh/
- 【经搜索补充】搜狐新闻（凡瀚智创/凡游在线）：https://m.sohu.com/a/968749072_121935765/
- 【已查证】美图 OpenClaw：https://www.designkit.cn/openclaw
- 【已查证】美图定价：https://www.designkit.cn/pricing
- 【已查证】美豆单价：https://www.designkit.cn/help/125
- 【已查证】个人版/团队版：https://www.designkit.cn/help/61
- 【已查证】美豆购买：https://www.designkit.cn/help/104
- 【经搜索补充】美图新闻稿（八大能力模块）：https://www.meitu.com/zh/media/436 ；中新网福建 http://www.fj.chinanews.com.cn/news/2026/2026-03-24/581768.html ；光明网 https://m.gmw.cn/ksh/2026-03/24/content_38666760.htm
- 【已查证】美图母平台文生图 API：https://ai.meitu.com/doc/?id=303&type=api&lang=zh&domain=OUT ；百变滤镜 http://open.mtlab.meitu.com/doc/?id=82
- 【已查证】Photoroom 官方文档：https://docs.photoroom.com/
- 【已查证】Photoroom 定价页：https://www.photoroom.com/zh/api/startup-plan
- 【经搜索补充】Photoroom 官方论坛（计费/限流/延迟）：https://photoroom.discourse.group/t/verification-request-api-pricing-and-credit-consumption-details/379 ；https://photoroom.discourse.group/t/not-all-api-requests-successful-when-batch-processing/319 ；https://photoroom.discourse.group/t/what-is-the-latency-to-return-the-processed-image/20 ；https://photoroom.discourse.group/t/can-we-use-api-with-pro-plan/447
- 【经搜索补充】metronome 定价索引：https://metronome.com/pricing-index/photoroom-api ；directoryforai：https://directoryforai.com/tool-guides/best-ai-tools-for-background-removal/

### LibTV / 剪映
- 【已查证】libtv-skills 开源仓库（README 精读，本次复核：7 commits、1 skill、5 脚本、4 端点）：https://github.com/libtv-labs/libtv-skills
- 【已查证】官方 CLI 入口：https://www.liblib.tv/zh/cli
- 【经搜索补充】腾讯新闻：http://news.qq.com/rain/a/20260323A05VI100 ；toolin.ai（Skill 商店）：https://toolin.ai/blog/libtv-skill-hub ；UIED：https://www.uied.cn/posts/112442 ；掘金：https://juejin.cn/post/7618167131003846656 ；ClawHub：https://docs.clawhub.ai/qiuxiangxiang/skills/libtv-skill-pro
- 【博主一方说法】掘金实测（非 VIP 可用模型数）：https://aicoding.juejin.cn/post/7669268061262921791
- 【已查证】liblib.art 会员价：https://www.liblib.art/membershipInvitationBonus
- 【已查证】CapCut 官方 openapi.yaml：https://www.capcut.com/openapi.yaml
- 【经搜索补充】SamAutomation（CapCut 无公开服务端 API）：https://samautomation.work/capcut-api/
- 【已查证】npm cutsdk：https://www.npmjs.com/package/cutsdk （仓库 github.com/m007/cut_sdk）
- 【经搜索补充】腾讯云社区（capcut-mate）：https://developer.cloud.tencent.com/column/106223 ；SegmentFault https://segmentfault.com/a/1190000047734509
- 【博主一方说法】抖音（capcut-mate 31 API/star1.2k）：https://www.iesdouyin.com/share/video/7660113809540910363
- 【经搜索补充】JianYingAPI/流光剪辑：https://jianyingapi.apifox.cn/ ；https://docs.vectcut.com/
- 【博主一方说法】CSDN（剪映开放平台传闻，未获官方证实）：https://blog.csdn.net/InstrIsle/article/details/163042364

---

## 七、查证状态总览与口径差异

| 结论 | 状态 |
|---|---|
| 火山方舟提供 Seedream/Seedance 官方 API，个人实名直开 | ✅ 已查证（官方文档 + 本次复核定价页） |
| 火山方舟 API 价与即梦 App 积分价同量级（10s≈14 vs 15 元；30s≈78 vs 84 元） | ✅ 已查证官方价 + ⚠️ token 换算是推算 |
| 即梦画布不开放外部 API/Skill；底层模型经火山方舟开放 | ✅ 已查证（底稿 + 官方付费协议） |
| 即梦官网自身 API = 超级会员 + 另行购买 | ✅ 已查证（付费协议 §3.10） |
| 可灵国内/海外双站官方 API，个人可开 | ✅ 已查证（官方文档）+ ⚠️ 白名单是否存在未核实 |
| 可灵官方"积分兑人民币"资源包价 | ❌ 未核实（需登录控制台） |
| 苞米AI 无官方 API | ✅ 经搜索补充（官网无入口 + 多关键词零命中 + 无第三方封装，三重交叉） |
| 美图 OpenClaw 个人可开、美豆与 UI 共用池 | ✅ 已查证（官方页面） |
| Photoroom API 标准可用但需跨境支付 | ✅ 已查证（官方文档/定价）+ ❌ 国内连通性未核实 |
| **libtv-skills 开源仓仅 1 个桥接 skill（更正 2026-06 底稿"100+ Skill"口径）；100+ Skill 实为 2026-07-14 上线的画布内 Skill 商店** | ✅ 已查证（GitHub README 本次复核 + 第三方报道） |
| 剪映/CapCut 无官方剪辑开放 API，第三方 cutsdk/vectcut 为现实路径 | ✅ 已查证（官方 yaml）+ ⚠️ 剪映开放平台传闻未获官方证实 |

---

> 附：本文档为调研底稿（09_调研底稿与素材/），不含最终选型结论；整合进《工具选型参考.md》时请保持四档来源标注与来源 URL 完整。更新频率：工具 API/价格变更时更新。
