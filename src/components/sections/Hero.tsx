import type { CSSProperties } from 'react'
import { site } from '@/data/site'
import { btn } from '@/components/ui/button'
import { Magnetic } from '@/components/ui/Magnetic'
import { DownloadIcon, GitHubIcon, LinkedInIcon } from '@/components/ui/Icon'
import { HeroPortrait } from '@/components/sections/HeroPortrait'

/** Entrance delays, deliberately uneven so the sequence reads as one move. */
function enter(delay: number, y = 20): CSSProperties {
  return { '--enter-delay': `${delay}ms`, '--enter-y': `${y}px` } as CSSProperties
}

/** Spec strip beneath the hero. Facts the rest of the page then expands on. */
const specs = [
  { label: 'focus', value: 'Backend systems, APIs, cloud infrastructure' },
  { label: 'shipped', value: 'ShelfMuse, PaakNikah, HerbalCart' },
  { label: 'cloud', value: 'AWS Lambda, SQS, S3, RDS, EC2' },
  { label: 'education', value: 'M.Tech, Jamia Millia Islamia' },
] as const

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-48"
    >
      {/* Engineering graph paper. Barely there, but it stops the ivory reading flat. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.55] [background-image:linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_20%,transparent_75%)]"
      />

      <div className="shell relative">
        <p
          className="enter tnum inline-flex items-center gap-3 rounded-full border border-line bg-paper/70 py-2 pr-5 pl-3 text-[length:var(--text-label)] font-medium text-ink"
          style={enter(0, 12)}
        >
          <span className="relative grid size-2.5 place-items-center" aria-hidden="true">
            <span className="absolute inset-0 rounded-full bg-green-bright" />
            <span className="pulse-ring absolute inset-0 rounded-full bg-green-bright" />
          </span>
          {site.availability}
        </p>

        <div className="mt-10 grid items-end gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <h1
              id="hero-heading"
              className="text-[length:var(--text-hero)] leading-[0.84] font-extrabold tracking-[-0.045em] text-ink"
            >
              <span className="enter block" style={enter(120, 28)}>
                Mohd
              </span>
              {/* Indented, so the lockup has a diagonal rather than a flush edge. */}
              <span className="enter block pl-[0.08em] sm:pl-[0.14em]" style={enter(220, 28)}>
                Samiullah
              </span>
            </h1>

            <div className="enter mt-10 max-w-[40ch]" style={enter(340)}>
              <span className="block h-px w-24 bg-forest" aria-hidden="true" />
              <p className="mt-6 text-[length:var(--text-h4)] leading-tight font-semibold text-forest">
                {site.role}
              </p>
              <p className="mt-5 text-[length:var(--text-lead)] leading-[1.5] text-slate">
                {site.summary}
              </p>
            </div>

            <div
              className="enter mt-10 flex flex-wrap items-center gap-4"
              style={enter(440)}
            >
              <Magnetic strength={0.28}>
                <a href={site.resume} download={site.resumeFileName} className={btn('forest')}>
                  <DownloadIcon className="text-xl" />
                  Download CV
                </a>
              </Magnetic>
              <Magnetic strength={0.28}>
                <a href="#contact" className={btn('outline')}>
                  Let’s collaborate
                </a>
              </Magnetic>

              <div className="flex items-center gap-2 sm:ml-2">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile, opens in a new tab"
                  className="grid size-12 place-items-center rounded-full border border-line text-slate transition-colors duration-300 hover:border-forest hover:bg-forest hover:text-chalk"
                >
                  <LinkedInIcon className="text-xl" />
                </a>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile, opens in a new tab"
                  className="grid size-12 place-items-center rounded-full border border-line text-slate transition-colors duration-300 hover:border-forest hover:bg-forest hover:text-chalk"
                >
                  <GitHubIcon className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Pulled up so the arch breaks the grid line instead of sitting beside it. */}
          <div className="enter lg:col-span-5 lg:-mt-28" style={enter(300, 32)}>
            <HeroPortrait />
          </div>
        </div>

        <dl className="reveal-stagger mt-24 grid gap-px border-t border-line sm:mt-28 sm:grid-cols-2 lg:grid-cols-4">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="border-b border-line py-6 sm:border-r sm:px-7 sm:first:pl-0 sm:last:border-r-0 lg:border-b-0"
            >
              <dt className="tnum text-[length:var(--text-label)] text-green">{spec.label}</dt>
              <dd className="mt-2.5 leading-snug font-medium text-ink">{spec.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
