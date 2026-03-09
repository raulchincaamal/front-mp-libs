import { describe, it, expect, vi } from "vitest"
import { render, screen, fireEvent, act } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Drawer } from "@/components"

describe("<Drawer />", () => {
  it("renders correctly when open", () => {
    const handleClose = vi.fn()

    act(() => {
      render(
        <Drawer open={true} onClose={handleClose}>
          <div>Drawer content</div>
        </Drawer>
      )
    })

    expect(screen.getByText("Drawer content")).toBeInTheDocument()
  })

  it("does not render when closed", () => {
    const handleClose = vi.fn()

    act(() => {
      render(
        <Drawer open={false} onClose={handleClose}>
          <div>Drawer content</div>
        </Drawer>
      )
    })

    expect(screen.queryByText("Drawer content")).not.toBeInTheDocument()
  })

  it("calls onClose when backdrop is clicked", () => {
    const handleClose = vi.fn()

    act(() => {
      render(
        <Drawer open={true} onClose={handleClose}>
          <div>Drawer content</div>
        </Drawer>
      )
    })

    const backdrop = document.querySelector(".fixed.inset-0")
    fireEvent.click(backdrop!)

    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it("calls onClose when close button is clicked", () => {
    const handleClose = vi.fn()

    act(() => {
      render(
        <Drawer open={true} onClose={handleClose}>
          <div>Drawer content</div>
        </Drawer>
      )
    })

    const closeButton = screen.getByRole("button")
    fireEvent.click(closeButton)

    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it("calls onClose when Escape key is pressed", () => {
    const handleClose = vi.fn()

    act(() => {
      render(
        <Drawer open={true} onClose={handleClose}>
          <div>Drawer content</div>
        </Drawer>
      )
    })

    fireEvent.keyDown(document, { key: "Escape" })

    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it("does not call onClose when other keys are pressed", () => {
    const handleClose = vi.fn()

    act(() => {
      render(
        <Drawer open={true} onClose={handleClose}>
          <div>Drawer content</div>
        </Drawer>
      )
    })

    fireEvent.keyDown(document, { key: "Enter" })

    expect(handleClose).not.toHaveBeenCalled()
  })

  it("renders with right position by default", () => {
    const handleClose = vi.fn()

    act(() => {
      render(
        <Drawer open={true} onClose={handleClose}>
          <div>Drawer content</div>
        </Drawer>
      )
    })

    const drawer = document.querySelector(".fixed.top-0")
    expect(drawer).toHaveClass("right-0")
  })

  it("renders with left position when specified", () => {
    const handleClose = vi.fn()

    act(() => {
      render(
        <Drawer open={true} onClose={handleClose} position="left">
          <div>Drawer content</div>
        </Drawer>
      )
    })

    const drawer = document.querySelector(".fixed.top-0")
    expect(drawer).toHaveClass("left-0")
  })

  it("applies custom className", () => {
    const handleClose = vi.fn()

    act(() => {
      render(
        <Drawer open={true} onClose={handleClose} className="custom-drawer">
          <div>Drawer content</div>
        </Drawer>
      )
    })

    const drawer = document.querySelector(".fixed.top-0")
    expect(drawer).toHaveClass("custom-drawer")
  })

  it("applies custom classNames for different sections", () => {
    const handleClose = vi.fn()

    act(() => {
      render(
        <Drawer
          open={true}
          onClose={handleClose}
          classNames={{
            backdrop: "custom-backdrop",
            drawer: "custom-drawer",
            header: "custom-header",
            children: "custom-children",
          }}
        >
          <div>Drawer content</div>
        </Drawer>
      )
    })

    const backdrop = document.querySelector(".fixed.inset-0")
    const drawer = document.querySelector(".fixed.top-0")
    const header = document.querySelector(".flex.justify-end")
    const children = document.querySelector(".overflow-y-auto")

    expect(backdrop).toHaveClass("custom-backdrop")
    expect(drawer).toHaveClass("custom-drawer")
    expect(header).toHaveClass("custom-header")
    expect(children).toHaveClass("custom-children")
  })

  it("renders children content correctly", () => {
    const handleClose = vi.fn()

    act(() => {
      render(
        <Drawer open={true} onClose={handleClose}>
          <div data-testid="drawer-content">
            <h2>Title</h2>
            <p>Description</p>
          </div>
        </Drawer>
      )
    })

    expect(screen.getByTestId("drawer-content")).toBeInTheDocument()
    expect(screen.getByText("Title")).toBeInTheDocument()
    expect(screen.getByText("Description")).toBeInTheDocument()
  })

  it("does not add event listener when closed", () => {
    const handleClose = vi.fn()
    const addEventListenerSpy = vi.spyOn(document, "addEventListener")

    act(() => {
      render(
        <Drawer open={false} onClose={handleClose}>
          <div>Drawer content</div>
        </Drawer>
      )
    })

    expect(addEventListenerSpy).not.toHaveBeenCalledWith(
      "keydown",
      expect.any(Function)
    )

    addEventListenerSpy.mockRestore()
  })

  it("adds event listener when open", () => {
    const handleClose = vi.fn()
    const addEventListenerSpy = vi.spyOn(document, "addEventListener")

    act(() => {
      render(
        <Drawer open={true} onClose={handleClose}>
          <div>Drawer content</div>
        </Drawer>
      )
    })

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      "keydown",
      expect.any(Function)
    )

    addEventListenerSpy.mockRestore()
  })
})
