import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { SearchModal } from "./SearchModal"
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
    type: "project",
    title: "Task Manager App",
    description: "A full-stack task management application with real-time updates and collaborative features.",
    slug: "task-manager-app"
  },
  {
    id: "5",
    type: "creator",
    title: "John Doe",
    description: "Full Stack Developer specializing in React, Node.js, and cloud architecture.",
    slug: "john-doe"
  }
]

const meta: Meta<typeof SearchModal> = {
  title: "Layout/SearchModal",
  component: SearchModal,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "Controls whether the modal is open or closed"
    },
    initialQuery: {
      control: "text",
      description: "Initial search query to populate the search input"
    }
  }
}

export default meta
type Story = StoryObj<typeof SearchModal>

export const Closed: Story = {
  args: {
    isOpen: false,
    onClose: () => console.log("Modal closed"),
    searchIndex: mockSearchIndex
  }
}

export const OpenEmpty: Story = {
  args: {
    isOpen: true,
    onClose: () => console.log("Modal closed"),
    searchIndex: mockSearchIndex,
    initialQuery: ""
  }
}

export const OpenWithQuery: Story = {
  args: {
    isOpen: true,
    onClose: () => console.log("Modal closed"),
    searchIndex: mockSearchIndex,
    initialQuery: "React"
  }
}

export const OpenWithNoResults: Story = {
  args: {
    isOpen: true,
    onClose: () => console.log("Modal closed"),
    searchIndex: mockSearchIndex,
    initialQuery: "Xyz123NotFound"
  }
}

export const OpenWithTypescriptQuery: Story = {
  args: {
    isOpen: true,
    onClose: () => console.log("Modal closed"),
    searchIndex: mockSearchIndex,
    initialQuery: "TypeScript"
  }
}

export const EmptySearchIndex: Story = {
  args: {
    isOpen: true,
    onClose: () => console.log("Modal closed"),
    searchIndex: [],
    initialQuery: "React"
  }
}
