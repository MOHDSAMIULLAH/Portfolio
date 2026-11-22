import { Section } from '@/components/ui/Section'
import { aiCapabilities } from '@/data/skills'

/** Stages of the request path drawn in the schematic, left to right. */
const flow = [
  { x: 0, label: 'request' },
  { x: 164, label: 'api' },
  { x: 328, label: 'retrieve' },
  { x: 492, label: 'context' },
  { x: 656, label: 'model' },
  { x: 820, label: 'stream' },
] as const

const BOX_W = 140
const BOX_H = 40

/**
 * Schematic of an LLM request path. Decorative: the stage list below carries the
 * same information as text, so this is hidden from assistive technology rather
 * than duplicated into it.
 */
function PipelineSchematic() {
  return (
    <svg
      viewBox="0 0 960 170"
      className="hidden h-auto w-full text-muted sm:block"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke="var(--color-line-hi)">
        {flow.slice(0, -1).map((node) => (
          <line
            key={`link-${node.label}`}
            x1={node.x + BOX_W}
            y1={20 + BOX_H / 2}
            x2={node.x + BOX_W + 24}
            y2={20 + BOX_H / 2}
          />
        ))}
        <line x1={398} y1={60} x2={398} y2={110} />
      </g>

      {flow.map((node) => {
        const accented = node.label === 'model'
        return (
          <g key={node.label}>
            <rect
              x={node.x}
              y={20}
              width={BOX_W}
              height={BOX_H}
              rx={3}
              fill="var(--color-ink-raised)"
              stroke={accented ? 'var(--color-brass)' : 'var(--color-line-hi)'}
            />
            <text
              x={node.x + BOX_W / 2}
              y={45}
              textAnchor="middle"
              fontSize={13}
              className="tnum"
              fill={accented ? 'var(--color-brass)' : 'currentColor'}
            >
              {node.label}
            </text>
          </g>
        )
      })}

      <rect
        x={328}
        y={110}
        width={BOX_W}
        height={BOX_H}
        rx={3}
        fill="var(--color-ink-raised)"
        stroke="var(--color-line-hi)"
      />
      <text
        x={398}
        y={135}
        textAnchor="middle"
        fontSize={13}
        className="tnum"
        fill="currentColor"
      >
        vector store
      </text>
    </svg>
  )
}

export function AiEngineering() {
  return (
    <Section
      id="ai"
      note="one shipped, the rest in hand"
      title="AI & LLM Engineering"
      intro="I treat LLM features as backend problems: retrieval quality, context budgets, latency and cost per call. The interesting work is the pipeline, not the prompt."
    >
      <div className="reveal border border-line bg-ink-raised p-6 sm:p-8">
        <p className="tnum text-xs text-faint">in production</p>
        <p className="mt-3 max-w-[70ch] text-[length:var(--text-lead)] leading-[1.55] text-bone">
          At ShelfEx I built and shipped the backend APIs for ShelfMuse, an
          AI-powered production application, integrating OpenAI and Claude models,
          and brought its response time down from 5 seconds to 3.
        </p>
        <p className="mt-3 max-w-[70ch] text-sm leading-relaxed text-muted">
          The capabilities below are the toolkit I build with. Where something has
          not yet run in production, this page does not claim that it has.
        </p>
      </div>

      <div className="reveal mt-14 sm:mt-16">
        <PipelineSchematic />

        <div className="mt-0 sm:mt-14 xl:border-t xl:border-line">
          <ol className="grid gap-0 xl:grid-cols-5 xl:gap-8">
            {aiCapabilities.map((capability) => (
              <li
                key={capability.stage}
                className="relative border-l border-line pb-9 pl-6 last:pb-0 xl:border-l-0 xl:pt-9 xl:pb-0 xl:pl-0"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 hidden h-2.5 w-px -translate-y-1/2 bg-brass xl:block"
                />
                <p className="tnum text-xs text-brass">{capability.stage}</p>
                <h3 className="mt-3 text-base leading-snug text-bone">
                  {capability.title}
                </h3>
                <p className="mt-2.5 max-w-[46ch] text-sm leading-[1.7] text-muted">
                  {capability.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  )
}
