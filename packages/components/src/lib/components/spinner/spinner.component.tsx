/**
 * Utility function to concatenate Tailwind and custom classes.
 *
 * @see https://tailwindcss.com/docs/utility-first
 */
import { classNames } from "@/utils/classNames"

/**
 * SpinnerProps and SpinnerSizeMap are imported for type safety and size mapping.
 *
 * @see {@link SpinnerProps} for prop types
 * @see {@link SpinnerSizeMap} for size mapping
 */
import type { SpinnerProps } from "./spinner.types"
import { SpinnerSizeMap } from "./spinner.types"

/**
 * Spinner component for indicating loading or processing states.
 *
 * This component displays a spinning animation and optional text below it. The spinner's size and color can be customized via props.
 *
 * @component
 * @param {SpinnerProps} props - The props for the Spinner component
 * @param {"sm" | "md" | "lg" | "xl"} [props.size="sm"] - Spinner size (small, medium, large, extra large)
 * @param {string} [props.text] - Optional text to display below the spinner
 * @param {string} [props.className] - Additional custom classes for the spinner element
 * @param {string} [props.color="border-t-blue-500"] - Tailwind class for the spinner's top border color
 * @returns {JSX.Element} The rendered Spinner component
 *
 * @example
 * ```tsx
 * <Spinner size="md" text="Loading..." color="border-t-red-500" />
 * ```
 *
 * @see {@link SpinnerProps} for prop details
 */
const Spinner = ({
  size = "sm",
  text,
  className,
  color = "border-t-blue-500",
}: SpinnerProps) => (
  <div className="grid gap-4 place-content-center">
    <div className="flex flex-col items-center">
      <output
        className={classNames(
          SpinnerSizeMap[size],
          "animate-spin rounded-full border-4",
          color,
          className
        )}
        aria-busy="true"
      ></output>
      {Boolean(text) && <span className="flex justify-center">{text}</span>}
    </div>
  </div>
)

export default Spinner
