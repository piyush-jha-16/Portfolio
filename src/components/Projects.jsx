import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Projects.css'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projectsData = [
    {
      number: '01',
      title: 'Interactive Vulnerability Lab',
      description: 'A hands-on cybersecurity learning platform designed for practicing penetration testing and vulnerability exploitation in a safe, controlled environment. Features real-world scenarios and challenges.',
      tags: ['Python', 'Web Security', 'CTF', 'Ethical Hacking','OWASP Top 10'],
      link: 'https://github.com/piyush-jha-16/Interactive-Vulnerability-Lab',
      image: '/images/securestack-academy.png',
    },
    {
      number: '02',
      title: 'Cipher Vault',
      description: 'A secure password manager and encryption tool that uses advanced cryptographic algorithms to protect sensitive data. Features include password generation, secure storage, and multi-layer encryption for maximum security.',
      tags: ['Python', 'Cryptography', 'Security', 'Tkinter','Encryption'],
      link: 'https://github.com/piyush-jha-16/Cipher-Vault',
      image: '/images/cipher-vault.png',
    },
    {
      number: '03',
      title: 'Threat IQ',
      description: 'An intelligent threat detection and analysis system that monitors network traffic and identifies potential security threats using machine learning algorithms. Provides real-time alerts and threat intelligence.',
      tags: ['Python', 'Machine Learning', 'Threat Detection', 'Analytics'],
      link: 'https://github.com/piyush-jha-16/Threat-IQ',
      image: '/images/threat-iq.png',
    },
    {
      number: '04',
      title: 'Network Vulnerability Checker',
      description: 'An automated network security tool that scans and identifies potential vulnerabilities in network infrastructure. Provides detailed reports on security weaknesses and suggests remediation strategies.',
      tags: ['Python', 'Network Security', 'Penetration Testing', 'Scanning'],
      link: 'https://github.com/piyush-jha-16/Network-Vulnerability-Checker',
      image: '/images/network-risk.png',
    },
  ]

  return (
    <section id="projects" className="section projects-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <motion.div 
                    className="project-number"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                  >
                    {project.number}
                  </motion.div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="tag"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.15 + tagIndex * 0.05 
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  whileHover={{ x: 5 }}
                >
                  View Project →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
