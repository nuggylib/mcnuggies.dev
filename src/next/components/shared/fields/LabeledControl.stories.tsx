import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { fn } from "storybook/test"
import LabeledControl from "./LabeledControl"
import Radio from "../controls/Radio"
import Checkbox from "../controls/Checkbox"
import Input from "../controls/Input"

const meta: Meta<typeof LabeledControl> = {
  title: "Components/Shared/Fields/LabeledControl",
  component: LabeledControl,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "LabeledControl component that wraps form controls with a label positioned either to the left or right. Provides consistent layout for form fields with flexible label positioning. Accepts any React component as the control element.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "The label text to display alongside the control",
    },
    labelPos: {
      control: { type: "radio" },
      options: ["left", "right"],
      description: "Position of the label relative to the control (left or right)",
    },
    component: {
      description: "The form control component to render (React element)",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "Default Label",
    labelPos: "left",
    component: <Radio id="default-radio" checked={false} onClick={fn()} />,
  },
  parameters: {
    docs: {
      description: {
        story: "Default labeled control with label positioned to the left of a radio button.",
      },
    },
  },
}

export const LabelLeft: Story = {
  args: {
    label: "Label on Left",
    labelPos: "left",
    component: <Radio id="left-radio" checked={false} onClick={fn()} />,
  },
  parameters: {
    docs: {
      description: {
        story: "Label positioned to the left of the control element.",
      },
    },
  },
}

export const LabelRight: Story = {
  args: {
    label: "Label on Right",
    labelPos: "right",
    component: <Radio id="right-radio" checked={false} onClick={fn()} />,
  },
  parameters: {
    docs: {
      description: {
        story: "Label positioned to the right of the control element.",
      },
    },
  },
}

export const WithRadioButton: Story = {
  args: {
    label: "Select this option",
    labelPos: "right",
    component: <Radio id="radio-option" checked={true} onClick={fn()} />,
  },
  parameters: {
    docs: {
      description: {
        story: "LabeledControl wrapping a radio button with right-positioned label.",
      },
    },
  },
}

export const WithCheckbox: Story = {
  args: {
    label: "Enable notifications",
    labelPos: "right",
    component: <Checkbox id="checkbox-option" checked={true} onClick={fn()} />,
  },
  parameters: {
    docs: {
      description: {
        story: "LabeledControl wrapping a checkbox with right-positioned label.",
      },
    },
  },
}

export const WithInputField: Story = {
  args: {
    label: "Email Address:",
    labelPos: "left",
    component: <Input placeholder="Enter your email" ariaLabel="Email input" ariaDescribedBy="email-help" />,
  },
  parameters: {
    docs: {
      description: {
        story: "LabeledControl wrapping an input field with left-positioned label.",
      },
    },
  },
}

export const WithInputPreSegment: Story = {
  args: {
    label: "Username:",
    labelPos: "left",
    component: <Input preSegment="@" placeholder="username" ariaLabel="Username input" ariaDescribedBy="username-help" />,
  },
  parameters: {
    docs: {
      description: {
        story: "LabeledControl with input field that has a pre-segment addon.",
      },
    },
  },
}

export const WithInputPostSegment: Story = {
  args: {
    label: "Website:",
    labelPos: "left",
    component: <Input postSegment=".com" placeholder="example" ariaLabel="Website input" ariaDescribedBy="website-help" />,
  },
  parameters: {
    docs: {
      description: {
        story: "LabeledControl with input field that has a post-segment addon.",
      },
    },
  },
}

export const WithCurrencyInput: Story = {
  args: {
    label: "Price:",
    labelPos: "left",
    component: <Input preSegment="$" postSegment=".00" placeholder="0" ariaLabel="Price input" ariaDescribedBy="price-help" />,
  },
  parameters: {
    docs: {
      description: {
        story: "LabeledControl with currency input field featuring both pre and post segments.",
      },
    },
  },
}

