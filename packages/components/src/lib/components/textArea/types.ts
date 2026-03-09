import type { ComponentPropsWithoutRef } from "react"

export type TextAreaType = "normal" | "underline"
export type TextAreaSize = "sm" | "md" | "lg" | "xl"

export interface TextAreaClasses {
  container?: string
  containerInput?: string
  input?: string
  label?: string
  messageError?: string
}

export interface TextAreaBaseProps extends Omit<
  ComponentPropsWithoutRef<"textarea">,
  "size" | "value" | "defaultValue"
> {
  value?: string
  defaultValue?: string
  type?: TextAreaType
  inputSize?: TextAreaSize
  clearOnFocus?: boolean
  classesNames?: TextAreaClasses
}
export interface TextAreaProps extends TextAreaBaseProps {
  name: string
  label?: string
  labelFooter?: string
  error?: string
}
