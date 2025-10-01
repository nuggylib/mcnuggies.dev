import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { PageLayout } from "./PageLayout"
import sidebarReducer from "../../redux/sidebarSlice"

// Create a mock store for Storybook
const mockStore = configureStore({
  reducer: {
    nav: sidebarReducer,
  },
})

const meta: Meta<typeof PageLayout> = {
  title: "Components/Layout/PageLayout",
  component: PageLayout,
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
        component: "The main page layout component that wraps all pages. Includes navigation, sidebar, optional hero image, and the main content area. Uses Redux for sidebar state management.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    pageTitle: {
      control: "text",
      description: "The title for the page (used in HTML head and hero overlay if enabled)",
    },
    useTitleOverlay: {
      control: "boolean",
      description: "Whether to show the page title as an overlay on the hero image",
    },
    metaDescription: {
      control: "text",
      description: "The meta description for the page (used in HTML head)",
    },
    imgSrc: {
      control: "text",
      description: "The source URL for the hero image (optional)",
    },
    children: {
      control: false,
      description: "The main content to render inside the page layout",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Sample content for stories
const SampleContent = () => (
  <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
    <h1>Sample Page Content</h1>
    <p>
      This is sample content to demonstrate the page layout. The layout includes
      a navigation bar, sidebar, optional hero image, and this main content area.
    </p>
    <h2>Features</h2>
    <ul>
      <li>Responsive navigation</li>
      <li>Collapsible sidebar</li>
      <li>Optional hero image with title overlay</li>
      <li>SEO-friendly meta tags</li>
    </ul>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris.
    </p>
  </div>
)

const BlogContent = () => (
  <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
    <article>
      <h1>Understanding React Hooks</h1>
      <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
        Published on March 15, 2024 • 5 min read
      </p>
      <p>
        React Hooks have revolutionized how we write functional components in React.
        They allow us to use state and other React features without writing a class.
      </p>
      <h2>What are Hooks?</h2>
      <p>
        Hooks are functions that let you &quot;hook into&quot; React state and lifecycle
        features from function components. They don&apos;t work inside classes.
      </p>
      <h2>Common Hooks</h2>
      <ul>
        <li><strong>useState</strong> - Adds state to functional components</li>
        <li><strong>useEffect</strong> - Performs side effects</li>
        <li><strong>useContext</strong> - Consumes context values</li>
      </ul>
    </article>
  </div>
)

const ProjectsContent = () => (
  <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
    <h1>My Projects</h1>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginTop: "2rem" }}>
      <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "1.5rem" }}>
        <h3>Project Alpha</h3>
        <p>A React-based web application for managing tasks and productivity.</p>
        <div style={{ marginTop: "1rem" }}>
          <span style={{ background: "#e3f2fd", color: "#1976d2", padding: "0.25rem 0.5rem", borderRadius: "4px", fontSize: "0.8rem", marginRight: "0.5rem" }}>React</span>
          <span style={{ background: "#e8f5e8", color: "#2e7d32", padding: "0.25rem 0.5rem", borderRadius: "4px", fontSize: "0.8rem" }}>TypeScript</span>
        </div>
      </div>
      <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "1.5rem" }}>
        <h3>Project Beta</h3>
        <p>An API service built with Node.js for handling user authentication.</p>
        <div style={{ marginTop: "1rem" }}>
          <span style={{ background: "#fff3e0", color: "#f57c00", padding: "0.25rem 0.5rem", borderRadius: "4px", fontSize: "0.8rem", marginRight: "0.5rem" }}>Node.js</span>
          <span style={{ background: "#fce4ec", color: "#c2185b", padding: "0.25rem 0.5rem", borderRadius: "4px", fontSize: "0.8rem" }}>MongoDB</span>
        </div>
      </div>
    </div>
  </div>
)

export const Default: Story = {
  args: {
    pageTitle: "Welcome",
    useTitleOverlay: false,
    metaDescription: "Welcome to my personal blog and portfolio site",
    children: <SampleContent />,
  },
  parameters: {
    docs: {
      description: {
        story: "The basic page layout without a hero image, showing just the navigation, sidebar, and content.",
      },
    },
  },
}

export const WithHeroImage: Story = {
  args: {
    pageTitle: "About Me",
    useTitleOverlay: true,
    metaDescription: "Learn more about my background, skills, and experience",
    imgSrc: "/about.jpg",
    children: <SampleContent />,
  },
  parameters: {
    docs: {
      description: {
        story: "Page layout with a hero image and title overlay enabled.",
      },
    },
  },
}

export const BlogPost: Story = {
  args: {
    pageTitle: "Blog",
    useTitleOverlay: true,
    metaDescription: "Read my latest thoughts on web development, React, and technology",
    imgSrc: "/generic-blog.jpeg",
    children: <BlogContent />,
  },
  parameters: {
    docs: {
      description: {
        story: "Example of a blog post page with hero image and article content.",
      },
    },
  },
}

export const ProjectsPage: Story = {
  args: {
    pageTitle: "My Projects",
    useTitleOverlay: true,
    metaDescription: "Explore my portfolio of web development projects and applications",
    imgSrc: "/building-blocks.jpg",
    children: <ProjectsContent />,
  },
  parameters: {
    docs: {
      description: {
        story: "Example of a projects portfolio page with grid layout and project cards.",
      },
    },
  },
}

export const WithoutHeroButWithTitle: Story = {
  args: {
    pageTitle: "Contact",
    useTitleOverlay: false,
    metaDescription: "Get in touch with me for collaborations and opportunities",
    children: <SampleContent />,
  },
  parameters: {
    docs: {
      description: {
        story: "Page layout where a title is provided but no hero image is used.",
      },
    },
  },
}

export const HeroWithoutTitleOverlay: Story = {
  args: {
    pageTitle: "Gallery",
    useTitleOverlay: false,
    metaDescription: "A collection of my photography and visual work",
    imgSrc: "/demo/carousel/carousel-1.jpg",
    children: <SampleContent />,
  },
  parameters: {
    docs: {
      description: {
        story: "Page layout with hero image but no title overlay, letting the image stand alone.",
      },
    },
  },
}

export const LongContent: Story = {
  args: {
    pageTitle: "Long Article",
    useTitleOverlay: true,
    metaDescription: "A comprehensive guide to modern web development practices",
    imgSrc: "/generic-blog.jpeg",
    children: (
      <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <h1>A Comprehensive Guide to Modern Web Development</h1>
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} style={{ marginBottom: "2rem" }}>
            <h2>Section {i + 1}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
              omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </p>
          </div>
        ))}
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Example with very long content to test scrolling behavior and layout stability.",
      },
    },
  },
}
