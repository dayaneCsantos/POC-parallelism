const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "1i5vax",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
