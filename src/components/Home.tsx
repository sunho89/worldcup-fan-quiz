import { motion } from 'framer-motion'

interface HomeProps {
  onSelect: (type: 'fan' | 'team') => void
}

export default function Home({ onSelect }: HomeProps) {
  return (
    <div className="min-h-screen px-5 py-8 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md mx-auto"
      >
        {/* Logo / Title */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
          className="mb-8"
        >
          <span className="text-6xl">⚽</span>
        </motion.div>

        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
          足球趣味测试
        </h1>
        <p className="text-gray-400 mb-12">
          测一测你是哪种球迷，或者找到你的本命球队
        </p>

        {/* Quiz type cards */}
        <div className="space-y-4">
          <motion.button
            onClick={() => onSelect('fan')}
            className="w-full p-6 rounded-2xl bg-cardBg/80 border border-white/10 text-left touch-feedback hover:border-primary/50 transition-colors"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-4">
              <span className="text-4xl">🔮</span>
              <div>
                <h2 className="text-white font-bold text-lg">你是哪种球迷？</h2>
                <p className="text-gray-400 text-sm mt-1">
                  10道题，测出你的足球人格
                </p>
              </div>
            </div>
          </motion.button>

          <motion.button
            onClick={() => onSelect('team')}
            className="w-full p-6 rounded-2xl bg-cardBg/80 border border-white/10 text-left touch-feedback hover:border-secondary/50 transition-colors"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-4">
              <span className="text-4xl">🏠</span>
              <div>
                <h2 className="text-white font-bold text-lg">本命球队匹配器</h2>
                <p className="text-gray-400 text-sm mt-1">
                  6道题，匹配最适合你的球队
                </p>
              </div>
            </div>
          </motion.button>
        </div>

        {/* Footer */}
        <p className="text-gray-600 text-xs mt-12">
          世界杯球迷人格测试 × 足球季 VibeCoding 挑战赛
        </p>
      </motion.div>
    </div>
  )
}
