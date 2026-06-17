export interface QuizOption {
  key: string
  text: string
}

export interface QuizQuestion {
  id: number
  text: string
  options: QuizOption[]
}

// 你是哪种球迷 — 10题
export const fanQuestions: QuizQuestion[] = [
  {
    id: 1,
    text: '看球时你的标准姿势是？',
    options: [
      { key: 'A', text: '端坐沙发，目不转睛，矿泉水都不敢喝' },
      { key: 'B', text: '躺着看，输了砸床，赢了砸枕头' },
      { key: 'C', text: '边刷手机边瞄一眼，集锦才是精华' },
      { key: 'D', text: '在酒吧和陌生人一起吼' },
    ],
  },
  {
    id: 2,
    text: '比赛最后时刻，球队获得点球，你的第一反应？',
    options: [
      { key: 'A', text: '闭眼祈祷，不敢看' },
      { key: 'B', text: '站起来走到电视正前方盯着' },
      { key: 'C', text: '打开弹幕看其他人怎么发疯' },
      { key: 'D', text: '心里默念"进了我请客"' },
    ],
  },
  {
    id: 3,
    text: '你对越位的理解是？',
    options: [
      { key: 'A', text: '进攻球员比球和对方最后一名后卫更靠近球门' },
      { key: 'B', text: '越位规则就是来折磨新手的' },
      { key: 'C', text: '反正裁判说越位就越位' },
      { key: 'D', text: '我能教你但你自己还是看不懂的那种' },
    ],
  },
  {
    id: 4,
    text: '世界杯期间，你最可能出现在哪里？',
    options: [
      { key: 'A', text: '家里电视前，穿好主队球衣' },
      { key: 'B', text: '酒吧/烧烤摊，人形氛围组' },
      { key: 'C', text: '朋友圈，用集锦和表情包假装看了' },
      { key: 'D', text: '哪个群热闹我就去哪个群潜水' },
    ],
  },
  {
    id: 5,
    text: '你主队的核心球员受伤下场，你的反应？',
    options: [
      { key: 'A', text: '立刻查伤情报告，预测恢复时间' },
      { key: 'B', text: '发一条朋友圈："心疼XXX"' },
      { key: 'C', text: '换台，不看了' },
      { key: 'D', text: '打开菠菜APP看看赔率有没有变' },
    ],
  },
  {
    id: 6,
    text: '一场 0-0 的闷平，你的评价？',
    options: [
      { key: 'A', text: '战术博弈，防守艺术' },
      { key: 'B', text: '睡着了，醒来还是 0-0' },
      { key: 'C', text: '浪费生命，建议FIFA取消这种比赛' },
      { key: 'D', text: '正好去上厕所' },
    ],
  },
  {
    id: 7,
    text: '你对"我奶奶都能进这球"的看法？',
    options: [
      { key: 'A', text: '经典名句，形容必进球' },
      { key: 'B', text: '每次听到就想反驳具体案例' },
      { key: 'C', text: '听不懂，但感觉在骂人' },
      { key: 'D', text: '截图存起来，下次阴阳怪气用' },
    ],
  },
  {
    id: 8,
    text: '世界杯你最关注什么？',
    options: [
      { key: 'A', text: '冠军归属，谁捧大力神杯' },
      { key: 'B', text: '冷门黑马，黑马才是青春' },
      { key: 'C', text: '金靴奖花落谁家' },
      { key: 'D', text: '女朋友什么时候让我去看球' },
    ],
  },
  {
    id: 9,
    text: '你怎么看"德国队输了就上天台"的人？',
    options: [
      { key: 'A', text: '极端行为，不值得' },
      { key: 'B', text: '真球迷才会这么激动' },
      { key: 'C', text: '关我什么事，我又不赌' },
      { key: 'D', text: '菠菜而已，小赌怡情' },
    ],
  },
  {
    id: 10,
    text: '如果你是一种越位，你会是哪种？',
    options: [
      { key: 'A', text: '活球越位——总在最前线，越了也白越' },
      { key: 'B', text: '越位陷阱——老油条，专门挖坑' },
      { key: 'C', text: '眼神越位——我自己都不知道越没越' },
      { key: 'D', text: '进攻越位——越得理直气壮' },
    ],
  },
]

// 本命球队匹配器 — 6题
export const teamQuestions: QuizQuestion[] = [
  {
    id: 1,
    text: '看球时，你更喜欢什么风格？',
    options: [
      { key: 'A', text: '进攻！进球才是王道' },
      { key: 'B', text: '防守！防守赢得冠军' },
      { key: 'C', text: '技术流，踢得漂亮最重要' },
      { key: 'D', text: '底蕴深，文化厚重有故事' },
    ],
  },
  {
    id: 2,
    text: '你最喜欢的联赛是？',
    options: [
      { key: 'A', text: '英超 — 速度快，对抗激烈' },
      { key: 'B', text: '西甲 — 技术流，群星璀璨' },
      { key: 'C', text: '德甲 — 战术严谨，大开大合' },
      { key: 'D', text: '意甲 — 防守艺术，战术大师' },
    ],
  },
  {
    id: 3,
    text: '你喜欢球队多久了？',
    options: [
      { key: 'A', text: '刚入坑，还在探索' },
      { key: 'B', text: '看过几场比赛，心有所属' },
      { key: 'C', text: '三五年，有感情了' },
      { key: 'D', text: '十年以上，灵魂绑定' },
    ],
  },
  {
    id: 4,
    text: '你更想支持哪种球队？',
    options: [
      { key: 'A', text: '顶级豪门，永不放弃冠军追求' },
      { key: 'B', text: '青春风暴，未来之星的舞台' },
      { key: 'C', text: '草根逆袭，平民球队的奇迹' },
      { key: 'D', text: '老牌贵族，有故事有传承' },
    ],
  },
  {
    id: 5,
    text: '看球最让你兴奋的是？',
    options: [
      { key: 'A', text: '绝杀时刻，热血沸腾' },
      { key: 'B', text: '精妙配合，艺术足球' },
      { key: 'C', text: '逆转翻盘，永不言弃' },
      { key: 'D', text: '王朝更迭，传奇诞生' },
    ],
  },
  {
    id: 6,
    text: '如果主队输掉了国家德比，你会？',
    options: [
      { key: 'A', text: '骂完继续支持，不离不弃' },
      { key: 'B', text: '研究录像，找出问题所在' },
      { key: 'C', text: '发朋友圈吐槽，然后原谅他们' },
      { key: 'D', text: '无所谓，反正还有下一场' },
    ],
  },
]
