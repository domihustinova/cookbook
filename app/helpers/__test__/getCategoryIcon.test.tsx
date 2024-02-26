import { BowlFood, Cookie, Grains } from "@phosphor-icons/react"

import { Category } from "@/types"

import { getCategoryIcon } from "../getCategoryIcon"

describe("getCategoryIcon", () => {
  it("returns the correct icon for the bread category", () => {
    expect(getCategoryIcon("bread")).toEqual(<Grains size={24} />)
  })

  it("returns the correct icon for the dessert category", () => {
    expect(getCategoryIcon("dessert")).toEqual(<Cookie size={24} />)
  })

  it("returns the correct icon for the main category", () => {
    expect(getCategoryIcon("main")).toEqual(<BowlFood size={24} />)
  })

  it("throws an error for an unknown category", () => {
    expect(() => getCategoryIcon("unknown" as Category)).toThrow("Unknown category: unknown")
  })
})
