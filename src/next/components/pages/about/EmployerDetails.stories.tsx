import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { EmployerDetails } from "./EmployerDetails"

const meta: Meta<typeof EmployerDetails> = {
  title: "Components/Pages/About/EmployerDetails",
  component: EmployerDetails,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A component that displays employer information including company logo, name, employment dates, and job history. Optionally links to the employer's homepage when clicked.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
      description: "The name of the employer/company",
    },
    startDate: {
      control: "text",
      description: "ISO date string for when employment started",
    },
    endDate: {
      control: "text",
      description: "ISO date string for when employment ended (optional for current employment)",
    },
    homePage: {
      control: "text",
      description: "URL to the employer's website (makes the component clickable)",
    },
    imageUrl: {
      control: "text",
      description: "URL to the employer's logo image",
    },
    jobs: {
      control: "object",
      description: "Array of job titles held at this employer",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const mockJobs = [
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
    ],
  },
  {
    _id: "job2",
    _createdAt: "1234",
    _rev: "",
    _updatedAt: "1234",
    _type: "jobTitle" as const,
    title: "Software Engineer",
    startDate: "2020-06-01",
    endDate: "2022-01-14",
    currentJobTitle: false,
    responsibilities: [
      "Developed frontend React applications",
      "Implemented REST API endpoints",
      "Collaborated with design and product teams",
    ],
  },
]

const currentJob = [
  {
    _id: "job3",
    _createdAt: "1234",
    _rev: "",
    _updatedAt: "1234",
    _type: "jobTitle" as const,
    title: "Principal Software Engineer",
    startDate: "2024-01-01",
    currentJobTitle: true,
    responsibilities: [
      "Lead technical architecture decisions",
      "Drive engineering best practices",
      "Collaborate with executive leadership on technical strategy",
    ],
  },
]

export const Default: Story = {
  args: {
    name: "TechCorp Inc.",
    startDate: "2020-06-01",
    endDate: "2023-12-31",
    homePage: "https://techcorp.com",
    imageUrl: "https://via.placeholder.com/48x48/4285F4/FFFFFF?text=TC",
    jobs: mockJobs,
  },
}

export const CurrentEmployer: Story = {
  args: {
    name: "InnovateTech",
    startDate: "2024-01-01",
    homePage: "https://innovatetech.com",
    imageUrl: "https://via.placeholder.com/48x48/34A853/FFFFFF?text=IT",
    jobs: currentJob,
  },
  parameters: {
    docs: {
      description: {
        story: "Shows current employment with no end date and 'Present' displayed.",
      },
    },
  },
}

export const WithoutHomePage: Story = {
  args: {
    name: "StartupCo",
    startDate: "2018-03-15",
    endDate: "2020-05-30",
    homePage: "",
    imageUrl: "https://via.placeholder.com/48x48/EA4335/FFFFFF?text=SC",
    jobs: [
      {
        _id: "job4",
        _createdAt: "1234",
        _rev: "",
        _updatedAt: "1234",
        _type: "jobTitle" as const,
        title: "Full Stack Developer",
        startDate: "2018-03-15",
        endDate: "2020-05-30",
        currentJobTitle: false,
        responsibilities: [
          "Built MVP product from scratch",
          "Managed cloud infrastructure",
          "Worked directly with founders",
        ],
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "Employer details without a homepage link (not clickable).",
      },
    },
  },
}

export const LongTenure: Story = {
  args: {
    name: "Enterprise Solutions Corp",
    startDate: "2015-09-01",
    endDate: "2023-08-31",
    homePage: "https://enterprisesolutions.com",
    imageUrl: "https://via.placeholder.com/48x48/FBBC04/000000?text=ES",
    jobs: [
      {
        _id: "job5",
        _createdAt: "1234",
        _rev: "",
        _updatedAt: "1234",
        _type: "jobTitle" as const,
        title: "Engineering Manager",
        startDate: "2020-01-01",
        endDate: "2023-08-31",
        currentJobTitle: false,
        responsibilities: [
          "Managed team of 12 engineers",
          "Drove quarterly planning and roadmap execution",
          "Established engineering culture and processes",
        ],
      },
      {
        _id: "job6",
        _createdAt: "1234",
        _rev: "",
        _updatedAt: "1234",
        _type: "jobTitle" as const,
        title: "Senior Software Engineer",
        startDate: "2017-06-01",
        endDate: "2019-12-31",
        currentJobTitle: false,
        responsibilities: [
          "Led migration to cloud-native architecture",
          "Optimized application performance",
          "Implemented CI/CD pipelines",
        ],
      },
      {
        _id: "job7",
        _createdAt: "1234",
        _rev: "",
        _updatedAt: "1234",
        _type: "jobTitle" as const,
        title: "Software Engineer",
        startDate: "2015-09-01",
        endDate: "2017-05-31",
        currentJobTitle: false,
        responsibilities: [
          "Developed enterprise web applications",
          "Integrated with legacy systems",
          "Participated in code reviews and testing",
        ],
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "Example of a long tenure with multiple promotions and job title changes.",
      },
    },
  },
}

export const ShortTenure: Story = {
  args: {
    name: "QuickStart Labs",
    startDate: "2023-01-15",
    endDate: "2023-06-30",
    homePage: "https://quickstartlabs.io",
    imageUrl: "https://via.placeholder.com/48x48/9C27B0/FFFFFF?text=QS",
    jobs: [
      {
        _id: "job8",
        _createdAt: "1234",
        _rev: "",
        _updatedAt: "1234",
        _type: "jobTitle" as const,
        title: "Contract Developer",
        startDate: "2023-01-15",
        endDate: "2023-06-30",
        currentJobTitle: false,
        responsibilities: [
          "Delivered prototype for new product feature",
          "Collaborated with remote development team",
          "Provided technical documentation",
        ],
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "Example of a short-term contract or consulting engagement.",
      },
    },
  },
}