export const LongLabel: Story = {
  args: {
    label: "This is a very long label that demonstrates how the labeled control component handles longer text content and potential text wrapping",
    labelPos: "left",
    component: <Radio id="long-label-radio" checked={false} onClick={fn()} />,
  },
  parameters: {
    docs: {
      description: {
        story: "LabeledControl with a long label to test text wrapping and layout behavior.",
      },
    },
  },
}

export const ShortLabel: Story = {
  args: {
    label: "OK",
    labelPos: "right",
    component: <Checkbox id="short-label-checkbox" checked={false} onClick={fn()} />,
  },
  parameters: {
    docs: {
      description: {
        story: "LabeledControl with a very short label for compact layouts.",
      },
    },
  },
}

export const TermsAcceptance: Story = {
  args: {
    label: "I accept the terms and conditions",
    labelPos: "right",
    component: <Checkbox id="terms-checkbox" checked={false} onClick={fn()} />,
  },
  parameters: {
    docs: {
      description: {
        story: "Common use case for terms acceptance with checkbox and right-positioned label.",
      },
    },
  },
}

export const NewsletterSubscription: Story = {
  args: {
    label: "Subscribe to newsletter",
    labelPos: "right",
    component: <Checkbox id="newsletter-checkbox" checked={true} onClick={fn()} />,
  },
  parameters: {
    docs: {
      description: {
        story: "Newsletter subscription checkbox with right-positioned label.",
      },
    },
  },
}

export const GenderSelection: Story = {
  args: {
    label: "Female",
    labelPos: "right",
    component: <Radio id="gender-female" checked={true} onClick={fn()} />,
  },
  parameters: {
    docs: {
      description: {
        story: "Gender selection radio button with right-positioned label.",
      },
    },
  },
}

export const PaymentMethod: Story = {
  args: {
    label: "Credit Card",
    labelPos: "right",
    component: <Radio id="payment-credit" checked={false} onClick={fn()} />,
  },
  parameters: {
    docs: {
      description: {
        story: "Payment method selection with radio button and right-positioned label.",
      },
    },
  },
}

export const FormFieldRequired: Story = {
  args: {
    label: "First Name: *",
    labelPos: "left",
    component: <Input placeholder="Enter your first name" ariaLabel="First name input" ariaDescribedBy="firstname-help" />,
  },
  parameters: {
    docs: {
      description: {
        story: "Required form field with asterisk in label and left positioning.",
      },
    },
  },
}

export const FormFieldOptional: Story = {
  args: {
    label: "Middle Name (optional):",
    labelPos: "left",
    component: <Input placeholder="Enter your middle name" ariaLabel="Middle name input" ariaDescribedBy="middlename-help" />,
  },
  parameters: {
    docs: {
      description: {
        story: "Optional form field with indication in label and left positioning.",
      },
    },
  },
}

export const SearchField: Story = {
  args: {
    label: "Search:",
    labelPos: "left",
    component: <Input preSegment="🔍" placeholder="Search..." ariaLabel="Search input" ariaDescribedBy="search-help" />,
  },
  parameters: {
    docs: {
      description: {
        story: "Search field with icon pre-segment and left-positioned label.",
      },
    },
  },
}

export const PhoneNumber: Story = {
  args: {
    label: "Phone Number:",
    labelPos: "left",
    component: <Input preSegment="+1" placeholder="(555) 123-4567" ariaLabel="Phone number input" ariaDescribedBy="phone-help" />,
  },
  parameters: {
    docs: {
      description: {
        story: "Phone number input with country code pre-segment and left-positioned label.",
      },
    },
  },
}

export const PercentageField: Story = {
  args: {
    label: "Discount Rate:",
    labelPos: "left",
    component: <Input postSegment="%" placeholder="Enter percentage" ariaLabel="Percentage input" ariaDescribedBy="percentage-help" />,
  },
  parameters: {
    docs: {
      description: {
        story: "Percentage input field with percent symbol post-segment and left-positioned label.",
      },
    },
  },
}

