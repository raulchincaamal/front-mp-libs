import * as Slot from "@radix-ui/react-slot"
import { motion } from "motion/react"
import { cloneElement } from "react"

import { NoDataIcon } from "@/assets/icons"
import { classNames as classMerge } from "@/utils/classNames"

import { EMPTY_BASE_STYLES } from "./empty.constants"
import type { EmptyProps } from "./empty.types"

const Empty = ({
  text = "No hay datos para mostrar",
  className = "",
  icon = <NoDataIcon />,
}: EmptyProps) => {
  return (
    <Slot.Root>
      <motion.section
        data-cy="empty-component"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={classMerge(EMPTY_BASE_STYLES.container, className)}
      >
        <div className={EMPTY_BASE_STYLES.wrapper}>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {cloneElement(icon, {
              ...icon.props,
              className: classMerge(
                EMPTY_BASE_STYLES.icon,
                icon.props.className
              ),
            })}
          </motion.div>

          <motion.h1
            data-cy="empty-text"
            className={EMPTY_BASE_STYLES.text}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {text}
          </motion.h1>
        </div>
      </motion.section>
    </Slot.Root>
  )
}

export default Empty
