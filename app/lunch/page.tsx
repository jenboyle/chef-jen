import { Metadata } from "next";
import { getRecipes } from "../_lib/data-service";
import ChefTitle from "../_components/ChefTitle";
import RecipeCard from "../_components/RecipeCard";

export const metadata: Metadata = {
  title: "Lunch",
};

async function Page() {
  const recipes = await getRecipes("lunch");
  return (
    <>
      <ChefTitle>Lunch 🍔</ChefTitle>
      <RecipeCard recipes={recipes} />
    </>
  );
}

export default Page;
