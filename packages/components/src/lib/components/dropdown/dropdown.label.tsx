import { forwardRef } from "react"
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui"
import { classNames } from "@/utils"
import type { LabelProps } from "./dropdown.types"

/**
 * Dropdown label component for section headers.
 *
 * @component
 * @param {LabelProps} props - Label component properties
 * @returns {JSX.Element} Rendered label component
 */
const Label = forwardRef<HTMLDivElement, LabelProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <DropdownMenuPrimitive.Label
      className={classNames(
        "px-3 py-2 text-xs font-semibold text-gray-6",
        className
      )}
      ref={forwardedRef}
      {...props}
    >
      {children}
    </DropdownMenuPrimitive.Label>
  )
)

export default Label
