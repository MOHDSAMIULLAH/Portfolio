import Image from 'next/image'
import { Section } from '@/components/ui/Section'
import { ExternalIcon, GitHubIcon } from '@/components/ui/Icon'
import { projects } from '@/data/projects'
import { cn } from '@/lib/utils'
import type { Project, Topology as TopologyType } from '@/types'

/**
 * Request path drawn for employer products that have no public screenshot.
 * Built from flow layout rather than SVG so it wraps on narrow screens.
 */
function Topology({ topology, tone }: { topology: TopologyType; tone: 'light' | 'dark' }) {
  const dark = tone === 'dark'
  return (
    // Never wraps: a broken chain would leave a wire pointing at nothing.
    // Narrow screens scroll the diagram instead.
    // w-fit + max-w-full centres the chain when it fits and scrolls it when it
    // does not, without ever pushing the page wider.
    <ol
      className="mx-auto flex w-fit max-w-full snap-x items-stretch overflow-x-auto pb-2 [overscroll-behavior-x:contain] [scrollbar-width:thin]"
      aria-label={topology.label}
    >
      {topology.nodes.map((stage, i) => (
        <li key={stage.node} className="flex shrink-0 snap-start items-center">
          <span
            className={cn(
              'flex min-w-[6.75rem] flex-col items-center gap-1.5 rounded-md border px-4 py-4 text-center',
              // One background wins outright, rather than two competing utilities.
              stage.accent
                ? 'border-green-bright bg-lime'
                : dark
                  ? 'border-line-dark bg-forest-deep'
                  : 'border-line bg-paper',
            )}
          >
            <span
              className={cn(
                'tnum text-[0.9375rem] font-semibold whitespace-nowrap',
                stage.accent ? 'text-ink' : dark ? 'text-chalk' : 'text-ink',
              )}
            >
              {stage.node}
            </span>
            <span
              className={cn(
                'tnum text-[0.6875rem] whitespace-nowrap',
                stage.accent ? 'text-forest' : dark ? 'text-chalk-dim' : 'text-slate',
              )}
            >
              {stage.detail}
            </span>
          </span>
          {i < topology.nodes.length - 1 ? (
            <span
              aria-hidden="true"
              className={cn(
                'wire h-px w-6 shrink-0 sm:w-8',
                dark ? 'text-chalk-dim' : 'text-line-strong',
              )}
            />
          ) : null}
        </li>
      ))}
    </ol>
  )
}

function Visual({
  project,
  sizes,
  shotClass,
  tone = 'light',
}: {
  project: Project
  sizes: string
  /** Aspect and sizing for the screenshot branch; topology sizes to content. */
  shotClass?: string
  tone?: 'light' | 'dark'
}) {
  if (project.shot) {
    return (
      <div
        className={cn(
          'reveal-wipe group/shot overflow-hidden rounded-lg border border-line bg-canvas-alt',
          shotClass,
        )}
      >
        <Image
          src={project.shot.src}
          alt={project.shot.alt}
          width={project.shot.width}
          height={project.shot.height}
          sizes={sizes}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-[900ms] ease-[var(--ease-out)] group-hover/shot:scale-[1.03]"
        />
      </div>
    )
  }

  if (!project.topology) return null

  // Sized by its content rather than a fixed ratio, so a short path does not
  // leave a large empty panel.
  return (
    <div
      className={cn(
        // Block, not a centred grid: a centred grid item shrink-wraps, which
        // would leave the scroll container unconstrained.
        'reveal rounded-lg border px-5 py-10 sm:px-10 sm:py-14',
        tone === 'dark' ? 'border-line-dark bg-forest' : 'border-line bg-canvas-alt',
      )}
    >
      <div className="w-full min-w-0">
        <p
          className={cn(
            'tnum mb-8 text-center text-[length:var(--text-label)]',
            tone === 'dark' ? 'text-lime' : 'text-green',
          )}
        >
          {project.topology.label}
        </p>
        <Topology topology={project.topology} tone={tone} />
      </div>
    </div>
  )
}

function Links({ project, tone = 'light' }: { project: Project; tone?: 'light' | 'dark' }) {
  const dark = tone === 'dark'
  const chip = cn(
    'inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[0.875rem] font-medium',
    'transition-[background-color,border-color,color,transform] duration-300 ease-[var(--ease-out)] hover:-translate-y-0.5',
    dark
      ? 'border-line-dark text-chalk hover:border-lime hover:text-lime'
      : 'border-line-strong text-ink hover:border-forest hover:bg-forest hover:text-chalk',
  )
  const muted = cn(
    'tnum text-[0.8125rem]',
    dark ? 'text-chalk-dim' : 'text-slate',
  )

  return (
    <div className="flex flex-wrap items-center gap-3">
      {project.repo ? (
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.name} source on GitHub, opens in a new tab`}
          className={chip}
        >
          <GitHubIcon className="text-lg" />
          Source
        </a>
      ) : null}

      {project.demo && project.demoStatus === 'live' ? (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.name} live site, opens in a new tab`}
          className={chip}
        >
          <ExternalIcon className="text-lg" />
          Live site
        </a>
      ) : null}

      {project.demo && project.demoStatus === 'paused' ? (
        <p className={muted}>Demo offline</p>
      ) : null}

      {project.accessNote ? <p className={cn(muted, 'max-w-[34ch]')}>{project.accessNote}</p> : null}
    </div>
  )
}

function Stack({ items, tone = 'light' }: { items: readonly string[]; tone?: 'light' | 'dark' }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            'tnum rounded-full border px-3 py-1.5 text-[0.75rem]',
            tone === 'dark' ? 'border-line-dark text-chalk-dim' : 'border-line text-slate',
          )}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

