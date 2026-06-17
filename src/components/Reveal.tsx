import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useQuizStore } from '../hooks/useQuiz'

export default function Reveal() {
  const { finishQuiz } = useQuizStore()

  useEffect(() => {
    const timer = setTimeout(() => {
      finishQuiz()
    }, 3000)
    return () => clearTimeout(timer)
  }, [finishQuiz])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary relative overflow-hidden">
      {/* Background effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-accent/20 via-transparent to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Central content */}
      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Spinning football */}
        <motion.div
          className="text-8xl mb-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          ⚽
        </motion.div>

        {/* Loading text */}
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            正在分析你的球迷DNA...
          </h2>

          {/* Animated dots */}
          <div className="flex justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-3 h-3 bg-accent rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scanning line effect */}
      <motion.div
        className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-success to-transparent"
        animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
      />

      {/* Particle-like circles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-accent rounded-full opacity-40"
          initial={{
            x: '50%',
            y: '50%',
            scale: 0,
          }}
          animate={{
            x: `${20 + i * 15}%`,
            y: `${20 + (i % 2) * 60}%`,
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.4,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  )
}
