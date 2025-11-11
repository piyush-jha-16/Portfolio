import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const handleScroll = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero-section">
      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-content" variants={itemVariants}>
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Piyush Jha
          </motion.h1>
          
          <motion.div 
            className="hero-subtitle"
            variants={itemVariants}
          >
            <span className="typing-text">Cybersecurity Enthusiast</span>
          </motion.div>
          
          <motion.p 
            className="hero-description"
            variants={itemVariants}
          >
            Software Engineer | Developer | Problem Solver
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            variants={itemVariants}
          >
            <motion.button
              className="btn btn-primary"
              onClick={() => handleScroll('#contact')}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255, 255, 255, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
            <motion.button
              className="btn btn-secondary"
              onClick={() => handleScroll('#projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Work
            </motion.button>
            <motion.a
              href="/Piyush_Jha_Resume.pdf"
              download="Piyush_Jha_Resume.pdf"
              className="btn btn-resume"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            className="scroll-arrow"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↓
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
