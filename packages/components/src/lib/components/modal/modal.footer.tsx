import type { IModalFooterProps } from "@/interfaces/modal"
import { Button } from "@/components"

export const ModalFooter = ({ buttonCancel, buttonOk }: IModalFooterProps) => {
  if (!buttonCancel && !buttonOk) return null
  return (
    <div className="w-full max-[400px]:grid grid-cols-1 flex flex-wrap justify-end gap-4">
      {buttonOk && (
        <Button
          className="outline-none inline-flex max-[400px]:order-1 order-2"
          variant="primary"
          size="xl"
          {...buttonOk}
        />
      )}
      {buttonCancel && (
        <Button
          className="outline-none inline-flex max-[400px]:order-2 order-1"
          variant="secondary"
          size="xl"
          {...buttonCancel}
        />
      )}
    </div>
  )
}
