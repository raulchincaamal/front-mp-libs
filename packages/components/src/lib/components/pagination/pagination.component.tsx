import { motion } from "motion/react"
import type { PaginationProps } from "./pagination.types"
import { classNames } from "@/utils/classNames"
import { PaginationButton } from "./pagination.button"
import { PageNumber } from "./page.number"
import { Ellipsis } from "./pagination.ellipsis"
import {
  getPageNumbers,
  createPreviousHandler,
  createNextHandler,
} from "./pagination.functions"

/**
 * Pagination component for navigating through pages
 *
 * @component
 * @param {PaginationProps} props - Component props
 * @param {number} props.currentPage - Current page (1-indexed)
 * @param {number} props.totalPages - Total number of pages
 * @param {function} props.onPageChange - Callback when page changes
 * @param {'sm' | 'md' | 'lg' | 'xl'} [props.size='md'] - Component size
 * @param {string} [props.className] - Additional CSS class
 * @returns {JSX.Element} Rendered pagination component
 *
 * @example
 * ```tsx
 * <Pagination
 *   currentPage={1}
 *   totalPages={5}
 *   onPageChange={(page) => console.log(page)}
 *   size="md"
 * />
 * ```
 */
const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  size = "md",
  className = "",
}: PaginationProps) => {
  const handlePrevious = createPreviousHandler(currentPage, onPageChange)
  const handleNext = createNextHandler(currentPage, totalPages, onPageChange)
  const pageNumbers = getPageNumbers(currentPage, totalPages)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={classNames("flex items-center justify-center gap-1 mt-3", {
        [className]: className,
      })}
    >
      {/* Previous button */}
      <PaginationButton
        onClick={handlePrevious}
        disabled={currentPage === 1}
        size={size}
        label="Previous page"
      >
        ←
      </PaginationButton>

      {/* Page numbers */}
      {pageNumbers.map((page, index, array) => {
        if (page === "...") {
          const prevPage = array[index - 1] || "start"
          const nextPage = array[index + 1] || "end"
          return (
            <Ellipsis
              key={`ellipsis-${prevPage}-${nextPage}`}
              prevPage={prevPage}
              nextPage={nextPage}
              size={size}
            />
          )
        }

        const pageNumber = page as number
        const isActive = pageNumber === currentPage

        return (
          <PageNumber
            key={pageNumber}
            pageNumber={pageNumber}
            isActive={isActive}
            onPageChange={onPageChange}
            size={size}
          />
        )
      })}

      {/* Next button */}
      <PaginationButton
        onClick={handleNext}
        disabled={currentPage === totalPages}
        size={size}
        label="Next page"
      >
        →
      </PaginationButton>
    </motion.div>
  )
}

export default Pagination
