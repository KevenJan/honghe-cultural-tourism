/* 红河同路 · 汇报翻页：等比缩放、键盘 / 触摸翻页、地址栏页码、全屏、放大概念稿 */
(function () {
  var stage = document.getElementById('stage');
  var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
  var pager = document.getElementById('pager'), bar = document.getElementById('progress');
  var cur = 0;

  function notesOf(s) { var a = s.querySelector('aside.notes'); return a ? a.innerHTML : ''; }

  if (/[?&]mode=script\b/.test(location.search)) {
    document.body.classList.add('script');
    var box = document.createElement('div');
    box.id = 'script';
    box.innerHTML = '<h1>红河同路 · 汇报讲稿</h1><p class="hint">共 ' + slides.length + ' 页。打印本页即可得到纸质讲稿；去掉地址里的 ?mode=script 回到演示。</p>' +
      slides.map(function (s, i) {
        return '<section><h2><span>第 ' + (i + 1) + ' 页</span>' + s.dataset.title + '</h2>' + (notesOf(s) || '<p>（本页无讲稿）</p>') + '</section>';
      }).join('');
    document.body.appendChild(box);
    return;
  }

  var notesPanel = document.createElement('div');
  notesPanel.id = 'notes-panel';
  document.body.appendChild(notesPanel);
  function renderNotes() {
    notesPanel.innerHTML = '<h6>第 ' + (cur + 1) + ' 页讲稿 · 按 N 关闭</h6>' + (notesOf(slides[cur]) || '<p>（本页无讲稿）</p>');
  }
  function toggleNotes() { notesPanel.classList.toggle('open'); renderNotes(); }

  function fit() {
    var k = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    stage.style.transformOrigin = '50% 50%';
    stage.style.transform = 'translate(-50%, -50%) scale(' + k + ')';
  }

  function go(n, fromHash) {
    n = Math.max(0, Math.min(slides.length - 1, n));
    if (n === cur && slides[cur].classList.contains('is-current')) return;
    slides[cur].classList.remove('is-current');
    cur = n;
    slides[cur].classList.add('is-current');
    pager.textContent = (cur + 1) + ' / ' + slides.length;
    bar.style.width = ((cur + 1) / slides.length * 100) + '%';
    document.title = slides[cur].dataset.title + ' · 红河同路汇报';
    if (!fromHash) history.replaceState(null, '', '#' + (cur + 1));
    closeLightbox();
    if (notesPanel.classList.contains('open')) renderNotes();
  }
  function fromHash() {
    var n = parseInt((location.hash || '#1').slice(1), 10);
    go(isNaN(n) ? 0 : n - 1, true);
  }

  document.addEventListener('keydown', function (e) {
    if (e.target.closest && e.target.closest('.seed')) return;
    switch (e.key) {
      case 'ArrowRight': case 'PageDown': case ' ': case 'ArrowDown': e.preventDefault(); go(cur + 1); break;
      case 'ArrowLeft': case 'PageUp': case 'ArrowUp': e.preventDefault(); go(cur - 1); break;
      case 'Home': go(0); break;
      case 'End': go(slides.length - 1); break;
      case 'f': case 'F': toggleFull(); break;
      case 'n': case 'N': toggleNotes(); break;
      case 'Escape': closeLightbox(); break;
    }
  });

  var tx = null, ty = null;
  document.addEventListener('touchstart', function (e) { tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
  document.addEventListener('touchend', function (e) {
    if (tx === null) return;
    var dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) go(cur + (dx < 0 ? 1 : -1));
    tx = null;
  });

  function toggleFull() {
    if (!document.fullscreenElement) { (document.documentElement.requestFullscreen || function () {}).call(document.documentElement); }
    else if (document.exitFullscreen) document.exitFullscreen();
  }
  document.getElementById('btn-prev').onclick = function () { go(cur - 1); };
  document.getElementById('btn-next').onclick = function () { go(cur + 1); };
  document.getElementById('btn-full').onclick = toggleFull;
  document.getElementById('btn-notes').onclick = toggleNotes;

  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); go(parseInt(a.getAttribute('href').slice(1), 10) - 1); });
  });

  var lb = document.getElementById('lightbox');
  document.querySelectorAll('.gallery figure').forEach(function (f) {
    f.addEventListener('click', function () { lb.querySelector('img').src = f.dataset.full; lb.classList.add('open'); });
  });
  lb.addEventListener('click', closeLightbox);
  function closeLightbox() { lb.classList.remove('open'); }

  window.addEventListener('resize', fit);
  window.addEventListener('hashchange', fromHash);
  setTimeout(function () { var h = document.getElementById('help'); if (h) h.style.opacity = '0'; }, 5000);
  fit();
  cur = 0;
  fromHash();
  if (!slides[cur].classList.contains('is-current')) slides[cur].classList.add('is-current');
})();
