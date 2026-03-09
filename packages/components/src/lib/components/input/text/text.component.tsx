import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { classNames as classMerge } from "@/utils/classNames"
import { getInputStyles } from "../common"
import type { InputProps } from "./text.types"
import ClearButton from "../input.clearbtn"

const InputText = ({
  error,
  size = "md",
  check,
  icon,
  leftIcon,
  clear = true,
  disabled = false,
  variant = "default",
  className,
  ...props
}: InputProps) => {
  const [value, setValue] = useState(props.value ?? "")

  const { baseStyles, variantStyles, sizeStyles, stateStyles } = getInputStyles(
    variant,
    size,
    error,
    check,
    !!icon
  )

  const rightIcon = useMemo(() => {
    if (clear && value) {
      return <ClearButton disabled={disabled} onClick={() => setValue("")} />
    }

    if (leftIcon) {
      return (
        <div
          className={classMerge("absolute right-3 top-1/2 -translate-y-1/2", {
            "opacity-40": disabled,
          })}
        >
          {leftIcon}
        </div>
      )
    }

    return null
  }, [clear, value, leftIcon, disabled])

  return (
    <div className={classMerge("relative", className)}>
      {icon && (
        <div
          className={classMerge("absolute left-3 top-1/2 -translate-y-1/2", {
            "opacity-40": disabled,
          })}
        >
          {icon}
        </div>
      )}

      <motion.input
        {...props}
        value={value}
        disabled={disabled}
        onChange={e => setValue(e.target.value)}
        className={classMerge(
          ...baseStyles,
          ...variantStyles,
          sizeStyles,
          stateStyles,
          className
        )}
      />

      <AnimatePresence>{rightIcon}</AnimatePresence>
    </div>
  )
}

export default InputText
