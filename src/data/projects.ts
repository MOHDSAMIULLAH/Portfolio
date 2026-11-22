import type { Project } from '@/types'

/**
 * Ordered by engineering complexity and business impact. The first two render
 * as full-width case studies, the next three at medium weight, the rest as an
 * index.
 *
 * Entries without a `shot` are employer products with no public screenshot, so
 * they are drawn as a request topology rather than illustrated with an
 * unrelated image.
 */
export const projects: readonly Project[] = [
  {
    slug: 'shelfmuse',
    name: 'ShelfMuse',
    tagline: 'AI-powered production application at ShelfEx',
    context:
      'ShelfEx needed generated output in front of users quickly enough to feel interactive, on a database that was already carrying the rest of the product.',
    contribution:
      'I built and shipped the backend APIs, integrated OpenAI and Claude, and built the dashboards the team used to read what the system was doing.',
    challenge:
      'Model calls are slow and expensive, and every repeat read was landing on the primary database at the same time generation jobs were queued against it.',
    solution:
      'I traced the pipeline end to end and cleared its bottlenecks, taking response time from 5 seconds to 3, then put a Redis caching layer over the high-traffic routes and cut database load by 70%.',
    features: [
      'Backend APIs for an AI-powered production application',
      'OpenAI and Claude model integration',
      'Redis caching across high-traffic routes',
      'Metrics, charts and reporting dashboards',
    ],
    stack: ['Node.js', 'OpenAI', 'Claude', 'Redis', 'PostgreSQL', 'AWS', 'Docker'],
    repo: null,
    demo: null,
    demoStatus: 'live',
    accessNote: 'Built at ShelfEx. Source and deployment are the company’s.',
    weight: 'feature',
    shot: null,
    topology: {
      label: 'request path',
      nodes: [
        { node: 'client', detail: 'browser' },
        { node: 'api', detail: 'Node.js' },
        { node: 'cache', detail: 'Redis' },
        { node: 'queue', detail: 'async jobs' },
        { node: 'model', detail: 'OpenAI, Claude', accent: true },
        { node: 'store', detail: 'PostgreSQL' },
      ],
    },
  },
  {
    slug: 'paaknikah',
    name: 'PaakNikah',
    tagline: 'Matrimonial platform for the Muslim community in India',
    context:
      'Matchmaking asks people to hand over photographs, contact details and family information before any trust exists. Privacy cannot be bolted on afterwards when the data is this personal.',
    contribution:
      'I founded it and built all of it: architecture, backend, interface, deployment, infrastructure and application security.',
    challenge:
      'Every field on a profile has a different audience. A photograph visible to a matched user must stay invisible to a browsing stranger, and that rule has to hold on every query, not just on the screen.',
    solution:
      'A TypeScript and PostgreSQL backend where visibility is a first-class concept. Photographs and contact details sit behind per-user grants, profiles are verified before they surface in search, and every match filter runs server-side so no private field reaches an unauthorised client.',
    features: [
      'Match search filtered by education, profession, location and community',
      'Private photo and contact sharing with per-request grants',
      'Real-time chat between matched users over Socket.IO',
      'Google OAuth login, profile verification, reporting and blocking',
    ],
    stack: ['TypeScript', 'PostgreSQL', 'Node.js', 'Socket.IO', 'OAuth', 'Docker'],
    repo: null,
    demo: 'https://www.paaknikah.com/',
    demoStatus: 'live',
    accessNote: 'Source closed: it is a live commercial product.',
    weight: 'feature',
    shot: {
      src: '/projects/paaknikah.png',
      width: 1825,
      height: 907,
      alt: 'PaakNikah home page showing profile search and match browsing',
    },
    topology: null,
  },
  {
    slug: 'realtime-chat',
    name: 'Real-Time Chat',
    tagline: 'PERN stack messaging with live presence',
    context:
      'A chat interface is judged on latency. Anything that makes a message feel sent-then-waiting breaks the illusion of a conversation.',
    contribution:
      'Built the whole stack: PostgreSQL schema through Prisma, an Express and Socket.IO server, and a React client with global state in Zustand.',
    challenge:
      'Delivery, presence and authentication all have to agree. A socket has to know which authenticated user it belongs to, and presence has to survive reconnects without reporting ghosts as online.',
    solution:
      'JWT authentication gates both the REST routes and the socket handshake, presence is tracked per connection rather than per session, and the client keeps one Zustand store so message, presence and auth state cannot drift apart.',
    features: [
      'Real-time messaging over Socket.IO',
      'JWT authentication and authorisation',
      'Live online and offline user status',
      'Audio alerts, auto-scroll and new-message feedback',
    ],
    stack: ['TypeScript', 'PostgreSQL', 'Prisma', 'Express', 'Socket.IO', 'React', 'Zustand'],
    repo: 'https://github.com/MOHDSAMIULLAH/realtime-chat-app',
    demo: 'https://pern-chat-app-master-qq4p.onrender.com/',
    demoStatus: 'paused',
    accessNote: null,
    weight: 'standard',
    shot: {
      src: '/projects/realtime-chat.png',
      width: 950,
      height: 571,
      alt: 'Real-time chat interface showing the conversation list and message pane',
    },
    topology: null,
  },
  {
    slug: 'food-delivery',
    name: 'Food Delivery',
    tagline: 'Menus through to paid, confirmed orders',
    context:
      'A delivery order crosses menus, a cart, a payment and a confirmation. Every extra step loses orders, and every manual admin task slows the kitchen behind it.',
    contribution:
      'Built the full-stack application in Next.js, including the admin panel the operators actually run the business from.',
    challenge:
      'Payment and order state have to stay in step. A charge that succeeds while the order write fails is worse than a failure.',
    solution:
      'Stripe handles payment with NextAuth gating the session, and an admin panel for category, product and user management cut admin workflow time by 50%.',
    features: [
      'NextAuth authentication and Stripe payments',
      'Admin panel for category, product and user management',
      'Restaurant listings and dynamic menu management',
      'Mobile-first checkout flow',
    ],
    stack: ['Next.js', 'Stripe', 'NextAuth', 'Context API', 'Cloudinary', 'Tailwind CSS'],
    repo: 'https://github.com/MOHDSAMIULLAH/food-ordering-App-next',
    demo: 'https://food-ordering-app-six-xi.vercel.app/',
    demoStatus: 'paused',
    accessNote: null,
    weight: 'standard',
    shot: {
      src: '/projects/food-delivery.png',
      width: 1510,
      height: 772,
      alt: 'Food delivery application showing restaurant listings and menu items',
    },
    topology: null,
  },
  {
    slug: 'herbalcart',
    name: 'HerbalCart',
    tagline: 'Live eCommerce product at Plaxonic Technologies',
    context:
      'A live storefront under active development, where the frontend had to keep pace with a backend that was still moving.',
    contribution:
      'Built responsive pages and UI components in React, Redux and Next.js, and integrated the REST APIs and backend services behind them.',
    challenge:
      'Features were being rebuilt from scratch each time because nothing was shared, which made every change slower than the last.',
    solution:
      'I extracted reusable frontend modules and tightened the development workflow around them, which raised development efficiency by 40%.',
    features: [
      'Responsive pages and UI components',
      'REST API and backend service integration',
      'Reusable frontend module library',
    ],
    stack: ['React', 'Redux', 'Next.js', 'REST API'],
    repo: null,
    demo: null,
    demoStatus: 'live',
    accessNote: 'Built at Plaxonic Technologies. Source and deployment are the company’s.',
    weight: 'standard',
    shot: null,
    topology: {
      label: 'data flow',
      nodes: [
        { node: 'pages', detail: 'Next.js' },
        { node: 'modules', detail: 'React, Redux', accent: true },
        { node: 'rest api', detail: 'backend services' },
      ],
    },
  },
  {
    slug: 'ecommerce-store',
    name: 'E-Commerce Platform',
    tagline: 'Storefront and checkout on Next.js API routes',
    context:
      'Catalogue, cart and order state drift apart as soon as they are modelled loosely, and the damage surfaces at checkout.',
    contribution: 'Designed the schemas and built the storefront and its API layer.',
    challenge: 'Inventory writes from the admin side contending with storefront reads.',
    solution:
      'Normalised product, cart and order schemas in MongoDB, REST endpoints for catalogue and checkout, session-based auth, and a separate admin service so the two workloads never contend.',
    features: [
      'Normalised product, cart and order schemas',
      'REST endpoints for catalogue and checkout',
      'Session-based authentication',
    ],
    stack: ['Next.js', 'MongoDB', 'REST API', 'React', 'Tailwind CSS'],
    repo: 'https://github.com/MOHDSAMIULLAH/Ecommerce-NextJs-store',
    demo: 'https://ecommerce-next-js-clothes-store.vercel.app/',
    demoStatus: 'paused',
    accessNote: null,
    weight: 'compact',
    shot: {
      src: '/projects/ecommerce-store.png',
      width: 1266,
      height: 620,
      alt: 'E-commerce storefront showing the product catalogue grid',
    },
    topology: null,
  },
  {
    slug: 'ecommerce-admin',
    name: 'E-Commerce Admin',
    tagline: 'Role-gated operations panel with live analytics',
    context:
      'Operators need write access to inventory and orders without that access leaking to anyone who finds the URL.',
    contribution: 'Built the panel, its access control and its reporting.',
    challenge: 'Reporting over a live order collection without slowing the storefront.',
    solution:
      'Role-based access control on every management route, and MongoDB aggregation pipelines feeding real-time sales analytics.',
    features: [
      'Role-based access control on management routes',
      'Aggregation pipelines for real-time sales analytics',
      'CRUD endpoints for inventory and order state',
    ],
    stack: ['Next.js', 'MongoDB', 'RBAC', 'Chart.js', 'REST API'],
    repo: 'https://github.com/MOHDSAMIULLAH/Ecommerce-NextJs-admin',
    demo: 'https://ecommerce-next-js-admin-ten.vercel.app/',
    demoStatus: 'paused',
    accessNote: null,
    weight: 'compact',
    shot: {
      src: '/projects/ecommerce-admin.png',
      width: 1266,
      height: 620,
      alt: 'E-commerce admin dashboard showing sales analytics charts',
    },
    topology: null,
  },
  {
    slug: 'inotebook',
    name: 'iNotebook',
    tagline: 'Cloud notes with ownership guards on every record',
    context:
      'A notes API is one missing ownership check away from serving one user the contents of another account.',
    contribution: 'Built the Express API, its auth and its data model.',
    challenge: 'Guaranteeing record ownership on every read and write path, not just the obvious ones.',
    solution:
      'Stateless JWT auth, bcrypt-hashed credentials, Mongoose-validated schemas, and ownership guards applied at the data layer rather than per route.',
    features: [
      'Stateless JWT authentication',
      'bcrypt-secured password storage',
      'Ownership guards on all CRUD paths',
    ],
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT'],
    repo: 'https://github.com/MOHDSAMIULLAH/iNotebook-MERN',
    demo: 'https://i-notebook-mern-six.vercel.app/',
    demoStatus: 'paused',
    accessNote: null,
    weight: 'compact',
    shot: {
      src: '/projects/inotebook.png',
      width: 1340,
      height: 657,
      alt: 'iNotebook application showing the saved notes list',
    },
    topology: null,
  },
  {
    slug: 'moviemate',
    name: 'MovieMate',
    tagline: 'TMDB discovery client tuned for request volume',
    context:
      'Search-as-you-type against a third-party API fires a request per keystroke and burns the rate limit in seconds.',
    contribution: 'Built the client and its request and caching behaviour.',
    challenge: 'Keeping the interface instant while cutting the number of network calls.',
    solution:
      'A 300ms search debounce collapses keystrokes into one request, watchlist state persists to localStorage, images load lazily, and UI updates are optimistic so the interface answers before the network does.',
    features: [
      '300ms search debouncing',
      'localStorage watchlist persistence',
      'Optimistic UI state updates',
    ],
    stack: ['React', 'TMDB REST API', 'Local Storage'],
    repo: 'https://github.com/MOHDSAMIULLAH/MovieMate',
    demo: 'https://moviemate-main.netlify.app/',
    demoStatus: 'live',
    accessNote: null,
    weight: 'compact',
    shot: {
      src: '/projects/moviemate.png',
      width: 1354,
      height: 635,
      alt: 'MovieMate showing a grid of film results from the TMDB API',
    },
    topology: null,
  },
]
