import * as Form from "@radix-ui/react-form"
import type { TextAreaBaseProps } from "./types"
import { getTextAreaClasses } from "./text.area.helpers"

export const TextAreaControl = ({
  type = "normal",
  inputSize = "xl",
  className,
  classesNames,
  clearOnFocus,
  onFocus,
  ...props
}: TextAreaBaseProps) => (
  <Form.Control asChild>
    <textarea
      {...props}
      className={getTextAreaClasses({
        type,
        inputSize,
        className,
        classesNames,
        disabled: props.disabled,
        readOnly: props.readOnly,
      })}
      onFocus={e => {
        if (clearOnFocus) e.currentTarget.value = ""
        onFocus?.(e)
      }}
    />
  </Form.Control>
)
