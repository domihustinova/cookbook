import { render, screen } from "@testing-library/react"

import { mockedRecipes } from "@/testUtils/mockedRecipes"

import Home from "../page"

jest.mock("../../data/recipes.ts", () => ({
  recipes: mockedRecipes,
}))

describe("HomePage", () => {
  beforeEach(() => {
    render(<Home />)
  })

  it("displays the main heading", () => {
    expect(
      screen.getByRole("heading", {
        name: "Hello foodie 👋🏻",
      }),
    ).toBeVisible()
  })

  it("displays the subheading", () => {
    expect(
      screen.getByRole("heading", {
        name: "What do you want to cook today?",
      }),
    ).toBeVisible()
  })

  it("displays the section heading for the recently added recipes", () => {
    expect(
      screen.getByRole("heading", {
        name: "Recently added",
      }),
    ).toBeVisible()
  })

  it("displays 6 recipe cards", () => {
    expect(screen.getAllByRole("link")).toHaveLength(6)
  })
})
