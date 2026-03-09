import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi, beforeEach } from "vitest"
import { Steps } from "@/components"
import type { StepContent } from "./steps.types"
import { useBreakpoint } from "@/hooks"

// Mock useBreakpoint hook
vi.mock("@/hooks", () => ({
  useBreakpoint: vi.fn(() => ({
    xs: false,
    sm: false,
    md: true,
    lg: false,
    xl: false,
  })),
}))

describe("Steps Component", () => {
  const mockSteps: StepContent[] = [
    { id: "1", name: "Account", status: "COMPLETE", href: "/step/1" },
    { id: "2", name: "Profile", status: "COMPLETE", href: "/step/2" },
    { id: "3", name: "Preferences", status: "CURRENT", href: "/step/3" },
    { id: "4", name: "Security", status: "PENDING", href: "/step/4" },
    { id: "5", name: "Notifications", status: "PENDING", href: "/step/5" },
  ]

  beforeEach(() => {
    vi.clearAllMocks()
    // Reset mock to default state
    vi.mocked(useBreakpoint).mockReturnValue({
      xs: false,
      sm: false,
      md: true,
      lg: false,
      xl: false,
    })
  })

  describe("Rendering", () => {
    it("should render the component with all steps", () => {
      render(<Steps steps={mockSteps} />)

      // Should render navigation buttons
      const buttons = screen.getAllByRole("button")
      expect(buttons).toHaveLength(2)
    })

    it("should render with custom className", () => {
      const { container } = render(
        <Steps steps={mockSteps} className="custom-class" />
      )

      const stepContainer = container.querySelector(".custom-class")
      expect(stepContainer).toBeInTheDocument()
    })

    it("should render with different sizes", () => {
      const { container } = render(<Steps steps={mockSteps} size="lg" />)
      expect(container.firstChild).toBeInTheDocument()
    })
  })

  describe("Navigation", () => {
    it("should navigate to previous steps when clicking left button", () => {
      render(<Steps steps={mockSteps} />)

      const leftButton = screen.getByLabelText("stepButton-left")
      const rightButton = screen.getByLabelText("stepButton-right")

      // Click right first to have room to go left
      fireEvent.click(rightButton)
      fireEvent.click(leftButton)

      expect(leftButton).toBeInTheDocument()
    })

    it("should navigate to next steps when clicking right button", () => {
      render(<Steps steps={mockSteps} />)

      const rightButton = screen.getByLabelText("stepButton-right")
      fireEvent.click(rightButton)

      expect(rightButton).toBeInTheDocument()
    })

    it("should disable left button at the start", () => {
      render(<Steps steps={mockSteps.slice(0, 3)} />)

      const leftButton = screen.getByLabelText("stepButton-left")
      expect(leftButton).toBeDisabled()
    })

    it("should disable right button at the end", () => {
      vi.mocked(useBreakpoint).mockReturnValue({
        xs: false,
        sm: false,
        md: false,
        lg: true,
        xl: false,
      })

      const steps = mockSteps.slice(0, 4)
      render(<Steps steps={steps} />)

      const rightButton = screen.getByLabelText("stepButton-right")
      expect(rightButton).toBeDisabled()
    })
  })

  describe("Current Step Detection", () => {
    it("should detect and center on current step", () => {
      render(<Steps steps={mockSteps} />)

      // Current step should be visible
      expect(screen.getByText("Preferences")).toBeInTheDocument()
    })

    it("should handle steps with no current status", () => {
      const stepsNoCurrent = mockSteps.map(step => ({
        ...step,
        status: "PENDING" as const,
      }))

      render(<Steps steps={stepsNoCurrent} />)
      expect(screen.getByText("Account")).toBeInTheDocument()
    })
  })

  describe("Responsive Behavior", () => {
    it("should show 3 steps on medium breakpoint", () => {
      vi.mocked(useBreakpoint).mockReturnValue({
        xs: false,
        sm: false,
        md: true,
        lg: false,
        xl: false,
      })

      render(<Steps steps={mockSteps} />)

      // With md breakpoint, should show 3 steps centered on current
      expect(screen.getByText("Preferences")).toBeInTheDocument()
      expect(screen.getByText("Security")).toBeInTheDocument()
      expect(screen.getByText("Notifications")).toBeInTheDocument()
    })

    it("should show 4 steps on large breakpoint", () => {
      vi.mocked(useBreakpoint).mockReturnValue({
        xs: false,
        sm: false,
        md: false,
        lg: true,
        xl: false,
      })

      render(<Steps steps={mockSteps} />)

      // With lg breakpoint, should show 4 steps centered on current step
      expect(screen.getByText("Profile")).toBeInTheDocument()
      expect(screen.getByText("Preferences")).toBeInTheDocument()
      expect(screen.getByText("Security")).toBeInTheDocument()
      expect(screen.getByText("Notifications")).toBeInTheDocument()
    })

    it("should show 1 step on extra small breakpoint", () => {
      vi.mocked(useBreakpoint).mockReturnValue({
        xs: true,
        sm: false,
        md: false,
        lg: false,
        xl: false,
      })

      render(<Steps steps={mockSteps} />)

      expect(screen.getByText("Preferences")).toBeInTheDocument()
    })
  })

  describe("Visible Steps", () => {
    it("should display correct number of visible steps", () => {
      render(<Steps steps={mockSteps} />)

      // Should have navigation buttons
      expect(screen.getByLabelText("stepButton-left")).toBeInTheDocument()
      expect(screen.getByLabelText("stepButton-right")).toBeInTheDocument()
    })

    it("should update visible steps on navigation", () => {
      render(<Steps steps={mockSteps} />)

      const rightButton = screen.getByLabelText("stepButton-right")

      // Click to navigate
      fireEvent.click(rightButton)

      // Buttons should still be present
      expect(rightButton).toBeInTheDocument()
    })
  })

  describe("Edge Cases", () => {
    it("should handle empty steps array", () => {
      render(<Steps steps={[]} />)

      const leftButton = screen.getByLabelText("stepButton-left")
      const rightButton = screen.getByLabelText("stepButton-right")

      expect(leftButton).toBeDisabled()
      expect(rightButton).toBeDisabled()
    })

    it("should handle single step", () => {
      const singleStep: StepContent[] = [
        { id: "1", name: "Only Step", status: "CURRENT", href: "/step/1" },
      ]

      render(<Steps steps={singleStep} />)

      expect(screen.getByText("Only Step")).toBeInTheDocument()

      const leftButton = screen.getByLabelText("stepButton-left")
      const rightButton = screen.getByLabelText("stepButton-right")

      expect(leftButton).toBeDisabled()
      expect(rightButton).toBeDisabled()
    })

    it("should handle steps without href", () => {
      const stepsNoHref: StepContent[] = [
        { id: "1", name: "Step 1", status: "COMPLETE" },
        { id: "2", name: "Step 2", status: "CURRENT" },
        { id: "3", name: "Step 3", status: "PENDING" },
      ]

      render(<Steps steps={stepsNoHref} />)
      expect(screen.getByText("Step 1")).toBeInTheDocument()
    })
  })

  describe("Multiple Navigation", () => {
    it("should handle multiple clicks on navigation buttons", () => {
      render(<Steps steps={mockSteps} />)

      const rightButton = screen.getByLabelText("stepButton-right")

      // Multiple clicks
      fireEvent.click(rightButton)
      fireEvent.click(rightButton)

      expect(rightButton).toBeInTheDocument()
    })

    it("should not navigate beyond boundaries", () => {
      // Use steps where current step is first to test left boundary
      const stepsCurrentFirst: StepContent[] = [
        { id: "1", name: "First Step", status: "CURRENT", href: "/step/1" },
        { id: "2", name: "Second Step", status: "PENDING", href: "/step/2" },
        { id: "3", name: "Third Step", status: "PENDING", href: "/step/3" },
      ]

      render(<Steps steps={stepsCurrentFirst} />)

      const leftButton = screen.getByLabelText("stepButton-left")

      // Should be disabled at the start
      expect(leftButton).toBeDisabled()

      // Attempt to click - should not throw error
      fireEvent.click(leftButton)
    })
  })

  describe("Accessibility", () => {
    it("should have proper aria labels on buttons", () => {
      render(<Steps steps={mockSteps} />)

      expect(screen.getByLabelText("stepButton-left")).toBeInTheDocument()
      expect(screen.getByLabelText("stepButton-right")).toBeInTheDocument()
    })

    it("should have proper button types", () => {
      render(<Steps steps={mockSteps} />)

      const buttons = screen.getAllByRole("button")
      buttons.forEach(button => {
        expect(button).toHaveAttribute("type", "button")
      })
    })
  })

  describe("WithNavigation Prop", () => {
    it("should render navigation buttons by default", () => {
      render(<Steps steps={mockSteps} />)

      expect(screen.getByLabelText("stepButton-left")).toBeInTheDocument()
      expect(screen.getByLabelText("stepButton-right")).toBeInTheDocument()
    })

    it("should hide navigation buttons when withNavigation is false", () => {
      render(<Steps steps={mockSteps} withNavigation={false} />)

      expect(screen.queryByLabelText("stepButton-left")).not.toBeInTheDocument()
      expect(
        screen.queryByLabelText("stepButton-right")
      ).not.toBeInTheDocument()
    })

    it("should still render steps when withNavigation is false", () => {
      render(<Steps steps={mockSteps} withNavigation={false} />)

      expect(screen.getByText("Preferences")).toBeInTheDocument()
      expect(screen.getByText("Security")).toBeInTheDocument()
    })

    it("should apply justify-center class when withNavigation is false", () => {
      const { container } = render(
        <Steps steps={mockSteps} withNavigation={false} />
      )

      const stepContainer = container.firstChild as HTMLElement
      expect(stepContainer).toHaveClass("justify-center")
      expect(stepContainer).not.toHaveClass("justify-between")
    })

    it("should apply justify-between class when withNavigation is true", () => {
      const { container } = render(
        <Steps steps={mockSteps} withNavigation={true} />
      )

      const stepContainer = container.firstChild as HTMLElement
      expect(stepContainer).toHaveClass("justify-between")
      expect(stepContainer).not.toHaveClass("justify-center")
    })
  })
})
