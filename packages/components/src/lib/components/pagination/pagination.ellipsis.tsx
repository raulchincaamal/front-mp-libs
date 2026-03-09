import { classNames } from "@/utils/classNames"
import { TYPOGRAPHY_CLASSES } from "@/constants/common"
import { BUTTON_SIZE_CLASSES } from "@/constants/pagination"
import type { EllipsisProps } from "./pagination.types"

/**
 * Ellipsis component for pagination gaps
 */
export const Ellipsis = ({ prevPage, nextPage, size }: EllipsisProps) => {
  return (
    <span
      key={`ellipsis-${prevPage}-${nextPage}`}
      className={classNames(
        BUTTON_SIZE_CLASSES[size],
        TYPOGRAPHY_CLASSES[size],
        "flex items-center justify-center"
      )}
    >
      ...
    </span>
  )
}
