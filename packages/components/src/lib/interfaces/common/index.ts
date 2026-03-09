import type { CSSProperties, ReactNode } from "react"

export type Size = "sm" | "md" | "lg" | "xl"
export type Direction = "vertical" | "horizontal"
export type Position =
  | "center"
  | "top"
  | "right"
  | "bottom"
  | "left"
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left"

export type SelectOption<T> = {
  label: ReactNode
  value: T
}

export type GroupedSelectOption<T> = {
  group: ReactNode
  options: SelectOption<T>[]
}

export type OptionValue<T> = SelectOption<T>["value"]

export interface ICommonProps {
  id?: string
  className?: string
  onClick?(): void
  style?: CSSProperties
}

export interface IResponsive<T> {
  sm?: T
  md?: T
  lg?: T
  xl?: T
}

export type Generic<T> = T | [T, IResponsive<T>]

export type TGapAllowed =
  | 0
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12

export type HeightSpacing = 12 | 16 | 44 | 48

export type StepStatus = "COMPLETE" | "CURRENT" | "PENDING" | "UPCOMING"

export type RadialGradient = { start: `#${string}`; end: `#${string}` }

export type BarChartColor = "black" | "gray"

export interface PropsWithClassName<T = unknown> {
  className?: string
  classNames?: T
}

type ClassNamesFromKeys<K extends string> = {
  [P in K]?: string
}

export type ClassNameProps<K extends string = never> = {
  className?: string
  classNames?: ClassNamesFromKeys<K>
}

export type ClassNamesProps<K extends string = never> = Pick<
  ClassNameProps<K>,
  "classNames"
>

export interface CommonField<T> {
  name?: string
  onBlur?: () => void
  onChange?: (value?: T) => void
  value?: T
  disabled?: boolean
}
