import { motion } from 'framer-motion'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import './footer.css'

const navLinks = [
  { label: 'Home',       href: '#home'     },
  { label: 'About',      href: '#about'    },
  { label: 'Skills',     href: '#skills'   },
  { label: 'Projects',   href: '#project'  },
  { label: 'Experience', href: '#training' },
  { label: 'Contact',    href: '#contact'  },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <a href="#home" className="footer__logo" aria-label="Back to top">
            <span className="footer__logo-dot" />
            Samiullah
          </a>
          <p className="footer__tagline">
            Fullstack Developer specializing in scalable backend systems &amp; cloud architecture.
          </p>
          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/in/mohd-samiullah1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="footer__social"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/MOHDSAMIULLAH"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="footer__social"
            >
              <BsGithub />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <nav className="footer__nav" aria-label="Footer navigation">
          <h4 className="footer__nav-title">Quick Links</h4>
          <ul className="footer__nav-links">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="footer__nav-link">{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">
            &copy; {year} Mohd Samiullah. All rights reserved.
          </p>
          <p className="footer__credit">
            Built with React &amp; Framer Motion
          </p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
