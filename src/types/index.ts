export type SectionId =
  | 'top'
  | 'about'
  | 'impact'
  | 'stack'
  | 'work'
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

/** Controls how much of the projects grid a card claims. */
export type ProjectWeight = 'feature' | 'standard' | 'compact'

export interface Project {
  readonly slug: string
  readonly name: string
  readonly tagline: string
  readonly problem: string
  readonly approach: string
  readonly features: readonly string[]
  readonly stack: readonly string[]
  /** Null when the source is closed, which is rendered as a note, never as a dead link. */
  readonly repo: string | null
  readonly demo: string | null
  readonly weight: ProjectWeight
  readonly shot: ImageAsset
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
