import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import TechStackList from "./TechStackList"

const meta: Meta<typeof TechStackList> = {
  title: "Components/Pages/Home/TechStack/TechStackList",
  component: TechStackList,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Tech stack list component that displays a collection of technology integrations with an optional label. Renders multiple TechStackIntegration components in a vertical layout with consistent spacing.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Optional label displayed above the integrations list (can be JSX)",
    },
    integrations: {
      control: "object",
      description: "Array of technology integration configurations",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: <h2>My Tech Stack</h2>,
    integrations: [
      {
        provider: "React",
        iconFileName: "react",
        description: "A JavaScript library for building user interfaces with component-based architecture.",
        homePage: "https://reactjs.org",
      },
      {
        provider: "TypeScript",
        iconFileName: "typescript",
        description: "A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
        homePage: "https://www.typescriptlang.org",
      },
      {
        provider: "Next.js",
        iconFileName: "nextjs",
        description: "The React framework for production with features like server-side rendering and automatic code splitting.",
        homePage: "https://nextjs.org",
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "Default tech stack list with a heading label and three technology integrations.",
      },
    },
  },
}

export const WithoutLabel: Story = {
  args: {
    integrations: [
      {
        provider: "Vercel",
        iconFileName: "vercel",
        description: "Platform for frontend frameworks and static sites, built to integrate with your headless content, commerce, or database.",
        homePage: "https://vercel.com",
      },
      {
        provider: "Sanity",
        iconFileName: "sanity",
        description: "The composable content cloud for building exceptional digital experiences.",
        homePage: "https://www.sanity.io",
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "Tech stack list without a label, showing just the integrations.",
      },
    },
  },
}
