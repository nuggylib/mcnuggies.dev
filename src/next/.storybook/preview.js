import "../styles/main.scss"
import { sb } from "storybook/test"

// Mock Next.js Link component
sb.mock(import("next/link"))

// Mock the CustomIcon component and react-inlinesvg
sb.mock(import("react-inlinesvg"))

/** @type { import('@storybook/nextjs-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  },
}

export default preview