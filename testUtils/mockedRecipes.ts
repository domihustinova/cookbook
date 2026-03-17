import type { Recipe } from "@/types"

export const mockedRecipes: Pick<
  Recipe,
  "id" | "course" | "category" | "nutrients" | "yields" | "title" | "ingredients"
>[] = [
  {
    id: "dummy-recipe1",
    course: ["snack", "breakfast"],
    category: "bread",
    yields: { amount: 2, type: "piece" },
    nutrients: {
      totalKcal: 199,
      protein: 10,
      carbs: 20,
      fat: 30,
    },
    title: "title1",
    ingredients: [
      {
        ingredientId: "flour",
        name: "Flour",
        amount: 200,
        measurement: { unitType: "weight", unit: "grams" },
      },
      {
        ingredientId: "sugar",
        name: "Sugar",
        amount: 100,
        measurement: { unitType: "weight", unit: "grams" },
      },
      {
        ingredientId: "eggs",
        name: "Eggs",
        amount: 2,
        measurement: { unitType: "count", unit: "piece" },
      },
    ],
  },
  {
    id: "dummy-recipe2",
    course: ["dessert"],
    category: "cake",
    yields: { amount: 3, type: "serving" },
    nutrients: {
      totalKcal: 1800,
      protein: 40,
      carbs: 50,
      fat: 60,
    },
    title: "title2",
    ingredients: [
      {
        ingredientId: "flour",
        name: "Flour",
        amount: 200,
        measurement: { unitType: "weight", unit: "grams" },
      },
      {
        ingredientId: "cocoa",
        name: "Cocoa",
        amount: 2,
        measurement: { unitType: "volume", unit: "tablespoon" },
      },
      {
        ingredientId: "eggs",
        name: "Eggs",
        amount: 2,
        measurement: { unitType: "count", unit: "piece" },
      },
    ],
  },
  {
    id: "dummy-recipe3",
    course: ["main"],
    category: "soup",
    yields: { amount: 3, type: "piece" },
    nutrients: {
      totalKcal: 400,
      protein: 30,
      carbs: 40,
      fat: 50,
    },
    title: "title3",
    ingredients: [
      {
        ingredientId: "flour",
        name: "Flour",
        amount: 200,
        measurement: { unitType: "weight", unit: "grams" },
      },
      {
        ingredientId: "sugar",
        name: "Sugar",
        amount: 100,
        measurement: { unitType: "weight", unit: "grams" },
      },
      {
        ingredientId: "milk",
        name: "Milk",
        amount: 500,
        measurement: { unitType: "volume", unit: "millilitre" },
      },
    ],
  },
  {
    id: "dummy-recipe4",
    course: ["snack"],
    category: "bread",
    yields: { amount: 1, type: "serving" },
    nutrients: {
      totalKcal: 700,
      protein: 20,
      carbs: 30,
      fat: 40,
    },
    title: "title4",
    ingredients: [
      {
        ingredientId: "flour",
        name: "Flour",
        amount: 200,
        measurement: { unitType: "weight", unit: "grams" },
      },
      {
        ingredientId: "sugar",
        name: "Sugar",
        amount: 100,
        measurement: { unitType: "weight", unit: "grams" },
      },
      {
        ingredientId: "eggs",
        name: "Eggs",
        amount: 2,
        measurement: { unitType: "count", unit: "piece" },
      },
    ],
  },
  {
    id: "dummy-recipe5",
    course: ["dessert"],
    category: "cake",
    yields: { amount: 7, type: "piece" },
    nutrients: {
      totalKcal: 600,
      protein: 10,
      carbs: 20,
      fat: 30,
    },
    title: "title5",
    ingredients: [
      {
        ingredientId: "flour",
        name: "Flour",
        amount: 200,
        measurement: { unitType: "weight", unit: "grams" },
      },
      {
        ingredientId: "water",
        name: "Water",
        amount: 200,
        measurement: { unitType: "weight", unit: "grams" },
      },
    ],
  },
]
