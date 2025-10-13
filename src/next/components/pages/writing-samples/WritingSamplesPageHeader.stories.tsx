import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { WritingSamplesPageHeader } from "./WritingSamplesPageHeader"

const meta: Meta<typeof WritingSamplesPageHeader> = {
  title: "Components/Pages/WritingSamples/WritingSamplesPageHeader",
  component: WritingSamplesPageHeader,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "The header section of the writing samples page. Displays the page title and a description linking to the creator's about page.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    creator: {
      control: "object",
      description: "The creator object containing name and slug information",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const mockCreator = {
  _id: "creator1",
  _type: "creator" as const,
  _createdAt: "2023-01-01",
  _updatedAt: "2023-01-01",
  _rev: "v1",
  name: "Alex Johnson",
  slug: {
    _type: "slug" as const,
    current: "alex-johnson",
  },
}

export const Default: Story = {
  args: {
    creator: mockCreator,
  },
  parameters: {
    docs: {
      description: {
        story: "Default display of the writing samples page header.",
      },
    },
  },
}

export const ShortName: Story = {
  args: {
    creator: {
      ...mockCreator,
      name: "Sam Lee",
      slug: {
        _type: "slug" as const,
        current: "sam-lee",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Header with a shorter creator name.",
      },
    },
  },
}

export const LongName: Story = {
  args: {
    creator: {
      ...mockCreator,
      name: "Dr. Alexander Christopher Thompson-Williams III",
      slug: {
        _type: "slug" as const,
        current: "alexander-thompson-williams",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Header with a very long creator name to test text wrapping and layout.",
      },
    },
  },
}
