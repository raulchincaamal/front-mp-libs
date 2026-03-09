import * as Form from "@radix-ui/react-form"
import { motion } from "motion/react"
import { useState } from "react"
import type { TextAreaProps } from "./types"
import { TextAreaField } from "./text.area.field"
import { TextAreaControl } from "./text.area.control"
import { TextAreaFooter } from "./text.area.footer"

const TextArea = ({
  name,
  label,
  labelFooter,
  error,
  maxLength,
  minLength,
  defaultValue = "",
  classesNames,
  ...props
}: TextAreaProps) => {
  const [value, setValue] = useState(defaultValue)

  return (
    <Form.Root>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className={classesNames?.container}
      >
        <TextAreaField name={name} label={label}>
          <TextAreaControl
            {...props}
            maxLength={maxLength}
            minLength={minLength}
            value={value}
            onChange={e => {
              setValue(e.target.value)
              props.onChange?.(e)
            }}
          />
        </TextAreaField>

        <TextAreaFooter
          footer={labelFooter ?? `${minLength} caracteres requeridos`}
          current={value.length}
          max={maxLength}
        />

        {error && (
          <Form.Message className={classesNames?.messageError}>
            {error}
          </Form.Message>
        )}
      </motion.div>
    </Form.Root>
  )
}

export default TextArea
