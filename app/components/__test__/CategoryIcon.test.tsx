import { render, screen } from "@testing-library/react"

import CategoryIcon from "../CategoryIcon"

describe("CategoryIcon", () => {
  it("renders an element with the correct aria label for the bread category", () => {
    render(<CategoryIcon category="bread" />)

    expect(screen.getByLabelText("bread")).toBeVisible()
  })
})
