import type { ReactNode } from "react"
import type { HTMLMotionProps } from "framer-motion"
import type { Position, Size } from "@/interfaces/common"

export type Variants =
  | "default"
  | "primary"
  | "secondary"
  | "text"
  | "danger"
  | "withoutColor"

export type CursorType = "pointer" | "default" | "not-allowed" | "wait" | "text"

export type DirectionLoading = Extract<Position, "left" | "right">

export interface IconProps {
  icon?: ReactNode
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

export interface BaseButtonProps extends HTMLMotionProps<"button"> {
  variant?: Variants
  size?: Size
  children?: ReactNode
  isLoading?: boolean
  positionLoading?: DirectionLoading
  cursor?: CursorType
}

export type ButtonProps = BaseButtonProps & IconProps
