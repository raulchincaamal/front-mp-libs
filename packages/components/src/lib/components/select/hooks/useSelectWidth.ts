import { useState, useEffect, useRef } from "react"

/**
 * Hook to manage Select trigger width
 *
 * Calculates and maintains the trigger element width to apply it to the dropdown,
 * ensuring both have the same width.
 *
 * @param {string} [className] - CSS class that may affect trigger width
 * @returns {Object} Object with calculated width and trigger reference
 * @returns {number} triggerWidth - Trigger width in pixels
 * @returns {React.RefObject<HTMLButtonElement>} triggerRef - Reference to trigger element
 *
 * @example
 * ```tsx
 * const { triggerWidth, triggerRef } = useSelectWidth("w-full")
 *
 * <Trigger ref={triggerRef} />
 * <Content width={triggerWidth} />
 * ```
 */
export const useSelectWidth = (className?: string) => {
  const [triggerWidth, setTriggerWidth] = useState<number>(0)
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (triggerRef.current) {
      setTriggerWidth(triggerRef.current.offsetWidth)
    }
  }, [className])

  return {
    triggerWidth,
    triggerRef,
  }
}
