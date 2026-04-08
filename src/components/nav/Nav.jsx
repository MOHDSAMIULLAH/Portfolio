import { useState } from 'react'
import { motion } from 'framer-motion'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiCode, BiGridAlt, BiMessageSquareDetail } from 'react-icons/bi'
import './nav.css'

const navItems = [
  { icon: <AiOutlineHome />, href: '#home',     label: 'Home'       },
  { icon: <AiOutlineUser />, href: '#about',    label: 'About'      },
  { icon: <BiCode />,        href: '#skills',   label: 'Skills'     },
  { icon: <BiGridAlt />,     href: '#project',  label: 'Projects'   },
  { icon: <BiMessageSquareDetail />, href: '#contact', label: 'Contact' },
]

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')

  return (
    <motion.nav
      className="floating-nav"
      aria-label="Quick navigation"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8, ease: 'easeOut' }}
    >
      {navItems.map(({ icon, href, label }) => (
        <a
          key={href}
          href={href}
          title={label}
          aria-label={label}
          className={`floating-nav__item${activeNav === href ? ' floating-nav__item--active' : ''}`}
          onClick={() => setActiveNav(href)}
        >
          {icon}
        </a>
      ))}
    </motion.nav>
  )
}

export default Nav
