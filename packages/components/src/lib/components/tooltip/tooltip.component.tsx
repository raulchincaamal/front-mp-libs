import { Tooltip as TooltipPrimitive } from "radix-ui"
import { motion } from "motion/react"
import type { TooltipProps } from "./tooltip.types"
import { classNames } from "@/utils"

const Tooltip = ({ className, content, children, ...props }: TooltipProps) => {
  const isStringContent = typeof content === typeof "string"

  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content className={className} asChild {...props}>
            <motion.div
              className={classNames({
                "bg-gray-800 text-white rounded shadow-lg select-none px-4 py-2 outline-none border-0":
                  isStringContent && !className,
              })}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.15 }}
            >
              {content}
              <TooltipPrimitive.Arrow className="w-4 h-2" />
            </motion.div>
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

export default Tooltip
