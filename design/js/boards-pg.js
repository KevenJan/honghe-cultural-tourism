/* 同心石榴、籽详情、一句红河话、问驮驮（P09–P12） */
(function () {
  var K = window.K, i = K.i, img = K.img;

  function hero() {
    return '<div class="pg-hero"><div class="k">交往交流交融 · 研学</div><h4>同地共生，像石榴籽一样</h4><p>五个世居民族，住在同一个县</p><img src="' + img.pgHero + '" alt=""></div>';
  }
  function pgPage(inner, extra) {
    return K.top('同心石榴') + K.body(hero() +
      '<div class="switch2"' + K.n(1) + '><span class="on">按石榴籽看</span><span>按一件事看</span></div>' +
      inner + (extra || ''));
  }
  function zoom(main, sats, panel) {
    var pos = [[72, 210], [250, 210], [72, 430], [250, 430]];
    var html = '<div class="zoom open"><div class="dim"></div><svg class="lines" viewBox="0 0 375 812" style="opacity:1">' +
      sats.map(function (s, i0) { return '<line x1="187" y1="330" x2="' + pos[i0][0] + '" y2="' + pos[i0][1] + '" stroke="#D9A441" stroke-width="1.5"/>'; }).join('') + '</svg>' +
      '<div class="z-seed main" style="left:112px;top:255px;width:150px;height:150px"><b>' + main[0] + '</b><span>' + main[1] + '</span></div>';
    sats.forEach(function (s, i0) {
      html += '<div class="z-seed sat' + (s[2] ? ' pending' : '') + '" style="left:' + (pos[i0][0] - 27) + 'px;top:' + (pos[i0][1] - 27) + 'px;opacity:1">' + s[0] + '</div>' +
        '<div class="z-cap" style="left:' + pos[i0][0] + 'px;top:' + (pos[i0][1] + 32) + 'px;opacity:1">' + s[1] + '</div>';
    });
    return html + '<div class="z-close" style="opacity:1">' + K.ui('close', 'width:16px;filter:invert(1)') + '</div><div class="z-panel" style="transform:none">' + panel + '</div></div>';
  }

  K.add({ id: 'P09-1', page: 'P09', state: '已点亮两瓣', h: 900, html: function () {
    return pgPage('<div' + K.n(2) + '>' + K.pg({ lit: 'yisa,samaba', done: 'samaba-hani', style: 'margin-top:4px' }) + '</div>' +
      '<div class="pg-chips"' + K.n(3) + '>' + K.chip('已点亮 2 瓣') + K.chip('认识 1 颗籽', 'gold') + '</div>' +
      '<p class="t-cap t-c mt8">每瓣五颗大籽是世居五族，点一颗看看</p>' +
      '<div class="p-card mt12"' + K.n(4) + '><b class="serif" style="font-size:14px">图例</b><div class="row mt8" style="flex-wrap:wrap;gap:8px 14px;font-size:12px">' +
      '<span class="row" style="gap:6px"><i style="width:14px;height:16px;border-radius:50%;background:#E4D6C3"></i>未打卡</span>' +
      '<span class="row" style="gap:6px"><i style="width:14px;height:16px;border-radius:50%;background:#B8323A"></i>可认识</span>' +
      '<span class="row" style="gap:6px"><i style="width:14px;height:16px;border-radius:50%;background:rgba(184,50,58,.5);border:1.5px dashed #fff"></i>整理中</span>' +
      '<span class="row" style="gap:6px"><i style="width:14px;height:16px;border-radius:50%;background:#B8323A;box-shadow:0 0 0 2px #D9A441"></i>已认识</span></div></div>');
  }, desc: '石榴把四站和五个世居民族串在一起。点亮靠打卡，金边靠看完并答过。', notes: [
    [1, '切换条高 36。默认「按石榴籽看」'],
    [2, '石榴按 pomegranate-layout.json 绘制：4 瓣 × 5 颗命名大籽 + 装饰小籽。小籽不可点。五颗命名籽大小、颜色一致，没有民族专属配色'],
    [3, '统计胶囊：已点亮的瓣数、认识的籽数'],
    [4, '图例默认折叠，这里展开给开发对照：米色未打卡 / 石榴红可认识 / 半透明虚线整理中 / 金边已认识'],
    '从打卡成功或站点页带 site 进来：自动放大这一瓣中间那颗可认识的籽；没有可认识的就只闪一下'
  ] });

  K.add({ id: 'P09-2', page: 'P09', state: '点籽放大 · 可认识', html: function () {
    return pgPage(K.pg({ lit: 'yisa,samaba', done: 'samaba-hani' })) + zoom(
      ['哈尼族', '在撒玛坝'],
      [['彝族', '一起跳乐作'], ['汉族', '一起住在红河', 1], ['傣族', '一起住在红河', 1], ['瑶族', '一起住在红河', 1]],
      '<h5' + K.n(1) + '>同一片田，一起过日子</h5><p>开秧门、长街宴、乐作，都是住在这片梯田上的人一起做的。</p>' + K.btn('认识这颗籽', 'gold block', 2));
  }, notes: [
    [1, '底部面板深田青、圆角 20：标题宋体 18 + 一句话'],
    [2, '「认识这颗籽」竹金按钮 → P10。四周的籽直径 54，金线连到中间；点四周某颗，它成为新的中心，320ms'],
    '点遮罩、关闭、安卓返回或右滑：先收起放大层，不退出页面。系统开了「减弱动态效果」时改为直接淡入'
  ] });

  K.add({ id: 'P09-3', page: 'P09', state: '点籽放大 · 整理中', html: function () {
    return pgPage(K.pg({ lit: 'samaba' })) + zoom(
      ['瑶族', '在撒玛坝'],
      [['哈尼族', '一起住在红河'], ['彝族', '一起住在红河'], ['汉族', '一起住在红河', 1], ['傣族', '一起住在红河', 1]],
      '<h5>我们也住在红河县</h5><p' + K.n(1) + '>这颗籽的内容正在和县文化馆、民宗局一起整理</p><p style="margin-top:8px">这一瓣已经可以认识：</p><div class="links"' + K.n(2) + '><button>哈尼族</button><button>彝族</button></div>');
  }, notes: [
    [1, '整理中的籽：不编内容。一句「我们也住在红河县」+ 正在整理'],
    [2, '按钮切到这一瓣已经可以认识的籽，不跳走']
  ] });

  K.add({ id: 'P09-4', page: 'P09', state: '点籽放大 · 迤萨是目录', html: function () {
    return pgPage(K.pg({ lit: 'yisa,samaba' })) + zoom(
      ['哈尼族', '在迤萨路口'],
      [['汉族', '一起住在红河'], ['彝族', '一起住在红河'], ['傣族', '一起住在红河'], ['瑶族', '一起住在红河']],
      '<h5' + K.n(1) + '>红河县是全国最大的哈尼族聚居县。</h5><p>在哪一站可以认识更多：</p><div class="links"><button>撒玛坝 · 多声部、开秧门</button></div>');
  }, notes: [[1, '迤萨路口这一瓣是目录：一句县情 + 列出该民族有内容的站。看过加一个小点，不会变成「已认识」'], '点按钮切到那一瓣那颗籽'] });

  K.add({ id: 'P09-5', page: 'P09', state: '未登录', h: 860, html: function () {
    return K.top('同心石榴') + K.body('<div class="bar-note gold"' + K.n(1) + '>登录后，打过卡的瓣会亮起来</div>' + hero() +
      '<div class="switch2"><span class="on">按石榴籽看</span><span>按一件事看</span></div>' + K.pg({ lit: '' }) +
      '<p class="t-cap t-c mt8">四瓣都是米色。可以看，点亮和答题要登录</p>');
  }, notes: [[1, '未登录不弹登录层，只在顶部提示。看内容不用登录']] });

  K.add({ id: 'P09-6', page: 'P09', state: '按一件事看', h: 980, html: function () {
    var items = [
      ['04-long-table-feast', '长街宴', '各家端出一桌菜，连成一条街', '撒玛坝', '哈尼族、彝族'],
      ['03-kaiyangmen', '开秧门', '春天插下第一把秧，各寨一起下田', '撒玛坝', '哈尼族'],
      ['02-lezuo-dance', '乐作', '大家围成圈一起跳', '撒玛坝', '哈尼族、彝族']
    ];
    return K.top('同心石榴') + K.body(hero() + '<div class="switch2"><span>按石榴籽看</span><span class="on">按一件事看</span></div>' +
      items.map(function (it, idx) {
        return '<div class="p-card row mt12" style="align-items:flex-start;gap:12px"' + (idx ? '' : K.n(1)) + '><div style="width:92px;height:72px;border-radius:12px;background:url(' + img.heritage(it[0], 345) + ') center/cover;flex:none"></div><div class="grow"><b class="serif">' + it[1] + '</b><p class="t-sub">' + it[2] + '</p><div class="row mt4" style="flex-wrap:wrap;gap:4px">' + K.chip(it[3], 'teal', 'height:20px;font-size:11px') + K.chip(it[4], '', 'height:20px;font-size:11px') + '</div></div></div>';
      }).join('') + '<p class="t-cap t-c mt12">没有审定内容的条目不显示</p>');
  }, notes: [[1, '每条：插画 92×72、一句话、涉及的站和籽。点籽胶囊去 P10。内容来自后台「共同主题」']] });

  K.add({ id: 'P09-7', page: 'P09', state: '四瓣全亮', html: function () {
    return pgPage('<div style="position:relative">' + K.pg({ lit: 'yisa,forest,oldtown,samaba', done: 'samaba-hani,samaba-yi' }) +
      '<div style="position:absolute;left:50%;top:46%;width:250px;height:250px;margin:-125px 0 0 -125px;border-radius:50%;border:3px solid #D9A441;box-shadow:0 0 0 8px rgba(217,164,65,.25);pointer-events:none"' + K.n(1) + '></div></div>' +
      '<div class="pg-chips">' + K.chip('已点亮 4 瓣') + K.chip('认识 2 颗籽', 'gold') + '</div>') + K.toast('四瓣都亮了 · 称号「长廊同心人」');
  }, notes: [[1, '四站都打过卡（不要求答完）后，下次进入播一圈金色石榴纹，1.2 秒，只播一次'], '同时：我的页头像框换成石榴纹，同路册封面盖「长廊同心人」章'] });

  function seed(tab, extra, bar) {
    return K.top('哈尼族 · 撒玛坝') + K.body('<div class="seg"' + K.n(1) + '><span class="' + (tab === 0 ? 'on' : '') + '">非遗</span><span class="' + (tab === 1 ? 'on' : '') + '">答一答</span><span class="' + (tab === 2 ? 'on' : '') + '">来源</span></div>' + extra, bar ? 'has-bar' : '') +
      (bar || '<div class="with"' + K.n(4) + '><span class="muted">和谁一起</span><div class="chips"><span>彝族 · 乐作</span><span>各族 · 长街宴</span></div></div>');
  }
  K.add({ id: 'P10-1', page: 'P10', state: '非遗', h: 980, html: function () {
    return seed(0, '<div class="hc"' + K.n(2) + '><div class="im" style="background-image:url(' + img.heritage('01-hani-polyphony') + ')"><span class="chip teal">国家级非遗</span></div><div class="bd"><b>哈尼多声部</b><p>一人领，众人和，几个声部一起唱出来。</p></div></div>' +
      '<div class="hc"><div class="im" style="background-image:url(' + img.heritage('03-kaiyangmen') + ')"><span class="chip grey">节令活动</span></div><div class="bd"><b>开秧门与仰阿娜</b><p>开秧门时大家一起下田插秧。这是节令活动，不标非遗。</p></div></div>' +
      '<p class="t-cap t-c mt8">示意内容 · 以县文化馆审定稿为准</p>');
  }, notes: [
    [1, '页签：非遗 / 答一答 / 来源。录音审定上线后多一个「一句话」'],
    [2, '非遗卡：插画、级别标签、名称、一句话。级别只用五种：国家级非遗、省级非遗、节令活动、生活习俗、手艺。前两种必须有出处'],
    [4, '底部固定「和谁一起」。点籽跳那颗籽的 P10，点主题跳「按一件事看」的对应条目'],
    '滚到最后一张卡或听完音频，记「看完」。看完且答过：Toast「认识了这颗籽」，回到石榴时这颗带金边'
  ] });

  K.add({ id: 'P10-2', page: 'P10', state: '答一答 · 不在时间窗', html: function () {
    return seed(1, '<div class="q-card mt12"' + K.n(2) + '><div class="n">这颗籽的题 · 计入这一站 3 道题</div><h4 class="serif" style="font-size:17px;margin-top:6px">多声部是怎么唱的？</h4>' +
      '<div class="opt" style="opacity:.45">一人领，众人和</div><div class="opt" style="opacity:.45">一个人独唱</div>' +
      '<p class="t-cap mt8">到撒玛坝打卡后可以答</p></div>');
  }, notes: [[2, '没打卡或时间窗过了：题干可见，选项置灰。不额外加分，不改变每站 30 分上限'], '在这里答过的题，站点答题里算已答，反过来也一样'] });

  K.add({ id: 'P10-3', page: 'P10', state: '来源', html: function () {
    return seed(2, '<div class="src-card"' + K.n(2) + '><div><span>审定</span>县文化馆、民宗局</div><div><span>日期</span>2026 年 9 月</div><div><span>出处</span>国家级非遗名录 · 哈尼族多声部民歌</div><div><span>级别</span>国家级非遗</div></div>' +
      '<span class="link" style="display:block;text-align:center;margin-top:16px"' + K.n(3) + '>我发现内容有误</span>');
  }, notes: [[2, '来源页签列出审定单位、日期、出处。级别标签没有出处的，后台不能保存'], [3, '「我发现内容有误」→ P30，自动带上页面、卡片和内容版本']] });

  K.add({ id: 'P11-1', page: 'P11', state: '一句红河话', html: function () {
    return K.top('一句红河话') + K.body('<div class="say"><span class="chip gold"' + K.n(1) + '>录音审定后上线</span><h4>欢迎来家里坐</h4>' +
      '<div class="listen"' + K.n(2) + '>' + K.ui('play', 'width:18px;filter:invert(1)') + '听当地说法</div><div class="by">某某（传承人）录音 · 县文化馆审定</div></div>' +
      '<div class="q-card mt16"><div class="n">听一听，这句是什么意思？（不计分）</div>' +
      '<div class="opt"><b>1</b>欢迎来家里坐</div><div class="opt"><b>2</b>我们去赶街</div><div class="opt"><b>3</b>慢慢走</div></div>' +
      '<img src="' + img.mascot('06-guide') + '" style="width:110px;margin:12px auto 0" alt="">' +
      '<div class="foot-note"' + K.n(3) + '>学一句当地话，是为了更好地交流</div>');
  }, desc: '一期·条件：录音审定且有授权书编号才打开。', notes: [
    [1, '上线后去掉这个标签。只放录音，不写族语文字'],
    [2, '听当地说法。不做跟读、不做打分，不影响籽状态'],
    [3, '底部固定这一句，不能改成测验口吻']
  ] });

  function ask(body) {
    return K.top('问驮驮') + K.body('<div class="ask-hi"><img src="' + img.mascot('06-guide') + '" alt=""><div class="bub"' + K.n(1) + '>我只回答县里审定过的问题。答不上的，会告诉你去问谁。</div></div>' +
      '<div class="faq"' + K.n(2) + '><span>哪里停车</span><span>厕所在哪</span><span>礼品怎么领</span><span>灌水季是什么时候</span></div>' + body, 'has-bar') +
      K.bar('<span class="ask-in"' + K.n(5) + '>输入你想问的</span>' + K.btn('发送', 'primary', 0, 'flex:none'));
  }
  K.add({ id: 'P12-1', page: 'P12', state: '答上了', html: function () {
    return ask('<div class="me-q">撒玛坝灌水季是什么时候？</div><div class="bot-a"' + K.n(3) + '><p>每年 11 月到次年 4 月。这段时间梯田蓄满水，早上和傍晚最好看。</p><div class="src">来源：红河县文旅局 · 已审定</div>' +
      '<div class="row mt8" style="gap:8px"><span class="chip grey">有用</span><span class="chip grey">没用</span></div></div>');
  }, desc: '一期是查问答库，不接会自己生成答案的模型。', notes: [
    [1, '开场气泡固定这句，说明边界'],
    [2, '常见问题最多 8 个，后台配置。点了当作一次提问'],
    [3, '命中：答案 + 绿色来源行。可以带按钮（去站点、去服务地图、拨电话）。下面「有用 / 没用」'],
    [5, '输入框最多 50 字。空或超长时发送置灰'],
    '对话不给别人看。本地留最近 20 条，退出登录后清空'
  ] });

  K.add({ id: 'P12-2', page: 'P12', state: '没答上', html: function () {
    return ask('<div class="me-q">长街宴哪天办？</div><div class="bot-a no"' + K.n(3) + '><p>这个问题还没有审定过的说法。可以问柜台工作人员：</p>' +
      K.btn('撒玛坝观景台服务点 · 拨打电话', 'teal sm mt8', 4) + '<div class="src">你的问题已记下，整理审定后会补上</div></div>');
  }, notes: [[3, '没命中：不编答案。给最近柜台的电话（今天打过卡的站优先，否则游客中心）'], [4, '问题写入「未答问题」，同义的合并计数，进后台待整理'], '点「没用」后气泡下显示「谢谢，我们会改进」，该条计数进后台待优化'] });

  K.add({ id: 'P12-3', page: 'P12', state: '不回答的问题', html: function () {
    return ask('<div class="me-q">……</div><div class="bot-a"' + K.n(3) + '><p>这个问题我不方便回答。关于红河的民族文化，可以看看各站经过审定的介绍。</p>' + K.btn('去看四站', 'primary sm mt8') + '</div>');
  }, notes: [[3, '敏感词命中：固定这句回复 +「去看四站」。不检索问答库，记录并标「敏感」'], '标准回复由民宗局、网信部门指导，后台可改，界面不自己发挥'] });
})();
