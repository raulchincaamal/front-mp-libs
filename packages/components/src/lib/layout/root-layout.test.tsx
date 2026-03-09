import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { RootLayout } from "./root-layout.component"

describe("RootLayout", () => {
  it("renders children correctly", () => {
    render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    )

    expect(screen.getByText("Test Content")).toBeInTheDocument()
  })

  it("applies correct base classes", () => {
    const { container } = render(
      <RootLayout>
        <div>Content</div>
      </RootLayout>
    )

    const main = container.querySelector("main")
    expect(main).toHaveClass(
      "relative",
      "flex",
      "min-h-svh",
      "w-full",
      "flex-1",
      "flex-col",
      "bg-grays-macropay-02"
    )
  })

  it("has correct data-slot attribute", () => {
    const { container } = render(
      <RootLayout>
        <div>Content</div>
      </RootLayout>
    )

    const main = container.querySelector("main")
    expect(main).toHaveAttribute("data-slot", "sidebar-inset")
  })

  it("renders with Header subcomponent", () => {
    render(
      <RootLayout>
        <RootLayout.Header>
          <div>Header Content</div>
        </RootLayout.Header>
      </RootLayout>
    )

    expect(screen.getByText("Header Content")).toBeInTheDocument()
  })

  it("renders with Content subcomponent", () => {
    render(
      <RootLayout>
        <RootLayout.Content>
          <div>Main Content</div>
        </RootLayout.Content>
      </RootLayout>
    )

    expect(screen.getByText("Main Content")).toBeInTheDocument()
  })

  it("renders with Footer subcomponent", () => {
    render(
      <RootLayout>
        <RootLayout.Footer>Footer Content</RootLayout.Footer>
      </RootLayout>
    )

    expect(screen.getByText("Footer Content")).toBeInTheDocument()
  })

  it("renders complete layout with all subcomponents", () => {
    render(
      <RootLayout>
        <RootLayout.Header>Header</RootLayout.Header>
        <RootLayout.Content>Content</RootLayout.Content>
        <RootLayout.Footer>Footer</RootLayout.Footer>
      </RootLayout>
    )

    expect(screen.getByText("Header")).toBeInTheDocument()
    expect(screen.getByText("Content")).toBeInTheDocument()
    expect(screen.getByText("Footer")).toBeInTheDocument()
  })

  it("renders without any subcomponents", () => {
    const { container } = render(<RootLayout />)

    const main = container.querySelector("main")
    expect(main).toBeInTheDocument()
    expect(main).toBeEmptyDOMElement()
  })

  it("has Header subcomponent attached", () => {
    expect(RootLayout.Header).toBeDefined()
  })

  it("has Content subcomponent attached", () => {
    expect(RootLayout.Content).toBeDefined()
  })

  it("has Footer subcomponent attached", () => {
    expect(RootLayout.Footer).toBeDefined()
  })
})
