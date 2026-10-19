# 红河同路 · 设计 PROMPT

> 配合 04 号文件使用。分三类：
> A. 给 AI 界面 / 原型工具（Figma AI、即时设计、MasterGo AI、v0 一类）的**整体产品 PROMPT**
> B. 给图像模型（GPT Image、Midjourney、即梦、可灵一类）的**视觉 PROMPT**：风格总纲 + 分页面
> C. 插画与吉祥物 PROMPT
> 每条都写了「必须」和「禁止」，复制时不要删掉禁止项——这些是文化与安全边界，不是风格偏好。

---

## A. 整体产品 PROMPT（给界面 / 原型工具）

```text
你是资深微信小程序产品与 UI 设计师。请设计一个文旅小程序「红河同路」，副标题「各族同路走，好物一路带」，服务云南省红河州红河县。

【产品】
一条可顺可逆的四站实景长廊：迤萨路口（高速出口后的访客停车场）、马帮侨乡森林公园、马帮古城（迤萨镇东门街，国家 4A）、撒玛坝梯田（宝华镇，国家 4A，世界遗产组成部分）。
每站流程：到达打卡（用户点按钮时只取一次定位，不后台定位、不导航）→ 3 分钟内容（卡片 + 可离线音频）→ 3 道题（答对 +10；答错先看讲解再 +3）→ 结果（徽记点亮）→ 这站好物。
同路分只换称号和官方礼品，不能抵现金、不能在商城抵扣。礼品每个身份证件每年一次，取当时最高一档，由柜台店员扫游客的动态领礼码（30 秒刷新）发放。
商城「一路好物」只卖本地农特产和文创，每件商品有来源档案（生产者、村寨、时间）。

【主题】民族融合是日常生活：同一条路、同一沟水、同一片田、同一张桌、同一首歌、同一双手。普通话为主，增进共同性、尊重差异性。

【底部五个标签】首页 / 四站 / 问驮驮（中间凸起圆形吉祥物按钮）/ 好物 / 我的。

【首页】顶栏字标 + 同路分胶囊 + 中/EN 切换；插画大图轮播（只放季节、县里正式活动、开放提醒）；2×4 插画图标宫格：到达打卡、四站、按主题看、问驮驮、领礼、一路好物、服务地图、研学团队；单行公告条（森林公园防火提示置顶，安全橙）；今日开放；四站横滑插画卡（无编号，用一条虚线马帮道串起）；「这季在红河」一大两小拼图；「为您推荐」双列商品卡。

【四站页】整幅水彩插画大卡，左上主题角标，宋体站名，一句话，右侧「看这一站」按钮；右上角「服务地图」。

【站点页】深青色主题大卡 + 金色拱形字牌（单个汉字）+ 梯田等高线彩条；一行「约 3 分钟 · 完成可得 30 同路分 · 内容已审定」；页签：导览 / 听一听 / 答一答 / 来源；底部固定主按钮「到达打卡」。

【答一答】进度三点；题卡；大选项按钮；答错时翻出讲解卡和按钮「我记住了 +3」。无倒计时、无排行榜。

【结果页】徽记从线描变填色；本站得分、累计同路分、可领档位；三个按钮：去领礼 / 看这站好物 / 下一站怎么走。

【我的】头像（中性旅人，无民族服装）+ 登录；深青「同路卡」（称号、同路分、四站徽记、现在可领第 X 档）；两张大卡「我的订单 / 常用游客」；「我的服务」列表：我的足迹、我的礼品、离线包、电子发票、现场礼仪、意见反馈、服务/救援/投诉电话、关于与审定单位、设置；仅绑定店员可见「切到店员工作台」。

【领礼码】大二维码 30 秒刷新、证件后四位、档位、「今年只能领一次」。

【好物】分类标签：为您推荐 / 梯田红米 / 茶与山货 / 手作文创 / 按站看；双列卡：图、宋体品名、红色小字出处（如「撒玛坝的田里来」）、两个标签、价格、「看看」。
【商品详情】大图、单一价格、规格、页签「商品详情 / 来源档案 / 购买须知」、底部「购物车 / 加入购物车 / 立即购买」。

【店员工作台】深墨底，柜台名、今日已发放、各档库存，大号「扫领礼码」；结果状态：可发放、已发放、今年已领、码已过期、本柜台无此档、库存不足、未实名、网络异常。

【视觉】米纸底 #F6F1E8，卡片素白 #FFFDF9，主按钮红土赭 #A8452F，深田青 #1E4B48 做主题大卡，水田青 #2F7A78，竹黄 #D9A441 做字牌与强调，墨 #22201C，灰岩 #6E6A63，安全橙 #D9622B 只用于安全。标题思源宋体，正文思源黑体 ≥15pt。圆角 16–24，阴影极淡。插画为淡彩水彩风。
【尺寸】375×812 逻辑像素，顶部保留微信胶囊按钮位。

【禁止】
- 不做按民族分栏、民族图鉴、民族字牌（如「哈」「彝」），不做「五个民族」入口；
- 不出现整套民族服装换装、奕车整套服装；
- 不出现未审定的族语、祭祀、族源、迁徙内容；
- 乐作（舞）和哈尼多声部（唱）不合并成一张卡；
- 首页不放商业广告和外链；
- 不在高速匝道、路肩画停车或打卡点；
- 撒玛坝不出现樱花；
- 不出现站与站之间、梯田田埂上的导航线路；
- 积分不出现「抵扣」「提现」「兑现金」字样；
- 不出现排行榜、倒计时、抽奖。
```

