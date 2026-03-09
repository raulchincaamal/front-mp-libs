import type { ReactNode } from "react"

type RadioButton = EventTarget

export interface IRadioButtonCustom extends React.MouseEvent<HTMLInputElement> {
  target: RadioButton
}

export interface RadioGroupContextType {
  value: string | number
  onChange: (value: string | number) => void
  disabled?: boolean
  size?: string
  readOnly?: boolean
  error?: boolean
}

export interface RadioGroupProps {
  value: string | number
  onChange: (value: string | number) => void
  disabled?: boolean
  size?: string
  readOnly?: boolean
  error?: boolean
  children: ReactNode
  classNames?: string
}
