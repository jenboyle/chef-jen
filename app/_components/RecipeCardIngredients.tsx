interface RecipeCardIngredientsProps {
  ingredients: string;
}
function RecipeCardIngredients({ ingredients }: RecipeCardIngredientsProps) {
  return (
    <h3 className="text-lg text-ellipsis mb-8 capitalize">
      <span className="font-semibold">Ingredients: </span>
      {ingredients}
    </h3>
  );
}

export default RecipeCardIngredients;
