import { describe, it, expect } from "vitest"
import { render, screen, fireEvent, act } from "@testing-library/react"
import "@testing-library/jest-dom"
import { SearchIcon, UserIcon } from "@/assets/icons"
import { Input } from "@/components"

describe("<Input.Text />", () => {
  it("renders correctly with placeholder", () => {
    act(() => {
      render(<Input.Text placeholder="Enter text" />)
    })

    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument()
  })

  it("handles value changes", () => {
    act(() => {
      render(<Input.Text />)
    })

    const input = screen.getByRole("textbox")

    act(() => {
      fireEvent.change(input, { target: { value: "test value" } })
    })

    expect(input).toHaveValue("test value")
  })

  it("renders with left icon", () => {
    act(() => {
      render(<Input.Text icon={<SearchIcon data-testid="search-icon" />} />)
    })

    expect(screen.getByTestId("search-icon")).toBeInTheDocument()
  })

  it("renders with right icon", () => {
    act(() => {
      render(<Input.Text leftIcon={<UserIcon data-testid="user-icon" />} />)
    })

    expect(screen.getByTestId("user-icon")).toBeInTheDocument()
  })

  it("shows clear button when value exists and clear is enabled", () => {
    act(() => {
      render(<Input.Text clear />)
    })

    const input = screen.getByRole("textbox")

    act(() => {
      fireEvent.change(input, { target: { value: "test" } })
    })

    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  it("clears value when clear button is clicked", () => {
    act(() => {
      render(<Input.Text clear />)
    })

    const input = screen.getByRole("textbox")

    act(() => {
      fireEvent.change(input, { target: { value: "test" } })
    })

    const clearButton = screen.getByRole("button")

    act(() => {
      fireEvent.click(clearButton)
    })

    expect(input).toHaveValue("")
  })

  it("does not show clear button when clear is disabled", () => {
    act(() => {
      render(<Input.Text clear={false} />)
    })

    const input = screen.getByRole("textbox")

    act(() => {
      fireEvent.change(input, { target: { value: "test" } })
    })

    expect(screen.queryByRole("button")).not.toBeInTheDocument()
  })

  it("applies error styles when error prop is true", () => {
    act(() => {
      render(<Input.Text error />)
    })

    const input = screen.getByRole("textbox")
    expect(input.className).toMatch(/border-red|text-red/)
  })

  it("applies check styles when check prop is true", () => {
    act(() => {
      render(<Input.Text check />)
    })

    const input = screen.getByRole("textbox")
    expect(input.className).toMatch(/border-green|text-green/)
  })

  it("applies disabled styles when disabled", () => {
    act(() => {
      render(<Input.Text disabled />)
    })

    const input = screen.getByRole("textbox")
    expect(input).toBeDisabled()
  })

  it("applies underline variant styles", () => {
    act(() => {
      render(<Input.Text variant="underline" />)
    })

    const input = screen.getByRole("textbox")
    expect(input.className).toMatch(/border-b-2|rounded-none/)
  })

  it("applies size styles correctly", () => {
    act(() => {
      render(<Input.Text size="lg" />)
    })

    const input = screen.getByRole("textbox")
    expect(input.className).toMatch(/py-2|text-base|min-h-10/)
  })

  it("applies left padding when icon is present", () => {
    act(() => {
      render(<Input.Text icon={<SearchIcon />} />)
    })

    const input = screen.getByRole("textbox")
    expect(input.className).toMatch(/pl-8/)
  })

  it("applies custom className", () => {
    act(() => {
      render(<Input.Text className="custom-class" />)
    })

    const input = screen.getByRole("textbox")
    expect(input).toHaveClass("custom-class")
  })

  it("disables clear button when input is disabled", () => {
    act(() => {
      render(<Input.Text disabled clear />)
    })

    const input = screen.getByRole("textbox")

    act(() => {
      fireEvent.change(input, { target: { value: "test" } })
    })

    const clearButton = screen.getByRole("button")
    expect(clearButton).toBeDisabled()
  })
})
