import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { SearchModal } from "./SearchModal"
import { SearchIndexItem } from "../../types/search"
import searchReducer, { openSearchModal, setSearchQuery } from "../../redux/searchSlice"

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

const createMockStore = (isOpen: boolean, query: string) => {
  const store = configureStore({
    reducer: {
      search: searchReducer
    }
  })

  if (isOpen) {
    store.dispatch(openSearchModal())
  }
  if (query) {
    store.dispatch(setSearchQuery(query))
  }

  return store
}

const meta: Meta<typeof SearchModal> = {
  title: "Modal/SearchModal",
  component: SearchModal,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof SearchModal>

export const Closed: Story = {
  args: {
    searchIndex: mockSearchIndex
  },
  decorators: [
    (Story) => (
      <Provider store={createMockStore(false, "")}>
        <Story />
      </Provider>
    )
  ]
}

export const OpenEmpty: Story = {
  args: {
    searchIndex: mockSearchIndex,
  },
  decorators: [
    (Story) => (
      <Provider store={createMockStore(true, "")}>
        <Story />
      </Provider>
    )
  ]
}

export const OpenWithQuery: Story = {
  args: {
    searchIndex: mockSearchIndex,
  },
  decorators: [
    (Story) => (
      <Provider store={createMockStore(true, "React")}>
        <Story />
      </Provider>
    )
  ]
}

export const OpenWithNoResults: Story = {
  args: {
    searchIndex: mockSearchIndex,
  },
  decorators: [
    (Story) => (
      <Provider store={createMockStore(true, "Xyz123NotFound")}>
        <Story />
      </Provider>
    )
  ]
}

export const OpenWithTypescriptQuery: Story = {
  args: {
    searchIndex: mockSearchIndex,
  },
  decorators: [
    (Story) => (
      <Provider store={createMockStore(true, "TypeScript")}>
        <Story />
      </Provider>
    )
  ]
}

export const EmptySearchIndex: Story = {
  args: {
    searchIndex: [],
  },
  decorators: [
    (Story) => (
      <Provider store={createMockStore(true, "React")}>
        <Story />
      </Provider>
    )
  ]
}
