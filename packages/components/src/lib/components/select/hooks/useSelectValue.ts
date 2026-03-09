import { useState, useEffect } from "react"
import type { UseSelectValueProps } from "../select.types"

/**
 * Hook to manage Select selected value state
 *
 * Supports both controlled (value) and uncontrolled (defaultValue) patterns.
 * Synchronizes internal state with external value and provides a handler
 * for value changes.
 *
 * @param {UseSelectValueProps} props - Hook properties
 * @returns {Object} Object with current value and change handler
 * @returns {string | undefined} currentValue - Current selected value
 * @returns {Function} handleValueChange - Function to handle value changes
 *
 * @example
 * ```tsx
 * // Controlled usage
 * const { currentValue, handleValueChange } = useSelectValue({
 *   value: selectedValue,
 *   onValueChange: setSelectedValue
 * })
 *
 * // Uncontrolled usage
 * const { currentValue, handleValueChange } = useSelectValue({
 *   defaultValue: "option1",
 *   onValueChange: (value) => console.log(value)
 * })
 * ```
 */
export const useSelectValue = ({
  value,
  defaultValue,
  onValueChange,
}: UseSelectValueProps) => {
  const [internalValue, setInternalValue] = useState<string | undefined>(
    defaultValue
  )

  // Synchronize internalValue with external value when it changes
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value)
    }
  }, [value])

  const currentValue = value ?? internalValue

  // Handler for value change
  const handleValueChange = (newValue: string) => {
    if (value === undefined) {
      setInternalValue(newValue)
    }
    onValueChange?.(newValue)
  }

  return {
    currentValue,
    handleValueChange,
  }
}
