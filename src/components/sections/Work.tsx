import Image from 'next/image'
import { Section } from '@/components/ui/Section'
import { experience } from '@/data/experience'
import { cn } from '@/lib/utils'

export function Work() {
  return (
    <Section
      id="work"
      note="newest first"
      title="Work"
      intro="Five roles, from a first ML training programme to founding and running a product on my own."
    >
      <ol className="reveal border-t border-line">
        {experience.map((role) => (
          <li
            key={`${role.company}-${role.from}`}
            className="grid gap-6 border-b border-line py-10 sm:py-12 lg:grid-cols-12 lg:gap-10"
          >
            <div className="relative lg:col-span-3 lg:border-r lg:border-line lg:pr-8">
              <p className="tnum flex items-center gap-2.5 text-sm">
                <span className="text-bone">{role.from}</span>
                <span className="h-px w-4 bg-line-hi" aria-hidden="true" />
                <span className="sr-only">to</span>
                <span className={role.current ? 'text-brass' : 'text-muted'}>{role.to}</span>
              </p>
              <p className="tnum mt-2 text-xs text-faint">
                {role.kind}, {role.location}
              </p>

              {/* Marker sits on the vertical rule, so the spine reads as a timeline. */}
              <span
                aria-hidden="true"
                className={cn(
                  'absolute top-1.5 -right-[4.5px] hidden size-2 border lg:block',
                  role.current ? 'border-brass bg-brass' : 'border-line-hi bg-ink',
                )}
              />
            </div>

            <div className="min-w-0 lg:col-span-9">
              <div className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center overflow-hidden rounded-xs border border-line bg-surface">
                  <Image
                    src={role.logo.src}
                    alt={role.logo.alt}
                    width={role.logo.width}
                    height={role.logo.height}
                    sizes="44px"
                    loading="lazy"
                    className="size-full object-contain p-1.5"
                  />
                </span>

                <div className="min-w-0">
                  <h3 className="text-[length:var(--text-h3)] text-bone">{role.role}</h3>
                  <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
                    <span>{role.company}</span>
                    {role.product ? (
                      <span className="tnum border border-brass-dim px-2 py-0.5 text-xs text-brass">
                        {role.product}
                      </span>
                    ) : null}
                  </p>
                </div>
              </div>

              <p className="mt-5 max-w-[64ch] leading-[1.7] text-bone">{role.summary}</p>

              <ul className="mt-5 space-y-3">
                {role.contributions.map((point) => (
                  <li
                    key={point}
                    className="relative max-w-[70ch] pl-6 leading-[1.7] text-muted before:absolute before:top-[0.8em] before:left-0 before:h-px before:w-3 before:bg-brass-dim before:content-['']"
                  >
                    {point}
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                {role.stack.map((tech) => (
                  <li key={tech} className="tnum text-xs text-faint">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
