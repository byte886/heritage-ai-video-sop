# 抖音+小红书双平台收藏综合提炼与补调研（2026-10-05）

> 原料：抖音收藏 43 条（A 类 28 条已逐条解析，batch1+batch2）+ 小红书收藏 28 条（已抓列表）
> 方法：视频效果分析 SOP + Google/官网/专业站点补调研（补足收藏信息缺口）
> 目的：为「金项链嵌蓝宝石改款（方案3 LOVE扣环+3mm皇家蓝）→ 线下客户可接受的 AI 效果图+展示视频」沉淀可用方法体系
> 来源标注四档：已查证 / 经搜索补充 / 博主一方说法 / 未经核实

---

## 一、两平台收藏画像

### 抖音收藏（byte886）
- 43 条实际收藏：A 类 AI视频生成 28 条（全部解析✅）｜ B 类珠宝运营 11 条（暂缓）｜ 无关 4 条
- A 类特征：**方法/工具型为主**（反推提示词、视频转绘、动作捕捉、Skill 批量、成本压缩、数字人、配音）

### 小红书收藏
- 28 条：**珠宝+AI 7 条（核心）**｜ AI 视频/AI 工具 6 条｜ AI 技术教程 2 条｜ 无关 13 条（web3/英语）
- 小红书特征：**行业向、审美向**（模特图棚拍质感、珠宝大片、设计入门、变现排名）——与抖音的"工具操作型"互补

> 两平台互补关系：抖音给"怎么操作"（工具+提示词+工作流），小红书给"珠宝行业怎么用"（案例+审美+变现路径）。

---

## 二、工具链地图（两平台收藏 + 补调研汇总）

| 环节 | 工具 | 来源 | 备注 |
|---|---|---|---|
| 珠宝生图/佩戴图 | 苞米AI（bomi-ai.com） | 官方+抖音收藏A9/A11+Google | 一键佩戴、大小可调、8K下载、多品类；免提示词模板（已查证功能，价格未核实） |
| 珠宝生图（备选） | 即梦 seedream 5.0 Pro | 用户截图经验+抖音A2/A12 | 细腻皮肤肌理、哑光面部光影、人物神态叙事张力（官方blog，已查证） |
| 生图（国际） | Nano Banana Pro / Midjourney / 即梦 | Google（tiktok-ai-model-generator skill） | Claude 生成 JSON prompt → Nano Banana 生图 → Veo/Kling 动起来 |
| 视频生成 | 即梦 Seedance 2.0 Fast / 2.0 / 2.5 | 知识库第十章+收藏 | 2.0 Fast 10s≈140积分（抽卡量产最便宜，极目新闻已查证）；2.5 支持5-30s+音频、4K；**2.0系列不支持真人人脸正脸**（官方红字，已查证） |
| 视频生成（备选） | 可灵 Keling | 知识库第九章 | 珠宝微距运镜推荐 |
| 电商全流程 | Flovaai / 星璨 / 创觉珠宝AI / 小云雀AI | 抖音A2/A4/A12/A11+经济日报 | 星璨：40s生成5图、3分钟1视频、成本降96%（经济日报已查证）；Flovaai 4K Skill |
| 配音 | VoxCPM2（开源）/ minimax / fish audio | 抖音A19/A18 | VoxCPM2：30语言克隆、48kHz、免费（已查证）；珠宝口播降本 |
| 剪辑 | 剪映 | 知识库第十章 | 自动字幕/踩点/BGM |
| 自动化 | 即梦画布/LibTV/Coze/Codex | 抖音A8/A13/A18+A23+Google | 脚本节点/一个Skill全流程/Coze复刻爆款/Codex数字人 |
| 学习复刻 | Livetv 克隆作品 | 抖音A23 | 导出大神提示词+图片，免费（已查证） |

---

## 三、方法链提炼（核心可复用资产）

### 3.1 提示词体系（珠宝专用，补调研核心成果）

**① Seedance 产品视频 Motion Prompt 公式**（seedance-25.ai，已查证）
```
[Camera movement] + [Subject action] + [环境/光影/质感] + [保持约束]
```
- 拒绝泛化提示（"show the product"=平庸），必须显式：运动+运镜+环境
- 保持约束示例："no deformation of the product, preserve exact shape from [Image1], no distortion, no extra elements, logo sharp"

**② 珠宝镜头焦距规范**（aitoolsguidebook，已查证）
| 镜头 | 用途 |
|---|---|
| 100mm 微距 | 戒指/链条/镶爪细节（火彩、金属纹理） |
| 50mm | 产品与环境关系（piece-in-context） |
| 85mm | 模特佩戴 |

光线：**单一硬聚光灯（single hard spotlight）**，指定方向——珠宝高光/火彩最佳拍法

