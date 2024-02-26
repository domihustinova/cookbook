import { render, screen } from "@testing-library/react"

import RecipeDetailCard from "../RecipeDetailCard"

describe("RecipeDetailCard", () => {
  beforeEach(() => {
    render(
      <RecipeDetailCard
        category="dessert"
        title="Dummy recipe"
        caloriesInfo="350 kcal/serving"
        href="/dummy-recipe"
      />,
    )
  })

  it("displays the recipe card with the correct link", () => {
    const link = screen.getByRole("link", { name: /dummy recipe/i })

    expect(link).toBeVisible()
    expect(link).toHaveAttribute("href", "/dummy-recipe")
  })

  it("displays the recipe card heading", () => {
    expect(screen.getByRole("heading", { name: "Dummy recipe" })).toBeVisible()
  })

  it("displays the recipe card icon", () => {
    expect(screen.getByLabelText("dessert")).toBeVisible()
  })

  it("displays the calories info", () => {
    expect(screen.getByText("350 kcal/serving")).toBeVisible()
  })
})
