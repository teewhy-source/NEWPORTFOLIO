import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Header.scss'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset'
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = 'unset'
  }

  const smoothScroll = (targetId) => {
    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      const headerHeight = document.querySelector('.header').offsetHeight
      const targetPosition = targetElement.offsetTop - headerHeight
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleNavClick = (e, href) => {
    e.preventDefault()
    smoothScroll(href)
    closeMenu()
  }

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <>
      <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
        <div className="header__container">
          <nav className="header__nav">
            <a 
              href="#hero" 
              className="header__logo"
              onClick={(e) => handleNavClick(e, '#hero')}
            >
              <span className="header__logo-text">Edidi Taiye Olalekan</span>
              <span className="header__logo-dot">.</span>
            </a>

            <ul className={`header__nav-list ${isMenuOpen ? 'header__nav-list--open' : ''}`}>
              {navItems.map((item, index) => (
                <li key={item.name} className="header__nav-item">
                  <a 
                    href={item.href} 
                    className="header__nav-link"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                  <span className="header__nav-number">👉 {index + 1}</span>

                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <button 
              className="header__menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div 
          className="header__overlay"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  )
}

export default Header