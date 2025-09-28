import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { RootPageSection } from "./RootPageSection"

const meta: Meta<typeof RootPageSection> = {
  title: "Components/Pages/Home/RootPageSection",
  component: RootPageSection,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Root page section component that displays a clickable card with an icon, title, and description. Features hover effects and responsive design that hides icons on smaller screens. Used for navigation sections on the homepage.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "The title of the section displayed prominently",
    },
    href: {
      control: "text",
      description: "The URL to navigate to when the section is clicked",
    },
    description: {
      control: "text",
      description: "Descriptive text explaining what the section contains",
    },
    iconFileName: {
      control: "text",
      description: "The filename of the icon to display (without extension)",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Blog",
    href: "/blog",
    description: "Read my latest thoughts on web development, technology, and programming",
    iconFileName: "blog",
  },
  parameters: {
    docs: {
      description: {
        story: "Default root page section showing a blog navigation card.",
      },
    },
  },
}

export const Projects: Story = {
  args: {
    title: "Projects",
    href: "/projects",
    description: "Explore my portfolio of web applications and development projects",
    iconFileName: "projects",
  },
  parameters: {
    docs: {
      description: {
        story: "Root page section for projects navigation.",
      },
    },
  },
}

export const About: Story = {
  args: {
    title: "About",
    href: "/about",
    description: "Learn more about my background, experience, and development journey",
    iconFileName: "about",
  },
  parameters: {
    docs: {
      description: {
        story: "Root page section for about page navigation.",
      },
    },
  },
}

export const Contact: Story = {
  args: {
    title: "Contact",
    href: "/contact",
    description: "Get in touch for collaboration opportunities or questions",
    iconFileName: "contact",
  },
  parameters: {
    docs: {
      description: {
        story: "Root page section for contact page navigation.",
      },
    },
  },
}

export const LongTitle: Story = {
  args: {
    title: "Technology Resources & Documentation",
    href: "/resources",
    description: "Comprehensive guides and documentation for various technologies",
    iconFileName: "resources",
  },
  parameters: {
    docs: {
      description: {
        story: "Root page section with a longer title to test text wrapping.",
      },
    },
  },
}

export const LongDescription: Story = {
  args: {
    title: "Tutorials",
    href: "/tutorials",
    description: "Step-by-step tutorials covering web development fundamentals, advanced React patterns, TypeScript best practices, and modern development workflows. Perfect for developers looking to expand their skillset.",
    iconFileName: "tutorials",
  },
  parameters: {
    docs: {
      description: {
        story: "Root page section with a longer description to test text wrapping and layout.",
      },
    },
  },
}

export const ShortContent: Story = {
  args: {
    title: "CV",
    href: "/cv",
    description: "My resume",
    iconFileName: "cv",
  },
  parameters: {
    docs: {
      description: {
        story: "Root page section with minimal content to test compact layout.",
      },
    },
  },
}

export const ExternalLink: Story = {
  args: {
    title: "GitHub",
    href: "https://github.com/username",
    description: "View my open source contributions and project repositories",
    iconFileName: "github",
  },
  parameters: {
    docs: {
      description: {
        story: "Root page section linking to an external URL.",
      },
    },
  },
}

export const Newsletter: Story = {
  args: {
    title: "Newsletter",
    href: "/newsletter",
    description: "Subscribe to my weekly newsletter for web development tips and industry insights",
    iconFileName: "newsletter",
  },
  parameters: {
    docs: {
      description: {
        story: "Root page section for newsletter subscription.",
      },
    },
  },
}

export const Archive: Story = {
  args: {
    title: "Archive",
    href: "/archive",
    description: "Browse through archived posts and projects from previous years",
    iconFileName: "archive",
  },
  parameters: {
    docs: {
      description: {
        story: "Root page section for archive navigation.",
      },
    },
  },
}