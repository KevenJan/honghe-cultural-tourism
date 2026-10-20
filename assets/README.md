# 红河同路 · 前端素材包

按设计稿还原页面时用的全部独立素材。总览图见 `_preview/`，每个形象、图标、插画都是单独文件。

## 目录

```
assets/
├── design-tokens.json          颜色、圆角、字号、阴影、动效时长
├── logo/                       Logo（完整版 / 标志 / 文字标）
├── mascot/                     吉祥物「驮驮」7 个形象
├── icons/
│   ├── grid/                   首页金刚区 8 个插画图标
│   ├── tab/                    底部标签线性图标（默认 / 选中）
│   └── ui/                     界面通用小图标
├── seals/                      四站打卡印章（已打卡 / 未打卡）
├── illustrations/
│   ├── sites/                  四站主插画（梯田、古城等）
│   ├── heritage/               非遗与民俗示意插画
│   └── pomegranate/            石榴（同心石榴模块）
├── motifs/                     主题字牌、梯田等高线、马帮虚线、打卡按钮光环
├── _source/                    抠图前的色键底原图（品红或纯蓝底），用于重抠或换尺寸，不进包
└── _preview/                   各类素材总览图（只用于查看，不进包）
```

### 抠图方式

吉祥物、金刚区图标、Logo 和石榴插画都是用**纯色键底**（品红或纯蓝）重新生成后抠的图，没有白边。眼白、气泡、卡片这类主体里的白色会保留；Logo 字内、背包提手孔这类封闭的背景区域是透明的。需要重抠时：

```bash
python3 tools/chroma_key.py assets/_source/tuotuo-01-stand.jpg assets/mascot/tuotuo-01-stand.png 1024
```

脚本依赖 `numpy`、`scipy`、`Pillow`。底色从图片四边自动取样。

## 格式约定

| 后缀 | 含义 | 用在哪 |
|---|---|---|
| `.png` | 透明底原图（吉祥物、图标、印章 1024 或 512 像素） | 设计还原、再加工、做别的尺寸 |
| `@400.webp` / `@192.webp` / `@240.webp` | 压缩后的透明 webp，数字是边长像素 | 小程序里直接用（2 倍图） |
| `.jpg` | 插画原图 | 原稿 |
| `@750w.webp` / `@375w.webp` / `@690w.webp` / `@345w.webp` | 按宽度压缩的插画 | 750w 用于通栏大图，375w 用于卡片缩略图 |
| `.svg` | 矢量 | 图标、字牌、石榴；文字已转曲，不依赖字体 |
| `-active.svg` | 选中态 | 底部标签 |
| `-locked.png` | 未解锁态（灰、35% 透明） | 未打卡的印章 |

小程序主包限 2MB：**插画和吉祥物大图请放 CDN**，主包里只放 tab、ui 图标（SVG 或导出 81×81 PNG，用作 `tabBar.iconPath`）和金刚区 192 webp。

## 清单

### Logo

| 文件 | 说明 |
|---|---|
| `logo/logo-full.png` · `@400.webp` | 标志 + 「红河同路」+「各族同路走 好物一路带」，透明底 |
| `logo/logo-mark.svg` · `.png` | 只有标志：石榴外形、梯田等高线、一条马帮虚线路 |
| `logo/logo-wordmark.svg` · `.png` | 只有文字标，已转曲 |

### 吉祥物「驮驮」

马帮的小马，驮着装红米和茶的竹背篓，脖子上挂马铃。**不穿任何民族服装**。它是向导，不是用户自己的形象（用户形象是中性旅人）。

