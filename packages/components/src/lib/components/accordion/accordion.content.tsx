import { forwardRef } from "react"
import { motion } from "motion/react"
import { Accordion as AccordionPrimitive } from "radix-ui"
import { classNames } from "@/utils"
import type { ContentProps } from "./accordion.types"

const Content = forwardRef<HTMLDivElement, ContentProps>(
  (
    { children, className, dividerClassName, showDivider = true, ...props },
    forwardedRef
  ) => (
    <AccordionPrimitive.Content
      {...props}
      className={classNames("overflow-hidden bg-white", className)}
      ref={forwardedRef}
      asChild
    >
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{
          duration: 0.3,
          ease: [0.04, 0.62, 0.23, 0.98],
        }}
      >
        {showDivider && (
          <hr
            className={classNames(
              "bg-primary-blue h-0.5 border-0",
              dividerClassName
            )}
          />
        )}
        <div className="px-5 py-[15px]">{children}</div>
      </motion.div>
    </AccordionPrimitive.Content>
  )
)

export default Content
