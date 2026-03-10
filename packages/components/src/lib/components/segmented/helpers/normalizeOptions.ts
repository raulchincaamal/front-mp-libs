import type { SegmentedOptions, SegmentedOption } from "../segmented.types"

export const normalizeOptions = (
  options: SegmentedOptions
): SegmentedOption[] => {
  return options.map(option => {
    if (typeof option === "string" || typeof option === "number") {
      return {
        label: option,
        value: option,
      }
    }
    return option
  })
}
