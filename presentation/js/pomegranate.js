/* 红河同路 · 同心石榴：按 pomegranate-layout.json 绘制，并实现点籽放大 */
(function () {
  var L = window.PG_LAYOUT, H = window.HH;
  var SITE_LBL = { yisa: [58, 52], forest: [342, 52], oldtown: [52, 408], samaba: [348, 408] };

  function build(opts) {
    var lit = opts.lit || [], done = opts.done || [];
    var out = '<svg class="pg-svg" viewBox="0 0 400 420" xmlns="http://www.w3.org/2000/svg">' +
      '<defs><radialGradient id="pgRuby" cx="35%" cy="30%" r="75%"><stop offset="0" stop-color="#E2626A"/><stop offset=".55" stop-color="#B8323A"/><stop offset="1" stop-color="#7E1F27"/></radialGradient></defs>' +
      '<path class="rind" d="M176 70 L168 40 L186 54 L200 30 L214 54 L232 40 L224 70 Z"/>' +
      '<circle class="rind" cx="200" cy="230" r="179"/><circle class="rind-in" cx="200" cy="230" r="165"/>' +
      '<path class="membrane" d="M200 71 Q206 230 200 389"/><path class="membrane" d="M41 230 Q200 224 359 230"/>';
    ['yisa', 'forest', 'oldtown', 'samaba'].forEach(function (site) {
      out += '<g class="chamber ' + (lit.indexOf(site) > -1 ? 'is-lit' : 'is-locked') + '" data-site="' + site + '">';
      var labels = '';
      L.seeds.forEach(function (s) {
        if (s[0] !== site) return;
        var named = s[2] === 1, cls = 'seed', attr = '';
        if (named) {
          var c = H.get(site, s[1]);
          cls += ' named';
          if (c.type === 'pending') cls += ' is-pending';
          if (done.indexOf(site + '-' + s[1]) > -1) cls += ' is-done';
          attr = ' data-site="' + site + '" data-ethnic="' + s[1] + '" tabindex="0" role="button" aria-label="' + H.SITES[site].name + '，' + H.ETHNIC[s[1]] + '，' + (c.type === 'pending' ? '整理中' : '可认识') + '"';
          if (opts.labels) labels += '<text class="lbl" x="' + s[3] + '" y="' + (s[4] + s[6] + 8) + '" style="font-size:9px;fill:#22201C;font-weight:600;paint-order:stroke;stroke:#F6EBDC;stroke-width:3px">' + H.ETHNIC[s[1]] + '</text>';
        }
        out += '<ellipse class="' + cls + '"' + attr + ' cx="' + s[3] + '" cy="' + s[4] + '" rx="' + s[5] + '" ry="' + s[6] + '" transform="rotate(' + s[7] + ' ' + s[3] + ' ' + s[4] + ')"/>';
      });
      out += labels + '</g>';
      if (!opts.mini) out += '<text class="site-lbl" x="' + SITE_LBL[site][0] + '" y="' + SITE_LBL[site][1] + '">' + H.SITES[site].name + '</text>';
    });
    return out + '</svg>';
  }

  function list(v) { return v ? v.split(',') : []; }

  document.querySelectorAll('.pg-mount').forEach(function (m) {
    m.innerHTML = build({ lit: list(m.dataset.lit), done: list(m.dataset.done), labels: !!m.dataset.labels, mini: !!m.dataset.mini });
  });

  /* ---------- 互动演示 ---------- */
  var phoneEl = document.querySelector('#pg-phone .phone');
  if (!phoneEl) return;
  var mount = phoneEl.querySelector('.pg-mount');
  var zoom = phoneEl.querySelector('.zoom'), panel = zoom.querySelector('.z-panel'), lines = zoom.querySelector('.lines');
  var detail = phoneEl.querySelector('.detail');
  var state = { lit: list(mount.dataset.lit), done: list(mount.dataset.done) };
  var initial = { lit: state.lit.slice(), done: state.done.slice() };
  var CENTER = [187.5, 318], MAIN = 150;
  var SAT = [[72, 196], [303, 196], [72, 436], [303, 436]];

  function redraw(flashSite) {
    mount.innerHTML = build({ lit: state.lit, done: state.done });
    if (flashSite) {
      var g = mount.querySelector('.chamber[data-site="' + flashSite + '"]');
      if (g) g.classList.add('flash');
    }
    phoneEl.querySelector('[data-stat="lit"]').textContent = '已点亮 ' + state.lit.length + ' 瓣';
    phoneEl.querySelector('[data-stat="done"]').textContent = '认识 ' + state.done.length + ' 颗籽';
    document.querySelectorAll('#pg-controls [data-site]').forEach(function (b) {
      var on = state.lit.indexOf(b.dataset.site) > -1;
      b.style.background = on ? 'var(--terracotta)' : '';
      b.style.color = on ? '#fff' : '';
      b.textContent = (on ? '✓ ' : '') + H.SITES[b.dataset.site].name;
    });
  }

  function scaleK() { return phoneEl.getBoundingClientRect().width / 395; }
  function seedPos(site, ethnic) {
    var e = mount.querySelector('.seed[data-site="' + site + '"][data-ethnic="' + ethnic + '"]');
    var r = e.getBoundingClientRect(), p = phoneEl.getBoundingClientRect(), k = scaleK();
    return [(r.left + r.width / 2 - p.left) / k - 10, (r.top + r.height / 2 - p.top) / k - 10, r.width / k];
  }
  function place(el, x, y, d) { el.style.left = (x - d / 2) + 'px'; el.style.top = (y - d / 2) + 'px'; el.style.width = d + 'px'; el.style.height = d + 'px'; }

  function open(site, ethnic) {
    zoom.querySelectorAll('.z-seed,.z-cap').forEach(function (n) { n.remove(); });
    var c = H.get(site, ethnic), isLit = state.lit.indexOf(site) > -1;
    var main = document.createElement('div');
    main.className = 'z-seed main' + (c.type === 'pending' ? ' pending' : '');
    main.innerHTML = '<b>' + H.ETHNIC[ethnic] + '</b><span>' + H.SITES[site].at + '</span>';
    var start = seedPos(site, ethnic);
    place(main, start[0], start[1], start[2]);
    zoom.appendChild(main);

    var others = H.ORDER.filter(function (e) { return e !== ethnic; });
    var svg = '';
    others.forEach(function (e, i) {
      var oc = H.get(site, e), s = document.createElement('div');
      s.className = 'z-seed sat' + (oc.type === 'pending' ? ' pending' : '');
      s.textContent = H.ETHNIC[e];
      s.dataset.ethnic = e;
      s.style.cursor = 'pointer';
      place(s, SAT[i][0], SAT[i][1], 54);
      s.addEventListener('click', function () { switchTo(site, e); });
      zoom.appendChild(s);
      var cap = document.createElement('div');
      cap.className = 'z-cap';
      cap.textContent = (c.caps && c.caps[e]) || '一起住在红河';
      cap.style.left = SAT[i][0] + 'px'; cap.style.top = (SAT[i][1] + 32) + 'px';
      zoom.appendChild(cap);
      svg += '<line x1="' + CENTER[0] + '" y1="' + CENTER[1] + '" x2="' + SAT[i][0] + '" y2="' + SAT[i][1] + '"/>';
    });
    lines.setAttribute('viewBox', '0 0 375 812');
    lines.innerHTML = svg;

    var lockNote = isLit ? '' : '<span class="chip white" style="margin-bottom:8px">还没在这一站打卡 · 可以看，不能答题记分</span><br>';
    var body;
    if (c.type === 'ok') {
      body = '<h5>' + H.SITES[site].common + '</h5><p>' + c.cards.map(function (k) { return k.t + '（' + k.tag + '）'; }).join('、') + '</p><span class="btn gold block" data-detail>认识这颗籽</span>';
    } else if (c.type === 'index') {
      body = '<h5>' + c.fact + '</h5><p>' + (c.go.length ? '在哪一站可以认识更多：' : '这颗籽的内容正在和县文化馆、民宗局一起整理') + '</p>' +
        (c.go.length ? '<div class="links">' + c.go.map(function (g) { return '<button data-go="' + g[0] + ',' + g[1] + '">' + g[2] + ' →</button>'; }).join('') + '</div>' : '');
    } else {
      var avail = H.okSeeds(site);
      body = '<h5>我们也住在红河县</h5><p>' + (c.note || '这颗籽的内容正在和县文化馆、民宗局一起整理') + '</p>' +
        (avail.length ? '<p style="margin-top:8px">这一瓣可以先认识：</p><div class="links">' + avail.map(function (e) { return '<button data-go="' + site + ',' + e + '">' + H.ETHNIC[e] + ' →</button>'; }).join('') + '</div>'
          : '<div class="links"><button data-go="samaba,hani">先去撒玛坝看看 →</button></div>');
    }
    panel.innerHTML = lockNote + body;
    zoom.classList.add('open');
    requestAnimationFrame(function () { requestAnimationFrame(function () { place(main, CENTER[0], CENTER[1], MAIN); }); });
    zoom.dataset.site = site; zoom.dataset.ethnic = ethnic;
  }

  function close(cb) {
    var main = zoom.querySelector('.z-seed.main');
    if (main && zoom.dataset.site) {
      var p = seedPos(zoom.dataset.site, zoom.dataset.ethnic);
      place(main, p[0], p[1], p[2]);
      main.style.opacity = '0';
    }
    zoom.classList.remove('open');
    setTimeout(function () { zoom.querySelectorAll('.z-seed,.z-cap').forEach(function (n) { n.remove(); }); if (cb) cb(); }, 320);
  }
  function switchTo(site, ethnic) { close(function () { open(site, ethnic); }); }

  function openDetail(site, ethnic) {
    detail.innerHTML = window.HHScreens.detailInner(site, ethnic);
    detail.classList.add('open');
    detail.querySelector('[data-back]').addEventListener('click', function () { detail.classList.remove('open'); });
    detail.querySelectorAll('[data-ans]').forEach(function (b) {
      b.addEventListener('click', function () {
        var right = b.dataset.ans === '1';
        b.classList.add(right ? 'right' : 'wrong');
        if (right && state.lit.indexOf(site) > -1) {
          var id = site + '-' + ethnic;
          if (state.done.indexOf(id) < 0) state.done.push(id);
          redraw();
          b.innerHTML = b.textContent + ' · 已认识';
        } else if (right) {
          b.innerHTML = b.textContent + ' · 打卡后计分';
        }
      });
    });
  }

  mount.addEventListener('click', function (e) {
    var t = e.target.closest('.seed.named');
    if (t) open(t.dataset.site, t.dataset.ethnic);
  });
  mount.addEventListener('keydown', function (e) {
    var t = e.target.closest('.seed.named');
    if (t && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); e.stopPropagation(); open(t.dataset.site, t.dataset.ethnic); }
  });
  zoom.querySelector('.dim').addEventListener('click', function () { close(); });
  zoom.querySelector('.z-close').addEventListener('click', function () { close(); });
  panel.addEventListener('click', function (e) {
    var go = e.target.closest('[data-go]');
    if (go) { var g = go.dataset.go.split(','); switchTo(g[0], g[1]); return; }
    if (e.target.closest('[data-detail]')) { var s = zoom.dataset.site, en = zoom.dataset.ethnic; close(function () { openDetail(s, en); }); }
  });

  document.querySelectorAll('#pg-controls [data-site]').forEach(function (b) {
    b.addEventListener('click', function () {
      var s = b.dataset.site, i = state.lit.indexOf(s);
      if (i > -1) { state.lit.splice(i, 1); state.done = state.done.filter(function (d) { return d.indexOf(s + '-') !== 0; }); redraw(); }
      else { state.lit.push(s); redraw(s); }
    });
  });
  var reset = document.querySelector('#pg-controls [data-reset]');
  if (reset) reset.addEventListener('click', function () {
    close(); detail.classList.remove('open');
    state.lit = initial.lit.slice(); state.done = initial.done.slice(); redraw();
  });
  redraw();
  window.HHPomegranate = { close: close, reset: function () { reset && reset.click(); } };
})();
