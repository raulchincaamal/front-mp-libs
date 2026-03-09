import type {
  DetailedHTMLProps,
  FormEventHandler,
  InputHTMLAttributes,
  ReactNode,
} from "react"
import type { Size } from "../common"

export type InputType = "normal" | "underline"

export type HtmlType = "text" | "password" | "email" | "number"

export type DefaultInput = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

interface IClassesNamesInput {
  label?: string
  container?: string
  containerInput?: string
  icon?: string
  input?: string
  messageError?: string
}

export interface IInputText extends DefaultInput {
  type?: InputType
  htmlType?: HtmlType
  defaultValue?: string
  value?: string
  inputSize?: Size
  maxlength?: number
  minLength?: number
  name?: string
  startIcon?: ReactNode
  disabled?: boolean
  readOnly?: boolean
  required?: boolean
  className?: string
  placeholder?: string
  label?: string
  fontBold?: boolean
  clearOnFocus?: boolean
  error?: string | ReactNode
  classesNames?: IClassesNamesInput
  onChange?: (event: React.ChangeEvent<HTMLElement>) => void
  onInput?: FormEventHandler<HTMLInputElement>
  isUpperCase?: boolean
}
