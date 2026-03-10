import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import { Segmented } from "@/components"

describe("Segmented", () => {
  it("renders with basic options", () => {
    render(<Segmented options={["Option 1", "Option 2"]} />)

    expect(screen.getByText("Option 1")).toBeInTheDocument()
    expect(screen.getByText("Option 2")).toBeInTheDocument()
  })

  it("calls onChange when option is clicked", () => {
    const handleChange = vi.fn()
    render(
      <Segmented options={["Option 1", "Option 2"]} onChange={handleChange} />
    )

    fireEvent.click(screen.getByText("Option 2"))
    expect(handleChange).toHaveBeenCalledWith("Option 2")
  })

  it("renders with icons", () => {
    render(
      <Segmented
        options={[
          { label: "List", value: "list", icon: "📋" },
          { label: "Grid", value: "grid", icon: "⊞" },
        ]}
      />
    )

    expect(screen.getByText("📋")).toBeInTheDocument()
    expect(screen.getByText("⊞")).toBeInTheDocument()
  })

  it("handles disabled state", () => {
    const handleChange = vi.fn()
    render(
      <Segmented
        options={["Option 1", "Option 2"]}
        disabled
        onChange={handleChange}
      />
    )

    fireEvent.click(screen.getByText("Option 2"))
    expect(handleChange).not.toHaveBeenCalled()
  })

  it("handles disabled individual options", () => {
    const handleChange = vi.fn()
    render(
      <Segmented
        options={[
          { label: "Option 1", value: "option1" },
          { label: "Option 2", value: "option2", disabled: true },
        ]}
        onChange={handleChange}
      />
    )

    fireEvent.click(screen.getByText("Option 2"))
    expect(handleChange).not.toHaveBeenCalled()
  })
})
