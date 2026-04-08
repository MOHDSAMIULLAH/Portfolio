import { motion } from 'framer-motion'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { HiArrowDown } from 'react-icons/hi'
import { MdRocketLaunch } from 'react-icons/md'
import Resume from '../../assets/Mohd_Samiullah_Resume.pdf'
import './home.css'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.55, delay, ease: 'easeOut' },
})

const STACK = ['Node.js', 'Redis', 'AWS', 'PostgreSQL', 'Docker']

const Home = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />

      <div className="hero__content">

        {/* Availability badge */}
        <motion.div className="hero__badge" {...fadeUp(0.1)}>
          <span className="hero__badge-dot" />
          Available for opportunities
        </motion.div>

        {/* Name block */}
        <motion.div className="hero__name-block" {...fadeUp(0.25)}>
          <p className="hero__greeting">Hi, I'm</p>
          <h1 className="hero__name">
            Mohd <span className="gradient-text">Samiullah</span>
          </h1>
        </motion.div>

        {/* Role + experience chip */}
        <motion.div className="hero__role-row" {...fadeUp(0.38)}>
          <h2 className="hero__role">Backend-Focused Fullstack Engineer</h2>
          {/* <span className="hero__exp-chip">2+ yrs</span> */}
        </motion.div>

        {/* Tech stack pills */}
        {/* <motion.div className="hero__stack" {...fadeUp(0.48)}>
          {STACK.map(t => (
            <span className="hero__stack-item" key={t}>{t}</span>
          ))}
        </motion.div> */}

        {/* Currently building */}
        <motion.div className="hero__currently" {...fadeUp(0.56)}>
          <MdRocketLaunch className="hero__currently-icon" />
          <span>Currently building:</span>
          <span className="hero__currently-highlight">AI Image Generation Pipeline @ ShelfEx</span>
        </motion.div>

        {/* CTAs */}
        <motion.div className="hero__cta" {...fadeUp(0.65)}>
          <a href={Resume} download="Mohd_Samiullah_Resume.pdf" className="btn btn-primary">
            Download CV
          </a>
          <a href="#contact" className="btn">
            Let's Build Together
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div className="hero__socials" {...fadeUp(0.72)}>
          <a
            href="https://www.linkedin.com/in/mohd-samiullah1/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hero__social-link"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/MOHDSAMIULLAH"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hero__social-link"
          >
            <BsGithub />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          className="hero__scroll"
          aria-label="Scroll to About"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <motion.span
            animate={{ y: [0, 5, 0] }}
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
