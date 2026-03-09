import type { RadioGroup as RadioGroupPrimitive } from "radix-ui"

interface IGroup {
  id: string
  label: string
  value: string
  checked?: boolean
  disabled?: boolean
}

export interface RadioGroupProps extends RadioGroupPrimitive.RadioGroupProps {
  classNames?: {
    item?: string
    indicator?: string
    label?: string
  }
  group?: Array<IGroup>
  defaultValue?: string
  ariaLabel?: string
  onValueChange?: (value: string) => void
}
