import type { ReactNode } from "react"
import type { StepStatus } from "../common"

export interface ICarouselItem {
  id: string
  image?: string
  qrCode?: string
  description?: string
  qrColor?: string
  extra?: ReactNode
}

export type CarouselData = Omit<ICarouselItem, "index">

export interface ICarouselStepProps {
  id?: string
  position: number
  name: string
  status?: StepStatus
}

export interface ICarouselStepsProps {
  current: number
  steps: Omit<ICarouselStepProps, "status">[]
  isLast: boolean
}

export interface ISlideAnimationProps {
  className?: string
  slideId?: string
  children?: ReactNode
}

export interface ISlidesProps {
  current: number
  items: CarouselData[]
  steps: React.ReactNode
}

export interface IInstructionsCarouselProps {
  items: CarouselData[]
  className?: string
}
