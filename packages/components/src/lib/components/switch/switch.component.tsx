import { Switch as SwitchPrimitive } from "radix-ui"
import { motion } from "motion/react"
import { classNames } from "@/utils"
import type { SwitchProps } from "./switch.types"
import { sizeStyles } from "./constants/size-variants"
import { baseStyles } from "./constants/base-styles"
import { getSwitchRootStyles } from "./helpers/getSwitchRootStyles"
import { getChildrenStyles } from "./helpers/getChildrenStyles"
import {
  getLabelConfig,
  getLabelStyles,
  getContainerStyles,
} from "./helpers/getLabelHelpers"
import { thumbTransition } from "./helpers/getThumbConfig"

const Switch = ({
  className,
  label,
  type = "default",
  size = "md",
  checked,
  defaultChecked = false,
  disabled = false,
  onCheckedChange,
  checkedChildren,
  unCheckedChildren,
  ...props
}: SwitchProps) => {
  const currentSizeStyles = sizeStyles[size]

  const switchElement = (
    <SwitchPrimitive.Root
      className={getSwitchRootStyles(type, size, disabled, className)}
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={disabled}
      onCheckedChange={onCheckedChange}
      {...props}
    >
      {unCheckedChildren && (
        <div className={getChildrenStyles(size, false)}>
          {unCheckedChildren}
        </div>
      )}
      <SwitchPrimitive.Thumb asChild>
        <motion.div
          className={classNames(baseStyles.thumb, currentSizeStyles.thumb)}
          layout
          transition={thumbTransition}
          whileTap={{ scale: 0.95 }}
        />
      </SwitchPrimitive.Thumb>
      {checkedChildren && (
        <div className={getChildrenStyles(size, true)}>{checkedChildren}</div>
      )}
    </SwitchPrimitive.Root>
  )

  if (label) {
    const { labelText, labelPosition } = getLabelConfig(label)

    return (
      <div className={getContainerStyles(disabled)}>
        {labelPosition === "left" && (
          <span className={getLabelStyles(disabled)}>{labelText}</span>
        )}
        {switchElement}
        {labelPosition === "right" && (
          <span className={getLabelStyles(disabled)}>{labelText}</span>
        )}
      </div>
    )
  }

  return switchElement
}

export default Switch
