import { supabase } from "./supabase";

export async function getRecipes(type) {
  const { data, error } = await supabase
    .from("recipes")
    .select(
      "name, ingredients, method, img, bg_img, points, points_per, calories, calories_per, serves, vegetarian, vegan, recipe_type, readonly, users(username)"
    )
    .eq("recipe_type", type)
    .order("name");

  if (error) {
    console.error(error);
    throw new Error("Unable to retrieve");
  }
  return data;
}
