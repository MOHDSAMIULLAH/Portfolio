import { Section } from '@/components/ui/Section'
import { ContactForm } from '@/components/sections/ContactForm'
import { contactChannels, site } from '@/data/site'
import { isEmailConfigured } from '@/lib/email'
import { btn } from '@/components/ui/button'
import {
  ExternalIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  WhatsAppIcon,
} from '@/components/ui/Icon'

const channelIcon = {
  Email: MailIcon,
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
  WhatsApp: WhatsAppIcon,
} as const

/**
 * Shown when EmailJS credentials are absent. A form that cannot deliver is
 * worse than no form, so the direct route takes its place.
 */
function DirectContact() {
  return (
    <div className="rounded-lg border border-line bg-paper p-8 sm:p-10">
      <h3 className="text-[length:var(--text-h3)] leading-none font-semibold tracking-[-0.03em] text-ink">
        Email is fastest
      </h3>
      <p className="mt-5 max-w-[40ch] leading-[1.65] text-slate">
        Tell me what you are building, the stack it runs on, and the timeline you
        are working to. I reply within 24 hours.
      </p>
      <a
          href={`mailto:${site.email}?subject=Project%20enquiry`}
          className={btn('forest', 'w-full')}
        >
          <MailIcon className="text-xl" />
          Email me
        </a>
      {/* Kept out of the button: a nowrap pill holding this address sets a
          350px min-content floor that overflows a 320px viewport. */}
      <p className="tnum mt-5 break-all text-slate">{site.email}</p>
      <p className="mt-4 text-slate">
        Or reach me on LinkedIn, GitHub or WhatsApp using the links alongside.
      </p>
    </div>
  )
}

export function Contact() {
  return (
    <Section
      id="contact"
      note="replies within 24h"
      title="Have a challenging problem? Let’s build something meaningful."
      intro="I am open to backend and fullstack roles, contract work, and projects where the hard part is the system rather than the screen."
    >
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-14">
        {/* min-w-0: without it the grid track widens to fit the longest email. */}
        <div className="reveal min-w-0 lg:col-span-6">
          <ul>
            {contactChannels.map((channel, i) => {
              const ChannelIcon = channelIcon[channel.label as keyof typeof channelIcon]
              return (
                <li
                  key={channel.label}
                  className={`border-b border-line ${i === 0 ? 'border-t' : ''}`}
                >
                  <a
                    href={channel.href}
                    {...(channel.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    aria-label={
                      channel.external
                        ? `${channel.label}: ${channel.value}, opens in a new tab`
                        : `${channel.label}: ${channel.value}`
                    }
                    className="group flex min-w-0 items-center gap-4 py-6 transition-colors duration-300 sm:gap-6"
                  >
                    <span className="grid size-12 shrink-0 place-items-center rounded-full border border-line text-slate transition-colors duration-300 group-hover:border-forest group-hover:bg-forest group-hover:text-chalk sm:size-14">
                      <ChannelIcon className="text-xl" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="tnum block text-[length:var(--text-label)] text-green">
                        {channel.label.toLowerCase()}
                      </span>
                      <span className="mt-1.5 block truncate text-[length:var(--text-body)] font-semibold tracking-[-0.02em] text-ink transition-transform duration-400 ease-[var(--ease-out)] group-hover:translate-x-1 sm:text-[length:var(--text-h4)]">
                        {channel.value}
                      </span>
                    </span>
                    {channel.external ? (
                      <ExternalIcon className="shrink-0 text-xl text-slate transition-colors duration-300 group-hover:text-forest" />
                    ) : null}
                  </a>
                </li>
              )
            })}
          </ul>

          <p className="mt-10 max-w-[44ch] leading-[1.65] text-slate">
            Based in {site.location}, working with teams anywhere. If a role needs
            someone who can own a backend end to end and still ship the interface
            on top of it, that is the work I do.
          </p>
        </div>

        <div className="reveal min-w-0 lg:col-span-6">
          {isEmailConfigured ? <ContactForm /> : <DirectContact />}
        </div>
      </div>
    </Section>
  )
}
