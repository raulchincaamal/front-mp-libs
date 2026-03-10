import { useState, useEffect, useMemo } from "react"
import { normalizeOptions } from "../helpers/normalizeOptions"
import type { SegmentedOptions, SegmentedValue } from "../segmented.types"

export const useActiveIndex = (
  options: SegmentedOptions,
  currentValue: SegmentedValue
) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const normalizedOptions = useMemo(() => normalizeOptions(options), [options])

  useEffect(() => {
    const index = normalizedOptions.findIndex(
      option => option.value === currentValue
    )
    if (index !== -1) {
      setActiveIndex(index)
    }
  }, [currentValue, normalizedOptions])

  return { activeIndex, setActiveIndex, normalizedOptions }
}
