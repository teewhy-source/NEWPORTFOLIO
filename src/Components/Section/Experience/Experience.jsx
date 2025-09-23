import { motion } from 'framer-motion'
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import './Experience.scss'

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      description: 'Leading frontend development for enterprise-level applications. Mentoring junior developers and implementing modern React patterns.',
      achievements: [
        'Led migration from class components to functional components with hooks',
        'Improved application performance by 40% through code splitting',
        'Implemented design system used by 50+ developers',
        'Reduced bundle size by 30% through optimized imports'
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'Jest'],
      icon: <FaBriefcase />
    },
    {
      type: 'work',
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      period: '2020 - 2022',
      location: 'Remote',
      description: 'Developed and maintained customer-facing web applications. Collaborated with design team to implement responsive UIs.',
      achievements: [
        'Built responsive dashboard used by 10,000+ users',
        'Implemented real-time features using WebSockets',
        'Reduced page load time by 60%',
        'Created component library used across multiple projects'
      ],
      technologies: ['React', 'Redux', 'Sass', 'Node.js', 'MongoDB'],
      icon: <FaBriefcase />
    },
    {
      type: 'work',
      title: 'Junior Web Developer',
      company: 'Digital Agency',
      period: '2019 - 2020',
      location: 'New York, NY',
      description: 'Developed websites and web applications for various clients. Gained experience in full-stack development.',
      achievements: [
        'Delivered 20+ client projects on time and within budget',
        'Implemented SEO strategies improving client rankings',
        'Created responsive designs for mobile-first approach',
        'Integrated third-party APIs and payment systems'
      ],
      technologies: ['JavaScript', 'PHP', 'WordPress', 'jQuery', 'MySQL'],
      icon: <FaBriefcase />
    },
    {
      type: 'education',
      title: 'Bachelor of Computer Science',
      company: 'University of Technology',
      period: '2015 - 2019',
      location: 'Boston, MA',
      description: 'Focused on software engineering, algorithms, and web technologies. Graduated with honors.',
      achievements: [
        'Graduated Magna Cum Laude (GPA: 3.8/4.0)',
        'President of Web Development Club',
        'Completed senior project on machine learning applications',
        'Participated in multiple hackathons and coding competitions'
      ],
      technologies: ['Java', 'Python', 'C++', 'Data Structures', 'Algorithms'],
      icon: <FaGraduationCap />
    },
    {
      type: 'education',
      title: 'Web Development Bootcamp',
      company: 'CodeMaster Institute',
      period: '2019',
      location: 'Online',
      description: 'Intensive full-stack web development program focusing on modern technologies.',
      achievements: [
        'Completed 500+ hours of coding exercises',
        'Built 10+ full-stack applications',
        'Learned agile development methodologies',
        'Participated in team projects using Git workflows'
      ],
      technologies: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Express'],
      icon: <FaGraduationCap />
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const rightItemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="experience" className="experience">
      <div className="experience__container">
        <motion.div 
          className="experience__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div className="experience__header" variants={itemVariants}>
            <span className="experience__subtitle">My Journey</span>
            <h2 className="experience__title">Experience & Education</h2>
            <div className="experience__divider"></div>
            <p className="experience__description">
              A timeline of my professional journey and educational background. 
              Each step has contributed to my growth as a developer.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="experience__timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.type}-${index}`}
                className={`experience__item ${exp.type} ${index % 2 === 0 ? 'experience__item--left' : 'experience__item--right'}`}
                variants={index % 2 === 0 ? itemVariants : rightItemVariants}
              >
                {/* Timeline Line */}
                <div className="experience__timeline-line">
                  <div className="experience__timeline-dot"></div>
                  {index < experiences.length - 1 && (
                    <div className="experience__timeline-connector"></div>
                  )}
                </div>

                {/* Content Card */}
                <div className="experience__card">
                  {/* Card Header */}
                  <div className="experience__card-header">
                    <div className="experience__card-icon">
                      {exp.icon}
                    </div>
                    <div className="experience__card-title">
                      <h3>{exp.title}</h3>
                      <span className="experience__card-company">{exp.company}</span>
                    </div>
                  </div>

                  {/* Meta Information */}
                  <div className="experience__card-meta">
                    <div className="experience__meta-item">
                      <FaCalendarAlt className="experience__meta-icon" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="experience__meta-item">
                      <FaMapMarkerAlt className="experience__meta-icon" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="experience__card-description">{exp.description}</p>

                  {/* Achievements */}
                  <div className="experience__achievements">
                    <h4>Key Achievements:</h4>
                    <ul className="experience__achievements-list">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="experience__achievement">
                          <span className="experience__achievement-bullet"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="experience__technologies">
                    <h4>Technologies:</h4>
                    <div className="experience__tech-tags">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="experience__tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Type Badge */}
                  <div className={`experience__type-badge experience__type-badge--${exp.type}`}>
                    {exp.type === 'work' ? 'Work Experience' : 'Education'}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Download Resume CTA */}
          <motion.div className="experience__cta" variants={itemVariants}>
            <div className="experience__cta-content">
              <h3>Want to see more details?</h3>
              <p>Download my full resume for a comprehensive overview of my experience and skills.</p>
              <a href="/resume.pdf" className="experience__cta-button" download>
                <FaBriefcase />
                Download Resume
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience