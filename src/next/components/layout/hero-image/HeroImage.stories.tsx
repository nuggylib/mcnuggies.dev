import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import HeroImage from "./HeroImage"

const meta: Meta<typeof HeroImage> = {
  title: "Components/Layout/HeroImage",
  component: HeroImage,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "A hero image component that can display a large image with an optional title overlay. Useful for page headers and hero sections.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    pageTitle: {
      control: "text",
      description: "The title text to display over the hero image (only shown when useTitleOverlay is true)",
    },
    useTitleOverlay: {
      control: "boolean",
      description: "Whether to display the title overlay on the hero image",
    },
    imgSrc: {
      control: "text",
      description: "The source URL or path for the hero image",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    pageTitle: "Welcome to My Blog",
    useTitleOverlay: true,
    imgSrc: "/about.jpg",
  },
}

export const WithoutTitleOverlay: Story = {
  args: {
    pageTitle: "Sample Title",
    useTitleOverlay: false,
    imgSrc: "/about.jpg",
  },
  parameters: {
    docs: {
      description: {
        story: "Hero image without title overlay, showing just the image.",
      },
    },
  },
}

export const LongTitle: Story = {
  args: {
    pageTitle: "This is a Much Longer Title That Demonstrates How the Hero Component Handles Extended Text",
    useTitleOverlay: true,
    imgSrc: "/building-blocks.jpg",
  },
  parameters: {
    docs: {
      description: {
        story: "Hero image with a longer title to test text wrapping and layout.",
      },
    },
  },
}

export const BlogHero: Story = {
  args: {
    pageTitle: "Latest Articles",
    useTitleOverlay: true,
    imgSrc: "/generic-blog.jpeg",
  },
  parameters: {
    docs: {
      description: {
        story: "Hero image suitable for a blog section or article listing page.",
      },
    },
  },
}

export const AboutPageHero: Story = {
  args: {
    pageTitle: "About Me",
    useTitleOverlay: true,
    imgSrc: "/about.jpg",
  },
  parameters: {
    docs: {
      description: {
        story: "Hero image configuration for an about page.",
      },
    },
  },
}

export const ProjectsHero: Story = {
  args: {
    pageTitle: "My Projects",
    useTitleOverlay: true,
    imgSrc: "/building-blocks.jpg",
  },
  parameters: {
    docs: {
      description: {
        story: "Hero image suitable for a projects or portfolio page.",
      },
    },
  },
}

export const NoTitle: Story = {
  args: {
    useTitleOverlay: false,
    imgSrc: "/demo/carousel/carousel-1.jpg",
  },
  parameters: {
    docs: {
      description: {
        story: "Hero image with no title provided and overlay disabled.",
      },
    },
  },
}

export const TitleProvidedButOverlayDisabled: Story = {
  args: {
    pageTitle: "This Title Won't Show",
    useTitleOverlay: false,
    imgSrc: "/demo/carousel/carousel-2.jpg",
  },
  parameters: {
    docs: {
      description: {
        story: "Hero image where a title is provided but the overlay is disabled, so the title is not displayed.",
      },
    },
  },
}