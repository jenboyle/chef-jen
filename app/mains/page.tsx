import { Metadata } from "next";
import ChefTitle from "../_components/ChefTitle";

export const metadata: Metadata = {
  title: "Mains",
};
function Page() {
  return <ChefTitle>Mains 🍔</ChefTitle>;
}

export default Page;
