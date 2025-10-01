import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { fn } from "storybook/test"
import Radio from "./Radio"

const meta: Meta<typeof Radio> = {
  title: "Components/Shared/Controls/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Radio component built on React Bootstrap Form.Check. Provides a labeled radio button input with customizable click handling. Supports checked state management and optional label text. Used for single selection from multiple options.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: "text",
      description: "Unique identifier for the radio input element",
    },
    label: {
      control: "text",
      description: "Optional label text displayed next to the radio button",
    },
    checked: {
      control: "boolean",
      description: "Whether the radio button is currently selected",
    },
    onClick: {
      description: "Callback function triggered when the radio button is clicked",
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
    id: "default-radio",
    label: "Default Radio",
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Default radio button with label in unselected state.",
      },
    },
  },
}

export const Selected: Story = {
  args: {
    id: "selected-radio",
    label: "Selected Radio",
    checked: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Radio button in selected state showing checked appearance.",
      },
    },
  },
}

export const Unselected: Story = {
  args: {
    id: "unselected-radio",
    label: "Unselected Radio",
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Radio button in unselected state showing default appearance.",
      },
    },
  },
}
