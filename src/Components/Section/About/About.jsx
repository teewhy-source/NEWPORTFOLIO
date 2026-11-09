import { motion } from 'framer-motion'
import { FaCode, FaRocket, FaHeart, FaDatabase, FaDownload } from 'react-icons/fa'
import './About.scss'
import resume from '../../../assets/images/Edidi-taiye-FlowCV-Resume-20250709.pdf'

const About = () => {
  const stats = [
    { icon: <FaCode />,     number: '3+',   label: 'Years in AI Data' },
    { icon: <FaRocket />,   number: '5+',   label: 'Annotation Types' },
    { icon: <FaDatabase />, number: '3',    label: 'Industry Domains' },
    { icon: <FaHeart />,    number: '100%', label: 'Quality Focus' }
  ]

  // level = bar width (0–100, for animation only)
  // label = displayed proficiency
  const devStack = [
    { name: 'React',      level: 95, label: 'Expert' },
    { name: 'JavaScript', level: 95, label: 'Expert' },
    { name: 'TypeScript', level: 80, label: 'Advanced' },
    { name: 'Next.js',    level: 85, label: 'Advanced' },
    { name: 'CSS/SCSS',   level: 92, label: 'Expert' }
  ]

  const dataStack = [
    { name: 'Image Annotation (BBox / Segmentation)', level: 95, label: 'Expert' },
    { name: 'Text & NER Labeling',                     level: 85, label: 'Advanced' },
    { name: 'Audio Annotation',                        level: 78, label: 'Advanced' },
    { name: 'CVAT & QA Workflows',                     level: 92, label: 'Expert' }
  ]

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
            <h2 className="about__title">Building at the Intersection of Code &amp; Data</h2>
            <div className="about__divider"></div>
          </motion.div>

          <div className="about__grid">
            {/* Left Column — Narrative + AI Data Highlight + Stats */}
            <motion.div className="about__text" variants={itemVariants}>
              <div className="about__story">
                <h3>My Journey</h3>
                <p>
                  I'm Edidi Taiye Olalekan — a software developer with over three years
                  of hands-on experience in AI data annotation and labeling. My career
                  started in frontend engineering, but working closely with data teams
                  pulled me into the world of high-quality training data, and I've been
                  building at that intersection ever since.
                </p>
                <p>
                  On the annotation side, I've worked across <strong>image, text, audio,
                  bounding boxes, and Named Entity Recognition (NER)</strong>, using
                  tools like <strong>CVAT</strong> to produce datasets that hold up under
                  real model training. My domain experience spans <strong>medical
                  imaging, autonomous driving, and NLP</strong> — environments where
                  precision, edge-case handling, and consistent labeling guidelines
                  aren't optional.
                </p>
                <p>
                  On the engineering side, I build fast, accessible frontends with React,
                  TypeScript, and Next.js — often for teams building or consuming AI
                  products. When I'm not coding or reviewing annotation batches, you'll
                  find me exploring new ML tooling, playing PES, or with an espresso in
                  hand reading about the latest in AI and web.
                </p>
              </div>

              {/* AI Data highlight card */}
              <motion.div className="about__ai-block" variants={itemVariants}>
                <h4>AI Data &amp; Annotation</h4>
                <ul>
                  <li><strong>Types:</strong> image, text, audio, bounding boxes, NER</li>
                  <li><strong>Domains:</strong> medical, autonomous driving, NLP</li>
                  <li><strong>Tools:</strong> CVAT, QA &amp; guideline workflows</li>
                  <li><strong>Focus:</strong> consistency, edge-case handling, dataset quality</li>
                </ul>
              </motion.div>

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

              <motion.a
                href={resume}
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

            {/* Right Column — Skills split into Dev + AI Data */}
            <motion.div className="about__skills" variants={itemVariants}>
              <h3>Technical Skills</h3>

              <div className="about__skills-group">
                <h4>Software Development</h4>
                <div className="about__skills-list">
                  {devStack.map((tech, index) => (
                    <div key={tech.name} className="about__skill">
                      <div className="about__skill-header">
                        <span className="about__skill-name">{tech.name}</span>
                        <span className="about__skill-level">{tech.label}</span>
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
              </div>

              <div className="about__skills-group">
                <h4>AI Data &amp; Annotation</h4>
                <div className="about__skills-list">
                  {dataStack.map((tech, index) => (
                    <div key={tech.name} className="about__skill">
                      <div className="about__skill-header">
                        <span className="about__skill-name">{tech.name}</span>
                        <span className="about__skill-level about__skill-level--data">{tech.label}</span>
                      </div>
                      <div className="about__skill-bar">
                        <motion.div
                          className="about__skill-progress about__skill-progress--data"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: index * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Tags */}
              <div className="about__tech-tags">
                <h4>Technologies &amp; Tools</h4>
                <div className="about__tags">
                  {[
                    'React', 'TypeScript', 'JavaScript', 'Next.js',
                    'SCSS', 'Git', 'Figma',
                    'CVAT', 'Image Annotation', 'Bounding Boxes',
                    'NER', 'Audio Labeling', 'NLP', 'Medical Imaging',
                    'Autonomous Driving'
                  ].map((tech) => (
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