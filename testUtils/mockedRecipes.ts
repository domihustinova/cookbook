import { Recipe } from "@/types"

export const mockedRecipes: Pick<
  Recipe,
  "id" | "category" | "language" | "amount" | "totalKcal" | "title"
>[] = [
  {
    id: "dummy-recipe1",
    category: "bread",
    language: "czech",
    amount: { count: 2, type: "piece" },
    totalKcal: 199,
    title: "title1",
  },
  {
    id: "dummy-recipe2",
    category: "dessert",
    language: "english",
    amount: { count: 3, type: "piece" },
    totalKcal: 1800,
    title: "title2",
  },
  {
    id: "dummy-recipe3",
    category: "main",
    language: "slovak",
    amount: { count: 3, type: "piece" },
    totalKcal: 400,
    title: "title3",
  },
  {
    id: "dummy-recipe4",
    category: "bread",
    language: "czech",
    amount: { count: 2, type: "serving" },
    totalKcal: 500,
    title: "title4",
  },
  {
    id: "dummy-recipe5",
    category: "dessert",
    language: "english",
    amount: { count: 7, type: "serving" },
    totalKcal: 600,
    title: "title5",
  },
  {
    id: "dummy-recipe6",
    category: "main",
    language: "slovak",
    amount: { count: 1, type: "serving" },
    totalKcal: 700,
    title: "title6",
  },
]
