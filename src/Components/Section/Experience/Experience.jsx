import { motion } from 'framer-motion'
import {
  FaBriefcase,
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBrain,
  FaDownload
} from 'react-icons/fa'
import './Experience.scss'
import resume from '../../../assets/images/edidi-taiye-FlowCV-Resume-20250709.pdf'

const Experience = () => {
  const experiences = [
    // ---------- AI DATA ----------
    {
      type: 'ai-data',
      title: 'Data Annotator',
      company: 'Awarri',
      period: '2021 - Present',
      location: 'Lagos, Nigeria (Remote)',
      description:
        'Working with Awarri’s AI data team on computer-vision and NLP annotation projects. Responsible for producing high-quality labeled datasets — image, text, and object-detection work — using CVAT and maintaining consistency across batches in medical, laboratory, and general-purpose domains.',
      achievements: [
        'Annotated image and object-detection datasets using CVAT, including laboratory and medical imaging projects',
        'Performed bounding-box, image-labeling, and quality-review work on computer-vision datasets',
        'Supported text and Named Entity Recognition (NER) labeling for NLP-focused projects',
        'Maintained annotation consistency and QA standards across batches and contributors',
        'Collaborated with AI data teams to keep datasets aligned with model-training requirements'
      ],
      technologies: [
        'CVAT',
        'Computer Vision',
        'Bounding Boxes',
        'Image Annotation',
        'NER',
        'NLP Data',
        'QA Workflows',
        'Medical Imaging',
        'Object Detection'
      ],
      icon: <FaBrain />
    },

    // ---------- SOFTWARE / FRONTEND (merged) ----------
    {
      type: 'work',
      title: 'Frontend Developer',
      company: 'Freelance / Contract',
      period: '2021 - Present',
      location: 'Lagos, Nigeria (Remote)',
      description:
        'Building and delivering responsive, user-focused web applications for startups, businesses, and independent clients. Focused on modern frontend development with React, TypeScript, and SASS — turning ideas into scalable, production-ready products.',
      achievements: [
        'Developed a responsive betting application with custom bet creation and wallet integration',
        'Built a legal case tracker enabling real-time case updates between law firms and clients',
        'Implemented a news publishing platform with admin panel, category filtering, and live search',
        'Created a photography portfolio site with an admin dashboard for content uploads',
        'Built ChefCompanion, a step-by-step cooking guide application',
        'Designed and shipped reusable UI components and SASS architectures for multiple projects'
      ],
      technologies: [
        'React',
        'TypeScript',
        'JavaScript',
        'SASS',
        'Tailwind CSS',
        'Framer Motion',
        'REST APIs'
      ],
      icon: <FaBriefcase />
    },

    // ---------- EDUCATION ----------
    {
      type: 'education',
      title: 'Higher National Diploma (HND), Computer Science',
      company: 'The Polytechnic Ibadan',
      period: '2017 - 2019',
      location: 'Ibadan, Nigeria',
      description:
        'Studied core computer science concepts with emphasis on programming, algorithms, and web development — building the technical foundation that later carried into professional frontend and AI-data work.',
      achievements: [
        'Developed academic projects using HTML, CSS, and JavaScript',
        'Engaged in group projects that strengthened teamwork and problem-solving',
        'Explored early interests in product design and web technologies',
        'Built portfolio projects that evolved into professional freelance work'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'SASS', 'React'],
      icon: <FaGraduationCap />
    },
    {
      type: 'education',
      title: 'Frontend Development Training',
      company: 'Sail Innovation Lab',
      period: '2024',
      location: 'Lagos, Nigeria',
      description:
        'Completed an intensive training program focused on modern frontend technologies and best practices for building scalable applications.',
      achievements: [
        'Completed hands-on projects in React and responsive design',
        'Built multiple applications including a meal companion app and an e-commerce site',
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
      transition: { delayChildren: 0.3, staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  const rightItemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  // Type → display label
  const typeLabel = (type) => {
    if (type === 'work') return 'Work Experience'
    if (type === 'education') return 'Education'
    if (type === 'ai-data') return 'AI Data'
    return type
  }

  return (
    <section id="experience" className="experience">
      <div className="experience__container">
        <motion.div
          className="experience__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div className="experience__header" variants={itemVariants}>
            <span className="experience__subtitle">My Journey</span>
            <h2 className="experience__title">Experience &amp; Education</h2>
            <div className="experience__divider"></div>
            <p className="experience__description">
              A timeline spanning AI data annotation work at Awarri, freelance
              software development, and the education that underpins both.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="experience__timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.type}-${index}`}
                className={`experience__item ${exp.type} ${
                  index % 2 === 0
                    ? 'experience__item--left'
                    : 'experience__item--right'
                }`}
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
                  <div className="experience__card-header">
                    <div className="experience__card-icon">{exp.icon}</div>
                    <div className="experience__card-title">
                      <h3>{exp.title}</h3>
                      <span className="experience__card-company">
                        {exp.company}
                      </span>
                    </div>
                  </div>

                  {/* Meta */}
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
                  <p className="experience__card-description">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="experience__achievements">
                    <h4>Key Achievements:</h4>
                    <ul className="experience__achievements-list">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="experience__achievement">
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
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="experience__tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Type Badge */}
                  <div
                    className={`experience__type-badge experience__type-badge--${exp.type}`}
                  >
                    {typeLabel(exp.type)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Download Resume CTA */}
          <motion.div className="experience__cta" variants={itemVariants}>
            <div className="experience__cta-content">
              <h3>Want to see more details?</h3>
              <p>
                Download my full resume for a comprehensive overview of my
                experience and skills.
              </p>
              <a
                href={resume}
                className="experience__cta-button"
                download
              >
                <FaDownload />
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