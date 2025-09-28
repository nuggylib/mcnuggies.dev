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

export const SingleIntegration: Story = {
  args: {
    label: <h3>Featured Technology</h3>,
    integrations: [
      {
        provider: "Redux Toolkit",
        iconFileName: "redux",
        description: "The official, opinionated, batteries-included toolset for efficient Redux development. It includes utilities to simplify common use cases like store setup, creating reducers, immutable update logic, and more.",
        homePage: "https://redux-toolkit.js.org",
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "Tech stack list with a single integration and a smaller heading.",
      },
    },
  },
}

export const ExtensiveStack: Story = {
  args: {
    label: <h2>Complete Technology Stack</h2>,
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
      {
        provider: "Redux Toolkit",
        iconFileName: "redux",
        description: "The official, opinionated, batteries-included toolset for efficient Redux development.",
        homePage: "https://redux-toolkit.js.org",
      },
      {
        provider: "Sass",
        iconFileName: "sass",
        description: "CSS with superpowers.",
        homePage: "https://sass-lang.com",
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "Tech stack list with many integrations to demonstrate scrolling and layout with longer lists.",
      },
    },
  },
}

export const CustomLabel: Story = {
  args: {
    label: (
      <div>
        <h2>Technologies I Use</h2>
        <p>These are the core technologies that power my projects</p>
      </div>
    ),
    integrations: [
      {
        provider: "GitHub Actions",
        iconFileName: "github-actions",
        description: "Automate your workflow from idea to production with GitHub's built-in CI/CD platform.",
        homePage: "https://github.com/features/actions",
      },
      {
        provider: "ESLint",
        iconFileName: "eslint",
        description: "Find and fix problems in your JavaScript code.",
        homePage: "https://eslint.org",
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "Tech stack list with a custom JSX label containing both heading and description.",
      },
    },
  },
}

export const BackendTechnologies: Story = {
  args: {
    label: <h2>Backend & Infrastructure</h2>,
    integrations: [
      {
        provider: "Node.js",
        iconFileName: "nodejs",
        description: "JavaScript runtime built on Chrome's V8 JavaScript engine for server-side development.",
        homePage: "https://nodejs.org",
      },
      {
        provider: "MongoDB",
        iconFileName: "mongodb",
        description: "The database for modern applications with flexible document data model.",
        homePage: "https://www.mongodb.com",
      },
      {
        provider: "Docker",
        iconFileName: "docker",
        description: "Platform for developing, shipping, and running applications using containerization.",
        homePage: "https://www.docker.com",
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "Tech stack list focused on backend and infrastructure technologies.",
      },
    },
  },
}

export const EmptyList: Story = {
  args: {
    label: <h2>Coming Soon</h2>,
    integrations: [],
  },
  parameters: {
    docs: {
      description: {
        story: "Tech stack list with no integrations to show empty state behavior.",
      },
    },
  },
}