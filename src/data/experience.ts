import type { Experience } from '@/types'

/**
 * Roles, titles, locations and dates follow the current CV in
 * `public/resume`, which supersedes the figures the previous site carried.
 */
export const experience: readonly Experience[] = [
  {
    company: 'PaakNikah',
    role: 'Full Stack Developer',
    kind: 'Founder',
    location: 'New Delhi',
    from: 'Nov 2025',
    to: 'Present',
    current: true,
    product: 'PaakNikah',
    summary:
      'Founded and independently built a matrimonial platform from concept to launch, owning every technical decision along the way.',
    contributions: [
      'Took the product from initial concept to a fully launched platform, including real-time chat over Socket.io and OAuth-based Google login.',
      'Built an admin panel with metrics, charts and reports used to make product decisions and manage users.',
      'Implemented private photo and contact sharing with granular access control, profile verification, and report and block tooling.',
      'Owned end-to-end product development, technical decisions, deployment, infrastructure and application security.',
    ],
    stack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Socket.io', 'OAuth', 'Docker'],
    logo: {
      src: '/logos/paaknikah.jpeg',
      width: 1306,
      height: 1205,
      alt: 'PaakNikah logo',
    },
  },
  {
    company: 'ShelfEx',
    role: 'Full Stack Developer',
    kind: 'Full-time',
    location: 'Gurugram',
    from: 'Feb 2025',
    to: 'Nov 2025',
    current: false,
    product: 'ShelfMuse',
    summary:
      'Backend engineer on ShelfMuse, an AI-powered production application, working on its LLM integration and the pipeline underneath it.',
    contributions: [
      'Built and shipped the backend APIs for ShelfMuse, integrating OpenAI and Claude models into a production application.',
      'Added a Redis caching layer across high-traffic routes, cutting database load by 70%.',
      'Found and fixed pipeline bottlenecks, bringing response time down from 5 seconds to 3.',
      'Built dashboards with metrics, charts and reports that fed real operational decisions.',
    ],
    stack: ['Node.js', 'Redis', 'PostgreSQL', 'AWS', 'Docker', 'OpenAI', 'Claude'],
    logo: {
      src: '/logos/shelfex.png',
      width: 256,
      height: 256,
      alt: 'ShelfEx logo',
    },
  },
  {
    company: 'Wasserstoff',
    role: 'Software Developer Intern',
    kind: 'Internship',
    location: 'Gurugram',
    from: 'Sep 2024',
    to: 'Jan 2025',
    current: false,
    product: null,
    summary:
      'Replaced a manual data collection process with an automated pipeline.',
    contributions: [
      'Turned a manual web data collection process into an automated Puppeteer workflow, cutting manual effort by 80%.',
      'Contributed to debugging, testing and deployment inside a fast-paced Agile engineering environment.',
      'Worked cross-functionally with engineering teams to support reliable, timely feature delivery.',
    ],
    stack: ['Node.js', 'Puppeteer', 'PostgreSQL', 'Agile'],
    logo: {
      src: '/logos/wasserstoff.jpeg',
      width: 200,
      height: 200,
      alt: 'Wasserstoff logo',
    },
  },
  {
    company: 'Plaxonic Technologies',
    role: 'Full Stack Developer Intern',
    kind: 'Internship',
    location: 'Noida',
    from: 'Oct 2023',
    to: 'May 2024',
    current: false,
    product: 'HerbalCart',
    summary:
      'Frontend and integration work on HerbalCart, a live eCommerce product.',
    contributions: [
      'Built responsive pages and UI components with React, Redux and Next.js for the live eCommerce project HerbalCart.',
      'Integrated REST APIs and backend services to keep data flow reliable across the application.',
      'Built reusable frontend modules and streamlined development workflows, improving development efficiency by 40%.',
    ],
    stack: ['React', 'Redux', 'Next.js', 'REST API'],
    logo: {
      src: '/logos/plaxonic.png',
      width: 225,
      height: 225,
      alt: 'Plaxonic Technologies logo',
    },
  },
  {
    company: 'IBM Innovation Camp',
    role: 'Data Analytics Trainee',
    kind: 'Training programme',
    location: 'Remote',
    from: '2022',
    to: '2022',
    current: false,
    product: null,
    summary: 'First structured work with machine learning and data pipelines.',
    contributions: [
      'Built a potato disease classification model with TensorFlow and CNNs, reaching high validation accuracy on real agricultural datasets.',
      'Applied NumPy, Pandas and Matplotlib across data wrangling, analysis and visualisation.',
    ],
    stack: ['Python', 'TensorFlow', 'NumPy', 'Pandas'],
    logo: {
      src: '/logos/ibm.png',
      width: 512,
      height: 512,
      alt: 'IBM logo',
    },
  },
]
