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

---

## D. v2.1 新增：到达打卡、民族融合与独立素材 PROMPT

> 金刚区第三格由「按主题看」改为「民族融合」，C3 中 `a golden arch badge (按主题看)` 换成 `a small pomegranate split open showing ruby seeds (民族融合)`。

### D1. 到达打卡（四屏）

```text
[B0] Four phone screens: 12 打卡页, 13 确认位置, 14 打卡成功, 15 没打上时.
12: top half watercolor of the site; title '撒玛坝梯田'; white card '你现在应该在：观景台停车场'; two toggle chips '我已停稳' (selected) '我是乘客';
big round terracotta button with two soft gold rings and serif text '我到了'; small text '只在点击时取一次位置'; link '定位不准？扫现场桩码'.
13: same page dimmed, gold pulse ring expanding around the button, small pin icon, text '正在确认位置…'.
14: a round gold terrace-line ink stamp pressed onto a cream passport page with date; below, an open pomegranate where ONLY ONE chamber glows ruby and three chambers stay pale beige;
the chestnut pony mascot jumping with joy; text '撒玛坝这一瓣亮了', '5 颗籽等你认识'; button '去认识这一瓣'.
15: four state cards: '还没到 · 距打卡点约 2.3 公里', '请停稳后再打卡' (safety orange icon), '定位信号弱 · 扫桩码', '今年已在这一站打过卡'.
```

### D2. 民族融合（四屏）

```text
[B0] Four phone screens: 16 石榴籽, 17 点开一颗籽, 18 在这一站的生活, 19 一句红河话.
16: deep teal hero '同地共生，像石榴籽一样', '五个世居民族，住在同一个县'; toggle '按石榴籽看 / 按一件事看';
large open pomegranate with four chambers labeled 迤萨路口 / 森林公园 / 马帮古城 / 撒玛坝, only two chambers glowing ruby; chips '已点亮 2 瓣' '认识 6 颗籽'.
17: dimmed background; one big round ruby seed in the center '哈尼族 · 在撒玛坝'; four smaller identical round ruby seeds around labeled 彝族 汉族 傣族 瑶族 joined by thin gold lines;
only 彝族 caption '一起跳乐作', others '一起住在红河'; panel '同一片田，一起过日子', button '认识这颗籽'.
18: header '哈尼族 · 在撒玛坝'; tabs 非遗 / 一句话 / 答一答 / 来源; card '哈尼多声部' tag '国家级非遗'; card '开秧门与仰阿娜' tag '节令活动'; row '和谁一起' chips '彝族 · 乐作' '各族 · 长街宴'.
19: '一句红河话'; big Mandarin '欢迎来家里坐'; button '听当地说法', grey tag '传承人录音 · 审定后上线'; quiz '听一听，这句是什么意思？' with three options; pony mascot holding a blank card.
Negative: all seeds same size and same ruby color, no star or cookie shapes, no ethnic costumes, no non-Chinese scripts; 开秧门 is NOT labeled as heritage.
```

### D3. 吉祥物单张（每个姿态一张，白底，便于抠图）

```text
Single character illustration of the mascot pony '驮驮' exactly matching the reference: chibi caravan pony, warm chestnut coat, darker brown mane,
cream muzzle, brass horse bell on red cord, woven bamboo back basket holding a small sack of red rice and tea leaves.
Pose: [正面站立 standing front view | 挥手 waving one front hoof | 思考 sitting, hoof on chin, empty speech bubble with three dots |
行走 side view walking right | 庆祝 jumping with joy, small golden sparkles and tiny pomegranate seeds | 讲解 holding up a blank cream card | 头像 head-and-shoulders portrait].
Soft watercolor fill with clean brown outline. Plain pure white background, no ground shadow, no text, no ethnic costume.
```

### D4. 打卡印章（每站一张，无字）

```text
A round traditional ink stamp seal in [颜色] on pure white background, slightly textured like a real stamp impression, double circular border with a thin dashed inner ring.
Inside: simple line-art of [迤萨路口: signpost, viaduct and mountains | 森林公园: forest, stream, village roofs, terraces |
马帮古城: old street house with arched windows and tiled roof, horse bell | 撒玛坝: curved terrace contour lines with two mushroom-shaped houses].
No text, no characters, no letters. Centered, flat.
```

### D5. 非遗示意插画（只画物件和远景）

```text
Soft watercolor illustration, warm muted palette (terracotta, bamboo gold, paddy teal, cream), 4:3.
[傣族传统制陶: hands shaping a clay pot, unglazed pots drying on bamboo mat | 刺绣: embroidery hoop with simple abstract floral stitches |
竹编: hands weaving a bamboo basket | 开秧门: tiny distant figures transplanting seedlings on water-filled terraces |
长街宴: very long row of tables with dishes down a stone village street | 乐作舞: distant circle of tiny figures dancing hand in hand in a Yunnan mountain village square with tiled-roof houses |
哈尼多声部: terraces at dawn, a small distant group on a ridge, one golden sound ribbon leading and many following].
Only hands or tiny distant simplified figures; no faces, no costume details, no text.
```

### D6. 抠图与导出（给出图的同学）

白底出图再抠，会出现三类瑕疵：边缘一圈白边；闪光、光晕被抠成白斑；字内、提手孔等封闭的白色区域被当成主体留下。所以需要透明底的素材，一律改用**色键底**出图。

1. 选底色：主体里**没有**的颜色。
   - 吉祥物（棕、橙、红、绿）用品红。
   - 带红色的图标、Logo、石榴用纯蓝。
   - 带蓝绿色的背包用品红。
2. 每条 PROMPT 末尾加上（品红就把 `#0000FF` 换成 `#FF00FF`）：

```text
Clean continuous dark outline around the whole silhouette.
BACKGROUND: perfectly flat uniform solid pure blue #0000FF over the entire image, including inside letter counters and loops,
no gradient, no texture, no vignette, no ground shadow, no glow, no tile, no circle frame, no white sticker border. No text.
```

3. 有闪光、星星时写明 `solid golden-yellow sparkles with dark outlines (no white glow)`，否则会生成白色光晕。
4. 头像不要圆框，写明 `WITHOUT any circle frame or round background disc`，圆形由前端 CSS 实现。
5. 抠图：`tools/chroma_key.py`。脚本按颜色找出和底色连通的区域及封闭的底色孔，只在轮廓两侧 3 像素内做柔边，再去掉边缘溢色。
6. 印章仍用白底出图，按墨色深浅生成透明度，内部留白保持透明。
7. 导出：透明 PNG 原图 + 2 倍 webp（边长见 `assets/README.md`）；插画导出 750w / 375w webp。
