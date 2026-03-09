import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import userEvent from "@testing-library/user-event"
import { Tag } from "@/components"

describe("Tag Component", () => {
  it("renders with children", () => {
    render(<Tag>Test Tag</Tag>)
    expect(screen.getByText("Test Tag")).toBeInTheDocument()
  })

  it("applies correct type classes", () => {
    const { container: successContainer } = render(
      <Tag type="success">Success</Tag>
    )
    const { container: infoContainer } = render(<Tag type="info">Info</Tag>)
    const { container: warningContainer } = render(
      <Tag type="warning">Warning</Tag>
    )
    const { container: errorContainer } = render(<Tag type="error">Error</Tag>)

    expect(successContainer.firstChild).toHaveClass(
      "bg-green-1",
      "text-green-6",
      "border-green-3"
    )
    expect(infoContainer.firstChild).toHaveClass(
      "bg-blue-1",
      "text-blue-6",
      "border-blue-3"
    )
    expect(warningContainer.firstChild).toHaveClass(
      "bg-gold-1",
      "text-gold-6",
      "border-gold-3"
    )
    expect(errorContainer.firstChild).toHaveClass(
      "bg-red-1",
      "text-red-6",
      "border-red-3"
    )
  })

  it("shows icon when showIcon is true", () => {
    const { container } = render(<Tag showIcon>With Icon</Tag>)
    expect(container.querySelector("svg")).toBeInTheDocument()
  })

  it("renders close button and calls onClose when clicked", async () => {
    const user = userEvent.setup()
    const onCloseMock = vi.fn()

    render(
      <Tag closable onClose={onCloseMock}>
        Closable Tag
      </Tag>
    )

    const closeButton = screen.getByRole("button", { name: "Remove tag" })
    expect(closeButton).toBeInTheDocument()

    await user.click(closeButton)
    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })

  it("applies custom className", () => {
    const { container } = render(<Tag className="custom-class">Custom</Tag>)
    expect(container.firstChild).toHaveClass("custom-class")
  })

  it("applies custom colors", () => {
    const { container } = render(
      <Tag bgColor="#FF0000" textColor="#00FF00" borderColor="#0000FF">
        Custom Colors
      </Tag>
    )

    expect(container.firstChild).toHaveStyle({
      backgroundColor: "#FF0000",
      color: "#00FF00",
      borderColor: "#0000FF",
    })
  })
})
