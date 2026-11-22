import type { Metadata, Viewport } from 'next'
import { Geist_Mono, Manrope } from 'next/font/google'
import type { ReactNode } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { site } from '@/data/site'
import { skillGroups } from '@/data/skills'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-geist-mono',
  display: 'swap',
})

const title = `${site.name} | ${site.role}`

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: `${site.name} portfolio`,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    'Mohd Samiullah',
    'Backend Engineer',
    'Fullstack Developer',
    'Node.js',
    'TypeScript',
    'PostgreSQL',
    'Redis',
    'AWS',
    'Docker',
    'LLM Engineering',
    'RAG',
    'Next.js',
  ],
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'profile',
    url: site.url,
    siteName: site.name,
    title,
    description: site.description,
    locale: site.locale,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: site.description,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#f3f0e8',
  colorScheme: 'light',
}

/** Person schema, built from the same data the page renders. */
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  url: site.url,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  description: site.description,
  address: { '@type': 'PostalAddress', addressLocality: 'New Delhi', addressCountry: 'IN' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Jamia Millia Islamia' },
  worksFor: { '@type': 'Organization', name: 'PaakNikah' },
  sameAs: [site.linkedin, site.github],
  knowsAbout: skillGroups.flatMap((group) => group.items),
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${geistMono.variable}`}>
      <body>
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-sm focus:bg-forest focus:px-5 focus:py-3 focus:text-base focus:font-semibold focus:text-chalk"
        >
          Skip to content
        </a>

        <Header />
        <main>{children}</main>
        <Footer />

        <script
          type="application/ld+json"
          // Serialised from a literal above, so there is no untrusted input here.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  )
}
