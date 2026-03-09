import type { Meta, StoryObj } from "@storybook/react"
import Carousel from "./carousel.component"

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  argTypes: {
    isScale: {
      control: "boolean",
    },
    options: {
      control: "object",
    },
  },
}

export default meta
type Story = StoryObj<typeof Carousel>

export const Default: Story = {
  render: () => (
    <Carousel>
      <Carousel.Container>
        {[1, 2, 3, 4, 5].map(i => (
          <Carousel.Item key={i} className="basis-1/3 px-2">
            <div className="h-48 bg-blue-500 rounded-lg flex items-center justify-center text-white text-2xl">
              Slide {i}
            </div>
          </Carousel.Item>
        ))}
      </Carousel.Container>
      <div className="flex justify-center mt-4">
        <Carousel.Dots />
      </div>
    </Carousel>
  ),
}

export const WithScale: Story = {
  render: () => (
    <Carousel isScale>
      <Carousel.Container>
        {[1, 2, 3, 4, 5].map(i => (
          <Carousel.Item key={i} className="basis-1/3 px-2">
            <div className="h-48 bg-purple-500 rounded-lg flex items-center justify-center text-white text-2xl">
              Slide {i}
            </div>
          </Carousel.Item>
        ))}
      </Carousel.Container>
      <div className="flex justify-center mt-4">
        <Carousel.Dots />
      </div>
    </Carousel>
  ),
}

export const FullWidth: Story = {
  render: () => (
    <Carousel>
      <Carousel.Container>
        {[1, 2, 3, 4].map(i => (
          <Carousel.Item key={i} className="basis-full">
            <div className="h-64 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-3xl">
              Slide {i}
            </div>
          </Carousel.Item>
        ))}
      </Carousel.Container>
      <div className="flex justify-center mt-4">
        <Carousel.Dots />
      </div>
    </Carousel>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Carousel options={{ axis: "y" }}>
      <Carousel.Container className="h-96">
        {[1, 2, 3, 4].map(i => (
          <Carousel.Item key={i} className="basis-1/2">
            <div className="h-48 bg-green-500 rounded-lg flex items-center justify-center text-white text-2xl mx-2">
              Slide {i}
            </div>
          </Carousel.Item>
        ))}
      </Carousel.Container>
      <div className="flex justify-center mt-4">
        <Carousel.Dots />
      </div>
    </Carousel>
  ),
}

export const RTL: Story = {
  render: () => (
    <Carousel options={{ direction: "rtl" }}>
      <Carousel.Container>
        {[1, 2, 3, 4, 5].map(i => (
          <Carousel.Item key={i} className="basis-1/3 px-2">
            <div className="h-48 bg-orange-500 rounded-lg flex items-center justify-center text-white text-2xl">
              Slide {i}
            </div>
          </Carousel.Item>
        ))}
      </Carousel.Container>
      <div className="flex justify-center mt-4">
        <Carousel.Dots />
      </div>
    </Carousel>
  ),
}

export const Loop: Story = {
  render: () => (
    <Carousel options={{ loop: true }}>
      <Carousel.Container>
        {[1, 2, 3, 4].map(i => (
          <Carousel.Item key={i} className="basis-full">
            <div className="h-64 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center text-white text-3xl">
              Slide {i}
            </div>
          </Carousel.Item>
        ))}
      </Carousel.Container>
      <div className="flex justify-center mt-4">
        <Carousel.Dots />
      </div>
    </Carousel>
  ),
}

export const CustomDots: Story = {
  render: () => (
    <Carousel>
      <Carousel.Container>
        {[1, 2, 3, 4].map(i => (
          <Carousel.Item key={i} className="basis-full">
            <div className="h-64 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-3xl">
              Slide {i}
            </div>
          </Carousel.Item>
        ))}
      </Carousel.Container>
      <div className="flex justify-center mt-4">
        <Carousel.Dots activeClass="bg-red-500" />
      </div>
    </Carousel>
  ),
}

export const MultipleSlides: Story = {
  render: () => (
    <Carousel>
      <Carousel.Container>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
          <Carousel.Item key={i} className="basis-1/4 px-2">
            <div className="h-32 bg-teal-500 rounded-lg flex items-center justify-center text-white text-xl">
              {i}
            </div>
          </Carousel.Item>
        ))}
      </Carousel.Container>
      <div className="flex justify-center mt-4">
        <Carousel.Dots />
      </div>
    </Carousel>
  ),
}
