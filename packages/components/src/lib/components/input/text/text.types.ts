import type { BaseInputProps } from "../common"

export interface InputProps extends BaseInputProps {
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
