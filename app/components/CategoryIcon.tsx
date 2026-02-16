import { getCategoryIcon } from "@/helpers/getCategoryIcon"
import type { Category } from "@/types"

type Props = {
  category: Category
}

const CategoryIcon = ({ category }: Props) => {
  return (
    <span className="text-green-dark" role="img" aria-label={category}>
      {getCategoryIcon(category)}
    </span>
  )
}

export default CategoryIcon
