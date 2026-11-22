import { Section } from '@/components/ui/Section'
import { CountUp } from '@/components/ui/CountUp'
import { achievements } from '@/data/achievements'

export function Impact() {
  return (
    <Section
      id="impact"
      note="measured, not estimated"
      title="Four numbers I watched move"
      intro="Results from production systems. Nothing here is an estimate, and nothing is listed that my CV does not state."
      tone="forest"
    >
      <ol className="reveal-stagger grid gap-px border-t border-line-dark sm:grid-cols-2">
        {achievements.map((item) => (
          <li
            key={`${item.label}-${item.where}`}
            className="group border-b border-line-dark py-10 sm:px-10 sm:py-12 sm:nth-[odd]:border-r sm:nth-[odd]:pl-0 sm:nth-[even]:pr-0"
          >
            {/* Wraps rather than clipping: the company name is long on 320px. */}
            <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-4">
              <CountUp
                value={item.value}
                unit={item.unit}
                className="text-lime transition-transform duration-500 ease-[var(--ease-out)] group-hover:-translate-y-1"
              />
              <span className="tnum max-w-full rounded-full border border-line-dark px-3 py-1 text-[length:var(--text-label)] text-chalk-dim transition-colors duration-300 group-hover:border-lime group-hover:text-lime sm:mt-2">
                {item.where}
              </span>
            </div>

            <h3 className="mt-8 text-[length:var(--text-h4)] font-semibold text-chalk">
              {item.label}
            </h3>
            <p className="mt-3 max-w-[44ch] leading-[1.65] text-chalk-dim">{item.detail}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
