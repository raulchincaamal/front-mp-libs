import { Slider as SliderPrimitive } from "radix-ui"
import { classNames as cn } from "@/utils"
import type { SliderProps } from "./slider.types"
import { sizeClasses, colorClasses, thumbSizeClasses } from "@/constants/slider"

/**
 * Slider component that allows users to select a value from a range.
 *
 * Uses Radix UI as a base to provide an accessible implementation
 * of a slider. Supports different sizes, customizable colors,
 * optional labels, and maintains all native Radix UI Slider properties.
 *
 * Main features:
 * - Accessible: Based on Radix UI with full ARIA support
 * - Customizable: Configurable colors and sizes
 * - Flexible: Supports custom CSS classes
 * - Primary blue color by default
 * - Optional min/max labels with custom formatting
 * - All Radix UI Slider props supported
 *
 * @example
 * ```tsx
 * <Slider defaultValue={[50]} />
 * <Slider defaultValue={[1500]} min={1000} max={3000} showLabels formatLabel={(v) => `$${v.toLocaleString()}`} />
 * <Slider defaultValue={[50]} rangeColor="success" size="lg" />
 * <Slider defaultValue={[50]} customRangeClass="bg-purple-500" />
 * ```
 */
const Slider = ({
  classNames,
  rangeColor = "primary",
  customRangeClass,
  size = "md",
  showLabels = false,
  formatLabel,
  min = 0,
  max = 100,
  ...props
}: SliderProps) => {
  const getLabel = (labelValue: number): string => {
    if (formatLabel) {
      return formatLabel(labelValue)
    }
    return labelValue.toString()
  }

  return (
    <div className="w-full">
      <SliderPrimitive.Root
        className={cn(
          "relative flex items-center select-none touch-none w-full",
          classNames?.root
        )}
        min={min}
        max={max}
        {...props}
      >
        <SliderPrimitive.Track
          className={cn(
            "relative grow rounded-full bg-gray-200",
            sizeClasses[size],
            classNames?.track
          )}
        >
          <SliderPrimitive.Range
            className={cn(
              "absolute rounded-full h-full",
              customRangeClass || colorClasses[rangeColor],
              classNames?.range
            )}
          />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
          className={cn(
            "block rounded-full bg-white border-2 border-primary-blue shadow-md hover:shadow-lg",
            "focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2",
            "transition-shadow cursor-pointer",
            thumbSizeClasses[size],
            classNames?.thumb
          )}
        />
      </SliderPrimitive.Root>
      {showLabels && (
        <div
          className={cn(
            "flex justify-between mt-2 text-sm text-gray-600",
            classNames?.labels
          )}
        >
          <span className={classNames?.startLabelClass}>{getLabel(min)}</span>
          <span className={classNames?.endLabelClass}>{getLabel(max)}</span>
        </div>
      )}
    </div>
  )
}

export default Slider
