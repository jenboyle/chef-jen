export type recipeType = {
  name: string;
  ingredients: string;
  method: string;
};

interface RecipeProps {
  recipes: recipeType[];
}

function RecipeCard({ recipes }: RecipeProps) {
  return recipes.map((recipe, index) => (
    <div className="bg-yellow-100" key={`${index} ${recipe.name}`}>
      <h2 className="text-2xl my-5">{recipe.name}</h2>
      <h3 className="text-lg text-ellipsis mb-8">
        Ingredients: {recipe.ingredients}
      </h3>
      <h4 className="text-lg mb-8">Method: {recipe.method}</h4>
    </div>
  ));
}

export default RecipeCard;
