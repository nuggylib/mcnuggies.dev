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

export const Unchecked: Story = {
  args: {
    id: "unchecked-checkbox",
    label: "Unchecked Checkbox",
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Checkbox in unchecked state showing default appearance.",
      },
    },
  },
}

export const WithoutLabel: Story = {
  args: {
    id: "no-label-checkbox",
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Checkbox without a label, useful for custom layouts or when label is provided elsewhere.",
      },
    },
  },
}

export const WithoutLabelChecked: Story = {
  args: {
    id: "no-label-checked-checkbox",
    checked: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Checkbox without label in checked state.",
      },
    },
  },
}

export const LongLabel: Story = {
  args: {
    id: "long-label-checkbox",
    label: "This is a very long label that demonstrates how the checkbox component handles longer text content and text wrapping behavior",
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Checkbox with a long label to test text wrapping and layout behavior.",
      },
    },
  },
}

export const ShortLabel: Story = {
  args: {
    id: "short-label-checkbox",
    label: "Yes",
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Checkbox with a short label for compact layouts.",
      },
    },
  },
}

export const AcceptTerms: Story = {
  args: {
    id: "terms-checkbox",
    label: "I accept the terms and conditions",
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Checkbox for accepting terms and conditions, commonly used in forms.",
      },
    },
  },
}

export const NewsletterSubscription: Story = {
  args: {
    id: "newsletter-checkbox",
    label: "Subscribe to our newsletter for updates",
    checked: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Checkbox for newsletter subscription, pre-checked by default.",
      },
    },
  },
}

export const PrivacyConsent: Story = {
  args: {
    id: "privacy-checkbox",
    label: "I consent to the processing of my personal data",
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Checkbox for privacy consent, typically required in forms.",
      },
    },
  },
}

export const RememberMe: Story = {
  args: {
    id: "remember-checkbox",
    label: "Remember me on this device",
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Checkbox for remember me functionality in login forms.",
      },
    },
  },
}

export const EnableNotifications: Story = {
  args: {
    id: "notifications-checkbox",
    label: "Enable push notifications",
    checked: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Checkbox for enabling notifications, commonly found in settings.",
      },
    },
  },
}

export const PublicProfile: Story = {
  args: {
    id: "public-checkbox",
    label: "Make my profile public",
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Checkbox for public profile visibility setting.",
      },
    },
  },
}

export const TwoFactorAuth: Story = {
  args: {
    id: "2fa-checkbox",
    label: "Enable two-factor authentication",
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Checkbox for enabling two-factor authentication security feature.",
      },
    },
  },
}

export const SaveDraft: Story = {
  args: {
    id: "draft-checkbox",
    label: "Save as draft",
    checked: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Checkbox for saving content as draft instead of publishing.",
      },
    },
  },
}