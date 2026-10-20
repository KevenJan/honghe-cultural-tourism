/* 第 2 批：一路好物下单链路 P13–P21 */
(function () {
  var K = window.K, S = K.SITE, img = K.img, i = K.i, n = K.n;

  /* ---------- 示意数据 ---------- */
  var G = {
    rice:   { name: '梯田红米', spec: '2kg 袋装', price: 39, site: 'samaba', from: '撒玛坝梯田 · 宝华镇', coop: '撒玛坝红米合作社', vil: '撒玛坝村', tags: ['耐储', '可寄', '可自提'], bg: 'radial-gradient(circle at 50% 60%, #8E2E2A 0 28%, #C9A577 29% 34%, #E7D7BC 35%)' },
    egg:    { name: '梯田鸭蛋', spec: '30 枚', price: 45, site: 'samaba', from: '撒玛坝梯田 · 宝华镇', coop: '撒玛坝红米合作社', vil: '撒玛坝村', tags: ['生鲜', '可寄'], fresh: 1, bg: 'radial-gradient(circle at 38% 52%, #F6EEDF 0 13%, #DCCBAE 14% 15%, transparent 16%), radial-gradient(circle at 62% 56%, #F6EEDF 0 13%, #DCCBAE 14% 15%, #B99A6A 16% 33%, #EADFCB 34%)' },
    zimi:   { name: '梯田紫米', spec: '1kg', price: 26, site: 'samaba', from: '撒玛坝梯田 · 宝华镇', coop: '撒玛坝红米合作社', vil: '撒玛坝村', tags: ['耐储', '可寄'], bg: 'radial-gradient(circle at 50% 60%, #4B2A3A 0 28%, #B79A7A 29% 34%, #E7D7BC 35%)' },
    basket: { name: '竹编果篮', spec: '中号', price: 88, site: 'oldtown', from: '马帮古城 · 东门街', coop: '东门街竹编工坊', vil: '东门街', tags: ['可寄', '可自提'], bg: 'radial-gradient(circle at 50% 55%, #C49A55 0 30%, #E9DCC2 31%)' },
    cup:    { name: '土陶小杯', spec: '2 只装', price: 46, site: 'oldtown', from: '马帮古城 · 东门街', coop: '古城土陶工坊', vil: '东门街', tags: ['可寄'], bg: 'radial-gradient(circle at 50% 58%, #A8452F 0 24%, #E2CFB4 25%)' },
    anise:  { name: '八角', spec: '500g', price: 32, site: 'forest', from: '森林公园山货 · 迤萨镇', coop: '侨乡山货合作社', vil: '大新寨', tags: ['耐储', '可自提'], forest: 1, bg: 'radial-gradient(circle at 45% 55%, #5C3B24 0 10%, #7A4E2E 11% 22%, #EADFCB 23%)' },
    mush:   { name: '野生菌干', spec: '200g', price: 58, site: 'forest', from: '森林公园山货 · 迤萨镇', coop: '侨乡山货合作社', vil: '大新寨', tags: ['耐储', '可寄'], forest: 1, bg: 'radial-gradient(ellipse at 50% 62%, #8A6A44 0 26%, #C8B08A 27% 31%, #E8DCC6 32%)' },
    tea:    { name: '红河红茶', spec: '100g', price: 68, site: 'forest', from: '森林公园山货 · 迤萨镇', coop: '侨乡山货合作社', vil: '大新寨', tags: ['耐储', '可寄'], forest: 1, bg: 'radial-gradient(circle at 50% 58%, #3E2A1C 0 20%, #7A5A3A 21% 28%, #E6DAC4 29%)' },
    bag:    { name: '同路帆布袋', spec: '米白', price: 35, site: 'yisa', from: '迤萨路口 · 县文创', coop: '红河县文创工作室', vil: '迤萨镇', tags: ['可寄', '可自提'], bg: 'radial-gradient(circle at 50% 58%, #2F7A78 0 26%, #9CC3C0 27% 31%, #EAE3D4 32%)' },
    card:   { name: '四站明信片', spec: '8 张', price: 18, site: 'yisa', from: '迤萨路口 · 县文创', coop: '红河县文创工作室', vil: '迤萨镇', tags: ['可寄', '可自提'], bg: 'linear-gradient(135deg, transparent 38%, #D9A441 38% 62%, transparent 62%), radial-gradient(circle at 50% 55%, #F3E6D3 0 34%, #E8DCC6 35%)' }
  };
  var COUNTER = '撒玛坝观景台服务柜台', CAMP = '森林公园旅居营地';
  function y(v) { return '¥' + v.toFixed(2); }
  function gi(k, cls, style) { return '<div class="' + (cls || 'im') + '" style="background:' + G[k].bg + ';' + (style || '') + '"></div>'; }
  function stars(v, s) {
    var h = '';
    for (var k = 1; k <= 5; k++) h += k <= v ? i('starF', s || 13, '#D9A441', 'color:#D9A441') : i('star', s || 13, '#D8CDBA');
    return '<span class="sp-stars">' + h + '</span>';
  }
  function stepper(v) { return '<span class="stepper"><span>−</span><b>' + v + '</b><span>+</span></span>'; }
  var heartRed = i('heartF', 22, '#A8452F', 'color:#A8452F');

  /* ---------- P13 一路好物 ---------- */
  function card(k, o) {
    var g = G[k]; o = o || {};
    return '<div class="good' + (o.out ? ' sp-out' : '') + '"' + (o.n ? n(o.n) : '') + '><div class="im" style="background:' + g.bg + '">' + (o.out ? '<span class="sp-out-t">这批卖完了</span>' : '') + '</div>' +
      '<div class="bd"><b>' + g.name + ' ' + g.spec + '</b><span class="from">' + g.from + '</span>' +
      '<div class="sp-tags">' + g.tags.map(function (t) { return K.chip(t, t === '耐储' ? 'teal' : t === '生鲜' ? 'gold' : ''); }).join('') + '</div>' +
      '<div class="pr"><em>¥' + g.price + '</em><span class="btn sm ghost" style="height:24px;font-size:11px">看看</span></div></div></div>';
  }
  function goodsHead(o) {
    o = o || {};
    return K.top('一路好物', { noBack: 1, sticky: 1 }) + '<div class="ph-body has-tab">' +
      '<div class="sp-head"><div class="sp-search' + (o.q ? ' on' : '') + '"' + n(1) + '>' + i('search', 16, '#6E6A63') + (o.q ? '<span>' + o.q + '</span><span class="x">' + i('x', 10, '#fff') + '</span>' : '搜商品名') + '</div>' +
      '<span class="sp-hic"' + n(2) + '>' + i('heart', 19, '#22201C') + '<i class="badge-n">3</i></span><span class="sp-hic">' + K.ui('cart') + '<i class="badge-n">5</i></span></div>' +
      (o.q ? '' : '<p class="sp-lead">每件货都写着谁做的、在哪儿</p><div class="cats"' + n(3) + '>' + ['为您推荐', '梯田红米', '茶与山货', '手作文创', '按站看'].map(function (c) { return '<span class="' + (c === o.cat ? 'on' : '') + '">' + c + '</span>'; }).join('') + '</div>');
  }
  K.add({ id: 'P13-1', page: 'P13', state: '默认 · 为您推荐（含售罄）', h: 1560, html: function () {
    return goodsHead({ cat: '为您推荐' }) +
      '<div class="goods"' + n(4) + '>' + ['rice', 'basket', 'anise', 'cup', 'tea', 'bag', 'egg', 'mush'].map(function (k, x) { return card(k, x === 0 ? { n: 5 } : {}); }).join('') +
      card('zimi', { out: 1, n: 6 }) + '</div>' +
      '<p class="t-cap t-c mt16"' + n(7) + '>商品图为示意，上线时使用合作社实拍</p></div>' + K.tab('goods', 8);
  }, notes: [
    [1, '搜索框：高 36、圆角 18、白底 1px 描边；占位「搜商品名」。一期只按商品名模糊匹配，不搜合作社、不搜站名。点了原地变输入态，回车出结果（无结果见 P13-3）'],
    [2, '右侧两个圆形入口 36×36：心愿单（→ P21）、购物车（→ P15）；角标红土 16 高，未登录不显示角标，点了先走登录弹层（README 3.1）'],
    [3, '分类胶囊：为您推荐 / 梯田红米 / 茶与山货 / 手作文创 / 按站看；高 30、选中红土底白字；横向可滑。默认「为您推荐」，按 B6 配置的推荐顺序'],
    [4, '双列商品卡：卡宽 (375−32−10)/2≈166，圆角 14；主图 118 高；名称宋体 14 单行省略；来源一行 11.5 红土；标签 18 高（耐储=水田青，生鲜=竹金，其余红土浅底）；价格 15 粗红土'],
    [5, '整张卡和「看看」都 → P14（带 from_site 为空，即「直接浏览」）。列表页不放心形、不放加购按钮'],
    [6, '售罄商品排在当前分类最后：主图盖 72% 米灰 + 深色胶囊「这批卖完了」，名称价格变灰；仍可点进详情订阅到货（P14-3）'],
    [7, '示意说明小字 12 石灰，居中；正式上线（换成合作社实拍）后去掉'],
    [8, '底部标签栏「好物」选中（红土）'],
    '不显示销量、划线价、限时、排行榜，不出现积分抵扣；没有任何「爆款」「秒杀」角标',
    '加载中：双列骨架卡 4 张（图块 118 + 3 行文字条）；出错：通用「没加载出来 · 再试一次」；没网：顶部离线条 + 上次缓存的列表，「看看」照常可点，详情页没缓存时显示出错态',
    '已下架商品不在列表出现；某分类没有商品时整个胶囊不显示'
  ], desc: '好物入口。卡片只回答四件事：是什么、从哪来、能不能寄/自提、多少钱。售罄的放到最后，不制造紧张感。' });

  K.add({ id: 'P13-2', page: 'P13', state: '按站看', h: 1500, html: function () {
    var grp = [['yisa', ['bag', 'card']], ['forest', ['anise', 'mush']], ['oldtown', ['basket', 'cup']], ['samaba', ['rice', 'egg']]];
    return goodsHead({ cat: '按站看' }) + grp.map(function (gp, x) {
      var k = gp[0];
      return '<div class="sp-grp-h"' + (x === 0 ? n(4) : '') + '><b>在' + S[k].name + '遇到的</b><span>' + S[k].theme + '</span>' + (k === 'samaba' ? '<span class="chip teal"' + n(5) + '>你来过这站</span>' : '') + '</div>' +
        (k === 'forest' ? '<div class="bar-note safe" style="margin:-4px 0 10px"' + n(6) + '>' + K.ui('fire-ban', 'width:15px;filter:invert(45%) sepia(80%) saturate(1500%) hue-rotate(345deg)') + '森林防火期，营地自提的山货请勿在园区内生火加工</div>' : '') +
        '<div class="goods">' + gp[1].map(function (p) { return card(p); }).join('') + '</div>';
    }).join('') + '<p class="t-cap t-c mt16">商品图为示意，上线时使用合作社实拍</p></div>' + K.tab('goods');
  }, notes: [
    [1, '搜索与入口同 P13-1'],
    [3, '选中「按站看」'],
    [4, '分组标题「在{站名}遇到的」宋体 17，右侧接主题句 12 石灰；四组固定按 迤萨路口 → 森林公园 → 马帮古城 → 撒玛坝 排列（与四站页一致，不按用户顺序重排）'],
    [5, '登录且今年打过卡的站，标题右侧加水田青小标「你来过这站」（高 20）；不改变分组顺序'],
    [6, '森林公园组上方安全橙提示条（只在森林防火期显示，由 B4 公告开关控制）；组内不出现明火类商品'],
    '每组最多 4 件，超过显示「看这站全部 ›」；某站没有上架商品时整组不显示',
    '商品归属哪个站由 B6 商品「关联站点」决定；一件商品只归一个站',
    '售罄规则同 P13-1：在组内排最后'
  ], desc: '把物产挂回到路上的四站，让游客知道「我在哪儿看到的，就是这里产的」。' });

  K.add({ id: 'P13-3', page: 'P13', state: '搜索无结果', html: function () {
    return goodsHead({ q: '火腿' }) +
      '<div class="empty" style="padding-top:36px"' + n(4) + '><img src="' + img.mascot('03-think') + '" alt=""><b>没找到「火腿」</b><p>一期只能搜商品名，换个说法试试</p></div>' +
      '<p class="t-cap t-c mt16">大家常搜</p><div class="sp-sug"' + n(5) + '>' + ['梯田红米', '茶', '竹编', '八角', '明信片'].map(function (t) { return '<span>' + t + '</span>'; }).join('') + '</div>' +
      '<div class="t-c mt16"' + n(6) + '>' + K.btn('看看为您推荐', 'ghost', 0, 'display:inline-flex;width:180px') + '</div></div>' + K.tab('goods');
  }, notes: [
    [1, '输入态：描边变红土，右侧圆形清除按钮 18；分类胶囊在搜索结果页收起'],
    [4, '空状态：吉祥物「思考」132 宽 + 宋体 17「没找到「{关键词}」」+ 13 石灰一句话（README 3.7 通用空状态）'],
    [5, '「大家常搜」词条：高 30 白底描边胶囊，最多 5 个，由 B6 配置；点了直接搜'],
    [6, '「看看为您推荐」→ 清空搜索并回到 P13-1'],
    '有结果时：结果按相关度双列显示，卡片同 P13-1；售罄的同样排最后',
    '关键词最长 20 字；不保存搜索历史'
  ] });

  /* ---------- P14 商品详情 ---------- */
  var reviews = [
    ['张*', 5, '10-12', '米很香，煮粥颜色好看。包装上写着哪块田、哪个月收的，心里踏实。', 2, '谢谢你，今年新米 11 月还有一批。'],
    ['王**', 5, '10-08', '在撒玛坝看完梯田回来下的单，三天就到了。', 0],
    ['李*', 4, '09-30', '口感偏硬一点，泡两个小时再煮正好。', 1]
  ];
  function rvList() {
    return reviews.map(function (r) {
      return '<div class="sp-rv"><div class="who">' + K.avatar(26) + '<b>' + r[0] + '</b>' + stars(r[1], 12) + '<em>' + r[2] + '</em></div><p>' + r[3] + '</p>' +
        (r[4] ? '<div class="ims">' + (r[4] > 1 ? '<div class="ph-img">实拍</div><div class="ph-img">实拍</div>' : '<div class="ph-img">实拍</div>') + '</div>' : '') +
        (r[5] ? '<div class="reply">合作社回复：' + r[5] + '</div>' : '') + '</div>';
    }).join('');
  }
  function pd(o) {
    o = o || {};
    var k = o.k || 'rice', g = G[k], tab = o.tab || '商品详情';
    var tabBody;
    if (tab === '来源档案') {
      tabBody = '<div class="sp-sec"' + n(5) + '><div class="sp-who"><div class="ph-img">生产者照片<br>经本人同意</div><div><b class="serif" style="font-size:16px">' + g.coop + '</b><div class="t-cap">' + (k === 'rice' ? '宝华镇' : '迤萨镇') + g.vil + ' · 23 户社员</div></div></div>' +
        '<div class="sp-arch">' + [['生产者', g.coop], ['产地村寨', (k === 'rice' ? '宝华镇' : '迤萨镇') + g.vil], ['采收时间', '2026 年 10 月上旬'], ['批次', '2026 秋 · 第 2 批'], ['配送方式', '寄回家 · ' + COUNTER + '自提'], ['在哪遇到', '<span class="t-red" style="font-weight:600">' + S[g.site].name + ' · 这一站的物产</span><div class="link mt4">去看这一站 ›</div>']].map(function (r) { return '<div><span>' + r[0] + '</span><em>' + r[1] + '</em></div>'; }).join('') + '</div>' +
        '<div class="sp-recv">你买下后，合作社会收到：<b>「买家在' + S[o.from || g.site].name + '看完后下单」</b></div></div>';
    } else if (tab === '购买须知') {
      tabBody = '<div class="sp-sec"' + n(5) + '>' + (g.forest ? '<div class="sp-fire"' + n(6) + '>' + K.ui('fire-ban') + '<div><b>森林防火提示</b>每年 12 月至次年 6 月为森林防火期。营地自提时请勿携带火种进入园区，山货不要在园区内生火加工。发现火情拨打 12119。</div></div>' : '') +
        '<div class="sp-arch mt8">' + [['发货时间', '付款后 48 小时内由' + g.coop + '发出；营地自提的，备好后通知你'], ['保质期', '24 个月'], ['储存方式', '密封，放阴凉干燥处，避免受潮'], ['自提', CAMP + '服务点，9:00–18:00；超过自提日期 7 天未取，运营会联系你改寄或退款'], ['售后', '签收后 7 天内，快递破损、发错货、质量问题、少件可申请；不想要了可退货（生鲜除外）'], ['发票', '由合作社开具，下单后在订单详情申请']].map(function (r) { return '<div><span>' + r[0] + '</span><em>' + r[1] + '</em></div>'; }).join('') + '</div></div>';
    } else {
      tabBody = '<div class="sp-sec"' + n(5) + '><div class="sp-dtxt">撒玛坝梯田的红米一年一季。灌水、插秧、收割都在田里，收下来的谷子在村口晒场晒干，碾成糙米，不抛光。</div>' +
        '<div class="sp-dimg ph-img">合作社实拍 · 晒场</div><div class="sp-dtxt">煮之前泡 1–2 小时，米水比 1:1.6。也可以和白米 1:2 混着煮。</div><div class="sp-dimg ph-img">合作社实拍 · 装袋</div></div>';
    }
    var bar;
    if (o.yisa) {
      bar = '<span class="sp-bic">' + K.ui('cart') + '<i class="badge-n">5</i>购物车</span><div class="sp-bar-col"' + n(7) + '>' + K.btn('加心愿单', 'primary', 0, 'flex:none;width:100%') + '<span class="t-cap">先记下，走完几站再决定</span></div>';
    } else if (o.out) {
      bar = '<span class="sp-bic">' + i('heart', 22, '#6E6A63') + '心愿</span><span class="sp-bic">' + K.ui('cart') + '<i class="badge-n">5</i>购物车</span>' +
        '<div class="row grow" style="gap:8px"' + n(7) + '>' + K.btn('这批卖完了', 'dis', 0, 'flex:1;font-size:15px;padding:0 8px') + K.btn('到货告诉我', 'primary', 0, 'font-size:15px;padding:0 8px') + '</div>';
    } else {
      bar = '<span class="sp-bic' + (o.wished ? ' on' : '') + '">' + (o.wished ? i('heartF', 22, '#A8452F', 'color:#A8452F') : i('heart', 22, '#6E6A63')) + '心愿</span><span class="sp-bic">' + K.ui('cart') + '<i class="badge-n">5</i>购物车</span>' +
        '<div class="row grow" style="gap:8px"' + n(7) + '>' + K.btn('加入购物车', 'gold', 0, 'flex:1;font-size:15px;padding:0 8px') + K.btn('立即购买', 'primary', 0, 'font-size:15px;padding:0 8px') + '</div>';
    }
    var meet = o.from === 'yisa' ? '从迤萨路口带来 · 在' + S[g.site].short + '能看到它长在哪' : '在' + S[g.site].name + '遇到 · 这一站的物产';
    return K.top('', { over: 1 }) + '<div class="ph-body has-bar">' +
      '<div class="sp-pd' + (o.out ? ' out' : '') + '" style="margin:0 -16px;background:' + g.bg + ';background-size:cover"' + n(1) + '>' + (o.out ? '<span class="out-t">这批卖完了</span>' : '') + '<span class="sp-mk">示意图</span><span class="cnt">1/5</span></div>' +
      '<div class="sp-info"' + n(2) + '><div class="sp-price">¥<b>' + g.price + '</b>.00</div><div class="sp-name">' + g.name + ' ' + g.spec + '</div>' +
      '<div class="sp-tags" style="margin-top:6px">' + g.tags.map(function (t) { return K.chip(t, t === '耐储' ? 'teal' : t === '生鲜' ? 'gold' : ''); }).join('') + '</div>' +
      '<div class="sp-meet">' + i('pin', 15, '#A8452F') + meet + '</div></div>' +
      '<div class="sp-row"' + n(3) + '><div><label>已选</label><span class="v">' + (o.out ? '<span class="t-cap">这批卖完了，下一批预计 11 月中</span>' : g.spec + ' · 寄回家 · 1 件') + '</span><img class="arr" src="' + img.ui('chevron-right') + '" alt=""></div>' +
      '<div><label>发货</label><span class="v" style="font-size:13px">' + (g.forest ? '48 小时内发出 · 也可到营地自提' : '付款后 48 小时内由合作社寄出') + '</span></div></div>' +
      (o.noRv ? '' : '<div class="sp-sec"' + n(4) + '><div class="sp-sec-h"><b>评价</b><span>看全部 12 条 ›</span></div>' + rvList() + '</div>') +
      '<div class="tabs sp-tabs"' + n(8) + '>' + ['商品详情', '来源档案', '购买须知'].map(function (t) { return '<span class="' + (t === tab ? 'on' : '') + '">' + t + '</span>'; }).join('') + '</div>' +
      tabBody + '</div>' + K.bar(bar, 0) + (o.after || '');
  }
  K.add({ id: 'P14-1', page: 'P14', state: '常规 · 商品详情页签', h: 1700, html: function () { return pd({}); }, notes: [
    [1, '主图轮播：375×300，最多 5 张合作社实拍，右下「1/5」；左下「示意图」角标上线后去掉。顶栏透明浮在图上，返回键 24'],
    [2, '价格卡：白底上圆角 20 压住主图 16。价格 ¥ 15 + 数字 26 粗红土，只有一个价格（无划线价、无「到手价」）；名称宋体 20；标签同列表；「在{站名}遇到 · 这一站的物产」12.5，点了 → P03 该站'],
    [3, '「已选」行：高 48，显示「{规格} · {配送方式} · {数量} 件」，点开规格半屏层（P14-4）。「发货」行只读'],
    [4, '评价：只显示审核通过的，最多 3 条，按时间倒序；每条头像 26、脱敏昵称、星级 12、日期；图片 64×64 最多 3 张；合作社回复一条（也经过审核）灰底。「看全部 12 条 ›」→ 评价全部列表（同样只有审核通过的）。没有评价时整块不显示'],
    [8, '页签：商品详情 / 来源档案 / 购买须知，下划线式，滚动到顶部时吸顶（顶栏下方）'],
    [5, '商品详情：合作社提供的图文，正文 14、行高 1.75；图片宽 343、圆角 12'],
    [7, '底部操作条：心愿（心形，未加为描边，已加实心红土）、购物车（角标件数）宽 40；「加入购物车」竹金、「立即购买」红土，高 46。未登录点任一按钮先走登录弹层，登录后继续原操作'],
    '加入购物车 / 立即购买：未选过规格时先弹 P14-4；选过的直接加入，Toast「已加入购物车」；立即购买 → P16',
    '心形：点了变红 + Toast「已加入心愿单」；再点取消，Toast「已移出心愿单」',
    '商品下架：整页换成通用「这部分内容正在更新」+ 返回；从心愿单/购物车点进来同样处理',
    'from_site 一路带到订单（写入「下单场景」）；没有 from_site 取最近一次打卡的站，再没有记「直接浏览」'
  ], desc: '详情页先给价格和来历，再给评价，最后是图文。不催付款：没有倒计时、没有「仅剩 x 件」。' });

  K.add({ id: 'P14-2', page: 'P14', state: '从迤萨路口进来 · 来源档案页签', h: 1290, html: function () { return pd({ yisa: 1, from: 'yisa', tab: '来源档案', noRv: 1 }); }, notes: [
    [2, '从迤萨路口站点页进来（from_site=yisa）时，来源行改为「从迤萨路口带来 · 在{商品所属站}能看到它长在哪」'],
    [5, '来源档案：生产者卡（照片 64×64，经本人同意才放，没有就只显示名称）+ 六行：生产者、产地村寨、采收或制作时间、批次、配送方式、「在哪遇到：{站名} · 这一站的物产」，后者带「去看这一站 ›」→ P03'],
    [7, '底部只有一个主按钮「加心愿单」（红土，宽占满），下面 12 石灰小字「先记下，走完几站再决定」；左侧保留购物车入口。已在心愿单时按钮变 ghost「已在心愿单」'],
    '迤萨路口是入口站，游客刚进红河，此时不提供「加入购物车」「立即购买」，也不显示单独的心形按钮（与主按钮重复）',
    '竹金提示框「你买下后，合作社会收到：「买家在{站名}看完后下单」」：站名取 from_site，没有时取最近打卡的站，再没有整框不显示',
    '本画板为说明来源档案页签，隐藏了评价区；真实页面评价区同 P14-1'
  ], desc: '入口站不让人下单，只让人记下。等走完几站再从心愿单里买。' });

  K.add({ id: 'P14-3', page: 'P14', state: '售罄 · 到货告诉我', html: function () { return pd({ k: 'zimi', out: 1, noRv: 1 }) + K.toast('到货后微信通知你', 'okC'); }, notes: [
    [1, '主图盖 60% 米灰，中间深色胶囊「这批卖完了」宋体 15'],
    [3, '「已选」行改为说明「这批卖完了，下一批预计 {月份}」（合作社在 H05 填写，没填就只写「这批卖完了」）'],
    [7, '按钮区：「这批卖完了」置灰不可点 +「到货告诉我」红土。点「到货告诉我」先调 wx.requestSubscribeMessage（N-U08 到货提醒），同意后 Toast「到货后微信通知你」，按钮变 ghost「已订阅到货」'],
    '拒绝订阅时 Toast「没开通知也没关系，可以先加心愿单」，不重复弹',
    '售罄商品心愿单、购物车仍可加（购物车里置灰不能结算）'
  ] });

  K.add({ id: 'P14-4', page: 'P14', state: '规格选择半屏层', html: function () {
    var g = G.rice;
    return pd({}) + K.sheet('', '<div class="sp-sku-h"' + n(1) + '>' + gi('rice', 'im') + '<div><div class="sp-price">¥<b>39</b>.00</div><div class="t-cap">已选：2kg 袋装 · 寄回家 · 1 件</div></div></div>' +
      '<div class="sp-opt-t"' + n(2) + '>规格</div><div class="sp-opts"><span class="on">2kg 袋装</span><span>5kg 布袋 · ¥88</span><span class="off">1kg 试吃装 · 卖完了</span></div>' +
      '<div class="sp-opt-t"' + n(3) + '>怎么拿到<span>自提不收运费</span></div><div class="sp-opts col">' +
      '<span class="on">寄回家<small>付款后 48 小时内发出</small></span><span>柜台自提<small>' + COUNTER + '</small></span><span class="off">营地自提<small>这件不支持</small></span></div>' +
      '<div class="sp-opt-t" style="align-items:center"' + n(4) + '>数量' + stepper(1) + '</div>' +
      '<div class="row mt16" style="gap:10px"' + n(5) + '>' + K.btn('加入购物车', 'gold', 0, 'flex:1') + K.btn('立即购买', 'primary') + '</div>', { close: 1 });
  }, notes: [
    [1, '头部：商品小图 88×88 白描边上浮 30；价格随规格变化；「已选」实时更新'],
    [2, '规格胶囊：高 34、圆角 17；选中红土描边浅底；卖完的规格灰字「卖完了」不可选。价格不同的规格在胶囊里写价格'],
    [3, '配送方式：寄回家 / 柜台自提（写自提点）/ 营地自提，整行选项高 50；商品不支持的方式灰字「这件不支持」。同一商品不同配送方式在购物车里是两行'],
    [4, '数量步进器 28 高；最少 1，最多为库存与每单限购（B6 设置，默认 10）的较小值，到上限时「+」置灰并 Toast「最多买 {n} 件」'],
    [5, '从「加入购物车」打开时只显示「确定」一个按钮；从「已选」行打开时两个都显示'],
    '半屏层通用规范：顶部拖拽条、右上关闭 28；点遮罩关闭；高度随内容，最高 80%'
  ] });

  K.add({ id: 'P14-5', page: 'P14', state: '购买须知 · 森林公园商品（防火提示）', h: 1200, html: function () { return pd({ k: 'anise', tab: '购买须知', noRv: 1 }); }, notes: [
    [2, '森林公园相关商品（B6 关联站点=森林公园，或配送方式含营地自提）'],
    [5, '购买须知：发货时间、保质期、储存方式、自提、售后规则、发票，左列 64 石灰、右列 13.5 墨'],
    [6, '防火提示框：安全橙 10% 底、安全橙字，禁火图标 18；标题「森林防火提示」13.5 粗。防火期内（B4 开关）置顶显示；非防火期改为「进园区请勿携带火种」一句话'],
    '安全橙只用在这里，页面其他地方不用橙色',
    '营地自提商品在「已选」「发货」行也写清自提点；森林公园相关商品不卖明火类商品（B6 上架时审核）',
    '本画板隐藏了评价区；真实页面评价区同 P14-1'
  ] });

  /* ---------- P15 购物车 ---------- */
  function cartItem(k, o) {
    var g = G[k]; o = o || {};
    if (o.off) return '<div class="sp-it off"><span class="sp-ck-dis"></span>' + gi(k) + '<div class="bd"><div class="nm"><span>' + g.name + ' ' + g.spec + '</span></div><div class="t-cap mt4">已下架，不能结算</div><div class="ft"><span class="price">¥' + g.price + '</span><span class="sp-trash">' + i('trash', 18, '#6E6A63') + '</span></div></div></div>';
    return '<div class="sp-it"' + (o.n ? n(o.n) : '') + '><span class="check' + (o.on === false ? '' : ' on') + '"></span>' + gi(k) + '<div class="bd"><div class="nm"><span>' + g.name + '</span></div>' +
      '<span class="sk2">' + g.spec + ' ' + i('down', 12, '#6E6A63') + '</span>' +
      '<div class="ft"><span class="price">¥' + g.price + '</span><span class="row" style="gap:0">' + stepper(o.q || 1) + '<span class="sp-trash">' + i('trash', 18, '#6E6A63') + '</span></span></div></div></div>';
  }
  K.add({ id: 'P15-1', page: 'P15', state: '默认 · 三种配送方式', h: 1100, html: function () {
    return K.top('购物车', { sticky: 1 }) + '<div class="ph-body has-bar">' +
      '<div class="sp-card"' + n(1) + '><div class="sp-card-h"><span class="check on"></span>' + i('truck', 18, '#A8452F') + '<b>寄回家</b><span>合作社直接寄出</span></div>' +
      cartItem('rice', { n: 2 }) + cartItem('egg') + cartItem('basket') + cartItem('zimi', { off: 1 }) + '</div>' +
      '<div class="sp-card"' + n(3) + '><div class="sp-card-h"><span class="check on"></span>' + i('store', 18, '#A8452F') + '<b>柜台自提</b><span>' + COUNTER + '</span></div>' + cartItem('rice', { q: 2 }) + '</div>' +
      '<div class="sp-card"><div class="sp-card-h"><span class="check"></span>' + i('flag', 18, '#A8452F') + '<b>营地自提</b><span>' + CAMP + '</span></div>' + cartItem('anise', { on: false }) + '</div>' +
      '<p class="t-cap t-c mt12"' + n(4) + '>不同配送方式可以一起结算，会拆成几张订单分别处理</p></div>' +
      K.bar('<div class="sp-total"><span class="lbl"><span class="check"></span>全选</span><div class="sum"><b>¥250.00</b><span>不含运费</span></div></div>' + K.btn('去结算（5 件）', 'primary', 0, 'flex:none;padding:0 20px'), 5);
  }, notes: [
    [1, '按配送方式分组：寄回家 / 柜台自提 / 营地自提，组头高 46：组全选圆勾 20 + 图标 18 + 宋体 15 + 自提点名 12 石灰。没有商品的组不显示'],
    [2, '商品行：勾选 20、图 76×76 圆角 12、名称 14 粗；规格小块 22 高可点（打开 P14-4 改规格/配送，改配送会移到对应分组）；价格 15 红土；步进器 + 删除（垃圾桶 28 点按区）'],
    [3, '同一商品不同配送方式分两行（梯田红米既在寄回家，又在柜台自提）'],
    [4, '说明小字 12 石灰'],
    [5, '底部：全选 + 合计（只算勾选的商品，18 粗红土）+「不含运费」+ 主按钮「去结算（{n} 件）」，n 为勾选的件数（数量相加）。一件没勾时按钮置灰'],
    '删除：点垃圾桶弹确认「从购物车删掉这件？」「删掉」「再想想」；已下架、售罄商品行灰显不能勾选，只能删除',
    '数量减到 1 再点「−」不删除，「−」置灰；数量变化即时保存',
    '跨配送方式一起结算 → P16，在 P16 按配送方式和合作社拆成多个子订单',
    '未登录进购物车：先弹登录层；购物车数据跟账号走，不存本地',
    '没网：顶部离线条，「去结算」置灰并在按钮上方写「需要联网」'
  ] });
  K.add({ id: 'P15-2', page: 'P15', state: '空购物车', html: function () {
    return K.top('购物车') + K.body('<div class="empty" style="padding-top:80px"' + n(1) + '><img src="' + img.mascot('03-think') + '" alt=""><b>购物车还是空的</b><p>每件货都写着谁做的、在哪儿，去看看</p>' + K.btn('去一路好物', 'primary', 2) + '</div>' +
      '<div class="sp-sec mt24"' + n(3) + '><div class="row">' + heartRed + '<div class="grow"><b style="font-size:14px">心愿单里有 3 件</b><div class="t-cap">先记下的，可以从这里加进来</div></div><span class="link">去看看 ›</span></div></div>');
  }, notes: [
    [1, '空状态：吉祥物「思考」+ 宋体 17「购物车还是空的」+ 13 一句话'],
    [2, '「去一路好物」→ P13（switchTab）'],
    [3, '心愿单不为空时显示这张卡：「心愿单里有 {n} 件」→ P21；心愿单也空时不显示'],
    '不在空购物车页推荐「猜你喜欢」'
  ] });

  /* ---------- P16 确认订单 ---------- */
  function coItem(k, q) {
    var g = G[k];
    return '<div class="sp-it">' + gi(k, 'im s') + '<div class="bd"><div class="nm"><span>' + g.name + '</span><em>¥' + g.price + '</em></div><div class="row sb"><span class="t-cap">' + g.spec + '</span><span class="t-cap">×' + q + '</span></div></div></div>';
  }
  function coop(name, items, fee, nn, verb) {
    return '<div class="sp-card"' + (nn ? n(nn) : '') + '><div class="sp-card-h">' + i('store', 17, '#A8452F') + '<b>由' + name + (verb || '发货') + '</b></div>' + items + '<div class="sp-kv" style="border-top:1px solid #F0E9DD"><span>运费</span><span>' + fee + '</span></div></div>';
  }
  function bottomPay(sum, dis) {
    return K.bar('<div class="sp-total"><div class="sum" style="margin-left:0;text-align:left"><span style="font-size:12px">合计</span><b>' + sum + '</b></div></div>' + K.btn('提交订单并支付', 'primary' + (dis ? ' loading' : ''), 0, 'flex:none;padding:0 26px'), 6);
  }
  K.add({ id: 'P16-1', page: 'P16', state: '寄回家', h: 1060, html: function () {
    return K.top('确认订单', { sticky: 1 }) + '<div class="ph-body has-bar">' +
      '<div class="sp-mode"' + n(1) + '><span class="on">寄回家 · 3 件</span><span>柜台自提 · 2 件</span></div>' +
      '<div class="sp-addr"' + n(2) + '><span class="pin">' + i('pin', 18, '#A8452F') + '</span><div class="bd"><b>王**<small>138****6721</small></b><p>云南省昆明市五华区翠湖南路 ** 号 3 单元 502</p></div><img src="' + img.ui('chevron-right') + '" style="width:14px;opacity:.4" alt=""></div>' +
      coop('撒玛坝红米合作社', coItem('rice', 1) + coItem('egg', 1), '¥8.00', 3) + coop('东门街竹编工坊', coItem('basket', 1), '¥10.00') +
      '<div class="sp-card"' + n(4) + '><div class="sp-note-in"><span>备注</span><em>选填，合作社能看到</em></div></div>' +
      '<div class="sp-card"' + n(5) + ' style="padding:8px 14px"><div class="sp-kv"><span>商品金额</span><span>¥172.00</span></div><div class="sp-kv"><span>运费</span><span>¥18.00</span></div><div class="sp-kv tot"><span>合计</span><span class="price">¥190.00</span></div></div>' +
      '<p class="t-cap t-c mt12">提交后 15 分钟内付款，超时订单自动取消</p></div>' + bottomPay('¥190.00');
  }, notes: [
    [1, '购物车跨配送方式结算时，顶部分段切换看各部分（寄回家 / 柜台自提），一次提交、一次支付，后台拆成子订单。只有一种方式时不显示这一行'],
    [2, '地址卡：点了调 wx.chooseAddress（首次先走隐私协议弹窗 README 3.2）。姓名脱敏显示、电话中间 4 位打码；底边竹金虚线。没选地址时显示「选择收货地址」，提交时 Toast「先选一个收货地址」'],
    [3, '按合作社分组，组头「由{合作社}发货」宋体 15；每组单独运费（B6 按合作社配置），包邮写「包邮」'],
    [4, '备注：单行，点了展开输入，最多 50 字；合作社在 H02 能看到'],
    [5, '金额：商品金额、运费、合计（粗红土）。页面上不出现任何积分、抵扣、优惠券字样'],
    [6, '底部：合计 + 主按钮「提交订单并支付」；点了按钮加载中 → POST /orders（锁库存 15 分钟、按合作社拆子订单）→ wx.requestPayment'],
    '地址不在配送范围：该商品行下出现红色小字「{商品}暂时不能寄到这个地址，可以选自提」（E-ORD-04），按钮置灰',
    '价格变化：Toast「{商品}价格有变化，请确认后再提交」并刷新金额（E-ORD-03）；下架：「{商品}已下架」并从清单移除（E-ORD-02）',
    '提交按钮防重复：前端生成 request_id，5 分钟内重复提交返回同一订单；没网时按钮置灰并写「需要联网」'
  ] });

  K.add({ id: 'P16-2', page: 'P16', state: '柜台自提 · 选自提点和日期', h: 960, html: function () {
    return K.top('确认订单', { sticky: 1 }) + '<div class="ph-body has-bar">' +
      '<div class="sp-mode"><span>寄回家 · 3 件</span><span class="on">柜台自提 · 2 件</span></div>' +
      '<div class="sp-addr"' + n(1) + '><span class="pin">' + i('store', 18, '#A8452F') + '</span><div class="bd"><b>' + COUNTER + '</b><p>每天 9:00–18:00 · 撒玛坝观景台停车场旁</p></div><img src="' + img.ui('chevron-right') + '" style="width:14px;opacity:.4" alt=""></div>' +
      '<div class="sp-card" style="padding:12px 14px"' + n(2) + '><div class="row sb"><b style="font-size:14px">自提日期</b><span class="t-cap">合作社备货需要 1 天</span></div>' +
      '<div class="sp-dates"><span class="on">10月21日<small>周三</small></span><span>10月22日<small>周四</small></span><span>10月23日<small>周五</small></span><span>更多<small>7 天内</small></span></div></div>' +
      coop('撒玛坝红米合作社', coItem('rice', 2), '自提免运费', 3, '备货') +
      '<div class="sp-card"' + n(4) + '><div class="sp-note-in"><span>备注</span><em>选填，合作社能看到</em></div></div>' +
      '<div class="sp-card" style="padding:8px 14px"><div class="sp-kv"><span>商品金额</span><span>¥78.00</span></div><div class="sp-kv"><span>运费</span><span>¥0.00</span></div><div class="sp-kv tot"><span>合计</span><span class="price">¥78.00</span></div></div>' +
      '<div class="bar-note teal"' + n(5) + '>' + i('info', 15) + '备好后会通知你，到柜台出示订单里的自提码</div></div>' + bottomPay('¥268.00');
  }, notes: [
    [1, '自提点卡：柜台自提列出该商品可选的柜台，营地自提为营地服务点；点了弹半屏层选，只显示名称、开放时间、位置说明，不显示距离'],
    [2, '自提日期：最早日期 = 今天 + 合作社备货时间（B6 按商品设，默认 1 天）；横排 3 个日期 + 「更多」（7 天内），块高 50、选中红土描边'],
    [3, '自提订单组头写「由{合作社}备货」，运费「自提免运费」'],
    [5, '水田青说明条：备好后发「可以取货」订阅消息（N-U02）'],
    [6, '跨配送方式一起结算时，底部合计是全部子订单之和（寄回家 ¥190 + 自提 ¥78 = ¥268），一次支付'],
    '营地自提画法相同，自提点为「' + CAMP + '服务点」，并显示 P14-5 的防火提示条',
    '超过自提日期 3 天未取提醒一次（N-U03），7 天未取运营联系改寄或退款'
  ] });

  K.add({ id: 'P16-3', page: 'P16', state: '库存不足弹层', html: function () {
    return K.top('确认订单') + '<div class="ph-body has-bar"><div class="sp-mode"><span class="on">寄回家 · 3 件</span><span>柜台自提 · 2 件</span></div>' +
      '<div class="sp-addr"><span class="pin">' + i('pin', 18, '#A8452F') + '</span><div class="bd"><b>王**<small>138****6721</small></b><p>云南省昆明市五华区翠湖南路 ** 号 3 单元 502</p></div></div>' +
      coop('撒玛坝红米合作社', coItem('rice', 1) + coItem('egg', 2), '¥8.00') + '</div>' + bottomPay('¥235.00') +
      K.mask() + '<div class="sheet"' + n(1) + '><div class="sh-t">梯田鸭蛋只剩 1 件了</div><div class="sh-d">你选了 2 件，现在只够 1 件</div>' +
      '<div class="sp-it" style="margin-top:12px;background:var(--paper);border-radius:14px;padding:10px">' + gi('egg', 'im s') + '<div class="bd"><div class="nm"><span>梯田鸭蛋 30 枚</span><em>¥45</em></div><div class="row sb mt4"><span class="t-cap">由撒玛坝红米合作社发货</span><span class="t-cap">×2 → ×1</span></div></div></div>' +
      '<div class="row mt16" style="gap:10px"' + n(2) + '>' + K.btn('去掉这件', 'ghost', 0, 'flex:1') + K.btn('改成 1 件', 'primary') + '</div></div>';
  }, notes: [
    [1, '提交时后端返回 STOCK_SHORT（E-ORD-01）：底部弹层标题「{商品}只剩 {n} 件了」宋体 18，说明 13 写原数量与配送方式；中间商品小卡'],
    [2, '「改成 {n} 件」主按钮：改数量并刷新金额，停在本页，需要再点一次「提交订单并支付」；「去掉这件」：从本单移除（购物车里保留）。如果去掉后本单没有商品，回到 P15'],
    '多件商品同时不足时依次弹出，一次只处理一件',
    '库存为 0 时标题改为「{商品}这批卖完了」，只有「去掉这件」一个按钮',
    '弹层出现时提交按钮恢复可点；遮罩点击不关闭（必须选一个）'
  ] });

  /* ---------- P17 支付结果 ---------- */
  function paidPage() {
    return K.top('支付结果', { noBack: 1 }) + K.body('<div class="sp-res"><div class="ic-c"' + n(1) + '>' + i('okC', 40, '#fff') + '</div><h4>付款成功</h4><div class="amt">实付 <b>¥268.00</b></div><div class="t-cap mt4"' + n(2) + '>订单号 HT2610201532047 · 已拆成 2 张订单</div>' +
      '<div class="sp-ship"' + n(3) + '><div>' + i('truck', 18, '#2F7A78') + '<span>撒玛坝红米合作社会在 48 小时内发货</span></div><div>' + i('store', 18, '#2F7A78') + '<span>柜台自提 10月21日起</span><em>备好会通知你</em></div></div>' +
      '<div class="sp-btn2"' + n(4) + '>' + K.btn('看订单', 'ghost') + K.btn('继续逛', 'primary') + '</div>' +
      '<div class="sp-sub"' + n(5) + '>' + i('info', 18, '#2F7A78') + '<div><b>发货和取货，用微信通知你</b>刚才弹出的授权只用于「发货通知」「可以取货」两条服务通知，不发营销消息。没有授权也可以在「我的订单」里看进度。</div></div></div>', 'full', 'padding:0 16px');
  }
  K.add({ id: 'P17-1', page: 'P17', state: '付款成功', html: paidPage, notes: [
    [1, '成功图标：72 圆水田青 + 白色对勾；宋体 24「付款成功」；实付金额 22'],
    [2, '订单号（12 石灰，长按可复制）；拆单时写「已拆成 {n} 张订单」'],
    [3, '每个子订单一行：寄回家写「{合作社}会在 {48} 小时内发货」（时限取商品设置，默认 48）；自提写「{配送方式} {日期}起 · 备好会通知你」'],
    [4, '「看订单」→ P18 我的订单（拆单时）或订单详情（单张时）；「继续逛」→ P13'],
    [5, '订阅说明：水田青 8% 底卡片，说明授权用途（P17-2 为系统授权框）'],
    '页面不显示「返回」，左上角返回会回到 P13，不回到确认订单',
    '以服务端支付回调为准：前端拿到成功后先显示本页，同时轮询订单状态 3 次（间隔 2 秒），仍是待支付时状态行改为「正在确认付款结果」，不显示「失败」'
  ], desc: '付款后第一时间告诉游客：钱给了谁、什么时候发。' });
  K.add({ id: 'P17-2', page: 'P17', state: '付款成功 · 订阅消息授权', html: function () {
    return paidPage() + K.mask() + '<div class="sp-wx"' + n(6) + '><div class="app"><i></i>红河同路</div><h5>获取以下消息提醒</h5>' +
      '<div class="it">发货通知<span class="ok">' + i('okC', 14, '#fff') + '</span></div><div class="it">可以取货通知<span class="ok">' + i('okC', 14, '#fff') + '</span></div>' +
      '<div class="keep"><i></i>总是保持以上选择，不再询问</div><div class="bt"><span>取消</span><span class="g">允许</span></div></div>';
  }, notes: [
    [6, '微信系统订阅框（样式由微信决定，这里只是示意）：进入 P17 后自动调 wx.requestSubscribeMessage，模板 N-U01 发货通知、N-U02 可以取货；只有自提或只有寄回家时只申请对应那一条'],
    '用户点「取消」：不提示、不再弹；订单详情页会在状态卡下方给一个「开启发货通知」小入口',
    '不申请营销类模板；N-U09「订单将取消」不单独请求'
  ] });
  K.add({ id: 'P17-3', page: 'P17', state: '还没付款', html: function () {
    return K.top('支付结果', { noBack: 1 }) + K.body('<div class="sp-res"><div class="ic-c wait"' + n(1) + '>' + i('clock', 40, '#8F6210') + '</div><h4>还没付款</h4><div class="amt">待付 <b>¥268.00</b></div>' +
      '<div class="sp-count"' + n(2) + '>订单保留<b>14:32</b>超时自动取消</div>' +
      '<div class="sp-ship" style="margin-top:16px"><div>' + i('pkg', 18, '#6E6A63') + '<span>梯田红米 2kg 袋装 等 3 件</span><em>库存先给你留着</em></div></div>' +
      '<div class="sp-btn2"' + n(3) + '>' + K.btn('取消订单', 'ghost') + K.btn('继续付款', 'primary') + '</div>' +
      '<p class="t-cap mt16">也可以稍后在「我的 › 我的订单」里付款</p></div>', 'full', 'padding:0 16px');
  }, notes: [
    [1, '用户关掉微信支付（PAY_CANCELLED，E-ORD-05）：竹金浅底时钟图标 + 宋体 24「还没付款」。不出现「失败」「支付异常」'],
    [2, '倒计时：从下单起 15 分钟（B 后台可设 10–60），宋体 20 红土，每秒刷新；到 0 时整页换成「订单已超时取消，可以重新下单」（E-ORD-06）+「回购物车」'],
    [3, '「继续付款」：用原订单重新调 wx.requestPayment；「取消订单」：二次确认「取消后库存会释放」「取消订单」「再想想」，取消后 → P18 订单详情（已取消）'],
    '15 分钟内库存一直锁着；取消或超时后释放'
  ] });

  /* ---------- P18 订单 ---------- */
  function ord(o) {
    var g = G[o.k];
    return '<div class="sp-ord"' + (o.n ? n(o.n) : '') + '><div class="h">' + i('store', 16, '#A8452F') + '<b>' + g.coop + '</b><em>' + o.date + '</em></div>' +
      '<div class="st ' + o.cls + '">' + o.st + '</div>' +
      '<div class="it2">' + gi(o.k) + '<div class="bd">' + g.name + '<span>' + g.spec + (o.mode ? ' · ' + o.mode : '') + '</span></div><div class="r">¥' + g.price + '<span>×' + (o.q || 1) + '</span></div></div>' +
      '<span class="scene">' + i('pin', 12, '#7A5410') + '在' + S[o.site || g.site].name + '看完后下单</span>' +
      '<div class="ft"><span class="sum">实付 <b>' + o.sum + '</b></span>' + o.btns.map(function (b) { return K.btn(b[0], 'sm ' + (b[1] || 'ghost')); }).join('') + '</div></div>';
  }
  K.add({ id: 'P18-1', page: 'P18', state: '我的订单 · 全部', h: 1330, html: function () {
    return K.top('我的订单', { sticky: 1 }) + '<div class="ph-body">' +
      '<div class="tabs" style="position:sticky;top:0"' + n(1) + '>' + ['全部', '待付款', '等发货', '已发货', '自提', '售后'].map(function (t) { return '<span class="' + (t === '全部' ? 'on' : '') + '">' + t + '</span>'; }).join('') + '</div>' +
      ord({ k: 'basket', date: '10-20 15:32', cls: 'st-pay', st: '待付款 · 12 分钟后自动取消', sum: '¥98.00', btns: [['取消'], ['付款', 'primary']], n: 2 }) +
      ord({ k: 'egg', date: '10-20 11:05', cls: 'st-wait', st: '等合作社发货 · 预计 10月22日 前发出', sum: '¥53.00', btns: [['申请退款']], n: 3 }) +
      ord({ k: 'rice', date: '10-19 18:20', cls: 'st-go', st: '已发货 · 中通快递 7731 2845 0912', sum: '¥47.00', btns: [['查看物流'], ['确认收货', 'primary']], n: 4 }) +
      ord({ k: 'rice', q: 2, mode: '柜台自提', date: '10-19 17:46', cls: 'st-go', st: '已备好，请到' + COUNTER + '取货', sum: '¥78.00', btns: [['出示自提码', 'primary']], n: 5 }) +
      ord({ k: 'anise', date: '10-12 09:30', cls: 'st-done', st: '已完成', sum: '¥32.00', btns: [['再买一次'], ['写评价', 'line']], n: 6 }) +
      '<p class="t-cap t-c mt16">只显示近一年的订单</p></div>';
  }, notes: [
    [1, '状态页签：全部 / 待付款 / 等发货 / 已发货 / 自提 / 售后，吸顶；有待付款时页签上加红点。从「我的」四个订单图标进来定位到对应页签'],
    [2, '订单卡：组头合作社名宋体 15 + 下单时间；状态行 13 粗（待付款 红土、等发货 竹金深、已发货/已备好 水田青、已完成/已取消 石灰），文字照 F6-6 表格；待付款倒计时按分钟刷新'],
    [3, '等合作社发货：只能「申请退款」（未发货直接退，见 P19-2）'],
    [4, '已发货：「查看物流」→ 订单详情物流区（P18-2）；「确认收货」二次确认「确认已经收到了？」'],
    [5, '自提「已备好」：「出示自提码」→ P18-3；「等待备货」时不显示按钮，状态写「等待备货 · 预计 {日期} 备好」'],
    [6, '已完成：「再买一次」（F6-10 放回购物车并跳 P15，售罄的跳过并 Toast「{商品}这批卖完了，已跳过」）、「写评价」红土描边 → P20；评价过的变「看我的评价」'],
    '每张卡有竹金小条「在{站名}看完后下单」（下单场景，没有时写「直接浏览」不显示此条）',
    '一张卡 = 一个子订单（一个合作社 × 一种配送方式）；卡片整体 → P18 订单详情',
    '已取消 / 已退款：状态「已取消」/「已退款 · ¥{金额}」，按钮「再买一次」',
    '空：吉祥物 +「还没有订单」+「去一路好物」；加载更多每页 10 条'
  ] });

  function goodsBox(k, q, o) {
    var g = G[k]; o = o || {};
    return '<div class="sp-card"' + (o.n ? n(o.n) : '') + '><div class="sp-card-h">' + i('store', 17, '#A8452F') + '<b>' + g.coop + '</b>' + (o.mode ? '<span class="r chip grey" style="height:20px;font-size:11px">' + o.mode + '</span>' : '') + '</div>' +
      '<div class="sp-it" style="border-bottom:0;padding-bottom:8px">' + gi(k, 'im s') + '<div class="bd"><div class="nm"><span>' + g.name + '</span><em>¥' + g.price + '</em></div><div class="row sb"><span class="t-cap">' + g.spec + '</span><span class="t-cap">×' + q + '</span></div></div></div>' +
      '<div class="sp-src2"' + (o.n2 ? n(o.n2) : '') + '><div>' + i('users', 14, '#6E6A63') + '由' + g.coop + ' · ' + g.vil + '提供</div><div>' + i('pin', 14, '#6E6A63') + '在' + S[o.site || g.site].name + '看完后下单</div></div>' +
      '<div class="sp-tel"' + (o.n3 ? n(o.n3) : '') + '>' + i('phone', 17, '#2F7A78') + '<span>合作社电话 <b>0873-762 1018</b></span>' + K.btn('拨打', 'ghost sm') + '</div></div>';
  }
  function orderInfo(rows, nn) {
    return '<div class="sp-card" style="padding:8px 14px"' + (nn ? n(nn) : '') + '>' + rows.map(function (r) { return '<div class="sp-kv' + (r[2] ? ' tot' : '') + '"><span>' + r[0] + '</span><span' + (r[2] ? ' class="price"' : '') + '>' + r[1] + '</span></div>'; }).join('') + '</div>';
  }
  var stripes = '<img class="stripes" src="' + img.motif('contour-stripes') + '" alt="">';

  K.add({ id: 'P18-2', page: 'P18', state: '订单详情 · 已发货', h: 1240, html: function () {
    return K.top('订单详情', { sticky: 1 }) + '<div class="ph-body has-bar">' +
      '<div class="sp-st"' + n(1) + '>' + stripes + '<div class="k">已发货</div><h4>中通快递 7731 2845 0912</h4><p>发货后 10 天自动确认收货（10月29日）</p><span class="copy">' + i('copy', 13, '#fff') + '复制单号</span></div>' +
      '<div class="sp-card" style="padding:12px 14px"' + n(2) + '><div class="row sb"><b class="serif" style="font-size:15px">物流</b><span class="link">看全部物流 ›</span></div>' +
      '<div class="timeline sp-tl"><div class="on">【昆明市】快件已到达昆明转运中心<span>10-21 09:12</span></div><div>【红河县】快件已揽收<span>10-20 18:40</span></div><div>撒玛坝红米合作社已发货<span>10-20 16:02</span></div></div></div>' +
      '<div class="sp-addr" style="margin-top:12px"><span class="pin">' + i('pin', 18, '#A8452F') + '</span><div class="bd"><b>王**<small>138****6721</small></b><p>云南省昆明市五华区翠湖南路 ** 号 3 单元 502</p></div></div>' +
      goodsBox('rice', 1, { n: 3, n2: 4, n3: 5 }) +
      orderInfo([['订单号', 'HT2610191820013'], ['下单时间', '2026-10-19 18:20'], ['付款方式', '微信支付'], ['商品金额', '¥39.00'], ['运费', '¥8.00'], ['实付', '¥47.00', 1]]) +
      '</div>' + K.bar(K.btn('申请售后', 'ghost', 0, 'flex:1') + K.btn('确认收货', 'primary'), 6);
  }, notes: [
    [1, '状态卡：深田青 圆角 20，等高线纹 30% 透明；小字状态（竹金 11.5）+ 宋体 20「{快递公司} {单号}」+ 自动确认日期；「复制单号」胶囊 26 高，点了 Toast「单号已复制」'],
    [2, '物流：显示最近 3 条，最新在上（水田青圆点）；「看全部物流 ›」展开全部；快递公司支持时可改为跳快递公司小程序（运营配置）'],
    [3, '商品区按子订单：组头合作社名宋体 15，商品行图 64'],
    [4, '来源两行（米纸底 圆角 10）：「由{合作社} · {村寨}提供」「在{站名}看完后下单」'],
    [5, '合作社电话：运营核实后公开的号码，「拨打」→ wx.makePhoneCall。没有核实号码时整行不显示，改为「联系客服」'],
    [6, '底部：「申请售后」→ P19；「确认收货」二次确认后状态变「已完成」，按钮变「写评价」「再买一次」'],
    '订单信息：订单号（长按复制）、下单时间、付款方式、金额明细；不出现积分字样',
    '签收 7 天后「申请售后」消失；有售后在处理时按钮变「看售后进度」（P18-4）'
  ] });

  K.add({ id: 'P18-3', page: 'P18', state: '订单详情 · 自提已备好', h: 1160, html: function () {
    return K.top('订单详情', { sticky: 1 }) + '<div class="ph-body">' +
      '<div class="sp-st"' + n(1) + '>' + stripes + '<div class="k">已备好</div><h4>请到' + COUNTER + '取货</h4><p>自提日期 10月21日（周三）起 · 每天 9:00–18:00</p></div>' +
      '<div class="sp-code"' + n(2) + '><div class="t">自提码</div><div style="margin-top:12px">' + K.qr(31, 172) + '</div><div class="num"' + n(3) + '>428196</div><p class="t-cap">到柜台出示给店员扫码，或报 6 位数字</p><p class="t-cap">这个码不会变，截图保存也能用</p></div>' +
      '<div class="cells"' + n(4) + '><div class="cell">' + i('store', 18, '#A8452F') + '<span>' + COUNTER + '</span><span class="v">服务地图</span><img class="arr" src="' + img.ui('chevron-right') + '" alt=""></div><div class="cell">' + i('clock', 18, '#A8452F') + '<span>每天 9:00–18:00</span><span class="v"></span></div></div>' +
      goodsBox('rice', 2, { mode: '柜台自提', n2: 5 }) +
      orderInfo([['订单号', 'HT2610191746008'], ['下单时间', '2026-10-19 17:46'], ['实付', '¥78.00', 1]]) + '</div>';
  }, notes: [
    [1, '状态卡文字照 F6-6「已备好，请到{自提点}取货」，拆成小字「已备好」+ 宋体 20「请到{自提点}取货」，自提点名长时允许两行；备货中时为「等待备货」，下面不显示自提码，写「合作社还没备好货，预计 {日期}」（E-ORD-08）'],
    [2, '自提码卡：白底圆角 20；二维码 172×172 居中，订单内唯一、不刷新（与领礼码不同，领礼码会刷新）；打开本页自动把屏幕亮度调高，离开恢复'],
    [3, '6 位数字：宋体 30、字距 8，方便口头报给店员'],
    [4, '自提点：名称 → P08 服务地图定位到该柜台；开放时间。营地自提时这里加 P14-5 的防火提示条'],
    [5, '商品与来源同 P18-2'],
    '核销后状态变「已完成」，自提码卡换成「{时间}已取货」（E-ORD-09）；店员扫错柜台时店员端提示「这个订单的自提点是{自提点}」（E-ORD-07）',
    '没网：自提码用本地缓存照常显示（码不变），顶部离线条'
  ] });

  K.add({ id: 'P18-4', page: 'P18', state: '订单详情 · 售后进行中', h: 1170, html: function () {
    return K.top('订单详情', { sticky: 1 }) + '<div class="ph-body has-bar">' +
      '<div class="sp-st"' + n(1) + '>' + stripes + '<div class="k">售后处理中</div><h4>仅退款 · 等运营审核</h4><p>合作社已同意，审核后原路退回 ¥45.00</p></div>' +
      '<div class="sp-card" style="padding:12px 14px"' + n(2) + '><b class="serif" style="font-size:15px">售后进度</b><div class="timeline sp-tl">' +
      '<div class="off">退款到账<p>原路退回微信，1–3 个工作日到账</p></div>' +
      '<div class="on">运营审核中<span>10-24 10:20</span></div>' +
      '<div>撒玛坝红米合作社已同意退款<p>「运输中压碎了，很抱歉，同意退款。」</p><span>10-24 10:05</span></div>' +
      '<div>你提交了售后申请<span>10-23 20:14</span></div></div></div>' +
      '<div class="sp-card" style="padding:8px 14px"' + n(3) + '><div class="sp-kv"><span>类型</span><span>仅退款</span></div><div class="sp-kv"><span>原因</span><span>快递破损</span></div><div class="sp-kv"><span>退款金额</span><span>¥45.00</span></div>' +
      '<p style="font-size:13px;color:#4A4640;padding:4px 0">箱子一角压扁，碎了 6 个，其余完好。</p><div class="upl" style="margin:6px 0 8px"><span class="img sp-ph">照片</span><span class="img sp-ph">照片</span></div></div>' +
      goodsBox('egg', 1, {}) + '</div>' + K.bar(K.btn('联系合作社', 'ghost', 0, 'flex:1') + K.btn('联系客服', 'ghost', 0, 'flex:1'), 4);
  }, notes: [
    [1, '状态卡：「售后处理中」+「{类型} · {当前环节}」+ 一句说明'],
    [2, '售后时间线：最新在上；已发生的节点深色，当前节点水田青圆点，未发生的节点灰字（退款到账 / 已补发）。合作社的说明原文引用。流程：提交 → 合作社 24 小时内回应 → 运营审核 → 退款或补发 → 关闭'],
    [3, '申请内容：类型、原因、退款金额、说明、照片（点开看大图）'],
    [4, '底部：联系合作社（拨号）、联系客服（P31）。售后进行中不能再申请（E-AS-03「这个订单已有售后在处理」）'],
    '每次状态变化发 N-U04 售后进度；退款成功发 N-U05，状态卡变「已退款 · ¥45.00」',
    '合作社 24 小时未回应：时间线加一条「合作社超时未回应，已转运营处理」',
    '驳回时状态卡写「合作社没有同意」+ 说明，按钮加「联系客服」主按钮；不出现「失败」'
  ] });

  /* ---------- P19 申请售后 ---------- */
  K.add({ id: 'P19-1', page: 'P19', state: '发货后 · 选类型与原因', h: 1180, html: function () {
    var reasons = [['快递破损', 'on'], ['发错货'], ['质量问题'], ['少件'], ['不想要了<small>（生鲜不支持）</small>', 'off'], ['其他']];
    return K.top('申请售后', { sticky: 1 }) + '<div class="ph-body has-bar">' +
      '<div class="sp-card" style="padding:0 14px">' + '<div class="sp-it">' + gi('egg', 'im s') + '<div class="bd"><div class="nm"><span>梯田鸭蛋</span><em>¥45</em></div><div class="row sb"><span class="t-cap">30 枚 · 撒玛坝红米合作社</span><span class="t-cap">×1</span></div><div class="t-cap mt4">10月21日签收 · 10月28日前可申请</div></div></div></div>' +
      '<div class="sp-lbl">售后类型</div><div class="seg mt8"' + n(1) + '><span>退货退款</span><span class="on">仅退款</span><span>补发</span></div>' +
      '<div class="sp-lbl">原因</div><div class="field"' + n(2) + '>' + reasons.map(function (r) { return '<div class="sp-radio ' + (r[1] || '') + '"><span>' + r[0] + '</span><i></i></div>'; }).join('') + '</div>' +
      '<div class="sp-lbl"' + n(3) + '>照片<span>破损、发错、质量问题要传照片，最多 3 张</span></div><div class="upl"><span class="img sp-ph sp-upimg">照片<b>' + i('x', 10, '#fff') + '</b></span><span class="img sp-ph sp-upimg">照片<b>' + i('x', 10, '#fff') + '</b></span><span>' + i('camera', 22, '#6E6A63') + '2/3</span></div>' +
      '<div class="sp-lbl">说明</div><div class="textarea sp-ta"' + n(4) + '>箱子一角压扁，碎了 6 个，其余完好。<span class="cnt">18/200</span></div>' +
      '<div class="sp-card" style="padding:8px 14px"' + n(5) + '><div class="sp-kv"><span>退款金额</span><span class="price">¥45.00</span></div><p class="t-cap" style="padding-bottom:6px">运费不退。合作社 24 小时内回应，运营审核后原路退回</p></div></div>' +
      K.bar(K.btn('提交', 'primary'), 6);
  }, notes: [
    [1, '类型分段：退货退款 / 仅退款 / 补发（高 38）；「补发」时下方退款金额卡隐藏，「退货退款」时提交后显示合作社退货地址'],
    [2, '原因单选：快递破损、发错货、质量问题、少件、不想要了（生鲜不支持）、其他；行高 46。生鲜商品「不想要了」整行灰显不可选，点了 Toast「生鲜商品不支持「不想要了」退货」（E-AS-02）；非生鲜商品括号文字不显示'],
    [3, '照片：76×76，最多 3 张；选了破损/发错/质量问题/少件时必传至少 1 张，没传点提交时这里出现红色小字「请上传照片」'],
    [4, '说明：最多 200 字，右下计数；选「其他」时必填'],
    [5, '退款金额：默认商品实付（不含运费）；只买了多件时可改件数'],
    [6, '「提交」→ 先调订阅消息授权（N-U04 售后进度、N-U05 退款到账）→ 提交 → 回到订单详情 P18-4'],
    '条件：发货后、签收 7 天内；超过时从订单进来显示「已超过签收后 7 天，不能申请售后。有问题请联系客服」（E-AS-01）+「联系客服」',
    '没网：提交按钮置灰「需要联网」，已填内容保留'
  ] });
  K.add({ id: 'P19-2', page: 'P19', state: '未发货 · 直接退款确认', html: function () {
    return K.top('订单详情') + '<div class="ph-body has-bar"><div class="sp-st">' + stripes + '<div class="k">等合作社发货</div><h4>预计 10月22日 前发出</h4><p>撒玛坝红米合作社正在备货</p></div>' +
      goodsBox('egg', 1, {}) + '</div>' + K.bar(K.btn('申请退款', 'ghost', 0, 'flex:1')) +
      K.dialog('申请退款？', '<p>订单还没发货，提交后会自动同意，<b>¥53.00</b>（含运费）原路退回微信，1–3 个工作日到账。</p><p class="t-cap mt8">撒玛坝红米合作社那边这张单会变成「已取消」。</p>', [['再想想', 'ghost'], ['申请退款', 'primary']], { n: 1 });
  }, notes: [
    [1, '待发货订单点「申请退款」：对话框（宽 303、圆角 20），不用填原因；金额含运费全额退'],
    '点「申请退款」：按钮加载中 → 自动同意 → 原路退款；订单状态变「已退款 · ¥53.00」，Toast「已申请退款，1–3 个工作日到账」',
    '如果这时合作社刚好已填单号：提示「合作社刚刚发货了，可以收到后再申请售后」，刷新订单',
    '自提订单「等待备货」时同样可以直接退款；「已备好」后需要走 P19-1'
  ] });

  /* ---------- P20 写评价 ---------- */
  function reviewPage(o) {
    o = o || {};
    return K.top('写评价') + '<div class="ph-body has-bar">' +
      '<div class="sp-card" style="padding:0 14px"><div class="sp-it">' + gi('anise', 'im s') + '<div class="bd"><div class="nm"><span>八角</span></div><div class="t-cap">500g · 侨乡山货合作社</div><div class="t-cap">在马帮侨乡森林公园看完后下单</div></div></div></div>' +
      '<div class="sp-sec t-c"' + n(1) + '><b style="font-size:14px">给这件东西打个分</b><div class="sp-bigstar">' + [1, 2, 3, 4, 5].map(function (k) { return k <= 4 ? i('starF', 34, '#D9A441', 'color:#D9A441') : i('star', 34, '#D8CDBA'); }).join('') + '</div><div class="sp-rate-t">满意</div></div>' +
      '<div class="textarea sp-ta"' + n(2) + '>香味很足，颗粒完整。包装袋上写着大新寨和采收月份，炖肉放了两颗，家里人都说好。<span class="cnt">38/200</span></div>' +
      '<div class="sp-lbl"' + n(3) + '>晒照片<span>最多 3 张</span></div><div class="upl"><span class="img sp-ph sp-upimg">照片<b>' + i('x', 10, '#fff') + '</b></span><span>' + i('camera', 22, '#6E6A63') + '1/3</span></div>' +
      '<div class="bar-note grey mt16"' + n(4) + '>' + i('info', 15) + '审核通过后公开；合作社可以回复一条</div></div>' +
      K.bar(K.btn('提交评价', 'primary' + (o.loading ? ' loading' : '')), 5) + (o.after || '');
  }
  K.add({ id: 'P20-1', page: 'P20', state: '填写', html: function () { return reviewPage(); }, notes: [
    [1, '星级 1–5：星 34、间距 10，竹金；下方一词：1 不满意 / 2 一般 / 3 还行 / 4 满意 / 5 很满意。必选，默认 0 星时提交置灰'],
    [2, '文字：选填，最多 200 字，右下计数；超过 200 字不能再输入'],
    [3, '图片：最多 3 张，76×76，右上删除'],
    [4, '提示条：「审核通过后公开」；不开放游客之间回复'],
    [5, '「提交评价」：机器初审（敏感词、广告）+ 人工复核（B6），提交后见 P20-2'],
    '入口：已完成订单的「写评价」；一个子订单里每件商品各评一次，多件时本页上下排列多张卡',
    '评价不影响同路分，也不送任何东西'
  ] });
  K.add({ id: 'P20-2', page: 'P20', state: '提交后 · 审核通过后公开', html: function () { return reviewPage({ after: K.toast('已提交，审核通过后公开', 'okC').replace('class="toast"', 'class="toast" style="max-width:300px;white-space:nowrap"') }); }, notes: [
    'Toast 2 秒「已提交，审核通过后公开」，随后返回订单详情；订单卡按钮变「看我的评价」',
    '「看我的评价」页面显示本人的评价 + 状态标签：审核中（竹金）/ 已公开（水田青）/ 没有通过（石灰，附一句原因，如「含联系方式」）',
    '没有通过的评价可以修改一次再提交'
  ] });

  /* ---------- P21 心愿单 ---------- */
  function wish(k, o) {
    var g = G[k]; o = o || {};
    return '<div class="sp-it' + (o.off ? ' off' : '') + '"' + (o.n ? n(o.n) : '') + '>' + gi(k) + '<div class="bd"><div class="nm"><span>' + g.name + ' ' + g.spec + '</span>' + heartRed.replace('22', '18').replace('22', '18') + '</div>' +
      '<span class="chip ' + (o.off ? 'grey' : 'teal') + '" style="height:20px;font-size:11px;margin-top:4px">在' + S[o.site || g.site].short + '遇到</span>' +
      '<div class="ft"><span class="price">¥' + g.price + '</span>' + (o.out ? K.btn('到货告诉我', 'ghost sm', 0, 'height:28px;font-size:12px') : o.off ? '<span class="t-cap">已下架</span>' : K.btn('加入购物车', 'gold sm', 0, 'height:28px;font-size:12px')) + '</div>' +
      '<div class="t-cap" style="font-size:11px">' + o.d + '加入</div></div></div>';
  }
  K.add({ id: 'P21-1', page: 'P21', state: '列表', html: function () {
    return K.top('心愿单', { sticky: 1 }) + '<div class="ph-body"><p class="sp-lead"' + n(1) + '>走过的站里先记下的，按加入时间排</p>' +
      '<div class="sp-card">' + wish('rice', { site: 'samaba', d: '10月20日 ', n: 2 }) + wish('bag', { d: '10月19日 ' }) + wish('zimi', { out: 1, d: '10月19日 ', n: 3 }) + wish('tea', { d: '10月18日 ' }) + wish('cup', { off: 1, d: '10月18日 ', n: 4 }) + '</div>' +
      '<p class="t-cap t-c mt16"' + n(5) + '>心愿单不会推送降价、促销消息</p></div>';
  }, notes: [
    [1, '说明小字 12 石灰；列表按加入时间倒序'],
    [2, '每行：图 76、名称 14 粗、实心红心（点了取消，Toast「已移出心愿单」）；水田青小标「在{站}遇到」（加心愿单时的 from_site，没有时取当时最近打卡的站）；价格；「加入购物车」竹金小按钮 28 高（先弹 P14-4 选规格）；整行 → P14'],
    [3, '售罄：按钮变「到货告诉我」（订阅 N-U08）'],
    [4, '已下架：图盖「已下架」，灰字，不能加购，左滑删除'],
    [5, '不推送「心愿单降价」等营销消息'],
    '用户完成第二站时，P07「看这站好物」下方显示「你的心愿单里有 {n} 件」→ 本页',
    '左滑出现「删除」；未登录进入先弹登录层'
  ] });
  K.add({ id: 'P21-2', page: 'P21', state: '空状态', html: function () {
    return K.top('心愿单') + K.body('<div class="empty" style="padding-top:90px"' + n(1) + '><img src="' + img.mascot('03-think') + '" alt=""><b>心愿单还是空的</b><p>在哪一站看到喜欢的，点详情页的心形先记下</p>' + K.btn('去一路好物', 'primary', 2) + '</div>');
  }, notes: [
    [1, '空状态：吉祥物「思考」+ 宋体 17「心愿单还是空的」+ 13 一句话'],
    [2, '「去一路好物」→ P13「按站看」']
  ] });
})();
