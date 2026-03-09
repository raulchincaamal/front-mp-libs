export type SwitchSize = "md" | "sm"

export interface SizeStylesConfig {
  root: string
  thumb: string
  children: string
}

export const sizeStyles: Record<SwitchSize, SizeStylesConfig> = {
  md: {
    root: "h-[22px] w-11",
    thumb: "size-[18px]",
    children: "h-4 w-4 text-xs",
  },
  sm: {
    root: "h-4 w-7",
    thumb: "size-3",
    children: "h-3 w-3 text-[10px]",
  },
}
