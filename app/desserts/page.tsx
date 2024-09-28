import { Metadata } from "next";
import ChefTitle from "../_components/ChefTitle";
import RecipeCard from "../_components/RecipeCard";

export const metadata: Metadata = {
  title: "Desserts",
};

const fakeDesserts = [
  {
    name: "Halloween Boo Cake",
    ingredients: "Shop bought white cake, black and red icing pens",
    method: "Draw the boo on top of the cake with icing pens",
    img: "https://qhlvgfbmjzraangtbtqq.supabase.co/storage/v1/object/public/recipeimages/boo.png",
  },
  {
    name: "Hidden Goodness Chocolate Buns",
    ingredients: "10g chia seeds, 2 eggs, blah",
    method: "todo",
  },
  {
    name: "Sugar Free Jelly",
    ingredients: "1 sachet jelly, blah",
    method: "todo",
  },
  {
    name: "Marshmallow Top Hats",
    ingredients: "Marshmallows, chocolate, smarties",
    method:
      "Dip a smartie in melted chocolate and place on top of a marshmallow",
    img: "https://qhlvgfbmjzraangtbtqq.supabase.co/storage/v1/object/public/recipeimages/marsh.jpg",
  },
  {
    name: "Nintendo Shortbread",
    ingredients: "Sugar, blah",
    method: "todo",
    img: "https://qhlvgfbmjzraangtbtqq.supabase.co/storage/v1/object/public/recipeimages/nintendo_biscuits.png",
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
