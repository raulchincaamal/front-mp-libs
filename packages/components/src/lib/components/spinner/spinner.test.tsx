import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Spinner } from "@/components"

describe("Spinner", () => {
  it("should render Spinner", () => {
    render(<Spinner />)
    expect(screen.getByRole("status", { hidden: true })).toBeInTheDocument()
  })

  it("should show custom text", () => {
    render(<Spinner text="Cargando..." />)
    expect(screen.getByText("Cargando...")).toBeInTheDocument()
  })

  it("should apply custom className", () => {
    render(<Spinner className="custom-class" />)
    expect(screen.getByRole("status", { hidden: true })).toHaveClass(
      "custom-class"
    )
  })
})
