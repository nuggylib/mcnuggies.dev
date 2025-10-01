import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { RootPageSection } from "./RootPageSection"

const meta: Meta<typeof RootPageSection> = {
  title: "Components/Pages/Home/RootPageSection",
  component: RootPageSection,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Root page section component that displays a clickable card with an icon, title, and description. Features hover effects and responsive design that hides icons on smaller screens. Used for navigation sections on the homepage.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "The title of the section displayed prominently",
    },
    href: {
      control: "text",
      description: "The URL to navigate to when the section is clicked",
    },
    description: {
      control: "text",
      description: "Descriptive text explaining what the section contains",
    },
    iconFileName: {
      control: "text",
      description: "The filename of the icon to display (without extension)",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Blog",
    href: "/blog",
    description: "Read my latest thoughts on web development, technology, and programming",
    iconFileName: "blog",
  },
  parameters: {
    docs: {
      description: {
        story: "Default root page section showing a blog navigation card.",
      },
    },
  },
}
