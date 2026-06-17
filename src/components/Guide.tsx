import { motion } from 'framer-motion'
import { useQuizStore } from '../hooks/useQuiz'

interface GuideProps {
  onStart: () => void
  onBack: () => void
}

export default function Guide({ onStart, onBack }: GuideProps) {
  const { quizType } = useQuizStore()
  const isTeam = quizType === 'team'

  const rules = isTeam
    ? [
        { icon: '📝', text: '共 6 道题，答完自动匹配球队' },
        { icon: '🎯', text: '没有标准答案，凭直觉选择' },
        { icon: '🏠', text: '找到与你灵魂契合的本命球队' },
      ]
    : [
        { icon: '📝', text: '共 10 道题，答完自动出结果' },
        { icon: '🎯', text: '没有标准答案，只有你的真实人格' },
        { icon: '🤫', text: '支持分享，但禁止剧透给朋友' },
      ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <motion.div
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <motion.div
          className="text-6xl mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
        >
          {isTeam ? '🏠' : '🔮'}
        </motion.div>

        <h2 className="text-3xl font-bold mb-2 text-white">
          {isTeam ? '本命球队匹配器' : '你是哪种球迷？'}
        </h2>
        <p className="text-gray-400 mb-10">在开始之前，了解一下规则</p>

        {/* Rules list */}
        <div className="space-y-4 mb-10">
          {rules.map((rule, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 p-4 rounded-xl bg-cardBg/50 border border-white/5"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <span className="text-2xl">{rule.icon}</span>
              <span className="text-gray-200">{rule.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Start button */}
        <motion.button
          onClick={onStart}
          className="w-full py-4 rounded-full text-white font-bold text-lg gradient-bg shadow-lg shadow-accent/30 touch-feedback"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileTap={{ scale: 0.98 }}
        >
          我准备好了，开整！🚀
        </motion.button>

        {/* Back button */}
        <button
          onClick={onBack}
          className="mt-4 text-gray-500 text-sm hover:text-gray-400"
        >
          ← 返回首页
        </button>
      </motion.div>
    </div>
  )
}
