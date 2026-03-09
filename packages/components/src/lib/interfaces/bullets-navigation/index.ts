import type { StepStatus } from "../common"

export interface ICommonNavigationStep {
  description?: string
  status?: Exclude<StepStatus, "PENDING">
}

export interface IBulletNavigationStep extends ICommonNavigationStep {
  name: string
  steps?: Array<Required<ICommonNavigationStep>>
}

export interface IBulletsNavigationProps {
  steps: IBulletNavigationStep[]
  className?: string
}
