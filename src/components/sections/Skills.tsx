import { Section } from '@/components/ui/Section'
import { skillGroups } from '@/data/skills'
import { cn } from '@/lib/utils'

/** Emphasis is encoded by the marker's shape as well as its colour. */
const marker: Record<string, string> = {
  core: 'bg-brass border-brass',
  standard: 'bg-brass-dim border-brass-dim',
  supporting: 'bg-transparent border-line-hi',
}

export function Skills() {
  return (
    <Section
      id="stack"
      note="filled marker means core"
      title="Stack"
      intro="Backend first: scalable APIs, cloud infrastructure and the data layer underneath, with enough frontend to carry a product all the way out."
    >
      <div className="reveal group/stack border-t border-line">
        {skillGroups.map((group) => (
          <div
            key={group.name}
            className="grid gap-5 border-b border-line py-8 transition-opacity duration-300 ease-[var(--ease-out)] group-hover/stack:opacity-55 hover:opacity-100! lg:grid-cols-12 lg:gap-10"
          >
            <div className="lg:col-span-4">
              <h3 className="flex items-center gap-3 text-[length:var(--text-h3)] text-bone">
                <span
                  className={cn('size-2 shrink-0 border', marker[group.emphasis])}
                  aria-hidden="true"
                />
                {group.name}
              </h3>
              <p className="mt-2 pl-5 text-sm text-faint">{group.note}</p>
            </div>

            {/* content-start keeps the wrapped lines from stretching, which would
                otherwise pull each item's underline away from its text. */}
            <ul className="flex flex-wrap content-start items-start gap-x-6 gap-y-3 lg:col-span-8">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="tnum border-b border-line pb-1 text-sm text-muted transition-colors duration-200 hover:border-brass hover:text-bone"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
