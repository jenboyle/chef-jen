import { Metadata } from "next";
import ChefTitle from "../_components/ChefTitle";
import RecipeCard from "../_components/RecipeCard";

export const metadata: Metadata = {
  title: "Starters",
};

const fakeStarters = [
  {
    name: "Carrot and Lentil Soup",
    ingredients: "Carrots, red lentils, blah",
    method: "todo",
  },
  {
    name: "Another Soup",
    ingredients: "veg, blah",
    method: "todo",
  },
  {
    name: "Soup trio",
    ingredients: "Peas, blah",
    method: "todo",
  },
];

function Page() {
  return (
    <>
      <ChefTitle>Starters 🍜</ChefTitle>
      <RecipeCard recipes={fakeStarters} />
    </>
  );
}

export default Page;
