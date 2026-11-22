import { Section } from '@/components/ui/Section'
import { CountUp } from '@/components/ui/CountUp'
import { achievements } from '@/data/achievements'

export function Impact() {
  return (
    <Section
      id="impact"
      note="measured, not estimated"
      title="Impact"
      intro="Four results from production systems, each one a number I watched move."
    >
      <ol className="reveal border-t border-line">
        {achievements.map((item) => (
          <li
            key={`${item.label}-${item.where}`}
            className="group grid gap-x-10 gap-y-5 border-b border-line py-9 transition-colors duration-300 ease-[var(--ease-out)] hover:border-b-brass-dim sm:py-11 lg:grid-cols-12 lg:items-baseline"
          >
            <div className="lg:col-span-3">
              <CountUp value={item.value} unit={item.unit} />
            </div>

            <div className="lg:col-span-4">
              <h3 className="text-[length:var(--text-h3)] text-bone">{item.label}</h3>
              <p className="tnum mt-2 text-xs text-faint transition-colors duration-300 group-hover:text-brass">
                {item.where}
              </p>
            </div>

            <p className="max-w-[52ch] leading-[1.7] text-muted lg:col-span-5">
              {item.detail}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
