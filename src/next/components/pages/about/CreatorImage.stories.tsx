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

export const AboutPageImage: Story = {
  args: {
    imageUrl: "/about.jpg",
    base64Image: sampleBase64,
  },
  parameters: {
    docs: {
      description: {
        story: "Creator image using the about page photo.",
      },
    },
  },
}

export const ProfileImage: Story = {
  args: {
    imageUrl: "/demo/carousel/carousel-1.jpg",
    base64Image: sampleBase64,
  },
  parameters: {
    docs: {
      description: {
        story: "Creator image with a different profile photo.",
      },
    },
  },
}

export const AlternativeImage: Story = {
  args: {
    imageUrl: "/demo/carousel/carousel-2.jpg",
    base64Image: sampleBase64,
  },
  parameters: {
    docs: {
      description: {
        story: "Creator image with an alternative photo option.",
      },
    },
  },
}

export const WithCustomBlur: Story = {
  args: {
    imageUrl: "/building-blocks.jpg",
    base64Image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Wq/8AkZH4R/rr7pXjdcLaAZ/kXOr6v/Z",
  },
  parameters: {
    docs: {
      description: {
        story: "Creator image with a custom blur data URL that provides a more specific blur preview.",
      },
    },
  },
}