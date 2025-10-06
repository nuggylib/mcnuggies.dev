import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import CreatorCard from "./CreatorCard"

const meta: Meta<typeof CreatorCard> = {
  title: "Components/Pages/About/CreatorCard",
  component: CreatorCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A creator card component that displays a circular profile image with creator details including name, profession, bio, and social links.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
      description: "The creator's name",
    },
    imageUrl: {
      control: "text",
      description: "The URL or path to the creator's image",
    },
    imageBase64: {
      control: "text",
      description: "Base64 encoded blur placeholder image for smooth loading",
    },
    profession: {
      control: "text",
      description: "The creator's profession or title",
    },
    bio: {
      control: "text",
      description: "A brief biography of the creator",
    },
    githubUrl: {
      control: "text",
      description: "URL to the creator's GitHub profile",
    },
    linkedInUrl: {
      control: "text",
      description: "URL to the creator's LinkedIn profile",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Sample base64 image for blur placeholder (1x1 pixel transparent PNG)
const sampleBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="

// Sample Portable Text bio structure
const sampleBio = [
  {
    _key: "bio1",
    _type: "block",
    children: [
      {
        _key: "text1",
        _type: "span",
        marks: [],
        text: "A passionate developer who loves building web applications and solving complex problems.",
      },
    ],
    markDefs: [],
    style: "normal",
  },
]

export const Default: Story = {
  args: {
    name: "Armando Vasquez",
    imageUrl: "/mcnuggies.png",
    imageBase64: sampleBase64,
    profession: "Software Engineer",
    bio: sampleBio,
    githubUrl: "https://github.com/ax-vasquez",
    linkedInUrl: "https://linkedin.com/in/armando-vasquez",
  },
}

export const WithoutBio: Story = {
  args: {
    name: "Jane Developer",
    imageUrl: "/mcnuggies.png",
    imageBase64: sampleBase64,
    profession: "Full Stack Developer",
    githubUrl: "https://github.com/jane-dev",
  },
}

export const MinimalInfo: Story = {
  args: {
    name: "John Coder",
    imageUrl: "/mcnuggies.png",
    imageBase64: sampleBase64,
  },
}
