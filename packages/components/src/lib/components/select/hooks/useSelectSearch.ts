import { useState, useEffect, useRef } from "react"
import type { ItemProps, UseSelectSearchProps } from "../select.types"

/**
 * Hook to manage Select search and filtering logic
 *
 * Manages search state, item filtering, dropdown open state,
 * and search input auto-focus.
 *
 * @param {UseSelectSearchProps} props - Hook properties
 * @returns {Object} Object with search state and functions
 * @returns {string} searchValue - Current search value
 * @returns {boolean} open - Whether dropdown is open
 * @returns {Function} setOpen - Function to control open state
 * @returns {ItemProps[]} filteredItems - Items filtered by search
 * @returns {Function} handleSearchChange - Handler for search input changes
 * @returns {React.RefObject<HTMLInputElement>} inputRef - Reference to search input
 *
 * @example
 * ```tsx
 * const {
 *   searchValue,
 *   open,
 *   setOpen,
 *   filteredItems,
 *   handleSearchChange,
 *   inputRef
 * } = useSelectSearch({
 *   showSearch: true,
 *   items: allItems,
 *   currentValue: selectedValue
 * })
 * ```
 */
export const useSelectSearch = ({
  showSearch,
  items,
  filterOption,
  onSearch,
}: UseSelectSearchProps) => {
  const [searchValue, setSearchValue] = useState<string>("")
  const [open, setOpen] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  // Clear search when closed
  useEffect(() => {
    if (!open) {
      setSearchValue("")
    }
  }, [open])

  // Auto-focus input when dropdown opens with search
  useEffect(() => {
    if (open && showSearch && inputRef.current) {
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        inputRef.current?.focus()
      })
    }
  }, [open, showSearch, searchValue])

  // Default filtering function
  const defaultFilterOption = (
    inputValue: string,
    item: ItemProps
  ): boolean => {
    if (!inputValue) return true
    const searchLower = inputValue.toLowerCase()
    const childrenText =
      typeof item.children === "string" ? item.children.toLowerCase() : ""
    const valueText = item.value.toLowerCase()
    return childrenText.includes(searchLower) || valueText.includes(searchLower)
  }

  // Apply filter
  const filteredItems = showSearch
    ? items.filter(item => {
        const filter = filterOption || defaultFilterOption
        return filter(searchValue, item)
      })
    : items

  // Handler for search change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchValue(value)
    onSearch?.(value)
  }

  return {
    searchValue,
    open,
    setOpen,
    filteredItems,
    handleSearchChange,
    inputRef,
  }
}
