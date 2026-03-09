import { classNames } from "@/utils/classNames"
import { TYPOGRAPHY_CLASSES } from "@/constants/list"
import type { EmptyStateProps } from "./list.types"

/**
 * Empty state component when list has no items
 */
export const EmptyState = ({ message, size }: EmptyStateProps) => {
  return (
    <li
      className={classNames(
        "flex items-center justify-center h-full text-gray-9",
        TYPOGRAPHY_CLASSES[size]
      )}
    >
      {message}
    </li>
  )
}
