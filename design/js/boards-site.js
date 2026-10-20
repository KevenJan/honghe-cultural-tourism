/* 第 1 批：站点页、到达打卡、打卡成功、答一答、记下这一站（P03–P07） */
(function () {
  var K = window.K, S = K.SITE, img = K.img, i = K.i, n = K.n;
  var REV = '内容经县文化馆、民宗局审定 · 2026-09';
  var FIRE = K.ui('fire-ban', 'width:16px;filter:invert(45%) sepia(80%) saturate(1500%) hue-rotate(345deg)');

  function N(v) { return v ? n(v) : ''; }
function playI() { return '<svg width="16" height="16" viewBox="0 0 24 24" fill="#fff" style="margin-left:2px"><path d="M8 5.5v13l11-6.5z"/></svg>'; }
function pauseI() { return '<svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><rect x="6.5" y="5" width="3.4" height="14" rx="1"/><rect x="14.1" y="5" width="3.4" height="14" rx="1"/></svg>'; }
  function dlg(title, btns, num) {
    return K.mask() + '<div class="dialog st-dlg"' + N(num) + '><div class="dl-t">' + title + '</div><div class="dl-btns">' +
      btns.map(function (b) { return K.btn(b[0], b[1] || 'primary'); }).join('') + '</div></div>';
  }
  function wave(p) {
    var hs = [6, 10, 14, 8, 16, 12, 18, 9, 15, 11, 17, 8, 13, 16, 7, 12, 18, 10, 14, 6, 11, 15, 9, 13, 17, 8, 12];
    var on = Math.round(hs.length * p);
    return '<svg class="st-wave" viewBox="0 0 ' + (hs.length * 4) + ' 24" preserveAspectRatio="none">' + hs.map(function (h, idx) {
      return '<rect x="' + (idx * 4) + '" y="' + (24 - h) + '" width="2" height="' + h + '" rx="1" fill="' + (idx < on ? '#2F7A78' : '#D5CBB8') + '"/>';
    }).join('') + '</svg>';
  }
  function theme(num) {
    return '<div class="theme-card"' + N(num) + '><div class="k">' + S.samaba.name + ' · ' + S.samaba.town + '</div><h4>同一片梯田，<br>同一张长桌</h4>' +
      '<img class="badge" src="' + img.badge('samaba') + '" alt=""><img class="stripes" src="' + img.motif('contour-stripes') + '" alt=""></div>';
  }
  function info(num) {
    return '<div class="info-line"' + N(num) + '>' + K.ui('headset', 'width:14px') + '约 3 分钟 · 完成可得 30 同路分 · 内容已审定</div>';
  }
  function tabs(on, num) {
    return '<div class="seg"' + N(num) + '>' + ['导览', '听一听', '答一答', '来源'].map(function (t) {
      return '<span class="' + (t === on ? 'on' : '') + '">' + t + '</span>';
    }).join('') + '</div>';
  }
  function dl(num) {
    return '<div class="st-dl"' + N(num) + '><p>进山信号可能不好，先下载这一站的离线包？</p><div class="ops">' +
      K.btn('下载', 'primary sm') + K.btn('不用', 'ghost sm') + '</div></div>';
  }
  function hc(o) {
    return '<article class="st-hc"' + N(o.n) + '><div class="im" style="background-image:url(' + o.img + ')"><span class="more">' + i('more', 16, '#22201C') + '</span></div><div class="bd"><h5>' + o.t + '</h5>' +
      '<p class="tx">' + o.p + '</p>' + (o.extra || '') +
      (o.tag ? '<div class="tags">' + K.chip(o.tag, o.tag === '国家级非遗' ? 'gold' : '') + '</div>' : '') +
      '<div class="rev">' + REV + '</div></div></article>';
  }
  function guides() {
    var split = '<div class="st-split"><div><div class="im" style="background-image:url(' + img.heritage('02-lezuo-dance', 345) + ')"></div><b>乐作舞</b><p>国家级非遗。在哈尼族、彝族群众中世代相传。被邀请时再一起跳。</p></div>' +
      '<div><div class="im" style="background-image:url(' + img.heritage('01-hani-polyphony', 345) + ')"></div><b>哈尼多声部</b><p>国家级非遗。一人领唱，众人应和。和乐作是两件事。</p></div></div>' +
      '<p class="st-end">这片梯田，是住在这里的人世世代代一起种出来的。</p>';
    return hc({ n: 4, img: img.site('samaba'), t: '灌水季，水从林子来', tag: '节令活动', p: '撒玛坝有 1.6 万余亩、4300 多级梯田。每年 11 月到次年 4 月灌水，水从山上的林子来，顺着水沟一层层流进田里。' }) +
      hc({ img: img.heritage('03-kaiyangmen', 690), t: '开秧门，大家一起下田', tag: '节令活动', p: '春天插下第一把秧，叫开秧门。各寨约在同一天一起下田，先祭祀，再动手。' }) +
      hc({ img: img.heritage('04-long-table-feast', 690), t: '长街宴，连成一张长桌', tag: '生活习俗', p: '各家端出一桌菜，连成一条街。可以饮酒，也可以以茶代酒。拍照前先问主人。' }) +
      hc({ img: img.heritage('02-lezuo-dance', 690), t: '乐作是跳的，多声部是唱的', tag: '国家级非遗', p: '这两样都是国家级非遗，要分开看，不要并成一件事。', extra: split });
  }
  function goods(num) {
    var list = [
      ['梯田红米 2kg', '撒玛坝红米合作社', '39', 'prod-im', '耐储'],
      ['梯田鸭蛋 30 枚', '撒玛坝红米合作社', '45', '', '生鲜'],
      ['梯田紫米 1kg', '撒玛坝红米合作社', '26', '', '耐储']
    ];
    var egg = 'radial-gradient(circle at 38% 52%, #F6EEDF 0 13%, #DCCBAE 14% 15%, transparent 16%), radial-gradient(circle at 62% 56%, #F6EEDF 0 13%, #DCCBAE 14% 15%, #B99A6A 16% 33%, #EADFCB 34%)';
    var zimi = 'radial-gradient(circle at 50% 60%, #4B2A3A 0 28%, #B79A7A 29% 34%, #E7D7BC 35%)';
    return '<div class="p-h">这一站的物产</div><div class="st-hgoods"' + N(num) + '>' + list.map(function (g, idx) {
      var bg = idx === 1 ? egg : idx === 2 ? zimi : '';
      return '<div class="st-gcard"><div class="im ' + g[3] + '"' + (bg ? ' style="background:' + bg + '"' : '') + '></div><div class="bd"><b>' + g[0] + '</b><span class="from">' + g[1] + '</span>' +
        '<div class="tags">' + K.chip(g[4], g[4] === '耐储' ? 'teal' : 'gold', 'height:18px;font-size:10px') + K.chip('可寄', '', 'height:18px;font-size:10px') + '</div><em class="pr">¥' + g[2] + '</em></div></div>';
    }).join('') + '</div>';
  }
  function pgLine(num) {
    return '<div class="p-h">这一站的石榴</div><div class="p-card st-pgline"' + N(num) + '>' + K.pg({ lit: '', mini: 1, style: 'width:96px;flex:none' }) +
      '<div class="grow"><b>2 颗籽可以认识</b><span class="t-sub">点开看撒玛坝这一瓣</span></div>' + i('right', 16, '#6E6A63') + '</div>';
  }
  function eti(num) {
    return '<div class="p-h">现场礼仪</div><div class="p-card st-eti"' + N(num) + '><div class="row sb"><b>宴席 · 乐作</b><span class="link">去看</span></div>' +
      '<p>可以饮酒，也可以以茶代酒。跳乐作要等人邀请。</p></div>';
  }
  function tail(pgN) {
    return goods(5) + pgLine(pgN || 0) + eti(0);
  }
  function site(o) {
    return K.top('撒玛坝梯田') + K.body((o.dl || '') + theme(o.themeN) + info(o.infoN) + (o.pause || '') + tabs(o.tab || '导览', o.tabN) + o.main + (o.tail || ''), 'has-bar') +
      K.bar(K.btn(o.bar, (o.dis ? 'primary dis' : 'primary'), o.barN));
  }

  /* ---------- P03 ---------- */
  K.add({
    id: 'P03-1', page: 'P03', state: '未打卡 · 导览（首次进山提示）', h: 2800,
    html: function () {
      return site({ dl: dl(1), themeN: 2, infoN: 3, tabN: 0, main: guides(), tail: tail(6), bar: '到达打卡', barN: 7 });
    },
    notes: [
      [1, '进山提示：第一次打开本站且还没下离线包时，顶在主题卡上方，高约 72、左右贴边、米底。文案 13.5。「下载」红土小按钮高 32 → 下这一站离线包（约 18 MB，可离开页面）；「不用」白底描边，本站不再提示。迤萨路口站常驻，直到下过其他站'],
      [2, '主题大卡：深田青底、高 164、圆角 22、内边距 18。小字 12 竹金「撒玛坝梯田 · 宝华镇」；主题句宋体 22 白，两行排「同一片梯田 / 同一张长桌」（句内不改字）。右上主题字牌宽 66（badge-site-samaba）。右下等高线纹宽 190'],
      [3, '信息行：12 石灰，耳机图标 14。「约 3 分钟 · 完成可得 30 同路分 · 内容已审定」。页签在其下：高 32 的四段胶囊（导览 / 听一听 / 答一答 / 来源），选中白底墨字。上滑后页签吸在顶栏下'],
      [4, '导览卡（本站 4 张，上下排）：图 16:9 圆角随卡（卡宽 343、圆角 16）；标题宋体 17，不超过 16 字；正文 13.5、行高 1.65、不超过 120 字；标签高 24（节令活动 / 生活习俗用浅底红字，国家级非遗用竹金）。右上「…」28 圆，见 P03-9。底部分割线上审定行 11 石灰，四张都是「内容经县文化馆、民宗局审定 · 2026-09」。第四张左右分栏，把乐作和多声部分成两件事；末句用正文，不做大字口号。点图全屏看，可双指缩放，没有「保存图片」'],
      [5, '这一站的物产：横滑卡宽 148、图高 84、圆角 14。名称宋体 14，来源 11 红土，价格 15 粗红土，标签高 18。第三张只露出约 40，提示还能滑。整张卡 → P14，from_site=samaba。不出现销量、划线价'],
      [6, '这一站的石榴：小图宽 96（未打卡，四瓣都是米色）+ 宋体 16「2 颗籽可以认识」。整行 → P09 并放大撒玛坝这一瓣'],
      [7, '底部固定条：白底、上边线，按钮高 46 红土「到达打卡」→ P04（带 site=samaba）。条高含安全区，按钮距底 30。1px=2rpx'],
      '现场礼仪在石榴下面：标题「宴席 · 乐作」，正文「可以饮酒，也可以以茶代酒。跳乐作要等人邀请。」「去看」→ P29（撒玛坝带宴席、乐作）。森林公园站换成寨神林、防火；古城站换成文物',
      '加载中：主题卡和 3 张图文用骨架，不另出画板。出错用通用「没加载出来 · 再试一次」。整站下线换成「这部分内容正在更新」+ 返回。未登录可以看、可以听，不在这里弹登录',
      '示意正文以审定稿为准；数字（1.6 万余亩、4300 多级）来自县情，后台改一处全部同步'
    ],
    desc: '未打卡的撒玛坝站。先把这一站讲清楚，底部才是到达打卡。第一次进来，顶部问一次要不要下离线包。'
  });

  K.add({
    id: 'P03-2', page: 'P03', state: '已打卡未完成 · 还差 2 题',
    html: function () {
      return site({
        themeN: 1, tab: '答一答', tabN: 2,
        main: '<div class="p-card st-entry"' + n(3) + '><span class="t-cap">答一答 · 6 小时内</span><b>3 道题</b><p>已答 1 题，还差 2 题。</p><p class="t-cap" style="margin-top:6px">没有倒计时。答对 10 分，记住讲解再得 3 分。</p></div>',
        bar: '继续答题 · 还差 2 题', barN: 4
      });
    },
    notes: [
      [1, '主题卡、信息行同 P03-1。已打卡后右上字牌仍在；不在主题卡上再盖「已到达」章'],
      [2, '页签停在「答一答」。导览、听一听、来源仍可切；物产、石榴、礼仪在页签内容下面，同 P03-1，这里不重复画'],
      [3, '入口卡：白底圆角 16、内边距 14。宋体 18「3 道题」；说明 13.5「已答 1 题，还差 2 题。」小字 12 石灰写计分，没有倒计时。点卡片或底部按钮都进 P06，从第一道没答完的题继续'],
      [4, '底部按钮红土高 46，文案「继续答题 · 还差 2 题」→ P06。{n} 用还没结算的题数（答错但还没点「我记住了」也算没完成）'],
      '时间窗从本次打卡成功起 6 小时。窗内离开再回来，底部按钮不变',
      '加载、出错、下线同 P03-1，不另出画板'
    ],
    desc: '人已经在现场打过卡，题还没答完。底部改成继续答题，并写清还差几题。'
  });

  K.add({
    id: 'P03-3', page: 'P03', state: '时间窗已过',
    html: function () {
      return site({
        themeN: 1, tab: '答一答', tabN: 2,
        main: '<div class="p-card st-lock"' + n(3) + '>' + i('clock', 28, '#2F7A78') + '<b style="margin-top:10px">答题时间已过，<br>回到现场再打一次卡就能继续</b><p>已经答过的题还在，不会重答。</p></div>',
        bar: '再次打卡后继续答题', barN: 4
      });
    },
    notes: [
      [1, '主题卡同 P03-1'],
      [2, '页签「答一答」。导览和听一听不受时间窗影响，仍可看、可听'],
      [3, '提示卡居中：时钟图标 28 水田青；句子宋体 16、行高 1.45，逐字为「答题时间已过，回到现场再打一次卡就能继续」。下面 12.5 石灰「已经答过的题还在，不会重答。」不用红色，不出现「失败」'],
      [4, '底部按钮「再次打卡后继续答题」→ P04。再次打卡成功后再进 P05「欢迎回来」，时间窗重新算 6 小时'],
      '若人还在答题页里提交，弹层见 P06-5，文案与这里同一句'
    ],
    desc: '过了 6 小时还没答完。题先留着，请人回现场再打一次卡。'
  });

  K.add({
    id: 'P03-4', page: 'P03', state: '已完成 · 本人结果', h: 860,
    html: function () {
      var rows = [
        ['第 1 题 · 水从哪里来', '答对', 'teal', 1],
        ['第 2 题 · 长街宴', '已记住', 'gold', 0],
        ['第 3 题 · 乐作和多声部', '答对', 'teal', 0]
      ];
      return site({
        themeN: 1, tab: '答一答', tabN: 2,
        main: '<div class="p-card st-qa"' + n(3) + '>' + rows.map(function (r) {
          return '<div class="it"><div class="hd"><b>' + r[0] + '</b>' + K.chip(r[1], r[2]) + '</div>' +
            (r[3] ? '<div class="st-okbox" style="margin-top:8px"><b>答对了</b><p>水从山上的林子里来，顺着水沟一层层流进梯田。</p><div class="src">来源：内容卡「灌水季，水从林子来」· 县文化馆审定</div></div><div class="back">收起讲解</div>' : '<div class="back">回看讲解</div>');
        }).join('') + '</div><p class="st-sum"' + n(4) + '>本站得分 30 · 今年这三题不能重答</p>',
        bar: '看这站好物', barN: 5
      });
    },
    notes: [
      [1, '主题卡同 P03-1'],
      [2, '页签「答一答」显示本人结果，不再出现可点的选项'],
      [3, '每题一行：题号 + 题干缩写 14.5，右侧标签高 24。答对用水田青，答错后已点「我记住了」用竹金「已记住」。点「回看讲解」在行下展开讲解卡（水田青绿框，同 P06-2），可收起。讲解只读'],
      [4, '底部一行 13 石灰：「本站得分 30 · 今年这三题不能重答」。没有「再答一次」'],
      [5, '底部按钮「看这站好物」→ P13 按站看 · 撒玛坝（或本页物产区）。物产、石榴、礼仪仍在页签下，同 P03-1'],
      '单题分数按规则是答对 10、记住 3。三题全对是 30，这里用 30'
    ],
    desc: '今年这一站已经答完。可以回看自己的对错和讲解，不能重答。'
  });

  K.add({
    id: 'P03-5', page: 'P03', state: '听一听 · 文字稿展开', h: 850,
    html: function () {
      return site({
        themeN: 1, tab: '听一听', tabN: 2,
        main: '<div class="st-au"' + n(3) + '><span class="play">' + pauseI() + '</span><div class="mid"><b>乐作舞</b><span>正在播放</span>' + wave(0.35) + '</div><em' + n(4) + '>0:42 / 1:20</em></div>' +
          '<div class="st-script"' + n(5) + '><div class="lab">看文字稿 ' + i('up', 14, '#2F7A78') + '</div><div class="st-lines"><p>乐作是跳的，不是唱的。</p><p class="on">有人邀请，再一起跳。</p><p>不请自跳，反而不礼貌。</p></div><div class="st-by"' + n(6) + '>讲述：县文化馆</div></div>' +
          '<div class="st-au"><span class="play">' + playI() + '</span><div class="mid"><b>哈尼多声部</b><span>未播放</span>' + wave(0) + '</div><em>1:05</em></div>' +
          '<div class="st-plain">看文字稿 ' + i('down', 14, '#2F7A78') + '</div>',
        bar: '到达打卡', barN: 7
      });
    },
    notes: [
      [1, '主题卡同 P03-1。听一听不要求先打卡'],
      [2, '页签「听一听」'],
      [3, '音频条：白卡圆角 16、内边距 12。播放钮 40 圆、水田青底、图标 16 白色；播放中换成暂停。标题 14.5，状态 11 石灰。波形高 22：已播部分 #2F7A78，未播 #D5CBB8。同一时间只播一段'],
      [4, '时长 12 石灰，右对齐宽 64。播放中写「0:42 / 1:20」，未播放只写总长「1:05」'],
      [5, '「看文字稿」12.5 水田青，展开后面板白底圆角 14。句子 14；当前句底 rgba(47,122,120,.12)、字重 700、墨色，其余石灰。收起后只留一行「看文字稿」和向下箭头（下一条即此状态）'],
      [6, '讲述人 12 石灰：「讲述：县文化馆」。经本人同意才换成姓名，用「张**」这种脱敏写法'],
      [7, '底部按钮仍随打卡状态变化。本画板按未打卡画「到达打卡」；已打卡时换成 P03-2 / P03-3 / P03-4 的按钮'],
      '离开站点页继续后台播放，锁屏显示站名；进入 P06 时暂停。播到 90% 记「听完」',
      '没网且没下离线包：播放钮改为 #E3DBCD，钮下小字「下载离线包后，没网也能听」，旁加「去下载」。已下线的音频从列表消失，不留空位'
    ],
    desc: '听一听是两条音频。正在播的那条展开文字稿，播到哪句就亮哪句。'
  });

  K.add({
    id: 'P03-6', page: 'P03', state: '来源', h: 870,
    html: function () {
      return site({
        themeN: 1, tab: '来源', tabN: 2,
        main: '<div class="st-box"' + n(3) + '><div class="st-kv"><span>审定单位</span>县文化馆、县民宗局</div><div class="st-kv"><span>审定日期</span>2026-09</div></div>' +
          '<div class="p-h">引用资料</div><div class="st-box st-refs"' + n(4) + '><div><b>县文化馆非遗档案</b><em>乐作舞 · 哈尼族多声部民歌</em></div><div><b>红河哈尼梯田</b><em>世界文化遗产申报文本（节选）</em></div><div><b>县文旅局</b><em>撒玛坝灌水季说明 · 2026</em></div></div>' +
          '<div class="p-card st-err"' + n(5) + '>' + i('flag', 20, '#A8452F') + '<div class="grow"><b>我发现内容有误</b><span class="t-cap">写下来，交给审定这页的单位</span></div>' + i('right', 16, '#6E6A63') + '</div>',
        bar: '到达打卡', barN: 6
      });
    },
    notes: [
      [1, '主题卡同 P03-1'],
      [2, '页签「来源」。汇总本站全部内容，不单指当前一张卡'],
      [3, '审定块：左列宽 72、13 号在 14 号字上用石灰，右列 14 墨。「审定单位」「审定日期」两行，行高约 44，分割线 #F0E9DD'],
      [4, '引用资料：标题宋体 18；每条名称 14、说明 12 石灰，行间分割线。没有箭头，这里不跳转'],
      [5, '纠错入口：白卡高约 64，旗标图标 20 红土，标题 15「我发现内容有误」→ P30，type=content_error，自动带页面、当前页签、内容版本号（版本号不展示给游客）'],
      [6, '底部按钮随打卡状态，同 P03-5 的说明'],
      '每张导览卡右上角「…」是同一条纠错，见 P03-9'
    ],
    desc: '来源页把审定单位、日期和引用资料放在一起，并给出纠错入口。'
  });

  K.add({
    id: 'P03-7', page: 'P03', state: '站点暂停', h: 870,
    html: function () {
      return site({
        themeN: 1, infoN: 2,
        pause: '<div class="bar-note grey"' + n(3) + '>' + K.ui('pause', 'width:16px') + '今日暂停开放 · 观景台道路施工</div>',
        tabN: 4,
        main: hc({ img: img.site('samaba'), t: '灌水季，水从林子来', tag: '节令活动', p: '撒玛坝有 1.6 万余亩、4300 多级梯田。每年 11 月到次年 4 月灌水，水从山上的林子来，顺着水沟一层层流进田里。' }),
        bar: '到达打卡', barN: 5, dis: 1
      });
    },
    notes: [
      [1, '主题卡仍用彩色插画，不降饱和（降饱和只用在四站列表的「今日暂停」标签上）'],
      [2, '信息行仍在。暂停不隐藏「内容已审定」'],
      [3, '状态条在信息行和页签之间：灰底 #ECE6DC、圆角 12、内边距 8×12、字 12.5 粗。暂停图标 16 + 原因。原因由后台填写，示例「今日暂停开放 · 观景台道路施工」。部分开放用同一条，文案改成部分开放的原因'],
      [4, '导览仍可看。其余三张卡、听一听、来源、物产、石榴、礼仪同 P03-1'],
      [5, '底部「到达打卡」置灰：底 #E3DBCD、字 #A39C90，不可点。若状态是打开页面之后才变成暂停，再点打卡时 Toast「这一站今天暂停开放」'],
      '答一答：还没打卡的人仍走 P03-8；已经在窗内的人，暂停当天是否还能答，规格没写，见文末待确认'
    ],
    desc: '站点暂停时内容还在，只是不能打卡。原因写在页签上面，底部按钮变灰。'
  });

  K.add({
    id: 'P03-8', page: 'P03', state: '未打卡点「答一答」',
    html: function () {
      return site({
        themeN: 1, tab: '答一答', tabN: 2,
        main: '<div class="p-card st-entry"><span class="t-cap">答一答</span><b>3 道题</b><p>到现场之后才能答。现在可以先看导览、听音频。</p></div>',
        bar: '到达打卡', barN: 3
      }) + dlg('到现场打卡后才能答题', [['知道了', 'primary']], 4);
    },
    notes: [
      [1, '未打卡的站点页，页签被点到「答一答」'],
      [2, '页签本身能切过去，不拦截切换；拦截的是作答'],
      [3, '页签下先放入口说明，底部仍是「到达打卡」。弹层盖住之后这两处仍在'],
      [4, '弹层居中，宽约 319、圆角 20、内边距 24。句子即标题，宋体 16、行高 1.5、居中：「到现场打卡后才能答题」。按钮「知道了」高 46 红土，关闭弹层，人留在答一答页签。不出现选项'],
      '规格没写这个弹层的按钮文案，暂与 P06-5 一样用「知道了」。底部已经有「到达打卡」，弹层里不再放第二个',
      '未登录：本弹层不要求登录。真正进 P06 才登录'
    ],
    desc: '没打卡就点答一答，只告诉人要到现场，不让选题。'
  });

  K.add({
    id: 'P03-9', page: 'P03', state: '内容卡「…」· 纠错',
    html: function () {
      return site({
        themeN: 1, tabN: 2,
        main: hc({ n: 3, img: img.heritage('03-kaiyangmen', 690), t: '开秧门，大家一起下田', tag: '节令活动', p: '春天插下第一把秧，叫开秧门。各寨约在同一天一起下田，先祭祀，再动手。' }),
        bar: '到达打卡'
      }) + K.sheet('开秧门，大家一起下田', '<div class="st-menu"' + n(4) + '>' + i('flag', 20, '#A8452F') + '<div><b>我发现内容有误</b><span>进意见反馈，带上这一张卡</span></div></div>', { close: 1, n: 5 });
    },
    notes: [
      [1, '从导览卡右上角「…」打开。卡上的「…」是 28 的圆，白底 92% 不透明，三个点图标 16'],
      [2, '页签仍停在导览'],
      [3, '被点的那张卡留在弹层后面，标题带到弹层上'],
      [4, '菜单只有一行：旗标 20 红土 +「我发现内容有误」15，副文 12 石灰。点了 → P30，type=content_error，带页面、卡片 ID、内容版本号'],
      [5, '底部弹层：顶圆角 20、拖拽条 36×4、右上关闭 28。标题宋体 18，用这张卡的标题。点遮罩或关闭都收起。没有删除、分享、保存图片'],
      '来源页签的入口见 P03-6，提交的是同一条反馈'
    ],
    desc: '每张内容卡的右上角都能报错，菜单里只有这一项。'
  });

  /* ---------- P04 ---------- */
  function where(k, num, flat) {
    var s = S[k];
    return '<div class="p-card ck-where' + (flat ? ' st-flat' : '') + '"' + N(num) + '><span class="muted">你现在应该在</span><div class="row" style="margin-top:2px"><b>' + s.park + '</b>' + K.chip('访客点', 'teal') + '</div><span class="muted" style="display:block;margin-top:4px">开放时间以景区公布为准</span></div>';
  }
  function toggles(choice, num) {
    return '<div class="toggles"' + N(num) + '><span class="' + (choice === 'park' ? 'on' : '') + '">我已停稳</span><span class="' + (choice === 'ride' ? 'on' : '') + '">我是乘客</span></div>';
  }
  function ck(o) {
    var k = o.site || 'samaba';
    return K.top('到达打卡', { over: 1, dark: 1 }) + '<div class="ph-body full st-ck' + (o.loc ? ' st-locating' : '') + '">' +
      '<div class="ck-top" style="background-image:url(' + img.site(k) + ')"' + N(o.heroN) + '><h4>' + S[k].name + '</h4></div>' +
      (o.offline || '') + where(k, o.whereN, !!o.offline) + (o.fire || '') + (o.need || '') + toggles(o.choice, o.togN) +
      '<div class="big-btn' + (o.off ? ' st-off' : '') + (o.pulse ? ' pulse' : '') + '"' + N(o.btnN) + '>' + (o.btn || '我到了') + '</div>' +
      (o.locHtml || ('<div class="ck-hint"' + N(o.hintN) + '>' + (o.hint || '只在点击时取一次位置') + '</div>' +
        (o.noLink ? '' : '<div class="ck-link"' + N(o.linkN) + '>定位不准？扫现场立牌码</div>'))) +
      '</div>';
  }

  K.add({
    id: 'P04-1', page: 'P04', state: '默认 · 还没选',
    html: function () { return ck({ heroN: 1, whereN: 2, togN: 3, btnN: 4, off: 1, hintN: 5, linkN: 6 }); },
    notes: [
      [1, '顶栏浮在插画上：返回、标题「到达打卡」、状态栏均为白色。插画高 300，底向上渐变。站名宋体 26 白、左 18、底 34，压在图上。不出现「拍照点」'],
      [2, '「你现在应该在」白卡上移 22 盖住插画底，圆角 16、内边距 14。眉题 12 石灰；停车点 16 粗，旁接水田青标签「访客点」高 24。下一行 12 石灰写开放时间（后台配置，没配就写「开放时间以景区公布为准」）'],
      [3, '二选一胶囊：高 36、圆角 18、描边 1.5 #E6DCCB、字 14。默认两个都不选，同一时间只能选一个'],
      [4, '「我到了」圆钮：直径 150、宋体 30、字重 700。未选时填充 #E3DBCD、字 #A39C90，竹金光环仍在（内圈 10px 28% 金、外圈 22px 14% 金）。不可提交'],
      [5, '钮下小字 12 石灰居中：「只在点击时取一次位置」'],
      [6, '文字按钮 13 水田青、字重 600：「定位不准？扫现场立牌码」→ wx.scanCode，只认本小程序码'],
      '未登录点亮钮之后先走登录（README 3.1），登录完自动继续。第一次取位置前先出隐私协议（README 3.2），本文件不重复画',
      '站点暂停时，插画下加 P03-7 那种灰条，圆钮和扫码都置灰'
    ],
    desc: '打卡页先确认人是不是停在访客点。两个胶囊都没选时，大圆按钮是灰的。'
  });

  K.add({
    id: 'P04-2', page: 'P04', state: '已选「我已停稳」',
    html: function () { return ck({ whereN: 1, choice: 'park', togN: 2, btnN: 3, hintN: 4, linkN: 5 }); },
    notes: [
      [1, '停车点卡片同 P04-1'],
      [2, '选中胶囊：描边和水田青字 #2F7A78、字重 700、底 rgba(47,122,120,.08)，左侧带勾。另一个胶囊恢复未选。再点已选项不取消（必须留一个）；点另一个则互换。选「我是乘客」样式相同'],
      [3, '圆钮变亮：填充红土 #A8452F、白字宋体 30「我到了」，竹金光环同 P04-1。点了进入 P04-4'],
      [4, '小字仍是「只在点击时取一次位置」。选择和打卡一起提交'],
      [5, '扫码入口仍在。扫到别的站：Toast「这是{站名}的码」，页面换成那一站；扫到无关码：Toast「请扫现场立牌上的二维码」']
    ],
    desc: '选了「我已停稳」或「我是乘客」之后，大圆按钮才变成可点的红土色。'
  });

  K.add({
    id: 'P04-3', page: 'P04', state: '没选就点了圆钮',
    html: function () {
      return ck({ togN: 2, btnN: 3, off: 1, hintN: 4, need: '<p class="st-need"' + n(1) + '>先选一个：我已停稳，或我是乘客</p>' });
    },
    notes: [
      [1, '橙红校验字出现在胶囊上方，13 号、字重 600、颜色 --error #C23B2E、左右留 20、可换行。文案逐字「先选一个：我已停稳，或我是乘客」。这是表单校验，不用安全橙'],
      [2, '两个胶囊仍都未选'],
      [3, '圆钮保持置灰，并左右晃一下（约 0.4 秒，画板是晃完的终态）。不取位置'],
      [4, '小字和扫码入口不变。选中任意胶囊后，这行橙红字消失']
    ],
    desc: '没选停稳或乘客就点「我到了」，只晃一下按钮，并在胶囊上面写出要先选。'
  });

  K.add({
    id: 'P04-4', page: 'P04', state: '正在确认位置',
    html: function () {
      return ck({
        choice: 'park', togN: 4, pulse: 1, btnN: 1, noLink: 1,
        loc: 1,
        locHtml: '<div class="st-loc"' + n(2) + '><b>正在确认位置…</b><p' + n(3) + '>超过 8 秒会提示定位信号弱</p></div><div class="mask"></div>'
      });
    },
    notes: [
      [1, '全屏半透明遮罩 rgba(28,27,24,.55) 盖住顶栏和卡片。圆钮留在遮罩上面，直径仍 150，外圈用竹金描边做扩散（1.6 秒一圈，画板上同时能看见一圈静止的金边）。此态不可再点'],
      [2, '钮下白字 16 粗：「正在确认位置…」'],
      [3, '再下一行 12、白色 78%：「超过 8 秒会提示定位信号弱」'],
      [4, '胶囊保持进入本态之前的选择（图上是「我已停稳」），变暗但仍可读'],
      '只调一次 wx.getLocation。8 秒没拿到位置：不请求接口，直接换成 P04-6 的「定位信号弱」。拿到之后的判断顺序见规格 F2-2'
    ],
    desc: '点了「我到了」之后全屏变暗，圆钮外面一圈圈扩散，直到位置返回。'
  });

  K.add({
    id: 'P04-5', page: 'P04', state: '从立牌码进来',
    html: function () {
      return ck({ heroN: 1, whereN: 2, choice: 'park', togN: 3, btn: '确认到达', btnN: 4, hint: '已扫现场立牌码，不需要取位置', hintN: 5, linkN: 6 });
    },
    notes: [
      [1, '插画和站名同 P04-1。站由立牌码反查，不由上一页传入'],
      [2, '停车点卡片仍在，方便核对是不是这一站'],
      [3, '二选一仍然必选。图上已选「我已停稳」。没选时圆钮置灰，规则同 P04-1 / P04-3'],
      [4, '圆钮文案改成「确认到达」，宋体 30 白字，亮起规则同 P04-2。提交 method=board，不带坐标，不做速度判断'],
      [5, '小字改成「已扫现场立牌码，不需要取位置」，12 石灰'],
      [6, '「定位不准？扫现场立牌码」仍可再扫。作废码不进本页，进 P03 并在顶部写「这个码已经更换，请扫现场的新码」'],
      '离线扫到与离线包匹配的码：确认后进 P05 并标「待同步」，见 P05-3'
    ],
    desc: '从现场立牌码进来，按钮写成「确认到达」，并且明确写不再取位置。'
  });

  function fail(o, icon, title, desc, btns) {
    return '<div class="state' + (o ? ' o' : '') + '"><div class="ic">' + K.ui(icon, 'width:22px') + '</div><div><b>' + title + '</b><p>' + desc + '</p>' +
      (btns ? '<div class="btns">' + btns.map(function (t, i) { return K.btn(t, (i === 0 ? 'primary' : 'ghost') + ' sm'); }).join('') + '</div>' : '') + '</div></div>';
  }
  K.add({
    id: 'P04-6', page: 'P04', state: '没打上 · 四种情况对照',
    html: function () {
      return K.top('到达打卡') + K.body('<div class="st-fails">' + where('samaba', 1, 1) +
        fail(0, 'location', '还没到', '距打卡点约 2.3 公里', ['先看这一站的内容', '再试一次']) +
        '<div' + n(2) + '>' + fail(1, 'parking', '请停稳后再打卡', '车辆行驶中不能打卡，停好车再点', null) + '</div>' +
        '<div' + n(3) + '>' + fail(0, 'scan', '定位信号弱', '可以扫现场立牌码完成打卡', ['扫立牌码', '再试一次']) + '</div>' +
        '<div' + n(4) + '>' + fail(0, 'check', '今年已在这一站打过卡', '可以重看，不重复计分', ['回到这一站', '去认识这一瓣']) + '</div></div>', '');
    },
    notes: [
      [1, '真机仍保留 P04-1 的插画；状态卡替换圆钮、小字和扫码入口那一块。本画板把四种拼在一页对照，真机一次只出现一张。停车点卡片留着，避免人不知道自己在对哪一站'],
      [2, '车还在走：停车图标，图标底 rgba(217,98,43,.14)，标题 15 安全橙 #D9622B。说明 12.5 石灰「车辆行驶中不能打卡，停好车再点」。没有任何按钮。约 10 秒后卡片自己收起，回到二选一。安全橙只用在这一张和防火条'],
      [3, '信号弱：扫码图标，图标底水田青 12%。标题「定位信号弱」，说明「可以扫现场立牌码完成打卡」。主按钮「扫立牌码」高 32 → 扫码；次按钮「再试一次」白底描边 → 再取一次位置。8 秒超时也用这一张，且不调接口'],
      [4, '今年已打过：勾图标，青色底。标题「今年已在这一站打过卡」，说明「可以重看，不重复计分」。「回到这一站」→ P03；「去认识这一瓣」→ P09 并放大这一瓣'],
      '还没到（第一张）：定位图标青色底。标题「还没到」，说明「距打卡点约 2.3 公里」（取整到 0.1 公里；超过 50 公里改成「距打卡点还很远」）。「先看这一站的内容」→ P03；「再试一次」再取一次位置',
      '界面任何地方都不写「失败」。模拟 speed=5 时只出现橙色这张，且没有按钮'
    ],
    desc: '四种没打上的情况各是一张卡。真机一次只换上其中一张，用来告诉人下一步做什么。'
  });

  K.add({
    id: 'P04-7', page: 'P04', state: '没网',
    html: function () {
      return ck({
        whereN: 2, choice: 'park', togN: 3, off: 1, btnN: 4,
        hint: '现在没有网络，请扫现场立牌码', hintN: 5, linkN: 6,
        offline: '<div' + n(1) + '>' + K.offline('现在没有网络') + '</div>'
      });
    },
    notes: [
      [1, '离线条在插画和停车点卡片之间，全宽、高约 32、底 #E9E3D8、字 12。图标 14 +「现在没有网络」'],
      [2, '停车点卡片取消上移，改为距离线条 12，避免盖住离线条'],
      [3, '胶囊仍可选（图上已选「我已停稳」），但选了也不能定位打卡'],
      [4, '「我到了」置灰，样式同 P04-1，与有没有选胶囊无关'],
      [5, '小字改成「现在没有网络，请扫现场立牌码」，12 石灰'],
      [6, '扫码仍可点。码与本站离线包里的立牌码一致才进 P05，并标「待同步」；不一致则 Toast「请扫现场立牌上的二维码」']
    ],
    desc: '没有网络时不能靠定位打卡。圆钮变灰，请人改扫现场立牌码。'
  });

  K.add({
    id: 'P04-8', page: 'P04', state: '森林公园 · 防火提示',
    html: function () {
      return ck({
        site: 'forest', heroN: 1, whereN: 2, togN: 4, off: 1, btnN: 5, hintN: 6,
        fire: '<div class="bar-note safe" style="margin:14px 16px 0"' + n(3) + '>' + FIRE + '森林防火期 · 请勿携带火种</div>'
      });
    },
    notes: [
      [1, '插画换成森林公园，站名「马帮侨乡森林公园」宋体 26 白。顶栏仍是「到达打卡」'],
      [2, '停车点写成这一站的「游客中心停车场」，标签仍是「访客点」'],
      [3, '防火条常驻在停车点卡片和胶囊之间：安全橙 10% 底、字 #D9622B、圆角 12、左右边距 16、上边距 14。禁火图标 16 +「森林防火期 · 请勿携带火种」。防火期由后台开关控制；其他三站不出现这条'],
      [4, '二选一、置灰圆钮、小字、扫码同 P04-1。选中后圆钮仍可亮起，防火条不消失'],
      [5, '圆钮规则不因防火条改变'],
      [6, '小字仍是「只在点击时取一次位置」'],
      '安全橙只用于这条和「车还在走」。页面其他文字不用橙色'
    ],
    desc: '森林公园的打卡页多一条常驻防火提示，其余交互和撒玛坝相同。'
  });

  /* ---------- P05 ---------- */
  function success(o) {
    o = o || {};
    return K.top('打卡成功') + '<div class="ph-body st-ok">' +
      '<div class="passport"' + N(o.pN) + '><div class="k">同路册 · 第 4 页</div><div class="date">2026.10.20</div>' +
      (o.sync ? '<span class="chip grey st-sync"' + N(o.syncN) + '>待同步</span>' : '') +
      '<img class="stamp" src="' + img.seal('samaba') + '" alt=""><div class="name">撒玛坝梯田</div></div>' +
      '<div class="success-row"' + N(o.rowN) + '>' + K.pg({ lit: 'samaba', mini: 1, style: 'width:150px;flex:none' }) +
      '<img class="mascot" src="' + img.mascot('05-cheer') + '" alt=""></div>' +
      '<div class="success-msg"' + N(o.msgN) + '>' + (o.msg || '撒玛坝这一瓣亮了') + '</div>' +
      '<div class="success-sub"' + N(o.subN) + '>' + (o.sub || '2 颗籽可以认识，3 颗正在整理') + '</div>' +
      (o.up === false ? '' : '<div class="st-up"' + N(o.upN) + '>称号升级为「红河同路人」</div>') +
      (o.extra || '') +
      K.btn('先看这一站', 'primary block', o.b1, 'margin-top:16px') +
      K.btn('去认识这一瓣', 'ghost block', o.b2, 'margin-top:10px') +
      '</div>';
  }
  K.add({
    id: 'P05-1', page: 'P05', state: '默认 · 这一瓣亮了',
    html: function () { return success({ pN: 1, rowN: 2, msgN: 3, subN: 4, upN: 5, b1: 6, b2: 7 }); },
    notes: [
      [1, '同路册页：米纸底 #FBF6EC、圆角 18、横线间距 28、线色红土 6%。左上 12 红土字距加宽「同路册 · 第 4 页」；右上日期 12 石灰。印章 132，从上方落下 0.45 秒、只播一次，画板是盖完的终态。站名宋体 16 居中。第 4 页按「撒玛坝固定占同路册第四页」画，不是今年第 4 次打卡'],
      [2, '小石榴宽 150，撒玛坝这一瓣由米色变红（0.6 秒）。右侧吉祥物庆祝宽 104。两样横排、上下居中'],
      [3, '主文案宋体 20 居中：「撒玛坝这一瓣亮了」。站简称来自站点资料'],
      [4, '副文案 13 石灰：「2 颗籽可以认识，3 颗正在整理」。迤萨路口改成「这一瓣是整颗石榴的目录」'],
      [5, '称号行 13.5 粗、色 #7A5410：「称号升级为「红河同路人」」。只有本次打卡让称号升高才出现；本例是今年第二站'],
      [6, '主按钮红土高 46「先看这一站」→ P03 已打卡态（P03-2）'],
      [7, '次按钮白底描边高 46「去认识这一瓣」→ P09，并自动放大撒玛坝这一瓣。顺序以规格为准：先看站，再去石榴'],
      '打卡成功只表示到过，不加同路分。答题时间窗从现在起 6 小时'
    ],
    desc: '第一次在这一站打卡成功。同路册盖章，石榴这一瓣亮起来，主按钮是先看这一站。'
  });

  K.add({
    id: 'P05-2', page: 'P05', state: '欢迎回来',
    html: function () {
      return success({
        pN: 1, rowN: 2, msg: '欢迎回来', msgN: 3, up: false, b1: 5, b2: 6,
        sub: '题还没答完，可以从刚才那题继续', subN: 4,
        extra: '<p class="st-foot" style="margin-top:4px">答题时间重新计算 6 小时</p>'
      });
    },
    notes: [
      [1, '同路册页仍在，印章已经在纸上，不播落下动画'],
      [2, '石榴保持撒玛坝这一瓣已亮，不再播变红动画。吉祥物仍在'],
      [3, '主文案改成宋体 20「欢迎回来」，不再写「这一瓣亮了」'],
      [4, '副文案 13 石灰：「题还没答完，可以从刚才那题继续」。再下一行 12 石灰「答题时间重新计算 6 小时」'],
      [5, '主按钮仍是「先看这一站」→ P03-2'],
      [6, '次按钮仍是「去认识这一瓣」'],
      '称号已在第一次打卡时升过，这里不再出现升级行',
      '「题还没答完…」「答题时间重新计算 6 小时」是按规则写的说明，规格只点名了「欢迎回来」四个字，见文末待确认'
    ],
    desc: '题没答完又打了一次卡。不重新盖章，只说欢迎回来，时间窗重新算。'
  });

  K.add({
    id: 'P05-3', page: 'P05', state: '离线打卡 · 待同步',
    html: function () { return success({ pN: 1, sync: 1, syncN: 2, rowN: 3, msgN: 4, upN: 5, b1: 6, b2: 7 }); },
    notes: [
      [1, '册页、日期、印章同 P05-1。离线第一次打卡仍播盖章（画板为终态）'],
      [2, '右上灰标签「待同步」：高 22、圆角 11、底 #ECE6DC、字 11 粗石灰，放在日期下面、印章右侧，不挡微信胶囊'],
      [3, '石榴和吉祥物同 P05-1。本地先把这一瓣点亮'],
      [4, '主文案、副文案同 P05-1：「撒玛坝这一瓣亮了」「2 颗籽可以认识，3 颗正在整理」'],
      [5, '称号按本地记录先显示升级；同步被拒绝时再回退，并在同路册里写原因'],
      [6, '「先看这一站」仍可进已下载的 P03'],
      [7, '「去认识这一瓣」离线可开已下载的石榴；没下载则走通用没网'],
      '恢复网络后按时间顺序提交。成功则去掉标签并 Toast「已恢复网络，记录已同步」。码作废、超过 72 小时或今年已完成：同路册写「这次记录没能同步：{原因}」，本地分数回退'
    ],
    desc: '没网时靠立牌码打上的卡，成功页右上角标灰字「待同步」。'
  });

  /* ---------- P06 ---------- */
  var EX = '水从山上的林子里来，顺着水沟一层层流进梯田。森林在上，村寨在中，梯田在下。';
  var SRC = '来源：内容卡「灌水季，水从林子来」· 县文化馆审定';
  function dots(done, now, num) {
    var h = '';
    for (var k = 0; k < 3; k++) h += '<i class="' + (k < done ? 'on' : k === now ? 'now' : '') + '"></i>';
    return '<div class="q-dots st-dots"' + N(num) + '>' + h + '</div>';
  }
  function opt(letter, text, state, plus) {
    return '<div class="opt' + (state ? ' ' + state : '') + '"' + (plus ? ' style="margin-top:22px"' : '') + '><b>' + letter + '</b><span class="st-ot">' + text + '</span>' +
      (state === 'right' ? '<img class="ck" src="' + img.ui('check') + '" alt="">' : '') +
      (plus ? '<i class="st-plus">' + plus + '</i>' : '') + '</div>';
  }
  function q2opts(picked) {
    var items = [['A', '山顶的森林'], ['B', '山下的河水'], ['C', '只靠当季下雨'], ['D', '电动抽水上来']];
    return items.map(function (it, idx) {
      var st = '';
      var plus = '';
      if (picked === 'ok' && idx === 0) { st = 'right'; plus = '+10'; }
      if (picked === 'bad' && idx === 0) st = 'right';
      if (picked === 'bad' && idx === 1) st = 'wrong';
      return opt(it[0], it[1], st, plus);
    }).join('');
  }
  function quiz(o) {
    return K.top('答一答 · 撒玛坝') + '<div class="ph-body st-quiz">' + dots(o.done, o.now, o.dotN) +
      '<div class="q-card"' + N(o.cardN) + '><div class="n">' + o.no + '</div><h4>' + o.q + '</h4></div>' +
      '<div' + N(o.optN) + '>' + o.opts + '</div>' + (o.explain || '') +
      (o.btn ? K.btn(o.btn, (o.dis ? 'primary dis' : 'primary') + ' block', o.btnN, 'margin-top:14px') : '') +
      '<p class="ck-hint"' + N(o.hintN) + ' style="margin-top:8px">没有倒计时，慢慢看</p></div>' + (o.after || '');
  }
  K.add({
    id: 'P06-1', page: 'P06', state: '第 2 题 · 还没选',
    html: function () {
      return quiz({ done: 1, now: 1, dotN: 1, cardN: 2, optN: 3, no: '第 2 题 / 共 3 题', q: '撒玛坝梯田的水，主要从哪里来？', opts: q2opts(), hintN: 4 });
    },
    notes: [
      [1, '进度点居中，距顶 6：每点高 6、圆角 3。已完成宽 28 红土；当前这题宽 36 竹金；未到宽 28、底 #E6DCCB。点不能点，不能回去改答案'],
      [2, '题卡白底圆角 18、内边距 18。眉题 12 石灰「第 2 题 / 共 3 题」；题干宋体 19、行高 1.45。每站每年固定 3 题，第一次进入时由服务端抽好并锁定'],
      [3, '选项最少 2 个、最多 4 个，顺序每人随机。卡高至少 50、圆角 14、描边 1.5、字 15；字母圆 24 米纸底。没选时全部白底。点任一选项即提交，不能改。未选时不放底部按钮，避免空点'],
      [4, '最底小字 12 石灰居中：「没有倒计时，慢慢看」'],
      '中途返回不弹确认。再进来从第一道没结算的题继续。已结算的不重答'
    ],
    desc: '答题中，这一题还没选。没有倒计时，四个选项都还是白的。'
  });

  K.add({
    id: 'P06-2', page: 'P06', state: '答对',
    html: function () {
      return quiz({
        done: 1, now: 1, dotN: 1, cardN: 2, no: '第 2 题 / 共 3 题', q: '撒玛坝梯田的水，主要从哪里来？',
        opts: q2opts('ok'), optN: 3,
        explain: '<div class="st-okbox"' + n(4) + '><b>答对了</b><p>' + EX + '</p><div class="src">' + SRC + '</div></div>',
        btn: '下一题', btnN: 5, hintN: 6
      });
    },
    notes: [
      [1, '进度点仍停在第 2 题，进下一题后当前点才变成红土、下一点变成竹金'],
      [2, '题干不变'],
      [3, '选中且正确：整行填充水田青 #2F7A78、白字，字母圆改成白色 25% 透明，右侧白勾 18。行上方飘「+10」，宋体 22、水田青，不挡字'],
      [4, '讲解区绿框：描边 1.5 水田青，底 rgba(47,122,120,.1)，圆角 16、内边距 14。标题宋体 15 深田青「答对了」；正文 13.5、行高 1.6；来源 11.5 石灰。讲解必须引自已审定内容卡'],
      [5, '按钮「下一题」红土高 46 → 第 3 题。答对的人也看讲解，按钮在讲解下面，避免误触跳过'],
      [6, '小字仍是「没有倒计时，慢慢看」'],
      '其余三个选项保持白底，不高亮'
    ],
    desc: '答对之后选项变成水田青，上面飘 +10，绿框里写讲解和来源。'
  });

  K.add({
    id: 'P06-3', page: 'P06', state: '答错',
    html: function () {
      return quiz({
        done: 1, now: 1, dotN: 1, cardN: 2, no: '第 2 题 / 共 3 题', q: '撒玛坝梯田的水，主要从哪里来？',
        opts: q2opts('bad'), optN: 3,
        explain: '<div class="explain"' + n(4) + '><b>正确的是 A</b><p>' + EX + '</p><div class="src">' + SRC + '</div></div>',
        btn: '我记住了 +3', btnN: 5, hintN: 6
      });
    },
    notes: [
      [1, '进度点同 P06-2'],
      [2, '题干不变。选项顺序与 P06-2 不同人会不同，这里为对照沿用同一顺序'],
      [3, '选错的那一项：描边和文字红土 #A8452F，不填红底，不打叉，不写「失败」。正确项整行水田青加白勾，与答对同一套样式，但上方不飘分'],
      [4, '讲解黄框：底 #FBF4E6、描边 1.5 竹金。标题宋体 15、色 #8F6210，逐字「正确的是 A」（A 为正确项字母）。正文和来源同答对'],
      [5, '按钮「我记住了 +3」红土高 46。点了之后飘「+3」，按钮改成「下一题」，并记 3 分。没点就返回：不给这 3 分，下次仍停在这题，按钮还是这句'],
      [6, '小字仍是「没有倒计时，慢慢看」'],
      '「我记住了 +3」不受 6 小时时间窗限制：答错已经发生，只差确认讲解'
    ],
    desc: '答错不扣分。选错的加红框，正确的变成水田青，黄框写明正确项。'
  });

  K.add({
    id: 'P06-4', page: 'P06', state: '第 3 题完成',
    html: function () {
      var ex = '两样都是国家级非遗，不是一件事。乐作是跳的，在哈尼族、彝族群众中世代相传；多声部是唱的，一人领、众人应和。';
      return quiz({
        done: 3, now: -1, dotN: 1, cardN: 2, no: '第 3 题 / 共 3 题', q: '乐作舞和哈尼多声部，哪种说法对？',
        optN: 3,
        opts: opt('A', '是同一种表演的两个名字') + opt('B', '乐作是跳的，多声部是唱的', 'right', '+10') + opt('C', '都要穿全套服装才能看') + opt('D', '只有过节才能见到'),
        explain: '<div class="st-okbox"' + n(4) + '><b>答对了</b><p>' + ex + '</p><div class="src">来源：内容卡「乐作是跳的，多声部是唱的」· 县文化馆审定</div></div>',
        btn: '记下这一站', btnN: 5, hintN: 6
      });
    },
    notes: [
      [1, '三题都完成：三个点都是宽 28 的红土，不再有竹金当前点'],
      [2, '眉题「第 3 题 / 共 3 题」，题干宋体 19。这是最后一题的答完态（图为答对；若答错，按钮仍先是「我记住了 +3」，点过之后才变成「记下这一站」）'],
      [3, '正确项水田青加白勾，上方飘「+10」，规则同 P06-2'],
      [4, '绿框讲解。来源指向本站对应内容卡'],
      [5, '按钮「记下这一站」红土高 46 → P07。只有 3 题都结算后才出现'],
      [6, '小字仍是「没有倒计时，慢慢看」']
    ],
    desc: '第三题结算之后，底部按钮换成「记下这一站」。'
  });

  K.add({
    id: 'P06-5', page: 'P06', state: '提交时时间窗已过',
    html: function () {
      return quiz({
        done: 1, now: 1, dotN: 1, cardN: 2, no: '第 2 题 / 共 3 题', q: '撒玛坝梯田的水，主要从哪里来？',
        opts: q2opts('ok'),
        explain: '<div class="st-okbox"><b>答对了</b><p>' + EX + '</p><div class="src">' + SRC + '</div></div>',
        btn: '下一题', hintN: 3,
        after: dlg('答题时间已过，<br>回到现场再打一次卡就能继续', [['知道了', 'primary']], 4)
      });
    },
    notes: [
      [1, '人还在答题页，点「下一题」或提交时服务端返回 QUIZ_WINDOW_EXPIRED'],
      [2, '刚选出的结果先留在弹层后面，不写入结算'],
      [3, '小字仍在，被遮罩压暗'],
      [4, '弹层标题即整句，宋体 16、行高 1.5、居中换行：「答题时间已过，回到现场再打一次卡就能继续」。按钮「知道了」高 46 → 关闭并回到 P03-3。不自动跳打卡页'],
      '这 3 分或 10 分本次不算。回到现场再打卡后，从这道没结算的题继续'
    ],
    desc: '人还在题里，时间窗却过了。弹层说明回现场再打一次卡就能继续。'
  });

  /* ---------- P07 ---------- */
  function summary(m, o) {
    m = m || {}; o = o || {};
    var claimed = o.claimed;
    return K.top('记下这一站') + '<div class="ph-body">' +
      '<div class="result-top"' + N(m.top) + '><img class="stamp" src="' + img.seal('samaba') + '" alt=""><h4>撒玛坝梯田 · 记下了</h4><p>' +
      (claimed ? '徽记已点亮 · 称号保持「红河同路人」' : '徽记已点亮 · 称号升级为「红河同路人」') + '</p></div>' +
      '<div class="r-stats"' + N(m.stats) + '><div><b>30</b><span>本站得分</span></div><div><b>60</b><span>年度同路分</span></div><div><b class="st-tier">第二档</b><span>现在可领</span></div></div>' +
      '<div class="gold-note"' + N(m.gold) + '>' + (claimed ? '今年的礼品已经领过了。称号和石榴还可以继续攒。' : '现在领是第二档；再走一站可以领第三档。<br>今年只能领一次。') + '</div>' +
      (claimed ? '' : K.btn('去领礼', 'primary block', m.gift, 'margin-top:14px')) +
      K.btn('看这站好物', 'ghost block', m.goods, 'margin-top:10px') +
      (o.wish ? '<p class="st-wish"' + N(m.wish) + '>你的心愿单里有 2 件</p>' : '') +
      K.btn('下一站怎么走', 'ghost block', m.next, 'margin-top:10px') +
      '<p class="st-foot">只给距离和停车点，不排先后。导航请用微信地图。</p></div>';
  }
  K.add({
    id: 'P07-1', page: 'P07', state: '还没领过 · 可到更高档',
    html: function () { return summary({ top: 1, stats: 2, gold: 3, gift: 4, goods: 5, wish: 6, next: 7 }, { wish: 1 }); },
    notes: [
      [1, '印章 132 居中。动画是由线描变成填色，约 0.45 秒、只播一次，画板是填色终态。标题宋体 24「撒玛坝梯田 · 记下了」。副文 13 石灰：「徽记已点亮 · 称号升级为「红河同路人」」。不升时把「升级为」换成「保持」'],
      [2, '三格白卡圆角 16，列间 1px 分割线。数字宋体 22 红土；「第二档」宋体 18，避免三字挤出格子。标签 11.5 石灰：「本站得分」「年度同路分」「现在可领」'],
      [3, '金色条：底 rgba(217,164,65,.16)、字 #7A5410、12.5 粗、行高 1.6、圆角 12。逐字「现在领是第二档；再走一站可以领第三档。今年只能领一次。」'],
      [4, '「去领礼」红土高 46 → P23。还没登记证件则先到 P27，回来再继续'],
      [5, '「看这站好物」白底描边高 46 → P13 按站看 · 撒玛坝'],
      [6, '完成第二站、且心愿单里有货时，紧贴在「看这站好物」下，12.5 红土字重 600：「你的心愿单里有 2 件」→ P21。没有心愿或不是这个时机则整行不出现'],
      [7, '「下一站怎么走」白底描边 → 打开 P07-3。最底 12 石灰：「只给距离和停车点，不排先后。导航请用微信地图。」不写推荐的下一站'],
      '示例按两站都答满：本站 30、年度 60，达到第二档（2 站且 40 分）。再走一站还要答到 70 分才是第三档，金色条只按规格写「再走一站」'
    ],
    desc: '记下撒玛坝。还没领过礼，而且再走一站就能到更高一档，所以给出去领和再走走两个出口。'
  });

  K.add({
    id: 'P07-2', page: 'P07', state: '今年已领过',
    html: function () { return summary({ top: 1, stats: 2, gold: 3, goods: 4, next: 5 }, { claimed: 1 }); },
    notes: [
      [1, '标题仍是「撒玛坝梯田 · 记下了」。副文改为「徽记已点亮 · 称号保持「红河同路人」」（本例称号没有再升）'],
      [2, '三格仍显示本站得分、年度同路分、现在可领的档。档位数字还在，只是不能再领'],
      [3, '金色条逐字：「今年的礼品已经领过了。称号和石榴还可以继续攒。」'],
      [4, '不显示「去领礼」。第一颗按钮是「看这站好物」'],
      [5, '「下一站怎么走」仍在。底部小字同 P07-1'],
      '心愿单那一行只在 P07-1 这种「完成第二站」的例子里出现，已领过的这一板不重复'
    ],
    desc: '今年的礼已经领过。称号和石榴还能继续，只是不再出现「去领礼」。'
  });

  function nx(name, km, park, done, num) {
    return '<div class="st-nx"' + N(num) + '><div class="nm"><b>' + name + '</b>' + (done ? K.chip('已记下', 'grey') : '') + '</div>' +
      '<div class="meta">距这一站约 ' + km + ' 公里</div><div class="meta">停车：' + park + '</div>' +
      K.btn('用微信地图打开停车点', 'ghost sm') + '</div>';
  }
  K.add({
    id: 'P07-3', page: 'P07', state: '下一站怎么走',
    html: function () {
      return summary({}, { wish: 1 }) + K.sheet('下一站怎么走', '<p class="t-cap t-c">不排先后。只给距离和停车点，导航用微信地图。</p>' +
        nx('马帮侨乡森林公园', '36', '游客中心停车场', 0, 2) +
        nx('马帮古城', '38', '东门街停车场', 0, 0) +
        nx('迤萨路口', '42', '出口后访客停车场', 1, 3), { n: 1 });
    },
    notes: [
      [1, '底部弹层顶圆角 20，标题宋体 18「下一站怎么走」。说明 12 石灰居中。没有关闭叉，下滑或点遮罩关闭。不排序号，不说「建议先去」'],
      [2, '未完成的站在前：站名宋体 16；下一行 12.5 石灰「距这一站约 {n} 公里」；再一行「停车：{停车点}」。按钮高 32 白底描边、全宽「用微信地图打开停车点」→ wx.openLocation，只开到停车点，不画路线'],
      [3, '今年已记下的站排在最后，站名旁灰标签「已记下」高 24。距离和停车点、地图按钮仍在，方便人回看'],
      '另外三站都列出。距离数字是示意（36 / 38 / 42 公里），上线读后台的站间路程；规格没写数据来源，见文末待确认',
      '当前站撒玛坝不出现在列表里'
    ],
    desc: '下一站不排顺序。已记下的放在后面，每站只给距离、停车点和微信地图。'
  });
})();
