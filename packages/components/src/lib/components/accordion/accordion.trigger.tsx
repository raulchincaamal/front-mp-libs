import { forwardRef } from "react"
import { Accordion as AccordionPrimitive } from "radix-ui"
import { classNames } from "@/utils"
import { ArrowMP } from "@/assets/icons"
import type { TriggerProps } from "./accordion.types"

const Trigger = forwardRef<HTMLButtonElement, TriggerProps>(
  ({ children, className, triggerIcon, ...props }, forwardedRef) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={classNames(
          "group flex h-14 flex-1 cursor-pointer items-center justify-between px-6 text-[15px] leading-none bg-white space-x-2",
          className
        )}
        ref={forwardedRef}
        {...props}
      >
        {children}
        {triggerIcon ?? (
          <ArrowMP className="size-3 shrink-0 transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180 fill-primary-blue" />
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
)

export default Trigger
