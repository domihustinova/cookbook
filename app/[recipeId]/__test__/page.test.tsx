import { render, screen } from "@testing-library/react"

import { mockedRecipes } from "@/testUtils/mockedRecipes"

import RecipePage from "../page"

jest.mock("../../../data/recipes.ts", () => ({
  recipes: mockedRecipes,
}))

describe("RecipePage", () => {
  test("renders recipe title", () => {
    const params = { recipeId: "dummy-recipe3" }
    render(<RecipePage params={params} />)

    const titleElement = screen.getByText("title3")
    expect(titleElement).toBeInTheDocument()
  })

  test("renders 'Recipe not found' when recipe is not found", () => {
    const params = { recipeId: "non-existent-recipe-id" }
    render(<RecipePage params={params} />)

    const notFoundElement = screen.getByText(/Recipe not found/i)
    expect(notFoundElement).toBeInTheDocument()
  })

  // TODO: Add more tests
})
