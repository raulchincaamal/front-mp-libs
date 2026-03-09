import type { FC, ReactNode, SVGProps } from "react"

export type NavbarTheme = "blue" | "white" | "turkey blue"

export type Locale = "es" | "en"

export interface IStoreInfo {
  store?: string
  cashRegister?: string
  className?: string
  theme?: NavbarTheme
}

export type MenuItem = {
  href?: string
  label: ReactNode
  disabled?: boolean
  onClick?: () => void
}

export type NavbarProps = {
  avatar?: React.ReactNode
  userName?: string
  rol?: string
  Logo: FC<SVGProps<SVGSVGElement>>
  menuItems: MenuItem[]
  storeInfo?: IStoreInfo
  langs?: Locale[]
  theme?: NavbarTheme
  showMenuUser?: boolean
  className?: string
}

export type TBoxStore = {
  Icon: FC<SVGProps<SVGSVGElement>>
  label: string
  value: string | number
  isBetween?: boolean
  theme?: NavbarTheme
}

export type TLanguageItem = {
  Flag?: FC<SVGProps<SVGSVGElement>>
  text?: string
  className?: string
  lang?: Locale
}

export type TItemsOptions = Required<Omit<TLanguageItem, "className">>[]

export type TUserMenu = Omit<NavbarProps, "Logo">
