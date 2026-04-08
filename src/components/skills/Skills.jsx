import { motion } from 'framer-motion'
import {
  SiJavascript, SiReact, SiRedux, SiNextdotjs, SiNodedotjs,
  SiExpress, SiMongodb, SiPostgresql, SiTailwindcss,
  SiTypescript, SiGit, SiDocker, SiRedis, SiPython, SiMysql,
  SiGithub, SiJira,
} from 'react-icons/si'
import { FaAws, FaBrain, FaRobot } from 'react-icons/fa'
import { BiCode, BiBot, BiBrain, BiServer, BiNetworkChart } from 'react-icons/bi'
import { MdAutoAwesome, MdMemory, MdTune } from 'react-icons/md'
import './skills.css'

const techGroups = [
  {
    category: 'Backend & Architecture',
    primary: true,
    items: [
      { name: 'Node.js',          icon: <SiNodedotjs />,  color: '#68a063' },
      { name: 'Express.js',       icon: <SiExpress />,    color: '#f1f5f9' },
      { name: 'TypeScript',       icon: <SiTypescript />, color: '#3178c6' },
      { name: 'REST APIs',        icon: <BiServer />,     color: '#818cf8' },
      { name: 'Microservices',    icon: <BiNetworkChart />, color: '#22d3ee' },
      { name: 'Hono',             icon: <BiCode />,       color: '#e67e22' },
      { name: 'FastAPI',          icon: <SiPython />,     color: '#009688' },
      { name: 'Python',           icon: <SiPython />,     color: '#3776ab' },
    ],
  },
  {
    category: 'Databases & Caching',
    items: [
      { name: 'PostgreSQL',       icon: <SiPostgresql />, color: '#336791' },
      { name: 'MySQL',            icon: <SiMysql />,      color: '#4479a1' },
      { name: 'MongoDB',          icon: <SiMongodb />,    color: '#47a248' },
      { name: 'Redis',            icon: <SiRedis />,      color: '#dc382d' },
      { name: 'Drizzle ORM',      icon: <BiCode />,       color: '#c5f74f' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      { name: 'AWS',              icon: <FaAws />,        color: '#ff9900' },
      { name: 'AWS Lambda',       icon: <FaAws />,        color: '#ff9900' },
      { name: 'AWS S3',           icon: <FaAws />,        color: '#569a31' },
      { name: 'AWS SQS',          icon: <FaAws />,        color: '#ff4f8b' },
      { name: 'AWS RDS',          icon: <FaAws />,        color: '#527fff' },
      { name: 'API Gateway',      icon: <FaAws />,        color: '#e8a838' },
      { name: 'Docker',           icon: <SiDocker />,     color: '#2496ed' },
      { name: 'GitHub Actions',   icon: <SiGithub />,     color: '#2088ff' },
      { name: 'CI/CD Pipelines',  icon: <MdAutoAwesome />, color: '#34d399' },
    ],
  },
  {
    category: 'AI / LLM Engineering',
    isNew: true,
    items: [
      { name: 'Generative AI',    icon: <MdAutoAwesome />, color: '#a78bfa' },
      { name: 'RAG Pipelines',    icon: <BiNetworkChart />, color: '#34d399' },
      { name: 'LoRA Fine-tuning', icon: <MdTune />,        color: '#f472b6' },
      { name: 'AI Agents',        icon: <FaRobot />,       color: '#22d3ee' },
      { name: 'LLM Deployment',   icon: <MdMemory />,      color: '#fb923c' },
    ],
  },
  {
    category: 'Frontend',
    supportive: true,
    items: [
      { name: 'Next.js',          icon: <SiNextdotjs />,  color: '#f1f5f9' },
      { name: 'React.js',         icon: <SiReact />,      color: '#61dafb' },
      { name: 'JavaScript',       icon: <SiJavascript />, color: '#f7df1e' },
      { name: 'Redux',            icon: <SiRedux />,      color: '#764abc' },
      { name: 'Tailwind CSS',     icon: <SiTailwindcss />, color: '#38bdf8' },
    ],
  },
  {
    category: 'Tools & Practices',
    items: [
      { name: 'Git',              icon: <SiGit />,        color: '#f05032' },
      { name: 'GitHub',           icon: <SiGithub />,     color: '#f1f5f9' },
      { name: 'JIRA',             icon: <SiJira />,       color: '#0052cc' },
      { name: 'Agile',            icon: <BiBot />,        color: '#22d3ee' },
      { name: 'Unit Testing',     icon: <BiCode />,       color: '#6366f1' },
      { name: 'System Design',    icon: <BiNetworkChart />, color: '#f97316' },
    ],
  },
]

const softSkills = [
  'System Design', 'Problem Solving', 'Analytical Thinking',
  'Team Collaboration', 'Self-motivated', 'Adaptability',
  'Attention to Detail', 'Accountability',
]

const container = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const item = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
}

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section__label">Tech Stack</span>
          <h2 className="section__title">Skills &amp; Technologies</h2>
          <p className="section__subtitle">
            Backend-first engineering — scalable APIs, cloud infrastructure, and AI systems,
            with full-stack capability to ship end-to-end.
          </p>
        </motion.div>

        {/* Tech groups */}
        <div className="skills__groups">
          {techGroups.map(({ category, items: groupItems, primary, isNew, supportive }, gi) => (
            <motion.div
              key={category}
              className={`skills__group glass-card${primary ? ' skills__group--primary' : ''}${isNew ? ' skills__group--new' : ''}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.07, ease: 'easeOut' }}
            >
              <div className="skills__group-header">
                <h3 className="skills__group-title">{category}</h3>
                {primary   && <span className="skills__badge skills__badge--primary">Core</span>}
                {isNew     && <span className="skills__badge skills__badge--new">New</span>}
                {supportive && <span className="skills__badge skills__badge--supportive">Supportive</span>}
              </div>
              <motion.div
                className="skills__grid"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {groupItems.map(({ name, icon, color }) => (
                  <motion.div key={name} className="skills__pill" variants={item}>
                    <span className="skills__pill-icon" style={{ color }}>
                      {icon}
                    </span>
                    <span>{name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Soft skills */}
        <motion.div
          className="skills__soft"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="skills__soft-title">
            <BiBrain style={{ color: 'var(--primary-light)', fontSize: '1rem' }} />
            Professional Strengths
          </h3>
          <div className="skills__soft-tags">
            {softSkills.map((skill) => (
              <span key={skill} className="skills__soft-tag">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
