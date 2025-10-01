import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import BlogFeed from "../pages/blog-feed"
import sidebarReducer from "../redux/sidebarSlice"
import { SanityBlock, SanityKeyed } from "sanity-codegen"

type ArticleResponse = {
  title: string
  slug: {
    current: string
  }
  summary: Array<SanityKeyed<SanityBlock>>
  publishDate: string
  categories: { title: string }[]
}

// Create a mock store for Storybook
const mockStore = configureStore({
  reducer: {
    nav: sidebarReducer,
  },
})

// Mock article data for stories
const mockArticles: ArticleResponse[] = [
  {
    title: "Getting Started with Next.js and TypeScript",
    slug: {
      current: "getting-started-nextjs-typescript",
    },
    summary: [
      {
        _key: "summary-1",
        _type: "block" as const,
        style: "normal",
        markDefs: [],
        children: [
          {
            _key: "summary-child-1",
            _type: "span" as const,
            marks: [],
            text: "Learn how to set up a modern web application using Next.js with TypeScript. This comprehensive guide covers project setup, configuration, and best practices for building scalable applications.",
          },
        ],
      },
    ],
    publishDate: "2024-01-15T10:30:00Z",
    categories: [
      { title: "React" },
      { title: "TypeScript" },
      { title: "Next.js" },
    ],
  },
  {
    title: "Understanding Redux Toolkit",
    slug: {
      current: "understanding-redux-toolkit",
    },
    summary: [
      {
        _key: "summary-2",
        _type: "block" as const,
        style: "normal",
        markDefs: [],
        children: [
          {
            _key: "summary-child-2",
            _type: "span" as const,
            marks: [],
            text: "Redux Toolkit simplifies state management in React applications. Discover how to use createSlice, configureStore, and other RTK features to write cleaner, more maintainable code.",
          },
        ],
      },
    ],
    publishDate: "2024-01-10T14:20:00Z",
    categories: [
      { title: "React" },
      { title: "Redux" },
      { title: "State Management" },
    ],
  },
  {
    title: "CSS Grid vs Flexbox: When to Use Which",
    slug: {
      current: "css-grid-vs-flexbox",
    },
    summary: [
      {
        _key: "summary-3",
        _type: "block" as const,
        style: "normal",
        markDefs: [],
        children: [
          {
            _key: "summary-child-3",
            _type: "span" as const,
            marks: [],
            text: "Both CSS Grid and Flexbox are powerful layout tools, but they serve different purposes. Learn when to use each one and how they can work together to create responsive designs.",
          },
        ],
      },
    ],
    publishDate: "2024-01-05T09:15:00Z",
    categories: [
      { title: "CSS" },
      { title: "Web Design" },
      { title: "Frontend" },
    ],
  },
  {
    title: "Building Accessible React Components",
    slug: {
      current: "building-accessible-react-components",
    },
    summary: [
      {
        _key: "summary-4",
        _type: "block" as const,
        style: "normal",
        markDefs: [],
        children: [
          {
            _key: "summary-child-4",
            _type: "span" as const,
            marks: [],
            text: "Accessibility is crucial for inclusive web applications. Learn how to build React components that work for everyone, including users with disabilities.",
          },
        ],
      },
    ],
    publishDate: "2023-12-28T16:45:00Z",
    categories: [
      { title: "React" },
      { title: "Accessibility" },
      { title: "UX" },
    ],
  },
  {
    title: "Python for Web Development",
    slug: {
      current: "python-web-development",
    },
    summary: [
      {
        _key: "summary-5",
        _type: "block" as const,
        style: "normal",
        markDefs: [],
        children: [
          {
            _key: "summary-child-5",
            _type: "span" as const,
            marks: [],
            text: "Explore Python's ecosystem for web development, from Django and Flask to FastAPI. Learn which framework suits your project needs and how to get started.",
          },
        ],
      },
    ],
    publishDate: "2023-12-20T11:30:00Z",
    categories: [
      { title: "Python" },
      { title: "Backend" },
      { title: "Web Development" },
    ],
  },
]

const meta: Meta<typeof BlogFeed> = {
  title: "Pages/BlogFeed",
  component: BlogFeed,
  decorators: [
    (Story) => (
      <Provider store={mockStore}>
        <div style={{ minHeight: "100vh" }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
  argTypes: {
    allArticles: {
      description: "Array of article data from Sanity CMS",
      control: { type: "object" },
    },
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "The Blog Feed page displays a searchable and filterable list of blog articles. Users can search by title and filter by categories using a modal interface. Each article shows its title, summary, and publication date.",
      },
    },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    allArticles: mockArticles,
  },
  parameters: {
    docs: {
      description: {
        story: "The default blog feed showing all articles with search and filter functionality available.",
      },
    },
  },
}

export const EmptyFeed: Story = {
  args: {
    allArticles: [],
  },
  parameters: {
    docs: {
      description: {
        story: "Blog feed with no articles - shows the NoMatchFound component.",
      },
    },
  },
}

export const SingleArticle: Story = {
  args: {
    allArticles: [mockArticles[0]],
  },
  parameters: {
    docs: {
      description: {
        story: "Blog feed with only one article to demonstrate the layout with minimal content.",
      },
    },
  },
}

export const TwoArticles: Story = {
  args: {
    allArticles: mockArticles.slice(0, 2),
  },
  parameters: {
    docs: {
      description: {
        story: "Blog feed with two articles showing how the layout handles a small number of posts.",
      },
    },
  },
}
