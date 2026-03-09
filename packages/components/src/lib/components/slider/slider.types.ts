import type { Slider as SliderPrimitive } from "radix-ui"

export interface SliderProps extends React.ComponentProps<
  typeof SliderPrimitive.Root
> {
  /**
   * Custom CSS classes for different parts of the component
   */
  classNames?: {
    /** Class for the root container */
    root?: string
    /** Class for the track */
    track?: string
    /** Class for the range (filled portion) */
    range?: string
    /** Class for the thumb */
    thumb?: string
    /** Class for the labels container */
    labels?: string
    /** Class for start label */
    startLabelClass?: string
    /** Class for end label */
    endLabelClass?: string
  }
  /**
   * Range (filled portion) color
   * @default "primary" (primary blue)
   */
  rangeColor?: "primary" | "success" | "warning" | "error" | "info"
  /**
   * Custom CSS class for the range color (takes priority over rangeColor)
   */
  customRangeClass?: string
  /**
   * Slider size
   * @default "md"
   */
  size?: "sm" | "md" | "lg" | "xl"
  /**
   * Show min/max labels
   * @default false
   */
  showLabels?: boolean
  /**
   * Format function for labels
   */
  formatLabel?: (value: number) => string
}
