import { forwardRef } from "react"
import { Accordion as AccordionPrimitive } from "radix-ui"
import { classNames } from "@/utils"

const Item = forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof AccordionPrimitive.Item>
>(({ children, className, ...props }, forwardedRef) => (
  <AccordionPrimitive.Item
    className={classNames(
      "overflow-hidden rounded-xl shadow-(--box-shadow-accordion)",
      className
    )}
    ref={forwardedRef}
    {...props}
  >
    {children}
  </AccordionPrimitive.Item>
))

export default Item
