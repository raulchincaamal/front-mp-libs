import { forwardRef } from "react"
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui"
import { classNames } from "@/utils"
import type { TriggerProps } from "./dropdown.types"

/**
 * Dropdown trigger component that opens the dropdown menu.
 *
 * @component
 * @param {TriggerProps} props - Trigger component properties
 * @returns {JSX.Element} Rendered trigger component
 */
const Trigger = forwardRef<HTMLButtonElement, TriggerProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <DropdownMenuPrimitive.Trigger
      className={classNames(
        "inline-flex items-center justify-center rounded px-4 py-2 text-sm font-medium",
        "bg-white text-gray-12",
        "hover:bg-gray-1 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 outline-none",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "transition-colors",
        className
      )}
      ref={forwardedRef}
      {...props}
    >
      {children}
    </DropdownMenuPrimitive.Trigger>
  )
)

export default Trigger
