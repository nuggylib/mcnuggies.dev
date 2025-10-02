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
