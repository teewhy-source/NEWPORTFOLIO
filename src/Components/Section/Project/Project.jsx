import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCode, FaPalette, FaGlobe } from 'react-icons/fa'
import { SiReact, SiJavascript, SiTypescript, SiNodedotjs, SiPython } from 'react-icons/si'
import './Project.scss'
import image from "../../../assets/images/FINEBOY.jpg"

const Project = () => {
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
      githubUrl: 'https://github.com/teewhy-source/shopdeygo',
      featured: true
    },
   {
  id: 2,
  title: 'Learning Management System',
  description: 'A scalable platform for creating, delivering, and tracking online courses.',
  fullDescription: 'A comprehensive Learning Management System that enables administrators and instructors to create courses, upload video lessons, add quizzes, and track student progress. It supports role-based access for admins, instructors, and students, integrates payments, and provides certificates upon completion.',
  image: image,
  category: ['react', 'typescript'],
  technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
  features: ['Course Creation', 'Quizzes & Assignments', 'Progress Tracking', 'Certificates', 'Role-Based Access', 'Payment Integration'],
  liveUrl: 'https://new-lms.vercel.app',
  githubUrl: 'https://github.com/teewhy-source/new-lms',
  featured: true
}
,
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
  id: 3,
  title: 'News Platform',
  description: 'A modern news website for delivering real-time stories across multiple categories.',
  fullDescription: 'A responsive news website that provides users with breaking news, trending stories, and in-depth articles across categories such as politics, sports, fashion, technology, and entertainment. The platform features a search function, category filters, an admin dashboard for content management, and a clean, mobile-friendly design.',
  image: image,
  category: ['react', 'sass'],
  technologies: ['React', 'SASS', 'REST API', 'React Icons'],
  features: ['Breaking News Section', 'Category Filtering', 'Search Functionality', 'Admin Dashboard', 'Responsive Design', 'Image & Video Support'],
  liveUrl: 'https://news-site.example.com',
  githubUrl: 'https://github.com/teewhy-source/new-lms',
  featured: true
},

   {
  id: 4,
  title: 'Legal Case Tracker',
  description: 'A secure platform for law firms and clients to track and manage legal cases in real-time.',
  fullDescription: 'The Legal Case Tracker is a web application designed to help law firms manage their cases and keep clients updated. It provides a centralized dashboard where lawyers can update case statuses, upload legal documents, schedule hearings, and send real-time notifications to clients. Clients can log in to securely view the progress of their cases, access documents, and communicate with their legal representatives. The system improves transparency, saves time, and ensures better case management for both lawyers and clients.',
  image: image,
  category: ['react', 'sass'],
  technologies: ['React', 'SASS', 'Node.js', 'Express', 'MongoDB', 'JWT Authentication'],
  features: ['Case Status Updates', 'Secure Document Management', 'Real-time Notifications', 'Client-Lawyer Messaging', 'Role-Based Access Control', 'Dashboard for Lawyers & Clients'],
  liveUrl: 'https://legal-case-tracker.example.com',
  githubUrl: 'https://github.com/teewhy-source/LegalCaseTracker',
  featured: true
}
,
    {
  id: 5,
  title: 'Photography Portfolio Website',
  description: 'A sleek and responsive portfolio website for showcasing photography projects and services.',
  fullDescription: 'This Photography Portfolio Website is designed for professional photographers to display their work, share their story, and connect with potential clients. It includes a gallery with categories, an about page, pricing information, testimonials, and a contact form. The admin can log in to upload and manage photos, which are displayed in the gallery in real-time. Optimized for both desktop and mobile, the website ensures a smooth and visually appealing browsing experience.',
  image: image,
  category: ['react', 'sass'],
  technologies: ['React', 'SASS', 'Cloudinary', 'React Icons', 'Framer Motion'],
  features: ['Responsive Gallery', 'Admin Photo Upload', 'Category-Based Filtering', 'Client Testimonials', 'Pricing Page', 'Contact Form', 'Animations & Transitions'],
  liveUrl: 'https://photography-portfolio.example.com',
  githubUrl: 'https://github.com/example/photography-website',
  featured: true
},

{
  id: 6,
  title: 'ChefCompanion',
  description: 'An interactive platform that teaches users how to prepare meals step by step.',
  fullDescription: 'ChefCompanion is a recipe and cooking instruction platform that helps users learn how to prepare meals with clear, step-by-step guidance. Users can search for their favorite dishes, explore new recipes, and view detailed instructions with ingredients and cooking methods. The platform supports meal categorization (breakfast, lunch, dinner, snacks), offers search and filtering options, and is designed to be responsive and user-friendly. It aims to make cooking accessible, fun, and stress-free for everyone.',
  image: image,
  category: ['react', 'sass'],
  technologies: ['Html, Javascript', 'css'],
  features: ['Recipe Search', 'Step-by-Step Cooking Instructions', 'Ingredient List & Measurements', 'Meal Categories', 'Responsive Design', 'Animations & Transitions'],
  liveUrl: 'https://chefcompanion.example.com',
  githubUrl: 'https://github.com/example/chefcompanion',
  featured: true
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

export default Project


