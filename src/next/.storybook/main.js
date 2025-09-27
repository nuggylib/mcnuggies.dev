

import { join, dirname, resolve } from "path"

/**
* This function is used to resolve the absolute path of a package.
* It is needed in projects that use Yarn PnP or are set up within a monorepo.
*/
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, `package.json`)))
}

/** @type { import('@storybook/nextjs-vite').StorybookConfig } */
const config = {
  "stories": [
    `../stories/**/*.mdx`,
    `../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)`,
    `../pages/**/*.stories.@(js|jsx|mjs|ts|tsx)`,
    `../components/**/*.stories.@(js|jsx|mjs|ts|tsx)`
  ],
  "addons": [
    getAbsolutePath(`@chromatic-com/storybook`),
    getAbsolutePath(`@storybook/addon-docs`),
    getAbsolutePath(`@storybook/addon-a11y`),
    getAbsolutePath(`@storybook/addon-vitest`),
    getAbsolutePath(`@storybook/addon-mcp`)
  ],
  "framework": {
    "name": getAbsolutePath(`@storybook/nextjs-vite`),
    "options": {}
  },
  "staticDirs": [
    `../public`
  ],
  "viteFinal": async (config) => {
    // Configure SASS to include the styles directory for imports
    const stylesPath = resolve(__dirname, `../styles`)
    config.css = config.css || {}
    config.css.preprocessorOptions = config.css.preprocessorOptions || {}
    config.css.preprocessorOptions.scss = config.css.preprocessorOptions.scss || {}
    config.css.preprocessorOptions.scss.includePaths = [stylesPath]

    // Also configure the alias for import resolution
    config.resolve = config.resolve || {}
    config.resolve.alias = config.resolve.alias || {}
    config.resolve.alias[`variables`] = resolve(stylesPath, `_variables.scss`)

    return config
  }
}
export default config