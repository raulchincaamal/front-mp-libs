import type { _DeepPartialObject, TitleOptions } from "chart.js"
import type { BarChartColor, Direction } from "../common"

interface IIndicatorLabel {
  label: string
  color: string
}

export interface IIndicatorChartProps {
  labels: IIndicatorLabel[]
}

interface ICommonChartProps {
  labels?: string[]
  values?: number[]
  tooltipLabel?: string
}
export type IDoughnutChartProps = ICommonChartProps

export type IHorizontalChartProps = ICommonChartProps

export type BarChartBgColor =
  | "default"
  | "orange"
  | "teal"
  | "red"
  | "green"
  | "blue"
  | "purple"
  | "pink"
  | "yellow"

export interface ITitleOptions {
  align: TitleOptions["align"]
  size: number
  weight: number
}

export interface IBarChart {
  title?: string
  labels?: string[]
  values?: number[]
  tooltipLabel?: string
  direction?: Direction
  bgColor?: BarChartBgColor
  showGrid?: boolean
  titleOptions?: ITitleOptions
  textColor: BarChartColor
  className?: string
  /**
   * Only work 👀 with `direction` is `vertical`
   */
  showTopLabel?: boolean
}

export interface ICanvasPoints {
  x: number
  y: number
  w: number
  h: number
  radius: [number, number, number, number]
}

export type GetTitleFunction = (
  value: string,
  titleOptions: ITitleOptions & { textColor: BarChartColor }
) => _DeepPartialObject<TitleOptions>
