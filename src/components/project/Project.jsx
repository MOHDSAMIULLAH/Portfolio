import { motion } from 'framer-motion'
import { BsGithub, BsBoxArrowUpRight } from 'react-icons/bs'
import MovieMate    from '../../assets/MovieMate.PNG'
import iNotebook   from '../../assets/iNotebook.PNG'
import admin       from '../../assets/admin.png'
import food_ordering from '../../assets/food_ordering.png'
import store       from '../../assets/store.png'
import paaknikah   from '../../assets/paaknikah.png'
import './project.css'

const projects = [
  {
    image:   paaknikah,
    title:   'PaakNikah — Matrimonial Platform',
    desc:    'Built a matrimonial platform for the Muslim community across India, focused on the Delhi NCR region — profile creation, match browsing filtered by education, profession, location, and community, secure in-platform messaging, verified profiles, and privacy-first design on a TypeScript/PostgreSQL backend.',
    tags:    ['TypeScript', 'PostgreSQL', 'Docker'],
    github:  'https://github.com/MOHDSAMIULLAH/paaknikah',
    demo:    'https://www.paaknikah.com/',
    featured: true,
  },
  {
    image:   store,
    title:   'E-Commerce Platform (Full-Stack)',
    desc:    'Architected a full-stack e-commerce platform with Next.js API routes and MongoDB — designed normalized product, cart, and order schemas, built RESTful endpoints for catalog management and checkout flow, and implemented session-based auth with an independent admin microservice for inventory control.',
    tags:    ['Next.js', 'MongoDB', 'REST API', 'Tailwind CSS', 'React'],
    github:  'https://github.com/MOHDSAMIULLAH/Ecommerce-NextJs-store',
    demo:    'https://ecommerce-next-js-clothes-store.vercel.app/',
    featured: true,
  },
  {
    image:   food_ordering,
    title:   'Food Delivery App',
    desc:    'Developed a scalable food delivery platform using Next.js and Node.js — designed REST APIs for restaurant listings, dynamic menu management, and full order lifecycle from cart to confirmation, with optimized MongoDB queries and mobile-first UI reducing checkout friction.',
    tags:    ['Next.js', 'Node.js', 'REST API', 'MongoDB', 'Tailwind CSS'],
    github:  'https://github.com/MOHDSAMIULLAH/food-ordering-App-next',
    demo:    'https://food-ordering-app-six-xi.vercel.app/',
    featured: true,
  },
  {
    image:   admin,
    title:   'E-Commerce Admin Dashboard',
    desc:    'Built a secure admin panel with Next.js API routes and MongoDB — implemented RBAC for protected management routes, aggregation pipelines for real-time sales analytics via Chart.js, and RESTful CRUD endpoints for inventory and order state management.',
    tags:    ['Next.js', 'MongoDB', 'RBAC', 'Chart.js', 'REST API'],
    github:  'https://github.com/MOHDSAMIULLAH/Ecommerce-NextJs-admin',
    demo:    'https://ecommerce-next-js-admin-ten.vercel.app/',
  },
  {
    image:   iNotebook,
    title:   'iNotebook — Secure Cloud Notes',
    desc:    'Designed and shipped a cloud note-taking app on the MERN stack — built Express.js REST API with JWT-based stateless auth, bcrypt-secured password storage, Mongoose-validated MongoDB schemas, and full CRUD with ownership guards to prevent unauthorized data access.',
    tags:    ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'REST API'],
    github:  'https://github.com/MOHDSAMIULLAH/iNotebook-MERN',
    demo:    'https://i-notebook-mern-six.vercel.app/',
  },
  {
    image:   MovieMate,
    title:   'MovieMate — Discovery App',
    desc:    'Built a React.js movie discovery platform consuming the TMDB REST API — implemented search debouncing (300ms) to minimize API calls, localStorage watchlist persistence, lazy image loading for Core Web Vitals optimization, and optimistic UI state updates for instant feedback.',
    tags:    ['React', 'TMDB REST API', 'Performance', 'Local Storage'],
    github:  'https://github.com/MOHDSAMIULLAH/MovieMate',
    demo:    'https://moviemate-main.netlify.app/',
  },
]

const cardVariant = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0  },
}

const Project = () => {
  return (
    <section id="project">
      <div className="container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section__label">Portfolio</span>
          <h2 className="section__title">Featured Projects</h2>
          <p className="section__subtitle">
            Backend systems and full-stack applications — each one a study in architecture,
            API design, and production-grade engineering.
          </p>
        </motion.div>

        <div className="projects__grid">
          {projects.map(({ image, title, desc, tags, github, demo, featured }, i) => (
            <motion.article
              key={title}
              className={`project-card glass-card${featured ? ' project-card--featured' : ''}`}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
            >
              {/* Image */}
              <div className="project-card__image">
                <img src={image} alt={`${title} screenshot`} loading="lazy" />
                <div className="project-card__overlay">
                  <a href={demo} target="_blank" rel="noopener noreferrer" className="project-card__overlay-btn" aria-label={`View ${title} live demo`}>
                    <BsBoxArrowUpRight /> View Live
                  </a>
                </div>
                {featured && <span className="project-card__featured">Featured</span>}
              </div>

              {/* Body */}
              <div className="project-card__body">
                <h3 className="project-card__title">{title}</h3>
                <p className="project-card__desc">{desc}</p>

                {/* Tech tags */}
                <div className="project-card__tags">
                  {tags.map((tag) => (
                    <span key={tag} className="tech-badge">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="project-card__footer">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  aria-label={`${title} GitHub repository`}
                >
                  <BsGithub /> Code
                </a>
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  aria-label={`${title} live demo`}
                >
                  <BsBoxArrowUpRight /> Live Demo
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project
