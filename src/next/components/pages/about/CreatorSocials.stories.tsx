import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import CreatorSocials from "./CreatorSocials"

const meta: Meta<typeof CreatorSocials> = {
  title: "Components/Pages/About/CreatorSocials",
  component: CreatorSocials,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A social media links component that displays GitHub and LinkedIn icons with clickable functionality. Icons are only shown when their respective URLs are provided.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    githubUrl: {
      control: "text",
      description: "URL to the creator's GitHub profile",
    },
    linkedInUrl: {
      control: "text",
      description: "URL to the creator's LinkedIn profile",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    githubUrl: "https://github.com/username",
    linkedInUrl: "https://linkedin.com/in/username",
  },
}

export const GitHubOnly: Story = {
  args: {
    githubUrl: "https://github.com/developer",
  },
  parameters: {
    docs: {
      description: {
        story: "Shows only the GitHub icon when only GitHub URL is provided.",
      },
    },
  },
}

export const LinkedInOnly: Story = {
  args: {
    linkedInUrl: "https://linkedin.com/in/professional",
  },
  parameters: {
    docs: {
      description: {
        story: "Shows only the LinkedIn icon when only LinkedIn URL is provided.",
      },
    },
  },
}

export const NoSocials: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "Shows an empty container when no social URLs are provided.",
      },
    },
  },
}

export const WithCustomUrls: Story = {
  args: {
    githubUrl: "https://github.com/ax-vasquez",
    linkedInUrl: "https://linkedin.com/in/alex-vasquez-dev",
  },
  parameters: {
    docs: {
      description: {
        story: "Example with realistic social media URLs.",
      },
    },
  },
}