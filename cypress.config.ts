import { defineConfig } from 'cypress'

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
    specPattern: 'src/**/*.test.{ts,tsx}',
    indexHtmlFile: 'cypress/support/component-index.html',
    video: false,
    screenshotOnRunFailure: false,
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      return config
    },
  },
})
