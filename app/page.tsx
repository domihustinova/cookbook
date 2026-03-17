import RecipeDetailCard from "@/app/components/RecipeDetailCard"
import { recipes } from "@/data/recipes"
import { getCaloriesInfo } from "@/helpers/nutrition"

const Home = () => {
  return (
    <div className="min-h-screen bg-defaultGreen">
      <header className="py-28 text-center sm:py-40">
        <h1 className="font-bold text-5xl sm:text-7xl">
          Hello{" "}
          <span className="bg-linear-to-tr from-teal-700 via-teal-600 to-teal-700 bg-clip-text text-transparent">
            foodie
          </span>{" "}
          👋🏻
        </h1>
        <h2 className="mt-2 font-semibold text-xl">What do you want to cook today?</h2>
      </header>
      <main className="px-4 pb-8">
        <section className="mx-auto max-w-6xl">
          <h2 className="font-semibold text-lg tracking-wide md:text-xl">Recently added</h2>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {recipes.map(({ id, title, category, nutrients, yields }) => (
              <RecipeDetailCard
                key={id}
                id={id}
                title={title}
                category={category}
                caloriesLabel={getCaloriesInfo(nutrients, yields)}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
