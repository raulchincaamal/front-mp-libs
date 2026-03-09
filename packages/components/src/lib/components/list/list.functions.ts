import { useMemo } from "react"
import type { ListItem } from "./list.types"
import { LIST_HEIGHTS } from "@/constants/list"
import type { Size } from "@/types/common"

/**
 * Calculate paginated items based on current page and items per page
 *
 * @param items - Array of all items
 * @param withPagination - Whether pagination is enabled
 * @param currentPage - Current page number (1-indexed)
 * @param itemsPerPage - Number of items per page
 * @returns Paginated array of items
 */
export const usePaginatedItems = (
  items: ListItem[],
  withPagination: boolean,
  currentPage: number,
  itemsPerPage: number
) => {
  return useMemo(() => {
    if (!withPagination) return items

    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return items.slice(startIndex, endIndex)
  }, [items, withPagination, currentPage, itemsPerPage])
}

/**
 * Calculate total number of pages
 *
 * @param totalItems - Total number of items
 * @param itemsPerPage - Number of items per page
 * @returns Total number of pages
 */
export const useTotalPages = (totalItems: number, itemsPerPage: number) => {
  return useMemo(() => {
    return Math.ceil(totalItems / itemsPerPage)
  }, [totalItems, itemsPerPage])
}

/**
 * Get container height based on size or custom height
 *
 * @param size - Size of the list component
 * @param customHeight - Optional custom height
 * @returns Height value
 */
export const getContainerHeight = (size: Size, customHeight?: string) => {
  return customHeight || LIST_HEIGHTS[size]
}

/**
 * Create page change handler
 *
 * @param onPageChange - Optional callback function for page changes
 * @returns Handler function
 */
export const createPageChangeHandler = (
  onPageChange?: (page: number) => void
) => {
  return (page: number) => {
    if (onPageChange) {
      onPageChange(page)
    }
  }
}
