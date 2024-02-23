import React from "react"
import Link from "next/link"
import { ArrowRight, Fire } from "@phosphor-icons/react/dist/ssr"

import { RecipeDetail as RecipeDetailCardProps } from "@/common/types"
import CategoryIcon from "@/components/CategoryIcon/CategoryIcon"

const RecipeDetailCard = ({ category, title, caloriesInfo, href }: RecipeDetailCardProps) => {
  return (
    <div className="cursor-pointer rounded-2xl bg-white p-1 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
      <Link
        href={href}
        className="group flex items-center justify-between rounded-xl p-3 duration-300 hover:bg-slate-200"
      >
        <div className="flex items-start gap-3">
          <CategoryIcon category={category} />
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">{title}</h3>
            <div className="flex items-center gap-1 text-sm text-green-dark">
              <Fire size={14} />
              <span>{caloriesInfo}</span>
            </div>
          </div>
        </div>
        <div className="font-medium duration-300 group-hover:translate-x-2">
          <ArrowRight size={22} className="text-green-primary" />
        </div>
      </Link>
    </div>
  )
}

export default RecipeDetailCard
