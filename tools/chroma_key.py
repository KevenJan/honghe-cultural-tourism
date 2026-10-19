import sys, os
import numpy as np
from PIL import Image
from scipy import ndimage

def chroma_cut(src, dst, size, t_bg=55, t_lo=28, t_hi=62, pad=1.08, min_hole=40):
    im = Image.open(src).convert("RGB")
    a = np.array(im).astype(float)
    h, w, _ = a.shape
    border = np.concatenate([a[:8].reshape(-1, 3), a[-8:].reshape(-1, 3), a[:, :8].reshape(-1, 3), a[:, -8:].reshape(-1, 3)])
    key = np.median(border, axis=0)
    d = np.sqrt(((a - key) ** 2).sum(axis=2))

    # 背景：接近底色、并且和边框连通的区域，再加上被主体包住的大块底色（如四条腿之间）
    near = d < t_bg
    lab, n = ndimage.label(near)
    edge_labels = set(np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))) - {0}
    sizes = ndimage.sum(near, lab, range(1, n + 1))
    bg_ids = [i + 1 for i in range(n) if (i + 1) in edge_labels or sizes[i] > min_hole]
    bg = np.isin(lab, bg_ids) | (d < 38)

    # 柔边只在轮廓两侧 3 像素内计算
    band = ndimage.binary_dilation(bg, iterations=3) & ndimage.binary_dilation(~bg, iterations=3)
    alpha = np.where(bg, 0.0, 1.0)
    soft = np.clip((d - t_lo) / (t_hi - t_lo), 0, 1)
    alpha[band] = soft[band]

    # 去溢色：半透明像素的颜色取最近的完全不透明主体像素
    solid = alpha >= 0.999
    _, (iy, ix) = ndimage.distance_transform_edt(~solid, return_indices=True)
    rgb = a.copy()
    fix = alpha < 0.999
    rgb[fix] = a[iy[fix], ix[fix]]

    # 轮廓带内：底色偏红紫时压掉蓝通道多出的部分，并整体收进 1 像素
    near_bg = ndimage.binary_dilation(bg, iterations=4) & ~bg
    if key[2] > key[1]:
        rgb[..., 2] = np.where(near_bg, np.minimum(rgb[..., 2], np.maximum(rgb[..., 1], a[iy, ix, 2] * 0 + rgb[..., 1])), rgb[..., 2])
        rgb[..., 0] = np.where(near_bg, np.minimum(rgb[..., 0], rgb[..., 1] + 90), rgb[..., 0])
    if key[1] > key[0] and key[1] > key[2]:
        rgb[..., 1] = np.where(near_bg, np.minimum(rgb[..., 1], np.maximum(rgb[..., 0], rgb[..., 2])), rgb[..., 1])
    if key[2] > key[0] and key[2] > key[1]:
        rgb[..., 2] = np.where(near_bg, np.minimum(rgb[..., 2], np.maximum(rgb[..., 0], rgb[..., 1])), rgb[..., 2])
    if key[0] > key[1] + 80 and key[2] > key[1] + 30:
        pink = (rgb[..., 2] > rgb[..., 1] + 12) & (rgb[..., 0] > rgb[..., 1] + 40)
        rgb[..., 2] = np.where(pink, rgb[..., 1], rgb[..., 2])
    alpha = np.where(near_bg, np.minimum(alpha, ndimage.minimum_filter(alpha, size=3)), alpha)
    rgba = np.dstack([rgb, alpha * 255]).astype(np.uint8)
    img = Image.fromarray(rgba, "RGBA")
    img = img.crop(img.getbbox())
    cw, ch = img.size
    side = int(max(cw, ch) * pad)
    canvas = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    canvas.paste(img, ((side - cw) // 2, (side - ch) // 2), img)
    canvas = canvas.resize((size, size), Image.LANCZOS)
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    canvas.save(dst, optimize=True)
    return canvas, key

if __name__ == "__main__":
    src, dst, size = sys.argv[1], sys.argv[2], int(sys.argv[3])
    _, key = chroma_cut(src, dst, size)
    print(os.path.basename(dst), key.round())
