/* eslint-disable max-lines */
import { useMemo, useId } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { classNames as classMerge } from "@/utils/classNames"
import { LoaderAnimBlueIcon, LoaderAnimWhiteIcon } from "@/assets/icons"

import type { ButtonProps, Variants } from "./button.types"
import { variantStyles } from "./constants/color-variants"
import { getAccumulatedSizeStyles } from "./helpers/getAccumulatedSizeStyles"
import { getBaseButtonStyles } from "./helpers/getBaseButtonStyles"

const Button = ({
  icon,
  children,
  leftIcon,
  rightIcon,
  type = "button",
  variant = "default",
  size = "md",
  className = "",
  isLoading = false,
  positionLoading = "left",
  cursor = "pointer",
  ...props
}: ButtonProps) => {
  const idComponent = useId()

  const baseStyles = getBaseButtonStyles(cursor)

  const { isLeftLoading, isRightLoading } = useMemo(
    () => ({
      isLeftLoading: positionLoading === "left" && isLoading,
      isRightLoading: positionLoading === "right" && isLoading,
    }),
    [isLoading, positionLoading]
  )

  const currentIconLoading = useMemo(() => {
    const arrayWithBlue: Variants[] = [
      "primary",
      "secondary",
      "text",
      "withoutColor",
    ]
    if (arrayWithBlue.includes(variant))
      return <LoaderAnimBlueIcon className="animate-spin" />
    return <LoaderAnimWhiteIcon className="animate-spin" />
  }, [variant])

  const finalLeftIcon = useMemo(() => icon ?? leftIcon, [icon, leftIcon])

  return (
    <motion.button
      id={`${idComponent}-button`}
      className={classMerge(
        baseStyles,
        variantStyles[variant],
        getAccumulatedSizeStyles(size),
        className
      )}
      type={type}
      {...props}
    >
      <AnimatePresence mode="wait">
        {(isLeftLoading || finalLeftIcon) && (
          <motion.div
            key="leftIcon"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.2 }}
          >
            {isLeftLoading ? currentIconLoading : finalLeftIcon}
          </motion.div>
        )}
      </AnimatePresence>

      {typeof children === "string" || typeof children === "number" ? (
        <span className="whitespace-normal">{children}</span>
      ) : (
        children
      )}

      <AnimatePresence mode="wait">
        {(isRightLoading || rightIcon) && (
          <motion.div
            key="rightIcon"
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            transition={{ duration: 0.2 }}
          >
            {isRightLoading ? currentIconLoading : rightIcon}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

export default Button
