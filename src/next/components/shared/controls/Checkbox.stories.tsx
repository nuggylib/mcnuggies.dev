import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { fn } from "storybook/test"
import Checkbox from "./Checkbox"

const meta: Meta<typeof Checkbox> = {
  title: "Components/Shared/Controls/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Checkbox component built on React Bootstrap Form.Check. Provides a labeled checkbox input with customizable click handling. Supports checked state management and optional label text.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: "text",
      description: "Unique identifier for the checkbox input element",
    },
    label: {
      control: "text",
      description: "Optional label text displayed next to the checkbox",
    },
    checked: {
      control: "boolean",
      description: "Whether the checkbox is currently checked",
    },
    onClick: {
      description: "Callback function triggered when the checkbox is clicked",
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
    id: "default-checkbox",
    label: "Default Checkbox",
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Default checkbox with label in unchecked state.",
      },
    },
  },
}

export const Checked: Story = {
  args: {
    id: "checked-checkbox",
    label: "Checked Checkbox",
    checked: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Checkbox in checked state showing selected appearance.",
      },
    },
  },
}
