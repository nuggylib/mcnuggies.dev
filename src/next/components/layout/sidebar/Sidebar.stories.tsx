import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import Sidebar from "./Sidebar"
import sidebarReducer from "../../../redux/sidebarSlice"

// Create a mock store for Storybook
const mockStore = configureStore({
  reducer: {
    nav: sidebarReducer,
  },
})

// Create a store with sidebar open for specific stories
const mockStoreOpen = configureStore({
  reducer: {
    nav: sidebarReducer,
  },
  preloadedState: {
    nav: {
      showSidebar: true,
    },
  },
})

const meta: Meta<typeof Sidebar> = {
  title: "Components/Layout/Sidebar",
  component: Sidebar,
  decorators: [
    (Story) => (
      <Provider store={mockStore}>
        <div style={{ height: "100vh", position: "relative" }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "A navigation sidebar component that displays menu options. Uses Redux for managing open/closed state and includes click-outside functionality to close when open.",
      },
    },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Closed: Story = {
  parameters: {
    docs: {
      description: {
        story: "The sidebar in its default closed state.",
      },
    },
  },
}

export const Open: Story = {
  decorators: [
    (Story) => (
      <Provider store={mockStoreOpen}>
        <div style={{ height: "100vh", position: "relative" }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "The sidebar in its open state, showing all navigation options.",
      },
    },
  },
}

export const WithDarkBackground: Story = {
  decorators: [
    (Story) => (
      <Provider store={mockStoreOpen}>
        <div style={{ height: "100vh", position: "relative", backgroundColor: "#333" }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
  parameters: {
    backgrounds: {
      default: "dark",
    },
    docs: {
      description: {
        story: "The sidebar displayed on a dark background to show contrast and styling.",
      },
    },
  },
}

export const Interactive: Story = {
  decorators: [
    (Story) => (
      <Provider store={mockStore}>
        <div style={{ height: "100vh", position: "relative" }}>
          <Story />
          <div style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            padding: "10px",
            backgroundColor: "#f8f9fa",
            border: "1px solid #dee2e6",
            borderRadius: "4px"
          }}>
            <p style={{ margin: 0, fontSize: "14px" }}>
              Use the navbar menu button to toggle the sidebar. Click outside to close.
            </p>
          </div>
        </div>
      </Provider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Interactive version demonstrating the sidebar toggle functionality. The sidebar can be opened/closed and includes click-outside behavior.",
      },
    },
  },
}