import React from "react"
import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { fn } from "storybook/test"
import CustomIcon from "./CustomIcon"

const meta: Meta<typeof CustomIcon> = {
  title: "Components/Shared/CustomIcon",
  component: CustomIcon,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A shared icon component for rendering SVG files from the icons directory. Supports custom sizing, styling, and click handling. The component automatically loads SVG files by name and provides error handling for missing icons.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    fileName: {
      control: "select",
      options: [
        "bootstrap-book",
        "bootstrap-card-list",
        "bootstrap-check-circle-filled",
        "bootstrap-chevron-left",
        "bootstrap-chevron-right",
        "bootstrap-emoji-frown",
        "bootstrap-filter",
        "bootstrap-hammer",
        "bootstrap-info-circle",
        "bootstrap-link-45deg",
        "bootstrap-list",
        "bootstrap-three-dots",
        "bootstrap-x-circle-filled",
        "bootstrap-x-large",
        "logo-cypress",
        "logo-eslint",
        "logo-github",
        "logo-linkedin",
        "logo-netlify-dark",
        "logo-netlify-light",
        "logo-react-bootstrap",
        "logo-redux",
        "logo-sanity",
        "logo-sass",
        "logo-vercel",
        "nextjs-icon-dark"
      ],
      description: "The name of the SVG file without the .svg extension",
    },
    height: {
      control: { type: "number", min: 16, max: 200, step: 1 },
      description: "Height of the icon in pixels",
    },
    width: {
      control: { type: "number", min: 16, max: 200, step: 1 },
      description: "Width of the icon in pixels",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the icon",
    },
    alt: {
      control: "text",
      description: "Alternative text for accessibility (used as title attribute)",
    },
    onClick: {
      action: "clicked",
      description: "Function called when the icon is clicked",
    },
  },
  args: {
    onClick: fn(),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    fileName: "bootstrap-info-circle",
    height: 24,
    width: 24,
    alt: "Information icon",
  },
  parameters: {
    docs: {
      description: {
        story: "Default icon with standard 24x24 size showing the info circle icon.",
      },
    },
  },
}

export const BootstrapIcons: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
      <CustomIcon fileName="bootstrap-book" height={32} width={32} alt="Book icon" />
      <CustomIcon fileName="bootstrap-card-list" height={32} width={32} alt="Card list icon" />
      <CustomIcon fileName="bootstrap-check-circle-filled" height={32} width={32} alt="Check circle icon" />
      <CustomIcon fileName="bootstrap-chevron-left" height={32} width={32} alt="Left chevron icon" />
      <CustomIcon fileName="bootstrap-chevron-right" height={32} width={32} alt="Right chevron icon" />
      <CustomIcon fileName="bootstrap-emoji-frown" height={32} width={32} alt="Frown emoji icon" />
      <CustomIcon fileName="bootstrap-filter" height={32} width={32} alt="Filter icon" />
      <CustomIcon fileName="bootstrap-hammer" height={32} width={32} alt="Hammer icon" />
      <CustomIcon fileName="bootstrap-info-circle" height={32} width={32} alt="Info circle icon" />
      <CustomIcon fileName="bootstrap-link-45deg" height={32} width={32} alt="Link icon" />
      <CustomIcon fileName="bootstrap-list" height={32} width={32} alt="List icon" />
      <CustomIcon fileName="bootstrap-three-dots" height={32} width={32} alt="Three dots icon" />
      <CustomIcon fileName="bootstrap-x-circle-filled" height={32} width={32} alt="X circle icon" />
      <CustomIcon fileName="bootstrap-x-large" height={32} width={32} alt="X large icon" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Collection of Bootstrap icons available in the project, all rendered at 32x32 size.",
      },
    },
  },
}

export const TechLogos: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
      <CustomIcon fileName="logo-cypress" height={40} width={40} alt="Cypress logo" />
      <CustomIcon fileName="logo-eslint" height={40} width={40} alt="ESLint logo" />
      <CustomIcon fileName="logo-github" height={40} width={40} alt="GitHub logo" />
      <CustomIcon fileName="logo-linkedin" height={40} width={40} alt="LinkedIn logo" />
      <CustomIcon fileName="logo-netlify-dark" height={40} width={40} alt="Netlify dark logo" />
      <CustomIcon fileName="logo-netlify-light" height={40} width={40} alt="Netlify light logo" />
      <CustomIcon fileName="logo-react-bootstrap" height={40} width={40} alt="React Bootstrap logo" />
      <CustomIcon fileName="logo-redux" height={40} width={40} alt="Redux logo" />
      <CustomIcon fileName="logo-sanity" height={40} width={40} alt="Sanity logo" />
      <CustomIcon fileName="logo-sass" height={40} width={40} alt="Sass logo" />
      <CustomIcon fileName="logo-vercel" height={40} width={40} alt="Vercel logo" />
      <CustomIcon fileName="nextjs-icon-dark" height={40} width={40} alt="Next.js logo" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Collection of technology and platform logos available in the project, rendered at 40x40 size.",
      },
    },
  },
}

export const SmallSize: Story = {
  args: {
    fileName: "bootstrap-check-circle-filled",
    height: 16,
    width: 16,
    alt: "Small check icon",
  },
  parameters: {
    docs: {
      description: {
        story: "Small 16x16 icon suitable for inline use or compact layouts.",
      },
    },
  },
}

