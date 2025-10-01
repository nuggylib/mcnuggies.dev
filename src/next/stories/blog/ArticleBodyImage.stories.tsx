import React from "react"
import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { ArticleBodyImage } from "../../pages/blog/ArticleBodyImage"

const meta: Meta<typeof ArticleBodyImage> = {
  title: "Pages/Blog/ArticleBodyImage",
  component: ArticleBodyImage,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A responsive image component for displaying images within blog article content. Uses Next.js Image optimization with blur placeholder and responsive sizing.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    imgIndex: {
      control: { type: "number", min: 0, max: 10 },
      description: "Index number for the image, used in alt text generation",
    },
    imgUrl: {
      control: "text",
      description: "The URL of the image to display",
    },
    blurImg: {
      control: "text",
      description: "Base64 encoded blur placeholder image (recommended 10x10 pixels or less)",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Sample blur data URL for a 10x10 pixel image
const sampleBlurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="

export const Default: Story = {
  args: {
    imgIndex: 1,
    imgUrl: "https://picsum.photos/800/600",
    blurImg: sampleBlurDataURL,
  },
  parameters: {
    docs: {
      description: {
        story: "Default article body image with responsive sizing and blur placeholder.",
      },
    },
  },
}

export const LandscapeImage: Story = {
  args: {
    imgIndex: 1,
    imgUrl: "https://picsum.photos/1200/600",
    blurImg: sampleBlurDataURL,
  },
  parameters: {
    docs: {
      description: {
        story: "Wide landscape image that demonstrates responsive scaling.",
      },
    },
  },
}

export const PortraitImage: Story = {
  args: {
    imgIndex: 2,
    imgUrl: "https://picsum.photos/600/900",
    blurImg: sampleBlurDataURL,
  },
  parameters: {
    docs: {
      description: {
        story: "Tall portrait image showing how the component handles different aspect ratios.",
      },
    },
  },
}

export const SquareImage: Story = {
  args: {
    imgIndex: 3,
    imgUrl: "https://picsum.photos/800/800",
    blurImg: sampleBlurDataURL,
  },
  parameters: {
    docs: {
      description: {
        story: "Square image with equal width and height dimensions.",
      },
    },
  },
}

export const HighResolutionImage: Story = {
  args: {
    imgIndex: 4,
    imgUrl: "https://picsum.photos/2400/1600",
    blurImg: sampleBlurDataURL,
  },
  parameters: {
    docs: {
      description: {
        story: "High resolution image demonstrating Next.js Image optimization for large files.",
      },
    },
  },
}

export const MultipleImages: Story = {
  render: () => (
    <div style={{ maxWidth: "800px", display: "flex", flexDirection: "column", gap: "16px" }}>
      <ArticleBodyImage
        imgIndex={1}
        imgUrl="https://picsum.photos/800/400"
        blurImg={sampleBlurDataURL}
      />
      <ArticleBodyImage
        imgIndex={2}
        imgUrl="https://picsum.photos/800/600"
        blurImg={sampleBlurDataURL}
      />
      <ArticleBodyImage
        imgIndex={3}
        imgUrl="https://picsum.photos/800/500"
        blurImg={sampleBlurDataURL}
      />
    </div>
  ),
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Multiple article body images arranged vertically as they would appear in a blog post.",
      },
    },
  },
}

export const WithinArticleContext: Story = {
  render: () => (
    <div style={{ maxWidth: "800px", fontFamily: "system-ui", lineHeight: "1.6" }}>
      <h2>Sample Article Section</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      </p>
      <ArticleBodyImage
        imgIndex={1}
        imgUrl="https://picsum.photos/800/500"
        blurImg={sampleBlurDataURL}
      />
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <ArticleBodyImage
        imgIndex={2}
        imgUrl="https://picsum.photos/800/600"
        blurImg={sampleBlurDataURL}
      />
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </p>
    </div>
  ),
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Article body images shown within the context of article text content, demonstrating how they integrate into blog posts.",
      },
    },
  },
}

export const LoadingState: Story = {
  args: {
    imgIndex: 1,
    imgUrl: "https://picsum.photos/800/600?random=1",
    blurImg: sampleBlurDataURL,
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates the blur placeholder that shows while the main image is loading. The blur effect provides a smooth loading experience.",
      },
    },
  },
}

export const ResponsiveBreakpoints: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div style={{ width: "320px", border: "1px solid #ddd", padding: "16px" }}>
        <h4 style={{ margin: "0 0 8px 0", fontSize: "14px" }}>Mobile (320px)</h4>
        <ArticleBodyImage
          imgIndex={1}
          imgUrl="https://picsum.photos/800/600"
          blurImg={sampleBlurDataURL}
        />
      </div>
      <div style={{ width: "768px", border: "1px solid #ddd", padding: "16px" }}>
        <h4 style={{ margin: "0 0 8px 0", fontSize: "14px" }}>Tablet (768px)</h4>
        <ArticleBodyImage
          imgIndex={2}
          imgUrl="https://picsum.photos/800/600"
          blurImg={sampleBlurDataURL}
        />
      </div>
      <div style={{ width: "1200px", border: "1px solid #ddd", padding: "16px" }}>
        <h4 style={{ margin: "0 0 8px 0", fontSize: "14px" }}>Desktop (1200px)</h4>
        <ArticleBodyImage
          imgIndex={3}
          imgUrl="https://picsum.photos/800/600"
          blurImg={sampleBlurDataURL}
        />
      </div>
    </div>
  ),
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Shows how the component responds to different container widths, demonstrating the responsive nature of the image sizing.",
      },
    },
  },
}