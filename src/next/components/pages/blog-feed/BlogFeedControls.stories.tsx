import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { fn } from "storybook/test"
import BlogFeedControls from "./BlogFeedControls"

const meta: Meta<typeof BlogFeedControls> = {
  title: "Components/Pages/BlogFeed/BlogFeedControls",
  component: BlogFeedControls,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Blog feed controls component that provides search input and filter button functionality for blog post filtering. Features a search input field and a filter button with Bootstrap filter icon.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    searchText: {
      control: "text",
      description: "The current search text value displayed in the input field",
    },
    searchTextHandler: {
      action: "searchTextChanged",
      description: "Handler function called when search text input changes",
    },
    filterButtonHandler: {
      action: "filterButtonClicked",
      description: "Handler function called when filter button is clicked",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    searchText: "",
    searchTextHandler: fn(),
    filterButtonHandler: fn(),
  },
}

export const WithSearchText: Story = {
  args: {
    searchText: "React tutorials",
    searchTextHandler: fn(),
    filterButtonHandler: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: "BlogFeedControls with some search text already entered.",
      },
    },
  },
}

export const LongSearchText: Story = {
  args: {
    searchText: "This is a very long search query that demonstrates how the input field handles longer text content",
    searchTextHandler: fn(),
    filterButtonHandler: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: "BlogFeedControls with a longer search query to test input field behavior.",
      },
    },
  },
}

export const Interactive: Story = {
  args: {
    searchText: "",
    searchTextHandler: fn(),
    filterButtonHandler: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive version where you can test typing in the search field and clicking the filter button.",
      },
    },
  },
}