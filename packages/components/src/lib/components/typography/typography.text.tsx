import type { PropsWithChildren } from "react"
import type { ITextProps } from "./typography.types"
import Typography from "./typography.component"

const Text = ({
  children,
  as = "p",
  className,
  ...rest
}: PropsWithChildren<ITextProps>) => {
  return (
    <Typography as={as} className={className} {...rest}>
      {children}
    </Typography>
  )
}

export default Text
