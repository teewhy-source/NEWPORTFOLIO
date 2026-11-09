import { motion } from 'framer-motion'
import { FaCode, FaPalette, FaTools, FaDatabase, FaBrain } from 'react-icons/fa'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiFigma
} from "react-icons/si";
import './Skills.scss'

const Skills = () => {
  // level = bar width (0–100, animation only)
  // label = displayed proficiency
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <FaCode />,
      skills: [
        { name: 'React',        icon: <SiReact />,      level: 95, label: 'Expert',     color: '#61DAFB' },
        { name: 'JavaScript',   icon: <SiJavascript />, level: 95, label: 'Expert',     color: '#F7DF1E' },
        { name: 'TypeScript',   icon: <SiTypescript />, level: 80, label: 'Advanced',   color: '#3178C6' },
        { name: 'HTML5',                                level: 95, label: 'Expert',     color: '#E34F26' },
        { name: 'CSS3/SCSS',                            level: 92, label: 'Expert',     color: '#1572B6' },
        { name: 'Tailwind CSS',                         level: 85, label: 'Advanced',   color: '#06B6D4' },
        { name: 'Next.js',                              level: 85, label: 'Advanced',   color: '#000000' }
      ]
    },
    {
      title: 'Backend Development',
      icon: <FaDatabase />,
      skills: [
        { name: 'Node.js',      icon: <SiNodedotjs />, level: 82, label: 'Advanced',  color: '#339933' },
        { name: 'Express.js',                          level: 75, label: 'Proficient', color: '#FF6B6B' },
        { name: 'REST APIs',                           level: 82, label: 'Advanced',  color: '#FF6B6B' },
        { name: 'MongoDB',                             level: 72, label: 'Proficient', color: '#47A248' }
      ]
    },
    {
      title: 'AI Data & Annotation',
      icon: <FaBrain />,
      skills: [
        { name: 'Image Annotation (BBox / Segmentation)', level: 95, label: 'Expert',     color: '#8B5CF6' },
        { name: 'Named Entity Recognition (NER)',         level: 85, label: 'Advanced',   color: '#06B6D4' },
        { name: 'Text Labeling & Classification',         level: 85, label: 'Advanced',   color: '#10B981' },
        { name: 'Audio Annotation',                       level: 78, label: 'Advanced',   color: '#F59E0B' },
        { name: 'CVAT Platform & Workflows',              level: 92, label: 'Expert',     color: '#FF6B35' },
        { name: 'QA & Guideline Enforcement',             level: 85, label: 'Advanced',   color: '#EC4899' },
        { name: 'Medical Imaging Datasets',               level: 82, label: 'Advanced',   color: '#EF4444' },
        { name: 'Autonomous Driving Datasets',            level: 82, label: 'Advanced',   color: '#6366F1' },
        { name: 'NLP Datasets',                           level: 85, label: 'Advanced',   color: '#0EA5E9' }
      ]
    },
    {
      title: 'UI/UX Design',
      icon: <FaPalette />,
      skills: [
        { name: 'Figma',             icon: <SiFigma />, level: 75, label: 'Proficient', color: '#F24E1E' },
        { name: 'Responsive Design',                    level: 82, label: 'Advanced',   color: '#667EEA' },
        { name: 'User Research',                        level: 68, label: 'Proficient', color: '#9F7AEA' },
        { name: 'Prototyping',                          level: 72, label: 'Proficient', color: '#ED8936' },
        { name: 'Design Systems',                       level: 70, label: 'Proficient', color: '#38B2AC' }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <FaTools />,
      skills: [
        { name: 'Git',     icon: <SiGit />, level: 85, label: 'Advanced', color: '#F05032' },
        { name: 'VS Code',                  level: 95, label: 'Expert',   color: '#007ACC' },
        { name: 'CVAT',                     level: 92, label: 'Expert',   color: '#FF6B35' }
      ]
    }
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

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  }

  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <motion.div
          className="skills__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div className="skills__header" variants={itemVariants}>
            <span className="skills__subtitle">My Skills</span>
            <h2 className="skills__title">Software &amp; AI Data Expertise</h2>
            <div className="skills__divider"></div>
            <p className="skills__description">
              I work across the full stack — from React frontends to the data
              pipelines that train the models behind them. Below is where I operate
              day-to-day, spanning software engineering, AI data annotation, and
              product design.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="skills__grid">
            {skillCategories.map((category, categoryIndex) => {
              const isFeatured = category.title === 'AI Data & Annotation'
              return (
                <motion.div
                  key={category.title}
                  className={`skills__category${isFeatured ? ' skills__category--featured' : ''}`}
                  variants={itemVariants}
                >
                  <div className="skills__category-header">
                    <div className="skills__category-icon">{category.icon}</div>
                    <h3 className="skills__category-title">{category.title}</h3>
                  </div>

                  <div className="skills__list">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="skills__item"
                        variants={skillVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="skills__item-header">
                          <div className="skills__item-info">
                            {skill.icon && (
                              <span className="skills__item-icon" style={{ color: skill.color }}>
                                {skill.icon}
                              </span>
                            )}
                            <span className="skills__item-name">{skill.name}</span>
                          </div>
                          <span className="skills__item-level">{skill.label}</span>
                        </div>

                        <div className="skills__item-bar">
                          <motion.div
                            className="skills__item-progress"
                            style={{ backgroundColor: skill.color }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1.5,
                              delay: (categoryIndex * 0.2) + (skillIndex * 0.1),
                              ease: "easeOut"
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Summary — consistent with Hero & About */}
          <motion.div className="skills__summary" variants={itemVariants}>
            <div className="skills__summary-item">
              <div className="skills__summary-number">3+</div>
              <div className="skills__summary-label">Years in AI Data</div>
            </div>
            <div className="skills__summary-item">
              <div className="skills__summary-number">5+</div>
              <div className="skills__summary-label">Annotation Types</div>
            </div>
            <div className="skills__summary-item">
              <div className="skills__summary-number">3</div>
              <div className="skills__summary-label">Industry Domains</div>
            </div>
            <div className="skills__summary-item">
              <div className="skills__summary-number">15+</div>
              <div className="skills__summary-label">Tools &amp; Technologies</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills