'use client'

import type { PointerEvent, ReactNode } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react'
import { cn } from '@/lib/utils'

interface MagneticProps {
  readonly children: ReactNode
  /** Fraction of the cursor's offset from centre that the element follows. */
  readonly strength?: number
  readonly className?: string
}

/**
 * Pulls an element gently toward the cursor.
 *
 * The offset runs through a spring rather than being bound straight to the
 * pointer, which is what gives it weight instead of feeling stuck to the mouse.
 * Mouse pointers only: a touch "hover" would leave the element displaced with
 * no way to reset it.
 */
export function Magnetic({ children, strength = 0.3, className }: MagneticProps) {
  const reduceMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 190, damping: 17, mass: 0.6 })
  const springY = useSpring(y, { stiffness: 190, damping: 17, mass: 0.6 })

  function handleMove(event: PointerEvent<HTMLSpanElement>) {
    if (reduceMotion || event.pointerType !== 'mouse') return
    const box = event.currentTarget.getBoundingClientRect()
    x.set((event.clientX - (box.left + box.width / 2)) * strength)
    y.set((event.clientY - (box.top + box.height / 2)) * strength)
  }

  function reset() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.span
      onPointerMove={handleMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
      style={{ x: springX, y: springY }}
      className={cn('inline-flex', className)}
    >
      {children}
    </motion.span>
  )
}
