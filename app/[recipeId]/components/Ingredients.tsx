"use client"

import { useEffect, useState } from "react"
import { Check } from "@phosphor-icons/react/dist/ssr"

import getIngredientUnitSymbol from "@/helpers/getIngredientUnit"
import { Ingredient } from "@/types/index"

type IngredientsProps = {
  recipeId: string
  ingredients: Ingredient[]
}

const Ingredients = ({ recipeId, ingredients }: IngredientsProps) => {
  const [usedIngredients, setUsedIngredients] = useState<string[]>([])
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    const storedIngredients = localStorage.getItem(`usedIngredients-${recipeId}`)
    if (storedIngredients) {
      setUsedIngredients(JSON.parse(storedIngredients))
    }
    setIsHydrated(true)
  }, [recipeId])

  useEffect(() => {
    // Only save after initial hydration to avoid overwriting with empty array
    if (isHydrated) {
      localStorage.setItem(`usedIngredients-${recipeId}`, JSON.stringify(usedIngredients))
    }
  }, [usedIngredients, recipeId, isHydrated])

  const toggleIngredient = (ingredient: string) => {
    setUsedIngredients(prevUsedIngredients =>
      prevUsedIngredients.includes(ingredient)
        ? prevUsedIngredients.filter(prevUsedIngredient => prevUsedIngredient !== ingredient)
        : [...prevUsedIngredients, ingredient],
    )
  }

  const handleCompleteClick = () => {
    setUsedIngredients(ingredients.map(({ ingredient }) => ingredient))
  }

  const handleResetClick = () => {
    setUsedIngredients([])
  }

  return (
    <section className="mt-6 flex max-w-72 flex-col gap-3 rounded-xl border border-dashed border-green-primary/30 bg-white/60 p-4">
      <h2 className="w-fit bg-brush px-3 text-xl font-semibold text-green-darkest">Ingredients</h2>
      <table className="w-full text-center">
        <tbody>
          {ingredients.map(({ ingredient, amount, ...ingredientData }, index) => {
            const id = `ingredient-${index}`
            const isUsed = usedIngredients.includes(ingredient)
            const unitSymbol = getIngredientUnitSymbol({
              amount,
              ingredient,
              ...ingredientData,
            } as Ingredient)

            return (
              <tr
                key={id}
                className="group cursor-pointer duration-300 hover:text-slate-500"
                onClick={() => toggleIngredient(ingredient)}
              >
                <td
                  className={`pr-2 text-right ${isUsed ? "text-green-primary line-through" : ""} border-r`}
                >
                  {amount}&nbsp;{unitSymbol}
                </td>
                <td
                  className={`pl-2 text-left font-semibold ${isUsed ? "text-green-primary line-through" : ""} flex items-center gap-1`}
                >
                  {ingredient}
                  <span className="inline-flex w-4">
                    {isUsed && <Check data-test="check-icon" />}
                  </span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="mt-2 flex justify-center gap-3 text-xs font-semibold uppercase tracking-wide">
        <button
          type="button"
          className="duration-300 hover:text-green-primary"
          onClick={handleCompleteClick}
        >
          Tap to complete
        </button>
        &#8231;
        <button
          type="button"
          className="duration-300 hover:text-green-primary"
          onClick={handleResetClick}
        >
          Reset
        </button>
      </div>
    </section>
  )
}

export default Ingredients
