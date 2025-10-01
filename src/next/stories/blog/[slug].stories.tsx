import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import BlogPost from "../../pages/blog/[slug]"
import { OutlineItem, SeriesOutlineItem } from "../../pages/blog/[slug]"
import { Article } from "../../types/sanity"
import sidebarReducer from "../../redux/sidebarSlice"

// Create a mock store for Storybook
const mockStore = configureStore({
  reducer: {
    nav: sidebarReducer,
  },
})

const meta: Meta<typeof BlogPost> = {
  title: "Pages/Blog/BlogPost",
  component: BlogPost,
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
        component: "A dynamic blog post page that displays article content with portable text rendering, outline navigation, and series support. Uses PageLayout for consistent styling and includes an outline modal for navigation.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    article: {
      description: "The article data with extended properties for display",
      control: { type: "object" },
    },
    outlineItems: {
      description: "Nested outline items generated from article headings",
      control: { type: "object" },
    },
    seriesArticlesOutline: {
      description: "Array of articles in the same series (if applicable)",
      control: { type: "object" },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Sample article data
const sampleArticle: Article & {
  imageUrl?: string
  seriesTitle?: string
  authorName?: string
} = {
  _id: "sample-article-1",
  _type: "article",
  _createdAt: "2024-01-15T10:00:00Z",
  _updatedAt: "2024-01-15T10:00:00Z",
  _rev: "1",
  title: "Getting Started with React Hooks",
  slug: { _type: "slug", current: "getting-started-react-hooks" },
  publishDate: "January 15, 2024",
  authorName: "John Doe",
  imageUrl: "/generic-blog.jpeg",
  summary: [
    {
      _key: "summary-1",
      _type: "block",
      style: "normal",
      markDefs: [],
      children: [
        {
          _key: "child-1",
          _type: "span",
          marks: [],
          text: "Learn the fundamentals of React Hooks and how they can transform your functional components."
        }
      ]
    }
  ],
  body: [
    {
      _key: "intro-block",
      _type: "block",
      style: "normal",
      markDefs: [],
      children: [
        {
          _key: "intro-text",
          _type: "span",
          marks: [],
          text: "React Hooks revolutionized how we write React components by allowing us to use state and other React features in functional components. In this comprehensive guide, we'll explore the most commonly used hooks and learn how to implement them effectively."
        }
      ]
    },
    {
      _key: "useState-heading",
      _type: "block",
      style: "h2",
      markDefs: [],
      children: [
        {
          _key: "useState-heading-text",
          _type: "span",
          marks: [],
          text: "Understanding useState"
        }
      ]
    },
    {
      _key: "useState-content",
      _type: "block",
      style: "normal",
      markDefs: [],
      children: [
        {
          _key: "useState-text",
          _type: "span",
          marks: [],
          text: "The useState hook allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update it."
        }
      ]
    },
    {
      _key: "useState-example",
      _type: "code",
      language: "javascript",
      code: `const [count, setCount] = useState(0);

function incrementCount() {
  setCount(count + 1);
}`
    },
    {
      _key: "useEffect-heading",
      _type: "block",
      style: "h2",
      markDefs: [],
      children: [
        {
          _key: "useEffect-heading-text",
          _type: "span",
          marks: [],
          text: "Working with useEffect"
        }
      ]
    },
    {
      _key: "useEffect-basics",
      _type: "block",
      style: "h3",
      markDefs: [],
      children: [
        {
          _key: "useEffect-basics-text",
          _type: "span",
          marks: [],
          text: "Basic Side Effects"
        }
      ]
    },
    {
      _key: "useEffect-content",
      _type: "block",
      style: "normal",
      markDefs: [],
      children: [
        {
          _key: "useEffect-text",
          _type: "span",
          marks: [],
          text: "The useEffect hook lets you perform side effects in functional components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount combined."
        }
      ]
    },
    {
      _key: "cleanup-heading",
      _type: "block",
      style: "h3",
      markDefs: [],
      children: [
        {
          _key: "cleanup-heading-text",
          _type: "span",
          marks: [],
          text: "Cleanup Functions"
        }
      ]
    },
    {
      _key: "cleanup-content",
      _type: "block",
      style: "normal",
      markDefs: [],
      children: [
        {
          _key: "cleanup-text",
          _type: "span",
          marks: [],
          text: "Always remember to clean up your effects to prevent memory leaks, especially when dealing with subscriptions or timers."
        }
      ]
    },
    {
      _key: "advanced-heading",
      _type: "block",
      style: "h2",
      markDefs: [],
      children: [
        {
          _key: "advanced-heading-text",
          _type: "span",
          marks: [],
          text: "Advanced Patterns"
        }
      ]
    },
    {
      _key: "custom-hooks",
      _type: "block",
      style: "h3",
      markDefs: [],
      children: [
        {
          _key: "custom-hooks-text",
          _type: "span",
          marks: [],
          text: "Building Custom Hooks"
        }
      ]
    },
    {
      _key: "custom-hooks-content",
      _type: "block",
      style: "normal",
      markDefs: [],
      children: [
        {
          _key: "custom-hooks-content-text",
          _type: "span",
          marks: [],
          text: "Custom hooks allow you to extract component logic into reusable functions, making your code more modular and easier to test."
        }
      ]
    }
  ]
}

const sampleOutlineItems: { [index: number]: OutlineItem } = {
  0: {
    label: "Understanding useState",
    href: "#understanding-usestate",
  },
  1: {
    label: "Working with useEffect",
    href: "#working-with-useeffect",
    children: {
      0: {
        label: "Basic Side Effects",
        href: "#basic-side-effects",
      },
      1: {
        label: "Cleanup Functions",
        href: "#cleanup-functions",
      },
    },
  },
  2: {
    label: "Advanced Patterns",
    href: "#advanced-patterns",
    children: {
      0: {
        label: "Building Custom Hooks",
        href: "#building-custom-hooks",
      },
    },
  },
}

const seriesArticle: Article & {
  imageUrl?: string
  seriesTitle?: string
  authorName?: string
} = {
  ...sampleArticle,
  title: "React Hooks Deep Dive - Part 2",
  slug: { _type: "slug", current: "react-hooks-deep-dive-part-2" },
  seriesTitle: "React Hooks Mastery",
  publishDate: "January 22, 2024",
}

const sampleSeriesOutline: SeriesOutlineItem[] = [
  {
    title: "Part 1: Getting Started with React Hooks",
    slug: "getting-started-react-hooks",
    href: "/blog/getting-started-react-hooks",
    index: 1,
    isCurrent: false,
  },
  {
    title: "Part 2: React Hooks Deep Dive",
    slug: "react-hooks-deep-dive-part-2",
    href: "/blog/react-hooks-deep-dive-part-2",
    index: 2,
    isCurrent: true,
  },
  {
    title: "Part 3: Advanced Hook Patterns",
    slug: "advanced-hook-patterns",
    href: "/blog/advanced-hook-patterns",
    index: 3,
    isCurrent: false,
  },
]

const longArticle: Article & {
  imageUrl?: string
  seriesTitle?: string
  authorName?: string
} = {
  ...sampleArticle,
  title: "The Complete Guide to React Performance Optimization",
  slug: { _type: "slug", current: "complete-guide-react-performance" },
  publishDate: "February 1, 2024",
  summary: [
    {
      _key: "long-summary",
      _type: "block",
      style: "normal",
      markDefs: [],
      children: [
        {
          _key: "long-summary-text",
          _type: "span",
          marks: [],
          text: "A comprehensive exploration of React performance optimization techniques, from basic concepts to advanced patterns."
        }
      ]
    }
  ],
  body: [
    ...Array.from({ length: 8 }, (_, i) => [
      {
        _key: `section-${i + 1}-heading`,
        _type: "block" as const,
        style: "h2" as const,
        markDefs: [] as any[],
        children: [
          {
            _key: `section-${i + 1}-heading-text`,
            _type: "span" as const,
            marks: [] as any[],
            text: `Section ${i + 1}: Performance Topic ${i + 1}`
          }
        ]
      },
      {
        _key: `section-${i + 1}-content`,
        _type: "block" as const,
        style: "normal" as const,
        markDefs: [] as any[],
        children: [
          {
            _key: `section-${i + 1}-content-text`,
            _type: "span" as const,
            marks: [] as any[],
            text: "This section covers important performance optimization techniques that every React developer should know. We'll explore both theoretical concepts and practical implementation strategies."
          }
        ]
      },
      {
        _key: `subsection-${i + 1}-1`,
        _type: "block" as const,
        style: "h3" as const,
        markDefs: [] as any[],
        children: [
          {
            _key: `subsection-${i + 1}-1-text`,
            _type: "span" as const,
            marks: [] as any[],
            text: `Key Concepts for Topic ${i + 1}`
          }
        ]
      },
      {
        _key: `subsection-${i + 1}-1-content`,
        _type: "block" as const,
        style: "normal" as const,
        markDefs: [] as any[],
        children: [
          {
            _key: `subsection-${i + 1}-1-content-text`,
            _type: "span" as const,
            marks: [] as any[],
            text: "Here we dive deep into the fundamental concepts that underpin this performance optimization technique."
          }
        ]
      }
    ]).flat()
  ]
}

const longOutlineItems: { [index: number]: OutlineItem } = Object.fromEntries(
  Array.from({ length: 8 }, (_, i) => [
    i,
    {
      label: `Section ${i + 1}: Performance Topic ${i + 1}`,
      href: `#section-${i + 1}-performance-topic-${i + 1}`,
      children: {
        0: {
          label: `Key Concepts for Topic ${i + 1}`,
          href: `#key-concepts-for-topic-${i + 1}`,
        },
      },
    },
  ])
)

export const Default: Story = {
  args: {
    article: sampleArticle,
    outlineItems: sampleOutlineItems,
    seriesArticlesOutline: [],
  },
  parameters: {
    docs: {
      description: {
        story: "A standard blog post with headings, content, and an outline for navigation.",
      },
    },
  },
}

export const SeriesArticle: Story = {
  args: {
    article: seriesArticle,
    outlineItems: sampleOutlineItems,
    seriesArticlesOutline: sampleSeriesOutline,
  },
  parameters: {
    docs: {
      description: {
        story: "A blog post that is part of a series, showing the series title and navigation in the outline modal.",
      },
    },
  },
}

export const WithoutImage: Story = {
  args: {
    article: {
      ...sampleArticle,
      imageUrl: undefined,
    },
    outlineItems: sampleOutlineItems,
    seriesArticlesOutline: [],
  },
  parameters: {
    docs: {
      description: {
        story: "A blog post without a hero image, showing how the layout adapts.",
      },
    },
  },
}

export const LongArticleWithManyHeadings: Story = {
  args: {
    article: longArticle,
    outlineItems: longOutlineItems,
    seriesArticlesOutline: [],
  },
  parameters: {
    docs: {
      description: {
        story: "A longer article with many sections to test outline generation and scrolling behavior.",
      },
    },
  },
}

export const EmptyOutline: Story = {
  args: {
    article: {
      ...sampleArticle,
      title: "Simple Article",
      body: [
        {
          _key: "simple-content",
          _type: "block",
          style: "normal",
          markDefs: [],
          children: [
            {
              _key: "simple-text",
              _type: "span",
              marks: [],
              text: "This is a simple article with no headings, so there will be no outline to display."
            }
          ]
        }
      ]
    },
    outlineItems: {},
    seriesArticlesOutline: [],
  },
  parameters: {
    docs: {
      description: {
        story: "An article with no headings, resulting in an empty outline.",
      },
    },
  },
}

export const ArticleWithCodeBlocks: Story = {
  args: {
    article: {
      ...sampleArticle,
      title: "Advanced JavaScript Patterns",
      body: [
        {
          _key: "intro",
          _type: "block",
          style: "normal",
          markDefs: [],
          children: [
            {
              _key: "intro-text",
              _type: "span",
              marks: [],
              text: "Let's explore some advanced JavaScript patterns with code examples."
            }
          ]
        },
        {
          _key: "patterns-heading",
          _type: "block",
          style: "h2",
          markDefs: [],
          children: [
            {
              _key: "patterns-heading-text",
              _type: "span",
              marks: [],
              text: "Module Pattern"
            }
          ]
        },
        {
          _key: "module-code",
          _type: "code",
          language: "javascript",
          code: `const myModule = (() => {
  let privateVariable = 0;

  return {
    increment() {
      privateVariable++;
      return privateVariable;
    },
    decrement() {
      privateVariable--;
      return privateVariable;
    },
    getValue() {
      return privateVariable;
    }
  };
})();

console.log(myModule.getValue()); // 0
console.log(myModule.increment()); // 1`
        },
        {
          _key: "observer-heading",
          _type: "block",
          style: "h2",
          markDefs: [],
          children: [
            {
              _key: "observer-heading-text",
              _type: "span",
              marks: [],
              text: "Observer Pattern"
            }
          ]
        },
        {
          _key: "observer-code",
          _type: "code",
          language: "javascript",
          code: `class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(callback => callback(data));
    }
  }
}`
        }
      ]
    },
    outlineItems: {
      0: {
        label: "Module Pattern",
        href: "#module-pattern",
      },
      1: {
        label: "Observer Pattern",
        href: "#observer-pattern",
      },
    },
    seriesArticlesOutline: [],
  },
  parameters: {
    docs: {
      description: {
        story: "An article featuring code blocks with syntax highlighting.",
      },
    },
  },
}

export const ArticleWithImages: Story = {
  args: {
    article: {
      ...sampleArticle,
      title: "Visual Guide to CSS Grid",
      body: [
        {
          _key: "intro",
          _type: "block",
          style: "normal",
          markDefs: [],
          children: [
            {
              _key: "intro-text",
              _type: "span",
              marks: [],
              text: "CSS Grid is a powerful layout system. Let's see it in action with visual examples."
            }
          ]
        },
        {
          _key: "grid-image",
          _type: "image",
          asset: {
            index: 1,
            url: "/demo/css-grid-example.jpg",
            blurImg: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyatGyMyAZQE9bQrSz2MJfHB4MlQJwKUOlZrgtkyB8RzSj/2Q=="
          }
        },
        {
          _key: "basics-heading",
          _type: "block",
          style: "h2",
          markDefs: [],
          children: [
            {
              _key: "basics-heading-text",
              _type: "span",
              marks: [],
              text: "Grid Basics"
            }
          ]
        },
        {
          _key: "basics-content",
          _type: "block",
          style: "normal",
          markDefs: [],
          children: [
            {
              _key: "basics-text",
              _type: "span",
              marks: [],
              text: "CSS Grid provides a two-dimensional layout system, allowing you to work with both rows and columns."
            }
          ]
        }
      ]
    },
    outlineItems: {
      0: {
        label: "Grid Basics",
        href: "#grid-basics",
      },
    },
    seriesArticlesOutline: [],
  },
  parameters: {
    docs: {
      description: {
        story: "An article that includes images within the content body.",
      },
    },
  },
}

export const ShortArticle: Story = {
  args: {
    article: {
      ...sampleArticle,
      title: "Quick Tip: Console Debugging",
      body: [
        {
          _key: "tip",
          _type: "block",
          style: "normal",
          markDefs: [],
          children: [
            {
              _key: "tip-text",
              _type: "span",
              marks: [],
              text: "Use console.table() to display arrays and objects in a readable table format. It's much easier to read than console.log() for complex data structures."
            }
          ]
        },
        {
          _key: "example-code",
          _type: "code",
          language: "javascript",
          code: `const users = [
  { name: 'John', age: 30, city: 'New York' },
  { name: 'Jane', age: 25, city: 'San Francisco' }
];

console.table(users);`
        }
      ]
    },
    outlineItems: {},
    seriesArticlesOutline: [],
  },
  parameters: {
    docs: {
      description: {
        story: "A short article with minimal content, typical of quick tips or brief tutorials.",
      },
    },
  },
}