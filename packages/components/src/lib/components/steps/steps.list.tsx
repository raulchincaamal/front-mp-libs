import { RightIcon } from "@/assets/icons"
import { Flex } from "@/components"
import { STEP_GAP_SIZE_CLASSES } from "@/constants/steps"
import { StepItem } from "./step.item"
import type { StepContent } from "./steps.types"
import type { Size } from "@/types/common"

/**
 * StepsList component properties.
 *
 * @interface StepsListProps
 * @property {StepContent[]} visibleSteps - Array of currently visible steps to render
 * @property {Size} size - Step size ('sm' | 'md' | 'lg')
 */
interface StepsListProps {
  visibleSteps: StepContent[]
  size: Size
}

/**
 * Component that renders the list of visible steps with separators.
 *
 * Displays a horizontal sequence of steps with arrow icons as separators
 * between each step, except after the last one. Uses the Flex component for
 * layout and maintains consistent spacing based on the specified size.
 *
 * @component
 * @param {StepsListProps} props - Component properties
 * @param {StepContent[]} props.visibleSteps - Array of steps to display
 * @param {Size} props.size - Step size that determines spacing
 * @returns {JSX.Element} Rendered list of steps with separators
 *
 * @example
 * ```tsx
 * const visibleSteps = [
 *   { id: "1", name: "Step 1", status: "COMPLETE" },
 *   { id: "2", name: "Step 2", status: "CURRENT" }
 * ]
 * <StepsList visibleSteps={visibleSteps} size="md" />
 * ```
 *
 * @see {@link StepItem} for rendering each individual step
 */

export const StepsList = ({ visibleSteps, size }: StepsListProps) => {
  const gapSize = STEP_GAP_SIZE_CLASSES[size]

  return (
    <Flex gap={gapSize} justify="center">
      {visibleSteps.map((step, index) => (
        <Flex key={crypto.randomUUID()} gap={gapSize} align="center">
          <StepItem {...step} size={size} />
          {index + 1 !== visibleSteps.length && (
            <RightIcon className="text-gray-5" />
          )}
        </Flex>
      ))}
    </Flex>
  )
}
