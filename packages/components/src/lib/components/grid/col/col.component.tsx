import { classNames } from "@/utils/classNames"
import type { ICol } from "@/interfaces/grid"
import { EPrefixGrid } from "@/interfaces/grid"
import { generateClasses } from "@/utils/generateClasses"
import { motion } from "motion/react"

const {
  span: ESpan,
  start: EStart,
  end: EEnd,
  justifySelf,
  alignSelf,
} = EPrefixGrid

const Col = ({
  align,
  end,
  justify,
  span,
  start,
  className = "",
  ...props
}: ICol) => {
  return (
    <motion.div
      {...props}
      className={classNames(
        {
          [className]: className,
        },
        generateClasses(ESpan, span),
        generateClasses(EStart, start),
        generateClasses(EEnd, end),
        generateClasses(justifySelf, justify),
        generateClasses(alignSelf, align)
      )}
    />
  )
}

export default Col
