import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fanQuestions, teamQuestions } from '../data/questions'
import { useQuizStore } from '../hooks/useQuiz'

export default function Question() {
  const [selected, setSelected] = useState<string | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const { currentQuestion, selectAnswer, nextQuestion, quizType } = useQuizStore()

  const questions = quizType === 'fan' ? fanQuestions : teamQuestions
  const total = questions.length
  const question = questions[currentQuestion - 1]
  const progress = (currentQuestion / total) * 100

  const handleSelect = (key: string) => {
    if (isTransitioning) return
    setSelected(key)
    selectAnswer(currentQuestion, key)

    // Auto advance after delay
    setTimeout(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setSelected(null)
        setIsTransitioning(false)
        nextQuestion()
      }, 300)
    }, 600)
  }

  return (
    <div className="min-h-screen flex flex-col px-5 py-8">
      {/* Header */}
      <div className="mb-8">
        {/* Progress bar */}
        <div className="h-2 bg-secondary rounded-full overflow-hidden mb-4">
          <motion.div
            className="h-full gradient-bg rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">
            第 <span className="text-accent font-bold">{currentQuestion}</span> / {total} 题
          </span>
          <span className="text-gray-500 text-sm">{Math.round(progress)}%</span>
        </div>
      </div>

      {/* Question content */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            className="w-full max-w-md"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            {/* Question text */}
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 leading-relaxed">
              {question.text}
            </h2>

            {/* Options */}
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <motion.button
                  key={option.key}
                  onClick={() => handleSelect(option.key)}
                  disabled={isTransitioning}
                  className={`w-full p-4 rounded-xl text-left font-medium transition-all duration-300 touch-feedback ${
                    selected === option.key
                      ? 'bg-accent text-white scale-[1.02] shadow-lg shadow-accent/40'
                      : 'bg-cardBg/70 text-gray-200 hover:bg-cardBg border border-white/5'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  whileTap={{ scale: selected === option.key ? 1 : 0.98 }}
                >
                  <span
                    className={`inline-flex items-center justify-center w-8 h-8 rounded-full mr-3 text-sm font-bold ${
                      selected === option.key
                        ? 'bg-white/20 text-white'
                        : 'bg-white/10 text-gray-400'
                    }`}
                  >
                    {option.key}
                  </span>
                  {option.text}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom hint */}
      <div className="text-center mt-8">
        <p className="text-gray-500 text-sm">
          {isTransitioning ? '准备下一题...' : '选择一个答案继续'}
        </p>
      </div>
    </div>
  )
}
