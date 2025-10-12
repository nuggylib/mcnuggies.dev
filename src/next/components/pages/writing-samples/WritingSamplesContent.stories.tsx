import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { WritingSamplesContent } from "./WritingSamplesContent"

const meta: Meta<typeof WritingSamplesContent> = {
  title: "Components/Pages/WritingSamples/WritingSamplesContent",
  component: WritingSamplesContent,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "The main content component for the writing samples page. Displays a header and organizes writing samples by employer, grouping samples and showing employer logos where available.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    creator: {
      control: "object",
      description: "The creator object containing name and slug information",
    },
    writingSamples: {
      control: "object",
      description: "Array of writing samples with employer information",
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

const mockSamplesMultipleEmployers = [
  {
    _id: "sample1",
    _type: "writingSample" as const,
    _createdAt: "2024-01-15",
    _updatedAt: "2024-01-15",
    _rev: "v1",
    title: "Building Scalable Microservices with Kubernetes",
    url: "https://example.com/article-1",
    employerName: "TechCorp Inc.",
    employerImageUrl: "https://via.placeholder.com/100x100?text=TechCorp",
  },
  {
    _id: "sample2",
    _type: "writingSample" as const,
    _createdAt: "2024-02-10",
    _updatedAt: "2024-02-10",
    _rev: "v1",
    title: "Introduction to React Server Components",
    url: "https://example.com/article-2",
    employerName: "TechCorp Inc.",
    employerImageUrl: "https://via.placeholder.com/100x100?text=TechCorp",
  },
  {
    _id: "sample3",
    _type: "writingSample" as const,
    _createdAt: "2024-03-05",
    _updatedAt: "2024-03-05",
    _rev: "v1",
    title: "Performance Optimization in Modern Web Applications",
    url: "https://example.com/article-3",
    employerName: "InnovateTech Solutions",
    employerImageUrl: "https://via.placeholder.com/100x100?text=InnovateTech",
  },
  {
    _id: "sample4",
    _type: "writingSample" as const,
    _createdAt: "2024-04-20",
    _updatedAt: "2024-04-20",
    _rev: "v1",
    title: "GraphQL vs REST: A Comprehensive Comparison",
    url: "https://example.com/article-4",
    employerName: "InnovateTech Solutions",
    employerImageUrl: "https://via.placeholder.com/100x100?text=InnovateTech",
  },
  {
    _id: "sample5",
    _type: "writingSample" as const,
    _createdAt: "2024-05-12",
    _updatedAt: "2024-05-12",
    _rev: "v1",
    title: "Advanced TypeScript Patterns for Enterprise Applications",
    url: "https://example.com/article-5",
    employerName: "DevHub LLC",
  },
]

const mockSamplesSingleEmployer = [
  {
    _id: "sample1",
    _type: "writingSample" as const,
    _createdAt: "2024-01-15",
    _updatedAt: "2024-01-15",
    _rev: "v1",
    title: "Building Scalable Microservices with Kubernetes",
    url: "https://example.com/article-1",
    employerName: "TechCorp Inc.",
    employerImageUrl: "https://via.placeholder.com/100x100?text=TechCorp",
  },
  {
    _id: "sample2",
    _type: "writingSample" as const,
    _createdAt: "2024-02-10",
    _updatedAt: "2024-02-10",
    _rev: "v1",
    title: "Introduction to React Server Components",
    url: "https://example.com/article-2",
    employerName: "TechCorp Inc.",
    employerImageUrl: "https://via.placeholder.com/100x100?text=TechCorp",
  },
]

export const MultipleEmployers: Story = {
  args: {
    creator: mockCreator,
    writingSamples: mockSamplesMultipleEmployers,
  },
  parameters: {
    docs: {
      description: {
        story: "Display with writing samples from multiple employers. Samples are automatically grouped by employer.",
      },
    },
  },
}

export const SingleEmployer: Story = {
  args: {
    creator: mockCreator,
    writingSamples: mockSamplesSingleEmployer,
  },
  parameters: {
    docs: {
      description: {
        story: "Display with writing samples from a single employer.",
      },
    },
  },
}

export const NoSamples: Story = {
  args: {
    creator: mockCreator,
    writingSamples: [],
  },
  parameters: {
    docs: {
      description: {
        story: "Display when there are no writing samples available.",
      },
    },
  },
}

export const UnknownEmployer: Story = {
  args: {
    creator: mockCreator,
    writingSamples: [
      {
        _id: "sample1",
        _type: "writingSample" as const,
        _createdAt: "2024-01-15",
        _updatedAt: "2024-01-15",
        _rev: "v1",
        title: "Freelance Writing Sample",
        url: "https://example.com/freelance-article",
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "Display with a writing sample that has no employer information. Shows as 'Unknown Employer'.",
      },
    },
  },
}
