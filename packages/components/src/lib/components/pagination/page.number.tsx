import { motion } from "motion/react"
import { classNames } from "@/utils/classNames"
import { TYPOGRAPHY_CLASSES } from "@/constants/common"
import { BUTTON_SIZE_CLASSES } from "@/constants/pagination"
import type { PageNumberProps } from "./pagination.types"

/**
 * Individual page number button component
 */
export const PageNumber = ({
  pageNumber,
  isActive,
  onPageChange,
  size,
}: PageNumberProps) => {
  return (
    <motion.button
      key={pageNumber}
      whileHover={{ scale: isActive ? 1 : 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onPageChange(pageNumber)}
      className={classNames(
        BUTTON_SIZE_CLASSES[size],
        TYPOGRAPHY_CLASSES[size],
        "flex items-center justify-center rounded-md border transition-colors duration-200",
        {
          "bg-primary-blue text-white border-primary-blue": isActive,
          "border-gray-6 hover:bg-gray-3 active:bg-gray-4": !isActive,
        }
      )}
      aria-label={`Page ${pageNumber}`}
      aria-current={isActive ? "page" : undefined}
    >
      {pageNumber}
    </motion.button>
  )
}
