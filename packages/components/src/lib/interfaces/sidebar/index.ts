import type { Key, ReactNode } from "react"

export interface IMenuItem {
  label: ReactNode
  key: Key
  icon?: ReactNode
  children?: IMenuItem[]
}

export interface ISidebar {
  logo?: ReactNode
  menuItems: IMenuItem[]
  children: ReactNode
}
