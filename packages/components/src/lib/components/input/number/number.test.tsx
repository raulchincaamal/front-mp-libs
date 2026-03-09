import { describe, it, expect, vi } from "vitest"
import { render, screen, fireEvent, act } from "@testing-library/react"
import "@testing-library/jest-dom"
import { SearchIcon } from "@/assets/icons"
import { Input } from "@/components"

describe("<Input.Number />", () => {
  it("renders correctly with text type for formatting", () => {
    act(() => {
      render(<Input.Number placeholder="Enter number" />)
    })

    const input = screen.getByRole("textbox")
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute("type", "text")
  })

  it("handles value changes and parsing", () => {
    const onChange = vi.fn()

    act(() => {
      render(<Input.Number onChange={onChange} />)
    })

    const input = screen.getByRole("textbox")

    act(() => {
      fireEvent.change(input, { target: { value: "123.45" } })
    })

    expect(onChange).toHaveBeenCalledWith(123.45)
  })

  it("formats currency values on blur", () => {
    act(() => {
      render(<Input.Number mode="currency" currency="USD" />)
    })

    const input = screen.getByRole("textbox")

    act(() => {
      fireEvent.change(input, { target: { value: "1234.56" } })
    })

    act(() => {
      fireEvent.blur(input)
    })

    expect((input as HTMLInputElement).value).toContain("1,234.56")
  })

  it("respects min and max values", () => {
    const onChange = vi.fn()

    act(() => {
      render(<Input.Number min={0} max={100} onChange={onChange} />)
    })

    const input = screen.getByRole("textbox")

    act(() => {
      fireEvent.change(input, { target: { value: "-10" } })
    })

    expect(onChange).not.toHaveBeenCalled()
  })

  it("applies prefix and suffix on blur", () => {
    act(() => {
      render(<Input.Number prefix="$" suffix="%" />)
    })

    const input = screen.getByRole("textbox")

    act(() => {
      fireEvent.change(input, { target: { value: "50" } })
    })

    act(() => {
      fireEvent.blur(input)
    })

    expect((input as HTMLInputElement).value).toContain("$ 50 %")
  })

  it("renders with left icon", () => {
    act(() => {
      render(<Input.Number icon={<SearchIcon data-testid="search-icon" />} />)
    })

    expect(screen.getByTestId("search-icon")).toBeInTheDocument()
  })

  it("shows clear button when value exists", () => {
    act(() => {
      render(<Input.Number clear />)
    })

    const input = screen.getByRole("textbox")

    act(() => {
      fireEvent.change(input, { target: { value: "123" } })
    })

    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  it("clears value when clear button is clicked", () => {
    const onChange = vi.fn()

    act(() => {
      render(<Input.Number clear onChange={onChange} />)
    })

    const input = screen.getByRole("textbox")

    act(() => {
      fireEvent.change(input, { target: { value: "123" } })
    })

    const clearButton = screen.getByRole("button")

    act(() => {
      fireEvent.click(clearButton)
    })

    expect(input).toHaveValue("")
    expect(onChange).toHaveBeenCalledWith(null)
  })

  it("applies error styles when error prop is true", () => {
    act(() => {
      render(<Input.Number error />)
    })

    const input = screen.getByRole("textbox")
    expect(input.className).toMatch(/border-red|text-red/)
  })

  it("applies check styles when check prop is true", () => {
    act(() => {
      render(<Input.Number check />)
    })

    const input = screen.getByRole("textbox")
    expect(input.className).toMatch(/border-green|text-green/)
  })

  it("applies underline variant styles", () => {
    act(() => {
      render(<Input.Number variant="underline" />)
    })

    const input = screen.getByRole("textbox")
    expect(input.className).toMatch(/border-b-2|rounded-none/)
  })

  it("handles different locales", () => {
    act(() => {
      render(<Input.Number locale="de-DE" mode="currency" currency="EUR" />)
    })

    const input = screen.getByRole("textbox")

    act(() => {
      fireEvent.change(input, { target: { value: "1234.56" } })
    })

    act(() => {
      fireEvent.blur(input)
    })

    expect((input as HTMLInputElement).value).toContain("1.234,56")
  })

  it("disables formatting when format is false", () => {
    act(() => {
      render(<Input.Number format={false} />)
    })

    const input = screen.getByRole("textbox")

    act(() => {
      fireEvent.change(input, { target: { value: "1234.56" } })
    })

    act(() => {
      fireEvent.blur(input)
    })

    expect(input).toHaveValue("1234.56")
  })
})
