import { motion } from 'framer-motion'
import { useQuizStore } from '../hooks/useQuiz'
import { useRef } from 'react'
import html2canvas from 'html2canvas'

export default function TeamResult() {
  const { matchedTeam, reset } = useQuizStore()
  const cardRef = useRef<HTMLDivElement>(null)

  if (!matchedTeam) return null

  const handleSaveCard = async () => {
    if (!cardRef.current) return
    try {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: '#1A1A2E',
        scale: 2,
      })
      const link = document.createElement('a')
      link.download = `我的本命球队_${matchedTeam.name}.png`
      link.href = canvas.toDataURL('image/png')
      link.click()
    } catch (err) {
      console.error('Failed to save card:', err)
    }
  }

  return (
    <div className="min-h-screen px-5 py-8 overflow-auto">
      {/* Hidden card for export */}
      <div className="fixed -left-[9999px] top-0">
        <div
          ref={cardRef}
          className="w-[375px] h-[667px] bg-gradient-to-br from-primary to-secondary p-6 flex flex-col"
        >
          <div className="text-center mb-6">
            <p className="text-sm text-success mb-2">🏠 本命球队匹配器</p>
            <h2 className="text-3xl font-black text-white">
              你的本命球队是
            </h2>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="text-7xl mb-4">{matchedTeam.emoji}</div>
            <h3 className="text-3xl font-black text-white mb-2">{matchedTeam.name}</h3>
            <p className="text-gray-300 text-center text-sm mb-4">
              {matchedTeam.country} · {matchedTeam.league}
            </p>

            {/* Match score */}
            <div className="mb-6">
              <div className="text-center mb-2">
                <span className="text-4xl font-black text-accent">{matchedTeam.matchScore}%</span>
                <span className="text-gray-400 text-sm ml-1">匹配度</span>
              </div>
              <div className="w-48 h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-accent"
                  style={{ width: `${matchedTeam.matchScore}%` }}
                />
              </div>
            </div>

            {/* Vibe tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {matchedTeam.vibe.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-white/10 text-gray-300 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Match reason */}
            <div className="bg-white/5 rounded-xl p-4 w-full">
              <p className="text-gray-300 text-sm text-center">
                {matchedTeam.matchReason}
              </p>
            </div>
          </div>

          <div className="text-center text-xs text-gray-500 mt-4">
            扫码测试 →
          </div>
        </div>
      </div>

      {/* Visible result */}
      <motion.div
        className="max-w-md mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Result header */}
        <div className="text-center mb-8">
          <p className="text-success text-sm mb-2">🏠 本命球队匹配器</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
            你的本命球队是
          </h2>
          <p className="text-gray-400">恭喜找到你的灵魂主队</p>
        </div>

        {/* Team card */}
        <motion.div
          className="bg-cardBg/50 rounded-2xl p-6 mb-6 text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
        >
          <div className="text-7xl mb-4">{matchedTeam.emoji}</div>
          <h3 className="text-3xl font-black text-white mb-1">{matchedTeam.name}</h3>
          <p className="text-gray-400 mb-4">
            {matchedTeam.country} · {matchedTeam.league}
          </p>

          {/* Match score */}
          <div className="mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-gray-400 text-sm">匹配度</span>
              <span className="text-3xl font-black text-accent">{matchedTeam.matchScore}%</span>
            </div>
            <div className="h-3 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                initial={{ width: 0 }}
                animate={{ width: `${matchedTeam.matchScore}%` }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          </div>

          {/* Vibe tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {matchedTeam.vibe.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-white/10 text-gray-300 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Match reason */}
        <motion.div
          className="bg-accent/10 border border-accent/30 rounded-2xl p-5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-300 text-center">
            {matchedTeam.matchReason}
          </p>
        </motion.div>

        {/* Team description */}
        <motion.div
          className="bg-cardBg/50 rounded-2xl p-5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-300 leading-relaxed">{matchedTeam.description}</p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            onClick={handleSaveCard}
            className="w-full py-4 rounded-full text-white font-bold gradient-bg shadow-lg touch-feedback"
            whileTap={{ scale: 0.98 }}
          >
            📸 保存分享卡片
          </motion.button>

          <motion.button
            onClick={reset}
            className="w-full py-3 rounded-full text-gray-400 font-medium text-sm touch-feedback"
            whileTap={{ scale: 0.98 }}
          >
            🔄 重新测试
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}
