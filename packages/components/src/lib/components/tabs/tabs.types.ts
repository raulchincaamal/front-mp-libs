export type TypeTabs =
  | "default"
  | "underline"
  | "with-icon"
  | "pills"
  | "segmented"

export interface ITabItem {
  key: string
  label: React.ReactNode | string
  href?: string
  content?: React.ReactNode | string
  disabled?: boolean
}

export interface ITabsProps {
  currentActiveKey: string
  type?: TypeTabs
  items: ITabItem[]
  onChange: (currentActiveKey: string) => void
  className?: string
  contentClassName?: string
  activeColorTabs?: string
}
