// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require("next/jest")

const createJestConfig = nextJest({
  dir: "./",
})

const config = {
  coverageProvider: "v8",
  collectCoverageFrom: ["app/**/*.{ts,tsx}"],
  coveragePathIgnorePatterns: ["/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts", "jest-extended/all"],
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/", "<rootDir>/public/"],
}

module.exports = createJestConfig(config)
