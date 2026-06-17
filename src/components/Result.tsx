import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import html2canvas from 'html2canvas'
import { useQuizStore } from '../hooks/useQuiz'
import { ScoreResult } from '../utils/scoring'
import { publishToZhihu, PublishResult } from '../utils/zhihuApi'

const abilityLabels: Record<keyof ScoreResult, string> = {
  knowledge: '足球知识',
  passion: '看球热情',
  cloud: '摸鱼指数',
  gamble: '赌性',
  social: '社交分享',
}

const abilityColors: Record<keyof ScoreResult, string> = {
  knowledge: '#00D9C0',
  passion: '#E94560',
  cloud: '#A29BFE',
  gamble: '#6C5CE7',
  social: '#FFD93D',
}

export default function Result() {
  const { primaryFanType, secondaryFanType, scores, reset } = useQuizStore()
  const cardRef = useRef<HTMLDivElement>(null)
  const [isPublishing, setIsPublishing] = useState(false)
  const [publishResult, setPublishResult] = useState<PublishResult | null>(null)

  if (!primaryFanType || !scores) return null

  const handleSaveCard = async (): Promise<string | null> => {
    if (!cardRef.current) return null
    try {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: '#1A1A2E',
        scale: 2,
      })
      return canvas.toDataURL('image/png')
    } catch (err) {
      console.error('Failed to save card:', err)
      return null
    }
  }

  const handleSaveCardDownload = async () => {
    const dataUrl = await handleSaveCard()
    if (!dataUrl) return
    const link = document.createElement('a')
    link.download = '我的球迷类型.png'
    link.href = dataUrl
    link.click()
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: '我是「' + primaryFanType.name + '」球迷！',
        text: primaryFanType.quote,
        url: window.location.href,
      })
    } else {
      handleSaveCardDownload()
    }
  }

  const handlePublishToZhihu = async () => {
    setIsPublishing(true)
    setPublishResult(null)

    const result = await publishToZhihu(
      primaryFanType.name,
      primaryFanType.emoji,
      primaryFanType.teams,
      primaryFanType.quote
    )

    setPublishResult(result)
    setIsPublishing(false)
  }

  const abilityKeys = Object.keys(abilityLabels) as Array<keyof ScoreResult>

  return (
    <div className="min-h-screen px-5 py-8 overflow-auto">
      {/* Hidden card for export */}
      <div className="fixed -left-[9999px] top-0">
        <div
          ref={cardRef}
          className="w-[375px] h-[667px] bg-gradient-to-br from-primary to-secondary p-6 flex flex-col"
        >
          <div className="text-center mb-6">
            <p className="text-sm text-success mb-2">⚽ 世界杯球迷人格测试</p>
            <h2 className="text-3xl font-black text-white">
              你是<span className="text-accent">「{primaryFanType.name}」</span>
            </h2>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="text-7xl mb-4">{primaryFanType.emoji}</div>
            <p className="text-gray-300 text-center text-sm mb-6">
              本命球队：{primaryFanType.teams.join(' / ')}
            </p>

            {/* Abilities */}
            <div className="w-full space-y-3 mb-6">
              {abilityKeys.map((key) => (
                <div key={key} className="flex items-center gap-3">
                  <span className="text-xs text-gray-400 w-16 text-right">{abilityLabels[key]}</span>
                  <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${scores[key]}%`,
                        backgroundColor: abilityColors[key],
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="bg-white/5 rounded-xl p-4 w-full">
              <p className="text-gray-300 text-sm text-center italic">
                "{primaryFanType.quote}"
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
          <p className="text-success text-sm mb-2">🏆 测试结果</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
            你是<span className="gradient-text">「{primaryFanType.name}」</span>
          </h2>
          <p className="text-gray-400">球迷类型</p>
        </div>

        {/* Main emoji */}
        <motion.div
          className="text-center mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
        >
          <span className="text-8xl">{primaryFanType.emoji}</span>
        </motion.div>

        {/* Teams */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-400 text-sm mb-1">本命球队</p>
          <p className="text-white font-bold">{primaryFanType.teams.join(' / ')}</p>
        </motion.div>

        {/* Description */}
        <motion.div
          className="bg-cardBg/50 rounded-2xl p-5 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-300 leading-relaxed">{primaryFanType.description}</p>
        </motion.div>

        {/* Abilities radar */}
        <motion.div
          className="bg-cardBg/50 rounded-2xl p-5 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-white font-bold mb-4">📊 能力值</h3>
          <div className="space-y-4">
            {abilityKeys.map((key, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
              >
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-300">{abilityLabels[key]}</span>
                  <span className="text-white font-bold">{scores[key]}</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${scores[key]}%` }}
                    transition={{ duration: 0.8, delay: 0.8 + i * 0.1 }}
                    style={{ backgroundColor: abilityColors[key] }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          className="bg-accent/10 border border-accent/30 rounded-2xl p-5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <p className="text-gray-300 text-center italic">
            "{primaryFanType.quote}"
          </p>
        </motion.div>

        {/* Secondary type hint */}
        {secondaryFanType && secondaryFanType.id !== primaryFanType.id && (
          <motion.div
            className="text-center mb-8 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <p>
              也可能是：<span className="text-gray-300">{secondaryFanType.emoji} {secondaryFanType.name}</span>
            </p>
          </motion.div>
        )}

        {/* Publish result toast */}
        {publishResult && (
          <motion.div
            className={`rounded-xl p-4 mb-4 text-center ${
              publishResult.success
                ? 'bg-green-500/20 border border-green-500/30 text-green-400'
                : 'bg-red-500/20 border border-red-500/30 text-red-400'
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {publishResult.success ? '✅ ' : '❌ '}
            {publishResult.message}
          </motion.div>
        )}

        {/* Action buttons */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          <motion.button
            onClick={handleSaveCardDownload}
            className="w-full py-4 rounded-full text-white font-bold gradient-bg shadow-lg touch-feedback"
            whileTap={{ scale: 0.98 }}
          >
            📸 保存分享卡片
          </motion.button>

          <motion.button
            onClick={handlePublishToZhihu}
            disabled={isPublishing}
            className="w-full py-4 rounded-full text-white font-bold bg-blue-600 hover:bg-blue-700 touch-feedback disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            whileTap={{ scale: 0.98 }}
          >
            {isPublishing ? (
              <>
                <span className="animate-spin">⏳</span>
                发布中...
              </>
            ) : (
              <>
                🇨🇳 同步到知乎想法
              </>
            )}
          </motion.button>

          <motion.button
            onClick={handleShare}
            className="w-full py-4 rounded-full text-white font-bold bg-cardBg border border-white/10 touch-feedback"
            whileTap={{ scale: 0.98 }}
          >
            📢 分享给朋友
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
