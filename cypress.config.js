const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://gradi-theme-base.myshopify.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
