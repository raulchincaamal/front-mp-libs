import { useEffect, useState } from "react"
import type { StepsProps, StepContent } from "./steps.types"
import { StepButton } from "./step.button"
import { StepsList } from "./steps.list"
import { useBreakpoint } from "@/hooks"
import { classNames } from "@/utils/classNames"
import {
  calculateTotalVisibleSteps,
  findCurrentStepIndex,
  handleNavigateLeft,
  handleNavigateRight,
  isLeftButtonDisabled,
  isRightButtonDisabled,
  ALIGN_CLASSES,
} from "./steps.functions"

/**
 * Steps component that displays a navigable flow map of steps.
 *
 * Presents a sequence of steps with arrow button navigation, adapting responsively
 * to screen size to show the appropriate number of visible steps. Includes functionality
 * to detect the current step and automatically center the view on it.
 *
 * Features:
 * - Navigation with left/right arrow buttons
 * - Responsive design with breakpoints (xs:1, sm:2, md:3, lg:4 visible steps)
 * - Automatic current step detection
 * - Size and style customization
 * - Visual separators between steps
 *
 * @component
 * @param {StepsProps} props - Component properties
 * @param {StepContent[]} props.steps - Array of steps to display in the navigation flow
 * @param {Size} [props.size='md'] - Component size ('sm' | 'md' | 'lg')
 * @param {string} [props.className] - Additional CSS classes for customization
 * @returns {JSX.Element} The complete rendered Steps component
 *
 * @example
 * ```tsx
 * // Basic usage with simple steps
 * const steps = [
 *   { id: "1", name: "Start", status: "COMPLETE", href: "/step/1" },
 *   { id: "2", name: "Process", status: "CURRENT", href: "/step/2" },
 *   { id: "3", name: "End", status: "PENDING", href: "/step/3" }
 * ]
 * <Steps steps={steps} />
 * ```
 *
 * @example
 * ```tsx
 * // With custom size
 * <Steps steps={steps} size="lg" />
 * ```
 *
 * @example
 * ```tsx
 * // With custom classes
 * <Steps steps={steps} className="my-4 shadow-lg" />
 * ```
 *
 * @see {@link StepsList} for rendering the list of steps
 * @see {@link StepButton} for navigation buttons
 */
const Steps = ({
  steps,
  size = "md",
  className = "",
  withNavigation = true,
  align = "center",
}: StepsProps) => {
  const { xs, sm, md, lg } = useBreakpoint()
  const [totalVisibleSteps, setTotalVisibleSteps] = useState(() =>
    calculateTotalVisibleSteps(lg, md, sm, xs)
  )

  // Separate scroll position from current step index
  const currentStepIndex = findCurrentStepIndex(steps)
  const [scrollIndex, setScrollIndex] = useState(() => {
    // Initialize scroll to show current step
    const total = calculateTotalVisibleSteps(lg, md, sm, xs)
    const maxScroll = Math.max(0, steps.length - total)
    return Math.min(currentStepIndex, maxScroll)
  })
  const [visibleSteps, setVisibleSteps] = useState<StepContent[]>([])

  // Adjust visible steps count based on breakpoint
  useEffect(() => {
    setTotalVisibleSteps(calculateTotalVisibleSteps(lg, md, sm, xs))
  }, [xs, sm, md, lg])

  // Update visible steps slice
  useEffect(() => {
    const endIndex = Math.min(scrollIndex + totalVisibleSteps, steps.length)
    setVisibleSteps(steps.slice(scrollIndex, endIndex))
  }, [scrollIndex, steps, totalVisibleSteps])

  const handleLeftButtonClick = () =>
    setScrollIndex(handleNavigateLeft(scrollIndex))
  const handleRightButtonClick = () =>
    setScrollIndex(handleNavigateRight(scrollIndex))
  const disableLeftButton = isLeftButtonDisabled(scrollIndex)
  const disableRightButton = isRightButtonDisabled(
    scrollIndex,
    steps.length,
    totalVisibleSteps
  )

  return (
    <div
      className={classNames(
        "flex flex-row items-center w-full gap-4",
        withNavigation ? "justify-between" : ALIGN_CLASSES[align],
        { [className]: className }
      )}
    >
      {withNavigation && (
        <StepButton
          arrow="left"
          disabled={disableLeftButton}
          onClick={handleLeftButtonClick}
          size={size}
        />
      )}
      <StepsList visibleSteps={visibleSteps} size={size} />
      {withNavigation && (
        <StepButton
          arrow="right"
          disabled={disableRightButton}
          onClick={handleRightButtonClick}
          size={size}
        />
      )}
    </div>
  )
}

export default Steps
