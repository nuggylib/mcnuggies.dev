import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import BlogFeed from "./blog-feed"
import sidebarReducer from "../redux/sidebarSlice"

// Create a mock store for Storybook
const mockStore = configureStore({
  reducer: {
    nav: sidebarReducer,
  },
})

// Mock article data for stories
const mockArticles = [
  {
    title: "Getting Started with Next.js and TypeScript",
    slug: {
      current: "getting-started-nextjs-typescript",
    },
    summary: [
      {
        _key: "summary-1",
        _type: "block",
        style: "normal",
        markDefs: [],
        children: [
          {
            _key: "summary-child-1",
            _type: "span",
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
        _type: "block",
        style: "normal",
        markDefs: [],
        children: [
          {
            _key: "summary-child-2",
            _type: "span",
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
        _type: "block",
        style: "normal",
        markDefs: [],
        children: [
          {
            _key: "summary-child-3",
            _type: "span",
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
        _type: "block",
        style: "normal",
        markDefs: [],
        children: [
          {
            _key: "summary-child-4",
            _type: "span",
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
        _type: "block",
        style: "normal",
        markDefs: [],
        children: [
          {
            _key: "summary-child-5",
            _type: "span",
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

export const ReactOnlyArticles: Story = {
  args: {
    allArticles: mockArticles.filter(article =>
      article.categories.some(cat => cat.title === "React")
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Blog feed showing only React-related articles to demonstrate how category filtering would work.",
      },
    },
  },
}

export const MixedCategories: Story = {
  args: {
    allArticles: [
      ...mockArticles,
      {
        title: "Machine Learning Fundamentals",
        slug: {
          current: "machine-learning-fundamentals",
        },
        summary: [
          {
            _key: "summary-6",
            _type: "block",
            style: "normal",
            markDefs: [],
            children: [
              {
                _key: "summary-child-6",
                _type: "span",
                marks: [],
                text: "Dive into the basics of machine learning, including supervised and unsupervised learning, common algorithms, and practical applications in real-world scenarios.",
              },
            ],
          },
        ],
        publishDate: "2023-12-15T13:20:00Z",
        categories: [
          { title: "Machine Learning" },
          { title: "Data Science" },
          { title: "AI" },
        ],
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "Blog feed with articles spanning various categories including React, Python, CSS, and Machine Learning to show diverse content filtering.",
      },
    },
  },
}

export const LongTitles: Story = {
  args: {
    allArticles: [
      {
        title: "A Comprehensive Guide to Building Scalable Microservices Architecture with Node.js, Docker, and Kubernetes",
        slug: {
          current: "comprehensive-microservices-guide",
        },
        summary: [
          {
            _key: "summary-long",
            _type: "block",
            style: "normal",
            markDefs: [],
            children: [
              {
                _key: "summary-child-long",
                _type: "span",
                marks: [],
                text: "This extensive guide covers everything you need to know about building and deploying microservices architecture. From containerization with Docker to orchestration with Kubernetes, learn how to create systems that scale.",
              },
            ],
          },
        ],
        publishDate: "2024-01-20T08:00:00Z",
        categories: [
          { title: "Node.js" },
          { title: "Microservices" },
          { title: "Docker" },
          { title: "Kubernetes" },
          { title: "DevOps" },
        ],
      },
      {
        title: "Advanced TypeScript Patterns: Utility Types, Conditional Types, and Template Literal Types Explained",
        slug: {
          current: "advanced-typescript-patterns",
        },
        summary: [
          {
            _key: "summary-advanced",
            _type: "block",
            style: "normal",
            markDefs: [],
            children: [
              {
                _key: "summary-child-advanced",
                _type: "span",
                marks: [],
                text: "Master advanced TypeScript features that will make your code more type-safe and expressive. Learn how to leverage utility types, conditional types, and template literals for complex scenarios.",
              },
            ],
          },
        ],
        publishDate: "2024-01-18T12:30:00Z",
        categories: [
          { title: "TypeScript" },
          { title: "Advanced" },
          { title: "Type Safety" },
        ],
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "Blog feed demonstrating how the layout handles articles with very long titles and multiple categories.",
      },
    },
  },
}