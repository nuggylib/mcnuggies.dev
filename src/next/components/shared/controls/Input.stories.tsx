import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import Input from "./Input"

const meta: Meta<typeof Input> = {
  title: "Components/Shared/Controls/Input",
  component: Input,
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
    preSegment: {
      control: "text",
      description: "Optional text segment displayed before the input field",
    },
    postSegment: {
      control: "text",
      description: "Optional text segment displayed after the input field",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text shown when input is empty",
    },
    ariaLabel: {
      control: "text",
      description: "Accessibility label for the input element",
    },
    ariaDescribedBy: {
      control: "text",
      description: "ID of element that describes the input for accessibility",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "Enter text here",
    ariaLabel: "Default input field",
    ariaDescribedBy: "default-input-help",
  },
  parameters: {
    docs: {
      description: {
        story: "Basic input field without any pre or post segments.",
      },
    },
  },
}

export const WithPreSegment: Story = {
  args: {
    preSegment: "@",
    placeholder: "username",
    ariaLabel: "Username input",
    ariaDescribedBy: "username-help",
  },
  parameters: {
    docs: {
      description: {
        story: "Input field with a pre-segment addon, commonly used for usernames or handles.",
      },
    },
  },
}

export const WithPostSegment: Story = {
  args: {
    postSegment: ".com",
    placeholder: "example",
    ariaLabel: "Website input",
    ariaDescribedBy: "website-help",
  },
  parameters: {
    docs: {
      description: {
        story: "Input field with a post-segment addon, useful for domain extensions or units.",
      },
    },
  },
}

export const WithBothSegments: Story = {
  args: {
    preSegment: "$",
    postSegment: ".00",
    placeholder: "0",
    ariaLabel: "Price input",
    ariaDescribedBy: "price-help",
  },
  parameters: {
    docs: {
      description: {
        story: "Input field with both pre and post segments, ideal for currency or formatted values.",
      },
    },
  },
}
