import type { StepContent } from "./steps.types"
import { DoneIcon } from "@/assets/icons"
import { classNames } from "@/utils/classNames"
import {
  STEP_INDICATOR_SIZE_CLASSES,
  STEP_TEXT_SIZE_CLASSES,
  STEP_ICON_SIZE_CLASSES,
} from "@/constants/steps"

/**
 * Individual step component for the Steps flow.
 *
 * Displays a step with its visual state (completed, current, pending) including
 * a circular indicator with the step ID or a completion icon, and the step name.
 * Supports clickable steps via href prop.
 *
 * Visual states:
 * - COMPLETE: Shows checkmark icon with blue border
 * - CURRENT: Shows step ID with blue background
 * - PENDING: Shows step ID with gray border
 * - UPCOMING: Shows step ID with gray styling
 *
 * @component
 * @param {StepContent} props - Step component properties
 * @param {string} props.id - Unique step identifier displayed in the indicator
 * @param {string} props.name - Descriptive step name shown next to indicator
 * @param {StepStatus} props.status - Current step status determining visual style
 * @param {string} [props.href] - Optional URL to make the step clickable
 * @param {Size} [props.size='md'] - Step size ('sm' | 'md' | 'lg')
 * @returns {JSX.Element} Rendered step as a clickable link
 *
 * @example
 * ```tsx
 * <StepItem
 *   id="1"
 *   name="Initial Setup"
 *   status="CURRENT"
 *   href="/step/1"
 *   size="md"
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Completed step
 * <StepItem
 *   id="1"
 *   name="Registration"
 *   status="COMPLETE"
 *   href="/steps/registration"
 * />
 * ```
 */
export const StepItem = ({
  id,
  name,
  status,
  href,
  size = "md",
}: StepContent) => {
  const stepStyle = classNames(
    "flex items-center justify-center rounded-full",
    STEP_INDICATOR_SIZE_CLASSES[size],
    {
      "border border-primary-blue": status === "COMPLETE",
      "bg-primary-blue": status === "CURRENT",
      "border border-gray-6": status === "PENDING",
    }
  )

  const stepStyleName = classNames(
    "font-medium",
    STEP_TEXT_SIZE_CLASSES[size],
    {
      "text-primary-blue": status === "CURRENT",
      "text-gray-6": status === "PENDING",
    }
  )

  const stepStyleId = classNames("font-medium", STEP_TEXT_SIZE_CLASSES[size], {
    "text-white": status === "CURRENT",
    "text-gray-6": status === "PENDING",
  })

  return (
    <a
      href={href}
      className={classNames(
        "flex gap-2 font-medium items-center",
        STEP_TEXT_SIZE_CLASSES[size]
      )}
    >
      <span className={stepStyle}>
        {status === "COMPLETE" ? (
          <DoneIcon
            className={classNames(
              "text-primary-blue",
              STEP_ICON_SIZE_CLASSES[size]
            )}
            aria-hidden="true"
          />
        ) : (
          <span className={stepStyleId}>{id}</span>
        )}
      </span>
      <span className={stepStyleName}>{name}</span>
    </a>
  )
}

export default StepItem
