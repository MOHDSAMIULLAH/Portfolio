# Mohd Samiullah, portfolio

Personal portfolio for a backend-focused fullstack engineer. Built as a single
statically rendered page on the Next.js App Router.

Live: https://portfolio-samiullah.netlify.app

## Stack

| Concern | Choice |
| --- | --- |
| Framework | Next.js 16, App Router, Server Components by default |
| Language | TypeScript, strict |
| Styling | Tailwind CSS 4, CSS-first tokens in `src/app/globals.css` |
| Type | Geist and Geist Mono via `next/font` |
| Motion | `motion` for the metric count-up; everything else is CSS |
| Contact | EmailJS, optional (see below) |

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run lint       # ESLint, flat config
npm run typecheck  # tsc --noEmit
```

## Contact form

The contact section renders a form only when all three EmailJS variables are
present. Without them it renders direct contact channels instead, so there is
never a form on the page that cannot deliver.

Copy `.env.example` to `.env.local` and fill in the values from the EmailJS
dashboard. The template must expose `name`, `email` and `message` fields, which
are the input names the form submits.

## Project layout

```
src/
  app/            layout, page, globals.css, sitemap, robots, OG image
  components/
    layout/       Header, Footer
    sections/     one component per page section
    ui/           Section shell, button classes, icons, CountUp
  data/           site, projects, experience, skills, achievements
  lib/            small helpers (class joining, EmailJS config)
  types/          shared types
public/
  images/ logos/ projects/ resume/
```

Content lives in `src/data` and is typed by `src/types`. Sections read from
there rather than hard-coding copy, so updating a role or project is a data
edit.

## Design system

Defined once as Tailwind theme tokens in `src/app/globals.css`:

- Ink `#08090a` ground, bone `#ecedee` type, one brass `#c8a961` accent.
- Structure comes from hairlines and alignment, not from boxes with shadows.
- Monospace is reserved for data: metrics, dates, scores, technology names.
- Motion is one orchestrated hero sequence plus scroll reveals; everything else
  responds to a user action. All of it respects `prefers-reduced-motion`.

## Measured

Lighthouse against the production build, desktop preset: 100 performance, 100
accessibility, 100 best practices, 100 SEO. Mobile preset (throttled): 95
performance, 100 accessibility, 100 best practices, 100 SEO.
