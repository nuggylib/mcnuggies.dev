import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { fn } from "storybook/test"
import CustomIcon from "./CustomIcon"

const meta: Meta<typeof CustomIcon> = {
  title: "Components/Shared/CustomIcon",
  component: CustomIcon,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A shared icon component for rendering SVG files from the icons directory. Supports custom sizing, styling, and click handling. The component automatically loads SVG files by name and provides error handling for missing icons.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    fileName: {
      control: "select",
      options: [
        "bootstrap-book",
        "bootstrap-card-list",
        "bootstrap-check-circle-filled",
        "bootstrap-chevron-left",
        "bootstrap-chevron-right",
        "bootstrap-emoji-frown",
        "bootstrap-filter",
        "bootstrap-hammer",
        "bootstrap-info-circle",
        "bootstrap-link-45deg",
        "bootstrap-list",
        "bootstrap-three-dots",
        "bootstrap-x-circle-filled",
        "bootstrap-x-large",
        "logo-cypress",
        "logo-eslint",
        "logo-github",
        "logo-linkedin",
        "logo-netlify-dark",
        "logo-netlify-light",
        "logo-react-bootstrap",
        "logo-redux",
        "logo-sanity",
        "logo-sass",
        "logo-vercel",
        "nextjs-icon-dark"
      ],
      description: "The name of the SVG file without the .svg extension",
    },
    height: {
      control: { type: "number", min: 16, max: 200, step: 1 },
      description: "Height of the icon in pixels",
    },
    width: {
      control: { type: "number", min: 16, max: 200, step: 1 },
      description: "Width of the icon in pixels",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the icon",
    },
    alt: {
      control: "text",
      description: "Alternative text for accessibility (used as title attribute)",
    },
    onClick: {
      action: "clicked",
      description: "Function called when the icon is clicked",
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
    fileName: "bootstrap-info-circle",
    height: 24,
    width: 24,
    alt: "Information icon",
  },
  parameters: {
    docs: {
      description: {
        story: "Default icon with standard 24x24 size showing the info circle icon.",
      },
    },
  },
}
