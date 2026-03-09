import { render, screen } from "@testing-library/react"
import { Divider } from "@/components"

describe("Divider", () => {
  it("renders a horizontal divider by default", () => {
    const { container } = render(<Divider />)

    const divider = container.firstChild as HTMLElement

    expect(divider).toBeInTheDocument()
    expect(divider).toHaveClass("flex")
    expect(divider).toHaveClass("h-px")
  })

  it("applies default background when horizontal and without children", () => {
    const { container } = render(<Divider />)

    const divider = container.firstChild as HTMLElement
    expect(divider).toHaveClass("bg-grays-Macropay-05")
  })

  it("renders children inside a span when horizontal", () => {
    render(<Divider>Texto</Divider>)

    const text = screen.getByText("Texto")
    expect(text).toBeInTheDocument()
    expect(text.tagName).toBe("SPAN")
  })

  it("adds before/after pseudo-element classes when children are present", () => {
    const { container } = render(<Divider>Texto</Divider>)

    const divider = container.firstChild as HTMLElement
    expect(divider.className).toContain("before:h-px")
    expect(divider.className).toContain("after:h-px")
  })

  it("applies alignment classes correctly (left)", () => {
    const { container } = render(<Divider align="left">Texto</Divider>)

    const divider = container.firstChild as HTMLElement
    expect(divider.className).toContain("before:w-[5%]")
    expect(divider.className).toContain("after:w-full")
  })

  it("applies alignment classes correctly (center)", () => {
    const { container } = render(<Divider align="center">Texto</Divider>)

    const divider = container.firstChild as HTMLElement
    expect(divider.className).toContain("before:w-full")
    expect(divider.className).toContain("after:w-full")
  })

  it("applies alignment classes correctly (right)", () => {
    const { container } = render(<Divider align="right">Texto</Divider>)

    const divider = container.firstChild as HTMLElement
    expect(divider.className).toContain("before:w-full")
    expect(divider.className).toContain("after:w-[5%]")
  })

  it("renders a vertical divider when type is vertical", () => {
    const { container } = render(<Divider type="vertical" />)

    const divider = container.firstChild as HTMLElement
    expect(divider).toHaveClass("border-s")
    expect(divider).toHaveClass("min-h-[1em]")
  })

  it("does not render children when type is vertical", () => {
    render(<Divider type="vertical">Texto</Divider>)

    expect(screen.queryByText("Texto")).not.toBeInTheDocument()
  })

  it("applies custom width when horizontal", () => {
    const { container } = render(<Divider width="w-1/2" />)

    const divider = container.firstChild as HTMLElement
    expect(divider).toHaveClass("w-1/2")
  })

  it("applies custom className", () => {
    const { container } = render(<Divider className="my-custom-class" />)

    const divider = container.firstChild as HTMLElement
    expect(divider).toHaveClass("my-custom-class")
  })
})
