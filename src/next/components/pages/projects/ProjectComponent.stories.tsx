import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { ProjectComponent } from "./ProjectComponent"

const meta: Meta<typeof ProjectComponent> = {
  title: "Components/Pages/Projects/ProjectComponent",
  component: ProjectComponent,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Project component that displays project information with a title, description, and GitHub repository link. Features a clickable card layout that navigates to the project detail page and includes a GitHub icon for opening the repository in a new window.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "The title of the project",
    },
    slug: {
      control: "text",
      description: "The URL slug for the project detail page",
    },
    repoUrl: {
      control: "text",
      description: "The GitHub repository URL",
    },
    description: {
      control: "text",
      description: "The project description (can be React.ReactNode)",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Personal Blog",
    slug: "personal-blog",
    repoUrl: "https://github.com/username/personal-blog",
    description: "A modern blog built with Next.js, TypeScript, and Sanity CMS. Features responsive design, dark mode support, and optimized performance.",
  },
  parameters: {
    docs: {
      description: {
        story: "Default project component showing a typical blog project with title, description, and GitHub link.",
      },
    },
  },
}