**③ Luxury product reveal 模板**（seedance-25.ai prompt guide，已查证，珠宝/手表/香水通用）
```
Use the uploaded [product] packshot on [premium surface]. Macro shot with one slow push-in
while a narrow [warm/cool] key light moves across [material]. The background remains still
for [duration] seconds. Keep the product shape, cap, label placement, and color unchanged;
no hands or added objects.
```

**④ 珠宝电商提示词模板（可变量填充）**（seedance2.today，已查证）
```
Use the uploaded image as the hero subject. Create a slow camera orbit on [surface type]
with [lighting style]. Maintain exact colors and details from the image. Add [specific effect].
Premium, cinematic feel with [audio style].
```
变量示例：戒指 → "dark velvet surface" + "soft top-down spotlight" + "subtle sparkle"

**⑤ 图像生视频核心原则**（seeddance.io + floyo + seedance2pro，已查证）
- 首帧承载视觉信息，**提示词只描述运动/运镜/结尾**，不重画场景
- 珠宝锁定：1 首帧 + 最多 6 张参考图（多角度/火彩/光线），prompt 按编号指向参考图
- 快速迭代：**先用 2.0 Fast 草稿，选中后再用 2.0/2.5 出精修**（省钱+省时间）

### 3.2 珠宝大片工作流（两平台+补调研交叉验证）

**LV 珠宝大片 6 步法**（抖音 7671231268248890085，博主一方说法，逻辑自洽）
1. **确定画面主题**：一句话方向（"年轻男女模特、复古豪宅舞会、微醺暧昧氛围"）——锚定全局风格
2. **准备 3 类素材**：产品细节图（锁版型/材质）+ 氛围图（锁色调/情绪，2-3张）+ 场景图（锁环境）——**图片宁缺毋滥，风格差异过大会让AI混淆**
3. **GPT/Gemini 拆图**：让 AI 提炼视觉语言（灯光/构图/色彩）→ 节约抽卡成本
4. **整理提示词升图**
5. （后续）分镜提示词 → 视频生成

**Coze 复刻爆款带货视频**（抖音 7645208431816674575 + 博客园扣子8步工作流，已查证+一方说法）
拆解对标视频 → 抽帧 → 提取分镜提示词 → 生成自己产品的分镜提示词 → 生成分镜画面 → 生成视频 → 成片
（豆包 2.0 pro 大模型节点生成九宫格分镜提示词）

**11 图控 30 秒腕表广告（Seedance 2.5 全能参考）**（抖音 7669835795649344923，一方说法）
Skill 分镜广告片关键帧 → 5.0pro 生成关键帧 → 11 张参考图（产品图锁腕表+人物图锁角色+镜头参考图锁构图/灯光/视觉风格）+ 环境图 + BGM → 30 秒一次性成片
官方上限：30 图/10 参考视频/10 参考音频（合计≤50 份素材）

### 3.3 真人感/活人感（模特场景，此前已沉淀）

- 活人感：即梦 SD2.5 图生视频 + 完整正负提示词（第一视角怼脸特写/细碎胎毛刘海/微表情/真实呼吸感/柔和漫射光 + 负面:塑料皮肤/磨牙/AI崩坏）——梳子玩Ai（432e4c3）
- 人物真实五件套（A8）：5.0模型 + 人像质感调节 + 情绪调节 + 虚拟角色库 + 3D导演台 + 脚本节点
- 数字人三要素（A17）：中近景正面写实图 + 情绪丰富声音 + 动作描述
- 佩戴替代（A14）：上传参考图+提示词 → 生成与人物佩戴大小匹配的视频（批量、免真人拍摄）

### 3.4 小红书珠宝收藏详情核心提炼（2026-10-05 实抓 5/7 条成功）

**① AI如何正确【参考】灵感图**（雷雷雷克斯AI，AI辅助珠宝设计思路+提示词方法，已查证）
- 核心：给 AI 灵感图 ≠ 让 AI 照抄；要用提示词引导"参考"思路（提取灵感图的色彩/材质/造型语言 → 转化为珠宝设计元素）
- 案例：灵感图（粉色晶体岩石+小白花）→ AI 生成的戒指（玫瑰金基底+粉色主石+白花造型+碎钻绿宝点缀）
- 对项目价值：客户若给参考图（如某款蓝宝石首饰），可用此法"参考"改款设计

**② 两步直出手串佩戴图**（雷雷雷克斯AI，已查证）
- 【我给AI的】= 产品平铺静物原图 →【AI给我的】= 佩戴在手腕的效果图（自然居家场景）
- 要点：原图保真（形状/配色/串珠次序不变），AI 只补"佩戴的人与环境"
- 对项目价值：与苞米AI"一键佩戴"互补——通用生图工具也能两步出佩戴图，不依赖专用平台

