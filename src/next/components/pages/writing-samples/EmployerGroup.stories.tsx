import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { EmployerGroup } from "./EmployerGroup"

const meta: Meta<typeof EmployerGroup> = {
  title: "Components/Pages/WritingSamples/EmployerGroup",
  component: EmployerGroup,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Displays a group of writing samples organized by employer. Shows the employer logo, name, and a list of associated writing samples.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    employerName: {
      control: "text",
      description: "The name of the employer",
    },
    employerImageUrl: {
      control: "text",
      description: "URL to the employer's logo image",
    },
    samples: {
      control: "object",
      description: "Array of writing samples for this employer",
    },
    groupIndex: {
      control: "number",
      description: "Index of this employer group - used for generating unique keys",
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
  },
  {
    _id: "sample2",
    _type: "writingSample" as const,
    _createdAt: "2024-02-10",
    _updatedAt: "2024-02-10",
    _rev: "v1",
    title: "Introduction to React Server Components",
    url: "https://example.com/article-2",
  },
  {
    _id: "sample3",
    _type: "writingSample" as const,
    _createdAt: "2024-03-05",
    _updatedAt: "2024-03-05",
    _rev: "v1",
    title: "Performance Optimization in Modern Web Applications",
    url: "https://example.com/article-3",
  },
]

export const WithLogo: Story = {
  args: {
    employerName: "TechCorp Inc.",
    employerImageUrl: "https://via.placeholder.com/100x100?text=TechCorp",
    samples: mockSamples,
    groupIndex: 0,
  },
  parameters: {
    docs: {
      description: {
        story: "Employer group with a logo image and multiple writing samples.",
      },
    },
  },
}

export const WithoutLogo: Story = {
  args: {
    employerName: "InnovateTech Solutions",
    samples: mockSamples,
    groupIndex: 0,
  },
  parameters: {
    docs: {
      description: {
        story: "Employer group without a logo image, showing only the name and samples.",
      },
    },
  },
}

export const SingleSample: Story = {
  args: {
    employerName: "StartupXYZ",
    employerImageUrl: "https://via.placeholder.com/100x100?text=StartupXYZ",
    samples: [mockSamples[0]],
    groupIndex: 0,
  },
  parameters: {
    docs: {
      description: {
        story: "Employer group with only a single writing sample.",
      },
    },
  },
}

export const LongEmployerName: Story = {
  args: {
    employerName: "International Software Development and Consulting Corporation Ltd.",
    employerImageUrl: "https://via.placeholder.com/100x100?text=ISDCC",
    samples: mockSamples.slice(0, 2),
    groupIndex: 0,
  },
  parameters: {
    docs: {
      description: {
        story: "Employer group with a very long company name to test text wrapping.",
      },
    },
  },
}
