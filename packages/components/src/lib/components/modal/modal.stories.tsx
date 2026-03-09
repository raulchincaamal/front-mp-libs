import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { Button, Modal } from "@/components"

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: "boolean",
    },
    titleAlign: {
      control: "select",
      options: ["left", "center", "right"],
    },
    type: {
      control: "select",
      options: ["default", "success", "warning", "error"],
    },
    isCloseAble: {
      control: "boolean",
    },
  },
}

export default meta
type Story = StoryObj<typeof Modal>

const ModalWithFooter = (args: React.ComponentProps<typeof Modal>) => {
  const [open, setOpen] = useState(args.isOpen ?? false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Abrir modal</Button>

      <Modal
        {...args}
        isOpen={open}
        onClose={() => setOpen(false)}
        buttonCancel={{
          children: "Cancelar",
          onClick: () => setOpen(false),
        }}
        buttonOk={{
          children: "Aceptar",
          onClick: () => setOpen(false),
        }}
      />
    </>
  )
}

const ModalWithoutFooter = (args: React.ComponentProps<typeof Modal>) => {
  const [open, setOpen] = useState(args.isOpen ?? false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Abrir modal</Button>

      <Modal {...args} isOpen={open} onClose={() => setOpen(false)} />
    </>
  )
}

export const Default: Story = {
  render: args => <ModalWithFooter {...args} />,
  args: {
    title: "Título del modal",
    message: "Este es un mensaje descriptivo del modal.",
    isCloseAble: true,
  },
}

export const WithCustomContent: Story = {
  render: args => <ModalWithFooter {...args} />,
  args: {
    title: "Modal con contenido",
    message: "Puedes renderizar cualquier cosa aquí",
    children: (
      <div className="p-4 bg-gray-1 rounded-md">
        <p className="text-sm">
          Este contenido viene desde <strong>children</strong>.
        </p>
      </div>
    ),
  },
}

export const Success: Story = {
  render: args => <ModalWithFooter {...args} />,
  args: {
    type: "success",
    title: "Operación exitosa",
    message: "La acción se completó correctamente.",
  },
}

export const Warning: Story = {
  render: args => <ModalWithFooter {...args} />,
  args: {
    type: "warning",
    title: "Advertencia",
    message: "Esta acción puede tener consecuencias.",
  },
}

export const Error: Story = {
  render: args => <ModalWithFooter {...args} />,
  args: {
    type: "error",
    title: "Error",
    message: "Ocurrió un error inesperado.",
  },
}

export const WithoutFooter: Story = {
  render: args => <ModalWithoutFooter {...args} />,
  args: {
    title: "Modal sin footer",
    message: "No se muestran botones de acción.",
  },
}
