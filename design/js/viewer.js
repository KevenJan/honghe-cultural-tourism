/* 设计稿查看器：index.html 总览、board.html 单页标注。画板数据来自 K.BOARDS。 */
(function () {
  var PAGES = K.PAGES, BOARDS = K.BOARDS;
  var BATCH = { 0: '全局', 1: '第 1 批 · 核心链路', 2: '第 2 批 · 下单链路', 3: '第 3 批 · 我的子页' };
  var pageIds = Object.keys(PAGES).sort(function (a, b) { return a === 'G' ? -1 : b === 'G' ? 1 : a < b ? -1 : 1; });
  function boardsOf(pid) { return BOARDS.filter(function (b) { return b.page === pid; }); }
  function html(b) { return typeof b.html === 'function' ? b.html() : b.html; }
  function scr(b) { return '<div class="scr' + (b.dark ? ' dark' : '') + '" style="--h:' + (b.h || 812) + 'px">' + html(b) + '</div>'; }
  var view = document.body.dataset.view;

  if (view === 'index') {
    var total = BOARDS.length, nPages = pageIds.filter(function (p) { return p !== 'G' && boardsOf(p).length; }).length;
    var byBatch = {};
    BOARDS.forEach(function (b) { var bt = PAGES[b.page].batch; byBatch[bt] = (byBatch[bt] || 0) + 1; });
    document.getElementById('nums').innerHTML =
      '<div><b>' + nPages + '</b><span>个页面</span></div><div><b>' + total + '</b><span>张画板（含状态）</span></div>' +
      [1, 2, 3, 0].map(function (k) { return '<div><b>' + (byBatch[k] || 0) + '</b><span>' + BATCH[k] + '</span></div>'; }).join('');
    var out = '';
    pageIds.forEach(function (pid) {
      var bs = boardsOf(pid), p = PAGES[pid];
      if (!bs.length) return;
      out += '<section class="v-pg" data-batch="' + p.batch + '"><h2><span class="id">' + pid + '</span>' + p.name + '<span class="bt">' + BATCH[p.batch] + '</span><small>' + p.route + ' · ' + p.module + ' · 需登录：' + p.login + ' · 规格 ' + p.spec + '</small></h2><div class="v-row">' +
        bs.map(function (b) {
          var h = b.h || 812;
          return '<div class="thumb" data-href="board.html#' + b.id + '"><div class="th" style="height:' + (h / 2) + 'px">' + scr(b) + '</div><div class="cap"><b>' + b.id + '</b>' + b.state + '</div></div>';
        }).join('') + '</div></section>';
    });
    document.getElementById('list').innerHTML = out;
    document.querySelectorAll('.thumb').forEach(function (t) { t.onclick = function () { location.href = t.dataset.href; }; });
    document.querySelectorAll('.v-filter button').forEach(function (btn) {
      btn.onclick = function () {
        document.querySelectorAll('.v-filter button').forEach(function (x) { x.classList.toggle('on', x === btn); });
        var f = btn.dataset.f;
        document.querySelectorAll('.v-pg').forEach(function (s) { s.style.display = (f === 'all' || s.dataset.batch === f) ? '' : 'none'; });
      };
    });
  }

  if (view === 'board') {
    var params = new URLSearchParams(location.search);
    if (params.get('clean')) document.body.classList.add('clean');
    var id = decodeURIComponent(location.hash.slice(1)) || BOARDS[0].id;
    var idx = BOARDS.findIndex(function (b) { return b.id === id; });
    if (idx < 0) idx = 0;
    var b = BOARDS[idx], p = PAGES[b.page];
    document.title = '红河同路 · ' + b.id + ' ' + p.name + ' · ' + b.state;
    document.getElementById('nav').innerHTML = pageIds.map(function (pid) {
      var bs = boardsOf(pid);
      if (!bs.length) return '';
      return '<div class="g">' + pid + ' ' + PAGES[pid].name + '</div>' + bs.map(function (x) { return '<a href="#' + x.id + '"' + (x.id === b.id ? ' class="on"' : '') + '>' + x.id + ' ' + x.state + '</a>'; }).join('');
    }).join('');
    document.getElementById('stage').innerHTML = scr(b) + '<div class="mk-layer" id="mk"></div>';
    var prev = BOARDS[idx - 1], next = BOARDS[idx + 1];
    var notes = (b.notes || []).map(function (nt) {
      if (typeof nt === 'string') return '<li><i class="g">·</i><span>' + nt + '</span></li>';
      return '<li><i>' + nt[0] + '</i><span>' + nt[1] + '</span></li>';
    }).join('');
    document.getElementById('notes').innerHTML =
      '<h1>' + b.id + ' ' + p.name + '</h1><div class="meta">状态：<b>' + b.state + '</b> · 路由 <code>' + p.route + '</code> · ' + p.module + ' · 需登录：' + p.login + ' · 规格 ' + p.spec + ' · 画板 375×' + (b.h || 812) + '</div>' +
      '<div class="states">' + boardsOf(b.page).map(function (x) { return '<a href="#' + x.id + '"' + (x.id === b.id ? ' class="on"' : '') + '>' + x.state + '</a>'; }).join('') + '</div>' +
      (b.desc ? '<div class="desc">' + b.desc + '</div>' : '') + '<ol>' + notes + '</ol>' +
      '<div class="pn">' + (prev ? '<a href="#' + prev.id + '">← ' + prev.id + ' ' + prev.state + '</a>' : '<span></span>') + (next ? '<a href="#' + next.id + '">' + next.id + ' ' + next.state + ' →</a>' : '') + '</div>';
    window.addEventListener('hashchange', function () { location.reload(); });
    document.getElementById('tg').onclick = function () { document.body.classList.toggle('no-mk'); };
    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft' && prev) location.hash = prev.id;
      if (e.key === 'ArrowRight' && next) location.hash = next.id;
    });
    window.addEventListener('load', function () {
      var s = document.querySelector('#stage > .scr'), base = s.getBoundingClientRect(), layer = document.getElementById('mk'), out = '';
      s.querySelectorAll('[data-n]').forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (!r.width && !r.height) return;
        var x = r.left - base.left, y = r.top - base.top;
        out += '<div class="mk-box" style="left:' + x + 'px;top:' + y + 'px;width:' + r.width + 'px;height:' + r.height + 'px"></div><i class="mk" style="left:' + Math.max(x, 4) + 'px;top:' + Math.max(y, 4) + 'px">' + el.dataset.n + '</i>';
      });
      if ((b.h || 812) > 812) out += '<div class="fold" style="top:812px"><span>首屏 812</span></div>';
      layer.innerHTML = out;
      document.body.dataset.ready = '1';
    });
  }
})();
