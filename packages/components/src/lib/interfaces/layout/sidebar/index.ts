import type { ICommonProps } from "@/interfaces/common"
import type { LogoConfig } from ".."

interface CommonMenuItem {
  label: string
  icon: React.ReactNode
}

interface SubmenuItem extends CommonMenuItem {
  routerLink?: string
}

export interface SidebarMenuItem extends CommonMenuItem {
  routerLink?: string
  submenu?: SubmenuItem[]
}

export interface ISidebarProps {
  logo?: LogoConfig
  menuItems?: SidebarMenuItem[]
  isOpen?: boolean
  onClick?: () => void
  routerActive?: (routerLink?: string | string[]) => boolean
}

export interface ISidebarWrapperProps extends ICommonProps {
  children: React.ReactNode
  logo?: string
  expanded?: boolean
}

export interface ISidebarMenuListProps {
  routerLink?: string
  menuItems: SidebarMenuItem[]
  expanded?: boolean
  routerActive?: (routerLink?: string | string[]) => boolean
}

export interface ISidebarMenuItemProps {
  title: string
  routerLink?: string
  icon?: React.ReactNode
  active?: boolean
  type?: "primary" | "default"
}

export interface ISidebarMenuItemBtnProps {
  icon: React.ReactNode
  tooltip?: string
  active?: boolean
  submenu?: SubmenuItem[]
  routerLink?: string
}
