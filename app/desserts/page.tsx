import { Metadata } from "next";
import ChefTitle from "../_components/ChefTitle";
import RecipeCard from "../_components/RecipeCard";
import { getRecipes } from "../_lib/data-service";

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
    name: "Sugar Free Jelly",
    ingredients: "1 sachet jelly",
    method: "Boil the kettle and dissolve the jelly. Leave to set",
    img: "https://qhlvgfbmjzraangtbtqq.supabase.co/storage/v1/object/public/recipeimages/jelly.png",
    points: "0.5 for recipe",
    calories: "32kcal for recipe",
  },
  {
    name: "Marshmallow Top Hats",
    ingredients: "Marshmallows, chocolate, smarties",
    method:
      "Dip a smartie in melted chocolate and place on top of a marshmallow, skip the chocolate base to lower points",
    img: "https://qhlvgfbmjzraangtbtqq.supabase.co/storage/v1/object/public/recipeimages/marsh.jpg",
  },
  {
    name: "Nintendo Shortbread",
    ingredients:
      "50g caster sugar, 100g margarine, 150g plain flour, (optional: icing)",
    method:
      "Mix the sugar and margarine, then add the flour, knead until ready. Roll out and cut with nintendo or other cookie cutter shapes. Bake 12-15 mins. When cooled, top with thin layer of coloured icing, stick with water and icing sugar",
    img: "https://qhlvgfbmjzraangtbtqq.supabase.co/storage/v1/object/public/recipeimages/nintendo_biscuits.png",
    points: "17.5 for shortbread",
  },
];

// {
//   name: "Hidden Goodness Chocolate Buns",
//   ingredients: "10g chia seeds, 2 eggs, blah",
//   method: "todo",
// },

async function Page() {
  const recipesFromsupa = await getRecipes("desserts");
  console.log("here");
  console.log(recipesFromsupa);
  return (
    <>
      <ChefTitle>Desserts 🍧</ChefTitle>
      <RecipeCard recipes={fakeDesserts} />
    </>
  );
}

export default Page;
