import { Popover as PopoverPrimitive } from "radix-ui"
import type { ComponentProps } from "react"

export const PopoverTrigger = (
  props: ComponentProps<typeof PopoverPrimitive.Trigger>
) => {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}
