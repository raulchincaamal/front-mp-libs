import type { ReactNode } from "react"
import type { ICommonProps, Size } from "@/interfaces/common"

export interface AvatarProps extends ICommonProps {
  size?: Size
  src?: string
  alt?: string
  icon?: ReactNode
  bgClassName?: string
  colorClassName?: string
}

export const avatarSizeStyles: Record<Size, string> = {
  sm: "size-8 text-[1.3rem]",
  md: "size-10 text-[1.4rem]",
  lg: "size-12 text-[2.1rem]",
  xl: "size-14 text-[2.5rem]",
}
