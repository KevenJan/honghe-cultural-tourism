# 红河同路 · 设计 PROMPT（v3）

> v3 是合并修订版，取代 v2 和 v2.1 的分散写法。改动来源见 07 号文件，主要有五处：
> 1. 研学模块界面名统一为「**同心石榴**」，副标题「交往交流交融 · 研学」；「民族融合」只作内部主题词，**不写进任何界面文字**。
> 2. 领礼不再写「实名」，改为「**证件登记 + 柜台核对证件原件**」；店员端状态「未实名」改为「**未登记证件**」。
> 3. 打卡成功文案按实际籽数写：「撒玛坝这一瓣亮了 · **2 颗籽可以认识，3 颗正在整理**」。
> 4. 一期「问驮驮」只做审定问答检索，界面上不出现「AI」字样。
> 5. 19 屏全部重写，每屏都给了**逐字文案**；图像模型生成的中文常有错字，出图后必须按第 E 节校对。
>
> 本文件分五部分：
>
> | 部分 | 给谁 | 内容 |
> |---|---|---|
> | A | 界面 / 原型工具（Figma AI、即时设计、MasterGo AI、v0 一类） | 整体产品 PROMPT |
> | B | 图像模型（GPT Image、Midjourney、即梦、可灵一类） | 风格总纲 + 19 屏分屏 PROMPT + 总览板 |
> | C | 图像模型 | 吉祥物、插画、图标、印章、石榴等独立素材 |
> | D | 出图同学 | 色键底出图、抠图、导出规范 |
> | E | 评审 / 校对 | 出图后校对清单与常见错误 |
>
> 每条都写了「必须」和「禁止」。复制时不要删掉禁止项——这些是文化、政策与安全边界，不是风格偏好。

---

## A. 整体产品 PROMPT（给界面 / 原型工具）

