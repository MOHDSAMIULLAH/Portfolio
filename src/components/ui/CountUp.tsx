'use client'

import { useEffect, useRef } from 'react'
import { animate, useInView, useReducedMotion } from 'motion/react'

interface CountUpProps {
  readonly value: number
  readonly unit: string
}

/**
 * Counts a metric up once it scrolls into view.
 *
 * The final value is what renders on the server, so the figure is correct with
 * JavaScript disabled and for assistive technology. The animation writes to the
 * DOM node directly rather than through state, so it costs no re-renders.
 */
export function CountUp({ value, unit }: CountUpProps) {
  const numberRef = useRef<HTMLSpanElement>(null)
  const inView = useInView(numberRef, { once: true, amount: 0.8 })
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const node = numberRef.current
    if (!node || !inView || reduceMotion) return

    const controls = animate(0, value, {
      duration: 1.1,
      ease: [0.23, 1, 0.32, 1],
      onUpdate: (current) => {
        node.textContent = String(Math.round(current))
      },
    })

    return () => controls.stop()
  }, [inView, reduceMotion, value])

  return (
    <p className="tnum flex items-baseline text-[length:var(--text-metric)] leading-none tracking-tight text-bone">
      <span ref={numberRef}>{value}</span>
      <span className="text-[0.45em] text-brass" aria-hidden="true">
        {unit}
      </span>
      <span className="sr-only">{unit}</span>
    </p>
  )
}
