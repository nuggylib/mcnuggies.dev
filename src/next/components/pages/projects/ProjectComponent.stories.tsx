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

export const WebApplication: Story = {
  args: {
    title: "E-commerce Platform",
    slug: "ecommerce-platform",
    repoUrl: "https://github.com/username/ecommerce-platform",
    description: "Full-stack e-commerce solution with React frontend, Node.js backend, and PostgreSQL database. Includes payment processing, user authentication, and admin dashboard.",
  },
  parameters: {
    docs: {
      description: {
        story: "Project component for a complex web application with detailed description.",
      },
    },
  },
}

export const MobileApp: Story = {
  args: {
    title: "Task Manager Mobile App",
    slug: "task-manager-app",
    repoUrl: "https://github.com/username/task-manager-app",
    description: "React Native mobile application for task management with offline support, push notifications, and cross-platform compatibility.",
  },
  parameters: {
    docs: {
      description: {
        story: "Project component for a mobile application project.",
      },
    },
  },
}

export const OpenSourceLibrary: Story = {
  args: {
    title: "React Component Library",
    slug: "react-components",
    repoUrl: "https://github.com/username/react-components",
    description: "Open source component library with TypeScript support, Storybook documentation, and comprehensive test coverage. Published on NPM.",
  },
  parameters: {
    docs: {
      description: {
        story: "Project component for an open source library project.",
      },
    },
  },
}

export const GameProject: Story = {
  args: {
    title: "2D Puzzle Game",
    slug: "puzzle-game",
    repoUrl: "https://github.com/username/puzzle-game",
    description: "Browser-based puzzle game built with HTML5 Canvas and JavaScript. Features multiple levels, score tracking, and responsive controls.",
  },
  parameters: {
    docs: {
      description: {
        story: "Project component for a game development project.",
      },
    },
  },
}

export const DataVisualization: Story = {
  args: {
    title: "COVID-19 Dashboard",
    slug: "covid-dashboard",
    repoUrl: "https://github.com/username/covid-dashboard",
    description: "Real-time data visualization dashboard displaying COVID-19 statistics with interactive charts, maps, and trend analysis using D3.js and React.",
  },
  parameters: {
    docs: {
      description: {
        story: "Project component for a data visualization project.",
      },
    },
  },
}

export const APIProject: Story = {
  args: {
    title: "Weather API Service",
    slug: "weather-api",
    repoUrl: "https://github.com/username/weather-api",
    description: "RESTful API service providing weather data with Redis caching, rate limiting, and comprehensive documentation. Built with Express.js and TypeScript.",
  },
  parameters: {
    docs: {
      description: {
        story: "Project component for a backend API project.",
      },
    },
  },
}

export const MachineLearning: Story = {
  args: {
    title: "Image Classification Model",
    slug: "image-classifier",
    repoUrl: "https://github.com/username/image-classifier",
    description: "Machine learning model for image classification using TensorFlow and Python. Includes data preprocessing, model training, and web interface for predictions.",
  },
  parameters: {
    docs: {
      description: {
        story: "Project component for a machine learning project.",
      },
    },
  },
}

export const DevToolsExtension: Story = {
  args: {
    title: "Browser DevTools Extension",
    slug: "devtools-extension",
    repoUrl: "https://github.com/username/devtools-extension",
    description: "Chrome and Firefox extension for debugging React applications. Features component tree inspection, state tracking, and performance monitoring.",
  },
  parameters: {
    docs: {
      description: {
        story: "Project component for a browser extension project.",
      },
    },
  },
}

export const BlockchainProject: Story = {
  args: {
    title: "DeFi Trading Platform",
    slug: "defi-platform",
    repoUrl: "https://github.com/username/defi-platform",
    description: "Decentralized finance trading platform built with Solidity smart contracts and React frontend. Supports token swapping, liquidity pools, and yield farming.",
  },
  parameters: {
    docs: {
      description: {
        story: "Project component for a blockchain/cryptocurrency project.",
      },
    },
  },
}

export const DesktopApplication: Story = {
  args: {
    title: "Cross-Platform Music Player",
    slug: "music-player",
    repoUrl: "https://github.com/username/music-player",
    description: "Desktop music player built with Electron and React. Features playlist management, audio visualization, and support for multiple audio formats.",
  },
  parameters: {
    docs: {
      description: {
        story: "Project component for a desktop application project.",
      },
    },
  },
}

export const LongTitle: Story = {
  args: {
    title: "Advanced Machine Learning Platform for Predictive Analytics and Data Science",
    slug: "ml-analytics-platform",
    repoUrl: "https://github.com/username/ml-analytics-platform",
    description: "Comprehensive machine learning platform with automated model training, hyperparameter optimization, and deployment pipeline.",
  },
  parameters: {
    docs: {
      description: {
        story: "Project component with a very long title to test text layout and wrapping.",
      },
    },
  },
}

export const ShortDescription: Story = {
  args: {
    title: "URL Shortener",
    slug: "url-shortener",
    repoUrl: "https://github.com/username/url-shortener",
    description: "Simple URL shortening service.",
  },
  parameters: {
    docs: {
      description: {
        story: "Project component with minimal description to test compact layout.",
      },
    },
  },
}

export const ReactElementDescription: Story = {
  args: {
    title: "Portfolio Website",
    slug: "portfolio-site",
    repoUrl: "https://github.com/username/portfolio-site",
    description: (
      <div>
        <p>Modern portfolio website showcasing web development projects.</p>
        <ul>
          <li>Responsive design with CSS Grid and Flexbox</li>
          <li>Contact form with email integration</li>
          <li>SEO optimized with Next.js</li>
        </ul>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Project component with React element as description to demonstrate ReactNode support.",
      },
    },
  },
}

export const OrganizationRepository: Story = {
  args: {
    title: "Company Design System",
    slug: "design-system",
    repoUrl: "https://github.com/company/design-system",
    description: "Comprehensive design system with reusable components, design tokens, and documentation. Used across multiple company products.",
  },
  parameters: {
    docs: {
      description: {
        story: "Project component linking to an organization repository.",
      },
    },
  },
}