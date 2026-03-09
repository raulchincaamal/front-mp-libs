import type { IResponsive, Size } from "@/interfaces/common"
import { useState, useEffect } from "react"

type TBreakpoint = Size | "xs"

interface IBreakpoints extends Required<IResponsive<boolean>> {
  xs: boolean
}
const breakpointsWidth: Record<TBreakpoint, number> = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
}

export const useBreakpoint = (): IBreakpoints => {
  const [breakpoints, setBreakpoints] = useState<IBreakpoints>({
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
  })

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth

      const newBreakpoints = Object.keys(breakpointsWidth).reduce(
        (acc, key) => {
          const breakpoint = key as TBreakpoint
          acc[breakpoint] = screenWidth >= breakpointsWidth[breakpoint]
          return acc
        },
        {} as IBreakpoints
      )

      const areAllFalseExceptXs = ["sm", "md", "lg", "xl"].every(
        key => !newBreakpoints[key as TBreakpoint]
      )

      newBreakpoints.xs = Boolean(areAllFalseExceptXs)

      setBreakpoints(newBreakpoints)
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return breakpoints
}
