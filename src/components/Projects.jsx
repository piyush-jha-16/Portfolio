import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import './Projects.css'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (selectedImage) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }
    return () => {
      document.body.classList.remove('modal-open')
    }
  }, [selectedImage])

  const projectsData = [
    {
      number: '01',
      title: 'Threat Guard - Intelligent Threat Detection Platform',
      description: 'ThreatGuard Professional is a full-stack security platform designed for cybersecurity professionals and power users. It delivers deep file inspection, live URL analysis, network reconnaissance, and application monitoring all through a sleek, modern interface with dark mode support, PDF reporting, and role-based user management.',
      tags: ['React', 'TypeScript', 'FastAPI', 'Tailwind CSS', 'YARA'],
      link: 'https://github.com/piyush-jha-16/Threat-Guard-Complete-Threat-Analysis-',
      liveDemo: 'https://threat-guard-complete-threat-analys.vercel.app/',
      image: '/images/threat-gaurd/1.png',
      images: [
        '/images/threat-gaurd/1.png',
        '/images/threat-gaurd/2.png',
        '/images/threat-gaurd/3.png',
        '/images/threat-gaurd/4.png',
      ],
    },
    {
      number: '02',
      title: 'Cipher Vault - Secure Password Manager',
      description: 'A modern, secure password manager with military-grade encryption, Google OAuth integration, and a beautiful user interface. Store, manage, and organize your passwords with confidence. It features advanced hashing algorithms and seamless environment variable management to ensure your digital identity remains uncompromised.',
      tags: ['Flask', 'AES-256', 'Tailwind CSS', 'Google OAuth', 'JavaScript'],
      link: 'https://github.com/piyush-jha-16/Cipher-Vault',
      liveDemo: 'https://cipher-vault-1.onrender.com/',
      image: '/images/cipher-vault/1.png',
      images: [
        '/images/cipher-vault/1.png',
        '/images/cipher-vault/2.png',
        '/images/cipher-vault/3.png',
        '/images/cipher-vault/4.png',
      ],
    },
    {
      number: '03',
      title: 'ThreatShield - Email Phishing Detection System',
      description: 'A professional, enterprise-grade email phishing detection web application using rule-based and heuristic analysis. This system provides comprehensive security analysis without relying on AI or Machine Learning, using deterministic detection rules instead.',
      tags: ['Python Flask', 'Vanilla JS', 'Custom CSS', 'HTML5', 'Rule-Based Engine'],
      link: 'https://github.com/piyush-jha-16/ThreatShield-Phishing-Email-Detector',
      liveDemo: 'https://threat-shield-phishing-email-detect.vercel.app/',
      image: '/images/threat-shield/1.png',
      images: [
        '/images/threat-shield/1.png',
        '/images/threat-shield/2.png',
        '/images/threat-shield/3.png',
        '/images/threat-shield/4.png',
      ],
    },
    {
      number: '04',
      title: 'SecureStack Academy - Interactive Vulnerability Lab',
      description: 'SecureStack Academy is a professional, interactive web application designed to teach cybersecurity professionals and enthusiasts about the OWASP Top 10 vulnerabilities through hands-on practice. Each lab offers two modes: Vulnerable Mode - Explore and exploit real vulnerabilities, Secure Mode - Learn how to fix and prevent attacks.',
      tags: ['Node.js', 'Express.js', 'SQLite', 'Vanilla JS', 'OWASP Top 10'],
      link: 'https://github.com/piyush-jha-16/Interactive-Vulnerability-Lab?tab=readme-ov-file',
      liveDemo: 'https://interactive-vulnerability-lab.vercel.app/',
      image: '/images/owasp-lab/1.png',
      images: [
        '/images/owasp-lab/1.png',
        '/images/owasp-lab/2.png',
        '/images/owasp-lab/3.png',
        '/images/owasp-lab/4.png',
      ],
    },
    {
      number: '05',
      title: 'Network Vulnerability Checker',
      description: 'A comprehensive full-stack web application for automated network security assessment and vulnerability scanning on Windows systems. This tool provides real-time security analytics, interactive threat visualization, and automated remediation capabilities for system administrators and security professionals.',
      tags: ['Python', 'Flask', 'PowerShell', 'Chart.js', 'Bootstrap'],
      link: 'https://github.com/piyush-jha-16/Network-Vulnerability-Checker',
      liveDemo: 'https://github.com/piyush-jha-16/Network-Vulnerability-Checker',
      image: '/images/network-threat/1.png',
      images: [
        '/images/network-threat/1.png',
        '/images/network-threat/2.png',
        '/images/network-threat/3.png',
        '/images/network-threat/4.png',
      ],
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
              <div className="project-image-container" onClick={() => {
                setSelectedImage(project)
                setCurrentImageIndex(0)
              }}>
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
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
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
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="modal-gallery-container">
              {selectedImage.images && selectedImage.images.length > 1 && (
                <button
                  className="gallery-nav prev"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex((prev) => (prev === 0 ? selectedImage.images.length - 1 : prev - 1));
                  }}
                  aria-label="Previous image"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
              )}
              <img
                src={selectedImage.images ? selectedImage.images[currentImageIndex] : selectedImage.image}
                alt={selectedImage.title}
                className="modal-image"
              />
              {selectedImage.images && selectedImage.images.length > 1 && (
                <button
                  className="gallery-nav next"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex((prev) => (prev === selectedImage.images.length - 1 ? 0 : prev + 1));
                  }}
                  aria-label="Next image"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              )}
            </div>
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
