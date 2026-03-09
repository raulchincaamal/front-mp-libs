import { forwardRef } from "react"
import { motion } from "motion/react"
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui"
import { classNames } from "@/utils"
import type { ContentProps } from "./dropdown.types"

/**
 * Dropdown content component that contains the menu items.
 *
 * @component
 * @param {ContentProps} props - Content component properties
 * @returns {JSX.Element} Rendered content component
 */
const Content = forwardRef<HTMLDivElement, ContentProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        {...props}
        className={classNames(
          "min-w-[220px] rounded-lg bg-white shadow-(--box-shadow-accordion) border border-gray-2",
          "overflow-hidden",
          className
        )}
        ref={forwardedRef}
        asChild
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{
            duration: 0.2,
            ease: [0.04, 0.62, 0.23, 0.98],
          }}
        >
          <div className="p-1">{children}</div>
        </motion.div>
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  )
)

export default Content
