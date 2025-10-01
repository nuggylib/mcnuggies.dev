import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { NoMatchFound } from "./NoMatchFound"

const meta: Meta<typeof NoMatchFound> = {
  title: "Components/Pages/BlogFeed/NoMatchFound",
  component: NoMatchFound,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "No match found component that displays when no blog posts match the current search query. Features a sad face icon and message with optional query display.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    query: {
      control: "text",
      description: "The search query that returned no results (optional)",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "Default state with no search query provided.",
      },
    },
  },
}

export const WithQuery: Story = {
  args: {
    query: "React tutorials",
  },
  parameters: {
    docs: {
      description: {
        story: "No match found with a specific search query displayed.",
      },
    },
  },
}

export const WithLongQuery: Story = {
  args: {
    query: "This is a very long search query that demonstrates how the component handles longer text content",
  },
  parameters: {
    docs: {
      description: {
        story: "No match found with a longer search query to test text wrapping and display.",
      },
    },
  },
}

export const WithEmptyQuery: Story = {
  args: {
    query: "",
  },
  parameters: {
    docs: {
      description: {
        story: "No match found with an empty string query (behaves same as default).",
      },
    },
  },
}