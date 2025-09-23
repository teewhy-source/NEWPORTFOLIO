import { motion } from 'framer-motion'
import { FaCode, FaRocket, FaHeart, FaDownload } from 'react-icons/fa'
import './About.scss'

const About = () => {
  const stats = [
    { icon: <FaCode />, number: '5+', label: 'Projects Completed' },
    { icon: <FaRocket />, number: '3+', label: 'Years Experience' },
    { icon: <FaHeart />, number: '100%', label: 'Client Satisfaction' }
  ]

  const techStack = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 95 },
    { name: 'TypeScript', level: 85 },
    { name: 'next', level: 92 },
    { name: 'CSS/SCSS', level: 92 },
    // { name: 'Node.js', level: 78 },
    // { name: 'Python', level: 75 }
  ]

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

  return (
    <section id="about" className="about">
      <div className="about__container">
        <motion.div 
          className="about__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div className="about__header" variants={itemVariants}>
            <span className="about__subtitle">About Me</span>
            <h2 className="about__title">Crafting Digital Excellence</h2>
            <div className="about__divider"></div>
          </motion.div>

          <div className="about__grid">
            {/* Left Column - Text Content */}
            <motion.div className="about__text" variants={itemVariants}>
              <div className="about__story">
                <h3>My Journey</h3>
                <p>
                  Hello! I'm Edidi Taiye Olalekan, a passionate frontend developer with a love for 
                  creating beautiful, functional, and user-centered digital experiences. 
                  My journey in web development started 5 years ago when I built my first 
                  website, and I've been hooked ever since.
                </p>
                <p>
                  I specialize in building exceptional websites and applications using 
                  modern technologies like React, TypeScript, Next and modern CSS. I'm 
                  passionate about creating accessible, performant, and scalable solutions 
                  that make a real difference.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, 
                  playing Game (pes), or enjoying a good cup of Despirados drink 
                  while reading about the latest web trends.
                </p>
              </div>

              {/* Stats */}
              <motion.div className="about__stats" variants={itemVariants}>
                {stats.map((stat, index) => (
                  <div key={index} className="about__stat">
                    <div className="about__stat-icon">{stat.icon}</div>
                    <div className="about__stat-content">
                      <div className="about__stat-number">{stat.number}</div>
                      <div className="about__stat-label">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Download Button */}
              <motion.a 
                href="/resume.pdf" 
                className="about__resume-btn"
                download
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="about__resume-icon" />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Right Column - Skills */}
            <motion.div className="about__skills" variants={itemVariants}>
              <h3>Technical Skills</h3>
              <div className="about__skills-list">
                {techStack.map((tech, index) => (
                  <div key={tech.name} className="about__skill">
                    <div className="about__skill-header">
                      <span className="about__skill-name">{tech.name}</span>
                      <span className="about__skill-percent">{tech.level}%</span>
                    </div>
                    <div className="about__skill-bar">
                      <motion.div 
                        className="about__skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="about__tech-tags">
                <h4>Technologies I Work With</h4>
                <div className="about__tags">
                  {['React', 'TypeScript', 'JavaScript', 'Next.js',  'Express', 
                    'MongoDB',  'Git',  'AWS', 'Figma'].map((tech) => (
                    <span key={tech} className="about__tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About