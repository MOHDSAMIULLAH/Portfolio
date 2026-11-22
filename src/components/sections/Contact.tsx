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
 * worse than no form, so the direct channels take its place.
 */
function DirectContact() {
  return (
    <div className="border border-line bg-ink-raised p-6 sm:p-8">
      <h3 className="text-[length:var(--text-h3)] text-bone">Email is fastest</h3>
      <p className="mt-3 max-w-[46ch] leading-[1.7] text-muted">
        Tell me what you are building, the stack it runs on, and the timeline you
        are working to. I reply within 24 hours.
      </p>
      <a
        href={`mailto:${site.email}?subject=Project%20enquiry`}
        className={btn('solid', 'mt-6 w-full')}
      >
        <MailIcon className="text-base" />
        {site.email}
      </a>
      <p className="mt-4 text-sm text-faint">
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
      title="Let’s build together"
      intro="I am open to backend and fullstack roles, contract work, and projects where the hard part is the system rather than the screen."
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="reveal lg:col-span-6">
          <ul className="border-t border-line">
            {contactChannels.map((channel) => {
              const ChannelIcon = channelIcon[channel.label as keyof typeof channelIcon]
              return (
                <li key={channel.label} className="border-b border-line">
                  <a
                    href={channel.href}
                    {...(channel.external
                      ? { target: '_blank', rel: 'noreferrer' }
                      : {})}
                    aria-label={
                      channel.external
                        ? `${channel.label}: ${channel.value}, opens in a new tab`
                        : `${channel.label}: ${channel.value}`
                    }
                    className="group flex items-center gap-5 py-5 transition-colors duration-200"
                  >
                    <ChannelIcon className="shrink-0 text-xl text-faint transition-colors duration-200 group-hover:text-brass" />
                    <span className="min-w-0 flex-1">
                      <span className="tnum block text-xs text-faint">
                        {channel.label.toLowerCase()}
                      </span>
                      <span className="mt-1 block truncate text-bone transition-colors duration-200 group-hover:text-brass">
                        {channel.value}
                      </span>
                    </span>
                    {channel.external ? (
                      <ExternalIcon className="shrink-0 text-base text-faint transition-colors duration-200 group-hover:text-brass" />
                    ) : null}
                  </a>
                </li>
              )
            })}
          </ul>

          <p className="mt-8 max-w-[48ch] leading-[1.7] text-muted">
            Based in {site.location}, working with teams anywhere. If a role needs
            someone who can own a backend end to end and still ship the interface
            on top of it, that is the work I do.
          </p>
        </div>

        <div className="reveal lg:col-span-6">
          {isEmailConfigured ? <ContactForm /> : <DirectContact />}
        </div>
      </div>
    </Section>
  )
}
