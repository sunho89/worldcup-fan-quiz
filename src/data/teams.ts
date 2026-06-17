export interface TeamOption {
  id: string
  name: string
  emoji: string
  country: string
  league: string
  description: string
  matchReason: string
  matchScore: number
  vibe: string[] // tags like '进攻', '防守', '青春', '豪门'
}

export const teams: TeamOption[] = [
  {
    id: 'manchester-city',
    name: '曼城',
    emoji: '🔵',
    country: '英格兰',
    league: '英超',
    description: '瓜迪奥拉治下的传控足球代名词，近年最具统治力的球队。',
    matchReason: '你喜欢控制比赛节奏，追求技战术美感，支持进攻足球。',
    matchScore: 95,
    vibe: ['进攻', '传控', '豪门', '技术流'],
  },
  {
    id: 'real-madrid',
    name: '皇家马德里',
    emoji: '👑',
    country: '西班牙',
    league: '西甲',
    description: '欧冠之王，星光熠熠，代表着足球史上最辉煌的豪门底蕴。',
    matchReason: '你追求顶级荣耀，尊重历史与传统，愿意陪伴球队经历起伏。',
    matchScore: 92,
    vibe: ['豪门', '欧冠', '底蕴', '传奇'],
  },
  {
    id: 'bayern-munich',
    name: '拜仁慕尼黑',
    emoji: '🔴',
    country: '德国',
    league: '德甲',
    description: '德国霸主的铁血风格，主场安联球场是无数球迷的朝圣之地。',
    matchReason: '你欣赏铁血精神和高强度比赛，支持有底蕴的德国足球。',
    matchScore: 88,
    vibe: ['铁血', '德国', '豪门', '进攻'],
  },
  {
    id: 'liverpool',
    name: '利物浦',
    emoji: '🔴',
    country: '英格兰',
    league: '英超',
    description: 'YNWA 的歌声响彻安菲尔德，永不放弃的足球精神最佳诠释者。',
    matchReason: '你被足球文化和精神所打动，尊重拼搏和团队而非单纯成绩。',
    matchScore: 90,
    vibe: ['激情', '精神', '豪门', '进攻'],
  },
  {
    id: 'psg',
    name: '巴黎圣日耳曼',
    emoji: '🔵',
    country: '法国',
    league: '法甲',
    description: '金元足球的代表，拥有姆巴佩、梅西等顶级球星，星光熠熠。',
    matchReason: '你喜欢超级球星，追求视觉冲击力和话题性，享受聚光灯下的足球。',
    matchScore: 78,
    vibe: ['球星', '金元', '进攻', '话题'],
  },
  {
    id: 'inter-milan',
    name: '国际米兰',
    emoji: '🔵',
    country: '意大利',
    league: '意甲',
    description: '蓝黑军团的坚韧防守艺术，小因扎吉时代的战术大师。',
    matchReason: '你欣赏意大利式防守战术之美，尊重防守的艺术和策略性。',
    matchScore: 85,
    vibe: ['防守', '战术', '意大利', '艺术'],
  },
  {
    id: 'barcelona',
    name: '巴塞罗那',
    emoji: '🔵',
    country: '西班牙',
    league: '西甲',
    description: '拉玛西亚青训传承，Tiki-taka 的发源地足球哲学的象征。',
    matchReason: '你热爱技术足球，尊重拉玛西亚传统，欣赏有灵魂的足球哲学。',
    matchScore: 93,
    vibe: ['技术流', '青训', '传控', '艺术'],
  },
  {
    id: 'atletico-madrid',
    name: '马德里竞技',
    emoji: '🔴',
    country: '西班牙',
    league: '西甲',
    description: '铁血防守的代名词，西蒙尼打造的铁军永不放弃。',
    matchReason: '你欣赏铁血防守和拼搏精神，尊重低调但坚韧的足球风格。',
    matchScore: 80,
    vibe: ['铁血', '防守', '拼搏', '草根'],
  },
  {
    id: 'chelsea',
    name: '切尔西',
    emoji: '🔵',
    country: '英格兰',
    league: '英超',
    description: '阿布时代的金元足球代表，多元化阵容和战术多变为特点。',
    matchReason: '你喜欢多元化足球，支持能适应不同打法的球队，享受战术变化。',
    matchScore: 75,
    vibe: ['豪门', '金元', '多变', '战术'],
  },
  {
    id: 'juventus',
    name: '尤文图斯',
    emoji: '⚪',
    country: '意大利',
    league: '意甲',
    description: '意甲霸主，防守传统的坚守者，斑马军团的底蕴无可比拟。',
    matchReason: '你欣赏意大利足球的防守艺术，尊重有历史沉淀的豪门。',
    matchScore: 82,
    vibe: ['防守', '意大利', '底蕴', '豪门'],
  },
  {
    id: 'ac-milan',
    name: 'AC米兰',
    emoji: '🔴',
    country: '意大利',
    league: '意甲',
    description: '红黑军团的荣耀传承，皮奥利时代的复兴之路。',
    matchReason: '你被足球传统和荣耀传承打动，愿意陪伴球队走过复兴之路。',
    matchScore: 83,
    vibe: ['传统', '意大利', '复兴', '底蕴'],
  },
  {
    id: 'arsenal',
    name: '阿森纳',
    emoji: '🔴',
    country: '英格兰',
    league: '英超',
    description: '美丽足球的代表，阿尔特塔打造的青春风暴正在复兴。',
    matchReason: '你热爱进攻足球和青春活力，支持美丽足球风格的球队。',
    matchScore: 86,
    vibe: ['进攻', '青春', '美丽足球', '青训'],
  },
  {
    id: 'manchester-united',
    name: '曼联',
    emoji: '🔴',
    country: '英格兰',
    league: '英超',
    description: '红魔的荣耀与沉浮，弗格森时代的传奇还在被追逐。',
    matchReason: '你追求荣耀但也接受起伏，尊重俱乐部文化和传统精神。',
    matchScore: 81,
    vibe: ['传统', '豪门', '情怀', '起伏'],
  },
  {
    id: 'tottenham',
    name: '托特纳姆热刺',
    emoji: '⚪',
    country: '英格兰',
    league: '英超',
    description: '伦敦的进攻型球队，凯恩时代的热刺追求突破多年未果。',
    matchReason: '你支持有追求但还未登顶的球队，理解追求荣耀路上的艰辛。',
    matchScore: 72,
    vibe: ['进攻', '潜力', '伦敦', '突破'],
  },
  {
    id: 'dortmund',
    name: '多特蒙德',
    emoji: '🟡',
    country: '德国',
    league: '德甲',
    description: '青春风暴的代表，威斯特法伦的魔鬼主场令人窒息。',
    matchReason: '你热爱青春活力，支持年轻阵容，享受魔鬼主场的氛围感。',
    matchScore: 87,
    vibe: ['青春', '进攻', '氛围', '青训'],
  },
  {
    id: 'sevilla',
    name: '塞维利亚',
    emoji: '⚪',
    country: '西班牙',
    league: '西甲',
    description: '欧联杯之王，总能在不被看好的情况下创造奇迹。',
    matchReason: '你欣赏团队精神和低调的实力派，尊重默默耕耘的足球风格。',
    matchScore: 70,
    vibe: ['草根', '欧联', '团队', '拼搏'],
  },
]

