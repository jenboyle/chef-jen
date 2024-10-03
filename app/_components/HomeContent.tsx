import ChefArticle from "./ChefArticle";
import ChefButtonLink from "./ChefButtonLink";
import ChefTitle from "./ChefTitle";

function HomeContent() {
  //<ChefArticle>Let's get baking.</ChefArticle>
  //Enter
  return (
    <>
      <ChefTitle>Chef Jen 👩🏼‍🍳</ChefTitle>
      <ChefArticle>
        Welcome to Chef de partie 🥳 Jen&apos;s kitchen to share with you some
        culinary 🍽️ recipe delights!
      </ChefArticle>
      <ChefArticle>
        Feast your 👀 on these simple but satisfying meals whilst on any weight
        💪 loss programme.
      </ChefArticle>
      <ChefArticle>
        Chef Jen 👩🏼‍🍳 will take the guess work out of calculating calories and
        points.
      </ChefArticle>
      <ChefArticle>
        With these easy meals you can plan your next meal and good preparation
        is 🔑 to keeping the diet on track!
      </ChefArticle>
      <div className="text-center p-10">
        <ChefButtonLink href="/starters">
          Chef Jen&apos;s 👩🏼‍🍳 Kitchen
        </ChefButtonLink>
      </div>
    </>
  );
}

export default HomeContent;
