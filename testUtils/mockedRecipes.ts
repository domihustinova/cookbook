import { Recipe } from "@/types"

export const mockedRecipes: Pick<Recipe, "id" | "category" | "nutrients" | "yields" | "title">[] = [
  {
    id: "dummy-recipe1",
    category: "bread",
    yields: { amount: 2, type: "piece" },
    nutrients: {
      totalKcal: 199,
      protein: 10,
      carbs: 20,
      fat: 30,
    },
    title: "title1",
  },
  {
    id: "dummy-recipe2",
    category: "dessert",
    yields: { amount: 3, type: "serving" },
    nutrients: {
      totalKcal: 1800,
      protein: 40,
      carbs: 50,
      fat: 60,
    },
    title: "title2",
  },
  {
    id: "dummy-recipe3",
    category: "main",
    yields: { amount: 3, type: "piece" },
    nutrients: {
      totalKcal: 400,
      protein: 30,
      carbs: 40,
      fat: 50,
    },
    title: "title3",
  },
  {
    id: "dummy-recipe4",
    category: "bread",
    yields: { amount: 1, type: "serving" },
    nutrients: {
      totalKcal: 700,
      protein: 20,
      carbs: 30,
      fat: 40,
    },
    title: "title4",
  },
  {
    id: "dummy-recipe5",
    category: "dessert",
    yields: { amount: 7, type: "piece" },
    nutrients: {
      totalKcal: 600,
      protein: 10,
      carbs: 20,
      fat: 30,
    },
    title: "title5",
  },
]
