import { spawn } from "child_process"
import { rm } from "fs/promises"

async function runScript(script: string): Promise<number> {
  return new Promise(resolve => {
    const proc = spawn("npm", ["run", script], { stdio: "inherit", shell: true })
    proc.on("close", code => resolve(code ?? 1))
  })
}

async function run() {
  await Promise.all([
    rm("public/data", { recursive: true, force: true }),
    rm("public/reports", { recursive: true, force: true }),
    rm("public/index.html", { force: true }),
  ])

  const a11yCode = await runScript("pw:a11y")

  // Always run reducer and htmlIndex regardless of test outcome so the report
  // is generated and viewable even when there are violations or test failures.
  const reducerCode = await runScript("reducer")
  const htmlIndexCode = await runScript("htmlIndex")

  if (reducerCode !== 0) {
    console.error(`reducer failed with code ${reducerCode}`)
  }
  if (htmlIndexCode !== 0) {
    console.error(`htmlIndex failed with code ${htmlIndexCode}`)
  }

  process.exit(a11yCode)
}

run().catch(err => {
  console.error(err)
  process.exit(1)
})