```text
你是资深微信小程序产品与 UI 设计师。请设计文旅小程序「红河同路」，副标题「各族同路走，好物一路带」，服务云南省红河州红河县。

【产品】
一条可顺可逆的四站实景长廊：
- 迤萨路口：高速出口后的访客停车场与游客中心；
- 马帮侨乡森林公园：森林—村寨—梯田—水系，防火重点区域；
- 马帮古城：迤萨镇东门街，国家 4A、国家级文物保护单位；
- 撒玛坝梯田：宝华镇，国家 4A，世界文化遗产红河哈尼梯田组成部分。
每站流程：到达打卡（点按钮时只取一次定位）→ 约 3 分钟内容（卡片 + 可离线音频）→ 3 道题（答对 +10；答错先看讲解，再点「我记住了 +3」）→ 记下这一站（徽记点亮）→ 这站好物。
同路分只换称号和官方礼品，不能抵现金、不能在商城抵扣。礼品每个证件每年一次，取当时最高一档：游客先在「常用游客」登记姓名和证件号，柜台店员核对证件原件后，扫游客的动态领礼码（30 秒刷新）发放。
商城「一路好物」只卖本地农特产和文创，每件商品都有来源档案（生产者、村寨、采收时间）。

【主题】各族交往交流交融就在日常生活里：同一条路、同一沟水、同一片田、同一张桌、同一首歌、同一双手。普通话为主；增进共同性，尊重差异性。

【底部五个标签】首页 / 四站 / 问驮驮（中间凸起的圆形吉祥物按钮）/ 好物 / 我的。

【01 首页】
- 顶栏：字标「红河同路」+ 同路分胶囊 +「中 / EN」切换，右上留微信胶囊位。
- 插画大图轮播：只放季节、县里正式发布的活动、开放提醒。
- 2×4 插画图标宫格：到达打卡、四站、同心石榴、问驮驮、领礼、一路好物、服务地图、研学团队。
- 单行公告条：森林公园防火提示置顶，用安全橙。
- 今日开放；四站横滑插画卡（无编号，用一条虚线马帮道串起来）；「这季在红河」一大两小拼图；「为您推荐」双列商品卡。

【02 四站】整幅水彩插画大卡，左上主题角标，宋体站名，一句话，右侧「看这一站」按钮；右上角「服务地图」。

【03 站点页】深田青主题大卡 + 竹黄拱形字牌（单个汉字：路 / 水 / 古 / 田）+ 梯田等高线彩条；一行「约 3 分钟 · 完成可得 30 同路分 · 内容已审定」；页签：导览 / 听一听 / 答一答 / 来源；底部固定主按钮「到达打卡」，点了进入 12 号屏。

【04 答一答】进度三点；题卡；四个大号选项按钮；答错时翻出讲解卡，看完后按钮变为「我记住了 +3」。无倒计时、无排行榜。

【05 记下这一站】徽记从线描变填色；本站得分、累计同路分、现在可领第几档；三个出口：去领礼 / 看这站好物 / 下一站怎么走（只给距离和停车点，不导航）。

【06 我的】中性旅人头像（无民族服装）+ 登录；深田青「同路卡」（称号、同路分、四站徽记、「现在可领第 X 档」）；两张大卡「我的订单 / 常用游客」；「我的服务」列表：我的足迹（同路册）、我的礼品、离线包、电子发票、现场礼仪、意见反馈、服务 / 救援 / 投诉电话、关于与审定单位、设置；只有绑定的店员可见「切到店员工作台」。

【07 领礼码】大二维码，30 秒刷新；「领取人 张** · 证件后四位 2381」；档位；「领礼时请带证件原件 · 今年只能领一次」。

【08 一路好物】分类标签：为您推荐 / 梯田红米 / 茶与山货 / 手作文创 / 按站看；双列卡：图、宋体品名、红色小字出处（如「撒玛坝的田里来」）、两个标签、价格、「看看」。

【09 商品详情】大图、单一价格（不划线）、规格、页签「商品详情 / 来源档案 / 购买须知」、底部「购物车 / 加入购物车 / 立即购买」。

【10 服务地图】筛选标签：停车场 / 厕所 / 服务柜台 / 医疗点 / 充电桩；只标服务点，点了调用微信地图，不画路线。

【11 店员工作台】深墨底：柜台名、今日已发放、各档库存、大号「扫领礼码」；结果状态：可发放、已发放、今年已领、码已过期、本柜台无此档、库存不足、未登记证件、网络异常。确认发放前必须勾选「已核对证件原件姓名和后四位」。

【12–15 到达打卡】独立全屏流程：
- 12 打卡页：必须先选「我已停稳 / 我是乘客」，再点大圆按钮「我到了」。
- 13 确认位置：只取一次定位。
- 14 打卡成功：盖印章，石榴里这一站的瓣亮起。
- 15 没打上时：四种状态——还没到、请停稳、信号弱（扫桩码）、今年已打过——每种都给下一步，不出现「失败」二字。

【16–19 同心石榴】一颗石榴，四瓣是四站，每瓣里有同样大、同样颜色的五颗命名籽（汉族、哈尼族、彝族、傣族、瑶族，世居五族），其余小籽代表生活在红河的其他各族群众。
- 打卡后这一瓣亮起。点一颗籽，它放大到屏幕中央，其余四颗围在四周，用金线相连，表示同地共生。
- 籽详情页签：非遗 / 一句话 / 答一答 / 来源；底部固定一栏「和谁一起」。
- 没有审定内容的籽显示「整理中」，不隐藏。

【视觉】
- 色板：米纸底 #F6F1E8；卡片素白 #FFFDF9；主按钮红土赭 #A8452F；深田青 #1E4B48 做主题大卡；水田青 #2F7A78；竹黄 #D9A441 做字牌与强调；墨 #22201C；灰岩 #6E6A63；安全橙 #D9622B 只用于安全；石榴籽宝石红 #B8323A；石榴内膜 #F3E6D3。
- 字体：标题思源宋体，正文思源黑体，正文 ≥15pt。
- 形态：圆角 16–24，阴影极淡；插画为淡彩水彩风。
【尺寸】375×812 逻辑像素，顶部保留微信胶囊按钮位。

【禁止】
- 界面任何位置出现「民族融合」「融为一体」「同化」字样（统一用「交往交流交融」「同心石榴」）；
- 单独的民族列表页、民族图鉴、民族字牌（如「哈」「彝」），按人口给籽排大小或配不同颜色；
- 整套民族服装换装、奕车整套服装；
- 未审定的族语、祭祀、族源、迁徙内容；把开秧门、仰阿娜、长街宴标成「非遗」；
- 乐作（舞）和哈尼多声部（唱）合并成一张卡；
- 首页商业广告和外链；
- 在高速匝道、路肩画停车或打卡点；站与站之间、梯田田埂上的导航线路；
- 撒玛坝出现樱花；
- 积分出现「抵扣」「提现」「兑现金」字样；排行榜、倒计时、抽奖；
- 「实名认证」「人脸识别」字样（一期只做证件登记）；
- 「AI」「智能问答」字样（一期问驮驮只检索审定问答）；
- 望江亭画成已建成的景点（尚在建设中）。
```

