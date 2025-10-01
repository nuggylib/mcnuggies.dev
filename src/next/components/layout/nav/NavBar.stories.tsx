import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import SiteNavigation from "./NavBar"
import sidebarReducer from "../../../redux/sidebarSlice"

// Create a mock store for Storybook
const mockStore = configureStore({
  reducer: {
    nav: sidebarReducer,
  },
})

const meta: Meta<typeof SiteNavigation> = {
  title: "Components/Layout/NavBar",
  component: SiteNavigation,
  decorators: [
    (Story) => (
      <Provider store={mockStore}>
        <Story />
      </Provider>
    ),
  ],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "The main navigation bar component that displays the menu toggle button and site logo. Uses Redux for sidebar state management.",
      },
    },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "The default navigation bar with menu button and logo.",
      },
    },
  },
}

export const Interactive: Story = {
  play: async () => {
    // This story demonstrates the interactive behavior
    // The menu button should toggle the sidebar when clicked
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive version showing the navigation bar with clickable menu button.",
      },
    },
  },
}

export const DarkNavbar: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
    docs: {
      description: {
        story: "Navigation bar displayed on a dark background to show the dark variant styling.",
      },
    },
  },
}