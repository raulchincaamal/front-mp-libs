import { Select as SelectPrimitive } from "radix-ui"
import { classNames } from "@/utils"
import type { ContentProps } from "./select.types"
import Item from "./select.item"
import EmptyState from "./select.empty-state"
import SearchInput from "./select.search-input"

/**
 * Select Content Component - Contains the dropdown with options
 *
 * Renders the search input (if enabled), the items list,
 * and empty state when no elements are available.
 *
 * @component
 * @param {ContentProps} props - Component properties
 * @returns {JSX.Element} Select dropdown content
 *
 * @example
 * ```tsx
 * <Content
 *   width={200}
 *   allItems={items}
 *   filteredItems={filteredItems}
 *   showSearch={true}
 *   searchValue={searchValue}
 *   onSearchChange={handleSearch}
 * />
 * ```
 */
const Content = ({
  width,
  allItems,
  filteredItems,
  currentValue,
  emptyMessage,
  showSearch,
  searchValue = "",
  onSearchChange,
  searchPlaceholder,
  disabled,
  notFoundContent,
  inputRef,
}: ContentProps) => {
  // Don't show empty state if there's a selected value, even if filteredItems is empty
  const isEmpty = filteredItems?.length === 0 && !currentValue

  // Determine empty state message
  let emptySearchMessage: string
  if (searchValue && notFoundContent) {
    emptySearchMessage = notFoundContent
  } else if (searchValue) {
    emptySearchMessage = "No results found"
  } else {
    emptySearchMessage = emptyMessage || "No elements available."
  }

  return (
    <SelectPrimitive.Content
      position="popper"
      sideOffset={5}
      className={classNames(
        "overflow-hidden rounded-lg bg-white shadow-lg border border-gray-4 min-w-[200px] max-w-[350px] w-auto"
      )}
      style={width ? { width } : {}}
    >
      {showSearch && onSearchChange && (
        <SearchInput
          ref={inputRef}
          value={searchValue}
          onChange={onSearchChange}
          placeholder={searchPlaceholder}
          disabled={disabled}
        />
      )}
      <SelectPrimitive.Viewport className="space-y-1">
        {isEmpty ? (
          <EmptyState message={emptySearchMessage} />
        ) : (
          <>
            {allItems?.map(item => {
              const isVisible = filteredItems.some(
                filtered => filtered.value === item.value
              )
              return (
                <Item
                  key={item.value}
                  value={item.value}
                  disabled={item?.disabled}
                  className={isVisible ? "" : "hidden"}
                >
                  {item.children}
                </Item>
              )
            })}
          </>
        )}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  )
}

export default Content
