import { getCaloriesInfo, getPerUnitValue, isValidYieldAmount } from "../nutrition"

describe("getCaloriesInfo", () => {
  it("returns the correct calories info", () => {
    expect(
      getCaloriesInfo(
        { totalKcal: 100, protein: 10, carbs: 10, fat: 10 },
        { amount: 2, type: "serving" },
      ),
    ).toBe("50 kcal/serving")

    expect(
      getCaloriesInfo(
        { totalKcal: 100, protein: 10, carbs: 10, fat: 10 },
        { amount: 3, type: "piece" },
      ),
    ).toBe("33 kcal/piece")

    expect(
      getCaloriesInfo(
        { totalKcal: 100, protein: 10, carbs: 10, fat: 10 },
        { amount: 1, type: "serving" },
      ),
    ).toBe("100 kcal/serving")

    expect(
      getCaloriesInfo(
        { totalKcal: 100, protein: 10, carbs: 10, fat: 10 },
        { amount: 7, type: "piece" },
      ),
    ).toBe("14 kcal/piece")
  })

  it("returns the correct per unit value", () => {
    expect(getPerUnitValue(100, 2)).toBe(50)
    expect(getPerUnitValue(100, 3)).toBe(33)
    expect(getPerUnitValue(100, 1)).toBe(100)
    expect(getPerUnitValue(100, 7)).toBe(14)
  })

  it("returns the correct yield amount", () => {
    expect(isValidYieldAmount(0)).toBe(false)
    expect(isValidYieldAmount(1)).toBe(true)
    expect(isValidYieldAmount(-1)).toBe(false)
  })
})
