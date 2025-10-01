import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { fn } from "storybook/test"
import { Modal } from "./Modal"

const meta: Meta<typeof Modal> = {
  title: "Components/Shared/Modal/Modal",
  component: Modal,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "A modal dialog component that displays content in an overlay. Features a customizable title, close button, and can contain any child content. The modal can be opened or closed via the isOpen prop.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "The title displayed in the modal header",
    },
    isOpen: {
      control: "boolean",
      description: "Controls whether the modal is visible or hidden",
    },
    onClose: {
      description: "Callback function triggered when the close button is clicked",
    },
    children: {
      control: "text",
      description: "Content to display inside the modal body",
    },
  },
  args: {
    onClose: fn(),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Default Modal",
    isOpen: true,
    children: "This is the default modal content.",
  },
  parameters: {
    docs: {
      description: {
        story: "Basic modal with a title and simple text content in the open state.",
      },
    },
  },
}

export const WithForm: Story = {
  args: {
    title: "Contact Form",
    isOpen: true,
    children: (
      <form style={{ padding: "20px" }}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="name" style={{ display: "block", marginBottom: "5px" }}>Name:</label>
          <input id="name" type="text" style={{ width: "100%", padding: "8px" }} />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>Email:</label>
          <input id="email" type="email" style={{ width: "100%", padding: "8px" }} />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="message" style={{ display: "block", marginBottom: "5px" }}>Message:</label>
          <textarea id="message" rows={4} style={{ width: "100%", padding: "8px" }} />
        </div>
        <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px" }}>
          Submit
        </button>
      </form>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Modal containing a contact form with input fields and submit button.",
      },
    },
  },
}
