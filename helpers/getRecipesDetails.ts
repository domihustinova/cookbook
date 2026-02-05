import { recipes } from "@/data/recipes"
import type { RecipeDetail } from "@/types"

import { getCaloriesInfo } from "./nutrition"

const getRecipesDetails = (): RecipeDetail[] => {
  return recipes.map(({ id, category, nutrients, yields, title }) => ({
    category,
    title,
    caloriesInfo: getCaloriesInfo(nutrients, yields),
    href: `/${id}`,
  }))
}

export default getRecipesDetails
