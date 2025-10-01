import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import CreatorImage from "./CreatorImage"

const meta: Meta<typeof CreatorImage> = {
  title: "Components/Pages/About/CreatorImage",
  component: CreatorImage,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A creator image component that displays a profile image with blur placeholder. Uses Next.js Image component with fill layout for optimal loading and display.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    imageUrl: {
      control: "text",
      description: "The URL or path to the creator's image",
    },
    base64Image: {
      control: "text",
      description: "Base64 encoded blur placeholder image for smooth loading",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Sample base64 image for blur placeholder (1x1 pixel transparent PNG)
const sampleBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="

export const Default: Story = {
  args: {
    imageUrl: "/mcnuggies.png",
    base64Image: sampleBase64,
  },
}
