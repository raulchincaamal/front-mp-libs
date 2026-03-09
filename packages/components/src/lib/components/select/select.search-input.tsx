import { forwardRef } from "react"
import { classNames } from "@/utils"

/**
 * SearchInput component properties
 * @interface SearchInputProps
 */
interface SearchInputProps {
  /** Current input value */
  value: string
  /** Callback when value changes */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  /** Input placeholder */
  placeholder?: string
  /** Whether input is disabled */
  disabled?: boolean
}

/**
 * SearchInput Component - Search input to filter Select items
 *
 * @component
 * @param {SearchInputProps} props - Component properties
 * @param {React.Ref} ref - Forwarded reference to the input
 * @returns {JSX.Element} Search input
 *
 * @example
 * ```tsx
 * <SearchInput
 *   value={searchValue}
 *   onChange={handleSearch}
 *   placeholder="Search options..."
 * />
 * ```
 */
const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ value, onChange, placeholder = "Buscar...", disabled }, ref) => {
    return (
      <div
        className="px-2 py-2 border-b border-gray-4 bg-white sticky top-0"
        onPointerDown={e => {
          // Prevenir que el dropdown se cierre al hacer click en el área del input
          e.stopPropagation()
        }}
      >
        <input
          ref={ref}
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          autoComplete="off"
          autoFocus
          className={classNames(
            "w-full px-3 py-1.5 text-sm border border-gray-4 rounded outline-none",
            "focus:border-primary-blue focus:ring-1 focus:ring-primary-blue",
            "disabled:bg-gray-3 disabled:cursor-not-allowed"
          )}
          onKeyDown={e => {
            e.stopPropagation()
          }}
          onMouseDown={e => {
            e.stopPropagation()
          }}
          onPointerDown={e => {
            e.stopPropagation()
          }}
        />
      </div>
    )
  }
)

SearchInput.displayName = "SearchInput"

export default SearchInput
