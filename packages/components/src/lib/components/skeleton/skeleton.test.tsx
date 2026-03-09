import { render, screen } from "@testing-library/react"
import { Skeleton } from "@/components"

describe("Skeleton component", () => {
  it("renders default skeleton when no type is provided", () => {
    render(<Skeleton />)

    const status = screen.getByRole("status", { hidden: true })
    expect(status).toBeInTheDocument()
    expect(status).toHaveClass("animate-pulse")
  })

  it("renders default skeleton when type is 'default'", () => {
    render(<Skeleton type="default" />)

    const status = screen.getByRole("status", { hidden: true })
    expect(status).toBeInTheDocument()
  })

  it("renders avatar skeleton", () => {
    render(<Skeleton type="avatar" />)

    const status = screen.getByRole("status", { hidden: true })
    expect(status).toBeInTheDocument()

    const svg = status.querySelector("svg")
    expect(svg).toBeInTheDocument()
  })

  it("renders image skeleton", () => {
    render(<Skeleton type="image" />)

    const status = screen.getByRole("status", { hidden: true })
    expect(status).toBeInTheDocument()
    expect(status).toHaveClass("animate-pulse")
  })

  it("renders image-description skeleton", () => {
    render(<Skeleton type="image-description" />)

    const status = screen.getByRole("status", { hidden: true })
    expect(status).toBeInTheDocument()
  })

  it("renders list skeleton", () => {
    render(<Skeleton type="list" />)

    const status = screen.getByRole("status", { hidden: true })
    expect(status).toBeInTheDocument()
    expect(status).toHaveClass("border")
  })

  it("always renders accessible loading text for screen readers", () => {
    render(<Skeleton />)

    const srText = screen.getByText(/loading/i)
    expect(srText).toBeInTheDocument()
    expect(srText).toHaveClass("sr-only")
  })
})
