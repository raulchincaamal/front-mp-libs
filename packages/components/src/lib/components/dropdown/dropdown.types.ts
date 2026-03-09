import type { ReactNode } from "react"
import type { DropdownMenu as DropdownMenuPrimitive } from "radix-ui"

export interface DropdownProps {
  trigger: ReactNode
  items: DropdownItem[]
  align?: "start" | "center" | "end"
  sideOffset?: number
  classNames?: {
    content?: string
    item?: string
    separator?: string
    label?: string
    trigger?: string
  }
}

export interface DropdownItem {
  id: string
  type?: "item" | "separator" | "label"
  label?: string | ReactNode
  icon?: ReactNode
  shortcut?: string
  disabled?: boolean
  onSelect?: () => void
}

export type TriggerProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.Trigger
>

export type ContentProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.Content
>

export interface ItemProps extends React.ComponentProps<
  typeof DropdownMenuPrimitive.Item
> {
  icon?: ReactNode
  shortcut?: string
}

export type SeparatorProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.Separator
>

export type LabelProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.Label
>
