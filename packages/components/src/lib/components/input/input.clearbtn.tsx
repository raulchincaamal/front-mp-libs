import { motion } from "motion/react"
import { CloseCircleIcon } from "@/assets/icons"

interface ClearButtonProps {
  onClick: () => void
  disabled: boolean
}

const ClearButton = ({ onClick, disabled }: ClearButtonProps) => {
  return (
    <motion.button
      key="clear-button"
      initial={{ opacity: 0, y: "-50%" }}
      animate={{ opacity: 1, y: "-50%" }}
      exit={{ opacity: 0, y: "-50%" }}
      transition={{ duration: 0.2 }}
      type="button"
      className="absolute transition-colors ease-out duration-300 top-1/2 right-3 disabled:opacity-100 text-gray-6 hover:text-gray-7 disabled:hover:text-gray-6"
      onClick={onClick}
      disabled={disabled}
    >
      <CloseCircleIcon />
    </motion.button>
  )
}

export default ClearButton
