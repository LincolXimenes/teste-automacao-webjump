const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    ALTERNATIVE_URL: 'https://magento2-demo.magebit.com/',
  },
  fixturesFolder: 'cypress/fixtures',
  video: false,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://magento.nublue.co.uk/',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
    retries: {
      runMode: 2, // Reexecuta até 2x em modo headless
      openMode: 0 // Não reexecuta no modo interativo
    }
  },
})
