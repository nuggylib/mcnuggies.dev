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

export const Closed: Story = {
  args: {
    title: "Closed Modal",
    isOpen: false,
    children: "This content won't be visible when the modal is closed.",
  },
  parameters: {
    docs: {
      description: {
        story: "Modal in the closed state. The modal will be hidden from view.",
      },
    },
  },
}

export const LongTitle: Story = {
  args: {
    title: "This is a Very Long Modal Title That Demonstrates How the Component Handles Extended Header Text",
    isOpen: true,
    children: "Modal content with a long title to test header text wrapping.",
  },
  parameters: {
    docs: {
      description: {
        story: "Modal with a long title to test header text handling and layout behavior.",
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

export const WithList: Story = {
  args: {
    title: "Feature List",
    isOpen: true,
    children: (
      <div style={{ padding: "20px" }}>
        <h3>Available Features:</h3>
        <ul>
          <li>User authentication</li>
          <li>Data visualization</li>
          <li>Real-time notifications</li>
          <li>Export functionality</li>
          <li>Mobile responsive design</li>
        </ul>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Modal displaying a list of features with structured content.",
      },
    },
  },
}

export const ConfirmationDialog: Story = {
  args: {
    title: "Confirm Action",
    isOpen: true,
    children: (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <p>Are you sure you want to delete this item? This action cannot be undone.</p>
        <div style={{ marginTop: "20px" }}>
          <button
            style={{
              padding: "10px 20px",
              marginRight: "10px",
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              borderRadius: "4px"
            }}
          >
            Delete
          </button>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#6c757d",
              color: "white",
              border: "none",
              borderRadius: "4px"
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Modal used as a confirmation dialog with action buttons.",
      },
    },
  },
}

export const ImageGallery: Story = {
  args: {
    title: "Image Gallery",
    isOpen: true,
    children: (
      <div style={{ padding: "20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
          <div style={{ backgroundColor: "#f8f9fa", height: "150px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            Image 1
          </div>
          <div style={{ backgroundColor: "#f8f9fa", height: "150px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            Image 2
          </div>
          <div style={{ backgroundColor: "#f8f9fa", height: "150px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            Image 3
          </div>
          <div style={{ backgroundColor: "#f8f9fa", height: "150px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            Image 4
          </div>
        </div>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Modal displaying an image gallery with grid layout.",
      },
    },
  },
}

export const WithScrollableContent: Story = {
  args: {
    title: "Terms and Conditions",
    isOpen: true,
    children: (
      <div style={{ padding: "20px", maxHeight: "400px", overflowY: "auto" }}>
        <h4>1. Acceptance of Terms</h4>
        <p>By accessing and using this service, you accept and agree to be bound by the terms and provision of this agreement.</p>

        <h4>2. Use License</h4>
        <p>Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.</p>

        <h4>3. Disclaimer</h4>
        <p>The materials on our website are provided on an &apos;as is&apos; basis. We make no warranties, expressed or implied.</p>

        <h4>4. Limitations</h4>
        <p>In no event shall our company or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.</p>

        <h4>5. Accuracy of Materials</h4>
        <p>The materials appearing on our website could include technical, typographical, or photographic errors.</p>

        <h4>6. Links</h4>
        <p>We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site.</p>

        <h4>7. Modifications</h4>
        <p>We may revise these terms of service for its website at any time without notice.</p>

        <h4>8. Governing Law</h4>
        <p>These terms and conditions are governed by and construed in accordance with the laws.</p>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Modal with scrollable content for lengthy text like terms and conditions.",
      },
    },
  },
}

export const SuccessMessage: Story = {
  args: {
    title: "Success!",
    isOpen: true,
    children: (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <div style={{ fontSize: "48px", color: "#28a745", marginBottom: "15px" }}>✓</div>
        <p>Your action was completed successfully!</p>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
            marginTop: "15px"
          }}
        >
          Continue
        </button>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Modal displaying a success message with visual feedback.",
      },
    },
  },
}

export const ErrorMessage: Story = {
  args: {
    title: "Error",
    isOpen: true,
    children: (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <div style={{ fontSize: "48px", color: "#dc3545", marginBottom: "15px" }}>✗</div>
        <p>Something went wrong. Please try again later.</p>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "4px",
            marginTop: "15px"
          }}
        >
          Retry
        </button>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Modal displaying an error message with retry option.",
      },
    },
  },
}

export const SimpleText: Story = {
  args: {
    title: "Information",
    isOpen: true,
    children: "This is a simple modal with just text content.",
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal modal with just a title and simple text content.",
      },
    },
  },
}

export const EmptyContent: Story = {
  args: {
    title: "Empty Modal",
    isOpen: true,
    children: null,
  },
  parameters: {
    docs: {
      description: {
        story: "Modal with no content to test empty state handling.",
      },
    },
  },
}