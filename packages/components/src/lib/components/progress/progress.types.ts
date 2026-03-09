import type { Progress as ProgressPrimitive } from "radix-ui"

export interface ProgressProps extends React.ComponentProps<
  typeof ProgressPrimitive.Root
> {
  /**
   * Current progress value (0-100)
   */
  value?: number
  /**
   * Custom CSS classes for different parts of the component
   */
  classNames?: {
    /** Class for the root container */
    root?: string
    /** Class for the progress indicator */
    indicator?: string
  }
  /**
   * Progress indicator color
   * @default "primary" (primary blue)
   */
  indicatorColor?: "primary" | "success" | "warning" | "error" | "info"
  /**
   * Custom CSS class for the indicator color (takes priority over indicatorColor)
   */
  customIndicatorClass?: string
  /**
   * Progress bar height
   * @default "md"
   */
  size?: "sm" | "md" | "lg"
  /**
   * Show the progress percentage as text
   * @default false
   */
  showLabel?: boolean
  /**
   * CSS class for the percentage label
   */
  labelClassName?: string
  onAnimationComplete?: () => void
}
