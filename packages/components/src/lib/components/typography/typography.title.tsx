import type { PropsWithChildren } from "react"
import type { ITitleProps } from "./typography.types"
import { classNameByLevel } from "./typography.constants"
import Typography from "./typography.component"

const TITLE_AS_MAP: Record<
  1 | 2 | 3 | 4 | 5 | 6,
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
> = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
}

const Title = ({
  children,
  className = "",
  level = 1,
  ...rest
}: PropsWithChildren<ITitleProps>) => {
  const as = TITLE_AS_MAP[level]

  return (
    <Typography
      as={as}
      weight="bold"
      className={`${classNameByLevel[level]} ${className}`}
      {...rest}
    >
      {children}
    </Typography>
  )
}

export default Title
