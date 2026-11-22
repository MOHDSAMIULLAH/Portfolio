'use client'

import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react'
import { navLinks, site } from '@/data/site'
import { btn } from '@/components/ui/button'
import { Magnetic } from '@/components/ui/Magnetic'
import { CloseIcon, DownloadIcon, MenuIcon } from '@/components/ui/Icon'
import { cn } from '@/lib/utils'
import type { SectionId } from '@/types'

const PANEL_ID = 'site-nav-panel'

/** Section ids tracked for the active indicator, in document order. */
const TRACKED: readonly SectionId[] = ['top', ...navLinks.map((link) => link.id)]

/**
 * Marks whichever section currently crosses a thin band at the middle of the
 * viewport, so the indicator changes once per section rather than per pixel.
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
    const onScroll = () => setLifted(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // The popover owns Escape and light-dismiss; this only stops the page scrolling behind it.
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
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          'transition-[background-color,box-shadow,backdrop-filter] duration-400 ease-[var(--ease-out)]',
          lifted
            ? 'bg-canvas/80 shadow-[0_1px_0_0_var(--color-line)] backdrop-blur-xl backdrop-saturate-150'
            : 'bg-transparent',
        )}
      >
        <div className="shell">
          <div className="flex h-20 items-center justify-between gap-6 sm:h-24">
            <a
              href="#top"
              className="shrink-0 text-lg font-extrabold tracking-[-0.035em] text-ink sm:text-xl"
            >
              {site.name}
            </a>

            {/* Floating pill: the nav reads as an object on the page, not a bar across it. */}
            <nav aria-label="Page sections" className="hidden lg:block">
              <ul className="flex items-center gap-1 rounded-full border border-line bg-paper/70 p-1.5 backdrop-blur-md">
                {navLinks.map((link) => {
                  const current = active === link.id
                  return (
                    <li key={link.id} className="relative">
                      {/* Cross-fading pill rather than a Motion `layoutId`
                          slide: layout projection re-measures all seven links
                          on every scroll-driven re-render. */}
                      <a
                        href={`#${link.id}`}
                        aria-current={current ? 'true' : undefined}
                        className={cn(
                          'block rounded-full px-4 py-2 text-base font-medium transition-[background-color,color] duration-300 ease-[var(--ease-out)]',
                          current
                            ? 'bg-lime text-ink'
                            : 'text-slate hover:bg-canvas hover:text-ink',
                        )}
                      >
                        {link.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-3">
              {/* Wrapped rather than passing `hidden` into Magnetic, whose own
                  display utility would otherwise win and leak onto 320px. */}
              <span className="hidden sm:block">
                <Magnetic strength={0.25}>
                  <a href="#contact" className={btn('forest', 'px-6 py-3')}>
                    Hire me
                  </a>
                </Magnetic>
              </span>
              <button
                type="button"
                popoverTarget={PANEL_ID}
                popoverTargetAction="show"
                aria-label="Open navigation menu"
                className="grid size-12 place-items-center rounded-full border border-line-strong bg-paper/70 text-ink transition-colors duration-300 hover:border-forest hover:bg-paper lg:hidden"
              >
                <MenuIcon className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div ref={panelRef} id={PANEL_ID} popover="auto" className="nav-panel">
        <div className="flex min-h-full flex-col p-7">
          <div className="mb-10 flex items-center justify-between">
            <span className="tnum text-[length:var(--text-label)] text-lime">navigate</span>
            <button
              type="button"
              onClick={closePanel}
              aria-label="Close navigation menu"
              className="grid size-12 place-items-center rounded-full border border-line-dark text-chalk transition-colors duration-300 hover:border-lime hover:text-lime"
            >
              <CloseIcon className="text-2xl" />
            </button>
          </div>

          <nav aria-label="Page sections, mobile">
            {/* Stagger is CSS, keyed off :popover-open. Driving it with Motion
                animated seven hidden elements on every page load. */}
            <ul>
              {navLinks.map((link, i) => (
                <li
                  key={link.id}
                  style={{ '--i': i } as CSSProperties}
                  className="nav-item border-b border-line-dark first:border-t"
                >
                  <a
                    href={`#${link.id}`}
                    onClick={closePanel}
                    aria-current={active === link.id ? 'true' : undefined}
                    className={cn(
                      'flex items-center justify-between py-5 text-3xl font-semibold tracking-[-0.03em] transition-colors duration-300',
                      active === link.id ? 'text-lime' : 'text-chalk hover:text-lime',
                    )}
                  >
                    {link.label}
                    {active === link.id ? (
                      <span className="size-2.5 rounded-full bg-lime" aria-hidden="true" />
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto grid gap-3 pt-12">
            <a href="#contact" onClick={closePanel} className={btn('lime', 'w-full')}>
              Hire me
            </a>
            <a
              href={site.resume}
              download={site.resumeFileName}
              className={btn('chalk', 'w-full')}
            >
              <DownloadIcon className="text-xl" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
