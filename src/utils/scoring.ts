type ScoreKey = 'knowledge' | 'passion' | 'cloud' | 'gamble' | 'social'

// 每个选项对应的维度分值
const SCORING: Record<number, Record<string, Partial<Record<ScoreKey, number>>>> = {
  1: {
    A: { knowledge: 1 },
    B: { passion: 2 },
    C: { cloud: 2 },
    D: { social: 2 },
  },
  2: {
    A: { passion: 2 },
    B: { knowledge: 1 },
    C: { cloud: 1 },
    D: { gamble: 2 },
  },
  3: {
    A: { knowledge: 3 },
    B: { cloud: 1 },
    C: { cloud: 2 },
    D: { knowledge: 1 },
  },
  4: {
    A: { passion: 2 },
    B: { social: 3 },
    C: { cloud: 2 },
    D: { cloud: 1 },
  },
  5: {
    A: { knowledge: 2 },
    B: { social: 2 },
    C: { cloud: 2 },
    D: { gamble: 3 },
  },
  6: {
    A: { knowledge: 2 },
    B: { passion: 1 },
    C: { cloud: 2 },
    D: { gamble: 1 },
  },
  7: {
    A: { knowledge: 2 },
    B: { knowledge: 1 },
    C: { cloud: 2 },
    D: { social: 2 },
  },
  8: {
    A: { passion: 2 },
    B: { passion: 2 },
    C: { knowledge: 1 },
    D: { cloud: 2 },
  },
  9: {
    A: { passion: 1 },
    B: { passion: 2 },
    C: { cloud: 2 },
    D: { gamble: 3 },
  },
  10: {
    A: { passion: 2 },
    B: { knowledge: 2 },
    C: { cloud: 2 },
    D: { passion: 1 },
  },
}

export interface ScoreResult {
  knowledge: number
  passion: number
  cloud: number
  gamble: number
  social: number
}

export function calculateScores(answers: Record<number, string>): ScoreResult {
  const scores: ScoreResult = {
    knowledge: 0,
    passion: 0,
    cloud: 0,
    gamble: 0,
    social: 0,
  }

  for (const [questionNum, answer] of Object.entries(answers)) {
    const qNum = parseInt(questionNum)
    const questionScores = SCORING[qNum]?.[answer]
    if (questionScores) {
      for (const [dim, score] of Object.entries(questionScores)) {
        scores[dim as ScoreKey] += score as number
      }
    }
  }

  return scores
}
