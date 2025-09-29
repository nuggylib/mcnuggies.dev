import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { DeploymentComponent } from "./DeploymentComponent"

const meta: Meta<typeof DeploymentComponent> = {
  title: "Components/Pages/Projects/DeploymentComponent",
  component: DeploymentComponent,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Deployment component that displays deployment information including environment, status, and creation date. Features a clickable link to the deployment URL with status icons and hover effects.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    environment: {
      control: "text",
      description: "The deployment environment name",
    },
    environmentUrl: {
      control: "text",
      description: "The URL of the deployment environment",
    },
    state: {
      control: {
        type: "select",
        options: ["error", "failure", "inactive", "pending", "success", "queued", "in_progress"],
      },
      description: "The current state of the deployment",
    },
    createdAt: {
      control: "text",
      description: "The creation date/time of the deployment",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Success: Story = {
  args: {
    environment: "production",
    environmentUrl: "https://myapp.vercel.app",
    state: "success",
    createdAt: "2024-01-15T10:30:00Z",
  },
  parameters: {
    docs: {
      description: {
        story: "Successful deployment showing green check icon and production environment.",
      },
    },
  },
}

export const Failure: Story = {
  args: {
    environment: "staging",
    environmentUrl: "https://staging.myapp.com",
    state: "failure",
    createdAt: "2024-01-15T09:15:00Z",
  },
  parameters: {
    docs: {
      description: {
        story: "Failed deployment showing red X icon and error state.",
      },
    },
  },
}

export const Error: Story = {
  args: {
    environment: "preview",
    environmentUrl: "https://preview-abc123.myapp.com",
    state: "error",
    createdAt: "2024-01-15T08:45:00Z",
  },
  parameters: {
    docs: {
      description: {
        story: "Deployment in error state with red X icon.",
      },
    },
  },
}

export const Pending: Story = {
  args: {
    environment: "development",
    environmentUrl: "https://dev.myapp.com",
    state: "pending",
    createdAt: "2024-01-15T11:00:00Z",
  },
  parameters: {
    docs: {
      description: {
        story: "Pending deployment showing X icon while deployment is in progress.",
      },
    },
  },
}

export const InProgress: Story = {
  args: {
    environment: "feature-branch",
    environmentUrl: "https://feature-xyz.myapp.com",
    state: "in_progress",
    createdAt: "2024-01-15T11:15:00Z",
  },
  parameters: {
    docs: {
      description: {
        story: "Deployment currently in progress with X icon.",
      },
    },
  },
}

export const Queued: Story = {
  args: {
    environment: "testing",
    environmentUrl: "https://test.myapp.com",
    state: "queued",
    createdAt: "2024-01-15T10:00:00Z",
  },
  parameters: {
    docs: {
      description: {
        story: "Queued deployment waiting to be processed.",
      },
    },
  },
}

export const Inactive: Story = {
  args: {
    environment: "archived",
    environmentUrl: "https://archived.myapp.com",
    state: "inactive",
    createdAt: "2024-01-10T14:30:00Z",
  },
  parameters: {
    docs: {
      description: {
        story: "Inactive deployment that is no longer active.",
      },
    },
  },
}

export const ProductionDeployment: Story = {
  args: {
    environment: "production-us-east-1",
    environmentUrl: "https://api.example.com",
    state: "success",
    createdAt: "2024-01-15T16:45:00Z",
  },
  parameters: {
    docs: {
      description: {
        story: "Production deployment with regional identifier and API URL.",
      },
    },
  },
}

export const LongEnvironmentName: Story = {
  args: {
    environment: "preview-pull-request-123-feature-user-authentication",
    environmentUrl: "https://preview-pr123-auth.myapp.vercel.app",
    state: "success",
    createdAt: "2024-01-15T13:20:00Z",
  },
  parameters: {
    docs: {
      description: {
        story: "Deployment with a very long environment name to test text layout.",
      },
    },
  },
}

export const RecentDeployment: Story = {
  args: {
    environment: "canary",
    environmentUrl: "https://canary.myapp.com",
    state: "success",
    createdAt: "2024-01-15T20:30:00Z",
  },
  parameters: {
    docs: {
      description: {
        story: "Recently created canary deployment with current timestamp.",
      },
    },
  },
}

export const StagingEnvironment: Story = {
  args: {
    environment: "staging-with-feature-flags",
    environmentUrl: "https://staging-ff.mycompany.io",
    state: "success",
    createdAt: "2024-01-15T15:10:00Z",
  },
  parameters: {
    docs: {
      description: {
        story: "Staging environment with feature flags configuration.",
      },
    },
  },
}

export const MobileAppDeployment: Story = {
  args: {
    environment: "mobile-beta",
    environmentUrl: "https://beta-mobile.myapp.com",
    state: "success",
    createdAt: "2024-01-15T12:00:00Z",
  },
  parameters: {
    docs: {
      description: {
        story: "Mobile application beta deployment environment.",
      },
    },
  },
}

export const APIDeployment: Story = {
  args: {
    environment: "api-v2",
    environmentUrl: "https://api-v2.myservice.com",
    state: "success",
    createdAt: "2024-01-15T17:25:00Z",
  },
  parameters: {
    docs: {
      description: {
        story: "API version 2 deployment with versioned URL.",
      },
    },
  },
}

export const DockerDeployment: Story = {
  args: {
    environment: "docker-compose",
    environmentUrl: "https://localhost:3000",
    state: "success",
    createdAt: "2024-01-15T09:30:00Z",
  },
  parameters: {
    docs: {
      description: {
        story: "Local Docker deployment with localhost URL.",
      },
    },
  },
}

export const CDNDeployment: Story = {
  args: {
    environment: "cdn-global",
    environmentUrl: "https://cdn.mysite.com",
    state: "success",
    createdAt: "2024-01-15T14:15:00Z",
  },
  parameters: {
    docs: {
      description: {
        story: "Global CDN deployment for static assets.",
      },
    },
  },
}