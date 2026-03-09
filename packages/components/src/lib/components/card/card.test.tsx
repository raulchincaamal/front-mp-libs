import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Card } from "@/components"

describe("Card Component", () => {
  const testContent = "Test card content"

  it("renders correctly with children", () => {
    render(<Card>{testContent}</Card>)
    expect(screen.getByText(testContent)).toBeInTheDocument()
  })

  it("applies default classes", () => {
    const { container } = render(<Card>{testContent}</Card>)
    const cardElement = container.firstChild as HTMLElement

    expect(cardElement).toHaveClass(
      "bg-white",
      "p-4",
      "shadow-lg",
      "rounded-2xl"
    )
  })

  it("applies vertical alignment", () => {
    const { container } = render(<Card align="vertical">{testContent}</Card>)
    const cardElement = container.firstChild as HTMLElement

    expect(cardElement).toHaveClass("md:flex-row")
  })

  it("applies custom className", () => {
    const { container } = render(
      <Card className="custom-class">{testContent}</Card>
    )
    const cardElement = container.firstChild as HTMLElement

    expect(cardElement).toHaveClass("custom-class")
  })

  it("removes shadow when shadow is false", () => {
    const { container } = render(<Card shadow={false}>{testContent}</Card>)
    const cardElement = container.firstChild as HTMLElement

    expect(cardElement).not.toHaveClass("shadow-lg")
  })

  it("removes rounded corners when rounded is false", () => {
    const { container } = render(<Card rounded={false}>{testContent}</Card>)
    const cardElement = container.firstChild as HTMLElement

    expect(cardElement).not.toHaveClass("rounded-2xl")
  })

  it("removes border when bordered is false", () => {
    const { container } = render(<Card bordered={false}>{testContent}</Card>)
    const cardElement = container.firstChild as HTMLElement

    expect(cardElement).not.toHaveClass("border")
  })
})
