import type { ReactNode } from "react"
import type { ICommonProps } from "../common"

export type Position = "top" | "right" | "bottom" | "left"

export type triggerTooltip = "hover" | "click"

export interface ITooltip extends ICommonProps {
  content?: string | React.ReactNode
  position?: Position
  trigger?: triggerTooltip
  arrowColor?: string
  children: ReactNode
  colorTooltip?: string
}
