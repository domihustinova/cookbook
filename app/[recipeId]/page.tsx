import { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr"

import { recipes } from "@/data/recipes"

import CaloriesInfo from "./components/CaloriesInfo"
import Ingredients from "./components/Ingredients"

export function generateStaticParams() {
  return recipes.map(recipe => ({
    recipeId: recipe.id,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ recipeId: string }>
}): Promise<Metadata> {
  const { recipeId } = await params
  const recipe = recipes.find(recipe => recipe.id === recipeId)

  if (!recipe) {
    return { title: "Recipe not found" }
  }

  return { title: `${recipe.title} | Cookbook` }
}

const RecipePage = ({ params }: { params: { recipeId: string } }) => {
  const recipe = recipes.find(recipe => recipe.id === params.recipeId)

  if (!recipe) {
    return <h1 className="text-center text-3xl">Recipe not found</h1>
  }

  const { nutrients, yields, title, credit, ingredients } = recipe

  return (
    <main className="p-4 md:mx-auto md:max-w-[900px]">
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
      <div className="flex gap-4">
        <div className="flex min-w-72 flex-col gap-4">
          <Ingredients recipeId={params.recipeId} ingredients={ingredients} />
          <CaloriesInfo nutrients={nutrients} yields={yields} />
        </div>
      </div>
    </main>
  )
}

export default RecipePage
