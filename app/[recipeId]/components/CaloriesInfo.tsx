"use client"

import { useState } from "react"
import { Drop, Fire, FishSimple, Grains } from "@phosphor-icons/react/dist/ssr"
import { IconProps } from "@phosphor-icons/react"

import { Recipe } from "@/types"
import { getPerUnitValue, isValidYieldAmount } from "@/helpers/nutrition"

type NutrientInfo = {
  Icon: React.ComponentType<IconProps>
  value: number
} & (
  | {
      unit: "kcal"
      label: "total"
    }
  | { unit: "g"; label: "protein" | "carbs" | "fat" }
)

type CaloriesInfoProps = Pick<Recipe, "nutrients" | "yields">

export const NutrientInfo = ({ Icon, value, unit, label }: NutrientInfo) => (
  <div className="flex flex-col items-center" data-test={`nutrient-${label}`}>
    <Icon className="size-6 text-green-primary" />
    <span className="mt-1 text-sm text-green-darkest">
      {value}&nbsp;{unit}
    </span>
    <span className="text-xs text-green-dark">{label}</span>
  </div>
)

const CaloriesInfo = ({ nutrients, yields }: CaloriesInfoProps) => {
  const [isTotal, setIsTotal] = useState(false)

  const { totalKcal, protein, carbs, fat } = nutrients
  const { amount, type } = yields

  const canComputePerUnit = isValidYieldAmount(amount)

  const nutrientInfoData: NutrientInfo[] = [
    { Icon: Fire, value: totalKcal, unit: "kcal", label: "total" },
    { Icon: FishSimple, value: protein, unit: "g", label: "protein" },
    { Icon: Grains, value: carbs, unit: "g", label: "carbs" },
    { Icon: Drop, value: fat, unit: "g", label: "fat" },
  ]

  const handleClick = () => {
    setIsTotal(prevIsTotal => !prevIsTotal)
  }
  return (
    <div className="flex flex-col">
      <button
        // TODO: revisit button role
        aria-label="Toggle nutrient values per total yield or per 1 piece"
        className="grid cursor-pointer grid-cols-4 rounded-xl border border-dashed border-green-primary/30 p-2 duration-300 hover:bg-slate-50"
        onClick={handleClick}
        data-test="calories-info"
      >
        {nutrientInfoData.map(({ Icon, value, ...unitAndLabel }) => (
          <NutrientInfo
            key={unitAndLabel.label}
            Icon={Icon}
            value={!isTotal && canComputePerUnit ? getPerUnitValue(value, amount) : value}
            {...unitAndLabel}
          />
        ))}
      </button>
      <span className="text-sm italic text-slate-500">
        {canComputePerUnit ? (isTotal ? `per ${amount} ${type}s` : `per 1 ${type}`) : "per recipe"}
      </span>
    </div>
  )
}

export default CaloriesInfo
