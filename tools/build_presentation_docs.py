"""把给甲方看的文字材料生成为网页，放进 presentation/docs/，随汇报一起部署。

用法：pip install markdown && python3 tools/build_presentation_docs.py
输出：
  presentation/docs/report.html            08 号产品规划说明报告
  presentation/docs/materials.html         甲方资料清单（含填写模板预览与下载）
  presentation/docs/materials-sign.html    立牌制作规范
  presentation/docs/materials-license.html 授权书模板
  presentation/docs/files/                 Excel 汇总表与 14 个 CSV 模板
源文件改了以后重新运行一次即可。
"""
import csv
import html
import os
import re
import shutil

import markdown
from markdown.extensions.toc import slugify_unicode

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "presentation", "docs")
FILES = os.path.join(OUT, "files")
MAT = os.path.join(ROOT, "materials")
TPL = os.path.join(MAT, "templates")
XLSX = "红河同路-资料收集表.xlsx"

# 与 materials/README.md 第 1 节顺序一致
ORDER = [
    "站点信息", "内容卡", "题目", "石榴籽与非遗卡", "音频清单", "县情数据", "问答库",
    "礼品与档位", "柜台与店员", "合作社", "商品与来源档案", "素材授权登记", "服务点与电话", "审定人员",
]

PAGES = [
    ("report.html", "产品规划说明报告", os.path.join(ROOT, "docs", "08-产品规划说明报告.md")),
    ("materials.html", "甲方资料清单", os.path.join(MAT, "README.md")),
    ("materials-sign.html", "立牌制作规范", os.path.join(MAT, "立牌制作规范.md")),
    ("materials-license.html", "授权书模板", os.path.join(MAT, "授权书模板.md")),
]

LINKS = {
    "templates/": "materials.html#templates",
    "立牌制作规范.md": "materials-sign.html",
    "授权书模板.md": "materials-license.html",
}

ON = ' class="on"'

