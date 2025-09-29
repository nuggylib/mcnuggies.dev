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

export const EmailInput: Story = {
  args: {
    preSegment: "@",
    postSegment: ".com",
    placeholder: "yourname",
    ariaLabel: "Email address input",
    ariaDescribedBy: "email-help",
  },
  parameters: {
    docs: {
      description: {
        story: "Email input with both username prefix and domain suffix.",
      },
    },
  },
}

export const URLInput: Story = {
  args: {
    preSegment: "https://",
    placeholder: "example.com",
    ariaLabel: "Website URL input",
    ariaDescribedBy: "url-help",
  },
  parameters: {
    docs: {
      description: {
        story: "URL input with protocol prefix for website addresses.",
      },
    },
  },
}

export const CurrencyInput: Story = {
  args: {
    preSegment: "$",
    placeholder: "0.00",
    ariaLabel: "Currency amount input",
    ariaDescribedBy: "currency-help",
  },
  parameters: {
    docs: {
      description: {
        story: "Currency input with dollar sign prefix for monetary values.",
      },
    },
  },
}

export const PercentageInput: Story = {
  args: {
    postSegment: "%",
    placeholder: "Enter percentage",
    ariaLabel: "Percentage input",
    ariaDescribedBy: "percentage-help",
  },
  parameters: {
    docs: {
      description: {
        story: "Percentage input with percent symbol suffix.",
      },
    },
  },
}

export const WeightInput: Story = {
  args: {
    postSegment: "kg",
    placeholder: "Enter weight",
    ariaLabel: "Weight input",
    ariaDescribedBy: "weight-help",
  },
  parameters: {
    docs: {
      description: {
        story: "Weight input with kilogram unit suffix.",
      },
    },
  },
}

export const TemperatureInput: Story = {
  args: {
    postSegment: "°C",
    placeholder: "Enter temperature",
    ariaLabel: "Temperature input",
    ariaDescribedBy: "temperature-help",
  },
  parameters: {
    docs: {
      description: {
        story: "Temperature input with Celsius unit suffix.",
      },
    },
  },
}

export const SocialHandle: Story = {
  args: {
    preSegment: "@",
    placeholder: "username",
    ariaLabel: "Social media handle input",
    ariaDescribedBy: "handle-help",
  },
  parameters: {
    docs: {
      description: {
        story: "Social media handle input with @ symbol prefix.",
      },
    },
  },
}

export const PhoneExtension: Story = {
  args: {
    preSegment: "Ext.",
    placeholder: "1234",
    ariaLabel: "Phone extension input",
    ariaDescribedBy: "extension-help",
  },
  parameters: {
    docs: {
      description: {
        story: "Phone extension input with extension prefix.",
      },
    },
  },
}

export const SearchInput: Story = {
  args: {
    preSegment: "🔍",
    placeholder: "Search...",
    ariaLabel: "Search input",
    ariaDescribedBy: "search-help",
  },
  parameters: {
    docs: {
      description: {
        story: "Search input with magnifying glass icon prefix.",
      },
    },
  },
}

export const FileSize: Story = {
  args: {
    postSegment: "MB",
    placeholder: "File size",
    ariaLabel: "File size input",
    ariaDescribedBy: "filesize-help",
  },
  parameters: {
    docs: {
      description: {
        story: "File size input with megabytes unit suffix.",
      },
    },
  },
}

export const Discount: Story = {
  args: {
    preSegment: "Save",
    postSegment: "%",
    placeholder: "10",
    ariaLabel: "Discount percentage input",
    ariaDescribedBy: "discount-help",
  },
  parameters: {
    docs: {
      description: {
        story: "Discount input with descriptive prefix and percentage suffix.",
      },
    },
  },
}

export const LongSegments: Story = {
  args: {
    preSegment: "Identification Number:",
    postSegment: "(Required)",
    placeholder: "Enter your ID",
    ariaLabel: "Identification number input",
    ariaDescribedBy: "id-help",
  },
  parameters: {
    docs: {
      description: {
        story: "Input with longer text segments to test layout with extended content.",
      },
    },
  },
}

export const MinimalPlaceholder: Story = {
  args: {
    preSegment: "#",
    placeholder: "ID",
    ariaLabel: "Identifier input",
    ariaDescribedBy: "id-help",
  },
  parameters: {
    docs: {
      description: {
        story: "Input with short placeholder text and hash prefix for IDs.",
      },
    },
  },
}

export const AccessibilityExample: Story = {
  args: {
    preSegment: "User ID:",
    placeholder: "Enter your user identifier",
    ariaLabel: "User identification number",
    ariaDescribedBy: "user-id-description",
  },
  parameters: {
    docs: {
      description: {
        story: "Example demonstrating proper accessibility attributes with descriptive labels.",
      },
    },
  },
}

export const CodeInput: Story = {
  args: {
    preSegment: "CODE:",
    placeholder: "ABC123",
    ariaLabel: "Promotional code input",
    ariaDescribedBy: "promo-code-help",
  },
  parameters: {
    docs: {
      description: {
        story: "Promotional or discount code input with code prefix.",
      },
    },
  },
}

export const RoomNumber: Story = {
  args: {
    preSegment: "Room",
    postSegment: "Floor 2",
    placeholder: "201",
    ariaLabel: "Room number input",
    ariaDescribedBy: "room-help",
  },
  parameters: {
    docs: {
      description: {
        story: "Room number input with both room prefix and floor suffix.",
      },
    },
  },
}