---

## B. 视觉 PROMPT（给图像模型）

### B0. 风格总纲（每条分屏 PROMPT 前都拼上）

```text
WeChat mini-program UI design, high-fidelity mockup, iPhone frame 375x812, Simplified Chinese interface,
cultural tourism app for Honghe County, Yunnan. Warm rice-paper background #F6F1E8, white cards #FFFDF9 with very soft shadow,
rounded corners 16-24px, primary button terracotta red #A8452F pill shape, deep paddy teal #1E4B48 hero cards,
accent bamboo gold #D9A441, ink text #22201C, secondary grey #6E6A63, pomegranate seeds ruby #B8323A.
Song-style serif Chinese headings, clean sans body text, large readable type for outdoor use.
Soft watercolor illustrations of Hani terraced rice fields, old caravan town arcades, forest and water.
Decorative motif: thin parallel contour lines of terraced fields in four colors (terracotta, gold, teal, grey).
Golden arch-shaped badge with one serif Chinese character. Mascot "驮驮": a small friendly chestnut caravan pony
with a brass bell on a red cord and a bamboo back basket of red rice and tea, no ethnic costume.
Calm, generous whitespace, no clutter. Render every Chinese string EXACTLY as quoted; if unsure, leave a blank grey bar instead of inventing characters.
```

**通用负面词（Negative，每条都拼上）**

```text
no ethnic costume dress-up, no ethnic group gallery, no ethnic labels or characters like 哈 彝 傣 on badges,
no text "民族融合", no cherry blossoms on terraced fields, no advertising banners, no leaderboard, no countdown timer, no lottery,
no navigation route lines on mountains or rice terraces, no highway ramp parking, no neon, no 3D glossy, no heavy gradients,
no garbled or invented Chinese characters, no English lorem ipsum, no "AI" label.
```

> 生成图里的中文**必定会有错字**。PROMPT 里把每段文字都写全，减少模型自由发挥；最终交付给甲方和前端的界面文字，以 HTML 重绘稿（`presentation/`）和 02、06 号文件为准。

### B1. 01 首页

```text
[B0] Home screen. Top bar: serif logo "红河同路", small subtitle "各族同路走，好物一路带", gold pill "64 同路分", small pill "中/EN", WeChat capsule at top right.
Hero carousel: watercolor of Samaba terraces filled with water in winter mirror light, label "撒玛坝 · 灌水季 11月—次年4月", gold button "看这一站".
2x4 grid of illustrated icons on cream tiles with labels exactly: 到达打卡, 四站, 同心石榴, 问驮驮, 领礼, 一路好物, 服务地图, 研学团队.
(the 同心石榴 icon is a small split pomegranate with ruby seeds)
One-line notice bar, speaker icon, safety orange: "森林公园防火期 · 请勿携带火种".
Section "四站长廊" horizontally scrolling illustrated cards joined by a dashed caravan trail: 迤萨路口, 森林公园, 马帮古城, 撒玛坝梯田.
Section "为您推荐" two-column product cards: "梯田红米 2kg ¥39", "竹编杯垫 ¥28".
Bottom tab bar: 首页 (active), 四站, center raised round pony-avatar button 问驮驮, 好物, 我的.
```

