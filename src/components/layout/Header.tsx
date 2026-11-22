'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { navLinks, site } from '@/data/site'
import { btn } from '@/components/ui/button'
import { CloseIcon, DownloadIcon, MenuIcon } from '@/components/ui/Icon'
import { cn } from '@/lib/utils'
import type { SectionId } from '@/types'

const PANEL_ID = 'site-nav-panel'

/** Section ids tracked for the active indicator, in document order. */
const TRACKED: readonly SectionId[] = ['top', ...navLinks.map((link) => link.id)]

/**
 * Marks whichever section currently crosses a thin band at the middle of the
 * viewport, so the indicator changes once per section instead of on every pixel.
 */
function useActiveSection(): SectionId | null {
  const [active, setActive] = useState<SectionId | null>(null)
  const visible = useRef(new Map<string, boolean>())

  useEffect(() => {
    const elements = TRACKED.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    )
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visible.current.set(entry.target.id, entry.isIntersecting)
        }
        const next = TRACKED.find((id) => visible.current.get(id)) ?? null
        setActive((prev) => (prev === next ? prev : next))
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    for (const el of elements) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return active
}

export function Header() {
  const active = useActiveSection()
  const [lifted, setLifted] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // The popover owns Escape and light-dismiss; this only stops the page behind it scrolling.
  useEffect(() => {
    const panel = panelRef.current
    if (!panel) return
    const onToggle = (event: Event) => {
      const { newState } = event as ToggleEvent
      document.documentElement.style.overflowY = newState === 'open' ? 'hidden' : ''
    }
    panel.addEventListener('toggle', onToggle)
    return () => {
      panel.removeEventListener('toggle', onToggle)
      document.documentElement.style.overflowY = ''
    }
  }, [])

  const closePanel = useCallback(() => {
    panelRef.current?.hidePopover()
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ease-[var(--ease-out)]',
        lifted
          ? 'border-line bg-ink/85 backdrop-blur-md backdrop-saturate-150'
          : 'border-transparent bg-transparent',
      )}
    >
      <div className="shell">
        <div className="flex h-16 items-center justify-between gap-4 sm:h-20">
          <a
            href="#top"
            // Below `sm` the wordmark is hidden and the monogram is decorative,
            // which would otherwise leave this link with no accessible name.
            aria-label={`${site.name}, back to top`}
            className="group flex shrink-0 items-center gap-2.5 rounded-xs text-bone"
          >
            <span
              className="tnum grid size-8 place-items-center border border-brass-dim text-[0.7rem] leading-none text-brass transition-colors duration-200 group-hover:border-brass"
              aria-hidden="true"
            >
              ms
            </span>
            <span className="hidden text-sm font-medium tracking-tight sm:inline">
              {site.name}
            </span>
          </a>

          <nav aria-label="Page sections" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const current = active === link.id
                return (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      aria-current={current ? 'true' : undefined}
                      className={cn(
                        'relative block rounded-xs px-3 py-2 text-sm transition-colors duration-200',
                        current ? 'text-bone' : 'text-muted hover:text-bone',
                      )}
                    >
                      {link.label}
                      {/* Shape as well as colour, so the state is not signalled by hue alone. */}
                      <span
                        aria-hidden="true"
                        className={cn(
                          'absolute inset-x-3 -bottom-px h-px origin-left bg-brass transition-transform duration-300 ease-[var(--ease-out)]',
                          current ? 'scale-x-100' : 'scale-x-0',
                        )}
                      />
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a href="#contact" className={btn('solid', 'hidden px-4 py-2.5 sm:inline-flex')}>
              Hire me
            </a>
            <button
              type="button"
              popoverTarget={PANEL_ID}
              popoverTargetAction="show"
              aria-label="Open navigation menu"
              className="grid size-10 place-items-center rounded-sm border border-line-hi text-bone transition-colors duration-200 hover:border-brass hover:text-brass lg:hidden"
            >
              <MenuIcon className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      <div ref={panelRef} id={PANEL_ID} popover="auto" className="nav-panel">
        <div className="flex min-h-full flex-col p-6">
          <div className="mb-8 flex items-center justify-between">
            <span className="tnum text-xs text-faint">navigate</span>
            <button
              type="button"
              onClick={closePanel}
              aria-label="Close navigation menu"
              className="grid size-10 place-items-center rounded-sm border border-line-hi text-bone transition-colors duration-200 hover:border-brass hover:text-brass"
            >
              <CloseIcon className="text-xl" />
            </button>
          </div>

          <nav aria-label="Page sections, mobile">
            <ul>
              {navLinks.map((link) => (
                <li key={link.id} className="border-t border-line last:border-b">
                  <a
                    href={`#${link.id}`}
                    onClick={closePanel}
                    aria-current={active === link.id ? 'true' : undefined}
                    className={cn(
                      'flex items-center justify-between py-4 text-xl tracking-tight transition-colors duration-200',
                      active === link.id ? 'text-brass' : 'text-bone hover:text-brass',
                    )}
                  >
                    {link.label}
                    {active === link.id ? (
                      <span className="size-1.5 rounded-full bg-brass" aria-hidden="true" />
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto grid gap-3 pt-10">
            <a
              href="#contact"
              onClick={closePanel}
              className={btn('solid', 'w-full')}
            >
              Hire me
            </a>
            <a
              href={site.resume}
              download={site.resumeFileName}
              className={btn('outline', 'w-full')}
            >
              <DownloadIcon className="text-base" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