CSS = """
:root{--teal:#1E4B48;--paddy:#2F7A78;--gold:#D9A441;--ink:#22201C;--stone:#6E6A63;--paper:#F6F1E8;--white:#FFFDF9;--line:#E6DCCB;--membrane:#F3E6D3}
*{box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:72px}
body{margin:0;background:var(--paper);color:var(--ink);font:17px/1.8 "PingFang SC","Microsoft YaHei","Noto Sans SC","Noto Sans CJK SC",system-ui,sans-serif;-webkit-font-smoothing:antialiased}
a{color:var(--paddy)}
.bar{position:sticky;top:0;z-index:10;display:flex;align-items:center;gap:8px 18px;flex-wrap:wrap;padding:12px 24px;background:var(--teal);color:#fff;font-size:15px}
.bar .brand{font-weight:700;letter-spacing:.08em;margin-right:auto}
.bar a{color:rgba(255,255,255,.82);text-decoration:none;padding:4px 12px;border-radius:20px}
.bar a:hover{color:#fff;background:rgba(255,255,255,.12)}
.bar a.on{color:var(--teal);background:var(--gold)}
.wrap{display:grid;grid-template-columns:260px minmax(0,1fr);gap:40px;max-width:1240px;margin:0 auto;padding:36px 24px 80px}
nav.toc{position:sticky;top:76px;align-self:start;max-height:calc(100vh - 100px);overflow:auto;font-size:14px;line-height:1.6}
nav.toc .h{font-weight:700;color:var(--stone);margin-bottom:8px}
nav.toc ul{list-style:none;margin:0;padding:0}
nav.toc ul ul{padding-left:14px;font-size:13px}
nav.toc li{margin:4px 0}
nav.toc a{color:var(--ink);text-decoration:none}
nav.toc a:hover{color:var(--paddy)}
article{background:var(--white);border:1px solid var(--line);border-radius:14px;padding:44px 52px;min-width:0}
h1,h2,h3,h4{font-family:"Noto Serif SC","Noto Serif CJK SC","Source Han Serif SC","Songti SC",serif;color:var(--teal);line-height:1.4}
h1{font-size:34px;margin:0 0 18px}
h2{font-size:26px;margin:48px 0 14px;padding-top:12px;border-top:1px solid var(--line)}
h3{font-size:21px;margin:32px 0 10px}
h4{font-size:18px;margin:24px 0 8px}
blockquote{margin:16px 0;padding:12px 18px;background:var(--membrane);border-left:4px solid var(--gold);border-radius:0 8px 8px 0;color:#4a453d}
blockquote p{margin:4px 0}
hr{border:0;border-top:1px dashed var(--line);margin:28px 0}
code{font-family:inherit;background:var(--membrane);padding:1px 6px;border-radius:4px;font-size:.92em}
pre{background:var(--membrane);padding:14px 18px;border-radius:8px;overflow:auto}
pre code{background:none;padding:0}
.tbl{overflow-x:auto;margin:14px 0}
table{border-collapse:collapse;width:100%;font-size:15px;line-height:1.6}
th,td{border:1px solid var(--line);padding:8px 12px;text-align:left;vertical-align:top}
th{background:var(--teal);color:#fff;font-weight:600;white-space:nowrap}
tr:nth-child(even) td{background:#FBF7F0}
.dl{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;margin:16px 0}
.dl a{display:block;padding:12px 16px;background:var(--paper);border:1px solid var(--line);border-radius:10px;text-decoration:none;color:var(--ink)}
.dl a:hover{border-color:var(--paddy)}
.dl a b{display:block;color:var(--teal)}
.dl a span{font-size:13px;color:var(--stone)}
.dl a.main{background:var(--teal);color:#fff;grid-column:1/-1}
.dl a.main b{color:var(--gold)}
.dl a.main span{color:rgba(255,255,255,.8)}
details{margin:10px 0;border:1px solid var(--line);border-radius:10px;background:var(--paper)}
details summary{cursor:pointer;padding:10px 16px;font-weight:600;color:var(--teal)}
details .in{padding:0 16px 14px}
details .in p{margin:6px 0;font-size:14px;color:var(--stone)}
.foot{margin-top:40px;font-size:13px;color:var(--stone)}
@media (max-width:900px){.wrap{grid-template-columns:1fr;padding:16px 10px 60px;gap:16px}nav.toc{position:static;max-height:none;background:var(--white);border:1px solid var(--line);border-radius:12px;padding:14px 18px}nav.toc ul ul{display:none}article{padding:24px 18px}h1{font-size:26px}h2{font-size:21px}body{font-size:16px}.bar{padding:10px 12px}}
@media print{.bar,nav.toc{display:none}.wrap{display:block;padding:0}article{border:0;padding:0}body{background:#fff}h2{break-after:avoid}tr{break-inside:avoid}}
"""


def read_csv(name):
    with open(os.path.join(TPL, name + ".csv"), encoding="utf-8-sig", newline="") as f:
        return list(csv.reader(f))


def templates_section():
    out = ['<h2 id="templates">填写模板（预览与下载）</h2>',
           '<p>CSV 文件可以直接用 Excel / WPS 打开填写；也可以下载汇总的 Excel 工作簿，14 张表在同一个文件里。'
           '每张表第二行是填写说明，第三行起是示例，填写时覆盖示例即可。</p>',
           '<div class="dl">',
           f'<a class="main" href="files/{XLSX}" download><b>下载汇总 Excel：{XLSX}</b>'
           '<span>含目录页（提供单位、需要时间、不给会卡住什么）和 14 张填写表</span></a>']
    for name in ORDER:
        out.append(f'<a href="files/{name}.csv" download><b>{name}.csv</b><span>单表 CSV 模板</span></a>')
    out.append('</div>')
    for name in ORDER:
        rows = read_csv(name)
        head, note = rows[0], rows[1] if len(rows) > 1 else []
        samples = rows[2:]
        tip = note[0].replace("#说明：", "") if note else ""
        out.append(f'<details id="tpl-{name}"><summary>{name}（{len(head)} 列）</summary><div class="in">')
        out.append(f'<p>下载：<a href="files/{name}.csv" download>{name}.csv</a></p>')
        out.append('<div class="tbl"><table><thead><tr><th>字段</th><th>填写说明</th>'
                   + ''.join(f'<th>示例 {i + 1}</th>' for i in range(len(samples))) + '</tr></thead><tbody>')
        for i, col in enumerate(head):
            n = (tip if i == 0 else (note[i] if i < len(note) else ""))
            cells = ''.join(f'<td>{html.escape(r[i]) if i < len(r) else ""}</td>' for r in samples)
            out.append(f'<tr><td><b>{html.escape(col)}</b></td><td>{html.escape(n)}</td>{cells}</tr>')
        out.append('</tbody></table></div></div></details>')
    return '\n'.join(out)


