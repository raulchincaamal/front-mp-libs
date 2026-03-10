import type { SegmentedValue } from "../segmented.types"

export const getCurrentValue = (
  defaultValue: SegmentedValue = "",
  value?: SegmentedValue
): SegmentedValue => {
  return value || defaultValue
}
