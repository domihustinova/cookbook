import React from "react"

import RecipeDetailCard from "@/app/components/RecipeDetailCard"
import { recipes } from "@/data/recipes"

const Home = () => {
  return (
    <>
      <header className="py-28 text-center sm:py-40">
        <h1 className="text-5xl font-bold sm:text-7xl">
          Hello{" "}
          <span className="bg-gradient-to-tr from-teal-700 via-teal-600 to-teal-700 bg-clip-text text-transparent">
            foodie
          </span>
          👋🏻
        </h1>
        <p className="mt-2 text-xl font-semibold">What do you want to cook today?</p>
      </header>
      <main className="px-4">
        <section className="mx-auto max-w-6xl">
          <h3 className="font-semibold tracking-wide md:text-xl">Recently added</h3>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {recipes.map(recipe => (
              <RecipeDetailCard key={recipe.id} {...recipe} />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
