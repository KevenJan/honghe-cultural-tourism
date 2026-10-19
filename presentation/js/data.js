/* 红河同路 · 汇报演示数据（内容为示意，以县文化馆、民宗局审定稿为准） */
window.HH = (function () {
  var SITES = {
    yisa:    { name: '迤萨路口',   at: '在迤萨路口',   common: '五个世居民族，住在同一个县' },
    forest:  { name: '森林公园',   at: '在森林公园',   common: '大家共用一沟水' },
    oldtown: { name: '马帮古城',   at: '在马帮古城',   common: '马帮把各族的货连在一条路上' },
    samaba:  { name: '撒玛坝',     at: '在撒玛坝',     common: '同一片田，一起过日子' }
  };
  var ETHNIC = { han: '汉族', hani: '哈尼族', yi: '彝族', dai: '傣族', yao: '瑶族' };
  var ORDER = ['han', 'hani', 'yi', 'dai', 'yao'];

  var pending = { type: 'pending' };
  var CONTENT = {
    yisa: {
      han:  { type: 'index', fact: '汉族是红河县的世居民族之一。', go: [['oldtown', 'han', '马帮古城 · 马帮与侨乡']] },
      hani: { type: 'index', fact: '红河县是全国最大的哈尼族聚居县。', go: [['samaba', 'hani', '撒玛坝 · 多声部、开秧门']] },
      yi:   { type: 'index', fact: '彝族是红河县的世居民族之一。', go: [['samaba', 'yi', '撒玛坝 · 乐作舞'], ['oldtown', 'yi', '马帮古城 · 尼苏刺绣']] },
      dai:  { type: 'index', fact: '傣族是红河县的世居民族之一。', go: [['oldtown', 'dai', '马帮古城 · 傣族传统制陶']] },
      yao:  { type: 'index', fact: '瑶族是红河县的世居民族之一。', go: [] }
    },
    forest: { han: pending, hani: pending, yi: pending, dai: pending, yao: pending },
    oldtown: {
      han: pending, hani: pending, yao: pending,
      yi: { type: 'pending', note: '彝族（尼苏）刺绣为省级非遗，待县文化馆确认后点亮' },
      dai: {
        type: 'ok',
        cards: [
          { t: '傣族传统制陶', tag: '省级非遗', cls: 'teal', img: 'assets/heritage/heritage-05-dai-pottery@690w.webp', p: '手艺人把泥坯一点点做成陶器。可以在古城文创店看到实物。' }
        ],
        quiz: ['傣族传统制陶是哪一级非遗？', '省级非遗', '国家级非遗'],
        with: ['各族 · 马帮与侨乡', '好物 · 傣族土陶小杯']
      }
    },
    samaba: {
      han: pending, dai: pending, yao: pending,
      hani: {
        type: 'ok',
        cards: [
          { t: '哈尼多声部', tag: '国家级非遗', cls: 'teal', img: 'assets/heritage/heritage-01-hani-polyphony@690w.webp', p: '一人领，众人和，几个声部一起唱出来。' },
          { t: '开秧门与仰阿娜', tag: '节令活动', cls: 'grey', img: 'assets/heritage/heritage-03-kaiyangmen@690w.webp', p: '开秧门时大家一起下田插秧。这是节令活动，不标非遗。' }
        ],
        quiz: ['多声部是怎么唱的？', '一人领，众人和', '一个人独唱'],
        with: ['彝族 · 乐作', '各族 · 长街宴'],
        caps: { yi: '一起跳乐作' }
      },
      yi: {
        type: 'ok',
        cards: [
          { t: '乐作舞', tag: '国家级非遗', cls: 'teal', img: '', p: '在哈尼族、彝族群众中世代相传，大家围成圈一起跳。' }
        ],
        quiz: ['乐作是什么？', '大家一起跳的舞', '一首独唱的山歌'],
        with: ['哈尼族 · 乐作', '各族 · 长街宴'],
        caps: { hani: '一起跳乐作' }
      }
    }
  };

  function get(site, ethnic) { return CONTENT[site][ethnic]; }
  function okSeeds(site) { return ORDER.filter(function (e) { var c = get(site, e); return c.type === 'ok'; }); }

  return { SITES: SITES, ETHNIC: ETHNIC, ORDER: ORDER, get: get, okSeeds: okSeeds };
})();
