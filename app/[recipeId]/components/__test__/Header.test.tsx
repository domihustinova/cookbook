import { render, screen } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import Link from "next/link"

import Header from "../Header"

jest.mock("next/link", () => jest.fn(({ children, href }) => <a href={href}>{children}</a>))

describe("Header", () => {
  it("renders a link to the recipes page", () => {
    render(<Header />)

    const link = screen.getByRole("link", { name: "Back to Recipes" })

    expect(link).toBeVisible()
    expect(link).toHaveAttribute("href", "/")
  })

  it("redirects to the recipes page when the link is clicked", async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole("link", { name: "Back to Recipes" }))

    expect(Link).toHaveBeenCalledWith(expect.objectContaining({ href: "/" }), expect.anything())
  })
})
