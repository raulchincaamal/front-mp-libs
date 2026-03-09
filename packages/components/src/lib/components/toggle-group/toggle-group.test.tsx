import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import userEvent from "@testing-library/user-event"
import ToggleGroup from "./toggle-group.component"

describe("ToggleGroup", () => {
  it("renders toggle group with items", () => {
    render(
      <ToggleGroup type="single">
        <ToggleGroup.Item value="item1">Item 1</ToggleGroup.Item>
        <ToggleGroup.Item value="item2">Item 2</ToggleGroup.Item>
      </ToggleGroup>
    )

    expect(screen.getByText("Item 1")).toBeInTheDocument()
    expect(screen.getByText("Item 2")).toBeInTheDocument()
  })

  it("applies outline variant", () => {
    const { container } = render(
      <ToggleGroup type="single" variant="outline">
        <ToggleGroup.Item value="item1">Item 1</ToggleGroup.Item>
      </ToggleGroup>
    )

    const group = container.querySelector('[data-slot="toggle-group"]')
    expect(group).toHaveAttribute("data-variant", "outline")
  })

  it("applies small size", () => {
    const { container } = render(
      <ToggleGroup type="single" size="sm">
        <ToggleGroup.Item value="item1">Item 1</ToggleGroup.Item>
      </ToggleGroup>
    )

    const group = container.querySelector('[data-slot="toggle-group"]')
    expect(group).toHaveAttribute("data-size", "sm")
  })

  it("applies large size", () => {
    const { container } = render(
      <ToggleGroup type="single" size="lg">
        <ToggleGroup.Item value="item1">Item 1</ToggleGroup.Item>
      </ToggleGroup>
    )

    const group = container.querySelector('[data-slot="toggle-group"]')
    expect(group).toHaveAttribute("data-size", "lg")
  })

  it("applies horizontal orientation by default", () => {
    const { container } = render(
      <ToggleGroup type="single">
        <ToggleGroup.Item value="item1">Item 1</ToggleGroup.Item>
      </ToggleGroup>
    )

    const group = container.querySelector('[data-slot="toggle-group"]')
    expect(group).toHaveAttribute("data-orientation", "horizontal")
  })

  it("applies vertical orientation", () => {
    const { container } = render(
      <ToggleGroup type="single" orientation="vertical">
        <ToggleGroup.Item value="item1">Item 1</ToggleGroup.Item>
      </ToggleGroup>
    )

    const group = container.querySelector('[data-slot="toggle-group"]')
    expect(group).toHaveAttribute("data-orientation", "vertical")
  })

  it("applies spacing", () => {
    const { container } = render(
      <ToggleGroup type="single" spacing={4}>
        <ToggleGroup.Item value="item1">Item 1</ToggleGroup.Item>
      </ToggleGroup>
    )

    const group = container.querySelector('[data-slot="toggle-group"]')
    expect(group).toHaveAttribute("data-spacing", "4")
  })

  it("applies custom className", () => {
    const { container } = render(
      <ToggleGroup type="single" className="custom-class">
        <ToggleGroup.Item value="item1">Item 1</ToggleGroup.Item>
      </ToggleGroup>
    )

    const group = container.querySelector('[data-slot="toggle-group"]')
    expect(group).toHaveClass("custom-class")
  })

  it("allows single selection", async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()

    render(
      <ToggleGroup type="single" onValueChange={onValueChange}>
        <ToggleGroup.Item value="item1">Item 1</ToggleGroup.Item>
        <ToggleGroup.Item value="item2">Item 2</ToggleGroup.Item>
      </ToggleGroup>
    )

    const item1 = screen.getByText("Item 1")
    await user.click(item1)

    expect(onValueChange).toHaveBeenCalledWith("item1")
  })

  it("allows multiple selection", async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()

    render(
      <ToggleGroup type="multiple" onValueChange={onValueChange}>
        <ToggleGroup.Item value="item1">Item 1</ToggleGroup.Item>
        <ToggleGroup.Item value="item2">Item 2</ToggleGroup.Item>
      </ToggleGroup>
    )

    const item1 = screen.getByText("Item 1")
    const item2 = screen.getByText("Item 2")

    await user.click(item1)
    await user.click(item2)

    expect(onValueChange).toHaveBeenCalledTimes(2)
  })

  it("disables all items when disabled prop is true", () => {
    const { container } = render(
      <ToggleGroup type="single" disabled>
        <ToggleGroup.Item value="item1">Item 1</ToggleGroup.Item>
        <ToggleGroup.Item value="item2">Item 2</ToggleGroup.Item>
      </ToggleGroup>
    )

    const items = container.querySelectorAll('[data-slot="toggle-group-item"]')
    items.forEach(item => {
      expect(item).toBeDisabled()
    })
  })

  it("has correct data-slot attribute", () => {
    const { container } = render(
      <ToggleGroup type="single">
        <ToggleGroup.Item value="item1">Item 1</ToggleGroup.Item>
      </ToggleGroup>
    )

    const group = container.querySelector('[data-slot="toggle-group"]')
    expect(group).toBeInTheDocument()
  })

  it("items have correct data-slot attribute", () => {
    const { container } = render(
      <ToggleGroup type="single">
        <ToggleGroup.Item value="item1">Item 1</ToggleGroup.Item>
      </ToggleGroup>
    )

    const item = container.querySelector('[data-slot="toggle-group-item"]')
    expect(item).toBeInTheDocument()
  })

  it("supports controlled state for single type", () => {
    const { rerender } = render(
      <ToggleGroup type="single" value="item1">
        <ToggleGroup.Item value="item1">Item 1</ToggleGroup.Item>
        <ToggleGroup.Item value="item2">Item 2</ToggleGroup.Item>
      </ToggleGroup>
    )

    const item1 = screen.getByText("Item 1")
    expect(item1).toHaveAttribute("data-state", "on")

    rerender(
      <ToggleGroup type="single" value="item2">
        <ToggleGroup.Item value="item1">Item 1</ToggleGroup.Item>
        <ToggleGroup.Item value="item2">Item 2</ToggleGroup.Item>
      </ToggleGroup>
    )

    const item2 = screen.getByText("Item 2")
    expect(item2).toHaveAttribute("data-state", "on")
  })

  it("supports controlled state for multiple type", () => {
    render(
      <ToggleGroup type="multiple" value={["item1", "item2"]}>
        <ToggleGroup.Item value="item1">Item 1</ToggleGroup.Item>
        <ToggleGroup.Item value="item2">Item 2</ToggleGroup.Item>
      </ToggleGroup>
    )

    const item1 = screen.getByText("Item 1")
    const item2 = screen.getByText("Item 2")

    expect(item1).toHaveAttribute("data-state", "on")
    expect(item2).toHaveAttribute("data-state", "on")
  })
})
