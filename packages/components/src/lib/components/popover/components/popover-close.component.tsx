import { Popover as PopoverPrimitive } from "radix-ui"
import type { ComponentProps } from "react"

export const PopoverClose = (
  props: ComponentProps<typeof PopoverPrimitive.Close>
) => {
  return <PopoverPrimitive.Close data-slot="popover-close" {...props} />
}
