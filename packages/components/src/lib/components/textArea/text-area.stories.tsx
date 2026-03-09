import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { TextArea } from "@/components"

const meta: Meta<typeof TextArea> = {
  title: "Components/Form/TextArea",
  component: TextArea,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["normal", "underline"],
    },
    inputSize: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
    },
    disabled: {
      control: "boolean",
    },
    readOnly: {
      control: "boolean",
    },
    required: {
      control: "boolean",
    },
    clearOnFocus: {
      control: "boolean",
    },
  },
}

export default meta
type Story = StoryObj<typeof TextArea>

const TextAreaWithState = (args: React.ComponentProps<typeof TextArea>) => {
  const [value, setValue] = useState(args.defaultValue ?? "")

  return (
    <TextArea
      {...args}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  )
}

export const Default: Story = {
  render: args => <TextAreaWithState {...args} />,
  args: {
    name: "description",
    label: "Descripción",
    placeholder: "Escribe aquí...",
    maxLength: 200,
    minLength: 10,
    inputSize: "xl",
  },
}

export const Underline: Story = {
  render: args => <TextAreaWithState {...args} />,
  args: {
    name: "underline",
    label: "Comentario",
    type: "underline",
    placeholder: "Comentario rápido",
    maxLength: 150,
    minLength: 5,
  },
}

export const WithError: Story = {
  render: args => <TextAreaWithState {...args} />,
  args: {
    name: "error",
    label: "Descripción",
    placeholder: "Campo con error",
    error: "Este campo es obligatorio",
    maxLength: 100,
    minLength: 10,
  },
}

export const Disabled: Story = {
  render: args => <TextAreaWithState {...args} />,
  args: {
    name: "disabled",
    label: "Descripción",
    placeholder: "No editable",
    disabled: true,
    defaultValue: "Texto deshabilitado",
  },
}

export const ReadOnly: Story = {
  render: args => <TextAreaWithState {...args} />,
  args: {
    name: "readonly",
    label: "Solo lectura",
    readOnly: true,
    defaultValue: "Este texto no se puede modificar",
  },
}

export const WithFooterText: Story = {
  render: args => <TextAreaWithState {...args} />,
  args: {
    name: "footer",
    label: "Mensaje",
    labelFooter: "Mínimo 20 caracteres",
    maxLength: 300,
    minLength: 20,
  },
}
