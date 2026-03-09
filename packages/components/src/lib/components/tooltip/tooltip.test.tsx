import { act, render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import userEvent from "@testing-library/user-event"
import { Tooltip } from "@/components"

describe("Tooltip", () => {
  it("renders children", () => {
    act(() => {
      render(
        <Tooltip content="Test tooltip">
          <button>Hover me</button>
        </Tooltip>
      )
    })

    expect(screen.getByRole("button", { name: "Hover me" })).toBeDefined()
  })

  // it("shows tooltip content on hover", async () => {
  //   const user = userEvent.setup()

  //   render(
  //     <Tooltip content="Test tooltip content">
  //       <button>Hover me</button>
  //     </Tooltip>
  //   )

  //   const trigger = screen.getByRole("button", { name: "Hover me" })
  //   await user.hover(trigger)

  //   expect(await screen.findByText("Test tooltip content")).toBeDefined()
  // })

  it("hides tooltip content when not hovering", async () => {
    const user = userEvent.setup()

    act(() => {
      render(
        <Tooltip content="Test tooltip content">
          <button>Hover me</button>
        </Tooltip>
      )
    })

    const trigger = screen.getByRole("button", { name: "Hover me" })
    await user.hover(trigger)
    await user.unhover(trigger)

    expect(screen.queryByText("Test tooltip content")).toBeNull()
  })
})
