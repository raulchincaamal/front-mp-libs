import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import { Pagination } from "@/components"

describe("Pagination Component", () => {
  it("renders correctly with basic props", () => {
    const onPageChange = vi.fn()
    render(
      <Pagination currentPage={1} totalPages={5} onPageChange={onPageChange} />
    )

    expect(screen.getByLabelText("Previous page")).toBeInTheDocument()
    expect(screen.getByLabelText("Next page")).toBeInTheDocument()
    expect(screen.getByLabelText("Page 1")).toBeInTheDocument()
  })

  it("disables previous button on first page", () => {
    const onPageChange = vi.fn()
    render(
      <Pagination currentPage={1} totalPages={5} onPageChange={onPageChange} />
    )

    expect(screen.getByLabelText("Previous page")).toBeDisabled()
  })

  it("disables next button on last page", () => {
    const onPageChange = vi.fn()
    render(
      <Pagination currentPage={5} totalPages={5} onPageChange={onPageChange} />
    )

    expect(screen.getByLabelText("Next page")).toBeDisabled()
  })

  it("calls onPageChange when clicking navigation buttons", () => {
    const onPageChange = vi.fn()
    render(
      <Pagination currentPage={3} totalPages={5} onPageChange={onPageChange} />
    )

    fireEvent.click(screen.getByLabelText("Previous page"))
    expect(onPageChange).toHaveBeenCalledWith(2)

    fireEvent.click(screen.getByLabelText("Next page"))
    expect(onPageChange).toHaveBeenCalledWith(4)
  })

  it("calls onPageChange when clicking page number", () => {
    const onPageChange = vi.fn()
    render(
      <Pagination currentPage={1} totalPages={5} onPageChange={onPageChange} />
    )

    fireEvent.click(screen.getByLabelText("Page 3"))
    expect(onPageChange).toHaveBeenCalledWith(3)
  })

  it("marks current page as active", () => {
    const onPageChange = vi.fn()
    render(
      <Pagination currentPage={3} totalPages={5} onPageChange={onPageChange} />
    )

    const activePage = screen.getByLabelText("Page 3")
    expect(activePage).toHaveAttribute("aria-current", "page")
  })

  it("applies custom className", () => {
    const onPageChange = vi.fn()
    const { container } = render(
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={onPageChange}
        className="custom-class"
      />
    )

    expect(container.firstChild).toHaveClass("custom-class")
  })
})
