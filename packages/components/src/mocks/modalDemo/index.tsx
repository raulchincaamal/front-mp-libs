import { useState } from "react"
import { Modal, Button } from "@/components"

const ModalDemo = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button variant="secondary" size="xl" onClick={() => setOpen(true)}>
        Abrir Modal
      </Button>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Confirmar acción"
        message="¿Deseas continuar?"
        type="info"
        isCloseAble={false}
        buttonCancel={{
          children: "Cancelar",
          onClick: () => setOpen(false),
        }}
        buttonOk={{
          children: "Aceptar",
          onClick: () => {
            setOpen(false)
          },
        }}
      />
    </>
  )
}

export default ModalDemo