| 文件 | 姿态 | 建议用在 |
|---|---|---|
| `mascot/tuotuo-01-stand` | 正面站立 | 空状态、引导页、关于 |
| `mascot/tuotuo-02-wave` | 挥手 | 首次进入、登录页 |
| `mascot/tuotuo-03-think` | 思考（带气泡） | 问驮驮首屏、问题没有审定答案时 |
| `mascot/tuotuo-04-walk` | 侧面行走 | 加载中、「下一站怎么走」 |
| `mascot/tuotuo-05-cheer` | 跳起庆祝 | 打卡成功、石榴满、领礼成功 |
| `mascot/tuotuo-06-guide` | 举卡讲解 | 一句红河话、答题讲解卡 |
| `mascot/tuotuo-07-avatar` | 头像（半身，透明底，不带圆框） | 底部中间凸起按钮、问驮驮对话头像；圆形底和描边用 CSS 做 |

### 首页金刚区图标

| 文件 | 名称 |
|---|---|
| `icons/grid/grid-01-checkin` | 到达打卡 |
| `icons/grid/grid-02-four-sites` | 四站 |
| `icons/grid/grid-03-ethnic-fusion` | 同心石榴（石榴图标；文件名保留 ethnic-fusion） |
| `icons/grid/grid-04-ask-tuotuo` | 问驮驮 |
| `icons/grid/grid-05-gift` | 领礼 |
| `icons/grid/grid-06-local-goods` | 一路好物 |
| `icons/grid/grid-07-service-map` | 服务地图 |
| `icons/grid/grid-08-study-tour` | 研学团队 |

图标本身不带底板；设计稿中的米色圆角底板请用 CSS 实现（`#FFFDF9`，圆角 14）。

### 底部标签与界面图标（SVG）

- `icons/tab/`：`home` 首页、`sites` 四站、`goods` 好物、`me` 我的、`fusion` 同心石榴（备用）。默认版用 `currentColor`，选中版固定为红土赭。中间凸起按钮用 `mascot/tuotuo-07-avatar`。
- `icons/ui/`：back、chevron-right、location、notice（公告）、play、pause、scan、qrcode、check、close、headset（服务电话）、parking、fire-ban（防火）、cart、source（来源）、language（中 / EN）。统一 24×24、线宽 1.8、`currentColor`。
- **小程序原生 PNG**：小程序 tabBar 不支持 SVG，`<image>` 也不能给 SVG 换色。因此另导出：
  - `icons/tab/png/`：81×81，默认灰岩、选中红土赭，每个约 2–3KB（tabBar 限制 40KB）。凸起的中间按钮需用 `custom-tab-bar` 自定义组件实现。
  - `icons/ui/png-ink/`（墨色）、`icons/ui/png-white/`（白色）：48×48，用于深浅两种底色。

### 打卡印章

| 文件 | 站点 | 主色 |
|---|---|---|
| `seals/seal-01-yisa-gateway` | 迤萨路口 | 红土赭 |
| `seals/seal-02-forest-park` | 马帮侨乡森林公园 | 水田青 |
| `seals/seal-03-mabang-oldtown` | 马帮古城 | 深田青 |
| `seals/seal-04-samaba-terraces` | 撒玛坝梯田 | 竹黄 |

印章里不带文字，站名和日期由前端叠加。印章内部是透明的，盖在米纸底上会有真实印泥的感觉。

### 插画

| 文件 | 内容 | 用在 |
|---|---|---|
| `illustrations/sites/site-01-yisa-gateway` | 高速出口后的访客停车场与游客中心 | 四站卡、打卡页 |
| `illustrations/sites/site-02-forest-park` | 森林—村寨—梯田—水系，营地 | 同上 |
| `illustrations/sites/site-03-mabang-oldtown` | 迤萨老街、中西合璧民居、驮马 | 同上 |
| `illustrations/sites/site-04-samaba-terraces` | 灌水季梯田、蘑菇房、观景台 | 同上、首页大图 |
| `illustrations/heritage/heritage-01-hani-polyphony` | 哈尼多声部（一人领、众人和，用声带表现） | 籽详情 · 非遗卡 |
| `illustrations/heritage/heritage-02-lezuo-dance` | 乐作舞（远景，围圈共舞） | 同上 |
| `illustrations/heritage/heritage-03-kaiyangmen` | 开秧门（梯田插秧远景） | 同上 |
| `illustrations/heritage/heritage-04-long-table-feast` | 长街宴 | 和谁一起 · 主题「席」 |
| `illustrations/heritage/heritage-05-dai-pottery` | 傣族传统制陶（只画手和陶器） | 籽详情 · 非遗卡、好物 |
| `illustrations/heritage/heritage-06-embroidery` | 刺绣（通用花样，非具体纹样） | 尼苏刺绣审定后使用 |
| `illustrations/heritage/heritage-07-bamboo-weaving` | 竹编 | 主题「艺」、好物 |

