import { Metadata } from "next";
import ChefTitle from "../_components/ChefTitle";
import RecipeCard from "../_components/RecipeCard";
import { getRecipes } from "../_lib/data-service";

export const metadata: Metadata = {
  title: "Main",
};

// const fakeMains = [
//   {
//     name: "Low Points Slow Cooked Curry",
//     ingredients: "Curry powder sachet, chicken, mushrooms, onions, carrots",
//     method:
//       "Make up the curry powder to instructions, wash and chop the veg, place all in a slow cooker on high for about 6 hours",
//     img: "https://qhlvgfbmjzraangtbtqq.supabase.co/storage/v1/object/public/recipeimages/curry.png",
//   },
//   {
//     name: "Slow Cooked Gravy Chicken",
//     ingredients:
//       "40g gravy powder, chicken, mushrooms, onion, 30g dry green lentils",
//     method:
//       "Make the gravy to instructions, wash and chop the veg and add all to the slow cooker.  Cook on high for about 6 hours",
//   },
// ];

// {
//   name: "Homemade fish and chips",
//   ingredients: "Fish, blah",
//   method: "todo",
// },

async function Page() {
  const recipes = await getRecipes("main");
  return (
    <>
      <ChefTitle>Main 🍛</ChefTitle>
      <RecipeCard recipes={recipes} />
    </>
  );
}

export default Page;
