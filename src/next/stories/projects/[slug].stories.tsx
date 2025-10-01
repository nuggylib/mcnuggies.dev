import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import ProjectPage from "../../pages/projects/[slug]"
import { Project } from "../../types/sanity"
import { PrunedDeploymentStatusData, PrunedContributorData } from "../../pages/projects/[slug]"
import { DeploymentState } from "../../components/pages/projects/DeploymentComponent"
import sidebarReducer from "../../redux/sidebarSlice"

// Create a mock store for Storybook
const mockStore = configureStore({
  reducer: {
    nav: sidebarReducer,
  },
})

const meta: Meta<typeof ProjectPage> = {
  title: "Pages/Projects/ProjectPage",
  component: ProjectPage,
  decorators: [
    (Story) => (
      <Provider store={mockStore}>
        <div style={{ minHeight: "100vh" }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "A dynamic project page that displays project details including GitHub data (deployments, languages, contributors) and README content. Uses PageLayout for consistent styling and integrates with GitHub API data.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    project: {
      description: "The project data from Sanity CMS",
      control: { type: "object" },
    },
    readmeContent: {
      description: "README content fetched from GitHub repository",
      control: { type: "text" },
    },
    prunedDeploymentStatuses: {
      description: "Deployment status data from GitHub API",
      control: { type: "object" },
    },
    prunedContributors: {
      description: "Contributor data from GitHub API",
      control: { type: "object" },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Sample project data
const sampleProject: Project = {
  _id: "sample-project-1",
  _type: "project",
  _createdAt: "2024-01-10T10:00:00Z",
  _updatedAt: "2024-01-10T10:00:00Z",
  _rev: "1",
  title: "React Todo App",
  slug: { _type: "slug", current: "react-todo-app" },
  githubOwner: "john-doe",
  githubRepo: "react-todo-app",
  repoUrl: "https://github.com/john-doe/react-todo-app",
  description: [
    {
      _key: "desc-1",
      _type: "block",
      style: "normal",
      markDefs: [],
      children: [
        {
          _key: "desc-child-1",
          _type: "span",
          marks: [],
          text: "A modern todo application built with React, TypeScript, and Redux Toolkit. Features include task management, filtering, local storage persistence, and a clean, responsive design. This project demonstrates best practices for React development including component composition, state management, and testing strategies."
        }
      ]
    },
    {
      _key: "desc-2",
      _type: "block",
      style: "normal",
      markDefs: [],
      children: [
        {
          _key: "desc-child-2",
          _type: "span",
          marks: [],
          text: "Built with modern tooling including Vite for fast development, ESLint and Prettier for code quality, and comprehensive Jest testing. The application is fully responsive and follows accessibility best practices."
        }
      ]
    }
  ]
}

const sampleReadmeContent = `# React Todo App

A modern, fully-featured todo application built with React, TypeScript, and Redux Toolkit.

## Features

- ✅ Add, edit, and delete todos
- 🔍 Filter todos by status (all, active, completed)
- 💾 Local storage persistence
- 📱 Fully responsive design
- ♿ Accessible UI components
- 🎨 Clean, modern interface

## Tech Stack

- **React 18** - Latest React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Redux Toolkit** - Simplified Redux state management
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Jest & Testing Library** - Comprehensive testing setup

## Quick Start

\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
\`\`\`

## Architecture

The application follows a clean architecture with:

- **Components**: Reusable UI components
- **Store**: Redux store with slices for todos
- **Types**: TypeScript type definitions
- **Utils**: Helper functions and utilities
- **Tests**: Unit and integration tests

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Submit a pull request

## License

MIT License - see LICENSE file for details.`

const sampleDeploymentStatuses: { [key: string]: PrunedDeploymentStatusData } = {
  "production": {
    environment: "production",
    environmentUrl: "https://react-todo-app.vercel.app",
    createdAt: "2024-01-15T14:30:00Z",
    state: "success" as DeploymentState
  },
  "preview": {
    environment: "preview",
    environmentUrl: "https://react-todo-app-git-feature-branch.vercel.app",
    createdAt: "2024-01-14T16:45:00Z",
    state: "success" as DeploymentState
  }
}

const sampleContributors: { [key: string]: PrunedContributorData } = {
  "john-doe": {
    login: "john-doe",
    url: "https://github.com/john-doe",
    avatarUrl: "https://avatars.githubusercontent.com/u/12345?v=4"
  },
  "jane-smith": {
    login: "jane-smith",
    url: "https://github.com/jane-smith",
    avatarUrl: "https://avatars.githubusercontent.com/u/67890?v=4"
  },
  "dev-mike": {
    login: "dev-mike",
    url: "https://github.com/dev-mike",
    avatarUrl: "https://avatars.githubusercontent.com/u/54321?v=4"
  }
}

// Project without GitHub integration
const simpleProject: Project = {
  _id: "simple-project-1",
  _type: "project",
  _createdAt: "2024-01-05T10:00:00Z",
  _updatedAt: "2024-01-05T10:00:00Z",
  _rev: "1",
  title: "Portfolio Website",
  slug: { _type: "slug", current: "portfolio-website" },
  repoUrl: "https://github.com/john-doe/portfolio",
  description: [
    {
      _key: "simple-desc-1",
      _type: "block",
      style: "normal",
      markDefs: [],
      children: [
        {
          _key: "simple-desc-child-1",
          _type: "span",
          marks: [],
          text: "A personal portfolio website showcasing my development work and experience. Built with Next.js and deployed on Vercel."
        }
      ]
    }
  ]
}

// Large project with complex setup
const enterpriseProject: Project = {
  _id: "enterprise-project-1",
  _type: "project",
  _createdAt: "2023-12-01T10:00:00Z",
  _updatedAt: "2024-01-20T15:30:00Z",
  _rev: "5",
  title: "E-Commerce Platform",
  slug: { _type: "slug", current: "ecommerce-platform" },
  githubOwner: "enterprise-org",
  githubRepo: "ecommerce-platform",
  repoUrl: "https://github.com/enterprise-org/ecommerce-platform",
  description: [
    {
      _key: "enterprise-desc-1",
      _type: "block",
      style: "normal",
      markDefs: [],
      children: [
        {
          _key: "enterprise-desc-child-1",
          _type: "span",
          marks: [],
          text: "A comprehensive e-commerce platform built for enterprise clients. Features include multi-tenant architecture, advanced analytics, inventory management, and integration with multiple payment providers."
        }
      ]
    },
    {
      _key: "enterprise-desc-2",
      _type: "block",
      style: "normal",
      markDefs: [],
      children: [
        {
          _key: "enterprise-desc-child-2",
          _type: "span",
          marks: [],
          text: "The platform supports millions of products, handles high-traffic loads, and provides real-time data synchronization across multiple services. Built with microservices architecture using Docker and Kubernetes."
        }
      ]
    }
  ]
}

const enterpriseReadmeContent = `# E-Commerce Platform

A scalable, enterprise-grade e-commerce platform built with modern technologies.

## Overview

This platform serves millions of customers and handles thousands of transactions daily. It's built with a microservices architecture for maximum scalability and reliability.

## Key Features

### Core Commerce
- Product catalog management
- Inventory tracking and alerts
- Order processing and fulfillment
- Multi-currency support
- Advanced search and filtering

### Analytics & Reporting
- Real-time sales analytics
- Customer behavior tracking
- Inventory reports
- Revenue analytics
- Custom dashboard creation

### Integrations
- Payment providers (Stripe, PayPal, Square)
- Shipping carriers (FedEx, UPS, DHL)
- ERP systems integration
- Marketing automation tools
- Customer support platforms

## Architecture

### Backend Services
- **API Gateway** - Nginx with rate limiting
- **User Service** - Authentication and authorization
- **Product Service** - Catalog and inventory management
- **Order Service** - Order processing and tracking
- **Payment Service** - Payment processing and fraud detection
- **Notification Service** - Email and SMS notifications

### Frontend Applications
- **Customer Portal** - React with Next.js
- **Admin Dashboard** - React with Material-UI
- **Mobile App** - React Native

### Infrastructure
- **Container Orchestration** - Kubernetes
- **Service Mesh** - Istio
- **Monitoring** - Prometheus + Grafana
- **Logging** - ELK Stack
- **CI/CD** - GitLab CI with ArgoCD

## Performance Metrics

- **99.9%** uptime SLA
- **<200ms** average API response time
- **10,000+** concurrent users supported
- **1M+** products in catalog
- **50TB+** data processed monthly

## Getting Started

### Prerequisites
- Docker Desktop
- Kubernetes cluster (local or cloud)
- Node.js 18+
- PostgreSQL 14+
- Redis 6+

### Local Development
\`\`\`bash
# Clone and setup
git clone https://github.com/enterprise-org/ecommerce-platform.git
cd ecommerce-platform

# Start infrastructure
docker-compose up -d postgres redis

# Install dependencies
npm install

# Start services
npm run dev:all

# Run tests
npm test
\`\`\`

## Contributing

Please read our [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md).

## License

Proprietary - All rights reserved.`

const enterpriseDeploymentStatuses: { [key: string]: PrunedDeploymentStatusData } = {
  "production": {
    environment: "production",
    environmentUrl: "https://platform.enterprise-commerce.com",
    createdAt: "2024-01-20T10:15:00Z",
    state: "success" as DeploymentState
  },
  "staging": {
    environment: "staging",
    environmentUrl: "https://staging.enterprise-commerce.com",
    createdAt: "2024-01-20T09:30:00Z",
    state: "success" as DeploymentState
  },
  "development": {
    environment: "development",
    environmentUrl: "https://dev.enterprise-commerce.com",
    createdAt: "2024-01-19T16:45:00Z",
    state: "in_progress" as DeploymentState
  }
}

const enterpriseContributors: { [key: string]: PrunedContributorData } = {
  "tech-lead": {
    login: "tech-lead",
    url: "https://github.com/tech-lead",
    avatarUrl: "https://avatars.githubusercontent.com/u/11111?v=4"
  },
  "senior-dev": {
    login: "senior-dev",
    url: "https://github.com/senior-dev",
    avatarUrl: "https://avatars.githubusercontent.com/u/22222?v=4"
  },
  "frontend-specialist": {
    login: "frontend-specialist",
    url: "https://github.com/frontend-specialist",
    avatarUrl: "https://avatars.githubusercontent.com/u/33333?v=4"
  },
  "devops-engineer": {
    login: "devops-engineer",
    url: "https://github.com/devops-engineer",
    avatarUrl: "https://avatars.githubusercontent.com/u/44444?v=4"
  },
  "qa-lead": {
    login: "qa-lead",
    url: "https://github.com/qa-lead",
    avatarUrl: "https://avatars.githubusercontent.com/u/55555?v=4"
  }
}

export const Default: Story = {
  args: {
    project: sampleProject,
    readmeContent: sampleReadmeContent,
    prunedDeploymentStatuses: sampleDeploymentStatuses,
    prunedContributors: sampleContributors,
  },
  parameters: {
    docs: {
      description: {
        story: "A standard project page with GitHub integration showing deployments, contributors, and README content.",
      },
    },
  },
}

export const WithoutGitHubData: Story = {
  args: {
    project: simpleProject,
    readmeContent: undefined,
    prunedDeploymentStatuses: null,
    prunedContributors: null,
  },
  parameters: {
    docs: {
      description: {
        story: "A project page without GitHub integration, showing only basic project information.",
      },
    },
  },
}

export const EnterpriseProject: Story = {
  args: {
    project: enterpriseProject,
    readmeContent: enterpriseReadmeContent,
    prunedDeploymentStatuses: enterpriseDeploymentStatuses,
    prunedContributors: enterpriseContributors,
  },
  parameters: {
    docs: {
      description: {
        story: "A complex enterprise project with multiple environments, many contributors, and comprehensive README documentation.",
      },
    },
  },
}

export const WithDeploymentsOnly: Story = {
  args: {
    project: sampleProject,
    readmeContent: sampleReadmeContent,
    prunedDeploymentStatuses: sampleDeploymentStatuses,
    prunedContributors: null,
  },
  parameters: {
    docs: {
      description: {
        story: "A project showing deployment information but no contributor data.",
      },
    },
  },
}

export const WithContributorsOnly: Story = {
  args: {
    project: sampleProject,
    readmeContent: sampleReadmeContent,
    prunedDeploymentStatuses: null,
    prunedContributors: sampleContributors,
  },
  parameters: {
    docs: {
      description: {
        story: "A project showing contributor information but no deployment data.",
      },
    },
  },
}

export const FailedDeployment: Story = {
  args: {
    project: sampleProject,
    readmeContent: sampleReadmeContent,
    prunedDeploymentStatuses: {
      "production": {
        environment: "production",
        environmentUrl: "https://react-todo-app.vercel.app",
        createdAt: "2024-01-15T14:30:00Z",
        state: "success" as DeploymentState
      },
      "staging": {
        environment: "staging",
        environmentUrl: "https://staging-react-todo-app.vercel.app",
        createdAt: "2024-01-15T13:15:00Z",
        state: "failure" as DeploymentState
      }
    },
    prunedContributors: sampleContributors,
  },
  parameters: {
    docs: {
      description: {
        story: "A project with mixed deployment states including a failed deployment.",
      },
    },
  },
}

export const LongProjectTitle: Story = {
  args: {
    project: {
      ...sampleProject,
      title: "Advanced Machine Learning Platform for Real-time Data Processing and Analytics",
    },
    readmeContent: sampleReadmeContent,
    prunedDeploymentStatuses: sampleDeploymentStatuses,
    prunedContributors: sampleContributors,
  },
  parameters: {
    docs: {
      description: {
        story: "A project with a very long title to test layout handling.",
      },
    },
  },
}

export const MinimalProject: Story = {
  args: {
    project: {
      _id: "minimal-project",
      _type: "project",
      _createdAt: "2024-01-01T10:00:00Z",
      _updatedAt: "2024-01-01T10:00:00Z",
      _rev: "1",
      title: "Simple Script",
      slug: { _type: "slug", current: "simple-script" },
      repoUrl: "https://github.com/user/simple-script",
      description: [
        {
          _key: "minimal-desc",
          _type: "block",
          style: "normal",
          markDefs: [],
          children: [
            {
              _key: "minimal-desc-child",
              _type: "span",
              marks: [],
              text: "A simple utility script."
            }
          ]
        }
      ]
    },
    readmeContent: "# Simple Script\n\nA basic utility script for automating common tasks.\n\n## Usage\n\n```bash\nnode script.js\n```",
    prunedDeploymentStatuses: null,
    prunedContributors: null,
  },
  parameters: {
    docs: {
      description: {
        story: "A minimal project with basic information and short README content.",
      },
    },
  },
}