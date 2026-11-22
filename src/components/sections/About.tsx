import { Section } from '@/components/ui/Section'
import { profileStats } from '@/data/achievements'
import { site } from '@/data/site'
import { btn } from '@/components/ui/button'

const facts = [
  { label: 'role', value: 'Full Stack Developer, PaakNikah' },
  { label: 'focus', value: 'Backend systems, APIs, performance' },
  { label: 'education', value: 'M.Tech, Jamia Millia Islamia, 88%' },
  { label: 'based', value: site.location },
  { label: 'open to', value: 'Full-time roles, contract work' },
] as const

export function About() {
  return (
    <Section id="about" note="profile" title="About">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="reveal space-y-6 lg:col-span-7">
          <p className="max-w-[62ch] text-[length:var(--text-lead)] leading-[1.6] text-bone">
            I build and ship production web applications: React and Next.js on the
            front, Node.js and REST APIs behind them, with MongoDB, PostgreSQL and
            Redis underneath. The part I care most about is the layer users never
            see, where a slow query or a missing cache quietly costs everyone time.
          </p>
          <p className="max-w-[62ch] leading-[1.75] text-muted">
            That instinct came from an engineering background rather than a web one.
            I hold an M.Tech in Electronics and Communication Engineering from Jamia
            Millia Islamia, finishing at 88%, and the habit it left me with is
            measuring before claiming. When I say a Redis layer cut database load by
            70%, or that a pipeline went from 5 seconds to 3, those are numbers I
            watched move.
          </p>
          <p className="max-w-[62ch] leading-[1.75] text-muted">
            Today I run PaakNikah as its sole engineer, which means architecture,
            deployment, infrastructure and application security are all mine to get
            right. Before that I built the backend for ShelfMuse at ShelfEx,
            integrating OpenAI and Claude into a production application. That
            combination, systems work plus LLM integration, is where I want to keep
            building.
          </p>

          <div className="pt-2">
            <a href="#contact" className={btn('outline')}>
              Start a conversation
            </a>
          </div>
        </div>

        <div className="reveal lg:col-span-5">
          <dl className="border-t border-line">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-4 border-b border-line py-4"
              >
                <dt className="tnum pt-0.5 text-xs text-faint">{fact.label}</dt>
                <dd className="text-sm leading-relaxed text-bone">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <dl className="reveal mt-16 grid gap-px border-t border-line sm:mt-20 sm:grid-cols-3">
        {profileStats.map((stat) => (
          <div
            key={stat.label}
            className="border-b border-line py-7 sm:border-r sm:px-7 sm:first:pl-0 sm:last:border-r-0"
          >
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <span className="tnum block text-4xl leading-none text-brass sm:text-5xl">
                {stat.value}
              </span>
              <span className="mt-3 block text-sm text-muted">{stat.label}</span>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
