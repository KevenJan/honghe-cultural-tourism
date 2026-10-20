/* 红河同路 · 设计稿公共片段与画板登记。所有画板 html 都由这些片段拼成，改一处全部同步。 */
window.K = (function () {
  var A = '../assets/';
  var SF = { yisa: '01-yisa-gateway', forest: '02-forest-park', oldtown: '03-mabang-oldtown', samaba: '04-samaba-terraces' };
  var SITE = {
    yisa:    { name: '迤萨路口', short: '迤萨路口', theme: '同一条路', line: '从这里进红河', park: '出口后访客停车场', town: '迤萨镇', ab: '路口' },
    forest:  { name: '马帮侨乡森林公园', short: '森林公园', theme: '同一沟水', line: '大家共用一沟水', park: '游客中心停车场', town: '迤萨镇', ab: '森林' },
    oldtown: { name: '马帮古城', short: '马帮古城', theme: '同一条街', line: '出门的人和等的人', park: '东门街停车场', town: '迤萨镇', ab: '古城' },
    samaba:  { name: '撒玛坝梯田', short: '撒玛坝', theme: '同一片田', line: '同一片梯田，同一张长桌', park: '观景台停车场', town: '宝华镇', ab: '梯田' }
  };
  var ORDER = ['yisa', 'forest', 'oldtown', 'samaba'];

  var img = {
    site: function (k, w) { return A + 'illustrations/sites/site-' + SF[k] + '@' + (w || 750) + 'w.webp'; },
    seal: function (k, locked) { return A + 'seals/seal-' + SF[k] + (locked ? '-locked' : '') + '@240.webp'; },
    heritage: function (n, w) { return A + 'illustrations/heritage/heritage-' + n + '@' + (w || 690) + 'w.webp'; },
    mascot: function (n) { return A + 'mascot/tuotuo-' + n + '@400.webp'; },
    grid: function (n) { return A + 'icons/grid/grid-' + n + '@192.webp'; },
    tab: function (n, on) { return A + 'icons/tab/tab-' + n + (on ? '-active' : '') + '.svg'; },
    ui: function (n) { return A + 'icons/ui/ui-' + n + '.svg'; },
    badge: function (k) { return A + 'motifs/badges/badge-site-' + k + '.svg'; },
    motif: function (n) { return A + 'motifs/' + n + '.svg'; },
    logo: function (n) { return A + 'logo/logo-' + n; },
    pgHero: A + 'illustrations/pomegranate/pomegranate-hero@600.webp'
  };

  /* 线性图标（24 网格，1.8 描边）。素材包里没有的图标先用这里的，定稿后导出 SVG 补进 assets/icons/ui/ */
  var P = {
    heart: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
    heartF: '<path fill="currentColor" d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
    search: '<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    phone: '<path d="M6 3h3l1.5 4.5-2 1.5a11 11 0 0 0 6.5 6.5l1.5-2L21 15v3a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2z"/>',
    star: '<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z"/>',
    starF: '<path fill="currentColor" d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z"/>',
    camera: '<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
    copy: '<rect x="8" y="8" width="11" height="11" rx="2"/><path d="M5 15V6a1 1 0 0 1 1-1h9"/>',
    truck: '<path d="M3 6h11v10H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
    gift: '<rect x="4" y="9" width="16" height="11" rx="1"/><path d="M3 9h18M12 9v11M12 9c-1.5-4-6-4-5-1.2.6 1.4 5 1.2 5 1.2zM12 9c1.5-4 6-4 5-1.2-.6 1.4-5 1.2-5 1.2z"/>',
    store: '<path d="M4 9l1.5-5h13L20 9M4 9h16v11H4zM9 20v-6h6v6"/>',
    clock: '<circle cx="12" cy="12" r="8"/><path d="M12 7.5V12l3 2"/>',
    info: '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5M12 8v.2"/>',
    warn: '<path d="M12 4l9 16H3z"/><path d="M12 10v4M12 17v.2"/>',
    wifiOff: '<path d="M3 3l18 18M8.5 16a5 5 0 0 1 7 0M5 12.5a10 10 0 0 1 4-2.3M12 9.5a10 10 0 0 1 7 3M2 9a15 15 0 0 1 5-2.8M10.5 5.6A15 15 0 0 1 22 9"/><circle cx="12" cy="19.5" r=".8" fill="currentColor"/>',
    download: '<path d="M12 4v11M7 10.5l5 5 5-5M5 20h14"/>',
    trash: '<path d="M5 7h14M10 7V4.5h4V7M7 7l1 13h8l1-13"/>',
    edit: '<path d="M4 20h4L19 9l-4-4L4 16zM13.5 6.5l4 4"/>',
    user: '<circle cx="12" cy="8.5" r="3.5"/><path d="M5 20a7 7 0 0 1 14 0"/>',
    users: '<circle cx="9" cy="9" r="3"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0M15.5 6.2a3 3 0 0 1 0 5.6M17 14.2A5.5 5.5 0 0 1 20.5 19"/>',
    down: '<path d="M6 9l6 6 6-6"/>',
    up: '<path d="M6 15l6-6 6 6"/>',
    right: '<path d="M9 6l6 6-6 6"/>',
    refresh: '<path d="M19 12a7 7 0 1 1-2-4.9M19 4v4h-4"/>',
    lock: '<rect x="5" y="10.5" width="14" height="9.5" rx="2"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>',
    pin: '<path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>',
    sound: '<path d="M4 9.5h3.5L12 6v12l-4.5-3.5H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/>',
    okC: '<circle cx="12" cy="12" r="8.5"/><path d="M8 12.2l2.8 2.8L16.3 9.5"/>',
    xC: '<circle cx="12" cy="12" r="8.5"/><path d="M9 9l6 6M15 9l-6 6"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    more: '<circle cx="6" cy="12" r="1.3" fill="currentColor"/><circle cx="12" cy="12" r="1.3" fill="currentColor"/><circle cx="18" cy="12" r="1.3" fill="currentColor"/>',
    doc: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',
    map: '<path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z"/><path d="M9 4v14M15 6v14"/>',
    shield: '<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/><path d="M9 12l2 2 4-4"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5M8 7h7"/>',
    globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c3 3 3 14 0 17M12 3.5c-3 3-3 14 0 17"/>',
    setting: '<circle cx="12" cy="12" r="3"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"/>',
    chat: '<path d="M4 5h16v11H9l-5 4z"/>',
    flag: '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
    pkg: '<path d="M3.5 7.5L12 3l8.5 4.5v9L12 21l-8.5-4.5z"/><path d="M3.5 7.5L12 12l8.5-4.5M12 12v9"/>'
  };
  function i(name, size, color, extra) {
    return '<svg class="ic" width="' + (size || 20) + '" height="' + (size || 20) + '" viewBox="0 0 24 24" fill="none" stroke="' + (color || 'currentColor') + '" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"' + (extra ? ' style="' + extra + '"' : '') + '>' + P[name] + '</svg>';
  }
  function ui(name, style) { return '<img src="' + img.ui(name) + '" alt="" style="' + (style || 'width:20px') + '">'; }

  /* 顶部：状态栏 + 微信导航栏。opts: back, dark, over(浮在图上), left(左侧文字按钮), sticky */
  function top(title, o) {
    o = o || {};
    var dark = o.dark ? ' on-dark' : '';
    var back = o.back === false ? '' : '<img class="back" src="' + img.ui('back') + '" alt=""' + (o.dark ? ' style="filter:invert(1)"' : '') + '>';
    if (o.noBack) back = '';
    return '<div class="ph-top' + (o.over ? ' over' : '') + (o.sticky ? ' sticky' : '') + '"' + (o.n ? ' data-n="' + o.n + '"' : '') + '>' +
      '<div class="ph-status' + dark + '"><span>9:41</span><span class="bat"></span></div>' +
      '<div class="ph-nav' + dark + '">' + back + (o.left ? '<span class="left-t">' + o.left + '</span>' : '') + (title || '') + '<span class="capsule"></span></div></div>';
  }
  function tab(on, n) {
    var items = [['home', '首页'], ['sites', '四站'], ['mid', '问驮驮'], ['goods', '好物'], ['me', '我的']];
    return '<nav class="ph-tab"' + (n ? ' data-n="' + n + '"' : '') + '>' + items.map(function (it) {
      if (it[0] === 'mid') return '<a class="mid' + (on === 'ask' ? ' on' : '') + '"><span><img src="' + img.mascot('07-avatar') + '" alt=""></span><em>问驮驮</em></a>';
      var isOn = it[0] === on;
      return '<a class="' + (isOn ? 'on' : '') + '"><img src="' + img.tab(it[0], isOn) + '" alt="" style="' + (isOn ? '' : 'opacity:.5') + '">' + it[1] + '</a>';
    }).join('') + '</nav>';
  }
  function bar(inner, n, style) { return '<div class="ph-bar"' + (n ? ' data-n="' + n + '"' : '') + (style ? ' style="' + style + '"' : '') + '>' + inner + '</div>'; }
  function body(inner, cls, style) { return '<div class="ph-body ' + (cls || '') + '"' + (style ? ' style="' + style + '"' : '') + '>' + inner + '</div>'; }
  function btn(t, cls, n, style) { return '<span class="btn ' + (cls || 'primary') + '"' + (n ? ' data-n="' + n + '"' : '') + (style ? ' style="' + style + '"' : '') + '>' + t + '</span>'; }
  function chip(t, cls, style) { return '<span class="chip ' + (cls || '') + '"' + (style ? ' style="' + style + '"' : '') + '>' + t + '</span>'; }
  function n(num) { return ' data-n="' + num + '"'; }

  function mask() { return '<div class="mask"></div>'; }
  function sheet(title, inner, o) {
    o = o || {};
    return mask() + '<div class="sheet"' + (o.n ? n(o.n) : '') + '>' + (o.close ? '<span class="sh-x">' + i('x', 16, '#6E6A63') + '</span>' : '') +
      (title ? '<div class="sh-t">' + title + '</div>' : '') + (o.desc ? '<div class="sh-d">' + o.desc + '</div>' : '') + inner + '</div>';
  }
  function dialog(title, bodyHtml, btns, o) {
    o = o || {};
    return mask() + '<div class="dialog"' + (o.n ? n(o.n) : '') + '>' + (o.icon || '') + '<div class="dl-t">' + title + '</div>' + (bodyHtml ? '<div class="dl-b">' + bodyHtml + '</div>' : '') +
      '<div class="dl-btns">' + btns.map(function (b) { return btn(b[0], b[1] || 'primary'); }).join('') + '</div></div>';
  }
  function toast(t, icon) { return '<div class="toast">' + (icon ? i(icon, 28, '#fff') : '') + '<span>' + t + '</span></div>'; }
  function offline(t) { return '<div class="offline">' + i('wifiOff', 14) + (t || '现在没有网络，已下载的站点可以照常看、听、打卡') + '</div>'; }

  function cells(rows) {
    return '<div class="cells">' + rows.map(function (r) {
      if (typeof r === 'string') r = [r];
      return '<div class="cell' + (r[3] ? ' ' + r[3] : '') + '">' + (r[2] ? r[2] : '') + '<span>' + r[0] + '</span>' + (r[1] ? '<span class="v">' + r[1] + '</span>' : '<span class="v"></span>') + '<img class="arr" src="' + img.ui('chevron-right') + '" alt=""></div>';
    }).join('') + '</div>';
  }

  /* 示意二维码（不可扫） */
  function qr(seed, size) {
    var nn = 25, s = seed || 7, cellsH = '';
    function rnd() { s = (s * 9301 + 49297) % 233280; return s / 233280; }
    function finder(x, y) { return '<rect x="' + x + '" y="' + y + '" width="7" height="7" fill="#22201C"/><rect x="' + (x + 1) + '" y="' + (y + 1) + '" width="5" height="5" fill="#fff"/><rect x="' + (x + 2) + '" y="' + (y + 2) + '" width="3" height="3" fill="#22201C"/>'; }
    for (var y = 0; y < nn; y++) for (var x = 0; x < nn; x++) {
      var inF = (x < 8 && y < 8) || (x > nn - 9 && y < 8) || (x < 8 && y > nn - 9);
      if (!inF && rnd() > .52) cellsH += '<rect x="' + x + '" y="' + y + '" width="1" height="1"/>';
    }
    return '<svg width="' + (size || 196) + '" height="' + (size || 196) + '" viewBox="-1 -1 27 27" shape-rendering="crispEdges" style="display:block;margin:0 auto"><rect x="-1" y="-1" width="27" height="27" fill="#fff"/><g fill="#22201C">' + cellsH + '</g>' + finder(0, 0) + finder(nn - 7, 0) + finder(0, nn - 7) + '</svg>';
  }
  /* 石榴：由 presentation/js/pomegranate.js 挂载 */
  function pg(o) {
    o = o || {};
    return '<div class="pg-mount" data-lit="' + (o.lit || '') + '" data-done="' + (o.done || '') + '"' + (o.mini ? ' data-mini="1"' : '') + (o.labels ? ' data-labels="1"' : '') + ' style="' + (o.style || '') + '"></div>';
  }
  function avatar(size, frame) {
    var s = size || 56;
    return '<div class="me-av" style="width:' + s + 'px;height:' + s + 'px' + (frame ? ';box-shadow:0 0 0 3px #D9A441, 0 0 0 6px rgba(184,50,58,.35)' : '') + '"></div>';
  }
  function sk(w, h, style) { return '<div class="sk" style="width:' + w + ';height:' + h + 'px;' + (style || '') + '"></div>'; }

  /* ---------- 页面与画板登记 ---------- */
  var PAGES = {}, BOARDS = [];
  function page(id, o) { o.id = id; PAGES[id] = o; }
  function add(b) { BOARDS.push(b); }

  return {
    A: A, SITE: SITE, ORDER: ORDER, img: img, i: i, ui: ui, top: top, tab: tab, bar: bar, body: body, btn: btn, chip: chip, n: n,
    mask: mask, sheet: sheet, dialog: dialog, toast: toast, offline: offline, cells: cells, qr: qr, pg: pg, avatar: avatar, sk: sk,
    PAGES: PAGES, BOARDS: BOARDS, page: page, add: add
  };
})();
