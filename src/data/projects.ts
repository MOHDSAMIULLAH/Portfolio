import type { Project } from '@/types'

/**
 * Ordered by engineering complexity and business impact: the first entry is
 * rendered as the full-width feature, the next two at half width, the rest as
 * compact rows.
 */
export const projects: readonly Project[] = [
  {
    slug: 'paaknikah',
    name: 'PaakNikah',
    tagline: 'Matrimonial platform for the Muslim community in India',
    problem:
      'Matchmaking sites ask people to hand over photos, contact details and family information before any trust exists. Privacy cannot be an afterthought when the data is this personal.',
    approach:
      'A TypeScript and PostgreSQL backend where visibility is a first-class concept. Photos and contact details sit behind per-user grants, profiles are verified before they surface in search, and every match filter runs server-side so no private field ever reaches an unauthorised client.',
    features: [
      'Match search filtered by education, profession, location and community',
      'Private photo and contact sharing with per-request access grants',
      'Verified profiles, reporting and blocking',
      'Secure in-platform messaging between matched users',
    ],
    stack: ['TypeScript', 'PostgreSQL', 'Node.js', 'Docker'],
    // Closed source: it is a live commercial product, not a public repository.
    repo: null,
    demo: 'https://www.paaknikah.com/',
    weight: 'feature',
    shot: {
      src: '/projects/paaknikah.png',
      width: 1825,
      height: 907,
      alt: 'PaakNikah home page showing the profile search and match browsing interface',
    },
  },
  {
    slug: 'ecommerce-store',
    name: 'E-Commerce Platform',
    tagline: 'Storefront and checkout on Next.js API routes',
    problem:
      'Catalogue, cart and order state drift apart as soon as they are modelled loosely, and the damage shows up at checkout.',
    approach:
      'Normalised product, cart and order schemas in MongoDB with RESTful endpoints for catalogue management and the checkout flow, session-based auth, and an independent admin service so inventory writes never contend with storefront reads.',
    features: [
      'Normalised product, cart and order schemas',
      'REST endpoints for catalogue and checkout',
      'Session-based authentication',
      'Separate admin service for inventory control',
    ],
    stack: ['Next.js', 'MongoDB', 'REST API', 'Tailwind CSS', 'React'],
    repo: 'https://github.com/MOHDSAMIULLAH/Ecommerce-NextJs-store',
    demo: 'https://ecommerce-next-js-clothes-store.vercel.app/',
    weight: 'standard',
    shot: {
      src: '/projects/ecommerce-store.png',
      width: 1266,
      height: 620,
      alt: 'E-commerce storefront showing the product catalogue grid',
    },
  },
  {
    slug: 'food-delivery',
    name: 'Food Delivery App',
    tagline: 'Restaurant listings through to order confirmation',
    problem:
      'A delivery order passes through menus, a cart, payment and confirmation. Every extra step in that chain is a dropped order, and every manual admin task is a slower kitchen.',
    approach:
      'A full-stack Next.js build with NextAuth for authentication and Stripe for payments, plus an admin panel for category, product and user management that cut admin workflow time by 50%.',
    features: [
      'NextAuth authentication and Stripe payments',
      'Admin panel for category, product and user management',
      'Restaurant listings and dynamic menu management',
      'Mobile-first checkout flow',
    ],
    stack: ['Next.js', 'Stripe', 'NextAuth', 'Context API', 'Cloudinary', 'Tailwind CSS'],
    repo: 'https://github.com/MOHDSAMIULLAH/food-ordering-App-next',
    demo: 'https://food-ordering-app-six-xi.vercel.app/',
    weight: 'standard',
    shot: {
      src: '/projects/food-delivery.png',
      width: 1510,
      height: 772,
      alt: 'Food delivery application showing restaurant listings and menu items',
    },
  },
  {
    slug: 'ecommerce-admin',
    name: 'E-Commerce Admin',
    tagline: 'Role-gated operations panel with live sales analytics',
    problem:
      'Store operators need write access to inventory and orders without that access leaking to anyone who finds the URL.',
    approach:
      'Role-based access control on every management route, MongoDB aggregation pipelines feeding real-time sales analytics, and RESTful CRUD endpoints for inventory and order state.',
    features: [
      'Role-based access control on management routes',
      'Aggregation pipelines for real-time sales analytics',
      'CRUD endpoints for inventory and order state',
    ],
    stack: ['Next.js', 'MongoDB', 'RBAC', 'Chart.js', 'REST API'],
    repo: 'https://github.com/MOHDSAMIULLAH/Ecommerce-NextJs-admin',
    demo: 'https://ecommerce-next-js-admin-ten.vercel.app/',
    weight: 'compact',
    shot: {
      src: '/projects/ecommerce-admin.png',
      width: 1266,
      height: 620,
      alt: 'E-commerce admin dashboard showing sales analytics charts',
    },
  },
  {
    slug: 'inotebook',
    name: 'iNotebook',
    tagline: 'Cloud notes with ownership guards on every record',
    problem:
      'A notes API is one missing ownership check away from serving one user the contents of another user’s account.',
    approach:
      'An Express REST API with stateless JWT auth, bcrypt-hashed credentials, Mongoose-validated schemas, and ownership guards on every read and write path.',
    features: [
      'Stateless JWT authentication',
      'bcrypt-secured password storage',
      'Mongoose schema validation',
      'Ownership guards on all CRUD paths',
    ],
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT'],
    repo: 'https://github.com/MOHDSAMIULLAH/iNotebook-MERN',
    demo: 'https://i-notebook-mern-six.vercel.app/',
    weight: 'compact',
    shot: {
      src: '/projects/inotebook.png',
      width: 1340,
      height: 657,
      alt: 'iNotebook application showing the saved notes list',
    },
  },
  {
    slug: 'moviemate',
    name: 'MovieMate',
    tagline: 'TMDB discovery client tuned for request volume',
    problem:
      'Search-as-you-type against a third-party API fires a request per keystroke and burns the rate limit in seconds.',
    approach:
      'A 300ms search debounce to collapse keystrokes into one request, localStorage watchlist persistence, lazy image loading for Core Web Vitals, and optimistic UI updates so the interface answers before the network does.',
    features: [
      '300ms search debouncing',
      'localStorage watchlist persistence',
      'Lazy image loading',
      'Optimistic UI state updates',
    ],
    stack: ['React', 'TMDB REST API', 'Local Storage'],
    repo: 'https://github.com/MOHDSAMIULLAH/MovieMate',
    demo: 'https://moviemate-main.netlify.app/',
    weight: 'compact',
    shot: {
      src: '/projects/moviemate.png',
      width: 1354,
      height: 635,
      alt: 'MovieMate showing a grid of film results from the TMDB API',
    },
  },
]
