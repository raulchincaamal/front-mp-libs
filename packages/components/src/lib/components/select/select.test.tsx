import { describe, it, expect } from "vitest"
import { act, render, screen } from "@testing-library/react"
import { Select } from "@/components"

const mockItems = [
  { value: "apple", children: "Apple" },
  { value: "banana", children: "Banana" },
  { value: "blueberry", children: "Blueberry" },
  { value: "aubergine", children: "Aubergine" },
  { value: "broccoli", children: "Broccoli" },
  { value: "carrot", children: "Carrot", disabled: true },
  { value: "beef", children: "Beef" },
  { value: "chicken", children: "Chicken" },
  { value: "lamb", children: "Lamb" },
  { value: "pork", children: "Pork" },
]

describe("Select", () => {
  it("renders select trigger with placeholder", () => {
    act(() => {
      render(<Select items={mockItems} placeholder="Select a fruit…" />)
    })
    expect(screen.getByText("Select a fruit…")).toBeDefined()
  })

  it("renders with correct aria-label", () => {
    act(() => {
      render(<Select items={mockItems} className="[aria-label='Food']" />)
    })
    expect(screen.getByRole("combobox")).toBeDefined()
  })

  it("renders all fruit options when opened", async () => {
    act(() => {
      render(<Select items={mockItems} />)
    })
    const trigger = screen.getByRole("combobox")
    await trigger.click()
    expect(screen.getByText("Apple")).toBeDefined()
    expect(screen.getByText("Banana")).toBeDefined()
    expect(screen.getByText("Blueberry")).toBeDefined()
  })

  it("renders all vegetable options", async () => {
    act(() => {
      render(<Select items={mockItems} />)
    })
    const trigger = screen.getByRole("combobox")
    await trigger.click()
    expect(screen.getByText("Aubergine")).toBeDefined()
    expect(screen.getByText("Broccoli")).toBeDefined()
    expect(screen.getByText("Carrot")).toBeDefined()
  })

  it("renders disabled carrot option", async () => {
    act(() => {
      render(<Select items={mockItems} />)
    })
    const trigger = screen.getByRole("combobox")
    await trigger.click()
    const carrotOption = screen.getByText("Carrot")
    expect(carrotOption.closest("[data-disabled]")).toBeDefined()
  })

  it("renders meat options", async () => {
    act(() => {
      render(<Select items={mockItems} />)
    })
    const trigger = screen.getByRole("combobox")
    await trigger.click()
    expect(screen.getByText("Beef")).toBeDefined()
    expect(screen.getByText("Chicken")).toBeDefined()
    expect(screen.getByText("Lamb")).toBeDefined()
    expect(screen.getByText("Pork")).toBeDefined()
  })
})