### B2. 02 四站

```text
[B0] Destination list screen titled "四站", top right link "服务地图".
Four large full-width watercolor cards stacked, each with a small corner tag, serif title, one-line description, terracotta button "看这一站":
1) tag "同一条路" title "迤萨路口" desc "从这里进红河" — visitor parking and visitor center after a highway exit;
2) tag "同一沟水" title "马帮侨乡森林公园" desc "大家共用一沟水" — forest, stream and village;
3) tag "同一条街" title "马帮古城" desc "出门的人和等的人" — arcaded Sino-Western houses on a hillside town;
4) tag "同一片田" title "撒玛坝梯田" desc "同一片梯田，同一张长桌" — layered terraces with villages and mist.
Small grey line under each: "停车：访客停车场". Same bottom tab bar, 四站 active.
```

### B3. 03 站点页（撒玛坝）

```text
[B0] Site detail screen "撒玛坝梯田". Deep teal hero card, serif headline "同一片梯田，同一张长桌", gold arch badge with character "田", four-color terrace contour stripes at bottom right.
Info line: "约 3 分钟 · 完成可得 30 同路分 · 内容已审定".
Segmented tabs: 导览 (active), 听一听, 答一答, 来源.
Content cards: "开秧门：大家一起下田" tag "节令活动" with small watercolor; "乐作是跳的，多声部是唱的" with two separate audio rows "听乐作" and "听多声部".
Fixed bottom terracotta pill button "到达打卡" (no checkboxes on this page).
```

### B4. 04 答一答

```text
[B0] Quiz screen, header "答一答 · 撒玛坝". Progress dots 2/3. Question card: "撒玛坝梯田的水，主要从哪里来？".
Four large option buttons exactly: "A 山顶的森林", "B 山下的河", "C 雨季的雨水", "D 抽水机".
Option B outlined terracotta (wrong), option A filled paddy teal with a check mark (correct).
Explanation card slides up: "森林在上，村寨在中，梯田在下，水从林里来，顺着水沟一层层流下去。" small line "来源：红河县文化馆 · 已审定".
Button "我记住了 +3". No timer, no leaderboard.
```

### B5. 05 记下这一站

```text
[B0] Result screen "记下这一站". A round gold terrace badge turning from line art to filled.
Three stats: "本站 26 分", "累计 64 同路分", "现在可领第二档".
Three stacked buttons: terracotta "去领礼", white "看这站好物", white "下一站怎么走".
Small grey line "下一站：马帮古城 · 约 38 公里 · 停车：东门街停车场".
```

### B6. 06 我的 + 同路卡

```text
[B0] Profile screen. Neutral traveler avatar (no ethnic costume) with small accessories: a horse bell and a terrace-pattern scarf, name "微信用户".
Deep teal card "同路卡": title "红河同路人", "64 同路分", four station badges labeled "路口" "森林" "古城" "梯田" (two filled, two outlined), gold button "现在可领第二档 · 出示领礼码".
Two big cards side by side: "我的订单" and "常用游客".
List "我的服务": 我的足迹, 我的礼品, 离线包, 电子发票, 现场礼仪, 意见反馈, 服务/救援/投诉电话, 关于与审定单位, 设置.
Bottom tab 我的 active.
```

### B7. 07 领礼码

```text
[B0] Screen titled "领礼码". Large QR code centered on a white card, small text "28 秒后自动刷新".
Line "领取人 张** · 证件后四位 2381". Tier label "第二档 · 同路礼".
Three gift chips with tiny illustrations: 红米小礼盒, 竹编杯垫, 本地茶小样.
Gold notice: "领礼时请带证件原件 · 今年只能领一次 · 再走一站可领第三档".
Buttons: secondary "我再走一站", primary "就领这一档".
```

### B8. 08 一路好物

