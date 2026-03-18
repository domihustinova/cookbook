import AxeBuilder from "@axe-core/playwright"
import type { Page, TestInfo } from "@playwright/test"
import type { AxeResults } from "axe-core"
import { createHtmlReport } from "axe-html-reporter"
import { mkdir, writeFile } from "fs/promises"

import { A11Y_TAGS, LIGHTHOUSE_WEIGHTS } from "@/tests/accessibility/support/consts"
import type { IndexData } from "@/tests/accessibility/support/types"

/**
 * Calculates the accessibility score based on Lighthouse weights, passes, and violations.
 * Only counts rules that axe actually evaluated (passes + violations), ignoring unevaluated rules.
 */
function a11yScore(passes: string[], violations: string[]): number {
  const { passWeight, violationWeight } = LIGHTHOUSE_WEIGHTS.reduce(
    (acc, { id, weight }) => {
      if (violations.includes(id)) {
        acc.violationWeight += weight
      } else if (passes.includes(id)) {
        acc.passWeight += weight
      }
      return acc
    },
    { passWeight: 0, violationWeight: 0 },
  )

  const evaluated = passWeight + violationWeight
  if (evaluated === 0) {
    console.warn("No Lighthouse-weighted rules were evaluated.")
    return -1
  }
  return Math.round((passWeight / evaluated) * 100)
}

export function toKebabCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
}

export function generateReportFilename({
  label,
  device,
}: {
  label: string
  device: string
}): string {
  return `${toKebabCase(label)}-${toKebabCase(device)}.html`
}

/**
 * Generates an HTML report with the accessibility scan results and saves it to the public folder.
 */
function generateHtmlReport({
  device,
  accessibilityScanResults,
  score,
  label,
}: {
  device: string
  accessibilityScanResults: AxeResults
  score: number
  label: string
}) {
  const customSummary = `Device: ${device}<br>Score: ${score}<br>Label: ${label}`

  createHtmlReport({
    results: accessibilityScanResults,
    options: {
      reportFileName: generateReportFilename({ label, device }),
      outputDir: "public/reports",
      customSummary,
    },
  })
}

/**
 * Creates an accessibility scan for the given page.
 * Calculates the score based on Lighthouse weights.
 * Generates an HTML report with the results and saves it to public/reports.
 * Returns the index data for the test run to be saved to a JSON file.
 */
export async function checkA11y({
  page,
  testInfo,
  label,
  url,
}: {
  page: Page
  testInfo: TestInfo
  label: string
  url: string
}): Promise<IndexData> {
  const accessibilityScanResults = await new AxeBuilder({ page }).withTags(A11Y_TAGS).analyze()

  await testInfo.attach("accessibility-scan-results", {
    body: JSON.stringify(accessibilityScanResults, null, 2),
    contentType: "application/json",
  })

  const { passes, violations } = accessibilityScanResults
  const passesIds = passes.map((pass: { id: string }) => pass.id)
  const violationsIds = violations.map((violation: { id: string }) => violation.id)
  const score = a11yScore(passesIds, violationsIds)
  if (score < 0) {
    throw new Error("Accessibility score unavailable: no Lighthouse-weighted rules were evaluated.")
  }

  const violationsCount = violations.reduce(
    (acc: number, curr: { nodes: unknown[] }) => acc + curr.nodes.length,
    0,
  )

  const device = testInfo.project.name.replace(/^a11y-/, "")

  generateHtmlReport({ device, accessibilityScanResults, score, label })

  return {
    url,
    device,
    score,
    violations: violationsCount,
    label,
    date: new Date().toISOString(),
  }
}

export async function writeJSON(data: IndexData): Promise<void> {
  const dir = "public/data"
  const filePath = `${dir}/indexData-${toKebabCase(data.label)}-${toKebabCase(data.device)}.json`

  await mkdir(dir, { recursive: true })

  await writeFile(filePath, JSON.stringify(data, null, 2))
}
