import * as Dialog from "@radix-ui/react-dialog"
import { CloseIcon, DoneIcon, ExclamationIcon, InfoIcon } from "@/assets/icons"

import { classNames } from "@/utils/classNames"
import Typography from "@/components/typography"
import type { ModalType } from "@/interfaces"
import type { ReactNode } from "react"
import { Flex } from "@/components"

interface Props {
  type?: ModalType
  title?: string | React.ReactNode
  message?: ReactNode | string
  titleAlign?: "left" | "center" | "right"
  children: ReactNode
}

const ModalHeader = ({
  type = "default",
  title,
  message,
  titleAlign = "left",
  children,
}: Props) => {
  if (!title && !message) return null

  return (
    <Flex
      gap={4}
      className={classNames("w-full", {
        hidden: !title && !message,
      })}
    >
      {type !== "default" && (
        <Flex
          align="center"
          justify="center"
          className={classNames(
            "w-6 h-6 md:h-7 md:w-7 shrink-0 rounded-full text-white",
            {
              "bg-error": type === "error",
              "bg-success": type === "success",
              "bg-warning": type === "warning",
              "bg-info": type === "info",
            }
          )}
        >
          {type === "error" && <CloseIcon />}
          {type === "success" && <DoneIcon />}
          {type === "warning" && <ExclamationIcon />}
          {type === "info" && <InfoIcon />}
        </Flex>
      )}

      <Flex direction="vertical" gap={2} className="w-full">
        {typeof title !== "string" ? (
          title
        ) : (
          <Dialog.Title asChild>
            <Typography.Title
              weight="semibold"
              level={4}
              {...(typeof title !== "string" ? title : {})}
              className={classNames("inline-block", {
                [`text-${titleAlign}`]: titleAlign,
              })}
            >
              {typeof title === "string" ? title : children}
            </Typography.Title>
          </Dialog.Title>
        )}

        {message && (
          <Dialog.Description asChild>
            <span className="text-base font-normal text-black text-opacity-85">
              {message}
            </span>
          </Dialog.Description>
        )}
      </Flex>
    </Flex>
  )
}

export default ModalHeader
