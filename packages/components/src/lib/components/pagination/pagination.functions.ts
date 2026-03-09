import { MAX_VISIBLE_PAGES } from "@/constants/pagination"

/**
 * Generate array of page numbers to display with ellipsis
 *
 * @param currentPage - Current active page
 * @param totalPages - Total number of pages
 * @returns Array of page numbers and ellipsis markers
 */
export const getPageNumbers = (
  currentPage: number,
  totalPages: number
): (number | string)[] => {
  // Guard clause: Show all pages if few enough
  if (totalPages <= MAX_VISIBLE_PAGES) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  // Guard clause: Pages at the beginning (currentPage near start)
  if (currentPage <= 3) {
    return [1, 2, 3, 4, "...", totalPages]
  }

  // Guard clause: Pages at the end (currentPage near finish)
  if (currentPage >= totalPages - 2) {
    return [
      1,
      "...",
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ]
  }

  // Default case: Middle pages
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ]
}

/**
 * Create handler for previous page navigation
 *
 * @param currentPage - Current page number
 * @param onPageChange - Callback function
 * @returns Handler function
 */
export const createPreviousHandler = (
  currentPage: number,
  onPageChange: (page: number) => void
) => {
  return () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }
}

/**
 * Create handler for next page navigation
 *
 * @param currentPage - Current page number
 * @param totalPages - Total number of pages
 * @param onPageChange - Callback function
 * @returns Handler function
 */
export const createNextHandler = (
  currentPage: number,
  totalPages: number,
  onPageChange: (page: number) => void
) => {
  return () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }
}
