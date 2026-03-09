import { forwardRef } from "react"
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui"
import { classNames } from "@/utils"
import type { SeparatorProps } from "./dropdown.types"

/**
 * Dropdown separator component to divide menu sections.
 *
 * @component
 * @param {SeparatorProps} props - Separator component properties
 * @returns {JSX.Element} Rendered separator component
 */
const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, ...props }, forwardedRef) => (
    <DropdownMenuPrimitive.Separator
      className={classNames("my-1 h-px bg-gray-3", className)}
      ref={forwardedRef}
      {...props}
    />
  )
)

export default Separator
