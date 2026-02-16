import { BowlFood, Cookie, Grains } from "@phosphor-icons/react/dist/ssr"

import type { Category } from "@/types"

export const getCategoryIcon = (category: Category) => {
  switch (category) {
    case "bread":
      return <Grains size={24} />
    case "dessert":
      return <Cookie size={24} />
    case "main":
      return <BowlFood size={24} />
    default:
      throw new Error(`Unknown category: ${category}`)
  }
}
