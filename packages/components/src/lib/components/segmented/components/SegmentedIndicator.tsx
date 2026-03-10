import { motion } from "motion/react"
import { classNames as classMerge } from "@/utils/classNames"
import type { SegmentedIndicatorProps } from "../segmented.types"

const BORDER_RADIUS: Record<string, string> = {
  sm: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-lg",
}

export const SegmentedIndicator = ({
  indicatorStyle,
  vertical,
  size,
}: SegmentedIndicatorProps) => {
  const borderRadius = BORDER_RADIUS[size] || "rounded-lg"

  return (
    <motion.div
      initial={false}
      className={classMerge(
        "absolute bg-white shadow-md",
        borderRadius,
        vertical ? "left-1 right-1" : "top-1 bottom-1"
      )}
      animate={{
        left: vertical ? 4 : indicatorStyle.x,
        top: vertical ? indicatorStyle.y : 4,
        width: vertical ? "calc(100% - 8px)" : indicatorStyle.width,
        height: vertical ? indicatorStyle.height : "calc(100% - 8px)",
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  )
}
