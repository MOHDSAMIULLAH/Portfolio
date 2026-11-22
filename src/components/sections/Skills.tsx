import { Section } from '@/components/ui/Section'
import { skillGroups } from '@/data/skills'
import { cn } from '@/lib/utils'

/** Emphasis is encoded by the marker's fill as well as its colour. */
const marker: Record<string, string> = {
  core: 'bg-green-bright border-green-bright',
  standard: 'bg-lime border-green-bright',
  supporting: 'bg-transparent border-line-strong',
}

export function Skills() {
  return (
    <Section
      id="stack"
      note="filled marker means core"
      title="What I build with"
      intro="Backend first: scalable APIs, cloud infrastructure and the data layer underneath, with enough frontend to carry a product all the way out."
      tone="sage"
    >
      <div className="reveal-stagger grid gap-6 lg:grid-cols-2">
        {skillGroups.map((group) => (
          <section
            key={group.name}
            aria-label={group.name}
            className="group rounded-lg border border-line bg-paper p-8 transition-[border-color,transform,box-shadow] duration-400 ease-[var(--ease-out)] hover:-translate-y-1 hover:border-green-bright hover:shadow-[0_22px_44px_-30px_#193a30] sm:p-10"
          >
            <h3 className="flex items-center gap-3.5 text-[length:var(--text-h4)] font-semibold tracking-[-0.02em] text-ink">
              <span
                className={cn(
                  'size-3 shrink-0 rotate-45 border transition-transform duration-400 ease-[var(--ease-out)] group-hover:rotate-[135deg]',
                  marker[group.emphasis],
                )}
                aria-hidden="true"
              />
              {group.name}
            </h3>
            <p className="mt-2.5 pl-[1.625rem] text-[length:var(--text-label)] text-slate">
              {group.note}
            </p>

            <ul className="mt-7 flex flex-wrap content-start items-start gap-2.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="tnum rounded-full border border-line bg-canvas px-3.5 py-2 text-[0.8125rem] font-medium text-ink transition-[background-color,border-color,transform] duration-250 ease-[var(--ease-out)] hover:-translate-y-0.5 hover:border-green-bright hover:bg-lime"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Section>
  )
}
