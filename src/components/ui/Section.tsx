import type { ReactNode } from 'react'
import type { SectionId } from '@/types'
import { cn } from '@/lib/utils'

interface SectionProps {
  readonly id: SectionId
  /**
   * Margin annotation. It carries information the heading does not, rather than
   * restating it as a label.
   */
  readonly note: string
  readonly title: string
  readonly intro?: string
  readonly className?: string
  readonly children: ReactNode
}

/**
 * The page's structural unit: a hairline boundary, a margin annotation in the
 * left rail on wide screens, and the content column.
 */
export function Section({ id, note, title, intro, className, children }: SectionProps) {
  const headingId = `${id}-heading`

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn('border-t border-line py-20 sm:py-28', className)}
    >
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[var(--rail)_minmax(0,1fr)] lg:gap-12">
          <div className="lg:pt-2">
            <p className="tnum flex items-center gap-3 text-xs text-faint lg:flex-col lg:items-start lg:gap-2">
              <span className="h-px w-8 bg-brass-dim lg:w-6" aria-hidden="true" />
              <span className="lg:text-balance">{note}</span>
            </p>
          </div>

          <div className="min-w-0">
            <header className={cn('reveal', intro ? 'mb-12 sm:mb-16' : 'mb-10 sm:mb-14')}>
              <h2 id={headingId} className="text-[length:var(--text-h2)] text-bone">
                {title}
              </h2>
              {intro ? (
                <p className="mt-5 max-w-[58ch] text-[length:var(--text-lead)] leading-[1.55] text-muted">
                  {intro}
                </p>
              ) : null}
            </header>

            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
