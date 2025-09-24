import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCode, FaPalette, FaGlobe } from 'react-icons/fa'
import { SiReact, SiJavascript, SiTypescript, SiNodedotjs, SiPython } from 'react-icons/si'
import './projects.scss'
import image from "../../../assets/images/FINEBOY.jpg"

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const modalRef = useRef()

  const projectFilters = [
    { key: 'all', label: 'All Projects', icon: <FaCode /> },
    { key: 'react', label: 'React', icon: <SiReact /> },
    { key: 'javascript', label: 'JavaScript', icon: <SiJavascript /> },
    { key: 'typescript', label: 'TypeScript', icon: <SiTypescript /> },
    { key: 'fullstack', label: 'Full Stack', icon: <SiNodedotjs /> }
  ]

  const projectsData = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform with React, Node.js, and MongoDB',
      fullDescription: 'A complete e-commerce solution featuring user authentication, product management, shopping cart, payment integration, and admin dashboard. Built with modern technologies and best practices.',
      image: image,
      category: ['react', 'fullstack'],
      technologies: ['React', 'firebase',"react-icons" ],
      features: ['User Authentication', 'Product Management', 'Shopping Cart', 'Payment Processing', 'Admin Dashboard'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates',
      fullDescription: 'A Kanban-style task management application with real-time collaboration features. Users can create boards, assign tasks, set deadlines, and track progress.',
      image: image,
      category: ['react', 'typescript'],
      technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      features: ['Real-time Updates', 'Drag & Drop', 'Team Collaboration', 'Progress Tracking'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather forecasting application with beautiful UI',
      fullDescription: 'A responsive weather dashboard that displays current conditions, forecasts, and weather maps. Features location-based services and interactive charts.',
      image: image,
      category: ['javascript'],
      technologies: ['JavaScript', 'API Integration', 'Chart.js', 'CSS3'],
      features: ['Current Weather', '5-Day Forecast', 'Interactive Maps', 'Location Services'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Modern portfolio website with animations and responsive design',
      fullDescription: 'A personal portfolio website showcasing projects and skills. Features smooth animations, dark/light mode, and optimized performance.',
      image: image,
      category: ['react', 'typescript'],
      technologies: ['React', 'TypeScript', 'Framer Motion', 'Sass'],
      features: ['Responsive Design', 'Smooth Animations', 'Dark/Light Mode', 'SEO Optimized'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false
    },
    {
      id: 5,
      title: 'Chat Application',
      description: 'Real-time chat application with rooms and file sharing',
      fullDescription: 'A real-time chat application supporting multiple rooms, file sharing, and user presence indicators. Built with Socket.io for real-time communication.',
      image: image,
      category: ['react', 'fullstack'],
      technologies: ['React', 'Socket.io', 'Node.js', 'PostgreSQL'],
      features: ['Real-time Messaging', 'File Sharing', 'Multiple Rooms', 'User Presence'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true
    },
    {
      id: 6,
      title: 'Legal Case Tracker',
      description: 'A platform that connects lawyers and clients together',
      fullDescription: 'A comprehensive dashboard for data visualization and analytics. Features interactive charts, data filtering, and export capabilities.',
      image: image,
      category: ['react', 'typescript'],
      technologies: ['React', 'TypeScript', 'MongoDb', 'FastAPI'],
      features: ['Interactive Charts', 'Data Filtering', 'Export Functionality', 'Real-time Data'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category.includes(activeFilter))

  const openModal = (project) => {
    setSelectedProject(project)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'unset'
  }

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

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
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
    <section id="projects" className="projects">
      <div className="projects__container">
        <motion.div 
          className="projects__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div className="projects__header" variants={itemVariants}>
            <span className="projects__subtitle">My Work</span>
            <h2 className="projects__title">Featured Projects</h2>
            <div className="projects__divider"></div>
            <p className="projects__description">
              Here are some of my recent projects that showcase my skills and experience 
              in web development and design.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div className="projects__filters" variants={itemVariants}>
            {projectFilters.map((filter) => (
              <button
                key={filter.key}
                className={`projects__filter ${activeFilter === filter.key ? 'projects__filter--active' : ''}`}
                onClick={() => setActiveFilter(filter.key)}
              >
                <span className="projects__filter-icon">{filter.icon}</span>
                {filter.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="projects__grid"
            layout
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className={`projects__card ${project.featured ? 'projects__card--featured' : ''}`}
                  variants={cardVariants}
                  layout
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="projects__card-image">
                    <img src={project.image} alt={project.title} />
                    <div className="projects__card-overlay">
                      <div className="projects__card-actions">
                        <button 
                          className="projects__card-action"
                          onClick={() => openModal(project)}
                        >
                          <FaCode />
                          View Details
                        </button>
                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl} 
                            className="projects__card-action"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaExternalLinkAlt />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                    {project.featured && (
                      <div className="projects__card-featured">Featured</div>
                    )}
                  </div>

                  <div className="projects__card-content">
                    <h3 className="projects__card-title">{project.title}</h3>
                    <p className="projects__card-desc">{project.description}</p>
                    
                    <div className="projects__card-tech">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="projects__tech-tag">{tech}</span>
                      ))}
                    </div>

                    <div className="projects__card-links">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl}
                          className="projects__card-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub />
                          Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl}
                          className="projects__card-link projects__card-link--primary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaExternalLinkAlt />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View More Button */}
          <motion.div className="projects__cta" variants={itemVariants}>
            <a href="https://github.com/teewhy-source" className="projects__cta-button">
              View All Projects on GitHub
              <FaExternalLinkAlt />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="projects__modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="projects__modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              ref={modalRef}
            >
              <button className="projects__modal-close" onClick={closeModal}>
                <FaTimes />
              </button>

              <div className="projects__modal-header">
                <img src={selectedProject.image} alt={selectedProject.title} />
                <div className="projects__modal-title">
                  <h3>{selectedProject.title}</h3>
                  <p>{selectedProject.description}</p>
                </div>
              </div>

              <div className="projects__modal-body">
                <div className="projects__modal-section">
                  <h4>Project Overview</h4>
                  <p>{selectedProject.fullDescription}</p>
                </div>

                <div className="projects__modal-section">
                  <h4>Features</h4>
                  <div className="projects__modal-features">
                    {selectedProject.features.map((feature, index) => (
                      <span key={index} className="projects__modal-feature">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="projects__modal-section">
                  <h4>Technologies Used</h4>
                  <div className="projects__modal-tech">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="projects__modal-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="projects__modal-links">
                  {selectedProject.githubUrl && (
                    <a 
                      href={selectedProject.githubUrl}
                      className="projects__modal-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                      View Code
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a 
                      href={selectedProject.liveUrl}
                      className="projects__modal-link projects__modal-link--primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects