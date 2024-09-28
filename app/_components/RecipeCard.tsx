import Image from "next/image";

export type recipeType = {
  name: string;
  ingredients: string;
  method: string;
  img?: string;
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
      {recipe.img ? (
        <Image src={recipe.img} height="130" width="184" alt="temp"></Image>
      ) : null}
    </div>
  ));
}

export default RecipeCard;
