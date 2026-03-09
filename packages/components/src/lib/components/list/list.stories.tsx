import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import type { ListItem } from "./list.types"
import { List } from "@/components"

const meta: Meta<typeof List> = {
  title: "Components/List",
  component: List,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The List component displays a list of items with optional pagination, sizes, and styles.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "Component size",
    },
    withPagination: {
      control: "boolean",
      description: "Enable pagination",
    },
    itemsPerPage: {
      control: "number",
      description: "Items per page",
    },
    showBorder: {
      control: "boolean",
      description: "Show border",
    },
    showShadow: {
      control: "boolean",
      description: "Show shadow",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Sample items
const sampleItems: ListItem[] = [
  { id: 1, content: "Block" },
  { id: 2, content: "Unblock" },
  { id: 3, content: "Unblock offline" },
  { id: 4, content: "Release" },
  { id: 5, content: "Update Macrolock" },
  { id: 6, content: "Check balance" },
  { id: 7, content: "Transaction history" },
  { id: 8, content: "Settings" },
]

const manyItems: ListItem[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  content: `Item ${i + 1}`,
}))

/**
 * Basic list without title
 */
export const Default: Story = {
  args: {
    items: sampleItems,
    size: "md",
  },
}

/**
 * List with title
 */
export const WithTitle: Story = {
  args: {
    items: sampleItems,
    title: "Available options",
    size: "md",
  },
}

/**
 * Small list
 */
export const SmallSize: Story = {
  args: {
    items: sampleItems,
    title: "Small list",
    size: "sm",
  },
}

/**
 * Medium list (default)
 */
export const MediumSize: Story = {
  args: {
    items: sampleItems,
    title: "Medium list",
    size: "md",
  },
}

/**
 * Large list
 */
export const LargeSize: Story = {
  args: {
    items: sampleItems,
    title: "Large list",
    size: "lg",
  },
}

/**
 * Extra large list
 */
export const ExtraLargeSize: Story = {
  args: {
    items: sampleItems,
    title: "Extra large list",
    size: "xl",
  },
}

/**
 * List with scroll (many items)
 */
export const WithScroll: Story = {
  args: {
    items: manyItems,
    title: "List with scroll",
    size: "md",
  },
}

/**
 * List with pagination
 */
export const WithPagination: Story = {
  render: args => {
    const [currentPage, setCurrentPage] = useState(1)

    return (
      <List {...args} currentPage={currentPage} onPageChange={setCurrentPage} />
    )
  },
  args: {
    items: manyItems,
    title: "List with pagination",
    size: "md",
    withPagination: true,
    itemsPerPage: 10,
  },
}

/**
 * List with links
 */
export const WithLinks: Story = {
  args: {
    items: [
      { id: 1, content: "Go to home", href: "/" },
      { id: 2, content: "View profile", href: "/profile" },
      { id: 3, content: "Settings", href: "/settings" },
      { id: 4, content: "Help", href: "/help" },
      { id: 5, content: "Sign out", href: "/logout" },
    ],
    title: "Navigation",
    size: "md",
  },
}

/**
 * List with click handlers
 */
export const WithClickHandlers: Story = {
  args: {
    items: [
      {
        id: 1,
        content: "Action 1",
        onClick: () => alert("Action 1 executed"),
      },
      {
        id: 2,
        content: "Action 2",
        onClick: () => alert("Action 2 executed"),
      },
      {
        id: 3,
        content: "Action 3",
        onClick: () => alert("Action 3 executed"),
      },
      {
        id: 4,
        content: "Disabled action",
        onClick: () => alert("Should not execute"),
        disabled: true,
      },
    ],
    title: "Actions",
    size: "md",
  },
}

/**
 * List without border or shadow
 */
export const NoBorderNoShadow: Story = {
  args: {
    items: sampleItems,
    title: "List without border or shadow",
    size: "md",
    showBorder: false,
    showShadow: false,
  },
}

/**
 * Empty list
 */
export const Empty: Story = {
  args: {
    items: [],
    title: "Empty list",
    size: "md",
    emptyMessage: "No items available",
  },
}

/**
 * List with custom height
 */
export const CustomHeight: Story = {
  args: {
    items: manyItems,
    title: "List with custom height",
    size: "md",
    height: "30rem",
  },
}

/**
 * Comparison of all sizes
 */
export const AllSizes: Story = {
  render: () => (
    <div className="flex gap-6 items-start flex-wrap">
      <div className="flex flex-col">
        <List items={sampleItems.slice(0, 5)} title="Small" size="sm" />
      </div>
      <div className="flex flex-col">
        <List items={sampleItems.slice(0, 5)} title="Medium" size="md" />
      </div>
      <div className="flex flex-col">
        <List items={sampleItems.slice(0, 5)} title="Large" size="lg" />
      </div>
      <div className="flex flex-col">
        <List items={sampleItems.slice(0, 5)} title="Extra Large" size="xl" />
      </div>
    </div>
  ),
}
