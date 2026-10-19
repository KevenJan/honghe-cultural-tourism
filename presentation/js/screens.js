/* 红河同路 · HTML 重绘的小程序界面 */
(function () {
  var A = 'assets/';
  function status() { return '<div class="ph-status"><span>9:41</span><span class="bat"></span></div>'; }
  function nav(title, back) {
    return '<div class="ph-nav">' + (back ? '<img class="back" src="' + A + 'ui/ui-back.svg" alt="">' : '') + (title || '') + '<span class="capsule"></span></div>';
  }
  function tab(on) {
    var items = [['home', '首页'], ['sites', '四站'], ['mid', '问驮驮'], ['goods', '好物'], ['me', '我的']];
    return '<nav class="ph-tab">' + items.map(function (it) {
      if (it[0] === 'mid') return '<a class="mid"><span><img src="' + A + 'mascot/tuotuo-07-avatar@400.webp" alt=""></span><em>问驮驮</em></a>';
      var isOn = it[0] === on;
      return '<a class="' + (isOn ? 'on' : '') + '"><img src="' + A + 'tab/tab-' + it[0] + (isOn ? '-active' : '') + '.svg" alt="" style="' + (isOn ? '' : 'opacity:.5') + '">' + it[1] + '</a>';
    }).join('') + '</nav>';
  }
  function ui(name, style) { return '<img src="' + A + 'ui/ui-' + name + '.svg" alt="" style="' + (style || '') + '">'; }
  function phone(cls, inner) { return '<div class="phone ' + (cls || '') + '">' + inner + '</div>'; }

  /* 示意二维码（非真实可扫） */
  function qr(seed) {
    var n = 25, s = seed || 7, cells = '';
    function rnd() { s = (s * 9301 + 49297) % 233280; return s / 233280; }
    function finder(x, y) {
      return '<rect x="' + x + '" y="' + y + '" width="7" height="7" fill="#22201C"/><rect x="' + (x + 1) + '" y="' + (y + 1) + '" width="5" height="5" fill="#fff"/><rect x="' + (x + 2) + '" y="' + (y + 2) + '" width="3" height="3" fill="#22201C"/>';
    }
    for (var y = 0; y < n; y++) for (var x = 0; x < n; x++) {
      var inF = (x < 8 && y < 8) || (x > n - 9 && y < 8) || (x < 8 && y > n - 9);
      if (!inF && rnd() > .52) cells += '<rect x="' + x + '" y="' + y + '" width="1" height="1"/>';
    }
    return '<svg class="qr" viewBox="-1 -1 ' + (n + 2) + ' ' + (n + 2) + '" shape-rendering="crispEdges"><rect x="-1" y="-1" width="' + (n + 2) + '" height="' + (n + 2) + '" fill="#fff"/><g fill="#22201C">' + cells + '</g>' + finder(0, 0) + finder(n - 7, 0) + finder(0, n - 7) +
      '<rect x="10" y="10" width="5" height="5" rx="1" fill="#fff"/><circle cx="12.5" cy="12.5" r="2" fill="#A8452F"/></svg>';
  }

  var S = {};

  S.home = function () {
    return phone('', status() + nav('') +
      '<div class="ph-body has-tab" style="top:44px">' +
      '<div class="home-top"><div><img class="wm" src="' + A + 'logo/logo-wordmark.svg" alt="红河同路"><div class="sub">各族同路走，好物一路带</div></div>' +
      '<div class="r" style="margin-right:96px"><span class="pill-pts">登录记分</span></div></div>' +
      '<div class="hero" style="background-image:url(' + A + 'sites/site-04-samaba-terraces@750w.webp)"><div class="dots"><i></i><i></i><i></i></div><div class="t"><b>撒玛坝 · 灌水季</b><span>11 月—次年 4 月 · 梯田满水如镜</span></div><span class="btn gold sm">看这一站</span></div>' +
      '<div class="grid8">' + [['01-checkin', '到达打卡'], ['02-four-sites', '四站'], ['03-ethnic-fusion', '同心石榴'], ['04-ask-tuotuo', '问驮驮'], ['05-gift', '领礼'], ['06-local-goods', '一路好物'], ['07-service-map', '服务地图'], ['08-study-tour', '研学团队']].map(function (g) {
        return '<div><img src="' + A + 'grid/grid-' + g[0] + '@192.webp" alt="">' + g[1] + '</div>';
      }).join('') + '</div>' +
      '<div class="notice">' + ui('fire-ban', 'filter:invert(45%) sepia(80%) saturate(1500%) hue-rotate(345deg)') + '森林公园防火期 · 请勿携带火种</div>' +
      '<div class="p-h">四站长廊<small>可顺可逆，从哪站开始都行</small></div>' +
      '<div class="hscroll"><div class="trail-line"></div>' +
      [['01-yisa-gateway', '迤萨路口', '同一条路'], ['02-forest-park', '森林公园', '同一沟水'], ['03-mabang-oldtown', '马帮古城', '同一条街']].map(function (c) {
        return '<div class="mini-site"><div style="background-image:url(' + A + 'sites/site-' + c[0] + '@750w.webp)"></div><b>' + c[1] + '</b><span>' + c[2] + '</span></div>';
      }).join('') + '</div></div>' + tab('home'));
  };

  S.sites = function () {
    var cards = [
      ['01-yisa-gateway', '同一条路', '迤萨路口', '从这里进红河', '停车：出口后访客停车场'],
      ['02-forest-park', '同一沟水', '马帮侨乡森林公园', '大家共用一沟水', '停车：游客中心停车场'],
      ['03-mabang-oldtown', '同一条街', '马帮古城', '出门的人和等的人', '停车：东门街停车场'],
      ['04-samaba-terraces', '同一片田', '撒玛坝梯田', '同一片梯田，同一张长桌', '停车：观景台停车场']
    ];
    return phone('', status() + '<div class="ph-nav">四站<span class="capsule"></span><span style="position:absolute;left:16px;font-size:13px;color:var(--paddy-teal);font-weight:600">服务地图</span></div>' +
      '<div class="ph-body has-tab">' + cards.map(function (c) {
        return '<div class="site-big" style="background-image:url(' + A + 'sites/site-' + c[0] + '@750w.webp)"><span class="chip">' + c[1] + '</span><div class="t"><b>' + c[2] + '</b><span>' + c[3] + '</span><em>' + c[4] + '</em></div><span class="btn primary sm" style="flex:none">看这一站</span></div>';
      }).join('') + '</div>' + tab('sites'));
  };

  S.map = function () {
    function pin(x, y, t, c) { return '<div style="position:absolute;left:' + x + 'px;top:' + y + 'px;width:30px;height:30px;margin:-15px 0 0 -15px;border-radius:50%;background:' + c + ';color:#fff;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 6px rgba(0,0,0,.25);border:2px solid #fff">' + t + '</div>'; }
    return phone('', status() + nav('服务地图', true) +
      '<div class="ph-body full" style="top:88px">' +
      '<div class="cats" style="padding:0 16px"><span class="on">全部</span><span>停车场</span><span>厕所</span><span>服务柜台</span><span>医疗点</span><span>充电桩</span></div>' +
      '<div style="position:absolute;left:0;right:0;top:44px;bottom:0;background:#EFE7D6;overflow:hidden">' +
      '<svg viewBox="0 0 375 680" style="position:absolute;inset:0;width:100%;height:100%">' +
      '<g fill="none" stroke="#D9CBB0" stroke-width="1.2">' + [0, 1, 2, 3, 4, 5, 6, 7].map(function (i) { return '<path d="M-20 ' + (90 + i * 64) + ' C 90 ' + (40 + i * 64) + ', 200 ' + (150 + i * 64) + ', 400 ' + (80 + i * 64) + '"/>'; }).join('') + '</g>' +
      '<path d="M-10 520 C 80 470, 140 560, 230 500 S 360 420, 390 450" fill="none" stroke="#9CC3C0" stroke-width="10" stroke-linecap="round" opacity=".8"/>' +
      '<text x="250" y="470" font-size="11" fill="#5E8D8A">红河</text>' +
      '<text x="70" y="110" font-size="12" fill="#6E6A63" font-weight="700">迤萨镇</text><text x="230" y="300" font-size="12" fill="#6E6A63" font-weight="700">宝华镇</text></svg>' +
      pin(92, 140, 'P', '#2F7A78') + pin(130, 168, '柜', '#A8452F') + pin(70, 196, 'WC', '#6E6A63') +
      pin(250, 330, 'P', '#2F7A78') + pin(286, 352, '柜', '#A8452F') + pin(222, 368, '+', '#D9622B') + pin(180, 230, '电', '#D9A441') +
      '<div class="p-card" style="position:absolute;left:12px;right:12px;bottom:28px;padding:14px 16px"><b class="serif" style="font-size:16px">撒玛坝观景台停车场</b>' +
      '<p class="muted" style="font-size:12.5px;margin-top:2px">示意 · 车位与开放时间以景区公布为准</p>' +
      '<div style="display:flex;gap:6px;margin-top:8px"><span class="chip teal">停车场</span><span class="chip">服务柜台 50 米</span><span class="chip grey">厕所</span></div>' +
      '<span class="btn primary block" style="margin-top:12px">用微信地图打开</span>' +
      '<p class="muted" style="text-align:center;margin-top:6px">只标服务点，不画路线</p></div>' +
      '</div></div>');
  };

  S.site = function () {
    return phone('', status() + nav('撒玛坝梯田', true) +
      '<div class="ph-body has-bar">' +
      '<div class="theme-card"><div class="k">撒玛坝梯田 · 宝华镇</div><h4>同一片梯田，<br>同一张长桌</h4><img class="badge" src="' + A + 'badges/badge-tian.svg" alt=""><img class="stripes" src="' + A + 'contour-stripes.svg" alt=""></div>' +
      '<div class="info-line">' + ui('headset') + '约 3 分钟 · 完成可得 30 同路分 · 内容已审定</div>' +
      '<div class="seg"><span class="on">导览</span><span>听一听</span><span>答一答</span><span>来源</span></div>' +
      '<div class="p-card" style="margin-top:12px"><div class="c-card" style="margin:0"><div class="im" style="background-image:url(' + A + 'heritage/heritage-03-kaiyangmen@690w.webp)"></div><div><b>开秧门：大家一起下田</b><p>春天插秧的第一天，各寨乡亲一起下田。<span class="chip grey" style="height:18px;font-size:10px;margin-left:4px">节令活动</span></p></div></div></div>' +
      '<div class="p-card" style="margin-top:10px"><b class="serif" style="font-size:15px">乐作是跳的，多声部是唱的</b><p style="font-size:12.5px;color:#5A554D;margin-top:2px">两样都是国家级非遗，分开听一听。</p>' +
      '<div class="audio"><i>' + ui('play') + '</i>听乐作<span class="wave"></span><em>1:20</em></div>' +
      '<div class="audio"><i>' + ui('play') + '</i>听多声部<span class="wave"></span><em>1:05</em></div></div>' +
      '<div class="p-card" style="margin-top:10px"><div class="c-card" style="margin:0"><div class="im" style="background-image:url(' + A + 'heritage/heritage-04-long-table-feast@690w.webp)"></div><div><b>长街宴：一张长桌</b><p>各家端出一桌菜，连成一条街。<span class="chip grey" style="height:18px;font-size:10px;margin-left:4px">生活习俗</span></p></div></div></div>' +
      '</div><div class="ph-bar"><span class="btn primary">到达打卡</span></div>');
  };

  S.quiz = function () {
    return phone('', status() + nav('答一答 · 撒玛坝', true) +
      '<div class="ph-body">' +
      '<div class="q-dots"><i class="on"></i><i class="on"></i><i></i></div>' +
      '<div class="q-card"><div class="n">第 2 题 / 共 3 题</div><h4>撒玛坝梯田的水，主要从哪里来？</h4></div>' +
      '<div class="opt right"><b>A</b>山顶的森林<img class="ck" src="' + A + 'ui/ui-check.svg" alt=""></div>' +
      '<div class="opt wrong"><b>B</b>山下的河</div>' +
      '<div class="opt"><b>C</b>雨季的雨水</div>' +
      '<div class="opt"><b>D</b>抽水机</div>' +
      '<div class="explain"><b>正确的是 A</b><p>森林在上，村寨在中，梯田在下。水从林里来，顺着水沟一层层流下去。</p><div class="src">来源：红河县文化馆 · 已审定</div></div>' +
      '<span class="btn primary block" style="margin-top:14px">我记住了 +3</span>' +
      '<p class="muted" style="text-align:center;margin-top:8px">没有倒计时，慢慢看</p></div>');
  };

  S.result = function () {
    return phone('', status() + nav('记下这一站', true) +
      '<div class="ph-body">' +
      '<div class="result-top"><img class="badge" src="' + A + 'seals/seal-04-samaba-terraces@240.webp" alt=""><h4>撒玛坝梯田 · 记下了</h4><p>徽记已点亮 · 称号升级为「红河同路人」</p></div>' +
      '<div class="r-stats"><div><b>26</b><span>本站得分</span></div><div><b>64</b><span>累计同路分</span></div><div><b>第二档</b><span>现在可领</span></div></div>' +
      '<div class="gold-note">现在领是第二档；再走一站可以领第三档。今年只能领一次。</div>' +
      '<span class="btn primary block" style="margin-top:14px">去领礼</span>' +
      '<span class="btn ghost block" style="margin-top:10px">看这站好物</span>' +
      '<span class="btn ghost block" style="margin-top:10px">下一站怎么走</span>' +
      '<p class="muted" style="text-align:center;margin-top:10px">下一站：马帮古城 · 停车：东门街停车场<br>只给距离和停车点，导航请用手机地图</p></div>');
  };

  S.me = function () {
    var seals = [['01-yisa-gateway', '路口', 1], ['02-forest-park', '森林', 0], ['03-mabang-oldtown', '古城', 0], ['04-samaba-terraces', '梯田', 1]];
    return phone('', status() + nav('') +
      '<div class="ph-body has-tab" style="top:44px">' +
      '<div class="me-head"><div class="av"></div><div><b>微信用户</b><span class="muted">配饰：路牌纹挎包扣 · 梯田等高线围巾</span></div></div>' +
      '<div class="tl-card"><img class="stripes" src="' + A + 'contour-stripes.svg" alt=""><div class="k">同路卡</div><h4>红河同路人</h4><div class="pts"><b>64</b>同路分</div>' +
      '<div class="seals4">' + seals.map(function (s) {
        return '<div class="' + (s[2] ? '' : 'off') + '"><img src="' + A + 'seals/seal-' + s[0] + (s[2] ? '' : '-locked') + '@240.webp" alt="">' + s[1] + '</div>';
      }).join('') + '</div>' +
      '<span class="btn gold block">现在可领第二档 · 出示领礼码</span></div>' +
      '<div class="two-cards"><div><b>我的订单</b><span class="muted">2 件待收货</span></div><div><b>常用游客</b><span class="muted">证件登记 · 同行人</span></div></div>' +
      '<div class="list">' + ['我的足迹（同路册）', '我的礼品', '离线包', '现场礼仪', '服务 / 救援 / 投诉电话', '关于与审定单位'].map(function (t) {
        return '<div>' + t + '<img src="' + A + 'ui/ui-chevron-right.svg" alt=""></div>';
      }).join('') + '</div></div>' + tab('me'));
  };

  S.gift = function () {
    return phone('', status() + nav('领礼码', true) +
      '<div class="ph-body">' +
      '<div class="qr-card"><div class="tier">第二档 · 同路礼</div>' + qr(11) +
      '<div class="muted">28 秒后自动刷新 · 扫不出时报数字</div>' +
      '<div class="serif" style="font-size:24px;letter-spacing:.3em;margin:4px 0 6px">482 917</div>' +
      '<div class="who">领取人 张** · 证件后四位 2381</div></div>' +
      '<div class="gifts3"><div class="on">红米小礼盒</div><div>竹编杯垫</div><div>本地茶小样</div></div>' +
      '<div class="gold-note">领礼时请带证件原件 · 今年只能领一次<br>再走一站可领第三档</div>' +
      '<div style="display:flex;gap:10px;margin-top:12px"><span class="btn ghost" style="flex:1">我再走一站</span><span class="btn primary">就领这一档</span></div>' +
      '<p class="muted" style="text-align:center;margin-top:8px">屏幕已调到最亮，离开页面后恢复</p></div>');
  };

  S.shop = function () {
    var g = [['', '梯田红米 2kg', '撒玛坝的田里来', '39', 'prod-im'], ['b', '竹编果篮', '马帮古城手艺人', '88', 'prod-im b'], ['c', '傣族土陶小杯', '马帮古城 · 傣陶', '46', 'prod-im c'], ['d', '八角 500g', '森林公园山货', '32', 'prod-im d']];
    return phone('', status() + nav('一路好物') +
      '<div class="ph-body has-tab">' +
      '<div class="cats"><span class="on">为您推荐</span><span>梯田红米</span><span>茶与山货</span><span>手作文创</span><span>按站看</span></div>' +
      '<div class="goods">' + g.map(function (x) {
        return '<div class="good"><div class="im ' + x[4] + '"></div><div class="bd"><b>' + x[1] + '</b><span class="from">' + x[2] + '</span><div style="margin-top:3px"><span class="chip teal" style="height:18px;font-size:10px">耐储</span> <span class="chip" style="height:18px;font-size:10px">可寄</span></div><div class="pr"><em>¥' + x[3] + '</em><span class="btn sm ghost" style="height:24px;font-size:11px">看看</span></div></div></div>';
      }).join('') + '</div>' +
      '<p class="muted" style="text-align:center;margin-top:10px">商品图为示意，上线时使用合作社实拍</p></div>' + tab('goods'));
  };

  S.product = function () {
    return phone('', '<div class="ph-body full" style="bottom:92px">' +
      '<div class="pd-img"><div class="ph-status on-dark" style="color:#fff"><span>9:41</span><span class="bat"></span></div><div class="ph-nav on-dark"><img class="back" src="' + A + 'ui/ui-back.svg" style="filter:invert(1)" alt=""><span class="capsule"></span></div><span>1 / 5 · 示意图</span></div>' +
      '<div class="pd-body"><div class="pd-title">撒玛坝梯田红米 2kg</div>' +
      '<div style="display:flex;justify-content:space-between;align-items:center"><span class="pd-price">¥39</span><span class="muted">已选：2kg 真空装</span></div>' +
      '<div class="seg" style="margin-top:10px"><span>商品详情</span><span class="on">来源档案</span><span>购买须知</span></div>' +
      '<div class="src-card"><div><span>生产者</span>宝华镇 xx 农民专业合作社</div><div><span>产地</span>宝华镇撒玛坝 xx 村</div><div><span>采收</span>2026 年 10 月</div><div><span>配送</span>寄回家 / 柜台自提</div><div><span>在哪遇到</span>撒玛坝梯田 · 这一站的物产</div></div>' +
      '</div></div>' +
      '<div class="ph-bar"><span style="width:46px;display:flex;align-items:center;justify-content:center;position:relative">' + ui('cart', 'width:24px') + '<i style="position:absolute;top:4px;right:2px;background:var(--terracotta);color:#fff;font-style:normal;font-size:10px;border-radius:8px;padding:0 5px">2</i></span><span class="btn ghost" style="flex:1">加入购物车</span><span class="btn primary">立即购买</span></div>');
  };

  S.staff = function () {
    return phone('staff', status().replace('ph-status', 'ph-status on-dark') + '<div class="ph-nav on-dark">店员工作台<span class="capsule"></span></div>' +
      '<div class="ph-body">' +
      '<div class="st-head"><b>马帮古城 · 东门街柜台</b><span style="font-size:12px;opacity:.7">店员 李** · 今日已发放 37</span>' +
      '<div class="st-stock"><span>一档 120</span><span>二档 46</span><span>三档 18</span><span>四档 9</span></div></div>' +
      '<div class="scan-btn">' + ui('scan') + '扫领礼码</div>' +
      '<div class="st-result"><h5>' + ui('check') + '可发放 · 第二档 同路礼</h5><p style="font-size:12.5px;opacity:.85;margin:4px 0 6px">张** · 证件后四位 2381 · 走过 2 站 · 64 分</p>' +
      '<div class="radio on"><span><i></i>红米小礼盒</span><span>余 30</span></div>' +
      '<div class="radio"><span><i></i>竹编杯垫</span><span>余 8</span></div>' +
      '<div class="radio"><span><i></i>本地茶小样</span><span>余 15</span></div>' +
      '<div class="check-row"><i><img src="' + A + 'ui/ui-check.svg" alt=""></i>已核对证件原件姓名和后四位</div>' +
      '<span class="btn gold block">确认发放</span></div>' +
      '<div class="legend"><span>已发放</span><span>今年已领</span><span class="o">码已过期</span><span class="o">本柜台无此档</span><span class="o">库存不足</span><span>未登记证件</span><span class="o">网络异常</span></div>' +
      '</div>');
  };

  function checkinBase(pulse) {
    return '<div class="ph-body full">' +
      '<div class="ck-top" style="background-image:url(' + A + 'sites/site-04-samaba-terraces@750w.webp)"><div class="ph-status on-dark" style="color:#fff"><span>9:41</span><span class="bat"></span></div><div class="ph-nav on-dark" style="color:#fff">到达打卡<img class="back" src="' + A + 'ui/ui-back.svg" style="filter:invert(1)" alt=""><span class="capsule"></span></div><h4>撒玛坝梯田</h4></div>' +
      '<div class="p-card ck-where"><span class="muted">你现在应该在</span><b>观景台停车场</b> <span class="chip teal" style="margin-left:4px">访客点</span></div>' +
      '<div class="toggles"><span class="on">我已停稳</span><span>我是乘客</span></div>' +
      (pulse ? '<div style="position:absolute;inset:0;background:rgba(28,27,24,.6);z-index:4"></div>' : '') +
      '<div class="big-btn' + (pulse ? ' pulse' : '') + '" style="z-index:5">我到了</div>' +
      (pulse
        ? '<div style="position:relative;z-index:5;text-align:center;color:#fff;font-size:15px;font-weight:600;margin-top:20px">' + ui('location', 'width:18px;display:inline;vertical-align:-3px;filter:invert(1);margin-right:6px') + '正在确认位置…</div>' +
          '<div style="position:relative;z-index:5;text-align:center;color:rgba(255,255,255,.7);font-size:12px;margin-top:4px">超过 8 秒会提示「定位信号弱」</div>'
        : '<div class="ck-hint">只在点击时取一次位置</div><div class="ck-link">定位不准？扫现场桩码</div>') +
      '</div>';
  }
  S.checkin = function () { return phone('', checkinBase(false)); };
  S.locating = function () { return phone('', checkinBase(true)); };
  S.success = function () {
    return phone('', status() + nav('打卡成功', true) +
      '<div class="ph-body">' +
      '<div class="passport"><div class="k">同路册 · 第 4 页</div><div class="date">2026.10.19</div><img class="stamp animate" src="' + A + 'seals/seal-04-samaba-terraces@240.webp" alt=""><div class="name">撒玛坝梯田</div></div>' +
      '<div class="success-row"><div class="pg pg-mount" data-lit="samaba" data-mini="1"></div><img class="mascot" src="' + A + 'mascot/tuotuo-05-cheer@400.webp" alt=""></div>' +
      '<div class="success-msg">撒玛坝这一瓣亮了</div>' +
      '<div class="success-sub">2 颗籽可以认识，3 颗正在整理</div>' +
      '<span class="btn primary block" style="margin-top:14px">去认识这一瓣</span>' +
      '<span class="btn ghost block" style="margin-top:10px">先看这一站</span></div>');
  };
  S.fail = function () {
    function st(o, icon, t, p, btn) {
      return '<div class="state' + (o ? ' o' : '') + '"><div class="ic">' + ui(icon) + '</div><div><b>' + t + '</b><p>' + p + '</p>' + (btn ? '<span class="btn sm ghost">' + btn + '</span>' : '') + '</div></div>';
    }
    return phone('', status() + nav('到达打卡', true) +
      '<div class="ph-body"><p class="muted" style="margin:4px 2px 2px">没打上时，每种情况都给出下一步</p>' +
      st(0, 'location', '还没到', '距打卡点约 2.3 公里', '先看这一站的内容') +
      st(1, 'parking', '请停稳后再打卡', '车辆行驶中不能打卡，停好车再点', '') +
      st(0, 'scan', '定位信号弱', '可以扫现场桩码完成打卡', '扫桩码') +
      st(0, 'check', '今年已在这一站打过卡', '可以重看，不重复计分', '回到这一瓣') +
      '</div>');
  };

  S.say = function () {
    return phone('', status() + nav('一句红河话', true) +
      '<div class="ph-body"><div class="say">' +
      '<span class="chip gold">录音审定后上线</span>' +
      '<h4>欢迎来家里坐</h4>' +
      '<div class="listen">' + ui('play') + '听当地说法</div>' +
      '<div class="by">某某（传承人）录音 · 县文化馆审定</div></div>' +
      '<div class="q-card" style="margin-top:20px"><div class="n">听一听，这句是什么意思？（不计分）</div>' +
      '<div class="opt right" style="margin-top:10px"><b>1</b>欢迎来家里坐<img class="ck" src="' + A + 'ui/ui-check.svg" alt=""></div>' +
      '<div class="opt"><b>2</b>我们去赶街</div><div class="opt"><b>3</b>慢慢走</div></div>' +
      '<img src="' + A + 'mascot/tuotuo-06-guide@400.webp" style="width:110px;margin:10px auto 0" alt="">' +
      '</div><div class="foot-note">学一句当地话，是为了更好地交流</div>');
  };

  /* 籽详情（静态页和演示共用） */
  function detailInner(site, ethnic, opts) {
    var H = window.HH, c = H.get(site, ethnic);
    var html = status() + '<div class="ph-nav"><img class="back" data-back src="' + A + 'ui/ui-back.svg" alt="" style="cursor:pointer">' + H.ETHNIC[ethnic] + ' · ' + H.SITES[site].at + '<span class="capsule"></span></div>' +
      '<div class="ph-body" style="bottom:80px">' +
      '<div class="seg"><span class="on">非遗</span><span>答一答</span><span>来源</span></div>' +
      c.cards.map(function (k) {
        return '<div class="hc"><div class="im' + (k.img ? '' : ' ph') + '" style="' + (k.img ? 'background-image:url(' + k.img + ')' : '') + '">' + (k.img ? '' : '插画按新 PROMPT 重绘中') + '<span class="chip ' + k.cls + '">' + k.tag + '</span></div><div class="bd"><b>' + k.t + '</b><p>' + k.p + '</p></div></div>';
      }).join('') +
      '<div class="q-card" style="margin-top:10px;padding:12px 14px"><div class="n">这颗籽的题 · 计入这一站 3 道题</div><b class="serif" style="font-size:15px">' + c.quiz[0] + '</b>' +
      '<div style="display:flex;gap:8px;margin-top:8px"><button class="opt" data-ans="1" style="flex:1;height:38px;margin:0;font-size:13px">' + c.quiz[1] + '</button><button class="opt" data-ans="0" style="flex:1;height:38px;margin:0;font-size:13px">' + c.quiz[2] + '</button></div></div>' +
      '<p class="muted" style="text-align:center;margin-top:8px">示意内容 · 以县文化馆审定稿为准</p>' +
      '</div>' +
      '<div class="with"><span class="muted">和谁一起</span><div class="chips">' + c.with.map(function (w) { return '<span>' + w + '</span>'; }).join('') + '</div></div>';
    return html;
  }
  S.detail = function (el) { return phone('', detailInner(el.dataset.site, el.dataset.ethnic)); };

  S.pomegranate = function () {
    return phone('pg-phone', status() + nav('同心石榴', true) +
      '<div class="ph-body">' +
      '<div class="pg-hero"><div class="k">交往交流交融 · 研学</div><h4>同地共生，像石榴籽一样</h4><p>五个世居民族，住在同一个县</p><img src="' + A + 'pomegranate/pomegranate-hero@600.webp" alt=""></div>' +
      '<div class="switch2"><span class="on">按石榴籽看</span><span>按一件事看</span></div>' +
      '<div class="pg-wrap"><div class="pg-mount" data-interactive="1" data-lit="yisa,samaba" data-done="yisa-hani"></div></div>' +
      '<div class="pg-chips"><span class="chip" data-stat="lit">已点亮 2 瓣</span><span class="chip gold" data-stat="done">认识 1 颗籽</span></div>' +
      '<p class="muted" style="text-align:center;margin-top:6px">每瓣五颗大籽是世居五族，点一颗看看</p>' +
      '</div>' +
      '<div class="zoom"><div class="dim"></div><svg class="lines"></svg><div class="z-close">' + ui('close') + '</div><div class="z-panel"></div></div>' +
      '<div class="detail"></div>');
  };

  window.HHScreens = { render: S, detailInner: detailInner };

  document.querySelectorAll('.pw[data-screen]').forEach(function (el) {
    var fn = S[el.dataset.screen];
    if (fn) el.innerHTML = fn(el);
  });
})();
