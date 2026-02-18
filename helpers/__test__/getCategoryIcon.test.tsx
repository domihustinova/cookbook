import { BowlFoodIcon, CookieIcon, GrainsIcon } from "@phosphor-icons/react"

import type { Category } from "@/types"

import { getCategoryIcon } from "../getCategoryIcon"

describe("getCategoryIcon", () => {
  it("returns the correct icon for the bread category", () => {
    expect(getCategoryIcon("bread")).toEqual(<GrainsIcon size={24} />)
  })

  it("returns the correct icon for the dessert category", () => {
    expect(getCategoryIcon("dessert")).toEqual(<CookieIcon size={24} />)
  })

  it("returns the correct icon for the main category", () => {
    expect(getCategoryIcon("main")).toEqual(<BowlFoodIcon size={24} />)
  })

  it("throws an error for an unknown category", () => {
    expect(() => getCategoryIcon("unknown" as Category)).toThrow("Unknown category: unknown")
  })
})
