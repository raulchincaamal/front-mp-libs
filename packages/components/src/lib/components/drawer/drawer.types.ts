import type { PropsWithClassName } from "@/interfaces/common"
import type { ReactNode } from "react"

export interface DrawerProps extends PropsWithClassName<{
  backdrop?: string
  drawer?: string
  header?: string
  children?: string
}> {
  open: boolean
  onClose: () => void
  children: ReactNode
  position?: "left" | "right"
}
