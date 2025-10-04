import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import CreatorsGrid from "./CreatorsGrid"

const meta: Meta<typeof CreatorsGrid> = {
  title: "Components/Pages/About/CreatorsGrid",
  component: CreatorsGrid,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "A responsive grid component that displays multiple creator cards. The grid adjusts from 1 column on mobile, to 2 columns on tablets, to 3 columns on larger screens.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    creators: {
      control: "object",
      description: "Array of creator objects to display in the grid",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Sample base64 image for blur placeholder (1x1 pixel transparent PNG)
const sampleBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="

// Sample Portable Text bio structures
const sampleBio1 = [
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

const sampleBio2 = [
  {
    _key: "bio2",
    _type: "block",
    children: [
      {
        _key: "text2",
        _type: "span",
        marks: [],
        text: "Specializing in React and Node.js development with a focus on user experience.",
      },
    ],
    markDefs: [],
    style: "normal",
  },
]

const sampleCreators = [
  {
    _id: "1",
    name: "Armando Vasquez",
    imageUrl: "/mcnuggies.png",
    imageBase64: sampleBase64,
    profession: "Software Engineer",
    bio: sampleBio1,
    githubUrl: "https://github.com/ax-vasquez",
    linkedInUrl: "https://linkedin.com/in/armando-vasquez",
  },
  {
    _id: "2",
    name: "Jane Developer",
    imageUrl: "/mcnuggies.png",
    imageBase64: sampleBase64,
    profession: "Full Stack Developer",
    bio: sampleBio2,
    githubUrl: "https://github.com/jane-dev",
  },
  {
    _id: "3",
    name: "John Coder",
    imageUrl: "/mcnuggies.png",
    imageBase64: sampleBase64,
    profession: "Backend Engineer",
    githubUrl: "https://github.com/john-coder",
    linkedInUrl: "https://linkedin.com/in/john-coder",
  },
]

export const Default: Story = {
  args: {
    creators: sampleCreators,
  },
}

export const SingleCreator: Story = {
  args: {
    creators: [sampleCreators[0]],
  },
}

export const TwoCreators: Story = {
  args: {
    creators: sampleCreators.slice(0, 2),
  },
}
