import { Metadata } from "next";
import ChefTitle from "../_components/ChefTitle";
import RecipeCard from "../_components/RecipeCard";

export const metadata: Metadata = {
  title: "Starters",
};

const fakeStarters = [
  {
    name: "Carrot and Lentil Soup",
    ingredients:
      "Carrots, onion, coriander-cumin-mild chilli powders, 150g dried red lentils, stock cube",
    method:
      "Put hot stock in a soup maker, Peel and chop carrots and onion, wash lentils and add all to the soup maker for smooth soup",
    img: "https://qhlvgfbmjzraangtbtqq.supabase.co/storage/v1/object/public/recipeimages/carrotsoup.png",
    points: "7 for recipe",
  },
  {
    name: "Spicy Lentil Soup",
    ingredients:
      "1 carton or tin 400g of chopped tomatoes, 1 chopped onion, 50g red lentils, 1/2 chopped chilli or hot chilli powder, stock",
    method:
      "Add all ingredients to a soup maker and have either smooth or chunky soup",
    points: "4 for recipe",
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
