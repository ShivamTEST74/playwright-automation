// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,

  // ✅ Retry added
  retries: 1,

  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  // ✅ Global Test Timeout (NEW)
  timeout: 60000, // 👉 60 sec for each test

  // ✅ Global Expect Timeout (NEW)
  expect: {
    timeout: 10000, // 👉 10 sec for assertions
  },

  use: {
    trace: 'on-first-retry',

    // ✅ Screenshot & Video
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    // ✅ Action Timeout (NEW)
    actionTimeout: 30000, // 👉 30 sec for click, fill etc.
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});