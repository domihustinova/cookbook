import Header from "./components/Header"

const RecipeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default RecipeLayout
