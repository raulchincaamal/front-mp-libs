import type { Size } from "@/types/common"

/**
 * Props for the Pagination component
 */
export interface PaginationProps {
  /**
   * Current page (1-indexed)
   */
  currentPage: number
  /**
   * Total number of pages
   */
  totalPages: number
  /**
   * Callback when page changes
   */
  onPageChange: (page: number) => void
  /**
   * Pagination component size
   * @default 'md'
   */
  size?: Size
  /**
   * Additional CSS class
   */
  className?: string
}

/**
 * Props for the PageNumber component
 */
export interface PageNumberProps {
  /**
   * Page number to display
   */
  pageNumber: number
  /**
   * Whether this page is currently active
   */
  isActive: boolean
  /**
   * Callback when page is clicked
   */
  onPageChange: (page: number) => void
  /**
   * Button size
   */
  size: Size
}

/**
 * Props for the PaginationButton component (Previous/Next buttons)
 */
export interface PaginationButtonProps {
  /**
   * Click handler
   */
  onClick: () => void
  /**
   * Whether the button is disabled
   */
  disabled: boolean
  /**
   * Button size
   */
  size: Size
  /**
   * Accessibility label
   */
  label: string
  /**
   * Button content
   */
  children: React.ReactNode
}

/**
 * Props for the Ellipsis component
 */
export interface EllipsisProps {
  /**
   * Previous page number or identifier
   */
  prevPage: number | string
  /**
   * Next page number or identifier
   */
  nextPage: number | string
  /**
   * Component size
   */
  size: Size
}
