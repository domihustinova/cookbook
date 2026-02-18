import { DropIcon, FishSimpleIcon } from "@phosphor-icons/react/dist/ssr"
import { render, screen } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"

import type { Nutrients, Yields } from "@/types"

import CaloriesInfo, { NutrientInfo } from "../CaloriesInfo"

describe("CaloriesInfo", () => {
  const nutrients: Nutrients = {
    totalKcal: 500,
    protein: 20,
    carbs: 50,
    fat: 10,
  }

  const yields: Yields = {
    amount: 2,
    type: "serving",
  }

  it("renders all nutrient information", () => {
    render(<CaloriesInfo nutrients={nutrients} yields={yields} />)

    expect(screen.getAllByTestId(/nutrient-/)).toHaveLength(4)
  })

  it("toggles nutrient values on button click", async () => {
    const user = userEvent.setup()

    render(<CaloriesInfo nutrients={nutrients} yields={yields} />)

    expect(screen.getByText("per 1 serving")).toBeVisible()

    expect(screen.getByText("250 kcal")).toBeVisible()
    expect(screen.getByText("10 g")).toBeVisible()
    expect(screen.getByText("25 g")).toBeVisible()
    expect(screen.getByText("5 g")).toBeVisible()

    const button = screen.getByRole("button", {
      name: "Toggle nutrient values per total yield or per 1 piece",
    })
    await user.click(button)

    expect(screen.getByText("per 2 servings")).toBeVisible()

    expect(screen.getByText("500 kcal")).toBeVisible()
    expect(screen.getByText("20 g")).toBeVisible()
    expect(screen.getByText("50 g")).toBeVisible()
    expect(screen.getByText("10 g")).toBeVisible()
  })
})

describe("NutrientInfo", () => {
  it("renders total nutrient information", () => {
    render(<NutrientInfo Icon={DropIcon} value={250} unit="kcal" label="total" />)

    expect(screen.getByTestId(/nutrient-total/)).toBeVisible()
    expect(screen.getByText("250 kcal")).toBeVisible()
  })

  it("renders protein nutrient information", () => {
    render(<NutrientInfo Icon={FishSimpleIcon} value={10} unit="g" label="protein" />)

    expect(screen.getByTestId(/nutrient-protein/)).toBeVisible()
    expect(screen.getByText("10 g")).toBeVisible()
  })
})
