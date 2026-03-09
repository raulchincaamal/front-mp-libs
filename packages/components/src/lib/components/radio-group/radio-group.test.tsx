import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import "@testing-library/jest-dom"
import { RadioGroup } from "@/components"

const radioItems = [
  {
    id: "r1",
    label: "Default",
    value: "default",
    disabled: false,
    checked: false,
  },
  {
    id: "r2",
    label: "Comfortable",
    value: "comfortable",
    disabled: false,
    checked: false,
  },
  {
    id: "r3",
    label: "Compact",
    value: "compact",
    disabled: true,
    checked: false,
  },
]

describe("RadioGroup", () => {
  it("renders radio group with items", () => {
    render(<RadioGroup group={radioItems} defaultValue="default" />)

    expect(screen.getByRole("radiogroup")).toBeInTheDocument()
    expect(screen.getAllByRole("radio")).toHaveLength(3)
    expect(screen.getByText("Default")).toBeInTheDocument()
    expect(screen.getByText("Comfortable")).toBeInTheDocument()
    expect(screen.getByText("Compact")).toBeInTheDocument()
  })

  it("selects radio option", () => {
    render(<RadioGroup group={radioItems} defaultValue="default" />)

    const comfortableRadio = screen.getByLabelText("Comfortable")
    fireEvent.click(comfortableRadio)

    expect(comfortableRadio).toBeChecked()
  })

  it("calls onValueChange callback", () => {
    const onValueChange = vi.fn()
    render(
      <RadioGroup
        group={radioItems}
        defaultValue="default"
        onValueChange={onValueChange}
      />
    )

    fireEvent.click(screen.getByLabelText("Comfortable"))
    expect(onValueChange).toHaveBeenCalledWith("comfortable")
  })

  it("handles disabled state", () => {
    render(<RadioGroup group={radioItems} defaultValue="default" />)

    const disabledRadio = screen.getByLabelText("Compact")
    expect(disabledRadio).toBeDisabled()
  })
})
