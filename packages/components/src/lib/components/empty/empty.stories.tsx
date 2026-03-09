import type { Meta, StoryObj } from "@storybook/react"
import { NoDataIcon } from "@/assets/icons"
import type { EmptyProps } from "./empty.types"
import { Empty } from "@/components"

const meta: Meta<typeof Empty> = {
  title: "Components/Empty",
  component: Empty,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    icon: { control: false },
    className: { control: "text" },
  },
}
export default meta

type Story = StoryObj<typeof Empty>

export const Default: Story = {
  render: (args: EmptyProps) => (
    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1 p-4">
      <div className="flex justify-center">
        <div className="p-4">
          <Empty {...args} />
        </div>
      </div>
    </div>
  ),
  args: {
    text: "No hay datos para mostrar",
    icon: <NoDataIcon />,
  },
}

export const CustomText: Story = {
  render: (args: EmptyProps) => (
    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1 p-4">
      <div className="flex justify-center">
        <div className="p-4">
          <Empty {...args} />
        </div>
      </div>
    </div>
  ),
  args: {
    text: "Aquí no hay nada todavía",
    icon: <NoDataIcon />,
  },
}

export const CustomIcon: Story = {
  render: (args: EmptyProps) => (
    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1 p-4">
      <div className="flex justify-center">
        <div className="p-4">
          <Empty {...args} />
        </div>
      </div>
    </div>
  ),
  args: {
    text: "Contenido vacío",
    icon: (
      <div
        style={{
          width: 48,
          height: 48,
          background: "gray",
          borderRadius: "50%",
        }}
      />
    ),
  },
}
