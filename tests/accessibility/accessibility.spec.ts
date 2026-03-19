import type { Page, TestInfo } from "@playwright/test"
import { expect, test } from "@playwright/test"

import { checkA11y, writeJSON } from "@/tests/accessibility/support/utils"

async function auditPage({
  page,
  testInfo,
  label,
  url,
}: {
  page: Page
  testInfo: TestInfo
  label: string
  url: string
}): Promise<void> {
  const data = await checkA11y({ page, testInfo, label, url })
  await writeJSON(data)
  expect(data.violations).toBe(0)
}

test.describe("Accessibility", () => {
  test("Recipe search landing page", async ({ page }, testInfo) => {
    await page.goto("/")
    await page.getByTestId("recipe-card").first().waitFor()
    await auditPage({ page, testInfo, label: "landing-page", url: page.url() })
  })

  test("Recipe detail page", async ({ page }, testInfo) => {
    await page.goto("/")
    await page.getByTestId("recipe-card").first().waitFor()
    await page.getByTestId("recipe-card").first().click()
    await page.getByTestId("recipe-detail-page").waitFor()
    await auditPage({ page, testInfo, label: "recipe-detail-page", url: page.url() })
  })
})