def prepare(md_text, page):
    if page == "materials.html":
        md_text = re.sub(r"如需一个汇总的 Excel 工作簿，运行.*?生成 `materials/[^`]+`。",
                         "汇总的 Excel 工作簿和各模板见本页最后的「填写模板」。", md_text)
    for src, dst in LINKS.items():
        md_text = md_text.replace(f"]({src})", f"]({dst})")
    return md_text


def postprocess(body):
    body = re.sub(r"<table>", '<div class="tbl"><table>', body)
    body = body.replace("</table>", "</table></div>")

    def csv_link(m):
        name = m.group(2)
        if name in ORDER:
            return f'<a href="materials.html#tpl-{name}"><code>{m.group(1)}{name}.csv</code></a>'
        return m.group(0)
    return re.sub(r"<code>(templates/)?([^<]+?)\.csv</code>", csv_link, body)


def build_page(fname, title, md_path):
    with open(md_path, encoding="utf-8") as f:
        text = prepare(f.read(), fname)
    md = markdown.Markdown(extensions=["tables", "toc", "sane_lists", "fenced_code"],
                           extension_configs={"toc": {"toc_depth": "2-3", "slugify": slugify_unicode}})
    body = postprocess(md.convert(text))
    if fname == "materials.html":
        body += "\n" + templates_section()
    toc = md.toc
    if fname == "materials.html":
        toc = toc.replace("</ul>\n</div>", '<li><a href="#templates">填写模板（预览与下载）</a></li>\n</ul>\n</div>', 1)
    current = "materials.html" if fname.startswith("materials") else fname
    nav = ''.join(
        f'<a href="{p}"{ON if p == current else ""}>{t}</a>'
        for p, t in [("report.html", "产品规划说明报告"), ("materials.html", "甲方资料清单与填写表")])
    sub = ""
    if fname.startswith("materials"):
        sub = ('<p class="foot">配套文件：<a href="materials.html">资料清单</a> · '
               '<a href="materials-sign.html">立牌制作规范</a> · <a href="materials-license.html">授权书模板</a> · '
               '<a href="materials.html#templates">填写模板</a></p>')
    page = f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>红河同路 · {title}</title>
<style>{CSS}</style>
</head>
<body>
<div class="bar"><span class="brand">红河同路</span>{nav}<a href="../index.html">返回领导汇报</a></div>
<div class="wrap">
<nav class="toc"><div class="h">目录</div>{toc}</nav>
<article>
{body}
{sub}
<p class="foot">本页由 {os.path.relpath(md_path, ROOT)} 生成，内容以该文件为准。</p>
</article>
</div>
<script>
function openTarget(){{var t=location.hash&&document.getElementById(decodeURIComponent(location.hash.slice(1)));if(t&&t.tagName==='DETAILS'){{t.open=true;t.scrollIntoView();}}}}
window.addEventListener('hashchange',openTarget);openTarget();
</script>
</body>
</html>
"""
    with open(os.path.join(OUT, fname), "w", encoding="utf-8") as f:
        f.write(page)


def main():
    os.makedirs(FILES, exist_ok=True)
    for name in ORDER:
        shutil.copyfile(os.path.join(TPL, name + ".csv"), os.path.join(FILES, name + ".csv"))
    shutil.copyfile(os.path.join(MAT, XLSX), os.path.join(FILES, XLSX))
    for fname, title, md_path in PAGES:
        build_page(fname, title, md_path)
        print("wrote", os.path.relpath(os.path.join(OUT, fname), ROOT))


if __name__ == "__main__":
    main()
