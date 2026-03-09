import type { Meta, StoryObj } from "@storybook/react"
import { Spinner } from "@/components"

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Small: Story = {
  args: {
    size: "sm",
    text: "Cargando...",
  },
}

export const Medium: Story = {
  args: {
    size: "md",
    text: "Procesando...",
  },
}

export const Large: Story = {
  args: {
    size: "lg",
    text: "Espere por favor",
  },
}

export const ExtraLarge: Story = {
  args: {
    size: "xl",
    text: "Cargando datos grandes...",
  },
}

export const WithoutText: Story = {
  args: {
    size: "md",
  },
}

export const LongText: Story = {
  args: {
    size: "md",
    text: "Este es un texto de carga muy largo para probar el comportamiento del spinner con textos extensos.",
  },
}

export const CustomColorRed: Story = {
  args: {
    size: "md",
    text: "Color rojo",
    color: "border-t-red-500",
  },
}

export const CustomColorGreen: Story = {
  args: {
    size: "md",
    text: "Color verde",
    color: "border-t-green-500",
  },
}

export const CustomColorYellow: Story = {
  args: {
    size: "md",
    text: "Color amarillo",
    color: "border-t-yellow-500",
  },
}

export const Accessible: Story = {
  args: {
    size: "md",
    text: "Cargando accesible...",
    "aria-label": "Cargando información importante",
  },
}
