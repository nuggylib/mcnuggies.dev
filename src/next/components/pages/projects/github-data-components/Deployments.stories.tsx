import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Deployments } from "./Deployments"

const meta: Meta<typeof Deployments> = {
  title: "Components/Pages/Projects/GitHubDataComponents/Deployments",
  component: Deployments,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Deployments component that displays a list of deployment statuses for a project. Shows deployment environments, URLs, creation dates, and states using the DeploymentComponent. Displays a heading and handles null deployment data gracefully.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    prunedDeploymentStatuses: {
      control: "object",
      description: "Object containing deployment status data keyed by deployment identifier, or null if no deployments",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    prunedDeploymentStatuses: {
      "production": {
        environment: "production",
        environmentUrl: "https://myapp.vercel.app",
        createdAt: "2024-01-15T10:30:00Z",
        state: "success",
      },
      "preview": {
        environment: "preview",
        environmentUrl: "https://preview-myapp.vercel.app",
        createdAt: "2024-01-15T09:45:00Z",
        state: "success",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Default deployments list showing successful production and preview deployments.",
      },
    },
  },
}

export const SingleDeployment: Story = {
  args: {
    prunedDeploymentStatuses: {
      "production": {
        environment: "production",
        environmentUrl: "https://myapp.com",
        createdAt: "2024-01-15T14:20:00Z",
        state: "success",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Deployments component with a single production deployment.",
      },
    },
  },
}

export const MultipleEnvironments: Story = {
  args: {
    prunedDeploymentStatuses: {
      "production": {
        environment: "production",
        environmentUrl: "https://blog.example.com",
        createdAt: "2024-01-15T12:00:00Z",
        state: "success",
      },
      "staging": {
        environment: "staging",
        environmentUrl: "https://staging.blog.example.com",
        createdAt: "2024-01-15T11:30:00Z",
        state: "success",
      },
      "development": {
        environment: "development",
        environmentUrl: "https://dev.blog.example.com",
        createdAt: "2024-01-15T11:00:00Z",
        state: "success",
      },
      "preview": {
        environment: "preview",
        environmentUrl: "https://preview-abc123.blog.example.com",
        createdAt: "2024-01-15T10:45:00Z",
        state: "success",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Deployments component showing multiple deployment environments with different URLs.",
      },
    },
  },
}

export const FailedDeployments: Story = {
  args: {
    prunedDeploymentStatuses: {
      "production": {
        environment: "production",
        environmentUrl: "https://myapp.vercel.app",
        createdAt: "2024-01-15T08:15:00Z",
        state: "failure",
      },
      "preview": {
        environment: "preview",
        environmentUrl: "https://preview-myapp.vercel.app",
        createdAt: "2024-01-15T08:00:00Z",
        state: "failure",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Deployments component showing failed deployment states with error indicators.",
      },
    },
  },
}

export const MixedStates: Story = {
  args: {
    prunedDeploymentStatuses: {
      "production": {
        environment: "production",
        environmentUrl: "https://portfolio.example.com",
        createdAt: "2024-01-15T16:30:00Z",
        state: "success",
      },
      "staging": {
        environment: "staging",
        environmentUrl: "https://staging.portfolio.example.com",
        createdAt: "2024-01-15T16:00:00Z",
        state: "failure",
      },
      "preview-branch": {
        environment: "preview-branch",
        environmentUrl: "https://preview-feature.portfolio.example.com",
        createdAt: "2024-01-15T15:45:00Z",
        state: "pending",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Deployments component with mixed deployment states: success, failure, and pending.",
      },
    },
  },
}

export const LongEnvironmentNames: Story = {
  args: {
    prunedDeploymentStatuses: {
      "production-us-east-1": {
        environment: "production-us-east-1",
        environmentUrl: "https://us-east.myapp.com",
        createdAt: "2024-01-15T13:20:00Z",
        state: "success",
      },
      "staging-with-feature-flags": {
        environment: "staging-with-feature-flags",
        environmentUrl: "https://staging-ff.myapp.com",
        createdAt: "2024-01-15T13:00:00Z",
        state: "success",
      },
      "preview-pull-request-123-feature-branch": {
        environment: "preview-pull-request-123-feature-branch",
        environmentUrl: "https://preview-pr123.myapp.com",
        createdAt: "2024-01-15T12:45:00Z",
        state: "in_progress",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Deployments component with longer environment names to test layout and text wrapping.",
      },
    },
  },
}

export const VariousStates: Story = {
  args: {
    prunedDeploymentStatuses: {
      "prod": {
        environment: "production",
        environmentUrl: "https://api.example.com",
        createdAt: "2024-01-15T18:00:00Z",
        state: "success",
      },
      "stage": {
        environment: "staging",
        environmentUrl: "https://staging-api.example.com",
        createdAt: "2024-01-15T17:45:00Z",
        state: "error",
      },
      "test": {
        environment: "testing",
        environmentUrl: "https://test-api.example.com",
        createdAt: "2024-01-15T17:30:00Z",
        state: "inactive",
      },
      "dev": {
        environment: "development",
        environmentUrl: "https://dev-api.example.com",
        createdAt: "2024-01-15T17:15:00Z",
        state: "queued",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Deployments component showing various deployment states including error, inactive, and queued.",
      },
    },
  },
}

export const RecentDeployments: Story = {
  args: {
    prunedDeploymentStatuses: {
      "prod-latest": {
        environment: "production",
        environmentUrl: "https://webapp.example.com",
        createdAt: "2024-01-15T20:30:00Z",
        state: "success",
      },
      "canary": {
        environment: "canary",
        environmentUrl: "https://canary.webapp.example.com",
        createdAt: "2024-01-15T20:25:00Z",
        state: "success",
      },
      "beta": {
        environment: "beta",
        environmentUrl: "https://beta.webapp.example.com",
        createdAt: "2024-01-15T20:20:00Z",
        state: "success",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Deployments component with recent timestamps showing different release channels.",
      },
    },
  },
}

export const NoDeployments: Story = {
  args: {
    prunedDeploymentStatuses: null,
  },
  parameters: {
    docs: {
      description: {
        story: "Deployments component with null deployment data showing just the heading.",
      },
    },
  },
}

export const EmptyDeployments: Story = {
  args: {
    prunedDeploymentStatuses: {},
  },
  parameters: {
    docs: {
      description: {
        story: "Deployments component with empty deployment object showing just the heading.",
      },
    },
  },
}