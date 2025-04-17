"use client";
import Image from "next/image";
import RecipeCardTools from "./RecipeCardTools";
import RecipeCardTitle from "./RecipeCardTitle";
import RecipeCardIngredients from "./RecipeCardIngredients";
import { recipeType, userType } from "./RecipeCard";

interface RecipeProps {
  recipe: recipeType;
  index: number;
  isAuthenticated: boolean;
}

function Recipe({ recipe, index, isAuthenticated }: RecipeProps) {
  return (
    <div
      className="bg-yellow-50 p-2 m-4 border border-stone-300 relative"
      key={`${index} ${recipe.name}`}
    >
      {recipe.bg_img ? (
        <Image
          src={recipe.bg_img}
          className="opacity-10 object-cover"
          fill
          alt={recipe.name}
          quality={70}
        ></Image>
      ) : null}
      <RecipeCardTitle
        recipeName={recipe.name}
        vegetarian={recipe.vegetarian}
      />
      <RecipeCardIngredients ingredients={recipe.ingredients} />
      <h4 className="text-lg mb-8">
        <span className="font-semibold">Method:</span> {recipe.method}
      </h4>
      <div className="w-full relative h-auto">
        {recipe.img ? (
          <Image
            src={recipe.img}
            className="w-4/5 max-w-2xl h-auto !relative"
            alt={recipe.name}
            fill
            quality={90}
          ></Image>
        ) : null}
      </div>
      {recipe.points || recipe.points == 0 ? (
        <h5 className="text-base my-2">
          <span className="font-semibold">Ww old 🏫 points: </span>
          <span>
            {recipe.points}{" "}
            {recipe.points_per ? <span> per {recipe.points_per}</span> : null}
          </span>
        </h5>
      ) : null}
      {recipe.calories ? (
        <h6 className="text-base mb-8">
          <span className="font-semibold">Calories: </span>
          <span>
            {recipe.calories}
            {recipe.calories_per ? (
              <span>kcal per {recipe.calories_per}</span>
            ) : null}
          </span>
        </h6>
      ) : null}
      {recipe.serves ? (
        <p className="text-base mb-2">
          <span className="font-semibold">Serves: </span>
          {recipe.serves}
        </p>
      ) : null}
      {(recipe.users as unknown as userType)!.username ? (
        <p className="text-base mb-2">
          <span className="font-semibold">Created by:</span>{" "}
          {(recipe.users as unknown as userType)!.username}
        </p>
      ) : null}
      <RecipeCardTools isDisabled={!isAuthenticated || recipe.readonly} />
    </div>
  );
}

export default Recipe;
