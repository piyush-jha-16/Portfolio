import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import './Projects.css'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedImage, setSelectedImage] = useState(null)

  const projectsData = [
    {
      number: '01',
      title: 'SecureStack Academy - Interactive Vulnerability Lab',
      description: 'A hands-on cybersecurity learning platform designed for practicing penetration testing and vulnerability exploitation in a safe, controlled environment. Features real-world scenarios and challenges.',
      tags: ['Python', 'Web Security', 'CTF', 'Ethical Hacking','OWASP Top 10'],
      link: 'https://github.com/piyush-jha-16/Interactive-Vulnerability-Lab',
      liveDemo: 'https://interactive-vulnerability-lab.vercel.app/',
      image: '/images/securestack-academy.png',
    },
    {
      number: '02',
      title: 'Cipher Vault - Secure Password Manager',
      description: 'A secure password manager and encryption tool that uses advanced cryptographic algorithms to protect sensitive data. Features include password generation, secure storage, and multi-layer encryption for maximum security.',
      tags: ['Python', 'Cryptography', 'Security', 'Tkinter','Encryption'],
      link: 'https://github.com/piyush-jha-16/Cipher-Vault',
      liveDemo: 'https://cipher-vault-1.onrender.com/',
      image: '/images/cipher-vault.png',
    },
    {
      number: '03',
      title: 'ThreatShield - Email Phishing Detection System',
      description: 'An advanced email security solution that uses machine learning to detect and prevent phishing attacks. Features real-time analysis of email content, URL scanning, and automated threat intelligence to protect against sophisticated phishing attempts.',
      tags: ['Python', 'Rule Based Detection', 'Email Security', 'Phishing Detection', 'Threat Intelligence'],
      link: 'https://github.com/piyush-jha-16/ThreatShield-Phishing-Email-Detector',
      liveDemo: 'https://threat-shield-phishing-email-detect.vercel.app/',
      image: '/images/threatshield.png',
    },
    {
      number: '04',
      title: 'Threat IQ - Advanced Threat Scanner',
      description: 'An intelligent threat detection and analysis system that monitors network traffic and identifies potential security threats using machine learning algorithms. Provides real-time alerts and threat intelligence.',
      tags: ['Python', 'Machine Learning', 'Threat Detection', 'Analytics'],
      link: 'https://github.com/piyush-jha-16/Threat-IQ',
      liveDemo: 'https://github.com/piyush-jha-16/Threat-IQ',
      image: '/images/threat-iq.png',
    },
    {
      number: '05',
      title: 'Network Vulnerability Checker',
      description: 'An automated network security tool that scans and identifies potential vulnerabilities in network infrastructure. Provides detailed reports on security weaknesses and suggests remediation strategies.',
      tags: ['Python', 'Network Security', 'Penetration Testing', 'Scanning'],
      link: 'https://github.com/piyush-jha-16/Network-Vulnerability-Checker',
      liveDemo: 'https://github.com/piyush-jha-16/Network-Vulnerability-Checker',
      image: '/images/network-risk.png',
    },
    {
      number: '06',
      title: 'Basic Vulnerability Detector',
      description: 'A comprehensive Python-based cybersecurity scanning tool designed to perform network security assessments and vulnerability detection. This tool provides essential security scanning capabilities for network administrators and cybersecurity professionals.',
      tags: ['Python', 'Network Scan', 'Port Scanning', 'Firewall Detection'],
      link: 'https://github.com/piyush-jha-16/Basic-Vulnerability-Checker',
      liveDemo: 'https://github.com/piyush-jha-16/Basic-Vulnerability-Checker',
      image: '/images/basicVulner.png',
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
              <div className="project-image-container" onClick={() => setSelectedImage(project)}>
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
                <div className="project-links">
                  <motion.a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link live-demo"
                    whileHover={{ scale: 1.05 }}
                  >
                    Live Demo
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="arrow-icon">
                      <path d="M7 17L17 7M17 7H7M17 7v10"/>
                    </svg>
                  </motion.a>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link view-code"
                    whileHover={{ x: 5 }}
                  >
                    View Code →
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <motion.div 
          className="image-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div 
            className="image-modal-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="close-modal" 
              onClick={() => setSelectedImage(null)}
              aria-label="Close preview"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
            <img src={selectedImage.image} alt={selectedImage.title} className="modal-image" />
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Projects
