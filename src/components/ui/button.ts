import { cn } from '@/lib/utils'

export type ButtonVariant = 'solid' | 'outline' | 'quiet'

const base = cn(
  'inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3',
  'text-sm font-medium tracking-tight whitespace-nowrap',
  // Listed explicitly rather than `transition-all`, and limited to compositor-safe properties.
  'transition-[color,background-color,border-color,transform] duration-200 ease-[var(--ease-out)]',
  'active:scale-[0.98]',
)

const variants: Record<ButtonVariant, string> = {
  solid: 'bg-brass text-ink hover:bg-brass-hi',
  outline: 'border border-line-hi text-bone hover:border-brass hover:text-brass',
  quiet: 'text-muted hover:text-bone',
}

/** Shared button surface, applied directly to `<a>` or `<button>` so the element stays semantic. */
export function btn(variant: ButtonVariant = 'outline', extra?: string): string {
  return cn(base, variants[variant], extra)
}
