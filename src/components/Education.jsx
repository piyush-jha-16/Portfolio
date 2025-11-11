import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Education.css'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const educationData = [
    {
      degree: 'Bachelor of Technology - CSE',
      institution: 'Jaypee University of Engineering and Technology',
      period: 'Current - 3rd Year',
      grade: 'CGPA: 8.1/10',
      description: 'Pursuing B.Tech in Computer Science and Engineering with focus on software development, algorithms, data structures, and modern technologies.',
    },
    {
      degree: 'Higher Secondary Education (12th)',
      institution: 'Mata Kasturi Devi School',
      period: '2021 - 2022',
      grade: '81.2%',
      description: 'Completed 12th grade with strong foundation in Mathematics, Physics, and Computer Science. Scored 81% with excellence in STEM subjects.',
    },
    {
      degree: 'Secondary Education (10th)',
      institution: 'Vishwa Bharati Public School',
      period: '2019 - 2020',
      grade: '93.6%',
      description: 'Completed 10th grade with distinction. Built strong fundamentals in core subjects including Mathematics, Science, and English.',
    },
  ]

  return (
    <section id="education" className="section education-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        
        <div className="timeline">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div 
                className="timeline-dot"
                whileHover={{ scale: 1.5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
              <motion.div
                className="timeline-content"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h3>{item.degree}</h3>
                <p className="timeline-institution">{item.institution}</p>
                <div className="timeline-info">
                  <p className="timeline-date">{item.period}</p>
                  <p className="timeline-grade">{item.grade}</p>
                </div>
                <p className="timeline-description">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
