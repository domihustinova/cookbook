import { fireEvent, render, screen } from "@testing-library/react"

import "@testing-library/jest-dom"
import type { Ingredient } from "@/types/index"

import Ingredients from "../Ingredients"

const mockIngredients: Ingredient[] = [
  { ingredient: "Flour", amount: "200", unitType: "weight", unit: "grams" },
  { ingredient: "Sugar", amount: "100", unitType: "weight", unit: "grams" },
  { ingredient: "Eggs", amount: "2", unitType: "count", unit: "piece" },
]

describe("Ingredients", () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test("renders all ingredients", () => {
    render(<Ingredients recipeId="recipe-1" ingredients={mockIngredients} />)

    expect(screen.getByText("Flour")).toBeInTheDocument()
    expect(screen.getByText("Sugar")).toBeInTheDocument()
    expect(screen.getByText("Eggs")).toBeInTheDocument()
  })

  test("toggles ingredient as used when clicked", () => {
    render(<Ingredients recipeId="recipe-1" ingredients={mockIngredients} />)

    const flourRow = screen.getByText("Flour").closest("tr")

    expect(screen.queryByTestId("check-icon")).not.toBeInTheDocument()

    fireEvent.click(flourRow as Element)

    const checkIcons = screen.getAllByTestId("check-icon")
    expect(checkIcons).toHaveLength(1)
    expect(checkIcons[0]).toBeInTheDocument()
  })

  test("applies line-through and green color to used ingredients", () => {
    render(<Ingredients recipeId="recipe-1" ingredients={mockIngredients} />)

    const flourRow = screen.getByText("Flour").closest("tr")
    const flourAmount = screen.getByText(/200\s+g/)
    const flourName = screen.getByText("Flour")

    expect(flourAmount).not.toHaveClass("line-through")
    expect(flourName).not.toHaveClass("line-through")

    fireEvent.click(flourRow as Element)

    expect(flourAmount).toHaveClass("line-through", "text-green-primary")
    expect(flourName).toHaveClass("line-through", "text-green-primary")
  })

  test('marks all ingredients as complete when "Tap to complete" is clicked', () => {
    render(<Ingredients recipeId="recipe-1" ingredients={mockIngredients} />)

    const completeButton = screen.getByRole("button", { name: "Tap to complete" })
    fireEvent.click(completeButton)

    const checkIcons = screen.getAllByTestId("check-icon")
    expect(checkIcons).toHaveLength(mockIngredients.length)

    expect(screen.getByText("Flour")).toHaveClass("line-through", "text-green-primary")
    expect(screen.getByText("Sugar")).toHaveClass("line-through", "text-green-primary")
    expect(screen.getByText("Eggs")).toHaveClass("line-through", "text-green-primary")
  })

  test('clears all used ingredients when "Reset" is clicked', () => {
    render(<Ingredients recipeId="recipe-1" ingredients={mockIngredients} />)

    const completeButton = screen.getByRole("button", { name: "Tap to complete" })
    fireEvent.click(completeButton)

    expect(screen.getAllByTestId("check-icon")).toHaveLength(mockIngredients.length)

    const resetButton = screen.getByRole("button", { name: "Reset" })

    fireEvent.click(resetButton)

    expect(screen.queryByTestId("check-icon")).not.toBeInTheDocument()
    expect(screen.getByText("Flour")).not.toHaveClass("line-through")
  })

  test("saves used ingredients to localStorage on toggle", () => {
    render(<Ingredients recipeId="recipe-1" ingredients={mockIngredients} />)

    const flourRow = screen.getByText("Flour").closest("tr")
    fireEvent.click(flourRow as Element)

    const stored = localStorage.getItem("usedIngredients-recipe-1")
    expect(stored).toBe(JSON.stringify(["Flour"]))
  })

  test("loads used ingredients from localStorage on mount", () => {
    localStorage.setItem("usedIngredients-recipe-1", JSON.stringify(["Flour", "Sugar"]))

    render(<Ingredients recipeId="recipe-1" ingredients={mockIngredients} />)

    const checkIcons = screen.getAllByTestId("check-icon")
    expect(checkIcons).toHaveLength(2)

    expect(screen.getByText("Flour")).toHaveClass("line-through", "text-green-primary")
    expect(screen.getByText("Sugar")).toHaveClass("line-through", "text-green-primary")
  })

  test("uses recipeId as localStorage key", () => {
    const { unmount } = render(<Ingredients recipeId="recipe-1" ingredients={mockIngredients} />)

    const flourRow = screen.getByText("Flour").closest("tr")
    fireEvent.click(flourRow as Element)

    expect(localStorage.getItem("usedIngredients-recipe-1")).toBe(JSON.stringify(["Flour"]))

    unmount()

    render(<Ingredients recipeId="recipe-2" ingredients={mockIngredients} />)

    expect(screen.queryByTestId("check-icon")).not.toBeInTheDocument()
  })

  test("initializes with empty array when no localStorage data exists", () => {
    render(<Ingredients recipeId="recipe-1" ingredients={mockIngredients} />)

    expect(screen.queryByTestId("check-icon")).not.toBeInTheDocument()
    expect(localStorage.getItem("usedIngredients-recipe-1")).toBe(JSON.stringify([]))
  })

  test("displays ingredient amount and unit symbol correctly", () => {
    render(<Ingredients recipeId="recipe-1" ingredients={mockIngredients} />)

    expect(screen.getByText(/200\s+g/)).toBeInTheDocument()
    expect(screen.getByText(/100\s+g/)).toBeInTheDocument()
    expect(screen.getByText(/2\s+pieces/)).toBeInTheDocument()
  })
})
