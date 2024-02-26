import { render, screen } from "@testing-library/react"

import CategoryIcon from "../CategoryIcon"

describe("CategoryIcon", () => {
  it("renders an element with the correct aria label for the main category", () => {
    render(<CategoryIcon category="main" />)

    expect(screen.getByLabelText("main")).toBeVisible()
  })
})