const BLOCKS = [
  { key: 'context', label: 'context' },
  { key: 'contribution', label: 'my role' },
  { key: 'challenge', label: 'hard part' },
  { key: 'solution', label: 'solution' },
] as const

/** Full case study. Alternates the accent ground so the two do not twin. */
function FeatureProject({ project, index }: { project: Project; index: number }) {
  const dark = index % 2 === 1
  return (
    <article
      className={cn(
        'overflow-hidden rounded-xl border',
        dark ? 'on-forest border-line-dark bg-forest text-chalk' : 'border-line bg-paper',
      )}
    >
      <div className="p-6 sm:p-10 lg:p-14">
        <Visual
          project={project}
          sizes="(min-width: 1280px) 1060px, (min-width: 1024px) 76vw, 90vw"
          shotClass="aspect-16/9 sm:aspect-16/8"
          tone={dark ? 'dark' : 'light'}
        />

        <div className="reveal mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <h3 className="text-[length:var(--text-h3)] leading-[1.02] font-semibold tracking-[-0.035em]">
              {project.name}
            </h3>
            <p
              className={cn(
                'mt-4 max-w-[30ch] text-[length:var(--text-lead)] leading-snug',
                dark ? 'text-chalk-dim' : 'text-slate',
              )}
            >
              {project.tagline}
            </p>
            <div className="mt-8 space-y-6">
              <Stack items={project.stack} tone={dark ? 'dark' : 'light'} />
              <Links project={project} tone={dark ? 'dark' : 'light'} />
            </div>
          </div>

          <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:col-span-8">
            {BLOCKS.map((block) => (
              <div key={block.key}>
                <p
                  className={cn(
                    'tnum text-[length:var(--text-label)]',
                    dark ? 'text-lime' : 'text-green',
                  )}
                >
                  {block.label}
                </p>
                <p
                  className={cn(
                    'mt-3 leading-[1.65]',
                    dark ? 'text-chalk-dim' : 'text-slate',
                  )}
                >
                  {project[block.key]}
                </p>
              </div>
            ))}
          </div>
        </div>

        <ul
          className={cn(
            'reveal mt-12 grid gap-x-10 gap-y-3 border-t pt-8 sm:grid-cols-2',
            dark ? 'border-line-dark' : 'border-line',
          )}
        >
          {project.features.map((feature) => (
            <li
              key={feature}
              className={cn(
                'relative pl-7 leading-[1.6] before:absolute before:top-[0.6em] before:left-0 before:h-1.5 before:w-3.5 before:rounded-full before:content-[\'\']',
                dark
                  ? 'text-chalk-dim before:bg-lime'
                  : 'text-slate before:bg-green-bright',
              )}
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

/** Mid-weight entry: visual, the solution paragraph, stack and links. */
function StandardProject({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-lg border border-line bg-paper p-6 transition-[border-color,transform,box-shadow] duration-400 ease-[var(--ease-out)] hover:-translate-y-1 hover:border-green-bright hover:shadow-[0_26px_50px_-36px_#193a30] sm:p-8">
      <Visual
        project={project}
        sizes="(min-width: 1024px) 32vw, 90vw"
        shotClass="aspect-16/10"
      />
      <h3 className="mt-7 text-[length:var(--text-h4)] font-semibold tracking-[-0.02em] text-ink">
        {project.name}
      </h3>
      <p className="mt-2 font-medium text-green">{project.tagline}</p>
      <p className="mt-4 leading-[1.65] text-slate">{project.solution}</p>
      <div className="mt-auto space-y-5 pt-7">
        <Stack items={project.stack} />
        <Links project={project} />
      </div>
    </article>
  )
}

/** Index row for supporting work. */
function CompactProject({ project }: { project: Project }) {
  return (
    <article className="grid gap-5 border-b border-line py-8 sm:grid-cols-[13rem_minmax(0,1fr)] sm:items-start sm:gap-9">
      <Visual project={project} sizes="(min-width: 640px) 13rem, 90vw" shotClass="aspect-16/10" />
      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
          <h3 className="text-[length:var(--text-h4)] font-semibold tracking-[-0.02em] text-ink">
            {project.name}
          </h3>
          <Links project={project} />
        </div>
        <p className="mt-2 font-medium text-green">{project.tagline}</p>
        <p className="mt-3 max-w-[66ch] leading-[1.65] text-slate">{project.solution}</p>
        <div className="mt-5">
          <Stack items={project.stack} />
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  const feature = projects.filter((p) => p.weight === 'feature')
  const standard = projects.filter((p) => p.weight === 'standard')
  const compact = projects.filter((p) => p.weight === 'compact')

  return (
    <Section
      id="projects"
      note={`${projects.length} shipped`}
      title="Work I can show you"
      intro="Two full case studies, then the rest of what I have built and deployed. Employer products carry no screenshot because the code is not mine to publish."
    >
      <div className="space-y-8">
        {feature.map((project, i) => (
          <FeatureProject key={project.slug} project={project} index={i} />
        ))}
      </div>

      <div className="reveal-stagger mt-8 grid gap-8 lg:grid-cols-3">
        {standard.map((project) => (
          <StandardProject key={project.slug} project={project} />
        ))}
      </div>

      <div className="mt-20 border-t border-line">
        <h3 className="tnum py-8 text-[length:var(--text-label)] text-green">
          also built and deployed
        </h3>
        <div className="reveal-stagger">
          {compact.map((project) => (
            <CompactProject key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </Section>
  )
}
