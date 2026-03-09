import type { Meta, StoryObj } from "@storybook/react"

import { useState } from "react"
import Tabs from "./tabs.component"

const items = [
  {
    key: "1",
    label: <>Información personal</>,
    content: "Content of Tab Pane 1",
  },
  {
    key: "2",
    label: "Datos laborales",
    content: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Datos del domicilio",
    content: (
      <div className="rounded-md bg-yellow-50 p-4">
        <h3 className="text-sm font-medium text-yellow-800">
          Attention needed
        </h3>
        <p className="mt-2 text-sm text-yellow-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    ),
  },
  {
    key: "4",
    label: "Referencias personales",
    content: "Content of Tab Pane 3",
    disabled: true,
  },
]

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Example: Story = {
  args: {
    currentActiveKey: "1",
    type: "segmented",
    items,
    onChange: () => {},
    activeColorTabs: "primary-blue",
  },
}

export const ImplementTab: Story = {
  args: {
    type: "segmented",
    items,
  },
  render: args => {
    const [currentTab, setCurrentTab] = useState("1")

    return (
      <Tabs {...args} currentActiveKey={currentTab} onChange={setCurrentTab} />
    )
  },
}
