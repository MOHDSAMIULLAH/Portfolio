import { Section } from '@/components/ui/Section'
import { education } from '@/data/skills'

export function Education() {
  return (
    <Section id="education" note="jamia millia islamia" title="Education">
      <ol className="reveal border-t border-line">
        {education.map((item) => (
          <li
            key={`${item.qualification}-${item.from}`}
            className="grid gap-2 border-b border-line py-6 sm:grid-cols-12 sm:items-baseline sm:gap-6"
          >
            <div className="sm:col-span-4">
              <h3 className="text-base text-bone">{item.qualification}</h3>
              {item.field ? (
                <p className="mt-1 text-sm text-muted">{item.field}</p>
              ) : null}
            </div>

            <p className="text-sm text-muted sm:col-span-4">{item.institution}</p>

            <p className="tnum text-sm text-brass sm:col-span-2">{item.score}</p>

            <p className="tnum flex items-center gap-2.5 text-sm text-faint sm:col-span-2 sm:justify-end">
              <span>{item.from}</span>
              <span className="h-px w-3 bg-line-hi" aria-hidden="true" />
              <span className="sr-only">to</span>
              <span>{item.to}</span>
            </p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
