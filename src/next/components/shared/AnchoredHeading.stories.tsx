import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { AnchoredHeading } from "./AnchoredHeading"

const meta: Meta<typeof AnchoredHeading> = {
  title: "Components/Shared/AnchoredHeading",
  component: AnchoredHeading,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "A heading component that automatically generates an anchor link for navigation. Features multiple heading variants (h2, h3, h4), automatic ID generation from the label using kebab-case, and a clickable anchor icon that copies the URL with the fragment to clipboard.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    component: {
      control: "text",
      description: "The content to display inside the heading element",
    },
    label: {
      control: "text",
      description: "The text used to generate the heading ID and for accessibility. Must be provided for the component to render.",
    },
    variant: {
      control: "select",
      options: ["h2", "h3", "h4"],
      description: "The HTML heading element type to render",
    },
  },
  args: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const H2Heading: Story = {
  args: {
    component: "This is an H2 Heading",
    label: "This is an H2 Heading",
    variant: "h2",
  },
  parameters: {
    docs: {
      description: {
        story: "Standard H2 heading with anchor link functionality.",
      },
    },
  },
}

export const H3Heading: Story = {
  args: {
    component: "This is an H3 Heading",
    label: "This is an H3 Heading",
    variant: "h3",
  },
  parameters: {
    docs: {
      description: {
        story: "Standard H3 heading with anchor link functionality.",
      },
    },
  },
}

export const H4Heading: Story = {
  args: {
    component: "This is an H4 Heading",
    label: "This is an H4 Heading",
    variant: "h4",
  },
  parameters: {
    docs: {
      description: {
        story: "Standard H4 heading (also the default variant) with anchor link functionality.",
      },
    },
  },
}

export const LongHeading: Story = {
  args: {
    component: "This is a Very Long Heading That Tests How the Component Handles Extended Text Content and Word Wrapping",
    label: "This is a Very Long Heading That Tests How the Component Handles Extended Text Content and Word Wrapping",
    variant: "h2",
  },
  parameters: {
    docs: {
      description: {
        story: "Heading with long text content to test layout and ID generation with lengthy labels.",
      },
    },
  },
}

export const HeadingWithSpecialCharacters: Story = {
  args: {
    component: "Heading with Special Characters: @#$%^&*()",
    label: "Heading with Special Characters: @#$%^&*()",
    variant: "h3",
  },
  parameters: {
    docs: {
      description: {
        story: "Heading containing special characters to test kebab-case ID generation and anchor functionality.",
      },
    },
  },
}

export const HeadingWithNumbers: Story = {
  args: {
    component: "Chapter 1: Getting Started with React 18",
    label: "Chapter 1: Getting Started with React 18",
    variant: "h2",
  },
  parameters: {
    docs: {
      description: {
        story: "Heading with numbers and mixed content to test ID generation.",
      },
    },
  },
}

export const StyledContent: Story = {
  args: {
    component: (
      <span>
        Heading with <strong>bold</strong> and <em>italic</em> text
      </span>
    ),
    label: "Heading with bold and italic text",
    variant: "h2",
  },
  parameters: {
    docs: {
      description: {
        story: "Heading with JSX content including styled elements. The label prop is used for ID generation.",
      },
    },
  },
}

export const ComplexContent: Story = {
  args: {
    component: (
      <span>
        API Reference{" "}
        <code style={{ backgroundColor: "#f1f3f4", padding: "2px 4px", borderRadius: "3px" }}>
          getData()
        </code>
      </span>
    ),
    label: "API Reference getData()",
    variant: "h3",
  },
  parameters: {
    docs: {
      description: {
        story: "Heading with complex JSX content including code elements and styling.",
      },
    },
  },
}

export const ShortHeading: Story = {
  args: {
    component: "FAQ",
    label: "FAQ",
    variant: "h2",
  },
  parameters: {
    docs: {
      description: {
        story: "Short heading to test minimal content and ID generation.",
      },
    },
  },
}

export const EmptyLabel: Story = {
  args: {
    component: "This heading won't render",
    label: "",
    variant: "h2",
  },
  parameters: {
    docs: {
      description: {
        story: "Component with empty label - should not render anything due to the null check in the component.",
      },
    },
  },
}

export const MultipleHeadings: Story = {
  render: () => (
    <div>
      <AnchoredHeading
        component="First Section"
        label="First Section"
        variant="h2"
      />
      <p style={{ margin: "20px 0" }}>Some content between headings...</p>
      <AnchoredHeading
        component="Subsection A"
        label="Subsection A"
        variant="h3"
      />
      <p style={{ margin: "20px 0" }}>More content...</p>
      <AnchoredHeading
        component="Subsection B"
        label="Subsection B"
        variant="h3"
      />
      <p style={{ margin: "20px 0" }}>Final content...</p>
      <AnchoredHeading
        component="Details"
        label="Details"
        variant="h4"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Multiple headings of different levels to demonstrate a typical document structure with anchor navigation.",
      },
    },
  },
}