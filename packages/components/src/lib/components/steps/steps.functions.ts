import type { StepContent } from "./steps.types"

/**
 * Calculates the number of visible steps based on the active breakpoint.
 *
 * Determines how many steps should be displayed simultaneously based on
 * screen size breakpoints, prioritizing larger sizes.
 *
 * @param {boolean} lg - Large breakpoint (≥1024px)
 * @param {boolean} md - Medium breakpoint (≥768px)
 * @param {boolean} sm - Small breakpoint (≥640px)
 * @param {boolean} xs - Extra small breakpoint (<640px)
 * @returns {number} Number of steps to display (1-4, default: 3)
 *
 * @example
 * ```typescript
 * const total = calculateTotalVisibleSteps(true, true, true, false)
 * // Returns: 4 (lg breakpoint is active)
 * ```
 */
export const calculateTotalVisibleSteps = (
  lg: boolean,
  md: boolean,
  sm: boolean,
  xs: boolean
): number => {
  if (lg) return 4
  if (md) return 3
  if (sm) return 2
  if (xs) return 1
  return 3
}

/**
 * Finds the index of the step marked as current.
 *
 * Searches for the step with status "CURRENT" in the array and returns its
 * zero-based index. If no current step is found, returns 0.
 *
 * @param {StepContent[]} steps - Complete array of steps
 * @returns {number} Zero-based index of the current step, or 0 if not found
 *
 * @example
 * ```typescript
 * const steps = [
 *   { id: "1", status: "COMPLETE" },
 *   { id: "2", status: "CURRENT" },
 *   { id: "3", status: "PENDING" }
 * ]
 * const index = findCurrentStepIndex(steps)
 * // Returns: 1
 * ```
 */
export const findCurrentStepIndex = (steps: StepContent[]): number => {
  const currentStep = steps.find(step => step.status === "CURRENT")
  return currentStep ? Number(currentStep.id) - 1 : 0
}

/**
 * Calculates which steps should be visible based on current index and total visible.
 *
 * Determines the slice of steps to display, ensuring exactly totalVisibleSteps
 * are shown when possible. Adjusts the start index to prevent empty space at the end.
 *
 * @param {StepContent[]} steps - Complete array of all steps
 * @param {number} currentIndex - Current zero-based index position
 * @param {number} totalVisibleSteps - Number of steps to display simultaneously
 * @returns {StepContent[]} Array of visible steps to render
 *
 * @example
 * ```typescript
 * const allSteps = [step1, step2, step3, step4, step5]
 * const visible = calculateVisibleSteps(allSteps, 2, 3)
 * // Returns: [step3, step4, step5]
 * ```
 */
export const calculateVisibleSteps = (
  steps: StepContent[],
  currentIndex: number,
  totalVisibleSteps: number
): StepContent[] => {
  const startIndex =
    currentIndex + totalVisibleSteps > steps.length
      ? Math.max(0, steps.length - totalVisibleSteps)
      : currentIndex
  return steps.slice(
    startIndex,
    Math.min(startIndex + totalVisibleSteps, steps.length)
  )
}

/**
 * Determines if the left navigation button should be disabled.
 *
 * The left button is disabled when at the beginning of the steps list
 * to prevent navigation before the first step.
 *
 * @param {number} currentIndex - Current zero-based index position
 * @returns {boolean} true if the button should be disabled
 *
 * @example
 * ```typescript
 * const disabled = isLeftButtonDisabled(0) // Returns: true
 * const enabled = isLeftButtonDisabled(3)  // Returns: false
 * ```
 */
export const isLeftButtonDisabled = (currentIndex: number): boolean =>
  currentIndex === 0

/**
 * Determines if the right navigation button should be disabled.
 *
 * The right button is disabled when there are no more steps to show
 * beyond the currently visible ones.
 *
 * @param {number} currentIndex - Current zero-based index position
 * @param {number} totalSteps - Total number of available steps
 * @param {number} totalVisibleSteps - Number of steps visible simultaneously
 * @returns {boolean} true if the button should be disabled
 *
 * @example
 * ```typescript
 * const disabled = isRightButtonDisabled(7, 10, 3) // Returns: true
 * const enabled = isRightButtonDisabled(2, 10, 3)  // Returns: false
 * ```
 */
export const isRightButtonDisabled = (
  currentIndex: number,
  totalSteps: number,
  totalVisibleSteps: number
): boolean => currentIndex >= totalSteps - totalVisibleSteps

/**
 * Handles navigation to the previous step.
 *
 * Decrements the current index by 1 to show the previous set of steps.
 * Should only be called when the left button is not disabled.
 *
 * @param {number} currentIndex - Current zero-based index position
 * @returns {number} New index after navigating left
 *
 * @example
 * ```typescript
 * const newIndex = handleNavigateLeft(5) // Returns: 4
 * ```
 */
export const handleNavigateLeft = (currentIndex: number): number =>
  currentIndex - 1

/**
 * Handles navigation to the next step.
 *
 * Increments the current index by 1 to show the next set of steps.
 * Should only be called when the right button is not disabled.
 *
 * @param {number} currentIndex - Current zero-based index position
 * @returns {number} New index after navigating right
 *
 * @example
 * ```typescript
 * const newIndex = handleNavigateRight(3) // Returns: 4
 * ```
 */
export const handleNavigateRight = (currentIndex: number): number =>
  currentIndex + 1

export const ALIGN_CLASSES: Record<string, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
}
