import { mockedRecipes } from "@/testUtils/mockedRecipes"

import getRecipesDetails from "../getRecipesDetails"

jest.mock("../../../data/recipes.ts", () => ({
  recipes: mockedRecipes,
}))

describe("getRecipesDetails", () => {
  it("returns recipes details with the correct calories info in the correct language", () => {
    const result = getRecipesDetails()

    expect(result).toEqual([
      {
        category: "bread",
        title: "title1",
        caloriesInfo: "99 kcal/piece",
        href: "/dummy-recipe1",
      },
      {
        category: "dessert",
        title: "title2",
        caloriesInfo: "600 kcal/serving",
        href: "/dummy-recipe2",
      },
      {
        category: "main",
        title: "title3",
        caloriesInfo: "133 kcal/piece",
        href: "/dummy-recipe3",
      },
      {
        category: "bread",
        title: "title4",
        caloriesInfo: "700 kcal/serving",
        href: "/dummy-recipe4",
      },
      {
        category: "dessert",
        title: "title5",
        caloriesInfo: "85 kcal/piece",
        href: "/dummy-recipe5",
      },
    ])
  })
})
