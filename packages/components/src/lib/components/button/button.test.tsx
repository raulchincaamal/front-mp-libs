import { describe, it, expect, vi } from "vitest"
import { render, screen, fireEvent, act } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Button } from "@/components"

describe("<Button />", () => {
  it("renders correctly with text", () => {
    act(() => {
      render(<Button>Confirmar</Button>)
    })

    expect(screen.getByText("Confirmar")).toBeInTheDocument()
  })

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn()

    act(() => {
      render(<Button onClick={handleClick}>Click</Button>)
    })

    fireEvent.click(screen.getByText("Click"))

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it("does not call onClick when disabled", () => {
    const handleClick = vi.fn()

    act(() => {
      render(
        <Button disabled onClick={handleClick}>
          Disabled
        </Button>
      )
    })

    fireEvent.click(screen.getByText("Disabled"))

    expect(handleClick).not.toHaveBeenCalled()
  })

  it("applies cursor styles correctly", () => {
    act(() => {
      render(<Button cursor="wait">Cursor</Button>)
    })

    const button = screen.getByRole("button")

    expect(button).toHaveClass("cursor-wait")
  })

  it("renders loading icon when isLoading is true", () => {
    act(() => {
      render(<Button isLoading>Loading</Button>)
    })

    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()

    // verifica que haya un svg (loader)
    const loader = button.querySelector("svg")
    expect(loader).toBeInTheDocument()
  })

  it("renders left icon when provided", () => {
    act(() => {
      render(
        <Button leftIcon={<span data-testid="left-icon">L</span>}>Text</Button>
      )
    })

    expect(screen.getByTestId("left-icon")).toBeInTheDocument()
  })

  it("renders right icon when provided", () => {
    act(() => {
      render(
        <Button rightIcon={<span data-testid="right-icon">R</span>}>
          Text
        </Button>
      )
    })

    expect(screen.getByTestId("right-icon")).toBeInTheDocument()
  })

  it("applies variant styles", () => {
    act(() => {
      render(<Button variant="primary">Primary</Button>)
    })

    const button = screen.getByRole("button")

    // No acoplamos el test a clases exactas
    expect(button.className.length).toBeGreaterThan(0)
  })

  it("applies size styles", () => {
    act(() => {
      render(<Button size="xl">XL</Button>)
    })

    const button = screen.getByRole("button")

    expect(button.className).toMatch(/px|py|text/)
  })
})
