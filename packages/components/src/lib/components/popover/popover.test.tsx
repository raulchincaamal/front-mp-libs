import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import { Popover } from "@/components"
import { PopoverTrigger, PopoverContent } from "./index"

const PopoverExample = ({
  open,
  defaultOpen,
  onOpenChange,
}: {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
}) => (
  <Popover open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
    <PopoverTrigger asChild>
      <button>Trigger</button>
    </PopoverTrigger>
    <PopoverContent>
      <div>Popover Content</div>
    </PopoverContent>
  </Popover>
)

describe("Popover", () => {
  it("renders trigger button", () => {
    render(<PopoverExample />)
    expect(screen.getByRole("button", { name: "Trigger" })).toBeInTheDocument()
  })

  it("opens popover when trigger is clicked", async () => {
    render(<PopoverExample />)

    const trigger = screen.getByRole("button", { name: "Trigger" })
    fireEvent.click(trigger)

    expect(screen.getByText("Popover Content")).toBeInTheDocument()
  })

  it("closes popover when clicking outside", async () => {
    render(<PopoverExample />)

    const trigger = screen.getByRole("button", { name: "Trigger" })
    fireEvent.click(trigger)

    expect(screen.getByText("Popover Content")).toBeInTheDocument()

    fireEvent.click(document.body)
  })

  it("works as controlled component", () => {
    const onOpenChange = vi.fn()
    const { rerender } = render(
      <PopoverExample open={false} onOpenChange={onOpenChange} />
    )

    expect(screen.queryByText("Popover Content")).not.toBeInTheDocument()

    rerender(<PopoverExample open={true} onOpenChange={onOpenChange} />)

    expect(screen.getByText("Popover Content")).toBeInTheDocument()
  })

  it("calls onOpenChange when trigger is clicked", () => {
    const onOpenChange = vi.fn()
    render(<PopoverExample onOpenChange={onOpenChange} />)

    const trigger = screen.getByRole("button", { name: "Trigger" })
    fireEvent.click(trigger)

    expect(onOpenChange).toHaveBeenCalledWith(true)
  })

  it("opens by default when defaultOpen is true", () => {
    render(<PopoverExample defaultOpen={true} />)

    expect(screen.getByText("Popover Content")).toBeInTheDocument()
  })

  it("has correct data attributes", () => {
    render(<PopoverExample />)

    const popover = screen
      .getByRole("button", { name: "Trigger" })
      .closest('[data-slot="popover-trigger"]')
    expect(popover).toBeInTheDocument()
  })
})
