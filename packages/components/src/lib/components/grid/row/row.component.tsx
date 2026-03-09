import { classNames } from "@/utils/classNames"
import type { IRow } from "@/interfaces/grid"
import { EPrefixGrid } from "@/interfaces/grid"
import { generateClasses } from "@/utils/generateClasses"
import { motion } from "motion/react"

const { cols: ECols, gap: EGap, justifyItems, alignContent } = EPrefixGrid

const Row = ({ cols, align, gap, justify, className = "", ...props }: IRow) => {
  return (
    <motion.div
      className={classNames(
        `grid`,
        {
          [className]: className,
        },
        generateClasses(ECols, cols),
        generateClasses(EGap, gap),
        generateClasses(justifyItems, justify),
        generateClasses(alignContent, align)
      )}
      {...props}
    />
  )
}

export default Row
