# 红河同路 · 汇报讲解（HTML）

两个版本，16:9，每页都附讲稿：

| 文件 | 给谁看 | 内容 |
|---|---|---|
| `index.html`（默认） | 县领导、局领导 | **领导版，14 页，约 15 分钟**。只讲结果：是什么、能带来什么、四站、游客手机上的样子、同心石榴（可现场点）、礼品、带货、三条底线、数据看板、分工、分步建设、请领导拍板的事 |
| `detail.html` | 工作专班、各单位联络人、技术团队 | **详细版，42 页**。按模块讲游客端 M1–M8、店员端、合作社端、运营后台 B1–B8 的链路、规则、后台对应和数据；附技术要点、视觉系统、概念稿 |

详细版的文字版是 [`docs/08-产品规划说明报告.md`](../docs/08-产品规划说明报告.md)；开发细节见 `docs/09-功能交互规格/`、`docs/10-数据模型与接口.md`。

领导版最后一页可以直接打开两份给甲方的材料（网页版，随汇报一起部署，手机也能看）：

| 页面 | 内容 | 来源 |
|---|---|---|
| `docs/report.html` | 产品规划说明报告（文字版） | `docs/08-产品规划说明报告.md` |
| `docs/materials.html` | 甲方资料清单；页尾有 14 个填写模板的字段预览，可下载单表 CSV 或汇总 Excel | `materials/README.md`、`materials/templates/` |
| `docs/materials-sign.html` | 立牌制作规范 | `materials/立牌制作规范.md` |
| `docs/materials-license.html` | 授权书模板 | `materials/授权书模板.md` |

## 打开方式

- **本地**：直接双击 `index.html`，用 Chrome / Edge / Safari 打开即可，不需要联网。
- **手机**：部署到服务器后，用手机浏览器或微信打开链接即可。建议横屏看；左右滑动翻页，右下角「稿」按钮看讲稿。
- **线上**：整个 `presentation/` 目录是纯静态文件，没有构建步骤，也不依赖任何外部 CDN，原样上传到任意静态服务器即可。

## 操作

| 操作 | 按键 |
|---|---|
| 下一页 | → / ↓ / 空格 / PageDown / 手机左滑 |
| 上一页 | ← / ↑ / PageUp / 手机右滑 |
| 首页 / 末页 | Home / End |
| 全屏 | F（或右下角按钮） |
| 显示 / 隐藏本页讲稿 | N（或右下角「稿」按钮） |
| 查看并打印全部讲稿 | 地址后加 `?mode=script`，如 `index.html?mode=script` |
| 直达某页 | 地址后加 `#页码`，如 `index.html#6` |

- 「同心石榴」演示（领导版第 6 页、详细版第 17 页）：点手机里的大籽会放大；点「认识这颗籽」进入详情，答对题后籽会出现金边；按钮可以模拟在某一站打卡（这一瓣点亮），「重置」恢复初始状态。
- 领导版最后一页可以点进详细版、文字版报告、资料清单与填写表。
- 详细版第 2 页目录、第 8 页模块地图可以点击跳转；第 41 页概念稿点击可放大。

## 导出 PDF

用 Chrome 打开 → 打印（Ctrl/⌘ + P）→ 目标选「另存为 PDF」→「更多设置」里勾选「背景图形」，边距选「无」。页面尺寸已经设为 1920×1080，每页一张。

## 部署到服务器

### Nginx

```nginx
server {
    listen 80;
    server_name report.example.com;          # 换成实际域名
    root /var/www/honghe-presentation;       # 把 presentation/ 目录内容放这里
    index index.html;

    gzip on;
    gzip_types text/css application/javascript image/svg+xml application/json;

    location ~* \.(webp|jpg|png|svg|woff2)$ {
        expires 30d;
        add_header Cache-Control "public";
    }
    location ~* \.(html|js|css)$ {
        add_header Cache-Control "no-cache";
    }
}
```

上传：

```bash
rsync -av presentation/ user@server:/var/www/honghe-presentation/
```

### 对象存储 / 静态网站托管

腾讯云 COS、阿里云 OSS、七牛等都可以：开启「静态网站」，索引文档设为 `index.html`，把目录内容整体上传。

### 访问控制（建议）

汇报材料含未公开的规划内容，建议至少加一层访问控制：

- Nginx 基础认证：`auth_basic "红河同路汇报"; auth_basic_user_file /etc/nginx/.htpasswd;`
- 或只在内网 / 指定 IP 段开放：`allow 10.0.0.0/8; deny all;`
- 页面已加 `noindex` 标记，不会被搜索引擎收录；也可以在 Nginx 里再加 `add_header X-Robots-Tag "noindex, nofollow";`

## 目录

```
presentation/
├── index.html          领导版 14 页，每页 <aside class="notes"> 为讲稿
├── detail.html         详细版 42 页
├── docs/               文字版报告与甲方资料（由 tools/build_presentation_docs.py 生成，不要手改）
│   └── files/          填写模板 CSV 与汇总 Excel
├── css/
│   ├── deck.css        演示框架与版式
│   ├── phone.css       小程序界面重绘
│   └── admin.css       运营后台界面重绘
├── js/
│   ├── layout.js       石榴籽坐标（由 assets/illustrations/pomegranate/pomegranate-layout.json 生成）
│   ├── data.js         石榴籽演示内容（示意，以审定稿为准）
│   ├── screens.js      21 个小程序界面的 HTML 模板（含问驮驮、合作社端）
│   ├── admin.js        8 个运营后台界面（B1–B8，数据为示意）
│   ├── pomegranate.js  石榴绘制与点籽放大
│   └── deck.js         翻页、缩放、全屏、讲稿
├── fonts/
│   └── hh-serif-bold.woff2   思源宋体 Bold 子集（SIL OFL 1.1，只含本稿用到的字）
└── assets/             从项目 assets/ 和 docs/images/ 复制的 webp / svg / jpg
```

## 修改内容后

- 改了 `index.html`、`detail.html` 或 `js/` 里的文字，如果新增了标题用字，要重新生成字体子集，否则新字会退回系统宋体：

```bash
python3 tools/build_presentation_font.py
```

- 改了 `docs/08-产品规划说明报告.md` 或 `materials/` 里的内容，要重新生成网页版：

```bash
pip install markdown && python3 tools/build_presentation_docs.py
```

- 石榴籽坐标以 `assets/illustrations/pomegranate/pomegranate-layout.json` 为准；JSON 改动后，同一个脚本会一并重新生成 `js/layout.js`。

## 内容说明

- 县情数字取自红河县人民政府网站县情概况（2025 年度口径），每年更新一次。
- 石榴籽详情、商品、礼品、人名、证件号、后台里的所有数字均为示意；正式内容以县文化馆、民宗局、文旅局审定稿为准。
- 详细版第 41 页 AI 概念稿个别文字有误，仅作风格参考；文字以 HTML 重绘页面和 `docs/` 文档为准。
