import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Certifications.css'

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const certificationsData = [
    {
      title: 'Advanced Data Structures & Algorithms',
      issuer: 'Coding Ninjas',
      date: 'December 2024',
      credentialId: 'CN-ADSA-2024-789',
      description: 'Comprehensive certification in advanced data structures, algorithms, problem-solving techniques, and competitive programming strategies.',
      skills: ['Data Structures', 'Algorithms', 'Problem Solving', 'Dynamic Programming', 'Graph Theory'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="48" height="48">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
          <line x1="12" y1="2" x2="12" y2="22"/>
        </svg>
      ),
      color: '#FF6B35',
      verifyLink: '#',
    },
    {
      title: 'Object-Oriented Programming (OOPs) Mastery',
      issuer: 'TakeUForward+',
      date: 'September 2025',
      credentialId: 'NN1A-2hlbXI',
      description: 'Advanced certification in Object-Oriented Programming principles including inheritance, polymorphism, encapsulation, abstraction, and design patterns.',
      skills: ['OOP Concepts', 'Design Patterns', 'Inheritance', 'Polymorphism', 'Encapsulation', 'SOLID Principles'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="48" height="48">
          <rect x="3" y="3" width="7" height="7"/>
          <rect x="14" y="3" width="7" height="7"/>
          <rect x="14" y="14" width="7" height="7"/>
          <rect x="3" y="14" width="7" height="7"/>
        </svg>
      ),
      color: '#FF3366',
      verifyLink: 'https://static.takeuforward.org/certificate-2hLbXI.pdf',
    },
    {
      title: 'Computer Networks & Communication',
      issuer: 'TakeUForward+',
      date: 'December 2025',
      credentialId: 'LHOUfCu_',
      description: 'Comprehensive certification covering network protocols, TCP/IP, routing algorithms, network security, wireless communications, and modern networking technologies.',
      skills: ['TCP/IP', 'Network Security', 'Routing Protocols', 'OSI Model', 'Network Architecture', 'Wireless Networks'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="48" height="48">
          <circle cx="12" cy="12" r="2"/>
          <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/>
        </svg>
      ),
      color: '#4CAF50',
      verifyLink: 'https://static.takeuforward.org/certificates/certificate-LHOUfCu_.pdf',
    },
    
    {
      title: 'TechA Ethical Hacking Expert',
      issuer: 'Infosys Springboard',
      date: 'November 2025',
      credentialId: 'INF-TEHE-2024-123',
      description: 'Expert-level certification in ethical hacking, penetration testing, vulnerability assessment, security auditing, and advanced cybersecurity practices.',
      skills: ['Ethical Hacking', 'Penetration Testing', 'Security Auditing', 'Vulnerability Assessment', 'Network Security'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="48" height="48">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ),
      color: '#00D9FF',
      verifyLink: 'https://drive.google.com/file/d/1w6x0SSd3XzRUGTXBqjT4elbYsjFQTTQ3/view?usp=sharing',
    },
    {
      title: 'Digital Marketing Strategist',
      issuer: 'Udemy',
      date: 'March 2025',
      credentialId: 'e804f8d6-2de4-48ee-89c6-c523072a47c0',
      description: 'Professional certification in digital marketing strategies, SEO optimization, social media marketing, content creation, and analytics-driven campaigns.',
      skills: ['SEO', 'Social Media Marketing', 'Content Strategy', 'Google Analytics', 'Campaign Management'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="48" height="48">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      ),
      color: '#A259FF',
      verifyLink: 'https://www.udemy.com/certificate/UC-e804f8d6-2de4-48ee-89c6-c523072a47c0/',
    },
    
  ]

  return (
    <section id="certifications" className="section certifications-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Certifications
        </motion.h2>
        
        <div className="certifications-grid">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              className="certification-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
            >
              <div className="cert-header">
                <motion.div 
                  className="cert-icon"
                  style={{ color: cert.color }}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15 + 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {cert.icon}
                </motion.div>
                <div className="cert-badge" style={{ backgroundColor: `${cert.color}20`, color: cert.color }}>
                  Verified
                </div>
              </div>
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-issuer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  <span>{cert.issuer}</span>
                </div>
                <div className="cert-date">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <span>{cert.date}</span>
                </div>
                <p className="cert-description">{cert.description}</p>

                <div className="cert-skills">
                  {cert.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="cert-skill-tag"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.15 + skillIndex * 0.05 + 0.3
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="cert-footer">
                <div className="cert-credential">
                  <span className="credential-label">ID:</span>
                  <span className="credential-id">{cert.credentialId}</span>
                </div>
                <motion.a
                  href={cert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="verify-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  Verify
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
