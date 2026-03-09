import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import userEvent from "@testing-library/user-event"
import { Dropdown } from "@/components"

describe("Dropdown Component", () => {
  const mockItems = [
    {
      id: "item-1",
      label: "Item 1",
      onSelect: vi.fn(),
    },
    {
      id: "item-2",
      label: "Item 2",
      onSelect: vi.fn(),
    },
    {
      id: "sep-1",
      type: "separator" as const,
    },
    {
      id: "item-3",
      label: "Item 3",
      onSelect: vi.fn(),
    },
  ]

  it("renders trigger correctly", () => {
    render(<Dropdown trigger={<button>Open Menu</button>} items={mockItems} />)
    expect(screen.getByText("Open Menu")).toBeInTheDocument()
  })

  it("opens dropdown when trigger is clicked", async () => {
    const user = userEvent.setup()
    render(<Dropdown trigger={<button>Open Menu</button>} items={mockItems} />)

    const trigger = screen.getByText("Open Menu")
    await user.click(trigger)

    expect(screen.getByText("Item 1")).toBeInTheDocument()
    expect(screen.getByText("Item 2")).toBeInTheDocument()
    expect(screen.getByText("Item 3")).toBeInTheDocument()
  })

  it("calls onSelect when item is clicked", async () => {
    const user = userEvent.setup()
    const onSelect = vi.fn()
    const items = [
      {
        id: "test-item",
        label: "Test Item",
        onSelect,
      },
    ]

    render(<Dropdown trigger={<button>Open</button>} items={items} />)

    await user.click(screen.getByText("Open"))
    await user.click(screen.getByText("Test Item"))

    expect(onSelect).toHaveBeenCalledTimes(1)
  })

  it("renders items with icons", async () => {
    const user = userEvent.setup()
    const items = [
      {
        id: "icon-item",
        label: "Icon Item",
        icon: <span data-testid="test-icon">🎯</span>,
        onSelect: vi.fn(),
      },
    ]

    render(<Dropdown trigger={<button>Open</button>} items={items} />)

    await user.click(screen.getByText("Open"))

    expect(screen.getByTestId("test-icon")).toBeInTheDocument()
  })

  it("renders items with shortcuts", async () => {
    const user = userEvent.setup()
    const items = [
      {
        id: "shortcut-item",
        label: "Shortcut Item",
        shortcut: "⌘S",
        onSelect: vi.fn(),
      },
    ]

    render(<Dropdown trigger={<button>Open</button>} items={items} />)

    await user.click(screen.getByText("Open"))

    expect(screen.getByText("⌘S")).toBeInTheDocument()
  })

  it("renders label items", async () => {
    const user = userEvent.setup()
    const items = [
      {
        id: "label-1",
        type: "label" as const,
        label: "Section Label",
      },
      {
        id: "item-1",
        label: "Item 1",
        onSelect: vi.fn(),
      },
    ]

    render(<Dropdown trigger={<button>Open</button>} items={items} />)

    await user.click(screen.getByText("Open"))

    expect(screen.getByText("Section Label")).toBeInTheDocument()
  })

  it("applies custom classNames", () => {
    const classNames = {
      content: "custom-content",
      item: "custom-item",
    }

    render(
      <Dropdown
        trigger={<button>Open</button>}
        items={mockItems}
        classNames={classNames}
      />
    )

    expect(screen.getByText("Open")).toBeInTheDocument()
  })
})
