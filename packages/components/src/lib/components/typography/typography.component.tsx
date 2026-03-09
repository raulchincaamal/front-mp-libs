import { forwardRef } from "react"
import { Slot } from "@radix-ui/react-slot"
import { classNames } from "@/utils/classNames"
import type { ITypographyProps } from "./typography.types"
import { getPrefixCls } from "./utils"

const Typography = forwardRef<
  HTMLElement,
  React.PropsWithChildren<ITypographyProps>
>(
  (
    {
      children,
      as,
      asChild = false,
      className,
      italic = false,
      size = "base",
      weight = "normal",
      ...rest
    },
    ref
  ) => {
    if (!children) return null

    const sizeClass = getPrefixCls("text", size)
    const weightClass = getPrefixCls("font", weight)

    const Component: React.ElementType = asChild ? Slot : (as ?? "p")

    return (
      <Component
        ref={ref}
        className={classNames(
          "text-grays-Macropay-10",
          sizeClass,
          weightClass,
          className,
          { italic }
        )}
        {...rest}
      >
        {children}
      </Component>
    )
  }
)

Typography.displayName = "Typography"

export default Typography
