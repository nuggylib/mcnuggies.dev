import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { fn } from "storybook/test"
import { Category } from "./Category"

const meta: Meta<typeof Category> = {
  title: "Components/Shared/Category",
  component: Category,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A clickable category tag component with active and default states. Features hover effects, transition animations, and consistent styling for filtering or selection interfaces.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "The display text for the category tag",
    },
    isActive: {
      control: "boolean",
      description: "Whether the category is in active/selected state",
    },
    onClick: {
      action: "clicked",
      description: "Function called when the category is clicked",
    },
  },
  args: {
    onClick: fn(),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Technology",
    isActive: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Default category state with hover effects and click handling.",
      },
    },
  },
}

export const Active: Story = {
  args: {
    title: "Technology",
    isActive: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Active category state showing selected styling with indigo colors.",
      },
    },
  },
}
