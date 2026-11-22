import Image from 'next/image'
import { Section } from '@/components/ui/Section'
import { ExternalIcon, GitHubIcon } from '@/components/ui/Icon'
import { projects } from '@/data/projects'
import { cn } from '@/lib/utils'
import type { Project } from '@/types'

function Links({ project, className }: { project: Project; className?: string }) {
  return (
    <div className={cn('flex flex-wrap items-center gap-x-6 gap-y-3', className)}>
      {project.repo ? (
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.name} source code on GitHub, opens in a new tab`}
          className="inline-flex items-center gap-2 border-b border-line pb-1 text-sm text-muted transition-colors duration-200 hover:border-brass hover:text-bone"
        >
          <GitHubIcon className="text-base" />
          Source
        </a>
      ) : (
        <p className="inline-flex items-center gap-2 pb-1 text-sm text-faint">
          <GitHubIcon className="text-base" />
          Source closed, commercial product
        </p>
      )}
      {project.demo ? (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.name} live site, opens in a new tab`}
          className="inline-flex items-center gap-2 border-b border-brass-dim pb-1 text-sm text-brass transition-colors duration-200 hover:border-brass hover:text-brass-hi"
        >
          <ExternalIcon className="text-base" />
          Live site
        </a>
      ) : null}
    </div>
  )
}

function Stack({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-2">
      {items.map((item) => (
        <li key={item} className="tnum text-xs text-faint">
          {item}
        </li>
      ))}
    </ul>
  )
}

function Shot({
  project,
  sizes,
  className,
}: {
  project: Project
  sizes: string
  className?: string
}) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-sm border border-line bg-surface',
        className,
      )}
    >
      <Image
        src={project.shot.src}
        alt={project.shot.alt}
        width={project.shot.width}
        height={project.shot.height}
        sizes={sizes}
        loading="lazy"
        className="h-full w-full object-cover object-top transition-transform duration-700 ease-[var(--ease-out)] hover:scale-[1.02]"
      />
    </div>
  )
}

/** The lead project: full-bleed shot, then problem and approach side by side. */
function FeatureProject({ project }: { project: Project }) {
  return (
    <article className="border-b border-line pb-14 sm:pb-16">
      <Shot
        project={project}
        sizes="(min-width: 1280px) 1120px, (min-width: 1024px) 78vw, 92vw"
        className="aspect-16/8"
      />

      <div className="mt-9 grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <h3 className="text-[length:var(--text-h2)] leading-[1] text-bone">
            {project.name}
          </h3>
          <p className="mt-3 max-w-[34ch] text-[length:var(--text-lead)] leading-snug text-muted">
            {project.tagline}
          </p>
        </div>

        <div className="lg:col-span-4">
          <p className="tnum text-xs text-faint">problem</p>
          <p className="mt-3 max-w-[48ch] leading-[1.7] text-muted">{project.problem}</p>
        </div>

        <div className="lg:col-span-4">
          <p className="tnum text-xs text-faint">approach</p>
          <p className="mt-3 max-w-[48ch] leading-[1.7] text-bone">{project.approach}</p>
        </div>
      </div>

      <div className="mt-9 grid gap-8 lg:grid-cols-12 lg:gap-10">
        <ul className="grid gap-2.5 lg:col-span-8 lg:grid-cols-2">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="relative pl-6 text-sm leading-[1.6] text-muted before:absolute before:top-[0.65em] before:left-0 before:h-px before:w-3 before:bg-brass-dim before:content-['']"
            >
              {feature}
            </li>
          ))}
        </ul>

        <div className="space-y-5 lg:col-span-4">
          <Stack items={project.stack} />
          <Links project={project} />
        </div>
      </div>
    </article>
  )
}

/** Mid-weight projects: shot above a short approach summary. */
function StandardProject({ project }: { project: Project }) {
  return (
    <article className="flex flex-col">
      <Shot
        project={project}
        sizes="(min-width: 1024px) 38vw, 92vw"
        className="aspect-16/9"
      />
      <h3 className="mt-6 text-[length:var(--text-h3)] text-bone">{project.name}</h3>
      <p className="mt-2 text-sm text-muted">{project.tagline}</p>
      <p className="mt-4 max-w-[52ch] leading-[1.7] text-muted">{project.approach}</p>
      <div className="mt-auto space-y-5 pt-6">
        <Stack items={project.stack} />
        <Links project={project} />
      </div>
    </article>
  )
}

/** Supporting projects: an index row with a thumbnail. */
function CompactProject({ project }: { project: Project }) {
  return (
    <article className="grid gap-5 border-b border-line py-7 sm:grid-cols-[11rem_minmax(0,1fr)] sm:items-start sm:gap-8">
      <Shot
        project={project}
        sizes="(min-width: 640px) 11rem, 92vw"
        className="aspect-16/10"
      />
      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <h3 className="text-lg text-bone">{project.name}</h3>
          <Links project={project} />
        </div>
        <p className="mt-2 text-sm text-muted">{project.tagline}</p>
        <p className="mt-3 max-w-[64ch] text-sm leading-[1.7] text-muted">
          {project.approach}
        </p>
        <div className="mt-4">
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
      title="Projects"
      intro="Products and applications I designed, built and deployed, ordered by how much of the system I owned."
    >
      <div className="reveal space-y-14 sm:space-y-16">
        {feature.map((project) => (
          <FeatureProject key={project.slug} project={project} />
        ))}

        <div className="grid gap-12 border-b border-line pb-14 sm:pb-16 lg:grid-cols-2 lg:gap-10">
          {standard.map((project) => (
            <StandardProject key={project.slug} project={project} />
          ))}
        </div>

        <div className="border-t border-line">
          {compact.map((project) => (
            <CompactProject key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </Section>
  )
}