```text
[B0] Shop screen "一路好物". Category chips: 为您推荐 (active), 梯田红米, 茶与山货, 手作文创, 按站看.
Two-column product cards with real-looking product photos on linen:
"梯田红米 2kg ¥39" red line "撒玛坝的田里来" tags "耐储" "可寄";
"竹编果篮 ¥88" red line "马帮古城手艺人"; "傣族土陶小杯 ¥46"; "八角 500g ¥32" red line "森林公园山货". Button "看看" on each card.
```

### B9. 09 商品详情

```text
[B0] Product detail screen. Large photo of red rice in a bamboo basket on a terrace ridge.
Serif title "撒玛坝梯田红米 2kg", single price "¥39" (no strikethrough). Spec row "已选：2kg 真空装".
Tabs: 商品详情, 来源档案 (active), 购买须知.
Source record card: "生产者 宝华镇 xx 农民专业合作社", "产地 宝华镇撒玛坝 xx 村", "采收 2026 年 10 月", "配送 寄回家 / 柜台自提".
Bottom bar: cart icon with badge 2, light button "加入购物车", terracotta button "立即购买".
```

### B10. 10 服务地图

```text
[B0] Screen titled "服务地图". Filter chips: 全部 (active), 停车场, 厕所, 服务柜台, 医疗点, 充电桩.
A soft, simplified watercolor map of Honghe County with only round service pins (P, WC, counter, cross), NO route lines.
Bottom sheet card: "撒玛坝观景台停车场 · 约 120 个车位 · 07:00—20:00", button "用微信地图打开".
```

### B11. 11 店员工作台

```text
[B0] Staff console screen, dark ink background #22201C, high contrast.
Header "马帮古城 · 东门街柜台", stats "今日已发放 37", stock chips "一档 120" "二档 46" "三档 18" "四档 9".
Huge round button "扫领礼码".
Result panel in paddy teal: "可发放 · 第二档 同路礼", "张** · 证件后四位 2381", radio list "红米小礼盒 余30", "竹编杯垫 余8", "本地茶小样 余15",
checkbox "已核对证件原件姓名和后四位", big button "确认发放".
Small grey legend: 已发放, 今年已领, 码已过期, 本柜台无此档, 库存不足, 未登记证件, 网络异常.
```

### B12. 12–15 到达打卡（四屏）

```text
[B0] Four phone screens in a row.
12 "到达打卡": top half watercolor of Samaba terraces, serif title "撒玛坝梯田"; white card "你现在应该在：观景台停车场";
two toggle chips "我已停稳" (selected) "我是乘客"; big round terracotta button with two soft gold rings, serif text "我到了";
small text "只在点击时取一次位置"; link "定位不准？扫现场桩码".
13: same page dimmed, gold pulse ring expanding around the button, small pin icon, text "正在确认位置…".
14: a round gold terrace-line ink stamp pressed onto a cream passport page, date "2026.10.19";
below, an open pomegranate where ONLY ONE chamber (bottom right) glows ruby and three chambers stay pale beige;
the chestnut pony jumping with joy; text "撒玛坝这一瓣亮了", smaller "2 颗籽可以认识，3 颗正在整理"; primary button "去认识这一瓣", secondary "先看这一站".
15: four state cards, each with icon, title and next step:
"还没到" / "距打卡点约 2.3 公里" / button "先看这一站的内容";
"请停稳后再打卡" (safety orange icon) / "车辆行驶中不能打卡";
"定位信号弱" / "可以扫现场桩码完成打卡" / button "扫桩码";
"今年已在这一站打过卡" / "可以重看，不重复计分" / button "回到这一瓣".
No word "失败" anywhere.
```

### B13. 16–19 同心石榴（四屏）

