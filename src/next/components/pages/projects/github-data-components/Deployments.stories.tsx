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
