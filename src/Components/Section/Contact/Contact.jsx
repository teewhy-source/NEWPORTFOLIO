import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin, FaTwitter, FaDiscord } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import toast from 'react-hot-toast'
import './Contact.scss'

const 
Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'edidi.taiye@gmail.com',
      link: 'mailto:edidi.taiye@gmail.com',
      color: '#EA4335'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+234 7013912352',
      link: 'tel:+2347013912352',
      color: '#34A853'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Ebute Ikorodu, Lagos',
      link: 'https://www.bing.com/maps?q=ebute+ikorodu%2Clagos&FORM=HDRSC6&cp=6.604024%7E3.490516&lvl=15.3',
      color: '#4285F4'
    }
  ]

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/teewhyt',
      color: '#333'
    },
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/taiye-edidi-8a5a282b0',
      color: '#0077B5'
    },
    {
      icon: <FaTwitter />,
      name: 'Twitter',
      url: 'https://twitter.com/teewhyt',
      color: '#1DA1F2'
    },
    {
      icon: <SiGmail />,
      name: 'Gmail',
      url: 'mailto:edidi.taiye@gmail.com',
      color: '#EA4335'
    },
    {
      icon: <FaDiscord />,
      name: 'Discord',
      url: 'https://discord.com/users/teewhy',
      color: '#5865F2'
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Replace with your actual Formspree form ID
      const formspreeEndpoint = 'https://formspree.io/f/myyrreze'
      
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email, // This ensures replies go to the sender
        }),
      })

      if (response.ok) {
        toast.success('Message sent successfully! I\'ll get back to you soon.')
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Formspree error:', error)
      toast.error('Failed to send message. Please try again or email me directly at edidi.taiye@gmail.com')
    } finally {
      setIsSubmitting(false)
    }
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

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <motion.div 
          className="contact__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div className="contact__header" variants={itemVariants}>
            <span className="contact__subtitle">Get In Touch</span>
            <h2 className="contact__title">Let's Work Together</h2>
            <div className="contact__divider"></div>
            <p className="contact__description">
              Have a project in mind or want to discuss potential opportunities? 
              I'd love to hear from you. Let's create something amazing together.
            </p>
          </motion.div>

          <div className="contact__grid">
            {/* Left Column - Contact Information */}
            <motion.div className="contact__info" variants={itemVariants}>
              <h3 className="contact__info-title">Contact Information</h3>
              <p className="contact__info-description">
                Feel free to reach out through any of these channels. 
                I typically respond within 24 hours.
              </p>

              {/* Contact Methods */}
              <div className="contact__methods">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    className="contact__method"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div 
                      className="contact__method-icon"
                      style={{ color: item.color }}
                    >
                      {item.icon}
                    </div>
                    <div className="contact__method-content">
                      <span className="contact__method-title">{item.title}</span>
                      <span className="contact__method-value">{item.value}</span>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="contact__social">
                <h4>Follow Me</h4>
                <div className="contact__social-links">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact__social-link"
                      style={{ '--social-color': social.color }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.icon}
                      <span className="contact__social-tooltip">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div className="contact__form-container" variants={itemVariants}>
              <form onSubmit={handleSubmit} className="contact__form">
                <div className="contact__form-group contact__form-group--double">
                  <div className="contact__input-group">
                    <label htmlFor="name" className="contact__label">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="contact__input"
                      placeholder="Teewhy"
                      required
                    />
                  </div>
                  <div className="contact__input-group">
                    <label htmlFor="email" className="contact__label">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="contact__input"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="contact__form-group">
                  <label htmlFor="subject" className="contact__label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="contact__input"
                    placeholder="Project Discussion"
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="message" className="contact__label">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="contact__textarea"
                    placeholder="Tell me about your project..."
                    rows="6"
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="contact__submit-button"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="contact__submit-spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="contact__background">
        <div className="contact__shape contact__shape--1"></div>
        <div className="contact__shape contact__shape--2"></div>
        <div className="contact__shape contact__shape--3"></div>
      </div>
    </section>
  )
}

export default Contact