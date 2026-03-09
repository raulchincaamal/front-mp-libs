import type { Direction } from "@/interfaces/common"
import type { IFlex } from "@/interfaces/flex"
import { EPrefixFlex } from "@/interfaces/flex"
import { generateClasses } from "@/utils/generateClasses"
import { classNames } from "@/utils/classNames"
import { motion } from "motion/react"

const { align: EAlign, justify: EJustify, gap: EGap } = EPrefixFlex

const flexDirection: Record<Direction, string> = {
  horizontal: "flex-row",
  vertical: "flex-col",
}

const flexReverse: Record<Direction, string> = {
  horizontal: "flex-row-reverse",
  vertical: "flex-col-reverse",
}

const Flex = ({
  children,
  justify,
  align,
  gap,
  direction = "horizontal",
  isReverse = false,
  style,
  className = "",
  onClick,
  wrap,
  ...props
}: IFlex) => (
  <motion.div
    aria-hidden
    className={classNames(
      `flex ${isReverse ? flexReverse[direction] : flexDirection[direction]}`,
      generateClasses(EGap, gap),
      generateClasses(EJustify, justify),
      generateClasses(EAlign, align),
      {
        [className]: className,
        "flex-wrap": wrap,
      }
    )}
    {...{ onClick, style, children, ...props }}
  />
)

export default Flex
