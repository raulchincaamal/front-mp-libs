import type { Key, ReactNode } from "react"
import type { StepStatus } from "../common"

export interface IStep {
  key?: Key
  icon: ReactNode
  description: string
}

export interface IContentStep {
  id: string
  name: string
  href?: string
  status: StepStatus
}

export interface ISteps {
  steps: IContentStep[]
}
