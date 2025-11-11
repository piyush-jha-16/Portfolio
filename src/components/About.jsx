import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './About.css'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { number: '3rd', label: 'Year Student' },
    { number: '20+', label: 'Projects' },
    { number: '10+', label: 'Technologies' },
  ]

  const interests = [
    'Software Development',
    'Problem Solving',
    'Web Development',
    'Open Source',
    'Competitive Programming',
    'System Design',
  ]

  return (
    <section id="about" className="section about-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <div className="about-wrapper">
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-text">
              <p>
                Hello! I'm <span className="highlight">Piyush Jha</span>, a passionate Computer Science Engineering student currently in my 3rd year. I'm deeply interested in software development, problem-solving, and building innovative solutions that make a real impact.
              </p>
              <p>
                I believe in continuous learning and staying updated with the latest technologies. My journey in computer science has been driven by curiosity and a desire to understand how things work at a fundamental level.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or working on personal projects that challenge my skills and push me to learn something new every day.
              </p>
            </div>

            <div className="interests-section">
              <h3>Areas of Interest</h3>
              <div className="interests-grid">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    className="interest-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    {interest}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
