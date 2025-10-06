import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import About from "../pages/about"
import sidebarReducer from "../redux/sidebarSlice"

// Create a mock store for Storybook
const mockStore = configureStore({
  reducer: {
    nav: sidebarReducer,
  },
})

// Mock data for stories
const mockCreator = {
  _id: "creator-1",
  _type: "creator" as const,
  _createdAt: "2024-01-01T00:00:00Z",
  _updatedAt: "2024-01-01T00:00:00Z",
  _rev: "1",
  name: "Armando Vasquez",
  imageUrl: "https://via.placeholder.com/300x400/007acc/ffffff?text=Creator",
  imageBase64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=",
  githubUrl: "https://github.com/example",
  linkedInUrl: "https://linkedin.com/in/example",
  bio: [
    {
      _key: "bio-1",
      _type: "block",
      style: "normal",
      markDefs: [],
      children: [
        {
          _key: "bio-child-1",
          _type: "span",
          marks: [],
          text: "Software engineer with a passion for building great user experiences and solving complex problems.",
        },
      ],
    },
  ],
  careerStartDate: "2015-01-01",
  profession: "Software Engineer",
  githubUsername: "example-user",
}

const meta: Meta<typeof About> = {
  title: "Pages/About",
  component: About,
  decorators: [
    (Story) => (
      <Provider store={mockStore}>
        <div style={{ minHeight: "100vh" }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
  argTypes: {
    creators: {
      description: "Array of creator data from Sanity CMS",
      control: { type: "object" },
    },
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "The About page displays information about the site creator, including bio, work history, social links, and GitHub activity calendar. It showcases the creator's professional background and experience.",
      },
    },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    creators: [mockCreator],
  },
  parameters: {
    docs: {
      description: {
        story: "The default About page showing creator information, bio, work history, and GitHub activity calendar.",
      },
    },
  },
}

export const WithoutGitHubUsername: Story = {
  args: {
    creators: [{ ...mockCreator, githubUsername: undefined }],
  },
  parameters: {
    docs: {
      description: {
        story: "About page without GitHub username - the GitHub activity calendar will not be displayed.",
      },
    },
  },
}

export const EmptyWorkHistory: Story = {
  args: {
    creators: [mockCreator],
  },
  parameters: {
    docs: {
      description: {
        story: "About page with no work history - only creator information and bio are displayed.",
      },
    },
  },
}

export const LongBio: Story = {
  args: {
    creators: [
      {
        ...mockCreator,
        bio: [
          {
            _key: "longbio-1",
            _type: "block",
            style: "normal",
            markDefs: [],
            children: [
              {
                _key: "longbio-child-1",
                _type: "span",
                marks: [],
                text: "I'm a passionate software engineer with over 8 years of experience building scalable web applications and solving complex technical challenges. My journey in technology started with a curiosity about how things work under the hood, which led me to pursue a career in software development.",
              },
            ],
          },
          {
            _key: "longbio-2",
            _type: "block",
            style: "normal",
            markDefs: [],
            children: [
              {
                _key: "longbio-child-2",
                _type: "span",
                marks: [],
                text: "Throughout my career, I've worked with various technologies including React, Node.js, Python, and cloud platforms like AWS and Azure. I believe in writing clean, maintainable code and am always eager to learn new technologies and methodologies.",
              },
            ],
          },
          {
            _key: "longbio-3",
            _type: "block",
            style: "normal",
            markDefs: [],
            children: [
              {
                _key: "longbio-child-3",
                _type: "span",
                marks: [],
                text: "When I'm not coding, you can find me contributing to open source projects, writing technical blog posts, or exploring the latest trends in software architecture and development practices.",
              },
            ],
          },
        ],
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "About page with a longer, multi-paragraph bio demonstrating how the PortableText component renders structured content.",
      },
    },
  },
}