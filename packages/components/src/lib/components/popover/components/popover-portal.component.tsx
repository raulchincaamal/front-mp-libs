import { Popover as PopoverPrimitive } from "radix-ui"
import { usePopover } from "@/components/popover/popover.context"
import { AnimatePresence } from "motion/react"

export const PopoverPortal = (
  props: Omit<
    React.ComponentProps<typeof PopoverPrimitive.Portal>,
    "forceMount"
  >
) => {
  const { open } = usePopover()

  return (
    <AnimatePresence>
      {open && (
        <PopoverPrimitive.Portal
          forceMount
          data-slot="popover-portal"
          {...props}
        />
      )}
    </AnimatePresence>
  )
}
