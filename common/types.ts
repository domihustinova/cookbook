export type Category = "bread" | "dessert" | "main"

export type Language = "czech" | "english" | "slovak"

type Nutrients = {
  protein: number
  carbohydrates: number
  fat: number
}

export type Amount = {
  count: number
  type: "serving" | "piece"
}

type CountUnitType = {
  unitType: "count"
  unit: "piece" | "pinch"
}

type VolumeUnitType = {
  unitType: "volume"
  unit: "teaspoon" | "tablespoon" | "millilitre" | "litre"
}

type WeightUnitType = {
  unitType: "weight"
  unit: "grams" | "kilograms"
}

type Ingredient = {
  amount: string
  ingredient: string
} & (CountUnitType | VolumeUnitType | WeightUnitType)

export type Recipe = {
  id: string
  category: Category
  language: Language
  time?: number
  totalKcal: number
  nutrients: Nutrients
  amount: Amount
  title: string
  ingredients: Ingredient[]
  extraIngredients?: string[]
  instructions: string[]
  notes?: string[]
  credit?: string
}
