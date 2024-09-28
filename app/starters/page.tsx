import { Metadata } from "next";
import ChefTitle from "../_components/ChefTitle";

export const metadata: Metadata = {
  title: "Starters",
};

function Page() {
  return <ChefTitle>Starters 🍜</ChefTitle>;
}

export default Page;
