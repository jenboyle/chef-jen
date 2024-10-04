"use client";
import Image from "next/image";
import RecipeCardTools from "./RecipeCardTools";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export type userType = {
  username: string;
};

export type recipeType = {
  name: string;
  ingredients: string;
  method: string;
  img?: string;
  points?: string;
  calories?: string;
  readonly: boolean;
  recipe_type: string;
  users: userType[];
};

interface RecipeProps {
  recipes: recipeType[];
}

//or object-scale-down

function RecipeCard({ recipes }: RecipeProps) {
  useEffect(() => {
    if (recipes[0].recipe_type === "desserts") {
      toast(
        "New recipes coming soon: Hidden Goodness Chocolate Buns🧁 and Spider🕷️ Biscuits",
        { id: "dessertscomesoon" }
      );
    }
  }, [recipes]);
  return recipes.map((recipe, index) => (
    <div
      className="bg-emerald-50 p-2 m-4 border border-stone-300"
      key={`${index} ${recipe.name}`}
    >
      <Toaster />
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
      {(recipe.users as unknown as userType)!.username ? (
        <p className="text-base mb-2">
          <span className="font-semibold">Created by:</span>{" "}
          {(recipe.users as unknown as userType)!.username}
        </p>
      ) : null}
      <RecipeCardTools isDisabled={recipe.readonly} />
    </div>
  ));
}

export default RecipeCard;
