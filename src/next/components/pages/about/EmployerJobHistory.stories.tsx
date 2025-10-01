import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { EmployerJobHistory } from "./EmployerJobHistory"

const meta: Meta<typeof EmployerJobHistory> = {
  title: "Components/Pages/About/EmployerJobHistory",
  component: EmployerJobHistory,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A component that displays a list of job titles and their associated responsibilities for a specific employer. Jobs are displayed in reverse chronological order with the most recent job first.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    employerName: {
      control: "text",
      description: "The name of the employer - used for generating unique keys",
    },
    jobs: {
      control: "object",
      description: "Array of job titles with start/end dates and responsibilities",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const singleJobMock = [
  {
    _id: "job1",
    _createdAt: "1234",
    _rev: "",
    _updatedAt: "1234",
    _type: "jobTitle" as const,
    title: "Senior Software Engineer",
    startDate: "2022-01-15",
    endDate: "2023-12-31",
    currentJobTitle: false,
    responsibilities: [
      "Led development of core platform features",
      "Mentored junior developers",
      "Architected scalable microservices solutions",
      "Collaborated with product and design teams",
    ],
  },
]

const multipleJobsMock = [
  {
    _id: "job1",
    _createdAt: "1234",
    _rev: "",
    _updatedAt: "1234",
    _type: "jobTitle" as const,
    title: "Principal Software Engineer",
    startDate: "2023-01-01",
    currentJobTitle: true,
    responsibilities: [
      "Lead technical architecture decisions",
      "Drive engineering best practices across teams",
      "Collaborate with executive leadership on technical strategy",
      "Mentor senior engineers and establish career development paths",
    ],
  },
  {
    _id: "job2",
    _createdAt: "1234",
    _rev: "",
    _updatedAt: "1234",
    _type: "jobTitle" as const,
    title: "Senior Software Engineer",
    startDate: "2020-06-01",
    endDate: "2022-12-31",
    currentJobTitle: false,
    responsibilities: [
      "Led development of core platform features",
      "Mentored junior developers",
      "Architected scalable microservices solutions",
      "Implemented automated testing strategies",
    ],
  },
  {
    _id: "job3",
    _createdAt: "1234",
    _rev: "",
    _updatedAt: "1234",
    _type: "jobTitle" as const,
    title: "Software Engineer",
    startDate: "2018-03-01",
    endDate: "2020-05-31",
    currentJobTitle: false,
    responsibilities: [
      "Developed frontend React applications",
      "Implemented REST API endpoints",
      "Collaborated with design and product teams",
      "Participated in code reviews and testing",
    ],
  },
]

export const SingleJob: Story = {
  args: {
    employerName: "TechCorp Inc.",
    jobs: singleJobMock,
  },
  parameters: {
    docs: {
      description: {
        story: "Display of a single job title with responsibilities at an employer.",
      },
    },
  },
}

export const MultipleJobs: Story = {
  args: {
    employerName: "InnovateTech Solutions",
    jobs: multipleJobsMock,
  },
  parameters: {
    docs: {
      description: {
        story: "Shows career progression through multiple job titles at the same employer. Jobs are displayed in reverse chronological order with the current position first.",
      },
    },
  },
}

export const CurrentJob: Story = {
  args: {
    employerName: "Current Company",
    jobs: [
      {
        _id: "job1",
        _createdAt: "1234",
        _rev: "",
        _updatedAt: "1234",
        _type: "jobTitle" as const,
        title: "Staff Software Engineer",
        startDate: "2024-01-15",
        currentJobTitle: true,
        responsibilities: [
          "Lead cross-functional engineering initiatives",
          "Drive technical standards and architecture decisions",
          "Collaborate with leadership on engineering strategy",
          "Mentor and develop engineering talent",
        ],
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "Example of a current job position with no end date (shows 'Present').",
      },
    },
  },
}

export const LongResponsibilitiesList: Story = {
  args: {
    employerName: "Enterprise Corp",
    jobs: [
      {
        _id: "job1",
        _createdAt: "1234",
        _rev: "",
        _updatedAt: "1234",
        _type: "jobTitle" as const,
        title: "Engineering Manager",
        startDate: "2020-01-01",
        endDate: "2023-12-31",
        currentJobTitle: false,
        responsibilities: [
          "Managed a team of 15 software engineers across multiple product areas",
          "Drove quarterly planning, roadmap execution, and cross-team coordination",
          "Established engineering culture, processes, and best practices",
          "Collaborated with product management on feature prioritization",
          "Implemented performance review processes and career development frameworks",
          "Led hiring initiatives and grew the team from 8 to 15 engineers",
          "Coordinated with DevOps on infrastructure and deployment strategies",
          "Represented engineering in executive leadership meetings",
          "Managed budget and resource allocation for engineering projects",
          "Mentored senior engineers and facilitated technical decision making",
        ],
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "Example with a comprehensive list of responsibilities to test layout with longer content.",
      },
    },
  },
}
