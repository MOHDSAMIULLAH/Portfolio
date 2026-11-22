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
    <Section
      id="about"
      note="profile"
      title="The interesting part is the layer nobody sees"
    >
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <p className="reveal max-w-[22ch] text-[length:var(--text-h3)] leading-[1.1] font-semibold tracking-[-0.03em] text-ink">
            A slow query costs everyone time, quietly.
          </p>

          <div className="reveal mt-10 space-y-7 text-slate">
            <p className="max-w-[58ch] leading-[1.7]">
              I build and ship production web applications. React and Next.js on
              the front, Node.js and REST APIs behind them, with MongoDB,
              PostgreSQL and Redis underneath. Most of my attention goes to the
              part users never look at directly but always feel.
            </p>
            <p className="max-w-[58ch] leading-[1.7]">
              That instinct came from an engineering background rather than a web
              one. I hold an M.Tech in Electronics and Communication Engineering
              from Jamia Millia Islamia, finishing at 88%, and the habit it left
              me with is measuring before claiming. When I say a Redis layer cut
              database load by 70%, or that a pipeline went from five seconds to
              three, those are numbers I watched move.
            </p>
            <p className="max-w-[58ch] leading-[1.7]">
              Today I run PaakNikah as its sole engineer, which makes
              architecture, deployment, infrastructure and application security
              all mine to get right. Before that I built the backend for
              ShelfMuse at ShelfEx, integrating OpenAI and Claude into a
              production application. Systems work plus LLM integration is where
              I want to keep building.
            </p>
          </div>

          <div className="reveal mt-10">
            <a href="#contact" className={btn('outline')}>
                Start a conversation
              </a>
          </div>
        </div>

        <div className="reveal lg:col-span-5">
          <dl className="rounded-lg border border-line bg-paper p-8 sm:p-10">
            {facts.map((fact, i) => (
              <div
                key={fact.label}
                className={i === 0 ? '' : 'mt-6 border-t border-line pt-6'}
              >
                <dt className="tnum text-[length:var(--text-label)] text-green">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-[length:var(--text-h4)] leading-snug font-semibold tracking-[-0.02em] text-ink">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <dl className="reveal-stagger mt-20 grid gap-10 border-t border-line pt-12 sm:mt-24 sm:grid-cols-3 sm:gap-8">
        {profileStats.map((stat) => (
          <div key={stat.label}>
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <span className="tnum block text-[length:var(--text-metric)] leading-[0.82] font-medium tracking-[-0.04em] text-forest">
                {stat.value}
              </span>
              <span className="mt-5 block max-w-[20ch] leading-snug text-slate">
                {stat.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
