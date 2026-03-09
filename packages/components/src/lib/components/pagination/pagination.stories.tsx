import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { Pagination } from "@/components"

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "Component size",
    },
    currentPage: {
      control: "number",
      description: "Current active page",
    },
    totalPages: {
      control: "number",
      description: "Total number of pages",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default pagination with controlled state
 */
export const Default: Story = {
  render: args => {
    const [currentPage, setCurrentPage] = useState(1)

    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    )
  },
  args: {
    totalPages: 10,
    size: "md",
  },
}

/**
 * Small pagination
 */
export const SmallSize: Story = {
  render: args => {
    const [currentPage, setCurrentPage] = useState(1)

    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    )
  },
  args: {
    totalPages: 10,
    size: "sm",
  },
}

/**
 * Medium pagination (default)
 */
export const MediumSize: Story = {
  render: args => {
    const [currentPage, setCurrentPage] = useState(1)

    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    )
  },
  args: {
    totalPages: 10,
    size: "md",
  },
}

/**
 * Large pagination
 */
export const LargeSize: Story = {
  render: args => {
    const [currentPage, setCurrentPage] = useState(1)

    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    )
  },
  args: {
    totalPages: 10,
    size: "lg",
  },
}

/**
 * Extra large pagination
 */
export const ExtraLargeSize: Story = {
  render: args => {
    const [currentPage, setCurrentPage] = useState(1)

    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    )
  },
  args: {
    totalPages: 10,
    size: "xl",
  },
}

/**
 * Pagination with few pages (no ellipsis)
 */
export const FewPages: Story = {
  render: args => {
    const [currentPage, setCurrentPage] = useState(1)

    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    )
  },
  args: {
    totalPages: 5,
    size: "md",
  },
}

/**
 * Pagination with many pages (with ellipsis)
 */
export const ManyPages: Story = {
  render: args => {
    const [currentPage, setCurrentPage] = useState(5)

    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    )
  },
  args: {
    totalPages: 20,
    size: "md",
  },
}

/**
 * Pagination at first page
 */
export const FirstPage: Story = {
  render: args => {
    const [currentPage, setCurrentPage] = useState(1)

    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    )
  },
  args: {
    totalPages: 15,
    size: "md",
  },
}

/**
 * Pagination at last page
 */
export const LastPage: Story = {
  render: args => {
    const [currentPage, setCurrentPage] = useState(15)

    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    )
  },
  args: {
    totalPages: 15,
    size: "md",
  },
}

/**
 * Comparison of all sizes
 */
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8 items-center">
      {(["sm", "md", "lg", "xl"] as const).map(size => {
        const [currentPage, setCurrentPage] = useState(3)

        return (
          <div key={size} className="flex flex-col items-center gap-2">
            <span className="text-sm font-semibold capitalize">{size}</span>
            <Pagination
              currentPage={currentPage}
              totalPages={10}
              onPageChange={setCurrentPage}
              size={size}
            />
          </div>
        )
      })}
    </div>
  ),
}
