import { motion } from 'framer-motion'
import { BsDatabase, BsLightning, BsCodeSlash } from 'react-icons/bs'
import { BiBot } from 'react-icons/bi'
import './achievements.css'

const achievements = [
  {
    metric:  '70%',
    label:   'DB Load Reduced',
    detail:  'Redis caching layer eliminated repeat PostgreSQL queries on high-traffic routes at ShelfEx.',
    icon:    <BsDatabase />,
    color:   '#22d3ee',
    glow:    'rgba(34,211,238,0.15)',
  },
  {
    metric:  '40%',
    label:   'Faster Processing',
    detail:  'Cut AI image generation time from 5s → 3s via async task queues, SQS, and batch optimization.',
    icon:    <BsLightning />,
    color:   '#6366f1',
    glow:    'rgba(99,102,241,0.15)',
  },
  {
    metric:  '80%',
    label:   'Manual Effort Saved',
    detail:  'Automated multi-source data scraping with Puppeteer pipelines, eliminating repetitive human workflows.',
    icon:    <BiBot />,
    color:   '#a78bfa',
    glow:    'rgba(167,139,250,0.15)',
  },
  {
    metric:  '40%',
    label:   'Dev Speed Boost',
    detail:  'Improved development velocity at Plaxonic through reusable React component architecture and Agile practices.',
    icon:    <BsCodeSlash />,
    color:   '#34d399',
    glow:    'rgba(52,211,153,0.15)',
  },
]

const container = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const card = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const Achievements = () => {
  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section__label">Impact</span>
          <h2 className="section__title">Key Achievements</h2>
          <p className="section__subtitle">
            Measurable results delivered across production systems and real teams.
          </p>
        </motion.div>

        <motion.div
          className="achievements__grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map(({ metric, label, detail, icon, color, glow }) => (
            <motion.div
              key={label}
              className="achievement-card glass-card"
              style={{ '--ach-color': color, '--ach-glow': glow }}
              variants={card}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            >
              <div className="achievement-card__icon" aria-hidden="true">
                {icon}
              </div>
              <div className="achievement-card__metric gradient-text">
                {metric}
              </div>
              <div className="achievement-card__label">{label}</div>
              <p className="achievement-card__detail">{detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