### 石榴（同心石榴）

| 文件 | 说明 |
|---|---|
| `illustrations/pomegranate/pomegranate-hero.png` · `@600.webp` | 写实风插画石榴，用于模块大卡、分享图 |
| `illustrations/pomegranate/pomegranate-interactive.svg` | **可交互石榴**：四瓣 `#chamber-{yisa\|forest\|oldtown\|samaba}`，每瓣 5 颗命名籽 `#seed-{站}-{han\|hani\|yi\|dai\|yao}`（带 `data-site`、`data-ethnic`、`data-label`），其余为不可点的小籽 |
| `illustrations/pomegranate/pomegranate-state-demo.svg` | 状态示例：两瓣点亮、一颗放大中、一颗整理中 |
| `illustrations/pomegranate/seed-single.svg` | 放大态的单颗籽 |
| `illustrations/pomegranate/seed-pending.svg` | 「整理中」的籽 |

状态类名（写在 SVG 内置样式里，前端切换 class 即可）：

- 瓣：`.chamber.is-locked`（未打卡，米色）/ `.chamber.is-lit`（已打卡，宝石红）
- 籽：`.seed.is-pending`（整理中）/ `.seed.is-done`（已认识，金边）/ `.seed.is-active`（放大中）

小程序 `<image>` 不能操作 SVG 内部节点。已把全部坐标导出为 **`illustrations/pomegranate/pomegranate-layout.json`**（viewBox 400×420，84 颗籽，其中 20 颗命名籽，每颗有 `id / site / ethnic / label / named / cx / cy / rx / ry / rotate`）。前端读这个 JSON，用绝对定位的 `view` 或 `canvas type="2d"` 绘制，状态由接口下发。放大动效参数见 `design-tokens.json` 的 `motion.seedZoom`。

### 纹样与字牌

| 文件 | 说明 |
|---|---|
| `motifs/badges/badge-{lu,shui,tian,xi,ge,yi}` | 六个主题字牌：路 水 田 席 歌 艺 |
| `motifs/badges/badge-site-{yisa,forest,oldtown,samaba}` | 四站字牌：路 林 城 田 |
| `motifs/contour-stripes.svg` | 梯田等高线四色彩条，放在深青大卡右下角 |
| `motifs/dashed-trail.svg` | 马帮虚线路，横向可拉伸，串起四站卡 |
| `motifs/checkin-ring.svg` | 打卡「我到了」按钮的底和光环；`.pulse` 层用于定位中的脉冲 |

## 使用前须知

- **插画都是 AI 生成的示意图**，用于还原版式和氛围。上线前请换成授权实拍或签约插画，尤其是非遗类。
  - `heritage-02-lezuo-dance`：村落建筑偏欧式，必须重绘或换实拍。
  - `heritage-06-embroidery`：是通用花样，不代表尼苏刺绣纹样，不能当纹样介绍使用。
- 吉祥物、Logo 如作为正式品牌使用，建议由插画师按本稿重绘矢量版，并做商标检索。
- 字牌与文字标使用思源宋体（Noto Serif CJK，SIL OFL 开源授权）转曲。
- 素材里都没有民族服装、族语文字和宗教元素，后续新增时请保持。
