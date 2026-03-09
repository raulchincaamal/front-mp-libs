import { describe, it, expect, vi } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import { Checkbox } from "@/components"

describe("Checkbox", () => {
  it("renders checkbox with label", () => {
    render(<Checkbox>Accept terms</Checkbox>)

    expect(screen.getByText("Accept terms")).toBeInTheDocument()
  })

  it("renders unchecked checkbox by default", () => {
    render(<Checkbox>Option</Checkbox>)

    const checkbox = screen.getByRole("checkbox")
    expect(checkbox).not.toBeChecked()
  })

  it("renders checked checkbox when checked prop is true", () => {
    render(<Checkbox checked>Option</Checkbox>)

    const checkbox = screen.getByRole("checkbox")
    expect(checkbox).toBeChecked()
  })

  it("calls onCheckedChange when clicked", () => {
    const onCheckedChange = vi.fn()

    render(<Checkbox onCheckedChange={onCheckedChange}>Option</Checkbox>)

    const checkbox = screen.getByRole("checkbox")
    fireEvent.click(checkbox)

    expect(onCheckedChange).toHaveBeenCalledWith(true)
  })

  it("does not call onCheckedChange when disabled", () => {
    const onCheckedChange = vi.fn()

    render(
      <Checkbox disabled onCheckedChange={onCheckedChange}>
        Option
      </Checkbox>
    )

    const checkbox = screen.getByRole("checkbox")
    fireEvent.click(checkbox)

    expect(onCheckedChange).not.toHaveBeenCalled()
  })

  it("renders indeterminate state", () => {
    render(<Checkbox indeterminate>Indeterminate option</Checkbox>)

    const checkbox = screen.getByRole("checkbox")

    // Radix expone esto como aria-checked="mixed"
    expect(checkbox).toHaveAttribute("aria-checked", "mixed")
  })

  it("renders disabled checkbox", () => {
    render(<Checkbox disabled>Disabled option</Checkbox>)

    const checkbox = screen.getByRole("checkbox")
    expect(checkbox).toBeDisabled()
  })
})
