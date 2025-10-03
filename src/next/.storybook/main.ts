

import { StorybookConfig } from "@storybook/nextjs-vite"
import { join, dirname } from "path"

/**
* This function is used to resolve the absolute path of a package.
* It is needed in projects that use Yarn PnP or are set up within a monorepo.
*/
function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, "package.json")))
}

/** @type { import('@storybook/nextjs-vite').StorybookConfig } */
const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../pages/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-vitest"),
    getAbsolutePath("@storybook/addon-mcp")
  ],
  framework: {
    "name": getAbsolutePath("@storybook/nextjs-vite"),
    "options": {}
  },
  staticDirs: [
    "../public"
  ],
  viteFinal: async (config) => {
    config.css = config.css || {}
    config.css.preprocessorOptions = config.css.preprocessorOptions || {}
    config.css.preprocessorOptions.scss = {
      ...config.css.preprocessorOptions.scss,
      loadPaths: [join(__dirname, "../styles")],
    }
    return config
  }
}

export default config
