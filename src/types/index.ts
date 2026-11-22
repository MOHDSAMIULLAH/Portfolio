export type SectionId =
  | 'top'
  | 'about'
  | 'impact'
  | 'stack'
  | 'experience'
  | 'projects'
  | 'ai'
  | 'education'
  | 'contact'

export interface NavLink {
  readonly label: string
  readonly id: SectionId
}

export interface Achievement {
  /** Numeric part of the headline figure, used by the count-up readout. */
  readonly value: number
  readonly unit: string
  readonly label: string
  readonly detail: string
  readonly where: string
}

export interface ImageAsset {
  readonly src: string
  readonly width: number
  readonly height: number
  readonly alt: string
}

/** Controls how much of the projects grid an entry claims. */
export type ProjectWeight = 'feature' | 'standard' | 'compact'

/**
 * Whether a deployment is currently reachable. Entries marked `paused` keep
 * their URL in the data but render as a note, so the page carries no link that
 * resolves to an error page.
 */
export type DemoStatus = 'live' | 'paused'

export interface Project {
  readonly slug: string
  readonly name: string
  readonly tagline: string
  /** Business or problem context the work sat inside. */
  readonly context: string
  /** What I personally built. */
  readonly contribution: string
  /** The hardest technical constraint. */
  readonly challenge: string
  /** How it was solved. */
  readonly solution: string
  readonly features: readonly string[]
  readonly stack: readonly string[]
  /** Null when the source is closed; rendered as a note, never as a dead link. */
  readonly repo: string | null
  readonly demo: string | null
  readonly demoStatus: DemoStatus
  /** Explains an absent repo or demo in the reader's terms. */
  readonly accessNote: string | null
  readonly weight: ProjectWeight
  /** Null where no genuine screenshot exists; a topology is drawn instead. */
  readonly shot: ImageAsset | null
  /** Stages drawn as a diagram when there is no screenshot. */
  readonly topology: Topology | null
}

export interface TopologyNode {
  readonly node: string
  /** What actually runs at this stage. */
  readonly detail: string
  /** Marks the stage the project is really about. */
  readonly accent?: boolean
}

export interface Topology {
  readonly label: string
  readonly nodes: readonly TopologyNode[]
}

export interface Experience {
  readonly company: string
  readonly role: string
  readonly kind: string
  readonly location: string
  readonly from: string
  readonly to: string
  readonly current: boolean
  /** Named product shipped in the role, where there is one. */
  readonly product: string | null
  readonly summary: string
  readonly contributions: readonly string[]
  readonly stack: readonly string[]
  readonly logo: ImageAsset
}

export interface SkillGroup {
  readonly name: string
  readonly note: string
  readonly emphasis: 'core' | 'standard' | 'supporting'
  readonly items: readonly string[]
}

export interface Education {
  readonly qualification: string
  readonly field: string | null
  readonly institution: string
  readonly score: string
  readonly from: string
  readonly to: string
}

export interface AiCapability {
  readonly stage: string
  readonly title: string
  readonly detail: string
}

export interface ContactChannel {
  readonly label: string
  readonly value: string
  readonly href: string
  readonly external: boolean
}
