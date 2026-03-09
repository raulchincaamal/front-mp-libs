import type { ReactNode } from "react"
import type { Tooltip as TooltipPrimitive } from "radix-ui"

export interface TooltipProps {
  className?: string
  content: string | ReactNode
  children: ReactNode
  side?: TooltipPrimitive.TooltipContentProps["side"]
  sideOffset?: TooltipPrimitive.TooltipContentProps["sideOffset"]
  align?: TooltipPrimitive.TooltipContentProps["align"]
  alignOffset?: TooltipPrimitive.TooltipContentProps["alignOffset"]
}
