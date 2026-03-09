import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Portal from "../Portal"
import type { DrawerProps } from "./drawer.types"
import { baseStyles } from "./constants/base-styles"
import { positionStyles } from "./constants/position-variants"
import { animationConfig } from "./constants/animation-config"
import { classNames as cn } from "@/utils"

const Drawer = ({
  open,
  onClose,
  children,
  position = "right",
  className = "",
  classNames = { backdrop: "", drawer: "", header: "", children: "" },
}: DrawerProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (open) document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [open, onClose])

  return (
    <Portal id="drawer">
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className={cn(baseStyles.backdrop, classNames.backdrop)}
              initial={animationConfig.backdrop.initial}
              animate={animationConfig.backdrop.animate}
              exit={animationConfig.backdrop.exit}
              onClick={onClose}
            />

            <motion.div
              className={cn(
                baseStyles.drawer,
                positionStyles[position],
                classNames.drawer,
                className
              )}
              initial={{ x: position === "right" ? "100%" : "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: position === "right" ? "100%" : "-100%" }}
              transition={animationConfig.drawer.transition}
            >
              <div className={cn(baseStyles.header, classNames.header)}>
                <button onClick={onClose} className={baseStyles.closeButton}>
                  ✕
                </button>
              </div>
              <div className={cn(baseStyles.children, classNames.children)}>
                {children}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Portal>
  )
}

export default Drawer
