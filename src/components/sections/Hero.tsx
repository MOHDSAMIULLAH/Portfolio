import Image from 'next/image'
import type { CSSProperties } from 'react'
import { site } from '@/data/site'
import { btn } from '@/components/ui/button'
import { DownloadIcon, GitHubIcon, LinkedInIcon } from '@/components/ui/Icon'

/** Hero entrance delays, deliberately uneven so the sequence reads as one move. */
function lift(delay: number): CSSProperties {
  return { '--lift-delay': `${delay}ms` } as CSSProperties
}

/** Spec-sheet strip under the hero. Facts the rest of the page then expands on. */
const specs = [
  { label: 'focus', value: 'Backend systems, APIs, cloud infrastructure' },
  { label: 'shipped', value: 'ShelfMuse, PaakNikah, HerbalCart' },
  { label: 'cloud', value: 'AWS Lambda, SQS, S3, RDS, EC2' },
  { label: 'education', value: 'M.Tech, Jamia Millia Islamia' },
] as const

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="pt-28 sm:pt-36 lg:pt-44">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <p
              className="lift tnum flex items-center gap-2.5 text-xs text-muted"
              style={lift(0)}
            >
              <span className="relative grid size-2 place-items-center" aria-hidden="true">
                <span className="absolute inset-0 rounded-full bg-brass" />
                <span className="absolute inset-0 rounded-full bg-brass motion-safe:animate-ping" />
              </span>
              {site.availability}
            </p>

            <h1
              id="hero-heading"
              className="lift mt-6 text-[length:var(--text-display)] leading-[0.86] tracking-[-0.045em] text-bone"
              style={lift(90)}
            >
              Mohd
              <br />
              Samiullah
            </h1>

            <div className="lift mt-8 max-w-[44ch]" style={lift(190)}>
              <hr className="rule" />
              <p className="mt-5 text-[length:var(--text-h3)] leading-tight tracking-tight text-bone">
                {site.role}
              </p>
              <p className="mt-4 text-[length:var(--text-lead)] leading-[1.55] text-muted">
                {site.summary}
              </p>
            </div>

            <div className="lift mt-9 flex flex-wrap items-center gap-3" style={lift(280)}>
              <a href={site.resume} download={site.resumeFileName} className={btn('solid')}>
                <DownloadIcon className="text-base" />
                Download CV
              </a>
              <a href="#contact" className={btn('outline')}>
                Let’s build together
              </a>

              <div className="flex items-center gap-1 sm:ml-2">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile, opens in a new tab"
                  className="grid size-11 place-items-center rounded-sm text-muted transition-colors duration-200 hover:text-brass"
                >
                  <LinkedInIcon className="text-xl" />
                </a>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile, opens in a new tab"
                  className="grid size-11 place-items-center rounded-sm text-muted transition-colors duration-200 hover:text-brass"
                >
                  <GitHubIcon className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          <div className="lift lg:col-span-5" style={lift(180)}>
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="relative aspect-4/5 overflow-hidden rounded-md border border-line bg-surface">
                <Image
                  src="/images/mohd-samiullah.png"
                  alt={`${site.name}, ${site.role}`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 34vw, (min-width: 640px) 24rem, 86vw"
                  className="object-cover object-top grayscale-[0.65] transition-[filter] duration-700 ease-[var(--ease-out)] hover:grayscale-0"
                />
              </div>

              <dl className="mt-4 border border-line bg-ink-raised p-5 sm:absolute sm:-bottom-7 sm:-left-7 sm:mt-0 sm:w-64 lg:-left-10">
                <div>
                  <dt className="tnum text-xs text-faint">now</dt>
                  <dd className="mt-1 text-sm text-bone">Full Stack Developer, PaakNikah</dd>
                </div>
                <div className="mt-4 border-t border-line pt-4">
                  <dt className="tnum text-xs text-faint">based</dt>
                  <dd className="mt-1 text-sm text-bone">{site.location}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div className="lift mt-20 sm:mt-28 lg:mt-24" style={lift(400)}>
        <div className="shell">
          <hr className="rule" />
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="border-b border-line py-5 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0 lg:border-b-0"
              >
                <dt className="tnum text-xs text-faint">{spec.label}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-bone">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
