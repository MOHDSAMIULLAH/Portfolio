import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import './navbar.css'

const links = [
  { label: 'Home',       href: '#home'           },
  { label: 'About',      href: '#about'           },
  { label: 'Skills',     href: '#skills'          },
  { label: 'AI / LLM',  href: '#ai-engineering'  },
  { label: 'Projects',   href: '#project'         },
  { label: 'Experience', href: '#training'        },
  { label: 'Contact',    href: '#contact'         },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen]   = useState(false)
  const [activeNav, setActiveNav] = useState('#home')
  const [scrolled, setScrolled]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Body scroll lock + Escape key close
  useEffect(() => {
    document.body.style.overflowY = menuOpen ? 'hidden' : ''
    const onKeyDown = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflowY = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  const handleNavClick = (href) => {
    setActiveNav(href)
    setMenuOpen(false)
  }

  return (
    <>
      <motion.header
        className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="navbar__inner">
          {/* Logo */}
          <a href="#home" className="navbar__logo" onClick={() => handleNavClick('#home')}>
            <span className="navbar__logo-dot" />
            Samiullah
          </a>

          {/* Desktop Nav */}
          <nav className="navbar__links" role="navigation" aria-label="Main navigation">
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={`navbar__link${activeNav === href ? ' navbar__link--active' : ''}`}
                onClick={() => handleNavClick(href)}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="btn btn-primary navbar__cta"
            onClick={() => handleNavClick('#contact')}
          >
            Hire Me
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.header>

      {/*
        Mobile menu is rendered OUTSIDE the header element.
        This prevents the position:fixed menu from being clipped to the header's
        bounds when backdrop-filter creates a new containing block (Safari/WebKit).
      */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop — click outside to close */}
            <motion.div
              className="navbar__overlay"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              aria-hidden="true"
            />

            {/* Slide-in panel */}
            <motion.nav
              id="mobile-nav"
              className="navbar__mobile"
              role="navigation"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {links.map(({ label, href }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  className={`navbar__mobile-link${activeNav === href ? ' navbar__link--active' : ''}`}
                  onClick={() => handleNavClick(href)}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  {label}
                </motion.a>
              ))}
              <a
                href="#contact"
                className="btn btn-primary"
                style={{ marginTop: '1rem', alignSelf: 'flex-start' }}
                onClick={() => handleNavClick('#contact')}
              >
                Hire Me
              </a>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
