import type { ReactNode } from "react"
import type { HTMLMotionProps } from "motion/react"
import type { Size } from "@/interfaces/common"

export type SegmentedValue = string | number

export interface SegmentedOption {
  label: ReactNode
  value: SegmentedValue
  icon?: ReactNode
  disabled?: boolean
  tooltip?: string
}

export type SegmentedOptions = (SegmentedValue | SegmentedOption)[]

export interface SegmentedProps extends Omit<
  HTMLMotionProps<"div">,
  "onChange" | "defaultValue"
> {
  options: SegmentedOptions
  value?: SegmentedValue
  defaultValue?: SegmentedValue
  onChange?: (value: SegmentedValue) => void
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

export interface SegmentedOptionProps {
  option: SegmentedOption
  index: number
  isActive: boolean
  disabled: boolean
  vertical: boolean
  size: Size
  onClick: (option: SegmentedOption, index: number) => void
}
