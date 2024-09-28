import { Metadata } from "next";
import ChefTitle from "../_components/ChefTitle";
import RecipeCard from "../_components/RecipeCard";

export const metadata: Metadata = {
  title: "Mains",
};

export const fakeMains = [
  {
    name: "Low Points Slow Cooked Curry",
    ingredients: "Curry powder, chicken, blah",
    method: "todo",
  },
  {
    name: "Slow cooked gravy",
    ingredients: "40g gravy powder, blah",
    method: "todo",
  },
  {
    name: "Homemade fish and chips",
    ingredients: "Fish, blah",
    method: "todo",
  },
];

function Page() {
  return (
    <>
      <ChefTitle>Mains 🍔</ChefTitle>
      <RecipeCard recipes={fakeMains} />
    </>
  );
}

export default Page;