export function matchTeam(answers: Record<number, string>): TeamOption {
  // Score each team based on answers
  const scores: Record<string, number> = {}

  for (const team of teams) {
    let score = 0
    const vibes = team.vibe

    // Q1: Watching habits / time preference
    const q1 = answers[1]
    if (q1 === 'A' && vibes.includes('进攻')) score += 25
    if (q1 === 'B' && vibes.includes('防守')) score += 25
    if (q1 === 'C' && vibes.includes('技术流')) score += 25
    if (q1 === 'D' && vibes.includes('底蕴')) score += 25

    // Q2: League preference
    const q2 = answers[2]
    if (q2 === 'A' && team.league === '英超') score += 25
    if (q2 === 'B' && team.league === '西甲') score += 25
    if (q2 === 'C' && team.league === '德甲') score += 25
    if (q2 === 'D' && team.league === '意甲') score += 25

    // Q3: Fandom years
    const q3 = answers[3]
    if (q3 === 'A') score += team.matchScore * 0.3
    if (q3 === 'B') score += team.matchScore * 0.6
    if (q3 === 'C') score += team.matchScore * 0.9
    if (q3 === 'D') score += team.matchScore

    // Q4: Team preference type
    const q4 = answers[4]
    if (q4 === 'A' && vibes.includes('豪门')) score += 25
    if (q4 === 'B' && vibes.includes('青春')) score += 25
    if (q4 === 'C' && vibes.includes('草根')) score += 25
    if (q4 === 'D' && vibes.includes('底蕴')) score += 25

    // Q5: Emotional attachment
    const q5 = answers[5]
    if (q5 === 'A') score += vibes.includes('精神') ? 25 : 10
    if (q5 === 'B') score += vibes.includes('艺术') ? 25 : 10
    if (q5 === 'C') score += vibes.includes('拼搏') ? 25 : 10
    if (q5 === 'D') score += vibes.includes('传统') ? 25 : 10

    // Q6: Derby mentality
    const q6 = answers[6]
    if (q6 === 'A' && vibes.includes('铁血')) score += 25
    if (q6 === 'B' && vibes.includes('技术流')) score += 25
    if (q6 === 'C' && vibes.includes('进攻')) score += 25
    if (q6 === 'D') score += 15 // Any team can be fun

    scores[team.id] = score
  }

  // Find team with highest score
  let bestTeam = teams[0]
  let bestScore = 0
  for (const [id, score] of Object.entries(scores)) {
    if (score > bestScore) {
      bestScore = score
      bestTeam = teams.find((t) => t.id === id)!
    }
  }

  return bestTeam
}
