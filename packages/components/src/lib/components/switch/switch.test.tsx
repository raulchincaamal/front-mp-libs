import { describe, it, expect, vi } from "vitest"
import { render, screen, fireEvent, act } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Switch } from "@/components"

describe.only("<Switch />", () => {
  it("renders correctly", () => {
    act(() => {
      render(<Switch />)
    })

    expect(screen.getByRole("switch")).toBeInTheDocument()
  })

  it("calls onCheckedChange when clicked", () => {
    const handleChange = vi.fn()

    act(() => {
      render(<Switch onCheckedChange={handleChange} />)
    })

    fireEvent.click(screen.getByRole("switch"))

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(true)
  })

  it("does not call onCheckedChange when disabled", () => {
    const handleChange = vi.fn()

    act(() => {
      render(<Switch disabled onCheckedChange={handleChange} />)
    })

    fireEvent.click(screen.getByRole("switch"))

    expect(handleChange).not.toHaveBeenCalled()
  })

  it("renders with label text", () => {
    act(() => {
      render(<Switch label="Enable notifications" />)
    })

    expect(screen.getByText("Enable notifications")).toBeInTheDocument()
  })

  it("renders with label object - right position", () => {
    act(() => {
      render(<Switch label={{ text: "Dark mode", position: "right" }} />)
    })

    expect(screen.getByText("Dark mode")).toBeInTheDocument()
  })

  it("renders with label object - left position", () => {
    act(() => {
      render(<Switch label={{ text: "Auto-save", position: "left" }} />)
    })

    expect(screen.getByText("Auto-save")).toBeInTheDocument()
  })

  it("renders checked children when provided", () => {
    act(() => {
      render(
        <Switch
          checkedChildren={<span data-testid="checked-icon">✓</span>}
          defaultChecked={true}
        />
      )
    })

    expect(screen.getByTestId("checked-icon")).toBeInTheDocument()
  })

  it("renders unchecked children when provided", () => {
    act(() => {
      render(
        <Switch
          unCheckedChildren={<span data-testid="unchecked-icon">✕</span>}
          defaultChecked={false}
        />
      )
    })

    expect(screen.getByTestId("unchecked-icon")).toBeInTheDocument()
  })

  it("applies type styles correctly", () => {
    act(() => {
      render(<Switch type="success" />)
    })

    const switchElement = screen.getByRole("switch")
    expect(switchElement.className).toMatch(/bg-green/)
  })

  it("applies size styles correctly", () => {
    act(() => {
      render(<Switch size="sm" />)
    })

    const switchElement = screen.getByRole("switch")
    expect(switchElement.className).toMatch(/h-4|w-7/)
  })

  it("applies disabled styles correctly", () => {
    act(() => {
      render(<Switch disabled label="Disabled switch" />)
    })

    const switchElement = screen.getByRole("switch")
    expect(switchElement).toBeDisabled()
    expect(switchElement.className).toMatch(/cursor-not-allowed/)
  })

  it("works in controlled mode", () => {
    const handleChange = vi.fn()

    act(() => {
      render(<Switch checked={true} onCheckedChange={handleChange} />)
    })

    const switchElement = screen.getByRole("switch")
    expect(switchElement).toBeChecked()

    fireEvent.click(switchElement)
    expect(handleChange).toHaveBeenCalledWith(false)
  })

  it("works in uncontrolled mode with defaultChecked", () => {
    act(() => {
      render(<Switch defaultChecked={true} />)
    })

    const switchElement = screen.getByRole("switch")
    expect(switchElement).toBeChecked()
  })

  it("applies custom className", () => {
    act(() => {
      render(<Switch className="custom-class" />)
    })

    const switchElement = screen.getByRole("switch")
    expect(switchElement).toHaveClass("custom-class")
  })
})