**③ GPT-6 Astra 在 Blender 建模珠宝戒指**（禧吒吒，已查证）
- 方向：大模型直接生成 3D 珠宝建模（Blender 脚本/操作）——珠宝建模自动化新方向，收藏 97（高于点赞，说明"留着学习"属性强）
- 对项目价值：远期可做 3D 建模→渲染视频，但当下非主线（实物改款以实拍/AI 图为主）

**④ 6大AI技术变现难度排名**（珠宝打工喵，已查证+评论区互动）
- 笔记方向：珠宝行业 6 大 AI 技术按变现难度排名（图在视频中，未逐帧）
- 评论区关键洞察（博主发起）："你用国内的豆包工作还是 workbuddy？还是国外的 ai?"——**珠宝老板实操工具 = 豆包工作 vs WorkBuddy 两派**（与知识库"WorkBuddy 是腾讯办公 Agent 不在此链路"的结论一致，博主语境下两者都被当办公+AI工具用）

**⑤ 太后珠宝·AI短剧"你会选择哪位为妃"**（已查证）
- 方向：**AI 短剧+翡翠珠宝**（人物选妃剧情展示翡翠）——珠宝叙事/故事感片子的行业案例，收藏 492 高
- 对项目价值：为"故事感珠宝片"提供参考形态（剧情化展示替代直白展示）

**⑥ 翡翠种底的形象描述**（熬夜等财神，已查证）
- 方向：翡翠 AI 视觉化（把"种底"等专业概念用 AI 图像具象化）+短视频
- 对项目价值：**专业概念视觉化**——给客户讲解"蓝宝石净度/火彩"时可用同思路

> 太后选妃+翡翠种底两个视频的**完整效果分析**（叙事/情绪弧线/镜头语言/可复用提示词）+B 类工具内容提炼（GPT-6 Astra 驱动 Blender 建模实证/vgo.pub/FireCrawl/OCR 神器/Manim 教程）→ 见 `xhs_jewelry_videos_effect_analysis.md`

### 3.5 成本策略（两平台共识）

- 抽卡量产：Seedance 2.0 Fast 10s≈140积分（极目新闻，已查证）
- 超分提质感：480p/720p 生成 + Flovaai 4K 超分（A2/A4，博主一方说法+生态互证）
- 星璨参照：效率提升90%、成本降96%（经济日报，已查证）
- 苞米AI 积分价格：官方未公开，博主称"活动几块钱薅几百上千积分"（7649712759688531242，一方说法，未核实）

---

## 四、珠宝专项落地映射（金项链嵌蓝宝石改款 → 客户可接受成片）

### 4.1 无模特版（产品展示，先做）
1. 实物图（黑底项链原图）→ **图生图保真优化**（seedream 5.0 Pro：金属质感+蓝宝石火彩+台面倒影）
2. 产品微距 5 要素验收：火彩/金属/镶爪/背景/台面倒影
3. Seedance 2.0 Fast 图生视频，提示词用 **Luxury reveal 模板**：
   - 首帧：项链平铺 premium surface（黑色丝绒）
   - 运动：slow push-in / 慢速环绕，窄光束扫过金属与蓝宝石
   - 保持约束：形状/颜色/宝石位置不变，no hands
4. 验收：产品不变形、火彩自然、无多余元素

### 4.2 模特版（佩戴展示，客户决策用）
1. 佩戴图：苞米AI 一键佩戴（或美图设计室模特四要素：女/青年/中国人/标准）——**真人感换 SD2.5**
2. 佩戴验收 4 项：链条无变形/五官自然/手部自然/吊坠居中
3. 视频：SD2.5 图生视频（锁骨+侧脸方案不受人脸限制）→ 剪映成片
4. 叙事参考：排名/对比（A27）+ 人物资产（A27）+ 6步法 3 类素材锁定

### 4.3 客户沟通用片建议
- 先出 2-3 秒微距火彩镜头（蓝宝石是主角，展示镶嵌工艺）
- 再出佩戴场景（客户关注上身效果）
- 第三版可做 30 秒广告级（若客户对价格敏感，用星璨式成本叙事）

---

## 五、尚未核实/待补项（诚实清单，2026-10-05 补调研后更新）

