import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { TechStackIntegration } from "./TechStackIntegration"

const meta: Meta<typeof TechStackIntegration> = {
  title: "Components/Pages/Home/TechStack/TechStackIntegration",
  component: TechStackIntegration,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Tech stack integration component that displays a technology provider with an icon, name, and description. Clickable component that opens the provider's homepage in a new tab.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    provider: {
      control: "text",
      description: "The name of the technology provider",
    },
    iconFileName: {
      control: "text",
      description: "The filename of the icon to display (without extension)",
    },
    description: {
      control: "text",
      description: "Description of how the technology is used",
    },
    homePage: {
      control: "text",
      description: "URL to the provider's homepage",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    provider: "React",
    iconFileName: "react",
    description: "A JavaScript library for building user interfaces with component-based architecture.",
    homePage: "https://reactjs.org",
  },
  parameters: {
    docs: {
      description: {
        story: "Default tech stack integration showing React.",
      },
    },
  },
}
