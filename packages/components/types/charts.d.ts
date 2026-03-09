import type {
  ChartType,
  DefaultDataPoint,
  ChartDatasetProperties,
  DeepPartial,
} from "chart.js"
import type { BarChartBgColor } from "../src/lib/interfaces/charts"

declare module "chart.js" {
  export type ChartDataset<
    TType extends ChartType = ChartType,
    TData = DefaultDataPoint<TType>,
  > = DeepPartial<
    {
      [key in ChartType]: {
        type: key
      } & ChartTypeRegistry[key]["datasetOptions"]
    }[TType]
  > &
    ChartDatasetProperties<TType, TData> & { bgColor: BarChartBgColor }

  export type AnyObject = Record<string, any>
  export type EmptyObject = Record<string, never>

  export type DeepPartial<T> = T extends Function
    ? T
    : T extends Array<infer U>
      ? _DeepPartialArray<U>
      : T extends object
        ? _DeepPartialObject<T>
        : T | undefined

  export type _DeepPartialArray<T> = Array<DeepPartial<T>>
  export type _DeepPartialObject<T> = { [P in keyof T]?: DeepPartial<T[P]> }

  export type DistributiveArray<T> = [T] extends [unknown] ? Array<T> : never

  // https://stackoverflow.com/a/50375286
  export type UnionToIntersection<U> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type AllKeys<T> = T extends any ? keyof T : never

  export type PickType<T, K extends AllKeys<T>> = T extends { [k in K]?: any }
    ? T[K]
    : undefined

  export type Merge<T extends object> = {
    [k in AllKeys<T>]: PickType<T, k>
  }
}