1. ~~苞米AI 积分价格与套餐~~ → **已补充**：博主称"活动几块钱薅几百上千积分"（7649712759688531242/7648981957115645227，一方说法）；功能进一步证实：预设模板免提示词/自由控珠宝大小佩戴位置/详情页/大片视频（7675313360489024768，一方说法）
2. ~~Seedance 2.5 国内非会员是否直开~~ → **已核实**：即梦会员可直接使用（限时积分 5.4 折），**豆包专业版已上线**（腾讯新闻 2026-08-02）；即梦网页版/App 已上线原生 30s+最长 3 分钟长镜头（beta）+50 多模态参考+R2V 动作控制+局部编辑+4K（即梦官方 jimeng.jianying.com/tools/seedance-2-5；字节 Seed 官方 blog）；第三方定价参考：Seedance 2.5 ≈184 积分/4s、2.0 ≈92 积分/4s（Creaa）
3. 抖音收藏中 A15/A16/A24/A26/A28 无章节要点，按标题+话题记录（未经核实）
4. ~~小红书 7 条珠宝收藏的图文详情正文（token 抓取受风控）~~ → **已突破**：v6 方案成功 11/13（5 条珠宝核心全部拿到，见 3.4 节与 xhs_favorites_inventory_20261005.md）；仅 2 条（设计入门/模特图3步）未获
5. ~~小红书"AI一键直出珠宝大片"作者具体工具栈~~ → **已补充**：作者展示的方法＝通用生图工具"参考灵感图法+两步直出佩戴图"，工具栈未明示（仍标注未核实）
6. **新增**：GPT-6 Astra 驱动 Blender 建模（小红书 6aa0fe35）→ **已获官方背书**：OpenAI 官方发布（BenchCAD 95.9% 3D 重建）、真实 computer-use 操控 Blender 建模/骨骼/动画、连 Unreal Engine 5（官方页+Modern Creator/Habr 实测）；三种连接方式＝电脑操控/脚本驱动/MCP 协议（华为云）。博主演示（23m44s 建模祖母绿戒指）与官方能力一致，可信度高

## 附注：小红书收藏详情抓取过程记录（v6 突破后更新）

- 列表抓取成功（28 条，技能 favorites 子命令）
- **详情抓取 v6 方案（2026-10-05 实测 11/13 成功）**：①收藏页滚动加载直到目标 `section.note-item[data-note-id]` 出现（每轮 2000px/1.8s，≤12 轮）→ ②同一 evaluate 内 scrollIntoView+点击**可见** a → ③等 URL 含 xsec_token（新 tab 需切换）→ ④**当前页内联提取**（不再 goto 二次访问，token 二次访问会渲染为空）
- 失败教训：点击隐藏 a 触发 sec_ 风控 404；裸 ID 直开 300031；2 条收藏（6a64b99c 设计入门/6a954a5f 模特图）滚动 22 轮+搜索均未出现（疑虚拟渲染差异），已止损，方法论由 Google 调研覆盖
- 经验沉淀：已验证方案已补进技能 `multiplatform-media-fetch/references/xiaohongshu.md`（commit 60f32cd）

## 来源索引（关键）

- 苞米AI 官方：https://bomi-ai.com/zh/
- 苞米AI 功能/积分（抖音博主）：https://www.iesdouyin.com/share/video/7675313360489024768
- GPT-6 Astra 官方（BenchCAD 95.9%）：https://openai.com/gpt-6-astra/（页面标题 "GPT-6 Astra: A new generation of intelligence"）
- GPT-6 Astra×Blender 三种连接方式（华为云）：https://bbs.huaweicloud.com/blogs/489651
- Seedance 2.5 即梦官方：https://jimeng.jianying.com/tools/seedance-2-5
- Seedance 2.5 字节 Seed 官方发布：https://seed.bytedance.com/zh/blog/一镜成片-随心参考-seedance-2-5-正式发布
- Seedance 2.5 即梦会员直用/豆包专业版上线（腾讯新闻）：http://news.qq.com/rain/a/20260802A07GF700
- 极目新闻（Seedance 2.0 Fast 成本实测）：http://hb.dzwww.com/p/p1dYRDUMQG7.html
- 经济日报（星璨 效率/成本）：https://www.jingjiribao.cn/static/detail.jsp?id=663085
- Seedance 提示词公式：https://www.seedance-25.ai/blog/seedance-product-demo-video-guide-2026
- 珠宝提示词模板：https://www.seedance-25.ai/blog/seedance-video-prompt-guide
- 珠宝镜头焦距规范：https://aitoolsguidebook.com/en/articles/jewelry-fashion-video-prompts/
- 电商珠宝变量模板：https://www.seedance2.today/blog/how-to-create-ai-product-videos-ecommerce-seedance-2-0-2026
- 珠宝场景动画工作流：https://www.floyo.ai/workflows/seedance-2-0-for-jewelry-scene-anima-tz0wx2qpvyog
- 图生视频原则：https://www.seeddance.io/blog/seedance-2-5-image-to-video
- Coze 复刻流程：https://www.cnblogs.com/miheyishan/articles/20262833
- LV 珠宝大片 6 步：https://www.iesdouyin.com/share/video/7671231268248890085
- 11图控30秒腕表广告：https://www.iesdouyin.com/share/video/7669835795649344923
- 抖音收藏两批解析：douyin_favorites_analysis_batch1.md / batch2.md
