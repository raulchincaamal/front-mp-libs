import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import userEvent from "@testing-library/user-event"
import { Alert } from "@/components"

describe("Alert", () => {
  it("renders title and description", () => {
    render(
      <Alert
        title="Test Alert Title"
        description="Test alert description"
        type="info"
      />
    )

    expect(screen.getByText("Test Alert Title")).toBeInTheDocument()
    expect(screen.getByText("Test alert description")).toBeInTheDocument()
  })

  it("renders children content", () => {
    render(
      <Alert title="Test Alert">
        <div>Custom content</div>
      </Alert>
    )

    expect(screen.getByText("Custom content")).toBeInTheDocument()
  })

  it("renders icon by default", () => {
    render(<Alert title="Test Alert" type="success" />)

    const alertContainer = screen.getByText("Test Alert").closest("div")
    expect(alertContainer?.parentElement).toContainHTML("svg")
  })

  it("hides icon when showIcon is false", () => {
    render(<Alert title="Test Alert" type="success" showIcon={false} />)

    const alertContainer = screen.getByText("Test Alert").closest("div")
    expect(alertContainer?.parentElement).not.toContainHTML("svg")
  })

  it("shows close button when closable is true", () => {
    render(<Alert title="Test Alert" closable={true} />)

    expect(
      screen.getByRole("button", { name: "Cerrar alerta" })
    ).toBeInTheDocument()
  })

  it("calls onClose when close button is clicked", async () => {
    const user = userEvent.setup()
    const onCloseMock = vi.fn()

    render(<Alert title="Test Alert" closable={true} onClose={onCloseMock} />)

    const closeButton = screen.getByRole("button", { name: "Cerrar alerta" })
    await user.click(closeButton)

    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })
})
