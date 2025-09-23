import { motion } from 'framer-motion'
import { FaCode, FaPalette, FaTools, FaDatabase, FaCloud, FaMobile } from 'react-icons/fa'
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNodedotjs, 
  SiPython, 
  SiGit, 
  SiDocker, 
  SiAmazon,   // instead of SiAmazonaws
  SiFigma, 
  SiAdobexd 
} from "react-icons/si";
import './Skills.scss'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <FaCode />,
      skills: [
        { name: 'React', icon: <SiReact />, level: 95, color: '#61DAFB' },
        { name: 'JavaScript', icon: <SiJavascript />, level: 90, color: '#F7DF1E' },
        { name: 'TypeScript', icon: <SiTypescript />, level: 85, color: '#3178C6' },
        { name: 'HTML5', level: 95, color: '#E34F26' },
        { name: 'CSS3/SCSS', level: 92, color: '#1572B6' },
        { name: 'Tailwind CSS', level: 88, color: '#06B6D4' },
        { name: 'Next js', level: 88, color: '#06B6D4' },
      ]
    },
    {
      title: 'Backend Development',
      icon: <FaDatabase />,
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs />, level: 85, color: '#339933' },
        // { name: 'Python', icon: <SiPython />, level: 80, color: '#3776AB' },
        { name: 'Express.js', level: 82, color: '#000000' },
        { name: 'REST APIs', level: 88, color: '#FF6B6B' },
        // { name: 'GraphQL', level: 75, color: '#E10098' },
        { name: 'MongoDB', level: 78, color: '#47A248' }
      ]
    },
    {
      title: 'UI/UX Design',
      icon: <FaPalette />,
      skills: [
        { name: 'Figma', icon: <SiFigma />, level: 85, color: '#F24E1E' },
        // { name: 'Adobe XD', icon: <SiAdobexd />, level: 75, color: '#FF61F6' },
        { name: 'Responsive Design', level: 92, color: '#667EEA' },
        { name: 'User Research', level: 80, color: '#9F7AEA' },
        { name: 'Prototyping', level: 82, color: '#ED8936' },
        { name: 'Design Systems', level: 78, color: '#38B2AC' }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <FaTools />,
      skills: [
        { name: 'Git', icon: <SiGit />, level: 88, color: '#F05032' },
        // { name: 'Docker', icon: <SiDocker />, level: 75, color: '#2496ED' },
        { name: 'AWS', icon: <SiAmazon />, level: 70, color: '#FF9900' },
        // { name: 'Webpack', level: 78, color: '#8DD6F9' },
        // { name: 'Jest', level: 80, color: '#C21325' },
        { name: 'VS Code', level: 95, color: '#007ACC' }
      ]
    }
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

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
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
            <h2 className="skills__title">Technologies & Expertise</h2>
            <div className="skills__divider"></div>
            <p className="skills__description">
              Here are the technologies and tools I work with to bring ideas to life. 
              I'm always learning and expanding my skill set.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="skills__grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div 
                key={category.title}
                className="skills__category"
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
                            <span 
                              className="skills__item-icon"
                              style={{ color: skill.color }}
                            >
                              {skill.icon}
                            </span>
                          )}
                          <span className="skills__item-name">{skill.name}</span>
                        </div>
                        <span className="skills__item-percent">{skill.level}%</span>
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
            ))}
          </div>

          {/* Additional Skills Summary */}
          <motion.div className="skills__summary" variants={itemVariants}>
            <div className="skills__summary-item">
              <div className="skills__summary-number">24+</div>
              <div className="skills__summary-label">Technologies Mastered</div>
            </div>
            <div className="skills__summary-item">
              <div className="skills__summary-number">3+</div>
              <div className="skills__summary-label">Years Experience</div>
            </div>
            <div className="skills__summary-item">
              <div className="skills__summary-number">50+</div>
              <div className="skills__summary-label">Projects Completed</div>
            </div>
            <div className="skills__summary-item">
              <div className="skills__summary-number">100%</div>
              <div className="skills__summary-label">Continuous Learning</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills