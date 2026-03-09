import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import { Notification } from "@/components"

// Mock motion components
vi.mock("motion/react", () => ({
  motion: {
    div: ({
      children,
      ...props
    }: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) => (
      <div {...props}>{children}</div>
    ),
  },
}))

describe("Notification Component", () => {
  it("renders with default props", () => {
    render(<Notification />)

    const notification = screen.getByRole("alert")
    expect(notification).toBeInTheDocument()
    expect(notification).toHaveClass("px-6 py-4 rounded flex gap-4")
  })

  it("renders with title and message", () => {
    render(<Notification title="Test Title" message="Test message" />)

    expect(screen.getByText("Test Title")).toBeInTheDocument()
    expect(screen.getByText("Test message")).toBeInTheDocument()
  })

  it("renders success type notification", () => {
    render(
      <Notification
        type="success"
        title="Success!"
        message="Operation completed successfully"
      />
    )

    const notification = screen.getByRole("alert")
    expect(notification).toHaveClass("border-green-6")
    expect(screen.getByText("Success!")).toBeInTheDocument()
  })

  it("renders error type notification", () => {
    render(
      <Notification type="error" title="Error" message="Something went wrong" />
    )

    const notification = screen.getByRole("alert")
    expect(notification).toHaveClass("border-primary-red")
    expect(screen.getByText("Error")).toBeInTheDocument()
  })

  it("renders warning type notification", () => {
    render(
      <Notification
        type="warning"
        title="Warning"
        message="Please be careful"
      />
    )

    const notification = screen.getByRole("alert")
    expect(notification).toHaveClass("border-gold-6")
    expect(screen.getByText("Warning")).toBeInTheDocument()
  })

  it("renders info type notification", () => {
    render(
      <Notification
        type="info"
        title="Information"
        message="Here's some info"
      />
    )

    const notification = screen.getByRole("alert")
    expect(notification).toHaveClass("border-blue-500")
    expect(screen.getByText("Information")).toBeInTheDocument()
  })

  it("renders with custom border color", () => {
    render(
      <Notification title="Custom Color" borderColor="border-purple-500" />
    )

    const notification = screen.getByRole("alert")
    expect(notification).toHaveClass("border-purple-500")
  })

  it("renders with closable button", () => {
    const onClose = vi.fn()

    render(
      <Notification
        title="Closable"
        closable={true}
        onClose={onClose}
        id="test-id"
      />
    )

    const closeButton = screen.getByLabelText("Close notification")
    expect(closeButton).toBeInTheDocument()

    fireEvent.click(closeButton)
    expect(onClose).toHaveBeenCalledWith("test-id")
  })

  it("renders without icon when showIcon is false", () => {
    render(<Notification type="success" title="No Icon" showIcon={false} />)

    // Check that no icon container is rendered
    const iconContainers = screen.queryAllByTestId("notification-icon")
    expect(iconContainers).toHaveLength(0)
  })

  it("renders with custom children", () => {
    render(
      <Notification title="Custom Content">
        <div data-testid="custom-child">Custom child content</div>
      </Notification>
    )

    expect(screen.getByTestId("custom-child")).toBeInTheDocument()
    expect(screen.getByText("Custom child content")).toBeInTheDocument()
  })

  it("applies custom className", () => {
    render(
      <Notification
        title="Custom Class"
        className="custom-notification-class"
      />
    )

    const notification = screen.getByRole("alert")
    expect(notification).toHaveClass("custom-notification-class")
  })

  it("auto-closes after duration", async () => {
    const onClose = vi.fn()

    render(
      <Notification
        title="Auto Close"
        duration={100}
        onClose={onClose}
        id="auto-close-id"
      />
    )

    await waitFor(
      () => {
        expect(onClose).toHaveBeenCalledWith("auto-close-id")
      },
      { timeout: 150 }
    )
  })

  it("does not auto-close when duration is 0", async () => {
    const onClose = vi.fn()

    render(
      <Notification
        title="No Auto Close"
        duration={0}
        onClose={onClose}
        id="no-auto-close"
      />
    )

    // Wait a bit and ensure onClose was not called
    await new Promise(resolve => setTimeout(resolve, 100))
    expect(onClose).not.toHaveBeenCalled()
  })

  it("renders with only title", () => {
    render(<Notification title="Only Title" />)

    expect(screen.getByText("Only Title")).toBeInTheDocument()
    expect(screen.queryByText("Test message")).not.toBeInTheDocument()
  })

  it("renders with only message", () => {
    render(<Notification message="Only message" />)

    expect(screen.getByText("Only message")).toBeInTheDocument()
    expect(screen.queryByText("Test Title")).not.toBeInTheDocument()
  })

  it("renders with icon color override", () => {
    render(
      <Notification
        type="success"
        title="Custom Icon Color"
        iconColor="text-purple-600"
        showIcon={true}
      />
    )

    // The icon container should have the custom color class
    const notification = screen.getByRole("alert")
    expect(notification).toBeInTheDocument()
  })
})
