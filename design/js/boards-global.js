/* 全局组件与通用状态（规格 README 第 3 节） */
(function () {
  var K = window.K, i = K.i;

  function home() { return K.x.home({ login: 0 }); }

  K.add({ id: 'G-01', page: 'G', state: '登录记分', html: function () {
    return home() + K.sheet('登录后才能记下你的到访和分数',
      '<p class="t-sub t-c mt12"' + K.n(1) + '>我们只用你的微信身份记分，不获取手机号</p>' +
      '<p class="t-sub t-c mt4">登录即同意<span class="link">《用户协议》</span><span class="link">《隐私保护指引》</span></p>' +
      '<div class="mt16"' + K.n(2) + '>' + K.btn('登录记分', 'primary block') + K.btn('先看看', 'ghost block mt8') + '</div>', { n: 3 });
  }, desc: '看内容不用登录。只有打卡、答题、领礼、下单、收藏、反馈才弹出这一层。', notes: [
    [1, '两行说明 13 号石灰色，居中。不要求头像昵称，不获取手机号'],
    [2, '主按钮「登录记分」高 46；「先看看」幽灵按钮。登录成功后弹层收起，继续执行用户刚才点的那个操作，不让他再点一次'],
    [3, '底部弹层：顶圆角 20，拖条 36×4，标题宋体 18。点遮罩等同「先看看」'],
    '默认头像用中性旅人；昵称默认「红河同路人 + 4 位数字」，可在设置里改',
    '登录态 30 天，过期后静默重登，失败才再弹这一层'
  ] });

  K.add({ id: 'G-02', page: 'G', state: '隐私协议', html: function () {
    return home() + K.dialog('使用前请看一下',
      '<p>取位置：只在你点「我到了」时取一次，用来确认你到了这一站。</p><p class="mt8">证件号：只用来保证每个证件每年领一次礼品，我们只保存加密后的结果。</p><p class="mt8">收货信息：只用来寄送你买的东西。</p>',
      [['同意并继续', 'primary'], ['不同意', 'ghost']], { n: 1 });
  }, desc: '首次打开不弹。第一次要取位置、扫码、选地址或保存图片时才出现。', notes: [
    [1, '自定义弹窗：左右边距 36，圆角 20，标题宋体 18，正文 14 左对齐。按钮并排，左次右主'],
    '不同意：本次操作取消，Toast「不同意也可以继续看内容」',
    '对应微信 wx.onNeedPrivacyAuthorization，不要再用系统默认弹窗文案'
  ] });

  K.add({ id: 'G-03', page: 'G', state: '位置权限被拒绝', html: function () {
    return K.top('到达打卡') + K.body('<div class="empty"><img src="' + K.img.mascot('03-think') + '" alt=""><b>需要位置权限才能确认到达</b><p>你之前没有允许取位置。可以去设置打开，也可以扫现场立牌码。</p></div>') +
      K.sheet('', '<div class="mt8"' + K.n(1) + '>' + K.btn('去设置打开', 'primary block') + K.btn('扫现场立牌码', 'ghost block mt8') + '</div>', { n: 2 });
  }, notes: [
    [1, '不再反复弹系统授权框。主按钮 wx.openSetting；次按钮调起扫码，只认本小程序的立牌码'],
    [2, '这一层只在用户拒绝过位置权限、又点了「我到了」时出现']
  ] });

  K.add({ id: 'G-04', page: 'G', state: '没网 · 顶部提示条', html: function () {
    return K.top('四站') + K.offline() + K.body('<p class="t-sub mt12"' + K.n(1) + '>已下载的站点可以照常看、听、打卡。领礼码、支付、提交证件和反馈需要联网，按钮会置灰并写「需要联网」。</p>' +
      '<div class="p-card mt16"><b class="serif">可以离线做的</b><p class="t-sub mt4">看导览、听已下载的音频、扫立牌码打卡、答题（分数标「待同步」）</p></div>' +
      '<div class="p-card mt12"><b class="serif">必须联网的</b><p class="t-sub mt4">领礼码、核销、支付、提交证件、提交反馈</p></div>');
  }, notes: [
    [1, '提示条贴在导航栏下面：浅灰底、12 号字、断网图标。网络恢复后消失；有待同步记录时再 Toast「已恢复网络，记录已同步」'],
    '弱网：请求超过 8 秒，按钮保持加载态，超时提示「网络不太好，再试一次」，已填内容保留'
  ] });

  K.add({ id: 'G-05', page: 'G', state: '加载失败', html: function () {
    return K.top('撒玛坝梯田') + K.body('<div class="empty"' + K.n(1) + '><img src="' + K.img.mascot('03-think') + '" alt=""><b>没加载出来</b><p>网络不太好，再试一次</p>' + K.btn('再试一次', 'primary') + '</div>');
  }, notes: [[1, '出错统一用这一版：吉祥物「思考」宽 132、标题宋体 17、说明 13、按钮宽 180。不用全屏转圈'], '首次加载用骨架屏，骨架块圆角和真实组件一致'] });

  K.add({ id: 'G-06', page: 'G', state: '空', html: function () {
    return K.top('我的订单') + K.body('<div class="empty"' + K.n(1) + '><img src="' + K.img.mascot('04-walk') + '" alt=""><b>还没有订单</b><p>走过的站里，有合作社的红米和手作</p>' + K.btn('去看看好物', 'primary') + '</div>');
  }, notes: [[1, '空状态三件套：吉祥物 + 一句话 + 一个下一步。各页文案不同，见各功能点'], '列表页、详情页都要做：加载中、空、出错、内容下线、没权限'] });

  K.add({ id: 'G-07', page: 'G', state: '内容已下线', html: function () {
    return K.top('内容') + K.body('<div class="empty"' + K.n(1) + '><img src="' + K.img.mascot('06-guide') + '" alt=""><b>这部分内容正在更新</b><p>已得的分数不受影响</p>' + K.btn('返回', 'ghost') + '</div>');
  }, notes: [[1, '内容被后台下线后用这一版，不显示「已删除」。已得分数保留'], '题目被下线：已答的分数保留，没答的由服务端换成同站另一道已审定题'] });

  K.add({ id: 'G-08', page: 'G', state: '没有权限', html: function () {
    return K.top('店员工作台') + K.body('<div class="empty"' + K.n(1) + '><img src="' + K.img.mascot('01-stand') + '" alt=""><b>这个页面只给工作人员使用</b><p>店员和合作社的入口在「我的」里，绑定身份后才会出现</p>' + K.btn('回首页', 'primary') + '</div>');
  }, notes: [[1, '直接打开店员或合作社路由、身份未绑定时用这一版'], '工作人员身份不改变底部标签栏'] });

  K.add({ id: 'G-09', page: 'G', state: '英文 · 覆盖范围提示', html: function () {
    return K.x.home({ login: 1 }).replace('中 / EN', 'EN') +
      '<div style="position:absolute;left:16px;right:16px;top:250px;background:#1E4B48;color:#fff;border-radius:12px;padding:10px 14px;font-size:12.5px;z-index:8"' + K.n(1) + '>English covers safety and gift rules only in this version.</div>';
  }, notes: [
    [1, '切到 EN 后顶部提示一次。一期英文只覆盖：站名、站点主题句、安全提示、礼品规则、服务电话。没翻译的正文仍显示中文'],
    '语言选择存在本地，不跟账号走'
  ] });
})();
