import { cn } from '@/lib/utils'

export type ButtonVariant = 'forest' | 'lime' | 'outline' | 'chalk'

const base = cn(
  'group/btn relative inline-flex items-center justify-center gap-2.5 rounded-full',
  'px-7 py-4 text-base font-semibold tracking-[-0.01em] whitespace-nowrap',
  // Listed explicitly rather than `transition-all`, and only compositor-safe properties.
  'transition-[background-color,border-color,color,transform,box-shadow] duration-300 ease-[var(--ease-out)]',
  'active:scale-[0.97]',
)

const variants: Record<ButtonVariant, string> = {
  forest: 'bg-forest text-chalk hover:bg-forest-deep hover:shadow-[0_12px_28px_-14px_#193a30]',
  lime: 'bg-lime text-ink hover:brightness-105 hover:shadow-[0_12px_28px_-14px_#193a30]',
  outline: 'border border-line-strong bg-transparent text-ink hover:border-forest hover:bg-paper',
  chalk: 'border border-line-dark bg-transparent text-chalk hover:border-lime hover:text-lime',
}

/** Shared button surface, applied to `<a>` or `<button>` so the element stays semantic. */
export function btn(variant: ButtonVariant = 'outline', extra?: string): string {
  return cn(base, variants[variant], extra)
}
