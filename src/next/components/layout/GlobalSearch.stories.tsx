import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import GlobalSearch from "./GlobalSearch"
import { SearchIndexItem } from "../../types/search"

const mockSearchIndex: SearchIndexItem[] = [
  {
    id: "1",
    type: "article",
    title: "Getting Started with React Hooks",
    description: "Learn how to use React Hooks to manage state and side effects in your functional components.",
    slug: "getting-started-with-react-hooks",
    categories: ["React", "JavaScript", "Tutorial"],
    publishDate: "2024-01-15"
  },
  {
    id: "2",
    type: "article",
    title: "Understanding TypeScript Generics",
    description: "A comprehensive guide to using generics in TypeScript to write more flexible and reusable code.",
    slug: "understanding-typescript-generics",
    categories: ["TypeScript", "Programming"],
    publishDate: "2024-02-20"
  },
  {
    id: "3",
    type: "project",
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js, TypeScript, and Sanity CMS.",
    slug: "portfolio-website"
  },
  {
    id: "4",
    type: "creator",
    title: "John Doe",
    description: "Full Stack Developer specializing in React, Node.js, and cloud architecture.",
    slug: "john-doe"
  }
]

const meta: Meta<typeof GlobalSearch> = {
  title: "Components/Layout/GlobalSearch",
  component: GlobalSearch,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Global search component that opens a modal for searching across articles, projects, and creators.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    searchIndex: {
      description: "Array of searchable items from across the site"
    }
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    searchIndex: mockSearchIndex
  },
  parameters: {
    docs: {
      description: {
        story: "The default global search field. Click the input to open the search modal.",
      },
    },
  },
}

export const EmptyIndex: Story = {
  args: {
    searchIndex: []
  },
  parameters: {
    docs: {
      description: {
        story: "Global search with an empty search index.",
      },
    },
  },
}
