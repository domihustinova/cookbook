export type Course = "breakfast" | "main" | "dessert" | "snack"

export type Category = "bread" | "spread" | "soup" | "pasta" | "cake" | "pancake"

export type Nutrients = {
  totalKcal: number
  protein: number
  carbs: number
  fat: number
}

export type Yields = {
  amount: number
  type: "serving" | "piece"
}

export type CountUnit = "piece" | "pinch"

export type VolumeUnit = "teaspoon" | "tablespoon" | "millilitre" | "litre"

export type WeightUnit = "grams" | "kilograms"

export type Measurement =
  | { unitType: "count"; unit: CountUnit }
  | { unitType: "volume"; unit: VolumeUnit }
  | { unitType: "weight"; unit: WeightUnit }

export type Ingredient = {
  amount: number
  name: string
  ingredientId: string
  measurement: Measurement
  note?: string
}

export type Tag = "vegetarian" | "vegan"

export type Recipe = {
  id: string
  title: string
  category: Category
  course: Course[]
  tags?: Tag[]
  time?: number
  nutrients: Nutrients
  yields: Yields
  ingredients: Ingredient[]
  instructions: string[]
  notes?: string[]
  credit?: string
}

export type RecipeDetail = Pick<Recipe, "id" | "title" | "category"> & {
  caloriesLabel: string
}
