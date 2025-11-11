import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Experience.css'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experienceData = [
    {
      position: 'Android Developer Intern',
      company: 'Consilio Intelligence and Research Lab',
      location: 'Noida, India',
      duration: 'June 2025 - August 2025',
      type: 'Internship',
      achievements: [
        'Developed and deployed a cross-platform Android application using Java and XML with optimized backend APIs.',
        'Integrated RESTful APIs to enable real-time data sync and improved app responsiveness by 20%.',
        'Collaborated in Agile sprints to debug multi-device issues and enhance feature scalability.',
        'Reduced overall code complexity by 20% through modular architecture and performance tuning.',
        'Participated in code reviews and contributed to technical documentation for the development team',
      ],
      technologies: ['Java', 'XML', 'REST API', 'Git','GitHub', 'Agile Methodologies','Android Studio'],
    },
  ]

  return (
    <section id="experience" className="section experience-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>
        
        <div className="experience-container">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              className="experience-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              {/* Header Section */}
              <div className="experience-header">
                <div className="experience-title-section">
                  <h3 className="experience-position">{item.position}</h3>
                  <div className="experience-company-row">
                    <span className="experience-company">{item.company}</span>
                    <span className="experience-separator">•</span>
                    <span className="experience-location">{item.location}</span>
                  </div>
                </div>
                <div className="experience-meta">
                  <span className="experience-type">{item.type}</span>
                  <span className="experience-duration">{item.duration}</span>
                </div>
              </div>

              {/* Achievements Section */}
              <div className="experience-achievements">
                <ul className="achievements-list">
                  {item.achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Technologies Section */}
              <div className="experience-technologies">
                <p className="tech-label">Technologies:</p>
                <div className="tech-tags">
                  {item.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.5 + idx * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
