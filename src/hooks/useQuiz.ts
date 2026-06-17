import { create } from 'zustand'
import { FanType, fanTypes } from '../data/fanTypes'
import { ScoreResult, calculateScores } from '../utils/scoring'

type QuizPhase = 'cover' | 'guide' | 'quiz' | 'reveal' | 'result'

interface QuizState {
  phase: QuizPhase
  currentQuestion: number
  answers: Record<number, string>
  scores: ScoreResult | null
  primaryFanType: FanType | null
  secondaryFanType: FanType | null

  // Actions
  startQuiz: () => void
  goToGuide: () => void
  goToQuiz: () => void
  selectAnswer: (questionId: number, answer: string) => void
  nextQuestion: () => void
  startReveal: () => void
  finishQuiz: () => void
  reset: () => void
}

export const useQuizStore = create<QuizState>((set, get) => ({
  phase: 'cover',
  currentQuestion: 1,
  answers: {},
  scores: null,
  primaryFanType: null,
  secondaryFanType: null,

  startQuiz: () => set({ phase: 'guide' }),

  goToGuide: () => set({ phase: 'guide' }),

  goToQuiz: () => set({ phase: 'quiz', currentQuestion: 1 }),

  selectAnswer: (questionId: number, answer: string) => {
    set((state) => ({
      answers: { ...state.answers, [questionId]: answer },
    }))
  },

  nextQuestion: () => {
    const { currentQuestion } = get()
    if (currentQuestion < 10) {
      set({ currentQuestion: currentQuestion + 1 })
    } else {
      get().startReveal()
    }
  },

  startReveal: () => set({ phase: 'reveal' }),

  finishQuiz: () => {
    const { answers } = get()
    const scores = calculateScores(answers)

    // 找出最高分和次高分维度
    const entries = Object.entries(scores) as [keyof ScoreResult, number][]
    entries.sort((a, b) => b[1] - a[1])

    const topDim = entries[0][0]
    const secondDim = entries[1][0]

    // 根据维度找到对应球迷类型
    const topType = fanTypes.find((t) => t.dimension === topDim) || fanTypes[0]
    const secondType = fanTypes.find((t) => t.dimension === secondDim) || fanTypes[1]

    set({
      phase: 'result',
      scores,
      primaryFanType: topType,
      secondaryFanType: secondType,
    })
  },

  reset: () =>
    set({
      phase: 'cover',
      currentQuestion: 1,
      answers: {},
      scores: null,
      primaryFanType: null,
      secondaryFanType: null,
    }),
}))
