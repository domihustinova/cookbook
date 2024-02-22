import React from "react"
import Link from "next/link"
import { ArrowRight, BowlFood, Cookie, Fire, Grains } from "@phosphor-icons/react/dist/ssr"

import { Amount, Category, Language } from "@/common/types"

const categoryIconsAttributes = {
  size: "24",
  className: "text-green-dark",
}

type CategoryIcons = {
  [key in Category]: React.JSX.Element
}

const categoryIcons: CategoryIcons = {
  bread: <Grains {...categoryIconsAttributes} />,
  dessert: <Cookie {...categoryIconsAttributes} />,
  main: <BowlFood {...categoryIconsAttributes} />,
}

const amountOptions = {
  piece: {
    czech: "kus",
    english: "piece",
    slovak: "kus",
  },
  serving: {
    czech: "porce",
    english: "serving",
    slovak: "porcia",
  },
}

type RecipeDetailCardProps = {
  id: string
  category: Category
  language: Language
  totalKcal: number
  amount: Amount
  title: string
}

const RecipeDetailCard = ({
  id,
  category,
  language,
  totalKcal,
  amount,
  title,
}: RecipeDetailCardProps) => {
  const { count, type } = amount

  return (
    <div className="cursor-pointer rounded-2xl bg-white p-1 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
      <Link
        href={`/${id}`}
        className="group flex items-center justify-between rounded-xl p-3 duration-300 hover:bg-slate-200"
      >
        <div className="flex items-start gap-3">
          {categoryIcons[category]}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">{title}</h3>
            <div className="flex items-center gap-1 text-sm text-green-dark">
              <Fire size={14} />
              {Math.floor(totalKcal / count)} kcal/
              {amountOptions[type][language]}
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
