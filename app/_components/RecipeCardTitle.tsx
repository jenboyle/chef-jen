import Image from "next/image";

interface RecipeCardTitleProps {
  recipeName: string;
  vegetarian: boolean;
}

function RecipeCardTitle({ recipeName, vegetarian }: RecipeCardTitleProps) {
  return (
    <h2 className="text-2xl my-5">
      <span>
        {recipeName}{" "}
        {vegetarian ? (
          <Image
            alt="vegetarian"
            title="vegetarian"
            height="15"
            width="15"
            className="inline"
            src="https://qhlvgfbmjzraangtbtqq.supabase.co/storage/v1/object/public/recipeimages/veg.png"
          ></Image>
        ) : null}
      </span>
    </h2>
  );
}

export default RecipeCardTitle;
