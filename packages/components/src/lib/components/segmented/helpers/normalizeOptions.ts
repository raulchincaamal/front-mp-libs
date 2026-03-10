import type {
  SegmentedOptions,
  SegmentedOption,
  SegmentedValue,
} from "../segmented.types"

export const normalizeOptions = <T = SegmentedValue>(
  options: SegmentedOptions<T>
): SegmentedOption<T>[] => {
  return options.map(option => {
    if (typeof option === "string" || typeof option === "number") {
      return {
        label: option,
        value: option as T,
      }
    }
    return option as SegmentedOption<T>
  })
}
