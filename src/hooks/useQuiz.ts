import { create } from 'zustand'
import { FanType, fanTypes } from '../data/fanTypes'
import { ScoreResult, calculateScores } from '../utils/scoring'
import { TeamOption, matchTeam } from '../data/teams'

export type QuizType = 'fan' | 'team'
type QuizPhase = 'home' | 'guide' | 'quiz' | 'reveal' | 'result'

interface QuizState {
  quizType: QuizType
  phase: QuizPhase
  currentQuestion: number
  answers: Record<number, string>
  scores: ScoreResult | null
  primaryFanType: FanType | null
  secondaryFanType: FanType | null
  matchedTeam: TeamOption | null

  // Actions
  setQuizType: (type: QuizType) => void
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
  quizType: 'fan',
  phase: 'home',
  currentQuestion: 1,
  answers: {},
  scores: null,
  primaryFanType: null,
  secondaryFanType: null,
  matchedTeam: null,

  setQuizType: (type) => set({ quizType: type, phase: 'guide' }),

  startQuiz: () => set({ phase: 'guide' }),

  goToGuide: () => set({ phase: 'guide', currentQuestion: 1, answers: {} }),

  goToQuiz: () => set({ phase: 'quiz', currentQuestion: 1 }),

  selectAnswer: (questionId, answer) => {
    set((state) => ({
      answers: { ...state.answers, [questionId]: answer },
    }))
  },

  nextQuestion: () => {
    const { currentQuestion, quizType } = get()
    const maxQ = quizType === 'fan' ? 10 : 6
    if (currentQuestion < maxQ) {
      set({ currentQuestion: currentQuestion + 1 })
    } else {
      get().startReveal()
    }
  },

  startReveal: () => set({ phase: 'reveal' }),

  finishQuiz: () => {
    const { answers, quizType } = get()

    if (quizType === 'fan') {
      const scores = calculateScores(answers)
      const entries = Object.entries(scores) as [keyof ScoreResult, number][]
      entries.sort((a, b) => b[1] - a[1])
      const topDim = entries[0][0]
      const secondDim = entries[1][0]
      const topType = fanTypes.find((t) => t.dimension === topDim) || fanTypes[0]
      const secondType = fanTypes.find((t) => t.dimension === secondDim) || fanTypes[1]

      set({
        phase: 'result',
        scores,
        primaryFanType: topType,
        secondaryFanType: secondType,
      })
    } else {
      // team matcher
      const team = matchTeam(answers)
      set({
        phase: 'result',
        matchedTeam: team,
      })
    }
  },

  reset: () =>
    set({
      quizType: 'fan',
      phase: 'home',
      currentQuestion: 1,
      answers: {},
      scores: null,
      primaryFanType: null,
      secondaryFanType: null,
      matchedTeam: null,
    }),
}))
