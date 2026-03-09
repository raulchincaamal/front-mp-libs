import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import type { ListItem } from "./list.types"
import { List } from "@/components"

describe("List Component", () => {
  const mockItems: ListItem[] = [
    { id: 1, content: "Item 1" },
    { id: 2, content: "Item 2" },
    { id: 3, content: "Item 3" },
  ]

  it("renders items correctly", () => {
    render(<List items={mockItems} />)
    expect(screen.getByText("Item 1")).toBeInTheDocument()
    expect(screen.getByText("Item 2")).toBeInTheDocument()
    expect(screen.getByText("Item 3")).toBeInTheDocument()
  })

  it("renders with title", () => {
    render(<List items={mockItems} title="Test Title" />)
    expect(screen.getByText("Test Title")).toBeInTheDocument()
  })

  it("renders empty message when no items", () => {
    render(<List items={[]} emptyMessage="No data" />)
    expect(screen.getByText("No data")).toBeInTheDocument()
  })

  it("handles click events", () => {
    const onClick = vi.fn()
    const itemsWithClick: ListItem[] = [
      { id: 1, content: "Clickable", onClick },
    ]
    render(<List items={itemsWithClick} />)
    fireEvent.click(screen.getByText("Clickable"))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it("renders links correctly", () => {
    const itemsWithLinks: ListItem[] = [
      { id: 1, content: "Link 1", href: "/link-1" },
    ]
    render(<List items={itemsWithLinks} />)
    const link = screen.getByText("Link 1")
    expect(link).toHaveAttribute("href", "/link-1")
  })

  it("shows pagination when enabled", () => {
    const manyItems: ListItem[] = Array.from({ length: 15 }, (_, i) => ({
      id: i + 1,
      content: `Item ${i + 1}`,
    }))
    render(<List items={manyItems} withPagination itemsPerPage={5} />)
    expect(screen.getByLabelText("Previous page")).toBeInTheDocument()
    expect(screen.getByLabelText("Next page")).toBeInTheDocument()
  })
})
