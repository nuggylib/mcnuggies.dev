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

export const WithoutLabel: Story = {
  args: {
    id: "no-label-radio",
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Radio button without a label, useful for custom layouts or when label is provided elsewhere.",
      },
    },
  },
}

export const WithoutLabelSelected: Story = {
  args: {
    id: "no-label-selected-radio",
    checked: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Radio button without label in selected state.",
      },
    },
  },
}

export const LongLabel: Story = {
  args: {
    id: "long-label-radio",
    label: "This is a very long label that demonstrates how the radio component handles longer text content and text wrapping behavior",
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Radio button with a long label to test text wrapping and layout behavior.",
      },
    },
  },
}

export const ShortLabel: Story = {
  args: {
    id: "short-label-radio",
    label: "Yes",
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Radio button with a short label for compact layouts.",
      },
    },
  },
}

export const GenderMale: Story = {
  args: {
    id: "gender-male-radio",
    label: "Male",
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Radio button for gender selection - male option.",
      },
    },
  },
}

export const GenderFemale: Story = {
  args: {
    id: "gender-female-radio",
    label: "Female",
    checked: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Radio button for gender selection - female option, pre-selected.",
      },
    },
  },
}

export const GenderOther: Story = {
  args: {
    id: "gender-other-radio",
    label: "Other",
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Radio button for gender selection - other option.",
      },
    },
  },
}

export const PaymentCredit: Story = {
  args: {
    id: "payment-credit-radio",
    label: "Credit Card",
    checked: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Radio button for payment method selection - credit card option.",
      },
    },
  },
}

export const PaymentDebit: Story = {
  args: {
    id: "payment-debit-radio",
    label: "Debit Card",
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Radio button for payment method selection - debit card option.",
      },
    },
  },
}

export const PaymentPayPal: Story = {
  args: {
    id: "payment-paypal-radio",
    label: "PayPal",
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Radio button for payment method selection - PayPal option.",
      },
    },
  },
}

export const ShippingStandard: Story = {
  args: {
    id: "shipping-standard-radio",
    label: "Standard Shipping (5-7 business days)",
    checked: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Radio button for shipping option - standard shipping with details.",
      },
    },
  },
}

export const ShippingExpress: Story = {
  args: {
    id: "shipping-express-radio",
    label: "Express Shipping (2-3 business days)",
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Radio button for shipping option - express shipping with details.",
      },
    },
  },
}

export const ShippingOvernight: Story = {
  args: {
    id: "shipping-overnight-radio",
    label: "Overnight Shipping (Next business day)",
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Radio button for shipping option - overnight shipping with details.",
      },
    },
  },
}

export const SubscriptionMonthly: Story = {
  args: {
    id: "subscription-monthly-radio",
    label: "Monthly ($9.99/month)",
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Radio button for subscription plan - monthly option with pricing.",
      },
    },
  },
}

export const SubscriptionYearly: Story = {
  args: {
    id: "subscription-yearly-radio",
    label: "Yearly ($99.99/year - Save 17%)",
    checked: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Radio button for subscription plan - yearly option with savings highlight.",
      },
    },
  },
}

export const PriorityLow: Story = {
  args: {
    id: "priority-low-radio",
    label: "Low Priority",
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Radio button for priority selection - low priority option.",
      },
    },
  },
}

export const PriorityMedium: Story = {
  args: {
    id: "priority-medium-radio",
    label: "Medium Priority",
    checked: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Radio button for priority selection - medium priority option.",
      },
    },
  },
}

export const PriorityHigh: Story = {
  args: {
    id: "priority-high-radio",
    label: "High Priority",
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Radio button for priority selection - high priority option.",
      },
    },
  },
}

export const NotificationEmail: Story = {
  args: {
    id: "notification-email-radio",
    label: "Email notifications",
    checked: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Radio button for notification preference - email option.",
      },
    },
  },
}

export const NotificationSMS: Story = {
  args: {
    id: "notification-sms-radio",
    label: "SMS notifications",
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Radio button for notification preference - SMS option.",
      },
    },
  },
}

export const NotificationPush: Story = {
  args: {
    id: "notification-push-radio",
    label: "Push notifications",
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Radio button for notification preference - push notification option.",
      },
    },
  },
}

export const ExperienceBeginner: Story = {
  args: {
    id: "experience-beginner-radio",
    label: "Beginner (0-1 years)",
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Radio button for experience level - beginner option with years range.",
      },
    },
  },
}

export const ExperienceIntermediate: Story = {
  args: {
    id: "experience-intermediate-radio",
    label: "Intermediate (2-5 years)",
    checked: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Radio button for experience level - intermediate option with years range.",
      },
    },
  },
}

export const ExperienceAdvanced: Story = {
  args: {
    id: "experience-advanced-radio",
    label: "Advanced (5+ years)",
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Radio button for experience level - advanced option with years range.",
      },
    },
  },
}

export const ContactPreferencePhone: Story = {
  args: {
    id: "contact-phone-radio",
    label: "Phone call",
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Radio button for contact preference - phone call option.",
      },
    },
  },
}

export const ContactPreferenceEmail: Story = {
  args: {
    id: "contact-email-radio",
    label: "Email",
    checked: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Radio button for contact preference - email option.",
      },
    },
  },
}

export const SizeSmall: Story = {
  args: {
    id: "size-small-radio",
    label: "Small (S)",
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Radio button for size selection - small option.",
      },
    },
  },
}

export const SizeMedium: Story = {
  args: {
    id: "size-medium-radio",
    label: "Medium (M)",
    checked: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Radio button for size selection - medium option.",
      },
    },
  },
}

export const SizeLarge: Story = {
  args: {
    id: "size-large-radio",
    label: "Large (L)",
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Radio button for size selection - large option.",
      },
    },
  },
}