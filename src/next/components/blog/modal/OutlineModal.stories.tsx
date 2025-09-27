import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { OutlineModal } from "./OutlineModal"
import { OutlineItem, SeriesOutlineItem } from "../../../pages/blog/[slug]"

const meta: Meta<typeof OutlineModal> = {
  title: "Blog/Modal/OutlineModal",
  component: OutlineModal,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "A modal component that displays article outlines. Can show either a single article outline or a series outline with multiple articles.",
      },
    },
  },
  argTypes: {
    items: {
      description: "Outline items for the current article",
      control: { type: "object" },
    },
    seriesOutline: {
      description: "Array of series articles when this article is part of a series",
      control: { type: "object" },
    },
    isOpen: {
      description: "Controls whether the modal is visible",
      control: { type: "boolean" },
    },
    onClose: {
      description: "Callback function called when the modal should be closed",
      action: "closed",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Sample outline items for stories
const sampleOutlineItems: { [index: number]: OutlineItem } = {
  0: {
    label: "Introduction",
    href: "#introduction",
    children: {
      0: {
        label: "Overview",
        href: "#overview",
      },
      1: {
        label: "Getting Started",
        href: "#getting-started",
      },
    },
  },
  1: {
    label: "Main Content",
    href: "#main-content",
    children: {
      0: {
        label: "Core Concepts",
        href: "#core-concepts",
        children: {
          0: {
            label: "Basic Principles",
            href: "#basic-principles",
          },
          1: {
            label: "Advanced Topics",
            href: "#advanced-topics",
          },
        },
      },
      1: {
        label: "Implementation",
        href: "#implementation",
      },
    },
  },
  2: {
    label: "Conclusion",
    href: "#conclusion",
  },
}

const sampleSeriesOutline: SeriesOutlineItem[] = [
  {
    title: "Part 1: Introduction to React",
    slug: "/blog/react-series-part-1",
    href: "/blog/react-series-part-1",
    index: 1,
    isCurrent: false,
  },
  {
    title: "Part 2: Components and Props",
    slug: "/blog/react-series-part-2",
    href: "/blog/react-series-part-2",
    index: 2,
    isCurrent: true,
  },
  {
    title: "Part 3: State and Lifecycle",
    slug: "/blog/react-series-part-3",
    href: "/blog/react-series-part-3",
    index: 3,
    isCurrent: false,
  },
]

const simpleOutlineItems: { [index: number]: OutlineItem } = {
  0: {
    label: "Quick Start",
    href: "#quick-start",
  },
  1: {
    label: "Configuration",
    href: "#configuration",
  },
  2: {
    label: "Examples",
    href: "#examples",
  },
}

export const Default: Story = {
  args: {
    items: sampleOutlineItems,
    isOpen: true,
    onClose: () => console.log("Modal closed"),
  },
}

export const Closed: Story = {
  args: {
    items: sampleOutlineItems,
    isOpen: false,
    onClose: () => console.log("Modal closed"),
  },
}

export const SimpleOutline: Story = {
  args: {
    items: simpleOutlineItems,
    isOpen: true,
    onClose: () => console.log("Modal closed"),
  },
  parameters: {
    docs: {
      description: {
        story: "A simple outline with no nested items.",
      },
    },
  },
}

export const SeriesOutline: Story = {
  args: {
    items: sampleOutlineItems,
    seriesOutline: sampleSeriesOutline,
    isOpen: true,
    onClose: () => console.log("Modal closed"),
  },
  parameters: {
    docs: {
      description: {
        story: "An outline for an article that is part of a series. Shows the series navigation with the current article expanded.",
      },
    },
  },
}

export const EmptyOutline: Story = {
  args: {
    items: {},
    isOpen: true,
    onClose: () => console.log("Modal closed"),
  },
  parameters: {
    docs: {
      description: {
        story: "An outline modal with no items to display.",
      },
    },
  },
}

export const SingleSeriesArticle: Story = {
  args: {
    items: simpleOutlineItems,
    seriesOutline: [
      {
        title: "Standalone Article in Series",
        slug: "/blog/standalone-article",
        href: "/blog/standalone-article",
        index: 1,
        isCurrent: true,
      },
    ],
    isOpen: true,
    onClose: () => console.log("Modal closed"),
  },
  parameters: {
    docs: {
      description: {
        story: "A series with only one article (the current one).",
      },
    },
  },
}

export const LargeSeriesOutline: Story = {
  args: {
    items: sampleOutlineItems,
    seriesOutline: [
      {
        title: "Part 1: Getting Started with TypeScript",
        slug: "/blog/typescript-series-part-1",
        href: "/blog/typescript-series-part-1",
        index: 1,
        isCurrent: false,
      },
      {
        title: "Part 2: Basic Types and Interfaces",
        slug: "/blog/typescript-series-part-2",
        href: "/blog/typescript-series-part-2",
        index: 2,
        isCurrent: false,
      },
      {
        title: "Part 3: Advanced Types and Generics",
        slug: "/blog/typescript-series-part-3",
        href: "/blog/typescript-series-part-3",
        index: 3,
        isCurrent: true,
      },
      {
        title: "Part 4: Decorators and Metadata",
        slug: "/blog/typescript-series-part-4",
        href: "/blog/typescript-series-part-4",
        index: 4,
        isCurrent: false,
      },
      {
        title: "Part 5: Module Systems and Namespaces",
        slug: "/blog/typescript-series-part-5",
        href: "/blog/typescript-series-part-5",
        index: 5,
        isCurrent: false,
      },
    ],
    isOpen: true,
    onClose: () => console.log("Modal closed"),
  },
  parameters: {
    docs: {
      description: {
        story: "A larger series with multiple articles to test scrolling and layout.",
      },
    },
  },
}

export const DeepNestedOutline: Story = {
  args: {
    items: {
      0: {
        label: "Chapter 1: Fundamentals",
        href: "#chapter-1",
        children: {
          0: {
            label: "1.1 Introduction",
            href: "#section-1-1",
            children: {
              0: {
                label: "1.1.1 What is Programming?",
                href: "#subsection-1-1-1",
                children: {
                  0: {
                    label: "1.1.1.1 History",
                    href: "#subsubsection-1-1-1-1",
                  },
                  1: {
                    label: "1.1.1.2 Modern Context",
                    href: "#subsubsection-1-1-1-2",
                  },
                },
              },
              1: {
                label: "1.1.2 Why Learn Programming?",
                href: "#subsection-1-1-2",
              },
            },
          },
          1: {
            label: "1.2 Setting Up",
            href: "#section-1-2",
          },
        },
      },
      1: {
        label: "Chapter 2: Advanced Topics",
        href: "#chapter-2",
      },
    },
    isOpen: true,
    onClose: () => console.log("Modal closed"),
  },
  parameters: {
    docs: {
      description: {
        story: "An outline with deeply nested items to test the recursive outline generation.",
      },
    },
  },
}