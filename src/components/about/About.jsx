import { motion } from 'framer-motion'
import ME from '../../assets/sami.png'
import './about.css'

const stats = [
  { value: '2+',  label: 'Years Experience'        },
  { value: '15+', label: 'Projects Completed'       },
  { value: '15+', label: 'Technologies Mastered'    },
]

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0  },
}

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <motion.div
          className="section__header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section__label">Get to Know</span>
          <h2 className="section__title">About Me</h2>
        </motion.div>

        <div className="about__grid">
          {/* Photo */}
          <motion.div
            className="about__photo-wrapper"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="about__photo-frame">
              <img src={ME} alt="Mohd Samiullah — Backend-Focused Fullstack Engineer" loading="lazy" />
            </div>
            <div className="about__photo-glow" aria-hidden="true" />
          </motion.div>

          {/* Content */}
          <motion.div
            className="about__content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            {/* Stats */}
            <div className="about__stats">
              {stats.map(({ value, label }) => (
                <div key={label} className="about__stat glass-card">
                  <span className="about__stat-value gradient-text">{value}</span>
                  <span className="about__stat-label">{label}</span>
                </div>
              ))}
            </div>

            {/* Bio */}
            <p className="about__bio">
              I'm a Backend-Focused Fullstack Engineer who designs and ships production-grade
              systems at scale. At{' '}
              <strong style={{ color: 'var(--secondary)' }}>ShelfEx</strong>, I architect
              AI-powered backend pipelines on AWS — slashing processing latency by 40%,
              cutting database load by 70% via Redis caching, and processing thousands of
              async jobs through distributed SQS queues.
            </p>
            <p className="about__bio">
              With an M.Tech from Jamia Millia Islamia (88%) and 2+ years across Node.js,
              TypeScript, PostgreSQL, Docker, and AWS, I bring an engineering-first discipline
              to every system I build — from microservice architecture to LLM-integrated
              data pipelines. I write backend systems that are observable, maintainable, and
              built to survive production.
            </p>

            <a href="#contact" className="btn btn-primary about__cta">
              Hire Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
