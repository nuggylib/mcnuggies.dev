import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import GlobalSearch from "./GlobalSearch"

const meta: Meta<typeof GlobalSearch> = {
  title: "Components/Layout/GlobalSearch",
  component: GlobalSearch,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Input component built on React Bootstrap InputGroup and FormControl. Provides a flexible input field with optional pre and post segments (addons). Includes proper accessibility attributes for screen readers and form integration.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "The default global search field.",
      },
    },
  },
}
