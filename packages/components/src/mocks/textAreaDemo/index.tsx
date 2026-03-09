import { Button, Modal, TextArea } from "@/components"
import { useState } from "react"

const TextAreaDemo = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState("")

  const minLength = 10
  const maxLength = 200

  return (
    <>
      <Button variant="secondary" size="xl" onClick={() => setIsOpen(true)}>
        Abrir Modal TextArea
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Continuar solicitud después"
        message="Selecciona el motivo por el cual el cliente desea continuar después con la solicitud de tu crédito."
        type="warning"
        isCloseAble={false}
        buttonCancel={{
          children: "Cancelar",
          onClick: () => setIsOpen(false),
        }}
        buttonOk={{
          children: "Guardar",
          onClick: () => {
            setIsOpen(false)
          },
          disabled: value.length < minLength,
        }}
      >
        <TextArea
          name="modalTextarea"
          value={value}
          onChange={e => {
            setValue(e.target.value)
          }}
          placeholder="Escribe aquí..."
          minLength={minLength}
          maxLength={maxLength}
        />
      </Modal>
    </>
  )
}

export default TextAreaDemo