```text
[B0] Four phone screens in a row.
16 "同心石榴" with subtitle "交往交流交融 · 研学": deep teal hero "同地共生，像石榴籽一样", "五个世居民族，住在同一个县";
toggle "按石榴籽看 / 按一件事看"; large open pomegranate cut in four chambers labeled 迤萨路口 / 森林公园 / 马帮古城 / 撒玛坝;
ONLY two chambers (迤萨路口 and 撒玛坝) glow ruby, the other two pale beige; chips "已点亮 2 瓣" "认识 3 颗籽".
17: dimmed background; one big round ruby seed in the center with white serif text "哈尼族" and small "在撒玛坝";
four smaller identical round ruby seeds around it labeled 汉族 彝族 傣族 瑶族, joined to the center by thin gold lines;
caption under 彝族 "一起跳乐作", under the others "一起住在红河"; deep teal bottom panel "同一片田，一起过日子", button "认识这颗籽".
18: header "哈尼族 · 在撒玛坝"; tabs 非遗 (active) / 一句话 / 答一答 / 来源;
card "哈尼多声部" corner tag "国家级非遗"; card "开秧门与仰阿娜" corner tag "节令活动";
fixed bottom row "和谁一起" chips "彝族 · 乐作" "各族 · 长街宴".
19 "一句红河话": big Mandarin text "欢迎来家里坐"; button "听当地说法" with grey tag "传承人录音 · 县文化馆审定";
quiz "听一听，这句是什么意思？" three options "欢迎来家里坐" "我们去赶街" "慢慢走"; footnote "学一句当地话，是为了更好地交流"; the pony holding a blank card.
Negative: all named seeds same size and same ruby color, no star or cookie shapes, no ethnic costumes, no non-Chinese scripts,
开秧门 NOT labeled as heritage, no text "民族融合".
```

### B14. 评审用总览板（16:9）

```text
[B0] Design presentation board, 16:9, warm beige background, title top left "红河同路 · 小程序界面 v3", small caption "各族同路走，好物一路带".
Five phone mockups in a row with numbered captions: 01 首页, 03 站点页·撒玛坝, 12 到达打卡, 16 同心石榴, 09 商品详情.
Right side: small palette swatches (#A8452F #1E4B48 #2F7A78 #D9A441 #B8323A #F6F1E8) and the pony mascot.
```

---

## C. 独立素材 PROMPT（吉祥物、插画、图标、印章、石榴）

需要透明底的素材（C1、C3、C6、C7），PROMPT 末尾一律拼上 D 节的色键底尾巴。

### C1. 吉祥物「驮驮」七个姿态

```text
Single character illustration of the mascot pony "驮驮": chibi caravan pony, warm chestnut coat, darker brown mane, cream muzzle,
brass horse bell on a red cord, woven bamboo back basket holding a small sack of red rice and tea leaves.
Pose: [01 standing front view | 02 waving one front hoof | 03 sitting, hoof on chin, empty speech bubble with three dots |
04 side view walking right | 05 jumping with joy, solid golden-yellow sparkles with dark outlines (no white glow) and tiny ruby pomegranate seeds |
06 holding up a blank cream card | 07 head-and-shoulders portrait WITHOUT any circle frame or round background disc].
Soft watercolor fill with clean continuous brown outline. No text, no ethnic costume, no ground shadow.
[+ D 节品红底尾巴]
```

### C2. 四站主插画（16:9，各出一张，不抠图）

```text
Soft watercolor illustration, wide 16:9, muted warm palette (terracotta, bamboo gold, paddy teal, rice-paper):
[迤萨路口] calm visitor parking area after a highway exit with a small visitor center, mountains and Red River valley behind, cars parked neatly in marked bays, nothing on the ramp;
[森林公园] mountain forest with a clear stream flowing down to a village and terraces, wooden visitor center, a small fire-prevention sign;
[马帮古城] hillside old town of Yisa with arcaded Sino-Western houses, stone street, caravan bell motif, warm evening light;
[撒玛坝梯田] vast layered rice terraces filled with water reflecting the sky in winter, villages with mushroom-shaped houses at the edge, light mist.
No close-up people in ethnic costume, no cherry blossoms, no text, no route lines.
```

### C3. 金刚区八个图标

