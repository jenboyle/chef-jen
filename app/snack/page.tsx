import { Metadata } from "next";
import { getRecipes } from "../_lib/data-service";
import ChefTitle from "../_components/ChefTitle";
import RecipeCard from "../_components/RecipeCard";

export const metadata: Metadata = {
  title: "Snack",
};

async function Page() {
  const recipes = await getRecipes("snack");
  return (
    <>
      <ChefTitle>Snack 🍩</ChefTitle>
      <RecipeCard recipes={recipes} />
    </>
  );
}

export default Page;
