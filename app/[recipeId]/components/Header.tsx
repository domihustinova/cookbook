import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

const Header = () => {
  return (
    <header className="p-4">
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-medium text-green-primary duration-300 hover:text-green-darkest"
      >
        <ArrowLeftIcon size={18} />
        Back to Recipes
      </Link>
    </header>
  )
}

export default Header
