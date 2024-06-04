export type Category = "bread" | "dessert" | "main"

type Nutrients = {
  totalKcal: number
  protein: number
  carbs: number
  fat: number
}

export type Yields = {
  amount: number
  type: "serving" | "piece"
}

export type UnitType = "count" | "volume" | "weight"

export type CountUnit = "piece" | "pinch"

type CountUnitType = {
  unitType: "count"
  unit: CountUnit
}

export type VolumeUnit = "teaspoon" | "tablespoon" | "millilitre" | "litre"

type VolumeUnitType = {
  unitType: "volume"
  unit: VolumeUnit
}

export type WeightUnit = "grams" | "kilograms"

type WeightUnitType = {
  unitType: "weight"
  unit: WeightUnit
}

export type Ingredient = {
  amount: string
  ingredient: string
} & (CountUnitType | VolumeUnitType | WeightUnitType)

export type Recipe = {
  id: string
  category: Category
  time?: number
  nutrients: Nutrients
  yields: Yields
  title: string
  ingredients: Ingredient[]
  extraIngredients?: string[]
  instructions: string[]
  notes?: string[]
  credit?: string
}

export type RecipeDetail = {
  category: Category
  title: string
  caloriesInfo: string
  href: string
}
