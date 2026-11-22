import { Section } from '@/components/ui/Section'
import { education } from '@/data/skills'
import { cn } from '@/lib/utils'

export function Education() {
  return (
    <Section
      id="education"
      note="jamia millia islamia"
      title="Where the engineering habit came from"
      tone="sage"
    >
      <ol className="reveal-stagger">
        {education.map((item, i) => (
          <li
            key={`${item.qualification}-${item.from}`}
            className={cn(
              'grid items-baseline gap-3 border-b border-line py-7 sm:grid-cols-12 sm:gap-8',
              i === 0 && 'border-t',
            )}
          >
            <div className="sm:col-span-4">
              <h3
                className={cn(
                  'font-semibold tracking-[-0.02em] text-ink',
                  i === 0
                    ? 'text-[length:var(--text-h3)] leading-none'
                    : 'text-[length:var(--text-h4)]',
                )}
              >
                {item.qualification}
              </h3>
              {item.field ? <p className="mt-2 text-slate">{item.field}</p> : null}
            </div>

            <p className="text-slate sm:col-span-4">{item.institution}</p>

            <p className="tnum text-[length:var(--text-h4)] font-medium text-green sm:col-span-2">
              {item.score}
            </p>

            <p className="tnum flex items-center gap-2.5 text-slate sm:col-span-2 sm:justify-end">
              <span>{item.from}</span>
              <span className="h-px w-3.5 bg-line-strong" aria-hidden="true" />
              <span className="sr-only">to</span>
              <span>{item.to}</span>
            </p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
