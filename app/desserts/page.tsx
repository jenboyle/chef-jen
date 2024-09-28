import { Metadata } from "next";
import ChefTitle from "../_components/ChefTitle";

export const metadata: Metadata = {
  title: "Desserts",
};

function Page() {
  return <ChefTitle>Desserts 🍧</ChefTitle>;
}

export default Page;
