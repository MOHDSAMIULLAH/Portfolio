import { motion } from 'framer-motion'
import paaknikahLogo from '../../assets/paaknikahlogo.jpeg'
import shelfExLogo from '../../assets/shelfEx logo.png'
import wasserstoff from '../../assets/wasserstoff.jpeg'
import ibm         from '../../assets/ibm.png'
import plax        from '../../assets/Plaxonic_Technologies.png'
import './training.css'

const experiences = [
  {
    logo:     paaknikahLogo,
    logoAlt:  'PaakNikah logo',
    company:  'PaakNikah',
    role:     'Full-Stack Developer',
    type:     'Full-time',
    period:   'Nov 2025 — Present',
    current:  true,
    points: [
      'Built a full-stack matrimonial platform from the ground up — session-based authentication plus Google OAuth login, profile creation, match search, and shortlist/connect flows, with real-time chat between matched users.',
      'Shipped premium subscription tiers, user verification, a notification system, private photo/contact sharing with granular access control, image uploads, and report/block tooling for a secure matchmaking experience.',
      'Owned the product end-to-end as sole full-stack developer — technical architecture, deployment, infrastructure, and application security, built on a TypeScript and PostgreSQL stack.',
    ],
  },
  {
    logo:     shelfExLogo,
    logoAlt:  'ShelfEx logo',
    company:  'ShelfEx',
    role:     'Backend-Focused Fullstack Developer',
    type:     'Full-time',
    period:   'Feb 2025 — Nov 2025',
    current:  false,
    points: [
      'Architected an AI-powered text-to-image generation backend using Node.js, AWS Lambda, and SQS — processing thousands of async jobs with fan-out queue patterns and zero dropped requests.',
      'Engineered a Redis caching layer across high-traffic API routes, reducing PostgreSQL query load by 70% and improving P95 latency from 300ms to under 90ms.',
      'Optimized the image processing pipeline end-to-end, cutting latency from 5s → 3s (40% gain) through async batching, pre-signed S3 URL strategy, and Lambda cold-start mitigation.',
      'Designed and deployed containerized microservices on AWS (S3, Lambda, SQS, RDS, API Gateway) with Docker, enabling independent scaling and zero-downtime deployments.',
    ],
  },
  {
    logo:     wasserstoff,
    logoAlt:  'Wasserstoff AI logo',
    company:  'Wasserstoff AI Pvt. Ltd.',
    role:     'Fullstack Developer',
    type:     'Full-time',
    period:   '2023 — 2024',
    current:  false,
    points: [
      'Built Puppeteer-based multi-source web scraping pipelines with Node.js, eliminating 80% of manual data collection effort and delivering structured data at production scale.',
      'Designed and shipped RESTful APIs with Express.js, PostgreSQL, and Drizzle ORM — applying Zod schema validation and middleware-based error handling for production reliability.',
      'Automated backend data processing workflows for high-volume document ingestion, including parsing, normalization, and persistence pipelines.',
      'Collaborated in Agile sprints using JIRA, shipped iterative backend features with peer code review and CI-driven quality gates.',
    ],
  },
  {
    logo:     plax,
    logoAlt:  'Plaxonic Technologies logo',
    company:  'Plaxonic Technologies',
    role:     'Software Developer Intern',
    type:     'Internship',
    period:   '2022 — 2023',
    current:  false,
    points: [
      'Contributed to scalable eCommerce backend APIs using Node.js, improving feature delivery speed by 40% through modular service architecture and reusable middleware patterns.',
      'Built responsive React and Redux frontends consuming REST APIs — ensuring clean separation between UI state and backend data contracts.',
      'Delivered features within Agile sprint cycles, participating in daily standups and sprint retrospectives to improve team delivery cadence.',
    ],
  },
  {
    logo:     ibm,
    logoAlt:  'IBM logo',
    company:  'IBM — Innovation Camp',
    role:     'Data Analytics Trainee',
    type:     'Training Program',
    period:   '2022',
    current:  false,
    points: [
      'Built a Potato Disease Classification model using TensorFlow and CNNs, achieving high validation accuracy on real agricultural datasets — an early foundation in ML and data pipelines.',
      'Applied NumPy, Pandas, and Matplotlib for end-to-end data analysis, wrangling, and visualization — establishing rigorous data engineering fundamentals.',
    ],
  },
]

const Training = () => {
  return (
    <section id="training">
      <div className="container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section__label">Experience</span>
          <h2 className="section__title">Work Experience</h2>
          <p className="section__subtitle">
            Building production-grade backend systems, distributed APIs, and cloud-native architectures
            across real-world engineering teams.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="timeline">
          {experiences.map(({ logo, logoAlt, initials, initialsColor, company, role, type, period, current, points }, i) => (
            <motion.div
              key={company}
              className="timeline__item"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
            >
              {/* Timeline dot */}
              <div className={`timeline__dot${current ? ' timeline__dot--current' : ''}`} aria-hidden="true" />

              {/* Card */}
              <div className={`timeline__card glass-card${current ? ' timeline__card--current' : ''}`}>
                {/* Header */}
                <div className="timeline__card-header">
                  {logo ? (
                    <img src={logo} alt={logoAlt} className="timeline__logo" loading="lazy" />
                  ) : (
                    <div className="timeline__logo-initials" style={{ color: initialsColor, borderColor: initialsColor }}>
                      {initials}
                    </div>
                  )}
                  <div className="timeline__meta">
                    <h3 className="timeline__role">{role}</h3>
                    <p className="timeline__company">{company}</p>
                    <div className="timeline__badges">
                      <span className="timeline__type">{type}</span>
                      <span className="timeline__period">{period}</span>
                      {current && <span className="timeline__current-badge">Current</span>}
                    </div>
                  </div>
                </div>

                {/* Points */}
                <ul className="timeline__points">
                  {points.map((point, j) => (
                    <li key={j} className="timeline__point">
                      <span className="timeline__point-dot" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Training
