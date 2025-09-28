import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { TechStackIntegration } from "./TechStackIntegration"

const meta: Meta<typeof TechStackIntegration> = {
  title: "Components/Pages/Home/TechStack/TechStackIntegration",
  component: TechStackIntegration,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Tech stack integration component that displays a technology provider with an icon, name, and description. Clickable component that opens the provider's homepage in a new tab.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    provider: {
      control: "text",
      description: "The name of the technology provider",
    },
    iconFileName: {
      control: "text",
      description: "The filename of the icon to display (without extension)",
    },
    description: {
      control: "text",
      description: "Description of how the technology is used",
    },
    homePage: {
      control: "text",
      description: "URL to the provider's homepage",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    provider: "React",
    iconFileName: "react",
    description: "A JavaScript library for building user interfaces with component-based architecture.",
    homePage: "https://reactjs.org",
  },
  parameters: {
    docs: {
      description: {
        story: "Default tech stack integration showing React.",
      },
    },
  },
}

export const TypeScript: Story = {
  args: {
    provider: "TypeScript",
    iconFileName: "typescript",
    description: "A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
    homePage: "https://www.typescriptlang.org",
  },
  parameters: {
    docs: {
      description: {
        story: "Tech stack integration for TypeScript.",
      },
    },
  },
}

export const NextJS: Story = {
  args: {
    provider: "Next.js",
    iconFileName: "nextjs",
    description: "The React framework for production with features like server-side rendering and automatic code splitting.",
    homePage: "https://nextjs.org",
  },
  parameters: {
    docs: {
      description: {
        story: "Tech stack integration for Next.js framework.",
      },
    },
  },
}

export const Vercel: Story = {
  args: {
    provider: "Vercel",
    iconFileName: "vercel",
    description: "Platform for frontend frameworks and static sites, built to integrate with your headless content, commerce, or database.",
    homePage: "https://vercel.com",
  },
  parameters: {
    docs: {
      description: {
        story: "Tech stack integration for Vercel deployment platform.",
      },
    },
  },
}

export const Sanity: Story = {
  args: {
    provider: "Sanity",
    iconFileName: "sanity",
    description: "The composable content cloud for building exceptional digital experiences.",
    homePage: "https://www.sanity.io",
  },
  parameters: {
    docs: {
      description: {
        story: "Tech stack integration for Sanity CMS.",
      },
    },
  },
}

export const LongDescription: Story = {
  args: {
    provider: "Redux Toolkit",
    iconFileName: "redux",
    description: "The official, opinionated, batteries-included toolset for efficient Redux development. It includes utilities to simplify common use cases like store setup, creating reducers, immutable update logic, and more.",
    homePage: "https://redux-toolkit.js.org",
  },
  parameters: {
    docs: {
      description: {
        story: "Tech stack integration with a longer description to test text wrapping and layout.",
      },
    },
  },
}

export const ShortName: Story = {
  args: {
    provider: "Sass",
    iconFileName: "sass",
    description: "CSS with superpowers.",
    homePage: "https://sass-lang.com",
  },
  parameters: {
    docs: {
      description: {
        story: "Tech stack integration with a short provider name and description.",
      },
    },
  },
}

export const LongProviderName: Story = {
  args: {
    provider: "GitHub Actions for Continuous Integration",
    iconFileName: "github-actions",
    description: "Automate your workflow from idea to production with GitHub's built-in CI/CD platform.",
    homePage: "https://github.com/features/actions",
  },
  parameters: {
    docs: {
      description: {
        story: "Tech stack integration with a longer provider name to test title wrapping.",
      },
    },
  },
}