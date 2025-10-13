import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { SamplesList } from "./SamplesList"

const meta: Meta<typeof SamplesList> = {
  title: "Components/Pages/WritingSamples/SamplesList",
  component: SamplesList,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Displays a list of writing sample links. Each sample is rendered as an external link that opens in a new tab.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    samples: {
      control: "object",
      description: "Array of writing samples to display",
    },
    groupIndex: {
      control: "number",
      description: "Index of the employer group - used for generating unique keys",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const mockSamples = [
  {
    _id: "sample1",
    _type: "writingSample" as const,
    _createdAt: "2024-01-15",
    _updatedAt: "2024-01-15",
    _rev: "v1",
    title: "Building Scalable Microservices with Kubernetes",
    url: "https://example.com/article-1",
    tag: "Technical Guide",
    description: [
      {
        _key: "desc1",
        _type: "block" as const,
        children: [
          {
            _key: "text1",
            _type: "span" as const,
            marks: [],
            text: "A comprehensive guide on building and deploying scalable microservices using Kubernetes orchestration.",
          },
        ],
        markDefs: [],
        style: "normal" as const,
      },
    ],
  },
  {
    _id: "sample2",
    _type: "writingSample" as const,
    _createdAt: "2024-02-10",
    _updatedAt: "2024-02-10",
    _rev: "v1",
    title: "Introduction to React Server Components",
    url: "https://example.com/article-2",
    tag: "Tutorial",
    description: [
      {
        _key: "desc2",
        _type: "block" as const,
        children: [
          {
            _key: "text2",
            _type: "span" as const,
            marks: [],
            text: "Learn the fundamentals of React Server Components and how they revolutionize server-side rendering.",
          },
        ],
        markDefs: [],
        style: "normal" as const,
      },
    ],
  },
  {
    _id: "sample3",
    _type: "writingSample" as const,
    _createdAt: "2024-03-05",
    _updatedAt: "2024-03-05",
    _rev: "v1",
    title: "Performance Optimization in Modern Web Applications",
    url: "https://example.com/article-3",
    tag: "Best Practices",
    description: [
      {
        _key: "desc3",
        _type: "block" as const,
        children: [
          {
            _key: "text3",
            _type: "span" as const,
            marks: [],
            text: "Discover proven strategies and techniques to optimize the performance of your web applications.",
          },
        ],
        markDefs: [],
        style: "normal" as const,
      },
    ],
  },
]

export const Default: Story = {
  args: {
    samples: mockSamples,
    groupIndex: 0,
  },
  parameters: {
    docs: {
      description: {
        story: "Default display of multiple writing samples in a list format.",
      },
    },
  },
}

export const SingleSample: Story = {
  args: {
    samples: [mockSamples[0]],
    groupIndex: 0,
  },
  parameters: {
    docs: {
      description: {
        story: "Display of a single writing sample.",
      },
    },
  },
}

export const ManySamples: Story = {
  args: {
    samples: [
      ...mockSamples,
      {
        _id: "sample4",
        _type: "writingSample" as const,
        _createdAt: "2024-04-20",
        _updatedAt: "2024-04-20",
        _rev: "v1",
        title: "GraphQL vs REST: A Comprehensive Comparison",
        url: "https://example.com/article-4",
        tag: "Comparison",
        description: [
          {
            _key: "desc4",
            _type: "block" as const,
            children: [
              {
                _key: "text4",
                _type: "span" as const,
                marks: [],
                text: "An in-depth comparison of GraphQL and REST API architectures, including use cases and trade-offs.",
              },
            ],
            markDefs: [],
            style: "normal" as const,
          },
        ],
      },
      {
        _id: "sample5",
        _type: "writingSample" as const,
        _createdAt: "2024-05-12",
        _updatedAt: "2024-05-12",
        _rev: "v1",
        title: "Advanced TypeScript Patterns for Enterprise Applications",
        url: "https://example.com/article-5",
        tag: "Advanced Guide",
        description: [
          {
            _key: "desc5",
            _type: "block" as const,
            children: [
              {
                _key: "text5",
                _type: "span" as const,
                marks: [],
                text: "Explore advanced TypeScript patterns and techniques for building robust enterprise-level applications.",
              },
            ],
            markDefs: [],
            style: "normal" as const,
          },
        ],
      },
      {
        _id: "sample6",
        _type: "writingSample" as const,
        _createdAt: "2024-06-08",
        _updatedAt: "2024-06-08",
        _rev: "v1",
        title: "Best Practices for API Security in 2024",
        url: "https://example.com/article-6",
        tag: "Security",
        description: [
          {
            _key: "desc6",
            _type: "block" as const,
            children: [
              {
                _key: "text6",
                _type: "span" as const,
                marks: [],
                text: "Essential security practices and strategies for protecting your APIs against modern threats.",
              },
            ],
            markDefs: [],
            style: "normal" as const,
          },
        ],
      },
    ],
    groupIndex: 0,
  },
  parameters: {
    docs: {
      description: {
        story: "Display with a larger number of samples to test layout with more content.",
      },
    },
  },
}
