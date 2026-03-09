import { Select as SelectPrimitive } from "radix-ui"
import type { SelectProps } from "./select.types"
import Trigger from "./select.trigger"
import Content from "./select.content"
import { useSelectWidth } from "./hooks/useSelectWidth"
import { useSelectSearch } from "./hooks/useSelectSearch"
import { useSelectValue } from "./hooks/useSelectValue"

/**
 * Componente Select - Dropdown para seleccionar opciones
 *
 * @component
 * @example
 * ```tsx
 * <Select
 *   placeholder="Selecciona una opción"
 *   items={[
 *     { value: "1", children: "Opción 1" },
 *     { value: "2", children: "Opción 2" }
 *   ]}
 *   onValueChange={(value) => console.log(value)}
 * />
 * ```
 */
const Select = ({
  disabled,
  className,
  value,
  defaultValue,
  size = "md",
  items = [],
  placeholder = "Selecciona un elemento...",
  emptyMessage = "No hay elementos disponibles.",
  onValueChange,
  showSearch = false,
  searchPlaceholder = "Buscar...",
  onSearch,
  filterOption,
  notFoundContent,
}: SelectProps) => {
  const { currentValue, handleValueChange } = useSelectValue({
    value,
    defaultValue,
    onValueChange,
  })

  const { triggerWidth, triggerRef } = useSelectWidth(className)
  const {
    searchValue,
    open,
    setOpen,
    filteredItems,
    handleSearchChange,
    inputRef,
  } = useSelectSearch({
    showSearch,
    items,
    filterOption,
    onSearch,
    currentValue,
  })

  return (
    <SelectPrimitive.Root
      value={currentValue}
      onValueChange={handleValueChange}
      open={open}
      onOpenChange={setOpen}
    >
      <Trigger
        size={size}
        disabled={disabled}
        className={className}
        triggerRef={triggerRef}
        placeholder={placeholder}
      />
      <SelectPrimitive.Portal>
        <Content
          width={triggerWidth}
          allItems={items}
          filteredItems={filteredItems}
          currentValue={currentValue}
          emptyMessage={emptyMessage}
          showSearch={showSearch}
          searchValue={searchValue}
          onSearchChange={handleSearchChange}
          searchPlaceholder={searchPlaceholder}
          disabled={disabled}
          notFoundContent={notFoundContent}
          inputRef={inputRef}
        />
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}

export default Select
