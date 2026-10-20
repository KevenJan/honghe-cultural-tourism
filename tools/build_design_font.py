"""生成游客端设计稿用的标题字体子集（思源宋体 Bold），只含 design/ 里用到的字。

用法：python3 tools/build_design_font.py [思源宋体 Bold 字体路径]
默认字体路径为 Noto Serif CJK Bold（apt 包 fonts-noto-cjk），需要 fonttools 和 brotli。
"""
import glob
import os
import sys

from fontTools import subset
from fontTools.ttLib import TTCollection

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DESIGN = os.path.join(ROOT, 'design')
FONT = sys.argv[1] if len(sys.argv) > 1 else '/usr/share/fonts/opentype/noto/NotoSerifCJK-Bold.ttc'


def main():
    files = glob.glob(os.path.join(DESIGN, '*.html')) + glob.glob(os.path.join(DESIGN, 'js/*.js'))
    files.append(os.path.join(ROOT, 'presentation/js/data.js'))
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
    out = os.path.join(DESIGN, 'fonts/hh-serif-bold.woff2')
    subset.save_font(font, out, opts)
    print('字体子集：%d 字，%d KB' % (len(set(text)), os.path.getsize(out) // 1024))


if __name__ == '__main__':
    main()
