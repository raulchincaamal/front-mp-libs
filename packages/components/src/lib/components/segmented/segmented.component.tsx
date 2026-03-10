import { useRef, useId } from "react"
import { motion } from "motion/react"
import type { SegmentedProps, SegmentedValue } from "./segmented.types"
import { getContainerStyles } from "./helpers/getContainerStyles"
import { createItemClickHandler } from "./helpers/createItemClickHandler"
import { getCurrentValue } from "./helpers/getCurrentValue"
import { useActiveIndex } from "./hooks/useActiveIndex"
import { useIndicatorStyle } from "./hooks/useIndicatorStyle"
import { SegmentedIndicator } from "./components/SegmentedIndicator"
import { SegmentedOption } from "./components/SegmentedOption"
import { containerAnimation } from "./constants/animation-config"

const Segmented = <T extends SegmentedValue = SegmentedValue>({
  options,
  value,
  defaultValue,
  onChange,
  size = "md",
  disabled = false,
  vertical = false,
  className,
  ...props
}: SegmentedProps<T>) => {
  const idComponent = useId()
  const containerRef = useRef<HTMLDivElement>(null)

  const { activeIndex, setActiveIndex, normalizedOptions } = useActiveIndex(
    options,
    getCurrentValue(value, defaultValue)
  )
  const indicatorStyle = useIndicatorStyle(
    containerRef,
    activeIndex,
    size,
    vertical
  )
  const handleItemClick = createItemClickHandler(
    disabled,
    setActiveIndex,
    onChange
  )
  const containerStyles = getContainerStyles(
    size,
    vertical,
    disabled,
    className
  )

  return (
    <motion.div
      ref={containerRef}
      id={`${idComponent}-segmented`}
      className={containerStyles}
      {...containerAnimation}
      {...props}
    >
      <SegmentedIndicator
        indicatorStyle={indicatorStyle}
        vertical={vertical}
        size={size}
      />
      {normalizedOptions.map((option, index) => (
        <SegmentedOption
          key={`${option.value}-${index}`}
          option={option}
          index={index}
          isActive={index === activeIndex}
          disabled={disabled}
          vertical={vertical}
          size={size}
          onClick={handleItemClick}
        />
      ))}
    </motion.div>
  )
}
export default Segmented
