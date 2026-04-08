import { motion } from 'framer-motion'
import { FaRobot } from 'react-icons/fa'
import { MdAutoAwesome, MdMemory, MdTune } from 'react-icons/md'
import { BiNetworkChart } from 'react-icons/bi'
import './ai.css'

const capabilities = [
  {
    icon: <MdAutoAwesome />,
    color: '#a78bfa',
    title: 'Generative AI Applications',
    desc: 'Build and deploy LLM-based applications — from prompt engineering and context management to streaming response pipelines integrated with production REST backends.',
  },
  {
    icon: <BiNetworkChart />,
    color: '#34d399',
    title: 'RAG Pipeline Architecture',
    desc: 'Design Retrieval-Augmented Generation pipelines — vector embeddings, semantic search with pgvector/Pinecone, and context injection for grounded, accurate AI responses at scale.',
  },
  {
    icon: <MdTune />,
    color: '#f472b6',
    title: 'LoRA Fine-tuning',
    desc: 'Apply Low-Rank Adaptation (LoRA) for parameter-efficient LLM fine-tuning — adapting foundation models to domain-specific tasks without full retraining cost.',
  },
  {
    icon: <FaRobot />,
    color: '#22d3ee',
    title: 'AI Agent Development',
    desc: 'Develop autonomous AI agents with tool-use, memory, and multi-step planning — wiring LLMs to external APIs, databases, and backend services for task automation.',
  },
  {
    icon: <MdMemory />,
    color: '#fb923c',
    title: 'LLM App Deployment',
    desc: 'Deploy LLM-powered applications to production — containerized with Docker, served through Node.js or FastAPI backends, with streaming, caching, and cost-optimized inference.',
  },
]

const cardVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0  },
}

const AIEngineering = () => {
  return (
    <section id="ai-engineering" className="ai-section">
      <div className="container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section__label">Emerging Expertise</span>
          <h2 className="section__title">AI &amp; LLM Engineering</h2>
          <p className="section__subtitle">
            Building the next layer of the stack — LLM-powered backends, RAG pipelines,
            and AI agents that integrate seamlessly with production systems.
          </p>
        </motion.div>

        <div className="ai__grid">
          {capabilities.map(({ icon, color, title, desc }, i) => (
            <motion.div
              key={title}
              className="ai__card glass-card"
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -5 }}
            >
              <div className="ai__card-icon" style={{ color, boxShadow: `0 0 20px ${color}22` }}>
                {icon}
              </div>
              <h3 className="ai__card-title">{title}</h3>
              <p className="ai__card-desc">{desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="ai__footer-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="ai__footer-badge">
            <MdAutoAwesome style={{ fontSize: '0.8rem' }} />
            Currently applying these in production at ShelfEx — AI image generation pipeline
          </span>
        </motion.div>
      </div>
    </section>
  )
}

export default AIEngineering
