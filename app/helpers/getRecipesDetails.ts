import { recipes } from "@/data/recipes"
import { RecipeDetail } from "@/types"

const getRecipesDetails = (): RecipeDetail[] => {
  return recipes.map(({ id, category, nutrients, yields, title }) => {
    const { amount, type } = yields
    const { totalKcal } = nutrients

    // Check if amount is zero to avoid division by zero error
    if (amount === 0) {
      throw new Error("Yield amount cannot be zero")
    }

    const recalculatedKcal = Math.floor(totalKcal / amount)

    return {
      category: category,
      title: title,
      caloriesInfo: `${recalculatedKcal} kcal/${type}`,
      href: `/${id}`,
    }
  })
}

export default getRecipesDetails
