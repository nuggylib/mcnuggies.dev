import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Languages } from "./Languages"

const meta: Meta<typeof Languages> = {
  title: "Components/Pages/Projects/GitHubDataComponents/Languages",
  component: Languages,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Languages component that displays repository language statistics from GitHub API. Shows a pie chart visualization and language list with percentages. Handles loading states and API errors gracefully. Requires GitHub owner and repository name props.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    githubOwner: {
      control: "text",
      description: "GitHub repository owner/organization name",
    },
    githubRepo: {
      control: "text",
      description: "GitHub repository name",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    githubOwner: "facebook",
    githubRepo: "react",
  },
  parameters: {
    docs: {
      description: {
        story: "Default languages component displaying repository language statistics with pie chart and list.",
      },
    },
  },
}
