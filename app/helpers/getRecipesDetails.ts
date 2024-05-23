import { recipes } from "@/data/recipes"
import { RecipeDetail } from "@/types"

const getRecipesDetails = (): RecipeDetail[] => {
  return recipes.map(({ id, category, yields, totalKcal, title }) => {
    const { amount, type } = yields
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
