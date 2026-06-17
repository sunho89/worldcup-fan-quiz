import { motion } from 'framer-motion'

interface CoverProps {
  onStart: () => void
}

export default function Cover({ onStart }: CoverProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating football elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-10"
            initial={{ x: `${10 + i * 15}%`, y: '100%' }}
            animate={{ y: '-100%', rotate: 360 }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 1.5,
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: 0,
            }}
          >
            ⚽
          </motion.div>
        ))}

        {/* Grass pattern at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 opacity-20"
          style={{
            background: 'repeating-linear-gradient(90deg, #00D9C0 0px, #00D9C0 2px, transparent 2px, transparent 20px)',
          }}
        />
      </div>

      {/* Main content */}
      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cardBg/50 backdrop-blur-sm mb-8 border border-accent/30"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-sm text-success">🏆 2026 世界杯特别企划</span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          className="text-5xl md:text-7xl font-black mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <span className="gradient-text">你是哪种</span>
          <br />
          <span className="text-white">球迷？</span>
          <span className="inline-block ml-2">⚽</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          通过 10 道有趣的选择题<br />测出你的球迷人格与本命球队
        </motion.p>

        {/* CTA Button */}
        <motion.button
          onClick={onStart}
          className="relative px-12 py-4 rounded-full text-white font-bold text-lg gradient-bg shadow-lg shadow-accent/30 touch-feedback"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          开始测试
          <span className="absolute -top-2 -right-2 text-xl">👉</span>
        </motion.button>

        {/* Social proof */}
        <motion.p
          className="mt-8 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          已有 <span className="text-accent font-semibold">1,234,567</span> 人揭晓身份
        </motion.p>
      </motion.div>

      {/* Bottom decoration */}
      <motion.div
        className="absolute bottom-8"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-gray-500 text-sm">向下滑动</span>
        <br />
        <span className="text-gray-600">↓</span>
      </motion.div>
    </div>
  )
}
