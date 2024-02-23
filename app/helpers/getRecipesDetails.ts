import { recipes } from "@/data/recipes"
import { RecipeDetail } from "@/common/types"

const amountOptions = {
  piece: {
    czech: "kus",
    english: "piece",
    slovak: "kus",
  },
  serving: {
    czech: "porce",
    english: "serving",
    slovak: "porcia",
  },
}

export const getRecipesDetails = (): RecipeDetail[] => {
  return recipes.map(({ id, category, language, amount, totalKcal, title }) => {
    const { count, type } = amount
    const recalculatedKcal = Math.floor(totalKcal / count)

    return {
      category: category,
      title: title,
      caloriesInfo: `${recalculatedKcal} kcal/${amountOptions[type][language]}`,
      href: `/${id}`,
    }
  })
}