export const WeightMeasurement: Story = {
  args: {
    label: "Weight:",
    labelPos: "left",
    component: <Input postSegment="kg" placeholder="Enter weight" ariaLabel="Weight input" ariaDescribedBy="weight-help" />,
  },
  parameters: {
    docs: {
      description: {
        story: "Weight measurement input with unit post-segment and left-positioned label.",
      },
    },
  },
}

export const EnabledOption: Story = {
  args: {
    label: "Enable feature",
    labelPos: "right",
    component: <Checkbox id="enabled-checkbox" checked={true} onClick={fn()} />,
  },
  parameters: {
    docs: {
      description: {
        story: "Feature toggle checkbox with right-positioned label in enabled state.",
      },
    },
  },
}

export const DisabledOption: Story = {
  args: {
    label: "Disable feature",
    labelPos: "right",
    component: <Checkbox id="disabled-checkbox" checked={false} onClick={fn()} />,
  },
  parameters: {
    docs: {
      description: {
        story: "Feature toggle checkbox with right-positioned label in disabled state.",
      },
    },
  },
}

export const PrioritySelection: Story = {
  args: {
    label: "High Priority",
    labelPos: "right",
    component: <Radio id="priority-high" checked={true} onClick={fn()} />,
  },
  parameters: {
    docs: {
      description: {
        story: "Priority selection radio button with right-positioned label.",
      },
    },
  },
}

export const NotificationPreference: Story = {
  args: {
    label: "Email notifications",
    labelPos: "right",
    component: <Radio id="notification-email" checked={false} onClick={fn()} />,
  },
  parameters: {
    docs: {
      description: {
        story: "Notification preference radio button with right-positioned label.",
      },
    },
  },
}

export const SettingsToggle: Story = {
  args: {
    label: "Dark mode",
    labelPos: "right",
    component: <Checkbox id="dark-mode-checkbox" checked={true} onClick={fn()} />,
  },
  parameters: {
    docs: {
      description: {
        story: "Settings toggle checkbox for dark mode with right-positioned label.",
      },
    },
  },
}

export const CompactLayout: Story = {
  args: {
    label: "Yes",
    labelPos: "right",
    component: <Radio id="compact-radio" checked={false} onClick={fn()} />,
  },
  parameters: {
    docs: {
      description: {
        story: "Compact layout with minimal label text and right positioning.",
      },
    },
  },
}

export const FormValidation: Story = {
  args: {
    label: "Email Address: *",
    labelPos: "left",
    component: <Input preSegment="@" placeholder="user@example.com" ariaLabel="Email validation input" ariaDescribedBy="email-validation-help" />,
  },
  parameters: {
    docs: {
      description: {
        story: "Form validation example with required email field and pre-segment.",
      },
    },
  },
}

export const MultipleChoiceAnswer: Story = {
  args: {
    label: "Option A: This is the correct answer",
    labelPos: "right",
    component: <Radio id="choice-a" checked={true} onClick={fn()} />,
  },
  parameters: {
    docs: {
      description: {
        story: "Multiple choice answer selection with descriptive label and right positioning.",
      },
    },
  },
}

export const AgreementCheckbox: Story = {
  args: {
    label: "I agree to receive marketing communications",
    labelPos: "right",
    component: <Checkbox id="agreement-checkbox" checked={false} onClick={fn()} />,
  },
  parameters: {
    docs: {
      description: {
        story: "Agreement checkbox with detailed label text and right positioning.",
      },
    },
  },
}

export const UserPreference: Story = {
  args: {
    label: "Remember my preferences",
    labelPos: "right",
    component: <Checkbox id="preferences-checkbox" checked={true} onClick={fn()} />,
  },
  parameters: {
    docs: {
      description: {
        story: "User preference checkbox with right-positioned label for settings retention.",
      },
    },
  },
}