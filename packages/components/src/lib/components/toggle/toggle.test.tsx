import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import userEvent from "@testing-library/user-event"
import Toggle from "./toggle.component"

describe("Toggle", () => {
  it("renders toggle with text", () => {
    render(<Toggle>Toggle Text</Toggle>)

    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByText("Toggle Text")).toBeInTheDocument()
  })

  it("applies default variant classes", () => {
    render(<Toggle>Default</Toggle>)

    const button = screen.getByRole("button")
    expect(button).toHaveClass("bg-transparent")
  })

  it("applies outline variant classes", () => {
    render(<Toggle variant="outline">Outline</Toggle>)

    const button = screen.getByRole("button")
    expect(button).toHaveClass("border")
  })

  it("applies default size classes", () => {
    render(<Toggle>Default Size</Toggle>)

    const button = screen.getByRole("button")
    expect(button).toHaveClass("h-8")
  })

  it("applies small size classes", () => {
    render(<Toggle size="sm">Small</Toggle>)

    const button = screen.getByRole("button")
    expect(button).toHaveClass("h-7")
  })

  it("applies large size classes", () => {
    render(<Toggle size="lg">Large</Toggle>)

    const button = screen.getByRole("button")
    expect(button).toHaveClass("h-9")
  })

  it("applies custom className", () => {
    render(<Toggle className="custom-class">Custom</Toggle>)

    const button = screen.getByRole("button")
    expect(button).toHaveClass("custom-class")
  })

  it("toggles pressed state on click", async () => {
    const user = userEvent.setup()
    render(<Toggle>Toggle Me</Toggle>)

    const button = screen.getByRole("button")
    expect(button).toHaveAttribute("aria-pressed", "false")

    await user.click(button)
    expect(button).toHaveAttribute("aria-pressed", "true")

    await user.click(button)
    expect(button).toHaveAttribute("aria-pressed", "false")
  })

  it("calls onPressedChange when toggled", async () => {
    const user = userEvent.setup()
    const onPressedChange = vi.fn()
    render(<Toggle onPressedChange={onPressedChange}>Toggle</Toggle>)

    const button = screen.getByRole("button")
    await user.click(button)

    expect(onPressedChange).toHaveBeenCalledTimes(1)
    expect(onPressedChange).toHaveBeenCalledWith(true)
  })

  it("is disabled when disabled prop is true", () => {
    render(<Toggle disabled>Disabled</Toggle>)

    const button = screen.getByRole("button")
    expect(button).toBeDisabled()
  })

  it("does not toggle when disabled", async () => {
    const user = userEvent.setup()
    const onPressedChange = vi.fn()
    render(
      <Toggle disabled onPressedChange={onPressedChange}>
        Disabled
      </Toggle>
    )

    const button = screen.getByRole("button")
    await user.click(button)

    expect(onPressedChange).not.toHaveBeenCalled()
  })

  it("has correct data-slot attribute", () => {
    render(<Toggle>Toggle</Toggle>)

    const button = screen.getByRole("button")
    expect(button).toHaveAttribute("data-slot", "toggle")
  })

  it("supports controlled state", () => {
    const { rerender } = render(<Toggle pressed={false}>Controlled</Toggle>)

    const button = screen.getByRole("button")
    expect(button).toHaveAttribute("aria-pressed", "false")

    rerender(<Toggle pressed={true}>Controlled</Toggle>)
    expect(button).toHaveAttribute("aria-pressed", "true")
  })
})
