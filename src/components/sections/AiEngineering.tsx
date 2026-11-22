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
const BOX_H = 44

/**
 * Schematic of an LLM request path. Decorative: the stage list below carries
 * the same information as text, so this is hidden from assistive technology
 * rather than duplicated into it.
 */
function PipelineSchematic() {
  return (
    <svg
      viewBox="0 0 960 180"
      className="hidden h-auto w-full sm:block"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke="var(--color-line-dark)" strokeWidth="1.5">
        {flow.slice(0, -1).map((node) => (
          <line
            key={`link-${node.label}`}
            x1={node.x + BOX_W}
            y1={20 + BOX_H / 2}
            x2={node.x + BOX_W + 24}
            y2={20 + BOX_H / 2}
            strokeDasharray="4 4"
           
          />
        ))}
        <line x1={398} y1={64} x2={398} y2={114} strokeDasharray="4 4" />
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
              rx={22}
              fill={accented ? 'var(--color-lime)' : 'var(--color-forest-deep)'}
              stroke={accented ? 'var(--color-lime)' : 'var(--color-line-dark)'}
              strokeWidth="1.5"
            />
            <text
              x={node.x + BOX_W / 2}
              y={47}
              textAnchor="middle"
              fontSize={14}
              className="tnum"
              fill={accented ? 'var(--color-ink)' : 'var(--color-chalk)'}
            >
              {node.label}
            </text>
          </g>
        )
      })}

      <rect
        x={328}
        y={114}
        width={BOX_W}
        height={BOX_H}
        rx={22}
        fill="var(--color-forest-deep)"
        stroke="var(--color-line-dark)"
        strokeWidth="1.5"
      />
      <text
        x={398}
        y={141}
        textAnchor="middle"
        fontSize={14}
        className="tnum"
        fill="var(--color-chalk)"
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
      title="LLM features are backend problems"
      intro="Retrieval quality, context budgets, latency and cost per call. The interesting work is the pipeline, not the prompt."
      tone="forest"
    >
      <div className="reveal rounded-lg border border-lime/40 bg-forest-deep p-8 sm:p-12">
        <p className="tnum text-[length:var(--text-label)] text-lime">in production</p>
        <p className="mt-5 max-w-[46ch] text-[length:var(--text-h4)] leading-[1.35] font-semibold text-chalk">
          At ShelfEx I built and shipped the backend APIs for ShelfMuse, an
          AI-powered production application, integrating OpenAI and Claude, and
          brought its response time down from five seconds to three.
        </p>
        <p className="mt-5 max-w-[58ch] leading-[1.65] text-chalk-dim">
          The capabilities below are the toolkit I build with. Where something
          has not yet run in production, this page does not claim that it has.
        </p>
      </div>

      <div className="reveal mt-16 sm:mt-20">
        <PipelineSchematic />
      </div>

      <ol className="reveal-stagger mt-4 grid gap-0 sm:mt-14 xl:grid-cols-5 xl:gap-8 xl:border-t xl:border-line-dark">
        {aiCapabilities.map((capability) => (
          <li
            key={capability.stage}
            className="relative border-l border-line-dark pb-9 pl-7 last:pb-0 xl:border-l-0 xl:pt-9 xl:pb-0 xl:pl-0"
          >
            <span
              aria-hidden="true"
              className="absolute top-0 left-0 hidden h-3 w-0.5 -translate-y-1/2 bg-lime xl:block"
            />
            <p className="tnum text-[length:var(--text-label)] text-lime">{capability.stage}</p>
            <h3 className="mt-3.5 text-[length:var(--text-h4)] leading-snug font-semibold text-chalk">
              {capability.title}
            </h3>
            <p className="mt-3 max-w-[44ch] leading-[1.65] text-chalk-dim">
              {capability.detail}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
