import type { StepButtonProps, Arrow } from "./steps.types"
import { LeftIcon, RightIcon } from "@/assets/icons"
import type { ReactNode } from "react"
import { classNames } from "@/utils/classNames"
import { STEP_BUTTON_SIZE_CLASSES } from "@/constants/steps"

/**
 * Navigation button component for Steps.
 *
 * Provides navigation buttons with arrows to move between steps,
 * with conditional styles based on enabled/disabled state. Includes
 * hover effects and accessibility features.
 *
 * @component
 * @param {StepButtonProps} props - Button component properties
 * @param {boolean} [props.disabled] - Whether the button is disabled
 * @param {MouseEventHandler<HTMLButtonElement>} [props.onClick] - Click event handler
 * @param {Arrow} props.arrow - Arrow direction ('left' for left or 'right' for right)
 * @param {Size} props.size - Button size ('sm' | 'md' | 'lg')
 * @returns {JSX.Element} Rendered navigation button
 *
 * @example
 * ```tsx
 * <StepButton
 *   arrow="right"
 *   disabled={false}
 *   onClick={() => console.log('Next step')}
 *   size="md"
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Disabled previous button
 * <StepButton
 *   arrow="left"
 *   disabled={true}
 *   onClick={handlePrevious}
 *   size="lg"
 * />
 * ```
 */
export const StepButton = ({
  disabled,
  onClick,
  arrow,
  size,
}: StepButtonProps) => {
  const iconClassName = `${disabled ? "text-gray-6" : "text-primary-blue"}`

  const directionButton: Record<Arrow, ReactNode> = {
    right: <RightIcon className={iconClassName} />,
    left: <LeftIcon className={iconClassName} />,
  }

  const buttonClasses = classNames(
    "flex items-center justify-center rounded-md border disabled:border-zinc-300 disabled:bg-neutral-100 disabled:text-stone-300 shadow-none transition-colors duration-300 ease-linear bg-white border-gray-5 text-gray-4 transitions-all easy-out hover:text-blue-900 hover:border-blue-900",
    STEP_BUTTON_SIZE_CLASSES[size]
  )

  return (
    <button
      aria-label={`stepButton-${arrow}`}
      type="button"
      className={buttonClasses}
      {...{ disabled, onClick }}
    >
      {directionButton[arrow]}
    </button>
  )
}

export default StepButton
