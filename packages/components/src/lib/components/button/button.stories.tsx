import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "@/components"

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "secondary", "text", "withoutColor"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
    },
    cursor: {
      control: "select",
      options: ["pointer", "default", "not-allowed", "wait", "text"],
    },
    isLoading: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    positionLoading: {
      control: "radio",
      options: ["left", "right"],
    },
    onClick: { action: "clicked" },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "md",
    cursor: "pointer",
  },
}

export const Primary: Story = {
  args: {
    children: "Confirmar",
    variant: "primary",
    size: "xl",
  },
}

export const WithLoadingLeft: Story = {
  args: {
    children: "Cargando",
    variant: "primary",
    isLoading: true,
    positionLoading: "left",
  },
}

export const WithLoadingRight: Story = {
  args: {
    children: "Cargando",
    variant: "secondary",
    isLoading: true,
    positionLoading: "right",
  },
}

export const Disabled: Story = {
  args: {
    children: "Deshabilitado",
    variant: "primary",
    disabled: true,
  },
}

export const CursorVariants: Story = {
  render: args => (
    <div className="flex gap-4 flex-wrap">
      <Button {...args} cursor="pointer">
        Pointer
      </Button>
      <Button {...args} cursor="default">
        Default
      </Button>
      <Button {...args} cursor="wait" isLoading>
        Wait
      </Button>
      <Button {...args} cursor="not-allowed" disabled>
        Not allowed
      </Button>
      <Button {...args} cursor="text">
        Text
      </Button>
    </div>
  ),
  args: {
    variant: "primary",
    size: "md",
  },
}
