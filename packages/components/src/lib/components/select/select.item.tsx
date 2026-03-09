import type { ComponentRef } from "react"
import { forwardRef } from "react"
import { Select as SelectPrimitive } from "radix-ui"
import { classNames } from "@/utils"
import type { ItemProps } from "./select.types"

/**
 * Select Item Component - Individual option in the dropdown
 *
 * @component
 * @param {ItemProps} props - Item properties
 * @param {React.Ref} ref - Forwarded reference to the element
 * @returns {JSX.Element} Select item
 *
 * @example
 * ```tsx
 * <Item value="1">Option 1</Item>
 * <Item value="2" disabled>Option 2</Item>
 * ```
 */
const Item = forwardRef<ComponentRef<typeof SelectPrimitive.Item>, ItemProps>(
  ({ children, className, disabled, ...props }, forwardedRef) => {
    return (
      <SelectPrimitive.Item
        ref={forwardedRef}
        disabled={disabled}
        className={classNames(
          "w-full h-auto outline-0 hover:bg-gray-3 px-4 py-[5px] cursor-pointer",
          { "text-gray-6 cursor-not-allowed": disabled },
          className
        )}
        {...props}
      >
        <SelectPrimitive.ItemText className="whitespace-nowrap">
          {children}
        </SelectPrimitive.ItemText>
      </SelectPrimitive.Item>
    )
  }
)

Item.displayName = "SelectItem"

export default Item
