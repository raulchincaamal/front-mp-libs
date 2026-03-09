import type { components } from "./skeleton.component"

export interface SkeletonProps {
  type?: keyof typeof components
}
