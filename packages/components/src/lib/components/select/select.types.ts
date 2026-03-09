import type { ComponentRef } from "react"
import type { Select as SelectPrimitive } from "radix-ui"
import type { Size } from "@/types/common"

/**
 * Base properties shared by multiple Select components
 */
interface Select {
  /** Whether the component is disabled */
  disabled?: boolean
  /** Additional CSS classes */
  className?: string
}

/**
 * Main Select component properties
 * @interface SelectProps
 */
export interface SelectProps extends Select {
  /** Select size */
  size?: "sm" | "md" | "lg" | "xl"
  /** List of items to display in dropdown */
  items?: ItemProps[]
  /** Placeholder text when no selection */
  placeholder?: string
  /** Message to show when no elements available */
  emptyMessage?: string
  /** Current value (controlled) */
  value?: SelectPrimitive.SelectProps["value"]
  /** Default value (uncontrolled) */
  defaultValue?: SelectPrimitive.SelectProps["defaultValue"]
  /** Callback when selected value changes */
  onValueChange?: (value: string) => void
  /** Whether to show search input */
  showSearch?: boolean
  /** Search input placeholder */
  searchPlaceholder?: string
  /** Callback when search text changes */
  onSearch?: (value: string) => void
  /** Custom function to filter items */
  filterOption?: (inputValue: string, item: ItemProps) => boolean
  /** Custom content when no results found */
  notFoundContent?: string
}

/**
 * Individual Select item properties
 * @interface ItemProps
 */
export interface ItemProps extends Select {
  /** Content to render for the item */
  children: React.ReactNode
  /** Unique value for the item */
  value: string
}

/**
 * Trigger component properties (button that opens dropdown)
 * @interface TriggerProps
 */
export interface TriggerProps extends Select {
  /** Placeholder text */
  placeholder: string
  /** Trigger size */
  size: Size
  /** Reference to trigger element */
  triggerRef: React.RefObject<ComponentRef<
    typeof SelectPrimitive.Trigger
  > | null>
  /** Whether trigger is disabled */
  disabled?: boolean
}

/**
 * Content component properties (dropdown with items)
 * @interface ContentProps
 */
export interface ContentProps {
  /** Dropdown width */
  width: number
  /** Complete list of items */
  allItems: ItemProps[]
  /** Items filtered by search */
  filteredItems: ItemProps[]
  /** Currently selected value */
  currentValue?: string
  /** Message when no elements */
  emptyMessage?: string
  /** Whether to show search */
  showSearch?: boolean
  /** Current search value */
  searchValue?: string
  /** Handler for search changes */
  onSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  /** Search input placeholder */
  searchPlaceholder?: string
  /** Whether disabled */
  disabled?: boolean
  /** Content when no results */
  notFoundContent?: string
  /** Reference to search input */
  inputRef?: React.RefObject<HTMLInputElement | null>
}

/**
 * useSelectSearch hook properties
 * @interface UseSelectSearchProps
 */
export interface UseSelectSearchProps {
  /** Whether to show search functionality */
  showSearch: boolean
  /** List of items to filter */
  items: ItemProps[]
  /** Custom filtering function */
  filterOption?: (inputValue: string, item: ItemProps) => boolean
  /** Callback when search text changes */
  onSearch?: (value: string) => void
  /** Currently selected value */
  currentValue?: string
}

/**
 * useSelectValue hook properties
 * @interface UseSelectValueProps
 */
export interface UseSelectValueProps {
  /** Controlled value */
  value?: string
  /** Default value (uncontrolled) */
  defaultValue?: string
  /** Callback when value changes */
  onValueChange?: (value: string) => void
}
