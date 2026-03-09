import type {
  ChangeEvent,
  CSSProperties,
  FocusEvent,
  KeyboardEvent,
  ReactNode,
} from "react"
import type { IInputText } from "../input-text"
import type { Size } from "../common"

export interface TextAreaProps extends Pick<
  IInputText,
  | "type"
  | "defaultValue"
  | "maxLength"
  | "clearOnFocus"
  | "label"
  | "minLength"
  | "classesNames"
> {
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  rows?: number
  cols?: number
  disabled?: boolean
  readOnly?: boolean
  required?: boolean
  labelFooter?: string
  inputSize?: Size
  name?: string
  id?: string
  className?: string
  description?: string
  style?: CSSProperties
  autoFocus?: boolean
  onFocus?: (event: FocusEvent<HTMLTextAreaElement>) => void
  onBlur?: (event: FocusEvent<HTMLTextAreaElement>) => void
  onKeyDown?: (event: KeyboardEvent<HTMLTextAreaElement>) => void
  onKeyUp?: (event: KeyboardEvent<HTMLTextAreaElement>) => void
  onInput?: (event: ChangeEvent<HTMLTextAreaElement>) => void
  error?: string | ReactNode
}
