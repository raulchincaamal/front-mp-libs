import { forwardRef } from "react"
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui"
import { classNames } from "@/utils"
import type { ItemProps } from "./dropdown.types"

/**
 * Dropdown item component for individual menu options.
 *
 * @component
 * @param {ItemProps} props - Item component properties
 * @returns {JSX.Element} Rendered item component
 */
const Item = forwardRef<HTMLDivElement, ItemProps>(
  ({ children, className, icon, shortcut, ...props }, forwardedRef) => (
    <DropdownMenuPrimitive.Item
      className={classNames(
        "group relative flex cursor-pointer select-none items-center justify-between rounded px-3 py-2 text-sm outline-none",
        "text-gray-12 hover:bg-blue-1 hover:text-blue-6",
        "focus:bg-blue-1 focus:text-blue-6",
        "data-disabled:pointer-events-none data-disabled:opacity-50",
        "transition-colors",
        className
      )}
      ref={forwardedRef}
      {...props}
    >
      <div className="flex items-center gap-2">
        {icon && <span className="inline-flex shrink-0">{icon}</span>}
        <span>{children}</span>
      </div>
      {shortcut && (
        <span className="ml-auto pl-4 text-xs text-gray-6 group-hover:text-blue-6">
          {shortcut}
        </span>
      )}
    </DropdownMenuPrimitive.Item>
  )
)

export default Item