```text
Single app icon, soft watercolor fill with thin ink outline, warm palette, flat front view, centered:
[到达打卡: a signpost with a red map pin | 四站: four little mountains in a row | 同心石榴: a small pomegranate split open showing ruby seeds |
问驮驮: a chestnut pony head with a brass bell | 领礼: a gift box tied with red cord | 一路好物: a small sack of red rice |
服务地图: a folded map with a pin | 研学团队: a teal school backpack].
No tile, no text. [+ D 节尾巴：图标多用纯蓝底；研学团队背包用品红底]
```

### C4. 打卡印章（每站一张，白底，不用色键）

```text
A round traditional ink stamp seal in [迤萨路口 terracotta | 森林公园 paddy teal | 马帮古城 deep teal | 撒玛坝 bamboo gold] on pure white background,
slightly textured like a real stamp impression, double circular border with a thin dashed inner ring.
Inside, simple line art of [signpost, viaduct and mountains | forest, stream, village roofs, terraces |
old street house with arched windows and tiled roof, horse bell | curved terrace contour lines with two mushroom-shaped houses].
No text, no characters, no letters. Centered, flat.
```

### C5. 非遗与共同内容示意插画（4:3，不抠图）

```text
Soft watercolor illustration, warm muted palette (terracotta, bamboo gold, paddy teal, cream), 4:3.
[哈尼多声部: terraces at dawn, a small distant group on a ridge, one golden sound ribbon leading and many following |
乐作舞: a distant circle of tiny simplified figures dancing hand in hand on a village square of a Yunnan Hani mountain village, mushroom-roofed houses, terraces behind, East Asian rural setting |
开秧门: tiny distant figures transplanting seedlings on water-filled terraces |
长街宴: a very long row of low tables with dishes down a stone village street |
傣族传统制陶: hands shaping a clay pot, unglazed pots drying on a bamboo mat |
刺绣: hands holding an embroidery hoop, simple abstract floral stitches |
竹编: hands weaving a bamboo basket].
Only hands or tiny distant simplified figures; no faces, no costume details, no European architecture, no text.
```

> 现有 `heritage-02-lezuo-dance` 背景像欧洲小镇，`heritage-06-embroidery` 是通用花样。前者按上面的乐作 PROMPT 重出；后者等县文化馆提供授权的尼苏刺绣纹样后再出，出之前不上线。

### C6. Logo

```text
Logo for a WeChat mini-program "红河同路": a round emblem with a terracotta caravan pony silhouette walking on golden terrace contour lines,
a small teal river curve; beside it the serif Chinese wordmark "红河同路" in ink. Flat vector look, no gradient.
[+ D 节纯蓝底尾巴]
```

> Logo 和字牌上的字由前端用矢量字形（`assets/logo/logo-wordmark.svg`，思源宋体转曲）替换，不用模型画的字。

### C7. 石榴主插画

```text
A realistic soft watercolor pomegranate split open from the top into four chambers separated by cream membranes,
ruby seeds of equal size densely packed, a few glossy highlights in solid light pink (no white glow), terracotta skin with a small crown.
Front view, centered, no leaves, no text. [+ D 节纯蓝底尾巴]
```

> 交互用的石榴不用模型出图，用 `assets/illustrations/pomegranate/pomegranate-layout.json` 的坐标绘制，保证籽等大、同色、可点。

---

## D. 出图、抠图与导出（给出图的同学）

白底出图再抠，会出现三类瑕疵：边缘一圈白边；闪光、光晕被抠成白斑；字内、提手孔等封闭的白色区域被当成主体留下。所以凡是需要透明底的素材，一律改用**色键底**出图。

1. **选底色**：选主体里**没有**的颜色。
   - 吉祥物（棕、橙、红、绿）用品红 `#FF00FF`。
   - 带红色的图标、Logo、石榴用纯蓝 `#0000FF`。
   - 带蓝绿色的背包用品红。
2. **色键底尾巴**：拼在 PROMPT 末尾；用品红时把 `#0000FF` 换成 `#FF00FF`。

```text
Clean continuous dark outline around the whole silhouette.
BACKGROUND: perfectly flat uniform solid pure blue #0000FF over the entire image, including inside letter counters and loops,
no gradient, no texture, no vignette, no ground shadow, no glow, no tile, no circle frame, no white sticker border. No text.
```

