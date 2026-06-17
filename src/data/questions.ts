export interface Question {
  id: number
  text: string
  options: {
    key: string
    text: string
  }[]
}

export const questions: Question[] = [
  {
    id: 1,
    text: "看球时你的标准姿势是？",
    options: [
      { key: "A", text: "端坐沙发，目不转睛，矿泉水都不敢喝" },
      { key: "B", text: "躺着看，输了砸床，赢了砸枕头" },
      { key: "C", text: "边刷手机边瞄一眼，集锦才是精华" },
      { key: "D", text: "在酒吧和陌生人一起吼" },
    ],
  },
  {
    id: 2,
    text: "比赛最后时刻，球队获得点球，你的第一反应？",
    options: [
      { key: "A", text: "闭眼祈祷，不敢看" },
      { key: "B", text: "站起来走到电视正前方盯着" },
      { key: "C", text: "打开弹幕看其他人怎么发疯" },
      { key: "D", text: "心里默念\"进了我请客\"" },
    ],
  },
  {
    id: 3,
    text: "你对越位的理解是？",
    options: [
      { key: "A", text: "进攻球员比球和对方最后一名后卫更靠近球门" },
      { key: "B", text: "越位规则就是来折磨新手的" },
      { key: "C", text: "反正裁判说越位就越位" },
      { key: "D", text: "我能教你但你自己还是看不懂的那种" },
    ],
  },
  {
    id: 4,
    text: "世界杯期间，你最可能出现在哪里？",
    options: [
      { key: "A", text: "家里电视前，穿好主队球衣" },
      { key: "B", text: "酒吧/烧烤摊，人形氛围组" },
      { key: "C", text: "朋友圈，用集锦和表情包假装看了" },
      { key: "D", text: "哪个群热闹我就去哪个群潜水" },
    ],
  },
  {
    id: 5,
    text: "你主队的核心球员受伤下场，你的反应？",
    options: [
      { key: "A", text: "立刻查伤情报告，预测恢复时间" },
      { key: "B", text: "发一条朋友圈：\"心疼XXX\"" },
      { key: "C", text: "换台，不看了" },
      { key: "D", text: "打开菠菜APP看看赔率有没有变" },
    ],
  },
  {
    id: 6,
    text: "一场 0-0 的闷平，你的评价？",
    options: [
      { key: "A", text: "战术博弈，防守艺术" },
      { key: "B", text: "睡着了，醒来还是 0-0" },
      { key: "C", text: "浪费生命，建议FIFA取消这种比赛" },
      { key: "D", text: "正好去上厕所" },
    ],
  },
  {
    id: 7,
    text: "你对\"我奶奶都能进这球\"的看法？",
    options: [
      { key: "A", text: "经典名句，形容必进球" },
      { key: "B", text: "每次听到就想反驳具体案例" },
      { key: "C", text: "听不懂，但感觉在骂人" },
      { key: "D", text: "截图存起来，下次阴阳怪气用" },
    ],
  },
  {
    id: 8,
    text: "世界杯你最关注什么？",
    options: [
      { key: "A", text: "冠军归属，谁捧大力神杯" },
      { key: "B", text: "冷门黑马，黑马才是青春" },
      { key: "C", text: "金靴奖花落谁家" },
      { key: "D", text: "女朋友什么时候让我去看球" },
    ],
  },
  {
    id: 9,
    text: "你怎么看\"德国队输了就上天台\"的人？",
    options: [
      { key: "A", text: "极端行为，不值得" },
      { key: "B", text: "真球迷才会这么激动" },
      { key: "C", text: "关我什么事，我又不赌" },
      { key: "D", text: "菠菜而已，小赌怡情" },
    ],
  },
  {
    id: 10,
    text: "如果你是一种越位，你会是哪种？",
    options: [
      { key: "A", text: "活球越位——总在最前线，越了也白越" },
      { key: "B", text: "越位陷阱——老油条，专门挖坑" },
      { key: "C", text: "眼神越位——我自己都不知道越没越" },
      { key: "D", text: "进攻越位——越得理直气壮" },
    ],
  },
]
