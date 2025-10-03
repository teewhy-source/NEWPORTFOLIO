import { motion } from 'framer-motion'
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import './Experience.scss'

const Experience = () => {
  const experiences = [
   {
  type: 'work',
  title: 'Frontend Developer',
  company: 'Freelance / Contract',
  period: '2022 - Present',
  location: 'Lagos, Nigeria',
  description: 'Building and delivering responsive, user-focused web applications. Specializing in modern frontend development with React and SASS while collaborating with teams and clients to create scalable digital products.',
  achievements: [
    'Developed a responsive betting application with custom bet creation and wallet system',
    'Built a dynamic news site with category-based navigation, search, and admin upload features',
    'Designed and implemented a legal case tracker for real-time case status updates between law firms and clients',
    'Created ChefCompanion, a cooking guide app that teaches users recipes and preparation steps'
  ],
  technologies: ['React', 'JavaScript', 'TypeScript', 'SASS', 'Tailwind CSS', 'Framer Motion'],
  icon: <FaBriefcase />
},
   {
  type: 'work',
  title: 'Frontend Developer',
  company: 'Independent Projects',
  period: '2021 - Present',
  location: 'Remote / Lagos, Nigeria',
  description: 'Delivering clean, efficient, and scalable frontend solutions for startups and businesses. Focused on turning ideas into functional, user-friendly products with modern UI frameworks and libraries.',
  achievements: [
    'Engineered a legal case tracker platform enabling law firms to update clients in real-time',
    'Developed a photography portfolio site with admin dashboard for seamless content uploads',
    'Implemented a news publishing platform with admin panel, category filtering, and live search',
    'Created interactive UI experiences using Framer Motion and optimized SASS architecture for maintainability'
  ],
  technologies: ['React', 'SASS', 'JavaScript', 'Tailwind CSS', 'React Icons', 'Framer Motion'],
  icon: <FaBriefcase />
}
,
   {
  type: 'work',
  title: 'Frontend Developer',
  company: 'Awarri / Collaborative Projects',
  period: '2021 - Present',
  location: 'Lagos, Nigeria',
  description: 'Contributing to team-driven software solutions in AI and web development. Collaborated with cross-functional teams to deliver intuitive, high-performance web applications and tools.',
  achievements: [
    'Worked with AI teams at Awarri to build interfaces that improved data annotation workflows',
    'Collaborated with a product team to design and develop a betting platform with wallet integration and real-time updates',
    'Built scalable UI components and reusable styles for multiple startup projects, improving developer handoff and speed',
    'Mentored teammates on React best practices and responsive design implementation'
  ],
  technologies: ['React', 'TypeScript', 'SASS', 'Tailwind CSS', 'Framer Motion', 'API Integration'],
  icon: <FaBriefcase />
}
,
    {
  type: 'education',
  title: 'Bachelor of Science in Computer Science',
  company: 'The Polytechnic Ibadan',
  period: '2017 - 2019',
  location: 'Ibadan, Nigeria',
  description: 'Studied core concepts in computer science with emphasis on programming, algorithms, and web development. Built a strong foundation for frontend engineering.',
  achievements: [
    'Developed academic projects using HTML, CSS, and JavaScript',
    'Engaged in group projects that strengthened teamwork and problem-solving',
    'Explored early interests in product design and web technologies',
    'Built portfolio projects that evolved into professional freelance work'
  ],
  technologies: ['HTML', 'CSS', 'JavaScript', 'SASS', 'React'],
  icon: <FaGraduationCap />
}
,
   {
  type: 'education',
  title: 'Frontend Development Training',
  company: 'Sail Innovation Lab',
  period: '2024',
  location: 'Lagos, Nigeria',
  description: 'Completed an intensive training program focused on modern frontend technologies and best practices for building scalable applications.',
  achievements: [
    'Completed hands-on projects in React and responsive design',
    'Built multiple applications including Meal Companion and an e-commerce site',
    'Learned version control and collaborative workflows using Git',
    'Applied agile principles in team-based projects'
  ],
  technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'SASS', 'Tailwind CSS'],
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
              <a href="portfolio\src\assets\images\edidi-taiye-FlowCV-Resume-20250709.pdf" className="experience__cta-button" download>
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