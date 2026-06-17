import { AnimatePresence, motion } from 'framer-motion'
import { useQuizStore } from './hooks/useQuiz'
import Home from './components/Home'
import Guide from './components/Guide'
import Question from './components/Question'
import Reveal from './components/Reveal'
import Result from './components/Result'
import TeamResult from './components/TeamResult'

const pageVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
}

const pageTransition = { duration: 0.3, ease: 'easeInOut' }

function App() {
  const { phase, quizType, setQuizType, goToQuiz, reset } = useQuizStore()

  const renderPage = () => {
    switch (phase) {
      case 'home':
        return <Home onSelect={setQuizType} />
      case 'guide':
        return <Guide onStart={goToQuiz} onBack={reset} />
      case 'quiz':
        return <Question />
      case 'reveal':
        return <Reveal />
      case 'result':
        return quizType === 'team' ? <TeamResult /> : <Result />
      default:
        return <Home onSelect={setQuizType} />
    }
  }

  return (
    <div className="min-h-screen bg-primary relative">
      {/* Background pattern */}
      <div
        className="fixed inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #E94560 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #00D9C0 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={`${phase}-${quizType}`}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={pageTransition}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App
