import type { Meta, StoryObj } from "@storybook/react"
import { RadioGroup } from "@/components"

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

const defaultItems = [
  {
    id: "r1",
    label: "Default",
    value: "default",
    disabled: false,
    checked: false,
  },
  {
    id: "r2",
    label: "Comfortable",
    value: "comfortable",
    disabled: false,
    checked: false,
  },
  {
    id: "r3",
    label: "Compact",
    value: "compact",
    disabled: false,
    checked: false,
  },
]

export const Default: Story = {
  args: {
    group: defaultItems,
    defaultValue: "default",
    // eslint-disable-next-line no-console
    onValueChange: value => console.log("Selected:", value),
  },
}

export const WithDisabled: Story = {
  args: {
    group: [
      ...defaultItems.slice(0, 1).map(item => ({ ...item, disabled: true })),
      ...defaultItems.slice(1),
    ],
    defaultValue: "comfortable",
    // eslint-disable-next-line no-console
    onValueChange: value => console.log("Selected:", value),
  },
}

export const WithCallback: Story = {
  args: {
    group: defaultItems,
    defaultValue: "compact",
    onValueChange: value => alert(`Selected: ${value}`),
  },
}
