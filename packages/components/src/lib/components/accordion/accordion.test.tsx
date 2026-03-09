import { act, render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import userEvent from "@testing-library/user-event"
import { Accordion } from "@/components"

describe("Accordion", () => {
  const mockItems = [
    { id: "item-1", title: "Title 1", content: "Content 1" },
    { id: "item-2", title: "Title 2", content: "Content 2" },
  ]

  it("renders accordion items", () => {
    act(() => {
      render(<Accordion items={mockItems} />)
    })

    expect(screen.getByText("Title 1")).toBeDefined()
    expect(screen.getByText("Title 2")).toBeDefined()
  })

  it("expands content when clicked", async () => {
    const user = userEvent.setup()
    act(() => {
      render(<Accordion items={mockItems} />)
    })

    await user.click(screen.getByText("Title 1"))
    expect(screen.getByText("Content 1")).toBeDefined()
  })

  it("renders with default expanded item", () => {
    act(() => {
      render(<Accordion items={mockItems} defaultValue="item-1" />)
    })
    expect(screen.getByText("Content 1")).toBeDefined()
  })

  it("renders without divider when showDivider is false", () => {
    act(() => {
      render(<Accordion items={mockItems} showDivider={false} />)
    })
    const dividers = document.querySelectorAll("hr")
    expect(dividers).toHaveLength(0)
  })

  it("renders with divider by default", async () => {
    const user = userEvent.setup()
    act(() => {
      render(<Accordion items={mockItems} />)
    })

    await user.click(screen.getByText("Title 1"))
    const dividers = document.querySelectorAll("hr")
    expect(dividers.length).toBeGreaterThan(0)
  })

  it("renders custom trigger icons", () => {
    const itemsWithIcons = [
      {
        id: "item-1",
        title: "Title 1",
        content: "Content 1",
        triggerIcon: <span data-testid="custom-icon">+</span>,
      },
      { id: "item-2", title: "Title 2", content: "Content 2" },
    ]
    act(() => {
      render(<Accordion items={itemsWithIcons} />)
    })

    expect(screen.getByTestId("custom-icon")).toBeDefined()
  })

  it("applies custom class names", () => {
    const customClassNames = {
      container: "custom-container",
      item: "custom-item",
      trigger: "custom-trigger",
      content: "custom-content",
    }
    act(() => {
      render(<Accordion items={mockItems} classNames={customClassNames} />)
    })

    expect(document.querySelector(".custom-container")).toBeDefined()
  })

  it("renders React node titles", () => {
    const itemsWithNodeTitles = [
      {
        id: "item-1",
        title: <span data-testid="node-title">Custom Title</span>,
        content: "Content 1",
      },
    ]
    act(() => {
      render(<Accordion items={itemsWithNodeTitles} />)
    })

    expect(screen.getByTestId("node-title")).toBeDefined()
  })

  it("renders React node content", async () => {
    const user = userEvent.setup()
    const itemsWithNodeContent = [
      {
        id: "item-1",
        title: "Title 1",
        content: <div data-testid="node-content">Custom Content</div>,
      },
    ]
    act(() => {
      render(<Accordion items={itemsWithNodeContent} />)
    })

    await user.click(screen.getByText("Title 1"))
    expect(screen.getByTestId("node-content")).toBeDefined()
  })
})
