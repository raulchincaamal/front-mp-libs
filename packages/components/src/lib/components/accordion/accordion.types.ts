import type { ReactNode } from "react"
import type { Accordion as AccordionPrimitive } from "radix-ui"

export interface AccordionProps {
  defaultValue?: string
  showDivider?: boolean
  classNames?: {
    container?: string
    item?: string
    trigger?: string
    content?: string
    divider?: string
  }
  items: Array<{
    id: string
    triggerIcon?: ReactNode
    title: string | ReactNode
    content: string | ReactNode
  }>
}

export interface TriggerProps extends React.ComponentProps<
  typeof AccordionPrimitive.Trigger
> {
  triggerIcon?: React.ReactNode
}

export interface ContentProps extends React.ComponentProps<
  typeof AccordionPrimitive.Content
> {
  showDivider?: boolean
  dividerClassName?: string
}
