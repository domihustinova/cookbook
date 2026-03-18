import { defineConfig, devices } from "@playwright/test"

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

const a11yTestMatch = "**/accessibility/**/*.spec.ts"

const baseUrl = process.env.BASE_URL?.trim() || "http://localhost:3000"

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: "html",
  use: {
    baseURL: baseUrl,
    trace: "retain-on-failure",
    testIdAttribute: "data-test",
    screenshot: "on",
    extraHTTPHeaders: process.env.VERCEL_AUTOMATION_BYPASS_SECRET
      ? { "x-vercel-protection-bypass": process.env.VERCEL_AUTOMATION_BYPASS_SECRET }
      : {},
  },
  projects: [
    {
      name: "a11y-desktop-chrome",
      testMatch: a11yTestMatch,
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "a11y-mobile-safari",
      testMatch: a11yTestMatch,
      use: { ...devices["iPhone 12"] },
    },
  ],
  webServer: process.env.BASE_URL?.trim()
    ? undefined
    : {
        command: "npm run dev",
        url: "http://localhost:3000",
        reuseExistingServer: true,
      },
})