---

## B. 视觉 PROMPT（给图像模型）

### B0. 风格总纲（每条分页 PROMPT 前都拼上）

```text
WeChat mini-program UI design, high-fidelity mockup, iPhone frame 375x812, Chinese interface,
cultural tourism app for Honghe County, Yunnan, theme "ethnic groups walking the same road, local goods along the way".
Warm rice-paper background #F6F1E8, white cards #FFFDF9 with very soft shadow, rounded corners 16-24px,
primary button terracotta red #A8452F pill shape, deep paddy teal #1E4B48 hero cards, accent bamboo gold #D9A441,
ink text #22201C, secondary grey #6E6A63. Song-style serif Chinese headings, clean sans body text.
Soft watercolor illustrations of Hani terraced rice fields, old caravan town arcades, forest and water.
Decorative motif: thin parallel contour lines of terraced fields in four colors (terracotta, gold, teal, grey).
Golden arch-shaped badge with one serif Chinese character. Mascot "Tuotuo": a small friendly caravan pony with a bell and a bamboo back basket of red rice and tea, no ethnic costume.
Clean, calm, generous whitespace, outdoor-readable, no clutter.
```

**通用负面词（Negative）**

```text
no ethnic costume dress-up, no ethnic group gallery or ethnic labels, no characters like 哈 彝 傣 on badges,
no cherry blossoms on terraced fields, no advertising banners, no leaderboard, no countdown timer, no lottery,
no navigation route lines on mountains or rice terraces, no highway ramp parking, no gradients overload, no neon, no 3D glossy.
```

### B1. 首页

```text
[B0] Home screen. Top bar: serif logo "红河同路", small subtitle "各族同路走，好物一路带", gold pill "64 同路分", small "中/EN" toggle, WeChat capsule at top right.
Hero carousel: watercolor illustration of Samaba terraces filled with water in winter mirror light, label "撒玛坝 · 灌水季", gold button "看这一站".
Below: 2x4 grid of illustrated icons with labels 到达打卡, 四站, 按主题看, 问驮驮, 领礼, 一路好物, 服务地图, 研学团队.
One-line notice bar with speaker icon in safety orange: "森林公园防火期 · 请勿携带火种".
Section "四站长廊" with horizontally scrolling illustrated cards connected by a dashed caravan trail: 迤萨路口, 森林公园, 马帮古城, 撒玛坝梯田.
Section "为您推荐" two-column product cards: 梯田红米 ¥39, 竹编杯垫 ¥28.
Bottom tab bar: 首页, 四站, center raised round mascot button 问驮驮, 好物, 我的.
```

### B2. 四站（目的地列表）

```text
[B0] Destination list screen titled "四站", top right link "服务地图".
Three large full-width watercolor illustration cards stacked, each with a small corner tag, serif title, one-line description and a terracotta button "看这一站":
1) tag "同一条路" title "马帮古城" desc "出门的人和等的人" — arcaded Sino-Western old street houses on a hillside town;
2) tag "同一片田" title "撒玛坝梯田" desc "同一片梯田，同一张长桌" — layered terraces with villages and mist;
3) tag "同一沟水" title "马帮侨乡森林公园" desc "大家共用一沟水" — forest, stream and village.
Small grey line under each: "停车：xx停车场". Same bottom tab bar.
```

### B3. 站点页（撒玛坝）

```text
[B0] Site detail screen for "撒玛坝梯田". Deep teal hero card with serif headline "同一片梯田，同一张长桌", gold arch badge with character "田", four-color terrace contour stripes at bottom right.
Info line: "约 3 分钟 · 完成可得 30 同路分 · 内容已审定".
Segmented tabs: 导览 (active), 听一听, 答一答, 来源.
Content cards: "开秧门：大家一起下田" with small watercolor image; "乐作是跳的，多声部是唱的" with two separate audio rows "听乐作" and "听多声部".
Fixed bottom terracotta pill button "到达打卡", small checkbox text "我已停稳 / 我是乘客".
```

### B4. 答一答

```text
[B0] Quiz screen. Progress dots 2/3. Question card: "撒玛坝梯田的水，主要从哪里来？".
Four large option buttons; one selected wrong option outlined terracotta, correct option filled paddy teal with check.
Explanation card slides up: "森林在上，村寨在中，梯田在下，水从林里来……" with small source line "来源：红河县文化馆 · 已审定".
Button "我记住了 +3". No timer, no leaderboard.
```

