import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import SidebarOption from "./SidebarOption"
import sidebarReducer from "../../../redux/sidebarSlice"

const mockStore = configureStore({
  reducer: {
    nav: sidebarReducer,
  },
})

const meta: Meta<typeof SidebarOption> = {
  title: "Components/Layout/Sidebar/SidebarOption",
  component: SidebarOption,
  decorators: [
    (Story) => (
      <Provider store={mockStore}>
        <div style={{ width: "250px", padding: "16px", backgroundColor: "#f8f9fa" }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A clickable navigation option within the sidebar. Dispatches Redux action to close sidebar when clicked and navigates to the specified route.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    option: {
      control: "object",
      description: "Configuration object containing the option label and navigation target",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    option: {
      label: "Home",
      iconFileName: "home.svg",
      to: "/",
    },
  },
}

export const BlogOption: Story = {
  args: {
    option: {
      label: "Blog",
      iconFileName: "blog.svg",
      to: "/blog",
    },
  },
}

export const ProjectsOption: Story = {
  args: {
    option: {
      label: "Projects",
      iconFileName: "projects.svg",
      to: "/projects",
    },
  },
}

export const AboutOption: Story = {
  args: {
    option: {
      label: "About",
      iconFileName: "about.svg",
      to: "/about",
    },
  },
}

export const LongLabel: Story = {
  args: {
    option: {
      label: "Very Long Navigation Option Name",
      iconFileName: "home.svg",
      to: "/long-page",
    },
  },
}

export const MultipleOptions: Story = {
  decorators: [
    () => (
      <Provider store={mockStore}>
        <div style={{ width: "250px", padding: "16px", backgroundColor: "#f8f9fa" }}>
          <SidebarOption option={{ label: "Home", iconFileName: "home.svg", to: "/" }} />
          <SidebarOption option={{ label: "Blog", iconFileName: "blog.svg", to: "/blog" }} />
          <SidebarOption option={{ label: "Projects", iconFileName: "projects.svg", to: "/projects" }} />
          <SidebarOption option={{ label: "About", iconFileName: "about.svg", to: "/about" }} />
          <SidebarOption option={{ label: "Contact", iconFileName: "contact.svg", to: "/contact" }} />
        </div>
      </Provider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Multiple sidebar options displayed together to show how they appear in a list.",
      },
    },
  },
}

export const DarkTheme: Story = {
  args: {
    option: {
      label: "Dark Theme Example",
      iconFileName: "home.svg",
      to: "/dark",
    },
  },
  decorators: [
    (Story) => (
      <Provider store={mockStore}>
        <div style={{ width: "250px", padding: "16px", backgroundColor: "#343a40", color: "white" }}>
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
        story: "Sidebar option displayed on a dark background theme.",
      },
    },
  },
}