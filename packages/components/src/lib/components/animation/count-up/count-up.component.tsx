import type { CountUpProps } from "@/components/animation/count-up/count-up.types"
import { classNames } from "@/utils"
import { animate, motion, useMotionValue, useTransform } from "framer-motion"
import { useEffect } from "react"

export const CountUp = ({
  to,
  className,
  from = 0,
  duration = 1,
  rounded = false,
  style = "decimal",
  onPlay,
  onComplete,
}: CountUpProps) => {
  const count = useMotionValue(from)
  const transformedValue = useTransform(count, latest => {
    return new Intl.NumberFormat("es-MX", {
      style,
      currency: "MXN",
    }).format(rounded ? Math.round(latest) : latest)
  })

  useEffect(() => {
    const controls = animate(count, to, { duration, onPlay, onComplete })

    return () => controls.stop()
  }, [transformedValue, count, to])

  return (
    <motion.span className={classNames("text-base", className)}>
      {transformedValue}
    </motion.span>
  )
}
