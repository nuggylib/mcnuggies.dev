import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import FeedItem from "./FeedItem"

const meta: Meta<typeof FeedItem> = {
  title: "Components/FeedItem",
  component: FeedItem,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "The title of the feed item",
    },
    href: {
      control: "text",
      description: "The URL to navigate to when clicked",
    },
    image: {
      control: "object",
      description: "Optional image for the feed item (currently unused)",
    },
    subtitle: {
      control: "text",
      description: "Optional subtitle for the feed item (currently unused)",
    },
    textContent: {
      control: "text",
      description: "The main content of the feed item",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Sample Feed Item",
    href: "/sample-post",
    textContent: "This is a sample feed item with some text content that demonstrates how the component looks.",
  },
}

export const LongTitle: Story = {
  args: {
    title: "This is a Much Longer Title That Demonstrates How the Component Handles Extended Text Content",
    href: "/long-title-post",
    textContent: "This feed item has a longer title to test how the component handles text wrapping and layout.",
  },
}

export const ShortContent: Story = {
  args: {
    title: "Brief Post",
    href: "/brief-post",
    textContent: "Short content.",
  },
}

export const LongContent: Story = {
  args: {
    title: "Detailed Article",
    href: "/detailed-article",
    textContent: "This is a much longer piece of content that demonstrates how the feed item component handles extended text. It includes multiple sentences and shows how the component adapts to larger amounts of text content. This could represent a blog post excerpt or a detailed description of an article that would appear in a feed.",
  },
}

export const BlogPost: Story = {
  args: {
    title: "Getting Started with React and TypeScript",
    href: "/blog/react-typescript-guide",
    textContent: "Learn how to set up a new React project with TypeScript, including best practices for type safety and component architecture. This comprehensive guide covers everything from initial setup to advanced patterns.",
  },
}

export const ProjectShowcase: Story = {
  args: {
    title: "Personal Portfolio Website",
    href: "/projects/portfolio-site",
    textContent: "A modern, responsive portfolio website built with Next.js, featuring dynamic content management through Sanity CMS and optimized for performance and accessibility.",
  },
}