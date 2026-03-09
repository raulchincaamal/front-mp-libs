import type { Meta, StoryObj } from "@storybook/react"
import { RootLayout } from "./root-layout.component"
import LogoIpsumV2 from "@/assets/logos/logo-ipsum-2.svg"

const meta: Meta<typeof RootLayout> = {
  title: "Layout/RootLayout",
  component: RootLayout,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "RootLayout is a compound component that provides the main layout structure with Header, Content, and Footer subcomponents.",
      },
    },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <RootLayout>
      <RootLayout.Header>
        <div className="text-primary-blue font-semibold">Header Content</div>
      </RootLayout.Header>
      <RootLayout.Content>
        <h1 className="text-2xl font-bold mb-4">Main Content</h1>
        <p>This is the main content area of the layout.</p>
      </RootLayout.Content>
      <RootLayout.Footer>
        © 2024 MacroPay. All rights reserved.
      </RootLayout.Footer>
    </RootLayout>
  ),
}

export const WithoutHeader: Story = {
  render: () => (
    <RootLayout>
      <RootLayout.Content>
        <h1 className="text-2xl font-bold mb-4">Content Without Header</h1>
        <p>Layout without header component.</p>
      </RootLayout.Content>
      <RootLayout.Footer>© 2024 MacroPay</RootLayout.Footer>
    </RootLayout>
  ),
}

export const WithoutFooter: Story = {
  render: () => (
    <RootLayout>
      <RootLayout.Header>
        <div className="text-primary-blue font-semibold">Header</div>
      </RootLayout.Header>
      <RootLayout.Content>
        <h1 className="text-2xl font-bold mb-4">Content Without Footer</h1>
        <p>Layout without footer component.</p>
      </RootLayout.Content>
    </RootLayout>
  ),
}

export const ContentOnly: Story = {
  render: () => (
    <RootLayout>
      <RootLayout.Content>
        <h1 className="text-2xl font-bold mb-4">Content Only</h1>
        <p>Minimal layout with only content.</p>
      </RootLayout.Content>
    </RootLayout>
  ),
}

export const CompleteLayout: Story = {
  render: () => (
    <RootLayout>
      <RootLayout.Header>
        <RootLayout.Header.LeftSide>
          <LogoIpsumV2 />
        </RootLayout.Header.LeftSide>
        <RootLayout.Header.RightSide>
          <RootLayout.Header.Store>EULOGIO(1015)</RootLayout.Header.Store>
          <RootLayout.Header.User name="User name" role="Administrator" />
        </RootLayout.Header.RightSide>
      </RootLayout.Header>
      <RootLayout.Content>Default Content</RootLayout.Content>
      <RootLayout.Footer>Macropay (2025122918)</RootLayout.Footer>
    </RootLayout>
  ),
}

export const EmptyLayout: Story = {
  render: () => <RootLayout />,
}
