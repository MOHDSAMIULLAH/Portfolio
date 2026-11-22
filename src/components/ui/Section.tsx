import type { ReactNode } from 'react'
import type { SectionId } from '@/types'
import { cn } from '@/lib/utils'

/** Ground colour for a section. Forest bands break the ivory run-on. */
export type Tone = 'canvas' | 'sage' | 'forest'

const tones: Record<Tone, string> = {
  canvas: 'bg-canvas text-ink',
  sage: 'bg-canvas-alt text-ink',
  forest: 'on-forest bg-forest text-chalk',
}

const noteTone: Record<Tone, string> = {
  canvas: 'text-slate',
  sage: 'text-slate',
  forest: 'text-lime',
}

const introTone: Record<Tone, string> = {
  canvas: 'text-slate',
  sage: 'text-slate',
  forest: 'text-chalk-dim',
}

const ruleTone: Record<Tone, string> = {
  canvas: 'bg-line-strong',
  sage: 'bg-line-strong',
  forest: 'bg-lime',
}

interface SectionProps {
  readonly id: SectionId
  /** Margin annotation carrying information the heading does not restate. */
  readonly note: string
  readonly title: ReactNode
  readonly intro?: string
  readonly tone?: Tone
  readonly className?: string
  readonly children: ReactNode
}

export function Section({
  id,
  note,
  title,
  intro,
  tone = 'canvas',
  className,
  children,
}: SectionProps) {
  const headingId = `${id}-heading`

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn('py-24 sm:py-32 lg:py-40', tones[tone], className)}
    >
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[var(--rail)_minmax(0,1fr)] lg:gap-14">
          <div className="lg:pt-5">
            <p
              className={cn(
                'tnum flex items-center gap-3 text-[length:var(--text-label)] lg:flex-col lg:items-start lg:gap-3',
                noteTone[tone],
              )}
            >
              <span className={cn('h-px w-10 lg:w-8', ruleTone[tone])} aria-hidden="true" />
              <span className="lg:text-balance">{note}</span>
            </p>
          </div>

          <div className="min-w-0">
            <header className={cn('reveal', intro ? 'mb-14 sm:mb-18' : 'mb-12 sm:mb-16')}>
              <h2
                id={headingId}
                className="max-w-[18ch] text-[length:var(--text-h2)] font-semibold"
              >
                {title}
              </h2>
              {intro ? (
                <p
                  className={cn(
                    'mt-7 max-w-[46ch] text-[length:var(--text-lead)] leading-[1.5]',
                    introTone[tone],
                  )}
                >
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
