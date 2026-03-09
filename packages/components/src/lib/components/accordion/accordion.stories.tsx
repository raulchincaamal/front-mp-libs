import type { Meta, StoryObj } from "@storybook/react"
import { Accordion } from "@/components"
import { ArrowMP } from "@/assets/icons"

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    showDivider: {
      control: "boolean",
    },
    defaultValue: {
      control: "text",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const basicItems = [
  {
    id: "item-1",
    title: "What is React?",
    content: "React is a JavaScript library for building user interfaces.",
  },
  {
    id: "item-2",
    title: "What is TypeScript?",
    content: "TypeScript is a typed superset of JavaScript.",
  },
  {
    id: "item-3",
    title: "What is Tailwind?",
    content: "Tailwind CSS is a utility-first CSS framework.",
  },
]

export const Default: Story = {
  args: {
    items: basicItems,
  },
}

export const WithDefaultExpanded: Story = {
  args: {
    items: basicItems,
    defaultValue: "item-1",
  },
}

export const WithoutDivider: Story = {
  args: {
    items: basicItems,
    showDivider: false,
  },
}

export const WithCustomTriggerIcons: Story = {
  args: {
    items: [
      {
        id: "item-1",
        title: "Custom Icon Item",
        content: "This item has a custom trigger icon.",
        triggerIcon: <span>+</span>,
      },
      {
        id: "item-2",
        title: "Default Icon Item",
        content: "This item uses the default arrow icon.",
      },
      {
        id: "item-3",
        title: "Another Custom Icon",
        content: "This item has a different custom icon.",
        triggerIcon: <ArrowMP className="size-4 fill-red-500" />,
      },
    ],
  },
}

export const WithCustomContent: Story = {
  args: {
    items: [
      {
        id: "features",
        title: "Features",
        content: (
          <ul className="list-disc pl-4">
            <li>Fast and lightweight</li>
            <li>Accessible by default</li>
            <li>Customizable styling</li>
          </ul>
        ),
      },
      {
        id: "installation",
        title: "Installation",
        content: (
          <code className="bg-gray-100 p-2 rounded">
            npm install mp-ui-components
          </code>
        ),
      },
    ],
  },
}

export const WithCustomClassNames: Story = {
  args: {
    items: basicItems,
    classNames: {
      container: "bg-gray-50 p-4 rounded-lg",
      item: "border border-gray-200",
      trigger: "bg-blue-50 hover:bg-blue-100",
      content: "bg-white",
      divider: "bg-blue-500 h-1",
    },
  },
}

export const WithReactNodeTitles: Story = {
  args: {
    items: [
      {
        id: "item-1",
        title: (
          <div className="flex items-center gap-2">
            <span className="text-blue-600">🚀</span>
            <span>React with Icon</span>
          </div>
        ),
        content: "This accordion item has a React node as title.",
      },
      {
        id: "item-2",
        title: <div className="font-bold text-green-600">Styled Title</div>,
        content: "This title is styled with custom classes.",
      },
    ],
  },
}
