import type { Direction, ICommonProps } from "../common"

export type Align = "left" | "right" | "center"
export interface IDividerProps extends ICommonProps {
  /**
   *
   * Tailwind className value
   *
   * 👀 Only work when `type` is `horizontal`
   *
   * default value `w-full` -> `100%`
   */
  width?: string
  type?: Direction
  /**
   * Position of title inside divider
   *
   * 👀 Only work when `type` is `horizontal`
   */
  align?: Align
  children?: React.ReactNode
}
