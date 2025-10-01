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