### B5. 我的 + 同路卡

```text
[B0] Profile screen. Header with neutral traveler avatar (no ethnic costume) wearing small accessories: a horse bell and a terrace-pattern scarf, name "微信用户".
Deep teal "同路卡": title "红河同路人", "64 同路分", four station badges (two filled, two outlined), gold button "现在可领第二档 · 出示领礼码".
Two big cards side by side: "我的订单" and "常用游客".
List "我的服务": 我的足迹, 我的礼品, 离线包, 电子发票, 现场礼仪, 意见反馈, 服务/救援/投诉电话, 设置.
Bottom tab 我的 active.
```

### B6. 领礼码

```text
[B0] Gift code screen. Large QR code centered on white card, small text "30 秒自动刷新", "证件后四位 ****2381".
Tier label "第二档 · 同路礼", three gift options as small illustrated chips: 红米小礼盒, 竹编杯垫, 本地茶小样.
Notice in gold: "今年只能领一次 · 再走一站可领第三档". Button "我再走一站" secondary, "就领这一档" primary.
```

### B7. 好物列表

```text
[B0] Shop screen "一路好物". Category chips: 为您推荐 (active), 梯田红米, 茶与山货, 手作文创, 按站看.
Two-column product cards with real-looking product photos on linen: 梯田红米 2kg ¥39 "撒玛坝的田里来" tags 耐储 可寄;
竹编果篮 ¥88 "马帮古城手艺人"; 傣族土陶小杯 ¥46; 八角 500g ¥32 "森林公园山货". Button "看看" on each card.
```

### B8. 商品详情

```text
[B0] Product detail screen. Large photo of red rice in a bamboo basket on a terrace ridge.
Serif title "撒玛坝梯田红米 2kg", single price "¥39" (no strikethrough).
Spec row "已选：2kg 真空装". Tabs: 商品详情, 来源档案 (active), 购买须知.
Source record card: 生产者 "xx 农民专业合作社", 产地 "宝华镇撒玛坝 xx 村", 采收 "2026 年 10 月", 配送 "寄回家 / 柜台自提".
Bottom bar: cart icon with badge 2, light button "加入购物车", terracotta button "立即购买".
```

### B9. 店员工作台

```text
[B0] Staff console screen, dark ink background #22201C, high contrast.
Header "马帮古城 · 东门街柜台", stats "今日已发放 37", stock chips "一档 120  二档 46  三档 18  四档 9".
Huge round button "扫领礼码".
Result panel in paddy teal: "可发放 · 第二档 同路礼", "证件后四位 2381", three gift choices, big button "确认发放".
Below, small grey state legend: 已发放, 今年已领, 码已过期, 本柜台无此档, 库存不足, 未实名, 网络异常.
```

### B10. 一张评审用总览板（16:9）

```text
[B0] Design presentation board, 16:9, warm beige background, title at top left "红河同路 · 小程序界面 v2", small caption "各族同路走，好物一路带".
Five phone mockups in a row with numbered captions: 01 首页, 02 站点页·撒玛坝, 03 答一答, 04 我的·同路卡, 05 商品详情.
Right side small color palette swatches and the mascot Tuotuo.
```

---

## C. 插画与吉祥物 PROMPT

### C1. 吉祥物「驮驮」

```text
Mascot character sheet, a small friendly caravan pony named "驮驮", chibi proportions, warm chestnut coat, cream muzzle,
a brass horse bell on a red cord around the neck, a woven bamboo back basket holding a small sack of red rice and a tea bundle,
soft watercolor + clean outline, front view, side view, waving pose, thinking pose, on rice-paper background.
No ethnic costume, no headdress, no text.
```

### C2. 四站主插画（统一风格，各出一张）

```text
Soft watercolor illustration, wide 16:9, muted warm palette (terracotta, bamboo gold, paddy teal, rice-paper),
[迤萨路口] a calm visitor parking area after a highway exit with a small visitor center, mountains and Red River valley behind, cars parked neatly, no ramp parking;
[森林公园] mountain forest with a clear stream flowing down to a village and terraces, a wooden visitor center, fire-prevention sign;
[马帮古城] hillside old town of Yisa with arcaded Sino-Western houses, stone street, caravan horse bell motif, warm evening light;
[撒玛坝梯田] vast layered rice terraces filled with water reflecting sky in winter, villages with mushroom-like houses at the edge, light mist, no cherry blossoms.
No people in ethnic costume close-ups, no text.
```

### C3. 金刚区八个图标

```text
Set of 8 app icons, same style, rounded-square cream tiles, soft watercolor fill with thin ink outline, warm palette:
a signpost with a pin (到达打卡), four little mountains in a row (四站), a golden arch badge (按主题看), a pony head with bell (问驮驮),
a gift box tied with red cord (领礼), a small sack of red rice (一路好物), a map with pin (服务地图), a school backpack (研学团队).
No text, consistent lighting, isometric-free flat view.
```
