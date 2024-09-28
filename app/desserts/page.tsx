import { Metadata } from "next";
import ChefTitle from "../_components/ChefTitle";
import RecipeCard from "../_components/RecipeCard";

export const metadata: Metadata = {
  title: "Desserts",
};

const fakeDesserts = [
  {
    name: "Hidden Goodness Chocolate Buns",
    ingredients: "10g chia seeds, 2 eggs, blah",
    method: "todo",
  },
  {
    name: "Sugar Free Jelly",
    ingredients: "1 sachet jelly , blah",
    method: "todo",
  },
  {
    name: "Shortbread",
    ingredients: "Sugar, blah",
    method: "todo",
  },
];

function Page() {
  return (
    <>
      <ChefTitle>Desserts 🍧</ChefTitle>
      <RecipeCard recipes={fakeDesserts} />
    </>
  );
}

export default Page;
