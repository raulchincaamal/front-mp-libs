import { Select as SelectPrimitive } from "radix-ui"
import { classNames } from "@/utils"
import type { TriggerProps } from "./select.types"
import { ChevronLeft } from "@/assets/icons"

/**
 * Size variants for the Select trigger
 */
const TriggerVariants = {
  sm: "h-6 text-sm py-px rounded-sm",
  md: "h-8 text-base py-[5px] rounded-md",
  lg: "h-10 text-lg py-2 rounded-lg",
  xl: "h-12 text-lg p-3 rounded-lg",
}

/**
 * Select Trigger Component - Button that opens the dropdown
 *
 * @component
 * @param {TriggerProps} props - Component properties
 * @returns {JSX.Element} Select trigger button
 *
 * @example
 * ```tsx
 * <Trigger
 *   size="md"
 *   placeholder="Select an option"
 *   triggerRef={triggerRef}
 * />
 * ```
 */
const Trigger = ({
  size,
  disabled,
  className,
  triggerRef,
  placeholder,
}: TriggerProps) => {
  return (
    <SelectPrimitive.Trigger
      ref={triggerRef}
      disabled={disabled}
      className={classNames(
        "outline-1 outline-gray-7 px-3 py-[5px] bg-white flex justify-between items-center cursor-pointer h-auto!",
        className,
        TriggerVariants[size],
        {
          "bg-gray-3 text-gray-6 outline-gray-5 cursor-not-allowed": disabled,
        }
      )}
    >
      <SelectPrimitive.Value
        className={classNames("text-black truncate flex-1", {
          "text-gray-6": disabled,
        })}
        placeholder={placeholder}
      />
      <SelectPrimitive.Icon className="flex items-center">
        <ChevronLeft
          className={classNames("-rotate-90", { "text-gray-6": disabled })}
        />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

export default Trigger
