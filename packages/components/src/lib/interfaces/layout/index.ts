import type { PropsWithChildren, ReactNode } from "react"
import type { FooterProps } from "../footer"
import type { NavbarProps } from "../navbar"
import type { INavbarConfig } from "./navbar"

export type LogoSources = { expanded: string; collapse?: string }
export type LogoConfig = string | LogoSources

export interface ILayoutCommonProps {
  logo?: LogoConfig
  navbarConfig?: INavbarConfig
}

export interface LayoutProps extends PropsWithChildren {
  footerProps: FooterProps
  navbarProps: NavbarProps
  loadingTemplate?: ReactNode
  loading?: boolean
  className?: string
  classNames?: {
    wrapper?: string
    body?: string
  }
  loadingWindow?: boolean
}

export interface ILoginLayout {
  logo: string
  title?: string
  onClick?: () => void
}

export * from "./navbar"
export * from "./sidebar"
export * from "./container"
