import React from "react"
import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { fn } from "storybook/test"
import { Category } from "./Category"

const meta: Meta<typeof Category> = {
  title: "Components/Shared/Category",
  component: Category,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A clickable category tag component with active and default states. Features hover effects, transition animations, and consistent styling for filtering or selection interfaces.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "The display text for the category tag",
    },
    isActive: {
      control: "boolean",
      description: "Whether the category is in active/selected state",
    },
    onClick: {
      action: "clicked",
      description: "Function called when the category is clicked",
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
    title: "Technology",
    isActive: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Default category state with hover effects and click handling.",
      },
    },
  },
}

export const Active: Story = {
  args: {
    title: "Technology",
    isActive: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Active category state showing selected styling with indigo colors.",
      },
    },
  },
}

export const LongTitle: Story = {
  args: {
    title: "Frontend Development",
    isActive: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Category with longer text to test layout with extended content.",
      },
    },
  },
}

export const LongTitleActive: Story = {
  args: {
    title: "Frontend Development",
    isActive: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Active category with longer text showing how active state handles extended content.",
      },
    },
  },
}

export const ShortTitle: Story = {
  args: {
    title: "JS",
    isActive: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Category with short title to test minimal content layout.",
      },
    },
  },
}

export const ShortTitleActive: Story = {
  args: {
    title: "JS",
    isActive: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Active category with short title showing active state with minimal content.",
      },
    },
  },
}

export const VeryLongTitle: Story = {
  args: {
    title: "Machine Learning and Artificial Intelligence",
    isActive: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Category with very long title to test text wrapping and layout behavior.",
      },
    },
  },
}

export const VeryLongTitleActive: Story = {
  args: {
    title: "Machine Learning and Artificial Intelligence",
    isActive: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Active category with very long title showing how active state handles text wrapping.",
      },
    },
  },
}

export const WithSpecialCharacters: Story = {
  args: {
    title: "C++ & .NET",
    isActive: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Category containing special characters and symbols.",
      },
    },
  },
}

export const WithNumbers: Story = {
  args: {
    title: "React 18",
    isActive: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Category with numbers in the title.",
      },
    },
  },
}

export const WithNumbersActive: Story = {
  args: {
    title: "React 18",
    isActive: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Active category with numbers showing selected state.",
      },
    },
  },
}

export const InteractiveExample: Story = {
  render: (args) => {
    const [isActive, setIsActive] = React.useState(args.isActive)

    return (
      <Category
        {...args}
        isActive={isActive}
        onClick={() => setIsActive(!isActive)}
      />
    )
  },
  args: {
    title: "Interactive Category",
    isActive: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive category that toggles between active and default states when clicked.",
      },
    },
  },
}

export const CategoryGroup: Story = {
  render: () => {
    const [activeCategory, setActiveCategory] = React.useState<string | null>("Frontend")

    const categories = ["Frontend", "Backend", "DevOps", "Mobile", "Data Science"]

    return (
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {categories.map((category) => (
          <Category
            key={category}
            title={category}
            isActive={activeCategory === category}
            onClick={() => setActiveCategory(category === activeCategory ? null : category)}
          />
        ))}
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Multiple categories working together as a filter group with single selection.",
      },
    },
  },
}

export const CategoryMultiSelect: Story = {
  render: () => {
    const [activeCategories, setActiveCategories] = React.useState<string[]>(["React", "TypeScript"])

    const categories = ["React", "TypeScript", "Node.js", "GraphQL", "MongoDB"]

    const toggleCategory = (category: string) => {
      setActiveCategories(prev =>
        prev.includes(category)
          ? prev.filter(c => c !== category)
          : [...prev, category]
      )
    }

    return (
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {categories.map((category) => (
          <Category
            key={category}
            title={category}
            isActive={activeCategories.includes(category)}
            onClick={() => toggleCategory(category)}
          />
        ))}
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Multiple categories with multi-selection capability showing typical tag filter behavior.",
      },
    },
  },
}

export const WithoutClickHandler: Story = {
  args: {
    title: "Read Only",
    isActive: false,
    onClick: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: "Category without click handler for display-only purposes.",
      },
    },
  },
}

export const WithoutClickHandlerActive: Story = {
  args: {
    title: "Read Only Active",
    isActive: true,
    onClick: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: "Active category without click handler for display-only purposes.",
      },
    },
  },
}