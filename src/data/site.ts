import type { ContactChannel, NavLink } from '@/types'

export const site = {
  name: 'Mohd Samiullah',
  shortName: 'Samiullah',
  role: 'Backend-Focused Fullstack Engineer',
  /** Canonical origin carried over from the previous deployment. */
  url: 'https://portfolio-samiullah.netlify.app',
  locale: 'en_IN',
  summary:
    'I build scalable backend systems, high-performance APIs, and AI-powered applications that solve real-world problems.',
  description:
    'Backend-focused fullstack engineer with 2+ years building distributed APIs, Redis caching layers, and AI-powered pipelines on AWS with Node.js, TypeScript, and PostgreSQL.',
  resume: '/resume/Mohd_Samiullah_Resume.pdf',
  resumeFileName: 'Mohd_Samiullah_Resume.pdf',
  email: 'samiullah0813@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mohd-samiullah1/',
  github: 'https://github.com/MOHDSAMIULLAH',
  whatsapp: 'https://wa.me/917428098866',
  phoneDisplay: '+91 74280 98866',
  location: 'Okhla, New Delhi',
  availability: 'Open to backend and fullstack roles',
} as const

export const navLinks: readonly NavLink[] = [
  { label: 'About', id: 'about' },
  { label: 'Impact', id: 'impact' },
  { label: 'Stack', id: 'stack' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'AI', id: 'ai' },
  { label: 'Contact', id: 'contact' },
]

/** Footer carries the sections the header leaves out. */
export const footerLinks: readonly NavLink[] = [
  ...navLinks.slice(0, 5),
  { label: 'Education', id: 'education' },
  ...navLinks.slice(5),
]

export const contactChannels: readonly ContactChannel[] = [
  {
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'mohd-samiullah1',
    href: site.linkedin,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'MOHDSAMIULLAH',
    href: site.github,
    external: true,
  },
  {
    label: 'WhatsApp',
    value: site.phoneDisplay,
    href: site.whatsapp,
    external: true,
  },
]
