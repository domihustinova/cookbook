import type { Nutrients, Yields } from "@/types"

const isValidYieldAmount = (amount: number): boolean => amount > 0

const getPerUnitValue = (total: number, amount: number): number => {
  if (!isValidYieldAmount(amount)) {
    return total
  }

  return Math.floor(total / amount)
}

const getCaloriesInfo = (nutrients: Nutrients, yields: Yields): string => {
  const { totalKcal } = nutrients
  const { amount, type } = yields

  if (!isValidYieldAmount(amount)) {
    return "Calories info unavailable"
  }

  const perUnit = getPerUnitValue(totalKcal, amount)

  return `${perUnit} kcal/${type}`
}

export { getCaloriesInfo, getPerUnitValue, isValidYieldAmount }
