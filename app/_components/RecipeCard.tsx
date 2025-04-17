"use client";
import { ChangeEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { IconButton, Tooltip } from "@mui/material";
import { useUser } from "./authentication/useUser";
import AddRecipe from "./AddRecipe";
import Recipe from "./Recipe";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";

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
  const [showVeg, setShowVeg] = useState(false);

  useEffect(() => {
    if (recipes[0] && recipes[0].recipe_type === "main") {
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

  function handleToggleVeggie() {
    setShowVeg(!showVeg);
  }

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value.length > 2) {
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
        <Tooltip title="Vegetarian">
          <span>
            <IconButton onClick={handleToggleVeggie}>
              {showVeg ? (
                <ToggleOnIcon sx={{ color: "green" }} />
              ) : (
                <ToggleOffIcon />
              )}
            </IconButton>
          </span>
        </Tooltip>
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
      {recipesFiltered.map((recipe, index) =>
        showVeg ? (
          recipe.vegetarian ? (
            <Recipe
              key={`${index} ${recipe.name}`}
              recipe={recipe}
              index={index}
              isAuthenticated={isAuthenticated}
            />
          ) : null
        ) : (
          <Recipe
            key={`${index} ${recipe.name}`}
            recipe={recipe}
            index={index}
            isAuthenticated={isAuthenticated}
          />
        )
      )}
    </>
  );
}

export default RecipeCard;
