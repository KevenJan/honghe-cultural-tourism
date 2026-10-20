/* 第 1 批：首页、四站、服务地图、研学团队提示 */
(function () {
  var K = window.K, S = K.SITE, img = K.img, i = K.i, n = K.n;
  K.x = K.x || {};

  /* ---------- 首页 ---------- */
  function goods4(n0) {
    var g = [['梯田红米 2kg', '撒玛坝的田里来', '39', 'prod-im', ['耐储', '可寄']], ['竹编果篮', '马帮古城手艺人', '88', 'prod-im b', ['可寄', '可自提']], ['傣族土陶小杯', '马帮古城 · 傣陶', '46', 'prod-im c', ['可寄']], ['八角 500g', '森林公园山货', '32', 'prod-im d', ['耐储', '可自提']]];
    return '<div class="goods"' + (n0 ? n(n0) : '') + '>' + g.map(function (x) {
      return '<div class="good"><div class="im ' + x[3] + '"></div><div class="bd"><b>' + x[0] + '</b><span class="from">' + x[1] + '</span><div style="margin-top:3px;display:flex;gap:4px">' +
        x[4].map(function (t) { return K.chip(t, t === '耐储' ? 'teal' : '', 'height:18px;font-size:10px'); }).join('') + '</div><div class="pr"><em>¥' + x[2] + '</em><span class="btn sm ghost" style="height:24px;font-size:11px">看看</span></div></div></div>';
    }).join('') + '</div>';
  }
  K.x.goods4 = goods4;

  function homeTop(o) {
    return '<div class="ph-top"' + n(1) + '><div class="ph-status"><span>9:41</span><span class="bat"></span></div>' +
      '<div class="ph-nav l"><img src="' + img.logo('wordmark.svg') + '" alt="红河同路" style="height:22px;width:auto">' +
      '<div style="position:absolute;right:104px;display:flex;gap:6px">' +
      (o.login ? '<span class="pill-pts">60 分</span>' : '<span class="pill-pts">登录记分</span>') + '<span class="pill-lang">中 / EN</span></div><span class="capsule"></span></div></div>';
  }
  function home(o) {
    o = o || {};
    var sk = o.skeleton;
    var h = homeTop(o) + (o.offline ? K.offline() : '') +
      '<div class="ph-body has-tab">' +
      (sk ? '<div class="sk" style="height:168px;border-radius:20px;margin-top:12px"></div>' :
        '<div class="hero"' + n(2) + ' style="background-image:url(' + img.site('samaba') + ')"><div class="dots"><i></i><i></i><i></i></div><div class="t"><b>撒玛坝 · 灌水季</b><span>11 月—次年 4 月 · 梯田满水如镜</span></div><span class="btn gold sm">看这一站</span></div>') +
      '<div class="grid8"' + n(3) + '>' + [['01-checkin', '到达打卡'], ['02-four-sites', '四站'], ['03-ethnic-fusion', '同心石榴'], ['04-ask-tuotuo', '问驮驮'], ['05-gift', '领礼'], ['06-local-goods', '一路好物'], ['07-service-map', '服务地图'], ['08-study-tour', '研学团队']].map(function (g) {
        return '<div style="position:relative' + (g[0] === '08-study-tour' ? ';opacity:.6' : '') + '"><img src="' + img.grid(g[0]) + '" alt="">' + g[1] + (g[0] === '08-study-tour' ? '<span style="position:absolute;top:-4px;right:2px;font-size:9px;background:#ECE6DC;color:#6E6A63;border-radius:6px;padding:0 4px">二期</span>' : '') + '</div>';
      }).join('') + '</div>' +
      (sk ? '<div class="sk" style="height:34px;border-radius:17px;margin-top:12px"></div><div class="sk" style="height:22px;width:60%;margin-top:14px"></div><div class="row mt8">' + K.sk('128px', 120) + K.sk('128px', 120) + K.sk('128px', 120) + '</div>' :
        '<div class="notice"' + n(4) + '>' + K.ui('fire-ban', 'width:16px;filter:invert(45%) sepia(80%) saturate(1500%) hue-rotate(345deg)') + '<span class="grow">【置顶】森林防火期，进森林公园请勿带火种</span>' + (o.offline ? K.chip('离线', 'grey', 'height:18px;font-size:10px') : i('right', 14)) + '</div>' +
        '<div class="row sb mt12"' + n(5) + ' style="font-size:12.5px"><b style="font-size:13px">今日开放</b>' +
        [['迤萨路口', '#2F7A78'], ['森林公园', '#D9A441'], ['马帮古城', '#2F7A78'], ['撒玛坝', '#2F7A78']].map(function (s) { return '<span class="row" style="gap:4px"><i style="width:7px;height:7px;border-radius:50%;background:' + s[1] + '"></i>' + s[0] + '</span>'; }).join('') + '</div>' +
        '<div class="p-h">四站长廊<small>可顺可逆，从哪站开始都行</small></div>' +
        '<div class="hscroll"' + n(6) + ' style="margin-right:-16px"><div class="trail-line"></div>' +
        [['yisa', '路'], ['forest', '水'], ['oldtown', '街'], ['samaba', '田']].map(function (c) {
          return '<div class="mini-site"><div style="background-image:url(' + img.site(c[0], 375) + ')"></div><b>' + S[c[0]].short + '</b><span>主题字 · ' + c[1] + '</span></div>';
        }).join('') + '</div>' +
        '<div class="p-h">这季在红河</div>' +
        '<div class="row"' + n(7) + ' style="gap:10px">' +
        [['heritage-03-kaiyangmen', '开秧门', '春天 · 撒玛坝'], ['heritage-04-long-table-feast', '长街宴', '节庆 · 撒玛坝']].map(function (c) {
          return '<div class="grow" style="height:96px;border-radius:14px;background:url(' + img.heritage(c[0].replace('heritage-', ''), 345) + ') center/cover;position:relative;overflow:hidden;color:#fff"><div style="position:absolute;inset:0;background:linear-gradient(180deg,transparent 30%,rgba(16,40,38,.75))"></div><div style="position:absolute;left:10px;bottom:8px"><b class="serif" style="font-size:15px">' + c[1] + '</b><div style="font-size:11px;opacity:.85">' + c[2] + '</div></div></div>';
        }).join('') + '</div>' +
        '<div class="p-h">为您推荐<small>好物</small></div>' + goods4(8) +
        '<p class="t-cap t-c mt12">商品图为示意，上线时使用合作社实拍</p>') +
      '</div>' + K.tab('home', 9);
    return h;
  }
  K.x.home = home;

  var homeNotes = [
    [1, '顶栏：左文字标（高 22）；右侧胶囊高 26、圆角 13、竹金底。未登录「登录记分」，已登录「{年度同路分} 分」→ P23；「中 / EN」切换语言（F1-4）。胶囊避开微信菜单按钮（右侧留 104）'],
    [2, '首页大图：高 168、圆角 20，最多 3 张轮播（B2 配置，按上下线时间切换）。底部渐变压字：标题宋体 20 白、说明 12；右下竹金小按钮跳配置页'],
    [3, '八格入口：本地固定，首屏立即显示。图标 50×50（素材 grid@192.webp）、字 12。「到达打卡」见 P01-2；「研学团队」点了 Toast「研学团队二期开放」（P34）'],
    [4, '公告条：只显示 1 条，高 34、圆角 17、安全橙 10% 底。置顶公告没有关闭；普通公告点开后「知道了」24 小时内不再显示。没有公告整行不显示'],
    [5, '今日开放：状态点 绿 开放 / 黄 部分开放 / 灰 暂停；全部开放时收起为一行「四站今日都开放」。点站名进 P03'],
    [6, '四站长廊：横滑小卡 128×(78+文字)，马帮虚线（竹金 2px 虚线）穿过四张卡；下面灰字「可顺可逆，从哪站开始都行」'],
    [7, '这季在红河：2–4 张季节卡（与大图同源），没有配置就整块不显示'],
    [8, '为您推荐：4 件双列，按 B6「首页推荐」排序；只有「看看」，首页不放「立即购买」'],
    [9, '底部标签栏：自定义 tabBar，高 84（含安全区 26），中间问驮驮头像凸起 58×58'],
    '首页不主动取位置、不放广告和外部链接；下拉刷新公告、开放状态、大图'
  ];

  K.add({ id: 'P01-1', page: 'P01', state: '默认 · 未登录', h: 1460, html: function () { return home({}); }, notes: homeNotes,
    desc: '游客打开小程序的第一屏。首屏要回答三件事：这是什么（文字标 + 大图）、我能做什么（八格）、今天能不能去（公告 + 今日开放）。' });
  K.add({ id: 'P01-2', page: 'P01', state: '已登录 · 点「到达打卡」选站', html: function () {
    return home({ login: 1 }) + K.sheet('你现在在哪一站？', '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:16px"' + n(1) + '>' +
      K.ORDER.map(function (k) { return '<div style="height:64px;border-radius:14px;background:url(' + img.site(k, 375) + ') center/cover;position:relative;overflow:hidden"><div style="position:absolute;inset:0;background:rgba(16,40,38,.55)"></div><b class="serif" style="position:absolute;left:12px;bottom:10px;color:#fff;font-size:16px">' + S[k].short + '</b></div>'; }).join('') +
      '</div><p class="t-c mt16"' + n(2) + '><span class="link">不确定？用服务地图看看</span></p>', { desc: '选好后进入这一站的到达打卡' });
  }, notes: [
    [1, '四个站名按钮：2×2，高 64、圆角 14，站点插画 + 55% 深田青遮罩 + 宋体 16 白字。点了进 P04（带 site）'],
    [2, '文字按钮 → P08 服务地图（不带 site，显示全县）'],
    '如果「今天正在进行的站」存在（今天打过卡或扫过立牌码），点「到达打卡」不弹这个层，直接进那一站 P04',
    '这一步不取位置；底部弹层通用规范见组件规范「底部弹层」',
    '右上角已登录显示「60 分」（两站答满的示例）'
  ] });
  K.add({ id: 'P01-3', page: 'P01', state: '公告详情（置顶）', html: function () {
    return home({}) + K.sheet('森林防火期公告', '<div class="mt12" style="font-size:14px;color:#4A4640;line-height:1.75"' + n(1) + '><p>每年 12 月至次年 6 月为森林防火期。进入马帮侨乡森林公园请勿携带火种，不野炊、不吸烟、不燃放烟花爆竹。</p><p class="mt8">发现火情请拨打森林火警 <b class="t-red">12119</b>。</p><p class="t-cap mt12">县林草局 · 2026-10-01 发布</p></div>' +
      K.btn('拨打 12119', 'ghost block mt16', 2), {});
  }, notes: [[1, '半屏层正文 14、行高 1.75；底部写发布单位与日期'], [2, '置顶公告没有「知道了」，只能下拉关闭；普通公告这里是「知道了」主按钮'], '公告内容来自 B4，最多 300 字，可带一个电话或跳转'] });
  K.add({ id: 'P01-4', page: 'P01', state: '首次加载 · 骨架屏', html: function () { return home({ skeleton: 1 }); }, notes: ['八格入口是本地固定内容，立即显示；大图、公告、长廊用骨架块占位（米灰渐变，圆角与真实组件一致）', '不用全屏转圈；超过 8 秒没回来显示通用「没加载出来 · 再试一次」（G-07）'] });
  K.add({ id: 'P01-5', page: 'P01', state: '没网 · 用缓存', h: 1460, html: function () { return home({ offline: 1, login: 1 }); }, notes: ['顶部离线条（G-04）；大图、推荐用上次缓存', '公告条显示缓存内容并标灰色「离线」小标签', '网络恢复后离线条消失；有待同步记录时 Toast「已恢复网络，记录已同步」'] });
  K.add({ id: 'P01-6', page: 'P01', state: '大字模式', html: function () {
    var big = function (g, t, sub) { return '<div class="p-card row" style="height:84px;gap:14px;margin-top:12px"><img src="' + img.grid(g) + '" style="width:56px" alt=""><div><b class="serif" style="font-size:20px">' + t + '</b><div class="t-sub" style="font-size:14px">' + sub + '</div></div>' + i('right', 22, '#6E6A63', 'margin-left:auto') + '</div>'; };
    return homeTop({}) + '<div class="ph-body has-tab big-mode">' +
      '<div class="notice" style="height:44px;font-size:15px;border-radius:22px">' + K.ui('fire-ban', 'width:20px;filter:invert(45%) sepia(80%) saturate(1500%) hue-rotate(345deg)') + '森林防火期 · 请勿携带火种</div>' +
      '<div class="btn primary block mt16" style="height:72px;border-radius:36px;font-size:24px;font-family:var(--serif)"' + n(1) + '>到达打卡</div>' +
      '<div' + n(2) + '>' + big('02-four-sites', '四站', '看看每一站讲什么') + big('05-gift', '领礼', '走过就能领一份') + big('07-service-map', '服务电话', '求助、救援、投诉') + '</div>' +
      '</div>' + K.tab('home');
  }, notes: [[1, '大字模式只保留：到达打卡（大按钮，高 72）、四站、领礼、服务电话、公告条'], [2, '入口卡高 84，标题宋体 20、说明 14；正文字号整体 +2，按钮高 56'], '在 P33 设置里打开；系统字体放大 1.3 倍时也不能溢出'] });

  /* ---------- P34 研学团队（二期） ---------- */
  K.add({ id: 'P34-1', page: 'P34', state: '首页点格子 · 即将开放', html: function () { return home({ login: 1 }) + K.toast('研学团队二期开放', 'clock'); },
    notes: ['一期不做研学团队页面，只在首页格子上加灰色「二期」角标，点了 Toast 2 秒', '二期开放后格子去掉角标，跳研学团队预约页（另出设计）'] });

  /* ---------- P02 四站 ---------- */
  function sites(o) {
    o = o || {};
    var tags = o.login ? { yisa: K.chip('还差 1 题', 'gold'), samaba: K.chip('已记下 · 30 分', 'teal'), forest: K.chip('今日暂停', 'grey') } : { forest: K.chip('今日暂停', 'grey') };
    return K.top('四站', { noBack: 1, left: '服务地图' }) + '<div class="ph-body has-tab">' + K.ORDER.map(function (k, idx) {
      return '<div class="site-big"' + (idx === 0 ? n(1) : '') + ' style="height:142px;background-image:url(' + img.site(k) + ')' + (k === 'forest' ? ';filter:saturate(.55)' : '') + '"><span class="chip">' + S[k].theme + '</span>' +
        (tags[k] ? '<span style="position:absolute;right:14px;top:14px"' + (idx === 0 ? n(2) : '') + '>' + tags[k] + '</span>' : '') +
        '<div class="t"><b>' + S[k].name + '</b><span>' + S[k].line + '</span><em>停车：' + S[k].park + '</em></div><span class="btn primary sm"' + (idx === 0 ? n(3) : '') + '>看这一站</span></div>';
    }).join('') + '</div>' + K.tab('sites');
  }
  K.add({ id: 'P02-1', page: 'P02', state: '已登录 · 带本人状态', html: function () { return sites({ login: 1 }); }, notes: [
    [1, '站卡：高 142、圆角 20，插画背景 + 左深右浅渐变；左上角主题角标（米白底红字）；站名宋体 22、主题句 12.5、停车点 11'],
    [2, '本人状态标签（登录后）：今年没去过不显示；「还差 {n} 题」竹金；「已记下 · {分} 分」水田青；「今日暂停」灰色，覆盖其他标签，插画降饱和'],
    [3, '「看这一站」与点整张卡相同 → P03'],
    '顶栏左侧文字按钮「服务地图」→ P08（全县）',
    '四张卡没有编号、没有锁、没有「下一站」箭头——不规定顺序'
  ] });
  K.add({ id: 'P02-2', page: 'P02', state: '未登录', html: function () { return sites({}); }, notes: ['未登录时不显示本人状态标签，只显示站点暂停', '不在这里弹登录'] });

  /* ---------- P08 服务地图 ---------- */
  function map(o) {
    o = o || {};
    function pin(x, y, t, c, on) { return '<div style="position:absolute;left:' + x + 'px;top:' + y + 'px;width:' + (on ? 38 : 30) + 'px;height:' + (on ? 38 : 30) + 'px;margin:-' + (on ? 19 : 15) + 'px 0 0 -' + (on ? 19 : 15) + 'px;border-radius:50%;background:' + c + ';color:#fff;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 6px rgba(0,0,0,.25);border:2px solid #fff;z-index:2">' + t + '</div>'; }
    var cats = ['全部', '停车场', '厕所', '服务柜台', '医疗点', '充电桩'];
    return K.top('服务地图', { sticky: 1 }) +
      '<div class="cats" style="padding:0 16px;margin:0 0 0"' + n(1) + '>' + cats.map(function (c) { return '<span class="' + (c === (o.cat || '全部') ? 'on' : '') + '">' + c + '</span>'; }).join('') + '</div>' +
      '<div style="position:absolute;left:0;right:0;top:130px;bottom:0;background:#EFE7D6;overflow:hidden"' + n(2) + '>' +
      '<svg viewBox="0 0 375 680" style="position:absolute;inset:0;width:100%;height:100%"><g fill="none" stroke="#D9CBB0" stroke-width="1.2">' + [0, 1, 2, 3, 4, 5, 6, 7].map(function (k) { return '<path d="M-20 ' + (90 + k * 64) + ' C 90 ' + (40 + k * 64) + ', 200 ' + (150 + k * 64) + ', 400 ' + (80 + k * 64) + '"/>'; }).join('') + '</g>' +
      '<path d="M-10 520 C 80 470, 140 560, 230 500 S 360 420, 390 450" fill="none" stroke="#9CC3C0" stroke-width="10" stroke-linecap="round" opacity=".8"/><text x="250" y="470" font-size="11" fill="#5E8D8A">红河</text>' +
      '<text x="70" y="110" font-size="12" fill="#6E6A63" font-weight="700">迤萨镇</text><text x="226" y="290" font-size="12" fill="#6E6A63" font-weight="700">宝华镇 · 撒玛坝</text></svg>' +
      (o.cat === '厕所' ? pin(70, 196, 'WC', '#6E6A63') + pin(262, 352, 'WC', '#6E6A63', 1) :
        pin(92, 140, 'P', '#2F7A78') + pin(130, 168, '柜', '#A8452F') + pin(70, 196, 'WC', '#6E6A63') + pin(250, 330, 'P', '#2F7A78', 1) + pin(286, 352, '柜', '#A8452F') + pin(222, 368, '+', '#D9622B') + pin(180, 230, '电', '#D9A441')) +
      '<div class="p-card" style="position:absolute;left:12px;right:12px;bottom:28px;padding:14px 16px"' + n(3) + '>' +
      (o.cat === '厕所' ? '<div class="row sb"><b class="serif" style="font-size:16px">撒玛坝观景台公厕</b><span class="t-cap">距你约 0.2 公里</span></div><p class="t-cap mt4">全天开放 · 有无障碍间</p>' :
        '<b class="serif" style="font-size:16px">撒玛坝观景台停车场</b><p class="t-cap mt4">停车场 · 全天开放 · 小车约 120 个车位（以景区公布为准）</p>') +
      '<div class="row mt8" style="gap:6px">' + K.chip(o.cat === '厕所' ? '厕所' : '停车场', 'teal') + K.chip('服务柜台 50 米') + '</div>' +
      K.btn('用微信地图打开', 'primary block mt12', 4) + '<p class="t-cap t-c mt8">只标服务点，不画路线</p></div></div>';
  }
  K.add({ id: 'P08-1', page: 'P08', state: '全部服务点', html: function () { return map({}); }, notes: [
    [1, '分类胶囊：全部 / 停车场 / 厕所 / 服务柜台 / 医疗点 / 充电桩；高 30、选中红土底白字'],
    [2, '地图：小程序 map 组件，只显示服务点标记（圆 30，选中 38），不画路线、不标拍照点和观景点。没有坐标的点不显示'],
    [3, '底部卡片：名称（宋体 16）、类型、开放时间；距离只在本次打卡取过位置时显示'],
    [4, '「用微信地图打开」→ wx.openLocation，由微信地图负责导航'],
    '从站点页进来带 site：地图缩放到这一站的服务点范围'
  ] });
  K.add({ id: 'P08-2', page: 'P08', state: '筛选厕所 · 显示距离', html: function () { return map({ cat: '厕所' }); }, notes: ['只显示所选类别；底部卡片跟着切到最近的一个', '「距你约 0.2 公里」只在本次打卡取过位置后显示（坐标不上传、不保存）'] });
})();
