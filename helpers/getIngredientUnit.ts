import type { CountUnit, Ingredient, VolumeUnit, WeightUnit } from "@/types"

const countUnit: {
  [key in CountUnit]: {
    singular: string
    plural: string
  }
} = {
  piece: {
    singular: "piece",
    plural: "pieces",
  },
  pinch: {
    singular: "pinch",
    plural: "pinches",
  },
}

const volumeUnit: {
  [key in VolumeUnit]: string
} = {
  teaspoon: "tsp.",
  tablespoon: "tbsp.",
  millilitre: "ml",
  litre: "l",
}

const weightUnit: {
  [key in WeightUnit]: string
} = {
  grams: "g",
  kilograms: "kg",
}

const getIngredientUnitSymbol = (ingredient: Ingredient): string => {
  const { amount, unitType, unit } = ingredient

  switch (unitType) {
    case "count":
      return countUnit[unit][amount === "1" ? "singular" : "plural"]
    case "volume":
      return volumeUnit[unit]
    case "weight":
      return weightUnit[unit]
    default:
      return ""
  }
}

export default getIngredientUnitSymbol
