import { Progress as ProgressPrimitive } from "radix-ui"
import { classNames as cn } from "@/utils"
import type { ProgressProps } from "./progress.types"
import { sizeClasses, colorClasses } from "@/constants/progress"
import { motion } from "motion/react"

/**
 * Progress component that displays a visual progress bar.
 *
 * Uses Radix UI as a base to provide an accessible implementation
 * of a progress bar. Supports different sizes, customizable colors,
 * and the option to show the percentage as a label.
 *
 * Main features:
 * - Accessible: Based on Radix UI with full ARIA support
 * - Customizable: Configurable colors and sizes
 * - Flexible: Supports custom CSS classes
 * - Primary blue color by default
 * - Option to show percentage label
 *
 * @example
 * ```tsx
 * <Progress value={75} />
 * <Progress value={50} indicatorColor="success" size="lg" showLabel />
 * <Progress value={30} customIndicatorClass="bg-purple-500" />
 * ```
 */
const Progress = ({
  value = 0,
  classNames,
  indicatorColor = "primary",
  customIndicatorClass,
  size = "md",
  showLabel = false,
  labelClassName,
  onAnimationComplete,
  ...props
}: ProgressProps) => {
  return (
    <div className="w-full">
      <ProgressPrimitive.Root
        className={cn(
          "relative w-full overflow-hidden rounded-full bg-gray-200",
          sizeClasses[size],
          classNames?.root
        )}
        value={value}
        {...props}
      >
        <ProgressPrimitive.Indicator asChild>
          <motion.div
            className={cn(
              "size-full",
              customIndicatorClass || colorClasses[indicatorColor],
              classNames?.indicator
            )}
            transition={{
              duration: 3,
              delay: 0.5,
              ease: "easeInOut",
            }}
            initial={{ x: "-100%" }}
            animate={{ x: `-${100 - (value || 0)}%` }}
            onAnimationComplete={onAnimationComplete}
          />
        </ProgressPrimitive.Indicator>
      </ProgressPrimitive.Root>
      {showLabel && (
        <div
          className={cn(
            "mt-1 text-right text-sm text-gray-600",
            labelClassName
          )}
        >
          {value}%
        </div>
      )}
    </div>
  )
}

export default Progress
