import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaArrowRight } from 'react-icons/fa'
import './Hero.scss'

// Import your profile image (update the path to your actual image)
import profileImage from '../../../assets/images/FINEBOY.jpg' // or profile.png // or profile.png

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects')
    if (projectsSection) {
      const headerHeight = document.querySelector('.header').offsetHeight
      const targetPosition = projectsSection.offsetTop - headerHeight
      window.scrollTo({ top: targetPosition, behavior: 'smooth' })
    }
  }

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      const headerHeight = document.querySelector('.header').offsetHeight
      const targetPosition = aboutSection.offsetTop - headerHeight
      window.scrollTo({ top: targetPosition, behavior: 'smooth' })
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaTwitter />, href: "https://twitter.com", label: "Twitter" }
  ]

  // Tech badges data
  const techBadges = [
    { 
      name: 'React', 
      class: 'hero__tech-badge--react',
      icon: '⚛️',
      color: '#61DAFB'
    },
    { 
      name: 'TypeScript', 
      class: 'hero__tech-badge--ts',
      icon: '📘',
      color: '#3178C6'
    },
    { 
      name: 'JavaScript', 
      class: 'hero__tech-badge--js',
      icon: '💛',
      color: '#F7DF1E'
    },
    { 
      name: 'CSS3', 
      class: 'hero__tech-badge--css',
      icon: '🎨',
      color: '#1572B6'
    },
    { 
      name: 'Tailwind', 
      class: 'hero__tech-badge--tailwind',
      icon: '🌊',
      color: '#06B6D4'
    },
    { 
      name: 'HTML5', 
      class: 'hero__tech-badge--html',
      icon: '🌐',
      color: '#E34F26'
    },
    { 
      name: 'NEXT JS', 
      class: 'hero__tech-badge--html',
      icon: '🌐',
      color: '#E34F26'
    }
  ]

  return (
    <section id="hero" className="hero">
      {/* Animated Background Elements */}
      <div className="hero__background">
        <div className="hero__shape hero__shape--1"></div>
        <div className="hero__shape hero__shape--2"></div>
        <div className="hero__shape hero__shape--3"></div>
        <div className="hero__gradient"></div>
      </div>

      <div className="hero__container">
        <div className="hero__grid">
          {/* Left Column - Text Content */}
          <motion.div 
            className="hero__content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="hero__text" variants={itemVariants}>
              <motion.p className="hero__greeting" variants={itemVariants}>
                Hi, my name is
              </motion.p>
              
              <motion.h1 className="hero__title" variants={itemVariants}>
                <span className="hero__title--primary">Edidi Taiye OLalekan.</span>
                <br />
                <span className="hero__title--secondary">I build digital experiences</span>
              </motion.h1>
              
              <motion.p className="hero__description" variants={itemVariants}>
                I'm a passionate frontend developer specializing in creating exceptional 
                digital experiences. Currently, I focus on building accessible, 
                human-centered products using modern technologies.
              </motion.p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div className="hero__actions" variants={itemVariants}>
              <div className="hero__buttons">
                <motion.button 
                  className="hero__btn hero__btn--primary"
                  onClick={scrollToProjects}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                  <FaArrowRight className="hero__btn-icon" />
                </motion.button>
                
                <motion.a 
                  href="/resume.pdf" 
                  className="hero__btn hero__btn--secondary"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload className="hero__btn-icon" />
                  Download CV
                </motion.a>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div className="hero__social" variants={itemVariants}>
              <div className="hero__social-links">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero__social-link"
                    aria-label={link.label}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
              <div className="hero__social-line"></div>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div 
            className="hero__image-container"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="hero__image-wrapper">
              <img 
                src={profileImage} 
                alt="Your Name - Frontend Developer"
                className="hero__image"
              />
              <div className="hero__image-glow"></div>
              <div className="hero__image-frame"></div>
              
              {/* Rotating Tech Badges */}
              {techBadges.map((tech, index) => (
                <div 
                  key={tech.name}
                  className={`hero__tech-badge ${tech.class}`}
                  style={{ 
                    '--badge-index': index,
                    '--total-badges': techBadges.length,
                    '--badge-color': tech.color
                  }}
                >
                  <span className="hero__tech-icon">{tech.icon}</span>
                  <span className="hero__tech-text">{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="hero__scroll"
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="hero__scroll-text">Scroll down</div>
          <motion.div
            className="hero__scroll-arrow"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero