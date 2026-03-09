import { Popover as PopoverPrimitive } from "radix-ui"
import type { ComponentProps } from "react"
import { PopoverProvider } from "./popover.context"
import { useControlledState } from "@/hooks"

const Popover = (props: ComponentProps<typeof PopoverPrimitive.Root>) => {
  const [open, setOpen] = useControlledState({
    value: props?.open,
    defaultValue: props?.defaultOpen,
    onChange: props?.onOpenChange,
  })

  return (
    <PopoverProvider value={{ open, setOpen }}>
      <PopoverPrimitive.Root
        data-slot="popover"
        {...props}
        onOpenChange={setOpen}
      />
    </PopoverProvider>
  )
}

export default Popover
