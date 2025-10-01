import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import Custom404 from "../pages/404"
import sidebarReducer from "../redux/sidebarSlice"

// Create a mock store for Storybook
const mockStore = configureStore({
  reducer: {
    nav: sidebarReducer,
  },
})

const meta: Meta<typeof Custom404> = {
  title: "Pages/404",
  component: Custom404,
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
        component: "The 404 error page displayed when a user navigates to a non-existent route. Features the McNuggies mascot image and a clean, centered layout within the PageLayout component.",
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
        story: "The default 404 page with the McNuggies mascot image and error message.",
      },
    },
  },
}