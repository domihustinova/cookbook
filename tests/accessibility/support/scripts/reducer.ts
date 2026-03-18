import { readdir, readFile, unlink, writeFile } from "fs/promises"
import path from "path"
import { fileURLToPath } from "url"

import type { IndexData } from "@/tests/accessibility/support/types"

async function mergeJsonFiles(directoryPath = "public/data"): Promise<void> {
  const files = await readdir(directoryPath)

  const jsonFiles = files
    .filter(file => file.startsWith("indexData-") && path.extname(file) === ".json")
    .sort((a, b) => a.localeCompare(b))

  if (jsonFiles.length === 0) {
    throw new Error(`No indexData JSON files found in ${directoryPath}`)
  }

  const contents = await Promise.all(
    jsonFiles.map(async file => {
      const filePath = path.join(directoryPath, file)
      const content = await readFile(filePath, "utf-8")
      try {
        return JSON.parse(content) as IndexData
      } catch (err) {
        throw new Error(`Failed to parse ${filePath}: ${err}`)
      }
    }),
  )

  await writeFile(path.join(directoryPath, "merged.json"), JSON.stringify(contents, null, 2))

  console.log(`Merged ${jsonFiles.length} file(s) into merged.json\n`)

  const unlinkResults = await Promise.allSettled(
    jsonFiles.map(file => unlink(path.join(directoryPath, file))),
  )

  const failures = unlinkResults
    .map((result, i) => ({ result, file: jsonFiles[i] }))
    .filter(({ result }) => result.status === "rejected")

  if (failures.length > 0) {
    for (const { file, result } of failures) {
      console.error(`Failed to remove ${file}: ${(result as PromiseRejectedResult).reason}`)
    }
  } else {
    console.log("Removed source JSON files\n")
  }
}

export { mergeJsonFiles }

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  mergeJsonFiles().catch(err => {
    process.stderr.write(`${err}\n`)
    process.exit(1)
  })
}
