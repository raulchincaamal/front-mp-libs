import { render, screen, waitFor } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import { CountUp } from "./count-up.component"

describe("CountUp", () => {
  it("renders with default props", () => {
    render(<CountUp to={100} />)
    expect(screen.getByText(/\d+/)).toBeInTheDocument()
  })

  it("animates from 0 to target value by default", async () => {
    render(<CountUp to={100} duration={0.1} />)
    await waitFor(() => expect(screen.getByText("100")).toBeInTheDocument(), {
      timeout: 500,
    })
  })

  it("animates from custom start value", async () => {
    render(<CountUp from={50} to={100} duration={0.1} />)
    await waitFor(() => expect(screen.getByText("100")).toBeInTheDocument(), {
      timeout: 500,
    })
  })

  it("formats as decimal by default", async () => {
    render(<CountUp to={1000} duration={0.1} />)
    await waitFor(() => expect(screen.getByText("1,000")).toBeInTheDocument(), {
      timeout: 500,
    })
  })

  it("formats as currency when style is currency", async () => {
    render(<CountUp to={1000} style="currency" duration={0.1} />)
    await waitFor(
      () => expect(screen.getByText(/\$1,000\.00/)).toBeInTheDocument(),
      { timeout: 500 }
    )
  })

  it("rounds values when rounded is true", async () => {
    render(<CountUp to={99.99} rounded duration={0.1} />)
    await waitFor(() => expect(screen.getByText("100")).toBeInTheDocument(), {
      timeout: 500,
    })
  })

  it("applies custom className", () => {
    const { container } = render(<CountUp to={100} className="custom-class" />)
    const span = container.querySelector("span")
    expect(span).toHaveClass("custom-class", "text-base")
  })

  it("calls onPlay callback when animation starts", async () => {
    const onPlay = vi.fn()
    render(<CountUp to={100} duration={0.1} onPlay={onPlay} />)
    await waitFor(() => expect(onPlay).toHaveBeenCalled(), { timeout: 500 })
  })

  it("calls onComplete callback when animation finishes", async () => {
    const onComplete = vi.fn()
    render(<CountUp to={100} duration={0.1} onComplete={onComplete} />)
    await waitFor(() => expect(onComplete).toHaveBeenCalled(), { timeout: 500 })
  })

  it("handles large numbers correctly", async () => {
    render(<CountUp to={1000000} duration={0.1} />)
    await waitFor(
      () => expect(screen.getByText("1,000,000")).toBeInTheDocument(),
      { timeout: 500 }
    )
  })

  it("handles decimal numbers without rounding", async () => {
    render(<CountUp to={123.45} duration={0.1} />)
    await waitFor(
      () => expect(screen.getByText("123.45")).toBeInTheDocument(),
      {
        timeout: 500,
      }
    )
  })

  it("renders as motion.span element", () => {
    const { container } = render(<CountUp to={100} />)
    const span = container.querySelector("span")
    expect(span).toBeInTheDocument()
  })

  it("updates animation when to prop changes", async () => {
    const { rerender } = render(<CountUp to={100} duration={0.1} />)
    await waitFor(() => expect(screen.getByText("100")).toBeInTheDocument(), {
      timeout: 500,
    })

    rerender(<CountUp to={200} duration={0.1} />)
    await waitFor(() => expect(screen.getByText("200")).toBeInTheDocument(), {
      timeout: 500,
    })
  })
})
