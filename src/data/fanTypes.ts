export type FanDimension = 'knowledge' | 'passion' | 'cloud' | 'gamble' | 'vibe'

export interface FanType {
  id: string
  name: string
  emoji: string
  teams: string[]
  description: string
  quote: string
  abilities: {
    knowledge: number
    passion: number
    social: number
    gamble: number
  }
  dimension: FanDimension
}

export const fanTypes: FanType[] = [
  {
    id: 'top-fan',
    name: '豪门铁粉',
    emoji: '🏆',
    teams: ['巴西', '德国', '法国', '西班牙'],
    description: '支持豪门多年，见证过王朝更迭。你不是墙头草，是真正的底蕴球迷。半夜三点爬起来看球是家常便饭，输球时你比球员还难受，赢球时你比球员还先庆祝。',
    quote: '我们不是赢在现在，是赢在底蕴。',
    abilities: {
      knowledge: 90,
      passion: 95,
      social: 60,
      gamble: 30,
    },
    dimension: 'passion',
  },
  {
    id: 'know-it-all',
    name: '懂王型',
    emoji: '🧠',
    teams: ['意大利', '阿根廷', '英格兰'],
    description: '你嘴上懂球，肚子里也确实懂。越位规则能讲十分钟，补时阶段能预测换人。朋友看球遇到问题第一个问你，你是行走的足球百科，也是朋友圈的战术大师。',
    quote: '这球索斯盖特必须背锅。',
    abilities: {
      knowledge: 95,
      passion: 75,
      social: 80,
      gamble: 45,
    },
    dimension: 'knowledge',
  },
  {
    id: 'data-nerd',
    name: '数据流',
    emoji: '📊',
    teams: ['英格兰', '比利时'],
    description: '你看的不是球，是数据。xG、传球成功率、压迫次数张口就来。你可能不是最狂热的球迷，但你一定是最"理性"的球迷。比赛结果可以输，但数据预测不能错。',
    quote: '这场预期进球是 2.3，你跟我说 1-0？',
    abilities: {
      knowledge: 85,
      passion: 60,
      social: 70,
      gamble: 80,
    },
    dimension: 'gamble',
  },
  {
    id: 'vibe-crew',
    name: '氛围组',
    emoji: '🎉',
    teams: ['随时变，谁赢支持谁'],
    description: '你是世界杯期间最可爱的人。酒吧有你就热闹，集锦有你就完整，朋友圈有你就欢乐。你可能记不清越位规则，但你能记住每场比赛的最佳庆祝动作。',
    quote: '走！反正我支持好看的！',
    abilities: {
      knowledge: 40,
      passion: 85,
      social: 95,
      gamble: 50,
    },
    dimension: 'vibe',
  },
  {
    id: 'gamble-king',
    name: '赌神型',
    emoji: '🎰',
    teams: ['随缘（赔率决定主队）'],
    description: '世界杯期间，你的生活围绕菠菜转。每场比赛都有你的投注，单关、串子、比分、角球数，你样样精通。赢了会所嫩模，输了下海干活。足球在你眼里不只是运动，还是一场大型经济行为。',
    quote: '这场不博一下对不起看球的时间。',
    abilities: {
      knowledge: 75,
      passion: 90,
      social: 50,
      gamble: 100,
    },
    dimension: 'gamble',
  },
  {
    id: 'cloud-fan',
    name: '云球迷',
    emoji: '☁️',
    teams: ['只认识姆巴佩和梅西'],
    description: '你很忙，忙到没时间看完整场比赛。但你很会冲浪，微博热搜、抖音集锦、朋友圈截图，让你即使不打开电视也能掌握所有名场面。你是互联网足球的原住民，也是足球梗文化的最大传播者。',
    quote: '我就看了集锦，这球姆巴佩太牛了。',
    abilities: {
      knowledge: 35,
      passion: 55,
      social: 90,
      gamble: 25,
    },
    dimension: 'cloud',
  },
  {
    id: 'zen-fan',
    name: '佛系养生球迷',
    emoji: '🧘',
    teams: ['北欧球队', '中小国家队'],
    description: '胜负在你眼里皆是浮云，看球就是为了开心。你不为输赢动气，不和球迷吵架，主队输了你就去散步。别人问你为什么支持冰岛，你说我就是喜欢他们的团队精神。',
    quote: '足球嘛，图个乐子，何必呢。',
    abilities: {
      knowledge: 60,
      passion: 50,
      social: 45,
      gamble: 15,
    },
    dimension: 'cloud',
  },
  {
    id: 'tactics-analyst',
    name: '战术分析师',
    emoji: '📺',
    teams: ['意大利', '德国'],
    description: '你看的是球，想的是战略。瓜迪奥拉的战术板你都能画，克洛普的高位压迫你能写篇论文。你不是普通球迷，你是潜伏在看球人群中的教练。每进一球，你首先想到的是这球是怎么跑位的。',
    quote: '这球不是个人能力问题，是体系问题。',
    abilities: {
      knowledge: 98,
      passion: 80,
      social: 65,
      gamble: 35,
    },
    dimension: 'knowledge',
  },
]
