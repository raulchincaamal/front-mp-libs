import type { ICommonProps, Size } from "../common"

export type Type =
  | "primary"
  | "secondary"
  | "text"
  | "default"
  | "danger"
  | "empty"
export type IconPosition = "left" | "right"

export interface IColorVariants {
  bgColor?: string
  color: string
}

export interface IButton extends ICommonProps {
  children?: React.ReactNode
  icon?: React.ReactNode
  type?: Type
  size?: Size
  disabled?: boolean
  onClick?: () => void
  iconPosition?: IconPosition
  form?: string
  htmlType?: HTMLButtonElement["type"]
}
