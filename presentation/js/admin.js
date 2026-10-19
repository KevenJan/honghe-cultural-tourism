/* 红河同路 · 运营后台示意界面（数据均为示意） */
(function () {
  var A = 'assets/';
  var MENU = [['B1', '工作台'], ['B2', '内容中心'], ['B3', '审定中心'], ['B4', '站点与安全'], ['B5', '礼品与核销'], ['B6', '商城与合作社'], ['B7', '用户与服务'], ['B8', '数据看板']];
  var ROLE = { B1: '运营人员 王**', B2: '运营人员 王**', B3: '审定员 · 县民宗局 李**', B4: '运营人员 王**', B5: '柜台主管 · 东门街 赵**', B6: '运营人员 王**', B7: '运营人员 王**', B8: '领导查看' };

  function desk(on, path, main) {
    return '<div class="desk"><div class="bar"><i></i><i></i><i></i><span class="url">红河同路 · 运营后台 / ' + path + '</span><span class="demo">示意数据</span></div>' +
      '<div class="app"><aside class="side"><div class="logo"><img src="' + A + 'logo/logo-mark.svg" alt="">运营后台</div>' +
      MENU.map(function (m) { return '<a class="' + (m[0] === on ? 'on' : '') + '"><b>' + m[0] + '</b>' + m[1] + '</a>'; }).join('') +
      '<div class="role">当前账号<br><b style="color:#fff">' + ROLE[on] + '</b></div></aside>' +
      '<section class="main">' + main + '</section></div></div>';
  }
  function hd(t, crumb, right) { return '<div class="d-hd"><div><div class="crumb">' + crumb + '</div><h1>' + t + '</h1></div><div style="display:flex;gap:8px">' + (right || '') + '</div></div>'; }
  function kpi(k, v, e, dn) { return '<div class="d-kpi"><span>' + k + '</span><b>' + v + '</b>' + (e ? '<em class="' + (dn ? 'dn' : '') + '">' + e + '</em>' : '') + '</div>'; }
  function tabs(list, on) { return '<div class="d-tabs">' + list.map(function (t, i) { return '<span class="' + (i === on ? 'on' : '') + '">' + t + '</span>'; }).join('') + '</div>'; }
  function table(head, rows) {
    return '<table class="d-table"><thead><tr>' + head.map(function (h) { return '<th>' + h + '</th>'; }).join('') + '</tr></thead><tbody>' +
      rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>';
  }
  function st(t, c) { return '<span class="st ' + (c || '') + '">' + t + '</span>'; }

  var V = {};

  V.workbench = function () {
    return desk('B1', '工作台', hd('早上好，今天有 23 件事等你处理', 'B1 工作台', '<span class="d-btn">操作日志</span><span class="d-btn">账号与权限</span>') +
      '<div class="d-kpis">' + kpi('今日打卡人数', '1,286', '比上周同日 +12%') + kpi('看完一站的人数', '912', '完成率 71%') + kpi('今日领礼', '214', '四个柜台合计') + kpi('今日订单', '87 单', '¥6,930') + '</div>' +
      '<div class="d-row" style="flex:1">' +
      '<div class="d-card" style="flex:1.3"><h3>待我处理<small>点击直接进入对应页面</small></h3><div class="d-list">' +
      '<div>' + st('审定', 'wait') + '撒玛坝 ·「开秧门」内容卡被县文化馆退回，意见：日期写法要改<span class="n">3</span></div>' +
      '<div>' + st('纠错', 'bad') + '游客反馈：古城站音频里一处地名读音不对<span class="n">5</span></div>' +
      '<div>' + st('库存', 'red') + '东门街柜台 · 二档「竹编杯垫」余 8，低于预警线 20<span class="n">2</span></div>' +
      '<div>' + st('问答') + '问驮驮本周没答上的问题，按次数排好了<span class="n">12</span></div>' +
      '<div>' + st('售后', 'wait') + '红米订单申请退款：快递破损<span class="n">1</span></div>' +
      '</div></div>' +
      '<div class="d-card" style="flex:1"><h3>最近操作<small>全部留痕，不能删除</small></h3><div class="d-list">' +
      '<div><span class="muted-s">09:12</span>王** 发布公告「森林公园进入高火险期」并置顶</div>' +
      '<div><span class="muted-s">08:55</span>李**（民宗局）审定通过 2 张内容卡</div>' +
      '<div><span class="muted-s">08:40</span>赵**（柜台主管）同意撤销 1 条误核销</div>' +
      '<div><span class="muted-s">昨 18:20</span>宝华 xx 合作社 填写 14 个快递单号</div>' +
      '<div><span class="muted-s">昨 17:03</span>王** 更换撒玛坝观景台立牌码（旧码作废）</div>' +
      '</div></div></div>');
  };

  V.content = function () {
    function c(t, k) { return '<div class="' + k + '">' + t + '</div>'; }
    var rows = [
      ['迤萨路口', ['目录', 'ix'], ['目录', 'ix'], ['目录', 'ix'], ['目录', 'ix'], ['目录', 'ix']],
      ['森林公园', ['整理中', 'pd'], ['整理中', 'pd'], ['整理中', 'pd'], ['整理中', 'pd'], ['整理中', 'pd']],
      ['马帮古城', ['整理中', 'pd'], ['整理中', 'pd'], ['刺绣 · 待审', 'rv'], ['傣陶 · 可认识', 'ok'], ['整理中', 'pd']],
      ['撒玛坝', ['整理中', 'pd'], ['多声部 · 开秧门', 'ok'], ['乐作 · 可认识', 'ok'], ['整理中', 'pd'], ['整理中', 'pd']]
    ];
    return desk('B2', '内容中心 / 石榴籽', hd('内容中心', 'B2 内容中心 · 所有游客能看到的文字、图片、音频都在这里录入', '<span class="d-btn">导入</span><span class="d-btn pri">新建内容卡</span>') +
      tabs(['站点', '内容卡 (16)', '音频 (6)', '题目 (12)', '石榴籽', '非遗卡 (5)', '县情数据', '素材库', '首页大图'], 4) +
      '<div class="d-card"><h3>石榴籽：四站 × 五个世居民族<small>状态由审定结果决定，不能手动改成「可认识」</small></h3><div class="matrix">' +
      c('', 'h') + ['汉族', '哈尼族', '彝族', '傣族', '瑶族'].map(function (e) { return c(e, 'h'); }).join('') +
      rows.map(function (r) { return c(r[0], 'r') + r.slice(1).map(function (x) { return c(x[0], x[1]); }).join(''); }).join('') +
      '</div><div style="display:flex;gap:14px;margin-top:10px" class="muted-s"><span>' + st('可认识', 'ok') + ' 已审定上线</span><span>' + st('待审', 'wait') + ' 在审定流程中</span><span>' + st('目录', 'wait') + ' 迤萨路口一瓣写县情</span><span>' + st('整理中') + ' 游客看到「正在整理」</span></div></div>' +
      '<div class="d-card" style="flex:1"><h3>最近编辑的内容卡</h3>' + table(['标题', '站点', '字数', '关联', '审定状态', '版本'], [
        ['开秧门：大家一起下田', '撒玛坝', '96 / 120', '2 道题 · 哈尼族籽', st('文化馆退回', 'bad'), 'v3'],
        ['乐作是跳的，多声部是唱的', '撒玛坝', '112 / 120', '2 道题 · 哈尼族、彝族籽', st('已上线', 'ok'), 'v2'],
        ['马帮把各族的货连在一条路上', '马帮古城', '104 / 120', '1 道题', st('待文物部门审', 'wait'), 'v1'],
        ['红河县有 36.09 万人', '迤萨路口', '88 / 120', '引用县情数据', st('已上线', 'ok'), 'v4']
      ]) + '</div>');
  };

  V.review = function () {
    return desk('B3', '审定中心 / 待我审', hd('马帮古城 · 内容卡「马帮把各族的货连在一条路上」', 'B3 审定中心 · 我的待审 4 条', '<span class="d-btn">查看历次版本</span>') +
      '<div class="steps-h"><span class="done">✓ 草稿</span><em>→</em><span class="done">✓ 县文化馆</span><em>→</em><span class="cur">县民宗局（我）</span><em>→</em><span>文物部门</span><em>→</em><span>县文旅局发布</span></div>' +
      '<div class="d-row" style="flex:1">' +
      '<div class="mini-ph"><div class="tc"><small>马帮古城 · 迤萨</small>出门的人和等的人</div><div class="cc"><div style="background-image:url(' + A + 'sites/site-03-mabang-oldtown@750w.webp)"></div><p><b>马帮把各族的货连在一条路上</b>赶马人有汉族、哈尼族、彝族……一条路上互相照应，把山里的茶、盐、布匹运出去，又把外面的消息带回来。</p></div><div class="foot">游客手机上看到的样子</div></div>' +
      '<div class="d-col" style="flex:1.2"><div class="d-card"><h3>和上一版的区别<small>v1 → v2</small></h3><div class="diff">赶马人有汉族、哈尼族、彝族……一条路上<del>不分你我</del><ins>互相照应</ins>，把山里的茶、盐、布匹运出去，又把外面的消息带回来。<del>马帮文化是迤萨人的骄傲。</del></div></div>' +
      '<div class="d-card" style="flex:1"><h3>历次意见</h3><div class="d-list"><div>' + st('文化馆', 'ok') + '通过 · 「货物种类已核对县志」<span class="muted-s" style="margin-left:auto">10-16</span></div><div>' + st('运营') + '按文化馆意见改了一句<span class="muted-s" style="margin-left:auto">10-15</span></div></div></div></div>' +
      '<div class="d-col" style="flex:1"><div class="d-card"><h3>审查要点</h3><div class="chk">' +
      '<div><i class="on"></i>讲的是共同生活的事，落到了共同性</div><div><i class="on"></i>没有罗列差异、猎奇化、排高低</div><div><i class="on"></i>以普通话为主，没有未审定的族语</div><div><i></i>级别标签有出处（本卡无级别标签）</div></div></div>' +
      '<div class="d-card"><h3>我的意见<small>退回时必须填写</small></h3><div class="d-text">表述符合要求，同意。</div>' +
      '<div style="display:flex;gap:8px;margin-top:10px;justify-content:flex-end"><span class="d-btn">退回修改</span><span class="d-btn teal">通过，交下一环</span></div></div>' +
      '<div class="d-card"><h3 style="margin:0">已上线的内容出问题？<span class="d-btn" style="color:var(--ruby);border-color:rgba(184,50,58,.4)">申请下线</span></h3></div></div></div>');
  };

  V.site = function () {
    return desk('B4', '站点与安全 / 撒玛坝梯田', hd('站点与安全 · 撒玛坝梯田', 'B4 站点与安全', '<span class="d-btn">离线包 v3 · 重新生成</span><span class="d-btn pri">保存</span>') +
      '<div class="d-row" style="flex:1">' +
      '<div class="d-card" style="flex:1.35;padding:0;overflow:hidden;position:relative">' +
      '<svg viewBox="0 0 640 520" style="width:100%;height:100%;display:block;background:#EFE7D6">' +
      '<g fill="none" stroke="#D9CBB0" stroke-width="1.2">' + [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function (i) { return '<path d="M-20 ' + (40 + i * 60) + ' C 160 ' + (0 + i * 60) + ', 360 ' + (110 + i * 60) + ', 680 ' + (30 + i * 60) + '"/>'; }).join('') + '</g>' +
      '<path d="M40 520 C 120 420, 180 360, 260 330 S 420 250, 640 230" stroke="#C9B898" stroke-width="16" fill="none"/>' +
      '<path d="M500 0 C 470 120, 430 190, 380 250" stroke="#C9B898" stroke-width="10" fill="none" stroke-dasharray="1 0"/>' +
      '<defs><pattern id="hatch" width="10" height="10" patternTransform="rotate(45)" patternUnits="userSpaceOnUse"><rect width="5" height="10" fill="rgba(184,50,58,.25)"/></pattern></defs>' +
      '<path d="M440 150 L520 120 L560 200 L470 240 Z" fill="url(#hatch)" stroke="#B8323A" stroke-width="1.5"/>' +
      '<text x="470" y="270" font-size="14" fill="#B8323A" font-weight="700">匝道 · 不设打卡</text>' +
      '<path d="M120 420 L170 380 L200 430 L150 470 Z" fill="url(#hatch)" stroke="#B8323A" stroke-width="1.5"/>' +
      '<text x="70" y="495" font-size="14" fill="#B8323A" font-weight="700">冲沟（曾滑塌）· 避开</text>' +
      '<circle cx="300" cy="300" r="120" fill="rgba(47,122,120,.16)" stroke="#2F7A78" stroke-width="2.5" stroke-dasharray="8 5"/>' +
      '<circle cx="300" cy="300" r="9" fill="#A8452F" stroke="#fff" stroke-width="3"/>' +
      '<text x="318" y="292" font-size="15" font-weight="700" fill="#22201C">观景台停车场</text><text x="318" y="312" font-size="13" fill="#6E6A63">打卡范围半径 300 米</text>' +
      '<rect x="262" y="350" width="30" height="30" rx="4" fill="#22201C"/><text x="298" y="371" font-size="13" fill="#22201C">立牌码位置</text>' +
      '</svg></div>' +
      '<div class="d-col" style="flex:1">' +
      '<div class="d-card"><h3>开放状态</h3><div style="display:flex;gap:6px">' + st('开放', 'ok') + st('部分开放') + st('暂停') + '</div><div class="muted-s" style="margin-top:6px">选「部分开放 / 暂停」必须写原因，游客在站点页看到</div></div>' +
      '<div class="d-card"><h3>现场立牌码<small>已下载 4 次</small></h3><div style="display:flex;gap:12px;align-items:center"><div style="width:64px;height:64px;background:repeating-conic-gradient(#22201C 0 25%,#fff 0 50%) 0 0/12px 12px;border:4px solid #fff;outline:1px solid #ddd"></div><div class="muted-s">第 3 版 · 2026-10-12 生成<br>旧版本已作废，扫了会提示「请扫现场新码」</div></div><div style="display:flex;gap:8px;margin-top:10px"><span class="d-btn">下载打印</span><span class="d-btn" style="color:var(--ruby)">作废并重新生成</span></div></div>' +
      '<div class="d-card"><h3>安全设置</h3>' + table(['项目', '数值'], [['车速超过多少不让打卡', '3 米/秒（约步行的 2 倍）'], ['等多久取不到位置就提示扫码', '8 秒'], ['打卡后多久内可以回车里再答题', '6 小时']]) + '</div>' +
      '<div class="d-card"><h3>公告</h3><div class="d-list"><div>' + st('置顶 · 不能关', 'red') + '森林公园高火险期，请勿携带火种</div><div>' + st('普通') + '灌水季 11 月—次年 4 月</div></div></div>' +
      '</div></div>');
  };

  V.gift = function () {
    function sb(n, max, low) { return '<div style="display:flex;align-items:center;gap:8px"><div class="bar-h' + (low ? ' low' : '') + '" style="flex:1"><i style="width:' + Math.round(n / max * 100) + '%"></i></div><b style="width:30px;text-align:right;' + (low ? 'color:var(--terracotta)' : '') + '">' + n + '</b></div>'; }
    return desk('B5', '礼品与核销 / 柜台库存', hd('礼品与核销', 'B5 礼品与核销 · 我管理的柜台：东门街柜台', '<span class="d-btn">导出今日发放</span><span class="d-btn pri">提交补货</span>') +
      tabs(['档位规则', '礼品', '柜台库存', '店员 (6)', '核销记录', '撤销审批 (1)'], 2) +
      '<div class="d-row" style="flex:1">' +
      '<div class="d-card" style="flex:1.5"><h3>东门街柜台 · 各礼品库存<small>低于预警线自动提醒柜台主管和运营</small></h3>' + table(['档位', '礼品', '供货合作社', '库存', '预警线', '今日发放'], [
        ['一档', '梯田红米小袋', '宝华 xx 合作社', sb(120, 200), '40', '22'],
        ['一档', '竹编书签', '古城竹编作坊', sb(64, 200), '40', '9'],
        ['二档', '红米小礼盒', '宝华 xx 合作社', sb(30, 100), '20', '11'],
        ['二档', '竹编杯垫', '古城竹编作坊', sb(8, 100, 1), '20', '6'],
        ['三档', '傣陶小器', '古城傣陶作坊', sb(18, 50), '10', '3'],
        ['四档', '手艺人署名文创 + 红米', '多家', sb(9, 30), '5', '1']
      ]) + '</div>' +
      '<div class="d-col" style="flex:1">' +
      '<div class="d-card"><h3>撤销审批<small>店员 10 分钟内申请</small></h3><div class="d-list"><div>店员 李** · 14:02 误选「竹编杯垫」，游客要红米礼盒</div></div><div style="display:flex;gap:8px;justify-content:flex-end;margin-top:8px"><span class="d-btn">不同意</span><span class="d-btn teal">同意，库存退回</span></div></div>' +
      '<div class="d-card"><h3>异常提醒</h3><div class="d-list"><div>' + st('注意', 'bad') + '同一证件 1 小时内在两个柜台尝试领取</div><div>' + st('注意', 'wait') + '店员 周** 10 分钟内发放 15 份</div></div></div>' +
      '<div class="d-card"><h3>最近核销</h3>' + table(['时间', '领取人', '档位', '店员'], [['15:20', '张** 2381', '二档', '李**'], ['15:12', '王** 0457', '一档', '李**'], ['15:05', '陈** 1190', '三档', '周**']]) + '</div>' +
      '</div></div>');
  };

  V.shop = function () {
    return desk('B6', '商城与合作社 / 订单', hd('商城与合作社', 'B6 商城与合作社', '<span class="d-btn">商品 (24)</span><span class="d-btn">合作社 (9)</span><span class="d-btn pri">本月对账</span>') +
      tabs(['全部订单', '待发货 (18)', '超时未发 (2)', '售后 (1)', '评价待审 (6)'], 0) +
      '<div class="d-row" style="flex:1">' +
      '<div class="d-card" style="flex:1.6"><h3>订单<small>「在哪一站之后下单」用于统计各站带货效果</small></h3>' + table(['订单', '商品', '在哪一站之后下单', '配送', '合作社', '状态'], [
        ['…3021', '梯田红米 2kg ×2', '撒玛坝梯田', '寄回家 · 上海', '宝华 xx 合作社', st('待发货', 'wait')],
        ['…3018', '八角 500g', '森林公园', '营地自提', '迤萨山货合作社', st('已备好', 'ok')],
        ['…3007', '傣族土陶小杯', '马帮古城', '寄回家 · 昆明', '古城傣陶作坊', st('超时 52 小时', 'red')],
        ['…2996', '竹编果篮', '马帮古城', '柜台自提', '古城竹编作坊', st('已完成', 'ok')],
        ['…2980', '梯田红米 2kg', '撒玛坝梯田', '寄回家 · 杭州', '宝华 xx 合作社', st('退款中', 'bad')],
        ['…2975', '本地茶 100g', '迤萨路口（心愿单）', '寄回家 · 南京', '迤萨山货合作社', st('已发货', 'ok')]
      ]) + '</div>' +
      '<div class="d-col" style="flex:1">' +
      '<div class="d-card"><h3>10 月对账<small>一期线下结算，二期微信分账</small></h3>' + table(['合作社', '订单', '应结'], [['宝华 xx 合作社', '46', '¥3,812'], ['古城傣陶作坊', '19', '¥1,264'], ['古城竹编作坊', '12', '¥1,056'], ['迤萨山货合作社', '28', '¥1,140']]) + '<div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px"><span class="muted-s">每月 5 日出单，合作社确认后打款</span><span class="d-btn">导出对账单</span></div></div>' +
      '<div class="d-card"><h3>来源档案<small>没有档案不能上架</small></h3><div class="d-list"><div>' + st('需更新', 'wait') + '梯田红米：新一批 11 月采收，请补批次</div><div>' + st('完整', 'ok') + '其余 23 件商品</div></div></div>' +
      '</div></div>');
  };

  V.service = function () {
    return desk('B7', '用户与服务 / 未答问题', hd('用户与服务', 'B7 用户与服务', '<span class="d-input" style="width:260px">按手机尾号或订单号查用户</span>') +
      tabs(['未答问题 (12)', '问答库 (138)', '留言与纠错 (5)', '敏感词', '用户查询'], 0) +
      '<div class="d-row" style="flex:1">' +
      '<div class="d-card" style="flex:1.5"><h3>问驮驮没答上的问题<small>按本周被问的次数排序；写好答案后要送审，审完才进问答库</small></h3>' + table(['游客问的', '次数', '处理'], [
        ['长街宴哪天办？游客能不能参加？', '46', st('已写答案 · 文化馆审定中', 'wait')],
        ['梯田可以下去走吗？', '31', st('待整理', 'bad')],
        ['古城晚上几点关门？', '22', st('已上线', 'ok')],
        ['礼品可以帮家人代领吗？', '17', st('已上线', 'ok')],
        ['哪里能吃到红米饭？', '15', st('待整理', 'bad')],
        ['森林公园能不能露营做饭？', '9', st('已写答案 · 文旅局审定中', 'wait')]
      ]) + '</div>' +
      '<div class="d-col" style="flex:1">' +
      '<div class="d-card"><h3>本周问答情况</h3><div class="d-kpis" style="grid-template-columns:1fr 1fr">' + kpi('游客提问', '2,140') + kpi('答上率', '82%', '上周 76%') + '</div></div>' +
      '<div class="d-card"><h3>留言与纠错</h3><div class="d-list"><div>' + st('纠错', 'bad') + '古城音频一处地名读音不对 → 已转县文化馆</div><div>' + st('建议', 'wait') + '希望观景台柜台早点开门 → 已转景区</div><div>' + st('表扬', 'ok') + '店员很耐心</div></div></div>' +
      '<div class="d-card"><h3>用户查询<small>姓名、证件号一律脱敏</small></h3>' + table(['用户', '走过', '分数', '礼品'], [['尾号 6621 · 张**', '2 站', '64', '二档已领']]) + '</div>' +
      '</div></div>');
  };

  V.dash = function () {
    var pts = [42, 48, 45, 60, 88, 95, 52, 50, 58, 55, 64, 102, 118, 70, 62, 66, 71, 69, 110, 131, 75, 72, 80, 78, 84, 126, 140, 90, 86, 92];
    var path = pts.map(function (v, i) { return (i ? 'L' : 'M') + (i * 20 + 10) + ' ' + (160 - v); }).join(' ');
    return desk('B8', '数据看板', hd('数据看板 · 2026 年 10 月', 'B8 数据看板 · 每天凌晨更新', '<span class="d-btn">按站</span><span class="d-btn">按月</span><span class="d-btn pri">导出月度简报</span>') +
      '<div class="d-kpis">' + kpi('本月到访人数', '23,410', '环比 +18%') + kpi('单站完成率', '71%', '目标 ≥ 65%') + kpi('本月领礼', '4,862', '只走 1–2 站的占 63%') + kpi('本月订单金额', '¥18.6 万', '复购率 14%') + '</div>' +
      '<div class="d-row" style="flex:1">' +
      '<div class="d-col" style="flex:1.5"><div class="d-card"><h3>每天到访人数<small>周末明显更多</small></h3><svg class="chart" viewBox="0 0 610 170"><g stroke="#EEE7DB">' + [40, 80, 120, 160].map(function (y) { return '<line x1="0" x2="610" y1="' + y + '" y2="' + y + '"/>'; }).join('') + '</g><path d="' + path + ' L590 160 L10 160 Z" fill="rgba(47,122,120,.12)"/><path d="' + path + '" fill="none" stroke="#2F7A78" stroke-width="2.5"/></svg></div>' +
      '<div class="d-card" style="flex:1"><h3>从打卡到下单，每一步还剩多少人</h3><div class="funnel">' +
      [['打卡', 100, '23,410'], ['看完内容', 71, '16,620'], ['答完题', 64, '14,980'], ['领礼', 21, '4,862'], ['下单', 9, '2,107']].map(function (f) { return '<div><span>' + f[0] + '</span><i style="width:' + (f[1] * 4.6) + 'px">' + f[2] + '</i></div>'; }).join('') + '</div></div></div>' +
      '<div class="d-col" style="flex:1"><div class="d-card"><h3>各站到访</h3><div class="sitebars">' +
      [['迤萨路口', 92], ['森林公园', 38], ['马帮古城', 81], ['撒玛坝', 66]].map(function (s) { return '<div><span>' + s[0] + '</span><div class="bar-h"><i style="width:' + s[1] + '%"></i></div><span class="muted-s">' + Math.round(s[1] * 98) + '</span></div>'; }).join('') + '</div></div>' +
      '<div class="d-card"><h3>该是 100% / 该越来越少的</h3>' + table(['指标', '本月'], [['线上内容有完整审定记录', st('100%', 'ok')], ['行驶中想打卡被拦下', '312 次 ' + st('↓ 41%', 'ok')], ['问驮驮答上率', '82%'], ['退款率', '1.2%']]) + '</div></div></div>');
  };

  window.HHAdmin = V;
  document.querySelectorAll('.dw[data-admin]').forEach(function (el) {
    var fn = V[el.dataset.admin];
    if (fn) el.innerHTML = fn(el);
  });
})();
