import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import Projects from "../pages/projects"
import sidebarReducer from "../redux/sidebarSlice"
import { Project } from "../types/sanity"

// Create a mock store for Storybook
const mockStore = configureStore({
  reducer: {
    nav: sidebarReducer,
  },
})

// Mock project data for stories
const mockProjects: Project[] = [
  {
    _type: "project",
    _id: "project-1",
    _createdAt: "2024-01-01T00:00:00Z",
    _rev: "rev-1",
    _updatedAt: "2024-01-01T00:00:00Z",
    title: "Personal Blog Site",
    slug: {
      _type: "slug",
      current: "personal-blog-site",
    },
    description: [
      {
        _key: "desc-1",
        _type: "block" as const,
        style: "normal",
        markDefs: [],
        children: [
          {
            _key: "desc-child-1",
            _type: "span" as const,
            marks: [],
            text: "A modern blog site built with Next.js, TypeScript, and Sanity CMS. Features responsive design, search functionality, and content management capabilities.",
          },
        ],
      },
    ],
    repoUrl: "https://github.com/example/blog-site",
  },
  {
    _type: "project",
    _id: "project-2",
    _createdAt: "2024-01-02T00:00:00Z",
    _rev: "rev-2",
    _updatedAt: "2024-01-02T00:00:00Z",
    title: "Task Management App",
    slug: {
      _type: "slug",
      current: "task-management-app",
    },
    description: [
      {
        _key: "desc-2",
        _type: "block" as const,
        style: "normal",
        markDefs: [],
        children: [
          {
            _key: "desc-child-2",
            _type: "span" as const,
            marks: [],
            text: "A full-stack task management application with real-time updates, user authentication, and collaborative features. Built with React, Node.js, and PostgreSQL.",
          },
        ],
      },
    ],
    repoUrl: "https://github.com/example/task-manager",
  },
  {
    _type: "project",
    _id: "project-3",
    _createdAt: "2024-01-03T00:00:00Z",
    _rev: "rev-3",
    _updatedAt: "2024-01-03T00:00:00Z",
    title: "Weather Dashboard",
    slug: {
      _type: "slug",
      current: "weather-dashboard",
    },
    description: [
      {
        _key: "desc-3",
        _type: "block" as const,
        style: "normal",
        markDefs: [],
        children: [
          {
            _key: "desc-child-3",
            _type: "span" as const,
            marks: [],
            text: "An interactive weather dashboard that displays current conditions, forecasts, and historical data. Features data visualization with charts and maps using D3.js and Leaflet.",
          },
        ],
      },
    ],
    repoUrl: "https://github.com/example/weather-dashboard",
  },
  {
    _type: "project",
    _id: "project-4",
    _createdAt: "2024-01-04T00:00:00Z",
    _rev: "rev-4",
    _updatedAt: "2024-01-04T00:00:00Z",
    title: "E-commerce Platform",
    slug: {
      _type: "slug",
      current: "ecommerce-platform",
    },
    description: [
      {
        _key: "desc-4",
        _type: "block" as const,
        style: "normal",
        markDefs: [],
        children: [
          {
            _key: "desc-child-4",
            _type: "span" as const,
            marks: [],
            text: "A scalable e-commerce platform with shopping cart, payment processing, inventory management, and admin dashboard. Built with Next.js, Stripe, and MongoDB.",
          },
        ],
      },
    ],
    repoUrl: "https://github.com/example/ecommerce-platform",
  },
  {
    _type: "project",
    _id: "project-5",
    _createdAt: "2024-01-05T00:00:00Z",
    _rev: "rev-5",
    _updatedAt: "2024-01-05T00:00:00Z",
    title: "Machine Learning Model API",
    slug: {
      _type: "slug",
      current: "ml-model-api",
    },
    description: [
      {
        _key: "desc-5",
        _type: "block" as const,
        style: "normal",
        markDefs: [],
        children: [
          {
            _key: "desc-child-5",
            _type: "span" as const,
            marks: [],
            text: "RESTful API for serving machine learning models with automatic scaling, model versioning, and monitoring. Built with Python, FastAPI, Docker, and deployed on Kubernetes.",
          },
        ],
      },
    ],
    repoUrl: "https://github.com/example/ml-api",
  },
]

const meta: Meta<typeof Projects> = {
  title: "Pages/Projects",
  component: Projects,
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
    projects: {
      description: "Array of project data from Sanity CMS",
      control: { type: "object" },
    },
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "The Projects page displays a curated list of personal projects. Each project shows its title, description, and includes a link to the repository. The page is designed to showcase the creator's portfolio of work.",
      },
    },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    projects: mockProjects,
  },
  parameters: {
    docs: {
      description: {
        story: "The default projects page showing all projects with their descriptions and repository links.",
      },
    },
  },
}
