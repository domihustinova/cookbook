import { ArrowRightIcon, FireIcon } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"
import CategoryIcon from "@/app/components/CategoryIcon"
import type { RecipeDetail } from "@/types"

const RecipeDetailCard = ({ id, title, category, caloriesLabel }: RecipeDetail) => {
  return (
    <div
      className="cursor-pointer rounded-2xl bg-white p-1 shadow-(--shadow-card)"
      data-test="recipe-card"
    >
      <Link
        href={`/${id}`}
        className="group flex items-center justify-between rounded-xl p-3 duration-300 hover:bg-slate-200"
      >
        <div className="flex items-start gap-3">
          <CategoryIcon category={category} />
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg">{title}</h3>
            <div className="flex items-center gap-1 text-green-dark text-sm">
              <FireIcon size={14} />
              <span>{caloriesLabel}</span>
            </div>
          </div>
        </div>
        <div className="font-medium duration-300 group-hover:translate-x-2">
          <ArrowRightIcon size={22} className="text-green-primary" />
        </div>
      </Link>
    </div>
  )
}

export default RecipeDetailCard