3. **闪光和星星**：写明 `solid golden-yellow sparkles with dark outlines (no white glow)`，否则会生成白色光晕。
4. **头像**：不要圆框，写明 `WITHOUT any circle frame or round background disc`；圆形由前端 CSS 实现。
5. **抠图**：用 `python3 tools/chroma_key.py 原图.jpg 输出.png 1024`。
   - 脚本先找出和边缘连通的底色区域，以及封闭的底色孔，作为背景。
   - 只在轮廓两侧 3 像素内做柔边，再去掉边缘溢色。
   - 模型常把品红画成粉色（约 227,54,111），脚本已按实际采样的底色处理，不需要手调。
6. **印章**：仍用白底出图，按墨色深浅生成透明度，内部留白保持透明。
7. **导出**：
   - 透明 PNG 原图 + 2 倍 webp，边长见 `assets/README.md`；插画导出 750w 和 375w 两档 webp。
   - 小程序 tabBar 只认 PNG：81×81、单个 ≤40KB，见 `assets/icons/tab/png/`。
   - 主包 ≤2MB，插画和音频一律走 CDN 或分包。
8. **文字**：所有带字的位置（Logo 字标、拱形字牌、印章站名、界面文案）都由前端用矢量字形或系统字体叠加，不使用模型画出的字。

---

## E. 出图后校对清单

每张图交付前，评审逐条打勾。任何一条不过，都不能进入甲方汇报材料。

### E1. 文字

- [ ] 逐字对照 B 节引号里的文案。常见错字有：撒玛坝 → 撒玛嘛 / 撒马坝，迤萨 → 迤沙，驮驮 → 驼驼，同路分 → 同路份，本站 → 本科。
- [ ] 没有乱码、没有编造的汉字或英文。
- [ ] 没有「民族融合」「实名」「AI」「抵扣」「失败」字样。
- [ ] 金刚区第三格是「同心石榴」。
- [ ] 同路卡四个徽记写站名（路口 / 森林 / 古城 / 梯田），不写民族字。

### E2. 文化与政策

- [ ] 五颗命名籽等大、同色；没有星形、饼干形的籽。
- [ ] 「整理中」的籽还在，没有被删掉。
- [ ] 开秧门、仰阿娜、长街宴标的是「节令活动 / 生活习俗」，不是「非遗」。
- [ ] 乐作和多声部是两张卡。
- [ ] 没有整套民族服装、族语文字、祭祀场景。
- [ ] 撒玛坝没有樱花；望江亭没有画成已建成。

### E3. 安全与规则

- [ ] 打卡点、停车场不在匝道、路肩上。
- [ ] 山上、田里没有导航路线。
- [ ] 打卡成功图里，石榴只亮了应该亮的瓣。
- [ ] 打卡成功图里，籽数和实际一致（撒玛坝：2 颗可认识、3 颗整理中）。
- [ ] 没有排行榜、倒计时、抽奖。

### E4. 现有设计图已知问题（`docs/images/`）

| 图 | 问题 | 处理 |
|---|---|---|
| board-01 | 四站页撒玛坝角标、站点页底部勾选框 | 以 HTML 重绘稿为准 |
| board-02 | 答题错误选项乱码、「本科 26 分」、徽记文字、页标题 | 同上 |
| board-03 | 服务地图标题乱码、店员端礼品文字乱码 | 同上 |
| board-04 | 吉祥物与视觉规范；金刚区第三格是 v2 的「按主题看」，「到达打卡」路牌上有小字 | 以 `assets/` 独立素材为准；汇报时标注为「v2 概念稿」 |
| board-05 | 14 号屏石榴亮瓣数不对，15 号屏第二行小字乱码 | 以 06 号文件 5.2 节为准 |
| board-06 | 16 号屏亮瓣数不对、「在撒玛嘛」；模块名仍是旧名 | 同上；汇报时只作概念稿展示 |

> 汇报材料里的设计图都标注为「概念稿」。可交互、文字准确的界面，见 `presentation/` 里的 HTML 重绘稿。
