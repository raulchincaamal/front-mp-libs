import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { Progress } from "@/components"

describe("Progress Component", () => {
  it("renders correctly", () => {
    const { container } = render(<Progress value={50} />)
    expect(container.querySelector('[role="progressbar"]')).toBeInTheDocument()
  })

  it("shows label when showLabel is true", () => {
    render(<Progress value={65} showLabel />)
    expect(screen.getByText("65%")).toBeInTheDocument()
  })

  it("applies custom classNames", () => {
    const { container } = render(
      <Progress value={50} classNames={{ root: "custom-root" }} />
    )
    expect(container.querySelector(".custom-root")).toBeInTheDocument()
  })
})
