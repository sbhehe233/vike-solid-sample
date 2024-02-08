import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "e2e",
  reporter: "html",
  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: "http://localhost:3000",

    // Collect trace when retrying the failed test.
    trace: "on-first-retry",
    screenshot: "on",
    headless: true,
  },
  // Run your local dev server before starting the tests
  webServer: {
    command: process.env.USE_NODE? "nx dev:node" : "nx dev",
    // command: "nx dev", // use bun
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    stderr: "pipe",
  },
  projects: [
    /* Test against desktop browsers */
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        launchOptions: {
          executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH
        }
      }
    },
  ],
});
