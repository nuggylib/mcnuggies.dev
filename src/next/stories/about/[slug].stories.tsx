import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import AboutCreatorPage from "../../pages/about/[slug]"
import sidebarReducer from "../../redux/sidebarSlice"

// Create a mock store for Storybook
const mockStore = configureStore({
  reducer: {
    nav: sidebarReducer,
  },
})

// Mock creator data
const mockCreator = {
  _id: "creator-1",
  _type: "creator" as const,
  _createdAt: "2024-01-01T00:00:00Z",
  _updatedAt: "2024-01-01T00:00:00Z",
  _rev: "1",
  name: "Larah Vasquez",
  imageUrl: "https://via.placeholder.com/300x400/007acc/ffffff?text=Creator",
  imageBase64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=",
  email: "larah@mcnuggies.dev",
  githubUrl: "https://github.com/armstrongl",
  githubUsername: "armstrongl",
  linkedInUrl: "https://linkedin.com/in/larahvasquez",
  linkedInUsername: "larahvasquez",
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
          text: "Software engineer with 8 years of experience building scalable web applications and solving complex technical challenges.",
        },
      ],
    },
  ],
  careerStartDate: "2017-01-01",
}

// Mock employer data
const mockEmployers = [
  {
    _id: "employer-1",
    _type: "employer" as const,
    _createdAt: "2024-01-01T00:00:00Z",
    _updatedAt: "2024-01-01T00:00:00Z",
    _rev: "1",
    name: "Tech Company Inc",
    homePage: "https://example.com",
    startDate: "2020-01-01",
    endDate: undefined,
    imageUrl: "https://via.placeholder.com/100x100/4a5568/ffffff?text=TC",
    jobs: [
      {
        _id: "job-1",
        _type: "jobTitle" as const,
        _createdAt: "2024-01-01T00:00:00Z",
        _updatedAt: "2024-01-01T00:00:00Z",
        _rev: "1",
        title: "Senior Software Engineer",
        startDate: "2020-01-01",
        endDate: undefined,
      },
    ],
  },
]

const meta: Meta<typeof AboutCreatorPage> = {
  title: "Pages/About/Creator",
  component: AboutCreatorPage,
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
        component:
          "The About Creator page displays detailed information about a specific creator, including their bio, social links, writing samples, GitHub activity, and work history. This page is optimized for mobile viewing with responsive text sizing and spacing.",
      },
    },
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    creators: [mockCreator],
    employers: mockEmployers,
    writingSamplesCount: 5,
    creatorSlug: "larah-vasquez",
  },
  parameters: {
    docs: {
      description: {
        story:
          "The default creator page showing all information including social links, bio, GitHub activity, and work history. The social links are properly spaced in mobile view.",
      },
    },
  },
}

export const MobileView: Story = {
  args: {
    creators: [mockCreator],
    employers: mockEmployers,
    writingSamplesCount: 5,
    creatorSlug: "larah-vasquez",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story:
          "Mobile view of the creator page demonstrating responsive spacing and font sizing for social links. Text is dynamically sized to fit cleanly with proper margins between items.",
      },
    },
  },
}

export const WithWritingSamples: Story = {
  args: {
    creators: [mockCreator],
    employers: mockEmployers,
    writingSamplesCount: 12,
    creatorSlug: "larah-vasquez",
  },
  parameters: {
    docs: {
      description: {
        story: "Creator page with writing samples link displayed in the social links section.",
      },
    },
  },
}

export const WithoutGitHub: Story = {
  args: {
    creators: [
      {
        ...mockCreator,
        githubUrl: undefined,
        githubUsername: undefined,
      },
    ],
    employers: mockEmployers,
    writingSamplesCount: 0,
    creatorSlug: "larah-vasquez",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Creator page without GitHub information - no GitHub link or activity calendar displayed.",
      },
    },
  },
}

export const MinimalSocialLinks: Story = {
  args: {
    creators: [
      {
        ...mockCreator,
        githubUrl: undefined,
        githubUsername: undefined,
        linkedInUrl: undefined,
        linkedInUsername: undefined,
      },
    ],
    employers: mockEmployers,
    writingSamplesCount: 0,
    creatorSlug: "larah-vasquez",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story: "Mobile view with minimal social links (only email and experience) to demonstrate spacing.",
      },
    },
  },
}
