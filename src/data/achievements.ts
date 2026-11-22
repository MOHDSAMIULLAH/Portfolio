import type { Achievement } from '@/types'

/**
 * Figures carried over from the CV in `public/resume`. Nothing here is an
 * estimate, and nothing is listed that the CV does not state.
 */
export const achievements: readonly Achievement[] = [
  {
    value: 70,
    unit: '%',
    label: 'Lower database load',
    detail:
      'A Redis caching layer over high-traffic routes absorbed repeat reads, taking sustained query pressure off the primary database.',
    where: 'ShelfEx',
  },
  {
    value: 80,
    unit: '%',
    label: 'Manual effort removed',
    detail:
      'An automated Puppeteer workflow replaced a manual web data collection process end to end.',
    where: 'Wasserstoff',
  },
  {
    value: 40,
    unit: '%',
    label: 'Faster response time',
    detail:
      'Tracing and clearing pipeline bottlenecks brought response time down from 5 seconds to 3.',
    where: 'ShelfEx',
  },
  {
    value: 40,
    unit: '%',
    label: 'Higher delivery efficiency',
    detail:
      'Reusable frontend modules and streamlined development workflows shortened the path from ticket to shipped feature.',
    where: 'Plaxonic Technologies',
  },
]

/** Compact credibility figures shown alongside the About narrative. */
export const profileStats = [
  { value: '2+', label: 'Years shipping production software' },
  { value: '15+', label: 'Projects built and deployed' },
  { value: '15+', label: 'Technologies in regular use' },
] as const
