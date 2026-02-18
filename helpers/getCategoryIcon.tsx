import { BowlFoodIcon, CookieIcon, GrainsIcon } from "@phosphor-icons/react/dist/ssr"

import type { Category } from "@/types"

export const getCategoryIcon = (category: Category) => {
  switch (category) {
    case "bread":
      return <GrainsIcon size={24} />
    case "dessert":
      return <CookieIcon size={24} />
    case "main":
      return <BowlFoodIcon size={24} />
    default:
      throw new Error(`Unknown category: ${category}`)
  }
}
