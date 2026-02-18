import { render, screen } from "@testing-library/react"
import Header from "../Header"

jest.mock("next/link", () => jest.fn(({ children, href }) => <a href={href}>{children}</a>))

describe("Header", () => {
  it("renders a link to the recipes page", () => {
    render(<Header />)

    const link = screen.getByRole("link", { name: "Back to Recipes" })

    expect(link).toBeVisible()
    expect(link).toHaveAttribute("href", "/")
  })
})