export const MediumSize: Story = {
  args: {
    fileName: "bootstrap-info-circle",
    height: 32,
    width: 32,
    alt: "Medium info icon",
  },
  parameters: {
    docs: {
      description: {
        story: "Medium 32x32 icon for standard UI elements.",
      },
    },
  },
}

export const LargeSize: Story = {
  args: {
    fileName: "logo-react-bootstrap",
    height: 64,
    width: 64,
    alt: "Large React Bootstrap logo",
  },
  parameters: {
    docs: {
      description: {
        story: "Large 64x64 icon for prominent display or hero sections.",
      },
    },
  },
}

export const ExtraLargeSize: Story = {
  args: {
    fileName: "logo-github",
    height: 128,
    width: 128,
    alt: "Extra large GitHub logo",
  },
  parameters: {
    docs: {
      description: {
        story: "Extra large 128x128 icon for feature sections or landing pages.",
      },
    },
  },
}

export const WithCustomClassName: Story = {
  args: {
    fileName: "bootstrap-heart",
    height: 32,
    width: 32,
    className: "text-danger",
    alt: "Heart icon with red color",
  },
  parameters: {
    docs: {
      description: {
        story: "Icon with custom CSS class applied for styling (Bootstrap text-danger for red color).",
      },
    },
  },
}

export const ClickableIcon: Story = {
  args: {
    fileName: "bootstrap-x-large",
    height: 32,
    width: 32,
    alt: "Clickable close icon",
    onClick: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: "Clickable icon that prevents default event behavior and executes custom onClick handler.",
      },
    },
  },
}

export const InteractiveExample: Story = {
  render: (args) => {
    const [clicked, setClicked] = React.useState(false)

    return (
      <div style={{ textAlign: "center" }}>
        <CustomIcon
          {...args}
          onClick={() => {
            setClicked(!clicked)
            args.onClick?.()
          }}
        />
        <p style={{ marginTop: "8px", fontSize: "14px" }}>
          {clicked ? "Icon clicked!" : "Click the icon"}
        </p>
      </div>
    )
  },
  args: {
    fileName: "bootstrap-check-circle-filled",
    height: 48,
    width: 48,
    alt: "Interactive check icon",
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive icon that shows feedback when clicked, demonstrating the onClick functionality.",
      },
    },
  },
}

export const NavigationIcons: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center", justifyContent: "center" }}>
      <CustomIcon
        fileName="bootstrap-chevron-left"
        height={24}
        width={24}
        alt="Previous"
        onClick={fn()}
      />
      <span style={{ padding: "0 16px", fontSize: "16px" }}>Page Navigation</span>
      <CustomIcon
        fileName="bootstrap-chevron-right"
        height={24}
        width={24}
        alt="Next"
        onClick={fn()}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Navigation icons arranged as a typical pagination control with left and right chevrons.",
      },
    },
  },
}

export const StatusIcons: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <CustomIcon fileName="bootstrap-check-circle-filled" height={20} width={20} alt="Success" />
        <span>Success - Operation completed successfully</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <CustomIcon fileName="bootstrap-info-circle" height={20} width={20} alt="Info" />
        <span>Information - Additional details available</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <CustomIcon fileName="bootstrap-emoji-frown" height={20} width={20} alt="Error" />
        <span>Error - Something went wrong</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <CustomIcon fileName="bootstrap-x-circle-filled" height={20} width={20} alt="Warning" />
        <span>Warning - Please review your input</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Status icons used to convey different message types in UI feedback systems.",
      },
    },
  },
}

export const ActionIcons: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <div style={{ textAlign: "center" }}>
        <CustomIcon fileName="bootstrap-filter" height={24} width={24} alt="Filter" onClick={fn()} />
        <div style={{ fontSize: "12px", marginTop: "4px" }}>Filter</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <CustomIcon fileName="bootstrap-list" height={24} width={24} alt="List view" onClick={fn()} />
        <div style={{ fontSize: "12px", marginTop: "4px" }}>List</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <CustomIcon fileName="bootstrap-card-list" height={24} width={24} alt="Card view" onClick={fn()} />
        <div style={{ fontSize: "12px", marginTop: "4px" }}>Cards</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <CustomIcon fileName="bootstrap-three-dots" height={24} width={24} alt="More options" onClick={fn()} />
        <div style={{ fontSize: "12px", marginTop: "4px" }}>More</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Action icons arranged as a toolbar showing common UI controls with labels.",
      },
    },
  },
}

export const NonSquareIcon: Story = {
  args: {
    fileName: "logo-github",
    height: 32,
    width: 48,
    alt: "Stretched GitHub logo",
  },
  parameters: {
    docs: {
      description: {
        story: "Icon with different width and height values to show non-square sizing capability.",
      },
    },
  },
}

export const MissingIcon: Story = {
  args: {
    fileName: "nonexistent-icon",
    height: 32,
    width: 32,
    alt: "Missing icon",
  },
  parameters: {
    docs: {
      description: {
        story: "Icon with invalid fileName to demonstrate error handling behavior. Check browser console for error message.",
      },
    },
  },
}