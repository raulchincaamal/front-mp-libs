import { motion } from "motion/react"
import { classNames } from "@/utils/classNames"
import { TYPOGRAPHY_CLASSES } from "@/constants/common"
import { BUTTON_SIZE_CLASSES } from "@/constants/pagination"
import type { PaginationButtonProps } from "./pagination.types"

/**
 * Navigation button component for pagination (Previous/Next)
 */
export const PaginationButton = ({
  onClick,
  disabled,
  size,
  label,
  children,
}: PaginationButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        BUTTON_SIZE_CLASSES[size],
        TYPOGRAPHY_CLASSES[size],
        "flex items-center justify-center rounded-md border border-gray-6",
        "transition-colors duration-200",
        "hover:bg-gray-3 active:bg-gray-4",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
      )}
      aria-label={label}
    >
      {children}
    </motion.button>
  )
}
