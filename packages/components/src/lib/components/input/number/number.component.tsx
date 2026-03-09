import { forwardRef, useMemo } from "react"
import { motion, AnimatePresence } from "motion/react"
import { classNames as classMerge } from "@/utils/classNames"
import { getInputStyles } from "../common"
import type { InputNumberProps } from "./number.types"
import { useInputNumber } from "./useInputNumber"
import ClearButton from "../input.clearbtn"

const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(
  (props, ref) => {
    const {
      error,
      size = "md",
      check,
      icon,
      leftIcon,
      clear = true,
      disabled = false,
      variant = "default",
      className,
      displayValue,
      handleChange,
      handleFocus,
      handleBlur,
      handleClear,
      ...restProps
    } = useInputNumber(props)

    const { baseStyles, variantStyles, sizeStyles, stateStyles } =
      getInputStyles(variant, size, error, check, !!icon)

    const rightIcon = useMemo(() => {
      if (clear && displayValue)
        return <ClearButton disabled={disabled} onClick={handleClear} />
      if (leftIcon)
        return (
          <div
            className={classMerge("absolute right-3 top-1/2 -translate-y-1/2", {
              "opacity-40": disabled,
            })}
          >
            {leftIcon}
          </div>
        )
      return null
    }, [clear, displayValue, leftIcon, disabled, handleClear])

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
          {...restProps}
          ref={ref}
          type="text"
          value={displayValue}
          disabled={disabled}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
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
)

InputNumber.displayName = "InputNumber"

export default InputNumber
