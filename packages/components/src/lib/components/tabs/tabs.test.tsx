import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi } from "vitest"
import { useState } from "react"
import Tabs from "./tabs.component"

const items = [
  { key: "1", label: "Tab 1", content: "Content 1" },
  { key: "2", label: "Tab 2", content: "Content 2" },
  { key: "3", label: "Tab 3", content: "Content 3", disabled: true },
]

describe("Tabs", () => {
  it("renders default tab content", () => {
    render(
      <Tabs
        type="default"
        items={items}
        currentActiveKey="1"
        onChange={() => {}}
      />
    )
    expect(screen.getByText("Content 1")).toBeInTheDocument()
  })

  it("changes aria-selected when clicking another tab", async () => {
    const user = userEvent.setup()
    const TestWrapper = () => {
      const [active, setActive] = useState("1")
      return (
        <Tabs
          type="default"
          items={items}
          currentActiveKey={active}
          onChange={setActive}
        />
      )
    }

    render(<TestWrapper />)

    const tab2 = screen.getByText("Tab 2")
    await user.click(tab2)
    expect(tab2.closest("button")).toHaveAttribute("aria-selected", "true")
    expect(screen.getByText("Content 2")).toBeInTheDocument()
  })

  it("does not allow selecting disabled tab", async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(
      <Tabs
        type="default"
        items={items}
        currentActiveKey="1"
        onChange={onChange}
      />
    )
    const tab3 = screen.getByText("Tab 3")
    await user.click(tab3)
    expect(onChange).not.toHaveBeenCalled()
  })

  it("underline variant keeps underline style on active tab", () => {
    render(
      <Tabs
        type="underline"
        items={items}
        currentActiveKey="1"
        onChange={() => {}}
      />
    )
    const activeTab = screen.getByText("Tab 1")
    expect(activeTab.closest("button")?.className).toMatch(/border/)
  })

  it("segmented variant renders segmented indicator for active tab", () => {
    const { container } = render(
      <Tabs
        type="segmented"
        items={items}
        currentActiveKey="1"
        onChange={() => {}}
      />
    )

    const indicator = container.querySelector("div.absolute")
    expect(indicator).toBeTruthy()
    expect(screen.getByTestId("tab-indicator")).toBeInTheDocument()
  })

  it("segmented variant keeps content even when active key prop changes (controlled behavior)", async () => {
    const user = userEvent.setup()

    const TestWrapper = () => {
      const [active, setActive] = useState("1")
      return (
        <Tabs
          type="segmented"
          items={items}
          currentActiveKey={active}
          onChange={setActive}
        />
      )
    }

    render(<TestWrapper />)

    const tab2 = screen.getByRole("tab", { name: /Tab 2/i })
    await user.click(tab2)

    // Espera a que el contenido de Tab 2 aparezca
    const content2 = await screen.findByText("Content 2", { exact: false })
    expect(content2).toBeInTheDocument()
  })

  it("segmented variant does not lose content when switching fast (regression)", async () => {
    const user = userEvent.setup()
    const TestWrapper = () => {
      const [active, setActive] = useState("1")
      return (
        <Tabs
          type="segmented"
          items={items}
          currentActiveKey={active}
          onChange={setActive}
        />
      )
    }

    render(<TestWrapper />)
    const tab2 = screen.getByText("Tab 2")
    await user.click(tab2)
    const tab1 = screen.getByText("Tab 1")
    await user.click(tab1)
    expect(screen.getByText("Content 1")).toBeInTheDocument()
  })
})
