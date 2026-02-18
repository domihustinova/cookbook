import { render, screen } from "@testing-library/react"

import { mockedRecipes } from "@/testUtils/mockedRecipes"

import RecipePage from "../page"

jest.mock("../../../data/recipes.ts", () => ({
  recipes: mockedRecipes,
}))

describe("RecipePage", () => {
  test("renders recipe title", async () => {
    const params = Promise.resolve({ recipeId: "dummy-recipe3" })
    const jsx = await RecipePage({ params })
    render(jsx)

    const titleElement = screen.getByText("title3")
    expect(titleElement).toBeInTheDocument()
  })

  test("renders 'Recipe not found' when recipe is not found", async () => {
    const params = Promise.resolve({ recipeId: "non-existent-recipe-id" })
    const jsx = await RecipePage({ params })
    render(jsx)

    const notFoundElement = screen.getByText(/Recipe not found/i)
    expect(notFoundElement).toBeInTheDocument()
  })

  // TODO: Replace with Playwright tests
})
