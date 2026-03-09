import { RadioGroup as RadioGroupPrimitive } from "radix-ui"
import { classNames as cn } from "@/utils"
import type { RadioGroupProps } from "./radio-group.types"

const RadioGroup = ({
  classNames,
  group = [],
  defaultValue = "",
  ariaLabel = "",
  onValueChange,
  ...props
}: RadioGroupProps) => (
  <RadioGroupPrimitive.Root
    className="flex flex-row gap-4"
    defaultValue={defaultValue}
    aria-label={ariaLabel}
    onValueChange={onValueChange}
    {...props}
  >
    {group?.map(({ id, label, value, checked, disabled }) => (
      <div className="flex items-center" key={id}>
        <RadioGroupPrimitive.Item
          className={cn(
            "size-4 cursor-pointer rounded-full bg-white outline-1 hover:outline-primary-blue focus:outline-primary-blue data-[state=checked]:outline-1 data-[state=checked]:outline-primary-blue outline-neutral-3",
            {
              "cursor-not-allowed outline-gray-5 bg-gray-3 hover:outline-neutral-3 data-[state=checked]:outline-neutral-3":
                disabled,
            },
            classNames?.item
          )}
          disabled={disabled}
          defaultChecked={checked}
          value={value}
          id={id}
        >
          <RadioGroupPrimitive.Indicator
            className={cn(
              "relative flex size-full items-center justify-center after:block after:size-2 after:rounded-full after:bg-primary-blue",
              {
                "after:bg-black/25": disabled,
              },
              classNames?.indicator
            )}
          />
        </RadioGroupPrimitive.Item>
        <label
          className={cn(
            "pl-2 text-[15px] leading-none text-black cursor-pointer",
            { "cursor-not-allowed text-black/25": disabled },
            classNames?.label
          )}
          htmlFor={id}
        >
          {label}
        </label>
      </div>
    ))}
  </RadioGroupPrimitive.Root>
)

export default RadioGroup
