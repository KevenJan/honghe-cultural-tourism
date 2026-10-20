/* 第 3 批：我的二级页 P26、P28–P33（P27 不在本文件；P34 只有首页 Toast，已在 boards-core.js） */
(function () {
  var K = window.K, S = K.SITE, img = K.img, i = K.i, n = K.n;

  function chev() { return '<img class="arr" src="' + img.ui('chevron-right') + '" alt="">'; }
  function seal(k, line, sz) {
    return '<img class="me-seal" alt="" src="' + img.seal(k, !!line) + '" style="width:' + sz + 'px;height:' + sz + 'px">';
  }
  function yearSeg(list, on, mark) {
    return '<div class="seg me-year"' + (mark ? n(mark) : '') + '>' + list.map(function (y) {
      return '<span class="' + (y === on ? 'on' : '') + '">' + y + '</span>';
    }).join('') + '</div>';
  }
  function seedsOf(names) {
    return '<span class="me-seeds">' + names.map(function (t) {
      return '<span class="on"><i></i>' + t + '</span>';
    }).join('') + '</span>';
  }
  function kv(pairs) {
    return '<div class="me-kvs">' + pairs.map(function (p) {
      return '<div class="me-kv"><span>' + p[0] + '</span><div class="val">' + p[1] + '</div></div>';
    }).join('') + '</div>';
  }
  function score(v) { return '<em>' + v + '</em> 分'; }
  function way(m) {
    if (m === '定位') return '<span class="me-way">' + i('pin', 14, '#A8452F') + '定位</span>';
    return '<span class="me-way"><img src="' + img.ui('qrcode') + '" alt="">立牌码</span>';
  }
  function chop(mark) {
    return '<div class="me-chop"' + (mark ? n(mark) : '') + '><div><svg width="26" height="18" viewBox="0 0 26 18" aria-hidden="true"><ellipse cx="8" cy="5.5" rx="3.1" ry="4" fill="#A8452F"/><ellipse cx="18" cy="5.5" rx="3.1" ry="4" fill="#A8452F"/><ellipse cx="8" cy="13" rx="3.1" ry="4" fill="#A8452F"/><ellipse cx="18" cy="13" rx="3.1" ry="4" fill="#A8452F"/></svg><b>长廊<br>同心人</b></div></div>';
  }
  function minis(been, mark) {
    return '<div class="me-minis"' + (mark ? n(mark) : '') + '>' + K.ORDER.map(function (k) {
      var on = !!been[k];
      return '<div class="' + (on ? 'on' : '') + '"><img src="' + img.seal(k, !on) + '" alt=""><span>' + S[k].ab + '</span></div>';
    }).join('') + '</div>';
  }
  function cover(o) {
    return '<div class="passport me-cover"' + (o.n ? n(o.n) : '') + '><div class="me-coverhead"><div class="grow"><div class="k">' + o.k + '</div><div class="me-cover-t">同路册</div><div class="me-cover-s">' + o.sub + '</div></div>' +
      (o.chop ? chop(o.cn) : '') + '</div>' + minis(o.been, o.mn) + '</div>';
  }
  function leaf(o) {
    var s = S[o.key], sz = o.years ? 92 : 76;
    var head = '<div class="k">同路册 · 第 ' + o.no + ' 页</div>' + (o.date ? '<div class="date">' + o.date + '</div>' : (o.line && !o.banner ? '<div class="date">未到</div>' : ''));
    var row = '<div class="me-srow"' + (o.sn ? n(o.sn) : '') + '>' + seal(o.key, o.line, sz);
    if (o.years) row += '<div class="me-years"' + (o.yn ? n(o.yn) : '') + '><b>2026 · 2027</b><span>两年都到过这一站</span></div>';
    else row += '<div class="grow"><div class="me-sn">' + s.name + '</div><div class="t-cap">' + s.line + '</div>' + (o.tag || '') + '</div>';
    row += '</div>';
    if (o.years) row += '<div style="margin-top:8px"><div class="me-sn">' + s.name + '</div><div class="t-cap">' + s.line + '</div></div>';
    var tail = '';
    if (o.banner) tail += o.banner;
    if (o.line && !o.banner) tail += '<div class="me-wait">今年还没到这一站</div><div class="link" style="margin-top:6px">去这一站 ›</div>';
    if (o.rows) tail += o.rows;
    if (!o.line || o.banner) {
      if (o.go) tail += '<div class="link" style="margin-top:6px">' + o.go + '</div>';
    }
    return '<div class="passport me-leaf"' + (o.n ? n(o.n) : '') + '>' + head + row + tail + '</div>';
  }
  function bookTop(title) { return K.top(title || '同路册'); }

  /* ================= P26 同路册 ================= */
  var catSeeds = '<span class="me-idx">这一瓣是目录，不算认识<br>看过哈尼族、彝族、傣族</span>';
  var noSeeds = '<span class="me-idx">这一站的籽还在整理</span>';

  K.add({
    id: 'P26-1', page: 'P26', state: '默认 · 2026 走过两站', h: 1440,
    html: function () {
      return bookTop() + K.body(
        yearSeg(['2026', '2025'], '2026', 1) +
        '<p class="me-hint"' + n(2) + '>往年的册子留着看。打卡、分数、称号从今年重新算。</p>' +
        cover({ k: '封面 · 2026', sub: '张* · 走过 2 / 4 站', been: { yisa: 1, forest: 1 }, n: 3 }) +
        leaf({ key: 'yisa', no: 1, date: '2026-03-18', sn: 4, rows: kv([['打卡方式', way('定位')], ['本站得分', score(30)], ['认识的籽', catSeeds]]), go: '去认识这一瓣 ›' }) +
        leaf({ key: 'forest', no: 2, date: '2026-03-21', n: 5, rows: kv([['打卡方式', way('立牌码')], ['本站得分', score(23)], ['认识的籽', noSeeds]]), go: '去认识这一瓣 ›' }) +
        leaf({ key: 'oldtown', no: 3, line: 1, n: 6 }) +
        leaf({ key: 'samaba', no: 4, line: 1 })
      );
    },
    notes: [
      [1, '年份切换：高 32 的分段控件，白底为当前册。只列出有记录的年份；这里 2026 选中、2025 可点。点 2025 整本换成那年的四页，不和今年混在一页'],
      [2, '说明 12 石灰。年度重置见 04 号第 1 节：打卡、答题、同路分、称号每年从零开始，往年册子只读'],
      [3, '封面：米纸横线（沿用 .passport）、宋体 26「同路册」、主人「张*」。下方四枚小章 48，彩色 = 今年到过，线描 = 还没到；下面用站点简称（路口 / 森林 / 古城 / 梯田），到过的简称红土'],
      [4, '已打卡页：章 76 彩色（K.img.seal）；右上日期 12 石灰；方式用定位图标或立牌码图标；得分数字宋体 18 红土。页序固定为迤萨 → 森林 → 古城 → 撒玛坝，不按到访先后'],
      [5, '本站得分只来自答题（单站 9–30）。森林公园 23 分 = 两题答对 20 + 一题「我记住了」3。认识的籽只数金边；这站内容还在整理，所以不画籽'],
      [6, '未到的页用线描章，右上角「未到」，一句「今年还没到这一站」+「去这一站 ›」→ P03。不写空日期、不写 0 分'],
      '迤萨是目录瓣：看过也不算「认识」（04 号 4.2）。点「去认识这一瓣 ›」→ P09 并放大该瓣；点一颗金边籽 → P10',
      '需登录。未登录走通用登录层（README 3.1），登录后回到本页。加载中：封面加四张页用骨架块；出错：「没加载出来 · 再试一次」。没网：展示本地已同步的册子，待同步的页仍带标签'
    ],
    desc: '同路册是一本四页的纸，不是成绩单。封面看今年到过几站，翻开才看日期、怎么打的卡、这一站得了多少分、认识了哪些籽。'
  });

  K.add({
    id: 'P26-2', page: 'P26', state: '跨年 · 印章旁 2026 · 2027', h: 1360,
    html: function () {
      return bookTop() + K.body(
        yearSeg(['2027', '2026'], '2027', 1) +
        '<p class="me-hint">2027 年的册子。去年到过的站，章还在，分要重答。</p>' +
        cover({ k: '封面 · 2027', sub: '张* · 走过 1 / 4 站', been: { samaba: 1 } }) +
        leaf({ key: 'yisa', no: 1, line: 1 }) +
        leaf({ key: 'forest', no: 2, line: 1 }) +
        leaf({ key: 'oldtown', no: 3, line: 1 }) +
        leaf({
          key: 'samaba', no: 4, date: '2027-04-02', years: 1, yn: 2, n: 3,
          rows: kv([['打卡方式', way('定位')], ['本站得分', score(27) + '<span class="me-idx"> 今年另算</span>'], ['认识的籽', seedsOf(['哈尼族 · 开秧门'])]]),
          go: '去认识这一瓣 ›'
        })
      );
    },
    notes: [
      [1, '切到 2027。2026 的册子还在分段里，点回去看去年，不删除'],
      [2, '同一站跨年再来：彩色章右侧并列「2026 · 2027」，宋体 18 红土，下面 11 石灰「两年都到过这一站」。两个年份同一行，中间用间隔号'],
      [3, '右上日期是今年这次打卡（2027-04-02），不是两年并成一个日期。本站得分只算 2027 的答题；「今年另算」12.5 石灰，避免把去年的分加进来'],
      '今年没再去的三站仍是线描，即使去年到过。称号也按今年打卡站数重算，这本册子目前是「红河来客」',
      '认识的籽按年。这里示意今年又认识了 1 颗。若口径是跨年清空，这行改为「今年还没有认识的籽」——见文末待确认',
      '加载、出错、没网同 P26-1'
    ],
    desc: '章可以带着年份长大，分不行。跨年再来，章旁边多一个年份，分数从今年重新答。'
  });

  K.add({
    id: 'P26-3', page: 'P26', state: '待同步 · 码已作废', h: 1420,
    html: function () {
      var pending = '<span style="margin-top:6px;display:inline-flex">' + K.chip('待同步', 'grey') + '</span>';
      var banner = '<div class="me-sync"' + n(2) + '>' + i('info', 15, '#5A554D') + '<span>这次记录没能同步：码已作废</span></div>';
      return bookTop() + K.body(
        yearSeg(['2026', '2025'], '2026') +
        cover({ k: '封面 · 2026', sub: '张* · 走过 2 / 4 站', been: { yisa: 1, forest: 1 }, mn: 4 }) +
        leaf({ key: 'yisa', no: 1, date: '2026-03-18', rows: kv([['打卡方式', way('定位')], ['本站得分', score(30)], ['认识的籽', catSeeds]]) }) +
        leaf({
          key: 'forest', no: 2, date: '2026-10-18', n: 1, tag: pending,
          rows: kv([['打卡方式', way('立牌码')], ['本站得分', score(13)], ['认识的籽', noSeeds]])
        }) +
        leaf({ key: 'oldtown', no: 3, line: 1 }) +
        leaf({
          key: 'samaba', no: 4, date: '2026-10-19', line: 1, sn: 3, banner: banner,
          rows: kv([['打卡方式', way('立牌码')], ['本站得分', '<span class="me-back">已退回</span>']])
        })
      );
    },
    notes: [
      [1, '待同步页：章仍是彩色（本地先算到过），站名下灰胶囊「待同步」高 24。得分数字照常显示，但胶囊说明还没入账'],
      [2, '服务端拒绝的那一页，灰底条 13 粗：「这次记录没能同步：码已作废」。界面不出现「失败」。原因三句定稿见 05 号 E-SYN-01，这里按 F2-6 的「码已作废」示意'],
      [3, '拒绝后章回到线描（这次不算到过），得分写「已退回」石灰，不写 0 分，也不画籽。右上仍留尝试日期，方便对上那一次扫码'],
      [4, '封面小章跟本地结果走：待同步的森林公园仍是彩色；被拒绝的撒玛坝回到线描。所以封面是 2 / 4，不是 3 / 4'],
      '恢复网络后队列按时间提交。成功则去掉「待同步」，Toast「已恢复网络，记录已同步」（F2-6）。拒绝不影响其他站',
      '没网时本页照常打开。定位打卡不能离线，所以待同步只可能来自立牌码'
    ],
    desc: '离线先记在册子上，联网再对。对上了就去掉标签；没对上，这一页写明原因，分退回去，章不留。'
  });

  K.add({
    id: 'P26-4', page: 'P26', state: '四瓣全亮 · 封面盖章', h: 1440,
    html: function () {
      return bookTop() + K.body(
        yearSeg(['2026'], '2026') +
        '<div class="passport me-cover"><div class="me-coverhead"><div class="grow"><div class="k">封面 · 2026</div><div class="me-cover-t">同路册</div><div class="me-cover-s"' + n(2) + '>张* · 走过 4 / 4 站</div></div>' + chop(1) + '</div>' + minis({ yisa: 1, forest: 1, oldtown: 1, samaba: 1 }, 3) + '</div>' +
        leaf({ key: 'yisa', no: 1, date: '2026-02-14', rows: kv([['打卡方式', way('定位')], ['本站得分', score(30)], ['认识的籽', '<span class="me-idx">目录瓣，五颗都看过，不算认识</span>']]) }) +
        leaf({ key: 'forest', no: 2, date: '2026-03-02', rows: kv([['打卡方式', way('立牌码')], ['本站得分', score(23)], ['认识的籽', noSeeds]]) }) +
        leaf({ key: 'oldtown', no: 3, date: '2026-04-11', n: 4, rows: kv([['打卡方式', way('定位')], ['本站得分', score(30)], ['认识的籽', seedsOf(['傣族 · 传统制陶'])]]) }) +
        leaf({ key: 'samaba', no: 4, date: '2026-05-06', n: 5, rows: kv([['打卡方式', way('定位')], ['本站得分', score(30)], ['认识的籽', seedsOf(['哈尼族 · 开秧门', '彝族 · 乐作'])]]) })
      );
    },
    notes: [
      [1, '四站今年都打过卡 = 称号「长廊同心人」= 四瓣全亮（04 号第 3 节）。封面右上盖圆章：外圆 + 内圆，四颗籽，宋体「长廊 / 同心人」，红土墨色，逆时针约 9°。只盖在封面，不盖到每一页'],
      [2, '封面小字仍写「走过 4 / 4 站」，章是荣誉，数字是账。称号不看分数：下面森林公园 23 分、撒玛坝 27 分，章一样盖'],
      [3, '四枚小章全部彩色'],
      [4, '已认识的籽：石榴红小籽 + 金边，所有站同一种红，没有民族专属色。点一颗 → P10'],
      [5, '撒玛坝认识 2 颗。金边条件是看完该籽的非遗卡，且关联题至少一道已结算（04 号 4.2）'],
      '同时：我的页头像框换成石榴纹（F5-4，不在本文件）。进入石榴页时 Toast「四瓣都亮了 · 称号「长廊同心人」」，本页不重复播',
      '章是画出来的文字章，不是图片素材。若以后有正式章稿，只替换这一个圆章'
    ],
    desc: '四站都走到，封面才盖「长廊同心人」。它证明到过，不证明题都答满。'
  });

  /* ================= P28 离线包 ================= */
  var PACKS = [
    { key: 'yisa', mb: '12.6 MB', st: 'ok' },
    { key: 'forest', mb: '18.4 MB', st: 'no' },
    { key: 'oldtown', mb: '21.2 MB', st: 'up' },
    { key: 'samaba', mb: '16.8 MB', st: 'ok' }
  ];
  function packSt(st) {
    if (st === 'ok') return '<span class="me-st ok">已下载 · 最新</span>';
    if (st === 'up') return '<span class="me-st up">有更新</span>';
    if (st === 'dl') return '<span class="me-st dl">下载中 42%</span>';
    return '<span class="me-st no">未下载</span>';
  }
  function packBtn(st) {
    if (st === 'dl') return '';
    if (st === 'no') return '<span class="btn sm primary" style="flex:none">下载</span>';
    if (st === 'up') return '<span class="btn sm primary" style="flex:none">更新</span><span class="me-txt">删除</span>';
    return '<span class="me-txt">删除</span>';
  }
  function packRow(p, o) {
    o = o || {};
    var st = (o.dl && p.key === 'forest') ? 'dl' : p.st;
    var body = '<div class="top"><div class="nm">' + S[p.key].name + '</div>' + packSt(st) + '</div>';
    if (st === 'dl') {
      body += '<div class="me-prog"><i style="width:42%"></i></div><div class="t-cap" style="margin-top:4px">7.7 / 18.4 MB</div>';
    } else {
      body += '<div class="me-bot"><span class="t-cap">' + p.mb + '</span><span class="me-ops">' + packBtn(st) + '</span></div>';
    }
    return '<div class="me-pack"' + (o.mark ? n(o.mark) : '') + '><img class="im" src="' + img.site(p.key, 375) + '" alt="">' + '<div class="bd">' + body + '</div></div>';
  }
  function wifi(mark) {
    return '<div class="me-wifi"' + (mark ? n(mark) : '') + '><div class="grow"><b>只在 Wi-Fi 下自动更新</b><div class="t-cap">关掉后，有更新会提示你，不自己下</div></div><span class="switch on"></span></div>';
  }
  function packPage(o) {
    o = o || {};
    var base = !o.dl && !o.plain;
    var rows = PACKS.map(function (p) {
      var mark = 0;
      if (base && p.key === 'forest') mark = 3;
      if (base && p.key === 'oldtown') mark = 4;
      if (base && p.key === 'yisa') mark = 5;
      if (o.dl && p.key === 'forest') mark = 1;
      return packRow(p, { dl: o.dl, mark: mark });
    }).join('');
    var all = o.dl
      ? '<span class="btn sm dis" style="flex:none"' + n(2) + '>下载中</span>'
      : '<span class="btn sm primary" style="flex:none"' + (base ? n(2) : '') + '>全部下载</span>';
    var wifiN = base ? 6 : 3;
    return K.top('离线包') + K.body(
      '<div class="me-lead"' + (o.dl ? '' : n(1)) + '>进山前在有网的地方下载，没网时也能看、能听、能扫码打卡</div>' +
      '<div class="me-all"><div class="grow"><b>四站内容</b><span class="t-cap">一共 69.0 MB · 已下载 3 站</span></div>' + all + '</div>' +
      rows, 'has-bar') + K.bar(wifi(wifiN));
  }

  K.add({
    id: 'P28-1', page: 'P28', state: '默认 · 未下 / 最新 / 有更新', h: 812,
    html: function () { return packPage(); },
    notes: [
      [1, '说明原文，14、行高 1.65，白卡圆角 16。不写「失败」、不写流量恐吓'],
      [2, '右上「全部下载」高 32 红土。会把未下载的站和有更新的站一起下。都已最新时变成置灰「都是最新」'],
      [3, '未下载：状态石灰「未下载」，右侧红土小按钮「下载」。大小写在左侧，例 18.4 MB'],
      [4, '有更新：状态 #8F6210「有更新」，主按钮「更新」+ 文字按钮「删除」（13 石灰，不用红色）'],
      [5, '已下载 · 最新：状态水田青，只留「删除」。删前确认「删掉这一站的离线包？没网时就不能看这一站了。」「删掉」「再想想」'],
      [6, '底部固定条：开关高 28，默认开，轨道水田青。文案「只在 Wi-Fi 下自动更新」。关了以后只提示，不自动下'],
      '登录后下载才带本人锁定的 3 题；未登录也能下内容、音频、立牌码和电话，答一答显示「登录并联网后可答」（04 号第 6 节）',
      '删除、更新不清除打卡记录。清除缓存在 P33，不动这些包',
      '加载中：四行骨架（图块 52 + 两行文字）。出错：「没加载出来 · 再试一次」，已下到本地的包仍可删。不用登录'
    ],
    desc: '进山前把一站的内容装进手机。每一站单独下，也能一次下完；Wi-Fi 开关决定有更新时会不会自己动手。'
  });

  K.add({
    id: 'P28-2', page: 'P28', state: '下载中', h: 812,
    html: function () { return packPage({ dl: 1 }); },
    notes: [
      [1, '正在下的那一行：状态改为「下载中 42%」水田青；进度条高 6、圆角 3、底 #E7DDD0、进度水田青。下面 12 石灰写已下 / 总大小'],
      [2, '「全部下载」在有任务时置灰成「下载中」，避免叠两个任务。其他站的按钮保持可点，但同时只跑一个下载，后点的排队——规格没写并发，这里按一个一个下'],
      '可以离开这个页面。回到 P28、首页或 P03，同一条进度还在。下完校验通过后，这一行变成「已下载 · 最新」',
      [3, '底部「只在 Wi-Fi 下自动更新」在下载过程中仍可切换，不打断正在下的这一包'],
      '校验没通过：这一行回到「未下载」，Toast「没下完整，再试一次」。界面不写「失败」',
      '进度存在本地，杀进程后下次打开若包不完整，当作未下载，不显示一个卡住的进度'
    ],
    desc: '下载不绑在这个页面上。人可以先去看别的，回来进度还在。'
  });

  K.add({
    id: 'P28-3', page: 'P28', state: '移动网络确认',
    html: function () {
      return packPage({ plain: 1 }) + K.dialog('现在用的是移动网络，<br>下载 18.4 MB', '', [['继续下载', 'primary'], ['等 Wi-Fi', 'ghost']], { n: 2 });
    },
    notes: [
      [1, '底下仍是离线包页。这一层是点森林公园那一行「下载」（18.4 MB）之后出现的。「全部下载」若把未下和有更新加在一起超过确认线，句子里的大小换成合计，例如「下载 39.6 MB」'],
      [2, '对话框标题即定稿句「现在用的是移动网络，下载 18.4 MB」，宋体 18 居中，可换两行。按钮「继续下载」红土、「等 Wi-Fi」白底。点「等 Wi-Fi」关掉层，不开始下；开关仍开着，连上 Wi-Fi 后若开了自动更新会自己补'],
      [3, '底部开关保持开。点「等 Wi-Fi」只取消这一次，不顺便把开关关掉'],
      '按钮文案规格没写，这里是示意',
      '规格 F8-3 写的是「超过 20 MB」才确认，而示例大小是 18.4 MB。本画板按示例句画出来，阈值见文末待确认',
      '已经在 Wi-Fi 下不弹这层，直接进 P28-2'
    ],
    desc: '用流量时先把大小说清楚，再让人决定现在下，还是等 Wi-Fi。'
  });

  K.add({
    id: 'P28-4', page: 'P28', state: '空间不足',
    html: function () {
      return packPage({ plain: 1 }) + K.dialog('手机空间不够，<br>先删除其他站的离线包试试', '', [['知道了', 'primary']], { n: 2 });
    },
    notes: [
      [1, '底下仍是离线包页。空间不够时，单站下载和全部下载都走这一层'],
      [2, '整句做对话框标题，宋体 18，换行居中。一个按钮「知道了」。点掉之后停在本页，不开始下载，也不自动删任何包'],
      [3, '底部开关不动。空间不够不是网络问题，不引导人去关自动更新'],
      '出现时机：系统返回空间不够时，不论是单站还是全部下载。按钮文案规格没写',
      '不提供「帮你删掉最大的包」。要删，人自己点某一站的「删除」',
      '句中不出现「失败」'
    ],
    desc: '装不下就直说，并告诉人可以先删别的站，而不是停在一个转圈上。'
  });

  /* ================= P29 现场礼仪 ================= */
  function treeIc(sz) {
    return '<svg class="ic" width="' + (sz || 22) + '" height="' + (sz || 22) + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-7"/><path d="M12 15c-4.2 0-6.5-2.8-6.5-6.2 2.6.2 4 .8 5.2 2.2C11.6 8.2 13 6.8 16.5 6.5 17 10 15 15 12 15z"/></svg>';
  }
  function fireIc(sz, color) {
    return '<svg class="ic" width="' + (sz || 22) + '" height="' + (sz || 22) + '" viewBox="0 0 24 24" fill="none" stroke="' + (color || 'currentColor') + '" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7c2 2.2 3 3.8 3 5.6A3 3 0 0 1 9 12.6c0-1 .5-2 1.2-2.6"/><path d="M5.6 18.4 18.4 5.6"/></svg>';
  }
  function etqRow(o) {
    return '<div class="cell' + (o.fire ? ' me-fire' : '') + '"' + (o.n ? n(o.n) : '') + '><div class="me-ico' + (o.cls || '') + '">' + o.ico + '</div><div class="grow"><b class="tt">' + o.name + '</b><span class="sub">' + o.sub + '</span></div>' + chev() + '</div>';
  }
  function rules(list, hot) {
    return list.map(function (r, idx) {
      var cls = r[0] === '可以' ? 'ok' : (hot ? 'hot' : 'no');
      return '<div class="me-rule ' + cls + '"' + (r[2] ? n(r[2]) : '') + '><b>' + r[0] + '</b><span>' + r[1] + '</span></div>';
    }).join('');
  }

  K.add({
    id: 'P29-1', page: 'P29', state: '列表 · 六条', h: 812,
    html: function () {
      return K.top('现场礼仪') + K.body(
        '<p class="me-hint" style="margin-top:2px"' + n(1) + '>到了再看也来得及。相关的站和内容卡上会再提醒一次。</p>' +
        '<div class="me-etq">' +
        etqRow({ name: '拍摄', sub: '拍人前先征得同意', ico: i('camera', 22, '#A8452F'), n: 2 }) +
        etqRow({ name: '宴席', sub: '主人请了再入座', ico: '<img src="' + img.heritage('04-long-table-feast', 345) + '" alt="">', n: 3 }) +
        etqRow({ name: '乐作', sub: '被邀请了再一起跳', ico: '<img src="' + img.heritage('02-lezuo-dance', 345) + '" alt="">' }) +
        etqRow({ name: '寨神林', sub: '放轻脚步，不攀折', ico: treeIc(22), cls: ' teal', n: 4 }) +
        etqRow({ name: '文物', sub: '只看不刻、不攀爬', ico: '<img src="' + img.site('oldtown', 375) + '" alt="">' }) +
        etqRow({ name: '防火', sub: '高火险期禁止野外用火', ico: fireIc(22), cls: ' hot', fire: 1, n: 5 }) +
        '</div>'
      );
    },
    notes: [
      [1, '页头一句 12 石灰。列表本身不按站点分组，六条固定顺序：拍摄、宴席、乐作、寨神林、文物、防火'],
      [2, '行高至少 64。左图 44 圆角 12：拍摄只用相机图标，不放人脸照片。点一行进详情，路由 item= 该条'],
      [3, '宴席、乐作用非遗插画裁切。点宴席即 P29-2'],
      [4, '寨神林只用一棵树的线标，水田青底。不做照片、不做打卡、不引导前往（内容文档第 5 节）'],
      [5, '防火行整行安全橙字 + 10% 橙底，图标用禁火。安全橙只出现在这一行。点了进 P29-3'],
      '文案来自 B2，经审定后替换。列表副标题是详情的摘要，不超过一行',
      '不用登录。没下载且没网：通用出错「没加载出来」。某条下线：点进去显示「这部分内容正在更新」',
      'item 的取值规格没写死，建议 photo / feast / lezuo / sacred / relic / fire'
    ],
    desc: '六条礼仪放在一起，去之前能看，到了现场也能从站点页跳到其中一条。'
  });

  K.add({
    id: 'P29-2', page: 'P29', state: '详情 · 宴席', h: 812,
    html: function () {
      return K.top('宴席') + K.body(
        '<img class="me-hero" src="' + img.heritage('04-long-table-feast') + '" alt="长街宴示意图"' + n(1) + '>' +
        '<div class="me-capimg">示意图 · 上线换成审定插画</div>' +
        '<div class="t-h2" style="margin-top:12px"' + n(2) + '>宴席</div>' +
        '<div class="t-cap">撒玛坝 · 长街宴</div>' +
        rules([
          ['可以', '在主人邀请后入座', 3],
          ['请不要', '未经同意拍摄人脸', 4],
          ['请不要', '挡住送菜的人']
        ]) +
        '<p class="t-cap" style="margin-top:12px"' + n(5) + '>示意文案，上线前换成审定稿。</p>'
      );
    },
    notes: [
      [1, '插画宽 343、高 210、圆角 16、cover 裁切。素材 K.img.heritage(\'04-long-table-feast\')。左上返回，标题用这一条的名字'],
      [2, '标题宋体 20。下面 12 石灰写清是哪一站的事，避免把宴席说成到处都一样'],
      [3, '「可以」胶囊高 24、水田青 12% 底、水田青字，最小宽 58。右侧正文 15'],
      [4, '「请不要」用红土浅底，不用错误红，也不用安全橙（橙只留给防火）。同一页最多 3 条'],
      [5, '底部 12 石灰标明是示意。正式文案由 B2 下发。「可以 / 请不要」加起来不超过 3 条。内容文档里还有「可以饮酒，也可以以茶代酒」，是否并进这三条见文末待确认'],
      '从站点页、长街宴内容卡深链进来时直接打开本页（item=feast），不经过列表。左上角返回上一页',
      '不用登录。内容下线时整页换成「这部分内容正在更新」+ 返回'
    ],
    desc: '一条礼仪只说三件以内的事：可以怎样，请不要怎样。宴席这页先用得体的示意句。'
  });

  K.add({
    id: 'P29-3', page: 'P29', state: '详情 · 防火', h: 812,
    html: function () {
      return K.top('防火') + K.body(
        '<div class="me-firetop"' + n(1) + '>' + fireIc(36) + '<b class="nm">防火</b><div class="where">森林公园 · 山林与营地</div></div>' +
        rules([
          ['可以', '使用营地指定的炉灶', 2],
          ['请不要', '在园区里点野外的火', 3],
          ['请不要', '把烟头留在林子里']
        ], true) +
        '<div class="me-firelink"' + n(4) + '>' + fireIc(18) + '<div class="grow">发现火情拨打 12119<div class="t-cap" style="color:inherit;font-weight:500">去服务与求助电话</div></div>' + chev() + '</div>' +
        '<p class="t-cap" style="margin-top:12px">示意文案。高火险期的横幅由 B4 开关，本页常年可看。</p>'
      );
    },
    notes: [
      [1, '防火不用火焰照片。顶区安全橙 10% 底、安全橙字，禁火图标 36，标题宋体 22。安全橙只出现在这页和列表的防火行、电话页的紧急组'],
      [2, '「可以」仍是水田青，不跟着变成橙色'],
      [3, '「请不要」胶囊改为安全橙 12% 底、安全橙字。仍然最多 3 条'],
      [4, '火情电话单独一条，点了 → P31 并滚到森林火警。不是第四条礼仪'],
      '文案示意，审定后替换。内容文档的口径是「高火险期园区内禁止一切野外用火」',
      '森林公园站点页的橙色横幅、营地商品的防火提示，和本页是同一件事的三个入口，文案以后要能一起改'
    ],
    desc: '防火单独用安全橙，和其他礼仪分开。可以说在哪里用火，不画火。'
  });

  /* ================= P30 意见反馈 ================= */
  var TYPES = ['内容有误', '功能问题', '建议', '表扬', '投诉'];
  function types(on, lock, mark) {
    return '<div class="me-types"' + (mark ? n(mark) : '') + '>' + TYPES.map(function (t) {
      var cls = t === on ? 'on' : (lock ? 'dis' : '');
      return '<span class="' + cls + '">' + t + '</span>';
    }).join('') + '</div>';
  }
  function formBar(mark) { return K.bar(K.btn('提交', 'primary', mark || 5)); }
  function shots(filled, mark) {
    var one = filled
      ? '<span class="img ph-img me-shot" style="width:76px;height:76px">照片<i class="x">×</i></span>'
      : '';
    return '<div class="upl"' + (mark ? n(mark) : '') + '>' + one + '<span>' + i('plus', 16, '#6E6A63') + '添加</span></div>';
  }

  K.add({
    id: 'P30-1', page: 'P30', state: '填写', h: 812,
    html: function () {
      return K.top('意见反馈') + K.body(
        '<div class="me-lab">类型</div>' + types('建议', false, 1) +
        '<div class="me-lab">描述 <i class="req">必填 · 300 字以内</i></div>' +
        '<div class="textarea me-ta"' + n(2) + '>离线包下载时，希望能看到大概还要多久。在山里信号不好，心里有个数。<span class="cnt">33/300</span></div>' +
        '<div class="me-lab">图片 <i>选填 · 最多 3 张</i></div>' + shots(true, 3) +
        '<div class="field"' + n(4) + '><div class="f-row"><label>联系方式</label><span class="ph">手机号，选填</span></div></div>' +
        '<p class="t-cap" style="margin-top:10px">描述写清楚就好。图片和电话都可以不留。</p>',
        'has-bar') + formBar();
    },
    notes: [
      [1, '类型五选一，胶囊高 32。选中红土底白字。从「我的」进来默认不预选，这里为示意选了「建议」。没选类型就点提交：Toast「先选一个类型」'],
      [2, '描述白卡、最少高 120、正文 14.5 墨色，右下计数 12 石灰。必填。空着提交时输入区下方红字「写几句情况，方便我们处理」（05 号），不出现「失败」。到 300 字不能再输入，计数变错误红'],
      [3, '图片 76 方、圆角 12，最多 3 张。已选的右上角 18 圆钮可删。第 4 张 Toast「最多 3 张」。用 wx.chooseMedia，上传前压缩'],
      [4, '联系方式一行，占位「手机号，选填」。填了但不是 11 位数字：行下红字「手机号好像不对」，不阻止只填描述的人'],
      [5, '底部「提交」高 46 红土，固定在屏幕底。没网时置灰，按钮上方写「需要联网」（反馈不能离线提交）'],
      '需登录。未登录先走登录层，回来仍留着已经写的字',
      '加载不用骨架：这是一张空表。提交中按钮变 loading，防止连点'
    ],
    desc: '一条反馈只要类型和一段话。图片和电话是给人愿意留的，不是门槛。'
  });

  K.add({
    id: 'P30-2', page: 'P30', state: '内容纠错 · 带入不可改', h: 812,
    html: function () {
      return K.top('内容纠错') + K.body(
        '<div class="me-lab">类型</div>' + types('内容有误', true, 1) +
        '<div class="me-lock"' + n(2) + '><div class="hd">' + i('lock', 14, '#6E6A63') + '关联内容 · 不能改</div><div class="tx">撒玛坝 · 开秧门：大家一起下田</div></div>' +
        '<div class="me-lab">描述 <i class="req">必填 · 300 字以内</i></div>' +
        '<div class="textarea me-ta"' + n(3) + '>这张卡写「大家一起下田」。我想确认是不是每年开秧门都这样，还是某一年的事。<span class="cnt">37/300</span></div>' +
        '<div class="me-lab">图片 <i>选填 · 最多 3 张</i></div>' + shots(false) +
        '<div class="field"><div class="f-row"><label>联系方式</label><span class="ph">手机号，选填</span></div></div>',
        'has-bar') + formBar(4);
    },
    notes: [
      [1, '从内容卡「我发现内容有误」进来（F3-6）：类型锁成「内容有误」，其余胶囊不可点、浅灰字。从「我的」自己选「内容有误」则不锁类型、也没有下面这块'],
      [2, '关联内容白卡，锁图标 14。文案固定一行「{站} · {卡片标题}」，本例「撒玛坝 · 开秧门：大家一起下田」。不能编辑、不能清空。卡片 ID 和版本号只传给后台，界面不展示'],
      [3, '描述仍然必填，不把卡片标题当成描述。提交后进 B3 对应审定单位的待办；其他类型进 B7 留言'],
      [4, '提交按钮同 P30-1。成功后见 P30-3'],
      '路由 /pkg-me/feedback/index?type=content_error&target= 。target 解析不出内容时，不显示关联卡，类型仍是「内容有误」，可以当普通纠错提交',
      '需登录，不能离线提交'
    ],
    desc: '纠错要把「说的是哪一张卡」钉死。人可以改自己的描述，不能改被带进来的那一行。'
  });

  K.add({
    id: 'P30-3', page: 'P30', state: '提交成功', h: 812,
    html: function () {
      return K.top('意见反馈') + K.body(
        '<div class="me-ok"><img src="' + img.mascot('02-wave') + '" alt="">' +
        '<b' + n(1) + '>收到了，处理后会在这里告诉你</b>' +
        '<p' + n(2) + '>接着请你允许一次微信通知。<br>不同意也没关系，结果留在「我的反馈」。</p></div>' +
        '<div style="margin:28px 48px 0"' + n(3) + '>' + K.btn('查看我的反馈', 'primary') + '</div>'
      );
    },
    notes: [
      [1, '成功句逐字使用，宋体 20 居中。吉祥物「挥手」140 宽。这是提交后的同一页，不新开路由'],
      [2, '紧接着调 wx.requestSubscribeMessage（处理结果，N 系列里的反馈通知）。系统弹窗是微信的，不在画板里仿。拒绝或关掉：不重问，不影响「已收到」'],
      [3, '「查看我的反馈」→ 本页的列表状态（P30-4）。左上返回：回到进反馈之前的页面，不回到空表单'],
      '订阅消息模板字段以微信后台选到的为准，内容用 05 号「你的反馈已处理：{一句话结果}」',
      '重复提交同一张表：上一张已成功就清掉输入。网络中断且没有成功回执：留在表单，Toast「没发出去，再试一次」'
    ],
    desc: '提交之后先把「收到了」说完，再问要不要通知。通知是附加的，不是交卷的条件。'
  });

  K.add({
    id: 'P30-4', page: 'P30', state: '我的反馈 · 处理中 / 已处理', h: 812,
    html: function () {
      function card(type, chip, text, ans, when, mark) {
        return '<div class="me-fb"' + (mark && mark !== 2 ? n(mark) : '') + '><div class="hd"><b>' + type + '</b>' + chip + '</div><p>' + text + '</p>' +
          (ans ? '<div class="me-ans"' + (mark === 2 ? n(2) : '') + '>' + ans + '</div>' : '') +
          '<div class="t-cap when">' + when + '</div></div>';
      }
      return K.top('我的反馈', { left: '' }) + K.body(
        '<p class="me-hint" style="margin-top:2px"' + n(4) + '>新的在上面。处理完的结果写在那一条下面。</p>' +
        card('建议', K.chip('处理中', 'gold'), '离线包下载时，希望能看到大概还要多久。', '', '10-18', 1) +
        card('内容有误', K.chip('已处理', 'teal'), '撒玛坝 · 开秧门：大家一起下田', '已核对，这句改成审定稿里的说法了。', '10-12 提交 · 10-16 处理', 2) +
        card('表扬', K.chip('已处理', 'teal'), '撒玛坝观景台的讲解员把路讲得很清楚。', '谢谢你，我们转到撒玛坝服务点了。', '09-30 提交 · 10-08 处理', 3)
      );
    },
    notes: [
      [1, '处理中：右上竹金胶囊「处理中」高 24。不展示结果框，避免看起来像已经回复'],
      [2, '已处理：水田青胶囊 + 下面一块水田青浅底，只放运营或审定员写的一句话（≤200 字，这里示意一句）。订阅消息用同一句'],
      [3, '表扬、投诉、建议、功能问题走 B7；内容有误走 B3。游客看到的状态只有这两种'],
      [4, '按提交时间倒序，一期不筛选、不搜索。今年的日期省略年份'],
      '空列表：吉祥物「思考」+「还没有反馈」+ 按钮「去写一条」→ P30-1。不画在这张上',
      '顶栏无返回时从「意见反馈」入口是替换；从 P30-3 进来则有返回。列表页左上返回「我的」',
      '需登录。没网：展示上次拉到的列表，顶部离线条，不能新提交'
    ],
    desc: '反馈发出去之后有地方可回看。处理完只留一句话，不展开工单。'
  });

  /* ================= P31 电话 ================= */
  function dial(hot) { return '<span class="me-dial' + (hot ? ' hot' : '') + '">' + i('phone', 16, hot ? '#D9622B' : '#A8452F') + '</span>'; }
  function ph(name, num, hot, sub, mark) {
    return '<div class="me-ph"' + (mark ? n(mark) : '') + '><div class="grow"><div class="nm">' + name + (sub ? '<span class="sub">' + sub + '</span>' : '') + '</div></div><span class="num">' + num + '</span>' + dial(hot) + '</div>';
  }
  function sitePh(key, hours, rows) {
    return '<div class="me-site"><div class="sh"><img src="' + img.site(key, 375) + '" alt=""><div><b>' + S[key].name + '</b><span>开放 ' + hours + '</span></div></div>' +
      rows.map(function (r) { return ph(r[0], r[1], false); }).join('') + '</div>';
  }

  K.add({
    id: 'P31-1', page: 'P31', state: '分组可拨号', h: 1360,
    html: function () {
      return K.top('服务与求助电话') + K.body(
        '<div class="me-gh hot first"' + n(1) + '>紧急</div>' +
        '<div class="me-card hot">' + ph('报警', '110', true, '', 2) + ph('急救', '120', true) + ph('火警', '119', true) + ph('森林火警', '12119', true) + '</div>' +
        '<div class="me-gh"' + n(3) + '>景区服务</div>' +
        sitePh('yisa', '08:30–18:00', [['游客中心', '0873-0000-101'], ['服务柜台', '0873-0000-111']]) +
        sitePh('forest', '08:30–17:30', [['游客中心', '0873-0000-102'], ['营地柜台', '0873-0000-112']]) +
        sitePh('oldtown', '09:00–18:00', [['游客中心', '0873-0000-103'], ['东门街柜台', '0873-0000-113']]) +
        sitePh('samaba', '08:00–18:30', [['游客中心', '0873-0000-104'], ['观景台柜台', '0873-0000-114']]) +
        '<div class="me-gh"' + n(4) + '>投诉</div>' +
        '<div class="me-card">' + ph('县文旅局投诉', '0873-0000-245', false) + ph('政府服务热线', '12345', false) + '</div>' +
        '<div class="me-gh"' + n(5) + '>一路好物</div>' +
        '<div class="me-card">' + ph('客服', '0873-0000-800', false, '每天 9:00–18:00') + '</div>' +
        '<p class="me-offnote"' + n(6) + '>没网也能打（随离线包）</p>'
      );
    },
    notes: [
      [1, '紧急组放最上面。组名 12 安全橙。卡描边安全橙 28%。号码安全橙粗体，名称仍是墨色，保证能读。110、120、119、12119 是真实紧急号码'],
      [2, '每一行右侧 32 圆钮 + 电话图标。整行可点，直接 wx.makePhoneCall，不再确认。开放时间那一行没有按钮，不能拨'],
      [3, '景区按四站各一张卡：站名宋体 15，下一行「开放 {时间}」。每站游客中心、柜台各一个号。图 36 圆角 10'],
      [4, '投诉两条：县文旅局投诉电话、12345。12345 是真实政务热线号码，名称写成「政府服务热线」'],
      [5, '一路好物客服单独一组。时间写在名称下面，不是一个可拨的字段'],
      [6, '页底 12 石灰「没网也能打（随离线包）」。数据来自 B4，随离线包下发'],
      '除 110、120、119、12119、12345 外，0873-0000-xxx 全部是示意号码，上线前换成 B4 的真实号码。开放时间同样是示意',
      '不用登录。一期英文要翻译本页（F1-4）。没下离线包又没网时怎么显示景区号码，见文末待确认',
      '加载中：分组标题在，行用骨架。某站没配电话：不显示该行；四个号都空则整张站卡不显示'
    ],
    desc: '找人帮忙时，紧急的放在最上面，用安全橙分开。每一行都能直接拨出去。'
  });

  /* ================= P32 关于 ================= */
  K.add({
    id: 'P32-1', page: 'P32', state: '出品、审定与字体授权', h: 900,
    html: function () {
      function row(k, v, cls, mark) {
        return '<div class="me-arow"' + (mark ? n(mark) : '') + '><span>' + k + '</span><b' + (cls ? ' class="' + cls + '"' : '') + '>' + v + '</b></div>';
      }
      return K.top('关于') + K.body(
        '<div class="me-brandtop"' + n(1) + '><img src="' + img.logo('mark.svg') + '" alt=""><div class="me-cover-t" style="font-size:22px">红河同路</div><div class="t-cap">各族同路走，好物一路带</div></div>' +
        '<div class="me-about"' + n(2) + '>' +
        row('出品单位', '红河县文化和旅游局') +
        row('指导单位', '上线前确认', 'me-tbd', 3) +
        row('内容审定单位', '县民族宗教事务局<br>县文化和旅游局<br>县文化馆<br>文物主管部门') +
        row('技术支持', '上线前填写', 'me-tbd') +
        row('版本号', '1.0.0') +
        '</div>' +
        '<div class="cells"' + n(4) + '>' +
        '<div class="cell"><span>《用户协议》</span><span class="v"></span>' + chev() + '</div>' +
        '<div class="cell"><span>《隐私保护指引》</span><span class="v"></span>' + chev() + '</div></div>' +
        '<div class="p-card"' + n(5) + '><div class="t-cap">开源与字体</div><div class="me-sn" style="font-size:16px;margin-top:4px">思源宋体</div><p class="me-lic">Source Han Serif · SIL Open Font License 1.1。界面标题用这一款。可以随程序分发，不能把字体单独拿去卖。许可证全文在程序包里。</p><p class="t-cap" style="margin-top:8px">其他开源组件的名称和许可证，上线前列在这里。</p></div>' +
        '<p class="me-slot"' + n(6) + '>如与州级品牌联名，标识放在这里</p>'
      );
    },
    notes: [
      [1, '标识用 logo-mark，宽 56。名称宋体 22，副句用首页那一句，12 石灰。这是全小程序唯一集中放署名的地方'],
      [2, '左列宽 96、13 石灰，右列 14 粗。审定单位按规格写四家，各占一行：县民宗局、县文旅局、县文化馆、文物主管部门'],
      [3, '出品、指导、技术支持、版本号的正式名称规格没有写死。出品这里暂用「红河县文化和旅游局」；指导和技支用石灰「上线前确认 / 填写」，避免画一个不存在的单位'],
      [4, '《用户协议》《隐私保护指引》各一行，进独立正文页。正文不在本画板，规格里也还没有稿'],
      [5, '字体授权：思源宋体，SIL OFL 1.1，三行说清能嵌进程序、不能单卖字体。不贴许可证全文'],
      [6, '联名只留这一行 12 石灰虚线框，文案「如与州级品牌联名，标识放在这里」。不画州级标识，不把这行放到首页或站点页'],
      '本页随安装包走，没网也能开。无登录。无空态',
      '版本号跟发版走，示意 1.0.0。检查更新不在一期'
    ],
    desc: '关于页把单位、协议和字体许可放在一起。联名如果要出现，只出现在这行小字的位置。'
  });

  /* ================= P33 设置 ================= */
  function settings(o) {
    o = o || {};
    function cell(html, mark, cls) {
      return '<div class="cell' + (cls ? ' ' + cls : '') + '"' + (mark ? n(mark) : '') + '>' + html + '</div>';
    }
    var lang = o.en ? 'English' : '中文';
    return K.top('设置') +
      (o.en ? '<div class="me-en"' + n(1) + '>English covers safety and gift rules only in this version.</div>' : '') +
      K.body(
        '<div class="cells"><div class="cell"' + (o.en ? '' : n(1)) + '>' + K.avatar(44) + '<div class="grow"><b class="me-nick">红河同路人 2048</b><span class="t-cap">改头像和昵称</span></div>' + chev() + '</div></div>' +
        '<div class="cells">' +
        cell('<div class="grow me-sw"><b>大字模式</b><span class="t-cap">打开后首页只留打卡、四站、领礼、服务电话</span></div><span class="switch"></span>', o.en ? 3 : 2) +
        cell('<span>语言</span><span class="v">' + lang + '</span>' + chev(), o.en ? 2 : 3) +
        '</div>' +
        '<div class="cells">' +
        cell('<div class="grow me-sw"><b>清除缓存</b><span class="t-cap">只清图片和临时文件，离线包留下</span></div><span class="v">36 MB</span>' + chev(), o.en ? 0 : 4) +
        cell('<span>离线包</span><span class="v">已下载 3 站</span>' + chev(), o.en ? 0 : 5) +
        '</div>' +
        '<div class="cells">' +
        cell('<div class="grow me-sw"><b>订阅消息</b><span class="t-cap">在提交、付款时点允许，这里只作说明</span></div>' + chev(), o.en ? 0 : 6) +
        cell('<span>《隐私保护指引》</span><span class="v"></span>' + chev()) +
        '</div>' +
        '<div class="cells">' + cell('<span>注销账号</span><span class="v"></span>' + chev(), o.en ? 4 : 7, 'me-logout') + '</div>'
      );
  }

  K.add({
    id: 'P33-1', page: 'P33', state: '列表', h: 812,
    html: function () { return settings(); },
    notes: [
      [1, '头像 44，中性旅人（K.avatar）。昵称默认「红河同路人」+ 4 位数字，16 粗。点这一行改头像和昵称：用微信的头像昵称填写能力，不强制授权。昵称 2–12 字。四瓣全亮时头像加石榴纹框，规则在「我的」页，不在这里重复画'],
      [2, '大字模式用 .switch，高 28，默认关。打开后正文字号 +2、主按钮高 56；首页只留到达打卡、四站、领礼、服务电话和防火公告（已有 P01-6）。选择存在本地'],
      [3, '语言右侧「中文」。点开底部二选一「中文 / English」。选 English 后见 P33-3。选择存在本地'],
      [4, '清除缓存右侧示意「36 MB」。点了确认：「只清除图片和临时文件，已下载的离线包会留下。」「清除」「再想想」。这句规格没写，是示意。确认后 Toast「缓存已清除」'],
      [5, '离线包入口 → P28。数字含「有更新」的站'],
      [6, '订阅消息不是开关。点开半屏说明：发货、取货、反馈结果、到货，都要在做那件事的时候点允许；次数用完后下次再问。不跳到微信系统页'],
      [7, '注销单独一组，文字错误红 #C23B2E，仍有右箭头。点了进 P33-2。未登录时这一行隐藏；其余行不用登录'],
      '《隐私保护指引》和关于页是同一个正文。加载无骨架。没网：本页照常，注销按钮在下一页里置灰'
    ],
    desc: '设置只放会改自己体验的几项。订阅消息在这里解释，不在这里开关。注销用红字单独放下。'
  });

  K.add({
    id: 'P33-2', page: 'P33', state: '注销确认', h: 812,
    html: function () {
      return K.top('注销账号') + K.body(
        '<div class="me-cut"' + n(1) + '><h4>这些会被删掉</h4><ul><li>打卡记录</li><li>同路分和称号</li><li>证件登记</li><li>心愿单</li></ul></div>' +
        '<div class="me-cut keep"' + n(2) + '><h4>这些会留下</h4><ul><li>订单，按法律要求保留</li></ul><p class="more">今年领过礼的证件信息会留到当年 12 月 31 日，<br>用来避免同一证件再领一次，到期删除。</p></div>' +
        '<div class="me-cool"' + n(3) + '>提交后有 7 天冷静期。<br>这期间登录可以撤销，期满才删除。</div>' +
        '<div class="me-lab">请输入「注销」</div>' +
        '<div class="field"' + n(4) + '><div class="f-row"><span class="in me-type">注销</span></div></div>',
        'has-bar') + K.bar(K.btn('确认注销', 'danger', 5, 'flex:1'));
    },
    notes: [
      [1, '白卡列出将删除的四项，和规格用词一致：打卡、分数（界面写同路分和称号）、证件登记、心愿单。圆点红土，不用安全橙'],
      [2, '留下的：订单按法律要求保留。下面 12.5 石灰写证件去重：留到当年年底，到期删除。对游客不说「哈希」'],
      [3, '冷静期灰条，12.5 粗。「7 天」是 04 号的口径。提交成功后 Toast「已提交，7 天内登录可以撤销」，回到设置'],
      [4, '输入框里要一字不差是「注销」。本画板是已经输入、可以提交的状态。不是这两个字时，底部按钮置灰'],
      [5, '按钮白底、错误红字和红边（.btn.danger），高 46，文案「确认注销」。没网置灰，上方写「需要联网」'],
      '冷静期中再次打开设置：顶部灰条「账号将在 {日期} 注销」+「撤销注销」。规格写「期间登录可撤销」，是登录本身就撤销，还是要点按钮，见文末待确认',
      'A7-6 还会删除昵称、头像、常用游客姓名和后四位。确认页要不要写上，见文末待确认',
      '需登录。本年已领礼的证件去重记录不随注销立即消失'
    ],
    desc: '注销前先写清删什么、留什么，再让人自己输入「注销」，并说明有 7 天可以反悔。'
  });

  K.add({
    id: 'P33-3', page: 'P33', state: '已切到 English', h: 812,
    html: function () { return settings({ en: 1 }); },
    notes: [
      [1, '一切到 English，导航栏下方立刻出现这句，逐字：「English covers safety and gift rules only in this version.」12.5、灰底，可换两行。不是安全提示，不用安全橙'],
      [2, '语言一行的值改成 English。再点可切回中文，切回后这句消失'],
      [3, '设置里其余行仍然是中文。一期英文只覆盖站名、主题句、安全提示、礼品规则、服务电话页（F1-4），未翻译的正文保持中文'],
      [4, '注销仍是红字。英文不覆盖本页其他文案'],
      '选择存在本地，重进小程序还在。不跟账号走，换手机要重选',
      '服务电话页（P31）在 English 下应整页翻译。本批没有另画一版英文电话页'
    ],
    desc: '英文一期只包住安全和礼品。切过去时用这一句说明，其余页面继续显示中文。'
  });
})();
