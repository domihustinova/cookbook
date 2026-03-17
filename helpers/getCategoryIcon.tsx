import {
  BowlFoodIcon,
  BowlSteamIcon,
  BreadIcon,
  CakeIcon,
  CookieIcon,
  CookingPotIcon,
} from "@phosphor-icons/react/dist/ssr"

import type { Category } from "@/types"

export const getCategoryIcon = (category: Category) => {
  switch (category) {
    case "bread":
      return <BreadIcon size={24} />
    case "spread":
      return <BowlFoodIcon size={24} />
    case "soup":
      return <BowlSteamIcon size={24} />
    case "pasta":
      return <CookingPotIcon size={24} />
    case "cake":
      return <CakeIcon size={24} />
    case "pancake":
      return <CookieIcon size={24} />
    default:
      throw new Error(`Unknown category: ${category}`)
  }
}
