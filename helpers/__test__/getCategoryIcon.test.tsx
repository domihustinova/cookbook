import {
  BowlFoodIcon,
  BowlSteamIcon,
  BreadIcon,
  CakeIcon,
  CookieIcon,
  CookingPotIcon,
} from "@phosphor-icons/react/dist/ssr"

import type { Category } from "@/types"

import { getCategoryIcon } from "../getCategoryIcon"

describe("getCategoryIcon", () => {
  it("returns the correct icon for the bread category", () => {
    expect(getCategoryIcon("bread").type).toBe(BreadIcon)
  })

  it("returns the correct icon for the pancake category", () => {
    expect(getCategoryIcon("pancake").type).toBe(CookieIcon)
  })

  it("returns the correct icon for the soup category", () => {
    expect(getCategoryIcon("soup").type).toBe(BowlSteamIcon)
  })

  it("returns the correct icon for the spread category", () => {
    expect(getCategoryIcon("spread").type).toBe(BowlFoodIcon)
  })

  it("returns the correct icon for the pasta category", () => {
    expect(getCategoryIcon("pasta").type).toBe(CookingPotIcon)
  })

  it("returns the correct icon for the cake category", () => {
    expect(getCategoryIcon("cake").type).toBe(CakeIcon)
  })

  it("throws an error for an unknown category", () => {
    expect(() => getCategoryIcon("unknown" as Category)).toThrow("Unknown category: unknown")
  })
})
