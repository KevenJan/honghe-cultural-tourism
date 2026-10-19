"""重新生成汇报稿的石榴籽坐标脚本和标题字体子集。

用法：python3 tools/build_presentation_font.py [思源宋体 Bold 字体路径]
默认字体路径为 Noto Serif CJK Bold（apt 包 fonts-noto-cjk），需要 fonttools 和 brotli。
"""
import glob
import json
import os
import sys

from fontTools import subset
from fontTools.ttLib import TTCollection

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PRES = os.path.join(ROOT, 'presentation')
FONT = sys.argv[1] if len(sys.argv) > 1 else '/usr/share/fonts/opentype/noto/NotoSerifCJK-Bold.ttc'


def build_layout():
    src = os.path.join(ROOT, 'assets/illustrations/pomegranate/pomegranate-layout.json')
    d = json.load(open(src, encoding='utf-8'))
    seeds = [[s['site'], s['ethnic'] or '', 1 if s['named'] else 0, s['cx'], s['cy'], s['rx'], s['ry'], s['rotate']]
             for s in d['seeds']]
    data = {'viewBox': d['viewBox'], 'center': d['center'], 'radius': d['radius'], 'seeds': seeds}
    with open(os.path.join(PRES, 'js/layout.js'), 'w', encoding='utf-8') as f:
        f.write('/* 由 assets/illustrations/pomegranate/pomegranate-layout.json 生成：[站, 民族, 是否命名籽, cx, cy, rx, ry, rotate] */\n')
        f.write('window.PG_LAYOUT = ' + json.dumps(data, ensure_ascii=False, separators=(',', ':')) + ';\n')


def build_font():
    files = [os.path.join(PRES, 'index.html')] + glob.glob(os.path.join(PRES, 'js/*.js'))
    text = ''.join(open(p, encoding='utf-8').read() for p in files)
    opts = subset.Options()
    opts.flavor = 'woff2'
    opts.layout_features = ['*']
    opts.name_IDs = ['*']
    if FONT.endswith('.ttc'):
        fonts = TTCollection(FONT).fonts
        opts.font_number = next(i for i, f in enumerate(fonts) if 'Serif CJK SC' in f['name'].getDebugName(1))
    font = subset.load_font(FONT, opts)
    sub = subset.Subsetter(opts)
    sub.populate(text=''.join(sorted(set(text))))
    sub.subset(font)
    out = os.path.join(PRES, 'fonts/hh-serif-bold.woff2')
    subset.save_font(font, out, opts)
    print('字体子集：%d 字，%d KB' % (len(set(text)), os.path.getsize(out) // 1024))


if __name__ == '__main__':
    build_layout()
    build_font()
