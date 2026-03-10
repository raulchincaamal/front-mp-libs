import type { ReactNode } from "react"
import type { HTMLMotionProps } from "motion/react"
import type { Size } from "@/interfaces/common"

export type SegmentedValue = string | number

export interface SegmentedOption<T = SegmentedValue> {
  label: ReactNode
  value: T
  icon?: ReactNode
  disabled?: boolean
  tooltip?: string
}

export type SegmentedOptions<T = SegmentedValue> = (T | SegmentedOption<T>)[]

export interface SegmentedProps<T = SegmentedValue> extends Omit<
  HTMLMotionProps<"div">,
  "onChange" | "defaultValue"
> {
  options: SegmentedOptions<T>
  value?: T
  defaultValue?: T
  onChange?: (value: T) => void
  size?: Size
  disabled?: boolean
  vertical?: boolean
}

export interface IndicatorStyle {
  width: number
  height: number
  x: number
  y: number
}

export interface SegmentedIndicatorProps {
  indicatorStyle: IndicatorStyle
  vertical: boolean
  size: Size
}

export interface SegmentedOptionProps<T = unknown> {
  option: {
    value: T
    label?: ReactNode
    icon?: ReactNode
    disabled?: boolean
  }
  index: number
  isActive: boolean
  disabled: boolean
  vertical: boolean
  size: Size
  onClick: (
    option: {
      value: T
      label?: ReactNode
      icon?: ReactNode
      disabled?: boolean
    },
    index: number
  ) => void
}
