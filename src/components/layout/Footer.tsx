import { footerLinks, site } from '@/data/site'
import { ArrowUpIcon, GitHubIcon, LinkedInIcon, MailIcon } from '@/components/ui/Icon'

const socials = [
  { href: site.linkedin, label: 'LinkedIn', Icon: LinkedInIcon, external: true },
  { href: site.github, label: 'GitHub', Icon: GitHubIcon, external: true },
  { href: `mailto:${site.email}`, label: 'Email', Icon: MailIcon, external: false },
] as const

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="on-forest bg-forest text-chalk">
      <div className="shell py-20 sm:py-24">
        {/* The name, set once at full size, as a deliberate sign-off. */}
        <p className="reveal text-[length:var(--text-h2)] leading-[0.9] font-extrabold tracking-[-0.045em] text-chalk">
          Mohd
          <br />
          Samiullah
        </p>

        <div className="mt-16 grid gap-12 border-t border-line-dark pt-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <p className="max-w-[34ch] text-[length:var(--text-lead)] leading-[1.5] text-chalk-dim">
              Backend-focused fullstack engineer building scalable APIs, cloud
              infrastructure and AI-powered applications.
            </p>

            <ul className="mt-8 flex items-center gap-3">
              {socials.map(({ href, label, Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    aria-label={external ? `${label}, opens in a new tab` : label}
                    className="grid size-13 place-items-center rounded-full border border-line-dark text-chalk transition-colors duration-300 hover:border-lime hover:bg-lime hover:text-ink"
                  >
                    <Icon className="text-xl" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer" className="lg:col-span-4">
            <p className="tnum text-[length:var(--text-label)] text-lime">sections</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3.5">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-chalk-dim transition-colors duration-300 hover:text-lime"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3 lg:text-right">
            <a
              href="#top"
              className="group inline-flex items-center gap-3 rounded-full border border-line-dark px-5 py-3 font-medium text-chalk transition-colors duration-300 hover:border-lime hover:text-lime"
            >
              <ArrowUpIcon className="text-xl transition-transform duration-400 ease-[var(--ease-out)] group-hover:-translate-y-1" />
              Back to top
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line-dark pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="tnum text-[length:var(--text-label)] text-chalk-dim">
            <span aria-hidden="true">©</span>
            <span className="sr-only">Copyright</span> {year} {site.name}
          </p>
          <p className="tnum text-[length:var(--text-label)] text-chalk-dim">
            Next.js, TypeScript, Tailwind CSS, Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
