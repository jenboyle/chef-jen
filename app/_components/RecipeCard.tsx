import Image from "next/image";
import RecipeCardTools from "./RecipeCardTools";

export type recipeType = {
  name: string;
  ingredients: string;
  method: string;
  img?: string;
  points?: string;
  calories?: string;
  readonly: boolean;
};

interface RecipeProps {
  recipes: recipeType[];
}

//or object-scale-down

function RecipeCard({ recipes }: RecipeProps) {
  return recipes.map((recipe, index) => (
    <div className="bg-yellow-100 p-2 m-4" key={`${index} ${recipe.name}`}>
      <h2 className="text-2xl my-5">{recipe.name}</h2>
      <h3 className="text-lg text-ellipsis mb-8 capitalize">
        <span className="font-semibold">Ingredients:</span> {recipe.ingredients}
      </h3>
      <h4 className="text-lg mb-8">
        <span className="font-semibold">Method:</span> {recipe.method}
      </h4>
      <div className="relative h-[130px]">
        {recipe.img ? (
          <Image
            src={recipe.img}
            className="object-left object-contain"
            fill
            alt="temp"
            quality={90}
          ></Image>
        ) : null}
      </div>
      {recipe.points ? (
        <h5 className="text-base my-2">
          <span className="font-semibold">Ww old 🏫 points:</span>{" "}
          {recipe.points}
        </h5>
      ) : null}
      {recipe.calories ? (
        <h6 className="text-base mb-8">
          <span className="font-semibold">Calories:</span> {recipe.calories}
        </h6>
      ) : null}
      <RecipeCardTools isDisabled={recipe.readonly} />
    </div>
  ));
}

export default RecipeCard;
