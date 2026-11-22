import Image from 'next/image'
import type { CSSProperties } from 'react'
import { site } from '@/data/site'

/**
 * Services pinned around the frame, positioned as percentages of the portrait
 * box so the labels and the connector lines share one coordinate system.
 * `side` decides which way the connector runs.
 */
const pins = [
  { label: 'Node.js', x: -12, y: 16, side: 'left' as const, delay: 0 },
  { label: 'Redis', x: -18, y: 62, side: 'left' as const, delay: 0.4 },
  { label: 'PostgreSQL', x: 86, y: 34, side: 'right' as const, delay: 0.8 },
  { label: 'AWS Lambda', x: 80, y: 82, side: 'right' as const, delay: 1.2 },
]

const ARCH = 'rounded-t-full rounded-b-[2rem]'

export function HeroPortrait() {
  return (
    <div className="relative mx-auto w-full max-w-[21rem] sm:max-w-[25rem] lg:max-w-none">
      {/* Offset solid block: gives the arch somewhere to sit instead of floating. */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 translate-x-4 translate-y-5 bg-forest ${ARCH}`}
      />

      {/* Outline offset the other way, so the frame reads as three layers. */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 -translate-x-3 -translate-y-3 border border-green-bright/50 ${ARCH}`}
      />

      {/* Connector lines. Dashes crawl outward, like packets leaving the service. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 hidden size-full overflow-visible sm:block"
      >
        {pins.map((pin) => {
          const fromX = pin.side === 'left' ? 4 : 96
          const toX = pin.side === 'left' ? pin.x + 10 : pin.x
          return (
            <line
              key={pin.label}
              x1={fromX}
              y1={pin.y}
              x2={toX}
              y2={pin.y}
              stroke="var(--color-green-bright)"
              strokeWidth="0.4"
              strokeDasharray="2 2"
              vectorEffect="non-scaling-stroke"
              className="flow-line"
              style={{ animationDelay: `${pin.delay}s` }}
            />
          )
        })}
      </svg>

      {/* The portrait itself. */}
      <div className={`relative overflow-hidden bg-canvas-alt ${ARCH}`}>
        <div className="enter-wipe aspect-4/5" style={{ '--enter-delay': '560ms' } as CSSProperties}>
          <Image
            src="/images/mohd-samiullah.png"
            alt={`${site.name}, ${site.role}`}
            fill
            priority
            sizes="(min-width: 1024px) 34vw, (min-width: 640px) 25rem, 21rem"
            // Oversized and drifting, so the parallax never exposes an edge.
            className="drift h-[108%] object-cover object-top"
          />
        </div>
      </div>

      {pins.map((pin) => (
        <span
          key={pin.label}
          className="tnum absolute z-10 hidden rounded-full border border-line bg-paper/90 px-3 py-1.5 text-[0.75rem] font-medium whitespace-nowrap text-ink shadow-[0_6px_18px_-12px_#193a30] backdrop-blur-sm sm:inline-flex sm:items-center sm:gap-2"
          style={{
            left: `${pin.x}%`,
            top: `${pin.y}%`,
            transform: 'translate(-50%, -50%)',
            animationDelay: `${900 + pin.delay * 160}ms`,
          }}
        >
          <span className="size-1.5 rounded-full bg-green-bright" aria-hidden="true" />
          {pin.label}
        </span>
      ))}
    </div>
  )
}
