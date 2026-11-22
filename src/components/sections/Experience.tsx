import Image from 'next/image'
import { Section } from '@/components/ui/Section'
import { experience } from '@/data/experience'
import { cn } from '@/lib/utils'

export function Experience() {
  return (
    <Section
      id="experience"
      note="newest first"
      title="Five roles, one direction"
      intro="From a first machine-learning training programme to founding and running a product on my own."
    >
      <div className="relative">
        {/* Spine sits behind the entries and fills as the list scrolls past. */}
        <div
          aria-hidden="true"
          className="absolute top-0 bottom-0 left-[0.6875rem] w-px bg-line lg:left-[11.9375rem]"
        >
          <div className="timeline-progress h-full w-full bg-green-bright" />
        </div>

        <ol className="reveal-stagger space-y-6">
          {experience.map((role) => (
            <li
              key={`${role.company}-${role.from}`}
              className="relative grid gap-6 pl-10 lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-12 lg:pl-0"
            >
              {/* Node on the spine. The current role is filled. */}
              <span
                aria-hidden="true"
                className={cn(
                  'absolute top-9 left-[0.3125rem] size-3.5 rounded-full border-2 lg:left-[11.5625rem]',
                  role.current
                    ? 'border-green-bright bg-green-bright'
                    : 'border-line-strong bg-canvas',
                )}
              />

              <div className="lg:pt-9 lg:text-right">
                <p className="tnum flex flex-wrap items-center gap-x-2.5 gap-y-1 text-base font-medium lg:justify-end">
                  <span className="whitespace-nowrap text-ink">{role.from}</span>
                  <span className="h-px w-3.5 bg-line-strong" aria-hidden="true" />
                  <span className="sr-only">to</span>
                  <span
                    className={`whitespace-nowrap ${role.current ? 'text-green' : 'text-slate'}`}
                  >
                    {role.to}
                  </span>
                </p>
                <p className="tnum mt-2 text-[length:var(--text-label)] text-slate">
                  {role.kind}, {role.location}
                </p>
              </div>

              <article className="min-w-0 rounded-lg border border-line bg-paper p-7 transition-[border-color,box-shadow] duration-400 ease-[var(--ease-out)] hover:border-green-bright hover:shadow-[0_22px_44px_-34px_#193a30] sm:p-9">
                <div className="flex items-start gap-4">
                  <span className="grid size-12 shrink-0 place-items-center overflow-hidden rounded-full border border-line bg-canvas">
                    <Image
                      src={role.logo.src}
                      alt={role.logo.alt}
                      width={role.logo.width}
                      height={role.logo.height}
                      sizes="48px"
                      loading="lazy"
                      className="size-full object-contain p-1.5"
                    />
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-[length:var(--text-h4)] font-semibold tracking-[-0.02em] text-ink">
                      {role.role}
                    </h3>
                    <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-2 text-slate">
                      <span className="font-medium">{role.company}</span>
                      {role.product ? (
                        <span className="tnum rounded-full bg-lime px-2.5 py-1 text-[0.75rem] font-semibold text-ink">
                          {role.product}
                        </span>
                      ) : null}
                    </p>
                  </div>
                </div>

                <p className="mt-6 max-w-[62ch] leading-[1.65] font-medium text-ink">
                  {role.summary}
                </p>

                <ul className="mt-5 space-y-3.5">
                  {role.contributions.map((point) => (
                    <li
                      key={point}
                      className="relative max-w-[70ch] pl-7 leading-[1.65] text-slate before:absolute before:top-[0.62em] before:left-0 before:h-1.5 before:w-3.5 before:rounded-full before:bg-line-strong before:content-['']"
                    >
                      {point}
                    </li>
                  ))}
                </ul>

                <ul className="mt-7 flex flex-wrap gap-2 border-t border-line pt-6">
                  {role.stack.map((tech) => (
                    <li
                      key={tech}
                      className="tnum rounded-full border border-line px-3 py-1.5 text-[0.75rem] text-slate"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
