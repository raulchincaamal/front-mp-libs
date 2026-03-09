import type { ReactNode } from "react"

export type ItemsAccordion = {
  key: string
  header: ReactNode | string
  // titleIcon?: React.ReactNode
  // title: string
  children: React.ReactNode
}
export type ItemsAccordionCustom = {
  key: string
  header: ReactNode | string
  // titleIcon?: React.ReactNode
  // title: string
  children?: React.JSX.Element
}
export interface IAccordion {
  items?: Array<ItemsAccordion>
  shadow?: boolean
  showDivider?: boolean
  bodyClassName?: string
  containerClassName?: string
}
export interface IAccordionCustom {
  items?: Array<ItemsAccordionCustom>
  shadow?: boolean
  showDivider?: boolean
  bodyClassName?: string
}

interface AccordionEventTarget extends EventTarget {
  id: string
  parentElement: { id: string }
}

export interface AccordionEventTargetCustom extends React.MouseEvent<HTMLDivElement> {
  target: AccordionEventTarget
}
