import { test, expect } from "@playwright/test";

test("visual comparison", async ({ page }) => {
  page.setViewportSize({
    width: 1920,
    height: 1080,
  });
  await page.goto("/");
  await expect(page).toHaveScreenshot(process.env.PLAYWRIGHT_CHROMIUM_SCREENSHOT_PATH as string);
});
