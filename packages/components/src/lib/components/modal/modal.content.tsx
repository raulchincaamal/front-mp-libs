import * as Dialog from "@radix-ui/react-dialog"
import { motion } from "motion/react"
import { cn } from "@/utils"
import { contentMotion } from "./modal.motion"
import { CloseIcon } from "@/assets/icons"
import { Flex } from "@/components"

interface Props {
  children: React.ReactNode
  panelClassName?: string
  isCloseAble?: boolean
  onClose?: () => void
}

const ModalContent = ({
  children,
  panelClassName,
  isCloseAble,
  onClose,
}: Props) => {
  return (
    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
      <Flex
        align="center"
        justify="center"
        className="min-h-full p-4 text-center items-center"
      >
        <Dialog.Content asChild>
          <motion.div
            variants={contentMotion}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={cn(
              "relative min-w-full  md:min-w-104.5 p-6 md:p-8 transform rounded-lg bg-white text-left shadow-xl outline-none max-w-lg",
              panelClassName
            )}
          >
            <Flex
              className="relative gap-6"
              direction="vertical"
              align="center"
            >
              {isCloseAble && (
                <button
                  className="absolute -right-4 -top-4 md:-right-5 w-auto h-auto"
                  onClick={onClose}
                >
                  <CloseIcon className="cursor-pointer text-gray-7 text-2xl" />
                </button>
              )}
              {children}
            </Flex>
          </motion.div>
        </Dialog.Content>
      </Flex>
    </div>
  )
}

export default ModalContent
