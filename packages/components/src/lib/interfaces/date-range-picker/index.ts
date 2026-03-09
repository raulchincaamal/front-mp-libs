import type { Direction } from "../common"

export type DateSelectedTuple = [string, string]

export interface IDateRangePicker {
  disabled?: boolean
  label?: string
  layout?: Direction
  defaultValues?: string[]
  onChange: (dateSelected: DateSelectedTuple) => void
}
