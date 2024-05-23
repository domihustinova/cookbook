import { Recipe } from "@/types"

export const mockedRecipes: Pick<Recipe, "id" | "category" | "yields" | "totalKcal" | "title">[] = [
  {
    id: "dummy-recipe1",
    category: "bread",
    yields: { amount: 2, type: "piece" },
    totalKcal: 199,
    title: "title1",
  },
  {
    id: "dummy-recipe2",
    category: "dessert",
    yields: { amount: 3, type: "serving" },
    totalKcal: 1800,
    title: "title2",
  },
  {
    id: "dummy-recipe3",
    category: "main",
    yields: { amount: 3, type: "piece" },
    totalKcal: 400,
    title: "title3",
  },
  {
    id: "dummy-recipe4",
    category: "bread",
    yields: { amount: 1, type: "serving" },
    totalKcal: 700,
    title: "title4",
  },
  {
    id: "dummy-recipe5",
    category: "dessert",
    yields: { amount: 7, type: "piece" },
    totalKcal: 600,
    title: "title5",
  },
]
