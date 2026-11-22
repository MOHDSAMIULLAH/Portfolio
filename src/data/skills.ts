import type { AiCapability, Education, SkillGroup } from '@/types'

export const skillGroups: readonly SkillGroup[] = [
  {
    name: 'Backend & Architecture',
    note: 'Where most of my work lives',
    emphasis: 'core',
    items: [
      'Node.js',
      'Express.js',
      'TypeScript',
      'REST APIs',
      'GraphQL',
      'Microservices',
      'NestJS',
      'Hono',
      'FastAPI',
      'Python',
      'GoLang',
    ],
  },
  {
    name: 'Databases & Caching',
    note: 'Schema design, query tuning, cache invalidation',
    emphasis: 'core',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Drizzle ORM'],
  },
  {
    name: 'Cloud & DevOps',
    note: 'Queues, functions, containers, pipelines',
    emphasis: 'core',
    items: [
      'AWS Lambda',
      'AWS S3',
      'AWS SQS',
      'AWS EC2',
      'AWS RDS',
      'API Gateway',
      'Docker',
      'Linux',
      'GitHub Actions',
      'CI/CD',
    ],
  },
  {
    name: 'AI / LLM Engineering',
    note: 'Shipped with OpenAI and Claude in production',
    emphasis: 'standard',
    items: [
      'OpenAI',
      'Claude',
      'RAG Pipelines',
      'LangGraph',
      'AI Agents',
      'LoRA Fine-tuning',
      'LLM Deployment',
      'n8n',
    ],
  },
  {
    name: 'Frontend',
    note: 'Enough to ship the whole product',
    emphasis: 'supporting',
    items: ['Next.js', 'React.js', 'JavaScript', 'Redux', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    name: 'Tools & Practice',
    note: 'How the work gets reviewed and shipped',
    emphasis: 'supporting',
    items: [
      'Git',
      'GitHub',
      'Jest',
      'Unit Testing',
      'Agile',
      'Scrum',
      'JIRA',
      'System Design',
    ],
  },
]

/** Ordered as a request travels the pipeline; the AI section renders it as one. */
export const aiCapabilities: readonly AiCapability[] = [
  {
    stage: 'Ingest',
    title: 'RAG pipeline architecture',
    detail:
      'Chunking, vector embeddings and semantic search over pgvector or Pinecone, so answers are grounded in a real corpus rather than model recall.',
  },
  {
    stage: 'Retrieve',
    title: 'Context assembly',
    detail:
      'Ranking retrieved passages and assembling the prompt within the context budget, which is where grounded answers are won or lost.',
  },
  {
    stage: 'Adapt',
    title: 'LoRA fine-tuning',
    detail:
      'Low-Rank Adaptation to specialise a foundation model on domain data without the cost of a full retrain.',
  },
  {
    stage: 'Act',
    title: 'AI agents and tool use',
    detail:
      'Agents with memory and multi-step planning, wired to external APIs, databases and backend services for task automation.',
  },
  {
    stage: 'Serve',
    title: 'LLM deployment',
    detail:
      'Containerised inference behind Node.js or FastAPI with streaming responses, response caching and cost-aware model routing.',
  },
]

export const education: readonly Education[] = [
  {
    qualification: 'M.Tech',
    field: 'Electronics & Communication',
    institution: 'Jamia Millia Islamia',
    score: '88%',
    from: '2021',
    to: '2023',
  },
  {
    qualification: 'B.E.',
    field: 'Electronics & Communication',
    institution: 'Jamia Millia Islamia',
    score: '74%',
    from: '2016',
    to: '2020',
  },
  {
    qualification: 'Diploma',
    field: 'Electronics Engineering',
    institution: 'Jamia Millia Islamia',
    score: '79.9%',
    from: '2013',
    to: '2016',
  },
  {
    qualification: 'Senior Secondary',
    field: null,
    institution: 'Saint Vivekanand Sr Sec Public School, CBSE',
    score: '74%',
    from: '2011',
    to: '2013',
  },
  {
    qualification: 'Secondary',
    field: null,
    institution: 'Saint Vivekanand Sr Sec Public School, CBSE',
    score: '79.8%',
    from: '2009',
    to: '2011',
  },
]
