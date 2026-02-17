import AxeBuilder from "@axe-core/playwright"
import { expect, type Page, type TestInfo, test } from "@playwright/test"
import type { Result } from "axe-core"

const A11Y_TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"]

async function scanAndAttach(page: Page, testInfo: TestInfo, label: string) {
  const results = await new AxeBuilder({ page }).withTags(A11Y_TAGS).analyze()

  await testInfo.attach(`${label} – axe results`, {
    body: JSON.stringify(results, null, 2),
    contentType: "application/json",
  })

  return results
}

function formatViolations(violations: Result[]): string {
  if (violations.length === 0) return "No violations found! 🚀"
  const lines = violations.map(
    v =>
      `[${v.impact?.toUpperCase()}] ${v.id}: ${v.description}\n  Help: ${v.helpUrl}\n  Nodes: ${v.nodes
        .map(n => n.html)
        .join(", ")}`,
  )
  return `\n\n🚩 Accessibility violations found:\n${lines.join("\n\n")}`
}

test.describe("Accessibility", () => {
  test("Recipe search landing page has no violations", async ({ page }, testInfo) => {
    await page.goto("/")
    await page.getByTestId("recipe-card").first().waitFor()

    const results = await scanAndAttach(page, testInfo, "Landing page")
    expect(results.violations, formatViolations(results.violations)).toEqual([])
  })

  test("Recipe detail page has no violations", async ({ page }, testInfo) => {
    await page.goto("/")
    await page.getByTestId("recipe-card").first().click()
    await page.getByTestId("recipe-detail-page").waitFor()

    const results = await scanAndAttach(page, testInfo, "Recipe detail page")
    expect(results.violations, formatViolations(results.violations)).toEqual([])
  })
})
