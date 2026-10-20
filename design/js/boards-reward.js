/* 第 1 批：我的、称号与礼品、领礼码、同路分明细、证件登记 */
(function () {
  var K = window.K, S = K.SITE, img = K.img, i = K.i, n = K.n;

  var TITLES = ['红河来客', '红河同路人', '红河熟客', '长廊同心人'];
  var TIERS = [
    { name: '一档 · 一站礼', cond: '走完 1 站', gifts: '本地茶小样、竹编杯垫', where: '四站柜台' },
    { name: '二档 · 同路礼', cond: '走完 2 站，且 40 分', gifts: '红米小礼盒、竹编杯垫、本地茶小样', where: '四站柜台' },
    { name: '三档 · 熟客礼', cond: '走完 3 站，且 70 分', gifts: '红米小礼盒、本地茶小样', where: '森林公园、马帮古城、撒玛坝' },
    { name: '四档 · 同心礼', cond: '四站走满，且 100 分', gifts: '红米小礼盒', where: '马帮古城、撒玛坝' }
  ];
  var COUNTERS = [
    ['迤萨路口游客中心', '9:00–17:30'],
    ['森林公园游客中心', '9:00–17:00'],
    ['马帮古城东门街柜台', '9:00–18:00'],
    ['撒玛坝观景台服务柜台', '9:00–17:30']
  ];
  /* 已同步：迤萨 30 + 撒玛坝 30 = 60。二档成立；三档还差 1 站 / 10 分；四档还差 2 站 / 40 分 */
  var LIT2 = { yisa: 1, samaba: 1 };
  var LIT4 = { yisa: 1, forest: 1, oldtown: 1, samaba: 1 };
  var RULES = ['每个证件每年一次', '取当时最高一档', '同路分不能提现、不能抵现金、不能在商城抵扣', '游客不能自己点「已领取」'];
  var REC = '已领取 · 第二档<br>红米小礼盒 · 东门街柜台<br>10-19 15:32';

  function ic(name, color) { return i(name, 18, color || '#6E6A63'); }
  function ruby() {
    return '<svg class="ic" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6E6A63" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21c4-2.2 6.5-5.6 6.5-9.2 0-2-1.6-4.6-3.2-4.6-.8 0-1.6.5-2.1 1.2L12 9.8l-1.2-1.4c-.5-.7-1.3-1.2-2.1-1.2C7.1 7.2 5.5 9.8 5.5 11.8 5.5 15.4 8 18.8 12 21z"/><path d="M12 6.2c.4-1.6 1.8-2.6 3.2-2"/></svg>';
  }
  function chev() { return '<img class="arr" src="' + img.ui('chevron-right') + '" alt="">'; }

  /* ---------- P22 我的 ---------- */
  function seals(lit, mark) {
    return '<div class="rw-seals"' + (mark ? n(mark) : '') + '>' + K.ORDER.map(function (k) {
      var on = !!lit[k];
      return '<div class="rw-seal' + (on ? '' : ' off') + '"><img src="' + img.seal(k, !on) + '" alt=""><em>' + S[k].short + '</em></div>';
    }).join('') + '</div>';
  }
  function cardBtn(o) {
    if (o.mode === 'text') return '<p class="rw-plain"' + n(4) + '>到任意一站打卡答题，就能领第一档</p>';
    if (o.mode === 'login') return K.btn('登录记分', 'gold block', 4);
    if (o.mode === 'used') return K.btn('今年已领 · 第二档', 'line-gold', 4);
    return K.btn(o.cta || '现在可领第二档 · 出示领礼码', 'gold block', 4);
  }
  function tonglu(o) {
    o = o || {};
    var pts = o.score == null ? '' : '<div class="rw-pts"><b>' + o.score + '</b><span>同路分</span></div>';
    return '<div class="rw-card"' + n(2) + '><img class="rw-bg" src="' + img.motif('contour-stripes') + '" alt="">' +
      '<div class="rw-card-top"><div><div class="k">同路卡</div><div class="serif tt">' + o.title + '</div></div>' + pts + '</div>' +
      seals(o.lit || {}, 3) + cardBtn(o) + '</div>';
  }
  function head(o) {
    var ac = o.acc ? '<div class="ac">' + o.acc + '</div>' : '';
    return '<div class="rw-me"' + n(1) + '>' + K.avatar(56, !!o.frame) + '<div><div class="nm">' + o.name + '</div>' + ac + '</div></div>';
  }
  function tiles(mark) {
    return '<div class="rw-tiles"' + (mark ? n(mark) : '') + '>' +
      '<div class="rw-tile"><div class="icx">' + i('pkg', 16, '#A8452F') + '</div><b>我的订单</b><span><em>2</em> 件待收货</span></div>' +
      '<div class="rw-tile"><div class="icx">' + i('user', 16, '#A8452F') + '</div><b>常用游客</b><span>本人证件</span></div></div>';
  }
  function menu(o) {
    o = o || {};
    var rows = [];
    if (o.work) {
      rows.push(['店员工作台 · 东门街柜台', '', ic('store', '#1E4B48'), 'work']);
      rows.push(['商家工作台 · 宝华镇 xx 合作社', '', ic('users', '#1E4B48'), 'work']);
    }
    [['同路册', 'book'], ['我的礼品', 'gift'], ['同心石榴', ''], ['心愿单', 'heart'], ['离线包', 'download'], ['现场礼仪', 'flag'], ['意见反馈', 'chat'], ['服务与求助电话', 'phone'], ['关于', 'info'], ['设置', 'setting']].forEach(function (r) {
      rows.push([r[0], '', r[0] === '同心石榴' ? ruby() : ic(r[1]), '']);
    });
    var html = K.cells(rows);
    if (o.work) html = html.replace('class="cell work"', 'class="cell work"' + n(6));
    return '<div' + (o.mark ? n(o.mark) : '') + '>' + html + '</div>';
  }
  function me(o) {
    return K.top('', { noBack: 1, sticky: 1 }) + K.body(head(o) + tonglu(o) + tiles(o.tileN || 5) + menu({ work: o.work, mark: o.work ? 0 : (o.listN || 6) }), 'has-tab') + K.tab('me');
  }

  var meListNote = '列表用 K.cells，每行高 48、字 14.5、右箭头 14：同路册 → P26，我的礼品 → P23，同心石榴 → P09，心愿单 → P21，离线包 → P28，现场礼仪 → P29，意见反馈 → P30，服务与求助电话 → P31，关于 → P32，设置 → P33。未登录时关于、设置、现场礼仪、服务电话、离线包可直接进；要留下记录的项先走登录弹层（README 3.1）';

  K.add({ id: 'P22-1', page: 'P22', state: '已登录 · 可领第二档', h: 1120, html: function () {
    return me({ name: '红河同路人 4821', acc: '路牌纹挎包扣 · 梯田等高线围巾', title: '红河同路人', score: 60, lit: LIT2, tileN: 5, listN: 6 });
  }, notes: [
    [1, '头像 56 圆形（中性旅人，无民族服饰）。昵称 17 粗「红河同路人 4821」（默认昵称，不是称号）。配饰说明 12 石灰，只列已获得的：路牌纹挎包扣（迤萨路口）、梯田等高线围巾（撒玛坝）'],
    [2, '同路卡：深田青底、圆角 20、内边距 14/16。左上「同路卡」11 竹金、字距 0.14em。称号宋体 22 白。右上角淡竹金等高线，不抢字'],
    [3, '四枚印章 52，站名 11。今年打过卡的用彩色章（迤萨路口、撒玛坝），没打的用 locked 灰章。称号按打卡站数，与礼品档位分开算'],
    [4, '竹金按钮高 46、全圆角、字 15：「现在可领第二档 · 出示领礼码」→ P23。本例走完 2 站、60 分，可领二档（≥2 站且 ≥40 分）'],
    [5, '两格各宽约 166、高 74、圆角 16：左「我的订单」+「2 件待收货」（数字红土）→ P18；右「常用游客」+「本人证件」→ P27'],
    [6, '服务列表白卡圆角 16。底部标签栏「我的」选中（红土），高 84'],
    meListNote,
    '分数 60 = 迤萨路口 30 + 撒玛坝 30（每站 3 题全对）。加载中：头像、同路卡、两格、列表各用骨架块，不盖住标签栏；出错用通用「没加载出来 · 再试一次」'
  ], desc: '已登录的「我的」。同路卡先回答「我是谁、走了几站、现在能领哪一档」，下面才是订单和工具。' });

  K.add({ id: 'P22-2', page: 'P22', state: '未登录', h: 1100, html: function () {
    return me({ name: '点击登录', title: '还没有称号', lit: {}, mode: 'login', tileN: 5, listN: 6 });
  }, notes: [
    [1, '未登录头像仍是中性旅人，昵称换成「点击登录」，不显示配饰。点头像或昵称走 README 3.1 登录弹层'],
    [2, '同路卡保留。称号固定「还没有称号」，右上不显示分数'],
    [3, '四枚印章全部用 locked 灰章'],
    [4, '竹金按钮「登录记分」。点了先弹「登录后才能记下你的到访和分数」（README 3.1），不在本页内嵌表单'],
    [5, '两格仍在。点「我的订单」「常用游客」先登录，登录后回到刚才点的那一项'],
    [6, '列表不因为未登录而隐藏'],
    '未登录不出现同路分、不出现可领档位'
  ], desc: '没登录也能打开「我的」，但同路卡上没有分数，记分必须先登录。' });

  K.add({ id: 'P22-3', page: 'P22', state: '已登录 · 不够第一档', h: 1120, html: function () {
    return me({ name: '红河同路人 4821', title: '还没有称号', score: 0, lit: {}, mode: 'text', tileN: 5, listN: 6 });
  }, notes: [
    [1, '已登录：显示默认昵称。还没获得配饰时，配饰行整行不出现'],
    [2, '打卡站数为 0，称号「还没有称号」。分数照显示「0 同路分」（已登录就显示年度同路分，包括 0）'],
    [3, '四站都还没打卡，印章全灰'],
    [4, '按钮位置改成一行 13 号说明，不是按钮：「到任意一站打卡答题，就能领第一档」。没有跳转'],
    [5, '两格同已登录'],
    [6, '列表同已登录'],
    '只打了卡、题还没答完：印章和称号会亮（按打卡站数），但只要没有「走完 1 站」，这里仍是这行文字，不出现领礼按钮',
    '第一档条件是走完任意 1 站，不看分数'
  ], desc: '登录了但还走不完一站。同路卡不给领礼按钮，只告诉下一步去哪。' });

  K.add({ id: 'P22-4', page: 'P22', state: '今年已领', h: 1160, html: function () {
    return me({ name: '红河同路人 4821', acc: '路牌纹挎包扣 · 梯田等高线围巾', title: '红河同路人', score: 60, lit: LIT2, mode: 'used', tileN: 5, listN: 6 });
  }, notes: [
    [1, '头像、昵称、配饰与可领时相同，称号和印章继续留着'],
    [2, '分数仍显示。今年领过之后分数和称号还可以涨，只是不能再领'],
    [3, '印章按今年打卡显示，不因为领过就变灰'],
    [4, '按钮改为描边竹金「今年已领 · 第二档」→ P23 的领取记录（P23-3）。不再写「出示领礼码」'],
    [5, '两格不受领礼状态影响'],
    [6, '「我的礼品」同样进入 P23 领取记录'],
    '领过之后当年不能补差、不能再领更高一档。按钮不是「再领一次」'
  ], desc: '今年的礼已经领过。卡上换一句状态，称号和印章照常累积。' });

  K.add({ id: 'P22-5', page: 'P22', state: '工作人员身份', h: 1220, html: function () {
    return me({ name: '红河同路人 4821', acc: '路牌纹挎包扣 · 梯田等高线围巾', title: '红河同路人', score: 60, lit: LIT2, work: 1, tileN: 5 });
  }, notes: [
    [1, '游客身份的头像和配饰不变。工作台不替换「我的」，只多两行入口'],
    [2, '同路卡仍是游客的可领状态。店员自己来玩，一样记分、一样领礼'],
    [3, '印章同 P22-1'],
    [4, '领礼按钮同 P22-1 → P23'],
    [5, '两格仍在工作台下面，顺序不变：先同路卡，再两格，再列表'],
    [6, '列表最上面两行 class=work：青色 10% 底、深田青字、字重 600。「店员工作台 · 东门街柜台」→ /pkg-staff/index/index；「商家工作台 · 宝华镇 xx 合作社」→ 合作社端。只绑定了其中一个身份时，只出现对应那一行；都没绑定则两行都不出现'],
    '直接打开工作台路由但没有身份：显示「没有权限」并回首页。工作台不占底部标签栏',
    '「宝华镇 xx 合作社」里的 xx 是后台合作社名的示意，上线换成 B6 里的名称'
  ], desc: '柜台店员和合作社账号从「我的」进工作台，不单独占一个标签。' });

  K.add({ id: 'P22-6', page: 'P22', state: '四瓣全亮 · 长廊同心人', h: 1140, html: function () {
    return me({ name: '红河同路人 4821', acc: '路牌纹挎包扣 · 森林叶片帽徽<br>马帮铃铛 · 梯田等高线围巾', frame: 1, title: '长廊同心人', score: 106, lit: LIT4, cta: '现在可领第四档 · 出示领礼码', tileN: 5, listN: 6 });
  }, notes: [
    [1, '四瓣全亮 = 今年四站都打过卡 = 称号「长廊同心人」。头像加石榴纹框：金圈 3px + 石榴红外圈（K.avatar 第二参数）。配饰四件全部列出，12 号，放不下就换行'],
    [2, '称号宋体 22「长廊同心人」。昵称仍是「红河同路人 4821」，不跟着称号改'],
    [3, '四枚印章全部彩色'],
    [4, '106 分、四站走满，达到第四档（≥100 分）。按钮「现在可领第四档 · 出示领礼码」→ P23。若今年已领过，按钮改为「今年已领 · 第 X 档」，头像框和称号保留'],
    [5, '两格同前'],
    [6, '列表同前'],
    '106 = 10 道题答对（100）+ 2 道看过讲解（6）。四站全满是荣誉，不是领礼的唯一门槛；没到四站也可以领较低档'
  ], desc: '四站都走到了。头像框和称号一起出现，礼品按当时达到的最高档领。' });

  /* ---------- P23 称号与礼品 ---------- */
  function steps(reached, mark) {
    return '<div class="rw-steps"' + (mark ? n(mark) : '') + '>' + TITLES.map(function (t, i) {
      var on = i < reached;
      return '<div class="rw-st' + (on ? ' on' : '') + (i === reached - 1 ? ' now' : '') + '"><b>' + t + '</b><em>' + (on ? '已达到' : '未达到') + '</em></div>';
    }).join('') + '</div>';
  }
  function tierCards(now, gaps, mark) {
    return '<div' + (mark ? n(mark) : '') + '>' + TIERS.map(function (t, i) {
      var idx = i + 1, cls = '', tag = '';
      if (idx < now) tag = '<span class="tag ok">已达到</span>';
      else if (idx === now) { cls = ' now'; tag = '<span class="tag go">现在可领</span>'; }
      else tag = '<span class="tag">' + (gaps[idx] || '') + '</span>';
      return '<div class="rw-tier' + cls + '"><div class="hd"><b>' + t.name + '</b>' + tag + '</div><div class="cond">' + t.cond + '</div><div class="meta">可选 ' + t.gifts + '</div><div class="meta">可领 ' + t.where + '</div></div>';
    }).join('') + '</div>';
  }
  function rules(open, mark) {
    var body = open ? '<div class="bd">' + RULES.map(function (r) { return '<p>' + r + '</p>'; }).join('') + '</div>' : '';
    return '<div class="rw-fold"' + (mark ? n(mark) : '') + '><div class="hd">规则说明' + i(open ? 'up' : 'down', 16, '#6E6A63', 'margin-left:auto') + '</div>' + body + '</div>';
  }
  function hero(o, mark) {
    var chips = (o.acc || []).map(function (a) { return '<i>' + a + '</i>'; }).join('');
    return '<div class="rw-hero"' + (mark ? n(mark) : '') + '><div class="rw-fig">' + K.avatar(72, !!o.frame) + '</div><div class="grow"><div class="serif tt">' + o.title + '</div><div class="sub">' + o.sub + '</div>' + (chips ? '<div class="rw-acc">' + chips + '</div>' : '') + '</div></div>';
  }
  function rewards(o) {
    o = o || {};
    var N = o.quiet ? function () { return 0; } : function (x) { return x; };
    var gift = o.used
      ? '<div class="rw-rec mt12"' + (N(3) ? n(3) : '') + '><div class="k">领取记录</div><div class="t">' + REC + '</div></div>'
      : '<div class="p-h">今年的礼品<small>每证每年一次</small></div>' + tierCards(o.now || 2, o.gaps || { 3: '还差 1 站 / 10 分', 4: '还差 2 站 / 40 分' }, N(3));
    var bar = o.used ? '' : K.bar(K.btn('出示领礼码', 'primary', N(5)));
    return K.top('称号与礼品', { sticky: 1 }) + K.body(
      hero(o, N(1)) + '<div class="p-h">称号</div>' + steps(o.reached == null ? 2 : o.reached, N(2)) +
      '<p class="rw-honor">四站全满是荣誉，不是领礼门槛</p>' + gift +
      '<div class="rw-gold"' + (N(4) ? n(4) : '') + '>' + i('gift', 16, '#7A5410') + '<span>' + (o.gold || '现在领是第二档；<br>再走一站可以领第三档。<br>今年只能领一次。') + '</span></div>' +
      rules(!!o.rules, N(6)),
      o.used ? '' : 'has-bar') + bar + (o.after || '');
  }

  K.add({ id: 'P23-1', page: 'P23', state: '可领第二档', h: 1160, html: function () {
    return rewards({ title: '红河同路人', sub: '走过 2 / 4 站 · 60 同路分', acc: ['路牌纹挎包扣', '梯田等高线围巾'], reached: 2, now: 2 });
  }, notes: [
    [1, '形象区白卡圆角 20：中性旅人头像 72，放在 88 的米色素底上。称号宋体 22。副行 12.5「走过 2 / 4 站 · 60 同路分」。配饰只显示已获得的两枚胶囊（高 22、竹金 18% 底），没有的不占位'],
    [2, '称号四格，从左到右：红河来客 → 红河同路人 → 红河熟客 → 长廊同心人。已达到的深田青底白字、下面竹金「已达到」；当前称号加 1.5px 竹金描边。未达到白底石灰。按今年打卡站数，只升不降'],
    [3, '四档礼品卡，每张：档名宋体 16、条件 13、可选礼品、可领柜台。低于当前档标水田青「已达到」；当前档竹金描边 +「现在可领」；更高档灰胶囊写差距。本例 2 站 60 分：二档可领，三档「还差 1 站 / 10 分」（70−60），四档「还差 2 站 / 40 分」（100−60）。礼品名是示意，实物以后台 B5 为准'],
    [4, '金色条同 P07「还没领过、有更高档可达」：现在领是第二档；再走一站可以领第三档。今年只能领一次。字 13 粗、竹金 16% 底、圆角 12'],
    [5, '底部主按钮「出示领礼码」高 46。已登记本人证件 → P24；没登记 → P23-2。游客端没有「已领取」按钮'],
    [6, '规则说明默认折叠，一行高 48，右箭头。点开展开四条（见 P23-4）'],
    '一二档四站柜台都可领；三档不到迤萨路口；四档只在马帮古城或撒玛坝（与 P07 第四档文案一致）。柜台名单以后台为准',
    '不够第一档时不画这个按钮：四档都写差距，金色条改为「再答完这一站的题，就能领第一档。」礼品区上方写「完成任意一站就能领第一档」',
    '加载中用四张礼品骨架卡；页面出错用通用重试'
  ], desc: '把称号和礼品分开给游客看：称号看走过几站，礼品看走完几站、分够不够。现在领还是再走，由游客自己选。' });

  K.add({ id: 'P23-2', page: 'P23', state: '没登记证件 · 底部弹层', html: function () {
    return rewards({ quiet: 1, title: '红河同路人', sub: '走过 2 / 4 站 · 60 同路分', acc: ['路牌纹挎包扣', '梯田等高线围巾'], reached: 2, now: 2, after:
      K.sheet('', '<div class="sh-t"' + n(1) + '>领礼要先登记证件</div><p class="rw-sheet-d"' + n(2) + '>只用来保证每个证件每年领一次，我们只保存加密后的结果</p>' + K.btn('去登记', 'primary block mt16', 3)) });
  }, notes: [
    [1, '点「出示领礼码」且没有本人证件时，底部弹层。标题宋体 18 居中。拖拽条、点遮罩可关'],
    [2, '说明 13 石灰居中，两行内：「只用来保证每个证件每年领一次，我们只保存加密后的结果」。不在这里解释哈希算法'],
    [3, '「去登记」→ P27 编辑页。登记成功后自动回到本页，并继续打开领礼码，不用游客再找一次按钮'],
    '一个微信号只有一个本人证件，弹层不出现「这次谁来领」。家人用自己的微信号登记、自己的微信号领',
    '底下页面保持可领状态，弹层盖住底部按钮'
  ], desc: '没有证件就不出码。先说清楚为什么要登记，再送去填写。' });

  K.add({ id: 'P23-3', page: 'P23', state: '今年已领 · 领取记录', h: 720, html: function () {
    return rewards({ title: '红河同路人', sub: '走过 2 / 4 站 · 60 同路分', acc: ['路牌纹挎包扣', '梯田等高线围巾'], reached: 2, used: 1, gold: '今年的礼品已经领过了。<br>称号和石榴还可以继续攒。' });
  }, notes: [
    [1, '形象和称号进度保留，领完还可以继续攒称号'],
    [2, '已达到的称号格仍是深田青。今年已领不收回称号'],
    [3, '整个礼品区折叠成一张领取记录卡：竹金描边、圆角 16。文案是「已领取 · 第二档 · 红米小礼盒 · 东门街柜台 · 10-19 15:32」，宋体 18，按语义折成三行，不删字'],
    [4, '金色条改用 P07「今年已领过」：今年的礼品已经领过了。称号和石榴还可以继续攒。不显示「出示领礼码」'],
    [6, '规则说明仍可展开，内容和可领时相同'],
    '没有底部按钮。回到「我的」用左上角返回',
    '若后来走到更多站，记录卡不变，不出现「补领」'
  ], desc: '领过之后，礼品区只留一条记录。称号区照常，提醒还可以继续走。' });

  K.add({ id: 'P23-4', page: 'P23', state: '规则说明展开', h: 1300, html: function () {
    return rewards({ title: '红河同路人', sub: '走过 2 / 4 站 · 60 同路分', acc: ['路牌纹挎包扣', '梯田等高线围巾'], reached: 2, now: 2, rules: 1 });
  }, notes: [
    [1, '形象区同 P23-1'],
    [2, '称号四格同 P23-1'],
    [3, '四档卡同 P23-1，展开规则时不收起'],
    [4, '金色条仍在，提醒今年只能领一次'],
    [5, '「出示领礼码」固定在底部，展开规则后也不被顶走'],
    [6, '展开后箭头朝上。四条 13 号、行高 1.55，左侧竹金圆点：每个证件每年一次；取当时最高一档；同路分不能提现、不能抵现金、不能在商城抵扣；游客不能自己点「已领取」。再点标题收起'],
    '「取当时最高一档」指核销那一刻重新计算，不是出码那一刻。领过不补差，写在第一条和第四条里，不再单列营销句'
  ], desc: '规则默认收着。展开后只讲四件不能误会的事，不讲算法。' });

  /* ---------- P24 领礼码 ---------- */
  function picks(mark) {
    return '<div class="rw-picks-h"' + (mark ? n(mark) : '') + '>礼品意向<span>不选也可以</span></div><div class="rw-picks"><span class="on">红米小礼盒</span><span>竹编杯垫</span><span>本地茶小样</span></div>';
  }
  function codePage(o) {
    o = o || {};
    var plain = !o.scan && !o.offline;
    var mid;
    if (o.offline) {
      mid = '<div class="rw-nocode"' + n(2) + '>' + i('wifiOff', 22, '#5A554D') + '请连上网络再出示</div>';
    } else {
      mid = (o.scan ? '<div class="rw-checking"' + n(1) + '>' + i('clock', 14, '#2F7A78') + '店员正在核对</div>' : '') +
        '<div' + n(2) + '>' + K.qr(11, 196) + '</div>' +
        '<div' + n(3) + '><div class="rw-cd">' + (o.scan ? '核对期间暂停刷新' : '28 秒后自动刷新 · 扫不出时报数字') + '</div><div class="rw-digits"><b>482</b><b>917</b></div></div>';
    }
    var tip = '<div class="rw-gold"' + (plain ? n(6) : '') + '>' + i('info', 16, '#7A5410') + '<span>领礼时请带证件原件 · 今年只能领一次<br>再走一站可领第三档</span></div>';
    var fold = '<div class="rw-fold"' + (plain ? n(7) : '') + '><div class="hd">可领柜台' + i(o.counters ? 'up' : 'down', 16, '#6E6A63', 'margin-left:auto') + '</div>' +
      (o.counters ? '<div class="bd" style="padding-top:0">' + COUNTERS.map(function (c) { return '<div class="rw-counter"><b>' + c[0] + '</b><span>' + c[1] + '</span></div>'; }).join('') + '</div>' : '') + '</div>';
    var btns = K.bar(K.btn('我再走一站', 'ghost', 0, 'flex:1') + K.btn('就领这一档', o.offline ? 'dis' : 'primary', 0, 'flex:1'), o.offline ? 4 : (o.scan ? 6 : 0));
    return K.top('领礼码') + (o.offline ? '<div' + n(3) + '>' + K.offline('现在没有网络，领礼码需要联网才能出示') + '</div>' : '') +
      K.body('<div class="serif rw-lv"' + (o.scan ? '' : n(1)) + '>第二档 · 同路礼</div><div class="rw-code">' + mid +
        (o.offline ? '' : '<div class="rw-who"' + n(4) + '>领取人 张* · 证件后四位 2381</div>') + '</div>' +
        (o.offline ? '<div class="rw-who t-c mt12">领取人 张* · 证件后四位 2381</div>' : picks(5)) + tip + fold, 'has-bar') + btns;
  }

  K.add({ id: 'P24-1', page: 'P24', state: '出示中', h: 812, html: function () { return codePage({}); }, notes: [
    [1, '档位宋体 22 居中：「第二档 · 同路礼」。进入本页把屏幕亮度调到最高（wx.setScreenBrightness），离开页面时恢复。设计稿上不另做亮度开关'],
    [2, '二维码 196，示意不可扫，内容为服务端令牌 G.{token}。白卡圆角 20，码四周留白'],
    [3, '倒计时 12.5 石灰：「28 秒后自动刷新 · 扫不出时报数字」。下面 6 位数字 36 粗、组内字距 6、两组间距 22，如 482 917。码和数字同时生效、同时失效，30 秒一换；截图不拦截，过期自然失效'],
    [4, '领取人 13 号：「领取人 张* · 证件后四位 2381」。只显示脱敏姓名和后四位'],
    [5, '礼品意向三选一，本档示意：红米小礼盒、竹编杯垫、本地茶小样。选中竹金描边 + 浅底；可改、可不选。店员端看得到意向，库存不够时由店员换同档另一件'],
    [6, '提示金色条两行：「领礼时请带证件原件 · 今年只能领一次」「再走一站可领第三档」。底部「我再走一站」线框，返回继续走（回四站）；「就领这一档」主按钮，只收起这两行提示，码一直显示，不核销'],
    [7, '「可领柜台」默认折叠。二档四站都可以领，展开见 P24-5'],
    '每 2 秒查一次核销状态，被核销后 2 秒内变成 P24-3。已是第四档时，提示第二行不出现',
    '离开再进来会重新签发，旧码立即失效'
  ], desc: '把码亮给店员看。游客只能出示，不能自己把状态改成已领取。' });

  K.add({ id: 'P24-2', page: 'P24', state: '店员正在核对', h: 860, html: function () { return codePage({ scan: 1 }); }, notes: [
    [1, '店员扫到、还没确认时，码上方出现水田青胶囊「店员正在核对」（高 28）。状态 SCANNED'],
    [2, '二维码保持不动，方便店员对着看'],
    [3, '倒计时换成「核对期间暂停刷新」。锁定 60 秒内，这个码不因 30 秒到期而失效，数字也不换'],
    [4, '领取人信息不变，店员对照证件原件'],
    [5, '礼品意向仍显示刚才选的「红米小礼盒」，店员端同时看得到'],
    [6, '两个按钮还在。核销成功前不要清掉页面；若游客离开后再回来，且店员还没确认，按「重新签发」处理'],
    '核对中不要出现「已领取」。确认发放后才进 P24-3'
  ], desc: '码被扫到之后先停在「正在核对」，等店员确认发放。' });

  K.add({ id: 'P24-3', page: 'P24', state: '已领取', html: function () {
    return K.top('领礼码') + K.body('<div class="rw-done"><img class="rw-mas" src="' + img.mascot('05-cheer') + '" alt=""' + n(2) + '>' +
      '<div class="rw-rec"' + n(1) + '><div class="k">领取记录</div><div class="t">' + REC + '</div></div>' +
      '<p class="t-cap t-c mt12"' + n(3) + '>称号和石榴还可以继续攒</p></div>');
  }, notes: [
    [1, '核销成功后整页换成领取记录卡，不再显示二维码和数字。文案与 P23 折叠卡相同：「已领取 · 第二档 · 红米小礼盒 · 东门街柜台 · 10-19 15:32」'],
    [2, '吉祥物庆祝（驮驮 05-cheer）宽 168，居中。只此一次，不放礼花、不放音效'],
    [3, '下面一行 12 石灰：「称号和石榴还可以继续攒」。没有「已领取」按钮——这一页是店员核销推过来的'],
    '从出示到变成已领取，不超过 2 秒（轮询或 WebSocket）。返回后 P22 按钮变为「今年已领 · 第二档」，P23 礼品区折叠',
    '同一个码再被扫，店员端显示「已发放」'
  ], desc: '领到了。页面自己变成记录，游客不用再点任何确认。' });

  K.add({ id: 'P24-4', page: 'P24', state: '没网', html: function () { return codePage({ offline: 1 }); }, notes: [
    [1, '档位和领取人仍用上次知道的内容，避免页面空白'],
    [2, '码区域换成 196 高的米灰块，图标 +「请连上网络再出示」。不展示过期二维码，也不展示 6 位数字'],
    [3, '顶部离线条说明领礼码必须联网'],
    [4, '「我再走一站」仍可点（只是返回）。「就领这一档」置灰：没有码，谈不上收起提示'],
    '网络恢复后自动重新签发，不需要游客再进一次页面。定位打卡、答题可以离线，出码不行'
  ], desc: '没网就不出码。页面说清楚要联网，不留一张不能用的二维码。' });

  K.add({ id: 'P24-5', page: 'P24', state: '可领柜台展开', h: 980, html: function () { return codePage({ counters: 1 }); }, notes: [
    [1, '档位仍是第二档 · 同路礼'],
    [2, '二维码保持显示，展开柜台不把码顶出操作区；页变长后可以滑动，码在上方'],
    [3, '数字码仍在，30 秒刷新不因展开而停止'],
    [4, '领取人一行不变：「领取人 张* · 证件后四位 2381」'],
    [5, '礼品意向保持'],
    [6, '提示条仍在。若已经点过「就领这一档」，这两行收起，柜台列表不受影响'],
    [7, '二档四站都可以领。每行：柜台名 13.5、开放时间 12 石灰靠右。时间是示意，上线读 B5 柜台的开放时间。点某一行不导航；需要位置时去服务地图'],
    '三档不列出迤萨路口；四档只列马帮古城东门街柜台和撒玛坝观景台服务柜台。本柜台没有这一档时，由店员端告知可领柜台，游客端列表不临时改'
  ], desc: '出码页顺便回答「去哪个柜台」。默认收着，要看时再展开。' });

  /* ---------- P25 同路分明细 ---------- */
  function qRow(stem, ok, score, wait, mark) {
    return '<div class="rw-q"' + (mark ? n(mark) : '') + '><span class="stem">' + stem + '</span><span class="res ' + (ok ? 'ok' : 'no') + '">' + (ok ? '对' : '错') + '</span><span class="sc ' + (wait ? 'wait' : ok ? 'ok' : '') + '">+' + score + '</span></div>';
  }
  function grp(o) {
    return '<div class="rw-grp"><div class="hd"><img class="seal" src="' + img.seal(o.k, !!o.wait) + '" alt=""><div class="grow"><b>' + S[o.k].name + '</b><em>' + o.date + ' 打卡</em></div>' +
      (o.wait ? '<span class="rw-sync">待同步</span>' : '') + '</div>' + o.rows +
      (o.foot ? '<div class="rw-wait">' + o.foot + '</div>' : '') + '</div>';
  }
  function pointsFoot(mark) {
    return K.bar('<div class="rw-lock">' + i('info', 14, '#5A554D') + '<span>同路分不能提现，不能抵现金，也不能在商城里使用</span></div>', mark);
  }
  var yisaRows = qRow('在高速路口打卡，应该在哪…', 1, 10, 0, 4) + qRow('红河县少数民族人口约占…', 1, 10) + qRow('这一站讲的“交往交流交融…', 1, 10);
  var samabaRows = qRow('撒玛坝梯田冬春灌水季大约…', 1, 10) + qRow('在长街宴上不喝酒，可以吗…', 1, 10) + qRow('乐作舞和哈尼多声部，下面…', 1, 10);
  var forestRows = qRow('这一站讲的水，按什么顺序…', 1, 10, 1) + qRow('经过寨神林，比较合适的做…', 1, 10, 1) + qRow('为什么说住在山上和河谷的…', 0, 3, 1);

  K.add({ id: 'P25-1', page: 'P25', state: '今年明细 · 含待同步', h: 960, html: function () {
    return K.top('同路分明细', { sticky: 1 }) + K.body(
      '<div class="rw-years"' + n(1) + '><span class="on">2026</span><span>2025</span></div>' +
      '<div class="rw-sum"' + n(2) + '><div><div class="y">2026 年度合计</div><div class="cap">已同步的题目</div></div><div class="num"><b>60</b><span>同路分</span></div></div>' +
      '<div' + n(3) + '>' + grp({ k: 'yisa', date: '10-12', rows: yisaRows }) + grp({ k: 'samaba', date: '10-18', rows: samabaRows }) + '</div>' +
      '<div' + n(5) + '>' + grp({ k: 'forest', date: '10-19', wait: 1, rows: forestRows, foot: '这 23 分还没计入上面的 60，连上网络后自动同步' }) + '</div>',
      'has-bar') + pointsFoot(6);
  }, notes: [
    [1, '年份胶囊高 30。当前年深田青底白字，其他年白底描边。点 2025 看往年，版式相同；那一年没有记录时，合计为 0，中间用「这一年还没有分数」，不显示吉祥物按钮。每年 1 月 1 日分数从零起算，往年只读'],
    [2, '顶部合计卡深田青、圆角 20。左「2026 年度合计」竹金 12；右竹金宋体 34「60」+「同路分」。只加已同步且已结算的题。本例迤萨路口 30 + 撒玛坝 30'],
    [3, '按站分组，白卡圆角 16。组头：印章 36、站名宋体 16、打卡日期 12 石灰。站的顺序按打卡时间，不按四站固定顺序'],
    [4, '每题一行：题干只取前 12 字加省略号；对 = 水田青，错 = 石灰（不用红色，也不写「失败」）；得分靠右，答对 +10 水田青，看过讲解 +3 墨色。点一行不展开全文'],
    [5, '整组还在本地的，组头灰胶囊「待同步」，印章用灰章。分数先显示本地结果，并用一行说明还没进合计。同步成功后胶囊消失，合计重算；被拒绝时这组改成「这次记录没能同步：{原因}」，本地分撤回'],
    [6, '底部固定条，不随列表滚走：「同路分不能提现，不能抵现金，也不能在商城里使用」。12 号、字重 600，无按钮'],
    '答错但还没点「我记住了」的题不出现在这里（未结算，0 分）。题目后来下线的，已得分保留，题干仍显示当时的前 12 字'
  ], desc: '同路分按站、按题可核对。待同步的单独标出来，不混进年度合计。' });

  K.add({ id: 'P25-2', page: 'P25', state: '还没有分数', html: function () {
    return K.top('同路分明细') + K.body(
      '<div class="rw-years"' + n(1) + '><span class="on">2026</span></div>' +
      '<div class="rw-sum"><div><div class="y">2026 年度合计</div></div><div class="num"><b>0</b><span>同路分</span></div></div>' +
      '<div class="empty" style="padding-top:28px"' + n(2) + '><img src="' + img.mascot('03-think') + '" alt=""><b>还没有分数</b><p>到任意一站打卡答题，分数会出现在这里</p>' +
      K.btn('去四站看看', 'primary', 3) + '</div>', 'has-bar') + pointsFoot(4);
  }, notes: [
    [1, '只有当前年。没有往年记录时不显示其他年份'],
    [2, '空状态：吉祥物「思考」宽 132，标题宋体 17「还没有分数」，说明 13 石灰'],
    [3, '「去四站看看」宽 180 → P02。不在这里推荐某一站'],
    [4, '底部固定说明空状态也在，避免把同路分理解成可以抵扣的积分'],
    '未登录进不了本页，入口上先走登录弹层'
  ], desc: '一分还没有的时候，不展示空表格，直接请人去四站。' });

  /* ---------- P27 常用游客 ---------- */
  var explain = '一个微信号只能绑定一个本人证件。<br>家人用自己的微信号登记。';
  var privacy = '只用来保证每个证件每年领一次，我们只保存加密后的结果，不保存证件原号。';
  function personRow(mark) {
    return '<div class="cells rw-person"' + n(mark || 1) + '><div class="cell"><span class="who">张* · 身份证 · 后四位 2381</span><span class="v">本人</span>' + chev() + '</div></div>';
  }

  K.add({ id: 'P27-1', page: 'P27', state: '本人一位', html: function () {
    return K.top('常用游客') + K.body(
      '<div class="rw-box"' + n(1) + '>' + explain + '</div>' + personRow(2) +
      '<p class="rw-id-hint"' + n(3) + '>今年还没领礼的话，可以删除后重新登记，每年最多 2 次。领过之后，今年不能改证件号。</p>');
  }, notes: [
    [1, '说明框白卡圆角 16、字 13：「一个微信号只能绑定一个本人证件。家人用自己的微信号登记。」没有「添加家人」按钮'],
    [2, '列表只有一行，高 52 左右，字 15 粗：「张* · 身份证 · 后四位 2381」。右侧灰字「本人」+ 箭头。点一行进编辑页。不显示完整证件号，不显示手机号'],
    [3, '行下 12 石灰说明修改规则：今年没领过可以删除重登，每年最多 2 次；领过则今年不能改。次数用完时保存接口返回文案「今年修改证件的次数已用完」'],
    '空列表（还没登记）：说明框保留，中间「还没有证件」+ 按钮「去登记」→ 编辑页。领礼流程里的「去登记」直接打开编辑页，不经过空列表',
    '证件类型在列表里写成短名：身份证 / 港澳通行证 / 台湾通行证 / 护照 / 永居证'
  ], desc: '常用游客在这里只服务领礼去重：一个微信，一个本人证件。' });

  function form(o) {
    o = o || {};
    var N = o.quiet ? function () { return ''; } : n;
    var idCls = o.bad ? ' err' : '';
    var idVal = o.bad ? '<span class="in">53250119900101</span>' : (o.filled ? '<span class="in">5325 ···· ···· 2381</span>' : '<span class="ph">请填写证件号</span>');
    return K.top(o.title || '登记证件') + K.body(
      '<div class="field"' + (o.mark ? n(o.mark) : '') + '><div class="f-row"' + N(1) + '><label>姓名</label><span class="in">张*</span></div>' +
      '<div class="f-row"' + N(2) + '><label>证件类型</label><span class="in">居民身份证</span><img class="rw-f-arr" src="' + img.ui('chevron-right') + '" alt=""></div>' +
      '<div class="f-row' + idCls + '"' + N(3) + '><label>证件号</label>' + idVal + '</div></div>' +
      (o.bad ? '<p class="rw-err"' + N(4) + '>证件号格式不对，请再核对一下</p>' : '') +
      '<div class="rw-box"' + (o.bad || o.quiet ? '' : n(4)) + '>' + privacy + '</div>',
      'has-bar') + K.bar(K.btn('保存', o.bad ? 'dis' : 'primary', o.quiet || o.bad ? 0 : 5, 'flex:1')) + (o.after || '');
  }

  K.add({ id: 'P27-2', page: 'P27', state: '编辑 · 待填写证件号', html: function () { return form({}); }, notes: [
    [1, '姓名行高 52，标签宽 76。界面只呈现脱敏姓名「张*」（服务端只存姓 + 「*」，再次进入不回显全名）。首次填写时这里是输入框，占位「与证件上的姓名一致」'],
    [2, '证件类型当前「居民身份证」，行尾箭头。点开底部弹层五选一：居民身份证 / 港澳居民来往内地通行证 / 台湾居民来往大陆通行证 / 护照 / 外国人永久居留身份证。选中项红土勾，点遮罩关闭'],
    [3, '证件号原号不回显。未填写时占位「请填写证件号」。键盘：身份证用数字键盘（末位允许 X），其他类型用可见字符。只在本地校验，通过后才提交'],
    [4, '说明框：「只用来保证每个证件每年领一次，我们只保存加密后的结果，不保存证件原号。」'],
    [5, '底部「保存」高 46。格式通过后点保存，先出二次确认（P27-4），不直接提交'],
    '今年已领礼：证件号行不可编辑，保存按钮不出现，说明框改为「今年领过礼，不能修改证件号」。没领过：编辑页底部另有文字按钮「删除并重登」',
    '从领礼弹层进来时，保存成功直接回 P23 并继续出码'
  ], desc: '登记页只收姓名、证件类型和证件号，并先把「为什么要填」说清楚。' });

  K.add({ id: 'P27-3', page: 'P27', state: '证件号格式不对', html: function () { return form({ bad: 1 }); }, notes: [
    [1, '姓名没有格式错误时保持原样'],
    [2, '证件类型不影响这行红字。换类型后按该类型的规则重新校验'],
    [3, '证件号行底边改为错误色。示意填了 14 位，身份证需要 18 位并核对校验位'],
    [4, '行下红字 12，只用文字色、不加红底：「证件号格式不对，请再核对一下」。输入一旦改对，红字马上消失'],
    '格式不对时「保存」置灰，不能打开二次确认。错误码 ID_FORMAT，文案与此相同',
    '不在红字里写「失败」'
  ], desc: '证件号边写边查。不对就停在这一行，用一句人话说明。' });

  K.add({ id: 'P27-4', page: 'P27', state: '保存前二次确认', html: function () {
    return form({ quiet: 1, filled: 1, mark: 3, after: K.dialog('保存后，今年不能修改证件号', '<p' + n(2) + '>将保存为 张* · 居民身份证<br>后四位 2381</p>', [['再想想', 'ghost'], ['确认保存', 'primary']], { n: 1 }) });
  }, notes: [
    [1, '二次确认弹层，标题宋体 18，即规格原文「保存后，今年不能修改证件号」。右按钮「确认保存」提交 POST /travelers；左按钮「再想想」关掉弹层，不提交（规格未写取消文案，用「再想想」与其他确认层一致）'],
    [2, '正文复述将保存的脱敏结果，方便核对后四位。弹层上不出现完整证件号'],
    [3, '底下表单停在已填状态。遮罩盖住「保存」，避免点两次'],
    '确认后按钮进入加载。成功：列表出现这一行，Toast「已登记」。今年领过礼或修改次数用完，改走对应错误文案，不出这个确认层'
  ], desc: '保存前再拦一次：今年改不了证件号，这句要在提交前看见。' });

  K.add({ id: 'P27-5', page: 'P27', state: '证件已被占用', html: function () {
    return form({ quiet: 1, filled: 1, after: K.dialog('这个证件已在另一个<br>微信号上登记过', '<p' + n(2) + '>如有疑问请联系服务电话</p><div class="rw-tel"' + n(3) + '><div class="grow"><b>服务电话</b><span>与「服务与求助电话」同一条</span></div>' + K.btn('拨打', 'teal sm', 0, 'flex:none') + '</div>', [['知道了', 'primary']], { n: 1 }) });
  }, notes: [
    [1, '接口返回 ID_TAKEN。标题即规格前半句「这个证件已在另一个微信号上登记过」，18 号宋体，两行内'],
    [2, '正文接后半句「如有疑问请联系服务电话」。两句连读就是完整错误文案。不提示对方是哪个账号'],
    [3, '电话条：左「服务电话」，右「拨打」水田青小按钮，调用 wx.makePhoneCall。号码不在本页写死，取 P31 / B4 的县文旅服务电话；离线时按钮仍用离线包里的号码'],
    '点「知道了」或遮罩关闭，回到编辑页，证件号保留，方便改一位再试。这次不写入',
    '没有「继续绑定」或「申诉」按钮。疑问走服务电话'
  ], desc: '同一个证件不能挂在两个微信号上。撞了就说明原因，并把服务电话放在手边。' });
})();
