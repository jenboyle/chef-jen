"use client";
import Image from "next/image";
import RecipeCardTools from "./RecipeCardTools";
import { ChangeEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import RecipeCardTitle from "./RecipeCardTitle";
import RecipeCardIngredients from "./RecipeCardIngredients";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { IconButton, Tooltip } from "@mui/material";
import { useUser } from "./authentication/useUser";
import AddRecipe from "./AddRecipe";

export type userType = {
  username: string;
};

export type recipeType = {
  name: string;
  ingredients: string;
  method: string;
  img?: string;
  bg_img?: string;
  points?: number;
  points_per?: string;
  calories?: number;
  calories_per?: string;
  serves?: number;
  readonly: boolean;
  recipe_type: string;
  vegetarian: boolean;
  vegan?: boolean;
  users: userType[];
};

interface RecipeProps {
  recipes: recipeType[];
}

//or object-scale-down

function RecipeCard({ recipes }: RecipeProps) {
  const [recipesFiltered, setRecipesFiltered] = useState(recipes);
  const { isAuthenticated } = useUser();
  const [openAddRecipe, setOpenAddRecipe] = useState(false);

  useEffect(() => {
    if (recipes[0].recipe_type === "main") {
      toast("More recipes coming soon!", {
        id: "newrecipes",
      });
    }
  }, [recipes]);

  function handleToggleAddRecipe() {
    setOpenAddRecipe(!openAddRecipe);
  }

  function handleCloseAddRecipe() {
    setOpenAddRecipe(false);
  }

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value.length > 2) {
      console.log("perform filter");
      setRecipesFiltered(
        recipes.filter(
          (recipe) =>
            recipe.name.toUpperCase().indexOf(e.target.value.toUpperCase()) !=
              -1 ||
            recipe.ingredients
              .toUpperCase()
              .indexOf(e.target.value.toUpperCase()) != -1 ||
            recipe.method.toUpperCase().indexOf(e.target.value.toUpperCase()) !=
              -1
        )
      );
    } else {
      setRecipesFiltered(recipes);
    }
  }
  //className={`bg-cover bg-center h-screen bg-[url('${recipe.bg_img ? recipe.bg_img : ""}')]`}
  return (
    <>
      <div className="text-right mr-4">
        <Tooltip title="Add Recipe">
          <span>
            <IconButton
              disabled={!isAuthenticated}
              onClick={handleToggleAddRecipe}
            >
              <PostAddIcon />
            </IconButton>
          </span>
        </Tooltip>
        {openAddRecipe ? (
          <AddRecipe open={openAddRecipe} onClose={handleCloseAddRecipe} />
        ) : null}
        <input
          type="text"
          name="search"
          placeholder="🔍 Search..."
          onChange={handleSearch}
          className="p-2 m-2 font-semibold rounded-xl focus:outline-none hover:bg-blue-50 transition-colors duration-200 focus:ring focus:ring-yellow-200 focus:bg-blue-50 focus:ring-offset-2"
        ></input>
      </div>
      {recipesFiltered.map((recipe, index) => (
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
          {recipe.points ? (
            <h5 className="text-base my-2">
              <span className="font-semibold">Ww old 🏫 points: </span>
              <span>
                {recipe.points}{" "}
                {recipe.points_per ? (
                  <span> per {recipe.points_per}</span>
                ) : null}
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
      ))}
    </>
  );
}

export default RecipeCard;
