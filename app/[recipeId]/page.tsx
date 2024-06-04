import Link from "next/link"
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr"

import { recipes } from "@/data/recipes"

import CaloriesInfo from "./components/CaloriesInfo"

export function generateStaticParams() {
  return recipes.map(recipe => ({
    recipeId: recipe.id,
  }))
}

function getRecipe(params: { recipeId: string }) {
  const recipe = recipes.find(recipe => recipe.id === params.recipeId)

  return recipe
}

const RecipePage = ({ params }: { params: { recipeId: string } }) => {
  const recipe = getRecipe(params)

  if (!recipe) {
    return <h1 className="text-center text-3xl">Recipe not found</h1>
  }

  const { nutrients, yields, title, credit } = recipe

  return (
    <>
      <div className="p-4 md:mx-auto md:max-w-[900px]">
        <h1 className="text-3xl md:text-5xl">{title}</h1>
        {credit && (
          <Link
            href={credit}
            className="inline-flex items-center gap-1 text-green-primary duration-300 hover:text-green-darkest"
            target="_blank"
            rel="noopener noreferrer"
          >
            Original recipe <ArrowUpRight size={18} />
          </Link>
        )}

        <CaloriesInfo nutrients={nutrients} yields={yields} />
      </div>
    </>
  )
}

export default RecipePage
