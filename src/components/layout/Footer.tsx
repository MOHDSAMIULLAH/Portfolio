import { navLinks, site } from '@/data/site'
import { ArrowUpIcon, GitHubIcon, LinkedInIcon, MailIcon } from '@/components/ui/Icon'

const socials = [
  { href: site.linkedin, label: 'LinkedIn', Icon: LinkedInIcon, external: true },
  { href: site.github, label: 'GitHub', Icon: GitHubIcon, external: true },
  { href: `mailto:${site.email}`, label: 'Email', Icon: MailIcon, external: false },
] as const

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line">
      <div className="shell py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="text-[length:var(--text-h3)] text-bone">{site.name}</p>
            <p className="mt-3 max-w-[40ch] leading-relaxed text-muted">
              Backend-focused fullstack engineer building scalable APIs, cloud
              infrastructure and AI-powered applications.
            </p>

            <ul className="mt-6 flex items-center gap-1">
              {socials.map(({ href, label, Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    aria-label={external ? `${label}, opens in a new tab` : label}
                    className="grid size-11 place-items-center rounded-sm text-muted transition-colors duration-200 hover:text-brass"
                  >
                    <Icon className="text-xl" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer" className="lg:col-span-4">
            <p className="tnum text-xs text-faint">sections</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-sm text-muted transition-colors duration-200 hover:text-bone"
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
              className="inline-flex items-center gap-2 border-b border-line pb-1 text-sm text-muted transition-colors duration-200 hover:border-brass hover:text-bone"
            >
              <ArrowUpIcon className="text-base" />
              Back to top
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="tnum text-xs text-faint">
            <span aria-hidden="true">©</span>
            <span className="sr-only">Copyright</span> {year} {site.name}
          </p>
          <p className="tnum text-xs text-faint">Next.js, TypeScript, Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
