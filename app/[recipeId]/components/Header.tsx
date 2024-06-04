import Link from "next/link"
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr"

const Header = () => {
  return (
    <header className="p-4">
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-medium text-green-primary duration-300 hover:text-green-darkest"
      >
        <ArrowLeft size={18} />
        Back to Recipes
      </Link>
    </header>
  )
}

export default Header
