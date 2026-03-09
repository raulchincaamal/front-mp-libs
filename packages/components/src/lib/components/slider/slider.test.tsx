import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { Slider } from "@/components"

describe("Slider Component", () => {
  it("renders correctly", () => {
    const { container } = render(<Slider defaultValue={[50]} />)
    expect(container.querySelector('[role="slider"]')).toBeInTheDocument()
  })

  it("shows labels when showLabels is true", () => {
    render(<Slider defaultValue={[50]} min={0} max={100} showLabels />)
    expect(screen.getByText("0")).toBeInTheDocument()
    expect(screen.getByText("100")).toBeInTheDocument()
  })

  it("applies custom classNames", () => {
    const { container } = render(
      <Slider defaultValue={[50]} classNames={{ root: "custom-root" }} />
    )
    expect(container.querySelector(".custom-root")).toBeInTheDocument()
  })
})
