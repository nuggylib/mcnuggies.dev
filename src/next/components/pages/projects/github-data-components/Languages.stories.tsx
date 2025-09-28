import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Languages } from "./Languages"

const meta: Meta<typeof Languages> = {
  title: "Components/Pages/Projects/GitHubDataComponents/Languages",
  component: Languages,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Languages component that displays repository language statistics from GitHub API. Shows a pie chart visualization and language list with percentages. Handles loading states and API errors gracefully. Requires GitHub owner and repository name props.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    githubOwner: {
      control: "text",
      description: "GitHub repository owner/organization name",
    },
    githubRepo: {
      control: "text",
      description: "GitHub repository name",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    githubOwner: "facebook",
    githubRepo: "react",
  },
  parameters: {
    docs: {
      description: {
        story: "Default languages component displaying repository language statistics with pie chart and list.",
      },
    },
  },
}

export const TypeScriptProject: Story = {
  args: {
    githubOwner: "microsoft",
    githubRepo: "TypeScript",
  },
  parameters: {
    docs: {
      description: {
        story: "Languages component for a TypeScript-heavy repository.",
      },
    },
  },
}

export const JavaScriptProject: Story = {
  args: {
    githubOwner: "lodash",
    githubRepo: "lodash",
  },
  parameters: {
    docs: {
      description: {
        story: "Languages component for a JavaScript-focused repository.",
      },
    },
  },
}

export const PythonProject: Story = {
  args: {
    githubOwner: "django",
    githubRepo: "django",
  },
  parameters: {
    docs: {
      description: {
        story: "Languages component for a Python-based repository.",
      },
    },
  },
}

export const MultiLanguageProject: Story = {
  args: {
    githubOwner: "tensorflow",
    githubRepo: "tensorflow",
  },
  parameters: {
    docs: {
      description: {
        story: "Languages component for a repository with multiple programming languages.",
      },
    },
  },
}

export const RustProject: Story = {
  args: {
    githubOwner: "rust-lang",
    githubRepo: "rust",
  },
  parameters: {
    docs: {
      description: {
        story: "Languages component for a Rust-based repository.",
      },
    },
  },
}

export const GoProject: Story = {
  args: {
    githubOwner: "golang",
    githubRepo: "go",
  },
  parameters: {
    docs: {
      description: {
        story: "Languages component for a Go programming language repository.",
      },
    },
  },
}

export const WebDevelopmentProject: Story = {
  args: {
    githubOwner: "vercel",
    githubRepo: "next.js",
  },
  parameters: {
    docs: {
      description: {
        story: "Languages component for a web development framework repository.",
      },
    },
  },
}

export const MobileProject: Story = {
  args: {
    githubOwner: "flutter",
    githubRepo: "flutter",
  },
  parameters: {
    docs: {
      description: {
        story: "Languages component for a mobile development framework repository.",
      },
    },
  },
}

export const DataScienceProject: Story = {
  args: {
    githubOwner: "pandas-dev",
    githubRepo: "pandas",
  },
  parameters: {
    docs: {
      description: {
        story: "Languages component for a data science library repository.",
      },
    },
  },
}

export const InvalidRepository: Story = {
  args: {
    githubOwner: "nonexistent-user-12345",
    githubRepo: "nonexistent-repo-67890",
  },
  parameters: {
    docs: {
      description: {
        story: "Languages component with invalid repository information to demonstrate error handling.",
      },
    },
  },
}

export const EmptyOwner: Story = {
  args: {
    githubOwner: "",
    githubRepo: "some-repo",
  },
  parameters: {
    docs: {
      description: {
        story: "Languages component with empty owner string to test edge case handling.",
      },
    },
  },
}

export const EmptyRepo: Story = {
  args: {
    githubOwner: "some-owner",
    githubRepo: "",
  },
  parameters: {
    docs: {
      description: {
        story: "Languages component with empty repository string to test edge case handling.",
      },
    },
  },
}

export const UndefinedProps: Story = {
  args: {
    githubOwner: undefined,
    githubRepo: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: "Languages component with undefined props to demonstrate fallback behavior.",
      },
    },
  },
}

export const PersonalProject: Story = {
  args: {
    githubOwner: "john-doe",
    githubRepo: "my-portfolio",
  },
  parameters: {
    docs: {
      description: {
        story: "Languages component for a personal portfolio repository.",
      },
    },
  },
}