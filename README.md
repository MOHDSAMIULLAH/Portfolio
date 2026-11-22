# Mohd Samiullah, portfolio

Personal portfolio for a backend-focused fullstack engineer. A single statically
rendered page on the Next.js App Router.

Live: https://portfolio-samiullah.netlify.app

## Stack

| Concern | Choice |
| --- | --- |
| Framework | Next.js 16, App Router, Server Components by default |
| Language | TypeScript, strict |
| Styling | Tailwind CSS 4, CSS-first tokens in `src/app/globals.css` |
| Type | Manrope and Geist Mono via `next/font` |
| Motion | CSS scroll-driven animations; `motion` for counters and magnetic buttons |
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

## Design system

Defined once as Tailwind theme tokens in `src/app/globals.css`.

| Token | Value | Use |
| --- | --- | --- |
| `canvas` | `#f3f0e8` | warm ivory page ground |
| `canvas-alt` | `#e8ede5` | sage bands (Stack, Education) |
| `paper` | `#ffffff` | cards and panels |
| `forest` | `#193a30` | full-bleed contrast bands (Impact, AI, footer) |
| `ink` | `#1d332b` | primary text, 11.8:1 on canvas |
| `slate` | `#58675f` | secondary text, 5.2:1 on canvas |
| `green` | `#2f6b4c` | links and labels, 5.5:1 on canvas |
| `lime` | `#c7e66a` | fills only, never text on light ground |

Rules the system enforces:

- Lime is a background, never a foreground on ivory. It carries dark text, or
  sits on forest where it reaches 8.9:1.
- The smallest text on the page is 13px (`--text-label`); body is 18–20px fluid.
- Monospace is reserved for data: metrics, dates, scores, technology names.
- Every type size is a `clamp()` whose maximum is under 2.5x its minimum, so
  browser zoom still reaches 200%.

## Motion

Scroll-linked work uses CSS view timelines, so it runs off the main thread and
costs no JavaScript. Measured cost of all 83 animations on the page: under 20ms
of load-time blocking versus the same page with them disabled.

- `.reveal` / `.reveal-stagger` — one shared view timeline per container
- `.reveal-wipe` — clip-path uncover for project screenshots
- `.drift` — hero portrait parallax inside a fixed frame
- `.timeline-progress` — experience spine fills as the list scrolls past
- `motion` is used only for the metric count-up and the magnetic hero buttons

Everything is opt-in under `prefers-reduced-motion`: the resting state is the
finished state, so a reader who disables motion sees the whole page rather than
an empty one.

## Contact form

The contact section renders a form only when all three EmailJS variables are
present. Without them it renders direct contact channels, so there is never a
form on the page that cannot deliver.

Copy `.env.example` to `.env.local` and fill in the values. The template must
expose `name`, `email` and `message`, which are the input names the form submits.

## Project data

`src/data/projects.ts` is the single source for the Projects section.

- `shot: null` means no public screenshot exists; the card draws a `topology`
  diagram from the real stack instead of borrowing an unrelated image.
- `repo: null` means the source is closed. The card says so rather than linking
  to a 404.
- `demoStatus: 'paused'` keeps a deployment URL in the data while rendering it
  as a note, so a dead link never ships. Set it back to `'live'` once the
  deployment is reachable.

## Measured

Against the production build on a Windows laptop.

| | Performance | Accessibility | Best practices | SEO |
| --- | --- | --- | --- | --- |
| Desktop | 71 | 100 | 100 | 100 |
| Mobile (median of 3) | 70 | 100 | 100 | 100 |

LCP 0.4s desktop, 1.0–1.2s mobile. CLS 0 at every width. No horizontal scroll at
320, 390, 430, 768 or 1440px.

The performance score is unreliable on this machine: Lighthouse reported TBT
between 1,950ms and 4,400ms across three identical mobile runs, and attributed
768ms of a desktop long task to work containing 3ms of scripting. Measuring load
blocking directly with a `longtask` PerformanceObserver over five unthrottled
runs gives a median of 201ms. Re-run against a deployment (PageSpeed Insights)
for a number worth acting on.
