import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaArrowRight } from 'react-icons/fa'
import './Hero.scss'
import resume from "../../../assets/images/edidi-taiye-FlowCV-Resume-20250709.pdf"
import profileImage from '../../../assets/images/FINEBOY.jpg'

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  }

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaTwitter />, href: "https://twitter.com", label: "Twitter" }
  ]

  // Scan-friendly credibility pills
  const highlights = [
    { label: '3+ yrs', sub: 'AI data annotation' },
    { label: '5+ types', sub: 'Image · Text · Audio · BBox · NER' },
    { label: '3 domains', sub: 'Medical · AV · NLP' },
    { label: 'CVAT', sub: 'Primary annotation tool' }
  ]

  // Tech + AI-data badges
  const techBadges = [
    { name: 'React',      class: 'hero__tech-badge--react',    icon: '⚛️', color: '#61DAFB' },
    { name: 'TypeScript', class: 'hero__tech-badge--ts',       icon: '📘', color: '#3178C6' },
    { name: 'JavaScript', class: 'hero__tech-badge--js',       icon: '💛', color: '#F7DF1E' },
    { name: 'Python',     class: 'hero__tech-badge--py',       icon: '🐍', color: '#3776AB' },
    { name: 'Tailwind',   class: 'hero__tech-badge--tailwind', icon: '🌊', color: '#06B6D4' },
    { name: 'Next.js',    class: 'hero__tech-badge--next',     icon: '▲',  color: '#A5E8FD' },
    { name: 'CVAT',       class: 'hero__tech-badge--cvat',     icon: '🎯', color: '#FF6B35' },
    { name: 'AI Data',    class: 'hero__tech-badge--ai',       icon: '🧠', color: '#8B5CF6' }
  ]

  return (
    <section id="hero" className="hero">
      <div className="hero__background">
        <div className="hero__shape hero__shape--1"></div>
        <div className="hero__shape hero__shape--2"></div>
        <div className="hero__shape hero__shape--3"></div>
        <div className="hero__gradient"></div>
      </div>

      <div className="hero__container">
        <div className="hero__grid">
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
                <span className="hero__title--primary">Edidi Taiye Olalekan.</span>
                <br />
                <span className="hero__title--secondary">
                  I build AI-ready products &amp; datasets
                </span>
              </motion.h1>

              <motion.p className="hero__description" variants={itemVariants}>
                Software developer with 3+ years of hands-on experience in AI data
                annotation and labeling — image, text, audio, bounding boxes, and Named
                Entity Recognition (NER). I've delivered work across medical, autonomous
                driving, and NLP domains using tools like CVAT, and I build frontends that
                make AI products usable.
              </motion.p>

              {/* NEW: credibility highlights */}
              <motion.div className="hero__highlights" variants={itemVariants}>
                {highlights.map((h) => (
                  <div key={h.label} className="hero__highlight">
                    <strong>{h.label}</strong>
                    <span>{h.sub}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

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
                  href={resume}
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

          <motion.div
            className="hero__image-container"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="hero__image-wrapper">
              <img
                src={profileImage}
                alt="Edidi Taiye Olalekan — Software Developer & AI Data Specialist"
                className="hero__image"
              />
              <div className="hero__image-glow"></div>
              <div className="hero__image-frame"></div>

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