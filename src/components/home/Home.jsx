import { motion } from 'framer-motion'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { HiArrowDown } from 'react-icons/hi'
import { MdRocketLaunch } from 'react-icons/md'
import Resume from '../../assets/Mohd_Samiullah_Resume.pdf'
import './home.css'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 30 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

const Home = () => {
  return (
    <section className="hero" id="home">
      {/* Ambient background orbs */}
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />

      <div className="hero__content">
        {/* Availability badge */}
        <motion.div className="hero__badge" {...fadeUp(0.1)}>
          <span className="hero__badge-dot" />
          Available for opportunities
        </motion.div>

        {/* Greeting */}
        <motion.p className="hero__greeting" {...fadeUp(0.2)}>
          Hi, I'm
        </motion.p>

        {/* Name */}
        <motion.h1 className="hero__name" {...fadeUp(0.3)}>
          Mohd{' '}
          <span className="gradient-text">Samiullah</span>
        </motion.h1>

        {/* Role */}
        <motion.h2 className="hero__role" {...fadeUp(0.4)}>
          Backend-Focused Fullstack Engineer{' '}
          <span className="hero__role-years">(2+ Years Experience)</span>
        </motion.h2>

        {/* Currently working on */}
        <motion.div className="hero__currently" {...fadeUp(0.58)}>
          <MdRocketLaunch style={{ color: '#22d3ee', fontSize: '0.85rem' }} />
          <span>Currently building:</span>
          <span className="hero__currently-highlight">AI Image Generation Pipeline @ ShelfEx</span>
        </motion.div>

        {/* CTAs */}
        <motion.div className="hero__cta" {...fadeUp(0.6)}>
          <a href={Resume} download="Mohd_Samiullah_Resume.pdf" className="btn btn-primary">
            Download CV
          </a>
          <a href="#contact" className="btn">
            Let's Build Together
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div className="hero__socials" {...fadeUp(0.7)}>
          <a
            href="https://www.linkedin.com/in/mohd-samiullah1/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="hero__social-link"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/MOHDSAMIULLAH"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="hero__social-link"
          >
            <BsGithub />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          className="hero__scroll"
          aria-label="Scroll to About section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          >
            <HiArrowDown />
          </motion.span>
          <span>Scroll</span>
        </motion.a>
      </div>
    </section>
  )
}

export default Home
